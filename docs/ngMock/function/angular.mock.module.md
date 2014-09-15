



# angular.mock.module








*NOTE*: This function is also published on window for easy access.<br>
*NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha

This function registers a module configuration code. It collects the configuration information
which will be used when the injector is created by (inject)[api/ngMock/function/angular.mock.inject].

See (inject)[api/ngMock/function/angular.mock.inject] for usage example







  

## Usage
```js
angular.mock.module(fns);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| fns | ...(string&#124;Function&#124;Object) | <p>any number of modules which are represented as string aliases or as anonymous module initialization functions. The modules are used to configure the injector. The &#39;ng&#39; and &#39;ngMock&#39; modules are automatically loaded. If an object literal is passed they will be registered as values in the module, the key being the module name and the value being what is returned.</p>  |










