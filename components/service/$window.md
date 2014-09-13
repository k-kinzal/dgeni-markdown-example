

[View Source](http://github.com///tree/master/#L14423)



# $window






* service in module []()






A reference to the browser's `window` object. While `window`
is globally available in JavaScript, it causes testability problems, because
it is a global variable. In angular we always refer to it through the
`$window` service, so it may be overridden, removed or mocked for testing.

Expressions, like the one defined for the `ngClick` directive in the example
below, are evaluated with respect to the current scope.  Therefore, there is
no risk of inadvertently coding in a dependency on a global value in such an
expression.







  










