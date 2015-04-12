



# $animateProvider


* [$animate](api/ng/service/$animate)








Default implementation of $animate that doesn't perform any animations, instead just
synchronously performs DOM updates and resolves the returned runner promise.

In order to enable animations the `ngAnimate` module has to be loaded.

To see the functional implementation check out `src/ngAnimate/animate.js`.







  




## Methods
### register
Registers a new injectable animation factory function. The factory function produces the
animation object which contains callback functions for each event that is expected to be
animated.

  * `eventFn`: `function(element, ... , doneFunction, options)`
  The element to animate, the `doneFunction` and the options fed into the animation. Depending
  on the type of animation additional arguments will be injected into the animation function. The
  list below explains the function signatures for the different animation methods:

  - setClass: function(element, addedClasses, removedClasses, doneFunction, options)
  - addClass: function(element, addedClasses, doneFunction, options)
  - removeClass: function(element, removedClasses, doneFunction, options)
  - enter, leave, move: function(element, doneFunction, options)
  - animate: function(element, fromStyles, toStyles, doneFunction, options)

  Make sure to trigger the `doneFunction` once the animation is fully complete.

```js
  return {
    //enter, leave, move signature
    eventFn : function(element, done, options) {
      //code to run the animation
      //once complete, then run done()
      return function endFunction(wasCancelled) {
        //code to cancel the animation
      }
    }
  }
```


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>The name of the animation (this is what the class-based CSS value will be compared to).</p>  |
| factory | Function | <p>The factory function that will be executed to return the animation object.</p>  |






### classNameFilter
Sets and/or returns the CSS class regular expression that is checked when performing
an animation. Upon bootstrap the classNameFilter value is not set at all and will
therefore enable $animate to attempt to perform an animation on any element that is triggered.
When setting the `classNameFilter` value, animations will only be performed on elements
that successfully match the filter expression. This in turn can boost performance
for low-powered devices as well as applications containing a lot of structural operations.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| expression | RegExp= | <p>The className expression which will be checked against all animations</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| RegExp | <p>The current CSS className expression value. If null then there is no expression value</p>  |










