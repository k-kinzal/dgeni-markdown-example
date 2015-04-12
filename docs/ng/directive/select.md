



# select








HTML `SELECT` element with angular data-binding.

In many cases, `ngRepeat` can be used on `<option>` elements instead of (ngOptions)[api/ng/directive/ngOptions] to achieve a similar result. However, `ngOptions` provides some benefits such as reducing
memory and increasing speed by not creating a new scope for each repeated instance, as well as providing
more flexibility in how the `<select>`'s model is assigned via the `select` **`as`** part of the
comprehension expression. `ngOptions` should be used when the `<select>` model needs to be bound
to a non-string value. This is because an option element can only be bound to string values at
present.

When an item in the `<select>` menu is selected, the array element or object property
represented by the selected option will be bound to the model identified by the `ngModel`
directive.

If the viewValue contains a value that doesn't match any of the options then the control
will automatically add an "unknown" option, which it then removes when this is resolved.

Optionally, a single hard-coded `<option>` element, with the value set to an empty string, can
be nested into the `<select>` element. This element will then represent the `null` or "not selected"
option. See example below for demonstration.

<div class="alert alert-warning">
**Note:** By default, `ngModel` compares by reference, not value. This is important when binding to an
array of objects. See an example [in this jsfiddle](http://jsfiddle.net/qWzTb/). When using `track by`
in an `ngOptions` expression, however, deep equality checks will be performed.
</div>








## Directive Info


* This directive executes at priority level 0.


## Usage




* as element:
    ```
    <select>
    ...
    </select>
    ```







