"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[441],{638:function(t,e,n){n.d(e,{Q:function(){return r}});var r={IDLE:"idle",LOADING:"loading",SUCCESS:"success",ERROR:"error"}},441:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(184),o=function(t){var e=t.onSubmit,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(u),c("")},children:[(0,i.jsx)("input",{type:"text",name:"searchName",value:u,onChange:function(t){var e=t.currentTarget.value;c(e)}}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})},f=n(689),p=n(87),v=n(501),h=n(638),l=n(694),m=n.n(l),d=n(68),x=function(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),n=e[0],u=e[1],l=(0,s.useState)([]),x=(0,a.Z)(l,2),y=x[0],S=x[1],b=(0,s.useState)(h.Q.IDLE),g=(0,a.Z)(b,2),w=g[0],k=g[1],_=(0,f.s0)(),j=(0,f.TH)();(0,s.useEffect)((function(){if(""===n)return S([]),void k(h.Q.IDLE);var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(h.Q.LOADING),t.prev=1,t.next=4,(0,v.uP)(n);case 4:0===(e=t.sent).results.length&&m().Notify.failure("Query with name '".concat(n,"' not faund")),S(e.results),k(h.Q.SUCCESS),localStorage.setItem("location","/movies?query=".concat(n)),_("?query=".concat(n.trim()),{replace:!0}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),k(h.Q.ERROR),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[n,_]),(0,s.useEffect)((function(){var t=new URLSearchParams(j.search).get("query")||"";t&&u(t)}),[j.search]);return(0,i.jsxs)("main",{children:[(0,i.jsx)(o,{onSubmit:function(t){u(t.trim())}}),w===h.Q.LOADING&&(0,i.jsx)(d.a,{}),w===h.Q.ERROR&&(0,i.jsx)("p",{children:"Error loading data"}),w===h.Q.SUCCESS&&(0,i.jsx)("ul",{children:y&&y.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(p.rU,{to:"/movies/".concat(t.id,"?query=").concat(n),state:{from:j},children:t.title})},t.id)}))}),(0,i.jsx)(f.j3,{})]})}},501:function(t,e,n){n.d(e,{IQ:function(){return p},Jh:function(){return v},TP:function(){return f},XT:function(){return o},uP:function(){return h}});var r=n(861),a=n(757),u=n.n(a),c=n(16),s="3646fa4826ffb51a1129efde8ab530b7",i=c.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("trending/movie/day",{params:{api_key:s}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e),{params:{api_key:s,append_to_response:"images"}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e,n){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/").concat(n),{params:{api_key:s}});case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(e,n){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/").concat(n),{params:{api_key:s}});case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:{query:e,api_key:s}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=441.f5c46208.chunk.js.map