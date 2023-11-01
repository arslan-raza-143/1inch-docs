"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[787],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},39088:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={},c=void 0,l={unversionedId:"educational-resources/intermediate/CORS-Error-FAQ",id:"educational-resources/intermediate/CORS-Error-FAQ",isDocsHomePage:!1,title:"CORS-Error-FAQ",description:"When integrating the 1inch API in your dApp, you might experience an issue with CORS (Cross-Origin Resource Sharing). It can be confusing, especially when your API calls are successful via tools like Curl or Postman, but fail when made from your custom dApp's UI.",source:"@site/docs/educational-resources/intermediate/CORS-Error-FAQ.mdx",sourceDirName:"educational-resources/intermediate",slug:"/educational-resources/intermediate/CORS-Error-FAQ",permalink:"/docs/educational-resources/intermediate/CORS-Error-FAQ",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/educational-resources/intermediate/CORS-Error-FAQ.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Troubleshooting",permalink:"/docs/educational-resources/intermediate/1inch-api-troubleshooting"},next:{title:"Common API Error Messages Explained",permalink:"/docs/educational-resources/intermediate/Common-API-Error-Messages-Explained"}},u=[{value:"This article covers:",id:"this-article-covers",children:[{value:"What is CORS?",id:"what-is-cors",children:[]},{value:"Why am I facing this issue?",id:"why-am-i-facing-this-issue",children:[]},{value:"How can I resolve CORS errors when calling the 1inch API?",id:"how-can-i-resolve-cors-errors-when-calling-the-1inch-api",children:[]},{value:"Can I call functions without a server and still avoid CORS errors?",id:"can-i-call-functions-without-a-server-and-still-avoid-cors-errors",children:[]}]}],h={toc:u};function p(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When integrating the 1inch API in your dApp, you might experience an issue with CORS (Cross-Origin Resource Sharing). It can be confusing, especially when your API calls are successful via tools like ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/"},"Curl")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),", but fail when made from your custom dApp's UI."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:r(21139).Z,title:"image_tooltip"})),(0,o.kt)("h2",{id:"this-article-covers"},"This article covers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-cors"},"What is CORS?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-am-i-facing-this-issue"},"Why am I facing this issue?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-can-i-resolve-cors-errors-when-calling-the-1inch-api"},"How can I resolve CORS errors when calling the 1inch API?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#can-i-call-functions-without-a-server-and-still-avoid-cors-errors"},"Can I call functions without a server and still avoid CORS errors?"))),(0,o.kt)("h3",{id:"what-is-cors"},"What is CORS?"),(0,o.kt)("p",null,"Cross-Origin Resource Sharing (CORS) is a common security protocol implemented by most browsers to help prevent security risks with cross-origin requests. Essentially, a cross-origin request is when a web page from one domain tries to access resources, like data or images etc., from a different domain."),(0,o.kt)("p",null,"For example, say you're browsing \"",(0,o.kt)("a",{parentName:"p",href:"https://www.coindesk.com/%5C"},"coindesk.com"),'" and it has a ETH/BTC ticker widget that pulls price data from "',(0,o.kt)("a",{parentName:"p",href:"https://www.tradingview.com/"},"tradingview.com"),'". When the "coindesk.com" domain tries to fetch the price data from the "tradingview.com" domain, it\'s making a cross-origin request.'),(0,o.kt)("p",null,"Browsers prevent HTTP requests to a different domain than the one hosting the web page, in order to protect users against cross-site security threats. This can be really helpful in blocking things like ",(0,o.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/csrf"},"request forgery"),", malicious ",(0,o.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/11-Client_Side_Testing/13-Testing_for_Cross_Site_Script_Inclusion"},"script inclusion"),"."),(0,o.kt)("h3",{id:"why-am-i-facing-this-issue"},"Why am I facing this issue?"),(0,o.kt)("p",null,"When the CORS protocol blocks your requests, it's a signal that the 1inch API hasn't granted explicit permissions to your domain. For 1inch integrations, this usually happens when trying to call the 1inch API from you're dApp's front-end."),(0,o.kt)("p",null,"When sending a request through a frontend, the API key is embedded within the client-side code or headers, making it accessible to anyone who inspects the webpage's source or monitors its network traffic. This makes it so a malicious actor could easily extract and use your exposed key for their own benefit (or even to get around their own rate limits)!"),(0,o.kt)("h3",{id:"how-can-i-resolve-cors-errors-when-calling-the-1inch-api"},"How can I resolve CORS errors when calling the 1inch API?"),(0,o.kt)("p",null,"The most common solution is to run your request through some type of middleware or proxy server. This additional component makes the call, receives the response, adds necessary headers, and then forwards it to your application. Then the browser will see the request as originating from the same domain, avoiding any CORS triggers."),(0,o.kt)("p",null,"You can use your own custom proxy or a turnkey proxy server like ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-integrations.html"},"Lambda / AWS"),"."),(0,o.kt)("p",null,"Please note: Make sure that your API key and headers are entered correctly!"),(0,o.kt)("h3",{id:"can-i-call-functions-without-a-server-and-still-avoid-cors-errors"},"Can I call functions without a server and still avoid CORS errors?"),(0,o.kt)("p",null,"Since non-server functions are still called on the front-end, your request will still likely be blocked."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Need higher rate limits? Request an enterprise endpoint ",(0,o.kt)("a",{parentName:"em",href:"https://portal.1inch.dev/enterprise"},"here"),".")))}p.isMDXComponent=!0},21139:function(e,t,r){t.Z=r.p+"assets/images/CORS-error-3c0ea3d999d46d5fe21c99387efb8bb4.png"}}]);