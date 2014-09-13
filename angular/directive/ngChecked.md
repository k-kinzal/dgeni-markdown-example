



# ngChecked








The HTML specification does not require browsers to preserve the values of boolean attributes
such as checked. (Their presence means true and their absence means false.)
If we put an Angular interpolation expression into such an attribute then the
binding information would be lost when the browser removes the attribute.
The `ngChecked` directive solves this problem for the `checked` attribute.
This complementary directive is not removed by the browser and so provides
a permanent reliable place to store the binding information.








## Directive Info


* This directive executes at priority level 100.


## Usage



* as attribute:
    ```
    <INPUT
      ng-checked="">
    ...
    </INPUT>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngChecked | expression | <p>If the (expression)[guide/expression] is truthy, then special attribute &quot;checked&quot; will be set on the element</p>  |




