"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[656],{8122:(e,t,i)=>{i.d(t,{A:()=>r});var a=i(5508);const n=i(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var o=i(579);const r=()=>(0,o.jsx)(n,{children:(0,o.jsx)(a.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},3598:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var a=i(4858),n=i(5043),o=i(1036),r=(i(2342),i(7933)),s=i(1529);s.Ay.img`
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
`;var f=i(9791),b=i(8122),y=i(5394),w=i(9456),v=i(4199),j=i(579);const A=()=>{const e=(0,w.wA)(),{register:t,handleSubmit:i,formState:{errors:s},formState:{isSubmitSuccessful:A}}=(0,a.mN)(),{loading:k}=(0,r.Ay)(),[C,S]=(0,n.useState)(""),[z,N]=(0,n.useState)(""),[T,E]=(0,n.useState)("Log In"),[$,q]=(0,n.useState)(!1),[F,I]=(0,n.useState)(!1),[W,Y]=(0,n.useState)(!1),_=(0,n.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&N(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&S(e.currentTarget.value.trim()))}),[N,S]),L=t=>{console.log(t),e((0,v.E8)({email:t.email,password:t.password})),q(!0),S(""),N(""),E("Logging..."),setTimeout((()=>{var e;q(!1),E("In development ..."),e="You are logging...",o.oR.success(e,{className:"toast-message"})}),1e3)};(0,n.useEffect)((()=>{A&&(S(""),N(""))}),[N,S,A]);const P=(0,n.useCallback)((e=>{k||setTimeout((()=>{I(!0)}),1e3)}),[k]);return(0,n.useEffect)((()=>{P()}),[P]),(0,j.jsx)(j.Fragment,{children:F?(0,j.jsxs)(l,{children:[(0,j.jsxs)(f._W,{autoClose:2e3,position:"top-right",children:[(0,j.jsx)(o.N9,{}),";"]}),(0,j.jsx)(p,{children:"Log In"}),(0,j.jsx)(d,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),(0,j.jsxs)("form",{onSubmit:i((e=>L(e))),children:[s.password&&(0,j.jsx)(u,{children:"Password is required."}),s.email&&(0,j.jsx)(u,{children:"Email is required."}),(0,j.jsxs)(x,{children:[(0,j.jsx)(g,{...t("email",{required:!0,value:z}),onChange:_,name:"email",value:z,autoComplete:"off",type:"text"}),(0,j.jsx)(c,{htmlFor:1,children:"Email"})]}),(0,j.jsxs)(x,{children:[(0,j.jsx)(g,{...t("password",{required:!0,value:C}),sx:{position:"relative"},onChange:_,name:"password",value:C,autoComplete:"off",type:W?"text":"password"}),(0,j.jsx)(h,{onClick:()=>{Y(!W)},children:W?(0,j.jsx)(y.Rds,{}):(0,j.jsx)(y.whC,{})}),(0,j.jsx)(c,{htmlFor:1,children:"Password"})]}),(0,j.jsx)(m,{disabled:$,type:"submit",value:T})]})]}):(0,j.jsx)(b.A,{})})}},9791:(e,t,i)=>{i.d(t,{RZ:()=>s,_W:()=>l,rf:()=>r,zy:()=>o});var a=i(1529),n=i(1036);const o=a.DU`
body{
  overflow-y: ${e=>{let{isShowModal:t}=e;return t?"hidden":"scroll"}};
}
`,r=a.Ay.div`
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
//# sourceMappingURL=656.c1e3287b.chunk.js.map