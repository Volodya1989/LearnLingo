"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[656],{8122:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(5508);const o=a(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var r=a(579);const s=()=>(0,r.jsx)(o,{children:(0,r.jsx)(i.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},3598:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var i=a(4858),o=a(5043),r=a(1036),s=(a(2342),a(7933)),n=a(1529);n.Ay.img`
  positon: relative;
`;const l=n.Ay.div`
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
`,d=(n.Ay.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`,n.Ay.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`),p=n.Ay.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`,c=n.Ay.label`
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
`,g=n.Ay.section`
  flex-direction: 'row';
  alignitems: 'center';
  position: relative;
  margin-top: 30px;
`,x=(n.Ay.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`,n.Ay.input`
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
`),m=n.Ay.p`
  font-size: 15px;
  line-height: calc(18 / 12);
  color: red;
`,u=n.Ay.input`
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
`,h=n.Ay.div`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`,f=n.Ay.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 8em;
`;var w=a(9791),v=a(8122),b=a(5394),y=a(9456),j=a(4199),A=a(579);const k=()=>{const e=(0,y.wA)(),{register:t,handleSubmit:a,formState:{errors:n}}=(0,i.mN)(),{loading:k}=(0,s.Ay)(),[S,C]=(0,o.useState)(""),[z,N]=(0,o.useState)(""),[P,R]=(0,o.useState)("Log In"),[T,$]=(0,o.useState)(!1),[E,q]=(0,o.useState)(!1),[L,W]=(0,o.useState)(!1),[F,I]=(0,o.useState)(!1),[Y,_]=(0,o.useState)(!0),D=(0,o.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&N(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&C(e.currentTarget.value.trim()))}),[N,C]),O=(e,t)=>{r.oR.error(e,{className:"toast-message"})},H=t=>{I(!0),""!==t.password||""!==t.email?(Y&&(_(!1),setTimeout((()=>{var e;e="Please wait as it takes few more seconds for server to wake up.",r.oR.info(e,{className:"toast-message"}),console.log("Server is starting up.")}),8500)),C(""),N(""),q(!0),$(!0),e((0,j.E8)({email:t.email.toLowerCase(),password:t.password})).then((e=>{try{var t,a;if(q(!1),null!==e&&void 0!==e&&null!==(t=e.error)&&void 0!==t&&t.message){const{payload:t}=e;console.log("ERROR",t);const a="Email in use",i="PASSWORD should have a minimum length of 6",o="Email or password invalid",r=`"email" with value "${e.meta.arg.email}" fails to match the required pattern: /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/`;O(t===a?"Please provide different email.":t===i?`${i} characters.`:t===r?"Please provide valid Email.":t===o?`${o}.`:"Please try again as server error occured."),$(!0),setTimeout((()=>{$(!1)}),4e3)}null!==e&&void 0!==e&&null!==(a=e.error)&&void 0!==a&&a.message||(i="You are logging...",r.oR.success(i,{className:"toast-message"}),$(!0),C(""),N(""),R("Logging..."),setTimeout((()=>{window.location.href="https://volodya1989.github.io/learn-lingo/#/teachers",$(!1),R("Log In")}),2e3))}catch(o){console.log("error",o.message)}var i}))):O("Please provide details")},M=(0,o.useCallback)((e=>{k||F||setTimeout((()=>{q(!0)}),1e3)}),[k,F]);return(0,o.useEffect)((()=>{M()}),[M]),(0,A.jsx)(A.Fragment,{children:E||F?(0,A.jsxs)(l,{children:[(0,A.jsx)(f,{children:E&&F&&(0,A.jsx)(v.A,{})}),(0,A.jsxs)(w._W,{autoClose:4e3,position:"top-right",children:[(0,A.jsx)(r.N9,{}),";"]}),(0,A.jsx)(d,{children:"Log In"}),(0,A.jsx)(p,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),(0,A.jsxs)("form",{onSubmit:a((e=>H(e))),children:[n.password&&(0,A.jsx)(m,{children:"Password is required."}),n.email&&(0,A.jsx)(m,{children:"Email is required."}),(0,A.jsxs)(g,{children:[(0,A.jsx)(x,{...t("email",{required:!0,value:z}),onChange:D,name:"email",value:z,autoComplete:"off",type:"text"}),(0,A.jsx)(c,{htmlFor:1,children:"Email"})]}),(0,A.jsxs)(g,{children:[(0,A.jsx)(x,{...t("password",{required:!0,value:S}),sx:{position:"relative"},onChange:D,name:"password",value:S,autoComplete:"off",type:L?"text":"password"}),(0,A.jsx)(h,{onClick:()=>{W(!L)},children:L?(0,A.jsx)(b.Rds,{}):(0,A.jsx)(b.whC,{})}),(0,A.jsx)(c,{htmlFor:1,children:"Password"})]}),(0,A.jsx)(u,{disabled:!S||!z||T,type:"submit",value:E&&F?"Submitting...":P})]})]}):(0,A.jsx)(v.A,{})})}},9791:(e,t,a)=>{a.d(t,{RZ:()=>n,_W:()=>l,rf:()=>s,zy:()=>r});var i=a(1529),o=a(1036);const r=i.DU`
body{
  overflow-y: ${e=>{let{isShowModal:t}=e;return t?"hidden":"scroll"}};
}
`,s=i.Ay.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`,n=i.Ay.div`
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
`,l=(0,i.Ay)(o.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`}}]);
//# sourceMappingURL=656.c33b8d53.chunk.js.map