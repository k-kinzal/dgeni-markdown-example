



# $exceptionHandler











Any uncaught exception in angular expressions is delegated to this service.
The default implementation simply delegates to `$log.error` which logs it into
the browser console.

In unit tests, if `angular-mocks.js` is loaded, this service is overridden by
mock $exceptionHandler which aids in testing.

## Example:

```js
  angular.module('exceptionOverride', []).factory('$exceptionHandler', function () {
    return function (exception, cause) {
      exception.message += ' (caused by "' + cause + '")';
      throw exception;
    };
  });
```

This example will override the normal action of `$exceptionHandler`, to make angular
exceptions fail hard when they happen, instead of just logging to the console.







## Dependencies

* ng.$log



  

## Usage
```js
$exceptionHandler(exception, [cause]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| exception | Error | <p>Exception associated with the error.</p>  |
| cause | string= | <p>optional information about the context in which the error was thrown.</p>  |










