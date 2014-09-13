

[View Source](http://github.com///tree/master/#L21233)



# script



* directive in module []()






Load the content of a `<script>` element into {@link ng.$templateCache `$templateCache`}, so that the
template can be used by {@link ng.directive:ngInclude `ngInclude`},
{@link ngRoute.directive:ngView `ngView`}, or {@link guide/directive directives}. The type of the
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




