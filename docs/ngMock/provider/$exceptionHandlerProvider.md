



# $exceptionHandlerProvider


* [$exceptionHandler](api/ngMock/service/$exceptionHandler)








Configures the mock implementation of (<code>$exceptionHandler</code>)[api/ng/service/$exceptionHandler] to rethrow or to log errors
passed to the `$exceptionHandler`.







  




## Methods
### mode
Sets the logging mode.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| mode | string | <p>Mode of operation, defaults to <code>rethrow</code>.</p> <ul> <li><code>log</code>: Sometimes it is desirable to test that an error is thrown, for this case the <code>log</code><pre><code>mode stores an array of errors in `$exceptionHandler.errors`, to allow later assertion of them. See (assertEmpty())[api/ngMock/service/$log#assertEmpty] and (reset())[api/ngMock/service/$log#reset] </code></pre> </li> <li><code>rethrow</code>: If any errors are passed to the handler in tests, it typically means that there<pre><code>is a bug in the application or test, so this mock will make these tests fail. For any implementations that expect exceptions to be thrown, the `rethrow` mode will also maintain a log of thrown errors. </code></pre> </li> </ul>  |












