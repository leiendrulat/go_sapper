import{S as t,i as e,s,e as l,t as o,c as r,b as n,g as a,d as h,h as c,k as f,l as i,m as g,a as u,q as p,f as b,n as d,o as m}from"./client.93ef7bc5.js";function v(t,e,s){const l=t.slice();return l[1]=e[s],l}function E(t){let e,s,u,p,b=t[1].title+"";return{c(){e=l("li"),s=l("a"),u=o(b),this.h()},l(t){e=r(t,"LI",{});var l=n(e);s=r(l,"A",{rel:!0,href:!0});var o=n(s);u=a(o,b),o.forEach(h),l.forEach(h),this.h()},h(){c(s,"rel","prefetch"),c(s,"href",p="blogs/"+t[1].slug)},m(t,l){f(t,e,l),i(e,s),i(s,u)},p(t,e){1&e&&b!==(b=t[1].title+"")&&g(u,b),1&e&&p!==(p="blogs/"+t[1].slug)&&c(s,"href",p)},d(t){t&&h(e)}}}function j(t){let e,s,g,j,x,q=t[0],L=[];for(let e=0;e<q.length;e+=1)L[e]=E(v(t,q,e));return{c(){e=u(),s=l("h1"),g=o("Recent posts"),j=u(),x=l("ul");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){p('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),e=b(t),s=r(t,"H1",{});var l=n(s);g=a(l,"Recent posts"),l.forEach(h),j=b(t),x=r(t,"UL",{class:!0});var o=n(x);for(let t=0;t<L.length;t+=1)L[t].l(o);o.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,l){f(t,e,l),f(t,s,l),i(s,g),f(t,j,l),f(t,x,l);for(let t=0;t<L.length;t+=1)L[t].m(x,null)},p(t,[e]){if(1&e){let s;for(q=t[0],s=0;s<q.length;s+=1){const l=v(t,q,s);L[s]?L[s].p(l,e):(L[s]=E(l),L[s].c(),L[s].m(x,null))}for(;s<L.length;s+=1)L[s].d(1);L.length=q.length}},i:d,o:d,d(t){t&&h(e),t&&h(s),t&&h(j),t&&h(x),m(L,t)}}}function x({params:t,query:e}){return this.fetch("blogs.json").then(t=>t.json()).then(t=>({blogs:t}))}function q(t,e,s){let{blogs:l}=e;return t.$set=t=>{"blogs"in t&&s(0,l=t.blogs)},[l]}export default class extends t{constructor(t){super(),e(this,t,q,j,s,{blogs:0})}}export{x as preload};
