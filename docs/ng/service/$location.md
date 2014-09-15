



# $location


* [$locationProvider](api/ng/provider/$locationProvider)








The $location service parses the URL in the browser address bar (based on the
[window.location](https://developer.mozilla.org/en/window.location)) and makes the URL
available to your application. Changes to the URL in the address bar are reflected into
$location service and changes to $location are reflected into the browser address bar.

**The $location service:**

- Exposes the current URL in the browser address bar, so you can
  - Watch and observe the URL.
  - Change the URL.
- Synchronizes the URL with the browser when the user
  - Changes the address bar.
  - Clicks the back or forward button (or clicks a History link).
  - Clicks on a link.
- Represents the URL object as a set of methods (protocol, host, port, path, search, hash).

For more information see (Developer Guide: Using $location)[guide/$location]







## Dependencies

* $rootElement



  




## Methods
### absUrl
This method is getter only.

Return full url representation with all segments encoded according to rules specified in
[RFC 3986](http://www.ietf.org/rfc/rfc3986.txt).






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>full url</p>  |




### url
This method is getter / setter.

Return url (e.g. `/path?a=b#hash`) when called without any parameter.

Change path, search and hash, when called with parameter and return `$location`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string= | <p>New url without base prefix (e.g. <code>/path?a=b#hash</code>)</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>url</p>  |




### protocol
This method is getter only.

Return protocol of current url.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>protocol of current url</p>  |




### host
This method is getter only.

Return host of current url.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>host of current url.</p>  |




### port
This method is getter only.

Return port of current url.






#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Number | <p>port</p>  |




### path
This method is getter / setter.

Return path of current url when called without any parameter.

Change path when called with parameter and return `$location`.

Note: Path should always begin with forward slash (/), this method will add the forward slash
if it is missing.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| path | (string&#124;number)= | <p>New path</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>path</p>  |




### search
This method is getter / setter.

Return search part (as object) of current url when called without any parameter.

Change search part when called with parameter and return `$location`.


```js
// given url http://example.com/#/some/path?foo=bar&baz=xoxo
var searchObject = $location.search();
// => {foo: 'bar', baz: 'xoxo'}


// set foo to 'yipee'
$location.search('foo', 'yipee');
// => $location
```


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| search | string&#124;Object.<string>&#124;Object.<Array.<string>> | <p>New search params - string or hash object.</p> <p>When called with a single argument the method acts as a setter, setting the <code>search</code> component of <code>$location</code> to the specified value.</p> <p>If the argument is a hash object containing an array of values, these values will be encoded as duplicate search parameters in the url.</p>  |
| paramValue | (string&#124;Number&#124;Array<string>&#124;boolean)= | <p>If <code>search</code> is a string or number, then <code>paramValue</code> will override only a single search property.</p> <p>If <code>paramValue</code> is an array, it will override the property of the <code>search</code> component of <code>$location</code> specified via the first argument.</p> <p>If <code>paramValue</code> is <code>null</code>, the property specified via the first argument will be deleted.</p> <p>If <code>paramValue</code> is <code>true</code>, the property specified via the first argument will be added with no value nor trailing equal sign.</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| Object | <p>If called with no arguments returns the parsed <code>search</code> object. If called with one or more arguments returns <code>$location</code> object itself.</p>  |




### hash
This method is getter / setter.

Return hash fragment when called without any parameter.

Change hash fragment when called with parameter and return `$location`.


#### Parameters

| Param | Type | Details |
| :--: | :--: | :--: |
| hash | (string&#124;number)= | <p>New hash fragment</p>  |




#### Returns</h4>

| Type | Description |
| :--: | :--: |
| string | <p>hash</p>  |




### replace
If called, all changes to $location during current `$digest` will be replacing current history
record, instead of adding new one.









## Events
### $locationChangeStart

<p>Broadcasted before a URL will change. This change can be prevented by calling <code>preventDefault</code> method of the event. See (<code>$rootScope.Scope</code>)[api/ng/type/$rootScope.Scope#$on] for more details about event object. Upon successful change ($locationChangeSuccess)[api/ng/service/$location#events_$locationChangeSuccess] is fired.</p> 
#### Type:
broadcast

#### Target:
root scope


### $locationChangeSuccess

<p>Broadcasted after a URL was changed.</p> 
#### Type:
broadcast

#### Target:
root scope







