



# $swipe











The `$swipe` service is a service that abstracts the messier details of hold-and-drag swipe
behavior, to make implementing swipe-related directives more convenient.

Requires the (`ngTouch`)[api/ngTouch] module to be installed.

`$swipe` is used by the `ngSwipeLeft` and `ngSwipeRight` directives in `ngTouch`, and by
`ngCarousel` in a separate component.

# Usage
The `$swipe` service is an object with a single method: `bind`. `bind` takes an element
which is to be watched for swipes, and an object with four handler functions. See the
documentation for `bind` below.







  




## Methods
### bind
The main method of `$swipe`. It takes an element to be watched for swipe motions, and an
object containing event handlers.
The pointer types that should be used can be specified via the optional
third argument, which is an array of strings `'mouse'` and `'touch'`. By default,
`$swipe` will listen for `mouse` and `touch` events.

The four events are `start`, `move`, `end`, and `cancel`. `start`, `move`, and `end`
receive as a parameter a coordinates object of the form `{ x: 150, y: 310 }`.

`start` is called on either `mousedown` or `touchstart`. After this event, `$swipe` is
watching for `touchmove` or `mousemove` events. These events are ignored until the total
distance moved in either dimension exceeds a small threshold.

Once this threshold is exceeded, either the horizontal or vertical delta is greater.
- If the horizontal distance is greater, this is a swipe and `move` and `end` events follow.
- If the vertical distance is greater, this is a scroll, and we let the browser take over.
  A `cancel` event is sent.

`move` is called on `mousemove` and `touchmove` after the above logic has determined that
a swipe is in progress.

`end` is called when a swipe is successfully completed with a `touchend` or `mouseup`.

`cancel` is called either on a `touchcancel` from the browser, or when we begin scrolling
as described above.














