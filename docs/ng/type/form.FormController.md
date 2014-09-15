



# form.FormController








`FormController` keeps track of all its controls and nested forms as well as the state of them,
such as being valid/invalid or dirty/pristine.

Each (form)[api/ng/directive/form] directive creates an instance
of `FormController`.







  




## Methods
### $rollbackViewValue
Rollback all form controls pending updates to the `$modelValue`.

Updates may be pending by a debounced event or because the input is waiting for a some future
event defined in `ng-model-options`. This method is typically needed by the reset button of
a form that uses `ng-model-options` to pend updates.








### $commitViewValue
Commit all form controls pending updates to the `$modelValue`.

Updates may be pending by a debounced event or because the input is waiting for a some future
event defined in `ng-model-options`. This method is rarely needed as `NgModelController`
usually handles calling this in response to input events.








### $addControl
Register a control with the form.

Input elements using ngModelController do this automatically when they are linked.








### $removeControl
Deregister a control from the form.

Input elements using ngModelController do this automatically when they are destroyed.








### $setValidity
Sets the validity of a form control.

This method will also propagate to parent forms.








### $setDirty
Sets the form to a dirty state.

This method can be called to add the 'ng-dirty' class and set the form to a dirty
state (ng-dirty class). This method will also propagate to parent forms.








### $setPristine
Sets the form to its pristine state.

This method can be called to remove the 'ng-dirty' class and set the form to its pristine
state (ng-pristine class). This method will also propagate to all the controls contained
in this form.

Setting a form back to a pristine state is often useful when we want to 'reuse' a form after
saving or resetting it.








### $setSubmitted
Sets the form to its submitted state.











## Properties
### $pristine

| Type | Description |
| :--: | :--: |
| boolean | <p>True if user has not interacted with the form yet.</p>  |
  

### $dirty

| Type | Description |
| :--: | :--: |
| boolean | <p>True if user has already interacted with the form.</p>  |
  

### $valid

| Type | Description |
| :--: | :--: |
| boolean | <p>True if all of the containing forms and controls are valid.</p>  |
  

### $invalid

| Type | Description |
| :--: | :--: |
| boolean | <p>True if at least one containing control or form is invalid.</p>  |
  

### $submitted

| Type | Description |
| :--: | :--: |
| boolean | <p>True if user has submitted the form even if its invalid.</p>  |
  

### $error

| Type | Description |
| :--: | :--: |
| Object | <p>Is an object hash, containing references to controls or forms with failing validators, where:</p> <ul> <li>keys are validation tokens (error names),</li> <li><p>values are arrays of controls or forms that have a failing validator for given error name.</p> <p>Built-in validation tokens:</p> </li> <li><p><code>email</code></p> </li> <li><code>max</code></li> <li><code>maxlength</code></li> <li><code>min</code></li> <li><code>minlength</code></li> <li><code>number</code></li> <li><code>pattern</code></li> <li><code>required</code></li> <li><code>url</code></li> </ul>  |
  





