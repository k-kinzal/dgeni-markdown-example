



# $httpBackend











HTTP backend used by the (service)[api/ng/service/$http] that delegates to
XMLHttpRequest object or JSONP and deals with browser incompatibilities.

You should never need to use this service directly, instead use the higher-level abstractions:
($http)[api/ng/service/$http] or ($resource)[api/ngResource/service/$resource].

During testing this implementation is swapped with (mock
$httpBackend)[api/ngMock/service/$httpBackend] which can be trained with responses.







## Dependencies

* $window* $document



  










