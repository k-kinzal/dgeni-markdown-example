



# angular.injector








Creates an injector object that can be used for retrieving services as well as for
dependency injection (see (dependency injection)[guide/di]).







  

## Usage
```js
angular.injector(modules, [strictDi]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| modules | Array.<string&#124;Function> | <p>A list of module functions or their aliases. See (<code>angular.module</code>)[api/ng/function/angular.module]. The <code>ng</code> module must be explicitly added.</p>  |
| strictDi | boolean= | <p>Whether the injector should be in strict mode, which disallows argument name annotation inference.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| injector | <p>Injector object. See ($injector)[api/auto/service/$injector].</p>  |








