"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[7798],{64369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(74848),n=r(28453);const i={sidebar_position:9},a="Import / Export of Data Providers",s={id:"guides/import-export-data-providers",title:"Import / Export of Data Providers",description:"There are a few reasons why you might want to import/export the full data provider configuration:",source:"@site/versioned_docs/version-1.11.7/guides/import-export-data-providers.md",sourceDirName:"guides",slug:"/guides/import-export-data-providers",permalink:"/docs/guides/import-export-data-providers",draft:!1,unlisted:!1,tags:[],version:"1.11.7",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Reporting",permalink:"/docs/guides/reporting"},next:{title:"Import / Export of Linkage Project Settings",permalink:"/docs/guides/import-export-project-config"}},d={},l=[{value:"Export Data Providers",id:"export-data-providers",level:2},{value:"Import Data Providers",id:"import-data-providers",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"import--export-of-data-providers",children:"Import / Export of Data Providers"})}),"\n",(0,o.jsx)(t.p,{children:"There are a few reasons why you might want to import/export the full data provider configuration:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Backup of current configuration"}),"\n",(0,o.jsx)(t.li,{children:"Transfer configuration between environments (e.g. Test and Production)"}),"\n",(0,o.jsx)(t.li,{children:"Manually reviewing the full configuration"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"export-data-providers",children:"Export Data Providers"}),"\n",(0,o.jsxs)(t.p,{children:["The full set of configurations for every ",(0,o.jsx)(t.a,{href:"../concepts/data-providers",children:"Data Provider"})," can be exported from the system into a JSON file. This includes associated ",(0,o.jsx)(t.a,{href:"../concepts/event-types",children:"Event Types"}),", ",(0,o.jsx)(t.a,{href:"../concepts/data-sources",children:"Data Sources"})," and ",(0,o.jsx)(t.a,{href:"../concepts/import-formats",children:"Import Formats"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["On the Data Providers page, you will find a ",(0,o.jsx)(t.code,{children:"Export Data Providers"})," link below the list of providers. Clicking on this link takes you to another page where the download of the full set of data provider configuration will begin immediately."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Data Provider Export",src:r(84578).A+"",width:"1400",height:"255"})}),"\n",(0,o.jsxs)(t.p,{children:["If the download does not automatically occur, you can click on the ",(0,o.jsx)(t.code,{children:"Download"})," icon to manually trigger it."]}),"\n",(0,o.jsx)(t.p,{children:"An example of the beginning of the exported JSON file:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\r\n  "EventCategories": [\r\n    "Hospital Admissions",\r\n    "Category"\r\n  ],\r\n  "ImportFormats": [\r\n    {\r\n      "Name": "Hospital",\r\n      "Type": "ByIndex",\r\n      "IgnoreMissingColumns": false,\r\n      "Columns": [\r\n        {\r\n          "Name": "Source Unique ID",\r\n          "Field": "SourceUniqueId",\r\n          "Index": 1,\r\n          "StartPosition": null,\r\n          "EndPosition": null,\r\n          "Format": null\r\n        },\r\n        {\r\n          "Name": "Given Name",\r\n          "Field": "GivenName",\r\n          "Index": 4,\r\n          "StartPosition": null,\r\n          "EndPosition": null,\r\n          "Format": null\r\n        },\r\n...        \n'})}),"\n",(0,o.jsx)(t.h2,{id:"import-data-providers",children:"Import Data Providers"}),"\n",(0,o.jsx)(t.p,{children:"A JSON file that was created from the data provider export process can be imported into any LinXmart instance, even the one it originated from."}),"\n",(0,o.jsxs)(t.p,{children:["To import data providers, click the ",(0,o.jsx)(t.code,{children:"Import Data Providers"})," link below the list of providers on the Data Providers page. From here, select the JSON file to import and click the ",(0,o.jsx)(t.code,{children:"Import"})," button."]}),"\n",(0,o.jsx)(t.p,{children:"The file will be validated. If it isn't a valid data provider export, an error will be displayed. If it is valid, the system will assess what components of the file, determining conflicts, warnings and errors."}),"\n",(0,o.jsx)(t.p,{children:"A summary of the components in the file will be displayed, along with the validation results that may contain conflicts with existing components in the system."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Data Provider Import Conflicts",src:r(64905).A+"",width:"1425",height:"766"})}),"\n",(0,o.jsx)(t.p,{children:"Below the validation results is a confirmation form, prior to applying the new data. If any conflicts are detected, you will have the option to either ignore item with the conflict or update it. Import formats have an additional option to rename the incoming import format to avoid a conflict."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Data Provider Import Confirm",src:r(96396).A+"",width:"1398",height:"393"})}),"\n",(0,o.jsxs)(t.p,{children:["Once you have determined how to manage the conflicts, click the ",(0,o.jsx)(t.code,{children:"Import"})," button to apply the changes. Alternatively, click the ",(0,o.jsx)(t.code,{children:"Cancel"})," button to completely cancel the import process."]}),"\n",(0,o.jsx)(t.p,{children:"If you do choose to apply the changes, a summary of the changes made will be displayed."})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},84578:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/data-provider-export-75b584d56d6d27a98dd0935215c7af89.png"},96396:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/data-provider-import-confirm-4f1afd27533464a3c905c07a05dbf7ab.png"},64905:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/data-provider-import-conflicts-43bf80cac8883693939c43533574b7c7.png"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var o=r(96540);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);