(this["webpackJsonprobustswap-frontend-main"]=this["webpackJsonprobustswap-frontend-main"]||[]).push([[14],{1251:function(e,t,n){"use strict";var i=n(37),r=n(9),o=n(0),a=(n(43),n(899)),c=n(256),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var x=o.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,x=e.className,g=e.component,p=void 0===g?"div":g,b=e.container,f=void 0!==b&&b,u=e.direction,j=void 0===u?"row":u,h=e.item,m=void 0!==h&&h,O=e.justify,y=e.justifyContent,v=void 0===y?"flex-start":y,w=e.lg,C=void 0!==w&&w,k=e.md,S=void 0!==k&&k,F=e.sm,M=void 0!==F&&F,z=e.spacing,W=void 0===z?0:z,B=e.wrap,R=void 0===B?"wrap":B,D=e.xl,E=void 0!==D&&D,I=e.xs,A=void 0!==I&&I,L=e.zeroMinWidth,T=void 0!==L&&L,G=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),N=Object(a.a)(d.root,x,f&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],m&&d.item,T&&d.zeroMinWidth,"row"!==j&&d["direction-xs-".concat(String(j))],"wrap"!==R&&d["wrap-xs-".concat(String(R))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==(O||v)&&d["justify-content-xs-".concat(String(O||v))],!1!==A&&d["grid-xs-".concat(String(A))],!1!==M&&d["grid-sm-".concat(String(M))],!1!==S&&d["grid-md-".concat(String(S))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==E&&d["grid-xl-".concat(String(E))]);return o.createElement(p,Object(r.a)({className:N,ref:t},G))})),g=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(i){var r=e.spacing(i);0!==r&&(n["spacing-".concat(t,"-").concat(i)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var i={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,i):e[t.breakpoints.up(n)]=i}(t,e,n),t}),{}))}),{name:"MuiGrid"})(x);t.a=g},1514:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ne}));var i,r,o,a,c,s,l,d,x,g,p,b,f,u,j=n(38),h=n(70),m=n(0),O=n(54),y=n(7),v=n(1251),w=n(875),C=n(251),k=n(2),S=n.n(k),F=n(18),M=n(13),z=n.n(M),W=n(928),B=n(199),R=n(106),D=function(){var e=Object(m.useState)(new z.a(0)),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(R.a)().account,o=Object(B.a)().fastRefresh,a=Object(W.c)();return Object(m.useEffect)((function(){function e(){return(e=Object(F.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.referralsCount(r);case 2:t=e.sent,i(new z.a(t.toString()));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r&&function(){e.apply(this,arguments)}()}),[r,o,a]),n},E=n(262),I=n(87),A=n(944),L=n(908),T=n(260),G=n(894),N=n(15),$=Object(y.e)(O.g)(i||(i=Object(h.a)(["\n  text-align: center;\n  margin-top: 28px;\n  margin-bottom: 70px;\n"]))),H=y.e.div(r||(r=Object(h.a)(["\n  background: linear-gradient(\n    180deg, #89FFE3, #FFF174\n  );\n  max-width: 990px;\n  width: 90%;\n  background-size: 300% 300%;\n  border-radius: 8px;\n  position: absolute;\n  margin-left:auto;\n  margin-right:auto;\n  padding: 1px;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]))),J=function(){var e=Object(G.a)(),t=Object(w.a)("(max-width: 575px)");return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)($,{children:[Object(N.jsx)(H,{}),Object(N.jsxs)(O.h,{style:{padding:"32px",margin:"1px auto",background:"#151745",borderRadius:8,display:t?"block":"flex",justifyContent:"space-between",maxWidth:987,width:"89.5%",marginLeft:"auto",marginRight:"auto",height:t?"auto":120},children:[Object(N.jsx)(O.D,{fontSize:"24px",color:"white",style:{fontWeight:600,marginTop:"auto",marginBottom:"auto"},children:e(10008,"Unlock your wallet & Get started")}),Object(N.jsx)(A.a,{variant:"primary"})]})]})})},P=y.e.div(o||(o=Object(h.a)(["\n  background-image: ",";\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-bottom: 44px;\n  margin-top: ",";\n\n  height: ",";\n  "," {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n"])),(function(e){return e.isConnect?"url('/images/referrals/img-referral.png')":"url('/images/referrals/img-referral-no-connect.png')"}),(function(e){return e.isMobile?"-15px":"0px"}),(function(e){var t=e.isConnect;return e.isMobile?t?"450px":"410px":"380px"}),(function(e){return e.theme.mediaQueries.lg})),U=Object(y.e)(O.n)(a||(a=Object(h.a)(["\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 40px;\n  letter-spacing: -0.5px;\n  color: #FCFCFC;\n  margin-left: ",";\n"])),(function(e){return e.isMobile?"24px":"80px"})),K=Object(y.e)(O.D)(c||(c=Object(h.a)(["\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  color: #FCFCFC;\n  max-width: 543px;\n  width: 90%;\n  margin-left: ",";\n  margin-top: 16px;\n"])),(function(e){return e.isMobile?"24px":"80px"})),Q=Object(y.e)(O.D)(s||(s=Object(h.a)(["\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 14px;\n  color: #FCFCFC;\n"]))),Y=Object(y.e)(O.D)(l||(l=Object(h.a)(["\n  fontWeight: 300; \n  fontSize: 16px;\n  line-height: 24px;\n  color: #FCFCFC;\n  margin-right: 16px;\n"]))),q=y.e.div(d||(d=Object(h.a)(["\n  background: linear-gradient(\n    180deg, #89FFE3, #FFF174\n  );\n  border-radius: 16px;\n  min-width: ",";\n  max-width: ",";\n  margin-right: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n  padding: 1px;\n  min-height:190px;\n"])),(function(e){return e.isMobile?"312px":"435px"}),(function(e){return e.isMobile?"312px":"435px"}),(function(e){return e.isMobile?"auto":"80px"}),(function(e){return e.isMobile?"32px":"auto"}),(function(e){return e.isMobile?"34px":"auto"}),(function(e){return e.isMobile?"auto":"none"})),V=y.e.div(x||(x=Object(h.a)(["\n  background: linear-gradient(90.04deg, #0C0720 0.04%, #291A83 99.97%);\n  border-radius: 16px;\n  min-width: ",";\n  max-width: ",";\n  min-height: 188px;\n  padding: 32px;\n"])),(function(e){return e.isMobile?"310px":"433px"}),(function(e){return e.isMobile?"310px":"433px"})),X=y.e.text(g||(g=Object(h.a)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 28px;\n"]))),Z=y.e.div(p||(p=Object(h.a)(["\n  margin-top: 24px;\n  border-radius: 16px;\n  background: #151745;\n  padding: 16px 24px;\n  display: flex;\n  justify-content: space-between;\n"]))),_=Object(y.e)(O.g)(b||(b=Object(h.a)(["\n  width: 320px;\n  height: 309px;\n  text-align: center;\n  border-radius: 8px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  background: #1E215C;\n  padding: 30px;\n"]))),ee=y.e.div(f||(f=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: 992px;\n  width: 90%;\n  margin: 0px auto 70px auto;\n  padding: 0px;\n"]))),te=y.e.div(u||(u=Object(h.a)(["\n  display: ",";\n  justify-content: ",";\n  height: ",";\n  padding-top: ",";\n"])),(function(e){return e.isMobile?"block":"flex"}),(function(e){return e.isMobile?"none":"space-between"}),(function(e){return e.isMobile?"410px":"300px"}),(function(e){var t=e.isMobile,n=e.isConnect;return t?n?"15px":"50px":"0px"})),ne=function(){Object(E.a)("Referral");var e=Object(G.a)(),t=Object(R.a)().account,n=Object(I.g)().toFixed(2),i=Object(I.h)().toFixed(2),r=Object(C.a)(t),o="https://robustswap.com/?ref=".concat(r),a=D(),c=function(){var e=Object(m.useState)(new z.a(0)),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(R.a)().account,o=Object(B.a)().slowRefresh,a=Object(W.c)();return console.log("contract:",a),Object(m.useEffect)((function(){function e(){return(e=Object(F.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.totalReferralCommissions(r);case 2:t=e.sent,console.log("account:",r,t),i(new z.a(t.toString()));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r&&function(){e.apply(this,arguments)}()}),[r,o,a]),n}(),s=Object(w.a)("(max-width: 720px)"),l=Object(m.useState)(!1),d=Object(j.a)(l,2),x=d[0],g=d[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(P,{isMobile:s,isConnect:t,children:[!s&&Object(N.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"18px 48px 16px 40px"},children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(Q,{children:"RBS"}),Object(N.jsxs)(Y,{children:["$",n]})]}),Object(N.jsx)("div",{style:{height:"38px",borderRight:"1px solid #E2E9EF",display:"block"}}),Object(N.jsxs)("div",{style:{marginLeft:16},children:[Object(N.jsx)(Q,{children:"RBT"}),Object(N.jsxs)(Y,{children:["$",i]})]})]}),Object(N.jsxs)(te,{isMobile:s,isConnect:t,children:[Object(N.jsxs)("div",{style:{display:"block",marginTop:"auto",marginBottom:"auto",minWidth:"327px"},children:[Object(N.jsxs)(U,{isMobile:s,children:[Object(N.jsx)("div",{children:e(999,"Invite friends.")}),Object(N.jsx)("div",{children:e(999,"Earn RBS together.")})]}),Object(N.jsx)(K,{isMobile:s,children:Object(N.jsx)("div",{children:e(999,"Invite your friends with your referral link and get rewarded from their earnings.")})}),!t&&Object(N.jsx)(A.a,{variant:"primary",title:"Get Referral Link",style:{marginLeft:s?24:80,marginTop:16,width:203}})]}),t&&Object(N.jsx)(q,{isMobile:s,children:Object(N.jsxs)(V,{isMobile:s,children:[Object(N.jsxs)(X,{style:{display:"flex",justifyContent:"space-between"},children:[Object(N.jsx)("div",{children:"Referral Link"}),x&&Object(N.jsx)("div",{style:{fontSize:14},children:"Link Copied"})]}),Object(N.jsxs)(Z,{children:[Object(N.jsx)(O.D,{style:{marginTop:"auto",marginBottom:"auto"},children:s?o.substr(0,10)+".../"+o.substr(o.length-6,6):o.substr(0,18)+".../"+o.substr(o.length-6,6)}),Object(N.jsx)(O.c,{style:{background:"transparent",padding:0},onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(o),g(!0),setTimeout((function(){g(!1)}),1500))},children:Object(N.jsx)(O.k,{})})]})]})})]})]}),Object(N.jsxs)(T.a,{children:[Object(N.jsx)(ee,{children:Object(N.jsx)(O.D,{style:{fontSize:34,lineHeight:"40px",letterSpacing:"0.5px",fontWeight:"bold",color:"#A0B9FB",paddingBottom:16},children:e(999,t?"Dashboard":"How to invite friends")})}),t?Object(N.jsxs)(v.a,{container:!0,spacing:3,style:{marginTop:0,maxWidth:992,width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:70,justifyContent:"space-between"},children:[Object(N.jsxs)(v.a,{item:!0,sm:3,xs:12,style:{padding:24,backgroundColor:"#1E215C",height:122,borderRadius:8,marginBottom:16},children:[Object(N.jsx)(O.D,{style:{fontSize:16},children:"Your RBS Earnings"}),Object(N.jsx)(O.D,{style:{fontSize:34,fontWeight:600,color:"#E354FA"},children:Math.floor(Object(L.a)(c)).toFixed(4)})]}),Object(N.jsx)(v.a,{item:!0,sm:3,xs:12,style:{padding:24,backgroundColor:"#1E215C",height:122,borderRadius:8,marginBottom:16},children:Object(N.jsxs)("div",{style:{width:115},children:[Object(N.jsx)(O.D,{style:{fontSize:16},children:"Total Referrals"}),Object(N.jsx)(O.D,{style:{fontSize:34,fontWeight:600,color:"#E354FA",textAlign:"center"},children:a.toNumber()})]})}),Object(N.jsxs)(v.a,{item:!0,sm:5,xs:12,style:{padding:24,wordBreak:"break-all",backgroundColor:"#1E215C",height:122,borderRadius:8,marginBottom:16},children:[Object(N.jsx)(O.D,{style:{fontSize:16},children:"Referral Link"}),Object(N.jsxs)("div",{style:{display:"flex"},children:[Object(N.jsx)(O.D,{style:{color:"#E354FA",fontSize:12,maxWidth:238},children:o}),Object(N.jsx)(O.c,{style:{background:"transparent",padding:0,marginLeft:8},onClick:function(){navigator.clipboard&&navigator.clipboard.writeText(o)},children:Object(N.jsx)(O.l,{style:{width:24,height:24}})})]})]})]}):Object(N.jsxs)(v.a,{container:!0,style:{justifyContent:"center"},children:[Object(N.jsxs)(_,{children:[Object(N.jsx)("img",{src:"/images/referrals/Illu-link.svg",alt:"link",width:"132px",height:"114px"}),Object(N.jsx)(O.D,{style:{fontSize:20,fontWeight:800},children:"Get a referral link"}),Object(N.jsx)(O.D,{style:{fontSize:18,fontStyle:"normal",fontWeight:300,color:"#A0B9FB"},children:"Connect a wallet and generate your referral link"})]}),Object(N.jsxs)(_,{children:[Object(N.jsx)("img",{src:"/images/referrals/Illu-send.svg",alt:"link",width:"132px",height:"114px"}),Object(N.jsx)(O.D,{style:{fontSize:20,fontWeight:800},children:"Invite friends"}),Object(N.jsx)(O.D,{style:{fontSize:18,fontStyle:"normal",fontWeight:300,color:"#A0B9FB"},children:"Invite your friends to sign up via your referral link"})]}),Object(N.jsxs)(_,{children:[Object(N.jsx)("img",{src:"/images/referrals/Illus-earn.svg",alt:"link",width:"132px",height:"114px"}),Object(N.jsx)(O.D,{style:{fontSize:20,fontWeight:800},children:"Earn RBS"}),Object(N.jsx)(O.D,{style:{fontSize:18,fontStyle:"normal",fontWeight:300,color:"#A0B9FB"},children:"Receive referral rewards in RBS tokens from your friends' earnings"})]})]}),Object(N.jsx)("div",{children:!t&&Object(N.jsx)(J,{})})]})]})}},899:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},944:function(e,t,n){"use strict";var i=n(20),r=(n(0),n(54)),o=n(155),a=n(15);t.a=function(e){var t=Object(o.a)(),n=t.login,c=t.logout,s=Object(r.I)(n,"0px",c).onPresentConnectModal,l=e,d=l.title?l.title:"UNLOCK WALLET";return Object(a.jsx)(r.c,Object(i.a)(Object(i.a)({variant:"subtle",onClick:s},e),{},{children:d}))}}}]);
//# sourceMappingURL=14.5d74b81f.chunk.js.map