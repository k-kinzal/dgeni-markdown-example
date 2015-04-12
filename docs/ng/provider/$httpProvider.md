



# $httpProvider


* [$http](api/ng/service/$http)








Use `$httpProvider` to change the default behavior of the ($http)[api/ng/service/$http] service.







  




## Methods
### useApplyAsync
Configure $http service to combine processing of multiple http responses received at around
the same time via ($rootScope.$applyAsync)[api/ng/type/$rootScope.Scope#$applyAsync]. This can result in
significant performance improvement for bigger applications that make many HTTP requests
concurrently (common during application bootstrap).

Defaults to false. If no value is specified, returns the current configured value.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | boolean= | <p>If true, when requests are loaded, they will schedule a deferred &quot;apply&quot; on the next tick, giving time for subsequent requests in a roughly ~10ms window to load and share the same digest cycle.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean&#124;Object | <p>If a value is specified, returns the $httpProvider for chaining. otherwise, returns the current configured value.</p>  |







## Properties
### defaults

| Type | Description |
| :--: | :--: |
|  | <p>Object containing default values for all ($http)[api/ng/service/$http] requests.</p> <ul> <li><p><strong><code>defaults.cache</code></strong> - {Object} - an object built with (<code>$cacheFactory</code>)[api/ng/service/$cacheFactory] that will provide the cache for all requests who set their <code>cache</code> property to <code>true</code>. If you set the <code>default.cache = false</code> then only requests that specify their own custom cache object will be cached. See ($http Caching)[api/ng/service/$http#caching] for more information.</p> </li> <li><p><strong><code>defaults.xsrfCookieName</code></strong> - {string} - Name of cookie containing the XSRF token. Defaults value is <code>&#39;XSRF-TOKEN&#39;</code>.</p> </li> <li><p><strong><code>defaults.xsrfHeaderName</code></strong> - {string} - Name of HTTP header to populate with the XSRF token. Defaults value is <code>&#39;X-XSRF-TOKEN&#39;</code>.</p> </li> <li><p><strong><code>defaults.headers</code></strong> - {Object} - Default headers for all $http requests. Refer to ($http)[api/ng/service/$http#setting-http-headers] for documentation on setting default headers.</p> <ul> <li><strong><code>defaults.headers.common</code></strong></li> <li><strong><code>defaults.headers.post</code></strong></li> <li><strong><code>defaults.headers.put</code></strong></li> <li><strong><code>defaults.headers.patch</code></strong></li> </ul> </li> <li><p><strong><code>defaults.paramSerializer</code></strong> - {string&#124;function(Object<string,string>):string} - A function used to prepare string representation of request parameters (specified as an object). Is specified as string, it is interpreted as function registered in with the {$injector}. Defaults to {$httpParamSerializer}.</p> </li> </ul>  |
  

### interceptors

| Type | Description |
| :--: | :--: |
|  | <p>Array containing service factories for all synchronous or asynchronous ($http)[api/ng/service/$http] pre-processing of request or postprocessing of responses.</p> <p>These service factories are ordered by request, i.e. they are applied in the same order as the array, on request, but reverse order, on response.</p> <p>(Interceptors detailed info)[api/ng/service/$http#interceptors]</p>  |
  





