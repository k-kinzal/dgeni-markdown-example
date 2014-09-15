



# $interval











Mock implementation of the $interval service.

Use (`$interval.flush(millis)`)[api/ngMock/service/$interval#flush] to
move forward by `millis` milliseconds and trigger any functions scheduled to run in that
time.







  

## Usage
```js
$interval(fn, delay, [count], [invokeApply]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| fn | function() | <p>A function that should be called repeatedly.</p>  |
| delay | number | <p>Number of milliseconds between each function call.</p>  |
| count | number= | <p>Number of times to repeat. If not set, or 0, will repeat indefinitely.</p>  |
| invokeApply | boolean= | <p>If set to <code>false</code> skips model dirty checking, otherwise will invoke <code>fn</code> within the ($apply)[api/ng/type/$rootScope.Scope#$apply] block.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| promise | <p>A promise which will be notified on each iteration.</p>  |


## Methods
### cancel
Cancels a task associated with the `promise`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| promise | promise | <p>A promise from calling the <code>$interval</code> function.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| boolean | <p>Returns <code>true</code> if the task was successfully cancelled.</p>  |




### flush
Runs interval tasks scheduled to be run in the next `millis` milliseconds.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| millis | number= | <p>maximum timeout amount to flush up until.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| number | <p>The amount of time moved forward.</p>  |










