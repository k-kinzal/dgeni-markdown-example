



# $interpolate


* [$interpolateProvider](api/angular/provider/$interpolateProvider)








Compiles a string with markup into an interpolation function. This service is used by the
HTML $compile service for data binding. See
$interpolateProvider for configuring the
interpolation markup.


```js
  var $interpolate = ...; // injected
  var exp = $interpolate('Hello {{name | uppercase}}!');
  expect(exp({name:'Angular'}).toEqual('Hello ANGULAR!');
```







## Dependencies

* $parse* $sce



  

## Usage
```js
$interpolate(text, [mustHaveExpression], [trustedContext]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| text | string | <p>The text with markup to interpolate.</p>  |
| mustHaveExpression | boolean= | <p>if set to true then the interpolation string must have embedded expression in order to return an interpolation function. Strings with no embedded expression will return null for the interpolation function.</p>  |
| trustedContext | string= | <p>when provided, the returned function passes the interpolated result through $sce.getTrusted(interpolatedResult, trustedContext) before returning it.  Refer to the $sce service that provides Strict Contextual Escaping for details.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| function(context) | <p>an interpolation function which is used to compute the interpolated string. The function has these parameters:</p> <ul> <li><code>context</code>: an object against which any expressions embedded in the strings are evaluated against.</li> </ul>  |


## Methods
### startSymbol
Symbol to denote the start of expression in the interpolated string. Defaults to `{{`.

Use `$interpolateProvider.startSymbol` to change
the symbol.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>start symbol.</p>  |




### endSymbol
Symbol to denote the end of expression in the interpolated string. Defaults to `}}`.

Use `$interpolateProvider.endSymbol` to change
the symbol.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>end symbol.</p>  |










