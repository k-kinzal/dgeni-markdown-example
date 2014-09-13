

[View Source](http://github.com///tree/master/#L7441)



# $httpProvider






* provider in module []()






Use `$httpProvider` to change the default behavior of the {@link ng.$http $http} service.







  







## Properties
### property:defaults

| Type | Description |
| :--: | :--: |
|  | <p>Object containing default values for all {@link ng.$http $http} requests.</p> <ul> <li><p><strong><code>defaults.xsrfCookieName</code></strong> - {string} - Name of cookie containing the XSRF token. Defaults value is <code>&#39;XSRF-TOKEN&#39;</code>.</p> </li> <li><p><strong><code>defaults.xsrfHeaderName</code></strong> - {string} - Name of HTTP header to populate with the XSRF token. Defaults value is <code>&#39;X-XSRF-TOKEN&#39;</code>.</p> </li> <li><p><strong><code>defaults.headers</code></strong> - {Object} - Default headers for all $http requests. Refer to {@link ng.$http#setting-http-headers $http} for documentation on setting default headers.</p> <ul> <li><strong><code>defaults.headers.common</code></strong></li> <li><strong><code>defaults.headers.post</code></strong></li> <li><strong><code>defaults.headers.put</code></strong></li> <li><strong><code>defaults.headers.patch</code></strong></li> </ul> </li> </ul>  |
  





