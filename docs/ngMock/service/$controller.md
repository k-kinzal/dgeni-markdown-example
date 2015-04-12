



# $controller











A decorator for (<code>$controller</code>)[api/ng/service/$controller] with additional `bindings` parameter, useful when testing
controllers of directives that use (`bindToController`)[api/ng/service/$compile#-bindtocontroller-].


## Example

```js

// Directive definition ...

myMod.directive('myDirective', {
  controller: 'MyDirectiveController',
  bindToController: {
    name: '@'
  }
});


// Controller definition ...

myMod.controller('MyDirectiveController', ['log', function($log) {
  $log.info(this.name);
})];


// In a test ...

describe('myDirectiveController', function() {
  it('should write the bound name to the log', inject(function($controller, $log) {
    var ctrl = $controller('MyDirective', { /* no locals &#42;/ }, { name: 'Clark Kent' });
    expect(ctrl.name).toEqual('Clark Kent');
    expect($log.info.logs).toEqual(['Clark Kent']);
  });
});

```







  

## Usage
```js
$controller(constructor, locals, [bindings]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| constructor | Function&#124;string | <p>If called with a function then it&#39;s considered to be the controller constructor function. Otherwise it&#39;s considered to be a string which is used to retrieve the controller constructor using the following steps:</p> <ul> <li>check if a controller with given name is registered via <code>$controllerProvider</code></li> <li>check if evaluating the string on the current scope returns a constructor</li> <li><p>if $controllerProvider#allowGlobals, check <code>window[constructor]</code> on the global <code>window</code> object (not recommended)</p> <p>The string can use the <code>controller as property</code> syntax, where the controller instance is published as the specified property on the <code>scope</code>; the <code>scope</code> must be injected into <code>locals</code> param for this to work correctly.</p> </li> </ul>  |
| locals | Object | <p>Injection locals for Controller.</p>  |
| bindings | Object= | <p>Properties to add to the controller before invoking the constructor. This is used to simulate the <code>bindToController</code> feature and simplify certain kinds of tests.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Object | <p>Instance of given controller.</p>  |








