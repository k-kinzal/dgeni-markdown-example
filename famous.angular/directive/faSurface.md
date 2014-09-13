



# faSurface








This directive is used to create general Famo.us surfaces, which are the
leaf nodes of the scene graph.  The content inside
surfaces is what gets rendered to the screen.
This is where you can create form elements, attach
images, or output raw text content with one-way databinding {{lb}}{{rb}}.
You can include entire complex HTML snippets inside a faSurface, including
ngIncludes or custom (vanilla Angular) directives.








## Directive Info


* This directive executes at priority level 0.


## Usage


```
```html
<fa-surface>
  Here's some data-bound content {{lb}}myScopeVariable{{rb}}
</fa-surface>
```
```








