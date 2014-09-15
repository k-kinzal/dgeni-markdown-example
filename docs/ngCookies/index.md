
# ngCookies

# ngCookies

The `ngCookies` module provides a convenient wrapper for reading and writing browser cookies.


<div doc-module-components="ngCookies"></div>

See (`$cookies`)[api/ngCookies/service/$cookies] and
(`$cookieStore`)[api/ngCookies/service/$cookieStore] for usage.


## Installation

First include angular-cookies.js in your HTML:

```
<script src="angular.js">
<script src="angular-cookies.js">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-cookies.js</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install angular-cookies@X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/angular-cookies.js&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['ngCookies']);
```

With that you&apos;re ready to get started!




## Module Components

### service

| Name | Description |
| :--: | :--: |
| $cookies | <p>Provides read/write access to browser&#39;s cookies.</p>  |
| $cookieStore | <p>Provides a key-value (string-object) storage, that is backed by session cookies.</p>  |







