(this.webpackJsonpdirtydonkey=this.webpackJsonpdirtydonkey||[]).push([[0],{293:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},307:function(e,t){},309:function(e,t){},311:function(e,t){},315:function(e,t){},342:function(e,t){},344:function(e,t){},353:function(e,t){},355:function(e,t){},365:function(e,t){},367:function(e,t){},484:function(e,t){},486:function(e,t){},493:function(e,t){},494:function(e,t){},512:function(e,t){},597:function(e,t,n){},598:function(e,t,n){},599:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(45),r=n.n(s),o=(n(286),n(22)),c=n(607),l=n(606),p=n(1),d=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1];Object(a.useEffect)((function(){window.addEventListener("scroll",s)}),[]);var s=function(){window.scrollY>=86?i(!0):window.scrollY<85&&i(!1)};return Object(p.jsx)("div",{className:"header".concat(n?" sticky":""),children:Object(p.jsxs)(c.a,{variant:"dark",expand:"md",style:{backgroundColor:"#333333"},children:[Object(p.jsx)(c.a.Brand,{href:"/",className:"px-4",children:Object(p.jsx)("img",{src:"./images/logo.png",className:"logo-img",alt:""})}),Object(p.jsx)(c.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"mx-4"}),Object(p.jsx)(c.a.Collapse,{id:"basic-navbar-nav",className:"d-md-flex justify-content-between",children:Object(p.jsxs)(l.a,{className:"mr-auto flex-grow-1",children:[Object(p.jsx)(l.a.Link,{href:"#home",className:"cus-nav-link text-white",onClick:function(){return window.scrollTo(0,0)},children:"Home"}),Object(p.jsx)(l.a.Link,{href:"#mint",className:"cus-nav-link text-white",children:"Mint"}),Object(p.jsx)(l.a.Link,{href:"#roadmap",className:"cus-nav-link text-white",children:"Roadmap"}),Object(p.jsx)(l.a.Link,{href:"#faq",className:"cus-nav-link text-white",children:"FAQs"}),Object(p.jsxs)("div",{className:"d-flex mx-4 mb-2 mb-md-0 social-link",children:[Object(p.jsx)("a",{href:"#",target:"_blank",className:"d-flex align-items-center pe-3",rel:"noreferrer",children:Object(p.jsx)("img",{src:"https://img.icons8.com/color/48/000000/twitter--v1.png",loading:"lazy",width:"32",alt:""})}),Object(p.jsx)("a",{href:"#",target:"_blank",className:"d-flex align-items-center pe-3",rel:"noreferrer",children:Object(p.jsx)("img",{src:"https://img.icons8.com/color/50/000000/discord--v2.png",loading:"lazy",width:"32",alt:""})}),Object(p.jsx)("a",{href:"#",target:"_blank",className:"d-flex align-items-center pe-3",rel:"noreferrer",children:Object(p.jsx)("img",{src:"/images/Logomark-Blue.png",loading:"lazy",width:"25",alt:""})}),Object(p.jsx)("a",{href:"#",target:"_blank",className:"d-flex align-items-center",rel:"noreferrer",children:Object(p.jsx)("img",{src:"https://img.icons8.com/fluency-systems-regular/24/000000/instagram-new--v2.png",loading:"lazy",width:"32",alt:""})})]})]})})]})})},u=function(){return Object(p.jsx)("div",{className:"banner",children:Object(p.jsx)("img",{src:"./images/banner.png",alt:""})})},m=n(23),b=n.n(m),y=n(51),j=n(605),h=n(88),x=n(166),f=n(293),g=(new((0,n(600).createAlchemyWeb3)("https://eth-mainnet.alchemyapi.io/v2/Zw9_j-IRNVZayx-EmaFt1yW2b4D2_ZxY").eth.Contract)(f,"0x751A9a39AF7E70C37916262644e4D0b8fa018CDE"),function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],i=(t[1],Object(a.useState)(!1)),s=Object(o.a)(i,2),r=s[0],c=s[1],l=Object(a.useState)(1),d=Object(o.a)(l,2),u=d[0],m=d[1],f=Object(a.useState)(""),g=Object(o.a)(f,2),O=g[0],v=(g[1],Object(a.useState)(0)),w=Object(o.a)(v,2),T=w[0],N=(w[1],function(){return c(!1)}),k=function(){var e=Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var M=function(){var e=Object(y.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"mint-container purple-text",children:[Object(p.jsx)("div",{className:"mint-header text-center text-white pt-5",id:"mint",children:"Mint"}),Object(p.jsxs)("div",{className:"mint-panel",children:[Object(p.jsx)("div",{className:"mint-title pt-4 pt-md-5 text-white",children:"Mint Cards"}),Object(p.jsx)("div",{className:"mint-narration text-white"}),Object(p.jsx)("div",{className:"collage mb-5",children:Object(p.jsx)("img",{src:"./images/2.gif",alt:"",width:"250",height:"250"})}),Object(p.jsxs)("div",{className:"mint-price text-white mt-5 text-center",children:["Max per Tx 2",Object(p.jsx)("br",{}),"Only 0.03 Eth Each"]}),Object(p.jsx)("div",{className:"text-center text-white",children:Object(p.jsx)(j.a,{className:"connect-btn mt-3",onClick:M,children:n.length>0?String(n).substring(0,6)+"..."+String(n).substring(38):Object(p.jsx)("span",{children:"Connect"})})}),Object(p.jsxs)("div",{className:"mint-status text-center text-white",children:[T," / 50 Sold Out"]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(j.a,{className:"mint-btn mb-3 mb-md-5",onClick:k,children:"Mint"})})]}),Object(p.jsxs)(h.a,{show:r,onHide:N,children:[Object(p.jsx)(h.a.Header,{closeButton:!0,children:Object(p.jsx)(h.a.Title,{children:"Mint some Spell Cards"})}),Object(p.jsxs)(h.a.Body,{children:[Object(p.jsx)("img",{src:"./images/2.gif",alt:"",style:{maxWidth:"220px"}}),Object(p.jsxs)("div",{className:"mint-number",children:[Object(p.jsx)("button",{type:"button",onClick:function(){},children:Object(p.jsx)("span",{"aria-hidden":"true",children:"-"})}),Object(p.jsxs)(x.a,{children:[Object(p.jsx)(x.a.Label,{children:u}),O?Object(p.jsx)("div",{children:O}):Object(p.jsx)("div",{})]}),u<2?Object(p.jsx)("button",{type:"button",onClick:function(){return m(u+1)},children:Object(p.jsx)("span",{"aria-hidden":"true",children:"+"})}):Object(p.jsx)("button",{type:"button",onClick:function(){return m(u)},children:Object(p.jsx)("span",{"aria-hidden":"true",children:"+"})})]})]}),Object(p.jsxs)(h.a.Footer,{children:[Object(p.jsx)(j.a,{variant:"primary",onClick:C,children:"Mint"}),Object(p.jsx)(j.a,{variant:"secondary",onClick:N,children:"Close"})]})]})]})}),O=n(276),v=n.n(O),w=function(){return Object(a.useEffect)((function(){v.a.load({google:{families:["Purple Purse","Roboto"]}})}),[]),Object(p.jsxs)("div",{className:"roadmap-container purple-text",children:[Object(p.jsx)("div",{className:"roadmap-header text-center text-white",id:"roadmap",children:"Roadmap"}),Object(p.jsxs)("div",{className:"roadmap-panel mb-3 mb-sm-4",children:[Object(p.jsx)("div",{className:"roadmap-title text-center text-white",children:"Feburary 2022"}),Object(p.jsx)("div",{className:"position-relative roadmap-text-height",children:Object(p.jsxs)("div",{className:"roadmap-text text-center position-absolute text-white",children:["Artwork Development",Object(p.jsx)("br",{}),"Website Launch",Object(p.jsx)("br",{}),"Social Media Launch"]})})]}),Object(p.jsxs)("div",{className:"roadmap-panel mb-3 mb-sm-4",children:[Object(p.jsx)("div",{className:"roadmap-title text-center text-white",children:"March 2022"}),Object(p.jsx)("div",{className:"position-relative roadmap-text-height",children:Object(p.jsxs)("div",{className:"roadmap-text text-center position-absolute text-white",children:["Artwork published",Object(p.jsx)("br",{}),"Minting accessible",Object(p.jsx)("br",{}),"10 Spell Cards Giveaway at 10% minted"]})})]}),Object(p.jsxs)("div",{className:"roadmap-panel mb-3 mb-sm-4",children:[Object(p.jsx)("div",{className:"roadmap-title text-center text-white",children:"April 2022"}),Object(p.jsx)("div",{className:"position-relative roadmap-text-height",children:Object(p.jsxs)("div",{className:"roadmap-text text-center position-absolute text-white",children:["Top holder will get custom NFT",Object(p.jsx)("br",{}),"Art competition for Prizes",Object(p.jsx)("br",{}),"Interviews for new Spell Card team members",Object(p.jsx)("br",{}),"New website development"]})})]}),Object(p.jsxs)("div",{className:"roadmap-panel mb-3 mb-sm-4",children:[Object(p.jsx)("div",{className:"roadmap-title text-center text-white",children:"May 2022"}),Object(p.jsx)("div",{className:"position-relative roadmap-text-height",children:Object(p.jsxs)("div",{className:"roadmap-text roadmap-text2 text-center position-absolute text-white",children:["Spell Card Merchandise store???",Object(p.jsx)("br",{}),"To Be Announced"]})})]})]})},T=n(608),N=[{id:1,title:"What are Spell Cards?",content:"Spell Cards are Non-Fungible Tokens (NFTs), unique digital assets that can take the form of artwork and provide utility to holders. Spell Cards stand apart with a focus on making people put a smile on their faces. This allows the team and entire community to help those in need and create more products for our community."},{id:2,title:"How can I purchase a Spell Card?",content:"Click the mint tab at the top of the website. Then connect your wallet and click mint on the amount you want to mint. The minting dialog allows you to mint up to 20 Spell Cards at a time."},{id:3,title:"How much does a Spell Card cost?",content:"Each Spell Card costs .03 ETH to mint. Although Ethereum is subject to price action, the cost of minting will never change."},{id:4,title:"When Will Spell Cards be available for purchase?",content:"Spell Cards have no set date but we are looking to be ready for the long haul soon."},{id:5,title:"What was the creation process like for the Spell Cards?",content:"Thinking of some ideas for a token idea, we came upon Spell Cards. We would make them scummy looking and ruthless just to make people laugh."},{id:6,title:"Are there future plans for Spell Card that haven't been mentioned?",content:"Yes, we are intentionally keeping some aspects of the project undisclosed to further develop ideas and to ensure we are able to fully deliver. Aside from this, we will be relying on the community's voice for future project plans."},{id:7,title:"Where can I contact the Spell Card team?",content:"You can contact us through on Twitter or Discord"}],k=function(){return Object(p.jsxs)("div",{className:"faq-container purple-text",children:[Object(p.jsx)("div",{className:"faq-header text-center text-white",id:"faq",children:"FAQ"}),Object(p.jsx)("div",{className:"faq-text px-2 px-md-4 text-white container pb-5",children:Object(p.jsx)(T.a,{children:N.map((function(e){var t=e.id,n=e.title,a=e.content;return Object(p.jsxs)(T.a.Item,{eventKey:t,children:[Object(p.jsx)(T.a.Header,{children:Object(p.jsx)("h2",{children:n})}),Object(p.jsx)(T.a.Body,{className:"text-white",children:a})]},"".concat(t))}))})})]})},C=n(277),M=n.n(C),I=(n(596),{superLargeDesktop:{breakpoint:{max:4e3,min:1600},items:6},desktop:{breakpoint:{max:1600,min:1300},items:5},pc:{breakpoint:{max:1300,min:1e3},items:4},tablet:{breakpoint:{max:1e3,min:668},items:3},mobile:{breakpoint:{max:668,min:360},items:2}}),S=function(){return Object(p.jsx)("div",{className:"bg-black pb-5",children:Object(p.jsxs)(M.a,{swipeable:!0,draggable:!0,showDots:!1,responsive:I,ssr:!0,infinite:!0,autoPlaySpeed:2e3,keyBoardControl:!0,customTransition:"all .5",transitionDuration:500,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:[Object(p.jsx)("div",{className:"IndicatorCarouselCard",children:Object(p.jsx)("img",{className:"caroimg w-100 p-2",src:"../images/11.png",alt:"carousolimg"})}),Object(p.jsx)("div",{className:"IndicatorCarouselCard",children:Object(p.jsx)("img",{className:"caroimg w-100 p-2",src:"../images/12.png",alt:"carousolimg"})}),Object(p.jsx)("div",{className:"IndicatorCarouselCard",children:Object(p.jsx)("img",{className:"caroimg w-100 p-2",src:"../images/13.png",alt:"carousolimg"})}),Object(p.jsx)("div",{className:"IndicatorCarouselCard",children:Object(p.jsx)("img",{className:"caroimg w-100 p-2",src:"../images/14.png",alt:"carousolimg"})}),Object(p.jsx)("div",{className:"IndicatorCarouselCard",children:Object(p.jsx)("img",{className:"caroimg w-100 p-2",src:"../images/15.png",alt:"carousolimg"})}),Object(p.jsx)("div",{className:"IndicatorCarouselCard",children:Object(p.jsx)("img",{className:"caroimg w-100 p-2",src:"../images/16.png",alt:"carousolimg"})}),Object(p.jsx)("div",{className:"IndicatorCarouselCard",children:Object(p.jsx)("img",{className:"caroimg w-100 p-2",src:"../images/17.png",alt:"carousolimg"})})]})})};n(597),n(598);var A=function(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(d,{}),Object(p.jsx)(u,{}),Object(p.jsx)(g,{}),Object(p.jsx)(S,{}),Object(p.jsx)(w,{}),Object(p.jsx)(k,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,609)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),F()}},[[599,1,2]]]);
//# sourceMappingURL=main.2678e7c4.chunk.js.map