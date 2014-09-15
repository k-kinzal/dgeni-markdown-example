



# ngSwipeLeft








Specify custom behavior when an element is swiped to the left on a touchscreen device.
A leftward swipe is a quick, right-to-left slide of the finger.
Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag
too.

To disable the mouse click and drag functionality, add `ng-swipe-disable-mouse` to
the `ng-swipe-left` or `ng-swipe-right` DOM Element.

Requires the (`ngTouch`)[api/ngTouch] module to be installed.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-swipe-left="">
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngSwipeLeft | expression | <p>(Expression)[guide/expression] to evaluate upon left swipe. (Event object is available as <code>$event</code>)</p>  |




