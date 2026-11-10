# Natural Grid website

Static site for naturalgrid.in: plain HTML, CSS and JavaScript with no build
step, deployed on Vercel.

## Layout

- `*.html`: one file per page. The header and footer markup is repeated in
  every page, so a change there has to be made in all 11 files.
- `css/style.css`: all styles.
- `js/nav.js` runs on every page; each interactive page has its own script
  (`calculator-page.js`, `contact-form.js`, `gallery.js`, `about-slider.js`).
  `calculator.js` and `phone.js` hold the pure logic and are unit tested.
- `images/`: web-sized images (see below).

## Tests

```
node --test
```

Needs Node 18 or newer; nothing to install.

## Adding images

Don't commit camera originals (they were 2-3 MB each). Export photos as WebP
800 px and 1600 px wide, reference both with `srcset` and give the `<img>` its
`width` and `height`; `gallery.html` has examples. Images are cached by
browsers for 7 days, so give a replacement image a new file name.

## Security headers (`vercel.json`)

The Content-Security-Policy only lets the site load its own files plus Google
Fonts, the Google Maps embed and Web3Forms. Anything new from another site,
such as a YouTube embed, analytics or a chat widget, will be blocked until its
origin is added to the matching directive: `frame-src` for embeds,
`script-src` for scripts, `connect-src` for API calls. Inline `<script>` blocks
and `style=""` attributes are blocked too; put code in `js/` and styles in
`css/style.css`.
