

[View Source](http://github.com///tree/master/#L8895)



# $interval






* service in module []()






Angular's wrapper for `window.setInterval`. The `fn` function is executed every `delay`
milliseconds.

The return value of registering an interval function is a promise. This promise will be
notified upon each tick of the interval, and will be resolved after `count` iterations, or
run indefinitely if `count` is not defined. The value of the notification will be the
number of iterations that have run.
To cancel an interval, call `$interval.cancel(promise)`.

In tests you can use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
move forward by `millis` milliseconds and trigger any functions scheduled to run in that
time.

<div class="alert alert-warning">
**Note**: Intervals created by this service must be explicitly destroyed when you are finished
with them.  In particular they are not automatically destroyed when a controller's scope or a
directive's element are destroyed.
You should take this into consideration and make sure to always cancel the interval at the
appropriate moment.  See the example below for more details on how and when to do this.
</div>







  

## Usage

```js$interval(, , [], []);)
```




### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| fn | function() | <p>A function that should be called repeatedly.</p>  |
| delay | number | <p>Number of milliseconds between each function call.</p>  |
| count | number= | <p>Number of times to repeat. If not set, or 0, will repeat indefinitely.</p>  |
| invokeApply | boolean= | <p>If set to <code>false</code> skips model dirty checking, otherwise will invoke <code>fn</code> within the {@link ng.$rootScope.Scope#$apply $apply} block.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| promise | <p>A promise which will be notified on each iteration.</p>  |


## Methods
### method:cancel
Cancels a task associated with the `promise`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| promise | promise | <p>returned by the <code>$interval</code> function.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>Returns <code>true</code> if the task was successfully canceled.</p>  |










