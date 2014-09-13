

[View Source](http://github.com///tree/master/#L16299)



# form



* directive in module []()






Directive that instantiates
{@link form.FormController FormController}.

If the `name` attribute is specified, the form controller is published onto the current scope under
this name.

# Alias: {@link ng.directive:ngForm `ngForm`}

In Angular forms can be nested. This means that the outer form is valid when all of the child
forms are valid as well. However, browsers do not allow nesting of `<form>` elements, so
Angular provides the {@link ng.directive:ngForm `ngForm`} directive which behaves identically to
`<form>` but can be nested.  This allows you to have nested forms, which is very useful when
using Angular validation directives in forms that are dynamically generated using the
{@link ng.directive:ngRepeat `ngRepeat`} directive. Since you cannot dynamically generate the `name`
attribute of input elements using interpolation, you have to wrap each set of repeated inputs in an
`ngForm` directive and nest these in an outer `form` element.


# CSS classes
 - `ng-valid` is set if the form is valid.
 - `ng-invalid` is set if the form is invalid.
 - `ng-pristine` is set if the form is pristine.
 - `ng-dirty` is set if the form is dirty.

Keep in mind that ngAnimate can detect each of these classes when added and removed.


# Submitting a form and preventing the default action

Since the role of forms in client-side Angular applications is different than in classical
roundtrip apps, it is desirable for the browser not to translate the form submission into a full
page reload that sends the data to the server. Instead some javascript logic should be triggered
to handle the form submission in an application-specific way.

For this reason, Angular prevents the default action (form submission to the server) unless the
`<form>` element has an `action` attribute specified.

You can use one of the following two ways to specify what javascript method should be called when
a form is submitted:

- {@link ng.directive:ngSubmit ngSubmit} directive on the form element
- {@link ng.directive:ngClick ngClick} directive on the first
 button or input field of type submit (input[type=submit])

To prevent double execution of the handler, use only one of the {@link ng.directive:ngSubmit ngSubmit}
or {@link ng.directive:ngClick ngClick} directives.
This is because of the following form submission rules in the HTML specification:

- If a form has only one input field then hitting enter in this field triggers form submit
(`ngSubmit`)
- if a form has 2+ input fields and no buttons or input[type=submit] then hitting enter
doesn't trigger submit
- if a form has one or more input fields and one or more buttons or input[type=submit] then
hitting enter in any of the input fields will trigger the click handler on the *first* button or
input[type=submit] (`ngClick`) *and* a submit handler on the enclosing form (`ngSubmit`)








## Directive Info


* This directive executes at priority level 0.


## Usage




* as element:
    ```
    <form
      [name=""]>
    ...
    </form>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| name | string= | <p>Name of the form. If specified, the form controller will be published into related scope, under this name.</p> <h2 id="animation-hooks">Animation Hooks</h2> <p>Animations in ngForm are triggered when any of the associated CSS classes are added and removed. These classes are: <code>.ng-pristine</code>, <code>.ng-dirty</code>, <code>.ng-invalid</code> and <code>.ng-valid</code> as well as any other validations that are performed within the form. Animations in ngForm are similar to how they work in ngClass and animations can be hooked into using CSS transitions, keyframes as well as JS animations.</p> <p>The following example shows a simple way to utilize CSS transitions to style a form element that has been rendered as invalid after it has been validated:</p> <pre> //be sure to include ngAnimate as a module to hook into more //advanced animations .my-form { transition:0.5s linear all; background: white; } .my-form.ng-invalid { background: red; color:white; } </pre> |




