



# script








Load the content of a `<script>` element into `$templateCache`, so that the
template can be used by `ngInclude`,
`ngView`, or (directives)[guide/directive]. The type of the
`<script>` element must be specified as `text/ng-template`, and a cache name for the template must be
assigned through the element's `id`, which can then be used as a directive's `templateUrl`.








## Directive Info


* This directive executes at priority level 0.


## Usage




* as element:
    ```
    <script
      type=""
      id="">
    ...
    </script>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| type | string | <p>Must be set to <code>&#39;text/ng-template&#39;</code>.</p>  |
| id | string | <p>Cache name of the template.</p>  |




