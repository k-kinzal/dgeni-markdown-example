

[View Source](http://github.com///tree/master/#L3198)



# angular.injector



* function in module [ng](api/ng)






Creates an injector function that can be used for retrieving services as well as for
dependency injection (see {@link guide/di dependency injection}).







  

## Usage

```jsangular.injector();)
```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| modules | Array.<string&#124;Function> | <p>A list of module functions or their aliases. See {@link angular.module}. The <code>ng</code> module must be explicitly added.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| function() | <p>Injector function. See {@link auto.$injector $injector}.</p>  |








