



# ngModel








The `ngModel` directive binds an `input`,`select`, `textarea` (or custom form control) to a
property on the scope using (NgModelController)[api/ng/type/ngModel.NgModelController],
which is created and exposed by this directive.

`ngModel` is responsible for:

- Binding the view into the model, which other directives such as `input`, `textarea` or `select`
  require.
- Providing validation behavior (i.e. required, number, email, url).
- Keeping the state of the control (valid/invalid, dirty/pristine, touched/untouched, validation errors).
- Setting related css classes on the element (`ng-valid`, `ng-invalid`, `ng-dirty`, `ng-pristine`, `ng-touched`, `ng-untouched`) including animations.
- Registering the control with its parent (form)[api/ng/directive/form].

Note: `ngModel` will try to bind to the property given by evaluating the expression on the
current scope. If the property doesn't already exist on this scope, it will be created
implicitly and added to the scope.

For best practices on using `ngModel`, see:

 - [Understanding Scopes](https://github.com/angular/angular.js/wiki/Understanding-Scopes)

For basic examples, how to use `ngModel`, see:

 - (input)[api/ng/directive/input]
   - (text)[api/ng/input/input[text]]
   - (checkbox)[api/ng/input/input[checkbox]]
   - (radio)[api/ng/input/input[radio]]
   - (number)[api/ng/input/input[number]]
   - (email)[api/ng/input/input[email]]
   - (url)[api/ng/input/input[url]]
   - (date)[api/ng/input/input[date]]
   - (datetime-local)[api/ng/input/input[datetime-local]]
   - (time)[api/ng/input/input[time]]
   - (month)[api/ng/input/input[month]]
   - (week)[api/ng/input/input[week]]
 - (select)[api/ng/directive/select]
 - (textarea)[api/ng/directive/textarea]

# CSS classes
The following CSS classes are added and removed on the associated input/select/textarea element
depending on the validity of the model.

 - `ng-valid`: the model is valid
 - `ng-invalid`: the model is invalid
 - `ng-valid-[key]`: for each valid key added by `$setValidity`
 - `ng-invalid-[key]`: for each invalid key added by `$setValidity`
 - `ng-pristine`: the control hasn't been interacted with yet
 - `ng-dirty`: the control has been interacted with
 - `ng-touched`: the control has been blurred
 - `ng-untouched`: the control hasn't been blurred
 - `ng-pending`: any `$asyncValidators` are unfulfilled

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


* This directive executes at priority level 1.


## Usage



* as attribute:
    ```
    <input>
    ...
    </input>
    ```







