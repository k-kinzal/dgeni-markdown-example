



# $compile


* [$compileProvider](api/angular/provider/$compileProvider)








Compiles an HTML string or DOM into a template and produces a template function, which
can then be used to link `scope` and the template together.

The compilation is a process of walking the DOM tree and matching DOM elements to
directives.

<div class="alert alert-warning">
**Note:** This document is an in-depth reference of all directive options.
For a gentle introduction to directives with examples of common use cases,
see the (directive guide)[guide/directive].
</div>

## Comprehensive Directive API

There are many different options for a directive.

The difference resides in the return value of the factory function.
You can either return a "Directive Definition Object" (see below) that defines the directive properties,
or just the `postLink` function (all other properties will have the default values).

<div class="alert alert-success">
**Best Practice:** It's recommended to use the "directive definition object" form.
</div>

Here's an example directive declared with a Directive Definition Object:

```js
  var myModule = angular.module(...);

  myModule.directive('directiveName', function factory(injectables) {
    var directiveDefinitionObject = {
      priority: 0,
      template: '<div></div>', // or // function(tElement, tAttrs) { ... },
      // or
      // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
      transclude: false,
      restrict: 'A',
      scope: false,
      controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
      controllerAs: 'stringAlias',
      require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
      compile: function compile(tElement, tAttrs, transclude) {
        return {
          pre: function preLink(scope, iElement, iAttrs, controller) { ... },
          post: function postLink(scope, iElement, iAttrs, controller) { ... }
        }
        // or
        // return function postLink( ... ) { ... }
      },
      // or
      // link: {
      //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
      //  post: function postLink(scope, iElement, iAttrs, controller) { ... }
      // }
      // or
      // link: function postLink( ... ) { ... }
    };
    return directiveDefinitionObject;
  });
```

<div class="alert alert-warning">
**Note:** Any unspecified options will use the default value. You can see the default values below.
</div>

Therefore the above can be simplified as:

```js
  var myModule = angular.module(...);

  myModule.directive('directiveName', function factory(injectables) {
    var directiveDefinitionObject = {
      link: function postLink(scope, iElement, iAttrs) { ... }
    };
    return directiveDefinitionObject;
    // or
    // return function postLink(scope, iElement, iAttrs) { ... }
  });
```



### Directive Definition Object

The directive definition object provides instructions to the compiler. The attributes are:

#### `priority`
When there are multiple directives defined on a single DOM element, sometimes it
is necessary to specify the order in which the directives are applied. The `priority` is used
to sort the directives before their `compile` functions get called. Priority is defined as a
number. Directives with greater numerical `priority` are compiled first. Pre-link functions
are also run in priority order, but post-link functions are run in reverse order. The order
of directives with the same priority is undefined. The default priority is `0`.

#### `terminal`
If set to true then the current `priority` will be the last set of directives
which will execute (any directives at the current priority will still execute
as the order of execution on same `priority` is undefined).

#### `scope`
**If set to `true`,** then a new scope will be created for this directive. If multiple directives on the
same element request a new scope, only one new scope is created. The new scope rule does not
apply for the root of the template since the root of the template always gets a new scope.

**If set to `{}` (object hash),** then a new "isolate" scope is created. The 'isolate' scope differs from
normal scope in that it does not prototypically inherit from the parent scope. This is useful
when creating reusable components, which should not accidentally read or modify data in the
parent scope.

The 'isolate' scope takes an object hash which defines a set of local scope properties
derived from the parent scope. These local properties are useful for aliasing values for
templates. Locals definition is a hash of local scope property to its source:

* `@` or `@attr` - bind a local scope property to the value of DOM attribute. The result is
  always a string since DOM attributes are strings. If no `attr` name is specified  then the
  attribute name is assumed to be the same as the local name.
  Given `<widget my-attr="hello {{name}}">` and widget definition
  of `scope: { localName:'@myAttr' }`, then widget scope property `localName` will reflect
  the interpolated value of `hello {{name}}`. As the `name` attribute changes so will the
  `localName` property on the widget scope. The `name` is read from the parent scope (not
  component scope).

* `=` or `=attr` - set up bi-directional binding between a local scope property and the
  parent scope property of name defined via the value of the `attr` attribute. If no `attr`
  name is specified then the attribute name is assumed to be the same as the local name.
  Given `<widget my-attr="parentModel">` and widget definition of
  `scope: { localModel:'=myAttr' }`, then widget scope property `localModel` will reflect the
  value of `parentModel` on the parent scope. Any changes to `parentModel` will be reflected
  in `localModel` and any changes in `localModel` will reflect in `parentModel`. If the parent
  scope property doesn't exist, it will throw a NON_ASSIGNABLE_MODEL_EXPRESSION exception. You
  can avoid this behavior using `=?` or `=?attr` in order to flag the property as optional.

* `&` or `&attr` - provides a way to execute an expression in the context of the parent scope.
  If no `attr` name is specified then the attribute name is assumed to be the same as the
  local name. Given `<widget my-attr="count = count + value">` and widget definition of
  `scope: { localFn:'&myAttr' }`, then isolate scope property `localFn` will point to
  a function wrapper for the `count = count + value` expression. Often it's desirable to
  pass data from the isolated scope via an expression to the parent scope, this can be
  done by passing a map of local variable names and values into the expression wrapper fn.
  For example, if the expression is `increment(amount)` then we can specify the amount value
  by calling the `localFn` as `localFn({amount: 22})`.



#### `controller`
Controller constructor function. The controller is instantiated before the
pre-linking phase and it is shared with other directives (see
`require` attribute). This allows the directives to communicate with each other and augment
each other's behavior. The controller is injectable (and supports bracket notation) with the following locals:

* `$scope` - Current scope associated with the element
* `$element` - Current element
* `$attrs` - Current attributes object for the element
* `$transclude` - A transclude linking function pre-bound to the correct transclusion scope.
   The scope can be overridden by an optional first argument.
  `function([scope], cloneLinkingFn)`.


#### `require`
Require another directive and inject its controller as the fourth argument to the linking function. The
`require` takes a string name (or array of strings) of the directive(s) to pass in. If an array is used, the
injected argument will be an array in corresponding order. If no such directive can be
found, or if the directive does not have a controller, then an error is raised. The name can be prefixed with:

* (no prefix) - Locate the required controller on the current element. Throw an error if not found.
* `?` - Attempt to locate the required controller or pass `null` to the `link` fn if not found.
* `^` - Locate the required controller by searching the element and its parents. Throw an error if not found.
* `?^` - Attempt to locate the required controller by searching the element and its parents or pass
  `null` to the `link` fn if not found.


#### `controllerAs`
Controller alias at the directive scope. An alias for the controller so it
can be referenced at the directive template. The directive needs to define a scope for this
configuration to be used. Useful in the case when directive is used as component.


#### `restrict`
String of subset of `EACM` which restricts the directive to a specific directive
declaration style. If omitted, the default (attributes only) is used.

* `E` - Element name: `<my-directive></my-directive>`
* `A` - Attribute (default): `<div my-directive="exp"></div>`
* `C` - Class: `<div class="my-directive: exp;"></div>`
* `M` - Comment: `<!-- directive: my-directive exp -->`


#### `template`
HTML markup that may:
* Replace the contents of the directive's element (default).
* Replace the directive's element itself (if `replace` is true - DEPRECATED).
* Wrap the contents of the directive's element (if `transclude` is true).

Value may be:

* A string. For example `<div red-on-hover>{{delete_str}}</div>`.
* A function which takes two arguments `tElement` and `tAttrs` (described in the `compile`
  function api below) and returns a string value.


#### `templateUrl`
Same as `template` but the template is loaded from the specified URL. Because
the template loading is asynchronous the compilation/linking is suspended until the template
is loaded.

You can specify `templateUrl` as a string representing the URL or as a function which takes two
arguments `tElement` and `tAttrs` (described in the `compile` function api below) and returns
a string value representing the url.  In either case, the template URL is passed through ($sce.getTrustedResourceUrl)[api/ng.$sce#getTrustedResourceUrl].


#### `replace` ([*DEPRECATED*!], will be removed in next major release)
specify what the template should replace. Defaults to `false`.

* `true` - the template will replace the directive's element.
* `false` - the template will replace the contents of the directive's element.

The replacement process migrates all of the attributes / classes from the old element to the new
one. See the (Directives Guide)[guide/directive#creating-custom-directives_creating-directives_template-expanding-directive] for an example.

#### `transclude`
compile the content of the element and make it available to the directive.
Typically used with ngTransclude. The advantage of transclusion is that the linking function receives a
transclusion function which is pre-bound to the correct scope. In a typical setup the widget
creates an `isolate` scope, but the transclusion is not a child, but a sibling of the `isolate`
scope. This makes it possible for the widget to have private state, and the transclusion to
be bound to the parent (pre-`isolate`) scope.

* `true` - transclude the content of the directive.
* `'element'` - transclude the whole element including any directives defined at lower priority.

<div class="alert alert-warning">
**Note:** When testing an element transclude directive you must not place the directive at the root of the
DOM fragment that is being compiled. See (Testing Transclusion Directives)[guide/unit-testing#testing-transclusion-directives].
</div>

#### `compile`

```js
  function compile(tElement, tAttrs, transclude) { ... }
```

The compile function deals with transforming the template DOM. Since most directives do not do
template transformation, it is not used often. The compile function takes the following arguments:

  * `tElement` - template element - The element where the directive has been declared. It is
    safe to do template transformation on the element and child elements only.

  * `tAttrs` - template attributes - Normalized list of attributes declared on this element shared
    between all directive compile functions.

  * `transclude` -  [*DEPRECATED*!] A transclude linking function: `function(scope, cloneLinkingFn)`

<div class="alert alert-warning">
**Note:** The template instance and the link instance may be different objects if the template has
been cloned. For this reason it is **not** safe to do anything other than DOM transformations that
apply to all cloned DOM nodes within the compile function. Specifically, DOM listener registration
should be done in a linking function rather than in a compile function.
</div>

<div class="alert alert-warning">
**Note:** The compile function cannot handle directives that recursively use themselves in their
own templates or compile functions. Compiling these directives results in an infinite loop and a
stack overflow errors.

This can be avoided by manually using $compile in the postLink function to imperatively compile
a directive's template instead of relying on automatic template compilation via `template` or
`templateUrl` declaration or manual compilation inside the compile function.
</div>

<div class="alert alert-error">
**Note:** The `transclude` function that is passed to the compile function is deprecated, as it
  e.g. does not know about the right outer scope. Please use the transclude function that is passed
  to the link function instead.
</div>

A compile function can have a return value which can be either a function or an object.

* returning a (post-link) function - is equivalent to registering the linking function via the
  `link` property of the config object when the compile function is empty.

* returning an object with function(s) registered via `pre` and `post` properties - allows you to
  control when a linking function should be called during the linking phase. See info about
  pre-linking and post-linking functions below.


#### `link`
This property is used only if the `compile` property is not defined.

```js
  function link(scope, iElement, iAttrs, controller, transcludeFn) { ... }
```

The link function is responsible for registering DOM listeners as well as updating the DOM. It is
executed after the template has been cloned. This is where most of the directive logic will be
put.

  * `scope` - Scope - The scope to be used by the
    directive for registering watches.

  * `iElement` - instance element - The element where the directive is to be used. It is safe to
    manipulate the children of the element only in `postLink` function since the children have
    already been linked.

  * `iAttrs` - instance attributes - Normalized list of attributes declared on this element shared
    between all directive linking functions.

  * `controller` - a controller instance - A controller instance if at least one directive on the
    element defines a controller. The controller is shared among all the directives, which allows
    the directives to use the controllers as a communication channel.

  * `transcludeFn` - A transclude linking function pre-bound to the correct transclusion scope.
    The scope can be overridden by an optional first argument. This is the same as the `$transclude`
    parameter of directive controllers.
    `function([scope], cloneLinkingFn)`.


#### Pre-linking function

Executed before the child elements are linked. Not safe to do DOM transformation since the
compiler linking function will fail to locate the correct elements for linking.

#### Post-linking function

Executed after the child elements are linked. It is safe to do DOM transformation in the post-linking function.

<a name="Attributes"></a>
### Attributes

The Attributes object - passed as a parameter in the
`link()` or `compile()` functions. It has a variety of uses.

accessing *Normalized attribute names:*
Directives like 'ngBind' can be expressed in many ways: 'ng:bind', `data-ng-bind`, or 'x-ng-bind'.
the attributes object allows for normalized access to
  the attributes.

* *Directive inter-communication:* All directives share the same instance of the attributes
  object which allows the directives to use the attributes object as inter directive
  communication.

* *Supports interpolation:* Interpolation attributes are assigned to the attribute object
  allowing other directives to read the interpolated value.

* *Observing interpolated attributes:* Use `$observe` to observe the value changes of attributes
  that contain interpolation (e.g. `src="{{bar}}"`). Not only is this very efficient but it's also
  the only way to easily get the actual value because during the linking phase the interpolation
  hasn't been evaluated yet and so the value is at this time set to `undefined`.

```js
function linkingFn(scope, elm, attrs, ctrl) {
  // get the attribute value
  console.log(attrs.ngModel);

  // change the attribute
  attrs.$set('ngModel', 'new value');

  // observe changes to interpolated attribute
  attrs.$observe('ngModel', function(value) {
    console.log('ngModel has changed value to ' + value);
  });
}
```

Below is an example using `$compileProvider`.

<div class="alert alert-warning">
**Note**: Typically directives are registered with `module.directive`. The example below is
to illustrate how `$compile` works.
</div>

 <example module="compileExample">
   <file name="index.html">
    <script>
      angular.module('compileExample', [], function($compileProvider) {
        // configure new 'compile' directive by passing a directive
        // factory function. The factory function injects the '$compile'
        $compileProvider.directive('compile', function($compile) {
          // directive factory creates a link function
          return function(scope, element, attrs) {
            scope.$watch(
              function(scope) {
                 // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
              },
              function(value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
              }
            );
          };
        });
      })
      .controller('GreeterController', ['$scope', function($scope) {
        $scope.name = 'Angular';
        $scope.html = 'Hello {{name}}';
      }]);
    </script>
    <div ng-controller="GreeterController">
      <input ng-model="name"> <br>
      <textarea ng-model="html"></textarea> <br>
      <div compile="html"></div>
    </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should auto compile', function() {
       var textarea = $('textarea');
       var output = $('div[compile]');
       // The initial state reads 'Hello Angular'.
       expect(output.getText()).toBe('Hello Angular');
       textarea.clear();
       textarea.sendKeys('{{name}}!');
       expect(output.getText()).toBe('Angular!');
     });
   </file>
 </example>







  

## Usage
```js
$compile(element, transclude, maxPriority);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| element | string&#124;DOMElement | <p>Element or HTML string to compile into a template function.</p>  |
| transclude | function(angular.Scope, cloneAttachFn=) | <p>function available to directives.</p>  |
| maxPriority | number | <p>only apply directives lower than given priority (Only effects the root element(s), not their children)</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| function(scope, cloneAttachFn=) | <p>a link function which is used to bind template (a DOM element/tree) to a scope. Where:</p> <ul> <li><code>scope</code> - A Scope to bind to.</li> <li><p><code>cloneAttachFn</code> - If <code>cloneAttachFn</code> is provided, then the link function will clone the <code>template</code> and call the <code>cloneAttachFn</code> function allowing the caller to attach the cloned elements to the DOM document at the appropriate place. The <code>cloneAttachFn</code> is called as: <br> <code>cloneAttachFn(clonedElement, scope)</code> where:</p> <ul> <li><code>clonedElement</code> - is a clone of the original <code>element</code> passed into the compiler.</li> <li><code>scope</code> - is the current scope with which the linking function is working with.</li> </ul> </li> </ul> <p>Calling the linking function returns the element of the template. It is either the original element passed in, or the clone of the element if the <code>cloneAttachFn</code> is provided.</p> <p>After linking the view is not updated until after a call to $digest which typically is done by Angular automatically.</p> <p>If you need access to the bound view, there are two ways to do it:</p> <ul> <li><p>If you are not asking the linking function to clone the template, create the DOM element(s) before you send them to the compiler and keep this reference around.</p> <pre><code class="lang-js">  var element = $compile(&#39;&lt;p&gt;{{total}}&lt;/p&gt;&#39;)(scope);</code></pre> </li> <li><p>if on the other hand, you need the element to be cloned, the view reference from the original example would not point to the clone, but rather to the original template that was cloned. In this case, you can access the clone via the cloneAttachFn:</p> <pre><code class="lang-js">  var templateElement = angular.element(&#39;&lt;p&gt;{{total}}&lt;/p&gt;&#39;), scope = ....; var clonedElement = $compile(templateElement)(scope, function(clonedElement, scope) { //attach the clone to DOM document at the right place }); //now we have reference to the cloned DOM via `clonedElement`</code></pre> </li> </ul> <p>For information on how the compiler works, see the (Angular HTML Compiler)[guide/compiler] section of the Developer Guide.</p>  |








