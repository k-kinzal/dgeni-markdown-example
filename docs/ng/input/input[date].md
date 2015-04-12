



# input[date]








Input with date validation and transformation. In browsers that do not yet support
the HTML5 date input, a text element will be used. In that case, text must be entered in a valid ISO-8601
date format (yyyy-MM-dd), for example: `2009-01-06`. Since many
modern browsers do not yet support this input type, it is important to provide cues to users on the
expected input format via a placeholder or label.

The model must always be a Date object, otherwise Angular will throw an error.
Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.

The timezone to be used to read/write the `Date` instance in the model can be defined using
(ngModelOptions)[api/ng/directive/ngModelOptions]. By default, this is the timezone of the browser.








## Directive Info


* This directive executes at priority level 0.


## Usage
```
<input type="date"
       ng-model=""
       [name=""]
       [min=""]
       [max=""]
       [required=""]
       [ng-required=""]
       [ng-change=""]>
```


### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngModel | string | <p>Assignable angular expression to data-bind to.</p>  |
| name | string= | <p>Property name of the form under which the control is published.</p>  |
| min | string= | <p>Sets the <code>min</code> validation error key if the value entered is less than <code>min</code>. This must be a valid ISO date string (yyyy-MM-dd).</p>  |
| max | string= | <p>Sets the <code>max</code> validation error key if the value entered is greater than <code>max</code>. This must be a valid ISO date string (yyyy-MM-dd).</p>  |
| required | string= | <p>Sets <code>required</code> validation error key if the value is not entered.</p>  |
| ngRequired | string= | <p>Adds <code>required</code> attribute and <code>required</code> validation constraint to the element when the ngRequired expression evaluates to true. Use <code>ngRequired</code> instead of <code>required</code> when you want to data-bind to the <code>required</code> attribute.</p>  |
| ngChange | string= | <p>Angular expression to be executed when input changes due to user interaction with the input element.</p>  |




