



# angular.bootstrap








Use this function to manually start up angular application.

See: (Bootstrap)[guide/bootstrap]

Note that Protractor based end-to-end tests cannot use this function to bootstrap manually.
They must use (ngApp)[api/ng/directive/ngApp].

Angular will detect if it has been loaded into the browser more than once and only allow the
first loaded script to be bootstrapped and will report a warning to the browser console for
each of the subsequent scripts. This prevents strange results in applications, where otherwise
multiple instances of Angular try to work on the DOM.

```html
<!doctype html>
<html>
<body>
<div ng-controller="WelcomeController">
  {{greeting}}
</div>

<script src="angular.js"></script>
<script>
  var app = angular.module('demo', [])
  .controller('WelcomeController', function($scope) {
      $scope.greeting = 'Welcome!';
  });
  angular.bootstrap(document, ['demo']);
</script>
</body>
</html>
```







  

## Usage
```js
angular.bootstrap(element, [modules], [config]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>DOM element which is the root of angular application.</p>  |
| modules | Array<String&#124;Function&#124;Array>= | <p>an array of modules to load into the application. Each item in the array should be the name of a predefined module or a (DI annotated) function that will be invoked by the injector as a run block. See: (modules)[api/ng/function/angular.module]</p>  |
| config | Object= | <p>an object for defining configuration options for the application. The following keys are supported:</p> <pre><code>- `strictDi`: disable automatic function annotation for the application. This is meant to assist in finding bugs which break minified code.</code></pre>  |

### Returns

| Type | Description |
| :--: | :--: |
| auto.$injector | <p>Returns the newly created injector for this app.</p>  |








