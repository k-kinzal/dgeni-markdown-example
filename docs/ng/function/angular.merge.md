



# angular.merge








Deeply extends the destination object `dst` by copying own enumerable properties from the `src` object(s)
to `dst`. You can specify multiple `src` objects. If you want to preserve original objects, you can do so
by passing an empty object as the target: `var object = angular.merge({}, object1, object2)`.

Unlike (extend())[api/ng/function/angular.extend], `merge()` recursively descends into object properties of source
objects, performing a deep copy.







  

## Usage
```js
angular.merge(dst, src);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| dst | Object | <p>Destination object.</p>  |
| src | ...Object | <p>Source object(s).</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Object | <p>Reference to <code>dst</code>.</p>  |








