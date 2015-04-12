
#function

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

