"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4354],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>j});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),o=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):M(M({},t),e)),a},l=function(e){var t=o(e.components);return i.createElement(r.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=o(a),j=n,L=u["".concat(r,".").concat(j)]||u[j]||N[j]||s;return a?i.createElement(L,M(M({ref:t},l),{},{components:a})):i.createElement(L,M({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,M=new Array(s);M[0]=u;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:n,M[1]=c;for(var o=2;o<s;o++)M[o]=a[o];return i.createElement.apply(null,M)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>M,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=a(7462),n=(a(7294),a(3905));const s={title:"Announcing OpenLineage 1.0",date:new Date("2023-08-04T00:00:00.000Z"),authors:[{name:"Shirley Lu",title:"Guest Blogger",url:"https://www.linkedin.com/in/juye-shirley-lu/"}],image:"./image.svg",banner:"./banner.svg",description:"We are pleased to announce the first major release of OpenLineage. This release completes the first version of a new static lineage feature."},M=void 0,c={permalink:"/blog/1.0-release",source:"@site/blog/1.0-release/index.mdx",title:"Announcing OpenLineage 1.0",description:"We are pleased to announce the first major release of OpenLineage. This release completes the first version of a new static lineage feature.",date:"2023-08-04T00:00:00.000Z",formattedDate:"August 4, 2023",tags:[],readingTime:2.74,hasTruncateMarker:!0,authors:[{name:"Shirley Lu",title:"Guest Blogger",url:"https://www.linkedin.com/in/juye-shirley-lu/"}],frontMatter:{title:"Announcing OpenLineage 1.0",date:"2023-08-04T00:00:00.000Z",authors:[{name:"Shirley Lu",title:"Guest Blogger",url:"https://www.linkedin.com/in/juye-shirley-lu/"}],image:"./image.svg",banner:"./banner.svg",description:"We are pleased to announce the first major release of OpenLineage. This release completes the first version of a new static lineage feature."},nextItem:{title:"Meet Us in San Francisco on August 30th!",permalink:"/blog/sf-meetup-2"}},r={image:a(5689).Z,authorsImageUrls:[void 0]},o=[{value:"An Evolving Spec",id:"an-evolving-spec",level:3},{value:"Implementing Static Lineage",id:"implementing-static-lineage",level:3},{value:"Supporting New Use Cases",id:"supporting-new-use-cases",level:3},{value:"Additional Resources",id:"additional-resources",level:3}],l={toc:o};function N(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Announcing OpenLineage ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/releases/tag/1.0.0"},"v1.0"),"! We\u2019re officially in 1.x territory!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7223).Z+"#banner",width:"670",height:"160"})),(0,n.kt)("p",null,"It has become more and more apparent to us that managing data has become an O(n^2) problem. Every company is a data company, and every department within an organization is then again a mini data ecosystem in and of itself.  When departments interact, there\u2019s a duplication of effort across pipeline tooling, and deployment of new tools can break existing lineage workflows. "),(0,n.kt)("p",null,"This is why we\u2019re seeing increasing demand for OpenLineage support across various tools, and we\u2019re super excited to see more and more data engineers, developers and database managers joining our community. "),(0,n.kt)("p",null,"Momentum seems to be growing behind OpenLineage as the industry standard for runtime lineage collection. At the same time, a consensus appears to be forming that an open spec will get us closest to 100% coverage of data ecosystem tooling, one that is highly granular and also general-purpose enough to be consistent across various data workloads."),(0,n.kt)("h3",{id:"an-evolving-spec"},"An Evolving Spec"),(0,n.kt)("p",null,"Now that we\u2019re at v1.0, static lineage has made its way to OpenLineage! Up till now, OpenLineage has focused on \u201cruntime\u201d lineage - i.e., metadata generated when jobs are run. Capturing information as transformations of datasets occur enables precise descriptions of those transformations. "),(0,n.kt)("p",null,'The 1.0 release reflects the fact that there is demand for "design-time" lineage. The concept behind this is that even when datasets are not being touched yet, lineage metadata about them can still be useful and valuable.'),(0,n.kt)("p",null,"Although operational lineage covers many use cases, some scenarios call for lineage about jobs that have not run - and might never do so. "),(0,n.kt)("p",null,"Also, in many cases, a combination of both static and runtime approaches provides the best operational results. For example, imagine that a dataset exists in a data warehouse and dashboarding tool for which a pipeline has always been broken. Static lineage will show not only that the dataset exists but also that the pipeline for it has never run or always fails.  "),(0,n.kt)("h3",{id:"implementing-static-lineage"},"Implementing Static Lineage"),(0,n.kt)("p",null,"For an overview of the implementation, read the ",(0,n.kt)("a",{parentName:"p",href:"static-lineage"},"release preview")," by Michael Robinson."),(0,n.kt)("p",null,"The first part of the implementation was authored by Pawe\u0142 Leszczy\u0144ski in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/releases/tag/0.29.2"},"OpenLineage 0.29.2"),", which included two new event types along with support for them in the Python client."),(0,n.kt)("p",null,"Additional work, contributed by Julien Le Dem and Jakub Dardzi\u0144ski, involved:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"adding facet deletion to handle the case in which a user adds and deletes a dataset in the same request (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/releases/tag/0.30.1"},"0.30.1"),")"),(0,n.kt)("li",{parentName:"ul"},"removing references to facets from the core spec that broke compatibility with the Json schema specification (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/releases/tag/1.0.0"},"1.0.0"),").")),(0,n.kt)("p",null,"On the Marquez side, adding support for static lineage is ongoing. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/releases/tag/0.37.0"},"Marquez 0.37.0")," includes support in the API for decoding static events via a new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/pull/2495"},(0,n.kt)("inlineCode",{parentName:"a"},"EventTypeResolver")),"."),(0,n.kt)("h3",{id:"supporting-new-use-cases"},"Supporting New Use Cases"),(0,n.kt)("p",null,"With the release of 1.0, we now support use cases like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"bootstrapping of a lineage graph with prospective runs for auditing"),(0,n.kt)("li",{parentName:"ul"},"capturing dataset ownership changes outside of runs"),(0,n.kt)("li",{parentName:"ul"},"consuming facets from external systems"),(0,n.kt)("li",{parentName:"ul"},"creating dataset symlinks more easily")),(0,n.kt)("p",null,"Static lineage promises to fill the blind spots that dynamic lineage alone could not reach, offering a macroscopic view of how data flows and is accessed throughout an entire organization."),(0,n.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../getting-started"},"Getting Started Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/releases/tag/1.0.0"},"OpenLineage 1.0 Release")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/spec/OpenLineage.json"},"JsonSchema Specification")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://openlineage.io/apidocs/openapi/"},"OpenAPI Specification for HTTP-based Implementation"))))}N.isMDXComponent=!0},7223:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcwIDE2MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM2NjZkNzI7fS5jbHMtMntmaWxsOnJnYmEoMTQzLDE1MSwxNTksLjUpO30uY2xzLTN7ZmlsbDpyZ2JhKDE0NCwxNTIsMTYwLC41KTt9LmNscy00e2ZpbGw6cmdiYSgxOTYsMjAyLDIwOSwuNSk7fS5jbHMtNXtmaWxsOnJnYmEoMjE0LDIxNywyMjIsLjUpO30uY2xzLTZ7ZmlsbDpyZ2JhKDE3NSwxNzcsMTgzLC41KTt9LmNscy03e2ZpbGw6cmdiYSgxMTIsMTE5LDEyNCwuNSk7fS5jbHMtOHtmaWxsOnJnYmEoMTU0LDE2MiwxNjgsLjUpO30uY2xzLTl7ZmlsbDpyZ2JhKDg5LDk2LDEwNCwuNSk7fS5jbHMtMTB7ZmlsbDpyZ2JhKDExOSwxMjYsMTM1LC41KTt9LmNscy0xMXtmaWx0ZXI6dXJsKCNnMSk7fS5jbHMtMTEsLmNscy0xMiwuY2xzLTEzLC5jbHMtMTR7ZmlsbDpub25lO30uY2xzLTEye2ZpbHRlcjp1cmwoI2cwLjYpO30uY2xzLTEze2ZpbHRlcjp1cmwoI2cxLTIpO30uY2xzLTE0e2ZpbHRlcjp1cmwoI2cxLTMpO30uY2xzLTE1e2ZpbGw6IzU5NjM2Yjt9LmNscy0xNSwuY2xzLTE2LC5jbHMtMTcsLmNscy0xOHtvcGFjaXR5Oi41O30uY2xzLTE2e2ZpbGw6I2I2YmNjNjt9LmNscy0xN3tmaWxsOiM4ZDkzOWI7fS5jbHMtMTh7ZmlsbDojNmI3MjdiO308L3N0eWxlPjxmaWx0ZXIgaWQ9ImcxIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZzEtMiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImcxLTMiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJnMC42Ij48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjYiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNjcwIiBoZWlnaHQ9IjE2MCIvPjxnIGNsYXNzPSJjbHMtMTEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMTYiIHBvaW50cz0iLTExOSAtMjQxLjk5IC0xMDUuMzggMzkxLjM0IDI4OTQxLjU0IC0zMTAuMDkgMjg5MjcuOTIgLTk0My40MiAtMTE5IC0yNDEuOTkiLz48L2c+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJtMTY3LjAyLTIxLjhsNDk0Ljg2LDExMS4yMywxMDguOTYtNDc4Ljk3LTQ5NC44Ni0xMTEuMjNMMTY3LjAyLTIxLjhaIi8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJtMzUuMzYtMTEyLjZMLTM3MC45Ny0xOS41M2wxMDYuNjksNDU4LjU0LDQwNC4wNi05My4wN0wzNS4zNi0xMTIuNloiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Im00NDMuOTYsMjQ2LjA2bDIzOC4zNSwxMDguOTYsNzcuMTgtMTcwLjI1LTIzOC4zNS0xMDguOTYtNzcuMTgsMTcwLjI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0ibTYxMS45NC0xMC40NWwzMjkuMTUsNDcuNjcsNC41NC00NS40LTMyOS4xNS00Ny42Ny00LjU0LDQ1LjRaIi8+PHBhdGggY2xhc3M9ImNscy05IiBkPSJtNDQzLjk2LTMwLjg4TDM5LjksMzM5LjEzbDM4LjU5LDQzLjEzTDQ4Mi41NSwxMi4yNWwtMzguNTktNDMuMTNaIi8+PGcgY2xhc3M9ImNscy0xMyI+PHBvbHlnb24gY2xhc3M9ImNscy0xNyIgcG9pbnRzPSI1MzQuNzYgLTI4OS42NiAyODAuNTIgLTIxOS4yOSA0MjEuMjYgMjgyLjM4IDY3NS41IDIxMi4wMSA1MzQuNzYgLTI4OS42NiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im02MTEuOTQsODcuMTZsMjk3LjM3LDIzOC4zNSw0MC44Ni01NC40OEw2NTIuOCwzMi42OGwtNDAuODYsNTQuNDhaIi8+PGcgY2xhc3M9ImNscy0xNCI+PHBvbHlnb24gY2xhc3M9ImNscy0xOCIgcG9pbnRzPSIyODcuMzMgNjIuMTkgLTExNC40NiAxMDkuODYgLTEwMy4xMSAyMTQuMjggMjk4LjY4IDE2Ni42MSAyODcuMzMgNjIuMTkiLz48L2c+PHBhdGggY2xhc3M9ImNscy02IiBkPSJtMTIuNjYsMjEuMzNMMy41OCwyNDMuNzlsMTI0Ljg1LDQuNTQsOS4wOC0yMjIuNDZMMTIuNjYsMjEuMzNaIi8+PGcgY2xhc3M9ImNscy0xMiI+PHBvbHlnb24gY2xhc3M9ImNscy0xNSIgcG9pbnRzPSI1NjguODEgMTM3LjEgNjA5LjY3IDE2Mi4wNyA3MzkuMDYgLTM3LjY5IDY5OC4yIC02Mi42NiA1NjguODEgMTM3LjEiLz48L2c+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMjIxLjUsOTguNTFMNjAuMzMsMzc3LjcybDMxLjc4LDE4LjE2TDI1My4yOCwxMTYuNjdsLTMxLjc4LTE4LjE2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Im0yNjIuMzYtMTMzLjAzTDUwMC43MSw1MC44NGw5OS44OC0xMzEuNjYtMjM4LjM1LTE4My44Ny05OS44OCwxMzEuNjZaIi8+PC9zdmc+"},5689:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcwIDQ4MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM2NjZkNzI7fS5jbHMtMntmaWxsOnJnYmEoMTQzLDE1MSwxNTksLjUpO30uY2xzLTN7ZmlsbDpyZ2JhKDE0NCwxNTIsMTYwLC41KTt9LmNscy00e2ZpbGw6cmdiYSgxODIsMTk0LDIwMiwuNSk7fS5jbHMtNXtmaWxsOnJnYmEoMTk2LDIwMiwyMDksLjUpO30uY2xzLTZ7ZmlsbDpyZ2JhKDIxNCwyMTcsMjIyLC41KTt9LmNscy03e2ZpbGw6cmdiYSgxNzUsMTc3LDE4MywuNSk7fS5jbHMtOHtmaWxsOnJnYmEoMTEyLDExOSwxMjQsLjUpO30uY2xzLTl7ZmlsbDpyZ2JhKDcwLDc5LDg4LC41KTt9LmNscy0xMHtmaWxsOnJnYmEoMTU0LDE2MiwxNjgsLjUpO30uY2xzLTExe2ZpbGw6cmdiYSg4OSw5NiwxMDQsLjUpO30uY2xzLTEye2ZpbGw6cmdiYSgxMjAsMTI3LDEzMywuNSk7fS5jbHMtMTN7ZmlsbDpyZ2JhKDExOSwxMjYsMTM1LC41KTt9LmNscy0xNHtmaWx0ZXI6dXJsKCNnMSk7fS5jbHMtMTQsLmNscy0xNSwuY2xzLTE2LC5jbHMtMTcsLmNscy0xOCwuY2xzLTE5e2ZpbGw6bm9uZTt9LmNscy0xNXtmaWx0ZXI6dXJsKCNnMC42KTt9LmNscy0xNntmaWx0ZXI6dXJsKCNnMS0yKTt9LmNscy0xN3tmaWx0ZXI6dXJsKCNnMS0zKTt9LmNscy0xOHtmaWx0ZXI6dXJsKCNnMS00KTt9LmNscy0xOXtmaWx0ZXI6dXJsKCNnMS01KTt9LmNscy0yMHtmaWxsOiM0ZDU5NjM7fS5jbHMtMjAsLmNscy0yMSwuY2xzLTIyLC5jbHMtMjMsLmNscy0yNCwuY2xzLTI1e29wYWNpdHk6LjU7fS5jbHMtMjF7ZmlsbDojNTk2MzZiO30uY2xzLTIye2ZpbGw6I2MzY2NkNDt9LmNscy0yM3tmaWxsOiNiNmJjYzY7fS5jbHMtMjR7ZmlsbDojOGQ5MzliO30uY2xzLTI1e2ZpbGw6IzZiNzI3Yjt9PC9zdHlsZT48ZmlsdGVyIGlkPSJnMSI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImcxLTIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJnMS0zIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZzEtNCI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImcxLTUiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJnMC42Ij48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjYiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNjcwIiBoZWlnaHQ9IjQ4MCIvPjxnIGNsYXNzPSJjbHMtMTQiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMjMiIHBvaW50cz0iLTExOSAtODEuOTkgLTEwNS4zOCA1NTEuMzQgMjg5NDEuNTQgLTE1MC4wOSAyODkyNy45MiAtNzgzLjQyIC0xMTkgLTgxLjk5Ii8+PC9nPjxnIGNsYXNzPSJjbHMtMTYiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMjIiIHBvaW50cz0iLTM3LjI4IC0xOC40MyAxNDIuMDUgODUuOTkgNDEyLjE4IC0zNzQuODIgMjMyLjg1IC00NzkuMjQgLTM3LjI4IC0xOC40MyIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im0xNjcuMDIsMTM4LjJsNDk0Ljg2LDExMS4yMywxMDguOTYtNDc4Ljk3LTQ5NC44Ni0xMTEuMjMtMTA4Ljk2LDQ3OC45N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEwIiBkPSJtMzUuMzYsNDcuNGwtNDA2LjMzLDkzLjA3LDEwNi42OSw0NTguNTQsNDA0LjA2LTkzLjA3TDM1LjM2LDQ3LjRaIi8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJtNDQzLjk2LDQwNi4wNmwyMzguMzUsMTA4Ljk2LDc3LjE4LTE3MC4yNS0yMzguMzUtMTA4Ljk2LTc3LjE4LDE3MC4yNVoiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Im02MTEuOTQsMTQ5LjU1bDMyOS4xNSw0Ny42Nyw0LjU0LTQ1LjQtMzI5LjE1LTQ3LjY3LTQuNTQsNDUuNFoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im0tODQuOTUsMTcuODlMNzYuMjItNTIuNDhsLTE5NS4yMi00NjMuMDgtMTYxLjE3LDcwLjM3TC04NC45NSwxNy44OVoiLz48ZyBjbGFzcz0iY2xzLTE3Ij48cG9seWdvbiBjbGFzcz0iY2xzLTIwIiBwb2ludHM9IjQ1Ny41OCA4NS45OSA1MDIuOTggMTEzLjIzIDYwNy40IC02My44MyA1NjIgLTkxLjA3IDQ1Ny41OCA4NS45OSIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTEyIiBkPSJtMTYyLjQ4LDQzMy4zbC0yNTYuNTEsMTA4Ljk2LDI3LjI0LDYzLjU2LDI1Ni41MS0xMDguOTYtMjcuMjQtNjMuNTZaIi8+PHBhdGggY2xhc3M9ImNscy0xMSIgZD0ibTQ0My45NiwxMjkuMTJMMzkuOSw0OTkuMTNsMzguNTksNDMuMTNMNDgyLjU1LDE3Mi4yNWwtMzguNTktNDMuMTNaIi8+PGcgY2xhc3M9ImNscy0xOCI+PHBvbHlnb24gY2xhc3M9ImNscy0yNCIgcG9pbnRzPSI1MzQuNzYgLTEyOS42NiAyODAuNTIgLTU5LjI5IDQyMS4yNiA0NDIuMzggNjc1LjUgMzcyLjAxIDUzNC43NiAtMTI5LjY2Ii8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0ibTYxMS45NCwyNDcuMTZsMjk3LjM3LDIzOC4zNSw0MC44Ni01NC40OC0yOTcuMzctMjM4LjM1LTQwLjg2LDU0LjQ4WiIvPjxnIGNsYXNzPSJjbHMtMTkiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMjUiIHBvaW50cz0iMjg3LjMzIDIyMi4xOSAtMTE0LjQ2IDI2OS44NiAtMTAzLjExIDM3NC4yOCAyOTguNjggMzI2LjYxIDI4Ny4zMyAyMjIuMTkiLz48L2c+PHBhdGggY2xhc3M9ImNscy03IiBkPSJtMTIuNjYsMTgxLjMzTDMuNTgsNDAzLjc5bDEyNC44NSw0LjU0LDkuMDgtMjIyLjQ2LTEyNC44NS00LjU0WiIvPjxnIGNsYXNzPSJjbHMtMTUiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMjEiIHBvaW50cz0iNTY4LjgxIDI5Ny4xIDYwOS42NyAzMjIuMDcgNzM5LjA2IDEyMi4zMSA2OTguMiA5Ny4zNCA1NjguODEgMjk3LjEiLz48L2c+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMjIxLjUsMjU4LjUxTDYwLjMzLDUzNy43MmwzMS43OCwxOC4xNiwxNjEuMTctMjc5LjIxLTMxLjc4LTE4LjE2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMTMiIGQ9Im0yNjIuMzYsMjYuOTdsMjM4LjM1LDE4My44Nyw5OS44OC0xMzEuNjYtMjM4LjM1LTE4My44N0wyNjIuMzYsMjYuOTdaIi8+PHBhdGggY2xhc3M9ImNscy05IiBkPSJtMzEyLjMtMTMuODlsMjcuMjQsMjQuOTcsMTk1LjIyLTIxMy4zOC0yNy4yNC0yNC45N0wzMTIuMy0xMy44OVoiLz48L3N2Zz4="}}]);