



# $cookies


* [$cookiesProvider](api/ngCookies/provider/$cookiesProvider)








Provides read/write access to browser's cookies.

BREAKING CHANGE: `$cookies` no longer exposes properties that represent the
current browser cookie values. Now you must use the get/put/remove/etc. methods
as described below.

Requires the (`ngCookies`)[api/ngCookies] module to be installed.







  




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
| string | <p>Raw cookie value.</p>  |




### getObject
Returns the deserialized value of given cookie key


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>Id to use for lookup.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Deserialized cookie value.</p>  |




### getAll
Returns a key value object with all the cookies






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>All cookies</p>  |




### put
Sets a value for given cookie key


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>Id for the <code>value</code>.</p>  |
| value | string | <p>Raw value to be stored.</p>  |
| options | Object= | <p>Options object. See ($cookiesProvider.defaults)[api/ngCookies/provider/$cookiesProvider#defaults]</p>  |






### putObject
Serializes and sets a value for given cookie key


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>Id for the <code>value</code>.</p>  |
| value | Object | <p>Value to be stored.</p>  |
| options | Object= | <p>Options object. See ($cookiesProvider.defaults)[api/ngCookies/provider/$cookiesProvider#defaults]</p>  |






### remove
Remove given cookie


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>Id of the key-value pair to delete.</p>  |
| options | Object= | <p>Options object. See ($cookiesProvider.defaults)[api/ngCookies/provider/$cookiesProvider#defaults]</p>  |












