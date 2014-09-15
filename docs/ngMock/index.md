
# ngMock

# ngMock

The `ngMock` module provides support to inject and mock Angular services into unit tests.
In addition, ngMock also extends various core ng services such that they can be
inspected and controlled in a synchronous manner within test code.


<div doc-module-components="ngMock"></div>


## Installation

First include angular-mocks.js in your HTML:

```
<script src="angular.js">
<script src="angular-mocks.js">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-mocks.js</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install angular-mocks@X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/angular-mocks.js&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['ngMock']);
```

With that you&apos;re ready to get started!




## Module Components

### object

| Name | Description |
| :--: | :--: |
| angular.mock | <p>Namespace from &#39;angular-mocks.js&#39; which contains testing related code.</p>  |


### provider

| Name | Description |
| :--: | :--: |
| $exceptionHandlerProvider | <p>Configures the mock implementation of (<code>$exceptionHandler</code>)[api/ng/service/$exceptionHandler] to rethrow or to log errors</p>  |


### service

| Name | Description |
| :--: | :--: |
| $exceptionHandler | <p>Mock implementation of (<code>$exceptionHandler</code>)[api/ng/service/$exceptionHandler] that rethrows or logs errors passed</p>  |
| $log | <p>Mock implementation of (<code>$log</code>)[api/ng/service/$log] that gathers all logged messages in arrays</p>  |
| $interval | <p>Mock implementation of the $interval service.</p>  |
| $httpBackend | <p>Fake HTTP backend implementation suitable for unit testing applications that use the</p>  |
| $timeout | <p>This service is just a simple decorator for ($timeout)[api/ng/service/$timeout] service</p>  |


### type

| Name | Description |
| :--: | :--: |
| angular.mock.TzDate | <p><em>NOTE</em>: this is not an injectable instance, just a globally available mock class of <code>Date</code>.</p>  |


### function

| Name | Description |
| :--: | :--: |
| angular.mock.dump | <p><em>NOTE</em>: this is not an injectable instance, just a globally available function.</p>  |
| angular.mock.module | <p><em>NOTE</em>: This function is also published on window for easy access.<br></p>  |
| angular.mock.inject | <p><em>NOTE</em>: This function is also published on window for easy access.<br></p>  |







