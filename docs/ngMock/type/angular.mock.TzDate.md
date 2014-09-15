



# angular.mock.TzDate








*NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.

Mock of the Date type which has its timezone specified via constructor arg.

The main purpose is to create Date-like instances with timezone fixed to the specified timezone
offset, so that we can test code that depends on local timezone settings without dependency on
the time zone settings of the machine where the code is running.







  

## Usage
```js
angular.mock.TzDate(offset, timestamp);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| offset | number | <p>Offset of the <em>desired</em> timezone in hours (fractions will be honored)</p>  |
| timestamp | (number&#124;string) | <p>Timestamp representing the desired time in <em>UTC</em></p>  |










