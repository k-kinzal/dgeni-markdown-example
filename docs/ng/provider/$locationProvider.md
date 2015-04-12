



# $locationProvider


* [$location](api/ng/service/$location)








Use the `$locationProvider` to configure how the application deep linking paths are stored.







  




## Methods
### hashPrefix



#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| prefix | string= | <p>Prefix for hash part (containing path and search)</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>current value if used as getter or itself (chaining) if used as setter</p>  |




### html5Mode



#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| mode | (boolean&#124;Object)= | <p>If boolean, sets <code>html5Mode.enabled</code> to value. If object, sets <code>enabled</code>, <code>requireBase</code> and <code>rewriteLinks</code> to respective values. Supported properties:</p> <ul> <li><strong>enabled</strong> – <code>{boolean}</code> – (default: false) If true, will rely on <code>history.pushState</code> to change urls where supported. Will fall back to hash-prefixed paths in browsers that do not support <code>pushState</code>.</li> <li><strong>requireBase</strong> - <code>{boolean}</code> - (default: <code>true</code>) When html5Mode is enabled, specifies whether or not a <base> tag is required to be present. If <code>enabled</code> and <code>requireBase</code> are true, and a base tag is not present, an error will be thrown when <code>$location</code> is injected. See the ($location guide for more information)[guide/$location]</li> <li><strong>rewriteLinks</strong> - <code>{boolean}</code> - (default: <code>true</code>) When html5Mode is enabled, enables/disables url rewriting for relative links.</li> </ul>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>html5Mode object if used as getter or itself (chaining) if used as setter</p>  |










