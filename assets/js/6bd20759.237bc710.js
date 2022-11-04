"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},c="Nominal Time Facet",i={unversionedId:"spec/facets/run-facets/nominal_time",id:"spec/facets/run-facets/nominal_time",title:"Nominal Time Facet",description:"The facet to describe the nominal start and end time of the run. The nominal usually means the time the job run was expected to run (like a scheduled time), and the actual time can be different.",source:"@site/docs/spec/facets/run-facets/nominal_time.md",sourceDirName:"spec/facets/run-facets",slug:"/spec/facets/run-facets/nominal_time",permalink:"/docs/spec/facets/run-facets/nominal_time",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/facets/run-facets/nominal_time.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"External Query Facet",permalink:"/docs/spec/facets/run-facets/external_query"},next:{title:"Parent Run Facet",permalink:"/docs/spec/facets/run-facets/parent_run"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nominal-time-facet"},"Nominal Time Facet"),(0,a.kt)("p",null,"The facet to describe the nominal start and end time of the run. The nominal usually means the time the job run was expected to run (like a scheduled time), and the actual time can be different."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"sql": {\n    "_producer": "https://some.producer.com/version/1.0",\n    "_schemaURL": "https://github.com/OpenLineage/OpenLineage/blob/main/spec/facets/SQLJobFacet.json",\n    "nominalStartTime": "2020-12-17T03:00:00.000Z",\n    "nominalEndTime": "2020-12-17T03:05:00.000Z"\n}\n')),(0,a.kt)("p",null,"The facet specification can be found ",(0,a.kt)("a",{parentName:"p",href:"https://openlineage.io/spec/facets/1-0-0/NominalTimeRunFacet.json"},"here")))}u.isMDXComponent=!0}}]);