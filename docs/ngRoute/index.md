
# ngRoute

# ngRoute

The `ngRoute` module provides routing and deeplinking services and directives for angular apps.

## Example
See ($route)[api/ngRoute/service/$route#example] for an example of configuring and using `ngRoute`.


<div doc-module-components="ngRoute"></div>


## Installation

First include angular-route.js in your HTML:

```
<script src="angular.js">
<script src="angular-route.js">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-route.js</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install angular-route@X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/angular-route.js&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['ngRoute']);
```

With that you&apos;re ready to get started!




## Module Components

### directive

| Name | Description |
| :--: | :--: |
| ngView | <h1 id="overview">Overview</h1> <p><code>ngView</code> is a directive that complements the ($route)[api/ngRoute/service/$route]</p>  |


### provider

| Name | Description |
| :--: | :--: |
| $routeProvider | <p>Used for configuring routes.</p> <h2 id="example">Example</h2> <p>See ($route)[api/ngRoute/service/$route#example]</p>  |


### service

| Name | Description |
| :--: | :--: |
| $route | <p><code>$route</code> is used for deep-linking URLs to controllers and views (HTML partials).</p>  |
| $routeParams | <p>The <code>$routeParams</code> service allows you to retrieve the current set of route parameters.</p>  |







