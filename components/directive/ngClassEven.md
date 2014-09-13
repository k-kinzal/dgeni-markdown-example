

[View Source](http://github.com///tree/master/#L18653)



# ngClassEven



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
      ng-class-even="">
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class="ng-class-even: ;"> ... </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngClassEven | expression | <p>{@link guide/expression Expression} to eval. The result of the evaluation can be a string representing space delimited class names or an array.</p>  |




