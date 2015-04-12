



# $routeProvider


* [$route](api/ngRoute/service/$route)








Used for configuring routes.

## Example
See ($route)[api/ngRoute/service/$route#example] for an example of configuring and using `ngRoute`.

## Dependencies
Requires the (`ngRoute`)[api/ngRoute] module to be installed.







  




## Methods
### when
Adds a new route definition to the `$route` service.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| path | string | <p>Route path (matched against <code>$location.path</code>). If <code>$location.path</code> contains redundant trailing slash or is missing one, the route will still match and the <code>$location.path</code> will be updated to add or drop the trailing slash to exactly match the route definition.</p> <ul> <li><code>path</code> can contain named groups starting with a colon: e.g. <code>:name</code>. All characters up to the next slash are matched and stored in <code>$routeParams</code> under the given <code>name</code> when the route matches.</li> <li><code>path</code> can contain named groups starting with a colon and ending with a star: e.g.<code>:name*</code>. All characters are eagerly stored in <code>$routeParams</code> under the given <code>name</code> when the route matches.</li> <li><p><code>path</code> can contain optional named groups with a question mark: e.g.<code>:name?</code>.</p> <p>For example, routes like <code>/color/:color/largecode/:largecode*\/edit</code> will match <code>/color/brown/largecode/code/with/slashes/edit</code> and extract:</p> </li> <li><p><code>color: brown</code></p> </li> <li><code>largecode: code/with/slashes</code>.</li> </ul>  |
| route | Object | <p>Mapping information to be assigned to <code>$route.current</code> on route match.</p> <p>   Object properties:</p> <ul> <li><code>controller</code> – <code>{(string&amp;#124;function()=}</code> – Controller fn that should be associated with newly created scope or the name of a (registered controller)[api/ng/type/angular.Module#controller] if passed as a string.</li> <li><code>controllerAs</code> – <code>{string=}</code> – An identifier name for a reference to the controller. If present, the controller will be published to scope under the <code>controllerAs</code> name.</li> <li><p><code>template</code> – <code>{string=&amp;#124;function()=}</code> – html template as a string or a function that returns an html template as a string which should be used by (ngView)[api/ngRoute/directive/ngView] or (ngInclude)[api/ng/directive/ngInclude] directives. This property takes precedence over <code>templateUrl</code>.</p> <p>If <code>template</code> is a function, it will be called with the following parameters:</p> <ul> <li><code>{Array.&lt;Object&gt;}</code> - route parameters extracted from the current <code>$location.path()</code> by applying the current route</li> </ul> </li> <li><p><code>templateUrl</code> – <code>{string=&amp;#124;function()=}</code> – path or function that returns a path to an html template that should be used by (ngView)[api/ngRoute/directive/ngView].</p> <p>If <code>templateUrl</code> is a function, it will be called with the following parameters:</p> <ul> <li><code>{Array.&lt;Object&gt;}</code> - route parameters extracted from the current <code>$location.path()</code> by applying the current route</li> </ul> </li> <li><p><code>resolve</code> - <code>{Object.&lt;string, function&gt;=}</code> - An optional map of dependencies which should be injected into the controller. If any of these dependencies are promises, the router will wait for them all to be resolved or one to be rejected before the controller is instantiated. If all the promises are resolved successfully, the values of the resolved promises are injected and ($routeChangeSuccess)[api/ngRoute/service/$route#$routeChangeSuccess] event is fired. If any of the promises are rejected the ($routeChangeError)[api/ngRoute/service/$route#$routeChangeError] event is fired. The map object is:</p> <ul> <li><code>key</code> – <code>{string}</code>: a name of a dependency to be injected into the controller.</li> <li><code>factory</code> - <code>{string&amp;#124;function}</code>: If <code>string</code> then it is an alias for a service. Otherwise if function, then it is (injected)[api/auto/service/$injector#invoke] and the return value is treated as the dependency. If the result is a promise, it is resolved before its value is injected into the controller. Be aware that <code>ngRoute.$routeParams</code> will still refer to the previous route within these resolve functions.  Use <code>$route.current.params</code> to access the new route parameters, instead.</li> </ul> </li> <li><p><code>redirectTo</code> – {(string&#124;function())=} – value to update ($location)[api/ng/service/$location] path with and trigger route redirection.</p> <p>If <code>redirectTo</code> is a function, it will be called with the following parameters:</p> <ul> <li><code>{Object.&lt;string&gt;}</code> - route parameters extracted from the current <code>$location.path()</code> by applying the current route templateUrl.</li> <li><code>{string}</code> - current <code>$location.path()</code></li> <li><code>{Object}</code> - current <code>$location.search()</code></li> </ul> <p>The custom <code>redirectTo</code> function is expected to return a string which will be used to update <code>$location.path()</code> and <code>$location.search()</code>.</p> </li> <li><p><code>[reloadOnSearch=true]</code> - {boolean=} - reload route when only <code>$location.search()</code> or <code>$location.hash()</code> changes.</p> <p>If the option is set to <code>false</code> and url in the browser changes, then <code>$routeUpdate</code> event is broadcasted on the root scope.</p> </li> <li><p><code>[caseInsensitiveMatch=false]</code> - {boolean=} - match routes without being case sensitive</p> <p>If the option is set to <code>true</code>, then the particular route can be matched without being case sensitive</p> </li> </ul>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>self</p>  |




### otherwise
Sets route definition that will be used on route change when no other route definition
is matched.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| params | Object&#124;string | <p>Mapping information to be assigned to <code>$route.current</code>. If called with a string, the value maps to <code>redirectTo</code>.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>self</p>  |







## Properties
### caseInsensitiveMatch

| Type | Description |
| :--: | :--: |
|  | <p>A boolean property indicating if routes defined using this provider should be matched using a case insensitive algorithm. Defaults to <code>false</code>.</p>  |
  





