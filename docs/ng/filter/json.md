



# json








Allows you to convert a JavaScript object into JSON string.

  This filter is mostly useful for debugging. When using the double curly {{value}} notation
  the binding is automatically converted to JSON.









 ## Usage
### In HTML Template Binding


```html
{{ json_expression | json : object : spacing}}
```

### In JavaScript

```js
$filter('json')(object, spacing)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| object | * | <p>Any JavaScript object (including arrays and primitive types) to filter.</p>  |
| spacing | number= | <p>The number of spaces to use per indentation, defaults to 2.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string | <p>JSON string.</p>  |




