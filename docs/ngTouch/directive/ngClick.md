



# ngClick








A more powerful replacement for the default ngClick designed to be used on touchscreen
devices. Most mobile browsers wait about 300ms after a tap-and-release before sending
the click event. This version handles them immediately, and then prevents the
following click event from propagating.

Requires the (`ngTouch`)[api/ngTouch] module to be installed.

This directive can fall back to using an ordinary click event, and so works on desktop
browsers as well as mobile.

This directive also sets the CSS class `ng-click-active` while the element is being held
down (by a mouse click or touch) so you can restyle the depressed element if you wish.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-click="">
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngClick | expression | <p>(Expression)[guide/expression] to evaluate upon tap. (Event object is available as <code>$event</code>)</p>  |




