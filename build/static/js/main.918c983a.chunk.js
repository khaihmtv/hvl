(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),c=t(20),o=t.n(c),l=t(11),i=t(12),s=t(14),m=t(13),u=t(15),d=t(39),p=t(1),g=t.n(p),f=t(37);f.a.initialize("UA-110410381-1");var h=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView)}},{key:"sendPageView",value:function(e){f.a.set({page:e.pathname}),f.a.pageview(e.pathname)}},{key:"render",value:function(){return this.props.children}}]),a}(r.a.Component);h.contextTypes={router:g.a.object};var b=t(9),E=t(25),v=t(109),y=E.a.create("content"),N=function(e){var a=e.tag,t=e.className,n=Object(b.a)(e,["tag","className"]),c=y.b(t);return r.a.createElement(a,Object.assign({className:c},n))};N.defaultProps={tag:v.a};var x=N,O=function(e){var a=e.children,t=Object(b.a)(e,["children"]);return r.a.createElement("main",Object.assign({className:"cr-app bg-light"},t),r.a.createElement(x,{fluid:!0},a))},k=t(110),j=t(111),C=t(112),w=function(e){return r.a.createElement("a",Object.assign({href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},e))},S=function(){return r.a.createElement(k.a,null,r.a.createElement(j.a,{navbar:!0},r.a.createElement(C.a,null,"2018 Reduction theme, source on ",r.a.createElement(w,null,"Github"))))},P=t(21),z=t(48),I=(t(17),t(123)),D=function(e){var a=e.notificationsData;return a&&a.length&&a.map(function(e){var a=e.id,t=e.avatar,n=e.message,c=e.date;return r.a.createElement(I.a,{key:a,className:"pb-2"},r.a.createElement(I.a,{left:!0,className:"align-self-center pr-3"},r.a.createElement(P.a,{tag:I.a,object:!0,src:t,alt:"Avatar"})),r.a.createElement(I.a,{body:!0,middle:!0,className:"align-self-center"},n),r.a.createElement(I.a,{right:!0,className:"align-self-center"},r.a.createElement("small",{className:"text-muted"},c)))})};D.defaultProps={notificationsData:[]};var L=D,A=t(8),B=t(68),_=t(24),T=function(){return r.a.createElement(B.a,{inline:!0,className:"cr-search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(A.D,{size:"20",className:"cr-search-form__icon-search text-secondary"}),r.a.createElement(_.a,{type:"search",className:"cr-search-form__input",placeholder:"Search..."}))},R=t(47),U=t.n(R),W=t(50),M=t.n(W),J=t(51),G=t.n(J),K=t(32),q=t.n(K),V=t(52),F=t.n(V),H=[{id:1,avatar:U.a,message:"David sent you a message",date:"3 min ago"},{id:2,avatar:M.a,message:"Jane mentioned you here",date:"1 hour ago"},{id:3,avatar:G.a,message:"Clark sent a pull request",date:"yesterday"},{id:4,avatar:q.a,message:"Alicia signed up",date:"3 days ago"},{id:5,avatar:F.a,message:"Keith shared this article",date:"a week ago"}],Q=t(53),X=t(46),Y=t(124),Z=t(125),$=t(126),ee=t(119),ae=t(120),te=E.a.create("header"),ne=Object(Q.a)({size:"md",color:"primary",style:{top:-10,right:-10,display:"inline-flex",justifyContent:"center",alignItems:"center"},children:r.a.createElement("small",null,"5")})(A.u),re=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},t.toggleNotificationPopover=function(){t.setState({isOpenNotificationPopover:!t.state.isOpenNotificationPopover}),t.state.isNotificationConfirmed||t.setState({isNotificationConfirmed:!0})},t.toggleUserCardPopover=function(){t.setState({isOpenUserCardPopover:!t.state.isOpenUserCardPopover})},t.handleSidebarControlButton=function(e){e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isNotificationConfirmed;return r.a.createElement(k.a,{light:!0,expand:!0,className:te.b("bg-white")},r.a.createElement(j.a,{navbar:!0,className:"mr-2"},r.a.createElement(X.a,{outline:!0,onClick:this.handleSidebarControlButton},r.a.createElement(A.g,{size:25}))),r.a.createElement(j.a,{navbar:!0},r.a.createElement(T,null)),r.a.createElement(j.a,{navbar:!0,className:te.e("nav-right")},r.a.createElement(C.a,{className:"d-inline-flex"},r.a.createElement(Y.a,{id:"Popover1",className:"position-relative"},e?r.a.createElement(A.v,{size:25,className:"text-secondary can-click",onClick:this.toggleNotificationPopover}):r.a.createElement(ne,{size:25,className:"text-secondary can-click animated swing infinite",onClick:this.toggleNotificationPopover})),r.a.createElement(Z.a,{placement:"bottom",isOpen:this.state.isOpenNotificationPopover,toggle:this.toggleNotificationPopover,target:"Popover1"},r.a.createElement($.a,null,r.a.createElement(L,{notificationsData:H})))),r.a.createElement(C.a,null,r.a.createElement(Y.a,{id:"Popover2"},r.a.createElement(P.a,{onClick:this.toggleUserCardPopover,className:"can-click"})),r.a.createElement(Z.a,{placement:"bottom-end",isOpen:this.state.isOpenUserCardPopover,toggle:this.toggleUserCardPopover,target:"Popover2",className:"p-0 border-0",style:{minWidth:250}},r.a.createElement($.a,{className:"p-0 border-light"},r.a.createElement(z.c,{title:"Jane",subtitle:"jane@jane.com",text:"Last updated 3 mins ago",className:"border-light"},r.a.createElement(ee.a,{flush:!0},r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(A.x,null)," Profile"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(A.n,null)," Stats"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(A.t,null)," Messages"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(A.F,null)," Settings"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(A.l,null)," Help"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(A.i,null)," Signout"))))))))}}]),a}(r.a.Component),ce=t(67),oe=function(e){var a=e.component,t=e.layout,n=Object(b.a)(e,["component","layout"]);return r.a.createElement(ce.a,Object.assign({},n,{render:function(e){return r.a.createElement(t,null,r.a.createElement(a,e))}}))},le=t(63),ie=t.n(le),se={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}},me=(r.a.Component,t(30)),ue=t(33),de=t.n(ue),pe=t(44),ge=t.n(pe),fe=t(64),he=t(132),be=t(127),Ee={backgroundImage:'url("'.concat(ge.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},ve=[{to:"/buttons",name:"buttons",exact:!1,Icon:A.B},{to:"/button-groups",name:"button groups",exact:!1,Icon:A.k},{to:"/forms",name:"forms",exact:!1,Icon:A.f},{to:"/input-groups",name:"input groups",exact:!1,Icon:A.P},{to:"/dropdowns",name:"dropdowns",exact:!1,Icon:A.b},{to:"/badges",name:"badges",exact:!1,Icon:A.J},{to:"/alerts",name:"alerts",exact:!1,Icon:A.u},{to:"/progress",name:"progress",exact:!1,Icon:A.d},{to:"/modals",name:"modals",exact:!1,Icon:A.O}],ye=[{to:"/typography",name:"typography",exact:!1,Icon:A.K},{to:"/tables",name:"tables",exact:!1,Icon:A.c}],Ne=[{to:"/login",name:"login / signup",exact:!1,Icon:A.a},{to:"/login-modal",name:"login modal",exact:!1,Icon:A.N}],xe=[{to:"/",name:"dashboard",exact:!0,Icon:A.h},{to:"/cards",name:"cards",exact:!1,Icon:A.Q},{to:"/charts",name:"charts",exact:!1,Icon:A.n},{to:"/widgets",name:"widgets",exact:!1,Icon:A.R}],Oe=E.a.create("sidebar"),ke=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={isOpenComponents:!0,isOpenContents:!0,isOpenPages:!0},t.handleClick=function(e){return function(){t.setState(function(a){var t=a["isOpen".concat(e)];return Object(me.a)({},"isOpen".concat(e),!t)})}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("aside",{className:Oe.b(),"data-image":ge.a},r.a.createElement("div",{className:Oe.e("background"),style:Ee}),r.a.createElement("div",{className:Oe.e("content")},r.a.createElement(k.a,null,r.a.createElement(w,{className:"navbar-brand d-flex"},r.a.createElement("img",{src:de.a,width:"40",height:"30",className:"pr-2",alt:""}),r.a.createElement("span",{className:"text-white"},"Reduction ",r.a.createElement(fe.a,null)))),r.a.createElement(j.a,{vertical:!0},xe.map(function(e,a){var t=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(C.a,{key:a,className:Oe.e("nav-item")},r.a.createElement(Y.a,{id:"navItem-".concat(n,"-").concat(a),className:"text-uppercase",tag:he.a,to:t,activeClassName:"active",exact:c},r.a.createElement(o,{className:Oe.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))}),r.a.createElement(C.a,{className:Oe.e("nav-item"),onClick:this.handleClick("Components")},r.a.createElement(Y.a,{className:Oe.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(A.j,{className:Oe.e("nav-item-icon")}),r.a.createElement("span",{className:" align-self-start"},"Components")),r.a.createElement(A.o,{className:Oe.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenComponents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(be.a,{isOpen:this.state.isOpenComponents},ve.map(function(e,a){var t=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(C.a,{key:a,className:Oe.e("nav-item")},r.a.createElement(Y.a,{id:"navItem-".concat(n,"-").concat(a),className:"text-uppercase",tag:he.a,to:t,activeClassName:"active",exact:c},r.a.createElement(o,{className:Oe.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})),r.a.createElement(C.a,{className:Oe.e("nav-item"),onClick:this.handleClick("Contents")},r.a.createElement(Y.a,{className:Oe.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(A.E,{className:Oe.e("nav-item-icon")}),r.a.createElement("span",{className:""},"Contents")),r.a.createElement(A.o,{className:Oe.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenContents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(be.a,{isOpen:this.state.isOpenContents},ye.map(function(e,a){var t=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(C.a,{key:a,className:Oe.e("nav-item")},r.a.createElement(Y.a,{id:"navItem-".concat(n,"-").concat(a),className:"text-uppercase",tag:he.a,to:t,activeClassName:"active",exact:c},r.a.createElement(o,{className:Oe.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})),r.a.createElement(C.a,{className:Oe.e("nav-item"),onClick:this.handleClick("Pages")},r.a.createElement(Y.a,{className:Oe.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(A.w,{className:Oe.e("nav-item-icon")}),r.a.createElement("span",{className:""},"Pages")),r.a.createElement(A.o,{className:Oe.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenPages?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(be.a,{isOpen:this.state.isOpenPages},Ne.map(function(e,a){var t=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(C.a,{key:a,className:Oe.e("nav-item")},r.a.createElement(Y.a,{id:"navItem-".concat(n,"-").concat(a),className:"text-uppercase",tag:he.a,to:t,activeClassName:"active",exact:c},r.a.createElement(o,{className:Oe.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})))))}}]),a}(r.a.Component),je=(t(128),t(129)),Ce=t(130),we=t(113),Se=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleAuthState=function(e){!0===e?t.props.history.push("/"):t.props.history.push("/signup")},t.handleLogoClick=function(){t.props.history.push("/home")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(je.a,{style:{height:"100vh",justifyContent:"center",alignItems:"center"}},r.a.createElement(Ce.a,{md:6,lg:4},r.a.createElement(we.a,{body:!0},r.a.createElement(d.b,{isLogin:this.props.isLogin}))))}}]),a}(r.a.Component),Pe=t(65),ze=t.n(Pe),Ie=t(131),De=t(133),Le=(t(105),r.a.lazy(function(){return t.e(14).then(t.bind(null,465))}),r.a.lazy(function(){return t.e(12).then(t.bind(null,454))}),r.a.lazy(function(){return t.e(18).then(t.bind(null,455))}),r.a.lazy(function(){return t.e(7).then(t.bind(null,469))}),r.a.lazy(function(){return t.e(15).then(t.bind(null,463))}),r.a.lazy(function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,466))}),r.a.lazy(function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,470))}),r.a.lazy(function(){return Promise.all([t.e(0),t.e(4),t.e(5)]).then(t.bind(null,462))}),r.a.lazy(function(){return t.e(8).then(t.bind(null,458))}),r.a.lazy(function(){return t.e(19).then(t.bind(null,467))}),r.a.lazy(function(){return t.e(9).then(t.bind(null,464))}),r.a.lazy(function(){return t.e(10).then(t.bind(null,468))}),r.a.lazy(function(){return t.e(13).then(t.bind(null,459))}),r.a.lazy(function(){return t.e(17).then(t.bind(null,460))}),r.a.lazy(function(){return t.e(20).then(t.bind(null,461))}),r.a.lazy(function(){return t.e(11).then(t.bind(null,471))}),function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(Ie.a,{basename:"/".concat("http://35.184.21.172".split("/").pop())},r.a.createElement(De.a,null,r.a.createElement(oe,{exact:!0,path:"/",layout:O,component:function(e){return r.a.createElement(Se,Object.assign({},e,{isLogin:!0}))}}),r.a.createElement(oe,{exact:!0,path:"/signup",layout:O,component:function(e){return r.a.createElement(Se,Object.assign({},e,{isLogin:!1}))}})))}}]),a}(r.a.Component)),Ae=ze()(function(e){var a=e.width;return a<575?{breakpoint:"xs"}:576<a&&a<767?{breakpoint:"sm"}:768<a&&a<991?{breakpoint:"md"}:992<a&&a<1199?{breakpoint:"lg"}:a>1200?{breakpoint:"xl"}:{breakpoint:"xs"}})(Le);o.a.render(r.a.createElement(Ae,null),document.getElementById("root"))},17:function(e,a,t){"use strict";var n=t(27),r=t(1),c=t.n(r);a.a=Object(n.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},21:function(e,a,t){"use strict";var n=t(27),r=t(9),c=t(2),o=t.n(c),l=(t(17),t(4)),i=t.n(l),s=t(32),m=function(e){var a=e.rounded,t=e.circle,c=e.src,l=e.size,s=e.tag,m=e.className,u=e.style,d=Object(r.a)(e,["rounded","circle","src","size","tag","className","style"]),p=i()({"rounded-circle":t,rounded:a},m);return o.a.createElement(s,Object.assign({src:c,style:Object(n.a)({width:l,height:l},u),className:p},d))};m.defaultProps={tag:"img",rounded:!1,circle:!0,size:40,src:t.n(s).a,style:{}},a.a=m},25:function(e,a,t){"use strict";var n,r=t(4),c=t.n(r),o=(n="cr",{create:function(e){var a=e;return"string"===typeof n&&(a="".concat(n,"-").concat(e)),{b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c()(a,t)},e:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return c()("".concat(a,"__").concat(e),n)},m:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return c()("".concat(a,"--").concat(e),n)}}}});a.a=o},32:function(e,a,t){e.exports=t.p+"static/media/100_4.978e51b5.jpg"},33:function(e,a,t){e.exports=t.p+"static/media/logo_200.b175e1c4.png"},39:function(e,a,t){"use strict";t.d(a,"a",function(){return v});var n=t(29),r=t(11),c=t(12),o=t(14),l=t(13),i=t(15),s=t(33),m=t.n(s),u=t(2),d=t.n(u),p=t(68),g=t(22),f=t(23),h=t(24),b=t(46),E=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).changeAuthState=function(e){return function(a){a.preventDefault(),console.log(e),t.props.onChangeAuthState(e)}},t.handleSubmit=function(e){e.preventDefault(),console.log(t.props)},t}return Object(i.a)(a,e),Object(c.a)(a,[{key:"renderButtonText",value:function(){var e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}},{key:"render",value:function(){var e=this.props,a=e.showLogo,t=e.usernameLabel,n=e.usernameInputProps,r=e.passwordLabel,c=e.passwordInputProps,o=e.confirmPasswordLabel,l=e.confirmPasswordInputProps,i=e.children,s=e.onLogoClick;return d.a.createElement(p.a,{onSubmit:this.handleSubmit},a&&d.a.createElement("div",{className:"text-center pb-4"},d.a.createElement("img",{src:m.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:s})),d.a.createElement(g.a,null,d.a.createElement(f.a,{for:t},t),d.a.createElement(h.a,Object.assign({},n,{value:n,onChange:function(e){console.log(e.target)}}))),d.a.createElement(g.a,null,d.a.createElement(f.a,{for:r},r),d.a.createElement(h.a,c)),this.isSignup&&d.a.createElement(g.a,null,d.a.createElement(f.a,{for:o},o),d.a.createElement(h.a,l)),d.a.createElement(g.a,{check:!0},d.a.createElement(f.a,{check:!0},d.a.createElement(h.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),d.a.createElement("hr",null),d.a.createElement(b.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),d.a.createElement("div",{className:"text-center pt-1"},d.a.createElement("h6",null,"or"),d.a.createElement("h6",null,this.isSignup?d.a.createElement("a",{onClick:this.changeAuthState(v)},"Login"):d.a.createElement("a",{onClick:this.changeAuthState(y)},"Signup"))),i)}},{key:"isLogin",get:function(){return this.props.authState===v}},{key:"isSignup",get:function(){return this.props.authState===y}}]),a}(d.a.Component),v="LOGIN",y="SIGNUP";E.defaultProps={authState:"LOGIN",showLogo:!1,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:function(){}};a.b=function(e){var a=d.a.useState(e.isLogin),t=Object(n.a)(a,2),r=t[0],c=t[1],o=d.a.useState(""),l=Object(n.a)(o,2),i=l[0],s=l[1],m=d.a.useState(""),u=Object(n.a)(m,2),E=u[0],v=u[1],y=d.a.useState(""),N=Object(n.a)(y,2),x=N[0],O=N[1],k=function(e){e.preventDefault(),console.log("email :".concat(i,", pass ").concat(E,", repass ").concat(x))};return d.a.createElement(p.a,{onSubmit:k},d.a.createElement(g.a,null,d.a.createElement(f.a,{for:"Email"},"Email"),d.a.createElement(h.a,{type:"Email",value:i,onChange:function(e){s(e.target.value)}})),d.a.createElement(g.a,null,d.a.createElement(f.a,{for:"Password"},"M\u1eadt kh\u1ea9u"),d.a.createElement(h.a,{value:E,onChange:function(e){v(e.target.value)}})),!r&&d.a.createElement(g.a,null,d.a.createElement(f.a,{for:"repass"},"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u"),d.a.createElement(h.a,{value:x,onChange:function(e){O(e.target.value)}})),d.a.createElement("hr",null),d.a.createElement(b.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:k},r?"\u0110\u0103ng Nh\u1eadp":"\u0110\u0103ng K\xfd"),d.a.createElement("div",{className:"text-center pt-1"},d.a.createElement("h6",null,"or"),d.a.createElement("h6",null,r?d.a.createElement("a",{href:"#sigup",onClick:function(){c(!r)}},"\u0110\u0103ng K\xfd"):d.a.createElement("a",{href:"#login",onClick:function(){c(!r)}},"\u0110\u0103ng Nh\u1eadp"))),e.children)}},44:function(e,a,t){e.exports=t.p+"static/media/sidebar-4.80d4a4e5.jpg"},47:function(e,a,t){e.exports=t.p+"static/media/100_1.1f7beca5.jpg"},48:function(e,a,t){"use strict";var n=t(9),r=t(2),c=t.n(r),o=t(17),l=t(4),i=t.n(l),s=t(113),m=t(114),u=t(115),d=t(116),p=t(117),g=t(21),f=function(e){var a=e.avatar,t=e.avatarSize,r=e.title,o=e.subtitle,l=e.text,f=e.children,h=e.className,b=Object(n.a)(e,["avatar","avatarSize","title","subtitle","text","children","className"]),E=i()("bg-gradient-theme",h);return c.a.createElement(s.a,Object.assign({inverse:!0,className:E},b),c.a.createElement(m.a,{className:"d-flex justify-content-center align-items-center flex-column"},c.a.createElement(g.a,{src:a,size:t,className:"mb-2"}),c.a.createElement(u.a,null,r),c.a.createElement(d.a,null,o),c.a.createElement(p.a,null,c.a.createElement("small",null,l))),f)};f.defaultProps={avatarSize:80};var h=f,b=t(118),E=t(46),v=function(e){var a=e.color,t=e.header,r=e.avatar,o=e.avatarSize,l=e.name,u=e.date,d=e.text,f=e.className,h=e.buttonProps,v=Object(n.a)(e,["color","header","avatar","avatarSize","name","date","text","className","buttonProps"]),y="bg-".concat(a),N=i()(y,f);return c.a.createElement(s.a,Object.assign({inverse:!0,className:N},v),t&&"string"===typeof t?c.a.createElement(b.a,{className:y},t):t,c.a.createElement(m.a,{className:"d-flex flex-wrap flex-column align-items-center justify-content-center"},c.a.createElement(g.a,{size:o,src:r}),c.a.createElement(p.a,{className:"text-center"},c.a.createElement("strong",{className:"d-block"},l),c.a.createElement("small",{className:"text-muted"},u)),c.a.createElement(p.a,{className:"text-center"},d),c.a.createElement(E.a,Object.assign({color:"primary"},h))))};v.defaultProps={color:"gradient-secondary",avatarSize:60};var y=v,N=t(121),x=t(122),O=t(119),k=t(120),j=t(22),C=t(23),w=t(24),S=(o.a.arrayOf(o.a.shape({id:o.a.ID,title:o.a.string,done:o.a.bool})),function(e){var a=e.todos,t=Object(n.a)(e,["todos"]);return c.a.createElement(O.a,Object.assign({flush:!0},t),a.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.id,t=e.title,n=e.done;return c.a.createElement(k.a,{key:a,className:"border-0"},c.a.createElement(j.a,{check:!0},c.a.createElement(C.a,{check:!0},c.a.createElement(w.a,{type:"checkbox",checked:n,readOnly:!0}),n?c.a.createElement("strike",null,t):c.a.createElement("span",null,t))))}),c.a.createElement(E.a,{block:!0},"Add"))});S.defaultProps={todos:[]};var P=S,z=t(61),I=function(e){var a=e.image,t=e.title,r=e.subtitle,o=e.todos,l=Object(n.a)(e,["image","title","subtitle","todos"]);return c.a.createElement(s.a,l,c.a.createElement("div",{className:"position-relative"},c.a.createElement(N.a,{src:a}),c.a.createElement(x.a,{className:"bg-dark",style:{opacity:.2}},c.a.createElement(u.a,{className:"text-white"},t),c.a.createElement(p.a,{className:"text-white"},r))),c.a.createElement(P,{todos:o}))};I.defaultProps={image:t.n(z).a,title:"Tasks",subtitle:"Due soon..."};var D=I;t.d(a,"c",function(){return h}),t.d(a,"a",function(){return y}),t.d(a,"b",function(){return D})},50:function(e,a,t){e.exports=t.p+"static/media/100_2.82e7c41e.jpg"},51:function(e,a,t){e.exports=t.p+"static/media/100_3.6e25d86d.jpg"},52:function(e,a,t){e.exports=t.p+"static/media/100_5.fd533725.jpg"},53:function(e,a,t){"use strict";var n=t(27),r=t(9),c=t(2),o=t.n(c),l=t(4),i=t.n(l),s=t(107),m={"top-right":{top:-3,right:-3},"top-left":{top:-3,left:-3},"bottom-left":{bottom:-3,left:-3},"bottom-right":{bottom:-3,right:-3}},u={xs:{width:10,height:10},sm:{width:15,height:15},md:{width:20,height:20},lg:{width:25,height:25},xl:{width:30,height:30}};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.position,t=void 0===a?"bottom-right":a,c=e.size,l=void 0===c?"sm":c,d=e.style,p=void 0===d?{}:d,g=e.className,f=Object(r.a)(e,["position","size","style","className"]);return function(e){return function(a){var c=a.tag,d=void 0===c?"div":c,h=Object(r.a)(a,["tag"]);return o.a.createElement(d,{className:"d-inline-block position-relative"},o.a.createElement(e,h),o.a.createElement(s.a,Object.assign({className:i()("position-absolute",g),style:Object(n.a)({},m[t],u[l],{borderRadius:"50%",border:"2px solid #fff"},p)},f)))}}}},61:function(e,a,t){e.exports=t.p+"static/media/background_1920-2.c54eef50.jpg"},72:function(e,a,t){e.exports=t(106)}},[[72,2,3]]]);
//# sourceMappingURL=main.918c983a.chunk.js.map