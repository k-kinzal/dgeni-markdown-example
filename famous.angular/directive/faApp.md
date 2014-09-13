



# faApp








This directive is the container and entry point to Famo.us/Angular.  Behind the scenes,
it creates a Famous context and then adds child elements
to that context as they get compiled.  Inside of this directive,
normal HTML content will not get rendered to the screen unless
it is inside of a (fa-surface)[api/famous.angular/directive/faSurface] directive.








## Directive Info


* This directive executes at priority level 0.


## Usage


```
```html
<fa-app ng-controller="MyCtrl">
  <!-- other fa- scene graph components -->
</fa-app>
```
```








