"use strict";(self.webpackChunklearn_lingo=self.webpackChunklearn_lingo||[]).push([[732],{9586:(e,l,a)=>{a.r(l),a.d(l,{default:()=>w});var t=a(5043),s=a(3240),i=a(2081),o=a(4916),d=a(5289),n=a(7617),r=a(7933),u=a(8122),c=a(5018),v=a(2995),p=a(1529),g=a(1036);const f=p.DU`
body{
  overflow-y: ${e=>{let{isShowModal:l}=e;return l?"hidden":"scroll"}};
}
`,h=p.Ay.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`,m=p.Ay.div`
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
`,A=(0,p.Ay)(g.N9).attrs({className:".toast-message",toastClassName:"toast",bodyClassName:"body",progressClassName:"progress"})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`;var x=a(579);const w=()=>{const{loading:e}=(0,r.Ay)(),[l,a]=(0,o.A)("teachers",null),[p,w]=(0,o.A)("languages",null),[C,k]=(0,t.useState)(!1),[b,j]=(0,t.useState)((()=>4)),[N,y]=(0,t.useState)(!0),[S,_]=(0,t.useState)(!1),[L,F]=(0,t.useState)(null),[M,E]=(0,o.A)("selectedLanguage","All"),[T,z]=(0,o.A)("selectedLevel","All"),[D,O]=(0,o.A)("selected","All"),[P,U]=(0,o.A)("levelOfLanguage",null),[$,q]=(0,o.A)("price",null),[B,G]=(0,o.A)("filteredTeachers",null),H=(0,t.useCallback)(((e,t,s)=>{const i=null===l||void 0===l?void 0:l.map((e=>e.id===t?{...e,favorites:!s}:e)),o=null===B||void 0===B?void 0:B.map((e=>e.id===t?{...e,favorites:!s}:e));a(i),G(o)}),[G,a,B,l]),I=(0,t.useCallback)((()=>{if(!l)return;let e=null===l||void 0===l?void 0:l.filter((e=>!0===e.favorites));var a,t,s;("All"===M&&(e=null===l||void 0===l?void 0:l.filter((e=>!0===e.favorites))),"All"===T&&(e=null===l||void 0===l?void 0:l.filter((e=>!0===e.favorites))),"All"!==M)&&(e=null===(a=e)||void 0===a?void 0:a.filter((e=>e.languages.includes(M))));"All"!==T&&(e=null===(t=e)||void 0===t?void 0:t.filter((e=>e.levels.includes(T))));"All"!==D&&(e=null===(s=e)||void 0===s?void 0:s.filter((e=>Number(e.price_per_hour)<=Number(D))),e=e.sort(((e,l)=>l.price_per_hour-e.price_per_hour)));const i=e.filter(((e,l)=>l<b));G(i),(null===i||void 0===i?void 0:i.length)+1<=b?y(!1):y(!0)}),[l,M,G,T,D,b]),J=(0,t.useCallback)((e=>{_((e=>!e))}),[_]),K=(0,t.useCallback)(((e,l)=>{F(l),J()}),[F,J]);(0,t.useEffect)((()=>{I()}),[I]);const Q=(0,t.useCallback)((()=>{(null===B||void 0===B?void 0:B.length)<=b&&y(!1),j((e=>e+4))}),[j,null===B||void 0===B?void 0:B.length,b]),R=(0,t.useCallback)((t=>{var s;(e&&k(!1),l||a(i),p)||w([...new Set(null===i||void 0===i||null===(s=i.map((e=>{let{languages:l}=e;return l})))||void 0===s?void 0:s.flat())]);$||q([20,30,40,50]),P||U([...new Set(null===i||void 0===i?void 0:i.map((e=>{let{levels:l}=e;return[...l]})).flat())]),e||setTimeout((()=>{k(!0)}),1e3)}),[e,a,l,p,w,P,U,$,q]);return(0,t.useEffect)((()=>{R()}),[R]),(0,t.useEffect)((()=>{R()}),[R]),(0,x.jsxs)(h,{children:[(0,x.jsxs)(A,{autoClose:2e3,position:"top-right",children:[(0,x.jsx)(g.N9,{}),";"]}),C?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(n.A,{dropdownName:"Language",selectedName:M,handleClick:e=>{E(e)},itemsMap:p,width:"210px"}),(0,x.jsx)(n.A,{dropdownName:"Level of knowledge",selectedName:T,handleClick:e=>{z(e)},itemsMap:P,width:"240px"}),(0,x.jsx)(n.A,{dropdownName:"Price",selectedName:D,handleClick:e=>{O(e)},itemsMap:$,width:"100px"})]}),(0,x.jsx)(f,{isShowModal:S}),(0,x.jsx)(s.A,{onFavoriteChange:H,onClick:K,teachers:B,title:"Favorites",notFound:"No Favorites Added"}),N&&(0,x.jsx)(d.A,{onLoad:Q})]}):(0,x.jsx)(u.A,{}),S&&(0,x.jsx)(c.A,{onClose:J,children:(0,x.jsx)(v.A,{onClose:J,details:L})})]})}}}]);
//# sourceMappingURL=732.633edb19.chunk.js.map