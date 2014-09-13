

[View Source](http://github.com///tree/master/#L15827)



# ngDisabled



* directive in module []()






We shouldn't do this, because it will make the button enabled on Chrome/Firefox but not on IE8 and older IEs:
```html
<div ng-init="scope = { isDisabled: false }">
 <button disabled="{{scope.isDisabled}}">Disabled</button>
</div>
```

The HTML specification does not require browsers to preserve the values of boolean attributes
such as disabled. (Their presence means true and their absence means false.)
If we put an Angular interpolation expression into such an attribute then the
binding information would be lost when the browser removes the attribute.
The `ngDisabled` directive solves this problem for the `disabled` attribute.
This complementary directive is not removed by the browser and so provides
a permanent reliable place to store the binding information.








## Directive Info


* This directive executes at priority level 100.


## Usage



* as attribute:
    ```
    <INPUT
      ng-disabled="">
    ...
    </INPUT>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngDisabled | expression | <p>If the {@link guide/expression expression} is truthy, then special attribute &quot;disabled&quot; will be set on the element</p>  |




