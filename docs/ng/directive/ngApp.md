



# ngApp








Use this directive to **auto-bootstrap** an AngularJS application. The `ngApp` directive
designates the **root element** of the application and is typically placed near the root element
of the page - e.g. on the `<body>` or `<html>` tags.

Only one AngularJS application can be auto-bootstrapped per HTML document. The first `ngApp`
found in the document will be used to define the root element to auto-bootstrap as an
application. To run multiple applications in an HTML document you must manually bootstrap them using
(<code>angular.bootstrap</code>)[api/ng/function/angular.bootstrap] instead. AngularJS applications cannot be nested within each other.

You can specify an **AngularJS module** to be used as the root module for the application.  This
module will be loaded into the (<code>$injector</code>)[api/auto/service/$injector] when the application is bootstrapped. It
should contain the application code needed or have dependencies on other modules that will
contain the code. See (<code>angular.module</code>)[api/ng/function/angular.module] for more information.

In the example below if the `ngApp` directive were not placed on the `html` element then the
document would not be compiled, the `AppController` would not be instantiated and the `{{ a+b }}`
would not be resolved to `3`.

`ngApp` is the easiest, and most common way to bootstrap an application.

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

Using `ngStrictDi`, you would see something like this:

 <example ng-app-included="true">
   <file name="index.html">
   <div ng-app="ngAppStrictDemo" ng-strict-di>
       <div ng-controller="GoodController1">
           I can add: {{a}} + {{b}} =  {{ a+b }}

           <p>This renders because the controller does not fail to
              instantiate, by using explicit annotation style (see
              script.js for details)
           </p>
       </div>

       <div ng-controller="GoodController2">
           Name: <input ng-model="name"><br />
           Hello, {{name}}!

           <p>This renders because the controller does not fail to
              instantiate, by using explicit annotation style
              (see script.js for details)
           </p>
       </div>

       <div ng-controller="BadController">
           I can add: {{a}} + {{b}} =  {{ a+b }}

           <p>The controller could not be instantiated, due to relying
              on automatic function annotations (which are disabled in
              strict mode). As such, the content of this section is not
              interpolated, and there should be an error in your web console.
           </p>
       </div>
   </div>
   </file>
   <file name="script.js">
   angular.module('ngAppStrictDemo', [])
     // BadController will fail to instantiate, due to relying on automatic function annotation,
     // rather than an explicit annotation
     .controller('BadController', function($scope) {
       $scope.a = 1;
       $scope.b = 2;
     })
     // Unlike BadController, GoodController1 and GoodController2 will not fail to be instantiated,
     // due to using explicit annotations using the array style and $inject property, respectively.
     .controller('GoodController1', ['$scope', function($scope) {
       $scope.a = 1;
       $scope.b = 2;
     }])
     .controller('GoodController2', GoodController2);
     function GoodController2($scope) {
       $scope.name = "World";
     }
     GoodController2.$inject = ['$scope'];
   </file>
   <file name="style.css">
   div[ng-controller] {
       margin-bottom: 1em;
       -webkit-border-radius: 4px;
       border-radius: 4px;
       border: 1px solid;
       padding: .5em;
   }
   div[ng-controller^=Good] {
       border-color: #d6e9c6;
       background-color: #dff0d8;
       color: #3c763d;
   }
   div[ng-controller^=Bad] {
       border-color: #ebccd1;
       background-color: #f2dede;
       color: #a94442;
       margin-bottom: 0;
   }
   </file>
 </example>








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-app=""
      [ng-strict-di=""]>
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngApp | angular.Module | <p>an optional application (module)[api/ng/function/angular.module] name to load.</p>  |
| ngStrictDi | boolean= | <p>if this attribute is present on the app element, the injector will be created in &quot;strict-di&quot; mode. This means that the application will fail to invoke functions which do not use explicit function annotation (and are thus unsuitable for minification), as described in (the Dependency Injection guide)[guide/di], and useful debugging info will assist in tracking down the root of these bugs.</p>  |




