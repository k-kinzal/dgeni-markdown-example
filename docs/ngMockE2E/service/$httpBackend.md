



# $httpBackend











Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
applications that use the ($http service)[api/ng/service/$http].

*Note*: For fake http backend implementation suitable for unit testing please see
(unit-testing $httpBackend mock)[api/ngMock/service/$httpBackend].

This implementation can be used to respond with static or dynamic responses via the `when` api
and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
templates from a webserver).

As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
is being developed with the real backend api replaced with a mock, it is often desirable for
certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
templates or static files from the webserver). To configure the backend with this behavior
use the `passThrough` request handler of `when` instead of `respond`.

Additionally, we don't want to manually have to flush mocked out requests like we do during unit
testing. For this reason the e2e $httpBackend flushes mocked out requests
automatically, closely simulating the behavior of the XMLHttpRequest object.

To setup the application to run with this http backend, you have to create a module that depends
on the `ngMockE2E` and your application modules and defines the fake backend:

```js
  myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
  myAppDev.run(function($httpBackend) {
    phones = [{name: 'phone1'}, {name: 'phone2'}];

    // returns the current list of phones
    $httpBackend.whenGET('/phones').respond(phones);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
      var phone = angular.fromJson(data);
      phones.push(phone);
      return [200, phone, {}];
    });
    $httpBackend.whenGET(/^\/templates\//).passThrough();
    //...
  });
```

Afterwards, bootstrap your app with this new module.







  




## Methods
### when
Creates a new backend definition.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| method | string | <p>HTTP method.</p>  |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp)= | <p>HTTP request body.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers or function that receives http header object and returns true if the headers match the current definition.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> and <code>passThrough</code> methods that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> or <code>passThrough</code> again in order to change how a matched request is handled.</p> <ul> <li>respond – <code>{function([status,] data[, headers, statusText]) &amp;#124; function(function(method, url, data, headers)}</code> – The respond method takes a set of static data to be returned or a function that can return an array containing response status (number), response data (string), response headers (Object), and the text for the status (string).</li> <li>passThrough – <code>{function()}</code> – Any request matching a backend definition with <code>passThrough</code> handler will be passed through to the real backend (an XHR request will be made to the server.)</li> <li>Both methods return the <code>requestHandler</code> object for possible overrides.</li> </ul>  |




### whenGET
Creates a new backend definition for GET requests. For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> and <code>passThrough</code> methods that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> or <code>passThrough</code> again in order to change how a matched request is handled.</p>  |




### whenHEAD
Creates a new backend definition for HEAD requests. For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> and <code>passThrough</code> methods that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> or <code>passThrough</code> again in order to change how a matched request is handled.</p>  |




### whenDELETE
Creates a new backend definition for DELETE requests. For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> and <code>passThrough</code> methods that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> or <code>passThrough</code> again in order to change how a matched request is handled.</p>  |




### whenPOST
Creates a new backend definition for POST requests. For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp)= | <p>HTTP request body.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> and <code>passThrough</code> methods that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> or <code>passThrough</code> again in order to change how a matched request is handled.</p>  |




### whenPUT
Creates a new backend definition for PUT requests.  For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp)= | <p>HTTP request body.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> and <code>passThrough</code> methods that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> or <code>passThrough</code> again in order to change how a matched request is handled.</p>  |




### whenPATCH
Creates a new backend definition for PATCH requests.  For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp)= | <p>HTTP request body.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> and <code>passThrough</code> methods that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> or <code>passThrough</code> again in order to change how a matched request is handled.</p>  |




### whenJSONP
Creates a new backend definition for JSONP requests. For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> and <code>passThrough</code> methods that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> or <code>passThrough</code> again in order to change how a matched request is handled.</p>  |










