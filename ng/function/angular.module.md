



# angular.module








The `angular.module` is a global place for creating, registering and retrieving Angular
modules.
All modules (angular core or 3rd party) that should be available to an application must be
registered using this mechanism.

When passed two or more arguments, a new module is created.  If passed only one argument, an
existing module (the name passed as the first argument to `module`) is retrieved.


# Module

A module is a collection of services, directives, controllers, filters, and configuration information.
`angular.module` is used to configure the $injector.

```js
// Create a new module
var myModule = angular.module('myModule', []);

// register a new service
myModule.value('appName', 'MyCoolApp');

// configure existing services inside initialization blocks.
myModule.config(['$locationProvider', function($locationProvider) {
  // Configure existing providers
  $locationProvider.hashPrefix('!');
}]);
```

Then you can create an injector and load your modules like this:

```js
var injector = angular.injector(['ng', 'myModule'])
```

However it's more likely that you'll just use
(ngApp)[api/ng/directive/ngApp] or
(<code>angular.bootstrap</code>)[api/ng/function/angular.bootstrap] to simplify this process for you.







  

## Usage
```js
angular.module(name, [requires], [configFn]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| name | !string | <p>The name of the module to create or retrieve.</p>  |
| requires | !Array.<string>= | <p>If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.</p>  |
| configFn | Function= | <p>Optional configuration function for the module. Same as (Module#config())[api/ng/type/angular.Module#config].</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| module | <p>new module with the (<code>angular.Module</code>)[api/ng/type/angular.Module] api.</p>  |








