



# $sceDelegate


* [$sceDelegateProvider](api/angular/provider/$sceDelegateProvider)








`$sceDelegate` is a service that is used by the `$sce` service to provide Strict
Contextual Escaping (SCE) services to AngularJS.

Typically, you would configure or override the $sceDelegate instead of
the `$sce` service to customize the way Strict Contextual Escaping works in AngularJS.  This is
because, while the `$sce` provides numerous shorthand methods, etc., you really only need to
override 3 core functions (`trustAs`, `getTrusted` and `valueOf`) to replace the way things
work because `$sce` delegates to `$sceDelegate` for these operations.

Refer $sceDelegateProvider to configure this service.

The default instance of `$sceDelegate` should work out of the box with little pain.  While you
can override it completely to change the behavior of `$sce`, the common case would
involve configuring the $sceDelegateProvider instead by setting
your own whitelists and blacklists for trusting URLs used for loading AngularJS resources such as
templates.  Refer $sceDelegateProvider.resourceUrlWhitelist and $sceDelegateProvider.resourceUrlBlacklist







  

## Usage
```js
$sceDelegate();
```








## Methods
### trustAs
Returns an object that is trusted by angular for use in specified strict
contextual escaping contexts (such as ng-bind-html, ng-include, any src
attribute interpolation, any dom event binding attribute interpolation
such as for onclick,  etc.) that uses the provided value.
See $sce for enabling strict contextual escaping.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| type | string | <p>The kind of context in which this value is safe for use.  e.g. url, resourceUrl, html, js and css.</p>  |
| value | * | <p>The value that that should be considered trusted/safe.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>A value that can be used to stand in for the provided <code>value</code> in places where Angular expects a $sce.trustAs() return value.</p>  |




### valueOf
If the passed parameter had been returned by a prior call to `$sceDelegate.trustAs`, returns the value that had been passed to `$sceDelegate.trustAs`.

If the passed parameter is not a value that had been returned by `$sceDelegate.trustAs`, returns it as-is.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| value | * | <p>The result of a prior <code>$sceDelegate.trustAs</code> call or anything else.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The <code>value</code> that was originally provided to <code>$sceDelegate.trustAs</code> if <code>value</code> is the result of such a call.  Otherwise, returns <code>value</code> unchanged.</p>  |




### getTrusted
Takes the result of a `$sceDelegate.trustAs` call and
returns the originally supplied value if the queried context type is a supertype of the
created type.  If this condition isn't satisfied, throws an exception.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| type | string | <p>The kind of context in which this value is to be used.</p>  |
| maybeTrusted | * | <p>The result of a prior <code>$sceDelegate.trustAs</code> call.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| * | <p>The value the was originally provided to <code>$sceDelegate.trustAs</code> if valid in this context.  Otherwise, throws an exception.</p>  |










