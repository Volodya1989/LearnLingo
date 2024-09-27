"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[253],{8122:(e,t,i)=>{i.d(t,{A:()=>o});var a=i(5508);const n=i(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var r=i(579);const o=()=>(0,r.jsx)(n,{children:(0,r.jsx)(a.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},189:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var a=i(4858),n=i(5043),r=i(1036),o=(i(2342),i(7933)),s=i(1529);s.Ay.img`
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
`;var f=i(9791),y=i(8122),b=i(5394),w=i(9456),v=i(4199),j=i(579);const A=()=>{const{register:e,handleSubmit:t,formState:{errors:i},formState:{isSubmitSuccessful:s}}=(0,a.mN)(),{loading:A}=(0,o.Ay)(),[k,S]=(0,n.useState)(""),[C,z]=(0,n.useState)(""),[T,N]=(0,n.useState)(""),[q,$]=(0,n.useState)("Sign Up"),[F,E]=(0,n.useState)(!1),[R,_]=(0,n.useState)(!1),[P,U]=(0,n.useState)(!1),W=(0,w.wA)(),Y=(0,n.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&z(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&S(e.currentTarget.value.trim()),"name"===e.currentTarget.name&&N(e.currentTarget.value.trim()))}),[z,S,N]),D=e=>{W((0,v.kz)({username:e.name,email:e.email,password:e.password})),console.log(e);const t=e.name;setTimeout((()=>{var e;E(!1),$("Signed up"),e=`${t}, please check your email to verify your registration.`,r.oR.success(e,{className:"toast-message"})}),1e3),setTimeout((()=>{window.location.href="https://volodya1989.github.io/login#/login"}),6e3),E(!0),S(""),z(""),N(""),$("Signing up...")};(0,n.useEffect)((()=>{s&&(S(""),z(""),N(""))}),[z,S,N,s]);const I=(0,n.useCallback)((e=>{A||setTimeout((()=>{_(!0)}),1e3)}),[A]);return(0,n.useEffect)((()=>{I()}),[I]),(0,j.jsx)(j.Fragment,{children:R?(0,j.jsxs)(l,{children:[(0,j.jsxs)(f._W,{autoClose:6e3,position:"top-right",children:[(0,j.jsx)(r.N9,{}),";"]}),(0,j.jsx)(p,{children:"Registration"}),(0,j.jsx)(d,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),(0,j.jsxs)("form",{onSubmit:t((e=>D(e))),children:[i.password&&(0,j.jsx)(m,{children:"Password is required."}),i.email&&(0,j.jsx)(m,{children:"Email is required."}),i.name&&(0,j.jsx)(m,{children:"Name is required."}),(0,j.jsxs)(x,{children:[(0,j.jsx)(u,{...e("name",{required:!0,value:T}),onChange:Y,name:"name",value:T,autoComplete:"off",type:"text"}),(0,j.jsx)(c,{htmlFor:1,children:"Username"})]}),(0,j.jsxs)(x,{children:[(0,j.jsx)(u,{...e("email",{required:!0,value:C}),onChange:Y,name:"email",value:C,autoComplete:"off",type:"text"}),(0,j.jsx)(c,{htmlFor:1,children:"Email"})]}),(0,j.jsxs)(x,{children:[(0,j.jsx)(u,{...e("password",{required:!0,value:k}),sx:{position:"relative"},onChange:Y,name:"password",value:k,autoComplete:"off",type:P?"text":"password"}),(0,j.jsx)(h,{onClick:()=>{U(!P)},children:P?(0,j.jsx)(b.Rds,{}):(0,j.jsx)(b.whC,{})}),(0,j.jsx)(c,{htmlFor:1,children:"Password"})]}),(0,j.jsx)(g,{disabled:F,type:"submit",value:q})]})]}):(0,j.jsx)(y.A,{})})}},9791:(e,t,i)=>{i.d(t,{RZ:()=>s,_W:()=>l,rf:()=>o,zy:()=>r});var a=i(1529),n=i(1036);const r=a.DU`
body{
  overflow-y: ${e=>{let{isShowModal:t}=e;return t?"hidden":"scroll"}};
}
`,o=a.Ay.div`
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
`,l=(0,a.Ay)(n.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`}}]);
//# sourceMappingURL=253.b74433f3.chunk.js.map