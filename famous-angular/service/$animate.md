



# $animate











The Famo.us/Angular implementation of the `$animate` service provides Famo.us animation support for
Angular's core enter, leave, and move structural events.

With the attributes `fa-animate-enter`, `fa-animate-leave`, `fa-animate-move`, you can assign an arbitrary
expression to animation events.

<strong>To notify Famo.us/Angular when your animations are complete, you must do one of two things</strong>:
either pass a `$done` callback in your animation expressions, or design your animation expressions to
evaluate as the numeric duration, in milliseconds, of the animation. If an animation expression
both evaluates as a non-number and fails to invoke the `$done` callback, the animation event pipeline
will not resolve correctly and items will fail to enter, leave, and move correctly.

To inform Famo.us/Angular how to halt any in-progress animation, use the `fa-animate-halt` attribute.

The core Angular animation API is fundamentally CSS class-based. Because only Famo.us Surfaces
support CSS classes, core directives such as `ngClass`, `ngShow`, `ngIf`, and others should be applied
only with directives representing Surfaces (such as (faSurface)[api/famous.angular/directive/faSurface] and
(faImageSurface)[api/famous.angular/directive/faImageSurface]).

The (ngAnimate)[https://docs.angularjs.org/api/ngAnimate] module's documentation lists the set of
core directives supporting $animate events. Please note that the `ngAnimate` module is *not* required
(or recommended) to implement $animate events with Famo.us, but it is compatible and technically effective
on Surfaces.







  










