
# ngResource

# ngResource

The `ngResource` module provides interaction support with RESTful services
via the $resource service.


<div doc-module-components="ngResource"></div>

See (`$resource`)[api/ngResource/service/$resource] for usage.


## Installation

First include angular-resource.js in your HTML:

```
<script src="angular.js">
<script src="angular-resource.js">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-resource.js</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install angular-resource@X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/angular-resource.js&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['ngResource']);
```

With that you&apos;re ready to get started!




## Module Components

### service

| Name | Description |
| :--: | :--: |
| $resource | <p>A factory which creates a resource object that lets you interact with <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer">RESTful</a> server-side data sources.</p> <p>The returned resource object has action methods which provide high-level behaviors without the need to interact with the low level ($http)[api/ng/service/$http]</p>  |







