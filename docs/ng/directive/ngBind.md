



# ngBind








The `ngBind` attribute tells Angular to replace the text content of the specified HTML element
with the value of a given expression, and to update the text content when the value of that
expression changes.

Typically, you don't use `ngBind` directly, but instead you use the double curly markup like
`{{ expression }}` which is similar but less verbose.

It is preferable to use `ngBind` instead of `{{ expression }}` if a template is momentarily
displayed by the browser in its raw state before Angular compiles it. Since `ngBind` is an
element attribute, it makes the bindings invisible to the user while the page is loading.

An alternative solution to this problem would be using the
(ngCloak)[api/ng/directive/ngCloak] directive.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-bind="">
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class="ng-bind: ;"> ... </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngBind | expression | <p>(Expression)[guide/expression] to evaluate.</p>  |




