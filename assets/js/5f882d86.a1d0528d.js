"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6590],{3905:(I,i,M)=>{M.d(i,{Zo:()=>N,kt:()=>j});var e=M(67294);function t(I,i,M){return i in I?Object.defineProperty(I,i,{value:M,enumerable:!0,configurable:!0,writable:!0}):I[i]=M,I}function m(I,i){var M=Object.keys(I);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(I);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(I,i).enumerable}))),M.push.apply(M,e)}return M}function b(I){for(var i=1;i<arguments.length;i++){var M=null!=arguments[i]?arguments[i]:{};i%2?m(Object(M),!0).forEach((function(i){t(I,i,M[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(M)):m(Object(M)).forEach((function(i){Object.defineProperty(I,i,Object.getOwnPropertyDescriptor(M,i))}))}return I}function a(I,i){if(null==I)return{};var M,e,t=function(I,i){if(null==I)return{};var M,e,t={},m=Object.keys(I);for(e=0;e<m.length;e++)M=m[e],i.indexOf(M)>=0||(t[M]=I[M]);return t}(I,i);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(I);for(e=0;e<m.length;e++)M=m[e],i.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(I,M)&&(t[M]=I[M])}return t}var T=e.createContext({}),c=function(I){var i=e.useContext(T),M=i;return I&&(M="function"==typeof I?I(i):b(b({},i),I)),M},N=function(I){var i=c(I.components);return e.createElement(T.Provider,{value:i},I.children)},l={inlineCode:"code",wrapper:function(I){var i=I.children;return e.createElement(e.Fragment,{},i)}},g=e.forwardRef((function(I,i){var M=I.components,t=I.mdxType,m=I.originalType,T=I.parentName,N=a(I,["components","mdxType","originalType","parentName"]),g=c(M),j=t,n=g["".concat(T,".").concat(j)]||g[j]||l[j]||m;return M?e.createElement(n,b(b({ref:i},N),{},{components:M})):e.createElement(n,b({ref:i},N))}));function j(I,i){var M=arguments,t=i&&i.mdxType;if("string"==typeof I||t){var m=M.length,b=new Array(m);b[0]=g;var a={};for(var T in i)hasOwnProperty.call(i,T)&&(a[T]=i[T]);a.originalType=I,a.mdxType="string"==typeof I?I:t,b[1]=a;for(var c=2;c<m;c++)b[c]=M[c];return e.createElement.apply(null,b)}return e.createElement.apply(null,M)}g.displayName="MDXCreateElement"},30897:(I,i,M)=>{M.r(i),M.d(i,{assets:()=>T,contentTitle:()=>b,default:()=>l,frontMatter:()=>m,metadata:()=>a,toc:()=>c});var e=M(87462),t=(M(67294),M(3905));const m={title:"Pursuing Lineage from Airflow using Custom Extractors",date:new Date("2022-09-08T00:00:00.000Z"),authors:[{name:"Maciej Obuchowski",title:"OpenLineage Committer",url:"https://www.github.com/mobuchowski"},{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],image:"./image.svg",banner:"./banner.svg",description:"Built-in support for custom extractors makes OpenLineage a highly adaptable solution for pipelines that use Airflow."},b=void 0,a={permalink:"/blog/extractors",source:"@site/blog/extractors/index.mdx",title:"Pursuing Lineage from Airflow using Custom Extractors",description:"Built-in support for custom extractors makes OpenLineage a highly adaptable solution for pipelines that use Airflow.",date:"2022-09-08T00:00:00.000Z",formattedDate:"September 8, 2022",tags:[],readingTime:4.165,hasTruncateMarker:!0,authors:[{name:"Maciej Obuchowski",title:"OpenLineage Committer",url:"https://www.github.com/mobuchowski"},{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],frontMatter:{title:"Pursuing Lineage from Airflow using Custom Extractors",date:"2022-09-08T00:00:00.000Z",authors:[{name:"Maciej Obuchowski",title:"OpenLineage Committer",url:"https://www.github.com/mobuchowski"},{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],image:"./image.svg",banner:"./banner.svg",description:"Built-in support for custom extractors makes OpenLineage a highly adaptable solution for pipelines that use Airflow."},prevItem:{title:"At MANTA, OpenLineage Opens Doors to New Insights",permalink:"/blog/manta-integration"},nextItem:{title:"How Operators and Extractors Work Under-the-Hook",permalink:"/blog/operators-and-extractors-technical-deep-dive"}},T={image:M(73264).Z,authorsImageUrls:[void 0,void 0]},c=[],N={toc:c};function l(I){let{components:i,...m}=I;return(0,t.kt)("wrapper",(0,e.Z)({},N,m,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Built-in support for custom extractors makes OpenLineage a highly adaptable solution for pipelines that use Airflow."),(0,t.kt)("p",null,(0,t.kt)("img",{src:M(70428).Z+"#banner",width:"921",height:"225"})))}l.isMDXComponent=!0},70428:(I,i,M)=>{M.d(i,{Z:()=>e});const e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDkyMSAyMjUiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjIyNSIgd2lkdGg9IjkyMSIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik01MzcuOTEgMTMwLjY2OUwzMzMuMzIgMzM1LjI1OUw0MzYuNzYgNDM2LjM5OUw2NDEuMzUgMjMxLjgwOUw1MzcuOTEgMTMwLjY2OVoiIGZpbGw9IiNmNGUyYmMiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzgzLjg5IDE1NS45NTlMMzM1LjYyIDIyMC4zMTlMNjg1LjAzIDQ4MC4wNzlMNzMzLjMgNDE1LjcxOUwzODMuODkgMTU1Ljk1OVoiIGZpbGw9IiM3MjQ3MWMiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8L2c+CjxnIGlkPSJBcnRib2FyZDEiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iQXJ0Ym9hcmQxIj4KPGcgb3BhY2l0eT0iMSI+CjxjbGlwUGF0aCBpZD0iQ2xpcFBhdGgiPgo8cGF0aCBkPSJNMC4wMDAzMjQwMTEgMy45MjY0OWUtMDVMOTIwLjQwNCAzLjkyNjQ5ZS0wNUw5MjAuNDA0IDMuOTI2NDllLTA1TDkyMC40MDQgMjI0LjY2Mkw5MjAuNDA0IDIyNC42NjJMMC4wMDAzMjQwMTEgMjI0LjY2MkwwLjAwMDMyNDAxMSAyMjQuNjYyTDAuMDAwMzI0MDExIDMuOTI2NDllLTA1TDAuMDAwMzI0MDExIDMuOTI2NDllLTA1WiIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQ2xpcFBhdGgpIj4KPHBhdGggZD0iTTAtMTI2Ljc5MUwxMjg5LTEyNi43OTFMMTI4OS0xMjYuNzkxTDEyODkgMjI3LjlMMTI4OSAyMjcuOUwwIDIyNy45TDAgMjI3LjlMMC0xMjYuNzkxTDAtMTI2Ljc5MVoiIGZpbGw9IiM3MDYzNTEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MjQuMTEtMTYuNDUxTDEwOC4wNCAxOTcuMzNMMjg5LjY0IDU0OS4wNDFMNzA1LjcxIDMzNS4yNkw1MjQuMTEtMTYuNDUxWiIgZmlsbD0iI2ZmYjE2MyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yOS44OCAxLjkzOTFMNTMzLjMxIDI5LjUxOTJMNTQwLjIxLTEzMS4zOTFMMzYuNzgtMTU4Ljk3MUwyOS44OCAxLjkzOTFaIiBmaWxsPSIjMDA0NjYwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ5OC44MyAyNC45MjkyTDIwMi4yOSAxMDU0Ljc3TDc3OS4yOCAxMjIwLjI4TDEwNzUuODEgMTkwLjQ0TDQ5OC44MyAyNC45MjkyWiIgZmlsbD0iI2U0OWI2YiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yOTEuOTQgNTAuMjA5Mkw3MjQuMSA5OC40Nzk0TDgyNS4yNC03NzcuMzQzTDM5My4wOC04MjUuNjEzTDI5MS45NCA1MC4yMDkyWiIgZmlsbD0iIzc5Nzc3NyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDY0LjAwOTNMMjM2Ljc3IDU5LjQwOTNMMjI5Ljg3LTI2Mi40MTJMLTQuNi0yNTcuODIyTDAgNjQuMDA5M1oiIGZpbGw9IiMwOTIzMWIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjg1LjAzIDI0LjkyOTJMNzEwLjMyIDExNi44NzlMMTY5Ni40OC0xNDkuNzgxTDE2NzEuMTktMjQxLjczMkw2ODUuMDMgMjQuOTI5MloiIGZpbGw9IiMzNDY0OGYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzguMTYgMjQuOTI5MkwtMTA4LjA0IDEwOS45NzlMNzUuODYgNTE5LjE2MUwyNjIuMDYgNDM0LjExTDc4LjE2IDI0LjkyOTJaIiBmaWxsPSIjYWM1YzFkIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU1OC42IDQxLjAxOTJMNTE3LjIyIDc3Ljc5OTNMNjcxLjI0IDI0MS4wMUw3MTIuNjIgMjA0LjIzTDU1OC42IDQxLjAxOTJaIiBmaWxsPSIjYTUzNTAwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTgzNC40NSA4Mi4zOTkzTDY3My41NCAxNDkuMDZMNzQyLjUgMzA3LjY3TDkwMy40MSAyNDEuMDFMODM0LjQ1IDgyLjM5OTNaIiBmaWxsPSIjOWI5OWE1IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI3My41NSAxMTYuODc5TDM5Ny42OCAxODUuODRMNDk4LjgyLTIuNjYwOTFMMzc0LjY5LTcxLjYyMTFMMjczLjU1IDExNi44NzlaIiBmaWxsPSIjNmI3NjdiIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI5MS45NC00NC4wNDFMNTk5Ljk3IDYuNTI5MTNMNjgyLjcyLTQ5MC4wMDJMMzc0LjY5LTU0MC41NzJMMjkxLjk0LTQ0LjA0MVoiIGZpbGw9IiMyOTY2N2UiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTM3LjkxLTkuNTUwOTNMNTYwLjkgMzQuMTI5Mkw3OTcuNjctMTAzLjgwMUw3NzQuNjgtMTQ1LjE4MUw1MzcuOTEtOS41NTA5M1oiIGZpbGw9IiNjYjgwNTEiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTUxLjctOS41NTA5M0w0NDMuNjYgNzMuMTk5M0w1MDEuMTMgMTQ2Ljc2TDYwOS4xNyA2NC4wMDkzTDU1MS43LTkuNTUwOTNaIiBmaWxsPSIjZWY2MjAwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPC9nPgo8L2c+CjwvZz4KPC9zdmc+Cg=="},73264:(I,i,M)=>{M.d(i,{Z:()=>e});const e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM5NSAyODgiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjI4OCIgd2lkdGg9IjM5NSIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik0wIDBMMzk1IDBMMzk1IDBMMzk1IDI4OEwzOTUgMjg4TDAgMjg4TDAgMjg4TDAgMEwwIDBaIiBmaWxsPSIjOTE3OTY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzQgMTI0TC03NiAzNThMMTEzIDQ3OEwyNjMgMjQ0TDc0IDEyNFoiIGZpbGw9IiNmZjdkMGIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjgxIDIyMEw0ODcgMTkyTDQ3NyAxMTlMMjcxIDE0N0wyODEgMjIwWiIgZmlsbD0iIzBlNGY4NiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNiA1NkwxNTQgMTAwTDIwMi00M0w3NC04N0wyNiA1NloiIGZpbGw9IiMwNjZhOTQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjMyIDE5MUwxODYgNDE1TDUwMyA0ODBMNTQ5IDI1NkwyMzIgMTkxWiIgZmlsbD0iI2NkYTU5YiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00MCAxMTVMLTE3MSAyMzBMLTMyIDQ4NUwxNzggMzcwTDQwIDExNVoiIGZpbGw9IiNmZWE2NDEiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjYyIDc2TDMwOSAxNDNMNTMyLTExTDQ4NS03OEwyNjIgNzZaIiBmaWxsPSIjNTIzZDRkIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ4IDEyN0wxOTQgMzI3TDI1MiAyODRMMTA2IDg0TDQ4IDEyN1oiIGZpbGw9IiNiYzQ5MDYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTIgN0wtMjAgNDlMNjQgMTEyTDk2IDcwTDEyIDdaIiBmaWxsPSIjMDA2MjkxIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTkwIDIyMUwxOSAzMDZMMTAxIDM3MkwxNzIgMjg3TDkwIDIyMVoiIGZpbGw9IiNlMmQyYmIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTYxIDQ4TDExNCA3OUwxOTkgMjA0TDI0NiAxNzNMMTYxIDQ4WiIgZmlsbD0iIzJkNjA4NSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMjAgMTUyTDEwNyAyMjZMMTMxIDIyOUwxNDQgMTU1TDEyMCAxNTJaIiBmaWxsPSIjNTExZTAyIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQgNDVMLTE1NCAxOTdMLTk1IDI1N0w2MiAxMDVMNCA0NVoiIGZpbGw9IiM0NDc0ODQiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNODQgMTQzTC0xNDQgMTc4TC0xMzAgMjYzTDk3IDIyOEw4NCAxNDNaIiBmaWxsPSIjZGU3MzA4IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTExOCAxOTZMMTAzIDIxMkwyMTAgMzA2TDIyNSAyOTBMMTE4IDE5NloiIGZpbGw9IiM2ZTI3MDAiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTg4IDUxTDM2OCAyNEwzMzQtMjAyTDE1NC0xNzVMMTg4IDUxWiIgZmlsbD0iI2NiNzU0MCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="}}]);