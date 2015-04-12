



# ngModelOptions








Allows tuning how model updates are done. Using `ngModelOptions` you can specify a custom list of
events that will trigger a model update and/or a debouncing delay so that the actual update only
takes place when a timer expires; this timer will be reset after another change takes place.

Given the nature of `ngModelOptions`, the value displayed inside input fields in the view might
be different from the value in the actual model. This means that if you update the model you
should also invoke (`$rollbackViewValue`)[api/ng/type/ngModel.NgModelController] on the relevant input field in
order to make sure it is synchronized with the model and that any debounced action is canceled.

The easiest way to reference the control's (`$rollbackViewValue`)[api/ng/type/ngModel.NgModelController]
method is by making sure the input is placed inside a form that has a `name` attribute. This is
important because `form` controllers are published to the related scope under the name in their
`name` attribute.

Any pending changes will take place immediately when an enclosing form is submitted via the
`submit` event. Note that `ngClick` events will occur before the model is updated. Use `ngSubmit`
to have access to the updated model.

`ngModelOptions` has an effect on the element it's declared on and its descendants.








## Directive Info


* This directive executes at priority level 0.


## Usage



* as attribute:
    ```
    <ANY
      ng-model-options="">
    ...
    </ANY>
    ```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngModelOptions | Object | <p>options to apply to the current model. Valid keys are:</p> <ul> <li><code>updateOn</code>: string specifying which event should the input be bound to. You can set several events using an space delimited list. There is a special event called <code>default</code> that matches the default events belonging of the control.</li> <li><code>debounce</code>: integer value which contains the debounce model update value in milliseconds. A value of 0 triggers an immediate update. If an object is supplied instead, you can specify a custom value for each event. For example: <code>ng-model-options=&quot;{ updateOn: &#39;default blur&#39;, debounce: {&#39;default&#39;: 500, &#39;blur&#39;: 0} }&quot;</code></li> <li><code>allowInvalid</code>: boolean value which indicates that the model can be set with values that did not validate correctly instead of the default behavior of setting the model to undefined.</li> <li><code>getterSetter</code>: boolean value which determines whether or not to treat functions bound to <code>ngModel</code> as getters/setters.</li> <li><code>timezone</code>: Defines the timezone to be used to read/write the <code>Date</code> instance in the model for <code>&lt;input type=&quot;date&quot;&gt;</code>, <code>&lt;input type=&quot;time&quot;&gt;</code>, ... . It understands UTC/GMT and the continental US time zone abbreviations, but for general use, use a time zone offset, for example, <code>&#39;+0430&#39;</code> (4 hours, 30 minutes east of the Greenwich meridian) If not specified, the timezone of the browser will be used.</li> </ul>  |




