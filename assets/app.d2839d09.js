import{V as o,a2 as p,a3 as i,a4 as u,a5 as c,a6 as l,a7 as f,a8 as d,a9 as m,aa as h,ab as A,ac as g,d as v,u as P,j as w,A as y,ad as C,ae as R,af as _,ag as b}from"./chunks/framework.08bb9a2c.js";import{t as E}from"./chunks/theme.b3d1454e.js";const D={...E};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=r(D),T=v({name:"VitePressApp",setup(){const{site:e}=P();return w(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),C(),R(),_(),s.setup&&s.setup(),()=>b(s.Layout)}});async function j(){const e=S(),a=O();a.provide(i,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:d}),{app:a,router:e,data:t}}function O(){return m(T)}function S(){let e=o,a;return h(t=>{let n=A(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),g(()=>import(n),[])):null},s.NotFound)}o&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{j as createApp};
