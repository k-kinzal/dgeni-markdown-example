
# ngSanitize

# ngSanitize

The `ngSanitize` module provides functionality to sanitize HTML.


<div doc-module-components="ngSanitize"></div>

See (`$sanitize`)[api/ngSanitize/service/$sanitize] for usage.


## Installation

First include angular-sanitize.js in your HTML:

```
<script src="angular.js">
<script src="angular-sanitize.js">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-sanitize.js</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install angular-sanitize@X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/angular-sanitize.js&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['ngSanitize']);
```

With that you&apos;re ready to get started!




## Module Components

### filter

| Name | Description |
| :--: | :--: |
| linky | <p>Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and</p>  |


### service

| Name | Description |
| :--: | :--: |
| $sanitize | <p>The input is sanitized by parsing the html into tokens. All safe tokens (from a whitelist) are</p>  |







