"use strict";(self.webpackChunksalesManagment=self.webpackChunksalesManagment||[]).push([[429],{435:(ie,Ee,de)=>{de(583)},583:()=>{
/**
       * @license Angular v14.2.0-next.0
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
!function(e){const t=e.performance;function c(H){t&&t.mark&&t.mark(H)}function s(H,r){t&&t.measure&&t.measure(H,r)}c("Zone");const a=e.__Zone_symbol_prefix||"__zone_symbol__";function l(H){return a+H}const y=!0===e[l("forceDuplicateZoneCheck")];if(e.Zone){if(y||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}class _{constructor(r,n){this._parent=r,this._name=n?n.name||"unnamed":"<root>",this._properties=n&&n.properties||{},this._zoneDelegate=new k(this,this._parent&&this._parent._zoneDelegate,n)}static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let r=_.current;for(;r.parent;)r=r.parent;return r}static get current(){return U.zone}static get currentTask(){return re}static __load_patch(r,n,o=!1){if(oe.hasOwnProperty(r)){if(!o&&y)throw Error("Already loaded patch: "+r)}else if(!e["__Zone_disable_"+r]){const b="Zone:"+r;c(b),oe[r]=n(e,_,z),s(b,b)}}get parent(){return this._parent}get name(){return this._name}get(r){const n=this.getZoneWith(r);if(n)return n._properties[r]}getZoneWith(r){let n=this;for(;n;){if(n._properties.hasOwnProperty(r))return n;n=n._parent}return null}fork(r){if(!r)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,r)}wrap(r,n){if("function"!=typeof r)throw new Error("Expecting function got: "+r);const o=this._zoneDelegate.intercept(this,r,n),b=this;return function(){return b.runGuarded(o,this,arguments,n)}}run(r,n,o,b){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,r,n,o,b)}finally{U=U.parent}}runGuarded(r,n=null,o,b){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,r,n,o,b)}catch(G){if(this._zoneDelegate.handleError(this,G))throw G}}finally{U=U.parent}}runTask(r,n,o){if(r.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(r.zone||$).name+"; Execution: "+this.name+")");if(r.state===A&&(r.type===J||r.type===w))return;const b=r.state!=p;b&&r._transitionTo(p,M),r.runCount++;const G=re;re=r,U={parent:U,zone:this};try{r.type==w&&r.data&&!r.data.isPeriodic&&(r.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,r,n,o)}catch(te){if(this._zoneDelegate.handleError(this,te))throw te}}finally{r.state!==A&&r.state!==d&&(r.type==J||r.data&&r.data.isPeriodic?b&&r._transitionTo(M,p):(r.runCount=0,this._updateTaskCount(r,-1),b&&r._transitionTo(A,p,A))),U=U.parent,re=G}}scheduleTask(r){if(r.zone&&r.zone!==this){let o=this;for(;o;){if(o===r.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${r.zone.name}`);o=o.parent}}r._transitionTo(X,A);const n=[];r._zoneDelegates=n,r._zone=this;try{r=this._zoneDelegate.scheduleTask(this,r)}catch(o){throw r._transitionTo(d,X,A),this._zoneDelegate.handleError(this,o),o}return r._zoneDelegates===n&&this._updateTaskCount(r,1),r.state==X&&r._transitionTo(M,X),r}scheduleMicroTask(r,n,o,b){return this.scheduleTask(new m(N,r,n,o,b,void 0))}scheduleMacroTask(r,n,o,b,G){return this.scheduleTask(new m(w,r,n,o,b,G))}scheduleEventTask(r,n,o,b,G){return this.scheduleTask(new m(J,r,n,o,b,G))}cancelTask(r){if(r.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(r.zone||$).name+"; Execution: "+this.name+")");r._transitionTo(x,M,p);try{this._zoneDelegate.cancelTask(this,r)}catch(n){throw r._transitionTo(d,x),this._zoneDelegate.handleError(this,n),n}return this._updateTaskCount(r,-1),r._transitionTo(A,x),r.runCount=0,r}_updateTaskCount(r,n){const o=r._zoneDelegates;-1==n&&(r._zoneDelegates=null);for(let b=0;b<o.length;b++)o[b]._updateTaskCount(r.type,n)}}_.__symbol__=l;const P={name:"",onHasTask:(H,r,n,o)=>H.hasTask(n,o),onScheduleTask:(H,r,n,o)=>H.scheduleTask(n,o),onInvokeTask:(H,r,n,o,b,G)=>H.invokeTask(n,o,b,G),onCancelTask:(H,r,n,o)=>H.cancelTask(n,o)};class k{constructor(r,n,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=r,this._parentDelegate=n,this._forkZS=o&&(o&&o.onFork?o:n._forkZS),this._forkDlgt=o&&(o.onFork?n:n._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:n._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:n._interceptZS),this._interceptDlgt=o&&(o.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:n._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:n._invokeZS),this._invokeDlgt=o&&(o.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:n._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:n._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:n._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:n._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:n._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:n._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:n._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:n._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const b=o&&o.onHasTask,G=n&&n._hasTaskZS;(b||G)&&(this._hasTaskZS=b?o:P,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=r,o.onScheduleTask||(this._scheduleTaskZS=P,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=P,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=P,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this.zone))}fork(r,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,r,n):new _(r,n)}intercept(r,n,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,r,n,o):n}invoke(r,n,o,b,G){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,r,n,o,b,G):n.apply(o,b)}handleError(r,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,r,n)}scheduleTask(r,n){let o=n;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,r,n),o||(o=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=N)throw new Error("Task is missing scheduleFn.");R(n)}return o}invokeTask(r,n,o,b){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,r,n,o,b):n.callback.apply(o,b)}cancelTask(r,n){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,r,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");o=n.cancelFn(n)}return o}hasTask(r,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,r,n)}catch(o){this.handleError(r,o)}}_updateTaskCount(r,n){const o=this._taskCounts,b=o[r],G=o[r]=b+n;if(G<0)throw new Error("More tasks executed then were scheduled.");if(0==b||0==G){const te={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:r};this.hasTask(this.zone,te)}}}class m{constructor(r,n,o,b,G,te){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=r,this.source=n,this.data=b,this.scheduleFn=G,this.cancelFn=te,!o)throw new Error("callback is not defined");this.callback=o;const u=this;r===J&&b&&b.useG?this.invoke=m.invokeTask:this.invoke=function(){return m.invokeTask.call(e,u,this,arguments)}}static invokeTask(r,n,o){r||(r=this),Q++;try{return r.runCount++,r.zone.runTask(r,n,o)}finally{1==Q&&E(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(A,X)}_transitionTo(r,n,o){if(this._state!==n&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${r}', expecting state '${n}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=r,r==A&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const I=l("setTimeout"),S=l("Promise"),Z=l("then");let K,B=[],j=!1;function q(H){if(K||e[S]&&(K=e[S].resolve(0)),K){let r=K[Z];r||(r=K.then),r.call(K,H)}else e[I](H,0)}function R(H){0===Q&&0===B.length&&q(E),H&&B.push(H)}function E(){if(!j){for(j=!0;B.length;){const H=B;B=[];for(let r=0;r<H.length;r++){const n=H[r];try{n.zone.runTask(n,null,null)}catch(o){z.onUnhandledError(o)}}}z.microtaskDrainDone(),j=!1}}const $={name:"NO ZONE"},A="notScheduled",X="scheduling",M="scheduled",p="running",x="canceling",d="unknown",N="microTask",w="macroTask",J="eventTask",oe={},z={symbol:l,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!_[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:q};let U={parent:null,zone:new _(null,null)},re=null,Q=0;function W(){}s("Zone","Zone"),e.Zone=_}(typeof window<"u"&&window||typeof self<"u"&&self||global);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ie=Object.getOwnPropertyDescriptor,Ee=Object.defineProperty,de=Object.getPrototypeOf,ge=Object.create,Ve=Array.prototype.slice,Oe="addEventListener",Se="removeEventListener",Ze=Zone.__symbol__(Oe),Ne=Zone.__symbol__(Se),ce="true",ae="false",ke=Zone.__symbol__("");function Ie(e,t){return Zone.current.wrap(e,t)}function Me(e,t,c,s,a){return Zone.current.scheduleMacroTask(e,t,c,s,a)}const L=Zone.__symbol__,Pe=typeof window<"u",Te=Pe?window:void 0,Y=Pe&&Te||"object"==typeof self&&self||global;function Le(e,t){for(let c=e.length-1;c>=0;c--)"function"==typeof e[c]&&(e[c]=Ie(e[c],t+"_"+c));return e}function Fe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Be=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process),je=!we&&!Be&&!(!Pe||!Te.HTMLElement),Ue=typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process)&&!Be&&!(!Pe||!Te.HTMLElement),Re={},We=function(e){if(!(e=e||Y.event))return;let t=Re[e.type];t||(t=Re[e.type]=L("ON_PROPERTY"+e.type));const c=this||e.target||Y,s=c[t];let a;if(je&&c===Te&&"error"===e.type){const l=e;a=s&&s.call(this,l.message,l.filename,l.lineno,l.colno,l.error),!0===a&&e.preventDefault()}else a=s&&s.apply(this,arguments),null!=a&&!a&&e.preventDefault();return a};function qe(e,t,c){let s=ie(e,t);if(!s&&c&&ie(c,t)&&(s={enumerable:!0,configurable:!0}),!s||!s.configurable)return;const a=L("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete s.writable,delete s.value;const l=s.get,y=s.set,_=t.slice(2);let P=Re[_];P||(P=Re[_]=L("ON_PROPERTY"+_)),s.set=function(k){let m=this;!m&&e===Y&&(m=Y),m&&("function"==typeof m[P]&&m.removeEventListener(_,We),y&&y.call(m,null),m[P]=k,"function"==typeof k&&m.addEventListener(_,We,!1))},s.get=function(){let k=this;if(!k&&e===Y&&(k=Y),!k)return null;const m=k[P];if(m)return m;if(l){let I=l.call(this);if(I)return s.set.call(this,I),"function"==typeof k.removeAttribute&&k.removeAttribute(t),I}return null},Ee(e,t,s),e[a]=!0}function Xe(e,t,c){if(t)for(let s=0;s<t.length;s++)qe(e,"on"+t[s],c);else{const s=[];for(const a in e)"on"==a.slice(0,2)&&s.push(a);for(let a=0;a<s.length;a++)qe(e,s[a],c)}}const ne=L("originalInstance");function ve(e){const t=Y[e];if(!t)return;Y[L(e)]=t,Y[e]=function(){const a=Le(arguments,e);switch(a.length){case 0:this[ne]=new t;break;case 1:this[ne]=new t(a[0]);break;case 2:this[ne]=new t(a[0],a[1]);break;case 3:this[ne]=new t(a[0],a[1],a[2]);break;case 4:this[ne]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},ue(Y[e],t);const c=new t(function(){});let s;for(s in c)"XMLHttpRequest"===e&&"responseBlob"===s||function(a){"function"==typeof c[a]?Y[e].prototype[a]=function(){return this[ne][a].apply(this[ne],arguments)}:Ee(Y[e].prototype,a,{set:function(l){"function"==typeof l?(this[ne][a]=Ie(l,e+"."+a),ue(this[ne][a],l)):this[ne][a]=l},get:function(){return this[ne][a]}})}(s);for(s in t)"prototype"!==s&&t.hasOwnProperty(s)&&(Y[e][s]=t[s])}function le(e,t,c){let s=e;for(;s&&!s.hasOwnProperty(t);)s=de(s);!s&&e[t]&&(s=e);const a=L(t);let l=null;if(s&&(!(l=s[a])||!s.hasOwnProperty(a))){l=s[a]=s[t];if(Fe(s&&ie(s,t))){const _=c(l,a,t);s[t]=function(){return _(this,arguments)},ue(s[t],l)}}return l}function lt(e,t,c){let s=null;function a(l){const y=l.data;return y.args[y.cbIdx]=function(){l.invoke.apply(this,arguments)},s.apply(y.target,y.args),l}s=le(e,t,l=>function(y,_){const P=c(y,_);return P.cbIdx>=0&&"function"==typeof _[P.cbIdx]?Me(P.name,_[P.cbIdx],P,a):l.apply(y,_)})}function ue(e,t){e[L("OriginalDelegate")]=t}let ze=!1,Ae=!1;function ft(){if(ze)return Ae;ze=!0;try{const e=Te.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ae=!0)}catch{}return Ae}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Zone.__load_patch("ZoneAwarePromise",(e,t,c)=>{const s=Object.getOwnPropertyDescriptor,a=Object.defineProperty;const y=c.symbol,_=[],P=!0===e[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],k=y("Promise"),m=y("then");c.onUnhandledError=u=>{if(c.showUncaughtError()){const f=u&&u.rejection;f?console.error("Unhandled Promise rejection:",f instanceof Error?f.message:f,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",f,f instanceof Error?f.stack:void 0):console.error(u)}},c.microtaskDrainDone=()=>{for(;_.length;){const u=_.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(f){Z(f)}}};const S=y("unhandledPromiseRejectionHandler");function Z(u){c.onUnhandledError(u);try{const f=t[S];"function"==typeof f&&f.call(this,u)}catch{}}function B(u){return u&&u.then}function j(u){return u}function K(u){return n.reject(u)}const q=y("state"),R=y("value"),E=y("finally"),$=y("parentPromiseValue"),A=y("parentPromiseState"),M=null,p=!0,x=!1;function N(u,f){return i=>{try{z(u,f,i)}catch(h){z(u,!1,h)}}}const w=function(){let u=!1;return function(i){return function(){u||(u=!0,i.apply(null,arguments))}}},oe=y("currentTaskTrace");function z(u,f,i){const h=w();if(u===i)throw new TypeError("Promise resolved with itself");if(u[q]===M){let g=null;try{("object"==typeof i||"function"==typeof i)&&(g=i&&i.then)}catch(v){return h(()=>{z(u,!1,v)})(),u}if(f!==x&&i instanceof n&&i.hasOwnProperty(q)&&i.hasOwnProperty(R)&&i[q]!==M)re(i),z(u,i[q],i[R]);else if(f!==x&&"function"==typeof g)try{g.call(i,h(N(u,f)),h(N(u,!1)))}catch(v){h(()=>{z(u,!1,v)})()}else{u[q]=f;const v=u[R];if(u[R]=i,u[E]===E&&f===p&&(u[q]=u[A],u[R]=u[$]),f===x&&i instanceof Error){const T=t.currentTask&&t.currentTask.data&&t.currentTask.data.__creationTrace__;T&&a(i,oe,{configurable:!0,enumerable:!1,writable:!0,value:T})}for(let T=0;T<v.length;)Q(u,v[T++],v[T++],v[T++],v[T++]);if(0==v.length&&f==x){u[q]=0;let T=i;try{throw new Error("Uncaught (in promise): "+function l(u){if(u&&u.toString===Object.prototype.toString)return(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u);return u?u.toString():Object.prototype.toString.call(u)}(i)+(i&&i.stack?"\n"+i.stack:""))}catch(C){T=C}P&&(T.throwOriginal=!0),T.rejection=i,T.promise=u,T.zone=t.current,T.task=t.currentTask,_.push(T),c.scheduleMicroTask()}}}return u}const U=y("rejectionHandledHandler");function re(u){if(0===u[q]){try{const f=t[U];f&&"function"==typeof f&&f.call(this,{rejection:u[R],promise:u})}catch{}u[q]=x;for(let f=0;f<_.length;f++)u===_[f].promise&&_.splice(f,1)}}function Q(u,f,i,h,g){re(u);const v=u[q],T=v?"function"==typeof h?h:j:"function"==typeof g?g:K;f.scheduleMicroTask("Promise.then",()=>{try{const C=u[R],D=!!i&&E===i[E];D&&(i[$]=C,i[A]=v);const O=f.run(T,void 0,D&&T!==K&&T!==j?[]:[C]);z(i,!0,O)}catch(C){z(i,!1,C)}},i)}const H=function(){},r=e.AggregateError;class n{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(f){return z(new this(null),p,f)}static reject(f){return z(new this(null),x,f)}static any(f){if(!f||"function"!=typeof f[Symbol.iterator])return Promise.reject(new r([],"All promises were rejected"));const i=[];let h=0;try{for(let T of f)h++,i.push(n.resolve(T))}catch{return Promise.reject(new r([],"All promises were rejected"))}if(0===h)return Promise.reject(new r([],"All promises were rejected"));let g=!1;const v=[];return new n((T,C)=>{for(let D=0;D<i.length;D++)i[D].then(O=>{g||(g=!0,T(O))},O=>{v.push(O),h--,0===h&&(g=!0,C(new r(v,"All promises were rejected")))})})}static race(f){let i,h,g=new this((C,D)=>{i=C,h=D});function v(C){i(C)}function T(C){h(C)}for(let C of f)B(C)||(C=this.resolve(C)),C.then(v,T);return g}static all(f){return n.allWithCallback(f)}static allSettled(f){return(this&&this.prototype instanceof n?this:n).allWithCallback(f,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(f,i){let h,g,v=new this((O,V)=>{h=O,g=V}),T=2,C=0;const D=[];for(let O of f){B(O)||(O=this.resolve(O));const V=C;try{O.then(F=>{D[V]=i?i.thenCallback(F):F,T--,0===T&&h(D)},F=>{i?(D[V]=i.errorCallback(F),T--,0===T&&h(D)):g(F)})}catch(F){g(F)}T++,C++}return T-=2,0===T&&h(D),v}constructor(f){const i=this;if(!(i instanceof n))throw new Error("Must be an instanceof Promise.");i[q]=M,i[R]=[];try{const h=w();f&&f(h(N(i,p)),h(N(i,x)))}catch(h){z(i,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return n}then(f,i){var h;let g=null===(h=this.constructor)||void 0===h?void 0:h[Symbol.species];(!g||"function"!=typeof g)&&(g=this.constructor||n);const v=new g(H),T=t.current;return this[q]==M?this[R].push(T,v,f,i):Q(this,T,v,f,i),v}catch(f){return this.then(null,f)}finally(f){var i;let h=null===(i=this.constructor)||void 0===i?void 0:i[Symbol.species];(!h||"function"!=typeof h)&&(h=n);const g=new h(H);g[E]=E;const v=t.current;return this[q]==M?this[R].push(v,g,f,f):Q(this,v,g,f,f),g}}n.resolve=n.resolve,n.reject=n.reject,n.race=n.race,n.all=n.all;const o=e[k]=e.Promise;e.Promise=n;const b=y("thenPatched");function G(u){const f=u.prototype,i=s(f,"then");if(i&&(!1===i.writable||!i.configurable))return;const h=f.then;f[m]=h,u.prototype.then=function(g,v){return new n((C,D)=>{h.call(this,C,D)}).then(g,v)},u[b]=!0}return c.patchThen=G,o&&(G(o),le(e,"fetch",u=>function te(u){return function(f,i){let h=u.apply(f,i);if(h instanceof n)return h;let g=h.constructor;return g[b]||G(g),h}}(u))),Promise[t.__symbol__("uncaughtPromiseErrors")]=_,n}),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
Zone.__load_patch("toString",e=>{const t=Function.prototype.toString,c=L("OriginalDelegate"),s=L("Promise"),a=L("Error"),l=function(){if("function"==typeof this){const k=this[c];if(k)return"function"==typeof k?t.call(k):Object.prototype.toString.call(k);if(this===Promise){const m=e[s];if(m)return t.call(m)}if(this===Error){const m=e[a];if(m)return t.call(m)}}return t.call(this)};l[c]=t,Function.prototype.toString=l;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ye=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ye=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ye=!1}const ht={useG:!0},ee={},Ye={},$e=new RegExp("^"+ke+"(\\w+)(true|false)$"),Ke=L("propagationStopped");function Je(e,t){const c=(t?t(e):e)+ae,s=(t?t(e):e)+ce,a=ke+c,l=ke+s;ee[e]={},ee[e][ae]=a,ee[e][ce]=l}function dt(e,t,c,s){const a=s&&s.add||Oe,l=s&&s.rm||Se,y=s&&s.listeners||"eventListeners",_=s&&s.rmAll||"removeAllListeners",P=L(a),k="."+a+":",m="prependListener",S=function(R,E,$){if(R.isRemoved)return;const A=R.callback;let X;"object"==typeof A&&A.handleEvent&&(R.callback=p=>A.handleEvent(p),R.originalDelegate=A);try{R.invoke(R,E,[$])}catch(p){X=p}const M=R.options;if(M&&"object"==typeof M&&M.once){const p=R.originalDelegate?R.originalDelegate:R.callback;E[l].call(E,$.type,p,M)}return X};function Z(R,E,$){if(!(E=E||e.event))return;const A=R||E.target||e,X=A[ee[E.type][$?ce:ae]];if(X){const M=[];if(1===X.length){const p=S(X[0],A,E);p&&M.push(p)}else{const p=X.slice();for(let x=0;x<p.length&&(!E||!0!==E[Ke]);x++){const d=S(p[x],A,E);d&&M.push(d)}}if(1===M.length)throw M[0];for(let p=0;p<M.length;p++){const x=M[p];t.nativeScheduleMicroTask(()=>{throw x})}}}const B=function(R){return Z(this,R,!1)},j=function(R){return Z(this,R,!0)};function K(R,E){if(!R)return!1;let $=!0;E&&void 0!==E.useG&&($=E.useG);const A=E&&E.vh;let X=!0;E&&void 0!==E.chkDup&&(X=E.chkDup);let M=!1;E&&void 0!==E.rt&&(M=E.rt);let p=R;for(;p&&!p.hasOwnProperty(a);)p=de(p);if(!p&&R[a]&&(p=R),!p||p[P])return!1;const x=E&&E.eventNameToString,d={},N=p[P]=p[a],w=p[L(l)]=p[l],J=p[L(y)]=p[y],oe=p[L(_)]=p[_];let z;function U(i,h){return!ye&&"object"==typeof i&&i?!!i.capture:ye&&h?"boolean"==typeof i?{capture:i,passive:!0}:i?"object"==typeof i&&!1!==i.passive?Object.assign(Object.assign({},i),{passive:!0}):i:{passive:!0}:i}E&&E.prepend&&(z=p[L(E.prepend)]=p[E.prepend]);const n=$?function(i){if(!d.isExisting)return N.call(d.target,d.eventName,d.capture?j:B,d.options)}:function(i){return N.call(d.target,d.eventName,i.invoke,d.options)},o=$?function(i){if(!i.isRemoved){const h=ee[i.eventName];let g;h&&(g=h[i.capture?ce:ae]);const v=g&&i.target[g];if(v)for(let T=0;T<v.length;T++)if(v[T]===i){v.splice(T,1),i.isRemoved=!0,0===v.length&&(i.allRemoved=!0,i.target[g]=null);break}}if(i.allRemoved)return w.call(i.target,i.eventName,i.capture?j:B,i.options)}:function(i){return w.call(i.target,i.eventName,i.invoke,i.options)},G=E&&E.diff?E.diff:function(i,h){const g=typeof h;return"function"===g&&i.callback===h||"object"===g&&i.originalDelegate===h},te=Zone[L("UNPATCHED_EVENTS")],u=e[L("PASSIVE_EVENTS")],f=function(i,h,g,v,T=!1,C=!1){return function(){const D=this||e;let O=arguments[0];E&&E.transferEventName&&(O=E.transferEventName(O));let V=arguments[1];if(!V)return i.apply(this,arguments);if(we&&"uncaughtException"===O)return i.apply(this,arguments);let F=!1;if("function"!=typeof V){if(!V.handleEvent)return i.apply(this,arguments);F=!0}if(A&&!A(i,V,D,arguments))return;const fe=ye&&!!u&&-1!==u.indexOf(O),se=U(arguments[2],fe);if(te)for(let _e=0;_e<te.length;_e++)if(O===te[_e])return fe?i.call(D,O,V,se):i.apply(this,arguments);const xe=!!se&&("boolean"==typeof se||se.capture),nt=!(!se||"object"!=typeof se)&&se.once,gt=Zone.current;let Ge=ee[O];Ge||(Je(O,x),Ge=ee[O]);const rt=Ge[xe?ce:ae];let De,me=D[rt],ot=!1;if(me){if(ot=!0,X)for(let _e=0;_e<me.length;_e++)if(G(me[_e],V))return}else me=D[rt]=[];const st=D.constructor.name,it=Ye[st];it&&(De=it[O]),De||(De=st+h+(x?x(O):O)),d.options=se,nt&&(d.options.once=!1),d.target=D,d.capture=xe,d.eventName=O,d.isExisting=ot;const be=$?ht:void 0;be&&(be.taskData=d);const he=gt.scheduleEventTask(De,V,be,g,v);return d.target=null,be&&(be.taskData=null),nt&&(se.once=!0),!ye&&"boolean"==typeof he.options||(he.options=se),he.target=D,he.capture=xe,he.eventName=O,F&&(he.originalDelegate=V),C?me.unshift(he):me.push(he),T?D:void 0}};return p[a]=f(N,k,n,o,M),z&&(p[m]=f(z,".prependListener:",function(i){return z.call(d.target,d.eventName,i.invoke,d.options)},o,M,!0)),p[l]=function(){const i=this||e;let h=arguments[0];E&&E.transferEventName&&(h=E.transferEventName(h));const g=arguments[2],v=!!g&&("boolean"==typeof g||g.capture),T=arguments[1];if(!T)return w.apply(this,arguments);if(A&&!A(w,T,i,arguments))return;const C=ee[h];let D;C&&(D=C[v?ce:ae]);const O=D&&i[D];if(O)for(let V=0;V<O.length;V++){const F=O[V];if(G(F,T)){if(O.splice(V,1),F.isRemoved=!0,0===O.length&&(F.allRemoved=!0,i[D]=null,"string"==typeof h)){i[ke+"ON_PROPERTY"+h]=null}return F.zone.cancelTask(F),M?i:void 0}}return w.apply(this,arguments)},p[y]=function(){const i=this||e;let h=arguments[0];E&&E.transferEventName&&(h=E.transferEventName(h));const g=[],v=Qe(i,x?x(h):h);for(let T=0;T<v.length;T++){const C=v[T];let D=C.originalDelegate?C.originalDelegate:C.callback;g.push(D)}return g},p[_]=function(){const i=this||e;let h=arguments[0];if(h){E&&E.transferEventName&&(h=E.transferEventName(h));const g=ee[h];if(g){const v=g[ae],T=g[ce],C=i[v],D=i[T];if(C){const O=C.slice();for(let V=0;V<O.length;V++){const F=O[V];let fe=F.originalDelegate?F.originalDelegate:F.callback;this[l].call(this,h,fe,F.options)}}if(D){const O=D.slice();for(let V=0;V<O.length;V++){const F=O[V];let fe=F.originalDelegate?F.originalDelegate:F.callback;this[l].call(this,h,fe,F.options)}}}}else{const g=Object.keys(i);for(let v=0;v<g.length;v++){const T=g[v],C=$e.exec(T);let D=C&&C[1];D&&"removeListener"!==D&&this[_].call(this,D)}this[_].call(this,"removeListener")}if(M)return this},ue(p[a],N),ue(p[l],w),oe&&ue(p[_],oe),J&&ue(p[y],J),!0}let q=[];for(let R=0;R<c.length;R++)q[R]=K(c[R],s);return q}function Qe(e,t){if(!t){const l=[];for(let y in e){const _=$e.exec(y);let P=_&&_[1];if(P&&(!t||P===t)){const k=e[y];if(k)for(let m=0;m<k.length;m++)l.push(k[m])}}return l}let c=ee[t];c||(Je(t),c=ee[t]);const s=e[c[ae]],a=e[c[ce]];return s?a?s.concat(a):s.slice():a?a.slice():[]}function _t(e,t){const c=e.Event;c&&c.prototype&&t.patchMethod(c.prototype,"stopImmediatePropagation",s=>function(a,l){a[Ke]=!0,s&&s.apply(a,l)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Et(e,t,c,s,a){const l=Zone.__symbol__(s);if(t[l])return;const y=t[l]=t[s];t[s]=function(_,P,k){return P&&P.prototype&&a.forEach(function(m){const I=`${c}.${s}::`+m,S=P.prototype;try{if(S.hasOwnProperty(m)){const Z=e.ObjectGetOwnPropertyDescriptor(S,m);Z&&Z.value?(Z.value=e.wrapWithCurrentZone(Z.value,I),e._redefineProperty(P.prototype,m,Z)):S[m]&&(S[m]=e.wrapWithCurrentZone(S[m],I))}else S[m]&&(S[m]=e.wrapWithCurrentZone(S[m],I))}catch{}}),y.call(t,_,P,k)},e.attachOriginToPatched(t[s],y)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function et(e,t,c){if(!c||0===c.length)return t;const s=c.filter(l=>l.target===e);if(!s||0===s.length)return t;const a=s[0].ignoreProperties;return t.filter(l=>-1===a.indexOf(l))}function tt(e,t,c,s){if(!e)return;Xe(e,et(e,t,c),s)}function He(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}function Tt(e,t){if(we&&!Ue||Zone[e.symbol("patchEvents")])return;const c=t.__Zone_ignore_on_properties;let s=[];if(je){const a=window;s=s.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function ut(){try{const e=Te.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];tt(a,He(a),c&&c.concat(l),de(a))}s=s.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<s.length;a++){const l=t[s[a]];l&&l.prototype&&tt(l.prototype,He(l.prototype),c)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Zone.__load_patch("util",(e,t,c)=>{const s=He(e);c.patchOnProperties=Xe,c.patchMethod=le,c.bindArguments=Le,c.patchMacroTask=lt;const a=t.__symbol__("BLACK_LISTED_EVENTS"),l=t.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[a]=e[l]),e[a]&&(t[a]=t[l]=e[a]),c.patchEventPrototype=_t,c.patchEventTarget=dt,c.isIEOrEdge=ft,c.ObjectDefineProperty=Ee,c.ObjectGetOwnPropertyDescriptor=ie,c.ObjectCreate=ge,c.ArraySlice=Ve,c.patchClass=ve,c.wrapWithCurrentZone=Ie,c.filterProperties=et,c.attachOriginToPatched=ue,c._redefineProperty=Object.defineProperty,c.patchCallbacks=Et,c.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:ee,eventNames:s,isBrowser:je,isMix:Ue,isNode:we,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ke,ADD_EVENT_LISTENER_STR:Oe,REMOVE_EVENT_LISTENER_STR:Se})});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ce=L("zoneTask");function pe(e,t,c,s){let a=null,l=null;c+=s;const y={};function _(k){const m=k.data;return m.args[0]=function(){return k.invoke.apply(this,arguments)},m.handleId=a.apply(e,m.args),k}function P(k){return l.call(e,k.data.handleId)}a=le(e,t+=s,k=>function(m,I){if("function"==typeof I[0]){const S={isPeriodic:"Interval"===s,delay:"Timeout"===s||"Interval"===s?I[1]||0:void 0,args:I},Z=I[0];I[0]=function(){try{return Z.apply(this,arguments)}finally{S.isPeriodic||("number"==typeof S.handleId?delete y[S.handleId]:S.handleId&&(S.handleId[Ce]=null))}};const B=Me(t,I[0],S,_,P);if(!B)return B;const j=B.data.handleId;return"number"==typeof j?y[j]=B:j&&(j[Ce]=B),j&&j.ref&&j.unref&&"function"==typeof j.ref&&"function"==typeof j.unref&&(B.ref=j.ref.bind(j),B.unref=j.unref.bind(j)),"number"==typeof j||j?j:B}return k.apply(e,I)}),l=le(e,c,k=>function(m,I){const S=I[0];let Z;"number"==typeof S?Z=y[S]:(Z=S&&S[Ce],Z||(Z=S)),Z&&"string"==typeof Z.type?"notScheduled"!==Z.state&&(Z.cancelFn&&Z.data.isPeriodic||0===Z.runCount)&&("number"==typeof S?delete y[S]:S&&(S[Ce]=null),Z.zone.cancelTask(Z)):k.apply(e,I)})}
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
Zone.__load_patch("legacy",e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("queueMicrotask",(e,t,c)=>{c.patchMethod(e,"queueMicrotask",s=>function(a,l){t.current.scheduleMicroTask("queueMicrotask",l[0])})}),Zone.__load_patch("timers",e=>{const t="set",c="clear";pe(e,t,c,"Timeout"),pe(e,t,c,"Interval"),pe(e,t,c,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{pe(e,"request","cancel","AnimationFrame"),pe(e,"mozRequest","mozCancel","AnimationFrame"),pe(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,t)=>{const c=["alert","prompt","confirm"];for(let s=0;s<c.length;s++){const a=c[s];le(e,a,(l,y,_)=>function(P,k){return t.current.run(l,e,k,_)})}}),Zone.__load_patch("EventTarget",(e,t,c)=>{(function mt(e,t){t.patchEventPrototype(e,t)})(e,c),
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function pt(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:s,TRUE_STR:a,FALSE_STR:l,ZONE_SYMBOL_PREFIX:y}=t.getGlobalObjects();for(let P=0;P<c.length;P++){const k=c[P],S=y+(k+l),Z=y+(k+a);s[k]={},s[k][l]=S,s[k][a]=Z}const _=e.EventTarget;return _&&_.prototype?(t.patchEventTarget(e,t,[_&&_.prototype]),!0):void 0}(e,c);const s=e.XMLHttpRequestEventTarget;s&&s.prototype&&c.patchEventTarget(e,c,[s.prototype])}),Zone.__load_patch("MutationObserver",(e,t,c)=>{ve("MutationObserver"),ve("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,t,c)=>{ve("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,t,c)=>{ve("FileReader")}),Zone.__load_patch("on_property",(e,t,c)=>{Tt(c,e)}),Zone.__load_patch("customElements",(e,t,c)=>{!function yt(e,t){const{isBrowser:c,isMix:s}=t.getGlobalObjects();if(!c&&!s||!e.customElements||!("customElements"in e))return;t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,c)}),Zone.__load_patch("XHR",(e,t)=>{!function P(k){const m=k.XMLHttpRequest;if(!m)return;const I=m.prototype;let Z=I[Ze],B=I[Ne];if(!Z){const d=k.XMLHttpRequestEventTarget;if(d){const N=d.prototype;Z=N[Ze],B=N[Ne]}}const j="readystatechange",K="scheduled";function q(d){const N=d.data,w=N.target;w[l]=!1,w[_]=!1;const J=w[a];Z||(Z=w[Ze],B=w[Ne]),J&&B.call(w,j,J);const oe=w[a]=()=>{if(w.readyState===w.DONE)if(!N.aborted&&w[l]&&d.state===K){const U=w[t.__symbol__("loadfalse")];if(0!==w.status&&U&&U.length>0){const re=d.invoke;d.invoke=function(){const Q=w[t.__symbol__("loadfalse")];for(let W=0;W<Q.length;W++)Q[W]===d&&Q.splice(W,1);!N.aborted&&d.state===K&&re.call(d)},U.push(d)}else d.invoke()}else!N.aborted&&!1===w[l]&&(w[_]=!0)};return Z.call(w,j,oe),w[c]||(w[c]=d),p.apply(w,N.args),w[l]=!0,d}function R(){}function E(d){const N=d.data;return N.aborted=!0,x.apply(N.target,N.args)}const $=le(I,"open",()=>function(d,N){return d[s]=0==N[2],d[y]=N[1],$.apply(d,N)}),X=L("fetchTaskAborting"),M=L("fetchTaskScheduling"),p=le(I,"send",()=>function(d,N){if(!0===t.current[M]||d[s])return p.apply(d,N);{const w={target:d,url:d[y],isPeriodic:!1,args:N,aborted:!1},J=Me("XMLHttpRequest.send",R,w,q,E);d&&!0===d[_]&&!w.aborted&&J.state===K&&J.invoke()}}),x=le(I,"abort",()=>function(d,N){const w=function S(d){return d[c]}(d);if(w&&"string"==typeof w.type){if(null==w.cancelFn||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(!0===t.current[X])return x.apply(d,N)})}(e);const c=L("xhrTask"),s=L("xhrSync"),a=L("xhrListener"),l=L("xhrScheduled"),y=L("xhrURL"),_=L("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,t){const c=e.constructor.name;for(let s=0;s<t.length;s++){const a=t[s],l=e[a];if(l){if(!Fe(ie(e,a)))continue;e[a]=(_=>{const P=function(){return _.apply(this,Le(arguments,c+"."+a))};return ue(P,_),P})(l)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function c(s){return function(a){Qe(e,s).forEach(y=>{const _=e.PromiseRejectionEvent;if(_){const P=new _(s,{promise:a.promise,reason:a.rejection});y.invoke(P)}})}}e.PromiseRejectionEvent&&(t[L("unhandledPromiseRejectionHandler")]=c("unhandledrejection"),t[L("rejectionHandledHandler")]=c("rejectionhandled"))})}},ie=>{var ge;ge=435,ie(ie.s=ge)}]);