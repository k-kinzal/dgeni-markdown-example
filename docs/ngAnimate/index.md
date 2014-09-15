
# ngAnimate

The `ngAnimate` module provides support for JavaScript, CSS3 transition and CSS3 keyframe animation hooks within existing core and custom directives.

<div doc-module-components="ngAnimate"></div>

# Usage

To see animations in action, all that is required is to define the appropriate CSS classes
or to register a JavaScript animation via the myModule.animation() function. The directives that support animation automatically are:
`ngRepeat`, `ngInclude`, `ngIf`, `ngSwitch`, `ngShow`, `ngHide`, `ngView` and `ngClass`. Custom directives can take advantage of animation
by using the `$animate` service.

Below is a more detailed breakdown of the supported animation events provided by pre-existing ng directives:

| Directive                                                                                                 | Supported Animations                                                     |
|-----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| (ngRepeat)[api/ng/directive/ngRepeat#usage_animations]                                                   | enter, leave and move                                                    |
| (ngView)[api/ngRoute/directive/ngView#usage_animations]                                                  | enter and leave                                                          |
| (ngInclude)[api/ng/directive/ngInclude#usage_animations]                                                 | enter and leave                                                          |
| (ngSwitch)[api/ng/directive/ngSwitch#usage_animations]                                                   | enter and leave                                                          |
| (ngIf)[api/ng/directive/ngIf#usage_animations]                                                           | enter and leave                                                          |
| (ngClass)[api/ng/directive/ngClass#usage_animations]                                                     | add and remove (the CSS class(es) present)                               |
| (ngShow)[api/ng/directive/ngShow#usage_animations] & (ngHide)[api/ng/directive/ngHide#usage_animations] | add and remove (the ng-hide class value)                                 |
| (form)[api/ng/directive/form#usage_animations] & (ngModel)[api/ng/directive/ngModel#usage_animations]   | add and remove (dirty, pristine, valid, invalid & all other validations) |
| (ngMessages)[api/ngMessages/directive/ngMessage#usage_animations]                                        | add and remove (ng-active & ng-inactive)                                 |
| (ngMessage)[api/ngMessages/directive/ngMessage#usage_animations]                                         | enter and leave                                                          |

You can find out more information about animations upon visiting each directive page.

Below is an example of how to apply animations to a directive that supports animation hooks:

```html
<style type="text/css">
.slide.ng-enter, .slide.ng-leave {
  -webkit-transition:0.5s linear all;
  transition:0.5s linear all;
}

.slide.ng-enter { }        /&#42; starting animations for enter &#42;/
.slide.ng-enter.ng-enter-active { } /&#42; terminal animations for enter &#42;/
.slide.ng-leave { }        /&#42; starting animations for leave &#42;/
.slide.ng-leave.ng-leave-active { } /&#42; terminal animations for leave &#42;/
</style>

<!--
the animate service will automatically add .ng-enter and .ng-leave to the element
to trigger the CSS transition/animations
-->
<ANY class="slide" ng-include="..."></ANY>
```

Keep in mind that, by default, if an animation is running, any child elements cannot be animated
until the parent element's animation has completed. This blocking feature can be overridden by
placing the `ng-animate-children` attribute on a parent container tag.

```html
<div class="slide-animation" ng-if="on" ng-animate-children>
  <div class="fade-animation" ng-if="on">
    <div class="explode-animation" ng-if="on">
       ...
    </div>
  </div>
</div>
```

When the `on` expression value changes and an animation is triggered then each of the elements within
will all animate without the block being applied to child elements.

## Are animations run when the application starts?
No they are not. When an application is bootstrapped Angular will disable animations from running to avoid
a frenzy of animations from being triggered as soon as the browser has rendered the screen. For this to work,
Angular will wait for two digest cycles until enabling animations. From there on, any animation-triggering
layout changes in the application will trigger animations as normal.

In addition, upon bootstrap, if the routing system or any directives or load remote data (via $http) then Angular
will automatically extend the wait time to enable animations once **all** of the outbound HTTP requests
are complete.

<h2>CSS-defined Animations</h2>
The animate service will automatically apply two CSS classes to the animated element and these two CSS classes
are designed to contain the start and end CSS styling. Both CSS transitions and keyframe animations are supported
and can be used to play along with this naming structure.

The following code below demonstrates how to perform animations using **CSS transitions** with Angular:

```html
<style type="text/css">
/&#42;
 The animate class is apart of the element and the ng-enter class
 is attached to the element once the enter animation event is triggered
&#42;/
.reveal-animation.ng-enter {
 -webkit-transition: 1s linear all; /&#42; Safari/Chrome &#42;/
 transition: 1s linear all; /&#42; All other modern browsers and IE10+ &#42;/

 /&#42; The animation preparation code &#42;/
 opacity: 0;
}

/&#42;
 Keep in mind that you want to combine both CSS
 classes together to avoid any CSS-specificity
 conflicts
&#42;/
.reveal-animation.ng-enter.ng-enter-active {
 /&#42; The animation code itself &#42;/
 opacity: 1;
}
</style>

<div class="view-container">
  <div ng-view class="reveal-animation"></div>
</div>
```

The following code below demonstrates how to perform animations using **CSS animations** with Angular:

```html
<style type="text/css">
.reveal-animation.ng-enter {
  -webkit-animation: enter_sequence 1s linear; /&#42; Safari/Chrome &#42;/
  animation: enter_sequence 1s linear; /&#42; IE10+ and Future Browsers &#42;/
}
@-webkit-keyframes enter_sequence {
  from { opacity:0; }
  to { opacity:1; }
}
@keyframes enter_sequence {
  from { opacity:0; }
  to { opacity:1; }
}
</style>

<div class="view-container">
  <div ng-view class="reveal-animation"></div>
</div>
```

Both CSS3 animations and transitions can be used together and the animate service will figure out the correct duration and delay timing.

Upon DOM mutation, the event class is added first (something like `ng-enter`), then the browser prepares itself to add
the active class (in this case `ng-enter-active`) which then triggers the animation. The animation module will automatically
detect the CSS code to determine when the animation ends. Once the animation is over then both CSS classes will be
removed from the DOM. If a browser does not support CSS transitions or CSS animations then the animation will start and end
immediately resulting in a DOM element that is at its final state. This final state is when the DOM element
has no CSS transition/animation classes applied to it.

### Structural transition animations

Structural transitions (such as enter, leave and move) will always apply a `0s none` transition
value to force the browser into rendering the styles defined in the setup (.ng-enter, .ng-leave
or .ng-move) class. This means that any active transition animations operating on the element
will be cut off to make way for the enter, leave or move animation.

### Class-based transition animations

Class-based transitions refer to transition animations that are triggered when a CSS class is
added to or removed from the element (via `$animate.addClass`, `$animate.removeClass`,
`$animate.setClass`, or by directives such as `ngClass`, `ngModel` and `form`).
They are different when compared to structural animations since they **do not cancel existing
animations** nor do they **block successive transitions** from rendering on the same element.
This distinction allows for **multiple class-based transitions** to be performed on the same element.

In addition to ngAnimate supporting the default (natural) functionality of class-based transition
animations, ngAnimate also decorates the element with starting and ending CSS classes to aid the
developer in further styling the element throughout the transition animation. Earlier versions
of ngAnimate may have caused natural CSS transitions to break and not render properly due to
$animate temporarily blocking transitions using `0s none` in order to allow the setup CSS class
(the `-add` or `-remove` class) to be applied without triggering an animation. However, as of
**version 1.3**, this workaround has been removed with ngAnimate and all non-ngAnimate CSS
class transitions are compatible with ngAnimate.

There is, however, one special case when dealing with class-based transitions in ngAnimate.
When rendering class-based transitions that make use of the setup and active CSS classes
(e.g. `.fade-add` and `.fade-add-active` for when `.fade` is added) be sure to define
the transition value **on the active CSS class** and not the setup class.

```css
.fade-add {
  /&#42; remember to place a 0s transition here
     to ensure that the styles are applied instantly
     even if the element already has a transition style &#42;/
  transition:0s linear all;

  /&#42; starting CSS styles &#42;/
  opacity:1;
}
.fade-add.fade-add-active {
  /&#42; this will be the length of the animation &#42;/
  transition:1s linear all;
  opacity:0;
}
```

The setup CSS class (in this case `.fade-add`) also has a transition style property, however, it
has a duration of zero. This may not be required, however, incase the browser is unable to render
the styling present in this CSS class instantly then it could be that the browser is attempting
to perform an unnecessary transition.

This workaround, however, does not apply to  standard class-based transitions that are rendered
when a CSS class containing a transition is applied to an element:

```css
.fade {
  /&#42; this works as expected &#42;/
  transition:1s linear all;
  opacity:0;
}
```

Please keep this in mind when coding the CSS markup that will be used within class-based transitions.
Also, try not to mix the two class-based animation flavors together since the CSS code may become
overly complex.

### CSS Staggering Animations
A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
curtain-like effect. The ngAnimate module, as of 1.2.0, supports staggering animations and the stagger effect can be
performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
the animation. The style property expected within the stagger class can either be a **transition-delay** or an
**animation-delay** property (or both if your animation contains both transitions and keyframe animations).

```css
.my-animation.ng-enter {
  /&#42; standard transition code &#42;/
  -webkit-transition: 1s linear all;
  transition: 1s linear all;
  opacity:0;
}
.my-animation.ng-enter-stagger {
  /&#42; this will have a 100ms delay between each successive leave animation &#42;/
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;

  /&#42; in case the stagger doesn't work then these two values
   must be set to 0 to avoid an accidental CSS inheritance &#42;/
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
}
.my-animation.ng-enter.ng-enter-active {
  /&#42; standard transition styles &#42;/
  opacity:1;
}
```

Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
will also be reset if more than 10ms has passed after the last animation has been fired.

The following code will issue the **ng-leave-stagger** event on the element provided:

```js
var kids = parent.children();

$animate.leave(kids[0]); //stagger index=0
$animate.leave(kids[1]); //stagger index=1
$animate.leave(kids[2]); //stagger index=2
$animate.leave(kids[3]); //stagger index=3
$animate.leave(kids[4]); //stagger index=4

$timeout(function() {
  //stagger has reset itself
  $animate.leave(kids[5]); //stagger index=0
  $animate.leave(kids[6]); //stagger index=1
}, 100, false);
```

Stagger animations are currently only supported within CSS-defined animations.

## JavaScript-defined Animations
In the event that you do not want to use CSS3 transitions or CSS3 animations or if you wish to offer animations on browsers that do not
yet support CSS transitions/animations, then you can make use of JavaScript animations defined inside of your AngularJS module.

```js
//!annotate="YourApp" Your AngularJS Module|Replace this or ngModule with the module that you used to define your application.
var ngModule = angular.module('YourApp', ['ngAnimate']);
ngModule.animation('.my-crazy-animation', function() {
  return {
    enter: function(element, done) {
      //run the animation here and call done when the animation is complete
      return function(cancelled) {
        //this (optional) function will be called when the animation
        //completes or when the animation is cancelled (the cancelled
        //flag will be set to true if cancelled).
      };
    },
    leave: function(element, done) { },
    move: function(element, done) { },

    //animation that can be triggered before the class is added
    beforeAddClass: function(element, className, done) { },

    //animation that can be triggered after the class is added
    addClass: function(element, className, done) { },

    //animation that can be triggered before the class is removed
    beforeRemoveClass: function(element, className, done) { },

    //animation that can be triggered after the class is removed
    removeClass: function(element, className, done) { }
  };
});
```

JavaScript-defined animations are created with a CSS-like class selector and a collection of events which are set to run
a javascript callback function. When an animation is triggered, $animate will look for a matching animation which fits
the element's CSS class attribute value and then run the matching animation event function (if found).
In other words, if the CSS classes present on the animated element match any of the JavaScript animations then the callback function will
be executed. It should be also noted that only simple, single class selectors are allowed (compound class selectors are not supported).

Within a JavaScript animation, an object containing various event callback animation functions is expected to be returned.
As explained above, these callbacks are triggered based on the animation event. Therefore if an enter animation is run,
and the JavaScript animation is found, then the enter callback will handle that animation (in addition to the CSS keyframe animation
or transition code that is defined via a stylesheet).


## Installation

First include angular-animate.js in your HTML:

```
<script src="angular.js">
<script src="angular-animate.js">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-animate.js</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install angular-animate@X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/angular-animate.js&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['ngAnimate']);
```

With that you&apos;re ready to get started!




## Module Components

### provider

| Name | Description |
| :--: | :--: |
| $animateProvider | <p>The <code>$animateProvider</code> allows developers to register JavaScript animation event handlers directly inside of a module.</p>  |


### service

| Name | Description |
| :--: | :--: |
| $animate | <p>The <code>$animate</code> service provides animation detection support while performing DOM operations (enter, leave and move) as well as during addClass and removeClass operations.</p>  |







