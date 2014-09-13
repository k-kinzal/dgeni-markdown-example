

[View Source](http://github.com///tree/master/#L18075)



# ngValue



* directive in module []()






Binds the given expression to the value of `input[select]` or `input[radio]`, so
that when the element is selected, the `ngModel` of that element is set to the
bound value.

`ngValue` is useful when dynamically generating lists of radio buttons using `ng-repeat`, as
shown below.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <input
      [ng-value=""]>
    ...
    </input>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngValue | string= | <p>angular expression, whose value will be bound to the <code>value</code> attribute of the <code>input</code> element</p>  |




