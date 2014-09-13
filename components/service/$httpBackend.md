

[View Source](http://github.com///tree/master/#L8440)



# $httpBackend






* service in module []()






HTTP backend used by the {@link ng.$http service} that delegates to
XMLHttpRequest object or JSONP and deals with browser incompatibilities.

You should never need to use this service directly, instead use the higher-level abstractions:
{@link ng.$http $http} or {@link ngResource.$resource $resource}.

During testing this implementation is swapped with {@link ngMock.$httpBackend mock
$httpBackend} which can be trained with responses.







## Dependencies

* {@link $window  }* {@link $document  }



  










