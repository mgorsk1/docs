"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1704],{3905:(e,t,i)=>{i.d(t,{Zo:()=>o,kt:()=>g});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function I(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function M(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):I(I({},t),e)),i},o=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=M(e,["components","mdxType","originalType","parentName"]),d=s(i),g=n,u=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return i?a.createElement(u,I(I({ref:t},o),{},{components:i})):a.createElement(u,I({ref:t},o))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,I=new Array(r);I[0]=d;var M={};for(var l in t)hasOwnProperty.call(t,l)&&(M[l]=t[l]);M.originalType=e,M.mdxType="string"==typeof e?e:n,I[1]=M;for(var s=2;s<r;s++)I[s]=i[s];return a.createElement.apply(null,I)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4688:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>I,default:()=>c,frontMatter:()=>r,metadata:()=>M,toc:()=>s});var a=i(7462),n=(i(7294),i(3905));const r={title:"How OpenLineage takes inspiration from OpenTelemetry",date:new Date("2021-06-20T00:00:00.000Z"),author:"Julien Le Dem",image:"./image.svg",banner:"./banner.svg",description:"The data world and the service world have many similarities but also a few crucial differences."},I=void 0,M={permalink:"/blog/openlineage-takes-inspiration-from-opentelemetry",source:"@site/blog/openlineage-takes-inspiration-from-opentelemetry/index.mdx",title:"How OpenLineage takes inspiration from OpenTelemetry",description:"The data world and the service world have many similarities but also a few crucial differences.",date:"2021-06-20T00:00:00.000Z",formattedDate:"June 20, 2021",tags:[],readingTime:7.265,hasTruncateMarker:!0,authors:[{name:"Julien Le Dem"}],frontMatter:{title:"How OpenLineage takes inspiration from OpenTelemetry",date:"2021-06-20T00:00:00.000Z",author:"Julien Le Dem",image:"./image.svg",banner:"./banner.svg",description:"The data world and the service world have many similarities but also a few crucial differences."},prevItem:{title:"Backfilling Airflow DAGs using Marquez",permalink:"/blog/backfilling-airflow-dags-using-marquez"}},l={image:i(7084).Z,authorsImageUrls:[void 0]},s=[{value:"Data vs Services",id:"data-vs-services",level:2},{value:"Observability in the Services world",id:"observability-in-the-services-world",level:2},{value:"Observability in the Data world",id:"observability-in-the-data-world",level:2},{value:"Differences Between the Data world and the service world",id:"differences-between-the-data-world-and-the-service-world",level:2},{value:"Overall dependency structure:",id:"overall-dependency-structure",level:3},{value:"Push vs Pull:",id:"push-vs-pull",level:3},{value:"Granularity of data updates",id:"granularity-of-data-updates",level:3},{value:"Parallels between OpenLineage and OpenTelemetry",id:"parallels-between-openlineage-and-opentelemetry",level:2},{value:"An API first",id:"an-api-first",level:3},{value:"Broad language support",id:"broad-language-support",level:3},{value:"Backend agnostic",id:"backend-agnostic",level:3},{value:"Integrates with popular frameworks and libraries",id:"integrates-with-popular-frameworks-and-libraries",level:3},{value:"OpenLineage specific capabilities",id:"openlineage-specific-capabilities",level:3}],o={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The data world and the service world have many similarities but also a few crucial differences. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(9094).Z+"#banner",width:"691",height:"147"})),(0,n.kt)("h2",{id:"data-vs-services"},"Data vs Services"),(0,n.kt)("p",null,"The data world and the service world have many similarities but also a few crucial differences.\nLet\u2019s start by drawing the similarities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The contract for services is the API, in the data world the contract is the dataset schema. "),(0,n.kt)("li",{parentName:"ul"},"Properly tracked Data lineage is as powerful as distributed request tracing for services."),(0,n.kt)("li",{parentName:"ul"},"Data Quality checks are the data pipelines equivalent of services\u2019 circuit breakers."),(0,n.kt)("li",{parentName:"ul"},"The Data catalog is data\u2019s service discovery"),(0,n.kt)("li",{parentName:"ul"},"Data quality metrics are similar to service metrics and both can define SLOs.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Data")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Services")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Contract")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Dataset schema"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Service API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Tracking Dependencies")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data lineage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Distributed traces")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Preventing cascading failures")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Quality checks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Circuit breakers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Discovery")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data catalog"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Service Discovery")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"SLOs")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Freshness, data quality"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Availability, latency")))),(0,n.kt)("h2",{id:"observability-in-the-services-world"},"Observability in the Services world"),(0,n.kt)("p",null,"In many ways, observability is a lot more mature in the services world than it is in the data world.\nService telemetry data is usually described as traces, metrics and logs that allow us to observe how services behave and interact with each other. Recognizing how telemetry data is connected across service layers is key to understanding and mitigating complex distributed failures in today\u2019s environments.\nOpenTelemetry is the standard that allows collection of telemetry data in a uniform, vendor-agnostic way across services and databases. For example, it enables the understanding of dependencies between microservices, facilitating investigation into how a single failure might impact services several layers removed.\nThe creation of OpenTelemetry removed the need for every monitoring, tracing analysis and log indexing platform to create unique integrations to collect that information from the environment."),(0,n.kt)("h2",{id:"observability-in-the-data-world"},"Observability in the Data world"),(0,n.kt)("p",null,"The data world is organized in a slightly different manner. Services strive for high availability  and expose a contract to be requested from. Data pipelines consume datasets and produce datasets. They could be executed as batch processes or using streaming engines but their fundamental contract is to consume data from given inputs and produce data to given outputs. The contract is now the schema of the dataset and an expectation of a rate of update. "),(0,n.kt)("p",null,"In this world observability cares about a few things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Is the data being delivered?")," We might be happy with data being delivered at an hourly or daily rate but we want to know if the job responsible for this is failing and won\u2019t be updating it at all. As a consequence all the datasets depending on this will also not be updated. Correlated SLA misses likes this must be identified to avoid many teams investigating the same problem independently."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Is the data being delivered on time?")," Batch processing for example is relatively forgiving and can still deliver outputs according to a time SLA even when it failed and had to retry or was slower than usual because of disruptions in its environment. However critical data will need to be delivered according to pre-defined SLA. We want to be able to understand where in the data pipeline dependencies, a bottleneck caused a delay and resolve the issue."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Is the data correct?")," Now the worst thing that can happen is not a data pipeline failing. This case is relatively easy to recover from. Once the issue is fixed and the pipeline restarted, it will typically catch up and get back to normal operation after the delay induced by the failure. The worst case scenario for a data engineer or data scientist, is the pipeline carrying through and producing bad data. This usually propagates to downstream consumers and all over the place. Recovering requires understanding that the data is incorrect (usually using a data quality library like Great Expectations or Deequ), identifying the upstream dataset where the problem originated, identifying the downstream datasets where the problem propagated, and restating all those datasets to the correct result."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Auditing what happened:")," Another common need whether it\u2019s for compliance or governance reasons is being able to know if specific sensitive datasets are used according to a defined set of rules. This can be used to protect user privacy, comply with financial regulation, or ensure that key metrics are derived from trusted data sources.")),(0,n.kt)("p",null,"The key common element in all those use cases is understanding dependencies through ",(0,n.kt)("strong",{parentName:"p"},"data lineage"),", just like services care about understanding dependencies through service traces."),(0,n.kt)("h2",{id:"differences-between-the-data-world-and-the-service-world"},"Differences Between the Data world and the service world"),(0,n.kt)("p",null,"If the data world has exactly the same needs for observability than the service world, there are key differences between the two that create the need for a different API to instrument data pipelines."),(0,n.kt)("h3",{id:"overall-dependency-structure"},"Overall dependency structure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Services")," dependencies can vary at the request level. Different requests to the same service may trigger very different downstream requests to other services. Service logic may create very different dependency patterns depending on input, timing and context. Services depend on other services that can be persistent or stateless."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data")," pipelines tend to be expressed in terms of a transformation from a defined set of input datasets to one or several output datasets. Their input/output structure tends to be a lot more stable and not vary much from record to record in the dataset. It\u2019s effectively a bigraph: jobs consume datasets and datasets are produced by jobs.")),(0,n.kt)("h3",{id:"push-vs-pull"},"Push vs Pull:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Services")," send or push requests to downstream services. Whether it\u2019s synchronous or asynchronous, they can add a traceid to their request that will be propagated downstream. An upstream request spawns one or more downstream requests in a tree structure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data")," pipelines pull data from the datasets they consume from. They aggregate and join datasets together. The structure of dependencies is typically a Directed Acyclic Graph at the dataset level instead of a tree at the request level. This means that the granularity of updates does not match one to one in a lot of cases. The frequency of updates can be different from one pipeline to the next and does not neatly align with a trace flowing down the dependencies.")),(0,n.kt)("h3",{id:"granularity-of-data-updates"},"Granularity of data updates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Services")," treat one request at a time and tend to optimize for latency of the request being processed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data")," pipelines consume entire datasets and tend to prioritize throughput over latency. The result output can be combining many records from various inputs. When a service request spawns multiple requests downstream a data pipeline tends to do the opposite at the record level while producing multiple derived datasets.")),(0,n.kt)("h2",{id:"parallels-between-openlineage-and-opentelemetry"},"Parallels between OpenLineage and ",(0,n.kt)("a",{parentName:"h2",href:"https://opentelemetry.io/docs/concepts/what-is-opentelemetry/"},"OpenTelemetry")),(0,n.kt)("h3",{id:"an-api-first"},"An API first"),(0,n.kt)("p",null,"Like OpenTelemetry is an API to collect traces, logs and metrics, OpenLineage is first an API to collect lineage. It is agnostic to the backend collecting the data and aspires to be integrated in every data processing engine.\nData lineage is the equivalent of traces for services. It keeps track of dependencies between datasets and data pipelines and how they change over time. "),(0,n.kt)("h3",{id:"broad-language-support"},"Broad language support"),(0,n.kt)("p",null,"Like OpenTelemetry, OpenLineage has broad language support through the definition of its API in the standard JSONSchema representation. It also has dedicated clients to simplify using its semantics in the languages most commonly used for data processing (Java and Python)."),(0,n.kt)("h3",{id:"backend-agnostic"},"Backend agnostic"),(0,n.kt)("p",null,"Like OpenTelemetry, OpenLineage allows the implementation of multiple backends to consume lineage events for a variety of use cases. For example Marquez is an Open Source reference implementation that keeps track of all the changes in your environment and will help you understand what happened if something goes wrong.\nOther metadata projects like Egeria, DataHub, Atlas or Amundsen can also benefit from OpenLineage. Egeria in particular is committed to support OpenLineage as a Metadata bus.\nLike OpenTelemetry, anybody can consume and leverage OpenLineage events."),(0,n.kt)("h3",{id:"integrates-with-popular-frameworks-and-libraries"},"Integrates with popular frameworks and libraries"),(0,n.kt)("p",null,"Like OpenTelemetry, OpenLineage aspires to be integrated in every data processing tool in the ecosystem. It also provides integration with popular tools that are not integrated yet. For example today you can cover Apache Spark, BigQuery, Snowflake, Redshift, Apache Airflow and others."),(0,n.kt)("h3",{id:"openlineage-specific-capabilities"},"OpenLineage specific capabilities"),(0,n.kt)("p",null,"In addition to those, OpenLineage is extensible to cover various aspects of metadata that are specific to the data world. OpenLineage defines a notion of facet that lets attach well defined pieces of metadata to the OpenLineage entities (Jobs, Runs and Datasets). Facets can be either part of the core spec or be defined as custom facets by third parties. This flexible mechanism lets define independent specs for dataset schema, query profiles or data quality metrics for example. But this is a topic for another post."))}c.isMDXComponent=!0},9094:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY5MC41IDE0NyIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6dmVjdG9ybmF0b3I9Imh0dHA6Ly92ZWN0b3JuYXRvci5pbyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcy8+CjxjbGlwUGF0aCBpZD0iQXJ0Ym9hcmRGcmFtZSI+CjxyZWN0IGhlaWdodD0iMTQ3IiB3aWR0aD0iNjkwLjUiIHg9IjAiIHk9IjAiLz4KPC9jbGlwUGF0aD4KPGcgY2xpcC1wYXRoPSJ1cmwoI0FydGJvYXJkRnJhbWUpIiBpZD0iVW50aXRsZWQiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iVW50aXRsZWQiPgo8cGF0aCBkPSJNMCAwTDY5MC41IDBMNjkwLjUgMEw2OTAuNSAxNDdMNjkwLjUgMTQ3TDAgMTQ3TDAgMTQ3TDAgMEwwIDBaIiBmaWxsPSIjOWQxNTI0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjUuODkgNzIuNUwxMTIuMjEgNzUuOTVMMTE3LjM5LTgxLjEzTDMxLjA3LTg0LjU5TDI1Ljg5IDcyLjVaIiBmaWxsPSIjMDAwYjAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDI2LjM4IDYzLjg3TDYxMS4wOSAzMjcuOTlMOTI3IDEwNS4zTDc0Mi4yOS0xNTcuMDlMNDI2LjM4IDYzLjg3WiIgZmlsbD0iIzYxMDgxNiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM4OC40MSAwTDExNy4zOSA4Mi44NkwxMjcuNzQgMTE1LjY2TDM5OC43NiAzMi44TDM4OC40MSAwWiIgZmlsbD0iIzVmMGEwYSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI1MC4zMSA1NS4yNEwxNzYuMDggMzg1TDIxMC42IDM5MS45MUwyODQuODMgNjIuMTVMMjUwLjMxIDU1LjI0WiIgZmlsbD0iIzM2MGIwNiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI3MS4wMiAzLjQ1TDI1OC45NCA1MC4wNkw0NTQgMTAwLjEyTDQ2Ni4wOSA1My41MUwyNzEuMDIgMy40NVoiIGZpbGw9IiNiMDAyMWEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNjkuMjk1IDQzOC40NzlMNDc4LjE3NCA0Ni42MjQyTDQ3OC4xNzQgNDYuNjI0Mkw1MDQuMDc0IDYwLjQzMDRMNTA0LjA3NCA2MC40MzA0TDI5NS4xOTUgNDUyLjI4NUwyOTUuMTk1IDQ1Mi4yODVMMjY5LjI5NSA0MzguNDc5TDI2OS4yOTUgNDM4LjQ3OVoiIGZpbGw9IiMzMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMS4wNyA0OC4zNEwtMTguOTkgNzIuNUwxOC45OSAxNTAuMThMNjkuMDUgMTI2LjAyTDMxLjA3IDQ4LjM0WiIgZmlsbD0iIzQ1MDkxMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTg4LjA0IDYyLjE1TDQ0Ljg4IDIwOC44OEwzNjcuNjkgMzAyLjA5TDQxMC44NSAxNTUuMzZMODguMDQgNjIuMTVaIiBmaWxsPSIjYmEyMTMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTE2LjE1IDBMMjc0LjQ3IDM2Ny42OUwzNDEuOCA0MTAuODVMNTgzLjQ3IDQzLjE2TDUxNi4xNSAwWiIgZmlsbD0iIzRkMDgwOCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU2Ny45NCA4MS4xM0wxNjkuMTcgMTA4Ljc1TDE3MC45IDEzNC42NUw1NjkuNjYgMTA3LjAzTDU2Ny45NCA4MS4xM1oiIGZpbGw9IiNjMDEyMjciIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NjcuOTQgOC42M0w4MTEuMzQgNDMuMTZMODY2LjU4LTM0My41Mkw2MjMuMTgtMzc4TDU2Ny45NCA4LjYzWiIgZmlsbD0iI2M3MGUzMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM4NC45NSAzNy45OEwzMjEuMDggNzIuNUwzNDEuOCAxMTIuMjFMNDA1LjY3IDc3LjY4TDM4NC45NSAzNy45OFoiIGZpbGw9IiMzNDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02MDUuOTEgNzcuNjhMODI2Ljg3IDgxLjEzTDgyNi44NyA2NS42TDYwNS45MSA2Mi4xNUw2MDUuOTEgNzcuNjhaIiBmaWxsPSIjZGMyMjM4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzQuMjMgMTMuODFMMTY1LjcyIDUwLjA2TDIyMi42OS05NC45NEwxMzEuMTktMTMxLjE5TDc0LjIzIDEzLjgxWiIgZmlsbD0iI2Q5NTM1YyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI4MS4zOCAzMS4wN0wyMzYuNSAyNy42MkwyMjkuNTkgMTk4LjUyTDI3NC40NyAyMDEuOTdMMjgxLjM4IDMxLjA3WiIgZmlsbD0iIzQzMDgwNCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI5NS4xOSA4MS4xM0wxMzguMSAxODguMTZMMjM2LjUgMzM0Ljg5TDM5My41OCAyMjcuODdMMjk1LjE5IDgxLjEzWiIgZmlsbD0iI2MxMjEzNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTUzNi44NiAxOUw1MzYuODYgMzYuMjVMNjQyLjE3IDMyLjhMNjQyLjE3IDE1LjU0TDUzNi44NiAxOVoiIGZpbGw9IiNkYjM1NGUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MzguNTkgMTIwLjg0TDM3OS43NyA2NDMuODlMNTgxLjc1IDcwNC4zMUw3NDAuNTYgMTgxLjI2TDUzOC41OSAxMjAuODRaIiBmaWxsPSIjY2QzZTU2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDg2LjggNTUuMjRMNDkwLjI1IDc5LjQxTDg4OS4wMiAyMC43MUw4ODUuNTctMS43M0w0ODYuOCA1NS4yNFoiIGZpbGw9IiMxYzAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02NzMuMjQgMTE3LjM5TDc1MC45MiAzNzIuODdMODQ1Ljg2IDM0MS44TDc2OC4xOCA4Ni4zMUw2NzMuMjQgMTE3LjM5WiIgZmlsbD0iI2ZjNWM3OCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEzNC42NSAxMDEuODVMLTE5IDU2Ny45NEwyMDguODcgNjQyLjE3TDM2Mi41MSAxNzYuMDhMMTM0LjY1IDEwMS44NVoiIGZpbGw9IiM3MzE3MGYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00NTkuMTggNTUuMjRMMzQ2Ljk4IDE3OS41M0wzNTkuMDYgMTkxLjYxTDQ3MS4yNyA2Ny4zMkw0NTkuMTggNTUuMjRaIiBmaWxsPSIjZmYyMTRlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjYxLjE1IDQ2LjYxTDgyNi44NyAyMDcuMTVMODUxIDE4MS4yNkw2ODUuMzIgMjAuNzJMNjYxLjE1IDQ2LjYxWiIgZmlsbD0iIzExMDMwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI5OC42NCA2OS4wNUwyMC43MSAzMDUuNTVMMjcuNjIgMzEyLjQ1TDMwNS41NSA3NS45NUwyOTguNjQgNjkuMDVaIiBmaWxsPSIjZTU0OTYyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMS43MyA0My4xNkwyMC43MyA4OS43N0wxMjcuNzMgNDQuODhMMTA4Ljc1IDBMMS43MyA0My4xNloiIGZpbGw9IiMyMDA5MDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xOC45OSA0MS40M0wwIDM3Ljk4TC0xNS41NCAxMzYuMzdMMS43MyAxMzkuODNMMTguOTkgNDEuNDNaIiBmaWxsPSIjYWQzNDQ1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTk2Ljc5IDMxLjA3TDMzMS40NCAyNy42MkwzMjYuMjYtMTgxLjI2TDE5MS42MS0xNzcuOEwxOTYuNzkgMzEuMDdaIiBmaWxsPSIjY2IwMDA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjE0LjA2IDExOS4xMUwyMzEuMzIgMTI0LjI5TDI4OC4yOC01Ni45N0wyNzEuMDItNjIuMTVMMjE0LjA2IDExOS4xMVoiIGZpbGw9IiM0ODAzMDMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00OTMuNzEgMjUuODlMNjUwLjggMzA5TDY2Ni4zMyAzMDAuMzdMNTA5LjI0IDE3LjI2TDQ5My43MSAyNS44OVoiIGZpbGw9IiM0ODE2MTUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NzguMjkgMTIuMDhMNTkyLjEgMTlMNzI4LjQ4LTI1Mkw3MTQuNjctMjU4LjkxTDU3OC4yOSAxMi4wOFoiIGZpbGw9IiMxZDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yODYuNTYgNDguMzRMMjU3LjIxIDIzM0wzMDIuMDkgMjM4LjE4TDMzMS40NCA1My41MUwyODYuNTYgNDguMzRaIiBmaWxsPSIjY2IwYzI0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTM0LjY1IDkxLjQ5TDEyMC44NCA5OC40TDE3OS41MyAyMDEuOTdMMTkzLjM0IDE5NS4wN0wxMzQuNjUgOTEuNDlaIiBmaWxsPSIjMWEwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTgxLjI2IDEyNC4yOUwtMTIyLjU2IDE2Ny40NUwtNzQuMjMgNDg2LjhMMjI3Ljg3IDQ0My42NUwxODEuMjYgMTI0LjI5WiIgZmlsbD0iI2M2MDQxNyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU4OC42NSA3Ny42OEw2MTIuODIgODkuNzdMODMzLjc4LTMyNC41NEw4MDkuNjEtMzM2LjYyTDU4OC42NSA3Ny42OFoiIGZpbGw9IiNiYTBkMmMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="},7084:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY5MC41IDQ2OC42NSIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6dmVjdG9ybmF0b3I9Imh0dHA6Ly92ZWN0b3JuYXRvci5pbyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcy8+CjxjbGlwUGF0aCBpZD0iQXJ0Ym9hcmRGcmFtZSI+CjxyZWN0IGhlaWdodD0iNDY4LjY1IiB3aWR0aD0iNjkwLjUiIHg9IjAiIHk9IjAiLz4KPC9jbGlwUGF0aD4KPGcgY2xpcC1wYXRoPSJ1cmwoI0FydGJvYXJkRnJhbWUpIiBpZD0iVW50aXRsZWQiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iVW50aXRsZWQiPgo8cGF0aCBkPSJNMCAwTDY5MC41IDBMNjkwLjUgMEw2OTAuNSA0NjguNjVMNjkwLjUgNDY4LjY1TDAgNDY4LjY1TDAgNDY4LjY1TDAgMEwwIDBaIiBmaWxsPSIjODkxODI2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjA0LjE5IDM0N0w3MDcuNzYgNTU3LjZMMTQ1MC4wNSAxOTUuMDlMMTM0Ni40OC0xMy44MUw2MDQuMTkgMzQ3WiIgZmlsbD0iI2VlNWU2YyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU3Ni41NyAzMjQuNTRMODQ1Ljg2IDM1My44OEw4NTIuNzcgMjgxLjM4TDU4My40NyAyNTJMNTc2LjU3IDMyNC41NFoiIGZpbGw9IiMwMDA1MDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MS43OSAyMTcuNTFMMzI0LjU0IDM4MS41MUw3MTkuODUtMjc2LjJMNDQ3LjEtNDQwLjJMNTEuNzkgMjE3LjUxWiIgZmlsbD0iI2I0MTcyNyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ4Ni44IDMzMS40NEw0OTMuNzEgMzY5LjQ0TDc2MyAzMTcuNjNMNzU2LjEgMjc5LjYzTDQ4Ni44IDMzMS40NFoiIGZpbGw9IiMyMDAyMDQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xODMgMjI2LjE0TDc3LjY4IDIyMUw2NS42IDUyMy4wNUwxNzAuOSA1MjguMjNMMTgzIDIyNi4xNFoiIGZpbGw9IiM1NDA1MDgiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNjYgMjc5LjY1TDQyMyAzMzEuNDRMNTA3LjU5IDIzNC43N0w0NTAuNTkgMTgyLjk4TDM2NiAyNzkuNjVaIiBmaWxsPSIjMmUwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTM4LjEgNi45MUwtMTg2LjQ0LTUwLjA5TC0yMTIuMzMgOTguNEwxMTAuNDggMTU1LjRMMTM4LjEgNi45MVoiIGZpbGw9IiMyYjA2MDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NjEgNjcuMzJMNzc2Ljc4IDEyMC44NEw3OTUuNzggNDEuNDNMNTgwLTEwLjM2TDU2MSA2Ny4zMloiIGZpbGw9IiNlYTBlMzYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik05NC45NCAxNzcuOEwyNDAgNDQ3LjFMMjUzLjgxIDQzOC40N0wxMDguODEgMTY5LjE3TDk0Ljk0IDE3Ny44WiIgZmlsbD0iI2Q2NTY0ZSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE4OS44OSAyNDEuNjhMMTY3LjQ1IDI3Ni4yTDQ3NC43MiA0NTkuMkw0OTcuMTYgNDI0LjY4TDE4OS44OSAyNDEuNjhaIiBmaWxsPSIjZGQxYzNiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTUzLjY0IDE1Ny4wOUwyMTcuNTEgMjEwLjZMMzI0LjUxIDc5LjQxTDI2MC42NiAyNS44OUwxNTMuNjQgMTU3LjA5WiIgZmlsbD0iIzYzMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ2Ni4wOSA4OEw0NTIuMjggMTk1TDY4MC4xNCAyMjFMNjkzLjk1IDExNEw0NjYuMDkgODhaIiBmaWxsPSIjNWQwMjBiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMCA0MjQuNjZMNDYuNjEgNDYwLjkxTDEyOS40NyAzNTIuMTZMODIuODYgMzE1LjlMMCA0MjQuNjZaIiBmaWxsPSIjZTIxNzM3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTkyLjEgMzYwLjc5TDU5NS41NiA0MDkuMTJMMTA1OS45MiAzNzQuNkwxMDU2LjQ3IDMyNi4yNkw1OTIuMSAzNjAuNzlaIiBmaWxsPSIjZTY1MTVlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDIyLjkzIDMwMC4zN0wyODQuODMgMzEyLjQ1TDMyNi4yNiA3NTIuNjVMNDY0LjM2IDc0MC41Nkw0MjIuOTMgMzAwLjM3WiIgZmlsbD0iI2I0MDYxYSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTIyMSAzOTguNzZMMjkzLjUgNDA1LjY3TDI5OC42NCAzNDdMMjI2LjE0IDM0MC4wOUwyMjEgMzk4Ljc2WiIgZmlsbD0iIzAwMTUwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI2Ny41NyA3OS40MUwzMTQuMTggMTEwLjQ4TDYwNS45MS0zMjkuNzFMNTU5LjMxLTM2MC43OUwyNjcuNTcgNzkuNDFaIiBmaWxsPSIjZWIzZjQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTguNjkgMjEwLjZMNjkuMDUgMjQzLjRMMjI3Ljg3IDE5MS42MUwyMTcuNTEgMTU4LjgyTDU4LjY5IDIxMC42WiIgZmlsbD0iI2M5MjUzMSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE0NSA5MS40OUwxOTguNTEgODEuMTNMMTI0LjI5LTM3Ni4zMkw3MC43OC0zNjZMMTQ1IDkxLjQ5WiIgZmlsbD0iI2ZmNTA1ZCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI0LjE3IDguNjNMLTE1OC44MyAyNTIuMDNMLTEyMi41NyAyNzYuMkw1OC42OSAzMi44TDI0LjE3IDguNjNaIiBmaWxsPSIjYzkwNDFiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjcyLjc1IDIwLjcyTDMwNS41NSAzMi44TDM0MS44LTY3LjMyTDMwOS03OS40MUwyNzIuNzUgMjAuNzJaIiBmaWxsPSIjZTdlZTk0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTU4LjgyIDI0NS4xM0wtMTQxLjU1IDI4Ni41NkwtMTMxLjIgMzQ3TDE2Ny40NSAzMDUuNTdMMTU4LjgyIDI0NS4xM1oiIGZpbGw9IiMzOTBjMGQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMzQuNjUgMTIuMDhMMTEzLjkzIDEwMy41OEwxNDguNDYgMTEwLjQ4TDE2OS4xNyAxOUwxMzQuNjUgMTIuMDhaIiBmaWxsPSIjZmY2NDdjIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTgzIDEzLjgxTDI2Ny41OSA0MS40M0wzNjYtMjYwLjY2TDI4MS40MS0yODguMjhMMTgzIDEzLjgxWiIgZmlsbD0iIzAzMmUwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMwOSAxNjAuNTRMMzQzLjUyIDE5NS4wN0w0MDAuNTIgMTM4LjA3TDM2NiAxMDMuNThMMzA5IDE2MC41NFoiIGZpbGw9IiM0MTAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02MjguMzYgMzkzLjU5TDkwMS4xIDcwNy43NkwxMDUxLjI5IDU3Ni41N0w3NzguNTQgMjYyLjM5TDYyOC4zNiAzOTMuNTlaIiBmaWxsPSIjZmY0ZjcwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzQuMjMgMjMxLjMyTC03MC43NyA0NjIuNjRMLTQzLjE1IDQ3OC4xN0wxMDAuMTIgMjQ2Ljg1TDc0LjIzIDIzMS4zMloiIGZpbGw9IiNiZTFkMmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNTMuODggMjU1LjQ5TDM1NS42MSAyODguMjhMNDIyLjkzIDI3OS42NUw0MjEuMjEgMjQ2Ljg1TDM1My44OCAyNTUuNDlaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjEyLjMzIDIwOC44OEwyNTcuMjEgMjI0LjQxTDI5NS4yMSAxMTAuNDhMMjUwLjMxIDk0Ljk0TDIxMi4zMyAyMDguODhaIiBmaWxsPSIjNDEwYzBhIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzQ4LjcgNjAuNDJMNDMzLjI5IDg2LjMxTDU1OS4yOS0zMTQuMThMNDc0LjctMzQwLjA3TDM0OC43IDYwLjQyWiIgZmlsbD0iIzVkMTAxYSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTYyMS40NSAxMjAuODRMNjE0LjU1IDE0My4yOEw4ODAuMzkgMjE1Ljc4TDg4Ny4yOSAxOTMuMzRMNjIxLjQ1IDEyMC44NFoiIGZpbGw9IiNkZjI2NDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xODQuNzEgMjg4LjI4TDIwMy43MSAyOTUuMTlMMjM2LjUgMjAyTDIxNy41IDE5NS4xTDE4NC43MSAyODguMjhaIiBmaWxsPSIjZmY4OWEzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjE1Ljc4IDM4NUwxNDMuMjggNTYyLjgxTDE3Ni4wOCA1NzYuNjJMMjQ4LjU4IDM5OC44MUwyMTUuNzggMzg1WiIgZmlsbD0iI2Q4NGU0YyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTUzNi44NiAyNzQuNDdMNTE2LjE1IDM0N0w2MjguMzYgMzc4LjA3TDY0OS4wNyAzMDUuNTdMNTM2Ljg2IDI3NC40N1oiIGZpbGw9IiMzMDA5MDYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="}}]);