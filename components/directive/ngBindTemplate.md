

[View Source](http://github.com///tree/master/#L18213)



# ngBindTemplate



* directive in module []()






The `ngBindTemplate` directive specifies that the element
text content should be replaced with the interpolation of the template
in the `ngBindTemplate` attribute.
Unlike `ngBind`, the `ngBindTemplate` can contain multiple `{{` `}}`
expressions. This directive is needed since some HTML elements
(such as TITLE and OPTION) cannot contain SPAN elements.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-bind-template="">
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngBindTemplate | string | <p>template of form <tt>{{</tt> <tt>expression</tt> <tt>}}</tt> to eval.</p>  |




