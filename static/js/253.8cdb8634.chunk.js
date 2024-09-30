"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[253],{8122:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(5508);const a=r(1529).Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;var o=r(579);const n=()=>(0,o.jsx)(a,{children:(0,o.jsx)(i.IN,{strokeColor:"#f4c550",margin:"auto",textAlign:"center",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})},189:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var i=r(4858),a=r(5043),o=r(1036),n=(r(2342),r(7933)),s=r(1529);s.Ay.img`
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
`,u=s.Ay.label`
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
`,c=s.Ay.section`
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

  &:focus ~ ${u} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${e=>{let{value:t=""}=e;return t&&`\n    & ~ ${u} {\n      transform: translateY(-40px);\n\n    }\n  `}}
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
`;var v=r(9791),w=r(8122),y=r(5394),b=r(9456),j=r(4199),A=r(4916),S=r(579);const k=()=>{const{register:e,handleSubmit:t,formState:{errors:r}}=(0,i.mN)(),{loading:s}=(0,n.Ay)(),[k,C]=(0,a.useState)(""),[z,N]=(0,a.useState)(""),[T,P]=(0,a.useState)(""),[$,q]=(0,a.useState)("Sign Up"),[R,E]=(0,a.useState)(!1),[F,U]=(0,a.useState)(!1),[_,I]=(0,a.useState)(!1),[W,D]=(0,a.useState)(!1),[O,Y]=(0,A.A)("isServerUp",!0),J=(0,a.useRef)(null),L=(0,b.wA)(),H=(0,a.useCallback)((e=>{" "!==e.currentTarget.value&&("email"===e.currentTarget.name&&N(e.currentTarget.value.trim()),"password"===e.currentTarget.name&&C(e.currentTarget.value.trim()),"name"===e.currentTarget.name&&P(e.currentTarget.value.trim()))}),[N,C,P]),M=(e,t)=>{o.oR.error(e,{className:"toast-message"})},Z=e=>{if(D(!0),""===e.password&&""===e.email)return void M("Please provide details");O&&(Y(!1),J.current=setTimeout((()=>{var e;e="Please wait as it takes few more seconds for server to wake up.",o.oR.info(e,{className:"toast-message"}),console.log("Server is starting up.")}),10500)),C(""),N(""),P(""),U(!0),E(!0),L((0,j.kz)({username:e.name,email:e.email.toLowerCase(),password:e.password})).then((e=>{try{var r,i;if(clearTimeout(J.current),U(!1),null!==e&&void 0!==e&&null!==(r=e.error)&&void 0!==r&&r.message){const{payload:t}=e;setTimeout((()=>{E(!1)}),2e3),E(!0);const r="Email in use",i="PASSWORD should have a minimum length of 6",a=`"email" with value "${e.meta.arg.email}" fails to match the required pattern: /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/`,o="E11000 duplicate key error collection: Lingo.users index: username_1 dup key";t===r?M("Please provide different email."):t===i?M(`${i} characters.`):t===a?M("Please provide valid Email."):t.includes(o)?M("Please provide unique Username."):M("Please try again as server error occured.")}null!==e&&void 0!==e&&null!==(i=e.error)&&void 0!==i&&i.message||(q("Signing up..."),E(!0),a=`${t}, please check your email to verify your registration.`,o.oR.success(a,{className:"toast-message"}),setTimeout((()=>{q("Sign up"),E(!1),window.location.href="https://volodya1989.github.io/learn-lingo/#/login"}),5e3))}catch(n){console.log("error",n)}var a}));const t=e.name},B=(0,a.useCallback)((e=>{s||W||setTimeout((()=>{U(!0)}),1e3)}),[s,W]);return(0,a.useEffect)((()=>{B()}),[B]),(0,S.jsx)(S.Fragment,{children:F||W?(0,S.jsxs)(l,{children:[(0,S.jsx)(f,{children:F&&W&&(0,S.jsx)(w.A,{})}),(0,S.jsxs)(v._W,{autoClose:6e3,position:"top-right",children:[(0,S.jsx)(o.N9,{}),";"]}),(0,S.jsx)(d,{children:"Registration"}),(0,S.jsx)(p,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),(0,S.jsxs)("form",{onSubmit:t((e=>Z(e))),children:[r.password&&(0,S.jsx)(g,{children:"Password is required."}),r.email&&(0,S.jsx)(g,{children:"Email is required."}),r.name&&(0,S.jsx)(g,{children:"Name is required."}),(0,S.jsxs)(c,{children:[(0,S.jsx)(m,{...e("name",{required:!0,value:T}),onChange:H,name:"name",value:T,autoComplete:"off",type:"text"}),(0,S.jsx)(u,{htmlFor:1,children:"Username"})]}),(0,S.jsxs)(c,{children:[(0,S.jsx)(m,{...e("email",{required:!0,value:z}),onChange:H,name:"email",value:z,autoComplete:"off",type:"text"}),(0,S.jsx)(u,{htmlFor:1,children:"Email"})]}),(0,S.jsxs)(c,{children:[(0,S.jsx)(m,{...e("password",{required:!0,value:k}),sx:{position:"relative"},onChange:H,name:"password",value:k,autoComplete:"off",type:_?"text":"password"}),(0,S.jsx)(h,{onClick:()=>{I(!_)},children:_?(0,S.jsx)(y.Rds,{}):(0,S.jsx)(y.whC,{})}),(0,S.jsx)(u,{htmlFor:1,children:"Password"})]}),(0,S.jsx)(x,{disabled:R,type:"submit",value:F&&W?"Submitting...":$})]})]}):(0,S.jsx)(w.A,{})})}},9791:(e,t,r)=>{r.d(t,{RZ:()=>s,_W:()=>l,rf:()=>n,zy:()=>o});var i=r(1529),a=r(1036);const o=i.DU`
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
`},4916:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(5043);function a(e,t){const[r,a]=(0,i.useState)((()=>{var r;return null!==(r=JSON.parse(window.localStorage.getItem(e)))&&void 0!==r?r:t}));return(0,i.useEffect)((()=>{window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,a]}}}]);
//# sourceMappingURL=253.8cdb8634.chunk.js.map