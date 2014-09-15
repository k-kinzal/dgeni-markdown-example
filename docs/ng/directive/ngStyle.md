



# ngStyle








The `ngStyle` directive allows you to set CSS style on an HTML element conditionally.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-style="">
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class="ng-style: ;"> ... </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngStyle | expression | <p>(Expression)[guide/expression] which evals to an object whose keys are CSS style names and values are corresponding values for those CSS keys.</p> <p>Since some CSS style names are not valid keys for an object, they must be quoted. See the &#39;background-color&#39; style in the example below.</p>  |




