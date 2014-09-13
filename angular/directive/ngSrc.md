



# ngSrc








Using Angular markup like `{{hash}}` in a `src` attribute doesn't
work right: The browser will fetch from the URL with the literal
text `{{hash}}` until Angular replaces the expression inside
`{{hash}}`. The `ngSrc` directive solves this problem.

The buggy way to write it:
```html
<img src="http://www.gravatar.com/avatar/{{hash}}"/>
```

The correct way to write it:
```html
<img ng-src="http://www.gravatar.com/avatar/{{hash}}"/>
```








## Directive Info


* This directive executes at priority level 99.


## Usage



* as attribute:
    ```
    <IMG
      ng-src="">
    ...
    </IMG>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngSrc | template | <p>any string which can contain <code>{{}}</code> markup.</p>  |




