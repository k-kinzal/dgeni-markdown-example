



# $anchorScroll


* [$anchorScrollProvider](api/ng/provider/$anchorScrollProvider)








When called, it scrolls to the element related to the specified `hash` or (if omitted) to the
current value of ($location.hash())[api/ng/service/$location#hash], according to the rules specified
in the
[HTML5 spec](http://dev.w3.org/html5/spec/Overview.html#the-indicated-part-of-the-document).

It also watches the ($location.hash())[api/ng/service/$location#hash] and automatically scrolls to
match any anchor whenever it changes. This can be disabled by calling
($anchorScrollProvider.disableAutoScrolling())[api/ng/provider/$anchorScrollProvider#disableAutoScrolling].

Additionally, you can use its (yOffset)[api/ng/service/$anchorScroll#yOffset] property to specify a
vertical scroll-offset (either fixed or dynamic).







## Dependencies


* $window
* $location
* $rootScope



  

## Usage
```js
$anchorScroll([hash]);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| hash | string= | <p>The hash specifying the element to scroll to. If omitted, the value of ($location.hash())[api/ng/service/$location#hash] will be used.</p>  |







## Properties
### yOffset

| Type | Description |
| :--: | :--: |
| (number&#124;function&#124;jqLite) | <p>If set, specifies a vertical scroll-offset. This is often useful when there are fixed positioned elements at the top of the page, such as navbars, headers etc.</p> <p><code>yOffset</code> can be specified in various ways:</p> <ul> <li><strong>number</strong>: A fixed number of pixels to be used as offset.<br /><br /></li> <li><strong>function</strong>: A getter function called everytime <code>$anchorScroll()</code> is executed. Must return a number representing the offset (in pixels).<br /><br /></li> <li><strong>jqLite</strong>: A jqLite/jQuery element to be used for specifying the offset. The distance from the top of the page to the element&#39;s bottom will be used as offset.<br /> <strong>Note</strong>: The element will be taken into account only as long as its <code>position</code> is set to <code>fixed</code>. This option is useful, when dealing with responsive navbars/headers that adjust their height and/or positioning according to the viewport&#39;s size.</li> </ul> <p><br /></p> <div class="alert alert-warning"> In order for <code>yOffset</code> to work properly, scrolling should take place on the document&#39;s root and not some child element. </div> |
  





