



# select








HTML `SELECT` element with angular data-binding.

# `ngOptions`

The `ngOptions` attribute can be used to dynamically generate a list of `<option>`
elements for the `<select>` element using the array or object obtained by evaluating the
`ngOptions` comprehension_expression.

When an item in the `<select>` menu is selected, the array element or object property
represented by the selected option will be bound to the model identified by the `ngModel`
directive.

<div class="alert alert-warning">
**Note:** `ngModel` compares by reference, not value. This is important when binding to an
array of objects. See an example [in this jsfiddle](http://jsfiddle.net/qWzTb/).
</div>

Optionally, a single hard-coded `<option>` element, with the value set to an empty string, can
be nested into the `<select>` element. This element will then represent the `null` or "not selected"
option. See example below for demonstration.

<div class="alert alert-warning">
**Note:** `ngOptions` provides an iterator facility for the `<option>` element which should be used instead
of (ngRepeat)[api/ng/directive/ngRepeat] when you want the
`select` model to be bound to a non-string value. This is because an option element can only
be bound to string values at present.
</div>








## Directive Info


* This directive executes at priority level 0.


## Usage




* as element:
    ```
    <select
      ng-model=""
      [name=""]
      [required=""]
      [ng-required=""]
      [ng-options=""]>
    ...
    </select>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngModel | string | <p>Assignable angular expression to data-bind to.</p>  |
| name | string= | <p>Property name of the form under which the control is published.</p>  |
| required | string= | <p>The control is considered valid only if value is entered.</p>  |
| ngRequired | string= | <p>Adds <code>required</code> attribute and <code>required</code> validation constraint to the element when the ngRequired expression evaluates to true. Use <code>ngRequired</code> instead of <code>required</code> when you want to data-bind to the <code>required</code> attribute.</p>  |
| ngOptions | comprehension_expression= | <p>in one of the following forms:</p> <ul> <li>for array data sources:<ul> <li><code>label</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code></li> <li><code>select</code> <strong><code>as</code></strong> <code>label</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code></li> <li><code>label</code>  <strong><code>group by</code></strong> <code>group</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code></li> <li><code>select</code> <strong><code>as</code></strong> <code>label</code> <strong><code>group by</code></strong> <code>group</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code> <strong><code>track by</code></strong> <code>trackexpr</code></li> </ul> </li> <li>for object data sources:<ul> <li><code>label</code> <strong><code>for (</code></strong><code>key</code> <strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> <li><code>select</code> <strong><code>as</code></strong> <code>label</code> <strong><code>for (</code></strong><code>key</code> <strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> <li><code>label</code> <strong><code>group by</code></strong> <code>group</code> <strong><code>for (</code></strong><code>key</code><strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> <li><code>select</code> <strong><code>as</code></strong> <code>label</code> <strong><code>group by</code></strong> <code>group</code> <strong><code>for</code> <code>(</code></strong><code>key</code><strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> </ul> </li> </ul> <p>Where:</p> <ul> <li><code>array</code> / <code>object</code>: an expression which evaluates to an array / object to iterate over.</li> <li><code>value</code>: local variable which will refer to each item in the <code>array</code> or each property value of <code>object</code> during iteration.</li> <li><code>key</code>: local variable which will refer to a property name in <code>object</code> during iteration.</li> <li><code>label</code>: The result of this expression will be the label for <code>&lt;option&gt;</code> element. The <code>expression</code> will most likely refer to the <code>value</code> variable (e.g. <code>value.propertyName</code>).</li> <li><code>select</code>: The result of this expression will be bound to the model of the parent <code>&lt;select&gt;</code> element. If not specified, <code>select</code> expression will default to <code>value</code>.</li> <li><code>group</code>: The result of this expression will be used to group options using the <code>&lt;optgroup&gt;</code> DOM element.</li> <li><code>trackexpr</code>: Used when working with an array of objects. The result of this expression will be used to identify the objects in the array. The <code>trackexpr</code> will most likely refer to the <code>value</code> variable (e.g. <code>value.propertyName</code>).</li> </ul>  |




