



# ngBlur








Specify custom behavior on blur event.

A [blur event](https://developer.mozilla.org/en-US/docs/Web/Events/blur) fires when
an element has lost focus.

Note: As the `blur` event is executed synchronously also during DOM manipulations
(e.g. removing a focussed input),
AngularJS executes the expression using `scope.$evalAsync` if the event is fired
during an `$apply` to ensure a consistent state.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <window, input, select, textarea, a
      ng-blur="">
    ...
    </window, input, select, textarea, a>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngBlur | expression | <p>(Expression)[guide/expression] to evaluate upon blur. ((Event object is available as <code>$event</code>)[guide/expression#-event-])</p>  |




