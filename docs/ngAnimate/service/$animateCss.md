



# $animateCss











The `$animateCss` service is a useful utility to trigger customized CSS-based transitions/keyframes
from a JavaScript-based animation or directly from a directive. The purpose of `$animateCss` is NOT
to side-step how `$animate` and ngAnimate work, but the goal is to allow pre-existing animations or
directives to create more complex animations that can be purely driven using CSS code.

Note that only browsers that support CSS transitions and/or keyframe animations are capable of
rendering animations triggered via `$animateCss` (bad news for IE9 and lower).

## Usage
Once again, `$animateCss` is designed to be used inside of a registered JavaScript animation that
is powered by ngAnimate. It is possible to use `$animateCss` directly inside of a directive, however,
any automatic control over cancelling animations and/or preventing animations from being run on
child elements will not be handled by Angular. For this to work as expected, please use `$animate` to
trigger the animation and then setup a JavaScript animation that injects `$animateCss` to trigger
the CSS animation.

The example below shows how we can create a folding animation on an element using `ng-if`:

```html
<!-- notice the `fold-animation` CSS class -->
<div ng-if="onOff" class="fold-animation">
  This element will go BOOM
</div>
<button ng-click="onOff=true">Fold In</button>
```

Now we create the **JavaScript animation** that will trigger the CSS transition:

```js
ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
  return {
    enter: function(element, doneFn) {
      var height = element[0].offsetHeight;
      var animation = $animateCss(element, {
        from: { height:'0px' },
        to: { height:height + 'px' },
        duration: 1 // one second
      });

      // if no possible animation can be triggered due
      // to the combination of options then `animation`
      // will be returned as undefined
      animation.start().done(doneFn);
    }
  }
}]);
```

## More Advanced Uses

`$animateCss` is the underlying code that ngAnimate uses to power **CSS-based animations** behind the scenes. Therefore CSS hooks
like `.ng-EVENT`, `.ng-EVENT-active`, `.ng-EVENT-stagger` are all features that can be triggered using `$animateCss` via JavaScript code.

This also means that just about any combination of adding classes, removing classes, setting styles, dynamically setting a keyframe animation,
applying a hardcoded duration or delay value, changing the animation easing or applying a stagger animation are all options that work with
`$animateCss`. The service itself is smart enough to figure out the combination of options and examine the element styling properties in order
to provide a working animation that will run in CSS.

The example below showcases a more advanced version of the `.fold-animation` from the example above:

```js
ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
  return {
    enter: function(element, doneFn) {
      var height = element[0].offsetHeight;
      var animation = $animateCss(element, {
        addClass: 'red large-text pulse-twice',
        easing: 'ease-out',
        from: { height:'0px' },
        to: { height:height + 'px' },
        duration: 1 // one second
      });

      // if no possible animation can be triggered due
      // to the combination of options then `animation`
      // will be returned as undefined
      animation.start().done(doneFn);
    }
  }
}]);
```

Since we're adding/removing CSS classes then the CSS transition will also pick those up:

```css
/&#42; since a hardcoded duration value of 1 was provided in the JavaScript animation code,
the CSS classes below will be transitioned despite them being defined as regular CSS classes &#42;/
.red { background:red; }
.large-text { font-size:20px; }

/&#42; we can also use a keyframe animation and $animateCss will make it work alongside the transition &#42;/
.pulse-twice {
  animation: 0.5s pulse linear 2;
  -webkit-animation: 0.5s pulse linear 2;
}

@keyframes pulse {
  from { transform: scale(0.5); }
  to { transform: scale(1.5); }
}

@-webkit-keyframes pulse {
  from { -webkit-transform: scale(0.5); }
  to { -webkit-transform: scale(1.5); }
}
```

Given this complex combination of CSS classes, styles and options, `$animateCss` will figure everything out and make the animation happen.

## How the Options are handled

`$animateCss` is very versatile and intelligent when it comes to figuring out what configurations to apply to the element to ensure the animation
works with the options provided. Say for example we were adding a class that contained a keyframe value and we wanted to also animate some inline
styles using the `from` and `to` properties.

```js
var animation = $animateCss(element, {
  from: { background:'red' },
  to: { background:'blue' }
});
```

```css
.rotating-animation {
  animation:0.5s rotate linear;
  -webkit-animation:0.5s rotate linear;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@-webkit-keyframes rotate {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
}
```

The missing pieces here are that we do not have a transition set (within the CSS code nor within the `$animateCss` options) and the duration of the animation is
going to be detected from what the keyframe styles on the CSS class are. In this event, `$animateCss` will automatically create an inline transition
style matching the duration detected from the keyframe style (which is present in the CSS class that is being added) and then prepare both the transition
and keyframe animations to run in parallel on the element. Then when the animation is underway the provided `from` and `to` CSS styles will be applied
and spread across the transition and keyframe animation.

## What is returned

`$animateCss` works in two stages: a preparation phase and an animation phase. Therefore when `$animateCss` is first called it will NOT actually
start the animation. All that is going on here is that the element is being prepared for the animation (which means that the generated CSS classes are
added and removed on the element). Once `$animateCss` is called it will return an object with the following properties:

```js
var animation = $animateCss(element, { ... });
```

Now what do the contents of our `animation` variable look like:

```js
{
  // starts the animation
  start: Function,

  // ends (aborts) the animation
  end: Function
}
```

To actually start the animation we need to run `animation.start()` which will then return a promise that we can hook into to detect when the animation ends.
If we choose not to run the animation then we MUST run `animation.end()` to perform a cleanup on the element (since some CSS classes and stlyes may have been
applied to the element during the preparation phase). Note that all other properties such as duration, delay, transitions and keyframes are just properties
and that changing them will not reconfigure the parameters of the animation.

By calling `animation.start()` we do get back a promise, however, due to the nature of animations we may not want to tap into the default behaviour of
animations (since they cause a digest to occur which may slow down the animation performance-wise). Therefore instead of calling `then` to capture when
the animation ends be sure to call `done(callback)` (this is the recommended way to use `$animateCss` within JavaScript-animations).

The example below should put this into perspective:

```js
var animation = $animateCss(element, { ... });

// remember that if there is no CSS animation detected on the element
// then the value returned from $animateCss will be null
if (animation) {
  animation.start().done(function() {
    // yaay the animation is over
    doneCallback();
  });
} else {
  doneCallback();
}
```







  

## Usage
```js
$animateCss(element, options);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| element | DOMElement | <p>the element that will be animated</p>  |
| options | object | <p>the animation-related options that will be applied during the animation</p> <ul> <li><code>event</code> - The DOM event (e.g. enter, leave, move). When used, a generated CSS class of <code>ng-EVENT</code> and <code>ng-EVENT-active</code> will be applied to the element during the animation. Multiple events can be provided when spaces are used as a separator. (Note that this will not perform any DOM operation.)</li> <li><code>easing</code> - The CSS easing value that will be applied to the transition or keyframe animation (or both).</li> <li><code>transition</code> - The raw CSS transition style that will be used (e.g. <code>1s linear all</code>).</li> <li><code>keyframe</code> - The raw CSS keyframe animation style that will be used (e.g. <code>1s my_animation linear</code>).</li> <li><code>from</code> - The starting CSS styles (a key/value object) that will be applied at the start of the animation.</li> <li><code>to</code> - The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.</li> <li><code>addClass</code> - A space separated list of CSS classes that will be added to the element and spread across the animation.</li> <li><code>removeClass</code> - A space separated list of CSS classes that will be removed from the element and spread across the animation.</li> <li><code>duration</code> - A number value representing the total duration of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of <code>0</code> is provided then the animation will be skipped entirely.</li> <li><code>delay</code> - A number value representing the total delay of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of <code>true</code> is used then whatever delay value is detected from the CSS classes will be mirrored on the elements styles (e.g. by setting delay true then the style value of the element will be <code>transition-delay: DETECTED_VALUE</code>). Using <code>true</code> is useful when you want the CSS classes and inline styles to all share the same CSS delay value.</li> <li><code>stagger</code> - A numeric time value representing the delay between successively animated elements ((Click here to learn how CSS-based staggering works in ngAnimate.)[api/ngAnimate#css-staggering-animations])</li> <li><code>staggerIndex</code> - The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item in the stagger; therefore when a <code>stagger</code> option value of <code>0.1</code> is used then there will be a stagger delay of <code>600ms</code>)</li> </ul>  |

### Returns

| Type | Description |
| :--: | :--: |
| null&#124;object | <p>an object with a start method and details about the animation. If no animation is detected then a value of <code>null</code> will be returned.</p> <ul> <li><code>start</code> - The method to start the animation. This will return a <code>Promise</code> when called.</li> <li><code>end</code> - This method will cancel the animation and remove all applied CSS classes and styles.</li> </ul>  |








