(this["webpackJsonprobustswap-frontend-main"]=this["webpackJsonprobustswap-frontend-main"]||[]).push([[14],{1049:function(t,e,n){"use strict";var a=n(6),r=n.n(a),c=n(17),i=n(23),o=n(0),s=n(76),u=n(28),l=n(31),p=n(65),d=n(958),f=n(182);e.a=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],b=Object(s.m)().account,h=Object(f.a)().fastRefresh;return Object(o.useEffect)((function(){var t=function(){var t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=d.a.map((function(t){return{address:Object(l.b)(),name:"pendingRBS",params:[t.pid,b]}})),t.next=3,Object(u.a)(p,e);case 3:n=t.sent,a(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();b&&t()}),[b,h]),n}},1338:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return H}));var a=n(41),r=n(18),c=n(23),i=n(0),o=n(891),s=n(866),u=n(986),l=n(76),p=n(898),d=n(31),f=n(5),b=n(33),h=(n(37),n(1331)),j=n(239),g=i.forwardRef((function(t,e){var n=t.classes,a=t.className,r=t.raised,c=void 0!==r&&r,s=Object(b.a)(t,["classes","className","raised"]);return i.createElement(h.a,Object(f.a)({className:Object(o.a)(n.root,a),elevation:c?8:1,ref:e},s))})),O=Object(j.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(g),m=n(1330),x=n(928),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},v=i.forwardRef((function(t,e){var n=t.align,a=void 0===n?"inherit":n,r=t.classes,c=t.className,s=t.color,u=void 0===s?"initial":s,l=t.component,p=t.display,d=void 0===p?"initial":p,h=t.gutterBottom,j=void 0!==h&&h,g=t.noWrap,O=void 0!==g&&g,m=t.paragraph,v=void 0!==m&&m,w=t.variant,S=void 0===w?"body1":w,k=t.variantMapping,F=void 0===k?y:k,R=Object(b.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),C=l||(v?"p":F[S]||y[S])||"span";return i.createElement(C,Object(f.a)({className:Object(o.a)(r.root,c,"inherit"!==S&&r[S],"initial"!==u&&r["color".concat(Object(x.a)(u))],O&&r.noWrap,j&&r.gutterBottom,v&&r.paragraph,"inherit"!==a&&r["align".concat(Object(x.a)(a))],"initial"!==d&&r["display".concat(Object(x.a)(d))]),ref:e},R))})),w=Object(j.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(v),S=n(1337),k=n(175),F=i.forwardRef((function(t,e){var n=t.absolute,a=void 0!==n&&n,r=t.classes,c=t.className,s=t.component,u=void 0===s?"hr":s,l=t.flexItem,p=void 0!==l&&l,d=t.light,h=void 0!==d&&d,j=t.orientation,g=void 0===j?"horizontal":j,O=t.role,m=void 0===O?"hr"!==u?"separator":void 0:O,x=t.variant,y=void 0===x?"fullWidth":x,v=Object(b.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(u,Object(f.a)({className:Object(o.a)(r.root,c,"fullWidth"!==y&&r[y],a&&r.absolute,p&&r.flexItem,h&&r.light,"vertical"===g&&r.vertical),role:m,ref:e},v))})),R=Object(j.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(k.a)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(F),C=n(1342),T=n(1335),P=n(1076),E=n.n(P),N=n(48),W=n(886),B=n(75),z=n(985),A=n(16),L=n(945),I=n(1049),M=n(957),D=n(996),U=n(15),H=function(){var t=M.a.account(),e=Object(W.a)(),n=Object(s.a)("(max-width: 800px)"),f=Object(l.m)(),b=f.connect,h=f.reset,j=Object(l.m)().account,g=Object(N.H)(b,"0px",h).onPresentConnectModal,x=Object(i.useState)(0),y=Object(c.a)(x,2),v=y[0],k=y[1],F=Object(i.useState)(0),P=Object(c.a)(F,2),H=P[0],_=P[1],V=Object(B.m)(),q=Object(L.l)(),Y=Object(L.b)(Object(d.d)()),J=Object(L.e)(Object(d.d)()),X=Object(D.b)().plus(J),K=q?q.minus(Y.plus(X)):new u.a(0),$=Object(p.a)(K),G=Object(I.a)().reduce((function(t,e){return t+new u.a(e).div(new u.a(10).pow(18)).toNumber()}),0),Q=Object(B.g)(),Z=Object(B.e)(),tt=Object(B.f)(),et=Object(B.i)(),nt=Object(B.j)(),at=function(t){var e=t;"number"!==typeof e&&(e=e.target.value),k(e);var n=G/365;0===e?n=G/365:1===e?n=G/52:2===e?n=G/12:3===e&&(n=G),_(n)},rt=Object(B.c)().filter((function(t){return!0===!!t.isTokenOnly&&"0X"!==t.multiplier})).map((function(t){var e=new u.a(t.rbsPerBlock||1).times(new u.a(t.poolWeight)).div(new u.a(10).pow(18)).times(z.a),n=Q.times(e),a=new u.a(t.lpTotalInQuoteToken||0);return t.quoteTokenSymbol===A.b.BNB&&(a=a.times(Z)),t.quoteTokenSymbol===A.b.ETH&&(a=a.times(tt)),t.quoteTokenSymbol===A.b.USDC&&(a=a.times(et)),t.quoteTokenSymbol===A.b.USDT&&(a=a.times(nt)),a.comparedTo(0)>0&&(n=n.div(a)),Object(r.a)(Object(r.a)({},t),{},{apy:n})})),ct=rt[0].apy&&rt[0].apy.times(new u.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2});return Object(U.jsxs)(S.a,{className:t.mainContainer,children:[Object(U.jsx)(w,{className:t.pageTitle,children:"Your PANTHER Stats"}),Object(U.jsx)(w,{className:t.subPageTitle,children:"Keep track of your pool & farms."}),Object(U.jsxs)(S.a,{className:t.bodyWrapper,children:[j?Object(U.jsxs)(O,{className:t.cardWrapper1,children:[Object(U.jsxs)(S.a,{className:t.statsValue,children:[Object(U.jsx)(w,{style:{fontSize:24,fontWeight:600,fontFamily:"Poppin",color:"#7381FC"},children:"TVL All Pools"}),Object(U.jsxs)(w,{style:{fontSize:24,fontWeight:600,fontFamily:"Poppin",color:"#F0EFEF"},children:["$",V?V.toNumber().toLocaleString():0]})]}),Object(U.jsxs)(S.a,{className:t.statsValue,children:[Object(U.jsx)(w,{style:{fontSize:24,fontWeight:600,fontFamily:"Poppin",color:"#7381FC"},children:"PANTHER Holdings"}),Object(U.jsx)(w,{style:{fontSize:24,fontWeight:600,fontFamily:"Poppin",color:"#F0EFEF"},children:$?$.toLocaleString():0})]}),Object(U.jsx)(S.a,{style:{background:"#6BA1FF",color:"#FCFCFC",borderRadius:8,fontFamily:"Poppin",fontSize:20,fontWeight:"bold",padding:"9px 32px",textAlign:"left",marginTop:8},children:"Earnings"}),n?Object(U.jsx)(S.a,{children:Object(U.jsxs)(T.a,{value:v,onChange:at,IconComponent:function(){return Object(U.jsx)(E.a,{})},style:{width:"100%",paddingLeft:"16px",paddingRight:"16px",background:"rgba(107, 161, 255, 0.2)",marginTop:"24px",borderRadius:8,fontFamily:"Poppin"},disableUnderline:!0,MenuProps:{getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"}},children:[Object(U.jsx)(C.a,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},value:0,children:Object(U.jsx)(w,{style:{fontSize:"20px",fontWeight:500,padding:"0px 16px",fontFamily:"Poppin"},children:"Daily"})}),Object(U.jsx)(C.a,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},value:1,children:Object(U.jsx)(w,{style:{fontSize:"20px",fontWeight:500,padding:"0px 16px",fontFamily:"Poppin"},children:"Weekly"})}),Object(U.jsx)(C.a,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},value:2,children:Object(U.jsx)(w,{style:{fontSize:"20px",fontWeight:500,padding:"0px 16px",fontFamily:"Poppin"},children:"Monthly"})}),Object(U.jsx)(C.a,{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},value:3,children:Object(U.jsx)(w,{style:{fontSize:"20px",fontWeight:500,padding:"0px 16px",fontFamily:"Poppin"},children:"Yearly"})})]})}):Object(U.jsxs)(S.a,{style:{width:"100%",display:"flex",justifyContent:"space-between",paddingTop:24},children:[Object(U.jsx)(m.a,{className:Object(o.a)(t.switchButton,Object(a.a)({},t.activeSwitcher,0===v)),onClick:function(){return at(0)},children:"Daily"}),Object(U.jsx)(m.a,{className:Object(o.a)(t.switchButton,Object(a.a)({},t.activeSwitcher,1===v)),onClick:function(){return at(1)},children:"Weekly"}),Object(U.jsx)(m.a,{className:Object(o.a)(t.switchButton,Object(a.a)({},t.activeSwitcher,2===v)),onClick:function(){return at(2)},children:"Monthly"}),Object(U.jsx)(m.a,{style:{marginRight:0},className:Object(o.a)(t.switchButton,Object(a.a)({},t.activeSwitcher,3===v)),onClick:function(){return at(3)},children:"Yearly"})]}),Object(U.jsxs)(S.a,{style:{textAlign:"left",alignItems:"center",display:"flex",paddingTop:16,paddingBottom:24},children:[Object(U.jsx)("img",{src:"",alt:"",style:{width:60,height:60}}),Object(U.jsxs)(S.a,{children:[Object(U.jsx)(w,{style:{paddingLeft:16,fontSize:34,fontWeight:500,fontFamily:"Poppin"},children:H?H.toFixed(3):(G/365).toFixed(3)}),Object(U.jsxs)(w,{style:{paddingLeft:16,fontSize:20,fontWeight:"bold",fontFamily:"Poppin"},children:["$ ",H?(Q.toNumber()*H).toFixed(2):(Q.toNumber()*G/365).toFixed(2)]})]})]}),Object(U.jsx)(R,{}),Object(U.jsxs)(S.a,{style:{textAlign:"left",paddingTop:24},children:[Object(U.jsx)(w,{style:{fontSize:20,fontWeight:"bold",fontFamily:"Poppin",paddingBottom:0},children:e(352,"APR")}),Object(U.jsxs)(w,{style:{fontSize:34,fontWeight:500,fontFamily:"Poppin",paddingTop:0},children:[ct," %"]})]})]}):Object(U.jsxs)(O,{className:t.cardWrapper,children:[Object(U.jsx)(w,{style:{fontSize:16,fontFamily:"Poppin",paddingBottom:24},children:"Please unlock your wallet to see your stats"}),Object(U.jsx)(m.a,{className:t.walletButton,onClick:g,children:"UNLOCK WALLET"})]}),j?Object(U.jsx)(S.a,{className:t.bgWrapper,children:Object(U.jsx)("img",{src:"/images/stats-bg-active.svg",alt:"bg_image"})}):Object(U.jsx)(S.a,{className:t.bgWrapper,children:Object(U.jsx)("img",{src:"/images/stats-bg.svg",alt:"bg_image"})})]})]})}},898:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));var a=n(12),r=n.n(a),c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=new r.a(t).dividedBy(new r.a(10).pow(e));return n.toNumber()},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return t.dividedBy(new r.a(10).pow(e)).toFixed()}},945:function(t,e,n){"use strict";n.d(e,"l",(function(){return O})),n.d(e,"b",(function(){return m})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return y})),n.d(e,"g",(function(){return v})),n.d(e,"i",(function(){return w})),n.d(e,"h",(function(){return S})),n.d(e,"k",(function(){return k})),n.d(e,"c",(function(){return F})),n.d(e,"m",(function(){return R})),n.d(e,"j",(function(){return C})),n.d(e,"d",(function(){return T}));var a=n(6),r=n.n(a),c=n(17),i=n(23),o=n(0),s=n(12),u=n.n(s),l=n(76),p=n(251),d=n(975),f=n(65),b=n(115),h=n(946),j=n(31),g=n(182),O=function(){var t=Object(g.a)().slowRefresh,e=Object(o.useState)(),n=Object(i.a)(e,2),a=n[0],s=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.totalSupply().call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),a},m=function(t){var e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1],l=Object(g.a)().fastRefresh;return Object(o.useEffect)((function(){var t=function(){var t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[t,l]),a},x=function(t){var e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1],l=Object(g.a)().slowRefresh;return Object(o.useEffect)((function(){var t=function(){var t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.balanceOf(Object(j.b)()).call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[t,l]),a},y=function(){var t=Object(g.a)().slowRefresh,e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.maxTransferLimitAmount().call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),a},v=function(){var t=Object(g.a)().slowRefresh,e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.MAXIMUM_SUPPLY().call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),a},w=function(){var t=Object(g.a)().slowRefresh,e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.mintedSupply().call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),a},S=function(){var t=Object(g.a)().slowRefresh,e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.mintedBurned().call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),a},k=function(){var t=Object(g.a)().slowRefresh,e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.transferTaxRateSell().call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),a},F=function(){var t=Object(g.a)().slowRefresh,e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.transferTaxRateBuy().call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),a},R=function(){var t=Object(g.a)().slowRefresh,e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(p,Object(j.d)()),t.next=3,e.methods.transferTaxRate().call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),a},C=function(){var t=Object(g.a)().slowRefresh,e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(b.a)(f,Object(j.b)()),t.next=3,e.methods.rbsPerBlock().call();case 3:n=t.sent,s(new u.a(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[t]),a},T=function(t){var e=Object(g.a)().slowRefresh,n=Object(o.useState)(new u.a(0)),a=Object(i.a)(n,2),s=a[0],l=a[1];return Object(o.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(b.a)(d,t),e.next=3,n.methods.getReserves().call();case 3:a=e.sent,l(new u.a(null===a||void 0===a?void 0:a._reserve1).div(new u.a(Math.pow(10,18))));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e,t]),s};e.a=function(t){var e=Object(o.useState)(new u.a(0)),n=Object(i.a)(e,2),a=n[0],s=n[1],p=Object(l.m)().ethereum,d=Object(l.m)().account,f=Object(g.a)().fastRefresh;return Object(o.useEffect)((function(){var e=function(){var e=Object(c.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.b)(p,t,d);case 2:n=e.sent,s(new u.a(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();d&&p&&e()}),[d,p,t,f]),a}},946:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}));var a=n(6),r=n.n(a),c=n(17),i=n(97),o=n.n(i),s=n(72),u=function(t,e){return new(new o.a(t).eth.Contract)(s,e)},l=function(){var t=Object(c.a)(r.a.mark((function t(e,n,a){var c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=u(e,n),t.prev=1,t.next=4,c.methods.balanceOf(a).call();case 4:return i=t.sent,t.abrupt("return",i);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return","0");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n,a){return t.apply(this,arguments)}}()},957:function(t,e,n){"use strict";var a=n(41),r=n(1328),c=n(1341),i=Object(r.a)((function(t){return Object(c.a)({mainContainer:Object(a.a)({padding:t.spacing(1,6),background:t.palette.background.default,height:"calc(100vh - 64px)"},t.breakpoints.down("xs"),{padding:t.spacing(1,4)}),cardWrapper:Object(a.a)({width:"calc(100% - 423px - 24px)",marginRight:24,hegiht:"368px",padding:t.spacing(16,14),background:t.palette.background.paper,border:"1px solid #464544",borderRadius:16,textAlign:"center",alignItems:"center"},t.breakpoints.down("xs"),{width:"100%",marginRight:0,padding:t.spacing(8,4)}),cardWrapper1:Object(a.a)({width:"calc(100% - 423px - 24px)",marginRight:24,hegiht:"368px",padding:t.spacing(5,4),background:t.palette.background.paper,border:"1px solid #464544",borderRadius:16,textAlign:"center",alignItems:"center"},t.breakpoints.down("xs"),{width:"100%",marginRight:0,padding:t.spacing(3,2),textAlign:"left"}),pageTitle:Object(a.a)({fontSize:34,fontWeight:500,color:"#FF6B2A",fontFamily:"Poppin"},t.breakpoints.down("xs"),{fontSize:32}),subPageTitle:{fontSize:14,fontFamily:"Poppin",color:"#F0EFEF",paddingBottom:t.spacing(5.3)},bgWrapper:Object(a.a)({width:"431px"},t.breakpoints.down("xs"),{width:"unset",marginBottom:t.spacing(5)}),bodyWrapper:Object(a.a)({display:"flex"},t.breakpoints.down("xs"),{width:"100%",flexDirection:"column",marginRight:0}),walletButton:{background:"#FF6B2A",color:"#FCFCFC",padding:"16px 48px",borderRadius:8,fontSize:14,fontFamily:"Poppin"},statsValue:Object(a.a)({display:"flex",justifyContent:"space-between",paddingBottom:t.spacing(3.6)},t.breakpoints.down("xs"),{flexDirection:"column"}),switchButton:{background:"transparent",border:"1px solid rgba(107, 161, 255, 0.2)",borderRadius:8,padding:t.spacing(1,5),fontSize:14,fontFamily:"Poppin",flex:1,marginRight:8},activeSwitcher:{background:"rgba(107, 161, 255, 0.2)"}})})),o={account:i,base:Object(r.a)((function(t){return Object(c.a)({root:{display:"flex",flexDirection:"column"},content:{flexGrow:1,transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:64},contentShift:{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:280}})})),chart:Object(r.a)((function(t){return Object(c.a)({chartHeader:{display:"flex",justifyContent:"space-between",alignItems:"end",width:"100%",paddingTop:24},activeStatus:{background:"#6C60F7 !important",marginRight:8,borderRadius:8},deactiveStatus:{border:"1px solid #6C60F7",background:"transparent",marginRight:8,borderRadius:8},changePercent:{display:"flex","& p":{fontSize:"16px !important",paddingRight:t.spacing(2)}},chartTitle:{fontSize:14,fontWeight:500,color:"#9DD1B2"},currentChartValue:Object(a.a)({fontSize:48,fontWeight:500},t.breakpoints.down("xs"),{fontSize:36}),tabList:{"& span":{fontSize:14,fontWeight:500},"& button":{minWidth:"unset"},"& .MuiTabs-indicator":{height:4,backgroundColor:t.palette.secondary.light}},select:{paddingTop:8,paddingBottom:8},detailChartTabs:Object(a.a)({padding:t.spacing(4),display:"flex",alignItems:"center"},t.breakpoints.down("xs"),{paddingLeft:t.spacing(2),paddingRight:t.spacing(0),"& button":{padding:"6px 8px"}}),metamaskButton:{border:"1px solid #293D71",borderRadius:20,marginTop:8},mobileMenuItem:{fontFamily:"Poppin",fontSize:14}})}))};e.a=o},985:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(986);a.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new a.a(1);var r=new a.a(10512e3),c="https://exchange.robustswap.com";"".concat(c,"/#/add"),"".concat(c,"/#/pool")},996:function(t,e,n){"use strict";n.d(e,"b",(function(){return O}));var a=n(6),r=n.n(a),c=n(18),i=n(17),o=n(23),s=n(0),u=n(12),l=n.n(u),p=n(76),d=n(28),f=n(31),b=n(65),h=n(958),j=n(182),g=n(934),O=function(){var t=Object(s.useState)(new l.a(0)),e=Object(o.a)(t,2),n=e[0],a=e[1],c=Object(j.a)().slowRefresh,u=Object(g.a)();return Object(s.useEffect)((function(){function t(){return(t=Object(i.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.methods.totalLockedUpRewards().call();case 2:e=t.sent,console.log("locked:",e),a(new l.a(e));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[c,u]),n};e.a=function(){var t=Object(s.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1],u=Object(p.m)().account,g=Object(j.a)().fastRefresh;return Object(s.useEffect)((function(){var t=function(){var t=Object(i.a)(r.a.mark((function t(){var e,n,i,o,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=h.a.map((function(t){return{address:Object(f.b)(),name:"pendingRBS",params:[t.pid,u]}})),n=h.a.map((function(t){return{address:Object(f.b)(),name:"userInfo",params:[t.pid,u]}})),t.next=4,Object(d.a)(b,e);case 4:return i=t.sent,t.next=7,Object(d.a)(b,n);case 7:o=t.sent,s=h.a.map((function(t,e){return Object(c.a)(Object(c.a)({},t),{},{balance:new l.a(i[e]),nextHarvestUntil:o[e].nextHarvestUntil.toNumber()})})),a(s);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();u&&t()}),[u,g]),n}}}]);
//# sourceMappingURL=14.f9528d20.chunk.js.map