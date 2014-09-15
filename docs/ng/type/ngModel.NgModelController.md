



# ngModel.NgModelController








`NgModelController` provides API for the `ng-model` directive. The controller contains
services for data-binding, validation, CSS updates, and value formatting and parsing. It
purposefully does not contain any logic which deals with DOM rendering or listening to
DOM events. Such DOM related logic should be provided by other directives which make use of
`NgModelController` for data-binding.

## Custom Control Example
This example shows how to use `NgModelController` with a custom control to achieve
data-binding. Notice how different directives (`contenteditable`, `ng-model`, and `required`)
collaborate together to achieve the desired result.

Note that `contenteditable` is an HTML5 attribute, which tells the browser to let the element
contents be edited in place by the user.  This will not work on older browsers.

We are using the ($sce)[api/ng/service/$sce] service here and include the ($sanitize)[api/ngSanitize]
module to automatically remove "bad" content like inline event listener (e.g. `<span onclick="...">`).
However, as we are using `$sce` the model can still decide to to provide unsafe content if it marks
that content using the `$sce` service.

<example name="NgModelController" module="customControl" deps="angular-sanitize.js">
    <file name="style.css">
      [contenteditable] {
        border: 1px solid black;
        background-color: white;
        min-height: 20px;
      }

      .ng-invalid {
        border: 1px solid red;
      }

    </file>
    <file name="script.js">
      angular.module('customControl', ['ngSanitize']).
        directive('contenteditable', ['$sce', function($sce) {
          return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel', // get a hold of NgModelController
            link: function(scope, element, attrs, ngModel) {
              if (!ngModel) return; // do nothing if no ng-model

              // Specify how UI should be updated
              ngModel.$render = function() {
                element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
              };

              // Listen for change events to enable binding
              element.on('blur keyup change', function() {
                scope.$apply(read);
              });
              read(); // initialize

              // Write data to the model
              function read() {
                var html = element.html();
                // When we clear the content editable the browser leaves a <br> behind
                // If strip-br attribute is provided then we strip this out
                if ( attrs.stripBr && html == '<br>' ) {
                  html = '';
                }
                ngModel.$setViewValue(html);
              }
            }
          };
        }]);
    </file>
    <file name="index.html">
      <form name="myForm">
       <div contenteditable
            name="myWidget" ng-model="userContent"
            strip-br="true"
            required>Change me!</div>
        <span ng-show="myForm.myWidget.$error.required">Required!</span>
       <hr>
       <textarea ng-model="userContent"></textarea>
      </form>
    </file>
    <file name="protractor.js" type="protractor">
    it('should data-bind and become invalid', function() {
      if (browser.params.browser == 'safari' || browser.params.browser == 'firefox') {
        // SafariDriver can't handle contenteditable
        // and Firefox driver can't clear contenteditables very well
        return;
      }
      var contentEditable = element(by.css('[contenteditable]'));
      var content = 'Change me!';

      expect(contentEditable.getText()).toEqual(content);

      contentEditable.clear();
      contentEditable.sendKeys(protractor.Key.BACK_SPACE);
      expect(contentEditable.getText()).toEqual('');
      expect(contentEditable.getAttribute('class')).toMatch(/ng-invalid-required/);
    });
    </file>
</example>







  

## Usage
```js
ngModel.NgModelController(name, validationFn);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The name of the validator.</p>  |
| validationFn | Function | <p>The validation function that will be run.</p>  |




## Methods
### $render
Called when the view needs to be updated. It is expected that the user of the ng-model
directive will implement this method.

The `$render()` method is invoked in the following situations:

* `$rollbackViewValue()` is called.  If we are rolling back the view value to the last
  committed value then `$render()` is called to update the input control.
* The value referenced by `ng-model` is changed programmatically and both the `$modelValue` and
  the `$viewValue` are different to last time.

Since `ng-model` does not do a deep watch, `$render()` is only invoked if the values of
`$modelValue` and `$viewValue` are actually different to their previous value. If `$modelValue`
or `$viewValue` are objects (rather than a string or number) then `$render()` will not be
invoked if you only change a property on the objects.








### $isEmpty
This is called when we need to determine if the value of the input is empty.

For instance, the required directive does this to work out if the input has data or not.
The default `$isEmpty` function checks whether the value is `undefined`, `''`, `null` or `NaN`.

You can override this for input directives whose concept of being empty is different to the
default. The `checkboxInputType` directive does this because in its case a value of `false`
implies empty.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>Model value to check.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>True if <code>value</code> is empty.</p>  |




### $setValidity
Change the validity state, and notifies the form.

This method can be called within $parsers/$formatters. However, if possible, please use the
       `ngModel.$validators` pipeline which is designed to call this method automatically.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| validationErrorKey | string | <p>Name of the validator. the <code>validationErrorKey</code> will assign to <code>$error[validationErrorKey]</code> and <code>$pending[validationErrorKey]</code> so that it is available for data-binding. The <code>validationErrorKey</code> should be in camelCase and will get converted into dash-case for class name. Example: <code>myError</code> will result in <code>ng-valid-my-error</code> and <code>ng-invalid-my-error</code> class and can be bound to as  <code>{{someForm.someControl.$error.myError}}</code> .</p>  |
| isValid | boolean | <p>Whether the current state is valid (true), invalid (false), pending (undefined), or skipped (null).</p>  |






### $setPristine
Sets the control to its pristine state.

This method can be called to remove the 'ng-dirty' class and set the control to its pristine
state (ng-pristine class). A model is considered to be pristine when the model has not been changed
from when first compiled within then form.








### $setUntouched
Sets the control to its untouched state.

This method can be called to remove the 'ng-touched' class and set the control to its
untouched state (ng-untouched class). Upon compilation, a model is set as untouched
by default, however this function can be used to restore that state if the model has
already been touched by the user.








### $setTouched
Sets the control to its touched state.

This method can be called to remove the 'ng-untouched' class and set the control to its
touched state (ng-touched class). A model is considered to be touched when the user has
first interacted (focussed) on the model input element and then shifted focus away (blurred)
from the input element.








### $rollbackViewValue
Cancel an update and reset the input element's value to prevent an update to the `$modelValue`,
which may be caused by a pending debounced event or because the input is waiting for a some
future event.

If you have an input that uses `ng-model-options` to set up debounced events or events such
as blur you can have a situation where there is a period when the `$viewValue`
is out of synch with the ngModel's `$modelValue`.

In this case, you can run into difficulties if you try to update the ngModel's `$modelValue`
programmatically before these debounced/future events have resolved/occurred, because Angular's
dirty checking mechanism is not able to tell whether the model has actually changed or not.

The `$rollbackViewValue()` method should be called before programmatically changing the model of an
input which may have such events pending. This is important in order to make sure that the
input field will be updated with the new model value and any pending operations are cancelled.

<example name="ng-model-cancel-update" module="cancel-update-example">
  <file name="app.js">
    angular.module('cancel-update-example', [])

    .controller('CancelUpdateController', ['$scope', function($scope) {
      $scope.resetWithCancel = function (e) {
        if (e.keyCode == 27) {
          $scope.myForm.myInput1.$rollbackViewValue();
          $scope.myValue = '';
        }
      };
      $scope.resetWithoutCancel = function (e) {
        if (e.keyCode == 27) {
          $scope.myValue = '';
        }
      };
    }]);
  </file>
  <file name="index.html">
    <div ng-controller="CancelUpdateController">
      <p>Try typing something in each input.  See that the model only updates when you
         blur off the input.
       </p>
       <p>Now see what happens if you start typing then press the Escape key</p>

      <form name="myForm" ng-model-options="{ updateOn: 'blur' }">
        <p>With $rollbackViewValue()</p>
        <input name="myInput1" ng-model="myValue" ng-keydown="resetWithCancel($event)"><br/>
        myValue: "{{ myValue }}"

        <p>Without $rollbackViewValue()</p>
        <input name="myInput2" ng-model="myValue" ng-keydown="resetWithoutCancel($event)"><br/>
        myValue: "{{ myValue }}"
      </form>
    </div>
  </file>
</example>








### $validate
Runs each of the registered validators (first synchronous validators and then asynchronous validators).








### $commitViewValue
Commit a pending update to the `$modelValue`.

Updates may be pending by a debounced event or because the input is waiting for a some future
event defined in `ng-model-options`. this method is rarely needed as `NgModelController`
usually handles calling this in response to input events.








### $setViewValue
Update the view value.

This method should be called when an input directive want to change the view value; typically,
this is done from within a DOM event handler.

For example (input)[api/ng/directive/input] calls it when the value of the input changes and
(select)[api/ng/directive/select] calls it when an option is selected.

If the new `value` is an object (rather than a string or a number), we should make a copy of the
object before passing it to `$setViewValue`.  This is because `ngModel` does not perform a deep
watch of objects, it only looks for a change of identity. If you only change the property of
the object then ngModel will not realise that the object has changed and will not invoke the
`$parsers` and `$validators` pipelines.

For this reason, you should not change properties of the copy once it has been passed to
`$setViewValue`. Otherwise you may cause the model value on the scope to change incorrectly.

When this method is called, the new `value` will be staged for committing through the `$parsers`
and `$validators` pipelines. If there are no special (<code>ngModelOptions</code>)[api/ng/directive/ngModelOptions] specified then the staged
value sent directly for processing, finally to be applied to `$modelValue` and then the
**expression** specified in the `ng-model` attribute.

Lastly, all the registered change listeners, in the `$viewChangeListeners` list, are called.

In case the (ngModelOptions)[api/ng/directive/ngModelOptions] directive is used with `updateOn`
and the `default` trigger is not listed, all those actions will remain pending until one of the
`updateOn` events is triggered on the DOM element.
All these actions will be debounced if the (ngModelOptions)[api/ng/directive/ngModelOptions]
directive is used with a custom debounce for this particular event.

Note that calling this function does not trigger a `$digest`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | string | <p>Value from the view.</p>  |
| trigger | string | <p>Event that triggered the update.</p>  |









## Properties
### $viewValue

| Type | Description |
| :--: | :--: |
| string | <p>Actual string value in the view.</p>  |
  

### $modelValue

| Type | Description |
| :--: | :--: |
| * | <p>The value in the model, that the control is bound to.</p>  |
  

### $parsers

| Type | Description |
| :--: | :--: |
| Array.<Function> | <p>Array of functions to execute, as a pipeline, whenever the control reads value from the DOM.  Each function is called, in turn, passing the value through to the next. The last return value is used to populate the model. Used to sanitize / convert the value as well as validation. For validation, the parsers should update the validity state using ($setValidity())[api/ng/type/ngModel.NgModelController#$setValidity], and return <code>undefined</code> for invalid values.</p>  |
  

### $formatters

| Type | Description |
| :--: | :--: |
| Array.<Function> | <p>Array of functions to execute, as a pipeline, whenever the model value changes. Each function is called, in turn, passing the value through to the next. Used to format / convert values for display in the control and validation.</p> <pre><code class="lang-js">function formatter(value) { if (value) { return value.toUpperCase(); } } ngModel.$formatters.push(formatter);</code></pre>  |
  

### $validators

| Type | Description |
| :--: | :--: |
| Object.<string, function> | <p>A collection of validators that are applied whenever the model value changes. The key value within the object refers to the name of the validator while the function refers to the validation operation. The validation operation is provided with the model value as an argument and must return a true or false value depending on the response of that validation.</p> <pre><code class="lang-js">ngModel.$validators.validCharacters = function(modelValue, viewValue) { var value = modelValue &amp;#124;&amp;#124; viewValue; return /[0-9]+/.test(value) &amp;&amp; /[a-z]+/.test(value) &amp;&amp; /[A-Z]+/.test(value) &amp;&amp; /\W+/.test(value); };</code></pre>  |
  

### $asyncValidators

| Type | Description |
| :--: | :--: |
| Object.<string, function> | <p>A collection of validations that are expected to perform an asynchronous validation (e.g. a HTTP request). The validation function that is provided is expected to return a promise when it is run during the model validation process. Once the promise is delivered then the validation status will be set to true when fulfilled and false when rejected. When the asynchronous validators are triggered, each of the validators will run in parallel and the model value will only be updated once all validators have been fulfilled. Also, keep in mind that all asynchronous validators will only run once all synchronous validators have passed.</p> <p>Please note that if $http is used then it is important that the server returns a success HTTP response code in order to fulfill the validation and a status level of <code>4xx</code> in order to reject the validation.</p> <pre><code class="lang-js">ngModel.$asyncValidators.uniqueUsername = function(modelValue, viewValue) { var value = modelValue &amp;#124;&amp;#124; viewValue; // Lookup user by username return $http.get(&#39;/api/users/&#39; + value). then(function resolved() { //username exists, this means validation fails return $q.reject(&#39;exists&#39;); }, function rejected() { //username does not exist, therefore this validation passes return true; }); };</code></pre>  |
  

### $viewChangeListeners

| Type | Description |
| :--: | :--: |
| Array.<Function> | <p>Array of functions to execute whenever the view value has changed. It is called with no arguments, and its return value is ignored. This can be used in place of additional $watches against the model value.</p>  |
  

### $error

| Type | Description |
| :--: | :--: |
| Object | <p>An object hash with all failing validator ids as keys.</p>  |
  

### $pending

| Type | Description |
| :--: | :--: |
| Object | <p>An object hash with all pending validator ids as keys.</p>  |
  

### $untouched

| Type | Description |
| :--: | :--: |
| boolean | <p>True if control has not lost focus yet.</p>  |
  

### $touched

| Type | Description |
| :--: | :--: |
| boolean | <p>True if control has lost focus.</p>  |
  

### $pristine

| Type | Description |
| :--: | :--: |
| boolean | <p>True if user has not interacted with the control yet.</p>  |
  

### $dirty

| Type | Description |
| :--: | :--: |
| boolean | <p>True if user has already interacted with the control.</p>  |
  

### $valid

| Type | Description |
| :--: | :--: |
| boolean | <p>True if there is no error.</p>  |
  

### $invalid

| Type | Description |
| :--: | :--: |
| boolean | <p>True if at least one error on the control.</p>  |
  





