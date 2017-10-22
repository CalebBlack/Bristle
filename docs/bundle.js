!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=27)}([function(e,t){const n=["string","boolean","number"],r={typeattribute:"type"};class i{constructor(e,t,r){if(this.classes=[],this.addClass=this.addClass.bind(this),this.onEvent=this.onEvent.bind(this),this.parentRendered=this.parentRendered.bind(this),this.parentAppended=this.parentAppended.bind(this),this.children=[],this.value=null,this.render=this.render.bind(this),this.appendTo=this.appendTo.bind(this),this.remove.bind(this),this.setAttributes=this.setAttributes.bind(this),"string"!=typeof e&&"object"!=typeof e)throw this.error("Invalid Element Type!");if(this.initialize.bind(this)(e),r&&this.appendTo(r,!1),this.type=e,n.includes(typeof t)||t instanceof HTMLElement||t instanceof i||null===t||void 0===t)this.render(t);else{if("function"!=typeof t)throw this.error("Invalid Render Value.");t.bind(this)(this.render)}}initialize(e){if("string"==typeof e){if(e.length<=0)throw this.error("Element Type too short!");this.element=document.createElement(e)}else if("object"==typeof e){if(!e.hasOwnProperty("type")||"string"!=typeof e.type||e.type.length<=0)throw this.error("Element Object missing/invalid type key");this.element=document.createElement(e.type);var t=Object.assign({},e);t.hasOwnProperty("class")&&t.class.split(" ").forEach(e=>{this.addClass(e)}),delete t.class,delete t.type,this.setAttributes(t)}}parentRendered(){this.render()}addClass(e){if("string"!=typeof e||e.length<=0)throw this.error("Invalid Class Name!");this.classes.includes(e)||(this.classes.push(e),this.render())}setAttributes(e){Object.entries(e).forEach(e=>{r.hasOwnProperty(e[0].toLowerCase())?this.element.setAttribute(r[e[0].toLowerCase()],e[1]):this.element.setAttribute(e[0],e[1])})}render(e){var t=e||this.value;if(Array.isArray(t)){var r=[];t.forEach(e=>{e instanceof HTMLElement?(this.children.push(e),this.element.appendChild(HTMLElement)):n.includes(typeof e)&&r.push(e)}),r.length>0&&(this.element.textContent=r.join(""))}else e instanceof i?(this.element.appendChild(e.element),e.parent=this.element,this.addChild(e)):e instanceof HTMLElement?this.element.appendChild(element.cloneNode(!0)):(null!==e&&void 0!==e&&n.includes(typeof e)&&(this.value=e),this.hasOwnProperty("parent")&&n.includes(typeof this.value)&&(this.element.textContent=this.value));this.children.forEach(e=>{e instanceof i?e.parentRendered():e instanceof HTMLElement&&this.element.appendChild(e)}),this.classes.length>0&&(this.element.className=this.classes.join(" "))}appendTo(e,t=!0){if(e instanceof HTMLElement)this.parent=e;else{if(!(e instanceof i))throw this.error("Invalid Parent to Append To!");this.parent=e.element,e.children.includes(this)||e.children.push(this)}this.parent.appendChild(this.element),!0===t&&this.render(),this.children.forEach(e=>{e instanceof i&&e.parentAppended()})}onEvent(e,t){if("string"!=typeof e||e.length<=0)throw this.error("Invalid Event name!");if("function"!=typeof t)throw this.error("Invalid Function Input");this.element.addEventListener(e,t)}parentAppended(){this.parent.appendChild(this.element),this.children.forEach(e=>{e instanceof i&&e.parentAppended()})}remove(){this.hasOwnProperty("parent")&&this.parent.removeChild(this.element)}error(e){return new Error("BRISTLE ERROR: "+e)}}e.exports=i},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i),s=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# "+("sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e)))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=f[r.id];if(i){i.refs++;for(s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(h(r.parts[s],t))}else{for(var o=[],s=0;s<r.parts.length;s++)o.push(h(r.parts[s],t));f[r.id]={id:r.id,refs:1,parts:o}}}}function i(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function o(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=m(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),o(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),o(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function h(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var c=y++;n=b||(b=a(t)),r=p.bind(null,n,c,!1),i=p.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n,t),i=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=u.bind(null,n),i=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function p(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=R(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function u(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=g(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var f={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){if(void 0===t[n]){var r=e.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[n]=r}return t[n]}}(function(e){return document.querySelector(e)}),b=null,y=0,w=[],g=n(19);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s];(l=f[a.id]).refs--,o.push(l)}e&&r(i(e,t),t);for(s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete f[l.id]}}}};var R=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(25),s=n(20),a=n(23),l=n(12);n.n(l);const c=new i.a({type:"div",id:"app"});o.a.appendTo(c),s.a.appendTo(c),a.a.appendTo(c),t.a=c},function(e,t,n){const r=n(0);class i{constructor(e,t){this.checkURL=this.checkURL.bind(this),this.setURL=this.setURL.bind(this),this.getMatchingRoute=this.getMatchingRoute.bind(this),this.URL=window.location.pathname,this.bristle=e,this.routes=t,window.addEventListener("hashchange",e=>{this.checkURL()}),this.disableRouteRefreshing.bind(this)(),this.render()}disableRouteRefreshing(){document.addEventListener("click",e=>{let t=e.target;"a"===t.tagName.toLowerCase()&&t.hostname===window.location.hostname&&this.routes.hasOwnProperty(t.pathname||"/")&&(e.preventDefault(),history.pushState(null,null,t.pathname),this.setURL(t.pathname))})}render(){this.bristle.children=[];for(var e=this.bristle.element;e.firstChild;)e.removeChild(e.firstChild);var t=this.getMatchingRoute(this.URL);if(t&&this.routes.hasOwnProperty(t)){var n=this.routes[t];n instanceof HTMLElement?this.bristle.render(n):n instanceof r&&n.appendTo(this.bristle)}}getMatchingRoute(e){var t=this.getParts(e),n=null;return Object.keys(this.routes).forEach(e=>{var r=this.getParts(e);null===n&&this.doRoutePartsMatch(t,r)&&(n=e)}),n}doRoutePartsMatch(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if("*"!==e[n]&&e[n]!==t[n])return console.log("got false"),!1;return!0}getPath(e){if(!Array.isArray(e))throw this.error("Invalid Parts Input");return"/"+e.join("/")}getParts(e){if(e.length<=0)throw this.error("Invalid Path!");return e.split("/").filter(e=>e)}checkURL(){this.URL!==window.location.pathname&&this.setURL(window.location.pathname)}setURL(e){this.URL=e,this.render()}error(e){return new Error("BristleRouter Error: "+e)}}e.exports=function(e){var t=new r({type:"div",class:"bristle-router"}),n=Object.assign({},e);return new i(t,n),t}},function(e,t,n){(e.exports=n(1)(void 0)).push([e.i,"html, body {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  width: 100vw;\n  height: 100vh;\n}\n#app {\n  font-family: 'Open Sans', sans-serif;\n  width: 100%;\n  height: 100%;\n  /*background-color: #cecece;*/\n  background: linear-gradient(to top, #eaeaea, white);\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n",""])},function(e,t,n){(e.exports=n(1)(void 0)).push([e.i,"main {\n  padding: 10px 40px;\n}\n",""])},function(e,t,n){(e.exports=n(1)(void 0)).push([e.i,".method > * {\n  display: block;\n}\n.method .code {\n  background-color: grey;\n}\n",""])},function(e,t,n){(e.exports=n(1)(void 0)).push([e.i,"footer {\n  font-family: 'PT Serif', serif;\n  opacity: 0.5;\n  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.22), transparent);\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  line-height: 50px;\n  text-align: center;\n  font-size: 1.5em;\n  transition: opacity 0.2s ease;\n}\nfooter:hover {\n  transition: opacity 0.4s ease;\n  opacity: 1;\n}\n",""])},function(e,t,n){(e.exports=n(1)(void 0)).push([e.i,"header {\n  /*background-color: #7d7eb9;*/\n  background: linear-gradient(to top, green, #f6fff6);\n  padding: 10px 40px;\n  border-bottom: 5px solid #e6d8e3;\n}\nheader h1 {\n  font-family: 'PT Serif', serif;\n  margin-top: 2px;\n  color: #3f6469;\n}\n",""])},function(e,t,n){(e.exports=n(1)(void 0)).push([e.i,"div.home {\n  white-space: pre-wrap;\n}\n",""])},function(e,t,n){(e.exports=n(1)(void 0)).push([e.i,"nav ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  color: white;\n}\nnav ul > li {\n  display: inline-block;\n}\nnav ul > li a {\n  padding: 10px 5px;\n  transition: background-color 0.2s ease;\n  border-bottom-right-radius: 6px;\n}\nnav ul > li a:hover {\n  background-color: rgba(255,255,255,0.4);\n}\n",""])},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0;n(2)(r,i);r.locals&&(e.exports=r.locals)},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return e;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),s=n.n(o),a=n(26),l=n(21),c=n(13);n.n(c);const h=new i.a("main");s()({"/BristleJS/":a.a,"/BristleJS/documentation":l.a}).appendTo(h),t.a=h},function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(22),s=new i.a({type:"div",class:"documentation"});new i.a({type:"h1",class:"title"},"Documentation",s),o.a.appendTo(s),t.a=s},function(e,t,n){"use strict";function r(e,t,n){let r=new o.a({type:"div",class:"method"});return new o.a({type:"h3",class:"name"},e,r),new o.a({type:"p",class:"description"},t,r),new o.a({type:"span",class:"code"},n,r),r}var i=n(0),o=n.n(i),s=n(14);n.n(s);const a={render:["Allows you to set the value of a bristle, accepts string, boolean, number. Additionally a DOM element can be passed, which will just append it as a child.","bristle.render('Hello World')"],remove:["Removes the bristle from it's parent element.","bristle.remove()"],appendTo:["Allows you to append a bristle to another Bristle or HTMLElement object","bristle.appendTo(element)"],onEvent:["Allows you to add event listeners to the bristle's DOM element.","bristle.onEvent('click',()=>{alert('clicked!')})"]};var l=new o.a({type:"div",class:"methods"});new o.a("h2","Methods",l),Object.entries(a).forEach(e=>{r(e[0],e[1][0],e[1][1]).appendTo(l)});let c=r("setAttributes","Allows you to modify the attributes of the bristle's DOM element, accepts an object.",'bristle.setAttributes({style:"color:red;"})');new o.a({type:"span",class:"warning"},"WARNING: You will be vulnerable to script injections if you setAttributes with data from unsafe/unsanitized sources.",c),c.appendTo(l),t.a=l},function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(15);n.n(o);const s=new i.a("footer");new i.a({type:"a",href:"https://github.com/CalebBlack/BristleJS/tree/master/docs/src"},"SPA Made with Bristle and BristleRouter! (Source)",s),t.a=s},function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){var t=new i.a("ul");return e.forEach(e=>{let n=new i.a("li",null,t);new i.a("p",e,n)}),t}},function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(28),s=n(16),a=(n.n(s),new i.a("header"));new i.a({type:"a",href:"/BristleJS/"},"BristleJS",new i.a("h1",null,a)),o.a.appendTo(a),t.a=a},function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(24),s=n(17),a=(n.n(s),new i.a({type:"div",class:"home"}));const l=["Lightweight","Less Methods, less obtrusive."],c=["Small/new, less mature than other libraries."];new i.a("h3","Pros:",a),new i.a("p","What's to love about Bristle?",a),n.i(o.a)(l).appendTo(a),new i.a("h3","Cons:",a),new i.a("p","Why you might not choose Bristle",a),n.i(o.a)(c).appendTo(a),t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);window.addEventListener("load",function(){r.a.appendTo(document.body)})},function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(18),s=(n.n(o),new i.a("nav")),a=new i.a("ul",null,s);new i.a({type:"a",href:"/BristleJS/"},"Home",new i.a("li",null,a)),new i.a({type:"a",href:"/BristleJS/documentation"},"Documentation",new i.a("li",null,a)),new i.a({type:"a",href:"https://github.com/CalebBlack/BristleJS"},"Contribute",new i.a("li",null,a)),t.a=s}]);
