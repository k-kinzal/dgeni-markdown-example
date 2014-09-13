



# angular.identity








A function that returns its first argument. This function is useful when writing code in the
functional style.

   ```js
     function transformer(transformationFn, value) {
       return (transformationFn || angular.identity)(value);
     };
   ```







  

## Usage
```js
angular.identity();
```














