"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[3381],{98331:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(74848),a=t(28453);const s={sidebar_position:7},l="Rolling back data (undo!)",r={id:"guides/rollback",title:"Rolling back data (undo!)",description:"It is possible to roll back an Envelope to effectively undo the loading of data into a Linkage Project. There could be a number of reasons that an operator would want to do this - for example:",source:"@site/versioned_docs/version-1.11.7/guides/rollback.md",sourceDirName:"guides",slug:"/guides/rollback",permalink:"/docs/1.11.7/guides/rollback",draft:!1,unlisted:!1,tags:[],version:"1.11.7",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Extracting linkage keys",permalink:"/docs/1.11.7/guides/extracting-data"},next:{title:"Destroying record-level data",permalink:"/docs/1.11.7/guides/destroying-record-data"}},i={},c=[];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"rolling-back-data-undo",children:"Rolling back data (undo!)"})}),"\n",(0,n.jsxs)(o.p,{children:["It is possible to roll back an Envelope to effectively ",(0,n.jsx)(o.em,{children:"undo"})," the loading of data into a Linkage Project. There could be a number of reasons that an operator would want to do this - for example:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"The wrong data was loaded"}),"\n",(0,n.jsx)(o.li,{children:"The match or group configuration was not set correctly"}),"\n",(0,n.jsx)(o.li,{children:"The operator is testing the results of different configurations with sample datasets"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["A rollback undoes anything that was done as part of the last ",(0,n.jsx)(o.a,{href:"/docs/1.11.7/concepts/envelopes",children:"Envelope"})," processing. For example, if the last envelope processed was the result of a delimited file that was uploaded, the rollback will undo any changes to the project database since that the file was loaded. All records added will be removed and any changes to existing groups will be undone."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["A rollback can only be performed on the last Envelope for a ",(0,n.jsx)(o.a,{href:"/docs/1.11.7/concepts/linkage-projects",children:"Linkage Project"}),"."]})}),"\n",(0,n.jsxs)(o.p,{children:["An envelope can be rolled back through the ",(0,n.jsx)(o.code,{children:"JOBS"})," tab of the web UI. On the ",(0,n.jsx)(o.code,{children:"ALL ENVELOPES"})," sub-tab, select the ",(0,n.jsx)(o.code,{children:"Rollback"})," icon in the Options column of the Envelope you wish to roll back. You will be requested to enter a reason for the roll-back \u2013 any reason can be entered here but this is more to confirm that you actually want to do this."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Envelope Rollback",src:t(20474).A+"",width:"1398",height:"597"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"The last envelope submitted for each Linkage Project can be rolled back through the Jobs screen"})}),"\n",(0,n.jsxs)(o.p,{children:["Once an ",(0,n.jsx)(o.a,{href:"/docs/1.11.7/concepts/envelopes",children:"Envelope"})," has been successfully rolled back, the status of the Envelope on the Jobs screen is updated to indicate this, and the previous Envelope for that project will now be available to roll back. Rollbacks can continue back to the very first envelope submitted for the project."]}),"\n",(0,n.jsx)(o.admonition,{type:"warning",children:(0,n.jsx)(o.p,{children:"There is no coming back from a rollback. It will delete any records that have been added since the last Envelope was created, including quality reviews!"})})]})}function h(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},20474:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/envelope-rollback-de71d0a457e16745f117dd1433a772e3.png"},28453:(e,o,t)=>{t.d(o,{R:()=>l,x:()=>r});var n=t(96540);const a={},s=n.createContext(a);function l(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);