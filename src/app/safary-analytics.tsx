import React from 'react';

import Script from 'next/script';

export function SafaryAnalytics() {
  return (
    <Script
      id="ext-script"
      data-product-id="prd_q0lrii7klv"
      data-name="safary-sdk"
      async
    >
      {`!function(){"use strict";function e(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function t(t,n,r,a){if((n||void 0!==t)&&(void 0===t?"undefined":e(t))!==r)throw new Error("Assertion failed: Expected ".concat(null!=a?a:"value"," to be of type ").concat(r," but received ").concat(void 0===t?"undefined":e(t)))}function n(e,t){if(void 0===e)throw new Error("Assertion failed: Expected ".concat(null!=t?t:"value"," to exist but received undefined"))}function r(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,l,"next",e)}function l(e){r(i,a,o,s,l,"throw",e)}s(void 0)}))}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"localItemName","____sfry_anonymous"),i(this,"sessionId","none"),i(this,"sessionData",{sessionId:"none"}),i(this,"previousLocalStorageData",{sessionId:"n"}),i(this,"currentWallets",new Array),i(this,"currentListenerWallets",new Array),i(this,"SAFARY_BACKEND_ORIGIN",("https://tag.safary.club","https://tag.safary.club")),i(this,"SAFARY_SCRIPT_VERSION",null!=="0.1.12"?"0.1.12":"v0.0.0-dev"),i(this,"SAFARY_TAG",void 0),i(this,"PRODUCT_ID",void 0),i(this,"timeScriptLoaded",(new Date).toISOString()),i(this,"pooling_active",!1),this.SAFARY_TAG=t,this.PRODUCT_ID=this.getProductID()}var r,l,u;return r=e,l=[{key:"setup",value:function(){var e=this;return a((function(){return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e.setupSession()];case 1:return t.sent(),e.setupEthereumListeners(),e.setupPhantomSolanaListeners(),e.setupAptosAndAtomListeners(),e.setupWalletConnect(),window.onload=function(){var e=new CustomEvent("fullPageFinishedLoadingSafary");window.dispatchEvent(e)},window.addEventListener("fullPageFinishedLoadingSafary",a((function(){return s(this,(function(t){return e.setupStarknetListeners(),[2]}))}))),e.setupTrackingFunctions(),[3,3];case 2:return t.sent(),console.error("Error during Safary tag setup."),[3,3];case 3:return[2]}}))}))()}},{key:"getProductID",value:function(){var t=this.SAFARY_TAG;if(t||(t=window.document.querySelector('script[data-name="safary-sdk"]')),t){var n=null==t?void 0:t.getAttribute("data-product-id");if(!n){var r=null==t?void 0:t.getAttribute("src");r&&(n=new URL(r).searchParams.get("id"))}if(n&&e.isValidProductID(n))return n}console.error("ERROR: No valid product ID was found. Please contact Safary's support.")}},{key:"getSessionID",value:function(){return this.sessionId}},{key:"getSessionData",value:function(){return this.sessionData}},{key:"setupSession",value:function(){var t=this;return a((function(){var n,r;return s(this,(function(a){switch(a.label){case 0:return null!=(n=window.localStorage.getItem(t.localItemName))&&n.length>0&&(t.previousLocalStorageData=n.startsWith("{")?JSON.parse(n):{sessionId:n},r=t.previousLocalStorageData.sessionId,e.isValidSessionID(r)&&(t.sessionId=r,t.sessionData={sessionId:t.sessionId})),"none"!==t.sessionId?[3,2]:[4,t.getNewSession()];case 1:a.sent(),window.localStorage.setItem(t.localItemName,JSON.stringify(t.sessionData)),a.label=2;case 2:return[2]}}))}))()}},{key:"getNewSession",value:function(){var t=this;return a((function(){return s(this,(function(n){switch(n.label){case 0:return[4,fetch("".concat(t.SAFARY_BACKEND_ORIGIN,"/session.json?id=").concat(t.PRODUCT_ID)).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(n){if(!e.isValidSessionID(n.sessionId))throw new Error("Invalid session id");t.sessionData=n,t.sessionId=n.sessionId}))];case 1:return n.sent(),[2]}}))}))()}},{key:"visit",value:function(){var e=this;return a((function(){var t;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,e.processWallet()];case 1:return n.sent(),t=e.getInfoObject("vt"),[4,e.sendVisitData(t)];case 2:return n.sent(),[3,4];case 3:return n.sent(),console.error("Error during Safary tag execution."),[3,4];case 4:return[2]}}))}))()}},{key:"setupTrackingFunctions",value:function(){void 0===window.safary?(window.safary=window.safary||{},window.safary.track=this.track.bind(this),window.safary.trackSwap=this.trackSwaps.bind(this),window.safary.trackDeposit=this.trackDeposit.bind(this),window.safary.trackWithdrawal=this.trackWithdrawal.bind(this),window.safary.trackNFTPurchase=this.trackNFTPurchase.bind(this),window.safary.products=[this.PRODUCT_ID]):window.safary.products.includes(this.PRODUCT_ID)||window.safary.products.push(this.PRODUCT_ID)}},{key:"track",value:function(r){var o=this;return a((function(){var a,i,l,u,c,d,v,h;return s(this,(function(s){switch(s.label){case 0:try{t(r,!0,"object","params"),n(r.eventType,"eventType"),n(r.eventName,"eventName"),t(r.parameters,!1,"object","parameters")}catch(e){return console.error("ERROR: safary.track(): there were some validation errors."),[2]}a=o.getInfoObject("trk",{"trk-type":r.eventType,"trk-name":r.eventName,"trk-param":r.parameters}),i=!0,l=!1,u=void 0,s.label=1;case 1:s.trys.push([1,6,7,8]),c=window.safary.products[Symbol.iterator](),s.label=2;case 2:return(i=(d=c.next()).done)?[3,5]:(v=d.value,e.isValidProductID(v)?(a.tag=v,a.fulltag=void 0,[4,o.sendVisitData(a)]):[3,4]);case 3:s.sent(),s.label=4;case 4:return i=!0,[3,2];case 5:return[3,8];case 6:return h=s.sent(),l=!0,u=h,[3,8];case 7:try{i||null==c.return||c.return()}finally{if(l)throw u}return[7];case 8:return[2]}}))}))()}},{key:"getInfoObject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vt",t=arguments.length>1?arguments[1]:void 0,n=this.isEmptyOrValidStart(window.location.href,!1),r=this.isEmptyOrValidStart(window.document.referrer,!0),a={};if(this.SAFARY_TAG&&Array.from(this.SAFARY_TAG.attributes).forEach((function(e){a[e.name]=e.value})),n&&r)return{si:this.sessionId,pls:this.previousLocalStorageData.sessionId,sd:this.sessionData,plsd:this.previousLocalStorageData,u:window.location.href,r:window.document.referrer,tag:this.PRODUCT_ID,fulltag:Object.keys(a).length>0?a:void 0,wa:this.currentWallets.length>0?this.currentWallets:void 0,evt:e,"evt-trk":null!=t?t:null,v:this.SAFARY_SCRIPT_VERSION,time:"vt"==e?this.timeScriptLoaded:(new Date).toISOString()};throw console.error("ERROR in Safary tag: Invalid URL or Referrer."),new Error("Invalid URL or Referrer. URL: ".concat(window.location.href," Referrer: ").concat(window.document.referrer))}},{key:"isEmptyOrValidStart",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return null==e?t:"string"==typeof e&&(!(!t||0!==e.length)||/^[A-Za-z0-9]/.test(e))}},{key:"sendVisitData",value:function(e){var t=this;return a((function(){var n;return s(this,(function(r){return void 0===e.tag?(console.error("ERROR: No valid product ID was found. Please contact Safary's support."),[2]):(n="".concat(t.SAFARY_BACKEND_ORIGIN,"/sfry/?id=").concat(e.tag),[2,fetch(n,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({v:e})})])}))}))()}},{key:"setWalletType",value:function(e){var t,n={isBraveWallet:"Brave",isBitKeep:"BitKeep",isPhantom:"Phantom",isCoinbaseWallet:"Coinbase",isMetaMask:"MetaMask"};for(t in n)if(e[t])return n[t];return"Unknown"}},{key:"addWalletFromProvider",value:function(e){var t=this;return a((function(){var n,r,a;return s(this,(function(o){switch(o.label){case 0:return o.trys.push([0,5,,6]),e&&(null==e?void 0:e.selectedAddress)?null===(n=null==e?void 0:e.chainId)||void 0===n?[3,1]:(a=n,[3,3]):[3,4];case 1:return[4,null==e?void 0:e.request({method:"eth_chainId"})];case 2:a=o.sent(),o.label=3;case 3:return r=a,[2,[null==e?void 0:e.selectedAddress,t.setWalletType(e),r,"eth_sfry_all"]];case 4:return[3,6];case 5:return o.sent(),console.error("Error in Safary tag when adding Wallet From Provider."),[3,6];case 6:return[2,[]]}}))}))()}},{key:"getEthereumProvider",value:function(){return void 0===window.phantom?window.ethereum:void 0!==window.ethereum&&void 0!==window.ethereum.detected&&window.ethereum.detected.length>0?window.ethereum.detected[0]:window.phantom.ethereum}},{key:"processWallet",value:function(){var e=this;return a((function(){var t,n,r,a,o;return s(this,(function(i){switch(i.label){case 0:return void 0===window.ethereum?[3,5]:(t=e.getEthereumProvider())?[4,t.request({method:"eth_accounts"})]:[3,3];case 1:return void 0!==(n=i.sent())&&n.length>0?[4,t.request({method:"eth_chainId"})]:[3,3];case 2:r=i.sent(),n.forEach((function(t){e.currentWallets.push({address:t,event:"eth_accounts",type:null,chainId:r})})),i.label=3;case 3:return[4,e.processEthereum()];case 4:(a=i.sent()).length>0&&a.forEach((function(t){t.length>0&&e.currentWallets.push({address:t[0],event:"eth_accounts__eth",type:t[1],chainId:t[2]})})),i.label=5;case 5:return[4,e.handleWalletConnect({key:"SAFARY_VISIT",value:""})];case 6:return(o=i.sent()).length>0&&o.forEach((function(t){null!==t.address&&e.currentWallets.push(t)})),[2]}}))}))()}},{key:"processEthereum",value:function(){var e=this;return a((function(){var t,n,r;return s(this,(function(o){switch(o.label){case 0:return t=[],void 0!==window.ethereum.providers&&window.ethereum.providers.forEach((i=a((function(n){var r;return s(this,(function(a){switch(a.label){case 0:return r=t.push,[4,e.addWalletFromProvider(n)];case 1:return r.apply(t,[a.sent()]),[2]}}))})),function(e){return i.apply(this,arguments)})),void 0===window.ethereum.selectedProvider?[3,2]:(n=t.push,[4,e.addWalletFromProvider(window.ethereum.selectedProvider)]);case 1:return n.apply(t,[o.sent()]),[3,4];case 2:return r=t.push,[4,e.addWalletFromProvider(e.getEthereumProvider())];case 3:r.apply(t,[o.sent()]),o.label=4;case 4:return[2,t]}var i}))}))()}},{key:"setupEthereumListeners",value:function(){if(void 0!==window.ethereum){var e,t=this;window.ethereum.on("accountsChanged",(e=a((function(e){var n,r;return s(this,(function(o){switch(o.label){case 0:return n=new Array,Array.isArray(e)||(e=[e]),[4,window.ethereum.request({method:"eth_chainId"})];case 1:return r=o.sent(),e.forEach(function(){var e=a((function(e){return s(this,(function(t){return n.push({address:e,event:"accountsChanged",type:null,chainId:r}),[2]}))}));return function(t){return e.apply(this,arguments)}}()),[4,t.processEthereum()];case 2:return o.sent().forEach((function(e){null!==e[0]&&void 0!==e[0]&&n.push({address:e[0],event:"eth_accounts__eth_listener",type:e[1],chainId:e[2]})})),t.sendWalletData(n),[2]}}))})),function(t){return e.apply(this,arguments)}));var n=this;window.ethereum.on("chainChanged",function(){var e=a((function(e){var t;return s(this,(function(r){return t=new Array,Array.isArray(e)||(e=[e]),e.forEach(function(){var e=a((function(e){return s(this,(function(n){return t.push({address:"Unknown",event:"chainChanged",type:null,chainId:e}),[2]}))}));return function(t){return e.apply(this,arguments)}}()),n.sendWalletData(t),[2]}))}));return function(t){return e.apply(this,arguments)}}())}else window.__defineSetter__("ethereum",this.setupEthereumListeners)}},{key:"setupPhantomSolanaListeners",value:function(){if(void 0!==window.phantom){var e,t=this;window.phantom.solana.on("connect",(e=a((function(e){var n;return s(this,(function(r){return(n=new Array).push({address:e.toString(),event:"accountsChanged",type:"Phantom",chainId:"Solana"}),t.sendWalletData(n),[2]}))})),function(t){return e.apply(this,arguments)}))}else window.__defineSetter__("phantom",this.setupPhantomSolanaListeners)}},{key:"is_atomscan",value:function(e){return!!e&&["agoric","aioz","akash","archway","mantle","axelar","band","bze","bcna","bitsong","bostrom","canto","swth","c4e","cheqd","chihuahua","comdex","cosmos","cre","cro","cudos","decentr","desmos","emoney","echelon","ethos","evmos","fetch","firma","genesis","gravity","idep","inj","iaa","ixo","juno","kava","ki","darc","kujira","lamb","like","lum","lumen","panacea","meme","migaloo","omniflix","orai","osmo","pasg","persistence","plq","point","pb","rebus","regen","rizon","secret","sent","shentu","sif","somm","stafi","stars","star","stride","tori","terra","umee","und","vdl"].some((function(t){return e.startsWith(t)}))}},{key:"setupAptosAndAtomListeners",value:function(){var e=this;window.addEventListener("message",(function(t){var n,r,a,o,i,s,l,u,c,d;if("PetraApiResponse"===(null==t||null===(n=t.data)||void 0===n?void 0:n.type)){var v,h,f,p,y,w,m=new Array;if(null==t||null===(h=t.data)||void 0===h||null===(v=h.result)||void 0===v?void 0:v.chainId)m.push({address:"Unknown",event:"chainChanged",type:"Petra",chainId:"Aptos ".concat(null==t||null===(w=t.data)||void 0===w||null===(y=w.result)||void 0===y?void 0:y.name)});else if(null==t||null===(p=t.data)||void 0===p||null===(f=p.result)||void 0===f?void 0:f.address){var g,I;m.push({address:null==t||null===(I=t.data)||void 0===I||null===(g=I.result)||void 0===g?void 0:g.address,event:"accountsChanged",type:"Petra",chainId:null})}e.sendWalletData(m)}else if("proxy-request"===(null==t||null===(r=t.data)||void 0===r?void 0:r.type)&&"getKey"===(null==t||null===(a=t.data)||void 0===a?void 0:a.method)){var k,S=null==t||null===(k=t.data)||void 0===k?void 0:k.args[0];e.is_atomscan(S)&&((m=new Array).push({address:"Unknown",event:"chainChanged",type:"Keplr",chainId:S}),e.sendWalletData(m))}else if("proxy-request-response"===(null==t||null===(o=t.data)||void 0===o?void 0:o.type)){var _,b,A,D=null==t||null===(A=t.data)||void 0===A||null===(b=A.result)||void 0===b||null===(_=b.return)||void 0===_?void 0:_.bech32Address;e.is_atomscan(D)&&((m=new Array).push({address:D,event:"accountsChanged",type:"Keplr",chainId:null}),e.sendWalletData(m))}else if("leap:content"===(null==t||null===(i=t.data)||void 0===i?void 0:i.target)&&"enable-access"===(null==t||null===(l=t.data)||void 0===l||null===(s=l.data)||void 0===s?void 0:s.type)){var E,C;S=null==t||null===(C=t.data)||void 0===C||null===(E=C.data)||void 0===E?void 0:E.chainIds[0],e.is_atomscan(S)&&((m=new Array).push({address:"Unknown",event:"chainChanged",type:"Leap",chainId:S}),e.sendWalletData(m))}else if("leap:inpage"===(null==t||null===(u=t.data)||void 0===u?void 0:u.target)&&"onGET-KEY"===(null===(d=t.data)||void 0===d||null===(c=d.data)||void 0===c?void 0:c.name)){var R,W,O,P;D=null==t||null===(P=t.data)||void 0===P||null===(O=P.data)||void 0===O||null===(W=O.payload)||void 0===W||null===(R=W.key)||void 0===R?void 0:R.bech32Address,e.is_atomscan(D)&&((m=new Array).push({address:D,event:"accountsChanged",type:"Leap",chainId:null}),e.sendWalletData(m))}})),void 0!==window.aptos&&(window.aptos.onAccountChange((function(t){var n=new Array;n.push({address:null==t?void 0:t.address,event:"accountsChanged",type:"Petra",chainId:null}),e.sendWalletData(n)})),window.aptos.onNetworkChange((function(t){var n=new Array;n.push({address:"Unknown",event:"accountsChanged",type:"Petra",chainId:"Aptos ".concat(null==t?void 0:t.name)}),e.sendWalletData(n)})))}},{key:"setupStarknetListeners",value:function(){var e,t=this.getStarknetchainDict();if(void 0!==window.starknet_argentX){var n=this;window.starknet_argentX.on("accountsChanged",(e=a((function(e){var r,o,i;return s(this,(function(l){return r=new Array,Array.isArray(e)||(e=[e]),o=window.starknet_argentX.name,i=t[window.starknet_argentX.chainId||""],e.forEach(function(){var e=a((function(e){return s(this,(function(t){return r.push({address:e,event:"accountsChanged",type:o,chainId:i}),[2]}))}));return function(t){return e.apply(this,arguments)}}()),n.sendWalletData(r),[2]}))})),function(t){return e.apply(this,arguments)}));var r=this;window.starknet_argentX.on("networkChanged",function(){var e=a((function(e){var n,o;return s(this,(function(i){return n=new Array,Array.isArray(e)||(e=[e]),o=window.starknet_argentX.name,e.forEach(function(){var e=a((function(e){return s(this,(function(r){return n.push({address:"Unknown",event:"chainChanged",type:o,chainId:t[e||""]}),[2]}))}));return function(t){return e.apply(this,arguments)}}()),r.sendWalletData(n),[2]}))}));return function(t){return e.apply(this,arguments)}}())}if(void 0!==window.starknet_braavos){Object.defineProperty(window.starknet_braavos,"selectedAddress",{get:function(){return this._selectedAddress},set:function(e){if(""!==e&&null!=e){var n=t[window.starknet_braavos.account.provider.chainId||""],r=new CustomEvent("customConnectedWalletSafary",{detail:{wallet:{address:e,event:"accountsChanged",type:"Braavos",chainId:n}}});window.dispatchEvent(r)}this._selectedAddress=e},configurable:!0,enumerable:!0});var o=this;window.addEventListener("customConnectedWalletSafary",function(){var e=a((function(e){return s(this,(function(t){switch(t.label){case 0:return[4,o.sendWalletData([e.detail.wallet])];case 1:return t.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}())}}},{key:"setupWalletConnect",value:function(){try{var e=window.localStorage.setItem;window.localStorage.setItem=function(t,n){try{e.call(this,t,n);var r=new CustomEvent("localStorageSetItem",{detail:{key:t,value:n}});window.dispatchEvent(r)}catch(e){console.error("Error in Safary tag when saving Local Storage.")}};var t=this;window.addEventListener("localStorageSetItem",(n=a((function(e){var n,r,a,o,i,l;return s(this,(function(s){switch(s.label){case 0:return["wagmi.store"].includes(e.detail.key)?(n=t.handleWagmi(e.detail.value),[4,t.sendWalletData(n)]):[3,2];case 1:return s.sent(),[3,13];case 2:return["hashconnectData"].includes(e.detail.key)?(r=t.handleHashConnect(e.detail.value),[4,t.sendWalletData(r)]):[3,4];case 3:return s.sent(),[3,13];case 4:return["li.fi-wallets"].includes(e.detail.key)?(a=t.handleLiFi(e.detail.value),[4,t.sendWalletData(a)]):[3,6];case 5:return s.sent(),[3,13];case 6:return e.detail.key.startsWith("dynamic_authenticated_user")?(o=t.handleDynamic(e.detail.value),[4,t.sendWalletData(o)]):[3,8];case 7:return s.sent(),[3,13];case 8:return["privy:connections"].includes(e.detail.key)?(i=t.handlePrivy(e.detail.value),[4,t.sendWalletData(i)]):[3,10];case 9:return s.sent(),[3,13];case 10:return[4,t.handleWalletConnect(e.detail,!0)];case 11:return l=s.sent(),[4,t.sendWalletData(l)];case 12:s.sent(),s.label=13;case 13:return[2]}}))})),function(e){return n.apply(this,arguments)}))}catch(e){console.error("Error in Safary tag when setting up Wallet Connect.")}var n}},{key:"sendWalletData",value:function(t){var n=this;return a((function(){var r,a;return s(this,(function(o){switch(o.label){case 0:return t.length>0&&(r=e.filterExistingObjects(t,n.currentListenerWallets)).length>0?(n.currentListenerWallets=n.currentListenerWallets.concat(r),(a=n.getInfoObject("wl")).wa=r,[4,n.sendVisitData(a)]):[3,2];case 1:o.sent(),o.label=2;case 2:return[2]}}))}))()}},{key:"handleWagmi",value:function(e){try{var t,n=JSON.parse(e);if(n&&(null==n||null===(t=n.state)||void 0===t?void 0:t.data)){var r,a=null==n||null===(r=n.state)||void 0===r?void 0:r.data;if(a&&a.account&&a.account.length>0){var o,i=null;try{i=JSON.parse(window.localStorage.getItem("wagmi.wallet")||"")}catch(e){i=null}return[{address:a.account,event:"wagmi_wallets",type:i,chainId:null==a||null===(o=a.chain)||void 0===o?void 0:o.id}]}}}catch(e){return[]}return[]}},{key:"handleHashConnect",value:function(e){var t=this.getHederachainDict(),n=new Array;try{var r,a=JSON.parse(e);if(a&&(null==a?void 0:a.pairingData)&&(null==a||null===(r=a.pairingData)||void 0===r?void 0:r.length)>0){var o=null==a?void 0:a.pairingData,i=!0,s=!1,l=void 0;try{for(var u,c=o[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var d,v=u.value,h=t["hedera-"+(null==v?void 0:v.network)];if(v&&(null==v?void 0:v.accountIds)&&(null==v||null===(d=v.accountIds)||void 0===d?void 0:d.length)>0){var f=!0,p=!1,y=void 0;try{for(var w,m=v.accountIds[Symbol.iterator]();!(f=(w=m.next()).done);f=!0){var g=w.value;n.push({address:g,event:"hashconnect_wallets",type:"HashPack",chainId:h})}}catch(e){p=!0,y=e}finally{try{f||null==m.return||m.return()}finally{if(p)throw y}}}}}catch(e){s=!0,l=e}finally{try{i||null==c.return||c.return()}finally{if(s)throw l}}}}catch(e){return n}return n}},{key:"handleLiFi",value:function(e){try{var t=JSON.parse(e);if(t&&t.length>0){var n=t[t.length-1];if(n&&(null==n?void 0:n.address)&&(null==n?void 0:n.address.length)>0)return[{address:n.address,event:"lifi_wallets",type:n.name,chainId:null}]}}catch(e){return[]}return[]}},{key:"handleDynamic",value:function(e){var t=new Array;try{var n,r=JSON.parse(e);if(r&&(null==r?void 0:r.verifiedCredentials)&&(null==r||null===(n=r.verifiedCredentials)||void 0===n?void 0:n.length)>0){var a=null==r?void 0:r.verifiedCredentials,o=!0,i=!1,s=void 0;try{for(var l,u=a[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var c,d=l.value;d&&(null==d?void 0:d.address)&&(null==d||null===(c=d.address)||void 0===c?void 0:c.length)>0&&t.push({address:d.address,event:"dynamic_authenticated_user",type:d.walletName,chainId:d.chain})}}catch(e){i=!0,s=e}finally{try{o||null==u.return||u.return()}finally{if(i)throw s}}}}catch(e){return t}return t}},{key:"handlePrivy",value:function(e){var t=new Array;try{var n=JSON.parse(e);if(n&&(null==n?void 0:n.length)>0){var r=n,a=!0,o=!1,i=void 0;try{for(var s,l=r[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var u,c=s.value;c&&(null==c?void 0:c.address)&&(null==c||null===(u=c.address)||void 0===u?void 0:u.length)>0&&t.push({address:c.address,event:"privy_connection",type:"unknown"!==c.walletClientType?c.walletClientType:c.connectorType,chainId:null==c?void 0:c.chainId})}}catch(e){o=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw i}}}}catch(e){return t}return t}},{key:"handleWalletConnect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return a((function(){var r,a,o,i,l,u;return s(this,(function(s){switch(s.label){case 0:return r=e.key,["wc@2:client:0.3//session","WALLETCONNECT_DEEPLINK_CHOICE","wc@2:ethereum_provider:/chainId","WCM_RECENT_WALLET_DATA","WCM_VERSION","SAFARY_VISIT","SAFARY_POOLING"].includes(r)?(a=window.localStorage.getItem("wc@2:client:0.3//session"))&&(null==a?void 0:a.length)>0?[4,n.processWalletConnect(t,a)]:[3,2]:[3,10];case 1:case 6:return[2,s.sent()];case 2:return s.trys.push([2,9,,10]),[4,n.getValueFromIndexedDB("wc@2:client:0.3:session")];case 3:return(o=s.sent())&&(null==o?void 0:o.length)>0?[4,n.getValueFromIndexedDB("WALLETCONNECT_DEEPLINK_CHOICE")]:[3,7];case 4:return i=s.sent(),[4,n.getValueFromIndexedDB("wc@2:ethereum_provider:chainId")];case 5:return l=s.sent(),[4,n.processWalletConnect(t,o,i,l)];case 7:throw new Error("Error Reading Wallet Connect from IndexedDB.");case 8:return[3,10];case 9:return s.sent(),!1===n.pooling_active&&(u=window.setInterval((function(){if(n.pooling_active){var e=new CustomEvent("localStorageSetItem",{detail:{key:"SAFARY_POOLING",value:""}});window.dispatchEvent(e)}}),1e4),window.setTimeout((function(){window.clearInterval(u),n.pooling_active=!1}),6e4),n.pooling_active=!0),[3,10];case 10:return[2,[]]}}))}))()}},{key:"getHederachainDict",value:function(){return{"hedera-mainnet":295,"hedera-testnet":296,"hedera-previewnet":297,"hedera-localnet":298}}},{key:"getStarknetchainDict",value:function(){return{SN_MAIN:"Starknet Mainnet","0x534e5f4d41494e":"Starknet Mainnet","23448594291968334":"Starknet Mainnet","393402133025997798000961":"Starknet Sepolia","0x534e5f5345504f4c4941":"Starknet Sepolia",SN_SEPOLIA:"Starknet Sepolia","1536727068981429685321":"Starknet Goerli","0x534e5f474f45524c49":"Starknet Goerli",SN_GOERLI:"Starknet Goerli","393402129659245999442226":"Starknet Goerli2","0x534e5f474f45524c4932":"Starknet Goerli2",SN_GOERLI2:"Starknet Goerli2","":"Unknown"}}},{key:"getValueFromIndexedDB",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"WALLET_CONNECT_V2_INDEXED_DB",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keyvaluestorage";return a((function(){var r;return s(this,(function(a){return r=!1,[2,new Promise((function(a,o){var i=window.indexedDB.open(t);i.onerror=function(e){r?a(null):(console.error("Safary tag error: IndexedDB Database error."),o(i.error))},i.onupgradeneeded=function(){var e;r=!0,null==i||null===(e=i.transaction)||void 0===e||e.abort(),a(null)},i.onsuccess=function(t){var r=i.result;try{var s=r.transaction([n],"readonly").objectStore(n).get(e);s.onerror=function(e){console.error("Safary tag error: IndexedDB Error getting value."),o(s.error)},s.onsuccess=function(e){a(s.result)}}catch(e){a(null)}}}))]}))}))()}},{key:"processWalletConnect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.localStorage.getItem("wc@2:client:0.3//session"),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE"),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.localStorage.getItem("wc@2:ethereum_provider:/chainId"),o=this;return a((function(){var a,i,l,u,c,d,v,h,f,p;return s(this,(function(s){a=new Array;try{t&&(i=JSON.parse(t||"")[0],l=i.namespaces,u=l[Object.keys(l)[0]],c=u.accounts[0].split(":"),d=c.pop(),v=c.join("-"),h=o.getHederachainDict(),f=v.startsWith("hedera")?h[v]:r,p=o.getWalletTypeForWalletConnect(n,i),a.push({address:d,event:e?"eth_sfry_wc_listener":"eth_sfry_wc",type:p,chainId:f}),o.pooling_active=!1)}catch(e){console.error("Safary tag error when processing Wallet Connect.",e)}return[2,a]}))}))()}},{key:"getWalletTypeForWalletConnect",value:function(e,t){var n=void 0;try{var r,a,o;e&&e.trim().length>0&&(n=null===(r=JSON.parse(e))||void 0===r?void 0:r.name),n&&0!==n.trim().length||(n=(null==t||null===(o=t.peer)||void 0===o||null===(a=o.metadata)||void 0===a?void 0:a.name)||"WalletConnect")}catch(e){}return null!=n?n:"WalletConnect"}},{key:"trackSwaps",value:function(e){var r=this;return a((function(){var a;return s(this,(function(o){try{t(e,!0,"object","params"),n(null==e?void 0:e.fromAmount,"fromAmount"),n(null==e?void 0:e.fromCurrency,"fromCurrency"),n(null==e?void 0:e.contractAddress,"contractAddress"),t(null==e?void 0:e.parameters,!1,"object","parameters")}catch(e){return console.error("ERROR: safary.trackSwaps(): there were some validation errors."),[2]}return[2,r.track({eventType:"swap",eventName:null!==(a=null==e?void 0:e.eventName)&&void 0!==a?a:"Swaps",parameters:{default__fromAmount:null==e?void 0:e.fromAmount,default__fromCurrency:null==e?void 0:e.fromCurrency,default__contractAddress:null==e?void 0:e.contractAddress,default__fromAmountUSD:null==e?void 0:e.fromAmountUSD}})]}))}))()}},{key:"trackDeposit",value:function(e){var r=this;return a((function(){var a;return s(this,(function(o){try{t(e,!0,"object","params"),n(null==e?void 0:e.amount,"fromAmount"),n(null==e?void 0:e.currency,"fromCurrency"),n(null==e?void 0:e.contractAddress,"contractAddress"),t(null==e?void 0:e.parameters,!1,"object","parameters")}catch(e){return console.error("ERROR: safary.trackDeposit(): there were some validation errors."),[2]}return[2,r.track({eventType:"deposit",eventName:null!==(a=null==e?void 0:e.eventName)&&void 0!==a?a:"Deposits",parameters:{default__fromAmount:null==e?void 0:e.amount,default__fromCurrency:null==e?void 0:e.currency,default__contractAddress:null==e?void 0:e.contractAddress,default__fromAmountUSD:null==e?void 0:e.amountUSD}})]}))}))()}},{key:"trackWithdrawal",value:function(e){var r=this;return a((function(){var a;return s(this,(function(o){try{t(e,!0,"object","params"),n(null==e?void 0:e.amount,"fromAmount"),n(null==e?void 0:e.currency,"fromCurrency"),n(null==e?void 0:e.contractAddress,"contractAddress"),t(null==e?void 0:e.parameters,!1,"object","parameters")}catch(e){return console.error("ERROR: safary.trackWithdrawal(): there were some validation errors."),[2]}return[2,r.track({eventType:"withdrawal",eventName:null!==(a=null==e?void 0:e.eventName)&&void 0!==a?a:"Withdrawals",parameters:{default__fromAmount:null==e?void 0:e.amount,default__fromCurrency:null==e?void 0:e.currency,default__contractAddress:null==e?void 0:e.contractAddress,default__fromAmountUSD:null==e?void 0:e.amountUSD}})]}))}))()}},{key:"trackNFTPurchase",value:function(e){var r=this;return a((function(){var a;return s(this,(function(o){try{t(e,!0,"object","params"),n(null==e?void 0:e.amount,"fromAmount"),n(null==e?void 0:e.currency,"fromCurrency"),n(null==e?void 0:e.contractAddress,"contractAddress"),n(null==e?void 0:e.tokenId,"tokenId"),t(null==e?void 0:e.parameters,!1,"object","parameters")}catch(e){return console.error("ERROR: safary.trackNFTPurchase(): there were some validation errors."),[2]}return[2,r.track({eventType:"NFT Purchase",eventName:null!==(a=null==e?void 0:e.eventName)&&void 0!==a?a:"NFT Purchases",parameters:{default__fromAmount:null==e?void 0:e.amount,default__fromCurrency:null==e?void 0:e.currency,default__fromAmountUSD:null==e?void 0:e.amountUSD,default__contractAddress:null==e?void 0:e.contractAddress,default__tokenId:null==e?void 0:e.tokenId}})]}))}))()}}],u=[{key:"isValidProductID",value:function(e){return"string"!=typeof e?(console.error("ERROR: safary.isValidProductID(): the product ID must be a string."),!1):14!==e.length?(console.error("ERROR: safary.isValidProductID(): the product ID must have 14 characters."),!1):e.startsWith("prd_")?!!/^[a-z0-9]+$/i.test(e.substring(4))||(console.error("ERROR: safary.isValidProductID(): the product ID must be alphanumeric."),!1):(console.error('ERROR: safary.isValidProductID(): the product ID must start with "prd_".'),!1)}},{key:"isValidSessionID",value:function(e){return"string"!=typeof e?(console.error("ERROR: safary.isValidSessionID(): the session ID must be a string."),!1):36!==e.length?(console.error("ERROR: safary.isValidSessionID(): the session ID must have 36 characters."),!1):!!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)||(console.error("ERROR: safary.isValidSessionID(): the session ID must be a valid UUID."),!1)}},{key:"isObjectInList",value:function(e,t){return t.some((function(t){return t.address===e.address&&t.event===e.event&&t.type===e.type&&t.chainId===e.chainId}))}},{key:"filterExistingObjects",value:function(t,n){return t.filter((function(t){return!e.isObjectInList(t,n)}))}}],l&&o(r.prototype,l),u&&o(r,u),e}();function u(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}var c=window.document.currentScript;function d(){var e;return e=function(){var e;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(t){switch(t.label){case 0:return[4,(e=new l(c)).setup()];case 1:return t.sent(),[4,e.visit()];case 2:return t.sent(),[2]}}))},d=function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){u(o,r,a,i,s,"next",e)}function s(e){u(o,r,a,i,s,"throw",e)}i(void 0)}))},d.apply(this,arguments)}"undefined"!=typeof window&&function(){d.apply(this,arguments)}()}();`}
    </Script>
  );
}
