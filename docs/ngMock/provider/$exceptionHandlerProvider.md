



# $exceptionHandlerProvider


* [$exceptionHandler](api/ngMock/service/$exceptionHandler)








Configures the mock implementation of (<code>$exceptionHandler</code>)[api/ng/service/$exceptionHandler] to rethrow or to log errors
passed into the `$exceptionHandler`.







  




## Methods
### mode
Sets the logging mode.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| mode | string | <p>Mode of operation, defaults to <code>rethrow</code>.</p> <ul> <li><code>rethrow</code>: If any errors are passed into the handler in tests, it typically<pre><code>means that there is a bug in the application or test, so this mock will make these tests fail. </code></pre> </li> <li><code>log</code>: Sometimes it is desirable to test that an error is thrown, for this case the <code>log</code><pre><code>mode stores an array of errors in `$exceptionHandler.errors`, to allow later assertion of them. See (assertEmpty())[api/ngMock/service/$log#assertEmpty] and (reset())[api/ngMock/service/$log#reset] </code></pre> </li> </ul>  |












