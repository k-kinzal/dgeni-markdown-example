



# $templateCache











The first time a template is used, it is loaded in the template cache for quick retrieval. You
can load templates directly into the cache in a `script` tag, or by consuming the
`$templateCache` service directly.

Adding via the `script` tag:

```html
  <script type="text/ng-template" id="templateId.html">
    <p>This is the content of the template</p>
  </script>
```

**Note:** the `script` tag containing the template does not need to be included in the `head` of
the document, but it must be a descendent of the ($rootElement)[api/ng/service/$rootElement] (IE,
element with ng-app attribute), otherwise the template will be ignored.

Adding via the `$templateCache` service:

```js
var myApp = angular.module('myApp', []);
myApp.run(function($templateCache) {
  $templateCache.put('templateId.html', 'This is the content of the template');
});
```

To retrieve the template later, simply use it in your HTML:
```html
<div ng-include=" 'templateId.html' "></div>
```

or get it via Javascript:
```js
$templateCache.get('templateId.html')
```

See ($cacheFactory)[api/ng/service/$cacheFactory].







  










