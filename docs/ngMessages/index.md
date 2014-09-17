
# ngMessages

The `ngMessages` module provides enhanced support for displaying messages within templates
(typically within forms or when rendering message objects that return key/value data).
Instead of relying on JavaScript code and/or complex ng-if statements within your form template to
show and hide error messages specific to the state of an input field, the `ngMessages` and
`ngMessage` directives are designed to handle the complexity, inheritance and priority
sequencing based on the order of how the messages are defined in the template.

Currently, the ngMessages module only contains the code for the `ngMessages`
and `ngMessage` directives.

# Usage
The `ngMessages` directive listens on a key/value collection which is set on the ngMessages attribute.
Since the (ngModel)[api/ng/directive/ngModel] directive exposes an `$error` object, this error object can be
used with `ngMessages` to display control error messages in an easier way than with just regular angular
template directives.

```html
<form name="myForm">
  <input type="text" ng-model="field" name="myField" required minlength="5" />
  <div ng-messages="myForm.myField.$error">
    <div ng-message="required">You did not enter a field</div>
    <div ng-message="minlength">The value entered is too short</div>
  </div>
</form>
```

Now whatever key/value entries are present within the provided object (in this case `$error`) then
the ngMessages directive will render the inner first ngMessage directive (depending if the key values
match the attribute value present on each ngMessage directive). In other words, if your errors
object contains the following data:

```javascript
<!-- keep in mind that ngModel automatically sets these error flags -->
myField.$error = { minlength : true, required : false };
```

Then the `required` message will be displayed first. When required is false then the `minlength` message
will be displayed right after (since these messages are ordered this way in the template HTML code).
The prioritization of each message is determined by what order they're present in the DOM.
Therefore, instead of having custom JavaScript code determine the priority of what errors are
present before others, the presentation of the errors are handled within the template.

By default, ngMessages will only display one error at a time. However, if you wish to display all
messages then the `ng-messages-multiple` attribute flag can be used on the element containing the
ngMessages directive to make this happen.

```html
<div ng-messages="myForm.myField.$error" ng-messages-multiple>...</div>
```

## Reusing and Overriding Messages
In addition to prioritization, ngMessages also allows for including messages from a remote or an inline
template. This allows for generic collection of messages to be reused across multiple parts of an
application.

```html
<script type="text/ng-template" id="error-messages">
  <div ng-message="required">This field is required</div>
  <div ng-message="minlength">This field is too short</div>
</script>
<div ng-messages="myForm.myField.$error" ng-messages-include="error-messages"></div>
```

However, including generic messages may not be useful enough to match all input fields, therefore,
`ngMessages` provides the ability to override messages defined in the remote template by redefining
then within the directive container.

```html
<!-- a generic template of error messages known as "my-custom-messages" -->
<script type="text/ng-template" id="my-custom-messages">
  <div ng-message="required">This field is required</div>
  <div ng-message="minlength">This field is too short</div>
</script>

<form name="myForm">
  <input type="email"
         id="email"
         name="myEmail"
         ng-model="email"
         minlength="5"
         required />

  <div ng-messages="myForm.myEmail.$error" ng-messages-include="my-custom-messages">
    <!-- this required message has overridden the template message -->
    <div ng-message="required">You did not enter your email address</div>

    <!-- this is a brand new message and will appear last in the prioritization -->
    <div ng-message="email">Your email address is invalid</div>
  </div>
</form>
```

In the example HTML code above the message that is set on required will override the corresponding
required message defined within the remote template. Therefore, with particular input fields (such
email addresses, date fields, autocomplete inputs, etc...), specialized error messages can be applied
while more generic messages can be used to handle other, more general input errors.

## Animations
If the `ngAnimate` module is active within the application then both the `ngMessages` and
`ngMessage` directives will trigger animations whenever any messages are added and removed
from the DOM by the `ngMessages` directive.

Whenever the `ngMessages` directive contains one or more visible messages then the `.ng-active` CSS
class will be added to the element. The `.ng-inactive` CSS class will be applied when there are no
animations present. Therefore, CSS transitions and keyframes as well as JavaScript animations can
hook into the animations whenever these classes are added/removed.

Let's say that our HTML code for our messages container looks like so:

```html
<div ng-messages="myMessages" class="my-messages">
  <div ng-message="alert" class="some-message">...</div>
  <div ng-message="fail" class="some-message">...</div>
</div>
```

Then the CSS animation code for the message container looks like so:

```css
.my-messages {
  transition:1s linear all;
}
.my-messages.ng-active {
  // messages are visible
}
.my-messages.ng-inactive {
  // messages are hidden
}
```

Whenever an inner message is attached (becomes visible) or removed (becomes hidden) then the enter
and leave animation is triggered for each particular element bound to the `ngMessage` directive.

Therefore, the CSS code for the inner messages looks like so:

```css
.some-message {
  transition:1s linear all;
}

.some-message.ng-enter {}
.some-message.ng-enter.ng-enter-active {}

.some-message.ng-leave {}
.some-message.ng-leave.ng-leave-active {}
```

(Click here)[api/ngAnimate] to learn how to use JavaScript animations or to learn more about ngAnimate.


## Installation

First include angular-messages.js in your HTML:

```
<script src="angular.js">
<script src="angular-messages.js">
```

You can download this file from the following places:

* (Google CDN)[https://developers.google.com/speed/libraries/devguide#angularjs]<br>e.g. <code>//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-messages.js</code>
* (Bower)[http://bower.io]<br>e.g. <pre><code>bower install angular-messages@X.Y.Z</code></pre>
* (code.angularjs.org)[http://code.angularjs.org]<br>e.g. <pre><code>&quot;//code.angularjs.org/X.Y.Z/angular-messages.js&quot;</code></pre>

where X.Y.Z is the AngularJS version you are running.

Then load the module in your application by adding it as a dependent module:

```
angular.module('app', ['ngMessages']);
```

With that you&apos;re ready to get started!




## Module Components

### directive

| Name | Description |
| :--: | :--: |
| ngMessages | <p><code>ngMessages</code> is a directive that is designed to show and hide messages based on the state</p>  |
| ngMessage | <p><code>ngMessage</code> is a directive with the purpose to show and hide a particular message.</p>  |







