



# $rootScope.Scope








A root scope can be retrieved using the ($rootScope)[api/ng/service/$rootScope] key from the
($injector)[api/auto/service/$injector]. Child scopes are created using the
($new())[api/ng/type/$rootScope.Scope#$new] method. (Most scopes are created automatically when
compiled HTML template is executed.)

Here is a simple scope snippet to show how you can interact with the scope.
```html
<file src="./test/ng/rootScopeSpec.js" tag="docs1" />
```

# Inheritance
A scope can inherit from a parent scope, as in this example:
```js
         var parent = $rootScope;
         var child = parent.$new();

         parent.salutation = "Hello";
         child.name = "World";
         expect(child.salutation).toEqual('Hello');

         child.salutation = "Welcome";
         expect(child.salutation).toEqual('Welcome');
         expect(parent.salutation).toEqual('Hello');
```







  

## Usage
```js
$rootScope.Scope([providers], [instanceCache]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| providers | Object.<string, function()>= | <p>Map of service factory which need to be provided for the current scope. Defaults to (<code>ng</code>)[api/ng].</p>  |
| instanceCache | Object.<string, *>= | <p>Provides pre-instantiated services which should append/override services provided by <code>providers</code>. This is handy when unit-testing and having the need to override a default service.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Object | <p>Newly created scope.</p>  |


## Methods
### $new
Creates a new child (scope)[api/ng/type/$rootScope.Scope].

The parent scope will propagate the ($digest())[api/ng/type/$rootScope.Scope#$digest] event.
The scope can be removed from the scope hierarchy using ($destroy())[api/ng/type/$rootScope.Scope#$destroy].

($destroy())[api/ng/type/$rootScope.Scope#$destroy] must be called on a scope when it is
desired for the scope and its child scopes to be permanently detached from the parent and
thus stop participating in model change detection and listener notification by invoking.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| isolate | boolean | <p>If true, then the scope does not prototypically inherit from the parent scope. The scope is isolated, as it can not see parent scope properties. When creating widgets, it is useful for the widget to not accidentally read parent state.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>The newly created child scope.</p>  |




### $watch
Registers a `listener` callback to be executed whenever the `watchExpression` changes.

- The `watchExpression` is called on every call to ($digest())[api/ng/type/$rootScope.Scope#$digest] and should return the value that will be watched. (Since
  ($digest())[api/ng/type/$rootScope.Scope#$digest] reruns when it detects changes the
  `watchExpression` can execute multiple times per
  ($digest())[api/ng/type/$rootScope.Scope#$digest] and should be idempotent.)
- The `listener` is called only when the value from the current `watchExpression` and the
  previous call to `watchExpression` are not equal (with the exception of the initial run,
  see below). Inequality is determined according to reference inequality,
  [strict comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
   via the `!==` Javascript operator, unless `objectEquality == true`
  (see next point)
- When `objectEquality == true`, inequality of the `watchExpression` is determined
  according to the (<code>angular.equals</code>)[api/ng/function/angular.equals] function. To save the value of the object for
  later comparison, the (<code>angular.copy</code>)[api/ng/function/angular.copy] function is used. This therefore means that
  watching complex objects will have adverse memory and performance implications.
- The watch `listener` may change the model, which may trigger other `listener`s to fire.
  This is achieved by rerunning the watchers until no changes are detected. The rerun
  iteration limit is 10 to prevent an infinite loop deadlock.


If you want to be notified whenever ($digest)[api/ng/type/$rootScope.Scope#$digest] is called,
you can register a `watchExpression` function with no `listener`. (Since `watchExpression`
can execute multiple times per ($digest)[api/ng/type/$rootScope.Scope#$digest] cycle when a
change is detected, be prepared for multiple calls to your listener.)

After a watcher is registered with the scope, the `listener` fn is called asynchronously
(via ($evalAsync)[api/ng/type/$rootScope.Scope#$evalAsync]) to initialize the
watcher. In rare cases, this is undesirable because the listener is called when the result
of `watchExpression` didn't change. To detect this scenario within the `listener` fn, you
can compare the `newVal` and `oldVal`. If these two values are identical (`===`) then the
listener was called due to initialization.



# Example
```js
           // let's assume that scope was dependency injected as the $rootScope
           var scope = $rootScope;
           scope.name = 'misko';
           scope.counter = 0;

           expect(scope.counter).toEqual(0);
           scope.$watch('name', function(newValue, oldValue) {
             scope.counter = scope.counter + 1;
           });
           expect(scope.counter).toEqual(0);

           scope.$digest();
           // the listener is always called during the first $digest loop after it was registered
           expect(scope.counter).toEqual(1);

           scope.$digest();
           // but now it will not be called unless the value changes
           expect(scope.counter).toEqual(1);

           scope.name = 'adam';
           scope.$digest();
           expect(scope.counter).toEqual(2);



           // Using a function as a watchExpression
           var food;
           scope.foodCounter = 0;
           expect(scope.foodCounter).toEqual(0);
           scope.$watch(
             // This function returns the value being watched. It is called for each turn of the $digest loop
             function() { return food; },
             // This is the change listener, called when the value returned from the above function changes
             function(newValue, oldValue) {
               if ( newValue !== oldValue ) {
                 // Only increment the counter if the value changed
                 scope.foodCounter = scope.foodCounter + 1;
               }
             }
           );
           // No digest has been run so the counter will be zero
           expect(scope.foodCounter).toEqual(0);

           // Run the digest but since food has not changed count will still be zero
           scope.$digest();
           expect(scope.foodCounter).toEqual(0);

           // Update food and run digest.  Now the counter will increment
           food = 'cheeseburger';
           scope.$digest();
           expect(scope.foodCounter).toEqual(1);

```


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| watchExpression | (function()&#124;string) | <p>Expression that is evaluated on each ($digest)[api/ng/type/$rootScope.Scope#$digest] cycle. A change in the return value triggers a call to the <code>listener</code>.</p> <ul> <li><code>string</code>: Evaluated as (expression)[guide/expression]</li> <li><code>function(scope)</code>: called with current <code>scope</code> as a parameter.</li> </ul>  |
| listener | function(newVal, oldVal, scope) | <p>Callback called whenever the value of <code>watchExpression</code> changes.</p> <ul> <li><code>newVal</code> contains the current value of the <code>watchExpression</code></li> <li><code>oldVal</code> contains the previous value of the <code>watchExpression</code></li> <li><code>scope</code> refers to the current scope</li> </ul>  |
| objectEquality | boolean= | <p>Compare for object equality using (<code>angular.equals</code>)[api/ng/function/angular.equals] instead of comparing for reference equality.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function() | <p>Returns a deregistration function for this listener.</p>  |




### $watchGroup
A variant of ($watch())[api/ng/type/$rootScope.Scope#$watch] where it watches an array of `watchExpressions`.
If any one expression in the collection changes the `listener` is executed.

- The items in the `watchExpressions` array are observed via standard $watch operation and are examined on every
  call to $digest() to see if any items changes.
- The `listener` is called whenever any expression in the `watchExpressions` array changes.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| watchExpressions | Array.<string&#124;Function(scope)> | <p>Array of expressions that will be individually watched using ($watch())[api/ng/type/$rootScope.Scope#$watch]</p>  |
| listener | function(newValues, oldValues, scope) | <p>Callback called whenever the return value of any expression in <code>watchExpressions</code> changes The <code>newValues</code> array contains the current values of the <code>watchExpressions</code>, with the indexes matching those of <code>watchExpression</code> and the <code>oldValues</code> array contains the previous values of the <code>watchExpressions</code>, with the indexes matching those of <code>watchExpression</code> The <code>scope</code> refers to the current scope.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function() | <p>Returns a de-registration function for all listeners.</p>  |




### $watchCollection
Shallow watches the properties of an object and fires whenever any of the properties change
(for arrays, this implies watching the array items; for object maps, this implies watching
the properties). If a change is detected, the `listener` callback is fired.

- The `obj` collection is observed via standard $watch operation and is examined on every
  call to $digest() to see if any items have been added, removed, or moved.
- The `listener` is called whenever anything within the `obj` has changed. Examples include
  adding, removing, and moving items belonging to an object or array.


# Example
```js
          $scope.names = ['igor', 'matias', 'misko', 'james'];
          $scope.dataCount = 4;

          $scope.$watchCollection('names', function(newNames, oldNames) {
            $scope.dataCount = newNames.length;
          });

          expect($scope.dataCount).toEqual(4);
          $scope.$digest();

          //still at 4 ... no changes
          expect($scope.dataCount).toEqual(4);

          $scope.names.pop();
          $scope.$digest();

          //now there's been a change
          expect($scope.dataCount).toEqual(3);
```


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| obj | string&#124;function(scope) | <p>Evaluated as (expression)[guide/expression]. The expression value should evaluate to an object or an array which is observed on each ($digest)[api/ng/type/$rootScope.Scope#$digest] cycle. Any shallow change within the collection will trigger a call to the <code>listener</code>.</p>  |
| listener | function(newCollection, oldCollection, scope) | <p>a callback function called when a change is detected.</p> <ul> <li>The <code>newCollection</code> object is the newly modified data obtained from the <code>obj</code> expression</li> <li>The <code>oldCollection</code> object is a copy of the former collection data. Due to performance considerations, the<code>oldCollection</code> value is computed only if the <code>listener</code> function declares two or more arguments.</li> <li>The <code>scope</code> argument refers to the current scope.</li> </ul>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function() | <p>Returns a de-registration function for this listener. When the de-registration function is executed, the internal watch operation is terminated.</p>  |




### $digest
Processes all of the (watchers)[api/ng/type/$rootScope.Scope#$watch] of the current scope and
its children. Because a (watcher)[api/ng/type/$rootScope.Scope#$watch]'s listener can change
the model, the `$digest()` keeps calling the (watchers)[api/ng/type/$rootScope.Scope#$watch]
until no more listeners are firing. This means that it is possible to get into an infinite
loop. This function will throw `'Maximum iteration limit exceeded.'` if the number of
iterations exceeds 10.

Usually, you don't call `$digest()` directly in
(controllers)[api/ng/directive/ngController] or in
(directives)[api/ng/provider/$compileProvider#directive].
Instead, you should call ($apply())[api/ng/type/$rootScope.Scope#$apply] (typically from within
a (directive)[api/ng/provider/$compileProvider#directive]), which will force a `$digest()`.

If you want to be notified whenever `$digest()` is called,
you can register a `watchExpression` function with
($watch())[api/ng/type/$rootScope.Scope#$watch] with no `listener`.

In unit tests, you may need to call `$digest()` to simulate the scope life cycle.

# Example
```js
           var scope = ...;
           scope.name = 'misko';
           scope.counter = 0;

           expect(scope.counter).toEqual(0);
           scope.$watch('name', function(newValue, oldValue) {
             scope.counter = scope.counter + 1;
           });
           expect(scope.counter).toEqual(0);

           scope.$digest();
           // the listener is always called during the first $digest loop after it was registered
           expect(scope.counter).toEqual(1);

           scope.$digest();
           // but now it will not be called unless the value changes
           expect(scope.counter).toEqual(1);

           scope.name = 'adam';
           scope.$digest();
           expect(scope.counter).toEqual(2);
```








### $destroy
Removes the current scope (and all of its children) from the parent scope. Removal implies
that calls to ($digest())[api/ng/type/$rootScope.Scope#$digest] will no longer
propagate to the current scope and its children. Removal also implies that the current
scope is eligible for garbage collection.

The `$destroy()` is usually used by directives such as
(ngRepeat)[api/ng/directive/ngRepeat] for managing the
unrolling of the loop.

Just before a scope is destroyed, a `$destroy` event is broadcasted on this scope.
Application code can register a `$destroy` event handler that will give it a chance to
perform any necessary cleanup.

Note that, in AngularJS, there is also a `$destroy` jQuery event, which can be used to
clean up DOM bindings before an element is removed from the DOM.








### $eval
Executes the `expression` on the current scope and returns the result. Any exceptions in
the expression are propagated (uncaught). This is useful when evaluating Angular
expressions.

# Example
```js
           var scope = ng.$rootScope.Scope();
           scope.a = 1;
           scope.b = 2;

           expect(scope.$eval('a+b')).toEqual(3);
           expect(scope.$eval(function(scope){ return scope.a + scope.b; })).toEqual(3);
```


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| expression | (string&#124;function())= | <p>An angular expression to be executed.</p> <ul> <li><code>string</code>: execute using the rules as defined in  (expression)[guide/expression].</li> <li><code>function(scope)</code>: execute the function with the current <code>scope</code> parameter.</li> </ul>  |
| locals | (object)= | <p>Local variables object, useful for overriding values in scope.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The result of evaluating the expression.</p>  |




### $evalAsync
Executes the expression on the current scope at a later point in time.

The `$evalAsync` makes no guarantees as to when the `expression` will be executed, only
that:

  - it will execute after the function that scheduled the evaluation (preferably before DOM
    rendering).
  - at least one ($digest cycle)[api/ng/type/$rootScope.Scope#$digest] will be performed after
    `expression` execution.

Any exceptions from the execution of the expression are forwarded to the
($exceptionHandler)[api/ng/service/$exceptionHandler] service.

__Note:__ if this function is called outside of a `$digest` cycle, a new `$digest` cycle
will be scheduled. However, it is encouraged to always call code that changes the model
from within an `$apply` call. That includes code evaluated via `$evalAsync`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| expression | (string&#124;function())= | <p>An angular expression to be executed.</p> <ul> <li><code>string</code>: execute using the rules as defined in (expression)[guide/expression].</li> <li><code>function(scope)</code>: execute the function with the current <code>scope</code> parameter.</li> </ul>  |






### $apply
`$apply()` is used to execute an expression in angular from outside of the angular
framework. (For example from browser DOM events, setTimeout, XHR or third party libraries).
Because we are calling into the angular framework we need to perform proper scope life
cycle of (exception handling)[api/ng/service/$exceptionHandler],
(executing watches)[api/ng/type/$rootScope.Scope#$digest].

## Life cycle

# Pseudo-Code of `$apply()`
```js
           function $apply(expr) {
             try {
               return $eval(expr);
             } catch (e) {
               $exceptionHandler(e);
             } finally {
               $root.$digest();
             }
           }
```


Scope's `$apply()` method transitions through the following stages:

1. The (expression)[guide/expression] is executed using the
   ($eval())[api/ng/type/$rootScope.Scope#$eval] method.
2. Any exceptions from the execution of the expression are forwarded to the
   ($exceptionHandler)[api/ng/service/$exceptionHandler] service.
3. The (watch)[api/ng/type/$rootScope.Scope#$watch] listeners are fired immediately after the
   expression was executed using the ($digest())[api/ng/type/$rootScope.Scope#$digest] method.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| exp | (string&#124;function())= | <p>An angular expression to be executed.</p> <ul> <li><code>string</code>: execute using the rules as defined in (expression)[guide/expression].</li> <li><code>function(scope)</code>: execute the function with current <code>scope</code> parameter.</li> </ul>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The result of evaluating the expression.</p>  |




### $applyAsync
Schedule the invokation of $apply to occur at a later time. The actual time difference
varies across browsers, but is typically around ~10 milliseconds.

This can be used to queue up multiple expressions which need to be evaluated in the same
digest.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| exp | (string&#124;function())= | <p>An angular expression to be executed.</p> <ul> <li><code>string</code>: execute using the rules as defined in (expression)[guide/expression].</li> <li><code>function(scope)</code>: execute the function with current <code>scope</code> parameter.</li> </ul>  |






### $on
Listens on events of a given type. See ($emit)[api/ng/type/$rootScope.Scope#$emit] for
discussion of event life cycle.

The event listener function format is: `function(event, args...)`. The `event` object
passed into the listener has the following attributes:

  - `targetScope` - `{Scope}`: the scope on which the event was `$emit`-ed or
    `$broadcast`-ed.
  - `currentScope` - `{Scope}`: the scope that is currently handling the event. Once the
    event propagates through the scope hierarchy, this property is set to null.
  - `name` - `{string}`: name of the event.
  - `stopPropagation` - `{function=}`: calling `stopPropagation` function will cancel
    further event propagation (available only for events that were `$emit`-ed).
  - `preventDefault` - `{function}`: calling `preventDefault` sets `defaultPrevented` flag
    to true.
  - `defaultPrevented` - `{boolean}`: true if `preventDefault` was called.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>Event name to listen on.</p>  |
| listener | function(event, ...args) | <p>Function to call when the event is emitted.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function() | <p>Returns a deregistration function for this listener.</p>  |




### $emit
Dispatches an event `name` upwards through the scope hierarchy notifying the
registered (<code>$rootScope.Scope</code>)[api/ng/type/$rootScope.Scope#$on] listeners.

The event life cycle starts at the scope on which `$emit` was called. All
(listeners)[api/ng/type/$rootScope.Scope#$on] listening for `name` event on this scope get
notified. Afterwards, the event traverses upwards toward the root scope and calls all
registered listeners along the way. The event will stop propagating if one of the listeners
cancels it.

Any exception emitted from the (listeners)[api/ng/type/$rootScope.Scope#$on] will be passed
onto the ($exceptionHandler)[api/ng/service/$exceptionHandler] service.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>Event name to emit.</p>  |
| args | ...* | <p>Optional one or more arguments which will be passed onto the event listeners.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Event object (see (<code>$rootScope.Scope</code>)[api/ng/type/$rootScope.Scope#$on]).</p>  |




### $broadcast
Dispatches an event `name` downwards to all child scopes (and their children) notifying the
registered (<code>$rootScope.Scope</code>)[api/ng/type/$rootScope.Scope#$on] listeners.

The event life cycle starts at the scope on which `$broadcast` was called. All
(listeners)[api/ng/type/$rootScope.Scope#$on] listening for `name` event on this scope get
notified. Afterwards, the event propagates to all direct and indirect scopes of the current
scope and calls all registered listeners along the way. The event cannot be canceled.

Any exception emitted from the (listeners)[api/ng/type/$rootScope.Scope#$on] will be passed
onto the ($exceptionHandler)[api/ng/service/$exceptionHandler] service.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>Event name to broadcast.</p>  |
| args | ...* | <p>Optional one or more arguments which will be passed onto the event listeners.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Event object, see (<code>$rootScope.Scope</code>)[api/ng/type/$rootScope.Scope#$on]</p>  |





## Events
### $destroy

<p>Broadcasted when a scope and its children are being destroyed.</p> <p>Note that, in AngularJS, there is also a <code>$destroy</code> jQuery event, which can be used to clean up DOM bindings before an element is removed from the DOM.</p> 
#### Type:
broadcast

#### Target:
scope being destroyed





## Properties
### $id

| Type | Description |
| :--: | :--: |
|  | <p>Unique scope ID (monotonically increasing) useful for debugging.</p>  |
  

### $parent

| Type | Description |
| :--: | :--: |
|  | <p>Reference to the parent scope.</p>  |
  

### $root

| Type | Description |
| :--: | :--: |
|  | <p>Reference to the root scope.</p>  |
  





