import{O as r}from"./vendor.d6cb1ddb.js";var d={name:"ValidateEach",props:{rules:{type:Object,required:!0},state:{type:Object,required:!0},options:{type:Object,default:()=>({})}},setup(e,{slots:t}){const a=r(e.rules,e.state,e.options);return()=>t.default({v:a.value})}};export{d as V};