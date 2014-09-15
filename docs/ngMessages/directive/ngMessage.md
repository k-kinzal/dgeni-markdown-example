



# ngMessage








`ngMessage` is a directive with the purpose to show and hide a particular message.
For `ngMessage` to operate, a parent `ngMessages` directive on a parent DOM element
must be situated since it determines which messages are visible based on the state
of the provided key/value map that `ngMessages` listens on.








## Directive Info

* This directive creates new scope.
* This directive executes at priority level 0.


## Usage


```
```html
<!-- using attribute directives -->
<ANY ng-messages="expression">
  <ANY ng-message="keyValue1">...</ANY>
  <ANY ng-message="keyValue2">...</ANY>
  <ANY ng-message="keyValue3">...</ANY>
</ANY>

<!-- or by using element directives -->
<ng-messages for="expression">
  <ng-message when="keyValue1">...</ng-message>
  <ng-message when="keyValue2">...</ng-message>
  <ng-message when="keyValue3">...</ng-message>
</ng-messages>
```

(Click here)[api/ngMessages] to learn more about `ngMessages` and `ngMessage`.
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngMessage | string | <p>a string value corresponding to the message key.</p>  |




