



# ngClassEven








The `ngClassOdd` and `ngClassEven` directives work exactly as
(ngClass)[api/ng/directive/ngClass], except they work in
conjunction with `ngRepeat` and take effect only on odd (even) rows.

This directive can be applied only within the scope of an
(ngRepeat)[api/ng/directive/ngRepeat].








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
| ngClassEven | expression | <p>(Expression)[guide/expression] to eval. The result of the evaluation can be a string representing space delimited class names or an array.</p>  |




