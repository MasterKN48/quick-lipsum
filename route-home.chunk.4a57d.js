webpackJsonp([0],{"iOg+":function(e,t,n){"use strict";function i(e,t){p.options.__h&&p.options.__h(_,e,f||t),f=0;var n=_.__H||(_.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function a(e){return f=1,o(c,e)}function o(e,t,n){var a=i(l++,2);return a.t=e,a.__c||(a.__c=_,a.__=[n?n(t):c(void 0,t),function(e){var t=a.t(a.__[0],e);a.__[0]!==t&&(a.__[0]=t,a.__c.setState({}))}]),a.__}function u(){d.some(function(e){if(e.__P)try{e.__H.__h.forEach(r),e.__H.__h.forEach(s),e.__H.__h=[]}catch(t){return e.__H.__h=[],p.options.__e(t,e.__v),!0}}),d=[]}function r(e){"function"==typeof e.u&&e.u()}function s(e){e.u=e.__()}function c(e,t){return"function"==typeof t?t(e):t}Object.defineProperty(t,"__esModule",{value:!0});var l,_,m,p=n("KM04"),f=0,d=[],h=p.options.__r,v=p.options.diffed,g=p.options.__c,b=p.options.unmount;p.options.__r=function(e){h&&h(e),l=0;var t=(_=e.__c).__H;t&&(t.__h.forEach(r),t.__h.forEach(s),t.__h=[])},p.options.diffed=function(e){v&&v(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==d.push(t)&&m===p.options.requestAnimationFrame||((m=p.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(i),cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(u))},p.options.__c=function(e,t){t.some(function(e){try{e.__h.forEach(r),e.__h=e.__h.filter(function(e){return!e.__||s(e)})}catch(n){t.some(function(e){e.__h&&(e.__h=[])}),t=[],p.options.__e(n,e.__v)}}),g&&g(e,t)},p.options.unmount=function(e){b&&b(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(r)}catch(e){p.options.__e(e,t.__v)}};var q="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinut aliquam augue. Proin sit amet interdum ante, vel volutpat mi.Suspendisse sit amet egestas nisl. Nulla aliquet neque dolor,eget feugiat ante ultricies quis. Nulla efficitur tempus magnaac varius. Nulla facilisi. Praesent id pulvinar nisi. Duis quis massa a erat dapibus volutpat vel in quam. Vivamus commodo nunc non massa fringilla, porta posuere urna lobortis. Quisque lacinia vitae justo sit amet scelerisque. Quisque vitae purus tortor. Nulla facilisi. Aenean hendrerit tortor dapibus, auctor metus ut, elementum mi. Aliquam feugiat condimentum vestibulum.Quisque sit amet risus vel lorem vehicula rutrum. Nunc fringilla, diam et volutpat facilisis, odio diam dignissim leo,vitae venenatis augue magna ac tellus. Quisque vel purusmaximus, egestas est vel, egestas diam. In vitae bibendum tortor, nec lacinia leo. Aliquam elit lectus, vehicula eget est sed, porta porttitor sem. Sed sit amet felis dolor. Pellentesque convallis leo vel maximus blandit. Proin convallis aliquam velit. Pellentesque mollis ultricies convallis. Nunc quis sapien id est varius efficitur et vitae dolor. Morbi viverra auctor nisl, vel commodo odio malesuada ut. Nunc eget elit nisl. Suspendisse faucibus odio ante, vel fermentum magna congue eu. Suspendisse ac erat sed ex aliquet dapibus ut pellentesque nunc.",y=Object(p.h)("h1",null,"Quick-Lipsum"),O=Object(p.h)("label",{htmlFor:"para"},"Paragraph "),j=Object(p.h)("br",null),P=Object(p.h)("br",null),x=Object(p.h)("button",{class:"button"},"Generate"),H=function(){var e=a(q),t=e[0],n=e[1],i=a(1),o=i[0],u=i[1],r=a(!1),s=r[0],c=r[1],l=a({type:"p",status:!1}),_=l[0],m=l[1];a(function(){window.onload=function(){f()}},[t]);var f=function(){navigator.permissions.query({name:"clipboard-write"}).then(function(e){var t="";if("p"===_.type&&!0===_.status){t=("\n<p> "+q+" </p>\n").repeat(o)}else t=("\n"+q+"\n").repeat(o);"granted"===e.state?navigator.clipboard.writeText(t).then(function(){n(t),c("Copied to clipboard")}).catch(function(){c("Permission not granted! try clicking on textarea to copy")}):c("Permission not granted! try clicking on textarea to copy")})},d=function(e){e.preventDefault(),c(""),f()};return Object(p.h)("div",{class:"container margin"},y,Object(p.h)("div",{class:"row"},Object(p.h)("div",{class:"column"},Object(p.h)("form",{onSubmit:d,class:"pure-form"},O,Object(p.h)("input",{type:"number",name:"para",min:"1",max:"1000",id:"para",spellcheck:"false",onChange:function(e){return u(e.target.value)},value:o,placeholder:"Enter Number of paragraph"}),j,Object(p.h)("input",{type:"checkbox",onChange:function(e){m({type:e.target.value,status:!0})},value:"p",name:"tag",id:"tag"})," ","Include Paragraph Tag",P,x),s.length>0?Object(p.h)("blockquote",null,Object(p.h)("p",null,Object(p.h)("em",null,s))):null),Object(p.h)("div",{class:"column"},Object(p.h)("textarea",{id:"paragraph",name:"paragraph",value:t,onClick:function(e){e.target.focus(),e.target.select();var t=document.execCommand("copy");c(t?"Copied to clipboard":"Something went wrong")},readOnly:!0,placeholder:"Lipsum Lorem Text"}))))};t.default=H}});
//# sourceMappingURL=route-home.chunk.4a57d.js.map