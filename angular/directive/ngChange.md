



# ngChange








Evaluate the given expression when the user changes the input.
The expression is evaluated immediately, unlike the JavaScript onchange event
which only triggers at the end of a change (usually, when the user leaves the
form element or presses the return key).
The expression is not evaluated when the value change is coming from the model.

Note, this directive requires `ngModel` to be present.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <input
      ng-change="">
    ...
    </input>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngChange | expression | <p>(Expression)[guide/expression] to evaluate upon change in input value.</p>  |




