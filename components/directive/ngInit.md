

[View Source](http://github.com///tree/master/#L19882)



# ngInit



* directive in module []()






The `ngInit` directive allows you to evaluate an expression in the
current scope.

<div class="alert alert-error">
The only appropriate use of `ngInit` is for aliasing special properties of
{@link ng.directive:ngRepeat `ngRepeat`}, as seen in the demo below. Besides this case, you
should use {@link guide/controller controllers} rather than `ngInit`
to initialize values on a scope.
</div>
<div class="alert alert-warning">
**Note**: If you have assignment in `ngInit` along with {@link ng.$filter `$filter`}, make
sure you have parenthesis for correct precedence:
<pre class="prettyprint">
  <div ng-init="test1 = (data | orderBy:'name')"></div>
</pre>
</div>








## Directive Info


* This directive executes at priority level 450.


## Usage



* as attribute:
    ```
    <ANY
      ng-init="">
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class="ng-init: ;"> ... </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngInit | expression | <p>{@link guide/expression Expression} to eval.</p>  |




