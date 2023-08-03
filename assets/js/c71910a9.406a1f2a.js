"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9950],{3905:(M,I,i)=>{i.d(I,{Zo:()=>u,kt:()=>c});var N=i(7294);function e(M,I,i){return I in M?Object.defineProperty(M,I,{value:i,enumerable:!0,configurable:!0,writable:!0}):M[I]=i,M}function a(M,I){var i=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);I&&(N=N.filter((function(I){return Object.getOwnPropertyDescriptor(M,I).enumerable}))),i.push.apply(i,N)}return i}function T(M){for(var I=1;I<arguments.length;I++){var i=null!=arguments[I]?arguments[I]:{};I%2?a(Object(i),!0).forEach((function(I){e(M,I,i[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(i,I))}))}return M}function j(M,I){if(null==M)return{};var i,N,e=function(M,I){if(null==M)return{};var i,N,e={},a=Object.keys(M);for(N=0;N<a.length;N++)i=a[N],I.indexOf(i)>=0||(e[i]=M[i]);return e}(M,I);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(M);for(N=0;N<a.length;N++)i=a[N],I.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(M,i)&&(e[i]=M[i])}return e}var t=N.createContext({}),g=function(M){var I=N.useContext(t),i=I;return M&&(i="function"==typeof M?M(I):T(T({},I),M)),i},u=function(M){var I=g(M.components);return N.createElement(t.Provider,{value:I},M.children)},n={inlineCode:"code",wrapper:function(M){var I=M.children;return N.createElement(N.Fragment,{},I)}},m=N.forwardRef((function(M,I){var i=M.components,e=M.mdxType,a=M.originalType,t=M.parentName,u=j(M,["components","mdxType","originalType","parentName"]),m=g(i),c=e,D=m["".concat(t,".").concat(c)]||m[c]||n[c]||a;return i?N.createElement(D,T(T({ref:I},u),{},{components:i})):N.createElement(D,T({ref:I},u))}));function c(M,I){var i=arguments,e=I&&I.mdxType;if("string"==typeof M||e){var a=i.length,T=new Array(a);T[0]=m;var j={};for(var t in I)hasOwnProperty.call(I,t)&&(j[t]=I[t]);j.originalType=M,j.mdxType="string"==typeof M?M:e,T[1]=j;for(var g=2;g<a;g++)T[g]=i[g];return N.createElement.apply(null,T)}return N.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7615:(M,I,i)=>{i.r(I),i.d(I,{assets:()=>t,contentTitle:()=>T,default:()=>n,frontMatter:()=>a,metadata:()=>j,toc:()=>g});var N=i(7462),e=(i(7294),i(3905));const a={title:"At MANTA, OpenLineage Opens Doors to New Insights",date:new Date("2022-10-31T00:00:00.000Z"),author:"Ernie Ostic, SVP of Product at MANTA",image:"./image.svg",banner:"./banner.svg",description:"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers."},T=void 0,j={permalink:"/blog/manta-integration",source:"@site/blog/manta-integration/index.mdx",title:"At MANTA, OpenLineage Opens Doors to New Insights",description:"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers.",date:"2022-10-31T00:00:00.000Z",formattedDate:"October 31, 2022",tags:[],readingTime:1.765,hasTruncateMarker:!0,authors:[{name:"Ernie Ostic, SVP of Product at MANTA"}],frontMatter:{title:"At MANTA, OpenLineage Opens Doors to New Insights",date:"2022-10-31T00:00:00.000Z",author:"Ernie Ostic, SVP of Product at MANTA",image:"./image.svg",banner:"./banner.svg",description:"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers."},prevItem:{title:"What's in a Namespace?",permalink:"/blog/whats-in-a-namespace"},nextItem:{title:"Pursuing Lineage from Airflow using Custom Extractors",permalink:"/blog/extractors"}},t={image:i(1021).Z,authorsImageUrls:[void 0]},g=[],u={toc:g};function n(M){let{components:I,...a}=M;return(0,e.kt)("wrapper",(0,N.Z)({},u,a,{components:I,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers."),(0,e.kt)("p",null,(0,e.kt)("img",{src:i(5695).Z+"#banner",width:"770",height:"190"})),(0,e.kt)("p",null,"Here at ",(0,e.kt)("a",{parentName:"p",href:"https://getmanta.com/?utm_source=partner&utm_medium=referral&utm_campaign=OpenLineage"},"MANTA"),", we are very excited to be working closely with ",(0,e.kt)("a",{parentName:"p",href:"https://openlineage.io/"},"OpenLineage")," and, more importantly, with the OpenLineage Community.  As a leader in lineage analysis, we see first-hand the complexity required to achieve effective lineage, and the benefits of having an accepted standard for the sharing of operational lineage metadata. OpenLineage moves everything in the direction of enhanced interoperability, and helps to ensure that enterprises have maximum flexibility for current and future tool selection.  "),(0,e.kt)("p",null,"Adopting OpenLineage as part of our portfolio allows MANTA to bring detailed run-time lineage to our customers, many of whom are enterprise organizations and need this level of granularity. This is especially important for new technologies such as ",(0,e.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow"),", whose integration with OpenLineage continues to evolve.  Apache Airflow, as an example, is increasingly being utilized by our customers as part of their process orchestration portfolio; as such, these companies need lineage coverage for these operations. "),(0,e.kt)("p",null,"Having a recognized industry standard for lineage capture and reporting is an enabler for enhanced metadata management and governance. OpenLineage helps to ensure increased consistency in pipeline analysis, especially as more and more solutions appear in the Cloud, and in the general marketplace, for the transformation, enrichment, and overall movement of information through new and future dataflows. Vendors like MANTA will continue to offer creative and purposeful solutions that answer key questions and meet the end-to-end requirements of the business. For selected technologies, OpenLineage enables us to do this faster and simpler.   "),(0,e.kt)("p",null,"Eighteen months ago, we started our investigation into OpenLineage. After working with various customers earlier this year, we decided to double down on our investment and get more involved with the OpenLineage Community.  Throughout our journey, we\u2019ve found this growing community to be welcoming, helpful, and collaborative. MANTA is pleased to contribute however we can to this important open source project.  Are you ready to join?"),(0,e.kt)("p",null,"For more information about MANTA's data lineage solution, visit ",(0,e.kt)("a",{parentName:"p",href:"https://getmanta.com/?utm_source=partner&utm_medium=referral&utm_campaign=OpenLineage"},"our website"),"."),(0,e.kt)("p",null,"To learn more about contributing to OpenLineage, check out the project's ",(0,e.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/CONTRIBUTING.md"},"new contributor guide"),"."))}n.isMDXComponent=!0},5695:(M,I,i)=>{i.d(I,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc3MCAxOTAiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjE5MCIgd2lkdGg9Ijc3MCIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxnIG9wYWNpdHk9IjEiPgo8cGF0aCBkPSJNLTYuNzA0NzktNTguNzU4OEw3NzIuOTE5LTU4Ljc1ODhMNzcyLjkxOS01OC43NTg4TDc3Mi45MTkgMzc0LjI0TDc3Mi45MTkgMzc0LjI0TC02LjcwNDc5IDM3NC4yNEwtNi43MDQ3OSAzNzQuMjRMLTYuNzA0NzktNTguNzU4OEwtNi43MDQ3OS01OC43NTg4WiIgZmlsbD0iIzE5NjM5YyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTYxNS4wNDYgMjAuMjAzNUwtNzQuOTE4IDM3OC40MjZMMTM5LjQ4MSA3NzkuMDIxTDgyOS40NDUgNDIwLjc5OUw2MTUuMDQ2IDIwLjIwMzVaIiBmaWxsPSIjMGMyOTUxIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMxMC45ODgtMzkuNTAxOUwyMjMuMjg3IDEwNi44NzVMNDU3LjE3NCAyNDEuNjkzTDU0NC44NzUgOTUuMzE2NEwzMTAuOTg4LTM5LjUwMTlaIiBmaWxsPSIjYjI5Nzc5IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ0MS41ODEgMzQzLjc2MUw3MzUuODkgNjY3LjMxOUwxMDQ5LjY5IDM4Ni4xMzRMNzU1LjM3OCA2Mi41NzY3TDQ0MS41ODEgMzQzLjc2MVoiIGZpbGw9IiMwMDJhNzUiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTYuNzA0NzkgMTI5Ljk4MUwyMTEuNTkgOTkuMTY1N0wxNjguNzA4LTE5My41NzdMLTQ3LjYzODktMTYyLjc2MkMtNDcuNjM4OS0xNjIuNzYyLTYuNzA0NzggMTI5Ljk4MS02LjcwNDc5IDEyOS45ODFaIiBmaWxsPSIjMWFiY2U3IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE3Mi42MTQgNzIuMjEwMkwtMjUwLjM0MSAzMzkuOTEyTC04Ni42MTQ5IDU4OC4zNTdMMzM0LjM4MiAzMjAuNjU1TDE3Mi42MTQgNzIuMjEwMloiIGZpbGw9IiMwMDUyOTciIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzg4Ljk1IDIwNy4wMThMMzUxLjkyMiA0MDcuMzE2TDUyMy40MzkgNDM4LjEzMUw1NjAuNDY3IDIzNy44MzNMMzg4Ljk1IDIwNy4wMThaIiBmaWxsPSIjMDYyYTUwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI1Ni40MTkgOC42NDUyN0wyNjYuMTY5IDI3Ni4zNDdMMzMwLjQ4NiAyNzIuNDk4TDMyMC43MzcgNC43OTU5NEwyNTYuNDE5IDguNjQ1MjdaIiBmaWxsPSIjM2M0ODRmIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTUzNS4xMzYgMjEyLjgwMkw2ODEuMzEyIDI2OC42NTlMNzUxLjQ4MyA4Ny42MTc3TDYwNS4zMDcgMzEuNzYxNkw1MzUuMTM2IDIxMi44MDJaIiBmaWxsPSIjMDA1YjllIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMyMi42ODUgMTI5Ljk4MUw0OTYuMTUgMTU2Ljk0Nkw1MTEuNzQyIDYwLjY1MkwzMzguMjc3IDMzLjY4NjNMMzIyLjY4NSAxMjkuOTgxWiIgZmlsbD0iI2E0OTk5OCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNDguNjE4IDMzLjY4NjNMLTE0OC45ODUgNTYuODAyN0wtMTM5LjIzNiAyMTguNTg3TDI1Ni40MTkgMTk1LjQ3QzI1Ni40MTkgMTk1LjQ3IDI0OC42MTggMzMuNjg2MyAyNDguNjE4IDMzLjY4NjNaIiBmaWxsPSIjMDA3OWIwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTY2OS42MTUgMTkxLjYxMUw1MzcuMDczIDYwMS44NEw3MjQuMTgzIDY1OS42Mkw4NTYuNzI0IDI0OS4zOTJMNjY5LjYxNSAxOTEuNjExWiIgZmlsbD0iIzAwMjk2ZSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMjEuMzM5LTIyLjE2OThMMTgwLjQwNSAwLjk0NjYxTDUxMy42OSA1MTEuMzE5TDU1NC42MjQgNDg4LjIwM0wyMjEuMzM5LTIyLjE2OThaIiBmaWxsPSIjMjYzYjUwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI2MC4zMTUgMTcwLjQyOUwtNi43MDQ3OSAyNTEuMzE2TDIwLjU4NDYgMzQxLjgzN0wyODcuNjA0IDI2MC45NUwyNjAuMzE1IDE3MC40MjlaIiBmaWxsPSIjMDA1Njk0IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU0Mi45MjcgMjcuOTEyM0w0OTQuMjAyIDUxLjAyODdMNjM0LjUzNCAzMjguMzY0TDY4My4yNTkgMzA1LjI0OEw1NDIuOTI3IDI3LjkxMjNaIiBmaWxsPSIjMDA0Mzc5IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ0MS41ODEtMzEuNzkzMUw0MTQuMjkyIDIwLjIwMzVMNzE4LjM1IDE2NC42NTVMNzQ1LjYzOSAxMTIuNjU5TDQ0MS41ODEtMzEuNzkzMVoiIGZpbGw9IiMxMTU2ODIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDk0LjIwMiAxNTguODcxTDM4NS4wNTUgMjIwLjUwMUw0MzUuNzI4IDMwMy4zMTNMNTQ0Ljg3NSAyNDEuNjgzTDQ5NC4yMDIgMTU4Ljg3MVoiIGZpbGw9IiM0MzQxM2UiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzk2Ljc1MiAyMTguNTc2TDUyNS4zODcgMjE2LjY1Mkw1MjMuNDM5IDk1LjMxNjRMMzk0LjgwNCA5Ny4yNDFMMzk2Ljc1MiAyMTguNTc2WiIgZmlsbD0iIzgxODQ4OCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMDcuMDkyIDE1MS4xNzJMMjczLjk2IDE5NS40N0w0MTAuMzk2IDI4NS45OTFMNDQzLjUyOSAyNDEuNjkzTDMwNy4wOTIgMTUxLjE3MloiIGZpbGw9IiMzODM3MzkiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTcwLjIxNiAyMjYuMjg1TDYwMy4zNDkgMzE4LjczTDgwNi4wNTEgMjQzLjYxOEw3NzIuOTE5IDE1MS4xNzJMNTcwLjIxNiAyMjYuMjg1WiIgZmlsbD0iIzAwNDQ4NSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTg0LjMgMzcuNTM1NkwtMTguNDAxNyA1NC44Njc4TC02LjcwNDggMTU1LjAyMkwxOTQuMDQ5IDEzNy42OUMxOTQuMDQ5IDEzNy42OSAxODQuMyAzNy41MzU2IDE4NC4zIDM3LjUzNTZaIiBmaWxsPSIjMDA4NGJlIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTYxMy4wOTggNTQuODY3OEw3NTMuNDMxIDEyOS45ODFMMTA1OS40NC00MjQuNjlMOTE5LjEwNC00OTkuODAzTDYxMy4wOTggNTQuODY3OFoiIGZpbGw9IiMyNTVlOWYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8L2c+CjwvZz4KPC9zdmc+Cg=="},1021:(M,I,i)=>{i.d(I,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyMDAgODcwIiB3aWR0aD0iMTAwJSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp2ZWN0b3JuYXRvcj0iaHR0cDovL3ZlY3Rvcm5hdG9yLmlvIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxkZWZzLz4KPGNsaXBQYXRoIGlkPSJBcnRib2FyZEZyYW1lIj4KPHJlY3QgaGVpZ2h0PSI4NzAiIHdpZHRoPSIxMjAwIiB4PSIwIiB5PSIwIi8+CjwvY2xpcFBhdGg+CjxnIGNsaXAtcGF0aD0idXJsKCNBcnRib2FyZEZyYW1lKSIgaWQ9IlVudGl0bGVkIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9IlVudGl0bGVkIj4KPGcgb3BhY2l0eT0iMSI+CjxwYXRoIGQ9Ik0tMzM3LjYwNiAwLjkyNzYwM0wxMjA0LjYyIDAuOTI3NjAzTDEyMDQuNjIgMC45Mjc2MDNMMTIwNC42MiA5MzUuNzY3TDEyMDQuNjIgOTM1Ljc2N0wtMzM3LjYwNiA5MzUuNzY3TC0zMzcuNjA2IDkzNS43NjdMLTMzNy42MDYgMC45Mjc2MDNMLTMzNy42MDYgMC45Mjc2MDNaIiBmaWxsPSIjMTk2MzljIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNODkyLjMxOCAxNDAuODUyTC00NzIuNTQzIDc3NS42MzZMLTQ4LjQ0NzUgMTQ4NS41TDEzMTYuNDQgODUwLjcyM0w4OTIuMzE4IDE0MC44NTJaIiBmaWxsPSIjMGMyOTUxIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI5MC44NDEgMzUuMDUxNkwxMTcuMzM0IDI5NC40MzdMNTgwIDUzMy4zNEw3NTMuNTA4IDI3My45NTVMMjkwLjg0MSAzNS4wNTE2WiIgZmlsbD0iI2IyOTc3OSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0tMjk5LjA1NiAxMzcuNDQyTDU5OS4yODUgOTMuMDY3Nkw1NjguNDQxLTM1Ny40MzZMLTMyOS45LTMxMy4wNjJMLTI5OS4wNTYgMTM3LjQ0MloiIGZpbGw9IiM0OWVjZmYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTQ5LjE3NiA3MTQuMjFMMTEzMS4zNyAxMjg3LjU2TDE3NTIuMTEgNzg5LjI5N0wxMTY5LjkyIDIxNS45MzlMNTQ5LjE3NiA3MTQuMjFaIiBmaWxsPSIjMDAyYTc1IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS0zMzcuNjA2IDMzNS4zODJMOTQuMjE1NiAyODAuNzc3TDkuMzg4NC0yMzcuOTc1TC00MTguNTgtMTgzLjM3TC0zMzcuNjA2IDMzNS4zODJaIiBmaWxsPSIjMWFiY2U3IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE3LjExNDcgMjMzLjAxTC04MTkuNTU4IDcwNy4zODlMLTQ5NS42ODEgMTE0Ny42NEwzMzcuMTE4IDY3My4yNjVMMTcuMTE0NyAyMzMuMDFaIiBmaWxsPSIjMDA1Mjk3IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTYwNy4wMTIgNjkuMTkzNkw3NDkuNjc1IDI1Ni45MDNMMTQxNi42OC0xMzIuMTc1TDEyNzQuMDEtMzE5Ljg4NEw2MDcuMDEyIDY5LjE5MzZaIiBmaWxsPSIjMjc4M2MzIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ0NS4wNjMgNDcxLjg5NkwzNzEuODE2IDgyNi44MzFMNzExLjEwNCA4ODEuNDM3TDc4NC4zNTIgNTI2LjUwMUw0NDUuMDYzIDQ3MS44OTZaIiBmaWxsPSIjMDYyYTUwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE4Mi44OTYgMTIwLjM3MUwyMDIuMTgxIDU5NC43NDlMMzI5LjQxMiA1ODcuOTI4TDMxMC4xMjcgMTEzLjU1TDE4Mi44OTYgMTIwLjM3MVoiIGZpbGw9IiMzYzQ4NGYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzM0LjI0MyA0ODIuMTQ2TDEwMjMuNCA1ODEuMTI1TDExNjIuMjEgMjYwLjMxM0w4NzMuMDUzIDE2MS4zMzRMNzM0LjI0MyA0ODIuMTQ2WiIgZmlsbD0iIzAwNWI5ZSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMTMuOTggMzM1LjM4Mkw2NTcuMTIxIDM4My4xNjZMNjg3Ljk2NiAyMTIuNTI5TDM0NC44MjQgMTY0Ljc0NUwzMTMuOTggMzM1LjM4MloiIGZpbGw9IiNhNDk5OTgiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNOTY5LjQxOSA1MjMuMDkxTC04NTQuMjU1IDY4My40OTZMLTc5Ni40MiAxMTY0LjcxTDEwMjMuNCAxMDA0LjNMOTY5LjQxOSA1MjMuMDkxWiIgZmlsbD0iIzAwMzg3NiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xNjcuNDY0IDE2NC43NDVMLTYxOS4wNzkgMjA1LjcwOEwtNTk5Ljc5NCA0OTIuMzk1TDE4Mi44NzYgNDUxLjQzMkwxNjcuNDQzIDE2NC43NDVMMTY3LjQ2NCAxNjQuNzQ1WiIgZmlsbD0iIzAwNzliMCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMDAwLjI2IDQ0NC41OTNMNzM4LjA3NSAxMTcxLjUzTDExMDguMjEgMTI3My45MkwxMzcwLjQgNTQ2Ljk4M0wxMDAwLjI2IDQ0NC41OTNaIiBmaWxsPSIjMDAyOTZlIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI0MC43MzIgMTIzLjc5OUw1MDIuOTIgMTM3LjQ2TDU1Ni45MDItNTM0Ljg3N0wyOTQuNzE1LTU0OC41MzdMMjQwLjczMiAxMjMuNzk5WiIgZmlsbD0iIzEwOTRjZSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMTMuNTAxIDY1Ljc2NDZMMzIuNTI2OCAxMDYuNzI4TDY5MS44MTkgMTAxMS4xM0w3NzIuNzkzIDk3MC4xNjRMMTEzLjUwMSA2NS43NjQ2WiIgZmlsbD0iIzI2M2I1MCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0tMjUyLjc3OSA0MS44OTA2TC0xNy41ODI3IDc2LjAxNDZMNzEuMDc3Mi00MTIuMDI0TC0xNjQuMDk5LTQ0Ni4xNDdMLTI1Mi43NzkgNDEuODkwNloiIGZpbGw9IiM4OGQ3ZjIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTkwLjg1MTEgNzAwLjU2N0wxNTIuMDUyIDE2MzkuMDlMODA3LjQ5IDE1MDUuOTlMNTY0LjU4OCA1NjcuNDY0TC05MC44NTExIDcwMC41NjdaIiBmaWxsPSIjMDAzZjgzIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE3OS4wNDMgNTUuNTMzNkwyMDkuODg3IDE3MS41NjZMMTAwNC4xNCAwLjkyNzYwM0w5NzMuMjkyLTExMS42OTRMMTc5LjA0MyA1NS41MzM2WiIgZmlsbD0iIzI3OGRiZSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xOTAuNjAyIDQwNy4wNTlMLTMzNy42MDYgNTUwLjM5M0wtMjgzLjYyMyA3MTAuNzk5TDI0NC41ODUgNTY3LjQ2NEwxOTAuNjAyIDQwNy4wNTlaIiBmaWxsPSIjMDA1Njk0IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTc0OS42NTUgMTU0LjUxM0w2NTMuMjY4IDE5NS40NzZMOTMwLjg2OCA2ODYuOTI1TDEwMjcuMjUgNjQ1Ljk2Mkw3NDkuNjU1IDE1NC41MTNaIiBmaWxsPSIjMDA0Mzc5IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU0OS4xNzYgNDguNzExNkw0OTUuMTkzIDE0MC44NTJMMTA5Ni42NyAzOTYuODA5TDExNTAuNjYgMzA0LjY2OUw1NDkuMTc2IDQ4LjcxMTZaIiBmaWxsPSIjMTE1NjgyIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTY1My4yNjggMzg2LjU3N0w0MzcuMzU3IDQ5NS43ODhMNTM3LjU5NyA2NDIuNTMzTDc1My41MDggNTMzLjMyMkw2NTMuMjY4IDM4Ni41NzdaIiBmaWxsPSIjNDM0MTNlIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ2MC40OTYgNDkyLjM3N0w3MTQuOTU3IDQ4OC45NjdMNzExLjEwNCAyNzMuOTU1TDQ1Ni42NDMgMjc3LjM2Nkw0NjAuNDk2IDQ5Mi4zNzdaIiBmaWxsPSIjODE4NDg4IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI4My4xMzUgMzcyLjkzNUwyMTcuNTkzIDQ1MS40MzJMNDg3LjQ4NyA2MTEuODM4TDU1My4wMjkgNTMzLjM0TDI4My4xMzUgMzcyLjkzNVoiIGZpbGw9IiMzODM3MzkiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTI0OC43MjEtNDkzLjkzOUwzOTEuMzAzLTUwNy41ODdMMzkxLjMwMy01MDcuNTg3TDQwNi4zNTEgNDUuMzA4Nkw0MDYuMzUxIDQ1LjMwODZMLTIzMy42NzQgNTguOTU2NkwtMjMzLjY3NCA1OC45NTY2TC0yNDguNzIxLTQ5My45MzlMLTI0OC43MjEtNDkzLjkzOVoiIGZpbGw9IiM1M2M0ZTYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTgwMy42MzcgNTA2LjAzOEw4NjkuMTc5IDY2OS44NTRMMTI3MC4xNiA1MzYuNzUxTDEyMDQuNjIgMzcyLjkzNUw4MDMuNjM3IDUwNi4wMzhaIiBmaWxsPSIjMDA0NDg1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00MC4yMzI4IDE3MS41NjZMLTM2MC43NDUgMjAyLjI3OUwtMzM3LjYwNiAzNzkuNzU2TDU5LjUxODIgMzQ5LjA0MkM1OS41MTgyIDM0OS4wNDIgNDAuMjMyOCAxNzEuNTY2IDQwLjIzMjggMTcxLjU2NloiIGZpbGw9IiMwMDg0YmUiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDIzLjYxNCAxMjUuMjE4TDcwMS4yMTQgMjU4LjMyMUwxMzA2LjUzLTcyNC41NzdMMTAyOC45Mi04NTcuNjgxTDQyMy42MTQgMTI1LjIxOFoiIGZpbGw9IiMyNTVlOWYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8L2c+CjwvZz4KPC9zdmc+Cg=="}}]);