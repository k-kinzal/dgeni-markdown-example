

[View Source](http://github.com///tree/master/#L470)



# angular.identity



* function in module [ng](api/ng)






A function that returns its first argument. This function is useful when writing code in the
functional style.

   ```js
     function transformer(transformationFn, value) {
       return (transformationFn || angular.identity)(value);
     };
   ```







  

## Usage

```jsangular.identity();)
```













