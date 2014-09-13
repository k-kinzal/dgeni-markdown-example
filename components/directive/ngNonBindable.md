

[View Source](http://github.com///tree/master/#L19949)



# ngNonBindable



* directive in module []()






The `ngNonBindable` directive tells Angular not to compile or bind the contents of the current
DOM element. This is useful if the element contains what appears to be Angular directives and
bindings but which should be ignored by Angular. This could be the case if you have a site that
displays snippets of code, for instance.








## Directive Info


* This directive executes at priority level 1000.


## Usage



* as attribute:
    ```
    <ANY>
    ...
    </ANY>
    ```
* as CSS class:
    ```
    
    <ANY class=""> ... </ANY>
    ```







