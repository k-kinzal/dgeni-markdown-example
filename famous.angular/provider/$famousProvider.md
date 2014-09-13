



# $famousProvider


* [$famous](api/famous.angular/service/$famous)








This provider will keep a reference on the complete Famo.us library and provide a few useful functions.







  




## Methods
### registerModule
Register the modules that will be available in the $famous service


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | String | <p>the key that will be used to register the module</p>  |
| module | Misc | <p>the data that will be returned by the service</p>  |






### getIsolate
Given an scope, retrieves the corresponding isolate.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| scope | Object |  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>The requested isolate</p>  |




### find
given a selector, retrieves
the isolate on a template-declared scene graph element.  This is useful
for manipulating Famo.us objects directly after they've been declared in the DOM.
As in normal Angular, this DOM look-up should be performed in the postLink function
of a directive.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| selector | String | <p>the selector for the elements to look up</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Array | <p>an array of the isolate objects of the selected elements.</p>  |










