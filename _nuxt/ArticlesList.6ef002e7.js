import v from"./ArticlesListItem.ffd90167.js";import b from"./ProseA.62437204.js";import k from"./ProseCodeInline.6dd49c82.js";import{u as w}from"./asyncData.1a35daf4.js";import{d as g,Y as A,I,M as c,b as a,c as r,e as o,g as i,F as S,Z as C,D as e,w as d,p as L,i as B,q as N,$ as V,X as q,k as D}from"./entry.27e61c8b.js";import"./date.824a539b.js";const F=t=>(L("data-v-0b453d9b"),t=t(),B(),t),P={key:0,class:"articles-list"},T={class:"featured"},Y={class:"layout"},E={key:1,class:"tour"},M=F(()=>o("p",null,"Seems like there are no articles yet.",-1)),X=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,_;const u=t,{data:m}=([s,_]=A(async()=>w("articles",async()=>await N(V(u.path)).sort({date:-1}).find())),s=await s,_(),s),n=I(()=>m.value||[]);return(Z,$)=>{var p;const l=v,f=b,h=k;return(p=c(n))!=null&&p.length?(a(),r("div",P,[o("div",T,[i(l,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",Y,[(a(!0),r(S,null,C(c(n).slice(1),(y,x)=>(a(),q(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",E,[M,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}});const O=D(X,[["__scopeId","data-v-0b453d9b"]]);export{O as default};
