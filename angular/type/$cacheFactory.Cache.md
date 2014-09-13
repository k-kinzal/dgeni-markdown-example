



# $cacheFactory.Cache








A cache object used to store and retrieve data, primarily used by
($http)[api/angular/service/$http] and the script directive to cache
templates and other data.

```js
 angular.module('superCache')
   .factory('superCache', ['$cacheFactory', function($cacheFactory) {
     return $cacheFactory('super-cache');
   }]);
```

Example test:

```js
 it('should behave like a cache', inject(function(superCache) {
   superCache.put('key', 'value');
   superCache.put('another key', 'another value');

   expect(superCache.info()).toEqual({
     id: 'super-cache',
     size: 2
   });

   superCache.remove('another key');
   expect(superCache.get('another key')).toBeUndefined();

   superCache.removeAll();
   expect(superCache.info()).toEqual({
     id: 'super-cache',
     size: 0
   });
 }));
```







  




## Methods
### put
Inserts a named entry into the (Cache)[api/angular/type/$cacheFactory.Cache] object to be
retrieved later, and incrementing the size of the cache if the key was not already
present in the cache. If behaving like an LRU cache, it will also remove stale
entries from the set.

It will not insert undefined values into the cache.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>the key under which the cached data is stored.</p>  |
| value | * | <p>the value to store alongside the key. If it is undefined, the key will not be stored.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>the value stored.</p>  |




### get
Retrieves named data stored in the (Cache)[api/angular/type/$cacheFactory.Cache] object.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>the key of the data to be retrieved</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>the value stored.</p>  |




### remove
Removes an entry from the (Cache)[api/angular/type/$cacheFactory.Cache] object.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>the key of the entry to be removed</p>  |






### removeAll
Clears the cache object of any entries.








### destroy
Destroys the (Cache)[api/angular/type/$cacheFactory.Cache] object entirely,
removing it from the ($cacheFactory)[api/angular/service/$cacheFactory] set.








### info
Retrieve information regarding a particular (Cache)[api/angular/type/$cacheFactory.Cache].






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| object | <p>an object with the following properties: <ul> <li><strong>id</strong>: the id of the cache instance</li> <li><strong>size</strong>: the number of entries kept in the cache instance</li> <li><strong>...</strong>: any additional properties from the options object when creating the cache.</li> </ul></p>  |










