(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{336:function(t,e,n){"use strict";n.d(e,{X:function(){return f}});var r=n(63),i=n(2326),o=n(5284),a=n(3105),c=n(4461),s=n(3808),u=n(7294);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var f=(0,r.G)(((t,e)=>{var n=(0,i.m)("Heading",t),r=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}((0,o.Lr)(t),["className"]);return u.createElement(a.m$.h2,l({ref:e,className:(0,c.cx)("chakra-heading",t.className)},r,{__css:n}))}));s.Ts&&(f.displayName="Heading")},4184:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&t.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&t.push(c);else t.push(n.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},8312:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return et}});var r=n(5893),i=n(7294);function o(){var t,e,n=i.useRef(!1),[r,o]=i.useState(0);return t=()=>{n.current=!0},void 0===e&&(e=[]),i.useEffect((()=>()=>t()),e),i.useCallback((()=>{n.current||o(r+1)}),[r])}var a=n(8327),c=n(4461),s=n(3808),u=n(8500),l=n(3935),f=n(4288);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var[p,d]=(0,u.k)({strict:!1,name:"PortalContext"}),v="chakra-portal",y=t=>i.createElement("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:t.zIndex,top:0,left:0,right:0}},t.children),w=t=>{var{appendToParentPortal:e,children:n}=t,r=i.useRef(null),c=i.useRef(null),s=o(),u=d(),h=(0,f.L)();(0,a.G)((()=>{if(r.current){var t=r.current.ownerDocument,n=e&&null!=u?u:t.body;if(n){c.current=t.createElement("div"),c.current.className=v,n.appendChild(c.current),s();var i=c.current;return()=>{n.contains(i)&&n.removeChild(i)}}}}),[]);var w=null!=h&&h.zIndex?i.createElement(y,{zIndex:null==h?void 0:h.zIndex},n):n;return c.current?(0,l.createPortal)(i.createElement(p,{value:c.current},w),c.current):i.createElement("span",{ref:r})},b=t=>{var{children:e,containerRef:n,appendToParentPortal:r}=t,s=n.current,u=null!=s?s:c.jU?document.body:void 0,f=i.useMemo((()=>{var t=null==s?void 0:s.ownerDocument.createElement("div");return t&&(t.className=v),t}),[s]),h=o();return(0,a.G)((()=>{h()}),[]),(0,a.G)((()=>{if(f&&u)return u.appendChild(f),()=>{u.removeChild(f)}}),[f,u]),u&&f?(0,l.createPortal)(i.createElement(p,{value:r?f:null},e),f):null};function g(t){var{containerRef:e}=t,n=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["containerRef"]);return e?i.createElement(b,h({containerRef:e},n)):i.createElement(w,n)}g.defaultProps={appendToParentPortal:!0},g.className=v,g.selector=".chakra-portal",s.Ts&&(g.displayName="Portal");var m=n(51),O=n(336),x=n(8017),j=n(8101),P=n(1163),S=n(725),k=n.n(S),C=n(9352),I=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),_=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return I(e,t),e}(Error);function E(t,e){if(!t)throw new _(e)}function M(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],n=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(n))}));return e.length>0?"?"+e.join("&"):""}var R=n(4184),D=n.n(R),A=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),N=function(){return(N=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},T=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function c(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((r=r.apply(t,e||[])).next())}))},W=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},F=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},B=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},z=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},q=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function G(t,e,n){var r=e.height,i=e.width,o=F(e,["height","width"]),a=N({height:r,width:i,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),c=window.open(t,"",Object.keys(a).map((function(t){return t+"="+a[t]})).join(", "));if(n)var s=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(s),n(c))}catch(t){console.error(t)}}),1e3);return c}var H=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,i=n.windowHeight,o=void 0===i?400:i,a=n.windowPosition,c=void 0===a?"windowCenter":a,s=n.windowWidth,u=void 0===s?550:s;G(t,N({height:o,width:u},"windowCenter"===c?z(u,o):q(u,o)),r)},e.handleClick=function(t){return T(e,void 0,void 0,(function(){var e,n,r,i,o,a,c,s,u,l;return W(this,(function(f){switch(f.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,i=e.networkLink,o=e.onClick,a=e.url,c=e.openShareDialogOnClick,s=e.opts,u=i(a,s),r?[2]:(t.preventDefault(),n?(l=n(),B(l)?[4,l]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(u),o&&o(t,u),[2]}}))}))},e}return A(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,o=t.disabledStyle,a=t.forwardedRef,c=(t.networkLink,t.networkName),s=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),u=t.style,l=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,F(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=D()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),h=N(N(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&o);return i.createElement("button",N({},l,{"aria-label":l["aria-label"]||c,className:f,onClick:this.handleClick,ref:a,style:h}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(i.Component),L=function(){return(L=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};var Q=function(t,e,n,r){function o(o,a){var c=n(o),s=L({},o);return Object.keys(c).forEach((function(t){delete s[t]})),i.createElement(H,L({},r,s,{forwardedRef:a,networkName:t,networkLink:e,opts:n(o)}))}return o.displayName="ShareButton-"+t,(0,i.forwardRef)(o)};var Y=Q("twitter",(function(t,e){var n=e.title,r=e.via,i=e.hashtags,o=void 0===i?[]:i,a=e.related,c=void 0===a?[]:a;return E(t,"twitter.url"),E(Array.isArray(o),"twitter.hashtags is not an array"),E(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+M({url:t,text:n,via:r,hashtags:o.length>0?o.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400});var U=Q("facebook",(function(t,e){var n=e.quote,r=e.hashtag;return E(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+M({u:t,quote:n,hashtag:r})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400});var X=Q("whatsapp",(function(t,e){var n=e.title,r=e.separator;return E(t,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+M({text:n?n+r+t:t})}),(function(t){return{title:t.title,separator:t.separator||" "}}),{windowWidth:550,windowHeight:400}),V=function(t){(0,i.useEffect)(t,[])},$=function(t){var e=(0,i.useRef)(t);e.current=t,V((function(){return function(){return e.current()}}))},J=function(t){var e=(0,i.useRef)(0),n=(0,i.useState)(t),r=n[0],o=n[1],a=(0,i.useCallback)((function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame((function(){o(t)}))}),[]);return $((function(){cancelAnimationFrame(e.current)})),[r,a]};var K="undefined"!==typeof window,Z=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var n=J({width:K?window.innerWidth:t,height:K?window.innerHeight:e}),r=n[0],o=n[1];return(0,i.useEffect)((function(){if(K){var t=function(){o({width:window.innerWidth,height:window.innerHeight})};return function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,e)}(window,"resize",t),function(){!function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)}(window,"resize",t)}}}),[]),r},tt=n(6483);function et(){var t=(0,P.useRouter)(),e=tt.v+"/"+t.query.path+".mp4",n=e,i=Z(),o=i.width,a=i.height;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{children:(0,r.jsx)(k(),{width:o,height:a})}),(0,r.jsxs)(m.gC,{children:[(0,r.jsxs)(m.gC,{bg:"white",rounded:"xl",w:"md",py:6,spacing:3,children:[(0,r.jsx)(O.X,{children:"Wow!"}),(0,r.jsx)(O.X,{fontWeight:400,fontSize:"lg",children:"Share your moves, you crazy animal."}),(0,r.jsx)(x.xu,{rounded:"lg",overflow:"hidden",position:"relative",width:256,height:256,children:(0,r.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,width:256,height:256,src:e,style:{position:"absolute",top:0,right:0,bottom:0,left:0}})})]}),(0,r.jsxs)(m.Ug,{spacing:2,children:[(0,r.jsx)(x.xu,{children:(0,r.jsx)(Y,{url:n,children:(0,r.jsxs)(j.z,{colorScheme:"twitter",children:[(0,r.jsx)(C.x2F,{style:{marginRight:8}}),"Twitter"]})})}),(0,r.jsx)(x.xu,{children:(0,r.jsx)(U,{url:n,children:(0,r.jsxs)(j.z,{colorScheme:"facebook",children:[(0,r.jsx)(C.e5d,{style:{marginRight:8}}),"Facebook"]})})}),(0,r.jsx)(x.xu,{children:(0,r.jsx)(X,{url:n,children:(0,r.jsxs)(j.z,{colorScheme:"whatsapp",children:[(0,r.jsx)(C.tdG,{style:{marginRight:8}}),"WhatsApp"]})})})]})]})]})}},6483:function(t,e,n){"use strict";n.d(e,{v:function(){return i},b:function(){return o}});var r=n(9669),i="https://d60c760e12b414a82bd8bc4747d332c64.clg07azjl.paperspacegradient.com",o=n.n(r)().create({baseURL:i})},9435:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share-meme",function(){return n(8312)}])},725:function(t,e,n){var r;"undefined"!=typeof self&&self,t.exports=(r=n(7294),function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=r},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i,o,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:((o=0)||(o=.3*r),(i=c)<Math.abs(c)?(i=c,a=o/4):a=o/(2*Math.PI)*Math.asin(c/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)+e)},easeOutElastic:function(t,e,n,r){var i,o,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:((o=0)||(o=.3*r),(i=c)<Math.abs(c)?(i=c,a=o/4):a=o/(2*Math.PI)*Math.asin(c/i),i*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/o)+c+e)},easeInOutElastic:function(t,e,n,r){var i,o,a,c=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+c:((o=0)||(o=r*(.3*1.5)),(i=c)<Math.abs(c)?(i=c,a=o/4):a=o/(2*Math.PI)*Math.asin(c/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*-.5+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5+c+e)},easeInBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var o=n-e;return void 0===i&&(i=1.70158),(t/=r/2)<1?o/2*(t*t*((1+(i*=1.525))*t-i))+e:o/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},easeInBounce:function(t,e,n,i){var o=n-e;return o-r.easeOutBounce(i-t,0,o,i)+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var o=n-e;return t<i/2?.5*r.easeInBounce(2*t,0,o,i)+e:.5*r.easeOutBounce(2*t-i,0,o,i)+.5*o+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",(function(){return z}));var r,i,o=n(0),a=n.n(o),c=n(1),s=n.n(c);function u(t,e){return t+Math.random()*(e-t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}!function(t){t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Strip=2]="Strip"}(r||(r={})),function(t){t[t.Positive=1]="Positive",t[t.Negative=-1]="Negative"}(i||(i={}));var h=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"context",void 0),f(this,"radius",void 0),f(this,"x",void 0),f(this,"y",void 0),f(this,"w",void 0),f(this,"h",void 0),f(this,"vx",void 0),f(this,"vy",void 0),f(this,"shape",void 0),f(this,"angle",void 0),f(this,"angularSpin",void 0),f(this,"color",void 0),f(this,"rotateY",void 0),f(this,"rotationDirection",void 0),f(this,"getOptions",void 0),this.getOptions=n;var a,c,s=this.getOptions(),l=s.colors,h=s.initialVelocityX,p=s.initialVelocityY;this.context=e,this.x=r,this.y=o,this.w=u(5,20),this.h=u(5,20),this.radius=u(5,10),this.vx="number"==typeof h?u(-h,h):u(h.min,h.max),this.vy="number"==typeof p?u(-p,0):u(p.min,p.max),this.shape=(a=0,c=2,Math.floor(a+Math.random()*(c-a+1))),this.angle=u(0,360)*Math.PI/180,this.angularSpin=u(-.2,.2),this.color=l[Math.floor(Math.random()*l.length)],this.rotateY=u(0,1),this.rotationDirection=u(0,1)?i.Positive:i.Negative}var e,n,o;return e=t,(n=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,o=t.friction,a=t.opacity,c=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=o,this.vy*=o,this.rotateY>=1&&this.rotationDirection===i.Positive?this.rotationDirection=i.Negative:this.rotateY<=-1&&this.rotationDirection===i.Negative&&(this.rotationDirection=i.Positive);var s=.1*this.rotationDirection;if(this.rotateY+=s,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=a,this.context.lineCap="round",this.context.lineWidth=2,c&&"function"==typeof c)c.call(this,this.context);else switch(this.shape){case r.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case r.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case r.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&l(e.prototype,n),o&&l(e,o),t}();function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"canvas",void 0),p(this,"context",void 0),p(this,"getOptions",void 0),p(this,"x",0),p(this,"y",0),p(this,"w",0),p(this,"h",0),p(this,"lastNumberOfPieces",0),p(this,"tweenInitTime",Date.now()),p(this,"particles",[]),p(this,"particlesGenerated",0),p(this,"removeParticleAt",(function(t){r.particles.splice(t,1)})),p(this,"getParticle",(function(){var t=u(r.x,r.w+r.x),e=u(r.y,r.h+r.y);return new h(r.context,r.getOptions,t,e)})),p(this,"animate",(function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,o=r.getOptions(),a=o.run,c=o.recycle,s=o.numberOfPieces,u=o.debug,l=o.tweenFunction,f=o.tweenDuration;if(!a)return!1;var h=r.particles.length,p=c?h:n,d=Date.now();if(p<s){i!==s&&(r.tweenInitTime=d,r.lastNumberOfPieces=s);for(var v=r.tweenInitTime,y=l(d-v>f?f:Math.max(0,d-v),p,s,f),w=Math.round(y-p),b=0;b<w;b++)r.particles.push(r.getParticle());r.particlesGenerated+=w}return u&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(h),t.width-10,t.height-20)),r.particles.forEach((function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(c&&p<=s?r.particles[n]=r.getParticle():r.removeParticleAt(n))})),h>0||p<s})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.getOptions=n};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:s.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},m=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"_options",void 0),b(this,"generator",void 0),b(this,"rafId",void 0),b(this,"setOptionsWithDefaults",(function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=y(y(y({},e),g),t),Object.assign(r,t.confettiSource)})),b(this,"update",(function(){var t=r.options,e=t.run,n=t.onConfettiComplete,i=r.canvas,o=r.context;e&&(o.fillStyle="white",o.clearRect(0,0,i.width,i.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)})),b(this,"reset",(function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)})),b(this,"stop",(function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.generator=new d(this.canvas,(function(){return r.options})),this.options=n,this.update()}var e,n,r;return e=t,(n=[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}])&&w(e.prototype,n),r&&w(e,r),t}();function O(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||C(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(t,e)||C(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=N(t);if(e){var i=N(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return D(this,n)}}function D(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?A(t):e}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var W=a.a.createRef(),F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(o,t);var e,n,r,i=R(o);function o(t){var e;_(this,o);for(var n=arguments.length,r=new Array(n>1?n-1:0),c=1;c<n;c++)r[c-1]=arguments[c];return T(A(e=i.call.apply(i,[this,t].concat(r))),"canvas",a.a.createRef()),T(A(e),"confetti",void 0),e.canvas=t.canvasRef||W,e}return e=o,(n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=B(this.props)[0];this.confetti=new m(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=B(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t=k(B(this.props),2),e=t[0],n=t[1],r=S({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},n.style);return a.a.createElement("canvas",j({width:e.width,height:e.height,ref:this.canvas},n,{style:r}))}}])&&E(e.prototype,n),r&&E(e,r),o}(o.Component);function B(t){var e={},n={},r=[].concat(O(Object.keys(g)),["confettiSource","drawShape","onConfettiComplete"]),i=["canvasRef"];for(var o in t){var a=t[o];r.includes(o)?e[o]=a:i.includes(o)?i[o]=a:n[o]=a}return[e,n,{}]}T(F,"defaultProps",S({},g)),T(F,"displayName","ReactConfetti");var z=a.a.forwardRef((function(t,e){return a.a.createElement(F,j({canvasRef:e},t))}));e.default=z}]).default)}},function(t){t.O(0,[937,9,458,774,888,179],(function(){return e=9435,t(t.s=e);var e}));var e=t.O();_N_E=e}]);