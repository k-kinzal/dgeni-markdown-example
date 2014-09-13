

[View Source](http://github.com///tree/master/#L4833)



# $cacheFactory.Cache



* type in module []()






A cache object used to store and retrieve data, primarily used by
{@link $http $http} and the {@link ng.directive:script script} directive to cache
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
### method:put
Inserts a named entry into the {@link $cacheFactory.Cache Cache} object to be
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




### method:get
Retrieves named data stored in the {@link $cacheFactory.Cache Cache} object.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>the key of the data to be retrieved</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>the value stored.</p>  |




### method:remove
Removes an entry from the {@link $cacheFactory.Cache Cache} object.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>the key of the entry to be removed</p>  |






### method:removeAll
Clears the cache object of any entries.








### method:destroy
Destroys the {@link $cacheFactory.Cache Cache} object entirely,
removing it from the {@link $cacheFactory $cacheFactory} set.








### method:info
Retrieve information regarding a particular {@link $cacheFactory.Cache Cache}.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| object | <p>an object with the following properties: <ul> <li><strong>id</strong>: the id of the cache instance</li> <li><strong>size</strong>: the number of entries kept in the cache instance</li> <li><strong>...</strong>: any additional properties from the options object when creating the cache.</li> </ul></p>  |










