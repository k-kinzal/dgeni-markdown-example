

[View Source](http://github.com///tree/master/#L9912)



# $log






* service in module []()






Simple service for logging. Default implementation safely writes the message
into the browser's console (if present).

The main purpose of this service is to simplify debugging and troubleshooting.

The default is to log `debug` messages. You can use
{@link ng.$logProvider ng.$logProvider#debugEnabled} to change this.







## Dependencies

* {@link $window  }



  




## Methods
### method:log
Write a log message








### method:info
Write an information message








### method:warn
Write a warning message








### method:error
Write an error message








### method:debug
Write a debug message














