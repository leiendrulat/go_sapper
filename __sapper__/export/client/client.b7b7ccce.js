function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function g(){return d("")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function y(t){return v(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function E(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function x(t){S=t}function w(){if(!S)throw new Error("Function called outside component initialization");return S}const A=[],P=[],R=[],L=[],j=Promise.resolve();let C=!1;function N(t){R.push(t)}let O=!1;const q=new Set;function U(){if(!O){O=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];x(e),k(e.$$)}for(A.length=0;P.length;)P.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];q.has(e)||(q.add(e),e())}R.length=0}while(A.length);for(;L.length;)L.pop()();C=!1,O=!1,q.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const I=new Set;let D;function H(){D={r:0,c:[],p:D}}function T(){D.r||o(D.c),D=D.p}function B(t,e){t&&t.i&&(I.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),D.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function V(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function K(t){return"object"==typeof t&&null!==t?t:{}}function M(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function z(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),N(()=>{const e=c.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(N)}function F(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(A.push(t),C||(C=!0,j.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,s,a,c,l,i=[-1]){const f=S;x(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:i};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&G(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&B(e.$$.fragment),z(e,n.target,n.anchor),U()}x(f)}class X{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Q=[];function Z(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!Q.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Q.push(n,e)}if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const l=[a,c];return o.push(l),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const tt={},et=()=>({});function nt(e){let n,r,o,s,a,c,f,g,_,E,S,x,w,A,P,R,L,j,C,N,O;return{c(){n=p("nav"),r=p("ul"),o=p("li"),s=p("a"),a=d("home"),f=h(),g=p("li"),_=p("a"),E=d("about"),x=h(),w=p("li"),A=p("a"),P=d("blog"),L=h(),j=p("li"),C=p("a"),N=d("blogs"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=$(n);r=b(e,"UL",{class:!0});var c=$(r);o=b(c,"LI",{class:!0});var l=$(o);s=b(l,"A",{"aria-current":!0,href:!0,class:!0});var i=$(s);a=v(i,"home"),i.forEach(u),l.forEach(u),f=y(c),g=b(c,"LI",{class:!0});var p=$(g);_=b(p,"A",{"aria-current":!0,href:!0,class:!0});var d=$(_);E=v(d,"about"),d.forEach(u),p.forEach(u),x=y(c),w=b(c,"LI",{class:!0});var h=$(w);A=b(h,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var m=$(A);P=v(m,"blog"),m.forEach(u),h.forEach(u),L=y(c),j=b(c,"LI",{class:!0});var S=$(j);C=b(S,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var R=$(C);N=v(R,"blogs"),R.forEach(u),S.forEach(u),c.forEach(u),e.forEach(u),this.h()},h(){m(s,"aria-current",c=void 0===e[0]?"page":void 0),m(s,"href","."),m(s,"class","svelte-1dbd5up"),m(o,"class","svelte-1dbd5up"),m(_,"aria-current",S="about"===e[0]?"page":void 0),m(_,"href","about"),m(_,"class","svelte-1dbd5up"),m(g,"class","svelte-1dbd5up"),m(A,"rel","prefetch"),m(A,"aria-current",R="blog"===e[0]?"page":void 0),m(A,"href","blog"),m(A,"class","svelte-1dbd5up"),m(w,"class","svelte-1dbd5up"),m(C,"rel","prefetch"),m(C,"aria-current",O="blogs"===e[0]?"page":void 0),m(C,"href","blogs"),m(C,"class","svelte-1dbd5up"),m(j,"class","svelte-1dbd5up"),m(r,"class","svelte-1dbd5up"),m(n,"class","svelte-1dbd5up")},m(t,e){i(t,n,e),l(n,r),l(r,o),l(o,s),l(s,a),l(r,f),l(r,g),l(g,_),l(_,E),l(r,x),l(r,w),l(w,A),l(A,P),l(r,L),l(r,j),l(j,C),l(C,N)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&m(s,"aria-current",c),1&e&&S!==(S="about"===t[0]?"page":void 0)&&m(_,"aria-current",S),1&e&&R!==(R="blog"===t[0]?"page":void 0)&&m(A,"aria-current",R),1&e&&O!==(O="blogs"===t[0]?"page":void 0)&&m(C,"aria-current",O)},i:t,o:t,d(t){t&&u(n)}}}function rt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ot extends X{constructor(t){super(),W(this,t,rt,nt,a,{segment:0})}}function st(t){let e,n,r;const o=new ot({props:{segment:t[0]}}),s=t[2].default,a=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){M(o.$$.fragment),e=h(),n=p("main"),a&&a.c(),this.h()},l(t){Y(o.$$.fragment,t),e=y(t),n=b(t,"MAIN",{class:!0});var r=$(n);a&&a.l(r),r.forEach(u),this.h()},h(){m(n,"class","svelte-1uhnsl8")},m(t,s){z(o,t,s),i(t,e,s),i(t,n,s),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),a&&a.p&&2&e&&a.p(c(s,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(s,t[1],e,null))},i(t){r||(B(o.$$.fragment,t),B(a,t),r=!0)},o(t){J(o.$$.fragment,t),J(a,t),r=!1},d(t){F(o,t),t&&u(e),t&&u(n),a&&a.d(t)}}}function at(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class ct extends X{constructor(t){super(),W(this,t,at,st,a,{segment:0})}}function lt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=b(t,"PRE",{});var o=$(e);n=v(o,r),o.forEach(u)},m(t,r){i(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&u(e)}}}function it(e){let n,r,o,s,a,c,f,S,x,w=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&lt(e);return{c(){r=h(),o=p("h1"),s=d(e[0]),a=h(),c=p("p"),f=d(w),S=h(),A&&A.c(),x=g(),this.h()},l(t){E('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=y(t),o=b(t,"H1",{class:!0});var n=$(o);s=v(n,e[0]),n.forEach(u),a=y(t),c=b(t,"P",{class:!0});var l=$(c);f=v(l,w),l.forEach(u),S=y(t),A&&A.l(t),x=g(),this.h()},h(){m(o,"class","svelte-8od9u6"),m(c,"class","svelte-8od9u6")},m(t,e){i(t,r,e),i(t,o,e),l(o,s),i(t,a,e),i(t,c,e),l(c,f),i(t,S,e),A&&A.m(t,e),i(t,x,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(s,t[0]),2&e&&w!==(w=t[1].message+"")&&_(f,w),t[2]&&t[1].stack?A?A.p(t,e):(A=lt(t),A.c(),A.m(x.parentNode,x)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&u(r),t&&u(o),t&&u(a),t&&u(c),t&&u(S),A&&A.d(t),t&&u(x)}}}function ut(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class ft extends X{constructor(t){super(),W(this,t,ut,it,a,{status:0,error:1})}}function pt(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&M(c.$$.fragment),n=g()},l(t){c&&Y(c.$$.fragment,t),n=g()},m(t,e){c&&z(c,t,e),i(t,n,e),r=!0},p(t,e){const r=16&e?V(o,[K(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){H();const t=c;J(t.$$.fragment,1,0,()=>{F(t,1)}),T()}s?(M((c=new s(a())).$$.fragment),B(c.$$.fragment,1),z(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&B(c.$$.fragment,t),r=!0)},o(t){c&&J(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&F(c,t)}}}function dt(t){let e;const n=new ft({props:{error:t[0],status:t[1]}});return{c(){M(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,r){z(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){F(n,t)}}}function ht(t){let e,n,r,o;const s=[dt,pt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),i(t,r,n),o=!0},p(t,o){let l=e;e=c(t),e===l?a[e].p(t,o):(H(),J(a[l],1,1,()=>{a[l]=null}),T(),n=a[e],n||(n=a[e]=s[e](t),n.c()),B(n,1),n.m(r.parentNode,r))},i(t){o||(B(n),o=!0)},o(t){J(n),o=!1},d(t){a[e].d(t),t&&u(r)}}}function gt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ht]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new ct({props:o});return{c(){M(s.$$.fragment)},l(t){Y(s.$$.fragment,t)},m(t,e){z(s,t,e),n=!0},p(t,[e]){const n=12&e?V(r,[4&e&&{segment:t[2][0]},8&e&&K(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(B(s.$$.fragment,t),n=!0)},o(t){J(s.$$.fragment,t),n=!1},d(t){F(s,t)}}}function mt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,p;return u=i,w().$$.after_update.push(u),f=tt,p=r,w().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[o,s,a,c,l,r,i]}class $t extends X{constructor(t){super(),W(this,t,mt,gt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const bt=[/^\/blogs\.json$/,/^\/blogs\/([^\/]+?)\.json$/,/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],vt=[{js:()=>import("./index.28c4cbd6.js"),css:[]},{js:()=>import("./index.78c9fb6c.js"),css:[]},{js:()=>import("./about.fdd1a618.js"),css:[]},{js:()=>import("./index.c8691fbb.js"),css:[]},{js:()=>import("./[slug].7d42806a.js"),css:[]},{js:()=>import("./index.a7cbb631.js"),css:[]},{js:()=>import("./[slug].f5e9cfb5.js"),css:[]}],yt=(_t=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/route1\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blogs\/?$/,parts:[{i:3}]},{pattern:/^\/blogs\/([^\/]+?)\/?$/,parts:[null,{i:4,params:t=>({slug:_t(t[1])})}]},{pattern:/^\/blog\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:6,params:t=>({slug:_t(t[1])})}]}]);var _t;const Et="undefined"!=typeof __SAPPER__&&__SAPPER__;let St,xt,wt,At=!1,Pt=[],Rt="{}";const Lt={page:function(t){const e=Z(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:Z(null),session:Z(Et&&Et.session)};let jt,Ct;Lt.session.subscribe(async t=>{if(jt=t,!At)return;Ct=!0;const e=Ht(new URL(location.href)),n=xt={},{redirect:r,props:o,branch:s}=await Vt(e);n===xt&&await Jt(r,s,o,e.page)});let Nt,Ot=null;let qt,Ut=1;const kt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},It={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Et.baseUrl))return null;let e=t.pathname.slice(Et.baseUrl.length);if(""===e&&(e="/"),!bt.some(t=>t.test(e)))for(let n=0;n<yt.length;n+=1){const r=yt[n],o=r.pattern.exec(e);if(o){const n=Dt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Tt(){return{x:pageXOffset,y:pageYOffset}}async function Bt(t,e,n,r){if(e)qt=e;else{const t=Tt();It[qt]=t,e=qt=++Ut,It[qt]=n?t:{x:0,y:0}}qt=e,St&&Lt.preloading.set(!0);const o=Ot&&Ot.href===t.href?Ot.promise:Vt(t);Ot=null;const s=xt={},{redirect:a,props:c,branch:l}=await o;if(s===xt&&(await Jt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=It[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}It[qt]=t,t&&scrollTo(t.x,t.y)}}async function Jt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ht(new URL(t,document.baseURI));return n?(kt[e.replaceState?"replaceState":"pushState"]({id:qt},"",t),Bt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Lt.page.set(r),Lt.preloading.set(!1),St)St.$set(n);else{n.stores={page:{subscribe:Lt.page.subscribe},preloading:{subscribe:Lt.preloading.subscribe},session:Lt.session},n.level0={props:await wt},n.notify=Lt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Mt(t.nextSibling);Mt(t),Mt(e)}St=new $t({target:Nt,props:n,hydrate:!0})}Pt=e,Rt=JSON.stringify(r.query),At=!0,Ct=!1}async function Vt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;wt||(wt=Et.preloaded[0]||et.call(a,{host:n.host,path:n.path,query:n.query,params:{}},jt));let l=1;try{const o=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Rt)return!0;const o=Pt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,i,o)&&(u=!0),s.segments[l]=r[c+1],!e)return{segment:f};const p=l++;if(!Ct&&!u&&Pt[c]&&Pt[c].part===e.i)return Pt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Kt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(vt[e.i]);let g;return g=At||!Et.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},jt):{}:Et.preloaded[c+1],s["level"+p]={component:d,props:g,segment:f,match:i,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Kt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Mt(t){t.parentNode.removeChild(t)}function Yt(t){const e=Ht(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Vt(e)),Ot.promise}let zt;function Ft(t){clearTimeout(zt),zt=setTimeout(()=>{Gt(t)},20)}function Gt(t){const e=Xt(t.target);e&&"prefetch"===e.rel&&Yt(e.href)}function Wt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Xt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ht(o);if(s){Bt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),kt.pushState({id:qt},"",o.href)}}function Xt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Qt(t){if(It[qt]=Tt(),t.state){const e=Ht(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else Ut=Ut+1,function(t){qt=t}(Ut),kt.replaceState({id:qt},"",location.href)}var Zt;Zt={target:document.querySelector("#sapper")},"scrollRestoration"in kt&&(kt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{kt.scrollRestoration="auto"}),addEventListener("load",()=>{kt.scrollRestoration="manual"}),function(t){Nt=t}(Zt.target),addEventListener("click",Wt),addEventListener("popstate",Qt),addEventListener("touchstart",Gt),addEventListener("mousemove",Ft),Promise.resolve().then(()=>{const{hash:t,href:e}=location;kt.replaceState({id:Ut},"",e);const n=new URL(location.href);if(Et.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Et;wt||(wt=s&&s[0]),Jt(null,[],{error:c,status:a,session:o,level0:{props:wt},level1:{props:{status:a,error:c},component:ft},segments:s},{host:e,path:n,query:Dt(r),params:{}})}();const r=Ht(n);return r?Bt(r,Ut,!0,t):void 0});export{X as S,h as a,b,y as c,u as d,p as e,$ as f,v as g,m as h,W as i,i as j,l as k,_ as l,f as m,t as n,E as q,a as s,d as t};
