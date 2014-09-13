



# angular.injector








Creates an injector function that can be used for retrieving services as well as for
dependency injection (see (dependency injection)[guide/di]).







  

## Usage
```js
angular.injector(modules);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| modules | Array.<string&#124;Function> | <p>A list of module functions or their aliases. See (<code>angular.module</code>)[api/ng/function/angular.module]. The <code>ng</code> module must be explicitly added.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| function() | <p>Injector function. See $injector.</p>  |








