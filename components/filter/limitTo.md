

[View Source](http://github.com///tree/master/#L15329)



# limitTo



* filter in module []()






Creates a new array or string containing only a specified number of elements. The elements
are taken from either the beginning or the end of the source array or string, as specified by
the value and sign (positive or negative) of `limit`.








## Usage
### In HTML Template Binding

```
{{ limitTo_expression | limitTo : input : limit}}
```


### In JavaScript
```$filter('limitTo')(input, limit)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| input | Array&#124;string | <p>Source array or string to be limited.</p>  |
| limit | string&#124;number | <p>The length of the returned array or string. If the <code>limit</code> number is positive, <code>limit</code> number of items from the beginning of the source array/string are copied. If the number is negative, <code>limit</code> number  of items from the end of the source array/string are copied. The <code>limit</code> will be trimmed if it exceeds <code>array.length</code></p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Array&#124;string | <p>A new sub-array or substring of length <code>limit</code> or less if input array had less than <code>limit</code> elements.</p>  |




