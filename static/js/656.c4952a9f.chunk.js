"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[656],{8122:(e,t,i)=>{i.d(t,{A:()=>n});var o=i(5508);const a=i(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var r=i(579);const n=()=>(0,r.jsx)(a,{children:(0,r.jsx)(o.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},3598:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var o=i(4858),a=i(5043),r=i(1036),n=(i(2342),i(7933)),s=i(1529);s.Ay.img`
  positon: relative;
`;const l=s.Ay.div`
  position: relative;
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
`,p=(s.Ay.p`
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
`),d=s.Ay.p`
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
`,g=(s.Ay.img`
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
`),u=s.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,m=s.Ay.input`
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
`,f=s.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`;var b=i(9791),y=i(8122),w=i(5394),v=i(9456),j=i(4199),A=i(579);const k=()=>{const e=(0,v.wA)(),{register:t,handleSubmit:i,formState:{errors:s}}=(0,o.mN)(),{loading:k}=(0,n.Ay)(),[C,z]=(0,a.useState)(""),[S,N]=(0,a.useState)(""),[T,E]=(0,a.useState)("Log In"),[L,R]=(0,a.useState)(!1),[$,q]=(0,a.useState)(!1),[F,I]=(0,a.useState)(!1),[P,W]=(0,a.useState)(!1),Y=(0,a.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&N(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&z(e.currentTarget.value.trim()))}),[N,z]),_=(e,t)=>{r.oR.error(e,{className:"toast-message"})},D=t=>{W(!0),""!==t.password||""!==t.email?(z(""),N(""),q(!0),R(!0),e((0,j.E8)({email:t.email.toLowerCase(),password:t.password})).then((e=>{try{var t,i;q(!1),null!==e&&void 0!==e&&null!==(t=e.error)&&void 0!==t&&t.message&&(_("Email or password is incorrect OR check your email to complete your registration."),R(!0),setTimeout((()=>{R(!1)}),4e3)),null!==e&&void 0!==e&&null!==(i=e.error)&&void 0!==i&&i.message||(o="You are logging...",r.oR.success(o,{className:"toast-message"}),R(!0),z(""),N(""),E("Logging..."),setTimeout((()=>{window.location.href="https://volodya1989.github.io/learn-lingo/#/teachers",R(!1),E("Log In")}),2e3))}catch(a){console.log("error",a.message)}var o}))):_("Please provide details")},H=(0,a.useCallback)((e=>{k||P||setTimeout((()=>{q(!0)}),1e3)}),[k,P]);return(0,a.useEffect)((()=>{H()}),[H]),(0,A.jsx)(A.Fragment,{children:$||P?(0,A.jsxs)(l,{children:[(0,A.jsx)(f,{children:$&&P&&(0,A.jsx)(y.A,{})}),(0,A.jsxs)(b._W,{autoClose:4e3,position:"top-right",children:[(0,A.jsx)(r.N9,{}),";"]}),(0,A.jsx)(p,{children:"Log In"}),(0,A.jsx)(d,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),(0,A.jsxs)("form",{onSubmit:i((e=>D(e))),children:[s.password&&(0,A.jsx)(u,{children:"Password is required."}),s.email&&(0,A.jsx)(u,{children:"Email is required."}),(0,A.jsxs)(x,{children:[(0,A.jsx)(g,{...t("email",{required:!0,value:S}),onChange:Y,name:"email",value:S,autoComplete:"off",type:"text"}),(0,A.jsx)(c,{htmlFor:1,children:"Email"})]}),(0,A.jsxs)(x,{children:[(0,A.jsx)(g,{...t("password",{required:!0,value:C}),sx:{position:"relative"},onChange:Y,name:"password",value:C,autoComplete:"off",type:F?"text":"password"}),(0,A.jsx)(h,{onClick:()=>{I(!F)},children:F?(0,A.jsx)(w.Rds,{}):(0,A.jsx)(w.whC,{})}),(0,A.jsx)(c,{htmlFor:1,children:"Password"})]}),(0,A.jsx)(m,{disabled:!C||!S||L,type:"submit",value:$&&P?"Submitting...":T})]})]}):(0,A.jsx)(y.A,{})})}},9791:(e,t,i)=>{i.d(t,{RZ:()=>s,_W:()=>l,rf:()=>n,zy:()=>r});var o=i(1529),a=i(1036);const r=o.DU`
body{
  overflow-y: ${e=>{let{isShowModal:t}=e;return t?"hidden":"scroll"}};
}
`,n=o.Ay.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`,s=o.Ay.div`
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
`,l=(0,o.Ay)(a.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`}}]);
//# sourceMappingURL=656.c4952a9f.chunk.js.map