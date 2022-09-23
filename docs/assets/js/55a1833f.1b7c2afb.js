"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[1080],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),f=o,g=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1822:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:2},r="Loading in a delimited text file",l={unversionedId:"guides/loading-data/loading-text-file",id:"guides/loading-data/loading-text-file",title:"Loading in a delimited text file",description:"Unlike loading Envelopes, loading data directly from a single text file requires some additional context, such as the intended Linkage Project and the Event Type. The Event Type also requires a configured Data Source that supports delimited files.",source:"@site/docs/guides/loading-data/loading-text-file.md",sourceDirName:"guides/loading-data",slug:"/guides/loading-data/loading-text-file",permalink:"/docs/guides/loading-data/loading-text-file",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Loading in an Envelope",permalink:"/docs/guides/loading-data/loading-envelope"},next:{title:"Loading data directly from a database",permalink:"/docs/guides/loading-data/loading-from-database"}},d={},s=[{value:"Load new data for linkage",id:"load-new-data-for-linkage",level:2},{value:"Load data from a specific data source",id:"load-data-from-a-specific-data-source",level:2}],c={toc:s};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loading-in-a-delimited-text-file"},"Loading in a delimited text file"),(0,o.kt)("p",null,"Unlike ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/loading-data/loading-envelope"},"loading Envelopes"),", loading data directly from a single text file requires some additional context, such as the intended ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/linkage-projects"},"Linkage Project")," and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/event-types"},"Event Type"),". The Event Type also requires a configured ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/data-sources"},"Data Source")," that supports ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/data-sources#delimited-file-data-source"},"delimited files"),"."),(0,o.kt)("p",null,"Loading a delimited text file for linkage is done from within a Linkage Project, and can be triggered in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Directly from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Linkages")," panel on a specific Linkage Project summary page"),(0,o.kt)("li",{parentName:"ul"},"From the ",(0,o.kt)("inlineCode",{parentName:"li"},"Event Type Data Sources")," page of a specific Linkage Project")),(0,o.kt)("h2",{id:"load-new-data-for-linkage"},"Load new data for linkage"),(0,o.kt)("p",null,"On the summary page for a Linkage Project, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Linkages")," panel that will contain a list of all linkages that have been run in the context of the project. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Linkages",src:a(5868).Z,width:"1401",height:"438"})),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Load New Data For Linkage")," button/link below this list."),(0,o.kt)("p",null,"You are presented with a form where you will need to choose:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/event-types"},"Event Type")," to classify the data"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/data-sources"},"Data Source")," that defines the format of the data file"),(0,o.kt)("li",{parentName:"ul"},"the local delimited text file to upload for linkage")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Load Data",src:a(422).Z,width:"1398",height:"401"})),(0,o.kt)("p",null,"Once each of these fields has been selected, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Load")," button to upload the data ready to link. You will then be presented with a summary and confirmation form."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Load Data Confirm",src:a(8397).Z,width:"1401",height:"673"})),(0,o.kt)("p",null,"All files that are uploaded are presented internally as 'Envelopes'. At this point you have the ability to give the new Envelope a custom name or you can leave the default one that was generated for you. Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Load")," button here to trigger the linkage."),(0,o.kt)("h2",{id:"load-data-from-a-specific-data-source"},"Load data from a specific data source"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Event Type Data Sources")," page for a Linkage Project lists all ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/event-types"},"Event Types")," and their associated ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/data-sources"},"Data Sources")," that are attached to the project."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Project Data Sources",src:a(6669).Z,width:"876",height:"451"})),(0,o.kt)("p",null,"For every ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/data-sources"},"Data Source")," that supports a direct file upload, an upload icon is shown in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Options")," column. Click on this button and you will be presented with the 'Load Data' form, as you are when ",(0,o.kt)("a",{parentName:"p",href:"#load-new-data-for-linkage"},"triggered from the Linkages panel"),". This time, however, the Event Type and Data Source are already populated with the required items. Select the file to upload and continue on as before."))}p.isMDXComponent=!0},5868:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkages-list-d62b867534843726049165d9cd98f362.png"},8397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkages-load-data-confirm-67973c668b57b51126d4167110b2974a.png"},422:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkages-load-data-f7fa11116d245fea62e66fa58e9bd8c3.png"},6669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project-datasources-bd757a0d4348e4231f41a9294d025a97.png"}}]);