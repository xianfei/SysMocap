/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$a=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$6=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$9=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$8(n){return (t,o)=>void 0!==o?e$9(n,t,o):i$6(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$3(t){return n$8({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$6=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$8(e){return o$6({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$5(i,n){return o$6({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$7(e){return o$6({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$7;const e$6=null!=(null===(n$7=window.HTMLSlotElement)||void 0===n$7?void 0:n$7.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function l$5(n){const{slot:l,selector:t}=null!=n?n:{};return o$6({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$6(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window,e$5=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$5=Symbol(),n$6=new WeakMap;let o$5 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$6.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$5("string"==typeof t?t:t+"",void 0,s$5),i$4=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$5(n,t,s$5)},S$1=(s,n)=>{e$5?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$4;const e$4=window,r$1=e$4.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$4=e$4.reactiveElementPolyfillSupport,n$5={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$2=(t,i)=>i!==t&&(i==i||t==t),l$4={attribute:!0,type:String,converter:n$5,reflect:!1,hasChanged:a$2},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$4){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$4}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$4){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$5).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$5;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$4||o$4({ReactiveElement:u$1}),(null!==(s$4=e$4.reactiveElementVersions)&&void 0!==s$4?s$4:e$4.reactiveElementVersions=[]).push("1.6.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$3=window,s$3=i$3.trustedTypes,e$3=s$3?s$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3="$lit$",n$4=`lit$${(Math.random()+"").slice(9)}$`,l$3="?"+n$4,h=`<${l$3}>`,r=document,d=()=>r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$1="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f$1;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$1?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f$1,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f$1:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f$1?s+h:v>=0?(l.push(e),s.slice(0,v)+o$3+s.slice(v)+n$4+w):s+n$4+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$3?e$3.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$3)||i.startsWith(n$4)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$3).split(n$4),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$4),i=t.length-1;if(i>0){h.textContent=s$3?s$3.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$3)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$4,t+1));)v.push({type:7,index:r}),t+=n$4.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$3?s$3.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i$3.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t$1=i$3.litHtmlVersions)&&void 0!==t$1?t$1:i$3.litHtmlVersions=[]).push("2.7.4");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$2,o$2;let s$2 = class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}};s$2.finalized=!0,s$2._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$2});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$2});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.3.2");

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A component for elevation.
 */
class Elevation extends s$2 {
    render() {
        return x `<span class="shadow"></span>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$Z = i$4 `:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The `<md-elevation>` custom element with default styles.
 *
 * Elevation is the relative distance between two surfaces along the z-axis.
 */
let MdElevation = class MdElevation extends Elevation {
};
MdElevation.styles = [styles$Z];
MdElevation = __decorate([
    e$a('md-elevation')
], MdElevation);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A key to retrieve an `Attachable` element's `AttachableController` from a
 * global `MutationObserver`.
 */
const ATTACHABLE_CONTROLLER = Symbol('attachableController');
let FOR_ATTRIBUTE_OBSERVER;
{
    /**
     * A global `MutationObserver` that reacts to `for` attribute changes on
     * `Attachable` elements. If the `for` attribute changes, the controller will
     * re-attach to the new referenced element.
     */
    FOR_ATTRIBUTE_OBSERVER = new MutationObserver(records => {
        for (const record of records) {
            // When a control's `for` attribute changes, inform its
            // `AttachableController` to update to a new control.
            record.target[ATTACHABLE_CONTROLLER]
                ?.hostConnected();
        }
    });
}
/**
 * A controller that provides an implementation for `Attachable` elements.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement implements Attachable {
 *   get control() { return this.attachableController.control; }
 *
 *   private readonly attachableController = new AttachableController(
 *     this,
 *     (previousControl, newControl) => {
 *       previousControl?.removeEventListener('click', this.handleClick);
 *       newControl?.addEventListener('click', this.handleClick);
 *     }
 *   );
 *
 *   // Implement remaining `Attachable` properties/methods that call the
 *   // controller's properties/methods.
 * }
 * ```
 */
class AttachableController {
    get htmlFor() {
        return this.host.getAttribute('for');
    }
    set htmlFor(htmlFor) {
        if (htmlFor === null) {
            this.host.removeAttribute('for');
        }
        else {
            this.host.setAttribute('for', htmlFor);
        }
    }
    get control() {
        if (this.host.hasAttribute('for')) {
            if (!this.htmlFor || !this.host.isConnected) {
                return null;
            }
            return this.host.getRootNode()
                .querySelector(`#${this.htmlFor}`);
        }
        return this.currentControl || this.host.parentElement;
    }
    /**
     * Creates a new controller for an `Attachable` element.
     *
     * @param host The `Attachable` element.
     * @param onControlChange A callback with two parameters for the previous and
     *     next control. An `Attachable` element may perform setup or teardown
     *     logic whenever the control changes.
     */
    constructor(host, onControlChange) {
        this.host = host;
        this.onControlChange = onControlChange;
        this.currentControl = null;
        host.addController(this);
        host[ATTACHABLE_CONTROLLER] = this;
        FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ['for'] });
    }
    attach(control) {
        if (control === this.currentControl) {
            return;
        }
        this.setCurrentControl(control);
        // When imperatively attaching, remove the `for` attribute so
        // that the attached control is used instead of a referenced one.
        this.host.removeAttribute('for');
    }
    detach() {
        this.setCurrentControl(null);
        // When imperatively detaching, add an empty `for=""` attribute. This will
        // ensure the control is `null` rather than the `parentElement`.
        this.host.setAttribute('for', '');
    }
    /** @private */
    hostConnected() {
        this.setCurrentControl(this.control);
    }
    /** @private */
    hostDisconnected() {
        this.setCurrentControl(null);
    }
    setCurrentControl(control) {
        this.onControlChange(this.currentControl, control);
        this.currentControl = control;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Events that the focus ring listens to.
 */
const EVENTS$1 = ['focusin', 'focusout', 'pointerdown'];
/**
 * A focus ring component.
 */
class FocusRing extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Makes the focus ring visible.
         */
        this.visible = false;
        /**
         * Makes the focus ring animate inwards instead of outwards.
         */
        this.inward = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    /** @private */
    handleEvent(event) {
        if (event[HANDLED_BY_FOCUS_RING]) {
            // This ensures the focus ring does not activate when multiple focus rings
            // are used within a single component.
            return;
        }
        switch (event.type) {
            default:
                return;
            case 'focusin':
                this.visible = this.control?.matches(':focus-visible') ?? false;
                break;
            case 'focusout':
            case 'pointerdown':
                this.visible = false;
                break;
        }
        event[HANDLED_BY_FOCUS_RING] = true;
    }
    onControlChange(prev, next) {
        for (const event of EVENTS$1) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
}
__decorate([
    n$8({ type: Boolean, reflect: true })
], FocusRing.prototype, "visible", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], FocusRing.prototype, "inward", void 0);
const HANDLED_BY_FOCUS_RING = Symbol('handledByFocusRing');

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$Y = i$4 `:host{--_active-width: var(--md-focus-ring-active-width, 8px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration: var(--md-focus-ring-duration, 600ms);--_inward-offset: var(--md-focus-ring-inward-offset, 0px);--_outward-offset: var(--md-focus-ring-outward-offset, 2px);--_shape: var(--md-focus-ring-shape, 9999px);--_width: var(--md-focus-ring-width, 3px);--_shape-start-start: var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end: var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end: var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start: var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/267336424): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdFocusRing = class MdFocusRing extends FocusRing {
};
MdFocusRing.styles = [styles$Y];
MdFocusRing = __decorate([
    e$a('md-focus-ring')
], MdFocusRing);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=t=>(...e)=>({_$litDirective$:t,values:e});let i$2 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=e$2(class extends i$2{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Easing functions to use for web animations.
 *
 * **NOTE:** `EASING.EMPHASIZED` is approximated with unknown accuracy.
 *
 * TODO(b/241113345): replace with tokens
 */
const EASING = {
    STANDARD: 'cubic-bezier(0.2, 0, 0, 1)',
    STANDARD_ACCELERATE: 'cubic-bezier(.3,0,1,1)',
    STANDARD_DECELERATE: 'cubic-bezier(0,0,0,1)',
    EMPHASIZED: 'cubic-bezier(.3,0,0,1)',
    EMPHASIZED_ACCELERATE: 'cubic-bezier(.3,0,.8,.15)',
    EMPHASIZED_DECELERATE: 'cubic-bezier(.05,.7,.1,1)',
};
/**
 * Creates an `AnimationSignal` that can be used to cancel a previous task.
 *
 * @example
 * class MyClass {
 *   private labelAnimationSignal = createAnimationSignal();
 *
 *   private async animateLabel() {
 *     // Start of the task. Previous tasks will be canceled.
 *     const signal = this.labelAnimationSignal.start();
 *
 *     // Do async work...
 *     if (signal.aborted) {
 *       // Use AbortSignal to check if a request was made to abort after some
 *       // asynchronous work.
 *       return;
 *     }
 *
 *     const animation = this.animate(...);
 *     // Add event listeners to be notified when the task should be canceled.
 *     signal.addEventListener('abort', () => {
 *       animation.cancel();
 *     });
 *
 *     animation.addEventListener('finish', () => {
 *       // Tell the signal that the current task is finished.
 *       this.labelAnimationSignal.finish();
 *     });
 *   }
 * }
 *
 * @return An `AnimationSignal`.
 */
function createAnimationSignal() {
    // The current animation's AbortController
    let animationAbortController = null;
    return {
        start() {
            // Tell the previous animation to cancel.
            animationAbortController?.abort();
            // Set up a new AbortController for the current animation.
            animationAbortController = new AbortController();
            // Provide the AbortSignal so that the caller can check aborted status
            // and add listeners.
            return animationAbortController.signal;
        },
        finish() {
            animationAbortController = null;
        },
    };
}
/**
 * Returns a function which can be used to throttle function calls
 * mapped to a key via a given function that should produce a promise that
 * determines the throttle amount (defaults to requestAnimationFrame).
 */
function createThrottle() {
    const stack = new Set();
    return async (key = '', cb, timeout = async () => {
        await new Promise(requestAnimationFrame);
    }) => {
        if (!stack.has(key)) {
            stack.add(key);
            await timeout();
            if (stack.has(key)) {
                stack.delete(key);
                cb();
            }
        }
    };
}
/**
 * Parses an number in milliseconds from a css time value
 */
function msFromTimeCSSValue(value) {
    const match = value.trim().match(/([\d.]+)(\s*s$)?/);
    const time = match?.[1];
    const seconds = match?.[2];
    return Number(time ?? 0) * (seconds ? 1000 : 1);
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const PRESS_GROW_MS = 450;
const MINIMUM_PRESS_MS = 225;
const INITIAL_ORIGIN_SCALE = 0.2;
const PADDING = 10;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PRESS_PSEUDO = '::after';
const ANIMATION_FILL = 'forwards';
/**
 * Interaction states for the ripple.
 *
 * On Touch:
 *  - `INACTIVE -> TOUCH_DELAY -> WAITING_FOR_CLICK -> INACTIVE`
 *  - `INACTIVE -> TOUCH_DELAY -> HOLDING -> WAITING_FOR_CLICK -> INACTIVE`
 *
 * On Mouse or Pen:
 *   - `INACTIVE -> WAITING_FOR_CLICK -> INACTIVE`
 */
var State;
(function (State) {
    /**
     * Initial state of the control, no touch in progress.
     *
     * Transitions:
     *   - on touch down: transition to `TOUCH_DELAY`.
     *   - on mouse down: transition to `WAITING_FOR_CLICK`.
     */
    State[State["INACTIVE"] = 0] = "INACTIVE";
    /**
     * Touch down has been received, waiting to determine if it's a swipe or
     * scroll.
     *
     * Transitions:
     *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
     *   - on cancel: transition to `INACTIVE`.
     *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
     */
    State[State["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
    /**
     * A touch has been deemed to be a press
     *
     * Transitions:
     *  - on up: transition to `WAITING_FOR_CLICK`.
     */
    State[State["HOLDING"] = 2] = "HOLDING";
    /**
     * The user touch has finished, transition into rest state.
     *
     * Transitions:
     *   - on click end press; transition to `INACTIVE`.
     */
    State[State["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
})(State || (State = {}));
/**
 * Events that the ripple listens to.
 */
const EVENTS = [
    'click', 'contextmenu', 'pointercancel', 'pointerdown', 'pointerenter',
    'pointerleave', 'pointerup'
];
/**
 * Delay reacting to touch so that we do not show the ripple for a swipe or
 * scroll interaction.
 */
const TOUCH_DELAY_MS = 150;
/**
 * A ripple component.
 */
class Ripple extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Disables the ripple.
         */
        this.disabled = false;
        this.hovered = false;
        this.pressed = false;
        this.rippleSize = '';
        this.rippleScale = '';
        this.initialSize = 0;
        this.state = State.INACTIVE;
        this.checkBoundsAfterContextMenu = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    render() {
        const classes = {
            'hovered': this.hovered,
            'pressed': this.pressed,
        };
        return x `<div class="surface ${o$1(classes)}"></div>`;
    }
    update(changedProps) {
        if (changedProps.has('disabled') && this.disabled) {
            this.hovered = false;
            this.pressed = false;
        }
        super.update(changedProps);
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerenter(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = true;
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerleave(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = false;
        // release a held mouse or pen press that moves outside the element
        if (this.state !== State.INACTIVE) {
            this.endPressAnimation();
        }
    }
    handlePointerup(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        if (this.state === State.HOLDING) {
            this.state = State.WAITING_FOR_CLICK;
            return;
        }
        if (this.state === State.TOUCH_DELAY) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(this.rippleStartEvent);
            return;
        }
    }
    async handlePointerdown(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.rippleStartEvent = event;
        if (!this.isTouch(event)) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(event);
            return;
        }
        // after a longpress contextmenu event, an extra `pointerdown` can be
        // dispatched to the pressed element. Check that the down is within
        // bounds of the element in this case.
        if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
            return;
        }
        this.checkBoundsAfterContextMenu = false;
        // Wait for a hold after touch delay
        this.state = State.TOUCH_DELAY;
        await new Promise(resolve => {
            setTimeout(resolve, TOUCH_DELAY_MS);
        });
        if (this.state !== State.TOUCH_DELAY) {
            return;
        }
        this.state = State.HOLDING;
        this.startPressAnimation(event);
    }
    handleClick() {
        // Click is a MouseEvent in Firefox and Safari, so we cannot use
        // `shouldReactToEvent`
        if (this.disabled) {
            return;
        }
        if (this.state === State.WAITING_FOR_CLICK) {
            this.endPressAnimation();
            return;
        }
        if (this.state === State.INACTIVE) {
            // keyboard synthesized click event
            this.startPressAnimation();
            this.endPressAnimation();
        }
    }
    handlePointercancel(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.endPressAnimation();
    }
    handleContextmenu() {
        if (this.disabled) {
            return;
        }
        this.checkBoundsAfterContextMenu = true;
        this.endPressAnimation();
    }
    determineRippleSize() {
        const { height, width } = this.getBoundingClientRect();
        const maxDim = Math.max(height, width);
        const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
        const maxRadius = hypotenuse + PADDING;
        this.initialSize = initialSize;
        this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
        this.rippleSize = `${initialSize}px`;
    }
    getNormalizedPointerEventCoords(pointerEvent) {
        const { scrollX, scrollY } = window;
        const { left, top } = this.getBoundingClientRect();
        const documentX = scrollX + left;
        const documentY = scrollY + top;
        const { pageX, pageY } = pointerEvent;
        return { x: pageX - documentX, y: pageY - documentY };
    }
    getTranslationCoordinates(positionEvent) {
        const { height, width } = this.getBoundingClientRect();
        // end in the center
        const endPoint = {
            x: (width - this.initialSize) / 2,
            y: (height - this.initialSize) / 2,
        };
        let startPoint;
        if (positionEvent instanceof PointerEvent) {
            startPoint = this.getNormalizedPointerEventCoords(positionEvent);
        }
        else {
            startPoint = {
                x: width / 2,
                y: height / 2,
            };
        }
        // center around start point
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        return { startPoint, endPoint };
    }
    startPressAnimation(positionEvent) {
        if (!this.mdRoot) {
            return;
        }
        this.pressed = true;
        this.growAnimation?.cancel();
        this.determineRippleSize();
        const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
        const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
        const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
        this.growAnimation = this.mdRoot.animate({
            top: [0, 0],
            left: [0, 0],
            height: [this.rippleSize, this.rippleSize],
            width: [this.rippleSize, this.rippleSize],
            transform: [
                `translate(${translateStart}) scale(1)`,
                `translate(${translateEnd}) scale(${this.rippleScale})`
            ],
        }, {
            pseudoElement: PRESS_PSEUDO,
            duration: PRESS_GROW_MS,
            easing: EASING.STANDARD,
            fill: ANIMATION_FILL
        });
    }
    async endPressAnimation() {
        this.state = State.INACTIVE;
        const animation = this.growAnimation;
        const pressAnimationPlayState = animation?.currentTime ?? Infinity;
        if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
            this.pressed = false;
            return;
        }
        await new Promise(resolve => {
            setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
        });
        if (this.growAnimation !== animation) {
            // A new press animation was started. The old animation was canceled and
            // should not finish the pressed state.
            return;
        }
        this.pressed = false;
    }
    /**
     * Returns `true` if
     *  - the ripple element is enabled
     *  - the pointer is primary for the input type
     *  - the pointer is the pointer that started the interaction, or will start
     * the interaction
     *  - the pointer is a touch, or the pointer state has the primary button
     * held, or the pointer is hovering
     */
    shouldReactToEvent(event) {
        if (this.disabled || !event.isPrimary) {
            return false;
        }
        if (this.rippleStartEvent &&
            this.rippleStartEvent.pointerId !== event.pointerId) {
            return false;
        }
        if (event.type === 'pointerenter' || event.type === 'pointerleave') {
            return !this.isTouch(event);
        }
        const isPrimaryButton = event.buttons === 1;
        return this.isTouch(event) || isPrimaryButton;
    }
    /**
     * Check if the event is within the bounds of the element.
     *
     * This is only needed for the "stuck" contextmenu longpress on Chrome.
     */
    inBounds({ x, y }) {
        const { top, left, bottom, right } = this.getBoundingClientRect();
        return x >= left && x <= right && y >= top && y <= bottom;
    }
    isTouch({ pointerType }) {
        return pointerType === 'touch';
    }
    /** @private */
    async handleEvent(event) {
        switch (event.type) {
            case 'click':
                this.handleClick();
                break;
            case 'contextmenu':
                this.handleContextmenu();
                break;
            case 'pointercancel':
                this.handlePointercancel(event);
                break;
            case 'pointerdown':
                await this.handlePointerdown(event);
                break;
            case 'pointerenter':
                this.handlePointerenter(event);
                break;
            case 'pointerleave':
                this.handlePointerleave(event);
                break;
            case 'pointerup':
                this.handlePointerup(event);
                break;
        }
    }
    onControlChange(prev, next) {
        for (const event of EVENTS) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
}
__decorate([
    n$8({ type: Boolean, reflect: true })
], Ripple.prototype, "disabled", void 0);
__decorate([
    t$3()
], Ripple.prototype, "hovered", void 0);
__decorate([
    t$3()
], Ripple.prototype, "pressed", void 0);
__decorate([
    i$5('.surface')
], Ripple.prototype, "mdRoot", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$X = i$4 `:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media screen and (forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Ripples, also known as state layers, are visual indicators used to
 * communicate the status of a component or interactive element.
 *
 * @description A state layer is a semi-transparent covering on an element that
 * indicates its state. State layers provide a systematic approach to
 * visualizing states by using opacity. A layer can be applied to an entire
 * element or in a circular shape and only one state layer can be applied at a
 * given time.
 *
 * @final
 * @suppress {visibility}
 */
let MdRipple = class MdRipple extends Ripple {
};
MdRipple.styles = [styles$X];
MdRipple = __decorate([
    e$a('md-ripple')
], MdRipple);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Accessibility Object Model reflective aria properties.
 */
const ARIA_PROPERTIES = [
    'ariaAtomic',
    'ariaAutoComplete',
    'ariaBusy',
    'ariaChecked',
    'ariaColCount',
    'ariaColIndex',
    'ariaColSpan',
    'ariaCurrent',
    'ariaDisabled',
    'ariaExpanded',
    'ariaHasPopup',
    'ariaHidden',
    'ariaInvalid',
    'ariaKeyShortcuts',
    'ariaLabel',
    'ariaLevel',
    'ariaLive',
    'ariaModal',
    'ariaMultiLine',
    'ariaMultiSelectable',
    'ariaOrientation',
    'ariaPlaceholder',
    'ariaPosInSet',
    'ariaPressed',
    'ariaReadOnly',
    'ariaRequired',
    'ariaRoleDescription',
    'ariaRowCount',
    'ariaRowIndex',
    'ariaRowSpan',
    'ariaSelected',
    'ariaSetSize',
    'ariaSort',
    'ariaValueMax',
    'ariaValueMin',
    'ariaValueNow',
    'ariaValueText',
];
/**
 * Accessibility Object Model aria attributes.
 */
ARIA_PROPERTIES.map(ariaPropertyToAttribute);
/**
 * Converts an AOM aria property into its corresponding attribute.
 *
 * @example
 * ariaPropertyToAttribute('ariaLabel'); // 'aria-label'
 *
 * @param property The aria property.
 * @return The aria attribute.
 */
function ariaPropertyToAttribute(property) {
    return property
        .replace('aria', 'aria-')
        // IDREF attributes also include an "Element" or "Elements" suffix
        .replace(/Elements?/g, '')
        .toLowerCase();
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Sets up a `ReactiveElement` constructor to enable updates when delegating
 * aria attributes. Elements may bind `this.aria*` properties to `aria-*`
 * attributes in their render functions.
 *
 * This function will:
 * - Call `requestUpdate()` when an aria attribute changes.
 * - Add `role="presentation"` to the host.
 *
 * NOTE: The following features are not currently supported:
 * - Delegating IDREF attributes (ex: `aria-labelledby`, `aria-controls`)
 * - Delegating the `role` attribute
 *
 * @example
 * class XButton extends LitElement {
 *   static {
 *     requestUpdateOnAriaChange(this);
 *   }
 *
 *   protected override render() {
 *     return html`
 *       <button aria-label=${this.ariaLabel || nothing}>
 *         <slot></slot>
 *       </button>
 *     `;
 *   }
 * }
 *
 * @param ctor The `ReactiveElement` constructor to patch.
 */
function requestUpdateOnAriaChange(ctor) {
    for (const ariaProperty of ARIA_PROPERTIES) {
        ctor.createProperty(ariaProperty, {
            attribute: ariaPropertyToAttribute(ariaProperty),
            reflect: true,
        });
    }
    ctor.addInitializer(element => {
        const controller = {
            hostConnected() {
                element.setAttribute('role', 'presentation');
            }
        };
        element.addController(controller);
    });
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Re-dispatches an event from the provided element.
 *
 * This function is useful for forwarding non-composed events, such as `change`
 * events.
 *
 * @example
 * class MyInput extends LitElement {
 *   render() {
 *     return html`<input @change=${this.redispatchEvent}>`;
 *   }
 *
 *   protected redispatchEvent(event: Event) {
 *     redispatchEvent(this, event);
 *   }
 * }
 *
 * @param element The element to dispatch the event from.
 * @param event The event to re-dispatch.
 * @return Whether or not the event was dispatched (if cancelable).
 */
function redispatchEvent(element, event) {
    // For bubbling events in SSR light DOM (or composed), stop their propagation
    // and dispatch the copy.
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
        event.stopPropagation();
    }
    const copy = Reflect.construct(event.constructor, [event.type, event]);
    const dispatched = element.dispatchEvent(copy);
    if (!dispatched) {
        event.preventDefault();
    }
    return dispatched;
}
/**
 * Dispatches a click event to the given element that triggers a native action,
 * but is not composed and therefore is not seen outside the element.
 *
 * This is useful for responding to an external click event on the host element
 * that should trigger an internal action like a button click.
 *
 * Note, a helper is provided because setting this up correctly is a bit tricky.
 * In particular, calling `click` on an element creates a composed event, which
 * is not desirable, and a manually dispatched event must specifically be a
 * `MouseEvent` to trigger a native action.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function dispatchActivationClick(element) {
    const event = new MouseEvent('click', { bubbles: true });
    element.dispatchEvent(event);
    return event;
}
/**
 * Returns true if the click event should trigger an activation behavior. The
 * behavior is defined by the element and is whatever it should do when
 * clicked.
 *
 * Typically when an element needs to handle a click, the click is generated
 * from within the element and an event listener within the element implements
 * the needed behavior; however, it's possible to fire a click directly
 * at the element that the element should handle. This method helps
 * distinguish these "external" clicks.
 *
 * An "external" click can be triggered in a number of ways: via a click
 * on an associated label for a form  associated element, calling
 * `element.click()`, or calling
 * `element.dispatchEvent(new MouseEvent('click', ...))`.
 *
 * Also works around Firefox issue
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1804576 by squelching
 * events for a microtask after called.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function isActivationClick(event) {
    // Event must start at the event target.
    if (event.currentTarget !== event.target) {
        return false;
    }
    // Event must not be retargeted from shadowRoot.
    if (event.composedPath()[0] !== event.target) {
        return false;
    }
    // Target must not be disabled; this should only occur for a synthetically
    // dispatched click.
    if (event.target.disabled) {
        return false;
    }
    // This is an activation if the event should not be squelched.
    return !squelchEvent(event);
}
// TODO(https://bugzilla.mozilla.org/show_bug.cgi?id=1804576)
//  Remove when Firefox bug is addressed.
function squelchEvent(event) {
    const squelched = isSquelchingEvents;
    if (squelched) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    squelchEventsForMicrotask();
    return squelched;
}
// Ignore events for one microtask only.
let isSquelchingEvents = false;
async function squelchEventsForMicrotask() {
    isSquelchingEvents = true;
    // Need to pause for just one microtask.
    // tslint:disable-next-line
    await null;
    isSquelchingEvents = false;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$f;
/**
 * Tab component.
 */
class Tab extends s$2 {
    constructor() {
        super();
        /**
         * Styling variant to display, 'primary' or 'secondary' and can also
         * include `vertical`.
         * Defaults to `primary`.
         */
        this.variant = 'primary';
        /**
         * Whether or not the tab is `disabled`.
         */
        this.disabled = false;
        /**
         * Whether or not the tab is `selected`.
         **/
        this.selected = false;
        /**
         * Whether or not the tab is `focusable`.
         */
        this.focusable = false;
        /**
         * Whether or not the icon renders inline with label or stacked vertically.
         */
        this.inlineIcon = false;
        this.handleActivationClick = (event) => {
            if (!isActivationClick((event)) || !this.button) {
                return;
            }
            this.focus();
            dispatchActivationClick(this.button);
        };
        {
            this.addEventListener('click', this.handleActivationClick);
        }
    }
    focus() {
        this.button?.focus();
    }
    blur() {
        this.button?.blur();
    }
    render() {
        const contentClasses = {
            'inline-icon': this.inlineIcon,
        };
        return x `
      <button
        class="button"
        role="tab"
        .tabIndex=${this.focusable && !this.disabled ? 0 : -1}
        aria-selected=${this.selected ? 'true' : 'false'}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel || A}
      >
        <md-focus-ring inward></md-focus-ring>
        <md-elevation></md-elevation>
        <md-ripple ?disabled=${this.disabled}></md-ripple>
        <span class="touch"></span>
        <div class="content ${o$1(contentClasses)}">
          <slot name="icon"></slot>
          <span class="label">
            <slot></slot>
          </span>
          <div class="indicator"></div>
        </div>
      </button>`;
    }
    updated(changed) {
        if (changed.has('selected') && !this.disabled) {
            this.animateSelected();
        }
    }
    get tabs() {
        return this.parentElement;
    }
    animateSelected() {
        this.indicator.getAnimations().forEach(a => {
            a.cancel();
        });
        const frames = this.getKeyframes();
        if (frames !== null) {
            this.indicator.animate(frames, { duration: 400, easing: 'ease-out' });
        }
    }
    getKeyframes() {
        const reduceMotion = shouldReduceMotion();
        if (!this.selected) {
            return reduceMotion ? [{ 'opacity': 1 }, { 'transform': 'none' }] : null;
        }
        const from = {};
        const isVertical = this.variant.includes('vertical');
        const fromRect = (this.tabs?.previousSelectedItem?.indicator.getBoundingClientRect() ??
            {});
        const fromPos = isVertical ? fromRect.top : fromRect.left;
        const fromExtent = isVertical ? fromRect.height : fromRect.width;
        const toRect = this.indicator.getBoundingClientRect();
        const toPos = isVertical ? toRect.top : toRect.left;
        const toExtent = isVertical ? toRect.height : toRect.width;
        const axis = isVertical ? 'Y' : 'X';
        const scale = fromExtent / toExtent;
        if (!reduceMotion && fromPos !== undefined && toPos !== undefined &&
            !isNaN(scale)) {
            from['transform'] = `translate${axis}(${(fromPos - toPos).toFixed(4)}px) scale${axis}(${scale.toFixed(4)})`;
        }
        else {
            from['opacity'] = 0;
        }
        // note, including `transform: none` avoids quirky Safari behavior
        // that can hide the animation.
        return [from, { 'transform': 'none' }];
    }
}
_a$f = Tab;
(() => {
    requestUpdateOnAriaChange(_a$f);
})();
Tab.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    n$8({ reflect: true })
], Tab.prototype, "variant", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], Tab.prototype, "disabled", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], Tab.prototype, "selected", void 0);
__decorate([
    n$8({ type: Boolean })
], Tab.prototype, "focusable", void 0);
__decorate([
    n$8({ type: Boolean })
], Tab.prototype, "inlineIcon", void 0);
__decorate([
    i$5('.button')
], Tab.prototype, "button", void 0);
__decorate([
    i$5('.indicator')
], Tab.prototype, "indicator", void 0);
function shouldReduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$W = i$4 `:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_container-shape: var(--md-primary-tab-container-shape, 0px);--_divider-color: var(--md-primary-tab-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_divider-thickness: var(--md-primary-tab-divider-thickness, 1px);--_label-text-type: var(--md-primary-tab-label-text-type, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-focus-ring-shape: 8px}:host([selected]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;width:100%;position:relative;padding:0;margin:0;z-index:0;font:var(--_label-text-type);background-color:var(--_container-color);border-bottom:var(--_divider-thickness) solid var(--_divider-color);color:var(--_label-text-color)}.button::-moz-focus-inner{padding:0;border:0}.button,md-ripple{border-radius:var(--_container-shape)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;max-height:calc(var(--_container-height) + 16px);min-height:48px;padding:8px 16px;gap:4px}.content.inline-icon{flex-direction:row}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus{color:var(--_focus-label-text-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([selected]) .indicator{opacity:1}:host([selected]) .button{color:var(--_active-label-text-color);--md-elevation-level:var(--_container-elevation);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([selected]) .button ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([selected]) .button:hover{color:var(--_active-hover-label-text-color)}:host([selected]) .button:hover ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([selected]) .button:focus{color:var(--_active-focus-label-text-color)}:host([selected]) .button:focus ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([selected]) .button:active{color:var(--_active-pressed-label-text-color)}:host([selected]) .button:active ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host([disabled]){cursor:default;pointer-events:none;opacity:.38}:host([variant~=secondary]){--_active-indicator-color: var(--md-secondary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-secondary-tab-active-indicator-height, 2px);--_active-label-text-color: var(--md-secondary-tab-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color: var(--md-secondary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-secondary-tab-container-elevation, 0);--_container-height: var(--md-secondary-tab-container-height, 48px);--_container-shape: var(--md-secondary-tab-container-shape, 0px);--_focus-label-text-color: var(--md-secondary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-secondary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-secondary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-secondary-tab-hover-state-layer-opacity, 0.08);--_label-text-type: var(--md-secondary-tab-label-text-type, var(--md-sys-typescale-title-small, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-secondary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-secondary-tab-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-secondary-tab-pressed-state-layer-opacity, 0.12);--_divider-color: var(--md-secondary-tab-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_divider-thickness: var(--md-secondary-tab-divider-thickness, 1px);--_active-focus-icon-color: ;--_active-focus-label-text-color: var(--md-secondary-tab-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-icon-color: ;--_active-hover-label-text-color: var(--md-secondary-tab-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color: var(--md-secondary-tab-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-opacity: var(--md-secondary-tab-active-hover-state-layer-opacity, 0.08);--_active-icon-color: var(--md-secondary-tab-active-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_active-indicator-shape: var(--md-secondary-tab-active-indicator-shape, 0);--_active-pressed-icon-color: ;--_active-pressed-label-text-color: var(--md-secondary-tab-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color: var(--md-secondary-tab-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-opacity: var(--md-secondary-tab-active-pressed-state-layer-opacity, 0.12);--_label-text-color: var(--md-secondary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-secondary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-secondary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-size: var(--md-secondary-tab-icon-size, 24px);--_icon-color: var(--md-secondary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-secondary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([variant~=secondary]) .content{width:100%}:host([variant~=secondary]) .indicator{min-width:100%}:host([variant~=vertical]){flex:0}:host([variant~=vertical]) .button{width:100%;flex-direction:row;border-bottom:none;border-right:var(--_divider-thickness) solid var(--_divider-color)}:host([variant~=vertical]) .content{width:100%}:host([variant~=vertical]) .indicator{height:100%;min-width:var(--_active-indicator-height);inset:0 0 0 auto}:host([variant~=vertical][variant~=primary]){--_active-indicator-shape: 9999px 0 0 9999px}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){:host,:host([variant]){--_active-indicator-color: CanvasText}}/*# sourceMappingURL=tab-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO(b/267336507): add docs
/**
 * @summary Tab allow users to display a tab within a Tabs.
 *
 */
let MdTab = class MdTab extends Tab {
};
MdTab.styles = [styles$W];
MdTab = __decorate([
    e$a('md-tab')
], MdTab);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const NAVIGATION_KEYS = new Map([
    ['default', new Set(['Home', 'End'])],
    ['horizontal', new Set(['ArrowLeft', 'ArrowRight'])],
    ['vertical', new Set(['ArrowUp', 'ArrowDown'])]
]);
/**
 * @fires change Fired when the selected tab changes. The target's selected or
 * selectedItem and previousSelected or previousSelectedItem provide information
 * about the selection change. The change event is fired when a user interaction
 * like a space/enter key or click cause a selection change. The tab selection
 * based on these actions can be cancelled by calling preventDefault on the
 * triggering `keydown` or `click` event.
 *
 * @example
 * // perform an action if a tab is clicked
 * tabs.addEventListener('change', (event: Event) => {
 *   if (event.target.selected === 2)
 *      takeAction();
 *   }
 * });
 *
 * // prevent a click from triggering tab selection under some condition
 * tabs.addEventListener('click', (event: Event) => {
 *   if (notReady)
 *      event.preventDefault();
 *   }
 * });
 *
 */
class Tabs extends s$2 {
    /**
     * The item currently selected.
     */
    get selectedItem() {
        return this.items[this.selected];
    }
    /**
     * The item previously selected.
     */
    get previousSelectedItem() {
        return this.items[this.previousSelected];
    }
    /**
     * The item currently focused.
     */
    get focusedItem() {
        return this.items.find((e) => e.matches(':focus-within'));
    }
    constructor() {
        super();
        /**
         * Styling variant to display, 'primary' or 'secondary' and can also
         * include `vertical`.
         * Defaults to `primary`.
         */
        this.variant = 'primary';
        /**
         * Whether or not the item is `disabled`.
         */
        this.disabled = false;
        /**
         * Index of the selected item.
         */
        this.selected = 0;
        /**
         * Whether or not to select an item when focused.
         */
        this.selectOnFocus = false;
        this.previousSelected = -1;
        this.orientation = 'horizontal';
        this.scrollMargin = 48;
        // this tracks if items have changed, which triggers rendering so they can
        // be kept in sync
        this.itemsDirty = false;
        this.selectedAttribute = `selected`;
        // focus item on keydown and optionally select it
        this.handleKeydown = async (event) => {
            const { key } = event;
            const shouldHandleKey = NAVIGATION_KEYS.get('default').has(key) ||
                NAVIGATION_KEYS.get(this.orientation).has(key);
            // await to after user may cancel event.
            if (!shouldHandleKey || (await this.wasEventPrevented(event, true)) ||
                this.disabled) {
                return;
            }
            let indexToFocus = -1;
            const focused = this.focusedItem ?? this.selectedItem;
            const itemCount = this.items.length;
            const isPrevKey = key === 'ArrowLeft' || key === 'ArrowUp';
            if (key === 'Home') {
                indexToFocus = 0;
            }
            else if (key === 'End') {
                indexToFocus = itemCount - 1;
            }
            else {
                const focusedIndex = this.items.indexOf(focused) || 0;
                indexToFocus = focusedIndex + (isPrevKey ? -1 : 1);
                indexToFocus =
                    indexToFocus < 0 ? itemCount - 1 : indexToFocus % itemCount;
            }
            const itemToFocus = this.findFocusableItem(indexToFocus, key === 'End' || isPrevKey);
            indexToFocus = this.items.indexOf(itemToFocus);
            if (itemToFocus !== null && itemToFocus !== focused) {
                this.updateFocusableItem(itemToFocus);
                itemToFocus.focus();
                if (this.selectOnFocus) {
                    this.selected = indexToFocus;
                    await this.dispatchInteraction();
                }
            }
        };
        // scroll to item on keyup.
        this.handleKeyup = () => {
            this.scrollItemIntoView(this.focusedItem ?? this.selectedItem);
        };
        // restore focus to selected item when blurring.
        this.handleFocusout = async () => {
            await this.updateComplete;
            const nowFocused = this.getRootNode().activeElement;
            if (this.items.indexOf(nowFocused) === -1) {
                this.updateFocusableItem(this.selectedItem);
            }
        };
        {
            this.addEventListener('keydown', this.handleKeydown);
            this.addEventListener('keyup', this.handleKeyup);
            this.addEventListener('focusout', this.handleFocusout);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'tablist');
    }
    findFocusableItem(i = -1, prev = false, tries = 0) {
        const itemCount = this.items.length - 1;
        while (this.items[i]?.disabled && tries <= itemCount) {
            tries++;
            i = (i + (prev ? -1 : 1));
            if (i > itemCount) {
                return this.findFocusableItem(0, false, tries);
            }
            else if (i < 0) {
                return this.findFocusableItem(itemCount, true, tries);
            }
        }
        return this.items[i] ?? null;
    }
    // Note, this is async to allow the event to bubble to user code, which
    // may call `preventDefault`. If it does, avoid performing the tabs action
    // which is selecting a new tab. Sometimes, the native event must be
    // prevented to avoid, for example, scrolling. In this case, the event is
    // patched to be able to detect if the user calls prevent default.
    // Alternatively, the event could be stopped and re-dispatched synchroously,
    // but this would be complicated since the event should be re-dispatched from
    // the initial element to potentially trigger a native action (e.g. a history
    // navigation via a tab label), and this could result in some listener hearing
    // 2x events.
    async wasEventPrevented(event, preventNativeDefault = false) {
        if (preventNativeDefault) {
            // prevent native default to stop, e.g. scrolling.
            event.preventDefault();
            // reset prevention to see if user is cancelling this action.
            Object.defineProperties(event, {
                'defaultPrevented': { value: false, writable: true, configurable: true },
                'preventDefault': {
                    value() {
                        this.defaultPrevented = true;
                    },
                    writable: true,
                    configurable: true
                }
            });
        }
        // allow event to propagate to user code.
        await new Promise(requestAnimationFrame);
        return event.defaultPrevented;
    }
    async dispatchInteraction() {
        // wait for items to render.
        await new Promise(requestAnimationFrame);
        const event = new Event('change', { bubbles: true });
        this.dispatchEvent(event);
    }
    willUpdate(changed) {
        if (changed.has('selected')) {
            this.previousSelected = changed.get('selected') ?? -1;
        }
        if (changed.has('variant')) {
            this.orientation =
                this.variant.includes('vertical') ? 'vertical' : 'horizontal';
        }
        if (this.itemsDirty) {
            this.itemsDirty = false;
            this.previousSelected = -1;
        }
    }
    async updated(changed) {
        const itemsOrVariantChanged = changed.has('itemsDirty') || changed.has('variant');
        // sync state with items.
        if (itemsOrVariantChanged || changed.has('disabled')) {
            this.items.forEach((item, i) => {
                item.selected = this.selected === i;
                item.variant = this.variant;
                item.disabled = this.disabled;
            });
        }
        if (itemsOrVariantChanged || changed.has('selected')) {
            if (this.previousSelectedItem !== this.selectedItem) {
                this.previousSelectedItem?.removeAttribute(this.selectedAttribute);
                this.selectedItem?.setAttribute(this.selectedAttribute, '');
            }
            if (this.selectedItem !== this.focusedItem) {
                this.updateFocusableItem(this.selectedItem);
            }
            await this.scrollItemIntoView();
        }
    }
    updateFocusableItem(focusableItem) {
        for (const item of this.items) {
            item.focusable = item === focusableItem;
        }
    }
    render() {
        return x `
      <slot @slotchange=${this.handleSlotChange} @click=${this.handleItemClick}></slot>  
    `;
    }
    async handleItemClick(event) {
        const { target } = event;
        if (await this.wasEventPrevented(event)) {
            return;
        }
        const item = target.closest(`${this.localName} > *`);
        const i = this.items.indexOf(item);
        if (i > -1 && this.selected !== i) {
            this.selected = i;
            this.updateFocusableItem(this.selectedItem);
            // note, Safari will not focus the button here, but if focus is manually
            // triggered, this can match focus-visible and show the focus-ring,
            // so avoid the temptation to cal focus!
            await this.dispatchInteraction();
        }
    }
    handleSlotChange() {
        this.itemsDirty = true;
    }
    async itemsUpdateComplete() {
        for (const item of this.items) {
            await item.updateComplete;
        }
        return true;
    }
    // ensures the given item is visible in view; defaults to the selected item
    async scrollItemIntoView(item = this.selectedItem) {
        if (!item) {
            return;
        }
        // wait for items to render.
        await this.itemsUpdateComplete();
        const isVertical = this.orientation === 'vertical';
        const offset = isVertical ? item.offsetTop : item.offsetLeft;
        const extent = isVertical ? item.offsetHeight : item.offsetWidth;
        const scroll = isVertical ? this.scrollTop : this.scrollLeft;
        const hostExtent = isVertical ? this.offsetHeight : this.offsetWidth;
        const min = offset - this.scrollMargin;
        const max = offset + extent - hostExtent + this.scrollMargin;
        const to = Math.min(min, Math.max(max, scroll));
        const behavior = 
        // type annotation because `instant` is valid but not included in type.
        this.focusedItem !== undefined ? 'smooth' : 'instant';
        this.scrollTo({
            behavior,
            [isVertical ? 'left' : 'top']: 0,
            [isVertical ? 'top' : 'left']: to
        });
    }
}
Tabs.shadowRootOptions = {
    ...s$2.shadowRootOptions,
    delegatesFocus: true
};
__decorate([
    n$8({ reflect: true })
], Tabs.prototype, "variant", void 0);
__decorate([
    n$8({ type: Boolean })
], Tabs.prototype, "disabled", void 0);
__decorate([
    n$8({ type: Number })
], Tabs.prototype, "selected", void 0);
__decorate([
    n$8({ type: Boolean })
], Tabs.prototype, "selectOnFocus", void 0);
__decorate([
    l$5({ selector: 'md-tab', flatten: true })
], Tabs.prototype, "items", void 0);
__decorate([
    t$3()
], Tabs.prototype, "itemsDirty", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$V = i$4 `:host{box-sizing:border-box;display:flex;justify-content:space-between;align-items:end;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host([variant~=vertical]:not([hidden])){display:inline-flex;flex-direction:column;align-items:stretch;gap:0px}:host::-webkit-scrollbar{display:none}::slotted(*){flex:1}::slotted([selected]){z-index:1}/*# sourceMappingURL=tabs-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO(b/267336507): add docs
/**
 * @summary Tabs displays a list of selectable tabs.
 *
 */
let MdTabs = class MdTabs extends Tabs {
};
MdTabs.styles = [styles$V];
MdTabs = __decorate([
    e$a('md-tabs')
], MdTabs);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$U = i$4 `@media(forced-colors: active){:host{--md-radio-disabled-selected-icon-color: GrayText;--md-radio-disabled-selected-icon-opacity: 1;--md-radio-disabled-unselected-icon-color: GrayText;--md-radio-disabled-unselected-icon-opacity: 1;--md-radio-selected-icon-color: CanvasText;--md-radio-selected-hover-icon-color: CanvasText;--md-radio-selected-focus-icon-color: CanvasText;--md-radio-selected-pressed-icon-color: CanvasText;--md-radio-unselected-icon-color: CanvasText;--md-radio-unselected-hover-icon-color: CanvasText;--md-radio-unselected-focus-icon-color: CanvasText;--md-radio-unselected-pressed-icon-color: CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A `ReactiveController` that provides root node-scoped single selection for
 * elements, similar to native `<input type="radio">` selection.
 *
 * To use, elements should add the controller and call
 * `selectionController.handleCheckedChange()` in a getter/setter. This must
 * be synchronous to match native behavior.
 *
 * @example
 * const CHECKED = Symbol('checked');
 *
 * class MyToggle extends LitElement {
 *   get checked() { return this[CHECKED]; }
 *   set checked(checked: boolean) {
 *     const oldValue = this.checked;
 *     if (oldValue === checked) {
 *       return;
 *     }
 *
 *     this[CHECKED] = checked;
 *     this.selectionController.handleCheckedChange();
 *     this.requestUpdate('checked', oldValue);
 *   }
 *
 *   [CHECKED] = false;
 *
 *   private selectionController = new SingleSelectionController(this);
 *
 *   constructor() {
 *     super();
 *     this.addController(this.selectionController);
 *   }
 * }
 */
class SingleSelectionController {
    constructor(host) {
        this.host = host;
        this.focused = false;
        this.root = null;
        this.handleFocusIn = () => {
            this.focused = true;
            this.updateTabIndices();
        };
        this.handleFocusOut = () => {
            this.focused = false;
            this.updateTabIndices();
        };
        /**
         * Handles arrow key events from the host. Using the arrow keys will
         * select and check the next or previous sibling with the host's
         * `name` attribute.
         */
        this.handleKeyDown = (event) => {
            const isDown = event.key === 'ArrowDown';
            const isUp = event.key === 'ArrowUp';
            const isLeft = event.key === 'ArrowLeft';
            const isRight = event.key === 'ArrowRight';
            // Ignore non-arrow keys
            if (!isLeft && !isRight && !isDown && !isUp) {
                return;
            }
            // Don't try to select another sibling if there aren't any.
            const siblings = this.getNamedSiblings();
            if (!siblings.length) {
                return;
            }
            // Prevent default interactions on the element for arrow keys,
            // since this controller will introduce new behavior.
            event.preventDefault();
            // Check if moving forwards or backwards
            const isRtl = getComputedStyle(this.host).direction === 'rtl';
            const forwards = isRtl ? isLeft || isDown : isRight || isDown;
            const hostIndex = siblings.indexOf(this.host);
            let nextIndex = forwards ? hostIndex + 1 : hostIndex - 1;
            // Search for the next sibling that is not disabled to select.
            // If we return to the host index, there is nothing to select.
            while (nextIndex !== hostIndex) {
                if (nextIndex >= siblings.length) {
                    // Return to start if moving past the last item.
                    nextIndex = 0;
                }
                else if (nextIndex < 0) {
                    // Go to end if moving before the first item.
                    nextIndex = siblings.length - 1;
                }
                // Check if the next sibling is disabled. If so,
                // move the index and continue searching.
                const nextSibling = siblings[nextIndex];
                if (nextSibling.hasAttribute('disabled')) {
                    if (forwards) {
                        nextIndex++;
                    }
                    else {
                        nextIndex--;
                    }
                    continue;
                }
                // Uncheck and remove focusability from other siblings.
                for (const sibling of siblings) {
                    if (sibling !== nextSibling) {
                        sibling.checked = false;
                        sibling.tabIndex = -1;
                    }
                }
                // The next sibling should be checked and focused.
                nextSibling.checked = true;
                nextSibling.removeAttribute('tabindex');
                nextSibling.focus();
                break;
            }
        };
    }
    hostConnected() {
        this.root = this.host.getRootNode();
        this.host.addEventListener('keydown', this.handleKeyDown);
        this.host.addEventListener('focusin', this.handleFocusIn);
        this.host.addEventListener('focusout', this.handleFocusOut);
        if (this.host.checked) {
            // Uncheck other siblings when attached if already checked. This mimics
            // native <input type="radio"> behavior.
            this.uncheckSiblings();
        }
        // Update for the newly added host.
        this.updateTabIndices();
    }
    hostDisconnected() {
        this.host.removeEventListener('keydown', this.handleKeyDown);
        this.host.removeEventListener('focusin', this.handleFocusIn);
        this.host.removeEventListener('focusout', this.handleFocusOut);
        // Update for siblings that are still connected.
        this.updateTabIndices();
        this.root = null;
    }
    /**
     * Should be called whenever the host's `checked` property changes
     * synchronously.
     */
    handleCheckedChange() {
        if (!this.host.checked) {
            return;
        }
        this.uncheckSiblings();
        this.updateTabIndices();
    }
    uncheckSiblings() {
        for (const sibling of this.getNamedSiblings()) {
            if (sibling !== this.host) {
                sibling.checked = false;
            }
        }
    }
    /**
     * Updates the `tabindex` of the host and its siblings.
     */
    updateTabIndices() {
        // There are three tabindex states for a group of elements:
        // 1. If any are checked, that element is focusable.
        const siblings = this.getNamedSiblings();
        const checkedSibling = siblings.find(sibling => sibling.checked);
        // 2. If an element is focused, the others are no longer focusable.
        if (checkedSibling || this.focused) {
            const focusable = checkedSibling || this.host;
            focusable.removeAttribute('tabindex');
            for (const sibling of siblings) {
                if (sibling !== focusable) {
                    sibling.tabIndex = -1;
                }
            }
            return;
        }
        // 3. If none are checked or focused, all are focusable.
        for (const sibling of siblings) {
            sibling.removeAttribute('tabindex');
        }
    }
    /**
     * Retrieves all siblings in the host element's root with the same `name`
     * attribute.
     */
    getNamedSiblings() {
        const name = this.host.getAttribute('name');
        if (!name || !this.root) {
            return [];
        }
        return Array.from(this.root.querySelectorAll(`[name="${name}"]`));
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$e, _b;
const CHECKED = Symbol('checked');
/**
 * A radio component.
 */
class Radio extends s$2 {
    /**
     * Whether or not the radio is selected.
     */
    get checked() {
        return this[CHECKED];
    }
    set checked(checked) {
        const wasChecked = this.checked;
        if (wasChecked === checked) {
            return;
        }
        this[CHECKED] = checked;
        const state = String(checked);
        this.internals.setFormValue(this.checked ? this.value : null, state);
        this.requestUpdate('checked', wasChecked);
        this.selectionController.handleCheckedChange();
    }
    /**
     * The HTML name to use in form submission.
     */
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.internals.form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this.internals.labels;
    }
    constructor() {
        super();
        this[_b] = false;
        /**
         * Whether or not the radio is disabled.
         */
        this.disabled = false;
        /**
         * The element value to use in form submission when checked.
         */
        this.value = 'on';
        this.selectionController = new SingleSelectionController(this);
        this.internals = this /* needed for closure */.attachInternals();
        this.addController(this.selectionController);
        {
            this.addEventListener('click', (event) => {
                if (!isActivationClick(event)) {
                    return;
                }
                this.focus();
                dispatchActivationClick(this.input);
            });
        }
    }
    focus() {
        this.input?.focus();
    }
    render() {
        const classes = { checked: this.checked };
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <div class=${o$1(classes)}>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring for="input"></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="cutout">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle class="outer circle" cx="10" cy="10" r="10" mask="url(#cutout)" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>
        <input
          id="input"
          type="radio"
          name=${this.name}
          aria-label=${ariaLabel || A}
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        >
      </div>
    `;
    }
    handleChange(event) {
        if (this.disabled) {
            return;
        }
        // Per spec, the change event on a radio input always represents checked.
        this.checked = true;
        redispatchEvent(this, event);
    }
    /** @private */
    formResetCallback() {
        // The checked property does not reflect, so the original attribute set by
        // the user is used to determine the default value.
        this.checked = this.hasAttribute('checked');
    }
    /** @private */
    formStateRestoreCallback(state) {
        this.checked = state === 'true';
    }
}
_a$e = Radio, _b = CHECKED;
(() => {
    requestUpdateOnAriaChange(_a$e);
})();
Radio.shadowRootOptions = { ...s$2.shadowRootOptions, delegatesFocus: true };
/** @nocollapse */
Radio.formAssociated = true;
__decorate([
    n$8({ type: Boolean })
], Radio.prototype, "checked", null);
__decorate([
    n$8({ type: Boolean, reflect: true })
], Radio.prototype, "disabled", void 0);
__decorate([
    n$8()
], Radio.prototype, "value", void 0);
__decorate([
    i$5('input')
], Radio.prototype, "input", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$T = i$4 `:host{--_disabled-selected-icon-color: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-icon-opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);--_icon-size: var(--md-radio-icon-size, 20px);--_selected-focus-icon-color: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-radio-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-radio-unselected-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-hover-icon-color: var(--md-radio-unselected-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-hover-state-layer-color: var(--md-radio-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-hover-state-layer-opacity: var(--md-radio-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-radio-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-radio-unselected-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-pressed-state-layer-color: var(--md-radio-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-pressed-state-layer-opacity: var(--md-radio-unselected-pressed-state-layer-opacity, 0.12);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity);--md-focus-ring-outward-offset: -2px;display:inline-flex;height:48px;position:relative;vertical-align:top;width:48px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.checked{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}input,.icon{inset:0;margin:auto;position:absolute}input{appearance:none;outline:none}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}.icon{fill:var(--_unselected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--_selected-icon-color)}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--_unselected-hover-icon-color)}:host(:focus-within) .icon{fill:var(--_unselected-focus-icon-color)}:host(:active) .icon{fill:var(--_unselected-pressed-icon-color)}:host([disabled]) .icon{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}:host(:hover) .checked .icon{fill:var(--_selected-hover-icon-color)}:host(:focus-within) .checked .icon{fill:var(--_selected-focus-icon-color)}:host(:active) .checked .icon{fill:var(--_selected-pressed-icon-color)}:host([disabled]) .checked .icon{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=radio-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Radio buttons allow users to select one option from a set.
 *
 * @description
 * Radio buttons are the recommended way to allow users to make a single
 * selection from a list of options.
 *
 * Only one radio button can be selected at a time.
 *
 * Use radio buttons to:
 * - Select a single option from a set
 * - Expose all available options
 *
 * @final
 * @suppress {visibility}
 */
let MdRadio = class MdRadio extends Radio {
};
MdRadio.styles = [styles$T, styles$U];
MdRadio = __decorate([
    e$a('md-radio')
], MdRadio);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$S = i$4 `.elevated{--md-elevation-level:var(--_elevated-container-elevation);--md-elevation-shadow-color:var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level:var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level:var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level:var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level:var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}/*# sourceMappingURL=elevated-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$d;
/**
 * A chip component.
 */
class Chip extends s$2 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.label = '';
    }
    /**
     * Whether or not the primary ripple is disabled (defaults to `disabled`).
     * Some chip actions such as links cannot be disabled.
     */
    get rippleDisabled() {
        return this.disabled;
    }
    render() {
        return x `
      <div class="container ${o$1(this.getContainerClasses())}">
        ${this.renderOutline()}
        <md-focus-ring for=${this.primaryId}></md-focus-ring>
        <md-ripple for=${this.primaryId}
          ?disabled=${this.rippleDisabled}></md-ripple>
        ${this.renderPrimaryAction()}
        ${this.renderTrailingAction?.() || A}
      </div>
    `;
    }
    getContainerClasses() {
        return {
            disabled: this.disabled,
        };
    }
    renderContent() {
        return x `
      <span class="leading icon">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">${this.label}</span>
      <span class="touch"></span>
    `;
    }
    renderOutline() {
        return x `<span class="outline"></span>`;
    }
    renderLeadingIcon() {
        return x `<slot name="icon"></slot>`;
    }
}
_a$d = Chip;
(() => {
    requestUpdateOnAriaChange(_a$d);
})();
__decorate([
    n$8({ type: Boolean })
], Chip.prototype, "disabled", void 0);
__decorate([
    n$8()
], Chip.prototype, "label", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @protected */
function renderRemoveButton({ disabled }) {
    return x `
    <button class="trailing action"
      ?disabled=${disabled ?? false}
      @click=${handleRemoveClick}
    >
      <md-focus-ring></md-focus-ring>
      <md-ripple></md-ripple>
      <svg class="trailing icon" viewBox="0 96 960 960">
        <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
      </svg>
      <span class="touch"></span>
    </button>
  `;
}
function handleRemoveClick(event) {
    if (this.disabled) {
        return;
    }
    event.stopPropagation();
    const preventDefault = !this.dispatchEvent(new Event('remove'));
    if (preventDefault) {
        return;
    }
    this.remove();
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filter chip component.
 */
class FilterChip extends Chip {
    get primaryId() {
        return 'option';
    }
    constructor() {
        super();
        this.elevated = false;
        this.removable = false;
        this.selected = false;
        this.addEventListener('click', () => {
            if (this.disabled) {
                return;
            }
            this.selected = !this.selected;
        });
    }
    updated(changedProperties) {
        if (changedProperties.has('selected') &&
            changedProperties.get('selected') !== undefined) {
            // Dispatch when `selected` changes, except for the first update.
            this.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }
    getContainerClasses() {
        return {
            ...super.getContainerClasses(),
            elevated: this.elevated,
            selected: this.selected,
        };
    }
    renderPrimaryAction() {
        const { ariaLabel } = this;
        return x `
      <button class="primary action"
        id="option"
        aria-label=${ariaLabel || A}
        aria-selected=${this.selected}
        ?disabled=${this.disabled || A}
        role="option"
      >${this.renderContent()}</button>
    `;
    }
    renderLeadingIcon() {
        if (!this.selected) {
            return super.renderLeadingIcon();
        }
        return b `
      <svg class="checkmark" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z" />
      </svg>
    `;
    }
    renderTrailingAction() {
        if (this.removable) {
            return renderRemoveButton({ disabled: this.disabled });
        }
        return A;
    }
    renderOutline() {
        if (this.elevated) {
            return x `<md-elevation></md-elevation>`;
        }
        return super.renderOutline();
    }
}
__decorate([
    n$8({ type: Boolean })
], FilterChip.prototype, "elevated", void 0);
__decorate([
    n$8({ type: Boolean })
], FilterChip.prototype, "removable", void 0);
__decorate([
    n$8({ type: Boolean })
], FilterChip.prototype, "selected", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$R = i$4 `:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_container-shape: var(--md-filter-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-type: var(--md-filter-chip-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var( --md-filter-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filter-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filter-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filter-chip-container-shape-end-start, var(--_container-shape) )}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}/*# sourceMappingURL=filter-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$Q = i$4 `.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected::before{background:var(--_selected-container-color)}.selected .outline{border-width:var(--_selected-outline-width)}.selected.disabled::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}.selected .label{color:var(--_selected-label-text-color)}.selected:hover .label{color:var(--_selected-hover-label-text-color)}.selected:focus .label{color:var(--_selected-focus-label-text-color)}.selected:active .label{color:var(--_selected-pressed-label-text-color)}.selected .leading.icon{color:var(--_selected-leading-icon-color)}.selected:hover .leading.icon{color:var(--_selected-hover-leading-icon-color)}.selected:focus .leading.icon{color:var(--_selected-focus-leading-icon-color)}.selected:active .leading.icon{color:var(--_selected-pressed-leading-icon-color)}/*# sourceMappingURL=selectable-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$P = i$4 `:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;gap:8px;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:8px;padding-inline-end:16px}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:focus .outline{border-color:var(--_focus-outline-color)}.disabled .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font:var(--_label-text-type);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:hover .label{color:var(--_hover-label-text-color)}:focus .label{color:var(--_focus-label-text-color)}:active .label{color:var(--_pressed-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}:hover .leading.icon{color:var(--_hover-leading-icon-color)}:focus .leading.icon{color:var(--_focus-leading-icon-color)}:active .leading.icon{color:var(--_pressed-leading-icon-color)}.disabled .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$O = i$4 `.trailing.action{display:flex;padding:0 8px;--md-focus-ring-shape-start-start: var(--_container-shape-start-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-outward-offset: -2px}.trailing.action md-ripple{border-radius:50%;height:calc(1.3333333333*var(--_icon-size));inset:50% 0 0 50%;transform:translateX(-50%) translateY(-50%);width:calc(1.3333333333*var(--_icon-size))}:has(.trailing.action) .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:hover .trailing.icon{color:var(--_hover-trailing-icon-color)}:focus .trailing.icon{color:var(--_focus-trailing-icon-color)}:active .trailing.icon{color:var(--_pressed-trailing-icon-color)}.disabled .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}.selected .trailing.icon{color:var(--_selected-trailing-icon-color)}.selected:hover .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}.selected:focus .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}.selected:active .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}/*# sourceMappingURL=trailing-icon-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdFilterChip = class MdFilterChip extends FilterChip {
};
MdFilterChip.styles = [
    styles$P, styles$S, styles$O, styles$Q, styles$R
];
MdFilterChip = __decorate([
    e$a('md-filter-chip')
], MdFilterChip);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An assist chip component.
 */
class AssistChip extends Chip {
    constructor() {
        super(...arguments);
        this.elevated = false;
        this.href = '';
        this.target = '';
    }
    get primaryId() {
        return this.href ? 'link' : 'button';
    }
    get rippleDisabled() {
        // Link chips cannot be disabled
        return !this.href && this.disabled;
    }
    getContainerClasses() {
        return {
            ...super.getContainerClasses(),
            // Link chips cannot be disabled
            disabled: !this.href && this.disabled,
            elevated: this.elevated,
        };
    }
    renderPrimaryAction() {
        const { ariaLabel } = this;
        if (this.href) {
            return x `
        <a class="primary action"
          id="link"
          aria-label=${ariaLabel || A}
          href=${this.href}
          target=${this.target || A}
        >${this.renderContent()}</a>
      `;
        }
        return x `
      <button class="primary action"
        id="button"
        aria-label=${ariaLabel || A}
        ?disabled=${this.disabled}
        type="button"
      >${this.renderContent()}</button>
    `;
    }
    renderOutline() {
        if (this.elevated) {
            return x `<md-elevation></md-elevation>`;
        }
        return super.renderOutline();
    }
}
__decorate([
    n$8({ type: Boolean })
], AssistChip.prototype, "elevated", void 0);
__decorate([
    n$8()
], AssistChip.prototype, "href", void 0);
__decorate([
    n$8()
], AssistChip.prototype, "target", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$N = i$4 `:host{--_container-height: var(--md-assist-chip-container-height, 32px);--_container-shape: var(--md-assist-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-type: var(--md-assist-chip-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color: var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var( --md-assist-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-assist-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-assist-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-assist-chip-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=assist-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdAssistChip = class MdAssistChip extends AssistChip {
};
MdAssistChip.styles = [styles$P, styles$S, styles$N];
MdAssistChip = __decorate([
    e$a('md-assist-chip')
], MdAssistChip);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A suggestion chip component.
 */
class SuggestionChip extends AssistChip {
}
// Note: assist and suggestion chips are functionally identical with different
// tokens.

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$M = i$4 `:host{--_container-height: var(--md-suggestion-chip-container-height, 32px);--_container-shape: var(--md-suggestion-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-suggestion-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-suggestion-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-suggestion-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-suggestion-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-suggestion-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-suggestion-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-suggestion-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-suggestion-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-suggestion-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-suggestion-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-suggestion-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-suggestion-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-suggestion-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-suggestion-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-suggestion-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-suggestion-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-type: var(--md-suggestion-chip-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-suggestion-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-suggestion-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-suggestion-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-suggestion-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-suggestion-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-suggestion-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-suggestion-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-suggestion-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-suggestion-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-suggestion-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-suggestion-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-suggestion-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-suggestion-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-suggestion-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-suggestion-chip-icon-size, 18px);--_container-shape-start-start: var( --md-suggestion-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-suggestion-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-suggestion-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-suggestion-chip-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=suggestion-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdSuggestionChip = class MdSuggestionChip extends SuggestionChip {
};
MdSuggestionChip.styles = [styles$P, styles$S, styles$M];
MdSuggestionChip = __decorate([
    e$a('md-suggestion-chip')
], MdSuggestionChip);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An input chip component.
 */
class InputChip extends Chip {
    constructor() {
        super(...arguments);
        this.avatar = false;
        this.href = '';
        this.target = '';
        this.removeOnly = false;
        this.selected = false;
    }
    get primaryId() {
        if (this.href) {
            return 'link';
        }
        if (this.removeOnly) {
            return '';
        }
        return 'button';
    }
    get rippleDisabled() {
        // Link chips cannot be disabled
        return !this.href && this.disabled;
    }
    getContainerClasses() {
        return {
            ...super.getContainerClasses(),
            avatar: this.avatar,
            // Link chips cannot be disabled
            disabled: !this.href && this.disabled,
            selected: this.selected,
        };
    }
    renderPrimaryAction() {
        const { ariaLabel } = this;
        if (this.href) {
            return x `
        <a class="primary action"
          id="link"
          aria-label=${ariaLabel || A}
          href=${this.href}
          target=${this.target || A}
        >${this.renderContent()}</a>
      `;
        }
        if (this.removeOnly) {
            return x `
        <span class="primary action" aria-label=${ariaLabel || A}>
          ${this.renderContent()}
        </span>
      `;
        }
        return x `
      <button class="primary action"
        id="button"
        aria-label=${ariaLabel || A}
        ?disabled=${this.disabled}
        type="button"
      >${this.renderContent()}</button>
    `;
    }
    renderTrailingAction() {
        return renderRemoveButton({ disabled: this.disabled });
    }
}
__decorate([
    n$8({ type: Boolean })
], InputChip.prototype, "avatar", void 0);
__decorate([
    n$8()
], InputChip.prototype, "href", void 0);
__decorate([
    n$8()
], InputChip.prototype, "target", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'remove-only' })
], InputChip.prototype, "removeOnly", void 0);
__decorate([
    n$8({ type: Boolean })
], InputChip.prototype, "selected", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$L = i$4 `:host{--_container-height: var(--md-input-chip-container-height, 32px);--_container-shape: var(--md-input-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color: var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-type: var(--md-input-chip-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_selected-container-color: var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color: var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width: var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color: var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity: var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color: var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape: var(--md-input-chip-avatar-shape, 9999px);--_avatar-size: var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color: var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size: var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color: var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color: var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color: var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color: var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-input-chip-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-leading-icon-color: var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var( --md-input-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-input-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-input-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-input-chip-container-shape-end-start, var(--_container-shape) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}/*# sourceMappingURL=input-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdInputChip = class MdInputChip extends InputChip {
};
MdInputChip.styles = [styles$P, styles$O, styles$Q, styles$L];
MdInputChip = __decorate([
    e$a('md-input-chip')
], MdInputChip);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$c;
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class SharedFab extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * The size of the FAB.
         *
         * NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not
         * have different sizes.
         */
        this.size = 'medium';
        /**
         * The text to display on the FAB.
         */
        this.label = '';
        /**
         * Lowers the FAB's elevation.
         */
        this.lowered = false;
        /**
         * Lowers the FAB's elevation and places it into the `lowered` state.
         */
        this.reducedTouchTarget = false;
    }
    render() {
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <button
        class="fab ${o$1(this.getRenderClasses())}"
        aria-label=${ariaLabel || A}
      >
        <md-elevation></md-elevation>
        <md-focus-ring></md-focus-ring>
        <md-ripple class="ripple"></md-ripple>
        ${this.renderTouchTarget()}
        ${this.renderIcon()}
        ${this.renderLabel()}
      </button>
    `;
    }
    getRenderClasses() {
        const isExtended = !!this.label;
        return {
            'lowered': this.lowered,
            'small': this.size === 'small' && !isExtended,
            'large': this.size === 'large' && !isExtended,
            'extended': isExtended,
        };
    }
    renderTouchTarget() {
        return this.reducedTouchTarget ? x `` :
            x `<div class="touch-target"></div>`;
    }
    renderLabel() {
        return this.label ? x `<span class="label">${this.label}</span>` : '';
    }
    renderIcon() {
        return x `<span class="icon">
        <slot name="icon"></slot>
      </span>`;
    }
}
_a$c = SharedFab;
(() => {
    requestUpdateOnAriaChange(_a$c);
})();
SharedFab.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
__decorate([
    n$8()
], SharedFab.prototype, "size", void 0);
__decorate([
    n$8()
], SharedFab.prototype, "label", void 0);
__decorate([
    n$8({ type: Boolean })
], SharedFab.prototype, "lowered", void 0);
__decorate([
    n$8({ type: Boolean })
], SharedFab.prototype, "reducedTouchTarget", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class Fab extends SharedFab {
    constructor() {
        super(...arguments);
        /**
         * The FAB color variant to render.
         */
        this.variant = 'surface';
    }
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'primary': this.variant === 'primary',
            'secondary': this.variant === 'secondary',
            'tertiary': this.variant === 'tertiary',
        };
    }
}
__decorate([
    n$8()
], Fab.prototype, "variant", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$K = i$4 `:host{--_container-color: var(--md-fab-branded-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation: var(--md-fab-branded-container-elevation, 3);--_container-height: var(--md-fab-branded-container-height, 56px);--_container-shadow-color: var(--md-fab-branded-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-fab-branded-container-shape, 16px);--_container-width: var(--md-fab-branded-container-width, 56px);--_focus-container-elevation: var(--md-fab-branded-focus-container-elevation, 3);--_hover-container-elevation: var(--md-fab-branded-hover-container-elevation, 4);--_hover-state-layer-color: var(--md-fab-branded-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-fab-branded-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-fab-branded-icon-size, 36px);--_lowered-container-color: var(--md-fab-branded-lowered-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_lowered-container-elevation: var(--md-fab-branded-lowered-container-elevation, 1);--_lowered-focus-container-elevation: var(--md-fab-branded-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation: var(--md-fab-branded-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation: var(--md-fab-branded-lowered-pressed-container-elevation, 1);--_pressed-container-elevation: var(--md-fab-branded-pressed-container-elevation, 3);--_pressed-state-layer-color: var(--md-fab-branded-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-fab-branded-pressed-state-layer-opacity, 0.12);--_focus-label-text-color: var(--md-fab-branded-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-fab-branded-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-color: var(--md-fab-branded-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-type: var(--md-fab-branded-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_large-container-height: var(--md-fab-branded-large-container-height, 96px);--_large-container-shape: var(--md-fab-branded-large-container-shape, 28px);--_large-container-width: var(--md-fab-branded-large-container-width, 96px);--_large-icon-size: var(--md-fab-branded-large-icon-size, 48px);--_pressed-label-text-color: var(--md-fab-branded-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var( --md-fab-branded-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-fab-branded-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-fab-branded-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-fab-branded-container-shape-end-start, var(--_container-shape) );--_large-container-shape-start-start: var( --md-fab-branded-large-container-shape-start-start, var(--_large-container-shape) );--_large-container-shape-start-end: var( --md-fab-branded-large-container-shape-start-end, var(--_large-container-shape) );--_large-container-shape-end-end: var( --md-fab-branded-large-container-shape-end-end, var(--_large-container-shape) );--_large-container-shape-end-start: var( --md-fab-branded-large-container-shape-end-start, var(--_large-container-shape) )}/*# sourceMappingURL=fab-branded-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$J = i$4 `@media(forced-colors: active){.fab{--md-focus-ring-outward-offset: 3px;border:1px solid ButtonText}.fab.extended{padding-inline-start:15px;padding-inline-end:19px}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$I = i$4 `:host{--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex}.fab,.icon,.icon ::slotted(*){display:flex}.fab{align-items:center;justify-content:center;vertical-align:middle;padding:0;position:relative;height:var(--_container-height);transition-property:background-color;border-width:0px;outline:none;z-index:0;--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);background-color:var(--_container-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color)}.fab.extended{width:inherit;box-sizing:border-box;padding-inline-start:16px;padding-inline-end:20px}.fab:not(.extended){width:var(--_container-width)}.fab.large{width:var(--_large-container-width);height:var(--_large-container-height)}.fab.large .icon ::slotted(*){width:var(--_large-icon-size);height:var(--_large-icon-size);font-size:var(--_large-icon-size)}.fab.large,.fab.large .ripple{border-start-start-radius:var(--_large-container-shape-start-start);border-start-end-radius:var(--_large-container-shape-start-end);border-end-start-radius:var(--_large-container-shape-end-start);border-end-end-radius:var(--_large-container-shape-end-end);--md-focus-ring-shape-start-start: var(--_large-container-shape-start-start);--md-focus-ring-shape-start-end: var(--_large-container-shape-start-end);--md-focus-ring-shape-end-end: var(--_large-container-shape-end-end);--md-focus-ring-shape-end-start: var(--_large-container-shape-end-start)}.fab:focus{--md-elevation-level:var(--_focus-container-elevation)}.fab:hover{--md-elevation-level:var(--_hover-container-elevation)}.fab:active{--md-elevation-level:var(--_pressed-container-elevation)}.fab.lowered{background-color:var(--_lowered-container-color);--md-elevation-level:var(--_lowered-container-elevation)}.fab.lowered:focus{--md-elevation-level:var(--_lowered-focus-container-elevation)}.fab.lowered:hover{--md-elevation-level:var(--_lowered-hover-container-elevation)}.fab.lowered:active{--md-elevation-level:var(--_lowered-pressed-container-elevation)}.fab .label{color:var(--_label-text-color)}.fab:hover .fab .label{color:var(--_hover-label-text-color)}.fab:focus .fab .label{color:var(--_focus-label-text-color)}.fab:active .fab .label{color:var(--_pressed-label-text-color)}.label{padding-inline-start:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--_label-text-type)}.ripple{overflow:hidden}.ripple,md-elevation{z-index:-1}.touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}md-elevation,.fab{transition-duration:280ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1)}.fab,.ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.icon ::slotted(*){width:var(--_icon-size);height:var(--_icon-size);font-size:var(--_icon-size)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Floating action buttons (FABs) help people take primary actions.
 * They’re used to represent the most important action on a screen, such as
 * Create or Reply.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The FAB remains the default component for a screen’s primary
 * action. It comes in three sizes: small FAB, FAB, and large FAB. The extended
 * FAB’s wider format and text label give it more visual prominence than a  FAB.
 * It’s often used on larger screens where a FAB would seem too small. Branded
 * FABs are used to specifically call attention to branded logo icons.
 *
 * __Example usages:__
 * - FAB
 *   - Create
 *   - Compose
 * - Extended FAB
 *   - Create
 *   - Compose
 *   - New Thread
 *   - New File
 *
 * @final
 * @suppress {visibility}
 */
let MdBrandedFab = class MdBrandedFab extends Fab {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'primary': false,
            'secondary': false,
            'tertiary': false,
            'small': false,
        };
    }
};
MdBrandedFab.styles = [styles$I, styles$K, styles$J];
MdBrandedFab = __decorate([
    e$a('md-branded-fab')
], MdBrandedFab);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$H = i$4 `:host{--_container-color: var(--md-fab-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation: var(--md-fab-container-elevation, 3);--_container-height: var(--md-fab-container-height, 56px);--_container-shadow-color: var(--md-fab-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-fab-container-shape, 16px);--_container-width: var(--md-fab-container-width, 56px);--_focus-container-elevation: var(--md-fab-focus-container-elevation, 3);--_focus-icon-color: var(--md-fab-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-fab-hover-container-elevation, 4);--_hover-icon-color: var(--md-fab-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-fab-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-fab-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-fab-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-fab-icon-size, 24px);--_lowered-container-color: var(--md-fab-lowered-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_lowered-container-elevation: var(--md-fab-lowered-container-elevation, 1);--_lowered-focus-container-elevation: var(--md-fab-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation: var(--md-fab-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation: var(--md-fab-lowered-pressed-container-elevation, 1);--_pressed-container-elevation: var(--md-fab-pressed-container-elevation, 3);--_pressed-icon-color: var(--md-fab-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-fab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-fab-pressed-state-layer-opacity, 0.12);--_focus-label-text-color: var(--md-fab-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-fab-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-color: var(--md-fab-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-fab-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_large-container-height: var(--md-fab-large-container-height, 96px);--_large-container-shape: var(--md-fab-large-container-shape, 28px);--_large-container-width: var(--md-fab-large-container-width, 96px);--_large-icon-size: var(--md-fab-large-icon-size, 36px);--_pressed-label-text-color: var(--md-fab-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_primary-container-color: var(--md-fab-primary-container-color, var(--md-sys-color-primary-container, #eaddff));--_primary-focus-icon-color: var(--md-fab-primary-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-focus-label-text-color: var(--md-fab-primary-focus-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-icon-color: var(--md-fab-primary-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-label-text-color: var(--md-fab-primary-hover-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-state-layer-color: var(--md-fab-primary-hover-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-icon-color: var(--md-fab-primary-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-label-text-color: var(--md-fab-primary-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-icon-color: var(--md-fab-primary-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-label-text-color: var(--md-fab-primary-pressed-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-state-layer-color: var(--md-fab-primary-pressed-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_secondary-container-color: var(--md-fab-secondary-container-color, var(--md-sys-color-secondary-container, #e8def8));--_secondary-focus-icon-color: var(--md-fab-secondary-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-focus-label-text-color: var(--md-fab-secondary-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-icon-color: var(--md-fab-secondary-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-label-text-color: var(--md-fab-secondary-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-state-layer-color: var(--md-fab-secondary-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-icon-color: var(--md-fab-secondary-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-label-text-color: var(--md-fab-secondary-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-icon-color: var(--md-fab-secondary-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-label-text-color: var(--md-fab-secondary-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-state-layer-color: var(--md-fab-secondary-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_small-container-height: var(--md-fab-small-container-height, 40px);--_small-container-shape: var(--md-fab-small-container-shape, 12px);--_small-container-width: var(--md-fab-small-container-width, 40px);--_small-icon-size: var(--md-fab-small-icon-size, 24px);--_tertiary-container-color: var(--md-fab-tertiary-container-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_tertiary-focus-icon-color: var(--md-fab-tertiary-focus-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-focus-label-text-color: var(--md-fab-tertiary-focus-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-icon-color: var(--md-fab-tertiary-hover-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-label-text-color: var(--md-fab-tertiary-hover-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-state-layer-color: var(--md-fab-tertiary-hover-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-icon-color: var(--md-fab-tertiary-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-label-text-color: var(--md-fab-tertiary-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-icon-color: var(--md-fab-tertiary-pressed-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-label-text-color: var(--md-fab-tertiary-pressed-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-state-layer-color: var(--md-fab-tertiary-pressed-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_container-shape-start-start: var( --md-fab-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-fab-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-fab-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-fab-container-shape-end-start, var(--_container-shape) );--_large-container-shape-start-start: var( --md-fab-large-container-shape-start-start, var(--_large-container-shape) );--_large-container-shape-start-end: var( --md-fab-large-container-shape-start-end, var(--_large-container-shape) );--_large-container-shape-end-end: var( --md-fab-large-container-shape-end-end, var(--_large-container-shape) );--_large-container-shape-end-start: var( --md-fab-large-container-shape-end-start, var(--_large-container-shape) );--_small-container-shape-start-start: var( --md-fab-small-container-shape-start-start, var(--_small-container-shape) );--_small-container-shape-start-end: var( --md-fab-small-container-shape-start-end, var(--_small-container-shape) );--_small-container-shape-end-end: var( --md-fab-small-container-shape-end-end, var(--_small-container-shape) );--_small-container-shape-end-start: var( --md-fab-small-container-shape-end-start, var(--_small-container-shape) )}.fab .icon ::slotted(*){color:var(--_icon-color)}.fab:focus{color:var(--_focus-icon-color)}.fab:hover{color:var(--_hover-icon-color)}.fab:active{color:var(--_pressed-icon-color)}.fab.primary{background-color:var(--_primary-container-color);--md-ripple-hover-color: var(--_primary-hover-state-layer-color);--md-ripple-pressed-color: var(--_primary-pressed-state-layer-color)}.fab.primary .icon ::slotted(*){color:var(--_primary-icon-color)}.fab.primary:focus{color:var(--_primary-focus-icon-color)}.fab.primary:hover{color:var(--_primary-hover-icon-color)}.fab.primary:active{color:var(--_primary-pressed-icon-color)}.fab.primary .label{color:var(--_primary-label-text-color)}.fab:hover .fab.primary .label{color:var(--_primary-hover-label-text-color)}.fab:focus .fab.primary .label{color:var(--_primary-focus-label-text-color)}.fab:active .fab.primary .label{color:var(--_primary-pressed-label-text-color)}.fab.secondary{background-color:var(--_secondary-container-color);--md-ripple-hover-color: var(--_secondary-hover-state-layer-color);--md-ripple-pressed-color: var(--_secondary-pressed-state-layer-color)}.fab.secondary .icon ::slotted(*){color:var(--_secondary-icon-color)}.fab.secondary:focus{color:var(--_secondary-focus-icon-color)}.fab.secondary:hover{color:var(--_secondary-hover-icon-color)}.fab.secondary:active{color:var(--_secondary-pressed-icon-color)}.fab.secondary .label{color:var(--_secondary-label-text-color)}.fab:hover .fab.secondary .label{color:var(--_secondary-hover-label-text-color)}.fab:focus .fab.secondary .label{color:var(--_secondary-focus-label-text-color)}.fab:active .fab.secondary .label{color:var(--_secondary-pressed-label-text-color)}.fab.tertiary{background-color:var(--_tertiary-container-color);--md-ripple-hover-color: var(--_tertiary-hover-state-layer-color);--md-ripple-pressed-color: var(--_tertiary-pressed-state-layer-color)}.fab.tertiary .icon ::slotted(*){color:var(--_tertiary-icon-color)}.fab.tertiary:focus{color:var(--_tertiary-focus-icon-color)}.fab.tertiary:hover{color:var(--_tertiary-hover-icon-color)}.fab.tertiary:active{color:var(--_tertiary-pressed-icon-color)}.fab.tertiary .label{color:var(--_tertiary-label-text-color)}.fab:hover .fab.tertiary .label{color:var(--_tertiary-hover-label-text-color)}.fab:focus .fab.tertiary .label{color:var(--_tertiary-focus-label-text-color)}.fab:active .fab.tertiary .label{color:var(--_tertiary-pressed-label-text-color)}.fab.small{width:var(--_small-container-width);height:var(--_small-container-height)}.fab.small .icon ::slotted(*){width:var(--_small-icon-size);height:var(--_small-icon-size);font-size:var(--_small-icon-size)}.fab.small,.fab.small .ripple{border-start-start-radius:var(--_small-container-shape-start-start);border-start-end-radius:var(--_small-container-shape-start-end);border-end-start-radius:var(--_small-container-shape-end-start);border-end-end-radius:var(--_small-container-shape-end-end);--md-focus-ring-shape-start-start: var(--_small-container-shape-start-start);--md-focus-ring-shape-start-end: var(--_small-container-shape-start-end);--md-focus-ring-shape-end-end: var(--_small-container-shape-end-end);--md-focus-ring-shape-end-start: var(--_small-container-shape-end-start)}/*# sourceMappingURL=fab-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Floating action buttons (FABs) help people take primary actions.
 * They’re used to represent the most important action on a screen, such as
 * Create or Reply.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The FAB remains the default component for a screen’s primary
 * action. It comes in three sizes: small FAB, FAB, and large FAB. The extended
 * FAB’s wider format and text label give it more visual prominence than a  FAB.
 * It’s often used on larger screens where a FAB would seem too small.
 *
 * __Example usages:__
 * - FAB
 *   - Create
 *   - Compose
 * - Extended FAB
 *   - Create
 *   - Compose
 *   - New Thread
 *   - New File
 *
 * @final
 * @suppress {visibility}
 */
let MdFab = class MdFab extends Fab {
};
MdFab.styles = [styles$I, styles$H, styles$J];
MdFab = __decorate([
    e$a('md-fab')
], MdFab);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$b;
/**
 * A checkbox component.
 */
class Checkbox extends s$2 {
    /**
     * The HTML name to use in form submission.
     */
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.internals.form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this.internals.labels;
    }
    constructor() {
        super();
        /**
         * Whether or not the checkbox is selected.
         */
        this.checked = false;
        /**
         * Whether or not the checkbox is disabled.
         */
        this.disabled = false;
        /**
         * Whether or not the checkbox is invalid.
         */
        this.error = false;
        /**
         * Whether or not the checkbox is indeterminate.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
         */
        this.indeterminate = false;
        /**
         * The value of the checkbox that is submitted with a form when selected.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
         */
        this.value = 'on';
        this.prevChecked = false;
        this.prevDisabled = false;
        this.prevIndeterminate = false;
        this.internals = this /* needed for closure */.attachInternals();
        {
            this.addEventListener('click', (event) => {
                if (!isActivationClick(event)) {
                    return;
                }
                this.focus();
                dispatchActivationClick(this.input);
            });
        }
    }
    focus() {
        this.input?.focus();
    }
    update(changed) {
        if (changed.has('checked') || changed.has('disabled') ||
            changed.has('indeterminate')) {
            this.prevChecked = changed.get('checked') ?? this.checked;
            this.prevDisabled = changed.get('disabled') ?? this.disabled;
            this.prevIndeterminate =
                changed.get('indeterminate') ?? this.indeterminate;
        }
        const shouldAddFormValue = this.checked && !this.indeterminate;
        const state = String(this.checked);
        this.internals.setFormValue(shouldAddFormValue ? this.value : null, state);
        super.update(changed);
    }
    render() {
        const prevNone = !this.prevChecked && !this.prevIndeterminate;
        const prevChecked = this.prevChecked && !this.prevIndeterminate;
        const prevIndeterminate = this.prevIndeterminate;
        const isChecked = this.checked && !this.indeterminate;
        const isIndeterminate = this.indeterminate;
        const containerClasses = o$1({
            'selected': isChecked || isIndeterminate,
            'unselected': !isChecked && !isIndeterminate,
            'checked': isChecked,
            'indeterminate': isIndeterminate,
            'error': this.error && !this.disabled,
            'prev-unselected': prevNone,
            'prev-checked': prevChecked,
            'prev-indeterminate': prevIndeterminate,
            'prev-disabled': this.prevDisabled,
        });
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <div class="container ${containerClasses}">
        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
      <input type="checkbox"
        id="input"
        aria-checked=${isIndeterminate ? 'mixed' : A}
        aria-label=${ariaLabel || A}
        ?disabled=${this.disabled}
        .indeterminate=${this.indeterminate}
        .checked=${this.checked}
        @change=${this.handleChange}
      >
    `;
    }
    handleChange(event) {
        const target = event.target;
        this.checked = target.checked;
        this.indeterminate = target.indeterminate;
        redispatchEvent(this, event);
    }
    /** @private */
    formResetCallback() {
        // The checked property does not reflect, so the original attribute set by
        // the user is used to determine the default value.
        this.checked = this.hasAttribute('checked');
    }
    /** @private */
    formStateRestoreCallback(state) {
        this.checked = state === 'true';
    }
}
_a$b = Checkbox;
(() => {
    requestUpdateOnAriaChange(_a$b);
})();
/** @nocollapse */
Checkbox.formAssociated = true;
__decorate([
    n$8({ type: Boolean })
], Checkbox.prototype, "checked", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], Checkbox.prototype, "disabled", void 0);
__decorate([
    n$8({ type: Boolean })
], Checkbox.prototype, "error", void 0);
__decorate([
    n$8({ type: Boolean })
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
    n$8()
], Checkbox.prototype, "value", void 0);
__decorate([
    t$3()
], Checkbox.prototype, "prevChecked", void 0);
__decorate([
    t$3()
], Checkbox.prototype, "prevDisabled", void 0);
__decorate([
    t$3()
], Checkbox.prototype, "prevIndeterminate", void 0);
__decorate([
    i$5('input')
], Checkbox.prototype, "input", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$G = i$4 `:host{--_container-shape: var(--md-checkbox-container-shape, 2px);--_container-size: var(--md-checkbox-container-size, 18px);--_error-hover-state-layer-color: var(--md-checkbox-error-hover-state-layer-color, var(--md-sys-color-error, #b3261e));--_error-hover-state-layer-opacity: var(--md-checkbox-error-hover-state-layer-opacity, 0.08);--_error-pressed-state-layer-color: var(--md-checkbox-error-pressed-state-layer-color, var(--md-sys-color-error, #b3261e));--_error-pressed-state-layer-opacity: var(--md-checkbox-error-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-checkbox-icon-size, 18px);--_selected-container-color: var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));--_selected-disabled-container-color: var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-disabled-container-opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);--_selected-disabled-icon-color: var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff));--_selected-error-container-color: var(--md-checkbox-selected-error-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-focus-container-color: var(--md-checkbox-selected-error-focus-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-focus-icon-color: var(--md-checkbox-selected-error-focus-icon-color, var(--md-sys-color-on-error, #fff));--_selected-error-hover-container-color: var(--md-checkbox-selected-error-hover-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-hover-icon-color: var(--md-checkbox-selected-error-hover-icon-color, var(--md-sys-color-on-error, #fff));--_selected-error-icon-color: var(--md-checkbox-selected-error-icon-color, var(--md-sys-color-on-error, #fff));--_selected-error-pressed-container-color: var(--md-checkbox-selected-error-pressed-container-color, var(--md-sys-color-error, #b3261e));--_selected-error-pressed-icon-color: var(--md-checkbox-selected-error-pressed-icon-color, var(--md-sys-color-on-error, #fff));--_selected-focus-container-color: var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-icon-color: var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-container-color: var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-state-layer-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-container-color: var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-state-layer-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-checkbox-state-layer-shape, 9999px);--_state-layer-size: var(--md-checkbox-state-layer-size, 40px);--_unselected-disabled-container-opacity: var(--md-checkbox-unselected-disabled-container-opacity, 0.38);--_unselected-disabled-outline-color: var(--md-checkbox-unselected-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-disabled-outline-width: var(--md-checkbox-unselected-disabled-outline-width, 2px);--_unselected-error-focus-outline-color: var(--md-checkbox-unselected-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-hover-outline-color: var(--md-checkbox-unselected-error-hover-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-outline-color: var(--md-checkbox-unselected-error-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-error-pressed-outline-color: var(--md-checkbox-unselected-error-pressed-outline-color, var(--md-sys-color-error, #b3261e));--_unselected-focus-outline-color: var(--md-checkbox-unselected-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-focus-outline-width: var(--md-checkbox-unselected-focus-outline-width, 2px);--_unselected-hover-outline-color: var(--md-checkbox-unselected-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-hover-outline-width: var(--md-checkbox-unselected-hover-outline-width, 2px);--_unselected-hover-state-layer-color: var(--md-checkbox-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-hover-state-layer-opacity: var(--md-checkbox-unselected-hover-state-layer-opacity, 0.08);--_unselected-outline-color: var(--md-checkbox-unselected-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-outline-width: var(--md-checkbox-unselected-outline-width, 2px);--_unselected-pressed-outline-color: var(--md-checkbox-unselected-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-pressed-outline-width: var(--md-checkbox-unselected-pressed-outline-width, 2px);--_unselected-pressed-state-layer-color: var(--md-checkbox-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-pressed-state-layer-opacity: var(--md-checkbox-unselected-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: var( --md-checkbox-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-checkbox-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-checkbox-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-checkbox-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:inline-flex;height:48px;position:relative;vertical-align:top;width:48px;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-focus-ring-outward-offset: -2px}input{appearance:none;inset:0;margin:0;outline:none;position:absolute;opacity:0;block-size:100%;inline-size:100%}.container{border-radius:inherit;height:100%;position:relative;width:100%}.outline,.background,md-ripple,.icon{inset:0;margin:auto;position:absolute}.outline,.background{border-radius:inherit;height:var(--_container-size);width:var(--_container-size)}.outline{border-color:var(--_unselected-outline-color);border-style:solid;border-width:var(--_unselected-outline-width);box-sizing:border-box}.background{background-color:var(--_selected-container-color)}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}.selected .background,.selected .icon{opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.error md-ripple{--md-ripple-hover-color: var(--_error-hover-state-layer-color);--md-ripple-hover-opacity: var(--_error-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_error-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_error-pressed-state-layer-opacity)}.icon{fill:var(--_selected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}.error .outline{border-color:var(--_unselected-error-outline-color)}.error .background{background:var(--_selected-error-container-color)}.error .icon{fill:var(--_selected-error-icon-color)}:host(:hover) .outline{border-color:var(--_unselected-hover-outline-color);border-width:var(--_unselected-hover-outline-width)}:host(:hover) .background{background:var(--_selected-hover-container-color)}:host(:hover) .icon{fill:var(--_selected-hover-icon-color)}:host(:hover) .error .outline{border-color:var(--_unselected-error-hover-outline-color)}:host(:hover) .error .background{background:var(--_selected-error-hover-container-color)}:host(:hover) .error .icon{fill:var(--_selected-error-hover-icon-color)}:host(:focus-within) .outline{border-color:var(--_unselected-focus-outline-color);border-width:var(--_unselected-focus-outline-width)}:host(:focus-within) .background{background:var(--_selected-focus-container-color)}:host(:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:host(:focus-within) .error .outline{border-color:var(--_unselected-error-focus-outline-color)}:host(:focus-within) .error .background{background:var(--_selected-error-focus-container-color)}:host(:focus-within) .error .icon{fill:var(--_selected-error-focus-icon-color)}:host(:active) .outline{border-color:var(--_unselected-pressed-outline-color);border-width:var(--_unselected-pressed-outline-width)}:host(:active) .background{background:var(--_selected-pressed-container-color)}:host(:active) .icon{fill:var(--_selected-pressed-icon-color)}:host(:active) .error .outline{border-color:var(--_unselected-error-pressed-outline-color)}:host(:active) .error .background{background:var(--_selected-error-pressed-container-color)}:host(:active) .error .icon{fill:var(--_selected-error-pressed-icon-color)}:host([disabled]) .background,:host([disabled]) .icon,:host([disabled]) .mark,.prev-disabled .background,.prev-disabled .icon,.prev-disabled .mark{animation-duration:0s;transition-duration:0s}:host([disabled]) .outline{border-color:var(--_unselected-disabled-outline-color);border-width:var(--_unselected-disabled-outline-width);opacity:var(--_unselected-disabled-container-opacity)}:host([disabled]) .selected .outline{visibility:hidden}:host([disabled]) .selected .background{background:var(--_selected-disabled-container-color);opacity:var(--_selected-disabled-container-opacity)}:host([disabled]) .icon{fill:var(--_selected-disabled-icon-color)}/*# sourceMappingURL=checkbox-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$F = i$4 `@media(forced-colors: active){:host{--md-checkbox-selected-container-color: CanvasText;--md-checkbox-selected-disabled-container-color: GrayText;--md-checkbox-selected-disabled-container-opacity: 1;--md-checkbox-selected-disabled-icon-color: Canvas;--md-checkbox-selected-error-container-color: CanvasText;--md-checkbox-selected-error-focus-container-color: CanvasText;--md-checkbox-selected-error-focus-icon-color: Canvas;--md-checkbox-selected-error-hover-container-color: CanvasText;--md-checkbox-selected-error-hover-icon-color: Canvas;--md-checkbox-selected-error-icon-color: Canvas;--md-checkbox-selected-error-pressed-container-color: CanvasText;--md-checkbox-selected-error-pressed-icon-color: Canvas;--md-checkbox-selected-focus-container-color: CanvasText;--md-checkbox-selected-focus-icon-color: Canvas;--md-checkbox-selected-hover-container-color: CanvasText;--md-checkbox-selected-hover-icon-color: Canvas;--md-checkbox-selected-icon-color: Canvas;--md-checkbox-selected-pressed-container-color: CanvasText;--md-checkbox-selected-pressed-icon-color: Canvas;--md-checkbox-unselected-disabled-container-opacity: 1;--md-checkbox-unselected-disabled-outline-color: GrayText;--md-checkbox-unselected-error-focus-outline-color: CanvasText;--md-checkbox-unselected-error-hover-outline-color: CanvasText;--md-checkbox-unselected-error-outline-color: CanvasText;--md-checkbox-unselected-error-pressed-outline-color: CanvasText;--md-checkbox-unselected-focus-outline-color: CanvasText;--md-checkbox-unselected-hover-outline-color: CanvasText;--md-checkbox-unselected-outline-color: CanvasText;--md-checkbox-unselected-pressed-outline-color: CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Checkboxes allow users to select one or more items from a set.
 * Checkboxes can turn an option on or off.
 *
 * @description
 * Use checkboxes to:
 * - Select one or more options from a list
 * - Present a list containing sub-selections
 * - Turn an item on or off in a desktop environment
 *
 * @final
 * @suppress {visibility}
 */
let MdCheckbox = class MdCheckbox extends Checkbox {
};
MdCheckbox.styles = [styles$G, styles$F];
MdCheckbox = __decorate([
    e$a('md-checkbox')
], MdCheckbox);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A field component.
 */
class Field extends s$2 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.error = false;
        this.focused = false;
        this.populated = false;
        this.resizable = false;
        this.required = false;
        /**
         * Whether or not the field has leading content.
         */
        this.hasStart = false;
        /**
         * Whether or not the field has trailing content.
         */
        this.hasEnd = false;
        this.isAnimating = false;
    }
    update(props) {
        // Client-side property updates
        // When disabling, remove focus styles if focused.
        if (this.disabled && this.focused) {
            props.set('focused', true);
            this.focused = false;
        }
        // Animate if focused or populated change.
        this.animateLabelIfNeeded({
            wasFocused: props.get('focused'),
            wasPopulated: props.get('populated')
        });
        super.update(props);
    }
    render() {
        const floatingLabel = this.renderLabel(/*isFloating*/ true);
        const restingLabel = this.renderLabel(/*isFloating*/ false);
        const outline = this.renderOutline?.(floatingLabel);
        const classes = {
            'disabled': this.disabled,
            'error': this.error && !this.disabled,
            'focused': this.focused,
            'with-start': this.hasStart,
            'with-end': this.hasEnd,
            'populated': this.populated,
            'resizable': this.resizable,
            'required': this.required,
            'no-label': !this.label,
        };
        return x `
      <div class="field ${o$1(classes)}">
        <div class="container-overflow">
          ${outline}
          ${this.renderBackground?.()}
          ${this.renderIndicator?.()}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              ${restingLabel}
              ${outline ? A : floatingLabel}
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>

        <div class="supporting-text">
          <div class="supporting-text-start">
            <slot name="supporting-text"></slot>
          </div>
          <div class="supporting-text-end">
            <slot name="supporting-text-end"></slot>
          </div>
        </div>
      </div>
    `;
    }
    renderLabel(isFloating) {
        let visible;
        if (isFloating) {
            // Floating label is visible when focused/populated or when animating.
            visible = this.focused || this.populated || this.isAnimating;
        }
        else {
            // Resting label is visible when unfocused. It is never visible while
            // animating.
            visible = !this.focused && !this.populated && !this.isAnimating;
        }
        const classes = {
            'hidden': !visible,
            'floating': isFloating,
            'resting': !isFloating,
        };
        let labelText = this.label ?? '';
        // Add '*' if a label is present and the field is required
        labelText += this.required && labelText ? '*' : '';
        return x `
      <span class="label ${o$1(classes)}"
        aria-hidden=${!visible}
      >${labelText}</span>
    `;
    }
    animateLabelIfNeeded({ wasFocused, wasPopulated }) {
        if (!this.label) {
            return;
        }
        wasFocused ?? (wasFocused = this.focused);
        wasPopulated ?? (wasPopulated = this.populated);
        const wasFloating = wasFocused || wasPopulated;
        const shouldBeFloating = this.focused || this.populated;
        if (wasFloating === shouldBeFloating) {
            return;
        }
        this.isAnimating = true;
        this.labelAnimation?.cancel();
        // Only one label is visible at a time for clearer text rendering.
        // The floating label is visible and used during animation. At the end of
        // the animation, it will either remain visible (if floating) or hide and
        // the resting label will be shown.
        //
        // We don't use forward filling because if the dimensions of the text field
        // change (leading icon removed, density changes, etc), then the animation
        // will be inaccurate.
        //
        // Re-calculating the animation each time will prevent any visual glitches
        // from appearing.
        // TODO(b/241113345): use animation tokens
        this.labelAnimation = this.floatingLabelEl?.animate(this.getLabelKeyframes(), { duration: 150, easing: EASING.STANDARD });
        this.labelAnimation?.addEventListener('finish', () => {
            // At the end of the animation, update the visible label.
            this.isAnimating = false;
        });
    }
    getLabelKeyframes() {
        const { floatingLabelEl, restingLabelEl } = this;
        if (!floatingLabelEl || !restingLabelEl) {
            return [];
        }
        const { x: floatingX, y: floatingY, height: floatingHeight } = floatingLabelEl.getBoundingClientRect();
        const { x: restingX, y: restingY, height: restingHeight } = restingLabelEl.getBoundingClientRect();
        const floatingScrollWidth = floatingLabelEl.scrollWidth;
        const restingScrollWidth = restingLabelEl.scrollWidth;
        // Scale by width ratio instead of font size since letter-spacing will scale
        // incorrectly. Using the width we can better approximate the adjusted
        // scale and compensate for tracking and overflow.
        // (use scrollWidth instead of width to account for clipped labels)
        const scale = restingScrollWidth / floatingScrollWidth;
        const xDelta = restingX - floatingX;
        // The line-height of the resting and floating label are different. When
        // we move the floating label down to the resting label's position, it won't
        // exactly match because of this. We need to adjust by half of what the
        // final scaled floating label's height will be.
        const yDelta = restingY - floatingY +
            Math.round((restingHeight - floatingHeight * scale) / 2);
        // Create the two transforms: floating to resting (using the calculations
        // above), and resting to floating (re-setting the transform to initial
        // values).
        const restTransform = `translateX(${xDelta}px) translateY(${yDelta}px) scale(${scale})`;
        const floatTransform = `translateX(0) translateY(0) scale(1)`;
        // Constrain the floating labels width to a scaled percentage of the
        // resting label's width. This will prevent long clipped labels from
        // overflowing the container.
        const restingClientWidth = restingLabelEl.clientWidth;
        const isRestingClipped = restingScrollWidth > restingClientWidth;
        const width = isRestingClipped ? `${restingClientWidth / scale}px` : '';
        if (this.focused || this.populated) {
            return [
                { transform: restTransform, width }, { transform: floatTransform, width }
            ];
        }
        return [
            { transform: floatTransform, width }, { transform: restTransform, width }
        ];
    }
    getSurfacePositionClientRect() {
        return this.containerEl.getBoundingClientRect();
    }
}
__decorate([
    n$8({ type: Boolean })
], Field.prototype, "disabled", void 0);
__decorate([
    n$8({ type: Boolean })
], Field.prototype, "error", void 0);
__decorate([
    n$8({ type: Boolean })
], Field.prototype, "focused", void 0);
__decorate([
    n$8()
], Field.prototype, "label", void 0);
__decorate([
    n$8({ type: Boolean })
], Field.prototype, "populated", void 0);
__decorate([
    n$8({ type: Boolean })
], Field.prototype, "resizable", void 0);
__decorate([
    n$8({ type: Boolean })
], Field.prototype, "required", void 0);
__decorate([
    n$8({ type: Boolean })
], Field.prototype, "hasStart", void 0);
__decorate([
    n$8({ type: Boolean })
], Field.prototype, "hasEnd", void 0);
__decorate([
    t$3()
], Field.prototype, "isAnimating", void 0);
__decorate([
    i$5('.label.floating')
], Field.prototype, "floatingLabelEl", void 0);
__decorate([
    i$5('.label.resting')
], Field.prototype, "restingLabelEl", void 0);
__decorate([
    i$5('.container')
], Field.prototype, "containerEl", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled field component.
 */
class FilledField extends Field {
    renderBackground() {
        return x `
      <div class="background"></div>
      <div class="state-layer"></div>
    `;
    }
    renderIndicator() {
        return x `<div class="active-indicator"></div>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$E = i$4 `:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-padding-horizontal: var(--md-filled-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-filled-field-container-padding-vertical, 16px);--_container-shape-start-start: var( --md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, 0px) );--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-type: var(--md-filled-field-content-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 2px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, 0.75rem);--_label-text-type: var(--md-filled-field-label-text-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-padding: var(--md-filled-field-supporting-text-padding, 16px);--_supporting-text-padding-top: var(--md-filled-field-supporting-text-padding-top, 4px);--_supporting-text-type: var(--md-filled-field-supporting-text-type, 400 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto));--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_with-label-container-padding-vertical: var(--md-filled-field-with-label-container-padding-vertical, 8px)}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:0}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .start{padding-inline-start:var(--_container-padding-horizontal)}.field:not(.with-end) .end{padding-inline-end:var(--_container-padding-horizontal)}.field:not(.no-label) .container{padding-bottom:var(--_with-label-container-padding-vertical);padding-top:var(--_with-label-container-padding-vertical)}.field:not(.no-label) .middle{padding-top:var(--_label-text-populated-line-height)}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$D = i$4 `:host{display:inline-flex}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;min-width:min-content;overflow:hidden;padding-top:var(--_container-padding-vertical);padding-bottom:var(--_container-padding-vertical);position:relative}.resizable .container{resize:both}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;font:var(--_content-type);opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{color:var(--_label-text-color);overflow:hidden;max-width:100%;pointer-events:none;text-overflow:ellipsis;white-space:nowrap;z-index:1;font:var(--_label-text-type)}.label.resting{position:absolute;top:50%;transform:translateY(-50%)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;justify-content:space-between;padding:0 var(--_supporting-text-padding);font:var(--_supporting-text-type)}.supporting-text-start,.supporting-text-end{display:flex}.supporting-text-start ::slotted(:not(:empty)),.supporting-text-end ::slotted(:not(:empty)){padding-top:var(--_supporting-text-padding-top)}.supporting-text-end ::slotted(:not(:empty)){padding-inline-start:var(--_supporting-text-padding)}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
let MdFilledField = class MdFilledField extends FilledField {
};
MdFilledField.styles = [styles$D, styles$E];
MdFilledField = __decorate([
    e$a('md-filled-field')
], MdFilledField);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=Symbol.for(""),l$1=t=>{if((null==t?void 0:t.r)===e$1)return null==t?void 0:t._$litStatic$},i$1=(t,...r)=>({_$litStatic$:r.reduce(((r,e,l)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[l+1]),t[0]),r:e$1}),s$1=new Map,a=t=>(r,...e)=>{const o=e.length;let i,a;const n=[],u=[];let c,$=0,f=!1;for(;$<o;){for(c=r[$];$<o&&void 0!==(a=e[$],i=l$1(a));)c+=i+r[++$],f=!0;$!==o&&u.push(a),n.push(c),$++;}if($===o&&n.push(r[o]),f){const t=n.join("$$lit$$");void 0===(r=s$1.get(t))&&(n.raw=n,s$1.set(t,r=n)),e=u;}return t(r,...e)},n$2=a(x);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$C = i$4 `@media(forced-colors: active){:host{--md-filled-text-field-disabled-active-indicator-color: GrayText;--md-filled-text-field-disabled-active-indicator-opacity: 1;--md-filled-text-field-disabled-input-text-color: GrayText;--md-filled-text-field-disabled-input-text-opacity: 1;--md-filled-text-field-disabled-label-text-color: GrayText;--md-filled-text-field-disabled-label-text-opacity: 1;--md-filled-text-field-disabled-leading-icon-color: GrayText;--md-filled-text-field-disabled-leading-icon-opacity: 1;--md-filled-text-field-disabled-supporting-text-color: GrayText;--md-filled-text-field-disabled-supporting-text-opacity: 1;--md-filled-text-field-disabled-trailing-icon-color: GrayText;--md-filled-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=filled-forced-colors-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$B = i$4 `:host{--_container-padding-horizontal: var(--md-filled-text-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-filled-text-field-container-padding-vertical, 16px);--_input-text-prefix-padding: var(--md-filled-text-field-input-text-prefix-padding, 2px);--_input-text-suffix-padding: var(--md-filled-text-field-input-text-suffix-padding, 2px);--_with-label-container-padding-vertical: var(--md-filled-text-field-with-label-container-padding-vertical, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, 0px) );--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 2px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-type: var(--md-filled-text-field-input-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, 0.75rem);--_label-text-type: var(--md-filled-text-field-label-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-filled-text-field-supporting-text-type, var(--md-sys-typescale-body-small, 400 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-padding-horizontal: var(--_container-padding-horizontal);--md-filled-field-container-padding-vertical: var(--_container-padding-vertical);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-type: var(--_input-text-type);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-type: var(--_label-text-type);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-type: var(--_supporting-text-type);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-with-label-container-padding-vertical: var(--_with-label-container-padding-vertical)}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=o=>void 0===o.strings,f={},s=(o,l=f)=>o._$AH=l;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$2(class extends i$2{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!e(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===T||t$1===A)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return T}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return T}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return T;return s(i),t$1}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i="important",n$1=" !"+i,o=e$2(class extends i$2{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut){this.ut=new Set;for(const t in r)this.ut.add(t);return this.render(r)}this.ut.forEach((t=>{null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];if(null!=e){this.ut.add(t);const r="string"==typeof e&&e.endsWith(n$1);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?i:""):s[t]=e;}}return T}});

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const stringConverter = {
    fromAttribute(value) {
        return value ?? '';
    },
    toAttribute(value) {
        return value || null;
    }
};

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$a;
/**
 * A text field component.
 */
class TextField extends s$2 {
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.internals.form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this.internals.labels;
    }
    /**
     * The HTML name to use in form submission.
     */
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * Gets or sets the direction in which selection occurred.
     */
    get selectionDirection() {
        return this.getInput().selectionDirection;
    }
    set selectionDirection(value) {
        this.getInput().selectionDirection = value;
    }
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    get selectionEnd() {
        return this.getInput().selectionEnd;
    }
    set selectionEnd(value) {
        this.getInput().selectionEnd = value;
    }
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    get selectionStart() {
        return this.getInput().selectionStart;
    }
    set selectionStart(value) {
        this.getInput().selectionStart = value;
    }
    /**
     * Returns the native validation error message that would be displayed upon
     * calling `reportValidity()`.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
     */
    get validationMessage() {
        return this.getInput().validationMessage;
    }
    /**
     * Returns a ValidityState object that represents the validity states of the
     * text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    get validity() {
        return this.getInput().validity;
    }
    /**
     * The text field's value as a number.
     */
    get valueAsNumber() {
        return this.getInput().valueAsNumber;
    }
    set valueAsNumber(value) {
        this.getInput().valueAsNumber = value;
        this.value = this.getInput().value;
    }
    /**
     * The text field's value as a Date.
     */
    get valueAsDate() {
        return this.getInput().valueAsDate;
    }
    set valueAsDate(value) {
        this.getInput().valueAsDate = value;
        this.value = this.getInput().value;
    }
    /**
     * Returns whether an element will successfully validate based on forms
     * validation rules and constraints.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/willValidate
     */
    get willValidate() {
        return this.getInput().willValidate;
    }
    get hasError() {
        return this.error || this.nativeError;
    }
    constructor() {
        super();
        this.disabled = false;
        /**
         * Gets or sets whether or not the text field is in a visually invalid state.
         *
         * Calling `reportValidity()` will automatically update `error`.
         */
        this.error = false;
        /**
         * The error message that replaces supporting text when `error` is true. If
         * `errorText` is an empty string, then the supporting text will continue to
         * show.
         *
         * Calling `reportValidity()` will automatically update `errorText` to the
         * native `validationMessage`.
         */
        this.errorText = '';
        this.required = false;
        /**
         * The current value of the text field. It is always a string.
         */
        this.value = '';
        /**
         * An optional prefix to display before the input value.
         */
        this.prefixText = '';
        /**
         * An optional suffix to display after the input value.
         */
        this.suffixText = '';
        /**
         * Whether or not the text field has a leading icon. Used for SSR.
         */
        this.hasLeadingIcon = false;
        /**
         * Whether or not the text field has a trailing icon. Used for SSR.
         */
        this.hasTrailingIcon = false;
        /**
         * Conveys additional information below the text field, such as how it should
         * be used.
         */
        this.supportingText = '';
        /**
         * Override the input text CSS `direction`. Useful for RTL languages that use
         * LTR notation for fractions.
         */
        this.textDirection = '';
        // <input> properties
        /**
         * Defines the greatest value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
         */
        this.max = '';
        /**
         * The maximum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
         */
        this.maxLength = -1;
        /**
         * Defines the most negative value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
         */
        this.min = '';
        /**
         * The minimum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
         */
        this.minLength = -1;
        /**
         * A regular expression that the text field's value must match to pass
         * constraint validation.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
         */
        this.pattern = '';
        this.placeholder = '';
        /**
         * Indicates whether or not a user should be able to edit the text field's
         * value.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
         */
        this.readOnly = false;
        /**
         * Returns or sets the element's step attribute, which works with min and max
         * to limit the increments at which a numeric or date-time value can be set.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
         */
        this.step = '';
        this.type = 'text';
        /**
         * Returns true when the text field has been interacted with. Native
         * validation errors only display in response to user interactions.
         */
        this.dirty = false;
        this.focused = false;
        /**
         * When set to true, the error text's `role="alert"` will be removed, then
         * re-added after an animation frame. This will re-announce an error message
         * to screen readers.
         */
        this.refreshErrorAlert = false;
        /**
         * Whether or not a native error has been reported via `reportValidity()`.
         */
        this.nativeError = false;
        /**
         * The validation message displayed from a native error via
         * `reportValidity()`.
         */
        this.nativeErrorText = '';
        this.internals = this /* needed for closure */.attachInternals();
        {
            this.addEventListener('click', this.focus);
            this.addEventListener('focusin', this.handleFocusin);
            this.addEventListener('focusout', this.handleFocusout);
        }
    }
    /**
     * Checks the text field's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
     *
     * @return true if the text field is valid, or false if not.
     */
    checkValidity() {
        const { valid } = this.checkValidityAndDispatch();
        return valid;
    }
    /**
     * Focuses the text field's input text.
     */
    focus() {
        if (this.disabled || this.matches(':focus-within')) {
            // Don't shift focus from an element within the text field, like an icon
            // button, to the input when focus is requested.
            return;
        }
        super.focus();
    }
    /**
     * Checks the text field's native validation and returns whether or not the
     * element is valid.
     *
     * If invalid, this method will dispatch the `invalid` event.
     *
     * This method will display or clear an error text message equal to the text
     * field's `validationMessage`, unless the invalid event is canceled.
     *
     * Use `setCustomValidity()` to customize the `validationMessage`.
     *
     * This method can also be used to re-announce error messages to screen
     * readers.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
     *
     * @return true if the text field is valid, or false if not.
     */
    reportValidity() {
        const { valid, canceled } = this.checkValidityAndDispatch();
        if (!canceled) {
            const prevMessage = this.getErrorText();
            this.nativeError = !valid;
            this.nativeErrorText = this.validationMessage;
            const needsRefresh = this.shouldErrorAnnounce() && prevMessage === this.getErrorText();
            if (needsRefresh) {
                this.refreshErrorAlert = true;
            }
        }
        return valid;
    }
    /**
     * Selects all the text in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
     */
    select() {
        this.getInput().select();
    }
    /**
     * Sets the text field's native validation error message. This is used to
     * customize `validationMessage`.
     *
     * When the error is not an empty string, the text field is considered invalid
     * and `validity.customError` will be true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
     *
     * @param error The error message to display.
     */
    setCustomValidity(error) {
        this.getInput().setCustomValidity(error);
    }
    setRangeText(...args) {
        // Calling setRangeText with 1 vs 3-4 arguments has different behavior.
        // Use spread syntax and type casting to ensure correct usage.
        this.getInput().setRangeText(...args);
        this.value = this.getInput().value;
    }
    /**
     * Sets the start and end positions of a selection in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
     *
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start, end, direction) {
        this.getInput().setSelectionRange(start, end, direction);
    }
    /**
     * Decrements the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
     *
     * @param stepDecrement The number of steps to decrement, defaults to 1.
     */
    stepDown(stepDecrement) {
        const input = this.getInput();
        input.stepDown(stepDecrement);
        this.value = input.value;
    }
    /**
     * Increments the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
     *
     * @param stepIncrement The number of steps to increment, defaults to 1.
     */
    stepUp(stepIncrement) {
        const input = this.getInput();
        input.stepUp(stepIncrement);
        this.value = input.value;
    }
    /**
     * Reset the text field to its default value.
     */
    reset() {
        this.dirty = false;
        this.value = this.getAttribute('value') ?? '';
        this.nativeError = false;
        this.nativeErrorText = '';
    }
    attributeChangedCallback(attribute, newValue, oldValue) {
        if (attribute === 'value' && this.dirty) {
            // After user input, changing the value attribute no longer updates the
            // text field's value (until reset). This matches native <input> behavior.
            return;
        }
        super.attributeChangedCallback(attribute, newValue, oldValue);
    }
    render() {
        const classes = {
            'disabled': this.disabled,
            'error': !this.disabled && this.hasError,
        };
        return x `
       <span class="text-field ${o$1(classes)}">
         ${this.renderField()}
       </span>
     `;
    }
    updated(changedProperties) {
        // Keep changedProperties arg so that subclasses may call it
        // If a property such as `type` changes and causes the internal <input>
        // value to change without dispatching an event, re-sync it.
        const value = this.getInput().value;
        this.internals.setFormValue(value);
        if (this.value !== value) {
            // Note this is typically inefficient in updated() since it schedules
            // another update. However, it is needed for the <input> to fully render
            // before checking its value.
            this.value = value;
        }
        if (this.refreshErrorAlert) {
            // The past render cycle removed the role="alert" from the error message.
            // Re-add it after an animation frame to re-announce the error.
            requestAnimationFrame(() => {
                this.refreshErrorAlert = false;
            });
        }
    }
    renderField() {
        const prefix = this.renderPrefix();
        const suffix = this.renderSuffix();
        const input = this.renderInput();
        return n$2 `<${this.fieldTag}
      class="field"
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      ?focused=${this.focused}
      ?hasEnd=${this.hasTrailingIcon}
      ?hasStart=${this.hasLeadingIcon}
      .label=${this.label}
      ?populated=${!!this.value}
      ?required=${this.required}
    >
      ${this.renderLeadingIcon()}
      ${prefix}${input}${suffix}
      ${this.renderTrailingIcon()}
      ${this.renderSupportingText()}
      ${this.renderCounter()}
    </${this.fieldTag}>`;
    }
    renderLeadingIcon() {
        return x `
       <span class="icon leading" slot="start">
         <slot name="leadingicon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
    }
    renderTrailingIcon() {
        return x `
       <span class="icon trailing" slot="end">
         <slot name="trailingicon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `;
    }
    renderInput() {
        const style = { direction: this.textDirection };
        // TODO(b/243805848): remove `as unknown as number` once lit analyzer is
        // fixed
        return x `<input
       style=${o(style)}
       aria-autocomplete=${this.ariaAutoComplete || A}
       aria-describedby=${this.getAriaDescribedBy() || A}
       aria-expanded=${this.ariaExpanded || A}
       aria-invalid=${this.hasError}
       aria-label=${this.ariaLabel || this.label || A}
       ?disabled=${this.disabled}
       max=${(this.max || A)}
       maxlength=${this.maxLength > -1 ? this.maxLength : A}
       min=${(this.min || A)}
       minlength=${this.minLength > -1 ? this.minLength : A}
       pattern=${this.pattern || A}
       placeholder=${this.placeholder || A}
       ?readonly=${this.readOnly}
       ?required=${this.required}
       step=${(this.step || A)}
       type=${this.type}
       .value=${l(this.value)}
       @change=${this.redispatchEvent}
       @input=${this.handleInput}
       @select=${this.redispatchEvent}
     >`;
    }
    getAriaDescribedBy() {
        const ids = [];
        if (this.getSupportingText()) {
            ids.push('support');
        }
        if (this.getCounterText()) {
            ids.push('counter');
        }
        return ids.join(' ');
    }
    renderPrefix() {
        return this.renderAffix(this.prefixText, /* isSuffix */ false);
    }
    renderSuffix() {
        return this.renderAffix(this.suffixText, /* isSuffix */ true);
    }
    renderAffix(text, isSuffix) {
        if (!text) {
            return A;
        }
        const classes = {
            'suffix': isSuffix,
            'prefix': !isSuffix,
        };
        return x `<span class="${o$1(classes)}">${text}</span>`;
    }
    renderSupportingText() {
        const text = this.getSupportingText();
        if (!text) {
            return A;
        }
        return x `<span id="support"
      slot="supporting-text"
      role=${this.shouldErrorAnnounce() ? 'alert' : A}>${text}</span>`;
    }
    getSupportingText() {
        const errorText = this.getErrorText();
        return this.hasError && errorText ? errorText : this.supportingText;
    }
    getErrorText() {
        return this.error ? this.errorText : this.nativeErrorText;
    }
    shouldErrorAnnounce() {
        // Announce if there is an error and error text visible.
        // If refreshErrorAlert is true, do not announce. This will remove the
        // role="alert" attribute. Another render cycle will happen after an
        // animation frame to re-add the role.
        return this.hasError && !!this.getErrorText() && !this.refreshErrorAlert;
    }
    renderCounter() {
        const text = this.getCounterText();
        if (!text) {
            return A;
        }
        // TODO(b/244473435): add aria-label and announcements
        return x `<span id="counter"
       class="counter"
       slot="supporting-text-end">${text}</span>`;
    }
    getCounterText() {
        return this.maxLength > -1 ? `${this.value.length} / ${this.maxLength}` :
            '';
    }
    handleFocusin() {
        this.focused = true;
    }
    handleFocusout() {
        if (this.matches(':focus-within')) {
            // Changing focus to another child within the text field, like a button
            return;
        }
        this.focused = false;
    }
    handleInput(event) {
        this.dirty = true;
        this.value = event.target.value;
        this.redispatchEvent(event);
    }
    redispatchEvent(event) {
        redispatchEvent(this, event);
    }
    getInput() {
        if (!this.input) {
            // If the input is not yet defined, synchronously render.
            // e.g.
            // const textField = document.createElement('md-outlined-text-field');
            // document.body.appendChild(textField);
            // textField.focus(); // synchronously render
            this.connectedCallback();
            this.scheduleUpdate();
        }
        if (this.isUpdatePending) {
            // If there are pending updates, synchronously perform them. This ensures
            // that constraint validation properties (like `required`) are synced
            // before interacting with input APIs that depend on them.
            this.scheduleUpdate();
        }
        return this.input;
    }
    checkValidityAndDispatch() {
        const valid = this.getInput().checkValidity();
        let canceled = false;
        if (!valid) {
            canceled = !this.dispatchEvent(new Event('invalid', { cancelable: true }));
        }
        return { valid, canceled };
    }
    handleIconChange() {
        this.hasLeadingIcon = this.leadingIcons.length > 0;
        this.hasTrailingIcon = this.trailingIcons.length > 0;
    }
    /** @private */
    formResetCallback() {
        this.reset();
    }
    /** @private */
    formStateRestoreCallback(state) {
        this.value = state;
    }
}
_a$a = TextField;
(() => {
    requestUpdateOnAriaChange(_a$a);
})();
TextField.shadowRootOptions = { ...s$2.shadowRootOptions, delegatesFocus: true };
/** @nocollapse  */
TextField.formAssociated = true;
__decorate([
    n$8({ type: Boolean, reflect: true })
], TextField.prototype, "disabled", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], TextField.prototype, "error", void 0);
__decorate([
    n$8()
], TextField.prototype, "errorText", void 0);
__decorate([
    n$8()
], TextField.prototype, "label", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], TextField.prototype, "required", void 0);
__decorate([
    n$8()
], TextField.prototype, "value", void 0);
__decorate([
    n$8()
], TextField.prototype, "prefixText", void 0);
__decorate([
    n$8()
], TextField.prototype, "suffixText", void 0);
__decorate([
    n$8({ type: Boolean })
], TextField.prototype, "hasLeadingIcon", void 0);
__decorate([
    n$8({ type: Boolean })
], TextField.prototype, "hasTrailingIcon", void 0);
__decorate([
    n$8()
], TextField.prototype, "supportingText", void 0);
__decorate([
    n$8()
], TextField.prototype, "textDirection", void 0);
__decorate([
    n$8()
], TextField.prototype, "max", void 0);
__decorate([
    n$8({ type: Number })
], TextField.prototype, "maxLength", void 0);
__decorate([
    n$8()
], TextField.prototype, "min", void 0);
__decorate([
    n$8({ type: Number })
], TextField.prototype, "minLength", void 0);
__decorate([
    n$8()
], TextField.prototype, "pattern", void 0);
__decorate([
    n$8({ reflect: true, converter: stringConverter })
], TextField.prototype, "placeholder", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], TextField.prototype, "readOnly", void 0);
__decorate([
    n$8()
], TextField.prototype, "step", void 0);
__decorate([
    n$8({ reflect: true })
], TextField.prototype, "type", void 0);
__decorate([
    t$3()
], TextField.prototype, "dirty", void 0);
__decorate([
    t$3()
], TextField.prototype, "focused", void 0);
__decorate([
    t$3()
], TextField.prototype, "refreshErrorAlert", void 0);
__decorate([
    t$3()
], TextField.prototype, "nativeError", void 0);
__decorate([
    t$3()
], TextField.prototype, "nativeErrorText", void 0);
__decorate([
    i$5('input')
], TextField.prototype, "input", void 0);
__decorate([
    l$5({ slot: 'leadingicon' })
], TextField.prototype, "leadingIcons", void 0);
__decorate([
    l$5({ slot: 'trailingicon' })
], TextField.prototype, "trailingIcons", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled text field component.
 */
class FilledTextField extends TextField {
    constructor() {
        super(...arguments);
        this.fieldTag = i$1 `md-filled-field`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$A = i$4 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field{display:inline-flex;flex:1}.field{cursor:text;flex:1}.disabled .field{cursor:default}.counter{white-space:nowrap}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}input{appearance:none;background:none;border:none;caret-color:var(--_caret-color);color:currentColor;font:inherit;outline:none;padding:0;text-align:inherit;width:100%}input::placeholder{color:currentColor;opacity:1}input::-webkit-calendar-picker-indicator{display:none}@media(forced-colors: active){input{background-color:Field}}:focus-within input{caret-color:var(--_focus-caret-color)}.error:focus-within input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) input::placeholder{color:var(--_input-text-placeholder-color)}.prefix{padding-inline-end:var(--_input-text-prefix-padding)}.suffix{padding-inline-start:var(--_input-text-suffix-padding)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
let MdFilledTextField = class MdFilledTextField extends FilledTextField {
    constructor() {
        super(...arguments);
        this.fieldTag = i$1 `md-filled-field`;
    }
};
MdFilledTextField.styles = [styles$A, styles$B, styles$C];
MdFilledTextField = __decorate([
    e$a('md-filled-text-field')
], MdFilledTextField);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined field component.
 */
class OutlinedField extends Field {
    renderOutline(floatingLabel) {
        return x `
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${floatingLabel}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$z = i$4 `:host{--_container-padding-horizontal: var(--md-outlined-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-outlined-field-container-padding-vertical, 16px);--_container-shape: var(--md-outlined-field-container-shape, 4px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-type: var(--md-outlined-field-content-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 2px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, 0.75rem);--_label-text-type: var(--md-outlined-field-label-text-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-padding: var(--md-outlined-field-supporting-text-padding, 16px);--_supporting-text-padding-top: var(--md-outlined-field-supporting-text-padding-top, 4px);--_supporting-text-type: var(--md-outlined-field-supporting-text-type, 400 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto));--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var( --md-outlined-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-field-container-shape-end-start, var(--_container-shape) )}.outline{border-color:var(--_outline-color);border-radius:inherit;color:var(--_outline-color);display:flex;pointer-events:none;height:100%;position:absolute;width:100%}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - 2*var(--_container-padding-horizontal));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .start{padding-inline-start:max(var(--_container-padding-horizontal),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .end{padding-inline-end:max(var(--_container-padding-horizontal),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
let MdOutlinedField = class MdOutlinedField extends OutlinedField {
};
MdOutlinedField.styles = [styles$D, styles$z];
MdOutlinedField = __decorate([
    e$a('md-outlined-field')
], MdOutlinedField);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$y = i$4 `@media(forced-colors: active){:host{--md-outlined-text-field-disabled-input-text-color: GrayText;--md-outlined-text-field-disabled-input-text-opacity: 1;--md-outlined-text-field-disabled-label-text-color: GrayText;--md-outlined-text-field-disabled-label-text-opacity: 1;--md-outlined-text-field-disabled-leading-icon-color: GrayText;--md-outlined-text-field-disabled-leading-icon-opacity: 1;--md-outlined-text-field-disabled-outline-color: GrayText;--md-outlined-text-field-disabled-outline-opacity: 1;--md-outlined-text-field-disabled-supporting-text-color: GrayText;--md-outlined-text-field-disabled-supporting-text-opacity: 1;--md-outlined-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$x = i$4 `:host{--_container-padding-horizontal: var(--md-outlined-text-field-container-padding-horizontal, 16px);--_container-padding-vertical: var(--md-outlined-text-field-container-padding-vertical, 16px);--_input-text-prefix-padding: var(--md-outlined-text-field-input-text-prefix-padding, 2px);--_input-text-suffix-padding: var(--md-outlined-text-field-input-text-suffix-padding, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-outlined-text-field-container-shape, 4px);--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 2px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-type: var(--md-outlined-text-field-input-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, 1rem);--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, 0.75rem);--_label-text-type: var(--md-outlined-text-field-label-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-outlined-text-field-supporting-text-type, var(--md-sys-typescale-body-small, 400 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var( --md-outlined-text-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-text-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-text-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-text-field-container-shape-end-start, var(--_container-shape) );--md-outlined-field-container-padding-horizontal: var(--_container-padding-horizontal);--md-outlined-field-container-padding-vertical: var(--_container-padding-vertical);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-type: var(--_input-text-type);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-type: var(--_label-text-type);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-type: var(--_supporting-text-type);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined text field component
 */
class OutlinedTextField extends TextField {
    constructor() {
        super(...arguments);
        this.fieldTag = i$1 `md-outlined-field`;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
let MdOutlinedTextField = class MdOutlinedTextField extends OutlinedTextField {
    constructor() {
        super(...arguments);
        this.fieldTag = i$1 `md-outlined-field`;
    }
};
MdOutlinedTextField.styles = [styles$A, styles$x, styles$y];
MdOutlinedTextField = __decorate([
    e$a('md-outlined-text-field')
], MdOutlinedTextField);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$w = i$4 `@media(forced-colors: active){:host{--md-slider-active-track-color:CanvasText;--md-slider-disabled-active-track-color:GrayText;--md-slider-disabled-active-track-opacity:1;--md-slider-disabled-handle-color:GrayText;--md-slider-disabled-inactive-track-color:GrayText;--md-slider-disabled-inactive-track-opacity:1;--md-slider-focus-handle-color:CanvasText;--md-slider-handle-color:CanvasText;--md-slider-handle-shadow-color:Canvas;--md-slider-hover-handle-color:CanvasText;--md-slider-hover-state-layer-color:Canvas;--md-slider-hover-state-layer-opacity:1;--md-slider-inactive-track-color:Canvas;--md-slider-label-container-color:Canvas;--md-slider-label-label-text-color:CanvasText;--md-slider-pressed-handle-color:CanvasText;--md-slider-pressed-state-layer-color:Canvas;--md-slider-pressed-state-layer-opacity:1;--md-slider-with-overlap-handle-outline-color:CanvasText;--md-slider-with-tick-marks-active-container-color:Canvas;--md-slider-with-tick-marks-disabled-container-color:GrayText;--md-slider-with-tick-marks-inactive-container-color:CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n(n,o,r){return n?o():null==r?void 0:r()}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$9;
// Disable warning for classMap with destructuring
// tslint:disable:quoted-properties-on-dictionary
/** The default value for a continuous slider. */
const DEFAULT_VALUE = 50;
/** The default start value for a range slider. */
const DEFAULT_VALUE_START = 25;
/** The default end value for a range slider. */
const DEFAULT_VALUE_END = 75;
/**
 * Slider component.
 */
class Slider extends s$2 {
    /**
     * The HTML name to use in form submission.
     */
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The HTML name to use in form submission for a range slider's starting
     * value. Use `name` instead if both the start and end values should use the
     * same name.
     */
    get nameStart() {
        return this.getAttribute('name-start') ?? this.name;
    }
    set nameStart(name) {
        this.setAttribute('name-start', name);
    }
    /**
     * The HTML name to use in form submission for a range slider's ending value.
     * Use `name` instead if both the start and end values should use the same
     * name.
     */
    get nameEnd() {
        return this.getAttribute('name-end') ?? this.nameStart;
    }
    set nameEnd(name) {
        this.setAttribute('name-end', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.internals.form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this.internals.labels;
    }
    constructor() {
        super();
        /**
         * Whether or not the slider is disabled.
         */
        this.disabled = false;
        /**
         * The slider minimum value
         */
        this.min = 0;
        /**
         * The slider maximum value
         */
        this.max = 100;
        /**
         * The slider value displayed when range is false.
         */
        this.value = DEFAULT_VALUE;
        /**
         * The slider start value displayed when range is true.
         */
        this.valueStart = DEFAULT_VALUE_START;
        /**
         * The slider end value displayed when range is true.
         */
        this.valueEnd = DEFAULT_VALUE_END;
        /**
         * The step between values.
         */
        this.step = 1;
        /**
         * Whether or not to show tick marks.
         */
        this.tickmarks = false;
        /**
         * Whether or not to show a value label when activated.
         */
        this.labeled = false;
        /**
         * Whether or not to show a value range. When false, the slider displays
         * a slideable handle for the value property; when true, it displays
         * slideable handles for the valueStart and valueEnd properties.
         */
        this.range = false;
        // handle hover/pressed states are set manually since the handle
        // does not receive pointer events so that the native inputs are
        // interaction targets.
        this.handleStartHover = false;
        this.handleEndHover = false;
        this.startOnTop = false;
        this.handlesOverlapping = false;
        this.renderValueStart = 0;
        this.renderValueEnd = 0;
        // used in synthetic events generated to control ripple hover state.
        this.ripplePointerId = 1;
        // flag to prvent processing of re-dispatched input event.
        this.isRedisptchingEvent = false;
        this.internals = this /* needed for closure */.attachInternals();
        {
            this.addEventListener('click', (event) => {
                if (!isActivationClick(event) || !this.inputEnd) {
                    return;
                }
                this.focus();
                dispatchActivationClick(this.inputEnd);
            });
        }
    }
    focus() {
        this.inputEnd?.focus();
    }
    willUpdate(changed) {
        this.renderValueStart = changed.has('valueStart') ?
            this.valueStart :
            (this.inputStart?.valueAsNumber ?? 0);
        const endValueChanged = (changed.has('valueEnd') && this.range) || changed.has('value');
        this.renderValueEnd = endValueChanged ?
            (this.range ? this.valueEnd : this.value) :
            (this.inputEnd?.valueAsNumber ?? 0);
        // manually handle ripple hover state since the handle is pointer events
        // none.
        if (changed.get('handleStartHover') !== undefined) {
            this.toggleRippleHover(this.rippleStart, this.handleStartHover);
        }
        else if (changed.get('handleEndHover') !== undefined) {
            this.toggleRippleHover(this.rippleEnd, this.handleEndHover);
        }
    }
    update(changed) {
        if (changed.has('value') || changed.has('range') ||
            changed.has('valueStart') || changed.has('valueEnd')) {
            if (this.range) {
                const data = new FormData();
                data.append(this.nameStart, String(this.valueStart));
                data.append(this.nameEnd, String(this.valueEnd));
                this.internals.setFormValue(data);
            }
            else {
                this.internals.setFormValue(String(this.value));
            }
        }
        super.update(changed);
    }
    updated(changed) {
        // Validate input rendered value and re-render if necessary. This ensures
        // the rendred handle stays in sync with the input thumb which is used for
        // interaction. These can get out of sync if a supplied value does not
        // map to an exactly stepped value between min and max.
        if (this.range) {
            this.renderValueStart = this.inputStart.valueAsNumber;
        }
        this.renderValueEnd = this.inputEnd.valueAsNumber;
        if (changed.has('range') || changed.has('renderValueStart') ||
            changed.has('renderValueEnd') || this.isUpdatePending) {
            this.handlesOverlapping = isOverlapping(this.handleStart, this.handleEnd);
        }
        // called to finish the update imediately;
        // note, this is a no-op unless an update is scheduled
        this.performUpdate();
    }
    render() {
        const step = this.step === 0 ? 1 : this.step;
        const range = Math.max(this.max - this.min, step);
        const startFraction = this.range ? ((this.renderValueStart - this.min) / range) : 0;
        const endFraction = (this.renderValueEnd - this.min) / range;
        const containerStyles = {
            // for clipping inputs and active track.
            '--slider-start-fraction': String(startFraction),
            '--slider-end-fraction': String(endFraction),
            // for generating tick marks
            '--slider-tick-count': String(range / step),
        };
        const containerClasses = { ranged: this.range };
        // optional label values to show in place of the value.
        const labelStart = this.valueStartLabel ?? String(this.renderValueStart);
        const labelEnd = (this.range ? this.valueEndLabel : this.valueLabel) ??
            String(this.renderValueEnd);
        const inputStartProps = {
            start: true,
            value: this.renderValueStart,
            label: labelStart
        };
        const inputEndProps = {
            start: false,
            value: this.renderValueEnd,
            label: labelEnd
        };
        const handleStartProps = {
            start: true,
            hover: this.handleStartHover,
            label: labelStart
        };
        const handleEndProps = {
            start: false,
            hover: this.handleEndHover,
            label: labelEnd
        };
        const handleContainerClasses = {
            hover: this.handleStartHover || this.handleEndHover
        };
        return x `
      <div
        class="container ${o$1(containerClasses)}"
        style=${o(containerStyles)}
      >
        ${n(this.range, () => this.renderInput(inputStartProps))}
        ${this.renderInput(inputEndProps)}
        ${this.renderTrack()}
        <div class="handleContainerPadded">
          <div class="handleContainerBlock">
            <div class="handleContainer ${o$1(handleContainerClasses)}">
              ${n(this.range, () => this.renderHandle(handleStartProps))}
              ${this.renderHandle(handleEndProps)}
            </div>
          </div>
        </div>
      </div>`;
    }
    renderTrack() {
        const trackClasses = { 'tickmarks': this.tickmarks };
        return x `<div class="track ${o$1(trackClasses)}"></div>`;
    }
    renderLabel(value) {
        return x `<div class="label">
        <span class="labelContent" part="label">${value}</span>
      </div>`;
    }
    renderHandle({ start, hover, label }) {
        const onTop = !this.disabled && start === this.startOnTop;
        const isOverlapping = !this.disabled && this.handlesOverlapping;
        const name = start ? 'start' : 'end';
        return x `<div class="handle ${o$1({
            [name]: true,
            hover,
            onTop,
            isOverlapping
        })}">
      <div class="handleNub"><md-elevation></md-elevation></div>
      ${n(this.labeled, () => this.renderLabel(label))}
      <md-focus-ring for=${name}></md-focus-ring>
      <md-ripple for=${name} class=${name} ?disabled=${this.disabled}></md-ripple>
    </div>`;
    }
    renderInput({ start, value, label }) {
        const name = start ? `start` : `end`;
        // when ranged, ensure announcement includes value info.
        // Needed for closure conformance
        let { ariaLabel } = this;
        const { range, ariaLabelStart, ariaLabelEnd } = this;
        if (range) {
            ariaLabel = (start ? ariaLabelStart : ariaLabelEnd) ?? null;
        }
        return x `<input type="range"
      class="${o$1({
            start,
            end: !start
        })}"
      @focus=${this.handleFocus}
      @pointerdown=${this.handleDown}
      @pointerup=${this.handleUp}
      @pointerenter=${this.handleEnter}
      @pointermove=${this.handleMove}
      @pointerleave=${this.handleLeave}
      @keydown=${this.handleKeydown}
      @keyup=${this.handleKeyup}
      @input=${this.handleInput}
      @change=${this.handleChange}
      id=${name}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      .max=${String(this.max)}
      .step=${String(this.step)}
      .value=${String(value)}
      .tabIndex=${start ? 1 : 0}
      aria-label=${ariaLabel || A}
      aria-valuetext=${label}>`;
    }
    async toggleRippleHover(ripple, hovering) {
        const rippleEl = await ripple;
        if (!rippleEl) {
            return;
        }
        // TODO(b/269799771): improve slider ripple connection
        if (hovering) {
            rippleEl.handlePointerenter(new PointerEvent('pointerenter', { isPrimary: true, pointerId: this.ripplePointerId }));
        }
        else {
            rippleEl.handlePointerleave(new PointerEvent('pointerleave', { isPrimary: true, pointerId: this.ripplePointerId }));
        }
    }
    handleFocus(e) {
        this.updateOnTop(e.target);
    }
    startAction(e) {
        const target = e.target;
        const fixed = (target === this.inputStart) ? this.inputEnd : this.inputStart;
        this.action = {
            canFlip: e.type === 'pointerdown',
            flipped: false,
            target,
            fixed,
            values: new Map([[target, target.valueAsNumber], [fixed, fixed?.valueAsNumber]])
        };
    }
    finishAction(e) {
        this.action = undefined;
    }
    handleKeydown(e) {
        this.startAction(e);
    }
    handleKeyup(e) {
        this.finishAction(e);
    }
    handleDown(e) {
        this.startAction(e);
        this.ripplePointerId = e.pointerId;
        const isStart = e.target === this.inputStart;
        // Since handle moves to pointer on down and there may not be a move,
        // it needs to be considered hovered..
        this.handleStartHover =
            !this.disabled && isStart && Boolean(this.handleStart);
        this.handleEndHover = !this.disabled && !isStart && Boolean(this.handleEnd);
    }
    async handleUp(e) {
        const { target, values, flipped } = this.action ?? {};
        //  Async here for Firefox because input can be after pointerup
        //  when value is calmped.
        await new Promise(requestAnimationFrame);
        if (target !== undefined) {
            // Ensure Safari focuses input so label renders.
            // Ensure any flipped input is focused so the tab order is right.
            target.focus();
            // When action is flipped, change must be fired manually since the
            // real event target did not change.
            if (flipped && target.valueAsNumber !== values.get(target)) {
                target.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
        this.finishAction(e);
    }
    /**
     * The move handler tracks handle hovering to facilitate proper ripple
     * behavior on the slider handle. This is needed because user interaction with
     * the native input is leveraged to position the handle. Because the separate
     * displayed handle element has pointer events disabled (to allow interaction
     * with the input) and the input's handle is a pseudo-element, neither can be
     * the ripple's interactive element. Therefore the input is the ripple's
     * interactive element and has a `ripple` directive; however the ripple
     * is gated on the handle being hovered. In addition, because the ripple
     * hover state is being specially handled, it must be triggered independent
     * of the directive. This is done based on the hover state when the
     * slider is updated.
     */
    handleMove(e) {
        this.handleStartHover = !this.disabled && inBounds(e, this.handleStart);
        this.handleEndHover = !this.disabled && inBounds(e, this.handleEnd);
    }
    handleEnter(e) {
        this.handleMove(e);
    }
    handleLeave() {
        this.handleStartHover = false;
        this.handleEndHover = false;
    }
    updateOnTop(input) {
        this.startOnTop = input.classList.contains('start');
    }
    needsClamping() {
        const { target, fixed } = this.action;
        const isStart = target === this.inputStart;
        return isStart ? target.valueAsNumber > fixed.valueAsNumber :
            target.valueAsNumber < fixed.valueAsNumber;
    }
    // if start/end start coincident and the first drag input would e.g. move
    // start > end, avoid clamping and "flip" to use the other input
    // as the action target.
    isActionFlipped() {
        const action = this.action;
        const { target, fixed, values } = action;
        if (action.canFlip) {
            const coincident = values.get(target) === values.get(fixed);
            if (coincident && this.needsClamping()) {
                action.canFlip = false;
                action.flipped = true;
                action.target = fixed;
                action.fixed = target;
            }
        }
        return action.flipped;
    }
    // when flipped, apply the drag input to the flipped target and reset
    // the actual target.
    flipAction() {
        const { target, fixed, values } = this.action;
        const changed = target.valueAsNumber !== fixed.valueAsNumber;
        target.valueAsNumber = fixed.valueAsNumber;
        fixed.valueAsNumber = values.get(fixed);
        return changed;
    }
    // clamp such that start does not move beyond end and visa versa.
    clampAction() {
        if (!this.needsClamping()) {
            return false;
        }
        const { target, fixed } = this.action;
        target.valueAsNumber = fixed.valueAsNumber;
        return true;
    }
    handleInput(e) {
        // avoid processing a re-dispatched event
        if (this.isRedisptchingEvent) {
            return;
        }
        let stopPropagation = false, redispatch = false;
        if (this.range) {
            if (this.isActionFlipped()) {
                stopPropagation = true;
                redispatch = this.flipAction();
            }
            if (this.clampAction()) {
                stopPropagation = true;
                redispatch = false;
            }
        }
        const { target } = this.action;
        this.updateOnTop(target);
        // update value only on interaction
        if (this.range) {
            this.valueStart = this.inputStart.valueAsNumber;
            this.valueEnd = this.inputEnd.valueAsNumber;
        }
        else {
            this.value = this.inputEnd.valueAsNumber;
        }
        // control external visibility of input event
        if (stopPropagation) {
            e.stopPropagation();
        }
        // ensure event path is correct when flipped.
        if (redispatch) {
            this.isRedisptchingEvent = true;
            redispatchEvent(target, e);
            this.isRedisptchingEvent = false;
        }
    }
    handleChange(e) {
        // prevent keyboard triggered changes from dispatching for
        // clamped values; note, this only occurs for keyboard
        const changeTarget = e.target;
        const { target, values } = this.action ?? {};
        const squelch = (target && (target.valueAsNumber === values.get(changeTarget)));
        if (!squelch) {
            redispatchEvent(this, e);
        }
        // ensure keyboard triggered change clears action.
        this.finishAction(e);
    }
    /** @private */
    formResetCallback() {
        if (this.range) {
            this.valueStart =
                Number(this.getAttribute('value-start') ?? DEFAULT_VALUE_START);
            this.valueEnd =
                Number(this.getAttribute('value-end') ?? DEFAULT_VALUE_END);
            return;
        }
        this.value = Number(this.getAttribute('value') ?? DEFAULT_VALUE);
    }
    /** @private */
    formStateRestoreCallback(state) {
        if (Array.isArray(state)) {
            const [[, valueStart], [, valueEnd]] = state;
            this.valueStart = Number(valueStart ?? DEFAULT_VALUE_START);
            this.valueEnd = Number(valueEnd ?? DEFAULT_VALUE_START);
            this.range = true;
            return;
        }
        this.value = Number(state ?? DEFAULT_VALUE);
        this.range = false;
    }
}
_a$9 = Slider;
(() => {
    requestUpdateOnAriaChange(_a$9);
})();
Slider.shadowRootOptions = { ...s$2.shadowRootOptions, delegatesFocus: true };
/** @nocollapse */
Slider.formAssociated = true;
__decorate([
    n$8({ type: Boolean, reflect: true })
], Slider.prototype, "disabled", void 0);
__decorate([
    n$8({ type: Number })
], Slider.prototype, "min", void 0);
__decorate([
    n$8({ type: Number })
], Slider.prototype, "max", void 0);
__decorate([
    n$8({ type: Number })
], Slider.prototype, "value", void 0);
__decorate([
    n$8({ type: Number, attribute: 'value-start' })
], Slider.prototype, "valueStart", void 0);
__decorate([
    n$8({ type: Number, attribute: 'value-end' })
], Slider.prototype, "valueEnd", void 0);
__decorate([
    n$8()
], Slider.prototype, "valueLabel", void 0);
__decorate([
    n$8()
], Slider.prototype, "valueStartLabel", void 0);
__decorate([
    n$8()
], Slider.prototype, "valueEndLabel", void 0);
__decorate([
    n$8({ attribute: 'aria-label-start' })
], Slider.prototype, "ariaLabelStart", void 0);
__decorate([
    n$8({ attribute: 'aria-label-end' })
], Slider.prototype, "ariaLabelEnd", void 0);
__decorate([
    n$8({ type: Number })
], Slider.prototype, "step", void 0);
__decorate([
    n$8({ type: Boolean })
], Slider.prototype, "tickmarks", void 0);
__decorate([
    n$8({ type: Boolean })
], Slider.prototype, "labeled", void 0);
__decorate([
    n$8({ type: Boolean })
], Slider.prototype, "range", void 0);
__decorate([
    i$5('input.start')
], Slider.prototype, "inputStart", void 0);
__decorate([
    i$5('.handle.start')
], Slider.prototype, "handleStart", void 0);
__decorate([
    e$7('md-ripple.start')
], Slider.prototype, "rippleStart", void 0);
__decorate([
    i$5('input.end')
], Slider.prototype, "inputEnd", void 0);
__decorate([
    i$5('.handle.end')
], Slider.prototype, "handleEnd", void 0);
__decorate([
    e$7('md-ripple.end')
], Slider.prototype, "rippleEnd", void 0);
__decorate([
    t$3()
], Slider.prototype, "handleStartHover", void 0);
__decorate([
    t$3()
], Slider.prototype, "handleEndHover", void 0);
__decorate([
    t$3()
], Slider.prototype, "startOnTop", void 0);
__decorate([
    t$3()
], Slider.prototype, "handlesOverlapping", void 0);
__decorate([
    t$3()
], Slider.prototype, "renderValueStart", void 0);
__decorate([
    t$3()
], Slider.prototype, "renderValueEnd", void 0);
function inBounds({ x, y }, element) {
    if (!element) {
        return false;
    }
    const { top, left, bottom, right } = element.getBoundingClientRect();
    return x >= left && x <= right && y >= top && y <= bottom;
}
function isOverlapping(elA, elB) {
    if (!(elA && elB)) {
        return false;
    }
    const a = elA.getBoundingClientRect();
    const b = elB.getBoundingClientRect();
    return !(a.top > b.bottom || a.right < b.left || a.bottom < b.top ||
        a.left > b.right);
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$v = i$4 `:host{display:inline-flex;vertical-align:middle;--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, 9999px);--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, 9999px);--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, 9999px);--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_label-label-text-color: var(--md-slider-label-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-label-text-type: var(--md-slider-label-label-text-type, var(--md-sys-typescale-label-medium, 500 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));min-inline-size:200px;--md-elevation-level:var(--_handle-elevation);--md-elevation-shadow-color:var(--_handle-shadow-color)}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level:var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track{position:absolute;inset:0;display:flex;align-items:center}.track::before,.track::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--slider-tick-count)) 100%}.track::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape);background-color:var(--_inactive-track-color)}.track.tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background-color:var(--_disabled-inactive-track-color)}.track::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)));background-color:var(--_active-track-color)}:host-context([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))))}:host([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-end-fraction))))}.track.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::after{background-color:var(--_disabled-active-track-color)}:host([disabled]) .track.tickmarks::before,:host([disabled]) .track.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--slider-start-fraction));inline-size:calc(100%*(var(--slider-end-fraction) - var(--slider-start-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:grid;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.end:focus~.handleContainerPadded .handle.end>.handleNub,input.start:focus~.handleContainerPadded .handle.start>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.end:active~.handleContainerPadded .handle.end>.handleNub,:host(:not([disabled])) input.start:active~.handleContainerPadded .handle.start>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .handleNub,.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.start{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle.end{inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:grid;padding:4px;place-items:center;border-radius:9999px;color:var(--_label-label-text-color);font:var(--_label-label-text-type);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label,:where(:has(input:active)) .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.start{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))) 0 0)}:host-context([dir=rtl]) .ranged input.start{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))))}:host([dir=rtl]) .ranged input.start{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))))}.ranged input.start:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2))))}.ranged input.end{clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)))}:host-context([dir=rtl]) .ranged input.end{clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)) 0 0)}:host([dir=rtl]) .ranged input.end{clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)) 0 0)}.ranged input.end:dir(rtl){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-start-fraction) + (var(--slider-end-fraction) - var(--slider-start-fraction)) / 2)) 0 0)}.onTop{z-index:1}md-focus-ring{--md-focus-ring-outward-offset: -2px}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}/*# sourceMappingURL=slider-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Sliders allow users to view and select a value (or range) along
 * a track.
 *
 * @description
 * Changes made with sliders are immediate, allowing the user to make slider
 * adjustments while determining a selection. Sliders shouldn’t be used to
 * adjust settings with any delay in providing user feedback. Sliders reflect
 * the current state of the settings they control.
 *
 * __Example usages:__
 * - Sliders are ideal for adjusting settings such as volume and brightness, or
 * for applying image filters.
 */
let MdSlider = class MdSlider extends Slider {
};
MdSlider.styles = [styles$v, styles$w];
MdSlider = __decorate([
    e$a('md-slider')
], MdSlider);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// This is required for decorators.
// tslint:disable:no-new-decorators
/**
 * Default close action.
 */
const CLOSE_ACTION = 'close';
const OPENING_TRANSITION_PROP = '--_opening-transition-duration';
const CLOSING_TRANSITION_PROP = '--_closing-transition-duration';
/**
 * A dialog component.
 */
class Dialog extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Opens the dialog when set to `true` and closes it when set to `false`.
         */
        this.open = false;
        /**
         * Setting fullscreen displays the dialog fullscreen on small screens.
         * This can be customized via the `fullscreenBreakpoint` property.
         * When showing fullscreen, the header will take up less vertical space, and
         * the dialog will have a `showing-fullscreen`attribute, allowing content to
         * be styled in this state.
         *
         * Dialogs can be sized by setting:
         *
         * * --md-dialog-container-min-block-size
         * * --md-dialog-container-max-block-size
         * * --md-dialog-container-min-inline-size
         * * --md-dialog-container-max-inline-size
         *
         * These are typically configured via media queries and are independent of the
         * fullscreen setting.
         */
        this.fullscreen = false;
        /**
         * A media query string specifying the breakpoint at which the dialog
         * should be shown fullscreen. Note, this only applies when the `fullscreen`
         * property is set.
         *
         * By default, the dialog is shown fullscreen on screens less than 600px wide
         * or 400px tall.
         */
        this.fullscreenBreakpoint = '(max-width: 600px), (max-height: 400px)';
        /**
         * Hides the dialog footer, making any content slotted into the footer
         * inaccessible.
         */
        this.footerHidden = false;
        /**
         * Renders footer content in a vertically stacked alignment rather than the
         * normal horizontal alignment.
         */
        this.stacked = false;
        /**
         * When the dialog is closed it disptaches `closing` and `closed` events.
         * These events have an action property which has a default value of
         * the value of this property. Specific actions have explicit values but when
         * a value is not specified, the default is used. For example, clicking the
         * scrim, pressing escape, or clicking a button with an action attribute set
         * produce an explicit action.
         *
         * Defaults to `close`.
         */
        this.defaultAction = CLOSE_ACTION;
        /**
         * The name of an attribute which can be placed on any element slotted into
         * the dialog. If an element has an action attribute set, clicking it will
         * close the dialog and the `closing` and `closed` events dispatched will
         * have their action property set the value of this attribute on the
         * clicked element.The default valus is `dialogAction`. For example,
         *
         *   <md-dialog>
         *    Content
         *     <md-filled-button slot="footer"dialogAction="buy">
         *       Buy
         *     </md-filled-button>
         *   </md-dialog>
         */
        this.actionAttribute = 'dialogAction';
        /**
         * When the dialog is opened, it will focus the first element which has
         * an attribute name matching this property. The default value is
         * `dialogFocus`. For example:
         *
         *  <md-dialog>
         *    <md-filled-text-field
         *      label="Enter some text"
         *      dialogFocus
         *    >
         *    </md-filled-text-field>
         *  </md-dialog>
         */
        this.focusAttribute = 'dialogFocus';
        /**
         * Clicking on the scrim surrounding the dialog closes the dialog.
         * The `closing` and `closed` events this produces have an `action` property
         * which is the value of this property and defaults to `close`.
         */
        this.scrimClickAction = CLOSE_ACTION;
        /**
         * Pressing the `escape` key while the dialog is open closes the dialog.
         * The `closing` and `closed` events this produces have an `action` property
         * which is the value of this property and defaults to `close`.
         */
        this.escapeKeyAction = CLOSE_ACTION;
        /**
         * When opened, the dialog is displayed modeless or non-modal. This
         * allows users to interact with content outside the dialog without
         * closing the dialog and does not display the scrim around the dialog.
         */
        this.modeless = false;
        /**
         * Set to make the dialog position draggable.
         */
        this.draggable = false;
        this.throttle = createThrottle();
        /**
         * Private properties that reflect for styling manually in `updated`.
         */
        this.showingFullscreen = false;
        this.showingOpen = false;
        this.opening = false;
        this.closing = false;
        /**
         * Transition kind. Supported options include: grow, shrink, grow-down,
         * grow-up, grow-left, and grow-right.
         *
         * Defaults to grow-down.
         */
        this.transition = 'grow-down';
        this.dragging = false;
        this.dragMargin = 8;
        this.fullscreenQueryListener = undefined;
    }
    static setDocumentScrollingDisabled(disabled = false) {
        let { preventedScrollingCount, scrollbarTester } = Dialog;
        Dialog.preventedScrollingCount = preventedScrollingCount =
            Math.max(preventedScrollingCount + (Number(disabled) || -1), 0);
        const shouldPrevent = Boolean(preventedScrollingCount);
        const { style } = document.body;
        if (shouldPrevent && style.overflow === 'hidden') {
            return;
        }
        if (scrollbarTester === undefined) {
            Dialog.scrollbarTester = scrollbarTester = document.createElement('div');
            scrollbarTester.style.cssText =
                `position: absolute; height: 0; width: 100%; visibility: hidden; pointer-events: none;`;
        }
        // Appends an element to see if its offsetWidth changes when overflow is
        // altered. If it does, then add end inline padding to restore the width to
        // avoid a visible layout shift.
        document.body.append(scrollbarTester);
        const { offsetWidth } = scrollbarTester;
        style.overflow = shouldPrevent ? 'hidden' : '';
        const scrollbarWidth = scrollbarTester.offsetWidth - offsetWidth;
        scrollbarTester.remove();
        style.paddingInlineEnd = shouldPrevent ? `${scrollbarWidth}px` : '';
    }
    /**
     * Opens and shows the dialog. This is equivalent to setting the `open`
     * property to true.
     */
    show() {
        this.open = true;
    }
    /**
     * Closes the dialog. This is equivalent to setting the `open`
     * property to false.
     */
    close(action = '') {
        this.currentAction = action;
        this.open = false;
    }
    /**
     * Opens and shows the dialog if it is closed; otherwise closes it.
     */
    toggleShow() {
        if (this.open) {
            this.close(this.currentAction);
        }
        else {
            this.show();
        }
    }
    getContentScrollInfo() {
        if (!this.hasUpdated || !this.contentElement) {
            return { isScrollable: false, isAtScrollTop: true, isAtScrollBottom: true };
        }
        const { scrollTop, scrollHeight, offsetHeight, clientHeight } = this.contentElement;
        return {
            isScrollable: scrollHeight > offsetHeight,
            isAtScrollTop: scrollTop === 0,
            isAtScrollBottom: Math.abs(Math.round(scrollHeight - scrollTop) - clientHeight) <= 2
        };
    }
    render() {
        const { isScrollable, isAtScrollTop, isAtScrollBottom } = this.getContentScrollInfo();
        return x `
    <dialog
      @close=${this.handleDialogDismiss}
      @cancel=${this.handleDialogDismiss}
      @click=${this.handleDialogClick}
      class="dialog ${o$1({
            'stacked': this.stacked,
            'scrollable': isScrollable,
            'scroll-divider-header': !isAtScrollTop,
            'scroll-divider-footer': !isAtScrollBottom,
            'footerHidden': this.footerHidden
        })}"
      aria-labelledby="header"
      aria-describedby="content"
    >
      <div class="container ${o$1({
            'dragging': this.dragging
        })}"
        @pointermove=${this.handlePointerMove}
        @pointerup=${this.handleDragEnd}
      >
        <md-elevation></md-elevation>
        <header class="header">
          <slot name="header">
            <slot name="headline-prefix"></slot>
            <slot name="headline"></slot>
            <slot name="headline-suffix"></slot>
          </slot>
        </header>
        <section class="content" @scroll=${this.handleContentScroll}>
          <slot></slot>
        </section>
        <footer class="footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </dialog>`;
    }
    willUpdate(changed) {
        if (changed.has('open')) {
            this.opening = this.open;
            // only closing if was opened previously...
            this.closing = !this.open && changed.get('open');
        }
        if (changed.has('fullscreen') || changed.has('fullscreenBreakpoint')) {
            this.updateFullscreen();
        }
    }
    firstUpdated() {
        // Update when content size changes to show/hide scroll dividers.
        new ResizeObserver(() => {
            if (this.showingOpen) {
                this.requestUpdate();
            }
        }).observe(this.contentElement);
    }
    updated(changed) {
        if (changed.get('draggable') && !this.draggable) {
            this.style.removeProperty('--_container-drag-inline-start');
            this.style.removeProperty('--_container-drag-block-start');
        }
        // Reflect internal state to facilitate styling.
        this.reflectStateProp(changed, 'opening', this.opening);
        this.reflectStateProp(changed, 'closing', this.closing);
        this.reflectStateProp(changed, 'showingFullscreen', this.showingFullscreen, 'showing-fullscreen');
        this.reflectStateProp(changed, 'showingOpen', this.showingOpen, 'showing-open');
        if (!changed.has('open')) {
            return;
        }
        // prevent body scrolling early only when opening to avoid layout
        // shift when closing.
        if (!this.modeless && this.open) {
            Dialog.setDocumentScrollingDisabled(this.open);
        }
        if (this.open) {
            this.contentElement.scrollTop = 0;
            if (this.modeless) {
                this.dialogElement.show();
            }
            else {
                // Note, native focus handling fails when focused element is in an
                // overflow: auto container.
                this.dialogElement.showModal();
            }
        }
        // Avoids dispatching initial state.
        const shouldDispatchAction = changed.get('open') !== undefined;
        this.performTransition(shouldDispatchAction);
    }
    /**
     * Internal state is reflected here as attributes to effect styling. This
     * could be done via internal classes, but it's published on the host
     * to facilitate the (currently undocumented) possibility of customizing
     * styling of user content based on these states.
     * Note, in the future this could be done with `:state(...)` when browser
     * support improves.
     */
    reflectStateProp(changed, key, value, attribute) {
        attribute ?? (attribute = key);
        if (!changed.has(key)) {
            return;
        }
        if (value) {
            this.setAttribute(attribute, '');
        }
        else {
            this.removeAttribute(attribute);
        }
    }
    async performTransition(shouldDispatchAction) {
        // TODO: pause here only to avoid a double update warning.
        await this.updateComplete;
        this.showingOpen = this.open;
        if (shouldDispatchAction) {
            this.dispatchActionEvent(this.open ? 'opening' : 'closing');
        }
        // Compute desired transition duration.
        const duration = msFromTimeCSSValue(getComputedStyle(this).getPropertyValue(this.open ? OPENING_TRANSITION_PROP : CLOSING_TRANSITION_PROP));
        let promise = this.updateComplete;
        if (duration > 0) {
            promise = new Promise((r) => {
                setTimeout(r, duration);
            });
        }
        await promise;
        this.opening = false;
        this.closing = false;
        if (!this.open && this.dialogElement?.open) {
            // Closing the dialog triggers an asynchronous `close` event.
            // It's important to wait for this event to fire since it changes the
            // state of `open` to false.
            // Without waiting, this element's `closed` event can be called before
            // the dialog's `close` event, which is problematic since the user
            // can set `open` in the `closed` event.
            // The timing of the event appears to vary via browser and does *not*
            // seem to resolve by "task" timing; therefore an explicit promise is
            // used.
            const closedPromise = new Promise(resolve => {
                this.dialogClosedResolver = resolve;
            });
            this.dialogElement?.close(this.currentAction || this.defaultAction);
            await closedPromise;
            // enable scrolling late to avoid layout shift when closing
            if (!this.modeless) {
                Dialog.setDocumentScrollingDisabled(this.open);
            }
        }
        // Focus initial element.
        if (this.open) {
            this.focus();
        }
        if (shouldDispatchAction) {
            this.dispatchActionEvent(this.open ? 'opened' : 'closed');
        }
        this.currentAction = undefined;
    }
    dispatchActionEvent(type) {
        const detail = { action: this.open ? 'none' : this.currentAction };
        this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true }));
    }
    updateFullscreen() {
        if (this.fullscreenQuery !== undefined) {
            this.fullscreenQuery.removeEventListener('change', this.fullscreenQueryListener);
            this.fullscreenQuery = this.fullscreenQueryListener = undefined;
        }
        if (!this.fullscreen) {
            this.showingFullscreen = false;
            return;
        }
        this.fullscreenQuery = window.matchMedia(this.fullscreenBreakpoint);
        this.fullscreenQuery.addEventListener('change', (this.fullscreenQueryListener = (event) => {
            this.showingFullscreen = event.matches;
        }));
        this.showingFullscreen = this.fullscreenQuery.matches;
    }
    // handles native close/cancel events and we just ensure
    // internal state is in sync.
    handleDialogDismiss(e) {
        if (e.type === 'cancel') {
            this.currentAction = this.escapeKeyAction;
            // Prevents the <dialog> element from closing when
            // `escapeKeyAction` is set to an empty string.
            // It also early returns and avoids <md-dialog> internal state
            // changes.
            if (this.escapeKeyAction === '') {
                e.preventDefault();
                return;
            }
        }
        this.dialogClosedResolver?.();
        this.dialogClosedResolver = undefined;
        this.open = false;
        this.opening = false;
        this.closing = false;
    }
    handleDialogClick(e) {
        if (!this.open) {
            return;
        }
        this.currentAction =
            e.target.getAttribute(this.actionAttribute) ??
                (!this.modeless && this.containerElement &&
                    !e.composedPath().includes(this.containerElement) ?
                    this.scrimClickAction :
                    '');
        if (this.currentAction !== '') {
            this.close(this.currentAction);
        }
    }
    /* This allows the dividers to dynamically show based on scrolling. */
    handleContentScroll() {
        this.throttle('scroll', () => {
            this.requestUpdate();
        });
    }
    getFocusElement() {
        const selector = `[${this.focusAttribute}]`;
        const slotted = [this.footerSlot, this.contentSlot].flatMap(slot => slot.assignedElements({ flatten: true }));
        for (const el of slotted) {
            const focusEl = el.matches(selector) ? el : el.querySelector(selector);
            if (focusEl) {
                return focusEl;
            }
        }
        return null;
    }
    focus() {
        this.getFocusElement()?.focus();
    }
    blur() {
        this.getFocusElement()?.blur();
    }
    canStartDrag(e) {
        if (this.draggable === false || e.defaultPrevented || !(e.buttons & 1) ||
            !this.headerElement || !e.composedPath().includes(this.headerElement)) {
            return false;
        }
        return true;
    }
    handlePointerMove(e) {
        if (!this.dragging && !this.canStartDrag(e) || !this.containerElement) {
            return;
        }
        const { top, left, height, width } = this.containerElement.getBoundingClientRect();
        if (!this.dragging) {
            this.containerElement.setPointerCapture(e.pointerId);
            this.dragging = true;
            const { x, y } = e;
            this.dragInfo = [x, y, top, left];
        }
        const [sx, sy, st, sl] = this.dragInfo ?? [0, 0, 0, 0];
        const dx = e.x - sx;
        const dy = e.y - sy;
        const ml = window.innerWidth - width - this.dragMargin;
        const mt = window.innerHeight - height - this.dragMargin;
        const l = Math.max(this.dragMargin, Math.min(ml, dx + sl));
        const t = Math.max(this.dragMargin, Math.min(mt, dy + st));
        this.style.setProperty('--_container-drag-inline-start', `${l}px`);
        this.style.setProperty('--_container-drag-block-start', `${t}px`);
    }
    handleDragEnd(e) {
        if (!this.dragging) {
            return;
        }
        this.containerElement?.releasePointerCapture(e.pointerId);
        this.dragging = false;
        this.dragInfo = undefined;
    }
}
Dialog.preventedScrollingCount = 0;
__decorate([
    n$8({ type: Boolean })
], Dialog.prototype, "open", void 0);
__decorate([
    n$8({ type: Boolean })
], Dialog.prototype, "fullscreen", void 0);
__decorate([
    n$8()
], Dialog.prototype, "fullscreenBreakpoint", void 0);
__decorate([
    n$8({ type: Boolean })
], Dialog.prototype, "footerHidden", void 0);
__decorate([
    n$8({ type: Boolean })
], Dialog.prototype, "stacked", void 0);
__decorate([
    n$8()
], Dialog.prototype, "defaultAction", void 0);
__decorate([
    n$8()
], Dialog.prototype, "actionAttribute", void 0);
__decorate([
    n$8()
], Dialog.prototype, "focusAttribute", void 0);
__decorate([
    n$8()
], Dialog.prototype, "scrimClickAction", void 0);
__decorate([
    n$8()
], Dialog.prototype, "escapeKeyAction", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], Dialog.prototype, "modeless", void 0);
__decorate([
    n$8({ type: Boolean })
], Dialog.prototype, "draggable", void 0);
__decorate([
    i$5('.dialog', true)
], Dialog.prototype, "dialogElement", void 0);
__decorate([
    i$5('slot[name=footer]', true)
], Dialog.prototype, "footerSlot", void 0);
__decorate([
    i$5('slot:not([name])', true)
], Dialog.prototype, "contentSlot", void 0);
__decorate([
    i$5(`.content`, true)
], Dialog.prototype, "contentElement", void 0);
__decorate([
    i$5(`.container`, true)
], Dialog.prototype, "containerElement", void 0);
__decorate([
    i$5(`.header`, true)
], Dialog.prototype, "headerElement", void 0);
__decorate([
    t$3()
], Dialog.prototype, "showingFullscreen", void 0);
__decorate([
    t$3()
], Dialog.prototype, "showingOpen", void 0);
__decorate([
    t$3()
], Dialog.prototype, "opening", void 0);
__decorate([
    t$3()
], Dialog.prototype, "closing", void 0);
__decorate([
    n$8({ reflect: true })
], Dialog.prototype, "transition", void 0);
__decorate([
    t$3()
], Dialog.prototype, "dragging", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$u = i$4 `:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation: var(--md-dialog-container-elevation, 3);--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-type: var(--md-dialog-headline-type, var(--md-sys-typescale-headline-small, 400 1.5rem / 2rem var(--md-ref-typeface-brand, Roboto)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-type: var(--md-dialog-supporting-text-type, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_with-icon-icon-color: var(--md-dialog-with-icon-icon-color, var(--md-sys-color-secondary, #625b71));--_with-icon-icon-size: var(--md-dialog-with-icon-icon-size, 24px);--_container-max-inline-size: var(--md-dialog-container-max-inline-size, min(560px, 100% - 48px));--_container-min-inline-size: var(--md-dialog-container-min-inline-size, 280px);--_container-max-block-size: var(--md-dialog-container-max-block-size, min(560px, 100% - 48px));--_container-min-block-size: var(--md-dialog-container-min-block-size, 140px);--_container-inset-inline-start: var(--md-dialog-container-inset-inline-start, auto);--_container-inset-inline-end: var(--md-dialog-container-inset-inline-end, auto);--_container-inset-block-start: var(--md-dialog-container-inset-block-start, auto);--_container-inset-block-end: var(--md-dialog-container-inset-block-end, auto);--_opening-transition-duration: var(--md-dialog-opening-transition-duration, 400ms);--_opening-transition-easing: var(--md-dialog-opening-transition-easing, cubic-bezier(0.05, 0.7, 0.1, 1));--_closing-transition-duration: var(--md-dialog-closing-transition-duration, 200ms);--_closing-transition-easing: var(--md-dialog-closing-transition-easing, cubic-bezier(0.3, 0, 0.8, 0.15));--_scrim-color: var(--md-dialog-scrim-color, rgba(0, 0, 0, 0.32));--_container-block-padding: var(--md-dialog-container-block-padding, 24px);--_container-inline-padding: var(--md-dialog-container-inline-padding, 24px);--_header-spacing: var(--md-dialog-header-spacing, 16px);--_action-spacing: var(--md-dialog-action-spacing, 8px);--_content-block-start-spacing: var(--md-dialog-content-block-start-spacing, 16px);--_content-block-end-spacing: var(--md-dialog-content-block-end-spacing, 24px);--_with-divider-divider-height: var(--md-dialog-with-divider-divider-height, 1px);--_with-divider-divider-color: var(--md-dialog-with-divider-divider-color, var(--md-sys-color-outline, #79747e));--_fullscreen-header-block-size: var(--md-dialog-fullscreen-header-block-size, 56px);--_fullscreen-footer-block-size: var(--md-dialog-fullscreen-footer-block-size, 56px);--_fullscreen-container-block-padding: var(--md-dialog-fullscreen-container-block-padding, 8px);--_container-drag-inline-start: initial;--_container-drag-block-start: initial}@media(prefers-reduced-motion: reduce){:host{--_opening-transition-duration: 0;--_closing-transition-duration: 0}}.dialog{position:fixed;align-items:center;justify-content:center;box-sizing:border-box;inset:0;block-size:100dvh;inline-size:100dvw;max-block-size:100dvh;max-inline-size:100dvw;border:none;background:rgba(0,0,0,0);padding:0;margin:0;overflow:clip}.dialog:not(:modal){z-index:10000;pointer-events:none}.dialog[open]{display:flex}.dialog::backdrop{background:none}.dialog::before{content:"";position:absolute;z-index:-1;inset:0;block-size:100dvh;inline-size:100dvw;pointer-events:none}:host([modeless]) .dialog:before{display:none}.container{position:absolute;inset-inline-start:var(--_container-drag-inline-start, var(--_container-inset-inline-start));inset-inline-end:var(--_container-inset-inline-end);inset-block-start:var(--_container-drag-block-start, var(--_container-inset-block-start));inset-block-end:var(--_container-inset-block-end);background-color:var(--_container-color);border-radius:var(--_container-shape);display:flex;flex-direction:column;box-sizing:border-box;pointer-events:auto;min-block-size:var(--_container-min-block-size);max-block-size:var(--_container-max-block-size);min-inline-size:var(--_container-min-inline-size);max-inline-size:var(--_container-max-inline-size);padding-block-start:var(--_container-block-padding);padding-block-end:var(--_container-block-padding)}md-elevation{--md-elevation-level:var(--_container-elevation)}.container>*{box-sizing:border-box;padding-inline-start:var(--_container-inline-padding);padding-inline-end:var(--_container-inline-padding)}.header{display:flex;flex-direction:column;align-items:center;gap:var(--_header-spacing);-webkit-font-smoothing:antialiased;color:var(--_headline-color);font:var(--_headline-type)}.content{flex:1;overflow:auto;margin-block-start:var(--_content-block-start-spacing);margin-block-end:var(--_content-block-end-spacing);-webkit-font-smoothing:antialiased;color:var(--_supporting-text-color);font:var(--_supporting-text-type)}.footer{display:flex;position:relative;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;gap:var(--_action-spacing)}.footerHidden{--_content-block-end-spacing: 0px}.footerHidden .footer{display:none}.stacked .footer{flex-direction:column;align-items:flex-end}.scrollable .content{border-block-start:var(--_with-divider-divider-height) solid rgba(0,0,0,0);border-block-end:var(--_with-divider-divider-height) solid rgba(0,0,0,0)}.scroll-divider-header .content{border-block-start-color:var(--_with-divider-divider-color)}.scroll-divider-footer:not(.footerHidden) .content{border-block-end-color:var(--_with-divider-divider-color)}.dragging{user-select:none;cursor:move;touch-action:none}.container{will-change:transform,opacity;transition-property:transform;overflow:hidden}.container>*{transition-timing-function:inherit;transition-duration:inherit;transition-property:opacity,transform;will-change:transform,opacity;opacity:0}:host([transition][showing-open]) .container>*{opacity:1;transform:none}:host([transition][showing-open]) .container{opacity:1;transform:none}.dialog::before{transition:background-color linear;background-color:rgba(0,0,0,0)}:host([showing-open]) .dialog::before{background-color:var(--_scrim-color)}:host([opening]) .dialog::before{transition-duration:calc(var(--_opening-transition-duration)/2)}:host([closing]) .dialog::before{transition-duration:calc(var(--_closing-transition-duration)/2)}:host([opening]) .container{transition-duration:var(--_opening-transition-duration);transition-timing-function:var(--_opening-transition-easing)}:host([closing]) .container{transition-duration:var(--_closing-transition-duration);transition-timing-function:var(--_closing-transition-easing)}:host([trasition][closing]) .container>*{transform:none;opacity:0}:host([transition=grow-down]){--_opening-transform: scale(1, 0.1) translateY(-20%);--_closing-transform: scale(1, 0.9) translateY(-10%);--_origin: top;--_opening-content-transform: scale(1, 2);--_origin-footer: bottom}:host([transition=grow-up]){--_opening-transform: scale(1, 0.1) translateY(20%);--_closing-transform: scale(1, 0.9) translateY(10%);--_origin: bottom;--_opening-content-transform: scale(1, 2);--_origin-footer: bottom}:host([transition=grow-left]){--_opening-transform: scale(0.1, 1) translateX(20%);--_closing-transform: scale(0.9, 1) translateX(10%);--_origin: right;--_opening-content-transform: none;--_origin-footer: none}:host([transition=grow-right]){--_opening-transform: scale(0.1, 1) translateX(-20%);--_closing-transform: scale(0.9, 1) translateX(-10%);--_origin: left;--_opening-content-transform: none;--_origin-footer: none}:host([transition^=grow-]) .container{transform-origin:var(--_origin);transform:var(--_opening-transform)}:host([transition^=grow-]) .container>*{transform-origin:var(--_origin);transform:var(--_opening-content-transform)}:host([transition^=grow-]) .footer{transform-origin:var(--_origin-footer)}:host([transition^=grow-][closing]){transform:var(--_closing-transform)}:host([transition=shrink]) .container{transform:scale(1.2)}:host([transition=grow]) .container{transform:scale(0.8)}:host([transition=shrink][closing]) .container,:host([transition=grow][closing]) .container{transition-duration:0;transform:none}:host([showing-fullscreen]){--_container-max-block-size: none;--_container-max-inline-size: none}:host([showing-fullscreen]) .container{block-size:100dvh;inline-size:100dvw;border-radius:0px;padding-block-start:0;padding-block-end:0}:host([showing-fullscreen]) .header{justify-content:space-between;flex-direction:row;max-block-size:var(--_fullscreen-header-block-size);padding-block-start:var(--_fullscreen-container-block-padding);padding-inline:4px;--_header-spacing: 4px}:host([showing-fullscreen]) .content{margin-block-start:0;margin-block-end:0}:host([showing-fullscreen]) .footer{max-block-size:var(--_fullscreen-footer-block-size);padding-block-end:var(--_fullscreen-container-block-padding)}:host([showing-fullscreen]) .scroll-divider-footer .content{border-block-end-color:rgba(0,0,0,0)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.container{outline:windowtext solid 2px}}[name=headline-prefix]::slotted(*),[name=headline-suffix]::slotted(*){color:var(--_with-icon-icon-color);font-size:var(--_with-icon-icon-size)}[name=header]::slotted(*){flex:1;align-self:stretch;display:flex;align-items:center}:host([showing-fullscreen]) [name=headline]::slotted(*){flex:1}/*# sourceMappingURL=dialog-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Dialogs can require an action, communicate information, or help
 * users accomplish a task. There are two types of dialogs: basic and
 * full-screen.
 *
 * @description
 * A dialog is a modal window that appears in front of app content to provide
 * critical information or ask for a decision. Dialogs disable all app
 * functionality when they appear, and remain on screen until confirmed,
 * dismissed, or a required action has been taken.
 *
 * Dialogs are purposefully interruptive, so they should be used sparingly.
 * A less disruptive alternative is to use a menu, which provides options
 * without interrupting a user’s experience.
 *
 * On mobile devices only, complex dialogs should be displayed fullscreen.
 *
 * __Example usages:__
 * - Common use cases for basic dialogs include alerts, quick selection, and
 * confirmation.
 * - More complex dialogs may contain actions that require a series of tasks
 * to complete. One example is creating a calendar entry with the event title,
 * date, location, and time.
 */
let MdDialog = class MdDialog extends Dialog {
};
MdDialog.styles = [styles$u];
MdDialog = __decorate([
    e$a('md-dialog')
], MdDialog);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$8;
/**
 * A button component.
 */
class Button extends s$2 {
    /** @nocollapse */
    static get formAssociated() {
        return true;
    }
    constructor() {
        super();
        /**
         * Whether or not the button is disabled.
         */
        this.disabled = false;
        /**
         * Whether to render the icon at the inline end of the label rather than the
         * inline start.
         *
         * _Note:_ Link buttons cannot have trailing icons.
         */
        this.trailingIcon = false;
        /**
         * Whether to display the icon or not.
         */
        this.hasIcon = false;
        /**
         * Whether `preventDefault()` should be called on the underlying button.
         * Useful for preventing certain native functionalities like preventing form
         * submissions.
         */
        this.preventClickDefault = false;
        /**
         * Specifies the type of button, used for controlling forms. When type
         * is `submit`, the containing form is submitted; when it is `reset` the
         * form is reset.
         */
        this.type = '';
        this.internals = this /* needed for closure */.attachInternals();
        // flag to avoid processing redispatched event.
        this.isRedispatchingEvent = false;
        this.handleActivationClick = (event) => {
            if (!isActivationClick((event)) || !this.buttonElement) {
                return;
            }
            this.focus();
            dispatchActivationClick(this.buttonElement);
        };
        {
            this.addEventListener('click', this.handleActivationClick);
        }
    }
    focus() {
        this.buttonElement?.focus();
    }
    blur() {
        this.buttonElement?.blur();
    }
    render() {
        // Link buttons may not be disabled
        const isDisabled = this.disabled && !this.href;
        const button = this.href ? i$1 `a` : i$1 `button`;
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        return n$2 `
      <${button}
        class="md3-button ${o$1(this.getRenderClasses())}"
        ?disabled=${isDisabled}
        aria-label="${ariaLabel || A}"
        aria-haspopup="${ariaHasPopup || A}"
        aria-expanded="${ariaExpanded || A}"
        href=${this.href || A}
        target=${this.target || A}
        @click="${this.handleClick}"
      >
        ${this.renderFocusRing()}
        ${this.renderElevation()}
        ${this.renderRipple()}
        ${this.renderOutline()}
        ${this.renderTouchTarget()}
        ${this.renderLeadingIcon()}
        ${this.renderLabel()}
        ${this.renderTrailingIcon()}
      </${button}>`;
    }
    getRenderClasses() {
        return {
            'md3-button--icon-leading': !this.trailingIcon && this.hasIcon,
            'md3-button--icon-trailing': this.trailingIcon && this.hasIcon,
        };
    }
    renderElevation() {
        return A;
    }
    renderOutline() {
        return A;
    }
    renderTouchTarget() {
        return x `
      <span class="md3-button__touch"></span>
    `;
    }
    renderRipple() {
        return x `<md-ripple class="md3-button__ripple" ?disabled="${this.disabled}"></md-ripple>`;
    }
    renderFocusRing() {
        return x `<md-focus-ring></md-focus-ring>`;
    }
    renderLabel() {
        return x `<span class="md3-button__label"><slot></slot></span>`;
    }
    renderLeadingIcon() {
        return this.trailingIcon ? A : this.renderIcon();
    }
    renderTrailingIcon() {
        return this.trailingIcon ? this.renderIcon() : A;
    }
    renderIcon() {
        return x `<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;
    }
    handleClick(e) {
        if (this.isRedispatchingEvent) {
            return;
        }
        if (this.preventClickDefault) {
            e.preventDefault();
        }
        // based on type, trigger form action.
        const { type, internals: { form } } = this;
        if (!form) {
            return;
        }
        const isSubmit = type === 'submit', isReset = type === 'reset';
        if (!(isSubmit || isReset)) {
            return;
        }
        e.stopPropagation();
        this.isRedispatchingEvent = true;
        const prevented = !redispatchEvent(this, e);
        this.isRedispatchingEvent = false;
        if (prevented) {
            return;
        }
        if (isSubmit) {
            form.requestSubmit();
        }
        else if (isReset) {
            form.reset();
        }
    }
    handleSlotChange() {
        this.hasIcon = this.assignedIcons.length > 0;
    }
}
_a$8 = Button;
(() => {
    requestUpdateOnAriaChange(_a$8);
})();
Button.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    n$8({ type: Boolean, reflect: true })
], Button.prototype, "disabled", void 0);
__decorate([
    n$8()
], Button.prototype, "href", void 0);
__decorate([
    n$8()
], Button.prototype, "target", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'trailingicon' })
], Button.prototype, "trailingIcon", void 0);
__decorate([
    n$8({ type: Boolean })
], Button.prototype, "hasIcon", void 0);
__decorate([
    n$8({ type: Boolean })
], Button.prototype, "preventClickDefault", void 0);
__decorate([
    n$8()
], Button.prototype, "type", void 0);
__decorate([
    i$5('.md3-button')
], Button.prototype, "buttonElement", void 0);
__decorate([
    l$5({ slot: 'icon', flatten: true })
], Button.prototype, "assignedIcons", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled button component.
 */
class FilledButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--filled': true,
        };
    }
    renderElevation() {
        return x `<md-elevation></md-elevation>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$t = i$4 `:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-type: var(--md-filled-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-filled-button-with-icon-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_with-icon-disabled-icon-opacity: var(--md-filled-button-with-icon-disabled-icon-opacity, 0.38);--_with-icon-focus-icon-color: var(--md-filled-button-with-icon-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_with-icon-hover-icon-color: var(--md-filled-button-with-icon-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_with-icon-icon-color: var(--md-filled-button-with-icon-icon-color, var(--md-sys-color-on-primary, #fff));--_with-icon-icon-size: var(--md-filled-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-filled-button-with-icon-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_spacing-leading: var(--md-filled-button-spacing-leading, 24px);--_spacing-trailing: var(--md-filled-button-spacing-trailing, 24px);--_with-icon-spacing-leading: var(--md-filled-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing: var(--md-filled-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading: var(--md-filled-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing: var(--md-filled-button-with-trailing-icon-spacing-trailing, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$s = i$4 `md-elevation{transition-duration:280ms}.md3-button{--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color)}.md3-button:focus{--md-elevation-level:var(--_focus-container-elevation)}.md3-button:hover{--md-elevation-level:var(--_hover-container-elevation)}.md3-button:active{--md-elevation-level:var(--_pressed-container-elevation)}.md3-button:disabled{--md-elevation-level:var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$r = i$4 `:root{--md-filled-button-container-shape-start-start: 12px;--md-filled-button-container-shape: 8px}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.md3-button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;block-size:var(--_container-height);font:var(--_label-text-type);color:var(--_label-text-color);padding-inline-start:var(--_spacing-leading);padding-inline-end:var(--_spacing-trailing);gap:8px}.md3-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.md3-button::-moz-focus-inner{padding:0;border:0}.md3-button:hover{color:var(--_hover-label-text-color);cursor:pointer}.md3-button:focus{color:var(--_focus-label-text-color)}.md3-button:active{color:var(--_pressed-label-text-color);outline:none}.md3-button:disabled .md3-button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.md3-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.md3-button::before{content:"";box-sizing:border-box;border:1px solid rgba(0,0,0,0);border-radius:inherit;inset:0;pointer-events:none;position:absolute}}.md3-button,.md3-button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.md3-button::after,.md3-button::before,md-elevation,.md3-button__ripple{z-index:-1}.md3-button--icon-leading{padding-inline-start:var(--_with-icon-spacing-leading);padding-inline-end:var(--_with-icon-spacing-trailing)}.md3-button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-spacing-leading);padding-inline-end:var(--_with-trailing-icon-spacing-trailing)}.md3-link-button-wrapper{inline-size:100%}.md3-button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_with-icon-icon-color);font-size:var(--_with-icon-icon-size);inline-size:var(--_with-icon-icon-size);block-size:var(--_with-icon-icon-size)}.md3-button:hover ::slotted([slot=icon]){color:var(--_with-icon-hover-icon-color)}.md3-button:focus ::slotted([slot=icon]){color:var(--_with-icon-focus-icon-color)}.md3-button:active ::slotted([slot=icon]){color:var(--_with-icon-pressed-icon-color)}.md3-button:disabled ::slotted([slot=icon]){color:var(--_with-icon-disabled-icon-color);opacity:var(--_with-icon-disabled-icon-opacity)}.md3-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledButton = class MdFilledButton extends FilledButton {
};
MdFilledButton.styles = [styles$r, styles$s, styles$t];
MdFilledButton = __decorate([
    e$a('md-filled-button')
], MdFilledButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A text button component.
 */
class TextButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--text': true,
        };
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$q = i$4 `:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-text-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-text-button-with-icon-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_with-icon-disabled-icon-opacity: var(--md-text-button-with-icon-disabled-icon-opacity, 0.38);--_with-icon-focus-icon-color: var(--md-text-button-with-icon-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-hover-icon-color: var(--md-text-button-with-icon-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-color: var(--md-text-button-with-icon-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-size: var(--md-text-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-text-button-with-icon-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_spacing-leading: var(--md-text-button-spacing-leading, 12px);--_spacing-trailing: var(--md-text-button-spacing-trailing, 12px);--_with-icon-spacing-leading: var(--md-text-button-with-icon-spacing-leading, 12px);--_with-icon-spacing-trailing: var(--md-text-button-with-icon-spacing-trailing, 16px);--_with-trailing-icon-spacing-leading: var(--md-text-button-with-trailing-icon-spacing-leading, 16px);--_with-trailing-icon-spacing-trailing: var(--md-text-button-with-trailing-icon-spacing-trailing, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @final
 * @suppress {visibility}
 */
let MdTextButton = class MdTextButton extends TextButton {
};
MdTextButton.styles = [styles$r, styles$q];
MdTextButton = __decorate([
    e$a('md-text-button')
], MdTextButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined button component.
 */
class OutlinedButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--outlined': true,
        };
    }
    renderOutline() {
        return x `<span class="md3-button__outline"></span>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$p = i$4 `:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-color: var(--md-outlined-button-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-outline-color: var(--md-outlined-button-hover-outline-color, var(--md-sys-color-outline, #79747e));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-outlined-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-outlined-button-with-icon-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_with-icon-disabled-icon-opacity: var(--md-outlined-button-with-icon-disabled-icon-opacity, 0.38);--_with-icon-focus-icon-color: var(--md-outlined-button-with-icon-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-hover-icon-color: var(--md-outlined-button-with-icon-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-color: var(--md-outlined-button-with-icon-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-size: var(--md-outlined-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-outlined-button-with-icon-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_spacing-leading: var(--md-outlined-button-spacing-leading, 24px);--_spacing-trailing: var(--md-outlined-button-spacing-trailing, 24px);--_with-icon-spacing-leading: var(--md-outlined-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing: var(--md-outlined-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading: var(--md-outlined-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing: var(--md-outlined-button-with-trailing-icon-spacing-trailing, 16px);--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.md3-button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.md3-button:active .md3-button__outline{border-color:var(--_pressed-outline-color)}.md3-button:disabled .md3-button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.md3-button__outline,.md3-button__ripple{border-width:var(--_outline-width)}.md3-button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Use an outlined button for actions that need attention but
 * aren’t the primary action, such as “See all” or “Add to cart.” This is also
 * the button to use for giving someone the opportunity to change their mind or
 * escape a flow.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
let MdOutlinedButton = class MdOutlinedButton extends OutlinedButton {
};
MdOutlinedButton.styles = [styles$r, styles$p];
MdOutlinedButton = __decorate([
    e$a('md-outlined-button')
], MdOutlinedButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A tonal button component.
 */
class TonalButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--tonal': true,
        };
    }
    renderElevation() {
        return x `<md-elevation></md-elevation>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$o = i$4 `:host{--_container-color: var(--md-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-tonal-button-container-elevation, 0);--_container-height: var(--md-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-type: var(--md-tonal-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-container-elevation: var(--md-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-tonal-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-tonal-button-with-icon-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_with-icon-disabled-icon-opacity: var(--md-tonal-button-with-icon-disabled-icon-opacity, 0.38);--_with-icon-focus-icon-color: var(--md-tonal-button-with-icon-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_with-icon-hover-icon-color: var(--md-tonal-button-with-icon-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_with-icon-icon-color: var(--md-tonal-button-with-icon-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_with-icon-icon-size: var(--md-tonal-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-tonal-button-with-icon-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_spacing-leading: var(--md-tonal-button-spacing-leading, 24px);--_spacing-trailing: var(--md-tonal-button-spacing-trailing, 24px);--_with-icon-spacing-leading: var(--md-tonal-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing: var(--md-tonal-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading: var(--md-tonal-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing: var(--md-tonal-button-with-trailing-icon-spacing-trailing, 16px);--_container-shape-start-start: var( --md-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=tonal-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Filled tonal buttons have a lighter background color and
 * darker label color, making them less visually prominent than a regular,
 * filled button. They’re still used for final or unblocking actions in a flow,
 * but do so with less emphasis.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdTonalButton = class MdTonalButton extends TonalButton {
};
MdTonalButton.styles = [styles$r, styles$s, styles$o];
MdTonalButton = __decorate([
    e$a('md-tonal-button')
], MdTonalButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An elevated button component.
 */
class ElevatedButton extends Button {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'md3-button--elevated': true,
        };
    }
    renderElevation() {
        return x `<md-elevation></md-elevation>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$n = i$4 `:host{--_container-color: var(--md-elevated-button-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_container-elevation: var(--md-elevated-button-container-elevation, 1);--_container-height: var(--md-elevated-button-container-height, 40px);--_container-shadow-color: var(--md-elevated-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-elevated-button-container-shape, 9999px);--_disabled-container-color: var(--md-elevated-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-elevated-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-elevated-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-elevated-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-elevated-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-elevated-button-focus-container-elevation, 1);--_focus-label-text-color: var(--md-elevated-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-elevated-button-hover-container-elevation, 2);--_hover-label-text-color: var(--md-elevated-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-elevated-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-elevated-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-elevated-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-type: var(--md-elevated-button-label-text-type, var(--md-sys-typescale-label-large, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-container-elevation: var(--md-elevated-button-pressed-container-elevation, 1);--_pressed-label-text-color: var(--md-elevated-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-elevated-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-elevated-button-pressed-state-layer-opacity, 0.12);--_with-icon-disabled-icon-color: var(--md-elevated-button-with-icon-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_with-icon-disabled-icon-opacity: var(--md-elevated-button-with-icon-disabled-icon-opacity, 0.38);--_with-icon-focus-icon-color: var(--md-elevated-button-with-icon-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-hover-icon-color: var(--md-elevated-button-with-icon-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-color: var(--md-elevated-button-with-icon-icon-color, var(--md-sys-color-primary, #6750a4));--_with-icon-icon-size: var(--md-elevated-button-with-icon-icon-size, 18px);--_with-icon-pressed-icon-color: var(--md-elevated-button-with-icon-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_spacing-leading: var(--md-elevated-button-spacing-leading, 24px);--_spacing-trailing: var(--md-elevated-button-spacing-trailing, 24px);--_with-icon-spacing-leading: var(--md-elevated-button-with-icon-spacing-leading, 16px);--_with-icon-spacing-trailing: var(--md-elevated-button-with-icon-spacing-trailing, 24px);--_with-trailing-icon-spacing-leading: var(--md-elevated-button-with-trailing-icon-spacing-leading, 24px);--_with-trailing-icon-spacing-trailing: var(--md-elevated-button-with-trailing-icon-spacing-trailing, 16px);--_container-shape-start-start: var( --md-elevated-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-elevated-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-elevated-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-elevated-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=elevated-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Elevated buttons are essentially filled buttons with a lighter
 * background color and a shadow. To prevent shadow creep, only use them when
 * absolutely necessary, such as when the button requires visual separation from
 * a patterned background.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
let MdElevatedButton = class MdElevatedButton extends ElevatedButton {
};
MdElevatedButton.styles = [styles$r, styles$s, styles$n];
MdElevatedButton = __decorate([
    e$a('md-elevated-button')
], MdElevatedButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$7;
const NAVIGABLE_KEYS = {
    ArrowDown: 'ArrowDown',
    ArrowUp: 'ArrowUp',
    Home: 'Home',
    End: 'End',
};
const navigableKeySet = new Set(Object.values(NAVIGABLE_KEYS));
function isNavigableKey(key) {
    return navigableKeySet.has(key);
}
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class List extends s$2 {
    constructor() {
        super(...arguments);
        this.type = 'list';
        /**
         * The tabindex of the underlying list.
         */
        this.listTabIndex = 0;
    }
    render() {
        return this.renderList();
    }
    /**
     * Renders the main list element.
     */
    renderList() {
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
    <ul class="md3-list"
        aria-label=${ariaLabel || A}
        tabindex=${this.listTabIndex}
        role=${this.type || A}
        @keydown=${this.handleKeydown}
        >
      ${this.renderContent()}
    </ul>
  `;
    }
    /**
     * The content to be slotted into the list.
     */
    renderContent() {
        return x `<span><slot @click=${(e) => {
            e.stopPropagation();
        }}></slot></span>`;
    }
    /**
     * Handles keyboard navigation in the list.
     *
     * @param event {KeyboardEvent} The keyboard event that triggers this handler.
     */
    handleKeydown(event) {
        const key = event.key;
        if (!isNavigableKey(key)) {
            return;
        }
        // do not use this.items directly so we don't re-query the DOM unnecessarily
        const items = this.items;
        if (!items.length) {
            return;
        }
        const activeItemRecord = List.getActiveItem(items);
        if (activeItemRecord) {
            activeItemRecord.item.active = false;
        }
        event.preventDefault();
        switch (key) {
            // Activate the next item
            case NAVIGABLE_KEYS.ArrowDown:
                if (activeItemRecord) {
                    const next = List.getNextItem(items, activeItemRecord.index);
                    if (next)
                        next.active = true;
                }
                else {
                    List.activateFirstItem(items);
                }
                break;
            // Activate the previous item
            case NAVIGABLE_KEYS.ArrowUp:
                if (activeItemRecord) {
                    const prev = List.getPrevItem(items, activeItemRecord.index);
                    if (prev)
                        prev.active = true;
                }
                else {
                    items[items.length - 1].active = true;
                }
                break;
            // Activate the first item
            case NAVIGABLE_KEYS.Home:
                List.activateFirstItem(items);
                break;
            // Activate the last item
            case NAVIGABLE_KEYS.End:
                List.activateLastItem(items);
                break;
        }
    }
    /**
     * Activates the first non-disabled item of a given array of items.
     *
     * @param items {Array<ListItem>} The items from which to activate the
     * first item.
     */
    static activateFirstItem(items) {
        // NOTE: These selector functions are static and not on the instance such
        // that multiple operations can be chained and we do not have to re-query
        // the DOM
        const firstItem = List.getFirstActivatableItem(items);
        if (firstItem) {
            firstItem.active = true;
        }
    }
    /**
     * Activates the last non-disabled item of a given array of items.
     *
     * @param items {Array<ListItem>} The items from which to activate the
     * last item.
     */
    static activateLastItem(items) {
        const lastItem = List.getLastActivatableItem(items);
        if (lastItem) {
            lastItem.active = true;
        }
    }
    /**
     * Deactivates the currently active item of a given array of items.
     *
     * @param items {Array<ListItem>} The items from which to deactivate the
     * active item.
     * @return A record of the deleselcted activated item including the item and
     * the index of the item or `null` if none are deactivated.
     */
    static deactivateActiveItem(items) {
        const activeItem = List.getActiveItem(items);
        if (activeItem) {
            activeItem.item.active = false;
        }
        return activeItem;
    }
    focus() {
        this.listRoot?.focus();
    }
    /**
     * Retrieves the first activated item of a given array of items.
     *
     * @param items {Array<ListItem>} The items to search.
     * @return A record of the first activated item including the item and the
     * index of the item or `null` if none are activated.
     */
    static getActiveItem(items) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.active) {
                return {
                    item,
                    index: i,
                };
            }
        }
        return null;
    }
    /**
     * Retrieves the first non-disabled item of a given array of items. This
     * the first item that is not disabled.
     *
     * @param items {Array<ListItem>} The items to search.
     * @return The first activatable item or `null` if none are activatable.
     */
    static getFirstActivatableItem(items) {
        for (const item of items) {
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
    /**
     * Retrieves the last non-disabled item of a given array of items.
     *
     * @param items {Array<ListItem>} The items to search.
     * @return The last activatable item or `null` if none are activatable.
     */
    static getLastActivatableItem(items) {
        for (let i = items.length - 1; i >= 0; i--) {
            const item = items[i];
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
    /**
     * Retrieves the next non-disabled item of a given array of items.
     *
     * @param items {Array<ListItem>} The items to search.
     * @param index {{index: number}} The index to search from.
     * @return The next activatable item or `null` if none are activatable.
     */
    static getNextItem(items, index) {
        for (let i = 1; i < items.length; i++) {
            const nextIndex = (i + index) % items.length;
            const item = items[nextIndex];
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
    /**
     * Retrieves the previous non-disabled item of a given array of items.
     *
     * @param items {Array<ListItem>} The items to search.
     * @param index {{index: number}} The index to search from.
     * @return The previous activatable item or `null` if none are activatable.
     */
    static getPrevItem(items, index) {
        for (let i = 1; i < items.length; i++) {
            const prevIndex = (index - i + items.length) % items.length;
            const item = items[prevIndex];
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
}
_a$7 = List;
(() => {
    requestUpdateOnAriaChange(_a$7);
})();
List.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    n$8()
], List.prototype, "type", void 0);
__decorate([
    n$8({ type: Number })
], List.prototype, "listTabIndex", void 0);
__decorate([
    i$5('.md3-list')
], List.prototype, "listRoot", void 0);
__decorate([
    l$5({ flatten: true, selector: '[md-list-item]' })
], List.prototype, "items", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$m = i$4 `:host{--_container-color: var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset}.md3-list{background-color:var(--_container-color);border-radius:inherit;display:block;list-style-type:none;margin:0;min-width:inherit;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Lists are continuous, vertical indexes of text or images.
 *
 * @description
 * Lists consist of one or more list items, and can contain actions represented
 * by icons and text. List items come in three sizes: one-line, two-line, and
 * three-line.
 *
 * __Takeaways:__
 *
 * - Lists should be sorted in logical ways that make content easy to scan, such
 *   as alphabetical, numerical, chronological, or by user preference.
 * - Lists present content in a way that makes it easy to identify a specific
 *   item in a collection and act on it.
 * - Lists should present icons, text, and actions in a consistent format.
 *
 * @final
 * @suppress {visibility}
 */
let MdList = class MdList extends List {
};
MdList.styles = [styles$m];
MdList = __decorate([
    e$a('md-list')
], MdList);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$l = i$4 `@media(forced-colors: active){:host{--md-list-item-list-item-disabled-label-text-color: GrayText;--md-list-item-list-item-disabled-label-text-opacity: 1;--md-list-item-list-item-disabled-leading-icon-color: GrayText;--md-list-item-list-item-disabled-leading-icon-opacity: 1;--md-list-item-list-item-disabled-trailing-icon-color: GrayText;--md-list-item-list-item-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$6;
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class ListItemEl extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * The primary, headline text of the list item.
         */
        this.headline = '';
        /**
         * The one-line supporting text below the headline. Set
         * `multiLineSupportingText` to `true` to support multiple lines in the
         * supporting text.
         */
        this.supportingText = '';
        /**
         * Modifies `supportingText` to support multiple lines.
         */
        this.multiLineSupportingText = false;
        /**
         * The supporting text placed at the end of the item. Overridden by elements
         * slotted into the `end` slot.
         */
        this.trailingSupportingText = '';
        /**
         * Disables the item and makes it non-selectable and non-interactive.
         */
        this.disabled = false;
        /**
         * The tabindex of the underlying item.
         *
         * __NOTE:__ this is overridden by the keyboard behavior of `md-list` and by
         * setting `selected`.
         */
        this.itemTabIndex = -1;
        /**
         * Whether or not the element is actively being interacted with by md-list.
         * When active, tabindex is set to 0, and in some list item variants (like
         * md-list-item), focuses the underlying item.
         */
        this.active = false;
        /**
         * READONLY. Sets the `md-list-item` attribute on the element.
         */
        this.isListItem = true;
        this.listItemRole = 'listitem';
        /**
         * Only meant to be overridden by subclassing and not by the user. This is
         * so that we have control over focus on specific variants such as disabling
         * focus on <md-autocomplete-item> but enabling it for <md-menu-item>.
         */
        this.focusOnActivation = true;
        this.isFirstUpdate = true;
    }
    willUpdate(changed) {
        if (changed.has('active') && !this.disabled) {
            if (this.active) {
                this.itemTabIndex = 0;
            }
            else if (!this.isFirstUpdate) {
                // Do not reset anything if it's the first render because user could
                // have set `itemTabIndex` manually.
                this.itemTabIndex = -1;
            }
        }
    }
    render() {
        return this.renderListItem(x `
      <div class="content-wrapper">
        ${this.renderStart()}
        ${this.renderBody()}
        ${this.renderEnd()}
        ${this.renderRipple()}
        ${this.renderFocusRing()}
      </div>
    `);
    }
    /**
     * Renders the root list item.
     *
     * @param content the child content of the list item.
     */
    renderListItem(content) {
        return x `
      <li
        id="item"
        tabindex=${this.disabled ? -1 : this.itemTabIndex}
        role=${this.listItemRole}
        aria-selected=${this.ariaSelected || A}
        aria-checked=${this.ariaChecked || A}
        class="list-item ${o$1(this.getRenderClasses())}"
        @click=${this.onClick}
        @pointerenter=${this.onPointerenter}
        @pointerleave=${this.onPointerleave}
        @keydown=${this.onKeydown}
      >${content}</li>
    `;
    }
    /**
     * Handles rendering of the ripple element.
     */
    renderRipple() {
        return x `<md-ripple for="item" ?disabled=${this.disabled}></md-ripple>`;
    }
    /**
     * Handles rendering of the focus ring.
     */
    renderFocusRing() {
        return x `<md-focus-ring class="focus-ring" for="item" inward></md-focus-ring>`;
    }
    /**
     * Classes applied to the list item root.
     */
    getRenderClasses() {
        return {
            'with-one-line': this.supportingText === '',
            'with-two-line': this.supportingText !== '' && !this.multiLineSupportingText,
            'with-three-line': this.supportingText !== '' && this.multiLineSupportingText,
            'disabled': this.disabled
        };
    }
    /**
     * The content rendered at the start of the list item.
     */
    renderStart() {
        return x `<div class="start"><slot name="start"></slot></div>`;
    }
    /**
     * Handles rendering the headline and supporting text.
     */
    renderBody() {
        const supportingText = this.supportingText !== '' ? this.renderSupportingText() : '';
        return x `<div class="body"
      ><span class="label-text">${this.headline}</span>${supportingText}</div>`;
    }
    /**
     * Renders the one-line supporting text.
     */
    renderSupportingText() {
        return x `<span
        class="supporting-text ${o$1(this.getSupportingTextClasses())}"
      >${this.supportingText}</span>`;
    }
    /**
     * Gets the classes for the supporting text node
     */
    getSupportingTextClasses() {
        return { 'supporting-text--multi-line': this.multiLineSupportingText };
    }
    /**
     * The content rendered at the end of the list item.
     */
    renderEnd() {
        const supportingText = this.trailingSupportingText !== '' ?
            this.renderTrailingSupportingText() :
            '';
        return x `<div class="end"
      ><slot name="end">${supportingText}</slot></div>`;
    }
    /**
     * Renders the supporting text at the end of the list item.
     */
    renderTrailingSupportingText() {
        return x `<span class="trailing-supporting-text"
      >${this.trailingSupportingText}</span>`;
    }
    updated(changed) {
        super.updated(changed);
        // will focus the list item root if it is selected but not on the first
        // update or else it may cause the page to jump on first load.
        if (changed.has('active') && !this.isFirstUpdate && this.active &&
            this.focusOnActivation) {
            this.focus();
        }
        this.isFirstUpdate = false;
    }
    focus() {
        this.listItemRoot?.focus?.();
    }
}
_a$6 = ListItemEl;
(() => {
    requestUpdateOnAriaChange(_a$6);
})();
__decorate([
    n$8()
], ListItemEl.prototype, "headline", void 0);
__decorate([
    n$8()
], ListItemEl.prototype, "supportingText", void 0);
__decorate([
    n$8({ type: Boolean })
], ListItemEl.prototype, "multiLineSupportingText", void 0);
__decorate([
    n$8()
], ListItemEl.prototype, "trailingSupportingText", void 0);
__decorate([
    n$8({ type: Boolean })
], ListItemEl.prototype, "disabled", void 0);
__decorate([
    n$8({ type: Number })
], ListItemEl.prototype, "itemTabIndex", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], ListItemEl.prototype, "active", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'md-list-item', reflect: true })
], ListItemEl.prototype, "isListItem", void 0);
__decorate([
    i$5('.list-item')
], ListItemEl.prototype, "listItemRoot", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class ListItemOnly extends ListItemEl {
    constructor() {
        super(...arguments);
        /**
         * Removes the hover and click ripples from the item when true.
         */
        this.noninteractive = false;
    }
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'noninteractive': this.noninteractive,
        };
    }
    renderRipple() {
        return this.noninteractive ? A : super.renderRipple();
    }
    renderFocusRing() {
        return this.noninteractive ? A : super.renderFocusRing();
    }
}
__decorate([
    n$8({ type: Boolean })
], ListItemOnly.prototype, "noninteractive", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$k = i$4 `:host{--_list-item-container-color: var(--md-list-item-list-item-container-color, var(--md-sys-color-surface, #fef7ff));--_list-item-container-shape: var(--md-list-item-list-item-container-shape, 0px);--_list-item-disabled-label-text-color: var(--md-list-item-list-item-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-label-text-opacity: var(--md-list-item-list-item-disabled-label-text-opacity, 0.3);--_list-item-disabled-leading-icon-color: var(--md-list-item-list-item-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-leading-icon-opacity: var(--md-list-item-list-item-disabled-leading-icon-opacity, 0.38);--_list-item-disabled-trailing-icon-color: var(--md-list-item-list-item-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-trailing-icon-opacity: var(--md-list-item-list-item-disabled-trailing-icon-opacity, 0.38);--_list-item-focus-label-text-color: var(--md-list-item-list-item-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-focus-leading-icon-icon-color: var(--md-list-item-list-item-focus-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-focus-trailing-icon-icon-color: var(--md-list-item-list-item-focus-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-label-text-color: var(--md-list-item-list-item-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-leading-icon-icon-color: var(--md-list-item-list-item-hover-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-state-layer-color: var(--md-list-item-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-state-layer-opacity: var(--md-list-item-list-item-hover-state-layer-opacity, 0.08);--_list-item-hover-trailing-icon-icon-color: var(--md-list-item-list-item-hover-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-label-text-color: var(--md-list-item-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-label-text-line-height: var(--md-list-item-list-item-label-text-line-height, 1.5rem);--_list-item-label-text-type: var(--md-list-item-list-item-label-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-large-leading-video-height: var(--md-list-item-list-item-large-leading-video-height, 69px);--_list-item-leading-avatar-label-color: var(--md-list-item-list-item-leading-avatar-label-color, var(--md-sys-color-on-primary-container, #21005d));--_list-item-leading-avatar-label-type: var(--md-list-item-list-item-leading-avatar-label-type, var(--md-sys-typescale-title-medium, 500 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-leading-avatar-color: var(--md-list-item-list-item-leading-avatar-color, var(--md-sys-color-primary-container, #eaddff));--_list-item-leading-avatar-shape: var(--md-list-item-list-item-leading-avatar-shape, 9999px);--_list-item-leading-avatar-size: var(--md-list-item-list-item-leading-avatar-size, 40px);--_list-item-leading-icon-color: var(--md-list-item-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-leading-icon-size: var(--md-list-item-list-item-leading-icon-size, 18px);--_list-item-leading-image-height: var(--md-list-item-list-item-leading-image-height, 56px);--_list-item-leading-image-shape: var(--md-list-item-list-item-leading-image-shape, 0px);--_list-item-leading-image-width: var(--md-list-item-list-item-leading-image-width, 56px);--_list-item-leading-video-shape: var(--md-list-item-list-item-leading-video-shape, 0px);--_list-item-leading-video-width: var(--md-list-item-list-item-leading-video-width, 100px);--_list-item-one-line-container-height: var(--md-list-item-list-item-one-line-container-height, 56px);--_list-item-pressed-label-text-color: var(--md-list-item-list-item-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-leading-icon-icon-color: var(--md-list-item-list-item-pressed-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-pressed-state-layer-color: var(--md-list-item-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-state-layer-opacity: var(--md-list-item-list-item-pressed-state-layer-opacity, 0.12);--_list-item-pressed-trailing-icon-icon-color: var(--md-list-item-list-item-pressed-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-small-leading-video-height: var(--md-list-item-list-item-small-leading-video-height, 56px);--_list-item-supporting-text-color: var(--md-list-item-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-supporting-text-type: var(--md-list-item-list-item-supporting-text-type, var(--md-sys-typescale-body-medium, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_list-item-three-line-container-height: var(--md-list-item-list-item-three-line-container-height, 88px);--_list-item-trailing-icon-color: var(--md-list-item-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-icon-size: var(--md-list-item-list-item-trailing-icon-size, 24px);--_list-item-trailing-supporting-text-color: var(--md-list-item-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-supporting-text-line-height: var(--md-list-item-list-item-trailing-supporting-text-line-height, 1rem);--_list-item-trailing-supporting-text-type: var(--md-list-item-list-item-trailing-supporting-text-type, var(--md-sys-typescale-label-small, 500 0.688rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_list-item-two-line-container-height: var(--md-list-item-list-item-two-line-container-height, 72px);--_list-item-leading-element-leading-space: var(--md-list-item-list-item-leading-element-leading-space, 16px);--_list-item-leading-space: var(--md-list-item-list-item-leading-space, 16px);--_list-item-leading-video-leading-space: var(--md-list-item-list-item-leading-video-leading-space, 0px);--_list-item-trailing-element-headline-trailing-element-space: var(--md-list-item-list-item-trailing-element-headline-trailing-element-space, 16px);--_list-item-trailing-space: var(--md-list-item-list-item-trailing-space, 16px)}:host{color:unset;--md-focus-ring-shape: 8px;--md-ripple-hover-color: var(--_list-item-hover-state-layer-color);--md-ripple-hover-opacity: var(--_list-item-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_list-item-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_list-item-pressed-state-layer-opacity)}.list-item{align-items:center;box-sizing:border-box;display:flex;outline:none;position:relative;width:100%;text-decoration:none;background-color:var(--_list-item-container-color);border-radius:var(--_list-item-container-shape);-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled):not(.noninteractive){cursor:pointer}.list-item.disabled{pointer-events:none}.content-wrapper{display:flex;width:100%;border-radius:inherit}md-ripple{border-radius:inherit}.with-one-line{min-height:var(--_list-item-one-line-container-height)}.with-two-line{min-height:var(--_list-item-two-line-container-height)}.with-three-line{min-height:var(--_list-item-three-line-container-height)}.start{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;flex:0 0 auto;z-index:1}.with-three-line .start{justify-content:start}slot[name=start]::slotted([data-variant=icon]),slot[name=start]::slotted([data-variant=image]),slot[name=start]::slotted([data-variant=avatar]){margin-inline-start:var(--_list-item-leading-element-leading-space)}.body{display:inline-flex;justify-content:center;flex-direction:column;box-sizing:border-box;flex:1 0 0;padding-inline-start:var(--_list-item-leading-space);padding-inline-end:var(--_list-item-trailing-space);z-index:1}.end{display:inline-flex;flex-direction:column;justify-content:center;flex:0 0 auto;z-index:1}.with-three-line .end{justify-content:start}slot[name=end]::slotted(*),.trailing-supporting-text{margin-inline-end:var(--_list-item-trailing-element-headline-trailing-element-space)}.label-text{display:flex;text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;color:var(--_list-item-label-text-color);font:var(--_list-item-label-text-type)}:hover .label-text{color:var(--_list-item-hover-label-text-color)}:focus .label-text{color:var(--_list-item-focus-label-text-color)}:active .label-text{color:var(--_list-item-pressed-label-text-color)}.disabled .label-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text{text-overflow:ellipsis;white-space:normal;overflow:hidden;width:100%;color:var(--_list-item-supporting-text-color);font:var(--_list-item-supporting-text-type);-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box}.disabled .supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text--multi-line{-webkit-line-clamp:2}.trailing-supporting-text{padding-inline-start:16px;font:var(--_list-item-trailing-supporting-text-type)}.list-item:not(.disabled) .trailing-supporting-text{color:var(--_list-item-trailing-supporting-text-color)}.disabled .trailing-supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.with-three-line .trailing-supporting-text{padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-supporting-text-line-height))/2)}.focus-ring{z-index:1}::slotted([data-variant=image]){display:inline-flex;height:var(--_list-item-leading-image-height);width:var(--_list-item-leading-image-width);border-radius:var(--_list-item-leading-image-shape);padding-block:calc((var(--_list-item-two-line-container-height) - var(--_list-item-leading-image-height))/2)}.with-three-line ::slotted([data-variant=image]){padding-block:0}slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-leading-icon-color);--md-icon-size:var(--_list-item-leading-icon-size)}.with-three-line slot[name=start]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-leading-icon-size))/2)}slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-trailing-icon-color);--md-icon-size:var(--_list-item-trailing-icon-size)}.with-three-line slot[name=end]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-icon-size))/2)}:hover slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-leading-icon-icon-color)}:hover slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-trailing-icon-icon-color)}:focus slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-leading-icon-icon-color)}:focus slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-trailing-icon-icon-color)}:active slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-leading-icon-icon-color)}:active slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-trailing-icon-icon-color)}.disabled slot[name=start]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-leading-icon-opacity);--md-icon-color:var(--_list-item-disabled-leading-icon-color)}.disabled slot[name=end]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-trailing-icon-opacity);--md-icon-color:var(--_list-item-disabled-trailing-icon-color)}::slotted([data-variant=avatar]){display:inline-flex;justify-content:center;align-items:center;background-color:var(--_list-item-leading-avatar-color);height:var(--_list-item-leading-avatar-size);width:var(--_list-item-leading-avatar-size);border-radius:var(--_list-item-leading-avatar-shape);color:var(--_list-item-leading-avatar-label-color);font:var(--_list-item-leading-avatar-label-type)}::slotted([data-variant=video]),::slotted([data-variant=video-large]){display:inline-flex;object-fit:cover;height:var(--_list-item-small-leading-video-height);width:var(--_list-item-leading-video-width);border-radius:var(--_list-item-leading-video-shape);margin-inline-start:var(--_list-item-leading-video-leading-space);padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-small-leading-video-height))/2)}.with-three-line ::slotted([data-variant=video]),.with-three-line ::slotted([data-variant=video-large]){padding-block:0}::slotted([data-variant=video-large]){padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-large-leading-video-height))/2);height:var(--_list-item-large-leading-video-height)}/*# sourceMappingURL=list-item-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Lists are continuous, vertical indexes of text or images. Items are placed
 * inside the list.
 *
 * @description
 * Lists consist of one or more list items, and can contain actions represented
 * by icons and text. List items come in three sizes: one-line, two-line, and
 * three-line.
 *
 * __Takeaways:__
 *
 * - Lists should be sorted in logical ways that make content easy to scan, such
 *   as alphabetical, numerical, chronological, or by user preference.
 * - Lists present content in a way that makes it easy to identify a specific
 *   item in a collection and act on it.
 * - Lists should present icons, text, and actions in a consistent format.
 *
 * Acceptable slottable child variants are:
 *
 * - `video[data-variant=video]`
 * - `img,span[data-variant=avatar]`
 * - `img[data-variant=image]`
 * - `md-icon[data-variant=icon]`
 *
 *  @example
 * ```html
 * <md-list-item
 *     headline="User Name"
 *     supportingText="user@name.com">
 *   <md-icon data-variant="icon" slot="start">account_circle</md-icon>
 *   <md-icon data-variant="icon" slot="end">check</md-icon>
 * </md-list-item>
 * ```
 *
 * @example
 *
 * @final
 * @suppress {visibility}
 */
let MdListItem = class MdListItem extends ListItemOnly {
};
MdListItem.styles = [styles$k, styles$l];
MdListItem = __decorate([
    e$a('md-list-item')
], MdListItem);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class ListItemLink extends ListItemEl {
    renderListItem(content) {
        return x `
      <a
        id="item"
        tabindex=${this.disabled ? -1 : this.itemTabIndex}
        role=${this.listItemRole}
        aria-selected=${this.ariaSelected || A}
        aria-checked=${this.ariaChecked || A}
        class="list-item ${o$1(this.getRenderClasses())}"
        href=${this.href}
        target=${this.target || A}
        @click=${this.onClick}
        @pointerenter=${this.onPointerenter}
        @pointerleave=${this.onPointerleave}
        @keydown=${this.onKeydown}
      >${content}</a>
    `;
    }
}
__decorate([
    n$8()
], ListItemLink.prototype, "href", void 0);
__decorate([
    n$8()
], ListItemLink.prototype, "target", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class ListItemLinkOnly extends ListItemLink {
    constructor() {
        super(...arguments);
        /**
         * Removes the hover and click ripples from the item when true. Clicking the
         * link will still cause link navigation.
         */
        this.noninteractive = false;
    }
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'noninteractive': this.noninteractive,
        };
    }
    renderRipple() {
        return this.noninteractive ? A : super.renderRipple();
    }
}
__decorate([
    n$8()
], ListItemLinkOnly.prototype, "noninteractive", void 0);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Lists are continuous, vertical indexes of text or images. Items are placed
 * inside the list. This is a linkable variant.
 *
 * @description
 * Lists consist of one or more list items, and can contain actions represented
 * by icons and text. List items come in three sizes: one-line, two-line, and
 * three-line.
 *
 * __Takeaways:__
 *
 * - Lists should be sorted in logical ways that make content easy to scan, such
 *   as alphabetical, numerical, chronological, or by user preference.
 * - Lists present content in a way that makes it easy to identify a specific
 *   item in a collection and act on it.
 * - Lists should present icons, text, and actions in a consistent format.
 *
 * Example slottable child variants are:
 *
 * - `video[data-variant=video]`
 * - `img,span[data-variant=avatar]`
 * - `img[data-variant=image]`
 * - `md-icon[data-variant=icon]`
 *
 *  @example
 * ```html
 * <md-list-item-link
 *     headline="User Name"
 *     supportingText="user@name.com"
 *     href="/accounts">
 *   <md-icon data-variant="icon" slot="start">account_circle</md-icon>
 *   <md-icon data-variant="icon" slot="end">open_in_new</md-icon>
 * </md-list-item-link>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdListItemLink = class MdListItemLink extends ListItemLinkOnly {
};
MdListItemLink.styles = [styles$k, styles$l];
MdListItemLink = __decorate([
    e$a('md-list-item-link')
], MdListItemLink);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A divider component.
 */
class Divider extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Indents the divider with equal padding on both sides.
         */
        this.inset = false;
        /**
         * Indents the divider with padding on the leading side.
         */
        this.insetStart = false;
        /**
         * Indents the divider with padding on the trailing side.
         */
        this.insetEnd = false;
    }
}
__decorate([
    n$8({ type: Boolean, reflect: true })
], Divider.prototype, "inset", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true, attribute: 'inset-start' })
], Divider.prototype, "insetStart", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true, attribute: 'inset-end' })
], Divider.prototype, "insetEnd", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$j = i$4 `:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary A divider is a thin line that groups content in lists and
 * containers.
 *
 * @description Dividers can reinforce tapability, such as when used to separate
 * list items or define tappable regions in an accordion.
 *
 * @final
 * @suppress {visibility}
 */
let MdDivider = class MdDivider extends Divider {
};
MdDivider.styles = [styles$j];
MdDivider = __decorate([
    e$a('md-divider')
], MdDivider);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$i = i$4 `@media(forced-colors: active){.list-item{position:relative}:host([selected]) .list-item:not(:has(.focus-ring[visible]))::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The event that closes any parent menus. It is recommended to subclass and
 * dispatch this event rather than creating your own `close-menu` event.
 */
class CloseMenuEvent extends Event {
    constructor(initiator, reason) {
        super('close-menu', { bubbles: true, composed: true });
        this.initiator = initiator;
        this.reason = reason;
        this.itemPath = [initiator];
    }
}
/**
 * The event that signals to the menu that it should stay open on the focusout
 * event.
 */
class StayOpenOnFocusoutEvent extends Event {
    constructor() {
        super('stay-open-on-focusout', { bubbles: true, composed: true });
    }
}
/**
 * The event that signals to the menu that it should close open on the focusout
 * event.
 */
class CloseOnFocusoutEvent extends Event {
    constructor() {
        super('close-on-focusout', { bubbles: true, composed: true });
    }
}
/**
 * The default close menu event used by md-menu. To create your own `close-menu`
 * event, you should subclass the `CloseMenuEvent` instead.
 */
// tslint:disable-next-line
const DefaultCloseMenuEvent = (CloseMenuEvent);
/**
 * The event that requests the parent md-menu to deactivate all other items.
 */
class DeactivateItemsEvent extends Event {
    constructor() {
        super('deactivate-items', { bubbles: true, composed: true });
    }
}
/**
 * Requests the typeahead functionality of containing menu be deactivated.
 */
class DeactivateTypeaheadEvent extends Event {
    constructor() {
        super('deactivate-typeahead', { bubbles: true, composed: true });
    }
}
/**
 * Requests the typeahead functionality of containing menu be activated.
 */
class ActivateTypeaheadEvent extends Event {
    constructor() {
        super('activate-typeahead', { bubbles: true, composed: true });
    }
}
/**
 * Keys that are used to navigate menus.
 */
const NAVIGABLE_KEY = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    RIGHT: 'ArrowRight',
    LEFT: 'ArrowLeft',
};
/**
 * Keys that are used for selection in menus.
 */
const SELECTION_KEY = {
    SPACE: 'Space',
    ENTER: 'Enter',
};
/**
 * Default close `Reason` kind values.
 */
const CLOSE_REASON = {
    CLICK_SELECTION: 'CLICK_SELECTION',
    KEYDOWN: 'KEYDOWN',
};
/**
 * Keys that can close menus.
 */
const KEYDOWN_CLOSE_KEYS = {
    ESCAPE: 'Escape',
    SPACE: SELECTION_KEY.SPACE,
    ENTER: SELECTION_KEY.ENTER,
};
/**
 * Determines whether the given key code is a key code that should close the
 * menu.
 *
 * @param code The KeyboardEvent code to check.
 * @return Whether or not the key code is in the predetermined list to close the
 * menu.
 */
function isClosableKey(code) {
    return Object.values(KEYDOWN_CLOSE_KEYS).some(value => (value === code));
}
/**
 * Determines whether the given key code is a key code that should select a menu
 * item.
 *
 * @param code They KeyboardEvent code to check.
 * @return Whether or not the key code is in the predetermined list to select a
 * menu item.
 */
function isSelectableKey(code) {
    return Object.values(SELECTION_KEY).some(value => (value === code));
}
/**
 * Determines whether a target element is contained inside another element's
 * composed tree.
 *
 * @param target The potential contained element.
 * @param container The potential containing element of the target.
 * @returns Whether the target element is contained inside the container's
 * composed subtree
 */
function isElementInSubtree(target, container) {
    // Dispatch a composed, bubbling event to check its path to see if the
    // newly-focused element is contained in container's subtree
    const focusEv = new Event('md-contains', { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
        composedPath = ev.composedPath();
    };
    container.addEventListener('md-contains', listener);
    target.dispatchEvent(focusEv);
    container.removeEventListener('md-contains', listener);
    const isContained = composedPath.length > 0;
    return isContained;
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires close-menu {CloseMenuEvent}
 */
class MenuItemEl extends ListItemEl {
    constructor() {
        super(...arguments);
        /**
         * READONLY: self-identifies as a menu item and sets its identifying attribute
         */
        this.isMenuItem = true;
        /**
         * Keeps the menu open if clicked or keyboard selected.
         */
        this.keepOpen = false;
        /**
         * Used for overriding e.g. sub-menu-item.
         */
        this.keepOpenOnClick = false;
        this.listItemRole = 'menuitem';
    }
    onClick() {
        if (this.keepOpen || this.keepOpenOnClick)
            return;
        this.dispatchEvent(new DefaultCloseMenuEvent(this, { kind: CLOSE_REASON.CLICK_SELECTION }));
    }
    onKeydown(e) {
        if (this.keepOpen)
            return;
        const keyCode = e.code;
        if (!e.defaultPrevented && isClosableKey(keyCode)) {
            e.preventDefault();
            this.dispatchEvent(new DefaultCloseMenuEvent(this, { kind: CLOSE_REASON.KEYDOWN, key: keyCode }));
        }
    }
}
__decorate([
    n$8({ type: Boolean, attribute: 'md-menu-item', reflect: true })
], MenuItemEl.prototype, "isMenuItem", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'keep-open' })
], MenuItemEl.prototype, "keepOpen", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$h = i$4 `:host{--_list-item-selected-container-color: var(--md-menu-item-list-item-selected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_list-item-container-color: var(--md-menu-item-list-item-container-color, var(--md-sys-color-surface-container, #f3edf7));--md-list-item-list-item-container-color: var(--_list-item-container-color)}:host([selected]) .list-item{background-color:var(--_list-item-selected-container-color)}.list-item:has(.submenu:hover){--md-ripple-hover-opacity: 0}/*# sourceMappingURL=menu-item-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `MenuItem` interface and also have the `md-menu-item`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * @final
 * @suppress {visibility}
 */
let MdMenuItem = class MdMenuItem extends MenuItemEl {
};
MdMenuItem.styles = [styles$k, styles$h, styles$l, styles$i];
MdMenuItem = __decorate([
    e$a('md-menu-item')
], MdMenuItem);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires close-menu {CloseMenuEvent}
 */
class MenuItemLink extends ListItemLink {
    constructor() {
        super(...arguments);
        /**
         * READONLY: self-identifies as a menu item and sets its identifying attribute
         */
        this.isMenuItem = true;
        /**
         * Keeps the menu open if clicked or keyboard selected.
         */
        this.keepOpen = false;
        this.keepOpenOnClick = false;
    }
    onClick() {
        if (this.keepOpen || this.keepOpenOnClick)
            return;
        this.dispatchEvent(new DefaultCloseMenuEvent(this, { kind: CLOSE_REASON.CLICK_SELECTION }));
    }
    onKeydown(e) {
        if (this.keepOpen)
            return;
        const keyCode = e.code;
        // Do not preventDefault on enter or else it will prevent from opening links
        if (!e.defaultPrevented && isClosableKey(keyCode) &&
            keyCode !== SELECTION_KEY.ENTER) {
            e.preventDefault();
            this.dispatchEvent(new DefaultCloseMenuEvent(this, { kind: CLOSE_REASON.KEYDOWN, key: keyCode }));
        }
    }
}
__decorate([
    n$8({ type: Boolean, attribute: 'md-menu-item', reflect: true })
], MenuItemLink.prototype, "isMenuItem", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'keep-open' })
], MenuItemLink.prototype, "keepOpen", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `MenuItem` interface and also have the `md-menu-item`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * This is a linkable variant.
 *
 * @final
 * @suppress {visibility}
 */
let MdMenuItemLink = class MdMenuItemLink extends MenuItemLink {
};
MdMenuItemLink.styles = [styles$k, styles$h, styles$l, styles$i];
MdMenuItemLink = __decorate([
    e$a('md-menu-item-link')
], MdMenuItemLink);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function stopPropagation(e) {
    e.stopPropagation();
}
/**
 * @fires deactivate-items {DeactivateItemsEvent} Requests the parent menu to
 *     deselect other items when a submenu opens
 * @fires deactivate-typeahead {DeactivateItemsEvent} Requests the parent menu
 *     to deactivate the typeahead functionality when a submenu opens
 * @fires activate-typeahead {DeactivateItemsEvent} Requests the parent menu to
 *     activate the typeahead functionality when a submenu closes
 * @fires stay-open-on-focusout {StayOpenOnFocusoutEvent} Requests the parent
 *     menu to stay open when focusout event is fired or has a `null`
 *     `relatedTarget` when submenu is opened.
 * @fires close-on-focusout {CloseOnFocusoutEvent} Requests the parent
 *     menu to close when focusout event is fired or has a `null`
 *     `relatedTarget` When submenu is closed.
 */
class SubMenuItem extends MenuItemEl {
    constructor() {
        super(...arguments);
        /**
         * The anchorCorner to set on the submenu.
         */
        this.anchorCorner = 'START_END';
        /**
         * The menuCorner to set on the submenu.
         */
        this.menuCorner = 'START_START';
        /**
         * The delay between pointerenter and submenu opening.
         */
        this.hoverOpenDelay = 400;
        /**
         * The delay between ponterleave and the submenu closing.
         */
        this.hoverCloseDelay = 400;
        /**
         * Sets the item in the selected visual state when a submenu is opened.
         */
        this.selected = false;
        this.keepOpenOnClick = true;
        this.previousOpenTimeout = 0;
        this.previousCloseTimeout = 0;
        /**
         * Starts the default 400ms countdown to open the submenu.
         */
        this.onPointerenter = () => {
            clearTimeout(this.previousOpenTimeout);
            clearTimeout(this.previousCloseTimeout);
            if (this.submenuEl?.open)
                return;
            // Open synchronously if delay is 0. (screenshot tests infra
            // would never resolve otherwise)
            if (!this.hoverOpenDelay) {
                this.show();
            }
            else {
                this.previousOpenTimeout = setTimeout(() => {
                    this.show();
                }, this.hoverOpenDelay);
            }
        };
        /**
         * Starts the default 400ms countdown to close the submenu.
         */
        this.onPointerleave = () => {
            clearTimeout(this.previousCloseTimeout);
            clearTimeout(this.previousOpenTimeout);
            // Close synchronously if delay is 0. (screenshot tests infra
            // would never resolve otherwise)
            if (!this.hoverCloseDelay) {
                this.close();
            }
            else {
                this.previousCloseTimeout = setTimeout(() => {
                    this.close();
                }, this.hoverCloseDelay);
            }
        };
    }
    get submenuEl() {
        return this.menus[0];
    }
    onClick() {
        this.show();
    }
    /**
     * On item keydown handles opening the submenu.
     */
    onKeydown(e) {
        const shouldOpenSubmenu = this.isSubmenuOpenKey(e.code);
        if (e.code === SELECTION_KEY.SPACE) {
            // prevent space from scrolling. Only open the submenu.
            e.preventDefault();
        }
        if (!shouldOpenSubmenu) {
            super.onKeydown(e);
            return;
        }
        const submenu = this.submenuEl;
        if (!submenu)
            return;
        const submenuItems = submenu.items;
        const firstActivatableItem = List.getFirstActivatableItem(submenuItems);
        if (firstActivatableItem) {
            this.show(() => {
                firstActivatableItem.active = true;
            });
            return;
        }
    }
    /**
     * Render the submenu at the end
     */
    renderEnd() {
        return x `${super.renderEnd()}${this.renderSubMenu()}`;
    }
    /**
     * Renders the slot for the submenu.
     */
    renderSubMenu() {
        return x `<span class="submenu"><slot
        name="submenu"
        @pointerdown=${stopPropagation}
        @click=${stopPropagation}
        @keydown=${this.onSubMenuKeydown}
        @close-menu=${this.onCloseSubmenu}
    ></slot></span>`;
    }
    onCloseSubmenu(e) {
        e.itemPath.push(this);
        // Restore focusout behavior
        this.dispatchEvent(new CloseOnFocusoutEvent());
        this.dispatchEvent(new ActivateTypeaheadEvent());
        // Escape should only close one menu not all of the menus unlike space or
        // click selection which should close all menus.
        if (e.reason.kind === CLOSE_REASON.KEYDOWN &&
            e.reason.key === KEYDOWN_CLOSE_KEYS.ESCAPE) {
            e.stopPropagation();
            this.active = true;
            this.selected = false;
            // It might already be active so manually focus
            this.listItemRoot?.focus();
            return;
        }
        this.active = false;
        this.selected = false;
    }
    async onSubMenuKeydown(e) {
        // Stop propagation so that we don't accidentally close every parent menu.
        // Additionally, we want to isolate things like the typeahead keydowns
        // from bubbling up to the parent menu and confounding things.
        e.stopPropagation();
        const shouldClose = this.isSubmenuCloseKey(e.code);
        if (!shouldClose)
            return;
        this.close(() => {
            List.deactivateActiveItem(this.submenuEl.items);
            this.listItemRoot?.focus();
            this.active = true;
        });
    }
    /**
     * Shows the submenu.
     *
     * @param onOpened A function to call after the menu is opened.
     */
    show(onOpened = () => { }) {
        const menu = this.submenuEl;
        if (!menu)
            return;
        menu.quick = true;
        // Submenus are in overflow when not fixed. Can remove once we have native
        // popup support
        menu.hasOverflow = true;
        menu.anchorCorner = this.anchorCorner;
        menu.menuCorner = this.menuCorner;
        menu.anchor = this;
        // We manually set focus with `active` on keyboard navigation. And we
        // want to focus the root on hover, so the user can pick up navigation with
        // keyboard after hover.
        menu.defaultFocus = 'LIST_ROOT';
        menu.skipRestoreFocus = true;
        menu.stayOpenOnOutsideClick = true;
        menu.stayOpenOnFocusout = true;
        // Menu could already be opened because of mouse interaction
        const menuAlreadyOpen = menu.open;
        // We want the parent to stay open in the case such that a middle submenu
        // has a submenuitem hovered which opens a third submenut. Then if you hover
        // on yet another middle menu-item (not submenuitem) then focusout Event's
        // relatedTarget will be `null` thus, causing all the menus to close
        this.dispatchEvent(new StayOpenOnFocusoutEvent());
        menu.show();
        // Deactivate other items. This can be the case if the user has tabbed
        // around the menu and then mouses over an md-sub-menu.
        this.dispatchEvent(new DeactivateItemsEvent());
        this.dispatchEvent(new DeactivateTypeaheadEvent());
        this.selected = true;
        // This is the case of mouse hovering when already opened via keyboard or
        // vice versa
        if (menuAlreadyOpen) {
            onOpened();
        }
        else {
            menu.addEventListener('opened', onOpened, { once: true });
        }
    }
    /**
     * Closes the submenu.
     *
     * @param onClosed A function to call after the menu is closed.
     */
    close(onClosed = () => { }) {
        const menu = this.submenuEl;
        if (!menu || !menu.open)
            return;
        this.dispatchEvent(new ActivateTypeaheadEvent());
        menu.quick = true;
        menu.close();
        // Restore focusout behavior.
        this.dispatchEvent(new CloseOnFocusoutEvent());
        this.active = false;
        this.selected = false;
        menu.addEventListener('closed', onClosed, { once: true });
    }
    /**
     * Determines whether the given KeyboardEvent code is one that should open
     * the submenu. This is RTL-aware. By default, left, right, space, or enter.
     *
     * @param code The native KeyboardEvent code.
     * @return Whether or not the key code should open the submenu.
     */
    isSubmenuOpenKey(code) {
        const isRtl = getComputedStyle(this).direction === 'rtl';
        const arrowEnterKey = isRtl ? NAVIGABLE_KEY.LEFT : NAVIGABLE_KEY.RIGHT;
        switch (code) {
            case arrowEnterKey:
            case SELECTION_KEY.SPACE:
            case SELECTION_KEY.ENTER:
                return true;
            default:
                return false;
        }
    }
    /**
     * Determines whether the given KeyboardEvent code is one that should close
     * the submenu. This is RTL-aware. By default right, left, or escape.
     *
     * @param code The native KeyboardEvent code.
     * @return Whether or not the key code should close the submenu.
     */
    isSubmenuCloseKey(code) {
        const isRtl = getComputedStyle(this).direction === 'rtl';
        const arrowEnterKey = isRtl ? NAVIGABLE_KEY.RIGHT : NAVIGABLE_KEY.LEFT;
        switch (code) {
            case arrowEnterKey:
            case KEYDOWN_CLOSE_KEYS.ESCAPE:
                return true;
            default:
                return false;
        }
    }
}
__decorate([
    n$8({ attribute: 'anchor-corner' })
], SubMenuItem.prototype, "anchorCorner", void 0);
__decorate([
    n$8({ attribute: 'menu-corner' })
], SubMenuItem.prototype, "menuCorner", void 0);
__decorate([
    n$8({ type: Number, attribute: 'hover-open-delay' })
], SubMenuItem.prototype, "hoverOpenDelay", void 0);
__decorate([
    n$8({ type: Number, attribute: 'hover-close-delay' })
], SubMenuItem.prototype, "hoverCloseDelay", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], SubMenuItem.prototype, "selected", void 0);
__decorate([
    l$5({ slot: 'submenu', flatten: true })
], SubMenuItem.prototype, "menus", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `MenuItem` interface and also have the `md-menu-item`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * This menu item will open a sub-menu that is slotted in the `submenu` slot.
 * Additionally, the containing menu must either have `has-overflow` or `fixed`
 * set to `true` in order to display the containing menu properly.
 *
 * @example
 * ```html
 * <div style="position:relative;">
 *   <button
 *       class="anchor"
 *       ${ref(anchorRef)}
 *       @click=${() => this.menuRef.value.show()}>
 *     Click to open menu
 *   </button>
 *   <!--
 *     `has-overflow` is required when using a submenu which overflows the
 *     menu's contents
 *   -->
 *   <md-menu has-overflow ${ref(menuRef)} ${(el) => el.anchor =
 * anchorRef.value}> <md-menu-item header="This is a header"></md-menu-item>
 *     <md-sub-menu-item header="this is a submenu item">
 *       <md-menu slot="submenu">
 *         <md-menu-item
 *           header="This is an item inside a submenu"></md-menu-item>
 *       </md-menu>
 *     </md-sub-menu>
 *   </md-menu>
 * </div>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdSubMenuItem = class MdSubMenuItem extends SubMenuItem {
};
MdSubMenuItem.styles = [styles$k, styles$h, styles$l, styles$i];
MdSubMenuItem = __decorate([
    e$a('md-sub-menu-item')
], MdSubMenuItem);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$g = i$4 `@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Given a surface, an anchor, corners, and some options, this surface will
 * calculate the position of a surface to align the two given corners and keep
 * the surface inside the window viewport. It also provides a StyleInfo map that
 * can be applied to the surface to handle visiblility and position.
 */
class SurfacePositionController {
    /**
     * @param host The host to connect the controller to.
     * @param getProperties A function that returns the properties for the
     * controller.
     */
    constructor(host, getProperties) {
        this.host = host;
        this.getProperties = getProperties;
        // The current styles to apply to the surface.
        this.surfaceStylesInternal = {
            'display': 'none',
        };
        // Previous values stored for change detection. Open change detection is
        // calculated separately so initialize it here.
        this.lastValues = { isOpen: false };
        this.host.addController(this);
    }
    /**
     * The StyleInfo map to apply to the surface via Lit's stylemap
     */
    get surfaceStyles() {
        return this.surfaceStylesInternal;
    }
    /**
     * Calculates the surface's new position required so that the surface's
     * `surfaceCorner` aligns to the anchor's `anchorCorner` while keeping the
     * surface inside the window viewport. This positioning also respects RTL by
     * checking `getComputedStyle()` on the surface element.
     */
    async position() {
        const { surfaceEl, anchorEl, anchorCorner: anchorCornerRaw, surfaceCorner: surfaceCornerRaw, isTopLayer: topLayerRaw, xOffset, yOffset, } = this.getProperties();
        const anchorCorner = anchorCornerRaw.toUpperCase().trim();
        const surfaceCorner = surfaceCornerRaw.toUpperCase().trim();
        if (!surfaceEl || !anchorEl) {
            return;
        }
        // Paint the surface transparently so that we can get the position and the
        // rect info of the surface.
        this.surfaceStylesInternal = {
            'display': 'block',
            'opacity': '0',
        };
        // Wait for it to be visible.
        this.host.requestUpdate();
        await this.host.updateComplete;
        const surfaceRect = surfaceEl.getSurfacePositionClientRect ?
            surfaceEl.getSurfacePositionClientRect() :
            surfaceEl.getBoundingClientRect();
        const anchorRect = anchorEl.getSurfacePositionClientRect ?
            anchorEl.getSurfacePositionClientRect() :
            anchorEl.getBoundingClientRect();
        const [surfaceBlock, surfaceInline] = surfaceCorner.split('_');
        const [anchorBlock, anchorInline] = anchorCorner.split('_');
        // We use number booleans to multiply values rather than `if` / ternary
        // statements because it _heavily_ cuts down on nesting and readability
        const isTopLayer = topLayerRaw ? 1 : 0;
        // LTR depends on the direction of the SURFACE not the anchor.
        const isLTR = getComputedStyle(surfaceEl).direction === 'ltr' ? 1 : 0;
        const isRTL = isLTR ? 0 : 1;
        const isSurfaceInlineStart = surfaceInline === 'START' ? 1 : 0;
        const isSurfaceInlineEnd = surfaceInline === 'END' ? 1 : 0;
        const isSurfaceBlockStart = surfaceBlock === 'START' ? 1 : 0;
        const isSurfaceBlockEnd = surfaceBlock === 'END' ? 1 : 0;
        const isOneInlineEnd = anchorInline !== surfaceInline ? 1 : 0;
        const isOneBlockEnd = anchorBlock !== surfaceBlock ? 1 : 0;
        /*
         * A diagram that helps describe some of the variables used in the following
         * calculations.
         *
         * ┌───── inline/blockTopLayerOffset
         * │       │
         * │     ┌─▼───┐                  Window
         * │    ┌┼─────┴────────────────────────┐
         * │    ││                              │
         * └──► ││  ┌──inline/blockAnchorOffset │
         *      ││  │     │                     │
         *      └┤  │  ┌──▼───┐                 │
         *       │  │ ┌┼──────┤                 │
         *       │  └─►│Anchor│                 │
         *       │    └┴──────┘                 │
         *       │                              │
         *       │     ┌────────────────────────┼────┐
         *       │     │ Surface                │    │
         *       │     │                        │    │
         *       │     │                        │    │
         *       │     │                        │    │
         *       │     │                        │    │
         *       │     │                        │    │
         *       └─────┼────────────────────────┘    ├┐
         *             │ inline/blockOOBCorrection   ││
         *             │                         │   ││
         *             │                         ├──►││
         *             │                         │   ││
         *             └────────────────────────┐▼───┼┘
         *                                      └────┘
         */
        // Whether or not to apply the width of the anchor
        const inlineAnchorOffset = isOneInlineEnd * anchorRect.width + xOffset;
        // The inline position of the anchor relative to window in LTR
        const inlineTopLayerOffsetLTR = isSurfaceInlineStart * anchorRect.left +
            isSurfaceInlineEnd * (window.innerWidth - anchorRect.right);
        // The inline position of the anchor relative to window in RTL
        const inlineTopLayerOffsetRTL = isSurfaceInlineStart * (window.innerWidth - anchorRect.right) +
            isSurfaceInlineEnd * anchorRect.left;
        // The inline position of the anchor relative to window
        const inlineTopLayerOffset = isLTR * inlineTopLayerOffsetLTR + isRTL * inlineTopLayerOffsetRTL;
        // If the surface's inline would be out of bounds of the window, move it
        // back in
        const inlineOutOfBoundsCorrection = Math.min(0, window.innerWidth - inlineTopLayerOffset - inlineAnchorOffset -
            surfaceRect.width);
        // The inline logical value of the surface
        const inline = isTopLayer * inlineTopLayerOffset + inlineAnchorOffset +
            inlineOutOfBoundsCorrection;
        // Whether or not to apply the height of the anchor
        const blockAnchorOffset = isOneBlockEnd * anchorRect.height + yOffset;
        // The absolute block position of the anchor relative to window
        const blockTopLayerOffset = isSurfaceBlockStart * anchorRect.top +
            isSurfaceBlockEnd * (window.innerHeight - anchorRect.bottom);
        // If the surface's block would be out of bounds of the window, move it back
        // in
        const blockOutOfBoundsCorrection = Math.min(0, window.innerHeight - blockTopLayerOffset - blockAnchorOffset -
            surfaceRect.height);
        // The block logical value of the surface
        const block = isTopLayer * blockTopLayerOffset + blockAnchorOffset +
            blockOutOfBoundsCorrection;
        const surfaceBlockProperty = surfaceBlock === 'START' ? 'inset-block-start' : 'inset-block-end';
        const surfaceInlineProperty = surfaceInline === 'START' ? 'inset-inline-start' : 'inset-inline-end';
        this.surfaceStylesInternal = {
            'display': 'block',
            'opacity': '1',
            [surfaceBlockProperty]: `${block}px`,
            [surfaceInlineProperty]: `${inline}px`,
        };
        this.host.requestUpdate();
    }
    hostUpdate() {
        this.onUpdate();
    }
    hostUpdated() {
        this.onUpdate();
    }
    /**
     * Checks whether the properties passed into the controller have changed since
     * the last positioning. If so, it will reposition if the surface is open or
     * close it if the surface should close.
     */
    async onUpdate() {
        const props = this.getProperties();
        let hasChanged = false;
        for (const [key, value] of Object.entries(props)) {
            // tslint:disable-next-line
            hasChanged = hasChanged || (value !== this.lastValues[key]);
            if (hasChanged)
                break;
        }
        const openChanged = this.lastValues.isOpen !== props.isOpen;
        const hasAnchor = !!props.anchorEl;
        const hasSurface = !!props.surfaceEl;
        if (hasChanged && hasAnchor && hasSurface) {
            // Only update isOpen, because if it's closed, we do not want to waste
            // time on a useless reposition calculation. So save the other "dirty"
            // values until next time it opens.
            this.lastValues.isOpen = props.isOpen;
            if (props.isOpen) {
                // We are going to do a reposition, so save the prop values for future
                // dirty checking.
                this.lastValues = props;
                await this.position();
                props.onOpen();
            }
            else if (openChanged) {
                await props.beforeClose();
                this.close();
                props.onClose();
            }
        }
    }
    /**
     * Hides the surface.
     */
    close() {
        this.surfaceStylesInternal = {
            'display': 'none',
        };
        this.host.requestUpdate();
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Indicies to access the TypeaheadRecord tuple type.
 */
const TYPEAHEAD_RECORD = {
    INDEX: 0,
    ITEM: 1,
    TEXT: 2,
};
/**
 * This controller listens to `keydown` events and searches the header text of
 * an array of `MenuItem`s with the corresponding entered keys within the buffer
 * time and activates the item.
 *
 * @example
 * ```ts
 * const typeaheadController = new TypeaheadController(() => ({
 *   typeaheadBufferTime: 50,
 *   getItems: () => Array.from(document.querySelectorAll('md-menu-item'))
 * }));
 * html`
 *   <div
 *       @keydown=${typeaheadController.onKeydown}
 *       tabindex="0"
 *       class="activeItemText">
 *     <!-- focusable element that will receive keydown events -->
 *     Apple
 *   </div>
 *   <div>
 *     <md-menu-item active header="Apple"></md-menu-item>
 *     <md-menu-item header="Apricot"></md-menu-item>
 *     <md-menu-item header="Banana"></md-menu-item>
 *     <md-menu-item header="Olive"></md-menu-item>
 *     <md-menu-item header="Orange"></md-menu-item>
 *   </div>
 * `;
 * ```
 */
class TypeaheadController {
    /**
     * @param getProperties A function that returns the options of the typeahead
     * controller:
     *
     * {
     *   getItems: A function that returns an array of menu items to be searched.
     *   typeaheadBufferTime: The maximum time between each keystroke to keep the
     *       current type buffer alive.
     * }
     */
    constructor(getProperties) {
        this.getProperties = getProperties;
        /**
         * Array of tuples that helps with indexing.
         */
        this.typeaheadRecords = [];
        /**
         * Currently-typed text since last buffer timeout
         */
        this.typaheadBuffer = '';
        /**
         * The timeout id from the current buffer's setTimeout
         */
        this.cancelTypeaheadTimeout = 0;
        /**
         * If we are currently "typing"
         */
        this.isTypingAhead = false;
        /**
         * The record of the last active item.
         */
        this.lastActiveRecord = null;
        /**
         * Apply this listener to the element that will receive `keydown` events that
         * should trigger this controller.
         *
         * @param e The native browser `KeyboardEvent` from the `keydown` event.
         */
        this.onKeydown = (e) => {
            if (this.isTypingAhead) {
                this.typeahead(e);
            }
            else {
                this.beginTypeahead(e);
            }
        };
        /**
         * Ends the current typeahead and clears the buffer.
         */
        this.endTypeahead = () => {
            this.isTypingAhead = false;
            this.typaheadBuffer = '';
            this.typeaheadRecords = [];
        };
    }
    get items() {
        return this.getProperties().getItems();
    }
    get active() {
        return this.getProperties().active;
    }
    /**
     * Sets up typingahead
     */
    beginTypeahead(e) {
        if (!this.active) {
            return;
        }
        // We don't want to typeahead if the _beginning_ of the typeahead is a menu
        // navigation, or a selection. We will handle "Space" only if it's in the
        // middle of a typeahead
        if (e.code === 'Space' || e.code === 'Enter' ||
            e.code.startsWith('Arrow') || e.code === 'Escape') {
            return;
        }
        this.isTypingAhead = true;
        // Generates the record array data structure which is the index, the element
        // and a normalized header.
        this.typeaheadRecords = this.items.map((el, index) => [index, el, el.headline.trim().toLowerCase()]);
        this.lastActiveRecord =
            this.typeaheadRecords.find(record => record[TYPEAHEAD_RECORD.ITEM].active) ??
                null;
        if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].active = false;
        }
        this.typeahead(e);
    }
    /**
     * Performs the typeahead. Based on the normalized items and the current text
     * buffer, finds the _next_ item with matching text and activates it.
     *
     * @example
     *
     * items: Apple, Banana, Olive, Orange, Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Olive
     *
     * @example
     *
     * items: Apple, Banana, Olive (active), Orange, Cucumber
     * buffer: 'o'
     * user types: l
     *
     * activates Olive
     *
     * @example
     *
     * items: Apple, Banana, Olive (active), Orange, Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Orange
     *
     * @example
     *
     * items: Apple, Banana, Olive, Orange (active), Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Olive
     */
    typeahead(e) {
        clearTimeout(this.cancelTypeaheadTimeout);
        // Stop typingahead if one of the navigation or selection keys (except for
        // Space) are pressed
        if (e.code === 'Enter' || e.code.startsWith('Arrow') ||
            e.code === 'Escape') {
            this.endTypeahead();
            if (this.lastActiveRecord) {
                this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].active = false;
            }
            return;
        }
        // If Space is pressed, prevent it from selecting and closing the menu
        if (e.code === 'Space') {
            e.stopPropagation();
            e.preventDefault();
        }
        // Start up a new keystroke buffer timeout
        this.cancelTypeaheadTimeout =
            setTimeout(this.endTypeahead, this.getProperties().typeaheadBufferTime);
        this.typaheadBuffer += e.key.toLowerCase();
        const lastActiveIndex = this.lastActiveRecord ?
            this.lastActiveRecord[TYPEAHEAD_RECORD.INDEX] :
            -1;
        const numRecords = this.typeaheadRecords.length;
        /**
         * Sorting function that will resort the items starting with the given index
         *
         * @example
         *
         * this.typeaheadRecords =
         * 0: [0, <reference>, 'apple']
         * 1: [1, <reference>, 'apricot']
         * 2: [2, <reference>, 'banana']
         * 3: [3, <reference>, 'olive'] <-- lastActiveIndex
         * 4: [4, <reference>, 'orange']
         * 5: [5, <reference>, 'strawberry']
         *
         * this.typeaheadRecords.sort((a,b) => rebaseIndexOnActive(a)
         *                                       - rebaseIndexOnActive(b)) ===
         * 0: [3, <reference>, 'olive'] <-- lastActiveIndex
         * 1: [4, <reference>, 'orange']
         * 2: [5, <reference>, 'strawberry']
         * 3: [0, <reference>, 'apple']
         * 4: [1, <reference>, 'apricot']
         * 5: [2, <reference>, 'banana']
         */
        const rebaseIndexOnActive = (record) => {
            return (record[TYPEAHEAD_RECORD.INDEX] + numRecords - lastActiveIndex) %
                numRecords;
        };
        // records filtered and sorted / rebased around the last active index
        const matchingRecords = this.typeaheadRecords
            .filter(record => !record[TYPEAHEAD_RECORD.ITEM].disabled &&
            record[TYPEAHEAD_RECORD.TEXT].startsWith(this.typaheadBuffer))
            .sort((a, b) => rebaseIndexOnActive(a) - rebaseIndexOnActive(b));
        // Just leave if there's nothing that matches. Native select will just
        // choose the first thing that starts with the next letter in the alphabet
        // but that's out of scope and hard to localize
        if (matchingRecords.length === 0) {
            clearTimeout(this.cancelTypeaheadTimeout);
            if (this.lastActiveRecord) {
                this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].active = false;
            }
            this.endTypeahead();
            return;
        }
        const isNewQuery = this.typaheadBuffer.length === 1;
        let nextRecord;
        // This is likely the case that someone is trying to "tab" through different
        // entries that start with the same letter
        if (this.lastActiveRecord === matchingRecords[0] && isNewQuery) {
            nextRecord = matchingRecords[1] ?? matchingRecords[0];
        }
        else {
            nextRecord = matchingRecords[0];
        }
        if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].active = false;
        }
        this.lastActiveRecord = nextRecord;
        nextRecord[TYPEAHEAD_RECORD.ITEM].active = true;
        return;
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$5;
/**
 * The default value for the typeahead buffer time in Milliseconds.
 */
const DEFAULT_TYPEAHEAD_BUFFER_TIME = 200;
/**
 * Gets the currently focused element on the page.
 *
 * @param activeDoc The document or shadowroot from which to start the search.
 *    Defaults to `window.document`
 * @return Returns the currently deeply focused element or `null` if none.
 */
function getFocusedElement(activeDoc = document) {
    const activeEl = activeDoc.activeElement;
    if (!activeEl) {
        return null;
    }
    if (activeEl.shadowRoot) {
        return getFocusedElement(activeEl.shadowRoot) ?? activeEl;
    }
    return activeEl;
}
/**
 * @fires opening Fired before the opening animation begins
 * @fires opened Fired once the menu is open, after any animations
 * @fires closing Fired before the closing animation begins
 * @fires closed Fired once the menu is closed, after any animations
 */
class Menu extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * The element in which the menu should align to.
         */
        this.anchor = null;
        /**
         * Makes the element use `position:fixed` instead of `position:absolute`. In
         * most cases, the menu should position itself above most other
         * `position:absolute` or `position:fixed` elements when placed inside of
         * them. e.g. using a menu inside of an `md-dialog`.
         *
         * __NOTE__: Fixed menus will not scroll with the page and will be fixed to
         * the window instead.
         */
        this.fixed = false;
        /**
         * Skips the opening and closing animations.
         */
        this.quick = false;
        /**
         * Displays overflow content like a submenu.
         *
         * __NOTE__: This may cause adverse effects if you set
         * `md-menu {max-height:...}`
         * and have items overflowing items in the "y" direction.
         */
        this.hasOverflow = false;
        /**
         * Opens the menu and makes it visible. Alternative to the `.show()` and
         * `.close()` methods
         */
        this.open = false;
        /**
         * Offsets the menu's inline alignment from the anchor by the given number in
         * pixels. This value is direction aware and will follow the LTR / RTL
         * direction.
         *
         * e.g. LTR: positive -> right, negative -> left
         *      RTL: positive -> left, negative -> right
         */
        this.xOffset = 0;
        /**
         * Offsets the menu's block alignment from the anchor by the given number in
         * pixels.
         *
         * e.g. positive -> down, negative -> up
         */
        this.yOffset = 0;
        /**
         * The tabindex of the underlying list element.
         */
        this.listTabIndex = 0;
        /**
         * The role of the underlying list element.
         */
        this.type = 'menu';
        /**
         * The max time between the keystrokes of the typeahead menu behavior before
         * it clears the typeahead buffer.
         */
        this.typeaheadBufferTime = DEFAULT_TYPEAHEAD_BUFFER_TIME;
        /**
         * The corner of the anchor which to align the menu in the standard logical
         * property style of <block>_<inline>.
         */
        this.anchorCorner = 'END_START';
        /**
         * The corner of the menu which to align the anchor in the standard logical
         * property style of <block>_<inline>.
         */
        this.menuCorner = 'START_START';
        /**
         * Keeps the user clicks outside the menu.
         *
         * NOTE: clicking outside may still cause focusout to close the menu so see
         * `stayOpenOnFocusout`.
         */
        this.stayOpenOnOutsideClick = false;
        /**
         * Keeps the menu open when focus leaves the menu's composed subtree.
         *
         * NOTE: Focusout behavior will stop propagation of the focusout event. Set
         * this property to true to opt-out of menu's focuout handling altogether.
         */
        this.stayOpenOnFocusout = false;
        /**
         * After closing, does not restore focus to the last focused element before
         * the menu was opened.
         */
        this.skipRestoreFocus = false;
        /**
         * The element that should be focused by default once opened.
         */
        this.defaultFocus = 'LIST_ROOT';
        this.typeaheadActive = true;
        this.openCloseAnimationSignal = createAnimationSignal();
        /**
         * The element that was focused before the menu opened.
         */
        this.lastFocusedElement = null;
        /**
         * Handles typeahead navigation through the menu.
         */
        this.typeaheadController = new TypeaheadController(() => {
            return {
                getItems: () => this.items,
                typeaheadBufferTime: this.typeaheadBufferTime,
                active: this.typeaheadActive
            };
        });
        /**
         * Handles positioning the surface and aligning it to the anchor.
         */
        this.menuPositionController = new SurfacePositionController(this, () => {
            return {
                anchorCorner: this.anchorCorner,
                surfaceCorner: this.menuCorner,
                surfaceEl: this.surfaceEl,
                anchorEl: this.anchor,
                isTopLayer: this.fixed,
                isOpen: this.open,
                xOffset: this.xOffset,
                yOffset: this.yOffset,
                onOpen: this.onOpened,
                beforeClose: this.beforeClose,
                onClose: this.onClosed,
            };
        });
        /**
         * Saves the last focused element focuses the new element based on
         * `defaultFocus`, and animates open.
         */
        this.onOpened = () => {
            this.lastFocusedElement = getFocusedElement();
            if (!this.listElement)
                return;
            const items = this.listElement.items;
            const activeItemRecord = List.getActiveItem(items);
            if (activeItemRecord && this.defaultFocus !== 'NONE') {
                activeItemRecord.item.active = false;
            }
            switch (this.defaultFocus) {
                case 'FIRST_ITEM':
                    const first = List.getFirstActivatableItem(items);
                    if (first) {
                        first.active = true;
                    }
                    break;
                case 'LAST_ITEM':
                    const last = List.getLastActivatableItem(items);
                    if (last) {
                        last.active = true;
                    }
                    break;
                case 'LIST_ROOT':
                    this.listElement?.focus();
                    break;
                default:
                case 'NONE':
                    // Do nothing.
                    break;
            }
            if (this.quick) {
                this.dispatchEvent(new Event('opening'));
                this.dispatchEvent(new Event('opened'));
            }
            else {
                this.animateOpen();
            }
        };
        /**
         * Animates closed.
         */
        this.beforeClose = async () => {
            this.open = false;
            if (!this.skipRestoreFocus) {
                this.lastFocusedElement?.focus?.();
            }
            if (!this.quick) {
                await this.animateClose();
            }
        };
        /**
         * Focuses the last focused element.
         */
        this.onClosed = () => {
            if (this.quick) {
                this.dispatchEvent(new Event('closing'));
                this.dispatchEvent(new Event('closed'));
            }
        };
        this.onWindowClick = (e) => {
            if (!this.stayOpenOnOutsideClick && !e.composedPath().includes(this)) {
                this.open = false;
            }
        };
    }
    /**
     * Whether the menu is animating upwards or downwards when opening. This is
     * helpful for calculating some animation calculations.
     */
    get openDirection() {
        const menuCornerBlock = this.menuCorner.split('_')[0];
        return menuCornerBlock === 'START' ? 'DOWN' : 'UP';
    }
    /**
     * The menu items associated with this menu. The items must be `MenuItem`s and
     * have both the `md-menu-item` and `md-list-item` attributes.
     */
    get items() {
        const listElement = this.listElement;
        if (listElement) {
            return listElement.items.filter(el => el.hasAttribute('md-menu-item'));
        }
        return [];
    }
    render() {
        return this.renderSurface();
    }
    /**
     * Renders the positionable surface element and its contents.
     */
    renderSurface() {
        // TODO(b/274140618): elevation should be an underlay, not an overlay that
        // tints content
        return x `
       <div
          class="menu ${o$1(this.getSurfaceClasses())}"
          style=${o(this.menuPositionController.surfaceStyles)}
          @focusout=${this.handleFocusout}>
        ${this.renderElevation()}
        ${this.renderList()}
        ${this.renderFocusRing()}
       </div>
     `;
    }
    /**
     * Renders the List element and its items
     */
    renderList() {
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <md-list
          id="list"
          aria-label=${ariaLabel || A}
          type=${this.type}
          listTabIndex=${this.listTabIndex}
          @keydown=${this.handleListKeydown}>
        ${this.renderMenuItems()}
      </md-list>`;
    }
    /**
     * Renders the menu items' slot
     */
    renderMenuItems() {
        return x `<slot
        @close-menu=${this.onCloseMenu}
        @deactivate-items=${this.onDeactivateItems}
        @deactivate-typeahead=${this.handleDeactivateTypeahead}
        @activate-typeahead=${this.handleActivateTypeahead}
        @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
        @close-on-focusout=${this.handleCloseOnFocusout}></slot>`;
    }
    /**
     * Renders the elevation component.
     */
    renderElevation() {
        return x `<md-elevation></md-elevation>`;
    }
    /**
     * Renders the focus ring component.
     */
    renderFocusRing() {
        return x `<md-focus-ring for="list"></md-focus-ring>`;
    }
    getSurfaceClasses() {
        return {
            open: this.open,
            fixed: this.fixed,
            'has-overflow': this.hasOverflow,
        };
    }
    async handleFocusout(e) {
        if (this.stayOpenOnFocusout) {
            return;
        }
        // Stop propagation to prevent nested menus from interfering with each other
        e.stopPropagation();
        if (e.relatedTarget) {
            // Don't close the menu if we are switching focus between menu,
            // md-menu-item, and md-list
            if (isElementInSubtree(e.relatedTarget, this)) {
                return;
            }
        }
        const oldRestoreFocus = this.skipRestoreFocus;
        // allow focus to continue to the next focused object rather than returning
        this.skipRestoreFocus = true;
        this.close();
        // await for close
        await this.updateComplete;
        // return to previous behavior
        this.skipRestoreFocus = oldRestoreFocus;
    }
    // Capture so that we can grab the event before it reaches the list item
    // istelf. Specifically useful for the case where typeahead encounters a space
    // and we don't want the menu item to close the menu.
    handleListKeydown(e) {
        this.typeaheadController.onKeydown(e);
    }
    /**
     * Performs the opening animation:
     *
     * https://direct.googleplex.com/#/spec/295000003+271060003
     */
    animateOpen() {
        const surfaceEl = this.surfaceEl;
        const slotEl = this.slotEl;
        if (!surfaceEl || !slotEl)
            return;
        const openDirection = this.openDirection;
        this.dispatchEvent(new Event('opening'));
        // needs to be imperative because we don't want to mix animation and Lit
        // render timing
        surfaceEl.classList.toggle('animating', true);
        const signal = this.openCloseAnimationSignal.start();
        const height = surfaceEl.offsetHeight;
        const openingUpwards = openDirection === 'UP';
        const children = this.items;
        const FULL_DURATION = 500;
        const SURFACE_OPACITY_DURATION = 50;
        const ITEM_OPACITY_DURATION = 250;
        // We want to fit every child fade-in animation within the full duration of
        // the animation.
        const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_DURATION) / children.length;
        const surfaceHeightAnimation = surfaceEl.animate([{ height: '0px' }, { height: `${height}px` }], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED,
        });
        // When we are opening upwards, we want to make sure the last item is always
        // in view, so we need to translate it upwards the opposite direction of the
        // height animation
        const upPositionCorrectionAnimation = slotEl.animate([
            { transform: openingUpwards ? `translateY(-${height}px)` : '' },
            { transform: '' }
        ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED });
        const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 0 }, { opacity: 1 }], SURFACE_OPACITY_DURATION);
        const childrenAnimations = [];
        for (let i = 0; i < children.length; i++) {
            // If we are animating upwards, then reverse the children list.
            const directionalIndex = openingUpwards ? children.length - 1 - i : i;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: ITEM_OPACITY_DURATION,
                delay: DELAY_BETWEEN_ITEMS * i,
            });
            // Make them all initially hidden and then clean up at the end of each
            // animation.
            child.classList.toggle('hidden', true);
            animation.addEventListener('finish', () => {
                child.classList.toggle('hidden', false);
            });
            childrenAnimations.push([child, animation]);
        }
        signal.addEventListener('abort', () => {
            surfaceHeightAnimation.cancel();
            upPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
                child.classList.toggle('hidden', false);
                animation.cancel();
            });
        });
        surfaceHeightAnimation.addEventListener('finish', () => {
            surfaceEl.classList.toggle('animating', false);
            this.openCloseAnimationSignal.finish();
            this.dispatchEvent(new Event('opened'));
        });
    }
    /**
     * Performs the closing animation:
     *
     * https://direct.googleplex.com/#/spec/295000003+271060003
     */
    animateClose() {
        let resolve;
        let reject;
        // This promise blocks the surface position controller from setting
        // display: none on the surface which will interfere with this animation.
        const animationEnded = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        const surfaceEl = this.surfaceEl;
        const slotEl = this.slotEl;
        if (!surfaceEl || !slotEl) {
            reject();
            return animationEnded;
        }
        const openDirection = this.openDirection;
        const closingDownwards = openDirection === 'UP';
        this.dispatchEvent(new Event('closing'));
        // needs to be imperative because we don't want to mix animation and Lit
        // render timing
        surfaceEl.classList.toggle('animating', true);
        const signal = this.openCloseAnimationSignal.start();
        const height = surfaceEl.offsetHeight;
        const children = this.items;
        const FULL_DURATION = 150;
        const SURFACE_OPACITY_DURATION = 50;
        // The surface fades away at the very end
        const SURFACE_OPACITY_DELAY = FULL_DURATION - SURFACE_OPACITY_DURATION;
        const ITEM_OPACITY_DURATION = 50;
        const ITEM_OPACITY_INITIAL_DELAY = 50;
        const END_HEIGHT_PERCENTAGE = .35;
        // We want to fit every child fade-out animation within the full duration of
        // the animation.
        const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_INITIAL_DELAY - ITEM_OPACITY_DURATION) /
            children.length;
        // The mock has the animation shrink to 35%
        const surfaceHeightAnimation = surfaceEl.animate([
            { height: `${height}px` },
            { height: `${height * END_HEIGHT_PERCENTAGE}px` }
        ], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED_ACCELERATE,
        });
        // When we are closing downwards, we want to make sure the last item is
        // always in view, so we need to translate it upwards the opposite direction
        // of the height animation
        const downPositionCorrectionAnimation = slotEl.animate([
            { transform: '' }, {
                transform: closingDownwards ?
                    `translateY(-${height * (1 - END_HEIGHT_PERCENTAGE)}px)` :
                    ''
            }
        ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED_ACCELERATE });
        const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: SURFACE_OPACITY_DURATION, delay: SURFACE_OPACITY_DELAY });
        const childrenAnimations = [];
        for (let i = 0; i < children.length; i++) {
            // If the animation is closing upwards, then reverse the list of
            // children so that we animate in the opposite direction.
            const directionalIndex = closingDownwards ? i : children.length - 1 - i;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: ITEM_OPACITY_DURATION,
                delay: ITEM_OPACITY_INITIAL_DELAY + DELAY_BETWEEN_ITEMS * i,
            });
            // Make sure the items stay hidden at the end of each child animation.
            // We clean this up at the end of the overall animation.
            animation.addEventListener('finish', () => {
                child.classList.toggle('hidden', true);
            });
            childrenAnimations.push([child, animation]);
        }
        signal.addEventListener('abort', () => {
            surfaceHeightAnimation.cancel();
            downPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
                animation.cancel();
                child.classList.toggle('hidden', false);
            });
            reject();
        });
        surfaceHeightAnimation.addEventListener('finish', () => {
            surfaceEl.classList.toggle('animating', false);
            childrenAnimations.forEach(([child]) => {
                child.classList.toggle('hidden', false);
            });
            this.openCloseAnimationSignal.finish();
            this.dispatchEvent(new Event('closed'));
            resolve(true);
        });
        return animationEnded;
    }
    connectedCallback() {
        super.connectedCallback();
        {
            window.addEventListener('click', this.onWindowClick, { capture: true });
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        {
            window.removeEventListener('click', this.onWindowClick, { capture: true });
        }
    }
    onCloseMenu() {
        this.close();
    }
    onDeactivateItems(e) {
        e.stopPropagation();
        const items = this.items;
        for (const item of items) {
            item.active = false;
            item.selected = false;
        }
    }
    handleDeactivateTypeahead(e) {
        // stopPropagation so that this does not deactivate any typeaheads in menus
        // nested above it e.g. md-sub-menu-item
        e.stopPropagation();
        this.typeaheadActive = false;
    }
    handleActivateTypeahead(e) {
        // stopPropagation so that this does not activate any typeaheads in menus
        // nested above it e.g. md-sub-menu-item
        e.stopPropagation();
        this.typeaheadActive = true;
    }
    handleStayOpenOnFocusout(e) {
        e.stopPropagation();
        this.stayOpenOnFocusout = true;
    }
    handleCloseOnFocusout(e) {
        e.stopPropagation();
        this.stayOpenOnFocusout = false;
    }
    focus() {
        this.listElement?.focus();
    }
    close() {
        this.open = false;
        this.items.forEach(item => {
            item.close?.();
        });
    }
    show() {
        this.open = true;
    }
}
_a$5 = Menu;
(() => {
    requestUpdateOnAriaChange(_a$5);
})();
__decorate([
    i$5('md-list')
], Menu.prototype, "listElement", void 0);
__decorate([
    i$5('.menu')
], Menu.prototype, "surfaceEl", void 0);
__decorate([
    i$5('slot')
], Menu.prototype, "slotEl", void 0);
__decorate([
    n$8({ attribute: false })
], Menu.prototype, "anchor", void 0);
__decorate([
    n$8({ type: Boolean })
], Menu.prototype, "fixed", void 0);
__decorate([
    n$8({ type: Boolean })
], Menu.prototype, "quick", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'has-overflow' })
], Menu.prototype, "hasOverflow", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], Menu.prototype, "open", void 0);
__decorate([
    n$8({ type: Number, attribute: 'x-offset' })
], Menu.prototype, "xOffset", void 0);
__decorate([
    n$8({ type: Number, attribute: 'y-offset' })
], Menu.prototype, "yOffset", void 0);
__decorate([
    n$8({ type: Number, attribute: 'list-tab-index' })
], Menu.prototype, "listTabIndex", void 0);
__decorate([
    n$8()
], Menu.prototype, "type", void 0);
__decorate([
    n$8({ type: Number, attribute: 'typeahead-delay' })
], Menu.prototype, "typeaheadBufferTime", void 0);
__decorate([
    n$8({ attribute: 'anchor-corner' })
], Menu.prototype, "anchorCorner", void 0);
__decorate([
    n$8({ attribute: 'menu-corner' })
], Menu.prototype, "menuCorner", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'stay-open-on-outside-click' })
], Menu.prototype, "stayOpenOnOutsideClick", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'stay-open-on-focusout' })
], Menu.prototype, "stayOpenOnFocusout", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'skip-restore-focus' })
], Menu.prototype, "skipRestoreFocus", void 0);
__decorate([
    n$8({ attribute: 'default-focus' })
], Menu.prototype, "defaultFocus", void 0);
__decorate([
    t$3()
], Menu.prototype, "typeaheadActive", void 0);
__decorate([
    e$8({ capture: true })
], Menu.prototype, "handleListKeydown", null);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$f = i$4 `:host{--_container-color: var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));--_container-elevation: var(--md-menu-container-elevation, 2);--_container-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-menu-container-shape, 4px);--md-list-container-color: var(--_container-color);--md-elevation-level:var(--_container-elevation);--md-elevation-shadow-color:var(--_container-shadow-color);--md-focus-ring-shape: var(--_container-shape);min-width:300px}.menu{border-radius:var(--_container-shape);display:none;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit}.menu.fixed{position:fixed}.menu md-list{height:inherit;max-height:inherit;display:block;overflow:auto;min-width:inherit;border-radius:inherit}.menu.has-overflow md-list{overflow:visible}.menu.animating md-list{pointer-events:none;overflow:hidden}.menu.animating ::slotted(.hidden){opacity:0}.menu slot{display:block;height:inherit;max-height:inherit}/*# sourceMappingURL=menu-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menus appear when users interact with a button, action, or other control.
 *
 * They can be opened from a variety of elements, most commonly icon buttons,
 * buttons, and text fields.
 *
 * md-menu listens for the `close-menu` and `deselect-items` events.
 *
 * - `close-menu` closes the menu when dispatched from a child element.
 * - `deselect-items` deselects all of its immediate menu-item children.
 *
 * @example
 * ```html
 * <div style="position:relative;">
 *   <button
 *       class="anchor"
 *       ${ref(anchorRef)}
 *       @click=${() => this.menuRef.value.show()}>
 *     Click to open menu
 *   </button>
 *   <!--
 *     `has-overflow` is required when using a submenu which overflows the
 *     menu's contents
 *   -->
 *   <md-menu has-overflow ${ref(menuRef)} ${(el) => el.anchor =
 * anchorRef.value}> <md-menu-item header="This is a header"></md-menu-item>
 *     <md-sub-menu-item header="this is a submenu item">
 *       <md-menu slot="submenu">
 *         <md-menu-item
 *           header="This is an item inside a submenu"></md-menu-item>
 *       </md-menu>
 *     </md-sub-menu-item>
 *   </md-menu>
 * </div>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdMenu = class MdMenu extends Menu {
};
MdMenu.styles = [styles$f, styles$g];
MdMenu = __decorate([
    e$a('md-menu')
], MdMenu);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$e = i$4 `@media(forced-colors: active){:host{--md-switch-disabled-selected-icon-color: GrayText;--md-switch-disabled-selected-icon-opacity: 1;--md-switch-disabled-selected-track-color: GrayText;--md-switch-disabled-track-opacity: 1;--md-switch-disabled-unselected-handle-color: GrayText;--md-switch-disabled-unselected-handle-opacity: 1;--md-switch-disabled-unselected-icon-color: Canvas;--md-switch-disabled-unselected-icon-opacity: 1;--md-switch-selected-focus-track-color: ButtonText;--md-switch-selected-hover-track-color: ButtonText;--md-switch-selected-icon-color: ButtonText;--md-switch-selected-hover-icon-color: ButtonText;--md-switch-selected-focus-icon-color: ButtonText;--md-switch-selected-pressed-icon-color: ButtonText;--md-switch-selected-pressed-track-color: ButtonText;--md-switch-selected-track-color: ButtonText;--md-switch-unselected-focus-handle-color: ButtonText;--md-switch-unselected-handle-color: ButtonText;--md-switch-unselected-hover-handle-color: ButtonText;--md-switch-unselected-icon-color: Canvas;--md-switch-unselected-hover-icon-color: Canvas;--md-switch-unselected-focus-icon-color: Canvas;--md-switch-unselected-pressed-icon-color: Canvas;--md-switch-unselected-pressed-handle-color: ButtonText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$4;
/**
 * @fires input {InputEvent} Fired whenever `selected` changes due to user
 * interaction (bubbles and composed).
 * @fires change {Event} Fired whenever `selected` changes due to user
 * interaction (bubbles).
 */
class Switch extends s$2 {
    /**
     * The HTML name to use in form submission.
     */
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this.internals.form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this.internals.labels;
    }
    constructor() {
        super();
        /**
         * Disables the switch and makes it non-interactive.
         */
        this.disabled = false;
        /**
         * Puts the switch in the selected state and sets the form submission value to
         * the `value` property.
         */
        this.selected = false;
        /**
         * Shows both the selected and deselected icons.
         */
        this.icons = false;
        /**
         * Shows only the selected icon, and not the deselected icon. If `true`,
         * overrides the behavior of the `icons` property.
         */
        this.showOnlySelectedIcon = false;
        /**
         * The value associated with this switch on form submission. `null` is
         * submitted when `selected` is `false`.
         */
        this.value = 'on';
        this.internals = this /* needed for closure */.attachInternals();
        {
            this.addEventListener('click', (event) => {
                if (!isActivationClick(event)) {
                    return;
                }
                this.button?.focus();
                if (this.button != null) {
                    // this triggers the click behavior, and the ripple
                    dispatchActivationClick(this.button);
                }
            });
        }
    }
    update(changed) {
        const state = String(this.selected);
        this.internals.setFormValue(this.selected ? this.value : null, state);
        super.update(changed);
    }
    render() {
        // NOTE: buttons must use only [phrasing
        // content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content)
        // children, which includes custom elements, but not `div`s
        return x `
      <button
        id="switch"
        type="button"
        class="switch ${o$1(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label=${this.ariaLabel || A}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <md-focus-ring></md-focus-ring>
        <span class="track">
          ${this.renderHandle()}
        </span>
      </button>
    `;
    }
    getRenderClasses() {
        return {
            'switch--selected': this.selected,
            'switch--unselected': !this.selected,
        };
    }
    renderHandle() {
        const classes = {
            'with-icon': this.icons || (this.showOnlySelectedIcon && this.selected),
        };
        return x `
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${o$1(classes)}">
          ${this.shouldShowIcons() ? this.renderIcons() : x ``}
        </span>
        ${this.renderTouchTarget()}
      </span>
    `;
    }
    renderIcons() {
        return x `
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon ? x `` : this.renderOffIcon()}
      </div>
    `;
    }
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     */
    renderOnIcon() {
        return x `
      <svg class="icon icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `;
    }
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aclose%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     */
    renderOffIcon() {
        return x `
      <svg class="icon icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `;
    }
    renderTouchTarget() {
        return x `<span class="touch"></span>`;
    }
    shouldShowIcons() {
        return this.icons || this.showOnlySelectedIcon;
    }
    handleClick() {
        if (this.disabled) {
            return;
        }
        this.selected = !this.selected;
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        // Bubbles but does not compose to mimic native browser <input> & <select>
        // Additionally, native change event is not an InputEvent.
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
    /** @private */
    formResetCallback() {
        // The selected property does not reflect, so the original attribute set by
        // the user is used to determine the default value.
        this.selected = this.hasAttribute('selected');
    }
    /** @private */
    formStateRestoreCallback(state) {
        this.selected = state === 'true';
    }
}
_a$4 = Switch;
(() => {
    requestUpdateOnAriaChange(_a$4);
})();
Switch.shadowRootOptions = { mode: 'open', delegatesFocus: true };
/** @nocollapse */
Switch.formAssociated = true;
__decorate([
    n$8({ type: Boolean, reflect: true })
], Switch.prototype, "disabled", void 0);
__decorate([
    n$8({ type: Boolean })
], Switch.prototype, "selected", void 0);
__decorate([
    n$8({ type: Boolean })
], Switch.prototype, "icons", void 0);
__decorate([
    n$8({ type: Boolean })
], Switch.prototype, "showOnlySelectedIcon", void 0);
__decorate([
    i$5('button')
], Switch.prototype, "button", void 0);
__decorate([
    n$8()
], Switch.prototype, "value", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$d = i$4 `:host{--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));--_disabled-selected-handle-opacity: var(--md-switch-disabled-selected-handle-opacity, 1);--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-switch-disabled-selected-icon-opacity, 0.38);--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-track-opacity: var(--md-switch-disabled-track-opacity, 0.12);--_disabled-unselected-handle-color: var(--md-switch-disabled-unselected-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-handle-opacity: var(--md-switch-disabled-unselected-handle-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-switch-disabled-unselected-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-unselected-icon-opacity: var(--md-switch-disabled-unselected-icon-opacity, 0.38);--_disabled-unselected-track-color: var(--md-switch-disabled-unselected-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-unselected-track-outline-color: var(--md-switch-disabled-unselected-track-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_handle-shape: var(--md-switch-handle-shape, 9999px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-shape: var(--md-switch-track-shape, 9999px);--_track-width: var(--md-switch-track-width, 52px);--_unselected-focus-handle-color: var(--md-switch-unselected-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-icon-color: var(--md-switch-unselected-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-focus-track-color: var(--md-switch-unselected-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-focus-track-outline-color: var(--md-switch-unselected-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-handle-color: var(--md-switch-unselected-handle-color, var(--md-sys-color-outline, #79747e));--_unselected-handle-height: var(--md-switch-unselected-handle-height, 16px);--_unselected-handle-width: var(--md-switch-unselected-handle-width, 16px);--_unselected-hover-handle-color: var(--md-switch-unselected-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-switch-unselected-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-hover-state-layer-color: var(--md-switch-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-hover-state-layer-opacity: var(--md-switch-unselected-hover-state-layer-opacity, 0.08);--_unselected-hover-track-color: var(--md-switch-unselected-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-hover-track-outline-color: var(--md-switch-unselected-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-icon-color: var(--md-switch-unselected-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-icon-size: var(--md-switch-unselected-icon-size, 16px);--_unselected-pressed-handle-color: var(--md-switch-unselected-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-switch-unselected-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-pressed-state-layer-color: var(--md-switch-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-pressed-state-layer-opacity: var(--md-switch-unselected-pressed-state-layer-opacity, 0.12);--_unselected-pressed-track-color: var(--md-switch-unselected-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-pressed-track-outline-color: var(--md-switch-unselected-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-track-color: var(--md-switch-unselected-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-track-outline-color: var(--md-switch-unselected-track-outline-color, var(--md-sys-color-outline, #79747e));--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);--_handle-shape-start-start: var( --md-switch-handle-shape-start-start, var(--_handle-shape) );--_handle-shape-start-end: var( --md-switch-handle-shape-start-end, var(--_handle-shape) );--_handle-shape-end-end: var( --md-switch-handle-shape-end-end, var(--_handle-shape) );--_handle-shape-end-start: var( --md-switch-handle-shape-end-start, var(--_handle-shape) );--_track-shape-start-start: var( --md-switch-track-shape-start-start, var(--_track-shape) );--_track-shape-start-end: var( --md-switch-track-shape-start-end, var(--_track-shape) );--_track-shape-end-end: var( --md-switch-track-shape-end-end, var(--_track-shape) );--_track-shape-end-start: var( --md-switch-track-shape-end-start, var(--_track-shape) );display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-focus-ring-shape-start-start: var(--_track-shape-start-start);--md-focus-ring-shape-start-end: var(--_track-shape-start-end);--md-focus-ring-shape-end-end: var(--_track-shape-end-end);--md-focus-ring-shape-end-start: var(--_track-shape-end-start)}.switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.touch{position:absolute;height:48px;width:48px}.switch:disabled{cursor:default;pointer-events:none}.switch:disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.switch:disabled .track::before{background-clip:content-box}.switch--selected:disabled .track{background-clip:border-box}.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.switch:disabled .track::before,.switch:disabled .track::after{transition:none;opacity:var(--_disabled-track-opacity)}.switch--selected .track::before{background-color:var(--_selected-track-color)}.switch--selected:hover .track::before{background-color:var(--_selected-hover-track-color)}.switch--selected:focus-within .track::before{background-color:var(--_selected-focus-track-color)}.switch--selected:active .track::before{background-color:var(--_selected-pressed-track-color)}.switch--selected:disabled .track::before{background-color:var(--_disabled-selected-track-color)}.switch--unselected .track::before{background-color:var(--_unselected-track-color);border-color:var(--_unselected-track-outline-color);border-style:solid;border-width:var(--_track-outline-width)}.switch--unselected:hover .track::before{background-color:var(--_unselected-hover-track-color);border-color:var(--_unselected-hover-track-outline-color)}.switch--unselected:focus-visible .track::before{background-color:var(--_unselected-focus-track-color);border-color:var(--_unselected-focus-track-outline-color)}.switch--unselected:active .track::before{background-color:var(--_unselected-pressed-track-color);border-color:var(--_unselected-pressed-track-outline-color)}.switch--unselected:disabled .track::before{background-color:var(--_disabled-unselected-track-color);border-color:var(--_disabled-unselected-track-outline-color)}.handle-container{display:grid;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch--selected .handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.switch--unselected .handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.switch:disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_unselected-handle-height);width:var(--_unselected-handle-width);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.switch:disabled .handle,.switch:disabled .handle::before{transition:none}.switch--selected .handle{height:var(--_selected-handle-height);width:var(--_selected-handle-width)}.handle.with-icon{height:var(--_with-icon-handle-height);width:var(--_with-icon-handle-width)}.switch--selected:enabled:active .handle,.switch--unselected:enabled:active .handle{height:var(--_pressed-handle-height);width:var(--_pressed-handle-width);transition-timing-function:linear;transition-duration:100ms}.switch--selected .handle::before{background-color:var(--_selected-handle-color)}.switch--selected:hover .handle::before{background-color:var(--_selected-hover-handle-color)}.switch--selected:focus-within .handle::before{background-color:var(--_selected-focus-handle-color)}.switch--selected:active .handle::before{background-color:var(--_selected-pressed-handle-color)}.switch--selected:disabled .handle::before{background-color:var(--_disabled-selected-handle-color);opacity:var(--_disabled-selected-handle-opacity)}.switch--unselected .handle::before{background-color:var(--_unselected-handle-color)}.switch--unselected:hover .handle::before{background-color:var(--_unselected-hover-handle-color)}.switch--unselected:focus-within .handle::before{background-color:var(--_unselected-focus-handle-color)}.switch--unselected:active .handle::before{background-color:var(--_unselected-pressed-handle-color)}.switch--unselected:disabled .handle::before{background-color:var(--_disabled-unselected-handle-color);opacity:var(--_disabled-unselected-handle-opacity)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.switch--selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.switch--unselected md-ripple{--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.switch:disabled .icon{transition:none}.switch--selected .icon--on,.switch--unselected .icon--off{opacity:1}.switch--unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--_unselected-icon-size);height:var(--_unselected-icon-size);fill:var(--_unselected-icon-color)}.switch--unselected:hover .icon--off{fill:var(--_unselected-hover-icon-color)}.switch--unselected:focus-within .icon--off{fill:var(--_unselected-focus-icon-color)}.switch--unselected:active .icon--off{fill:var(--_unselected-pressed-icon-color)}.switch--unselected:disabled .icon--off{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}.icon--on{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.switch--selected:hover .icon--on{fill:var(--_selected-hover-icon-color)}.switch--selected:focus-within .icon--on{fill:var(--_selected-focus-icon-color)}.switch--selected:active .icon--on{fill:var(--_selected-pressed-icon-color)}.switch--selected:disabled .icon--on{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=switch-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Switches toggle the state of a single item on or off.
 *
 * @description
 * There's one type of switch in Material. Use this selection control when the
 * user needs to toggle a single item on or off.
 *
 * @final
 * @suppress {visibility}
 */
let MdSwitch = class MdSwitch extends Switch {
};
MdSwitch.styles = [styles$d, styles$e];
MdSwitch = __decorate([
    e$a('md-switch')
], MdSwitch);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns `true` if the given element is in a right-to-left direction.
 *
 * @param el Element to determine direction from
 * @param shouldCheck Optional. If `false`, return `false` without checking
 *     direction. Determining the direction of `el` is somewhat expensive, so
 *     this parameter can be used as a conditional guard. Defaults to `true`.
 */
function isRtl(el, shouldCheck = true) {
    return shouldCheck &&
        getComputedStyle(el).getPropertyValue('direction').trim() === 'rtl';
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$3;
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class IconButton extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Disables the icon button and makes it non-interactive.
         */
        this.disabled = false;
        /**
         * Flips the icon if it is in an RTL context at startup.
         */
        this.flipIconInRtl = false;
        /**
         * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
         */
        this.href = '';
        /**
         * Sets the underlying `HTMLAnchorElement`'s `target` attribute.
         */
        this.target = '';
        /**
         * When true, the button will toggle between selected and unselected
         * states
         */
        this.toggle = false;
        /**
         * Sets the selected state. When false, displays the default icon. When true,
         * displays the `selectedIcon`, or the default icon If no `selectedIcon` is
         * provided.
         */
        this.selected = false;
        this.flipIcon = isRtl(this, this.flipIconInRtl);
    }
    /**
     * Link buttons cannot be disabled.
     */
    willUpdate() {
        if (this.href) {
            this.disabled = false;
        }
    }
    render() {
        const tag = this.href ? i$1 `div` : i$1 `button`;
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        const hasToggledAriaLabel = ariaLabel && this.selectedAriaLabel;
        const ariaPressedValue = hasToggledAriaLabel ? A : this.selected;
        let ariaLabelValue = A;
        if (!this.href) {
            ariaLabelValue = (hasToggledAriaLabel && this.selected) ?
                this.selectedAriaLabel :
                ariaLabel;
        }
        return n$2 `<${tag}
        class="icon-button ${o$1(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || A}"
        aria-haspopup="${!this.href && ariaHasPopup || A}"
        aria-expanded="${!this.href && ariaExpanded || A}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : A}
        ${this.selected ? this.renderSelectedIcon() : A}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`;
    }
    renderLink() {
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target || A}"
        aria-label="${ariaLabel || A}"
      ></a>
    `;
    }
    getRenderClasses() {
        return {
            'flip-icon': this.flipIcon,
            'selected': this.toggle && this.selected,
        };
    }
    renderIcon() {
        return x `<span class="icon"><slot></slot></span>`;
    }
    renderSelectedIcon() {
        // Use default slot as fallback to not require specifying multiple icons
        return x `<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`;
    }
    renderTouchTarget() {
        return x `<span class="touch"></span>`;
    }
    renderFocusRing() {
        return x `<md-focus-ring for=${this.href ? 'link' : 'button'}></md-focus-ring>`;
    }
    renderRipple() {
        return x `<md-ripple
      for=${this.href ? 'link' : A}
      ?disabled="${!this.href && this.disabled}"
    ></md-ripple>`;
    }
    connectedCallback() {
        this.flipIcon = isRtl(this, this.flipIconInRtl);
        super.connectedCallback();
    }
    handleClick() {
        if (!this.toggle || this.disabled) {
            return;
        }
        this.selected = !this.selected;
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        // Bubbles but does not compose to mimic native browser <input> & <select>
        // Additionally, native change event is not an InputEvent.
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
}
_a$3 = IconButton;
(() => {
    requestUpdateOnAriaChange(_a$3);
})();
__decorate([
    n$8({ type: Boolean, reflect: true })
], IconButton.prototype, "disabled", void 0);
__decorate([
    n$8({ type: Boolean })
], IconButton.prototype, "flipIconInRtl", void 0);
__decorate([
    n$8()
], IconButton.prototype, "href", void 0);
__decorate([
    n$8()
], IconButton.prototype, "target", void 0);
__decorate([
    n$8({ attribute: 'selected-aria-label', reflect: true })
], IconButton.prototype, "selectedAriaLabel", void 0);
__decorate([
    n$8({ type: Boolean })
], IconButton.prototype, "toggle", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], IconButton.prototype, "selected", void 0);
__decorate([
    t$3()
], IconButton.prototype, "flipIcon", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$c = i$4 `:host{--_container-shape: var(--md-outlined-icon-button-container-shape, 9999px);--_container-size: var(--md-outlined-icon-button-container-size, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_disabled-unselected-outline-color: var(--md-outlined-icon-button-disabled-unselected-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-outline-opacity: var(--md-outlined-icon-button-disabled-unselected-outline-opacity, 0.12);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_unselected-focus-icon-color: var(--md-outlined-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-outlined-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-outlined-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-icon-color: var(--md-outlined-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-outline-color: var(--md-outlined-icon-button-unselected-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-outline-width: var(--md-outlined-icon-button-unselected-outline-width, 1px);--_unselected-pressed-icon-color: var(--md-outlined-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-pressed-state-layer-color: var(--md-outlined-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var( --md-outlined-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-icon-button-container-shape-end-start, var(--_container-shape) )}.outlined{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_unselected-outline-color);border-width:var(--_unselected-outline-width)}.outlined:hover{color:var(--_unselected-hover-icon-color)}.outlined:focus{color:var(--_unselected-focus-icon-color)}.outlined:active{color:var(--_unselected-pressed-icon-color)}.outlined:disabled{color:var(--_disabled-icon-color)}.outlined:disabled::before{border-color:var(--_disabled-unselected-outline-color);opacity:var(--_disabled-unselected-outline-opacity)}.outlined:disabled .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}.selected:disabled::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){.selected::before{border-color:var(--_unselected-outline-color);border-width:var(--_unselected-outline-width)}.selected:disabled::before{border-color:var(--_disabled-unselected-outline-color);opacity:var(--_disabled-unselected-outline-opacity)}}/*# sourceMappingURL=outlined-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$b = i$4 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdOutlinedIconButton = class MdOutlinedIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'outlined': true,
        };
    }
};
MdOutlinedIconButton.styles = [styles$b, styles$c];
MdOutlinedIconButton = __decorate([
    e$a('md-outlined-icon-button')
], MdOutlinedIconButton);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$a = i$4 `:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-filled-icon-button-container-shape, 9999px);--_container-size: var(--md-filled-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-unselected-focus-icon-color: var(--md-filled-icon-button-toggle-unselected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-icon-color: var(--md-filled-icon-button-toggle-unselected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-state-layer-color: var(--md-filled-icon-button-toggle-unselected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-icon-color: var(--md-filled-icon-button-toggle-unselected-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-icon-color: var(--md-filled-icon-button-toggle-unselected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-unselected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-unselected-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-unselected-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-unselected-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-unselected-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-unselected-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdFilledIconButton = class MdFilledIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'filled': true,
            'toggle-filled': this.toggle,
        };
    }
};
MdFilledIconButton.styles = [styles$b, styles$a];
MdFilledIconButton = __decorate([
    e$a('md-filled-icon-button')
], MdFilledIconButton);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$9 = i$4 `:host{--_container-color: var(--md-filled-tonal-icon-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-shape: var(--md-filled-tonal-icon-button-container-shape, 9999px);--_container-size: var(--md-filled-tonal-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-tonal-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-tonal-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-icon-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-icon-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-icon-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-tonal-icon-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-tonal-icon-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-icon-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-tonal-icon-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_toggle-selected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-unselected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-container-color: var(--md-filled-tonal-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-tonal-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled-tonal{--md-ripple-hover-color: var(--_toggle-unselected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-unselected-pressed-state-layer-color)}.toggle-filled-tonal:not(:disabled){color:var(--_toggle-unselected-icon-color)}.toggle-filled-tonal:not(:disabled):hover{color:var(--_toggle-unselected-hover-icon-color)}.toggle-filled-tonal:not(:disabled):focus{color:var(--_toggle-unselected-focus-icon-color)}.toggle-filled-tonal:not(:disabled):active{color:var(--_toggle-unselected-pressed-icon-color)}.toggle-filled-tonal:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdFilledTonalIconButton = class MdFilledTonalIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'filled-tonal': true,
            'toggle-filled-tonal': this.toggle,
        };
    }
};
MdFilledTonalIconButton.styles = [styles$b, styles$9];
MdFilledTonalIconButton = __decorate([
    e$a('md-filled-tonal-icon-button')
], MdFilledTonalIconButton);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$8 = i$4 `:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity: var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color: var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity: var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-focus-ring-shape: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.standard:hover{color:var(--_unselected-hover-icon-color)}.standard:focus{color:var(--_unselected-focus-icon-color)}.standard:active{color:var(--_unselected-pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 */
let MdStandardIconButton = class MdStandardIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'standard': true,
        };
    }
};
MdStandardIconButton.styles = [styles$b, styles$8];
MdStandardIconButton = __decorate([
    e$a('md-standard-icon-button')
], MdStandardIconButton);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$7 = i$4 `@media(forced-colors: active){:host{--md-filled-select-text-field-disabled-active-indicator-color: GrayText;--md-filled-select-text-field-disabled-active-indicator-opacity: 1;--md-filled-select-text-field-disabled-input-text-color: GrayText;--md-filled-select-text-field-disabled-input-text-opacity: 1;--md-filled-select-text-field-disabled-label-text-color: GrayText;--md-filled-select-text-field-disabled-label-text-opacity: 1;--md-filled-select-text-field-disabled-leading-icon-color: GrayText;--md-filled-select-text-field-disabled-leading-icon-opacity: 1;--md-filled-select-text-field-disabled-supporting-text-color: GrayText;--md-filled-select-text-field-disabled-supporting-text-opacity: 1;--md-filled-select-text-field-disabled-trailing-icon-color: GrayText;--md-filled-select-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=filled-forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Given a list of select options, this function will return an array of
 * SelectOptionRecords that are selected.
 *
 * @return An array of SelectOptionRecords describing the options that are
 * selected.
 */
function getSelectedItems(items) {
    const selectedItemRecords = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.selected) {
            selectedItemRecords.push([item, i]);
        }
    }
    return selectedItemRecords;
}
/**
 * An event fired by a SelectOption to request selection from md-select.
 * Typically fired after `selected` changes from `false` to `true`.
 */
class RequestSelectionEvent extends Event {
    constructor() {
        super('request-selection', { bubbles: true, composed: true });
    }
}
/**
 * An event fired by a SelectOption to request deselection from md-select.
 * Typically fired after `selected` changes from `true` to `false`.
 */
class RequestDeselectionEvent extends Event {
    constructor() {
        super('request-deselection', { bubbles: true, composed: true });
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$2;
const VALUE = Symbol('value');
/**
 * @fires input Fired when a selection is made by the user via mouse or keyboard
 * interaction.
 * @fires change Fired when a selection is made by the user via mouse or
 * keyboard interaction.
 */
class Select extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Opens the menu synchronously with no animation.
         */
        this.quick = false;
        /**
         * Whether or not the select is required.
         */
        this.required = false;
        /**
         * Disables the select.
         */
        this.disabled = false;
        /**
         * The error message that replaces supporting text when `error` is true. If
         * `errorText` is an empty string, then the supporting text will continue to
         * show.
         *
         * Calling `reportValidity()` will automatically update `errorText` to the
         * native `validationMessage`.
         */
        this.errorText = '';
        /**
         * The floating label for the field.
         */
        this.label = '';
        /**
         * Conveys additional information below the text field, such as how it should
         * be used.
         */
        this.supportingText = '';
        /**
         * Gets or sets whether or not the text field is in a visually invalid state.
         *
         * Calling `reportValidity()` will automatically update `error`.
         */
        this.error = false;
        /**
         * Whether or not the underlying md-menu should be position: fixed to display
         * in a top-level manner.
         */
        this.menuFixed = false;
        /**
         * The max time between the keystrokes of the typeahead select / menu behavior
         * before it clears the typeahead buffer.
         */
        this.typeaheadBufferTime = DEFAULT_TYPEAHEAD_BUFFER_TIME;
        /**
         * Whether or not the text field has a leading icon. Used for SSR.
         */
        this.hasLeadingIcon = false;
        /**
         * Whether or not the text field has a trailing icon. Used for SSR.
         */
        this.hasTrailingIcon = false;
        /**
         * Text to display in the field. Only set for SSR.
         */
        this.displayText = '';
        /**
         * When set to true, the error text's `role="alert"` will be removed, then
         * re-added after an animation frame. This will re-announce an error message
         * to screen readers.
         */
        this.refreshErrorAlert = false;
        this.focused = false;
        this.open = false;
        this[_a$2] = '';
        /**
         * Used for initializing select when the user sets the `value` directly.
         */
        this.lastUserSetValue = null;
        /**
         * Used for initializing select when the user sets the `selectedIndex`
         * directly.
         */
        this.lastUserSetSelectedIndex = null;
        /**
         * Used for `input` and `change` event change detection.
         */
        this.lastSelectedOption = null;
        // tslint:disable-next-line:enforce-name-casing
        this.lastSelectedOptionRecords = [];
    }
    /**
     * The value of the currently selected option.
     *
     * Note: For SSR, set `[selected]` on the requested option and `displayText`
     * rather than setting `value` setting `value` will incur a DOM query.
     */
    get value() {
        return this[VALUE];
    }
    set value(value) {
        this.lastUserSetValue = value;
        this.select(value);
    }
    get options() {
        // NOTE: this does a DOM query.
        return (this.menu?.items ?? []);
    }
    /**
     * The index of the currently selected option.
     *
     * Note: For SSR, set `[selected]` on the requested option and `displayText`
     * rather than setting `selectedIndex` setting `selectedIndex` will incur a
     * DOM query.
     */
    get selectedIndex() {
        // tslint:disable-next-line:enforce-name-casing
        const [_option, index] = (this.getSelectedOptions() ?? [])[0] ?? [];
        return index ?? -1;
    }
    set selectedIndex(index) {
        this.lastUserSetSelectedIndex = index;
        this.selectIndex(index);
    }
    /**
     * Returns an array of selected options.
     *
     * NOTE: md-select only suppoprts single selection.
     */
    get selectedOptions() {
        return (this.getSelectedOptions() ?? []).map(([option]) => option);
    }
    render() {
        return x `
      <span
          class="select ${o$1(this.getRenderClasses())}"
          @focusout=${this.handleFocusout}>
        ${this.renderField()}
        ${this.renderMenu()}
      </span>
    `;
    }
    getRenderClasses() {
        return {
            'disabled': this.disabled,
            'error': this.error,
        };
    }
    renderField() {
        return n$2 `
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          tabindex=${this.disabled ? '-1' : '0'}
          aria-expanded=${this.open ? 'true' : 'false'}
          class="field"
          label=${this.label}
          .focused=${this.focused || this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.error}
          .hasStart=${this.hasLeadingIcon}
          .hasEnd=${this.hasTrailingIcon}
          @keydown =${this.handleKeydown}
          @click=${this.handleClick}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}>
        ${this.renderFieldContent()}
      </${this.fieldTag}>`;
    }
    renderFieldContent() {
        return [
            this.renderLeadingIcon(),
            this.renderLabel(),
            this.renderTrailingIcon(),
            this.renderSupportingText(),
        ];
    }
    renderLeadingIcon() {
        return x `
      <span class="icon leading" slot="start">
         <slot name="leadingicon" @slotchange=${this.handleIconChange}></slot>
      </span>
     `;
    }
    renderTrailingIcon() {
        return x `
      <span class="icon trailing" slot="end">
         <slot name="trailingicon" @slotchange=${this.handleIconChange}></slot>
      </span>
     `;
    }
    renderLabel() {
        // need to render &nbsp; so that line-height can apply and give it a
        // non-zero height
        return x `<div
        id="label"
        class="label">${this.displayText || x `&nbsp;`}</div>`;
    }
    renderSupportingText() {
        const text = this.getSupportingText();
        if (!text) {
            return A;
        }
        return x `<span id="support"
      slot="supporting-text"
      role=${this.shouldErrorAnnounce() ? 'alert' : A}>${text}</span>`;
    }
    getSupportingText() {
        return this.error && this.errorText ? this.errorText : this.supportingText;
    }
    shouldErrorAnnounce() {
        // Announce if there is an error and error text visible.
        // If refreshErrorAlert is true, do not announce. This will remove the
        // role="alert" attribute. Another render cycle will happen after an
        // animation frame to re-add the role.
        return this.error && !!this.errorText && !this.refreshErrorAlert;
    }
    renderMenu() {
        return x `
      <md-menu
          id="listbox"
          default-focus="NONE"
          listTabIndex="-1"
          type="listbox"
          stay-open-on-focusout
          .anchor=${this.field}
          .open=${this.open}
          .quick=${this.quick}
          .fixed=${this.menuFixed}
          .typeaheadBufferTime=${this.typeaheadBufferTime}
          @opening=${this.handleOpening}
          @closing=${this.handleClosing}
          @close-menu=${this.handleCloseMenu}
          @request-selection=${this.handleRequestSelection}
          @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>`;
    }
    renderMenuContent() {
        return x `<slot></slot>`;
    }
    /**
     * Handles opening the select on keydown and typahead selection when the menu
     * is closed.
     */
    handleKeydown(e) {
        if (this.open || this.disabled || !this.menu) {
            return;
        }
        const typeaheadController = this.menu.typeaheadController;
        const isOpenKey = e.code === 'Space' || e.code === 'ArrowDown' || e.code === 'Enter';
        // Do not open if currently typing ahead because the user may be typing the
        // spacebar to match a word with a space
        if (!typeaheadController.isTypingAhead && isOpenKey) {
            e.preventDefault();
            this.open = true;
            return;
        }
        const isPrintableKey = e.key.length === 1;
        // Handles typing ahead when the menu is closed by delegating the event to
        // the underlying menu's typeaheadController
        if (isPrintableKey) {
            typeaheadController.onKeydown(e);
            e.preventDefault();
            const { lastActiveRecord } = typeaheadController;
            if (!lastActiveRecord) {
                return;
            }
            const hasChanged = this.selectItem(lastActiveRecord[TYPEAHEAD_RECORD.ITEM]);
            if (hasChanged) {
                this.dispatchInteractionEvents();
            }
        }
    }
    handleClick() {
        this.open = true;
    }
    handleFocus() {
        this.focused = true;
    }
    handleBlur() {
        this.focused = false;
    }
    /**
     * Handles closing the menu when the focus leaves the select's subtree.
     */
    handleFocusout(e) {
        // Don't close the menu if we are switching focus between menu,
        // select-option, and field
        if (e.relatedTarget && isElementInSubtree(e.relatedTarget, this)) {
            return;
        }
        this.open = false;
    }
    /**
     * Gets a list of all selected select options as a list item record array.
     *
     * @return An array of selected list option records.
     */
    getSelectedOptions() {
        if (!this.menu) {
            this.lastSelectedOptionRecords = [];
            return null;
        }
        const items = this.menu.items;
        this.lastSelectedOptionRecords = getSelectedItems(items);
        return this.lastSelectedOptionRecords;
    }
    async getUpdateComplete() {
        await this.menu?.updateComplete;
        return super.getUpdateComplete();
    }
    /**
     * Gets the selected options from the DOM, and updates the value and display
     * text to the first selected option's value and headline respectively.
     *
     * @return Whether or not the selected option has changed since last update.
     */
    updateValueAndDisplayText() {
        const selectedOptions = this.getSelectedOptions() ?? [];
        // Used to determine whether or not we need to fire an input / change event
        // which fire whenever the option element changes (value or selectedIndex)
        // on user interaction.
        let hasSelectedOptionChanged = false;
        if (selectedOptions.length) {
            const [firstSelectedOption] = selectedOptions[0];
            hasSelectedOptionChanged =
                this.lastSelectedOption !== firstSelectedOption;
            this.lastSelectedOption = firstSelectedOption;
            this[VALUE] = firstSelectedOption.value;
            this.displayText = firstSelectedOption.headline;
        }
        else {
            hasSelectedOptionChanged = this.lastSelectedOption !== null;
            this.lastSelectedOption = null;
            this[VALUE] = '';
            this.displayText = '';
        }
        return hasSelectedOptionChanged;
    }
    update(changed) {
        // In SSR the options will be ready to query, so try to figure out what
        // the value and display text should be.
        if (!this.hasUpdated) {
            this.initUserSelection();
        }
        super.update(changed);
    }
    async firstUpdated(changed) {
        await this.menu?.updateComplete;
        // If this has been handled on update already due to SSR, try again.
        if (!this.lastSelectedOptionRecords.length) {
            this.initUserSelection();
        }
        super.firstUpdated(changed);
    }
    updated(changedProperties) {
        // Keep changedProperties arg so that subclasses may call it
        if (this.refreshErrorAlert) {
            // The past render cycle removed the role="alert" from the error message.
            // Re-add it after an animation frame to re-announce the error.
            requestAnimationFrame(() => {
                this.refreshErrorAlert = false;
            });
        }
    }
    /**
     * Focuses and activates the last selected item upon opening, and resets other
     * active items.
     */
    async handleOpening() {
        const items = this.menu.items;
        const activeItem = List.getActiveItem(items)?.item;
        const [selectedItem] = this.lastSelectedOptionRecords[0] ?? [null];
        // This is true if the user keys through the list but clicks out of the menu
        // thus no close-menu event is fired by an item and we can't clean up in
        // handleCloseMenu.
        if (activeItem && activeItem !== selectedItem) {
            activeItem.active = false;
        }
        if (selectedItem) {
            selectedItem.active = true;
            selectedItem.focus();
        }
    }
    handleClosing() {
        this.open = false;
    }
    /**
     * Determines the reason for closing, and updates the UI accordingly.
     */
    handleCloseMenu(e) {
        const reason = e.reason;
        const item = e.itemPath[0];
        this.open = false;
        let hasChanged = false;
        if (reason.kind === 'CLICK_SELECTION') {
            hasChanged = this.selectItem(item);
        }
        else if (reason.kind === 'KEYDOWN' && isSelectableKey(reason.key)) {
            hasChanged = this.selectItem(item);
        }
        else {
            // This can happen on ESC being pressed
            item.active = false;
            item.blur();
        }
        // Dispatch interaction events since selection has been made via keyboard
        // or mouse.
        if (hasChanged) {
            this.dispatchInteractionEvents();
        }
    }
    /**
     * Selects a given option, deselects other options, and updates the UI.
     *
     * @return Whether the last selected option has changed.
     */
    selectItem(item) {
        this.lastSelectedOptionRecords.forEach(([option]) => {
            if (item !== option) {
                option.selected = false;
            }
        });
        item.selected = true;
        return this.updateValueAndDisplayText();
    }
    /**
     * Handles updating selection when an option element requests selection via
     * property / attribute change.
     */
    handleRequestSelection(e) {
        const requestingOptionEl = e.target;
        // No-op if this item is already selected.
        if (this.lastSelectedOptionRecords.some(([option]) => option === requestingOptionEl)) {
            return;
        }
        this.selectItem(requestingOptionEl);
    }
    /**
     * Handles updating selection when an option element requests deselection via
     * property / attribute change.
     */
    handleRequestDeselection(e) {
        const requestingOptionEl = e.target;
        // No-op if this item is not even in the list of tracked selected items.
        if (!this.lastSelectedOptionRecords.some(([option]) => option === requestingOptionEl)) {
            return;
        }
        this.updateValueAndDisplayText();
    }
    /**
     * Selects an option given the value of the option, and updates MdSelect's
     * value.
     */
    select(value) {
        const optionToSelect = this.options.find(option => option.value === value);
        if (optionToSelect) {
            this.selectItem(optionToSelect);
        }
    }
    /**
     * Selects an option given the index of the option, and updates MdSelect's
     * value.
     */
    selectIndex(index) {
        const optionToSelect = this.options[index];
        if (optionToSelect) {
            this.selectItem(optionToSelect);
        }
    }
    /**
     * Attempts to initialize the selected option from user-settable values like
     * SSR, setting `value`, or `selectedIndex` at startup.
     */
    initUserSelection() {
        // User has set `.value` directly, but internals have not yet booted up.
        if (this.lastUserSetValue && !this.lastSelectedOptionRecords.length) {
            this.select(this.lastUserSetValue);
            // User has set `.selectedIndex` directly, but internals have not yet
            // booted up.
        }
        else if (this.lastUserSetSelectedIndex !== null &&
            !this.lastSelectedOptionRecords.length) {
            this.selectIndex(this.lastUserSetSelectedIndex);
            // Regular boot up!
        }
        else {
            this.updateValueAndDisplayText();
        }
    }
    handleIconChange() {
        this.hasLeadingIcon = this.leadingIcons.length > 0;
        this.hasTrailingIcon = this.trailingIcons.length > 0;
    }
    /**
     * Dispatches the `input` and `change` events.
     */
    dispatchInteractionEvents() {
        this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
}
_a$2 = VALUE;
__decorate([
    n$8({ type: Boolean })
], Select.prototype, "quick", void 0);
__decorate([
    n$8({ type: Boolean })
], Select.prototype, "required", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], Select.prototype, "disabled", void 0);
__decorate([
    n$8({ type: String })
], Select.prototype, "errorText", void 0);
__decorate([
    n$8()
], Select.prototype, "label", void 0);
__decorate([
    n$8({ type: String })
], Select.prototype, "supportingText", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], Select.prototype, "error", void 0);
__decorate([
    n$8({ type: Boolean })
], Select.prototype, "menuFixed", void 0);
__decorate([
    n$8({ type: Number })
], Select.prototype, "typeaheadBufferTime", void 0);
__decorate([
    n$8({ type: Boolean })
], Select.prototype, "hasLeadingIcon", void 0);
__decorate([
    n$8({ type: Boolean })
], Select.prototype, "hasTrailingIcon", void 0);
__decorate([
    n$8()
], Select.prototype, "displayText", void 0);
__decorate([
    t$3()
], Select.prototype, "refreshErrorAlert", void 0);
__decorate([
    t$3()
], Select.prototype, "focused", void 0);
__decorate([
    t$3()
], Select.prototype, "open", void 0);
__decorate([
    i$5('.field')
], Select.prototype, "field", void 0);
__decorate([
    i$5('md-menu')
], Select.prototype, "menu", void 0);
__decorate([
    l$5({ slot: 'leadingicon', flatten: true })
], Select.prototype, "leadingIcons", void 0);
__decorate([
    l$5({ slot: 'trailingicon', flatten: true })
], Select.prototype, "trailingIcons", void 0);
__decorate([
    n$8()
], Select.prototype, "value", null);
__decorate([
    n$8({ type: Number })
], Select.prototype, "selectedIndex", null);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class FilledSelect extends Select {
    constructor() {
        super(...arguments);
        this.fieldTag = i$1 `md-filled-field`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$6 = i$4 `:host{--_text-field-active-indicator-color: var(--md-filled-select-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-active-indicator-height: var(--md-filled-select-text-field-active-indicator-height, 1px);--_text-field-container-color: var(--md-filled-select-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_text-field-container-shape-start-start: var( --md-filled-select-text-field-container-shape-start-start, var( --md-filled-select-text-field-container-shape, 4px ) );--_text-field-container-shape-start-end: var( --md-filled-select-text-field-container-shape-start-end, var( --md-filled-select-text-field-container-shape, 4px ) );--_text-field-container-shape-end-end: var( --md-filled-select-text-field-container-shape-end-end, var( --md-filled-select-text-field-container-shape, 0px ) );--_text-field-container-shape-end-start: var( --md-filled-select-text-field-container-shape-end-start, var( --md-filled-select-text-field-container-shape, 0px ) );--_text-field-disabled-active-indicator-color: var(--md-filled-select-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-active-indicator-height: var(--md-filled-select-text-field-disabled-active-indicator-height, 1px);--_text-field-disabled-active-indicator-opacity: var(--md-filled-select-text-field-disabled-active-indicator-opacity, 0.38);--_text-field-disabled-container-color: var(--md-filled-select-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-container-opacity: var(--md-filled-select-text-field-disabled-container-opacity, 0.04);--_text-field-disabled-input-text-color: var(--md-filled-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-filled-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-filled-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-filled-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-filled-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-filled-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-supporting-text-color: var(--md-filled-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-filled-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-filled-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-filled-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-active-indicator-color: var(--md-filled-select-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-active-indicator-color: var(--md-filled-select-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-input-text-color: var(--md-filled-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-filled-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-filled-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-supporting-text-color: var(--md-filled-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-filled-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-active-indicator-color: var(--md-filled-select-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-input-text-color: var(--md-filled-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-filled-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-filled-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-state-layer-color: var(--md-filled-select-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-state-layer-opacity: var(--md-filled-select-text-field-error-hover-state-layer-opacity, 0.08);--_text-field-error-hover-supporting-text-color: var(--md-filled-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-filled-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-filled-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-filled-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-filled-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-supporting-text-color: var(--md-filled-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-filled-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-active-indicator-color: var(--md-filled-select-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-active-indicator-height: var(--md-filled-select-text-field-focus-active-indicator-height, 2px);--_text-field-focus-input-text-color: var(--md-filled-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-filled-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-filled-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-supporting-text-color: var(--md-filled-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-filled-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-active-indicator-color: var(--md-filled-select-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-active-indicator-height: var(--md-filled-select-text-field-hover-active-indicator-height, 1px);--_text-field-hover-input-text-color: var(--md-filled-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-filled-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-filled-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-state-layer-color: var(--md-filled-select-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-state-layer-opacity: var(--md-filled-select-text-field-hover-state-layer-opacity, 0.08);--_text-field-hover-supporting-text-color: var(--md-filled-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-filled-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-filled-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-type: var(--md-filled-select-text-field-input-text-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_text-field-label-text-color: var(--md-filled-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-populated-line-height: var(--md-filled-select-text-field-label-text-populated-line-height, 1rem);--_text-field-label-text-populated-size: var(--md-filled-select-text-field-label-text-populated-size, 0.75rem);--_text-field-label-text-type: var(--md-filled-select-text-field-label-text-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_text-field-leading-icon-color: var(--md-filled-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-filled-select-text-field-leading-icon-size, 20px);--_text-field-supporting-text-color: var(--md-filled-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-type: var(--md-filled-select-text-field-supporting-text-type, 400 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto));--_text-field-trailing-icon-color: var(--md-filled-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-filled-select-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_text-field-active-indicator-color);--md-filled-field-active-indicator-height: var(--_text-field-active-indicator-height);--md-filled-field-container-color: var(--_text-field-container-color);--md-filled-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-filled-field-content-color: var(--_text-field-input-text-color);--md-filled-field-content-type: var(--_text-field-input-text-type);--md-filled-field-disabled-active-indicator-color: var(--_text-field-disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_text-field-disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_text-field-disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_text-field-disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_text-field-disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_text-field-error-active-indicator-color);--md-filled-field-error-content-color: var(--_text-field-error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_text-field-error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_text-field-error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_text-field-error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_text-field-error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-filled-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_text-field-focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_text-field-focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_text-field-hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_text-field-hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_text-field-hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_text-field-hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_text-field-label-text-color);--md-filled-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-filled-field-label-text-type: var(--_text-field-label-text-type);--md-filled-field-leading-content-color: var(--_text-field-leading-icon-color);--md-filled-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-filled-field-supporting-text-type: var(--_text-field-supporting-text-type);--md-filled-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[hasstart] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}/*# sourceMappingURL=filled-select-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$5 = i$4 `:host{color:unset;min-width:210px}.field{cursor:default;outline:none}.select{position:relative}.field,.select,md-menu{min-width:100%;max-width:inherit}.field,.select{width:100%}:host{display:inline-flex}.label{width:100%}:host([disabled]){pointer-events:none}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * @description
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the "filled"
 * variant.
 *
 * @example
 * ```html
 * <md-filled-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </md-filled-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledSelect = class MdFilledSelect extends FilledSelect {
};
MdFilledSelect.styles = [styles$5, styles$6, styles$7];
MdFilledSelect = __decorate([
    e$a('md-filled-select')
], MdFilledSelect);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires close-menu {CloseMenuEvent} Closes the encapsulating menu on
 * @fires request-selection {RequestSelectionEvent} Requests the parent
 * md-select to select this element (and deselect others if single-selection)
 * when `selected` changed to `true`.
 * @fires request-deselection {RequestDeselectionEvent} Requests the parent
 * md-select to deselect this element when `selected` changed to `false`.
 */
class SelectOptionEl extends MenuItemEl {
    constructor() {
        super(...arguments);
        /**
         * Form value of the option.
         */
        this.value = '';
        /**
         * Whether or not this option is selected.
         */
        this.selected = false;
        this.listItemRole = 'option';
    }
    willUpdate(changed) {
        if (changed.has('selected')) {
            // Synchronize selected -> active but not the other way around because
            // active is used for keyboard navigation and doesn't mean the option
            // should be selected if active.
            this.active = this.selected;
            this.ariaSelected = this.selected ? 'true' : 'false';
            // By default active = true focuses the element. We want to prevent that
            // in this case because we set active = this.selected and that may mess
            // around with menu's restore focus function once the menu closes.
            this.focusOnActivation = false;
        }
        super.willUpdate(changed);
    }
    updated(changed) {
        super.updated(changed);
        // Restore the active = true focusing behavior which happens in
        // super.updated() if it was turned off.
        this.focusOnActivation = true;
        // Do not dispatch event on first update / boot-up.
        if (changed.has('selected') && changed.get('selected') !== undefined) {
            // This section is really useful for when the user sets selected on the
            // option programmatically. Most other cases (click and keyboard) are
            // handled by md-select because it needs to coordinate the
            // single-selection behavior.
            if (this.selected) {
                this.dispatchEvent(new RequestSelectionEvent());
            }
            else {
                this.dispatchEvent(new RequestDeselectionEvent());
            }
        }
    }
}
__decorate([
    n$8()
], SelectOptionEl.prototype, "value", void 0);
__decorate([
    n$8({ type: Boolean, reflect: true })
], SelectOptionEl.prototype, "selected", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * @description
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the option that
 * can be placed inside of an md-select.
 *
 * This component is a subclass of `md-menu-item` and can accept the same slots,
 * properties, and events as `md-menu-item`.
 *
 * @example
 * ```html
 * <md-outlined-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </md-outlined-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdSelectOption = class MdSelectOption extends SelectOptionEl {
};
MdSelectOption.styles = [styles$k, styles$h, styles$l, styles$i];
MdSelectOption = __decorate([
    e$a('md-select-option')
], MdSelectOption);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$4 = i$4 `@media(forced-colors: active){:host{--md-outlined-select-text-field-disabled-input-text-color: GrayText;--md-outlined-select-text-field-disabled-input-text-opacity: 1;--md-outlined-select-text-field-disabled-label-text-color: GrayText;--md-outlined-select-text-field-disabled-label-text-opacity: 1;--md-outlined-select-text-field-disabled-leading-icon-color: GrayText;--md-outlined-select-text-field-disabled-leading-icon-opacity: 1;--md-outlined-select-text-field-disabled-outline-color: GrayText;--md-outlined-select-text-field-disabled-outline-opacity: 1;--md-outlined-select-text-field-disabled-supporting-text-color: GrayText;--md-outlined-select-text-field-disabled-supporting-text-opacity: 1;--md-outlined-select-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-select-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class OutlinedSelect extends Select {
    constructor() {
        super(...arguments);
        this.fieldTag = i$1 `md-outlined-field`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$3 = i$4 `:host{--_text-field-container-shape: var(--md-outlined-select-text-field-container-shape, 4px);--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 2px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-type: var(--md-outlined-select-text-field-input-text-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, 1rem);--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, 0.75rem);--_text-field-label-text-type: var(--md-outlined-select-text-field-label-text-type, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-type: var(--md-outlined-select-text-field-supporting-text-type, 400 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var( --md-outlined-select-text-field-container-shape-start-start, var(--_text-field-container-shape) );--_text-field-container-shape-start-end: var( --md-outlined-select-text-field-container-shape-start-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-end: var( --md-outlined-select-text-field-container-shape-end-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-start: var( --md-outlined-select-text-field-container-shape-end-start, var(--_text-field-container-shape) );--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-type: var(--_text-field-input-text-type);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-type: var(--_text-field-label-text-type);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-type: var(--_text-field-supporting-text-type);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[hasstart] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}/*# sourceMappingURL=outlined-select-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * @description
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the "outlined"
 * variant.
 *
 * @example
 * ```html
 * <md-outlined-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </md-outlined-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdOutlinedSelect = class MdOutlinedSelect extends OutlinedSelect {
};
MdOutlinedSelect.styles = [styles$5, styles$3, styles$4];
MdOutlinedSelect = __decorate([
    e$a('md-outlined-select')
], MdOutlinedSelect);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/265336902): add docs
 */
class Icon extends s$2 {
    render() {
        return x `<span><slot></slot></span>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$2 = i$4 `:host{--_color: var(--md-icon-color, inherit);--_font: var(--md-icon-font, "Material Symbols Outlined");--_font-variation-settings: var(--md-icon-font-variation-settings, inherit);--_size: var(--md-icon-size, 24px);--_weight: var(--md-icon-weight, 400);display:inline-flex;color:var(--_color);font-family:var(--_font);font-weight:var(--_weight);font-style:normal;font-size:var(--_size);font-variation-settings:var(--_font-variation-settings);line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}span ::slotted(svg){fill:currentColor}span ::slotted(*){height:var(--_size);width:var(--_size)}/*# sourceMappingURL=icon-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @final
 * @suppress {visibility}
 */
let MdIcon = class MdIcon extends Icon {
};
MdIcon.styles = [styles$2];
MdIcon = __decorate([
    e$a('md-icon')
], MdIcon);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a$1;
/**
 * A linear progress component.
 */
class LinearProgress extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Whether or not to render indeterminate progress in an animated state.
         */
        this.indeterminate = false;
        /**
         * Progress to display, a fraction between 0 and 1.
         */
        this.progress = 0;
        /**
         * Buffer amount to display, a fraction between 0 and 1.
         */
        this.buffer = 1;
        /**
         * Whether or not to render indeterminate mode using 4 colors instead of one.
         *
         */
        this.fourColor = false;
        this.animationReady = true;
        this.resizeObserver = null;
    }
    // Note, the indeterminate animation is rendered with transform %'s
    // Previously, this was optimized to use px calculated with the resizeObserver
    // due to a now fixed Chrome bug: crbug.com/389359.
    render() {
        const rootClasses = {
            'indeterminate': this.indeterminate,
            'animation-ready': this.animationReady,
            'four-color': this.fourColor
        };
        const progressStyles = {
            transform: `scaleX(${(this.indeterminate ? 1 : this.progress) * 100}%)`
        };
        const bufferStyles = {
            transform: `scaleX(${(this.indeterminate ? 1 : this.buffer) * 100}%)`
        };
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <div
          role="progressbar"
          class="linear-progress ${o$1(rootClasses)}"
          aria-label="${ariaLabel || A}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${this.indeterminate ? A : this.progress}">
        <div class="track"></div>
        <div class="buffer-bar" style=${o(bufferStyles)}></div>
        <div class="bar primary-bar" style=${o(progressStyles)}>
          <div class="bar-inner"></div>
        </div>
        <div class="bar secondary-bar">
          <div class="bar-inner"></div>
        </div>
      </div>`;
    }
    async connectedCallback() {
        super.connectedCallback();
        // wait for rendering.
        await this.updateComplete;
        if (this.resizeObserver) {
            return;
        }
        this.resizeObserver = new ResizeObserver(() => {
            if (this.indeterminate) {
                this.restartAnimation();
            }
        });
        this.resizeObserver.observe(this.rootEl);
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        super.disconnectedCallback();
    }
    // When size changes, restart the animation
    // to avoid jank.
    async restartAnimation() {
        await this.updateComplete;
        this.animationReady = false;
        await new Promise(requestAnimationFrame);
        this.animationReady = true;
        await this.updateComplete;
    }
}
_a$1 = LinearProgress;
(() => {
    requestUpdateOnAriaChange(_a$1);
})();
__decorate([
    n$8({ type: Boolean })
], LinearProgress.prototype, "indeterminate", void 0);
__decorate([
    n$8({ type: Number })
], LinearProgress.prototype, "progress", void 0);
__decorate([
    n$8({ type: Number })
], LinearProgress.prototype, "buffer", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'four-color' })
], LinearProgress.prototype, "fourColor", void 0);
__decorate([
    i$5('.linear-progress')
], LinearProgress.prototype, "rootEl", void 0);
__decorate([
    t$3()
], LinearProgress.prototype, "animationReady", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$1 = i$4 `:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, 0px);display:block;position:relative;min-inline-size:80px;block-size:var(--_track-height);content-visibility:auto;contain:strict}.linear-progress,.track,.buffer-bar,.bar,.bar-inner{position:absolute}.linear-progress{inset:0;outline:rgba(0,0,0,0) solid 1px;border-radius:var(--_track-shape);overflow:hidden;display:flex;align-items:center}.bar{animation:none;inline-size:100%;block-size:var(--_active-indicator-height);transform-origin:left center;will-change:transform;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.buffer-bar{background:var(--_track-color);inset:0;will-change:transform;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.track{inset:0;will-change:transform;animation:linear infinite 250ms;animation-name:buffering;background:0/calc(var(--_track-height) / 2 * 5) 100% radial-gradient(circle at calc(var(--_track-height) / 2 * 2), var(--_track-color) 0, var(--_track-color) calc(var(--_track-height) / 2), transparent calc(var(--_track-height) / 2))}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .track{display:none}.indeterminate.animation-ready .primary-bar{will-change:transform;animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate.animation-ready .primary-bar>.bar-inner{will-change:transform;animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.animation-ready.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate.animation-ready .secondary-bar{will-change:transform;animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate.animation-ready .secondary-bar>.bar-inner{will-change:transform;animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.animation-ready.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host-context([dir=rtl]) .linear-progress .bar{transform-origin:right center}:host-context([dir=rtl]) .linear-progress .buffer-bar{transform-origin:right center}:host-context([dir=rtl]) .linear-progress .track{animation-name:buffering-rtl}:host-context([dir=rtl]) .linear-progress.indeterminate.animation-ready .primary-bar{animation-name:primary-indeterminate-translate-rtl}:host-context([dir=rtl]) .linear-progress.indeterminate.animation-ready .secondary-bar{animation-name:secondary-indeterminate-translate-rtl}:host([dir=rtl]) .linear-progress .bar{transform-origin:right center}:host([dir=rtl]) .linear-progress .buffer-bar{transform-origin:right center}:host([dir=rtl]) .linear-progress .track{animation-name:buffering-rtl}:host([dir=rtl]) .linear-progress.indeterminate.animation-ready .primary-bar{animation-name:primary-indeterminate-translate-rtl}:host([dir=rtl]) .linear-progress.indeterminate.animation-ready .secondary-bar{animation-name:secondary-indeterminate-translate-rtl}.linear-progress:dir(rtl) .bar{transform-origin:right center}.linear-progress:dir(rtl) .buffer-bar{transform-origin:right center}.linear-progress:dir(rtl) .track{animation-name:buffering-rtl}.linear-progress:dir(rtl).indeterminate.animation-ready .primary-bar{animation-name:primary-indeterminate-translate-rtl}.linear-progress:dir(rtl).indeterminate.animation-ready .secondary-bar{animation-name:secondary-indeterminate-translate-rtl}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(1 * calc(var(--_track-height) / 2 * 5)))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(1 * 83.6714%))}100%{transform:translateX(calc(1 * 200.611%))}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(calc(1 * 37.6519%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(calc(1 * 84.3862%))}100%{transform:translateX(calc(1 * 160.278%))}}@keyframes buffering-rtl{0%{transform:translateX(calc(-1 * calc(var(--_track-height) / 2 * 5)))}}@keyframes primary-indeterminate-translate-rtl{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-1 * 83.6714%))}100%{transform:translateX(calc(-1 * 200.611%))}}@keyframes secondary-indeterminate-translate-rtl{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(calc(-1 * 37.6519%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(calc(-1 * 84.3862%))}100%{transform:translateX(calc(-1 * 160.278%))}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media screen and (forced-colors: active){.linear-progress{--_active-indicator-color: canvastext;--_track-color: graytext;border:1px solid canvastext}.indeterminate.linear-progress{--_track-color: canvas}}/*# sourceMappingURL=linear-progress-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Linear progress indicators display progress by animating along the
 * length of a fixed, visible track.
 *
 * @description
 * Progress indicators inform users about the status of ongoing processes.
 * - Determinate indicators display how long a process will take.
 * - Indeterminate indicators express an unspecified amount of wait time.
 */
let MdLinearProgress = class MdLinearProgress extends LinearProgress {
};
MdLinearProgress.styles = [styles$1];
MdLinearProgress = __decorate([
    e$a('md-linear-progress')
], MdLinearProgress);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;
/**
 * A circular progress component.
 */
class CircularProgress extends s$2 {
    constructor() {
        super(...arguments);
        /**
         * Progress to display, a fraction between 0 and 1.
         */
        this.progress = 0;
        /**
         * Whether or not to display an animated spinner representing indeterminate
         * progress.
         */
        this.indeterminate = false;
        /**
         * Whether or not to render indeterminate mode using 4 colors instead of one.
         */
        this.fourColor = false;
    }
    render() {
        const classes = {
            'indeterminate': this.indeterminate,
            'four-color': this.fourColor
        };
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <div
        class="circular-progress ${o$1(classes)}"
        role="progressbar"
        aria-label="${ariaLabel || A}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${this.indeterminate ? A : this.progress}">
        ${this.indeterminate ? this.renderIndeterminateContainer() :
            this.renderDeterminateContainer()}
      </div>
      <slot></slot>`;
    }
    // Determinate mode is rendered with an svg so the progress arc can be
    // easily animated via stroke-dashoffset.
    renderDeterminateContainer() {
        const dashOffset = (1 - this.progress) * 100;
        // note, dash-array/offset are relative to Setting `pathLength` but
        // Chrome seems to render this inaccurately and using a large viewbox helps.
        const pathLength = 100;
        return x `<svg viewBox="0 0 4800 4800">
      <circle class="track" pathLength="${pathLength}"></circle>
      <circle class="progress" pathLength="${pathLength}" stroke-dashoffset="${dashOffset}"></circle>
    </svg>`;
    }
    // Indeterminate mode rendered with 2 bordered-divs. The borders are
    // clipped into half circles by their containers. The divs are then carefully
    // animated to produce changes to the spinner arc size.
    // This approach has 4.5x the FPS of rendering via svg on Chrome 111.
    // See https://lit.dev/playground/#gist=febb773565272f75408ab06a0eb49746.
    renderIndeterminateContainer() {
        return x `
      <div class="spinner">
        <div class="left">
          <div class="circle"></div>
        </div>
        <div class="right">
          <div class="circle"></div>
        </div>
      </div>`;
    }
}
_a = CircularProgress;
(() => {
    requestUpdateOnAriaChange(_a);
})();
__decorate([
    n$8({ type: Number })
], CircularProgress.prototype, "progress", void 0);
__decorate([
    n$8({ type: Boolean })
], CircularProgress.prototype, "indeterminate", void 0);
__decorate([
    n$8({ type: Boolean, attribute: 'four-color' })
], CircularProgress.prototype, "fourColor", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = i$4 `:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 8.3333333333);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;min-block-size:var(--_size);min-inline-size:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.circular-progress{flex:1;align-self:stretch;margin:4px}.circular-progress,.spinner,.left,.right,.circle,svg,.track,.progress{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.progress{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.circular-progress.indeterminate{will-change:transform;animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{will-change:transform;animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);will-change:transform;animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media screen and (forced-colors: active){.progress{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}/*# sourceMappingURL=circular-progress-styles.css.map */
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Circular progress indicators display progress by animating along an
 * invisible circular track in a clockwise direction. They can be applied
 * directly to a surface, such as a button or card.
 *
 * @description
 * Progress indicators inform users about the status of ongoing processes.
 * - Determinate indicators display how long a process will take.
 * - Indeterminate indicators express an unspecified amount of wait time.
 */
let MdCircularProgress = class MdCircularProgress extends CircularProgress {
};
MdCircularProgress.styles = [styles];
MdCircularProgress = __decorate([
    e$a('md-circular-progress')
], MdCircularProgress);
