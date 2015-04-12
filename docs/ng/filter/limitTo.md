



# limitTo








Creates a new array or string containing only a specified number of elements. The elements
are taken from either the beginning or the end of the source array, string or number, as specified by
the value and sign (positive or negative) of `limit`. If a number is used as input, it is
converted to a string.









 ## Usage
### In HTML Template Binding


```html
{{ limitTo_expression | limitTo : input : limit : begin}}
```

### In JavaScript

```js
$filter('limitTo')(input, limit, begin)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| input | Array&#124;string&#124;number | <p>Source array, string or number to be limited.</p>  |
| limit | string&#124;number | <p>The length of the returned array or string. If the <code>limit</code> number is positive, <code>limit</code> number of items from the beginning of the source array/string are copied. If the number is negative, <code>limit</code> number  of items from the end of the source array/string are copied. The <code>limit</code> will be trimmed if it exceeds <code>array.length</code>. If <code>limit</code> is undefined, the input will be returned unchanged.</p>  |
| begin | (string&#124;number)= | <p>Index at which to begin limitation. As a negative index, <code>begin</code> indicates an offset from the end of <code>input</code>. Defaults to <code>0</code>.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Array&#124;string | <p>A new sub-array or substring of length <code>limit</code> or less if input array had less than <code>limit</code> elements.</p>  |




