"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[812],{9791:(e,l,t)=>{t.d(l,{RZ:()=>s,_W:()=>d,rf:()=>n,zy:()=>o});var a=t(1529),i=t(1036);const o=a.DU`
body{
  overflow-y: ${e=>{let{isShowModal:l}=e;return l?"hidden":"scroll"}};
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
    padding-left: 45px;
  }
  @media screen and (min-width: 1150px) {
    width: 1150px;
  }
`,d=(0,a.Ay)(i.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`},2506:(e,l,t)=>{t.r(l),t.d(l,{default:()=>b});var a=t(5043),i=t(3240),o=t(2081),n=t(4916),s=t(5289),d=t(7617),r=t(7933),c=t(8122),g=t(5018),u=t(2995),p=t(1529),h=t(5475);p.Ay.img`
  positon: relative;
`;const x=p.Ay.div`
  display: block;
  max-width: 600px;
  background-color: #f7f7f7;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding: 30px 60px;
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.07;
    width: 600px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 30px;
    line-height: 1.06;
  }
`,f=p.Ay.h4`
  font-size: 35px;
  line-height: calc(48 / 40);
  font-weight: 400;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`,m=(0,p.Ay)(h.N_)`
  color: black;
  text-decoration: none;
  font-style: italic;
  font-weight: 500;

  max-width: 1250px;

  &:hover {
    color: #f4c550;
  }
`;var v=t(579);const A=()=>(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(x,{children:(0,v.jsxs)(f,{children:["Please ",(0,v.jsx)(m,{to:"/registration",children:"Register"})," or"," ",(0,v.jsx)(m,{to:"/login",children:"Login"})," to use this functionality."]})})});var k=t(9791),w=t(1036),C=t(7614);const b=()=>{const{isLoggedIn:e}=(0,C.A)(),{loading:l}=(0,r.Ay)(),[t,p]=(0,n.A)(e?"teachers":"notLoggedInTeachers",null),[h,x]=(0,n.A)("languages",null),[f,m]=(0,a.useState)(!1),[b,j]=(0,a.useState)((()=>4)),[y,L]=(0,a.useState)(!0),[N,S]=(0,a.useState)(!1),[_,M]=(0,a.useState)(null),[z,F]=(0,a.useState)(!1),[T,E]=(0,a.useState)(!1),[R,B]=(0,n.A)(e?"selectedLanguage":"notLoggedSelectedLanguage","All"),[I,O]=(0,n.A)(e?"selectedLevel":"notloggedSelectedLevel","All"),[P,W]=(0,n.A)("selected","All"),[Z,D]=(0,n.A)(e?"levelOfLanguage":"notloggedLevelOfLanguage",null),[U,$]=(0,n.A)("price",null),[q,G]=(0,n.A)(e?"filteredTeachers":"notLoggedFilteredTeachers",null),H=(0,a.useCallback)(((e,l,a)=>{const i=null===t||void 0===t?void 0:t.map((e=>e.id===l?{...e,favorites:!a}:e)),o=null===q||void 0===q?void 0:q.map((e=>e.id===l?{...e,favorites:!a}:e));p(i),G(o)}),[G,p,q,t]),J=(0,a.useCallback)((()=>{if(!t)return;let e=t;var l,a,i;("All"===R&&(e=t),"All"===I&&(e=t),"All"!==R)&&(e=null===(l=e)||void 0===l?void 0:l.filter((e=>e.languages.includes(R))));"All"!==I&&(e=null===(a=e)||void 0===a?void 0:a.filter((e=>e.levels.includes(I))));"All"!==P&&(e=null===(i=e)||void 0===i?void 0:i.filter((e=>Number(e.price_per_hour)<=Number(P))),e=e.sort(((e,l)=>l.price_per_hour-e.price_per_hour)));const o=e.filter(((e,l)=>l<b));G(o),(null===o||void 0===o?void 0:o.length)+1<=b?L(!1):L(!0)}),[t,R,G,I,P,b]),K=(0,a.useCallback)((e=>{S((e=>!e)),F((e=>!e))}),[S,F]),Q=(0,a.useCallback)((e=>{S((e=>!e)),E((e=>!e))}),[E]),V=(0,a.useCallback)(((e,l)=>{M(l),K()}),[M,K]),X=(0,a.useCallback)(((e,l)=>{M(l),Q()}),[M,Q]);(0,a.useEffect)((()=>{J()}),[J]);const Y=(0,a.useCallback)((()=>{(null===q||void 0===q?void 0:q.length)<=b&&L(!1),j((e=>e+4))}),[j,null===q||void 0===q?void 0:q.length,b]),ee=(0,a.useCallback)((e=>{var a;(l&&m(!1),t||p(o),h)||x([...new Set(null===o||void 0===o||null===(a=o.map((e=>{let{languages:l}=e;return l})))||void 0===a?void 0:a.flat())]);U||$([20,30,40,50]),Z||D([...new Set(null===o||void 0===o?void 0:o.map((e=>{let{levels:l}=e;return[...l]})).flat())]),l||setTimeout((()=>{m(!0)}),1e3)}),[l,p,t,h,x,Z,D,U,$]);return(0,a.useEffect)((()=>{ee()}),[ee]),(0,a.useEffect)((()=>{ee()}),[ee]),(0,v.jsxs)(k.rf,{children:[(0,v.jsxs)(k._W,{autoClose:2e3,position:"top-right",children:[(0,v.jsx)(w.N9,{}),";"]}),f?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(k.RZ,{children:[(0,v.jsx)(d.A,{dropdownName:"Language",selectedName:R,handleClick:e=>{B(e)},itemsMap:h,width:"210px"}),(0,v.jsx)(d.A,{dropdownName:"Level of knowledge",selectedName:I,handleClick:e=>{O(e)},itemsMap:Z,width:"240px"}),(0,v.jsx)(d.A,{dropdownName:"Price",selectedName:P,handleClick:e=>{W(e)},itemsMap:U,width:"100px"})]}),(0,v.jsx)(k.zy,{isShowModal:N}),(0,v.jsx)(i.A,{onFavoriteChange:H,onClick:V,onClickBlockedModal:X,teachers:q,title:"List of Teachers",notFound:"Teachers Not Found"}),y&&(0,v.jsx)(s.A,{onLoad:Y})]}):(0,v.jsx)(c.A,{}),N&&z&&(0,v.jsx)(g.A,{onClose:K,children:(0,v.jsx)(u.A,{onClickBlockedModal:X,onClose:K,details:_})}),N&&T&&(0,v.jsx)(g.A,{onClose:Q,children:(0,v.jsx)(A,{onClose:Q})})]})}}}]);
//# sourceMappingURL=812.0a2f0419.chunk.js.map