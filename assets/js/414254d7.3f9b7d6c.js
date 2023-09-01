"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5091],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"0.24.0",sidebar_position:10},o="0.24.0 - 2023-05-03",l={unversionedId:"releases/0_24_0",id:"releases/0_24_0",title:"0.24.0",description:"Added",source:"@site/docs/releases/0_24_0.md",sourceDirName:"releases",slug:"/releases/0_24_0",permalink:"/docs/releases/0_24_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_24_0.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"0.24.0",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"0.25.0",permalink:"/docs/releases/0_25_0"},next:{title:"0.23.0",permalink:"/docs/releases/0_23_0"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0240---2023-05-03"},"0.24.0 - 2023-05-03"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Support custom transport types")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1795"},(0,r.kt)("inlineCode",{parentName:"a"},"#1795"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nataliezeller1"},"@nataliezeller1"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a new interface, ",(0,r.kt)("inlineCode",{parentName:"em"},"TransportBuilder"),", for creating custom transport types without having to modify core components of OpenLineage.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: dbt Cloud integration")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1418"},(0,r.kt)("inlineCode",{parentName:"a"},"#1418"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/howardyoo"},"@howardyoo"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a new OpenLineage extractor for dbt Cloud that uses the dbt Cloud hook provided by Airflow to communicate with dbt Cloud via its API.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: support dataset name modification using regex")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1796"},(0,r.kt)("inlineCode",{parentName:"a"},"#1796"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"It is a common scenario to write Spark output datasets with a location path ending with ",(0,r.kt)("inlineCode",{parentName:"em"},"/year=2023/month=04"),". The Spark parameter ",(0,r.kt)("inlineCode",{parentName:"em"},"spark.openlineage.dataset.removePath.pattern")," introduced here allows for removing certain elements from a path with a regex pattern."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: catch exception when trying to obtain details of non-existing table.")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1798"},(0,r.kt)("inlineCode",{parentName:"a"},"#1798"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"This mostly happens when getting table details on START event while the table is still not created.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: LogicalPlanSerializer")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1792"},(0,r.kt)("inlineCode",{parentName:"a"},"#1792"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Changes ",(0,r.kt)("inlineCode",{parentName:"em"},"LogicalPlanSerializer")," to make use of non-shaded Jackson classes in order to serialize ",(0,r.kt)("inlineCode",{parentName:"em"},"LogicalPlans"),". Note: class names are no longer serialized.")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flink: fix Flink CI")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1801"},(0,r.kt)("inlineCode",{parentName:"a"},"#1801"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Specifies an older image version that succeeds on CI in order to fix the Flink integration."))))}c.isMDXComponent=!0}}]);