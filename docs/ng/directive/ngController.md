



# ngController








The `ngController` directive attaches a controller class to the view. This is a key aspect of how angular
supports the principles behind the Model-View-Controller design pattern.

MVC components in angular:

* Model — Models are the properties of a scope; scopes are attached to the DOM where scope properties
  are accessed through bindings.
* View — The template (HTML with data bindings) that is rendered into the View.
* Controller — The `ngController` directive specifies a Controller class; the class contains business
  logic behind the application to decorate the scope with functions and values

Note that you can also attach controllers to the DOM by declaring it in a route definition
via the ($route)[api/ngRoute/service/$route] service. A common mistake is to declare the controller
again using `ng-controller` in the template itself.  This will cause the controller to be attached
and executed twice.








## Directive Info

* This directive creates new scope.
* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-controller="">
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngController | expression | <p>Name of a constructor function registered with the current ($controllerProvider)[api/ng/provider/$controllerProvider] or an (expression)[guide/expression] that on the current scope evaluates to a constructor function.</p> <p>The controller instance can be published into a scope property by specifying <code>ng-controller=&quot;as propertyName&quot;</code>.</p> <p>If the current <code>$controllerProvider</code> is configured to use globals (via (<code>$controllerProvider.allowGlobals()</code>)[api/ng/provider/$controllerProvider#allowGlobals]), this may also be the name of a globally accessible constructor function (not recommended).</p>  |




