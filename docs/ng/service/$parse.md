



# $parse


* [$parseProvider](api/ng/provider/$parseProvider)








Converts Angular (expression)[guide/expression] into a function.

```js
  var getter = $parse('user.name');
  var setter = getter.assign;
  var context = {user:{name:'angular'}};
  var locals = {user:{name:'local'}};

  expect(getter(context)).toEqual('angular');
  setter(context, 'newValue');
  expect(context.user.name).toEqual('newValue');
  expect(getter(context, locals)).toEqual('local');
```







  

## Usage
```js
$parse(expression);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| expression | string | <p>String expression to compile.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| function(context, locals) | <p>a function which represents the compiled expression:</p> <ul> <li><code>context</code> – <code>{object}</code> – an object against which any expressions embedded in the strings are evaluated against (typically a scope object).</li> <li><p><code>locals</code> – <code>{object=}</code> – local variables context object, useful for overriding values in <code>context</code>.</p> <p>The returned function also has the following properties:</p> <ul> <li><code>literal</code> – <code>{boolean}</code> – whether the expression&#39;s top-level node is a JavaScript literal.</li> <li><code>constant</code> – <code>{boolean}</code> – whether the expression is made entirely of JavaScript constant literals.</li> <li><code>assign</code> – <code>{?function(context, value)}</code> – if the expression is assignable, this will be set to a function to change its value on the given context.</li> </ul> </li> </ul>  |








