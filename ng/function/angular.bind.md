



# angular.bind








Returns a function which calls function `fn` bound to `self` (`self` becomes the `this` for
`fn`). You can supply optional `args` that are prebound to the function. This feature is also
known as [partial application](http://en.wikipedia.org/wiki/Partial_application), as
distinguished from [function currying](http://en.wikipedia.org/wiki/Currying#Contrast_with_partial_function_application).







  

## Usage
```js
angular.bind(self, fn, args);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| self | Object | <p>Context which <code>fn</code> should be evaluated in.</p>  |
| fn | function() | <p>Function to be bound.</p>  |
| args | ...* | <p>Optional arguments to be prebound to the <code>fn</code> function call.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| function() | <p>Function that wraps the <code>fn</code> with all the specified bindings.</p>  |








