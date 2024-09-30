"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[253],{8122:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(5508);const r=i(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var o=i(579);const n=()=>(0,o.jsx)(r,{children:(0,o.jsx)(a.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},189:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var a=i(4858),r=i(5043),o=i(1036),n=(i(2342),i(7933)),s=i(1529);s.Ay.img`
  positon: relative;
`;const l=s.Ay.div`
  position: relative;
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
`,u=s.Ay.section`
  flex-direction: 'row';
  alignitems: 'center';
  position: relative;
  margin-top: 30px;
`,m=(s.Ay.img`
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
`),g=s.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,x=s.Ay.input`
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
`;var v=i(9791),w=i(8122),y=i(5394),b=i(9456),j=i(4199),A=i(4916),S=i(579);const k=()=>{const{register:e,handleSubmit:t,formState:{errors:i}}=(0,a.mN)(),{loading:s}=(0,n.Ay)(),[k,C]=(0,r.useState)(""),[z,N]=(0,r.useState)(""),[T,P]=(0,r.useState)(""),[$,q]=(0,r.useState)("Sign Up"),[E,R]=(0,r.useState)(!1),[F,U]=(0,r.useState)(!1),[_,I]=(0,r.useState)(!1),[W,D]=(0,r.useState)(!1),[O,Y]=(0,A.A)("isServerUp",!0),J=(0,b.wA)(),L=(0,r.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&N(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&C(e.currentTarget.value.trim()),"name"===e.currentTarget.name&&P(e.currentTarget.value.trim()))}),[N,C,P]),H=(e,t)=>{o.oR.error(e,{className:"toast-message"})},M=e=>{if(D(!0),""===e.password&&""===e.email)return void H("Please provide details");O&&(Y(!1),setTimeout((()=>{var e;e="Please wait as it takes few more seconds for server to wake up.",o.oR.info(e,{className:"toast-message"}),console.log("Server is starting up.")}),10500)),C(""),N(""),P(""),U(!0),R(!0),J((0,j.kz)({username:e.name,email:e.email.toLowerCase(),password:e.password})).then((e=>{try{var i,a;if(U(!1),null!==e&&void 0!==e&&null!==(i=e.error)&&void 0!==i&&i.message){const{payload:t}=e;setTimeout((()=>{R(!1)}),2e3),R(!0);const i="Email in use",a="PASSWORD should have a minimum length of 6",r=`"email" with value "${e.meta.arg.email}" fails to match the required pattern: /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/`,o="E11000 duplicate key error collection: Lingo.users index: username_1 dup key";t===i?H("Please provide different email."):t===a?H(`${a} characters.`):t===r?H("Please provide valid Email."):t.includes(o)?H("Please provide unique Username."):H("Please try again as server error occured.")}null!==e&&void 0!==e&&null!==(a=e.error)&&void 0!==a&&a.message||(q("Signing up..."),R(!0),r=`${t}, please check your email to verify your registration.`,o.oR.success(r,{className:"toast-message"}),setTimeout((()=>{q("Sign up"),R(!1),window.location.href="https://volodya1989.github.io/learn-lingo/#/login"}),5e3))}catch(n){console.log("error",n)}var r}));const t=e.name},Z=(0,r.useCallback)((e=>{s||W||setTimeout((()=>{U(!0)}),1e3)}),[s,W]);return(0,r.useEffect)((()=>{Z()}),[Z]),(0,S.jsx)(S.Fragment,{children:F||W?(0,S.jsxs)(l,{children:[(0,S.jsx)(f,{children:F&&W&&(0,S.jsx)(w.A,{})}),(0,S.jsxs)(v._W,{autoClose:6e3,position:"top-right",children:[(0,S.jsx)(o.N9,{}),";"]}),(0,S.jsx)(d,{children:"Registration"}),(0,S.jsx)(p,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),(0,S.jsxs)("form",{onSubmit:t((e=>M(e))),children:[i.password&&(0,S.jsx)(g,{children:"Password is required."}),i.email&&(0,S.jsx)(g,{children:"Email is required."}),i.name&&(0,S.jsx)(g,{children:"Name is required."}),(0,S.jsxs)(u,{children:[(0,S.jsx)(m,{...e("name",{required:!0,value:T}),onChange:L,name:"name",value:T,autoComplete:"off",type:"text"}),(0,S.jsx)(c,{htmlFor:1,children:"Username"})]}),(0,S.jsxs)(u,{children:[(0,S.jsx)(m,{...e("email",{required:!0,value:z}),onChange:L,name:"email",value:z,autoComplete:"off",type:"text"}),(0,S.jsx)(c,{htmlFor:1,children:"Email"})]}),(0,S.jsxs)(u,{children:[(0,S.jsx)(m,{...e("password",{required:!0,value:k}),sx:{position:"relative"},onChange:L,name:"password",value:k,autoComplete:"off",type:_?"text":"password"}),(0,S.jsx)(h,{onClick:()=>{I(!_)},children:_?(0,S.jsx)(y.Rds,{}):(0,S.jsx)(y.whC,{})}),(0,S.jsx)(c,{htmlFor:1,children:"Password"})]}),(0,S.jsx)(x,{disabled:E,type:"submit",value:F&&W?"Submitting...":$})]})]}):(0,S.jsx)(w.A,{})})}},9791:(e,t,i)=>{i.d(t,{RZ:()=>s,_W:()=>l,rf:()=>n,zy:()=>o});var a=i(1529),r=i(1036);const o=a.DU`
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
`,l=(0,a.Ay)(r.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`},4916:(e,t,i)=>{i.d(t,{A:()=>r});var a=i(5043);function r(e,t){const[i,r]=(0,a.useState)((()=>{var i;return null!==(i=JSON.parse(window.localStorage.getItem(e)))&&void 0!==i?i:t}));return(0,a.useEffect)((()=>{window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,r]}}}]);
//# sourceMappingURL=253.6b528ff9.chunk.js.map