

[View Source](http://github.com///tree/master/#L19342)



# ngSubmit



* directive in module []()






Enables binding angular expressions to onsubmit events.

Additionally it prevents the default action (which for form means sending the request to the
server and reloading the current page), but only if the form does not contain `action`,
`data-action`, or `x-action` attributes.

<div class="alert alert-warning">
**Warning:** Be careful not to cause "double-submission" by using both the `ngClick` and
`ngSubmit` handlers together. See the
{@link form#submitting-a-form-and-preventing-the-default-action `form` directive documentation}
for a detailed discussion of when `ngSubmit` may be triggered.
</div>








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <form
      ng-submit="">
    ...
    </form>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngSubmit | expression | <p>{@link guide/expression Expression} to eval. ({@link guide/expression#-event- Event object is available as <code>$event</code>})</p>  |




