



# angular.toJson








Serializes input into a JSON-formatted string. Properties with leading $ characters will be
stripped since angular uses this notation internally.







  

## Usage
```js
angular.toJson(obj, [pretty]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| obj | Object&#124;Array&#124;Date&#124;string&#124;number | <p>Input to be serialized into JSON.</p>  |
| pretty | boolean= | <p>If set to true, the JSON output will contain newlines and whitespace.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string&#124;undefined | <p>JSON-ified string representing <code>obj</code>.</p>  |








