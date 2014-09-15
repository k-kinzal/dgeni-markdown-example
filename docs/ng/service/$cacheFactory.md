



# $cacheFactory











Factory that constructs (Cache)[api/ng/type/$cacheFactory.Cache] objects and gives access to
them.

```js

 var cache = $cacheFactory('cacheId');
 expect($cacheFactory.get('cacheId')).toBe(cache);
 expect($cacheFactory.get('noSuchCacheId')).not.toBeDefined();

 cache.put("key", "value");
 cache.put("another key", "another value");

 // We've specified no options on creation
 expect(cache.info()).toEqual({id: 'cacheId', size: 2});

```







  

## Usage
```js
$cacheFactory(cacheId, [options]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| cacheId | string | <p>Name or id of the newly created cache.</p>  |
| options | object= | <p>Options object that specifies the cache behavior. Properties:</p> <ul> <li><code>{number=}</code> <code>capacity</code> — turns the cache into LRU cache.</li> </ul>  |

### Returns

| Type | Description |
| :--: | :--: |
| object | <p>Newly created cache object with the following set of methods:</p> <ul> <li><code>{object}</code> <code>info()</code> — Returns id, size, and options of cache.</li> <li><code>{{*}}</code> <code>put({string} key, {*} value)</code> — Puts a new key-value pair into the cache and returns it.</li> <li><code>{{*}}</code> <code>get({string} key)</code> — Returns cached value for <code>key</code> or undefined for cache miss.</li> <li><code>{void}</code> <code>remove({string} key)</code> — Removes a key-value pair from the cache.</li> <li><code>{void}</code> <code>removeAll()</code> — Removes all cached values.</li> <li><code>{void}</code> <code>destroy()</code> — Removes references to this cache from $cacheFactory.</li> </ul>  |


## Methods
### info
Get information about all the caches that have been created






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <ul> <li>key-value map of <code>cacheId</code> to the result of calling <code>cache#info</code></li> </ul>  |




### get
Get access to a cache object by the `cacheId` used when it was created.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| cacheId | string | <p>Name or id of a cache to access.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| object | <p>Cache object identified by the cacheId or undefined if no such cache.</p>  |










