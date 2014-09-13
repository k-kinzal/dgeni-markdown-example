

[View Source](http://github.com///tree/master/#L14479)



# $filterProvider






* provider in module []()






Filters are just functions which transform input to an output. However filters need to be
Dependency Injected. To achieve this a filter definition consists of a factory function which is
annotated with dependencies and is responsible for creating a filter function.

```js
  // Filter registration
  function MyModule($provide, $filterProvider) {
    // create a service to demonstrate injection (not always needed)
    $provide.value('greet', function(name){
      return 'Hello ' + name + '!';
    });

    // register a filter factory which uses the
    // greet service to demonstrate DI.
    $filterProvider.register('greet', function(greet){
      // return the filter function which uses the greet service
      // to generate salutation
      return function(text) {
        // filters need to be forgiving so check input validity
        return text && greet(text) || text;
      };
    });
  }
```

The filter function is registered with the `$injector` under the filter name suffix with
`Filter`.

```js
  it('should be the same instance', inject(
    function($filterProvider) {
      $filterProvider.register('reverse', function(){
        return ...;
      });
    },
    function($filter, reverseFilter) {
      expect($filter('reverse')).toBe(reverseFilter);
    });
```


For more information about how angular filters work, and how to create your own filters, see
{@link guide/filter Filters} in the Angular Developer Guide.







  




## Methods
### method:register
Register filter factory function.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | String | <p>Name of the filter.</p>  |
| fn | Function | <p>The filter factory function which is injectable.</p>  |












