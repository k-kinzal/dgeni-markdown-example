



# faIndex








This directive is used to specify the rendering order of elements
inside of a ViewSequence-based component, such as @link faScrollView faScrollView}
or @link faGridLayout faGridLayout}.  As a special case, when elements are added to
these controls using ng-repeat, they are automatically assigned the
$index property exposed by ng-repeat.  When adding elements manually
(e.g. to a faScrollView but not using ng-repeat) or in a case where custom
order is desired, then the index value must be assigned/overridden using the faIndex directive.








## Directive Info


* This directive executes at priority level 0.


## Usage


```
```html
<fa-scroll-view>
 <fa-surface fa-index="0">Surface 1</fa-surface>
 <fa-surface fa-index="1">Surface 2</fa-surface>
</fa-scroll-view>
```
```








