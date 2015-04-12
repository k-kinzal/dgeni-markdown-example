



# $animate


* [$animateProvider](api/ng/provider/$animateProvider)








The $animate service exposes a series of DOM utility methods that provide support
for animation hooks. The default behavior is the application of DOM operations, however,
when an animation is detected (and animations are enabled), $animate will do the heavy lifting
to ensure that animation runs with the triggered DOM operation.

By default $animate doesn't trigger an animations. This is because the `ngAnimate` module isn't
included and only when it is active then the animation hooks that `$animate` triggers will be
functional. Once active then all structural `ng-` directives will trigger animations as they perform
their DOM-related operations (enter, leave and move). Other directives such as `ngClass`,
`ngShow`, `ngHide` and `ngMessages` also provide support for animations.

It is recommended that the`$animate` service is always used when executing DOM-related procedures within directives.

To learn more about enabling animation support, click here to visit the
(ngAnimate module page)[api/ngAnimate].







  




## Methods
### enter
Inserts the element into the DOM either after the `after` element (if provided) or
  as the first child within the `parent` element and then triggers an animation.
  A promise is returned that will be resolved during the next digest once the animation
  has completed.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will be inserted into the DOM</p>  |
| parent | DOMElement | <p>the parent element which will append the element as a child (so long as the after element is not present)</p>  |
| after | DOMElement= | <p>the sibling element after which the element will be appended</p>  |
| options | object= | <p>an optional collection of options/styles that will be applied to the element</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### move
Inserts (moves) the element into its new position in the DOM either after
  the `after` element (if provided) or as the first child within the `parent` element
  and then triggers an animation. A promise is returned that will be resolved
  during the next digest once the animation has completed.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will be moved into the new DOM position</p>  |
| parent | DOMElement | <p>the parent element which will append the element as a child (so long as the after element is not present)</p>  |
| after | DOMElement= | <p>the sibling element after which the element will be appended</p>  |
| options | object= | <p>an optional collection of options/styles that will be applied to the element</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### leave
Triggers an animation and then removes the element from the DOM.
When the function is called a promise is returned that will be resolved during the next
digest once the animation has completed.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which will be removed from the DOM</p>  |
| options | object= | <p>an optional collection of options/styles that will be applied to the element</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### addClass
Triggers an addClass animation surrounding the addition of the provided CSS class(es). Upon
  execution, the addClass operation will only be handled after the next digest and it will not trigger an
  animation if element already contains the CSS class or if the class is removed at a later step.
  Note that class-based animations are treated differently compared to structural animations
  (like enter, move and leave) since the CSS classes may be added/removed at different points
  depending if CSS or JavaScript animations are used.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which the CSS classes will be applied to</p>  |
| className | string | <p>the CSS class(es) that will be added (multiple classes are separated via spaces)</p>  |
| options | object= | <p>an optional collection of options/styles that will be applied to the element</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### removeClass
Triggers a removeClass animation surrounding the removal of the provided CSS class(es). Upon
  execution, the removeClass operation will only be handled after the next digest and it will not trigger an
  animation if element does not contain the CSS class or if the class is added at a later step.
  Note that class-based animations are treated differently compared to structural animations
  (like enter, move and leave) since the CSS classes may be added/removed at different points
  depending if CSS or JavaScript animations are used.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which the CSS classes will be applied to</p>  |
| className | string | <p>the CSS class(es) that will be removed (multiple classes are separated via spaces)</p>  |
| options | object= | <p>an optional collection of options/styles that will be applied to the element</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### setClass
Performs both the addition and removal of a CSS classes on an element and (during the process)
   triggers an animation surrounding the class addition/removal. Much like `$animate.addClass` and
   `$animate.removeClass`, `setClass` will only evaluate the classes being added/removed once a digest has
   passed. Note that class-based animations are treated differently compared to structural animations
   (like enter, move and leave) since the CSS classes may be added/removed at different points
   depending if CSS or JavaScript animations are used.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which the CSS classes will be applied to</p>  |
| add | string | <p>the CSS class(es) that will be added (multiple classes are separated via spaces)</p>  |
| remove | string | <p>the CSS class(es) that will be removed (multiple classes are separated via spaces)</p>  |
| options | object= | <p>an optional collection of options/styles that will be applied to the element</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |




### animate
Performs an inline animation on the element which applies the provided to and from CSS styles to the element.
If any detected CSS transition, keyframe or JavaScript matches the provided className value then the animation will take
on the provided styles. For example, if a transition animation is set for the given className then the provided from and
to styles will be applied alongside the given transition. If a JavaScript animation is detected then the provided styles
will be given in as function paramters into the `animate` method (or as apart of the `options` parameter).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element which the CSS styles will be applied to</p>  |
| from | object | <p>the from (starting) CSS styles that will be applied to the element and across the animation.</p>  |
| to | object | <p>the to (destination) CSS styles that will be applied to the element and across the animation.</p>  |
| className | string= | <p>an optional CSS class that will be applied to the element for the duration of the animation. If this value is left as empty then a CSS class of <code>ng-inline-animate</code> will be applied to the element. (Note that if no animation is detected then this value will not be appplied to the element.)</p>  |
| options | object= | <p>an optional collection of options/styles that will be applied to the element</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Promise | <p>the animation callback promise</p>  |










