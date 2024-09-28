"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[253],{8122:(e,t,r)=>{r.d(t,{A:()=>n});var a=r(5508);const i=r(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var o=r(579);const n=()=>(0,o.jsx)(i,{children:(0,o.jsx)(a.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},189:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var a=r(4858),i=r(5043),o=r(1036),n=(r(2342),r(7933)),s=r(1529);s.Ay.img`
  positon: relative;
`;const l=s.Ay.div`
  display: block;
  margin: auto;
  margin-top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
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
`,d=(s.Ay.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`,s.Ay.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`),p=s.Ay.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`,c=s.Ay.label`
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
`,x=s.Ay.section`
  flex-direction: 'row';
  alignitems: 'center';
  position: relative;
  margin-top: 30px;
`,u=(s.Ay.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`,s.Ay.input`
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

  &:focus ~ ${c} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${c} {\n      transform: translateY(-40px);\n\n    }\n  `}}
`),m=s.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,g=s.Ay.input`
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
`,h=s.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`;var f=r(9791),y=r(8122),v=r(5394),w=r(9456),b=r(4199),j=r(579);const A=()=>{const{register:e,handleSubmit:t,formState:{errors:r}}=(0,a.mN)(),{loading:s}=(0,n.Ay)(),[A,k]=(0,i.useState)(""),[C,S]=(0,i.useState)(""),[z,N]=(0,i.useState)(""),[T,q]=(0,i.useState)("Sign Up"),[$,F]=(0,i.useState)(!1),[R,P]=(0,i.useState)(!1),[_,E]=(0,i.useState)(!1),U=(0,w.wA)(),W=(0,i.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&S(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&k(e.currentTarget.value.trim()),"name"===e.currentTarget.name&&N(e.currentTarget.value.trim()))}),[S,k,N]),Y=e=>{U((0,b.kz)({username:e.name,email:e.email.toLowerCase(),password:e.password})).then((e=>{try{var r,a;null!==e&&void 0!==e&&null!==(r=e.error)&&void 0!==r&&r.message&&(setTimeout((()=>{F(!1)}),2e3),F(!0),i="Provide valid email or password should have at least 6 characters",o.oR.error(i,{className:"toast-message"})),null!==e&&void 0!==e&&null!==(a=e.error)&&void 0!==a&&a.message||(k(""),S(""),N(""),q("Signing up..."),F(!0),(e=>{o.oR.success(e,{className:"toast-message"})})(`${t}, please check your email to verify your registration.`),setTimeout((()=>{q("Sign up"),F(!1),window.location.href="https://volodya1989.github.io/learn-lingo/#/login"}),5e3))}catch(n){console.log("error",n.message)}var i}));const t=e.name},D=(0,i.useCallback)((e=>{s||setTimeout((()=>{P(!0)}),1e3)}),[s]);return(0,i.useEffect)((()=>{D()}),[D]),(0,j.jsx)(j.Fragment,{children:R?(0,j.jsxs)(l,{children:[(0,j.jsxs)(f._W,{autoClose:6e3,position:"top-right",children:[(0,j.jsx)(o.N9,{}),";"]}),(0,j.jsx)(d,{children:"Registration"}),(0,j.jsx)(p,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),(0,j.jsxs)("form",{onSubmit:t((e=>Y(e))),children:[r.password&&(0,j.jsx)(m,{children:"Password is required."}),r.email&&(0,j.jsx)(m,{children:"Email is required."}),r.name&&(0,j.jsx)(m,{children:"Name is required."}),(0,j.jsxs)(x,{children:[(0,j.jsx)(u,{...e("name",{required:!0,value:z}),onChange:W,name:"name",value:z,autoComplete:"off",type:"text"}),(0,j.jsx)(c,{htmlFor:1,children:"Username"})]}),(0,j.jsxs)(x,{children:[(0,j.jsx)(u,{...e("email",{required:!0,value:C}),onChange:W,name:"email",value:C,autoComplete:"off",type:"text"}),(0,j.jsx)(c,{htmlFor:1,children:"Email"})]}),(0,j.jsxs)(x,{children:[(0,j.jsx)(u,{...e("password",{required:!0,value:A}),sx:{position:"relative"},onChange:W,name:"password",value:A,autoComplete:"off",type:_?"text":"password"}),(0,j.jsx)(h,{onClick:()=>{E(!_)},children:_?(0,j.jsx)(v.Rds,{}):(0,j.jsx)(v.whC,{})}),(0,j.jsx)(c,{htmlFor:1,children:"Password"})]}),(0,j.jsx)(g,{disabled:$,type:"submit",value:T})]})]}):(0,j.jsx)(y.A,{})})}},9791:(e,t,r)=>{r.d(t,{RZ:()=>s,_W:()=>l,rf:()=>n,zy:()=>o});var a=r(1529),i=r(1036);const o=a.DU`
body{
  overflow-y: ${e=>{let{isShowModal:t}=e;return t?"hidden":"scroll"}};
}
`,n=a.Ay.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`,s=a.Ay.div`
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
`,l=(0,a.Ay)(i.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`}}]);
//# sourceMappingURL=253.874945d4.chunk.js.map