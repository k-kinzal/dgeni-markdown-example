

[View Source](http://github.com///tree/master/#L1586)



# angular.Module



* type in module [ng](api/ng)






Interface for configuring angular {@link angular.module modules}.







  




## Methods
### method:provider
See {@link auto.$provide#provider $provide.provider()}.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>service name</p>  |
| providerType | Function | <p>Construction function for creating new instance of the service.</p>  |






### method:factory
See {@link auto.$provide#factory $provide.factory()}.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>service name</p>  |
| providerFunction | Function | <p>Function for creating new instance of the service.</p>  |






### method:service
See {@link auto.$provide#service $provide.service()}.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>service name</p>  |
| constructor | Function | <p>A constructor function that will be instantiated.</p>  |






### method:value
See {@link auto.$provide#value $provide.value()}.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>service name</p>  |
| object | * | <p>Service instance object.</p>  |






### method:constant
Because the constant are fixed, they get applied before other provide methods.
See {@link auto.$provide#constant $provide.constant()}.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>constant name</p>  |
| object | * | <p>Constant value.</p>  |






### method:animation
**NOTE**: animations take effect only if the **ngAnimate** module is loaded.


Defines an animation hook that can be later used with
{@link ngAnimate.$animate $animate} service and directives that use this service.

```js
module.animation('.animation-name', function($inject1, $inject2) {
  return {
    eventName : function(element, done) {
      //code to run the animation
      //once complete, then run done()
      return function cancellationFunction(element) {
        //code to cancel the animation
      }
    }
  }
})
```

See {@link ngAnimate.$animateProvider#register $animateProvider.register()} and
{@link ngAnimate ngAnimate module} for more information.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>animation name</p>  |
| animationFactory | Function | <p>Factory function for creating new instance of an animation.</p>  |






### method:filter
See {@link ng.$filterProvider#register $filterProvider.register()}.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>Filter name.</p>  |
| filterFactory | Function | <p>Factory function for creating new instance of filter.</p>  |






### method:controller
See {@link ng.$controllerProvider#register $controllerProvider.register()}.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string&#124;Object | <p>Controller name, or an object map of controllers where the keys are the names and the values are the constructors.</p>  |
| constructor | Function | <p>Controller constructor function.</p>  |






### method:directive
See {@link ng.$compileProvider#directive $compileProvider.directive()}.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string&#124;Object | <p>Directive name, or an object map of directives where the keys are the names and the values are the factories.</p>  |
| directiveFactory | Function | <p>Factory function for creating new instance of directives.</p>  |






### method:config
Use this method to register work which needs to be performed on module loading.
For more about how to configure services, see
{@link providers#providers_provider-recipe Provider Recipe}.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| configFn | Function | <p>Execute this function on module load. Useful for service configuration.</p>  |






### method:run
Use this method to register work which should be performed when the injector is done
loading all modules.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| initializationFn | Function | <p>Execute this function after injector creation. Useful for application initialization.</p>  |









## Properties
### property:requires

| Type | Description |
| :--: | :--: |
|  | <p>Holds the list of modules which the injector will load before the current module is loaded.</p>  |
  

### property:name

| Type | Description |
| :--: | :--: |
|  | <p>Name of the module.</p>  |
  





