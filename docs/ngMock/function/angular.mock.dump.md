



# angular.mock.dump








*NOTE*: this is not an injectable instance, just a globally available function.

Method for serializing common angular objects (scope, elements, etc..) into strings, useful for
debugging.

This method is also available on window, where it can be used to display objects on debug
console.







  

## Usage
```js
angular.mock.dump(object);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| object | * | <p>any object to turn into string.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string | <p>a serialized string of the argument</p>  |








