(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{161:function(e,t){},166:function(e,t){},223:function(e,t,c){},228:function(e,t,c){"use strict";c.r(t);var n=c(0),a=(c(41),c(149)),r=c(20),s=c(38),o=c(7),i=c(239),l=c(243),j=c(244),d=c(66),u=1e14;function b(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(Object(r.a)().mark((function e(t){var c,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.id,n=t.price,e.next=3,window.contract.buyProduct({productId:c},u,n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=c(2),p=Object({NODE_ENV:"production",PUBLIC_URL:"/near-marketplace",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"tcontract.vladopaets.testnet";var h=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:p,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:p,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},m=c(58),f=h("testnet");function w(){return(w=Object(s.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(new m.keyStores.BrowserLocalStorageKeyStore,f),e.next=3,Object(m.connect)(Object(O.a)(Object(O.a)({},f),{},{keyStore:new m.keyStores.BrowserLocalStorageKeyStore}));case 3:t=e.sent,console.log(2,t),window.walletConnection=new m.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new m.Contract(window.walletConnection.account(),f.contractName,{viewMethods:["getProduct","getProducts"],changeMethods:["buyProduct","setProduct"]}),console.log(1,window.contract);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){window.walletConnection.requestSignIn(f.contractName)}function N(){window.walletConnection.signOut(),window.location.reload()}var C=c(241),k=c(236),S=c(246),I=c(1),P=function(e){var t=e.address,c=e.amount,n=e.symbol,a=e.destroy;return t?Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(C.a,{children:[Object(I.jsx)(C.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:c?Object(I.jsxs)(I.Fragment,{children:[c," ",Object(I.jsxs)("span",{className:"ms-1",children:[" ",n]})]}):Object(I.jsx)(k.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(I.jsxs)(C.a.Menu,{className:"shadow-lg border-0",children:[Object(I.jsx)(C.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(I.jsxs)(S.a,{direction:"horizontal",gap:2,children:[Object(I.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(I.jsx)("span",{className:"font-monospace",children:t})]})}),Object(I.jsx)(C.a.Divider,{}),Object(I.jsxs)(C.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(I.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},E=c(60),F=(c(222),function(){return Object(I.jsx)(E.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),T=function(e){var t=e.text;return Object(I.jsxs)("div",{children:[Object(I.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(I.jsx)("span",{className:"text-secondary mx-1",children:t})]})},U=function(e){var t=e.text;return Object(I.jsxs)("div",{children:[Object(I.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(I.jsx)("span",{className:"text-secondary mx-1",children:t})]})},A={text:""};T.defaultProps=A,U.defaultProps=A;var L=c(150),R=c(240),_=c(242),B=c(152),D=function(e){var t=e.save,c=Object(n.useState)(""),a=Object(o.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),j=l[0],d=l[1],u=Object(n.useState)(""),b=Object(o.a)(u,2),x=b[0],O=b[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),m=h[0],f=h[1],w=Object(n.useState)(0),g=Object(o.a)(w,2),v=g[0],y=g[1],N=Object(n.useState)(!1),C=Object(o.a)(N,2),k=C[0],S=C[1],P=function(){return S(!1)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(L.a,{onClick:function(){return S(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(I.jsx)("i",{className:"bi bi-plus"})}),Object(I.jsxs)(R.a,{show:k,onHide:P,centered:!0,children:[Object(I.jsx)(R.a.Header,{closeButton:!0,children:Object(I.jsx)(R.a.Title,{children:"New Product"})}),Object(I.jsx)(_.a,{children:Object(I.jsxs)(R.a.Body,{children:[Object(I.jsx)(B.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(I.jsx)(_.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of product"})}),Object(I.jsx)(B.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(I.jsx)(_.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){d(e.target.value)}})}),Object(I.jsx)(B.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(I.jsx)(_.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){O(e.target.value)}})}),Object(I.jsx)(B.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(I.jsx)(_.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)}})}),Object(I.jsx)(B.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(I.jsx)(_.a.Control,{type:"text",placeholder:"Price",onChange:function(e){y(e.target.value)}})})]})}),Object(I.jsxs)(R.a.Footer,{children:[Object(I.jsx)(L.a,{variant:"outline-secondary",onClick:P,children:"Close"}),Object(I.jsx)(L.a,{variant:"dark",disabled:!(r&&j&&x&&m&&v),onClick:function(){t({name:r,image:j,description:x,location:m,price:v}),P()},children:"Save product"})]})]})]})},H=c(151),W=c(245),K=c(237),M=function(e){var t=e.product,c=e.buy,n=t.id,a=t.price,r=t.name,s=t.description,o=t.sold,i=t.location,l=t.image,j=t.owner;return Object(I.jsx)(H.a,{children:Object(I.jsxs)(W.a,{className:" h-100",children:[Object(I.jsx)(W.a.Header,{children:Object(I.jsxs)(S.a,{direction:"horizontal",gap:2,children:[Object(I.jsx)("span",{className:"font-monospace text-secondary",children:j}),Object(I.jsxs)(K.a,{bg:"secondary",className:"ms-auto",children:[o," Sold"]})]})}),Object(I.jsx)("div",{className:" ratio ratio-4x3",children:Object(I.jsx)("img",{src:l,alt:r,style:{objectFit:"cover"}})}),Object(I.jsxs)(W.a.Body,{className:"d-flex  flex-column text-center",children:[Object(I.jsx)(W.a.Title,{children:r}),Object(I.jsx)(W.a.Text,{className:"flex-grow-1 ",children:s}),Object(I.jsx)(W.a.Text,{className:"text-secondary",children:Object(I.jsx)("span",{children:i})}),Object(I.jsxs)(L.a,{variant:"outline-dark",onClick:function(){c(n,a)},className:"w-100 py-3",children:["Buy for ",m.utils.format.formatNearAmount(a)," NEAR"]})]})]})},n)},z=function(){return Object(I.jsx)("div",{className:"d-flex justify-content-center",children:Object(I.jsx)(k.a,{animation:"border",role:"status",className:"opacity-25",children:Object(I.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},J=c(238),q=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),u=l[0],x=l[1],p=Object(n.useCallback)(Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.t0=a,e.next=5,window.contract.getProducts();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),h=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{x(!0),(c=t,c.id=Object(j.a)(),c.price=Object(d.parseNearAmount)(c.price+""),window.contract.setProduct({product:c})).then((function(e){p()})),Object(E.b)(Object(I.jsx)(T,{text:"Product added successfully."}))}catch(n){console.log({error:n}),Object(E.b)(Object(I.jsx)(U,{text:"Failed to create a product."}))}finally{x(!1)}case 1:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,c){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b({id:t,price:c}).then((function(e){return p()}));case 3:Object(E.b)(Object(I.jsx)(T,{text:"Product bought successfully"})),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log({error:e.t0}),Object(E.b)(Object(I.jsx)(U,{text:"Failed to purchase product."}));case 10:return e.prev=10,x(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,6,10,13]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),Object(I.jsx)(I.Fragment,{children:u?Object(I.jsx)(z,{}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(I.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Street Food"}),Object(I.jsx)(D,{save:h})]}),Object(I.jsx)(J.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:c.map((function(e,t){return Object(I.jsx)(M,{product:Object(O.a)({},e),buy:m},t)}))})]})})},V=function(e){var t=e.name,c=e.login,n=e.coverImg;return n?Object(I.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(I.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(I.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(I.jsx)("img",{src:n,alt:""})}),Object(I.jsx)("h1",{children:t}),Object(I.jsx)("p",{children:"Please connect your wallet to continue."}),Object(I.jsx)(L.a,{onClick:c,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(I.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};V.defaultProps={name:""};var G=V,Q=c.p+"static/media/sandwich.2d312449.jpeg",X=(c(223),function(){var e=window.walletConnection.account(),t=Object(n.useState)("0"),c=Object(o.a)(t,2),a=c[0],j=c[1],d=Object(n.useCallback)(Object(s.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=j,t.next=4,g();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(n.useEffect)((function(){d()}),[d]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(F,{}),e.accountId?Object(I.jsxs)(i.a,{fluid:"md",children:[Object(I.jsx)(l.a,{className:"justify-content-end pt-3 pb-5",children:Object(I.jsx)(l.a.Item,{children:Object(I.jsx)(P,{address:e.accountId,amount:a,symbol:"NEAR",destroy:N})})}),Object(I.jsxs)("main",{children:[" ",Object(I.jsx)(q,{})," "]})]}):Object(I.jsx)(G,{name:"Street Food",login:y,coverImg:Q})]})});c(229),c(226),c(227);window.nearInitPromise=function(){return w.apply(this,arguments)}().then((function(){var e=document.getElementById("root");Object(a.createRoot)(e).render(Object(I.jsx)(X,{}))})).catch(console.error)}},[[228,1,2]]]);
//# sourceMappingURL=main.8a164b7a.chunk.js.map