



# faModifier








This directive creates a Famo.us Modifier that will affect all children render nodes.  Its properties can be bound
to values (e.g. `fa-translate="[15, 20, 1]"`, Famo.us Transitionable objects, or to functions that return numbers.








## Directive Info


* This directive executes at priority level 0.


## Usage


```
```html
<fa-modifier fa-opacity=".25" fa-skew="myScopeSkewVariable" fa-translate="[25, 50, 2]" fa-scale="myScopeFunctionThatReturnsAnArray">
  <!-- Child elements of this fa-modifier will be affected by the values above -->
  <fa-surface>I'm translucent, skewed, rotated, and translated</fa-surface>
</fa-modifier>
```
```javascript
$scope.myScopeSkewVariable = [0,0,.3];
$scope.myScopeFunctionThatReturnsAnArray = function() {
  return [0.5, 0.5];
};
```
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| faRotate | Array&#124;Function&#124;Particle | <p>Array of numbers or function returning an array of numbers to which this Modifier&#39;s rotate should be bound.</p>  |
| faRotateX | Number&#124;Function&#124;Particle | <p>Number or function returning a number to which this Modifier&#39;s rotateX should be bound</p>  |
| faRotateY | Number&#124;Function&#124;Particle | <p>Number or function returning a number to which this Modifier&#39;s rotateY should be bound</p>  |
| faRotateZ | Number&#124;Function&#124;Particle | <p>Number or function returning a number to which this Modifier&#39;s rotateZ should be bound</p>  |
| faScale | Array&#124;Function&#124;Particle | <p>Array of numbers or function returning an array of numbers to which this Modifier&#39;s scale should be bound</p>  |
| faSkew | Array&#124;Function&#124;Particle | <p>Array of numbers or function returning an array of numbers to which this Modifier&#39;s skew should be bound</p>  |
| faAboutOrigin | Array&#124;Function&#124;Particle | <p>Array of arguments (or a function returning an array of arguments) to pass to Transform.aboutOrigin</p>  |
| faPerspective | Number&#124;Function&#124;Particle | <p>Number or array returning a number to which this modifier&#39;s perspective (focusZ) should be bound.</p>  |
| faTransform | Transform | <p>Manually created Famo.us Transform object (an array) that can be passed to the modifier.  <em>Will override all other transform attributes.</em></p>  |
| faOpacity | Number&#124;Function&#124;Transitionable&#124;Particle | <p>Number or function returning a number to which this Modifier&#39;s opacity should be bound</p>  |
| faSize | Array&#124;Function&#124;Transitionable&#124;Particle | <p>Array of numbers (e.g. [100, 500] for the x- and y-sizes) or function returning an array of numbers to which this Modifier&#39;s size should be bound</p>  |
| faOrigin | Array&#124;Function&#124;Transitionable&#124;Particle | <p>Array of numbers (e.g. [.5, 0] for the x- and y-origins) or function returning an array of numbers to which this Modifier&#39;s origin should be bound</p>  |
| faAlign | Array&#124;Function&#124;Transitionable&#124;Particle | <p>Array of numbers (e.g. [.5, 0] for the x- and y-aligns) or function returning an array of numbers to which this Modifier&#39;s align should be bound</p>  |
| faTransformOrder | Array.String | <p>Optional array of strings to specify which transforms to apply and in which order. (e.g. <code>fa-transform-order=&quot;[&#39;rotateZ&#39;, &#39;translate&#39;, &#39;scale&#39;]&quot;</code>)  Default behavior is to evaluate all supported transforms and apply them in alphabetical order.</p>  |




