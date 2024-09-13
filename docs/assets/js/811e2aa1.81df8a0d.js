"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[7041],{91177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(74848),r=n(28453);const a={sidebar_position:7},s="Extracting linkage keys",o={id:"guides/extracting-data",title:"Extracting linkage keys",description:"LinXmart is designed to provide linkage keys identifying records belonging to the same person within and across datasets.",source:"@site/versioned_docs/version-1.11.7/guides/extracting-data.md",sourceDirName:"guides",slug:"/guides/extracting-data",permalink:"/docs/guides/extracting-data",draft:!1,unlisted:!1,tags:[],version:"1.11.7",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Reviewing linkage quality",permalink:"/docs/guides/quality-review"},next:{title:"Rolling back data (undo!)",permalink:"/docs/guides/rollback"}},c={},d=[{value:"Snapshot Extraction Projects",id:"snapshot-extraction-projects",level:2},{value:"Enduring Keys Extraction Projects",id:"enduring-keys-extraction-projects",level:2},{value:"Adding an Extraction Project",id:"adding-an-extraction-project",level:2},{value:"Requesting a data extraction",id:"requesting-a-data-extraction",level:2},{value:"Extraction output",id:"extraction-output",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"extracting-linkage-keys",children:"Extracting linkage keys"})}),"\n",(0,i.jsxs)(t.p,{children:["LinXmart is designed to provide ",(0,i.jsx)(t.em,{children:"linkage keys"})," identifying records belonging to the same person within and across datasets."]}),"\n",(0,i.jsxs)(t.p,{children:["Data extractions in LinXmart occur within each Linkage Project. Before a data extraction can occur, an Extraction Project must be created. An Extraction Project can be used to represent  a snapshot in time of the linkage map for the Linkage Project, or it can be used as a mechanism for obtaining linkage keys for the Linkage Project that ",(0,i.jsx)(t.em,{children:"endure"})," over time. A Linkage Project may have any number of snapshot-based Extraction Projects representing the linkage map at different points in time."]}),"\n",(0,i.jsx)(t.h2,{id:"snapshot-extraction-projects",children:"Snapshot Extraction Projects"}),"\n",(0,i.jsx)(t.p,{children:"This is the traditional type of Extraction Project used by LinXmart. Data that is extracted from this type of Extraction Project will always represent a snapshot of the linkage map at a particular point in time. This point in time is the date and time that the Extraction Project is created. Extracted linkage keys are masked for each Extraction Project in order to prevent data from different Extraction Projects being joined/merged, which could potentially allow users of the linked data to gain more information that they have approval for. The masking used for linkage keys in each Extraction Project is unique to that Extraction Project, and the linkage keys will never match those in another Extraction Project. However, the masking within an Extraction Project is the same for all records across all event types, allowing researchers to match encrypted person identifiers within and across event types."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Record ID"}),(0,i.jsx)(t.th,{children:"Group ID in LinXmart"}),(0,i.jsx)(t.th,{children:"Masked Linkage Key for Extraction Project 1"}),(0,i.jsx)(t.th,{children:"Masked Linkage Key for Extraction Project 2"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Record001"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"50E01D95563D"}),(0,i.jsx)(t.td,{children:"CFB1A0394AB15"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Record002"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"50E01D95563D"}),(0,i.jsx)(t.td,{children:"CFB1A0394AB15"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Record003"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"3092132E3128"}),(0,i.jsx)(t.td,{children:"FFA10A0A679E1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Record004"}),(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"2586F42C23A3"}),(0,i.jsx)(t.td,{children:"0F20EEC0C91C2"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Linkage keys are masked between Extraction Projects, to prevent the potential pooling of data by users"})}),"\n",(0,i.jsx)(t.p,{children:"Data extractions occur at a point in time, the data at which the Extraction Project was created, regardless of the data that has been added after this point. As the linkage map (the relationship between records and linkage keys) can change at any time due to new records being ingested or quality reviews being performed, it is crucial that the linkage keys extracted 'match up' and inconsistencies are not formed due to the dynamic nature of the linkage map. LinXmart avoids this issue by extracting data at a precisely defined point in time \u2013 specifically the point in time at which the Extraction Project was created. If new data has been added or quality review changes have been made, these are effectively ignored, and the linkage keys are extracted as they looked at that particular point in time."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Do not create an Extraction Project until all of the data has been added and linked!"})}),"\n",(0,i.jsx)(t.h2,{id:"enduring-keys-extraction-projects",children:"Enduring Keys Extraction Projects"}),"\n",(0,i.jsx)(t.p,{children:'An Extraction Project can be created with the ability to produce enduring linkage keys. These linkage keys are tied to the Linkage Project rather than Extraction Project, so two "enduring key" Extraction Projects in the same Linkage Project will produce the same linkage keys. Additionally, these types of Extraction Projects are not confined to a point-in-time snapshot of the linkage map - extractions of linkage keys from these projects will always use the latest version of the linkage map.'}),"\n",(0,i.jsx)(t.p,{children:"Extractions of these types will also add the enduring linkage keys of records from linked Linkage Projects."}),"\n",(0,i.jsx)(t.h2,{id:"adding-an-extraction-project",children:"Adding an Extraction Project"}),"\n",(0,i.jsx)(t.p,{children:"Snapshot Extraction Projects are point-in-time snapshot of the linkage map belonging to a specific Linkage Project - these should only be created once the data required for the extraction has completed linking. Enduring Keys Extraction Projects can be created at any time."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Extraction Projects",src:n(25475).A+"",width:"932",height:"243"})}),"\n",(0,i.jsxs)(t.p,{children:["Extraction Projects are created on the 'Project Details' page by clicking ",(0,i.jsx)(t.code,{children:"Add Extraction Project"})," from the Extraction Projects pane at the bottom of the page."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Add Extraction Project",src:n(30634).A+"",width:"934",height:"251"})}),"\n",(0,i.jsx)(t.p,{children:"The following fields are required:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Reference Id"}),(0,i.jsx)(t.td,{children:"This is a user-defined (and unique) reference ID given to the Project by the Operator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"This describes the research project or administrative/business purpose for which this extraction is being made."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Enduring Linkage Keys"}),(0,i.jsx)(t.td,{children:"Specifies whether a linkage map snapshot is used, or enduring linkage keys and always the latest linkage map."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.code,{children:"Save"})," to create the new Extraction Project. The Extraction Project Detail screen in then shown."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Extraction Project",src:n(20864).A+"",width:"934",height:"468"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Once created Extraction Projects cannot be edited or deleted."})}),"\n",(0,i.jsx)(t.h2,{id:"requesting-a-data-extraction",children:"Requesting a data extraction"}),"\n",(0,i.jsxs)(t.p,{children:["An extraction can be requested for an Extraction Project by clicking on the ",(0,i.jsx)(t.code,{children:"Request New Data Extraction"})," button/link on the Extraction Project Details page. This presents the user with a list of all Event Types used by the project. Data is extracted per Event Type."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Request Data Extraction",src:n(14153).A+"",width:"930",height:"361"})}),"\n",(0,i.jsxs)(t.p,{children:["Check the box next to each Event Type that requires extraction and click the ",(0,i.jsx)(t.code,{children:"Request"})," button. A Job will be created for each Event Type to gather the required data and create the extraction."]}),"\n",(0,i.jsx)(t.h2,{id:"extraction-output",children:"Extraction output"}),"\n",(0,i.jsx)(t.p,{children:"Once the extraction for an Event Type is completed, the results will be available to download from the Extraction Project Details page. Click on the download icon in the Options column for the desired Extraction Result. Each requested Event Type will be available separately."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Extraction Project",src:n(25469).A+"",width:"1398",height:"684"})}),"\n",(0,i.jsxs)(t.p,{children:["The format of the downloaded linkage map is a LinXmart ",(0,i.jsx)(t.a,{href:"/docs/concepts/envelopes",children:"Envelope"}),". It is a zip file that contains two files:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A manifest file, ",(0,i.jsx)(t.code,{children:"manifest.xml"}),", that describes what the data is, with references to the ",(0,i.jsx)(t.a,{href:"/docs/concepts/linkage-projects",children:"Linkage Project"}),", ",(0,i.jsx)(t.a,{href:"/docs/concepts/data-providers",children:"Data Provider"})," and ",(0,i.jsx)(t.a,{href:"/docs/concepts/event-types",children:"Event Type"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The data file, ",(0,i.jsx)(t.code,{children:"data-extract.csv"}),", a delimited text file that represents the linkage map for a specific ",(0,i.jsx)(t.a,{href:"/docs/concepts/event-types",children:"Event Type"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The data file is in comma delimited format with a number of fields:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ProjectCode"}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.code,{children:"Code"})," of the ",(0,i.jsx)(t.a,{href:"/docs/concepts/linkage-projects",children:"Linkage Project"})," that the Extraction Request is a part of."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SourceUniqueID"}),(0,i.jsx)(t.td,{children:"The original record identifier supplied on the records when ingested into the system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SourcePersonId"}),(0,i.jsx)(t.td,{children:"If a jurisdictional linkage key (i.e. a dataset specific person identifier) was provided on the dataset, this field is also output here. If not, this field is left blank."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PersonKey"}),(0,i.jsx)(t.td,{children:"The linkage key for the record, specifically for this Extraction Project. Records with the same PersonKey belong to the same person; records with different PersonKeys belong to different people."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LinkedProjectPersonKey"}),(0,i.jsx)(t.td,{children:"If the record is from a linked project, this will be the enduring linkage key for the record from that other Linkage Project."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},14153:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/data-extraction-request-a97a45ec998eefea105514f480c6e94d.png"},30634:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/extraction-project-add-114640841590c1237ed9b67e08fc6af8.png"},25475:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/extraction-project-list-fc666fba9c02b292bf7f07ab6fbdecaa.png"},25469:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/extraction-project-view-results-2d9c951a02b3fbf77d43d046e189fc55.png"},20864:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/extraction-project-view-6eaa28d4776c7fe21f480d1690fc9feb.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);