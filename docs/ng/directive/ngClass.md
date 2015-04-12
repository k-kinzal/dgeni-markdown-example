



# ngClass








The `ngClass` directive allows you to dynamically set CSS classes on an HTML element by databinding
an expression that represents all classes to be added.

The directive operates in three different ways, depending on which of three types the expression
evaluates to:

1. If the expression evaluates to a string, the string should be one or more space-delimited class
names.

2. If the expression evaluates to an object, then for each key-value pair of the
object with a truthy value the corresponding key is used as a class name.

3. If the expression evaluates to an array, each element of the array should either be a string as in
type 1 or an object as in type 2. This means that you can mix strings and objects together in an array
to give you more control over what CSS classes appear. See the code below for an example of this.


The directive won't add duplicate classes if a particular class was already set.

When the expression changes, the previously added classes are removed and only then are the
new classes added.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-class="">
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class="ng-class: ;"> ... </ANY>
    ```



## Animations
**add** - happens just before the class is applied to the elements

**remove** - happens just before the class is removed from the element
module:ngAnimate.$animate to learn more about the steps involved in the animation.

### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngClass | expression | <p>(Expression)[guide/expression] to eval. The result of the evaluation can be a string representing space delimited class names, an array, or a map of class names to boolean values. In the case of a map, the names of the properties whose values are truthy will be added as css classes to the element.</p>  |




