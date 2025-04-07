"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[1984],{56038:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=i(74848),n=i(28453);const o={sidebar_position:3},s="Data file formats",a={id:"guides/loading-data/data-formats",title:"Data file formats",description:"Specific file formats are required for the different types of data that can be loaded into a Linkage Project.",source:"@site/versioned_docs/version-1.11.7/guides/loading-data/data-formats.md",sourceDirName:"guides/loading-data",slug:"/guides/loading-data/data-formats",permalink:"/docs/1.11.7/guides/loading-data/data-formats",draft:!1,unlisted:!1,tags:[],version:"1.11.7",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Bulk load of multiple data sets",permalink:"/docs/1.11.7/guides/loading-data/loading-from-project/loading-batch"},next:{title:"Monitoring jobs and envelopes",permalink:"/docs/1.11.7/guides/monitoring-jobs"}},d={},l=[{value:"Linkage and Probability Estimation",id:"linkage-and-probability-estimation",level:2},{value:"Deletion",id:"deletion",level:2},{value:"Batch Quality Review",id:"batch-quality-review",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"data-file-formats",children:"Data file formats"})}),"\n",(0,r.jsx)(t.p,{children:"Specific file formats are required for the different types of data that can be loaded into a Linkage Project."}),"\n",(0,r.jsx)(t.h2,{id:"linkage-and-probability-estimation",children:"Linkage and Probability Estimation"}),"\n",(0,r.jsxs)(t.p,{children:["The file formats for Linkages and Probability Estimation will differ for each ",(0,r.jsx)(t.a,{href:"/docs/1.11.7/concepts/data-sources",children:"Data Source"}),". The ",(0,r.jsx)(t.a,{href:"/docs/1.11.7/concepts/import-formats",children:"Import Format"})," specified for the Data Source will determine the exact format of the file."]}),"\n",(0,r.jsx)(t.h2,{id:"deletion",children:"Deletion"}),"\n",(0,r.jsx)(t.p,{children:"The data file is a simple text file with a single value per line, representing the Source Unique ID of the records to be deleted."}),"\n",(0,r.jsx)(t.p,{children:"An example of the data file is shown here."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",metastring:'title="data.csv"',children:"suid_0001\r\nsuid_0002\r\nsuid_0003\r\nsuid_0004\n"})}),"\n",(0,r.jsx)(t.p,{children:"The same Event Type applies to the entire data set and is defined either by the Envelope manifest, or manually by the user on upload."}),"\n",(0,r.jsx)(t.h2,{id:"batch-quality-review",children:"Batch Quality Review"}),"\n",(0,r.jsx)(t.p,{children:"The data file should be a comma delimited file with four fields and without a header row. It contains a list of records that are to be re-grouped, identifying which records should be grouped together."}),"\n",(0,r.jsx)(t.p,{children:"An example of the data file is shown here."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",metastring:'title="data.csv"',children:"CORE,suid_0001,WAMORB,1\r\nCORE,suid_0002,WAMORB,1\r\nCORE,suid_0003,WAMORB,2\r\nCORE,suid_0004,WAMORB,2\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The above example will put four existing records in the ",(0,r.jsx)(t.code,{children:"CORE"})," linkage project into two groups. All four records are in the ",(0,r.jsx)(t.code,{children:"WAMORB"})," event type."]}),"\n",(0,r.jsx)(t.p,{children:"The columns are described in more detail below."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"right"}}),(0,r.jsx)(t.th,{children:"Column"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"1"}),(0,r.jsx)(t.td,{children:"Linkage Project Code"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.a,{href:"/docs/1.11.7/concepts/linkage-projects",children:"Linkage Project"})," ",(0,r.jsx)(t.code,{children:"Code"})," refers to the project in which the event record was originally defined. In most cases, all rows in the file will have the same value for this field. For ",(0,r.jsx)(t.a,{href:"/docs/1.11.7/guides/project-to-project",children:"Project-to-Project linkage"}),", the ",(0,r.jsx)(t.code,{children:"Code"})," of the originating Linkage Project for that event type must be chosen."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"2"}),(0,r.jsx)(t.td,{children:"Source Unique ID"}),(0,r.jsxs)(t.td,{children:["The source record identifier provided in each record that is unique to the ",(0,r.jsx)(t.a,{href:"/docs/1.11.7/concepts/event-types",children:"Event Type"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"3"}),(0,r.jsx)(t.td,{children:"Event Type Code"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.code,{children:"Code"})," of the ",(0,r.jsx)(t.a,{href:"/docs/1.11.7/concepts/event-types",children:"Event Type"})," for the record, as determined during ingestion."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"4"}),(0,r.jsx)(t.td,{children:"Target Group"}),(0,r.jsx)(t.td,{children:"This refers to the new group to which this record will belong. The exact value chosen here is not important, but the same number must be assigned to all the records that are to belong to the same group, with a different number assigned to records that are not to belong to this group. The numbers used here do not correspond to the internal Group IDs that the system will assign.  i.e. if an internal Group ID of 3 already exists in the database and an operator assigns a Target Group ID of 3 to one or more records, the new records will enter the system with a new Group ID (not 3!) and the existing record/s with Group ID = 3 will remain unaffected."})]})]})]}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.p,{children:["If one record from a group is being modified through a Batch Quality Review request, then ",(0,r.jsx)(t.em,{children:"all"})," records in that group must be included in this request. For an example, an Operator wants to move ",(0,r.jsx)(t.em,{children:"record1"})," from group ",(0,r.jsx)(t.code,{children:"A"})," to group ",(0,r.jsx)(t.code,{children:"B"})," - they would need to submit a data file of the required format that:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Lists all records in group ",(0,r.jsx)(t.code,{children:"A"})," other than ",(0,r.jsx)(t.em,{children:"record1"}),", and assigns them one target group value"]}),"\n",(0,r.jsxs)(t.li,{children:["Lists all records in group ",(0,r.jsx)(t.code,{children:"B"}),", along with ",(0,r.jsx)(t.em,{children:"record1"}),", and assigns them a different target group value"]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var r=i(96540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);