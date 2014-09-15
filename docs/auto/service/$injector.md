



# $injector











`$injector` is used to retrieve object instances as defined by
(provider)[api/auto/service/$provide], instantiate types, invoke methods,
and load modules.

The following always holds true:

```js
  var $injector = angular.injector();
  expect($injector.get('$injector')).toBe($injector);
  expect($injector.invoke(function($injector) {
    return $injector;
  }).toBe($injector);
```

# Injection Function Annotation

JavaScript does not have annotations, and annotations are needed for dependency injection. The
following are all valid ways of annotating function with injection arguments and are equivalent.

```js
  // inferred (only works if code not minified/obfuscated)
  $injector.invoke(function(serviceA){});

  // annotated
  function explicit(serviceA) {};
  explicit.$inject = ['serviceA'];
  $injector.invoke(explicit);

  // inline
  $injector.invoke(['serviceA', function(serviceA){}]);
```

## Inference

In JavaScript calling `toString()` on a function returns the function definition. The definition
can then be parsed and the function arguments can be extracted. *NOTE:* This does not work with
minification, and obfuscation tools since these tools change the argument names.

## `$inject` Annotation
By adding an `$inject` property onto a function the injection parameters can be specified.

## Inline
As an array of injection names, where the last item in the array is the function to call.







  

## Usage
```js
$injector();
```








## Methods
### get
Return an instance of the service.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The name of the instance to retrieve.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The instance.</p>  |




### invoke
Invoke the method and supply the method arguments from the `$injector`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| fn | !Function | <p>The function to invoke. Function parameters are injected according to the ($inject Annotation)[guide/di] rules.</p>  |
| self | Object= | <p>The <code>this</code> for the invoked method.</p>  |
| locals | Object= | <p>Optional object. If preset then any argument names are read from this object first, before the <code>$injector</code> is consulted.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>the value returned by the invoked <code>fn</code> function.</p>  |




### has
Allows the user to query if the particular service exists.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| Name | string | <p>of the service to query.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>returns true if injector has given service.</p>  |




### instantiate
Create a new instance of JS type. The method takes a constructor function, invokes the new
operator, and supplies all of the arguments to the constructor function as specified by the
constructor annotation.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| Type | Function | <p>Annotated constructor function.</p>  |
| locals | Object= | <p>Optional object. If preset then any argument names are read from this object first, before the <code>$injector</code> is consulted.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>new instance of <code>Type</code>.</p>  |




### annotate
Returns an array of service names which the function is requesting for injection. This API is
used by the injector to determine which services need to be injected into the function when the
function is invoked. There are three ways in which the function can be annotated with the needed
dependencies.

# Argument names

The simplest form is to extract the dependencies from the arguments of the function. This is done
by converting the function into a string using `toString()` method and extracting the argument
names.
```js
  // Given
  function MyController($scope, $route) {
    // ...
  }

  // Then
  expect(injector.annotate(MyController)).toEqual(['$scope', '$route']);
```

This method does not work with code minification / obfuscation. For this reason the following
annotation strategies are supported.

# The `$inject` property

If a function has an `$inject` property and its value is an array of strings, then the strings
represent names of services to be injected into the function.
```js
  // Given
  var MyController = function(obfuscatedScope, obfuscatedRoute) {
    // ...
  }
  // Define function dependencies
  MyController['$inject'] = ['$scope', '$route'];

  // Then
  expect(injector.annotate(MyController)).toEqual(['$scope', '$route']);
```

# The array notation

It is often desirable to inline Injected functions and that's when setting the `$inject` property
is very inconvenient. In these situations using the array notation to specify the dependencies in
a way that survives minification is a better choice:

```js
  // We wish to write this (not minification / obfuscation safe)
  injector.invoke(function($compile, $rootScope) {
    // ...
  });

  // We are forced to write break inlining
  var tmpFn = function(obfuscatedCompile, obfuscatedRootScope) {
    // ...
  };
  tmpFn.$inject = ['$compile', '$rootScope'];
  injector.invoke(tmpFn);

  // To better support inline function the inline annotation is supported
  injector.invoke(['$compile', '$rootScope', function(obfCompile, obfRootScope) {
    // ...
  }]);

  // Therefore
  expect(injector.annotate(
     ['$compile', '$rootScope', function(obfus_$compile, obfus_$rootScope) {}])
   ).toEqual(['$compile', '$rootScope']);
```


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| fn | Function&#124;Array.<string&#124;Function> | <p>Function for which dependent service names need to be retrieved as described above.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array.<string> | <p>The names of the services which the function requires.</p>  |










