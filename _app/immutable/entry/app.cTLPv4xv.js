import{s as q,a as B,o as U,t as j,b as D}from"../chunks/scheduler.DBUx310a.js";import{S as M,i as W,s as z,e as h,c as F,a as E,t as w,b as L,d as g,f as b,g as G,h as H,j as J,k as I,l as d,m as K,n as Q,o as X,p as y,q as v,r as k,u as O,v as R,w as P}from"../chunks/index.oAD1lgKj.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");r=Promise.all(n.map(t=>{if(t=Z(t,i),t in T)return;T[t]=!0;const s=t.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!i)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Y,s||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),s)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return r.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},se={};function $(a){let e,n,i;var r=a[1][0];function c(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=v(r,c(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){y();const l=e;w(l.$$.fragment,1,0,()=>{P(l,1)}),L()}r?(e=v(r,c(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function c(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=v(r,c(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){y();const l=e;w(l.$$.fragment,1,0,()=>{P(l,1)}),L()}r?(e=v(r,c(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&8215&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function c(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=v(r,c(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){y();const l=e;w(l.$$.fragment,1,0,()=>{P(l,1)}),L()}r?(e=v(r,c(t)),t[10](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&16&&(l.data=t[4]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[10](null),e&&P(e,t)}}}function V(a){let e,n=a[6]&&A(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(b),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){E(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&b(e),n&&n.d()}}}function A(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&b(e)}}}function te(a){let e,n,i,r,c;const t=[x,$],s=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=s[e]=t[e](a);let _=a[5]&&V(a);return{c(){n.c(),i=z(),_&&_.c(),r=h()},l(o){n.l(o),i=F(o),_&&_.l(o),r=h()},m(o,u){s[e].m(o,u),E(o,i,u),_&&_.m(o,u),E(o,r,u),c=!0},p(o,[u]){let m=e;e=l(o),e===m?s[e].p(o,u):(y(),w(s[m],1,1,()=>{s[m]=null}),L(),n=s[e],n?n.p(o,u):(n=s[e]=t[e](o),n.c()),g(n,1),n.m(i.parentNode,i)),o[5]?_?_.p(o,u):(_=V(o),_.c(),_.m(r.parentNode,r)):_&&(_.d(1),_=null)},i(o){c||(g(n),c=!0)},o(o){w(n),c=!1},d(o){o&&(b(i),b(r)),s[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:c}=e,{components:t=[]}=e,{form:s}=e,{data_0:l=null}=e,{data_1:_=null}=e;B(i.page.notify);let o=!1,u=!1,m=null;U(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,c,s,l,_,o,u,m,i,r,N,S,C]}class oe extends M{constructor(e){super(),W(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.n3VIvKU8.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>p(()=>import("../nodes/1.xMJ8Q_gF.js"),__vite__mapDeps([4,1,2,5,6,7]),import.meta.url),()=>p(()=>import("../nodes/2.as04w7aA.js"),__vite__mapDeps([8,1,2,9,10,5,6,7,11]),import.meta.url),()=>p(()=>import("../nodes/3.uWd7XKs2.js"),__vite__mapDeps([12,1,2,13,6,11]),import.meta.url),()=>p(()=>import("../nodes/4.3C9_7V0s.js"),__vite__mapDeps([14,1,2,13,6,11]),import.meta.url),()=>p(()=>import("../nodes/5.pkFRtcDY.js"),__vite__mapDeps([15,1,2]),import.meta.url),()=>p(()=>import("../nodes/6.pkFRtcDY.js"),__vite__mapDeps([16,1,2]),import.meta.url),()=>p(()=>import("../nodes/7.Wk9wEmk7.js"),__vite__mapDeps([17,1,2,11,10,9,5,6,7]),import.meta.url),()=>p(()=>import("../nodes/8.nKJQIp-B.js"),__vite__mapDeps([18,1,2,9,7,19]),import.meta.url)],le=[],fe={"/":[2],"/allpost":[3],"/blog":[4],"/docs":[5],"/docs/tutorial":[6],"/download":[7],"/incentive":[8]},ce={handleError:({error:a})=>{console.error(a)}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.n3VIvKU8.js","../chunks/scheduler.DBUx310a.js","../chunks/index.oAD1lgKj.js","../assets/0.81VSmZy5.css","../nodes/1.xMJ8Q_gF.js","../chunks/singletons._TsSL8W7.js","../chunks/index.mM_1ZZOI.js","../chunks/paths.CM9DAFFw.js","../nodes/2.as04w7aA.js","../chunks/index.LA5je-Rz.js","../chunks/Nav.T0lyzMR4.js","../chunks/Footer.EEDtzK4E.js","../nodes/3.uWd7XKs2.js","../chunks/Nav2.AukqgAgw.js","../nodes/4.3C9_7V0s.js","../nodes/5.pkFRtcDY.js","../nodes/6.pkFRtcDY.js","../nodes/7.Wk9wEmk7.js","../nodes/8.nKJQIp-B.js","../assets/8.Kxw6e-Nu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}