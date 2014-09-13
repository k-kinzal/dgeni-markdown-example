

[View Source](http://github.com///tree/master/#L16513)



# input[text]



* input in module []()






Standard HTML text input with angular data binding, inherited by most of the `input` elements.

*NOTE* Not every feature offered is available for all input types.








## Directive Info


* This directive executes at priority level 0.


## Usage
```
<input type="text"
       ng-model=""
       [name=""]
       [required=""]
       [ng-required=""]
       [ng-minlength=""]
       [ng-maxlength=""]
       [ng-pattern=""]
       [ng-change=""]
       [ng-trim=""]>
```


### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngModel | string | <p>Assignable angular expression to data-bind to.</p>  |
| name | string= | <p>Property name of the form under which the control is published.</p>  |
| required | string= | <p>Adds <code>required</code> validation error key if the value is not entered.</p>  |
| ngRequired | string= | <p>Adds <code>required</code> attribute and <code>required</code> validation constraint to the element when the ngRequired expression evaluates to true. Use <code>ngRequired</code> instead of <code>required</code> when you want to data-bind to the <code>required</code> attribute.</p>  |
| ngMinlength | number= | <p>Sets <code>minlength</code> validation error key if the value is shorter than minlength.</p>  |
| ngMaxlength | number= | <p>Sets <code>maxlength</code> validation error key if the value is longer than maxlength.</p>  |
| ngPattern | string= | <p>Sets <code>pattern</code> validation error key if the value does not match the RegExp pattern expression. Expected value is <code>/regexp/</code> for inline patterns or <code>regexp</code> for patterns defined as scope expressions.</p>  |
| ngChange | string= | <p>Angular expression to be executed when input changes due to user interaction with the input element.</p>  |
| ngTrim | boolean= | <p>If set to false Angular will not automatically trim the input. This parameter is ignored for input[type=password] controls, which will never trim the input.</p>  |




