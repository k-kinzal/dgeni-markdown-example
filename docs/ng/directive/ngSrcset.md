



# ngSrcset








Using Angular markup like `{{hash}}` in a `srcset` attribute doesn't
work right: The browser will fetch from the URL with the literal
text `{{hash}}` until Angular replaces the expression inside
`{{hash}}`. The `ngSrcset` directive solves this problem.

The buggy way to write it:
```html
<img srcset="http://www.gravatar.com/avatar/{{hash}} 2x"/>
```

The correct way to write it:
```html
<img ng-srcset="http://www.gravatar.com/avatar/{{hash}} 2x"/>
```








## Directive Info


* This directive executes at priority level 99.


## Usage



* as attribute:
    ```
    <IMG
      ng-srcset="">
    ...
    </IMG>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngSrcset | template | <p>any string which can contain <code>{{}}</code> markup.</p>  |




