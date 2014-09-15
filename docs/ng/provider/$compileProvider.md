



# $compileProvider


* [$compile](api/ng/service/$compile)
















  




## Methods
### directive
Register a new directive with the compiler.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string&#124;Object | <p>Name of the directive in camel-case (i.e. <code>ngBind</code> which will match as <code>ng-bind</code>), or an object map of directives where the keys are the names and the values are the factories.</p>  |
| directiveFactory | Function&#124;Array | <p>An injectable directive factory function. See (directive)[guide/directive] for more info.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| ng.$compileProvider | <p>Self for chaining.</p>  |




### aHrefSanitizationWhitelist
Retrieves or overrides the default regular expression that is used for whitelisting of safe
urls during a[href] sanitization.

The sanitization is a security measure aimed at prevent XSS attacks via html links.

Any url about to be assigned to a[href] via data-binding is first normalized and turned into
an absolute url. Afterwards, the url is matched against the `aHrefSanitizationWhitelist`
regular expression. If a match is found, the original url is written into the dom. Otherwise,
the absolute url is prefixed with `'unsafe:'` string and only then is it written into the DOM.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| regexp | RegExp= | <p>New regexp to whitelist urls with.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| RegExp&#124;ng.$compileProvider | <p>Current RegExp if called without value or self for chaining otherwise.</p>  |




### imgSrcSanitizationWhitelist
Retrieves or overrides the default regular expression that is used for whitelisting of safe
urls during img[src] sanitization.

The sanitization is a security measure aimed at prevent XSS attacks via html links.

Any url about to be assigned to img[src] via data-binding is first normalized and turned into
an absolute url. Afterwards, the url is matched against the `imgSrcSanitizationWhitelist`
regular expression. If a match is found, the original url is written into the dom. Otherwise,
the absolute url is prefixed with `'unsafe:'` string and only then is it written into the DOM.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| regexp | RegExp= | <p>New regexp to whitelist urls with.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| RegExp&#124;ng.$compileProvider | <p>Current RegExp if called without value or self for chaining otherwise.</p>  |




### debugInfoEnabled
Call this method to enable/disable various debug runtime information in the compiler such as adding
binding information and a reference to the current scope on to DOM elements.
If enabled, the compiler will add the following to DOM elements that have been bound to the scope
* `ng-binding` CSS class
* `$binding` data property containing an array of the binding expressions

You may want to use this in production for a significant performance boost. See
(Disabling Debug Data)[guide/production#disabling-debug-data] for more.

The default value is true.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| enabled | boolean= | <p>update the debugInfoEnabled state if provided, otherwise just return the current debugInfoEnabled state</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>current value if used as getter or itself (chaining) if used as setter</p>  |










