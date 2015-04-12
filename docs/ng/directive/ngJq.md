



# ngJq








Use this directive to force the angular.element library.  This should be
used to force either jqLite by leaving ng-jq blank or setting the name of
the jquery variable under window (eg. jQuery).

Since this directive is global for the angular library, it is recommended
that it's added to the same element as ng-app or the HTML element, but it is not mandatory.
It needs to be noted that only the first instance of `ng-jq` will be used and all others
ignored.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      [the=""]>
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| the | string= | <p>name of the library available under <code>window</code> to be used for angular.element</p>  |




