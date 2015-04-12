



# ngMessage








`ngMessage` is a directive with the purpose to show and hide a particular message.
For `ngMessage` to operate, a parent `ngMessages` directive on a parent DOM element
must be situated since it determines which messages are visible based on the state
of the provided key/value map that `ngMessages` listens on.

More information about using `ngMessage` can be found in the
(`ngMessages` module documentation)[api/ngMessages].








## Directive Info

* This directive creates new scope.
* This directive executes at priority level 0.


## Usage


```
```html
<!-- using attribute directives -->
<ANY ng-messages="expression" role="alert>
  <ANY ng-message="stringValue">...</ANY>
  <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
</ANY>

<!-- or by using element directives -->
<ng-messages for="expression" role="alert>
  <ng-message when="stringValue">...</ng-message>
  <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
</ng-messages>
```
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngMessage | expression | <p>a string value corresponding to the message key.</p>  |




