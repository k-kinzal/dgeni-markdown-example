

[View Source](http://github.com///tree/master/#L7238)



# $controller






* service in module []()






`$controller` service is responsible for instantiating controllers.

It's just a simple call to {@link auto.$injector $injector}, but extracted into
a service, so that one can override this service with [BC version](https://gist.github.com/1649788).







## Dependencies

* {@link $injector  }



  

## Usage

```js$controller(, );)
```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| constructor | Function&#124;string | <p>If called with a function then it&#39;s considered to be the controller constructor function. Otherwise it&#39;s considered to be a string which is used to retrieve the controller constructor using the following steps:</p> <ul> <li>check if a controller with given name is registered via <code>$controllerProvider</code></li> <li>check if evaluating the string on the current scope returns a constructor</li> <li>check <code>window[constructor]</code> on the global <code>window</code> object</li> </ul>  |
| locals | Object | <p>Injection locals for Controller.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Object | <p>Instance of given controller.</p>  |








