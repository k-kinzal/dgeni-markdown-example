



# ngValue








Binds the given expression to the value of `<option>` or (`input[radio]`)[api/ng/input/input[radio]],
so that when the element is selected, the (`ngModel`)[api/ng/directive/ngModel] of that element is set to
the bound value.

`ngValue` is useful when dynamically generating lists of radio buttons using
(`ngRepeat`)[api/ng/directive/ngRepeat], as shown below.

Likewise, `ngValue` can be used to generate `<option>` elements for
the (`select`)[api/ng/directive/select] element. In that case however, only strings are supported
for the `value `attribute, so the resulting `ngModel` will always be a string.
Support for `select` models with non-string values is available via `ngOptions`.








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




