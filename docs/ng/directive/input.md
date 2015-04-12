



# input








HTML input element control. When used together with (`ngModel`)[api/ng/directive/ngModel], it provides data-binding,
input state control, and validation.
Input control follows HTML5 input types and polyfills the HTML5 validation behavior for older browsers.

<div class="alert alert-warning">
**Note:** Not every feature offered is available for all input types.
Specifically, data binding and event handling via `ng-model` is unsupported for `input[file]`.
</div>








## Directive Info


* This directive executes at priority level 0.


## Usage




* as element:
    ```
    <input
      ng-model=""
      [name=""]
      [required=""]
      [ng-required=""]
      [ng-minlength=""]
      [ng-maxlength=""]
      [ng-pattern=""]
      [ng-change=""]
      [ng-trim=""]>
    ...
    </input>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngModel | string | <p>Assignable angular expression to data-bind to.</p>  |
| name | string= | <p>Property name of the form under which the control is published.</p>  |
| required | string= | <p>Sets <code>required</code> validation error key if the value is not entered.</p>  |
| ngRequired | boolean= | <p>Sets <code>required</code> attribute if set to true</p>  |
| ngMinlength | number= | <p>Sets <code>minlength</code> validation error key if the value is shorter than minlength.</p>  |
| ngMaxlength | number= | <p>Sets <code>maxlength</code> validation error key if the value is longer than maxlength. Setting the attribute to a negative or non-numeric value, allows view values of any length.</p>  |
| ngPattern | string= | <p>Sets <code>pattern</code> validation error key if the value does not match the RegExp pattern expression. Expected value is <code>/regexp/</code> for inline patterns or <code>regexp</code> for patterns defined as scope expressions.</p>  |
| ngChange | string= | <p>Angular expression to be executed when input changes due to user interaction with the input element.</p>  |
| ngTrim | boolean= | <p>If set to false Angular will not automatically trim the input. This parameter is ignored for input[type=password] controls, which will never trim the input.</p>  |




