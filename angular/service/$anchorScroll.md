



# $anchorScroll











When called, it checks current value of `$location.hash()` and scrolls to the related element,
according to rules specified in
[Html5 spec](http://dev.w3.org/html5/spec/Overview.html#the-indicated-part-of-the-document).

It also watches the `$location.hash()` and scrolls whenever it changes to match any anchor.
This can be disabled by calling `$anchorScrollProvider.disableAutoScrolling()`.







## Dependencies

* $window* $location* $rootScope



  

## Usage
```js
$anchorScroll();
```














