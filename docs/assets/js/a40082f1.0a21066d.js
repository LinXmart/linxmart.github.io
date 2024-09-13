"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[6617],{36961:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>g,toc:()=>c});var r=n(74848),t=n(28453);const o={sidebar_position:2},s="Merge vs best-link grouping",g={id:"guides/grouping-config",title:"Merge vs best-link grouping",description:"The matching process performed by LinXmart results in a number of matching pairs that represent weighted likelihoods between different records. In order to create sets (or groups) of records that represent individual entities, these pairs need to go through a grouping process. By default, LinXmart uses a merge-based grouping strategy.",source:"@site/docs/guides/grouping-config.md",sourceDirName:"guides",slug:"/guides/grouping-config",permalink:"/docs/next/guides/grouping-config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Defining matching strategies",permalink:"/docs/next/guides/matching-config"},next:{title:"Data pre-processing",permalink:"/docs/next/guides/data-preprocessing"}},a={},c=[{value:"Merge grouping",id:"merge-grouping",level:2},{value:"Weighted best-link grouping",id:"weighted-best-link-grouping",level:2},{value:"Grouping configuration",id:"grouping-configuration",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"merge-vs-best-link-grouping",children:"Merge vs best-link grouping"})}),"\n",(0,r.jsxs)(i.p,{children:["The matching process performed by LinXmart results in a number of ",(0,r.jsx)(i.em,{children:"matching pairs"})," that represent weighted likelihoods between different records. In order to create sets (or groups) of records that represent individual entities, these pairs need to go through a grouping process. By default, LinXmart uses a merge-based grouping strategy."]}),"\n",(0,r.jsx)(i.h2,{id:"merge-grouping",children:"Merge grouping"}),"\n",(0,r.jsxs)(i.p,{children:["The merge grouping process involves amalgamating all record-pairs together. Records belong to the same person if they are directly connected (i.e. there is a record-pair that joins them together) or indirectly connected (i.e. through other connected records). While records ",(0,r.jsx)(i.code,{children:"B"})," and ",(0,r.jsx)(i.code,{children:"E"})," did not form a pair through linkage, they are indirectly connected, through records ",(0,r.jsx)(i.code,{children:"C"})," and ",(0,r.jsx)(i.code,{children:"D"}),", and so are classified as the same person."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Merge Grouping",src:n(61267).A+"",width:"889",height:"289"})}),"\n",(0,r.jsx)(i.h2,{id:"weighted-best-link-grouping",children:"Weighted best-link grouping"}),"\n",(0,r.jsxs)(i.p,{children:["LinXmart also includes an alternate grouping approach which in certain circumstances can improve linkage quality, known as ",(0,r.jsx)(i.em,{children:"weighted best-link grouping"}),". Weighted best-link grouping is similar to merge-based grouping, but with one key difference; existing groups in the ",(0,r.jsx)(i.a,{href:"/docs/next/concepts/linkage-projects",children:"Linkage Project"})," cannot be merged together by incoming records. Depending on the associated pairs found, a new record may join an existing group, or form a new group. A new record cannot cause the merging of two or more existing groups."]}),"\n",(0,r.jsxs)(i.p,{children:["Pairs are processed in descending weighted order, beginning with any pair created from a ",(0,r.jsx)(i.a,{href:"/docs/next/guides/matching-config#deterministic-strategy",children:"deterministic match strategy"}),". Any pairing that would result in the merging of two existing groups is ignored. Here is an example:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Best-link Grouping",src:n(20837).A+"",width:"275",height:"332"})}),"\n",(0,r.jsxs)(i.p,{children:["Here the pair ",(0,r.jsx)(i.code,{children:"A-Y"})," is processed first as it has the highest confidence score, resulting in record ",(0,r.jsx)(i.code,{children:"A"})," joining record ",(0,r.jsx)(i.code,{children:"Y"}),"\u2019s group. The pair ",(0,r.jsx)(i.code,{children:"A-B"})," is processed second, resulting in record ",(0,r.jsx)(i.code,{children:"B"})," also joining record ",(0,r.jsx)(i.code,{children:"Y"}),"\u2019s group. Pair ",(0,r.jsx)(i.code,{children:"B-Z"})," is processed last and because record ",(0,r.jsx)(i.code,{children:"B"})," is already a member of ",(0,r.jsx)(i.code,{children:"Y"}),"\u2019s group, this pair is ignored."]}),"\n",(0,r.jsx)(i.p,{children:"If a new record does not match to any existing record, then it will form its own group. In future linkages using this grouping strategy, it will not be able to 'merge' with other existing groups."}),"\n",(0,r.jsx)(i.p,{children:"Unlike Merge based grouping, with Weighted best-link grouping, the order in which envelopes of records are processed can influence the final groupings that are formed."}),"\n",(0,r.jsx)(i.p,{children:"When a record is deleted under Weighted best-link grouping, all remaining records in the group are then re-grouped, as if they have just arrived into the system for the first time. These records then have the opportunity to join to any existing group but not to merge existing groups."}),"\n",(0,r.jsx)(i.p,{children:"While deleting a record under Merge grouping will result in the same group structure that would have existed had that record never entered the system, this is not necessarily the case with Weighted Best-Link grouping."}),"\n",(0,r.jsx)(i.p,{children:"Weighted best-link grouping is particularly useful when linking against a pre-existing repository of linked records for which you have confidence in their linkage quality. Weighted best-link grouping essentially allows you to leverage this pre-existing quality; whenever an incoming record attempts to join two pre-existing groups together, as we have confidence in the current groups, under this grouping strategy this join is ignored."}),"\n",(0,r.jsx)(i.h2,{id:"grouping-configuration",children:"Grouping configuration"}),"\n",(0,r.jsxs)(i.p,{children:["The grouping configuration is set for each ",(0,r.jsx)(i.a,{href:"/docs/next/concepts/linkage-projects",children:"Linkage Project"}),". The grouping configuration can be changed at any time \u2013 upon modifying, all future linkages will use the new configuration, while past linkages will remain unchanged."]}),"\n",(0,r.jsxs)(i.p,{children:["To view or edit the group configuration for a ",(0,r.jsx)(i.a,{href:"/docs/next/concepts/linkage-projects",children:"Linkage Project"}),", open the Project Details page by selecting the Linkage Project from the ",(0,r.jsx)(i.code,{children:"PROJECTS"})," tab. From here, click ",(0,r.jsx)(i.code,{children:"Group Config"})," from the options in the top right of the pane. The View Grouping Configuration page will appear, showing the current grouping strategy for the project. By clicking the ",(0,r.jsx)(i.code,{children:"Edit"})," button in the top right of the pane, the operator can edit this configuration."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Edit Grouping Config",src:n(53008).A+"",width:"929",height:"185"})}),"\n",(0,r.jsx)(i.p,{children:"For each of the 'merge' and 'best-link' grouping types, you can choose whether it is disk based or in-memory. Disk based will use local disk on the server to cache the groups during processing. In-memory will use a memory based cache. In-memory will be faster, but should be selected with care as very large linkage projects may consume large amounts of memory."}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"You can start with in-memory grouping and monitor the server's usage over time to understand how your data affects resources on the server."})})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},20837:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/grouping-bestlink-7e187e057cc7dd3c48febd7a395dc1ce.png"},53008:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/grouping-config-edit-e84f0aa61532e7e413832e8eabb95fad.png"},61267:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/grouping-merge-1cb781b5a0dddc7658b1025fa0732c81.png"},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>g});var r=n(96540);const t={},o=r.createContext(t);function s(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function g(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);