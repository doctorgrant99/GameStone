import{_ as b,u as v,b as y,g as P,l as a,P as i,d as l,e as w,E as x,c as n,f as t,t as _,h as u,w as h,F as M,A,r as g,o as r,p as I,i as k,j as m}from"./index.a392570d.js";const E={setup(){const c=v();return{account:y(()=>A.account),async getMyGames(){try{const o=this.account.id;await P.getMyGames(o)}catch(o){a.log(o.message),i.error(o.message)}},async getMyGatherings(){try{const o=this.account.id;await l.getMyGatherings(o)}catch(o){a.error(o.message),i.error(o.message)}},async getGatheringsIOwn(){try{const o=this.account.id;await l.getGatheringsIOwn(o)}catch(o){a.error(o.message),i.error(o.message)}},async getMyGroups(){try{const o=this.account.id;await w.getMyGroups(o)}catch(o){a.error(o.message),i.error(o.message)}},gotoProfile(o){a.log(o),c.push({name:"Profile",params:{accountId:o}})}}},components:{EditAccountForm:x}},s=c=>(I("data-v-7d650ecb"),c=c(),k(),c),G={class:"container-fluid"},S={class:"row"},B={class:"col-12 d-flex justify-content-between mb-4"},F=s(()=>t("h1",{class:"text-secondary"},"Account:",-1)),C={key:0,class:"border border-dark rounded selectable text-center",title:"Edit Profile","data-bs-toggle":"modal","data-bs-target":"#editAccountModal"},N=m("Edit Your Profile "),j=s(()=>t("i",{class:"mdi mdi-pencil-outline"},null,-1)),V=[N,j],D={key:1,class:"border border-white rounded selectable text-center",title:"Edit Profile","data-bs-toggle":"modal","data-bs-target":"#editAccountModal"},O=m("Edit Your Profile "),Y=s(()=>t("i",{class:"mdi mdi-pencil-outline"},null,-1)),R=[O,Y],T={class:"col-12"},q={class:"row"},z={class:"col-md-4 d-flex justify-content-between"},H=s(()=>t("div",null,[t("h5",{class:"bg-light rounded p-2"},"Profile Picture:")],-1)),J=["src","alt"],K={class:"col-12 pt-2"},L=s(()=>t("h5",{class:"bg-light rounded p-2 mt-4"},"Cover Photo:",-1)),Q=["src","alt"],U={class:"col-12"},W={class:"row p-3"},X=s(()=>t("h5",{class:"bg-light rounded p-2 mt-4"},"Description:",-1)),Z={class:"col-md-8 p-3 bio-background"},$={class:"pb-3"},tt=s(()=>t("h6",null,"Biography:",-1)),ot=s(()=>t("h5",{class:"text-dark"},"Edit Profile!",-1));function et(c,o,st,e,ct,at){const p=g("EditAccountForm"),f=g("Modal");return r(),n(M,null,[t("div",G,[t("div",S,[t("div",B,[t("div",null,[F,e.account.lightMode?(r(),n("div",C,V)):(r(),n("div",D,R))]),t("div",null,[t("button",{onClick:o[0]||(o[0]=it=>{var d;return e.gotoProfile((d=e.account)==null?void 0:d.id)}),class:"mt-2 rounded text-dark bg-info p-1 selectable"}," Back to Profile Page")])]),t("div",T,[t("div",q,[t("div",z,[H,t("img",{class:"profile-picture img-fluid",src:e.account.picture,alt:e.account.name+e.account.id},null,8,J)])])]),t("div",K,[L,t("img",{class:"hero-img mx-0 elevation-3 w-100",src:e.account.coverImg,alt:e.account.name},null,8,Q)]),t("div",U,[t("section",W,[X,t("div",Z,[t("h3",$,"Name: "+_(e.account.name),1),tt,t("p",null,_(e.account.bio),1)])])])])]),u(f,{id:"editAccountModal"},{header:h(()=>[ot]),modalBody:h(()=>[u(p)]),_:1})],64)}const rt=b(E,[["render",et],["__scopeId","data-v-7d650ecb"]]);export{rt as default};
