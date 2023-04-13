"use strict";(self.webpackChunksalesManagment=self.webpackChunksalesManagment||[]).push([[179],{932:()=>{function te(n){return"function"==typeof n}function Hl(n){const t=n(r=>{Error.call(r),r.stack=(new Error).stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}const Wu=Hl(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((r,i)=>`${i+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t});function Bo(n,e){if(n){const t=n.indexOf(e);0<=t&&n.splice(t,1)}}class Le{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(const s of t)s.remove(this);else t.remove(this);const{initialTeardown:r}=this;if(te(r))try{r()}catch(s){e=s instanceof Wu?s.errors:[s]}const{_finalizers:i}=this;if(i){this._finalizers=null;for(const s of i)try{H_(s)}catch(o){e=e??[],o instanceof Wu?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Wu(e)}}add(e){var t;if(e&&e!==this)if(this.closed)H_(e);else{if(e instanceof Le){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(e)}}_hasParent(e){const{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){const{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){const{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Bo(t,e)}remove(e){const{_finalizers:t}=this;t&&Bo(t,e),e instanceof Le&&e._removeParent(this)}}Le.EMPTY=(()=>{const n=new Le;return n.closed=!0,n})();const U_=Le.EMPTY;function $_(n){return n instanceof Le||n&&"closed"in n&&te(n.remove)&&te(n.add)&&te(n.unsubscribe)}function H_(n){te(n)?n():n.unsubscribe()}const Ds={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ku={setTimeout(n,e,...t){const{delegate:r}=Ku;return r?.setTimeout?r.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){const{delegate:e}=Ku;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function z_(n){Ku.setTimeout(()=>{const{onUnhandledError:e}=Ds;if(!e)throw n;e(n)})}function Lf(){}const jT=Vf("C",void 0,void 0);function Vf(n,e,t){return{kind:n,value:e,error:t}}let Cs=null;function Zu(n){if(Ds.useDeprecatedSynchronousErrorHandling){const e=!Cs;if(e&&(Cs={errorThrown:!1,error:null}),n(),e){const{errorThrown:t,error:r}=Cs;if(Cs=null,t)throw r}}else n()}class Bf extends Le{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,$_(e)&&e.add(this)):this.destination=WT}static create(e,t,r){return new zl(e,t,r)}next(e){this.isStopped?Uf(function $T(n){return Vf("N",n,void 0)}(e),this):this._next(e)}error(e){this.isStopped?Uf(function UT(n){return Vf("E",void 0,n)}(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Uf(jT,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const zT=Function.prototype.bind;function jf(n,e){return zT.call(n,e)}class GT{constructor(e){this.partialObserver=e}next(e){const{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(r){Qu(r)}}error(e){const{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(r){Qu(r)}else Qu(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Qu(t)}}}class zl extends Bf{constructor(e,t,r){let i;if(super(),te(e)||!e)i={next:e??void 0,error:t??void 0,complete:r??void 0};else{let s;this&&Ds.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),i={next:e.next&&jf(e.next,s),error:e.error&&jf(e.error,s),complete:e.complete&&jf(e.complete,s)}):i=e}this.destination=new GT(i)}}function Qu(n){Ds.useDeprecatedSynchronousErrorHandling?function HT(n){Ds.useDeprecatedSynchronousErrorHandling&&Cs&&(Cs.errorThrown=!0,Cs.error=n)}(n):z_(n)}function Uf(n,e){const{onStoppedNotification:t}=Ds;t&&Ku.setTimeout(()=>t(n,e))}const WT={closed:!0,next:Lf,error:function qT(n){throw n},complete:Lf},$f="function"==typeof Symbol&&Symbol.observable||"@@observable";function Ei(n){return n}function G_(n){return 0===n.length?Ei:1===n.length?n[0]:function(t){return n.reduce((r,i)=>i(r),t)}}class ne{constructor(e){e&&(this._subscribe=e)}lift(e){const t=new ne;return t.source=this,t.operator=e,t}subscribe(e,t,r){const i=function QT(n){return n&&n instanceof Bf||function ZT(n){return n&&te(n.next)&&te(n.error)&&te(n.complete)}(n)&&$_(n)}(e)?e:new zl(e,t,r);return Zu(()=>{const{operator:s,source:o}=this;i.add(s?s.call(i,o):o?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(e){try{return this._subscribe(e)}catch(t){e.error(t)}}forEach(e,t){return new(t=q_(t))((r,i)=>{const s=new zl({next:o=>{try{e(o)}catch(a){i(a),s.unsubscribe()}},error:i,complete:r});this.subscribe(s)})}_subscribe(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)}[$f](){return this}pipe(...e){return G_(e)(this)}toPromise(e){return new(e=q_(e))((t,r)=>{let i;this.subscribe(s=>i=s,s=>r(s),()=>t(i))})}}function q_(n){var e;return null!==(e=n??Ds.Promise)&&void 0!==e?e:Promise}ne.create=n=>new ne(n);const YT=Hl(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});class N extends ne{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const t=new W_(this,this);return t.operator=e,t}_throwIfClosed(){if(this.closed)throw new YT}next(e){Zu(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const t of this.currentObservers)t.next(e)}})}error(e){Zu(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:t}=this;for(;t.length;)t.shift().error(e)}})}complete(){Zu(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:t,isStopped:r,observers:i}=this;return t||r?U_:(this.currentObservers=null,i.push(e),new Le(()=>{this.currentObservers=null,Bo(i,e)}))}_checkFinalizedStatuses(e){const{hasError:t,thrownError:r,isStopped:i}=this;t?e.error(r):i&&e.complete()}asObservable(){const e=new ne;return e.source=this,e}}N.create=(n,e)=>new W_(n,e);class W_ extends N{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===r||r.call(t,e)}error(e){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===r||r.call(t,e)}complete(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)}_subscribe(e){var t,r;return null!==(r=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==r?r:U_}}function K_(n){return te(n?.lift)}function Ie(n){return e=>{if(K_(e))return e.lift(function(t){try{return n(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Se(n,e,t,r,i){return new XT(n,e,t,r,i)}class XT extends Bf{constructor(e,t,r,i,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(l){e.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:t}=this;super.unsubscribe(),!t&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}function G(n,e){return Ie((t,r)=>{let i=0;t.subscribe(Se(r,s=>{r.next(n.call(e,s,i++))}))})}function JT(n,e,t,r){return new(t||(t=Promise))(function(s,o){function a(u){try{c(r.next(u))}catch(d){o(d)}}function l(u){try{c(r.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):function i(s){return s instanceof t?s:new t(function(o){o(s)})}(u.value).then(a,l)}c((r=r.apply(n,e||[])).next())})}Object.create;function Y_(n){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function bs(n){return this instanceof bs?(this.v=n,this):new bs(n)}function t0(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,r=t.apply(n,e||[]),s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(h){r[h]&&(i[h]=function(f){return new Promise(function(p,g){s.push([h,f,p,g])>1||a(h,f)})})}function a(h,f){try{!function l(h){h.value instanceof bs?Promise.resolve(h.value.v).then(c,u):d(s[0][2],h)}(r[h](f))}catch(p){d(s[0][3],p)}}function c(h){a("next",h)}function u(h){a("throw",h)}function d(h,f){h(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function n0(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,e=n[Symbol.asyncIterator];return e?e.call(n):(n=Y_(n),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(s){t[s]=n[s]&&function(o){return new Promise(function(a,l){(function i(s,o,a,l){Promise.resolve(l).then(function(c){s({value:c,done:a})},o)})(a,l,(o=n[s](o)).done,o.value)})}}}Object.create;const zf=n=>n&&"number"==typeof n.length&&"function"!=typeof n;function X_(n){return te(n?.then)}function J_(n){return te(n[$f])}function ev(n){return Symbol.asyncIterator&&te(n?.[Symbol.asyncIterator])}function tv(n){return new TypeError(`You provided ${null!==n&&"object"==typeof n?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const nv=function i0(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function rv(n){return te(n?.[nv])}function iv(n){return t0(this,arguments,function*(){const t=n.getReader();try{for(;;){const{value:r,done:i}=yield bs(t.read());if(i)return yield bs(void 0);yield yield bs(r)}}finally{t.releaseLock()}})}function sv(n){return te(n?.getReader)}function vt(n){if(n instanceof ne)return n;if(null!=n){if(J_(n))return function s0(n){return new ne(e=>{const t=n[$f]();if(te(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(n);if(zf(n))return function o0(n){return new ne(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}(n);if(X_(n))return function a0(n){return new ne(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,z_)})}(n);if(ev(n))return ov(n);if(rv(n))return function l0(n){return new ne(e=>{for(const t of n)if(e.next(t),e.closed)return;e.complete()})}(n);if(sv(n))return function c0(n){return ov(iv(n))}(n)}throw tv(n)}function ov(n){return new ne(e=>{(function u0(n,e){var t,r,i,s;return JT(this,void 0,void 0,function*(){try{for(t=n0(n);!(r=yield t.next()).done;){const o=r.value;if(e.next(o),e.closed)return}}catch(o){i={error:o}}finally{try{r&&!r.done&&(s=t.return)&&(yield s.call(t))}finally{if(i)throw i.error}}e.complete()})})(n,e).catch(t=>e.error(t))})}function mr(n,e,t,r=0,i=!1){const s=e.schedule(function(){t(),i?n.add(this.schedule(null,r)):this.unsubscribe()},r);if(n.add(s),!i)return s}function We(n,e,t=1/0){return te(e)?We((r,i)=>G((s,o)=>e(r,s,i,o))(vt(n(r,i))),t):("number"==typeof e&&(t=e),Ie((r,i)=>function d0(n,e,t,r,i,s,o,a){const l=[];let c=0,u=0,d=!1;const h=()=>{d&&!l.length&&!c&&e.complete()},f=g=>c<r?p(g):l.push(g),p=g=>{s&&e.next(g),c++;let m=!1;vt(t(g,u++)).subscribe(Se(e,C=>{i?.(C),s?f(C):e.next(C)},()=>{m=!0},void 0,()=>{if(m)try{for(c--;l.length&&c<r;){const C=l.shift();o?mr(e,o,()=>p(C)):p(C)}h()}catch(C){e.error(C)}}))};return n.subscribe(Se(e,f,()=>{d=!0,h()})),()=>{a?.()}}(r,i,n,t)))}function jo(n=1/0){return We(Ei,n)}const yr=new ne(n=>n.complete());function av(n){return n&&te(n.schedule)}function Gf(n){return n[n.length-1]}function lv(n){return te(Gf(n))?n.pop():void 0}function Gl(n){return av(Gf(n))?n.pop():void 0}function cv(n,e=0){return Ie((t,r)=>{t.subscribe(Se(r,i=>mr(r,n,()=>r.next(i),e),()=>mr(r,n,()=>r.complete(),e),i=>mr(r,n,()=>r.error(i),e)))})}function uv(n,e=0){return Ie((t,r)=>{r.add(n.schedule(()=>t.subscribe(r),e))})}function dv(n,e){if(!n)throw new Error("Iterable cannot be null");return new ne(t=>{mr(t,e,()=>{const r=n[Symbol.asyncIterator]();mr(t,e,()=>{r.next().then(i=>{i.done?t.complete():t.next(i.value)})},0,!0)})})}function v0(n,e){if(null!=n){if(J_(n))return function p0(n,e){return vt(n).pipe(uv(e),cv(e))}(n,e);if(zf(n))return function m0(n,e){return new ne(t=>{let r=0;return e.schedule(function(){r===n.length?t.complete():(t.next(n[r++]),t.closed||this.schedule())})})}(n,e);if(X_(n))return function g0(n,e){return vt(n).pipe(uv(e),cv(e))}(n,e);if(ev(n))return dv(n,e);if(rv(n))return function y0(n,e){return new ne(t=>{let r;return mr(t,e,()=>{r=n[nv](),mr(t,e,()=>{let i,s;try{({value:i,done:s}=r.next())}catch(o){return void t.error(o)}s?t.complete():t.next(i)},0,!0)}),()=>te(r?.return)&&r.return()})}(n,e);if(sv(n))return function _0(n,e){return dv(iv(n),e)}(n,e)}throw tv(n)}function Ve(n,e){return e?v0(n,e):vt(n)}function qf(...n){const e=Gl(n),t=function f0(n,e){return"number"==typeof Gf(n)?n.pop():e}(n,1/0),r=n;return r.length?1===r.length?vt(r[0]):jo(t)(Ve(r,e)):yr}function hv(n={}){const{connector:e=(()=>new N),resetOnError:t=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=n;return s=>{let o,a,l,c=0,u=!1,d=!1;const h=()=>{a?.unsubscribe(),a=void 0},f=()=>{h(),o=l=void 0,u=d=!1},p=()=>{const g=o;f(),g?.unsubscribe()};return Ie((g,m)=>{c++,!d&&!u&&h();const C=l=l??e();m.add(()=>{c--,0===c&&!d&&!u&&(a=Wf(p,i))}),C.subscribe(m),!o&&c>0&&(o=new zl({next:w=>C.next(w),error:w=>{d=!0,h(),a=Wf(f,t,w),C.error(w)},complete:()=>{u=!0,h(),a=Wf(f,r),C.complete()}}),vt(g).subscribe(o))})(s)}}function Wf(n,e,...t){if(!0===e)return void n();if(!1===e)return;const r=new zl({next:()=>{r.unsubscribe(),n()}});return e(...t).subscribe(r)}
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ve(n){for(let e in n)if(n[e]===ve)return e;throw Error("Could not find renamed property on target object.")}function Kf(n,e){for(const t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function De(n){if("string"==typeof n)return n;if(Array.isArray(n))return"["+n.map(De).join(", ")+"]";if(null==n)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;const e=n.toString();if(null==e)return""+e;const t=e.indexOf("\n");return-1===t?e:e.substring(0,t)}function Zf(n,e){return null==n||""===n?null===e?"":e:null==e||""===e?n:n+" "+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const D0=ve({__forward_ref__:ve});function ge(n){return n.__forward_ref__=ge,n.toString=function(){return De(this())},n}function k(n){return Qf(n)?n():n}function Qf(n){return"function"==typeof n&&n.hasOwnProperty(D0)&&n.__forward_ref__===ge}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class v extends Error{constructor(e,t){super(Mt(e,t)),this.code=e}}function Mt(n,e){return`NG0${Math.abs(n)}${e?": "+e.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function L(n){return"string"==typeof n?n:null==n?"":String(n)}function he(n){return"function"==typeof n?n.name||n.toString():"object"==typeof n&&null!=n&&"function"==typeof n.type?n.type.name||n.type.toString():L(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yu(n,e){throw new v(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _r(n,e,t){n!=e&&pe(t,n,e,"==")}function At(n,e){null==n&&pe(e,n,null,"!=")}function pe(n,e,t,r){throw new Error(`ASSERTION ERROR: ${n}`+(null==r?"":` [Expected=> ${t} ${r} ${e} <=Actual]`))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function E(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function re(n){return{providers:n.providers||[],imports:n.imports||[]}}function Xu(n){return fv(n,Ju)||fv(n,gv)}function fv(n,e){return n.hasOwnProperty(e)?n[e]:null}function pv(n){return n&&(n.hasOwnProperty(Yf)||n.hasOwnProperty(T0))?n[Yf]:null}const Ju=ve({\u0275prov:ve}),Yf=ve({\u0275inj:ve}),gv=ve({ngInjectableDef:ve}),T0=ve({ngInjectorDef:ve});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var q,n;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Xf;function Xt(n){const e=Xf;return Xf=n,e}function mv(n,e,t){const r=Xu(n);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:t&q.Optional?null:void 0!==e?e:void Yu(De(n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Si(n){return{toString:n}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var ws,yv,Ln;(n=q||(q={}))[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",function(n){n[n.OnPush=0]="OnPush",n[n.Default=1]="Default"}(ws||(ws={})),function(n){n[n.CheckOnce=0]="CheckOnce",n[n.Checked=1]="Checked",n[n.CheckAlways=2]="CheckAlways",n[n.Detached=3]="Detached",n[n.Errored=4]="Errored",n[n.Destroyed=5]="Destroyed"}(yv||(yv={})),function(n){n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom"}(Ln||(Ln={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const be=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Uo={},fe=[],ed=ve({\u0275cmp:ve}),Jf=ve({\u0275dir:ve}),ep=ve({\u0275pipe:ve}),_v=ve({\u0275mod:ve}),vr=ve({\u0275fac:ve}),ql=ve({__NG_ELEMENT_ID__:ve});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let x0=0;function yn(n){return Si(()=>{const e=n.type,t=!0===n.standalone,r={},i={type:e,providersResolver:null,decls:n.decls,vars:n.vars,factory:null,template:n.template||null,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:n.exportAs||null,onPush:n.changeDetection===ws.OnPush,directiveDefs:null,pipeDefs:null,standalone:t,dependencies:t&&n.dependencies||null,getStandaloneInjector:null,selectors:n.selectors||fe,viewQuery:n.viewQuery||null,features:n.features||null,data:n.data||{},encapsulation:n.encapsulation||Ln.Emulated,id:"c"+x0++,styles:n.styles||fe,_:null,setInput:null,schemas:n.schemas||null,tView:null},s=n.dependencies,o=n.features;return i.inputs=Cv(n.inputs,r),i.outputs=Cv(n.outputs),o&&o.forEach(a=>a(i)),i.directiveDefs=s?()=>("function"==typeof s?s():s).map(vv).filter(Dv):null,i.pipeDefs=s?()=>("function"==typeof s?s():s).map(dt).filter(Dv):null,i})}function O0(n,e,t){const r=n.\u0275cmp;r.directiveDefs=()=>("function"==typeof e?e():e).map(vv),r.pipeDefs=()=>("function"==typeof t?t():t).map(dt)}function vv(n){return me(n)||ut(n)}function Dv(n){return null!==n}function oe(n){return Si(()=>({type:n.type,bootstrap:n.bootstrap||fe,declarations:n.declarations||fe,imports:n.imports||fe,exports:n.exports||fe,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function P0(n,e){return Si(()=>{const t=Tt(n,!0);t.declarations=e.declarations||fe,t.imports=e.imports||fe,t.exports=e.exports||fe})}function Cv(n,e){if(null==n)return Uo;const t={};for(const r in n)if(n.hasOwnProperty(r)){let i=n[r],s=i;Array.isArray(i)&&(s=i[1],i=i[0]),t[i]=r,e&&(e[i]=s)}return t}const T=yn;function Dt(n){return{type:n.type,name:n.name,factory:null,pure:!1!==n.pure,standalone:!0===n.standalone,onDestroy:n.type.prototype.ngOnDestroy||null}}function me(n){return n[ed]||null}function ut(n){return n[Jf]||null}function dt(n){return n[ep]||null}function $o(n){const e=me(n)||ut(n)||dt(n);return null!==e&&e.standalone}function Tt(n,e){const t=n[_v]||null;if(!t&&!0===e)throw new Error(`Type ${De(n)} does not have '\u0275mod' property.`);return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const U=11;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ct(n){return Array.isArray(n)&&"object"==typeof n[1]}function vn(n){return Array.isArray(n)&&!0===n[1]}function rp(n){return 0!=(8&n.flags)}function id(n){return 2==(2&n.flags)}function sd(n){return 1==(1&n.flags)}function Dn(n){return null!==n.template}function L0(n){return 0!=(256&n[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function As(n,e){return n.hasOwnProperty(vr)?n[vr]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class j0{constructor(e,t,r){this.previousValue=e,this.currentValue=t,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function it(){return Ev}function Ev(n){return n.type.prototype.ngOnChanges&&(n.setInput=$0),U0}function U0(){const n=Mv(this),e=n?.current;if(e){const t=n.previous;if(t===Uo)n.previous=e;else for(let r in e)t[r]=e[r];n.current=null,this.ngOnChanges(e)}}function $0(n,e,t,r){const i=Mv(n)||function H0(n,e){return n[Sv]=e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n,{previous:Uo,current:null}),s=i.current||(i.current={}),o=i.previous,a=this.declaredInputs[t],l=o[a];s[a]=new j0(l&&l.currentValue,e,o===Uo),n[r]=e}it.ngInherit=!0;const Sv="__ngSimpleChanges__";function Mv(n){return n[Sv]||null}let sp=null;const en=function(n,e,t){sp?.(n,e,t)},ap="math";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Be(n){for(;Array.isArray(n);)n=n[0];return n}function od(n,e){return Be(e[n])}function xt(n,e){return Be(e[n.index])}function lp(n,e){return n.data[e]}function qo(n,e){return n[e]}function Ot(n,e){const t=e[n];return Ct(t)?t:t[0]}function ad(n){return 64==(64&n[2])}function Mi(n,e){return null==e?null:n[e]}function Iv(n){n[18]=0}function cp(n,e){n[5]+=e;let t=n,r=n[3];for(;null!==r&&(1===e&&1===t[5]||-1===e&&0===t[5]);)r[5]+=e,t=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const F={lFrame:Lv(null),bindingsEnabled:!0};function Tv(){return F.bindingsEnabled}function eR(){F.bindingsEnabled=!0}function tR(){F.bindingsEnabled=!1}function b(){return F.lFrame.lView}function ae(){return F.lFrame.tView}function Wo(n){return F.lFrame.contextLView=n,n[8]}function Ko(n){return F.lFrame.contextLView=null,n}function He(){let n=Rv();for(;null!==n&&64===n.type;)n=n.parent;return n}function Rv(){return F.lFrame.currentTNode}function Yl(){const n=F.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Vn(n,e){const t=F.lFrame;t.currentTNode=n,t.isParent=e}function up(){return F.lFrame.isParent}function dp(){F.lFrame.isParent=!1}function ht(){const n=F.lFrame;let e=n.bindingRootIndex;return-1===e&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function Dr(){return F.lFrame.bindingIndex}function Ov(n){return F.lFrame.bindingIndex=n}function Zo(){return F.lFrame.bindingIndex++}function Cr(n){const e=F.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function Pv(n){F.lFrame.inI18n=n}function iR(n,e){const t=F.lFrame;t.bindingIndex=t.bindingRootIndex=n,hp(e)}function hp(n){F.lFrame.currentDirectiveIndex=n}function fp(n){const e=F.lFrame.currentDirectiveIndex;return-1===e?null:n[e]}function kv(){return F.lFrame.currentQueryIndex}function pp(n){F.lFrame.currentQueryIndex=n}function oR(n){const e=n[1];return 2===e.type?e.declTNode:1===e.type?n[6]:null}function Nv(n,e,t){if(t&q.SkipSelf){let i=e,s=n;for(;(i=i.parent,null===i&&!(t&q.Host))&&(i=oR(s),!(null===i||(s=s[15],10&i.type))););if(null===i)return!1;e=i,n=s}const r=F.lFrame=Fv();return r.currentTNode=e,r.lView=n,!0}function gp(n){const e=Fv(),t=n[1];F.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Fv(){const n=F.lFrame,e=null===n?null:n.child;return null===e?Lv(n):e}function Lv(n){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return null!==n&&(n.child=e),e}function Vv(){const n=F.lFrame;return F.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}const Bv=Vv;function mp(){const n=Vv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function aR(n){return(F.lFrame.contextLView=function lR(n,e){for(;n>0;)e=e[15],n--;return e}(n,F.lFrame.contextLView))[8]}function ft(){return F.lFrame.selectedIndex}function Ii(n){F.lFrame.selectedIndex=n}function Ae(){const n=F.lFrame;return lp(n.tView,n.selectedIndex)}function cR(){F.lFrame.currentNamespace="svg"}function uR(){F.lFrame.currentNamespace=ap}function dR(){!function hR(){F.lFrame.currentNamespace=null}()}function ld(n,e){for(let t=e.directiveStart,r=e.directiveEnd;t<r;t++){const s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=s;o&&(n.contentHooks||(n.contentHooks=[])).push(-t,o),a&&((n.contentHooks||(n.contentHooks=[])).push(t,a),(n.contentCheckHooks||(n.contentCheckHooks=[])).push(t,a)),l&&(n.viewHooks||(n.viewHooks=[])).push(-t,l),c&&((n.viewHooks||(n.viewHooks=[])).push(t,c),(n.viewCheckHooks||(n.viewCheckHooks=[])).push(t,c)),null!=u&&(n.destroyHooks||(n.destroyHooks=[])).push(t,u)}}function cd(n,e,t){jv(n,e,3,t)}function ud(n,e,t,r){(3&n[2])===t&&jv(n,e,t,r)}function yp(n,e){let t=n[2];(3&t)===e&&(t&=2047,t+=1,n[2]=t)}function jv(n,e,t,r){const i=void 0!==r?65535&n[18]:0,s=r??-1,o=e.length-1;let a=0;for(let l=i;l<o;l++)if("number"==typeof e[l+1]){if(a=e[l],null!=r&&a>=r)break}else e[l]<0&&(n[18]+=65536),(a<s||-1==s)&&(gR(n,t,e,l),n[18]=(4294901760&n[18])+l+2),l++}function gR(n,e,t,r){const i=t[r]<0,s=t[r+1],a=n[i?-t[r]:t[r]];if(i){if(n[2]>>11<n[18]>>16&&(3&n[2])===e){n[2]+=2048,en(4,a,s);try{s.call(a)}finally{en(5,a,s)}}}else{en(4,a,s);try{s.call(a)}finally{en(5,a,s)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Xl{constructor(e,t,r){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=r}}function dd(n,e,t){let r=0;for(;r<t.length;){const i=t[r];if("number"==typeof i){if(0!==i)break;r++;const s=t[r++],o=t[r++],a=t[r++];n.setAttribute(e,o,a,s)}else{const s=i,o=t[++r];$v(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),r++}}return r}function Uv(n){return 3===n||4===n||6===n}function $v(n){return 64===n.charCodeAt(0)}function hd(n,e){if(null!==e&&0!==e.length)if(null===n||0===n.length)n=e.slice();else{let t=-1;for(let r=0;r<e.length;r++){const i=e[r];"number"==typeof i?t=i:0===t||Hv(n,t,i,null,-1===t||2===t?e[++r]:null)}}return n}function Hv(n,e,t,r,i){let s=0,o=n.length;if(-1===e)o=-1;else for(;s<n.length;){const a=n[s++];if("number"==typeof a){if(a===e){o=-1;break}if(a>e){o=s-1;break}}}for(;s<n.length;){const a=n[s];if("number"==typeof a)break;if(a===t){if(null===r)return void(null!==i&&(n[s+1]=i));if(r===n[s+1])return void(n[s+2]=i)}s++,null!==r&&s++,null!==i&&s++}-1!==o&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),null!==r&&n.splice(s++,0,r),null!==i&&n.splice(s++,0,i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function zv(n){return-1!==n}function Qo(n){return 32767&n}function Yo(n,e){let t=function DR(n){return n>>16}(n),r=e;for(;t>0;)r=r[15],t--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let vp=!0;function fd(n){const e=vp;return vp=n,e}let CR=0;const Bn={};function ec(n,e){const t=Cp(n,e);if(-1!==t)return t;const r=e[1];r.firstCreatePass&&(n.injectorIndex=e.length,Dp(r.data,n),Dp(e,null),Dp(r.blueprint,null));const i=pd(n,e),s=n.injectorIndex;if(zv(i)){const o=Qo(i),a=Yo(i,e),l=a[1].data;for(let c=0;c<8;c++)e[s+c]=a[o+c]|l[o+c]}return e[s+8]=i,s}function Dp(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Cp(n,e){return-1===n.injectorIndex||n.parent&&n.parent.injectorIndex===n.injectorIndex||null===e[n.injectorIndex+8]?-1:n.injectorIndex}function pd(n,e){if(n.parent&&-1!==n.parent.injectorIndex)return n.parent.injectorIndex;let t=0,r=null,i=e;for(;null!==i;){if(r=Jv(i),null===r)return-1;if(t++,i=i[15],-1!==r.injectorIndex)return r.injectorIndex|t<<16}return-1}function gd(n,e,t){!function bR(n,e,t){let r;"string"==typeof t?r=t.charCodeAt(0)||0:t.hasOwnProperty(ql)&&(r=t[ql]),null==r&&(r=t[ql]=CR++);const i=255&r,s=1<<i;e.data[n+(i>>5)]|=s}(n,e,t)}function Wv(n,e,t){if(t&q.Optional||void 0!==n)return n;Yu()}function Kv(n,e,t,r){if(t&q.Optional&&void 0===r&&(r=null),0==(t&(q.Self|q.Host))){const i=n[9],s=Xt(void 0);try{return i?i.get(e,r,t&q.Optional):mv(e,r,t&q.Optional)}finally{Xt(s)}}return Wv(r,0,t)}function Zv(n,e,t,r=q.Default,i){if(null!==n){if(1024&e[2]){const o=function IR(n,e,t,r,i){let s=n,o=e;for(;null!==s&&null!==o&&1024&o[2]&&!(256&o[2]);){const a=Qv(s,o,t,r|q.Self,Bn);if(a!==Bn)return a;let l=s.parent;if(!l){const c=o[21];if(c){const u=c.get(t,Bn,r);if(u!==Bn)return u}l=Jv(o),o=o[15]}s=l}return i}(n,e,t,r,Bn);if(o!==Bn)return o}const s=Qv(n,e,t,r,Bn);if(s!==Bn)return s}return Kv(e,t,r,i)}function Qv(n,e,t,r,i){const s=function SR(n){if("string"==typeof n)return n.charCodeAt(0)||0;const e=n.hasOwnProperty(ql)?n[ql]:void 0;return"number"==typeof e?e>=0?255&e:MR:e}(t);if("function"==typeof s){if(!Nv(e,n,r))return r&q.Host?Wv(i,0,r):Kv(e,t,r,i);try{const o=s(r);if(null!=o||r&q.Optional)return o;Yu()}finally{Bv()}}else if("number"==typeof s){let o=null,a=Cp(n,e),l=-1,c=r&q.Host?e[16][6]:null;for((-1===a||r&q.SkipSelf)&&(l=-1===a?pd(n,e):e[a+8],-1!==l&&Xv(r,!1)?(o=e[1],a=Qo(l),e=Yo(l,e)):a=-1);-1!==a;){const u=e[1];if(Yv(s,a,u.data)){const d=ER(a,e,t,o,r,c);if(d!==Bn)return d}l=e[a+8],-1!==l&&Xv(r,e[1].data[a+8]===c)&&Yv(s,a,e)?(o=u,a=Qo(l),e=Yo(l,e)):a=-1}}return i}function ER(n,e,t,r,i,s){const o=e[1],a=o.data[n+8],u=md(a,o,t,null==r?id(a)&&vp:r!=o&&0!=(3&a.type),i&q.Host&&s===a);return null!==u?tc(e,o,u,a):Bn}function md(n,e,t,r,i){const s=n.providerIndexes,o=e.data,a=1048575&s,l=n.directiveStart,c=n.directiveEnd,u=s>>20,h=i?a+u:c;for(let f=r?a:a+u;f<h;f++){const p=o[f];if(f<l&&t===p||f>=l&&p.type===t)return f}if(i){const f=o[l];if(f&&Dn(f)&&f.type===t)return l}return null}function tc(n,e,t,r){let i=n[t];const s=e.data;if(function mR(n){return n instanceof Xl}(i)){const o=i;o.resolving&&function C0(n,e){const t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new v(-200,`Circular dependency in DI detected for ${n}${t}`)}(he(s[t]));const a=fd(o.canSeeViewProviders);o.resolving=!0;const l=o.injectImpl?Xt(o.injectImpl):null;Nv(n,r,q.Default);try{i=n[t]=o.factory(void 0,s,n,r),e.firstCreatePass&&t>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function pR(n,e,t){const{ngOnChanges:r,ngOnInit:i,ngDoCheck:s}=e.type.prototype;if(r){const o=Ev(e);(t.preOrderHooks||(t.preOrderHooks=[])).push(n,o),(t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n,o)}i&&(t.preOrderHooks||(t.preOrderHooks=[])).push(0-n,i),s&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n,s),(t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n,s))}(t,s[t],e)}finally{null!==l&&Xt(l),fd(a),o.resolving=!1,Bv()}}return i}function Yv(n,e,t){const r=1<<n;return!!(t[e+(n>>5)]&r)}function Xv(n,e){return!(n&q.Self||n&q.Host&&e)}class Xo{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,r){return Zv(this._tNode,this._lView,e,r,t)}}function MR(){return new Xo(He(),b())}function ze(n){return Si(()=>{const e=n.prototype.constructor,t=e[vr]||bp(e),r=Object.prototype;let i=Object.getPrototypeOf(n.prototype).constructor;for(;i&&i!==r;){const s=i[vr]||bp(i);if(s&&s!==t)return s;i=Object.getPrototypeOf(i)}return s=>new s})}function bp(n){return Qf(n)?()=>{const e=bp(k(n));return e&&e()}:As(n)}function Jv(n){const e=n[1],t=e.type;return 2===t?e.declTNode:1===t?n[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jo(n){return function wR(n,e){if("class"===e)return n.classes;if("style"===e)return n.styles;const t=n.attrs;if(t){const r=t.length;let i=0;for(;i<r;){const s=t[i];if(Uv(s))break;if(0===s)i+=2;else if("number"==typeof s)for(i++;i<r&&"string"==typeof t[i];)i++;else{if(s===e)return t[i+1];i+=2}}}return null}(He(),n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ea="__annotations__",ta="__parameters__",na="__prop__metadata__";function nc(n,e,t,r,i){return Si(()=>{const s=wp(e);function o(...a){if(this instanceof o)return s.call(this,...a),this;const l=new o(...a);return function(u){return i&&i(u,...a),(u.hasOwnProperty(ea)?u[ea]:Object.defineProperty(u,ea,{value:[]})[ea]).push(l),r&&r(u),u}}return t&&(o.prototype=Object.create(t.prototype)),o.prototype.ngMetadataName=n,o.annotationCls=o,o})}function wp(n){return function(...t){if(n){const r=n(...t);for(const i in r)this[i]=r[i]}}}function ra(n,e,t){return Si(()=>{const r=wp(e);function i(...s){if(this instanceof i)return r.apply(this,s),this;const o=new i(...s);return a.annotation=o,a;function a(l,c,u){const d=l.hasOwnProperty(ta)?l[ta]:Object.defineProperty(l,ta,{value:[]})[ta];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),l}}return t&&(i.prototype=Object.create(t.prototype)),i.prototype.ngMetadataName=n,i.annotationCls=i,i})}function Ti(n,e,t,r){return Si(()=>{const i=wp(e);function s(...o){if(this instanceof s)return i.apply(this,o),this;const a=new s(...o);return function l(c,u){const d=c.constructor,h=d.hasOwnProperty(na)?d[na]:Object.defineProperty(d,na,{value:{}})[na];h[u]=h.hasOwnProperty(u)&&h[u]||[],h[u].unshift(a),r&&r(c,u,...o)}}return t&&(s.prototype=Object.create(t.prototype)),s.prototype.ngMetadataName=n,s.annotationCls=s,s})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const AR=ra("Attribute",n=>({attributeName:n,__NG_ELEMENT_ID__:()=>Jo(n)}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class S{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=E({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */new S("AnalyzeForEntryComponents");class yd{}Ti("ContentChildren",(n,e={})=>({selector:n,first:!1,isViewQuery:!1,descendants:!1,emitDistinctChangesOnly:true,...e}),yd),Ti("ContentChild",(n,e={})=>({selector:n,first:!0,isViewQuery:!1,descendants:!0,...e}),yd),Ti("ViewChildren",(n,e={})=>({selector:n,first:!1,isViewQuery:!0,descendants:!0,emitDistinctChangesOnly:true,...e}),yd),Ti("ViewChild",(n,e)=>({selector:n,first:!0,isViewQuery:!0,descendants:!0,...e}),yd)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */;var Ts,tD,nD;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ge(n){const e=be.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */!function(n){n[n.Directive=0]="Directive",n[n.Component=1]="Component",n[n.Injectable=2]="Injectable",n[n.Pipe=3]="Pipe",n[n.NgModule=4]="NgModule"}(Ts||(Ts={})),function(n){n[n.Directive=0]="Directive",n[n.Pipe=1]="Pipe",n[n.NgModule=2]="NgModule"}(tD||(tD={})),function(n){n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom"}(nD||(nD={}));const Ep=Function;function rc(n){return"function"==typeof n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pt(n,e){void 0===e&&(e=n);for(let t=0;t<n.length;t++){let r=n[t];Array.isArray(r)?(e===n&&(e=n.slice(0,t)),Pt(r,e)):e!==n&&e.push(r)}return e}function br(n,e){n.forEach(t=>Array.isArray(t)?br(t,e):e(t))}function rD(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function _d(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function ic(n,e){const t=[];for(let r=0;r<n;r++)t.push(e);return t}function kt(n,e,t){let r=ia(n,e);return r>=0?n[1|r]=t:(r=~r,function xR(n,e,t,r){let i=n.length;if(i==e)n.push(t,r);else if(1===i)n.push(r,n[0]),n[0]=t;else{for(i--,n.push(n[i-1],n[i]);i>e;){const s=i-2;n[i]=n[s],i--}n[e]=t,n[e+1]=r}}(n,r,e,t)),r}function Sp(n,e){const t=ia(n,e);if(t>=0)return n[1|t]}function ia(n,e){return oD(n,e,1)}function oD(n,e,t){let r=0,i=n.length>>t;for(;i!==r;){const s=r+(i-r>>1),o=n[s<<t];if(e===o)return s<<t;o>e?i=s:r=s+1}return~(i<<t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const OR=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/,PR=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,kR=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,NR=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;class LR{constructor(e){this._reflect=e||be.Reflect}factory(e){return(...t)=>new e(...t)}_zipTypesAndAnnotations(e,t){let r;r=ic(typeof e>"u"?t.length:e.length);for(let i=0;i<r.length;i++)typeof e>"u"?r[i]=[]:e[i]&&e[i]!=Object?r[i]=[e[i]]:r[i]=[],t&&null!=t[i]&&(r[i]=r[i].concat(t[i]));return r}_ownParameters(e,t){if(function FR(n){return OR.test(n)||NR.test(n)||PR.test(n)&&!kR.test(n)}(e.toString()))return null;if(e.parameters&&e.parameters!==t.parameters)return e.parameters;const i=e.ctorParameters;if(i&&i!==t.ctorParameters){const a="function"==typeof i?i():i,l=a.map(u=>u&&u.type),c=a.map(u=>u&&Mp(u.decorators));return this._zipTypesAndAnnotations(l,c)}const s=e.hasOwnProperty(ta)&&e[ta],o=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return o||s?this._zipTypesAndAnnotations(o,s):ic(e.length)}parameters(e){if(!rc(e))return[];const t=vd(e);let r=this._ownParameters(e,t);return!r&&t!==Object&&(r=this.parameters(t)),r||[]}_ownAnnotations(e,t){if(e.annotations&&e.annotations!==t.annotations){let r=e.annotations;return"function"==typeof r&&r.annotations&&(r=r.annotations),r}return e.decorators&&e.decorators!==t.decorators?Mp(e.decorators):e.hasOwnProperty(ea)?e[ea]:null}annotations(e){if(!rc(e))return[];const t=vd(e),r=this._ownAnnotations(e,t)||[];return(t!==Object?this.annotations(t):[]).concat(r)}_ownPropMetadata(e,t){if(e.propMetadata&&e.propMetadata!==t.propMetadata){let r=e.propMetadata;return"function"==typeof r&&r.propMetadata&&(r=r.propMetadata),r}if(e.propDecorators&&e.propDecorators!==t.propDecorators){const r=e.propDecorators,i={};return Object.keys(r).forEach(s=>{i[s]=Mp(r[s])}),i}return e.hasOwnProperty(na)?e[na]:null}propMetadata(e){if(!rc(e))return{};const t=vd(e),r={};if(t!==Object){const s=this.propMetadata(t);Object.keys(s).forEach(o=>{r[o]=s[o]})}const i=this._ownPropMetadata(e,t);return i&&Object.keys(i).forEach(s=>{const o=[];r.hasOwnProperty(s)&&o.push(...r[s]),o.push(...i[s]),r[s]=o}),r}ownPropMetadata(e){return rc(e)&&this._ownPropMetadata(e,vd(e))||{}}hasLifecycleHook(e,t){return e instanceof Ep&&t in e.prototype}}function Mp(n){return n?n.map(e=>new(0,e.type.annotationCls)(...e.args?e.args:[])):[]}function vd(n){const e=n.prototype?Object.getPrototypeOf(n.prototype):null;return(e?e.constructor:null)||Object}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ri={},Ip="__NG_DI_FLAG__",Dd="ngTempTokenPath",BR=/\n/gm,aD="__source";let sc;function sa(n){const e=sc;return sc=n,e}function UR(n,e=q.Default){if(void 0===sc)throw new v(-203,!1);return null===sc?mv(n,void 0,e):sc.get(n,e&q.Optional?null:void 0,e)}function D(n,e=q.Default){return(function R0(){return Xf}()||UR)(k(n),e)}function lD(n){throw new v(202,!1)}function Y(n,e=q.Default){return"number"!=typeof e&&(e=0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)),D(n,e)}function Ap(n){const e=[];for(let t=0;t<n.length;t++){const r=k(n[t]);if(Array.isArray(r)){if(0===r.length)throw new v(900,!1);let i,s=q.Default;for(let o=0;o<r.length;o++){const a=r[o],l=$R(a);"number"==typeof l?-1===l?i=a.token:s|=l:i=a}e.push(D(i,s))}else e.push(D(r))}return e}function oc(n,e){return n[Ip]=e,n.prototype[Ip]=e,n}function $R(n){return n[Ip]}function HR(n,e,t,r){const i=n[Dd];throw e[aD]&&i.unshift(e[aD]),n.message=function zR(n,e,t,r=null){n=n&&"\n"===n.charAt(0)&&"\u0275"==n.charAt(1)?n.slice(2):n;let i=De(e);if(Array.isArray(e))i=e.map(De).join(" -> ");else if("object"==typeof e){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+("string"==typeof a?JSON.stringify(a):De(a)))}i=`{${s.join(", ")}}`}return`${t}${r?"("+r+")":""}[${i}]: ${n.replace(BR,"\n  ")}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */("\n"+n.message,i,t,r),n.ngTokenPath=i,n[Dd]=null,n}const Tp=oc(ra("Inject",n=>({token:n})),-1),oa=oc(ra("Optional"),8),Rp=oc(ra("Self"),2),aa=oc(ra("SkipSelf"),4),GR=oc(ra("Host"),1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let cD=null;function ac(){return cD=cD||new LR}function Cd(n){return uD(ac().parameters(n))}function uD(n){return n.map(e=>function qR(n){const e={token:null,attribute:null,host:!1,optional:!1,self:!1,skipSelf:!1};if(Array.isArray(n)&&n.length>0)for(let t=0;t<n.length;t++){const r=n[t];if(void 0===r)continue;const i=Object.getPrototypeOf(r);if(r instanceof oa||"Optional"===i.ngMetadataName)e.optional=!0;else if(r instanceof aa||"SkipSelf"===i.ngMetadataName)e.skipSelf=!0;else if(r instanceof Rp||"Self"===i.ngMetadataName)e.self=!0;else if(r instanceof GR||"Host"===i.ngMetadataName)e.host=!0;else if(r instanceof Tp)e.token=r.token;else if(r instanceof AR){if(void 0===r.attributeName)throw new v(204,!1);e.attribute=r.attributeName}else e.token=r}else void 0===n||Array.isArray(n)&&0===n.length?e.token=null:e.token=n;return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e))}function WR(n){const e=[],t=new Map;function r(i){let s=t.get(i);if(!s){const o=n(i);t.set(i,s=o.then(YR))}return s}return la.forEach((i,s)=>{const o=[];i.templateUrl&&o.push(r(i.templateUrl).then(d=>{i.template=d}));const a=i.styleUrls,l=i.styles||(i.styles=[]),c=i.styles.length;a&&a.forEach((d,h)=>{l.push(""),o.push(r(d).then(f=>{l[c+h]=f,a.splice(a.indexOf(d),1),0==a.length&&(i.styleUrls=void 0)}))});const u=Promise.all(o).then(()=>function XR(n){lc.delete(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s));e.push(u)}),function ZR(){const n=la;return la=new Map,n}(),Promise.all(e).then(()=>{})}let la=new Map;const lc=new Set;function dD(n){return!!(n.templateUrl&&!n.hasOwnProperty("template")||n.styleUrls&&n.styleUrls.length)}function YR(n){return"string"==typeof n?n:n.text()}const bd=new Map;let hD=!0;function fD(n,e){(function JR(n,e,t){if(e&&e!==t&&hD)throw new Error(`Duplicate module registered for ${n} - ${De(e)} vs ${De(e.name)}`)})(e,bd.get(e)||null,n),bd.set(e,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var wr;!function(n){n[n.Important=1]="Important",n[n.DashCase=2]="DashCase"}(wr||(wr={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const rx=/^>|^->|<!--|-->|--!>|<!-$/g,ix=/(<|>)/;function vD(n){return n.replace(rx,e=>e.replace(ix,"\u200b$1\u200b"))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const kp=new Map;let ox=0;const Fp="__ngContext__";function st(n,e){Ct(e)?(n[Fp]=e[20],function lx(n){kp.set(n[20],n)}(e)):n[Fp]=e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Lp;function Vp(n,e){return Lp(n,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function uc(n){const e=n[3];return vn(e)?e[3]:e}function Bp(n){return ID(n[13])}function jp(n){return ID(n[4])}function ID(n){for(;null!==n&&!vn(n);)n=n[4];return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ca(n,e,t,r,i){if(null!=r){let s,o=!1;vn(r)?s=r:Ct(r)&&(o=!0,r=r[0]);const a=Be(r);0===n&&null!==t?null==i?PD(e,t,a):Rs(e,t,a,i||null,!0):1===n&&null!==t?Rs(e,t,a,i||null,!0):2===n?Wp(e,a,o):3===n&&e.destroyNode(a),null!=s&&function Px(n,e,t,r,i){const s=t[7],o=Be(t);s!==o&&ca(e,n,r,s,i);for(let a=10;a<t.length;a++){const l=t[a];dc(l[1],l,n,e,r,s)}}(e,n,s,t,i)}}function Up(n,e){return n.createText(e)}function AD(n,e,t){n.setValue(e,t)}function Cx(n,e){return n.createComment(vD(e))}function $p(n,e,t){return n.createElement(e,t)}function Mx(n,e,t,r){const i=10+r,s=t.length;r>0&&(t[i-1][4]=e),r<s-10?(e[4]=t[i],rD(t,10+r,e)):(t.push(e),e[4]=null),e[3]=t;const o=e[17];null!==o&&t!==o&&function Ix(n,e){const t=n[9],i=e[3][3][16];e[16]!==i&&(n[2]=!0),null===t?n[9]=[e]:t.push(e)}(o,e);const a=e[19];null!==a&&a.insertView(n),e[2]|=64}function TD(n,e){const t=n[9],r=t.indexOf(e),i=e[3];512&e[2]&&(e[2]&=-513,cp(i,-1)),t.splice(r,1)}function Hp(n,e){if(n.length<=10)return;const t=10+e,r=n[t];if(r){const i=r[17];null!==i&&i!==n&&TD(i,r),e>0&&(n[t-1][4]=r[4]);const s=_d(n,10+e);!function bx(n,e){dc(n,e,e[U],2,null,null),e[0]=null,e[6]=null}(r[1],r);const o=s[19];null!==o&&o.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function RD(n,e){if(!(128&e[2])){const t=e[U];t.destroyNode&&dc(n,e,t,3,null,null),function Sx(n){let e=n[13];if(!e)return zp(n[1],n);for(;e;){let t=null;if(Ct(e))t=e[13];else{const r=e[10];r&&(t=r)}if(!t){for(;e&&!e[4]&&e!==n;)Ct(e)&&zp(e[1],e),e=e[3];null===e&&(e=n),Ct(e)&&zp(e[1],e),t=e&&e[4]}e=t}}(e)}}function zp(n,e){if(!(128&e[2])){e[2]&=-65,e[2]|=128,function Tx(n,e){let t;if(null!=n&&null!=(t=n.destroyHooks))for(let r=0;r<t.length;r+=2){const i=e[t[r]];if(!(i instanceof Xl)){const s=t[r+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){const a=i[s[o]],l=s[o+1];en(4,a,l);try{l.call(a)}finally{en(5,a,l)}}else{en(4,i,s);try{s.call(i)}finally{en(5,i,s)}}}}}(n,e),function Ax(n,e){const t=n.cleanup,r=e[7];let i=-1;if(null!==t)for(let s=0;s<t.length-1;s+=2)if("string"==typeof t[s]){const o=t[s+1],a="function"==typeof o?o(e):Be(e[o]),l=r[i=t[s+2]],c=t[s+3];"boolean"==typeof c?a.removeEventListener(t[s],l,c):c>=0?r[i=c]():r[i=-c].unsubscribe(),s+=2}else{const o=r[i=t[s+1]];t[s].call(o)}if(null!==r){for(let s=i+1;s<r.length;s++){(0,r[s])()}e[7]=null}}(n,e),1===e[1].type&&e[U].destroy();const t=e[17];if(null!==t&&vn(e[3])){t!==e[3]&&TD(t,e);const r=e[19];null!==r&&r.detachView(n)}!function cx(n){kp.delete(n[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)}}function xD(n,e,t){return OD(n,e.parent,t)}function OD(n,e,t){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return t[0];if(2&r.flags){const i=n.data[r.directiveStart].encapsulation;if(i===Ln.None||i===Ln.Emulated)return null}return xt(r,t)}function Rs(n,e,t,r,i){n.insertBefore(e,t,r,i)}function PD(n,e,t){n.appendChild(e,t)}function kD(n,e,t,r,i){null!==r?Rs(n,e,t,r,i):PD(n,e,t)}function wd(n,e){return n.parentNode(e)}function ND(n,e,t){return LD(n,e,t)}function FD(n,e,t){return 40&n.type?xt(n,t):null}let Gp,Md,Yp,Id,LD=FD;function VD(n,e){LD=n,Gp=e}function Ed(n,e,t,r){const i=xD(n,r,e),s=e[U],a=ND(r.parent||e[6],r,e);if(null!=i)if(Array.isArray(t))for(let l=0;l<t.length;l++)kD(s,i,t[l],a,!1);else kD(s,i,t,a,!1);void 0!==Gp&&Gp(s,r,e,t,i)}function Sd(n,e){if(null!==e){const t=e.type;if(3&t)return xt(e,n);if(4&t)return qp(-1,n[e.index]);if(8&t){const r=e.child;if(null!==r)return Sd(n,r);{const i=n[e.index];return vn(i)?qp(-1,i):Be(i)}}if(32&t)return Vp(e,n)()||Be(n[e.index]);{const r=BD(n,e);if(null!==r){if(Array.isArray(r))return r[0];return Sd(uc(n[16]),r)}return Sd(n,e.next)}}return null}function BD(n,e){if(null!==e){const r=n[16][6],i=e.projection;return r.projection[i]}return null}function qp(n,e){const t=10+n+1;if(t<e.length){const r=e[t],i=r[1].firstChild;if(null!==i)return Sd(r,i)}return e[7]}function Wp(n,e,t){const r=wd(n,e);r&&function Rx(n,e,t,r){n.removeChild(e,t,r)}(n,r,e,t)}function Kp(n,e,t,r,i,s,o){for(;null!=t;){const a=r[t.index],l=t.type;if(o&&0===e&&(a&&st(Be(a),r),t.flags|=4),64!=(64&t.flags))if(8&l)Kp(n,e,t.child,r,i,s,!1),ca(e,n,i,a,s);else if(32&l){const c=Vp(t,r);let u;for(;u=c();)ca(e,n,i,u,s);ca(e,n,i,a,s)}else 16&l?jD(n,e,r,t,i,s):ca(e,n,i,a,s);t=o?t.projectionNext:t.next}}function dc(n,e,t,r,i,s){Kp(t,r,n.firstChild,e,i,s,!1)}function jD(n,e,t,r,i,s){const o=t[16],l=o[6].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){ca(e,n,i,l[c],s)}else{Kp(n,e,l,o[3],i,s,!0)}}function UD(n,e,t){n.setAttribute(e,"style",t)}function Zp(n,e,t){""===t?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qp(){if(void 0===Md&&(Md=null,be.trustedTypes))try{Md=be.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Md}function xs(n){return Qp()?.createHTML(n)||n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Lx(n,e,t){const r=b(),i=Ae(),s=xt(i,r);if(2===i.type&&"iframe"===e.toLowerCase()){const o=s;o.src="",o.srcdoc=xs(""),Wp(r[U],o);throw new v(-910,!1)}return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $D(){return void 0!==Yp?Yp:typeof document<"u"?document:void 0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xp(){if(void 0===Id&&(Id=null,be.trustedTypes))try{Id=be.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Id}function HD(n){return Xp()?.createHTML(n)||n}function zD(n){return Xp()?.createScript(n)||n}function GD(n){return Xp()?.createScriptURL(n)||n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Os{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class Bx extends Os{getTypeName(){return"HTML"}}class jx extends Os{getTypeName(){return"Style"}}class Ux extends Os{getTypeName(){return"Script"}}class $x extends Os{getTypeName(){return"URL"}}class Hx extends Os{getTypeName(){return"ResourceURL"}}function Nt(n){return n instanceof Os?n.changingThisBreaksApplicationSecurity:n}function jn(n,e){const t=function zx(n){return n instanceof Os&&n.getTypeName()||null}(n);if(null!=t&&t!==e){if("ResourceURL"===t&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${t} (see https://g.co/ng/security#xss)`)}return t===e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function qD(n){const e=new Yx(n);return function Xx(){try{return!!(new window.DOMParser).parseFromString(xs(""),"text/html")}catch{return!1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()?new Qx(e):e}class Qx{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{const t=(new window.DOMParser).parseFromString(xs(e),"text/html").body;return null===t?this.inertDocumentHelper.getInertBodyElement(e):(t.removeChild(t.firstChild),t)}catch{return null}}}class Yx{constructor(e){if(this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const t=this.inertDocument.createElement("html");this.inertDocument.appendChild(t);const r=this.inertDocument.createElement("body");t.appendChild(r)}}getInertBodyElement(e){const t=this.inertDocument.createElement("template");if("content"in t)return t.innerHTML=xs(e),t;const r=this.inertDocument.createElement("body");return r.innerHTML=xs(e),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(r),r}stripCustomNsAttrs(e){const t=e.attributes;for(let i=t.length-1;0<i;i--){const o=t.item(i).name;("xmlns:ns1"===o||0===o.indexOf("ns1:"))&&e.removeAttribute(o)}let r=e.firstChild;for(;r;)r.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(r),r=r.nextSibling}}const Jx=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;function Ad(n){return(n=String(n)).match(Jx)?n:"unsafe:"+n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Er(n){const e={};for(const t of n.split(","))e[t]=!0;return e}function hc(...n){const e={};for(const t of n)for(const r in t)t.hasOwnProperty(r)&&(e[r]=!0);return e}const WD=Er("area,br,col,hr,img,wbr"),KD=Er("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),ZD=Er("rp,rt"),eO=hc(ZD,KD),tO=hc(KD,Er("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),nO=hc(ZD,Er("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Jp=hc(WD,tO,nO,eO),eg=Er("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),rO=Er("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),iO=Er("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),QD=hc(eg,rO,iO),sO=Er("script,style,template");class oO{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let t=e.firstChild,r=!0;for(;t;)if(t.nodeType===Node.ELEMENT_NODE?r=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,r&&t.firstChild)t=t.firstChild;else for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let i=this.checkClobberedElement(t,t.nextSibling);if(i){t=i;break}t=this.checkClobberedElement(t,t.parentNode)}return this.buf.join("")}startElement(e){const t=e.nodeName.toLowerCase();if(!Jp.hasOwnProperty(t))return this.sanitizedSomething=!0,!sO.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);const r=e.attributes;for(let i=0;i<r.length;i++){const s=r.item(i),o=s.name,a=o.toLowerCase();if(!QD.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=s.value;eg[a]&&(l=Ad(l)),this.buf.push(" ",o,'="',YD(l),'"')}return this.buf.push(">"),!0}endElement(e){const t=e.nodeName.toLowerCase();Jp.hasOwnProperty(t)&&!WD.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(YD(e))}checkClobberedElement(e,t){if(t&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return t}}const aO=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,lO=/([^\#-~ |!])/g;function YD(n){return n.replace(/&/g,"&amp;").replace(aO,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(lO,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let Td;function XD(n,e){let t=null;try{Td=Td||qD(n);let r=e?String(e):"";t=Td.getInertBodyElement(r);let i=5,s=r;do{if(0===i)throw new Error("Failed to sanitize html because the input is unstable");i--,r=s,s=t.innerHTML,t=Td.getInertBodyElement(r)}while(r!==s);return xs((new oO).sanitizeChildren(tg(t)||t))}finally{if(t){const r=tg(t)||t;for(;r.firstChild;)r.removeChild(r.firstChild)}}}function tg(n){return"content"in n&&function cO(n){return n.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===n.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)?n.content:null}var Ft;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function uO(n){const e=fc();return e?HD(e.sanitize(Ft.HTML,n)||""):jn(n,"HTML")?HD(Nt(n)):XD($D(),L(n))}function dO(n){const e=fc();return e?e.sanitize(Ft.STYLE,n)||"":jn(n,"Style")?Nt(n):L(n)}function ng(n){const e=fc();return e?e.sanitize(Ft.URL,n)||"":jn(n,"URL")?Nt(n):Ad(L(n))}function JD(n){const e=fc();if(e)return GD(e.sanitize(Ft.RESOURCE_URL,n)||"");if(jn(n,"ResourceURL"))return GD(Nt(n));throw new v(904,!1)}function hO(n){const e=fc();if(e)return zD(e.sanitize(Ft.SCRIPT,n)||"");if(jn(n,"Script"))return zD(Nt(n));throw new v(905,!1)}function fO(n){return xs(n[0])}function pO(n){return function Fx(n){return Qp()?.createScriptURL(n)||n}(n[0])}function mO(n,e,t){return function gO(n,e){return"src"===e&&("embed"===n||"frame"===n||"iframe"===n||"media"===n||"script"===n)||"href"===e&&("base"===n||"link"===n)?JD:ng}(e,t)(n)}function fc(){const n=b();return n&&n[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */!function(n){n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL"}(Ft||(Ft={}));const rg=new S("ENVIRONMENT_INITIALIZER"),eC=new S("INJECTOR",-1),tC=new S("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class nC{get(e,t=Ri){if(t===Ri){const r=new Error(`NullInjectorError: No provider for ${De(e)}!`);throw r.name="NullInjectorError",r}return t}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yO(...n){return{\u0275providers:rC(!0,n)}}function rC(n,...e){const t=[],r=new Set;let i;return br(e,s=>{const o=s;ig(o,t,[],r)&&(i||(i=[]),i.push(o))}),void 0!==i&&iC(i,t),t}function iC(n,e){for(let t=0;t<n.length;t++){const{ngModule:r,providers:i}=n[t];br(i,s=>{e.push(s)})}}function ig(n,e,t,r){if(!(n=k(n)))return!1;let i=null,s=pv(n);const o=!s&&me(n);if(s||o){if(o&&!o.standalone)return!1;i=n}else{const l=n.ngModule;if(s=pv(l),!s)return!1;i=l}const a=r.has(i);if(o){if(a)return!1;if(r.add(i),o.dependencies){const l="function"==typeof o.dependencies?o.dependencies():o.dependencies;for(const c of l)ig(c,e,t,r)}}else{if(!s)return!1;{if(null!=s.imports&&!a){let c;r.add(i);try{br(s.imports,u=>{ig(u,e,t,r)&&(c||(c=[]),c.push(u))})}finally{}void 0!==c&&iC(c,e)}if(!a){const c=As(i)||(()=>new i);e.push({provide:i,useFactory:c,deps:fe},{provide:tC,useValue:i,multi:!0},{provide:rg,useValue:()=>D(i),multi:!0})}const l=s.providers;if(null!=l&&!a){br(l,u=>{e.push(u)})}}}return i!==n&&void 0!==n.providers}const _O=ve({provide:String,useValue:ve});function sg(n){return null!==n&&"object"==typeof n&&_O in n}function sC(n){return!(!n||!n.useExisting)}function oC(n){return!(!n||!n.useFactory)}function Ps(n){return"function"==typeof n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const og=new S("Set Injector scope."),Rd={},DO={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ag;function xd(){return void 0===ag&&(ag=new nC),ag}class xi{}class aC extends xi{constructor(e,t,r,i){super(),this.parent=t,this.source=r,this.scopes=i,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,cg(e,o=>this.processProvider(o)),this.records.set(eC,ua(void 0,this)),i.has("environment")&&this.records.set(xi,ua(void 0,this));const s=this.records.get(og);null!=s&&"string"==typeof s.value&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(tC.multi,fe,q.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const e of this._ngOnDestroyHooks)e.ngOnDestroy();for(const e of this._onDestroyHooks)e()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(e){this._onDestroyHooks.push(e)}runInContext(e){this.assertNotDestroyed();const t=sa(this),r=Xt(void 0);try{return e()}finally{sa(t),Xt(r)}}get(e,t=Ri,r=q.Default){this.assertNotDestroyed();const i=sa(this),s=Xt(void 0);try{if(!(r&q.SkipSelf)){let a=this.records.get(e);if(void 0===a){const l=function SO(n){return"function"==typeof n||"object"==typeof n&&n instanceof S}(e)&&Xu(e);a=l&&this.injectableDefInScope(l)?ua(lg(e),Rd):null,this.records.set(e,a)}if(null!=a)return this.hydrate(e,a)}const o=r&q.Self?xd():this.parent;return t=r&q.Optional&&t===Ri?null:t,o.get(e,t)}catch(o){if("NullInjectorError"===o.name){if((o[Dd]=o[Dd]||[]).unshift(De(e)),i)throw o;return HR(o,e,"R3InjectorError",this.source)}throw o}finally{Xt(s),sa(i)}}resolveInjectorInitializers(){const e=sa(this),t=Xt(void 0);try{const r=this.get(rg.multi,fe,q.Self);for(const i of r)i()}finally{sa(e),Xt(t)}}toString(){const e=[],t=this.records;for(const r of t.keys())e.push(De(r));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new v(205,!1)}processProvider(e){let t=Ps(e=k(e))?e:k(e&&e.provide);const r=function bO(n){if(sg(n))return ua(void 0,n.useValue);return ua(lC(n),Rd)}(e);if(Ps(e)||!0!==e.multi){this.records.get(t)}else{let i=this.records.get(t);i||(i=ua(void 0,Rd,!0),i.factory=()=>Ap(i.multi),this.records.set(t,i)),t=e,i.multi.push(e)}this.records.set(t,r)}hydrate(e,t){return t.value===Rd&&(t.value=DO,t.value=t.factory()),"object"==typeof t.value&&t.value&&function EO(n){return null!==n&&"object"==typeof n&&"function"==typeof n.ngOnDestroy}(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;const t=k(e.providedIn);return"string"==typeof t?"any"===t||this.scopes.has(t):this.injectorDefTypes.has(t)}}function lg(n){const e=Xu(n),t=null!==e?e.factory:As(n);if(null!==t)return t;if(n instanceof S)throw new v(204,!1);if(n instanceof Function)return function CO(n){const e=n.length;if(e>0){ic(e,"?");throw new v(204,!1)}const t=function I0(n){const e=n&&(n[Ju]||n[gv]);if(e){const t=function A0(n){if(n.hasOwnProperty("name"))return n.name;const e=(""+n).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(n);return console.warn(`DEPRECATED: DI is instantiating a token "${t}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${t}" class.`),e}return null}(n);return null!==t?()=>t.factory(n):()=>new n}(n);throw new v(204,!1)}function lC(n,e,t){let r;if(Ps(n)){const i=k(n);return As(i)||lg(i)}if(sg(n))r=()=>k(n.useValue);else if(oC(n))r=()=>n.useFactory(...Ap(n.deps||[]));else if(sC(n))r=()=>D(k(n.useExisting));else{const i=k(n&&(n.useClass||n.provide));if(!function wO(n){return!!n.deps}(n))return As(i)||lg(i);r=()=>new i(...Ap(n.deps))}return r}function ua(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function MO(n){return!!n.\u0275providers}function cg(n,e){for(const t of n)Array.isArray(t)?cg(t,e):MO(t)?cg(t.\u0275providers,e):e(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class cC{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const uC="ngComponent";class TO{resolveComponentFactory(e){throw function AO(n){const e=Error(`No component factory found for ${De(n)}. Did you add it to @NgModule.entryComponents?`);return e[uC]=n,e}(e)}}class da{}function ha(n,e){return new ye(xt(n,e))}da.NULL=new TO;class ye{constructor(e){this.nativeElement=e}}function xO(n){return n instanceof ye?n.nativeElement:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */ye.__NG_ELEMENT_ID__=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function RO(){return ha(He(),b())};new S("Renderer2Interceptor");class pc{}class Cn{}Cn.__NG_ELEMENT_ID__=()=>function OO(){const n=b(),t=Ot(He().index,n);return(Ct(t)?t:n)[U]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();class ug{}ug.\u0275prov=E({token:ug,providedIn:"root",factory:()=>null});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Oi{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const PO=new Oi("14.3.0"),dg={},hg="ngOriginalError";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fg(n){return n[hg]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class fa{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&fg(e);for(;t&&fg(t);)t=fg(t);return t||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function BO(n){return n.ownerDocument.defaultView}function jO(n){return n.ownerDocument}function UO(n){return n.ownerDocument.body}function Sr(n){return n instanceof Function?n():n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function hC(n,e,t){let r=n.length;for(;;){const i=n.indexOf(e,t);if(-1===i)return i;if(0===i||n.charCodeAt(i-1)<=32){const s=e.length;if(i+s===r||n.charCodeAt(i+s)<=32)return i}t=i+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const fC="ng-template";function zO(n,e,t){let r=0;for(;r<n.length;){let i=n[r++];if(t&&"class"===i){if(i=n[r],-1!==hC(i.toLowerCase(),e,0))return!0}else if(1===i){for(;r<n.length&&"string"==typeof(i=n[r++]);)if(i.toLowerCase()===e)return!0;return!1}}return!1}function pC(n){return 4===n.type&&n.value!==fC}function GO(n,e,t){return e===(4!==n.type||t?n.value:fC)}function qO(n,e,t){let r=4;const i=n.attrs||[],s=function ZO(n){for(let e=0;e<n.length;e++){if(Uv(n[e]))return e}return n.length}(i);let o=!1;for(let a=0;a<e.length;a++){const l=e[a];if("number"!=typeof l){if(!o)if(4&r){if(r=2|1&r,""!==l&&!GO(n,l,t)||""===l&&1===e.length){if(bn(r))return!1;o=!0}}else{const c=8&r?l:e[++a];if(8&r&&null!==n.attrs){if(!zO(n.attrs,c,t)){if(bn(r))return!1;o=!0}continue}const d=WO(8&r?"class":l,i,pC(n),t);if(-1===d){if(bn(r))return!1;o=!0;continue}if(""!==c){let h;h=d>s?"":i[d+1].toLowerCase();const f=8&r?h:null;if(f&&-1!==hC(f,c,0)||2&r&&c!==h){if(bn(r))return!1;o=!0}}}}else{if(!o&&!bn(r)&&!bn(l))return!1;if(o&&bn(l))continue;o=!1,r=l|1&r}}return bn(r)||o}function bn(n){return 0==(1&n)}function WO(n,e,t,r){if(null===e)return-1;let i=0;if(r||!t){let s=!1;for(;i<e.length;){const o=e[i];if(o===n)return i;if(3===o||6===o)s=!0;else{if(1===o||2===o){let a=e[++i];for(;"string"==typeof a;)a=e[++i];continue}if(4===o)break;if(0===o){i+=4;continue}}i+=s?1:2}return-1}return function QO(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){const r=n[t];if("number"==typeof r)return-1;if(r===e)return t;t++}return-1}(e,n)}function gC(n,e,t=!1){for(let r=0;r<e.length;r++)if(qO(n,e[r],t))return!0;return!1}function YO(n,e){e:for(let t=0;t<e.length;t++){const r=e[t];if(n.length===r.length){for(let i=0;i<n.length;i++)if(n[i]!==r[i])continue e;return!0}}return!1}function mC(n,e){return n?":not("+e.trim()+")":e}function XO(n){let e=n[0],t=1,r=2,i="",s=!1;for(;t<n.length;){let o=n[t];if("string"==typeof o)if(2&r){const a=n[++t];i+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?i+="."+o:4&r&&(i+=" "+o);else""!==i&&!bn(o)&&(e+=mC(s,i),i=""),r=o,s=s||!bn(r);t++}return""!==i&&(e+=mC(s,i)),e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const V={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function W(n){yC(ae(),b(),ft()+n,!1)}function yC(n,e,t,r){if(!r)if(3==(3&e[2])){const s=n.preOrderCheckHooks;null!==s&&cd(e,s,t)}else{const s=n.preOrderHooks;null!==s&&ud(e,s,0,t)}Ii(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _C={\u0275\u0275defineInjectable:E,\u0275\u0275defineInjector:re,\u0275\u0275inject:D,\u0275\u0275invalidFactoryDep:lD,resolveForwardRef:k};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function tP(n,e){let t=null,r=null;n.hasOwnProperty(Ju)||Object.defineProperty(n,Ju,{get:()=>(null===t&&(t=Ge().compileInjectable(_C,`ng:///${n.name}/\u0275prov.js`,function sP(n,e){const t=e||{providedIn:null},r={name:n.name,type:n,typeArgumentCount:0,providedIn:t.providedIn};return(vC(t)||DC(t))&&void 0!==t.deps&&(r.deps=uD(t.deps)),vC(t)?r.useClass=t.useClass:function rP(n){return nP in n}(t)?r.useValue=t.useValue:DC(t)?r.useFactory=t.useFactory:function iP(n){return void 0!==n.useExisting}(t)&&(r.useExisting=t.useExisting),r
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}(n,e))),t)}),n.hasOwnProperty(vr)||Object.defineProperty(n,vr,{get:()=>{if(null===r){const i=Ge();r=i.compileFactory(_C,`ng:///${n.name}/\u0275fac.js`,{name:n.name,type:n,typeArgumentCount:0,deps:Cd(n),target:i.FactoryTarget.Injectable})}return r},configurable:!0})}const nP=ve({provide:String,useValue:ve});function vC(n){return void 0!==n.useClass}function DC(n){return void 0!==n.useFactory}nc("Injectable",void 0,void 0,void 0,(n,e)=>tP(n,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function CC(n,e=null,t=null,r){const i=bC(n,e,t,r);return i.resolveInjectorInitializers(),i}function bC(n,e=null,t=null,r,i=new Set){const s=[t||fe,yO(n)];return r=r||("object"==typeof n?void 0:De(n)),new aC(s,e||xd(),r||null,i)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Ne{static create(e,t){if(Array.isArray(e))return CC({name:""},t,e,"");{const r=e.name??"";return CC({name:r},e.parent,e.providers,r)}}}function pg(n){if(n.length>1){return" ("+
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function oP(n){const e=[];for(let t=0;t<n.length;++t){if(e.indexOf(n[t])>-1)return e.push(n[t]),e;e.push(n[t])}return e}(n.slice().reverse()).map(r=>De(r.token)).join(" -> ")+")"}return""}function gg(n,e,t,r){const i=[e],s=t(i),o=r?function kO(n,e){const t=`${n} caused by: ${e instanceof Error?e.message:e}`,r=Error(t);return r[hg]=e,r}(s,r):Error(s);return o.addKey=aP,o.keys=i,o.injectors=[n],o.constructResolvingMessage=t,o[hg]=r,o}function aP(n,e){this.injectors.push(n),this.keys.push(e),this.message=this.constructResolvingMessage(this.keys)}function wC(n,e){const t=[];for(let r=0,i=e.length;r<i;r++){const s=e[r];s&&0!=s.length?t.push(s.map(De).join(" ")):t.push("?")}return Error("Cannot resolve all parameters for '"+De(n)+"'("+t.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+De(n)+"' is decorated with Injectable.")}function fP(n,e){return Error(`Cannot mix multi providers and regular providers, got: ${n} ${e}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Ne.THROW_IF_NOT_FOUND=Ri,Ne.NULL=new nC,Ne.\u0275prov=E({token:Ne,providedIn:"any",factory:()=>D(eC)}),Ne.__NG_ELEMENT_ID__=-1;class Pi{constructor(e,t){if(this.token=e,this.id=t,!e)throw new v(208,!1);this.displayName=De(this.token)}static get(e){return EC.get(k(e))}static get numberOfKeys(){return EC.numberOfKeys}}const EC=new class pP{constructor(){this._allKeys=new Map}get(e){if(e instanceof Pi)return e;if(this._allKeys.has(e))return this._allKeys.get(e);const t=new Pi(e,Pi.numberOfKeys);return this._allKeys.set(e,t),t}get numberOfKeys(){return this._allKeys.size}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Od{constructor(e,t,r){this.key=e,this.optional=t,this.visibility=r}static fromKey(e){return new Od(e,!1,null)}}const gP=[];class SC{constructor(e,t,r){this.key=e,this.resolvedFactories=t,this.multiProvider=r,this.resolvedFactory=this.resolvedFactories[0]}}class mP{constructor(e,t){this.factory=e,this.dependencies=t}}function yP(n){let e,t;if(n.useClass){const r=k(n.useClass);e=ac().factory(r),t=IC(r)}else n.useExisting?(e=r=>r,t=[Od.fromKey(Pi.get(n.useExisting))]):n.useFactory?(e=n.useFactory,t=function CP(n,e){if(e){const t=e.map(r=>[r]);return e.map(r=>AC(n,r,t))}return IC(n)}(n.useFactory,n.deps)):(e=()=>n.useValue,t=gP);return new mP(e,t)}function _P(n){return new SC(Pi.get(n.provide),[yP(n)],n.multi||!1)}function vP(n){const r=function DP(n,e){for(let t=0;t<n.length;t++){const r=n[t],i=e.get(r.key.id);if(i){if(r.multiProvider!==i.multiProvider)throw fP(i,r);if(r.multiProvider)for(let s=0;s<r.resolvedFactories.length;s++)i.resolvedFactories.push(r.resolvedFactories[s]);else e.set(r.key.id,r)}else{let s;s=r.multiProvider?new SC(r.key,r.resolvedFactories.slice(),r.multiProvider):r,e.set(r.key.id,s)}}return e}(MC(n,[]).map(_P),new Map);return Array.from(r.values())}function MC(n,e){return n.forEach(t=>{if(t instanceof Ep)e.push({provide:t,useClass:t});else if(t&&"object"==typeof t&&void 0!==t.provide)e.push(t);else{if(!Array.isArray(t))throw function dP(n){return Error(`Invalid provider - only instances of Provider and Type are allowed, got: ${n}`)}(t);MC(t,e)}}),e}function IC(n){const e=ac().parameters(n);if(!e)return[];if(e.some(t=>null==t))throw wC(n,e);return e.map(t=>AC(n,t,e))}function AC(n,e,t){let r=null,i=!1;if(!Array.isArray(e))return mg(e instanceof Tp?e.token:e,i,null);let s=null;for(let o=0;o<e.length;++o){const a=e[o];a instanceof Ep?r=a:a instanceof Tp?r=a.token:a instanceof oa?i=!0:a instanceof Rp||a instanceof aa?s=a:a instanceof S&&(r=a)}if(r=k(r),null!=r)return mg(r,i,s);throw wC(n,t)}function mg(n,e,t){return new Od(Pi.get(n),e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const gc={};class mc{static resolve(e){return vP(e)}static resolveAndCreate(e,t){const r=mc.resolve(e);return mc.fromResolvedProviders(r,t)}static fromResolvedProviders(e,t){return new ga(e,t)}}class ga{constructor(e,t){this._constructionCounter=0,this._providers=e,this.parent=t||null;const r=e.length;this.keyIds=[],this.objs=[];for(let i=0;i<r;i++)this.keyIds[i]=e[i].key.id,this.objs[i]=gc}get(e,t=Ri){return this._getByKey(Pi.get(e),null,t)}resolveAndCreateChild(e){const t=mc.resolve(e);return this.createChildFromResolved(t)}createChildFromResolved(e){const t=new ga(e);return t.parent=this,t}resolveAndInstantiate(e){return this.instantiateResolved(mc.resolve([e])[0])}instantiateResolved(e){return this._instantiateProvider(e)}getProviderAtIndex(e){if(e<0||e>=this._providers.length)throw function hP(n){return Error(`Index ${n} is out-of-bounds.`)}(e);return this._providers[e]}_new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw function cP(n,e){return gg(n,e,function(t){return`Cannot instantiate cyclic dependency!${pg(t)}`})}(this,e.key);return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(e){if(e.multiProvider){const t=[];for(let r=0;r<e.resolvedFactories.length;++r)t[r]=this._instantiate(e,e.resolvedFactories[r]);return t}return this._instantiate(e,e.resolvedFactories[0])}_instantiate(e,t){const r=t.factory;let i,s;try{i=t.dependencies.map(o=>this._getByReflectiveDependency(o))}catch(o){throw o.addKey&&o.addKey(this,e.key),o}try{s=r(...i)}catch(o){throw function uP(n,e,t,r){return gg(n,r,function(i){const s=De(i[0].token);return`${e.message}: Error during instantiation of ${s}!${pg(i)}.`},e)}(this,o,o.stack,e.key)}return s}_getByReflectiveDependency(e){return this._getByKey(e.key,e.visibility,e.optional?null:Ri)}_getByKey(e,t,r){return e===ga.INJECTOR_KEY?this:t instanceof Rp?this._getByKeySelf(e,r):this._getByKeyDefault(e,r,t)}_getObjByKeyId(e){for(let t=0;t<this.keyIds.length;t++)if(this.keyIds[t]===e)return this.objs[t]===gc&&(this.objs[t]=this._new(this._providers[t])),this.objs[t];return gc}_throwOrNull(e,t){if(t!==Ri)return t;throw function lP(n,e){return gg(n,e,function(t){return`No provider for ${De(t[0].token)}!${pg(t)}`})}(this,e)}_getByKeySelf(e,t){const r=this._getObjByKeyId(e.id);return r!==gc?r:this._throwOrNull(e,t)}_getByKeyDefault(e,t,r){let i;for(i=r instanceof aa?this.parent:this;i instanceof ga;){const s=i,o=s._getObjByKeyId(e.id);if(o!==gc)return o;i=s.parent}return null!==i?i.get(e.token,t):this._throwOrNull(e,t)}get displayName(){return`ReflectiveInjector(providers: [${function bP(n,e){const t=[];for(let r=0;r<n._providers.length;++r)t[r]=e(n.getProviderAtIndex(r));return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this,t=>' "'+t.key.displayName+'" ').join(", ")}])`}toString(){return this.displayName}}function y(n,e=q.Default){const t=b();if(null===t)return D(n,e);return Zv(He(),t,k(n),e)}function Pd(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kd(n,e){return n<<17|e<<2}function wn(n){return n>>17&32767}function RC(n){return 2==(2&n)}function yg(n){return 2|n}function Mr(n){return(131068&n)>>2}function _g(n,e){return-131069&n|e<<2}function xC(n){return 1==(1&n)}function vg(n){return 1|n}ga.INJECTOR_KEY=Pi.get(Ne);function BC(n,e){const t=n.contentQueries;if(null!==t)for(let r=0;r<t.length;r+=2){const i=t[r],s=t[r+1];if(-1!==s){const o=n.data[s];pp(i),o.contentQueries(2,e[s],s)}}}function Ld(n,e,t,r,i,s,o,a,l,c,u){const d=e.blueprint.slice();return d[0]=i,d[2]=76|r,(null!==u||n&&1024&n[2])&&(d[2]|=1024),Iv(d),d[3]=d[15]=n,d[8]=t,d[10]=o||n&&n[10],d[U]=a||n&&n[U],d[12]=l||n&&n[12]||null,d[9]=c||n&&n[9]||null,d[6]=s,d[20]=function ax(){return ox++}(),d[21]=u,d[16]=2==e.type?n[16]:d,d}function ma(n,e,t,r,i){let s=n.data[e];if(null===s)s=Ig(n,e,t,r,i),function rR(){return F.lFrame.inI18n}()&&(s.flags|=64);else if(64&s.type){s.type=t,s.value=r,s.attrs=i;const o=Yl();s.injectorIndex=null===o?-1:o.injectorIndex}return Vn(s,!0),s}function Ig(n,e,t,r,i){const s=Rv(),o=up(),a=o?s:s&&s.parent,l=n.data[e]=function VP(n,e,t,r,i,s){let o=e?e.injectorIndex:-1;return{type:t,index:r,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:i,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,a,t,e,r,i);return null===n.firstChild&&(n.firstChild=l),null!==s&&(o?null==s.child&&null!==l.parent&&(s.child=l):null===s.next&&(s.next=l)),l}function ya(n,e,t,r){if(0===t)return-1;const i=e.length;for(let s=0;s<t;s++)e.push(r),n.blueprint.push(r),n.data.push(null);return i}function Ag(n,e,t){gp(e);try{const r=n.viewQuery;null!==r&&Fg(1,r,t);const i=n.template;null!==i&&jC(n,e,i,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),n.staticContentQueries&&BC(n,e),n.staticViewQueries&&Fg(2,n.viewQuery,t);const s=n.components;null!==s&&function NP(n,e){for(let t=0;t<e.length;t++)ek(n,e[t])}(e,s)}catch(r){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),r}finally{e[2]&=-5,mp()}}function Vd(n,e,t,r){const i=e[2];if(128==(128&i))return;gp(e);try{Iv(e),Ov(n.bindingStartIndex),null!==t&&jC(n,e,t,2,r);const o=3==(3&i);if(o){const c=n.preOrderCheckHooks;null!==c&&cd(e,c,null)}else{const c=n.preOrderHooks;null!==c&&ud(e,c,0,null),yp(e,0)}if(function XP(n){for(let e=Bp(n);null!==e;e=jp(e)){if(!e[2])continue;const t=e[9];for(let r=0;r<t.length;r++){const i=t[r],s=i[3];0==(512&i[2])&&cp(s,1),i[2]|=512}}}(e),function YP(n){for(let e=Bp(n);null!==e;e=jp(e))for(let t=10;t<e.length;t++){const r=e[t],i=r[1];ad(r)&&Vd(i,r,i.template,r[8])}}(e),null!==n.contentQueries&&BC(n,e),o){const c=n.contentCheckHooks;null!==c&&cd(e,c)}else{const c=n.contentHooks;null!==c&&ud(e,c,1),yp(e,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function PP(n,e){const t=n.hostBindingOpCodes;if(null!==t)try{for(let r=0;r<t.length;r++){const i=t[r];if(i<0)Ii(~i);else{const s=i,o=t[++r],a=t[++r];iR(o,s),a(2,e[s])}}}finally{Ii(-1)}}(n,e);const a=n.components;null!==a&&function kP(n,e){for(let t=0;t<e.length;t++)JP(n,e[t])}(e,a);const l=n.viewQuery;if(null!==l&&Fg(2,l,r),o){const c=n.viewCheckHooks;null!==c&&cd(e,c)}else{const c=n.viewHooks;null!==c&&ud(e,c,2),yp(e,2)}!0===n.firstUpdatePass&&(n.firstUpdatePass=!1),e[2]&=-41,512&e[2]&&(e[2]&=-513,cp(e[3],-1))}finally{mp()}}function jC(n,e,t,r,i){const s=ft(),o=2&r;try{Ii(-1),o&&e.length>22&&yC(n,e,22,!1),en(o?2:0,i),t(r,i)}finally{Ii(s),en(o?3:1,i)}}function UC(n,e,t){if(rp(e)){const r=e.directiveStart,i=e.directiveEnd;for(let s=r;s<i;s++){const o=n.data[s];o.contentQueries&&o.contentQueries(1,t[s],s)}}}function Tg(n,e,t){!Tv()||(function HP(n,e,t,r){const i=t.directiveStart,s=t.directiveEnd;n.firstCreatePass||ec(t,e),st(r,e);const o=t.initialInputs;for(let a=i;a<s;a++){const l=n.data[a],c=Dn(l);c&&KP(e,t,l);const u=tc(e,n,a,t);if(st(u,e),null!==o&&ZP(e,a-i,u,l,t,o),c){Ot(t.index,e)[8]=u}}}(n,e,t,xt(t,e)),128==(128&t.flags)&&function zP(n,e,t){const r=t.directiveStart,i=t.directiveEnd,s=t.index,o=function sR(){return F.lFrame.currentDirectiveIndex}();try{Ii(s);for(let a=r;a<i;a++){const l=n.data[a],c=e[a];hp(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&KC(l,c)}}finally{Ii(-1),hp(o)}}(n,e,t))}function Rg(n,e,t=xt){const r=e.localNames;if(null!==r){let i=e.index+1;for(let s=0;s<r.length;s+=2){const o=r[s+1],a=-1===o?t(e,n):n[o];n[i++]=a}}}function $C(n){const e=n.tView;return null===e||e.incompleteFirstPass?n.tView=xg(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts):e}function xg(n,e,t,r,i,s,o,a,l,c){const u=22+r,d=u+i,h=function FP(n,e){const t=[];for(let r=0;r<e;r++)t.push(r<n?null:V);return t}(u,d),f="function"==typeof c?c():c;return h[1]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof s?s():s,pipeRegistry:"function"==typeof o?o():o,firstChild:null,schemas:l,consts:f,incompleteFirstPass:!1}}function HC(n,e,t,r){const i=JC(e);null===t?i.push(r):(i.push(t),n.firstCreatePass&&eb(n).push(r,i.length-1))}function zC(n,e,t){for(let r in n)if(n.hasOwnProperty(r)){t=null===t?{}:t;const i=n[r];t.hasOwnProperty(r)?t[r].push(e,i):t[r]=[e,i]}return t}function GC(n,e){const t=e.directiveStart,r=e.directiveEnd,i=n.data,s=e.attrs,o=[];let a=null,l=null;for(let c=t;c<r;c++){const u=i[c],d=u.inputs,h=null===s||pC(e)?null:QP(d,s);o.push(h),a=zC(d,c,a),l=zC(u.outputs,c,l)}null!==a&&(a.hasOwnProperty("class")&&(e.flags|=16),a.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=o,e.inputs=a,e.outputs=l}function Lt(n,e,t,r,i,s,o,a){const l=xt(e,t);let u,c=e.inputs;!a&&null!=c&&(u=c[r])?(Lg(n,t,u,r,i),id(e)&&qC(t,e.index)):3&e.type?(r=function BP(n){return"class"===n?"className":"for"===n?"htmlFor":"formaction"===n?"formAction":"innerHtml"===n?"innerHTML":"readonly"===n?"readOnly":"tabindex"===n?"tabIndex":n}(r),i=null!=o?o(i,e.value||"",r):i,s.setProperty(l,r,i)):e.type}function qC(n,e){const t=Ot(e,n);16&t[2]||(t[2]|=32)}function Og(n,e,t,r){let i=!1;if(Tv()){const s=function GP(n,e,t){const r=n.directiveRegistry;let i=null;if(r)for(let s=0;s<r.length;s++){const o=r[s];gC(t,o.selectors,!1)&&(i||(i=[]),gd(ec(t,e),n,o.type),Dn(o)?(ZC(n,t),i.unshift(o)):i.push(o))}return i}(n,e,t),o=null===r?null:{"":-1};if(null!==s){i=!0,QC(t,n.data.length,s.length);for(let u=0;u<s.length;u++){const d=s[u];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,c=ya(n,e,s.length,null);for(let u=0;u<s.length;u++){const d=s[u];t.mergedAttrs=hd(t.mergedAttrs,d.hostAttrs),YC(n,t,e,c,d),WP(c,d,o),null!==d.contentQueries&&(t.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(t.flags|=128);const h=d.type.prototype;!a&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t.index),a=!0),!l&&(h.ngOnChanges||h.ngDoCheck)&&((n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t.index),l=!0),c++}GC(n,t)}o&&function qP(n,e,t){if(e){const r=n.localNames=[];for(let i=0;i<e.length;i+=2){const s=t[e[i+1]];if(null==s)throw new v(-301,!1);r.push(e[i],s)}}}(t,r,o)}return t.mergedAttrs=hd(t.mergedAttrs,t.attrs),i}function WC(n,e,t,r,i,s){const o=s.hostBindings;if(o){let a=n.hostBindingOpCodes;null===a&&(a=n.hostBindingOpCodes=[]);const l=~e.index;(function $P(n){let e=n.length;for(;e>0;){const t=n[--e];if("number"==typeof t&&t<0)return t}return 0})(a)!=l&&a.push(l),a.push(r,i,o)}}function KC(n,e){null!==n.hostBindings&&n.hostBindings(1,e)}function ZC(n,e){e.flags|=2,(n.components||(n.components=[])).push(e.index)}function WP(n,e,t){if(t){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)t[e.exportAs[r]]=n;Dn(e)&&(t[""]=n)}}function QC(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function YC(n,e,t,r,i){n.data[r]=i;const s=i.factory||(i.factory=As(i.type)),o=new Xl(s,Dn(i),y);n.blueprint[r]=o,t[r]=o,WC(n,e,0,r,ya(n,t,i.hostVars,V),i)}function KP(n,e,t){const r=xt(e,n),i=$C(t),s=n[10],o=Bd(n,Ld(n,i,null,t.onPush?32:16,r,e,s,s.createRenderer(r,t),null,null,null));n[e.index]=o}function Un(n,e,t,r,i,s){const o=xt(n,e);Pg(e[U],o,s,n.value,t,r,i)}function Pg(n,e,t,r,i,s,o){if(null==s)n.removeAttribute(e,i,t);else{const a=null==o?L(s):o(s,r||"",i);n.setAttribute(e,i,a,t)}}function ZP(n,e,t,r,i,s){const o=s[e];if(null!==o){const a=r.setInput;for(let l=0;l<o.length;){const c=o[l++],u=o[l++],d=o[l++];null!==a?r.setInput(t,d,c,u):t[u]=d}}}function QP(n,e){let t=null,r=0;for(;r<e.length;){const i=e[r];if(0!==i)if(5!==i){if("number"==typeof i)break;n.hasOwnProperty(i)&&(null===t&&(t=[]),t.push(i,n[i],e[r+1])),r+=2}else r+=2;else r+=4}return t}function XC(n,e,t,r){return new Array(n,!0,!1,e,null,0,r,t,null,null)}function JP(n,e){const t=Ot(e,n);if(ad(t)){const r=t[1];48&t[2]?Vd(r,t,r.template,t[8]):t[5]>0&&kg(t)}}function kg(n){for(let r=Bp(n);null!==r;r=jp(r))for(let i=10;i<r.length;i++){const s=r[i];if(ad(s))if(512&s[2]){const o=s[1];Vd(o,s,o.template,s[8])}else s[5]>0&&kg(s)}const t=n[1].components;if(null!==t)for(let r=0;r<t.length;r++){const i=Ot(t[r],n);ad(i)&&i[5]>0&&kg(i)}}function ek(n,e){const t=Ot(e,n),r=t[1];(function tk(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])})(r,t),Ag(r,t,t[8])}function Bd(n,e){return n[13]?n[14][4]=e:n[13]=e,n[14]=e,e}function Ng(n){for(;n;){n[2]|=32;const e=uc(n);if(L0(n)&&!e)return n;n=e}return null}function jd(n,e,t,r=!0){const i=e[10];i.begin&&i.begin();try{Vd(n,e,n.template,t)}catch(o){throw r&&nb(e,o),o}finally{i.end&&i.end()}}function Fg(n,e,t){pp(0),e(n,t)}function JC(n){return n[7]||(n[7]=[])}function eb(n){return n.cleanup||(n.cleanup=[])}function tb(n,e,t){return(null===n||Dn(n))&&(t=function W0(n){for(;Array.isArray(n);){if("object"==typeof n[1])return n;n=n[0]}return null}(t[e.index])),t[U]}function nb(n,e){const t=n[9],r=t?t.get(fa,null):null;r&&r.handleError(e)}function Lg(n,e,t,r,i){for(let s=0;s<t.length;){const o=t[s++],a=t[s++],l=e[o],c=n.data[o];null!==c.setInput?c.setInput(l,i,r,a):l[a]=i}}function Ir(n,e,t){const r=od(e,n);AD(n[U],r,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ud(n,e,t){let r=t?n.styles:null,i=t?n.classes:null,s=0;if(null!==e)for(let o=0;o<e.length;o++){const a=e[o];if("number"==typeof a)s=a;else if(1==s)i=Zf(i,a);else if(2==s){r=Zf(r,a+": "+e[++o]+";")}}t?n.styles=r:n.stylesWithoutHost=r,t?n.classes=i:n.classesWithoutHost=i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $d(n,e,t,r,i=!1){for(;null!==t;){const s=e[t.index];if(null!==s&&r.push(Be(s)),vn(s))for(let a=10;a<s.length;a++){const l=s[a],c=l[1].firstChild;null!==c&&$d(l[1],l,c,r)}const o=t.type;if(8&o)$d(n,e,t.child,r);else if(32&o){const a=Vp(t,e);let l;for(;l=a();)r.push(l)}else if(16&o){const a=BD(e,t);if(Array.isArray(a))r.push(...a);else{const l=uc(e[16]);$d(l[1],l,a,r,!0)}}t=i?t.projectionNext:t.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class yc{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const e=this._lView,t=e[1];return $d(t,e,t.firstChild,[])}get context(){return this._lView[8]}set context(e){this._lView[8]=e}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[3];if(vn(e)){const t=e[8],r=t?t.indexOf(this):-1;r>-1&&(Hp(e,r),_d(t,r))}this._attachedToViewContainer=!1}RD(this._lView[1],this._lView)}onDestroy(e){HC(this._lView[1],this._lView,null,e)}markForCheck(){Ng(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){jd(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new v(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function Ex(n,e){dc(n,e,e[U],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new v(902,!1);this._appRef=e}}class nk extends yc{constructor(e){super(e),this._view=e}detectChanges(){const e=this._view;jd(e[1],e,e[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Vg extends da{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const t=me(e);return new _c(t,this.ngModule)}}function rb(n){const e=[];for(let t in n)if(n.hasOwnProperty(t)){const r=n[t];e.push({propName:r,templateName:t})}return e}class ik{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,r){const i=this.injector.get(e,dg,r);return i!==dg||t===dg?i:this.parentInjector.get(e,t,r)}}class _c extends cC{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=function JO(n){return n.map(XO).join(",")}(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return rb(this.componentDef.inputs)}get outputs(){return rb(this.componentDef.outputs)}create(e,t,r,i){let s=(i=i||this.ngModule)instanceof xi?i:i?.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const o=s?new ik(e,s):e,a=o.get(pc,null);if(null===a)throw new v(407,!1);const l=o.get(ug,null),c=a.createRenderer(null,this.componentDef),u=this.componentDef.selectors[0][0]||"div",d=r?function LP(n,e,t){const r=t===Ln.ShadowDom;return n.selectRootElement(e,r)}(c,r,this.componentDef.encapsulation):$p(c,u,function rk(n){const e=n.toLowerCase();return"svg"===e?"svg":"math"===e?ap:null}(u)),h=this.componentDef.onPush?288:272,f=xg(0,null,null,1,0,null,null,null,null,null),p=Ld(null,f,null,h,null,null,a,c,l,o,null);let g,m;gp(p);try{const C=function ak(n,e,t,r,i,s){const o=t[1],a=22;t[a]=n;const l=ma(o,a,2,"#host",null),c=l.mergedAttrs=e.hostAttrs;null!==c&&(Ud(l,c,!0),null!==n&&(dd(i,n,c),null!==l.classes&&Zp(i,n,l.classes),null!==l.styles&&UD(i,n,l.styles)));const u=r.createRenderer(n,e),d=Ld(t,$C(e),null,e.onPush?32:16,t[a],l,r,u,s||null,null,null);return o.firstCreatePass&&(gd(ec(l,t),o,e.type),ZC(o,l),QC(l,t.length,1)),Bd(t,d),t[a]=d}(d,this.componentDef,p,a,c);if(d)if(r)dd(c,d,["ng-version",PO.full]);else{const{attrs:w,classes:_}=function eP(n){const e=[],t=[];let r=1,i=2;for(;r<n.length;){let s=n[r];if("string"==typeof s)2===i?""!==s&&e.push(s,n[++r]):8===i&&t.push(s);else{if(!bn(i))break;i=s}r++}return{attrs:e,classes:t}}(this.componentDef.selectors[0]);w&&dd(c,d,w),_&&_.length>0&&Zp(c,d,_.join(" "))}if(m=lp(f,22),void 0!==t){const w=m.projection=[];for(let _=0;_<this.ngContentSelectors.length;_++){const M=t[_];w.push(null!=M?Array.from(M):null)}}g=function lk(n,e,t,r){const i=t[1],s=function UP(n,e,t){const r=He();n.firstCreatePass&&(t.providersResolver&&t.providersResolver(t),YC(n,r,e,ya(n,e,1,null),t),GC(n,r));const i=tc(e,n,r.directiveStart,r);st(i,e);const s=xt(r,e);return s&&st(s,e),i}(i,t,e);if(n[8]=t[8]=s,null!==r)for(const a of r)a(s,e);if(e.contentQueries){const a=He();e.contentQueries(1,s,a.directiveStart)}const o=He();if(i.firstCreatePass&&(null!==e.hostBindings||null!==e.hostAttrs)){Ii(o.index);WC(t[1],o,0,o.directiveStart,o.directiveEnd,e),KC(e,s)}return s}(C,this.componentDef,p,[ck]),Ag(f,p,null)}finally{mp()}return new ok(this.componentType,g,ha(m,p),p,m)}}new Vg;class ok extends class IO{}{constructor(e,t,r,i,s){super(),this.location=r,this._rootLView=i,this._tNode=s,this.instance=t,this.hostView=this.changeDetectorRef=new nk(i),this.componentType=e}setInput(e,t){const r=this._tNode.inputs;let i;if(null!==r&&(i=r[e])){const s=this._rootLView;Lg(s[1],s,i,e,t),qC(s,this._tNode.index)}}get injector(){return new Xo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}function ck(){const n=He();ld(b()[1],n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ib(n){return Object.getPrototypeOf(n.prototype).constructor}function ie(n){let e=ib(n.type),t=!0;const r=[n];for(;e;){let i;if(Dn(n))i=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new v(903,!1);i=e.\u0275dir}if(i){if(t){r.push(i);const o=n;o.inputs=Bg(n.inputs),o.declaredInputs=Bg(n.declaredInputs),o.outputs=Bg(n.outputs);const a=i.hostBindings;a&&fk(n,a);const l=i.viewQuery,c=i.contentQueries;if(l&&dk(n,l),c&&hk(n,c),Kf(n.inputs,i.inputs),Kf(n.declaredInputs,i.declaredInputs),Kf(n.outputs,i.outputs),Dn(i)&&i.data.animation){const u=n.data;u.animation=(u.animation||[]).concat(i.data.animation)}}const s=i.features;if(s)for(let o=0;o<s.length;o++){const a=s[o];a&&a.ngInherit&&a(n),a===ie&&(t=!1)}}e=Object.getPrototypeOf(e)}!function uk(n){let e=0,t=null;for(let r=n.length-1;r>=0;r--){const i=n[r];i.hostVars=e+=i.hostVars,i.hostAttrs=hd(i.hostAttrs,t=hd(t,i.hostAttrs))}}(r)}function Bg(n){return n===Uo?{}:n===fe?[]:n}function dk(n,e){const t=n.viewQuery;n.viewQuery=t?(r,i)=>{e(r,i),t(r,i)}:e}function hk(n,e){const t=n.contentQueries;n.contentQueries=t?(r,i,s)=>{e(r,i,s),t(r,i,s)}:e}function fk(n,e){const t=n.hostBindings;n.hostBindings=t?(r,i)=>{e(r,i),t(r,i)}:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pk=["providersResolver"],gk=["template","decls","consts","vars","onPush","ngContentSelectors","styles","encapsulation","schemas"];function mk(n){let t,e=ib(n.type);t=Dn(n)?e.\u0275cmp:e.\u0275dir;const r=n;for(const i of pk)r[i]=t[i];if(Dn(t))for(const i of gk)r[i]=t[i]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Hd=null;function ks(){if(!Hd){const n=be.Symbol;if(n&&n.iterator)Hd=n.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const r=e[t];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Hd=r)}}}return Hd}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vc(n){return!!jg(n)&&(Array.isArray(n)||!(n instanceof Map)&&ks()in n)}function jg(n){return null!==n&&("function"==typeof n||"object"==typeof n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function $n(n,e,t){return n[e]=t}function Dc(n,e){return n[e]}function ot(n,e,t){const r=n[e];return!Object.is(r,t)&&(n[e]=t,!0)}function Ns(n,e,t,r){const i=ot(n,e,t);return ot(n,e+1,r)||i}function zd(n,e,t,r,i){const s=Ns(n,e,t,r);return ot(n,e+2,i)||s}function tn(n,e,t,r,i,s){const o=Ns(n,e,t,r);return Ns(n,e+2,i,s)||o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ye(n,e,t,r){const i=b();if(ot(i,Zo(),e)){ae();Un(Ae(),i,n,e,t,r)}return Ye}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _a(n,e){let t=!1,r=Dr();for(let s=1;s<e.length;s+=2)t=ot(n,r++,e[s])||t;if(Ov(r),!t)return V;let i=e[0];for(let s=1;s<e.length;s+=2)i+=L(e[s])+e[s+1];return i}function va(n,e,t,r){return ot(n,Zo(),t)?e+L(t)+r:V}function Da(n,e,t,r,i,s){const a=Ns(n,Dr(),t,i);return Cr(2),a?e+L(t)+r+L(i)+s:V}function Ca(n,e,t,r,i,s,o,a){const c=zd(n,Dr(),t,i,o);return Cr(3),c?e+L(t)+r+L(i)+s+L(o)+a:V}function ba(n,e,t,r,i,s,o,a,l,c){const d=tn(n,Dr(),t,i,o,l);return Cr(4),d?e+L(t)+r+L(i)+s+L(o)+a+L(l)+c:V}function wa(n,e,t,r,i,s,o,a,l,c,u,d){const h=Dr();let f=tn(n,h,t,i,o,l);return f=ot(n,h+4,u)||f,Cr(5),f?e+L(t)+r+L(i)+s+L(o)+a+L(l)+c+L(u)+d:V}function Ea(n,e,t,r,i,s,o,a,l,c,u,d,h,f){const p=Dr();let g=tn(n,p,t,i,o,l);return g=Ns(n,p+4,u,h)||g,Cr(6),g?e+L(t)+r+L(i)+s+L(o)+a+L(l)+c+L(u)+d+L(h)+f:V}function Sa(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g){const m=Dr();let C=tn(n,m,t,i,o,l);return C=zd(n,m+4,u,h,p)||C,Cr(7),C?e+L(t)+r+L(i)+s+L(o)+a+L(l)+c+L(u)+d+L(h)+f+L(p)+g:V}function Ma(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m,C){const w=Dr();let _=tn(n,w,t,i,o,l);return _=tn(n,w+4,u,h,p,m)||_,Cr(8),_?e+L(t)+r+L(i)+s+L(o)+a+L(l)+c+L(u)+d+L(h)+f+L(p)+g+L(m)+C:V}function sb(n,e,t,r,i,s){const o=b(),a=va(o,e,t,r);if(a!==V){Un(Ae(),o,n,a,i,s)}return sb}function ob(n,e,t,r,i,s,o,a){const l=b(),c=Da(l,e,t,r,i,s);if(c!==V){Un(Ae(),l,n,c,o,a)}return ob}function ab(n,e,t,r,i,s,o,a,l,c){const u=b(),d=Ca(u,e,t,r,i,s,o,a);if(d!==V){Un(Ae(),u,n,d,l,c)}return ab}function lb(n,e,t,r,i,s,o,a,l,c,u,d){const h=b(),f=ba(h,e,t,r,i,s,o,a,l,c);if(f!==V){Un(Ae(),h,n,f,u,d)}return lb}function cb(n,e,t,r,i,s,o,a,l,c,u,d,h,f){const p=b(),g=wa(p,e,t,r,i,s,o,a,l,c,u,d);if(g!==V){Un(Ae(),p,n,g,h,f)}return cb}function ub(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g){const m=b(),C=Ea(m,e,t,r,i,s,o,a,l,c,u,d,h,f);if(C!==V){Un(Ae(),m,n,C,p,g)}return ub}function db(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m,C){const w=b(),_=Sa(w,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g);if(_!==V){Un(Ae(),w,n,_,m,C)}return db}function hb(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m,C,w,_){const M=b(),H=Ma(M,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m,C);if(H!==V){Un(Ae(),M,n,H,w,_)}return hb}function fb(n,e,t,r){const i=b(),s=_a(i,e);if(s!==V){Un(Ae(),i,n,s,t,r)}return fb}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vt(n,e,t,r,i,s,o,a){const l=b(),c=ae(),u=n+22,d=c.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ck(n,e,t,r,i,s,o,a,l){const c=e.consts,u=ma(e,n,4,o||null,Mi(c,a));Og(e,t,u,Mi(c,l)),ld(e,u);const d=u.tViews=xg(2,u,r,i,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,c);return null!==e.queries&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}(u,c,l,e,t,r,i,s,o):c.data[u];Vn(d,!1);const h=l[U].createComment("");Ed(c,l,h,d),st(h,l),Bd(l,l[u]=XC(h,l,h,d)),sd(d)&&Tg(c,l,d),null!=o&&Rg(l,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ug(n){return qo(function nR(){return F.lFrame.contextLView}(),22+n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ce(n,e,t){const r=b();if(ot(r,Zo(),e)){Lt(ae(),Ae(),r,n,e,r[U],t,!1)}return ce}function $g(n,e,t,r,i){const o=i?"class":"style";Lg(n,t,e.inputs[o],o,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $(n,e,t,r){const i=b(),s=ae(),o=22+n,a=i[U],l=i[o]=$p(a,e,function fR(){return F.lFrame.currentNamespace}()),c=s.firstCreatePass?function wk(n,e,t,r,i,s,o){const a=e.consts,c=ma(e,n,2,i,Mi(a,s));return Og(e,t,c,Mi(a,o)),null!==c.attrs&&Ud(c,c.attrs,!1),null!==c.mergedAttrs&&Ud(c,c.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,c),c}(o,s,i,0,e,t,r):s.data[o];Vn(c,!0);const u=c.mergedAttrs;null!==u&&dd(a,l,u);const d=c.classes;null!==d&&Zp(a,l,d);const h=c.styles;return null!==h&&UD(a,l,h),64!=(64&c.flags)&&Ed(s,i,l,c),0===function Y0(){return F.lFrame.elementDepthCount}()&&st(l,i),function X0(){F.lFrame.elementDepthCount++}(),sd(c)&&(Tg(s,i,c),UC(s,c,i)),null!==r&&Rg(i,c),$}function K(){let n=He();up()?dp():(n=n.parent,Vn(n,!1));const e=n;!function J0(){F.lFrame.elementDepthCount--}();const t=ae();return t.firstCreatePass&&(ld(t,n),rp(n)&&t.queries.elementEnd(n)),null!=e.classesWithoutHost&&function _R(n){return 0!=(16&n.flags)}(e)&&$g(t,e,b(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function vR(n){return 0!=(32&n.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)&&$g(t,e,b(),e.stylesWithoutHost,!1),K}function at(n,e,t,r){return $(n,e,t,r),K(),at
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function Hg(n,e,t){const r=b(),i=ae(),s=n+22,o=i.firstCreatePass?function Ek(n,e,t,r,i){const s=e.consts,o=Mi(s,r),a=ma(e,n,8,"ng-container",o);return null!==o&&Ud(a,o,!0),Og(e,t,a,Mi(s,i)),null!==e.queries&&e.queries.elementStart(e,a),a}(s,i,r,e,t):i.data[s];Vn(o,!0);const a=r[s]=r[U].createComment("");return Ed(i,r,a,o),st(a,r),sd(o)&&(Tg(i,r,o),UC(i,o,r)),null!=t&&Rg(r,o),Hg}function zg(){let n=He();const e=ae();return up()?dp():(n=n.parent,Vn(n,!1)),e.firstCreatePass&&(ld(e,n),rp(n)&&e.queries.elementEnd(n)),zg}function pb(n,e,t){return Hg(n,e,t),zg(),pb}function gb(){return b()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cc(n){return!!n&&"function"==typeof n.then}function mb(n){return!!n&&"function"==typeof n.subscribe}const Gg=mb;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Oe(n,e,t,r){const i=b(),s=ae(),o=He();return _b(s,i,i[U],o,n,e,!!t,r),Oe}function yb(n,e){const t=He(),r=b(),i=ae();return _b(i,r,tb(fp(i.data),t,r),t,n,e,!1),yb}function _b(n,e,t,r,i,s,o,a){const l=sd(r),u=n.firstCreatePass&&eb(n),d=e[8],h=JC(e);let f=!0;if(3&r.type||a){const m=xt(r,e),C=a?a(m):m,w=h.length,_=a?H=>a(Be(H[r.index])):r.index;let M=null;if(!a&&l&&(M=function Sk(n,e,t,r){const i=n.cleanup;if(null!=i)for(let s=0;s<i.length-1;s+=2){const o=i[s];if(o===t&&i[s+1]===r){const a=e[7],l=i[s+2];return a.length>l?a[l]:null}"string"==typeof o&&(s+=2)}return null}(n,e,i,r.index)),null!==M){(M.__ngLastListenerFn__||M).__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,f=!1}else{s=Db(r,e,d,s,!1);const H=t.listen(C,i,s);h.push(s,H),u&&u.push(i,_,w,w+1)}}else s=Db(r,e,d,s,!1);const p=r.outputs;let g;if(f&&null!==p&&(g=p[i])){const m=g.length;if(m)for(let C=0;C<m;C+=2){const w=g[C],_=g[C+1],se=e[w][_].subscribe(s),Te=h.length;h.push(s,se),u&&u.push(i,r.index,Te,-(Te+1))}}}function vb(n,e,t,r){try{return en(6,e,t),!1!==t(r)}catch(i){return nb(n,i),!1}finally{en(7,e,t)}}function Db(n,e,t,r,i){return function s(o){if(o===Function)return r;Ng(2&n.flags?Ot(n.index,e):e);let l=vb(e,t,r,o),c=s.__ngNextListenerFn__;for(;c;)l=vb(e,t,c,o)&&l,c=c.__ngNextListenerFn__;return i&&!1===l&&(o.preventDefault(),o.returnValue=!1),l}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Bt(n=1){return aR(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Mk(n,e){let t=null;const r=function KO(n){const e=n.attrs;if(null!=e){const t=e.indexOf(5);if(0==(1&t))return e[t+1]}return null}(n);for(let i=0;i<e.length;i++){const s=e[i];if("*"!==s){if(null===r?gC(n,s,!0):YO(r,s))return i}else t=i}return t}function bc(n){const e=b()[16][6];if(!e.projection){const t=n?n.length:1,r=e.projection=ic(t,null),i=r.slice();let s=e.child;for(;null!==s;){const o=n?Mk(s,n):0;null!==o&&(i[o]?i[o].projectionNext=s:r[o]=s,i[o]=s),s=s.next}}}function Ia(n,e=0,t){const r=b(),i=ae(),s=ma(i,22+n,16,null,t||null);null===s.projection&&(s.projection=e),dp(),64!=(64&s.flags)&&function Ox(n,e,t){jD(e[U],0,e,t,xD(n,t,e),ND(t.parent||e[6],t,e))}(i,r,s)}function Cb(n,e,t){return qg(n,"",e,"",t),Cb}function qg(n,e,t,r,i){const s=b(),o=va(s,e,t,r);if(o!==V){Lt(ae(),Ae(),s,n,o,s[U],i,!1)}return qg}function bb(n,e,t,r,i,s,o){const a=b(),l=Da(a,e,t,r,i,s);if(l!==V){Lt(ae(),Ae(),a,n,l,a[U],o,!1)}return bb}function wb(n,e,t,r,i,s,o,a,l){const c=b(),u=Ca(c,e,t,r,i,s,o,a);if(u!==V){Lt(ae(),Ae(),c,n,u,c[U],l,!1)}return wb}function Eb(n,e,t,r,i,s,o,a,l,c,u){const d=b(),h=ba(d,e,t,r,i,s,o,a,l,c);if(h!==V){Lt(ae(),Ae(),d,n,h,d[U],u,!1)}return Eb}function Sb(n,e,t,r,i,s,o,a,l,c,u,d,h){const f=b(),p=wa(f,e,t,r,i,s,o,a,l,c,u,d);if(p!==V){Lt(ae(),Ae(),f,n,p,f[U],h,!1)}return Sb}function Mb(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p){const g=b(),m=Ea(g,e,t,r,i,s,o,a,l,c,u,d,h,f);if(m!==V){Lt(ae(),Ae(),g,n,m,g[U],p,!1)}return Mb}function Ib(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m){const C=b(),w=Sa(C,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g);if(w!==V){Lt(ae(),Ae(),C,n,w,C[U],m,!1)}return Ib}function Ab(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m,C,w){const _=b(),M=Ma(_,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m,C);if(M!==V){Lt(ae(),Ae(),_,n,M,_[U],w,!1)}return Ab}function Tb(n,e,t){const r=b(),i=_a(r,e);if(i!==V){Lt(ae(),Ae(),r,n,i,r[U],t,!1)}return Tb}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ik(n,e,t,r,i,s){let o=s?e.classBindings:e.styleBindings,a=wn(o),l=Mr(o);n[r]=t;let u,c=!1;if(Array.isArray(t)){const d=t;u=d[1],(null===u||ia(d,u)>0)&&(c=!0)}else u=t;if(i)if(0!==l){const h=wn(n[a+1]);n[r+1]=kd(h,a),0!==h&&(n[h+1]=_g(n[h+1],r)),n[a+1]=function wP(n,e){return 131071&n|e<<17}(n[a+1],r)}else n[r+1]=kd(a,0),0!==a&&(n[a+1]=_g(n[a+1],r)),a=r;else n[r+1]=kd(l,0),0===a?a=r:n[l+1]=_g(n[l+1],r),l=r;c&&(n[r+1]=yg(n[r+1])),Rb(n,u,r,!0,s),Rb(n,u,r,!1,s),function Ak(n,e,t,r,i){const s=i?n.residualClasses:n.residualStyles;null!=s&&"string"==typeof e&&ia(s,e)>=0&&(t[r+1]=vg(t[r+1]))}(e,u,n,r,s),o=kd(a,l),s?e.classBindings=o:e.styleBindings=o}function Rb(n,e,t,r,i){const s=n[t+1],o=null===e;let a=r?wn(s):Mr(s),l=!1;for(;0!==a&&(!1===l||o);){const c=n[a],u=n[a+1];Tk(c,e)&&(l=!0,n[a+1]=r?vg(u):yg(u)),a=r?wn(u):Mr(u)}l&&(n[t+1]=r?yg(s):vg(s))}function Tk(n,e){return null===n||null==e||(Array.isArray(n)?n[1]:n)===e||!(!Array.isArray(n)||"string"!=typeof e)&&ia(n,e)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qe={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function xb(n){return n.substring(qe.key,qe.keyEnd)}function Rk(n){return n.substring(qe.value,qe.valueEnd)}function Ob(n,e){const t=qe.textEnd;return t===e?-1:(e=qe.keyEnd=function Pk(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}(n,qe.key=e,t),Aa(n,e,t))}function Pb(n,e){const t=qe.textEnd;let r=qe.key=Aa(n,e,t);return t===r?-1:(r=qe.keyEnd=function kk(n,e,t){let r;for(;e<t&&(45===(r=n.charCodeAt(e))||95===r||(-33&r)>=65&&(-33&r)<=90||r>=48&&r<=57);)e++;return e}(n,r,t),r=Nb(n,r,t,58),r=qe.value=Aa(n,r,t),r=qe.valueEnd=function Nk(n,e,t){let r=-1,i=-1,s=-1,o=e,a=o;for(;o<t;){const l=n.charCodeAt(o++);if(59===l)return a;34===l||39===l?a=o=Fb(n,l,o,t):e===o-4&&85===s&&82===i&&76===r&&40===l?a=o=Fb(n,41,o,t):l>32&&(a=o),s=i,i=r,r=-33&l}return a}(n,r,t),Nb(n,r,t,59))}function kb(n){qe.key=0,qe.keyEnd=0,qe.value=0,qe.valueEnd=0,qe.textEnd=n.length}function Aa(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function Nb(n,e,t,r){return(e=Aa(n,e,t))<t&&e++,e}function Fb(n,e,t,r){let i=-1,s=t;for(;s<r;){const o=n.charCodeAt(s++);if(o==e&&92!==i)return s;i=92==o&&92===i?0:o}throw new Error}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Gd(n,e,t){return En(n,e,t,!1),Gd}function jt(n,e){return En(n,e,null,!0),jt}function Hn(n){Sn(Bb,Fk,n,!1)}function Fk(n,e){for(let t=function Ok(n){return kb(n),Pb(n,Aa(n,0,qe.textEnd))}(e);t>=0;t=Pb(e,t))Bb(n,xb(e),Rk(e))}function Lk(n){Sn(kt,zn,n,!0)}function zn(n,e){for(let t=function xk(n){return kb(n),Ob(n,Aa(n,0,qe.textEnd))}(e);t>=0;t=Ob(e,t))kt(n,xb(e),!0)}function En(n,e,t,r){const i=b(),s=ae(),o=Cr(2);if(s.firstUpdatePass&&Vb(s,n,o,r),e!==V&&ot(i,o,e)){jb(s,s.data[ft()],i,i[U],n,i[o+1]=function zk(n,e){return null==n||("string"==typeof e?n+=e:"object"==typeof n&&(n=De(Nt(n)))),n}(e,t),r,o)}}function Sn(n,e,t,r){const i=ae(),s=Cr(2);i.firstUpdatePass&&Vb(i,null,s,r);const o=b();if(t!==V&&ot(o,s,t)){const a=i.data[ft()];if($b(a,r)&&!Lb(i,s)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;null!==l&&(t=Zf(l,t||"")),$g(i,a,o,t,r)}else!function Hk(n,e,t,r,i,s,o,a){i===V&&(i=fe);let l=0,c=0,u=0<i.length?i[0]:null,d=0<s.length?s[0]:null;for(;null!==u||null!==d;){const h=l<i.length?i[l+1]:void 0,f=c<s.length?s[c+1]:void 0;let g,p=null;u===d?(l+=2,c+=2,h!==f&&(p=d,g=f)):null===d||null!==u&&u<d?(l+=2,p=u):(c+=2,p=d,g=f),null!==p&&jb(n,e,t,r,p,g,o,a),u=l<i.length?i[l]:null,d=c<s.length?s[c]:null}}(i,a,o,o[U],o[s+1],o[s+1]=function $k(n,e,t){if(null==t||""===t)return fe;const r=[],i=Nt(t);if(Array.isArray(i))for(let s=0;s<i.length;s++)n(r,i[s],!0);else if("object"==typeof i)for(const s in i)i.hasOwnProperty(s)&&n(r,s,i[s]);else"string"==typeof i&&e(r,i);return r}(n,e,t),r,s)}}function Lb(n,e){return e>=n.expandoStartIndex}function Vb(n,e,t,r){const i=n.data;if(null===i[t+1]){const s=i[ft()],o=Lb(n,t);$b(s,r)&&null===e&&!o&&(e=!1),e=function Vk(n,e,t,r){const i=fp(n);let s=r?e.residualClasses:e.residualStyles;if(null===i)0===(r?e.classBindings:e.styleBindings)&&(t=wc(t=Wg(null,n,e,t,r),e.attrs,r),s=null);else{const o=e.directiveStylingLast;if(-1===o||n[o]!==i)if(t=Wg(i,n,e,t,r),null===s){let l=function Bk(n,e,t){const r=t?e.classBindings:e.styleBindings;if(0!==Mr(r))return n[wn(r)]}(n,e,r);void 0!==l&&Array.isArray(l)&&(l=Wg(null,n,e,l[1],r),l=wc(l,e.attrs,r),function jk(n,e,t,r){const i=t?e.classBindings:e.styleBindings;n[wn(i)]=r}(n,e,r,l))}else s=function Uk(n,e,t){let r;const i=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<i;s++){r=wc(r,n[s].hostAttrs,t)}return wc(r,e.attrs,t)}(n,e,r)}return void 0!==s&&(r?e.residualClasses=s:e.residualStyles=s),t}(i,s,e,r),Ik(i,s,e,t,o,r)}}function Wg(n,e,t,r,i){let s=null;const o=t.directiveEnd;let a=t.directiveStylingLast;for(-1===a?a=t.directiveStart:a++;a<o&&(s=e[a],r=wc(r,s.hostAttrs,i),s!==n);)a++;return null!==n&&(t.directiveStylingLast=a),r}function wc(n,e,t){const r=t?1:2;let i=-1;if(null!==e)for(let s=0;s<e.length;s++){const o=e[s];"number"==typeof o?i=o:i===r&&(Array.isArray(n)||(n=void 0===n?[]:["",n]),kt(n,o,!!t||e[++s]))}return void 0===n?null:n}function Bb(n,e,t){kt(n,e,Nt(t))}function jb(n,e,t,r,i,s,o,a){if(!(3&e.type))return;const l=n.data,c=l[a+1];if(!qd(xC(c)?Ub(l,e,t,i,Mr(c),o):void 0)){qd(s)||RC(c)&&(s=Ub(l,null,t,i,a,o));!function kx(n,e,t,r,i){if(e)i?n.addClass(t,r):n.removeClass(t,r);else{let s=-1===r.indexOf("-")?void 0:wr.DashCase;null==i?n.removeStyle(t,r,s):("string"==typeof i&&i.endsWith("!important")&&(i=i.slice(0,-10),s|=wr.Important),n.setStyle(t,r,i,s))}}(r,o,od(ft(),t),i,s)}}function Ub(n,e,t,r,i,s){const o=null===e;let a;for(;i>0;){const l=n[i],c=Array.isArray(l),u=c?l[1]:l,d=null===u;let h=t[i+1];h===V&&(h=d?fe:void 0);let f=d?Sp(h,r):u===r?h:void 0;if(c&&!qd(f)&&(f=Sp(l,r)),qd(f)&&(a=f,o))return a;const p=n[i+1];i=o?wn(p):Mr(p)}if(null!==e){let l=s?e.residualClasses:e.residualStyles;null!=l&&(a=Sp(l,r))}return a}function qd(n){return void 0!==n}function $b(n,e){return 0!=(n.flags&(e?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ze(n,e=""){const t=b(),r=ae(),i=n+22,s=r.firstCreatePass?ma(r,i,1,e,null):r.data[i],o=t[i]=Up(t[U],e);Ed(r,t,o,s),Vn(s,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ec(n){return Fi("",n,""),Ec}function Fi(n,e,t){const r=b(),i=va(r,n,e,t);return i!==V&&Ir(r,ft(),i),Fi}function Hb(n,e,t,r,i){const s=b(),o=Da(s,n,e,t,r,i);return o!==V&&Ir(s,ft(),o),Hb}function Kg(n,e,t,r,i,s,o){const a=b(),l=Ca(a,n,e,t,r,i,s,o);return l!==V&&Ir(a,ft(),l),Kg}function zb(n,e,t,r,i,s,o,a,l){const c=b(),u=ba(c,n,e,t,r,i,s,o,a,l);return u!==V&&Ir(c,ft(),u),zb}function Gb(n,e,t,r,i,s,o,a,l,c,u){const d=b(),h=wa(d,n,e,t,r,i,s,o,a,l,c,u);return h!==V&&Ir(d,ft(),h),Gb}function qb(n,e,t,r,i,s,o,a,l,c,u,d,h){const f=b(),p=Ea(f,n,e,t,r,i,s,o,a,l,c,u,d,h);return p!==V&&Ir(f,ft(),p),qb}function Wb(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p){const g=b(),m=Sa(g,n,e,t,r,i,s,o,a,l,c,u,d,h,f,p);return m!==V&&Ir(g,ft(),m),Wb}function Kb(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m){const C=b(),w=Ma(C,n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m);return w!==V&&Ir(C,ft(),w),Kb}function Zb(n){const e=b(),t=_a(e,n);return t!==V&&Ir(e,ft(),t),Zb
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function Gk(n,e,t){Sn(kt,zn,va(b(),n,e,t),!0)}function qk(n,e,t,r,i){Sn(kt,zn,Da(b(),n,e,t,r,i),!0)}function Wk(n,e,t,r,i,s,o){Sn(kt,zn,Ca(b(),n,e,t,r,i,s,o),!0)}function Kk(n,e,t,r,i,s,o,a,l){Sn(kt,zn,ba(b(),n,e,t,r,i,s,o,a,l),!0)}function Zk(n,e,t,r,i,s,o,a,l,c,u){Sn(kt,zn,wa(b(),n,e,t,r,i,s,o,a,l,c,u),!0)}function Qk(n,e,t,r,i,s,o,a,l,c,u,d,h){Sn(kt,zn,Ea(b(),n,e,t,r,i,s,o,a,l,c,u,d,h),!0)}function Yk(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p){Sn(kt,zn,Sa(b(),n,e,t,r,i,s,o,a,l,c,u,d,h,f,p),!0)}function Xk(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m){Sn(kt,zn,Ma(b(),n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m),!0)}function Jk(n){Sn(kt,zn,_a(b(),n),!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function eN(n,e,t){Hn(va(b(),n,e,t))}function tN(n,e,t,r,i){Hn(Da(b(),n,e,t,r,i))}function nN(n,e,t,r,i,s,o){Hn(Ca(b(),n,e,t,r,i,s,o))}function rN(n,e,t,r,i,s,o,a,l){Hn(ba(b(),n,e,t,r,i,s,o,a,l))}function iN(n,e,t,r,i,s,o,a,l,c,u){Hn(wa(b(),n,e,t,r,i,s,o,a,l,c,u))}function sN(n,e,t,r,i,s,o,a,l,c,u,d,h){Hn(Ea(b(),n,e,t,r,i,s,o,a,l,c,u,d,h))}function oN(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p){Hn(Sa(b(),n,e,t,r,i,s,o,a,l,c,u,d,h,f,p))}function aN(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m){Hn(Ma(b(),n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m))}function lN(n){Hn(_a(b(),n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qb(n,e,t,r,i){return En(n,va(b(),e,t,r),i,!1),Qb}function Yb(n,e,t,r,i,s,o){return En(n,Da(b(),e,t,r,i,s),o,!1),Yb}function Xb(n,e,t,r,i,s,o,a,l){return En(n,Ca(b(),e,t,r,i,s,o,a),l,!1),Xb}function Jb(n,e,t,r,i,s,o,a,l,c,u){return En(n,ba(b(),e,t,r,i,s,o,a,l,c),u,!1),Jb}function ew(n,e,t,r,i,s,o,a,l,c,u,d,h){return En(n,wa(b(),e,t,r,i,s,o,a,l,c,u,d),h,!1),ew}function tw(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p){return En(n,Ea(b(),e,t,r,i,s,o,a,l,c,u,d,h,f),p,!1),tw}function nw(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m){return En(n,Sa(b(),e,t,r,i,s,o,a,l,c,u,d,h,f,p,g),m,!1),nw}function rw(n,e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m,C,w){return En(n,Ma(b(),e,t,r,i,s,o,a,l,c,u,d,h,f,p,g,m,C),w,!1),rw}function iw(n,e,t){return En(n,_a(b(),e),t,!1),iw
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function Wd(n,e,t){const r=b();if(ot(r,Zo(),e)){Lt(ae(),Ae(),r,n,e,r[U],t,!0)}return Wd}function sw(n,e,t){const r=b();if(ot(r,Zo(),e)){const s=ae(),o=Ae();Lt(s,o,r,n,e,tb(fp(s.data),o,r),t,!0)}return sw}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Fs=void 0;var uN=["en",[["a","p"],["AM","PM"],Fs],[["AM","PM"],Fs,Fs],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Fs,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Fs,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Fs,"{1} 'at' {0}",Fs],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function cN(n){const t=Math.floor(Math.abs(n)),r=n.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===r?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ta={};function gt(n){const e=function dN(n){return n.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n);let t=aw(e);if(t)return t;const r=e.split("-")[0];if(t=aw(r),t)return t;if("en"===r)return uN;throw new v(701,!1)}function ow(n){return gt(n)[Ce.PluralCase]}function aw(n){return n in Ta||(Ta[n]=be.ng&&be.ng.common&&be.ng.common.locales&&be.ng.common.locales[n]),Ta[n]}var Ce;!function(n){n[n.LocaleId=0]="LocaleId",n[n.DayPeriodsFormat=1]="DayPeriodsFormat",n[n.DayPeriodsStandalone=2]="DayPeriodsStandalone",n[n.DaysFormat=3]="DaysFormat",n[n.DaysStandalone=4]="DaysStandalone",n[n.MonthsFormat=5]="MonthsFormat",n[n.MonthsStandalone=6]="MonthsStandalone",n[n.Eras=7]="Eras",n[n.FirstDayOfWeek=8]="FirstDayOfWeek",n[n.WeekendRange=9]="WeekendRange",n[n.DateFormat=10]="DateFormat",n[n.TimeFormat=11]="TimeFormat",n[n.DateTimeFormat=12]="DateTimeFormat",n[n.NumberSymbols=13]="NumberSymbols",n[n.NumberFormats=14]="NumberFormats",n[n.CurrencyCode=15]="CurrencyCode",n[n.CurrencySymbol=16]="CurrencySymbol",n[n.CurrencyName=17]="CurrencyName",n[n.Currencies=18]="Currencies",n[n.Directionality=19]="Directionality",n[n.PluralCase=20]="PluralCase",n[n.ExtraData=21]="ExtraData"}(Ce||(Ce={}));const hN=["zero","one","two","few","many"];const Ra="en-US",Kd={marker:"element"},Zd={marker:"ICU"};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var mt;!function(n){n[n.SHIFT=2]="SHIFT",n[n.APPEND_EAGERLY=1]="APPEND_EAGERLY",n[n.COMMENT=2]="COMMENT"}(mt||(mt={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let lw=Ra;function cw(n){At(n,"Expected localeId to be defined"),"string"==typeof n&&(lw=n.toLowerCase().replace(/_/g,"-"))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function uw(n,e,t){const r=e.insertBeforeIndex,i=Array.isArray(r)?r[0]:r;return null===i?FD(n,0,t):Be(t[i])}function dw(n,e,t,r,i){const s=e.insertBeforeIndex;if(Array.isArray(s)){let o=r,a=null;if(3&e.type||(a=o,o=i),null!==o&&0==(2&e.flags))for(let l=1;l<s.length;l++){Rs(n,o,t[s[l]],a,!1)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hw(n,e){if(n.push(e),n.length>1)for(let t=n.length-2;t>=0;t--){const r=n[t];fw(r)||mN(r,e)&&null===yN(r)&&_N(r,e.index)}}function fw(n){return!(64&n.type)}function mN(n,e){return fw(e)||n.index>e.index}function yN(n){const e=n.insertBeforeIndex;return Array.isArray(e)?e[0]:e}function _N(n,e){const t=n.insertBeforeIndex;Array.isArray(t)?t[0]=e:(VD(uw,dw),n.insertBeforeIndex=e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Sc(n,e){const t=n.data[e];return null===t||"string"==typeof t?null:t.hasOwnProperty("currentCaseLViewIndex")?t:t.value}function CN(n,e,t){const r=Ig(n,t,64,null,null);return hw(e,r),r}function Qd(n,e){const t=e[n.currentCaseLViewIndex];return null===t?t:t<0?~t:t}function pw(n){return n>>>17}function gw(n){return(131070&n)>>>1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Mc=0,Ic=0;function yw(n,e,t,r){const i=t[U];let o,s=null;for(let a=0;a<e.length;a++){const l=e[a];if("string"==typeof l){const c=e[++a];null===t[c]&&(t[c]=Up(i,l))}else if("number"==typeof l)switch(1&l){case 0:const c=pw(l);let u,d;if(null===s&&(s=c,o=wd(i,r)),c===s?(u=r,d=o):(u=null,d=Be(t[c])),null!==d){const g=gw(l);Rs(i,d,t[g],u,!1);const C=Sc(n,g);if(null!==C&&"object"==typeof C){const w=Qd(C,t);null!==w&&yw(n,C.create[w],t,t[C.anchorIdx])}}break;case 1:const h=l>>>1,f=e[++a],p=e[++a];Pg(i,od(h,t),null,null,f,p,null)}else switch(l){case Zd:const c=e[++a],u=e[++a];if(null===t[u]){st(t[u]=Cx(i,c),t)}break;case Kd:const d=e[++a],h=e[++a];if(null===t[h]){st(t[h]=$p(i,d,null),t)}}}}function _w(n,e,t,r,i){for(let s=0;s<t.length;s++){const o=t[s],a=t[++s];if(o&i){let l="";for(let c=s+1;c<=s+a;c++){const u=t[c];if("string"==typeof u)l+=u;else if("number"==typeof u)if(u<0)l+=L(e[r-u]);else{const d=u>>>2;switch(3&u){case 1:const h=t[++c],f=t[++c],p=n.data[d];"string"==typeof p?Pg(e[U],e[d],null,p,h,l,f):Lt(n,p,e,h,l,e[U],f,!1);break;case 0:const g=e[d];null!==g&&AD(e[U],g,l);break;case 2:MN(n,Sc(n,d),e,l);break;case 3:vw(n,Sc(n,d),r,e)}}}}else{const l=t[s+1];if(l>0&&3==(3&l)){const u=Sc(n,l>>>2);e[u.currentCaseLViewIndex]<0&&vw(n,u,r,e)}}s+=a}}function vw(n,e,t,r){let i=r[e.currentCaseLViewIndex];if(null!==i){let s=Mc;i<0&&(i=r[e.currentCaseLViewIndex]=~i,s=-1),_w(n,r,e.update[i],t,s)}}function MN(n,e,t,r){const i=function IN(n,e){let t=n.cases.indexOf(e);if(-1===t)switch(n.type){case 1:{const r=function fN(n,e){const t=ow(e)(parseInt(n,10)),r=hN[t];return void 0!==r?r:"other"}(e,function gN(){return lw}());t=n.cases.indexOf(r),-1===t&&"other"!==r&&(t=n.cases.indexOf("other"));break}case 0:t=n.cases.indexOf("other")}return-1===t?null:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,r);if(Qd(e,t)!==i&&(Dw(n,e,t),t[e.currentCaseLViewIndex]=null===i?null:~i,null!==i)){const o=t[e.anchorIdx];o&&yw(n,e.create[i],t,o)}}function Dw(n,e,t){let r=Qd(e,t);if(null!==r){const i=e.remove[r];for(let s=0;s<i.length;s++){const o=i[s];if(o>0){const a=od(o,t);null!==a&&Wp(t[U],a)}else Dw(n,Sc(n,~o),t)}}}function AN(){const n=[];let t,r,e=-1;function s(a,l){e=0;const c=Qd(a,l);r=null!==c?a.remove[c]:fe}function o(){if(e<r.length){const a=r[e++];if(a>0)return t[a];{n.push(e,r);const l=~a;return s(t[1].data[l],t),o()}}return 0===n.length?null:(r=n.pop(),e=n.pop(),o())}return function i(a,l){for(t=l;n.length;)n.pop();return s(a.value,l),o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Yd=/\ufffd(\d+):?\d*\ufffd/gi,TN=/({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi,RN=/\ufffd(\d+)\ufffd/,bw=/^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,xN=/\ufffd\/?\*(\d+:\d+)\ufffd/gi,ON=/\ufffd(\/?[#*]\d+):?\d*\ufffd/gi,PN=/\uE500/g;function NN(n,e,t,r,i,s){const o=Yl(),a=[],l=[],c=[[]];i=function jN(n,e){if(function BN(n){return-1===n}(e))return Sw(n);{const t=n.indexOf(`:${e}\ufffd`)+2+e.toString().length,r=n.search(new RegExp(`\ufffd\\/\\*\\d+:${e}\ufffd`));return Sw(n.substring(t,r))}}(i,s);const u=function kN(n){return n.replace(PN," ")}(i).split(ON);for(let d=0;d<u.length;d++){let h=u[d];if(0==(1&d)){const f=Zg(h);for(let p=0;p<f.length;p++){let g=f[p];if(0==(1&p)){const m=g;""!==m&&FN(n,o,c[0],a,l,t,m)}else{const m=g;if("object"!=typeof m)throw new Error(`Unable to parse ICU expression in "${i}" message.`);Mw(n,t,l,e,m,ww(n,o,c[0],t,a,"",!0).index)}}}else{const f=47===h.charCodeAt(0),g=(h.charCodeAt(f?1:0),22+Number.parseInt(h.substring(f?2:1)));if(f)c.shift(),Vn(Yl(),!1);else{const m=CN(n,c[0],g);c.unshift([]),Vn(m,!0)}}}n.data[r]={create:a,update:l}}function ww(n,e,t,r,i,s,o){const a=ya(n,r,1,null);let l=a<<mt.SHIFT,c=Yl();e===c&&(c=null),null===c&&(l|=mt.APPEND_EAGERLY),o&&(l|=mt.COMMENT,function yx(n){void 0===Lp&&(Lp=n())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(AN)),i.push(l,null===s?"":s);const u=Ig(n,a,o?32:1,null===s?"":s,null);hw(t,u);const d=u.index;return Vn(u,!1),null!==c&&e!==c&&function DN(n,e){let t=n.insertBeforeIndex;null===t?(VD(uw,dw),t=n.insertBeforeIndex=[null,e]):(_r(Array.isArray(t),!0,"Expecting array here"),t.push(e))}(c,d),u}function FN(n,e,t,r,i,s,o){const a=o.match(Yd),l=ww(n,e,t,s,r,a?null:o,!1);a&&Tc(i,o,l.index,null,0,null)}function Tc(n,e,t,r,i,s){const o=n.length,a=o+1;n.push(null,null);const l=o+2,c=e.split(Yd);let u=0;for(let d=0;d<c.length;d++){const h=c[d];if(1&d){const f=i+parseInt(h,10);n.push(-1-f),u|=Ew(f)}else""!==h&&n.push(h)}return n.push(t<<2|(r?1:0)),r&&n.push(r,s),n[o]=u,n[a]=n.length-l,u}function VN(n){let e=0;for(let t=0;t<n.length;t++){const r=n[t];"number"==typeof r&&r<0&&e++}return e}function Ew(n){return 1<<Math.min(n,31)}function Sw(n){let e,s,t="",r=0,i=!1;for(;null!==(e=xN.exec(n));)i?e[0]===`\ufffd/*${s}\ufffd`&&(r=e.index,i=!1):(t+=n.substring(r,e.index+e[0].length),s=e[1],i=!0);return t+=n.slice(r),t}function Mw(n,e,t,r,i,s){let o=0;const a={type:i.type,currentCaseLViewIndex:ya(n,e,1,null),anchorIdx:s,cases:[],create:[],remove:[],update:[]};(function zN(n,e,t){n.push(Ew(e.mainBinding),2,-1-e.mainBinding,t<<2|2)})(t,i,s),function vN(n,e,t){const r=n.data[e];null===r?n.data[e]=t:r.value=t}(n,s,a);const l=i.values;for(let c=0;c<l.length;c++){const u=l[c],d=[];for(let h=0;h<u.length;h++){const f=u[h];if("string"!=typeof f){const p=d.push(f)-1;u[h]=`\x3c!--\ufffd${p}\ufffd--\x3e`}}o=$N(n,a,e,t,r,i.cases[c],u.join(""),d)|o}o&&function GN(n,e,t){n.push(e,1,t<<2|3)}(t,o,s)}function UN(n){const e=[],t=[];let r=1,i=0;const s=Zg(n=n.replace(bw,function(o,a,l){return r="select"===l?0:1,i=parseInt(a.slice(1),10),""}));for(let o=0;o<s.length;){let a=s[o++].trim();1===r&&(a=a.replace(/\s*(?:=)?(\w+)\s*/,"$1")),a.length&&e.push(a);const l=Zg(s[o++]);e.length>t.length&&t.push(l)}return{type:r,mainBinding:i,cases:e,values:t}}function Zg(n){if(!n)return[];let e=0;const t=[],r=[],i=/[{}]/g;let s;for(i.lastIndex=0;s=i.exec(n);){const a=s.index;if("}"==s[0]){if(t.pop(),0==t.length){const l=n.substring(e,a);bw.test(l)?r.push(UN(l)):r.push(l),e=a+1}}else{if(0==t.length){const l=n.substring(e,a);r.push(l),e=a+1}t.push("{")}}const o=n.substring(e);return r.push(o),r}function $N(n,e,t,r,i,s,o,a){const l=[],c=[],u=[];e.cases.push(s),e.create.push(l),e.remove.push(c),e.update.push(u);const h=qD($D()).getInertBodyElement(o),f=tg(h)||h;return f?Iw(n,e,t,r,l,c,u,f,i,a,0):0}function Iw(n,e,t,r,i,s,o,a,l,c,u){let d=0,h=a.firstChild;for(;h;){const f=ya(n,t,1,null);switch(h.nodeType){case Node.ELEMENT_NODE:const p=h,g=p.tagName.toLowerCase();if(Jp.hasOwnProperty(g)){Qg(i,Kd,g,l,f),n.data[f]=g;const _=p.attributes;for(let M=0;M<_.length;M++){const H=_.item(M),se=H.name.toLowerCase();H.value.match(Yd)?QD.hasOwnProperty(se)&&(eg[se]?Tc(o,H.value,f,H.name,0,Ad):Tc(o,H.value,f,H.name,0,null)):qN(i,f,H)}d=Iw(n,e,t,r,i,s,o,h,f,c,u+1)|d,Aw(s,f,u)}break;case Node.TEXT_NODE:const m=h.textContent||"",C=m.match(Yd);Qg(i,null,C?"":m,l,f),Aw(s,f,u),C&&(d=Tc(o,m,f,null,0,null)|d);break;case Node.COMMENT_NODE:const w=RN.exec(h.textContent||"");if(w){const M=c[parseInt(w[1],10)];Qg(i,Zd,"",l,f),Mw(n,t,r,l,M,f),HN(s,f,u)}}h=h.nextSibling}return d}function Aw(n,e,t){0===t&&n.push(e)}function HN(n,e,t){0===t&&(n.push(~e),n.push(e))}function Qg(n,e,t,r,i){null!==e&&n.push(e),n.push(t,i,function bN(n,e,t){return n|e<<17|t<<1}(0,r,i))}function qN(n,e,t){n.push(e<<1|1,t.name,t.value)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const WN=/\[(\ufffd.+?\ufffd?)\]/,KN=/\[(\ufffd.+?\ufffd?)\]|(\ufffd\/?\*\d+:\d+\ufffd)/g,ZN=/({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,QN=/{([A-Z0-9_]+)}/g,YN=/\ufffdI18N_EXP_(ICU(_\d+)?)\ufffd/g,XN=/\/\*/,JN=/\d+\:(\d+)/;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Rw(n,e,t=-1){const r=ae(),i=b(),s=22+n,o=Mi(r.consts,e),a=Yl();r.firstCreatePass&&NN(r,null===a?0:a.index,i,s,o,t);const l=r.data[s],u=OD(r,a===i[6]?null:a,i),d=a&&8&a.type?i[a.index]:null;(function SN(n,e,t,r){const i=n[U];for(let s=0;s<e.length;s++){const o=e[s++],a=e[s],l=(o&mt.COMMENT)===mt.COMMENT,c=(o&mt.APPEND_EAGERLY)===mt.APPEND_EAGERLY,u=o>>>mt.SHIFT;let d=n[u];null===d&&(d=n[u]=l?i.createComment(a):Up(i,a)),c&&null!==t&&Rs(i,t,d,r,!1)}})(i,l.create,u,d),Pv(!0)}function xw(){Pv(!1)}function tF(n,e,t){Rw(n,e,t),xw()}function nF(n,e){const t=ae();!function LN(n,e,t){const i=He().index,s=[];if(n.firstCreatePass&&null===n.data[e]){for(let o=0;o<t.length;o+=2){const a=t[o],l=t[o+1];if(""!==l){if(TN.test(l))throw new Error(`ICU expressions are not supported in attributes. Message: "${l}".`);Tc(s,l,i,a,VN(s),null)}}n.data[e]=s}}(t,n+22,Mi(t.consts,e))}function Ow(n){return function wN(n){n&&(Mc|=1<<Math.min(Ic,31)),Ic++}(ot(b(),Zo(),n)),Ow}function rF(n){!function EN(n,e,t){if(Ic>0){const r=n.data[t];_w(n,e,Array.isArray(r)?r:r.update,Dr()-Ic-1,Mc)}Mc=0,Ic=0}(ae(),b(),n+22)}function iF(n,e={}){return function eF(n,e={}){let t=n;if(WN.test(n)){const r={},i=[0];t=t.replace(KN,(s,o,a)=>{const l=o||a,c=r[l]||[];if(c.length||(l.split("|").forEach(g=>{const m=g.match(JN),C=m?parseInt(m[1],10):0,w=XN.test(g);c.push([C,w,g])}),r[l]=c),!c.length)throw new Error(`i18n postprocess: unmatched placeholder - ${l}`);const u=i[i.length-1];let d=0;for(let g=0;g<c.length;g++)if(c[g][0]===u){d=g;break}const[h,f,p]=c[d];return f?i.pop():u!==h&&i.push(h),c.splice(d,1),p})}return Object.keys(e).length&&(t=t.replace(ZN,(r,i,s,o,a,l)=>e.hasOwnProperty(s)?`${i}${e[s]}${l}`:r),t=t.replace(QN,(r,i)=>e.hasOwnProperty(i)?e[i]:r),t=t.replace(YN,(r,i)=>{if(e.hasOwnProperty(i)){const s=e[i];if(!s.length)throw new Error(`i18n postprocess: unmatched ICU - ${r} with key: ${i}`);return s.shift()}return r})),t}(n,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yg(n,e,t,r,i){if(n=k(n),Array.isArray(n))for(let s=0;s<n.length;s++)Yg(n[s],e,t,r,i);else{const s=ae(),o=b();let a=Ps(n)?n:k(n.provide),l=lC(n);const c=He(),u=1048575&c.providerIndexes,d=c.directiveStart,h=c.providerIndexes>>20;if(Ps(n)||!n.multi){const f=new Xl(l,i,y),p=Jg(a,e,i?u:u+h,d);-1===p?(gd(ec(c,o),s,a),Xg(s,n,e.length),e.push(a),c.directiveStart++,c.directiveEnd++,i&&(c.providerIndexes+=1048576),t.push(f),o.push(f)):(t[p]=f,o[p]=f)}else{const f=Jg(a,e,u+h,d),p=Jg(a,e,u,u+h),g=f>=0&&t[f],m=p>=0&&t[p];if(i&&!m||!i&&!g){gd(ec(c,o),s,a);const C=function lF(n,e,t,r,i){const s=new Xl(n,t,y);return s.multi=[],s.index=e,s.componentProviders=0,Pw(s,i,r&&!t),s}(i?aF:oF,t.length,i,r,l);!i&&m&&(t[p].providerFactory=C),Xg(s,n,e.length,0),e.push(a),c.directiveStart++,c.directiveEnd++,i&&(c.providerIndexes+=1048576),t.push(C),o.push(C)}else{Xg(s,n,f>-1?f:p,Pw(t[i?p:f],l,!i&&r))}!i&&r&&m&&t[p].componentProviders++}}}function Xg(n,e,t,r){const i=Ps(e),s=function vO(n){return!!n.useClass}(e);if(i||s){const l=(s?k(e.useClass):e).prototype.ngOnDestroy;if(l){const c=n.destroyHooks||(n.destroyHooks=[]);if(!i&&e.multi){const u=c.indexOf(t);-1===u?c.push(t,[r,l]):c[u+1].push(r,l)}else c.push(t,l)}}}function Pw(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function Jg(n,e,t,r){for(let i=t;i<r;i++)if(e[i]===n)return i;return-1}function oF(n,e,t,r){return em(this.multi,[])}function aF(n,e,t,r){const i=this.multi;let s;if(this.providerFactory){const o=this.providerFactory.componentProviders,a=tc(t,t[1],this.providerFactory.index,r);s=a.slice(0,o),em(i,s);for(let l=o;l<a.length;l++)s.push(a[l])}else s=[],em(i,s);return s}function em(n,e){for(let t=0;t<n.length;t++){const r=n[t];e.push(r())}return e}function J(n,e=[]){return t=>{t.providersResolver=(r,i)=>function sF(n,e,t){const r=ae();if(r.firstCreatePass){const i=Dn(n);Yg(t,r.data,r.blueprint,i,!0),Yg(e,r.data,r.blueprint,i,!1)}}(r,i?i(n):n,e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ls{}class kw{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Nw extends Ls{constructor(e,t){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Vg(this);const r=Tt(e);this._bootstrapComponents=Sr(r.bootstrap),this._r3Injector=bC(e,t,[{provide:Ls,useValue:this},{provide:da,useValue:this.componentFactoryResolver}],De(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class tm extends kw{constructor(e){super(),this.moduleType=e}create(e){return new Nw(this.moduleType,e)}}class uF extends Ls{constructor(e,t,r){super(),this.componentFactoryResolver=new Vg(this),this.instance=null;const i=new aC([...e,{provide:Ls,useValue:this},{provide:da,useValue:this.componentFactoryResolver}],t||xd(),r,new Set(["environment"]));this.injector=i,i.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}}function Xd(n,e,t=null){return new uF(n,e,t).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Jd{constructor(e){this._injector=e,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e.id)){const t=rC(0,e.type),r=t.length>0?Xd([t],this._injector,`Standalone[${e.type.name}]`):null;this.cachedInjectors.set(e.id,r)}return this.cachedInjectors.get(e.id)}ngOnDestroy(){try{for(const e of this.cachedInjectors.values())null!==e&&e.destroy()}finally{this.cachedInjectors.clear()}}}function Fw(n){n.getStandaloneInjector=e=>e.get(Jd).getOrCreateStandaloneInjector(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function vF(n,e,t){const r=ht()+n,i=b();return i[r]===V?$n(i,r,t?e.call(t):e()):Dc(i,r)}function Hw(n,e,t,r){return zw(b(),ht(),n,e,t,r)}function DF(n,e,t,r,i){return Gw(b(),ht(),n,e,t,r,i)}function CF(n,e,t,r,i,s){return qw(b(),ht(),n,e,t,r,i,s)}function bF(n,e,t,r,i,s,o){return Ww(b(),ht(),n,e,t,r,i,s,o)}function wF(n,e,t,r,i,s,o,a){const l=ht()+n,c=b(),u=tn(c,l,t,r,i,s);return ot(c,l+4,o)||u?$n(c,l+5,a?e.call(a,t,r,i,s,o):e(t,r,i,s,o)):Dc(c,l+5)}function EF(n,e,t,r,i,s,o,a,l){const c=ht()+n,u=b(),d=tn(u,c,t,r,i,s);return Ns(u,c+4,o,a)||d?$n(u,c+6,l?e.call(l,t,r,i,s,o,a):e(t,r,i,s,o,a)):Dc(u,c+6)}function SF(n,e,t,r,i,s,o,a,l,c){const u=ht()+n,d=b();let h=tn(d,u,t,r,i,s);return zd(d,u+4,o,a,l)||h?$n(d,u+7,c?e.call(c,t,r,i,s,o,a,l):e(t,r,i,s,o,a,l)):Dc(d,u+7)}function MF(n,e,t,r,i,s,o,a,l,c,u){const d=ht()+n,h=b(),f=tn(h,d,t,r,i,s);return tn(h,d+4,o,a,l,c)||f?$n(h,d+8,u?e.call(u,t,r,i,s,o,a,l,c):e(t,r,i,s,o,a,l,c)):Dc(h,d+8)}function IF(n,e,t,r){return Kw(b(),ht(),n,e,t,r)}function Rc(n,e){const t=n[e];return t===V?void 0:t}function zw(n,e,t,r,i,s){const o=e+t;return ot(n,o,i)?$n(n,o+1,s?r.call(s,i):r(i)):Rc(n,o+1)}function Gw(n,e,t,r,i,s,o){const a=e+t;return Ns(n,a,i,s)?$n(n,a+2,o?r.call(o,i,s):r(i,s)):Rc(n,a+2)}function qw(n,e,t,r,i,s,o,a){const l=e+t;return zd(n,l,i,s,o)?$n(n,l+3,a?r.call(a,i,s,o):r(i,s,o)):Rc(n,l+3)}function Ww(n,e,t,r,i,s,o,a,l){const c=e+t;return tn(n,c,i,s,o,a)?$n(n,c+4,l?r.call(l,i,s,o,a):r(i,s,o,a)):Rc(n,c+4)}function Kw(n,e,t,r,i,s){let o=e+t,a=!1;for(let l=0;l<i.length;l++)ot(n,o++,i[l])&&(a=!0);return a?$n(n,o,r.apply(s,i)):Rc(n,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rm(n,e){const t=ae();let r;const i=n+22;t.firstCreatePass?(r=function AF(n,e){if(e)for(let t=e.length-1;t>=0;t--){const r=e[t];if(n===r.name)return r}}(e,t.pipeRegistry),t.data[i]=r,r.onDestroy&&(t.destroyHooks||(t.destroyHooks=[])).push(i,r.onDestroy)):r=t.data[i];const s=r.factory||(r.factory=As(r.type)),o=Xt(y);try{const a=fd(!1),l=s();return fd(a),function bk(n,e,t,r){t>=n.data.length&&(n.data[t]=null,n.blueprint[t]=null),e[t]=r}(t,b(),i,l),l}finally{Xt(o)}}function TF(n,e,t){const r=n+22,i=b(),s=qo(i,r);return xc(i,r)?zw(i,ht(),e,s.transform,t,s):s.transform(t)}function Zw(n,e,t,r){const i=n+22,s=b(),o=qo(s,i);return xc(s,i)?Gw(s,ht(),e,o.transform,t,r,o):o.transform(t,r)}function Qw(n,e,t,r,i){const s=n+22,o=b(),a=qo(o,s);return xc(o,s)?qw(o,ht(),e,a.transform,t,r,i,a):a.transform(t,r,i)}function RF(n,e,t,r,i,s){const o=n+22,a=b(),l=qo(a,o);return xc(a,o)?Ww(a,ht(),e,l.transform,t,r,i,s,l):l.transform(t,r,i,s)}function xF(n,e,t){const r=n+22,i=b(),s=qo(i,r);return xc(i,r)?Kw(i,ht(),e,s.transform,t,s):s.transform.apply(s,t)}function xc(n,e){return n[1].data[e].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Jd.\u0275prov=E({token:Jd,providedIn:"environment",factory:()=>new Jd(D(xi))});function im(n){return e=>{setTimeout(n,void 0,e)}}const z=class OF extends N{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,r){let i=e,s=t||(()=>null),o=r;if(e&&"object"==typeof e){const l=e;i=l.next?.bind(l),s=l.error?.bind(l),o=l.complete?.bind(l)}this.__isAsync&&(s=im(s),i&&(i=im(i)),o&&(o=im(o)));const a=super.subscribe({next:i,error:s,complete:o});return e instanceof Le&&e.add(a),a}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function PF(){return this._results[ks()]()}class sm{constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const t=ks(),r=sm.prototype;r[t]||(r[t]=PF)}get changes(){return this._changes||(this._changes=new z)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){const r=this;r.dirty=!1;const i=Pt(e);(this._changesDetected=!function TR(n,e,t){if(n.length!==e.length)return!1;for(let r=0;r<n.length;r++){let i=n[r],s=e[r];if(t&&(i=t(i),s=t(s)),s!==i)return!1}return!0}(r._results,i,t))&&(r._results=i,r.length=i.length,r.last=i[this.length-1],r.first=i[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ut{}Ut.__NG_ELEMENT_ID__=function FF(){return eh(He(),b())};const kF=Ut,NF=class extends kF{constructor(e,t,r){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=r}createEmbeddedView(e,t){const r=this._declarationTContainer.tViews,i=Ld(this._declarationLView,r,e,16,null,r.declTNode,null,null,null,null,t||null),s=this._declarationLView[this._declarationTContainer.index];i[17]=s;const o=this._declarationLView[19];return null!==o&&(i[19]=o.createEmbeddedView(r)),Ag(r,i,e),new yc(i)}};function eh(n,e){return 4&n.type?new NF(e,n,ha(n,e)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class bt{}bt.__NG_ELEMENT_ID__=function LF(){return Jw(He(),b())};const VF=bt,Yw=class extends VF{constructor(e,t,r){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=r}get element(){return ha(this._hostTNode,this._hostLView)}get injector(){return new Xo(this._hostTNode,this._hostLView)}get parentInjector(){const e=pd(this._hostTNode,this._hostLView);if(zv(e)){const t=Yo(e,this._hostLView),r=Qo(e),i=t[1].data[r+8];return new Xo(i,t)}return new Xo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){const t=Xw(this._lContainer);return null!==t&&t[e]||null}get length(){return this._lContainer.length-10}createEmbeddedView(e,t,r){let i,s;"number"==typeof r?i=r:null!=r&&(i=r.index,s=r.injector);const o=e.createEmbeddedView(t||{},s);return this.insert(o,i),o}createComponent(e,t,r,i,s){const o=e&&!rc(e);let a;if(o)a=t;else{const d=t||{};a=d.index,r=d.injector,i=d.projectableNodes,s=d.environmentInjector||d.ngModuleRef}const l=o?e:new _c(me(e)),c=r||this.parentInjector;if(!s&&null==l.ngModule){const h=(o?c:this.parentInjector).get(xi,null);h&&(s=h)}const u=l.create(c,i,void 0,s);return this.insert(u.hostView,a),u}insert(e,t){const r=e._lView,i=r[1];if(function Q0(n){return vn(n[3])}(r)){const u=this.indexOf(e);if(-1!==u)this.detach(u);else{const d=r[3],h=new Yw(d,d[6],d[3]);h.detach(h.indexOf(e))}}const s=this._adjustIndex(t),o=this._lContainer;Mx(i,r,o,s);const a=qp(s,o),l=r[U],c=wd(l,o[7]);return null!==c&&function wx(n,e,t,r,i,s){r[0]=i,r[6]=e,dc(n,r,t,1,i,s)}(i,o[6],l,r,c,a),e.attachToViewContainerRef(),rD(om(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){const t=Xw(this._lContainer);return null!==t?t.indexOf(e):-1}remove(e){const t=this._adjustIndex(e,-1),r=Hp(this._lContainer,t);r&&(_d(om(this._lContainer),t),RD(r[1],r))}detach(e){const t=this._adjustIndex(e,-1),r=Hp(this._lContainer,t);return r&&null!=_d(om(this._lContainer),t)?new yc(r):null}_adjustIndex(e,t=0){return e??this.length+t}};function Xw(n){return n[8]}function om(n){return n[8]||(n[8]=[])}function Jw(n,e){let t;const r=e[n.index];if(vn(r))t=r;else{let i;if(8&n.type)i=Be(r);else{const s=e[U];i=s.createComment("");const o=xt(n,e);Rs(s,wd(s,o),i,function xx(n,e){return n.nextSibling(e)}(s,o),!1)}e[n.index]=t=XC(r,e,i,n),Bd(e,t)}return new Yw(t,n,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class am{constructor(e){this.queryList=e,this.matches=null}clone(){return new am(this.queryList)}setDirty(){this.queryList.setDirty()}}class lm{constructor(e=[]){this.queries=e}createEmbeddedView(e){const t=e.queries;if(null!==t){const r=null!==e.contentQueries?e.contentQueries[0]:t.length,i=[];for(let s=0;s<r;s++){const o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];i.push(a.clone())}return new lm(i)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)null!==iE(e,t).matches&&this.queries[t].setDirty()}}class eE{constructor(e,t,r=null){this.predicate=e,this.flags=t,this.read=r}}class cm{constructor(e=[]){this.queries=e}elementStart(e,t){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let r=0;r<this.length;r++){const i=null!==t?t.length:0,s=this.getByIndex(r).embeddedTView(e,i);s&&(s.indexInDeclarationView=r,null!==t?t.push(s):t=[s])}return null!==t?new cm(t):null}template(e,t){for(let r=0;r<this.queries.length;r++)this.queries[r].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class um{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new um(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const t=this._declarationNodeIndex;let r=e.parent;for(;null!==r&&8&r.type&&r.index!==t;)r=r.parent;return t===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(e,t){const r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){const s=r[i];this.matchTNodeWithReadOption(e,t,UF(t,s)),this.matchTNodeWithReadOption(e,t,md(t,e,s,!1,!1))}else r===Ut?4&t.type&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,md(t,e,r,!1,!1))}matchTNodeWithReadOption(e,t,r){if(null!==r){const i=this.metadata.read;if(null!==i)if(i===ye||i===bt||i===Ut&&4&t.type)this.addMatch(t.index,-2);else{const s=md(t,e,i,!1,!1);null!==s&&this.addMatch(t.index,s)}else this.addMatch(t.index,r)}}addMatch(e,t){null===this.matches?this.matches=[e,t]:this.matches.push(e,t)}}function UF(n,e){const t=n.localNames;if(null!==t)for(let r=0;r<t.length;r+=2)if(t[r]===e)return t[r+1];return null}function HF(n,e,t,r){return-1===t?function $F(n,e){return 11&n.type?ha(n,e):4&n.type?eh(n,e):null}(e,n):-2===t?function zF(n,e,t){if(t===ye)return ha(e,n);if(t===Ut)return eh(e,n);if(t===bt)return Jw(e,n)}(n,e,r):tc(n,n[1],t,e)}function tE(n,e,t,r){const i=e[19].queries[r];if(null===i.matches){const s=n.data,o=t.matches,a=[];for(let l=0;l<o.length;l+=2){const c=o[l];if(c<0)a.push(null);else{const u=s[c];a.push(HF(e,u,o[l+1],t.metadata.read))}}i.matches=a}return i.matches}function dm(n,e,t,r){const i=n.queries.getByIndex(t),s=i.matches;if(null!==s){const o=tE(n,e,i,t);for(let a=0;a<s.length;a+=2){const l=s[a];if(l>0)r.push(o[a/2]);else{const c=s[a+1],u=e[-l];for(let d=10;d<u.length;d++){const h=u[d];h[17]===h[3]&&dm(h[1],h,c,r)}if(null!==u[9]){const d=u[9];for(let h=0;h<d.length;h++){const f=d[h];dm(f[1],f,c,r)}}}}}return r}function Gn(n){const e=b(),t=ae(),r=kv();pp(r+1);const i=iE(t,r);if(n.dirty&&function Z0(n){return 4==(4&n[2])}(e)===(2==(2&i.metadata.flags))){if(null===i.matches)n.reset([]);else{const s=i.crossesNgTemplate?dm(t,e,r,[]):tE(t,e,i,r);n.reset(s,xO),n.notifyOnChanges()}return!0}return!1}function Oc(n,e,t){const r=ae();r.firstCreatePass&&(rE(r,new eE(n,e,t),-1),2==(2&e)&&(r.staticViewQueries=!0)),nE(r,b(),e)}function xa(n,e,t,r){const i=ae();if(i.firstCreatePass){const s=He();rE(i,new eE(e,t,r),s.index),function qF(n,e){const t=n.contentQueries||(n.contentQueries=[]),r=t.length?t[t.length-1]:-1;e!==r&&t.push(n.queries.length-1,e)}(i,n),2==(2&t)&&(i.staticContentQueries=!0)}nE(i,b(),t)}function qn(){return function GF(n,e){return n[19].queries[e].queryList}(b(),kv())}function nE(n,e,t){const r=new sm(4==(4&t));HC(n,e,r,r.destroy),null===e[19]&&(e[19]=new lm),e[19].queries.push(new am(r))}function rE(n,e,t){null===n.queries&&(n.queries=new cm),n.queries.track(new um(e,t))}function iE(n,e){return n.queries.getByIndex(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function WF(n,e){return eh(n,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const yt={\u0275\u0275attribute:Ye,\u0275\u0275attributeInterpolate1:sb,\u0275\u0275attributeInterpolate2:ob,\u0275\u0275attributeInterpolate3:ab,\u0275\u0275attributeInterpolate4:lb,\u0275\u0275attributeInterpolate5:cb,\u0275\u0275attributeInterpolate6:ub,\u0275\u0275attributeInterpolate7:db,\u0275\u0275attributeInterpolate8:hb,\u0275\u0275attributeInterpolateV:fb,\u0275\u0275defineComponent:yn,\u0275\u0275defineDirective:T,\u0275\u0275defineInjectable:E,\u0275\u0275defineInjector:re,\u0275\u0275defineNgModule:oe,\u0275\u0275definePipe:Dt,\u0275\u0275directiveInject:y,\u0275\u0275getInheritedFactory:ze,\u0275\u0275inject:D,\u0275\u0275injectAttribute:Jo,\u0275\u0275invalidFactory:Pd,\u0275\u0275invalidFactoryDep:lD,\u0275\u0275templateRefExtractor:WF,\u0275\u0275resetView:Ko,\u0275\u0275NgOnChangesFeature:it,\u0275\u0275ProvidersFeature:J,\u0275\u0275CopyDefinitionFeature:mk,\u0275\u0275InheritDefinitionFeature:ie,\u0275\u0275StandaloneFeature:Fw,\u0275\u0275nextContext:Bt,\u0275\u0275namespaceHTML:dR,\u0275\u0275namespaceMathML:uR,\u0275\u0275namespaceSVG:cR,\u0275\u0275enableBindings:eR,\u0275\u0275disableBindings:tR,\u0275\u0275elementStart:$,\u0275\u0275elementEnd:K,\u0275\u0275element:at,\u0275\u0275elementContainerStart:Hg,\u0275\u0275elementContainerEnd:zg,\u0275\u0275elementContainer:pb,\u0275\u0275pureFunction0:vF,\u0275\u0275pureFunction1:Hw,\u0275\u0275pureFunction2:DF,\u0275\u0275pureFunction3:CF,\u0275\u0275pureFunction4:bF,\u0275\u0275pureFunction5:wF,\u0275\u0275pureFunction6:EF,\u0275\u0275pureFunction7:SF,\u0275\u0275pureFunction8:MF,\u0275\u0275pureFunctionV:IF,\u0275\u0275getCurrentView:gb,\u0275\u0275restoreView:Wo,\u0275\u0275listener:Oe,\u0275\u0275projection:Ia,\u0275\u0275syntheticHostProperty:sw,\u0275\u0275syntheticHostListener:yb,\u0275\u0275pipeBind1:TF,\u0275\u0275pipeBind2:Zw,\u0275\u0275pipeBind3:Qw,\u0275\u0275pipeBind4:RF,\u0275\u0275pipeBindV:xF,\u0275\u0275projectionDef:bc,\u0275\u0275hostProperty:Wd,\u0275\u0275property:ce,\u0275\u0275propertyInterpolate:Cb,\u0275\u0275propertyInterpolate1:qg,\u0275\u0275propertyInterpolate2:bb,\u0275\u0275propertyInterpolate3:wb,\u0275\u0275propertyInterpolate4:Eb,\u0275\u0275propertyInterpolate5:Sb,\u0275\u0275propertyInterpolate6:Mb,\u0275\u0275propertyInterpolate7:Ib,\u0275\u0275propertyInterpolate8:Ab,\u0275\u0275propertyInterpolateV:Tb,\u0275\u0275pipe:rm,\u0275\u0275queryRefresh:Gn,\u0275\u0275viewQuery:Oc,\u0275\u0275loadQuery:qn,\u0275\u0275contentQuery:xa,\u0275\u0275reference:Ug,\u0275\u0275classMap:Lk,\u0275\u0275classMapInterpolate1:Gk,\u0275\u0275classMapInterpolate2:qk,\u0275\u0275classMapInterpolate3:Wk,\u0275\u0275classMapInterpolate4:Kk,\u0275\u0275classMapInterpolate5:Zk,\u0275\u0275classMapInterpolate6:Qk,\u0275\u0275classMapInterpolate7:Yk,\u0275\u0275classMapInterpolate8:Xk,\u0275\u0275classMapInterpolateV:Jk,\u0275\u0275styleMap:Hn,\u0275\u0275styleMapInterpolate1:eN,\u0275\u0275styleMapInterpolate2:tN,\u0275\u0275styleMapInterpolate3:nN,\u0275\u0275styleMapInterpolate4:rN,\u0275\u0275styleMapInterpolate5:iN,\u0275\u0275styleMapInterpolate6:sN,\u0275\u0275styleMapInterpolate7:oN,\u0275\u0275styleMapInterpolate8:aN,\u0275\u0275styleMapInterpolateV:lN,\u0275\u0275styleProp:Gd,\u0275\u0275stylePropInterpolate1:Qb,\u0275\u0275stylePropInterpolate2:Yb,\u0275\u0275stylePropInterpolate3:Xb,\u0275\u0275stylePropInterpolate4:Jb,\u0275\u0275stylePropInterpolate5:ew,\u0275\u0275stylePropInterpolate6:tw,\u0275\u0275stylePropInterpolate7:nw,\u0275\u0275stylePropInterpolate8:rw,\u0275\u0275stylePropInterpolateV:iw,\u0275\u0275classProp:jt,\u0275\u0275advance:W,\u0275\u0275template:Vt,\u0275\u0275text:Ze,\u0275\u0275textInterpolate:Ec,\u0275\u0275textInterpolate1:Fi,\u0275\u0275textInterpolate2:Hb,\u0275\u0275textInterpolate3:Kg,\u0275\u0275textInterpolate4:zb,\u0275\u0275textInterpolate5:Gb,\u0275\u0275textInterpolate6:qb,\u0275\u0275textInterpolate7:Wb,\u0275\u0275textInterpolate8:Kb,\u0275\u0275textInterpolateV:Zb,\u0275\u0275i18n:tF,\u0275\u0275i18nAttributes:nF,\u0275\u0275i18nExp:Ow,\u0275\u0275i18nStart:Rw,\u0275\u0275i18nEnd:xw,\u0275\u0275i18nApply:rF,\u0275\u0275i18nPostprocess:iF,\u0275\u0275resolveWindow:BO,\u0275\u0275resolveDocument:jO,\u0275\u0275resolveBody:UO,\u0275\u0275setComponentScope:O0,\u0275\u0275setNgModuleScope:P0,\u0275\u0275registerNgModuleType:fD,\u0275\u0275sanitizeHtml:uO,\u0275\u0275sanitizeStyle:dO,\u0275\u0275sanitizeResourceUrl:JD,\u0275\u0275sanitizeScript:hO,\u0275\u0275sanitizeUrl:ng,\u0275\u0275sanitizeUrlOrResourceUrl:mO,\u0275\u0275trustConstantHtml:fO,\u0275\u0275trustConstantResourceUrl:pO,\u0275\u0275validateIframeAttribute:Lx,forwardRef:ge,resolveForwardRef:k};let Oa=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function sE(n){return void 0!==n.ngModule}function oE(n){return!!Tt(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Pc=[];let hm=!1;function aE(n){return Array.isArray(n)?n.every(aE):!!k(n)}function XF(n,e={}){(function JF(n,e,t=!1){const r=Pt(e.declarations||fe);let i=null;Object.defineProperty(n,_v,{configurable:!0,get:()=>(null===i&&(i=Ge().compileNgModule(yt,`ng:///${n.name}/\u0275mod.js`,{type:n,bootstrap:Pt(e.bootstrap||fe).map(k),declarations:r.map(k),imports:Pt(e.imports||fe).map(k).map(hE),exports:Pt(e.exports||fe).map(k).map(hE),schemas:e.schemas?Pt(e.schemas):null,id:e.id||null}),i.schemas||(i.schemas=[])),i)});let s=null;Object.defineProperty(n,vr,{get:()=>{if(null===s){const a=Ge();s=a.compileFactory(yt,`ng:///${n.name}/\u0275fac.js`,{name:n.name,type:n,deps:Cd(n),target:a.FactoryTarget.NgModule,typeArgumentCount:0})}return s},configurable:!1});let o=null;Object.defineProperty(n,Yf,{get:()=>{if(null===o){const a={name:n.name,type:n,providers:e.providers||fe,imports:[(e.imports||fe).map(k),(e.exports||fe).map(k)]};o=Ge().compileInjector(yt,`ng:///${n.name}/\u0275inj.js`,a)}return o},configurable:!1})})(n,e),void 0!==e.id&&fD(n,e.id),function QF(n,e){Pc.push({moduleType:n,ngModule:e})}(n,e)}function t1(n,e){const t=Pt(e.declarations||fe),r=Pa(n);t.forEach(i=>{if((i=k(i)).hasOwnProperty(ed)){dE(me(i),r)}else!i.hasOwnProperty(Jf)&&!i.hasOwnProperty(ep)&&(i.ngSelectorScope=n)})}function dE(n,e){n.directiveDefs=()=>Array.from(e.compilation.directives).map(t=>t.hasOwnProperty(ed)?me(t):ut(t)).filter(t=>!!t),n.pipeDefs=()=>Array.from(e.compilation.pipes).map(t=>dt(t)),n.schemas=e.schemas,n.tView=null}function Pa(n){if(oE(n))return function n1(n){const e=Tt(n,!0);if(null!==e.transitiveCompileScopes)return e.transitiveCompileScopes;const t={schemas:e.schemas||null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set}};return Sr(e.imports).forEach(r=>{const i=Pa(r);i.exported.directives.forEach(s=>t.compilation.directives.add(s)),i.exported.pipes.forEach(s=>t.compilation.pipes.add(s))}),Sr(e.declarations).forEach(r=>{dt(r)?t.compilation.pipes.add(r):t.compilation.directives.add(r)}),Sr(e.exports).forEach(r=>{const i=r;if(oE(i)){const s=Pa(i);s.exported.directives.forEach(o=>{t.compilation.directives.add(o),t.exported.directives.add(o)}),s.exported.pipes.forEach(o=>{t.compilation.pipes.add(o),t.exported.pipes.add(o)})}else dt(i)?t.exported.pipes.add(i):t.exported.directives.add(i)}),e.transitiveCompileScopes=t,t}(n);if($o(n)){if(null!==(me(n)||ut(n)))return{schemas:null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set([n]),pipes:new Set}};if(null!==dt(n))return{schemas:null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set([n])}}}throw new Error(`${n.name} does not have a module def (\u0275mod property)`)}function hE(n){return sE(n)?n.ngModule:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let gm=0;function r1(n,e){let t=null;(function KR(n,e){dD(e)&&(la.set(n,e),lc.add(n))})(n,e),gE(n,e),Object.defineProperty(n,ed,{get:()=>{if(null===t){const r=Ge();if(dD(e)){const c=[`Component '${n.name}' is not resolved:`];throw e.templateUrl&&c.push(` - templateUrl: ${e.templateUrl}`),e.styleUrls&&e.styleUrls.length&&c.push(` - styleUrls: ${JSON.stringify(e.styleUrls)}`),c.push("Did you run and wait for 'resolveComponentResources()'?"),new Error(c.join("\n"))}const i=function ZF(){return Oa}();let s=e.preserveWhitespaces;void 0===s&&(s=null!==i&&void 0!==i.preserveWhitespaces&&i.preserveWhitespaces);let o=e.encapsulation;void 0===o&&(o=null!==i&&void 0!==i.defaultEncapsulation?i.defaultEncapsulation:Ln.Emulated);const a=e.templateUrl||`ng:///${n.name}/template.html`,l={...mE(n,e),typeSourceSpan:r.createParseSourceSpan("Component",n.name,a),template:e.template||"",preserveWhitespaces:s,styles:e.styles||fe,animations:e.animations,declarations:[],changeDetection:e.changeDetection,encapsulation:o,interpolation:e.interpolation,viewProviders:e.viewProviders||null,isStandalone:!!e.standalone};gm++;try{if(l.usesInheritance&&yE(n),t=r.compileComponent(yt,a,l),e.standalone){const c=Pt(e.imports||fe),{directiveDefs:u,pipeDefs:d}=function s1(n,e){let t=null,r=null;return{directiveDefs:()=>{if(null===t){t=[me(n)];const o=new Set;for(const a of e){const l=k(a);if(!o.has(l))if(o.add(l),Tt(l)){const c=Pa(l);for(const u of c.exported.directives){const d=me(u)||ut(u);d&&!o.has(u)&&(o.add(u),t.push(d))}}else{const c=me(l)||ut(l);c&&t.push(c)}}}return t},pipeDefs:()=>{if(null===r){r=[];const o=new Set;for(const a of e){const l=k(a);if(!o.has(l))if(o.add(l),Tt(l)){const c=Pa(l);for(const u of c.exported.pipes){const d=dt(u);d&&!o.has(u)&&(o.add(u),r.push(d))}}else{const c=dt(l);c&&r.push(c)}}}return r}}}(n,c);t.directiveDefs=u,t.pipeDefs=d,t.dependencies=()=>c.map(k)}}finally{gm--}if(0===gm&&function YF(){if(!hm){hm=!0;try{for(let n=Pc.length-1;n>=0;n--){const{moduleType:e,ngModule:t}=Pc[n];t.declarations&&t.declarations.every(aE)&&(Pc.splice(n,1),t1(e,t))}}finally{hm=!1}}}(),function o1(n){return void 0!==n.ngSelectorScope}(n)){const c=Pa(n.ngSelectorScope);dE(t,c)}if(e.schemas){if(!e.standalone)throw new Error(`The 'schemas' was specified for the ${he(n)} but is only valid on a component that is standalone.`);t.schemas=e.schemas}else e.standalone&&(t.schemas=[])}return t},configurable:!1})}function fE(n,e){let t=null;gE(n,e||{}),Object.defineProperty(n,Jf,{get:()=>{if(null===t){const r=pE(n,e||{});t=Ge().compileDirective(yt,r.sourceMapUrl,r.metadata)}return t},configurable:!1})}function pE(n,e){const t=n&&n.name,r=`ng:///${t}/\u0275dir.js`,i=Ge(),s=mE(n,e);return s.typeSourceSpan=i.createParseSourceSpan("Directive",t,r),s.usesInheritance&&yE(n),{metadata:s,sourceMapUrl:r}}function gE(n,e){let t=null;Object.defineProperty(n,vr,{get:()=>{if(null===t){const r=pE(n,e),i=Ge();t=i.compileFactory(yt,`ng:///${n.name}/\u0275fac.js`,{name:r.metadata.name,type:r.metadata.type,typeArgumentCount:0,deps:Cd(n),target:i.FactoryTarget.Directive})}return t},configurable:!1})}function a1(n){return Object.getPrototypeOf(n.prototype)===Object.prototype}function mE(n,e){const t=ac(),r=t.ownPropMetadata(n);return{name:n.name,type:n,selector:void 0!==e.selector?e.selector:null,host:e.host||Uo,propMetadata:r,inputs:e.inputs||fe,outputs:e.outputs||fe,queries:_E(n,r,vE),lifecycle:{usesOnChanges:t.hasLifecycleHook(n,"ngOnChanges")},typeSourceSpan:null,usesInheritance:!a1(n),exportAs:u1(e.exportAs),providers:e.providers||null,viewQueries:_E(n,r,DE),isStandalone:!!e.standalone}}function yE(n){const e=Object.prototype;let t=Object.getPrototypeOf(n.prototype).constructor;for(;t&&t!==e;)!ut(t)&&!me(t)&&h1(t)&&fE(t,null),t=Object.getPrototypeOf(t)}function l1(n){return"string"==typeof n?bE(n):k(n)}function c1(n,e){return{propertyName:n,predicate:l1(e.selector),descendants:e.descendants,first:e.first,read:e.read?e.read:null,static:!!e.static,emitDistinctChangesOnly:!!e.emitDistinctChangesOnly}}function _E(n,e,t){const r=[];for(const i in e)if(e.hasOwnProperty(i)){const s=e[i];s.forEach(o=>{if(t(o)){if(!o.selector)throw new Error(`Can't construct a query for the property "${i}" of "${he(n)}" since the query selector wasn't defined.`);if(s.some(CE))throw new Error("Cannot combine @Input decorators with query decorators");r.push(c1(i,o))}})}return r}function u1(n){return void 0===n?null:bE(n)}function vE(n){const e=n.ngMetadataName;return"ContentChild"===e||"ContentChildren"===e}function DE(n){const e=n.ngMetadataName;return"ViewChild"===e||"ViewChildren"===e}function CE(n){return"Input"===n.ngMetadataName}function bE(n){return n.split(",").map(e=>e.trim())}const d1=["ngOnChanges","ngOnInit","ngOnDestroy","ngDoCheck","ngAfterViewInit","ngAfterViewChecked","ngAfterContentInit","ngAfterContentChecked"];function h1(n){const e=ac();if(d1.some(r=>e.hasLifecycleHook(n,r)))return!0;const t=e.propMetadata(n);for(const r in t){const i=t[r];for(let s=0;s<i.length;s++){const o=i[s],a=o.ngMetadataName;if(CE(o)||vE(o)||DE(o)||"Output"===a||"HostBinding"===a||"HostListener"===a)return!0}}return!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function wE(n,e){return{type:n,name:n.name,pipeName:e.name,pure:void 0===e.pure||e.pure,isStandalone:!!e.standalone}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const p1=nc("Directive",(n={})=>n,void 0,void 0,(n,e)=>fE(n,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */nc("Component",(n={})=>({changeDetection:ws.Default,...n}),p1,void 0,(n,e)=>r1(n,e)),nc("Pipe",n=>({pure:!0,...n}),void 0,void 0,(n,e)=>function f1(n,e){let t=null,r=null;Object.defineProperty(n,vr,{get:()=>{if(null===r){const i=wE(n,e),s=Ge(i.type);r=s.compileFactory(yt,`ng:///${i.name}/\u0275fac.js`,{name:i.name,type:i.type,typeArgumentCount:0,deps:Cd(n),target:s.FactoryTarget.Pipe})}return r},configurable:!1}),Object.defineProperty(n,ep,{get:()=>{if(null===t){const i=wE(n,e);t=Ge(i.type).compilePipe(yt,`ng:///${i.name}/\u0275pipe.js`,i)}return t},configurable:!1})}(n,e)),Ti("Input",n=>({bindingPropertyName:n})),Ti("Output",n=>({bindingPropertyName:n})),Ti("HostBinding",n=>({hostPropertyName:n})),Ti("HostListener",(n,e)=>({eventName:n,args:e})),nc("NgModule",n=>n,void 0,void 0,(n,e)=>XF(n,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function nh(...n){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const rh=new S("Application Initializer");class Ar{constructor(e){this.appInits=e,this.resolve=nh,this.reject=nh,this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let r=0;r<this.appInits.length;r++){const i=this.appInits[r]();if(Cc(i))e.push(i);else if(Gg(i)){const s=new Promise((o,a)=>{i.subscribe({complete:o,error:a})});e.push(s)}}Promise.all(e).then(()=>{t()}).catch(r=>{this.reject(r)}),0===e.length&&t(),this.initialized=!0}}Ar.\u0275fac=function(e){return new(e||Ar)(D(rh,8))},Ar.\u0275prov=E({token:Ar,factory:Ar.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ka=new S("AppId",{providedIn:"root",factory:EE});function EE(){return`${mm()}${mm()}${mm()}`}function mm(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const SE=new S("Platform Initializer"),kc=new S("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),ME=new S("appBootstrapListener"),Nc=(new S("Application Packages Root URL"),new S("AnimationModuleType"));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Li{log(e){console.log(e)}warn(e){console.warn(e)}}Li.\u0275fac=function(e){return new(e||Li)},Li.\u0275prov=E({token:Li,factory:Li.\u0275fac,providedIn:"platform"});const Wn=new S("LocaleId",{providedIn:"root",factory:()=>Y(Wn,q.Optional|q.SkipSelf)||
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function g1(){return typeof $localize<"u"&&$localize.locale||Ra}()}),m1=new S("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});new S("Translations"),new S("TranslationsFormat");var IE;!function(n){n[n.Error=0]="Error",n[n.Warning=1]="Warning",n[n.Ignore=2]="Ignore"}(IE||(IE={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class y1{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}}class Vi{compileModuleSync(e){return new tm(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){const t=this.compileModuleSync(e),i=Sr(Tt(e).declarations).reduce((s,o)=>{const a=me(o);return a&&s.push(new _c(a)),s},[]);return new y1(t,i)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}}Vi.\u0275fac=function(e){return new(e||Vi)},Vi.\u0275prov=E({token:Vi,factory:Vi.\u0275fac,providedIn:"root"});const _1=new S("compilerOptions");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const D1=Promise.resolve(0);function ym(n){typeof Zone>"u"?D1.then(()=>{n&&n.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ee{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new z(!1),this.onMicrotaskEmpty=new z(!1),this.onStable=new z(!1),this.onError=new z(!1),typeof Zone>"u")throw new v(908,!1);Zone.assertZonePatched();const i=this;if(i._nesting=0,i._outer=i._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const s=Zone.AsyncStackTaggingZoneSpec;i._inner=i._inner.fork(new s("Angular"))}Zone.TaskTrackingZoneSpec&&(i._inner=i._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(i._inner=i._inner.fork(Zone.longStackTraceZoneSpec)),i.shouldCoalesceEventChangeDetection=!r&&t,i.shouldCoalesceRunChangeDetection=r,i.lastRequestAnimationFrameId=-1,i.nativeRequestAnimationFrame=function C1(){let n=be.requestAnimationFrame,e=be.cancelAnimationFrame;if(typeof Zone<"u"&&n&&e){const t=n[Zone.__symbol__("OriginalDelegate")];t&&(n=t);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:n,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function E1(n){const e=()=>{!function w1(n){n.isCheckStableRunning||-1!==n.lastRequestAnimationFrameId||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(be,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,vm(n),n.isCheckStableRunning=!0,_m(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),vm(n))}(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,r,i,s,o,a)=>{try{return RE(n),t.invokeTask(i,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&"eventTask"===s.type||n.shouldCoalesceRunChangeDetection)&&e(),xE(n)}},onInvoke:(t,r,i,s,o,a,l)=>{try{return RE(n),t.invoke(i,s,o,a,l)}finally{n.shouldCoalesceRunChangeDetection&&e(),xE(n)}},onHasTask:(t,r,i,s)=>{t.hasTask(i,s),r===i&&("microTask"==s.change?(n._hasPendingMicrotasks=s.microTask,vm(n),_m(n)):"macroTask"==s.change&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,r,i,s)=>(t.handleError(i,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}(i)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ee.isInAngularZone())throw new v(909,!1)}static assertNotInAngularZone(){if(ee.isInAngularZone())throw new v(909,!1)}run(e,t,r){return this._inner.run(e,t,r)}runTask(e,t,r,i){const s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+i,e,b1,nh,nh);try{return s.runTask(o,t,r)}finally{s.cancelTask(o)}}runGuarded(e,t,r){return this._inner.runGuarded(e,t,r)}runOutsideAngular(e){return this._outer.run(e)}}const b1={};function _m(n){if(0==n._nesting&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function vm(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&-1!==n.lastRequestAnimationFrameId?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function RE(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function xE(n){n._nesting--,_m(n)}class S1{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new z,this.onMicrotaskEmpty=new z,this.onStable=new z,this.onError=new z}run(e,t,r){return e.apply(t,r)}runGuarded(e,t,r){return e.apply(t,r)}runOutsideAngular(e){return e()}runTask(e,t,r,i){return e.apply(t,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const OE=new S(""),ih=new S("");class Bi{constructor(e,t,r){this._ngZone=e,this.registry=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Dm||(function M1(n){Dm=n}(r),r.addToWindow(t)),this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ee.assertNotInAngularZone(),ym(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())ym(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,r){let i=-1;t&&t>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:i,updateCb:r})}whenStable(e,t,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,t,r),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,t,r){return[]}}Bi.\u0275fac=function(e){return new(e||Bi)(D(ee),D(ji),D(ih))},Bi.\u0275prov=E({token:Bi,factory:Bi.\u0275fac});class ji{constructor(){this._applications=new Map}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return Dm?.findTestabilityInTree(this,e,t)??null}}let Dm;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */ji.\u0275fac=function(e){return new(e||ji)},ji.\u0275prov=E({token:ji,factory:ji.\u0275fac,providedIn:"platform"});let Ui=null;const PE=new S("AllowMultipleToken"),Cm=new S("PlatformDestroyListeners"),Tr=!1;function I1(n,e,t){const r=new tm(t);if(typeof ngJitMode<"u"&&!ngJitMode)return Promise.resolve(r);const i=n.get(_1,[]).concat(e);if(function KF(n){null!==Oa&&(n.defaultEncapsulation!==Oa.defaultEncapsulation||n.preserveWhitespaces!==Oa.preserveWhitespaces)||(Oa=n)}({defaultEncapsulation:$E(i.map(c=>c.defaultEncapsulation)),preserveWhitespaces:$E(i.map(c=>c.preserveWhitespaces))}),function QR(){return 0===la.size}())return Promise.resolve(r);const s=function O1(n){const e=[];return n.forEach(t=>t&&e.push(...t)),e
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}(i.map(c=>c.providers));if(0===s.length)return Promise.resolve(r);const o=Ge(),l=Ne.create({providers:s}).get(o.ResourceLoader);return WR(c=>Promise.resolve(l.get(c))).then(()=>r)}class kE{constructor(e,t){this.name=e,this.token=t}}function NE(n){const e=n.get(SE,null);e&&e.forEach(t=>t())}function FE(n,e,t=[]){const r=`Platform: ${e}`,i=new S(r);return(s=[])=>{let o=bm();if(!o||o.injector.get(PE,!1)){const a=[...t,...s,{provide:i,useValue:!0}];n?n(a):function T1(n){if(Ui&&!Ui.get(PE,!1))throw new v(400,!1);Ui=n;const e=n.get(Vs);return NE(n),e}(LE(a,r))}return function x1(n){const e=bm();if(!e)throw new v(401,!1);return e}()}}function LE(n=[],e){return Ne.create({name:e,providers:[{provide:og,useValue:"platform"},{provide:Cm,useValue:new Set([()=>Ui=null])},...n]})}function bm(){return Ui?.get(Vs)??null}class Vs{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const r=BE(t?.ngZone,VE(t)),i=[{provide:ee,useValue:r}];return r.run(()=>{const s=Ne.create({providers:i,parent:this.injector,name:e.moduleType.name}),o=e.create(s),a=o.injector.get(fa,null);if(!a)throw new v(402,!1);return r.runOutsideAngular(()=>{const l=r.onError.subscribe({next:c=>{a.handleError(c)}});o.onDestroy(()=>{sh(this._modules,o),l.unsubscribe()})}),jE(a,r,()=>{const l=o.injector.get(Ar);return l.runInitializers(),l.donePromise.then(()=>(cw(o.injector.get(Wn,Ra)||Ra),this._moduleDoBootstrap(o),o))})})}bootstrapModule(e,t=[]){const r=UE({},t);return I1(this.injector,r,e).then(i=>this.bootstrapModuleFactory(i,r))}_moduleDoBootstrap(e){const t=e.injector.get(Kn);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(r=>t.bootstrap(r));else{if(!e.instance.ngDoBootstrap)throw new v(403,!1);e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new v(404,!1);this._modules.slice().forEach(t=>t.destroy()),this._destroyListeners.forEach(t=>t());const e=this._injector.get(Cm,null);e&&(e.forEach(t=>t()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}function VE(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!n||!n.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!n||!n.ngZoneRunCoalescing)||!1}}function BE(n,e){let t;return t="noop"===n?new S1:("zone.js"===n?void 0:n)||new ee(e),t}function jE(n,e,t){try{const r=t();return Cc(r)?r.catch(i=>{throw e.runOutsideAngular(()=>n.handleError(i)),i}):r}catch(r){throw e.runOutsideAngular(()=>n.handleError(r)),r}}function UE(n,e){return n=Array.isArray(e)?e.reduce(UE,n):{...n,...e}}Vs.\u0275fac=function(e){return new(e||Vs)(D(Ne))},Vs.\u0275prov=E({token:Vs,factory:Vs.\u0275fac,providedIn:"platform"});class Kn{constructor(e,t,r){this._zone=e,this._injector=t,this._exceptionHandler=r,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new ne(o=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{o.next(this._stable),o.complete()})}),s=new ne(o=>{let a;this._zone.runOutsideAngular(()=>{a=this._zone.onStable.subscribe(()=>{ee.assertNotInAngularZone(),ym(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,o.next(!0))})})});const l=this._zone.onUnstable.subscribe(()=>{ee.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{o.next(!1)}))});return()=>{a.unsubscribe(),l.unsubscribe()}});this.isStable=qf(i,s.pipe(hv()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(e,t){const r=e instanceof cC;if(!this._injector.get(Ar).done){!r&&$o(e);throw new v(405,Tr)}let s;s=r?e:this._injector.get(da).resolveComponentFactory(e),this.componentTypes.push(s.componentType);const o=function A1(n){return n.isBoundToModule}(s)?void 0:this._injector.get(Ls),a=t||s.selector,l=s.create(Ne.NULL,[],a,o),c=l.location.nativeElement,u=l.injector.get(OE,null);return u?.registerApplication(c),l.onDestroy(()=>{this.detachView(l.hostView),sh(this.components,l),u?.unregisterApplication(c)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new v(101,!1);try{this._runningTick=!0;for(let e of this._views)e.detectChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;sh(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(ME,[]).concat(this._bootstrapListeners).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>sh(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new v(406,!1);const e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}function sh(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function $E(n){for(let e=n.length-1;e>=0;e--)if(void 0!==n[e])return n[e]}Kn.\u0275fac=function(e){return new(e||Kn)(D(ee),D(xi),D(fa))},Kn.\u0275prov=E({token:Kn,factory:Kn.\u0275fac,providedIn:"root"});let HE=!0,zE=!1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Zn{}Zn.__NG_ELEMENT_ID__=function N1(n){return function F1(n,e,t){if(id(n)&&!t){const r=Ot(n.index,e);return new yc(r,r)}if(47&n.type){const r=e[16];return new yc(r,e)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(He(),b(),16==(16&n))};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class KE{constructor(){}supports(e){return vc(e)}create(e){return new $1(e)}}const U1=(n,e)=>e;class $1{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||U1}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,r=this._removalsHead,i=0,s=null;for(;t||r;){const o=!r||t&&t.currentIndex<QE(r,i,s)?t:r,a=QE(o,i,s),l=o.currentIndex;if(o===r)i--,r=r._nextRemoved;else if(t=t._next,null==o.previousIndex)i++;else{s||(s=[]);const c=a-i,u=l-i;if(c!=u){for(let h=0;h<c;h++){const f=h<s.length?s[h]:s[h]=0,p=f+h;u<=p&&p<c&&(s[h]=f+1)}s[o.previousIndex]=u-c}}a!==l&&e(o,a,l)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!vc(e))throw new v(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let i,s,o,t=this._itHead,r=!1;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),null!==t&&Object.is(t.trackById,o)?(r&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)):(t=this._mismatch(t,s,o,a),r=!0),t=t._next}else i=0,function _k(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{const t=n[ks()]();let r;for(;!(r=t.next()).done;)e(r.value)}}(e,a=>{o=this._trackByFn(i,a),null!==t&&Object.is(t.trackById,o)?(r&&(t=this._verifyReinsertion(t,a,o,i)),Object.is(t.item,a)||this._addIdentityChange(t,a)):(t=this._mismatch(t,a,o,i),r=!0),t=t._next,i++}),this.length=i;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,r,i){let s;return null===e?s=this._itTail:(s=e._prev,this._remove(e)),null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,i)):null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(r,i))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,i)):e=this._addAfter(new H1(t,r),s,i),e}_verifyReinsertion(e,t,r,i){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==s?e=this._reinsertAfter(s,e._prev,i):e.currentIndex!=i&&(e.currentIndex=i,this._addToMoves(e,i)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const i=e._prevRemoved,s=e._nextRemoved;return null===i?this._removalsHead=s:i._nextRemoved=s,null===s?this._removalsTail=i:s._prevRemoved=i,this._insertAfter(e,t,r),this._addToMoves(e,r),e}_moveAfter(e,t,r){return this._unlink(e),this._insertAfter(e,t,r),this._addToMoves(e,r),e}_addAfter(e,t,r){return this._insertAfter(e,t,r),null===this._additionsTail?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,r){const i=null===t?this._itHead:t._next;return e._next=i,e._prev=t,null===i?this._itTail=e:i._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new ZE),this._linkedRecords.put(e),e.currentIndex=r,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,r=e._next;return null===t?this._itHead=r:t._next=r,null===r?this._itTail=t:r._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(null===this._movesTail?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new ZE),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}}class H1{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class z1{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===t||t<=r.currentIndex)&&Object.is(r.trackById,e))return r;return null}remove(e){const t=e._prevDup,r=e._nextDup;return null===t?this._head=r:t._nextDup=r,null===r?this._tail=t:r._prevDup=t,null===this._head}}class ZE{constructor(){this.map=new Map}put(e){const t=e.trackById;let r=this.map.get(t);r||(r=new z1,this.map.set(t,r)),r.add(e)}get(e,t){const r=e,i=this.map.get(r);return i?i.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function QE(n,e,t){const r=n.previousIndex;if(null===r)return r;let i=0;return t&&r<t.length&&(i=t[r]),r+e+i
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class YE{constructor(){}supports(e){return e instanceof Map||jg(e)}create(){return new G1}}class G1{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||jg(e)))throw new v(900,!1)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(r,i)=>{if(t&&t.key===i)this._maybeAddToChanges(t,r),this._appendAfter=t,t=t._next;else{const s=this._getOrCreateRecordForKey(i,r);t=this._insertBeforeOrAppend(t,s)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let r=t;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const r=e._prev;return t._next=e,t._prev=r,e._prev=t,r&&(r._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const i=this._records.get(e);this._maybeAddToChanges(i,t);const s=i._prev,o=i._next;return s&&(s._next=o),o&&(o._prev=s),i._next=null,i._prev=null,i}const r=new q1(e);return this._records.set(e,r),r.currentValue=t,this._addToAdditions(r),r}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(r=>t(e[r],r))}}class q1{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function XE(){return new nn([new KE])}class nn{constructor(e){this.factories=e}static create(e,t){if(null!=t){const r=t.factories.slice();e=e.concat(r)}return new nn(e)}static extend(e){return{provide:nn,useFactory:t=>nn.create(e,t||XE()),deps:[[nn,new aa,new oa]]}}find(e){const t=this.factories.find(r=>r.supports(e));if(null!=t)return t;throw new v(901,!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function JE(){return new rn([new YE])}nn.\u0275prov=E({token:nn,providedIn:"root",factory:XE});class rn{constructor(e){this.factories=e}static create(e,t){if(t){const r=t.factories.slice();e=e.concat(r)}return new rn(e)}static extend(e){return{provide:rn,useFactory:t=>rn.create(e,t||JE()),deps:[[rn,new aa,new oa]]}}find(e){const t=this.factories.find(r=>r.supports(e));if(t)return t;throw new v(901,!1)}}rn.\u0275prov=E({token:rn,providedIn:"root",factory:JE});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const W1=[new YE],K1=[new KE],Z1=(new nn(K1),new rn(W1),FE(null,"core",[]));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class js{constructor(e){}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Rr(n){return"boolean"==typeof n?n:null!=n&&"false"!==n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */js.\u0275fac=function(e){return new(e||js)(D(Kn))},js.\u0275mod=oe({type:js}),js.\u0275inj=re({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let lh=null;function In(){return lh}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const B=new S("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Us{historyGo(e){throw new Error("Not implemented")}}Us.\u0275fac=function(e){return new(e||Us)},Us.\u0275prov=E({token:Us,factory:function(){return function J1(){return D(Na)}()},providedIn:"platform"});const eL=new S("Location Initialized");class Na extends Us{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return In().getBaseHref(this._doc)}onPopState(e){const t=In().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){const t=In().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,t,r){eS()?this._history.pushState(e,t,r):this.location.hash=r}replaceState(e,t,r){eS()?this._history.replaceState(e,t,r):this.location.hash=r}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}}function eS(){return!!window.history.pushState}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Im(n,e){if(0==n.length)return e;if(0==e.length)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,2==t?n+e.substring(1):1==t?n+e:n+"/"+e}function tS(n){const e=n.match(/#|\?|$/),t=e&&e.index||n.length,r=t-("/"===n[t-1]?1:0);return n.slice(0,r)+n.slice(t)}function xr(n){return n&&"?"!==n[0]?"?"+n:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Na.\u0275fac=function(e){return new(e||Na)(D(B))},Na.\u0275prov=E({token:Na,factory:function(){return function tL(){return new Na(D(B))}()},providedIn:"platform"});class An{historyGo(e){throw new Error("Not implemented")}}An.\u0275fac=function(e){return new(e||An)},An.\u0275prov=E({token:An,factory:function(){return Y($s)},providedIn:"root"});const nS=new S("appBaseHref");class $s extends An{constructor(e,t){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??Y(B).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Im(this._baseHref,e)}path(e=!1){const t=this._platformLocation.pathname+xr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,i){const s=this.prepareExternalUrl(r+xr(i));this._platformLocation.pushState(e,t,s)}replaceState(e,t,r,i){const s=this.prepareExternalUrl(r+xr(i));this._platformLocation.replaceState(e,t,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}$s.\u0275fac=function(e){return new(e||$s)(D(Us),D(nS,8))},$s.\u0275prov=E({token:$s,factory:$s.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Fa extends An{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],null!=t&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash;return null==t&&(t="#"),t.length>0?t.substring(1):t}prepareExternalUrl(e){const t=Im(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,r,i){let s=this.prepareExternalUrl(r+xr(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(e,t,s)}replaceState(e,t,r,i){let s=this.prepareExternalUrl(r+xr(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}Fa.\u0275fac=function(e){return new(e||Fa)(D(Us),D(nS,8))},Fa.\u0275prov=E({token:Fa,factory:Fa.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class sn{constructor(e){this._subject=new z,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;const t=this._locationStrategy.getBaseHref();this._baseHref=tS(rS(t)),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+xr(t))}normalize(e){return sn.stripTrailingSlash(function rL(n,e){return n&&e.startsWith(n)?e.substring(n.length):e}(this._baseHref,rS(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xr(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xr(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)})),()=>{const t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t,complete:r})}}function rS(n){return n.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */sn.normalizeQueryParams=xr,sn.joinWithSlash=Im,sn.stripTrailingSlash=tS,sn.\u0275fac=function(e){return new(e||sn)(D(An))},sn.\u0275prov=E({token:sn,factory:function(){return function nL(){return new sn(D(An))}()},providedIn:"root"});const iS={ADP:[void 0,void 0,0],AFN:[void 0,"\u060b",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058f",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20bc"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09f3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xa5","\xa5"],COP:[void 0,"$",2],CRC:[void 0,"\u20a1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010d",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xa3"],ESP:[void 0,"\u20a7",0],EUR:["\u20ac"],FJD:[void 0,"$"],FKP:[void 0,"\xa3"],GBP:["\xa3"],GEL:[void 0,"\u20be"],GHS:[void 0,"GH\u20b5"],GIP:[void 0,"\xa3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20aa"],INR:["\u20b9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xa5",void 0,0],KHR:[void 0,"\u17db"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20a9",0],KRW:["\u20a9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20b8"],LAK:[void 0,"\u20ad",0],LBP:[void 0,"L\xa3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20ae",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20a6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20b1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20b2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20bd"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xa3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xa3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xa3",0],THB:[void 0,"\u0e3f"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20ba"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20b4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20ab",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202fCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xa4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Fc,Hs,lt,_e,wt,Pe,sS;function ch(n,e){return an(gt(n)[Ce.DateFormat],e)}function uh(n,e){return an(gt(n)[Ce.TimeFormat],e)}function dh(n,e){return an(gt(n)[Ce.DateTimeFormat],e)}function on(n,e){const t=gt(n),r=t[Ce.NumberSymbols][e];if(typeof r>"u"){if(e===Pe.CurrencyDecimal)return t[Ce.NumberSymbols][Pe.Decimal];if(e===Pe.CurrencyGroup)return t[Ce.NumberSymbols][Pe.Group]}return r}function Am(n,e){return gt(n)[Ce.NumberFormats][e]}!function(n){n[n.Decimal=0]="Decimal",n[n.Percent=1]="Percent",n[n.Currency=2]="Currency",n[n.Scientific=3]="Scientific"}(Fc||(Fc={})),function(n){n[n.Zero=0]="Zero",n[n.One=1]="One",n[n.Two=2]="Two",n[n.Few=3]="Few",n[n.Many=4]="Many",n[n.Other=5]="Other"}(Hs||(Hs={})),function(n){n[n.Format=0]="Format",n[n.Standalone=1]="Standalone"}(lt||(lt={})),function(n){n[n.Narrow=0]="Narrow",n[n.Abbreviated=1]="Abbreviated",n[n.Wide=2]="Wide",n[n.Short=3]="Short"}(_e||(_e={})),function(n){n[n.Short=0]="Short",n[n.Medium=1]="Medium",n[n.Long=2]="Long",n[n.Full=3]="Full"}(wt||(wt={})),function(n){n[n.Decimal=0]="Decimal",n[n.Group=1]="Group",n[n.List=2]="List",n[n.PercentSign=3]="PercentSign",n[n.PlusSign=4]="PlusSign",n[n.MinusSign=5]="MinusSign",n[n.Exponential=6]="Exponential",n[n.SuperscriptingExponent=7]="SuperscriptingExponent",n[n.PerMille=8]="PerMille",n[n.Infinity=9]="Infinity",n[n.NaN=10]="NaN",n[n.TimeSeparator=11]="TimeSeparator",n[n.CurrencyDecimal=12]="CurrencyDecimal",n[n.CurrencyGroup=13]="CurrencyGroup"}(Pe||(Pe={})),function(n){n[n.Sunday=0]="Sunday",n[n.Monday=1]="Monday",n[n.Tuesday=2]="Tuesday",n[n.Wednesday=3]="Wednesday",n[n.Thursday=4]="Thursday",n[n.Friday=5]="Friday",n[n.Saturday=6]="Saturday"}(sS||(sS={}));const uL=ow;function oS(n){if(!n[Ce.ExtraData])throw new Error(`Missing extra locale data for the locale "${n[Ce.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function an(n,e){for(let t=e;t>-1;t--)if(typeof n[t]<"u")return n[t];throw new Error("Locale data API: locale data undefined")}function Tm(n){const[e,t]=n.split(":");return{hours:+e,minutes:+t}}function fL(n,e,t="en"){const r=function cL(n){return gt(n)[Ce.Currencies]}(t)[n]||iS[n]||[],i=r[1];return"narrow"===e&&"string"==typeof i?i:r[0]||n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const mL=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Lc={},yL=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var Qn,ue,de;function _L(n,e,t,r){let i=function IL(n){if(cS(n))return n;if("number"==typeof n&&!isNaN(n))return new Date(n);if("string"==typeof n){if(n=n.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(n)){const[i,s=1,o=1]=n.split("-").map(a=>+a);return hh(i,s-1,o)}const t=parseFloat(n);if(!isNaN(n-t))return new Date(t);let r;if(r=n.match(mL))return function AL(n){const e=new Date(0);let t=0,r=0;const i=n[8]?e.setUTCFullYear:e.setFullYear,s=n[8]?e.setUTCHours:e.setHours;n[9]&&(t=Number(n[9]+n[10]),r=Number(n[9]+n[11])),i.call(e,Number(n[1]),Number(n[2])-1,Number(n[3]));const o=Number(n[4]||0)-t,a=Number(n[5]||0)-r,l=Number(n[6]||0),c=Math.floor(1e3*parseFloat("0."+(n[7]||0)));return s.call(e,o,a,l,c),e}(r)}const e=new Date(n);if(!cS(e))throw new Error(`Unable to convert "${n}" into a date`);return e}(n);e=Or(t,e)||e;let a,o=[];for(;e;){if(a=yL.exec(e),!a){o.push(e);break}{o=o.concat(a.slice(1));const u=o.pop();if(!u)break;e=u}}let l=i.getTimezoneOffset();r&&(l=lS(r,l),i=function ML(n,e,t){const r=t?-1:1,i=n.getTimezoneOffset(),s=lS(e,i);return function SL(n,e){return(n=new Date(n.getTime())).setMinutes(n.getMinutes()+e),n}(n,r*(s-i))}(i,r,!0));let c="";return o.forEach(u=>{const d=function EL(n){if(xm[n])return xm[n];let e;switch(n){case"G":case"GG":case"GGG":e=Ee(de.Eras,_e.Abbreviated);break;case"GGGG":e=Ee(de.Eras,_e.Wide);break;case"GGGGG":e=Ee(de.Eras,_e.Narrow);break;case"y":e=je(ue.FullYear,1,0,!1,!0);break;case"yy":e=je(ue.FullYear,2,0,!0,!0);break;case"yyy":e=je(ue.FullYear,3,0,!1,!0);break;case"yyyy":e=je(ue.FullYear,4,0,!1,!0);break;case"Y":e=mh(1);break;case"YY":e=mh(2,!0);break;case"YYY":e=mh(3);break;case"YYYY":e=mh(4);break;case"M":case"L":e=je(ue.Month,1,1);break;case"MM":case"LL":e=je(ue.Month,2,1);break;case"MMM":e=Ee(de.Months,_e.Abbreviated);break;case"MMMM":e=Ee(de.Months,_e.Wide);break;case"MMMMM":e=Ee(de.Months,_e.Narrow);break;case"LLL":e=Ee(de.Months,_e.Abbreviated,lt.Standalone);break;case"LLLL":e=Ee(de.Months,_e.Wide,lt.Standalone);break;case"LLLLL":e=Ee(de.Months,_e.Narrow,lt.Standalone);break;case"w":e=Rm(1);break;case"ww":e=Rm(2);break;case"W":e=Rm(1,!0);break;case"d":e=je(ue.Date,1);break;case"dd":e=je(ue.Date,2);break;case"c":case"cc":e=je(ue.Day,1);break;case"ccc":e=Ee(de.Days,_e.Abbreviated,lt.Standalone);break;case"cccc":e=Ee(de.Days,_e.Wide,lt.Standalone);break;case"ccccc":e=Ee(de.Days,_e.Narrow,lt.Standalone);break;case"cccccc":e=Ee(de.Days,_e.Short,lt.Standalone);break;case"E":case"EE":case"EEE":e=Ee(de.Days,_e.Abbreviated);break;case"EEEE":e=Ee(de.Days,_e.Wide);break;case"EEEEE":e=Ee(de.Days,_e.Narrow);break;case"EEEEEE":e=Ee(de.Days,_e.Short);break;case"a":case"aa":case"aaa":e=Ee(de.DayPeriods,_e.Abbreviated);break;case"aaaa":e=Ee(de.DayPeriods,_e.Wide);break;case"aaaaa":e=Ee(de.DayPeriods,_e.Narrow);break;case"b":case"bb":case"bbb":e=Ee(de.DayPeriods,_e.Abbreviated,lt.Standalone,!0);break;case"bbbb":e=Ee(de.DayPeriods,_e.Wide,lt.Standalone,!0);break;case"bbbbb":e=Ee(de.DayPeriods,_e.Narrow,lt.Standalone,!0);break;case"B":case"BB":case"BBB":e=Ee(de.DayPeriods,_e.Abbreviated,lt.Format,!0);break;case"BBBB":e=Ee(de.DayPeriods,_e.Wide,lt.Format,!0);break;case"BBBBB":e=Ee(de.DayPeriods,_e.Narrow,lt.Format,!0);break;case"h":e=je(ue.Hours,1,-12);break;case"hh":e=je(ue.Hours,2,-12);break;case"H":e=je(ue.Hours,1);break;case"HH":e=je(ue.Hours,2);break;case"m":e=je(ue.Minutes,1);break;case"mm":e=je(ue.Minutes,2);break;case"s":e=je(ue.Seconds,1);break;case"ss":e=je(ue.Seconds,2);break;case"S":e=je(ue.FractionalSeconds,1);break;case"SS":e=je(ue.FractionalSeconds,2);break;case"SSS":e=je(ue.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=ph(Qn.Short);break;case"ZZZZZ":e=ph(Qn.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=ph(Qn.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=ph(Qn.Long);break;default:return null}return xm[n]=e,e}(u);c+=d?d(i,t,l):"''"===u?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function hh(n,e,t){const r=new Date(0);return r.setFullYear(n,e,t),r.setHours(0,0,0),r}function Or(n,e){const t=function iL(n){return gt(n)[Ce.LocaleId]}(n);if(Lc[t]=Lc[t]||{},Lc[t][e])return Lc[t][e];let r="";switch(e){case"shortDate":r=ch(n,wt.Short);break;case"mediumDate":r=ch(n,wt.Medium);break;case"longDate":r=ch(n,wt.Long);break;case"fullDate":r=ch(n,wt.Full);break;case"shortTime":r=uh(n,wt.Short);break;case"mediumTime":r=uh(n,wt.Medium);break;case"longTime":r=uh(n,wt.Long);break;case"fullTime":r=uh(n,wt.Full);break;case"short":const i=Or(n,"shortTime"),s=Or(n,"shortDate");r=fh(dh(n,wt.Short),[i,s]);break;case"medium":const o=Or(n,"mediumTime"),a=Or(n,"mediumDate");r=fh(dh(n,wt.Medium),[o,a]);break;case"long":const l=Or(n,"longTime"),c=Or(n,"longDate");r=fh(dh(n,wt.Long),[l,c]);break;case"full":const u=Or(n,"fullTime"),d=Or(n,"fullDate");r=fh(dh(n,wt.Full),[u,d])}return r&&(Lc[t][e]=r),r}function fh(n,e){return e&&(n=n.replace(/\{([^}]+)}/g,function(t,r){return null!=e&&r in e?e[r]:t})),n}function Tn(n,e,t="-",r,i){let s="";(n<0||i&&n<=0)&&(i?n=1-n:(n=-n,s=t));let o=String(n);for(;o.length<e;)o="0"+o;return r&&(o=o.slice(o.length-e)),s+o}function je(n,e,t=0,r=!1,i=!1){return function(s,o){let a=function DL(n,e){switch(n){case ue.FullYear:return e.getFullYear();case ue.Month:return e.getMonth();case ue.Date:return e.getDate();case ue.Hours:return e.getHours();case ue.Minutes:return e.getMinutes();case ue.Seconds:return e.getSeconds();case ue.FractionalSeconds:return e.getMilliseconds();case ue.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${n}".`)}}(n,s);if((t>0||a>-t)&&(a+=t),n===ue.Hours)0===a&&-12===t&&(a=12);else if(n===ue.FractionalSeconds)return function vL(n,e){return Tn(n,3).substring(0,e)}(a,e);const l=on(o,Pe.MinusSign);return Tn(a,e,l,r,i)}}function Ee(n,e,t=lt.Format,r=!1){return function(i,s){return function CL(n,e,t,r,i,s){switch(t){case de.Months:return function aL(n,e,t){const r=gt(n),s=an([r[Ce.MonthsFormat],r[Ce.MonthsStandalone]],e);return an(s,t)}(e,i,r)[n.getMonth()];case de.Days:return function oL(n,e,t){const r=gt(n),s=an([r[Ce.DaysFormat],r[Ce.DaysStandalone]],e);return an(s,t)}(e,i,r)[n.getDay()];case de.DayPeriods:const o=n.getHours(),a=n.getMinutes();if(s){const c=function dL(n){const e=gt(n);return oS(e),(e[Ce.ExtraData][2]||[]).map(r=>"string"==typeof r?Tm(r):[Tm(r[0]),Tm(r[1])])}(e),u=function hL(n,e,t){const r=gt(n);oS(r);const s=an([r[Ce.ExtraData][0],r[Ce.ExtraData][1]],e)||[];return an(s,t)||[]}(e,i,r),d=c.findIndex(h=>{if(Array.isArray(h)){const[f,p]=h,g=o>=f.hours&&a>=f.minutes,m=o<p.hours||o===p.hours&&a<p.minutes;if(f.hours<p.hours){if(g&&m)return!0}else if(g||m)return!0}else if(h.hours===o&&h.minutes===a)return!0;return!1});if(-1!==d)return u[d]}return function sL(n,e,t){const r=gt(n),s=an([r[Ce.DayPeriodsFormat],r[Ce.DayPeriodsStandalone]],e);return an(s,t)}(e,i,r)[o<12?0:1];case de.Eras:return function lL(n,e){return an(gt(n)[Ce.Eras],e)}(e,r)[n.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${t}`)}}(i,s,n,e,t,r)}}function ph(n){return function(e,t,r){const i=-1*r,s=on(t,Pe.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(n){case Qn.Short:return(i>=0?"+":"")+Tn(o,2,s)+Tn(Math.abs(i%60),2,s);case Qn.ShortGMT:return"GMT"+(i>=0?"+":"")+Tn(o,1,s);case Qn.Long:return"GMT"+(i>=0?"+":"")+Tn(o,2,s)+":"+Tn(Math.abs(i%60),2,s);case Qn.Extended:return 0===r?"Z":(i>=0?"+":"")+Tn(o,2,s)+":"+Tn(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${n}"`)}}}!function(n){n[n.Short=0]="Short",n[n.ShortGMT=1]="ShortGMT",n[n.Long=2]="Long",n[n.Extended=3]="Extended"}(Qn||(Qn={})),function(n){n[n.FullYear=0]="FullYear",n[n.Month=1]="Month",n[n.Date=2]="Date",n[n.Hours=3]="Hours",n[n.Minutes=4]="Minutes",n[n.Seconds=5]="Seconds",n[n.FractionalSeconds=6]="FractionalSeconds",n[n.Day=7]="Day"}(ue||(ue={})),function(n){n[n.DayPeriods=0]="DayPeriods",n[n.Days=1]="Days",n[n.Months=2]="Months",n[n.Eras=3]="Eras"}(de||(de={}));function aS(n){return hh(n.getFullYear(),n.getMonth(),n.getDate()+(4-n.getDay()))}function Rm(n,e=!1){return function(t,r){let i;if(e){const s=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,o=t.getDate();i=1+Math.floor((o+s)/7)}else{const s=aS(t),o=function wL(n){const e=hh(n,0,1).getDay();return hh(n,0,1+(e<=4?4:11)-e)}(s.getFullYear()),a=s.getTime()-o.getTime();i=1+Math.round(a/6048e5)}return Tn(i,n,on(r,Pe.MinusSign))}}function mh(n,e=!1){return function(t,r){return Tn(aS(t).getFullYear(),n,on(r,Pe.MinusSign),e)}}const xm={};function lS(n,e){n=n.replace(/:/g,"");const t=Date.parse("Jan 01, 1970 00:00:00 "+n)/6e4;return isNaN(t)?e:t}function cS(n){return n instanceof Date&&!isNaN(n.valueOf())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const TL=/^(\d+)?\.((\d+)(-(\d+))?)?$/;function Pm(n,e,t,r,i,s,o=!1){let a="",l=!1;if(isFinite(n)){let c=function LL(n){let r,i,s,o,a,e=Math.abs(n)+"",t=0;for((i=e.indexOf("."))>-1&&(e=e.replace(".","")),(s=e.search(/e/i))>0?(i<0&&(i=s),i+=+e.slice(s+1),e=e.substring(0,s)):i<0&&(i=e.length),s=0;"0"===e.charAt(s);s++);if(s===(a=e.length))r=[0],i=1;else{for(a--;"0"===e.charAt(a);)a--;for(i-=s,r=[],o=0;s<=a;s++,o++)r[o]=Number(e.charAt(s))}return i>22&&(r=r.splice(0,21),t=i-1,i=1),{digits:r,exponent:t,integerLen:i}}(n);o&&(c=function FL(n){if(0===n.digits[0])return n;const e=n.digits.length-n.integerLen;return n.exponent?n.exponent+=2:(0===e?n.digits.push(0,0):1===e&&n.digits.push(0),n.integerLen+=2),n}(c));let u=e.minInt,d=e.minFrac,h=e.maxFrac;if(s){const w=s.match(TL);if(null===w)throw new Error(`${s} is not a valid digit info`);const _=w[1],M=w[3],H=w[5];null!=_&&(u=Nm(_)),null!=M&&(d=Nm(M)),null!=H?h=Nm(H):null!=M&&d>h&&(h=d)}!function VL(n,e,t){if(e>t)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${t}).`);let r=n.digits,i=r.length-n.integerLen;const s=Math.min(Math.max(e,i),t);let o=s+n.integerLen,a=r[o];if(o>0){r.splice(Math.max(n.integerLen,o));for(let d=o;d<r.length;d++)r[d]=0}else{i=Math.max(0,i),n.integerLen=1,r.length=Math.max(1,o=s+1),r[0]=0;for(let d=1;d<o;d++)r[d]=0}if(a>=5)if(o-1<0){for(let d=0;d>o;d--)r.unshift(0),n.integerLen++;r.unshift(1),n.integerLen++}else r[o-1]++;for(;i<Math.max(0,s);i++)r.push(0);let l=0!==s;const c=e+n.integerLen,u=r.reduceRight(function(d,h,f,p){return h+=d,p[f]=h<10?h:h-10,l&&(0===p[f]&&f>=c?p.pop():l=!1),h>=10?1:0},0);u&&(r.unshift(u),n.integerLen++)}(c,d,h);let f=c.digits,p=c.integerLen;const g=c.exponent;let m=[];for(l=f.every(w=>!w);p<u;p++)f.unshift(0);for(;p<0;p++)f.unshift(0);p>0?m=f.splice(p,f.length):(m=f,f=[0]);const C=[];for(f.length>=e.lgSize&&C.unshift(f.splice(-e.lgSize,f.length).join(""));f.length>e.gSize;)C.unshift(f.splice(-e.gSize,f.length).join(""));f.length&&C.unshift(f.join("")),a=C.join(on(t,r)),m.length&&(a+=on(t,i)+m.join("")),g&&(a+=on(t,Pe.Exponential)+"+"+g)}else a=on(t,Pe.Infinity);return a=n<0&&!l?e.negPre+a+e.negSuf:e.posPre+a+e.posSuf,a}function PL(n,e,t,r,i){const o=km(Am(e,Fc.Currency),on(e,Pe.MinusSign));return o.minFrac=function gL(n){let e;const t=iS[n];return t&&(e=t[2]),"number"==typeof e?e:2}(r),o.maxFrac=o.minFrac,Pm(n,o,e,Pe.CurrencyGroup,Pe.CurrencyDecimal,i).replace("\xa4",t).replace("\xa4","").trim()}function km(n,e="-"){const t={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=n.split(";"),i=r[0],s=r[1],o=-1!==i.indexOf(".")?i.split("."):[i.substring(0,i.lastIndexOf("0")+1),i.substring(i.lastIndexOf("0")+1)],a=o[0],l=o[1]||"";t.posPre=a.substring(0,a.indexOf("#"));for(let u=0;u<l.length;u++){const d=l.charAt(u);"0"===d?t.minFrac=t.maxFrac=u+1:"#"===d?t.maxFrac=u+1:t.posSuf+=d}const c=a.split(",");if(t.gSize=c[1]?c[1].length:0,t.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,s){const u=i.length-t.posPre.length-t.posSuf.length,d=s.indexOf("#");t.negPre=s.substring(0,d).replace(/'/g,""),t.negSuf=s.slice(d+u).replace(/'/g,"")}else t.negPre=e+t.posPre,t.negSuf=t.posSuf;return t}function Nm(n){const e=parseInt(n);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+n);return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zs{}function hS(n,e,t,r){let i=`=${n}`;if(e.indexOf(i)>-1||(i=t.getPluralCategory(n,r),e.indexOf(i)>-1))return i;if(e.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${n}"`)}zs.\u0275fac=function(e){return new(e||zs)},zs.\u0275prov=E({token:zs,factory:function(e){let t=null;return e?t=new e:(r=D(Wn),t=new La(r)),t;var r},providedIn:"root"});class La extends zs{constructor(e){super(),this.locale=e}getPluralCategory(e,t){switch(uL(t||this.locale)(e)){case Hs.Zero:return"zero";case Hs.One:return"one";case Hs.Two:return"two";case Hs.Few:return"few";case Hs.Many:return"many";default:return"other"}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function fS(n,e){e=encodeURIComponent(e);for(const t of n.split(";")){const r=t.indexOf("="),[i,s]=-1==r?[t,""]:[t.slice(0,r),t.slice(r+1)];if(i.trim()===e)return decodeURIComponent(s)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */La.\u0275fac=function(e){return new(e||La)(D(Wn))},La.\u0275prov=E({token:La,factory:La.\u0275fac});class Gs{constructor(e,t,r,i){this._iterableDiffers=e,this._keyValueDiffers=t,this._ngEl=r,this._renderer=i,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&(vc(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(t=>this._toggleClass(t.key,t.currentValue)),e.forEachChangedItem(t=>this._toggleClass(t.key,t.currentValue)),e.forEachRemovedItem(t=>{t.previousValue&&this._toggleClass(t.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(t=>{if("string"!=typeof t.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${De(t.item)}`);this._toggleClass(t.item,!0)}),e.forEachRemovedItem(t=>this._toggleClass(t.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(t=>this._toggleClass(t,!0)):Object.keys(e).forEach(t=>this._toggleClass(t,!!e[t])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(t=>this._toggleClass(t,!1)):Object.keys(e).forEach(t=>this._toggleClass(t,!1)))}_toggleClass(e,t){(e=e.trim())&&e.split(/\s+/g).forEach(r=>{t?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}}Gs.\u0275fac=function(e){return new(e||Gs)(y(nn),y(rn),y(ye),y(Cn))},Gs.\u0275dir=T({type:Gs,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class qs{constructor(e){this._viewContainerRef=e,this.ngComponentOutlet=null}ngOnChanges(e){const{_viewContainerRef:t,ngComponentOutletNgModule:r,ngComponentOutletNgModuleFactory:i}=this;if(t.clear(),this._componentRef=void 0,this.ngComponentOutlet){const s=this.ngComponentOutletInjector||t.parentInjector;(e.ngComponentOutletNgModule||e.ngComponentOutletNgModuleFactory)&&(this._moduleRef&&this._moduleRef.destroy(),this._moduleRef=r?function cF(n,e){return new Nw(n,e??null)}(r,pS(s)):i?i.create(pS(s)):void 0),this._componentRef=t.createComponent(this.ngComponentOutlet,{index:t.length,injector:s,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent})}}ngOnDestroy(){this._moduleRef&&this._moduleRef.destroy()}}function pS(n){return n.get(Ls).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */qs.\u0275fac=function(e){return new(e||qs)(y(bt))},qs.\u0275dir=T({type:qs,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},standalone:!0,features:[it]});class BL{constructor(e,t,r,i){this.$implicit=e,this.ngForOf=t,this.index=r,this.count=i}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}class $i{constructor(e,t,r){this._viewContainer=e,this._template=t,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const t=this._viewContainer;e.forEachOperation((r,i,s)=>{if(null==r.previousIndex)t.createEmbeddedView(this._template,new BL(r.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)t.remove(null===i?void 0:i);else if(null!==i){const o=t.get(i);t.move(o,s),mS(o,r)}});for(let r=0,i=t.length;r<i;r++){const o=t.get(r).context;o.index=r,o.count=i,o.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{mS(t.get(r.currentIndex),r)})}static ngTemplateContextGuard(e,t){return!0}}function mS(n,e){n.context.$implicit=e.item}$i.\u0275fac=function(e){return new(e||$i)(y(bt),y(Ut),y(nn))},$i.\u0275dir=T({type:$i,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Pr{constructor(e,t){this._viewContainer=e,this._context=new UL,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){yS("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){yS("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,t){return!0}}Pr.\u0275fac=function(e){return new(e||Pr)(y(bt),y(Ut))},Pr.\u0275dir=T({type:Pr,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});class UL{constructor(){this.$implicit=null,this.ngIf=null}}function yS(n,e){if(e&&!e.createEmbeddedView)throw new Error(`${n} must be a TemplateRef, but received '${De(e)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Fm{constructor(e,t){this._viewContainerRef=e,this._templateRef=t,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}}class kr{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const t=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||t,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),t}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let t=0;t<this._defaultViews.length;t++)this._defaultViews[t].enforceState(e)}}}kr.\u0275fac=function(e){return new(e||kr)},kr.\u0275dir=T({type:kr,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0});class Ws{constructor(e,t,r){this.ngSwitch=r,r._addCase(),this._view=new Fm(e,t)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}Ws.\u0275fac=function(e){return new(e||Ws)(y(bt),y(Ut),y(kr,9))},Ws.\u0275dir=T({type:Ws,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0});class Ks{constructor(e,t,r){r._addDefault(new Fm(e,t))}}Ks.\u0275fac=function(e){return new(e||Ks)(y(bt),y(Ut),y(kr,9))},Ks.\u0275dir=T({type:Ks,selectors:[["","ngSwitchDefault",""]],standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Hi{constructor(e){this._localization=e,this._caseViews={}}set ngPlural(e){this._switchValue=e,this._updateView()}addCase(e,t){this._caseViews[e]=t}_updateView(){this._clearViews();const e=Object.keys(this._caseViews),t=hS(this._switchValue,e,this._localization);this._activateView(this._caseViews[t])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(e){e&&(this._activeView=e,this._activeView.create())}}Hi.\u0275fac=function(e){return new(e||Hi)(y(zs))},Hi.\u0275dir=T({type:Hi,selectors:[["","ngPlural",""]],inputs:{ngPlural:"ngPlural"},standalone:!0});class Zs{constructor(e,t,r,i){this.value=e;const s=!isNaN(Number(e));i.addCase(s?`=${e}`:e,new Fm(r,t))}}Zs.\u0275fac=function(e){return new(e||Zs)(Jo("ngPluralCase"),y(Ut),y(bt),y(Hi,1))},Zs.\u0275dir=T({type:Zs,selectors:[["","ngPluralCase",""]],standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Qs{constructor(e,t,r){this._ngEl=e,this._differs=t,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){const e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){const[r,i]=e.split("."),s=-1===r.indexOf("-")?void 0:wr.DashCase;null!=t?this._renderer.setStyle(this._ngEl.nativeElement,r,i?`${t}${i}`:t,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}}Qs.\u0275fac=function(e){return new(e||Qs)(y(ye),y(rn),y(Cn))},Qs.\u0275dir=T({type:Qs,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ys{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(e.ngTemplateOutlet||e.ngTemplateOutletInjector){const t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),this.ngTemplateOutlet){const{ngTemplateOutlet:r,ngTemplateOutletContext:i,ngTemplateOutletInjector:s}=this;this._viewRef=t.createEmbeddedView(r,i,s?{injector:s}:void 0)}else this._viewRef=null}else this._viewRef&&e.ngTemplateOutletContext&&this.ngTemplateOutletContext&&(this._viewRef.context=this.ngTemplateOutletContext)}}Ys.\u0275fac=function(e){return new(e||Ys)(y(bt))},Ys.\u0275dir=T({type:Ys,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[it]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Rn(n,e){return new v(2100,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zL=new class HL{createSubscription(e,t){return e.then(t,r=>{throw r})}dispose(e){}},GL=new class $L{createSubscription(e,t){return e.subscribe({next:t,error:r=>{throw r}})}dispose(e){e.unsubscribe()}};class Nr{constructor(e){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(e){if(Cc(e))return zL;if(mb(e))return GL;throw Rn()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this._ref.markForCheck())}}Nr.\u0275fac=function(e){return new(e||Nr)(y(Zn,16))},Nr.\u0275pipe=Dt({name:"async",type:Nr,pure:!1,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Fr{transform(e){if(null==e)return null;if("string"!=typeof e)throw Rn();return e.toLowerCase()}}Fr.\u0275fac=function(e){return new(e||Fr)},Fr.\u0275pipe=Dt({name:"lowercase",type:Fr,pure:!0,standalone:!0});const qL=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;class Lr{transform(e){if(null==e)return null;if("string"!=typeof e)throw Rn();return e.replace(qL,t=>t[0].toUpperCase()+t.slice(1).toLowerCase())}}Lr.\u0275fac=function(e){return new(e||Lr)},Lr.\u0275pipe=Dt({name:"titlecase",type:Lr,pure:!0,standalone:!0});class Vr{transform(e){if(null==e)return null;if("string"!=typeof e)throw Rn();return e.toUpperCase()}}Vr.\u0275fac=function(e){return new(e||Vr)},Vr.\u0275pipe=Dt({name:"uppercase",type:Vr,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const WL=new S("DATE_PIPE_DEFAULT_TIMEZONE");class Yn{constructor(e,t){this.locale=e,this.defaultTimezone=t}transform(e,t="mediumDate",r,i){if(null==e||""===e||e!=e)return null;try{return _L(e,t,i||this.locale,r??this.defaultTimezone??void 0)}catch(s){throw Rn(0,s.message)}}}Yn.\u0275fac=function(e){return new(e||Yn)(y(Wn,16),y(WL,24))},Yn.\u0275pipe=Dt({name:"date",type:Yn,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const KL=/#/g;class Br{constructor(e){this._localization=e}transform(e,t,r){if(null==e)return"";if("object"!=typeof t||null===t)throw Rn();return t[hS(e,Object.keys(t),this._localization,r)].replace(KL,e.toString())}}Br.\u0275fac=function(e){return new(e||Br)(y(zs,16))},Br.\u0275pipe=Dt({name:"i18nPlural",type:Br,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class jr{transform(e,t){if(null==e)return"";if("object"!=typeof t||"string"!=typeof e)throw Rn();return t.hasOwnProperty(e)?t[e]:t.hasOwnProperty("other")?t.other:""}}jr.\u0275fac=function(e){return new(e||jr)},jr.\u0275pipe=Dt({name:"i18nSelect",type:jr,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Xs{transform(e){return JSON.stringify(e,null,2)}}Xs.\u0275fac=function(e){return new(e||Xs)},Xs.\u0275pipe=Dt({name:"json",type:Xs,pure:!1,standalone:!0});class Js{constructor(e){this.differs=e,this.keyValues=[],this.compareFn=_S}transform(e,t=_S){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const r=this.differ.diff(e),i=t!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(s=>{this.keyValues.push(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ZL(n,e){return{key:n,value:e}}(s.key,s.currentValue))})),(r||i)&&(this.keyValues.sort(t),this.compareFn=t),this.keyValues}}function _S(n,e){const t=n.key,r=e.key;if(t===r)return 0;if(void 0===t)return 1;if(void 0===r)return-1;if(null===t)return 1;if(null===r)return-1;if("string"==typeof t&&"string"==typeof r)return t<r?-1:1;if("number"==typeof t&&"number"==typeof r)return t-r;if("boolean"==typeof t&&"boolean"==typeof r)return t<r?-1:1;const i=String(t),s=String(r);return i==s?0:i<s?-1:1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Js.\u0275fac=function(e){return new(e||Js)(y(rn,16))},Js.\u0275pipe=Dt({name:"keyvalue",type:Js,pure:!1,standalone:!0});class Ur{constructor(e){this._locale=e}transform(e,t,r){if(!Lm(e))return null;r=r||this._locale;try{return function NL(n,e,t){return Pm(n,km(Am(e,Fc.Decimal),on(e,Pe.MinusSign)),e,Pe.Group,Pe.Decimal,t)}(Vm(e),r,t)}catch(i){throw Rn(0,i.message)}}}Ur.\u0275fac=function(e){return new(e||Ur)(y(Wn,16))},Ur.\u0275pipe=Dt({name:"number",type:Ur,pure:!0,standalone:!0});class $r{constructor(e){this._locale=e}transform(e,t,r){if(!Lm(e))return null;r=r||this._locale;try{return function kL(n,e,t){return Pm(n,km(Am(e,Fc.Percent),on(e,Pe.MinusSign)),e,Pe.Group,Pe.Decimal,t,!0).replace(new RegExp("%","g"),on(e,Pe.PercentSign))}(Vm(e),r,t)}catch(i){throw Rn(0,i.message)}}}$r.\u0275fac=function(e){return new(e||$r)(y(Wn,16))},$r.\u0275pipe=Dt({name:"percent",type:$r,pure:!0,standalone:!0});class Hr{constructor(e,t="USD"){this._locale=e,this._defaultCurrencyCode=t}transform(e,t=this._defaultCurrencyCode,r="symbol",i,s){if(!Lm(e))return null;s=s||this._locale,"boolean"==typeof r&&(r=r?"symbol":"code");let o=t||this._defaultCurrencyCode;"code"!==r&&(o="symbol"===r||"symbol-narrow"===r?fL(o,"symbol"===r?"wide":"narrow",s):r);try{return PL(Vm(e),s,o,t,i)}catch(a){throw Rn(0,a.message)}}}function Lm(n){return!(null==n||""===n||n!=n)}function Vm(n){if("string"==typeof n&&!isNaN(Number(n)-parseFloat(n)))return Number(n);if("number"!=typeof n)throw new Error(`${n} is not a number`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Hr.\u0275fac=function(e){return new(e||Hr)(y(Wn,16),y(m1,16))},Hr.\u0275pipe=Dt({name:"currency",type:Hr,pure:!0,standalone:!0});class Xn{transform(e,t,r){if(null==e)return null;if(!this.supports(e))throw Rn();return e.slice(t,r)}supports(e){return"string"==typeof e||Array.isArray(e)}}Xn.\u0275fac=function(e){return new(e||Xn)},Xn.\u0275pipe=Dt({name:"slice",type:Xn,pure:!1,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class zr{}zr.\u0275fac=function(e){return new(e||zr)},zr.\u0275mod=oe({type:zr,imports:[Gs,qs,$i,Pr,Ys,Qs,kr,Ws,Ks,Hi,Zs,Nr,Vr,Fr,Xs,Xn,Ur,$r,Lr,Hr,Yn,Br,jr,Js],exports:[Gs,qs,$i,Pr,Ys,Qs,kr,Ws,Ks,Hi,Zs,Nr,Vr,Fr,Xs,Xn,Ur,$r,Lr,Hr,Yn,Br,jr,Js]}),zr.\u0275inj=re({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const vS="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Oi("14.3.0");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Bm{}Bm.\u0275prov=E({token:Bm,providedIn:"root",factory:()=>new tV(D(B),window)});class tV{constructor(e,t){this.document=e,this.window=t,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(e){this.supportsScrolling()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(!this.supportsScrolling())return;const t=function nV(n,e){const t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if("function"==typeof n.createTreeWalker&&n.body&&(n.body.createShadowRoot||n.body.attachShadow)){const r=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT);let i=r.currentNode;for(;i;){const s=i.shadowRoot;if(s){const o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}i=r.nextNode()}}return null}(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=e)}}scrollToElement(e){const t=e.getBoundingClientRect(),r=t.left+this.window.pageXOffset,i=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(r-s[0],i-s[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const e=DS(this.window.history)||DS(Object.getPrototypeOf(this.window.history));return!(!e||!e.writable&&!e.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function DS(n){return Object.getOwnPropertyDescriptor(n,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class CS{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _h(n,e){return jm(n)?new URL(n):new URL(n,e.location.href)}function jm(n){return/^https?:\/\//.test(n)}function bS(n){return jm(n)?new URL(n).hostname:n}function sV(n){return n.startsWith("/")?n.slice(1):n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Bc=n=>n.src,wS=new S("ImageLoader",{providedIn:"root",factory:()=>Bc});function vh(n,e){return function(r){return function rV(n){if("string"!=typeof n||""===n.trim())return!1;try{return new URL(n),!0}catch{return!1}}(r)||function oV(n,e){throw new v(2959,!1)}(),r=function iV(n){return n.endsWith("/")?n.slice(0,-1):n}(r),[{provide:wS,useValue:o=>(jm(o.src)&&function aV(n,e){throw new v(2959,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(0,o.src),n(r,{...o,src:sV(o.src)}))}]}}vh(function lV(n,e){let t="format=auto";return e.width&&(t+=`,width=${e.width}`),`${n}/cdn-cgi/image/${t}/${e.src}`
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});vh(function hV(n,e){let t="f_auto,q_auto";return e.width&&(t+=`,w_${e.width}`),`${n}/image/upload/${t}/${e.src}`
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});vh(function mV(n,e){let t="tr:q-auto";return e.width&&(t+=`,w-${e.width}`),`${n}/${t}/${e.src}`
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});vh(function DV(n,e){const t=new URL(`${n}/${e.src}`);return t.searchParams.set("auto","format"),e.width&&t.searchParams.set("w",e.width.toString()),t.href
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});function ke(n,e=!0){return`The NgOptimizedImage directive ${e?`(activated on an <img> element with the \`ngSrc="${n}"\`) `:""}has detected that`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ES(n){throw new v(2958,`Unexpected invocation of the ${n} in the prod mode. Please make sure that the prod mode is enabled for production builds.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class jc{constructor(){this.images=new Map,this.alreadyWarned=new Set,this.window=null,this.observer=null,ES("LCP checker");const e=Y(B).defaultView;typeof e<"u"&&typeof PerformanceObserver<"u"&&(this.window=e,this.observer=this.initPerformanceObserver())}initPerformanceObserver(){const e=new PerformanceObserver(t=>{const r=t.getEntries();if(0===r.length)return;const s=r[r.length-1].element?.src??"";s.startsWith("data:")||s.startsWith("blob:")||this.images.get(s)&&!this.alreadyWarned.has(s)&&(this.alreadyWarned.add(s),function CV(n){const e=ke(n);console.warn(Mt(2955,`${e} this image is the Largest Contentful Paint (LCP) element but was not marked "priority". This image should be marked "priority" in order to prioritize its loading. To fix this, add the "priority" attribute.`))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s))});return e.observe({type:"largest-contentful-paint",buffered:!0}),e}registerImage(e,t){!this.observer||this.images.set(_h(e,this.window).href,t)}unregisterImage(e){!this.observer||this.images.delete(_h(e,this.window).href)}ngOnDestroy(){!this.observer||(this.observer.disconnect(),this.images.clear(),this.alreadyWarned.clear())}}jc.\u0275fac=function(e){return new(e||jc)},jc.\u0275prov=E({token:jc,factory:jc.\u0275fac,providedIn:"root"});const bV=new Set(["localhost","127.0.0.1","0.0.0.0"]),wV=new S("PRECONNECT_CHECK_BLOCKLIST");class Uc{constructor(){this.document=Y(B),this.preconnectLinks=null,this.alreadySeen=new Set,this.window=null,this.blocklist=new Set(bV),ES("preconnect link checker");const e=this.document.defaultView;typeof e<"u"&&(this.window=e);const t=Y(wV,{optional:!0});t&&this.populateBlocklist(t)}populateBlocklist(e){Array.isArray(e)?SS(e,t=>{this.blocklist.add(bS(t))}):this.blocklist.add(bS(e))}assertPreconnect(e,t){if(!this.window)return;const r=_h(e,this.window);this.blocklist.has(r.hostname)||this.alreadySeen.has(r.origin)||(this.alreadySeen.add(r.origin),this.preconnectLinks||(this.preconnectLinks=this.queryPreconnectLinks()),this.preconnectLinks.has(r.origin)||console.warn(Mt(2956,`${ke(t)} there is no preconnect tag present for this image. Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document:\n  <link rel="preconnect" href="${r.origin}">`)))}queryPreconnectLinks(){const e=new Set,r=Array.from(this.document.querySelectorAll("link[rel=preconnect]"));for(let i of r){const s=_h(i.href,this.window);e.add(s.origin)}return e}ngOnDestroy(){this.preconnectLinks?.clear(),this.alreadySeen.clear()}}function SS(n,e){for(let t of n)Array.isArray(t)?SS(t,e):e(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Uc.\u0275fac=function(e){return new(e||Uc)},Uc.\u0275prov=E({token:Uc,factory:Uc.\u0275fac,providedIn:"root"});const EV=new S("NG_OPTIMIZED_PRELOADED_IMAGES",{providedIn:"root",factory:()=>new Set});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Va{constructor(){this.preloadedImages=Y(EV),this.document=Y(B)}createPreloadLinkTag(e,t,r,i){if(this.preloadedImages.has(t))return;this.preloadedImages.add(t);const s=e.createElement("link");e.setAttribute(s,"as","image"),e.setAttribute(s,"href",t),e.setAttribute(s,"rel","preload"),e.setAttribute(s,"fetchpriority","high"),i&&e.setAttribute(s,"imageSizes",i),r&&e.setAttribute(s,"imageSrcset",r),e.appendChild(this.document.head,s)}}Va.\u0275fac=function(e){return new(e||Va)},Va.\u0275prov=E({token:Va,factory:Va.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const IS=/^((\s*\d+w\s*(,|$)){1,})$/,MV=[1,2],RS={breakpoints:[16,32,48,64,96,128,256,384,640,750,828,1080,1200,1920,2048,3840]},xV=new S("ImageConfig",{providedIn:"root",factory:()=>RS});class Dh{constructor(){this.imageLoader=Y(wS),this.config=function OV(n){let e={};return n.breakpoints&&(e.breakpoints=n.breakpoints.sort((t,r)=>t-r)),Object.assign({},RS,n,e)}(Y(xV)),this.renderer=Y(Cn),this.imgElement=Y(ye).nativeElement,this.injector=Y(Ne),this.isServer=function eV(n){return"server"===n}(Y(kc)),this.preloadLinkChecker=Y(Va),this.lcpObserver=null,this._renderedSrc=null,this._priority=!1,this._disableOptimizedSrcset=!1,this._fill=!1}set width(e){this._width=xS(e)}get width(){return this._width}set height(e){this._height=xS(e)}get height(){return this._height}set priority(e){this._priority=$m(e)}get priority(){return this._priority}set disableOptimizedSrcset(e){this._disableOptimizedSrcset=$m(e)}get disableOptimizedSrcset(){return this._disableOptimizedSrcset}set fill(e){this._fill=$m(e)}get fill(){return this._fill}ngOnInit(){this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||(this.sizes="100vw"):(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("ng-img","true");const e=this.getRewrittenSrc();let t;this.setHostAttribute("src",e),this.sizes&&this.setHostAttribute("sizes",this.sizes),this.ngSrcset?t=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(t=this.getAutomaticSrcset()),t&&this.setHostAttribute("srcset",t),this.isServer&&this.priority&&this.preloadLinkChecker.createPreloadLinkTag(this.renderer,e,t,this.sizes)}ngOnChanges(e){}callImageLoader(e){let t=e;return this.loaderParams&&(t.loaderParams=this.loaderParams),this.imageLoader(t)}getLoadingBehavior(){return this.priority||void 0===this.loading?this.priority?"eager":"lazy":this.loading}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){const e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){const e=IS.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>""!==r).map(r=>{r=r.trim();const i=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:i})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){const{breakpoints:e}=this.config;let t=e;return"100vw"===this.sizes?.trim()&&(t=e.filter(i=>i>=640)),t.map(i=>`${this.callImageLoader({src:this.ngSrc,width:i})} ${i}w`).join(", ")}getFixedSrcset(){return MV.map(t=>`${this.callImageLoader({src:this.ngSrc,width:this.width*t})} ${t}x`).join(", ")}shouldGenerateAutomaticSrcset(){return!this._disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Bc&&!(this.width>1920||this.height>1080)}ngOnDestroy(){}setHostAttribute(e,t){this.renderer.setAttribute(this.imgElement,e,t)}}function xS(n){return"string"==typeof n?parseInt(n,10):n}function $m(n){return null!=n&&"false"!=`${n}`}Dh.\u0275fac=function(e){return new(e||Dh)},Dh.\u0275dir=T({type:Dh,selectors:[["img","ngSrc",""]],hostVars:8,hostBindings:function(e,t){2&e&&Gd("position",t.fill?"absolute":null)("width",t.fill?"100%":null)("height",t.fill?"100%":null)("inset",t.fill?"0px":null)},inputs:{ngSrc:"ngSrc",ngSrcset:"ngSrcset",sizes:"sizes",width:"width",height:"height",loading:"loading",priority:"priority",loaderParams:"loaderParams",disableOptimizedSrcset:"disableOptimizedSrcset",fill:"fill",src:"src",srcset:"srcset"},standalone:!0,features:[it]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Hm extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class FV extends class X1{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function Y1(n){lh||(lh=n)}(new Hm)}onAndCancel(e,t,r){return e.addEventListener(t,r,!1),()=>{e.removeEventListener(t,r,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getBaseHref(e){const t=function LV(){return Hc=Hc||document.querySelector("base"),Hc?Hc.getAttribute("href"):null}();return null==t?null:function VV(n){Ch=Ch||document.createElement("a"),Ch.setAttribute("href",n);const e=Ch.pathname;return"/"===e.charAt(0)?e:`/${e}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)}resetBaseElement(){Hc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return fS(document.cookie,e)}}let Ch,Hc=null;const OS=new S("TRANSITION_ID");const jV=[{provide:rh,useFactory:function BV(n,e,t){return()=>{t.get(Ar).donePromise.then(()=>{const r=In(),i=e.querySelectorAll(`style[ng-transition="${n}"]`);for(let s=0;s<i.length;s++)r.remove(i[s])})}},deps:[OS,B,Ne],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ba{build(){return new XMLHttpRequest}}Ba.\u0275fac=function(e){return new(e||Ba)},Ba.\u0275prov=E({token:Ba,factory:Ba.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const zc=new S("EventManagerPlugins");class Gr{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(r=>r.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,r){return this._findPluginFor(t).addEventListener(e,t,r)}addGlobalEventListener(e,t,r){return this._findPluginFor(t).addGlobalEventListener(e,t,r)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const r=this._plugins;for(let i=0;i<r.length;i++){const s=r[i];if(s.supports(e))return this._eventNameToPlugin.set(e,s),s}throw new Error(`No event manager plugin found for event ${e}`)}}Gr.\u0275fac=function(e){return new(e||Gr)(D(zc),D(ee))},Gr.\u0275prov=E({token:Gr,factory:Gr.\u0275fac});class zm{constructor(e){this._doc=e}addGlobalEventListener(e,t,r){const i=In().getGlobalEventTarget(this._doc,e);if(!i)throw new Error(`Unsupported event target ${i} for event ${t}`);return this.addEventListener(i,t,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class eo{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(r=>{this._stylesSet.has(r)||(this._stylesSet.add(r),t.add(r))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}eo.\u0275fac=function(e){return new(e||eo)},eo.\u0275prov=E({token:eo,factory:eo.\u0275fac});class Jn extends eo{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,t,r){e.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,r.push(t.appendChild(s))})}addHost(e){const t=[];this._addStylesToHost(this._stylesSet,e,t),this._hostNodes.set(e,t)}removeHost(e){const t=this._hostNodes.get(e);t&&t.forEach(PS),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((t,r)=>{this._addStylesToHost(e,r,t)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(PS))}}function PS(n){In().remove(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Jn.\u0275fac=function(e){return new(e||Jn)(D(B))},Jn.\u0275prov=E({token:Jn,factory:Jn.\u0275fac});const Gm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},qm=/%COMP%/g,$V="_nghost-%COMP%",HV="_ngcontent-%COMP%";function bh(n,e,t){for(let r=0;r<e.length;r++){let i=e[r];Array.isArray(i)?bh(n,i,t):(i=i.replace(qm,n),t.push(i))}return t}function FS(n){return e=>{if("__ngUnwrap__"===e)return n;!1===n(e)&&(e.preventDefault(),e.returnValue=!1)}}class qr{constructor(e,t,r){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.rendererByCompId=new Map,this.defaultRenderer=new Wm(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case Ln.Emulated:{let r=this.rendererByCompId.get(t.id);return r||(r=new WV(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,r)),r.applyToHost(e),r}case 1:case Ln.ShadowDom:return new KV(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const r=bh(t.id,t.styles,[]);this.sharedStylesHost.addStyles(r),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}qr.\u0275fac=function(e){return new(e||qr)(D(Gr),D(Jn),D(ka))},qr.\u0275prov=E({token:qr,factory:qr.\u0275fac});class Wm{constructor(e){this.eventManager=e,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,t){return t?document.createElementNS(Gm[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){(VS(e)?e.content:e).appendChild(t)}insertBefore(e,t,r){e&&(VS(e)?e.content:e).insertBefore(t,r)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let r="string"==typeof e?document.querySelector(e):e;if(!r)throw new Error(`The selector "${e}" did not match any elements`);return t||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,r,i){if(i){t=i+":"+t;const s=Gm[i];s?e.setAttributeNS(s,t,r):e.setAttribute(t,r)}else e.setAttribute(t,r)}removeAttribute(e,t,r){if(r){const i=Gm[r];i?e.removeAttributeNS(i,t):e.removeAttribute(`${r}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,r,i){i&(wr.DashCase|wr.Important)?e.style.setProperty(t,r,i&wr.Important?"important":""):e.style[t]=r}removeStyle(e,t,r){r&wr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,r){e[t]=r}setValue(e,t){e.nodeValue=t}listen(e,t,r){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,FS(r)):this.eventManager.addEventListener(e,t,FS(r))}}"@".charCodeAt(0);function VS(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class WV extends Wm{constructor(e,t,r,i){super(e),this.component=r;const s=bh(i+"-"+r.id,r.styles,[]);t.addStyles(s),this.contentAttr=function zV(n){return HV.replace(qm,n)}(i+"-"+r.id),this.hostAttr=function GV(n){return $V.replace(qm,n)}(i+"-"+r.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const r=super.createElement(e,t);return super.setAttribute(r,this.contentAttr,""),r}}class KV extends Wm{constructor(e,t,r,i){super(e),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=bh(i.id,i.styles,[]);for(let o=0;o<s.length;o++){const a=document.createElement("style");a.textContent=s[o],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,r){return super.insertBefore(this.nodeOrShadowRoot(e),t,r)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ja extends zm{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r){return e.addEventListener(t,r,!1),()=>this.removeEventListener(e,t,r)}removeEventListener(e,t,r){return e.removeEventListener(t,r)}}ja.\u0275fac=function(e){return new(e||ja)(D(B))},ja.\u0275prov=E({token:ja,factory:ja.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const BS=["alt","control","meta","shift"],ZV={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},QV={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};class ln extends zm{constructor(e){super(e)}supports(e){return null!=ln.parseEventName(e)}addEventListener(e,t,r){const i=ln.parseEventName(t),s=ln.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>In().onAndCancel(e,i.domEventName,s))}static parseEventName(e){const t=e.toLowerCase().split("."),r=t.shift();if(0===t.length||"keydown"!==r&&"keyup"!==r)return null;const i=ln._normalizeKey(t.pop());let s="",o=t.indexOf("code");if(o>-1&&(t.splice(o,1),s="code."),BS.forEach(l=>{const c=t.indexOf(l);c>-1&&(t.splice(c,1),s+=l+".")}),s+=i,0!=t.length||0===i.length)return null;const a={};return a.domEventName=r,a.fullKey=s,a}static matchEventFullKeyCode(e,t){let r=ZV[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(r=e.code,i="code."),!(null==r||!r)&&(r=r.toLowerCase()," "===r?r="space":"."===r&&(r="dot"),BS.forEach(s=>{if(s!==r){(0,QV[s])(e)&&(i+=s+".")}}),i+=r,i===t)}static eventCallback(e,t,r){return i=>{ln.matchEventFullKeyCode(i,e)&&r.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}}ln.\u0275fac=function(e){return new(e||ln)(D(B))},ln.\u0275prov=E({token:ln,factory:ln.\u0275fac});const US=[{provide:kc,useValue:vS},{provide:SE,useValue:function YV(){Hm.makeCurrent()},multi:!0},{provide:B,useFactory:function JV(){return function Vx(n){Yp=n}(document),document},deps:[]}],eB=FE(Z1,"browser",US),$S=new S(""),HS=[{provide:ih,useClass:class UV{addToWindow(e){be.getAngularTestability=(r,i=!0)=>{const s=e.findTestabilityInTree(r,i);if(null==s)throw new Error("Could not find testability for element.");return s},be.getAllAngularTestabilities=()=>e.getAllTestabilities(),be.getAllAngularRootElements=()=>e.getAllRootElements();be.frameworkStabilizers||(be.frameworkStabilizers=[]),be.frameworkStabilizers.push(r=>{const i=be.getAllAngularTestabilities();let s=i.length,o=!1;const a=function(l){o=o||l,s--,0==s&&r(o)};i.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(e,t,r){if(null==t)return null;return e.getTestability(t)??(r?In().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}},deps:[]},{provide:OE,useClass:Bi,deps:[ee,ji,ih]},{provide:Bi,useClass:Bi,deps:[ee,ji,ih]}],zS=[{provide:og,useValue:"root"},{provide:fa,useFactory:function XV(){return new fa},deps:[]},{provide:zc,useClass:ja,multi:!0,deps:[B,ee,kc]},{provide:zc,useClass:ln,multi:!0,deps:[B]},{provide:qr,useClass:qr,deps:[Gr,Jn,ka]},{provide:pc,useExisting:qr},{provide:eo,useExisting:Jn},{provide:Jn,useClass:Jn,deps:[B]},{provide:Gr,useClass:Gr,deps:[zc,ee]},{provide:CS,useClass:Ba,deps:[]},[]];class cn{constructor(e){false}static withServerTransition(e){return{ngModule:cn,providers:[{provide:ka,useValue:e.appId},{provide:OS,useExisting:ka},jV]}}}cn.\u0275fac=function(e){return new(e||cn)(D($S,12))},cn.\u0275mod=oe({type:cn,exports:[zr,js]}),cn.\u0275inj=re({providers:[...zS,...HS],imports:[zr,js]});class Gc{constructor(e){this._doc=e,this._dom=In()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((r,i)=>(i&&r.push(this._getOrCreateElement(i,t)),r),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const r=this.getTag(t);return r?this._setMetaElementAttributes(e,r):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const s=this._parseSelector(e),o=this.getTags(s).filter(a=>this._containsAttributes(e,a))[0];if(void 0!==o)return o}const r=this._dom.createElement("meta");return this._setMetaElementAttributes(e,r),this._doc.getElementsByTagName("head")[0].appendChild(r),r}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(r=>t.setAttribute(this._getMetaKeyMap(r),e[r])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(r=>t.getAttribute(this._getMetaKeyMap(r))===e[r])}_getMetaKeyMap(e){return nB[e]||e}}Gc.\u0275fac=function(e){return new(e||Gc)(D(B))},Gc.\u0275prov=E({token:Gc,factory:function(e){let t=null;return t=e?new e:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function tB(){return new Gc(D(B))}(),t},providedIn:"root"});const nB={httpEquiv:"http-equiv"};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ua{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}Ua.\u0275fac=function(e){return new(e||Ua)(D(B))},Ua.\u0275prov=E({token:Ua,factory:function(e){let t=null;return t=e?new e:function rB(){return new Ua(D(B))}(),t},providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
typeof window<"u"&&window;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class qc{constructor(){this.store={},this.onSerializeCallbacks={}}get(e,t){return void 0!==this.store[e]?this.store[e]:t}set(e,t){this.store[e]=t}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}get isEmpty(){return 0===Object.keys(this.store).length}onSerialize(e,t){this.onSerializeCallbacks[e]=t}toJson(){for(const e in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(t){console.warn("Exception in onSerialize callback: ",t)}return JSON.stringify(this.store)}}qc.\u0275fac=function(e){return new(e||qc)},qc.\u0275prov=E({token:qc,factory:function(){return(()=>{const n=Y(B),e=Y(ka),t=new qc;return t.store=function cB(n,e){const t=n.getElementById(e+"-state");let r={};if(t&&t.textContent)try{r=JSON.parse(function lB(n){const e={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return n.replace(/&[^;]+;/g,t=>e[t])}(t.textContent))}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return r}(n,e),t})()},providedIn:"root"});class Wc{}Wc.\u0275fac=function(e){return new(e||Wc)},Wc.\u0275mod=oe({type:Wc}),Wc.\u0275inj=re({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const dB={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},Qm=new S("HammerGestureConfig"),WS=new S("HammerLoader");class $a{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const r in this.overrides)t.get(r).set(this.overrides[r]);return t}}$a.\u0275fac=function(e){return new(e||$a)},$a.\u0275prov=E({token:$a,factory:$a.\u0275fac});class Ha extends zm{constructor(e,t,r,i){super(e),this._config=t,this.console=r,this.loader=i,this._loaderPromise=null}supports(e){return!(!dB.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,r){const i=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let s=!1,o=()=>{s=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?s||(o=this.addEventListener(e,t,r)):o=()=>{}}).catch(()=>{o=()=>{}})),()=>{o()}}return i.runOutsideAngular(()=>{const s=this._config.buildHammer(e),o=function(a){i.runGuarded(function(){r(a)})};return s.on(t,o),()=>{s.off(t,o),"function"==typeof s.destroy&&s.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}Ha.\u0275fac=function(e){return new(e||Ha)(D(B),D(Qm),D(Li),D(WS,8))},Ha.\u0275prov=E({token:Ha,factory:Ha.\u0275fac});class Kc{}Kc.\u0275fac=function(e){return new(e||Kc)},Kc.\u0275mod=oe({type:Kc}),Kc.\u0275inj=re({providers:[{provide:zc,useClass:Ha,multi:!0,deps:[B,Qm,Li,[new oa,WS]]},{provide:Qm,useClass:$a,deps:[]}]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class za{}za.\u0275fac=function(e){return new(e||za)},za.\u0275prov=E({token:za,factory:function(e){let t=null;return t=e?new(e||za):D(Ga),t},providedIn:"root"});class Ga extends za{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case Ft.NONE:return t;case Ft.HTML:return jn(t,"HTML")?Nt(t):XD(this._doc,String(t)).toString();case Ft.STYLE:return jn(t,"Style")?Nt(t):t;case Ft.SCRIPT:if(jn(t,"Script"))return Nt(t);throw new Error("unsafe value used in a script context");case Ft.URL:return jn(t,"URL")?Nt(t):Ad(String(t));case Ft.RESOURCE_URL:if(jn(t,"ResourceURL"))return Nt(t);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return function Gx(n){return new Bx(n)}(e)}bypassSecurityTrustStyle(e){return function qx(n){return new jx(n)}(e)}bypassSecurityTrustScript(e){return function Wx(n){return new Ux(n)}(e)}bypassSecurityTrustUrl(e){return function Kx(n){return new $x(n)}(e)}bypassSecurityTrustResourceUrl(e){return function Zx(n){return new Hx(n)}(e)}}Ga.\u0275fac=function(e){return new(e||Ga)(D(B))},Ga.\u0275prov=E({token:Ga,factory:function(e){let t=null;return t=e?new e:function hB(n){return new Ga(n.get(B))}(D(Ne)),t},providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Oi("14.3.0");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xe(n){return null!=n&&"false"!=`${n}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gi(n,e=0){return function fB(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)?Number(n):e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Ue(n){return n instanceof ye?n.nativeElement:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function x(...n){return Ve(n,Gl(n))}const{isArray:gB}=Array;function Ym(n){return G(e=>function mB(n,e){return gB(e)?n(...e):n(e)}(n,e))}const yB=["addListener","removeListener"],_B=["addEventListener","removeEventListener"],vB=["on","off"];function wh(n,e,t,r){if(te(t)&&(r=t,t=void 0),r)return wh(n,e,t).pipe(Ym(r));const[i,s]=function bB(n){return te(n.addEventListener)&&te(n.removeEventListener)}(n)?_B.map(o=>a=>n[o](e,a,t)):function DB(n){return te(n.addListener)&&te(n.removeListener)}(n)?yB.map(KS(n,e)):function CB(n){return te(n.on)&&te(n.off)}(n)?vB.map(KS(n,e)):[];if(!i&&zf(n))return We(o=>wh(o,e,t))(vt(n));if(!i)throw new TypeError("Invalid event target");return new ne(o=>{const a=(...l)=>o.next(1<l.length?l:l[0]);return i(a),()=>s(a)})}function KS(n,e){return t=>r=>n[t](e,r)}class wB extends Le{constructor(e,t){super()}schedule(e,t=0){return this}}const Eh={setInterval(n,e,...t){const{delegate:r}=Eh;return r?.setInterval?r.setInterval(n,e,...t):setInterval(n,e,...t)},clearInterval(n){const{delegate:e}=Eh;return(e?.clearInterval||clearInterval)(n)},delegate:void 0};class Xm extends wB{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var r;if(this.closed)return this;this.state=e;const i=this.id,s=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(s,i,t)),this.pending=!0,this.delay=t,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(s,this.id,t),this}requestAsyncId(e,t,r=0){return Eh.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,t,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return t;null!=t&&Eh.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(e,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let i,r=!1;try{this.work(e)}catch(s){r=!0,i=s||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:e,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,Bo(r,this),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}}const Zc={schedule(n){let e=requestAnimationFrame,t=cancelAnimationFrame;const{delegate:r}=Zc;r&&(e=r.requestAnimationFrame,t=r.cancelAnimationFrame);const i=e(s=>{t=void 0,n(s)});return new Le(()=>t?.(i))},requestAnimationFrame(...n){const{delegate:e}=Zc;return(e?.requestAnimationFrame||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:e}=Zc;return(e?.cancelAnimationFrame||cancelAnimationFrame)(...n)},delegate:void 0};const Jm={now:()=>(Jm.delegate||Date).now(),delegate:void 0};class Qc{constructor(e,t=Qc.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,r){return new this.schedulerActionCtor(this,e).schedule(r,t)}}Qc.now=Jm.now;class ey extends Qc{constructor(e,t=Qc.now){super(e,t),this.actions=[],this._active=!1}flush(e){const{actions:t}=this;if(this._active)return void t.push(e);let r;this._active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}}const ZS=new class SB extends ey{flush(e){this._active=!0;const t=this._scheduled;this._scheduled=void 0;const{actions:r}=this;let i;e=e||r.shift();do{if(i=e.execute(e.state,e.delay))break}while((e=r[0])&&e.id===t&&r.shift());if(this._active=!1,i){for(;(e=r[0])&&e.id===t&&r.shift();)e.unsubscribe();throw i}}}(class EB extends Xm{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,r=0){return null!==r&&r>0?super.requestAsyncId(e,t,r):(e.actions.push(this),e._scheduled||(e._scheduled=Zc.requestAnimationFrame(()=>e.flush(void 0))))}recycleAsyncId(e,t,r=0){var i;if(null!=r?r>0:this.delay>0)return super.recycleAsyncId(e,t,r);const{actions:s}=e;null!=t&&(null===(i=s[s.length-1])||void 0===i?void 0:i.id)!==t&&(Zc.cancelAnimationFrame(t),e._scheduled=void 0)}});let ty,MB=1;const Sh={};function QS(n){return n in Sh&&(delete Sh[n],!0)}const IB={setImmediate(n){const e=MB++;return Sh[e]=!0,ty||(ty=Promise.resolve()),ty.then(()=>QS(e)&&n()),e},clearImmediate(n){QS(n)}},{setImmediate:AB,clearImmediate:TB}=IB,Mh={setImmediate(...n){const{delegate:e}=Mh;return(e?.setImmediate||AB)(...n)},clearImmediate(n){const{delegate:e}=Mh;return(e?.clearImmediate||TB)(n)},delegate:void 0};const OB=new class xB extends ey{flush(e){this._active=!0;const t=this._scheduled;this._scheduled=void 0;const{actions:r}=this;let i;e=e||r.shift();do{if(i=e.execute(e.state,e.delay))break}while((e=r[0])&&e.id===t&&r.shift());if(this._active=!1,i){for(;(e=r[0])&&e.id===t&&r.shift();)e.unsubscribe();throw i}}}(class RB extends Xm{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,r=0){return null!==r&&r>0?super.requestAsyncId(e,t,r):(e.actions.push(this),e._scheduled||(e._scheduled=Mh.setImmediate(e.flush.bind(e,void 0))))}recycleAsyncId(e,t,r=0){var i;if(null!=r?r>0:this.delay>0)return super.recycleAsyncId(e,t,r);const{actions:s}=e;null!=t&&(null===(i=s[s.length-1])||void 0===i?void 0:i.id)!==t&&(Mh.clearImmediate(t),e._scheduled=void 0)}});function YS(n){return!!n&&(n instanceof ne||te(n.lift)&&te(n.subscribe))}function XS(n,e=Ei){return n=n??PB,Ie((t,r)=>{let i,s=!0;t.subscribe(Se(r,o=>{const a=e(o);(s||!n(i,a))&&(s=!1,i=a,r.next(o))}))})}function PB(n,e){return n===e}const Ih=new ey(Xm),kB=Ih;function JS(n=0,e,t=kB){let r=-1;return null!=e&&(av(e)?t=e:r=e),new ne(i=>{let s=function FB(n){return n instanceof Date&&!isNaN(n)}(n)?+n-t.now():n;s<0&&(s=0);let o=0;return t.schedule(function(){i.closed||(i.next(o++),0<=r?this.schedule(void 0,r):i.complete())},s)})}function ny(n,e=Ih){return function NB(n){return Ie((e,t)=>{let r=!1,i=null,s=null,o=!1;const a=()=>{if(s?.unsubscribe(),s=null,r){r=!1;const c=i;i=null,t.next(c)}o&&t.complete()},l=()=>{s=null,o&&t.complete()};e.subscribe(Se(t,c=>{r=!0,i=c,s||vt(n(c)).subscribe(s=Se(t,a,l))},()=>{o=!0,(!r||!s||s.closed)&&t.complete()}))})}(()=>JS(n,e))}function xn(n,e){return Ie((t,r)=>{let i=0;t.subscribe(Se(r,s=>n.call(e,s,i++)&&r.next(s)))})}function qi(n){return Ie((e,t)=>{vt(n).subscribe(Se(t,()=>t.complete(),Lf)),!t.closed&&e.subscribe(t)})}function ry(...n){return function LB(){return jo(1)}()(Ve(n,Gl(n)))}function qa(...n){const e=Gl(n);return Ie((t,r)=>{(e?ry(n,t,e):ry(n,t)).subscribe(r)})}function un(n,e){return Ie((t,r)=>{let i=null,s=0,o=!1;const a=()=>o&&!i&&r.complete();t.subscribe(Se(r,l=>{i?.unsubscribe();let c=0;const u=s++;vt(n(l,u)).subscribe(i=Se(r,d=>r.next(e?e(l,d,u,c++):d),()=>{i=null,a()}))},()=>{o=!0,a()}))})}class BB extends N{constructor(e=1/0,t=1/0,r=Jm){super(),this._bufferSize=e,this._windowTime=t,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,t)}next(e){const{isStopped:t,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:s,_windowTime:o}=this;t||(r.push(e),!i&&r.push(s.now()+o)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();const t=this._innerSubscribe(e),{_infiniteTimeWindow:r,_buffer:i}=this,s=i.slice();for(let o=0;o<s.length&&!e.closed;o+=r?1:2)e.next(s[o]);return this._checkFinalizedStatuses(e),t}_trimBuffer(){const{_bufferSize:e,_timestampProvider:t,_buffer:r,_infiniteTimeWindow:i}=this,s=(i?1:2)*e;if(e<1/0&&s<r.length&&r.splice(0,r.length-s),!i){const o=t.now();let a=0;for(let l=1;l<r.length&&r[l]<=o;l+=2)a=l;a&&r.splice(0,a+1)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let iy;try{iy=typeof Intl<"u"&&Intl.v8BreakIterator}catch{iy=!1}class $t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?function JL(n){return n===vS}(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!iy)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}$t.\u0275fac=function(e){return new(e||$t)(D(kc))},$t.\u0275prov=E({token:$t,factory:$t.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ht{}Ht.\u0275fac=function(e){return new(e||Ht)},Ht.\u0275mod=oe({type:Ht}),Ht.\u0275inj=re({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Yc,Ah,to,sy,On;function Ka(n){return function UB(){if(null==Yc&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Yc=!0}))}finally{Yc=Yc||!1}return Yc}()?n:!!n.capture}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xc(){if("object"!=typeof document||!document)return 0;if(null==Ah){const n=document.createElement("div"),e=n.style;n.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";const t=document.createElement("div"),r=t.style;r.width="2px",r.height="1px",n.appendChild(t),document.body.appendChild(n),Ah=0,0===n.scrollLeft&&(n.scrollLeft=1,Ah=0===n.scrollLeft?1:2),n.remove()}return Ah}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oy(n){if(function HB(){if(null==sy){const n=typeof document<"u"?document.head:null;sy=!(!n||!n.createShadowRoot&&!n.attachShadow)}return sy}()){const e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function er(n){return n.composedPath?n.composedPath()[0]:n.target}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */On=typeof global<"u"?global:typeof window<"u"?window:{};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qB=new S("cdk-dir-doc",{providedIn:"root",factory:function WB(){return Y(B)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});class tr{constructor(e){if(this.value="ltr",this.change=new z,e){const t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null,i=t||r;this.value="ltr"===i||"rtl"===i?i:"ltr"}}ngOnDestroy(){this.change.complete()}}tr.\u0275fac=function(e){return new(e||tr)(D(qB,8))},tr.\u0275prov=E({token:tr,factory:tr.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class no{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new z}get dir(){return this._dir}set dir(e){const t=this._dir,r=e&&e.toLowerCase();this._rawDir=e,this._dir="ltr"===r||"rtl"===r?r:"ltr",t!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}}no.\u0275fac=function(e){return new(e||no)},no.\u0275dir=T({type:no,selectors:[["","dir",""]],hostVars:1,hostBindings:function(e,t){2&e&&Ye("dir",t._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[J([{provide:tr,useExisting:no}])]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class zt{}zt.\u0275fac=function(e){return new(e||zt)},zt.\u0275mod=oe({type:zt,declarations:[no],exports:[no]}),zt.\u0275inj=re({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class QB extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class KB{}{constructor(e){super(),this._data=e}connect(){return YS(this._data)?this._data:x(this._data)}disconnect(){}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Jc{constructor(){this._listeners=[]}notify(e,t){for(let r of this._listeners)r(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}}Jc.\u0275fac=function(e){return new(e||Jc)},Jc.\u0275prov=E({token:Jc,factory:Jc.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const tM=new S("_ViewRepeater"),XB=["contentWrapper"],nM=new S("VIRTUAL_SCROLL_STRATEGY");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ej{constructor(e,t,r){this._scrolledIndexChange=new N,this.scrolledIndexChange=this._scrolledIndexChange.pipe(XS()),this._viewport=null,this._itemSize=e,this._minBufferPx=t,this._maxBufferPx=r}attach(e){this._viewport=e,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(e,t,r){this._itemSize=e,this._minBufferPx=t,this._maxBufferPx=r,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(e,t){this._viewport&&this._viewport.scrollToOffset(e*this._itemSize,t)}_updateTotalContentSize(){!this._viewport||this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const e=this._viewport.getRenderedRange(),t={start:e.start,end:e.end},r=this._viewport.getViewportSize(),i=this._viewport.getDataLength();let s=this._viewport.measureScrollOffset(),o=this._itemSize>0?s/this._itemSize:0;if(t.end>i){const l=Math.ceil(r/this._itemSize),c=Math.max(0,Math.min(o,i-l));o!=c&&(o=c,s=c*this._itemSize,t.start=Math.floor(o)),t.end=Math.max(0,Math.min(i,t.start+l))}const a=s-t.start*this._itemSize;if(a<this._minBufferPx&&0!=t.start){const l=Math.ceil((this._maxBufferPx-a)/this._itemSize);t.start=Math.max(0,t.start-l),t.end=Math.min(i,Math.ceil(o+(r+this._minBufferPx)/this._itemSize))}else{const l=t.end*this._itemSize-(s+r);if(l<this._minBufferPx&&t.end!=i){const c=Math.ceil((this._maxBufferPx-l)/this._itemSize);c>0&&(t.end=Math.min(i,t.end+c),t.start=Math.max(0,Math.floor(o-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(t),this._viewport.setRenderedContentOffset(this._itemSize*t.start),this._scrolledIndexChange.next(Math.floor(o))}}class ro{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new ej(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=Gi(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=Gi(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=Gi(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}ro.\u0275fac=function(e){return new(e||ro)},ro.\u0275dir=T({type:ro,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[J([{provide:nM,useFactory:function tj(n){return n._scrollStrategy},deps:[ge(()=>ro)]}]),it]});class Wi{constructor(e,t,r){this._ngZone=e,this._platform=t,this._scrolled=new N,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new ne(t=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe(ny(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):x()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(xn(i=>!i||r.indexOf(i)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((r,i)=>{this._scrollableContainsElement(i,e)&&t.push(i)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let r=Ue(t),i=e.getElementRef().nativeElement;do{if(r==i)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>wh(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}Wi.\u0275fac=function(e){return new(e||Wi)(D(ee),D($t),D(B,8))},Wi.\u0275prov=E({token:Wi,factory:Wi.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ki{constructor(e,t,r,i){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=r,this.dir=i,this._destroyed=new N,this._elementScrolled=new ne(s=>this.ngZone.runOutsideAngular(()=>wh(this.elementRef.nativeElement,"scroll").pipe(qi(this._destroyed)).subscribe(s)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,r=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=r?e.end:e.start),null==e.right&&(e.right=r?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&0!=Xc()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==Xc()?e.left=e.right:1==Xc()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;!function $B(){if(null==to){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return to=!1,to;if("scrollBehavior"in document.documentElement.style)to=!0;else{const n=Element.prototype.scrollTo;to=!!n&&!/\{\s*\[native code\]\s*\}/.test(n.toString())}}return to}()?(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left)):t.scrollTo(e)}measureScrollOffset(e){const t="left",r="right",i=this.elementRef.nativeElement;if("top"==e)return i.scrollTop;if("bottom"==e)return i.scrollHeight-i.clientHeight-i.scrollTop;const s=this.dir&&"rtl"==this.dir.value;return"start"==e?e=s?r:t:"end"==e&&(e=s?t:r),s&&2==Xc()?e==t?i.scrollWidth-i.clientWidth-i.scrollLeft:i.scrollLeft:s&&1==Xc()?e==t?i.scrollLeft+i.scrollWidth-i.clientWidth:-i.scrollLeft:e==t?i.scrollLeft:i.scrollWidth-i.clientWidth-i.scrollLeft}}Ki.\u0275fac=function(e){return new(e||Ki)(y(ye),y(Wi),y(ee),y(tr,8))},Ki.\u0275dir=T({type:Ki,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]});class io{constructor(e,t,r){this._platform=e,this._change=new N,this._changeListener=i=>{this._change.next(i)},this._document=r,t.runOutsideAngular(()=>{if(e.isBrowser){const i=this._getWindow();i.addEventListener("resize",this._changeListener),i.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),r=e.documentElement,i=r.getBoundingClientRect();return{top:-i.top||e.body.scrollTop||t.scrollY||r.scrollTop||0,left:-i.left||e.body.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(ny(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}io.\u0275fac=function(e){return new(e||io)(D($t),D(ee),D(B,8))},io.\u0275prov=E({token:io,factory:io.\u0275fac,providedIn:"root"});const sj=typeof requestAnimationFrame<"u"?ZS:OB;class Zi extends Ki{constructor(e,t,r,i,s,o,a){super(e,o,r,s),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=i,this._detachedSubject=new N,this._renderedRangeSubject=new N,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new ne(l=>this._scrollStrategy.scrolledIndexChange.subscribe(c=>Promise.resolve().then(()=>this.ngZone.run(()=>l.next(c))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=Le.EMPTY,this._viewportChanges=a.change().subscribe(()=>{this.checkViewportSize()})}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=Xe(e)}ngOnInit(){super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.elementScrolled().pipe(qa(null),ny(0,sj)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()}))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this._forOf,this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe(qi(this._detachedSubject)).subscribe(t=>{const r=t.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ij(n,e){return n.start==e.start&&n.end==e.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){const r=this.dir&&"rtl"==this.dir.value,i="horizontal"==this.orientation,s=i?"X":"Y";let a=`translate${s}(${Number((i&&r?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(a+=` translate${s}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=a&&(this._renderedContentTransform=a,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const r={behavior:t};"horizontal"===this.orientation?r.start=e:r.top=e,this.scrollTo(r)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){return e?super.measureScrollOffset(e):super.measureScrollOffset("horizontal"===this.orientation?"start":"top")}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){const e=this.elementRef.nativeElement;this._viewportSize="horizontal"===this.orientation?e.clientWidth:e.clientHeight}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function rM(n,e,t){const r=t;if(!r.getBoundingClientRect)return 0;const i=r.getBoundingClientRect();return"horizontal"===n?"start"===e?i.left:i.right:"start"===e?i.top:i.bottom}Zi.\u0275fac=function(e){return new(e||Zi)(y(ye),y(Zn),y(ee),y(nM,8),y(tr,8),y(Wi),y(io))},Zi.\u0275cmp=yn({type:Zi,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,t){if(1&e&&Oc(XB,7),2&e){let r;Gn(r=qn())&&(t._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,t){2&e&&jt("cdk-virtual-scroll-orientation-horizontal","horizontal"===t.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==t.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[J([{provide:Ki,useExisting:Zi}]),ie],ngContentSelectors:["*"],decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,t){1&e&&(bc(),$(0,"div",0,1),Ia(2),K(),at(3,"div",2)),2&e&&(W(3),Gd("width",t._totalContentWidth)("height",t._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],encapsulation:2,changeDetection:0});class Za{constructor(e,t,r,i,s,o){this._viewContainerRef=e,this._template=t,this._differs=r,this._viewRepeater=i,this._viewport=s,this.viewChange=new N,this._dataSourceChanges=new N,this.dataStream=this._dataSourceChanges.pipe(qa(null),function VB(){return Ie((n,e)=>{let t,r=!1;n.subscribe(Se(e,i=>{const s=t;t=i,r&&e.next([s,i]),r=!0}))})}(),un(([a,l])=>this._changeDataSource(a,l)),function jB(n,e,t){let r,i=!1;return n&&"object"==typeof n?({bufferSize:r=1/0,windowTime:e=1/0,refCount:i=!1,scheduler:t}=n):r=n??1/0,hv({connector:()=>new BB(r,e,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new N,this.dataStream.subscribe(a=>{this._data=a,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(qi(this._destroyed)).subscribe(a=>{this._renderedRange=a,o.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,function ZB(n){return n&&"function"==typeof n.connect}(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new QB(YS(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,r)=>e(t+(this._renderedRange?this._renderedRange.start:0),r):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=Gi(e)}measureRangeSize(e,t){if(e.start>=e.end)return 0;e.start<this._renderedRange.start||(e.end,this._renderedRange.end);const r=e.start-this._renderedRange.start,i=e.end-e.start;let s,o;for(let a=0;a<i;a++){const l=this._viewContainerRef.get(a+r);if(l&&l.rootNodes.length){s=o=l.rootNodes[0];break}}for(let a=i-1;a>-1;a--){const l=this._viewContainerRef.get(a+r);if(l&&l.rootNodes.length){o=l.rootNodes[l.rootNodes.length-1];break}}return s&&o?rM(t,"end",o)-rM(t,"start",s):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){!this._renderedRange||(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):x()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const r=this._viewContainerRef.get(t);r.context.index=this._renderedRange.start+t,r.context.count=e,this._updateComputedContextProperties(r.context),r.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(i,s,o)=>this._getEmbeddedViewArgs(i,o),i=>i.item),e.forEachIdentityChange(i=>{this._viewContainerRef.get(i.currentIndex).context.$implicit=i.item});const t=this._data.length;let r=this._viewContainerRef.length;for(;r--;){const i=this._viewContainerRef.get(r);i.context.index=this._renderedRange.start+r,i.context.count=t,this._updateComputedContextProperties(i.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}}Za.\u0275fac=function(e){return new(e||Za)(y(bt),y(Ut),y(nn),y(tM),y(Zi,4),y(ee))},Za.\u0275dir=T({type:Za,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[J([{provide:tM,useClass:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class YB{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(e,t,r,i,s){e.forEachOperation((o,a,l)=>{let c,u;if(null==o.previousIndex){const d=()=>r(o,a,l);c=this._insertView(d,l,t,i(o)),u=c?1:0}else null==l?(this._detachAndCacheView(a,t),u=3):(c=this._moveView(a,l,t,i(o)),u=2);s&&s({context:c?.context,operation:u,record:o})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,t,r,i){const s=this._insertViewFromCache(t,r);if(s)return void(s.context.$implicit=i);const o=e();return r.createEmbeddedView(o.templateRef,o.context,o.index)}_detachAndCacheView(e,t){const r=t.detach(e);this._maybeCacheView(r,t)}_moveView(e,t,r,i){const s=r.get(e);return r.move(s,t),s.context.$implicit=i,s}_maybeCacheView(e,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const r=t.indexOf(e);-1===r?e.destroy():t.remove(r)}}_insertViewFromCache(e,t){const r=this._viewCache.pop();return r&&t.insert(r,e),r||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}])]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Pn{}Pn.\u0275fac=function(e){return new(e||Pn)},Pn.\u0275mod=oe({type:Pn,declarations:[Ki],exports:[Ki]}),Pn.\u0275inj=re({});class eu{}eu.\u0275fac=function(e){return new(e||eu)},eu.\u0275mod=oe({type:eu,declarations:[ro,Za,Zi],imports:[zt,Ht,Pn],exports:[zt,Pn,ro,Za,Zi]}),eu.\u0275inj=re({imports:[[zt,Ht,Pn],zt,Pn]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class dn extends N{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){const{hasError:e,thrownError:t,_value:r}=this;if(e)throw t;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Qi(n){return n<=0?()=>yr:Ie((e,t)=>{let r=0;e.subscribe(Se(t,i=>{++r<=n&&(t.next(i),n<=r&&t.complete())}))})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class so{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}}so.\u0275fac=function(e){return new(e||so)},so.\u0275prov=E({token:so,factory:so.\u0275fac,providedIn:"root"});class oo{constructor(e){this._mutationObserverFactory=e,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){const t=Ue(e);return new ne(r=>{const s=this._observeElement(t).subscribe(r);return()=>{s.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{const t=new N,r=this._mutationObserverFactory.create(i=>t.next(i));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:t,count:1})}return this._observedElements.get(e).stream}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){const{observer:t,stream:r}=this._observedElements.get(e);t&&t.disconnect(),r.complete(),this._observedElements.delete(e)}}}oo.\u0275fac=function(e){return new(e||oo)(D(so))},oo.\u0275prov=E({token:oo,factory:oo.\u0275fac,providedIn:"root"});class ao{constructor(e,t,r){this._contentObserver=e,this._elementRef=t,this._ngZone=r,this.event=new z,this._disabled=!1,this._currentSubscription=null}get disabled(){return this._disabled}set disabled(e){this._disabled=Xe(e),this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(e){this._debounce=Gi(e),this._subscribe()}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();const e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?e.pipe(function gj(n,e=Ih){return Ie((t,r)=>{let i=null,s=null,o=null;const a=()=>{if(i){i.unsubscribe(),i=null;const c=s;s=null,r.next(c)}};function l(){const c=o+n,u=e.now();if(u<c)return i=this.schedule(void 0,c-u),void r.add(i);a()}t.subscribe(Se(r,c=>{s=c,o=e.now(),i||(i=e.schedule(l,n),r.add(i))},()=>{a(),r.complete()},void 0,()=>{s=i=null}))})}(this.debounce)):e).subscribe(this.event)})}_unsubscribe(){this._currentSubscription?.unsubscribe()}}ao.\u0275fac=function(e){return new(e||ao)(y(oo),y(ye),y(ee))},ao.\u0275dir=T({type:ao,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled"],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]});class Wr{}Wr.\u0275fac=function(e){return new(e||Wr)},Wr.\u0275mod=oe({type:Wr,declarations:[ao],exports:[ao]}),Wr.\u0275inj=re({providers:[so]});function Th(n,e){return(n.getAttribute(e)||"").match(/\S+/g)||[]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const sM="cdk-describedby-message-container",oM="cdk-describedby-message",Rh="cdk-describedby-host";let _j=0;const nr=new Map;let Gt=null;class tu{constructor(e){this._document=e}describe(e,t,r){if(!this._canBeDescribed(e,t))return;const i=ay(t,r);"string"!=typeof t?(aM(t),nr.set(i,{messageElement:t,referenceCount:0})):nr.has(i)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,i)||this._addMessageReference(e,i)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;const i=ay(t,r);if(this._isElementDescribedByMessage(e,i)&&this._removeMessageReference(e,i),"string"==typeof t){const s=nr.get(i);s&&0===s.referenceCount&&this._deleteMessageElement(i)}Gt&&0===Gt.childNodes.length&&this._deleteMessagesContainer()}ngOnDestroy(){const e=this._document.querySelectorAll(`[${Rh}]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Rh);Gt&&this._deleteMessagesContainer(),nr.clear()}_createMessageElement(e,t){const r=this._document.createElement("div");aM(r),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),Gt.appendChild(r),nr.set(ay(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){nr.get(e)?.messageElement?.remove(),nr.delete(e)}_createMessagesContainer(){Gt||(this._document.getElementById(sM)?.remove(),Gt=this._document.createElement("div"),Gt.id=sM,Gt.style.visibility="hidden",Gt.classList.add("cdk-visually-hidden"),this._document.body.appendChild(Gt))}_deleteMessagesContainer(){Gt&&(Gt.remove(),Gt=null)}_removeCdkDescribedByReferenceIds(e){const t=Th(e,"aria-describedby").filter(r=>0!=r.indexOf(oM));e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){const r=nr.get(t);(function mj(n,e,t){const r=Th(n,e);r.some(i=>i.trim()==t.trim())||(r.push(t.trim()),n.setAttribute(e,r.join(" ")))})(e,"aria-describedby",r.messageElement.id),e.setAttribute(Rh,""),r.referenceCount++}_removeMessageReference(e,t){const r=nr.get(t);r.referenceCount--,function yj(n,e,t){const i=Th(n,e).filter(s=>s!=t.trim());i.length?n.setAttribute(e,i.join(" ")):n.removeAttribute(e)}(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Rh)}_isElementDescribedByMessage(e,t){const r=Th(e,"aria-describedby"),i=nr.get(t),s=i&&i.messageElement.id;return!!s&&-1!=r.indexOf(s)}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&"object"==typeof t)return!0;const r=null==t?"":`${t}`.trim(),i=e.getAttribute("aria-label");return!!r&&(!i||i.trim()!==r)}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}}function ay(n,e){return"string"==typeof n?`${e||""}/${n}`:n}function aM(n){n.id||(n.id=`${oM}-${_j++}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */tu.\u0275fac=function(e){return new(e||tu)(D(B))},tu.\u0275prov=E({token:tu,factory:tu.\u0275fac,providedIn:"root"});class lo{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function Dj(n){return!!(n.offsetWidth||n.offsetHeight||"function"==typeof n.getClientRects&&n.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const t=function vj(n){try{return n.frameElement}catch{return null}}(function Aj(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e));if(t&&(-1===cM(t)||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),i=cM(e);return e.hasAttribute("contenteditable")?-1!==i:!("iframe"===r||"object"===r||this._platform.WEBKIT&&this._platform.IOS&&!function Mj(n){let e=n.nodeName.toLowerCase(),t="input"===e&&n.type;return"text"===t||"password"===t||"select"===e||"textarea"===e}(e))&&("audio"===r?!!e.hasAttribute("controls")&&-1!==i:"video"===r?-1!==i&&(null!==i||(this._platform.FIREFOX||e.hasAttribute("controls"))):e.tabIndex>=0)}isFocusable(e,t){return function Ij(n){return!function bj(n){return function Ej(n){return"input"==n.nodeName.toLowerCase()}(n)&&"hidden"==n.type}(n)&&(function Cj(n){let e=n.nodeName.toLowerCase();return"input"===e||"select"===e||"button"===e||"textarea"===e}(n)||function wj(n){return function Sj(n){return"a"==n.nodeName.toLowerCase()}(n)&&n.hasAttribute("href")}(n)||n.hasAttribute("contenteditable")||lM(n))}(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}}function lM(n){if(!n.hasAttribute("tabindex")||void 0===n.tabIndex)return!1;let e=n.getAttribute("tabindex");return!(!e||isNaN(parseInt(e,10)))}function cM(n){if(!lM(n))return null;const e=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}lo.\u0275fac=function(e){return new(e||lo)(D($t))},lo.\u0275prov=E({token:lo,factory:lo.\u0275fac,providedIn:"root"});class uM{constructor(e,t,r,i,s=!1){this._element=e,this._checker=t,this._ngZone=r,this._document=i,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,s||this.attachAnchors()}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}destroy(){const e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);for(let r=0;r<t.length;r++)t[r].hasAttribute(`cdk-focus-${e}`)?console.warn(`Found use of deprecated attribute 'cdk-focus-${e}', use 'cdkFocusRegion${e}' instead. The deprecated attribute will be removed in 8.0.0.`,t[r]):t[r].hasAttribute(`cdk-focus-region-${e}`)&&console.warn(`Found use of deprecated attribute 'cdk-focus-region-${e}', use 'cdkFocusRegion${e}' instead. The deprecated attribute will be removed in 8.0.0.`,t[r]);return"start"==e?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){const t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(t.hasAttribute("cdk-focus-initial")&&console.warn("Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0",t),!this._checker.isFocusable(t)){const r=this._getFirstTabbableElement(t);return r?.focus(e),!!r}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){const t=this._getRegionBoundary("start");return t&&t.focus(e),!!t}focusLastTabbableElement(e){const t=this._getRegionBoundary("end");return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;const t=e.children;for(let r=0;r<t.length;r++){const i=t[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[r]):null;if(i)return i}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;const t=e.children;for(let r=t.length-1;r>=0;r--){const i=t[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[r]):null;if(i)return i}return null}_createAnchor(){const e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.pipe(Qi(1)).subscribe(e)}}class Qa{constructor(e,t,r){this._checker=e,this._ngZone=t,this._document=r}create(e,t=!1){return new uM(e,this._checker,this._ngZone,this._document,t)}}Qa.\u0275fac=function(e){return new(e||Qa)(D(lo),D(ee),D(B))},Qa.\u0275prov=E({token:Qa,factory:Qa.\u0275fac,providedIn:"root"});class Ya{constructor(e,t,r){this._elementRef=e,this._focusTrapFactory=t,this._previouslyFocusedElement=null,this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0)}get enabled(){return this.focusTrap.enabled}set enabled(e){this.focusTrap.enabled=Xe(e)}get autoCapture(){return this._autoCapture}set autoCapture(e){this._autoCapture=Xe(e)}ngOnDestroy(){this.focusTrap.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap.hasAttached()||this.focusTrap.attachAnchors()}ngOnChanges(e){const t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=function zB(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){const e=n.shadowRoot.activeElement;if(e===n)break;n=e}return n}(),this.focusTrap.focusInitialElementWhenReady()}}Ya.\u0275fac=function(e){return new(e||Ya)(y(ye),y(Qa),y(B))},Ya.\u0275dir=T({type:Ya,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:["cdkTrapFocus","enabled"],autoCapture:["cdkTrapFocusAutoCapture","autoCapture"]},exportAs:["cdkTrapFocus"],features:[it]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Tj extends uM{constructor(e,t,r,i,s,o,a){super(e,t,r,i,a.defer),this._focusTrapManager=s,this._inertStrategy=o,this._focusTrapManager.register(this)}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._enabled?this._focusTrapManager.register(this):this._focusTrapManager.deregister(this)}destroy(){this._focusTrapManager.deregister(this),super.destroy()}_enable(){this._inertStrategy.preventFocus(this),this.toggleAnchors(!0)}_disable(){this._inertStrategy.allowFocus(this),this.toggleAnchors(!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Rj=new S("FOCUS_TRAP_INERT_STRATEGY");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xj{constructor(){this._listener=null}preventFocus(e){this._listener&&e._document.removeEventListener("focus",this._listener,!0),this._listener=t=>this._trapFocus(e,t),e._ngZone.runOutsideAngular(()=>{e._document.addEventListener("focus",this._listener,!0)})}allowFocus(e){!this._listener||(e._document.removeEventListener("focus",this._listener,!0),this._listener=null)}_trapFocus(e,t){const r=t.target,i=e._element;r&&!i.contains(r)&&!r.closest?.("div.cdk-overlay-pane")&&setTimeout(()=>{e.enabled&&!i.contains(e._document.activeElement)&&e.focusFirstTabbableElement()})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Xa{constructor(){this._focusTrapStack=[]}register(e){this._focusTrapStack=this._focusTrapStack.filter(r=>r!==e);let t=this._focusTrapStack;t.length&&t[t.length-1]._disable(),t.push(e),e._enable()}deregister(e){e._disable();const t=this._focusTrapStack,r=t.indexOf(e);-1!==r&&(t.splice(r,1),t.length&&t[t.length-1]._enable())}}Xa.\u0275fac=function(e){return new(e||Xa)},Xa.\u0275prov=E({token:Xa,factory:Xa.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class nu{constructor(e,t,r,i,s){this._checker=e,this._ngZone=t,this._focusTrapManager=r,this._document=i,this._inertStrategy=s||new xj}create(e,t={defer:!1}){let r;return r="boolean"==typeof t?{defer:t}:t,new Tj(e,this._checker,this._ngZone,this._document,this._focusTrapManager,this._inertStrategy,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ly(n){return 0===n.offsetX&&0===n.offsetY}function cy(n){const e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!(!e||-1!==e.identifier||null!=e.radiusX&&1!==e.radiusX||null!=e.radiusY&&1!==e.radiusY)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */nu.\u0275fac=function(e){return new(e||nu)(D(lo),D(ee),D(Xa),D(B),D(Rj,8))},nu.\u0275prov=E({token:nu,factory:nu.\u0275fac,providedIn:"root"});const Oj=new S("cdk-input-modality-detector-options"),Pj={ignoreKeys:[18,17,224,91,16]},Ja=Ka({passive:!0,capture:!0});class el{constructor(e,t,r,i){this._platform=e,this._mostRecentTarget=null,this._modality=new dn(null),this._lastTouchMs=0,this._onKeydown=s=>{this._options?.ignoreKeys?.some(o=>o===s.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=er(s))},this._onMousedown=s=>{Date.now()-this._lastTouchMs<650||(this._modality.next(ly(s)?"keyboard":"mouse"),this._mostRecentTarget=er(s))},this._onTouchstart=s=>{cy(s)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=er(s))},this._options={...Pj,...i},this.modalityDetected=this._modality.pipe(function pj(n){return xn((e,t)=>n<=t)}(1)),this.modalityChanged=this.modalityDetected.pipe(XS()),e.isBrowser&&t.runOutsideAngular(()=>{r.addEventListener("keydown",this._onKeydown,Ja),r.addEventListener("mousedown",this._onMousedown,Ja),r.addEventListener("touchstart",this._onTouchstart,Ja)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,Ja),document.removeEventListener("mousedown",this._onMousedown,Ja),document.removeEventListener("touchstart",this._onTouchstart,Ja))}}el.\u0275fac=function(e){return new(e||el)(D($t),D(ee),D(B),D(Oj,8))},el.\u0275prov=E({token:el,factory:el.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const kj=new S("liveAnnouncerElement",{providedIn:"root",factory:function Nj(){return null}});const Fj=new S("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class tl{constructor(e,t,r,i){this._ngZone=t,this._defaultOptions=i,this._document=r,this._liveElement=e||this._createLiveElement()}announce(e,...t){const r=this._defaultOptions;let i,s;return 1===t.length&&"number"==typeof t[0]?s=t[0]:[i,s]=t,this.clear(),clearTimeout(this._previousTimeout),i||(i=r&&r.politeness?r.politeness:"polite"),null==s&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",i),this._ngZone.runOutsideAngular(()=>new Promise(o=>{clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=e,o(),"number"==typeof s&&(this._previousTimeout=setTimeout(()=>this.clear(),s))},100)}))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null}_createLiveElement(){const e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let i=0;i<t.length;i++)t[i].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),this._document.body.appendChild(r),r}}tl.\u0275fac=function(e){return new(e||tl)(D(kj,8),D(ee),D(B),D(Fj,8))},tl.\u0275prov=E({token:tl,factory:tl.\u0275fac,providedIn:"root"});class nl{constructor(e,t,r,i){this._elementRef=e,this._liveAnnouncer=t,this._contentObserver=r,this._ngZone=i,this._politeness="polite"}get politeness(){return this._politeness}set politeness(e){this._politeness="off"===e||"assertive"===e?e:"polite","off"===this._politeness?this._subscription&&(this._subscription.unsubscribe(),this._subscription=null):this._subscription||(this._subscription=this._ngZone.runOutsideAngular(()=>this._contentObserver.observe(this._elementRef).subscribe(()=>{const t=this._elementRef.nativeElement.textContent;t!==this._previousAnnouncedText&&(this._liveAnnouncer.announce(t,this._politeness),this._previousAnnouncedText=t)})))}ngOnDestroy(){this._subscription&&this._subscription.unsubscribe()}}nl.\u0275fac=function(e){return new(e||nl)(y(ye),y(tl),y(oo),y(ee))},nl.\u0275dir=T({type:nl,selectors:[["","cdkAriaLive",""]],inputs:{politeness:["cdkAriaLive","politeness"]},exportAs:["cdkAriaLive"]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Lj=new S("cdk-focus-monitor-default-options"),xh=Ka({passive:!0,capture:!0});class co{constructor(e,t,r,i,s){this._ngZone=e,this._platform=t,this._inputModalityDetector=r,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new N,this._rootNodeFocusAndBlurListener=o=>{const a=er(o),l="focus"===o.type?this._onFocus:this._onBlur;for(let c=a;c;c=c.parentElement)l.call(this,o,c)},this._document=i,this._detectionMode=s?.detectionMode||0}monitor(e,t=!1){const r=Ue(e);if(!this._platform.isBrowser||1!==r.nodeType)return x(null);const i=oy(r)||this._getDocument(),s=this._elementInfo.get(r);if(s)return t&&(s.checkChildren=!0),s.subject;const o={checkChildren:t,subject:new N,rootNode:i};return this._elementInfo.set(r,o),this._registerGlobalListeners(o),o.subject}stopMonitoring(e){const t=Ue(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){const i=Ue(e);i===this._getDocument().activeElement?this._getClosestElementsInfo(i).forEach(([o,a])=>this._originChanged(o,t,a)):(this._setOrigin(t),"function"==typeof i.focus&&i.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused","touch"===t),e.classList.toggle("cdk-keyboard-focused","keyboard"===t),e.classList.toggle("cdk-mouse-focused","mouse"===t),e.classList.toggle("cdk-program-focused","program"===t)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction="touch"===e&&t,0===this._detectionMode){clearTimeout(this._originTimeoutId);const r=this._originFromTouchInteraction?650:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){const r=this._elementInfo.get(t),i=er(e);!r||!r.checkChildren&&t!==i||this._originChanged(t,this._getFocusOrigin(i),r)}_onBlur(e,t){const r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r.subject,null))}_emitOrigin(e,t){this._ngZone.run(()=>e.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,xh),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,xh)}),this._rootNodeFocusListenerCount.set(t,r+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(qi(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(e){const t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){const r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,xh),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,xh),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r.subject,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){const t=[];return this._elementInfo.forEach((r,i)=>{(i===e||r.checkChildren&&i.contains(e))&&t.push([i,r])}),t}}co.\u0275fac=function(e){return new(e||co)(D(ee),D($t),D(el),D(B,8),D(Lj,8))},co.\u0275prov=E({token:co,factory:co.\u0275fac,providedIn:"root"});class rl{constructor(e,t){this._elementRef=e,this._focusMonitor=t,this.cdkFocusChange=new z}ngAfterViewInit(){const e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,1===e.nodeType&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>this.cdkFocusChange.emit(t))}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}}rl.\u0275fac=function(e){return new(e||rl)(y(ye),y(co))},rl.\u0275dir=T({type:rl,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"}});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const hM="cdk-high-contrast-black-on-white",fM="cdk-high-contrast-white-on-black",uy="cdk-high-contrast-active";class uo{constructor(e,t){this._platform=e,this._document=t}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,i=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),i){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(uy),e.remove(hM),e.remove(fM),this._hasCheckedHighContrastMode=!0;const t=this.getHighContrastMode();1===t?(e.add(uy),e.add(hM)):2===t&&(e.add(uy),e.add(fM))}}}uo.\u0275fac=function(e){return new(e||uo)(D($t),D(B))},uo.\u0275prov=E({token:uo,factory:uo.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ru{constructor(e){e._applyBodyHighContrastModeCssClasses()}}function Je(n,e,t){const r=te(n)||e||t?{next:n,error:e,complete:t}:n;return r?Ie((i,s)=>{var o;null===(o=r.subscribe)||void 0===o||o.call(r);let a=!0;i.subscribe(Se(s,l=>{var c;null===(c=r.next)||void 0===c||c.call(r,l),s.next(l)},()=>{var l;a=!1,null===(l=r.complete)||void 0===l||l.call(r),s.complete()},l=>{var c;a=!1,null===(c=r.error)||void 0===c||c.call(r,l),s.error(l)},()=>{var l,c;a&&(null===(l=r.unsubscribe)||void 0===l||l.call(r)),null===(c=r.finalize)||void 0===c||c.call(r)}))}):Ei}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dy(n,e,t){for(let r in e)if(e.hasOwnProperty(r)){const i=e[r];i?n.setProperty(r,i,t?.has(r)?"important":""):n.removeProperty(r)}return n}function il(n,e){const t=e?"":"none";dy(n.style,{"touch-action":e?"":"none","-webkit-user-drag":e?"":"none","-webkit-tap-highlight-color":e?"":"transparent","user-select":t,"-ms-user-select":t,"-webkit-user-select":t,"-moz-user-select":t})}function pM(n,e,t){dy(n.style,{position:e?"":"fixed",top:e?"":"0",opacity:e?"":"0",left:e?"":"-999em"},t)}function Oh(n,e){return e&&"none"!=e?n+" "+e:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gM(n){const e=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*e}function hy(n,e){return n.getPropertyValue(e).split(",").map(r=>r.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fy(n){const e=n.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y}}function py(n,e,t){const{top:r,bottom:i,left:s,right:o}=n;return t>=r&&t<=i&&e>=s&&e<=o}function iu(n,e,t){n.top+=e,n.bottom=n.top+n.height,n.left+=t,n.right=n.left+n.width}function mM(n,e,t,r){const{top:i,right:s,bottom:o,left:a,width:l,height:c}=n,u=l*e,d=c*e;return r>i-d&&r<o+d&&t>a-u&&t<s+u}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */ru.\u0275fac=function(e){return new(e||ru)(D(uo))},ru.\u0275mod=oe({type:ru,declarations:[nl,Ya,rl],imports:[Ht,Wr],exports:[nl,Ya,rl]}),ru.\u0275inj=re({imports:[[Ht,Wr]]});class yM{constructor(e,t){this._document=e,this._viewportRuler=t,this.positions=new Map}clear(){this.positions.clear()}cache(e){this.clear(),this.positions.set(this._document,{scrollPosition:this._viewportRuler.getViewportScrollPosition()}),e.forEach(t=>{this.positions.set(t,{scrollPosition:{top:t.scrollTop,left:t.scrollLeft},clientRect:fy(t)})})}handleScroll(e){const t=er(e),r=this.positions.get(t);if(!r)return null;const i=r.scrollPosition;let s,o;if(t===this._document){const c=this._viewportRuler.getViewportScrollPosition();s=c.top,o=c.left}else s=t.scrollTop,o=t.scrollLeft;const a=i.top-s,l=i.left-o;return this.positions.forEach((c,u)=>{c.clientRect&&t!==u&&t.contains(u)&&iu(c.clientRect,a,l)}),i.top=s,i.left=o,{top:a,left:l}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _M(n){const e=n.cloneNode(!0),t=e.querySelectorAll("[id]"),r=n.nodeName.toLowerCase();e.removeAttribute("id");for(let i=0;i<t.length;i++)t[i].removeAttribute("id");return"canvas"===r?CM(n,e):("input"===r||"select"===r||"textarea"===r)&&DM(n,e),vM("canvas",n,e,CM),vM("input, textarea, select",n,e,DM),e}function vM(n,e,t,r){const i=e.querySelectorAll(n);if(i.length){const s=t.querySelectorAll(n);for(let o=0;o<i.length;o++)r(i[o],s[o])}}let jj=0;function DM(n,e){"file"!==e.type&&(e.value=n.value),"radio"===e.type&&e.name&&(e.name=`mat-clone-${e.name}-${jj++}`)}function CM(n,e){const t=e.getContext("2d");if(t)try{t.drawImage(n,0,0)}catch{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bM=Ka({passive:!0}),wM=Ka({passive:!1}),gy=new Set(["position"]);class $j{constructor(e,t,r,i,s,o){this._config=t,this._document=r,this._ngZone=i,this._viewportRuler=s,this._dragDropRegistry=o,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._hasStartedDragging=!1,this._moveEvents=new N,this._pointerMoveSubscription=Le.EMPTY,this._pointerUpSubscription=Le.EMPTY,this._scrollSubscription=Le.EMPTY,this._resizeSubscription=Le.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this.dragStartDelay=0,this._disabled=!1,this.beforeStarted=new N,this.started=new N,this.released=new N,this.ended=new N,this.entered=new N,this.exited=new N,this.dropped=new N,this.moved=this._moveEvents,this._pointerDown=a=>{if(this.beforeStarted.next(),this._handles.length){const l=this._handles.find(c=>{const u=er(a);return!!u&&(u===c||c.contains(u))});l&&!this._disabledHandles.has(l)&&!this.disabled&&this._initializeDragSequence(l,a)}else this.disabled||this._initializeDragSequence(this._rootElement,a)},this._pointerMove=a=>{const l=this._getPointerPositionOnPage(a);if(!this._hasStartedDragging){if(Math.abs(l.x-this._pickupPositionOnPage.x)+Math.abs(l.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold){const f=Date.now()>=this._dragStartTime+this._getDragStartDelay(a),p=this._dropContainer;if(!f)return void this._endDragSequence(a);(!p||!p.isDragging()&&!p.isReceiving())&&(a.preventDefault(),this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(a)))}return}this._boundaryElement&&(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=(this._preview||this._rootElement).getBoundingClientRect()),a.preventDefault();const c=this._getConstrainedPointerPosition(l);if(this._hasMoved=!0,this._lastKnownPointerPosition=l,this._updatePointerDirectionDelta(c),this._dropContainer)this._updateActiveDropContainer(c,l);else{const u=this._activeTransform;u.x=c.x-this._pickupPositionOnPage.x+this._passiveTransform.x,u.y=c.y-this._pickupPositionOnPage.y+this._passiveTransform.y,this._applyRootElementTransform(u.x,u.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:c,event:a,distance:this._getDragDistance(c),delta:this._pointerDirectionDelta})})},this._pointerUp=a=>{this._endDragSequence(a)},this.withRootElement(e).withParent(t.parentDragRef||null),this._parentPositions=new yM(r,s),o.registerDragItem(this)}get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(e){const t=Xe(e);t!==this._disabled&&(this._disabled=t,this._toggleNativeDragInteractions(),this._handles.forEach(r=>il(r,t)))}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(e){this._handles=e.map(r=>Ue(r)),this._handles.forEach(r=>il(r,this.disabled)),this._toggleNativeDragInteractions();const t=new Set;return this._disabledHandles.forEach(r=>{this._handles.indexOf(r)>-1&&t.add(r)}),this._disabledHandles=t,this}withPreviewTemplate(e){return this._previewTemplate=e,this}withPlaceholderTemplate(e){return this._placeholderTemplate=e,this}withRootElement(e){const t=Ue(e);return t!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),this._ngZone.runOutsideAngular(()=>{t.addEventListener("mousedown",this._pointerDown,wM),t.addEventListener("touchstart",this._pointerDown,bM)}),this._initialTransform=void 0,this._rootElement=t),typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(e){return this._boundaryElement=e?Ue(e):null,this._resizeSubscription.unsubscribe(),e&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(e){return this._parentDragRef=e,this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&this._rootElement?.remove(),this._anchor?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._anchor=this._parentDragRef=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(e){!this._disabledHandles.has(e)&&this._handles.indexOf(e)>-1&&(this._disabledHandles.add(e),il(e,!0))}enableHandle(e){this._disabledHandles.has(e)&&(this._disabledHandles.delete(e),il(e,this.disabled))}withDirection(e){return this._direction=e,this}_withDropContainer(e){this._dropContainer=e}getFreeDragPosition(){const e=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:e.x,y:e.y}}setFreeDragPosition(e){return this._activeTransform={x:0,y:0},this._passiveTransform.x=e.x,this._passiveTransform.y=e.y,this._dropContainer||this._applyRootElementTransform(e.x,e.y),this}withPreviewContainer(e){return this._previewContainer=e,this}_sortFromLastPointerPosition(){const e=this._lastKnownPointerPosition;e&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(e),e)}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe()}_destroyPreview(){this._preview?.remove(),this._previewRef?.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._placeholderRef=null}_endDragSequence(e){if(this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging))if(this.released.next({source:this}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(e),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;const t=this._getPointerPositionOnPage(e);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(t),dropPoint:t})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(e){su(e)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();const t=this._dropContainer;if(t){const r=this._rootElement,i=r.parentNode,s=this._placeholder=this._createPlaceholderElement(),o=this._anchor=this._anchor||this._document.createComment(""),a=this._getShadowRoot();i.insertBefore(o,r),this._initialTransform=r.style.transform||"",this._preview=this._createPreviewElement(),pM(r,!1,gy),this._document.body.appendChild(i.replaceChild(s,r)),this._getPreviewInsertionPoint(i,a).appendChild(this._preview),this.started.next({source:this}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(e,t){this._parentDragRef&&t.stopPropagation();const r=this.isDragging(),i=su(t),s=!i&&0!==t.button,o=this._rootElement,a=er(t),l=!i&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now(),c=i?cy(t):ly(t);if(a&&a.draggable&&"mousedown"===t.type&&t.preventDefault(),r||s||l||c)return;if(this._handles.length){const h=o.style;this._rootElementTapHighlight=h.webkitTapHighlightColor||"",h.webkitTapHighlightColor="transparent"}this._hasStartedDragging=this._hasMoved=!1,this._removeSubscriptions(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(h=>this._updateOnScroll(h)),this._boundaryElement&&(this._boundaryRect=fy(this._boundaryElement));const u=this._previewTemplate;this._pickupPositionInElement=u&&u.template&&!u.matchSize?{x:0,y:0}:this._getPointerPositionInElement(e,t);const d=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(t);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:d.x,y:d.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,t)}_cleanupDragArtifacts(e){pM(this._rootElement,!0,gy),this._anchor.parentNode.replaceChild(this._rootElement,this._anchor),this._destroyPreview(),this._destroyPlaceholder(),this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{const t=this._dropContainer,r=t.getItemIndex(this),i=this._getPointerPositionOnPage(e),s=this._getDragDistance(i),o=t._isOverContainer(i.x,i.y);this.ended.next({source:this,distance:s,dropPoint:i}),this.dropped.next({item:this,currentIndex:r,previousIndex:this._initialIndex,container:t,previousContainer:this._initialContainer,isPointerOverContainer:o,distance:s,dropPoint:i}),t.drop(this,r,this._initialIndex,this._initialContainer,o,s,i),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:e,y:t},{x:r,y:i}){let s=this._initialContainer._getSiblingContainerFromPosition(this,e,t);!s&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(e,t)&&(s=this._initialContainer),s&&s!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._dropContainer=s,this._dropContainer.enter(this,e,t,s===this._initialContainer&&s.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:s,currentIndex:s.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(r,i),this._dropContainer._sortItem(this,e,t,this._pointerDirectionDelta),this._applyPreviewTransform(e-this._pickupPositionInElement.x,t-this._pickupPositionInElement.y))}_createPreviewElement(){const e=this._previewTemplate,t=this.previewClass,r=e?e.template:null;let i;if(r&&e){const s=e.matchSize?this._rootElement.getBoundingClientRect():null,o=e.viewContainer.createEmbeddedView(r,e.context);o.detectChanges(),i=SM(o,this._document),this._previewRef=o,e.matchSize?MM(i,s):i.style.transform=Ph(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else{const s=this._rootElement;i=_M(s),MM(i,s.getBoundingClientRect()),this._initialTransform&&(i.style.transform=this._initialTransform)}return dy(i.style,{"pointer-events":"none",margin:"0",position:"fixed",top:"0",left:"0","z-index":`${this._config.zIndex||1e3}`},gy),il(i,!1),i.classList.add("cdk-drag-preview"),i.setAttribute("dir",this._direction),t&&(Array.isArray(t)?t.forEach(s=>i.classList.add(s)):i.classList.add(t)),i}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const e=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._applyPreviewTransform(e.left,e.top);const t=function Bj(n){const e=getComputedStyle(n),t=hy(e,"transition-property"),r=t.find(a=>"transform"===a||"all"===a);if(!r)return 0;const i=t.indexOf(r),s=hy(e,"transition-duration"),o=hy(e,"transition-delay");return gM(s[i])+gM(o[i])}(this._preview);return 0===t?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(r=>{const i=o=>{(!o||er(o)===this._preview&&"transform"===o.propertyName)&&(this._preview?.removeEventListener("transitionend",i),r(),clearTimeout(s))},s=setTimeout(i,1.5*t);this._preview.addEventListener("transitionend",i)}))}_createPlaceholderElement(){const e=this._placeholderTemplate,t=e?e.template:null;let r;return t?(this._placeholderRef=e.viewContainer.createEmbeddedView(t,e.context),this._placeholderRef.detectChanges(),r=SM(this._placeholderRef,this._document)):r=_M(this._rootElement),r.classList.add("cdk-drag-placeholder"),r}_getPointerPositionInElement(e,t){const r=this._rootElement.getBoundingClientRect(),i=e===this._rootElement?null:e,s=i?i.getBoundingClientRect():r,o=su(t)?t.targetTouches[0]:t,a=this._getViewportScrollPosition(),l=o.pageX-s.left-a.left,c=o.pageY-s.top-a.top;return{x:s.left-r.left+l,y:s.top-r.top+c}}_getPointerPositionOnPage(e){const t=this._getViewportScrollPosition(),r=su(e)?e.touches[0]||e.changedTouches[0]||{pageX:0,pageY:0}:e,i=r.pageX-t.left,s=r.pageY-t.top;if(this._ownerSVGElement){const o=this._ownerSVGElement.getScreenCTM();if(o){const a=this._ownerSVGElement.createSVGPoint();return a.x=i,a.y=s,a.matrixTransform(o.inverse())}}return{x:i,y:s}}_getConstrainedPointerPosition(e){const t=this._dropContainer?this._dropContainer.lockAxis:null;let{x:r,y:i}=this.constrainPosition?this.constrainPosition(e,this):e;if("x"===this.lockAxis||"x"===t?i=this._pickupPositionOnPage.y:("y"===this.lockAxis||"y"===t)&&(r=this._pickupPositionOnPage.x),this._boundaryRect){const{x:s,y:o}=this._pickupPositionInElement,a=this._boundaryRect,l=this._previewRect,c=a.top+o,u=a.bottom-(l.height-o);r=EM(r,a.left+s,a.right-(l.width-s)),i=EM(i,c,u)}return{x:r,y:i}}_updatePointerDirectionDelta(e){const{x:t,y:r}=e,i=this._pointerDirectionDelta,s=this._pointerPositionAtLastDirectionChange,o=Math.abs(t-s.x),a=Math.abs(r-s.y);return o>this._config.pointerDirectionChangeThreshold&&(i.x=t>s.x?1:-1,s.x=t),a>this._config.pointerDirectionChangeThreshold&&(i.y=r>s.y?1:-1,s.y=r),i}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const e=this._handles.length>0||!this.isDragging();e!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=e,il(this._rootElement,e))}_removeRootElementListeners(e){e.removeEventListener("mousedown",this._pointerDown,wM),e.removeEventListener("touchstart",this._pointerDown,bM)}_applyRootElementTransform(e,t){const r=Ph(e,t),i=this._rootElement.style;null==this._initialTransform&&(this._initialTransform=i.transform&&"none"!=i.transform?i.transform:""),i.transform=Oh(r,this._initialTransform)}_applyPreviewTransform(e,t){const r=this._previewTemplate?.template?void 0:this._initialTransform,i=Ph(e,t);this._preview.style.transform=Oh(i,r)}_getDragDistance(e){const t=this._pickupPositionOnPage;return t?{x:e.x-t.x,y:e.y-t.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:e,y:t}=this._passiveTransform;if(0===e&&0===t||this.isDragging()||!this._boundaryElement)return;const r=this._boundaryElement.getBoundingClientRect(),i=this._rootElement.getBoundingClientRect();if(0===r.width&&0===r.height||0===i.width&&0===i.height)return;const s=r.left-i.left,o=i.right-r.right,a=r.top-i.top,l=i.bottom-r.bottom;r.width>i.width?(s>0&&(e+=s),o>0&&(e-=o)):e=0,r.height>i.height?(a>0&&(t+=a),l>0&&(t-=l)):t=0,(e!==this._passiveTransform.x||t!==this._passiveTransform.y)&&this.setFreeDragPosition({y:t,x:e})}_getDragStartDelay(e){const t=this.dragStartDelay;return"number"==typeof t?t:su(e)?t.touch:t?t.mouse:0}_updateOnScroll(e){const t=this._parentPositions.handleScroll(e);if(t){const r=er(e);this._boundaryRect&&r!==this._boundaryElement&&r.contains(this._boundaryElement)&&iu(this._boundaryRect,t.top,t.left),this._pickupPositionOnPage.x+=t.left,this._pickupPositionOnPage.y+=t.top,this._dropContainer||(this._activeTransform.x-=t.left,this._activeTransform.y-=t.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){const e=this._parentPositions.positions.get(this._document);return e?e.scrollPosition:this._viewportRuler.getViewportScrollPosition()}_getShadowRoot(){return void 0===this._cachedShadowRoot&&(this._cachedShadowRoot=oy(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(e,t){const r=this._previewContainer||"global";if("parent"===r)return e;if("global"===r){const i=this._document;return t||i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement||i.body}return Ue(r)}}function Ph(n,e){return`translate3d(${Math.round(n)}px, ${Math.round(e)}px, 0)`}function EM(n,e,t){return Math.max(e,Math.min(t,n))}function su(n){return"t"===n.type[0]}function SM(n,e){const t=n.rootNodes;if(1===t.length&&t[0].nodeType===e.ELEMENT_NODE)return t[0];const r=e.createElement("div");return t.forEach(i=>r.appendChild(i)),r}function MM(n,e){n.style.width=`${e.width}px`,n.style.height=`${e.height}px`,n.style.transform=Ph(e.left,e.top)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function IM(n,e,t){const r=ou(e,n.length-1),i=ou(t,n.length-1);if(r===i)return;const s=n[r],o=i<r?-1:1;for(let a=r;a!==i;a+=o)n[a]=n[a+o];n[i]=s}function ou(n,e){return Math.max(0,Math.min(e,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class zj{constructor(e,t,r,i,s){this._dragDropRegistry=t,this._ngZone=i,this._viewportRuler=s,this.disabled=!1,this.sortingDisabled=!1,this.autoScrollDisabled=!1,this.autoScrollStep=2,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.beforeStarted=new N,this.entered=new N,this.exited=new N,this.dropped=new N,this.sorted=new N,this._isDragging=!1,this._itemPositions=[],this._previousSwap={drag:null,delta:0,overlaps:!1},this._draggables=[],this._siblings=[],this._orientation="vertical",this._activeSiblings=new Set,this._direction="ltr",this._viewportScrollSubscription=Le.EMPTY,this._verticalScrollDirection=0,this._horizontalScrollDirection=0,this._stopScrollTimers=new N,this._cachedShadowRoot=null,this._startScrollInterval=()=>{this._stopScrolling(),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Vj(n=0,e=Ih){return n<0&&(n=0),JS(n,n,e)}(0,ZS).pipe(qi(this._stopScrollTimers)).subscribe(()=>{const o=this._scrollNode,a=this.autoScrollStep;1===this._verticalScrollDirection?o.scrollBy(0,-a):2===this._verticalScrollDirection&&o.scrollBy(0,a),1===this._horizontalScrollDirection?o.scrollBy(-a,0):2===this._horizontalScrollDirection&&o.scrollBy(a,0)})},this.element=Ue(e),this._document=r,this.withScrollableParents([this.element]),t.registerDropContainer(this),this._parentPositions=new yM(r,s)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(e,t,r,i){let s;this._draggingStarted(),null==i?(s=this.sortingDisabled?this._draggables.indexOf(e):-1,-1===s&&(s=this._getItemIndexFromPointerPosition(e,t,r))):s=i;const o=this._activeDraggables,a=o.indexOf(e),l=e.getPlaceholderElement();let c=o[s];if(c===e&&(c=o[s+1]),a>-1&&o.splice(a,1),c&&!this._dragDropRegistry.isDragging(c)){const u=c.getRootElement();u.parentElement.insertBefore(l,u),o.splice(s,0,e)}else if(this._shouldEnterAsFirstChild(t,r)){const u=o[0].getRootElement();u.parentNode.insertBefore(l,u),o.unshift(e)}else Ue(this.element).appendChild(l),o.push(e);l.style.transform="",this._cacheItemPositions(),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:e,container:this,currentIndex:this.getItemIndex(e)})}exit(e){this._reset(),this.exited.next({item:e,container:this})}drop(e,t,r,i,s,o,a){this._reset(),this.dropped.next({item:e,currentIndex:t,previousIndex:r,container:this,previousContainer:i,isPointerOverContainer:s,distance:o,dropPoint:a})}withItems(e){const t=this._draggables;return this._draggables=e,e.forEach(r=>r._withDropContainer(this)),this.isDragging()&&(t.filter(i=>i.isDragging()).every(i=>-1===e.indexOf(i))?this._reset():this._cacheItems()),this}withDirection(e){return this._direction=e,this}connectedTo(e){return this._siblings=e.slice(),this}withOrientation(e){return this._orientation=e,this}withScrollableParents(e){const t=Ue(this.element);return this._scrollableElements=-1===e.indexOf(t)?[t,...e]:e.slice(),this}getScrollableParents(){return this._scrollableElements}getItemIndex(e){return this._isDragging?("horizontal"===this._orientation&&"rtl"===this._direction?this._itemPositions.slice().reverse():this._itemPositions).findIndex(r=>r.drag===e):this._draggables.indexOf(e)}isReceiving(){return this._activeSiblings.size>0}_sortItem(e,t,r,i){if(this.sortingDisabled||!this._clientRect||!mM(this._clientRect,.05,t,r))return;const s=this._itemPositions,o=this._getItemIndexFromPointerPosition(e,t,r,i);if(-1===o&&s.length>0)return;const a="horizontal"===this._orientation,l=s.findIndex(m=>m.drag===e),c=s[o],u=s[l].clientRect,d=c.clientRect,h=l>o?1:-1,f=this._getItemOffsetPx(u,d,h),p=this._getSiblingOffsetPx(l,s,h),g=s.slice();IM(s,l,o),this.sorted.next({previousIndex:l,currentIndex:o,container:this,item:e}),s.forEach((m,C)=>{if(g[C]===m)return;const w=m.drag===e,_=w?f:p,M=w?e.getPlaceholderElement():m.drag.getRootElement();m.offset+=_,a?(M.style.transform=Oh(`translate3d(${Math.round(m.offset)}px, 0, 0)`,m.initialTransform),iu(m.clientRect,0,_)):(M.style.transform=Oh(`translate3d(0, ${Math.round(m.offset)}px, 0)`,m.initialTransform),iu(m.clientRect,_,0))}),this._previousSwap.overlaps=py(d,t,r),this._previousSwap.drag=c.drag,this._previousSwap.delta=a?i.x:i.y}_startScrollingIfNecessary(e,t){if(this.autoScrollDisabled)return;let r,i=0,s=0;if(this._parentPositions.positions.forEach((o,a)=>{a===this._document||!o.clientRect||r||mM(o.clientRect,.05,e,t)&&([i,s]=function Gj(n,e,t,r){const i=RM(e,r),s=xM(e,t);let o=0,a=0;if(i){const l=n.scrollTop;1===i?l>0&&(o=1):n.scrollHeight-l>n.clientHeight&&(o=2)}if(s){const l=n.scrollLeft;1===s?l>0&&(a=1):n.scrollWidth-l>n.clientWidth&&(a=2)}return[o,a]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(a,o.clientRect,e,t),(i||s)&&(r=a))}),!i&&!s){const{width:o,height:a}=this._viewportRuler.getViewportSize(),l={width:o,height:a,top:0,right:o,bottom:a,left:0};i=RM(l,t),s=xM(l,e),r=window}r&&(i!==this._verticalScrollDirection||s!==this._horizontalScrollDirection||r!==this._scrollNode)&&(this._verticalScrollDirection=i,this._horizontalScrollDirection=s,this._scrollNode=r,(i||s)&&r?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){const e=Ue(this.element).style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=e.msScrollSnapType||e.scrollSnapType||"",e.scrollSnapType=e.msScrollSnapType="none",this._cacheItems(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){const e=Ue(this.element);this._parentPositions.cache(this._scrollableElements),this._clientRect=this._parentPositions.positions.get(e).clientRect}_cacheItemPositions(){const e="horizontal"===this._orientation;this._itemPositions=this._activeDraggables.map(t=>{const r=t.getVisibleElement();return{drag:t,offset:0,initialTransform:r.style.transform||"",clientRect:fy(r)}}).sort((t,r)=>e?t.clientRect.left-r.clientRect.left:t.clientRect.top-r.clientRect.top)}_reset(){this._isDragging=!1;const e=Ue(this.element).style;e.scrollSnapType=e.msScrollSnapType=this._initialScrollSnap,this._activeDraggables.forEach(t=>{const r=t.getRootElement();if(r){const i=this._itemPositions.find(s=>s.drag===t)?.initialTransform;r.style.transform=i||""}}),this._siblings.forEach(t=>t._stopReceiving(this)),this._activeDraggables=[],this._itemPositions=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1,this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_getSiblingOffsetPx(e,t,r){const i="horizontal"===this._orientation,s=t[e].clientRect,o=t[e+-1*r];let a=s[i?"width":"height"]*r;if(o){const l=i?"left":"top",c=i?"right":"bottom";-1===r?a-=o.clientRect[l]-s[c]:a+=s[l]-o.clientRect[c]}return a}_getItemOffsetPx(e,t,r){const i="horizontal"===this._orientation;let s=i?t.left-e.left:t.top-e.top;return-1===r&&(s+=i?t.width-e.width:t.height-e.height),s}_shouldEnterAsFirstChild(e,t){if(!this._activeDraggables.length)return!1;const r=this._itemPositions,i="horizontal"===this._orientation;if(r[0].drag!==this._activeDraggables[0]){const o=r[r.length-1].clientRect;return i?e>=o.right:t>=o.bottom}{const o=r[0].clientRect;return i?e<=o.left:t<=o.top}}_getItemIndexFromPointerPosition(e,t,r,i){const s="horizontal"===this._orientation,o=this._itemPositions.findIndex(({drag:a,clientRect:l})=>{if(a===e)return!1;if(i){const c=s?i.x:i.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return s?t>=Math.floor(l.left)&&t<Math.floor(l.right):r>=Math.floor(l.top)&&r<Math.floor(l.bottom)});return-1!==o&&this.sortPredicate(o,e,this)?o:-1}_cacheItems(){this._activeDraggables=this._draggables.slice(),this._cacheItemPositions(),this._cacheParentPositions()}_isOverContainer(e,t){return null!=this._clientRect&&py(this._clientRect,e,t)}_getSiblingContainerFromPosition(e,t,r){return this._siblings.find(i=>i._canReceive(e,t,r))}_canReceive(e,t,r){if(!this._clientRect||!py(this._clientRect,t,r)||!this.enterPredicate(e,this))return!1;const i=this._getShadowRoot().elementFromPoint(t,r);if(!i)return!1;const s=Ue(this.element);return i===s||s.contains(i)}_startReceiving(e,t){const r=this._activeSiblings;!r.has(e)&&t.every(i=>this.enterPredicate(i,this)||this._draggables.indexOf(i)>-1)&&(r.add(e),this._cacheParentPositions(),this._listenToScrollEvents())}_stopReceiving(e){this._activeSiblings.delete(e),this._viewportScrollSubscription.unsubscribe()}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(e=>{if(this.isDragging()){const t=this._parentPositions.handleScroll(e);t&&(this._itemPositions.forEach(({clientRect:r})=>{iu(r,t.top,t.left)}),this._itemPositions.forEach(({drag:r})=>{this._dragDropRegistry.isDragging(r)&&r._sortFromLastPointerPosition()}))}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){const e=oy(Ue(this.element));this._cachedShadowRoot=e||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){const e=this._activeDraggables.filter(t=>t.isDragging());this._siblings.forEach(t=>t._startReceiving(this,e))}}function RM(n,e){const{top:t,bottom:r,height:i}=n,s=.05*i;return e>=t-s&&e<=t+s?1:e>=r-s&&e<=r+s?2:0}function xM(n,e){const{left:t,right:r,width:i}=n,s=.05*i;return e>=t-s&&e<=t+s?1:e>=r-s&&e<=r+s?2:0}const kh=Ka({passive:!1,capture:!0});class sl{constructor(e,t){this._ngZone=e,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=[],this._globalListeners=new Map,this._draggingPredicate=r=>r.isDragging(),this.pointerMove=new N,this.pointerUp=new N,this.scroll=new N,this._preventDefaultWhileDragging=r=>{this._activeDragInstances.length>0&&r.preventDefault()},this._persistentTouchmoveListener=r=>{this._activeDragInstances.length>0&&(this._activeDragInstances.some(this._draggingPredicate)&&r.preventDefault(),this.pointerMove.next(r))},this._document=t}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._persistentTouchmoveListener,kh)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._persistentTouchmoveListener,kh)}startDragging(e,t){if(!(this._activeDragInstances.indexOf(e)>-1)&&(this._activeDragInstances.push(e),1===this._activeDragInstances.length)){const r=t.type.startsWith("touch");this._globalListeners.set(r?"touchend":"mouseup",{handler:i=>this.pointerUp.next(i),options:!0}).set("scroll",{handler:i=>this.scroll.next(i),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:kh}),r||this._globalListeners.set("mousemove",{handler:i=>this.pointerMove.next(i),options:kh}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((i,s)=>{this._document.addEventListener(s,i.handler,i.options)})})}}stopDragging(e){const t=this._activeDragInstances.indexOf(e);t>-1&&(this._activeDragInstances.splice(t,1),0===this._activeDragInstances.length&&this._clearGlobalListeners())}isDragging(e){return this._activeDragInstances.indexOf(e)>-1}scrolled(e){const t=[this.scroll];return e&&e!==this._document&&t.push(new ne(r=>this._ngZone.runOutsideAngular(()=>{const s=o=>{this._activeDragInstances.length&&r.next(o)};return e.addEventListener("scroll",s,!0),()=>{e.removeEventListener("scroll",s,!0)}}))),qf(...t)}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((e,t)=>{this._document.removeEventListener(t,e.handler,e.options)}),this._globalListeners.clear()}}sl.\u0275fac=function(e){return new(e||sl)(D(ee),D(B))},sl.\u0275prov=E({token:sl,factory:sl.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qj={dragStartThreshold:5,pointerDirectionChangeThreshold:5};class Yi{constructor(e,t,r,i){this._document=e,this._ngZone=t,this._viewportRuler=r,this._dragDropRegistry=i}createDrag(e,t=qj){return new $j(e,t,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(e){return new zj(e,this._dragDropRegistry,this._document,this._ngZone,this._viewportRuler)}}Yi.\u0275fac=function(e){return new(e||Yi)(D(B),D(ee),D(io),D(sl))},Yi.\u0275prov=E({token:Yi,factory:Yi.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const my=new S("CDK_DRAG_PARENT"),yy=new S("CdkDropListGroup");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Xi{constructor(){this._items=new Set,this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=Xe(e)}ngOnDestroy(){this._items.clear()}}Xi.\u0275fac=function(e){return new(e||Xi)},Xi.\u0275dir=T({type:Xi,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:["cdkDropListGroupDisabled","disabled"]},exportAs:["cdkDropListGroup"],features:[J([{provide:yy,useExisting:Xi}])]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const OM=new S("CDK_DRAG_CONFIG");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Wj=0;const PM=new S("CdkDropList");class Et{constructor(e,t,r,i,s,o,a){this.element=e,this._changeDetectorRef=r,this._scrollDispatcher=i,this._dir=s,this._group=o,this._destroyed=new N,this.connectedTo=[],this.id="cdk-drop-list-"+Wj++,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.dropped=new z,this.entered=new z,this.exited=new z,this.sorted=new z,this._unsortedItems=new Set,this._dropListRef=t.createDropList(e),this._dropListRef.data=this,a&&this._assignDefaults(a),this._dropListRef.enterPredicate=(l,c)=>this.enterPredicate(l.data,c.data),this._dropListRef.sortPredicate=(l,c,u)=>this.sortPredicate(l,c.data,u.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),Et._dropLists.push(this),o&&o._items.add(this)}get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=Xe(e)}addItem(e){this._unsortedItems.add(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}removeItem(e){this._unsortedItems.delete(e),this._dropListRef.isDragging()&&this._syncItemsWithRef()}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){const e=Et._dropLists.indexOf(this);e>-1&&Et._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(qa(this._dir.value),qi(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{const t=function pB(n){return Array.isArray(n)?n:[n]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.connectedTo).map(r=>{if("string"==typeof r){return Et._dropLists.find(s=>s.id===r)}return r});if(this._group&&this._group._items.forEach(r=>{-1===t.indexOf(r)&&t.push(r)}),!this._scrollableParentsResolved){const r=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(i=>i.getElementRef().nativeElement);this._dropListRef.withScrollableParents(r),this._scrollableParentsResolved=!0}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=Xe(this.sortingDisabled),e.autoScrollDisabled=Xe(this.autoScrollDisabled),e.autoScrollStep=Gi(this.autoScrollStep,2),e.connectedTo(t.filter(r=>r&&r!==this).map(r=>r._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint}),this._changeDetectorRef.markForCheck()})}_assignDefaults(e){const{lockAxis:t,draggingDisabled:r,sortingDisabled:i,listAutoScrollDisabled:s,listOrientation:o}=e;this.disabled=r??!1,this.sortingDisabled=i??!1,this.autoScrollDisabled=s??!1,this.orientation=o||"vertical",t&&(this.lockAxis=t)}_syncItemsWithRef(){this._dropListRef.withItems(this.getSortedItems().map(e=>e._dragRef))}}Et._dropLists=[],Et.\u0275fac=function(e){return new(e||Et)(y(ye),y(Yi),y(Zn),y(Wi),y(tr,8),y(yy,12),y(OM,8))},Et.\u0275dir=T({type:Et,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(e,t){2&e&&(Ye("id",t.id),jt("cdk-drop-list-disabled",t.disabled)("cdk-drop-list-dragging",t._dropListRef.isDragging())("cdk-drop-list-receiving",t._dropListRef.isReceiving()))},inputs:{connectedTo:["cdkDropListConnectedTo","connectedTo"],data:["cdkDropListData","data"],orientation:["cdkDropListOrientation","orientation"],id:"id",lockAxis:["cdkDropListLockAxis","lockAxis"],disabled:["cdkDropListDisabled","disabled"],sortingDisabled:["cdkDropListSortingDisabled","sortingDisabled"],enterPredicate:["cdkDropListEnterPredicate","enterPredicate"],sortPredicate:["cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:["cdkDropListAutoScrollDisabled","autoScrollDisabled"],autoScrollStep:["cdkDropListAutoScrollStep","autoScrollStep"]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[J([{provide:yy,useValue:void 0},{provide:PM,useExisting:Et}])]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _y=new S("CdkDragHandle");class ho{constructor(e,t){this.element=e,this._stateChanges=new N,this._disabled=!1,this._parentDrag=t}get disabled(){return this._disabled}set disabled(e){this._disabled=Xe(e),this._stateChanges.next(this)}ngOnDestroy(){this._stateChanges.complete()}}ho.\u0275fac=function(e){return new(e||ho)(y(ye),y(my,12))},ho.\u0275dir=T({type:ho,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:["cdkDragHandleDisabled","disabled"]},features:[J([{provide:_y,useExisting:ho}])]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const kM=new S("CdkDragPlaceholder");class fo{constructor(e){this.templateRef=e}}fo.\u0275fac=function(e){return new(e||fo)(y(Ut))},fo.\u0275dir=T({type:fo,selectors:[["ng-template","cdkDragPlaceholder",""]],inputs:{data:"data"},features:[J([{provide:kM,useExisting:fo}])]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const NM=new S("CdkDragPreview");class po{constructor(e){this.templateRef=e,this._matchSize=!1}get matchSize(){return this._matchSize}set matchSize(e){this._matchSize=Xe(e)}}po.\u0275fac=function(e){return new(e||po)(y(Ut))},po.\u0275dir=T({type:po,selectors:[["ng-template","cdkDragPreview",""]],inputs:{data:"data",matchSize:"matchSize"},features:[J([{provide:NM,useExisting:po}])]});class St{constructor(e,t,r,i,s,o,a,l,c,u,d){this.element=e,this.dropContainer=t,this._ngZone=i,this._viewContainerRef=s,this._dir=a,this._changeDetectorRef=c,this._selfHandle=u,this._parentDrag=d,this._destroyed=new N,this.started=new z,this.released=new z,this.ended=new z,this.entered=new z,this.exited=new z,this.dropped=new z,this.moved=new ne(h=>{const f=this._dragRef.moved.pipe(G(p=>({source:this,pointerPosition:p.pointerPosition,event:p.event,delta:p.delta,distance:p.distance}))).subscribe(h);return()=>{f.unsubscribe()}}),this._dragRef=l.createDrag(e,{dragStartThreshold:o&&null!=o.dragStartThreshold?o.dragStartThreshold:5,pointerDirectionChangeThreshold:o&&null!=o.pointerDirectionChangeThreshold?o.pointerDirectionChangeThreshold:5,zIndex:o?.zIndex}),this._dragRef.data=this,St._dragInstances.push(this),o&&this._assignDefaults(o),t&&(this._dragRef._withDropContainer(t._dropListRef),t.addItem(this)),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}get disabled(){return this._disabled||this.dropContainer&&this.dropContainer.disabled}set disabled(e){this._disabled=Xe(e),this._dragRef.disabled=this._disabled}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe(Qi(1),qi(this._destroyed)).subscribe(()=>{this._updateRootElement(),this._setupHandlesListener(),this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)})})}ngOnChanges(e){const t=e.rootElementSelector,r=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),r&&!r.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this);const e=St._dragInstances.indexOf(this);e>-1&&St._dragInstances.splice(e,1),this._ngZone.runOutsideAngular(()=>{this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_updateRootElement(){const e=this.element.nativeElement;let t=e;this.rootElementSelector&&(t=void 0!==e.closest?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){const e=this.boundaryElement;return e?"string"==typeof e?this.element.nativeElement.closest(e):Ue(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){const t=this._dir,r=this.dragStartDelay,i=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,s=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.dragStartDelay="object"==typeof r&&r?r:Gi(r),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(i).withPreviewTemplate(s).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(Qi(1)).subscribe(()=>{if(this._parentDrag)return void e.withParent(this._parentDrag._dragRef);let t=this.element.nativeElement.parentElement;for(;t;){if(t.classList.contains("cdk-drag")){e.withParent(St._dragInstances.find(r=>r.element.nativeElement===t)?._dragRef||null);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(()=>{this.started.emit({source:this}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(()=>{this.released.emit({source:this})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint})})}_assignDefaults(e){const{lockAxis:t,dragStartDelay:r,constrainPosition:i,previewClass:s,boundaryElement:o,draggingDisabled:a,rootElementSelector:l,previewContainer:c}=e;this.disabled=a??!1,this.dragStartDelay=r||0,t&&(this.lockAxis=t),i&&(this.constrainPosition=i),s&&(this.previewClass=s),o&&(this.boundaryElement=o),l&&(this.rootElementSelector=l),c&&(this.previewContainer=c)}_setupHandlesListener(){this._handles.changes.pipe(qa(this._handles),Je(e=>{const t=e.filter(r=>r._parentDrag===this).map(r=>r.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),un(e=>qf(...e.map(t=>t._stateChanges.pipe(qa(t))))),qi(this._destroyed)).subscribe(e=>{const t=this._dragRef,r=e.element.nativeElement;e.disabled?t.disableHandle(r):t.enableHandle(r)})}}St._dragInstances=[],St.\u0275fac=function(e){return new(e||St)(y(ye),y(PM,12),y(B),y(ee),y(bt),y(OM,8),y(tr,8),y(Yi),y(Zn),y(_y,10),y(my,12))},St.\u0275dir=T({type:St,selectors:[["","cdkDrag",""]],contentQueries:function(e,t,r){if(1&e&&(xa(r,NM,5),xa(r,kM,5),xa(r,_y,5)),2&e){let i;Gn(i=qn())&&(t._previewTemplate=i.first),Gn(i=qn())&&(t._placeholderTemplate=i.first),Gn(i=qn())&&(t._handles=i)}},hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(e,t){2&e&&jt("cdk-drag-disabled",t.disabled)("cdk-drag-dragging",t._dragRef.isDragging())},inputs:{data:["cdkDragData","data"],lockAxis:["cdkDragLockAxis","lockAxis"],rootElementSelector:["cdkDragRootElement","rootElementSelector"],boundaryElement:["cdkDragBoundary","boundaryElement"],dragStartDelay:["cdkDragStartDelay","dragStartDelay"],freeDragPosition:["cdkDragFreeDragPosition","freeDragPosition"],disabled:["cdkDragDisabled","disabled"],constrainPosition:["cdkDragConstrainPosition","constrainPosition"],previewClass:["cdkDragPreviewClass","previewClass"],previewContainer:["cdkDragPreviewContainer","previewContainer"]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[J([{provide:my,useExisting:St}]),it]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ol{}ol.\u0275fac=function(e){return new(e||ol)},ol.\u0275mod=oe({type:ol,declarations:[Et,Xi,St,ho,po,fo],exports:[Pn,Et,Xi,St,ho,po,fo]}),ol.\u0275inj=re({providers:[Yi],imports:[Pn]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const FM=new Oi("13.0.0"),Zj=["*",[["mat-option"],["ng-container"]]];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yj(n,e){if(1&n&&at(0,"mat-pseudo-checkbox",4),2&n){const t=Bt();ce("state",t.selected?"checked":"unchecked")("disabled",t.disabled)}}function Xj(n,e){if(1&n&&($(0,"span",5),Ze(1),K()),2&n){const t=Bt();W(1),Fi("(",t.group.label,")")}}new Oi("13.0.0");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Nh{}Nh.STANDARD_CURVE="cubic-bezier(0.4,0.0,0.2,1)",Nh.DECELERATION_CURVE="cubic-bezier(0.0,0.0,0.2,1)",Nh.ACCELERATION_CURVE="cubic-bezier(0.4,0.0,1,1)",Nh.SHARP_CURVE="cubic-bezier(0.4,0.0,0.6,1)";class vy{}vy.COMPLEX="375ms",vy.ENTERING="225ms",vy.EXITING="195ms";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const LM=new Oi("13.0.0");const t2=new S("mat-sanity-checks",{providedIn:"root",factory:function e2(){return!0}});class Fe{constructor(e,t,r){this._hasDoneGlobalChecks=!1,this._document=r,e._applyBodyHighContrastModeCssClasses(),this._sanityChecks=t,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return!(!function P1(){return zE=!0,HE}()||function GB(){return typeof On.__karma__<"u"&&!!On.__karma__||typeof On.jasmine<"u"&&!!On.jasmine||typeof On.jest<"u"&&!!On.jest||typeof On.Mocha<"u"&&!!On.Mocha}())&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[e])}_checkDoctypeIsDefined(){this._checkIsEnabled("doctype")&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){if(!this._checkIsEnabled("theme")||!this._document.body||"function"!=typeof getComputedStyle)return;const e=this._document.createElement("div");e.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(e);const t=getComputedStyle(e);t&&"none"!==t.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),e.remove()}_checkCdkVersionMatch(){this._checkIsEnabled("version")&&LM.full!==FM.full&&console.warn("The Angular Material version ("+LM.full+") does not match the Angular CDK version ("+FM.full+").\nPlease ensure the versions of these two packages exactly match.")}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function VM(n){return class extends n{constructor(...e){super(...e),this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=Xe(e)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Fe.\u0275fac=function(e){return new(e||Fe)(D(uo),D(t2,8),D(B))},Fe.\u0275mod=oe({type:Fe,imports:[zt],exports:[zt]}),Fe.\u0275inj=re({imports:[[zt],zt]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const s2=new S("MAT_DATE_LOCALE",{providedIn:"root",factory:function o2(){return Y(Wn)}});class BM{constructor(){this._localeChanges=new N,this.localeChanges=this._localeChanges}getValidDateOrNull(e){return this.isDateInstance(e)&&this.isValid(e)?e:null}deserialize(e){return null==e||this.isDateInstance(e)&&this.isValid(e)?e:this.invalid()}setLocale(e){this.locale=e,this._localeChanges.next()}compareDate(e,t){return this.getYear(e)-this.getYear(t)||this.getMonth(e)-this.getMonth(t)||this.getDate(e)-this.getDate(t)}sameDate(e,t){if(e&&t){let r=this.isValid(e),i=this.isValid(t);return r&&i?!this.compareDate(e,t):r==i}return e==t}clampDate(e,t,r){return t&&this.compareDate(e,t)<0?t:r&&this.compareDate(e,r)>0?r:e}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const a2=new S("mat-date-formats"),l2=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Dy(n,e){const t=Array(n);for(let r=0;r<n;r++)t[r]=e(r);return t}class al extends BM{constructor(e,t){super(),this.useUtcForDisplay=!1,super.setLocale(e)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){const t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Dy(12,r=>this._format(t,new Date(2017,r,1)))}getDateNames(){const e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Dy(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){const t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Dy(7,r=>this._format(t,new Date(2017,0,r+1)))}getYearName(e){const t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,r){let i=this._createDateWithOverflow(e,t,r);return i.getMonth(),i}today(){return new Date}parse(e){return"number"==typeof e?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");const r=new Intl.DateTimeFormat(this.locale,{...t,timeZone:"utc"});return this._format(r,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,12*t)}addCalendarMonths(e,t){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+t)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if("string"==typeof e){if(!e)return null;if(l2.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}_createDateWithOverflow(e,t,r){const i=new Date;return i.setFullYear(e,t,r),i.setHours(0,0,0,0),i}_2digit(e){return("00"+e).slice(-2)}_format(e,t){const r=new Date;return r.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),r.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(r)}}al.\u0275fac=function(e){return new(e||al)(D(s2,8),D($t))},al.\u0275prov=E({token:al,factory:al.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class go{}go.\u0275fac=function(e){return new(e||go)},go.\u0275mod=oe({type:go,imports:[Ht]}),go.\u0275inj=re({providers:[{provide:BM,useClass:al}],imports:[[Ht]]});class au{}au.\u0275fac=function(e){return new(e||au)},au.\u0275mod=oe({type:au,imports:[go]}),au.\u0275inj=re({providers:[{provide:a2,useValue:{parse:{dateInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}}}],imports:[[go]]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class lu{isErrorState(e,t){return!!(e&&e.invalid&&(e.dirty||t&&t.submitted))}}lu.\u0275fac=function(e){return new(e||lu)},lu.\u0275prov=E({token:lu,factory:lu.\u0275fac});class cu{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}}cu.\u0275fac=function(e){return new(e||cu)},cu.\u0275prov=E({token:cu,factory:cu.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ll{}ll.\u0275fac=function(e){return new(e||ll)},ll.\u0275dir=T({type:ll,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]});class du{}du.\u0275fac=function(e){return new(e||du)},du.\u0275mod=oe({type:du,declarations:[ll],imports:[Fe],exports:[ll,Fe]}),du.\u0275inj=re({imports:[[Fe],Fe]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class u2{constructor(e,t,r){this._renderer=e,this.element=t,this.config=r,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const jM={enterDuration:225,exitDuration:150},Cy=Ka({passive:!0}),UM=["mousedown","touchstart"],$M=["mouseup","mouseleave","touchend","touchcancel"];class h2{constructor(e,t,r,i){this._target=e,this._ngZone=t,this._isPointerDown=!1,this._activeRipples=new Set,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=Ue(r))}fadeInRipple(e,t,r={}){const i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s={...jM,...r.animation};r.centered&&(e=i.left+i.width/2,t=i.top+i.height/2);const o=r.radius||function p2(n,e,t){const r=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),i=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(r*r+i*i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,t,i),a=e-i.left,l=t-i.top,c=s.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=a-o+"px",u.style.top=l-o+"px",u.style.height=2*o+"px",u.style.width=2*o+"px",null!=r.color&&(u.style.backgroundColor=r.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u),function f2(n){window.getComputedStyle(n).getPropertyValue("opacity")}(u),u.style.transform="scale(1)";const d=new u2(this,u,r);return d.state=0,this._activeRipples.add(d),r.persistent||(this._mostRecentTransientRipple=d),this._runTimeoutOutsideZone(()=>{const h=d===this._mostRecentTransientRipple;d.state=1,!r.persistent&&(!h||!this._isPointerDown)&&d.fadeOut()},c),d}fadeOutRipple(e){const t=this._activeRipples.delete(e);if(e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),this._activeRipples.size||(this._containerRect=null),!t)return;const r=e.element,i={...jM,...e.config.animation};r.style.transitionDuration=`${i.exitDuration}ms`,r.style.opacity="0",e.state=2,this._runTimeoutOutsideZone(()=>{e.state=3,r.remove()},i.exitDuration)}fadeOutAll(){this._activeRipples.forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._activeRipples.forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){const t=Ue(e);!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,this._registerEvents(UM))}handleEvent(e){"mousedown"===e.type?this._onMousedown(e):"touchstart"===e.type?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._registerEvents($M),this._pointerUpEventsRegistered=!0)}_onMousedown(e){const t=ly(e),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!t&&!r&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!cy(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const t=e.changedTouches;for(let r=0;r<t.length;r++)this.fadeInRipple(t[r].clientX,t[r].clientY,this._target.rippleConfig)}}_onPointerUp(){!this._isPointerDown||(this._isPointerDown=!1,this._activeRipples.forEach(e=>{const t=1===e.state||e.config.terminateOnPointerUp&&0===e.state;!e.config.persistent&&t&&e.fadeOut()}))}_runTimeoutOutsideZone(e,t=0){this._ngZone.runOutsideAngular(()=>setTimeout(e,t))}_registerEvents(e){this._ngZone.runOutsideAngular(()=>{e.forEach(t=>{this._triggerElement.addEventListener(t,this,Cy)})})}_removeTriggerEvents(){this._triggerElement&&(UM.forEach(e=>{this._triggerElement.removeEventListener(e,this,Cy)}),this._pointerUpEventsRegistered&&$M.forEach(e=>{this._triggerElement.removeEventListener(e,this,Cy)}))}}const g2=new S("mat-ripple-global-options");class Ji{constructor(e,t,r,i,s){this._elementRef=e,this._animationMode=s,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=i||{},this._rippleRenderer=new h2(this,t,e,r)}get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return"number"==typeof e?this._rippleRenderer.fadeInRipple(e,t,{...this.rippleConfig,...r}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...e})}}Ji.\u0275fac=function(e){return new(e||Ji)(y(ye),y(ee),y($t),y(g2,8),y(Nc,8))},Ji.\u0275dir=T({type:Ji,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,t){2&e&&jt("mat-ripple-unbounded",t.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Kr{}Kr.\u0275fac=function(e){return new(e||Kr)},Kr.\u0275mod=oe({type:Kr,declarations:[Ji],imports:[Fe,Ht],exports:[Ji,Fe]}),Kr.\u0275inj=re({imports:[[Fe,Ht],Fe]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class mo{constructor(e){this._animationMode=e,this.state="unchecked",this.disabled=!1}}mo.\u0275fac=function(e){return new(e||mo)(y(Nc,8))},mo.\u0275cmp=yn({type:mo,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:8,hostBindings:function(e,t){2&e&&jt("mat-pseudo-checkbox-indeterminate","indeterminate"===t.state)("mat-pseudo-checkbox-checked","checked"===t.state)("mat-pseudo-checkbox-disabled",t.disabled)("_mat-animation-noopable","NoopAnimations"===t._animationMode)},inputs:{state:"state",disabled:"disabled"},decls:0,vars:0,template:function(e,t){},styles:['.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n'],encapsulation:2,changeDetection:0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class yo{}yo.\u0275fac=function(e){return new(e||yo)},yo.\u0275mod=oe({type:yo,declarations:[mo],imports:[Fe],exports:[mo]}),yo.\u0275inj=re({imports:[[Fe]]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const HM=new S("MAT_OPTION_PARENT_COMPONENT"),m2=VM(class{});let y2=0;class hu extends m2{constructor(e){super(),this._labelId="mat-optgroup-label-"+y2++,this._inert=e?.inertGroups??!1}}hu.\u0275fac=function(e){return new(e||hu)(y(HM,8))},hu.\u0275dir=T({type:hu,inputs:{label:"label"},features:[ie]});const zM=new S("MatOptgroup");class es extends hu{}es.\u0275fac=function(){let n;return function(t){return(n||(n=ze(es)))(t||es)}}(),es.\u0275cmp=yn({type:es,selectors:[["mat-optgroup"]],hostAttrs:[1,"mat-optgroup"],hostVars:5,hostBindings:function(e,t){2&e&&(Ye("role",t._inert?null:"group")("aria-disabled",t._inert?null:t.disabled.toString())("aria-labelledby",t._inert?null:t._labelId),jt("mat-optgroup-disabled",t.disabled))},inputs:{disabled:"disabled"},exportAs:["matOptgroup"],features:[J([{provide:zM,useExisting:es}]),ie],ngContentSelectors:["*","mat-option, ng-container"],decls:4,vars:2,consts:[["aria-hidden","true",1,"mat-optgroup-label",3,"id"]],template:function(e,t){1&e&&(bc(Zj),$(0,"span",0),Ze(1),Ia(2),K(),Ia(3,1)),2&e&&(ce("id",t._labelId),W(1),Fi("",t.label," "))},styles:[".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],encapsulation:2,changeDetection:0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let _2=0;class v2{constructor(e,t=!1){this.source=e,this.isUserInput=t}}class Fh{constructor(e,t,r,i){this._element=e,this._changeDetectorRef=t,this._parent=r,this.group=i,this._selected=!1,this._active=!1,this._disabled=!1,this._mostRecentViewValue="",this.id="mat-option-"+_2++,this.onSelectionChange=new z,this._stateChanges=new N}get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}get disabled(){return this.group&&this.group.disabled||this._disabled}set disabled(e){this._disabled=Xe(e)}get disableRipple(){return this._parent&&this._parent.disableRipple}get active(){return this._active}get viewValue(){return(this._getHostElement().textContent||"").trim()}select(){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent())}deselect(){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent())}focus(e,t){const r=this._getHostElement();"function"==typeof r.focus&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(13===e.keyCode||32===e.keyCode)&&!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function fj(n,...e){return e.length?e.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=!this.multiple||!this._selected,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getAriaSelected(){return this.selected||!this.multiple&&null}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){const e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue=e,this._stateChanges.next())}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new v2(this,e))}}Fh.\u0275fac=function(e){Pd()},Fh.\u0275dir=T({type:Fh,inputs:{value:"value",id:"id",disabled:"disabled"},outputs:{onSelectionChange:"onSelectionChange"}});class cl extends Fh{constructor(e,t,r,i){super(e,t,r,i)}}cl.\u0275fac=function(e){return new(e||cl)(y(ye),y(Zn),y(HM,8),y(zM,8))},cl.\u0275cmp=yn({type:cl,selectors:[["mat-option"]],hostAttrs:["role","option",1,"mat-option","mat-focus-indicator"],hostVars:12,hostBindings:function(e,t){1&e&&Oe("click",function(){return t._selectViaInteraction()})("keydown",function(i){return t._handleKeydown(i)}),2&e&&(Wd("id",t.id),Ye("tabindex",t._getTabIndex())("aria-selected",t._getAriaSelected())("aria-disabled",t.disabled.toString()),jt("mat-selected",t.selected)("mat-option-multiple",t.multiple)("mat-active",t.active)("mat-option-disabled",t.disabled))},exportAs:["matOption"],features:[ie],ngContentSelectors:["*"],decls:5,vars:4,consts:[["class","mat-option-pseudo-checkbox",3,"state","disabled",4,"ngIf"],[1,"mat-option-text"],["class","cdk-visually-hidden",4,"ngIf"],["mat-ripple","",1,"mat-option-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-option-pseudo-checkbox",3,"state","disabled"],[1,"cdk-visually-hidden"]],template:function(e,t){1&e&&(bc(),Vt(0,Yj,1,2,"mat-pseudo-checkbox",0),$(1,"span",1),Ia(2),K(),Vt(3,Xj,2,1,"span",2),at(4,"div",3)),2&e&&(ce("ngIf",t.multiple),W(3),ce("ngIf",t.group&&t.group._inert),W(1),ce("matRippleTrigger",t._getHostElement())("matRippleDisabled",t.disabled||t.disableRipple))},dependencies:[mo,Pr,Ji],styles:[".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],encapsulation:2,changeDetection:0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fu{}fu.\u0275fac=function(e){return new(e||fu)},fu.\u0275mod=oe({type:fu,declarations:[cl,es],imports:[Kr,zr,Fe,yo],exports:[cl,es]}),fu.\u0275inj=re({imports:[[Kr,zr,Fe,yo]]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const{isArray:D2}=Array,{getPrototypeOf:C2,prototype:b2,keys:w2}=Object;function GM(n){if(1===n.length){const e=n[0];if(D2(e))return{args:e,keys:null};if(function E2(n){return n&&"object"==typeof n&&C2(n)===b2}(e)){const t=w2(e);return{args:t.map(r=>e[r]),keys:t}}}return{args:n,keys:null}}function qM(n,e){return n.reduce((t,r,i)=>(t[r]=e[i],t),{})}
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ul{constructor(e,t){this._renderer=e,this._elementRef=t,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}ul.\u0275fac=function(e){return new(e||ul)(y(Cn),y(ye))},ul.\u0275dir=T({type:ul});class hn extends ul{}hn.\u0275fac=function(){let n;return function(t){return(n||(n=ze(hn)))(t||hn)}}(),hn.\u0275dir=T({type:hn,features:[ie]});const kn=new S("NgValueAccessor"),M2={provide:kn,useExisting:ge(()=>Zr),multi:!0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Zr extends hn{writeValue(e){this.setProperty("checked",e)}}Zr.\u0275fac=function(){let n;return function(t){return(n||(n=ze(Zr)))(t||Zr)}}(),Zr.\u0275dir=T({type:Zr,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(e,t){1&e&&Oe("change",function(i){return t.onChange(i.target.checked)})("blur",function(){return t.onTouched()})},features:[J([M2]),ie]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const I2={provide:kn,useExisting:ge(()=>rr),multi:!0};const T2=new S("CompositionEventMode");class rr extends ul{constructor(e,t,r){super(e,t),this._compositionMode=r,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function A2(){const n=In()?In().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){const t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}rr.\u0275fac=function(e){return new(e||rr)(y(Cn),y(ye),y(T2,8))},rr.\u0275dir=T({type:rr,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,t){1&e&&Oe("input",function(i){return t._handleInput(i.target.value)})("blur",function(){return t.onTouched()})("compositionstart",function(){return t._compositionStart()})("compositionend",function(i){return t._compositionEnd(i.target.value)})},features:[J([I2]),ie]});function ts(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function WM(n){return null!=n&&"number"==typeof n.length}const et=new S("NgValidators"),ns=new S("NgAsyncValidators"),x2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function KM(n){return e=>{if(ts(e.value)||ts(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function ZM(n){return e=>{if(ts(e.value)||ts(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function QM(n){return ts(n.value)?{required:!0}:null}function YM(n){return!0===n.value?null:{required:!0}}function XM(n){return ts(n.value)||x2.test(n.value)?null:{email:!0}}function JM(n){return e=>ts(e.value)||!WM(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function eI(n){return e=>WM(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function tI(n){if(!n)return Lh;let e,t;return"string"==typeof n?(t="","^"!==n.charAt(0)&&(t+="^"),t+=n,"$"!==n.charAt(n.length-1)&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(ts(r.value))return null;const i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function Lh(n){return null}function nI(n){return null!=n}function rI(n){const e=Cc(n)?Ve(n):n;return e}function iI(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function sI(n,e){return e.map(t=>t(n))}function oI(n){return n.map(e=>function O2(n){return!n.validate}(e)?e:t=>e.validate(t))}function aI(n){if(!n)return null;const e=n.filter(nI);return 0==e.length?null:function(t){return iI(sI(t,e))}}function by(n){return null!=n?aI(oI(n)):null}function lI(n){if(!n)return null;const e=n.filter(nI);return 0==e.length?null:function(t){return function S2(...n){const e=lv(n),{args:t,keys:r}=GM(n),i=new ne(s=>{const{length:o}=t;if(!o)return void s.complete();const a=new Array(o);let l=o,c=o;for(let u=0;u<o;u++){let d=!1;vt(t[u]).subscribe(Se(s,h=>{d||(d=!0,c--),a[u]=h},()=>l--,void 0,()=>{(!l||!d)&&(c||s.next(r?qM(r,a):a),s.complete())}))}});return e?i.pipe(Ym(e)):i}(sI(t,e).map(rI)).pipe(G(iI))}}function wy(n){return null!=n?lI(oI(n)):null}function cI(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function uI(n){return n._rawValidators}function dI(n){return n._rawAsyncValidators}function Ey(n){return n?Array.isArray(n)?n:[n]:[]}function Vh(n,e){return Array.isArray(n)?n.includes(e):n===e}function hI(n,e){const t=Ey(e);return Ey(n).forEach(i=>{Vh(t,i)||t.push(i)}),t}function fI(n,e){return Ey(e).filter(t=>!Vh(n,t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class pI{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=by(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=wy(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _t extends pI{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rs extends pI{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gI{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}class is extends gI{constructor(e){super(e)}}is.\u0275fac=function(e){return new(e||is)(y(rs,2))},is.\u0275dir=T({type:is,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,t){2&e&&jt("ng-untouched",t.isUntouched)("ng-touched",t.isTouched)("ng-pristine",t.isPristine)("ng-dirty",t.isDirty)("ng-valid",t.isValid)("ng-invalid",t.isInvalid)("ng-pending",t.isPending)},features:[ie]});class _o extends gI{constructor(e){super(e)}}_o.\u0275fac=function(e){return new(e||_o)(y(_t,10))},_o.\u0275dir=T({type:_o,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,t){2&e&&jt("ng-untouched",t.isUntouched)("ng-touched",t.isTouched)("ng-pristine",t.isPristine)("ng-dirty",t.isDirty)("ng-valid",t.isValid)("ng-invalid",t.isInvalid)("ng-pending",t.isPending)("ng-submitted",t.isSubmitted)},features:[ie]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const pu="VALID",jh="INVALID",dl="PENDING",gu="DISABLED";function Ay(n){return(Uh(n)?n.validators:n)||null}function yI(n){return Array.isArray(n)?by(n):n||null}function Ty(n,e){return(Uh(e)?e.asyncValidators:n)||null}function _I(n){return Array.isArray(n)?wy(n):n||null}function Uh(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function vI(n,e,t){const r=n.controls;if(!(e?Object.keys(r):r).length)throw new v(1e3,"");if(!r[t])throw new v(1001,"")}function DI(n,e,t){n._forEachChild((r,i)=>{if(void 0===t[i])throw new v(1002,"")})}class $h{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=yI(this._rawValidators),this._composedAsyncValidatorFn=_I(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===pu}get invalid(){return this.status===jh}get pending(){return this.status==dl}get disabled(){return this.status===gu}get enabled(){return this.status!==gu}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=yI(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=_I(e)}addValidators(e){this.setValidators(hI(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(hI(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(fI(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(fI(e,this._rawAsyncValidators))}hasValidator(e){return Vh(this._rawValidators,e)}hasAsyncValidator(e){return Vh(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=dl,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=gu,this.errors=null,this._forEachChild(r=>{r.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=pu,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===pu||this.status===dl)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?gu:pu}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=dl,this._hasOwnPendingAsyncValidator=!0;const t=rI(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new z,this.statusChanges=new z}_calculateStatus(){return this._allControlsDisabled()?gu:this.errors?jh:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(dl)?dl:this._anyControlsHaveStatus(jh)?jh:pu}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Uh(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){const t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class mu extends $h{constructor(e,t,r){super(Ay(t),Ty(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){DI(this,0,e),Object.keys(e).forEach(r=>{vI(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{const i=this.controls[r];i&&i.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}class CI extends mu{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Hh(n,e){return[...e.path,n]}function yu(n,e){Ry(n,e),e.valueAccessor.writeValue(n.value),n.disabled&&e.valueAccessor.setDisabledState?.(!0),function j2(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&bI(n,e)})}(n,e),function $2(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function U2(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&bI(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function B2(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function zh(n,e,t=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),qh(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Gh(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Ry(n,e){const t=uI(n);null!==e.validator?n.setValidators(cI(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=dI(n);null!==e.asyncValidator?n.setAsyncValidators(cI(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();Gh(e._rawValidators,i),Gh(e._rawAsyncValidators,i)}function qh(n,e){let t=!1;if(null!==n){if(null!==e.validator){const i=uI(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(o=>o!==e.validator);s.length!==i.length&&(t=!0,n.setValidators(s))}}if(null!==e.asyncValidator){const i=dI(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(o=>o!==e.asyncValidator);s.length!==i.length&&(t=!0,n.setAsyncValidators(s))}}}const r=()=>{};return Gh(e._rawValidators,r),Gh(e._rawAsyncValidators,r),t}function bI(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function wI(n,e){Ry(n,e)}function xy(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}function SI(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function Oy(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===rr?t=s:function G2(n){return Object.getPrototypeOf(n.constructor)===hn}(s)?r=s:i=s}),i||r||t||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const W2={provide:_t,useExisting:ge(()=>Qr)},_u=Promise.resolve();class Qr extends _t{constructor(e,t){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new z,this.form=new mu({},by(e),wy(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){_u.then(()=>{const t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),yu(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){_u.then(()=>{const t=this._findContainer(e.path);t&&t.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){_u.then(()=>{const t=this._findContainer(e.path),r=new mu({});wI(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){_u.then(()=>{const t=this._findContainer(e.path);t&&t.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){_u.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,SI(this.form,this._directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function MI(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function II(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}Qr.\u0275fac=function(e){return new(e||Qr)(y(et,10),y(ns,10))},Qr.\u0275dir=T({type:Qr,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,t){1&e&&Oe("submit",function(i){return t.onSubmit(i)})("reset",function(){return t.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[J([W2]),ie]});const vu=class extends $h{constructor(e=null,t,r){super(Ay(t),Ty(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Uh(t)&&(t.nonNullable||t.initialValueIsDefault)&&(II(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){MI(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){MI(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange))&&(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0)}_applyFormState(e){II(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class vo extends _t{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Hh(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}vo.\u0275fac=function(){let n;return function(t){return(n||(n=ze(vo)))(t||vo)}}(),vo.\u0275dir=T({type:vo,features:[ie]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Z2={provide:_t,useExisting:ge(()=>ir)};class ir extends vo{constructor(e,t,r){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}_checkParentType(){!(this._parent instanceof ir)&&this._parent}}ir.\u0275fac=function(e){return new(e||ir)(y(_t,5),y(et,10),y(ns,10))},ir.\u0275dir=T({type:ir,selectors:[["","ngModelGroup",""]],inputs:{name:["ngModelGroup","name"]},exportAs:["ngModelGroup"],features:[J([Z2]),ie]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Q2={provide:rs,useExisting:ge(()=>Yr)},AI=Promise.resolve();class Yr extends rs{constructor(e,t,r,i,s){super(),this._changeDetectorRef=s,this.control=new vu,this._registered=!1,this.update=new z,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=Oy(0,i)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),xy(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){yu(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){AI.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const t=e.isDisabled.currentValue,r=0!==t&&Rr(t);AI.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Hh(e,this._parent):[e]}}Yr.\u0275fac=function(e){return new(e||Yr)(y(_t,9),y(et,10),y(ns,10),y(kn,10),y(Zn,8))},Yr.\u0275dir=T({type:Yr,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[J([Q2]),ie,it]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Do{}Do.\u0275fac=function(e){return new(e||Do)},Do.\u0275dir=T({type:Do,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Y2={provide:kn,useExisting:ge(()=>Xr),multi:!0};class Xr extends hn{writeValue(e){const t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(""==t?null:parseFloat(t))}}}Xr.\u0275fac=function(){let n;return function(t){return(n||(n=ze(Xr)))(t||Xr)}}(),Xr.\u0275dir=T({type:Xr,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,t){1&e&&Oe("input",function(i){return t.onChange(i.target.value)})("blur",function(){return t.onTouched()})},features:[J([Y2]),ie]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const X2={provide:kn,useExisting:ge(()=>os),multi:!0};class ss{}ss.\u0275fac=function(e){return new(e||ss)},ss.\u0275mod=oe({type:ss}),ss.\u0275inj=re({});class hl{constructor(){this._accessors=[]}add(e,t){this._accessors.push([e,t])}remove(e){for(let t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===e)return void this._accessors.splice(t,1)}select(e){this._accessors.forEach(t=>{this._isSameGroup(t,e)&&t[1]!==e&&t[1].fireUncheck(e.value)})}_isSameGroup(e,t){return!!e[0].control&&(e[0]._parent===t._control._parent&&e[1].name===t.name)}}hl.\u0275fac=function(e){return new(e||hl)},hl.\u0275prov=E({token:hl,factory:hl.\u0275fac,providedIn:ss});class os extends hn{constructor(e,t,r,i){super(e,t),this._registry=r,this._injector=i,this.onChange=()=>{}}ngOnInit(){this._control=this._injector.get(rs),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}fireUncheck(e){this.writeValue(e)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}}os.\u0275fac=function(e){return new(e||os)(y(Cn),y(ye),y(hl),y(Ne))},os.\u0275dir=T({type:os,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(e,t){1&e&&Oe("change",function(){return t.onChange()})("blur",function(){return t.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[J([X2]),ie]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const J2={provide:kn,useExisting:ge(()=>Jr),multi:!0};class Jr extends hn{writeValue(e){this.setProperty("value",parseFloat(e))}registerOnChange(e){this.onChange=t=>{e(""==t?null:parseFloat(t))}}}Jr.\u0275fac=function(){let n;return function(t){return(n||(n=ze(Jr)))(t||Jr)}}(),Jr.\u0275dir=T({type:Jr,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(e,t){1&e&&Oe("change",function(i){return t.onChange(i.target.value)})("input",function(i){return t.onChange(i.target.value)})("blur",function(){return t.onTouched()})},features:[J([J2]),ie]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Py=new S("NgModelWithFormControlWarning"),eU={provide:rs,useExisting:ge(()=>ei)};class ei extends rs{constructor(e,t,r,i){super(),this._ngModelWarningConfig=i,this.update=new z,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=Oy(0,r)}set isDisabled(e){}ngOnChanges(e){if(this._isControlChanged(e)){const t=e.form.previousValue;t&&zh(t,this,!1),yu(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}xy(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&zh(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}ei._ngModelWarningSentOnce=!1,ei.\u0275fac=function(e){return new(e||ei)(y(et,10),y(ns,10),y(kn,10),y(Py,8))},ei.\u0275dir=T({type:ei,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[J([eU]),ie,it]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const tU={provide:_t,useExisting:ge(()=>ti)};class ti extends _t{constructor(e,t){super(),this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new z,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(qh(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const t=this.form.get(e.path);return yu(t,e),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){zh(e.control||null,e,!1),function q2(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,t){this.form.get(e.path).setValue(t)}onSubmit(e){return this.submitted=!0,SI(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const t=e.control,r=this.form.get(e.path);t!==r&&(zh(t||null,e),(n=>n instanceof vu)(r)&&(yu(r,e),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const t=this.form.get(e.path);wI(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const t=this.form.get(e.path);t&&function H2(n,e){return qh(n,e)}(t,e)&&t.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Ry(this.form,this),this._oldForm&&qh(this._oldForm,this)}_checkFormPresent(){this.form}}ti.\u0275fac=function(e){return new(e||ti)(y(et,10),y(ns,10))},ti.\u0275dir=T({type:ti,selectors:[["","formGroup",""]],hostBindings:function(e,t){1&e&&Oe("submit",function(i){return t.onSubmit(i)})("reset",function(){return t.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[J([tU]),ie,it]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const nU={provide:_t,useExisting:ge(()=>ni)};class ni extends vo{constructor(e,t,r){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}_checkParentType(){TI(this._parent)}}ni.\u0275fac=function(e){return new(e||ni)(y(_t,13),y(et,10),y(ns,10))},ni.\u0275dir=T({type:ni,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[J([nU]),ie]});const rU={provide:_t,useExisting:ge(()=>ri)};class ri extends _t{constructor(e,t,r){super(),this._parent=e,this._setValidators(t),this._setAsyncValidators(r)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Hh(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){TI(this._parent)}}function TI(n){return!(n instanceof ni||n instanceof ti||n instanceof ri)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */ri.\u0275fac=function(e){return new(e||ri)(y(_t,13),y(et,10),y(ns,10))},ri.\u0275dir=T({type:ri,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[J([rU]),ie]});const iU={provide:rs,useExisting:ge(()=>ii)};class ii extends rs{constructor(e,t,r,i,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new z,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=Oy(0,i)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),xy(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Hh(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}ii._ngModelWarningSentOnce=!1,ii.\u0275fac=function(e){return new(e||ii)(y(_t,13),y(et,10),y(ns,10),y(kn,10),y(Py,8))},ii.\u0275dir=T({type:ii,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[J([iU]),ie,it]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const sU={provide:kn,useExisting:ge(()=>sr),multi:!0};function RI(n,e){return null==n?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${n}: ${e}`.slice(0,50))}class sr extends hn{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const r=RI(this._getOptionId(e),e);this.setProperty("value",r)}registerOnChange(e){this.onChange=t=>{this.value=this._getOptionValue(t),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const t of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(t),e))return t;return null}_getOptionValue(e){const t=function oU(n){return n.split(":")[0]}(e);return this._optionMap.has(t)?this._optionMap.get(t):e}}sr.\u0275fac=function(){let n;return function(t){return(n||(n=ze(sr)))(t||sr)}}(),sr.\u0275dir=T({type:sr,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,t){1&e&&Oe("change",function(i){return t.onChange(i.target.value)})("blur",function(){return t.onTouched()})},inputs:{compareWith:"compareWith"},features:[J([sU]),ie]});class Co{constructor(e,t,r){this._element=e,this._renderer=t,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(RI(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}Co.\u0275fac=function(e){return new(e||Co)(y(ye),y(Cn),y(sr,9))},Co.\u0275dir=T({type:Co,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const aU={provide:kn,useExisting:ge(()=>or),multi:!0};function xI(n,e){return null==n?`${e}`:("string"==typeof e&&(e=`'${e}'`),e&&"object"==typeof e&&(e="Object"),`${n}: ${e}`.slice(0,50))}class or extends hn{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let t;if(this.value=e,Array.isArray(e)){const r=e.map(i=>this._getOptionId(i));t=(i,s)=>{i._setSelected(r.indexOf(s.toString())>-1)}}else t=(r,i)=>{r._setSelected(!1)};this._optionMap.forEach(t)}registerOnChange(e){this.onChange=t=>{const r=[],i=t.selectedOptions;if(void 0!==i){const s=i;for(let o=0;o<s.length;o++){const a=s[o],l=this._getOptionValue(a.value);r.push(l)}}else{const s=t.options;for(let o=0;o<s.length;o++){const a=s[o];if(a.selected){const l=this._getOptionValue(a.value);r.push(l)}}}this.value=r,e(r)}}_registerOption(e){const t=(this._idCounter++).toString();return this._optionMap.set(t,e),t}_getOptionId(e){for(const t of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(t)._value,e))return t;return null}_getOptionValue(e){const t=function lU(n){return n.split(":")[0]}(e);return this._optionMap.has(t)?this._optionMap.get(t)._value:e}}or.\u0275fac=function(){let n;return function(t){return(n||(n=ze(or)))(t||or)}}(),or.\u0275dir=T({type:or,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,t){1&e&&Oe("change",function(i){return t.onChange(i.target)})("blur",function(){return t.onTouched()})},inputs:{compareWith:"compareWith"},features:[J([aU]),ie]});class bo{constructor(e,t,r){this._element=e,this._renderer=t,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(xI(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(xI(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function OI(n){return"number"==typeof n?n:parseInt(n,10)}function PI(n){return"number"==typeof n?n:parseFloat(n)}bo.\u0275fac=function(e){return new(e||bo)(y(ye),y(Cn),y(or,9))},bo.\u0275dir=T({type:bo,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});class Nn{constructor(){this._validator=Lh}ngOnChanges(e){if(this.inputName in e){const t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Lh,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}Nn.\u0275fac=function(e){return new(e||Nn)},Nn.\u0275dir=T({type:Nn,features:[it]});const cU={provide:et,useExisting:ge(()=>si),multi:!0};class si extends Nn{constructor(){super(...arguments),this.inputName="max",this.normalizeInput=e=>PI(e),this.createValidator=e=>ZM(e)}}si.\u0275fac=function(){let n;return function(t){return(n||(n=ze(si)))(t||si)}}(),si.\u0275dir=T({type:si,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(e,t){2&e&&Ye("max",t._enabled?t.max:null)},inputs:{max:"max"},features:[J([cU]),ie]});const uU={provide:et,useExisting:ge(()=>oi),multi:!0};class oi extends Nn{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=e=>PI(e),this.createValidator=e=>KM(e)}}oi.\u0275fac=function(){let n;return function(t){return(n||(n=ze(oi)))(t||oi)}}(),oi.\u0275dir=T({type:oi,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(e,t){2&e&&Ye("min",t._enabled?t.min:null)},inputs:{min:"min"},features:[J([uU]),ie]});const dU={provide:et,useExisting:ge(()=>ar),multi:!0},hU={provide:et,useExisting:ge(()=>lr),multi:!0};class ar extends Nn{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=Rr,this.createValidator=e=>QM}enabled(e){return e}}ar.\u0275fac=function(){let n;return function(t){return(n||(n=ze(ar)))(t||ar)}}(),ar.\u0275dir=T({type:ar,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,t){2&e&&Ye("required",t._enabled?"":null)},inputs:{required:"required"},features:[J([dU]),ie]});class lr extends ar{constructor(){super(...arguments),this.createValidator=e=>YM}}lr.\u0275fac=function(){let n;return function(t){return(n||(n=ze(lr)))(t||lr)}}(),lr.\u0275dir=T({type:lr,selectors:[["input","type","checkbox","required","","formControlName",""],["input","type","checkbox","required","","formControl",""],["input","type","checkbox","required","","ngModel",""]],hostVars:1,hostBindings:function(e,t){2&e&&Ye("required",t._enabled?"":null)},features:[J([hU]),ie]});const fU={provide:et,useExisting:ge(()=>ai),multi:!0};class ai extends Nn{constructor(){super(...arguments),this.inputName="email",this.normalizeInput=Rr,this.createValidator=e=>XM}enabled(e){return e}}ai.\u0275fac=function(){let n;return function(t){return(n||(n=ze(ai)))(t||ai)}}(),ai.\u0275dir=T({type:ai,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},features:[J([fU]),ie]});const pU={provide:et,useExisting:ge(()=>li),multi:!0};class li extends Nn{constructor(){super(...arguments),this.inputName="minlength",this.normalizeInput=e=>OI(e),this.createValidator=e=>JM(e)}}li.\u0275fac=function(){let n;return function(t){return(n||(n=ze(li)))(t||li)}}(),li.\u0275dir=T({type:li,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(e,t){2&e&&Ye("minlength",t._enabled?t.minlength:null)},inputs:{minlength:"minlength"},features:[J([pU]),ie]});const gU={provide:et,useExisting:ge(()=>ci),multi:!0};class ci extends Nn{constructor(){super(...arguments),this.inputName="maxlength",this.normalizeInput=e=>OI(e),this.createValidator=e=>eI(e)}}ci.\u0275fac=function(){let n;return function(t){return(n||(n=ze(ci)))(t||ci)}}(),ci.\u0275dir=T({type:ci,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(e,t){2&e&&Ye("maxlength",t._enabled?t.maxlength:null)},inputs:{maxlength:"maxlength"},features:[J([gU]),ie]});const mU={provide:et,useExisting:ge(()=>ui),multi:!0};class ui extends Nn{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=e=>e,this.createValidator=e=>tI(e)}}ui.\u0275fac=function(){let n;return function(t){return(n||(n=ze(ui)))(t||ui)}}(),ui.\u0275dir=T({type:ui,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(e,t){2&e&&Ye("pattern",t._enabled?t.pattern:null)},inputs:{pattern:"pattern"},features:[J([mU]),ie]});class di{}di.\u0275fac=function(e){return new(e||di)},di.\u0275mod=oe({type:di,declarations:[Do,Co,bo,rr,Xr,Jr,Zr,sr,or,os,is,_o,ar,li,ci,ui,lr,ai,oi,si],imports:[ss],exports:[Do,Co,bo,rr,Xr,Jr,Zr,sr,or,os,is,_o,ar,li,ci,ui,lr,ai,oi,si]}),di.\u0275inj=re({imports:[ss]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fl{}fl.\u0275fac=function(e){return new(e||fl)},fl.\u0275mod=oe({type:fl,declarations:[Yr,ir,Qr],exports:[di,Yr,ir,Qr]}),fl.\u0275inj=re({imports:[di]});class cr{static withConfig(e){return{ngModule:cr,providers:[{provide:Py,useValue:e.warnOnNgModelWithFormControl}]}}}cr.\u0275fac=function(e){return new(e||cr)},cr.\u0275mod=oe({type:cr,declarations:[ei,ti,ii,ni,ri],exports:[di,ei,ti,ii,ni,ri]}),cr.\u0275inj=re({imports:[di]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class kI extends $h{constructor(e,t,r){super(Ay(t),Ty(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,r={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,r={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){DI(this,0,e),e.forEach((r,i)=>{vI(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(e.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,r)=>!!r._syncPendingControls()||t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,r)=>{e(t,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function NI(n){return!!n&&(void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn)}class hi{constructor(){this.useNonNullable=!1}get nonNullable(){const e=new hi;return e.useNonNullable=!0,e}group(e,t=null){const r=this._reduceControls(e);let i={};return NI(t)?i=t:null!==t&&(i.validators=t.validator,i.asyncValidators=t.asyncValidator),new mu(r,i)}record(e,t=null){const r=this._reduceControls(e);return new CI(r,t)}control(e,t,r){let i={};return this.useNonNullable?(NI(t)?i=t:(i.validators=t,i.asyncValidators=r),new vu(e,{...i,nonNullable:!0})):new vu(e,t,r)}array(e,t,r){const i=e.map(s=>this._createControl(s));return new kI(i,t,r)}_reduceControls(e){const t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof vu)return e;if(e instanceof $h)return e;if(Array.isArray(e)){const t=e[0],r=e.length>1?e[1]:null,i=e.length>2?e[2]:null;return this.control(t,r,i)}return this.control(e)}}hi.\u0275fac=function(e){return new(e||hi)},hi.\u0275prov=E({token:hi,factory:hi.\u0275fac,providedIn:cr});class Wh{}Wh.\u0275fac=function(e){return new(e||Wh)},Wh.\u0275prov=E({token:Wh,factory:function(){return Y(hi).nonNullable},providedIn:cr});class pl extends hi{group(e,t=null){return super.group(e,t)}control(e,t,r){return super.control(e,t,r)}array(e,t,r){return super.array(e,t,r)}}pl.\u0275fac=function(){let n;return function(t){return(n||(n=ze(pl)))(t||pl)}}(),pl.\u0275prov=E({token:pl,factory:pl.\u0275fac,providedIn:cr});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Oi("14.3.0");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const yU=["thumbContainer"],_U=["toggleBar"],vU=["input"],DU=function(n){return{enterDuration:n}},bU=new S("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let wU=0;const EU={provide:kn,useExisting:ge(()=>wo),multi:!0};class SU{constructor(e,t){this.source=e,this.checked=t}}const MU=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function i2(n,e=0){return class extends n{constructor(...t){super(...t),this._tabIndex=e,this.defaultTabIndex=e}get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(t){this._tabIndex=null!=t?Gi(t):this.defaultTabIndex}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(function n2(n,e){return class extends n{constructor(...t){super(...t),this.defaultColor=e,this.color=e}get color(){return this._color}set color(t){const r=t||this.defaultColor;r!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),r&&this._elementRef.nativeElement.classList.add(`mat-${r}`),this._color=r)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(function r2(n){return class extends n{constructor(...e){super(...e),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Xe(e)}}}(VM(class{constructor(n){this._elementRef=n}}))));class wo extends MU{constructor(e,t,r,i,s,o){super(e),this._focusMonitor=t,this._changeDetectorRef=r,this.defaults=s,this._onChange=a=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++wU,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new z,this.toggleChange=new z,this.tabIndex=parseInt(i)||0,this.color=this.defaultColor=s.color||"accent",this._noopAnimations="NoopAnimations"===o}get required(){return this._required}set required(e){this._required=Xe(e)}get checked(){return this._checked}set checked(e){this._checked=Xe(e),this._changeDetectorRef.markForCheck()}get inputId(){return`${this.id||this._uniqueId}-input`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{"keyboard"===e||"program"===e?this._inputElement.nativeElement.focus():e||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(e){e.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(e){e.stopPropagation()}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new SU(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}wo.\u0275fac=function(e){return new(e||wo)(y(ye),y(co),y(Zn),Jo("tabindex"),y(bU),y(Nc,8))},wo.\u0275cmp=yn({type:wo,selectors:[["mat-slide-toggle"]],viewQuery:function(e,t){if(1&e&&(Oc(yU,5),Oc(_U,5),Oc(vU,5)),2&e){let r;Gn(r=qn())&&(t._thumbEl=r.first),Gn(r=qn())&&(t._thumbBarEl=r.first),Gn(r=qn())&&(t._inputElement=r.first)}},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(e,t){2&e&&(Wd("id",t.id),Ye("tabindex",t.disabled?null:-1)("aria-label",null)("aria-labelledby",null),jt("mat-checked",t.checked)("mat-disabled",t.disabled)("mat-slide-toggle-label-before","before"==t.labelPosition)("_mat-animation-noopable",t._noopAnimations))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[J([EU]),ie],ngContentSelectors:["*"],decls:16,vars:20,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(e,t){if(1&e&&(bc(),$(0,"label",0,1)(2,"div",2,3)(4,"input",4,5),Oe("change",function(i){return t._onChangeEvent(i)})("click",function(i){return t._onInputClick(i)}),K(),$(6,"div",6,7),at(8,"div",8),$(9,"div",9),at(10,"div",10),K()()(),$(11,"span",11,12),Oe("cdkObserveContent",function(){return t._onLabelTextChange()}),$(13,"span",13),Ze(14,"\xa0"),K(),Ia(15),K()()),2&e){const r=Ug(1),i=Ug(12);Ye("for",t.inputId),W(2),jt("mat-slide-toggle-bar-no-side-margin",!i.textContent||!i.textContent.trim()),W(2),ce("id",t.inputId)("required",t.required)("tabIndex",t.tabIndex)("checked",t.checked)("disabled",t.disabled),Ye("name",t.name)("aria-checked",t.checked.toString())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),W(5),ce("matRippleTrigger",r)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",Hw(18,DU,t._noopAnimations?0:150))}},dependencies:[Ji,ao],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const IU={provide:et,useExisting:ge(()=>as),multi:!0};class as extends lr{}as.\u0275fac=function(){let n;return function(t){return(n||(n=ze(as)))(t||as)}}(),as.\u0275dir=T({type:as,selectors:[["mat-slide-toggle","required","","formControlName",""],["mat-slide-toggle","required","","formControl",""],["mat-slide-toggle","required","","ngModel",""]],features:[J([IU]),ie]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fi{}fi.\u0275fac=function(e){return new(e||fi)},fi.\u0275mod=oe({type:fi,declarations:[as],exports:[as]}),fi.\u0275inj=re({});class gl{}gl.\u0275fac=function(e){return new(e||gl)},gl.\u0275mod=oe({type:gl,declarations:[wo],imports:[fi,Kr,Fe,Wr],exports:[fi,wo,Fe]}),gl.\u0275inj=re({imports:[[fi,Kr,Fe,Wr],fi,Fe]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Kh=Hl(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function FI(...n){const e=Gl(n),t=lv(n),{args:r,keys:i}=GM(n);if(0===r.length)return Ve([],e);const s=new ne(function AU(n,e,t=Ei){return r=>{LI(e,()=>{const{length:i}=n,s=new Array(i);let o=i,a=i;for(let l=0;l<i;l++)LI(e,()=>{const c=Ve(n[l],e);let u=!1;c.subscribe(Se(r,d=>{s[l]=d,u||(u=!0,a--),a||r.next(t(s.slice()))},()=>{--o||r.complete()}))},r)},r)}}(r,e,i?o=>qM(i,o):Ei));return t?s.pipe(Ym(t)):s}function LI(n,e,t){n?mr(t,n,e):e()}function VI(n){return new ne(e=>{vt(n()).subscribe(e)})}function Du(n,e){const t=te(n)?n:()=>n,r=i=>i.error(t());return new ne(e?i=>e.schedule(r,0,i):r)}function ky(){return Ie((n,e)=>{let t=null;n._refCount++;const r=Se(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount)return void(t=null);const i=n._connection,s=t;t=null,i&&(!s||i===s)&&i.unsubscribe(),e.unsubscribe()});n.subscribe(r),r.closed||(t=n.connect())})}class BI extends ne{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,K_(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Le;const t=this.getSubject();e.add(this.source.subscribe(Se(t,void 0,()=>{this._teardown(),t.complete()},r=>{this._teardown(),t.error(r)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Le.EMPTY)}return e}refCount(){return ky()(this)}}function Zh(n){return Ie((e,t)=>{let r=!1;e.subscribe(Se(t,i=>{r=!0,t.next(i)},()=>{r||t.next(n),t.complete()}))})}function jI(n=TU){return Ie((e,t)=>{let r=!1;e.subscribe(Se(t,i=>{r=!0,t.next(i)},()=>r?t.complete():t.error(n())))})}function TU(){return new Kh}function ls(n,e){const t=arguments.length>=2;return r=>r.pipe(n?xn((i,s)=>n(i,s,r)):Ei,Qi(1),t?Zh(e):jI(()=>new Kh))}function cs(n,e){return te(e)?We(n,e,1):We(n,1)}function pi(n){return Ie((e,t)=>{let s,r=null,i=!1;r=e.subscribe(Se(t,void 0,void 0,o=>{s=vt(n(o,pi(n)(e))),r?(r.unsubscribe(),r=null,s.subscribe(t)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(t))})}function RU(n,e,t,r,i){return(s,o)=>{let a=t,l=e,c=0;s.subscribe(Se(o,u=>{const d=c++;l=a?n(l,u,d):(a=!0,u),r&&o.next(l)},i&&(()=>{a&&o.next(l),o.complete()})))}}function UI(n,e){return Ie(RU(n,e,arguments.length>=2,!0))}function Ny(n){return n<=0?()=>yr:Ie((e,t)=>{let r=[];e.subscribe(Se(t,i=>{r.push(i),n<r.length&&r.shift()},()=>{for(const i of r)t.next(i);t.complete()},void 0,()=>{r=null}))})}function $I(n,e){const t=arguments.length>=2;return r=>r.pipe(n?xn((i,s)=>n(i,s,r)):Ei,Ny(1),t?Zh(e):jI(()=>new Kh))}function Fy(n){return Ie((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Q="primary",Cu=Symbol("RouteTitle");class PU{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function ml(n){return new PU(n)}function kU(n,e,t){const r=t.path.split("/");if(r.length>n.length||"full"===t.pathMatch&&(e.hasChildren()||r.length<n.length))return null;const i={};for(let s=0;s<r.length;s++){const o=r[s],a=n[s];if(o.startsWith(":"))i[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,r.length),posParams:i}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ur(n,e){const t=n?Object.keys(n):void 0,r=e?Object.keys(e):void 0;if(!t||!r||t.length!=r.length)return!1;let i;for(let s=0;s<t.length;s++)if(i=t[s],!HI(n[i],e[i]))return!1;return!0}function HI(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;const t=[...n].sort(),r=[...e].sort();return t.every((i,s)=>r[s]===i)}return n===e}function zI(n){return Array.prototype.concat.apply([],n)}function GI(n){return n.length>0?n[n.length-1]:null}function tt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(n[t],t)}function us(n){return Gg(n)?n:Cc(n)?Ve(Promise.resolve(n)):x(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const LU={exact:function KI(n,e,t){if(!So(n.segments,e.segments)||!Qh(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(const r in e.children)if(!n.children[r]||!KI(n.children[r],e.children[r],t))return!1;return!0},subset:ZI},qI={exact:function VU(n,e){return ur(n,e)},subset:function BU(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>HI(n[t],e[t]))},ignored:()=>!0};function WI(n,e,t){return LU[t.paths](n.root,e.root,t.matrixParams)&&qI[t.queryParams](n.queryParams,e.queryParams)&&!("exact"===t.fragment&&n.fragment!==e.fragment)}function ZI(n,e,t){return QI(n,e,e.segments,t)}function QI(n,e,t,r){if(n.segments.length>t.length){const i=n.segments.slice(0,t.length);return!(!So(i,t)||e.hasChildren()||!Qh(i,t,r))}if(n.segments.length===t.length){if(!So(n.segments,t)||!Qh(n.segments,t,r))return!1;for(const i in e.children)if(!n.children[i]||!ZI(n.children[i],e.children[i],r))return!1;return!0}{const i=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!!(So(n.segments,i)&&Qh(n.segments,i,r)&&n.children[Q])&&QI(n.children[Q],e,s,r)}}function Qh(n,e,t){return e.every((r,i)=>qI[t](n[i].parameters,r.parameters))}class Eo{constructor(e,t,r){this.root=e,this.queryParams=t,this.fragment=r}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ml(this.queryParams)),this._queryParamMap}toString(){return $U.serialize(this)}}class X{constructor(e,t){this.segments=e,this.children=t,this.parent=null,tt(t,(r,i)=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Yh(this)}}class bu{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=ml(this.parameters)),this._parameterMap}toString(){return JI(this)}}function So(n,e){return n.length===e.length&&n.every((t,r)=>t.path===e[r].path)}class yl{}yl.\u0275fac=function(e){return new(e||yl)},yl.\u0275prov=E({token:yl,factory:function(){return new Vy},providedIn:"root"});class Vy{parse(e){const t=new YU(e);return new Eo(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){const t=`/${wu(e.root,!0)}`,r=function GU(n){const e=Object.keys(n).map(t=>{const r=n[t];return Array.isArray(r)?r.map(i=>`${Xh(t)}=${Xh(i)}`).join("&"):`${Xh(t)}=${Xh(r)}`}).filter(t=>!!t);return e.length?`?${e.join("&")}`:""}(e.queryParams),i="string"==typeof e.fragment?`#${function HU(n){return encodeURI(n)}(e.fragment)}`:"";return`${t}${r}${i}`}}const $U=new Vy;function Yh(n){return n.segments.map(e=>JI(e)).join("/")}function wu(n,e){if(!n.hasChildren())return Yh(n);if(e){const t=n.children[Q]?wu(n.children[Q],!1):"",r=[];return tt(n.children,(i,s)=>{s!==Q&&r.push(`${s}:${wu(i,!1)}`)}),r.length>0?`${t}(${r.join("//")})`:t}{const t=function UU(n,e){let t=[];return tt(n.children,(r,i)=>{i===Q&&(t=t.concat(e(r,i)))}),tt(n.children,(r,i)=>{i!==Q&&(t=t.concat(e(r,i)))}),t}(n,(r,i)=>i===Q?[wu(n.children[Q],!1)]:[`${i}:${wu(r,!1)}`]);return 1===Object.keys(n.children).length&&null!=n.children[Q]?`${Yh(n)}/${t[0]}`:`${Yh(n)}/(${t.join("//")})`}}function YI(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Xh(n){return YI(n).replace(/%3B/gi,";")}function By(n){return YI(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Jh(n){return decodeURIComponent(n)}function XI(n){return Jh(n.replace(/\+/g,"%20"))}function JI(n){return`${By(n.path)}${function zU(n){return Object.keys(n).map(e=>`;${By(e)}=${By(n[e])}`).join("")}(n.parameters)}`}const qU=/^[^\/()?;=#]+/;function ef(n){const e=n.match(qU);return e?e[0]:""}const WU=/^[^=?&#]+/;const ZU=/^[^&#]+/;class YU{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new X([],{}):new X([],this.parseChildren())}parseQueryParams(){const e={};if(this.consumeOptional("?"))do{this.parseQueryParam(e)}while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(r[Q]=new X(e,t)),r}parseSegment(){const e=ef(this.remaining);if(""===e&&this.peekStartsWith(";"))throw new v(4009,false);return this.capture(e),new bu(Jh(e),this.parseMatrixParams())}parseMatrixParams(){const e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){const t=ef(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){const i=ef(this.remaining);i&&(r=i,this.capture(r))}e[Jh(t)]=Jh(r)}parseQueryParam(e){const t=function KU(n){const e=n.match(WU);return e?e[0]:""}(this.remaining);if(!t)return;this.capture(t);let r="";if(this.consumeOptional("=")){const o=function QU(n){const e=n.match(ZU);return e?e[0]:""}(this.remaining);o&&(r=o,this.capture(r))}const i=XI(t),s=XI(r);if(e.hasOwnProperty(i)){let o=e[i];Array.isArray(o)||(o=[o],e[i]=o),o.push(s)}else e[i]=s}parseParens(e){const t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=ef(this.remaining),i=this.remaining[r.length];if("/"!==i&&")"!==i&&";"!==i)throw new v(4010,false);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Q);const o=this.parseChildren();t[s]=1===Object.keys(o).length?o[Q]:new X([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return!!this.peekStartsWith(e)&&(this.remaining=this.remaining.substring(e.length),!0)}capture(e){if(!this.consumeOptional(e))throw new v(4011,false)}}function jy(n){return n.segments.length>0?new X([],{[Q]:n}):n}function tf(n){const e={};for(const r of Object.keys(n.children)){const s=tf(n.children[r]);(s.segments.length>0||s.hasChildren())&&(e[r]=s)}return function XU(n){if(1===n.numberOfChildren&&n.children[Q]){const e=n.children[Q];return new X(n.segments.concat(e.segments),e.children)}return n}(new X(n.segments,e))}function Mo(n){return n instanceof Eo}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function t$(n,e,t,r,i){if(0===t.length)return _l(e.root,e.root,e.root,r,i);const s=nA(t);if(s.toRoot())return _l(e.root,e.root,new X([],{}),r,i);return function o(l){const c=function r$(n,e,t,r){if(n.isAbsolute)return new vl(e.root,!0,0);if(-1===r){const o=t===e.root;return new vl(t,o,0)}const i=Eu(n.commands[0])?0:1;return rA(t,r+i,n.numberOfDoubleDots)}(s,e,n.snapshot?._urlSegment,l),u=c.processChildren?Mu(c.segmentGroup,c.index,s.commands):$y(c.segmentGroup,c.index,s.commands);return _l(e.root,c.segmentGroup,u,r,i)}(n.snapshot?._lastPathIndex)}function Eu(n){return"object"==typeof n&&null!=n&&!n.outlets&&!n.segmentPath}function Su(n){return"object"==typeof n&&null!=n&&n.outlets}function _l(n,e,t,r,i){let o,s={};r&&tt(r,(l,c)=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`}),o=n===e?t:eA(n,e,t);const a=jy(tf(o));return new Eo(a,s,i)}function eA(n,e,t){const r={};return tt(n.children,(i,s)=>{r[s]=i===e?t:eA(i,e,t)}),new X(n.segments,r)}class tA{constructor(e,t,r){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=r,e&&r.length>0&&Eu(r[0]))throw new v(4003,false);const i=r.find(Su);if(i&&i!==GI(r))throw new v(4004,false)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}function nA(n){if("string"==typeof n[0]&&1===n.length&&"/"===n[0])return new tA(!0,0,n);let e=0,t=!1;const r=n.reduce((i,s,o)=>{if("object"==typeof s&&null!=s){if(s.outlets){const a={};return tt(s.outlets,(l,c)=>{a[c]="string"==typeof l?l.split("/"):l}),[...i,{outlets:a}]}if(s.segmentPath)return[...i,s.segmentPath]}return"string"!=typeof s?[...i,s]:0===o?(s.split("/").forEach((a,l)=>{0==l&&"."===a||(0==l&&""===a?t=!0:".."===a?e++:""!=a&&i.push(a))}),i):[...i,s]},[]);return new tA(t,e,r)}class vl{constructor(e,t,r){this.segmentGroup=e,this.processChildren=t,this.index=r}}function rA(n,e,t){let r=n,i=e,s=t;for(;s>i;){if(s-=i,r=r.parent,!r)throw new v(4005,false);i=r.segments.length}return new vl(r,!1,i-s)}function $y(n,e,t){if(n||(n=new X([],{})),0===n.segments.length&&n.hasChildren())return Mu(n,e,t);const r=function s$(n,e,t){let r=0,i=e;const s={match:!1,pathIndex:0,commandIndex:0};for(;i<n.segments.length;){if(r>=t.length)return s;const o=n.segments[i],a=t[r];if(Su(a))break;const l=`${a}`,c=r<t.length-1?t[r+1]:null;if(i>0&&void 0===l)break;if(l&&c&&"object"==typeof c&&void 0===c.outlets){if(!sA(l,c,o))return s;r+=2}else{if(!sA(l,{},o))return s;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}(n,e,t),i=t.slice(r.commandIndex);if(r.match&&r.pathIndex<n.segments.length){const s=new X(n.segments.slice(0,r.pathIndex),{});return s.children[Q]=new X(n.segments.slice(r.pathIndex),n.children),Mu(s,0,i)}return r.match&&0===i.length?new X(n.segments,{}):r.match&&!n.hasChildren()?Hy(n,e,t):r.match?Mu(n,0,i):Hy(n,e,t)}function Mu(n,e,t){if(0===t.length)return new X(n.segments,{});{const r=function i$(n){return Su(n[0])?n[0].outlets:{[Q]:n}}(t),i={};return tt(r,(s,o)=>{"string"==typeof s&&(s=[s]),null!==s&&(i[o]=$y(n.children[o],e,s))}),tt(n.children,(s,o)=>{void 0===r[o]&&(i[o]=s)}),new X(n.segments,i)}}function Hy(n,e,t){const r=n.segments.slice(0,e);let i=0;for(;i<t.length;){const s=t[i];if(Su(s)){const l=o$(s.outlets);return new X(r,l)}if(0===i&&Eu(t[0])){const l=n.segments[e];r.push(new bu(l.path,iA(t[0]))),i++;continue}const o=Su(s)?s.outlets[Q]:`${s}`,a=i<t.length-1?t[i+1]:null;o&&a&&Eu(a)?(r.push(new bu(o,iA(a))),i+=2):(r.push(new bu(o,{})),i++)}return new X(r,{})}function o$(n){const e={};return tt(n,(t,r)=>{"string"==typeof t&&(t=[t]),null!==t&&(e[r]=Hy(new X([],{}),0,t))}),e}function iA(n){const e={};return tt(n,(t,r)=>e[r]=`${t}`),e}function sA(n,e,t){return n==t.path&&ur(e,t.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gi{constructor(e,t){this.id=e,this.url=t}}class zy extends gi{constructor(e,t,r="imperative",i=null){super(e,t),this.type=0,this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Io extends gi{constructor(e,t,r){super(e,t),this.urlAfterRedirects=r,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class nf extends gi{constructor(e,t,r,i){super(e,t),this.reason=r,this.code=i,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class oA extends gi{constructor(e,t,r,i){super(e,t),this.error=r,this.target=i,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class a$ extends gi{constructor(e,t,r,i){super(e,t),this.urlAfterRedirects=r,this.state=i,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class l$ extends gi{constructor(e,t,r,i){super(e,t),this.urlAfterRedirects=r,this.state=i,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class c$ extends gi{constructor(e,t,r,i,s){super(e,t),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=s,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class u$ extends gi{constructor(e,t,r,i){super(e,t),this.urlAfterRedirects=r,this.state=i,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class d$ extends gi{constructor(e,t,r,i){super(e,t),this.urlAfterRedirects=r,this.state=i,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class h${constructor(e){this.route=e,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class f${constructor(e){this.route=e,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class p${constructor(e){this.snapshot=e,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class g${constructor(e){this.snapshot=e,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class m${constructor(e){this.snapshot=e,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class y${constructor(e){this.snapshot=e,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class aA{constructor(e,t,r){this.routerEvent=e,this.position=t,this.anchor=r,this.type=15}toString(){const e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class lA{constructor(e){this._root=e}get root(){return this._root.value}parent(e){const t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){const t=Gy(e,this._root);return t?t.children.map(r=>r.value):[]}firstChild(e){const t=Gy(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){const t=qy(e,this._root);return t.length<2?[]:t[t.length-2].children.map(i=>i.value).filter(i=>i!==e)}pathFromRoot(e){return qy(e,this._root).map(t=>t.value)}}function Gy(n,e){if(n===e.value)return e;for(const t of e.children){const r=Gy(n,t);if(r)return r}return null}function qy(n,e){if(n===e.value)return[e];for(const t of e.children){const r=qy(n,t);if(r.length)return r.unshift(e),r}return[]}class mi{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}}function Dl(n){const e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class cA extends lA{constructor(e,t){super(e),this.snapshot=t,Wy(this,e)}toString(){return this.snapshot.toString()}}function uA(n,e){const t=function v$(n,e){const o=new rf([],{},{},"",{},Q,e,null,n.root,-1,{});return new hA("",new mi(o,[]))}(n,e),r=new dn([new bu("",{})]),i=new dn({}),s=new dn({}),o=new dn({}),a=new dn(""),l=new Ao(r,i,o,a,s,Q,e,t.root);return l.snapshot=t.root,new cA(new mi(l,[]),t)}class Ao{constructor(e,t,r,i,s,o,a,l){this.url=e,this.params=t,this.queryParams=r,this.fragment=i,this.data=s,this.outlet=o,this.component=a,this.title=this.data?.pipe(G(c=>c[Cu]))??x(void 0),this._futureSnapshot=l}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(G(e=>ml(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(G(e=>ml(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function dA(n,e="emptyOnly"){const t=n.pathFromRoot;let r=0;if("always"!==e)for(r=t.length-1;r>=1;){const i=t[r],s=t[r-1];if(i.routeConfig&&""===i.routeConfig.path)r--;else{if(s.component)break;r--}}return function D$(n){return n.reduce((e,t)=>({params:{...e.params,...t.params},data:{...e.data,...t.data},resolve:{...t.data,...e.resolve,...t.routeConfig?.data,...t._resolvedData}}),{params:{},data:{},resolve:{}})}(t.slice(r))}class rf{constructor(e,t,r,i,s,o,a,l,c,u,d,h){this.url=e,this.params=t,this.queryParams=r,this.fragment=i,this.data=s,this.outlet=o,this.component=a,this.title=this.data?.[Cu],this.routeConfig=l,this._urlSegment=c,this._lastPathIndex=u,this._correctedLastPathIndex=h??u,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=ml(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ml(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class hA extends lA{constructor(e,t){super(t),this.url=e,Wy(this,t)}toString(){return fA(this._root)}}function Wy(n,e){e.value._routerState=n,e.children.forEach(t=>Wy(n,t))}function fA(n){const e=n.children.length>0?` { ${n.children.map(fA).join(", ")} } `:"";return`${n.value}${e}`}function Ky(n){if(n.snapshot){const e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ur(e.queryParams,t.queryParams)||n.queryParams.next(t.queryParams),e.fragment!==t.fragment&&n.fragment.next(t.fragment),ur(e.params,t.params)||n.params.next(t.params),function NU(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ur(n[t],e[t]))return!1;return!0}(e.url,t.url)||n.url.next(t.url),ur(e.data,t.data)||n.data.next(t.data)}else n.snapshot=n._futureSnapshot,n.data.next(n._futureSnapshot.data)}function Zy(n,e){const t=ur(n.params,e.params)&&function jU(n,e){return So(n,e)&&n.every((t,r)=>ur(t.parameters,e[r].parameters))}(n.url,e.url),r=!n.parent!=!e.parent;return t&&!r&&(!n.parent||Zy(n.parent,e.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Iu(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){const r=t.value;r._futureSnapshot=e.value;const i=function b$(n,e,t){return e.children.map(r=>{for(const i of t.children)if(n.shouldReuseRoute(r.value,i.value.snapshot))return Iu(n,r,i);return Iu(n,r)})}(n,e,t);return new mi(r,i)}{if(n.shouldAttach(e.value)){const s=n.retrieve(e.value);if(null!==s){const o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Iu(n,a)),o}}const r=function w$(n){return new Ao(new dn(n.url),new dn(n.params),new dn(n.queryParams),new dn(n.fragment),new dn(n.data),n.outlet,n.component,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e.value),i=e.children.map(s=>Iu(n,s));return new mi(r,i)}}const Qy="ngNavigationCancelingError";function pA(n,e){const{redirectTo:t,navigationBehaviorOptions:r}=Mo(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,i=gA(!1,0,e);return i.url=t,i.navigationBehaviorOptions=r,i}function gA(n,e,t){const r=new Error("NavigationCancelingError: "+(n||""));return r[Qy]=!0,r.cancellationCode=e,t&&(r.url=t),r}function mA(n){return yA(n)&&Mo(n.url)}function yA(n){return n&&n[Qy]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class E${constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new dr,this.attachRef=null}}class dr{constructor(){this.contexts=new Map}onChildOutletCreated(e,t){const r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){const t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){const e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new E$,this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}}dr.\u0275fac=function(e){return new(e||dr)},dr.\u0275prov=E({token:dr,factory:dr.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const sf=!1;class ds{constructor(e,t,r,i,s){this.parentContexts=e,this.location=t,this.changeDetector=i,this.environmentInjector=s,this.activated=null,this._activatedRoute=null,this.activateEvents=new z,this.deactivateEvents=new z,this.attachEvents=new z,this.detachEvents=new z,this.name=r||Q,e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new v(4012,sf);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new v(4012,sf);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new v(4012,sf);this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new v(4013,sf);this._activatedRoute=e;const r=this.location,s=e._futureSnapshot.component,o=this.parentContexts.getOrCreateContext(this.name).children,a=new S$(e,o,r.injector);if(t&&function M$(n){return!!n.resolveComponentFactory}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)){const l=t.resolveComponentFactory(s);this.activated=r.createComponent(l,r.length,a)}else{const l=t??this.environmentInjector;this.activated=r.createComponent(s,{index:r.length,injector:a,environmentInjector:l})}this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}ds.\u0275fac=function(e){return new(e||ds)(y(dr),y(bt),Jo("name"),y(Zn),y(xi))},ds.\u0275dir=T({type:ds,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0});class S${constructor(e,t,r){this.route=e,this.childContexts=t,this.parent=r}get(e,t){return e===Ao?this.route:e===dr?this.childContexts:this.parent.get(e,t)}}class yi{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function _A(n,e){return n.providers&&!n._injector&&(n._injector=Xd(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Xy(n){const e=n.children&&n.children.map(Xy),t=e?{...n,children:e}:{...n};return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Q&&(t.component=yi),t}function fn(n){return n.outlet||Q}function vA(n,e){const t=n.filter(r=>fn(r)===e);return t.push(...n.filter(r=>fn(r)!==e)),t}function Au(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){const t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */yi.\u0275fac=function(e){return new(e||yi)},yi.\u0275cmp=yn({type:yi,selectors:[["ng-component"]],standalone:!0,features:[Fw],decls:1,vars:0,template:function(e,t){1&e&&at(0,"router-outlet")},dependencies:[ds],encapsulation:2});class x${constructor(e,t,r,i){this.routeReuseStrategy=e,this.futureState=t,this.currState=r,this.forwardEvent=i}activate(e){const t=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,r,e),Ky(this.futureState.root),this.activateChildRoutes(t,r,e)}deactivateChildRoutes(e,t,r){const i=Dl(t);e.children.forEach(s=>{const o=s.value.outlet;this.deactivateRoutes(s,i[o],r),delete i[o]}),tt(i,(s,o)=>{this.deactivateRouteAndItsChildren(s,r)})}deactivateRoutes(e,t,r){const i=e.value,s=t?t.value:null;if(i===s)if(i.component){const o=r.getContext(i.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,r);else s&&this.deactivateRouteAndItsChildren(t,r)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){const r=t.getContext(e.value.outlet),i=r&&e.value.component?r.children:t,s=Dl(e);for(const o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],i);if(r&&r.outlet){const o=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){const r=t.getContext(e.value.outlet),i=r&&e.value.component?r.children:t,s=Dl(e);for(const o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],i);r&&r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated(),r.attachRef=null,r.resolver=null,r.route=null)}activateChildRoutes(e,t,r){const i=Dl(t);e.children.forEach(s=>{this.activateRoutes(s,i[s.value.outlet],r),this.forwardEvent(new y$(s.value.snapshot))}),e.children.length&&this.forwardEvent(new g$(e.value.snapshot))}activateRoutes(e,t,r){const i=e.value,s=t?t.value:null;if(Ky(i),i===s)if(i.component){const o=r.getOrCreateContext(i.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,r);else if(i.component){const o=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){const a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Ky(a.route.value),this.activateChildRoutes(e,null,o.children)}else{const a=Au(i.snapshot),l=a?.get(da)??null;o.attachRef=null,o.route=i,o.resolver=l,o.injector=a,o.outlet&&o.outlet.activateWith(i,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class DA{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}}class of{constructor(e,t){this.component=e,this.route=t}}function O$(n,e,t){const r=n._root;return Tu(r,e?e._root:null,t,[r.value])}function Cl(n,e){const t=Symbol(),r=e.get(n,t);return r===t?"function"!=typeof n||function M0(n){return null!==Xu(n)}(n)?e.get(n):n:r}function Tu(n,e,t,r,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=Dl(e);return n.children.forEach(o=>{(function k$(n,e,t,r,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){const l=function N$(n,e,t){if("function"==typeof t)return t(n,e);switch(t){case"pathParamsChange":return!So(n.url,e.url);case"pathParamsOrQueryParamsChange":return!So(n.url,e.url)||!ur(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Zy(n,e)||!ur(n.queryParams,e.queryParams);default:return!Zy(n,e)}}(o,s,s.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new DA(r)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Tu(n,e,a?a.children:null,r,i):Tu(n,e,t,r,i),l&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new of(a.outlet.component,o))}else o&&Ru(e,a,i),i.canActivateChecks.push(new DA(r)),s.component?Tu(n,null,a?a.children:null,r,i):Tu(n,null,t,r,i);return i})(o,s[o.value.outlet],t,r.concat([o.value]),i),delete s[o.value.outlet]}),tt(s,(o,a)=>Ru(o,t.getContext(a),i)),i}function Ru(n,e,t){const r=Dl(n),i=n.value;tt(r,(s,o)=>{i.component?Ru(s,e?e.children.getContext(o):null,t):Ru(s,e,t)}),i.component&&e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new of(e.outlet.component,i)):t.canDeactivateChecks.push(new of(null,i))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xu(n){return"function"==typeof n}function Jy(n){return n instanceof Kh||"EmptyError"===n?.name}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const af=Symbol("INITIAL_VALUE");function bl(){return un(n=>FI(n.map(e=>e.pipe(Qi(1),qa(af)))).pipe(G(e=>{for(const t of e)if(!0!==t){if(t===af)return af;if(!1===t||t instanceof Eo)return t}return!0}),xn(e=>e!==af),Qi(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function H$(n,e){return We(t=>{const{targetSnapshot:r,currentSnapshot:i,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return 0===o.length&&0===s.length?x({...t,guardsResult:!0}):function z$(n,e,t,r){return Ve(n).pipe(We(i=>function Q$(n,e,t,r,i){const s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||0===s.length)return x(!0);return x(s.map(a=>{const l=Au(e)??i,c=Cl(a,l);return us(function j$(n){return n&&xu(n.canDeactivate)}(c)?c.canDeactivate(n,e,t,r):l.runInContext(()=>c(n,e,t,r))).pipe(ls())})).pipe(bl())}(i.component,i.route,t,e,r)),ls(i=>!0!==i,!0))}(o,r,i,n).pipe(We(a=>a&&function F$(n){return"boolean"==typeof n}(a)?function G$(n,e,t,r){return Ve(e).pipe(cs(i=>ry(function W$(n,e){return null!==n&&e&&e(new p$(n)),x(!0)}(i.route.parent,r),function q$(n,e){return null!==n&&e&&e(new m$(n)),x(!0)}(i.route,r),function Z$(n,e,t){const r=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>function P$(n){const e=n.routeConfig?n.routeConfig.canActivateChild:null;return e&&0!==e.length?{node:n,guards:e}:null}(o)).filter(o=>null!==o).map(o=>VI(()=>x(o.guards.map(l=>{const c=Au(o.node)??t,u=Cl(l,c);return us(function B$(n){return n&&xu(n.canActivateChild)}(u)?u.canActivateChild(r,n):c.runInContext(()=>u(r,n))).pipe(ls())})).pipe(bl())));return x(s).pipe(bl())}(n,i.path,t),function K$(n,e,t){const r=e.routeConfig?e.routeConfig.canActivate:null;if(!r||0===r.length)return x(!0);const i=r.map(s=>VI(()=>{const o=Au(e)??t,a=Cl(s,o);return us(function V$(n){return n&&xu(n.canActivate)}(a)?a.canActivate(e,n):o.runInContext(()=>a(e,n))).pipe(ls())}));return x(i).pipe(bl())}(n,i.route,t))),ls(i=>!0!==i,!0))}(r,s,n,e):x(a)),G(a=>({...t,guardsResult:a})))})}function Y$(n,e,t,r){const i=e.canLoad;if(void 0===i||0===i.length)return x(!0);return x(i.map(o=>{const a=Cl(o,n);return us(function L$(n){return n&&xu(n.canLoad)}(a)?a.canLoad(e,t):n.runInContext(()=>a(e,t)))})).pipe(bl(),CA(r))}function CA(n){return function KT(...n){return G_(n)}(Je(e=>{if(Mo(e))throw pA(0,e)}),G(e=>!0===e))}function X$(n,e,t,r){const i=e.canMatch;if(!i||0===i.length)return x(!0);return x(i.map(o=>{const a=Cl(o,n);return us(function U$(n){return n&&xu(n.canMatch)}(a)?a.canMatch(e,t):n.runInContext(()=>a(e,t)))})).pipe(bl(),CA())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const e_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function bA(n,e,t,r,i){const s=t_(n,e,t);return s.matched?X$(r=_A(e,r),e,t).pipe(G(o=>!0===o?s:{...e_})):x(s)}function t_(n,e,t){if(""===e.path)return"full"===e.pathMatch&&(n.hasChildren()||t.length>0)?{...e_}:{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};const i=(e.matcher||kU)(t,n,e);if(!i)return{...e_};const s={};tt(i.posParams,(a,l)=>{s[l]=a.path});const o=i.consumed.length>0?{...s,...i.consumed[i.consumed.length-1].parameters}:s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:t.slice(i.consumed.length),parameters:o,positionalParamSegments:i.posParams??{}}}function lf(n,e,t,r,i="corrected"){if(t.length>0&&function tH(n,e,t){return t.some(r=>cf(n,e,r)&&fn(r)!==Q)}(n,t,r)){const o=new X(e,function eH(n,e,t,r){const i={};i[Q]=r,r._sourceSegment=n,r._segmentIndexShift=e.length;for(const s of t)if(""===s.path&&fn(s)!==Q){const o=new X([],{});o._sourceSegment=n,o._segmentIndexShift=e.length,i[fn(s)]=o}return i}(n,e,r,new X(t,n.children)));return o._sourceSegment=n,o._segmentIndexShift=e.length,{segmentGroup:o,slicedSegments:[]}}if(0===t.length&&function nH(n,e,t){return t.some(r=>cf(n,e,r))}(n,t,r)){const o=new X(n.segments,function J$(n,e,t,r,i,s){const o={};for(const a of r)if(cf(n,t,a)&&!i[fn(a)]){const l=new X([],{});l._sourceSegment=n,l._segmentIndexShift="legacy"===s?n.segments.length:e.length,o[fn(a)]=l}return{...i,...o}}(n,e,t,r,n.children,i));return o._sourceSegment=n,o._segmentIndexShift=e.length,{segmentGroup:o,slicedSegments:t}}const s=new X(n.segments,n.children);return s._sourceSegment=n,s._segmentIndexShift=e.length,{segmentGroup:s,slicedSegments:t}}function cf(n,e,t){return(!(n.hasChildren()||e.length>0)||"full"!==t.pathMatch)&&""===t.path}function wA(n,e,t,r){return!!(fn(n)===r||r!==Q&&cf(e,t,n))&&("**"===n.path||t_(e,n,t).matched)}function EA(n,e,t){return 0===e.length&&!n.children[t]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const uf=!1;class df{constructor(e){this.segmentGroup=e||null}}class SA{constructor(e){this.urlTree=e}}function Ou(n){return Du(new df(n))}function MA(n){return Du(new SA(n))}class oH{constructor(e,t,r,i,s){this.injector=e,this.configLoader=t,this.urlSerializer=r,this.urlTree=i,this.config=s,this.allowRedirects=!0}apply(){const e=lf(this.urlTree.root,[],[],this.config).segmentGroup,t=new X(e.segments,e.children);return this.expandSegmentGroup(this.injector,this.config,t,Q).pipe(G(s=>this.createUrlTree(tf(s),this.urlTree.queryParams,this.urlTree.fragment))).pipe(pi(s=>{if(s instanceof SA)return this.allowRedirects=!1,this.match(s.urlTree);throw s instanceof df?this.noMatchError(s):s}))}match(e){return this.expandSegmentGroup(this.injector,this.config,e.root,Q).pipe(G(i=>this.createUrlTree(tf(i),e.queryParams,e.fragment))).pipe(pi(i=>{throw i instanceof df?this.noMatchError(i):i}))}noMatchError(e){return new v(4002,uf)}createUrlTree(e,t,r){const i=jy(e);return new Eo(i,t,r)}expandSegmentGroup(e,t,r,i){return 0===r.segments.length&&r.hasChildren()?this.expandChildren(e,t,r).pipe(G(s=>new X([],s))):this.expandSegment(e,r,t,r.segments,i,!0)}expandChildren(e,t,r){const i=[];for(const s of Object.keys(r.children))"primary"===s?i.unshift(s):i.push(s);return Ve(i).pipe(cs(s=>{const o=r.children[s],a=vA(t,s);return this.expandSegmentGroup(e,a,o,s).pipe(G(l=>({segment:l,outlet:s})))}),UI((s,o)=>(s[o.outlet]=o.segment,s),{}),$I())}expandSegment(e,t,r,i,s,o){return Ve(r).pipe(cs(a=>this.expandSegmentAgainstRoute(e,t,r,a,i,s,o).pipe(pi(c=>{if(c instanceof df)return x(null);throw c}))),ls(a=>!!a),pi((a,l)=>{if(Jy(a))return EA(t,i,s)?x(new X([],{})):Ou(t);throw a}))}expandSegmentAgainstRoute(e,t,r,i,s,o,a){return wA(i,t,s,o)?void 0===i.redirectTo?this.matchSegmentAgainstRoute(e,t,i,s,o):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,t,r,i,s,o):Ou(t):Ou(t)}expandSegmentAgainstRouteUsingRedirect(e,t,r,i,s,o){return"**"===i.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,r,i,o):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,r,i,s,o)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,r,i){const s=this.applyRedirectCommands([],r.redirectTo,{});return r.redirectTo.startsWith("/")?MA(s):this.lineralizeSegments(r,s).pipe(We(o=>{const a=new X(o,{});return this.expandSegment(e,a,t,o,i,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,r,i,s,o){const{matched:a,consumedSegments:l,remainingSegments:c,positionalParamSegments:u}=t_(t,i,s);if(!a)return Ou(t);const d=this.applyRedirectCommands(l,i.redirectTo,u);return i.redirectTo.startsWith("/")?MA(d):this.lineralizeSegments(i,d).pipe(We(h=>this.expandSegment(e,t,r,h.concat(c),o,!1)))}matchSegmentAgainstRoute(e,t,r,i,s){return"**"===r.path?(e=_A(r,e),r.loadChildren?(r._loadedRoutes?x({routes:r._loadedRoutes,injector:r._loadedInjector}):this.configLoader.loadChildren(e,r)).pipe(G(a=>(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,new X(i,{})))):x(new X(i,{}))):bA(t,r,i,e,this.urlSerializer).pipe(un(({matched:o,consumedSegments:a,remainingSegments:l})=>o?(e=r._injector??e,this.getChildConfig(e,r,i).pipe(We(u=>{const d=u.injector??e,h=u.routes,{segmentGroup:f,slicedSegments:p}=lf(t,a,l,h),g=new X(f.segments,f.children);if(0===p.length&&g.hasChildren())return this.expandChildren(d,h,g).pipe(G(_=>new X(a,_)));if(0===h.length&&0===p.length)return x(new X(a,{}));const m=fn(r)===s;return this.expandSegment(d,g,h,p,m?Q:s,!0).pipe(G(w=>new X(a.concat(w.segments),w.children)))}))):Ou(t)))}getChildConfig(e,t,r){return t.children?x({routes:t.children,injector:e}):t.loadChildren?void 0!==t._loadedRoutes?x({routes:t._loadedRoutes,injector:t._loadedInjector}):Y$(e,t,r,this.urlSerializer).pipe(We(i=>i?this.configLoader.loadChildren(e,t).pipe(Je(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):function iH(n){return Du(gA(uf,3))}())):x({routes:[],injector:e})}lineralizeSegments(e,t){let r=[],i=t.root;for(;;){if(r=r.concat(i.segments),0===i.numberOfChildren)return x(r);if(i.numberOfChildren>1||!i.children[Q])return e.redirectTo,Du(new v(4e3,uf));i=i.children[Q]}}applyRedirectCommands(e,t,r){return this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,r)}applyRedirectCreateUrlTree(e,t,r,i){const s=this.createSegmentGroup(e,t.root,r,i);return new Eo(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){const r={};return tt(e,(i,s)=>{if("string"==typeof i&&i.startsWith(":")){const a=i.substring(1);r[s]=t[a]}else r[s]=i}),r}createSegmentGroup(e,t,r,i){const s=this.createSegments(e,t.segments,r,i);let o={};return tt(t.children,(a,l)=>{o[l]=this.createSegmentGroup(e,a,r,i)}),new X(s,o)}createSegments(e,t,r,i){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,i):this.findOrReturn(s,r))}findPosParam(e,t,r){const i=r[t.path.substring(1)];if(!i)throw new v(4001,uf);return i}findOrReturn(e,t){let r=0;for(const i of t){if(i.path===e.path)return t.splice(r),i;r++}return e}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function aH(n,e,t,r){return un(i=>function sH(n,e,t,r,i){return new oH(n,e,t,r,i).apply()}(n,e,t,i.extractedUrl,r).pipe(G(s=>({...i,urlAfterRedirects:s}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class lH{}function uH(n,e,t,r,i,s,o="emptyOnly",a="legacy"){return new dH(n,e,t,r,i,o,a,s).recognize().pipe(un(l=>null===l?function cH(n){return new ne(e=>e.error(n))}(new lH):x(l)))}class dH{constructor(e,t,r,i,s,o,a,l){this.injector=e,this.rootComponentType=t,this.config=r,this.urlTree=i,this.url=s,this.paramsInheritanceStrategy=o,this.relativeLinkResolution=a,this.urlSerializer=l}recognize(){const e=lf(this.urlTree.root,[],[],this.config.filter(t=>void 0===t.redirectTo),this.relativeLinkResolution).segmentGroup;return this.processSegmentGroup(this.injector,this.config,e,Q).pipe(G(t=>{if(null===t)return null;const r=new rf([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},Q,this.rootComponentType,null,this.urlTree.root,-1,{}),i=new mi(r,t),s=new hA(this.url,i);return this.inheritParamsAndData(s._root),s}))}inheritParamsAndData(e){const t=e.value,r=dA(t,this.paramsInheritanceStrategy);t.params=Object.freeze(r.params),t.data=Object.freeze(r.data),e.children.forEach(i=>this.inheritParamsAndData(i))}processSegmentGroup(e,t,r,i){return 0===r.segments.length&&r.hasChildren()?this.processChildren(e,t,r):this.processSegment(e,t,r,r.segments,i)}processChildren(e,t,r){return Ve(Object.keys(r.children)).pipe(cs(i=>{const s=r.children[i],o=vA(t,i);return this.processSegmentGroup(e,o,s,i)}),UI((i,s)=>i&&s?(i.push(...s),i):null),function xU(n,e=!1){return Ie((t,r)=>{let i=0;t.subscribe(Se(r,s=>{const o=n(s,i++);(o||e)&&r.next(s),!o&&r.complete()}))})}(i=>null!==i),Zh(null),$I(),G(i=>{if(null===i)return null;const s=IA(i);return function hH(n){n.sort((e,t)=>e.value.outlet===Q?-1:t.value.outlet===Q?1:e.value.outlet.localeCompare(t.value.outlet))}(s),s}))}processSegment(e,t,r,i,s){return Ve(t).pipe(cs(o=>this.processSegmentAgainstRoute(o._injector??e,o,r,i,s)),ls(o=>!!o),pi(o=>{if(Jy(o))return EA(r,i,s)?x([]):x(null);throw o}))}processSegmentAgainstRoute(e,t,r,i,s){if(t.redirectTo||!wA(t,r,i,s))return x(null);let o;if("**"===t.path){const a=i.length>0?GI(i).parameters:{},l=TA(r)+i.length;o=x({snapshot:new rf(i,a,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,xA(t),fn(t),t.component??t._loadedComponent??null,t,AA(r),l,OA(t),l),consumedSegments:[],remainingSegments:[]})}else o=bA(r,t,i,e,this.urlSerializer).pipe(G(({matched:a,consumedSegments:l,remainingSegments:c,parameters:u})=>{if(!a)return null;const d=TA(r)+l.length;return{snapshot:new rf(l,u,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,xA(t),fn(t),t.component??t._loadedComponent??null,t,AA(r),d,OA(t),d),consumedSegments:l,remainingSegments:c}}));return o.pipe(un(a=>{if(null===a)return x(null);const{snapshot:l,consumedSegments:c,remainingSegments:u}=a;e=t._injector??e;const d=t._loadedInjector??e,h=function fH(n){return n.children?n.children:n.loadChildren?n._loadedRoutes:[]}(t),{segmentGroup:f,slicedSegments:p}=lf(r,c,u,h.filter(m=>void 0===m.redirectTo),this.relativeLinkResolution);if(0===p.length&&f.hasChildren())return this.processChildren(d,h,f).pipe(G(m=>null===m?null:[new mi(l,m)]));if(0===h.length&&0===p.length)return x([new mi(l,[])]);const g=fn(t)===s;return this.processSegment(d,h,f,p,g?Q:s).pipe(G(m=>null===m?null:[new mi(l,m)]))}))}}function pH(n){const e=n.value.routeConfig;return e&&""===e.path&&void 0===e.redirectTo}function IA(n){const e=[],t=new Set;for(const r of n){if(!pH(r)){e.push(r);continue}const i=e.find(s=>r.value.routeConfig===s.value.routeConfig);void 0!==i?(i.children.push(...r.children),t.add(i)):e.push(r)}for(const r of t){const i=IA(r.children);e.push(new mi(r.value,i))}return e.filter(r=>!t.has(r))}function AA(n){let e=n;for(;e._sourceSegment;)e=e._sourceSegment;return e}function TA(n){let e=n,t=e._segmentIndexShift??0;for(;e._sourceSegment;)e=e._sourceSegment,t+=e._segmentIndexShift??0;return t-1}function xA(n){return n.data||{}}function OA(n){return n.resolve||{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function yH(n,e){return We(t=>{const{targetSnapshot:r,guards:{canActivateChecks:i}}=t;if(!i.length)return x(t);let s=0;return Ve(i).pipe(cs(o=>function _H(n,e,t,r){const i=n.routeConfig,s=n._resolve;return void 0!==i?.title&&!PA(i)&&(s[Cu]=i.title),function vH(n,e,t,r){const i=function DH(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}(n);if(0===i.length)return x({});const s={};return Ve(i).pipe(We(o=>function CH(n,e,t,r){const i=Au(e)??r,s=Cl(n,i);return us(s.resolve?s.resolve(e,t):i.runInContext(()=>s(e,t)))}(n[o],e,t,r).pipe(ls(),Je(a=>{s[o]=a}))),Ny(1),function OU(n){return G(()=>n)}(s),pi(o=>Jy(o)?yr:Du(o)))}(s,n,e,r).pipe(G(o=>(n._resolvedData=o,n.data=dA(n,t).resolve,i&&PA(i)&&(n.data[Cu]=i.title),null)))}(o.route,r,n,e)),Je(()=>s++),Ny(1),We(o=>s===i.length?x(t):yr))})}function PA(n){return"string"==typeof n.title||null===n.title}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function n_(n){return un(e=>{const t=n(e);return t?Ve(t).pipe(G(()=>e)):x(e)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class wl{buildTitle(e){let t,r=e.root;for(;void 0!==r;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(i=>i.outlet===Q);return t}getResolvedTitleForRoute(e){return e.data[Cu]}}wl.\u0275fac=function(e){return new(e||wl)},wl.\u0275prov=E({token:wl,factory:function(){return Y(To)},providedIn:"root"});class To extends wl{constructor(e){super(),this.title=e}updateTitle(e){const t=this.buildTitle(e);void 0!==t&&this.title.setTitle(t)}}To.\u0275fac=function(e){return new(e||To)(D(Ua))},To.\u0275prov=E({token:To,factory:To.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class bH{}class EH extends class wH{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ff=new S("",{providedIn:"root",factory:()=>({})}),r_=new S("ROUTES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class hs{constructor(e,t){this.injector=e,this.compiler=t,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return x(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);const t=us(e.loadComponent()).pipe(Je(i=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=i}),Fy(()=>{this.componentLoaders.delete(e)})),r=new BI(t,()=>new N).pipe(ky());return this.componentLoaders.set(e,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return x({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);const i=this.loadModuleFactoryOrRoutes(t.loadChildren).pipe(G(o=>{this.onLoadEndListener&&this.onLoadEndListener(t);let a,l,c=!1;Array.isArray(o)?(l=o,c=!0):(a=o.create(e).injector,l=zI(a.get(r_,[],q.Self|q.Optional)));const u=l.map(Xy);return{routes:u,injector:a}}),Fy(()=>{this.childrenLoaders.delete(t)})),s=new BI(i,()=>new N).pipe(ky());return this.childrenLoaders.set(t,s),s}loadModuleFactoryOrRoutes(e){return us(e()).pipe(We(t=>t instanceof kw||Array.isArray(t)?x(t):Ve(this.compiler.compileModuleAsync(t))))}}hs.\u0275fac=function(e){return new(e||hs)(D(Ne),D(Vi))},hs.\u0275prov=E({token:hs,factory:hs.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class MH{}class IH{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pf=!1;function AH(n){throw n}function TH(n,e,t){return e.parse("/")}const RH={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},xH={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function NA(){const n=Y(yl),e=Y(dr),t=Y(sn),r=Y(Ne),i=Y(Vi),s=Y(r_,{optional:!0})??[],o=Y(ff,{optional:!0})??{},a=Y(To),l=Y(wl,{optional:!0}),c=Y(MH,{optional:!0}),u=Y(bH,{optional:!0}),d=new $e(null,n,e,t,r,i,zI(s));return c&&(d.urlHandlingStrategy=c),u&&(d.routeReuseStrategy=u),d.titleStrategy=l??a,function OH(n,e){n.errorHandler&&(e.errorHandler=n.errorHandler),n.malformedUriErrorHandler&&(e.malformedUriErrorHandler=n.malformedUriErrorHandler),n.onSameUrlNavigation&&(e.onSameUrlNavigation=n.onSameUrlNavigation),n.paramsInheritanceStrategy&&(e.paramsInheritanceStrategy=n.paramsInheritanceStrategy),n.relativeLinkResolution&&(e.relativeLinkResolution=n.relativeLinkResolution),n.urlUpdateStrategy&&(e.urlUpdateStrategy=n.urlUpdateStrategy),n.canceledNavigationResolution&&(e.canceledNavigationResolution=n.canceledNavigationResolution)}(o,d),d}class $e{constructor(e,t,r,i,s,o,a){this.rootComponentType=e,this.urlSerializer=t,this.rootContexts=r,this.location=i,this.config=a,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new N,this.errorHandler=AH,this.malformedUriErrorHandler=TH,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>x(void 0),this.urlHandlingStrategy=new IH,this.routeReuseStrategy=new EH,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace";this.configLoader=s.get(hs),this.configLoader.onLoadEndListener=d=>this.triggerEvent(new f$(d)),this.configLoader.onLoadStartListener=d=>this.triggerEvent(new h$(d)),this.ngModule=s.get(Ls),this.console=s.get(Li);const u=s.get(ee);this.isNgZoneEnabled=u instanceof ee&&ee.isInAngularZone(),this.resetConfig(a),this.currentUrlTree=function FU(){return new Eo(new X([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=uA(this.currentUrlTree,this.rootComponentType),this.transitions=new dn({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(e){const t=this.events;return e.pipe(xn(r=>0!==r.id),G(r=>({...r,extractedUrl:this.urlHandlingStrategy.extract(r.rawUrl)})),un(r=>{let i=!1,s=!1;return x(r).pipe(Je(o=>{this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),un(o=>{const a=this.browserUrlTree.toString(),l=!this.navigated||o.extractedUrl.toString()!==a||a!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||l)&&this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return FA(o.source)&&(this.browserUrlTree=o.extractedUrl),x(o).pipe(un(u=>{const d=this.transitions.getValue();return t.next(new zy(u.id,this.serializeUrl(u.extractedUrl),u.source,u.restoredState)),d!==this.transitions.getValue()?yr:Promise.resolve(u)}),aH(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),Je(u=>{this.currentNavigation={...this.currentNavigation,finalUrl:u.urlAfterRedirects},r.urlAfterRedirects=u.urlAfterRedirects}),function mH(n,e,t,r,i,s){return We(o=>uH(n,e,t,o.urlAfterRedirects,r.serialize(o.urlAfterRedirects),r,i,s).pipe(G(a=>({...o,targetSnapshot:a}))))}(this.ngModule.injector,this.rootComponentType,this.config,this.urlSerializer,this.paramsInheritanceStrategy,this.relativeLinkResolution),Je(u=>{if(r.targetSnapshot=u.targetSnapshot,"eager"===this.urlUpdateStrategy){if(!u.extras.skipLocationChange){const h=this.urlHandlingStrategy.merge(u.urlAfterRedirects,u.rawUrl);this.setBrowserUrl(h,u)}this.browserUrlTree=u.urlAfterRedirects}const d=new a$(u.id,this.serializeUrl(u.extractedUrl),this.serializeUrl(u.urlAfterRedirects),u.targetSnapshot);t.next(d)}));if(l&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:d,extractedUrl:h,source:f,restoredState:p,extras:g}=o,m=new zy(d,this.serializeUrl(h),f,p);t.next(m);const C=uA(h,this.rootComponentType).snapshot;return x(r={...o,targetSnapshot:C,urlAfterRedirects:h,extras:{...g,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=o.rawUrl,o.resolve(null),yr}),Je(o=>{const a=new l$(o.id,this.serializeUrl(o.extractedUrl),this.serializeUrl(o.urlAfterRedirects),o.targetSnapshot);this.triggerEvent(a)}),G(o=>r={...o,guards:O$(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),H$(this.ngModule.injector,o=>this.triggerEvent(o)),Je(o=>{if(r.guardsResult=o.guardsResult,Mo(o.guardsResult))throw pA(this.urlSerializer,o.guardsResult);const a=new c$(o.id,this.serializeUrl(o.extractedUrl),this.serializeUrl(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.triggerEvent(a)}),xn(o=>!!o.guardsResult||(this.restoreHistory(o),this.cancelNavigationTransition(o,"",3),!1)),n_(o=>{if(o.guards.canActivateChecks.length)return x(o).pipe(Je(a=>{const l=new u$(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}),un(a=>{let l=!1;return x(a).pipe(yH(this.paramsInheritanceStrategy,this.ngModule.injector),Je({next:()=>l=!0,complete:()=>{l||(this.restoreHistory(a),this.cancelNavigationTransition(a,"",2))}}))}),Je(a=>{const l=new d$(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(a.urlAfterRedirects),a.targetSnapshot);this.triggerEvent(l)}))}),n_(o=>{const a=l=>{const c=[];l.routeConfig?.loadComponent&&!l.routeConfig._loadedComponent&&c.push(this.configLoader.loadComponent(l.routeConfig).pipe(Je(u=>{l.component=u}),G(()=>{})));for(const u of l.children)c.push(...a(u));return c};return FI(a(o.targetSnapshot.root)).pipe(Zh(),Qi(1))}),n_(()=>this.afterPreactivation()),G(o=>{const a=function C$(n,e,t){const r=Iu(n,e._root,t?t._root:void 0);return new cA(r,e)}(this.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return r={...o,targetRouterState:a}}),Je(o=>{this.currentUrlTree=o.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(o.urlAfterRedirects,o.rawUrl),this.routerState=o.targetRouterState,"deferred"===this.urlUpdateStrategy&&(o.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,o),this.browserUrlTree=o.urlAfterRedirects)}),((n,e,t)=>G(r=>(new x$(e,r.targetRouterState,r.currentRouterState,t).activate(n),r)))(this.rootContexts,this.routeReuseStrategy,o=>this.triggerEvent(o)),Je({next(){i=!0},complete(){i=!0}}),Fy(()=>{if(!i&&!s){const o="";this.cancelNavigationTransition(r,o,1)}this.currentNavigation?.id===r.id&&(this.currentNavigation=null)}),pi(o=>{if(s=!0,yA(o)){mA(o)||(this.navigated=!0,this.restoreHistory(r,!0));const a=new nf(r.id,this.serializeUrl(r.extractedUrl),o.message,o.cancellationCode);if(t.next(a),mA(o)){const l=this.urlHandlingStrategy.merge(o.url,this.rawUrlTree),c={skipLocationChange:r.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||FA(r.source)};this.scheduleNavigation(l,"imperative",null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}else r.resolve(!1)}else{this.restoreHistory(r,!0);const a=new oA(r.id,this.serializeUrl(r.extractedUrl),o,r.targetSnapshot??void 0);t.next(a);try{r.resolve(this.errorHandler(o))}catch(l){r.reject(l)}}return yr}))}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}setTransition(e){this.transitions.next({...this.transitions.value,...e})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{const t="popstate"===e.type?"popstate":"hashchange";"popstate"===t&&setTimeout(()=>{const r={replaceUrl:!0},i=e.state?.navigationId?e.state:null;if(i){const o={...i};delete o.navigationId,delete o.\u0275routerPageId,0!==Object.keys(o).length&&(r.state=o)}const s=this.parseUrl(e.url);this.scheduleNavigation(s,t,i,r)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){this.config=e.map(Xy),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(e,t={}){const{relativeTo:r,queryParams:i,fragment:s,queryParamsHandling:o,preserveFragment:a}=t,l=r||this.routerState.root,c=a?this.currentUrlTree.fragment:s;let u=null;switch(o){case"merge":u={...this.currentUrlTree.queryParams,...i};break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}return null!==u&&(u=this.removeEmptyProps(u)),t$(l,this.currentUrlTree,e,u,c??null)}navigateByUrl(e,t={skipLocationChange:!1}){const r=Mo(e)?e:this.parseUrl(e),i=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(i,"imperative",null,t)}navigate(e,t={skipLocationChange:!1}){return function PH(n){for(let e=0;e<n.length;e++){const t=n[e];if(null==t)throw new v(4008,pf)}}(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let t;try{t=this.urlSerializer.parse(e)}catch(r){t=this.malformedUriErrorHandler(r,this.urlSerializer,e)}return t}isActive(e,t){let r;if(r=!0===t?{...RH}:!1===t?{...xH}:t,Mo(e))return WI(this.currentUrlTree,e,r);const i=this.parseUrl(e);return WI(this.currentUrlTree,i,r)}removeEmptyProps(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return null!=i&&(t[r]=i),t},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.currentPageId=e.targetPageId,this.events.next(new Io(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),e.resolve(!0)},e=>{this.console.warn(`Unhandled Navigation Error: ${e}`)})}scheduleNavigation(e,t,r,i,s){if(this.disposed)return Promise.resolve(!1);let o,a,l;s?(o=s.resolve,a=s.reject,l=s.promise):l=new Promise((d,h)=>{o=d,a=h});const c=++this.navigationId;let u;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(r=this.location.getState()),u=r&&r.\u0275routerPageId?r.\u0275routerPageId:i.replaceUrl||i.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):u=0,this.setTransition({id:c,targetPageId:u,source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:i,resolve:o,reject:a,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}setBrowserUrl(e,t){const r=this.urlSerializer.serialize(e),i={...t.extras.state,...this.generateNgRouterState(t.id,t.targetPageId)};this.location.isCurrentPathEqualTo(r)||t.extras.replaceUrl?this.location.replaceState(r,"",i):this.location.go(r,"",i)}restoreHistory(e,t=!1){if("computed"===this.canceledNavigationResolution){const r=this.currentPageId-e.targetPageId;"popstate"!==e.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===r?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===r&&(this.resetState(e),this.browserUrlTree=e.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(r)}else"replace"===this.canceledNavigationResolution&&(t&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=e.currentRouterState,this.currentUrlTree=e.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(e,t,r){const i=new nf(e.id,this.serializeUrl(e.extractedUrl),t,r);this.triggerEvent(i),e.resolve(!1)}generateNgRouterState(e,t){return"computed"===this.canceledNavigationResolution?{navigationId:e,\u0275routerPageId:t}:{navigationId:e}}}function FA(n){return"imperative"!==n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */$e.\u0275fac=function(e){Pd()},$e.\u0275prov=E({token:$e,factory:function(){return NA()},providedIn:"root"});class _i{constructor(e,t,r,i,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=i,this.el=s,this._preserveFragment=!1,this._skipLocationChange=!1,this._replaceUrl=!1,this.commands=null,this.onChanges=new N,this.setTabIndexIfNotOnNativeEl("0")}set preserveFragment(e){this._preserveFragment=Rr(e)}get preserveFragment(){return this._preserveFragment}set skipLocationChange(e){this._skipLocationChange=Rr(e)}get skipLocationChange(){return this._skipLocationChange}set replaceUrl(e){this._replaceUrl=Rr(e)}get replaceUrl(){return this._replaceUrl}setTabIndexIfNotOnNativeEl(e){if(null!=this.tabIndexAttribute)return;const t=this.renderer,r=this.el.nativeElement;null!==e?t.setAttribute(r,"tabindex",e):t.removeAttribute(r,"tabindex")}ngOnChanges(e){this.onChanges.next(this)}set routerLink(e){null!=e?(this.commands=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(){if(null===this.urlTree)return!0;const e={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state};return this.router.navigateByUrl(this.urlTree,e),!0}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}}_i.\u0275fac=function(e){return new(e||_i)(y($e),y(Ao),Jo("tabindex"),y(Cn),y(ye))},_i.\u0275dir=T({type:_i,selectors:[["","routerLink","",5,"a",5,"area"]],hostBindings:function(e,t){1&e&&Oe("click",function(){return t.onClick()})},inputs:{queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",routerLink:"routerLink"},standalone:!0,features:[it]});class vi{constructor(e,t,r){this.router=e,this.route=t,this.locationStrategy=r,this._preserveFragment=!1,this._skipLocationChange=!1,this._replaceUrl=!1,this.commands=null,this.href=null,this.onChanges=new N,this.subscription=e.events.subscribe(i=>{i instanceof Io&&this.updateTargetUrlAndHref()})}set preserveFragment(e){this._preserveFragment=Rr(e)}get preserveFragment(){return this._preserveFragment}set skipLocationChange(e){this._skipLocationChange=Rr(e)}get skipLocationChange(){return this._skipLocationChange}set replaceUrl(e){this._replaceUrl=Rr(e)}get replaceUrl(){return this._replaceUrl}set routerLink(e){this.commands=null!=e?Array.isArray(e)?e:[e]:null}ngOnChanges(e){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(e,t,r,i,s){if(0!==e||t||r||i||s||"string"==typeof this.target&&"_self"!=this.target||null===this.urlTree)return!0;const o={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state};return this.router.navigateByUrl(this.urlTree,o),!1}updateTargetUrlAndHref(){this.href=null!==this.urlTree?this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}}vi.\u0275fac=function(e){return new(e||vi)(y($e),y(Ao),y(An))},vi.\u0275dir=T({type:vi,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(e,t){1&e&&Oe("click",function(i){return t.onClick(i.button,i.ctrlKey,i.shiftKey,i.altKey,i.metaKey)}),2&e&&Ye("target",t.target)("href",t.href,ng)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",routerLink:"routerLink"},standalone:!0,features:[it]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ro{constructor(e,t,r,i,s,o){this.router=e,this.element=t,this.renderer=r,this.cdr=i,this.link=s,this.linkWithHref=o,this.classes=[],this.isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new z,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof Io&&this.update()})}ngAfterContentInit(){x(this.links.changes,this.linksWithHrefs.changes,x(null)).pipe(jo()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();const e=[...this.links.toArray(),...this.linksWithHrefs.toArray(),this.link,this.linkWithHref].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=Ve(e).pipe(jo()).subscribe(t=>{this.isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){const t=Array.isArray(e)?e:e.split(" ");this.classes=t.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.linksWithHrefs||!this.router.navigated||Promise.resolve().then(()=>{const e=this.hasActiveLinks();this.isActive!==e&&(this.isActive=e,this.cdr.markForCheck(),this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&void 0!==this.ariaCurrentWhenActive?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this.isActiveChange.emit(e))})}isLinkActive(e){const t=function kH(n){return!!n.paths}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>!!r.urlTree&&e.isActive(r.urlTree,t)}hasActiveLinks(){const e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.linkWithHref&&e(this.linkWithHref)||this.links.some(e)||this.linksWithHrefs.some(e)}}Ro.\u0275fac=function(e){return new(e||Ro)(y($e),y(ye),y(Cn),y(Zn),y(_i,8),y(vi,8))},Ro.\u0275dir=T({type:Ro,selectors:[["","routerLinkActive",""]],contentQueries:function(e,t,r){if(1&e&&(xa(r,_i,5),xa(r,vi,5)),2&e){let i;Gn(i=qn())&&(t.links=i),Gn(i=qn())&&(t.linksWithHrefs=i)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],standalone:!0,features:[it]});class LA{}class Pu{preload(e,t){return t().pipe(pi(()=>x(null)))}}Pu.\u0275fac=function(e){return new(e||Pu)},Pu.\u0275prov=E({token:Pu,factory:Pu.\u0275fac,providedIn:"root"});class ku{preload(e,t){return x(null)}}ku.\u0275fac=function(e){return new(e||ku)},ku.\u0275prov=E({token:ku,factory:ku.\u0275fac,providedIn:"root"});class El{constructor(e,t,r,i,s){this.router=e,this.injector=r,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(xn(e=>e instanceof Io),cs(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,t){const r=[];for(const i of t){i.providers&&!i._injector&&(i._injector=Xd(i.providers,e,`Route: ${i.path}`));const s=i._injector??e,o=i._loadedInjector??s;i.loadChildren&&!i._loadedRoutes&&void 0===i.canLoad||i.loadComponent&&!i._loadedComponent?r.push(this.preloadConfig(s,i)):(i.children||i._loadedRoutes)&&r.push(this.processRoutes(o,i.children??i._loadedRoutes))}return Ve(r).pipe(jo())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{let r;r=t.loadChildren&&void 0===t.canLoad?this.loader.loadChildren(e,t):x(null);const i=r.pipe(We(s=>null===s?x(void 0):(t._loadedRoutes=s.routes,t._loadedInjector=s.injector,this.processRoutes(s.injector??e,s.routes))));if(t.loadComponent&&!t._loadedComponent){return Ve([i,this.loader.loadComponent(t)]).pipe(jo())}return i})}}El.\u0275fac=function(e){return new(e||El)(D($e),D(Vi),D(xi),D(LA),D(hs))},El.\u0275prov=E({token:El,factory:El.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const i_=new S("");class Sl{constructor(e,t,r={}){this.router=e,this.viewportScroller=t,this.options=r,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},r.scrollPositionRestoration=r.scrollPositionRestoration||"disabled",r.anchorScrolling=r.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof zy?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Io&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof aA&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,t){this.router.triggerEvent(new aA(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,t))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}Sl.\u0275fac=function(e){Pd()},Sl.\u0275prov=E({token:Sl,factory:Sl.\u0275fac});function VA(n){return n.routerState.root}function Ml(n,e){return{\u0275kind:n,\u0275providers:e}}function s_(n){return[{provide:r_,multi:!0,useValue:n}]}function BA(){const n=Y(Ne);return e=>{const t=n.get(Kn);if(e!==t.components[0])return;const r=n.get($e),i=n.get(jA);1===n.get(o_)&&r.initialNavigation(),n.get(UA,null,q.Optional)?.setUpPreloading(),n.get(i_,null,q.Optional)?.init(),r.resetRootComponentType(t.componentTypes[0]),i.closed||(i.next(),i.unsubscribe())}}const jA=new S("",{factory:()=>new N}),o_=new S("",{providedIn:"root",factory:()=>1});function NH(){return Ml(2,[{provide:o_,useValue:0},{provide:rh,multi:!0,deps:[Ne],useFactory:e=>{const t=e.get(eL,Promise.resolve());let r=!1;return()=>t.then(()=>new Promise(s=>{const o=e.get($e),a=e.get(jA);(function i(s){e.get($e).events.pipe(xn(a=>a instanceof Io||a instanceof nf||a instanceof oA),G(a=>a instanceof Io||a instanceof nf&&(0===a.code||1===a.code)&&null),xn(a=>null!==a),Qi(1)).subscribe(()=>{s()})})(()=>{s(!0),r=!0}),o.afterPreactivation=()=>(s(!0),r||a.closed?x(void 0):a),o.initialNavigation()}))}}])}const UA=new S("");function VH(n){return Ml(0,[{provide:UA,useExisting:El},{provide:LA,useExisting:n}])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const $A=new S("ROUTER_FORROOT_GUARD"),BH=[sn,{provide:yl,useClass:Vy},{provide:$e,useFactory:NA},dr,{provide:Ao,useFactory:VA,deps:[$e]},hs];function jH(){return new kE("Router",$e)}class hr{constructor(e){}static forRoot(e,t){return{ngModule:hr,providers:[BH,[],s_(e),{provide:$A,useFactory:zH,deps:[[$e,new oa,new aa]]},{provide:ff,useValue:t||{}},t?.useHash?{provide:An,useClass:Fa}:{provide:An,useClass:$s},{provide:i_,useFactory:()=>{const n=Y($e),e=Y(Bm),t=Y(ff);return t.scrollOffset&&e.setOffset(t.scrollOffset),new Sl(n,e,t)}},t?.preloadingStrategy?VH(t.preloadingStrategy).\u0275providers:[],{provide:kE,multi:!0,useFactory:jH},t?.initialNavigation?GH(t):[],[{provide:HA,useFactory:BA},{provide:ME,multi:!0,useExisting:HA}]]}}static forChild(e){return{ngModule:hr,providers:[s_(e)]}}}function zH(n){return"guarded"}function GH(n){return["disabled"===n.initialNavigation?Ml(3,[{provide:rh,multi:!0,useFactory:()=>{const e=Y($e);return()=>{e.setUpLocationChangeListener()}}},{provide:o_,useValue:2}]).\u0275providers:[],"enabledBlocking"===n.initialNavigation?NH().\u0275providers:[]]}hr.\u0275fac=function(e){return new(e||hr)(D($A,8))},hr.\u0275mod=oe({type:hr,imports:[ds,_i,vi,Ro,yi],exports:[ds,_i,vi,Ro,yi]}),hr.\u0275inj=re({imports:[yi]});const HA=new S("");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Oi("14.3.0");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Il{}Il.\u0275fac=function(e){return new(e||Il)},Il.\u0275mod=oe({type:Il}),Il.\u0275inj=re({imports:[hr.forRoot([]),hr]});
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class zA{}class GA{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Di{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const i=t.slice(0,r),s=i.toLowerCase(),o=t.slice(r+1).trim();this.maybeSetNormalizedName(i,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let r=e[t];const i=t.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(i,r),this.maybeSetNormalizedName(t,i))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof Di?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new Di;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof Di?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);const i=("a"===e.op?this.headers.get(t):void 0)||[];i.push(...r),this.headers.set(t,i);break;case"d":const s=e.value;if(s){let o=this.headers.get(t);if(!o)return;o=o.filter(a=>-1===s.indexOf(a)),0===o.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class KH{encodeKey(e){return qA(e)}encodeValue(e){return qA(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const QH=/%(\d[a-f0-9])/gi,YH={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function qA(n){return encodeURIComponent(n).replace(QH,(e,t)=>YH[t]??e)}function yf(n){return`${n}`}class fs{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new KH,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ZH(n,e){const t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{const s=i.indexOf("="),[o,a]=-1==s?[e.decodeKey(i),""]:[e.decodeKey(i.slice(0,s)),e.decodeValue(i.slice(s+1))],l=t.get(o)||[];l.push(a),t.set(o,l)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const r=e.fromObject[t],i=Array.isArray(r)?r.map(yf):[yf(r)];this.map.set(t,i)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(r=>{const i=e[r];Array.isArray(i)?i.forEach(s=>{t.push({param:r,value:s,op:"a"})}):t.push({param:r,value:i,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new fs({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(yf(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const i=r.indexOf(yf(e.value));-1!==i&&r.splice(i,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class XH{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function WA(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function KA(n){return typeof Blob<"u"&&n instanceof Blob}function ZA(n){return typeof FormData<"u"&&n instanceof FormData}class Nu{constructor(e,t,r,i){let s;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function JH(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||i?(this.body=void 0!==r?r:null,s=i):s=r,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params)),this.headers||(this.headers=new Di),this.context||(this.context=new XH),this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=t;else{const a=t.indexOf("?"),l=-1===a?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+o}}else this.params=new fs,this.urlWithParams=t}serializeBody(){return null===this.body?null:WA(this.body)||KA(this.body)||ZA(this.body)||function ez(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof fs?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ZA(this.body)?null:KA(this.body)?this.body.type||null:WA(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof fs?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,r=e.url||this.url,i=e.responseType||this.responseType,s=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let l=e.headers||this.headers,c=e.params||this.params;const u=e.context??this.context;return void 0!==e.setHeaders&&(l=Object.keys(e.setHeaders).reduce((d,h)=>d.set(h,e.setHeaders[h]),l)),e.setParams&&(c=Object.keys(e.setParams).reduce((d,h)=>d.set(h,e.setParams[h]),c)),new Nu(t,r,s,{params:c,headers:l,context:u,reportProgress:a,responseType:i,withCredentials:o})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var ps;!function(n){n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User"}(ps||(ps={}));class a_{constructor(e,t=200,r="OK"){this.headers=e.headers||new Di,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class l_ extends a_{constructor(e={}){super(e),this.type=ps.ResponseHeader}clone(e={}){return new l_({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class Fu extends a_{constructor(e={}){super(e),this.type=ps.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new Fu({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class _f extends a_{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function c_(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}class xo{constructor(e){this.handler=e}request(e,t,r={}){let i;if(e instanceof Nu)i=e;else{let a,l;a=r.headers instanceof Di?r.headers:new Di(r.headers),r.params&&(l=r.params instanceof fs?r.params:new fs({fromObject:r.params})),i=new Nu(e,t,void 0!==r.body?r.body:null,{headers:a,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const s=x(i).pipe(cs(a=>this.handler.handle(a)));if(e instanceof Nu||"events"===r.observe)return s;const o=s.pipe(xn(a=>a instanceof Fu));switch(r.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return o.pipe(G(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return o.pipe(G(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return o.pipe(G(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return o.pipe(G(a=>a.body))}case"response":return o;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new fs).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,c_(r,t))}post(e,t,r={}){return this.request("POST",e,c_(r,t))}put(e,t,r={}){return this.request("PUT",e,c_(r,t))}}xo.\u0275fac=function(e){return new(e||xo)(D(zA))},xo.\u0275prov=E({token:xo,factory:xo.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class QA{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const u_=new S("HTTP_INTERCEPTORS");class Al{intercept(e,t){return t.handle(e)}}Al.\u0275fac=function(e){return new(e||Al)},Al.\u0275prov=E({token:Al,factory:Al.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let d_,tz=0;class YA{}class Oo{constructor(e,t){this.callbackMap=e,this.document=t,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+tz++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new ne(t=>{const r=this.nextCallback(),i=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${r}$1`),s=this.document.createElement("script");s.src=i;let o=null,a=!1;this.callbackMap[r]=d=>{delete this.callbackMap[r],o=d,a=!0};const l=()=>{s.parentNode&&s.parentNode.removeChild(s),delete this.callbackMap[r]};return s.addEventListener("load",d=>{this.resolvedPromise.then(()=>{l(),a?(t.next(new Fu({body:o,status:200,statusText:"OK",url:i})),t.complete()):t.error(new _f({url:i,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),s.addEventListener("error",d=>{l(),t.error(new _f({error:d,status:0,statusText:"JSONP Error",url:i}))}),this.document.body.appendChild(s),t.next({type:ps.Sent}),()=>{a||this.removeListeners(s),l()}})}removeListeners(e){d_||(d_=this.document.implementation.createHTMLDocument()),d_.adoptNode(e)}}Oo.\u0275fac=function(e){return new(e||Oo)(D(YA),D(B))},Oo.\u0275prov=E({token:Oo,factory:Oo.\u0275fac});class Tl{constructor(e){this.jsonp=e}intercept(e,t){return"JSONP"===e.method?this.jsonp.handle(e):t.handle(e)}}Tl.\u0275fac=function(e){return new(e||Tl)(D(Oo))},Tl.\u0275prov=E({token:Tl,factory:Tl.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const oz=/^\)\]\}',?\n/;class Po{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ne(t=>{const r=this.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((h,f)=>r.setRequestHeader(h,f.join(","))),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const h=e.detectContentTypeHeader();null!==h&&r.setRequestHeader("Content-Type",h)}if(e.responseType){const h=e.responseType.toLowerCase();r.responseType="json"!==h?h:"text"}const i=e.serializeBody();let s=null;const o=()=>{if(null!==s)return s;const h=r.statusText||"OK",f=new Di(r.getAllResponseHeaders()),p=function az(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(r)||e.url;return s=new l_({headers:f,status:r.status,statusText:h,url:p}),s},a=()=>{let{headers:h,status:f,statusText:p,url:g}=o(),m=null;204!==f&&(m=typeof r.response>"u"?r.responseText:r.response),0===f&&(f=m?200:0);let C=f>=200&&f<300;if("json"===e.responseType&&"string"==typeof m){const w=m;m=m.replace(oz,"");try{m=""!==m?JSON.parse(m):null}catch(_){m=w,C&&(C=!1,m={error:_,text:m})}}C?(t.next(new Fu({body:m,headers:h,status:f,statusText:p,url:g||void 0})),t.complete()):t.error(new _f({error:m,headers:h,status:f,statusText:p,url:g||void 0}))},l=h=>{const{url:f}=o(),p=new _f({error:h,status:r.status||0,statusText:r.statusText||"Unknown Error",url:f||void 0});t.error(p)};let c=!1;const u=h=>{c||(t.next(o()),c=!0);let f={type:ps.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),"text"===e.responseType&&!!r.responseText&&(f.partialText=r.responseText),t.next(f)},d=h=>{let f={type:ps.UploadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),t.next(f)};return r.addEventListener("load",a),r.addEventListener("error",l),r.addEventListener("timeout",l),r.addEventListener("abort",l),e.reportProgress&&(r.addEventListener("progress",u),null!==i&&r.upload&&r.upload.addEventListener("progress",d)),r.send(i),t.next({type:ps.Sent}),()=>{r.removeEventListener("error",l),r.removeEventListener("abort",l),r.removeEventListener("load",a),r.removeEventListener("timeout",l),e.reportProgress&&(r.removeEventListener("progress",u),null!==i&&r.upload&&r.upload.removeEventListener("progress",d)),r.readyState!==r.DONE&&r.abort()}})}}Po.\u0275fac=function(e){return new(e||Po)(D(CS))},Po.\u0275prov=E({token:Po,factory:Po.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const h_=new S("XSRF_COOKIE_NAME"),f_=new S("XSRF_HEADER_NAME");class XA{}class Rl{constructor(e,t,r){this.doc=e,this.platform=t,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=fS(e,this.cookieName),this.lastCookieString=e),this.lastToken}}Rl.\u0275fac=function(e){return new(e||Rl)(D(B),D(kc),D(h_))},Rl.\u0275prov=E({token:Rl,factory:Rl.\u0275fac});class gs{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const r=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return t.handle(e);const i=this.tokenService.getToken();return null!==i&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,i)})),t.handle(e)}}gs.\u0275fac=function(e){return new(e||gs)(D(XA),D(f_))},gs.\u0275prov=E({token:gs,factory:gs.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class xl{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const t=this.injector.get(u_,[]);this.chain=t.reduceRight((r,i)=>new QA(r,i),this.backend)}return this.chain.handle(e)}}xl.\u0275fac=function(e){return new(e||xl)(D(GA),D(Ne))},xl.\u0275prov=E({token:xl,factory:xl.\u0275fac});class fr{static disable(){return{ngModule:fr,providers:[{provide:gs,useClass:Al}]}}static withOptions(e={}){return{ngModule:fr,providers:[e.cookieName?{provide:h_,useValue:e.cookieName}:[],e.headerName?{provide:f_,useValue:e.headerName}:[]]}}}fr.\u0275fac=function(e){return new(e||fr)},fr.\u0275mod=oe({type:fr}),fr.\u0275inj=re({providers:[gs,{provide:u_,useExisting:gs,multi:!0},{provide:XA,useClass:Rl},{provide:h_,useValue:"XSRF-TOKEN"},{provide:f_,useValue:"X-XSRF-TOKEN"}]});class Ol{}Ol.\u0275fac=function(e){return new(e||Ol)},Ol.\u0275mod=oe({type:Ol,imports:[fr]}),Ol.\u0275inj=re({providers:[xo,{provide:zA,useClass:xl},Po,{provide:GA,useExisting:Po}],imports:[fr.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]});class Lu{}Lu.\u0275fac=function(e){return new(e||Lu)},Lu.\u0275mod=oe({type:Lu}),Lu.\u0275inj=re({providers:[Oo,{provide:YA,useFactory:function lz(){return"object"==typeof window?window:{}}},{provide:u_,useClass:Tl,multi:!0}]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Pl{constructor(e){this.http=e}getDeals(){return this.http.get("https://my-json-server.typicode.com/mabukoush1/contacts/deals")}}Pl.\u0275fac=function(e){return new(e||Pl)(D(xo))},Pl.\u0275prov=E({token:Pl,factory:Pl.\u0275fac,providedIn:"root"});class Vu{constructor(){}ngOnInit(){}}function cz(n,e){1&n&&($(0,"h2",11),Ze(1,"search result"),K())}function uz(n,e){if(1&n&&($(0,"div")(1,"div",15)(2,"div",16)(3,"h3"),Ze(4),K(),$(5,"div",17)(6,"div",18),at(7,"app-deal",19),K()()()()()),2&n){const t=Bt().$implicit,r=Bt(2);W(4),Fi("",t.status," "),W(1),ce("cdkDropListData",r.deals),W(2),ce("deal",t)}}function dz(n,e){if(1&n&&($(0,"div"),Vt(1,uz,8,3,"div",14),K()),2&n){const t=e.$implicit,r=Bt(2);W(1),ce("ngIf",""===r.enteredSearchValue||(null==t?null:t.first_name.toLowerCase().includes(r.enteredSearchValue))||(null==t?null:t.first_name.toUpperCase().includes(r.enteredSearchValue))||(null==t?null:t.last_name.toLowerCase().includes(r.enteredSearchValue))||(null==t?null:t.last_name.toUpperCase().includes(r.enteredSearchValue))||(null==t?null:t.phone.includes(r.enteredSearchValue)))}}function hz(n,e){if(1&n&&($(0,"div",12),Vt(1,dz,2,1,"div",13),K()),2&n){const t=Bt();W(1),ce("ngForOf",t.deals)}}function fz(n,e){if(1&n&&($(0,"div",24),at(1,"app-deal",19),K()),2&n){const t=e.$implicit;W(1),ce("deal",t)}}function pz(n,e){if(1&n&&($(0,"div",24),at(1,"app-deal",19),K()),2&n){const t=e.$implicit;W(1),ce("deal",t)}}function gz(n,e){if(1&n&&($(0,"div",24),at(1,"app-deal",19),K()),2&n){const t=e.$implicit;W(1),ce("deal",t)}}function mz(n,e){if(1&n&&($(0,"div",24),at(1,"app-deal",19),K()),2&n){const t=e.$implicit;W(1),ce("deal",t)}}function yz(n,e){if(1&n&&($(0,"div",24),at(1,"app-deal",19),K()),2&n){const t=e.$implicit;W(1),ce("deal",t)}}function _z(n,e){if(1&n){const t=gb();$(0,"div",20)(1,"div",16)(2,"h3"),Ze(3,"focus"),K(),$(4,"div",21),Oe("cdkDropListDropped",function(i){Wo(t);return Ko(Bt().drop(i,"Focus"))}),Vt(5,fz,2,1,"div",22),K()(),$(6,"div",16)(7,"h3"),Ze(8,"potential value"),K(),$(9,"div",21),Oe("cdkDropListDropped",function(i){Wo(t);return Ko(Bt().drop(i,"Potential Value"))}),Vt(10,pz,2,1,"div",22),K()(),$(11,"div",16)(12,"h3"),Ze(13,"contact made"),K(),$(14,"div",23),Oe("cdkDropListDropped",function(i){Wo(t);return Ko(Bt().drop(i,"Contact Made"))}),Vt(15,gz,2,1,"div",22),K()(),$(16,"div",16)(17,"h3"),Ze(18,"offer sent"),K(),$(19,"div",23),Oe("cdkDropListDropped",function(i){Wo(t);return Ko(Bt().drop(i,"Offer Sent"))}),Vt(20,mz,2,1,"div",22),K()(),$(21,"div",16)(22,"h3"),Ze(23,"getting ready"),K(),$(24,"div",23),Oe("cdkDropListDropped",function(i){Wo(t);return Ko(Bt().drop(i,"Getting Ready"))}),Vt(25,yz,2,1,"div",22),K()()()}if(2&n){const t=Bt();W(4),ce("cdkDropListData",t.focus),W(1),ce("ngForOf",t.focus),W(4),ce("cdkDropListData",t.potentialValue),W(1),ce("ngForOf",t.potentialValue),W(4),ce("cdkDropListData",t.contactMade),W(1),ce("ngForOf",t.contactMade),W(4),ce("cdkDropListData",t.offerSent),W(1),ce("ngForOf",t.offerSent),W(4),ce("cdkDropListData",t.gettingReady),W(1),ce("ngForOf",t.gettingReady)}}Vu.\u0275fac=function(e){return new(e||Vu)},Vu.\u0275cmp=yn({type:Vu,selectors:[["app-deal"]],inputs:{deal:"deal"},decls:19,vars:15,consts:[[1,""],[1,"w-100"],[1,"d-flex","flex-row","mb-1","w-100"],[1,"badge","text-bg-secondary","me-1","w-100"],[1,"badge","text-bg-primary","w-100"],[1,"d-flex","flex-column","w-100"],[1,"bi","bi-telephone-fill","fst-normal","mb-1","text-secondary","w-100"],[1,"bi","bi-calendar","fst-normal","text-secondary","w-100"]],template:function(e,t){1&e&&($(0,"div")(1,"div",0),Ze(2),$(3,"h4",0)(4,"strong"),Ze(5),K()()(),$(6,"div",1)(7,"div",2)(8,"span",3),Ze(9),K(),$(10,"span",4),Ze(11),K()(),$(12,"div",5)(13,"i",6),Ze(14),rm(15,"slice"),K(),$(16,"i",7),Ze(17),rm(18,"date"),K()()()()),2&e&&(W(2),Fi(" ",t.deal.status," "),W(3),Ec(t.deal.company),W(4),Ec(t.deal.state),W(2),Ec(t.deal.probability_status),W(3),Kg(" ",t.deal.first_name," ",t.deal.last_name," ",Qw(15,8,t.deal.phone,0,9),""),W(3),Fi(" ",Zw(18,12,t.deal.date,"dd.MM.yyyy"),""))},dependencies:[Xn,Yn]});class Bu{constructor(e){this.dealsService=e,this.searchTextChanged=new z,this.deals=[],this.potentialValue=[],this.focus=[],this.contactMade=[],this.offerSent=[],this.gettingReady=[]}drop(e,t){let r=t;if(e.previousContainer===e.container)IM(e.container.data,e.previousIndex,e.currentIndex),console.log("5araa");else{!function Hj(n,e,t,r){const i=ou(t,n.length-1),s=ou(r,e.length);n.length&&e.splice(s,0,n.splice(i,1)[0])}(e.previousContainer.data,e.container.data,e.previousIndex,e.currentIndex);let o,i=JSON.stringify(e.container.data[e.currentIndex]),s=JSON.parse(i);switch(r){case"Potential Value":0!==e.container.data.length&&(o=this.potentialValue.find(a=>a.status===s.status),o.status="Potential Value");break;case"Focus":o=this.focus.find(a=>a.status===s.status),o.status="Focus";break;case"Contact Made":o=this.contactMade.find(a=>a.status===s.status),o.status="Contact Made";break;case"Offer Sent":o=this.offerSent.find(a=>a.status===s.status),o.status="Offer Sent";break;case"Getting Ready":o=this.gettingReady.find(a=>a.status===s.status),o.status="Getting Ready";break;default:return}}}ngOnInit(){this.getDeals()}getDeals(){this.dealsService.getDeals().subscribe(e=>{e.map(t=>this.deals.push(t)),this.getPotentialValueStatus(),this.getFocusStatus(),this.getContactMadeStatus(),this.getOfferSentStatus(),this.getGettingReadyStatus()})}getPotentialValueStatus(){this.deals.map(e=>{"Potential Value"===e.status&&this.potentialValue.push(e)})}getFocusStatus(){this.deals.map(e=>{"Focus"===e.status&&this.focus.push(e)})}getContactMadeStatus(){this.deals.map(e=>{"Contact Made"===e.status&&this.contactMade.push(e)})}getOfferSentStatus(){this.deals.map(e=>{"Offer Sent"===e.status&&this.offerSent.push(e)})}getGettingReadyStatus(){this.deals.map(e=>{"Getting Ready"===e.status&&this.gettingReady.push(e)})}onSearch(){this.searchTextChanged.emit(this.enteredSearchValue)}}Bu.\u0275fac=function(e){return new(e||Bu)(y(Pl))},Bu.\u0275cmp=yn({type:Bu,selectors:[["app-deals"]],outputs:{searchTextChanged:"searchTextChanged"},decls:12,vars:4,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","col-12"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","pt-3"],[1,"navbar-nav","mb-2","ms-auto","mb-lg-0","col-lg-4","col-sm-12"],["type","search","placeholder","Search","aria-label","Search",1,"form-control",3,"ngModel","ngModelChange","input"],["class","",4,"ngIf"],["class","d-lg-flex flex-row justify-content-center",4,"ngIf"],["cdkDropListGroup","","class","d-lg-flex flex-row justify-content-center",4,"ngIf"],[1,""],[1,"d-lg-flex","flex-row","justify-content-center"],[4,"ngFor","ngForOf"],[4,"ngIf"],["cdkDropListGroup","",1,""],[1,"example-container"],["cdkDropList","",1,"example-list",3,"cdkDropListData"],[1,"example-box","w-100"],[3,"deal"],["cdkDropListGroup","",1,"d-lg-flex","flex-row","justify-content-center"],["cdkDropList","","cdkDropListSortingDisabled","",1,"example-list",3,"cdkDropListData","cdkDropListDropped"],["class","example-box","cdkDrag","",4,"ngFor","ngForOf"],["cdkDropList","",1,"example-list",3,"cdkDropListData","cdkDropListDropped"],["cdkDrag","",1,"example-box"]],template:function(e,t){1&e&&($(0,"nav",0)(1,"div",1)(2,"a",2),Ze(3,"Deals"),K(),$(4,"button",3),at(5,"span",4),K(),$(6,"div",5)(7,"ul",6)(8,"input",7),Oe("ngModelChange",function(i){return t.enteredSearchValue=i})("input",function(){return t.onSearch()}),K()()()()(),Vt(9,cz,2,0,"h2",8),Vt(10,hz,2,1,"div",9),Vt(11,_z,26,10,"div",10)),2&e&&(W(8),ce("ngModel",t.enteredSearchValue),W(1),ce("ngIf",t.enteredSearchValue),W(1),ce("ngIf",t.enteredSearchValue),W(1),ce("ngIf",!t.enteredSearchValue))},dependencies:[$i,Pr,Et,Xi,St,rr,is,Yr,Vu],styles:[".example-container[_ngcontent-%COMP%]{width:260px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.example-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-height:60px;background:white;border-radius:4px;overflow:hidden;display:block}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:white;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]});class ju{constructor(){this.title="salesManagment"}}ju.\u0275fac=function(e){return new(e||ju)},ju.\u0275cmp=yn({type:ju,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){1&e&&at(0,"app-deals")},dependencies:[Bu]});
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
class JA{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ci="*";function eT(n,e=null){return{type:2,steps:n,options:e}}function tT(n){return{type:6,styles:n,offset:null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function nT(n){Promise.resolve().then(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Uu{constructor(e=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){nT(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(r=>r()),t.length=0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rT{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let t=0,r=0,i=0;const s=this.players.length;0==s?nT(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==s&&this._onFinish()}),o.onDestroy(()=>{++r==s&&this._onDestroy()}),o.onStart(()=>{++i==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){const t=e*this.totalTime;this.players.forEach(r=>{const i=r.totalTime?Math.min(1,t/r.totalTime):1;r.setPosition(i)})}getPosition(){const e=this.players.reduce((t,r)=>null===t||r.totalTime>t.totalTime?r:t,null);return null!=e?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(r=>r()),t.length=0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function iT(n){return new v(3e3,!1)}function g_(){return typeof process<"u"&&"[object process]"==={}.toString.call(process)}function ms(n){switch(n.length){case 0:return new Uu;case 1:return n[0];default:return new rT(n)}}function sT(n,e,t,r,i=new Map,s=new Map){const o=[],a=[];let l=-1,c=null;if(r.forEach(u=>{const d=u.get("offset"),h=d==l,f=h&&c||new Map;u.forEach((p,g)=>{let m=g,C=p;if("offset"!==g)switch(m=e.normalizePropertyName(m,o),C){case"!":C=i.get(g);break;case Ci:C=s.get(g);break;default:C=e.normalizeStyleValue(g,m,C,o)}f.set(m,C)}),h||a.push(f),c=f,l=d}),o.length)throw function $z(n){return new v(3502,!1)}();return a}function m_(n,e,t,r){switch(e){case"start":n.onStart(()=>r(t&&y_(t,"start",n)));break;case"done":n.onDone(()=>r(t&&y_(t,"done",n)));break;case"destroy":n.onDestroy(()=>r(t&&y_(t,"destroy",n)))}}function y_(n,e,t){const r=t.totalTime,i=!!t.disabled,s=__(n.element,n.triggerName,n.fromState,n.toState,e||n.phaseName,r??n.totalTime,i),o=n._data;return null!=o&&(s._data=o),s}function __(n,e,t,r,i="",s=0,o){return{element:n,triggerName:e,fromState:t,toState:r,phaseName:i,totalTime:s,disabled:!!o}}function qt(n,e,t){let r=n.get(e);return r||n.set(e,r=t),r}function oT(n){const e=n.indexOf(":");return[n.substring(1,e),n.slice(e+1)]}let v_=(n,e)=>!1,aT=(n,e,t)=>[],lT=null;function D_(n){const e=n.parentNode||n.host;return e===lT?null:e}(g_()||typeof Element<"u")&&(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function eG(){return typeof window<"u"&&typeof window.document<"u"}()?(lT=(()=>document.documentElement)(),v_=(n,e)=>{for(;e;){if(e===n)return!0;e=D_(e)}return!1}):v_=(n,e)=>n.contains(e),aT=(n,e,t)=>{if(t)return Array.from(n.querySelectorAll(e));const r=n.querySelector(e);return r?[r]:[]});let ko=null,cT=!1;function nG(n){ko||(ko=function rG(){return typeof document<"u"?document.body:null}()||{},cT=!!ko.style&&"WebkitAppearance"in ko.style);let e=!0;return ko.style&&!function tG(n){return"ebkit"==n.substring(1,6)}(n)&&(e=n in ko.style,!e&&cT&&(e="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in ko.style)),e}const uT=v_,dT=aT;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class No{validateStyleProperty(e){return nG(e)}matchesElement(e,t){return!1}containsElement(e,t){return uT(e,t)}getParentElement(e){return D_(e)}query(e,t,r){return dT(e,t,r)}computeStyle(e,t,r){return r||""}animate(e,t,r,i,s,o=[],a){return new Uu(r,i)}}No.\u0275fac=function(e){return new(e||No)},No.\u0275prov=E({token:No,factory:No.\u0275fac});class vf{}vf.NOOP=new No;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const C_="ng-enter",Df="ng-leave",Cf="ng-trigger",bf=".ng-trigger",fT="ng-animating",b_=".ng-animating";function bi(n){if("number"==typeof n)return n;const e=n.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:w_(parseFloat(e[1]),e[2])}function w_(n,e){return"s"===e?1e3*n:n}function wf(n,e,t){return n.hasOwnProperty("duration")?n:function oG(n,e,t){const r=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;let i,s=0,o="";if("string"==typeof n){const a=n.match(r);if(null===a)return e.push(iT()),{duration:0,delay:0,easing:""};i=w_(parseFloat(a[1]),a[2]);const l=a[3];null!=l&&(s=w_(parseFloat(l),a[4]));const c=a[5];c&&(o=c)}else i=n;if(!t){let a=!1,l=e.length;i<0&&(e.push(function Dz(){return new v(3100,!1)}()),a=!0),s<0&&(e.push(function Cz(){return new v(3101,!1)}()),a=!0),a&&e.splice(l,0,iT())}return{duration:i,delay:s,easing:o}}(n,e,t)}function $u(n,e={}){return Object.keys(n).forEach(t=>{e[t]=n[t]}),e}function pT(n){const e=new Map;return Object.keys(n).forEach(t=>{const r=n[t];e.set(t,r)}),e}function ys(n,e=new Map,t){if(t)for(let[r,i]of t)e.set(r,i);for(let[r,i]of n)e.set(r,i);return e}function mT(n,e,t){return t?e+":"+t+";":""}function yT(n){let e="";for(let t=0;t<n.style.length;t++){const r=n.style.item(t);e+=mT(0,r,n.style.getPropertyValue(r))}for(const t in n.style){if(!n.style.hasOwnProperty(t)||t.startsWith("_"))continue;e+=mT(0,uG(t),n.style[t])}n.setAttribute("style",e)}function pr(n,e,t){n.style&&(e.forEach((r,i)=>{const s=S_(i);t&&!t.has(i)&&t.set(i,n.style[s]),n.style[s]=r}),g_()&&yT(n))}function Fo(n,e){n.style&&(e.forEach((t,r)=>{const i=S_(r);n.style[i]=""}),g_()&&yT(n))}function Hu(n){return Array.isArray(n)?1==n.length?n[0]:eT(n):n}function lG(n,e,t){const r=e.params||{},i=_T(n);i.length&&i.forEach(s=>{r.hasOwnProperty(s)||t.push(function bz(n){return new v(3001,!1)}())})}const E_=new RegExp("{{\\s*(.+?)\\s*}}","g");function _T(n){let e=[];if("string"==typeof n){let t;for(;t=E_.exec(n);)e.push(t[1]);E_.lastIndex=0}return e}function zu(n,e,t){const r=n.toString(),i=r.replace(E_,(s,o)=>{let a=e[o];return null==a&&(t.push(function wz(n){return new v(3003,!1)}()),a=""),a.toString()});return i==r?n:i}function Ef(n){const e=[];let t=n.next();for(;!t.done;)e.push(t.value),t=n.next();return e}const cG=/-+([a-z0-9])/g;function S_(n){return n.replace(cG,(...e)=>e[1].toUpperCase())}function uG(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Wt(n,e,t){switch(e.type){case 7:return n.visitTrigger(e,t);case 0:return n.visitState(e,t);case 1:return n.visitTransition(e,t);case 2:return n.visitSequence(e,t);case 3:return n.visitGroup(e,t);case 4:return n.visitAnimate(e,t);case 5:return n.visitKeyframes(e,t);case 6:return n.visitStyle(e,t);case 8:return n.visitReference(e,t);case 9:return n.visitAnimateChild(e,t);case 10:return n.visitAnimateRef(e,t);case 11:return n.visitQuery(e,t);case 12:return n.visitStagger(e,t);default:throw function Ez(n){return new v(3004,!1)}(e.type)}}function vT(n,e){return window.getComputedStyle(n)[e]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mG(n,e){const t=[];return"string"==typeof n?n.split(/\s*,\s*/).forEach(r=>function yG(n,e,t){if(":"==n[0]){const l=function _G(n,e){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,r)=>parseFloat(r)>parseFloat(t);case":decrement":return(t,r)=>parseFloat(r)<parseFloat(t);default:return e.push(function Vz(n){return new v(3016,!1)}()),"* => *"}}(n,t);if("function"==typeof l)return void e.push(l);n=l}const r=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==r||r.length<4)return t.push(function Lz(n){return new v(3015,!1)}()),e;const i=r[1],s=r[2],o=r[3];e.push(DT(i,o));const a="*"==i&&"*"==o;"<"==s[0]&&!a&&e.push(DT(o,i))}(r,t,e)):t.push(n),t}const Af=new Set(["true","1"]),Tf=new Set(["false","0"]);function DT(n,e){const t=Af.has(n)||Tf.has(n),r=Af.has(e)||Tf.has(e);return(i,s)=>{let o="*"==n||n==i,a="*"==e||e==s;return!o&&t&&"boolean"==typeof i&&(o=i?Af.has(n):Tf.has(n)),!a&&r&&"boolean"==typeof s&&(a=s?Af.has(e):Tf.has(e)),o&&a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const CT=":self",vG=new RegExp("s*:selfs*,?","g");function M_(n,e,t,r){return new DG(n).build(e,t,r)}class DG{constructor(e){this._driver=e}build(e,t,r){const i=new wG(t);return this._resetContextStyleTimingState(i),Wt(this,Hu(e),i)}_resetContextStyleTimingState(e){e.currentQuerySelector="",e.collectedStyles=new Map,e.collectedStyles.set("",new Map),e.currentTime=0}visitTrigger(e,t){let r=t.queryCount=0,i=t.depCount=0;const s=[],o=[];return"@"==e.name.charAt(0)&&t.errors.push(function Mz(){return new v(3006,!1)}()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),0==a.type){const l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(u=>{l.name=u,s.push(this.visitState(l,t))}),l.name=c}else if(1==a.type){const l=this.visitTransition(a,t);r+=l.queryCount,i+=l.depCount,o.push(l)}else t.errors.push(function Iz(){return new v(3007,!1)}())}),{type:7,name:e.name,states:s,transitions:o,queryCount:r,depCount:i,options:null}}visitState(e,t){const r=this.visitStyle(e.styles,t),i=e.options&&e.options.params||null;if(r.containsDynamicStyles){const s=new Set,o=i||{};if(r.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{_T(l).forEach(c=>{o.hasOwnProperty(c)||s.add(c)})})}),s.size){Ef(s.values());t.errors.push(function Az(n,e){return new v(3008,!1)}(e.name))}}return{type:0,name:e.name,style:r,options:i?{params:i}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;const r=Wt(this,Hu(e.animation),t);return{type:1,matchers:mG(e.expr,t.errors),animation:r,queryCount:t.queryCount,depCount:t.depCount,options:Lo(e.options)}}visitSequence(e,t){return{type:2,steps:e.steps.map(r=>Wt(this,r,t)),options:Lo(e.options)}}visitGroup(e,t){const r=t.currentTime;let i=0;const s=e.steps.map(o=>{t.currentTime=r;const a=Wt(this,o,t);return i=Math.max(i,t.currentTime),a});return t.currentTime=i,{type:3,steps:s,options:Lo(e.options)}}visitAnimate(e,t){const r=function SG(n,e){if(n.hasOwnProperty("duration"))return n;if("number"==typeof n){return I_(wf(n,e).duration,0,"")}const t=n;if(t.split(/\s+/).some(s=>"{"==s.charAt(0)&&"{"==s.charAt(1))){const s=I_(0,0,"");return s.dynamic=!0,s.strValue=t,s}const i=wf(t,e);return I_(i.duration,i.delay,i.easing)}(e.timings,t.errors);t.currentAnimateTimings=r;let i,s=e.styles?e.styles:tT({});if(5==s.type)i=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;const c={};r.easing&&(c.easing=r.easing),o=tT(c)}t.currentTime+=r.duration+r.delay;const l=this.visitStyle(o,t);l.isEmptyStep=a,i=l}return t.currentAnimateTimings=null,{type:4,timings:r,style:i,options:null}}visitStyle(e,t){const r=this._makeStyleAst(e,t);return this._validateStyleAst(r,t),r}_makeStyleAst(e,t){const r=[],i=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of i)"string"==typeof a?a===Ci?r.push(a):t.errors.push(new v(3002,!1)):r.push(pT(a));let s=!1,o=null;return r.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s))for(let l of a.values())if(l.toString().indexOf("{{")>=0){s=!0;break}}),{type:6,styles:r,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){const r=t.currentAnimateTimings;let i=t.currentTime,s=t.currentTime;r&&s>0&&(s-=r.duration+r.delay),e.styles.forEach(o=>{"string"!=typeof o&&o.forEach((a,l)=>{const c=t.collectedStyles.get(t.currentQuerySelector),u=c.get(l);let d=!0;u&&(s!=i&&s>=u.startTime&&i<=u.endTime&&(t.errors.push(function Rz(n,e,t,r,i){return new v(3010,!1)}(0,u.startTime,u.endTime)),d=!1),s=u.startTime),d&&c.set(l,{startTime:s,endTime:i}),t.options&&lG(a,t.options,t.errors)})})}visitKeyframes(e,t){const r={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(function xz(){return new v(3011,!1)}()),r;let s=0;const o=[];let a=!1,l=!1,c=0;const u=e.steps.map(C=>{const w=this._makeStyleAst(C,t);let _=null!=w.offset?w.offset:function EG(n){if("string"==typeof n)return null;let e=null;if(Array.isArray(n))n.forEach(t=>{if(t instanceof Map&&t.has("offset")){const r=t;e=parseFloat(r.get("offset")),r.delete("offset")}});else if(n instanceof Map&&n.has("offset")){const t=n;e=parseFloat(t.get("offset")),t.delete("offset")}return e}(w.styles),M=0;return null!=_&&(s++,M=w.offset=_),l=l||M<0||M>1,a=a||M<c,c=M,o.push(M),w});l&&t.errors.push(function Oz(){return new v(3012,!1)}()),a&&t.errors.push(function Pz(){return new v(3200,!1)}());const d=e.steps.length;let h=0;s>0&&s<d?t.errors.push(function kz(){return new v(3202,!1)}()):0==s&&(h=1/(d-1));const f=d-1,p=t.currentTime,g=t.currentAnimateTimings,m=g.duration;return u.forEach((C,w)=>{const _=h>0?w==f?1:h*w:o[w],M=_*m;t.currentTime=p+g.delay+M,g.duration=M,this._validateStyleAst(C,t),C.offset=_,r.styles.push(C)}),r}visitReference(e,t){return{type:8,animation:Wt(this,Hu(e.animation),t),options:Lo(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:9,options:Lo(e.options)}}visitAnimateRef(e,t){return{type:10,animation:this.visitReference(e.animation,t),options:Lo(e.options)}}visitQuery(e,t){const r=t.currentQuerySelector,i=e.options||{};t.queryCount++,t.currentQuery=e;const[s,o]=function CG(n){const e=!!n.split(/\s*,\s*/).find(t=>t==CT);return e&&(n=n.replace(vG,"")),n=n.replace(/@\*/g,bf).replace(/@\w+/g,t=>bf+"-"+t.slice(1)).replace(/:animating/g,b_),[n,e]}(e.selector);t.currentQuerySelector=r.length?r+" "+s:s,qt(t.collectedStyles,t.currentQuerySelector,new Map);const a=Wt(this,Hu(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=r,{type:11,selector:s,limit:i.limit||0,optional:!!i.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:Lo(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(function Nz(){return new v(3013,!1)}());const r="full"===e.timings?{duration:0,delay:0,easing:"full"}:wf(e.timings,t.errors,!0);return{type:12,animation:Wt(this,Hu(e.animation),t),timings:r,options:null}}}class wG{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}}function Lo(n){return n?(n=$u(n)).params&&(n.params=function bG(n){return n?$u(n):null}(n.params)):n={},n}function I_(n,e,t){return{duration:n,delay:e,easing:t}}function A_(n,e,t,r,i,s,o=null,a=!1){return{type:1,element:n,keyframes:e,preStyleProps:t,postStyleProps:r,duration:i,delay:s,totalTime:i+s,easing:o,subTimeline:a}}class Rf{constructor(){this._map=new Map}get(e){return this._map.get(e)||[]}append(e,t){let r=this._map.get(e);r||this._map.set(e,r=[]),r.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const AG=new RegExp(":enter","g"),RG=new RegExp(":leave","g");function T_(n,e,t,r,i,s=new Map,o=new Map,a,l,c=[]){return(new xG).buildKeyframes(n,e,t,r,i,s,o,a,l,c)}class xG{buildKeyframes(e,t,r,i,s,o,a,l,c,u=[]){c=c||new Rf;const d=new R_(e,t,c,i,s,u,[]);d.options=l;const h=l.delay?bi(l.delay):0;d.currentTimeline.delayNextStep(h),d.currentTimeline.setStyles([o],null,d.errors,l),Wt(this,r,d);const f=d.timelines.filter(p=>p.containsAnimation());if(f.length&&a.size){let p;for(let g=f.length-1;g>=0;g--){const m=f[g];if(m.element===t){p=m;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([a],null,d.errors,l)}return f.length?f.map(p=>p.buildKeyframes()):[A_(t,[],[],[],0,h,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){const r=t.subInstructions.get(t.element);if(r){const i=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(r,i,i.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){const r=t.createSubContext(e.options);r.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,r),this.visitReference(e.animation,r),t.transformIntoNewTimeline(r.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,r){for(const i of e){const s=i?.delay;if(s){const o="number"==typeof s?s:bi(zu(s,i?.params??{},t.errors));r.delayNextStep(o)}}}_visitSubInstructions(e,t,r){let s=t.currentTimeline.currentTime;const o=null!=r.duration?bi(r.duration):null,a=null!=r.delay?bi(r.delay):null;return 0!==o&&e.forEach(l=>{const c=t.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),Wt(this,e.animation,t),t.previousNode=e}visitSequence(e,t){const r=t.subContextCount;let i=t;const s=e.options;if(s&&(s.params||s.delay)&&(i=t.createSubContext(s),i.transformIntoNewTimeline(),null!=s.delay)){6==i.previousNode.type&&(i.currentTimeline.snapshotCurrentStyles(),i.previousNode=xf);const o=bi(s.delay);i.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>Wt(this,o,i)),i.currentTimeline.applyStylesToKeyframe(),i.subContextCount>r&&i.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){const r=[];let i=t.currentTimeline.currentTime;const s=e.options&&e.options.delay?bi(e.options.delay):0;e.steps.forEach(o=>{const a=t.createSubContext(e.options);s&&a.delayNextStep(s),Wt(this,o,a),i=Math.max(i,a.currentTimeline.currentTime),r.push(a.currentTimeline)}),r.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(i),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){const r=e.strValue;return wf(t.params?zu(r,t.params,t.errors):r,t.errors)}return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){const r=t.currentAnimateTimings=this._visitTiming(e.timings,t),i=t.currentTimeline;r.delay&&(t.incrementTime(r.delay),i.snapshotCurrentStyles());const s=e.style;5==s.type?this.visitKeyframes(s,t):(t.incrementTime(r.duration),this.visitStyle(s,t),i.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){const r=t.currentTimeline,i=t.currentAnimateTimings;!i&&r.hasCurrentStyleProperties()&&r.forwardFrame();const s=i&&i.easing||e.easing;e.isEmptyStep?r.applyEmptyStep(s):r.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){const r=t.currentAnimateTimings,i=t.currentTimeline.duration,s=r.duration,a=t.createSubContext().currentTimeline;a.easing=r.easing,e.styles.forEach(l=>{const c=l.offset||0;a.forwardTime(c*s),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(i+s),t.previousNode=e}visitQuery(e,t){const r=t.currentTimeline.currentTime,i=e.options||{},s=i.delay?bi(i.delay):0;s&&(6===t.previousNode.type||0==r&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=xf);let o=r;const a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!i.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((c,u)=>{t.currentQueryIndex=u;const d=t.createSubContext(e.options,c);s&&d.delayNextStep(s),c===t.element&&(l=d.currentTimeline),Wt(this,e.animation,d),d.currentTimeline.applyStylesToKeyframe();const h=d.currentTimeline.currentTime;o=Math.max(o,h)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){const r=t.parentContext,i=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1);let l=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=a-l;break;case"full":l=r.currentStaggerTime}const u=t.currentTimeline;l&&u.delayNextStep(l);const d=u.currentTime;Wt(this,e.animation,t),t.previousNode=e,r.currentStaggerTime=i.currentTime-d+(i.startTime-r.currentTimeline.startTime)}}const xf={};class R_{constructor(e,t,r,i,s,o,a,l){this._driver=e,this.element=t,this.subInstructions=r,this._enterClassName=i,this._leaveClassName=s,this.errors=o,this.timelines=a,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=xf,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=l||new Of(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;const r=e;let i=this.options;null!=r.duration&&(i.duration=bi(r.duration)),null!=r.delay&&(i.delay=bi(r.delay));const s=r.params;if(s){let o=i.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=zu(s[a],o,this.errors))})}}_copyOptions(){const e={};if(this.options){const t=this.options.params;if(t){const r=e.params={};Object.keys(t).forEach(i=>{r[i]=t[i]})}}return e}createSubContext(e=null,t,r){const i=t||this.element,s=new R_(this._driver,i,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(i,r||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=xf,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,r){const i={duration:t??e.duration,delay:this.currentTimeline.currentTime+(r??0)+e.delay,easing:""},s=new OG(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,i,e.stretchStartingKeyframe);return this.timelines.push(s),i}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,r,i,s,o){let a=[];if(i&&a.push(this.element),e.length>0){e=(e=e.replace(AG,"."+this._enterClassName)).replace(RG,"."+this._leaveClassName);const l=1!=r;let c=this._driver.query(this.element,e,l);0!==r&&(c=r<0?c.slice(c.length+r,c.length):c.slice(0,r)),a.push(...c)}return!s&&0==a.length&&o.push(function Fz(n){return new v(3014,!1)}()),a}}class Of{constructor(e,t,r,i){this._driver=e,this.element=t,this.startTime=r,this._elementTimelineStylesLookup=i,this.duration=0,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){const t=1===this._keyframes.size&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new Of(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,r]of this._globalTimelineStyles)this._backFill.set(t,r||Ci),this._currentKeyframe.set(t,Ci);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,r,i){t&&this._previousKeyframe.set("easing",t);const s=i&&i.params||{},o=function PG(n,e){const t=new Map;let r;return n.forEach(i=>{if("*"===i){r=r||e.keys();for(let s of r)t.set(s,Ci)}else ys(i,t)}),t}(e,this._globalTimelineStyles);for(let[a,l]of o){const c=zu(l,s,r);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??Ci),this._updateStyle(a,c)}}applyStylesToKeyframe(){0!=this._pendingStyles.size&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,r)=>{const i=this._styleSummary.get(r);(!i||t.time>i.time)&&this._updateStyle(r,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();const e=new Set,t=new Set,r=1===this._keyframes.size&&0===this.duration;let i=[];this._keyframes.forEach((a,l)=>{const c=ys(a,new Map,this._backFill);c.forEach((u,d)=>{"!"===u?e.add(d):u===Ci&&t.add(d)}),r||c.set("offset",l/this.duration),i.push(c)});const s=e.size?Ef(e.values()):[],o=t.size?Ef(t.values()):[];if(r){const a=i[0],l=new Map(a);a.set("offset",0),l.set("offset",1),i=[a,l]}return A_(this.element,i,s,o,this.duration,this.startTime,this.easing,!1)}}class OG extends Of{constructor(e,t,r,i,s,o,a=!1){super(e,t,o.delay),this.keyframes=r,this.preStyleProps=i,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:r,easing:i}=this.timings;if(this._stretchStartingKeyframe&&t){const s=[],o=r+t,a=t/o,l=ys(e[0]);l.set("offset",0),s.push(l);const c=ys(e[0]);c.set("offset",wT(a)),s.push(c);const u=e.length-1;for(let d=1;d<=u;d++){let h=ys(e[d]);const p=t+h.get("offset")*r;h.set("offset",wT(p/o)),s.push(h)}r=o,t=0,i="",e=s}return A_(this.element,e,this.preStyleProps,this.postStyleProps,r,t,i,!0)}}function wT(n,e=3){const t=Math.pow(10,e-1);return Math.round(n*t)/t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class x_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const kG=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]);class NG extends x_{normalizePropertyName(e,t){return S_(e)}normalizeStyleValue(e,t,r,i){let s="";const o=r.toString().trim();if(kG.has(t)&&0!==r&&"0"!==r)if("number"==typeof r)s="px";else{const a=r.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&0==a[1].length&&i.push(function Sz(n,e){return new v(3005,!1)}())}return o+s}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ET(n,e,t,r,i,s,o,a,l,c,u,d,h){return{type:0,element:n,triggerName:e,isRemovalTransition:i,fromState:t,fromStyles:s,toState:r,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:u,totalTime:d,errors:h}}const O_={};class ST{constructor(e,t,r){this._triggerName=e,this.ast=t,this._stateStyles=r}match(e,t,r,i){return function FG(n,e,t,r,i){return n.some(s=>s(e,t,r,i))}(this.ast.matchers,e,t,r,i)}buildStyles(e,t,r){let i=this._stateStyles.get("*");return void 0!==e&&(i=this._stateStyles.get(e?.toString())||i),i?i.buildStyles(t,r):new Map}build(e,t,r,i,s,o,a,l,c,u){const d=[],h=this.ast.options&&this.ast.options.params||O_,f=a&&a.params||O_,p=this.buildStyles(r,f,d),g=l&&l.params||O_,m=this.buildStyles(i,g,d),C=new Set,w=new Map,_=new Map,M="void"===i,H={params:LG(g,h),delay:this.ast.options?.delay},se=u?[]:T_(e,t,this.ast.animation,s,o,p,m,H,c,d);let Te=0;if(se.forEach(Zt=>{Te=Math.max(Zt.duration+Zt.delay,Te)}),d.length)return ET(t,this._triggerName,r,i,M,p,m,[],[],w,_,Te,d);se.forEach(Zt=>{const Qt=Zt.element,jl=qt(w,Qt,new Set);Zt.preStyleProps.forEach(Fn=>jl.add(Fn));const wi=qt(_,Qt,new Set);Zt.postStyleProps.forEach(Fn=>wi.add(Fn)),Qt!==t&&C.add(Qt)});const Kt=Ef(C.values());return ET(t,this._triggerName,r,i,M,p,m,se,Kt,w,_,Te)}}function LG(n,e){const t=$u(e);for(const r in n)n.hasOwnProperty(r)&&null!=n[r]&&(t[r]=n[r]);return t}class VG{constructor(e,t,r){this.styles=e,this.defaultParams=t,this.normalizer=r}buildStyles(e,t){const r=new Map,i=$u(this.defaultParams);return Object.keys(e).forEach(s=>{const o=e[s];null!==o&&(i[s]=o)}),this.styles.styles.forEach(s=>{"string"!=typeof s&&s.forEach((o,a)=>{o&&(o=zu(o,i,t));const l=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,l,o,t),r.set(l,o)})}),r}}class jG{constructor(e,t,r){this.name=e,this.ast=t,this._normalizer=r,this.transitionFactories=[],this.states=new Map,t.states.forEach(i=>{const s=i.options&&i.options.params||{};this.states.set(i.name,new VG(i.style,s,r))}),MT(this.states,"true","1"),MT(this.states,"false","0"),t.transitions.forEach(i=>{this.transitionFactories.push(new ST(e,i,this.states))}),this.fallbackTransition=function UG(n,e,t){return new ST(n,{type:1,animation:{type:2,steps:[],options:null},matchers:[(o,a)=>!0],options:null,queryCount:0,depCount:0},e)}(e,this.states,this._normalizer)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,r,i){return this.transitionFactories.find(o=>o.match(e,t,r,i))||null}matchStyles(e,t,r){return this.fallbackTransition.buildStyles(e,t,r)}}function MT(n,e,t){n.has(e)?n.has(t)||n.set(t,n.get(e)):n.has(t)&&n.set(e,n.get(t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $G=new Rf;class HG{constructor(e,t,r){this.bodyNode=e,this._driver=t,this._normalizer=r,this._animations=new Map,this._playersById=new Map,this.players=[]}register(e,t){const r=[],i=[],s=M_(this._driver,t,r,i);if(r.length)throw function Hz(n){return new v(3503,!1)}();i.length,this._animations.set(e,s)}_buildPlayer(e,t,r){const i=e.element,s=sT(this._driver,this._normalizer,0,e.keyframes,t,r);return this._driver.animate(i,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,r={}){const i=[],s=this._animations.get(e);let o;const a=new Map;if(s?(o=T_(this._driver,t,s,C_,Df,new Map,new Map,r,$G,i),o.forEach(u=>{const d=qt(a,u.element,new Map);u.postStyleProps.forEach(h=>d.set(h,null))})):(i.push(function zz(){return new v(3300,!1)}()),o=[]),i.length)throw function Gz(n){return new v(3504,!1)}();a.forEach((u,d)=>{u.forEach((h,f)=>{u.set(f,this._driver.computeStyle(d,f,Ci))})});const c=ms(o.map(u=>{const d=a.get(u.element);return this._buildPlayer(u,new Map,d)}));return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){const t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);const r=this.players.indexOf(t);r>=0&&this.players.splice(r,1)}_getPlayer(e){const t=this._playersById.get(e);if(!t)throw function qz(n){return new v(3301,!1)}();return t}listen(e,t,r,i){const s=__(t,"","","");return m_(this._getPlayer(e),r,s,i),()=>{}}command(e,t,r,i){if("register"==r)return void this.register(e,i[0]);if("create"==r){const o=i[0]||{};return void this.create(e,t,o)}const s=this._getPlayer(e);switch(r){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(i[0]));break;case"destroy":this.destroy(e)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const IT="ng-animate-queued",P_="ng-animate-disabled",KG=[],AT={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},ZG={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},pn="__ng_removed";class k_{constructor(e,t=""){this.namespaceId=t;const r=e&&e.hasOwnProperty("value"),i=r?e.value:e;if(this.value=function JG(n){return n??null}(i),r){const s=$u(e);delete s.value,this.options=s}else this.options={};this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(e){const t=e.params;if(t){const r=this.options.params;Object.keys(t).forEach(i=>{null==r[i]&&(r[i]=t[i])})}}}const Gu="void",N_=new k_(Gu);class QG{constructor(e,t,r){this.id=e,this.hostElement=t,this._engine=r,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,gn(t,this._hostClassName)}listen(e,t,r,i){if(!this._triggers.has(t))throw function Wz(n,e){return new v(3302,!1)}();if(null==r||0==r.length)throw function Kz(n){return new v(3303,!1)}();if(!function e3(n){return"start"==n||"done"==n}(r))throw function Zz(n,e){return new v(3400,!1)}();const s=qt(this._elementListeners,e,[]),o={name:t,phase:r,callback:i};s.push(o);const a=qt(this._engine.statesByElement,e,new Map);return a.has(t)||(gn(e,Cf),gn(e,Cf+"-"+t),a.set(t,N_)),()=>{this._engine.afterFlush(()=>{const l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return!this._triggers.has(e)&&(this._triggers.set(e,t),!0)}_getTrigger(e){const t=this._triggers.get(e);if(!t)throw function Qz(n){return new v(3401,!1)}();return t}trigger(e,t,r,i=!0){const s=this._getTrigger(t),o=new F_(this.id,t,e);let a=this._engine.statesByElement.get(e);a||(gn(e,Cf),gn(e,Cf+"-"+t),this._engine.statesByElement.set(e,a=new Map));let l=a.get(t);const c=new k_(r,this.id);if(!(r&&r.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(t,c),l||(l=N_),c.value!==Gu&&l.value===c.value){if(!function r3(n,e){const t=Object.keys(n),r=Object.keys(e);if(t.length!=r.length)return!1;for(let i=0;i<t.length;i++){const s=t[i];if(!e.hasOwnProperty(s)||n[s]!==e[s])return!1}return!0}(l.params,c.params)){const g=[],m=s.matchStyles(l.value,l.params,g),C=s.matchStyles(c.value,c.params,g);g.length?this._engine.reportError(g):this._engine.afterFlush(()=>{Fo(e,m),pr(e,C)})}return}const h=qt(this._engine.playersByElement,e,[]);h.forEach(g=>{g.namespaceId==this.id&&g.triggerName==t&&g.queued&&g.destroy()});let f=s.matchTransition(l.value,c.value,e,c.params),p=!1;if(!f){if(!i)return;f=s.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:f,fromState:l,toState:c,player:o,isFallbackTransition:p}),p||(gn(e,IT),o.onStart(()=>{kl(e,IT)})),o.onDone(()=>{let g=this.players.indexOf(o);g>=0&&this.players.splice(g,1);const m=this._engine.playersByElement.get(e);if(m){let C=m.indexOf(o);C>=0&&m.splice(C,1)}}),this.players.push(o),h.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,r)=>{this._elementListeners.set(r,t.filter(i=>i.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);const t=this._engine.playersByElement.get(e);t&&(t.forEach(r=>r.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){const r=this._engine.driver.query(e,bf,!0);r.forEach(i=>{if(i[pn])return;const s=this._engine.fetchNamespacesByElement(i);s.size?s.forEach(o=>o.triggerLeaveAnimation(i,t,!1,!0)):this.clearElementCache(i)}),this._engine.afterFlushAnimationsDone(()=>r.forEach(i=>this.clearElementCache(i)))}triggerLeaveAnimation(e,t,r,i){const s=this._engine.statesByElement.get(e),o=new Map;if(s){const a=[];if(s.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){const u=this.trigger(e,c,Gu,i);u&&a.push(u)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),r&&ms(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){const t=this._elementListeners.get(e),r=this._engine.statesByElement.get(e);if(t&&r){const i=new Set;t.forEach(s=>{const o=s.name;if(i.has(o))return;i.add(o);const l=this._triggers.get(o).fallbackTransition,c=r.get(o)||N_,u=new k_(Gu),d=new F_(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:u,player:d,isFallbackTransition:!0})})}}removeNode(e,t){const r=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let i=!1;if(r.totalAnimations){const s=r.players.length?r.playersByQueriedElement.get(e):[];if(s&&s.length)i=!0;else{let o=e;for(;o=o.parentNode;)if(r.statesByElement.get(o)){i=!0;break}}}if(this.prepareLeaveAnimationListeners(e),i)r.markElementAsRemoved(this.id,e,!1,t);else{const s=e[pn];(!s||s===AT)&&(r.afterFlush(()=>this.clearElementCache(e)),r.destroyInnerAnimations(e),r._onRemovalComplete(e,t))}}insertNode(e,t){gn(e,this._hostClassName)}drainQueuedTransitions(e){const t=[];return this._queue.forEach(r=>{const i=r.player;if(i.destroyed)return;const s=r.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==r.triggerName){const l=__(s,r.triggerName,r.fromState.value,r.toState.value);l._data=e,m_(r.player,a.phase,l,a.callback)}}),i.markedForDestroy?this._engine.afterFlush(()=>{i.destroy()}):t.push(r)}),this._queue=[],t.sort((r,i)=>{const s=r.transition.ast.depCount,o=i.transition.ast.depCount;return 0==s||0==o?s-o:this._engine.driver.containsElement(r.element,i.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}elementContainsData(e){let t=!1;return this._elementListeners.has(e)&&(t=!0),t=!!this._queue.find(r=>r.element===e)||t,t}}class YG{constructor(e,t,r){this.bodyNode=e,this.driver=t,this._normalizer=r,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(i,s)=>{}}_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}get queuedPlayers(){const e=[];return this._namespaceList.forEach(t=>{t.players.forEach(r=>{r.queued&&e.push(r)})}),e}createNamespace(e,t){const r=new QG(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(r,t):(this.newHostElements.set(t,r),this.collectEnterElement(t)),this._namespaceLookup[e]=r}_balanceNamespaceList(e,t){const r=this._namespaceList,i=this.namespacesByHostElement;if(r.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){const l=i.get(a);if(l){const c=r.indexOf(l);r.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||r.unshift(e)}else r.push(e);return i.set(t,e),e}register(e,t){let r=this._namespaceLookup[e];return r||(r=this.createNamespace(e,t)),r}registerTrigger(e,t,r){let i=this._namespaceLookup[e];i&&i.register(t,r)&&this.totalAnimations++}destroy(e,t){if(!e)return;const r=this._fetchNamespace(e);this.afterFlush(()=>{this.namespacesByHostElement.delete(r.hostElement),delete this._namespaceLookup[e];const i=this._namespaceList.indexOf(r);i>=0&&this._namespaceList.splice(i,1)}),this.afterFlushAnimationsDone(()=>r.destroy(t))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){const t=new Set,r=this.statesByElement.get(e);if(r)for(let i of r.values())if(i.namespaceId){const s=this._fetchNamespace(i.namespaceId);s&&t.add(s)}return t}trigger(e,t,r,i){if(Pf(t)){const s=this._fetchNamespace(e);if(s)return s.trigger(t,r,i),!0}return!1}insertNode(e,t,r,i){if(!Pf(t))return;const s=t[pn];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;const o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){const o=this._fetchNamespace(e);o&&o.insertNode(t,r)}i&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),gn(e,P_)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),kl(e,P_))}removeNode(e,t,r,i){if(Pf(t)){const s=e?this._fetchNamespace(e):null;if(s?s.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i),r){const o=this.namespacesByHostElement.get(t);o&&o.id!==e&&o.removeNode(t,i)}}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,r,i,s){this.collectedLeaveElements.push(t),t[pn]={namespaceId:e,setForRemoval:i,hasAnimation:r,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,r,i,s){return Pf(t)?this._fetchNamespace(e).listen(t,r,i,s):()=>{}}_buildInstruction(e,t,r,i,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,r,i,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,bf,!0);t.forEach(r=>this.destroyActiveAnimationsForElement(r)),0!=this.playersByQueriedElement.size&&(t=this.driver.query(e,b_,!0),t.forEach(r=>this.finishActiveQueriedAnimationOnElement(r)))}destroyActiveAnimationsForElement(e){const t=this.playersByElement.get(e);t&&t.forEach(r=>{r.queued?r.markedForDestroy=!0:r.destroy()})}finishActiveQueriedAnimationOnElement(e){const t=this.playersByQueriedElement.get(e);t&&t.forEach(r=>r.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return ms(this.players).onDone(()=>e());e()})}processLeaveNode(e){const t=e[pn];if(t&&t.setForRemoval){if(e[pn]=AT,t.namespaceId){this.destroyInnerAnimations(e);const r=this._fetchNamespace(t.namespaceId);r&&r.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(P_)&&this.markElementAsDisabled(e,!1),this.driver.query(e,".ng-animate-disabled",!0).forEach(r=>{this.markElementAsDisabled(r,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((r,i)=>this._balanceNamespaceList(r,i)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let r=0;r<this.collectedEnterElements.length;r++){gn(this.collectedEnterElements[r],"ng-star-inserted")}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const r=[];try{t=this._flushAnimations(r,e)}finally{for(let i=0;i<r.length;i++)r[i]()}}else for(let r=0;r<this.collectedLeaveElements.length;r++){const i=this.collectedLeaveElements[r];this.processLeaveNode(i)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(r=>r()),this._flushFns=[],this._whenQuietFns.length){const r=this._whenQuietFns;this._whenQuietFns=[],t.length?ms(t).onDone(()=>{r.forEach(i=>i())}):r.forEach(i=>i())}}reportError(e){throw function Yz(n){return new v(3402,!1)}()}_flushAnimations(e,t){const r=new Rf,i=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,u=new Set;this.disabledNodes.forEach(R=>{u.add(R);const O=this.driver.query(R,".ng-animate-queued",!0);for(let P=0;P<O.length;P++)u.add(O[P])});const d=this.bodyNode,h=Array.from(this.statesByElement.keys()),f=xT(h,this.collectedEnterElements),p=new Map;let g=0;f.forEach((R,O)=>{const P=C_+g++;p.set(O,P),R.forEach(le=>gn(le,P))});const m=[],C=new Set,w=new Set;for(let R=0;R<this.collectedLeaveElements.length;R++){const O=this.collectedLeaveElements[R],P=O[pn];P&&P.setForRemoval&&(m.push(O),C.add(O),P.hasAnimation?this.driver.query(O,".ng-star-inserted",!0).forEach(le=>C.add(le)):w.add(O))}const _=new Map,M=xT(h,Array.from(C));M.forEach((R,O)=>{const P=Df+g++;_.set(O,P),R.forEach(le=>gn(le,P))}),e.push(()=>{f.forEach((R,O)=>{const P=p.get(O);R.forEach(le=>kl(le,P))}),M.forEach((R,O)=>{const P=_.get(O);R.forEach(le=>kl(le,P))}),m.forEach(R=>{this.processLeaveNode(R)})});const H=[],se=[];for(let R=this._namespaceList.length-1;R>=0;R--)this._namespaceList[R].drainQueuedTransitions(t).forEach(P=>{const le=P.player,Qe=P.element;if(H.push(le),this.collectedEnterElements.length){const ct=Qe[pn];if(ct&&ct.setForMove){if(ct.previousTriggersValues&&ct.previousTriggersValues.has(P.triggerName)){const Vo=ct.previousTriggersValues.get(P.triggerName),mn=this.statesByElement.get(P.element);if(mn&&mn.has(P.triggerName)){const Ff=mn.get(P.triggerName);Ff.value=Vo,mn.set(P.triggerName,Ff)}}return void le.destroy()}}const gr=!d||!this.driver.containsElement(d,Qe),Yt=_.get(Qe),vs=p.get(Qe),Re=this._buildInstruction(P,r,vs,Yt,gr);if(Re.errors&&Re.errors.length)return void se.push(Re);if(gr)return le.onStart(()=>Fo(Qe,Re.fromStyles)),le.onDestroy(()=>pr(Qe,Re.toStyles)),void i.push(le);if(P.isFallbackTransition)return le.onStart(()=>Fo(Qe,Re.fromStyles)),le.onDestroy(()=>pr(Qe,Re.toStyles)),void i.push(le);const BT=[];Re.timelines.forEach(ct=>{ct.stretchStartingKeyframe=!0,this.disabledNodes.has(ct.element)||BT.push(ct)}),Re.timelines=BT,r.append(Qe,Re.timelines);const p3={instruction:Re,player:le,element:Qe};o.push(p3),Re.queriedElements.forEach(ct=>qt(a,ct,[]).push(le)),Re.preStyleProps.forEach((ct,Vo)=>{if(ct.size){let mn=l.get(Vo);mn||l.set(Vo,mn=new Set),ct.forEach((Ff,j_)=>mn.add(j_))}}),Re.postStyleProps.forEach((ct,Vo)=>{let mn=c.get(Vo);mn||c.set(Vo,mn=new Set),ct.forEach((Ff,j_)=>mn.add(j_))})});if(se.length){const R=[];se.forEach(O=>{R.push(function Xz(n,e){return new v(3505,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(O.triggerName,O.errors))}),H.forEach(O=>O.destroy()),this.reportError(R)}const Te=new Map,Kt=new Map;o.forEach(R=>{const O=R.element;r.has(O)&&(Kt.set(O,O),this._beforeAnimationBuild(R.player.namespaceId,R.instruction,Te))}),i.forEach(R=>{const O=R.element;this._getPreviousPlayers(O,!1,R.namespaceId,R.triggerName,null).forEach(le=>{qt(Te,O,[]).push(le),le.destroy()})});const Zt=m.filter(R=>PT(R,l,c)),Qt=new Map;RT(Qt,this.driver,w,c,Ci).forEach(R=>{PT(R,l,c)&&Zt.push(R)});const wi=new Map;f.forEach((R,O)=>{RT(wi,this.driver,new Set(R),l,"!")}),Zt.forEach(R=>{const O=Qt.get(R),P=wi.get(R);Qt.set(R,new Map([...Array.from(O?.entries()??[]),...Array.from(P?.entries()??[])]))});const Fn=[],Ul=[],$l={};o.forEach(R=>{const{element:O,player:P,instruction:le}=R;if(r.has(O)){if(u.has(O))return P.onDestroy(()=>pr(O,le.toStyles)),P.disabled=!0,P.overrideTotalTime(le.totalTime),void i.push(P);let Qe=$l;if(Kt.size>1){let Yt=O;const vs=[];for(;Yt=Yt.parentNode;){const Re=Kt.get(Yt);if(Re){Qe=Re;break}vs.push(Yt)}vs.forEach(Re=>Kt.set(Re,Qe))}const gr=this._buildAnimation(P.namespaceId,le,Te,s,wi,Qt);if(P.setRealPlayer(gr),Qe===$l)Fn.push(P);else{const Yt=this.playersByElement.get(Qe);Yt&&Yt.length&&(P.parentPlayer=ms(Yt)),i.push(P)}}else Fo(O,le.fromStyles),P.onDestroy(()=>pr(O,le.toStyles)),Ul.push(P),u.has(O)&&i.push(P)}),Ul.forEach(R=>{const O=s.get(R.element);if(O&&O.length){const P=ms(O);R.setRealPlayer(P)}}),i.forEach(R=>{R.parentPlayer?R.syncPlayerEvents(R.parentPlayer):R.destroy()});for(let R=0;R<m.length;R++){const O=m[R],P=O[pn];if(kl(O,Df),P&&P.hasAnimation)continue;let le=[];if(a.size){let gr=a.get(O);gr&&gr.length&&le.push(...gr);let Yt=this.driver.query(O,b_,!0);for(let vs=0;vs<Yt.length;vs++){let Re=a.get(Yt[vs]);Re&&Re.length&&le.push(...Re)}}const Qe=le.filter(gr=>!gr.destroyed);Qe.length?t3(this,O,Qe):this.processLeaveNode(O)}return m.length=0,Fn.forEach(R=>{this.players.push(R),R.onDone(()=>{R.destroy();const O=this.players.indexOf(R);this.players.splice(O,1)}),R.play()}),Fn}elementContainsData(e,t){let r=!1;const i=t[pn];return i&&i.setForRemoval&&(r=!0),this.playersByElement.has(t)&&(r=!0),this.playersByQueriedElement.has(t)&&(r=!0),this.statesByElement.has(t)&&(r=!0),this._fetchNamespace(e).elementContainsData(t)||r}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,r,i,s){let o=[];if(t){const a=this.playersByQueriedElement.get(e);a&&(o=a)}else{const a=this.playersByElement.get(e);if(a){const l=!s||s==Gu;a.forEach(c=>{c.queued||!l&&c.triggerName!=i||o.push(c)})}}return(r||i)&&(o=o.filter(a=>!(r&&r!=a.namespaceId||i&&i!=a.triggerName))),o}_beforeAnimationBuild(e,t,r){const i=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:i;for(const l of t.timelines){const c=l.element,u=c!==s,d=qt(r,c,[]);this._getPreviousPlayers(c,u,o,a,t.toState).forEach(f=>{const p=f.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),f.destroy(),d.push(f)})}Fo(s,t.fromStyles)}_buildAnimation(e,t,r,i,s,o){const a=t.triggerName,l=t.element,c=[],u=new Set,d=new Set,h=t.timelines.map(p=>{const g=p.element;u.add(g);const m=g[pn];if(m&&m.removedBeforeQueried)return new Uu(p.duration,p.delay);const C=g!==l,w=function n3(n){const e=[];return OT(n,e),e}((r.get(g)||KG).map(Te=>Te.getRealPlayer())).filter(Te=>{const Kt=Te;return!!Kt.element&&Kt.element===g}),_=s.get(g),M=o.get(g),H=sT(this.driver,this._normalizer,0,p.keyframes,_,M),se=this._buildPlayer(p,H,w);if(p.subTimeline&&i&&d.add(g),C){const Te=new F_(e,a,g);Te.setRealPlayer(se),c.push(Te)}return se});c.forEach(p=>{qt(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>function XG(n,e,t){let r=n.get(e);if(r){if(r.length){const i=r.indexOf(t);r.splice(i,1)}0==r.length&&n.delete(e)}return r}(this.playersByQueriedElement,p.element,p))}),u.forEach(p=>gn(p,fT));const f=ms(h);return f.onDestroy(()=>{u.forEach(p=>kl(p,fT)),pr(l,t.toStyles)}),d.forEach(p=>{qt(i,p,[]).push(f)}),f}_buildPlayer(e,t,r){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,r):new Uu(e.duration,e.delay)}}class F_{constructor(e,t,r){this.namespaceId=e,this.triggerName=t,this.element=r,this._player=new Uu,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,r)=>{t.forEach(i=>m_(e,r,void 0,i))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){const t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){qt(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){const t=this._player;t.triggerCallback&&t.triggerCallback(e)}}function Pf(n){return n&&1===n.nodeType}function TT(n,e){const t=n.style.display;return n.style.display=e??"none",t}function RT(n,e,t,r,i){const s=[];t.forEach(l=>s.push(TT(l)));const o=[];r.forEach((l,c)=>{const u=new Map;l.forEach(d=>{const h=e.computeStyle(c,d,i);u.set(d,h),(!h||0==h.length)&&(c[pn]=ZG,o.push(c))}),n.set(c,u)});let a=0;return t.forEach(l=>TT(l,s[a++])),o}function xT(n,e){const t=new Map;if(n.forEach(a=>t.set(a,[])),0==e.length)return t;const i=new Set(e),s=new Map;function o(a){if(!a)return 1;let l=s.get(a);if(l)return l;const c=a.parentNode;return l=t.has(c)?c:i.has(c)?1:o(c),s.set(a,l),l}return e.forEach(a=>{const l=o(a);1!==l&&t.get(l).push(a)}),t}function gn(n,e){n.classList?.add(e)}function kl(n,e){n.classList?.remove(e)}function t3(n,e,t){ms(t).onDone(()=>n.processLeaveNode(e))}function OT(n,e){for(let t=0;t<n.length;t++){const r=n[t];r instanceof rT?OT(r.players,e):e.push(r)}}function PT(n,e,t){const r=t.get(n);if(!r)return!1;let i=e.get(n);return i?r.forEach(s=>i.add(s)):e.set(n,r),t.delete(n),!0}class kf{constructor(e,t,r){this.bodyNode=e,this._driver=t,this._normalizer=r,this._triggerCache={},this.onRemovalComplete=(i,s)=>{},this._transitionEngine=new YG(e,t,r),this._timelineEngine=new HG(e,t,r),this._transitionEngine.onRemovalComplete=(i,s)=>this.onRemovalComplete(i,s)}registerTrigger(e,t,r,i,s){const o=e+"-"+i;let a=this._triggerCache[o];if(!a){const l=[],c=[],u=M_(this._driver,s,l,c);if(l.length)throw function Uz(n,e){return new v(3404,!1)}();c.length,a=function BG(n,e,t){return new jG(n,e,t)}(i,u,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,i,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,r,i){this._transitionEngine.insertNode(e,t,r,i)}onRemove(e,t,r,i){this._transitionEngine.removeNode(e,t,i||!1,r)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,r,i){if("@"==r.charAt(0)){const[s,o]=oT(r),a=i;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,r,i)}listen(e,t,r,i,s){if("@"==r.charAt(0)){const[o,a]=oT(r);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,r,i,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}class Nl{constructor(e,t,r){this._element=e,this._startStyles=t,this._endStyles=r,this._state=0;let i=Nl.initialStylesByElement.get(e);i||Nl.initialStylesByElement.set(e,i=new Map),this._initialStyles=i}start(){this._state<1&&(this._startStyles&&pr(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(pr(this._element,this._initialStyles),this._endStyles&&(pr(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(Nl.initialStylesByElement.delete(this._element),this._startStyles&&(Fo(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Fo(this._element,this._endStyles),this._endStyles=null),pr(this._element,this._initialStyles),this._state=3)}}function L_(n){let e=null;return n.forEach((t,r)=>{(function s3(n){return"display"===n||"position"===n})(r)&&(e=e||new Map,e.set(r,t))}),e}Nl.initialStylesByElement=new WeakMap;class kT{constructor(e,t,r,i){this.element=e,this.keyframes=t,this.options=r,this._specialStyles=i,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=r.duration,this._delay=r.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:new Map,this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(e){const t=[];return e.forEach(r=>{t.push(Object.fromEntries(r))}),t}_triggerWebAnimation(e,t,r){return e.animate(this._convertKeyframesToObject(t),r)}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=e*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((r,i)=>{"offset"!==i&&e.set(i,this._finished?r:vT(this.element,i))}),this.currentSnapshot=e}triggerCallback(e){const t="start"===e?this._onStartFns:this._onDoneFns;t.forEach(r=>r()),t.length=0}}class o3{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}matchesElement(e,t){return!1}containsElement(e,t){return uT(e,t)}getParentElement(e){return D_(e)}query(e,t,r){return dT(e,t,r)}computeStyle(e,t,r){return window.getComputedStyle(e)[t]}animate(e,t,r,i,s,o=[]){const l={duration:r,delay:i,fill:0==i?"both":"forwards"};s&&(l.easing=s);const c=new Map,u=o.filter(f=>f instanceof kT);(function dG(n,e){return 0===n||0===e})(r,i)&&u.forEach(f=>{f.currentSnapshot.forEach((p,g)=>c.set(g,p))});let d=function aG(n){return n.length?n[0]instanceof Map?n:n.map(e=>pT(e)):[]}(t).map(f=>ys(f));d=function hG(n,e,t){if(t.size&&e.length){let r=e[0],i=[];if(t.forEach((s,o)=>{r.has(o)||i.push(o),r.set(o,s)}),i.length)for(let s=1;s<e.length;s++){let o=e[s];i.forEach(a=>o.set(a,vT(n,a)))}}return e}(e,d,c);const h=function i3(n,e){let t=null,r=null;return Array.isArray(e)&&e.length?(t=L_(e[0]),e.length>1&&(r=L_(e[e.length-1]))):e instanceof Map&&(t=L_(e)),t||r?new Nl(n,t,r):null}(e,d);return new kT(e,d,l,h)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.3.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Fl extends JA{constructor(e,t){super(),this._nextAnimationId=0;const r={id:"0",encapsulation:Ln.None,styles:[],data:{animation:[]}};this._renderer=e.createRenderer(t.body,r)}build(e){const t=this._nextAnimationId.toString();this._nextAnimationId++;const r=Array.isArray(e)?eT(e):e;return NT(this._renderer,null,t,"register",[r]),new a3(t,this._renderer)}}Fl.\u0275fac=function(e){return new(e||Fl)(D(pc),D(B))},Fl.\u0275prov=E({token:Fl,factory:Fl.\u0275fac});class a3 extends class vz{}{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new l3(this._id,e,t||{},this._renderer)}}class l3{constructor(e,t,r,i){this.id=e,this.element=t,this._renderer=i,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",r)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return NT(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(e){this._command("setPosition",e)}getPosition(){return this._renderer.engine.players[+this.id]?.getPosition()??0}}function NT(n,e,t,r,i){return n.setProperty(e,`@@${t}:${r}`,i)}const FT="@.disabled";class Ll{constructor(e,t,r){this.delegate=e,this.engine=t,this._zone=r,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),t.onRemovalComplete=(i,s)=>{const o=s?.parentNode(i);o&&s.removeChild(o,i)}}createRenderer(e,t){const i=this.delegate.createRenderer(e,t);if(!(e&&t&&t.data&&t.data.animation)){let c=this._rendererCache.get(i);if(!c){const u=()=>this._rendererCache.delete(i);c=new LT("",i,this.engine,u),this._rendererCache.set(i,c)}return c}const s=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);const a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(s,o,e,c.name,c)};return t.data.animation.forEach(a),new c3(this,o,i,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,r){e>=0&&e<this._microtaskId?this._zone.run(()=>t(r)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(i=>{const[s,o]=i;s(o)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([t,r]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}Ll.\u0275fac=function(e){return new(e||Ll)(D(pc),D(kf),D(ee))},Ll.\u0275prov=E({token:Ll,factory:Ll.\u0275fac});class LT{constructor(e,t,r,i){this.namespaceId=e,this.delegate=t,this.engine=r,this._onDestroy=i,this.destroyNode=this.delegate.destroyNode?s=>t.destroyNode(s):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy(),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,r,i=!0){this.delegate.insertBefore(e,t,r),this.engine.onInsert(this.namespaceId,t,e,i)}removeChild(e,t,r){this.engine.onRemove(this.namespaceId,t,this.delegate,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,i){this.delegate.setAttribute(e,t,r,i)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,i){this.delegate.setStyle(e,t,r,i)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){"@"==t.charAt(0)&&t==FT?this.disableAnimations(e,!!r):this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.delegate.listen(e,t,r)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}}class c3 extends LT{constructor(e,t,r,i,s){super(t,r,i,s),this.factory=e,this.namespaceId=t}setProperty(e,t,r){"@"==t.charAt(0)?"."==t.charAt(1)&&t==FT?(r=void 0===r||!!r,this.disableAnimations(e,r)):this.engine.process(this.namespaceId,e,t.slice(1),r):this.delegate.setProperty(e,t,r)}listen(e,t,r){if("@"==t.charAt(0)){const i=function u3(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}(e);let s=t.slice(1),o="";return"@"!=s.charAt(0)&&([s,o]=function d3(n){const e=n.indexOf("."),t=n.substring(0,e),r=n.slice(e+1);return[t,r]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)),this.engine.listen(this.namespaceId,i,s,o,a=>{const l=a._data||-1;this.factory.scheduleListenerCallback(l,r,a)})}return this.delegate.listen(e,t,r)}}class Vl extends kf{constructor(e,t,r,i){super(e.body,t,r)}ngOnDestroy(){this.flush()}}Vl.\u0275fac=function(e){return new(e||Vl)(D(B),D(vf),D(x_),D(Kn))},Vl.\u0275prov=E({token:Vl,factory:Vl.\u0275fac});const VT=[{provide:JA,useClass:Fl},{provide:x_,useFactory:function h3(){return new NG}},{provide:kf,useClass:Vl},{provide:pc,useFactory:function f3(n,e,t){return new Ll(n,e,t)},deps:[qr,kf,ee]}],V_=[{provide:vf,useFactory:()=>new o3},{provide:Nc,useValue:"BrowserAnimations"},...VT],B_=[{provide:vf,useClass:No},{provide:Nc,useValue:"NoopAnimations"},...VT];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _s{static withConfig(e){return{ngModule:_s,providers:e.disableAnimations?B_:V_}}}_s.\u0275fac=function(e){return new(e||_s)},_s.\u0275mod=oe({type:_s,exports:[cn]}),_s.\u0275inj=re({providers:V_,imports:[cn]});class qu{}qu.\u0275fac=function(e){return new(e||qu)},qu.\u0275mod=oe({type:qu,exports:[cn]}),qu.\u0275inj=re({providers:B_,imports:[cn]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Bl{}Bl.\u0275fac=function(e){return new(e||Bl)},Bl.\u0275mod=oe({type:Bl,bootstrap:[ju]}),Bl.\u0275inj=re({imports:[cn,Il,_s,gl,ol,Ol,fl]}),function k1(){if(zE)throw new Error("Cannot enable prod mode after platform setup.");HE=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),eB().bootstrapModule(Bl).catch(n=>console.error(n))}},te=>{var Bo;Bo=932,te(te.s=Bo)}]);