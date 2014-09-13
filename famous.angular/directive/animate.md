



# animate








This directive is deprecated.  Prefer using the $timeline service.  This element is used to specify the animation of an element in a (faAnimation)[api/famous.angular/directive/faAnimation] directive





## Deprecated API

true






## Directive Info


* This directive executes at priority level 0.


## Usage


```
```html
<fa-animation timeline="functionThatReturnsATimelineValueBetween0And1">
 <animate targetModSelector="#topMod" field="rotateX" startValue="3.1415" endValue="0" curve="inQuad" timelineLowerBound="0" timelineUpperBound=".25" />
</fa-animation>
```
```








