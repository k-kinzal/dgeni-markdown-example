

[View Source](http://github.com///tree/master/#L14626)



# filter



* filter in module []()






Selects a subset of items from `array` and returns it as a new array.








## Usage
### In HTML Template Binding

```
{{ filter_expression | filter : array : expression : comparator}}
```


### In JavaScript
```$filter('filter')(array, expression, comparator)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| array | Array | <p>The source array.</p>  |
| expression | string&#124;Object&#124;function() | <p>The predicate to be used for selecting items from <code>array</code>.</p> <p>  Can be one of:</p> <ul> <li><p><code>string</code>: The string is evaluated as an expression and the resulting value is used for substring match against the contents of the <code>array</code>. All strings or objects with string properties in <code>array</code> that contain this string will be returned. The predicate can be negated by prefixing the string with <code>!</code>.</p> </li> <li><p><code>Object</code>: A pattern object can be used to filter specific properties on objects contained by <code>array</code>. For example <code>{name:&quot;M&quot;, phone:&quot;1&quot;}</code> predicate will return an array of items which have property <code>name</code> containing &quot;M&quot; and property <code>phone</code> containing &quot;1&quot;. A special property name <code>$</code> can be used (as in <code>{$:&quot;text&quot;}</code>) to accept a match against any property of the object. That&#39;s equivalent to the simple substring match with a <code>string</code> as described above.</p> </li> <li><p><code>function(value)</code>: A predicate function can be used to write arbitrary filters. The function is called for each element of <code>array</code>. The final result is an array of those elements that the predicate returned true for.</p> </li> </ul>  |
| comparator | function(actual, expected)&#124;true&#124;undefined | <p>Comparator which is used in determining if the expected value (from the filter expression) and actual value (from the object in the array) should be considered a match.</p> <p>  Can be one of:</p> <ul> <li><p><code>function(actual, expected)</code>: The function will be given the object value and the predicate value to compare and should return true if the item should be included in filtered result.</p> </li> <li><p><code>true</code>: A shorthand for <code>function(actual, expected) { return angular.equals(expected, actual)}</code>. this is essentially strict comparison of expected and actual.</p> </li> <li><p><code>false&amp;#124;undefined</code>: A short hand for a function which will look for a substring match in case insensitive way.</p> </li> </ul>  |






