



# $cookieStore











Provides a key-value (string-object) storage, that is backed by session cookies.
Objects put or retrieved from this storage are automatically serialized or
deserialized by angular's toJson/fromJson.

Requires the (`ngCookies`)[api/ngCookies] module to be installed.







## Dependencies

* $cookies



  




## Methods
### get
Returns the value of given cookie key


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>Id to use for lookup.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Deserialized cookie value.</p>  |




### put
Sets a value for given cookie key


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>Id for the <code>value</code>.</p>  |
| value | Object | <p>Value to be stored.</p>  |






### remove
Remove given cookie


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>Id of the key-value pair to delete.</p>  |












