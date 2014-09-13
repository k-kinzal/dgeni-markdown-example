

[View Source](http://github.com///tree/master/#L18605)



# ngClassOdd



* directive in module []()






The `ngClassOdd` and `ngClassEven` directives work exactly as
{@link ng.directive:ngClass ngClass}, except they work in
conjunction with `ngRepeat` and take effect only on odd (even) rows.

This directive can be applied only within the scope of an
{@link ng.directive:ngRepeat ngRepeat}.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-class-odd="">
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class="ng-class-odd: ;"> ... </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngClassOdd | expression | <p>{@link guide/expression Expression} to eval. The result of the evaluation can be a string representing space delimited class names or an array.</p>  |




