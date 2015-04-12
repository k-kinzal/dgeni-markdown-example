
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
| angular.extend | <p>Extends the destination object <code>dst</code> by copying own enumerable properties from the <code>src</code> object(s) to <code>dst</code>. You can specify multiple <code>src</code> objects. If you want to preserve original objects, you can do so by passing an empty object as the target: <code>var object = angular.extend({}, object1, object2)</code>.</p> <p><strong>Note:</strong> Keep in mind that <code>angular.extend</code> does not support recursive merge (deep copy). Use (<code>angular.merge</code>)[api/ng/function/angular.merge]</p>  |
| angular.merge | <p>Deeply extends the destination object <code>dst</code> by copying own enumerable properties from the <code>src</code> object(s) to <code>dst</code>. You can specify multiple <code>src</code> objects. If you want to preserve original objects, you can do so by passing an empty object as the target: <code>var object = angular.merge({}, object1, object2)</code>.</p> <p>Unlike (extend())[api/ng/function/angular.extend]</p>  |
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
| angular.bootstrap | <p>Use this function to manually start up angular application.</p> <p>See: (Bootstrap)[guide/bootstrap]</p> <p>Note that Protractor based end-to-end tests cannot use this function to bootstrap manually. They must use (ngApp)[api/ng/directive/ngApp]</p>  |
| angular.reloadWithDebugInfo | <p>Use this function to reload the current application with debug information turned on.</p>  |
| angular.injector | <p>Creates an injector object that can be used for retrieving services as well as for dependency injection (see (dependency injection)[guide/di]</p>  |
| angular.element | <p>Wraps a raw DOM element or HTML string as a <a href="http://jquery.com">jQuery</a> element.</p>  |
| angular.module | <p>The <code>angular.module</code> is a global place for creating, registering and retrieving Angular modules. All modules (angular core or 3rd party) that should be available to an application must be registered using this mechanism.</p> <p>When passed two or more arguments, a new module is created.  If passed only one argument, an existing module (the name passed as the first argument to <code>module</code>) is retrieved.</p> <h1 id="module">Module</h1> <p>A module is a collection of services, directives, controllers, filters, and configuration information. <code>angular.module</code> is used to configure the ($injector)[api/auto/service/$injector]</p>  |


### directive

| Name | Description |
| :--: | :--: |
| ngJq | <p>Use this directive to force the angular.element library.  This should be</p>  |
| ngApp | <p>Use this directive to <strong>auto-bootstrap</strong> an AngularJS application. The <code>ngApp</code> directive designates the <strong>root element</strong> of the application and is typically placed near the root element of the page - e.g. on the <code>&lt;body&gt;</code> or <code>&lt;html&gt;</code> tags.</p> <p>Only one AngularJS application can be auto-bootstrapped per HTML document. The first <code>ngApp</code> found in the document will be used to define the root element to auto-bootstrap as an application. To run multiple applications in an HTML document you must manually bootstrap them using (<code>angular.bootstrap</code>)[api/ng/function/angular.bootstrap] instead. AngularJS applications cannot be nested within each other.</p> <p>You can specify an <strong>AngularJS module</strong> to be used as the root module for the application.  This module will be loaded into the (<code>$injector</code>)[api/auto/service/$injector]</p>  |
| a | <p>Modifies the default behavior of the html A tag so that the default action is prevented when</p>  |
| ngHref | <p>Using Angular markup like <code>{{hash}}</code> in an href attribute will</p>  |
| ngSrc | <p>Using Angular markup like <code>{{hash}}</code> in a <code>src</code> attribute doesn&#39;t</p>  |
| ngSrcset | <p>Using Angular markup like <code>{{hash}}</code> in a <code>srcset</code> attribute doesn&#39;t</p>  |
| ngDisabled | <p>This directive sets the <code>disabled</code> attribute on the element if the (expression)[guide/expression]</p>  |
| ngChecked | <p>The HTML specification does not require browsers to preserve the values of boolean attributes</p>  |
| ngReadonly | <p>The HTML specification does not require browsers to preserve the values of boolean attributes</p>  |
| ngSelected | <p>The HTML specification does not require browsers to preserve the values of boolean attributes</p>  |
| ngOpen | <p>The HTML specification does not require browsers to preserve the values of boolean attributes</p>  |
| ngForm | <p>Nestable alias of (<code>form</code>)[api/ng/directive/form]</p>  |
| form | <p>Directive that instantiates (FormController)[api/ng/type/form.FormController].</p> <p>If the <code>name</code> attribute is specified, the form controller is published onto the current scope under this name.</p> <h1 id="alias-link-ng-directive-ngform-ngform-">Alias: (<code>ngForm</code>)[api/ng/directive/ngForm]</h1> <p>In Angular, forms can be nested. This means that the outer form is valid when all of the child forms are valid as well. However, browsers do not allow nesting of <code>&lt;form&gt;</code> elements, so Angular provides the (<code>ngForm</code>)[api/ng/directive/ngForm] directive which behaves identically to <code>&lt;form&gt;</code> but can be nested.  This allows you to have nested forms, which is very useful when using Angular validation directives in forms that are dynamically generated using the (<code>ngRepeat</code>)[api/ng/directive/ngRepeat] directive. Since you cannot dynamically generate the <code>name</code> attribute of input elements using interpolation, you have to wrap each set of repeated inputs in an <code>ngForm</code> directive and nest these in an outer <code>form</code> element.</p> <h1 id="css-classes">CSS classes</h1> <ul> <li><code>ng-valid</code> is set if the form is valid.</li> <li><code>ng-invalid</code> is set if the form is invalid.</li> <li><code>ng-pristine</code> is set if the form is pristine.</li> <li><code>ng-dirty</code> is set if the form is dirty.</li> <li><code>ng-submitted</code> is set if the form was submitted.</li> </ul> <p>Keep in mind that ngAnimate can detect each of these classes when added and removed.</p> <h1 id="submitting-a-form-and-preventing-the-default-action">Submitting a form and preventing the default action</h1> <p>Since the role of forms in client-side Angular applications is different than in classical roundtrip apps, it is desirable for the browser not to translate the form submission into a full page reload that sends the data to the server. Instead some javascript logic should be triggered to handle the form submission in an application-specific way.</p> <p>For this reason, Angular prevents the default action (form submission to the server) unless the <code>&lt;form&gt;</code> element has an <code>action</code> attribute specified.</p> <p>You can use one of the following two ways to specify what javascript method should be called when a form is submitted:</p> <ul> <li>(ngSubmit)[api/ng/directive/ngSubmit] directive on the form element</li> <li>(ngClick)[api/ng/directive/ngClick] directive on the first button or input field of type submit (input[type=submit])</li> </ul> <p>To prevent double execution of the handler, use only one of the (ngSubmit)[api/ng/directive/ngSubmit] or (ngClick)[api/ng/directive/ngClick]</p>  |
| textarea | <p>HTML textarea element control with angular data-binding. The data-binding and validation properties of this element are exactly the same as those of the (input element)[api/ng/directive/input]</p>  |
| input | <p>HTML input element control. When used together with (<code>ngModel</code>)[api/ng/directive/ngModel]</p>  |
| ngValue | <p>Binds the given expression to the value of <code>&lt;option&gt;</code> or (<code>input[radio]</code>)[api/ng/input/input[radio]], so that when the element is selected, the (<code>ngModel</code>)[api/ng/directive/ngModel] of that element is set to the bound value.</p> <p><code>ngValue</code> is useful when dynamically generating lists of radio buttons using (<code>ngRepeat</code>)[api/ng/directive/ngRepeat], as shown below.</p> <p>Likewise, <code>ngValue</code> can be used to generate <code>&lt;option&gt;</code> elements for the (<code>select</code>)[api/ng/directive/select]</p>  |
| ngBind | <p>The <code>ngBind</code> attribute tells Angular to replace the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes.</p> <p>Typically, you don&#39;t use <code>ngBind</code> directly, but instead you use the double curly markup like <code>{{ expression }}</code> which is similar but less verbose.</p> <p>It is preferable to use <code>ngBind</code> instead of <code>{{ expression }}</code> if a template is momentarily displayed by the browser in its raw state before Angular compiles it. Since <code>ngBind</code> is an element attribute, it makes the bindings invisible to the user while the page is loading.</p> <p>An alternative solution to this problem would be using the (ngCloak)[api/ng/directive/ngCloak]</p>  |
| ngBindTemplate | <p>The <code>ngBindTemplate</code> directive specifies that the element</p>  |
| ngBindHtml | <p>Evaluates the expression and inserts the resulting HTML into the element in a secure way. By default, the resulting HTML content will be sanitized using the ($sanitize)[api/ngSanitize/service/$sanitize]</p>  |
| ngChange | <p>Evaluate the given expression when the user changes the input.</p>  |
| ngClass | <p>The <code>ngClass</code> directive allows you to dynamically set CSS classes on an HTML element by databinding</p>  |
| ngClassOdd | <p>The <code>ngClassOdd</code> and <code>ngClassEven</code> directives work exactly as (ngClass)[api/ng/directive/ngClass], except they work in conjunction with <code>ngRepeat</code> and take effect only on odd (even) rows.</p> <p>This directive can be applied only within the scope of an (ngRepeat)[api/ng/directive/ngRepeat]</p>  |
| ngClassEven | <p>The <code>ngClassOdd</code> and <code>ngClassEven</code> directives work exactly as (ngClass)[api/ng/directive/ngClass], except they work in conjunction with <code>ngRepeat</code> and take effect only on odd (even) rows.</p> <p>This directive can be applied only within the scope of an (ngRepeat)[api/ng/directive/ngRepeat]</p>  |
| ngCloak | <p>The <code>ngCloak</code> directive is used to prevent the Angular html template from being briefly displayed by the browser in its raw (uncompiled) form while your application is loading. Use this directive to avoid the undesirable flicker effect caused by the html template display.</p> <p>The directive can be applied to the <code>&lt;body&gt;</code> element, but the preferred usage is to apply multiple <code>ngCloak</code> directives to small portions of the page to permit progressive rendering of the browser view.</p> <p><code>ngCloak</code> works in cooperation with the following css rule embedded within <code>angular.js</code> and <code>angular.min.js</code>. For CSP mode please add <code>angular-csp.css</code> to your html file (see (ngCsp)[api/ng/directive/ngCsp]</p>  |
| ngController | <p>The <code>ngController</code> directive attaches a controller class to the view. This is a key aspect of how angular supports the principles behind the Model-View-Controller design pattern.</p> <p>MVC components in angular:</p> <ul> <li>Model — Models are the properties of a scope; scopes are attached to the DOM where scope properties are accessed through bindings.</li> <li>View — The template (HTML with data bindings) that is rendered into the View.</li> <li>Controller — The <code>ngController</code> directive specifies a Controller class; the class contains business logic behind the application to decorate the scope with functions and values</li> </ul> <p>Note that you can also attach controllers to the DOM by declaring it in a route definition via the ($route)[api/ngRoute/service/$route]</p>  |
| ngCsp | <p>Enables <a href="https://developer.mozilla.org/en/Security/CSP">CSP (Content Security Policy)</a> support.</p> <p>This is necessary when developing things like Google Chrome Extensions or Universal Windows Apps.</p> <p>CSP forbids apps to use <code>eval</code> or <code>Function(string)</code> generated functions (among other things). For Angular to be CSP compatible there are only two things that we need to do differently:</p> <ul> <li>don&#39;t use <code>Function</code> constructor to generate optimized value getters</li> <li>don&#39;t inject custom stylesheet into the document</li> </ul> <p>AngularJS uses <code>Function(string)</code> generated functions as a speed optimization. Applying the <code>ngCsp</code> directive will cause Angular to use CSP compatibility mode. When this mode is on AngularJS will evaluate all expressions up to 30% slower than in non-CSP mode, but no security violations will be raised.</p> <p>CSP forbids JavaScript to inline stylesheet rules. In non CSP mode Angular automatically includes some CSS rules (e.g. (ngCloak)[api/ng/directive/ngCloak]</p>  |
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
| ngSubmit | <p>Enables binding angular expressions to onsubmit events.</p> <p>Additionally it prevents the default action (which for form means sending the request to the server and reloading the current page), but only if the form does not contain <code>action</code>, <code>data-action</code>, or <code>x-action</code> attributes.</p> <p><div class="alert alert-warning"> <strong>Warning:</strong> Be careful not to cause &quot;double-submission&quot; by using both the <code>ngClick</code> and <code>ngSubmit</code> handlers together. See the (<code>form</code> directive documentation)[api/ng/directive/form#submitting-a-form-and-preventing-the-default-action]</p>  |
| ngFocus | <p>Specify custom behavior on focus event.</p>  |
| ngBlur | <p>Specify custom behavior on blur event.</p>  |
| ngCopy | <p>Specify custom behavior on copy event.</p>  |
| ngCut | <p>Specify custom behavior on cut event.</p>  |
| ngPaste | <p>Specify custom behavior on paste event.</p>  |
| ngIf | <p>The <code>ngIf</code> directive removes or recreates a portion of the DOM tree based on an</p>  |
| ngInclude | <p>Fetches, compiles and includes an external HTML fragment.</p> <p>By default, the template URL is restricted to the same domain and protocol as the application document. This is done by calling ($sce.getTrustedResourceUrl)[api/ng/service/$sce#getTrustedResourceUrl]</p>  |
| ngInit | <p>The <code>ngInit</code> directive allows you to evaluate an expression in the current scope.</p> <p><div class="alert alert-danger"> The only appropriate use of <code>ngInit</code> is for aliasing special properties of (<code>ngRepeat</code>)[api/ng/directive/ngRepeat], as seen in the demo below. Besides this case, you should use (controllers)[guide/controller] rather than <code>ngInit</code> to initialize values on a scope. </div></p> <p><div class="alert alert-warning"> <strong>Note</strong>: If you have assignment in <code>ngInit</code> along with (<code>$filter</code>)[api/ng/service/$filter]</p>  |
| ngList | <p>Text input that converts between a delimited string and an array of strings. The default</p>  |
| ngModel | <p>The <code>ngModel</code> directive binds an <code>input</code>,<code>select</code>, <code>textarea</code> (or custom form control) to a property on the scope using (NgModelController)[api/ng/type/ngModel.NgModelController], which is created and exposed by this directive.</p> <p><code>ngModel</code> is responsible for:</p> <ul> <li>Binding the view into the model, which other directives such as <code>input</code>, <code>textarea</code> or <code>select</code> require.</li> <li>Providing validation behavior (i.e. required, number, email, url).</li> <li>Keeping the state of the control (valid/invalid, dirty/pristine, touched/untouched, validation errors).</li> <li>Setting related css classes on the element (<code>ng-valid</code>, <code>ng-invalid</code>, <code>ng-dirty</code>, <code>ng-pristine</code>, <code>ng-touched</code>, <code>ng-untouched</code>) including animations.</li> <li>Registering the control with its parent (form)[api/ng/directive/form].</li> </ul> <p>Note: <code>ngModel</code> will try to bind to the property given by evaluating the expression on the current scope. If the property doesn&#39;t already exist on this scope, it will be created implicitly and added to the scope.</p> <p>For best practices on using <code>ngModel</code>, see:</p> <ul> <li><a href="https://github.com/angular/angular.js/wiki/Understanding-Scopes">Understanding Scopes</a></li> </ul> <p>For basic examples, how to use <code>ngModel</code>, see:</p> <ul> <li>(input)[api/ng/directive/input]<ul> <li>(text)[api/ng/input/input[text]]</li> <li>(checkbox)[api/ng/input/input[checkbox]]</li> <li>(radio)[api/ng/input/input[radio]]</li> <li>(number)[api/ng/input/input[number]]</li> <li>(email)[api/ng/input/input[email]]</li> <li>(url)[api/ng/input/input[url]]</li> <li>(date)[api/ng/input/input[date]]</li> <li>(datetime-local)[api/ng/input/input[datetime-local]]</li> <li>(time)[api/ng/input/input[time]]</li> <li>(month)[api/ng/input/input[month]]</li> <li>(week)[api/ng/input/input[week]]</li> </ul> </li> <li>(select)[api/ng/directive/select]</li> <li>(textarea)[api/ng/directive/textarea]</li> </ul>  |
| ngModelOptions | <p>Allows tuning how model updates are done. Using <code>ngModelOptions</code> you can specify a custom list of events that will trigger a model update and/or a debouncing delay so that the actual update only takes place when a timer expires; this timer will be reset after another change takes place.</p> <p>Given the nature of <code>ngModelOptions</code>, the value displayed inside input fields in the view might be different from the value in the actual model. This means that if you update the model you should also invoke (<code>$rollbackViewValue</code>)[api/ng/type/ngModel.NgModelController]</p>  |
| ngNonBindable | <p>The <code>ngNonBindable</code> directive tells Angular not to compile or bind the contents of the current</p>  |
| ngOptions | <p>The <code>ngOptions</code> attribute can be used to dynamically generate a list of <code>&lt;option&gt;</code></p>  |
| ngPluralize | <p><code>ngPluralize</code> is a directive that displays messages according to en-US localization rules. These rules are bundled with angular.js, but can be overridden (see (Angular i18n)[guide/i18n] dev guide). You configure ngPluralize directive by specifying the mappings between <a href="http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html">plural categories</a> and the strings to be displayed.</p> <h1 id="plural-categories-and-explicit-number-rules">Plural categories and explicit number rules</h1> <p>There are two <a href="http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html">plural categories</a> in Angular&#39;s default en-US locale: &quot;one&quot; and &quot;other&quot;.</p> <p>While a plural category may match many numbers (for example, in en-US locale, &quot;other&quot; can match any number that is not 1), an explicit number rule can only match one number. For example, the explicit number rule for &quot;3&quot; matches the number 3. There are examples of plural categories and explicit number rules throughout the rest of this documentation.</p> <h1 id="configuring-ngpluralize">Configuring ngPluralize</h1> <p>You configure ngPluralize by providing 2 attributes: <code>count</code> and <code>when</code>. You can also provide an optional attribute, <code>offset</code>.</p> <p>The value of the <code>count</code> attribute can be either a string or an (Angular expression)[guide/expression]</p>  |
| ngRepeat | <p>The <code>ngRepeat</code> directive instantiates a template once per item from a collection. Each template</p>  |
| ngShow | <p>The <code>ngShow</code> directive shows or hides the given HTML element based on the expression provided to the <code>ngShow</code> attribute. The element is shown or hidden by removing or adding the <code>.ng-hide</code> CSS class onto the element. The <code>.ng-hide</code> CSS class is predefined in AngularJS and sets the display style to none (using an !important flag). For CSP mode please add <code>angular-csp.css</code> to your html file (see (ngCsp)[api/ng/directive/ngCsp]</p>  |
| ngHide | <p>The <code>ngHide</code> directive shows or hides the given HTML element based on the expression provided to the <code>ngHide</code> attribute. The element is shown or hidden by removing or adding the <code>ng-hide</code> CSS class onto the element. The <code>.ng-hide</code> CSS class is predefined in AngularJS and sets the display style to none (using an !important flag). For CSP mode please add <code>angular-csp.css</code> to your html file (see (ngCsp)[api/ng/directive/ngCsp]</p>  |
| ngStyle | <p>The <code>ngStyle</code> directive allows you to set CSS style on an HTML element conditionally.</p>  |
| ngSwitch | <p>The <code>ngSwitch</code> directive is used to conditionally swap DOM structure on your template based on a scope expression.</p>  |
| ngTransclude | <p>Directive that marks the insertion point for the transcluded DOM of the nearest parent directive that uses transclusion.</p>  |
| script | <p>Load the content of a <code>&lt;script&gt;</code> element into (<code>$templateCache</code>)[api/ng/service/$templateCache]</p>  |
| select | <p>HTML <code>SELECT</code> element with angular data-binding.</p> <p>In many cases, <code>ngRepeat</code> can be used on <code>&lt;option&gt;</code> elements instead of (ngOptions)[api/ng/directive/ngOptions]</p>  |


### object

| Name | Description |
| :--: | :--: |
| angular.version | <p>An object that contains information about the current AngularJS version. This object has the</p>  |


### type

| Name | Description |
| :--: | :--: |
| angular.Module | <p>Interface for configuring angular (modules)[api/ng/function/angular.module]</p>  |
| $cacheFactory.Cache | <p>A cache object used to store and retrieve data, primarily used by ($http)[api/ng/service/$http]</p>  |
| $compile.directive.Attributes | <p>A shared object between directive compile / linking functions which contains normalized DOM</p>  |
| form.FormController | <p><code>FormController</code> keeps track of all its controls and nested forms as well as the state of them, such as being valid/invalid or dirty/pristine.</p> <p>Each (form)[api/ng/directive/form]</p>  |
| ngModel.NgModelController | <p><code>NgModelController</code> provides API for the (<code>ngModel</code>)[api/ng/directive/ngModel] directive. The controller contains services for data-binding, validation, CSS updates, and value formatting and parsing. It purposefully does not contain any logic which deals with DOM rendering or listening to DOM events. Such DOM related logic should be provided by other directives which make use of <code>NgModelController</code> for data-binding to control elements. Angular provides this DOM logic for most (<code>input</code>)[api/ng/directive/input] elements. At the end of this page you can find a (custom control example)[api/ng/type/ngModel.NgModelController#custom-control-example]</p>  |
| select.SelectController | <p>The controller for the <code>&lt;select&gt;</code> directive. This provides support for reading</p>  |
| $rootScope.Scope | <p>A root scope can be retrieved using the ($rootScope)[api/ng/service/$rootScope]</p>  |


### provider

| Name | Description |
| :--: | :--: |
| $anchorScrollProvider | <p>Use <code>$anchorScrollProvider</code> to disable automatic scrolling whenever</p>  |
| $animateProvider | <p>Default implementation of $animate that doesn&#39;t perform any animations, instead just</p>  |
| $compileProvider |  |
| $controllerProvider | <p>The ($controller service)[api/ng/service/$controller]</p>  |
| $filterProvider | <p>Filters are just functions which transform input to an output. However filters need to be Dependency Injected. To achieve this a filter definition consists of a factory function which is annotated with dependencies and is responsible for creating a filter function.</p> <p><div class="alert alert-warning"> <strong>Note:</strong> Filter names must be valid angular expression</p>  |
| $httpProvider | <p>Use <code>$httpProvider</code> to change the default behavior of the ($http)[api/ng/service/$http] service.</p>  |
| $interpolateProvider | <p>Used for configuring the interpolation markup. Defaults to <code>{{</code> and <code>}}</code>.</p>  |
| $locationProvider | <p>Use the <code>$locationProvider</code> to configure how the application deep linking paths are stored.</p>  |
| $logProvider | <p>Use the <code>$logProvider</code> to configure how the application logs messages</p>  |
| $parseProvider | <p><code>$parseProvider</code> can be used for configuring the default behavior of the ($parse)[api/ng/service/$parse]</p>  |
| $rootScopeProvider | <p>Provider for the $rootScope service.</p>  |
| $sceDelegateProvider | <p>The <code>$sceDelegateProvider</code> provider allows developers to configure the (|
| $sceProvider | <p>The $sceProvider provider allows developers to configure the {@link ng.$sce $sce)[ng.$sceDelegate</p>] service.</p>  |


### service

| Name | Description |
| :--: | :--: |
| $anchorScroll | <p>When called, it scrolls to the element related to the specified <code>hash</code> or (if omitted) to the current value of ($location.hash())[api/ng/service/$location#hash]</p>  |
| $animate | <p>The $animate service exposes a series of DOM utility methods that provide support</p>  |
| $cacheFactory | <p>Factory that constructs (Cache)[api/ng/type/$cacheFactory.Cache]</p>  |
| $templateCache | <p>The first time a template is used, it is loaded in the template cache for quick retrieval. You</p>  |
| $compile | <p>Compiles an HTML string or DOM into a template and produces a template function, which can then be used to link (<code>scope</code>)[api/ng/type/$rootScope.Scope]</p>  |
| $controller | <p><code>$controller</code> service is responsible for instantiating controllers.</p>  |
| $document | <p>A (jQuery or jqLite)[api/ng/function/angular.element]</p>  |
| $exceptionHandler | <p>Any uncaught exception in angular expressions is delegated to this service.</p>  |
| $filter | <p>Filters are used for formatting data displayed to the user.</p>  |
| $httpParamSerializer | <p>Default $http params serializer that converts objects to a part of a request URL</p>  |
| $httpParamSerializerJQLike | <p>Alternative $http params serializer that follows jQuerys <code>param()</code> method {<a href="http://api.jquery.com/jquery.param/}">http://api.jquery.com/jquery.param/}</a> logic.</p>  |
| $http | <p>The <code>$http</code> service is a core Angular service that facilitates communication with the remote</p>  |
| $httpBackend | <p>HTTP backend used by the (service)[api/ng/service/$http]</p>  |
| $interpolate | <p>Compiles a string with markup into an interpolation function. This service is used by the HTML ($compile)[api/ng/service/$compile]</p>  |
| $interval | <p>Angular&#39;s wrapper for <code>window.setInterval</code>. The <code>fn</code> function is executed every <code>delay</code></p>  |
| $locale | <p>$locale service provides localization rules for various Angular components. As of right now the</p>  |
| $location | <p>The $location service parses the URL in the browser address bar (based on the</p>  |
| $log | <p>Simple service for logging. Default implementation safely writes the message into the browser&#39;s console (if present).</p> <p>The main purpose of this service is to simplify debugging and troubleshooting.</p> <p>The default is to log <code>debug</code> messages. You can use (ng.$logProvider#debugEnabled)[api/ng/provider/$logProvider]</p>  |
| $parse | <p>Converts Angular (expression)[guide/expression]</p>  |
| $q | <p>A service that helps you run functions asynchronously, and use their return values (or exceptions)</p>  |
| $rootElement | <p>The root element of Angular application. This is either the element where (ngApp)[api/ng/directive/ngApp] was declared or the element passed into (<code>angular.bootstrap</code>)[api/ng/function/angular.bootstrap]. The element represents the root element of application. It is also the location where the application&#39;s ($injector)[api/auto/service/$injector]</p>  |
| $rootScope | <p>Every application has a single root (scope)[api/ng/type/$rootScope.Scope]</p>  |
| $sceDelegate | <p><code>$sceDelegate</code> is a service that is used by the <code>$sce</code> service to provide (Strict</p>  |
| $sce | <p><code>$sce</code> is a service that provides Strict Contextual Escaping services to AngularJS.</p>  |
| $templateRequest | <p>The <code>$templateRequest</code> service downloads the provided template using <code>$http</code> and, upon success,</p>  |
| $timeout | <p>Angular&#39;s wrapper for <code>window.setTimeout</code>. The <code>fn</code> function is wrapped into a try/catch block and delegates any exceptions to {@link ng.$exceptionHandler $exceptionHandler)[api/ng/service/$sce]</p>  |
| $window | <p>A reference to the browser&#39;s <code>window</code> object. While <code>window</code></p>  |


### input

| Name | Description |
| :--: | :--: |
| input[text] | <p>Standard HTML text input with angular data binding, inherited by most of the <code>input</code> elements.</p>  |
| input[date] | <p>Input with date validation and transformation. In browsers that do not yet support the HTML5 date input, a text element will be used. In that case, text must be entered in a valid ISO-8601 date format (yyyy-MM-dd), for example: <code>2009-01-06</code>. Since many modern browsers do not yet support this input type, it is important to provide cues to users on the expected input format via a placeholder or label.</p> <p>The model must always be a Date object, otherwise Angular will throw an error. Invalid <code>Date</code> objects (dates whose <code>getTime()</code> is <code>NaN</code>) will be rendered as an empty string.</p> <p>The timezone to be used to read/write the <code>Date</code> instance in the model can be defined using (ngModelOptions)[api/ng/directive/ngModelOptions]</p>  |
| input[datetime-local] | <p>Input with datetime validation and transformation. In browsers that do not yet support the HTML5 date input, a text element will be used. In that case, the text must be entered in a valid ISO-8601 local datetime format (yyyy-MM-ddTHH:mm:ss), for example: <code>2010-12-28T14:57:00</code>.</p> <p>The model must always be a Date object, otherwise Angular will throw an error. Invalid <code>Date</code> objects (dates whose <code>getTime()</code> is <code>NaN</code>) will be rendered as an empty string.</p> <p>The timezone to be used to read/write the <code>Date</code> instance in the model can be defined using (ngModelOptions)[api/ng/directive/ngModelOptions]</p>  |
| input[time] | <p>Input with time validation and transformation. In browsers that do not yet support the HTML5 date input, a text element will be used. In that case, the text must be entered in a valid ISO-8601 local time format (HH:mm:ss), for example: <code>14:57:00</code>. Model must be a Date object. This binding will always output a Date object to the model of January 1, 1970, or local date <code>new Date(1970, 0, 1, HH, mm, ss)</code>.</p> <p>The model must always be a Date object, otherwise Angular will throw an error. Invalid <code>Date</code> objects (dates whose <code>getTime()</code> is <code>NaN</code>) will be rendered as an empty string.</p> <p>The timezone to be used to read/write the <code>Date</code> instance in the model can be defined using (ngModelOptions)[api/ng/directive/ngModelOptions]</p>  |
| input[week] | <p>Input with week-of-the-year validation and transformation to Date. In browsers that do not yet support the HTML5 week input, a text element will be used. In that case, the text must be entered in a valid ISO-8601 week format (yyyy-W##), for example: <code>2013-W02</code>.</p> <p>The model must always be a Date object, otherwise Angular will throw an error. Invalid <code>Date</code> objects (dates whose <code>getTime()</code> is <code>NaN</code>) will be rendered as an empty string.</p> <p>The timezone to be used to read/write the <code>Date</code> instance in the model can be defined using (ngModelOptions)[api/ng/directive/ngModelOptions]</p>  |
| input[month] | <p>Input with month validation and transformation. In browsers that do not yet support the HTML5 month input, a text element will be used. In that case, the text must be entered in a valid ISO-8601 month format (yyyy-MM), for example: <code>2009-01</code>.</p> <p>The model must always be a Date object, otherwise Angular will throw an error. Invalid <code>Date</code> objects (dates whose <code>getTime()</code> is <code>NaN</code>) will be rendered as an empty string. If the model is not set to the first of the month, the next view to model update will set it to the first of the month.</p> <p>The timezone to be used to read/write the <code>Date</code> instance in the model can be defined using (ngModelOptions)[api/ng/directive/ngModelOptions]</p>  |
| input[number] | <p>Text input with number validation and transformation. Sets the <code>number</code> validation error if not a valid number.</p> <p><div class="alert alert-warning"> The model must always be of type <code>number</code> otherwise Angular will throw an error. Be aware that a string containing a number is not enough. See the ngModel:numfmt</p>  |
| input[url] | <p>Text input with URL validation. Sets the <code>url</code> validation error key if the content is not a valid URL.</p> <p><div class="alert alert-warning"> <strong>Note:</strong> <code>input[url]</code> uses a regex to validate urls that is derived from the regex used in Chromium. If you need stricter validation, you can use <code>ng-pattern</code> or modify the built-in validators (see the (Forms guide)[guide/forms]</p>  |
| input[email] | <p>Text input with email validation. Sets the <code>email</code> validation error key if not a valid email address.</p> <p><div class="alert alert-warning"> <strong>Note:</strong> <code>input[email]</code> uses a regex to validate email addresses that is derived from the regex used in Chromium. If you need stricter validation (e.g. requiring a top-level domain), you can use <code>ng-pattern</code> or modify the built-in validators (see the (Forms guide)[guide/forms]</p>  |
| input[radio] | <p>HTML radio button.</p>  |
| input[checkbox] | <p>HTML checkbox.</p>  |


### filter

| Name | Description |
| :--: | :--: |
| filter | <p>Selects a subset of items from <code>array</code> and returns it as a new array.</p>  |
| currency | <p>Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default</p>  |
| number | <p>Formats a number as text.</p>  |
| date | <p>Formats <code>date</code> to a string based on the requested <code>format</code>.</p> <p>  <code>format</code> string can be composed of the following elements:</p> <ul> <li><code>&#39;yyyy&#39;</code>: 4 digit representation of year (e.g. AD 1 =&gt; 0001, AD 2010 =&gt; 2010)</li> <li><code>&#39;yy&#39;</code>: 2 digit representation of year, padded (00-99). (e.g. AD 2001 =&gt; 01, AD 2010 =&gt; 10)</li> <li><code>&#39;y&#39;</code>: 1 digit representation of year, e.g. (AD 1 =&gt; 1, AD 199 =&gt; 199)</li> <li><code>&#39;MMMM&#39;</code>: Month in year (January-December)</li> <li><code>&#39;MMM&#39;</code>: Month in year (Jan-Dec)</li> <li><code>&#39;MM&#39;</code>: Month in year, padded (01-12)</li> <li><code>&#39;M&#39;</code>: Month in year (1-12)</li> <li><code>&#39;dd&#39;</code>: Day in month, padded (01-31)</li> <li><code>&#39;d&#39;</code>: Day in month (1-31)</li> <li><code>&#39;EEEE&#39;</code>: Day in Week,(Sunday-Saturday)</li> <li><code>&#39;EEE&#39;</code>: Day in Week, (Sun-Sat)</li> <li><code>&#39;HH&#39;</code>: Hour in day, padded (00-23)</li> <li><code>&#39;H&#39;</code>: Hour in day (0-23)</li> <li><code>&#39;hh&#39;</code>: Hour in AM/PM, padded (01-12)</li> <li><code>&#39;h&#39;</code>: Hour in AM/PM, (1-12)</li> <li><code>&#39;mm&#39;</code>: Minute in hour, padded (00-59)</li> <li><code>&#39;m&#39;</code>: Minute in hour (0-59)</li> <li><code>&#39;ss&#39;</code>: Second in minute, padded (00-59)</li> <li><code>&#39;s&#39;</code>: Second in minute (0-59)</li> <li><code>&#39;sss&#39;</code>: Millisecond in second, padded (000-999)</li> <li><code>&#39;a&#39;</code>: AM/PM marker</li> <li><code>&#39;Z&#39;</code>: 4 digit (+sign) representation of the timezone offset (-1200-+1200)</li> <li><code>&#39;ww&#39;</code>: Week of year, padded (00-53). Week 01 is the week with the first Thursday of the year</li> <li><code>&#39;w&#39;</code>: Week of year (0-53). Week 1 is the week with the first Thursday of the year</li> <li><code>&#39;G&#39;</code>, <code>&#39;GG&#39;</code>, <code>&#39;GGG&#39;</code>: The abbreviated form of the era string (e.g. &#39;AD&#39;)</li> <li><p><code>&#39;GGGG&#39;</code>: The long form of the era string (e.g. &#39;Anno Domini&#39;)</p> <p><code>format</code> string can also be one of the following predefined (localizable formats)[guide/i18n]</p> </li> </ul>  |
| json | <p>Allows you to convert a JavaScript object into JSON string.</p>  |
| lowercase | <p>Converts string to lowercase.</p>  |
| uppercase | <p>Converts string to uppercase.</p>  |
| limitTo | <p>Creates a new array or string containing only a specified number of elements. The elements</p>  |
| orderBy | <p>Orders a specified <code>array</code> by the <code>expression</code> predicate. It is ordered alphabetically</p>  |







