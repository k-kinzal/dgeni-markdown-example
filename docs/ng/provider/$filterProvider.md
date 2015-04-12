



# $filterProvider


* [$filter](api/ng/service/$filter)








Filters are just functions which transform input to an output. However filters need to be
Dependency Injected. To achieve this a filter definition consists of a factory function which is
annotated with dependencies and is responsible for creating a filter function.

<div class="alert alert-warning">
**Note:** Filter names must be valid angular expression identifiers, such as `uppercase` or `orderBy`.
Names with special characters, such as hyphens and dots, are not allowed. If you wish to namespace
your filters, then you can use capitalization (`myappSubsectionFilterx`) or underscores
(`myapp_subsection_filterx`).
</div>

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
(Filters)[guide/filter] in the Angular Developer Guide.







  




## Methods
### register



#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string&#124;Object | <p>Name of the filter function, or an object map of filters where the keys are the filter names and the values are the filter factories.</p> <div class="alert alert-warning"> <strong>Note:</strong> Filter names must be valid angular expression identifiers, such as <code>uppercase</code> or <code>orderBy</code>. Names with special characters, such as hyphens and dots, are not allowed. If you wish to namespace your filters, then you can use capitalization (<code>myappSubsectionFilterx</code>) or underscores (<code>myapp_subsection_filterx</code>). </div> |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Registered filter instance, or if a map of filters was provided then a map of the registered filter instances.</p>  |










