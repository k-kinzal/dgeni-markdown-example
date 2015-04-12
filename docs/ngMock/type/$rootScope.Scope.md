



# $rootScope.Scope








(Scope)[api/ng/type/$rootScope.Scope] type decorated with helper methods useful for testing. These
methods are automatically available on any (Scope)[api/ng/type/$rootScope.Scope] instance when
`ngMock` module is loaded.

In addition to all the regular `Scope` methods, the following helper methods are available:







  




## Methods
### $countChildScopes
Counts all the direct and indirect child scopes of the current scope.

The current scope is excluded from the count. The count includes all isolate child scopes.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| number | <p>Total number of child scopes.</p>  |




### $countWatchers
Counts all the watchers of direct and indirect child scopes of the current scope.

The watchers of the current scope are included in the count and so are all the watchers of
isolate child scopes.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| number | <p>Total number of watchers.</p>  |










