



# ngSelected








The HTML specification does not require browsers to preserve the values of boolean attributes
such as selected. (Their presence means true and their absence means false.)
If we put an Angular interpolation expression into such an attribute then the
binding information would be lost when the browser removes the attribute.
The `ngSelected` directive solves this problem for the `selected` attribute.
This complementary directive is not removed by the browser and so provides
a permanent reliable place to store the binding information.








## Directive Info


* This directive executes at priority level 100.


## Usage



* as attribute:
    ```
    <OPTION
      ng-selected="">
    ...
    </OPTION>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngSelected | expression | <p>If the (expression)[guide/expression] is truthy, then special attribute &quot;selected&quot; will be set on the element</p>  |




