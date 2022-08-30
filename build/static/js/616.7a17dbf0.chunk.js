"use strict";(self.webpackChunkasyncrum=self.webpackChunkasyncrum||[]).push([[616],{59270:function(e,r,t){t(72791);var s=t(47022),n=t(89743),a=t(2677),o=t(9140),i=t(43504),c=t(33168),u=t(61360),l=t(97106),d=t(80184);r.Z=function(e){var r=e.bottomLinks,t=e.children,m=(0,c.$)().t;return(0,l.aB)(),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"account-pages pt-2 pt-sm-5 pb-4 pb-sm-5",children:(0,d.jsx)(s.Z,{children:(0,d.jsx)(n.Z,{className:"justify-content-center",children:(0,d.jsxs)(a.Z,{md:8,lg:6,xl:5,xxl:4,children:[(0,d.jsxs)(o.Z,{children:[(0,d.jsx)(o.Z.Header,{className:"pt-4 pb-3 text-center bg-primary",children:(0,d.jsx)(i.rU,{to:"/",children:(0,d.jsx)("span",{children:(0,d.jsx)("img",{src:u,alt:"",height:"36"})})})}),(0,d.jsx)(o.Z.Body,{className:"p-4",children:t})]}),r]})})})}),(0,d.jsx)("footer",{className:"footer footer-alt",children:m("2022 \xa9 Asyncrum - Software Maestro 13th Team WBJ")})]})}},34616:function(e,r,t){t.r(r);var s=t(43504),n=t(16871),a=t(89743),o=t(2677),i=t(2469),c=t(43360),u=t(33168),l=t(13851),d=t(59270),m=t(97106),h=t(67023),p=t(2543),f=t(9478),g=t(80184),x=function(){var e=(0,u.$)().t;return(0,g.jsx)(a.Z,{className:"mt-3",children:(0,g.jsx)(o.Z,{className:"text-center",children:(0,g.jsxs)("p",{className:"text-muted",children:[e("Already have an account?")," ",(0,g.jsx)(s.rU,{to:"/account/login",className:"text-muted ms-1",children:(0,g.jsx)("b",{children:e("Log In")})})]})})})};r.default=function(){var e=(0,u.$)().t,r=(0,m.mr)(),t=r.loading,s=r.userSignUp,a=r.error,o=r.schemaResolver,b=r.onSubmit;return(0,g.jsxs)(g.Fragment,{children:[s?(0,g.jsx)(n.Fg,{to:"/account/confirm"}):null,(0,g.jsxs)(d.Z,{bottomLinks:(0,g.jsx)(x,{}),children:[(0,g.jsxs)("div",{className:"text-center w-75 m-auto",children:[(0,g.jsx)("h4",{className:"text-dark-50 text-center mt-0 fw-bold",children:e("Free Sign Up")}),(0,g.jsx)("p",{className:"text-muted mb-4",children:e("Don't have an account? Create your account, it takes less than a minute.")})]}),a&&(0,g.jsx)(i.Z,{variant:"danger",className:"my-2",children:a}),(0,g.jsxs)(l.JJ,{onSubmit:b,resolver:o,defaultValues:{},children:[(0,g.jsx)(l.yt,{label:e("Email address"),type:"email",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,g.jsx)(l.yt,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),(0,g.jsx)(l.yt,{label:e("Confirm Password"),type:"password",name:"confirmPassword",placeholder:e("Enter your password again"),containerClass:"mb-3"}),(0,g.jsx)(l.yt,{label:e("Full Name"),type:"text",name:"fullname",placeholder:e("Enter your name"),containerClass:"mb-3"}),(0,g.jsx)(l.yt,{label:e("I accept Terms and Conditions"),type:"checkbox",name:"checkboxsignup",containerClass:"mb-3 text-muted"}),(0,g.jsx)("div",{className:"mb-3 mb-0 text-center",children:(0,g.jsx)(c.Z,{variant:"primary",type:"submit",disabled:t,children:e("Sign Up")})}),(0,g.jsxs)("div",{className:"pt-3 mb-3 mb-0 text-center border-top",children:[(0,g.jsxs)(c.Z,{href:f.Z.API_URL+"/oauth2/authorization/naver?redirect_uri=http://localhost:3000/account/oauth",className:"signin-button",variant:"primary",type:"submit",disabled:t,children:[(0,g.jsx)("img",{className:"signin-icon",src:h,alt:"Naver Icon"})," Sign in with Naver"]}),(0,g.jsxs)(c.Z,{href:f.Z.API_URL+"/oauth2/authorization/google?redirect_uri=http://localhost:3000/account/oauth",className:"signin-button",variant:"primary",type:"submit",disabled:t,children:[(0,g.jsx)("img",{className:"signin-icon",src:p,alt:"Google Icon"})," Sign in with Google"]})]})]})]})]})}},97106:function(e,r,t){t.d(r,{aB:function(){return n},yq:function(){return l},f0:function(){return m},aU:function(){return p},NF:function(){return h},mr:function(){return f}});var s=t(72791);function n(){(0,s.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[])}var a=t(33168),o=t(65057),i=t(61265),c=t(50061),u=t(10765);function l(){var e=(0,u.Sc)(),r=e.dispatch,t=e.appSelector,n=(0,a.$)().t;(0,s.useEffect)((function(){r((0,c.Li)())}),[r]);var l=t((function(e){return{loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,passwordReset:e.Auth.passwordReset,resetPasswordSuccess:e.Auth.resetPasswordSuccess}}));return{loading:l.loading,passwordReset:l.passwordReset,resetPasswordSuccess:l.resetPasswordSuccess,error:l.error,schemaResolver:(0,i.X)(o.Ry().shape({username:o.Z_().required(n("Please enter Username"))})),onSubmit:function(e){r((0,c.gF)(e.username))}}}var d=t(16871);function m(){var e=(0,a.$)().t,r=(0,u.Sc)(),t=r.dispatch,n=r.appSelector,l=(0,d.TH)(),m="/";if(l.state){var h=l.state.from;m=h?h.pathname:"/"}(0,s.useEffect)((function(){t((0,c.Li)())}),[t]);var p=n((function(e){return{loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,userLoggedIn:e.Auth.userLoggedIn}}));return{loading:p.loading,userLoggedIn:p.userLoggedIn,user:p.user,error:p.error,schemaResolver:(0,i.X)(o.Ry().shape({username:o.Z_().required(e("Please enter username")),password:o.Z_().required(e("Please enter password"))})),onSubmit:function(e){t((0,c.pH)(e.username,e.password))},redirectUrl:m}}function h(){(0,a.$)().t;var e=(0,u.Sc)(),r=e.dispatch,t=e.appSelector,n=(0,d.TH)(),o="/";if(n.state){var i=n.state.from;o=i?i.pathname:"/"}(0,s.useEffect)((function(){r((0,c.Li)())}),[r]);var l=t((function(e){return{loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,userLoggedIn:e.Auth.userLoggedIn}}));return{loading:l.loading,userLoggedIn:l.userLoggedIn,user:l.user,error:l.error,onSubmit:function(e){r((0,c.k4)(e))},redirectUrl:o}}function p(){var e=(0,u.Sc)().dispatch;(0,s.useEffect)((function(){e((0,c.TX)())}),[e])}function f(){var e=(0,a.$)().t,r=(0,u.Sc)(),t=r.dispatch,n=(0,r.appSelector)((function(e){return{loading:e.Auth.loading,error:e.Auth.error,userSignUp:e.Auth.userSignUp}})),l=n.loading,d=n.userSignUp,m=n.error;(0,s.useEffect)((function(){t((0,c.Li)())}),[t]);return{loading:l,userSignUp:d,error:m,schemaResolver:(0,i.X)(o.Ry().shape({fullname:o.Z_().required(e("Please enter your full name")),email:o.Z_().required("Please enter your email").email("Please enter a valid email address"),password:o.Z_().required(e("Please enter password")),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match"),checkboxsignup:o.O7().oneOf([!0],"You must agree to the terms and conditions")})),onSubmit:function(e){t((0,c.EL)(e.fullname,e.email,e.password))}}}},61360:function(e,r,t){e.exports=t.p+"static/media/asyncrum-logo-white.8088ca2cc960e1a1355c.png"},67023:function(e,r,t){e.exports=t.p+"static/media/btnW_icon_circle.9372fd9c024c96e33c9d.png"},2543:function(e,r,t){e.exports=t.p+"static/media/google.bc87d0b7294862b71f61.png"}}]);
//# sourceMappingURL=616.7a17dbf0.chunk.js.map