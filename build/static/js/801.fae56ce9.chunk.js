"use strict";(self.webpackChunkasyncrum=self.webpackChunkasyncrum||[]).push([[801],{60801:function(e,a,t){t.d(a,{J7:function(){return S},yt:function(){return y},V1:function(){return R},w8:function(){return A},SJ:function(){return _},JJ:function(){return l},SB:function(){return H}});var r=t(1413),n=t(72791),c=t(61134),s=t(80184),l=function(e){var a=e.defaultValues,t=e.resolver,l=e.children,i=e.onSubmit,o=e.formClass,d=(0,c.cI)({defaultValues:a,resolver:t}),h=d.handleSubmit,u=d.register,m=d.control,f=d.formState.errors;return(0,s.jsx)("form",{onSubmit:h(i),className:o,noValidate:!0,children:Array.isArray(l)?l.map((function(e){return e.props&&e.props.name?n.createElement(e.type,(0,r.Z)({},(0,r.Z)((0,r.Z)({},e.props),{},{register:u,key:e.props.name,errors:f,control:m}))):e})):l})},i=t(45987),o=t(29439),d=t(99410),h=t(29795),u=t(81694),m=t.n(u),f=t(10765),p=["label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","refCallback","children","rows"],x=function(e){var a=e.name,t=e.placeholder,n=e.refCallback,c=e.errors,l=e.register,i=e.className,u=(0,f.OT)(),p=(0,o.Z)(u,2),x=p[0],y=p[1];return(0,s.jsxs)(d.Z,{className:"mb-0",children:[(0,s.jsx)(h.Z.Control,(0,r.Z)((0,r.Z)({type:x?"text":"password",placeholder:t,name:a,id:a,as:"input",ref:function(e){n&&n(e)},className:i,isInvalid:!(!c||!c[a])},l?l(a):{}),{},{autoComplete:a})),(0,s.jsx)("div",{className:m()("input-group-text","input-group-password",{"show-password":x}),"data-password":x?"true":"false",children:(0,s.jsx)("span",{className:"password-eye",onClick:y})})]})},y=function(e){var a=e.label,t=e.type,n=e.name,c=e.placeholder,l=e.register,o=e.errors,d=(e.control,e.className),u=e.labelClassName,m=e.containerClass,f=e.refCallback,y=e.children,T=(e.rows,(0,i.Z)(e,p)),L="textarea"===t?"textarea":"select"===t?"select":"input";return(0,s.jsx)(s.Fragment,{children:"hidden"===t?(0,s.jsx)("input",(0,r.Z)((0,r.Z)({type:t,name:n},l?l(n):{}),T)):(0,s.jsx)(s.Fragment,{children:"password"===t?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(h.Z.Group,{className:m,children:[a?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(h.Z.Label,{className:u,children:a})," ",y," "]}):null,(0,s.jsx)(x,{name:n,placeholder:c,refCallback:f,errors:o,register:l,className:d}),o&&o[n]?(0,s.jsx)(h.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[n].message}):null]})}):(0,s.jsx)(s.Fragment,{children:"select"===t?(0,s.jsxs)(h.Z.Group,{className:m,children:[a?(0,s.jsx)(h.Z.Label,{className:u,children:a}):null,(0,s.jsx)(h.Z.Select,(0,r.Z)((0,r.Z)((0,r.Z)({type:t,label:a,name:n,id:n,ref:function(e){f&&f(e)},comp:L,className:d,isInvalid:!(!o||!o[n])},l?l(n):{}),T),{},{children:y})),o&&o[n]?(0,s.jsx)(h.Z.Control.Feedback,{type:"invalid",children:o[n].message}):null]}):(0,s.jsx)(s.Fragment,{children:"checkbox"===t||"radio"===t?(0,s.jsxs)(h.Z.Group,{className:m,children:[(0,s.jsx)(h.Z.Check,(0,r.Z)((0,r.Z)({type:t,label:a,name:n,id:n,ref:function(e){f&&f(e)},className:d,isInvalid:!(!o||!o[n])},l?l(n):{}),T)),o&&o[n]?(0,s.jsx)(h.Z.Control.Feedback,{type:"invalid",children:o[n].message}):null]}):(0,s.jsxs)(h.Z.Group,{className:m,children:[a?(0,s.jsx)(h.Z.Label,{className:u,children:a}):null,(0,s.jsx)(h.Z.Control,(0,r.Z)((0,r.Z)((0,r.Z)({type:t,placeholder:c,name:n,id:n,as:L,ref:function(e){f&&f(e)},className:d,isInvalid:!(!o||!o[n])},l?l(n):{}),T),{},{autoComplete:n,children:y||null})),o&&o[n]?(0,s.jsx)(h.Z.Control.Feedback,{type:"invalid",children:o[n].message}):null]})})})})})},T=t(87541),L=function(e){var a=e.changeLayoutType,t=e.layoutType,r=e.layoutConstants;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h5",{className:"mt-3",children:"Layout"}),(0,s.jsx)("hr",{className:"mt-1"}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-type",value:r.LAYOUT_VERTICAL,id:"vertical-layout",checked:t===r.LAYOUT_VERTICAL}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"vertical-layout",children:"Vertical Layout"})]}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-type",value:r.LAYOUT_HORIZONTAL,id:"horizontal-layout",checked:t===r.LAYOUT_HORIZONTAL}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"horizontal-layout",children:"Horizontal Layout"})]}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-type",value:r.LAYOUT_DETACHED,id:"detached-layout",checked:t===r.LAYOUT_DETACHED}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"detached-layout",children:"Detached Layout"})]}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-type",value:r.LAYOUT_FULL,id:"full-mode-layout",checked:t===r.LAYOUT_FULL}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"full-mode-layout",children:"Full Layout"})]})]})},j=function(e){var a=e.changeLayoutColorScheme,t=e.layoutColor,r=e.layoutConstants;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h5",{className:"mt-4",children:"Color Scheme"}),(0,s.jsx)("hr",{className:"mt-1"}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-color",value:r.LAYOUT_COLOR_LIGHT,id:"light-mode",checked:t===r.LAYOUT_COLOR_LIGHT}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"vertical-layout",children:"Light Mode"})]}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return a(e.target.value)},name:"layout-color",value:r.LAYOUT_COLOR_DARK,id:"dark-mode",checked:t===r.LAYOUT_COLOR_DARK}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"horizontal-layout",children:"Dark Mode"})]})]})},g=function(e){var a=e.changeWidthMode,t=e.layoutWidth,r=e.layoutConstants;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h5",{className:"mt-4",children:"Width"}),(0,s.jsx)("hr",{className:"mt-1"}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",name:"width",id:"fluid-check",value:r.LAYOUT_WIDTH_FLUID,onChange:function(e){return a(e.target.value)},checked:t===r.LAYOUT_WIDTH_FLUID}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"fluid-check",children:"Fluid"})]}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",name:"width",id:"boxed-check",value:r.LAYOUT_WIDTH_BOXED,onChange:function(e){return a(e.target.value)},checked:t===r.LAYOUT_WIDTH_BOXED}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"boxed-check",children:"Boxed"})]})]})},C=function(e){var a=e.changeLeftSidebarTheme,t=e.leftSideBarTheme,r=e.layoutConstants;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h5",{className:"mt-4",children:"Left Sidebar Color"}),(0,s.jsx)("hr",{className:"mt-1"}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",name:"theme",id:"brand-check",value:r.LEFT_SIDEBAR_THEME_DEFAULT,onChange:function(e){return a(e.target.value)},checked:t===r.LEFT_SIDEBAR_THEME_DEFAULT}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"brand-check",children:"Default"})]}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",name:"theme",id:"light-check",value:r.LEFT_SIDEBAR_THEME_LIGHT,onChange:function(e){return a(e.target.value)},checked:t===r.LEFT_SIDEBAR_THEME_LIGHT}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"light-check",children:"Light"})]}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",name:"theme",id:"dark-check",value:r.LEFT_SIDEBAR_THEME_DARK,onChange:function(e){return a(e.target.value)},checked:t===r.LEFT_SIDEBAR_THEME_DARK}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"dark-check",children:"Dark"})]})]})},b=function(e){var a=e.changeLeftSiderbarType,t=e.leftSideBarType,r=e.layoutConstants;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1 mt-3",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",name:"leftsidebar-size",id:"default-check",value:r.LEFT_SIDEBAR_TYPE_FIXED,onChange:function(e){return a(e.target.value)},checked:t===r.LEFT_SIDEBAR_TYPE_FIXED}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"default-check",children:"Fixed"})]}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",name:"leftsidebar-size",id:"condensed-check",value:r.LEFT_SIDEBAR_TYPE_CONDENSED,onChange:function(e){return a(e.target.value)},checked:t===r.LEFT_SIDEBAR_TYPE_CONDENSED}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"condensed-check",children:"Condensed"})]}),(0,s.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,s.jsx)(h.Z.Check.Input,{type:"radio",name:"leftsidebar-size",id:"compact-check",value:r.LEFT_SIDEBAR_TYPE_SCROLLABLE,onChange:function(e){return a(e.target.value)},checked:t===r.LEFT_SIDEBAR_TYPE_SCROLLABLE}),(0,s.jsx)(h.Z.Check.Label,{htmlFor:"compact-check",children:"Scrollable"})]})]})},k=t(50061);var _=function(){var e=function(){var e=(0,f.Sc)(),a=e.dispatch,t=(0,e.appSelector)((function(e){return{layoutColor:e.Layout.layoutColor,layoutType:e.Layout.layoutType,layoutWidth:e.Layout.layoutWidth,leftSideBarTheme:e.Layout.leftSideBarTheme,leftSideBarType:e.Layout.leftSideBarType}})),r=t.layoutColor,c=t.layoutType,s=t.layoutWidth,l=t.leftSideBarType,i=t.leftSideBarTheme,d=(0,n.useState)(!1),h=(0,o.Z)(d,2),u=h[0],m=h[1],p=(0,n.useState)(!1),x=(0,o.Z)(p,2),y=x[0],L=x[1],j=(0,n.useState)(!1),g=(0,o.Z)(j,2),C=g[0],b=g[1],_=(0,n.useCallback)((function(){m(c!==T.Tj.LAYOUT_DETACHED&&c!==T.Tj.LAYOUT_FULL),L(c!==T.Tj.LAYOUT_HORIZONTAL&&c!==T.Tj.LAYOUT_DETACHED),b(c!==T.Tj.LAYOUT_HORIZONTAL)}),[c]);(0,n.useEffect)((function(){_()}),[_]);var E=function(e){switch(e){case"topnav":a((0,k.c_)(T.Tj.LAYOUT_HORIZONTAL));break;case"detached":a((0,k.c_)(T.Tj.LAYOUT_DETACHED));break;case"full":a((0,k.c_)(T.Tj.LAYOUT_FULL));break;default:a((0,k.c_)(T.Tj.LAYOUT_VERTICAL))}},v=function(e){a("dark"===e?(0,k.ne)(T.fU.LAYOUT_COLOR_DARK):(0,k.ne)(T.fU.LAYOUT_COLOR_LIGHT))},S=function(e){a("boxed"===e?(0,k.kn)(T.ik.LAYOUT_WIDTH_BOXED):(0,k.kn)(T.ik.LAYOUT_WIDTH_FLUID))},Z=function(e){switch(e){case"default":a((0,k.$g)(T.Mg.LEFT_SIDEBAR_THEME_DEFAULT));break;case"light":a((0,k.$g)(T.Mg.LEFT_SIDEBAR_THEME_LIGHT));break;default:a((0,k.$g)(T.Mg.LEFT_SIDEBAR_THEME_DARK))}},A=function(e){switch(e){case"condensed":a((0,k.QY)(T.AC.LEFT_SIDEBAR_TYPE_CONDENSED));break;case"scrollable":a((0,k.QY)(T.AC.LEFT_SIDEBAR_TYPE_SCROLLABLE));break;default:a((0,k.QY)(T.AC.LEFT_SIDEBAR_TYPE_FIXED))}};return{layoutColor:r,layoutType:c,layoutWidth:s,leftSideBarType:l,leftSideBarTheme:i,disableLayoutWidth:u,disableSidebarTheme:y,disableSidebarType:C,changeLayoutType:E,changeLayoutColorScheme:v,changeWidthMode:S,changeLeftSidebarTheme:Z,changeLeftSiderbarType:A,reset:function(){E(T.Tj.LAYOUT_VERTICAL),v(T.fU.LAYOUT_COLOR_LIGHT),S(T.ik.LAYOUT_WIDTH_FLUID),Z(T.Mg.LEFT_SIDEBAR_THEME_DEFAULT),A(T.AC.LEFT_SIDEBAR_TYPE_FIXED)}}}(),a=e.layoutColor,t=e.layoutType,r=e.layoutWidth,c=e.leftSideBarType,l=e.leftSideBarTheme,i=e.disableLayoutWidth,d=e.disableSidebarTheme,h=e.disableSidebarType,u=e.changeLayoutType,m=e.changeLayoutColorScheme,p=e.changeWidthMode,x=e.changeLeftSidebarTheme,y=e.changeLeftSiderbarType,_=e.reset;return(0,s.jsxs)("div",{className:"p-3",children:[(0,s.jsxs)("div",{className:"alert alert-warning",role:"alert",children:[(0,s.jsx)("strong",{children:"Customize "})," the overall color scheme, sidebar menu, etc."]}),(0,s.jsx)(L,{changeLayoutType:u,layoutType:t,layoutConstants:T.Tj}),(0,s.jsx)(j,{changeLayoutColorScheme:m,layoutColor:a,layoutConstants:T.fU}),i&&(0,s.jsx)(g,{changeWidthMode:p,layoutWidth:r,layoutConstants:T.ik}),d&&(0,s.jsx)(C,{changeLeftSidebarTheme:x,leftSideBarTheme:l,layoutConstants:T.Mg}),h&&(0,s.jsx)(b,{changeLeftSiderbarType:y,leftSideBarType:c,layoutConstants:T.AC}),(0,s.jsx)("div",{className:"d-grid mt-4",children:(0,s.jsx)("button",{className:"btn btn-primary",id:"resetBtn",onClick:function(){return _()},children:"Reset to Default"})})]})},E=t(89743),v=t(2677),S=function(e){var a=e.rawFaqs;return(0,s.jsx)(E.Z,{className:"mt-5",children:a.map((function(e,a){return e.id%2!==0?(0,s.jsx)(v.Z,{lg:{span:5,offset:1},children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"faq-question-q-box",children:"Q."}),(0,s.jsx)("h4",{className:m()("faq-question",e.titleClass),children:e.question}),(0,s.jsx)("p",{className:m()("faq-answer mb-4",e.textClass),children:e.answer})]})},a.toString()):(0,s.jsx)(v.Z,{lg:5,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"faq-question-q-box",children:"Q."}),(0,s.jsx)("h4",{className:m()("faq-question",e.titleClass),children:e.question}),(0,s.jsx)("p",{className:m()("faq-answer mb-4",e.textClass),children:e.answer})]})},a.toString())}))})},Z=t(9140),A=function(e){var a=e.plans,t=e.containerClass;return(0,s.jsx)(E.Z,{className:t,children:a.map((function(e,a){return(0,s.jsx)(v.Z,{md:4,children:(0,s.jsx)(Z.Z,{className:m()("card-pricing",{"card-pricing-recommended":e.isRecommended}),children:(0,s.jsxs)(Z.Z.Body,{className:"text-center",children:[e.isRecommended&&(0,s.jsx)("div",{className:"card-pricing-plan-tag",children:"Recommended"}),(0,s.jsx)("p",{className:"card-pricing-plan-name fw-bold text-uppercase",children:e.name}),(0,s.jsx)("i",{className:m()("card-pricing-icon",e.icon,"text-primary")}),(0,s.jsxs)("h2",{className:"card-pricing-price",children:[e.price," ",(0,s.jsxs)("span",{children:["/ ",e.duration]})]}),(0,s.jsx)("ul",{className:"card-pricing-features",children:e.features.map((function(e,a){return(0,s.jsx)("li",{children:e},a.toString())}))}),(0,s.jsx)("button",{className:"btn btn-primary mt-4 mb-2 btn-rounded",children:"Choose Plan"})]})})},a.toString())}))})},N=t(2461),R=function(e){var a=e.breadCrumbItems,t=e.title;return(0,s.jsx)(E.Z,{children:(0,s.jsx)(v.Z,{children:(0,s.jsxs)("div",{className:"page-title-box",children:[(0,s.jsx)("div",{className:"page-title-right",children:(0,s.jsxs)(N.Z,{listProps:{className:"m-0"},children:[(0,s.jsx)(N.Z.Item,{href:"/",children:"Asyncrum"}),a.map((function(e,a){return e.active?(0,s.jsx)(N.Z.Item,{active:!0,children:e.label},a.toString()):(0,s.jsx)(N.Z.Item,{href:e.path,children:e.label},a.toString())}))]})}),(0,s.jsx)("h4",{className:"page-title",children:t})]})})})},I=t(30097),D=t.n(I),F=t(15861),O=t(64687),w=t.n(O),U=t(18914),B=t(37792),Y=function(){var e=(0,(0,f.Sc)().appSelector)((function(e){return{user:e.Auth.user}})).user,a=(0,n.useState)("idle"),t=(0,o.Z)(a,2),r=t[0],c=t[1],s=(0,n.useRef)(null),l=(0,n.useRef)(null),i=e.fullname+" "+Date.now(),d="Daily standups - "+i,h=(0,U.useReactMediaRecorder)({video:!0}),u=(h.status,h.startRecording),m=h.stopRecording,p=h.mediaBlobUrl,x=h.previewStream,y=(0,U.useReactMediaRecorder)({video:!0,screen:!0}),T=y.startRecording,L=y.stopRecording,j=y.mediaBlobUrl,g=function(){var a=(0,F.Z)(w().mark((function a(t,r){var n,c,s,l,o,h;return w().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(t);case 2:return n=a.sent,a.next=5,n.blob();case 5:return c=a.sent,s={title:i+" "+r,description:d+" "+r,scope:"team",teamId:e.currentTeam.id},a.next=9,(0,B.ae)(s);case 9:return l=a.sent,o=l.data.preSignedURL,h=new File([c],i+" "+r+".mp4",{type:"video/mp4"}),a.next=14,(0,B.nD)(o,h);case 14:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),C=function(){var e=(0,F.Z)(w().mark((function e(){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p&&j){e.next=3;break}return alert("Recordings are not ready"),e.abrupt("return");case 3:return e.next=5,g(p,"cam");case 5:return e.next=7,g(j,"screen");case 7:window.location.reload();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){s.current&&x&&(s.current.srcObject=x)}),[x]),{recordingState:r,webcamRef:l,videoRef:s,previewStream:x,camMediaBlobUrl:p,screenMediaBlobUrl:j,setRecordingState:c,camStartRecording:u,camStopRecording:m,screenStartRecording:T,screenStopRecording:L,uploadVideoes:C}},H=function(){var e=Y(),a=e.recordingState,t=e.webcamRef,r=e.videoRef,n=e.previewStream,c=e.camMediaBlobUrl,l=e.screenMediaBlobUrl,i=e.setRecordingState,o=e.camStartRecording,d=e.camStopRecording,h=e.screenStartRecording,u=e.screenStopRecording,m=e.uploadVideoes;return(0,s.jsx)("div",{className:"video-recorder",children:(0,s.jsxs)("div",{children:["idle"===a&&(0,s.jsx)(D(),{audio:!1,ref:t,videoConstraints:{facingMode:"user"},width:320,height:240,style:{marginLeft:"auto",marginRight:"auto",display:"block"}}),"recording"===a&&n&&(0,s.jsx)("div",{children:(0,s.jsx)("video",{ref:r,width:320,height:240,controls:!0,playsInline:!0,autoPlay:!0,style:{marginLeft:"auto",marginRight:"auto",display:"block"}})}),"recorded"===a&&(0,s.jsxs)("div",{children:[(0,s.jsx)("video",{src:c,controls:!0,autoPlay:!0,playsInline:!0,width:320,height:240,style:{marginLeft:"auto",marginRight:"auto",display:"block"}}),(0,s.jsx)("video",{src:l,controls:!0,autoPlay:!0,playsInline:!0,width:960,height:540,style:{marginLeft:"auto",marginRight:"auto",display:"block"}})]}),"recording"!==a?"idle"===a?(0,s.jsx)("div",{className:"mt-4 mb-3 text-center",children:(0,s.jsx)("button",{className:"btn btn-primary",onClick:function(){h(),o(),i("recording")},children:"Start Recording"})}):(0,s.jsxs)("div",{className:"mt-4 mb-3 text-center",children:[(0,s.jsx)("button",{className:"btn btn-primary me-3",onClick:function(){i("idle")},children:"Reshoot"}),(0,s.jsx)("button",{className:"btn btn-primary",onClick:m,children:"Save Recording"})]}):(0,s.jsx)("div",{className:"mt-4 mb-3 text-center",children:(0,s.jsx)("button",{className:"btn btn-danger",onClick:function(){d(),u(),i("recorded")},children:"Stop Recording"})})]})})}}}]);
//# sourceMappingURL=801.fae56ce9.chunk.js.map