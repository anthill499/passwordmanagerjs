(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},24:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},42:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),s=t(25),l=t.n(s),c=(t(37),t(22)),a=t(4),i=(t(38),t(21)),u=t(3),d=(t(39),t(0)),j=function(){var e=Object(u.g)();return Object(d.jsxs)("div",{className:"Landing-Container",children:[Object(d.jsx)("h1",{children:"Hello, welcome to PasswordManager"}),Object(d.jsx)("button",{onClick:function(){return e("/signin",{replace:!1})},children:"Let's get started"})]})},v=t(8),b=t.n(v),h=t(9),p=o.a.createContext(),O=(t(19),t(20),function(){var e,n,t,o,s,l,c,i,j,v,O,m,x=Object(r.useState)(""),f=Object(a.a)(x,2),g=f[0],y=f[1],C=Object(r.useState)(""),w=Object(a.a)(C,2),N=w[0],k=w[1],S=Object(r.useState)(null),L=Object(a.a)(S,2),I=L[0],T=L[1],A=Object(u.g)(),P=Object(r.useContext)(p),E=function(){var e=Object(h.a)(b.a.mark((function e(n){var t,r,o,s,l=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:"/api/auth/signup",r=l.length>2&&void 0!==l[2]?l[2]:{username:g,password:N},n.preventDefault(),e.prev=3,e.next=6,fetch(t,{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(r)});case 6:return o=e.sent,e.next=9,o.json();case 9:s=e.sent,o.ok?(P.login(s),localStorage.setItem("user",JSON.stringify(s))):T(s),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(n){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"Auth-Form",children:[Object(d.jsxs)("h4",{children:[(null===I||void 0===I||null===(e=I.errors)||void 0===e?void 0:e.global)?null===I||void 0===I||null===(n=I.errors)||void 0===n?void 0:n.global:"Get started today!"," "]}),Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{htmlFor:"username",style:{color:(null===I||void 0===I||null===(t=I.errors)||void 0===t?void 0:t.username)?"red":null},children:(null===I||void 0===I||null===(o=I.errors)||void 0===o?void 0:o.username)?null===I||void 0===I||null===(s=I.errors)||void 0===s?void 0:s.username:"Enter a Username"}),Object(d.jsx)("input",{name:"username",value:g,onChange:function(e){return y(e.currentTarget.value)},placeholder:"Enter a username",style:{outlineColor:(null===I||void 0===I||null===(l=I.errors)||void 0===l?void 0:l.username)?"red":null},className:(null===I||void 0===I||null===(c=I.errors)||void 0===c?void 0:c.username)?"Auth-Input":null}),Object(d.jsxs)("label",{htmlFor:"password",style:{color:(null===I||void 0===I||null===(i=I.errors)||void 0===i?void 0:i.password)?"red":null},children:[" ",(null===I||void 0===I||null===(j=I.errors)||void 0===j?void 0:j.password)?null===I||void 0===I||null===(v=I.errors)||void 0===v?void 0:v.password:"Enter a Password"]}),Object(d.jsx)("input",{type:"password",name:"password",value:N,onChange:function(e){return k(e.currentTarget.value)},placeholder:"Enter a strong password",style:{outlineColor:(null===I||void 0===I||null===(O=I.errors)||void 0===O?void 0:O.password)?"red":null},className:(null===I||void 0===I||null===(m=I.errors)||void 0===m?void 0:m.password)?"Auth-Input":null}),Object(d.jsxs)("div",{className:"Auth-Button-Group",children:[Object(d.jsx)("button",{onClick:function(e){return E(e)},children:"Create Account"}),Object(d.jsx)("button",{onClick:function(){return A("/signin",{replace:!0})},children:"Already have an account?"})]})]})]})}),m=function(){var e,n,t,o,s,l,c,i,j,v,O,m,x=Object(r.useState)(""),f=Object(a.a)(x,2),g=f[0],y=f[1],C=Object(r.useState)(""),w=Object(a.a)(C,2),N=w[0],k=w[1],S=Object(r.useState)([]),L=Object(a.a)(S,2),I=L[0],T=L[1],A=Object(r.useContext)(p),P=Object(u.g)(),E=function(){var e=Object(h.a)(b.a.mark((function e(n){var t,r,o,s=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:{username:g,password:N},n.preventDefault(),e.prev=2,e.next=5,fetch("/api/auth/signin",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)});case 5:return r=e.sent,e.next=8,r.json();case 8:o=e.sent,r.ok?(A.login(o),localStorage.setItem("user",JSON.stringify(o))):T(o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"Auth-Form",children:[Object(d.jsxs)("h4",{children:[(null===I||void 0===I||null===(e=I.errors)||void 0===e?void 0:e.global)?null===I||void 0===I||null===(n=I.errors)||void 0===n?void 0:n.global:"Sign in to your account!"," "]}),Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{htmlFor:"username",style:{color:(null===I||void 0===I||null===(t=I.errors)||void 0===t?void 0:t.username)?"red":null},children:(null===I||void 0===I||null===(o=I.errors)||void 0===o?void 0:o.username)?null===I||void 0===I||null===(s=I.errors)||void 0===s?void 0:s.username:"Enter a Username"}),Object(d.jsx)("input",{name:"username",value:g,onChange:function(e){return y(e.currentTarget.value)},placeholder:"Enter your username",style:{outlineColor:(null===I||void 0===I||null===(l=I.errors)||void 0===l?void 0:l.username)?"red":null},className:(null===I||void 0===I||null===(c=I.errors)||void 0===c?void 0:c.username)?"Auth-Input":null}),Object(d.jsxs)("label",{htmlFor:"password",style:{color:(null===I||void 0===I||null===(i=I.errors)||void 0===i?void 0:i.password)?"red":null},children:[" ",(null===I||void 0===I||null===(j=I.errors)||void 0===j?void 0:j.password)?null===I||void 0===I||null===(v=I.errors)||void 0===v?void 0:v.password:"Enter a Password"]}),Object(d.jsx)("input",{type:"password",name:"password",value:N,onChange:function(e){return k(e.currentTarget.value)},placeholder:"Enter your password",style:{outlineColor:(null===I||void 0===I||null===(O=I.errors)||void 0===O?void 0:O.password)?"red":null},className:(null===I||void 0===I||null===(m=I.errors)||void 0===m?void 0:m.password)?"Auth-Input":null}),Object(d.jsxs)("div",{className:"Auth-Button-Group",children:[Object(d.jsx)("button",{onClick:function(e){return E(e)},children:"Sign In"}),Object(d.jsx)("button",{onClick:function(){return P("/signup",{replace:!0})},children:"Don't have an account?"}),Object(d.jsx)("button",{onClick:function(e){return E(e,{username:"newUser123",password:"passwordQ!1"})},children:"Demo User"})]})]})]})},x=(t(42),t(29)),f=t.n(x),g=t(26),y=t.n(g),C=t(28),w=t.n(C),N=function(){var e=Object(r.useContext)(p);return Object(d.jsxs)("div",{className:"Heading-Container",children:[Object(d.jsx)("div",{children:"\ud83d\udddd\ufe0fPasswordManager"}),Object(d.jsxs)("div",{className:"Button-Group",children:[Object(d.jsx)(y.a,{className:"Heading-Button"}),Object(d.jsx)(w.a,{className:"Heading-Button"}),Object(d.jsx)(f.a,{onClick:function(){return e.logout()},className:"Heading-Button"})]})]})},k=(t(24),"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~ "),S=function(e){for(var n="",t=0;t<e;t++)n+=k[Math.floor(62*Math.random())];return n},L=function(e){for(var n="",t=0;t<e;t++)n+=k[Math.floor(93*Math.random())];return n},I=function(e){return e<=20?S(e):L(e)},T=function(e){var n,t,o,s,l,c,i,u,j,v,O,m,x,f,g,y=e.modalOpen,C=e.setmodalOpen,w=e.setCreds,N=e.creds,k=Object(r.useState)(""),S=Object(a.a)(k,2),L=S[0],T=S[1],A=Object(r.useState)(""),P=Object(a.a)(A,2),E=P[0],D=P[1],F=Object(r.useState)(10),G=Object(a.a)(F,2),B=G[0],M=G[1],J=Object(r.useState)(""),U=Object(a.a)(J,2),H=U[0],R=U[1],z=Object(r.useState)(null),V=Object(a.a)(z,2),W=V[0],K=V[1],Q=Object(r.useState)(null),Y=Object(a.a)(Q,2),Z=Y[0],_=Y[1],q=Object(r.useContext)(p),X={10:Object(d.jsx)("span",{style:{color:"red"},children:"Weak"}),20:Object(d.jsx)("span",{style:{color:"#ff7b00"},children:"Good"}),30:Object(d.jsx)("span",{style:{color:"green"},children:"Strong"}),40:Object(d.jsx)("span",{style:{color:"#1ac703"},children:"Very Strong"})},$={10:1,20:2,30:3,40:4},ee=function(e,n){e.preventDefault();var t=I(n);return D(t)},ne=function(){var e=Object(h.a)(b.a.mark((function e(n){var t,r,o,s,l,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"/api/cred/new",r=c.length>2&&void 0!==c[2]?c[2]:{userId:q.id,username:L,newPassword:E,companyName:H,strength:$[B]},n.preventDefault(),e.prev=3,e.next=6,fetch(t,{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(r)});case 6:return o=e.sent,e.next=9,o.json();case 9:if(s=e.sent,!o.ok){e.next=18;break}return e.next=13,N.concat(s);case 13:l=e.sent,w(l),C(!y),e.next=19;break;case 18:_(s);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(3),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[3,21]])})));return function(n){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"Credential-Form-Container",children:[Object(d.jsx)("img",{src:"https://img.icons8.com/color/48/000000/close-window.png",alt:"close",className:"close",onClick:function(){return C(!y)}}),Object(d.jsx)("h4",{className:"Credential-Header",children:"Create a new Credential"}),Object(d.jsxs)("form",{className:"Credential-Form",onSubmit:function(e){return ne(e)},children:[Object(d.jsx)("label",{htmlFor:"company",style:{color:(null===Z||void 0===Z||null===(n=Z.errors)||void 0===n?void 0:n.company)?"red":null},children:(null===Z||void 0===Z||null===(t=Z.errors)||void 0===t?void 0:t.company)?null===Z||void 0===Z||null===(o=Z.errors)||void 0===o?void 0:o.company:"Company Name"}),Object(d.jsx)("input",{name:"company",value:H,onChange:function(e){return R(e.currentTarget.value)},placeholder:"Enter a Company Name",style:{outlineColor:(null===Z||void 0===Z||null===(s=Z.errors)||void 0===s?void 0:s.company)?"red":null,color:(null===Z||void 0===Z||null===(l=Z.errors)||void 0===l?void 0:l.company)?"red":null},className:(null===Z||void 0===Z||null===(c=Z.errors)||void 0===c?void 0:c.company)?"Auth-Input":null}),Object(d.jsxs)("label",{htmlFor:"username",style:{color:(null===Z||void 0===Z||null===(i=Z.errors)||void 0===i?void 0:i.username)?"red":null},children:[" ",(null===Z||void 0===Z||null===(u=Z.errors)||void 0===u?void 0:u.username)?null===Z||void 0===Z||null===(j=Z.errors)||void 0===j?void 0:j.username:"Username"]}),Object(d.jsx)("input",{name:"username",value:L,onChange:function(e){return T(e.currentTarget.value)},placeholder:"Pick a username",style:{outlineColor:(null===Z||void 0===Z||null===(v=Z.errors)||void 0===v?void 0:v.username)?"red":null,color:(null===Z||void 0===Z||null===(O=Z.errors)||void 0===O?void 0:O.username)?"red":null},className:(null===Z||void 0===Z||null===(m=Z.errors)||void 0===m?void 0:m.username)?"Auth-Input":null}),Object(d.jsxs)("label",{htmlFor:"password",style:{color:(null===Z||void 0===Z||null===(x=Z.errors)||void 0===x?void 0:x.password)?"red":null},children:[(null===Z||void 0===Z||null===(f=Z.errors)||void 0===f?void 0:f.password)?null===Z||void 0===Z||null===(g=Z.errors)||void 0===g?void 0:g.password:"Generate a Password"," ",W&&Object(d.jsx)("span",{children:W}),E.length>0&&Object(d.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/copy.png",alt:"clipboard",className:"Clipboard",onClick:function(){return navigator.clipboard.writeText(E),K(Object(d.jsx)("span",{className:"Copied",children:Object(d.jsx)("span",{children:" Copied to Clipboard!"})})),void setTimeout((function(){return K(null)}),5e3)}})]}),Object(d.jsx)("input",{name:"password",value:E,onChange:function(e){return D(e.currentTarget.value)},placeholder:"Generate a Password",readOnly:!0,className:"Password-Input Darken-Input"}),Object(d.jsxs)("label",{children:["Choose a Password Strength! ",X[B]," "]}),Object(d.jsxs)("ul",{className:"Emoji-List",children:[Object(d.jsx)("li",{onClick:function(e){M(10),ee(e,10)},children:"\ud83d\ude14"}),Object(d.jsx)("li",{onClick:function(e){M(20),ee(e,20)},children:"\ud83d\ude10"}),Object(d.jsx)("li",{onClick:function(e){M(30),ee(e,30)},children:"\ud83d\ude42"}),Object(d.jsx)("li",{onClick:function(e){M(40),ee(e,40)},children:"\ud83d\ude00"})]}),Object(d.jsx)("button",{onClick:function(e){return ee(e,B)},children:"Generate Random Password"}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})]})},A=t(30),P=t.n(A),E=t(31),D=t.n(E),F=function(){var e=Object(r.useState)(!1),n=Object(a.a)(e,2),t=n[0],o=n[1],s=Object(r.useState)(null),l=Object(a.a)(s,2),c=l[0],i=l[1],u=Object(r.useContext)(p),j={1:Object(d.jsx)("span",{style:{color:"red"},children:"Weak"}),2:Object(d.jsx)("span",{style:{color:"#ff7b00"},children:"Good"}),3:Object(d.jsx)("span",{style:{color:"green"},children:"Strong"}),4:Object(d.jsx)("span",{style:{color:"#1ac703"},children:"Very Strong"})};if(Object(r.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var n,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/cred/".concat(u.id));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,n.ok&&i(t),console.log(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[u]),!c)return Object(d.jsxs)("div",{className:"lds-ring",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]});return Object(d.jsxs)(r.Fragment,{children:[t&&Object(d.jsx)(T,{modalOpen:t,setmodalOpen:o,setCreds:i,creds:c}),Object(d.jsxs)("div",{className:"Dashboard-Container",onKeyUp:function(e){return function(e){if("Escape"===e.key){if(!t)return;o(!t)}}(e)},children:[Object(d.jsxs)("h4",{children:[u.username,"'s Dashboard"]}),Object(d.jsx)("div",{className:"Dashboard-Buttons",children:Object(d.jsx)("button",{className:"Cred-Button",onClick:function(){return o(!t)},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:"#000000",margin:"auto"},children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"})})})}),Object(d.jsx)("div",{className:"Dashboard-Map",children:Object(d.jsxs)("div",{className:"Dashboard-Title",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Company Name"}),Object(d.jsx)("ul",{className:"Cred-List",children:null===c||void 0===c?void 0:c.map((function(e,n){return Object(d.jsx)("li",{className:"Cred-List-Input",children:e.company_name},n)}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Username"}),Object(d.jsx)("ul",{className:"Cred-List",children:null===c||void 0===c?void 0:c.map((function(e,n){return Object(d.jsx)("li",{className:"Cred-List-Input",children:e.username},n)}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Your Password"}),Object(d.jsx)("ul",{className:"Cred-List",children:null===c||void 0===c?void 0:c.map((function(e,n){return Object(d.jsx)("li",{className:"Cred-List-Input",children:e.pw},n)}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Password Strength"}),Object(d.jsx)("ul",{className:"Cred-List",children:null===c||void 0===c?void 0:c.map((function(e,n){return Object(d.jsx)("li",{className:"Cred-List-Input",children:j[e.strength]},n)}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Removed"}),Object(d.jsx)("ul",{className:"Cred-List Class",style:{textAlign:"center"},children:null===c||void 0===c?void 0:c.map((function(e,n){var t=e.removed.toString();return Object(d.jsx)("li",{className:"Cred-List-Input",children:"true"===t?Object(d.jsx)(P.a,{style:{color:"green",fontSize:"small",textAlign:"center"}}):Object(d.jsx)(D.a,{style:{color:"#b90000",fontSize:"small",textAlign:"center"}})},n)}))})]})]})})]})]})},G=function(e){var n=e.children,t=e.redirectTo;return Object(r.useContext)(p).isLoggedIn?n:Object(d.jsx)(u.a,{to:t})},B=function(e){var n=e.children,t=e.redirectTo;return Object(r.useContext)(p).isLoggedIn?Object(d.jsx)(u.a,{to:t}):n},M="LOGIN",J="LOGOUT",U=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):"",H={isLoggedIn:!!U,username:U.username,token:U.token,id:U.id},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M:return{isLoggedIn:!0,username:n.username,token:n.token,id:n.id};case J:return{isLoggedIn:!1,username:"",token:"",id:""};default:return e}};var z=function(){var e=Object(r.useReducer)(R,H),n=Object(a.a)(e,2),t=n[0],o=n[1];return Object(d.jsx)(p.Provider,{value:Object(c.a)(Object(c.a)({},t),{},{login:function(e){return o(function(e){return{type:M,username:e.username,token:e.token,id:e.id}}(e))},logout:function(){return o((localStorage.removeItem("user"),{type:J}))}}),children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/",element:Object(d.jsx)(B,{redirectTo:"/signin",children:Object(d.jsx)(j,{})})}),Object(d.jsx)(u.b,{path:"/dashboard",element:Object(d.jsxs)(G,{redirectTo:"/signin",children:[Object(d.jsx)(N,{}),Object(d.jsx)(F,{})]})}),Object(d.jsx)(u.b,{path:"/signup",element:Object(d.jsx)(B,{redirectTo:"/dashboard",children:Object(d.jsx)(O,{})})}),Object(d.jsx)(u.b,{path:"/signin",element:Object(d.jsx)(B,{redirectTo:"/dashboard",children:Object(d.jsx)(m,{})})})]})})})};l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.89aabc98.chunk.js.map