

[View Source](http://github.com///tree/master/#L16084)



# form.FormController



* type in module []()






`FormController` keeps track of all its controls and nested forms as well as the state of them,
such as being valid/invalid or dirty/pristine.

Each {@link ng.directive:form form} directive creates an instance
of `FormController`.







  




## Methods
### method:$addControl
Register a control with the form.

Input elements using ngModelController do this automatically when they are linked.








### method:$removeControl
Deregister a control from the form.

Input elements using ngModelController do this automatically when they are destroyed.








### method:$setValidity
Sets the validity of a form control.

This method will also propagate to parent forms.








### method:$setDirty
Sets the form to a dirty state.

This method can be called to add the 'ng-dirty' class and set the form to a dirty
state (ng-dirty class). This method will also propagate to parent forms.








### method:$setPristine
Sets the form to its pristine state.

This method can be called to remove the 'ng-dirty' class and set the form to its pristine
state (ng-pristine class). This method will also propagate to all the controls contained
in this form.

Setting a form back to a pristine state is often useful when we want to 'reuse' a form after
saving or resetting it.











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
  

### $error

| Type | Description |
| :--: | :--: |
| Object | <p>Is an object hash, containing references to all invalid controls or forms, where:</p> <ul> <li>keys are validation tokens (error names),</li> <li>values are arrays of controls or forms that are invalid for given error name.</li> </ul> <p> Built-in validation tokens:</p> <ul> <li><code>email</code></li> <li><code>max</code></li> <li><code>maxlength</code></li> <li><code>min</code></li> <li><code>minlength</code></li> <li><code>number</code></li> <li><code>pattern</code></li> <li><code>required</code></li> <li><code>url</code></li> </ul>  |
  





