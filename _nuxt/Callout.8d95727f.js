import"./MDCSlot.27c26334.js";import{d as m,r as o,b as p,c as f,e as t,g as v,n,M as l,ap as g,aq as h,a6 as y,k as C}from"./entry.27e61c8b.js";import{r as c}from"./slot.db409bfe.js";const V={class:"summary"},k={class:"content"},w=m({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>o(!1)}},emits:["update:modelValue"],setup(s,{emit:r}){const i=s,u=r,e=o(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(a,b)=>{const _=y;return p(),f("div",{class:n(["callout",[s.type]])},[t("span",{class:"preview",onClick:d},[t("span",V,[c(a.$slots,"summary",{},void 0,!0)]),v(_,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),g(t("div",k,[c(a.$slots,"content",{},void 0,!0)],512),[[h,l(e)]])],2)}}});const q=C(w,[["__scopeId","data-v-c550c7db"]]);export{q as default};
