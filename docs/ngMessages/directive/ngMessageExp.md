



# ngMessageExp








`ngMessageExp` is a directive with the purpose to show and hide a particular message.
For `ngMessageExp` to operate, a parent `ngMessages` directive on a parent DOM element
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
  <ANY ng-message-exp="expressionValue">...</ANY>
</ANY>

<!-- or by using element directives -->
<ng-messages for="expression">
  <ng-message when-exp="expressionValue">...</ng-message>
</ng-messages>
```

(Click here)[api/ngMessages] to learn more about `ngMessages` and `ngMessage`.
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngMessageExp | expression | <p>an expression value corresponding to the message key.</p>  |




