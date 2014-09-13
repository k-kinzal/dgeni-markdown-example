



# orderBy








Orders a specified `array` by the `expression` predicate. It is ordered alphabetically
for strings and numerically for numbers. Note: if you notice numbers are not being sorted
correctly, make sure they are actually being saved as numbers and not strings.









 ## Usage
### In HTML Template Binding


```html
{{ orderBy_expression | orderBy : array : expression : reverse}}
```

### In JavaScript

```js
$filter('orderBy')(array, expression, reverse)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| array | Array | <p>The array to sort.</p>  |
| expression | function(*)&#124;string&#124;Array.<(function(*)&#124;string)> | <p>A predicate to be used by the comparator to determine the order of elements.</p> <p>   Can be one of:</p> <ul> <li><code>function</code>: Getter function. The result of this function will be sorted using the <code>&lt;</code>, <code>=</code>, <code>&gt;</code> operator.</li> <li><code>string</code>: An Angular expression. The result of this expression is used to compare elements (for example <code>name</code> to sort by a property called <code>name</code> or <code>name.substr(0, 3)</code> to sort by 3 first characters of a property called <code>name</code>). The result of a constant expression is interpreted as a property name to be used in comparisons (for example <code>&quot;special name&quot;</code> to sort object by the value of their <code>special name</code> property). An expression can be optionally prefixed with <code>+</code> or <code>-</code> to control ascending or descending sort order (for example, <code>+name</code> or <code>-name</code>).</li> <li><code>Array</code>: An array of function or string predicates. The first predicate in the array is used for sorting, but when two items are equivalent, the next predicate is used.</li> </ul>  |
| reverse | boolean= | <p>Reverse the order of the array.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Array | <p>Sorted copy of the source array.</p>  |




