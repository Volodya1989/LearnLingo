"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[656],{8122:(e,t,o)=>{o.d(t,{A:()=>n});var i=o(5508);const a=o(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var r=o(579);const n=()=>(0,r.jsx)(a,{children:(0,r.jsx)(i.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},3598:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});var i=o(4858),a=o(5043),r=o(1036),n=(o(2342),o(7933)),s=o(7614),l=o(1529);l.Ay.img`
  positon: relative;
`;const p=l.Ay.div`
  display: block;
  margin: auto;
  margin-top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
  // padding-right: 20px;
  // padding-left: 20px;
  // padding-top: 20px;
  // padding-bottom: 20px;
  padding: 60px 60px;
  border-radius: 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.07;
    width: 600px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 30px;
    line-height: 1.06;
  }
`,d=(l.Ay.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`,l.Ay.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`),c=l.Ay.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`,g=l.Ay.label`
  font-size: 18px;
  font-weight: 300;
  width: 200px;
  color: #9ca5b5;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
  padding-left: 15px;
`,x=l.Ay.section`
  flex-direction: 'row';
  alignitems: 'center';
  position: relative;
  margin-top: 30px;
`,u=(l.Ay.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`,l.Ay.input`
  display: flex;
  border: 0;
  font-size: 22px;
  background-color: transparent;
  padding-top: 10px;
  border-bottom: 1px solid #f4c550;

  outline: none;
  width: 100%;
  color: black;
  overflow: hidden;

  ${e=>{let{disabled:t}=e;return t?"\n    pointer-events: none;\n    \n  ":""}}

  &:focus {
    border-color: #6118de;
  }

  &:focus ~ ${g} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${g} {\n      transform: translateY(-40px);\n\n    }\n  `}}
`),m=l.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,h=l.Ay.input`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: Hug (60px) px;
  padding: 16px 48px 16px 48px;
  gap: 0px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  border-radius: 12px;
  opacity: 0px;
  font-weight: 700;
  background: #f4c550;
  border: none;
  font-size: 18px;
  line-height: calc(28 / 18);
  cursor: pointer;
  &:hover {
    transition: opacity 0.4s;
    opacity: 0.8;
    transition-timing-function: ease;
  }
`,f=l.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`;var b=o(9791),y=o(8122),w=o(5394),v=o(9456),j=o(4199),A=o(579);const k=()=>{const e=(0,v.wA)(),{isLoggedIn:t,isVerified:o}=(0,s.A)(),{register:l,handleSubmit:k,formState:{errors:C},formState:{isSubmitSuccessful:S}}=(0,i.mN)(),{loading:z}=(0,n.Ay)(),[N,L]=(0,a.useState)(""),[T,I]=(0,a.useState)(""),[E,$]=(0,a.useState)("Log In"),[q,F]=(0,a.useState)(!1),[R,W]=(0,a.useState)(!1),[Y,_]=(0,a.useState)(!1),P=(0,a.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&I(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&L(e.currentTarget.value.trim()))}),[I,L]),D=(e,t)=>{r.oR.error(e,{className:"toast-message"})},H=i=>{console.log(i.email.toLowerCase()),e((0,j.E8)({email:i.email.toLowerCase(),password:i.password})).then((e=>{try{var t,i;console.log("response",e),null!==e&&void 0!==e&&null!==(t=e.error)&&void 0!==t&&t.message&&o&&D("Email or password is incorrect"),null!==e&&void 0!==e&&null!==(i=e.error)&&void 0!==i&&i.message||(a="You are logging...",r.oR.success(a,{className:"toast-message"}),window.location.href="https://volodya1989.github.io/learn-lingo/#/teachers"),o||D("If you registered, please check your email to complete your registration.")}catch(n){console.log("error",n.message)}var a})),F(!0),L(""),I(""),$("Logging..."),setTimeout((()=>{F(!1),$("Log In")}),1e3),setTimeout((()=>{console.log("isLoggedIn",t)}),1500)};(0,a.useEffect)((()=>{S&&(L(""),I(""))}),[I,L,S]);const M=(0,a.useCallback)((e=>{z||setTimeout((()=>{W(!0)}),1e3)}),[z]);return(0,a.useEffect)((()=>{M()}),[M]),(0,A.jsx)(A.Fragment,{children:R?(0,A.jsxs)(p,{children:[(0,A.jsxs)(b._W,{autoClose:4e3,position:"top-right",children:[(0,A.jsx)(r.N9,{}),";"]}),(0,A.jsx)(d,{children:"Log In"}),(0,A.jsx)(c,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),(0,A.jsxs)("form",{onSubmit:k((e=>H(e))),children:[C.password&&(0,A.jsx)(m,{children:"Password is required."}),C.email&&(0,A.jsx)(m,{children:"Email is required."}),(0,A.jsxs)(x,{children:[(0,A.jsx)(u,{...l("email",{required:!0,value:T}),onChange:P,name:"email",value:T,autoComplete:"off",type:"text"}),(0,A.jsx)(g,{htmlFor:1,children:"Email"})]}),(0,A.jsxs)(x,{children:[(0,A.jsx)(u,{...l("password",{required:!0,value:N}),sx:{position:"relative"},onChange:P,name:"password",value:N,autoComplete:"off",type:Y?"text":"password"}),(0,A.jsx)(f,{onClick:()=>{_(!Y)},children:Y?(0,A.jsx)(w.Rds,{}):(0,A.jsx)(w.whC,{})}),(0,A.jsx)(g,{htmlFor:1,children:"Password"})]}),(0,A.jsx)(h,{disabled:q,type:"submit",value:E})]})]}):(0,A.jsx)(y.A,{})})}},9791:(e,t,o)=>{o.d(t,{RZ:()=>s,_W:()=>l,rf:()=>n,zy:()=>r});var i=o(1529),a=o(1036);const r=i.DU`
body{
  overflow-y: ${e=>{let{isShowModal:t}=e;return t?"hidden":"scroll"}};
}
`,n=i.Ay.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`,s=i.Ay.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    margin-left: 45px;
  }
  @media screen and (min-width: 1150px) {
    width: 1150px;
  }
`,l=(0,i.Ay)(a.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`}}]);
//# sourceMappingURL=656.1ecdb0a3.chunk.js.map