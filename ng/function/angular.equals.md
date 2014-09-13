

[View Source](http://github.com///tree/master/#L948)



# angular.equals



* function in module [ng](api/ng)






Determines if two objects or two values are equivalent. Supports value types, regular
expressions, arrays and objects.

Two objects or values are considered equivalent if at least one of the following is true:

* Both objects or values pass `===` comparison.
* Both objects or values are of the same type and all of their properties are equal by
  comparing them with `angular.equals`.
* Both values are NaN. (In JavaScript, NaN == NaN => false. But we consider two NaN as equal)
* Both values represent the same regular expression (In JavaScript,
  /abc/ == /abc/ => false. But we consider two regular expressions as equal when their textual
  representation matches).

During a property comparison, properties of `function` type and properties with names
that begin with `$` are ignored.

Scope and DOMWindow objects are being compared only by identify (`===`).







  

## Usage

```jsangular.equals(, );)
```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| o1 | * | <p>Object or value to compare.</p>  |
| o2 | * | <p>Object or value to compare.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| boolean | <p>True if arguments are equal.</p>  |








