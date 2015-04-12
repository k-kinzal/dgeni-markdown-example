
# ngAria

The `ngAria` module provides support for common
[<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](http://www.w3.org/TR/wai-aria/)
attributes that convey state or semantic information about the application for users
of assistive technologies, such as screen readers.

<div doc-module-components="ngAria"></div>

## Usage

For ngAria to do its magic, simply include the module as a dependency. The directives supported
by ngAria are:
`ngModel`, `ngDisabled`, `ngShow`, `ngHide`, `ngClick`, `ngDblClick`, and `ngMessages`.

Below is a more detailed breakdown of the attributes handled by ngAria:

| Directive                                   | Supported Attributes                                                                   |
|---------------------------------------------|----------------------------------------------------------------------------------------|
| (ngDisabled)[api/ng/directive/ngDisabled]  | aria-disabled                                                                          |
| (ngShow)[api/ng/directive/ngShow]          | aria-hidden                                                                            |
| (ngHide)[api/ng/directive/ngHide]          | aria-hidden                                                                            |
| (ngDblclick)[api/ng/directive/ngDblclick]  | tabindex                                                                               |
| (ngMessages)[api/ngMessages]        | aria-live                                                                              |
| (ngModel)[api/ng/directive/ngModel]        | aria-checked, aria-valuemin, aria-valuemax, aria-valuenow, aria-invalid, aria-required, input roles |
| (ngClick)[api/ng/directive/ngClick]        | tabindex, keypress event, button role                                                               |

Find out more information about each directive by reading the
(ngAria Developer Guide)[guide/accessibility].

##Example
Using ngDisabled with ngAria:
```html
<md-checkbox ng-disabled="disabled">
```
Becomes:
```html
<md-checkbox ng-disabled="disabled" aria-disabled="true">
```

##Disabling Attributes
It's possible to disable individual attributes added by ngAria with the
(config)[api/ngAria/provider/$ariaProvider#config] method. For more details, see the
(Developer Guide)[guide/accessibility].


## Installation

First include angular-aria.js in your HTML:

```
<script src="angular.js">
<script src="angular-aria.js">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-aria.js</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install angular-aria@X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/angular-aria.js&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['ngAria']);
```

With that you&apos;re ready to get started!




## Module Components

### provider

| Name | Description |
| :--: | :--: |
| $ariaProvider | <p>Used for configuring the ARIA attributes injected and managed by ngAria.</p>  |


### service

| Name | Description |
| :--: | :--: |
| $aria |  |







