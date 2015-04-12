



# ngOptions








The `ngOptions` attribute can be used to dynamically generate a list of `<option>`
elements for the `<select>` element using the array or object obtained by evaluating the
`ngOptions` comprehension expression.

In many cases, `ngRepeat` can be used on `<option>` elements instead of `ngOptions` to achieve a
similar result. However, `ngOptions` provides some benefits such as reducing memory and
increasing speed by not creating a new scope for each repeated instance, as well as providing
more flexibility in how the `<select>`'s model is assigned via the `select` **`as`** part of the
comprehension expression. `ngOptions` should be used when the `<select>` model needs to be bound
 to a non-string value. This is because an option element can only be bound to string values at
present.

When an item in the `<select>` menu is selected, the array element or object property
represented by the selected option will be bound to the model identified by the `ngModel`
directive.

Optionally, a single hard-coded `<option>` element, with the value set to an empty string, can
be nested into the `<select>` element. This element will then represent the `null` or "not selected"
option. See example below for demonstration.

<div class="alert alert-warning">
**Note:** By default, `ngModel` compares by reference, not value. This is important when binding to an
array of objects. See an example [in this jsfiddle](http://jsfiddle.net/qWzTb/). When using `track by`
in an `ngOptions` expression, however, deep equality checks will be performed.
</div>

## `select` **`as`**

Using `select` **`as`** will bind the result of the `select` expression to the model, but
the value of the `<select>` and `<option>` html elements will be either the index (for array data sources)
or property name (for object data sources) of the value within the collection. If a **`track by`** expression
is used, the result of that expression will be set as the value of the `option` and `select` elements.


### `select` **`as`** and **`track by`**

<div class="alert alert-warning">
Do not use `select` **`as`** and **`track by`** in the same expression. They are not designed to work together.
</div>

Consider the following example:

```html
<select ng-options="item.subItem as item.label for item in values track by item.id" ng-model="selected">
```

```js
$scope.values = [{
  id: 1,
  label: 'aLabel',
  subItem: { name: 'aSubItem' }
}, {
  id: 2,
  label: 'bLabel',
  subItem: { name: 'bSubItem' }
}];

$scope.selected = { name: 'aSubItem' };
```

With the purpose of preserving the selection, the **`track by`** expression is always applied to the element
of the data source (to `item` in this example). To calculate whether an element is selected, we do the
following:

1. Apply **`track by`** to the elements in the array. In the example: `[1, 2]`
2. Apply **`track by`** to the already selected value in `ngModel`.
   In the example: this is not possible as **`track by`** refers to `item.id`, but the selected
   value from `ngModel` is `{name: 'aSubItem'}`, so the **`track by`** expression is applied to
   a wrong object, the selected element can't be found, `<select>` is always reset to the "not
   selected" option.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-model=""
      [name=""]
      [required=""]
      [ng-required=""]
      [ng-options=""]>
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngModel | string | <p>Assignable angular expression to data-bind to.</p>  |
| name | string= | <p>Property name of the form under which the control is published.</p>  |
| required | string= | <p>The control is considered valid only if value is entered.</p>  |
| ngRequired | string= | <p>Adds <code>required</code> attribute and <code>required</code> validation constraint to the element when the ngRequired expression evaluates to true. Use <code>ngRequired</code> instead of <code>required</code> when you want to data-bind to the <code>required</code> attribute.</p>  |
| ngOptions | comprehension_expression= | <p>in one of the following forms:</p> <ul> <li>for array data sources:<ul> <li><code>label</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code></li> <li><code>select</code> <strong><code>as</code></strong> <code>label</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code></li> <li><code>label</code> <strong><code>group by</code></strong> <code>group</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code></li> <li><code>label</code> <strong><code>disable when</code></strong> <code>disable</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code></li> <li><code>label</code> <strong><code>group by</code></strong> <code>group</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code> <strong><code>track by</code></strong> <code>trackexpr</code></li> <li><code>label</code> <strong><code>disable when</code></strong> <code>disable</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code> <strong><code>track by</code></strong> <code>trackexpr</code></li> <li><code>label</code> <strong><code>for</code></strong> <code>value</code> <strong><code>in</code></strong> <code>array</code> &#124; orderBy:<code>orderexpr</code> <strong><code>track by</code></strong> <code>trackexpr</code> (for including a filter with <code>track by</code>)</li> </ul> </li> <li>for object data sources:<ul> <li><code>label</code> <strong><code>for (</code></strong><code>key</code> <strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> <li><code>select</code> <strong><code>as</code></strong> <code>label</code> <strong><code>for (</code></strong><code>key</code> <strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> <li><code>label</code> <strong><code>group by</code></strong> <code>group</code> <strong><code>for (</code></strong><code>key</code><strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> <li><code>label</code> <strong><code>disable when</code></strong> <code>disable</code> <strong><code>for (</code></strong><code>key</code><strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> <li><code>select</code> <strong><code>as</code></strong> <code>label</code> <strong><code>group by</code></strong> <code>group</code> <strong><code>for</code> <code>(</code></strong><code>key</code><strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> <li><code>select</code> <strong><code>as</code></strong> <code>label</code> <strong><code>disable when</code></strong> <code>disable</code> <strong><code>for</code> <code>(</code></strong><code>key</code><strong><code>,</code></strong> <code>value</code><strong><code>) in</code></strong> <code>object</code></li> </ul> </li> </ul> <p>Where:</p> <ul> <li><code>array</code> / <code>object</code>: an expression which evaluates to an array / object to iterate over.</li> <li><code>value</code>: local variable which will refer to each item in the <code>array</code> or each property value of <code>object</code> during iteration.</li> <li><code>key</code>: local variable which will refer to a property name in <code>object</code> during iteration.</li> <li><code>label</code>: The result of this expression will be the label for <code>&lt;option&gt;</code> element. The <code>expression</code> will most likely refer to the <code>value</code> variable (e.g. <code>value.propertyName</code>).</li> <li><code>select</code>: The result of this expression will be bound to the model of the parent <code>&lt;select&gt;</code> element. If not specified, <code>select</code> expression will default to <code>value</code>.</li> <li><code>group</code>: The result of this expression will be used to group options using the <code>&lt;optgroup&gt;</code> DOM element.</li> <li><code>disable</code>: The result of this expression will be used to disable the rendered <code>&lt;option&gt;</code> element. Return <code>true</code> to disable.</li> <li><code>trackexpr</code>: Used when working with an array of objects. The result of this expression will be used to identify the objects in the array. The <code>trackexpr</code> will most likely refer to the <code>value</code> variable (e.g. <code>value.propertyName</code>). With this the selection is preserved even when the options are recreated (e.g. reloaded from the server).</li> </ul>  |




