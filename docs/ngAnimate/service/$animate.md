



# $animate


* [$animateProvider](api/ngAnimate/provider/$animateProvider)








The `$animate` service provides animation detection support while performing DOM operations (enter, leave and move) as well as during addClass and removeClass operations.
When any of these operations are run, the $animate service
will examine any JavaScript-defined animations (which are defined by using the $animateProvider provider object)
as well as any CSS-defined animations against the CSS classes present on the element once the DOM operation is run.

The `$animate` service is used behind the scenes with pre-existing directives and animation with these directives
will work out of the box without any extra configuration.

Requires the (`ngAnimate`)[api/ngAnimate] module to be installed.

Please visit the (`ngAnimate`)[api/ngAnimate] module overview page learn more about how to use animations in your application.
## Callback Promises
With AngularJS 1.3, each of the animation methods, on the `$animate` service, return a promise when called. The
promise itself is then resolved once the animation has completed itself, has been cancelled or has been
skipped due to animations being disabled. (Note that even if the animation is cancelled it will still
call the resolve function of the animation.)

```js
$animate.enter(element, container).then(function() {
  //...this is called once the animation is complete...
});
```

Also note that, due to the nature of the callback promise, if any Angular-specific code (like changing the scope,
location of the page, etc...) is executed within the callback promise then be sure to wrap the code using
`$scope.$apply(...)`;

```js
$animate.leave(element).then(function() {
  $scope.$apply(function() {
    $location.path('/new-page');
  });
});
```

An animation can also be cancelled by calling the `$animate.cancel(promise)` method with the provided
promise that was returned when the animation was started.

```js
var promise = $animate.addClass(element, 'super-long-animation').then(function() {
  //this will still be called even if cancelled
});

element.on('click', function() {
  //tooo lazy to wait for the animation to end
  $animate.cancel(promise);
});
```

(Keep in mind that the promise cancellation is unique to `$animate` since promises in
general cannot be cancelled.)







  




## Methods
### enter
Appends the element to the parentElement element that resides in the document and then runs the enter animation. Once
the animation is started, the following CSS classes will be present on the element for the duration of the animation:

Below is a breakdown of each step that occurs during enter animation:

| Animation Step                                                                                                    | What the element class attribute looks like              |
|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| 1. $animate.enter(...) is called                                                                                  | class="my-animation"                                     |
| 2. element is inserted into the parentElement element or beside the afterElement element                          | class="my-animation"                                     |
| 3. $animate waits for the next digest to start the animation                                                      | class="my-animation ng-animate"                          |
| 4. $animate runs the JavaScript-defined animations detected on the element                                        | class="my-animation ng-animate"                          |
| 5. the .ng-enter class is added to the element                                                                    | class="my-animation ng-animate ng-enter"                 |
| 6. $animate scans the element styles to get the CSS transition/animation duration and delay                       | class="my-animation ng-animate ng-enter"                 |
| 7. $animate blocks all CSS transitions on the element to ensure the .ng-enter class styling is applied right away | class="my-animation ng-animate ng-enter"                 |
| 8. $animate waits for a single animation frame (this performs a reflow)                                           | class="my-animation ng-animate ng-enter"                 |
| 9. $animate removes the CSS transition block placed on the element                                                | class="my-animation ng-animate ng-enter"                 |
| 10. the .ng-enter-active class is added (this triggers the CSS transition/animation)                              | class="my-animation ng-animate ng-enter ng-enter-active" |
| 11. $animate waits for the animation to complete (via events and timeout)                                         | class="my-animation ng-animate ng-enter ng-enter-active" |
| 12. The animation ends and all generated CSS classes are removed from the element                                 | class="my-animation"                                     |
| 13. The returned promise is resolved.                                                                             | class="my-animation"                                     |


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element that will be the focus of the enter animation</p>  |
| parentElement | DOMElement | <p>the parent element of the element that will be the focus of the enter animation</p>  |
| afterElement | DOMElement | <p>the sibling element (which is the previous element) of the element that will be the focus of the enter animation</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### leave
Runs the leave animation operation and, upon completion, removes the element from the DOM. Once
the animation is started, the following CSS classes will be added for the duration of the animation:

Below is a breakdown of each step that occurs during leave animation:

| Animation Step                                                                                                    | What the element class attribute looks like              |
|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| 1. $animate.leave(...) is called                                                                                  | class="my-animation"                                     |
| 2. $animate runs the JavaScript-defined animations detected on the element                                        | class="my-animation ng-animate"                          |
| 3. $animate waits for the next digest to start the animation                                                      | class="my-animation ng-animate"                          |
| 4. the .ng-leave class is added to the element                                                                    | class="my-animation ng-animate ng-leave"                 |
| 5. $animate scans the element styles to get the CSS transition/animation duration and delay                       | class="my-animation ng-animate ng-leave"                 |
| 6. $animate blocks all CSS transitions on the element to ensure the .ng-leave class styling is applied right away | class="my-animation ng-animate ng-leave”                 |
| 7. $animate waits for a single animation frame (this performs a reflow)                                           | class="my-animation ng-animate ng-leave"                 |
| 8. $animate removes the CSS transition block placed on the element                                                | class="my-animation ng-animate ng-leave”                 |
| 9. the .ng-leave-active class is added (this triggers the CSS transition/animation)                               | class="my-animation ng-animate ng-leave ng-leave-active" |
| 10. $animate waits for the animation to complete (via events and timeout)                                         | class="my-animation ng-animate ng-leave ng-leave-active" |
| 11. The animation ends and all generated CSS classes are removed from the element                                 | class="my-animation"                                     |
| 12. The element is removed from the DOM                                                                           | ...                                                      |
| 13. The returned promise is resolved.                                                                             | ...                                                      |


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element that will be the focus of the leave animation</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### move
Fires the move DOM operation. Just before the animation starts, the animate service will either append it into the parentElement container or
add the element directly after the afterElement element if present. Then the move animation will be run. Once
the animation is started, the following CSS classes will be added for the duration of the animation:

Below is a breakdown of each step that occurs during move animation:

| Animation Step                                                                                                   | What the element class attribute looks like            |
|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| 1. $animate.move(...) is called                                                                                  | class="my-animation"                                   |
| 2. element is moved into the parentElement element or beside the afterElement element                            | class="my-animation"                                   |
| 3. $animate waits for the next digest to start the animation                                                     | class="my-animation ng-animate"                        |
| 4. $animate runs the JavaScript-defined animations detected on the element                                       | class="my-animation ng-animate"                        |
| 5. the .ng-move class is added to the element                                                                    | class="my-animation ng-animate ng-move"                |
| 6. $animate scans the element styles to get the CSS transition/animation duration and delay                      | class="my-animation ng-animate ng-move"                |
| 7. $animate blocks all CSS transitions on the element to ensure the .ng-move class styling is applied right away | class="my-animation ng-animate ng-move”                |
| 8. $animate waits for a single animation frame (this performs a reflow)                                          | class="my-animation ng-animate ng-move"                |
| 9. $animate removes the CSS transition block placed on the element                                               | class="my-animation ng-animate ng-move”                |
| 10. the .ng-move-active class is added (this triggers the CSS transition/animation)                              | class="my-animation ng-animate ng-move ng-move-active" |
| 11. $animate waits for the animation to complete (via events and timeout)                                        | class="my-animation ng-animate ng-move ng-move-active" |
| 12. The animation ends and all generated CSS classes are removed from the element                                | class="my-animation"                                   |
| 13. The returned promise is resolved.                                                                            | class="my-animation"                                   |


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element that will be the focus of the move animation</p>  |
| parentElement | DOMElement | <p>the parentElement element of the element that will be the focus of the move animation</p>  |
| afterElement | DOMElement | <p>the sibling element (which is the previous element) of the element that will be the focus of the move animation</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### addClass
Triggers a custom animation event based off the className variable and then attaches the className value to the element as a CSS class.
Unlike the other animation methods, the animate service will suffix the className value with @type -add in order to provide
the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if no CSS transitions
or keyframes are defined on the -add-active or base CSS class).

Below is a breakdown of each step that occurs during addClass animation:

| Animation Step                                                                                     | What the element class attribute looks like                      |
|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| 1. $animate.addClass(element, 'super') is called                                                   | class="my-animation"                                             |
| 2. $animate runs the JavaScript-defined animations detected on the element                         | class="my-animation ng-animate"                                  |
| 3. the .super-add class is added to the element                                                    | class="my-animation ng-animate super-add"                        |
| 4. $animate waits for a single animation frame (this performs a reflow)                            | class="my-animation ng-animate super-add"                        |
| 5. the .super and .super-add-active classes are added (this triggers the CSS transition/animation) | class="my-animation ng-animate super super-add super-add-active" |
| 6. $animate scans the element styles to get the CSS transition/animation duration and delay        | class="my-animation ng-animate super-add"                        |
| 7. $animate waits for the animation to complete (via events and timeout)                           | class="my-animation super super-add super-add-active"            |
| 8. The animation ends and all generated CSS classes are removed from the element                   | class="my-animation super"                                       |
| 9. The super class is kept on the element                                                          | class="my-animation super"                                       |
| 10. The returned promise is resolved.                                                              | class="my-animation super"                                       |


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element that will be animated</p>  |
| className | string | <p>the CSS class that will be added to the element and then animated</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### removeClass
Triggers a custom animation event based off the className variable and then removes the CSS class provided by the className value
from the element. Unlike the other animation methods, the animate service will suffix the className value with @type -remove in
order to provide the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if
no CSS transitions or keyframes are defined on the -remove or base CSS classes).

Below is a breakdown of each step that occurs during removeClass animation:

| Animation Step                                                                                                   | What the element class attribute looks like                      |
|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| 1. $animate.removeClass(element, 'super') is called                                                              | class="my-animation super"                                       |
| 2. $animate runs the JavaScript-defined animations detected on the element                                       | class="my-animation super ng-animate"                            |
| 3. the .super-remove class is added to the element                                                               | class="my-animation super ng-animate super-remove"               |
| 4. $animate waits for a single animation frame (this performs a reflow)                                          | class="my-animation super ng-animate super-remove"               |
| 5. the .super-remove-active classes are added and .super is removed (this triggers the CSS transition/animation) | class="my-animation ng-animate super-remove super-remove-active" |
| 6. $animate scans the element styles to get the CSS transition/animation duration and delay                      | class="my-animation super ng-animate super-remove"               |
| 7. $animate waits for the animation to complete (via events and timeout)                                         | class="my-animation ng-animate super-remove super-remove-active" |
| 8. The animation ends and all generated CSS classes are removed from the element                                 | class="my-animation"                                             |
| 9. The returned promise is resolved.                                                                             | class="my-animation"                                             |


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element that will be animated</p>  |
| className | string | <p>the CSS class that will be animated and then removed from the element</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### setClass
Adds and/or removes the given CSS classes to and from the element.
Once complete, the done() callback will be fired (if provided).

| Animation Step                                                                                                                       | What the element class attribute looks like                                          |
|--------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| 1. $animate.removeClass(element, ‘on’, ‘off’) is called                                                                              | class="my-animation super off”                                                       |
| 2. $animate runs the JavaScript-defined animations detected on the element                                                           | class="my-animation super ng-animate off”                                            |
| 3. the .on-add and .off-remove classes are added to the element                                                                      | class="my-animation ng-animate on-add off-remove off”                                |
| 4. $animate waits for a single animation frame (this performs a reflow)                                                              | class="my-animation ng-animate on-add off-remove off”                                |
| 5. the .on, .on-add-active and .off-remove-active classes are added and .off is removed (this triggers the CSS transition/animation) | class="my-animation ng-animate on on-add on-add-active off-remove off-remove-active” |
| 6. $animate scans the element styles to get the CSS transition/animation duration and delay                                          | class="my-animation ng-animate on on-add on-add-active off-remove off-remove-active" |
| 7. $animate waits for the animation to complete (via events and timeout)                                                             | class="my-animation ng-animate on on-add on-add-active off-remove off-remove-active" |
| 8. The animation ends and all generated CSS classes are removed from the element                                                     | class="my-animation on"                                                              |
| 9. The returned promise is resolved.                                                                                                 | class="my-animation on"                                                              |


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will have its CSS classes changed removed from it</p>  |
| add | string | <p>the CSS classes which will be added to the element</p>  |
| remove | string | <p>the CSS class which will be removed from the element CSS classes have been set on the element</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### cancel
Cancels the provided animation.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| animationPromise | Promise | <p>The animation promise that is returned when an animation is started.</p>  |






### enabled
Globally enables/disables animations.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | boolean= | <p>If provided then set the animation on or off.</p>  |
| element | DOMElement= | <p>If provided then the element will be used to represent the enable/disable operation</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>Current animation state.</p>  |










