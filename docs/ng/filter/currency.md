



# currency








Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default
symbol for current locale is used.









 ## Usage
### In HTML Template Binding


```html
{{ currency_expression | currency : amount : symbol : fractionSize}}
```

### In JavaScript

```js
$filter('currency')(amount, symbol, fractionSize)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| amount | number | <p>Input to filter.</p>  |
| symbol | string= | <p>Currency symbol or identifier to be displayed.</p>  |
| fractionSize | number= | <p>Number of decimal places to round the amount to, defaults to default max fraction size for current locale</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string | <p>Formatted number.</p>  |




