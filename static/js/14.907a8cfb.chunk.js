(this["webpackJsonprobustswap-frontend-main"]=this["webpackJsonprobustswap-frontend-main"]||[]).push([[14],{1251:function(e,n,t){"use strict";var i=t(37),r=t(9),a=t(0),o=(t(43),t(899)),c=t(256),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var x=a.forwardRef((function(e,n){var t=e.alignContent,c=void 0===t?"stretch":t,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,x=e.className,p=e.component,g=void 0===p?"div":p,b=e.container,f=void 0!==b&&b,u=e.direction,j=void 0===u?"row":u,h=e.item,m=void 0!==h&&h,O=e.justify,y=e.justifyContent,v=void 0===y?"flex-start":y,w=e.lg,C=void 0!==w&&w,S=e.md,k=void 0!==S&&S,F=e.sm,M=void 0!==F&&F,z=e.spacing,W=void 0===z?0:z,B=e.wrap,R=void 0===B?"wrap":B,E=e.xl,I=void 0!==E&&E,A=e.xs,L=void 0!==A&&A,T=e.zeroMinWidth,G=void 0!==T&&T,N=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(o.a)(d.root,x,f&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],m&&d.item,G&&d.zeroMinWidth,"row"!==j&&d["direction-xs-".concat(String(j))],"wrap"!==R&&d["wrap-xs-".concat(String(R))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==(O||v)&&d["justify-content-xs-".concat(String(O||v))],!1!==L&&d["grid-xs-".concat(String(L))],!1!==M&&d["grid-sm-".concat(String(M))],!1!==k&&d["grid-md-".concat(String(k))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==I&&d["grid-xl-".concat(String(I))]);return a.createElement(g,Object(r.a)({className:D,ref:n},N))})),p=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return s.forEach((function(i){var r=e.spacing(i);0!==r&&(t["spacing-".concat(n,"-").concat(i)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),t}(e,"xs"),e.breakpoints.keys.reduce((function(n,t){return function(e,n,t){var i={};l.forEach((function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(r.a)(e,i):e[n.breakpoints.up(t)]=i}(n,e,t),n}),{}))}),{name:"MuiGrid"})(x);n.a=p},1514:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ie}));var i,r,a,o,c,s,l,d,x,p,g,b,f,u,j,h=t(38),m=t(70),O=t(0),y=t(54),v=t(7),w=t(1251),C=t(875),S=t(251),k=t(2),F=t.n(k),M=t(18),z=t(13),W=t.n(z),B=t(943),R=t(199),E=t(106),I=function(){var e=Object(O.useState)(new W.a(0)),n=Object(h.a)(e,2),t=n[0],i=n[1],r=Object(E.a)().account,a=Object(R.a)().fastRefresh,o=Object(B.b)();return Object(O.useEffect)((function(){function e(){return(e=Object(M.a)(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.referralsCount(r);case 2:n=e.sent,i(new W.a(n.toString()));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r&&function(){e.apply(this,arguments)}()}),[r,a,o]),t},A=t(262),L=t(87),T=t(944),G=t(908),N=t(260),D=t(894),H=t(15),$=Object(v.e)(y.g)(i||(i=Object(m.a)(["\n  text-align: center;\n  margin-top: 28px;\n  margin-bottom: 70px;\n"]))),J=v.e.div(r||(r=Object(m.a)(["\n  background: linear-gradient(\n    180deg, #89FFE3, #FFF174\n  );\n  max-width: 990px;\n  width: 90%;\n  background-size: 300% 300%;\n  border-radius: 8px;\n  position: absolute;\n  margin-left:auto;\n  margin-right:auto;\n  padding: 1px;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]))),P=function(){var e=Object(D.a)(),n=Object(C.a)("(max-width: 575px)");return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)($,{children:[Object(H.jsx)(J,{}),Object(H.jsxs)(y.h,{style:{padding:"32px",margin:"1px auto",background:"#151745",borderRadius:8,display:n?"block":"flex",justifyContent:"space-between",maxWidth:987,width:"89.5%",marginLeft:"auto",marginRight:"auto",height:n?"auto":120},children:[Object(H.jsx)(y.C,{fontSize:"24px",color:"white",style:{fontWeight:600,marginTop:"auto",marginBottom:"auto"},children:e(10008,"Unlock your wallet & Get started")}),Object(H.jsx)(T.a,{variant:"primary"})]})]})})},U=v.e.div(a||(a=Object(m.a)(["\n  background-image: ",";\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-bottom: 44px;\n  margin-top: ",";\n\n  height: ",";\n  "," {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n"])),(function(e){return e.isConnect?"url('/images/referrals/img-referral.png')":"url('/images/referrals/img-referral-no-connect.png')"}),(function(e){return e.isMobile?"-15px":"0px"}),(function(e){var n=e.isConnect;return e.isMobile?n?"450px":"410px":"380px"}),(function(e){return e.theme.mediaQueries.lg})),K=Object(v.e)(y.m)(o||(o=Object(m.a)(["\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 40px;\n  letter-spacing: -0.5px;\n  color: #FCFCFC;\n  margin-left: ",";\n"])),(function(e){return e.isMobile?"24px":"80px"})),Q=Object(v.e)(y.C)(c||(c=Object(m.a)(["\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #FCFCFC;\n  max-width: 543px;\n  width: 90%;\n  margin-left: ",";\n  margin-top: 16px;\n"])),(function(e){return e.isMobile?"24px":"80px"})),Y=Object(v.e)(y.C)(s||(s=Object(m.a)(["\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 14px;\n  color: #FCFCFC;\n"]))),q=Object(v.e)(y.C)(l||(l=Object(m.a)(["\n  fontWeight: 300; \n  fontSize: 16px;\n  line-height: 24px;\n  color: #FCFCFC;\n  margin-right: 16px;\n"]))),V=v.e.div(d||(d=Object(m.a)(["\n  background: linear-gradient(\n    180deg, #89FFE3, #FFF174\n  );\n  border-radius: 16px;\n  min-width: ",";\n  max-width: ",";\n  margin-right: 80px;\n  margin-top: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n  padding: 1px;\n  min-height:190px;\n"])),(function(e){return e.isMobile?"312px":"435px"}),(function(e){return e.isMobile?"312px":"435px"}),(function(e){return e.isMobile?"32px":"auto"}),(function(e){return e.isMobile?"34px":"auto"}),(function(e){return e.isMobile?"24px":"none"})),X=v.e.div(x||(x=Object(m.a)(["\n  background: linear-gradient(90.04deg, #0C0720 0.04%, #291A83 99.97%);\n  border-radius: 16px;\n  min-width: ",";\n  max-width: ",";\n  min-height: 188px;\n  padding: 32px;\n"])),(function(e){return e.isMobile?"310px":"433px"}),(function(e){return e.isMobile?"310px":"433px"})),Z=v.e.text(p||(p=Object(m.a)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 28px;\n"]))),_=v.e.div(g||(g=Object(m.a)(["\n  margin-top: 24px;\n  border-radius: 16px;\n  background: #151745;\n  padding: 16px 24px;\n  display: flex;\n  justify-content: space-between;\n"]))),ee=Object(v.e)(y.g)(b||(b=Object(m.a)(["\n  width: 320px;\n  height: 309px;\n  text-align: center;\n  border-radius: 8px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  background: #1E215C;\n  padding: 30px;\n"]))),ne=v.e.div(f||(f=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: 992px;\n  width: 90%;\n  margin: 0px auto 70px auto;\n  padding: 0px;\n"]))),te=(Object(v.e)(y.r)(u||(u=Object(m.a)(["\n  align-self: center;\n  word-break: break-all;\n  color: #E354FA;\n"]))),v.e.div(j||(j=Object(m.a)(["\n  display: ",";\n  justify-content: ",";\n  height: ",";\n  padding-top: ",";\n"])),(function(e){return e.isMobile?"block":"flex"}),(function(e){return e.isMobile?"none":"space-between"}),(function(e){return e.isMobile?"410px":"300px"}),(function(e){var n=e.isMobile,t=e.isConnect;return n?t?"15px":"50px":"0px"}))),ie=function(){Object(A.a)("Referral");var e=Object(D.a)(),n=Object(E.a)().account,t=Object(L.g)().toFixed(2),i=Object(L.h)().toFixed(2),r=Object(S.a)(n),a="https://robustswap.com/?ref=".concat(r),o=I(),c=function(){var e=Object(O.useState)(new W.a(0)),n=Object(h.a)(e,2),t=n[0],i=n[1],r=Object(E.a)().account,a=Object(R.a)().slowRefresh,o=Object(B.b)();return console.log("contract:",o),Object(O.useEffect)((function(){function e(){return(e=Object(M.a)(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.totalReferralCommissions(r);case 2:n=e.sent,console.log("account:",r,n),i(new W.a(n.toString()));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r&&function(){e.apply(this,arguments)}()}),[r,a,o]),t}(),s=Object(C.a)("(max-width: 970px)"),l=Object(O.useState)(!1),d=Object(h.a)(l,2),x=d[0],p=d[1];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(U,{isMobile:s,isConnect:n,children:[!s&&Object(H.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"18px 48px 16px 40px"},children:[Object(H.jsxs)("div",{children:[Object(H.jsx)(Y,{children:"RBS"}),Object(H.jsxs)(q,{children:["$",t]})]}),Object(H.jsx)("div",{style:{height:"38px",borderRight:"1px solid #E2E9EF",display:"block"}}),Object(H.jsxs)("div",{style:{marginLeft:16},children:[Object(H.jsx)(Y,{children:"RBT"}),Object(H.jsxs)(q,{children:["$",i]})]})]}),Object(H.jsxs)(te,{isMobile:s,isConnect:n,children:[Object(H.jsxs)("div",{style:{display:"block",marginTop:"auto",marginBottom:"auto",minWidth:"327px"},children:[Object(H.jsxs)(K,{isMobile:s,children:[Object(H.jsx)("div",{children:e(999,"Invite friends.")}),Object(H.jsx)("div",{children:e(999,"Earn RBS together.")})]}),Object(H.jsx)(Q,{isMobile:s,children:Object(H.jsx)("div",{children:e(999,"Invite your friends with your referral link and get rewarded from their earnings.")})}),!n&&Object(H.jsx)(T.a,{variant:"primary",title:"Get Referral Link",style:{marginLeft:s?24:80,marginTop:16,width:203}})]}),n&&Object(H.jsx)(V,{isMobile:s,children:Object(H.jsxs)(X,{isMobile:s,children:[Object(H.jsxs)(Z,{style:{display:"flex",justifyContent:"space-between"},children:[Object(H.jsx)("div",{children:"My Referral Link"}),x&&Object(H.jsx)("div",{style:{fontSize:14},children:"Link Copied"})]}),Object(H.jsxs)(_,{children:[Object(H.jsx)(y.C,{style:{marginTop:"auto",marginBottom:"auto"},children:s?a.substr(0,10)+".../"+a.substr(a.length-6,6):a.substr(0,18)+".../"+a.substr(a.length-6,6)}),Object(H.jsx)(y.c,{style:{background:"transparent",padding:0},onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(a),p(!0),setTimeout((function(){p(!1)}),1500))},children:Object(H.jsx)(y.k,{})})]})]})})]})]}),Object(H.jsxs)(N.a,{children:[Object(H.jsx)(ne,{children:Object(H.jsx)(y.C,{style:{fontSize:34,lineHeight:"40px",letterSpacing:"0.5px",fontWeight:"bold",color:"#A0B9FB",paddingBottom:16},children:e(999,n?"Dashboard":"How to invite friends")})}),n?Object(H.jsxs)(w.a,{container:!0,spacing:3,style:{backgroundColor:"#1E215C",borderRadius:8,marginTop:0,padding:"24px 48px",maxWidth:992,width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:70},children:[Object(H.jsxs)(w.a,{item:!0,sm:3,xs:12,style:{padding:0},children:[Object(H.jsx)(y.C,{style:{fontSize:16},children:"Your RBS Earnings"}),Object(H.jsx)(y.C,{style:{fontSize:34,fontWeight:600,color:"#E354FA"},children:Math.floor(Object(G.a)(c)).toFixed(4)})]}),Object(H.jsx)(w.a,{item:!0,sm:3,xs:12,style:{padding:0},children:Object(H.jsxs)("div",{style:{width:115},children:[Object(H.jsx)(y.C,{style:{fontSize:16},children:"Total Referrals"}),Object(H.jsx)(y.C,{style:{fontSize:34,fontWeight:600,color:"#E354FA",textAlign:"center"},children:o.toNumber()})]})}),Object(H.jsx)(w.a,{item:!0,sm:6,xs:12,style:{padding:0}})]}):Object(H.jsxs)(w.a,{container:!0,style:{justifyContent:"center"},children:[Object(H.jsxs)(ee,{children:[Object(H.jsx)("img",{src:"/images/referrals/Illu-link.svg",alt:"link",width:"132px",height:"114px"}),Object(H.jsx)(y.C,{style:{fontSize:20,fontWeight:800},children:"Get a referral link"}),Object(H.jsx)(y.C,{style:{fontSize:18,fontStyle:"normal",fontWeight:300,color:"#A0B9FB"},children:"Connect a wallet and generate your referral link"})]}),Object(H.jsxs)(ee,{children:[Object(H.jsx)("img",{src:"/images/referrals/Illu-send.svg",alt:"link",width:"132px",height:"114px"}),Object(H.jsx)(y.C,{style:{fontSize:20,fontWeight:800},children:"Invite friends"}),Object(H.jsx)(y.C,{style:{fontSize:18,fontStyle:"normal",fontWeight:300,color:"#A0B9FB"},children:"Invite your friends to sign up via your referral link"})]}),Object(H.jsxs)(ee,{children:[Object(H.jsx)("img",{src:"/images/referrals/Illus-earn.svg",alt:"link",width:"132px",height:"114px"}),Object(H.jsx)(y.C,{style:{fontSize:20,fontWeight:800},children:"Earn RBS"}),Object(H.jsx)(y.C,{style:{fontSize:18,fontStyle:"normal",fontWeight:300,color:"#A0B9FB"},children:"Receive referral rewards in RBS tokens from your friends' earnings"})]})]}),Object(H.jsx)("div",{children:!n&&Object(H.jsx)(P,{})})]})]})}},899:function(e,n,t){"use strict";function i(e){var n,t,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}},944:function(e,n,t){"use strict";var i=t(20),r=(t(0),t(54)),a=t(155),o=t(15);n.a=function(e){var n=Object(a.a)(),t=n.login,c=n.logout,s=Object(r.H)(t,"0px",c).onPresentConnectModal,l=e,d=l.title?l.title:"UNLOCK WALLET";return Object(o.jsx)(r.c,Object(i.a)(Object(i.a)({variant:"subtle",onClick:s},e),{},{children:d}))}}}]);
//# sourceMappingURL=14.907a8cfb.chunk.js.map