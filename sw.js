if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};n[t]=Promise.all(s.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index-D5FGU6wn.css",revision:null},{url:"index.html",revision:null},{url:"index.js",revision:null},{url:"registerSW.js",revision:null},{url:"manifest.webmanifest",revision:"16bbde2983a014645e428042c4ba8a91"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));