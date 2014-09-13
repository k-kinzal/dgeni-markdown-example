



# ngSubmit








Enables binding angular expressions to onsubmit events on a fa-surface.

Additionally it prevents the default action (which for form means sending the request to the
server and reloading the current page), but only if the form does not contain `action`,
`data-action`, or `x-action` attributes.

<div class="alert alert-warning">
**Warning:** Be careful not to cause "double-submission" by using both the `ngClick` and
`ngSubmit` handlers together. See the
(`form` directive documentation)[api/angular/directive/form#submitting-a-form-and-preventing-the-default-action]
for a detailed discussion of when `ngSubmit` may be triggered.
</div>








## Directive Info


* This directive executes at priority level 0.


## Usage


```
```html
<ANY ng-submit="expression">

</ANY>
```
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngSubmit | expression | <p>(Expression)[guide/expression] to eval. ((Event object is available as <code>$event</code>)[guide/expression#-event-])</p>  |




