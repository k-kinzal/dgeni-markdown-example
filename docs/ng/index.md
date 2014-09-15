
# ng

# ng (core module)
The ng module is loaded by default when an AngularJS application is started. The module itself
contains the essential components for an AngularJS application to function. The table below
lists a high level breakdown of each of the services/factories, filters, directives and testing
components available within this core module.

<div doc-module-components="ng"></div>




## Module Components

### function

| Name | Description |
| :--: | :--: |
| angular.lowercase | <p>Converts the specified string to lowercase.</p>  |
| angular.uppercase | <p>Converts the specified string to uppercase.</p>  |
| angular.forEach | <p>Invokes the <code>iterator</code> function once for each item in <code>obj</code> collection, which can be either an</p>  |
| angular.extend | <p>Extends the destination object <code>dst</code> by copying all of the properties from the <code>src</code> object(s)</p>  |
| angular.noop | <p>A function that performs no operations. This function can be useful when writing code in the</p>  |
| angular.identity | <p>A function that returns its first argument. This function is useful when writing code in the</p>  |
| angular.isUndefined | <p>Determines if a reference is undefined.</p>  |
| angular.isDefined | <p>Determines if a reference is defined.</p>  |
| angular.isObject | <p>Determines if a reference is an <code>Object</code>. Unlike <code>typeof</code> in JavaScript, <code>null</code>s are not</p>  |
| angular.isString | <p>Determines if a reference is a <code>String</code>.</p>  |
| angular.isNumber | <p>Determines if a reference is a <code>Number</code>.</p>  |
| angular.isDate | <p>Determines if a value is a date.</p>  |
| angular.isArray | <p>Determines if a reference is an <code>Array</code>.</p>  |
| angular.isFunction | <p>Determines if a reference is a <code>Function</code>.</p>  |
| angular.isElement | <p>Determines if a reference is a DOM element (or wrapped jQuery element).</p>  |
| angular.copy | <p>Creates a deep copy of <code>source</code>, which should be an object or an array.</p>  |
| angular.equals | <p>Determines if two objects or two values are equivalent. Supports value types, regular</p>  |
| angular.bind | <p>Returns a function which calls function <code>fn</code> bound to <code>self</code> (<code>self</code> becomes the <code>this</code> for</p>  |
| angular.toJson | <p>Serializes input into a JSON-formatted string. Properties with leading $$ characters will be</p>  |
| angular.fromJson | <p>Deserializes a JSON string.</p>  |
| angular.bootstrap | <p>Use this function to manually start up angular application.</p>  |
| angular.reloadWithDebugInfo | <p>Use this function to reload the current application with debug information turned on.</p>  |
| angular.injector | <p>Creates an injector function that can be used for retrieving services as well as for</p>  |
| angular.element | <p>Wraps a raw DOM element or HTML string as a <a href="http://jquery.com">jQuery</a> element.</p>  |
| angular.module | <p>The <code>angular.module</code> is a global place for creating, registering and retrieving Angular</p>  |


### directive

| Name | Description |
| :--: | :--: |
| ngApp | <p>Use this directive to <strong>auto-bootstrap</strong> an AngularJS application. The <code>ngApp</code> directive</p>  |
| a | <p>Modifies the default behavior of the html A tag so that the default action is prevented when</p>  |
| ngHref | <p>Using Angular markup like <code>{{hash}}</code> in an href attribute will</p>  |
| ngSrc | <p>Using Angular markup like <code>{{hash}}</code> in a <code>src</code> attribute doesn&#39;t</p>  |
| ngSrcset | <p>Using Angular markup like <code>{{hash}}</code> in a <code>srcset</code> attribute doesn&#39;t</p>  |
| ngDisabled | <p>We shouldn&#39;t do this, because it will make the button enabled on Chrome/Firefox but not on IE8 and older IEs:</p>  |
| ngChecked | <p>The HTML specification does not require browsers to preserve the values of boolean attributes</p>  |
| ngReadonly | <p>The HTML specification does not require browsers to preserve the values of boolean attributes</p>  |
| ngSelected | <p>The HTML specification does not require browsers to preserve the values of boolean attributes</p>  |
| ngOpen | <p>The HTML specification does not require browsers to preserve the values of boolean attributes</p>  |
| ngForm | <p>Nestable alias of (<code>form</code>)[api/ng/directive/form] directive. HTML</p>  |
| form | <p>Directive that instantiates</p>  |
| textarea | <p>HTML textarea element control with angular data-binding. The data-binding and validation</p>  |
| input | <p>HTML input element control with angular data-binding. Input control follows HTML5 input types</p>  |
| ngModel | <p>The <code>ngModel</code> directive binds an <code>input</code>,<code>select</code>, <code>textarea</code> (or custom form control) to a</p>  |
| ngChange | <p>Evaluate the given expression when the user changes the input.</p>  |
| ngList | <p>Text input that converts between a delimited string and an array of strings. The default</p>  |
| ngValue | <p>Binds the given expression to the value of <code>input[select]</code> or <code>input[radio]</code>, so</p>  |
| ngModelOptions | <p>Allows tuning how model updates are done. Using <code>ngModelOptions</code> you can specify a custom list of</p>  |
| ngBind | <p>The <code>ngBind</code> attribute tells Angular to replace the text content of the specified HTML element</p>  |
| ngBindTemplate | <p>The <code>ngBindTemplate</code> directive specifies that the element</p>  |
| ngBindHtml | <p>Creates a binding that will innerHTML the result of evaluating the <code>expression</code> into the current</p>  |
| ngClass | <p>The <code>ngClass</code> directive allows you to dynamically set CSS classes on an HTML element by databinding</p>  |
| ngClassOdd | <p>The <code>ngClassOdd</code> and <code>ngClassEven</code> directives work exactly as</p>  |
| ngClassEven | <p>The <code>ngClassOdd</code> and <code>ngClassEven</code> directives work exactly as</p>  |
| ngCloak | <p>The <code>ngCloak</code> directive is used to prevent the Angular html template from being briefly</p>  |
| ngController | <p>The <code>ngController</code> directive attaches a controller class to the view. This is a key aspect of how angular</p>  |
| ngCsp | <p>Enables <a href="https://developer.mozilla.org/en/Security/CSP">CSP (Content Security Policy)</a> support.</p>  |
| ngClick | <p>The ngClick directive allows you to specify custom behavior when</p>  |
| ngDblclick | <p>The <code>ngDblclick</code> directive allows you to specify custom behavior on a dblclick event.</p>  |
| ngMousedown | <p>The ngMousedown directive allows you to specify custom behavior on mousedown event.</p>  |
| ngMouseup | <p>Specify custom behavior on mouseup event.</p>  |
| ngMouseover | <p>Specify custom behavior on mouseover event.</p>  |
| ngMouseenter | <p>Specify custom behavior on mouseenter event.</p>  |
| ngMouseleave | <p>Specify custom behavior on mouseleave event.</p>  |
| ngMousemove | <p>Specify custom behavior on mousemove event.</p>  |
| ngKeydown | <p>Specify custom behavior on keydown event.</p>  |
| ngKeyup | <p>Specify custom behavior on keyup event.</p>  |
| ngKeypress | <p>Specify custom behavior on keypress event.</p>  |
| ngSubmit | <p>Enables binding angular expressions to onsubmit events.</p>  |
| ngFocus | <p>Specify custom behavior on focus event.</p>  |
| ngBlur | <p>Specify custom behavior on blur event.</p>  |
| ngCopy | <p>Specify custom behavior on copy event.</p>  |
| ngCut | <p>Specify custom behavior on cut event.</p>  |
| ngPaste | <p>Specify custom behavior on paste event.</p>  |
| ngIf | <p>The <code>ngIf</code> directive removes or recreates a portion of the DOM tree based on an</p>  |
| ngInclude | <p>Fetches, compiles and includes an external HTML fragment.</p>  |
| ngInit | <p>The <code>ngInit</code> directive allows you to evaluate an expression in the</p>  |
| ngNonBindable | <p>The <code>ngNonBindable</code> directive tells Angular not to compile or bind the contents of the current</p>  |
| ngPluralize | <p><code>ngPluralize</code> is a directive that displays messages according to en-US localization rules.</p>  |
| ngRepeat | <p>The <code>ngRepeat</code> directive instantiates a template once per item from a collection. Each template</p>  |
| ngShow | <p>The <code>ngShow</code> directive shows or hides the given HTML element based on the expression</p>  |
| ngHide | <p>The <code>ngHide</code> directive shows or hides the given HTML element based on the expression</p>  |
| ngStyle | <p>The <code>ngStyle</code> directive allows you to set CSS style on an HTML element conditionally.</p>  |
| ngSwitch | <p>The <code>ngSwitch</code> directive is used to conditionally swap DOM structure on your template based on a scope expression.</p>  |
| ngTransclude | <p>Directive that marks the insertion point for the transcluded DOM of the nearest parent directive that uses transclusion.</p>  |
| script | <p>Load the content of a <code>&lt;script&gt;</code> element into (<code>$templateCache</code>)[api/ng/service/$templateCache], so that the</p>  |
| select | <p>HTML <code>SELECT</code> element with angular data-binding.</p>  |


### object

| Name | Description |
| :--: | :--: |
| angular.version | <p>An object that contains information about the current AngularJS version. This object has the</p>  |


### type

| Name | Description |
| :--: | :--: |
| angular.Module | <p>Interface for configuring angular (modules)[api/ng/function/angular.module].</p>  |
| $cacheFactory.Cache | <p>A cache object used to store and retrieve data, primarily used by</p>  |
| $compile.directive.Attributes | <p>A shared object between directive compile / linking functions which contains normalized DOM</p>  |
| form.FormController | <p><code>FormController</code> keeps track of all its controls and nested forms as well as the state of them,</p>  |
| ngModel.NgModelController | <p><code>NgModelController</code> provides API for the <code>ng-model</code> directive. The controller contains</p>  |
| $rootScope.Scope | <p>A root scope can be retrieved using the ($rootScope)[api/ng/service/$rootScope] key from the</p>  |


### service

| Name | Description |
| :--: | :--: |
| $anchorScroll | <p>When called, it checks current value of <code>$location.hash()</code> and scrolls to the related element,</p>  |
| $animate | <p>The $animate service provides rudimentary DOM manipulation functions to</p>  |
| $cacheFactory | <p>Factory that constructs (Cache)[api/ng/type/$cacheFactory.Cache] objects and gives access to</p>  |
| $templateCache | <p>The first time a template is used, it is loaded in the template cache for quick retrieval. You</p>  |
| $compile | <p>Compiles an HTML string or DOM into a template and produces a template function, which</p>  |
| $controller | <p><code>$controller</code> service is responsible for instantiating controllers.</p>  |
| $document | <p>A (jQuery or jqLite)[api/ng/function/angular.element] wrapper for the browser&#39;s <code>window.document</code> object.</p>  |
| $exceptionHandler | <p>Any uncaught exception in angular expressions is delegated to this service.</p>  |
| $filter | <p>Filters are used for formatting data displayed to the user.</p>  |
| $http | <p>The <code>$http</code> service is a core Angular service that facilitates communication with the remote</p>  |
| $httpBackend | <p>HTTP backend used by the (service)[api/ng/service/$http] that delegates to</p>  |
| $interpolate | <p>Compiles a string with markup into an interpolation function. This service is used by the</p>  |
| $interval | <p>Angular&#39;s wrapper for <code>window.setInterval</code>. The <code>fn</code> function is executed every <code>delay</code></p>  |
| $locale | <p>$locale service provides localization rules for various Angular components. As of right now the</p>  |
| $location | <p>The $location service parses the URL in the browser address bar (based on the</p>  |
| $log | <p>Simple service for logging. Default implementation safely writes the message</p>  |
| $parse | <p>Converts Angular (expression)[guide/expression] into a function.</p>  |
| $q | <p>A promise/deferred implementation inspired by <a href="https://github.com/kriskowal/q">Kris Kowal&#39;s Q</a>.</p>  |
| $rootElement | <p>The root element of Angular application. This is either the element where {@link</p>  |
| $rootScope | <p>Every application has a single root {@link ng.$rootScope.Scope scope}.</p>  |
| $sceDelegate | <p><code>$sceDelegate</code> is a service that is used by the <code>$sce</code> service to provide (Strict</p>  |
| $sce | <p><code>$sce</code> is a service that provides Strict Contextual Escaping services to AngularJS.</p>  |
| $templateRequest | <p>The <code>$templateRequest</code> service downloads the provided template using <code>$http</code> and, upon success,</p>  |
| $timeout | <p>Angular&#39;s wrapper for <code>window.setTimeout</code>. The <code>fn</code> function is wrapped into a try/catch</p>  |
| $window | <p>A reference to the browser&#39;s <code>window</code> object. While <code>window</code></p>  |


### provider

| Name | Description |
| :--: | :--: |
| $animateProvider | <p>Default implementation of $animate that doesn&#39;t perform any animations, instead just</p>  |
| $compileProvider |  |
| $controllerProvider | <p>The {@link ng.$controller $controller service)[api/ng/service/$sce] is used by Angular to create new</p>  |
| $filterProvider | <p>Filters are just functions which transform input to an output. However filters need to be</p>  |
| $httpProvider | <p>Use <code>$httpProvider</code> to change the default behavior of the ($http)[api/ng/service/$http] service.</p>  |
| $interpolateProvider | <p>Used for configuring the interpolation markup. Defaults to <code>{{</code> and <code>}}</code>.</p>  |
| $locationProvider | <p>Use the <code>$locationProvider</code> to configure how the application deep linking paths are stored.</p>  |
| $logProvider | <p>Use the <code>$logProvider</code> to configure how the application logs messages</p>  |
| $parseProvider | <p><code>$parseProvider</code> can be used for configuring the default behavior of the ($parse)[api/ng/service/$parse]</p>  |
| $rootScopeProvider | <p>Provider for the $rootScope service.</p>  |
| $sceDelegateProvider | <p>The <code>$sceDelegateProvider</code> provider allows developers to configure the (|
| $sceProvider | <p>The $sceProvider provider allows developers to configure the {@link ng.$sce $sce)[ng.$sceDelegate</p>] service.</p>  |


### input

| Name | Description |
| :--: | :--: |
| input[text] | <p>Standard HTML text input with angular data binding, inherited by most of the <code>input</code> elements.</p>  |
| input[date] | <p>Input with date validation and transformation. In browsers that do not yet support</p>  |
| input[dateTimeLocal] | <p>Input with datetime validation and transformation. In browsers that do not yet support</p>  |
| input[time] | <p>Input with time validation and transformation. In browsers that do not yet support</p>  |
| input[week] | <p>Input with week-of-the-year validation and transformation to Date. In browsers that do not yet support</p>  |
| input[month] | <p>Input with month validation and transformation. In browsers that do not yet support</p>  |
| input[number] | <p>Text input with number validation and transformation. Sets the <code>number</code> validation</p>  |
| input[url] | <p>Text input with URL validation. Sets the <code>url</code> validation error key if the content is not a</p>  |
| input[email] | <p>Text input with email validation. Sets the <code>email</code> validation error key if not a valid email</p>  |
| input[radio] | <p>HTML radio button.</p>  |
| input[checkbox] | <p>HTML checkbox.</p>  |


### filter

| Name | Description |
| :--: | :--: |
| filter | <p>Selects a subset of items from <code>array</code> and returns it as a new array.</p>  |
| currency | <p>Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default</p>  |
| number | <p>Formats a number as text.</p>  |
| date | <p>Formats <code>date</code> to a string based on the requested <code>format</code>.</p>  |
| json | <p>Allows you to convert a JavaScript object into JSON string.</p>  |
| lowercase | <p>Converts string to lowercase.</p>  |
| uppercase | <p>Converts string to uppercase.</p>  |
| limitTo | <p>Creates a new array or string containing only a specified number of elements. The elements</p>  |
| orderBy | <p>Orders a specified <code>array</code> by the <code>expression</code> predicate. It is ordered alphabetically</p>  |







