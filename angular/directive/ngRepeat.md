



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

Creating aliases for these properties is possible with `ngInit`.
This may be useful when, for instance, nesting ngRepeats.

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
| ngRepeat | repeat_expression | <p>The expression indicating how to enumerate a collection. These formats are currently supported:</p> <ul> <li><p><code>variable in expression</code> – where variable is the user defined loop variable and <code>expression</code> is a scope expression giving the collection to enumerate.</p> <p>For example: <code>album in artist.albums</code>.</p> </li> <li><p><code>(key, value) in expression</code> – where <code>key</code> and <code>value</code> can be any user defined identifiers, and <code>expression</code> is the scope expression giving the collection to enumerate.</p> <p>For example: <code>(name, age) in {&#39;adam&#39;:10, &#39;amalie&#39;:12}</code>.</p> </li> <li><p><code>variable in expression track by tracking_expression</code> – You can also provide an optional tracking function which can be used to associate the objects in the collection with the DOM elements. If no tracking function is specified the ng-repeat associates elements by identity in the collection. It is an error to have more than one tracking function to resolve to the same key. (This would mean that two distinct objects are mapped to the same DOM element, which is not possible.)  Filters should be applied to the expression, before specifying a tracking expression.</p> <p>For example: <code>item in items</code> is equivalent to <code>item in items track by $id(item)</code>. This implies that the DOM elements will be associated by item identity in the array.</p> <p>For example: <code>item in items track by $id(item)</code>. A built in <code>$id()</code> function can be used to assign a unique <code>$$hashKey</code> property to each item in the array. This property is then used as a key to associated DOM elements with the corresponding item in the array by identity. Moving the same object in array would move the DOM element in the same way in the DOM.</p> <p>For example: <code>item in items track by item.id</code> is a typical pattern when the items come from the database. In this case the object identity does not matter. Two objects are considered equivalent as long as their <code>id</code> property is same.</p> <p>For example: <code>item in items &amp;#124; filter:searchText track by item.id</code> is a pattern that might be used to apply a filter to items in conjunction with a tracking expression.</p> </li> </ul>  |




