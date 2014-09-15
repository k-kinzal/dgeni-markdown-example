



# $interpolate


* [$interpolateProvider](api/ng/provider/$interpolateProvider)








Compiles a string with markup into an interpolation function. This service is used by the
HTML ($compile)[api/ng/service/$compile] service for data binding. See
($interpolateProvider)[api/ng/provider/$interpolateProvider] for configuring the
interpolation markup.


```js
  var $interpolate = ...; // injected
  var exp = $interpolate('Hello {{name | uppercase}}!');
  expect(exp({name:'Angular'}).toEqual('Hello ANGULAR!');
```

`$interpolate` takes an optional fourth argument, `allOrNothing`. If `allOrNothing` is
`true`, the interpolation function will return `undefined` unless all embedded expressions
evaluate to a value other than `undefined`.

```js
  var $interpolate = ...; // injected
  var context = {greeting: 'Hello', name: undefined };

  // default "forgiving" mode
  var exp = $interpolate('{{greeting}} {{name}}!');
  expect(exp(context)).toEqual('Hello !');

  // "allOrNothing" mode
  exp = $interpolate('{{greeting}} {{name}}!', false, null, true);
  expect(exp(context)).toBeUndefined();
  context.name = 'Angular';
  expect(exp(context)).toEqual('Hello Angular!');
```

`allOrNothing` is useful for interpolating URLs. `ngSrc` and `ngSrcset` use this behavior.

####Escaped Interpolation
$interpolate provides a mechanism for escaping interpolation markers. Start and end markers
can be escaped by preceding each of their characters with a REVERSE SOLIDUS U+005C (backslash).
It will be rendered as a regular start/end marker, and will not be interpreted as an expression
or binding.

This enables web-servers to prevent script injection attacks and defacing attacks, to some
degree, while also enabling code examples to work without relying on the
(ngNonBindable)[api/ng/directive/ngNonBindable] directive.

**For security purposes, it is strongly encouraged that web servers escape user-supplied data,
replacing angle brackets (&lt;, &gt;) with &amp;lt; and &amp;gt; respectively, and replacing all
interpolation start/end markers with their escaped counterparts.**

Escaped interpolation markers are only replaced with the actual interpolation markers in rendered
output when the $interpolate service processes the text. So, for HTML elements interpolated
by ($compile)[api/ng/service/$compile], or otherwise interpolated with the `mustHaveExpression` parameter
set to `true`, the interpolated text must contain an unescaped interpolation expression. As such,
this is typically useful only when user-data is used in rendering a template from the server, or
when otherwise untrusted data is used by a directive.

<example>
 <file name="index.html">
   <div ng-init="username='A user'">
     <p ng-init="apptitle='Escaping demo'">{{apptitle}}: \{\{ username = "defaced value"; \}\}
       </p>
     <p><strong>{{username}}</strong> attempts to inject code which will deface the
       application, but fails to accomplish their task, because the server has correctly
       escaped the interpolation start/end markers with REVERSE SOLIDUS U+005C (backslash)
       characters.</p>
     <p>Instead, the result of the attempted script injection is visible, and can be removed
       from the database by an administrator.</p>
   </div>
 </file>
</example>







## Dependencies

* $parse* $sce



  

## Usage
```js
$interpolate(text, [mustHaveExpression], [trustedContext], [allOrNothing]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| text | string | <p>The text with markup to interpolate.</p>  |
| mustHaveExpression | boolean= | <p>if set to true then the interpolation string must have embedded expression in order to return an interpolation function. Strings with no embedded expression will return null for the interpolation function.</p>  |
| trustedContext | string= | <p>when provided, the returned function passes the interpolated result through ($sce.getTrusted(interpolatedResult, trustedContext))[api/ng/service/$sce#getTrusted] before returning it.  Refer to the ($sce)[api/ng/service/$sce] service that provides Strict Contextual Escaping for details.</p>  |
| allOrNothing | boolean= | <p>if <code>true</code>, then the returned function returns undefined unless all embedded expressions evaluate to a value other than <code>undefined</code>.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| function(context) | <p>an interpolation function which is used to compute the interpolated string. The function has these parameters:</p> <ul> <li><code>context</code>: evaluation context for all expressions embedded in the interpolated text</li> </ul>  |


## Methods
### startSymbol
Symbol to denote the start of expression in the interpolated string. Defaults to `{{`.

Use (`$interpolateProvider.startSymbol`)[api/ng/provider/$interpolateProvider#startSymbol] to change
the symbol.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>start symbol.</p>  |




### endSymbol
Symbol to denote the end of expression in the interpolated string. Defaults to `}}`.

Use (`$interpolateProvider.endSymbol`)[api/ng/provider/$interpolateProvider#endSymbol] to change
the symbol.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>end symbol.</p>  |










