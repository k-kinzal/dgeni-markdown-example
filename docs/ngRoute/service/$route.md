



# $route


* [$routeProvider](api/ngRoute/provider/$routeProvider)








`$route` is used for deep-linking URLs to controllers and views (HTML partials).
It watches `$location.url()` and tries to map the path to an existing route definition.

Requires the (`ngRoute`)[api/ngRoute] module to be installed.

You can define routes through ($routeProvider)[api/ngRoute/provider/$routeProvider]'s API.

The `$route` service is typically used in conjunction with the
(`ngView`)[api/ngRoute/directive/ngView] directive and the
(`$routeParams`)[api/ngRoute/service/$routeParams] service.







## Dependencies


* $location
* $routeParams



  




## Methods
### reload
Causes `$route` service to reload the current route even if
($location)[api/ng/service/$location] hasn't changed.

As a result of that, (ngView)[api/ngRoute/directive/ngView]
creates new scope and reinstantiates the controller.








### updateParams
Causes `$route` service to update the current URL, replacing
current route parameters with those specified in `newParams`.
Provided property names that match the route's path segment
definitions will be interpolated into the location's path, while
remaining properties will be treated as query params.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| newParams | !Object<string, string> | <p>mapping of URL parameter names to values</p>  |







## Events
### $routeChangeStart

<p>Broadcasted before a route change. At this  point the route services starts resolving all of the dependencies needed for the route change to occur. Typically this involves fetching the view template as well as any dependencies defined in <code>resolve</code> route property. Once  all of the dependencies are resolved <code>$routeChangeSuccess</code> is fired.</p> <p>The route change (and the <code>$location</code> change that triggered it) can be prevented by calling <code>preventDefault</code> method of the event. See (<code>$rootScope.Scope</code>)[api/ng/type/$rootScope.Scope#$on] for more details about event object.</p> 
#### Type:
broadcast

#### Target:
root scope


### $routeChangeSuccess

<p>Broadcasted after a route dependencies are resolved. (ngView)[api/ngRoute/directive/ngView] listens for the directive to instantiate the controller and render the view.</p> 
#### Type:
broadcast

#### Target:
root scope


### $routeChangeError

<p>Broadcasted if any of the resolve promises are rejected.</p> 
#### Type:
broadcast

#### Target:
root scope


### $routeUpdate

<p>The <code>reloadOnSearch</code> property has been set to false, and we are reusing the same instance of the Controller.</p> 
#### Type:
broadcast

#### Target:
root scope




## Properties
### current

| Type | Description |
| :--: | :--: |
| Object | <p>Reference to the current route definition. The route definition contains:</p> <ul> <li><code>controller</code>: The controller constructor as define in route definition.</li> <li><p><code>locals</code>: A map of locals which is used by ($controller)[api/ng/service/$controller] service for controller instantiation. The <code>locals</code> contain the resolved values of the <code>resolve</code> map. Additionally the <code>locals</code> also contain:</p> <ul> <li><code>$scope</code> - The current route scope.</li> <li><code>$template</code> - The current route template HTML.</li> </ul> </li> </ul>  |
  

### routes

| Type | Description |
| :--: | :--: |
| Object | <p>Object with all route configuration Objects as its properties.</p>  |
  





