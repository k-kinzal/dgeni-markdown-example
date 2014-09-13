

[View Source](http://github.com///tree/master/#L14243)



# $timeout






* service in module []()






Angular's wrapper for `window.setTimeout`. The `fn` function is wrapped into a try/catch
block and delegates any exceptions to
{@link ng.$exceptionHandler $exceptionHandler} service.

The return value of registering a timeout function is a promise, which will be resolved when
the timeout is reached and the timeout function is executed.

To cancel a timeout request, call `$timeout.cancel(promise)`.

In tests you can use {@link ngMock.$timeout `$timeout.flush()`} to
synchronously flush the queue of deferred functions.







  

## Usage

```js$timeout(, [], []);)
```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| fn | function() | <p>A function, whose execution should be delayed.</p>  |
| delay | number= | <p>Delay in milliseconds.</p>  |
| invokeApply | boolean= | <p>If set to <code>false</code> skips model dirty checking, otherwise will invoke <code>fn</code> within the {@link ng.$rootScope.Scope#$apply $apply} block.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| Promise | <p>Promise that will be resolved when the timeout is reached. The value this promise will be resolved with is the return value of the <code>fn</code> function.</p>  |


## Methods
### method:cancel
Cancels a task associated with the `promise`. As a result of this, the promise will be
resolved with a rejection.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| promise | Promise= | <p>Promise returned by the <code>$timeout</code> function.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>Returns <code>true</code> if the task hasn&#39;t executed yet and was successfully canceled.</p>  |










