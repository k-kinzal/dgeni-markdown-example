



# ngMessagesInclude








`ngMessagesInclude` is a directive with the purpose to import existing ngMessage template
code from a remote template and place the downloaded template code into the exact spot
that the ngMessagesInclude directive is placed within the ngMessages container. This allows
for a series of pre-defined messages to be reused and also allows for the developer to
determine what messages are overridden due to the placement of the ngMessagesInclude directive.








## Directive Info

* This directive creates new scope.
* This directive executes at priority level 0.


## Usage


```
```html
<!-- using attribute directives -->
<ANY ng-messages="expression" role="alert>
  <ANY ng-messages-include="remoteTplString">...</ANY>
</ANY>

<!-- or by using element directives -->
<ng-messages for="expression" role="alert>
  <ng-messages-include src="expressionValue1">...</ng-messages-include>
</ng-messages>
```

(Click here)[api/ngMessages] to learn more about `ngMessages` and `ngMessage`.
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngMessagesInclude | string | <p>a string value corresponding to the remote template.</p>  |




