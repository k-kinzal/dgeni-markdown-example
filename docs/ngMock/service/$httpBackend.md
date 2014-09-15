



# $httpBackend











Fake HTTP backend implementation suitable for unit testing applications that use the
($http service)[api/ng/service/$http].

*Note*: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
development please see (e2e $httpBackend mock)[api/ngMockE2E/service/$httpBackend].

During unit testing, we want our unit tests to run quickly and have no external dependencies so
we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
[JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
to verify whether a certain request has been sent or not, or alternatively just let the
application make requests, respond with pre-trained responses and assert that the end result is
what we expect it to be.

This mock implementation can be used to respond with static or dynamic responses via the
`expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).

When an Angular application needs some data from a server, it calls the $http service, which
sends the request to a real server using $httpBackend service. With dependency injection, it is
easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
the requests and respond with some testing data without sending a request to a real server.

There are two ways to specify what test data should be returned as http responses by the mock
backend when the code under test makes http requests:

- `$httpBackend.expect` - specifies a request expectation
- `$httpBackend.when` - specifies a backend definition


# Request Expectations vs Backend Definitions

Request expectations provide a way to make assertions about requests made by the application and
to define responses for those requests. The test will fail if the expected requests are not made
or they are made in the wrong order.

Backend definitions allow you to define a fake backend for your application which doesn't assert
if a particular request was made or not, it just returns a trained response if a request is made.
The test will pass whether or not the request gets made during testing.


<table class="table">
  <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
  <tr>
    <th>Syntax</th>
    <td>.expect(...).respond(...)</td>
    <td>.when(...).respond(...)</td>
  </tr>
  <tr>
    <th>Typical usage</th>
    <td>strict unit tests</td>
    <td>loose (black-box) unit testing</td>
  </tr>
  <tr>
    <th>Fulfills multiple requests</th>
    <td>NO</td>
    <td>YES</td>
  </tr>
  <tr>
    <th>Order of requests matters</th>
    <td>YES</td>
    <td>NO</td>
  </tr>
  <tr>
    <th>Request required</th>
    <td>YES</td>
    <td>NO</td>
  </tr>
  <tr>
    <th>Response required</th>
    <td>optional (see below)</td>
    <td>YES</td>
  </tr>
</table>

In cases where both backend definitions and request expectations are specified during unit
testing, the request expectations are evaluated first.

If a request expectation has no response specified, the algorithm will search your backend
definitions for an appropriate response.

If a request didn't match any expectation or if the expectation doesn't have the response
defined, the backend definitions are evaluated in sequential order to see if any of them match
the request. The response from the first matched definition is returned.


# Flushing HTTP requests

The $httpBackend used in production always responds to requests asynchronously. If we preserved
this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
to follow and to maintain. But neither can the testing mock respond synchronously; that would
change the execution of the code under test. For this reason, the mock $httpBackend has a
`flush()` method, which allows the test to explicitly flush pending requests. This preserves
the async api of the backend, while allowing the test to execute synchronously.


# Unit testing with mock $httpBackend
The following code shows how to setup and use the mock backend when unit testing a controller.
First we create the controller under test:

  ```js
  // The controller code
  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').success(function(data, status, headers) {
      authToken = headers('A-Token');
      $scope.user = data;
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).success(function(response) {
        $scope.status = '';
      }).error(function() {
        $scope.status = 'ERROR!';
      });
    };
  }
  ```

Now we setup the mock backend and create the test specs:

  ```js
    // testing controller
    describe('MyController', function() {
       var $httpBackend, $rootScope, createController, authRequestHandler;

       beforeEach(inject(function($injector) {
         // Set up the mock http service responses
         $httpBackend = $injector.get('$httpBackend');
         // backend definition common for all tests
         authRequestHandler = $httpBackend.when('GET', '/auth.py')
                                .respond({userId: 'userX'}, {'A-Token': 'xxx'});

         // Get hold of a scope (i.e. the root scope)
         $rootScope = $injector.get('$rootScope');
         // The $controller service is used to create instances of controllers
         var $controller = $injector.get('$controller');

         createController = function() {
           return $controller('MyController', {'$scope' : $rootScope });
         };
       }));


       afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });


       it('should fetch authentication token', function() {
         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
       });


       it('should fail authentication', function() {

         // Notice how you can change the response even after it was set
         authRequestHandler.respond(401, '');

         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
         expect($rootScope.status).toBe('Failed...');
       });


       it('should send msg to server', function() {
         var controller = createController();
         $httpBackend.flush();

         // now you don’t care about the authentication, but
         // the controller will still send the request and
         // $httpBackend will respond without you having to
         // specify the expectation and response for this request

         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
         $rootScope.saveMessage('message content');
         expect($rootScope.status).toBe('Saving...');
         $httpBackend.flush();
         expect($rootScope.status).toBe('');
       });


       it('should send auth header', function() {
         var controller = createController();
         $httpBackend.flush();

         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
           // check if the header was send, if it wasn't the expectation won't
           // match the request and the test will fail
           return headers['Authorization'] == 'xxx';
         }).respond(201, '');

         $rootScope.saveMessage('whatever');
         $httpBackend.flush();
       });
    });
   ```







  




## Methods
### when
Creates a new backend definition.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| method | string | <p>HTTP method.</p>  |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp&#124;function(string))= | <p>HTTP request body or function that receives data string and returns true if the data is as expected.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers or function that receives http header object and returns true if the headers match the current definition.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that controls how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p> <ul> <li>respond – <code>{function([status,] data[, headers, statusText]) &amp;#124; function(function(method, url, data, headers)}</code> – The respond method takes a set of static data to be returned or a function that can return an array containing response status (number), response data (string), response headers (Object), and the text for the status (string). The respond method returns the <code>requestHandler</code> object for possible overrides.</li> </ul>  |




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
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




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
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




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
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### whenPOST
Creates a new backend definition for POST requests. For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp&#124;function(string))= | <p>HTTP request body or function that receives data string and returns true if the data is as expected.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### whenPUT
Creates a new backend definition for PUT requests.  For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp&#124;function(string))= | <p>HTTP request body or function that receives data string and returns true if the data is as expected.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### whenJSONP
Creates a new backend definition for JSONP requests. For more info see `when()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### expect
Creates a new request expectation.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| method | string | <p>HTTP method.</p>  |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp&#124;function(string)&#124;Object)= | <p>HTTP request body or function that receives data string and returns true if the data is as expected, or Object if request body is in JSON format.</p>  |
| headers | (Object&#124;function(Object))= | <p>HTTP headers or function that receives http header object and returns true if the headers match the current expectation.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p> <ul> <li>respond – <code>{function([status,] data[, headers, statusText]) &amp;#124; function(function(method, url, data, headers)}</code> – The respond method takes a set of static data to be returned or a function that can return an array containing response status (number), response data (string), response headers (Object), and the text for the status (string). The respond method returns the <code>requestHandler</code> object for possible overrides.</li> </ul>  |




### expectGET
Creates a new request expectation for GET requests. For more info see `expect()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| headers | Object= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled. See #expect for more info.</p>  |




### expectHEAD
Creates a new request expectation for HEAD requests. For more info see `expect()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| headers | Object= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### expectDELETE
Creates a new request expectation for DELETE requests. For more info see `expect()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| headers | Object= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### expectPOST
Creates a new request expectation for POST requests. For more info see `expect()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp&#124;function(string)&#124;Object)= | <p>HTTP request body or function that receives data string and returns true if the data is as expected, or Object if request body is in JSON format.</p>  |
| headers | Object= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### expectPUT
Creates a new request expectation for PUT requests. For more info see `expect()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp&#124;function(string)&#124;Object)= | <p>HTTP request body or function that receives data string and returns true if the data is as expected, or Object if request body is in JSON format.</p>  |
| headers | Object= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### expectPATCH
Creates a new request expectation for PATCH requests. For more info see `expect()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |
| data | (string&#124;RegExp&#124;function(string)&#124;Object)= | <p>HTTP request body or function that receives data string and returns true if the data is as expected, or Object if request body is in JSON format.</p>  |
| headers | Object= | <p>HTTP headers.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### expectJSONP
Creates a new request expectation for JSONP requests. For more info see `expect()`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string&#124;RegExp&#124;function(string) | <p>HTTP url or function that receives the url and returns true if the url match the current definition.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| requestHandler | <p>Returns an object with <code>respond</code> method that control how a matched request is handled. You can save this object for later use and invoke <code>respond</code> again in order to change how a matched request is handled.</p>  |




### flush
Flushes all pending requests using the trained responses.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| count | number= | <p>Number of responses to flush (in the order they arrived). If undefined, all pending requests will be flushed. If there are no pending requests when the flush method is called an exception is thrown (as this typically a sign of programming error).</p>  |






### verifyNoOutstandingExpectation
Verifies that all of the requests defined via the `expect` api were made. If any of the
requests were not made, verifyNoOutstandingExpectation throws an exception.

Typically, you would call this method following each test case that asserts requests using an
"afterEach" clause.

```js
  afterEach($httpBackend.verifyNoOutstandingExpectation);
```








### verifyNoOutstandingRequest
Verifies that there are no outstanding requests that need to be flushed.

Typically, you would call this method following each test case that asserts requests using an
"afterEach" clause.

```js
  afterEach($httpBackend.verifyNoOutstandingRequest);
```








### resetExpectations
Resets all request expectations, but preserves all backend definitions. Typically, you would
call resetExpectations during a multiple-phase test when you want to reuse the same instance of
$httpBackend mock.














