

[View Source](http://github.com///tree/master/#L15979)



# ngOpen



* directive in module []()






The HTML specification does not require browsers to preserve the values of boolean attributes
such as open. (Their presence means true and their absence means false.)
If we put an Angular interpolation expression into such an attribute then the
binding information would be lost when the browser removes the attribute.
The `ngOpen` directive solves this problem for the `open` attribute.
This complementary directive is not removed by the browser and so provides
a permanent reliable place to store the binding information.








## Directive Info


* This directive executes at priority level 100.


## Usage



* as attribute:
    ```
    <DETAILS
      ng-open="">
    ...
    </DETAILS>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngOpen | expression | <p>If the {@link guide/expression expression} is truthy, then special attribute &quot;open&quot; will be set on the element</p>  |




