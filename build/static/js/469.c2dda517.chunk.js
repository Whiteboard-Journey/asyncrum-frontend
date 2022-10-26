"use strict";(self.webpackChunkasyncrum=self.webpackChunkasyncrum||[]).push([[469],{59270:function(e,r,n){n(72791);var t=n(47022),a=n(89743),s=n(2677),o=n(9140),c=n(43504),i=n(33168),u=n(61360),d=n(97106),l=n(80184);r.Z=function(e){var r=e.bottomLinks,n=e.children,f=(0,i.$)().t;return(0,d.aB)(),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"account-pages pt-2 pt-sm-5 pb-4 pb-sm-5",children:(0,l.jsx)(t.Z,{children:(0,l.jsx)(a.Z,{className:"justify-content-center",children:(0,l.jsxs)(s.Z,{md:8,lg:6,xl:5,xxl:4,children:[(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(o.Z.Header,{className:"pt-4 pb-3 text-center bg-primary",children:(0,l.jsx)(c.rU,{to:"/",children:(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:u,alt:"",height:"36"})})})}),(0,l.jsx)(o.Z.Body,{className:"p-4",children:n})]}),r]})})})}),(0,l.jsx)("footer",{className:"footer footer-alt",children:f("2022 \xa9 Asyncrum - Software Maestro 13th Team WBJ")})]})}},74469:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(43504),a=n(33168),s=n(89743),o=n(2677),c=n(59270);n(72791);var i=n.p+"static/media/logout-icon.161c73fc9ff66cbc21b4e9e8f4bdd889.svg",u=n(97106),d=n(80184),l=function(){var e=(0,a.$)().t;return(0,d.jsx)(s.Z,{className:"mt-3",children:(0,d.jsx)(o.Z,{className:"text-center",children:(0,d.jsxs)("p",{className:"text-muted",children:[e("Back to ")," ",(0,d.jsx)(t.rU,{to:"/account/login",className:"text-muted ms-1",children:(0,d.jsx)("b",{children:e("Log In")})})]})})})},f=function(){var e=(0,a.$)().t;return(0,u.aU)(),(0,d.jsx)(c.Z,{bottomLinks:(0,d.jsx)(l,{}),children:(0,d.jsxs)("div",{className:"text-center w-75 m-auto",children:[(0,d.jsx)("h4",{className:"text-dark-50 text-center mt-0 fw-bold",children:e("See You Again !")}),(0,d.jsx)("p",{className:"text-muted mb-4",children:e("You are now successfully signed out.")}),(0,d.jsx)("div",{className:"logout-icon m-auto",children:(0,d.jsx)("img",{src:i,alt:""})})]})})}},97106:function(e,r,n){n.d(r,{aB:function(){return a},yq:function(){return d},f0:function(){return f},aU:function(){return m},NF:function(){return p},mr:function(){return g}});var t=n(72791);function a(){(0,t.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[])}var s=n(33168),o=n(65057),c=n(61265),i=n(50061),u=n(10765);function d(){var e=(0,u.Sc)(),r=e.dispatch,n=e.appSelector,a=(0,s.$)().t;(0,t.useEffect)((function(){r((0,i.Li)())}),[r]);var d=n((function(e){return{loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,passwordReset:e.Auth.passwordReset,resetPasswordSuccess:e.Auth.resetPasswordSuccess}}));return{loading:d.loading,passwordReset:d.passwordReset,resetPasswordSuccess:d.resetPasswordSuccess,error:d.error,schemaResolver:(0,c.X)(o.Ry().shape({username:o.Z_().required(a("Please enter Username"))})),onSubmit:function(e){r((0,i.gF)(e.username))}}}var l=n(16871);function f(){var e=(0,s.$)().t,r=(0,u.Sc)(),n=r.dispatch,a=r.appSelector,d=(0,l.TH)(),f="/";if(d.state){var p=d.state.from;f=p?p.pathname:"/"}(0,t.useEffect)((function(){n((0,i.Li)())}),[n]);var m=a((function(e){return{loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,userLoggedIn:e.Auth.userLoggedIn}}));return{loading:m.loading,userLoggedIn:m.userLoggedIn,user:m.user,error:m.error,schemaResolver:(0,c.X)(o.Ry().shape({username:o.Z_().required(e("Please enter username")),password:o.Z_().required(e("Please enter password"))})),onSubmit:function(e){n((0,i.pH)(e.username,e.password))},redirectUrl:f}}function p(){(0,s.$)().t;var e=(0,u.Sc)(),r=e.dispatch,n=e.appSelector,a=(0,l.TH)(),o="/";if(a.state){var c=a.state.from;o=c?c.pathname:"/"}(0,t.useEffect)((function(){r((0,i.Li)())}),[r]);var d=n((function(e){return{loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,userLoggedIn:e.Auth.userLoggedIn}}));return{loading:d.loading,userLoggedIn:d.userLoggedIn,user:d.user,error:d.error,onSubmit:function(e){r((0,i.k4)(e)),r((0,i.fB)())},redirectUrl:o}}function m(){var e=(0,u.Sc)().dispatch;(0,t.useEffect)((function(){e((0,i.TX)())}),[e])}function g(){var e=(0,s.$)().t,r=(0,u.Sc)(),n=r.dispatch,a=(0,r.appSelector)((function(e){return{loading:e.Auth.loading,error:e.Auth.error,userSignUp:e.Auth.userSignUp}})),d=a.loading,l=a.userSignUp,f=a.error;(0,t.useEffect)((function(){n((0,i.Li)())}),[n]);return{loading:d,userSignUp:l,error:f,schemaResolver:(0,c.X)(o.Ry().shape({fullname:o.Z_().required(e("Please enter your full name")),email:o.Z_().required("Please enter your email").email("Please enter a valid email address"),password:o.Z_().required(e("Please enter password")),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match"),checkboxsignup:o.O7().oneOf([!0],"You must agree to the terms and conditions")})),onSubmit:function(e){n((0,i.EL)(e.fullname,e.email,e.password))}}}},9140:function(e,r,n){n.d(r,{Z:function(){return A}});var t=n(1413),a=n(45987),s=n(81694),o=n.n(s),c=n(72791),i=n(10162),u=n(66543),d=n(27472),l=n(80184),f=["bsPrefix","className","variant","as"],p=c.forwardRef((function(e,r){var n=e.bsPrefix,s=e.className,c=e.variant,u=e.as,d=void 0===u?"img":u,p=(0,a.Z)(e,f),m=(0,i.vE)(n,"card-img");return(0,l.jsx)(d,(0,t.Z)({ref:r,className:o()(c?"".concat(m,"-").concat(c):m,s)},p))}));p.displayName="CardImg";var m=p,g=n(96040),v=["bsPrefix","className","as"],h=c.forwardRef((function(e,r){var n=e.bsPrefix,s=e.className,u=e.as,d=void 0===u?"div":u,f=(0,a.Z)(e,v),p=(0,i.vE)(n,"card-header"),m=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,l.jsx)(g.Z.Provider,{value:m,children:(0,l.jsx)(d,(0,t.Z)((0,t.Z)({ref:r},f),{},{className:o()(s,p)}))})}));h.displayName="CardHeader";var b=h,x=["bsPrefix","className","bg","text","border","body","children","as"],y=(0,d.Z)("h5"),Z=(0,d.Z)("h6"),N=(0,u.Z)("card-body"),w=(0,u.Z)("card-title",{Component:y}),j=(0,u.Z)("card-subtitle",{Component:Z}),P=(0,u.Z)("card-link",{Component:"a"}),S=(0,u.Z)("card-text",{Component:"p"}),O=(0,u.Z)("card-footer"),C=(0,u.Z)("card-img-overlay"),L=c.forwardRef((function(e,r){var n=e.bsPrefix,s=e.className,c=e.bg,u=e.text,d=e.border,f=e.body,p=e.children,m=e.as,g=void 0===m?"div":m,v=(0,a.Z)(e,x),h=(0,i.vE)(n,"card");return(0,l.jsx)(g,(0,t.Z)((0,t.Z)({ref:r},v),{},{className:o()(s,h,c&&"bg-".concat(c),u&&"text-".concat(u),d&&"border-".concat(d)),children:f?(0,l.jsx)(N,{children:p}):p}))}));L.displayName="Card",L.defaultProps={body:!1};var A=Object.assign(L,{Img:m,Title:w,Subtitle:j,Body:N,Link:P,Text:S,Header:b,Footer:O,ImgOverlay:C})},96040:function(e,r,n){var t=n(72791).createContext(null);t.displayName="CardHeaderContext",r.Z=t},2677:function(e,r,n){var t=n(29439),a=n(1413),s=n(45987),o=n(81694),c=n.n(o),i=n(72791),u=n(10162),d=n(80184),l=["as","bsPrefix","className"],f=["className"];var p=i.forwardRef((function(e,r){var n=function(e){var r=e.as,n=e.bsPrefix,t=e.className,o=(0,s.Z)(e,l);n=(0,u.vE)(n,"col");var i=(0,u.pi)(),d=[],f=[];return i.forEach((function(e){var r,t,a,s=o[e];delete o[e],"object"===typeof s&&null!=s?(r=s.span,t=s.offset,a=s.order):r=s;var c="xs"!==e?"-".concat(e):"";r&&d.push(!0===r?"".concat(n).concat(c):"".concat(n).concat(c,"-").concat(r)),null!=a&&f.push("order".concat(c,"-").concat(a)),null!=t&&f.push("offset".concat(c,"-").concat(t))})),[(0,a.Z)((0,a.Z)({},o),{},{className:c().apply(void 0,[t].concat(d,f))}),{as:r,bsPrefix:n,spans:d}]}(e),o=(0,t.Z)(n,2),i=o[0],p=i.className,m=(0,s.Z)(i,f),g=o[1],v=g.as,h=void 0===v?"div":v,b=g.bsPrefix,x=g.spans;return(0,d.jsx)(h,(0,a.Z)((0,a.Z)({},m),{},{ref:r,className:c()(p,!x.length&&b)}))}));p.displayName="Col",r.Z=p},89743:function(e,r,n){var t=n(1413),a=n(45987),s=n(81694),o=n.n(s),c=n(72791),i=n(10162),u=n(80184),d=["bsPrefix","className","as"],l=c.forwardRef((function(e,r){var n=e.bsPrefix,s=e.className,c=e.as,l=void 0===c?"div":c,f=(0,a.Z)(e,d),p=(0,i.vE)(n,"row"),m=(0,i.pi)(),g="".concat(p,"-cols"),v=[];return m.forEach((function(e){var r,n=f[e];delete f[e],r=null!=n&&"object"===typeof n?n.cols:n;var t="xs"!==e?"-".concat(e):"";null!=r&&v.push("".concat(g).concat(t,"-").concat(r))})),(0,u.jsx)(l,(0,t.Z)((0,t.Z)({ref:r},f),{},{className:o().apply(void 0,[s,p].concat(v))}))}));l.displayName="Row",r.Z=l},66543:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(1413),a=n(45987),s=n(81694),o=n.n(s),c=/-(.)/g;var i=n(72791),u=n(10162),d=n(80184),l=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(r=e,r.replace(c,(function(e,r){return r.toUpperCase()}))).slice(1);var r};function p(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.displayName,s=void 0===n?f(e):n,c=r.Component,p=r.defaultProps,m=i.forwardRef((function(r,n){var s=r.className,i=r.bsPrefix,f=r.as,p=void 0===f?c||"div":f,m=(0,a.Z)(r,l),g=(0,u.vE)(i,e);return(0,d.jsx)(p,(0,t.Z)({ref:n,className:o()(s,g)},m))}));return m.defaultProps=p,m.displayName=s,m}},27472:function(e,r,n){var t=n(1413),a=n(72791),s=n(81694),o=n.n(s),c=n(80184);r.Z=function(e){return a.forwardRef((function(r,n){return(0,c.jsx)("div",(0,t.Z)((0,t.Z)({},r),{},{ref:n,className:o()(r.className,e)}))}))}},33168:function(e,r,n){n.d(r,{$:function(){return m}});var t=n(29439),a=n(4942),s=n(72791),o=n(74909);function c(){if(console&&console.warn){for(var e,r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var i={};function u(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];"string"===typeof r[0]&&i[r[0]]||("string"===typeof r[0]&&(i[r[0]]=new Date),c.apply(void 0,r))}function d(e,r,n){e.loadNamespaces(r,(function(){if(e.isInitialized)n();else{e.on("initialized",(function r(){setTimeout((function(){e.off("initialized",r)}),0),n()}))}}))}function l(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r.languages||!r.languages.length)return u("i18n.languages were undefined or empty",r.languages),!0;var t=r.languages[0],a=!!r.options&&r.options.fallbackLng,s=r.languages[r.languages.length-1];if("cimode"===t.toLowerCase())return!0;var o=function(e,n){var t=r.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===t||2===t};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!o(r.isLanguageChangingTo,e))&&(!!r.hasResourceBundle(t,e)||(!r.services.backendConnector.backend||!(!o(t,e)||a&&!o(s,e))))}function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function m(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.i18n,a=(0,s.useContext)(o.OO)||{},c=a.i18n,i=a.defaultNS,f=n||c||(0,o.nI)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new o.zv),!f){u("You will need to pass in an i18next instance by using initReactI18next");var m=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[m,{},!1];return g.t=m,g.i18n={},g.ready=!1,g}f.options.react&&void 0!==f.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=p(p(p({},(0,o.JP)()),f.options.react),r),h=v.useSuspense,b=v.keyPrefix,x=e||i||f.options&&f.options.defaultNS;x="string"===typeof x?[x]:x||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(x);var y=(f.isInitialized||f.initializedStoreOnce)&&x.every((function(e){return l(e,f,v)}));function Z(){return f.getFixedT(null,"fallback"===v.nsMode?x:x[0],b)}var N=(0,s.useState)(Z),w=(0,t.Z)(N,2),j=w[0],P=w[1],S=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=v.bindI18n,r=v.bindI18nStore;function n(){S.current&&P(Z)}return S.current=!0,y||h||d(f,x,(function(){S.current&&P(Z)})),e&&f&&f.on(e,n),r&&f&&f.store.on(r,n),function(){S.current=!1,e&&f&&e.split(" ").forEach((function(e){return f.off(e,n)})),r&&f&&r.split(" ").forEach((function(e){return f.store.off(e,n)}))}}),[f,x.join()]);var O=(0,s.useRef)(!0);(0,s.useEffect)((function(){S.current&&!O.current&&P(Z),O.current=!1}),[f]);var C=[j,f,y];if(C.t=j,C.i18n=f,C.ready=y,y)return C;if(!y&&!h)return C;throw new Promise((function(e){d(f,x,(function(){e()}))}))}},61360:function(e,r,n){e.exports=n.p+"static/media/asyncrum-logo-white.8088ca2cc960e1a1355c.png"}}]);
//# sourceMappingURL=469.c2dda517.chunk.js.map