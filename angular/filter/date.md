



# date








Formats `date` to a string based on the requested `format`.

  `format` string can be composed of the following elements:

  * `'yyyy'`: 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
  * `'yy'`: 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
  * `'y'`: 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
  * `'MMMM'`: Month in year (January-December)
  * `'MMM'`: Month in year (Jan-Dec)
  * `'MM'`: Month in year, padded (01-12)
  * `'M'`: Month in year (1-12)
  * `'dd'`: Day in month, padded (01-31)
  * `'d'`: Day in month (1-31)
  * `'EEEE'`: Day in Week,(Sunday-Saturday)
  * `'EEE'`: Day in Week, (Sun-Sat)
  * `'HH'`: Hour in day, padded (00-23)
  * `'H'`: Hour in day (0-23)
  * `'hh'`: Hour in am/pm, padded (01-12)
  * `'h'`: Hour in am/pm, (1-12)
  * `'mm'`: Minute in hour, padded (00-59)
  * `'m'`: Minute in hour (0-59)
  * `'ss'`: Second in minute, padded (00-59)
  * `'s'`: Second in minute (0-59)
  * `'.sss' or ',sss'`: Millisecond in second, padded (000-999)
  * `'a'`: am/pm marker
  * `'Z'`: 4 digit (+sign) representation of the timezone offset (-1200-+1200)

  `format` string can also be one of the following predefined
  (localizable formats)[guide/i18n]:

  * `'medium'`: equivalent to `'MMM d, y h:mm:ss a'` for en_US locale
    (e.g. Sep 3, 2010 12:05:08 pm)
  * `'short'`: equivalent to `'M/d/yy h:mm a'` for en_US  locale (e.g. 9/3/10 12:05 pm)
  * `'fullDate'`: equivalent to `'EEEE, MMMM d,y'` for en_US  locale
    (e.g. Friday, September 3, 2010)
  * `'longDate'`: equivalent to `'MMMM d, y'` for en_US  locale (e.g. September 3, 2010)
  * `'mediumDate'`: equivalent to `'MMM d, y'` for en_US  locale (e.g. Sep 3, 2010)
  * `'shortDate'`: equivalent to `'M/d/yy'` for en_US locale (e.g. 9/3/10)
  * `'mediumTime'`: equivalent to `'h:mm:ss a'` for en_US locale (e.g. 12:05:08 pm)
  * `'shortTime'`: equivalent to `'h:mm a'` for en_US locale (e.g. 12:05 pm)

  `format` string can contain literal values. These need to be escaped by surrounding with single quotes (e.g.
  `"h 'in the morning'"`). In order to output a single quote, escape it - i.e., two single quotes in a sequence
  (e.g. `"h 'o''clock'"`).









 ## Usage
### In HTML Template Binding


```html
{{ date_expression | date : date : format}}
```

### In JavaScript

```js
$filter('date')(date, format)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| date | (Date&#124;number&#124;string) | <p>Date to format either as Date object, milliseconds (string or number) or various ISO 8601 datetime string formats (e.g. yyyy-MM-ddTHH:mm:ss.sssZ and its shorter versions like yyyy-MM-ddTHH:mmZ, yyyy-MM-dd or yyyyMMddTHHmmssZ). If no timezone is specified in the string input, the time is considered to be in the local timezone.</p>  |
| format | string= | <p>Formatting rules (see Description). If not specified, <code>mediumDate</code> is used.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string | <p>Formatted string or the input if input is not recognized as date/millis.</p>  |




