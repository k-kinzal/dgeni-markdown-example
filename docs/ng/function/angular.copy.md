



# angular.copy








Creates a deep copy of `source`, which should be an object or an array.

* If no destination is supplied, a copy of the object or array is created.
* If a destination is provided, all of its elements (for arrays) or properties (for objects)
  are deleted and then all elements/properties from the source are copied to it.
* If `source` is not an object or array (inc. `null` and `undefined`), `source` is returned.
* If `source` is identical to 'destination' an exception will be thrown.







  

## Usage
```js
angular.copy(source, [destination]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| source | * | <p>The source that will be used to make a copy. Can be any type, including primitives, <code>null</code>, and <code>undefined</code>.</p>  |
| destination | (Object&#124;Array)= | <p>Destination into which the source is copied. If provided, must be of the same type as <code>source</code>.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| * | <p>The copy or updated <code>destination</code>, if <code>destination</code> was specified.</p>  |








