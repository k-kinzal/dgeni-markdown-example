



# $log


* [$logProvider](api/ng/provider/$logProvider)








Simple service for logging. Default implementation safely writes the message
into the browser's console (if present).

The main purpose of this service is to simplify debugging and troubleshooting.

The default is to log `debug` messages. You can use
(ng.$logProvider#debugEnabled)[api/ng/provider/$logProvider] to change this.







## Dependencies

* $window



  




## Methods
### log
Write a log message








### info
Write an information message








### warn
Write a warning message








### error
Write an error message








### debug
Write a debug message














