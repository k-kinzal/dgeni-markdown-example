



# ngShow








The `ngShow` directive shows or hides the given HTML element based on the expression
provided to the `ngShow` attribute. The element is shown or hidden by removing or adding
the `.ng-hide` CSS class onto the element. The `.ng-hide` CSS class is predefined
in AngularJS and sets the display style to none (using an !important flag).
For CSP mode please add `angular-csp.css` to your html file (see (ngCsp)[api/ng/directive/ngCsp]).

```html
<!-- when $scope.myValue is truthy (element is visible) -->
<div ng-show="myValue"></div>

<!-- when $scope.myValue is falsy (element is hidden) -->
<div ng-show="myValue" class="ng-hide"></div>
```

When the `ngShow` expression evaluates to a falsy value then the `.ng-hide` CSS class is added to the class
attribute on the element causing it to become hidden. When truthy, the `.ng-hide` CSS class is removed
from the element causing the element not to appear hidden.

## Why is !important used?

You may be wondering why !important is used for the `.ng-hide` CSS class. This is because the `.ng-hide` selector
can be easily overridden by heavier selectors. For example, something as simple
as changing the display style on a HTML list item would make hidden elements appear visible.
This also becomes a bigger issue when dealing with CSS frameworks.

By using !important, the show and hide behavior will work as expected despite any clash between CSS selector
specificity (when !important isn't used with any conflicting styles). If a developer chooses to override the
styling to change how to hide an element then it is just a matter of using !important in their own CSS code.

### Overriding `.ng-hide`

By default, the `.ng-hide` class will style the element with `display: none!important`. If you wish to change
the hide behavior with ngShow/ngHide then this can be achieved by restating the styles for the `.ng-hide`
class CSS. Note that the selector that needs to be used is actually `.ng-hide:not(.ng-hide-animate)` to cope
with extra animation classes that can be added.

```css
.ng-hide:not(.ng-hide-animate) {
  /&#42; this is just another form of hiding an element &#42;/
  display: block!important;
  position: absolute;
  top: -9999px;
  left: -9999px;
}
```

By default you don't need to override in CSS anything and the animations will work around the display style.

## A note about animations with `ngShow`

Animations in ngShow/ngHide work with the show and hide events that are triggered when the directive expression
is true and false. This system works like the animation system present with ngClass except that
you must also include the !important flag to override the display property
so that you can perform an animation when the element is hidden during the time of the animation.

```css
//
//a working example can be found at the bottom of this page
//
.my-element.ng-hide-add, .my-element.ng-hide-remove {
  /&#42; this is required as of 1.3x to properly
     apply all styling in a show/hide animation &#42;/
  transition: 0s linear all;
}

.my-element.ng-hide-add-active,
.my-element.ng-hide-remove-active {
  /&#42; the transition is defined in the active class &#42;/
  transition: 1s linear all;
}

.my-element.ng-hide-add { ... }
.my-element.ng-hide-add.ng-hide-add-active { ... }
.my-element.ng-hide-remove { ... }
.my-element.ng-hide-remove.ng-hide-remove-active { ... }
```

Keep in mind that, as of AngularJS version 1.3.0-beta.11, there is no need to change the display
property to block during animation states--ngAnimate will handle the style toggling automatically for you.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-show="">
    ...
    </ANY>
    ```



## Animations
addClass: `.ng-hide` - happens after the `ngShow` expression evaluates to a truthy value and the just before contents are set to visible
removeClass: `.ng-hide` - happens after the `ngShow` expression evaluates to a non truthy value and just before the contents are set to hidden
module:ngAnimate.$animate to learn more about the steps involved in the animation.

### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngShow | expression | <p>If the (expression)[guide/expression] is truthy then the element is shown or hidden respectively.</p>  |




