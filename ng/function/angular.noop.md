



# angular.noop








A function that performs no operations. This function can be useful when writing code in the
functional style.
   ```js
     function foo(callback) {
       var result = calculateResult();
       (callback || angular.noop)(result);
     }
   ```







  

## Usage
```js
angular.noop();
```














