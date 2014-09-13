

[View Source](http://github.com///tree/master/#L283)



# angular.forEach



* function in module [ng](api/ng)






Invokes the `iterator` function once for each item in `obj` collection, which can be either an
object or an array. The `iterator` function is invoked with `iterator(value, key)`, where `value`
is the value of an object property or an array element and `key` is the object property key or
array element index. Specifying a `context` for the function is optional.

It is worth noting that `.forEach` does not iterate over inherited properties because it filters
using the `hasOwnProperty` method.

   ```js
     var values = {name: 'misko', gender: 'male'};
     var log = [];
     angular.forEach(values, function(value, key) {
       this.push(key + ': ' + value);
     }, log);
     expect(log).toEqual(['name: misko', 'gender: male']);
   ```







  

## Usage

```jsangular.forEach(, , []);)
```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| obj | Object&#124;Array | <p>Object to iterate over.</p>  |
| iterator | Function | <p>Iterator function.</p>  |
| context | Object= | <p>Object to become context (<code>this</code>) for the iterator function.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Object&#124;Array | <p>Reference to <code>obj</code>.</p>  |








