



# ngList








Text input that converts between a delimited string and an array of strings. The delimiter
can be a fixed string (by default a comma) or a regular expression.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <input
      [ng-list=""]>
    ...
    </input>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngList | string= | <p>optional delimiter that should be used to split the value. If specified in form <code>/something/</code> then the value will be converted into a regular expression.</p>  |




