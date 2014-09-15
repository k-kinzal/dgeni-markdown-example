



# $templateRequest











The `$templateRequest` service downloads the provided template using `$http` and, upon success,
stores the contents inside of `$templateCache`. If the HTTP request fails or the response data
of the HTTP request is empty then a `$compile` error will be thrown (the exception can be thwarted
by setting the 2nd parameter of the function to true).







  

## Usage
```js
$templateRequest(tpl, [ignoreRequestError]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| tpl | string | <p>The HTTP request template URL</p>  |
| ignoreRequestError | boolean= | <p>Whether or not to ignore the exception when the request fails or the template is empty</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Promise | <p>the HTTP Promise for the given.</p>  |





## Properties
### totalPendingRequests

| Type | Description |
| :--: | :--: |
| number | <p>total amount of pending template requests being downloaded.</p>  |
  





