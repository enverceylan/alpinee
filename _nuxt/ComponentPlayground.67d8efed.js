import{u as m}from"./asyncData.1a35daf4.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.27e61c8b.js";import f from"./Ellipsis.4d8d5870.js";import _ from"./ComponentPlaygroundData.e955c5fb.js";import"./TabsHeader.6a2a60c1.js";import"./ComponentPlaygroundProps.b92068e2.js";import"./ProseH4.02a0f444.js";import"./ProseCodeInline.6dd49c82.js";import"./Badge.8f9ff7d6.js";import"./MDCSlot.27c26334.js";import"./slot.db409bfe.js";import"./ProseP.749c3473.js";import"./index.6095cfee.js";import"./ComponentPlaygroundSlots.vue.adbafa5e.js";import"./ComponentPlaygroundTokens.vue.3b2c3c59.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-aee2774e"]]);export{V as default};
