



# ngSwitch








The `ngSwitch` directive is used to conditionally swap DOM structure on your template based on a scope expression.
Elements within `ngSwitch` but without `ngSwitchWhen` or `ngSwitchDefault` directives will be preserved at the location
as specified in the template.

The directive itself works similar to ngInclude, however, instead of downloading template code (or loading it
from the template cache), `ngSwitch` simply chooses one of the nested elements and makes it visible based on which element
matches the value obtained from the evaluated expression. In other words, you define a container element
(where you place the directive), place an expression on the **`on="..."` attribute**
(or the **`ng-switch="..."` attribute**), define any inner elements inside of the directive and place
a when attribute per element. The when attribute is used to inform ngSwitch which element to display when the on
expression is evaluated. If a matching expression is not found via a when attribute then an element with the default
attribute is displayed.

<div class="alert alert-info">
Be aware that the attribute values to match against cannot be expressions. They are interpreted
as literal string values to match against.
For example, **`ng-switch-when="someVal"`** will match against the string `"someVal"` not against the
value of the expression `$scope.someVal`.
</div>








## Directive Info

* This directive creates new scope.
* This directive executes at priority level 800.


## Usage


```
```
<ANY ng-switch="expression">
  <ANY ng-switch-when="matchValue1">...</ANY>
  <ANY ng-switch-when="matchValue2">...</ANY>
  <ANY ng-switch-default>...</ANY>
</ANY>
```
```




## Animations
enter - happens after the ngSwitch contents change and the matched child element is placed inside the container
leave - happens just after the ngSwitch contents change and just before the former contents are removed from the DOM
module:ngAnimate.$animate to learn more about the steps involved in the animation.

### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngSwitch | * | <p>expression to match against <tt>ng-switch-when</tt>. On child elements add:</p> <ul> <li><code>ngSwitchWhen</code>: the case statement to match against. If match then this case will be displayed. If the same match appears multiple times, all the elements will be displayed.</li> <li><code>ngSwitchDefault</code>: the default case when no other case match. If there are multiple default cases, all of them will be displayed when no other case match.</li> </ul>  |




