"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Developing With OpenLineage",l={unversionedId:"development/developing/developing",id:"development/developing/developing",title:"Developing With OpenLineage",description:"As there are hundreds and possibly thousands databases, query engines and other tools you could use to process, create and move data, there's great chance that existing OpenLineage integration won't cover your needs.",source:"@site/docs/development/developing/developing.md",sourceDirName:"development/developing",slug:"/development/developing/",permalink:"/docs/development/developing/",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/development/developing/developing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Great Expectations",permalink:"/docs/integrations/great-expectations"},next:{title:"Setup a development environment",permalink:"/docs/development/developing/python/setup"}},p={},s=[{value:"Clients",id:"clients",level:3},{value:"Common Library (Python)",id:"common-library-python",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"SQL parser",id:"sql-parser",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developing-with-openlineage"},"Developing With OpenLineage"),(0,a.kt)("p",null,"As there are hundreds and possibly thousands databases, query engines and other tools you could use to process, create and move data, there's great chance that existing OpenLineage integration won't cover your needs."),(0,a.kt)("p",null,"However, OpenLineage project also provides libraries you could use to write your own integration. "),(0,a.kt)("h3",{id:"clients"},"Clients"),(0,a.kt)("p",null,"For ",(0,a.kt)("a",{parentName:"p",href:"/docs/client/python"},"Python")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/client/java"},"Java"),", we've created clients that you can use to properly create and emit OpenLineage events to HTTP, Kafka, and other consumers."),(0,a.kt)("h3",{id:"common-library-python"},"Common Library (Python)"),(0,a.kt)("p",null,"Getting lineage from systems like BigQuery or Redshift isn't necessarily tied to orchestrator or processing engine you're using. For this reason, we've extracted\nthat functionality from our Airflow library and ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/openlineage-integration-common/"},"packaged it for separate use"),". "),(0,a.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"The following environment variables are available commonly for both Java and Python languages."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Since"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OPENLINEAGE_API_KEY"),(0,a.kt)("td",{parentName:"tr",align:null},"The optional API key to be set on each lineage request. This will be set as a Bearer token in case authentication is required."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OPENLINEAGE_CONFIG"),(0,a.kt)("td",{parentName:"tr",align:null},"The optional path to locate the configuration file. The configuration file is in YAML format. Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"openlineage.yml")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OPENLINEAGE_DISABLED"),(0,a.kt)("td",{parentName:"tr",align:null},"When set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", will prevent OpenLineage from emitting events to the receiving backend"),(0,a.kt)("td",{parentName:"tr",align:null},"0.9.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OPENLINEAGE_URL"),(0,a.kt)("td",{parentName:"tr",align:null},"The URL for the HTTP transport of where to emit lineage events to. If not yet, no lineage data will be emitted. Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"http://localhost:8080")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"sql-parser"},"SQL parser"),(0,a.kt)("p",null,"We've created SQL parser that allows you to extract lineage from SQL statements. The parser is implemented in Rust, however, it's also available as a ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/openlineage-sql/"},"Python library"),".\nYou can take a look at it's documentation ",(0,a.kt)("a",{parentName:"p",href:"../sql"},"here")," or code on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/sql"},"GitHub"),"."))}c.isMDXComponent=!0}}]);