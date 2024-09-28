"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[656],{8122:(e,t,o)=>{o.d(t,{A:()=>n});var a=o(5508);const i=o(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var r=o(579);const n=()=>(0,r.jsx)(i,{children:(0,r.jsx)(a.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},3598:(e,t,o)=>{o.r(t),o.d(t,{default:()=>A});var a=o(4858),i=o(5043),r=o(1036),n=(o(2342),o(7933)),s=o(1529);s.Ay.img`
  positon: relative;
`;const l=s.Ay.div`
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
`;var f=o(9791),b=o(8122),y=o(5394),w=o(9456),v=o(4199),j=o(579);const A=()=>{const e=(0,w.wA)(),{register:t,handleSubmit:o,formState:{errors:s}}=(0,a.mN)(),{loading:A}=(0,n.Ay)(),[k,C]=(0,i.useState)(""),[z,S]=(0,i.useState)(""),[N,T]=(0,i.useState)("Log In"),[E,L]=(0,i.useState)(!1),[R,$]=(0,i.useState)(!1),[q,F]=(0,i.useState)(!1),I=(0,i.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&S(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&C(e.currentTarget.value.trim()))}),[S,C]),W=t=>{e((0,v.E8)({email:t.email.toLowerCase(),password:t.password})).then((e=>{try{var t,o;null!==e&&void 0!==e&&null!==(t=e.error)&&void 0!==t&&t.message&&(C(""),S(""),a="Email or password is incorrect OR check your email to complete your registration.",r.oR.error(a,{className:"toast-message"}),L(!0),setTimeout((()=>{L(!1)}),4e3)),null!==e&&void 0!==e&&null!==(o=e.error)&&void 0!==o&&o.message||((e=>{r.oR.success(e,{className:"toast-message"})})("You are logging..."),L(!0),C(""),S(""),T("Logging..."),setTimeout((()=>{window.location.href="https://volodya1989.github.io/learn-lingo/#/teachers",L(!1),T("Log In")}),2e3))}catch(i){console.log("error",i.message)}var a}))},Y=(0,i.useCallback)((e=>{A||setTimeout((()=>{$(!0)}),1e3)}),[A]);return(0,i.useEffect)((()=>{Y()}),[Y]),(0,j.jsx)(j.Fragment,{children:R?(0,j.jsxs)(l,{children:[(0,j.jsxs)(f._W,{autoClose:4e3,position:"top-right",children:[(0,j.jsx)(r.N9,{}),";"]}),(0,j.jsx)(p,{children:"Log In"}),(0,j.jsx)(d,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),(0,j.jsxs)("form",{onSubmit:o((e=>W(e))),children:[s.password&&(0,j.jsx)(u,{children:"Password is required."}),s.email&&(0,j.jsx)(u,{children:"Email is required."}),(0,j.jsxs)(x,{children:[(0,j.jsx)(g,{...t("email",{required:!0,value:z}),onChange:I,name:"email",value:z,autoComplete:"off",type:"text"}),(0,j.jsx)(c,{htmlFor:1,children:"Email"})]}),(0,j.jsxs)(x,{children:[(0,j.jsx)(g,{...t("password",{required:!0,value:k}),sx:{position:"relative"},onChange:I,name:"password",value:k,autoComplete:"off",type:q?"text":"password"}),(0,j.jsx)(h,{onClick:()=>{F(!q)},children:q?(0,j.jsx)(y.Rds,{}):(0,j.jsx)(y.whC,{})}),(0,j.jsx)(c,{htmlFor:1,children:"Password"})]}),(0,j.jsx)(m,{disabled:E,type:"submit",value:N})]})]}):(0,j.jsx)(b.A,{})})}},9791:(e,t,o)=>{o.d(t,{RZ:()=>s,_W:()=>l,rf:()=>n,zy:()=>r});var a=o(1529),i=o(1036);const r=a.DU`
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
//# sourceMappingURL=656.7e6a2e92.chunk.js.map