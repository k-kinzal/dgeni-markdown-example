



# ngBindHtml








Evaluates the expression and inserts the resulting HTML into the element in a secure way. By default,
the resulting HTML content will be sanitized using the ($sanitize)[api/ngSanitize/service/$sanitize] service.
To utilize this functionality, ensure that `$sanitize` is available, for example, by including (<code>ngSanitize</code>)[api/ngSanitize] in your module's dependencies (not in core Angular). In order to use (<code>ngSanitize</code>)[api/ngSanitize]
in your module's dependencies, you need to include "angular-sanitize.js" in your application.

You may also bypass sanitization for values you know are safe. To do so, bind to
an explicitly trusted value via ($sce.trustAsHtml)[api/ng/service/$sce#trustAsHtml].  See the example
under (Strict Contextual Escaping (SCE))[api/ng/service/$sce#show-me-an-example-using-sce-].

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
| ngBindHtml | expression | <p>(Expression)[guide/expression] to evaluate.</p>  |




