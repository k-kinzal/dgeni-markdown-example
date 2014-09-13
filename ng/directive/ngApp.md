



# ngApp








Use this directive to **auto-bootstrap** an AngularJS application. The `ngApp` directive
designates the **root element** of the application and is typically placed near the root element
of the page - e.g. on the `<body>` or `<html>` tags.

Only one AngularJS application can be auto-bootstrapped per HTML document. The first `ngApp`
found in the document will be used to define the root element to auto-bootstrap as an
application. To run multiple applications in an HTML document you must manually bootstrap them using
(<code>angular.bootstrap</code>)[api/ng/function/angular.bootstrap] instead. AngularJS applications cannot be nested within each other.

You can specify an **AngularJS module** to be used as the root module for the application.  This
module will be loaded into the auto.$injector when the application is bootstrapped and
should contain the application code needed or have dependencies on other modules that will
contain the code. See (<code>angular.module</code>)[api/ng/function/angular.module] for more information.

In the example below if the `ngApp` directive were not placed on the `html` element then the
document would not be compiled, the `AppController` would not be instantiated and the `{{ a+b }}`
would not be resolved to `3`.

`ngApp` is the easiest, and most common, way to bootstrap an application.

 <example module="ngAppDemo">
   <file name="index.html">
   <div ng-controller="ngAppDemoController">
     I can add: {{a}} + {{b}} =  {{ a+b }}
   </div>
   </file>
   <file name="script.js">
   angular.module('ngAppDemo', []).controller('ngAppDemoController', function($scope) {
     $scope.a = 1;
     $scope.b = 2;
   });
   </file>
 </example>








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-app="">
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngApp | angular.Module | <p>an optional application (module)[api/ng/function/angular.module] name to load.</p>  |




