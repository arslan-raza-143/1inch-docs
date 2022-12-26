"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[1022],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),d=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=d(n),p=l,m=k["".concat(s,".").concat(p)]||k[p]||c[p]||a;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},33016:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return k}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={sidebar_position:3},s="Contract interaction",d={unversionedId:"fusion-swap/contracts-interaction",id:"fusion-swap/contracts-interaction",isDocsHomePage:!1,title:"Contract interaction",description:"1. Stake 1inch",source:"@site/docs/fusion-swap/contracts-interaction.mdx",sourceDirName:"fusion-swap",slug:"/fusion-swap/contracts-interaction",permalink:"/docs/fusion-swap/contracts-interaction",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/fusion-swap/contracts-interaction.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to become a resolver",permalink:"/docs/fusion-swap/how-to-become-resolver"},next:{title:"Wallet auto-connect",permalink:"/docs/wallet-auto-connect"}},u=[{value:"1. Stake 1inch",id:"1-stake-1inch",children:[]},{value:"2. Register as a Resolver",id:"2-register-as-a-resolver",children:[]},{value:"3. FeeBank",id:"3-feebank",children:[]},{value:"4. Resolving",id:"4-resolving",children:[]},{value:"Setup script example",id:"setup-script-example",children:[]}],c={toc:u};function k(t){var e=t.components,n=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-interaction"},"Contract interaction"),(0,a.kt)("h3",{id:"1-stake-1inch"},"1. Stake 1inch"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Repository"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/1inch/limit-order-settlement/"},"limit-order-settlement"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract"),(0,a.kt)("td",null,"st1inch.sol")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract address"),(0,a.kt)("td",null,"0x9A0C8Ff858d273f57072D714bca7411D717501D7")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Methods"),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"deposit(uint256 amount, uint256 duration)"),(0,a.kt)("li",null,"depositWithPermit(uint256 amount, uint256 duration, bytes calldata permit)"),(0,a.kt)("li",null,"depositFor(address account, uint256 amount, uint256 duration)"),(0,a.kt)("li",null,"depositForWithPermit(address account, uint256 amount, uint256 duration, bytes calldata permit)")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Stakes 1inch to get staking power according to the lock time"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//Deposits 100 1inch with 1 day lock\nawait st1inch.deposit(ether('100'), time.duration.days('1'));\n")),(0,a.kt)("h3",{id:"2-register-as-a-resolver"},"2. Register as a Resolver"),(0,a.kt)("h4",{id:"21--register-delegation-pod"},"2.1  Register delegation pod"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Repository"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/1inch/limit-order-settlement/"},"limit-order-settlement"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract"),(0,a.kt)("td",null,"PowerPod.sol")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract address"),(0,a.kt)("td",null,"0x9A0C8Ff858d273f57072D714bca7411D717501D7")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Methods"),(0,a.kt)("td",null,"addPod(address pod)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Register pod usage for the tx sender. Needed for",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Resolvers to enable resolver\u2019s and delegated staking power usage for whitelisting"),(0,a.kt)("li",null,"Stakers to enable staking power delegation"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// register `delegation` pod usage a `resolver`\nawait st1inch.connect(resolver).addPod(delegation.address);\n")),(0,a.kt)("h4",{id:"22-register-delegation-share-token"},"2.2. Register delegation share token"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Repository"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/1inch/limit-order-settlement/"},"limit-order-settlement"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract"),(0,a.kt)("td",null,"st1inch.sol")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract address"),(0,a.kt)("td",null,"0xDAf782667d98d5069eE7ba139932945C4D08fDE9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Methods"),(0,a.kt)("td",null,"register(string memory name, string memory symbol, uint256 maxUserFarms)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Creates a resolvers share token to count delegated staked power shares and accrue rewards"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Register resolver's token with name 'resolver token share' and symbol 'RTS'\n// allowing the maximum 3 farms running\nawait delegation.register('resolver token share', 'RTS');\n")),(0,a.kt)("h4",{id:"23-set-default-farm"},"2.3. Set default farm"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Repository"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/1inch/limit-order-settlement/"},"limit-order-settlement"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract"),(0,a.kt)("td",null,"PowerPod.sol")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract address"),(0,a.kt)("td",null,"0xDAf782667d98d5069eE7ba139932945C4D08fDE9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Methods"),(0,a.kt)("td",null,"setDefaultFarm(address farm)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Setups the default farm to which all users delegating to this resolver are automatically joined"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Setups the default farm to which all users delegating to this resolver\n// are automatically joined\nawait delegation.connect(resolver).setDefaultFarm(farm.address);\n")),(0,a.kt)("h4",{id:"24-delegate-resolvers-staking-power-to-self"},"2.4. Delegate resolver\u2019s staking power to self"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Repository"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/1inch/limit-order-settlement/"},"limit-order-settlement"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract"),(0,a.kt)("td",null,"PowerPod.sol")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract address"),(0,a.kt)("td",null,"0xDAf782667d98d5069eE7ba139932945C4D08fDE9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Methods"),(0,a.kt)("td",null,"delegate(address delegatee)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"delegate(address delegatee)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Delegates all staking power to self\nawait delegation.connect(resolver).delegate(resolver.address);\n")),(0,a.kt)("h4",{id:"25-whitelist-resolver"},"2.5. Whitelist resolver"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Repository"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/1inch/limit-order-settlement/"},"limit-order-settlement"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract"),(0,a.kt)("td",null,"WhitelistRegistry.sol")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract address"),(0,a.kt)("td",null,"0xA49ECb28CC8ab39659be2bFB6F7b86f0c4461A0b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Methods"),(0,a.kt)("td",null,"register()")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Checks if sender is eligible to be whitelisted and put it into the whitelist sorted by staking power descending"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Try to put the sender to the whitelist\nawait whitelist.connect(resolver).register();\n")),(0,a.kt)("h3",{id:"3-feebank"},"3. FeeBank"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Repository"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/1inch/limit-order-settlement/"},"limit-order-settlement"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract"),(0,a.kt)("td",null,"FeeBank.sol")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract address"),(0,a.kt)("td",null,"0xa0844e046a5B7Db55Bb8DcdFfbF0bBF9c6dc6546")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Methods"),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"deposit(uint256 amount)"),(0,a.kt)("li",null,"depositFor(address account, uint256 amount)"),(0,a.kt)("li",null,"depositWithPermit(uint256 amount, bytes calldata permit)"),(0,a.kt)("li",null,"depositForWithPermit")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Deposits 1inch for fee deduction when filling orders"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Deposit fees to fee bank\nawait feeBank.connect(resolver).deposit(amount)\n")),(0,a.kt)("h3",{id:"4-resolving"},"4. Resolving"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Solidity"},"struct Order {\n        uint256 salt;\n        address makerAsset;\n        address takerAsset;\n        address maker;\n        address receiver;\n        address allowedSender;  // equals to Zero address on public orders\n        uint256 makingAmount;\n        uint256 takingAmount;\n        uint256 offsets;\n        // bytes makerAssetData;\n        // bytes takerAssetData;\n        // bytes getMakingAmount; // this.staticcall(abi.encodePacked(bytes, swapTakerAmount)) => (swapMakerAmount)\n        // bytes getTakingAmount; // this.staticcall(abi.encodePacked(bytes, swapMakerAmount)) => (swapTakerAmount)\n        // bytes predicate;       // this.staticcall(bytes) => (bool)\n        // bytes permit;          // On first fill: permit.1.call(abi.encodePacked(permit.selector, permit.2))\n        // bytes preInteraction;\n        // bytes postInteraction;\n        bytes interactions; // concat(makerAssetData, takerAssetData, getMakingAmount, getTakingAmount, predicate, permit, preIntercation, postInteraction)\n    }\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Repository"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://github.com/1inch/limit-order-settlement/"},"limit-order-settlement"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract"),(0,a.kt)("td",null,"Settlement.sol")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Contract address"),(0,a.kt)("td",null,"0xA88800CD213dA5Ae406ce248380802BD53b47647")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Methods"),(0,a.kt)("td",null,".settleOrders(bytes calldata data)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Settles an order"))),(0,a.kt)("h3",{id:"setup-script-example"},"Setup script example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Ethers setup script\n\n// approve 1inch staking\nawait (await inch.connect(resolver).approve(st1inch.address, stakeAmount));\n// stake 1inch token\nawait (await st1inch.connect(resolver).deposit(stakeAmount, lockTime)).wait();\n// add delegation pod to\n// 1. make it possible for any user to delegate staking power to\n// the resolver's account\n// 2. make it possible for a resolver to allocate its staking power for itself\nawait (await st1inch.connect(resolver).addPod(delegation.address)).wait();\n\n// register resolver's delegation token to count stakers' shares and rewards\nawait (\n    await delegation\n        .connect(resolver)\n        .functions['register(string,string)'](\n            'MyShareTokenName',\n            'MST',\n        )\n).wait();\n\n// Set default rewards farm\n// Optional, needed to incentivize staker for delegation\nawait (await delegation.connect(resolver).setDefaultFarm(farm.address)).wait();\n\n// Delegate staked power to self\nawait (await delegation.connect(resolver).delegate(resolver.address)).wait();\n\n// Whitelist resolver (there should be enough staked power to be in top 5)\nawait (await whitelist.connect(resolver).register()).wait();\n\n// Add worker address from which order settlement will be executed\nawait (await whitelist.connect(resolver).promote(1, worker.address)).wait();\n")))}k.isMDXComponent=!0}}]);