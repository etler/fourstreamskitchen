(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2705:function(e,n,i){var r=i(5639).Symbol;e.exports=r},4239:function(e,n,i){var r=i(2705),t=i(9607),a=i(2333),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?t(e):a(e)}},7561:function(e,n,i){var r=i(7990),t=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(t,""):e}},1957:function(e,n,i){var r="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;e.exports=r},9607:function(e,n,i){var r=i(2705),t=Object.prototype,a=t.hasOwnProperty,o=t.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var n=a.call(e,c),i=e[c];try{e[c]=void 0;var r=!0}catch(s){}var t=o.call(e);return r&&(n?e[c]=i:delete e[c]),t}},2333:function(e){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},5639:function(e,n,i){var r=i(1957),t="object"==typeof self&&self&&self.Object===Object&&self,a=r||t||Function("return this")();e.exports=a},7990:function(e){var n=/\s/;e.exports=function(e){for(var i=e.length;i--&&n.test(e.charAt(i)););return i}},3279:function(e,n,i){var r=i(3218),t=i(7771),a=i(4841),o=Math.max,c=Math.min;e.exports=function(e,n,i){var s,l,u,p,m,f,d=0,h=!1,g=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(n){var i=s,r=l;return s=l=void 0,d=n,p=e.apply(r,i)}function w(e){return d=e,m=setTimeout(b,n),h?y(e):p}function S(e){var i=e-f;return void 0===f||i>=n||i<0||g&&e-d>=u}function b(){var e=t();if(S(e))return C(e);m=setTimeout(b,function(e){var i=n-(e-f);return g?c(i,u-(e-d)):i}(e))}function C(e){return m=void 0,v&&s?y(e):(s=l=void 0,p)}function x(){var e=t(),i=S(e);if(s=arguments,l=this,f=e,i){if(void 0===m)return w(f);if(g)return clearTimeout(m),m=setTimeout(b,n),y(f)}return void 0===m&&(m=setTimeout(b,n)),p}return n=a(n)||0,r(i)&&(h=!!i.leading,u=(g="maxWait"in i)?o(a(i.maxWait)||0,n):u,v="trailing"in i?!!i.trailing:v),x.cancel=function(){void 0!==m&&clearTimeout(m),d=0,s=f=l=m=void 0},x.flush=function(){return void 0===m?p:C(t())},x}},3218:function(e){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,n,i){var r=i(4239),t=i(7005);e.exports=function(e){return"symbol"==typeof e||t(e)&&"[object Symbol]"==r(e)}},7771:function(e,n,i){var r=i(5639);e.exports=function(){return r.Date.now()}},3493:function(e,n,i){var r=i(3279),t=i(3218);e.exports=function(e,n,i){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return t(i)&&(a="leading"in i?!!i.leading:a,o="trailing"in i?!!i.trailing:o),r(e,n,{leading:a,maxWait:n,trailing:o})}},4841:function(e,n,i){var r=i(7561),t=i(3218),a=i(3448),o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(t(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=t(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var i=c.test(e);return i||s.test(e)?l(e.slice(2),i?2:8):o.test(e)?NaN:+e}},8312:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3993)}])},1551:function(e,n,i){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,t,a=[],o=!0,c=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(s){c=!0,t=s}finally{try{o||null==i.return||i.return()}finally{if(c)throw t}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,o=(a=i(7294))&&a.__esModule?a:{default:a},c=i(1003),s=i(880),l=i(9246);function u(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var p={};function m(e,n,i,r){if(e&&c.isLocalURL(n)){e.prefetch(n,i,r).catch((function(e){0}));var t=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[n+"%"+i+(t?"%"+t:"")]=!0}}var f=o.default.forwardRef((function(e,n){var i,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,f=e.href,d=e.as,h=e.children,g=e.prefetch,v=e.passHref,y=e.replace,w=e.shallow,S=e.scroll,b=e.locale,C=e.onClick,x=e.onMouseEnter,j=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);i=h,a&&"string"===typeof i&&(i=o.default.createElement("a",null,i));var _,k=!1!==g,B=s.useRouter(),P=o.default.useMemo((function(){var e=t(c.resolveHref(B,f,!0),2),n=e[0],i=e[1];return{href:n,as:d?c.resolveHref(B,d):i||n}}),[B,f,d]),N=P.href,M=P.as,L=o.default.useRef(N),E=o.default.useRef(M);a&&(_=o.default.Children.only(i));var F=a?_&&"object"===typeof _&&_.ref:n,O=t(l.useIntersection({rootMargin:"200px"}),3),T=O[0],A=O[1],I=O[2],R=o.default.useCallback((function(e){E.current===M&&L.current===N||(I(),E.current=M,L.current=N),T(e),F&&("function"===typeof F?F(e):"object"===typeof F&&(F.current=e))}),[M,F,N,I,T]);o.default.useEffect((function(){var e=A&&k&&c.isLocalURL(N),n="undefined"!==typeof b?b:B&&B.locale,i=p[N+"%"+M+(n?"%"+n:"")];e&&!i&&m(B,N,M,{locale:n})}),[M,N,A,b,k,B]);var D={ref:R,onClick:function(e){a||"function"!==typeof C||C(e),a&&_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,i,r,t,a,o,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(i))&&(e.preventDefault(),n[t?"replace":"push"](i,r,{shallow:a,locale:s,scroll:o}))}(e,B,N,M,y,w,S,b)},onMouseEnter:function(e){a||"function"!==typeof x||x(e),a&&_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),c.isLocalURL(N)&&m(B,N,M,{priority:!0})}};if(!a||v||"a"===_.type&&!("href"in _.props)){var G="undefined"!==typeof b?b:B&&B.locale,z=B&&B.isLocaleDomain&&c.getDomainLocale(M,G,B&&B.locales,B&&B.domainLocales);D.href=z||c.addBasePath(c.addLocale(M,G,B&&B.defaultLocale))}return a?o.default.cloneElement(_,D):o.default.createElement("a",Object.assign({},j,D),i)}));n.default=f,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},9246:function(e,n,i){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,t,a=[],o=!0,c=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(s){c=!0,t=s}finally{try{o||null==i.return||i.return()}finally{if(c)throw t}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,i=e.rootMargin,r=e.disabled||!c,u=a.useRef(),p=t(a.useState(!1),2),m=p[0],f=p[1],d=t(a.useState(n?n.current:null),2),h=d[0],g=d[1],v=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||m||e&&e.tagName&&(u.current=function(e,n,i){var r=function(e){var n,i={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===i.root&&e.margin===i.margin}));r?n=s.get(r):(n=s.get(i),l.push(i));if(n)return n;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;n&&i&&n(i)}))}),e);return s.set(i,n={id:i,observer:a,elements:t}),n}(i),t=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),s.delete(t);var n=l.findIndex((function(e){return e.root===t.root&&e.margin===t.margin}));n>-1&&l.splice(n,1)}}}(e,(function(e){return e&&f(e)}),{root:h,rootMargin:i}))}),[r,h,i,m]),y=a.useCallback((function(){f(!1)}),[]);return a.useEffect((function(){if(!c&&!m){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m]),a.useEffect((function(){n&&g(n.current)}),[n]),[v,m,y]};var a=i(7294),o=i(4686),c="undefined"!==typeof IntersectionObserver;var s=new Map,l=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},3993:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return re}});var r=i(5893),t=i(9008),a=i.n(t),o=i(7294),c=i(1664),s=i.n(c),l=i(3493),u=i.n(l),p=i(5512),m=i.n(p),f=i(1379),d=i.n(f),h=function(){return(0,r.jsxs)("div",{className:d().logoWrapper,children:[(0,r.jsx)("img",{className:d().logo,src:"/logo-emblem-small-white.png",alt:"\u56db\u5ddd\u574a"}),(0,r.jsx)("img",{className:d().logo,src:"/logo-white.png",alt:"Four Streams Kitchen"})]})},g=i(9967),v=i.n(g),y=i(605),w=i.n(y),S=function(){var e=(0,o.useRef)(null),n=u()((function(){var n;null===(n=e.current)||void 0===n||n.style.setProperty("--header-scroll-position","".concat(window.scrollY))}),100);return(0,o.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:m().infoBar,children:[(0,r.jsxs)("a",{href:"tel:8316852121",className:m().info,children:[(0,r.jsx)("span",{className:m().infoIcon,children:(0,r.jsx)(v(),{})}),(0,r.jsx)("span",{children:"(831) 685-2121"})]}),(0,r.jsxs)("a",{href:"https://www.google.com/maps?q=7960+Soquel+Drive,+Aptos,+CA+95003",target:"_blank",className:m().info,children:[(0,r.jsx)("span",{className:m().infoIcon,children:(0,r.jsx)(w(),{})}),(0,r.jsx)("span",{children:"7960 Soquel Drive, Aptos, CA 95003"})]})]}),(0,r.jsxs)("div",{className:m().nav,ref:e,children:[(0,r.jsx)(h,{}),(0,r.jsxs)("div",{className:m().linkBar,children:[(0,r.jsx)(s(),{href:"/order",children:(0,r.jsx)("a",{className:m().link,children:"Order Online"})}),(0,r.jsx)(s(),{href:"#hours",children:(0,r.jsx)("a",{className:m().link,children:"Hours"})}),(0,r.jsx)(s(),{href:"#menu",children:(0,r.jsx)("a",{className:m().link,children:"Menu"})}),(0,r.jsx)(s(),{href:"#location",children:(0,r.jsx)("a",{className:m().link,children:"Location"})})]})]})]})},b=i(7286),C=i.n(b),x=i(1653),j=i.n(x),_=function(e){var n=e.id,i=e.children;return(0,r.jsx)("div",{className:j().section,id:n,children:i})},k=function(){return(0,r.jsx)(_,{id:"location",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:C().section,children:[(0,r.jsx)("span",{className:C().title,children:"Location"}),(0,r.jsx)("a",{href:"https://www.google.com/maps?q=7960+Soquel+Drive,+Aptos,+CA+95003",target:"_blank",className:C().info,children:"7960 Soquel Drive, Aptos, CA 95003"}),(0,r.jsx)("span",{className:C().title,children:"Phone"}),(0,r.jsx)("a",{href:"tel:8316852121",className:C().info,children:"(831) 685-2121"})]}),(0,r.jsx)("iframe",{className:C().location,src:"/maps.html"})]})})},B=i(7210),P=i.n(B);function N(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function M(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(n){N(e,n,i[n])}))}return e}var L=[{title:"Appetizers",items:[{name:"Steamed Dumplings (6)",price:6},{name:"Fried Wonton  (6)",price:8},{name:"Egg Roll (4)",price:9.5},{name:"Fried Prawn (6)",price:13},{name:"B.B.Q. Pork",price:10},{name:"B.B.Q Spare Ribs (4)",price:13},{name:"Assorted Appetizers",price:12,description:"For two, a combination of foil wrapped chicken, fried prawn, egg roll, and fried wonton"},{name:"Crab Rangoon (8)",price:10.5,description:"Fried wonton filled with crab meat, cream cheese, green onion, & ginger"},{name:"Pot Sticker (6)",price:9},{name:"Chicken Salad",price:9.5},{name:"Egg Roll, Soup & Steamed Rice Combo",price:6,description:"with any entree order"},{name:"Sesame Ball (8)",price:8.5},{name:"Garlic Chicken Wing (6)",price:8.5}]},{title:"Soup",items:[{name:"Wor Wonton Soup",type:"size",price:{small:9.5,large:13.5}},{name:"Egg Drop Soup",type:"size",price:{small:9.5,large:13.5}},{name:"Hot & Sour Soup",type:"size",price:{small:9.5,large:13.5},spiciness:1},{name:"Pickle Soup",type:"size",price:{small:9.5,large:13.5},spiciness:1},{name:"Pork with Szechuan Spinach Tofu Soup",type:"size",price:{small:9,large:13}},{name:"Sizzling Rice Soup",type:"size",price:{small:9.5,large:14.5}},{name:"Seafood Soup",type:"size",price:{small:11,large:15.5}},{name:"Chicken with Cream Corn Soup",type:"size",price:{small:10.5,large:14.5}},{name:"Miso Seaweed Soup",type:"size",price:{small:9,large:13}}]},{title:"Beef",items:[{name:"Beef with Green Onion & Ginger",price:15.5},{name:"Beef with Vegetables",price:14.5},{name:"Beef with Broccoli",price:14.5},{name:"Beef with Snow Peas",price:14.5},{name:"Szechuan Beef",price:15.5,description:"(or Hunan Beef)",spiciness:1},{name:"Mongolian Beef",price:15.5,spiciness:1},{name:"Beef with Garlic Sauce",price:15.5,spiciness:1},{name:"Beef with Scramble Egg",price:15.5},{name:"Kung Pao Beef",price:15.5,spiciness:1},{name:"Orange Beef",price:15.5},{name:"Beef with Black Pepper",price:16,spiciness:1},{name:"Sizzling Beef",price:16},{name:"Szechuan Boiled Beef",price:17,spiciness:2}]},{title:"Mushu Selection",items:[{name:"Mushu Pork",price:12.5},{name:"Mushu Chicken",price:12.5},{name:"Mushu Beef",price:12.5},{name:"Mushu Shrimp",price:13.75},{name:"Mushu Vegetable",price:12.5}]},{title:"Seafood",items:[{name:"Happy Family",price:17.95,description:"Assorted seafood with vegetables, pork, and beef"},{name:"Kung Pao Three Combo",price:16,description:"Beef, scallops, and prawns sauteed with ginger, onion, and hot pepper in special sauce",spiciness:1},{name:"Honey Walnut Prawns",price:16},{name:"Match Maker's Shrimp",price:17.95,description:"Shrimp with hot mandarin sauce and shrimp in white wine sauce match in one place",spiciness:1},{name:"Sizzling Seafood Combination",price:17.95,description:"Prawns, scallops with baby corn and mushrooms simmered in blended sauce and served with crispy rice in a hot sizzling plate"},{name:"Pepper Salted Prawns",price:17.95},{name:"Garlic Scallops",price:17.95,description:"Fried tender scallops sauteed with garlic, ginger, and green onion in our special sauce and garnished with garden greens",spiciness:1},{name:"Sauteed Scallop & Beef",price:17.95,description:"Scallop, beef, and vegetables sauteed and served on a hot plate"},{name:"Prawns with Assorted Vegetables",price:16.5},{name:"Prawns with Snow Peas",price:16.5},{name:"Garlic Prawns",price:16.5,spiciness:1},{name:"Kung Pao Prawns",price:16.5,spiciness:1},{name:"Prawns with Broccoli",price:16.5},{name:"Prawns with Lobster Sauce",price:16.5},{name:"Sweet & Sour Prawns",price:16.5},{name:"Prawns with Cashew Nuts",price:16.5},{name:"Prawns with Black Bean Sauce",price:16.5},{name:"Curry Prawns",price:16.5},{name:"Prawns with String Bean",price:16.5},{name:"Crystal Szechuan Prawn",price:16.5,spiciness:1},{name:"Fish Fillet with Mixed Vegetables",price:16.5},{name:"Sweet & Sour Fish Fillet",price:16.5},{name:"Fish Fillet in Black Bean Sauce",price:16.5},{name:"Crispy Fish Fillet in Hunan Sauce",price:16.5,spiciness:1},{name:"Snow White Scallop",price:16.5},{name:"Three Ingredients",price:16.5,description:"Prawns, scallops, and chicken breast sauteed with broccoli in a wine soy sauce"},{name:"Szechuan Boiled Fish",price:17,spiciness:2}]},{title:"Pork",items:[{name:"Twice Cooked Pork",price:12.95,spiciness:1},{name:"Sweet & Sour Pork",price:12.95},{name:"B.B.Q. Pork with Vegetables",price:12.95},{name:"Pork Cherry Blossom",price:12.95},{name:"Shredded Pork with Garlic Sauce",price:12.95,spiciness:1},{name:"Mandarin Spareribs",price:12.95},{name:"Pepper Salted Spare Ribs",price:12.95}]},{title:"Poultry",items:[{name:"Orange Chicken",price:13.5},{name:"Rolling Lettuce Chicken",price:13.5,description:"Minced chicken, black mushroom, and water chestnut served with lettuce, plum sauce, and green onion"},{name:"General Tso's Chicken",price:13.5,description:"Chicken lightly breaded with ginger and green onion in chef's special sauce and garnished with broccoli",spiciness:1},{name:"Ginger Chicken",price:13.5,description:"Authentic mandarin cooking, fried tender chicken breast in a fresh ginger and soy sauce"},{name:"Broccoli Chicken in Spicy Garlic Sauce",price:13.5,spiciness:1},{name:"Chicken with Assorted Vegetables",price:13.5},{name:"Double Mushroom Chicken",price:13.5},{name:"Cashew Chicken",price:13.5},{name:"Sweet & Sour Chicken",price:13.5},{name:"Garlic Chicken",price:13.5},{name:"Lemon Chicken",price:13.5},{name:"Snow White Chicken",price:13.5,description:"Snow peas and white chicken meat sauteed with garlic in a special white sauce"},{name:"Curry Chicken",price:13.5},{name:"Black Bean Sauce Chicken",price:13.5},{name:"Kung Pao Chicken",price:13.5,spiciness:1},{name:"Chicken with Green Onion & Ginger",price:13.5},{name:"Sesame Chicken",price:13.5},{name:"Crispy Duck (half)",price:17.5}]},{title:"Egg Foo Yang",items:[{name:"Veggie Egg Foo Yang",price:11.75},{name:"Chicken Egg Foo Yang",price:11.75},{name:"BBQ Pork Egg Foo Yang",price:11.75},{name:"Shrimp Egg Foo Yang",price:12.25}]},{title:"Vegetables",items:[{name:"Broccoli Tofu in Spicy Garlic Sauce",price:12,spiciness:1},{name:"Broccoli with Cashew",price:12},{name:"Deluxe Vegetables (Mixed Veggies)",price:12},{name:"Snow Peas, Water Chestnut",price:12},{name:"Garlic Green Bean",price:12.5},{name:"Snow Peas, Bamboo Shoots, Mushroom",price:12.5},{name:"Black Mushroom with Chinese Green",price:13},{name:"Hot Spicy Eggplant",price:12,spiciness:1},{name:"Spicy Tofu",price:12,spiciness:1},{name:"Tofu with Vegetables",price:12},{name:"Tofu Family Style",price:13,description:"Light fried tofu with shrimp, chicken, beef, pork, and assorted vegetables"},{name:"Kung Pao Tofu",price:12.5,spiciness:1}]},{title:"Chow Mein",items:[{name:"Combination Chow Mein",price:13},{name:"Shrimp Chow Mein",price:13},{name:"Chicken Chow Mein",price:10.5},{name:"Beef Chow Mein",price:10.5},{name:"Pork Chow Mein",price:10.5},{name:"Vegetable Chow Mein",price:10.5},{name:"Pan Fried Noodle Hong Kong Style",price:14,description:"Assorted seafood, chicken, B.B.Q. pork, Chinese veggies with special sauce over grilled noodles"},{name:"Soup Noodle",price:13.5,description:"Chicken or beef, pork, chicken, or extra vegetables. Shrimp or combination $1.00 extra"}]},{title:"Chow Fun",items:[{name:"Combination Chow Fun",price:13},{name:"Beef Chow Fun",price:12},{name:"B.B.Q. Pork Chow Fun",price:12},{name:"Vegetable Chow Fun",price:12}]},{title:"Fried Rice",items:[{name:"Combination Fried Rice",price:13},{name:"Shrimp Fried Rice",price:13},{name:"Chicken Fried Rice",price:10.5},{name:"Beef Fried Rice",price:10.5},{name:"Pork Fried Rice",price:10.5},{name:"Vegetable Fried Rice",price:10.5},{name:"White Rice",price:2},{name:"Brown Rice",price:2.5}]}],E=[{title:"Specials",items:[{name:"Garlic Green Bean",price:9.95},{name:"Mixed Vegetable",price:9.95},{name:"Broccoli with Cashew",price:9.95},{name:"Sweet & Sour Pork (or Chicken)",price:10.25},{name:"Broccoli Beef",price:10.25},{name:"Broccoli Chicken In Spicy Garlic",price:10.25,spiciness:1},{name:"Cashew Chicken or Almond Chicken",price:10.25},{name:"Beef with Vegetables",price:10.25},{name:"Black Bean Sauce Chicken",price:10.25},{name:"Double Mushroom Chicken",price:10.25},{name:"Curry Chicken",price:10.25},{name:"Mongolian Beef",price:10.75,spiciness:1},{name:"Sesame Chicken",price:10.75},{name:"Kung Pao Tofu",price:10.75,spiciness:1},{name:"Kung Pao Chicken",price:10.75,spiciness:1},{name:"Szechuan Beef",price:10.75,spiciness:1},{name:"Chicken with Assorted Vegetables",price:10.75},{name:"Lemon Chicken",price:10.75},{name:"Twice Cooked Pork",price:10.75,spiciness:1},{name:"Black Bean Sauce Prawns",price:12.5},{name:"Kung Pao Prawns",price:12.5,spiciness:1},{name:"Shrimp with Assorted Vegetables",price:12.5},{name:"Szechuan Prawns",price:12.5,spiciness:1},{name:"Broccoli Shrimp",price:12.5},{name:"Sweet & Sour Prawns",price:12.5},{name:"Spicy Garlic Prawns",price:12.5,spiciness:1},{name:"Prawns with Green Beans",price:12.5}],description:"Served with Egg Roll, Hot & Sour Soup or Wonton Soup, Steamed Rice or Fried Rice. Cup Soup $3.00"},{items:[{name:"Chow Mein or Chow Fun",price:12,description:"Choice of Beef, Pork, Chicken, or Vegetables. Shrimp or Combination $1.00 Extra"},{name:"Pan Fried Noodle Hong Kong Style",price:15}],description:"The following items are not served with rice"}],F=function(){var e;return(0,r.jsx)(_,{id:"menu",children:(0,r.jsxs)("div",{className:P().menu,children:[(0,r.jsx)("h2",{className:P().title,children:"Menu"}),(0,r.jsx)("h3",{className:P().mealTitle,children:"Lunch"}),(0,r.jsx)("span",{className:P().description,children:"Monday - Saturday: 11:30am - 2:30pm"}),(0,r.jsx)("div",{className:P().section,children:E.map((function(n){return(0,r.jsx)(O,M({},n),null!==(e=n.title)&&void 0!==e?e:n.description)}))}),(0,r.jsx)("h3",{className:P().mealTitle,children:"Dinner"}),(0,r.jsx)("span",{className:P().description,children:"Sunday - Thursday: 4:30pm - 9:30pm"}),(0,r.jsx)("span",{className:P().description,children:"Friday - Saturday: 4:30pm - 9:30pm"}),(0,r.jsxs)("div",{className:P().section,children:[L.map((function(e){return(0,r.jsx)(O,M({},e),e.title)})),(0,r.jsxs)("span",{className:P().description,children:[(0,r.jsx)("span",{className:P().itemIcons,children:"\ud83c\udf36\ufe0f"})," spicy"]})]})]})})},O=function(e){var n=e.title,i=e.items,t=e.description;return(0,r.jsxs)("section",{children:[(0,r.jsx)("h4",{className:P().sectionTitle,children:n}),(0,r.jsx)("span",{className:P().description,children:t}),(0,r.jsx)("ul",{children:i.map((function(e){return(0,r.jsx)(A,M({},e),e.name)}))})]})},T=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),A=function(e){var n=e.name,i=e.description,t=e.spiciness,a=void 0===t?0:t,o=e.type,c=e.price,s="size"===o?"sm:\xa0".concat(T.format(c.small),"\xa0\xa0\xa0lg:\xa0").concat(T.format(c.large)):T.format(c);return(0,r.jsxs)("li",{children:[(0,r.jsxs)("span",{className:P().item,children:[(0,r.jsxs)("h5",{className:P().itemTitle,children:[n,(0,r.jsx)("span",{className:P().itemIcons,children:new Array(a).fill("\ud83c\udf36\ufe0f")})]}),(0,r.jsx)("span",{className:P().itemPrice,children:s})]}),(0,r.jsx)("span",{className:P().description,children:i})]})},I=i(6025),R=i.n(I),D=function(){return(0,r.jsx)("div",{className:R().hero})},G=i(4032),z=i.n(G),H=i(1710),V=i.n(H),W=function(){return(0,r.jsx)(_,{id:"hours",children:(0,r.jsxs)("div",{className:V().section,children:[(0,r.jsx)("span",{className:V().title,children:"Open 7 Days a week"}),(0,r.jsx)("span",{className:V().hourTitle,children:"Lunch"}),(0,r.jsxs)("div",{className:V().hours,children:[(0,r.jsx)("span",{className:V().days,children:"Monday - Saturday"}),(0,r.jsx)("span",{className:V().time,children:"11:30am - 2:30pm"})]}),(0,r.jsx)("span",{className:V().hourTitle,children:"Dinner"}),(0,r.jsxs)("div",{className:V().hours,children:[(0,r.jsx)("span",{className:V().days,children:"Sunday - Thursday"}),(0,r.jsx)("span",{className:V().time,children:"4:30pm - 9:00pm"})]}),(0,r.jsxs)("div",{className:V().hours,children:[(0,r.jsx)("span",{className:V().days,children:"Friday - Saturday"}),(0,r.jsx)("span",{className:V().time,children:"4:30pm - 9:30pm"})]})]})})},K=i(6838),U=i.n(K),q=i(7266),Y=i.n(q),Z=i(4955),$=i.n(Z);function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}function J(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Q(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Q(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var X=["LDS02238.jpg","LDS02248.jpg","LDS02262.jpg","LDS02270.jpg","LDS02281.jpg","LDS02285.jpg","LDS02299.jpg","LDS02304.jpg","LDS02310.jpg","LDS02312.jpg","LDS02330.jpg","LDS02357.jpg","LDS02367.jpg"],ee=function(e){if(null==e)return[];var n=e.getBoundingClientRect();return J(e.childNodes).flatMap((function(e){if(r=e,null!=(t=HTMLElement)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](r):r instanceof t){var i=e.getBoundingClientRect();if(i.left>=n.left-i.width/2&&i.right<=n.right+i.width/2)return e}var r,t;return[]}))},ne=function(){var e=(0,o.useRef)(null),n=(0,o.useState)(!1),i=n[0],t=n[1],a=(0,o.useState)(!0),c=a[0],s=a[1];(0,o.useEffect)((function(){var n=e.current;if(null!=n){var i=function(){t(n.scrollLeft>10),s(n.scrollLeft+n.clientWidth<n.scrollWidth-10)};return n.addEventListener("scroll",i),function(){return n.removeEventListener("scroll",i)}}}),[e]);return(0,r.jsx)("div",{className:U().section,children:(0,r.jsxs)("div",{className:U().carousel,children:[(0,r.jsx)("div",{className:[U().nav,U().nav_left,i?"":U().nav_hide].join(" "),onClick:function(){var n,i=ee(e.current)[0],r=null!==(n=null===i||void 0===i?void 0:i.previousElementSibling)&&void 0!==n?n:i;null===r||void 0===r||r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},children:(0,r.jsx)(Y(),{})}),(0,r.jsx)("div",{className:[U().nav,U().nav_right,c?"":U().nav_hide].join(" "),onClick:function(){var n,i=ee(e.current),r=i[i.length-1],t=null!==(n=null===r||void 0===r?void 0:r.nextElementSibling)&&void 0!==n?n:r;null===t||void 0===t||t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},children:(0,r.jsx)($(),{})}),(0,r.jsx)("div",{className:U().list,ref:e,children:X.map((function(e){return(0,r.jsx)("img",{src:"/gallery/".concat(e),alt:"Food",loading:"lazy",className:U().image},e)}))})]})})},ie=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:z().main,children:[(0,r.jsx)(S,{}),(0,r.jsx)(D,{}),(0,r.jsx)(W,{}),(0,r.jsx)(ne,{}),(0,r.jsx)(F,{}),(0,r.jsx)(k,{})]})})},re=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Four Streams Kitchen \u56db\u5ddd\u574a - Aptos, CA"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(ie,{})]})}},6838:function(e){e.exports={section:"Gallery_section__fej6k",carousel:"Gallery_carousel__dtKwx",list:"Gallery_list__FVH6v",image:"Gallery_image__u2i3F",nav:"Gallery_nav___W_T6",nav_left:"Gallery_nav_left__Ov1hn",nav_right:"Gallery_nav_right__qHImd",nav_hide:"Gallery_nav_hide__EuAM3"}},5512:function(e){e.exports={nav:"Header_nav__7PnJq",infoBar:"Header_infoBar__lJnbu",info:"Header_info__tpDJe",infoIcon:"Header_infoIcon__QUKFb",linkBar:"Header_linkBar___RIYq",link:"Header_link__m7nt1"}},6025:function(e){e.exports={hero:"Hero_hero__N2yPh"}},1710:function(e){e.exports={section:"Hours_section__k1EFx",title:"Hours_title__yXJZg",hourTitle:"Hours_hourTitle__f_sUf",hours:"Hours_hours__tKOIb",time:"Hours_time__lrrId",days:"Hours_days__0Z6p5"}},7286:function(e){e.exports={location:"Location_location__YCjZN",section:"Location_section__vbWgH",title:"Location_title__bzz1S",info:"Location_info__qQyZU"}},1379:function(e){e.exports={logoWrapper:"Logo_logoWrapper__1Fb2L",logo:"Logo_logo__3uUlF"}},4032:function(e){e.exports={main:"Main_main__XGA2r"}},7210:function(e){e.exports={menu:"Menu_menu__ReMNG",title:"Menu_title__Z_WkD",mealTitle:"Menu_mealTitle__6szfT",section:"Menu_section__8u5Fv",sectionTitle:"Menu_sectionTitle__eGYaY",item:"Menu_item__Ay2ri",itemTitle:"Menu_itemTitle__AFPGr",itemPrice:"Menu_itemPrice__KyciO",itemIcons:"Menu_itemIcons__FlcND",description:"Menu_description__yswsb"}},1653:function(e){e.exports={section:"Section_section__N967w"}},1664:function(e,n,i){e.exports=i(1551)},7266:function(e,n,i){var r=i(7294);function t(e){return r.createElement("svg",e,r.createElement("path",{d:"M10.1281 0.452881L3.69898 6.88198C3.69179 6.8888 3.68184 6.89101 3.67502 6.89801C3.37215 7.20088 3.22174 7.60071 3.22285 7.99998C3.22174 8.39925 3.37197 8.7989 3.67502 9.10195C3.6822 9.10914 3.69197 9.11099 3.69898 9.11799L10.1281 15.5471C10.732 16.151 11.72 16.151 12.3235 15.5471C12.927 14.9432 12.9274 13.9552 12.3235 13.3517L6.97218 7.99993L12.3239 2.64817C12.9278 2.04428 12.9278 1.05628 12.3239 0.452771C11.7201 -0.150735 10.7321 -0.151113 10.1282 0.452771L10.1281 0.452881Z",fill:"currentColor"}))}t.defaultProps={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},e.exports=t,t.default=t},9967:function(e,n,i){var r=i(7294);function t(e){return r.createElement("svg",e,r.createElement("path",{d:"M13.5035 14.714C14.3283 13.6731 14.2641 13.274 13.334 12.344C12.7452 11.7563 12.1249 11.1974 11.5636 10.585C11.1081 10.0859 10.6584 10.0451 10.1333 10.4259C10.0805 10.4639 10.0236 10.4931 9.97305 10.5327C8.12627 11.9528 7.42376 11.6563 6.03705 9.25459C4.65034 6.85173 4.74458 6.09575 6.89755 5.20601C6.9573 5.18126 7.01076 5.14626 7.07039 5.12035C7.66264 4.85609 7.85099 4.44656 7.64826 3.80146C7.39785 3.0093 7.22437 2.19305 7.01012 1.39C6.67009 0.118178 6.35579 -0.136213 5.04219 0.0584372C4.5361 0.133061 1.7978 0.783401 1.92424 4.72216C1.99374 6.90447 2.4584 8.65192 3.61369 10.6532C4.76948 12.6551 6.05039 13.9298 7.90518 15.0816C11.2526 17.1612 13.1857 15.1151 13.5034 14.7141L13.5035 14.714Z",fill:"currentColor"}))}t.defaultProps={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},e.exports=t,t.default=t},605:function(e,n,i){var r=i(7294);function t(e){return r.createElement("svg",e,r.createElement("path",{d:"M7.99276 0C6.61265 0 5.27818 0.494205 4.23108 1.39316C3.18383 2.29208 2.49311 3.53614 2.28385 4.9004C2.07476 6.2645 2.36091 7.65838 3.09062 8.82991L7.99284 16L12.8951 8.82991C13.6247 7.65845 13.9109 6.26457 13.7018 4.9004C13.4926 3.53614 12.8018 2.29208 11.7546 1.39316C10.7075 0.494243 9.37302 0 7.99291 0H7.99276ZM7.99276 7.90038C7.42932 7.90038 6.88887 7.67661 6.49053 7.27813C6.09204 6.8798 5.86829 6.33935 5.86829 5.77591C5.86829 5.21247 6.09206 4.67202 6.49053 4.27368C6.88887 3.87519 7.42932 3.65143 7.99276 3.65143C8.5562 3.65143 9.09665 3.8752 9.49499 4.27368C9.89348 4.67202 10.1172 5.21247 10.1172 5.77591C10.1172 6.33935 9.89347 6.8798 9.49499 7.27813C9.09665 7.67662 8.5562 7.90038 7.99276 7.90038Z",fill:"currentColor"}))}t.defaultProps={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},e.exports=t,t.default=t},4955:function(e,n,i){var r=i(7294);function t(e){return r.createElement("svg",e,r.createElement("path",{d:"M5.87112 15.547L12.3002 9.11793C12.3073 9.11111 12.3173 9.1089 12.3241 9.10189C12.627 8.79903 12.7774 8.3992 12.7763 7.99993C12.7774 7.60067 12.6272 7.20102 12.3241 6.89798C12.3169 6.89079 12.3072 6.88894 12.3002 6.88194L5.87112 0.452908C5.26724 -0.150969 4.27925 -0.150969 3.67575 0.452908C3.07225 1.05679 3.07187 2.04478 3.67575 2.64828L9.02745 7.99999L3.67575 13.3517C3.07187 13.9556 3.07187 14.9436 3.67575 15.5471C4.27944 16.1509 5.26762 16.1509 5.87131 15.5473L5.87112 15.547Z",fill:"currentColor"}))}t.defaultProps={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},e.exports=t,t.default=t}},function(e){e.O(0,[774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);