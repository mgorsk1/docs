"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,g=h["".concat(c,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:7},s="Working with Schemas",i={unversionedId:"spec/schemas",id:"spec/schemas",title:"Working with Schemas",description:"OpenLineage is a rapidly growing open source project, and therefore, will face many new changes in its SPEC. The spec file is based on JSON schema specification and defines how the OpenLineage's event message would be structured. More details on what are defined in its object model can be found here.",source:"@site/docs/spec/schemas.md",sourceDirName:"spec",slug:"/spec/schemas",permalink:"/docs/spec/schemas",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/schemas.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Producers",permalink:"/docs/spec/producers"},next:{title:"Java",permalink:"/docs/client/java"}},c={},l=[{value:"Create a new issue with label <code>spec</code>",id:"create-a-new-issue-with-label-spec",level:2},{value:"Make changes to the spec&#39;s version",id:"make-changes-to-the-specs-version",level:2},{value:"Python client&#39;s codes need to be manually updated",id:"python-clients-codes-need-to-be-manually-updated",level:2},{value:"Add test cases",id:"add-test-cases",level:2},{value:"Test the SPEC change using code generation and integration tests",id:"test-the-spec-change-using-code-generation-and-integration-tests",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-schemas"},"Working with Schemas"),(0,o.kt)("p",null,"OpenLineage is a rapidly growing open source project, and therefore, will face many new changes in its ",(0,o.kt)("inlineCode",{parentName:"p"},"SPEC"),". The spec file is based on ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON schema specification")," and defines how the OpenLineage's event message would be structured. More details on what are defined in its object model can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/spec/object-model"},"here"),"."),(0,o.kt)("p",null,"When you are working in the OpenLineage project and decided to introduce a new facet or make changes to existing facets, you have to know what needs to be done and also understand how the general build and test process works, so that the OpenLineage specs are well maintained and does not break anything."),(0,o.kt)("p",null,"The following guidelines may help you to correctly introduce new changes."),(0,o.kt)("h2",{id:"create-a-new-issue-with-label-spec"},"Create a new issue with label ",(0,o.kt)("inlineCode",{parentName:"h2"},"spec")),(0,o.kt)("p",null,"Before you decide to make any changes, it is best advised that you first label your issue with ",(0,o.kt)("inlineCode",{parentName:"p"},"spec"),". This will indicate the the issue is related to any changes in the current OpenLineage spec."),(0,o.kt)("h2",{id:"make-changes-to-the-specs-version"},"Make changes to the spec's version"),(0,o.kt)("p",null,"Whenever there is a change to existing spec file (JSON), you need to bump up the version of the existing current spec, so that the changes can go through the code generation and gradle build. Consider the following spec file, where you will see the URL in ",(0,o.kt)("inlineCode",{parentName:"p"},"$id")," that shows what is the current spec version the file currently is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://openlineage.io/spec/facets/1-0-1/ColumnLineageDatasetFacet.json",\n  "$defs": {\n')),(0,o.kt)("p",null,"In this example, bumping up the version to the new value, should be changed from 1-0-1 to 1-0-2."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://openlineage.io/spec/facets/1-0-2/ColumnLineageDatasetFacet.json",\n  "$defs": {\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you do not bump the version to higher number, the code generation of Java client will fail.")),(0,o.kt)("h2",{id:"python-clients-codes-need-to-be-manually-updated"},"Python client's codes need to be manually updated"),(0,o.kt)("p",null,"Java client's build process does involve ",(0,o.kt)("inlineCode",{parentName:"p"},"code generation")," that automatically produces OpenLineage classes derived from the spec files, so you do not need to do anything in terms of coding the client. However, python client libraries does not depend on the spec files to be generated, so you have to make sure to add changes to the python code in order for it to know and use the changes. As for the facets, they are implemented ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/client/python/openlineage/client/facet.py"},"here"),", so generally, you need to apply necessary changes to it. As for the general structure of OpenLineage's run events, it can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/client/python/openlineage/client/run.py"},"here"),"."),(0,o.kt)("h2",{id:"add-test-cases"},"Add test cases"),(0,o.kt)("p",null,"Make sure to add changes to the unit tests for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/python/tests"},"python")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java/src/test/java/io/openlineage/client"},"java")," to make sure the unit test can be performed against your new SPEC changes. Refer to existing test codes to add yours in."),(0,o.kt)("h2",{id:"test-the-spec-change-using-code-generation-and-integration-tests"},"Test the SPEC change using code generation and integration tests"),(0,o.kt)("p",null,"When you have modified the SPEC file(s), always make sure to perform code generation and unit tests by going into ",(0,o.kt)("inlineCode",{parentName:"p"},"client/java")," and running ",(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew generateCode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew test"),". As for python, cd into ",(0,o.kt)("inlineCode",{parentName:"p"},"client/python")," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"pytest"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Some of the tests may fail due to the fact that they require external systems like kafka. You can ignore those errors.")))}d.isMDXComponent=!0}}]);