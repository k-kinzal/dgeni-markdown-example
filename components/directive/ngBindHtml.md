

[View Source](http://github.com///tree/master/#L18276)



# ngBindHtml



* directive in module []()






Creates a binding that will innerHTML the result of evaluating the `expression` into the current
element in a secure way.  By default, the innerHTML-ed content will be sanitized using the {@link
ngSanitize.$sanitize $sanitize} service.  To utilize this functionality, ensure that `$sanitize`
is available, for example, by including {@link ngSanitize} in your module's dependencies (not in
core Angular.)  You may also bypass sanitization for values you know are safe. To do so, bind to
an explicitly trusted value via {@link ng.$sce#trustAsHtml $sce.trustAsHtml}.  See the example
under {@link ng.$sce#Example Strict Contextual Escaping (SCE)}.

Note: If a `$sanitize` service is unavailable and the bound value isn't explicitly trusted, you
will have an exception (instead of an exploit.)








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-bind-html="">
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngBindHtml | expression | <p>{@link guide/expression Expression} to evaluate.</p>  |




