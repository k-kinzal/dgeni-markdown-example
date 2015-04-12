



# ngMessages








`ngMessages` is a directive that is designed to show and hide messages based on the state
of a key/value object that it listens on. The directive itself compliments error message
reporting with the `ngModel` $error object (which stores a key/value state of validation errors).

`ngMessages` manages the state of internal messages within its container element. The internal
messages use the `ngMessage` directive and will be inserted/removed from the page depending
on if they're present within the key/value object. By default, only one message will be displayed
at a time and this depends on the prioritization of the messages within the template. (This can
be changed by using the `ng-messages-multiple` or `multiple` attribute on the directive container.)

A remote template can also be used to promote message reusability and messages can also be
overridden.

(Click here)[api/ngMessages] to learn more about `ngMessages` and `ngMessage`.








## Directive Info


* This directive executes at priority level 0.


## Usage


```
```html
<!-- using attribute directives -->
<ANY ng-messages="expression" role="alert">
  <ANY ng-message="stringValue">...</ANY>
  <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
  <ANY ng-message-exp="expressionValue">...</ANY>
</ANY>

<!-- or by using element directives -->
<ng-messages for="expression" role="alert>
  <ng-message when="stringValue">...</ng-message>
  <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
  <ng-message when-exp="expressionValue">...</ng-message>
</ng-messages>
```
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngMessages | string | <p>an angular expression evaluating to a key/value object (this is typically the $error object on an ngModel instance).</p>  |
| ngMessagesMultiple | string= | <p>when set, all messages will be displayed with true</p>  |




