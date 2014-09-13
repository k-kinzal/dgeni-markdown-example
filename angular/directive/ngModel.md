



# ngModel








The `ngModel` directive binds an `input`,`select`, `textarea` (or custom form control) to a
property on the scope using (NgModelController)[api/angular/type/ngModel.NgModelController],
which is created and exposed by this directive.

`ngModel` is responsible for:

- Binding the view into the model, which other directives such as `input`, `textarea` or `select`
  require.
- Providing validation behavior (i.e. required, number, email, url).
- Keeping the state of the control (valid/invalid, dirty/pristine, validation errors).
- Setting related css classes on the element (`ng-valid`, `ng-invalid`, `ng-dirty`, `ng-pristine`) including animations.
- Registering the control with its parent form.

Note: `ngModel` will try to bind to the property given by evaluating the expression on the
current scope. If the property doesn't already exist on this scope, it will be created
implicitly and added to the scope.

For best practices on using `ngModel`, see:

 - [https://github.com/angular/angular.js/wiki/Understanding-Scopes]

For basic examples, how to use `ngModel`, see:

 - input
   - (text)[api/angular/input/input[text]]
   - (checkbox)[api/angular/input/input[checkbox]]
   - (radio)[api/angular/input/input[radio]]
   - (number)[api/angular/input/input[number]]
   - (email)[api/angular/input/input[email]]
   - (url)[api/angular/input/input[url]]
 - select
 - textarea

# CSS classes
The following CSS classes are added and removed on the associated input/select/textarea element
depending on the validity of the model.

 - `ng-valid` is set if the model is valid.
 - `ng-invalid` is set if the model is invalid.
 - `ng-pristine` is set if the model is pristine.
 - `ng-dirty` is set if the model is dirty.

Keep in mind that ngAnimate can detect each of these classes when added and removed.

## Animation Hooks

Animations within models are triggered when any of the associated CSS classes are added and removed
on the input element which is attached to the model. These classes are: `.ng-pristine`, `.ng-dirty`,
`.ng-invalid` and `.ng-valid` as well as any other validations that are performed on the model itself.
The animations that are triggered within ngModel are similar to how they work in ngClass and
animations can be hooked into using CSS transitions, keyframes as well as JS animations.

The following example shows a simple way to utilize CSS transitions to style an input element
that has been rendered as invalid after it has been validated:

<pre>
//be sure to include ngAnimate as a module to hook into more
//advanced animations
.my-input {
  transition:0.5s linear all;
  background: white;
}
.my-input.ng-invalid {
  background: red;
  color:white;
}
</pre>








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <input>
    ...
    </input>
    ```







