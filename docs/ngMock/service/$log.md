



# $log











Mock implementation of (<code>$log</code>)[api/ng/service/$log] that gathers all logged messages in arrays
(one array per logging level). These arrays are exposed as `logs` property of each of the
level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.







  




## Methods
### reset
Reset all of the logging arrays to empty.








### assertEmpty
Assert that all of the logging methods have no logged messages. If any messages are present,
an exception is thrown.











## Properties
### log.logs

| Type | Description |
| :--: | :--: |
|  | <p>Array of messages logged using (<code>log()</code>)[api/ng/service/$log#log].</p>  |
  

### info.logs

| Type | Description |
| :--: | :--: |
|  | <p>Array of messages logged using (<code>info()</code>)[api/ng/service/$log#info].</p>  |
  

### warn.logs

| Type | Description |
| :--: | :--: |
|  | <p>Array of messages logged using (<code>warn()</code>)[api/ng/service/$log#warn].</p>  |
  

### error.logs

| Type | Description |
| :--: | :--: |
|  | <p>Array of messages logged using (<code>error()</code>)[api/ng/service/$log#error].</p>  |
  

### debug.logs

| Type | Description |
| :--: | :--: |
|  | <p>Array of messages logged using (<code>debug()</code>)[api/ng/service/$log#debug].</p>  |
  





