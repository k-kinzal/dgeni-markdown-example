



# angular.extend








Extends the destination object `dst` by copying own enumerable properties from the `src` object(s)
to `dst`. You can specify multiple `src` objects. If you want to preserve original objects, you can do so
by passing an empty object as the target: `var object = angular.extend({}, object1, object2)`.

**Note:** Keep in mind that `angular.extend` does not support recursive merge (deep copy). Use
(<code>angular.merge</code>)[api/ng/function/angular.merge] for this.







  

## Usage
```js
angular.extend(dst, src);
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








