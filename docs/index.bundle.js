(()=>{var n={655:()=>{var n=document.getElementById("body");"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.classList.add("dark"):n.classList.remove("dark"),localStorage.theme="light",localStorage.theme="dark",localStorage.removeItem("theme"),document.getElementById("darktoggle").addEventListener("click",(function(){n.classList.contains("dark")?n.classList.remove("dark"):n.classList.add("dark")}))},711:(n,e,t)=>{"use strict";t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"",""]);const i=o},416:(n,e,t)=>{"use strict";t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"",""]);const i=o},807:(n,e,t)=>{"use strict";t.d(e,{Z:()=>M});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),s=new URL(t(247),t.b),l=new URL(t(782),t.b),c=new URL(t(252),t.b),d=new URL(t(548),t.b),f=new URL(t(540),t.b),m=new URL(t(474),t.b),u=new URL(t(199),t.b),h=new URL(t(81),t.b),b=new URL(t(412),t.b),p=o()((function(n){return n[1]})),g=a()(s),y=a()(l),w=a()(c),v=a()(d),k=a()(f),x=a()(m),z=a()(u),S=a()(h),C=a()(b);p.push([n.id,"/*! tailwindcss v2.2.7 | MIT License | https://tailwindcss.com */\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n  margin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n  font-family: system-ui, -apple-system, /* Firefox supports this but not yet `system-ui` */ 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton {\n  -webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n/**\nRestore the focus styles unset by the previous rule.\n*/\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n  padding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 1 */\n  line-height: 1.5;\n  /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: currentColor;\n  /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #a3a3a3;\n}\ninput:-ms-input-placeholder,\ntextarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #a3a3a3;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #a3a3a3;\n}\nbutton {\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n*,\n::before,\n::after {\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 229, 229, var(--tw-border-opacity));\n}\n.table {\n  display: table;\n}\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes ping {\n  75%,\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes ping {\n  75%,\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes bounce {\n  0%,\n  100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@keyframes bounce {\n  0%,\n  100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@-webkit-keyframes dropin {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(1.1);\n  }\n}\n@keyframes dropin {\n  100% {\n    transform: scale(1);\n  }\n  0% {\n    transform: scale(1.1);\n  }\n}\n@-webkit-keyframes gradient-x {\n  0% {\n    background-size: 200% 200%;\n    background-position: left center;\n  }\n  100% {\n    background-size: 200% 200%;\n    background-position: right center;\n  }\n}\n@keyframes gradient-x {\n  0% {\n    background-size: 200% 200%;\n    background-position: left center;\n  }\n  100% {\n    background-size: 200% 200%;\n    background-position: right center;\n  }\n}\n@-webkit-keyframes gradient-y {\n  0% {\n    background-size: 200% 200%;\n    background-position: bottom center;\n  }\n  100% {\n    background-size: 200% 200%;\n    background-position: top center;\n  }\n}\n@keyframes gradient-y {\n  0% {\n    background-size: 200% 200%;\n    background-position: bottom center;\n  }\n  100% {\n    background-size: 200% 200%;\n    background-position: top center;\n  }\n}\n*,\n::before,\n::after {\n  --tw-shadow: 0 0 #0000;\n}\n*,\n::before,\n::after {\n  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+g+") format('ttf');\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+y+") format('ttf');\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+w+") format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+v+") format('ttf');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+k+") format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+x+") format('ttf');\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Montserrat, sans-serif';\n  src: url("+z+") format('ttf');\n  font-weight: 100;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Noto Sans, sans-serif';\n  src: url("+S+") format('ttf');\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Noto Sans, sans-serif';\n  src: url("+C+") format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n",""]);const M=p},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=i[c]||0,f="".concat(c," ").concat(d);i[c]=d+1;var m=t(f),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==m?(e[m].references++,e[m].updater(u)):e.push({identifier:f,updater:o(u,r),references:1}),a.push(f)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var l=r(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},644:(n,e,t)=>{"use strict";n.exports=t.p+"01db224bef4ac428863f.png"},247:(n,e,t)=>{"use strict";n.exports=t.p+"46e8b3d6aad654578958.ttf"},782:(n,e,t)=>{"use strict";n.exports=t.p+"079ca05d3ded9bc107ab.ttf"},474:(n,e,t)=>{"use strict";n.exports=t.p+"02afb26fe72fcc052988.ttf"},548:(n,e,t)=>{"use strict";n.exports=t.p+"e2d60bc49517598c0ce8.ttf"},540:(n,e,t)=>{"use strict";n.exports=t.p+"3cd786652b8a2e9d41f2.ttf"},252:(n,e,t)=>{"use strict";n.exports=t.p+"fa8441f345d83a0bc4ec.ttf"},199:(n,e,t)=>{"use strict";n.exports=t.p+"4a799b111f608dbf4f89.ttf"},81:(n,e,t)=>{"use strict";n.exports=t.p+"66ab29744a551a59e9f5.ttf"},412:(n,e,t)=>{"use strict";n.exports=t.p+"fa11626fafb16c629d2c.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),l=t.n(s),c=t(216),d=t.n(c),f=t(589),m=t.n(f),u=t(807),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var b=t(711),p={};p.styleTagTransform=m(),p.setAttributes=l(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d(),e()(b.Z,p),b.Z&&b.Z.locals&&b.Z.locals;var g=t(416),y={};y.styleTagTransform=m(),y.setAttributes=l(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=d(),e()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;var w=t(644),v=document.getElementsByClassName("block_image"),k=(document.getElementsByClassName("info_image"),document.getElementsByClassName("detail_image"));function x(n,e,t,r){Array.from(e).forEach((function(e){var o=new Image;o.src=n,o.loading="lazy",null!=t&&(o.alt=t),null!=r&&(o.classList=r),e.appendChild(o)}))}document.addEventListener("DOMContentLoaded",(function(){x(w,v,"block image","rounded-xl"),x(w,k,"detail image","w-full object-cover")}),!1),t(655)})()})();