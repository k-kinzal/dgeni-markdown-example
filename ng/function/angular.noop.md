

[View Source](http://github.com///tree/master/#L450)



# angular.noop



* function in module [ng](api/ng)






A function that performs no operations. This function can be useful when writing code in the
functional style.
   ```js
     function foo(callback) {
       var result = calculateResult();
       (callback || angular.noop)(result);
     }
   ```







  

## Usage

```jsangular.noop();)
```













