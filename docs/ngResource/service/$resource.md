



# $resource











A factory which creates a resource object that lets you interact with
[RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.

The returned resource object has action methods which provide high-level behaviors without
the need to interact with the low level ($http)[api/ng/service/$http] service.

Requires the (`ngResource`)[api/ngResource] module to be installed.

By default, trailing slashes will be stripped from the calculated URLs,
which can pose problems with server backends that do not expect that
behavior.  This can be disabled by configuring the `$resourceProvider` like
this:

```js
     app.config(['$resourceProvider', function ($resourceProvider) {
       // Don't strip trailing slashes from calculated URLs
       $resourceProvider.defaults.stripTrailingSlashes = false;
     }]);
```







## Dependencies

* $http



  

## Usage
```js
$resource(url, [paramDefaults], [actions], options);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| url | string | <p>A parametrized URL template with parameters prefixed by <code>:</code> as in <code>/user/:username</code>. If you are using a URL with a port number (e.g. <code>http://example.com:8080/api</code>), it will be respected.</p> <p>  If you are using a url with a suffix, just add the suffix, like this: <code>$resource(&#39;http://example.com/resource.json&#39;)</code> or <code>$resource(&#39;http://example.com/:id.json&#39;)</code> or even <code>$resource(&#39;http://example.com/resource/:resource_id.:format&#39;)</code> If the parameter before the suffix is empty, :resource_id in this case, then the <code>/.</code> will be collapsed down to a single <code>.</code>.  If you need this sequence to appear and not collapse then you can escape it with <code>/\.</code>.</p>  |
| paramDefaults | Object= | <p>Default values for <code>url</code> parameters. These can be overridden in <code>actions</code> methods. If any of the parameter value is a function, it will be executed every time when a param value needs to be obtained for a request (unless the param was overridden).</p> <p>  Each key value in the parameter object is first bound to url template if present and then any excess keys are appended to the url search query after the <code>?</code>.</p> <p>  Given a template <code>/path/:verb</code> and parameter <code>{verb:&#39;greet&#39;, salutation:&#39;Hello&#39;}</code> results in URL <code>/path/greet?salutation=Hello</code>.</p> <p>  If the parameter value is prefixed with <code>@</code> then the value for that parameter will be extracted from the corresponding property on the <code>data</code> object (provided when calling an action method).  For example, if the <code>defaultParam</code> object is <code>{someParam: &#39;@someProp&#39;}</code> then the value of <code>someParam</code> will be <code>data.someProp</code>.</p>  |
| actions | Object.<Object>= | <p>Hash with declaration of custom action that should extend the default set of resource actions. The declaration should be created in the format of ($http.config)[api/ng/service/$http#usage_parameters]:</p> <pre><code>{action1: {method:?, params:?, isArray:?, headers:?, ...}, action2: {method:?, params:?, isArray:?, headers:?, ...}, ...} </code></pre> <p>  Where:</p> <ul> <li><strong><code>action</code></strong> – {string} – The name of action. This name becomes the name of the method on your resource object.</li> <li><strong><code>method</code></strong> – {string} – Case insensitive HTTP method (e.g. <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>, <code>JSONP</code>, etc).</li> <li><strong><code>params</code></strong> – {Object=} – Optional set of pre-bound parameters for this action. If any of the parameter value is a function, it will be executed every time when a param value needs to be obtained for a request (unless the param was overridden).</li> <li><strong><code>url</code></strong> – {string} – action specific <code>url</code> override. The url templating is supported just like for the resource-level urls.</li> <li><strong><code>isArray</code></strong> – {boolean=} – If true then the returned object for this action is an array, see <code>returns</code> section.</li> <li><strong><code>transformRequest</code></strong> – <code>{function(data, headersGetter)&amp;#124;Array.&lt;function(data, headersGetter)&gt;}</code> – transform function or an array of such functions. The transform function takes the http request body and headers and returns its transformed (typically serialized) version. By default, transformRequest will contain one function that checks if the request data is an object and serializes to using <code>angular.toJson</code>. To prevent this behavior, set <code>transformRequest</code> to an empty array: <code>transformRequest: []</code></li> <li><strong><code>transformResponse</code></strong> – <code>{function(data, headersGetter)&amp;#124;Array.&lt;function(data, headersGetter)&gt;}</code> – transform function or an array of such functions. The transform function takes the http response body and headers and returns its transformed (typically deserialized) version. By default, transformResponse will contain one function that checks if the response looks like a JSON string and deserializes it using <code>angular.fromJson</code>. To prevent this behavior, set <code>transformResponse</code> to an empty array: <code>transformResponse: []</code></li> <li><strong><code>cache</code></strong> – <code>{boolean&amp;#124;Cache}</code> – If true, a default $http cache will be used to cache the GET request, otherwise if a cache instance built with ($cacheFactory)[api/ng/service/$cacheFactory], this cache will be used for caching.</li> <li><strong><code>timeout</code></strong> – <code>{number&amp;#124;Promise}</code> – timeout in milliseconds, or (promise)[api/ng/service/$q] that should abort the request when resolved.</li> <li><strong><code>withCredentials</code></strong> - <code>{boolean}</code> - whether to set the <code>withCredentials</code> flag on the XHR object. See <a href="https://developer.mozilla.org/en/http_access_control#section_5">requests with credentials</a> for more information.</li> <li><strong><code>responseType</code></strong> - <code>{string}</code> - see <a href="https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType">requestType</a>.</li> <li><strong><code>interceptor</code></strong> - <code>{Object=}</code> - The interceptor object has two optional methods - <code>response</code> and <code>responseError</code>. Both <code>response</code> and <code>responseError</code> interceptors get called with <code>http response</code> object. See ($http interceptors)[api/ng/service/$http].</li> </ul>  |
| options | Object | <p>Hash with custom settings that should extend the default <code>$resourceProvider</code> behavior.  The only supported option is</p> <p>  Where:</p> <ul> <li><strong><code>stripTrailingSlashes</code></strong> – {boolean} – If true then the trailing slashes from any calculated URL will be stripped. (Defaults to true.)</li> </ul>  |

### Returns

| Type | Description |
| :--: | :--: |
| Object | <p>A resource &quot;class&quot; object with methods for the default set of resource actions optionally extended with custom <code>actions</code>. The default set contains these actions:</p> <pre><code class="lang-js">{ &#39;get&#39;:    {method:&#39;GET&#39;}, &#39;save&#39;:   {method:&#39;POST&#39;}, &#39;query&#39;:  {method:&#39;GET&#39;, isArray:true}, &#39;remove&#39;: {method:&#39;DELETE&#39;}, &#39;delete&#39;: {method:&#39;DELETE&#39;} }; </code></pre> <p>  Calling these methods invoke an (<code>$http</code>)[api/ng/service/$http] with the specified http method, destination and parameters. When the data is returned from the server then the object is an instance of the resource class. The actions <code>save</code>, <code>remove</code> and <code>delete</code> are available on it as  methods with the <code>$</code> prefix. This allows you to easily perform CRUD operations (create, read, update, delete) on server-side data like this:</p> <pre><code class="lang-js">var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;}); var user = User.get({id:123}, function() { user.abc = true; user.$save(); }); </code></pre> <p>  It is important to realize that invoking a $resource object method immediately returns an empty reference (object or array depending on <code>isArray</code>). Once the data is returned from the server the existing reference is populated with the actual data. This is a useful trick since usually the resource is assigned to a model which is then rendered by the view. Having an empty object results in no rendering, once the data arrives from the server then the object is populated with the data and the view automatically re-renders itself showing the new data. This means that in most cases one never has to write a callback function for the action methods.</p> <p>  The action methods on the class object or instance object can be invoked with the following parameters:</p> <ul> <li>HTTP GET &quot;class&quot; actions: <code>Resource.action([parameters], [success], [error])</code></li> <li>non-GET &quot;class&quot; actions: <code>Resource.action([parameters], postData, [success], [error])</code></li> <li><p>non-GET instance actions:  <code>instance.$action([parameters], [success], [error])</code></p> <p>Success callback is called with (value, responseHeaders) arguments. Error callback is called with (httpResponse) argument.</p> <p>Class actions return empty instance (with additional properties below). Instance actions return promise of the action.</p> <p>The Resource instances and collection have these additional properties:</p> </li> <li><p><code>$promise</code>: the (promise)[api/ng/service/$q] of the original server interaction that created this instance or collection.</p> <p>On success, the promise is resolved with the same resource instance or collection object, updated with data from server. This makes it easy to use in (resolve section of $routeProvider.when())[api/ngRoute/provider/$routeProvider] to defer view rendering until the resource(s) are loaded.</p> <p>On failure, the promise is resolved with the (http response)[api/ng/service/$http] object, without the <code>resource</code> property.</p> <p>If an interceptor object was provided, the promise will instead be resolved with the value returned by the interceptor.</p> </li> <li><p><code>$resolved</code>: <code>true</code> after first server interaction is completed (either with success or rejection), <code>false</code> before that. Knowing if the Resource has been resolved is useful in data-binding.</p> </li> </ul>  |








