"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(t,r,e){e.r(r);var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(791),i=e(689),o=e(501),p=e(638),f=e(68),h=e(184);r.default=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],d=(0,s.useState)(p.Q.IDLE),l=(0,a.Z)(d,2),v=l[0],m=l[1],x=(0,i.UO)().movieId;return(0,s.useEffect)((function(){function t(){return(t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(p.Q.LOADING),t.prev=1,t.next=4,(0,o.IQ)(x,"credits");case 4:r=t.sent,c(r.cast),m(p.Q.SUCCESS),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),m(p.Q.ERROR),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[x]),(0,h.jsxs)("main",{children:[v===p.Q.LOADING&&(0,h.jsx)(f.a,{}),v===p.Q.ERROR&&(0,h.jsx)("p",{children:"Error loading data"}),v===p.Q.SUCCESS&&(0,h.jsx)(h.Fragment,{children:0===e.length?(0,h.jsx)("p",{children:"No cast data found"}):(0,h.jsx)("ul",{children:e.map((function(t){return(0,h.jsxs)("li",{children:[t.profile_path&&(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:t.name,style:{maxWidth:"100px",height:"auto"}}),(0,h.jsx)("p",{children:t.name}),(0,h.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})]})}},638:function(t,r,e){e.d(r,{Q:function(){return n}});var n={IDLE:"idle",LOADING:"loading",SUCCESS:"success",ERROR:"error"}},501:function(t,r,e){e.d(r,{IQ:function(){return f},Jh:function(){return h},TP:function(){return p},XT:function(){return o},uP:function(){return d}});var n=e(861),a=e(757),c=e.n(a),u=e(16),s="3646fa4826ffb51a1129efde8ab530b7",i=u.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("trending/movie/day",{params:{api_key:s}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(r),{params:{api_key:s,append_to_response:"images"}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r,e){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(r,"/").concat(e),{params:{api_key:s}});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(r,e){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(r,"/").concat(e),{params:{api_key:s}});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:{query:r,api_key:s}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.5f37c436.chunk.js.map