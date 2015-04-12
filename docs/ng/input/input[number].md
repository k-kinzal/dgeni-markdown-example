



# input[number]








Text input with number validation and transformation. Sets the `number` validation
error if not a valid number.

<div class="alert alert-warning">
The model must always be of type `number` otherwise Angular will throw an error.
Be aware that a string containing a number is not enough. See the ngModel:numfmt
error docs for more information and an example of how to convert your model if necessary.
</div>








## Directive Info


* This directive executes at priority level 0.


## Usage
```
<input type="number"
       ng-model=""
       [name=""]
       [min=""]
       [max=""]
       [required=""]
       [ng-required=""]
       [ng-minlength=""]
       [ng-maxlength=""]
       [pattern=""]
       [ng-pattern=""]
       [ng-change=""]>
```


### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngModel | string | <p>Assignable angular expression to data-bind to.</p>  |
| name | string= | <p>Property name of the form under which the control is published.</p>  |
| min | string= | <p>Sets the <code>min</code> validation error key if the value entered is less than <code>min</code>.</p>  |
| max | string= | <p>Sets the <code>max</code> validation error key if the value entered is greater than <code>max</code>.</p>  |
| required | string= | <p>Sets <code>required</code> validation error key if the value is not entered.</p>  |
| ngRequired | string= | <p>Adds <code>required</code> attribute and <code>required</code> validation constraint to the element when the ngRequired expression evaluates to true. Use <code>ngRequired</code> instead of <code>required</code> when you want to data-bind to the <code>required</code> attribute.</p>  |
| ngMinlength | number= | <p>Sets <code>minlength</code> validation error key if the value is shorter than minlength.</p>  |
| ngMaxlength | number= | <p>Sets <code>maxlength</code> validation error key if the value is longer than maxlength. Setting the attribute to a negative or non-numeric value, allows view values of any length.</p>  |
| pattern | string= | <p>Similar to <code>ngPattern</code> except that the attribute value is the actual string that contains the regular expression body that will be converted to a regular expression as in the ngPattern directive.</p>  |
| ngPattern | string= | <p>Sets <code>pattern</code> validation error key if the ngModel value does not match a RegExp found by evaluating the Angular expression given in the attribute value. If the expression evaluates to a RegExp object then this is used directly. If the expression is a string then it will be converted to a RegExp after wrapping it in <code>^</code> and <code>$</code> characters. For instance, <code>&quot;abc&quot;</code> will be converted to <code>new RegExp(&#39;^abc$&#39;)</code>.</p>  |
| ngChange | string= | <p>Angular expression to be executed when input changes due to user interaction with the input element.</p>  |




