



# $sce


* [$sceProvider](api/angular/provider/$sceProvider)








`$sce` is a service that provides Strict Contextual Escaping services to AngularJS.

# Strict Contextual Escaping

Strict Contextual Escaping (SCE) is a mode in which AngularJS requires bindings in certain
contexts to result in a value that is marked as safe to use for that context.  One example of
such a context is binding arbitrary html controlled by the user via `ng-bind-html`.  We refer
to these contexts as privileged or SCE contexts.

As of version 1.2, Angular ships with SCE enabled by default.

Note:  When enabled (the default), IE8 in quirks mode is not supported.  In this mode, IE8 allows
one to execute arbitrary javascript by the use of the expression() syntax.  Refer
<http://blogs.msdn.com/b/ie/archive/2008/10/16/ending-expressions.aspx> to learn more about them.
You can ensure your document is in standards mode and not quirks mode by adding `<!doctype html>`
to the top of your HTML document.

SCE assists in writing code in way that (a) is secure by default and (b) makes auditing for
security vulnerabilities such as XSS, clickjacking, etc. a lot easier.

Here's an example of a binding in a privileged context:

```
<input ng-model="userHtml">
<div ng-bind-html="userHtml"></div>
```

Notice that `ng-bind-html` is bound to `userHtml` controlled by the user.  With SCE
disabled, this application allows the user to render arbitrary HTML into the DIV.
In a more realistic example, one may be rendering user comments, blog articles, etc. via
bindings.  (HTML is just one example of a context where rendering user controlled input creates
security vulnerabilities.)

For the case of HTML, you might use a library, either on the client side, or on the server side,
to sanitize unsafe HTML before binding to the value and rendering it in the document.

How would you ensure that every place that used these types of bindings was bound to a value that
was sanitized by your library (or returned as safe for rendering by your server?)  How can you
ensure that you didn't accidentally delete the line that sanitized the value, or renamed some
properties/fields and forgot to update the binding to the sanitized value?

To be secure by default, you want to ensure that any such bindings are disallowed unless you can
determine that something explicitly says it's safe to use a value for binding in that
context.  You can then audit your code (a simple grep would do) to ensure that this is only done
for those values that you can easily tell are safe - because they were received from your server,
sanitized by your library, etc.  You can organize your codebase to help with this - perhaps
allowing only the files in a specific directory to do this.  Ensuring that the internal API
exposed by that code doesn't markup arbitrary values as safe then becomes a more manageable task.

In the case of AngularJS' SCE service, one uses $sce.trustAs
(and shorthand methods such as $sce.trustAsHtml, etc.) to
obtain values that will be accepted by SCE / privileged contexts.


## How does it work?

In privileged contexts, directives and code will bind to the result of $sce.getTrusted(context, value) rather than to the value directly.  Directives use $sce.parseAs rather than `$parse` to watch attribute bindings, which performs the
$sce.getTrusted behind the scenes on non-constant literals.

As an example, ngBindHtml uses $sce.parseAsHtml(binding expression).  Here's the actual code (slightly
simplified):

```
var ngBindHtmlDirective = ['$sce', function($sce) {
  return function(scope, element, attr) {
    scope.$watch($sce.parseAsHtml(attr.ngBindHtml), function(value) {
      element.html(value || '');
    });
  };
}];
```

## Impact on loading templates

This applies both to the `ng-include` directive as well as
`templateUrl`'s specified by (directives)[guide/directive].

By default, Angular only loads templates from the same domain and protocol as the application
document.  This is done by calling $sce.getTrustedResourceUrl on the template URL.  To load templates from other domains and/or
protocols, you may either either whitelist
them or wrap it into a trusted value.

*Please note*:
The browser's
[Same Origin Policy](https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_XMLHttpRequest)
and [Cross-Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/)
policy apply in addition to this and may further restrict whether the template is successfully
loaded.  This means that without the right CORS policy, loading templates from a different domain
won't work on all browsers.  Also, loading templates from `file://` URL does not work on some
browsers.

## This feels like too much overhead for the developer?

It's important to remember that SCE only applies to interpolation expressions.

If your expressions are constant literals, they're automatically trusted and you don't need to
call `$sce.trustAs` on them (remember to include the `ngSanitize` module) (e.g.
`<div ng-bind-html="'<b>implicitly trusted</b>'"></div>`) just works.

Additionally, `a[href]` and `img[src]` automatically sanitize their URLs and do not pass them
through $sce.getTrusted.  SCE doesn't play a role here.

The included $sceDelegate comes with sane defaults to allow you to load
templates in `ng-include` from your application's domain without having to even know about SCE.
It blocks loading templates from other domains or loading templates over http from an https
served document.  You can change these by setting your own custom whitelists and blacklists for matching such URLs.

This significantly reduces the overhead.  It is far easier to pay the small overhead and have an
application that's secure and can be audited to verify that with much more ease than bolting
security onto an application later.

<a name="contexts"></a>
## What trusted context types are supported?

| Context             | Notes          |
|---------------------|----------------|
| `$sce.HTML`         | For HTML that's safe to source into the application.  The ngBindHtml directive uses this context for bindings. If an unsafe value is encountered and the $sanitize module is present this will sanitize the value instead of throwing an error. |
| `$sce.CSS`          | For CSS that's safe to source into the application.  Currently unused.  Feel free to use it in your own directives. |
| `$sce.URL`          | For URLs that are safe to follow as links.  Currently unused (`<a href=` and `<img src=` sanitize their urls and don't constitute an SCE context. |
| `$sce.RESOURCE_URL` | For URLs that are not only safe to follow as links, but whose contents are also safe to include in your application.  Examples include `ng-include`, `src` / `ngSrc` bindings for tags other than `IMG` (e.g. `IFRAME`, `OBJECT`, etc.)  <br><br>Note that `$sce.RESOURCE_URL` makes a stronger statement about the URL than `$sce.URL` does and therefore contexts requiring values trusted for `$sce.RESOURCE_URL` can be used anywhere that values trusted for `$sce.URL` are required. |
| `$sce.JS`           | For JavaScript that is safe to execute in your application's context.  Currently unused.  Feel free to use it in your own directives. |

## Format of items in resourceUrlWhitelist/Blacklist <a name="resourceUrlPatternItem"></a>

 Each element in these arrays must be one of the following:

 - **'self'**
   - The special **string**, `'self'`, can be used to match against all URLs of the **same
     domain** as the application document using the **same protocol**.
 - **String** (except the special value `'self'`)
   - The string is matched against the full *normalized / absolute URL* of the resource
     being tested (substring matches are not good enough.)
   - There are exactly **two wildcard sequences** - `*` and `**`.  All other characters
     match themselves.
   - `*`: matches zero or more occurrences of any character other than one of the following 6
     characters: '`:`', '`/`', '`.`', '`?`', '`&`' and ';'.  It's a useful wildcard for use
     in a whitelist.
   - `**`: matches zero or more occurrences of *any* character.  As such, it's not
     not appropriate to use in for a scheme, domain, etc. as it would match too much.  (e.g.
     http://**.example.com/ would match http://evil.com/?ignore=.example.com/ and that might
     not have been the intention.)  Its usage at the very end of the path is ok.  (e.g.
     http://foo.example.com/templates/**).
 - **RegExp** (*see caveat below*)
   - *Caveat*:  While regular expressions are powerful and offer great flexibility,  their syntax
     (and all the inevitable escaping) makes them *harder to maintain*.  It's easy to
     accidentally introduce a bug when one updates a complex expression (imho, all regexes should
     have good test coverage.).  For instance, the use of `.` in the regex is correct only in a
     small number of cases.  A `.` character in the regex used when matching the scheme or a
     subdomain could be matched against a `:` or literal `.` that was likely not intended.   It
     is highly recommended to use the string patterns and only fall back to regular expressions
     if they as a last resort.
   - The regular expression must be an instance of RegExp (i.e. not a string.)  It is
     matched against the **entire** *normalized / absolute URL* of the resource being tested
     (even when the RegExp did not have the `^` and `$` codes.)  In addition, any flags
     present on the RegExp (such as multiline, global, ignoreCase) are ignored.
   - If you are generating your JavaScript from some other templating engine (not
     recommended, e.g. in issue [#4006](https://github.com/angular/angular.js/issues/4006)),
     remember to escape your regular expression (and be aware that you might need more than
     one level of escaping depending on your templating engine and the way you interpolated
     the value.)  Do make use of your platform's escaping mechanism as it might be good
     enough before coding your own.  e.g. Ruby has
     [Regexp.escape(str)](http://www.ruby-doc.org/core-2.0.0/Regexp.html#method-c-escape)
     and Python has [re.escape](http://docs.python.org/library/re.html#re.escape).
     Javascript lacks a similar built in function for escaping.  Take a look at Google
     Closure library's [goog.string.regExpEscape(s)](
     http://docs.closure-library.googlecode.com/git/closure_goog_string_string.js.source.html#line962).

Refer $sceDelegateProvider for an example.

## Show me an example using SCE.

<example module="mySceApp" deps="angular-sanitize.js">
<file name="index.html">
  <div ng-controller="myAppController as myCtrl">
    <i ng-bind-html="myCtrl.explicitlyTrustedHtml" id="explicitlyTrustedHtml"></i><br><br>
    <b>User comments</b><br>
    By default, HTML that isn't explicitly trusted (e.g. Alice's comment) is sanitized when
    $sanitize is available.  If $sanitize isn't available, this results in an error instead of an
    exploit.
    <div class="well">
      <div ng-repeat="userComment in myCtrl.userComments">
        <b>{{userComment.name}}</b>:
        <span ng-bind-html="userComment.htmlComment" class="htmlComment"></span>
        <br>
      </div>
    </div>
  </div>
</file>

<file name="script.js">
  var mySceApp = angular.module('mySceApp', ['ngSanitize']);

  mySceApp.controller("myAppController", function myAppController($http, $templateCache, $sce) {
    var self = this;
    $http.get("test_data.json", {cache: $templateCache}).success(function(userComments) {
      self.userComments = userComments;
    });
    self.explicitlyTrustedHtml = $sce.trustAsHtml(
        '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
        'sanitization.&quot;">Hover over this text.</span>');
  });
</file>

<file name="test_data.json">
[
  { "name": "Alice",
    "htmlComment":
        "<span onmouseover='this.textContent=\"PWN3D!\"'>Is <i>anyone</i> reading this?</span>"
  },
  { "name": "Bob",
    "htmlComment": "<i>Yes!</i>  Am I the only other one?"
  }
]
</file>

<file name="protractor.js" type="protractor">
  describe('SCE doc demo', function() {
    it('should sanitize untrusted values', function() {
      expect(element.all(by.css('.htmlComment')).first().getInnerHtml())
          .toBe('<span>Is <i>anyone</i> reading this?</span>');
    });

    it('should NOT sanitize explicitly trusted values', function() {
      expect(element(by.id('explicitlyTrustedHtml')).getInnerHtml()).toBe(
          '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
          'sanitization.&quot;">Hover over this text.</span>');
    });
  });
</file>
</example>



## Can I disable SCE completely?

Yes, you can.  However, this is strongly discouraged.  SCE gives you a lot of security benefits
for little coding overhead.  It will be much harder to take an SCE disabled application and
either secure it on your own or enable SCE at a later stage.  It might make sense to disable SCE
for cases where you have a lot of existing code that was written before SCE was introduced and
you're migrating them a module at a time.

That said, here's how you can completely disable SCE:

```
angular.module('myAppWithSceDisabledmyApp', []).config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
});
```







  

## Usage
```js
$sce();
```








## Methods
### isEnabled
Returns a boolean indicating if SCE is enabled.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Boolean | <p>true if SCE is enabled, false otherwise.  If you want to set the value, you have to do it at module config time on $sceProvider.</p>  |




### parseAs
Converts Angular (expression)[guide/expression] into a function.  This is like $parse and is identical when the expression is a literal constant.  Otherwise, it
wraps the expression in a call to $sce.getTrusted(*type*,
*result*)


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| type | string | <p>The kind of SCE context in which this result will be used.</p>  |
| expression | string | <p>String expression to compile.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function(context, locals) | <p>a function which represents the compiled expression:</p> <ul> <li><code>context</code> – <code>{object}</code> – an object against which any expressions embedded in the strings are evaluated against (typically a scope object).</li> <li><code>locals</code> – <code>{object=}</code> – local variables context object, useful for overriding values in <code>context</code>.</li> </ul>  |




### trustAs
Delegates to `$sceDelegate.trustAs`.  As such,
returns an object that is trusted by angular for use in specified strict contextual
escaping contexts (such as ng-bind-html, ng-include, any src attribute
interpolation, any dom event binding attribute interpolation such as for onclick,  etc.)
that uses the provided value.  See * $sce for enabling strict contextual
escaping.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| type | string | <p>The kind of context in which this value is safe for use.  e.g. url, resource_url, html, js and css.</p>  |
| value | * | <p>The value that that should be considered trusted/safe.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>A value that can be used to stand in for the provided <code>value</code> in places where Angular expects a $sce.trustAs() return value.</p>  |




### trustAsHtml
Shorthand method.  `$sce.trustAsHtml(value)` →
    `$sceDelegate.trustAs($sce.HTML, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The value to trustAs.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>An object that can be passed to $sce.getTrustedHtml(value) to obtain the original value.  (privileged directives only accept expressions that are either literal constants or are the return value of $sce.trustAs.)</p>  |




### trustAsUrl
Shorthand method.  `$sce.trustAsUrl(value)` →
    `$sceDelegate.trustAs($sce.URL, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The value to trustAs.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>An object that can be passed to $sce.getTrustedUrl(value) to obtain the original value.  (privileged directives only accept expressions that are either literal constants or are the return value of $sce.trustAs.)</p>  |




### trustAsResourceUrl
Shorthand method.  `$sce.trustAsResourceUrl(value)` →
    `$sceDelegate.trustAs($sce.RESOURCE_URL, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The value to trustAs.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>An object that can be passed to $sce.getTrustedResourceUrl(value) to obtain the original value.  (privileged directives only accept expressions that are either literal constants or are the return value of $sce.trustAs.)</p>  |




### trustAsJs
Shorthand method.  `$sce.trustAsJs(value)` →
    `$sceDelegate.trustAs($sce.JS, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The value to trustAs.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>An object that can be passed to $sce.getTrustedJs(value) to obtain the original value.  (privileged directives only accept expressions that are either literal constants or are the return value of $sce.trustAs.)</p>  |




### getTrusted
Delegates to `$sceDelegate.getTrusted`.  As such,
takes the result of a `$sce.trustAs`() call and returns the
originally supplied value if the queried context type is a supertype of the created type.
If this condition isn't satisfied, throws an exception.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| type | string | <p>The kind of context in which this value is to be used.</p>  |
| maybeTrusted | * | <p>The result of a prior <code>$sce.trustAs</code> call.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The value the was originally provided to <code>$sce.trustAs</code> if valid in this context. Otherwise, throws an exception.</p>  |




### getTrustedHtml
Shorthand method.  `$sce.getTrustedHtml(value)` →
    `$sceDelegate.getTrusted($sce.HTML, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The value to pass to <code>$sce.getTrusted</code>.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The return value of <code>$sce.getTrusted($sce.HTML, value)</code></p>  |




### getTrustedCss
Shorthand method.  `$sce.getTrustedCss(value)` →
    `$sceDelegate.getTrusted($sce.CSS, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The value to pass to <code>$sce.getTrusted</code>.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The return value of <code>$sce.getTrusted($sce.CSS, value)</code></p>  |




### getTrustedUrl
Shorthand method.  `$sce.getTrustedUrl(value)` →
    `$sceDelegate.getTrusted($sce.URL, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The value to pass to <code>$sce.getTrusted</code>.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The return value of <code>$sce.getTrusted($sce.URL, value)</code></p>  |




### getTrustedResourceUrl
Shorthand method.  `$sce.getTrustedResourceUrl(value)` →
    `$sceDelegate.getTrusted($sce.RESOURCE_URL, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The value to pass to <code>$sceDelegate.getTrusted</code>.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The return value of <code>$sce.getTrusted($sce.RESOURCE_URL, value)</code></p>  |




### getTrustedJs
Shorthand method.  `$sce.getTrustedJs(value)` →
    `$sceDelegate.getTrusted($sce.JS, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The value to pass to <code>$sce.getTrusted</code>.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The return value of <code>$sce.getTrusted($sce.JS, value)</code></p>  |




### parseAsHtml
Shorthand method.  `$sce.parseAsHtml(expression string)` →
    `$sce.parseAs($sce.HTML, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| expression | string | <p>String expression to compile.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function(context, locals) | <p>a function which represents the compiled expression:</p> <ul> <li><code>context</code> – <code>{object}</code> – an object against which any expressions embedded in the strings are evaluated against (typically a scope object).</li> <li><code>locals</code> – <code>{object=}</code> – local variables context object, useful for overriding values in <code>context</code>.</li> </ul>  |




### parseAsCss
Shorthand method.  `$sce.parseAsCss(value)` →
    `$sce.parseAs($sce.CSS, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| expression | string | <p>String expression to compile.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function(context, locals) | <p>a function which represents the compiled expression:</p> <ul> <li><code>context</code> – <code>{object}</code> – an object against which any expressions embedded in the strings are evaluated against (typically a scope object).</li> <li><code>locals</code> – <code>{object=}</code> – local variables context object, useful for overriding values in <code>context</code>.</li> </ul>  |




### parseAsUrl
Shorthand method.  `$sce.parseAsUrl(value)` →
    `$sce.parseAs($sce.URL, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| expression | string | <p>String expression to compile.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function(context, locals) | <p>a function which represents the compiled expression:</p> <ul> <li><code>context</code> – <code>{object}</code> – an object against which any expressions embedded in the strings are evaluated against (typically a scope object).</li> <li><code>locals</code> – <code>{object=}</code> – local variables context object, useful for overriding values in <code>context</code>.</li> </ul>  |




### parseAsResourceUrl
Shorthand method.  `$sce.parseAsResourceUrl(value)` →
    `$sce.parseAs($sce.RESOURCE_URL, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| expression | string | <p>String expression to compile.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function(context, locals) | <p>a function which represents the compiled expression:</p> <ul> <li><code>context</code> – <code>{object}</code> – an object against which any expressions embedded in the strings are evaluated against (typically a scope object).</li> <li><code>locals</code> – <code>{object=}</code> – local variables context object, useful for overriding values in <code>context</code>.</li> </ul>  |




### parseAsJs
Shorthand method.  `$sce.parseAsJs(value)` →
    `$sce.parseAs($sce.JS, value)`


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| expression | string | <p>String expression to compile.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function(context, locals) | <p>a function which represents the compiled expression:</p> <ul> <li><code>context</code> – <code>{object}</code> – an object against which any expressions embedded in the strings are evaluated against (typically a scope object).</li> <li><code>locals</code> – <code>{object=}</code> – local variables context object, useful for overriding values in <code>context</code>.</li> </ul>  |










