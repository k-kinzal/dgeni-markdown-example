

[View Source](http://github.com///tree/master/#L8722)



# $interpolate






* service in module []()






Compiles a string with markup into an interpolation function. This service is used by the
HTML {@link ng.$compile $compile} service for data binding. See
{@link ng.$interpolateProvider $interpolateProvider} for configuring the
interpolation markup.


```js
  var $interpolate = ...; // injected
  var exp = $interpolate('Hello {{name | uppercase}}!');
  expect(exp({name:'Angular'}).toEqual('Hello ANGULAR!');
```







## Dependencies

* {@link $parse  }* {@link $sce  }



  

## Usage

```js$interpolate(, [], []);)
```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| text | string | <p>The text with markup to interpolate.</p>  |
| mustHaveExpression | boolean= | <p>if set to true then the interpolation string must have embedded expression in order to return an interpolation function. Strings with no embedded expression will return null for the interpolation function.</p>  |
| trustedContext | string= | <p>when provided, the returned function passes the interpolated result through {@link ng.$sce#getTrusted $sce.getTrusted(interpolatedResult, trustedContext)} before returning it.  Refer to the {@link ng.$sce $sce} service that provides Strict Contextual Escaping for details.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| function(context) | <p>an interpolation function which is used to compute the interpolated string. The function has these parameters:</p> <ul> <li><code>context</code>: an object against which any expressions embedded in the strings are evaluated against.</li> </ul>  |


## Methods
### method:startSymbol
Symbol to denote the start of expression in the interpolated string. Defaults to `{{`.

Use {@link ng.$interpolateProvider#startSymbol $interpolateProvider#startSymbol} to change
the symbol.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>start symbol.</p>  |




### method:endSymbol
Symbol to denote the end of expression in the interpolated string. Defaults to `}}`.

Use {@link ng.$interpolateProvider#endSymbol $interpolateProvider#endSymbol} to change
the symbol.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>end symbol.</p>  |










