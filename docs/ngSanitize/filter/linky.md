



# linky








Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and
plain email address links.

Requires the (`ngSanitize`)[api/ngSanitize] module to be installed.









 ## Usage
### In HTML Template Binding

```
<span ng-bind-html="linky_expression | linky"></span>
```

### In JavaScript

```js
$filter('linky')(text, target)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| text | string | <p>Input text.</p>  |
| target | string | <p>Window (_blank&#124;_self&#124;_parent&#124;_top) or named frame to open links in.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string | <p>Html-linkified text.</p>  |




