



# ngForm








Nestable alias of (`form`)[api/ng/directive/form] directive. HTML
does not allow nesting of form elements. It is useful to nest forms, for example if the validity of a
sub-group of controls needs to be determined.

Note: the purpose of `ngForm` is to group controls,
but not to be a replacement for the `<form>` tag with all of its capabilities
(e.g. posting to the server, ...).








## Directive Info


* This directive executes at priority level 0.


## Usage




* as element:(This directive can be used as custom element, but be aware of <a href="guide/ie">IE restrictions</a>).
    ```
    <ng-form
      [name=""]>
    ...
    </ng-form>
    ```
* as attribute:
    ```
    <ANY
      [ng-form=""]>
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class="[ng-form: ;]"> ... </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngForm | string= | <p>Name of the form. If specified, the form controller will be published into related scope, under this name.</p>  |




