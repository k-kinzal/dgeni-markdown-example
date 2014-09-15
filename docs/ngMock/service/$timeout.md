



# $timeout











This service is just a simple decorator for ($timeout)[api/ng/service/$timeout] service
that adds a "flush" and "verifyNoPendingTasks" methods.







  




## Methods
### flush
Flushes the queue of pending tasks.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| delay | number= | <p>maximum timeout amount to flush up until</p>  |






### verifyNoPendingTasks
Verifies that there are no pending tasks that need to be flushed.














