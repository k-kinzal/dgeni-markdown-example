



# $routeParams











The `$routeParams` service allows you to retrieve the current set of route parameters.

Requires the (`ngRoute`)[api/ngRoute] module to be installed.

The route parameters are a combination of (`$location`)[api/ng/service/$location]'s
(`search()`)[api/ng/service/$location#search] and (`path()`)[api/ng/service/$location#path].
The `path` parameters are extracted when the (`$route`)[api/ngRoute/service/$route] path is matched.

In case of parameter name collision, `path` params take precedence over `search` params.

The service guarantees that the identity of the `$routeParams` object will remain unchanged
(but its properties will likely change) even when a route change occurs.

Note that the `$routeParams` are only updated *after* a route change completes successfully.
This means that you cannot rely on `$routeParams` being correct in route resolve functions.
Instead you can use `$route.current.params` to access the new route's parameters.







## Dependencies

* $route



  










