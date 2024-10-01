"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[438],{9791:(e,l,a)=>{a.d(l,{RZ:()=>n,_W:()=>d,rf:()=>o,zy:()=>i});var s=a(1529),t=a(1036);const i=s.DU`
body{
  overflow-y: ${e=>{let{isShowModal:l}=e;return l?"hidden":"scroll"}};
}
`,o=s.Ay.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`,n=s.Ay.div`
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
`,d=(0,s.Ay)(t.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`},2488:(e,l,a)=>{a.r(l),a.d(l,{default:()=>f});var s=a(5043),t=a(3240),i=a(2081),o=a(4916),n=a(5289),d=a(7617),r=a(7933),u=a(8122),c=a(5018),p=a(2995),g=a(9791),h=a(1036),v=a(579);const f=()=>{const{loading:e}=(0,r.Ay)(),[l,a]=(0,o.A)("teachers",null),[f,m]=(0,o.A)("languages",null),[x,A]=(0,s.useState)(!1),[w,C]=(0,s.useState)((()=>4)),[k,b]=(0,s.useState)(!0),[j,N]=(0,s.useState)(!1),[y,_]=(0,s.useState)(null),[S,L]=(0,o.A)("selectedLanguage","All"),[M,F]=(0,o.A)("selectedLevel","All"),[T,z]=(0,o.A)("selected","All"),[E,R]=(0,o.A)("levelOfLanguage",null),[W,Z]=(0,o.A)("price",null),[D,O]=(0,o.A)("filteredTeachers",null),P=(0,s.useCallback)(((e,s,t)=>{const i=null===l||void 0===l?void 0:l.map((e=>e.id===s?{...e,favorites:!t}:e)),o=null===D||void 0===D?void 0:D.map((e=>e.id===s?{...e,favorites:!t}:e));a(i),O(o)}),[O,a,D,l]),U=(0,s.useCallback)((()=>{if(!l)return;let e=l;var a,s,t;("All"===S&&(e=l),"All"===M&&(e=l),"All"!==S)&&(e=null===(a=e)||void 0===a?void 0:a.filter((e=>e.languages.includes(S))));"All"!==M&&(e=null===(s=e)||void 0===s?void 0:s.filter((e=>e.levels.includes(M))));"All"!==T&&(e=null===(t=e)||void 0===t?void 0:t.filter((e=>Number(e.price_per_hour)<=Number(T))),e=e.sort(((e,l)=>l.price_per_hour-e.price_per_hour)));const i=e.filter(((e,l)=>l<w));O(i),(null===i||void 0===i?void 0:i.length)+1<=w?b(!1):b(!0)}),[l,S,O,M,T,w]),$=(0,s.useCallback)((e=>{N((e=>!e))}),[N]),q=(0,s.useCallback)(((e,l)=>{_(l),$()}),[_,$]);(0,s.useEffect)((()=>{U()}),[U]);const B=(0,s.useCallback)((()=>{(null===D||void 0===D?void 0:D.length)<=w&&b(!1),C((e=>e+4))}),[C,null===D||void 0===D?void 0:D.length,w]),G=(0,s.useCallback)((s=>{var t;(e&&A(!1),l||a(i),f)||m([...new Set(null===i||void 0===i||null===(t=i.map((e=>{let{languages:l}=e;return l})))||void 0===t?void 0:t.flat())]);W||Z([20,30,40,50]),E||R([...new Set(null===i||void 0===i?void 0:i.map((e=>{let{levels:l}=e;return[...l]})).flat())]),e||setTimeout((()=>{A(!0)}),1e3)}),[e,a,l,f,m,E,R,W,Z]);return(0,s.useEffect)((()=>{G()}),[G]),(0,s.useEffect)((()=>{G()}),[G]),(0,v.jsxs)(g.rf,{children:[(0,v.jsxs)(g._W,{autoClose:2e3,position:"top-right",children:[(0,v.jsx)(h.N9,{}),";"]}),x?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(g.RZ,{children:[(0,v.jsx)(d.A,{dropdownName:"Language",selectedName:S,handleClick:e=>{L(e)},itemsMap:f,width:"210px"}),(0,v.jsx)(d.A,{dropdownName:"Level of knowledge",selectedName:M,handleClick:e=>{F(e)},itemsMap:E,width:"240px"}),(0,v.jsx)(d.A,{dropdownName:"Price",selectedName:T,handleClick:e=>{z(e)},itemsMap:W,width:"100px"})]}),(0,v.jsx)(g.zy,{isShowModal:j}),(0,v.jsx)(t.A,{onFavoriteChange:P,onClick:q,teachers:D,title:"List of Teachers",notFound:"Teachers Not Found"}),k&&(0,v.jsx)(n.A,{onLoad:B})]}):(0,v.jsx)(u.A,{}),j&&(0,v.jsx)(c.A,{onClose:$,children:(0,v.jsx)(p.A,{onClose:$,details:y})})]})}}}]);
//# sourceMappingURL=438.31731a0f.chunk.js.map