import{d as I,e as p,f as V,u as j,g as _,p as q,c as U,h as E,i as b,t as M}from"../chunks/runtime.lX4xhXbU.js";import{j as N,k,l as w,c as v,e as W,f as O,b as g,s as S,a as z,o as F,m as R,h as G,n as H,d as A,p as J,q as P}from"../chunks/disclose-version.okvWzaCt.js";import{o as K}from"../chunks/main-client.cKZVkS0P.js";function Q(a){return class extends X{constructor(e){super({component:a,...e})}}}class X{#e={};#t;constructor(e){this.#t=N(e.component,{target:e.target,props:{...e.props,$$events:this.#e},context:e.context,intro:e.intro,recover:e.recover});for(const t of Object.keys(this.#t))t==="$set"||t==="$destroy"||I(this,t,{get(){return this.#t[t]},set(o){this.#t[t]=o},enumerable:!0})}$set(e){this.#t.$set(e)}$on(e,t){this.#e[e]=this.#e[e]||[];const o=(...i)=>t.call(this,...i);return this.#e[e].push(o),()=>{this.#e[e]=this.#e[e].filter(i=>i!==o)}}$destroy(){this.#t.$destroy()}}const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},x=function(e,t,o){let i=Promise.resolve();if(t&&t.length>0){const c=document.getElementsByTagName("link");i=Promise.all(t.map(r=>{if(r=Z(r,o),r in T)return;T[r]=!0;const d=r.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!o)for(let s=c.length-1;s>=0;s--){const n=c[s];if(n.href===r&&(!d||n.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${h}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":Y,d||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),d)return new Promise((s,n)=>{l.addEventListener("load",s),l.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${r}`)))})}))}return i.then(()=>e()).catch(c=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=c,window.dispatchEvent(r),!r.defaultPrevented)throw c})},ae={};var $=A('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ee=A("<!> <!>",!0);function te(a,e){U(e,!0);let t=p(e,"components",11,()=>[]),o=p(e,"data_0",3,null),i=p(e,"data_1",3,null);V(()=>e.stores.page.set(e.page)),j(()=>{e.stores,e.page,e.constructors,t(),e.form,o(),i(),e.stores.page.notify()});let c=E(!1),r=E(!1),d=E(null);K(()=>{const s=e.stores.page.subscribe(()=>{_(c)&&(b(r,!0),M().then(()=>{b(d,J(document.title||"untitled page"))}))});return b(c,!0),s});var h=F(a,!0,ee),y=g(h),l=S(S(y));k(y,()=>e.constructors[1],s=>{var n=R(s),f=g(n);w(f,()=>e.constructors[0],m=>{P(m(f,{get data(){return o()},children:(u,re)=>{var L=R(u),C=g(L);w(C,()=>e.constructors[1],B=>{P(B(C,{get data(){return i()},get form(){return e.form}}),D=>t()[1]=D)}),v(u,L)}}),u=>t()[0]=u)}),v(s,n)},s=>{var n=R(s),f=g(n);w(f,()=>e.constructors[0],m=>{P(m(f,{get data(){return o()},get form(){return e.form}}),u=>t()[0]=u)}),v(s,n)}),k(l,()=>_(c),s=>{var n=G(s,!0,$),f=z(n);k(f,()=>_(r),m=>{var u=H(m);W(u,()=>_(d)),O(m,u)},null),O(s,n)},null),v(a,h),q()}const ie=Q(te),ce=[()=>x(()=>import("../nodes/0.ReFwrdX0.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>x(()=>import("../nodes/1.1bgJwPc8.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url),()=>x(()=>import("../nodes/2.OjRucEnx.js"),__vite__mapDeps([8,1,2,5,4,9,10]),import.meta.url)],le=[],ue={"/":[2]},de={handleError:({error:a})=>{console.error(a)}};export{ue as dictionary,de as hooks,ae as matchers,ce as nodes,ie as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.ReFwrdX0.js","../chunks/disclose-version.okvWzaCt.js","../chunks/runtime.lX4xhXbU.js","../chunks/entry.1KBMHF-g.js","../chunks/index.K1lkvplB.js","../chunks/store.mXhkphAh.js","../assets/0.ERvLwUQT.css","../nodes/1.1bgJwPc8.js","../nodes/2.OjRucEnx.js","../chunks/main-client.cKZVkS0P.js","../assets/2.5gks_xXy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
