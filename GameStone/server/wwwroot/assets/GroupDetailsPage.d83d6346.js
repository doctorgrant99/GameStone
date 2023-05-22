import{v as L,l,A as r,_ as V,k as O,y as q,u as J,m as K,n as z,b as g,P as b,e as f,K as H,c as i,f as t,t as v,s as y,F as h,q as G,I as Q,C as W,D as X,h as N,w as F,g as Y,r as R,o as c,p as Z,i as $}from"./index.a392570d.js";class ee{async addGroupComment(n){const u=await L.post("api/comments",n);l.log("addGroupComment service",u.data),r.activeGroupComments.push(u.data),l.log("Service AppState.comments",r.activeGroupComments)}}const oe=new ee;const te={setup(){const m=O(),n=q({}),u=J();async function s(){try{let e=m.params.groupId;await f.getGroupById(e),await f.getCommentsByGroupId(e)}catch(e){l.log(e.message),b.error(e.message)}}async function C(){try{let e=m.params.groupId;r.profileGames=[],l.log("PROFILE GAMES",r.profileGames),await f.getMembersByGroupId(e),r.groupMembers.forEach(async a=>{let _=a.profile.id;l.log(_,"ACCOUNT ID"),await Y.getGroupMembersGames(_)}),l.log("GETTING GAMES")}catch(e){l.log(e.message),b.error(e.message)}}function w(){for(let e=0;e<r.profileGames.length;e++)for(let a=0;a<r.profileGames.length;a++)e!=a&&r.profileGames[e].gameId==r.profileGames[a].gameId&&r.profileGames.splice(a,1)}return K(()=>{s(),C()}),z(()=>{w()}),{editable:n,account:g(()=>r.account),group:g(()=>r.activeGroup),groupMembers:g(()=>r.groupMembers),games:g(()=>r.profileGames),games2:g(()=>r.profileGames2),isMember:g(()=>r.groupMembers.find(a=>a.profileId==r.account.id)),activeGroupComments:g(()=>r.activeGroupComments),async deleteGroup(e){try{l.log("Group ID",e),await b.confirm("Are you sure you want to delete this group?")&&(await f.deleteGroup(e),u.push("/groups"))}catch(a){l.log(a.message),b.error(a.message)}},async goToGameDetails(e){try{l.log(e),u.push({name:"GameDetails",params:{gameId:e}})}catch(a){l.error(a.message),b.error(a.message)}},async becomeMember(){try{let e=m.params.groupId;await f.becomeMember({groupId:e})}catch(e){l.log(e.message),b.error(e.message)}},async leaveGroup(){try{const e=m.params.groupId,a=r.groupMembers.find(_=>_.profileId==r.account.id);await f.leaveGroup(a.id)}catch{}},gotoProfile(e){l.log(e),u.push({name:"Profile",params:{accountId:e}})},async addGroupComment(){try{l.log("addGroupComment");let e=n.value;e.groupId=m.params.groupId,l.log("add group comment commentData",e),await oe.addGroupComment(e),n.value={}}catch(e){b.error(e)}}}},components:{GroupEditForm:H}},U=m=>(Z("data-v-fb35e38b"),m=m(),$(),m),se={class:"container-fluid"},re={class:"row justify-content-center bannerMargins"},ae={class:"col-md-9"},ne={class:"row my-3 justify-content-between bg-secondary rounded"},ie={class:"col-md-8 p-4 px-5"},ce={class:"py-2 overflow-auto"},le={class:"text-dark"},de=["src","title"],me={class:"col-md-3 p-0 goTop"},pe=["src","alt"],ue={class:"row justify-content-between m-3"},_e={class:"col-md-4"},ge={key:0,class:"btn btn-info border selectable rounded-pill mx-3","data-bs-toggle":"modal","data-bs-target":"#editGroupModal"},be={class:"col-md-4 flexButtons"},fe={class:"row justify-content-center"},ye={class:"col-9 m-3 pill-Rounded p-4"},he=["src","title","onClick"],ve={class:"col-md-9 pill-Rounded m-3 p-3 px-5 text-center"},Ge=["src","alt","title","onClick"],Ce={class:"row justify-content-center p-2 chatTop mt-3"},we={key:0,class:"col-10"},Ie={class:"d-flex justify-content-center my-3"},Me=U(()=>t("button",{class:"btn btn-info border border-dark selectable rounded-pill mx-3",type:"submit"},"Submit",-1)),ke={key:1,class:"row justify-content-center chatCard bg-white"},xe={class:"row"},De={class:"col-md-1 col-sm-2"},Se=["src","title"],Pe={class:"col-sm-10 col-md-11 ps-4"},Ee={class:"pt-2 comText"},Te={key:2,class:"chatCard bg-dark-gray"},Be={class:"row"},je={class:"col-md-1 col-sm-2"},Ae=["src","title"],Ne={class:"col-sm-10 col-md-11 ps-4"},Fe={class:"pt-2 pb-3 pe-3 comText"},Re=U(()=>t("h5",{class:"text-dark"},"Edit Group",-1));function Ue(m,n,u,s,C,w){var _,I,M,k,x,D,S,P,E,T,B,j;const e=R("GroupEditForm"),a=R("Modal");return c(),i(h,null,[t("div",se,[t("section",re,[t("div",ae,[t("section",ne,[t("div",ie,[t("div",ce,[t("h1",le,v((_=s.group)==null?void 0:_.name),1),t("h4",null,v((I=s.group)==null?void 0:I.description),1),t("img",{src:(M=s.group)==null?void 0:M.creator.picture,class:"profilePic selectable",title:(x=(k=s.group)==null?void 0:k.creator)==null?void 0:x.name,onClick:n[0]||(n[0]=o=>{var d;return s.gotoProfile((d=s.group)==null?void 0:d.creator.id)})},null,8,de)])]),t("div",me,[t("img",{class:"group-img img-fluid group-imgRounded",src:(D=s.group)==null?void 0:D.imgUrl,alt:(S=s.group)==null?void 0:S.name},null,8,pe)])])])]),t("section",ue,[t("div",_e,[((P=s.group)==null?void 0:P.creatorId)==((E=s.account)==null?void 0:E.id)?(c(),i("button",ge,"Edit Group")):y("",!0),((T=s.group)==null?void 0:T.creatorId)==((B=s.account)==null?void 0:B.id)?(c(),i("button",{key:1,onClick:n[1]||(n[1]=o=>s.deleteGroup(s.group.id)),class:"btn btn-danger border selectable rounded-pill mx-3"},"Delete Group")):y("",!0)]),t("div",be,[!s.isMember&&s.account.id?(c(),i("button",{key:0,onClick:n[2]||(n[2]=o=>s.becomeMember()),class:"btn btn-info border selectable rounded-pill mx-3"},"Join Us!")):y("",!0),s.isMember?(c(),i("button",{key:1,onClick:n[3]||(n[3]=o=>s.leaveGroup()),class:"btn btn-danger border selectable rounded-pill mx-3"},"Leave Us!")):y("",!0)])]),t("section",fe,[t("div",ye,[(c(!0),i(h,null,G(s.groupMembers,o=>{var d,p;return c(),i("img",{src:(d=o.profile)==null?void 0:d.picture,class:"profilePic selectable",title:(p=o.profile)==null?void 0:p.name,key:o==null?void 0:o.id,onClick:Le=>{var A;return s.gotoProfile((A=o.profile)==null?void 0:A.id)}},null,8,he)}),128))]),t("div",ve,[(c(!0),i(h,null,G(s.games,o=>(c(),i("img",{src:o.gameImg,alt:o.gameName,class:"gatheringGameCard selectable",title:o.gameName,onClick:d=>s.goToGameDetails(o==null?void 0:o.gameId)},null,8,Ge))),256))])]),t("section",Ce,[(j=s.account)!=null&&j.id?(c(),i("div",we,[t("form",{onSubmit:n[5]||(n[5]=Q(o=>s.addGroupComment(),["prevent"]))},[t("div",Ie,[W(t("input",{placeholder:"Let's Discuss",class:"w-50 border-dark px-3 p-2",type:"text","onUpdate:modelValue":n[4]||(n[4]=o=>s.editable.body=o)},null,512),[[X,s.editable.body]]),Me])],32)])):y("",!0),s.account.lightMode?(c(),i("div",ke,[(c(!0),i(h,null,G(s.activeGroupComments,o=>{var d,p;return c(),i("div",{class:"col-8 my-1 p-0 bg-grey comContainer",key:o==null?void 0:o.id},[t("div",xe,[t("div",De,[t("img",{src:(d=o.creator)==null?void 0:d.picture,class:"profilePic",title:(p=o.creator)==null?void 0:p.name},null,8,Se)]),t("div",Pe,[t("span",Ee,v(o==null?void 0:o.body),1)])])])}),128))])):(c(),i("div",Te,[(c(!0),i(h,null,G(s.activeGroupComments,o=>{var d,p;return c(),i("div",{class:"col-md-4 my-1 p-0 bg-grey comContainer",key:o==null?void 0:o.id},[t("div",Be,[t("div",je,[t("img",{src:(d=o.creator)==null?void 0:d.picture,class:"profilePic border",title:(p=o.creator)==null?void 0:p.name},null,8,Ae)]),t("div",Ne,[t("span",Fe,v(o==null?void 0:o.body),1)])])])}),128))]))])]),N(a,{id:"editGroupModal"},{header:F(()=>[Re]),modalBody:F(()=>[N(e)]),_:1})],64)}const Oe=V(te,[["render",Ue],["__scopeId","data-v-fb35e38b"]]);export{Oe as default};
