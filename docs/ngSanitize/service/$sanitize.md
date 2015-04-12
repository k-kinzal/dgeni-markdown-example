



# $sanitize











The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
  then serialized back to properly escaped html string. This means that no unsafe input can make
  it into the returned string, however, since our parser is more strict than a typical browser
  parser, it's possible that some obscure input, which would be recognized as valid HTML by a
  browser, won't make it through the sanitizer. The input may also contain SVG markup.
  The whitelist is configured using the functions `aHrefSanitizationWhitelist` and
  `imgSrcSanitizationWhitelist` of (`$compileProvider`)[api/ng/provider/$compileProvider].







  

## Usage
```js
$sanitize(html);
```





### Arguments

| Param | Type | Details |
| :--: | :--: | :--: |
| html | string | <p>HTML input.</p>  |

### Returns

| Type | Description |
| :--: | :--: |
| string | <p>Sanitized HTML.</p>  |








