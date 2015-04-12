



# $cookiesProvider


* [$cookies](api/ngCookies/service/$cookies)








Use `$cookiesProvider` to change the default behavior of the ($cookies)[api/ngCookies/service/$cookies] service.







  







## Properties
### defaults

| Type | Description |
| :--: | :--: |
|  | <p>Object containing default options to pass when setting cookies.</p> <p>The object may have following properties:</p> <ul> <li><strong>path</strong> - <code>{string}</code> - The cookie will be available only for this path and its sub-paths. By default, this would be the URL that appears in your base tag.</li> <li><strong>domain</strong> - <code>{string}</code> - The cookie will be available only for this domain and its sub-domains. For obvious security reasons the user agent will not accept the cookie if the current domain is not a sub domain or equals to the requested domain.</li> <li><strong>expires</strong> - <code>{string&amp;#124;Date}</code> - String of the form &quot;Wdy, DD Mon YYYY HH:MM:SS GMT&quot; or a Date object indicating the exact date/time this cookie will expire.</li> <li><strong>secure</strong> - <code>{boolean}</code> - The cookie will be available only in secured connection.</li> </ul> <p>Note: by default the address that appears in your <base> tag will be used as path. This is import so that cookies will be visible for all routes in case html5mode is enabled</p>  |
  





