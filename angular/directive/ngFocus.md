



# ngFocus








Specify custom behavior on focus event.

Note: As the `focus` event is executed synchronously when calling `input.focus()`
AngularJS executes the expression using `scope.$evalAsync` if the event is fired
during an `$apply` to ensure a consistent state.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <window, input, select, textarea, a
      ng-focus="">
    ...
    </window, input, select, textarea, a>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngFocus | expression | <p>(Expression)[guide/expression] to evaluate upon focus. ((Event object is available as <code>$event</code>)[guide/expression#-event-])</p>  |




