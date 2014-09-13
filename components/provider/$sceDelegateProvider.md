

[View Source](http://github.com///tree/master/#L13177)



# $sceDelegateProvider






* provider in module []()






The `$sceDelegateProvider` provider allows developers to configure the {@link ng.$sceDelegate
$sceDelegate} service.  This allows one to get/set the whitelists and blacklists used to ensure
that the URLs used for sourcing Angular templates are safe.  Refer {@link
ng.$sceDelegateProvider#resourceUrlWhitelist $sceDelegateProvider.resourceUrlWhitelist} and
{@link ng.$sceDelegateProvider#resourceUrlBlacklist $sceDelegateProvider.resourceUrlBlacklist}

For the general details about this service in Angular, read the main page for {@link ng.$sce
Strict Contextual Escaping (SCE)}.

**Example**:  Consider the following case. <a name="example"></a>

- your app is hosted at url `http://myapp.example.com/`
- but some of your templates are hosted on other domains you control such as
  `http://srv01.assets.example.com/`,  `http://srv02.assets.example.com/`, etc.
- and you have an open redirect at `http://myapp.example.com/clickThru?...`.

Here is what a secure configuration for this scenario might look like:

```
 angular.module('myApp', []).config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     // Allow same origin resource loads.
     'self',
     // Allow loading from our assets domain.  Notice the difference between * and **.
     'http://srv*.assets.example.com/**'
   ]);

   // The blacklist overrides the whitelist so the open redirect here is blocked.
   $sceDelegateProvider.resourceUrlBlacklist([
     'http://myapp.example.com/clickThru**'
   ]);
 });
```







  




## Methods
### method:resourceUrlWhitelist
Sets/Gets the whitelist of trusted resource URLs.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| whitelist | Array= | <p>When provided, replaces the resourceUrlWhitelist with the value provided.  This must be an array or null.  A snapshot of this array is used so further changes to the array are ignored.</p> <pre><code>Follow {@link ng.$sce#resourceUrlPatternItem this link} for a description of the items allowed in this array. Note: **an empty whitelist array will block all URLs**!</code></pre>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array | <p>the currently set whitelist array.</p> <p>The <strong>default value</strong> when no whitelist has been explicitly set is <code>[&#39;self&#39;]</code> allowing only same origin resource requests.</p>  |




### method:resourceUrlBlacklist
Sets/Gets the blacklist of trusted resource URLs.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| blacklist | Array= | <p>When provided, replaces the resourceUrlBlacklist with the value provided.  This must be an array or null.  A snapshot of this array is used so further changes to the array are ignored.</p> <pre><code>Follow {@link ng.$sce#resourceUrlPatternItem this link} for a description of the items allowed in this array. The typical usage for the blacklist is to **block [open redirects](http://cwe.mitre.org/data/definitions/601.html)** served by your domain as these would otherwise be trusted but actually return content from the redirected domain. Finally, **the blacklist overrides the whitelist** and has the final say.</code></pre>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array | <p>the currently set blacklist array.</p> <p>The <strong>default value</strong> when no whitelist has been explicitly set is the empty array (i.e. there is no blacklist.)</p>  |










