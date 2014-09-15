



# angular.Module








Interface for configuring angular (modules)[api/ng/function/angular.module].







  




## Methods
### provider
See ($provide.provider())[api/auto/service/$provide#provider].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>service name</p>  |
| providerType | Function | <p>Construction function for creating new instance of the service.</p>  |






### factory
See ($provide.factory())[api/auto/service/$provide#factory].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>service name</p>  |
| providerFunction | Function | <p>Function for creating new instance of the service.</p>  |






### service
See ($provide.service())[api/auto/service/$provide#service].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>service name</p>  |
| constructor | Function | <p>A constructor function that will be instantiated.</p>  |






### value
See ($provide.value())[api/auto/service/$provide#value].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>service name</p>  |
| object | * | <p>Service instance object.</p>  |






### constant
Because the constant are fixed, they get applied before other provide methods.
See ($provide.constant())[api/auto/service/$provide#constant].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>constant name</p>  |
| object | * | <p>Constant value.</p>  |






### animation
**NOTE**: animations take effect only if the **ngAnimate** module is loaded.


Defines an animation hook that can be later used with
($animate)[api/ngAnimate/service/$animate] service and directives that use this service.

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

See ($animateProvider.register())[api/ngAnimate/provider/$animateProvider#register] and
(ngAnimate module)[api/ngAnimate] for more information.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>animation name</p>  |
| animationFactory | Function | <p>Factory function for creating new instance of an animation.</p>  |






### filter
See ($filterProvider.register())[api/ng/provider/$filterProvider#register].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>Filter name.</p>  |
| filterFactory | Function | <p>Factory function for creating new instance of filter.</p>  |






### controller
See ($controllerProvider.register())[api/ng/provider/$controllerProvider#register].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string&#124;Object | <p>Controller name, or an object map of controllers where the keys are the names and the values are the constructors.</p>  |
| constructor | Function | <p>Controller constructor function.</p>  |






### directive
See ($compileProvider.directive())[api/ng/provider/$compileProvider#directive].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string&#124;Object | <p>Directive name, or an object map of directives where the keys are the names and the values are the factories.</p>  |
| directiveFactory | Function | <p>Factory function for creating new instance of directives.</p>  |






### config
Use this method to register work which needs to be performed on module loading.
For more about how to configure services, see
Provider Recipe.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| configFn | Function | <p>Execute this function on module load. Useful for service configuration.</p>  |






### run
Use this method to register work which should be performed when the injector is done
loading all modules.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| initializationFn | Function | <p>Execute this function after injector creation. Useful for application initialization.</p>  |









## Properties
### requires

| Type | Description |
| :--: | :--: |
|  | <p>Holds the list of modules which the injector will load before the current module is loaded.</p>  |
  

### name

| Type | Description |
| :--: | :--: |
|  | <p>Name of the module.</p>  |
  





