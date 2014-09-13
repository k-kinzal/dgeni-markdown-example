

[View Source](http://github.com///tree/master/#L17414)



# ngModel.NgModelController



* type in module []()






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

We are using the {@link ng.service:$sce $sce} service here and include the {@link ngSanitize $sanitize}
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
              if(!ngModel) return; // do nothing if no ng-model

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
                if( attrs.stripBr && html == '<br>' ) {
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







  




## Methods
### method:$render
Called when the view needs to be updated. It is expected that the user of the ng-model
directive will implement this method.








### method:$isEmpty
This is called when we need to determine if the value of the input is empty.

For instance, the required directive does this to work out if the input has data or not.
The default `$isEmpty` function checks whether the value is `undefined`, `''`, `null` or `NaN`.

You can override this for input directives whose concept of being empty is different to the
default. The `checkboxInputType` directive does this because in its case a value of `false`
implies empty.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>Reference to check.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>True if <code>value</code> is empty.</p>  |




### method:$setValidity
Change the validity state, and notifies the form when the control changes validity. (i.e. it
does not notify form if given validator is already marked as invalid).

This method should be called by validators - i.e. the parser or formatter functions.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| validationErrorKey | string | <p>Name of the validator. the <code>validationErrorKey</code> will assign to <code>$error[validationErrorKey]=!isValid</code> so that it is available for data-binding. The <code>validationErrorKey</code> should be in camelCase and will get converted into dash-case for class name. Example: <code>myError</code> will result in <code>ng-valid-my-error</code> and <code>ng-invalid-my-error</code> class and can be bound to as  <code>{{someForm.someControl.$error.myError}}</code> .</p>  |
| isValid | boolean | <p>Whether the current state is valid (true) or invalid (false).</p>  |






### method:$setPristine
Sets the control to its pristine state.

This method can be called to remove the 'ng-dirty' class and set the control to its pristine
state (ng-pristine class).








### method:$setViewValue
Update the view value.

This method should be called when the view value changes, typically from within a DOM event handler.
For example {@link ng.directive:input input} and
{@link ng.directive:select select} directives call it.

It will update the $viewValue, then pass this value through each of the functions in `$parsers`,
which includes any validators. The value that comes out of this `$parsers` pipeline, be applied to
`$modelValue` and the **expression** specified in the `ng-model` attribute.

Lastly, all the registered change listeners, in the `$viewChangeListeners` list, are called.

Note that calling this function does not trigger a `$digest`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | string | <p>Value from the view.</p>  |









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
| Array.<Function> | <p>Array of functions to execute, as a pipeline, whenever the control reads value from the DOM.  Each function is called, in turn, passing the value through to the next. The last return value is used to populate the model. Used to sanitize / convert the value as well as validation. For validation, the parsers should update the validity state using {@link ngModel.NgModelController#$setValidity $setValidity()}, and return <code>undefined</code> for invalid values.</p>  |
  

### $formatters

| Type | Description |
| :--: | :--: |
| Array.<Function> | <p>Array of functions to execute, as a pipeline, whenever the model value changes. Each function is called, in turn, passing the value through to the next. Used to format / convert values for display in the control and validation.</p> <pre><code class="lang-js">function formatter(value) { if (value) { return value.toUpperCase(); } } ngModel.$formatters.push(formatter);</code></pre>  |
  

### $viewChangeListeners

| Type | Description |
| :--: | :--: |
| Array.<Function> | <p>Array of functions to execute whenever the view value has changed. It is called with no arguments, and its return value is ignored. This can be used in place of additional $watches against the model value.</p>  |
  

### $error

| Type | Description |
| :--: | :--: |
| Object | <p>An object hash with all errors as keys.</p>  |
  

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
  





