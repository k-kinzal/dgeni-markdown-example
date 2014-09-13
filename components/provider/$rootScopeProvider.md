

[View Source](http://github.com///tree/master/#L11892)



# $rootScopeProvider






* provider in module []()






Provider for the $rootScope service.







  




## Methods
### method:digestTtl
Sets the number of `$digest` iterations the scope should attempt to execute before giving up and
assuming that the model is unstable.

The current default is 10 iterations.

In complex applications it's possible that the dependencies between `$watch`s will result in
several digest iterations. However if an application needs more than the default 10 digest
iterations for its model to stabilize then you should investigate what is causing the model to
continuously change during the digest.

Increasing the TTL could have performance implications, so you should not change it without
proper justification.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| limit | number | <p>The number of digest iterations.</p>  |












