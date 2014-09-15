



# $provide











The ($provide)[api/auto/service/$provide] service has a number of methods for registering components
with the ($injector)[api/auto/service/$injector]. Many of these functions are also exposed on
(<code>angular.Module</code>)[api/ng/type/angular.Module].

An Angular **service** is a singleton object created by a **service factory**.  These **service
factories** are functions which, in turn, are created by a **service provider**.
The **service providers** are constructor functions. When instantiated they must contain a
property called `$get`, which holds the **service factory** function.

When you request a service, the ($injector)[api/auto/service/$injector] is responsible for finding the
correct **service provider**, instantiating it and then calling its `$get` **service factory**
function to get the instance of the **service**.

Often services have no configuration options and there is no need to add methods to the service
provider.  The provider will be no more than a constructor function with a `$get` property. For
these cases the ($provide)[api/auto/service/$provide] service has additional helper methods to register
services without specifying a provider.

* (provider(provider))[api/auto/service/$provide#provider] - registers a **service provider** with the
    ($injector)[api/auto/service/$injector]
* (constant(obj))[api/auto/service/$provide#constant] - registers a value/object that can be accessed by
    providers and services.
* (value(obj))[api/auto/service/$provide#value] - registers a value/object that can only be accessed by
    services, not providers.
* (factory(fn))[api/auto/service/$provide#factory] - registers a service **factory function**, `fn`,
    that will be wrapped in a **service provider** object, whose `$get` property will contain the
    given factory function.
* (service(class))[api/auto/service/$provide#service] - registers a **constructor function**, `class`
    that will be wrapped in a **service provider** object, whose `$get` property will instantiate
     a new object using the given constructor function.

See the individual methods for more information and examples.







  




## Methods
### provider
Register a **provider function** with the ($injector)[api/auto/service/$injector]. Provider functions
are constructor functions, whose instances are responsible for "providing" a factory for a
service.

Service provider names start with the name of the service they provide followed by `Provider`.
For example, the ($log)[api/ng/service/$log] service has a provider called
($logProvider)[api/ng/provider/$logProvider].

Service provider objects can have additional methods which allow configuration of the provider
and its service. Importantly, you can configure what kind of service is created by the `$get`
method, or how that service will act. For example, the ($logProvider)[api/ng/provider/$logProvider] has a
method (debugEnabled)[api/ng/provider/$logProvider#debugEnabled]
which lets you specify whether the ($log)[api/ng/service/$log] service will log debug messages to the
console or not.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The name of the instance. NOTE: the provider will be available under <code>name + &#39;Provider&#39;</code> key.</p>  |
| provider | (Object&#124;function()) | <p>If the provider is:</p> <ul> <li><code>Object</code>: then it should have a <code>$get</code> method. The <code>$get</code> method will be invoked using ($injector.invoke())[api/auto/service/$injector#invoke] when an instance needs to be created.</li> <li><code>Constructor</code>: a new instance of the provider will be created using ($injector.instantiate())[api/auto/service/$injector#instantiate], then treated as <code>object</code>.</li> </ul>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>registered provider instance</p>  |




### factory
Register a **service factory**, which will be called to return the service instance.
This is short for registering a service where its provider consists of only a `$get` property,
which is the given service factory function.
You should use ($provide.factory(getFn))[api/auto/service/$provide#factory] if you do not need to
configure your service in a provider.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The name of the instance.</p>  |
| $getFn | function() | <p>The $getFn for the instance creation. Internally this is a short hand for <code>$provide.provider(name, {$get: $getFn})</code>.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>registered provider instance</p>  |




### service
Register a **service constructor**, which will be invoked with `new` to create the service
instance.
This is short for registering a service where its provider's `$get` property is the service
constructor function that will be used to instantiate the service instance.

You should use ($provide.service(class))[api/auto/service/$provide#service] if you define your service
as a type/class.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The name of the instance.</p>  |
| constructor | Function | <p>A class (constructor function) that will be instantiated.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>registered provider instance</p>  |




### value
Register a **value service** with the ($injector)[api/auto/service/$injector], such as a string, a
number, an array, an object or a function.  This is short for registering a service where its
provider's `$get` property is a factory function that takes no arguments and returns the **value
service**.

Value services are similar to constant services, except that they cannot be injected into a
module configuration function (see (<code>angular.Module</code>)[api/ng/type/angular.Module#config]) but they can be overridden by
an Angular
(decorator)[api/auto/service/$provide#decorator].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The name of the instance.</p>  |
| value | * | <p>The value.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>registered provider instance</p>  |




### constant
Register a **constant service**, such as a string, a number, an array, an object or a function,
with the ($injector)[api/auto/service/$injector]. Unlike (value)[api/auto/service/$provide#value] it can be
injected into a module configuration function (see (<code>angular.Module</code>)[api/ng/type/angular.Module#config]) and it cannot
be overridden by an Angular (decorator)[api/auto/service/$provide#decorator].


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The name of the constant.</p>  |
| value | * | <p>The constant value.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>registered instance</p>  |




### decorator
Register a **service decorator** with the ($injector)[api/auto/service/$injector]. A service decorator
intercepts the creation of a service, allowing it to override or modify the behaviour of the
service. The object returned by the decorator may be the original service, or a new service
object which replaces or wraps and delegates to the original service.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The name of the service to decorate.</p>  |
| decorator | function() | <p>This function will be invoked when the service needs to be instantiated and should return the decorated service instance. The function is called using the (injector.invoke)[api/auto/service/$injector#invoke] method and is therefore fully injectable. Local injection arguments:</p> <ul> <li><code>$delegate</code> - The original service instance, which can be monkey patched, configured, decorated or delegated to.</li> </ul>  |












