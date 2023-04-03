"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[535],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={title:"0.21.1",sidebar_position:2},l="0.21.1 - 2023-3-2",o={unversionedId:"releases/0_21_1",id:"releases/0_21_1",title:"0.21.1",description:"Added",source:"@site/docs/releases/0_21_1.md",sourceDirName:"releases",slug:"/releases/0_21_1",permalink:"/docs/releases/0_21_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_21_1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"0.21.1",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"0.22.0",permalink:"/docs/releases/0_22_0"},next:{title:"0.20.6",permalink:"/docs/releases/0_20_6"}},p={},m=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Removed",id:"removed",level:3}],s={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0211---2023-3-2"},"0.21.1 - 2023-3-2"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clients: add ",(0,r.kt)("inlineCode",{parentName:"strong"},"DEBUG")," logging of events to transports")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1633"},(0,r.kt)("inlineCode",{parentName:"a"},"#1633"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Ensures that the ",(0,r.kt)("inlineCode",{parentName:"em"},"DEBUG")," loglevel on properly configured loggers will always log events, regardless of the chosen transport.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add ",(0,r.kt)("inlineCode",{parentName:"strong"},"CustomEnvironmentFacetBuilder")," class")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1545"},(0,r.kt)("inlineCode",{parentName:"a"},"#1545"))," by ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"New contributor"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Anirudh181001"},"@Anirudh181001"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Enables the capture of custom environment variables from Spark.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: introduce the new output visitors ",(0,r.kt)("inlineCode",{parentName:"strong"},"AlterTableAddPartitionCommandVisitor")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"AlterTableSetLocationCommandVisitor"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1629"},(0,r.kt)("inlineCode",{parentName:"a"},"#1629"))," by ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"New contributor"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nataliezeller1"},"@nataliezeller1"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds visitors for extracting table names from the Spark commands ",(0,r.kt)("inlineCode",{parentName:"em"},"AlterTableAddPartitionCommand")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"AlterTableSetLocationCommand"),". The intended use case is a custom transport for the OpenMetadata lineage API.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add column lineage for JDBC relations")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1636"},(0,r.kt)("inlineCode",{parentName:"a"},"#1636"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds column lineage information to JDBC events with data extracted from query by the SQL parser.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SQL: add linux-aarch64 native library to Java SQL parser")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1664"},(0,r.kt)("inlineCode",{parentName:"a"},"#1664"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds a Linux-ARM version of the native library. The Java SQL parser interface had only Linux-x64 and MacOS universal binary variants previously."))),(0,r.kt)("h3",{id:"changed"},"Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: get table database in Athena extractor")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1631"},(0,r.kt)("inlineCode",{parentName:"a"},"#1631"))," by ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"New contributor"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rinzool"},"@rinzool"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Changes the extractor to get a table's database from the ",(0,r.kt)("inlineCode",{parentName:"em"},"table.schema")," field or the operator default if the field is ",(0,r.kt)("inlineCode",{parentName:"em"},"None"),"."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dbt: add dbt ",(0,r.kt)("inlineCode",{parentName:"strong"},"seed")," to the list of dbt-ol events")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1649"},(0,r.kt)("inlineCode",{parentName:"a"},"#1649"))," by ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"New contributor"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pohek321"},"@pohek321"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Ensures that ",(0,r.kt)("inlineCode",{parentName:"em"},"dbt-ol test")," no longer fails when run against an event seed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: make column lineage extraction in Spark support caching")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1634"},(0,r.kt)("inlineCode",{parentName:"a"},"#1634"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Collect column lineage from Spark logical plans that contain cached datasets.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add support for a deprecated config")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1586"},(0,r.kt)("inlineCode",{parentName:"a"},"#1586"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Maps the deprecated ",(0,r.kt)("inlineCode",{parentName:"em"},"spark.openlineage.url")," to ",(0,r.kt)("inlineCode",{parentName:"em"},"spark.openlineage.transport.url"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add error message in case of null in url")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1590"},(0,r.kt)("inlineCode",{parentName:"a"},"#1590"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Improves error logging in the case of undefined URLs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: collect complete event for really quick Spark jobs")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1650"},(0,r.kt)("inlineCode",{parentName:"a"},"#1650"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Improves the collecting of OpenLineage events on SQL complete in the case of quick operations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: fix input/outputs for one node ",(0,r.kt)("inlineCode",{parentName:"strong"},"LogicalRelation")," plans")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1668"},(0,r.kt)("inlineCode",{parentName:"a"},"#1668"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"For simple queries like ",(0,r.kt)("inlineCode",{parentName:"em"},"select col1, col2 from my_db.my_table")," that do not write output,\nthe Spark plan contained just a single node, which was wrongly treated as both\nan input and output dataset.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SQL: fix file existence check in build script for openlineage-sql-java")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1613"},(0,r.kt)("inlineCode",{parentName:"a"},"#1613"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sekikn"},"@sekikn"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Ensures that the build script works if the library is compiled solely for Linux."))),(0,r.kt)("h3",{id:"removed"},"Removed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: remove ",(0,r.kt)("inlineCode",{parentName:"strong"},"JobIdMapping")," and update macros to better support Airflow version 2+")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1645"},(0,r.kt)("inlineCode",{parentName:"a"},"#1645"))," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Updates macros to use ",(0,r.kt)("inlineCode",{parentName:"em"},"OpenLineageAdapter"),"'s method to generate deterministic run UUIDs because using the ",(0,r.kt)("inlineCode",{parentName:"em"},"JobIdMapping")," utility is incompatible with Airflow 2+."))))}d.isMDXComponent=!0}}]);