(self.webpackChunkasyncrum=self.webpackChunkasyncrum||[]).push([[76],{12804:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var s=t(72791),a=t(43504),i=t(34358),r=t(81694),l=t.n(r),c=t(91765),o=t(93433),u=t(29439),d=t(16871),m=t(80184),g=function(e){var n=e.item,t=e.className;return(0,m.jsxs)(a.rU,{to:{pathname:n.url},target:n.target,className:l()("side-nav-link-ref","side-sub-nav-link",t),"data-menu-key":n.key,children:[n.icon&&(0,m.jsx)("i",{className:n.icon}),n.badge&&(0,m.jsx)("span",{className:l()("badge","bg-"+n.badge.variant,"rounded","font-10","float-end",{"text-dark":"light"===n.badge.variant,"text-light":"dark"===n.badge.variant||"secondary"===n.badge.variant}),children:n.badge.text}),(0,m.jsxs)("span",{children:[" ",n.label," "]})]})},h=function(e){var n=e.item,t=e.className,s=e.linkClassName;return(0,m.jsx)("li",{className:l()("side-nav-item",t),children:(0,m.jsx)(g,{item:n,className:s})})},f=t(17858),A=function e(n){var t=n.item,i=n.linkClassName,r=n.subMenuClassNames,c=n.activeMenuItems,o=n.toggleMenu,d=(0,s.useState)(c.includes(t.key)),g=(0,u.Z)(d,2),A=g[0],p=g[1];(0,s.useEffect)((function(){p(c.includes(t.key))}),[c,t]);return(0,m.jsxs)("li",{className:l()("side-nav-item",{"menuitem-active":A}),children:[(0,m.jsxs)(a.rU,{to:"#",onClick:function(e){e.preventDefault();var n=!A;return p(n),o&&o(t,n),!1},"data-menu-key":t.key,"aria-expanded":A,className:l()("has-arrow","side-sub-nav-link",i,{"menuitem-active":c.includes(t.key)?"active":""}),children:[t.icon&&(0,m.jsx)("i",{className:t.icon}),t.badge?(0,m.jsx)("span",{className:l()("badge","bg-"+t.badge.variant,"float-end",{"text-dark":"light"===t.badge.variant}),children:t.badge.text}):(0,m.jsx)("span",{className:"menu-arrow"}),(0,m.jsxs)("span",{children:[" ",t.label," "]})]}),(0,m.jsx)(f.Z,{in:A,children:(0,m.jsx)("ul",{className:l()(r),children:(t.children||[]).map((function(n,t){return(0,m.jsx)(s.Fragment,{children:n.children?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(e,{item:n,linkClassName:c.includes(n.key)?"active":"",activeMenuItems:c,subMenuClassNames:"side-nav-third-level",toggleMenu:o})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(h,{item:n,className:c.includes(n.key)?"menuitem-active":"",linkClassName:c.includes(n.key)?"active":""})})},t.toString())}))})})]})},p=function(e){var n=e.menuItems,t=(0,d.TH)(),a=(0,s.useRef)(null),i=(0,s.useState)([]),r=(0,u.Z)(i,2),l=r[0],g=r[1],f=function(e,t){t&&g([e.key].concat((0,o.Z)((0,c.Sh)(n,e))))},p=(0,s.useCallback)((function(){var e=document.getElementById("main-side-menu"),s=null;if(e){for(var a=e.getElementsByClassName("side-nav-link-ref"),i=0;i<a.length;++i)if(t.pathname===a[i].pathname){s=a[i];break}if(s){var r=s.getAttribute("data-menu-key"),l=(0,c.tD)(n,r);l&&g([l.key].concat((0,o.Z)((0,c.Sh)(n,l))))}}}),[t.pathname,n]);return(0,s.useEffect)((function(){p()}),[p]),(0,m.jsx)("ul",{className:"side-nav",ref:a,id:"main-side-menu",children:(n||[]).map((function(e,n){return(0,m.jsx)(s.Fragment,{children:e.isTitle?(0,m.jsx)("li",{className:"side-nav-title side-nav-item",children:e.label}):(0,m.jsx)(m.Fragment,{children:e.children?(0,m.jsx)(A,{item:e,toggleMenu:f,subMenuClassNames:"side-nav-second-level",activeMenuItems:l,linkClassName:"side-nav-link"}):(0,m.jsx)(h,{item:e,linkClassName:"side-nav-link",className:l.includes(e.key)?"menuitem-active":""})})},n.toString())}))})},x=t(90271),v=t(61360);var j=t.p+"static/media/help-icon.152a10a09c89e1bf8abebf29123018d8.svg",b=function(e){var n=e.hideUserProfile,t=JSON.parse(sessionStorage.getItem("asyncrum_user"));return(0,m.jsxs)(m.Fragment,{children:[!n&&(0,m.jsx)("div",{className:"leftbar-user",children:(0,m.jsxs)(a.rU,{to:"/",children:[(0,m.jsx)("img",{src:"",alt:"",height:"42",className:"rounded-circle shadow-sm"}),(0,m.jsx)("span",{className:"leftbar-user-name",children:t.fullname})]})}),(0,m.jsx)(p,{menuItems:(0,c.vf)()}),(0,m.jsxs)("div",{className:l()("help-box","text-center",{"text-white":n}),children:[(0,m.jsx)(a.rU,{to:"/",className:"float-end close-btn text-white",children:(0,m.jsx)("i",{className:"mdi mdi-close"})}),(0,m.jsx)("img",{src:j,height:"90",alt:"Helper Icon"}),(0,m.jsx)("h5",{className:"mt-3",children:"Unlimited Access"}),(0,m.jsx)("p",{className:"mb-3",children:"Upgrade to plan to get access to unlimited reports"}),(0,m.jsx)("button",{className:l()("btn","btn-sm",n?"btn-outline-light":"btn-outline-primary"),children:"Upgrade"})]}),(0,m.jsx)("div",{className:"clearfix"})]})},N=function(e){var n=e.isCondensed,t=(e.isLight,e.hideLogo),r=e.hideUserProfile,l=(0,s.useRef)(null),c=function(e){l&&l.current&&l.current.contains(e.target)||document.body&&document.body.classList.remove("sidebar-enable")};return(0,s.useEffect)((function(){return document.addEventListener("mousedown",c,!1),function(){document.removeEventListener("mousedown",c,!1)}}),[]),(0,m.jsxs)("div",{className:"leftside-menu",ref:l,children:[!t&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(a.rU,{to:"/",className:"logo text-center logo-light",children:[(0,m.jsx)("span",{className:"logo-lg",children:(0,m.jsx)("img",{src:v,alt:"logo",height:"24"})}),(0,m.jsx)("span",{className:"logo-sm",children:(0,m.jsx)("img",{src:x,alt:"logo",height:"16"})})]}),(0,m.jsxs)(a.rU,{to:"/",className:"logo text-center logo-dark",children:[(0,m.jsx)("span",{className:"logo-lg",children:(0,m.jsx)("img",{src:v,alt:"logo",height:"24"})}),(0,m.jsx)("span",{className:"logo-sm",children:(0,m.jsx)("img",{src:x,alt:"logo",height:"16"})})]})]}),!n&&(0,m.jsx)(i.Z,{style:{maxHeight:"100%"},timeout:500,scrollbarMaxSize:320,children:(0,m.jsx)(b,{hideUserProfile:r})}),n&&(0,m.jsx)(b,{hideUserProfile:r})]})}},80888:function(e,n,t){"use strict";var s=t(79047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,i,r){if(r!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},52007:function(e,n,t){e.exports=t(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},17858:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var s=t(1413),a=t(45987),i=t(4942),r=t(81694),l=t.n(r),c=t(75427),o=t(72791),u=t(70322),d=t(71380);var m,g=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];e.apply(this,s),n.apply(this,s)}}),null)},h=t(67202),f=t(85007),A=t(80184),p=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function v(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],s=x[e];return t+parseInt((0,c.Z)(n,s[0]),10)+parseInt((0,c.Z)(n,s[1]),10)}var j=(m={},(0,i.Z)(m,u.Wj,"collapse"),(0,i.Z)(m,u.Ix,"collapsing"),(0,i.Z)(m,u.d0,"collapsing"),(0,i.Z)(m,u.cn,"collapse show"),m),b={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:v},N=o.forwardRef((function(e,n){var t=e.onEnter,i=e.onEntering,r=e.onEntered,c=e.onExit,u=e.onExiting,m=e.className,x=e.children,b=e.dimension,N=void 0===b?"height":b,k=e.getDimensionValue,E=void 0===k?v:k,y=(0,a.Z)(e,p),C="function"===typeof N?N():N,M=(0,o.useMemo)((function(){return g((function(e){e.style[C]="0"}),t)}),[C,t]),O=(0,o.useMemo)((function(){return g((function(e){var n="scroll".concat(C[0].toUpperCase()).concat(C.slice(1));e.style[C]="".concat(e[n],"px")}),i)}),[C,i]),w=(0,o.useMemo)((function(){return g((function(e){e.style[C]=null}),r)}),[C,r]),Z=(0,o.useMemo)((function(){return g((function(e){e.style[C]="".concat(E(C,e),"px"),(0,h.Z)(e)}),c)}),[c,E,C]),F=(0,o.useMemo)((function(){return g((function(e){e.style[C]=null}),u)}),[C,u]);return(0,A.jsx)(f.Z,(0,s.Z)((0,s.Z)({ref:n,addEndListener:d.Z},y),{},{"aria-expanded":y.role?y.in:null,onEnter:M,onEntering:O,onEntered:w,onExit:Z,onExiting:F,childRef:x.ref,children:function(e,n){return o.cloneElement(x,(0,s.Z)((0,s.Z)({},n),{},{className:l()(m,x.props.className,j[e],"width"===C&&"collapse-horizontal")}))}}))}));N.defaultProps=b;var k=N},90271:function(e){"use strict";e.exports="data:image/png;base64,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"},61360:function(e,n,t){"use strict";e.exports=t.p+"static/media/asyncrum-logo-white.8088ca2cc960e1a1355c.png"}}]);
//# sourceMappingURL=76.d2ef7d87.chunk.js.map