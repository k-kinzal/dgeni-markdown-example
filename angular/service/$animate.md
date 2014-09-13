



# $animate


* [$animateProvider](api/angular/provider/$animateProvider)








The $animate service provides rudimentary DOM manipulation functions to
insert, remove and move elements within the DOM, as well as adding and removing classes.
This service is the core service used by the ngAnimate $animator service which provides
high-level animation hooks for CSS and JavaScript.

$animate is available in the AngularJS core, however, the ngAnimate module must be included
to enable full out animation support. Otherwise, $animate will only perform simple DOM
manipulation operations.

To learn more about enabling animation support, click here to visit the ngAnimate module page as well as the ngAnimate $animate service
page.







  




## Methods
### enter
Inserts the element into the DOM either after the `after` element or within
  the `parent` element. Once complete, the done() callback will be fired (if provided).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will be inserted into the DOM</p>  |
| parent | DOMElement | <p>the parent element which will append the element as a child (if the after element is not present)</p>  |
| after | DOMElement | <p>the sibling element which will append the element after itself</p>  |
| done | Function= | <p>callback function that will be called after the element has been inserted into the DOM</p>  |






### leave
Removes the element from the DOM. Once complete, the done() callback will be
  fired (if provided).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will be removed from the DOM</p>  |
| done | Function= | <p>callback function that will be called after the element has been removed from the DOM</p>  |






### move
Moves the position of the provided element within the DOM to be placed
either after the `after` element or inside of the `parent` element. Once complete, the
done() callback will be fired (if provided).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will be moved around within the DOM</p>  |
| parent | DOMElement | <p>the parent element where the element will be inserted into (if the after element is not present)</p>  |
| after | DOMElement | <p>the sibling element where the element will be positioned next to</p>  |
| done | Function= | <p>the callback function (if provided) that will be fired after the element has been moved to its new position</p>  |






### addClass
Adds the provided className CSS class value to the provided element. Once
complete, the done() callback will be fired (if provided).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will have the className value added to it</p>  |
| className | string | <p>the CSS class which will be added to the element</p>  |
| done | Function= | <p>the callback function (if provided) that will be fired after the className value has been added to the element</p>  |






### removeClass
Removes the provided className CSS class value from the provided element.
Once complete, the done() callback will be fired (if provided).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will have the className value removed from it</p>  |
| className | string | <p>the CSS class which will be removed from the element</p>  |
| done | Function= | <p>the callback function (if provided) that will be fired after the className value has been removed from the element</p>  |






### setClass
Adds and/or removes the given CSS classes to and from the element.
Once complete, the done() callback will be fired (if provided).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will have its CSS classes changed removed from it</p>  |
| add | string | <p>the CSS classes which will be added to the element</p>  |
| remove | string | <p>the CSS class which will be removed from the element</p>  |
| done | Function= | <p>the callback function (if provided) that will be fired after the CSS classes have been set on the element</p>  |












