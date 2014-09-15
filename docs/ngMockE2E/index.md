
# ngMockE2E

The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
Currently there is only one mock present in this module -
the (e2e $httpBackend)[api/ngMockE2E/service/$httpBackend] mock.


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
angular.module('app', ['ngMockE2E']);
```

With that you&apos;re ready to get started!




## Module Components

### service

| Name | Description |
| :--: | :--: |
| $httpBackend | <p>Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of</p>  |







