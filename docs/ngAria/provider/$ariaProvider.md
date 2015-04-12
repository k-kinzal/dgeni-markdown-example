



# $ariaProvider


* [$aria](api/ngAria/service/$aria)








Used for configuring the ARIA attributes injected and managed by ngAria.

```js
angular.module('myApp', ['ngAria'], function config($ariaProvider) {
  $ariaProvider.config({
    ariaValue: true,
    tabindex: false
  });
});
```

## Dependencies
Requires the (<code>ngAria</code>)[api/ngAria] module to be installed.







  




## Methods
### config
Enables/disables various ARIA attributes


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| config | object | <p>object to enable/disable specific ARIA attributes</p> <ul> <li><strong>ariaHidden</strong> – <code>{boolean}</code> – Enables/disables aria-hidden tags</li> <li><strong>ariaChecked</strong> – <code>{boolean}</code> – Enables/disables aria-checked tags</li> <li><strong>ariaDisabled</strong> – <code>{boolean}</code> – Enables/disables aria-disabled tags</li> <li><strong>ariaRequired</strong> – <code>{boolean}</code> – Enables/disables aria-required tags</li> <li><strong>ariaInvalid</strong> – <code>{boolean}</code> – Enables/disables aria-invalid tags</li> <li><strong>ariaMultiline</strong> – <code>{boolean}</code> – Enables/disables aria-multiline tags</li> <li><strong>ariaValue</strong> – <code>{boolean}</code> – Enables/disables aria-valuemin, aria-valuemax and aria-valuenow tags</li> <li><strong>tabindex</strong> – <code>{boolean}</code> – Enables/disables tabindex tags</li> <li><strong>bindKeypress</strong> – <code>{boolean}</code> – Enables/disables keypress event binding on <code>&amp;lt;div&amp;gt;</code> and <code>&amp;lt;li&amp;gt;</code> elements with ng-click</li> </ul>  |












