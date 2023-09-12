var oe=Object.defineProperty;var R=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var T=(f,s,d)=>s in f?oe(f,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):f[s]=d,A=(f,s)=>{for(var d in s||(s={}))se.call(s,d)&&T(f,d,s[d]);if(R)for(var d of R(s))ne.call(s,d)&&T(f,d,s[d]);return f};import{aN as le,C as E,B as C,a0 as O,k as F,E as h,H as k,K as de,O as H,r as u,o as I,l as q,w as r,h as m,t as b,u as e,f as o,i as j,m as J,j as z,P as K,ah as re,I as ie,e as P,x as ue,F as me}from"./vendor.d6cb1ddb.js";import{b as Q,c as W,d as X}from"./main.197caf81.js";const ce={class:"flex justify-between w-full"},pe={class:"px-6 pt-6"},_e={class:"font-medium text-lg text-left"},fe={class:"mt-2 text-sm leading-snug text-gray-500",style:{"max-width":"680px"}},ye=["onSubmit"],ge={class:"p-4 sm:p-6 space-y-4"},ve={class:"z-0 flex justify-end p-4 bg-gray-50 border-modal-bg"},be={setup(f){const s=Q(),d=W(),S=X(),B=le(),{t:D}=E();let c=C(!1);const a=O({id:s.selectedCompany.id,name:null}),$=F(()=>d.active&&d.componentName==="DeleteCompanyModal"),g={formData:{name:{required:h.withMessage(D("validation.required"),k),sameAsName:h.withMessage(D("validation.company_name_not_same"),de(s.selectedCompany.name))}}},_=H(g,{formData:a},{$scope:!1});async function V(){if(_.value.$touch(),_.value.$invalid)return!0;const v=s.companies[0];c.value=!0;try{const y=await s.deleteCompany(a);console.log(y.data.success),y.data.success&&(p(),await s.setSelectedCompany(v),B.push("/admin/dashboard"),await S.setIsAppLoaded(!1),await S.bootstrap()),c.value=!1}catch{c.value=!1}}function x(){a.id=null,a.name="",_.value.$reset()}function p(){d.closeModal(),setTimeout(()=>{x(),_.value.$reset()},300)}return(v,y)=>{const N=u("BaseInput"),U=u("BaseInputGroup"),l=u("BaseButton"),t=u("BaseIcon"),M=u("BaseModal");return I(),q(M,{show:e($),onClose:p},{default:r(()=>[m("div",ce,[m("div",pe,[m("h6",_e,b(e(d).title),1),m("p",fe,b(v.$t("settings.company_info.delete_company_modal_desc",{company:e(s).selectedCompany.name})),1)])]),m("form",{action:"",onSubmit:K(V,["prevent"])},[m("div",ge,[o(U,{label:v.$t("settings.company_info.delete_company_modal_label",{company:e(s).selectedCompany.name}),error:e(_).formData.name.$error&&e(_).formData.name.$errors[0].$message,required:""},{default:r(()=>[o(N,{modelValue:e(a).name,"onUpdate:modelValue":y[0]||(y[0]=i=>e(a).name=i),invalid:e(_).formData.name.$error,onInput:y[1]||(y[1]=i=>e(_).formData.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),m("div",ve,[o(l,{class:"mr-3 text-sm",variant:"primary-outline",outline:"",type:"button",onClick:p},{default:r(()=>[j(b(v.$t("general.cancel")),1)]),_:1}),o(l,{loading:e(c),disabled:e(c),variant:"danger",type:"submit"},{left:r(i=>[e(c)?z("",!0):(I(),q(t,{key:0,name:"TrashIcon",class:J(i.class)},null,8,["class"]))]),default:r(()=>[j(" "+b(v.$t("general.delete")),1)]),_:1},8,["loading","disabled"])])],40,ye)]),_:1},8,["show"])}}},$e=["onSubmit"],Be={key:0,class:"py-5"},Ve={class:"text-lg leading-6 font-medium text-gray-900"},Ce={class:"mt-2 max-w-xl text-sm text-gray-500"},we={class:"mt-5"},De={setup(f){const s=Q(),d=X(),S=W(),{t:B}=E(),D=re("utils");let c=C(!1);const a=O({name:null,logo:null,address:{address_street_1:"",address_street_2:"",website:"",country_id:null,state:"",city:"",phone:"",zip:""}});D.mergeSettings(a,A({},s.selectedCompany));let $=C([]),g=C(null),_=C(null);const V=C(!1);a.logo&&$.value.push({image:a.logo});const x=F(()=>({name:{required:h.withMessage(B("validation.required"),k),minLength:h.withMessage(B("validation.name_min_length"),ie(3))},address:{country_id:{required:h.withMessage(B("validation.required"),k)}}})),p=H(x,F(()=>a));d.fetchCountries();function v(l,t,M,i){_.value=i.name,g.value=t}function y(){g.value=null,V.value=!0}async function N(){if(p.value.$touch(),p.value.$invalid)return!0;if(c.value=!0,(await s.updateCompany(a)).data.data){if(g.value||V.value){let t=new FormData;g.value&&t.append("company_logo",JSON.stringify({name:_.value,data:g.value})),t.append("is_company_logo_removed",V.value),await s.updateCompanyLogo(t),g.value=null,V.value=!1}c.value=!1}c.value=!1}function U(l){S.openModal({title:B("settings.company_info.are_you_absolutely_sure"),componentName:"DeleteCompanyModal",size:"sm"})}return(l,t)=>{const M=u("BaseFileUploader"),i=u("BaseInputGroup"),G=u("BaseInputGrid"),w=u("BaseInput"),Y=u("BaseMultiselect"),L=u("BaseTextarea"),Z=u("BaseIcon"),ee=u("BaseButton"),ae=u("BaseDivider"),te=u("BaseSettingCard");return I(),P(me,null,[m("form",{onSubmit:K(N,["prevent"])},[o(te,{title:l.$t("settings.company_info.company_info"),description:l.$t("settings.company_info.section_description")},{default:r(()=>[o(G,{class:"mt-5"},{default:r(()=>[o(i,{label:l.$tc("settings.company_info.company_logo")},{default:r(()=>[o(M,{modelValue:e($),"onUpdate:modelValue":t[0]||(t[0]=n=>ue($)?$.value=n:$=n),base64:"",onChange:v,onRemove:y},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),o(G,{class:"mt-5"},{default:r(()=>[o(i,{label:l.$tc("settings.company_info.company_name"),error:e(p).name.$error&&e(p).name.$errors[0].$message,required:""},{default:r(()=>[o(w,{modelValue:e(a).name,"onUpdate:modelValue":t[1]||(t[1]=n=>e(a).name=n),invalid:e(p).name.$error,onBlur:t[2]||(t[2]=n=>e(p).name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),o(i,{label:l.$tc("settings.company_info.phone")},{default:r(()=>[o(w,{modelValue:e(a).address.phone,"onUpdate:modelValue":t[3]||(t[3]=n=>e(a).address.phone=n)},null,8,["modelValue"])]),_:1},8,["label"]),o(i,{label:l.$tc("settings.company_info.country"),error:e(p).address.country_id.$error&&e(p).address.country_id.$errors[0].$message,required:""},{default:r(()=>[o(Y,{modelValue:e(a).address.country_id,"onUpdate:modelValue":t[4]||(t[4]=n=>e(a).address.country_id=n),label:"name",invalid:e(p).address.country_id.$error,options:e(d).countries,"value-prop":"id","can-deselect":!0,"can-clear":!1,searchable:"","track-by":"name"},null,8,["modelValue","invalid","options"])]),_:1},8,["label","error"]),o(i,{label:l.$tc("settings.company_info.state")},{default:r(()=>[o(w,{modelValue:e(a).address.state,"onUpdate:modelValue":t[5]||(t[5]=n=>e(a).address.state=n),name:"state",type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),o(i,{label:l.$tc("settings.company_info.city")},{default:r(()=>[o(w,{modelValue:e(a).address.city,"onUpdate:modelValue":t[6]||(t[6]=n=>e(a).address.city=n),type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),o(i,{label:l.$tc("settings.company_info.zip")},{default:r(()=>[o(w,{modelValue:e(a).address.zip,"onUpdate:modelValue":t[7]||(t[7]=n=>e(a).address.zip=n)},null,8,["modelValue"])]),_:1},8,["label"]),m("div",null,[o(i,{label:l.$tc("settings.company_info.address")},{default:r(()=>[o(L,{modelValue:e(a).address.address_street_1,"onUpdate:modelValue":t[8]||(t[8]=n=>e(a).address.address_street_1=n),rows:"2"},null,8,["modelValue"])]),_:1},8,["label"]),o(L,{modelValue:e(a).address.address_street_2,"onUpdate:modelValue":t[9]||(t[9]=n=>e(a).address.address_street_2=n),rows:"2",row:2,class:"mt-2"},null,8,["modelValue"])])]),_:1}),o(ee,{loading:e(c),disabled:e(c),type:"submit",class:"mt-6"},{left:r(n=>[e(c)?z("",!0):(I(),q(Z,{key:0,class:J(n.class),name:"SaveIcon"},null,8,["class"]))]),default:r(()=>[j(" "+b(l.$tc("settings.company_info.save")),1)]),_:1},8,["loading","disabled"]),e(s).companies.length!==1?(I(),P("div",Be,[o(ae,{class:"my-4"}),m("h3",Ve,b(l.$tc("settings.company_info.delete_company")),1),m("div",Ce,[m("p",null,b(l.$tc("settings.company_info.delete_company_description")),1)]),m("div",we,[m("button",{type:"button",class:"inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm",onClick:U},b(l.$tc("general.delete")),1)])])):z("",!0)]),_:1},8,["title","description"])],40,$e),o(be)],64)}}};export{De as default};