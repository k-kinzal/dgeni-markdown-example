



# number








Formats a number as text.

If the input is not a number an empty string is returned.









 ## Usage
### In HTML Template Binding


```html
{{ number_expression | number : number : fractionSize}}
```

### In JavaScript

```js
$filter('number')(number, fractionSize)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| number | number&#124;string | <p>Number to format.</p>  |
| fractionSize | (number&#124;string)= | <p>Number of decimal places to round the number to. If this is not provided then the fraction size is computed from the current locale&#39;s number formatting pattern. In the case of the default locale, it will be 3.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string | <p>Number rounded to decimalPlaces and places a “,” after each third digit.</p>  |




