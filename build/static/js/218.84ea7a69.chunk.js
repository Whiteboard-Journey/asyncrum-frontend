"use strict";(self.webpackChunkasyncrum=self.webpackChunkasyncrum||[]).push([[218],{40544:function(e,n,s){s.r(n),s.d(n,{default:function(){return g}});var o=s(29439),t=s(43504),a=s(81694),i=s.n(a),c=s(50061),r=s(87541),l=s(10765),A=[{label:"Settings",icon:"mdi mdi-cog",redirectTo:"settings/user"},{label:"Logout",icon:"mdi mdi-logout",redirectTo:"/account/logout"}],d=s(8476),u=s(80184),m=function(e){var n=e.userTitle,s=e.username,a=e.menuItems,c=e.userImage,r=(0,l.OT)(),A=(0,o.Z)(r,2),m=A[0],p=A[1];return(0,u.jsxs)(d.Z,{show:m,onToggle:p,children:[(0,u.jsxs)(d.Z.Toggle,{variant:"link",id:"dropdown-profile",as:t.rU,to:"#",onClick:p,className:"nav-link dropdown-toggle nav-user arrow-none me-0",children:[(0,u.jsx)("span",{className:"account-user-avatar",children:(0,u.jsx)("img",{src:c,className:"rounded-circle",alt:"user",referrerPolicy:"no-referrer"})}),(0,u.jsxs)("span",{children:[(0,u.jsx)("span",{className:"account-user-name",children:s}),(0,u.jsx)("span",{className:"account-position",children:n})]})]}),(0,u.jsx)(d.Z.Menu,{align:"end",className:"dropdown-menu-animated topbar-dropdown-menu profile-dropdown",children:(0,u.jsxs)("div",{onClick:p,children:[(0,u.jsx)("div",{className:"dropdown-header noti-title",children:(0,u.jsx)("h6",{className:"text-overflow m-0",children:"Welcome !"})}),a.map((function(e,n){return(0,u.jsxs)(t.rU,{to:e.redirectTo,className:"dropdown-item notify-item",children:[(0,u.jsx)("i",{className:i()(e.icon,"me-1")}),(0,u.jsx)("span",{children:e.label})]},n+"-profile-menu")}))]})})]})},p=s(90271),f=s(61360),g=function(e){var n=e.hideLogo,s=e.navCssClasses,a=e.openLeftMenuCallBack,d=(e.topbarDark,(0,l.Sc)()),g=d.dispatch,h=d.appSelector,j=(0,l.Sj)().width,x=(0,l.OT)(),v=(0,o.Z)(x,2),E=v[0],T=v[1],w=h((function(e){return{user:e.Auth.user}})).user,N=n?"":"container-fluid",b=h((function(e){return{layoutType:e.Layout.layoutType,leftSideBarType:e.Layout.leftSideBarType}})),k=b.layoutType,O=b.leftSideBarType,C=function(){switch(T(),a&&a(),k){case r.Tj.LAYOUT_VERTICAL:j>=768&&("fixed"!==O&&"scrollable"!==O||g((0,c.QY)(r.AC.LEFT_SIDEBAR_TYPE_CONDENSED)),"condensed"===O&&g((0,c.QY)(r.AC.LEFT_SIDEBAR_TYPE_FIXED)));break;case r.Tj.LAYOUT_FULL:document.body&&document.body.classList.toggle("hide-menu")}};return(0,u.jsx)("div",{className:i()("navbar-custom",s),children:(0,u.jsxs)("div",{className:N,children:[!n&&(0,u.jsxs)(t.rU,{to:"/",className:"topnav-logo",children:[(0,u.jsx)("span",{className:"topnav-logo-lg",children:(0,u.jsx)("img",{src:f,alt:"logo",height:"16"})}),(0,u.jsx)("span",{className:"topnav-logo-sm",children:(0,u.jsx)("img",{src:p,alt:"logo",height:"16"})})]}),(0,u.jsxs)("ul",{className:"list-unstyled topbar-menu float-end mb-0",children:[(0,u.jsx)("li",{className:"notification-list",children:(0,u.jsx)("button",{className:"nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none",onClick:function(){g((0,c.fB)())},children:(0,u.jsx)("i",{className:"dripicons-gear noti-icon"})})}),(0,u.jsx)("li",{className:"dropdown notification-list",children:(0,u.jsx)(m,{userImage:w.profileImageUrl,menuItems:A,username:w.fullname,userTitle:"Developer"})})]}),(k===r.Tj.LAYOUT_VERTICAL||k===r.Tj.LAYOUT_FULL)&&(0,u.jsx)("button",{className:"button-menu-mobile open-left",onClick:C,children:(0,u.jsx)("i",{className:"mdi mdi-menu"})}),k===r.Tj.LAYOUT_HORIZONTAL&&(0,u.jsx)(t.rU,{to:"#",className:i()("navbar-toggle",{open:E}),onClick:C,children:(0,u.jsxs)("div",{className:"lines",children:[(0,u.jsx)("span",{}),(0,u.jsx)("span",{}),(0,u.jsx)("span",{})]})}),k===r.Tj.LAYOUT_DETACHED&&(0,u.jsx)(t.rU,{to:"#",className:"button-menu-mobile disable-btn",onClick:C,children:(0,u.jsxs)("div",{className:"lines",children:[(0,u.jsx)("span",{}),(0,u.jsx)("span",{}),(0,u.jsx)("span",{})]})})]})})}},73201:function(e,n,s){var o=s(72791),t=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};n.Z=function(e,n){return(0,o.useMemo)((function(){return function(e,n){var s=t(e),o=t(n);return function(e){s&&s(e),o&&o(e)}}(e,n)}),[e,n])}},3070:function(e,n,s){var o=s(97357),t=!1,a=!1;try{var i={get passive(){return t=!0},get once(){return a=t=!0}};o.Z&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(c){}n.ZP=function(e,n,s,o){if(o&&"boolean"!==typeof o&&!a){var i=o.once,c=o.capture,r=s;!a&&i&&(r=s.__once||function e(o){this.removeEventListener(n,e,c),s.call(this,o)},s.__once=r),e.addEventListener(n,r,t?o:c)}e.addEventListener(n,s,o)}},97357:function(e,n){n.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},92899:function(e,n,s){var o=s(3070),t=s(36382);n.Z=function(e,n,s,a){return(0,o.ZP)(e,n,s,a),function(){(0,t.Z)(e,n,s,a)}}},78376:function(e,n,s){function o(e){return e&&e.ownerDocument||document}s.d(n,{Z:function(){return o}})},36382:function(e,n){n.Z=function(e,n,s,o){var t=o&&"boolean"!==typeof o?o.capture:o;e.removeEventListener(n,s,t),s.__once&&e.removeEventListener(n,s.__once,t)}},90271:function(e){e.exports="data:image/png;base64,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"},61360:function(e,n,s){e.exports=s.p+"static/media/asyncrum-logo-white.8088ca2cc960e1a1355c.png"}}]);
//# sourceMappingURL=218.84ea7a69.chunk.js.map