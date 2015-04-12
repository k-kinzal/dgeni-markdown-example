



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
  * `'hh'`: Hour in AM/PM, padded (01-12)
  * `'h'`: Hour in AM/PM, (1-12)
  * `'mm'`: Minute in hour, padded (00-59)
  * `'m'`: Minute in hour (0-59)
  * `'ss'`: Second in minute, padded (00-59)
  * `'s'`: Second in minute (0-59)
  * `'sss'`: Millisecond in second, padded (000-999)
  * `'a'`: AM/PM marker
  * `'Z'`: 4 digit (+sign) representation of the timezone offset (-1200-+1200)
  * `'ww'`: Week of year, padded (00-53). Week 01 is the week with the first Thursday of the year
  * `'w'`: Week of year (0-53). Week 1 is the week with the first Thursday of the year
  * `'G'`, `'GG'`, `'GGG'`: The abbreviated form of the era string (e.g. 'AD')
  * `'GGGG'`: The long form of the era string (e.g. 'Anno Domini')

  `format` string can also be one of the following predefined
  (localizable formats)[guide/i18n]:

  * `'medium'`: equivalent to `'MMM d, y h:mm:ss a'` for en_US locale
    (e.g. Sep 3, 2010 12:05:08 PM)
  * `'short'`: equivalent to `'M/d/yy h:mm a'` for en_US  locale (e.g. 9/3/10 12:05 PM)
  * `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` for en_US  locale
    (e.g. Friday, September 3, 2010)
  * `'longDate'`: equivalent to `'MMMM d, y'` for en_US  locale (e.g. September 3, 2010)
  * `'mediumDate'`: equivalent to `'MMM d, y'` for en_US  locale (e.g. Sep 3, 2010)
  * `'shortDate'`: equivalent to `'M/d/yy'` for en_US locale (e.g. 9/3/10)
  * `'mediumTime'`: equivalent to `'h:mm:ss a'` for en_US locale (e.g. 12:05:08 PM)
  * `'shortTime'`: equivalent to `'h:mm a'` for en_US locale (e.g. 12:05 PM)

  `format` string can contain literal values. These need to be escaped by surrounding with single quotes (e.g.
  `"h 'in the morning'"`). In order to output a single quote, escape it - i.e., two single quotes in a sequence
  (e.g. `"h 'o''clock'"`).









 ## Usage
### In HTML Template Binding


```html
{{ date_expression | date : date : format : timezone}}
```

### In JavaScript

```js
$filter('date')(date, format, timezone)
```



### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| date | (Date&#124;number&#124;string) | <p>Date to format either as Date object, milliseconds (string or number) or various ISO 8601 datetime string formats (e.g. yyyy-MM-ddTHH:mm:ss.sssZ and its shorter versions like yyyy-MM-ddTHH:mmZ, yyyy-MM-dd or yyyyMMddTHHmmssZ). If no timezone is specified in the string input, the time is considered to be in the local timezone.</p>  |
| format | string= | <p>Formatting rules (see Description). If not specified, <code>mediumDate</code> is used.</p>  |
| timezone | string= | <p>Timezone to be used for formatting. It understands UTC/GMT and the continental US time zone abbreviations, but for general use, use a time zone offset, for example, <code>&#39;+0430&#39;</code> (4 hours, 30 minutes east of the Greenwich meridian) If not specified, the timezone of the browser will be used.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string | <p>Formatted string or the input if input is not recognized as date/millis.</p>  |




