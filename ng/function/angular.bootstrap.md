

[View Source](http://github.com///tree/master/#L1372)



# angular.bootstrap



* function in module [ng](api/ng)






Use this function to manually start up angular application.

See: {@link guide/bootstrap Bootstrap}

Note that ngScenario-based end-to-end tests cannot use this function to bootstrap manually.
They must use {@link ng.directive:ngApp ngApp}.

Angular will detect if it has been loaded into the browser more than once and only allow the
first loaded script to be bootstrapped and will report a warning to the browser console for
each of the subsequent scripts. This prevents strange results in applications, where otherwise
multiple instances of Angular try to work on the DOM.

<example name="multi-bootstrap" module="multi-bootstrap">
<file name="index.html">
<script src="../../../angular.js"></script>
<div ng-controller="BrokenTable">
  <table>
  <tr>
    <th ng-repeat="heading in headings">{{heading}}</th>
  </tr>
  <tr ng-repeat="filling in fillings">
    <td ng-repeat="fill in filling">{{fill}}</td>
  </tr>
</table>
</div>
</file>
<file name="controller.js">
var app = angular.module('multi-bootstrap', [])

.controller('BrokenTable', function($scope) {
    $scope.headings = ['One', 'Two', 'Three'];
    $scope.fillings = [[1, 2, 3], ['A', 'B', 'C'], [7, 8, 9]];
});
</file>
<file name="protractor.js" type="protractor">
it('should only insert one table cell for each item in $scope.fillings', function() {
 expect(element.all(by.css('td')).count())
     .toBe(9);
});
</file>
</example>







  

## Usage

```jsangular.bootstrap(, []);)
```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>DOM element which is the root of angular application.</p>  |
| modules | Array<String&#124;Function&#124;Array>= | <p>an array of modules to load into the application. Each item in the array should be the name of a predefined module or a (DI annotated) function that will be invoked by the injector as a run block. See: {@link angular.module modules}</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| auto.$injector | <p>Returns the newly created injector for this app.</p>  |








