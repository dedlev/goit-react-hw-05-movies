"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[838],{638:function(e,n,r){r.d(n,{Q:function(){return t}});var t={IDLE:"idle",LOADING:"loading",SUCCESS:"success",ERROR:"error"}},838:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var t,a,s,i=r(861),c=r(439),u=r(757),o=r.n(u),p=r(791),d=r(689),l=r(87),f=r(818),h=r(501),x=r(168),v=r(867),m=v.ZP.div(t||(t=(0,x.Z)(["\ndisplay: flex;\ngap: 12px;\n"]))),j=v.ZP.ul(a||(a=(0,x.Z)(["\ndisplay: flex;\ngap: 12px;\nlist-style-type: none;\n"]))),g=v.ZP.button(s||(s=(0,x.Z)(["\ndisplay: flex;\ngap: 4px;\nmargin-bottom: 4px;\n"]))),b=r(638),w=r(68),Z=r(184),k=function(){var e,n,r=(0,p.useState)(""),t=(0,c.Z)(r,2),a=t[0],s=t[1],u=(0,p.useState)(""),x=(0,c.Z)(u,2),v=x[0],k=x[1],y=(0,p.useState)(""),_=(0,c.Z)(y,2),S=_[0],R=_[1],C=(0,p.useState)(""),E=(0,c.Z)(C,2),Q=E[0],O=E[1],U=(0,p.useState)(""),I=(0,c.Z)(U,2),P=I[0],L=I[1],A=(0,p.useState)([]),D=(0,c.Z)(A,2),G=D[0],N=D[1],T=(0,p.useState)(b.Q.IDLE),q=(0,c.Z)(T,2),H=q[0],J=q[1],M=(0,d.UO)().movieId,W=(0,d.s0)(),X=(0,d.TH)(),z=(0,p.useRef)(null!==(e=null===(n=X.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,p.useEffect)((function(){var e=function(){var e=(0,i.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(b.Q.LOADING),e.prev=1,e.next=4,(0,h.TP)(M);case 4:n=e.sent,s(n.poster_path),k(n.title),R(n.release_date),O(n.vote_average),L(n.overview),N(n.genres),J(b.Q.SUCCESS),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),J(b.Q.ERROR),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();e(M)}),[M]);return(0,Z.jsxs)("main",{children:[(0,Z.jsxs)(g,{onClick:function(){W(z.current)},children:[(0,Z.jsx)(f.hPZ,{}),"Go back"]}),H===b.Q.ERROR&&(0,Z.jsx)("p",{children:"Error loading data"}),H===b.Q.SUCCESS&&(0,Z.jsxs)(m,{children:[(0,Z.jsx)("div",{children:a&&(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:v,style:{maxWidth:"200px",height:"auto"}})}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("h2",{children:[v," (",S?S.substring(0,4):"N/A",")"]}),(0,Z.jsxs)("p",{children:["User score: ",Math.round(10*Q),"%"]}),(0,Z.jsx)("p",{children:(0,Z.jsx)("b",{children:"Overview"})}),(0,Z.jsx)("p",{children:P}),(0,Z.jsx)("p",{children:(0,Z.jsx)("b",{children:"Genres"})}),(0,Z.jsx)(j,{children:G.map((function(e){return(0,Z.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,Z.jsx)("hr",{}),(0,Z.jsx)("p",{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)("hr",{}),(0,Z.jsx)(p.Suspense,{fallback:H===b.Q.LOADING&&(0,Z.jsx)(w.a,{}),children:(0,Z.jsx)(d.j3,{})})]})}},501:function(e,n,r){r.d(n,{IQ:function(){return d},Jh:function(){return l},TP:function(){return p},XT:function(){return o},uP:function(){return f}});var t=r(861),a=r(757),s=r.n(a),i=r(16),c="3646fa4826ffb51a1129efde8ab530b7",u=i.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){var e=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("trending/movie/day",{params:{api_key:c}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n),{params:{api_key:c,append_to_response:"images"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(n,r){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n,"/").concat(r),{params:{api_key:c}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n,r){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n,"/").concat(r),{params:{api_key:c}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:n,api_key:c}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=838.7ded8545.chunk.js.map