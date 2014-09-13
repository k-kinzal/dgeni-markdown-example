

[View Source](http://github.com///tree/master/#L15273)



# json



* filter in module []()






Allows you to convert a JavaScript object into JSON string.

  This filter is mostly useful for debugging. When using the double curly {{value}} notation
  the binding is automatically converted to JSON.








## Usage
### In HTML Template Binding

```
{{ json_expression | json : object}}
```


### In JavaScript
```$filter('json')(object)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| object | * | <p>Any JavaScript object (including arrays and primitive types) to filter.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string | <p>JSON string.</p>  |




