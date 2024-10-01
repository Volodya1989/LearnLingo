"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[732],{9586:(e,l,a)=>{a.r(l),a.d(l,{default:()=>C});var t=a(5043),s=a(3240),i=a(2081),o=a(4916),n=a(5289),d=a(7617),r=a(7933),u=a(8122),c=a(5018),v=a(2995),g=a(1529),p=a(1036);const h=g.DU`
body{
  overflow-y: ${e=>{let{isShowModal:l}=e;return l?"hidden":"scroll"}};
}
`,f=g.Ay.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`,m=g.Ay.div`
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
    width: 100%;
  }
`,A=(0,g.Ay)(p.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`;var x=a(7614),w=a(579);const C=()=>{const{isLoggedIn:e}=(0,x.A)(),{loading:l}=(0,r.Ay)(),[a,g]=(0,o.A)(e?"teachers":"notLoggedInTeachers",null),[C,k]=(0,o.A)("languages",null),[b,j]=(0,t.useState)(!1),[N,y]=(0,t.useState)((()=>4)),[S,L]=(0,t.useState)(!0),[_,F]=(0,t.useState)(!1),[M,E]=(0,t.useState)(null),[T,I]=(0,o.A)("selectedLanguage","All"),[z,D]=(0,o.A)("selectedLevel","All"),[O,P]=(0,o.A)("selected","All"),[U,$]=(0,o.A)("levelOfLanguage",null),[q,B]=(0,o.A)("price",null),[G,H]=(0,o.A)("filteredTeachers",null),J=(0,t.useCallback)(((e,l,t)=>{const s=null===a||void 0===a?void 0:a.map((e=>e.id===l?{...e,favorites:!t}:e)),i=null===G||void 0===G?void 0:G.map((e=>e.id===l?{...e,favorites:!t}:e));g(s),H(i)}),[H,g,G,a]),K=(0,t.useCallback)((()=>{if(!a)return;let e=null===a||void 0===a?void 0:a.filter((e=>!0===e.favorites));var l,t,s;("All"===T&&(e=null===a||void 0===a?void 0:a.filter((e=>!0===e.favorites))),"All"===z&&(e=null===a||void 0===a?void 0:a.filter((e=>!0===e.favorites))),"All"!==T)&&(e=null===(l=e)||void 0===l?void 0:l.filter((e=>e.languages.includes(T))));"All"!==z&&(e=null===(t=e)||void 0===t?void 0:t.filter((e=>e.levels.includes(z))));"All"!==O&&(e=null===(s=e)||void 0===s?void 0:s.filter((e=>Number(e.price_per_hour)<=Number(O))),e=e.sort(((e,l)=>l.price_per_hour-e.price_per_hour)));const i=e.filter(((e,l)=>l<N));H(i),(null===i||void 0===i?void 0:i.length)+1<=N?L(!1):L(!0)}),[a,T,H,z,O,N]),Q=(0,t.useCallback)((e=>{F((e=>!e))}),[F]),R=(0,t.useCallback)(((e,l)=>{E(l),Q()}),[E,Q]);(0,t.useEffect)((()=>{K()}),[K]);const V=(0,t.useCallback)((()=>{(null===G||void 0===G?void 0:G.length)<=N&&L(!1),y((e=>e+4))}),[y,null===G||void 0===G?void 0:G.length,N]),W=(0,t.useCallback)((e=>{var t;(l&&j(!1),a||g(i),C)||k([...new Set(null===i||void 0===i||null===(t=i.map((e=>{let{languages:l}=e;return l})))||void 0===t?void 0:t.flat())]);q||B([20,30,40,50]),U||$([...new Set(null===i||void 0===i?void 0:i.map((e=>{let{levels:l}=e;return[...l]})).flat())]),l||setTimeout((()=>{j(!0)}),1e3)}),[l,g,a,C,k,U,$,q,B]);return(0,t.useEffect)((()=>{W()}),[W]),(0,t.useEffect)((()=>{W()}),[W]),(0,w.jsxs)(f,{children:[(0,w.jsxs)(A,{autoClose:2e3,position:"top-right",children:[(0,w.jsx)(p.N9,{}),";"]}),b?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(d.A,{dropdownName:"Language",selectedName:T,handleClick:e=>{I(e)},itemsMap:C,width:"210px"}),(0,w.jsx)(d.A,{dropdownName:"Level of knowledge",selectedName:z,handleClick:e=>{D(e)},itemsMap:U,width:"240px"}),(0,w.jsx)(d.A,{dropdownName:"Price",selectedName:O,handleClick:e=>{P(e)},itemsMap:q,width:"100px"})]}),(0,w.jsx)(h,{isShowModal:_}),(0,w.jsx)(s.A,{onFavoriteChange:J,onClick:R,teachers:G,title:"Favorites",notFound:"No Favorites Added"}),S&&(0,w.jsx)(n.A,{onLoad:V})]}):(0,w.jsx)(u.A,{}),_&&(0,w.jsx)(c.A,{onClose:Q,children:(0,w.jsx)(v.A,{onClose:Q,details:M})})]})}}}]);
//# sourceMappingURL=732.f30f1d38.chunk.js.map