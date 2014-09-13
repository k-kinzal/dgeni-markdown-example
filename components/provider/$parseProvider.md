

[View Source](http://github.com///tree/master/#L11172)



# $parseProvider






* provider in module []()






`$parseProvider` can be used for configuring the default behavior of the {@link ng.$parse $parse}
 service.







  

## Usage

```js$parseProvider();)
```







## Methods
### method:unwrapPromises
**This feature is deprecated, see deprecation notes below for more info**

If set to true (default is false), $parse will unwrap promises automatically when a promise is
found at any part of the expression. In other words, if set to true, the expression will always
result in a non-promise value.

While the promise is unresolved, it's treated as undefined, but once resolved and fulfilled,
the fulfillment value is used in place of the promise while evaluating the expression.

**Deprecation notice**

This is a feature that didn't prove to be wildly useful or popular, primarily because of the
dichotomy between data access in templates (accessed as raw values) and controller code
(accessed as promises).

In most code we ended up resolving promises manually in controllers anyway and thus unifying
the model access there.

Other downsides of automatic promise unwrapping:

- when building components it's often desirable to receive the raw promises
- adds complexity and slows down expression evaluation
- makes expression code pre-generation unattractive due to the amount of code that needs to be
  generated
- makes IDE auto-completion and tool support hard

**Warning Logs**

If the unwrapping is enabled, Angular will log a warning about each expression that unwraps a
promise (to reduce the noise, each expression is logged only once). To disable this logging use
`$parseProvider.logPromiseWarnings(false)` api.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | boolean= | <p>New value.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean&#124;self | <p>Returns the current setting when used as getter and self if used as setter.</p>  |




### method:logPromiseWarnings
Controls whether Angular should log a warning on any encounter of a promise in an expression.

The default is set to `true`.

This setting applies only if `$parseProvider.unwrapPromises` setting is set to true as well.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | boolean= | <p>New value.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean&#124;self | <p>Returns the current setting when used as getter and self if used as setter.</p>  |










