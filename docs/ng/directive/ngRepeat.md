



# ngRepeat








The `ngRepeat` directive instantiates a template once per item from a collection. Each template
instance gets its own scope, where the given loop variable is set to the current collection item,
and `$index` is set to the item index or key.

Special properties are exposed on the local scope of each template instance, including:

| Variable  | Type            | Details                                                                     |
|-----------|-----------------|-----------------------------------------------------------------------------|
| `$index`  | @type number  | iterator offset of the repeated element (0..length-1)                       |
| `$first`  | @type boolean | true if the repeated element is first in the iterator.                      |
| `$middle` | @type boolean | true if the repeated element is between the first and last in the iterator. |
| `$last`   | @type boolean | true if the repeated element is last in the iterator.                       |
| `$even`   | @type boolean | true if the iterator position `$index` is even (otherwise false).           |
| `$odd`    | @type boolean | true if the iterator position `$index` is odd (otherwise false).            |

Creating aliases for these properties is possible with (`ngInit`)[api/ng/directive/ngInit].
This may be useful when, for instance, nesting ngRepeats.


# Iterating over object properties

It is possible to get `ngRepeat` to iterate over the properties of an object using the following
syntax:

```js
<div ng-repeat="(key, value) in myObj"> ... </div>
```

You need to be aware that the JavaScript specification does not define the order of keys
returned for an object. (To mitigate this in Angular 1.3 the `ngRepeat` directive
used to sort the keys alphabetically.)

Version 1.4 removed the alphabetic sorting. We now rely on the order returned by the browser
when running `for key in myObj`. It seems that browsers generally follow the strategy of providing
keys in the order in which they were defined, although there are exceptions when keys are deleted
and reinstated. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#Cross-browser_issues

If this is not desired, the recommended workaround is to convert your object into an array
that is sorted into the order that you prefer before providing it to `ngRepeat`.  You could
do this with a filter such as [toArrayFilter](http://ngmodules.org/modules/angular-toArrayFilter)
or implement a `$watch` on the object yourself.


# Tracking and Duplicates

When the contents of the collection change, `ngRepeat` makes the corresponding changes to the DOM:

* When an item is added, a new instance of the template is added to the DOM.
* When an item is removed, its template instance is removed from the DOM.
* When items are reordered, their respective templates are reordered in the DOM.

By default, `ngRepeat` does not allow duplicate items in arrays. This is because when
there are duplicates, it is not possible to maintain a one-to-one mapping between collection
items and DOM elements.

If you do need to repeat duplicate items, you can substitute the default tracking behavior
with your own using the `track by` expression.

For example, you may track items by the index of each item in the collection, using the
special scope property `$index`:
```html
   <div ng-repeat="n in [42, 42, 43, 43] track by $index">
     {{n}}
   </div>
```

You may use arbitrary expressions in `track by`, including references to custom functions
on the scope:
```html
   <div ng-repeat="n in [42, 42, 43, 43] track by myTrackingFunction(n)">
     {{n}}
   </div>
```

If you are working with objects that have an identifier property, you can track
by the identifier instead of the whole object. Should you reload your data later, `ngRepeat`
will not have to rebuild the DOM elements for items it has already rendered, even if the
JavaScript objects in the collection have been substituted for new ones:
```html
   <div ng-repeat="model in collection track by model.id">
     {{model.name}}
   </div>
```

When no `track by` expression is provided, it is equivalent to tracking by the built-in
`$id` function, which tracks items by their identity:
```html
   <div ng-repeat="obj in collection track by $id(obj)">
     {{obj.prop}}
   </div>
```

# Special repeat start and end points
To repeat a series of elements instead of just one parent element, ngRepeat (as well as other ng directives) supports extending
the range of the repeater by defining explicit start and end points by using **ng-repeat-start** and **ng-repeat-end** respectively.
The **ng-repeat-start** directive works the same as **ng-repeat**, but will repeat all the HTML code (including the tag it's defined on)
up to and including the ending HTML tag where **ng-repeat-end** is placed.

The example below makes use of this feature:
```html
  <header ng-repeat-start="item in items">
    Header {{ item }}
  </header>
  <div class="body">
    Body {{ item }}
  </div>
  <footer ng-repeat-end>
    Footer {{ item }}
  </footer>
```

And with an input of @type ['A','B'] for the items variable in the example above, the output will evaluate to:
```html
  <header>
    Header A
  </header>
  <div class="body">
    Body A
  </div>
  <footer>
    Footer A
  </footer>
  <header>
    Header B
  </header>
  <div class="body">
    Body B
  </div>
  <footer>
    Footer B
  </footer>
```

The custom start and end points for ngRepeat also support all other HTML directive syntax flavors provided in AngularJS (such
as **data-ng-repeat-start**, **x-ng-repeat-start** and **ng:repeat-start**).








## Directive Info

* This directive creates new scope.
* This directive executes at priority level 1000.


## Usage



* as attribute:
    ```
    <ANY
      ng-repeat="">
    ...
    </ANY>
    ```



## Animations
**.enter** - when a new item is added to the list or when an item is revealed after a filter

**.leave** - when an item is removed from the list or when an item is filtered out

**.move** - when an adjacent item is filtered out causing a reorder or when the item contents are reordered
module:ngAnimate.$animate to learn more about the steps involved in the animation.

### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngRepeat | repeat_expression | <p>The expression indicating how to enumerate a collection. These formats are currently supported:</p> <ul> <li><p><code>variable in expression</code> – where variable is the user defined loop variable and <code>expression</code> is a scope expression giving the collection to enumerate.</p> <p>For example: <code>album in artist.albums</code>.</p> </li> <li><p><code>(key, value) in expression</code> – where <code>key</code> and <code>value</code> can be any user defined identifiers, and <code>expression</code> is the scope expression giving the collection to enumerate.</p> <p>For example: <code>(name, age) in {&#39;adam&#39;:10, &#39;amalie&#39;:12}</code>.</p> </li> <li><p><code>variable in expression track by tracking_expression</code> – You can also provide an optional tracking expression which can be used to associate the objects in the collection with the DOM elements. If no tracking expression is specified, ng-repeat associates elements by identity. It is an error to have more than one tracking expression value resolve to the same key. (This would mean that two distinct objects are mapped to the same DOM element, which is not possible.)  If filters are used in the expression, they should be applied before the tracking expression.</p> <p>For example: <code>item in items</code> is equivalent to <code>item in items track by $id(item)</code>. This implies that the DOM elements will be associated by item identity in the array.</p> <p>For example: <code>item in items track by $id(item)</code>. A built in <code>$id()</code> function can be used to assign a unique <code>$$hashKey</code> property to each item in the array. This property is then used as a key to associated DOM elements with the corresponding item in the array by identity. Moving the same object in array would move the DOM element in the same way in the DOM.</p> <p>For example: <code>item in items track by item.id</code> is a typical pattern when the items come from the database. In this case the object identity does not matter. Two objects are considered equivalent as long as their <code>id</code> property is same.</p> <p>For example: <code>item in items &amp;#124; filter:searchText track by item.id</code> is a pattern that might be used to apply a filter to items in conjunction with a tracking expression.</p> </li> <li><p><code>variable in expression as alias_expression</code> – You can also provide an optional alias expression which will then store the intermediate results of the repeater after the filters have been applied. Typically this is used to render a special message when a filter is active on the repeater, but the filtered result set is empty.</p> <p>For example: <code>item in items &amp;#124; filter:x as results</code> will store the fragment of the repeated items as <code>results</code>, but only after the items have been processed through the filter.</p> <p>Please note that `as [variable name] is not an operator but rather a part of ngRepeat micro-syntax so it can be used only at the end (and not as operator, inside an expression).</p> <p>For example: <code>item in items &amp;#124; filter : x &amp;#124; orderBy : order &amp;#124; limitTo : limit as results</code> .</p> </li> </ul>  |




