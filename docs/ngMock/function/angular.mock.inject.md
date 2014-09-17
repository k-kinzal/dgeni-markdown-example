



# angular.mock.inject








*NOTE*: This function is also published on window for easy access.<br>
*NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha

The inject function wraps a function into an injectable function. The inject() creates new
instance of ($injector)[api/auto/service/$injector] per test, which is then used for
resolving references.


## Resolving References (Underscore Wrapping)
Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
that is declared in the scope of the `describe()` block. Since we would, most likely, want
the variable to have the same name of the reference we have a problem, since the parameter
to the `inject()` function would hide the outer variable.

To help with this, the injected parameters can, optionally, be enclosed with underscores.
These are ignored by the injector when the reference name is resolved.

For example, the parameter `_myService_` would be resolved as the reference `myService`.
Since it is available in the function body as _myService_, we can then assign it to a variable
defined in an outer scope.

```
// Defined out reference variable outside
var myService;

// Wrap the parameter in underscores
beforeEach( inject( function(_myService_){
  myService = _myService_;
}));

// Use myService in a series of tests.
it('makes use of myService', function() {
  myService.doStuff();
});

```

See also (angular.mock.module)[api/ngMock/function/angular.mock.module]

## Example
Example of what a typical jasmine tests looks like with the inject method.
```js

  angular.module('myApplicationModule', [])
      .value('mode', 'app')
      .value('version', 'v1.0.1');


  describe('MyApp', function() {

    // You need to load modules that you want to test,
    // it loads only the "ng" module by default.
    beforeEach(module('myApplicationModule'));


    // inject() is used to inject arguments of all given functions
    it('should provide a version', inject(function(mode, version) {
      expect(version).toEqual('v1.0.1');
      expect(mode).toEqual('app');
    }));


    // The inject and module method can also be used inside of the it or beforeEach
    it('should override a version and test the new version is injected', function() {
      // module() takes functions or strings (module aliases)
      module(function($provide) {
        $provide.value('version', 'overridden'); // override version here
      });

      inject(function(version) {
        expect(version).toEqual('overridden');
      });
    });
  });

```







  

## Usage
```js
angular.mock.inject(fns);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| fns | ...Function | <p>any number of functions which will be injected using the injector.</p>  |










