(this["webpackJsonprobustswap-frontend-main"]=this["webpackJsonprobustswap-frontend-main"]||[]).push([[12],{1010:function(t,e,n){"use strict";n.d(e,"b",(function(){return g}));var a=n(2),r=n.n(a),c=n(20),i=n(18),o=n(38),s=n(0),u=n(13),l=n.n(u),p=n(32),b=n(34),f=n(72),d=n(1009),j=n(199),h=n(928),O=n(106),g=function(){var t=Object(s.useState)(new l.a(0)),e=Object(o.a)(t,2),n=e[0],a=e[1],c=Object(j.a)().slowRefresh,u=Object(h.b)();return Object(s.useEffect)((function(){function t(){return(t=Object(i.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.totalLockedUpRewards();case 2:e=t.sent,a(new l.a(e.toString()));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[c,u]),n};e.a=function(){var t=Object(s.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1],u=Object(O.a)().account,h=Object(j.a)().fastRefresh;return Object(s.useEffect)((function(){var t=function(){var t=Object(i.a)(r.a.mark((function t(){var e,n,i,o,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=d.a.map((function(t){return{address:Object(b.b)(),name:"pendingRBS",params:[t.pid,u]}})),n=d.a.map((function(t){return{address:Object(b.b)(),name:"userInfo",params:[t.pid,u]}})),t.next=4,Object(p.a)(f,e);case 4:return i=t.sent,t.next=7,Object(p.a)(f,n);case 7:o=t.sent,s=d.a.map((function(t,e){return Object(c.a)(Object(c.a)({},t),{},{balance:new l.a(i[e]),nextHarvestUntil:o[e].nextHarvestUntil.toNumber()})})),a(s);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();u&&t()}),[u,h]),n}},1060:function(t,e,n){"use strict";var a=n(2),r=n.n(a),c=n(18),i=n(38),o=n(0),s=n(32),u=n(34),l=n(72),p=n(1009),b=n(199),f=n(106);e.a=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],d=Object(f.a)().account,j=Object(b.a)().fastRefresh;return Object(o.useEffect)((function(){var t=function(){var t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p.a.map((function(t){return{address:Object(u.b)(),name:"pendingRBS",params:[t.pid,d]}})),t.next=3,Object(s.a)(l,e);case 3:n=t.sent,a(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();d&&t()}),[d,j]),n}},1513:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _}));var a=n(44),r=n(20),c=n(38),i=n(0),o=n(899),s=n(875),u=n(997),l=n(908),p=n(34),b=n(9),f=n(37),d=(n(43),n(1506)),j=n(256),h=i.forwardRef((function(t,e){var n=t.classes,a=t.className,r=t.raised,c=void 0!==r&&r,s=Object(f.a)(t,["classes","className","raised"]);return i.createElement(d.a,Object(b.a)({className:Object(o.a)(n.root,a),elevation:c?8:1,ref:e},s))})),O=Object(j.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(h),g=n(1505),m=n(937),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},x=i.forwardRef((function(t,e){var n=t.align,a=void 0===n?"inherit":n,r=t.classes,c=t.className,s=t.color,u=void 0===s?"initial":s,l=t.component,p=t.display,d=void 0===p?"initial":p,j=t.gutterBottom,h=void 0!==j&&j,O=t.noWrap,g=void 0!==O&&O,x=t.paragraph,w=void 0!==x&&x,v=t.variant,S=void 0===v?"body1":v,k=t.variantMapping,R=void 0===k?y:k,F=Object(f.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),C=l||(w?"p":R[S]||y[S])||"span";return i.createElement(C,Object(b.a)({className:Object(o.a)(r.root,c,"inherit"!==S&&r[S],"initial"!==u&&r["color".concat(Object(m.a)(u))],g&&r.noWrap,h&&r.gutterBottom,w&&r.paragraph,"inherit"!==a&&r["align".concat(Object(m.a)(a))],"initial"!==d&&r["display".concat(Object(m.a)(d))]),ref:e},F))})),w=Object(j.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(x),v=n(1512),S=n(188),k=i.forwardRef((function(t,e){var n=t.absolute,a=void 0!==n&&n,r=t.classes,c=t.className,s=t.component,u=void 0===s?"hr":s,l=t.flexItem,p=void 0!==l&&l,d=t.light,j=void 0!==d&&d,h=t.orientation,O=void 0===h?"horizontal":h,g=t.role,m=void 0===g?"hr"!==u?"separator":void 0:g,y=t.variant,x=void 0===y?"fullWidth":y,w=Object(f.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(u,Object(b.a)({className:Object(o.a)(r.root,c,"fullWidth"!==x&&r[x],a&&r.absolute,p&&r.flexItem,j&&r.light,"vertical"===O&&r.vertical),role:m,ref:e},w))})),R=Object(j.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(S.a)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(k),F=n(1517),C=n(1510),E=n(1087),T=n.n(E),P=n(54),W=n(892),N=n(155),B=n(106),z=n(87),A=n(996),I=n(16),L=n(953),M=n(1060),D=n(970),U=n(1010),H=n(15),_=function(){var t=D.a.account(),e=Object(W.a)(),n=Object(s.a)("(max-width: 800px)"),b=Object(N.a)(),f=b.login,d=b.logout,j=Object(B.a)().account,h=Object(P.I)(f,"0px",d).onPresentConnectModal,m=Object(i.useState)(0),y=Object(c.a)(m,2),x=y[0],S=y[1],k=Object(i.useState)(0),E=Object(c.a)(k,2),_=E[0],V=E[1],q=Object(z.m)(),Y=Object(L.n)(),J=Object(L.b)(Object(p.d)()),X=Object(L.e)(Object(p.d)()),K=Object(U.b)().plus(X),$=Y?Y.minus(J.plus(K)):new u.a(0),G=Object(l.a)($),Q=Object(M.a)().reduce((function(t,e){return t+new u.a(e).div(new u.a(10).pow(18)).toNumber()}),0),Z=Object(z.g)(),tt=Object(z.e)(),et=Object(z.f)(),nt=Object(z.i)(),at=Object(z.j)(),rt=function(t){var e=t;"number"!==typeof e&&(e=e.target.value),S(e);var n=Q/365;0===e?n=Q/365:1===e?n=Q/52:2===e?n=Q/12:3===e&&(n=Q),V(n)},ct=Object(z.c)().filter((function(t){return!0===!!t.isTokenOnly&&"0X"!==t.multiplier})).map((function(t){var e=new u.a(t.rbsPerBlock||1).times(new u.a(t.poolWeight)).div(new u.a(10).pow(18)).times(A.a),n=Z.times(e),a=new u.a(t.lpTotalInQuoteToken||0);return t.quoteTokenSymbol===I.b.BNB&&(a=a.times(tt)),t.quoteTokenSymbol===I.b.ETH&&(a=a.times(et)),t.quoteTokenSymbol===I.b.USDC&&(a=a.times(nt)),t.quoteTokenSymbol===I.b.USDT&&(a=a.times(at)),a.comparedTo(0)>0&&(n=n.div(a)),Object(r.a)(Object(r.a)({},t),{},{apy:n})})),it=ct[0].apy&&ct[0].apy.times(new u.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2});return Object(H.jsxs)(v.a,{className:t.mainContainer,children:[Object(H.jsx)(w,{className:t.pageTitle,children:"Your PANTHER Stats"}),Object(H.jsx)(w,{className:t.subPageTitle,children:"Keep track of your pool & farms."}),Object(H.jsxs)(v.a,{className:t.bodyWrapper,children:[j?Object(H.jsxs)(O,{className:t.cardWrapper1,children:[Object(H.jsxs)(v.a,{className:t.statsValue,children:[Object(H.jsx)(w,{style:{fontSize:24,fontWeight:600,fontFamily:"Poppin",color:"#7381FC"},children:"TVL All Pools"}),Object(H.jsxs)(w,{style:{fontSize:24,fontWeight:600,fontFamily:"Poppin",color:"#F0EFEF"},children:["$",q?q.toNumber().toLocaleString():0]})]}),Object(H.jsxs)(v.a,{className:t.statsValue,children:[Object(H.jsx)(w,{style:{fontSize:24,fontWeight:600,fontFamily:"Poppin",color:"#7381FC"},children:"PANTHER Holdings"}),Object(H.jsx)(w,{style:{fontSize:24,fontWeight:600,fontFamily:"Poppin",color:"#F0EFEF"},children:G?G.toLocaleString():0})]}),Object(H.jsx)(v.a,{style:{background:"#6BA1FF",color:"#FCFCFC",borderRadius:8,fontFamily:"Poppin",fontSize:20,fontWeight:"bold",padding:"9px 32px",textAlign:"left",marginTop:8},children:"Earnings"}),n?Object(H.jsx)(v.a,{children:Object(H.jsxs)(C.a,{value:x,onChange:rt,IconComponent:function(){return Object(H.jsx)(T.a,{})},style:{width:"100%",paddingLeft:"16px",paddingRight:"16px",background:"rgba(107, 161, 255, 0.2)",marginTop:"24px",borderRadius:8,fontFamily:"Poppin"},disableUnderline:!0,MenuProps:{getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"}},children:[Object(H.jsx)(F.a,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},value:0,children:Object(H.jsx)(w,{style:{fontSize:"20px",fontWeight:500,padding:"0px 16px",fontFamily:"Poppin"},children:"Daily"})}),Object(H.jsx)(F.a,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},value:1,children:Object(H.jsx)(w,{style:{fontSize:"20px",fontWeight:500,padding:"0px 16px",fontFamily:"Poppin"},children:"Weekly"})}),Object(H.jsx)(F.a,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},value:2,children:Object(H.jsx)(w,{style:{fontSize:"20px",fontWeight:500,padding:"0px 16px",fontFamily:"Poppin"},children:"Monthly"})}),Object(H.jsx)(F.a,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},value:3,children:Object(H.jsx)(w,{style:{fontSize:"20px",fontWeight:500,padding:"0px 16px",fontFamily:"Poppin"},children:"Yearly"})})]})}):Object(H.jsxs)(v.a,{style:{width:"100%",display:"flex",justifyContent:"space-between",paddingTop:24},children:[Object(H.jsx)(g.a,{className:Object(o.a)(t.switchButton,Object(a.a)({},t.activeSwitcher,0===x)),onClick:function(){return rt(0)},children:"Daily"}),Object(H.jsx)(g.a,{className:Object(o.a)(t.switchButton,Object(a.a)({},t.activeSwitcher,1===x)),onClick:function(){return rt(1)},children:"Weekly"}),Object(H.jsx)(g.a,{className:Object(o.a)(t.switchButton,Object(a.a)({},t.activeSwitcher,2===x)),onClick:function(){return rt(2)},children:"Monthly"}),Object(H.jsx)(g.a,{style:{marginRight:0},className:Object(o.a)(t.switchButton,Object(a.a)({},t.activeSwitcher,3===x)),onClick:function(){return rt(3)},children:"Yearly"})]}),Object(H.jsxs)(v.a,{style:{textAlign:"left",alignItems:"center",display:"flex",paddingTop:16,paddingBottom:24},children:[Object(H.jsx)("img",{src:"",alt:"",style:{width:60,height:60}}),Object(H.jsxs)(v.a,{children:[Object(H.jsx)(w,{style:{paddingLeft:16,fontSize:34,fontWeight:500,fontFamily:"Poppin"},children:_?_.toFixed(3):(Q/365).toFixed(3)}),Object(H.jsxs)(w,{style:{paddingLeft:16,fontSize:20,fontWeight:"bold",fontFamily:"Poppin"},children:["$ ",_?(Z.toNumber()*_).toFixed(2):(Z.toNumber()*Q/365).toFixed(2)]})]})]}),Object(H.jsx)(R,{}),Object(H.jsxs)(v.a,{style:{textAlign:"left",paddingTop:24},children:[Object(H.jsx)(w,{style:{fontSize:20,fontWeight:"bold",fontFamily:"Poppin",paddingBottom:0},children:e(352,"APR")}),Object(H.jsxs)(w,{style:{fontSize:34,fontWeight:500,fontFamily:"Poppin",paddingTop:0},children:[it," %"]})]})]}):Object(H.jsxs)(O,{className:t.cardWrapper,children:[Object(H.jsx)(w,{style:{fontSize:16,fontFamily:"Poppin",paddingBottom:24},children:"Please unlock your wallet to see your stats"}),Object(H.jsx)(g.a,{className:t.walletButton,onClick:h,children:"UNLOCK WALLET"})]}),j?Object(H.jsx)(v.a,{className:t.bgWrapper,children:Object(H.jsx)("img",{src:"/images/stats-bg-active.svg",alt:"bg_image"})}):Object(H.jsx)(v.a,{className:t.bgWrapper,children:Object(H.jsx)("img",{src:"/images/stats-bg.svg",alt:"bg_image"})})]})]})}},953:function(t,e,n){"use strict";n.d(e,"n",(function(){return m})),n.d(e,"b",(function(){return y})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return w})),n.d(e,"g",(function(){return v})),n.d(e,"i",(function(){return S})),n.d(e,"h",(function(){return k})),n.d(e,"l",(function(){return R})),n.d(e,"c",(function(){return F})),n.d(e,"m",(function(){return C})),n.d(e,"o",(function(){return E})),n.d(e,"k",(function(){return T})),n.d(e,"d",(function(){return P})),n.d(e,"j",(function(){return W}));var a=n(2),r=n.n(a),c=n(18),i=n(38),o=n(0),s=n(13),u=n.n(s),l=n(267),p=n(1059),b=n(72),f=n(156),d=n(954),j=n(34),h=n(199),O=n(106),g=n(928),m=function(){var t=Object(h.a)().slowRefresh,e=Object(o.useState)(),n=Object(i.a)(e,2),a=n[0],s=n[1],p=Object(g.a)(l,Object(j.d)());return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.totalSupply();case 2:e=t.sent,s(new u.a(e.toString()));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[p,t]),a},y=function(t){var e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1],p=Object(O.a)(),b=p.account,d=p.library,g=Object(h.a)().fastRefresh;return Object(o.useEffect)((function(){var t=function(){var t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(l,Object(j.d)(),d,b),t.next=3,e.balanceOf("0x000000000000000000000000000000000000dEaD");case 3:n=t.sent,s(new u.a(n.toString()));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[b,d,t,g]),a},x=function(t){var e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1],p=Object(O.a)(),b=p.account,d=p.library,g=Object(h.a)().slowRefresh;return Object(o.useEffect)((function(){var t=function(){var t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(l,Object(j.d)(),d,b),t.next=3,e.balanceOf(Object(j.b)());case 3:n=t.sent,s(new u.a(n.toString()));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[b,d,t,g]),a},w=function(){var t=Object(h.a)().slowRefresh,e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1],p=Object(O.a)(),b=p.account,d=p.library;return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(l,Object(j.d)(),d,b),t.next=3,e.maxTransferLimitAmount();case 3:n=t.sent,s(new u.a(n.toString()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[b,d,t]),a},v=function(){var t=Object(h.a)().slowRefresh,e=Object(O.a)(),n=e.account,a=e.library,s=Object(o.useState)(new u.a(0)),p=Object(i.a)(s,2),b=p[0],d=p[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(l,Object(j.d)(),a,n),t.next=3,e.MAXIMUM_SUPPLY();case 3:c=t.sent,d(new u.a(c.toString()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,a,t]),b},S=function(){var t=Object(h.a)().slowRefresh,e=Object(O.a)(),n=e.account,a=e.library,s=Object(o.useState)(new u.a(0)),p=Object(i.a)(s,2),b=p[0],d=p[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(l,Object(j.d)(),a,n),t.next=3,e.mintedSupply();case 3:c=t.sent,d(new u.a(c.toString()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,a,t]),b},k=function(){var t=Object(h.a)().slowRefresh,e=Object(O.a)(),n=e.account,a=e.library,s=Object(o.useState)(new u.a(0)),p=Object(i.a)(s,2),b=p[0],d=p[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(l,Object(j.d)(),a,n),t.next=3,e.mintedBurned();case 3:c=t.sent,d(new u.a(c.toString()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,a,t]),b},R=function(){var t=Object(h.a)().slowRefresh,e=Object(O.a)(),n=e.account,a=e.library,s=Object(o.useState)(new u.a(0)),p=Object(i.a)(s,2),b=p[0],d=p[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(l,Object(j.d)(),a,n),t.next=3,e.transferTaxRateSell();case 3:c=t.sent,d(new u.a(c.toString()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,a,t]),b},F=function(){var t=Object(h.a)().slowRefresh,e=Object(O.a)(),n=e.account,a=e.library,s=Object(o.useState)(new u.a(0)),p=Object(i.a)(s,2),b=p[0],d=p[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(l,Object(j.d)(),a,n),t.next=3,e.transferTaxRateBuy();case 3:c=t.sent,d(new u.a(c.toString()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,a,t]),b},C=function(){var t=Object(h.a)().slowRefresh,e=Object(O.a)(),n=e.account,a=e.library,s=Object(o.useState)(new u.a(0)),p=Object(i.a)(s,2),b=p[0],d=p[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(l,Object(j.d)(),a,n),t.next=3,e.mintedTaxed();case 3:c=t.sent,d(new u.a(c.toString()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,a,t]),b},E=function(){var t=Object(h.a)().slowRefresh,e=Object(O.a)(),n=e.account,a=e.library,s=Object(o.useState)(new u.a(0)),l=Object(i.a)(s,2),p=l[0],b=l[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0,b(new u.a((0).toString()));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,a,t]),p},T=function(){var t=Object(h.a)().slowRefresh,e=Object(O.a)(),n=e.account,a=e.library,s=Object(o.useState)(new u.a(0)),l=Object(i.a)(s,2),p=l[0],d=l[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(f.a)(b,Object(j.b)(),a,n),t.next=3,e.rbsPerBlock();case 3:c=t.sent,d(new u.a(c.toString()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,a,t]),p},P=function(t){var e=Object(h.a)().slowRefresh,n=Object(O.a)(),a=n.account,s=n.library,l=Object(o.useState)(new u.a(0)),b=Object(i.a)(l,2),d=b[0],j=b[1];return Object(o.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(f.a)(p,t,s,a),e.next=3,n.getReserves();case 3:c=e.sent,j(new u.a(c._reserve1.toString()).div(new u.a(Math.pow(10,18)).toString()));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,s,e,t]),d},W=function(t){var e=Object(h.a)().slowRefresh,n=Object(O.a)(),a=n.account,s=n.library,p=Object(o.useState)(new u.a(0)),b=Object(i.a)(p,2),d=b[0],g=b[1];return Object(o.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(f.a)(l,Object(j.d)(),s,a),e.next=3,n.balanceOf(t);case 3:c=e.sent,g(new u.a(c.toString()));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,s,e,t]),d};e.a=function(t){var e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1],l=Object(O.a)(),p=l.account,b=l.library,f=Object(h.a)().fastRefresh;return Object(o.useEffect)((function(){var e=function(){var e=Object(c.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(b,t,p);case 2:n=e.sent,s(new u.a(n.toString()));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p&&b&&e()}),[p,b,t,f]),a}},954:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var a=n(2),r=n.n(a),c=n(18),i=n(74),o=n(79);var s=function(t,e,n){var a=new i.ethers.Contract(e,o,function(t,e){return e?function(t,e){return t.getSigner(e).connectUnchecked()}(t,e):t}(t,n));return a},u=function(){var t=Object(c.a)(r.a.mark((function t(e,n,a){var c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=s(e,n,a),t.prev=1,t.next=4,c.balanceOf(a);case 4:return i=t.sent,t.abrupt("return",i);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return","0");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n,a){return t.apply(this,arguments)}}()},970:function(t,e,n){"use strict";var a=n(44),r=n(1503),c=n(1516),i=Object(r.a)((function(t){return Object(c.a)({mainContainer:Object(a.a)({padding:t.spacing(1,6),background:t.palette.background.default,height:"calc(100vh - 64px)"},t.breakpoints.down("xs"),{padding:t.spacing(1,4)}),cardWrapper:Object(a.a)({width:"calc(100% - 423px - 24px)",marginRight:24,hegiht:"368px",padding:t.spacing(16,14),background:t.palette.background.paper,border:"1px solid #464544",borderRadius:16,textAlign:"center",alignItems:"center"},t.breakpoints.down("xs"),{width:"100%",marginRight:0,padding:t.spacing(8,4)}),cardWrapper1:Object(a.a)({width:"calc(100% - 423px - 24px)",marginRight:24,hegiht:"368px",padding:t.spacing(5,4),background:t.palette.background.paper,border:"1px solid #464544",borderRadius:16,textAlign:"center",alignItems:"center"},t.breakpoints.down("xs"),{width:"100%",marginRight:0,padding:t.spacing(3,2),textAlign:"left"}),pageTitle:Object(a.a)({fontSize:34,fontWeight:500,color:"#FF6B2A",fontFamily:"Poppin"},t.breakpoints.down("xs"),{fontSize:32}),subPageTitle:{fontSize:14,fontFamily:"Poppin",color:"#F0EFEF",paddingBottom:t.spacing(5.3)},bgWrapper:Object(a.a)({width:"431px"},t.breakpoints.down("xs"),{width:"unset",marginBottom:t.spacing(5)}),bodyWrapper:Object(a.a)({display:"flex"},t.breakpoints.down("xs"),{width:"100%",flexDirection:"column",marginRight:0}),walletButton:{background:"#FF6B2A",color:"#FCFCFC",padding:"16px 48px",borderRadius:8,fontSize:14,fontFamily:"Poppin"},statsValue:Object(a.a)({display:"flex",justifyContent:"space-between",paddingBottom:t.spacing(3.6)},t.breakpoints.down("xs"),{flexDirection:"column"}),switchButton:{background:"transparent",border:"1px solid rgba(107, 161, 255, 0.2)",borderRadius:8,padding:t.spacing(1,5),fontSize:14,fontFamily:"Poppin",flex:1,marginRight:8},activeSwitcher:{background:"rgba(107, 161, 255, 0.2)"}})})),o={account:i,base:Object(r.a)((function(t){return Object(c.a)({root:{display:"flex",flexDirection:"column"},content:{flexGrow:1,transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:64},contentShift:{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:280}})})),chart:Object(r.a)((function(t){return Object(c.a)({chartHeader:{display:"flex",justifyContent:"space-between",alignItems:"end",width:"100%",paddingTop:24},activeStatus:{background:"#6C60F7 !important",marginRight:8,borderRadius:8},deactiveStatus:{border:"1px solid #6C60F7",background:"transparent",marginRight:8,borderRadius:8},changePercent:{display:"flex","& p":{fontSize:"16px !important",paddingRight:t.spacing(2)}},chartTitle:{fontSize:14,fontWeight:500,color:"#9DD1B2"},currentChartValue:Object(a.a)({fontSize:48,fontWeight:500},t.breakpoints.down("xs"),{fontSize:36}),tabList:{"& span":{fontSize:14,fontWeight:500},"& button":{minWidth:"unset"},"& .MuiTabs-indicator":{height:4,backgroundColor:t.palette.secondary.light}},select:{paddingTop:8,paddingBottom:8},detailChartTabs:Object(a.a)({padding:t.spacing(4),display:"flex",alignItems:"center"},t.breakpoints.down("xs"),{paddingLeft:t.spacing(2),paddingRight:t.spacing(0),"& button":{padding:"6px 8px"}}),metamaskButton:{border:"1px solid #293D71",borderRadius:20,marginTop:8},mobileMenuItem:{fontFamily:"Poppin",fontSize:14}})}))};e.a=o},996:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(997);a.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new a.a(1);var r=new a.a(10512e3),c="https://exchange.robustswap.com";"".concat(c,"/#/add"),"".concat(c,"/#/pool")}}]);
//# sourceMappingURL=12.da40c3f3.chunk.js.map