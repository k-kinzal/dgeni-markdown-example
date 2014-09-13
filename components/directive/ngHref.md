

[View Source](http://github.com///tree/master/#L15675)



# ngHref



* directive in module []()






Using Angular markup like `{{hash}}` in an href attribute will
make the link go to the wrong URL if the user clicks it before
Angular has a chance to replace the `{{hash}}` markup with its
value. Until Angular replaces the markup the link will be broken
and will most likely return a 404 error.

The `ngHref` directive solves this problem.

The wrong way to write it:
```html
<a href="http://www.gravatar.com/avatar/{{hash}}"/>
```

The correct way to write it:
```html
<a ng-href="http://www.gravatar.com/avatar/{{hash}}"/>
```








## Directive Info


* This directive executes at priority level 99.


## Usage



* as attribute:
    ```
    <A
      ng-href="">
    ...
    </A>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngHref | template | <p>any string which can contain <code>{{}}</code> markup.</p>  |




