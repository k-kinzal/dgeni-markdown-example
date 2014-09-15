



# ngTransclude








Directive that marks the insertion point for the transcluded DOM of the nearest parent directive that uses transclusion.

Any existing content of the element that this directive is placed on will be removed before the transcluded content is inserted.








## Directive Info


* This directive executes at priority level 0.


## Usage




* as element:(This directive can be used as custom element, but be aware of <a href="guide/ie">IE restrictions</a>).
    ```
    <ng-transclude>
    ...
    </ng-transclude>
    ```
* as attribute:
    ```
    <ANY>
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class=""> ... </ANY>
    ```







