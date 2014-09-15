



# $compile.directive.Attributes








A shared object between directive compile / linking functions which contains normalized DOM
element attributes. The values reflect current binding state `{{ }}`. The normalization is
needed since all of these are treated as equivalent in Angular:

```
   <span ng:bind="a" ng-bind="a" data-ng-bind="a" x-ng-bind="a">
```







  




## Methods
### $addClass
Adds the CSS class value specified by the classVal parameter to the element. If animations
are enabled then an animation will be triggered for the class addition.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| classVal | string | <p>The className value that will be added to the element</p>  |






### $removeClass
Removes the CSS class value specified by the classVal parameter from the element. If
animations are enabled then an animation will be triggered for the class removal.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| classVal | string | <p>The className value that will be removed from the element</p>  |






### $updateClass
Adds and removes the appropriate CSS class values to the element based on the difference
between the new and old CSS class values (specified as newClasses and oldClasses).


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| newClasses | string | <p>The current CSS className value</p>  |
| oldClasses | string | <p>The former CSS className value</p>  |






### $observe
Observes an interpolated attribute.

The observer function will be invoked once during the next `$digest` following
compilation. The observer is then invoked whenever the interpolated value
changes.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| key | string | <p>Normalized key. (ie ngAttribute) .</p>  |
| fn | function(interpolatedValue) | <p>Function that will be called whenever the interpolated value of the attribute changes. See the (Directives)[guide/directive#Attributes] guide for more info.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| function() | <p>Returns a deregistration function for this observer.</p>  |




### $set
Set DOM element attribute value.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string | <p>Normalized element attribute name of the property to modify. The name is reverse-translated using the ($attr)[api/ng/type/$compile.directive.Attributes#$attr] property to the original name.</p>  |
| value | string | <p>Value to set the attribute to. The value can be an interpolated string.</p>  |









## Properties
### $attr

| Type | Description |
| :--: | :--: |
|  | <p>A map of DOM element attribute names to the normalized name. This is needed to do reverse lookup from normalized name back to actual name.</p>  |
  





