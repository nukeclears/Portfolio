(()=>{"use strict";var n={854:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(645),a=e.n(r),i=e(667),o=e.n(i),s=new URL(e(644),e.b),d=a()((function(n){return n[1]})),l=o()(s);d.push([n.id,"/*! tailwindcss v2.2.7 | MIT License | https://tailwindcss.com */\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n  margin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n  font-family: system-ui, -apple-system, /* Firefox supports this but not yet `system-ui` */ 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton {\n  -webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n/**\nRestore the focus styles unset by the previous rule.\n*/\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n  padding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 1 */\n  line-height: 1.5;\n  /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: currentColor;\n  /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #a3a3a3;\n}\ninput:-ms-input-placeholder,\ntextarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #a3a3a3;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #a3a3a3;\n}\nbutton {\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n[hidden] {\n  display: none;\n}\n*,\n::before,\n::after {\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 229, 229, var(--tw-border-opacity));\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.btn {\n  border-radius: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.blocks_block {\n  height: 16rem;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.blocks_block:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n}\n.blocks_block {\n  border-radius: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.dark .blocks_block {\n  --tw-bg-opacity: 1;\n  background-color: rgba(10, 10, 10, var(--tw-bg-opacity));\n}\n.blocks_block {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.title_line {\n  margin-bottom: 0.75rem;\n  height: 0.125rem;\n  width: 100%;\n  --tw-bg-opacity: 1;\n  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n.dark .title_line {\n  --tw-bg-opacity: 1;\n  background-color: rgba(34, 211, 238, var(--tw-bg-opacity));\n}\n.title_line {\n  transition-property: background-color, border-color, color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  transition-duration: 500ms;\n}\n@media (min-width: 1024px) {\n  .title_line {\n    height: 0.25rem;\n  }\n}\n.headline_tag {\n  -webkit-animation: gradient-x 7s ease;\n  animation: gradient-x 7s ease;\n  background-image: linear-gradient(to left, var(--tw-gradient-stops));\n  --tw-gradient-from: #ef4444;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(239, 68, 68, 0));\n}\n.dark .headline_tag {\n  --tw-gradient-from: #67e8f9;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(103, 232, 249, 0));\n}\n.headline_tag {\n  --tw-gradient-stops: var(--tw-gradient-from), #991b1b, var(--tw-gradient-to, rgba(153, 27, 27, 0));\n}\n.dark .headline_tag {\n  --tw-gradient-stops: var(--tw-gradient-from), #ecfeff, var(--tw-gradient-to, rgba(236, 254, 255, 0));\n}\n.headline_tag {\n  --tw-gradient-to: #dc2626;\n}\n.dark .headline_tag {\n  --tw-gradient-to: #67e8f9;\n}\n.headline_tag {\n  background-size: 200%;\n  -webkit-background-clip: text;\n  background-clip: text;\n  background-position: right;\n  text-align: left;\n  font-family: Montserrat, sans-serif;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: transparent;\n}\n@media (min-width: 1024px) {\n  .headline_tag {\n    text-align: right;\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n}\n.section_title {\n  display: inline-block;\n  -webkit-animation: gradient-x 7s ease;\n  animation: gradient-x 7s ease;\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n  --tw-gradient-from: #ef4444;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(239, 68, 68, 0));\n  --tw-gradient-stops: var(--tw-gradient-from), #ec4899, var(--tw-gradient-to, rgba(236, 72, 153, 0));\n  --tw-gradient-to: #06b6d4;\n  background-size: 200%;\n  -webkit-background-clip: text;\n  background-clip: text;\n  background-position: right;\n  font-family: Montserrat, sans-serif;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: transparent;\n}\n@media (min-width: 1024px) {\n  .section_title {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n}\n.primary_background {\n  -webkit-animation: gradient-x 7s ease;\n  animation: gradient-x 7s ease;\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n  --tw-gradient-from: #f5f5f5;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(245, 245, 245, 0));\n}\n.dark .primary_background {\n  --tw-gradient-from: #0A0A0A;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(10, 10, 10, 0));\n  --tw-gradient-stops: var(--tw-gradient-from), #ef4444, var(--tw-gradient-to, rgba(239, 68, 68, 0));\n}\n.primary_background {\n  --tw-gradient-to: #22d3ee;\n}\n.dark .primary_background {\n  --tw-gradient-to: #ec4899;\n}\n.primary_background {\n  background-size: 200%;\n  background-position: right;\n}\n.image_responsive {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.block_item {\n  display: flex;\n  height: 24rem;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.block_item:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n}\n.block_item {\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 0.75rem;\n  border-width: 2px;\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.block_item .block_top {\n  overflow: hidden;\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n.block_item .block_top .block_image {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  opacity: 0.9;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  transition-duration: 200ms;\n}\n@media (min-width: 1024px) {\n  .block_item .block_top .block_image {\n    opacity: 0.8;\n  }\n}\n.block_item .block_bot {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  border-bottom-right-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n@media (min-width: 1024px) {\n  .block_item .block_bot {\n    padding-left: 3rem;\n    padding-right: 3rem;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n}\n.block_item .block_bot .block_title {\n  -webkit-user-select: all;\n  -moz-user-select: all;\n  user-select: all;\n  font-family: Montserrat, sans-serif;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n@media (min-width: 1024px) {\n  .block_item .block_bot .block_title {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n.block_item .block_bot .block_text {\n  -webkit-user-select: all;\n  -moz-user-select: all;\n  user-select: all;\n  font-family: Noto Sans, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n@media (min-width: 1024px) {\n  .block_item .block_bot .block_text {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n}\n.info_image {\n  background: url("+l+");\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.-ml-4 {\n  margin-left: -1rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.dark .dark\\:block {\n  display: block;\n}\n.dark .dark\\:hidden {\n  display: none;\n}\n.h-0 {\n  height: 0px;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-48 {\n  height: 12rem;\n}\n.h-64 {\n  height: 16rem;\n}\n.h-96 {\n  height: 24rem;\n}\n.h-0\\.5 {\n  height: 0.125rem;\n}\n.h-full {\n  height: 100%;\n}\n.w-1 {\n  width: 0.25rem;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-72 {\n  width: 18rem;\n}\n.w-full {\n  width: 100%;\n}\n.transform {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n}\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes ping {\n  75%,\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes ping {\n  75%,\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes bounce {\n  0%,\n  100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@keyframes bounce {\n  0%,\n  100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@-webkit-keyframes dropin {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(1.1);\n  }\n}\n@keyframes dropin {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(1.1);\n  }\n}\n@-webkit-keyframes gradient-x {\n  0% {\n    background-size: 200% 200%;\n    background-position: left center;\n  }\n  100% {\n    background-size: 200% 200%;\n    background-position: right center;\n  }\n}\n@keyframes gradient-x {\n  0% {\n    background-size: 200% 200%;\n    background-position: left center;\n  }\n  100% {\n    background-size: 200% 200%;\n    background-position: right center;\n  }\n}\n@-webkit-keyframes gradient-y {\n  0% {\n    background-size: 200% 200%;\n    background-position: bottom center;\n  }\n  100% {\n    background-size: 200% 200%;\n    background-position: top center;\n  }\n}\n@keyframes gradient-y {\n  0% {\n    background-size: 200% 200%;\n    background-position: bottom center;\n  }\n  100% {\n    background-size: 200% 200%;\n    background-position: top center;\n  }\n}\n.animate-ping {\n  -webkit-animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n.animate-dropin {\n  -webkit-animation: dropin 1s ease-out;\n  animation: dropin 1s ease-out;\n}\n.animate-gradient-x {\n  -webkit-animation: gradient-x 7s ease;\n  animation: gradient-x 7s ease;\n}\n.select-all {\n  -webkit-user-select: all;\n  -moz-user-select: all;\n  user-select: all;\n}\n.grid-flow-row {\n  grid-auto-flow: row;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.gap-12 {\n  gap: 3rem;\n}\n.gap-16 {\n  gap: 4rem;\n}\n.gap-24 {\n  gap: 6rem;\n}\n.self-center {\n  align-self: center;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-b-xl {\n  border-bottom-right-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-red-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, var(--tw-border-opacity));\n}\n.dark .dark\\:border-cyan-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(6, 182, 212, var(--tw-border-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(245, 245, 245, var(--tw-bg-opacity));\n}\n.bg-gray-1000 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(10, 10, 10, var(--tw-bg-opacity));\n}\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(38, 38, 38, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(23, 23, 23, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-gray-1000 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(10, 10, 10, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-cyan-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(34, 211, 238, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-cyan-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(6, 182, 212, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-opacity-20 {\n  --tw-bg-opacity: 0.2;\n}\n.bg-opacity-70 {\n  --tw-bg-opacity: 0.7;\n}\n.hover\\:bg-opacity-0:hover {\n  --tw-bg-opacity: 0;\n}\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.bg-gradient-to-l {\n  background-image: linear-gradient(to left, var(--tw-gradient-stops));\n}\n.from-gray-100 {\n  --tw-gradient-from: #f5f5f5;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(245, 245, 245, 0));\n}\n.from-red-500 {\n  --tw-gradient-from: #ef4444;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(239, 68, 68, 0));\n}\n.from-cyan-200 {\n  --tw-gradient-from: #a5f3fc;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(165, 243, 252, 0));\n}\n.dark .dark\\:from-gray-1000 {\n  --tw-gradient-from: #0A0A0A;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(10, 10, 10, 0));\n}\n.dark .dark\\:from-red-500 {\n  --tw-gradient-from: #ef4444;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(239, 68, 68, 0));\n}\n.dark .dark\\:from-cyan-300 {\n  --tw-gradient-from: #67e8f9;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(103, 232, 249, 0));\n}\n.via-red-800 {\n  --tw-gradient-stops: var(--tw-gradient-from), #991b1b, var(--tw-gradient-to, rgba(153, 27, 27, 0));\n}\n.via-pink-500 {\n  --tw-gradient-stops: var(--tw-gradient-from), #ec4899, var(--tw-gradient-to, rgba(236, 72, 153, 0));\n}\n.dark .dark\\:via-red-500 {\n  --tw-gradient-stops: var(--tw-gradient-from), #ef4444, var(--tw-gradient-to, rgba(239, 68, 68, 0));\n}\n.dark .dark\\:via-cyan-50 {\n  --tw-gradient-stops: var(--tw-gradient-from), #ecfeff, var(--tw-gradient-to, rgba(236, 254, 255, 0));\n}\n.to-red-600 {\n  --tw-gradient-to: #dc2626;\n}\n.to-cyan-400 {\n  --tw-gradient-to: #22d3ee;\n}\n.to-cyan-500 {\n  --tw-gradient-to: #06b6d4;\n}\n.dark .dark\\:to-cyan-300 {\n  --tw-gradient-to: #67e8f9;\n}\n.dark .dark\\:to-pink-400 {\n  --tw-gradient-to: #f472b6;\n}\n.dark .dark\\:to-pink-500 {\n  --tw-gradient-to: #ec4899;\n}\n.bg-200\\% {\n  background-size: 200%;\n}\n.bg-clip-text {\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.bg-right {\n  background-position: right;\n}\n.object-cover {\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.pt-8 {\n  padding-top: 2rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.font-display {\n  font-family: Montserrat, sans-serif;\n}\n.font-body {\n  font-family: Noto Sans, sans-serif;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\n.font-thin {\n  font-weight: 100;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-black {\n  font-weight: 900;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-none {\n  line-height: 1;\n}\n.text-transparent {\n  color: transparent;\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.dark .dark\\:text-cyan-500 {\n  --tw-text-opacity: 1;\n  color: rgba(6, 182, 212, var(--tw-text-opacity));\n}\n.dark .dark\\:text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.dark .dark\\:text-black {\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.opacity-90 {\n  opacity: 0.9;\n}\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n*,\n::before,\n::after {\n  --tw-shadow: 0 0 #0000;\n}\n*,\n::before,\n::after {\n  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: background-color, border-color, color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n@media (min-width: 1024px) {\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n  .lg\\:-mb-1 {\n    margin-bottom: -0.25rem;\n  }\n  .lg\\:h-1 {\n    height: 0.25rem;\n  }\n  .lg\\:h-auto {\n    height: auto;\n  }\n  .lg\\:w-96 {\n    width: 24rem;\n  }\n  .lg\\:w-auto {\n    width: auto;\n  }\n  .lg\\:w-full {\n    width: 100%;\n  }\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n  .lg\\:gap-0 {\n    gap: 0px;\n  }\n  .lg\\:gap-24 {\n    gap: 6rem;\n  }\n  .lg\\:gap-36 {\n    gap: 9rem;\n  }\n  .lg\\:gap-48 {\n    gap: 12rem;\n  }\n  .lg\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .lg\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n  .lg\\:px-14 {\n    padding-left: 3.5rem;\n    padding-right: 3.5rem;\n  }\n  .lg\\:pt-12 {\n    padding-top: 3rem;\n  }\n  .lg\\:text-right {\n    text-align: right;\n  }\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .lg\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n  .lg\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n  .lg\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n  .lg\\:text-8xl {\n    font-size: 6rem;\n    line-height: 1;\n  }\n  .lg\\:opacity-80 {\n    opacity: 0.8;\n  }\n}\n",""]);const c=d},588:(n,t,e)=>{e.d(t,{Z:()=>C});var r=e(645),a=e.n(r),i=e(667),o=e.n(i),s=new URL(e(247),e.b),d=new URL(e(782),e.b),l=new URL(e(252),e.b),c=new URL(e(548),e.b),g=new URL(e(540),e.b),m=new URL(e(474),e.b),f=new URL(e(807),e.b),b=new URL(e(81),e.b),p=new URL(e(412),e.b),h=a()((function(n){return n[1]})),u=o()(s),w=o()(d),y=o()(l),k=o()(c),v=o()(g),x=o()(m),z=o()(f),_=o()(b),S=o()(p);h.push([n.id,"/* purgecss start ignore */\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+u+") format('ttf');\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+w+") format('ttf');\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+y+") format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+k+") format('ttf');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+v+") format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+x+") format('ttf');\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+z+") format('ttf');\n  font-weight: 100;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Noto Sans, sans-serif';\n  src: url("+_+") format('ttf');\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Noto Sans, sans-serif';\n  src: url("+S+") format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n/* purgecss end ignore */\n",""]);const C=h},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&a[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),t.push(d))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},o=[],s=0;s<n.length;s++){var d=n[s],l=r.base?d[0]+r.base:d[0],c=i[l]||0,g="".concat(l," ").concat(c);i[l]=c+1;var m=e(g),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==m?(t[m].references++,t[m].updater(f)):t.push({identifier:g,updater:a(f,r),references:1}),o.push(g)}return o}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=e(i[o]);t[s].references--}for(var d=r(n,a),l=0;l<i.length;l++){var c=e(i[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=d}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r=e.css,a=e.media,i=e.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},644:(n,t,e)=>{n.exports=e.p+"c3b4a129e435251e33fd.png"},247:(n,t,e)=>{n.exports=e.p+"46e8b3d6aad654578958.ttf"},782:(n,t,e)=>{n.exports=e.p+"079ca05d3ded9bc107ab.ttf"},474:(n,t,e)=>{n.exports=e.p+"02afb26fe72fcc052988.ttf"},548:(n,t,e)=>{n.exports=e.p+"e2d60bc49517598c0ce8.ttf"},540:(n,t,e)=>{n.exports=e.p+"3cd786652b8a2e9d41f2.ttf"},252:(n,t,e)=>{n.exports=e.p+"fa8441f345d83a0bc4ec.ttf"},807:(n,t,e)=>{n.exports=e.p+"4a799b111f608dbf4f89.ttf"},81:(n,t,e)=>{n.exports=e.p+"66ab29744a551a59e9f5.ttf"},412:(n,t,e)=>{n.exports=e.p+"fa11626fafb16c629d2c.ttf"}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{var n=e(379),t=e.n(n),r=e(795),a=e.n(r),i=e(569),o=e.n(i),s=e(565),d=e.n(s),l=e(216),c=e.n(l),g=e(589),m=e.n(g),f=e(854),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=o().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=c(),t()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var p=e(588),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=c(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var u=e(644),w=document.getElementsByClassName("block_image");document.getElementsByClassName("info_image"),document.addEventListener("DOMContentLoaded",(function(){var n,t,e;n=u,t=w,e="block_image",Array.from(t).forEach((function(t){var r=new Image;r.src=n,r.loading="lazy",r.alt=e,t.appendChild(r)}))}),!1);var y=document.getElementById("body");"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?y.classList.add("dark"):y.classList.remove("dark"),localStorage.theme="light",localStorage.theme="dark",localStorage.removeItem("theme"),document.getElementById("darktoggle").addEventListener("click",(function(){y.classList.contains("dark")?y.classList.remove("dark"):y.classList.add("dark")}))})()})();