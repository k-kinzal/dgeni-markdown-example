

[View Source](http://github.com///tree/master/#L19623)



# ngInclude



* directive in module []()






Fetches, compiles and includes an external HTML fragment.

By default, the template URL is restricted to the same domain and protocol as the
application document. This is done by calling {@link ng.$sce#getTrustedResourceUrl
$sce.getTrustedResourceUrl} on it. To load templates from other domains or protocols
you may either {@link ng.$sceDelegateProvider#resourceUrlWhitelist whitelist them} or
[wrap them](ng.$sce#trustAsResourceUrl) as trusted values. Refer to Angular's {@link
ng.$sce Strict Contextual Escaping}.

In addition, the browser's
[Same Origin Policy](https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_XMLHttpRequest)
and [Cross-Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/)
policy may further restrict whether the template is successfully loaded.
For example, `ngInclude` won't work for cross-domain requests on all browsers and for `file://`
access on some browsers.








## Directive Info

* This directive creates new scope.
* This directive executes at priority level 400.


## Usage




* as element:(This directive can be used as custom element, but be aware of <a href="guide/ie">IE restrictions</a>).
    ```
    <ng-include
      src=""
      [onload=""]
      [autoscroll=""]>
    ...
    </ng-include>
    ```
* as attribute:
    ```
    <ANY
      ng-include=""
      [onload=""]
      [autoscroll=""]>
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class="ng-include: ; [onload: ;] [autoscroll: ;]"> ... </ANY>
    ```



## Animations
enter - animation is used to bring new content into the browser.
leave - animation is used to animate existing content away.

The enter and leave animation occur concurrently.
{@link module:ngAnimate.$animate Click here } to learn more about the steps involved in the animation.

### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| ngInclude | string | <p>angular expression evaluating to URL. If the source is a string constant, make sure you wrap it in <strong>single</strong> quotes, e.g. <code>src=&quot;&#39;myPartialTemplate.html&#39;&quot;</code>.</p>  |
| onload | string= | <p>Expression to evaluate when a new partial is loaded.</p>  |
| autoscroll | string= | <p>Whether <code>ngInclude</code> should call {@link ng.$anchorScroll $anchorScroll} to scroll the viewport after the content is loaded.</p> <pre><code>             - If the attribute is not set, disable scrolling. - If the attribute is set without value, enable scrolling. - Otherwise enable scrolling only if the expression evaluates to truthy value.</code></pre>  |

## Events
### event:$includeContentRequested

<p>Emitted every time the ngInclude content is requested.</p> 
#### Type:
emit

#### Target:
the scope ngInclude was declared in


### event:$includeContentLoaded

<p>Emitted every time the ngInclude content is reloaded.</p> 
#### Type:
emit

#### Target:
the current ngInclude scope





