"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[8098],{74508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(74848),i=n(28453);const a={sidebar_position:9},o="Destroying record-level data",s={id:"guides/destroying-record-data",title:"Destroying record-level data",description:"LinXmart stores personally identifying information (PII) as part of the process of linking datasets together. However, sometimes it is required (by agreement) or desired to destroy the PII data after it has been used. LinXmart can clear the sensitive PII data stored for records without deleting the linkage itself.",source:"@site/docs/guides/destroying-record-data.md",sourceDirName:"guides",slug:"/guides/destroying-record-data",permalink:"/docs/next/guides/destroying-record-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Rolling back data (undo!)",permalink:"/docs/next/guides/rollback"},next:{title:"Project to project linkage",permalink:"/docs/next/guides/project-to-project"}},l={},d=[{value:"Detaching an Event Type from a Linkage Project",id:"detaching-an-event-type-from-a-linkage-project",level:2},{value:"Deleting an Event Type",id:"deleting-an-event-type",level:2},{value:"Deleting a Data Provider",id:"deleting-a-data-provider",level:2}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"destroying-record-level-data",children:"Destroying record-level data"})}),"\n",(0,r.jsx)(t.p,{children:"LinXmart stores personally identifying information (PII) as part of the process of linking datasets together. However, sometimes it is required (by agreement) or desired to destroy the PII data after it has been used. LinXmart can clear the sensitive PII data stored for records without deleting the linkage itself."}),"\n",(0,r.jsx)(t.p,{children:"There are several ways to trigger this:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#detaching-an-event-type-from-a-linkage-project",children:"Detaching an Event Type from a Linkage Project"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#deleting-an-event-type",children:"Deleting an Event Type"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#deleting-a-data-provider",children:"Deleting a Data Provider"})}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"These actions will irreversibly delete PII data within the system. They are considered high privilege actions, so if you are unable to see or access any of the described options, you may not have sufficient permissions. Please contact your LinXmart administrator."})}),"\n",(0,r.jsx)(t.h2,{id:"detaching-an-event-type-from-a-linkage-project",children:"Detaching an Event Type from a Linkage Project"}),"\n",(0,r.jsx)(t.p,{children:"As well as deleting an Event Type completely from the system, an Event Type can be deleted from a specific Linkage Project. Effectively, this means the Event Type will be \u2018detached\u2019 from that project. It will still exist and be available in the system.\r\nTo delete an Event Type from a Linkage Project, from the PROJECTS tab, select the project of interest and select \u2018Event Types\u2019 from the menu in the top right-hand corner. This brings up the Event Type Members screen (shown in Figure 41). From here Event Types can be deleted from a Linkage Project by selecting the icon in the Options column for the specific Event Type."}),"\n",(0,r.jsx)(t.p,{children:"Figure 41: Event Types can be removed from a Linkage Project through the Event Type Members screen"}),"\n",(0,r.jsx)(t.p,{children:"Deleting an Event Type member from a Linkage Project will trigger an End-Date Event Type job."}),"\n",(0,r.jsx)(t.p,{children:"This job will perform the following tasks:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Mark as End-Dated the Event Type\u2019s appearance in the Linkage Project"}),"\n",(0,r.jsx)(t.li,{children:"Mark as End-Dated all records for this Event Type in the Linkage Project"}),"\n",(0,r.jsx)(t.li,{children:"Blank all personal identifiers"}),"\n",(0,r.jsx)(t.li,{children:"Mark as End-Dated all pairs and groups associated with these records"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"A grouping job will then be queued which will re-group all affected groups.\r\nAny further Linkage Requests for this Project that refer to the deleted Event Type will not be processed."}),"\n",(0,r.jsx)(t.h2,{id:"deleting-an-event-type",children:"Deleting an Event Type"}),"\n",(0,r.jsx)(t.p,{children:"An Event Type can be deleted from the Edit Data Provider Details screen. First select the owning Data Provider from the PROVIDERS tab. In the Data Provider Details section, select the Edit button in the top right-hand corner, bringing up the Edit Data Provider Details screen (Figure 40). From here, for the Event Type of interest, click the   icon from the Options column to delete."}),"\n",(0,r.jsx)(t.p,{children:"Figure 40: Event Types can be deleted through the Edit Data Provider Details screen"}),"\n",(0,r.jsx)(t.p,{children:"This will trigger an End-Date Event Type job."}),"\n",(0,r.jsx)(t.p,{children:"The End-Date Event Type job will perform the following tasks:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Mark as end-dated all records for this Event Type that appear in any Linkage Project."}),"\n",(0,r.jsx)(t.li,{children:"Blank all personal identifiers (all column values other than the Source Unique ID)."}),"\n",(0,r.jsx)(t.li,{children:"Mark as end-dated the Event Type itself."}),"\n",(0,r.jsx)(t.li,{children:"Mark as end-dated all groups and pairs containing a record of this Event Type."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"After this job is complete, a Group Pairs and Events, and an Execute Grouping Rules job for that Event Type will be queued for each relevant Project. This will regroup all groups and events affected by the above deletion.\r\nAny further Linkage Requests for this Event Type will not be processed."}),"\n",(0,r.jsx)(t.h2,{id:"deleting-a-data-provider",children:"Deleting a Data Provider"}),"\n",(0,r.jsx)(t.p,{children:"A Data Provider can be deleted by selecting the   option for the appropriate Data Provider listed on the PROVIDERS tab.\r\nThis will trigger an End-Date Data Provider job."}),"\n",(0,r.jsx)(t.p,{children:"The End Date Data Provider job will perform the following tasks:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Mark as End-Dated the Data Provider"}),"\n",(0,r.jsx)(t.li,{children:"Mark as End-Dated all Event Types belonging to the Data Provider"}),"\n",(0,r.jsx)(t.li,{children:"Blank all personal identifiers in all records belonging to the Data Provider in all Linkage Projects."}),"\n",(0,r.jsx)(t.li,{children:"Mark as End-Dated all records belonging to the Data Provider in any Event Type in any Linkage Project, along with all pairs and groups containing those records."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"After this job is complete, a Group Pairs and Events, and Execute Grouping Rules job will be queued for each project. This will regroup all groups and events affected by the above deletion."}),"\n",(0,r.jsx)(t.p,{children:"Any further envelopes submitted for this Data Provider will not be processed."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);