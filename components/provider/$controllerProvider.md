

[View Source](http://github.com///tree/master/#L7203)



# $controllerProvider






* provider in module []()






The {@link ng.$controller $controller service} is used by Angular to create new
controllers.

This provider allows controller registration via the
{@link ng.$controllerProvider#register register} method.







  




## Methods
### method:register



#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string&#124;Object | <p>Controller name, or an object map of controllers where the keys are the names and the values are the constructors.</p>  |
| constructor | Function&#124;Array | <p>Controller constructor fn (optionally decorated with DI annotations in the array notation).</p>  |






### method:register



#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string&#124;Object | <p>Name of the filter function, or an object map of filters where the keys are the filter names and the values are the filter factories.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>Registered filter instance, or if a map of filters was provided then a map of the registered filter instances.</p>  |










