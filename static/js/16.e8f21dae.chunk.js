(this["webpackJsonprobustswap-frontend-main"]=this["webpackJsonprobustswap-frontend-main"]||[]).push([[16],{1185:function(e,n,t){"use strict";var i=t(33),r=t(5),a=t(0),o=(t(37),t(891)),c=t(239),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var x=a.forwardRef((function(e,n){var t=e.alignContent,c=void 0===t?"stretch":t,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,x=e.className,p=e.component,g=void 0===p?"div":p,b=e.container,f=void 0!==b&&b,u=e.direction,j=void 0===u?"row":u,h=e.item,m=void 0!==h&&h,O=e.justify,y=e.justifyContent,v=void 0===y?"flex-start":y,w=e.lg,C=void 0!==w&&w,S=e.md,k=void 0!==S&&S,F=e.sm,M=void 0!==F&&F,z=e.spacing,W=void 0===z?0:z,B=e.wrap,R=void 0===B?"wrap":B,E=e.xl,I=void 0!==E&&E,A=e.xs,L=void 0!==A&&A,T=e.zeroMinWidth,G=void 0!==T&&T,N=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(o.a)(d.root,x,f&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],m&&d.item,G&&d.zeroMinWidth,"row"!==j&&d["direction-xs-".concat(String(j))],"wrap"!==R&&d["wrap-xs-".concat(String(R))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==(O||v)&&d["justify-content-xs-".concat(String(O||v))],!1!==L&&d["grid-xs-".concat(String(L))],!1!==M&&d["grid-sm-".concat(String(M))],!1!==k&&d["grid-md-".concat(String(k))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==I&&d["grid-xl-".concat(String(I))]);return a.createElement(g,Object(r.a)({className:D,ref:n},N))})),p=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return s.forEach((function(i){var r=e.spacing(i);0!==r&&(t["spacing-".concat(n,"-").concat(i)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),t}(e,"xs"),e.breakpoints.keys.reduce((function(n,t){return function(e,n,t){var i={};l.forEach((function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[n]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(r.a)(e,i):e[n.breakpoints.up(t)]=i}(n,e,t),n}),{}))}),{name:"MuiGrid"})(x);n.a=p},1339:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ne}));var i,r,a,o,c,s,l,d,x,p,g,b,f,u,j=t(23),h=t(63),m=t(0),O=t(48),y=t(3),v=t(1185),w=t(866),C=t(76),S=t(235),k=t(6),F=t.n(k),M=t(17),z=t(12),W=t.n(z),B=t(934),R=t(182),E=function(){var e=Object(m.useState)(new W.a(0)),n=Object(j.a)(e,2),t=n[0],i=n[1],r=Object(C.m)().account,a=Object(R.a)().fastRefresh,o=Object(B.b)();return Object(m.useEffect)((function(){function e(){return(e=Object(M.a)(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.methods.referralsCount(r).call();case 2:n=e.sent,i(new W.a(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r&&function(){e.apply(this,arguments)}()}),[r,a,o]),t},I=t(245),A=t(75),L=t(936),T=t(243),G=t(886),N=t(15),D=Object(y.e)(O.g)(i||(i=Object(h.a)(["\n  text-align: center;\n  margin-top: 28px;\n  margin-bottom: 70px;\n"]))),H=y.e.div(r||(r=Object(h.a)(["\n  background: linear-gradient(\n    180deg, #89FFE3, #FFF174\n  );\n  max-width: 990px;\n  width: 90%;\n  background-size: 300% 300%;\n  border-radius: 8px;\n  position: absolute;\n  margin-left:auto;\n  margin-right:auto;\n  padding: 1px;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]))),$=function(){var e=Object(G.a)(),n=Object(w.a)("(max-width: 575px)");return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(D,{children:[Object(N.jsx)(H,{}),Object(N.jsxs)(O.h,{style:{padding:"32px",margin:"1px auto",background:"#151745",borderRadius:8,display:n?"block":"flex",justifyContent:"space-between",maxWidth:987,width:"89.5%",marginLeft:"auto",marginRight:"auto",height:n?"auto":120},children:[Object(N.jsx)(O.C,{fontSize:"24px",color:"white",style:{fontWeight:600,marginTop:"auto",marginBottom:"auto"},children:e(10008,"Unlock your wallet & Get started")}),Object(N.jsx)(L.a,{variant:"primary"})]})]})})},J=y.e.div(a||(a=Object(h.a)(["\n  background-image: ",";\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-bottom: 44px;\n  margin-top: ",";\n\n  height: ",";\n  "," {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n"])),(function(e){return e.isConnect?"url('/images/referrals/img-referral.png')":"url('/images/referrals/img-referral-no-connect.png')"}),(function(e){return e.isMobile?"-15px":"0px"}),(function(e){var n=e.isConnect;return e.isMobile?n?"450px":"410px":"380px"}),(function(e){return e.theme.mediaQueries.lg})),P=Object(y.e)(O.m)(o||(o=Object(h.a)(["\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 40px;\n  letter-spacing: -0.5px;\n  color: #FCFCFC;\n  margin-left: ",";\n"])),(function(e){return e.isMobile?"24px":"80px"})),U=Object(y.e)(O.C)(c||(c=Object(h.a)(["\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #FCFCFC;\n  max-width: 543px;\n  width: 90%;\n  margin-left: ",";\n  margin-top: 16px;\n"])),(function(e){return e.isMobile?"24px":"80px"})),K=Object(y.e)(O.C)(s||(s=Object(h.a)(["\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 14px;\n  color: #FCFCFC;\n"]))),Q=Object(y.e)(O.C)(l||(l=Object(h.a)(["\n  fontWeight: 300; \n  fontSize: 16px;\n  line-height: 24px;\n  color: #FCFCFC;\n  margin-right: 16px;\n"]))),Y=y.e.div(d||(d=Object(h.a)(["\n  background: linear-gradient(\n    180deg, #89FFE3, #FFF174\n  );\n  border-radius: 16px;\n  min-width: ",";\n  max-width: ",";\n  margin-right: 80px;\n  margin-top: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n  padding: 1px;\n  min-height:190px;\n"])),(function(e){return e.isMobile?"312px":"435px"}),(function(e){return e.isMobile?"312px":"435px"}),(function(e){return e.isMobile?"32px":"auto"}),(function(e){return e.isMobile?"34px":"auto"}),(function(e){return e.isMobile?"24px":"none"})),q=y.e.div(x||(x=Object(h.a)(["\n  background: linear-gradient(90.04deg, #0C0720 0.04%, #291A83 99.97%);\n  border-radius: 16px;\n  min-width: ",";\n  max-width: ",";\n  min-height: 188px;\n  padding: 32px;\n"])),(function(e){return e.isMobile?"310px":"433px"}),(function(e){return e.isMobile?"310px":"433px"})),V=y.e.text(p||(p=Object(h.a)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 28px;\n"]))),X=y.e.div(g||(g=Object(h.a)(["\n  margin-top: 24px;\n  border-radius: 16px;\n  background: #151745;\n  padding: 16px 24px;\n  display: flex;\n  justify-content: space-between;\n"]))),Z=Object(y.e)(O.g)(b||(b=Object(h.a)(["\n  width: 320px;\n  height: 309px;\n  text-align: center;\n  border-radius: 8px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  background: #1E215C;\n  padding: 30px;\n"]))),_=y.e.div(f||(f=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: 992px;\n  width: 90%;\n  margin: 0px auto 70px auto;\n  padding: 0px;\n"]))),ee=y.e.div(u||(u=Object(h.a)(["\n  display: ",";\n  justify-content: ",";\n  height: ",";\n  padding-top: ",";\n"])),(function(e){return e.isMobile?"block":"flex"}),(function(e){return e.isMobile?"none":"space-between"}),(function(e){return e.isMobile?"410px":"300px"}),(function(e){var n=e.isMobile,t=e.isConnect;return n?t?"15px":"50px":"0px"})),ne=function(){Object(I.a)("Referral");var e=Object(G.a)(),n=Object(C.m)().account,t=Object(A.g)().toFixed(2),i=Object(A.h)().toFixed(2),r=Object(S.a)(n),a="https://robustswap.com/?ref=".concat(r),o=E(),c=function(){var e=Object(m.useState)(new W.a(0)),n=Object(j.a)(e,2),t=n[0],i=n[1],r=Object(C.m)().account,a=Object(R.a)().slowRefresh,o=Object(B.b)();return Object(m.useEffect)((function(){function e(){return(e=Object(M.a)(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.methods.totalReferralCommissions(r).call();case 2:n=e.sent,console.log(n),i(new W.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r&&function(){e.apply(this,arguments)}()}),[r,a,o]),t}(),s=Object(w.a)("(max-width: 970px)"),l=Object(m.useState)(!1),d=Object(j.a)(l,2),x=d[0],p=d[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(J,{isMobile:s,isConnect:n,children:[!s&&Object(N.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"18px 48px 16px 40px"},children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(K,{children:"RBS"}),Object(N.jsxs)(Q,{children:["$",t]})]}),Object(N.jsx)("div",{style:{height:"38px",borderRight:"1px solid #E2E9EF",display:"block"}}),Object(N.jsxs)("div",{style:{marginLeft:16},children:[Object(N.jsx)(K,{children:"RBT"}),Object(N.jsxs)(Q,{children:["$",i]})]})]}),Object(N.jsxs)(ee,{isMobile:s,isConnect:n,children:[Object(N.jsxs)("div",{style:{display:"block",marginTop:"auto",marginBottom:"auto",minWidth:"327px"},children:[Object(N.jsxs)(P,{isMobile:s,children:[Object(N.jsx)("div",{children:e(999,"Invite friends.")}),Object(N.jsx)("div",{children:e(999,"Earn RBS together.")})]}),Object(N.jsx)(U,{isMobile:s,children:Object(N.jsx)("div",{children:e(999,"Invite your friends with your referral link and get rewarded from their earnings.")})}),!n&&Object(N.jsx)(L.a,{variant:"primary",title:"Get Referral Link",style:{marginLeft:s?24:80,marginTop:16,width:203}})]}),n&&Object(N.jsx)(Y,{isMobile:s,children:Object(N.jsxs)(q,{isMobile:s,children:[Object(N.jsxs)(V,{style:{display:"flex",justifyContent:"space-between"},children:[Object(N.jsx)("div",{children:"My Referral Link"}),x&&Object(N.jsx)("div",{style:{fontSize:14},children:"Link Copied"})]}),Object(N.jsxs)(X,{children:[Object(N.jsx)(O.C,{style:{marginTop:"auto",marginBottom:"auto"},children:s?a.substr(0,10)+".../"+a.substr(a.length-6,6):a.substr(0,18)+".../"+a.substr(a.length-6,6)}),Object(N.jsx)(O.c,{style:{background:"transparent",padding:0},onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(a),p(!0),setTimeout((function(){p(!1)}),1500))},children:Object(N.jsx)(O.k,{})})]})]})})]})]}),Object(N.jsxs)(T.a,{children:[Object(N.jsx)(_,{children:Object(N.jsx)(O.C,{style:{fontSize:34,lineHeight:"40px",letterSpacing:"0.5px",fontWeight:"bold",color:"#A0B9FB",paddingBottom:16},children:e(999,n?"Dashboard":"How to invite friends")})}),n?Object(N.jsxs)(v.a,{container:!0,spacing:3,style:{backgroundColor:"#1E215C",borderRadius:8,marginTop:0,padding:"24px 48px",maxWidth:992,width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:70},children:[Object(N.jsxs)(v.a,{item:!0,sm:3,xs:12,style:{padding:0},children:[Object(N.jsx)(O.C,{style:{fontSize:16},children:"Your earnings"}),Object(N.jsxs)(O.C,{style:{fontSize:34,fontWeight:600,color:"#E354FA"},children:[c.toNumber()," RBS"]})]}),Object(N.jsxs)(v.a,{item:!0,sm:3,xs:12,style:{padding:0},children:[Object(N.jsx)(O.C,{style:{fontSize:16},children:"Total referrals"}),Object(N.jsx)(O.C,{style:{fontSize:34,fontWeight:600,color:"#E354FA"},children:o.toNumber()})]}),Object(N.jsx)(v.a,{item:!0,sm:3,xs:12}),Object(N.jsx)(v.a,{item:!0,sm:3,xs:12})]}):Object(N.jsxs)(v.a,{container:!0,style:{justifyContent:"center"},children:[Object(N.jsxs)(Z,{children:[Object(N.jsx)("img",{src:"/images/referrals/Illu-link.svg",alt:"link",width:"132px",height:"114px"}),Object(N.jsx)(O.C,{style:{fontSize:20,fontWeight:800},children:"Get a referral link"}),Object(N.jsx)(O.C,{style:{fontSize:18,fontStyle:"normal",fontWeight:300,color:"#A0B9FB"},children:"Connect a wallet and generate your referral link"})]}),Object(N.jsxs)(Z,{children:[Object(N.jsx)("img",{src:"/images/referrals/Illu-send.svg",alt:"link",width:"132px",height:"114px"}),Object(N.jsx)(O.C,{style:{fontSize:20,fontWeight:800},children:"Invite friends"}),Object(N.jsx)(O.C,{style:{fontSize:18,fontStyle:"normal",fontWeight:300,color:"#A0B9FB"},children:"Invite your friends to sign up via your referral link"})]}),Object(N.jsxs)(Z,{children:[Object(N.jsx)("img",{src:"/images/referrals/Illus-earn.svg",alt:"link",width:"132px",height:"114px"}),Object(N.jsx)(O.C,{style:{fontSize:20,fontWeight:800},children:"Earn RBS"}),Object(N.jsx)(O.C,{style:{fontSize:18,fontStyle:"normal",fontWeight:300,color:"#A0B9FB"},children:"Receive referral rewards in RBS tokens from your friends' earnings"})]})]}),Object(N.jsx)("div",{children:!n&&Object(N.jsx)($,{})})]})]})}},891:function(e,n,t){"use strict";function i(e){var n,t,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}},936:function(e,n,t){"use strict";var i=t(18),r=(t(0),t(48)),a=t(76),o=t(15);n.a=function(e){var n=Object(a.m)(),t=n.connect,c=n.reset,s=Object(r.H)(t,"0px",c).onPresentConnectModal,l=e,d=l.title?l.title:"UNLOCK WALLET";return Object(o.jsx)(r.c,Object(i.a)(Object(i.a)({variant:"subtle",onClick:s},e),{},{children:d}))}}}]);
//# sourceMappingURL=16.e8f21dae.chunk.js.map