



# $famousDecorator











Manages the creation and handling of isolate scopes.

Isolate scopes are like a namespacing inside plain Angular child scopes,
with the purpose of storing properties available only to one particular
scope.
The scopes are still able to communicate with the parent via events
($emit, $broadcast), yet still have their own $scope properties that will
not conflict with the parent or other siblings.







  




## Methods
### ensureIsolate
Checks the passed in scope for an existing isolate property.  If
scope.isolate does not already exist, create it.

If the scope is being used in conjunction with an ng-repeat, assign
the default ng-repeat index onto the scope.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| scope | String | <p>the scope to ensure that the isolate property exists on</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>the isolated scope object from scope.isolate</p>  |




### registerChild
Register a child isolate's renderNode to the nearest parent that can sequence
it, and set up an event listener to remove it when the associated element is destroyed
by Angular.

A `registerChild` event is sent upward with `scope.$emit`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| scope | String | <p>the scope with an isolate to be sequenced</p>  |
| element | String | <p>the element to listen for destruction on</p>  |
| isolate | Object | <p>an isolated scope object from $famousDecorator#ensureIsolate</p>  |
| unregisterCallback | Function | <p>an optional callback to invoke when unregistration is complete</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| void |  |




### sequenceWith
Attach a listener for `registerChild` events.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| scope | String | <p>the scope to listen on</p>  |
| addMethod | Object | <p>the method to apply to the incoming isolate&#39;s content to add it to the sequence</p>  |
| removeMethod | Object | <p>the method to apply to the incoming isolate&#39;s ID to remove it from the sequence</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| void |  |










