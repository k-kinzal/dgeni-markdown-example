



# $http


* [$httpProvider](api/ng/provider/$httpProvider)








The `$http` service is a core Angular service that facilitates communication with the remote
HTTP servers via the browser's [XMLHttpRequest](https://developer.mozilla.org/en/xmlhttprequest)
object or via [JSONP](http://en.wikipedia.org/wiki/JSONP).

For unit testing applications that use `$http` service, see
($httpBackend mock)[api/ngMock/service/$httpBackend].

For a higher level of abstraction, please check out the ($resource)[api/ngResource/service/$resource] service.

The $http API is based on the (deferred/promise APIs)[api/ng/service/$q] exposed by
the $q service. While for simple usage patterns this doesn't matter much, for advanced usage
it is important to familiarize yourself with these APIs and the guarantees they provide.


## General usage
The `$http` service is a function which takes a single argument — a configuration object —
that is used to generate an HTTP request and returns  a (promise)[api/ng/service/$q]
with two $http specific methods: `success` and `error`.

```js
  // Simple GET request example :
  $http.get('/someUrl').
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
```

```js
  // Simple POST request example (passing data) :
  $http.post('/someUrl', {msg:'hello word!'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
```


Since the returned value of calling the $http function is a `promise`, you can also use
the `then` method to register callbacks, and these callbacks will receive a single argument –
an object representing the response. See the API signature and type info below for more
details.

A response status code between 200 and 299 is considered a success status and
will result in the success callback being called. Note that if the response is a redirect,
XMLHttpRequest will transparently follow it, meaning that the error callback will not be
called for such responses.

## Writing Unit Tests that use $http
When unit testing (using (ngMock)[api/ngMock]), it is necessary to call
($httpBackend.flush())[api/ngMock/service/$httpBackend#flush] to flush each pending
request using trained responses.

```
$httpBackend.expectGET(...);
$http.get(...);
$httpBackend.flush();
```

## Shortcut methods

Shortcut methods are also available. All shortcut methods require passing in the URL, and
request data must be passed in for POST/PUT requests.

```js
  $http.get('/someUrl').success(successCallback);
  $http.post('/someUrl', data).success(successCallback);
```

Complete list of shortcut methods:

- ($http.get)[api/ng/service/$http#get]
- ($http.head)[api/ng/service/$http#head]
- ($http.post)[api/ng/service/$http#post]
- ($http.put)[api/ng/service/$http#put]
- ($http.delete)[api/ng/service/$http#delete]
- ($http.jsonp)[api/ng/service/$http#jsonp]
- ($http.patch)[api/ng/service/$http#patch]


## Setting HTTP Headers

The $http service will automatically add certain HTTP headers to all requests. These defaults
can be fully configured by accessing the `$httpProvider.defaults.headers` configuration
object, which currently contains this default configuration:

- `$httpProvider.defaults.headers.common` (headers that are common for all requests):
  - `Accept: application/json, text/plain, * / *`
- `$httpProvider.defaults.headers.post`: (header defaults for POST requests)
  - `Content-Type: application/json`
- `$httpProvider.defaults.headers.put` (header defaults for PUT requests)
  - `Content-Type: application/json`

To add or overwrite these defaults, simply add or remove a property from these configuration
objects. To add headers for an HTTP method other than POST or PUT, simply add a new object
with the lowercased HTTP method name as the key, e.g.
`$httpProvider.defaults.headers.get = { 'My-Header' : 'value' }`.

The defaults can also be set at runtime via the `$http.defaults` object in the same
fashion. For example:

```
module.run(function($http) {
  $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
});
```

In addition, you can supply a `headers` property in the config object passed when
calling `$http(config)`, which overrides the defaults without changing them globally.

To explicitly remove a header automatically added via $httpProvider.defaults.headers on a per request basis,
Use the `headers` property, setting the desired header to `undefined`. For example:

```js
var req = {
 method: 'POST',
 url: 'http://example.com',
 headers: {
   'Content-Type': undefined
 },
 data: { test: 'test' }
}

$http(req).success(function(){...}).error(function(){...});
```

## Transforming Requests and Responses

Both requests and responses can be transformed using transformation functions: `transformRequest`
and `transformResponse`. These properties can be a single function that returns
the transformed value (`function(data, headersGetter, status)`) or an array of such transformation functions,
which allows you to `push` or `unshift` a new transformation function into the transformation chain.

### Default Transformations

The `$httpProvider` provider and `$http` service expose `defaults.transformRequest` and
`defaults.transformResponse` properties. If a request does not provide its own transformations
then these will be applied.

You can augment or replace the default transformations by modifying these properties by adding to or
replacing the array.

Angular provides the following default transformations:

Request transformations (`$httpProvider.defaults.transformRequest` and `$http.defaults.transformRequest`):

- If the `data` property of the request configuration object contains an object, serialize it
  into JSON format.

Response transformations (`$httpProvider.defaults.transformResponse` and `$http.defaults.transformResponse`):

 - If XSRF prefix is detected, strip it (see Security Considerations section below).
 - If JSON response is detected, deserialize it using a JSON parser.


### Overriding the Default Transformations Per Request

If you wish override the request/response transformations only for a single request then provide
`transformRequest` and/or `transformResponse` properties on the configuration object passed
into `$http`.

Note that if you provide these properties on the config object the default transformations will be
overwritten. If you wish to augment the default transformations then you must include them in your
local transformation array.

The following code demonstrates adding a new response transformation to be run after the default response
transformations have been run.

```js
function appendTransform(defaults, transform) {

  // We can't guarantee that the default transformation is an array
  defaults = angular.isArray(defaults) ? defaults : [defaults];

  // Append the new transformation to the defaults
  return defaults.concat(transform);
}

$http({
  url: '...',
  method: 'GET',
  transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
    return doTransform(value);
  })
});
```


## Caching

To enable caching, set the request configuration `cache` property to `true` (to use default
cache) or to a custom cache object (built with (`$cacheFactory`)[api/ng/service/$cacheFactory]).
When the cache is enabled, `$http` stores the response from the server in the specified
cache. The next time the same request is made, the response is served from the cache without
sending a request to the server.

Note that even if the response is served from cache, delivery of the data is asynchronous in
the same way that real requests are.

If there are multiple GET requests for the same URL that should be cached using the same
cache, but the cache is not populated yet, only one request to the server will be made and
the remaining requests will be fulfilled using the response from the first request.

You can change the default cache to a new object (built with
(`$cacheFactory`)[api/ng/service/$cacheFactory]) by updating the
(`$http.defaults.cache`)[api/ng/service/$http#defaults] property. All requests who set
their `cache` property to `true` will now use this cache object.

If you set the default cache to `false` then only requests that specify their own custom
cache object will be cached.

## Interceptors

Before you start creating interceptors, be sure to understand the
($q and deferred/promise APIs)[api/ng/service/$q].

For purposes of global error handling, authentication, or any kind of synchronous or
asynchronous pre-processing of request or postprocessing of responses, it is desirable to be
able to intercept requests before they are handed to the server and
responses before they are handed over to the application code that
initiated these requests. The interceptors leverage the (promise APIs)[api/ng/service/$q] to fulfill this need for both synchronous and asynchronous pre-processing.

The interceptors are service factories that are registered with the `$httpProvider` by
adding them to the `$httpProvider.interceptors` array. The factory is called and
injected with dependencies (if specified) and returns the interceptor.

There are two kinds of interceptors (and two kinds of rejection interceptors):

  * `request`: interceptors get called with a http `config` object. The function is free to
    modify the `config` object or create a new one. The function needs to return the `config`
    object directly, or a promise containing the `config` or a new `config` object.
  * `requestError`: interceptor gets called when a previous interceptor threw an error or
    resolved with a rejection.
  * `response`: interceptors get called with http `response` object. The function is free to
    modify the `response` object or create a new one. The function needs to return the `response`
    object directly, or as a promise containing the `response` or a new `response` object.
  * `responseError`: interceptor gets called when a previous interceptor threw an error or
    resolved with a rejection.


```js
  // register the interceptor as a service
  $provide.factory('myHttpInterceptor', function($q, dependency1, dependency2) {
    return {
      // optional method
      'request': function(config) {
        // do something on success
        return config;
      },

      // optional method
     'requestError': function(rejection) {
        // do something on error
        if (canRecover(rejection)) {
          return responseOrNewPromise
        }
        return $q.reject(rejection);
      },



      // optional method
      'response': function(response) {
        // do something on success
        return response;
      },

      // optional method
     'responseError': function(rejection) {
        // do something on error
        if (canRecover(rejection)) {
          return responseOrNewPromise
        }
        return $q.reject(rejection);
      }
    };
  });

  $httpProvider.interceptors.push('myHttpInterceptor');


  // alternatively, register the interceptor via an anonymous factory
  $httpProvider.interceptors.push(function($q, dependency1, dependency2) {
    return {
     'request': function(config) {
         // same as above
      },

      'response': function(response) {
         // same as above
      }
    };
  });
```

## Security Considerations

When designing web applications, consider security threats from:

- [JSON vulnerability](http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx)
- [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

Both server and the client must cooperate in order to eliminate these threats. Angular comes
pre-configured with strategies that address these issues, but for this to work backend server
cooperation is required.

### JSON Vulnerability Protection

A [JSON vulnerability](http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx)
allows third party website to turn your JSON resource URL into
[JSONP](http://en.wikipedia.org/wiki/JSONP) request under some conditions. To
counter this your server can prefix all JSON requests with following string `")]}',\n"`.
Angular will automatically strip the prefix before processing it as JSON.

For example if your server needs to return:
```js
['one','two']
```

which is vulnerable to attack, your server can return:
```js
)]}',
['one','two']
```

Angular will strip the prefix, before processing the JSON.


### Cross Site Request Forgery (XSRF) Protection

[XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) is a technique by which
an unauthorized site can gain your user's private data. Angular provides a mechanism
to counter XSRF. When performing XHR requests, the $http service reads a token from a cookie
(by default, `XSRF-TOKEN`) and sets it as an HTTP header (`X-XSRF-TOKEN`). Since only
JavaScript that runs on your domain could read the cookie, your server can be assured that
the XHR came from JavaScript running on your domain. The header will not be set for
cross-domain requests.

To take advantage of this, your server needs to set a token in a JavaScript readable session
cookie called `XSRF-TOKEN` on the first HTTP GET request. On subsequent XHR requests the
server can verify that the cookie matches `X-XSRF-TOKEN` HTTP header, and therefore be sure
that only JavaScript running on your domain could have sent the request. The token must be
unique for each user and must be verifiable by the server (to prevent the JavaScript from
making up its own tokens). We recommend that the token is a digest of your site's
authentication cookie with a [salt](https://en.wikipedia.org/wiki/Salt_(cryptography&#41;)
for added security.

The name of the headers can be specified using the xsrfHeaderName and xsrfCookieName
properties of either $httpProvider.defaults at config-time, $http.defaults at run-time,
or the per-request config object.







## Dependencies


* ng.$httpBackend
* $cacheFactory
* $rootScope
* $q
* $injector



  

## Usage
```js
$http(config);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| config | object | <p>Object describing the request to be made and how it should be processed. The object has following properties:</p> <ul> <li><strong>method</strong> – <code>{string}</code> – HTTP method (e.g. &#39;GET&#39;, &#39;POST&#39;, etc)</li> <li><strong>url</strong> – <code>{string}</code> – Absolute or relative URL of the resource that is being requested.</li> <li><strong>params</strong> – <code>{Object.&lt;string&amp;#124;Object&gt;}</code> – Map of strings or objects which will be turned to <code>?key1=value1&amp;key2=value2</code> after the url. If the value is not a string, it will be JSONified.</li> <li><strong>data</strong> – <code>{string&amp;#124;Object}</code> – Data to be sent as the request message data.</li> <li><strong>headers</strong> – <code>{Object}</code> – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.</li> <li><strong>xsrfHeaderName</strong> – <code>{string}</code> – Name of HTTP header to populate with the XSRF token.</li> <li><strong>xsrfCookieName</strong> – <code>{string}</code> – Name of cookie containing the XSRF token.</li> <li><strong>transformRequest</strong> – <code>{function(data, headersGetter)&amp;#124;Array.&lt;function(data, headersGetter)&gt;}</code> – transform function or an array of such functions. The transform function takes the http request body and headers and returns its transformed (typically serialized) version. See (Overriding the Default Transformations)[api/ng/service/$http#overriding-the-default-transformations-per-request]</li> <li><strong>transformResponse</strong> – <code>{function(data, headersGetter, status)&amp;#124;Array.&lt;function(data, headersGetter, status)&gt;}</code> – transform function or an array of such functions. The transform function takes the http response body, headers and status and returns its transformed (typically deserialized) version. See (Overriding the Default Transformations)[api/ng/service/$http#overriding-the-default-transformations-per-request]</li> <li><strong>paramSerializer</strong> - {string&#124;function(Object<string,string>):string} - A function used to prepare string representation of request parameters (specified as an object). Is specified as string, it is interpreted as function registered in with the {$injector}.</li> <li><strong>cache</strong> – <code>{boolean&amp;#124;Cache}</code> – If true, a default $http cache will be used to cache the GET request, otherwise if a cache instance built with ($cacheFactory)[api/ng/service/$cacheFactory], this cache will be used for caching.</li> <li><strong>timeout</strong> – <code>{number&amp;#124;Promise}</code> – timeout in milliseconds, or (promise)[api/ng/service/$q] that should abort the request when resolved.</li> <li><strong>withCredentials</strong> - <code>{boolean}</code> - whether to set the <code>withCredentials</code> flag on the XHR object. See <a href="https://developer.mozilla.org/docs/Web/HTTP/Access_control_CORS#Requests_with_credentials">requests with credentials</a> for more information.</li> <li><strong>responseType</strong> - <code>{string}</code> - see <a href="https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType">requestType</a>.</li> </ul>  |

### Returns

| Type | Description |
| :--: | :--: |
| HttpPromise | <p>Returns a (promise)[api/ng/service/$q] object with the standard <code>then</code> method and two http specific methods: <code>success</code> and <code>error</code>. The <code>then</code> method takes two arguments a success and an error callback which will be called with a response object. The <code>success</code> and <code>error</code> methods take a single argument - a function that will be called when the request succeeds or fails respectively. The arguments passed into these functions are destructured representation of the response object passed into the <code>then</code> method. The response object has these properties:</p> <ul> <li><strong>data</strong> – <code>{string&amp;#124;Object}</code> – The response body transformed with the transform functions.</li> <li><strong>status</strong> – <code>{number}</code> – HTTP status code of the response.</li> <li><strong>headers</strong> – <code>{function([headerName])}</code> – Header getter function.</li> <li><strong>config</strong> – <code>{Object}</code> – The configuration object that was used to generate the request.</li> <li><strong>statusText</strong> – <code>{string}</code> – HTTP status text of the response.</li> </ul>  |


## Methods
### get
Shortcut method to perform `GET` request.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string | <p>Relative or absolute URL specifying the destination of the request</p>  |
| config | Object= | <p>Optional configuration object</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| HttpPromise | <p>Future object</p>  |




### delete
Shortcut method to perform `DELETE` request.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string | <p>Relative or absolute URL specifying the destination of the request</p>  |
| config | Object= | <p>Optional configuration object</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| HttpPromise | <p>Future object</p>  |




### head
Shortcut method to perform `HEAD` request.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string | <p>Relative or absolute URL specifying the destination of the request</p>  |
| config | Object= | <p>Optional configuration object</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| HttpPromise | <p>Future object</p>  |




### jsonp
Shortcut method to perform `JSONP` request.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string | <p>Relative or absolute URL specifying the destination of the request. The name of the callback should be the string <code>JSON_CALLBACK</code>.</p>  |
| config | Object= | <p>Optional configuration object</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| HttpPromise | <p>Future object</p>  |




### post
Shortcut method to perform `POST` request.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string | <p>Relative or absolute URL specifying the destination of the request</p>  |
| data | * | <p>Request content</p>  |
| config | Object= | <p>Optional configuration object</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| HttpPromise | <p>Future object</p>  |




### put
Shortcut method to perform `PUT` request.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string | <p>Relative or absolute URL specifying the destination of the request</p>  |
| data | * | <p>Request content</p>  |
| config | Object= | <p>Optional configuration object</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| HttpPromise | <p>Future object</p>  |




### patch
Shortcut method to perform `PATCH` request.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string | <p>Relative or absolute URL specifying the destination of the request</p>  |
| data | * | <p>Request content</p>  |
| config | Object= | <p>Optional configuration object</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| HttpPromise | <p>Future object</p>  |







## Properties
### pendingRequests

| Type | Description |
| :--: | :--: |
| Array.<Object> | <p>Array of config objects for currently pending requests. This is primarily meant to be used for debugging purposes.</p>  |
  

### defaults

| Type | Description |
| :--: | :--: |
|  | <p>Runtime equivalent of the <code>$httpProvider.defaults</code> property. Allows configuration of default headers, withCredentials as well as request and response transformations.</p> <p>See &quot;Setting HTTP Headers&quot; and &quot;Transforming Requests and Responses&quot; sections above.</p>  |
  





