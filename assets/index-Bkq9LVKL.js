(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var t_={exports:{}},Mu={},n_={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),dT=Symbol.for("react.portal"),fT=Symbol.for("react.fragment"),pT=Symbol.for("react.strict_mode"),mT=Symbol.for("react.profiler"),gT=Symbol.for("react.provider"),yT=Symbol.for("react.context"),_T=Symbol.for("react.forward_ref"),vT=Symbol.for("react.suspense"),wT=Symbol.for("react.memo"),ET=Symbol.for("react.lazy"),um=Symbol.iterator;function TT(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var r_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i_=Object.assign,s_={};function Os(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||r_}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o_(){}o_.prototype=Os.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||r_}var zd=jd.prototype=new o_;zd.constructor=jd;i_(zd,Os.prototype);zd.isPureReactComponent=!0;var cm=Array.isArray,a_=Object.prototype.hasOwnProperty,Bd={current:null},l_={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a_.call(e,r)&&!l_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fa,type:t,key:s,ref:o,props:i,_owner:Bd.current}}function IT(t,e){return{$$typeof:fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $d(t){return typeof t=="object"&&t!==null&&t.$$typeof===fa}function ST(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hm=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ST(""+t.key):e.toString(36)}function Il(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fa:case dT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,cm(i)?(n="",t!=null&&(n=t.replace(hm,"$&/")+"/"),Il(i,e,n,"",function(h){return h})):i!=null&&($d(i)&&(i=IT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+xc(s,l);o+=Il(s,e,n,u,i)}else if(u=TT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+xc(s,l++),o+=Il(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return Il(t,r,"","",function(s){return e.call(n,s,i++)}),r}function AT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},Sl={transition:null},CT={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Bd};function c_(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!$d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Os;ue.Fragment=fT;ue.Profiler=mT;ue.PureComponent=jd;ue.StrictMode=pT;ue.Suspense=vT;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CT;ue.act=c_;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=i_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)a_.call(e,u)&&!l_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:fa,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:yT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gT,_context:t},t.Consumer=t};ue.createElement=u_;ue.createFactory=function(t){var e=u_.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:_T,render:t}};ue.isValidElement=$d;ue.lazy=function(t){return{$$typeof:ET,_payload:{_status:-1,_result:t},_init:AT}};ue.memo=function(t,e){return{$$typeof:wT,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};ue.unstable_act=c_;ue.useCallback=function(t,e){return Vt.current.useCallback(t,e)};ue.useContext=function(t){return Vt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Vt.current.useEffect(t,e)};ue.useId=function(){return Vt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Vt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};ue.useRef=function(t){return Vt.current.useRef(t)};ue.useState=function(t){return Vt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Vt.current.useTransition()};ue.version="18.3.1";n_.exports=ue;var K=n_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RT=K,PT=Symbol.for("react.element"),kT=Symbol.for("react.fragment"),xT=Object.prototype.hasOwnProperty,NT=RT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DT={key:!0,ref:!0,__self:!0,__source:!0};function h_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xT.call(e,r)&&!DT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PT,type:t,key:s,ref:o,props:i,_owner:NT.current}}Mu.Fragment=kT;Mu.jsx=h_;Mu.jsxs=h_;t_.exports=Mu;var z=t_.exports,d_={exports:{}},Yt={},f_={exports:{}},p_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,W){var Y=j.length;j.push(W);e:for(;0<Y;){var ge=Y-1>>>1,_e=j[ge];if(0<i(_e,W))j[ge]=W,j[Y]=_e,Y=ge;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var W=j[0],Y=j.pop();if(Y!==W){j[0]=Y;e:for(var ge=0,_e=j.length,Ce=_e>>>1;ge<Ce;){var Wt=2*(ge+1)-1,Ue=j[Wt],qt=Wt+1,kt=j[qt];if(0>i(Ue,Y))qt<_e&&0>i(kt,Ue)?(j[ge]=kt,j[qt]=Y,ge=qt):(j[ge]=Ue,j[Wt]=Y,ge=Wt);else if(qt<_e&&0>i(kt,Y))j[ge]=kt,j[qt]=Y,ge=qt;else break e}}return W}function i(j,W){var Y=j.sortIndex-W.sortIndex;return Y!==0?Y:j.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,A=!1,x=!1,b=!1,O=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(j){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=j)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function D(j){if(b=!1,_(j),!x)if(n(u)!==null)x=!0,hn(M);else{var W=n(h);W!==null&&X(D,W.startTime-j)}}function M(j,W){x=!1,b&&(b=!1,E(m),m=-1),A=!0;var Y=g;try{for(_(W),p=n(u);p!==null&&(!(p.expirationTime>W)||j&&!C());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,g=p.priorityLevel;var _e=ge(p.expirationTime<=W);W=t.unstable_now(),typeof _e=="function"?p.callback=_e:p===n(u)&&r(u),_(W)}else r(u);p=n(u)}if(p!==null)var Ce=!0;else{var Wt=n(h);Wt!==null&&X(D,Wt.startTime-W),Ce=!1}return Ce}finally{p=null,g=Y,A=!1}}var $=!1,I=null,m=-1,v=5,T=-1;function C(){return!(t.unstable_now()-T<v)}function P(){if(I!==null){var j=t.unstable_now();T=j;var W=!0;try{W=I(!0,j)}finally{W?S():($=!1,I=null)}}else $=!1}var S;if(typeof w=="function")S=function(){w(P)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Ge=We.port2;We.port1.onmessage=P,S=function(){Ge.postMessage(null)}}else S=function(){O(P,0)};function hn(j){I=j,$||($=!0,S())}function X(j,W){m=O(function(){j(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){x||A||(x=!0,hn(M))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var Y=g;g=W;try{return j()}finally{g=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,W){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=g;g=j;try{return W()}finally{g=Y}},t.unstable_scheduleCallback=function(j,W,Y){var ge=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ge+Y:ge):Y=ge,j){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Y+_e,j={id:f++,callback:W,priorityLevel:j,startTime:Y,expirationTime:_e,sortIndex:-1},Y>ge?(j.sortIndex=Y,e(h,j),n(u)===null&&j===n(h)&&(b?(E(m),m=-1):b=!0,X(D,Y-ge))):(j.sortIndex=_e,e(u,j),x||A||(x=!0,hn(M))),j},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(j){var W=g;return function(){var Y=g;g=W;try{return j.apply(this,arguments)}finally{g=Y}}}})(p_);f_.exports=p_;var bT=f_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=K,Xt=bT;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m_=new Set,Uo={};function Ri(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(Uo[t]=e,t=0;t<e.length;t++)m_.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,OT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dm={},fm={};function MT(t){return Eh.call(fm,t)?!0:Eh.call(dm,t)?!1:OT.test(t)?fm[t]=!0:(dm[t]=!0,!1)}function LT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FT(t,e,n,r){if(e===null||typeof e>"u"||LT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,qd);mt[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,qd);mt[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,qd);mt[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FT(e,n,i,r)&&(n=null),r||i===null?MT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),__=Symbol.for("react.offscreen"),pm=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Nc;function go(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Dc=!1;function bc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function UT(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zi:return"Fragment";case Ji:return"Portal";case Th:return"Profiler";case Gd:return"StrictMode";case Ih:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y_:return(t.displayName||"Context")+".Consumer";case g_:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qd:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function jT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===Gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function v_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zT(t){var e=v_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=zT(t))}function w_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=v_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ch(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E_(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function Rh(t,e){E_(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ph(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ph(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yo=Array.isArray;function hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(yo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function T_(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _m(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ya,S_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BT=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){BT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function A_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function C_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=A_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $T=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(t,e){if(e){if($T[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vh=null,ds=null,fs=null;function vm(t){if(t=ga(t)){if(typeof Vh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=zu(e),Vh(t.stateNode,t.type,e))}}function R_(t){ds?fs?fs.push(t):fs=[t]:ds=t}function P_(){if(ds){var t=ds,e=fs;if(fs=ds=null,vm(t),e)for(t=0;t<e.length;t++)vm(e[t])}}function k_(t,e){return t(e)}function x_(){}var Vc=!1;function N_(t,e,n){if(Vc)return t(e,n);Vc=!0;try{return k_(t,e,n)}finally{Vc=!1,(ds!==null||fs!==null)&&(x_(),P_())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Oh=!1;if(ir)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Oh=!1}function WT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ao=!1,Hl=null,Gl=!1,Mh=null,qT={onError:function(t){Ao=!0,Hl=t}};function HT(t,e,n,r,i,s,o,l,u){Ao=!1,Hl=null,WT.apply(qT,arguments)}function GT(t,e,n,r,i,s,o,l,u){if(HT.apply(this,arguments),Ao){if(Ao){var h=Hl;Ao=!1,Hl=null}else throw Error(B(198));Gl||(Gl=!0,Mh=h)}}function Pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wm(t){if(Pi(t)!==t)throw Error(B(188))}function KT(t){var e=t.alternate;if(!e){if(e=Pi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return wm(i),t;if(s===r)return wm(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function b_(t){return t=KT(t),t!==null?V_(t):null}function V_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V_(t);if(e!==null)return e;t=t.sibling}return null}var O_=Xt.unstable_scheduleCallback,Em=Xt.unstable_cancelCallback,QT=Xt.unstable_shouldYield,XT=Xt.unstable_requestPaint,He=Xt.unstable_now,YT=Xt.unstable_getCurrentPriorityLevel,Yd=Xt.unstable_ImmediatePriority,M_=Xt.unstable_UserBlockingPriority,Kl=Xt.unstable_NormalPriority,JT=Xt.unstable_LowPriority,L_=Xt.unstable_IdlePriority,Lu=null,kn=null;function ZT(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Lu,t,void 0,(t.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:nI,eI=Math.log,tI=Math.LN2;function nI(t){return t>>>=0,t===0?32:31-(eI(t)/tI|0)|0}var Ja=64,Za=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_o(l):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-En(e),i=1<<n,r|=t[n],e&=~i;return r}function rI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-En(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=rI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function F_(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-En(e),t[e]=n}function sI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-En(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-En(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function U_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var j_,Zd,z_,B_,$_,Fh=!1,el=[],kr=null,xr=null,Nr=null,Bo=new Map,$o=new Map,wr=[],oI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ga(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aI(t,e,n,r,i){switch(e){case"focusin":return kr=uo(kr,t,e,n,r,i),!0;case"dragenter":return xr=uo(xr,t,e,n,r,i),!0;case"mouseover":return Nr=uo(Nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bo.set(s,uo(Bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$o.set(s,uo($o.get(s)||null,t,e,n,r,i)),!0}return!1}function W_(t){var e=ci(t.target);if(e!==null){var n=Pi(e);if(n!==null){if(e=n.tag,e===13){if(e=D_(n),e!==null){t.blockedOn=e,$_(t.priority,function(){z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=ga(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Im(t,e,n){Al(t)&&n.delete(e)}function lI(){Fh=!1,kr!==null&&Al(kr)&&(kr=null),xr!==null&&Al(xr)&&(xr=null),Nr!==null&&Al(Nr)&&(Nr=null),Bo.forEach(Im),$o.forEach(Im)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,lI)))}function Wo(t){function e(i){return co(i,t)}if(0<el.length){co(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&co(kr,t),xr!==null&&co(xr,t),Nr!==null&&co(Nr,t),Bo.forEach(e),$o.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)W_(n),n.blockedOn===null&&wr.shift()}var ps=fr.ReactCurrentBatchConfig,Xl=!0;function uI(t,e,n,r){var i=Te,s=ps.transition;ps.transition=null;try{Te=1,ef(t,e,n,r)}finally{Te=i,ps.transition=s}}function cI(t,e,n,r){var i=Te,s=ps.transition;ps.transition=null;try{Te=4,ef(t,e,n,r)}finally{Te=i,ps.transition=s}}function ef(t,e,n,r){if(Xl){var i=Uh(t,e,n,r);if(i===null)qc(t,e,r,Yl,n),Tm(t,r);else if(aI(i,t,e,n,r))r.stopPropagation();else if(Tm(t,r),e&4&&-1<oI.indexOf(t)){for(;i!==null;){var s=ga(i);if(s!==null&&j_(s),s=Uh(t,e,n,r),s===null&&qc(t,e,r,Yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qc(t,e,r,null,n)}}var Yl=null;function Uh(t,e,n,r){if(Yl=null,t=Xd(r),t=ci(t),t!==null)if(e=Pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function q_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YT()){case Yd:return 1;case M_:return 4;case Kl:case JT:return 16;case L_:return 536870912;default:return 16}default:return 16}}var Cr=null,tf=null,Cl=null;function H_(){if(Cl)return Cl;var t,e=tf,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Cl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Sm(){return!1}function Jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Sm,this.isPropagationStopped=Sm,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=Jt(Ms),ma=Le({},Ms,{view:0,detail:0}),hI=Jt(ma),Mc,Lc,ho,Fu=Le({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Mc=t.screenX-ho.screenX,Lc=t.screenY-ho.screenY):Lc=Mc=0,ho=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),Am=Jt(Fu),dI=Le({},Fu,{dataTransfer:0}),fI=Jt(dI),pI=Le({},ma,{relatedTarget:0}),Fc=Jt(pI),mI=Le({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),gI=Jt(mI),yI=Le({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_I=Jt(yI),vI=Le({},Ms,{data:0}),Cm=Jt(vI),wI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function II(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TI[t])?!!e[t]:!1}function rf(){return II}var SI=Le({},ma,{key:function(t){if(t.key){var e=wI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AI=Jt(SI),CI=Le({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Jt(CI),RI=Le({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),PI=Jt(RI),kI=Le({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),xI=Jt(kI),NI=Le({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DI=Jt(NI),bI=[9,13,27,32],sf=ir&&"CompositionEvent"in window,Co=null;ir&&"documentMode"in document&&(Co=document.documentMode);var VI=ir&&"TextEvent"in window&&!Co,G_=ir&&(!sf||Co&&8<Co&&11>=Co),Pm=" ",km=!1;function K_(t,e){switch(t){case"keyup":return bI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function OI(t,e){switch(t){case"compositionend":return Q_(e);case"keypress":return e.which!==32?null:(km=!0,Pm);case"textInput":return t=e.data,t===Pm&&km?null:t;default:return null}}function MI(t,e){if(es)return t==="compositionend"||!sf&&K_(t,e)?(t=H_(),Cl=tf=Cr=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G_&&e.locale!=="ko"?null:e.data;default:return null}}var LI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LI[t.type]:e==="textarea"}function X_(t,e,n,r){R_(r),e=Jl(e,"onChange"),0<e.length&&(n=new nf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ro=null,qo=null;function FI(t){av(t,0)}function Uu(t){var e=rs(t);if(w_(e))return t}function UI(t,e){if(t==="change")return e}var Y_=!1;if(ir){var Uc;if(ir){var jc="oninput"in document;if(!jc){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),jc=typeof Nm.oninput=="function"}Uc=jc}else Uc=!1;Y_=Uc&&(!document.documentMode||9<document.documentMode)}function Dm(){Ro&&(Ro.detachEvent("onpropertychange",J_),qo=Ro=null)}function J_(t){if(t.propertyName==="value"&&Uu(qo)){var e=[];X_(e,qo,t,Xd(t)),N_(FI,e)}}function jI(t,e,n){t==="focusin"?(Dm(),Ro=e,qo=n,Ro.attachEvent("onpropertychange",J_)):t==="focusout"&&Dm()}function zI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(qo)}function BI(t,e){if(t==="click")return Uu(e)}function $I(t,e){if(t==="input"||t==="change")return Uu(e)}function WI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:WI;function Ho(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eh.call(e,i)||!In(t[i],e[i]))return!1}return!0}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,e){var n=bm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bm(n)}}function Z_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Z_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ev(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qI(t){var e=ev(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Z_(n.ownerDocument.documentElement,n)){if(r!==null&&of(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vm(n,s);var o=Vm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HI=ir&&"documentMode"in document&&11>=document.documentMode,ts=null,jh=null,Po=null,zh=!1;function Om(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||ts==null||ts!==ql(r)||(r=ts,"selectionStart"in r&&of(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Ho(Po,r)||(Po=r,r=Jl(jh,"onSelect"),0<r.length&&(e=new nf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ts)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},zc={},tv={};ir&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function ju(t){if(zc[t])return zc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tv)return zc[t]=e[n];return t}var nv=ju("animationend"),rv=ju("animationiteration"),iv=ju("animationstart"),sv=ju("transitionend"),ov=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){ov.set(t,e),Ri(e,[t])}for(var Bc=0;Bc<Mm.length;Bc++){var $c=Mm[Bc],GI=$c.toLowerCase(),KI=$c[0].toUpperCase()+$c.slice(1);Zr(GI,"on"+KI)}Zr(nv,"onAnimationEnd");Zr(rv,"onAnimationIteration");Zr(iv,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(sv,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QI=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Lm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GT(r,e,void 0,t),t.currentTarget=null}function av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Lm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Lm(i,l,h),s=u}}}if(Gl)throw t=Mh,Gl=!1,Mh=null,t}function Pe(t,e){var n=e[Hh];n===void 0&&(n=e[Hh]=new Set);var r=t+"__bubble";n.has(r)||(lv(e,t,2,!1),n.add(r))}function Wc(t,e,n){var r=0;e&&(r|=4),lv(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Go(t){if(!t[rl]){t[rl]=!0,m_.forEach(function(n){n!=="selectionchange"&&(QI.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,Wc("selectionchange",!1,e))}}function lv(t,e,n,r){switch(q_(e)){case 1:var i=uI;break;case 4:i=cI;break;default:i=ef}n=i.bind(null,e,n,t),i=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ci(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}N_(function(){var h=s,f=Xd(n),p=[];e:{var g=ov.get(t);if(g!==void 0){var A=nf,x=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":A=AI;break;case"focusin":x="focus",A=Fc;break;case"focusout":x="blur",A=Fc;break;case"beforeblur":case"afterblur":A=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=fI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=PI;break;case nv:case rv:case iv:A=gI;break;case sv:A=xI;break;case"scroll":A=hI;break;case"wheel":A=DI;break;case"copy":case"cut":case"paste":A=_I;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Rm}var b=(e&4)!==0,O=!b&&t==="scroll",E=b?g!==null?g+"Capture":null:g;b=[];for(var w=h,_;w!==null;){_=w;var D=_.stateNode;if(_.tag===5&&D!==null&&(_=D,E!==null&&(D=zo(w,E),D!=null&&b.push(Ko(w,D,_)))),O)break;w=w.return}0<b.length&&(g=new A(g,x,null,n,f),p.push({event:g,listeners:b}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==bh&&(x=n.relatedTarget||n.fromElement)&&(ci(x)||x[sr]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(x=n.relatedTarget||n.toElement,A=h,x=x?ci(x):null,x!==null&&(O=Pi(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(A=null,x=h),A!==x)){if(b=Am,D="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(b=Rm,D="onPointerLeave",E="onPointerEnter",w="pointer"),O=A==null?g:rs(A),_=x==null?g:rs(x),g=new b(D,w+"leave",A,n,f),g.target=O,g.relatedTarget=_,D=null,ci(f)===h&&(b=new b(E,w+"enter",x,n,f),b.target=_,b.relatedTarget=O,D=b),O=D,A&&x)t:{for(b=A,E=x,w=0,_=b;_;_=Hi(_))w++;for(_=0,D=E;D;D=Hi(D))_++;for(;0<w-_;)b=Hi(b),w--;for(;0<_-w;)E=Hi(E),_--;for(;w--;){if(b===E||E!==null&&b===E.alternate)break t;b=Hi(b),E=Hi(E)}b=null}else b=null;A!==null&&Fm(p,g,A,b,!1),x!==null&&O!==null&&Fm(p,O,x,b,!0)}}e:{if(g=h?rs(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var M=UI;else if(xm(g))if(Y_)M=$I;else{M=zI;var $=jI}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=BI);if(M&&(M=M(t,h))){X_(p,M,n,f);break e}$&&$(t,g,h),t==="focusout"&&($=g._wrapperState)&&$.controlled&&g.type==="number"&&Ph(g,"number",g.value)}switch($=h?rs(h):window,t){case"focusin":(xm($)||$.contentEditable==="true")&&(ts=$,jh=h,Po=null);break;case"focusout":Po=jh=ts=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,Om(p,n,f);break;case"selectionchange":if(HI)break;case"keydown":case"keyup":Om(p,n,f)}var I;if(sf)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else es?K_(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(G_&&n.locale!=="ko"&&(es||m!=="onCompositionStart"?m==="onCompositionEnd"&&es&&(I=H_()):(Cr=f,tf="value"in Cr?Cr.value:Cr.textContent,es=!0)),$=Jl(h,m),0<$.length&&(m=new Cm(m,t,null,n,f),p.push({event:m,listeners:$}),I?m.data=I:(I=Q_(n),I!==null&&(m.data=I)))),(I=VI?OI(t,n):MI(t,n))&&(h=Jl(h,"onBeforeInput"),0<h.length&&(f=new Cm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=I))}av(p,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zo(t,n),s!=null&&r.unshift(Ko(t,s,i)),s=zo(t,e),s!=null&&r.push(Ko(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=zo(n,s),u!=null&&o.unshift(Ko(n,u,l))):i||(u=zo(n,s),u!=null&&o.push(Ko(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XI=/\r\n?/g,YI=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(XI,`
`).replace(YI,"")}function il(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(B(425))}function Zl(){}var Bh=null,$h=null;function Wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,JI=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,ZI=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(t){return jm.resolve(null).then(t).catch(eS)}:qh;function eS(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wo(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Ls,Qo="__reactProps$"+Ls,sr="__reactContainer$"+Ls,Hh="__reactEvents$"+Ls,tS="__reactListeners$"+Ls,nS="__reactHandles$"+Ls;function ci(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zm(t);t!==null;){if(n=t[Pn])return n;t=zm(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[Pn]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function zu(t){return t[Qo]||null}var Gh=[],is=-1;function ei(t){return{current:t}}function xe(t){0>is||(t.current=Gh[is],Gh[is]=null,is--)}function Ae(t,e){is++,Gh[is]=t.current,t.current=e}var Wr={},Rt=ei(Wr),zt=ei(!1),yi=Wr;function Is(t,e){var n=t.type.contextTypes;if(!n)return Wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(t){return t=t.childContextTypes,t!=null}function eu(){xe(zt),xe(Rt)}function Bm(t,e,n){if(Rt.current!==Wr)throw Error(B(168));Ae(Rt,e),Ae(zt,n)}function uv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,jT(t)||"Unknown",i));return Le({},n,r)}function tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wr,yi=Rt.current,Ae(Rt,t),Ae(zt,zt.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=uv(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,xe(zt),xe(Rt),Ae(Rt,t)):xe(zt),Ae(zt,n)}var Yn=null,Bu=!1,Gc=!1;function cv(t){Yn===null?Yn=[t]:Yn.push(t)}function rS(t){Bu=!0,cv(t)}function ti(){if(!Gc&&Yn!==null){Gc=!0;var t=0,e=Te;try{var n=Yn;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,Bu=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(t+1)),O_(Yd,ti),i}finally{Te=e,Gc=!1}}return null}var ss=[],os=0,nu=null,ru=0,en=[],tn=0,_i=null,Jn=1,Zn="";function ai(t,e){ss[os++]=ru,ss[os++]=nu,nu=t,ru=e}function hv(t,e,n){en[tn++]=Jn,en[tn++]=Zn,en[tn++]=_i,_i=t;var r=Jn;t=Zn;var i=32-En(r)-1;r&=~(1<<i),n+=1;var s=32-En(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jn=1<<32-En(e)+i|n<<i|r,Zn=s+t}else Jn=1<<s|n<<i|r,Zn=t}function af(t){t.return!==null&&(ai(t,1),hv(t,1,0))}function lf(t){for(;t===nu;)nu=ss[--os],ss[os]=null,ru=ss[--os],ss[os]=null;for(;t===_i;)_i=en[--tn],en[tn]=null,Zn=en[--tn],en[tn]=null,Jn=en[--tn],en[tn]=null}var Qt=null,Kt=null,De=!1,yn=null;function dv(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qt=t,Kt=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_i!==null?{id:Jn,overflow:Zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qt=t,Kt=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(De){var e=Kt;if(e){var n=e;if(!Wm(t,e)){if(Kh(t))throw Error(B(418));e=Dr(n.nextSibling);var r=Qt;e&&Wm(t,e)?dv(r,n):(t.flags=t.flags&-4097|2,De=!1,Qt=t)}}else{if(Kh(t))throw Error(B(418));t.flags=t.flags&-4097|2,De=!1,Qt=t}}}function qm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qt=t}function sl(t){if(t!==Qt)return!1;if(!De)return qm(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wh(t.type,t.memoizedProps)),e&&(e=Kt)){if(Kh(t))throw fv(),Error(B(418));for(;e;)dv(t,e),e=Dr(e.nextSibling)}if(qm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=Dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Qt?Dr(t.stateNode.nextSibling):null;return!0}function fv(){for(var t=Kt;t;)t=Dr(t.nextSibling)}function Ss(){Kt=Qt=null,De=!1}function uf(t){yn===null?yn=[t]:yn.push(t)}var iS=fr.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hm(t){var e=t._init;return e(t._payload)}function pv(t){function e(E,w){if(t){var _=E.deletions;_===null?(E.deletions=[w],E.flags|=16):_.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=Mr(E,w),E.index=0,E.sibling=null,E}function s(E,w,_){return E.index=_,t?(_=E.alternate,_!==null?(_=_.index,_<w?(E.flags|=2,w):_):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,w,_,D){return w===null||w.tag!==6?(w=eh(_,E.mode,D),w.return=E,w):(w=i(w,_),w.return=E,w)}function u(E,w,_,D){var M=_.type;return M===Zi?f(E,w,_.props.children,D,_.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&Hm(M)===w.type)?(D=i(w,_.props),D.ref=fo(E,w,_),D.return=E,D):(D=Vl(_.type,_.key,_.props,null,E.mode,D),D.ref=fo(E,w,_),D.return=E,D)}function h(E,w,_,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==_.containerInfo||w.stateNode.implementation!==_.implementation?(w=th(_,E.mode,D),w.return=E,w):(w=i(w,_.children||[]),w.return=E,w)}function f(E,w,_,D,M){return w===null||w.tag!==7?(w=mi(_,E.mode,D,M),w.return=E,w):(w=i(w,_),w.return=E,w)}function p(E,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return w=eh(""+w,E.mode,_),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qa:return _=Vl(w.type,w.key,w.props,null,E.mode,_),_.ref=fo(E,null,w),_.return=E,_;case Ji:return w=th(w,E.mode,_),w.return=E,w;case _r:var D=w._init;return p(E,D(w._payload),_)}if(yo(w)||ao(w))return w=mi(w,E.mode,_,null),w.return=E,w;ol(E,w)}return null}function g(E,w,_,D){var M=w!==null?w.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:l(E,w,""+_,D);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qa:return _.key===M?u(E,w,_,D):null;case Ji:return _.key===M?h(E,w,_,D):null;case _r:return M=_._init,g(E,w,M(_._payload),D)}if(yo(_)||ao(_))return M!==null?null:f(E,w,_,D,null);ol(E,_)}return null}function A(E,w,_,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(_)||null,l(w,E,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Qa:return E=E.get(D.key===null?_:D.key)||null,u(w,E,D,M);case Ji:return E=E.get(D.key===null?_:D.key)||null,h(w,E,D,M);case _r:var $=D._init;return A(E,w,_,$(D._payload),M)}if(yo(D)||ao(D))return E=E.get(_)||null,f(w,E,D,M,null);ol(w,D)}return null}function x(E,w,_,D){for(var M=null,$=null,I=w,m=w=0,v=null;I!==null&&m<_.length;m++){I.index>m?(v=I,I=null):v=I.sibling;var T=g(E,I,_[m],D);if(T===null){I===null&&(I=v);break}t&&I&&T.alternate===null&&e(E,I),w=s(T,w,m),$===null?M=T:$.sibling=T,$=T,I=v}if(m===_.length)return n(E,I),De&&ai(E,m),M;if(I===null){for(;m<_.length;m++)I=p(E,_[m],D),I!==null&&(w=s(I,w,m),$===null?M=I:$.sibling=I,$=I);return De&&ai(E,m),M}for(I=r(E,I);m<_.length;m++)v=A(I,E,m,_[m],D),v!==null&&(t&&v.alternate!==null&&I.delete(v.key===null?m:v.key),w=s(v,w,m),$===null?M=v:$.sibling=v,$=v);return t&&I.forEach(function(C){return e(E,C)}),De&&ai(E,m),M}function b(E,w,_,D){var M=ao(_);if(typeof M!="function")throw Error(B(150));if(_=M.call(_),_==null)throw Error(B(151));for(var $=M=null,I=w,m=w=0,v=null,T=_.next();I!==null&&!T.done;m++,T=_.next()){I.index>m?(v=I,I=null):v=I.sibling;var C=g(E,I,T.value,D);if(C===null){I===null&&(I=v);break}t&&I&&C.alternate===null&&e(E,I),w=s(C,w,m),$===null?M=C:$.sibling=C,$=C,I=v}if(T.done)return n(E,I),De&&ai(E,m),M;if(I===null){for(;!T.done;m++,T=_.next())T=p(E,T.value,D),T!==null&&(w=s(T,w,m),$===null?M=T:$.sibling=T,$=T);return De&&ai(E,m),M}for(I=r(E,I);!T.done;m++,T=_.next())T=A(I,E,m,T.value,D),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?m:T.key),w=s(T,w,m),$===null?M=T:$.sibling=T,$=T);return t&&I.forEach(function(P){return e(E,P)}),De&&ai(E,m),M}function O(E,w,_,D){if(typeof _=="object"&&_!==null&&_.type===Zi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Qa:e:{for(var M=_.key,$=w;$!==null;){if($.key===M){if(M=_.type,M===Zi){if($.tag===7){n(E,$.sibling),w=i($,_.props.children),w.return=E,E=w;break e}}else if($.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_r&&Hm(M)===$.type){n(E,$.sibling),w=i($,_.props),w.ref=fo(E,$,_),w.return=E,E=w;break e}n(E,$);break}else e(E,$);$=$.sibling}_.type===Zi?(w=mi(_.props.children,E.mode,D,_.key),w.return=E,E=w):(D=Vl(_.type,_.key,_.props,null,E.mode,D),D.ref=fo(E,w,_),D.return=E,E=D)}return o(E);case Ji:e:{for($=_.key;w!==null;){if(w.key===$)if(w.tag===4&&w.stateNode.containerInfo===_.containerInfo&&w.stateNode.implementation===_.implementation){n(E,w.sibling),w=i(w,_.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=th(_,E.mode,D),w.return=E,E=w}return o(E);case _r:return $=_._init,O(E,w,$(_._payload),D)}if(yo(_))return x(E,w,_,D);if(ao(_))return b(E,w,_,D);ol(E,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,_),w.return=E,E=w):(n(E,w),w=eh(_,E.mode,D),w.return=E,E=w),o(E)):n(E,w)}return O}var As=pv(!0),mv=pv(!1),iu=ei(null),su=null,as=null,cf=null;function hf(){cf=as=su=null}function df(t){var e=iu.current;xe(iu),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){su=t,cf=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(cf!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(su===null)throw Error(B(308));as=t,su.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var hi=null;function ff(t){hi===null?hi=[t]:hi.push(t)}function gv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ff(e)):(n.next=i.next,i.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,or(t,n)}return i=r.interleaved,i===null?(e.next=e,ff(r)):(e.next=i.next,i.next=e),r.interleaved=e,or(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}function Gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,b=l;switch(g=e,A=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){p=x.call(A,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,g=typeof x=="function"?x.call(A,p,g):x,g==null)break e;p=Le({},p,g);break e;case 2:vr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wi|=o,t.lanes=o,t.memoizedState=p}}function Km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var ya={},xn=ei(ya),Xo=ei(ya),Yo=ei(ya);function di(t){if(t===ya)throw Error(B(174));return t}function mf(t,e){switch(Ae(Yo,e),Ae(Xo,t),Ae(xn,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xh(e,t)}xe(xn),Ae(xn,e)}function Cs(){xe(xn),xe(Xo),xe(Yo)}function _v(t){di(Yo.current);var e=di(xn.current),n=xh(e,t.type);e!==n&&(Ae(Xo,t),Ae(xn,n))}function gf(t){Xo.current===t&&(xe(xn),xe(Xo))}var Ve=ei(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function yf(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var kl=fr.ReactCurrentDispatcher,Qc=fr.ReactCurrentBatchConfig,vi=0,Me=null,Ze=null,at=null,lu=!1,ko=!1,Jo=0,sS=0;function wt(){throw Error(B(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function vf(t,e,n,r,i,s){if(vi=s,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kl.current=t===null||t.memoizedState===null?uS:cS,t=n(r,i),ko){s=0;do{if(ko=!1,Jo=0,25<=s)throw Error(B(301));s+=1,at=Ze=null,e.updateQueue=null,kl.current=hS,t=n(r,i)}while(ko)}if(kl.current=uu,e=Ze!==null&&Ze.next!==null,vi=0,at=Ze=Me=null,lu=!1,e)throw Error(B(300));return t}function wf(){var t=Jo!==0;return Jo=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Me.memoizedState=at=t:at=at.next=t,at}function un(){if(Ze===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=at===null?Me.memoizedState:at.next;if(e!==null)at=e,Ze=t;else{if(t===null)throw Error(B(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},at===null?Me.memoizedState=at=t:at=at.next=t}return at}function Zo(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=un(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((vi&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Me.lanes|=f,wi|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,In(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Me.lanes|=s,wi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=un(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vv(){}function wv(t,e){var n=Me,r=un(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,Ef(Iv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,ea(9,Tv.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(B(349));vi&30||Ev(n,e,i)}return i}function Ev(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tv(t,e,n,r){e.value=n,e.getSnapshot=r,Sv(e)&&Av(t)}function Iv(t,e,n){return n(function(){Sv(e)&&Av(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function Av(t){var e=or(t,1);e!==null&&Tn(e,t,1,-1)}function Qm(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},e.queue=t,t=t.dispatch=lS.bind(null,Me,t),[e.memoizedState,t]}function ea(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cv(){return un().memoizedState}function xl(t,e,n,r){var i=Cn();Me.flags|=t,i.memoizedState=ea(1|e,n,void 0,r===void 0?null:r)}function $u(t,e,n,r){var i=un();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&_f(r,o.deps)){i.memoizedState=ea(e,n,s,r);return}}Me.flags|=t,i.memoizedState=ea(1|e,n,s,r)}function Xm(t,e){return xl(8390656,8,t,e)}function Ef(t,e){return $u(2048,8,t,e)}function Rv(t,e){return $u(4,2,t,e)}function Pv(t,e){return $u(4,4,t,e)}function kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xv(t,e,n){return n=n!=null?n.concat([t]):null,$u(4,4,kv.bind(null,e,t),n)}function Tf(){}function Nv(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dv(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bv(t,e,n){return vi&21?(In(n,e)||(n=F_(),Me.lanes|=n,wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function oS(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=Qc.transition;Qc.transition={};try{t(!1),e()}finally{Te=n,Qc.transition=r}}function Vv(){return un().memoizedState}function aS(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ov(t))Mv(e,n);else if(n=gv(t,e,n,r),n!==null){var i=bt();Tn(n,t,r,i),Lv(n,e,r)}}function lS(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ov(t))Mv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,In(l,o)){var u=e.interleaved;u===null?(i.next=i,ff(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=gv(t,e,i,r),n!==null&&(i=bt(),Tn(n,t,r,i),Lv(n,e,r))}}function Ov(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function Mv(t,e){ko=lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}var uu={readContext:ln,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},uS={readContext:ln,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aS.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:Tf,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=oS.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,i=Cn();if(De){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),lt===null)throw Error(B(349));vi&30||Ev(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xm(Iv.bind(null,r,s,t),[t]),r.flags|=2048,ea(9,Tv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=lt.identifierPrefix;if(De){var n=Zn,r=Jn;n=(r&~(1<<32-En(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cS={readContext:ln,useCallback:Nv,useContext:ln,useEffect:Ef,useImperativeHandle:xv,useInsertionEffect:Rv,useLayoutEffect:Pv,useMemo:Dv,useReducer:Xc,useRef:Cv,useState:function(){return Xc(Zo)},useDebugValue:Tf,useDeferredValue:function(t){var e=un();return bv(e,Ze.memoizedState,t)},useTransition:function(){var t=Xc(Zo)[0],e=un().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:wv,useId:Vv,unstable_isNewReconciler:!1},hS={readContext:ln,useCallback:Nv,useContext:ln,useEffect:Ef,useImperativeHandle:xv,useInsertionEffect:Rv,useLayoutEffect:Pv,useMemo:Dv,useReducer:Yc,useRef:Cv,useState:function(){return Yc(Zo)},useDebugValue:Tf,useDeferredValue:function(t){var e=un();return Ze===null?e.memoizedState=t:bv(e,Ze.memoizedState,t)},useTransition:function(){var t=Yc(Zo)[0],e=un().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:wv,useId:Vv,unstable_isNewReconciler:!1};function mn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wu={isMounted:function(t){return(t=t._reactInternals)?Pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Or(t),s=nr(r,i);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,i),e!==null&&(Tn(e,t,i,r),Pl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Or(t),s=nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,i),e!==null&&(Tn(e,t,i,r),Pl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Or(t),i=nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=br(t,i,r),e!==null&&(Tn(e,t,r,n),Pl(e,t,r))}};function Ym(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,r)||!Ho(i,s):!0}function Fv(t,e,n){var r=!1,i=Wr,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=Bt(e)?yi:Rt.current,r=e.contextTypes,s=(r=r!=null)?Is(t,i):Wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wu.enqueueReplaceState(e,e.state,null)}function Jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=Bt(e)?yi:Rt.current,i.context=Is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wu.enqueueReplaceState(i,i.state,null),ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",r=e;do n+=UT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dS=typeof WeakMap=="function"?WeakMap:Map;function Uv(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hu||(hu=!0,ud=r),Zh(t,e)},n}function jv(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CS.bind(null,t,e,n),e.then(t,t))}function eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var fS=fr.ReactCurrentOwner,jt=!1;function Dt(t,e,n,r){e.child=t===null?mv(e,null,n,r):As(e,t.child,n,r)}function ng(t,e,n,r,i){n=n.render;var s=e.ref;return ms(e,i),r=vf(t,e,n,r,s,i),n=wf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(De&&n&&af(e),e.flags|=1,Dt(t,e,r,i),e.child)}function rg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zv(t,e,s,r,i)):(t=Vl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,r)&&t.ref===e.ref)return ar(t,e,i)}return e.flags|=1,t=Mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function zv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ho(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,ar(t,e,i)}return ed(t,e,n,r,i)}function Bv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(us,Gt),Gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(us,Gt),Gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ae(us,Gt),Gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ae(us,Gt),Gt|=r;return Dt(t,e,i,n),e.child}function $v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,i){var s=Bt(n)?yi:Rt.current;return s=Is(e,s),ms(e,i),n=vf(t,e,n,r,s,i),r=wf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(De&&r&&af(e),e.flags|=1,Dt(t,e,n,i),e.child)}function ig(t,e,n,r,i){if(Bt(n)){var s=!0;tu(e)}else s=!1;if(ms(e,i),e.stateNode===null)Nl(t,e),Fv(e,n,r),Jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=ln(h):(h=Bt(n)?yi:Rt.current,h=Is(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Jm(e,o,r,h),vr=!1;var g=e.memoizedState;o.state=g,ou(e,r,o,i),u=e.memoizedState,l!==r||g!==u||zt.current||vr?(typeof f=="function"&&(Yh(e,n,f,r),u=e.memoizedState),(l=vr||Ym(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:mn(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=ln(u):(u=Bt(n)?yi:Rt.current,u=Is(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Jm(e,o,r,u),vr=!1,g=e.memoizedState,o.state=g,ou(e,r,o,i);var x=e.memoizedState;l!==p||g!==x||zt.current||vr?(typeof A=="function"&&(Yh(e,n,A,r),x=e.memoizedState),(h=vr||Ym(e,n,h,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,s,i)}function td(t,e,n,r,i,s){$v(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$m(e,n,!1),ar(t,e,s);r=e.stateNode,fS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,l,s)):Dt(t,e,l,s),e.memoizedState=r.state,i&&$m(e,n,!0),e.child}function Wv(t){var e=t.stateNode;e.pendingContext?Bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bm(t,e.context,!1),mf(t,e.containerInfo)}function sg(t,e,n,r,i){return Ss(),uf(i),e.flags|=256,Dt(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function qv(t,e,n){var r=e.pendingProps,i=Ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ae(Ve,i&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,r,0,null),t=mi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=nd,t):If(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return pS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Mr(l,s):(s=mi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return s=t.child,t=s.sibling,r=Mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function If(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&uf(r),As(e,t.child,null,n),t=If(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jc(Error(B(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gu({mode:"visible",children:r.children},i,0,null),s=mi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,s);if(!(e.mode&1))return al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=Jc(s,r,void 0),al(t,e,o,r)}if(l=(o&t.childLanes)!==0,jt||l){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(t,i),Tn(r,t,i,-1))}return kf(),r=Jc(Error(B(421))),al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Kt=Dr(i.nextSibling),Qt=e,De=!0,yn=null,t!==null&&(en[tn++]=Jn,en[tn++]=Zn,en[tn++]=_i,Jn=t.id,Zn=t.overflow,_i=e),e=If(e,r.children),e.flags|=4096,e)}function og(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function Zc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Hv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Dt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,n,e);else if(t.tag===19)og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zc(e,!0,n,null,s);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mS(t,e,n){switch(e.tag){case 3:Wv(e),Ss();break;case 5:_v(e);break;case 1:Bt(e.type)&&tu(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae(iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?qv(t,e,n):(Ae(Ve,Ve.current&1),t=ar(t,e,n),t!==null?t.sibling:null);Ae(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Hv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return ar(t,e,n)}var Gv,id,Kv,Qv;Gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};Kv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,di(xn.current);var s=null;switch(n){case"input":i=Ch(t,i),r=Ch(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=kh(t,i),r=kh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zl)}Nh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Uo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Qv=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gS(t,e,n){var r=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Bt(e.type)&&eu(),Et(e),null;case 3:return r=e.stateNode,Cs(),xe(zt),xe(Rt),yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(dd(yn),yn=null))),id(t,e),Et(e),null;case 5:gf(e);var i=di(Yo.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Et(e),null}if(t=di(xn.current),sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pn]=e,r[Qo]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<vo.length;i++)Pe(vo[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":mm(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":ym(r,s),Pe("invalid",r)}Nh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",""+l]):Uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Xa(r),gm(r,s,!0);break;case"textarea":Xa(r),_m(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[Qo]=r,Gv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<vo.length;i++)Pe(vo[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":mm(t,r),i=Ch(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":ym(t,r),i=kh(t,r),Pe("invalid",t);break;default:i=r}Nh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?C_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&S_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jo(t,u):typeof u=="number"&&jo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&Hd(t,s,u,o))}switch(n){case"input":Xa(t),gm(t,r,!1);break;case"textarea":Xa(t),_m(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)Qv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=di(Yo.current),di(xn.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(s=r.nodeValue!==n)&&(t=Qt,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return Et(e),null;case 13:if(xe(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Kt!==null&&e.mode&1&&!(e.flags&128))fv(),Ss(),e.flags|=98560,s=!1;else if(s=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Pn]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else yn!==null&&(dd(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?tt===0&&(tt=3):kf())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return Cs(),id(t,e),t===null&&Go(e.stateNode.containerInfo),Et(e),null;case 10:return df(e.type._context),Et(e),null;case 17:return Bt(e.type)&&eu(),Et(e),null;case 19:if(xe(Ve),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)po(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=au(t),o!==null){for(e.flags|=128,po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(Ve,Ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>Ps&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304)}else{if(!r)if(t=au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return Et(e),null}else 2*He()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Ve.current,Ae(Ve,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return Pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Gt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function yS(t,e){switch(lf(e),e.tag){case 1:return Bt(e.type)&&eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),xe(zt),xe(Rt),yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gf(e),null;case 13:if(xe(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Ve),null;case 4:return Cs(),null;case 10:return df(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var ll=!1,At=!1,_S=typeof WeakSet=="function"?WeakSet:Set,Q=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){$e(t,e,r)}}var ag=!1;function vS(t,e){if(Bh=Xl,t=ev(),of(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($h={focusedElem:t,selectionRange:n},Xl=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,O=x.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?b:mn(e.type,b),O);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){$e(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return x=ag,ag=!1,x}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sd(e,n,s)}i=i.next}while(i!==r)}}function qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xv(t){var e=t.alternate;e!==null&&(t.alternate=null,Xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[Qo],delete e[Hh],delete e[tS],delete e[nS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yv(t){return t.tag===5||t.tag===3||t.tag===4}function lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var ht=null,gn=!1;function gr(t,e,n){for(n=n.child;n!==null;)Jv(t,e,n),n=n.sibling}function Jv(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Lu,n)}catch{}switch(n.tag){case 5:At||ls(n,e);case 6:var r=ht,i=gn;ht=null,gr(t,e,n),ht=r,gn=i,ht!==null&&(gn?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(gn?(t=ht,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),Wo(t)):Hc(ht,n.stateNode));break;case 4:r=ht,i=gn,ht=n.stateNode.containerInfo,gn=!0,gr(t,e,n),ht=r,gn=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sd(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!At&&(ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$e(n,e,l)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,gr(t,e,n),At=r):gr(t,e,n);break;default:gr(t,e,n)}}function ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _S),e.forEach(function(r){var i=PS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ht=l.stateNode,gn=!1;break e;case 3:ht=l.stateNode.containerInfo,gn=!0;break e;case 4:ht=l.stateNode.containerInfo,gn=!0;break e}l=l.return}if(ht===null)throw Error(B(160));Jv(s,o,i),ht=null,gn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){$e(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zv(e,t),e=e.sibling}function Zv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),An(t),r&4){try{xo(3,t,t.return),qu(3,t)}catch(b){$e(t,t.return,b)}try{xo(5,t,t.return)}catch(b){$e(t,t.return,b)}}break;case 1:pn(e,t),An(t),r&512&&n!==null&&ls(n,n.return);break;case 5:if(pn(e,t),An(t),r&512&&n!==null&&ls(n,n.return),t.flags&32){var i=t.stateNode;try{jo(i,"")}catch(b){$e(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&E_(i,s),Dh(l,o);var h=Dh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?C_(i,p):f==="dangerouslySetInnerHTML"?S_(i,p):f==="children"?jo(i,p):Hd(i,f,p,h)}switch(l){case"input":Rh(i,s);break;case"textarea":T_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?hs(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?hs(i,!!s.multiple,s.defaultValue,!0):hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qo]=s}catch(b){$e(t,t.return,b)}}break;case 6:if(pn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){$e(t,t.return,b)}}break;case 3:if(pn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(b){$e(t,t.return,b)}break;case 4:pn(e,t),An(t);break;case 13:pn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cf=He())),r&4&&ug(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(At=(h=At)||f,pn(e,t),At=h):pn(e,t),An(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(p=Q=f;Q!==null;){switch(g=Q,A=g.child,g.tag){case 0:case 11:case 14:case 15:xo(4,g,g.return);break;case 1:ls(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(b){$e(r,n,b)}}break;case 5:ls(g,g.return);break;case 22:if(g.memoizedState!==null){hg(p);continue}}A!==null?(A.return=g,Q=A):hg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=A_("display",o))}catch(b){$e(t,t.return,b)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(b){$e(t,t.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pn(e,t),An(t),r&4&&ug(t);break;case 21:break;default:pn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yv(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jo(i,""),r.flags&=-33);var s=lg(t);ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lg(t);ad(t,l,o);break;default:throw Error(B(161))}}catch(u){$e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wS(t,e,n){Q=t,e0(t)}function e0(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||At;l=ll;var h=At;if(ll=o,(At=u)&&!h)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?dg(i):u!==null?(u.return=o,Q=u):dg(i);for(;s!==null;)Q=s,e0(s),s=s.sibling;Q=i,ll=l,At=h}cg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):cg(t)}}function cg(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Km(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Km(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Wo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}At||e.flags&512&&od(e)}catch(g){$e(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function hg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function dg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qu(4,e)}catch(u){$e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){$e(e,i,u)}}var s=e.return;try{od(e)}catch(u){$e(e,s,u)}break;case 5:var o=e.return;try{od(e)}catch(u){$e(e,o,u)}}}catch(u){$e(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var ES=Math.ceil,cu=fr.ReactCurrentDispatcher,Sf=fr.ReactCurrentOwner,an=fr.ReactCurrentBatchConfig,me=0,lt=null,Xe=null,pt=0,Gt=0,us=ei(0),tt=0,ta=null,wi=0,Hu=0,Af=0,No=null,Ut=null,Cf=0,Ps=1/0,Xn=null,hu=!1,ud=null,Vr=null,ul=!1,Rr=null,du=0,Do=0,cd=null,Dl=-1,bl=0;function bt(){return me&6?He():Dl!==-1?Dl:Dl=He()}function Or(t){return t.mode&1?me&2&&pt!==0?pt&-pt:iS.transition!==null?(bl===0&&(bl=F_()),bl):(t=Te,t!==0||(t=window.event,t=t===void 0?16:q_(t.type)),t):1}function Tn(t,e,n,r){if(50<Do)throw Do=0,cd=null,Error(B(185));pa(t,n,r),(!(me&2)||t!==lt)&&(t===lt&&(!(me&2)&&(Hu|=n),tt===4&&Er(t,pt)),$t(t,r),n===1&&me===0&&!(e.mode&1)&&(Ps=He()+500,Bu&&ti()))}function $t(t,e){var n=t.callbackNode;iI(t,e);var r=Ql(t,t===lt?pt:0);if(r===0)n!==null&&Em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Em(n),e===1)t.tag===0?rS(fg.bind(null,t)):cv(fg.bind(null,t)),ZI(function(){!(me&6)&&ti()}),n=null;else{switch(U_(r)){case 1:n=Yd;break;case 4:n=M_;break;case 16:n=Kl;break;case 536870912:n=L_;break;default:n=Kl}n=l0(n,t0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t0(t,e){if(Dl=-1,bl=0,me&6)throw Error(B(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var r=Ql(t,t===lt?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fu(t,r);else{e=r;var i=me;me|=2;var s=r0();(lt!==t||pt!==e)&&(Xn=null,Ps=He()+500,pi(t,e));do try{SS();break}catch(l){n0(t,l)}while(!0);hf(),cu.current=s,me=i,Xe!==null?e=0:(lt=null,pt=0,e=tt)}if(e!==0){if(e===2&&(i=Lh(t),i!==0&&(r=i,e=hd(t,i))),e===1)throw n=ta,pi(t,0),Er(t,r),$t(t,He()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!TS(i)&&(e=fu(t,r),e===2&&(s=Lh(t),s!==0&&(r=s,e=hd(t,s))),e===1))throw n=ta,pi(t,0),Er(t,r),$t(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:li(t,Ut,Xn);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=Cf+500-He(),10<e)){if(Ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qh(li.bind(null,t,Ut,Xn),e);break}li(t,Ut,Xn);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-En(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ES(r/1960))-r,10<r){t.timeoutHandle=qh(li.bind(null,t,Ut,Xn),r);break}li(t,Ut,Xn);break;case 5:li(t,Ut,Xn);break;default:throw Error(B(329))}}}return $t(t,He()),t.callbackNode===n?t0.bind(null,t):null}function hd(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(pi(t,e).flags|=256),t=fu(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&dd(e)),t}function dd(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function TS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Af,e&=~Hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-En(e),r=1<<n;t[n]=-1,e&=~r}}function fg(t){if(me&6)throw Error(B(327));gs();var e=Ql(t,0);if(!(e&1))return $t(t,He()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=ta,pi(t,0),Er(t,e),$t(t,He()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,Ut,Xn),$t(t,He()),null}function Rf(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Ps=He()+500,Bu&&ti())}}function Ei(t){Rr!==null&&Rr.tag===0&&!(me&6)&&gs();var e=me;me|=1;var n=an.transition,r=Te;try{if(an.transition=null,Te=1,t)return t()}finally{Te=r,an.transition=n,me=e,!(me&6)&&ti()}}function Pf(){Gt=us.current,xe(us)}function pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JI(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eu();break;case 3:Cs(),xe(zt),xe(Rt),yf();break;case 5:gf(r);break;case 4:Cs();break;case 13:xe(Ve);break;case 19:xe(Ve);break;case 10:df(r.type._context);break;case 22:case 23:Pf()}n=n.return}if(lt=t,Xe=t=Mr(t.current,null),pt=Gt=e,tt=0,ta=null,Af=Hu=wi=0,Ut=No=null,hi!==null){for(e=0;e<hi.length;e++)if(n=hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hi=null}return t}function n0(t,e){do{var n=Xe;try{if(hf(),kl.current=uu,lu){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lu=!1}if(vi=0,at=Ze=Me=null,ko=!1,Jo=0,Sf.current=null,n===null||n.return===null){tt=1,ta=e,Xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=pt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=eg(o);if(A!==null){A.flags&=-257,tg(A,o,l,s,e),A.mode&1&&Zm(s,h,e),e=A,u=h;var x=e.updateQueue;if(x===null){var b=new Set;b.add(u),e.updateQueue=b}else x.add(u);break e}else{if(!(e&1)){Zm(s,h,e),kf();break e}u=Error(B(426))}}else if(De&&l.mode&1){var O=eg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),tg(O,o,l,s,e),uf(Rs(u,l));break e}}s=u=Rs(u,l),tt!==4&&(tt=2),No===null?No=[s]:No.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=Uv(s,u,e);Gm(s,E);break e;case 1:l=u;var w=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Vr===null||!Vr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=jv(s,l,e);Gm(s,D);break e}}s=s.return}while(s!==null)}s0(n)}catch(M){e=M,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function r0(){var t=cu.current;return cu.current=uu,t===null?uu:t}function kf(){(tt===0||tt===3||tt===2)&&(tt=4),lt===null||!(wi&268435455)&&!(Hu&268435455)||Er(lt,pt)}function fu(t,e){var n=me;me|=2;var r=r0();(lt!==t||pt!==e)&&(Xn=null,pi(t,e));do try{IS();break}catch(i){n0(t,i)}while(!0);if(hf(),me=n,cu.current=r,Xe!==null)throw Error(B(261));return lt=null,pt=0,tt}function IS(){for(;Xe!==null;)i0(Xe)}function SS(){for(;Xe!==null&&!QT();)i0(Xe)}function i0(t){var e=a0(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,e===null?s0(t):Xe=e,Sf.current=null}function s0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yS(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Xe=null;return}}else if(n=gS(n,e,Gt),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);tt===0&&(tt=5)}function li(t,e,n){var r=Te,i=an.transition;try{an.transition=null,Te=1,AS(t,e,n,r)}finally{an.transition=i,Te=r}return null}function AS(t,e,n,r){do gs();while(Rr!==null);if(me&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sI(t,s),t===lt&&(Xe=lt=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,l0(Kl,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=an.transition,an.transition=null;var o=Te;Te=1;var l=me;me|=4,Sf.current=null,vS(t,n),Zv(n,t),qI($h),Xl=!!Bh,$h=Bh=null,t.current=n,wS(n),XT(),me=l,Te=o,an.transition=s}else t.current=n;if(ul&&(ul=!1,Rr=t,du=i),s=t.pendingLanes,s===0&&(Vr=null),ZT(n.stateNode),$t(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hu)throw hu=!1,t=ud,ud=null,t;return du&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===cd?Do++:(Do=0,cd=t):Do=0,ti(),null}function gs(){if(Rr!==null){var t=U_(du),e=an.transition,n=Te;try{if(an.transition=null,Te=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,du=0,me&6)throw Error(B(331));var i=me;for(me|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(Q=h;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:xo(8,f,s)}var p=f.child;if(p!==null)p.return=f,Q=p;else for(;Q!==null;){f=Q;var g=f.sibling,A=f.return;if(Xv(f),f===h){Q=null;break}if(g!==null){g.return=A,Q=g;break}Q=A}}}var x=s.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var O=b.sibling;b.sibling=null,b=O}while(b!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Q=E;break e}Q=s.return}}var w=t.current;for(Q=w;Q!==null;){o=Q;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Q=_;else e:for(o=w;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qu(9,l)}}catch(M){$e(l,l.return,M)}if(l===o){Q=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,Q=D;break e}Q=l.return}}if(me=i,ti(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Lu,t)}catch{}r=!0}return r}finally{Te=n,an.transition=e}}return!1}function pg(t,e,n){e=Rs(n,e),e=Uv(t,e,1),t=br(t,e,1),e=bt(),t!==null&&(pa(t,1,e),$t(t,e))}function $e(t,e,n){if(t.tag===3)pg(t,t,n);else for(;e!==null;){if(e.tag===3){pg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vr===null||!Vr.has(r))){t=Rs(n,t),t=jv(e,t,1),e=br(e,t,1),t=bt(),e!==null&&(pa(e,1,t),$t(e,t));break}}e=e.return}}function CS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(pt&n)===n&&(tt===4||tt===3&&(pt&130023424)===pt&&500>He()-Cf?pi(t,0):Af|=n),$t(t,e)}function o0(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=bt();t=or(t,e),t!==null&&(pa(t,e,n),$t(t,n))}function RS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o0(t,n)}function PS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),o0(t,n)}var a0;a0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,mS(t,e,n);jt=!!(t.flags&131072)}else jt=!1,De&&e.flags&1048576&&hv(e,ru,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var i=Is(e,Rt.current);ms(e,n),i=vf(null,e,r,t,i,n);var s=wf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(s=!0,tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pf(e),i.updater=Wu,e.stateNode=i,i._reactInternals=e,Jh(e,r,t,n),e=td(null,e,r,!0,s,n)):(e.tag=0,De&&s&&af(e),Dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xS(r),t=mn(r,t),i){case 0:e=ed(null,e,r,t,n);break e;case 1:e=ig(null,e,r,t,n);break e;case 11:e=ng(null,e,r,t,n);break e;case 14:e=rg(null,e,r,mn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),ed(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),ig(t,e,r,i,n);case 3:e:{if(Wv(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yv(t,e),ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Rs(Error(B(423)),e),e=sg(t,e,r,n,i);break e}else if(r!==i){i=Rs(Error(B(424)),e),e=sg(t,e,r,n,i);break e}else for(Kt=Dr(e.stateNode.containerInfo.firstChild),Qt=e,De=!0,yn=null,n=mv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),r===i){e=ar(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return _v(e),t===null&&Qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wh(r,i)?o=null:s!==null&&Wh(r,s)&&(e.flags|=32),$v(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return qv(t,e,n);case 4:return mf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=As(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),ng(t,e,r,i,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae(iu,r._currentValue),r._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===i.children&&!zt.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=nr(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ms(e,n),i=ln(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),rg(t,e,r,i,n);case 15:return zv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Nl(t,e),e.tag=1,Bt(r)?(t=!0,tu(e)):t=!1,ms(e,n),Fv(e,r,i),Jh(e,r,i,n),td(null,e,r,!0,t,n);case 19:return Hv(t,e,n);case 22:return Bv(t,e,n)}throw Error(B(156,e.tag))};function l0(t,e){return O_(t,e)}function kS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new kS(t,e,n,r)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xS(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Qd)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zi:return mi(n.children,i,s,e);case Gd:o=8,i|=8;break;case Th:return t=on(12,n,e,i|2),t.elementType=Th,t.lanes=s,t;case Ih:return t=on(13,n,e,i),t.elementType=Ih,t.lanes=s,t;case Sh:return t=on(19,n,e,i),t.elementType=Sh,t.lanes=s,t;case __:return Gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g_:o=10;break e;case y_:o=9;break e;case Kd:o=11;break e;case Qd:o=14;break e;case _r:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mi(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function Gu(t,e,n,r){return t=on(22,t,r,e),t.elementType=__,t.lanes=n,t.stateNode={isHidden:!1},t}function eh(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function th(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,r,i,s,o,l,u){return t=new NS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),t}function DS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function u0(t){if(!t)return Wr;t=t._reactInternals;e:{if(Pi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Bt(n))return uv(t,n,e)}return e}function c0(t,e,n,r,i,s,o,l,u){return t=Nf(n,r,!0,t,i,s,o,l,u),t.context=u0(null),n=t.current,r=bt(),i=Or(n),s=nr(r,i),s.callback=e??null,br(n,s,i),t.current.lanes=i,pa(t,i,r),$t(t,r),t}function Ku(t,e,n,r){var i=e.current,s=bt(),o=Or(i);return n=u0(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=br(i,e,o),t!==null&&(Tn(t,i,o,s),Pl(t,i,o)),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){mg(t,e),(t=t.alternate)&&mg(t,e)}function bS(){return null}var h0=typeof reportError=="function"?reportError:function(t){console.error(t)};function bf(t){this._internalRoot=t}Qu.prototype.render=bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Ku(t,e,null,null)};Qu.prototype.unmount=bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ei(function(){Ku(null,t,null,null)}),e[sr]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=B_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&W_(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gg(){}function VS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=pu(o);s.call(h)}}var o=c0(e,r,t,0,null,!1,!1,"",gg);return t._reactRootContainer=o,t[sr]=o.current,Go(t.nodeType===8?t.parentNode:t),Ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=pu(u);l.call(h)}}var u=Nf(t,0,!1,null,null,!1,!1,"",gg);return t._reactRootContainer=u,t[sr]=u.current,Go(t.nodeType===8?t.parentNode:t),Ei(function(){Ku(e,u,n,r)}),u}function Yu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=pu(o);l.call(u)}}Ku(e,o,t,i)}else o=VS(n,e,t,i,r);return pu(o)}j_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(Jd(e,n|1),$t(e,He()),!(me&6)&&(Ps=He()+500,ti()))}break;case 13:Ei(function(){var r=or(t,1);if(r!==null){var i=bt();Tn(r,t,1,i)}}),Df(t,1)}};Zd=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=bt();Tn(e,t,134217728,n)}Df(t,134217728)}};z_=function(t){if(t.tag===13){var e=Or(t),n=or(t,e);if(n!==null){var r=bt();Tn(n,t,e,r)}Df(t,e)}};B_=function(){return Te};$_=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};Vh=function(t,e,n){switch(e){case"input":if(Rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zu(r);if(!i)throw Error(B(90));w_(r),Rh(r,i)}}}break;case"textarea":T_(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};k_=Rf;x_=Ei;var OS={usingClientEntryPoint:!1,Events:[ga,rs,zu,R_,P_,Rf]},mo={findFiberByHostInstance:ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MS={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b_(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||bS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Lu=cl.inject(MS),kn=cl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(B(200));return DS(t,e,null,n)};Yt.createRoot=function(t,e){if(!Vf(t))throw Error(B(299));var n=!1,r="",i=h0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,r,i),t[sr]=e.current,Go(t.nodeType===8?t.parentNode:t),new bf(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=b_(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Ei(t)};Yt.hydrate=function(t,e,n){if(!Xu(e))throw Error(B(200));return Yu(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=h0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c0(e,null,t,1,n??null,i,!1,s,o),t[sr]=e.current,Go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qu(e)};Yt.render=function(t,e,n){if(!Xu(e))throw Error(B(200));return Yu(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(B(40));return t._reactRootContainer?(Ei(function(){Yu(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Rf;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xu(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Yu(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function d0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0)}catch(t){console.error(t)}}d0(),d_.exports=Yt;var LS=d_.exports,f0,yg=LS;f0=yg.createRoot,yg.hydrateRoot;const p0="fish-outline-lib-v1",m0="fish-skin-lib-v1";function FS(t){try{localStorage.setItem(p0,JSON.stringify(t))}catch{}}function US(){try{const t=localStorage.getItem(p0);return t?JSON.parse(t):[]}catch{return[]}}function jS(t){try{localStorage.setItem(m0,JSON.stringify(t))}catch{}}function zS(){try{const t=localStorage.getItem(m0);return t?JSON.parse(t):[]}catch{return[]}}function g0(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function BS(t,e=.5){if(t.length<3)return"";const n=t.slice(),r=n[0],i=n[n.length-1];Math.hypot(i.x-r.x,i.y-r.y)>8&&n.push({x:r.x,y:r.y});let o=`M ${n[0].x.toFixed(2)} ${n[0].y.toFixed(2)} `;for(let l=0;l<n.length-1;l++){const u=n[(l-1+n.length)%n.length],h=n[l],f=n[(l+1)%n.length],p=n[(l+2)%n.length],g=h.x+(f.x-u.x)*e/6,A=h.y+(f.y-u.y)*e/6,x=f.x-(p.x-h.x)*e/6,b=f.y-(p.y-h.y)*e/6;o+=`C ${g.toFixed(2)} ${A.toFixed(2)}, ${x.toFixed(2)} ${b.toFixed(2)}, ${f.x.toFixed(2)} ${f.y.toFixed(2)} `}return o+"Z"}function $S(t,e=.5){if(t.length<2)return"";const n=t.slice();let r=`M ${n[0].x.toFixed(2)} ${n[0].y.toFixed(2)} `;for(let i=0;i<n.length-1;i++){const s=i>0?n[i-1]:n[i],o=n[i],l=n[i+1],u=i<n.length-2?n[i+2]:l,h=o.x+(l.x-s.x)*e/6,f=o.y+(l.y-s.y)*e/6,p=l.x-(u.x-o.x)*e/6,g=l.y-(u.y-o.y)*e/6;r+=`C ${h.toFixed(2)} ${f.toFixed(2)}, ${p.toFixed(2)} ${g.toFixed(2)}, ${l.x.toFixed(2)} ${l.y.toFixed(2)} `}return r}const Ke={w:480,h:240};function WS({onSave:t,onCancel:e}){const n=K.useRef(null),[r,i]=K.useState([]),[s,o]=K.useState(null),[l,u]=K.useState(null),[h,f]=K.useState(""),[p,g]=K.useState("draw");K.useEffect(()=>{const w=n.current,_=w.getContext("2d"),D=window.devicePixelRatio||1;w.width=Ke.w*D,w.height=Ke.h*D,w.style.width=`${Ke.w}px`,w.style.height=`${Ke.h}px`,_.scale(D,D),_.fillStyle="#f8fafc",_.fillRect(0,0,Ke.w,Ke.h),_.strokeStyle="#e2e8f0",_.lineWidth=1;for(let M=0;M<=Ke.w;M+=20)_.beginPath(),_.moveTo(M,0),_.lineTo(M,Ke.h),_.stroke();for(let M=0;M<=Ke.h;M+=20)_.beginPath(),_.moveTo(0,M),_.lineTo(Ke.w,M),_.stroke()},[]),K.useEffect(()=>{const w=n.current,_=w.getContext("2d"),D=window.devicePixelRatio||1;_.clearRect(0,0,w.width,w.height),_.save(),_.scale(D,D),_.fillStyle="#f8fafc",_.fillRect(0,0,Ke.w,Ke.h),_.strokeStyle="#e2e8f0",_.lineWidth=1;for(let M=0;M<=Ke.w;M+=20)_.beginPath(),_.moveTo(M,0),_.lineTo(M,Ke.h),_.stroke();for(let M=0;M<=Ke.h;M+=20)_.beginPath(),_.moveTo(0,M),_.lineTo(Ke.w,M),_.stroke();if(r.length>0){_.strokeStyle="#3b82f6",_.lineWidth=2,_.beginPath(),_.moveTo(r[0].x,r[0].y);for(let M=1;M<r.length;M++)_.lineTo(r[M].x,r[M].y);_.stroke(),_.fillStyle="#3b82f6";for(const M of r)_.beginPath(),_.arc(M.x,M.y,3,0,Math.PI*2),_.fill()}s&&(_.fillStyle="#10b981",_.beginPath(),_.arc(s.x,s.y,6,0,Math.PI*2),_.fill(),_.fillStyle="#fff",_.beginPath(),_.arc(s.x,s.y,3,0,Math.PI*2),_.fill()),l&&(_.fillStyle="#ef4444",_.beginPath(),_.arc(l.x,l.y,6,0,Math.PI*2),_.fill(),_.fillStyle="#fff",_.beginPath(),_.arc(l.x,l.y,3,0,Math.PI*2),_.fill()),_.restore()},[r,s,l]);const A=w=>{const D=n.current.getBoundingClientRect(),M=(w.clientX-D.left)*(Ke.w/D.width),$=(w.clientY-D.top)*(Ke.h/D.height);p==="draw"?i([...r,{x:M,y:$}]):p==="mark"&&(s?l||u({x:M,y:$}):o({x:M,y:$}))},x=()=>{r.length>0&&i(r.slice(0,-1))},b=()=>{i([]),o(null),u(null)},O=()=>{r.length>=3&&(i([...r,r[0]]),g("mark"))},E=()=>{if(!h.trim()){alert("请输入轮廓名称");return}if(!s||!l){alert("请标记头部和尾部位置");return}const w=BS(r),_=s.x<=l.x,D={id:`ol-${g0()}`,name:h.trim(),viewBox:Ke,pathD:w,headIsLeft:_,createdAt:new Date().toISOString()},M=US();M.push(D),FS(M),t(D)};return z.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:z.jsxs("div",{className:"w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6",children:[z.jsx("h3",{className:"text-xl font-semibold mb-4",children:"创建鱼形轮廓"}),z.jsxs("div",{className:"mb-4",children:[z.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"轮廓名称"}),z.jsx("input",{type:"text",value:h,onChange:w=>f(w.target.value),className:"w-full px-3 py-2 border rounded-lg",placeholder:"例如：神仙鱼轮廓"})]}),z.jsxs("div",{className:"relative mb-4",children:[z.jsx("canvas",{ref:n,onClick:A,className:"w-full border rounded-lg cursor-crosshair",style:{height:Ke.h}}),z.jsx("div",{className:"absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm",children:p==="draw"?"绘制模式：点击添加点":"标记模式：先点击头部，再点击尾部"})]}),z.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[z.jsx("button",{onClick:x,disabled:r.length===0,className:"px-3 py-2 bg-gray-200 rounded-lg disabled:opacity-50",children:"撤销"}),z.jsx("button",{onClick:b,disabled:r.length===0,className:"px-3 py-2 bg-gray-200 rounded-lg disabled:opacity-50",children:"清空"}),z.jsx("button",{onClick:O,disabled:r.length<3||p!=="draw",className:"px-3 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50",children:"闭合路径"})]}),z.jsxs("div",{className:"flex justify-end gap-2",children:[z.jsx("button",{onClick:e,className:"px-4 py-2 border rounded-lg",children:"取消"}),z.jsx("button",{onClick:E,disabled:!h.trim()||!s||!l,className:"px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50",children:"保存轮廓"})]})]})})}function qS({outline:t,onSave:e,onBack:n}){const r=K.useRef(null),[i,s]=K.useState([]),[o,l]=K.useState(null),[u,h]=K.useState("#3b82f6"),[f,p]=K.useState(8),[g,A]=K.useState(""),[x,b]=K.useState(!1);K.useEffect(()=>{const m=r.current,v=m.getContext("2d"),T=window.devicePixelRatio||1;m.width=t.viewBox.w*T,m.height=t.viewBox.h*T,m.style.width=`${t.viewBox.w}px`,m.style.height=`${t.viewBox.h}px`,v.scale(T,T),O()},[t]);const O=()=>{const m=r.current,v=m.getContext("2d"),T=window.devicePixelRatio||1;v.clearRect(0,0,m.width,m.height),v.save(),v.scale(T,T),v.fillStyle="#f8fafc",v.fillRect(0,0,t.viewBox.w,t.viewBox.h),v.strokeStyle="#93c5fd",v.lineWidth=1,v.setLineDash([4,4]),v.beginPath();const C=new Path2D(t.pathD);v.stroke(C),v.setLineDash([]);for(const P of i)if(!(P.pts.length<2)){v.strokeStyle=P.color,v.lineWidth=P.width,v.lineCap="round",v.lineJoin="round",v.beginPath(),v.moveTo(P.pts[0].x,P.pts[0].y);for(let S=1;S<P.pts.length;S++)v.lineTo(P.pts[S].x,P.pts[S].y);v.stroke()}if(o&&o.pts.length>=2){v.strokeStyle=o.color,v.lineWidth=o.width,v.lineCap="round",v.lineJoin="round",v.beginPath(),v.moveTo(o.pts[0].x,o.pts[0].y);for(let P=1;P<o.pts.length;P++)v.lineTo(o.pts[P].x,o.pts[P].y);v.stroke()}v.restore()};K.useEffect(()=>{O()},[i,o]);const E=m=>{const v=r.current,T=v.getBoundingClientRect(),C=(m.clientX-T.left)*(t.viewBox.w/T.width),P=(m.clientY-T.top)*(t.viewBox.h/T.height),S={color:x?"#f8fafc":u,width:x?f*2:f,pts:[{x:C,y:P}]};l(S),v.setPointerCapture(m.pointerId)},w=m=>{if(!o)return;const T=r.current.getBoundingClientRect(),C=(m.clientX-T.left)*(t.viewBox.w/T.width),P=(m.clientY-T.top)*(t.viewBox.h/T.height);l({...o,pts:[...o.pts,{x:C,y:P}]})},_=m=>{if(!o)return;const v=r.current,T=v.getBoundingClientRect(),C=(m.clientX-T.left)*(t.viewBox.w/T.width),P=(m.clientY-T.top)*(t.viewBox.h/T.height),S={...o,pts:[...o.pts,{x:C,y:P}]};s([...i,S]),l(null),v.releasePointerCapture(m.pointerId)},D=()=>{i.length>0&&s(i.slice(0,-1))},M=()=>{s([])},$=async()=>{if(!g.trim()){alert("请输入SVG名称");return}const m=i.map(S=>`<path d="${$S(S.pts)}" fill="none" stroke="${S.color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${S.width}"/>`).join(""),v=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t.viewBox.w} ${t.viewBox.h}">
  <defs>
    <clipPath id="mask-${t.id}">
      <path d="${t.pathD}"/>
    </clipPath>
  </defs>
  <g clip-path="url(#mask-${t.id})">
    ${m}
  </g>
</svg>`.trim(),T=await new Promise(S=>{const We=new Image;We.onload=()=>{const Ge=document.createElement("canvas");Ge.width=256,Ge.height=Math.round(256*t.viewBox.h/t.viewBox.w),Ge.getContext("2d").drawImage(We,0,0,Ge.width,Ge.height),S(Ge.toDataURL("image/png"))},We.src=`data:image/svg+xml;utf8,${encodeURIComponent(v)}`}),C={id:`svg-${g0()}`,name:g.trim(),outlineId:t.id,svgText:v,previewPng:T,createdAt:new Date().toISOString()},P=zS();P.push(C),jS(P),e(C)},I=["#3b82f6","#ef4444","#10b981","#f59e0b","#8b5cf6","#000000"];return z.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:z.jsxs("div",{className:"w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6",children:[z.jsx("h3",{className:"text-xl font-semibold mb-4",children:"绘制鱼形细节"}),z.jsxs("div",{className:"mb-4",children:[z.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"SVG名称"}),z.jsx("input",{type:"text",value:g,onChange:m=>A(m.target.value),className:"w-full px-3 py-2 border rounded-lg",placeholder:"例如：蓝色花纹神仙鱼"})]}),z.jsxs("div",{className:"relative mb-4",children:[z.jsx("canvas",{ref:r,onPointerDown:E,onPointerMove:w,onPointerUp:_,className:"w-full border rounded-lg cursor-crosshair",style:{height:t.viewBox.h}}),z.jsx("div",{className:"absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm",children:"在轮廓内绘制细节"})]}),z.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[I.map(m=>z.jsx("button",{onClick:()=>{h(m),b(!1)},className:"w-8 h-8 rounded-full border",style:{backgroundColor:m},title:m},m)),z.jsx("button",{onClick:()=>b(!x),className:`px-3 py-2 rounded-lg border ${x?"bg-gray-700 text-white":"bg-white"}`,children:"橡皮"}),z.jsxs("label",{className:"flex items-center gap-2",children:[z.jsx("span",{className:"text-sm",children:"粗细"}),z.jsx("input",{type:"range",min:2,max:24,value:f,onChange:m=>p(parseInt(m.target.value))})]}),z.jsx("button",{onClick:D,disabled:i.length===0,className:"px-3 py-2 bg-gray-200 rounded-lg disabled:opacity-50",children:"撤销"}),z.jsx("button",{onClick:M,disabled:i.length===0,className:"px-3 py-2 bg-gray-200 rounded-lg disabled:opacity-50",children:"清空"})]}),z.jsxs("div",{className:"flex justify-end gap-2",children:[z.jsx("button",{onClick:n,className:"px-4 py-2 border rounded-lg",children:"返回修改轮廓"}),z.jsx("button",{onClick:$,disabled:!g.trim()||i.length===0,className:"px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50",children:"保存为SVG"})]})]})})}const HS=()=>{};var _g={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new KS;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QS=function(t){const e=y0(t);return _0.encodeByteArray(e,!0)},mu=function(t){return QS(t).replace(/\./g,"")},v0=function(t){try{return _0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=()=>XS().__FIREBASE_DEFAULTS__,JS=()=>{if(typeof process>"u"||typeof _g>"u")return;const t=_g.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&v0(t[1]);return e&&JSON.parse(e)},Ju=()=>{try{return HS()||YS()||JS()||ZS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w0=t=>{var e,n;return(n=(e=Ju())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},E0=t=>{const e=w0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},T0=()=>{var t;return(t=Ju())==null?void 0:t.config},I0=t=>{var e;return(e=Ju())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Of(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),""].join(".")}const bo={};function t1(){const t={prod:[],emulator:[]};for(const e of Object.keys(bo))bo[e]?t.emulator.push(e):t.prod.push(e);return t}function n1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vg=!1;function Mf(t,e){if(typeof window>"u"||typeof document>"u"||!ki(window.location.host)||bo[t]===e||bo[t]||vg)return;bo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=t1().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{vg=!0,o()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=n1(r),A=n("text"),x=document.getElementById(A)||document.createElement("span"),b=n("learnmore"),O=document.getElementById(b)||document.createElement("a"),E=n("preprendIcon"),w=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const _=g.element;l(_),f(O,b);const D=h();u(w,E),_.append(w,x,O,D),document.body.appendChild(_)}s?(x.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function i1(){var e;const t=(e=Ju())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function s1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function o1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function a1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function l1(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function u1(){return!i1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function c1(){try{return typeof indexedDB=="object"}catch{return!1}}function h1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=d1,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_a.prototype.create)}}class _a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?f1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new zn(i,l,r)}}function f1(t,e){return t.replace(p1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const p1=/\{\$([^}]+)}/g;function m1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ti(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wg(s)&&wg(o)){if(!Ti(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function g1(t,e){const n=new y1(t,e);return n.subscribe.bind(n)}class y1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nh),i.error===void 0&&(i.error=nh),i.complete===void 0&&(i.complete=nh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new e1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E1(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:w1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function w1(t){return t===ui?void 0:t}function E1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new v1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const I1={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},S1=ce.INFO,A1={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},C1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=A1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lf{constructor(e){this.name=e,this._logLevel=S1,this._logHandler=C1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const R1=(t,e)=>e.some(n=>t instanceof n);let Eg,Tg;function P1(){return Eg||(Eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k1(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const A0=new WeakMap,fd=new WeakMap,C0=new WeakMap,rh=new WeakMap,Ff=new WeakMap;function x1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&A0.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function N1(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function D1(t){pd=t(pd)}function b1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ih(this),e,...n);return C0.set(r,e.sort?e.sort():[e]),Lr(r)}:k1().includes(t)?function(...e){return t.apply(ih(this),e),Lr(A0.get(this))}:function(...e){return Lr(t.apply(ih(this),e))}}function V1(t){return typeof t=="function"?b1(t):(t instanceof IDBTransaction&&N1(t),R1(t,P1())?new Proxy(t,pd):t)}function Lr(t){if(t instanceof IDBRequest)return x1(t);if(rh.has(t))return rh.get(t);const e=V1(t);return e!==t&&(rh.set(t,e),Ff.set(e,t)),e}const ih=t=>Ff.get(t);function O1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Lr(o.result),u.oldVersion,u.newVersion,Lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const M1=["get","getKey","getAll","getAllKeys","count"],L1=["put","add","delete","clear"],sh=new Map;function Ig(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sh.get(e))return sh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=L1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||M1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return sh.set(e,s),s}D1(t=>({...t,get:(e,n,r)=>Ig(e,n)||t.get(e,n,r),has:(e,n)=>!!Ig(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(U1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function U1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",Sg="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Lf("@firebase/app"),j1="@firebase/app-compat",z1="@firebase/analytics-compat",B1="@firebase/analytics",$1="@firebase/app-check-compat",W1="@firebase/app-check",q1="@firebase/auth",H1="@firebase/auth-compat",G1="@firebase/database",K1="@firebase/data-connect",Q1="@firebase/database-compat",X1="@firebase/functions",Y1="@firebase/functions-compat",J1="@firebase/installations",Z1="@firebase/installations-compat",eA="@firebase/messaging",tA="@firebase/messaging-compat",nA="@firebase/performance",rA="@firebase/performance-compat",iA="@firebase/remote-config",sA="@firebase/remote-config-compat",oA="@firebase/storage",aA="@firebase/storage-compat",lA="@firebase/firestore",uA="@firebase/ai",cA="@firebase/firestore-compat",hA="firebase",dA="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="[DEFAULT]",fA={[md]:"fire-core",[j1]:"fire-core-compat",[B1]:"fire-analytics",[z1]:"fire-analytics-compat",[W1]:"fire-app-check",[$1]:"fire-app-check-compat",[q1]:"fire-auth",[H1]:"fire-auth-compat",[G1]:"fire-rtdb",[K1]:"fire-data-connect",[Q1]:"fire-rtdb-compat",[X1]:"fire-fn",[Y1]:"fire-fn-compat",[J1]:"fire-iid",[Z1]:"fire-iid-compat",[eA]:"fire-fcm",[tA]:"fire-fcm-compat",[nA]:"fire-perf",[rA]:"fire-perf-compat",[iA]:"fire-rc",[sA]:"fire-rc-compat",[oA]:"fire-gcs",[aA]:"fire-gcs-compat",[lA]:"fire-fst",[cA]:"fire-fst-compat",[uA]:"fire-vertex","fire-js":"fire-js",[hA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Map,pA=new Map,yd=new Map;function Ag(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ii(t){const e=t.name;if(yd.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of gu.values())Ag(n,t);for(const n of pA.values())Ag(n,t);return!0}function Zu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new _a("app","Firebase",mA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=dA;function R0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=T0()),!n)throw Fr.create("no-options");const s=gu.get(i);if(s){if(Ti(n,s.options)&&Ti(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new T1(i);for(const u of yd.values())o.addComponent(u);const l=new gA(n,r,o);return gu.set(i,l),l}function Uf(t=gd){const e=gu.get(t);if(!e&&t===gd&&T0())return R0();if(!e)throw Fr.create("no-app",{appName:t});return e}function Nn(t,e,n){let r=fA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(o.join(" "));return}Ii(new qr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="firebase-heartbeat-database",_A=1,na="firebase-heartbeat-store";let oh=null;function P0(){return oh||(oh=O1(yA,_A,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(na)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),oh}async function vA(t){try{const n=(await P0()).transaction(na),r=await n.objectStore(na).get(k0(t));return await n.done,r}catch(e){if(e instanceof zn)lr.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function Cg(t,e){try{const r=(await P0()).transaction(na,"readwrite");await r.objectStore(na).put(e,k0(t)),await r.done}catch(n){if(n instanceof zn)lr.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function k0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=1024,EA=30;class TA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>EA){const o=AA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rg(),{heartbeatsToSend:r,unsentEntries:i}=IA(this._heartbeatsCache.heartbeats),s=mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return lr.warn(n),""}}}function Rg(){return new Date().toISOString().substring(0,10)}function IA(t,e=wA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c1()?h1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pg(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}function AA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){Ii(new qr("platform-logger",e=>new F1(e),"PRIVATE")),Ii(new qr("heartbeat",e=>new TA(e),"PRIVATE")),Nn(md,Sg,t),Nn(md,Sg,"esm2020"),Nn("fire-js","")}CA("");var RA="firebase",PA="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(RA,PA,"app");function x0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kA=x0,N0=new _a("auth","Firebase",x0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new Lf("@firebase/auth");function xA(t,...e){yu.logLevel<=ce.WARN&&yu.warn(`Auth (${xi}): ${t}`,...e)}function Ol(t,...e){yu.logLevel<=ce.ERROR&&yu.error(`Auth (${xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,...e){throw jf(t,...e)}function Dn(t,...e){return jf(t,...e)}function D0(t,e,n){const r={...kA(),[e]:n};return new _a("auth","Firebase",r).create(e,{appName:t.name})}function Ur(t){return D0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return N0.create(t,...e)}function ie(t,e,...n){if(!t)throw jf(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ol(e),new Error(e)}function cr(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function NA(){return kg()==="http:"||kg()==="https:"}function kg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NA()||o1()||"connection"in navigator)?navigator.onLine:!0}function bA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=r1()||a1()}get(){return DA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MA=new wa(3e4,6e4);function ec(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Fs(t,e,n,r,i={}){return V0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=va({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return s1()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ki(t.emulatorConfig.host)&&(h.credentials="include"),b0.fetch()(await M0(t,t.config.apiHost,n,l),h)})}async function V0(t,e,n){t._canInitEmulator=!1;const r={...VA,...e};try{const i=new LA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw hl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw D0(t,f,h);ur(t,f)}}catch(i){if(i instanceof zn)throw i;ur(t,"network-request-failed",{message:String(i)})}}async function O0(t,e,n,r,i={}){const s=await Fs(t,e,n,r,i);return"mfaPendingCredential"in s&&ur(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function M0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?zf(t.config,i):`${t.config.apiScheme}://${i}`;return OA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class LA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),MA.get())})}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e){return Fs(t,"POST","/v1/accounts:delete",e)}async function _u(t,e){return Fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UA(t,e=!1){const n=cn(t),r=await n.getIdToken(e),i=Bf(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vo(ah(i.auth_time)),issuedAtTime:Vo(ah(i.iat)),expirationTime:Vo(ah(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ah(t){return Number(t)*1e3}function Bf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=v0(n);return i?JSON.parse(i):(Ol("Failed to decode base64 JWT payload"),null)}catch(i){return Ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xg(t){const e=Bf(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&jA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await ra(t,_u(e,{idToken:n}));ie(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?L0(i.providerUserInfo):[],o=$A(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function BA(t){const e=cn(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $A(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function L0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e){const n=await V0(t,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await M0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ki(t.emulatorConfig.host)&&(u.credentials="include"),b0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qA(t,e){return Fs(t,"POST","/v2/accounts:revokeToken",ec(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=xg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ys;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new zA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ra(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UA(this,e)}reload(){return BA(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await ra(this,FA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:A,providerData:x,stsTokenManager:b}=n;ie(p&&b,e,"internal-error");const O=ys.fromJSON(this.name,b);ie(typeof p=="string",e,"internal-error"),yr(r,e.name),yr(i,e.name),ie(typeof g=="boolean",e,"internal-error"),ie(typeof A=="boolean",e,"internal-error"),yr(s,e.name),yr(o,e.name),yr(l,e.name),yr(u,e.name),yr(h,e.name),yr(f,e.name);const E=new _n({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:O,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(E.providerData=x.map(w=>({...w}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new ys;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?L0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ys;l.updateFromIdToken(r);const u=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=new Map;function tr(t){cr(t instanceof Function,"Expected a class definition");let e=Ng.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ng.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F0.type="NONE";const Dg=F0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ml(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ml("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _u(this.auth,{idToken:e}).catch(()=>{});return n?_n._fromGetAccountInfoResponse(this.auth,n,e):null}return _n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(tr(Dg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||tr(Dg);const o=Ml(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await _u(e,{idToken:f}).catch(()=>{});if(!g)break;p=await _n._fromGetAccountInfoResponse(e,g,f)}else p=_n._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _s(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new _s(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(B0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W0(e))return"Blackberry";if(q0(e))return"Webos";if(j0(e))return"Safari";if((e.includes("chrome/")||z0(e))&&!e.includes("edge/"))return"Chrome";if($0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function U0(t=Pt()){return/firefox\//i.test(t)}function j0(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z0(t=Pt()){return/crios\//i.test(t)}function B0(t=Pt()){return/iemobile/i.test(t)}function $0(t=Pt()){return/android/i.test(t)}function W0(t=Pt()){return/blackberry/i.test(t)}function q0(t=Pt()){return/webos/i.test(t)}function $f(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HA(t=Pt()){var e;return $f(t)&&!!((e=window.navigator)!=null&&e.standalone)}function GA(){return l1()&&document.documentMode===10}function H0(t=Pt()){return $f(t)||$0(t)||q0(t)||W0(t)||/windows phone/i.test(t)||B0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e=[]){let n;switch(t){case"Browser":n=bg(Pt());break;case"Worker":n=`${bg(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e={}){return Fs(t,"GET","/v2/passwordPolicy",ec(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=6;class YA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??XA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vg(this),this.idTokenSubscription=new Vg(this),this.beforeStateQueue=new KA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _u(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Ur(this));const n=e?cn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QA(this),n=new YA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&xA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tc(t){return cn(t)}class Vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=g1(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZA(t){Wf=t}function eC(t){return Wf.loadJS(t)}function tC(){return Wf.gapiScript}function nC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t,e){const n=Zu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ti(s,e??{}))return i;ur(i,"already-initialized")}return n.initialize({options:e})}function iC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sC(t,e,n){const r=tc(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=K0(e),{host:o,port:l}=oC(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(Ti(h,r.config.emulator)&&Ti(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ki(o)?(Of(`${s}//${o}${u}`),Mf("Auth",!0)):aC()}function K0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oC(t){const e=K0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Og(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Og(o)}}}function Og(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return O0(t,"POST","/v1/accounts:signInWithIdp",ec(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="http://localhost";class Si extends Q0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ur("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:lC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends X0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Ea{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Si._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Ea{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.GITHUB_SIGN_IN_METHOD="github.com";Sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Ea{constructor(){super("twitter.com")}static credential(e,n){return Si._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ar.credential(n,r)}catch{return null}}}Ar.TWITTER_SIGN_IN_METHOD="twitter.com";Ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e){return O0(t,"POST","/v1/accounts:signUp",ec(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=Mg(r);return new Hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Mg(r);return new Hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Mg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t){var i;if(nn(t.app))return Promise.reject(Ur(t));const e=tc(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Hr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await uC(e,{returnSecureToken:!0}),r=await Hr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends zn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wu(e,n,r,i)}}function Y0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,s,e,r):s})}async function hC(t,e,n=!1){const r=await ra(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(Ur(r));const i="reauthenticate";try{const s=await ra(t,Y0(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=Bf(s.idToken);ie(o,r,"internal-error");const{sub:l}=o;return ie(t.uid===l,r,"user-mismatch"),Hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ur(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e,n=!1){if(nn(t.app))return Promise.reject(Ur(t));const r="signIn",i=await Y0(t,r,e),s=await Hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function pC(t,e,n,r){return cn(t).onIdTokenChanged(e,n,r)}function mC(t,e,n){return cn(t).beforeAuthStateChanged(e,n)}const Eu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=1e3,yC=10;class Z0 extends J0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=H0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Z0.type="LOCAL";const _C=Z0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew extends J0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ew.type="SESSION";const tw=ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await vC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=qf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function EC(t){bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function TC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function SC(){return nw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="firebaseLocalStorageDb",AC=1,Tu="firebaseLocalStorage",iw="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function CC(){const t=indexedDB.deleteDatabase(rw);return new Ta(t).toPromise()}function wd(){const t=indexedDB.open(rw,AC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tu,{keyPath:iw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tu)?e(r):(r.close(),await CC(),e(await wd()))})})}async function Lg(t,e,n){const r=rc(t,!0).put({[iw]:e,value:n});return new Ta(r).toPromise()}async function RC(t,e){const n=rc(t,!1).get(e),r=await new Ta(n).toPromise();return r===void 0?null:r.value}function Fg(t,e){const n=rc(t,!0).delete(e);return new Ta(n).toPromise()}const PC=800,kC=3;class sw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(SC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await TC(),!this.activeServiceWorker)return;this.sender=new wC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wd();return await Lg(e,Eu,"1"),await Fg(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rc(i,!1).getAll();return new Ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sw.type="LOCAL";const xC=sw;new wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e){return e?tr(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends Q0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DC(t){return fC(t.auth,new Hf(t),t.bypassAuthState)}function bC(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),dC(n,new Hf(t),t.bypassAuthState)}async function VC(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),hC(n,new Hf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DC;case"linkViaPopup":case"linkViaRedirect":return VC;case"reauthViaPopup":case"reauthViaRedirect":return bC;default:ur(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=new wa(2e3,1e4);class cs extends ow{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OC.get())};e()}}cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC="pendingRedirect",Ll=new Map;class LC extends ow{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const r=await FC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ll.set(this.auth._key(),e)}return this.bypassAuthState||Ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FC(t,e){const n=zC(e),r=jC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UC(t,e){Ll.set(t._key(),e)}function jC(t){return tr(t._redirectPersistence)}function zC(t){return Ml(MC,t.config.apiKey,t.name)}async function BC(t,e,n=!1){if(nn(t.app))return Promise.reject(Ur(t));const r=tc(t),i=NC(r,e),o=await new LC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=10*60*1e3;class WC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$C&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ug(e))}saveEventToCache(e){this.cachedEventUids.add(Ug(e)),this.lastProcessedEventTime=Date.now()}}function Ug(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e={}){return Fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KC=/^https?/;async function QC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HC(t);for(const n of e)try{if(XC(n))return}catch{}ur(t,"unauthorized-domain")}function XC(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KC.test(n))return!1;if(GC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new wa(3e4,6e4);function jg(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JC(t){return new Promise((e,n)=>{var i,s,o;function r(){jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jg(),n(Dn(t,"network-request-failed"))},timeout:YC.get()})}if((s=(i=bn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=bn().gapi)!=null&&o.load)r();else{const l=nC("iframefcb");return bn()[l]=()=>{gapi.load?r():n(Dn(t,"network-request-failed"))},eC(`${tC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function ZC(t){return Fl=Fl||JC(t),Fl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new wa(5e3,15e3),tR="__/auth/iframe",nR="emulator/auth/iframe",rR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sR(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zf(e,nR):`https://${t.config.authDomain}/${tR}`,r={apiKey:e.apiKey,appName:t.name,v:xi},i=iR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${va(r).slice(1)}`}async function oR(t){const e=await ZC(t),n=bn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:sR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),l=bn().setTimeout(()=>{s(o)},eR.get());function u(){bn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lR=500,uR=600,cR="_blank",hR="http://localhost";class zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dR(t,e,n,r=lR,i=uR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...aR,width:r.toString(),height:i.toString(),top:s,left:o},h=Pt().toLowerCase();n&&(l=z0(h)?cR:n),U0(h)&&(e=e||hR,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,x])=>`${g}${A}=${x},`,"");if(HA(h)&&l!=="_self")return fR(e||"",l),new zg(null);const p=window.open(e||"",l,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new zg(p)}function fR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="__/auth/handler",mR="emulator/auth/handler",gR=encodeURIComponent("fac");async function Bg(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xi,eventId:i};if(e instanceof X0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",m1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ea){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${gR}=${encodeURIComponent(u)}`:"";return`${yR(t)}?${va(l).slice(1)}${h}`}function yR({config:t}){return t.emulator?zf(t,mR):`https://${t.authDomain}/${pR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="webStorageSupport";class _R{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tw,this._completeRedirectFn=BC,this._overrideRedirectResult=UC}async _openPopup(e,n,r,i){var o;cr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Bg(e,n,r,_d(),i);return dR(e,s,qf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Bg(e,n,r,_d(),i);return EC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oR(e),r=new WC(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lh,{type:lh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[lh];s!==void 0&&n(!!s),ur(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return H0()||j0()||$f()}}const vR=_R;var $g="@firebase/auth",Wg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TR(t){Ii(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G0(t)},h=new JA(r,i,s,u);return iC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ii(new qr("auth-internal",e=>{const n=tc(e.getProvider("auth").getImmediate());return(r=>new wR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn($g,Wg,ER(t)),Nn($g,Wg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=5*60,SR=I0("authIdTokenMaxAge")||IR;let qg=null;const AR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SR)return;const i=n==null?void 0:n.token;qg!==i&&(qg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CR(t=Uf()){const e=Zu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rC(t,{popupRedirectResolver:vR,persistence:[xC,_C,tw]}),r=I0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=AR(s.toString());mC(n,o,()=>o(n.currentUser)),pC(n,l=>o(l))}}const i=w0("auth");return i&&sC(n,`http://${i}`),n}function RR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ZA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TR("Browser");var Hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,lw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function v(){}v.prototype=m.prototype,I.D=m.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(T,C,P){for(var S=Array(arguments.length-2),We=2;We<arguments.length;We++)S[We-2]=arguments[We];return m.prototype[C].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var C=0;16>C;++C)T[C]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(C=0;16>C;++C)T[C]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=I.g[0],v=I.g[1],C=I.g[2];var P=I.g[3],S=m+(P^v&(C^P))+T[0]+3614090360&4294967295;m=v+(S<<7&4294967295|S>>>25),S=P+(C^m&(v^C))+T[1]+3905402710&4294967295,P=m+(S<<12&4294967295|S>>>20),S=C+(v^P&(m^v))+T[2]+606105819&4294967295,C=P+(S<<17&4294967295|S>>>15),S=v+(m^C&(P^m))+T[3]+3250441966&4294967295,v=C+(S<<22&4294967295|S>>>10),S=m+(P^v&(C^P))+T[4]+4118548399&4294967295,m=v+(S<<7&4294967295|S>>>25),S=P+(C^m&(v^C))+T[5]+1200080426&4294967295,P=m+(S<<12&4294967295|S>>>20),S=C+(v^P&(m^v))+T[6]+2821735955&4294967295,C=P+(S<<17&4294967295|S>>>15),S=v+(m^C&(P^m))+T[7]+4249261313&4294967295,v=C+(S<<22&4294967295|S>>>10),S=m+(P^v&(C^P))+T[8]+1770035416&4294967295,m=v+(S<<7&4294967295|S>>>25),S=P+(C^m&(v^C))+T[9]+2336552879&4294967295,P=m+(S<<12&4294967295|S>>>20),S=C+(v^P&(m^v))+T[10]+4294925233&4294967295,C=P+(S<<17&4294967295|S>>>15),S=v+(m^C&(P^m))+T[11]+2304563134&4294967295,v=C+(S<<22&4294967295|S>>>10),S=m+(P^v&(C^P))+T[12]+1804603682&4294967295,m=v+(S<<7&4294967295|S>>>25),S=P+(C^m&(v^C))+T[13]+4254626195&4294967295,P=m+(S<<12&4294967295|S>>>20),S=C+(v^P&(m^v))+T[14]+2792965006&4294967295,C=P+(S<<17&4294967295|S>>>15),S=v+(m^C&(P^m))+T[15]+1236535329&4294967295,v=C+(S<<22&4294967295|S>>>10),S=m+(C^P&(v^C))+T[1]+4129170786&4294967295,m=v+(S<<5&4294967295|S>>>27),S=P+(v^C&(m^v))+T[6]+3225465664&4294967295,P=m+(S<<9&4294967295|S>>>23),S=C+(m^v&(P^m))+T[11]+643717713&4294967295,C=P+(S<<14&4294967295|S>>>18),S=v+(P^m&(C^P))+T[0]+3921069994&4294967295,v=C+(S<<20&4294967295|S>>>12),S=m+(C^P&(v^C))+T[5]+3593408605&4294967295,m=v+(S<<5&4294967295|S>>>27),S=P+(v^C&(m^v))+T[10]+38016083&4294967295,P=m+(S<<9&4294967295|S>>>23),S=C+(m^v&(P^m))+T[15]+3634488961&4294967295,C=P+(S<<14&4294967295|S>>>18),S=v+(P^m&(C^P))+T[4]+3889429448&4294967295,v=C+(S<<20&4294967295|S>>>12),S=m+(C^P&(v^C))+T[9]+568446438&4294967295,m=v+(S<<5&4294967295|S>>>27),S=P+(v^C&(m^v))+T[14]+3275163606&4294967295,P=m+(S<<9&4294967295|S>>>23),S=C+(m^v&(P^m))+T[3]+4107603335&4294967295,C=P+(S<<14&4294967295|S>>>18),S=v+(P^m&(C^P))+T[8]+1163531501&4294967295,v=C+(S<<20&4294967295|S>>>12),S=m+(C^P&(v^C))+T[13]+2850285829&4294967295,m=v+(S<<5&4294967295|S>>>27),S=P+(v^C&(m^v))+T[2]+4243563512&4294967295,P=m+(S<<9&4294967295|S>>>23),S=C+(m^v&(P^m))+T[7]+1735328473&4294967295,C=P+(S<<14&4294967295|S>>>18),S=v+(P^m&(C^P))+T[12]+2368359562&4294967295,v=C+(S<<20&4294967295|S>>>12),S=m+(v^C^P)+T[5]+4294588738&4294967295,m=v+(S<<4&4294967295|S>>>28),S=P+(m^v^C)+T[8]+2272392833&4294967295,P=m+(S<<11&4294967295|S>>>21),S=C+(P^m^v)+T[11]+1839030562&4294967295,C=P+(S<<16&4294967295|S>>>16),S=v+(C^P^m)+T[14]+4259657740&4294967295,v=C+(S<<23&4294967295|S>>>9),S=m+(v^C^P)+T[1]+2763975236&4294967295,m=v+(S<<4&4294967295|S>>>28),S=P+(m^v^C)+T[4]+1272893353&4294967295,P=m+(S<<11&4294967295|S>>>21),S=C+(P^m^v)+T[7]+4139469664&4294967295,C=P+(S<<16&4294967295|S>>>16),S=v+(C^P^m)+T[10]+3200236656&4294967295,v=C+(S<<23&4294967295|S>>>9),S=m+(v^C^P)+T[13]+681279174&4294967295,m=v+(S<<4&4294967295|S>>>28),S=P+(m^v^C)+T[0]+3936430074&4294967295,P=m+(S<<11&4294967295|S>>>21),S=C+(P^m^v)+T[3]+3572445317&4294967295,C=P+(S<<16&4294967295|S>>>16),S=v+(C^P^m)+T[6]+76029189&4294967295,v=C+(S<<23&4294967295|S>>>9),S=m+(v^C^P)+T[9]+3654602809&4294967295,m=v+(S<<4&4294967295|S>>>28),S=P+(m^v^C)+T[12]+3873151461&4294967295,P=m+(S<<11&4294967295|S>>>21),S=C+(P^m^v)+T[15]+530742520&4294967295,C=P+(S<<16&4294967295|S>>>16),S=v+(C^P^m)+T[2]+3299628645&4294967295,v=C+(S<<23&4294967295|S>>>9),S=m+(C^(v|~P))+T[0]+4096336452&4294967295,m=v+(S<<6&4294967295|S>>>26),S=P+(v^(m|~C))+T[7]+1126891415&4294967295,P=m+(S<<10&4294967295|S>>>22),S=C+(m^(P|~v))+T[14]+2878612391&4294967295,C=P+(S<<15&4294967295|S>>>17),S=v+(P^(C|~m))+T[5]+4237533241&4294967295,v=C+(S<<21&4294967295|S>>>11),S=m+(C^(v|~P))+T[12]+1700485571&4294967295,m=v+(S<<6&4294967295|S>>>26),S=P+(v^(m|~C))+T[3]+2399980690&4294967295,P=m+(S<<10&4294967295|S>>>22),S=C+(m^(P|~v))+T[10]+4293915773&4294967295,C=P+(S<<15&4294967295|S>>>17),S=v+(P^(C|~m))+T[1]+2240044497&4294967295,v=C+(S<<21&4294967295|S>>>11),S=m+(C^(v|~P))+T[8]+1873313359&4294967295,m=v+(S<<6&4294967295|S>>>26),S=P+(v^(m|~C))+T[15]+4264355552&4294967295,P=m+(S<<10&4294967295|S>>>22),S=C+(m^(P|~v))+T[6]+2734768916&4294967295,C=P+(S<<15&4294967295|S>>>17),S=v+(P^(C|~m))+T[13]+1309151649&4294967295,v=C+(S<<21&4294967295|S>>>11),S=m+(C^(v|~P))+T[4]+4149444226&4294967295,m=v+(S<<6&4294967295|S>>>26),S=P+(v^(m|~C))+T[11]+3174756917&4294967295,P=m+(S<<10&4294967295|S>>>22),S=C+(m^(P|~v))+T[2]+718787259&4294967295,C=P+(S<<15&4294967295|S>>>17),S=v+(P^(C|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var v=m-this.blockSize,T=this.B,C=this.h,P=0;P<m;){if(C==0)for(;P<=v;)i(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<m;)if(T[C++]=I.charCodeAt(P++),C==this.blockSize){i(this,T),C=0;break}}else for(;P<m;)if(T[C++]=I[P++],C==this.blockSize){i(this,T),C=0;break}}this.h=C,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var v=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=v&255,v/=256;for(this.u(I),I=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)I[v++]=this.g[m]>>>T&255;return I};function s(I,m){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=m(I)}function o(I,m){this.h=m;for(var v=[],T=!0,C=I.length-1;0<=C;C--){var P=I[C]|0;T&&P==m||(v[C]=P,T=!1)}this.g=v}var l={};function u(I){return-128<=I&&128>I?s(I,function(m){return new o([m|0],0>m?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(h(-I));for(var m=[],v=1,T=0;I>=v;T++)m[T]=I/v|0,v*=4294967296;return new o(m,0)}function f(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return O(f(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),T=p,C=0;C<I.length;C+=8){var P=Math.min(8,I.length-C),S=parseInt(I.substring(C,C+P),m);8>P?(P=h(Math.pow(m,P)),T=T.j(P).add(h(S))):(T=T.j(v),T=T.add(h(S)))}return T}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-O(this).m();for(var I=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(b(this))return"-"+O(this).toString(I);for(var m=h(Math.pow(I,6)),v=this,T="";;){var C=D(v,m).g;v=E(v,C.j(m));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=C,x(v))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function b(I){return I.h==-1}t.l=function(I){return I=E(this,I),b(I)?-1:x(I)?0:1};function O(I){for(var m=I.g.length,v=[],T=0;T<m;T++)v[T]=~I.g[T];return new o(v,~I.h).add(g)}t.abs=function(){return b(this)?O(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0,C=0;C<=m;C++){var P=T+(this.i(C)&65535)+(I.i(C)&65535),S=(P>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);T=S>>>16,P&=65535,S&=65535,v[C]=S<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function E(I,m){return I.add(O(m))}t.j=function(I){if(x(this)||x(I))return p;if(b(this))return b(I)?O(this).j(O(I)):O(O(this).j(I));if(b(I))return O(this.j(O(I)));if(0>this.l(A)&&0>I.l(A))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<I.g.length;C++){var P=this.i(T)>>>16,S=this.i(T)&65535,We=I.i(C)>>>16,Ge=I.i(C)&65535;v[2*T+2*C]+=S*Ge,w(v,2*T+2*C),v[2*T+2*C+1]+=P*Ge,w(v,2*T+2*C+1),v[2*T+2*C+1]+=S*We,w(v,2*T+2*C+1),v[2*T+2*C+2]+=P*We,w(v,2*T+2*C+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new o(v,0)};function w(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function _(I,m){this.g=I,this.h=m}function D(I,m){if(x(m))throw Error("division by zero");if(x(I))return new _(p,p);if(b(I))return m=D(O(I),m),new _(O(m.g),O(m.h));if(b(m))return m=D(I,O(m)),new _(O(m.g),m.h);if(30<I.g.length){if(b(I)||b(m))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=m;0>=T.l(I);)v=M(v),T=M(T);var C=$(v,1),P=$(T,1);for(T=$(T,2),v=$(v,2);!x(T);){var S=P.add(T);0>=S.l(I)&&(C=C.add(v),P=S),T=$(T,1),v=$(v,1)}return m=E(I,C.j(m)),new _(C,m)}for(C=p;0<=I.l(m);){for(v=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(v),S=P.j(m);b(S)||0<S.l(I);)v-=T,P=h(v),S=P.j(m);x(P)&&(P=g),C=C.add(P),I=E(I,S)}return new _(C,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&I.i(T);return new o(v,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|I.i(T);return new o(v,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^I.i(T);return new o(v,this.h^I.h)};function M(I){for(var m=I.g.length+1,v=[],T=0;T<m;T++)v[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(v,I.h)}function $(I,m){var v=m>>5;m%=32;for(var T=I.g.length-v,C=[],P=0;P<T;P++)C[P]=0<m?I.i(P+v)>>>m|I.i(P+v+1)<<32-m:I.i(P+v);return new o(C,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,jr=o}).apply(typeof Hg<"u"?Hg:typeof self<"u"?self:typeof window<"u"?window:{});var dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uw,wo,cw,Ul,Ed,hw,dw,fw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof dl=="object"&&dl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in d))break e;d=d[N]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,y=!1,N={next:function(){if(!y&&d<a.length){var V=d++;return{value:c(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function x(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,N,V){for(var H=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)H[Se-2]=arguments[Se];return c.prototype[N].apply(y,H)}}function b(a){const c=a.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const N=a.length||0,V=y.length||0;a.length=N+V;for(let H=0;H<V;H++)a[N+H]=y[H]}else a.push(y)}}class E{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function _(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var M=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function $(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function I(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(d in y)a[d]=y[d];for(let V=0;V<v.length;V++)d=v[V],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function S(){var a=W;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class We{constructor(){this.h=this.g=null}add(c,d){const y=Ge.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var Ge=new E(()=>new hn,a=>a.reset());class hn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let X,j=!1,W=new We,Y=()=>{const a=l.Promise.resolve(void 0);X=()=>{a.then(ge)}};var ge=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){P(d)}var c=Ge;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}j=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Wt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Ue(a,c){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(M){e:{try{D(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:qt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ue.aa.h.call(this)}}x(Ue,Ce);var qt={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),Ws=0;function Pa(a,c,d,y,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=N,this.key=++Ws,this.da=this.fa=!1}function Oi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mt(a){this.src=a,this.g={},this.h=0}Mt.prototype.add=function(a,c,d,y,N){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var H=Li(a,c,y,N);return-1<H?(c=a[H],d||(c.fa=!1)):(c=new Pa(c,this.src,V,!!y,N),c.fa=d,a.push(c)),c};function Mi(a,c){var d=c.type;if(d in a.g){var y=a.g[d],N=Array.prototype.indexOf.call(y,c,void 0),V;(V=0<=N)&&Array.prototype.splice.call(y,N,1),V&&(Oi(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Li(a,c,d,y){for(var N=0;N<a.length;++N){var V=a[N];if(!V.da&&V.listener==c&&V.capture==!!d&&V.ha==y)return N}return-1}var qs="closure_lm_"+(1e6*Math.random()|0),Hs={};function Fi(a,c,d,y,N){if(Array.isArray(c)){for(var V=0;V<c.length;V++)Fi(a,c[V],d,y,N);return null}return d=ji(d),a&&a[kt]?a.K(c,d,h(y)?!!y.capture:!1,N):Ui(a,c,d,!1,y,N)}function Ui(a,c,d,y,N,V){if(!c)throw Error("Invalid event type");var H=h(N)?!!N.capture:!!N,Se=Qs(a);if(Se||(a[qs]=Se=new Mt(a)),d=Se.add(c,d,y,H,V),d.proxy)return d;if(y=Gs(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)Wt||(N=H),N===void 0&&(N=!1),a.addEventListener(c.toString(),y,N);else if(a.attachEvent)a.attachEvent(ka(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Gs(){function a(d){return c.call(a.src,a.listener,d)}const c=_c;return a}function Ks(a,c,d,y,N){if(Array.isArray(c))for(var V=0;V<c.length;V++)Ks(a,c[V],d,y,N);else y=h(y)?!!y.capture:!!y,d=ji(d),a&&a[kt]?(a=a.i,c=String(c).toString(),c in a.g&&(V=a.g[c],d=Li(V,d,y,N),-1<d&&(Oi(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[c],a.h--)))):a&&(a=Qs(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Li(c,d,y,N)),(d=-1<a?c[a]:null)&&ni(d))}function ni(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[kt])Mi(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(ka(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Qs(c))?(Mi(d,a),d.h==0&&(d.src=null,c[qs]=null)):Oi(a)}}}function ka(a){return a in Hs?Hs[a]:Hs[a]="on"+a}function _c(a,c){if(a.da)a=!0;else{c=new Ue(c,this);var d=a.listener,y=a.ha||a.src;a.fa&&ni(a),a=d.call(y,c)}return a}function Qs(a){return a=a[qs],a instanceof Mt?a:null}var Xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ji(a){return typeof a=="function"?a:(a[Xs]||(a[Xs]=function(c){return a.handleEvent(c)}),a[Xs])}function it(){_e.call(this),this.i=new Mt(this),this.M=this,this.F=null}x(it,_e),it.prototype[kt]=!0,it.prototype.removeEventListener=function(a,c,d,y){Ks(this,a,c,d,y)};function ut(a,c){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new Ce(c,a);else if(c instanceof Ce)c.target=c.target||a;else{var N=c;c=new Ce(y,a),T(c,N)}if(N=!0,d)for(var V=d.length-1;0<=V;V--){var H=c.g=d[V];N=zi(H,y,!0,c)&&N}if(H=c.g=a,N=zi(H,y,!0,c)&&N,N=zi(H,y,!1,c)&&N,d)for(V=0;V<d.length;V++)H=c.g=d[V],N=zi(H,y,!1,c)&&N}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],y=0;y<d.length;y++)Oi(d[y]);delete a.g[c],a.h--}}this.F=null},it.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},it.prototype.L=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function zi(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,V=0;V<c.length;++V){var H=c[V];if(H&&!H.da&&H.capture==d){var Se=H.listener,ct=H.ha||H.src;H.fa&&Mi(a.i,H),N=Se.call(ct,y)!==!1&&N}}return N&&!y.defaultPrevented}function xa(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Na(a){a.g=xa(()=>{a.g=null,a.i&&(a.i=!1,Na(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class vc extends _e{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Na(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ri(a){_e.call(this),this.h=a,this.g={}}x(ri,_e);var Da=[];function ba(a){$(a.g,function(c,d){this.g.hasOwnProperty(d)&&ni(c)},a),a.g={}}ri.prototype.N=function(){ri.aa.N.call(this),ba(this)},ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var k=l.JSON.stringify,R=l.JSON.parse,L=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Z(){}Z.prototype.h=null;function re(a){return a.h||(a.h=a.i())}function ae(){}var te={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function le(){Ce.call(this,"d")}x(le,Ce);function fe(){Ce.call(this,"c")}x(fe,Ce);var Ie={},xt=null;function q(){return xt=xt||new it}Ie.La="serverreachability";function Lt(a){Ce.call(this,Ie.La,a)}x(Lt,Ce);function yt(a){const c=q();ut(c,new Lt(c))}Ie.STAT_EVENT="statevent";function $n(a,c){Ce.call(this,Ie.STAT_EVENT,a),this.stat=c}x($n,Ce);function je(a){const c=q();ut(c,new $n(c,a))}Ie.Ma="timingevent";function Wn(a,c){Ce.call(this,Ie.Ma,a),this.size=c}x(Wn,Ce);function ve(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ee(){this.g=!0}Ee.prototype.xa=function(){this.g=!1};function Je(a,c,d,y,N,V){a.info(function(){if(a.g)if(V)for(var H="",Se=V.split("&"),ct=0;ct<Se.length;ct++){var ye=Se[ct].split("=");if(1<ye.length){var _t=ye[0];ye=ye[1];var vt=_t.split("_");H=2<=vt.length&&vt[1]=="type"?H+(_t+"="+ye+"&"):H+(_t+"=redacted&")}}else H=null;else H=V;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+c+`
`+d+`
`+H})}function Ne(a,c,d,y,N,V,H){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+c+`
`+d+`
`+V+" "+H})}function ze(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ys(a,d)+(y?" "+y:"")})}function qn(a,c){a.info(function(){return"TIMEOUT: "+c})}Ee.prototype.info=function(){};function Ys(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var H=1;H<N.length;H++)N[H]=""}}}}return k(d)}catch{return c}}var dn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gn;function Bi(){}x(Bi,Z),Bi.prototype.g=function(){return new XMLHttpRequest},Bi.prototype.i=function(){return{}},Gn=new Bi;function Sn(a,c,d,y){this.j=a,this.i=c,this.l=d,this.R=y||1,this.U=new ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Va}function Va(){this.i=null,this.g="",this.h=!1}var Oa={},Js={};function wc(a,c,d){a.L=1,a.v=Ua(Kn(c)),a.m=d,a.P=!0,Rp(a,null)}function Rp(a,c){a.F=Date.now(),Ma(a),a.A=Kn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),zp(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Va,a.g=sm(a.j,d?c:null,!a.m),0<a.O&&(a.M=new vc(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Da[0]=N.toString()),N=Da);for(var V=0;V<N.length;V++){var H=Fi(d,N[V],y||c.handleEvent,!1,c.h||c);if(!H)break;c.g[H.key]=H}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),yt(),Je(a.i,a.u,a.A,a.l,a.R,a.m)}Sn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Qn(a)==3?c.j():this.Y(a)},Sn.prototype.Y=function(a){try{if(a==this.g)e:{const vt=Qn(this.g);var c=this.g.Ba();const qi=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Kp(this.g)))){this.J||vt!=4||c==7||(c==8||0>=qi?yt(3):yt(2)),Ec(this);var d=this.g.Z();this.X=d;t:if(Pp(this)){var y=Kp(this.g);a="";var N=y.length,V=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ii(this),Zs(this);var H="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(V&&c==N-1)});y.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=d==200,Ne(this.i,this.u,this.A,this.l,this.R,vt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,ct=this.g;if((Se=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Se)){var ye=Se;break t}}ye=null}if(d=ye)ze(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tc(this,d);else{this.o=!1,this.s=3,je(12),ii(this),Zs(this);break e}}if(this.P){d=!0;let fn;for(;!this.J&&this.C<H.length;)if(fn=GE(this,H),fn==Js){vt==4&&(this.s=4,je(14),d=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==Oa){this.s=4,je(15),ze(this.i,this.l,H,"[Invalid Chunk]"),d=!1;break}else ze(this.i,this.l,fn,null),Tc(this,fn);if(Pp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||H.length!=0||this.h.h||(this.s=1,je(16),d=!1),this.o=this.o&&d,!d)ze(this.i,this.l,H,"[Invalid Chunked Response]"),ii(this),Zs(this);else if(0<H.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Pc(_t),_t.M=!0,je(11))}}else ze(this.i,this.l,H,null),Tc(this,H);vt==4&&ii(this),this.o&&!this.J&&(vt==4?tm(this.j,this):(this.o=!1,Ma(this)))}else cT(this.g),d==400&&0<H.indexOf("Unknown SID")?(this.s=3,je(12)):(this.s=0,je(13)),ii(this),Zs(this)}}}catch{}finally{}};function Pp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function GE(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?Js:(d=Number(c.substring(d,y)),isNaN(d)?Oa:(y+=1,y+d>c.length?Js:(c=c.slice(y,y+d),a.C=y+d,c)))}Sn.prototype.cancel=function(){this.J=!0,ii(this)};function Ma(a){a.S=Date.now()+a.I,kp(a,a.I)}function kp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ve(g(a.ba,a),c)}function Ec(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qn(this.i,this.A),this.L!=2&&(yt(),je(17)),ii(this),this.s=2,Zs(this)):kp(this,this.S-a)};function Zs(a){a.j.G==0||a.J||tm(a.j,a)}function ii(a){Ec(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,ba(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Tc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ic(d.h,a))){if(!a.K&&Ic(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)qa(d),$a(d);else break e;Rc(d),je(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=ve(g(d.Za,d),6e3));if(1>=Dp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else oi(d,11)}else if((a.K||d.g==a)&&qa(d),!w(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let ye=N[c];if(d.T=ye[0],ye=ye[1],d.G==2)if(ye[0]=="c"){d.K=ye[1],d.ia=ye[2];const _t=ye[3];_t!=null&&(d.la=_t,d.j.info("VER="+d.la));const vt=ye[4];vt!=null&&(d.Aa=vt,d.j.info("SVER="+d.Aa));const qi=ye[5];qi!=null&&typeof qi=="number"&&0<qi&&(y=1.5*qi,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const fn=a.g;if(fn){const Ga=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ga){var V=y.h;V.g||Ga.indexOf("spdy")==-1&&Ga.indexOf("quic")==-1&&Ga.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Sc(V,V.h),V.h=null))}if(y.D){const kc=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;kc&&(y.ya=kc,Re(y.I,y.D,kc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var H=a;if(y.qa=im(y,y.J?y.ia:null,y.W),H.K){bp(y.h,H);var Se=H,ct=y.L;ct&&(Se.I=ct),Se.B&&(Ec(Se),Ma(Se)),y.g=H}else Zp(y);0<d.i.length&&Wa(d)}else ye[0]!="stop"&&ye[0]!="close"||oi(d,7);else d.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?oi(d,7):Cc(d):ye[0]!="noop"&&d.l&&d.l.ta(ye),d.v=0)}}yt(4)}catch{}}var KE=class{constructor(a,c){this.g=a,this.map=c}};function xp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Np(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Dp(a){return a.h?1:a.g?a.g.size:0}function Ic(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Sc(a,c){a.g?a.g.add(c):a.h=c}function bp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}xp.prototype.cancel=function(){if(this.i=Vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return b(a.i)}function QE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,y=0;y<d;y++)c.push(a[y]);return c}c=[],d=0;for(y in a)c[d++]=a[y];return c}function XE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const y in a)c[d++]=y;return c}}}function Op(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=XE(a),y=QE(a),N=y.length,V=0;V<N;V++)c.call(void 0,y[V],d&&d[V],a)}var Mp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),N=null;if(0<=y){var V=a[d].substring(0,y);N=a[d].substring(y+1)}else V=a[d];c(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function si(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof si){this.h=a.h,La(this,a.j),this.o=a.o,this.g=a.g,Fa(this,a.s),this.l=a.l;var c=a.i,d=new no;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Lp(this,d),this.m=a.m}else a&&(c=String(a).match(Mp))?(this.h=!1,La(this,c[1]||"",!0),this.o=eo(c[2]||""),this.g=eo(c[3]||"",!0),Fa(this,c[4]),this.l=eo(c[5]||"",!0),Lp(this,c[6]||"",!0),this.m=eo(c[7]||"")):(this.h=!1,this.i=new no(null,this.h))}si.prototype.toString=function(){var a=[],c=this.j;c&&a.push(to(c,Fp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(to(c,Fp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(to(d,d.charAt(0)=="/"?eT:ZE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",to(d,nT)),a.join("")};function Kn(a){return new si(a)}function La(a,c,d){a.j=d?eo(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Fa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Lp(a,c,d){c instanceof no?(a.i=c,rT(a.i,a.h)):(d||(c=to(c,tT)),a.i=new no(c,a.h))}function Re(a,c,d){a.i.set(c,d)}function Ua(a){return Re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function eo(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function to(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,JE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function JE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fp=/[#\/\?@]/g,ZE=/[#\?:]/g,eT=/[#\?]/g,tT=/[#\?@]/g,nT=/#/g;function no(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function pr(a){a.g||(a.g=new Map,a.h=0,a.i&&YE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=no.prototype,t.add=function(a,c){pr(this),this.i=null,a=$i(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Up(a,c){pr(a),c=$i(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function jp(a,c){return pr(a),c=$i(a,c),a.g.has(c)}t.forEach=function(a,c){pr(this),this.g.forEach(function(d,y){d.forEach(function(N){a.call(c,N,y,this)},this)},this)},t.na=function(){pr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const N=a[y];for(let V=0;V<N.length;V++)d.push(c[y])}return d},t.V=function(a){pr(this);let c=[];if(typeof a=="string")jp(this,a)&&(c=c.concat(this.g.get($i(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return pr(this),this.i=null,a=$i(this,a),jp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function zp(a,c,d){Up(a,c),0<d.length&&(a.i=null,a.g.set($i(a,c),b(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const V=encodeURIComponent(String(y)),H=this.V(y);for(y=0;y<H.length;y++){var N=V;H[y]!==""&&(N+="="+encodeURIComponent(String(H[y]))),a.push(N)}}return this.i=a.join("&")};function $i(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function rT(a,c){c&&!a.j&&(pr(a),a.i=null,a.g.forEach(function(d,y){var N=y.toLowerCase();y!=N&&(Up(this,y),zp(this,N,d))},a)),a.j=c}function iT(a,c){const d=new Ee;if(l.Image){const y=new Image;y.onload=A(mr,d,"TestLoadImage: loaded",!0,c,y),y.onerror=A(mr,d,"TestLoadImage: error",!1,c,y),y.onabort=A(mr,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=A(mr,d,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function sT(a,c){const d=new Ee,y=new AbortController,N=setTimeout(()=>{y.abort(),mr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(N),V.ok?mr(d,"TestPingServer: ok",!0,c):mr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),mr(d,"TestPingServer: error",!1,c)})}function mr(a,c,d,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(d)}catch{}}function oT(){this.g=new L}function aT(a,c,d){const y=d||"";try{Op(a,function(N,V){let H=N;h(N)&&(H=k(N)),c.push(y+V+"="+encodeURIComponent(H))})}catch(N){throw c.push(y+"type="+encodeURIComponent("_badmap")),N}}function ja(a){this.l=a.Ub||null,this.j=a.eb||!1}x(ja,Z),ja.prototype.g=function(){return new za(this.l,this.j)},ja.prototype.i=function(a){return function(){return a}}({});function za(a,c){it.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(za,it),t=za.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,io(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ro(this):io(this),this.readyState==3&&Bp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ro(this))},t.Qa=function(a){this.g&&(this.response=a,ro(this))},t.ga=function(){this.g&&ro(this)};function ro(a){a.readyState=4,a.l=null,a.j=null,a.v=null,io(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function io(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $p(a){let c="";return $(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function Ac(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=$p(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Re(a,c,d))}function Be(a){it.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Be,it);var lT=/^https?$/i,uT=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gn.g(),this.v=this.o?re(this.o):re(Gn),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){Wp(this,V);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)d.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())d.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uT,c,void 0))||y||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,H]of d)this.g.setRequestHeader(V,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gp(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Wp(this,V)}};function Wp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,qp(a),Ba(a)}function qp(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ut(this,"complete"),ut(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hp(this):this.bb())},t.bb=function(){Hp(this)};function Hp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Qn(a)!=4||a.Z()!=2)){if(a.u&&Qn(a)==4)xa(a.Ea,0,a);else if(ut(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=H===0){var N=String(a.D).match(Mp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),y=!lT.test(N?N.toLowerCase():"")}d=y}if(d)ut(a,"complete"),ut(a,"success");else{a.m=6;try{var V=2<Qn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",qp(a)}}finally{Ba(a)}}}}function Ba(a,c){if(a.g){Gp(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ut(a,"ready");try{d.onreadystatechange=y}catch{}}}function Gp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),R(c)}};function Kp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cT(a){const c={};a=(a.g&&2<=Qn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var d=C(a[y]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=c[N]||[];c[N]=V,V.push(d)}I(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function so(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Qp(a){this.Aa=0,this.i=[],this.j=new Ee,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=so("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=so("baseRetryDelayMs",5e3,a),this.cb=so("retryDelaySeedMs",1e4,a),this.Wa=so("forwardChannelMaxRetries",2,a),this.wa=so("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new xp(a&&a.concurrentRequestLimit),this.Da=new oT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,y){je(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=im(this,null,this.W),Wa(this)};function Cc(a){if(Xp(a),a.G==3){var c=a.U++,d=Kn(a.I);if(Re(d,"SID",a.K),Re(d,"RID",c),Re(d,"TYPE","terminate"),oo(a,d),c=new Sn(a,a.j,c),c.L=2,c.v=Ua(Kn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=sm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ma(c)}rm(a)}function $a(a){a.g&&(Pc(a),a.g.cancel(),a.g=null)}function Xp(a){$a(a),a.u&&(l.clearTimeout(a.u),a.u=null),qa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Wa(a){if(!Np(a.h)&&!a.s){a.s=!0;var c=a.Ga;X||Y(),j||(X(),j=!0),W.add(c,a),a.B=0}}function hT(a,c){return Dp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ve(g(a.Ga,a,c),nm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Sn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=m(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Jp(this,N,c),d=Kn(this.I),Re(d,"RID",a),Re(d,"CVER",22),this.D&&Re(d,"X-HTTP-Session-Id",this.D),oo(this,d),V&&(this.O?c="headers="+encodeURIComponent(String($p(V)))+"&"+c:this.m&&Ac(d,this.m,V)),Sc(this.h,N),this.Ua&&Re(d,"TYPE","init"),this.P?(Re(d,"$req",c),Re(d,"SID","null"),N.T=!0,wc(N,d,null)):wc(N,d,c),this.G=2}}else this.G==3&&(a?Yp(this,a):this.i.length==0||Np(this.h)||Yp(this))};function Yp(a,c){var d;c?d=c.l:d=a.U++;const y=Kn(a.I);Re(y,"SID",a.K),Re(y,"RID",d),Re(y,"AID",a.T),oo(a,y),a.m&&a.o&&Ac(y,a.m,a.o),d=new Sn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Jp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Sc(a.h,d),wc(d,y,c)}function oo(a,c){a.H&&$(a.H,function(d,y){Re(c,y,d)}),a.l&&Op({},function(d,y){Re(c,y,d)})}function Jp(a,c,d){d=Math.min(a.i.length,d);var y=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let V=-1;for(;;){const H=["count="+d];V==-1?0<d?(V=N[0].g,H.push("ofs="+V)):V=0:H.push("ofs="+V);let Se=!0;for(let ct=0;ct<d;ct++){let ye=N[ct].g;const _t=N[ct].map;if(ye-=V,0>ye)V=Math.max(0,N[ct].g-100),Se=!1;else try{aT(_t,H,"req"+ye+"_")}catch{y&&y(_t)}}if(Se){y=H.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,y}function Zp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;X||Y(),j||(X(),j=!0),W.add(c,a),a.v=0}}function Rc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ve(g(a.Fa,a),nm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,em(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ve(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,je(10),$a(this),em(this))};function Pc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function em(a){a.g=new Sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Kn(a.qa);Re(c,"RID","rpc"),Re(c,"SID",a.K),Re(c,"AID",a.T),Re(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Re(c,"TO",a.ja),Re(c,"TYPE","xmlhttp"),oo(a,c),a.m&&a.o&&Ac(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ua(Kn(c)),d.m=null,d.P=!0,Rp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,$a(this),Rc(this),je(19))};function qa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function tm(a,c){var d=null;if(a.g==c){qa(a),Pc(a),a.g=null;var y=2}else if(Ic(a.h,c))d=c.D,bp(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;y=q(),ut(y,new Wn(y,d)),Wa(a)}else Zp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(y==1&&hT(a,c)||y==2&&Rc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:oi(a,5);break;case 4:oi(a,10);break;case 3:oi(a,6);break;default:oi(a,2)}}}function nm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function oi(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),y=a.Xa;const N=!y;y=new si(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||La(y,"https"),Ua(y),N?iT(y.toString(),d):sT(y.toString(),d)}else je(2);a.G=0,a.l&&a.l.sa(c),rm(a),Xp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function rm(a){if(a.G=0,a.ka=[],a.l){const c=Vp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function im(a,c,d){var y=d instanceof si?Kn(d):new si(d);if(y.g!="")c&&(y.g=c+"."+y.g),Fa(y,y.s);else{var N=l.location;y=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var V=new si(null);y&&La(V,y),c&&(V.g=c),N&&Fa(V,N),d&&(V.l=d),y=V}return d=a.D,c=a.ya,d&&c&&Re(y,d,c),Re(y,"VER",a.la),oo(a,y),y}function sm(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Be(new ja({eb:d})):new Be(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function om(){}t=om.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ha(){}Ha.prototype.g=function(a,c){return new Ht(a,c)};function Ht(a,c){it.call(this),this.g=new Qp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Wi(this)}x(Ht,it),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Cc(this.g)},Ht.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=k(a),a=d);c.i.push(new KE(c.Ya++,a)),c.G==3&&Wa(c)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Cc(this.g),delete this.g,Ht.aa.N.call(this)};function am(a){le.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}x(am,le);function lm(){fe.call(this),this.status=1}x(lm,fe);function Wi(a){this.g=a}x(Wi,om),Wi.prototype.ua=function(){ut(this.g,"a")},Wi.prototype.ta=function(a){ut(this.g,new am(a))},Wi.prototype.sa=function(a){ut(this.g,new lm)},Wi.prototype.ra=function(){ut(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,fw=function(){return new Ha},dw=function(){return q()},hw=Ie,Ed={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dn.NO_ERROR=0,dn.TIMEOUT=8,dn.HTTP_ERROR=6,Ul=dn,Hn.COMPLETE="complete",cw=Hn,ae.EventType=te,te.OPEN="a",te.CLOSE="b",te.ERROR="c",te.MESSAGE="d",it.prototype.listen=it.prototype.K,wo=ae,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,uw=Be}).apply(typeof dl<"u"?dl:typeof self<"u"?self:typeof window<"u"?window:{});const Gg="@firebase/firestore",Kg="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Lf("@firebase/firestore");function Ki(){return Ai.logLevel}function G(t,...e){if(Ai.logLevel<=ce.DEBUG){const n=e.map(Gf);Ai.debug(`Firestore (${Us}): ${t}`,...n)}}function hr(t,...e){if(Ai.logLevel<=ce.ERROR){const n=e.map(Gf);Ai.error(`Firestore (${Us}): ${t}`,...n)}}function ks(t,...e){if(Ai.logLevel<=ce.WARN){const n=e.map(Gf);Ai.warn(`Firestore (${Us}): ${t}`,...n)}}function Gf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,pw(t,r,n)}function pw(t,e,n){let r=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw hr(r),new Error(r)}function we(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||pw(e,i,r)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class kR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xR{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new mw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new St(e)}}class NR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class DR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new NR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){we(this.o===void 0,3512);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Qg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=VR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Td(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return uh(i)===uh(s)?he(i,s):uh(i)?1:-1}return he(t.length,e.length)}const OR=55296,MR=57343;function uh(t){const e=t.charCodeAt(0);return e>=OR&&e<=MR}function xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="__name__";class Rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ne(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Rn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return he(e.length,n.length)}static compareSegments(e,n){const r=Rn.isNumericId(e),i=Rn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Rn.extractNumericId(e).compare(Rn.extractNumericId(n)):Td(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jr.fromString(e.substring(4,e.length-2))}}class Oe extends Rn{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const LR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Rn{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return LR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xg}static keyField(){return new ft([Xg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new J(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new J(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Oe.fromString(e))}static fromName(e){return new ee(Oe.fromString(e).popFirst(5))}static empty(){return new ee(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t,e,n){if(!n)throw new J(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UR(t,e,n,r){if(e===!0&&r===!0)throw new J(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yg(t){if(!ee.isDocumentKey(t))throw new J(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Qf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne(12329,{type:typeof t})}function Br(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qf(t);throw new J(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ia(t,e){if(!gw(t))throw new J(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new J(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=-62135596800,Zg=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Zg);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Jg)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zg}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ia(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:Ye("string",ke._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new ke(0,0))}static max(){return new se(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=-1;function jR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Gr(i,ee.empty(),e)}function zR(t){return new Gr(t.readTime,t.key,ia)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(se.min(),ee.empty(),ia)}static max(){return new Gr(se.max(),ee.empty(),ia)}}function BR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==$R)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ic.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=-1;function sc(t){return t==null}function Iu(t){return t===0&&1/t==-1/0}function HR(t){return typeof t=="number"&&Number.isInteger(t)&&!Iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="";function GR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ey(e)),e=KR(t.get(n),e);return ey(e)}function KR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case yw:n+="";break;default:n+=s}}return n}function ey(t){return t+yw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=s??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ny(this.data.getIterator())}getIteratorFrom(e){return new ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new vn([])}unionWith(e){let n=new rt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vw("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const QR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(we(!!t,39018),typeof t=="string"){let e=0;const n=QR.exec(t);if(we(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="server_timestamp",Ew="__type__",Tw="__previous_value__",Iw="__local_write_time__";function Yf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Ew])==null?void 0:r.stringValue)===ww}function oc(t){const e=t.mapValue.fields[Tw];return Yf(e)?oc(e):e}function sa(t){const e=Kr(t.mapValue.fields[Iw].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Su="(default)";class oa{constructor(e,n){this.projectId=e,this.database=n||Su}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database===Su}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="__type__",YR="__max__",pl={mapValue:{}},Aw="__vector__",Au="value";function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yf(t)?4:ZR(t)?9007199254740991:JR(t)?10:11:ne(28295,{value:t})}function Fn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kr(i.timestampValue),l=Kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Qr(i.bytesValue).isEqual(Qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),l=qe(s.doubleValue);return o===l?Iu(o)===Iu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ty(o)!==ty(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Fn(o[u],l[u])))return!1;return!0}(t,e);default:return ne(52216,{left:t})}}function aa(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=qe(s.integerValue||s.doubleValue),u=qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ry(t.timestampValue,e.timestampValue);case 4:return ry(sa(t),sa(e));case 5:return Td(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Qr(s),u=Qr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=he(l[h],u[h]);if(f!==0)return f}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(qe(s.latitude),qe(o.latitude));return l!==0?l:he(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return iy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,A,x,b;const l=s.fields||{},u=o.fields||{},h=(g=l[Au])==null?void 0:g.arrayValue,f=(A=u[Au])==null?void 0:A.arrayValue,p=he(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((b=f==null?void 0:f.values)==null?void 0:b.length)||0);return p!==0?p:iy(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===pl.mapValue&&o===pl.mapValue)return 0;if(s===pl.mapValue)return 1;if(o===pl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Td(u[p],f[p]);if(g!==0)return g;const A=Ns(l[u[p]],h[f[p]]);if(A!==0)return A}return he(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ne(23264,{he:n})}}function ry(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Kr(t),r=Kr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function iy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ns(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function Ds(t){return Id(t)}function Id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Id(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Id(n.fields[o])}`;return i+"}"}(t.mapValue):ne(61005,{value:t})}function jl(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oc(t);return e?16+jl(e):16;case 5:return 2*t.stringValue.length;case 6:return Qr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+jl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ni(r.fields,(s,o)=>{i+=s.length+jl(o)}),i}(t.mapValue);default:throw ne(13486,{value:t})}}function Sd(t){return!!t&&"integerValue"in t}function Jf(t){return!!t&&"arrayValue"in t}function sy(t){return!!t&&"nullValue"in t}function oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zl(t){return!!t&&"mapValue"in t}function JR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Sw])==null?void 0:r.stringValue)===Aw}function Oo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oo(t.arrayValue.values[n]);return e}return{...t}}function ZR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===YR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oo(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Oo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rn(Oo(this.value))}}function Cw(t){const e=[];return Ni(t.fields,(n,r)=>{const i=new ft([n]);if(zl(r)){const s=Cw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ct(e,0,se.min(),se.min(),se.min(),rn.empty(),0)}static newFoundDocument(e,n,r,i){return new Ct(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Ct(e,2,n,se.min(),se.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,se.min(),se.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.position=e,this.inclusive=n}}function ay(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ly(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n="asc"){this.field=e,this.dir=n}}function eP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{}class et extends Rw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nP(e,n,r):n==="array-contains"?new sP(e,r):n==="in"?new oP(e,r):n==="not-in"?new aP(e,r):n==="array-contains-any"?new lP(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rP(e,r):new iP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ns(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends Rw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Un(e,n)}matches(e){return Pw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pw(t){return t.op==="and"}function kw(t){return tP(t)&&Pw(t)}function tP(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function Ad(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(kw(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function xw(t,e){return t instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Fn(r.value,i.value)}(t,e):t instanceof Un?function(r,i){return i instanceof Un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&xw(o,i.filters[l]),!0):!1}(t,e):void ne(19439)}function Nw(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Ds(n.value)}`}(t):t instanceof Un?function(n){return n.op.toString()+" {"+n.getFilters().map(Nw).join(" ,")+"}"}(t):"Filter"}class nP extends et{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class rP extends et{constructor(e,n){super(e,"in",n),this.keys=Dw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iP extends et{constructor(e,n){super(e,"not-in",n),this.keys=Dw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class sP extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jf(n)&&aa(n.arrayValue,this.value)}}class oP extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class aP extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!aa(this.value.arrayValue,n)}}class lP extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function uy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uP(t,e,n,r,i,s,o)}function Zf(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.Te=n}return e.Te}function ep(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ly(t.startAt,e.startAt)&&ly(t.endAt,e.endAt)}function Cd(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function cP(t,e,n,r,i,s,o,l){return new ac(t,e,n,r,i,s,o,l)}function lc(t){return new ac(t)}function cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hP(t){return t.collectionGroup!==null}function Mo(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(ft.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Ru(s,r))}),n.has(ft.keyField().canonicalString())||e.Ie.push(new Ru(ft.keyField(),r))}return e.Ie}function Vn(t){const e=oe(t);return e.Ee||(e.Ee=dP(e,Mo(t))),e.Ee}function dP(t,e){if(t.limitType==="F")return uy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ru(i.field,s)});const n=t.endAt?new Cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cu(t.startAt.position,t.startAt.inclusive):null;return uy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rd(t,e,n){return new ac(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return ep(Vn(t),Vn(e))&&t.limitType===e.limitType}function bw(t){return`${Zf(Vn(t))}|lt:${t.limitType}`}function Qi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Nw(i)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ds(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ds(i)).join(",")),`Target(${r})`}(Vn(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ee.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=ay(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Mo(r),i)||r.endAt&&!function(o,l,u){const h=ay(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Mo(r),i))}(t,e)}function fP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vw(t){return(e,n)=>{let r=!1;for(const i of Mo(t)){const s=pP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function pP(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ns(u,h):ne(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _w(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=new Fe(ee.comparator);function dr(){return mP}const Ow=new Fe(ee.comparator);function Eo(...t){let e=Ow;for(const n of t)e=e.insert(n.key,n);return e}function Mw(t){let e=Ow;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fi(){return Lo()}function Lw(){return Lo()}function Lo(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const gP=new Fe(ee.comparator),yP=new rt(ee.comparator);function de(...t){let e=yP;for(const n of t)e=e.add(n);return e}const _P=new rt(he);function vP(){return _P}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function Fw(t){return{integerValue:""+t}}function wP(t,e){return HR(e)?Fw(e):tp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this._=void 0}}function EP(t,e,n){return t instanceof la?function(i,s){const o={fields:{[Ew]:{stringValue:ww},[Iw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yf(s)&&(s=oc(s)),s&&(o.fields[Tw]=s),{mapValue:o}}(n,e):t instanceof ua?jw(t,e):t instanceof ca?zw(t,e):function(i,s){const o=Uw(i,s),l=hy(o)+hy(i.Ae);return Sd(o)&&Sd(i.Ae)?Fw(l):tp(i.serializer,l)}(t,e)}function TP(t,e,n){return t instanceof ua?jw(t,e):t instanceof ca?zw(t,e):n}function Uw(t,e){return t instanceof Pu?function(r){return Sd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class la extends hc{}class ua extends hc{constructor(e){super(),this.elements=e}}function jw(t,e){const n=Bw(e);for(const r of t.elements)n.some(i=>Fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ca extends hc{constructor(e){super(),this.elements=e}}function zw(t,e){let n=Bw(e);for(const r of t.elements)n=n.filter(i=>!Fn(i,r));return{arrayValue:{values:n}}}class Pu extends hc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function hy(t){return qe(t.integerValue||t.doubleValue)}function Bw(t){return Jf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n){this.field=e,this.transform=n}}function SP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ua&&i instanceof ua||r instanceof ca&&i instanceof ca?xs(r.elements,i.elements,Fn):r instanceof Pu&&i instanceof Pu?Fn(r.Ae,i.Ae):r instanceof la&&i instanceof la}(t.transform,e.transform)}class AP{constructor(e,n){this.version=e,this.transformResults=n}}class rr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rr}static exists(e){return new rr(void 0,e)}static updateTime(e){return new rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dc{}function $w(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qw(t.key,rr.none()):new Sa(t.key,t.data,rr.none());{const n=t.data,r=rn.empty();let i=new rt(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new bi(t.key,r,new vn(i.toArray()),rr.none())}}function CP(t,e,n){t instanceof Sa?function(i,s,o){const l=i.value.clone(),u=fy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof bi?function(i,s,o){if(!Bl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=fy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ww(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,r){return t instanceof Sa?function(s,o,l,u){if(!Bl(s.precondition,o))return l;const h=s.value.clone(),f=py(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof bi?function(s,o,l,u){if(!Bl(s.precondition,o))return l;const h=py(s.fieldTransforms,u,o),f=o.data;return f.setAll(Ww(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Bl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function RP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Uw(r.transform,i||null);s!=null&&(n===null&&(n=rn.empty()),n.set(r.field,s))}return n||null}function dy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xs(r,i,(s,o)=>SP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Sa extends dc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bi extends dc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ww(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fy(t,e,n){const r=new Map;we(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,TP(o,l,n[i]))}return r}function py(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,EP(s,o,e))}return r}class qw extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PP extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&CP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Lw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=$w(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>dy(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>dy(n,r))}}class np{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return gP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new np(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,pe;function DP(t){switch(t){case U.OK:return ne(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ne(15467,{code:t})}}function Hw(t){if(t===void 0)return hr("GRPC error has no .code"),U.UNKNOWN;switch(t){case Qe.OK:return U.OK;case Qe.CANCELLED:return U.CANCELLED;case Qe.UNKNOWN:return U.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return U.INTERNAL;case Qe.UNAVAILABLE:return U.UNAVAILABLE;case Qe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Qe.NOT_FOUND:return U.NOT_FOUND;case Qe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Qe.ABORTED:return U.ABORTED;case Qe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Qe.DATA_LOSS:return U.DATA_LOSS;default:return ne(39323,{code:t})}}(pe=Qe||(Qe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=new jr([4294967295,4294967295],0);function my(t){const e=bP().encode(t),n=new lw;return n.update(e),new Uint8Array(n.digest())}function gy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new jr([n,r],0),new jr([i,s],0)]}class rp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new To(`Invalid padding: ${n}`);if(r<0)throw new To(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new To(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new To(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=jr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(jr.fromNumber(r)));return i.compare(VP)===1&&(i=new jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=my(e),[r,i]=gy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=my(e),[r,i]=gy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class To extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(se.min(),i,new Fe(he),dr(),de())}}class Aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Aa(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Gw{constructor(e,n){this.targetId=e,this.Ce=n}}class Kw{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class yy{constructor(){this.ve=0,this.Fe=_y(),this.Me=gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne(38017,{changeType:s})}}),new Aa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=_y()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class OP{constructor(e){this.Ge=e,this.ze=new Map,this.je=dr(),this.Je=ml(),this.He=ml(),this.Ye=new Fe(he)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Cd(s))if(r===0){const o=new ee(s.path);this.et(n,o,Ct.newNoDocument(o,se.min()))}else we(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Qr(r).toUint8Array()}catch(u){if(u instanceof vw)return ks("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new rp(o,i,s)}catch(u){return ks(u instanceof To?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Cd(l.target)){const u=new ee(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ct.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=de();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new fc(e,n,this.Ye,this.je,r);return this.je=dr(),this.Je=ml(),this.He=ml(),this.Ye=new Fe(he),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new yy,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new rt(he),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new rt(he),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new yy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ml(){return new Fe(ee.comparator)}function _y(){return new Fe(ee.comparator)}const MP={asc:"ASCENDING",desc:"DESCENDING"},LP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},FP={and:"AND",or:"OR"};class UP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pd(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jP(t,e){return ku(t,e.toTimestamp())}function On(t){return we(!!t,49232),se.fromTimestamp(function(n){const r=Kr(n);return new ke(r.seconds,r.nanos)}(t))}function ip(t,e){return kd(t,e).canonicalString()}function kd(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Xw(t){const e=Oe.fromString(t);return we(tE(e),10190,{key:e.toString()}),e}function xd(t,e){return ip(t.databaseId,e.path)}function ch(t,e){const n=Xw(e);if(n.get(1)!==t.databaseId.projectId)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(Jw(n))}function Yw(t,e){return ip(t.databaseId,e)}function zP(t){const e=Xw(t);return e.length===4?Oe.emptyPath():Jw(e)}function Nd(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jw(t){return we(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function vy(t,e,n){return{name:xd(t,e),fields:n.value.mapValue.fields}}function BP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(we(f===void 0||typeof f=="string",58123),gt.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),gt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?U.UNKNOWN:Hw(h.code);return new J(f,h.message||"")}(o);n=new Kw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ch(t,r.document.name),s=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):se.min(),l=new rn({mapValue:{fields:r.document.fields}}),u=Ct.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new $l(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ch(t,r.document),s=r.readTime?On(r.readTime):se.min(),o=Ct.newNoDocument(i,s),l=r.removedTargetIds||[];n=new $l([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ch(t,r.document),s=r.removedTargetIds||[];n=new $l([],s,i,null)}else{if(!("filter"in e))return ne(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new NP(i,s),l=r.targetId;n=new Gw(l,o)}}return n}function $P(t,e){let n;if(e instanceof Sa)n={update:vy(t,e.key,e.value)};else if(e instanceof qw)n={delete:xd(t,e.key)};else if(e instanceof bi)n={update:vy(t,e.key,e.data),updateMask:JP(e.fieldMask)};else{if(!(e instanceof PP))return ne(16599,{Vt:e.type});n={verify:xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof la)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ne(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:jP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne(27497)}(t,e.precondition)),n}function WP(t,e){return t&&t.length>0?(we(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?On(i.updateTime):On(s);return o.isEqual(se.min())&&(o=On(s)),new AP(o,i.transformResults||[])}(n,e))):[]}function qP(t,e){return{documents:[Yw(t,e.path)]}}function HP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yw(t,i);const s=function(h){if(h.length!==0)return eE(Un.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Xi(g.field),direction:QP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Pd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function GP(t){let e=zP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=Zw(p);return g instanceof Un&&kw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(x){return new Ru(Yi(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,sc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new Cu(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new Cu(A,g)}(n.endAt)),cP(e,i,o,s,l,"F",u,h)}function KP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yi(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yi(n.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yi(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yi(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}}(t):t.fieldFilter!==void 0?function(n){return et.create(Yi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Un.create(n.compositeFilter.filters.map(r=>Zw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne(1026)}}(n.compositeFilter.op))}(t):ne(30097,{filter:t})}function QP(t){return MP[t]}function XP(t){return LP[t]}function YP(t){return FP[t]}function Xi(t){return{fieldPath:t.canonicalString()}}function Yi(t){return ft.fromServerFormat(t.fieldPath)}function eE(t){return t instanceof et?function(n){if(n.op==="=="){if(oy(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NAN"}};if(sy(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oy(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NAN"}};if(sy(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xi(n.field),op:XP(n.op),value:n.value}}}(t):t instanceof Un?function(n){const r=n.getFilters().map(i=>eE(i));return r.length===1?r[0]:{compositeFilter:{op:YP(n.op),filters:r}}}(t):ne(54877,{filter:t})}function JP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,i,s=se.min(),o=se.min(),l=gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.yt=e}}function ek(t){const e=GP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.Cn=new nk}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Gr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class nk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new rt(Oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nE=41943040;class Ft{static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(nE,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new bs(0)}static cr(){return new bs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="LruGarbageCollector",rk=1048576;function Ty([t,e],[n,r]){const i=he(t,n);return i===0?he(e,r):i}class ik{constructor(e){this.Ir=e,this.buffer=new rt(Ty),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ty(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){G(Ey,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zs(n)?G(Ey,"Ignoring IndexedDB error during garbage collection: ",n):await js(n)}await this.Vr(3e5)})}}class ok{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(ic.ce);const r=new ik(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(wy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Ki()<=ce.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function ak(t,e){return new ok(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fo(r.mutation,i,vn.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Eo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=dr();const o=Lo(),l=function(){return Lo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof bi)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Fo(f.mutation,h,f.mutation.getFieldMask(),ke.now())):o.set(h.key,vn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new uk(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Lo();let i=new Fe((o,l)=>o-l),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||vn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||de()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Lw();f.forEach(g=>{if(!s.has(g)){const A=$w(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(fi());let l=ia,u=s;return o.next(h=>F.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,de())).next(f=>({batchId:l,changes:Mw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=Eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Eo();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const h=function(p,g){return new ac(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ct.newInvalidDocument(f)))});let l=Eo();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Fo(f.mutation,h,vn.empty(),ke.now()),cc(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:ek(i.bundledQuery),readTime:On(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.overlays=new Fe(ee.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=fi(),s=n.length+1,o=new ee(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=fi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=fi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return F.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xP(n,r));let s=this.qr.get(n);s===void 0&&(s=de(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.Qr=new rt(ot.$r),this.Ur=new rt(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ot(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ee(new Oe([])),r=new ot(n,e),i=new ot(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ee(new Oe([])),r=new ot(n,e),i=new ot(n,e+1);let s=de();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ot(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ee.comparator(e.key,n.key)||he(e.Yr,n.Yr)}static Kr(e,n){return he(e.Yr,n.Yr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new rt(ot.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new ot(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Xf:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(he);return n.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new ot(new ee(s),0);let l=new rt(he);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},o),F.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,i=>{const s=new ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ot(n,0),i=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.ri=e,this.docs=function(){return new Fe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=dr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ct.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=dr();const o=n.path,l=new ee(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||BR(zR(f),r)<=0||(i.has(f.key)||cc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne(9500)}ii(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gk(this)}getSize(e){return F.resolve(this.size)}}class gk extends lk{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.persistence=e,this.si=new Di(n=>Zf(n),ep),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new sp,this.targetCount=0,this.ai=bs.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.ui={},this.overlays={},this.ci=new ic(0),this.li=!1,this.li=!0,this.hi=new fk,this.referenceDelegate=e(this),this.Pi=new yk(this),this.indexManager=new tk,this.remoteDocumentCache=function(i){return new mk(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new ZP(n),this.Ii=new hk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new pk(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new _k(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return F.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class _k extends WR{constructor(e){super(),this.currentSequenceNumber=e}}class op{constructor(e){this.persistence=e,this.Ri=new sp,this.Vi=null}static mi(e){return new op(e)}get fi(){if(this.Vi)return this.Vi;throw ne(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,r=>{const i=ee.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class xu{constructor(e,n){this.persistence=e,this.pi=new Di(r=>GR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ak(this,n)}static mi(e,n){return new xu(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return F.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,se.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=jl(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ap(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return u1()?8:qR(Pt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new vk;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Ki()<=ce.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(Ki()<=ce.DEBUG&&G("QueryEngine","Query:",Qi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ki()<=ce.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):F.resolve())}ys(e,n){if(cy(n))return F.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rd(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,Rd(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return cy(n)||i.isEqual(se.min())?F.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?F.resolve(null):(Ki()<=ce.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qi(n)),this.vs(e,o,n,jR(i,ia)).next(l=>l))})}Ds(e,n){let r=new rt(Vw(e));return n.forEach((i,s)=>{cc(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Ki()<=ce.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Qi(n)),this.ps.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="LocalStore",Ek=3e8;class Tk{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Fe(he),this.xs=new Di(s=>Zf(s),ep),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ck(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Ik(t,e,n,r){return new Tk(t,e,n,r)}async function iE(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=de();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function Sk(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let A=F.resolve();return g.forEach(x=>{A=A.next(()=>f.getEntry(u,x)).next(b=>{const O=h.docVersions.get(x);we(O!==null,48541),b.version.compareTo(O)<0&&(p.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),f.addEntry(b)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=de();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sE(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function Ak(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(gt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(b,O,E){return b.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=Ek?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,A,f)&&l.push(n.Pi.updateTargetData(s,A))});let u=dr(),h=de();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Ck(s,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(se.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ms=i,s))}function Ck(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G(lp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:i}})}function Rk(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Pk(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Dd(t,e,n){const r=oe(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zs(o))throw o;G(lp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Iy(t,e,n){const r=oe(t);let i=se.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=oe(u),g=p.xs.get(f);return g!==void 0?F.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,o,Vn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:de())).next(l=>(kk(r,fP(e),l),{documents:l,Qs:s})))}function kk(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Sy{constructor(){this.activeTargetIds=vP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xk{constructor(){this.Mo=new Sy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Sy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="ConnectivityMonitor";class Cy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){G(Ay,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){G(Ay,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl=null;function bd(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="RestConnection",Dk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Su?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=bd(),l=this.zo(e,n.toUriEncodedString());G(hh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),f=ki(h);return this.Jo(e,l,u,r,f).then(p=>(G(hh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ks(hh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=Dk[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class Ok extends bk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=bd();return new Promise((l,u)=>{const h=new uw;h.setWithCredentials(!0),h.listenOnce(cw.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ul.NO_ERROR:const p=h.getResponseJson();G(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ul.TIMEOUT:G(Tt,`RPC '${e}' ${o} timed out`),u(new J(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ul.HTTP_ERROR:const g=h.getStatus();if(G(Tt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const x=A==null?void 0:A.error;if(x&&x.status&&x.message){const b=function(E){const w=E.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(w)>=0?w:U.UNKNOWN}(x.status);u(new J(b,x.message))}else u(new J(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new J(U.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{G(Tt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);G(Tt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=bd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fw(),l=dw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");G(Tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let g=!1,A=!1;const x=new Vk({Yo:O=>{A?G(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(g||(G(Tt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),G(Tt,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},Zo:()=>p.close()}),b=(O,E,w)=>{O.listen(E,_=>{try{w(_)}catch(D){setTimeout(()=>{throw D},0)}})};return b(p,wo.EventType.OPEN,()=>{A||(G(Tt,`RPC '${e}' stream ${i} transport opened.`),x.o_())}),b(p,wo.EventType.CLOSE,()=>{A||(A=!0,G(Tt,`RPC '${e}' stream ${i} transport closed`),x.a_(),this.E_(p))}),b(p,wo.EventType.ERROR,O=>{A||(A=!0,ks(Tt,`RPC '${e}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),x.a_(new J(U.UNAVAILABLE,"The operation could not be completed")))}),b(p,wo.EventType.MESSAGE,O=>{var E;if(!A){const w=O.data[0];we(!!w,16349);const _=w,D=(_==null?void 0:_.error)||((E=_[0])==null?void 0:E.error);if(D){G(Tt,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let $=function(v){const T=Qe[v];if(T!==void 0)return Hw(T)}(M),I=D.message;$===void 0&&($=U.INTERNAL,I="Unknown error status: "+M+" with message "+D.message),A=!0,x.a_(new J($,I)),p.close()}else G(Tt,`RPC '${e}' stream ${i} received:`,w),x.u_(w)}}),b(l,hw.STAT_EVENT,O=>{O.stat===Ed.PROXY?G(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Ed.NOPROXY&&G(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function dh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){return new UP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="PersistentStream";class aE{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new oE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new J(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(Ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(G(Ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mk extends aE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=BP(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?On(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Nd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Cd(u)?{documents:qP(s,u)}:{query:HP(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Qw(s,o.resumeToken);const h=Pd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=ku(s,o.snapshotVersion.toTimestamp());const h=Pd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=KP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Nd(this.serializer),n.removeTarget=e,this.q_(n)}}class Lk extends aE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=WP(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Nd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$P(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{}class Uk extends Fk{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,kd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(U.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,kd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class jk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hr(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="RemoteStore";class zk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Vi(this)&&(G(Ci,"Restarting streams for network reachability change."),await async function(u){const h=oe(u);h.Ea.add(4),await Ca(h),h.Ra.set("Unknown"),h.Ea.delete(4),await mc(h)}(this))})}),this.Ra=new jk(r,i)}}async function mc(t){if(Vi(t))for(const e of t.da)await e(!0)}async function Ca(t){for(const e of t.da)await e(!1)}function lE(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),dp(n)?hp(n):Bs(n).O_()&&cp(n,e))}function up(t,e){const n=oe(t),r=Bs(n);n.Ia.delete(e),r.O_()&&uE(n,e),n.Ia.size===0&&(r.O_()?r.L_():Vi(n)&&n.Ra.set("Unknown"))}function cp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bs(t).Y_(e)}function uE(t,e){t.Va.Ue(e),Bs(t).Z_(e)}function hp(t){t.Va=new OP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Bs(t).start(),t.Ra.ua()}function dp(t){return Vi(t)&&!Bs(t).x_()&&t.Ia.size>0}function Vi(t){return oe(t).Ea.size===0}function cE(t){t.Va=void 0}async function Bk(t){t.Ra.set("Online")}async function $k(t){t.Ia.forEach((e,n)=>{cp(t,e)})}async function Wk(t,e){cE(t),dp(t)?(t.Ra.ha(e),hp(t)):t.Ra.set("Unknown")}async function qk(t,e,n){if(t.Ra.set("Online"),e instanceof Kw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){G(Ci,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nu(t,r)}else if(e instanceof $l?t.Va.Ze(e):e instanceof Gw?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await sE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(gt.EMPTY_BYTE_STRING,f.snapshotVersion)),uE(s,u);const p=new Pr(f.target,u,h,f.sequenceNumber);cp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G(Ci,"Failed to raise snapshot:",r),await Nu(t,r)}}async function Nu(t,e,n){if(!zs(e))throw e;t.Ea.add(1),await Ca(t),t.Ra.set("Offline"),n||(n=()=>sE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G(Ci,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await mc(t)})}function hE(t,e){return e().catch(n=>Nu(t,n,e))}async function gc(t){const e=oe(t),n=Yr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xf;for(;Hk(e);)try{const i=await Rk(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,Gk(e,i)}catch(i){await Nu(e,i)}dE(e)&&fE(e)}function Hk(t){return Vi(t)&&t.Ta.length<10}function Gk(t,e){t.Ta.push(e);const n=Yr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function dE(t){return Vi(t)&&!Yr(t).x_()&&t.Ta.length>0}function fE(t){Yr(t).start()}async function Kk(t){Yr(t).ra()}async function Qk(t){const e=Yr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Xk(t,e,n){const r=t.Ta.shift(),i=np.from(r,e,n);await hE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gc(t)}async function Yk(t,e){e&&Yr(t).X_&&await async function(r,i){if(function(o){return DP(o)&&o!==U.ABORTED}(i.code)){const s=r.Ta.shift();Yr(r).B_(),await hE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await gc(r)}}(t,e),dE(t)&&fE(t)}async function Py(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),G(Ci,"RemoteStore received new credentials");const r=Vi(n);n.Ea.add(3),await Ca(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await mc(n)}async function Jk(t,e){const n=oe(t);e?(n.Ea.delete(2),await mc(n)):e||(n.Ea.add(2),await Ca(n),n.Ra.set("Unknown"))}function Bs(t){return t.ma||(t.ma=function(n,r,i){const s=oe(n);return s.sa(),new Mk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:Bk.bind(null,t),t_:$k.bind(null,t),r_:Wk.bind(null,t),H_:qk.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),dp(t)?hp(t):t.Ra.set("Unknown")):(await t.ma.stop(),cE(t))})),t.ma}function Yr(t){return t.fa||(t.fa=function(n,r,i){const s=oe(n);return s.sa(),new Lk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Kk.bind(null,t),r_:Yk.bind(null,t),ta:Qk.bind(null,t),na:Xk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await gc(t)):(await t.fa.stop(),t.Ta.length>0&&(G(Ci,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new fp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pp(t,e){if(hr("AsyncQueue",`${e}: ${t}`),zs(t))return new J(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{static emptySet(e){return new ws(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Eo(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.ga=new Fe(ee.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ne(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Vs(e,n,ws.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class e2{constructor(){this.queries=xy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=xy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new J(U.ABORTED,"Firestore shutting down"))}}function xy(){return new Di(t=>bw(t),uc)}async function pE(t,e){const n=oe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new Zk,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pp(o,`Initialization of query '${Qi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&mp(n)}async function mE(t,e){const n=oe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function t2(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&mp(n)}function n2(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function mp(t){t.Ca.forEach(e=>{e.next()})}var Vd,Ny;(Ny=Vd||(Vd={})).Ma="default",Ny.Cache="cache";class gE{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.key=e}}class _E{constructor(e){this.key=e}}class r2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=Vw(e),this.tu=new ws(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new ky,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=cc(this.query,p)?p:null,x=!!g&&this.mutatedKeys.has(g.key),b=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let O=!1;g&&A?g.data.isEqual(A.data)?x!==b&&(r.track({type:3,doc:A}),O=!0):this.su(g,A)||(r.track({type:2,doc:A}),O=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),O=!0):g&&!A&&(r.track({type:1,doc:g}),O=!0,(u||h)&&(l=!0)),O&&(A?(o=o.add(A),s=b?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(A,x){const b=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{Rt:O})}};return b(A)-b(x)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Vs(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ky,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new _E(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new yE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Vs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const gp="SyncEngine";class i2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class s2{constructor(e){this.key=e,this.hu=!1}}class o2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Di(l=>bw(l),uc),this.Iu=new Map,this.Eu=new Set,this.du=new Fe(ee.comparator),this.Au=new Map,this.Ru=new sp,this.Vu={},this.mu=new Map,this.fu=bs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function a2(t,e,n=!0){const r=SE(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await vE(r,e,n,!0),i}async function l2(t,e){const n=SE(t);await vE(n,e,!0,!1)}async function vE(t,e,n,r){const i=await Pk(t.localStore,Vn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await u2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&lE(t.remoteStore,i),l}async function u2(t,e,n,r,i){t.pu=(p,g,A)=>async function(b,O,E,w){let _=O.view.ru(E);_.Cs&&(_=await Iy(b.localStore,O.query,!1).then(({documents:I})=>O.view.ru(I,_)));const D=w&&w.targetChanges.get(O.targetId),M=w&&w.targetMismatches.get(O.targetId)!=null,$=O.view.applyChanges(_,b.isPrimaryClient,D,M);return by(b,O.targetId,$.au),$.snapshot}(t,p,g,A);const s=await Iy(t.localStore,e,!0),o=new r2(e,s.Qs),l=o.ru(s.documents),u=Aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);by(t,n,h.au);const f=new i2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function c2(t,e,n){const r=oe(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!uc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Dd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&up(r.remoteStore,i.targetId),Od(r,i.targetId)}).catch(js)):(Od(r,i.targetId),await Dd(r.localStore,i.targetId,!0))}async function h2(t,e){const n=oe(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),up(n.remoteStore,r.targetId))}async function d2(t,e,n){const r=v2(t);try{const i=await function(o,l){const u=oe(o),h=ke.now(),f=l.reduce((A,x)=>A.add(x.key),de());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=dr(),b=de();return u.Ns.getEntries(A,f).next(O=>{x=O,x.forEach((E,w)=>{w.isValidDocument()||(b=b.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,x)).next(O=>{p=O;const E=[];for(const w of l){const _=RP(w,p.get(w.key).overlayedDocument);_!=null&&E.push(new bi(w.key,_,Cw(_.value.mapValue),rr.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,E,l)}).next(O=>{g=O;const E=O.applyToLocalDocumentSet(p,b);return u.documentOverlayCache.saveOverlays(A,O.batchId,E)})}).then(()=>({batchId:g.batchId,changes:Mw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Fe(he)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ra(r,i.changes),await gc(r.remoteStore)}catch(i){const s=pp(i,"Failed to persist write");n.reject(s)}}async function wE(t,e){const n=oe(t);try{const r=await Ak(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?we(o.hu,14607):i.removedDocuments.size>0&&(we(o.hu,42227),o.hu=!1))}),await Ra(n,r,e)}catch(r){await js(r)}}function Dy(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(l)&&(h=!0)}),h&&mp(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function f2(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Fe(ee.comparator);o=o.insert(s,Ct.newNoDocument(s,se.min()));const l=de().add(s),u=new fc(se.min(),new Map,new Fe(he),o,l);await wE(r,u),r.du=r.du.remove(s),r.Au.delete(e),yp(r)}else await Dd(r.localStore,e,!1).then(()=>Od(r,e,n)).catch(js)}async function p2(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await Sk(n.localStore,e);TE(n,r,null),EE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,i)}catch(i){await js(i)}}async function m2(t,e,n){const r=oe(t);try{const i=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(we(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);TE(r,e,n),EE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,i)}catch(i){await js(i)}}function EE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function TE(t,e,n){const r=oe(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||IE(t,r)})}function IE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(up(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),yp(t))}function by(t,e,n){for(const r of n)r instanceof yE?(t.Ru.addReference(r.key,e),g2(t,r)):r instanceof _E?(G(gp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||IE(t,r.key)):ne(19791,{wu:r})}function g2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(G(gp,"New document in limbo: "+n),t.Eu.add(r),yp(t))}function yp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ee(Oe.fromString(e)),r=t.fu.next();t.Au.set(r,new s2(n)),t.du=t.du.insert(n,r),lE(t.remoteStore,new Pr(Vn(lc(n.path)),r,"TargetPurposeLimboResolution",ic.ce))}}async function Ra(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=ap.As(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const f=oe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,g=>F.forEach(g.Es,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>F.forEach(g.ds,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!zs(p))throw p;G(lp,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.Ms.get(g),x=A.snapshotVersion,b=A.withLastLimboFreeSnapshotVersion(x);f.Ms=f.Ms.insert(g,b)}}}(r.localStore,s))}async function y2(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){G(gp,"User change. New user:",e.toKey());const r=await iE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new J(U.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.Ls)}}function _2(t,e){const n=oe(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let i=de();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function SE(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=f2.bind(null,e),e.Pu.H_=t2.bind(null,e.eventManager),e.Pu.yu=n2.bind(null,e.eventManager),e}function v2(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=p2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=m2.bind(null,e),e}class Du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Ik(this.persistence,new wk,e.initialUser,this.serializer)}Cu(e){return new rE(op.mi,this.serializer)}Du(e){return new xk}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Du.provider={build:()=>new Du};class w2 extends Du{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){we(this.persistence.referenceDelegate instanceof xu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sk(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new rE(r=>xu.mi(r,n),this.serializer)}}class Md{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=y2.bind(null,this.syncEngine),await Jk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new e2}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=function(s){return new Ok(s)}(e.databaseInfo);return function(s,o,l,u){return new Uk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new zk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dy(this.syncEngine,n,0),function(){return Cy.v()?new Cy:new Nk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new o2(i,s,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);G(Ci,"RemoteStore shutting down."),s.Ea.add(5),await Ca(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Md.provider={build:()=>new Md};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="FirestoreClient";class E2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=Kf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G(Jr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(Jr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),G(Jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await T2(t);G(Jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Py(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Py(e.remoteStore,i)),t._onlineComponents=e}async function T2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(Jr,"Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new Du)}}else G(Jr,"Using default OfflineComponentProvider"),await fh(t,new w2(void 0));return t._offlineComponents}async function CE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(Jr,"Using user provided OnlineComponentProvider"),await Vy(t,t._uninitializedComponentsProvider._online)):(G(Jr,"Using default OnlineComponentProvider"),await Vy(t,new Md))),t._onlineComponents}function I2(t){return CE(t).then(e=>e.syncEngine)}async function Ld(t){const e=await CE(t),n=e.eventManager;return n.onListen=a2.bind(null,e.syncEngine),n.onUnlisten=c2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=l2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=h2.bind(null,e.syncEngine),n}function S2(t,e,n={}){const r=new zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new AE({next:g=>{f.Nu(),o.enqueueAndForget(()=>mE(s,p));const A=g.docs.has(l);!A&&g.fromCache?h.reject(new J(U.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?h.reject(new J(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new gE(lc(l.path),f,{includeMetadataChanges:!0,qa:!0});return pE(s,p)}(await Ld(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="firestore.googleapis.com",My=!0;class Ly{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PE,this.ssl=My}else this.host=e.host,this.ssl=e.ssl??My;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rk)throw new J(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _p{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ly({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ly(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PR;switch(r.type){case"firstParty":return new DR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oy.get(n);r&&(G("ComponentProvider","Removing Datastore"),Oy.delete(n),r.terminate())}(this),Promise.resolve()}}function A2(t,e,n,r={}){var h;t=Br(t,_p);const i=ki(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Of(`https://${l}`),Mf("Firestore",!0)),s.host!==PE&&s.host!==l&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Ti(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=St.MOCK_USER;else{f=S0(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new J(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new St(g)}t._authCredentials=new kR(new mw(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yc(this.firestore,e,this._query)}}class nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ha(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}toJSON(){return{type:nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ia(n,nt._jsonSchema))return new nt(e,r||null,new ee(Oe.fromString(n.referencePath)))}}nt._jsonSchemaVersion="firestore/documentReference/1.0",nt._jsonSchema={type:Ye("string",nt._jsonSchemaVersion),referencePath:Ye("string")};class ha extends yc{constructor(e,n,r){super(e,n,lc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new ee(e))}withConverter(e){return new ha(this.firestore,e,this._path)}}function kE(t,e,...n){if(t=cn(t),arguments.length===1&&(e=Kf.newId()),FR("doc","path",e),t instanceof _p){const r=Oe.fromString(e,...n);return Yg(r),new nt(t,null,new ee(r))}{if(!(t instanceof nt||t instanceof ha))throw new J(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Yg(r),new nt(t.firestore,t instanceof ha?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="AsyncQueue";class Uy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new oE(this,"async_queue_retry"),this._c=()=>{const r=dh();r&&G(Fy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=dh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new zr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zs(e))throw e;G(Fy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,hr("INTERNAL UNHANDLED ERROR: ",jy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=fp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&ne(47125,{Pc:jy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function jy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class da extends _p{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Uy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uy(e),this._firestoreClient=void 0,await e}}}function C2(t,e){const n=typeof t=="object"?t:Uf(),r=typeof t=="string"?t:Su,i=Zu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=E0("firestore");s&&A2(i,...s)}return i}function vp(t){if(t._terminated)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||R2(t),t._firestoreClient}function R2(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,h,f){return new XR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,RE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new E2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(gt.fromBase64String(e))}catch(n){throw new J(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sn(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ia(e,sn._jsonSchema))return sn.fromBase64String(e.bytes)}}sn._jsonSchemaVersion="firestore/bytes/1.0",sn._jsonSchema={type:Ye("string",sn._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mn._jsonSchemaVersion}}static fromJSON(e){if(Ia(e,Mn._jsonSchema))return new Mn(e.latitude,e.longitude)}}Mn._jsonSchemaVersion="firestore/geoPoint/1.0",Mn._jsonSchema={type:Ye("string",Mn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ia(e,Ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ln(e.vectorValues);throw new J(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ln._jsonSchemaVersion="firestore/vectorValue/1.0",Ln._jsonSchema={type:Ye("string",Ln._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=/^__.*__$/;class k2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Sa(e,this.data,n,this.fieldTransforms)}}function xE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{Ac:t})}}class Tp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Tp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return bu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xE(this.Ac)&&P2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class x2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}Cc(e,n,r,i=!1){return new Tp({Ac:e,methodName:n,Dc:r,path:ft.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function N2(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new x2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function D2(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);VE("Data must be an object, but it was:",o,r);const l=DE(r,o);let u,h;if(s.merge)u=new vn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=b2(e,p,n);if(!o.contains(g))throw new J(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);O2(f,g)||f.push(g)}u=new vn(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new k2(new rn(l),u,h)}class Ip extends Ep{_toFieldTransform(e){return new IP(e.path,new la)}isEqual(e){return e instanceof Ip}}function NE(t,e){if(bE(t=cn(t)))return VE("Unsupported field value:",e,t),DE(t,e);if(t instanceof Ep)return function(r,i){if(!xE(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=NE(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=cn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:ku(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ku(i.serializer,s)}}if(r instanceof Mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sn)return{bytesValue:Qw(i.serializer,r._byteString)};if(r instanceof nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ip(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ln)return function(o,l){return{mapValue:{fields:{[Sw]:{stringValue:Aw},[Au]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return tp(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Qf(r)}`)}(t,e)}function DE(t,e){const n={};return _w(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ni(t,(r,i)=>{const s=NE(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function bE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Mn||t instanceof sn||t instanceof nt||t instanceof Ep||t instanceof Ln)}function VE(t,e,n){if(!bE(n)||!gw(n)){const r=Qf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function b2(t,e,n){if((e=cn(e))instanceof wp)return e._internalPath;if(typeof e=="string")return OE(t,e);throw bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const V2=new RegExp("[~\\*/\\[\\]]");function OE(t,e,n){if(e.search(V2)>=0)throw bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wp(...e.split("."))._internalPath}catch{throw bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new J(U.INVALID_ARGUMENT,l+t+u)}function O2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new M2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(LE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class M2 extends ME{data(){return super.data()}}function LE(t,e){return typeof e=="string"?OE(t,e):e instanceof wp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class F2{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ni(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Au].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>qe(o.doubleValue));return new Ln(n)}convertGeoPoint(e){return new Mn(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=oc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);we(tE(r),9688,{name:e});const i=new oa(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(n)||hr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gi extends ME{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(LE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=gi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}gi._jsonSchemaVersion="firestore/documentSnapshot/1.0",gi._jsonSchema={type:Ye("string",gi._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Wl extends gi{data(e={}){return super.data(e)}}class Es{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wl(this._firestore,this._userDataWriter,r.key,r,new Io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Wl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Wl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:j2(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function j2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t){t=Br(t,nt);const e=Br(t.firestore,da);return S2(vp(e),t._key).then(n=>jE(e,t,n))}Es._jsonSchemaVersion="firestore/querySnapshot/1.0",Es._jsonSchema={type:Ye("string",Es._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class FE extends F2{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function UE(t,e,n){t=Br(t,nt);const r=Br(t.firestore,da),i=U2(t.converter,e,n);return B2(r,[D2(N2(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rr.none())])}function z2(t,...e){var u,h,f;t=cn(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||zy(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(zy(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let s,o,l;if(t instanceof nt)o=Br(t.firestore,da),l=lc(t._key.path),s={next:p=>{e[r]&&e[r](jE(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Br(t,yc);o=Br(p.firestore,da),l=p._query;const g=new FE(o);s={next:A=>{e[r]&&e[r](new Es(o,g,p,A))},error:e[r+1],complete:e[r+2]},L2(t._query)}return function(g,A,x,b){const O=new AE(b),E=new gE(A,O,x);return g.asyncQueue.enqueueAndForget(async()=>pE(await Ld(g),E)),()=>{O.Nu(),g.asyncQueue.enqueueAndForget(async()=>mE(await Ld(g),E))}}(vp(o),l,i,s)}function B2(t,e){return function(r,i){const s=new zr;return r.asyncQueue.enqueueAndForget(async()=>d2(await I2(r),i,s)),s.promise}(vp(t),e)}function jE(t,e,n){const r=n.docs.get(e._key),i=new FE(t);return new gi(t,i,e._key,r,new Io(n.hasPendingWrites,n.fromCache),e.converter)}function zE(){return new Ip("serverTimestamp")}(function(e,n=!0){(function(i){Us=i})(xi),Ii(new qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new da(new xR(r.getProvider("auth-internal")),new bR(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(h.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Nn(Gg,Kg,e),Nn(Gg,Kg,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="firebasestorage.googleapis.com",$2="storageBucket",W2=2*60*1e3,q2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends zn{constructor(e,n,r=0){super(ph(e),`Firebase Storage: ${n} (${ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jn||(jn={}));function ph(t){return"storage/"+t}function H2(){const t="An unknown error occurred, please check the error payload for server response.";return new Bn(jn.UNKNOWN,t)}function G2(){return new Bn(jn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function K2(){return new Bn(jn.CANCELED,"User canceled the upload/download.")}function Q2(t){return new Bn(jn.INVALID_URL,"Invalid URL '"+t+"'.")}function X2(t){return new Bn(jn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function By(t){return new Bn(jn.INVALID_ARGUMENT,t)}function $E(){return new Bn(jn.APP_DELETED,"The Firebase app was deleted.")}function Y2(t){return new Bn(jn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=wn.makeFromUrl(e,n)}catch{return new wn(e,"")}if(r.path==="")return r;throw X2(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",A=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),x={bucket:1,path:3},b=n===BE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",E=new RegExp(`^https?://${b}/${i}/${O}`,"i"),_=[{regex:l,indices:u,postModify:s},{regex:A,indices:x,postModify:h},{regex:E,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<_.length;D++){const M=_[D],$=M.regex.exec(e);if($){const I=$[M.indices.bucket];let m=$[M.indices.path];m||(m=""),r=new wn(I,m),M.postModify(r);break}}if(r==null)throw Q2(e);return r}}class J2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function p(O){i=setTimeout(()=>{i=null,t(A,u())},O)}function g(){s&&clearTimeout(s)}function A(O,...E){if(h){g();return}if(O){g(),f.call(null,O,...E);return}if(u()||o){g(),f.call(null,O,...E);return}r<64&&(r*=2);let _;l===1?(l=2,_=0):_=(r+Math.random())*1e3,p(_)}let x=!1;function b(O){x||(x=!0,g(),!h&&(i!==null?(O||(l=2),clearTimeout(i),p(0)):O||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function ex(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t){return t!==void 0}function $y(t,e,n,r){if(r<e)throw By(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw By(`Invalid value for '${t}'. Expected ${n} or less.`)}function nx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Vu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Vu||(Vu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n,r,i,s,o,l,u,h,f,p,g=!0,A=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,b)=>{this.resolve_=x,this.reject_=b,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Vu.NO_ERROR,u=s.getStatus();if(!l||rx(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Vu.ABORT;r(!1,new yl(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new yl(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());tx(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=H2();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?$E():K2();o(u)}else{const u=G2();o(u)}};this.canceled_?n(!1,new yl(!1,null,!0)):this.backoffId_=Z2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ex(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ox(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ax(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ux(t,e,n,r,i,s,o=!0,l=!1){const u=nx(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return ax(f,e),sx(f,n),ox(f,s),lx(f,r),new ix(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this._service=e,n instanceof wn?this._location=n:this._location=wn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ou(e,n)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hx(this._location.path)}get storage(){return this._service}get parent(){const e=cx(this._location.path);if(e===null)return null;const n=new wn(this._location.bucket,e);return new Ou(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Y2(e)}}function Wy(t,e){const n=e==null?void 0:e[$2];return n==null?null:wn.makeFromBucketSpec(n,t)}function dx(t,e,n,r={}){t.host=`${e}:${n}`;const i=ki(e);i&&(Of(`https://${t.host}/b`),Mf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:S0(s,t.app.options.projectId))}class fx{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=BE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=W2,this._maxUploadRetryTime=q2,this._requests=new Set,i!=null?this._bucket=wn.makeFromBucketSpec(i,this._host):this._bucket=Wy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=Wy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ou(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new J2($E());{const o=ux(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const qy="@firebase/storage",Hy="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="storage";function px(t=Uf(),e){t=cn(t);const r=Zu(t,WE).getImmediate({identifier:e}),i=E0("storage");return i&&mx(r,...i),r}function mx(t,e,n,r={}){dx(t,e,n,r)}function gx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new fx(n,r,i,e,xi)}function yx(){Ii(new qr(WE,gx,"PUBLIC").setMultipleInstances(!0)),Nn(qy,Hy,""),Nn(qy,Hy,"esm2020")}yx();const _x={apiKey:"AIzaSyBETGNlh931KLADATnB4Dq-aUdfcT9qi6c",authDomain:"yangjizhouyu.firebaseapp.com",projectId:"yangjizhouyu",storageBucket:"yangjizhouyu.firebasestorage.app",messagingSenderId:void 0,appId:"1:275387965264:web:dd10976310eb4624ea1655"},Ap=R0(_x),vx=CR(Ap),qE=C2(Ap);px(Ap);async function _l(){const{user:t}=await cC(vx);return t.uid}const Cp=t=>kE(qE,"ponds",t);async function wx(t){const e=await Sp(Cp(t));return e.exists()?e.data():null}function Fd(t){if(Array.isArray(t))return t.map(Fd);if(t&&typeof t=="object"){const e={};for(const[n,r]of Object.entries(t))r!==void 0&&(e[n]=Fd(r));return e}return typeof t=="number"&&Number.isNaN(t)?null:t}async function Gy(t,e){const n=Fd({...e,updatedAt:zE()});await UE(Cp(t),n,{merge:!0})}function Ex(t,e){return z2(Cp(t),r=>{r.exists()&&e(r.data())})}async function mh(t){const e=atob(t.split(",")[1]||""),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);const r=await crypto.subtle.digest("SHA-256",n);return btoa(String.fromCharCode(...new Uint8Array(r))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}const Ud=t=>kE(qE,"textures",t);async function gh(t,e){(await Sp(Ud(t))).exists()||await UE(Ud(t),{id:t,dataUrl:e,createdAt:zE()})}async function Tx(t){const e=await Sp(Ud(t));return e.exists()?e.data().dataUrl:null}const Nt=4096,It=2304,Ky=.3,Qy=3,Xy=1.15,Ix=18,vl=55,wl=90,Yy=.08,El=160,Sx=14,Jy=80,Ax=2.5,yh=[{kind:"common",prob:.75,growPct:.004,radius:5},{kind:"uncommon",prob:.22,growPct:.012,radius:6},{kind:"rare",prob:.03,growPct:.04,radius:7}],_h="fish-pond-save-v3",vh="pond-id";function Cx(){var o;const t=new URL(window.location.href),e=t.searchParams.get("pond"),n=(t.hash.match(/pond=([\w-]+)/)||[])[1],r=e||n;if(r)return localStorage.setItem(vh,r),r;const i=localStorage.getItem(vh);if(i)return i;const s=(((o=crypto.randomUUID)==null?void 0:o.call(crypto))||Math.random().toString(36).slice(2)+Date.now().toString(36)).replace(/-/g,"").slice(0,16);return localStorage.setItem(vh,s),s}const st=Cx(),be=(t,e)=>t+Math.random()*(e-t),Zt=(t,e,n)=>Math.max(e,Math.min(n,t));function Rx(){const t=Math.random();let e=0;for(const n of yh)if(e+=n.prob,t<=e)return n;return yh[yh.length-1]}function Tl(){const t=[195,205,215,165,180,200,30,350],e=t[Math.floor(Math.random()*t.length)],n=Math.floor(be(55,85)),r=Math.floor(be(45,65));return`hsl(${e} ${n}% ${r}%)`}function Zy(t,e,n,r){const i=n-t,s=r-e;return Math.hypot(i,s)}function e_(t,e,n){return t+(e-t)*n}function Px(t){const e=1.35-.26*t;return Zt(e,.7,1.2)}function kx(t,e,n,r){const i=Math.PI/e;t.beginPath(),t.rotate(-Math.PI/2);for(let s=0;s<e;s++)t.lineTo(Math.cos(s*2*i)*n,Math.sin(s*2*i)*n),t.lineTo(Math.cos((s*2+1)*i)*r,Math.sin((s*2+1)*i)*r);t.closePath(),t.rotate(Math.PI/2)}function $s(t,e){const n=document.createElement("canvas");n.width=t,n.height=e;const r=n.getContext("2d");return{cvs:n,ctx:r}}function xx(t,e){const{cvs:n,ctx:r}=$s(t,e),i=r.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ffae2b"),i.addColorStop(1,"#ff8b00"),r.fillStyle=i,r.fillRect(0,0,t,e);const s=[.2,.5,.8];for(const o of s){const l=o*t,u=t*.12,h=u*.45;r.fillStyle="#ffffff",r.beginPath(),r.moveTo(l-u,0),r.quadraticCurveTo(l,h,l+u,0),r.lineTo(l+u,e),r.quadraticCurveTo(l,e-h,l-u,e),r.closePath(),r.fill(),r.strokeStyle="rgba(0,0,0,0.65)",r.lineWidth=u*.22,r.stroke()}return n.toDataURL("image/png")}function Nx(t,e){const{cvs:n,ctx:r}=$s(t,e),i=r.createLinearGradient(0,0,0,e);i.addColorStop(0,"#3aa9ff"),i.addColorStop(1,"#1557c0"),r.fillStyle=i,r.fillRect(0,0,t,e),r.fillStyle="#0a1422",r.beginPath(),r.moveTo(.15*t,.25*e),r.bezierCurveTo(.4*t,.05*e,.65*t,.1*e,.95*t,.2*e),r.lineTo(.95*t,.8*e),r.bezierCurveTo(.65*t,.9*e,.4*t,.95*e,.15*t,.75*e),r.closePath(),r.fill();const s=r.createLinearGradient(t*.8,0,t,0);return s.addColorStop(0,"#fff35a"),s.addColorStop(1,"#ffd100"),r.fillStyle=s,r.fillRect(t*.82,0,t*.18,e),n.toDataURL("image/png")}function Dx(t,e){const{cvs:n,ctx:r}=$s(t,e);r.fillStyle="#f7f7f7",r.fillRect(0,0,t,e);const i=2+Math.floor(Math.random()*3);for(let o=0;o<i;o++){const l=t*(.15+.7*Math.random()),u=e*(.25+.5*Math.random()),h=t*(.1+.15*Math.random()),f=e*(.12+.18*Math.random());r.save(),r.translate(l,u),r.rotate((Math.random()-.5)*.7),r.fillStyle="rgba(220,20,20,0.95)",r.beginPath(),r.ellipse(0,0,h,f,0,0,Math.PI*2),r.fill(),r.restore()}const s=r.createLinearGradient(0,0,0,e);return s.addColorStop(0,"rgba(0,0,0,0.03)"),s.addColorStop(1,"rgba(0,0,0,0.00)"),r.fillStyle=s,r.fillRect(0,0,t,e),n.toDataURL("image/png")}function bx(t,e){const{cvs:n,ctx:r}=$s(t,e),i=r.createLinearGradient(0,0,0,e);i.addColorStop(0,"#1aa5a5"),i.addColorStop(1,"#0b5570"),r.fillStyle=i,r.fillRect(0,0,t,e),r.fillStyle="rgba(255,255,255,0.9)";const s=13,o=7;for(let l=0;l<o;l++)for(let u=0;u<s;u++){const h=(u+.5+l%2*.5)*(t/s),f=(l+.4)*(e/(o+.5)),p=Math.min(t,e)*.012*(1+.4*Math.sin(u*.7+l*.5));r.beginPath(),r.arc(h,f,p,0,Math.PI*2),r.fill()}return n.toDataURL("image/png")}function Vx(t,e){const{cvs:n,ctx:r}=$s(t,e),i=r.createLinearGradient(0,0,0,e);i.addColorStop(0,"#f6eee6"),i.addColorStop(1,"#efe2d8"),r.fillStyle=i,r.fillRect(0,0,t,e),r.strokeStyle="#7b3f1b",r.lineWidth=e*.16,r.globalAlpha=.85;for(let s=-2;s<10;s++)r.beginPath(),r.moveTo(s*.18*t,-.1*e),r.lineTo((s+3)*.18*t,1.1*e),r.stroke();return r.globalAlpha=1,n.toDataURL("image/png")}function Ox(t,e){const{cvs:n,ctx:r}=$s(t,e),i=["#23c2a6","#2fb3df","#4e79ff","#9a6bff","#f25fd0","#ff7f4d"],s=r.createLinearGradient(0,0,t,0);i.forEach((o,l)=>s.addColorStop(l/(i.length-1),o)),r.fillStyle=s,r.fillRect(0,0,t,e),r.globalAlpha=.15,r.fillStyle="#ffffff";for(let o=0;o<12;o++){const l=(o+.5)/12*e;r.fillRect(0,l,t,1.2)}return r.globalAlpha=1,n.toDataURL("image/png")}const HE=[{key:"clownfish",label:"小丑鱼",shape:"angelfish",make:xx},{key:"blueTang",label:"蓝吊鱼",shape:"angelfish",make:Nx},{key:"koi",label:"锦鲤",shape:"angelfish",make:Dx},{key:"whaleShark",label:"鲸鲨肌理",shape:"swordfish",make:bx},{key:"lionfish",label:"狮子鱼",shape:"angelfish",make:Vx},{key:"parrotfish",label:"鹦嘴鱼",shape:"longtail",make:Ox}];function Mx(){for(const t of HE)t.preview||(t.preview=t.make(120,60))}function Gi(t,e,n,r){return e==="angelfish"?Fx(t,n,r):e==="swordfish"?jx(t,n,r):Bx(t,n,r)}function wh(t,e,n,r,i,s){return e==="angelfish"?Ux(t,n,r,i,s):e==="swordfish"?zx(t,n,r,i,s):$x(t,n,r,i,s)}function Lx(t){var i;if(!((i=t.shapeKey)!=null&&i.startsWith("custom:")))return{path:new Path2D,box:{w:100,h:50},flipX:!1};const e=t.shapeKey.slice(7),r=JSON.parse(localStorage.getItem("fish-outline-lib-v1")||"[]").find(s=>s.id===e);return r?{path:new Path2D(r.pathD),box:r.viewBox,flipX:!r.headIsLeft}:{path:new Path2D,box:{w:100,h:50},flipX:!1}}function Fx(t,e,n){t.moveTo(+e*.45,0),t.bezierCurveTo(+e*.3,-n*.05,+e*.05,-n*.65,-e*.15,-n*.5),t.bezierCurveTo(-e*.35,-n*.35,-e*.4,-n*.1,-e*.42,-n*.04),t.bezierCurveTo(-e*.2,+n*.55,+e*.1,+n*.65,+e*.35,+n*.1),t.bezierCurveTo(+e*.42,+n*.02,+e*.44,+n*.01,+e*.45,0)}function Ux(t,e,n,r,i){t.moveTo(e+r*.45,n+0),t.bezierCurveTo(e+r*.3,n-i*.05,e+r*.05,n-i*.65,e-r*.15,n-i*.5),t.bezierCurveTo(e-r*.35,n-i*.35,e-r*.4,n-i*.1,e-r*.42,n-i*.04),t.bezierCurveTo(e-r*.2,n+i*.55,e+r*.1,n+i*.65,e+r*.35,n+i*.1),t.bezierCurveTo(e+r*.42,n+i*.02,e+r*.44,n+i*.01,e+r*.45,n+0)}function jx(t,e,n){t.moveTo(+e*.6,-n*.02),t.bezierCurveTo(+e*.58,-n*.04,+e*.54,-n*.06,+e*.46,-n*.08),t.bezierCurveTo(+e*.1,-n*.12,-e*.1,-n*.1,-e*.4,-n*.05),t.bezierCurveTo(-e*.2,+n*.06,+e*.18,+n*.08,+e*.46,+n*.04),t.bezierCurveTo(+e*.54,+n*.02,+e*.58,0,+e*.6,-n*.02)}function zx(t,e,n,r,i){t.moveTo(e+r*.6,n-i*.02),t.bezierCurveTo(e+r*.58,n-i*.04,e+r*.54,n-i*.06,e+r*.46,n-i*.08),t.bezierCurveTo(e+r*.1,n-i*.12,e-r*.1,n-i*.1,e-r*.4,n-i*.05),t.bezierCurveTo(e-r*.2,n+i*.06,e+r*.18,n+i*.08,e+r*.46,n+i*.04),t.bezierCurveTo(e+r*.54,n+i*.02,e+r*.58,n+0,e+r*.6,n-i*.02)}function Bx(t,e,n){t.moveTo(+e*.45,0),t.bezierCurveTo(+e*.3,-n*.12,+e*.05,-n*.4,-e*.18,-n*.25),t.bezierCurveTo(-e*.35,+n*.1,-e*.28,+n*.3,-e*.18,+n*.25),t.bezierCurveTo(+e*.05,+n*.4,+e*.3,+n*.12,+e*.45,0)}function $x(t,e,n,r,i){t.moveTo(e+r*.45,n+0),t.bezierCurveTo(e+r*.3,n-i*.12,e+r*.05,n-i*.4,e-r*.18,n-i*.25),t.bezierCurveTo(e-r*.35,n+i*.1,e-r*.28,n+i*.3,e-r*.18,n+i*.25),t.bezierCurveTo(e+r*.05,n+i*.4,e+r*.3,n+i*.12,e+r*.45,n+0)}function Wx(t,e){const n=t.createLinearGradient(0,0,0,It);n.addColorStop(0,"#0e7490"),n.addColorStop(.55,"#0a6aa1"),n.addColorStop(1,"#06304f"),t.fillStyle=n,t.fillRect(0,0,Nt,It),t.save(),t.globalAlpha=.12;for(let s=0;s<5;s++){const o=(e*18+s*180)%(It+220)-220;t.beginPath(),t.ellipse(Nt*.5,o,Nt*.6,26,0,0,Math.PI*2),t.fillStyle="#ffffff",t.fill()}t.restore();const r=It-180,i=t.createLinearGradient(0,r,0,It);i.addColorStop(0,"#f1e2a9"),i.addColorStop(1,"#d8c17a"),t.fillStyle=i,t.fillRect(0,r,Nt,It-r),t.globalAlpha=.25;for(let s=0;s<3;s++){const o=r+40+s*30;t.beginPath(),t.ellipse(Nt*(.2+s*.3),o,220+s*120,18,0,0,Math.PI*2),t.fillStyle="#c8b06a",t.fill()}t.globalAlpha=1}function qx(){const t=K.useRef(null),e=K.useRef(null),[n,r]=K.useState(0),[i,s]=K.useState(0),o=K.useRef([]),l=K.useRef([]),u=K.useRef(1),h=K.useRef(0),f=K.useRef(0),p=k=>`pond-rev:${k}`;function g(k){const R=parseInt(localStorage.getItem(p(k))||"0",10);h.current=isNaN(R)?0:R}function A(k){localStorage.setItem(p(k),String(h.current))}const x=K.useRef(null),b=K.useRef(null),O=K.useRef(new Map),E=K.useRef({x:(Nt-1280)/2,y:(It-720)/2,scale:1}),w=K.useRef(!1),_=K.useRef(!1),D=K.useRef({sx:0,sy:0,camX:0,camY:0}),M=K.useRef(!1),[$,I]=K.useState(!1),[m,v]=K.useState(!1),[T,C]=K.useState(!1),[P,S]=K.useState(null),We=()=>I(!0),Ge=()=>I(!1),hn=()=>v(!0),X=()=>v(!1),j=k=>{S(k),C(!0)},W=()=>C(!1),[Y,ge]=K.useState(!1),_e=K.useRef(!1),Ce=K.useRef(null);function Wt(){const k={version:3,nextId:u.current,fish:o.current,food:l.current,savedAt:new Date().toISOString()};try{localStorage.setItem(_h,JSON.stringify(k))}catch{}}function Ue(k=800){_e.current=!0,Ce.current==null&&(Ce.current=window.setTimeout(()=>{Ce.current=null,_e.current&&(Wt(),_e.current=!1)},k))}const qt=K.useRef(null),kt=K.useRef(!1);function Ws(k){if(Array.isArray(k))return k.map(Ws);if(k&&typeof k=="object"){const R={};for(const[L,Z]of Object.entries(k))Z!==void 0&&(R[L]=Ws(Z));return R}return typeof k=="number"&&Number.isNaN(k)?null:k}function Pa(){const k=o.current.map(L=>({id:L.id,x:L.x,y:L.y,vx:L.vx,vy:L.vy,speed:L.speed,sizeScale:L.sizeScale,color:L.color,vision:L.vision,targetFoodId:L.targetFoodId??null,wanderT:L.wanderT,ownerName:L.ownerName??null,petName:L.petName??null,shape:L.shape??null,textureId:L.textureId??null,shapeKey:L.shapeKey??null,textureSvg:L.textureSvg??null})),R={cver:1,nextId:u.current,fish:k,food:l.current.map(L=>({id:L.id,x:L.x,y:L.y,r:L.r,kind:L.kind,growPct:L.growPct})),docRev:h.current};return Ws(R)}function Oi(k=1200){qt.current==null&&(qt.current=window.setTimeout(async()=>{qt.current=null;try{kt.current=!0,await Gy(st,Pa()),setTimeout(()=>{kt.current=!1},300)}catch(R){console.warn("saveCloud failed",R)}},k))}async function Mt(){try{kt.current=!0,await Gy(st,Pa()),setTimeout(()=>{kt.current=!1},300)}catch(k){console.warn("saveCloudNow failed",k)}}async function Mi(){const k="texture-cache-v1",R=te=>{try{return JSON.parse(localStorage.getItem(k)||"{}")[te]||null}catch{return null}},L=(te,le)=>{try{const fe=JSON.parse(localStorage.getItem(k)||"{}");fe[te]=le;const Ie=Object.keys(fe);Ie.length>60&&delete fe[Ie[0]],localStorage.setItem(k,JSON.stringify(fe))}catch{}},Z=[];for(const te of o.current)if(!te.textureDataUrl&&te.textureId){const le=R(te.textureId);if(le){te.textureDataUrl=le;const fe=new Image;fe.src=le,O.current.set(te.id,fe)}else Z.push(te.textureId)}const re=Array.from(new Set(Z)),ae=await Promise.all(re.map(te=>Tx(te)));re.forEach((te,le)=>{const fe=ae[le];if(fe){L(te,fe);for(const Ie of o.current)if(Ie.textureId===te&&!Ie.textureDataUrl){Ie.textureDataUrl=fe;const xt=new Image;xt.src=fe,O.current.set(Ie.id,xt)}}}),Ue()}function Li(k){return{version:3,nextId:Math.max(1,k.nextId??1),fish:(k.fish??[]).map(R=>({...R})),food:k.food??[],savedAt:k.savedAt??new Date().toISOString()}}function qs(k){const R={nextId:Math.max(1,k.nextId??1),fish:k.fish??[],food:(k.food??[]).map(L=>({id:L.id,x:L.x,y:L.y,r:L.r,kind:"common",growPct:.004})),savedAt:k.savedAt??new Date().toISOString()};return Li(R)}function Hs(){try{const k=localStorage.getItem(_h);if(k){const Z=JSON.parse(k);if((Z==null?void 0:Z.version)===3)return Z}const R=localStorage.getItem("fish-pond-save-v2");if(R){const Z=JSON.parse(R);if((Z==null?void 0:Z.version)===2)return Li(Z)}const L=localStorage.getItem("fish-pond-save-v1");if(L){const Z=JSON.parse(L);if((Z==null?void 0:Z.version)===1)return qs(Z)}return null}catch{return null}}function Fi(){const k=t.current,L=e.current.getBoundingClientRect(),Z=window.devicePixelRatio||1,ae=Math.min(Z,2.2),te=Math.max(320,Math.floor(L.width)),le=Math.max(220,Math.floor(L.height));k.width=Math.floor(te*ae),k.height=Math.floor(le*ae),k.style.width=te+"px",k.style.height=le+"px",w.current||(E.current.scale=1,E.current.x=Zt((Nt-te/E.current.scale)/2,0,Math.max(0,Nt-te/E.current.scale)),E.current.y=Zt((It-le/E.current.scale)/2,0,Math.max(0,It-le/E.current.scale)),w.current=!0)}K.useEffect(()=>{let k=null;const R=()=>{k==null&&(k=window.setTimeout(()=>{k=null,Fi()},60))},L=new ResizeObserver(R);return e.current&&L.observe(e.current),()=>L.disconnect()},[]),K.useEffect(()=>{Mx()},[]),K.useEffect(()=>{g(st)},[]),K.useEffect(()=>{Fi();const k=Hs();if(k){o.current=k.fish??[],l.current=k.food??[],u.current=Math.max(1,k.nextId??1),r(o.current.length),s(l.current.length);for(const R of o.current){if(R.textureDataUrl){const L=new Image;L.src=R.textureDataUrl,O.current.set(R.id,L)}R.shape||(R.shape="angelfish")}}},[]),K.useEffect(()=>{const k=()=>Wt(),R=()=>{document.visibilityState==="hidden"&&Wt()};return window.addEventListener("beforeunload",k),document.addEventListener("visibilitychange",R),()=>{window.removeEventListener("beforeunload",k),document.removeEventListener("visibilitychange",R)}},[]),K.useEffect(()=>{(async()=>{const k=await _l();console.log("Firebase anon uid:",k);const R=await wx(st);R?(o.current=R.fish??[],l.current=R.food??[],u.current=R.nextId??1,r(o.current.length),s(l.current.length),f.current=R.docRev??0,h.current=f.current,A(st),Ue(),await Mi()):(h.current+=1,A(st),await Mt());const L=Ex(st,async Z=>{if(kt.current)return;const re=Z.docRev??0;f.current=re,!(re<=h.current)&&(o.current=Z.fish??[],l.current=Z.food??[],u.current=Z.nextId??1,r(o.current.length),s(l.current.length),h.current=re,A(st),Ue(),await Mi())});return()=>L()})()},[]);function Ui(){const R=t.current.getBoundingClientRect();return{cssW:R.width,cssH:R.height}}function Gs(){const{cssW:k,cssH:R}=Ui(),L=E.current,Z=k/L.scale,re=R/L.scale;L.x=Zt(L.x,0,Math.max(0,Nt-Z)),L.y=Zt(L.y,0,Math.max(0,It-re))}function Ks(k,R){const L=E.current;return{x:L.x+k/L.scale,y:L.y+R/L.scale}}function ni(k,R,L){const{x:Z,y:re}=Ks(k,R),ae=E.current;ae.scale=Zt(ae.scale*L,Ky,Qy),ae.x=Z-k/ae.scale,ae.y=re-R/ae.scale,Gs()}function ka(){const k=t.current.getBoundingClientRect();ni(k.width/2,k.height/2,Xy)}function _c(){const k=t.current.getBoundingClientRect();ni(k.width/2,k.height/2,1/Xy)}function Qs(){const{cssW:k,cssH:R}=Ui(),L=E.current;L.scale=1,L.x=Zt((Nt-k/L.scale)/2,0,Math.max(0,Nt-k/L.scale)),L.y=Zt((It-R/L.scale)/2,0,Math.max(0,It-R/L.scale))}function Xs(){const{cssW:k,cssH:R}=Ui(),L=E.current;L.scale=Zt(Math.min(k/Nt,R/It),Ky,Qy),L.x=0,L.y=0,Gs()}function ji(){const k=e.current;if(!k)return Jy;const R=k.getBoundingClientRect(),L=R.width*R.height/(1280*720);return Math.max(24,Math.floor(Jy*Math.min(1.2,L)))}function it(){if(o.current.length>=ji())return;const{cssW:k,cssH:R}=Ui(),L=E.current,Z=k/L.scale,re=R/L.scale,ae=be(0,Math.PI*2),te=be(vl,wl),fe={id:u.current++,x:be(L.x+40,L.x+Z-40),y:be(L.y+40,L.y+re-40),vx:Math.cos(ae)*te,vy:Math.sin(ae)*te,speed:te,sizeScale:be(.9,1.1),color:Tl(),vision:El,targetFoodId:null,wanderT:be(0,1e3),ownerName:null,petName:null,textureDataUrl:null,textureId:null,shape:"angelfish",shapeKey:null,textureSvg:null};o.current.push(fe),r(o.current.length),Ue(),h.current+=1,A(st),Mt()}async function ut(k){const R=k.make(256,128);await _l();const L=await mh(R);try{await gh(L,R),console.log("[texture] stored:",L)}catch(Lt){console.warn("[texture] store fail:",Lt)}const Z=t.current.getBoundingClientRect(),re=E.current,ae=Z.width/re.scale,te=Z.height/re.scale,le=be(0,Math.PI*2),fe=be(vl,wl),xt={id:u.current++,x:be(re.x+40,re.x+ae-40),y:be(re.y+40,re.y+te-40),vx:Math.cos(le)*fe,vy:Math.sin(le)*fe,speed:fe,sizeScale:1,color:Tl(),vision:El,targetFoodId:null,wanderT:be(0,1e3),ownerName:null,petName:k.label??null,textureDataUrl:R,textureId:L,shape:k.shape??null,shapeKey:null,textureSvg:null};o.current.push(xt),r(o.current.length);const q=new Image;q.src=R,O.current.set(xt.id,q),Ue(),h.current+=1,A(st),await Mt()}function zi(){try{localStorage.removeItem(_h)}catch{}o.current=[],l.current=[],u.current=1,r(0),s(0),O.current.clear(),Ue(),h.current+=1,A(st),Mt()}function xa(k){const R=k.target.getBoundingClientRect(),L=k.clientX-R.left,Z=k.clientY-R.top;if(k.button===1||k.button===2||M.current){_.current=!0,D.current={sx:L,sy:Z,camX:E.current.x,camY:E.current.y},k.target.setPointerCapture(k.pointerId),k.preventDefault();return}D.current={sx:L,sy:Z,camX:E.current.x,camY:E.current.y},k.target.setPointerCapture(k.pointerId)}function Na(k){if(!(_.current||M.current))return;const R=k.target.getBoundingClientRect(),L=k.clientX-R.left,Z=k.clientY-R.top,re=E.current,ae=D.current,te=(L-ae.sx)/re.scale,le=(Z-ae.sy)/re.scale;re.x=ae.camX-te,re.y=ae.camY-le,Gs(),k.preventDefault()}function vc(k){const R=k.target.getBoundingClientRect(),L=k.clientX-R.left,Z=k.clientY-R.top;if(_.current||M.current||k.button===1||k.button===2){_.current=!1,k.target.releasePointerCapture(k.pointerId);return}const re=Ks(L,Z),ae=u.current++,te=Rx();l.current.push({id:ae,x:Zt(re.x,0,Nt),y:Zt(re.y,0,It),r:te.radius,kind:te.kind,growPct:te.growPct}),s(l.current.length),Ue(),h.current+=1,A(st),Mt(),k.target.releasePointerCapture(k.pointerId)}function ri(k){const R=k.target.getBoundingClientRect();ni(k.clientX-R.left,k.clientY-R.top,Math.exp(-k.deltaY*.0015)),k.preventDefault()}function Da(k){k.preventDefault()}K.useEffect(()=>{const k=L=>{L.code==="Space"&&(M.current=!0)},R=L=>{L.code==="Space"&&(M.current=!1)};return window.addEventListener("keydown",k),window.addEventListener("keyup",R),()=>{window.removeEventListener("keydown",k),window.removeEventListener("keyup",R)}},[]),K.useEffect(()=>{const k=t.current,R=k.getContext("2d");Fi();const L=Z=>{R.globalAlpha=1,R.globalCompositeOperation="source-over";const re=Z/1e3,ae=b.current??re,te=Zt(re-ae,0,.05);b.current=re;const le=window.devicePixelRatio||1,fe=E.current;R.setTransform(le*fe.scale,0,0,le*fe.scale,-fe.x*le*fe.scale,-fe.y*le*fe.scale),Wx(R,re);for(const q of l.current)ba(R,q,re);const Ie=l.current;let xt=!1;for(const q of o.current){let Lt=null,yt=1/0;for(const Je of Ie){const Ne=Zy(q.x,q.y,Je.x,Je.y);Ne<q.vision&&Ne<yt&&(yt=Ne,Lt=Je)}let $n=q.vx,je=q.vy;const Wn=q.speed*Px(q.sizeScale);if(Lt){const Je=Lt.x-q.x,Ne=Lt.y-q.y,ze=Math.hypot(Je,Ne)||1;$n=Je/ze*Wn,je=Ne/ze*Wn}else{q.wanderT+=te;const Je=Math.sin(q.wanderT*1.8+q.id*1.37)*.6,Ne=Math.hypot(q.vx,q.vy)||1;let ze=q.vx/Ne,qn=q.vy/Ne;const Ys=-qn,dn=ze;ze+=Ys*Je*.25,qn+=dn*Je*.25;const Hn=Math.hypot(ze,qn)||1;$n=ze/Hn*Wn,je=qn/Hn*Wn}q.vx=e_(q.vx,$n,Yy),q.vy=e_(q.vy,je,Yy),q.x+=q.vx*te,q.y+=q.vy*te;const ve=14*q.sizeScale;q.x<ve?(q.x=ve,q.vx=Math.abs(q.vx)):q.x>Nt-ve&&(q.x=Nt-ve,q.vx=-Math.abs(q.vx)),q.y<ve?(q.y=ve,q.vy=Math.abs(q.vy)):q.y>It-ve&&(q.y=It-ve,q.vy=-Math.abs(q.vy));const Ee=Sx*q.sizeScale;for(let Je=Ie.length-1;Je>=0;Je--){const Ne=Ie[Je];if(Zy(q.x,q.y,Ne.x,Ne.y)<=Ee+Ne.r){Ie.splice(Je,1);const ze=Ne.growPct/(1+(q.sizeScale-1)*.8);q.sizeScale=Math.min(Ax,q.sizeScale*(1+ze)),xt=!0}}}xt&&(Ue(),h.current+=1,A(st),Oi(1200)),s(Ie.length);for(const q of o.current){const Lt=Math.atan2(q.vy,q.vx),yt=Ix*q.sizeScale,{path:$n,box:je,flipX:Wn}=Lx(q),ve=yt*1.6,Ee=yt*.9,Je=Math.sin((re+q.id)*8)*(yt*.22);if(R.save(),R.translate(q.x,q.y),R.rotate(Lt),Wn&&(R.scale(-1,1),R.translate(-ve*.5,0)),!q.textureDataUrl||!O.current.get(q.id)){const Ne=R.createLinearGradient(0,-Ee,0,Ee);Ne.addColorStop(0,"rgba(255,255,255,0.9)"),Ne.addColorStop(1,q.color),R.fillStyle=Ne,R.beginPath(),$n?(R.scale(ve/je.w,Ee/je.h),R.fill($n)):(Gi(R,q.shape??"angelfish",ve,Ee),R.fill())}else{const Ne=O.current.get(q.id);R.save(),R.beginPath(),Gi(R,q.shape??"angelfish",ve,Ee),R.clip();const ze=28,qn=Ne.width,Ys=Ne.height;for(let Gn=0;Gn<ze;Gn++){const Bi=Math.floor(Gn/ze*qn),Sn=Math.floor(qn/ze),Va=-ve*.5+Gn/ze*ve,Oa=ve/ze,Js=Math.sin(re*6+Gn*.6+q.id*1.7)*(Ee*.02);R.drawImage(Ne,Bi,0,Sn,Ys,Va,-Ee*.5+Js,Oa,Ee)}R.save(),R.globalCompositeOperation="soft-light";const dn=R.createLinearGradient(0,-Ee*.6,0,+Ee*.6);dn.addColorStop(0,"rgba(255,255,255,0.75)"),dn.addColorStop(.35,"rgba(255,255,255,0.25)"),dn.addColorStop(1,"rgba(255,255,255,0.00)"),R.fillStyle=dn,R.beginPath(),Gi(R,q.shape??"angelfish",ve,Ee),R.fill(),R.restore(),R.save(),R.globalCompositeOperation="multiply";const Hn=R.createRadialGradient(0,Ee*.25,Ee*.1,0,Ee*.25,Ee*.7);Hn.addColorStop(0,"rgba(0,0,0,0.00)"),Hn.addColorStop(1,"rgba(0,0,0,0.22)"),R.fillStyle=Hn,R.beginPath(),Gi(R,q.shape??"angelfish",ve,Ee),R.fill(),R.restore(),R.restore()}R.lineWidth=.8,R.strokeStyle="rgba(0,0,0,0.18)",R.beginPath(),Gi(R,q.shape??"angelfish",ve,Ee),R.stroke(),R.save(),R.globalCompositeOperation="source-atop",R.lineWidth=1.6,R.strokeStyle="rgba(0,0,0,0.12)",R.beginPath(),Gi(R,q.shape??"angelfish",ve*.985,Ee*.985),R.stroke(),R.restore(),R.beginPath(),R.moveTo(-ve*.45,0),R.lineTo(-ve*.65,-Ee*.35+Je),R.lineTo(-ve*.65,Ee*.35-Je),R.closePath(),R.fill(),R.fillStyle="#0b1b2b",R.beginPath(),R.arc(ve*.28,-Ee*.12,Math.max(1.5,yt*.07),0,Math.PI*2),R.fill(),window.__showVision&&(R.strokeStyle="rgba(0,0,0,0.08)",R.setLineDash([6,6]),R.beginPath(),R.arc(0,0,q.vision,0,Math.PI*2),R.stroke(),R.setLineDash([])),R.restore(),q.petName&&(R.save(),R.font="10px system-ui, -apple-system, Segoe UI, Roboto, sans-serif",R.fillStyle="rgba(0,0,0,0.72)",R.textAlign="center",R.fillText(q.petName,q.x,q.y-yt*1.2),R.restore())}x.current=requestAnimationFrame(L)};return x.current=requestAnimationFrame(L),()=>{x.current&&cancelAnimationFrame(x.current)}},[]);function ba(k,R,L){if(R.kind==="common"){k.fillStyle="#8b5e3c",k.beginPath(),k.arc(R.x,R.y,R.r,0,Math.PI*2),k.fill();return}if(R.kind==="uncommon"){const te=.5+.5*Math.sin(L*4+R.id);k.save(),k.globalAlpha=.35+.35*te,k.strokeStyle="rgba(55,199,212,0.8)",k.lineWidth=2,k.beginPath(),k.arc(R.x,R.y,R.r+4+te*2,0,Math.PI*2),k.stroke(),k.restore();const le=k.createRadialGradient(R.x,R.y,0,R.x,R.y,R.r+1);le.addColorStop(0,"#8ef3ff"),le.addColorStop(1,"#37c7d4"),k.fillStyle=le,k.beginPath(),k.arc(R.x,R.y,R.r,0,Math.PI*2),k.fill();return}const Z=.6+.4*Math.sin(L*6+R.id);k.save();const re=R.r+7+Z*3,ae=k.createRadialGradient(R.x,R.y,0,R.x,R.y,re);ae.addColorStop(0,"rgba(255,215,0,0.9)"),ae.addColorStop(1,"rgba(255,215,0,0.05)"),k.fillStyle=ae,k.beginPath(),k.arc(R.x,R.y,re,0,Math.PI*2),k.fill(),k.translate(R.x,R.y),k.rotate(Math.PI/6*Z),k.fillStyle="#ffd700",kx(k,5,R.r+2,Math.max(2,R.r-2)),k.fill(),k.restore()}return z.jsxs("div",{className:"w-full max-w-5xl mx-auto pb-[env(safe-area-inset-bottom,0px)]",children:[z.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-3",children:[z.jsx("h2",{className:"text-xl font-semibold",children:"🐟 小鱼塘 Mini-Game"}),z.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[z.jsx("button",{onClick:_c,className:"px-2 py-1 rounded-2xl bg-slate-200 hover:bg-slate-300",children:"➖"}),z.jsx("button",{onClick:ka,className:"px-2 py-1 rounded-2xl bg-slate-200 hover:bg-slate-300",children:"➕"}),z.jsx("button",{onClick:Qs,className:"px-2 py-1 rounded-2xl bg-slate-200 hover:bg-slate-300",children:"⟳ 重置"}),z.jsx("button",{onClick:Xs,className:"px-2 py-1 rounded-2xl bg-slate-200 hover:bg-slate-300",children:"⤢ 全景"}),z.jsx("button",{onClick:it,className:`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-2xl shadow-sm
            bg-sky-500 text-white hover:bg-sky-600 active:scale-[0.98]`,children:"+1 条鱼"}),z.jsxs("div",{className:"relative",children:[z.jsx("button",{onClick:()=>ge(k=>!k),className:`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-2xl shadow-sm
            bg-indigo-500 text-white hover:bg-indigo-600`,title:"从贴图库添加海洋生物皮肤",children:"🖼 贴图海生物"}),Y&&z.jsx("div",{className:"absolute right-0 mt-2 w-[360px] p-2 bg-white rounded-xl shadow-lg border grid grid-cols-3 gap-2 z-50",children:HE.map(k=>z.jsxs("button",{onClick:()=>{ut(k),ge(!1)},className:"group rounded-lg border hover:shadow-sm overflow-hidden text-xs",children:[z.jsx("img",{src:k.preview,alt:k.label,className:"w-full h-[60px] object-cover"}),z.jsx("div",{className:"px-2 py-1 text-center",children:k.label})]},k.key))})]}),z.jsx("button",{onClick:We,className:`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-2xl shadow-sm
            bg-violet-500 text-white hover:bg-violet-600 active:scale-[0.98]`,children:"🎨 自定义新鱼"}),z.jsx("button",{onClick:hn,className:`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-2xl shadow-sm
            bg-emerald-500 text-white hover:bg-emerald-600 active:scale-[0.98]`,children:"🎯 创建新鱼形（两步）"}),z.jsx("button",{onClick:()=>{o.current=[],r(0),Ue(),h.current+=1,A(st),Mt()},className:"px-3 py-1.5 rounded-2xl bg-slate-200 hover:bg-slate-300",children:"清空鱼"}),z.jsx("button",{onClick:()=>{l.current=[],s(0),Ue(),h.current+=1,A(st),Mt()},className:"px-3 py-1.5 rounded-2xl bg-amber-200 hover:bg-amber-300",children:"清空饲料"}),z.jsx("button",{onClick:()=>{const R=`${location.origin}/yu/?pond=${st}`;navigator.clipboard.writeText(R).then(()=>alert("分享链接已复制到剪贴板"))},className:`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-2xl shadow-sm
            bg-emerald-500 text-white hover:bg-emerald-600`,title:"复制当前池塘的分享链接",children:"🔗 分享这个池塘"}),z.jsx("button",{onClick:zi,className:"px-3 py-1.5 rounded-2xl bg-rose-200 hover:bg-rose-300",children:"清空存档"})]})]}),z.jsxs("div",{className:"text-sm text-slate-600 mb-2",children:["滚轮缩放，按住",z.jsx("strong",{children:"空格"}),"或",z.jsx("strong",{children:"右键/中键"}),"拖拽视角；Alt+V 显示视野圈。",z.jsxs("span",{className:"ml-2",children:["鱼：",n]}),z.jsxs("span",{className:"ml-3",children:["饲料：",i]})]}),z.jsx("div",{ref:e,className:`
          w-full
          h-[min(72svh,72vh)]
          sm:h-[70vh] md:h-[68vh]
          lg:aspect-[16/9]
          min-h-[240px] max-h-[calc(100svh-120px)]
          rounded-2xl overflow-hidden shadow-inner bg-sky-50 border border-sky-100
        `,style:{paddingBottom:"env(safe-area-inset-bottom,0px)"},children:z.jsx("canvas",{ref:t,className:"w-full h-full cursor-crosshair touch-none select-none",onPointerDown:xa,onPointerMove:Na,onPointerUp:vc,onWheel:ri,onContextMenu:Da})}),$&&z.jsx(Hx,{onCancel:Ge,onCreate:async(k,R,L,Z)=>{if(o.current.length>=ji()){Ge();return}await _l();const re=await mh(L);try{await gh(re,L),console.log("[texture] stored:",re)}catch(yt){console.warn("[texture] store fail:",yt)}const ae=t.current.getBoundingClientRect(),te=ae.width/E.current.scale,le=ae.height/E.current.scale,fe=be(0,Math.PI*2),Ie=be(vl,wl),q={id:u.current++,x:be(E.current.x+40,E.current.x+te-40),y:be(E.current.y+40,E.current.y+le-40),vx:Math.cos(fe)*Ie,vy:Math.sin(fe)*Ie,speed:Ie,sizeScale:1,color:Tl(),vision:El,targetFoodId:null,wanderT:be(0,1e3),ownerName:k||null,petName:R||null,textureDataUrl:L,textureId:re,shape:Z||null,shapeKey:null,textureSvg:null};o.current.push(q),r(o.current.length);const Lt=new Image;Lt.src=L,O.current.set(q.id,Lt),Ue(),h.current+=1,A(st),await Mt(),Ge()}}),m&&z.jsx(WS,{onSave:k=>{X(),j(k)},onCancel:X}),T&&P&&z.jsx(qS,{outline:P,onSave:async k=>{if(W(),o.current.length>=ji())return;const R=k.previewPng;if(!R){console.warn("No previewPng to save from detail editor.");return}await _l();const L=await mh(R);try{await gh(L,R),console.log("[texture] stored from detail editor:",L)}catch(q){console.warn("[texture] store fail from detail editor:",q)}const Z=t.current.getBoundingClientRect(),re=Z.width/E.current.scale,ae=Z.height/E.current.scale,te=be(0,Math.PI*2),le=be(vl,wl),fe=u.current++,Ie={id:fe,x:be(E.current.x+40,E.current.x+re-40),y:be(E.current.y+40,E.current.y+ae-40),vx:Math.cos(te)*le,vy:Math.sin(te)*le,speed:le,sizeScale:1,color:Tl(),vision:El,targetFoodId:null,wanderT:be(0,1e3),ownerName:null,petName:null,shapeKey:`custom:${P.id}`,textureSvg:k.svgText,textureDataUrl:R,textureId:L,shape:"angelfish"};o.current.push(Ie),r(o.current.length);const xt=new Image;xt.src=R,O.current.set(fe,xt),Ue(),h.current+=1,A(st),await Mt()},onBack:()=>{W(),hn()}})]})}function Hx({onCancel:t,onCreate:e}){const n=K.useRef(null),r=K.useRef(null),[i,s]=K.useState("#ff6b6b"),[o,l]=K.useState(8),[u,h]=K.useState(!1),[f,p]=K.useState(""),[g,A]=K.useState(""),[x,b]=K.useState("angelfish"),O=K.useRef("angelfish");K.useEffect(()=>{O.current=x},[x]);const E=Math.floor(Math.min(520,Math.max(280,window.innerWidth*.9))),w=Math.floor(E*.56),_={cx:E*.5,cy:w*.5,L:E*.68,H:w*.6};function D(X,j,W){const Y=window.devicePixelRatio||1;X.width=Math.floor(j*Y),X.height=Math.floor(W*Y),X.style.width=j+"px",X.style.height=W+"px";const ge=X.getContext("2d");return ge.setTransform(Y,0,0,Y,0,0),ge}function M(X){const j=r.current,W=j.getContext("2d");W.clearRect(0,0,E,w),W.save(),W.strokeStyle="rgba(2,132,199,0.9)",W.lineWidth=2,W.setLineDash([6,6]),W.beginPath(),wh(W,X??O.current,_.cx,_.cy,_.L,_.H),W.stroke(),W.restore(),W.save(),W.fillStyle="rgba(0,0,0,0.45)",W.font="12px system-ui, sans-serif",W.textAlign="center",W.fillText("只允许在鱼体轮廓内绘制（超出无效）",E/2,18),W.restore()}function $(){const X=n.current,j=X.getContext("2d");j.save(),j.globalCompositeOperation="destination-in",j.beginPath(),wh(j,O.current,_.cx,_.cy,_.L,_.H),j.fillStyle="#000",j.fill(),j.restore()}K.useEffect(()=>{const X=D(n.current,E,w);X.fillStyle="#f8fafc",X.fillRect(0,0,E,w),D(r.current,E,w),M(x)},[]);const I=K.useRef(!1),m=K.useRef(null);function v(X){const j=O.current;X.beginPath(),wh(X,j,_.cx,_.cy,_.L,_.H),X.clip()}function T(X){const j=X.target.getBoundingClientRect();return{x:X.clientX-j.left,y:X.clientY-j.top}}function C(X){X.target.setPointerCapture(X.pointerId),I.current=!0,m.current=T(X),$()}function P(X){I.current=!1,m.current=null,X.target.releasePointerCapture(X.pointerId)}function S(X){if(!I.current)return;const j=n.current,W=j.getContext("2d"),Y=T(X),ge=m.current??Y;W.save(),v(W),W.lineCap="round",W.lineJoin="round",W.lineWidth=o,u?(W.globalCompositeOperation="destination-out",W.strokeStyle="rgba(0,0,0,1)"):(W.globalCompositeOperation="source-over",W.strokeStyle=i),W.beginPath(),W.moveTo(ge.x,ge.y),W.lineTo(Y.x,Y.y),W.stroke(),W.restore(),m.current=Y}function We(){const X=n.current,j=X.getContext("2d");j.save(),v(j),j.clearRect(0,0,E,w),j.restore()}function Ge(){if(!f.trim()||!g.trim()){alert("请填写 用户名字 和 宠物鱼名字");return}const X=n.current.toDataURL("image/png");e(f.trim(),g.trim(),X,x)}const hn=["#ff6b6b","#f59e0b","#22c55e","#3b82f6","#8b5cf6","#222222"];return z.jsx("div",{className:"fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:z.jsxs("div",{className:"w-full max-w-[720px] bg-white rounded-2xl shadow-xl p-4",children:[z.jsxs("div",{className:"flex items-center justify-between mb-2",children:[z.jsx("h3",{className:"text-lg font-semibold",children:"🎨 自定义宠物鱼"}),z.jsx("button",{onClick:t,className:"px-2 py-1 text-slate-600 hover:text-black",children:"关闭"})]}),z.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[auto,220px] gap-4",children:[z.jsxs("div",{className:"flex flex-col items-center",children:[z.jsxs("div",{className:"relative",children:[z.jsx("canvas",{ref:n,className:"rounded-xl border border-sky-200 shadow-inner touch-none bg-white",style:{width:E,height:w},onPointerDown:C,onPointerMove:S,onPointerUp:P,onPointerLeave:P}),z.jsx("canvas",{ref:r,className:"absolute inset-0 pointer-events-none",style:{width:E,height:w}})]}),z.jsxs("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:[z.jsx("span",{className:"text-sm text-slate-600 mr-1",children:"鱼形："}),[["angelfish","神仙鱼"],["swordfish","旗鱼"],["longtail","长尾斗鱼"]].map(([X,j])=>z.jsx("button",{onClick:()=>{const W=X;b(W),O.current=W,$(),M(W);const Y=n.current.getContext("2d");Y.fillStyle="#f8fafc",Y.fillRect(0,0,E,w),Y.fillStyle="rgba(0,0,0,0.45)",Y.font="12px system-ui, sans-serif",Y.textAlign="center",Y.fillText("只允许在鱼体轮廓内绘制（超出无效）",E/2,20)},className:`px-2 py-1 rounded-md border ${x===X?"bg-sky-600 text-white":"bg-white"}`,children:j},X)),hn.map(X=>z.jsx("button",{onClick:()=>{s(X),h(!1)},className:"w-6 h-6 rounded-full border border-black/10",style:{background:X},title:X},X)),z.jsx("button",{onClick:()=>h(!u),className:`px-2 py-1 rounded-lg border ${u?"bg-slate-700 text-white":"bg-white"}`,children:"橡皮"}),z.jsxs("label",{className:"text-sm text-slate-600",children:["笔刷",z.jsx("input",{type:"range",min:2,max:24,value:o,onChange:X=>l(parseInt(X.target.value)),className:"ml-2 align-middle"})]}),z.jsx("button",{onClick:We,className:"px-2 py-1 rounded-lg border bg-white hover:bg-slate-50",children:"清空"})]})]}),z.jsxs("div",{className:"space-y-3",children:[z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm text-slate-600 mb-1",children:"用户名字"}),z.jsx("input",{value:f,onChange:X=>p(X.target.value),className:"w-full px-3 py-2 rounded-lg border",placeholder:"例如：YANG JIZHOU"})]}),z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm text-slate-600 mb-1",children:"宠物鱼名字"}),z.jsx("input",{value:g,onChange:X=>A(X.target.value),className:"w-full px-3 py-2 rounded-lg border",placeholder:"例如：小蓝"})]}),z.jsx("div",{className:"text-xs text-slate-500",children:"说明：只能在椭圆轮廓内绘制；你的图样会作为鱼体贴图保存（本地存档）。"}),z.jsxs("div",{className:"flex gap-2 pt-2",children:[z.jsx("button",{onClick:Ge,className:"px-3 py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700",children:"加入鱼塘"}),z.jsx("button",{onClick:t,className:"px-3 py-2 rounded-xl border bg-white hover:bg-slate-50",children:"取消"})]})]})]})]})})}const Gx=f0(document.getElementById("root"));Gx.render(z.jsx(qx,{}));
