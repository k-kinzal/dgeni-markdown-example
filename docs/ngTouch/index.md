
# ngTouch

# ngTouch

The `ngTouch` module provides touch events and other helpers for touch-enabled devices.
The implementation is based on jQuery Mobile touch event handling
([jquerymobile.com](http://jquerymobile.com/)).


See (`$swipe`)[api/ngTouch/service/$swipe] for usage.

<div doc-module-components="ngTouch"></div>


## Installation

First include angular-touch.js in your HTML:

```
<script src="angular.js">
<script src="angular-touch.js">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-touch.js</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install angular-touch@X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/angular-touch.js&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['ngTouch']);
```

With that you&apos;re ready to get started!




## Module Components

### directive

| Name | Description |
| :--: | :--: |
| ngClick | <p>A more powerful replacement for the default ngClick designed to be used on touchscreen devices. Most mobile browsers wait about 300ms after a tap-and-release before sending the click event. This version handles them immediately, and then prevents the following click event from propagating.</p> <p>Requires the (<code>ngTouch</code>)[api/ngTouch]</p>  |
| ngSwipeLeft | <p>Specify custom behavior when an element is swiped to the left on a touchscreen device. A leftward swipe is a quick, right-to-left slide of the finger. Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag too.</p> <p>To disable the mouse click and drag functionality, add <code>ng-swipe-disable-mouse</code> to the <code>ng-swipe-left</code> or <code>ng-swipe-right</code> DOM Element.</p> <p>Requires the (<code>ngTouch</code>)[api/ngTouch]</p>  |
| ngSwipeRight | <p>Specify custom behavior when an element is swiped to the right on a touchscreen device. A rightward swipe is a quick, left-to-right slide of the finger. Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag too.</p> <p>Requires the (<code>ngTouch</code>)[api/ngTouch]</p>  |


### service

| Name | Description |
| :--: | :--: |
| $swipe | <p>The <code>$swipe</code> service is a service that abstracts the messier details of hold-and-drag swipe</p>  |







