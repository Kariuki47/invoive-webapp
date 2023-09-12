var P=Object.defineProperty;var r=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(y,c,i)=>c in y?P(y,c,{enumerable:!0,configurable:!0,writable:!0,value:i}):y[c]=i,p=(y,c)=>{for(var i in c||(c={}))g.call(c,i)&&u(y,i,c[i]);if(r)for(var i of r(c))w.call(c,i)&&u(y,i,c[i]);return y};import{z as _,A as v,a as o,d as N}from"./vendor.d6cb1ddb.js";import{b as S,h as m,u as h}from"./main.197caf81.js";var f={maxPayableAmount:Number.MAX_SAFE_INTEGER,selectedCustomer:"",currency:null,currency_id:"",customer_id:"",payment_number:"",payment_date:"",amount:0,invoice_id:"",notes:"",payment_method_id:"",customFields:[],fields:[]};const A=(y=!1)=>{const c=y?window.pinia.defineStore:N,{global:i}=window.i18n;return c({id:"payment",state:()=>({payments:[],paymentTotalCount:0,selectAllField:!1,selectedPayments:[],selectedNote:null,showExchangeRate:!1,drivers:[],providers:[],paymentProviders:{id:null,name:"",driver:"",active:!1,settings:{key:"",secret:""}},currentPayment:p({},f),paymentModes:[],currentPaymentMode:{id:"",name:null},isFetchingInitialData:!1}),getters:{isEdit:t=>!!t.paymentProviders.id},actions:{fetchPaymentInitialData(t){const s=S(),n=_();this.isFetchingInitialData=!0;let e=[];t&&(e=[this.fetchPayment(n.params.id)]),Promise.all([this.fetchPaymentModes({limit:"all"}),this.getNextNumber(),...e]).then(async([a,l,d])=>{t?d.data.data.invoice&&(this.currentPayment.maxPayableAmount=parseInt(d.data.data.invoice.due_amount)):!t&&l.data&&(this.currentPayment.payment_date=v().format("YYYY-MM-DD"),this.currentPayment.payment_number=l.data.nextNumber,this.currentPayment.currency=s.selectedCompanyCurrency),this.isFetchingInitialData=!1}).catch(a=>{m(a)})},fetchPayments(t){return new Promise((s,n)=>{o.get("/api/v1/payments",{params:t}).then(e=>{this.payments=e.data.data,this.paymentTotalCount=e.data.meta.payment_total_count,s(e)}).catch(e=>{m(e),n(e)})})},fetchPayment(t){return new Promise((s,n)=>{o.get(`/api/v1/payments/${t}`).then(e=>{Object.assign(this.currentPayment,e.data.data),s(e)}).catch(e=>{m(e),n(e)})})},addPayment(t){return new Promise((s,n)=>{o.post("/api/v1/payments",t).then(e=>{this.payments.push(e.data),h().showNotification({type:"success",message:i.t("payments.created_message")}),s(e)}).catch(e=>{m(e),n(e)})})},updatePayment(t){return new Promise((s,n)=>{o.put(`/api/v1/payments/${t.id}`,t).then(e=>{if(e.data){let a=this.payments.findIndex(d=>d.id===e.data.data.id);this.payments[a]=t.payment,h().showNotification({type:"success",message:i.t("payments.updated_message")})}s(e)}).catch(e=>{m(e),n(e)})})},deletePayment(t){const s=h();return new Promise((n,e)=>{o.post("/api/v1/payments/delete",t).then(a=>{let l=this.payments.findIndex(d=>d.id===t);this.payments.splice(l,1),s.showNotification({type:"success",message:i.t("payments.deleted_message",1)}),n(a)}).catch(a=>{m(a),e(a)})})},deleteMultiplePayments(){const t=h();return new Promise((s,n)=>{o.post("/api/v1/payments/delete",{ids:this.selectedPayments}).then(e=>{this.selectedPayments.forEach(a=>{let l=this.payments.findIndex(d=>d.id===a.id);this.payments.splice(l,1)}),t.showNotification({type:"success",message:i.tc("payments.deleted_message",2)}),s(e)}).catch(e=>{m(e),n(e)})})},setSelectAllState(t){this.selectAllField=t},selectPayment(t){this.selectedPayments=t,this.selectedPayments.length===this.payments.length?this.selectAllField=!0:this.selectAllField=!1},selectAllPayments(){if(this.selectedPayments.length===this.payments.length)this.selectedPayments=[],this.selectAllField=!1;else{let t=this.payments.map(s=>s.id);this.selectedPayments=t,this.selectAllField=!0}},selectNote(t){this.selectedNote=null,this.selectedNote=t},resetSelectedNote(t){this.selectedNote=null},searchPayment(t){return new Promise((s,n)=>{o.get("/api/v1/payments",{params:t}).then(e=>{this.payments=e.data,s(e)}).catch(e=>{m(e),n(e)})})},previewPayment(t){return new Promise((s,n)=>{o.get(`/api/v1/payments/${t.id}/send/preview`,{params:t}).then(e=>{s(e)}).catch(e=>{m(e),n(e)})})},sendEmail(t){return new Promise((s,n)=>{o.post(`/api/v1/payments/${t.id}/send`,t).then(e=>{h().showNotification({type:"success",message:i.t("payments.send_payment_successfully")}),s(e)}).catch(e=>{m(e),n(e)})})},getNextNumber(t,s=!1){return new Promise((n,e)=>{o.get("/api/v1/next-number?key=payment",{params:t}).then(a=>{s&&(this.currentPayment.payment_number=a.data.nextNumber),n(a)}).catch(a=>{m(a),e(a)})})},resetCurrentPayment(){this.currentPayment=p({},f)},fetchPaymentModes(t){return new Promise((s,n)=>{o.get("/api/v1/payment-methods",{params:t}).then(e=>{this.paymentModes=e.data.data,s(e)}).catch(e=>{m(e),n(e)})})},fetchPaymentMode(t){return new Promise((s,n)=>{o.get(`/api/v1/payment-methods/${t}`).then(e=>{this.currentPaymentMode=e.data.data,s(e)}).catch(e=>{m(e),n(e)})})},addPaymentMode(t){const s=h();return new Promise((n,e)=>{o.post("/api/v1/payment-methods",t).then(a=>{this.paymentModes.push(a.data.data),s.showNotification({type:"success",message:i.t("settings.payment_modes.payment_mode_added")}),n(a)}).catch(a=>{m(a),e(a)})})},updatePaymentMode(t){const s=h();return new Promise((n,e)=>{o.put(`/api/v1/payment-methods/${t.id}`,t).then(a=>{if(a.data){let l=this.paymentModes.findIndex(d=>d.id===a.data.data.id);this.paymentModes[l]=t.paymentModes,s.showNotification({type:"success",message:i.t("settings.payment_modes.payment_mode_updated")})}n(a)}).catch(a=>{m(a),e(a)})})},deletePaymentMode(t){const s=h();return new Promise((n,e)=>{o.delete(`/api/v1/payment-methods/${t}`).then(a=>{let l=this.paymentModes.findIndex(d=>d.id===t);this.paymentModes.splice(l,1),a.data.success&&s.showNotification({type:"success",message:i.t("settings.payment_modes.deleted_message")}),n(a)}).catch(a=>{m(a),e(a)})})}}})()};export{A as u};