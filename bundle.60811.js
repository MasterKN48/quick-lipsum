!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var l,u,c=0,a=[];c<e.length;c++)u=e[c],o[u]&&a.push(o[u][0]),o[u]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l]);for(n&&n(e,r,i);a.length;)a.shift()()};var r={},o={1:0};e.e=function(t){function n(){u.onerror=u.onload=null,clearTimeout(c);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var l=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,e.nc&&u.setAttribute("nonce",e.nc),u.src=e.p+""+({0:"route-home"}[t]||t)+".chunk."+{0:"4a57d"}[t]+".js";var c=setTimeout(n,12e4);return u.onerror=u.onload=n,l.appendChild(u),i},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/quick-lipsum/",e.oe=function(t){throw console.error(t),t},e(e.s="pwNi")}({"7N8r":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;r.Component.call(this);var n=void 0,o=void 0;this.componentWillMount=function(){n=e.base=e.nextBase||e.__b,t(function(t){e.setState({child:t.default||t})})},this.shouldComponentUpdate=function(t,e){return e=void 0===e.child,o=e&&void 0===o&&n?(0,r.h)(n.nodeName,{dangerouslySetInnerHTML:{__html:n.innerHTML}}):"",!e},this.render=function(t,e){return e.child?(0,r.h)(e.child,t):o}}return(e.prototype=new r.Component).constructor=e,e};var r=n("KM04")},JkW7:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),l={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var p=c[a].split("=");l[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=u(t.replace(o,"")),e=u(e||"");for(var _=Math.max(t.length,e.length),s=0;s<_;s++)if(e[s]&&":"===e[s].charAt(0)){var f=e[s].replace(/(^:|[+*?]+$)/g,""),h=(e[s].match(/[+*?]+$/)||P)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),y=t[s]||"";if(!y&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(l[f]=decodeURIComponent(y),d||v){l[f]=t.slice(s).map(decodeURIComponent).join("/");break}}else if(e[s]!==t[s]){r=!1;break}return(!0===n.default||!1!==r)&&l}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function l(t,e){return t.index=e,t.rank=p(t),t.props}function u(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function a(t){return u(t).map(c).join("")}function p(t){return t.props.default?0:a(t.props.path)}function _(t,e){void 0===e&&(e="push"),O&&O[e]?O[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function s(){var t;return t=O&&O.location?O.location:O&&O.getCurrentLocation?O.getCurrentLocation():"undefined"!=typeof location?location:A,""+(t.pathname||"")+(t.search||"")}function f(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),h(t)&&_(t,e?"replace":"push"),d(t)}function h(t){for(var e=U.length;e--;)if(U[e].canRoute(t))return!0;return!1}function d(t){for(var e=!1,n=0;n<U.length;n++)!0===U[n].routeTo(t)&&(e=!0);for(var r=S.length;r--;)S[r](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return v(t.currentTarget||t.target||this),m(t)}function m(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(v(e))return m(t)}}while(e=e.parentNode)}}function b(){E||("function"==typeof addEventListener&&(O||addEventListener("popstate",function(){d(s())}),addEventListener("click",g)),E=!0)}function k(t){n.e(0).then(function(){t(n("iOg+"))}.bind(null,n)).catch(n.oe)}function C(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function w(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var x=(n("rq4c"),n("h8Np"),n("KM04")),P={},O=null,U=[],S=[],A={},E=!1,N=function(t){function e(e){t.call(this,e),e.history&&(O=e.history),this.state={url:e.url||s()},b()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(Object(x.toChildArray)(this.props.children),t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){U.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;O&&(this.unlisten=O.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),U.splice(U.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(l).sort(i).map(function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var l={url:e,matches:i};return r(l,i),delete l.ref,delete l.key,Object(x.cloneElement)(t,l)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(x.toChildArray)(n),o,!0),l=i[0]||null,u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:i,current:l})),l},e}(x.Component),j=function(t){return Object(x.createElement)("a",r({onClick:y},t))},M=function(t){return Object(x.createElement)(t.component,t)};N.subscribers=S,N.getCurrentUrl=s,N.route=f,N.Router=N,N.Route=M,N.Link=j,N.exec=o;var T=n("7N8r"),W=n.n(T),L=W()(k),R=Object(x.h)(L,{path:"/quick-lipsum/"}),D=function(t){function e(){for(var e,n,r,o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return e=n=C(this,t.call.apply(t,[this].concat(i))),n.handleRoute=function(t){n.currentUrl=t.url},r=e,C(n,r)}return w(e,t),e.prototype.render=function(){return Object(x.h)("div",{id:"app"},Object(x.h)(N,{onChange:this.handleRoute},R))},e}(x.Component);e.default=D},KM04:function(t,e){function n(t,e){for(var n in e)t[n]=e[n];return t}function r(t){var e=t.parentNode;e&&e.removeChild(t)}function o(t,e,n){var r,o=arguments,l={};for(r in e)"key"!==r&&"ref"!==r&&(l[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(l.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===l[r]&&(l[r]=t.defaultProps[r]);return i(t,l,e&&e.key,e&&e.ref,null)}function i(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),x.vnode&&x.vnode(i),i}function l(t){return t.children}function u(t,e){this.props=t,this.context=e}function c(t,e){if(null==e)return t.__?c(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?c(t):null}function a(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return a(t)}}function p(t){(!t.__d&&(t.__d=!0)&&O.push(t)&&!U++||A!==x.debounceRendering)&&((A=x.debounceRendering)||S)(_)}function _(){for(var t;U=O.length;)t=O.sort(function(t,e){return t.__v.__b-e.__v.__b}),O=[],t.some(function(t){var e,r,o,i,l,u,p;t.__d&&(u=(l=(e=t).__v).__e,(p=e.__P)&&(r=[],(o=n({},l)).__v=o,i=y(p,l,o,e.__n,void 0!==p.ownerSVGElement,null,r,null==u?c(l):u),m(r,l),i!=u&&a(l)))})}function s(t,e,n,o,u,a,p,_,s,f){var h,d,v,m,g,C,w,x,P,O=o&&o.__k||M,U=O.length;for(s==j&&(s=null!=p?p[0]:U?c(o,0):null),n.__k=[],h=0;h<e.length;h++)if(null!=(m=n.__k[h]=null==(m=e[h])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?i(null,m,null,null,m):Array.isArray(m)?i(l,{children:m},null,null,null):null!=m.__e||null!=m.__c?i(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[h])||v&&m.key==v.key&&m.type===v.type)O[h]=void 0;else for(d=0;d<U;d++){if((v=O[d])&&m.key==v.key&&m.type===v.type){O[d]=void 0;break}v=null}if(g=y(t,m,v=v||j,u,a,p,_,s,f),(d=m.ref)&&v.ref!=d&&(x||(x=[]),v.ref&&x.push(v.ref,null,m),x.push(d,m.__c||g,m)),null!=g){if(null==w&&(w=g),P=void 0,void 0!==m.__d)P=m.__d,m.__d=void 0;else if(p==v||g!=s||null==g.parentNode){t:if(null==s||s.parentNode!==t)t.appendChild(g),P=null;else{for(C=s,d=0;(C=C.nextSibling)&&d<U;d+=2)if(C==g)break t;t.insertBefore(g,s),P=s}"option"==n.type&&(t.value="")}s=void 0!==P?P:g.nextSibling,"function"==typeof n.type&&(n.__d=s)}else s&&v.__e==s&&s.parentNode!=t&&(s=c(v))}if(n.__e=w,null!=p&&"function"!=typeof n.type)for(h=p.length;h--;)null!=p[h]&&r(p[h]);for(h=U;h--;)null!=O[h]&&k(O[h],O[h]);if(x)for(h=0;h<x.length;h++)b(x[h],x[++h],x[++h])}function f(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||d(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||d(t,i,e[i],n[i],r)}function h(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===T.test(e)?n+"px":null==n?"":n}function d(t,e,n,r,o){var i,l,u,c,a;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(c in r)n&&c in n||h(i,c,"");if(n)for(a in n)r&&n[a]===r[a]||h(i,a,n[a])}else"o"===e[0]&&"n"===e[1]?(l=e!==(e=e.replace(/Capture$/,"")),u=e.toLowerCase(),e=(u in t?u:e).slice(2),n?(r||t.addEventListener(e,v,l),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,v,l)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function v(t){this.l[t.type](x.event?x.event(t):t)}function y(t,e,r,o,i,c,a,p,_){var f,h,d,v,y,m,b,k,w,P,O,U=e.type;if(void 0!==e.constructor)return null;(f=x.__b)&&f(e);try{t:if("function"==typeof U){if(k=e.props,w=(f=U.contextType)&&o[f.__c],P=f?w?w.props.value:f.__:o,r.__c?b=(h=e.__c=r.__c).__=h.__E:("prototype"in U&&U.prototype.render?e.__c=h=new U(k,P):(e.__c=h=new u(k,P),h.constructor=U,h.render=C),w&&w.sub(h),h.props=k,h.state||(h.state={}),h.context=P,h.__n=o,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=U.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=n({},h.__s)),n(h.__s,U.getDerivedStateFromProps(k,h.__s))),v=h.props,y=h.state,d)null==U.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==U.getDerivedStateFromProps&&k!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,P),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,P)||e.__v===r.__v){for(h.props=k,h.state=h.__s,e.__v!==r.__v&&(h.__d=!1),h.__v=e,e.__e=r.__e,e.__k=r.__k,h.__h.length&&a.push(h),f=0;f<e.__k.length;f++)e.__k[f]&&(e.__k[f].__=e);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,P),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,m)})}h.context=P,h.props=k,h.state=h.__s,(f=x.__r)&&f(e),h.__d=!1,h.__v=e,h.__P=t,f=h.render(h.props,h.state,h.context),null!=h.getChildContext&&(o=n(n({},o),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(m=h.getSnapshotBeforeUpdate(v,y)),O=null!=f&&f.type==l&&null==f.key?f.props.children:f,s(t,Array.isArray(O)?O:[O],e,r,o,i,c,a,p,_),h.base=e.__e,h.__h.length&&a.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==c&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=g(r.__e,e,r,o,i,c,a,_);(f=x.diffed)&&f(e)}catch(t){e.__v=null,x.__e(t,e,r)}return e.__e}function m(t,e){x.__c&&x.__c(e,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(t){t.call(e)})}catch(t){x.__e(t,e.__v)}})}function g(t,e,n,r,o,i,l,u){var c,a,p,_,h,v=n.props,y=e.props;if(o="svg"===e.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(a=i[c])&&((null===e.type?3===a.nodeType:a.localName===e.type)||t==a)){t=a,i[c]=null;break}if(null==t){if(null===e.type)return document.createTextNode(y);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,y.is&&{is:y.is}),i=null,u=!1}if(null===e.type)v!==y&&t.data!=y&&(t.data=y);else{if(null!=i&&(i=M.slice.call(t.childNodes)),p=(v=n.props||j).dangerouslySetInnerHTML,_=y.dangerouslySetInnerHTML,!u){if(null!=i)for(v={},h=0;h<t.attributes.length;h++)v[t.attributes[h].name]=t.attributes[h].value;(_||p)&&(_&&p&&_.__html==p.__html||(t.innerHTML=_&&_.__html||""))}f(t,y,v,o,u),_?e.__k=[]:(c=e.props.children,s(t,Array.isArray(c)?c:[c],e,n,r,"foreignObject"!==e.type&&o,i,l,j,u)),u||("value"in y&&void 0!==(c=y.value)&&c!==t.value&&d(t,"value",c,v.value,!1),"checked"in y&&void 0!==(c=y.checked)&&c!==t.checked&&d(t,"checked",c,v.checked,!1))}return t}function b(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){x.__e(t,n)}}function k(t,e,n){var o,i,l;if(x.unmount&&x.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||b(o,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){x.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(l=0;l<o.length;l++)o[l]&&k(o[l],e,n);null!=i&&r(i)}function C(t,e,n){return this.constructor(t,n)}function w(t,e,n){var r,i,u;x.__&&x.__(t,e),i=(r=n===E)?null:n&&n.__k||e.__k,t=o(l,null,[t]),u=[],y(e,(r?e:n||e).__k=t,i||j,j,void 0!==e.ownerSVGElement,n&&!r?[n]:i?null:e.childNodes.length?M.slice.call(e.childNodes):null,u,n||j,r),m(u,t)}var x,P,O,U,S,A,E,N,j={},M=[],T=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;x={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return p(n.__E=n)}catch(e){t=e}throw t}},P=function(t){return null!=t&&void 0===t.constructor},u.prototype.setState=function(t,e){var r;r=this.__s!==this.state?this.__s:this.__s=n({},this.state),"function"==typeof t&&(t=t(r,this.props)),t&&n(r,t),null!=t&&this.__v&&(e&&this.__h.push(e),p(this))},u.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),p(this))},u.prototype.render=l,O=[],U=0,S="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,E=j,N=0,e.render=w,e.hydrate=function(t,e){w(t,e,E)},e.createElement=o,e.h=o,e.Fragment=l,e.createRef=function(){return{}},e.isValidElement=P,e.Component=u,e.cloneElement=function(t,e){var r,o;for(o in e=n(n({},t.props),e),arguments.length>2&&(e.children=M.slice.call(arguments,2)),r={},e)"key"!==o&&"ref"!==o&&(r[o]=e[o]);return i(t.type,r,e.key||t.key,e.ref||t.ref,null)},e.createContext=function(t){var e={},n={__c:"__cC"+N++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){o.props.value!==t.value&&r.some(function(e){e.context=t.value,p(e)})},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n},e.toChildArray=function t(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?M.concat.apply([],e.map(t)):[e]},e._e=k,e.options=x},h8Np:function(){},pwNi:function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var o=function(t){return t&&t.default?t.default:t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,l=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};l()}},rq4c:function(){}});
//# sourceMappingURL=bundle.60811.js.map