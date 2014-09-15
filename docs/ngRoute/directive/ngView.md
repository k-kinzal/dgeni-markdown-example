



# ngView








# Overview
`ngView` is a directive that complements the ($route)[api/ngRoute/service/$route] service by
including the rendered template of the current route into the main layout (`index.html`) file.
Every time the current route changes, the included view changes with it according to the
configuration of the `$route` service.

Requires the (`ngRoute`)[api/ngRoute] module to be installed.








## Directive Info

* This directive creates new scope.
* This directive executes at priority level 400.


## Usage




* as element:(This directive can be used as custom element, but be aware of <a href="guide/ie">IE restrictions</a>).
    ```
    <ng-view
      [onload=""]
      [autoscroll=""]>
    ...
    </ng-view>
    ```
* as attribute:
    ```
    <ANY
      [onload=""]
      [autoscroll=""]>
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class="[onload: ;] [autoscroll: ;]"> ... </ANY>
    ```



## Animations
enter - animation is used to bring new content into the browser.
leave - animation is used to animate existing content away.

The enter and leave animation occur concurrently.
module:ngAnimate.$animate to learn more about the steps involved in the animation.

### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| onload | string= | <p>Expression to evaluate whenever the view updates.</p>  |
| autoscroll | string= | <p>Whether <code>ngView</code> should call ($anchorScroll)[api/ng/service/$anchorScroll] to scroll the viewport after the view is updated.</p> <pre><code>             - If the attribute is not set, disable scrolling. - If the attribute is set without value, enable scrolling. - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated as an expression yields a truthy value.</code></pre>  |

## Events
### $viewContentLoaded

<p>Emitted every time the ngView content is reloaded.</p> 
#### Type:
emit

#### Target:
the current ngView scope





