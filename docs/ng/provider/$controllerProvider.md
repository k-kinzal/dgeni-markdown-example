



# $controllerProvider


* [$controller](api/ng/service/$controller)








The ($controller service)[api/ng/service/$controller] is used by Angular to create new
controllers.

This provider allows controller registration via the
(register)[api/ng/provider/$controllerProvider#register] method.







  




## Methods
### register



#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string&#124;Object | <p>Controller name, or an object map of controllers where the keys are the names and the values are the constructors.</p>  |
| constructor | Function&#124;Array | <p>Controller constructor fn (optionally decorated with DI annotations in the array notation).</p>  |






### allowGlobals
If called, allows `$controller` to find controller constructors on `window`














