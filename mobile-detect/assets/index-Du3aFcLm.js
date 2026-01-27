var xx=Object.defineProperty;var bx=(e,t,r)=>t in e?xx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var hp=(e,t,r)=>bx(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function Sx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var n0={exports:{}},co={},i0={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),kx=Symbol.for("react.portal"),Cx=Symbol.for("react.fragment"),Ex=Symbol.for("react.strict_mode"),Tx=Symbol.for("react.profiler"),Ix=Symbol.for("react.provider"),zx=Symbol.for("react.context"),Ax=Symbol.for("react.forward_ref"),Ox=Symbol.for("react.suspense"),Rx=Symbol.for("react.memo"),Nx=Symbol.for("react.lazy"),mp=Symbol.iterator;function Mx(e){return e===null||typeof e!="object"?null:(e=mp&&e[mp]||e["@@iterator"],typeof e=="function"?e:null)}var a0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function gi(e,t,r){this.props=e,this.context=t,this.refs=o0,this.updater=r||a0}gi.prototype.isReactComponent={};gi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function l0(){}l0.prototype=gi.prototype;function Ad(e,t,r){this.props=e,this.context=t,this.refs=o0,this.updater=r||a0}var Od=Ad.prototype=new l0;Od.constructor=Ad;s0(Od,gi.prototype);Od.isPureReactComponent=!0;var gp=Array.isArray,u0=Object.prototype.hasOwnProperty,Rd={current:null},d0={key:!0,ref:!0,__self:!0,__source:!0};function c0(e,t,r){var n,a={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)u0.call(t,n)&&!d0.hasOwnProperty(n)&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<o){for(var u=Array(o),d=0;d<o;d++)u[d]=arguments[d+2];a.children=u}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===void 0&&(a[n]=o[n]);return{$$typeof:Ca,type:e,key:i,ref:s,props:a,_owner:Rd.current}}function Dx(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function Px(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var yp=/\/+/g;function Xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Px(""+e.key):t.toString(36)}function _s(e,t,r,n,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ca:case kx:s=!0}}if(s)return s=e,a=a(s),e=n===""?"."+Xo(s,0):n,gp(a)?(r="",e!=null&&(r=e.replace(yp,"$&/")+"/"),_s(a,t,r,"",function(d){return d})):a!=null&&(Nd(a)&&(a=Dx(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(yp,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=n===""?".":n+":",gp(e))for(var o=0;o<e.length;o++){i=e[o];var u=n+Xo(i,o);s+=_s(i,t,r,u,a)}else if(u=Mx(e),typeof u=="function")for(e=u.call(e),o=0;!(i=e.next()).done;)i=i.value,u=n+Xo(i,o++),s+=_s(i,t,r,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Wa(e,t,r){if(e==null)return e;var n=[],a=0;return _s(e,n,"","",function(i){return t.call(r,i,a++)}),n}function Bx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},vs={transition:null},Lx={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:vs,ReactCurrentOwner:Rd};function f0(){throw Error("act(...) is not supported in production builds of React.")}ge.Children={map:Wa,forEach:function(e,t,r){Wa(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Wa(e,function(){t++}),t},toArray:function(e){return Wa(e,function(t){return t})||[]},only:function(e){if(!Nd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ge.Component=gi;ge.Fragment=Cx;ge.Profiler=Tx;ge.PureComponent=Ad;ge.StrictMode=Ex;ge.Suspense=Ox;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx;ge.act=f0;ge.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=s0({},e.props),a=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Rd.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)u0.call(t,u)&&!d0.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){o=Array(u);for(var d=0;d<u;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:Ca,type:e.type,key:a,ref:i,props:n,_owner:s}};ge.createContext=function(e){return e={$$typeof:zx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ix,_context:e},e.Consumer=e};ge.createElement=c0;ge.createFactory=function(e){var t=c0.bind(null,e);return t.type=e,t};ge.createRef=function(){return{current:null}};ge.forwardRef=function(e){return{$$typeof:Ax,render:e}};ge.isValidElement=Nd;ge.lazy=function(e){return{$$typeof:Nx,_payload:{_status:-1,_result:e},_init:Bx}};ge.memo=function(e,t){return{$$typeof:Rx,type:e,compare:t===void 0?null:t}};ge.startTransition=function(e){var t=vs.transition;vs.transition={};try{e()}finally{vs.transition=t}};ge.unstable_act=f0;ge.useCallback=function(e,t){return pt.current.useCallback(e,t)};ge.useContext=function(e){return pt.current.useContext(e)};ge.useDebugValue=function(){};ge.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};ge.useEffect=function(e,t){return pt.current.useEffect(e,t)};ge.useId=function(){return pt.current.useId()};ge.useImperativeHandle=function(e,t,r){return pt.current.useImperativeHandle(e,t,r)};ge.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};ge.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};ge.useMemo=function(e,t){return pt.current.useMemo(e,t)};ge.useReducer=function(e,t,r){return pt.current.useReducer(e,t,r)};ge.useRef=function(e){return pt.current.useRef(e)};ge.useState=function(e){return pt.current.useState(e)};ge.useSyncExternalStore=function(e,t,r){return pt.current.useSyncExternalStore(e,t,r)};ge.useTransition=function(){return pt.current.useTransition()};ge.version="18.3.1";i0.exports=ge;var Ce=i0.exports;const Ux=Sx(Ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx=Ce,Wx=Symbol.for("react.element"),Fx=Symbol.for("react.fragment"),Vx=Object.prototype.hasOwnProperty,qx=jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hx={key:!0,ref:!0,__self:!0,__source:!0};function p0(e,t,r){var n,a={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Vx.call(t,n)&&!Hx.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Wx,type:e,key:i,ref:s,props:a,_owner:qx.current}}co.Fragment=Fx;co.jsx=p0;co.jsxs=p0;n0.exports=co;var he=n0.exports,$u={},h0={exports:{}},It={},m0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,F){var X=P.length;P.push(F);e:for(;0<X;){var O=X-1>>>1,W=P[O];if(0<a(W,F))P[O]=F,P[X]=W,X=O;else break e}}function r(P){return P.length===0?null:P[0]}function n(P){if(P.length===0)return null;var F=P[0],X=P.pop();if(X!==F){P[0]=X;e:for(var O=0,W=P.length,K=W>>>1;O<K;){var J=2*(O+1)-1,Ee=P[J],Ve=J+1,R=P[Ve];if(0>a(Ee,X))Ve<W&&0>a(R,Ee)?(P[O]=R,P[Ve]=X,O=Ve):(P[O]=Ee,P[J]=X,O=J);else if(Ve<W&&0>a(R,X))P[O]=R,P[Ve]=X,O=Ve;else break e}}return F}function a(P,F){var X=P.sortIndex-F.sortIndex;return X!==0?X:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var u=[],d=[],f=1,p=null,h=3,_=!1,w=!1,$=!1,k=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var F=r(d);F!==null;){if(F.callback===null)n(d);else if(F.startTime<=P)n(d),F.sortIndex=F.expirationTime,t(u,F);else break;F=r(d)}}function S(P){if($=!1,x(P),!w)if(r(u)!==null)w=!0,Z(C);else{var F=r(d);F!==null&&oe(S,F.startTime-P)}}function C(P,F){w=!1,$&&($=!1,y(z),z=-1),_=!0;var X=h;try{for(x(F),p=r(u);p!==null&&(!(p.expirationTime>F)||P&&!Q());){var O=p.callback;if(typeof O=="function"){p.callback=null,h=p.priorityLevel;var W=O(p.expirationTime<=F);F=e.unstable_now(),typeof W=="function"?p.callback=W:p===r(u)&&n(u),x(F)}else n(u);p=r(u)}if(p!==null)var K=!0;else{var J=r(d);J!==null&&oe(S,J.startTime-F),K=!1}return K}finally{p=null,h=X,_=!1}}var T=!1,I=null,z=-1,N=5,U=-1;function Q(){return!(e.unstable_now()-U<N)}function Y(){if(I!==null){var P=e.unstable_now();U=P;var F=!0;try{F=I(!0,P)}finally{F?G():(T=!1,I=null)}}else T=!1}var G;if(typeof g=="function")G=function(){g(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ae=ce.port2;ce.port1.onmessage=Y,G=function(){ae.postMessage(null)}}else G=function(){k(Y,0)};function Z(P){I=P,T||(T=!0,G())}function oe(P,F){z=k(function(){P(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||_||(w=!0,Z(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var X=h;h=F;try{return P()}finally{h=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=h;h=P;try{return F()}finally{h=X}},e.unstable_scheduleCallback=function(P,F,X){var O=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?O+X:O):X=O,P){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=X+W,P={id:f++,callback:F,priorityLevel:P,startTime:X,expirationTime:W,sortIndex:-1},X>O?(P.sortIndex=X,t(d,P),r(u)===null&&P===r(d)&&($?(y(z),z=-1):$=!0,oe(S,X-O))):(P.sortIndex=W,t(u,P),w||_||(w=!0,Z(C))),P},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(P){var F=h;return function(){var X=h;h=F;try{return P.apply(this,arguments)}finally{h=X}}}})(g0);m0.exports=g0;var Gx=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx=Ce,Tt=Gx;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,oa={};function Nn(e,t){oi(e,t),oi(e+"Capture",t)}function oi(e,t){for(oa[e]=t,e=0;e<t.length;e++)y0.add(t[e])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,Qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_p={},vp={};function Yx(e){return xu.call(vp,e)?!0:xu.call(_p,e)?!1:Qx.test(e)?vp[e]=!0:(_p[e]=!0,!1)}function Zx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xx(e,t,r,n){if(t===null||typeof t>"u"||Zx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,r,n,a,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var Md=/[\-:]([a-z])/g;function Dd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Md,Dd);rt[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Md,Dd);rt[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Md,Dd);rt[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pd(e,t,r,n){var a=rt.hasOwnProperty(t)?rt[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xx(t,r,a,n)&&(r=null),n||a===null?Yx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Er=Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),Ud=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),wp=Symbol.iterator;function Si(e){return e===null||typeof e!="object"?null:(e=wp&&e[wp]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Jo;function Fi(e){if(Jo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=n.stack.split(`
`),s=a.length-1,o=i.length-1;1<=s&&0<=o&&a[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==i[o]){var u=`
`+a[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=o);break}}}finally{el=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Fi(e):""}function Jx(e){switch(e.tag){case 5:return Fi(e.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function Cu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case jn:return"Portal";case bu:return"Profiler";case Bd:return"StrictMode";case Su:return"Suspense";case ku:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case v0:return(e.displayName||"Context")+".Consumer";case _0:return(e._context.displayName||"Context")+".Provider";case Ld:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ud:return t=e.displayName||null,t!==null?t:Cu(e.type)||"Memo";case Br:t=e._payload,e=e._init;try{return Cu(e(t))}catch{}}return null}function eb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(t);case 8:return t===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tb(e){var t=$0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Va(e){e._valueTracker||(e._valueTracker=tb(e))}function x0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=$0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eu(e,t){var r=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $p(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Xr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function b0(e,t){t=t.checked,t!=null&&Pd(e,"checked",t,!1)}function Tu(e,t){b0(e,t);var r=Xr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Iu(e,t.type,r):t.hasOwnProperty("defaultValue")&&Iu(e,t.type,Xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xp(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Iu(e,t,r){(t!=="number"||Os(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Vi=Array.isArray;function ti(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Xr(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function zu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bp(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(H(92));if(Vi(r)){if(1<r.length)throw Error(H(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Xr(r)}}function S0(e,t){var r=Xr(t.value),n=Xr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Sp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function k0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?k0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qa,C0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function la(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(Zi).forEach(function(e){rb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zi[t]=Zi[e]})});function E0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Zi.hasOwnProperty(e)&&Zi[e]?(""+t).trim():t+"px"}function T0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=E0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var nb=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ou(e,t){if(t){if(nb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function Ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function jd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mu=null,ri=null,ni=null;function kp(e){if(e=Ia(e)){if(typeof Mu!="function")throw Error(H(280));var t=e.stateNode;t&&(t=go(t),Mu(e.stateNode,e.type,t))}}function I0(e){ri?ni?ni.push(e):ni=[e]:ri=e}function z0(){if(ri){var e=ri,t=ni;if(ni=ri=null,kp(e),t)for(e=0;e<t.length;e++)kp(t[e])}}function A0(e,t){return e(t)}function O0(){}var rl=!1;function R0(e,t,r){if(rl)return e(t,r);rl=!0;try{return A0(e,t,r)}finally{rl=!1,(ri!==null||ni!==null)&&(O0(),z0())}}function ua(e,t){var r=e.stateNode;if(r===null)return null;var n=go(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(H(231,t,typeof r));return r}var Du=!1;if(br)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){Du=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{Du=!1}function ib(e,t,r,n,a,i,s,o,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(f){this.onError(f)}}var Xi=!1,Rs=null,Ns=!1,Pu=null,ab={onError:function(e){Xi=!0,Rs=e}};function sb(e,t,r,n,a,i,s,o,u){Xi=!1,Rs=null,ib.apply(ab,arguments)}function ob(e,t,r,n,a,i,s,o,u){if(sb.apply(this,arguments),Xi){if(Xi){var d=Rs;Xi=!1,Rs=null}else throw Error(H(198));Ns||(Ns=!0,Pu=d)}}function Mn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function N0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cp(e){if(Mn(e)!==e)throw Error(H(188))}function lb(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(H(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return Cp(a),e;if(i===n)return Cp(a),t;i=i.sibling}throw Error(H(188))}if(r.return!==n.return)r=a,n=i;else{for(var s=!1,o=a.child;o;){if(o===r){s=!0,r=a,n=i;break}if(o===n){s=!0,n=a,r=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===r){s=!0,r=i,n=a;break}if(o===n){s=!0,n=i,r=a;break}o=o.sibling}if(!s)throw Error(H(189))}}if(r.alternate!==n)throw Error(H(190))}if(r.tag!==3)throw Error(H(188));return r.stateNode.current===r?e:t}function M0(e){return e=lb(e),e!==null?D0(e):null}function D0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=D0(e);if(t!==null)return t;e=e.sibling}return null}var P0=Tt.unstable_scheduleCallback,Ep=Tt.unstable_cancelCallback,ub=Tt.unstable_shouldYield,db=Tt.unstable_requestPaint,Fe=Tt.unstable_now,cb=Tt.unstable_getCurrentPriorityLevel,Wd=Tt.unstable_ImmediatePriority,B0=Tt.unstable_UserBlockingPriority,Ms=Tt.unstable_NormalPriority,fb=Tt.unstable_LowPriority,L0=Tt.unstable_IdlePriority,fo=null,lr=null;function pb(e){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:gb,hb=Math.log,mb=Math.LN2;function gb(e){return e>>>=0,e===0?32:31-(hb(e)/mb|0)|0}var Ha=64,Ga=4194304;function qi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~a;o!==0?n=qi(o):(i&=s,i!==0&&(n=qi(i)))}else s=r&~a,s!==0?n=qi(s):i!==0&&(n=qi(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Xt(t),a=1<<r,n|=e[r],t&=~a;return n}function yb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _b(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Xt(i),o=1<<s,u=a[s];u===-1?(!(o&r)||o&n)&&(a[s]=yb(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}}function Bu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function U0(){var e=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),e}function nl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ea(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xt(t),e[t]=r}function vb(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Xt(r),i=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~i}}function Fd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Xt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var Se=0;function j0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var W0,Vd,F0,V0,q0,Lu=!1,Ka=[],Vr=null,qr=null,Hr=null,da=new Map,ca=new Map,Ur=[],wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tp(e,t){switch(e){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":da.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(t.pointerId)}}function Ci(e,t,r,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ia(t),t!==null&&Vd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function $b(e,t,r,n,a){switch(t){case"focusin":return Vr=Ci(Vr,e,t,r,n,a),!0;case"dragenter":return qr=Ci(qr,e,t,r,n,a),!0;case"mouseover":return Hr=Ci(Hr,e,t,r,n,a),!0;case"pointerover":var i=a.pointerId;return da.set(i,Ci(da.get(i)||null,e,t,r,n,a)),!0;case"gotpointercapture":return i=a.pointerId,ca.set(i,Ci(ca.get(i)||null,e,t,r,n,a)),!0}return!1}function H0(e){var t=vn(e.target);if(t!==null){var r=Mn(t);if(r!==null){if(t=r.tag,t===13){if(t=N0(r),t!==null){e.blockedOn=t,q0(e.priority,function(){F0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Nu=n,r.target.dispatchEvent(n),Nu=null}else return t=Ia(r),t!==null&&Vd(t),e.blockedOn=r,!1;t.shift()}return!0}function Ip(e,t,r){ws(e)&&r.delete(t)}function xb(){Lu=!1,Vr!==null&&ws(Vr)&&(Vr=null),qr!==null&&ws(qr)&&(qr=null),Hr!==null&&ws(Hr)&&(Hr=null),da.forEach(Ip),ca.forEach(Ip)}function Ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Lu||(Lu=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,xb)))}function fa(e){function t(a){return Ei(a,e)}if(0<Ka.length){Ei(Ka[0],e);for(var r=1;r<Ka.length;r++){var n=Ka[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Vr!==null&&Ei(Vr,e),qr!==null&&Ei(qr,e),Hr!==null&&Ei(Hr,e),da.forEach(t),ca.forEach(t),r=0;r<Ur.length;r++)n=Ur[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Ur.length&&(r=Ur[0],r.blockedOn===null);)H0(r),r.blockedOn===null&&Ur.shift()}var ii=Er.ReactCurrentBatchConfig,Ps=!0;function bb(e,t,r,n){var a=Se,i=ii.transition;ii.transition=null;try{Se=1,qd(e,t,r,n)}finally{Se=a,ii.transition=i}}function Sb(e,t,r,n){var a=Se,i=ii.transition;ii.transition=null;try{Se=4,qd(e,t,r,n)}finally{Se=a,ii.transition=i}}function qd(e,t,r,n){if(Ps){var a=Uu(e,t,r,n);if(a===null)pl(e,t,n,Bs,r),Tp(e,n);else if($b(a,e,t,r,n))n.stopPropagation();else if(Tp(e,n),t&4&&-1<wb.indexOf(e)){for(;a!==null;){var i=Ia(a);if(i!==null&&W0(i),i=Uu(e,t,r,n),i===null&&pl(e,t,n,Bs,r),i===a)break;a=i}a!==null&&n.stopPropagation()}else pl(e,t,n,null,r)}}var Bs=null;function Uu(e,t,r,n){if(Bs=null,e=jd(n),e=vn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=N0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bs=e,null}function G0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cb()){case Wd:return 1;case B0:return 4;case Ms:case fb:return 16;case L0:return 536870912;default:return 16}default:return 16}}var Wr=null,Hd=null,$s=null;function K0(){if($s)return $s;var e,t=Hd,r=t.length,n,a="value"in Wr?Wr.value:Wr.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===a[i-n];n++);return $s=a.slice(e,1<n?1-n:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qa(){return!0}function zp(){return!1}function zt(e){function t(r,n,a,i,s){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qa:zp,this.isPropagationStopped=zp,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),t}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gd=zt(yi),Ta=Pe({},yi,{view:0,detail:0}),kb=zt(Ta),il,al,Ti,po=Pe({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ti&&(Ti&&e.type==="mousemove"?(il=e.screenX-Ti.screenX,al=e.screenY-Ti.screenY):al=il=0,Ti=e),il)},movementY:function(e){return"movementY"in e?e.movementY:al}}),Ap=zt(po),Cb=Pe({},po,{dataTransfer:0}),Eb=zt(Cb),Tb=Pe({},Ta,{relatedTarget:0}),sl=zt(Tb),Ib=Pe({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),zb=zt(Ib),Ab=Pe({},yi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ob=zt(Ab),Rb=Pe({},yi,{data:0}),Op=zt(Rb),Nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Db={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Db[e])?!!t[e]:!1}function Kd(){return Pb}var Bb=Pe({},Ta,{key:function(e){if(e.key){var t=Nb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lb=zt(Bb),Ub=Pe({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=zt(Ub),jb=Pe({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),Wb=zt(jb),Fb=Pe({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vb=zt(Fb),qb=Pe({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hb=zt(qb),Gb=[9,13,27,32],Qd=br&&"CompositionEvent"in window,Ji=null;br&&"documentMode"in document&&(Ji=document.documentMode);var Kb=br&&"TextEvent"in window&&!Ji,Q0=br&&(!Qd||Ji&&8<Ji&&11>=Ji),Np=" ",Mp=!1;function Y0(e,t){switch(e){case"keyup":return Gb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Qb(e,t){switch(e){case"compositionend":return Z0(t);case"keypress":return t.which!==32?null:(Mp=!0,Np);case"textInput":return e=t.data,e===Np&&Mp?null:e;default:return null}}function Yb(e,t){if(Fn)return e==="compositionend"||!Qd&&Y0(e,t)?(e=K0(),$s=Hd=Wr=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Q0&&t.locale!=="ko"?null:t.data;default:return null}}var Zb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zb[e.type]:t==="textarea"}function X0(e,t,r,n){I0(n),t=Ls(t,"onChange"),0<t.length&&(r=new Gd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var ea=null,pa=null;function Xb(e){u_(e,0)}function ho(e){var t=Hn(e);if(x0(t))return e}function Jb(e,t){if(e==="change")return t}var J0=!1;if(br){var ol;if(br){var ll="oninput"in document;if(!ll){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),ll=typeof Pp.oninput=="function"}ol=ll}else ol=!1;J0=ol&&(!document.documentMode||9<document.documentMode)}function Bp(){ea&&(ea.detachEvent("onpropertychange",e_),pa=ea=null)}function e_(e){if(e.propertyName==="value"&&ho(pa)){var t=[];X0(t,pa,e,jd(e)),R0(Xb,t)}}function e3(e,t,r){e==="focusin"?(Bp(),ea=t,pa=r,ea.attachEvent("onpropertychange",e_)):e==="focusout"&&Bp()}function t3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(pa)}function r3(e,t){if(e==="click")return ho(t)}function n3(e,t){if(e==="input"||e==="change")return ho(t)}function i3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tr=typeof Object.is=="function"?Object.is:i3;function ha(e,t){if(tr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!xu.call(t,a)||!tr(e[a],t[a]))return!1}return!0}function Lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Up(e,t){var r=Lp(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Lp(r)}}function t_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?t_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function r_(){for(var e=window,t=Os();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Os(e.document)}return t}function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function a3(e){var t=r_(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&t_(r.ownerDocument.documentElement,r)){if(n!==null&&Yd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(n.start,a);n=n.end===void 0?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=Up(r,i);var s=Up(r,n);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var s3=br&&"documentMode"in document&&11>=document.documentMode,Vn=null,ju=null,ta=null,Wu=!1;function jp(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wu||Vn==null||Vn!==Os(n)||(n=Vn,"selectionStart"in n&&Yd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ta&&ha(ta,n)||(ta=n,n=Ls(ju,"onSelect"),0<n.length&&(t=new Gd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Vn)))}function Ya(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var qn={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},ul={},n_={};br&&(n_=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function mo(e){if(ul[e])return ul[e];if(!qn[e])return e;var t=qn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in n_)return ul[e]=t[r];return e}var i_=mo("animationend"),a_=mo("animationiteration"),s_=mo("animationstart"),o_=mo("transitionend"),l_=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){l_.set(e,t),Nn(t,[e])}for(var dl=0;dl<Wp.length;dl++){var cl=Wp[dl],o3=cl.toLowerCase(),l3=cl[0].toUpperCase()+cl.slice(1);rn(o3,"on"+l3)}rn(i_,"onAnimationEnd");rn(a_,"onAnimationIteration");rn(s_,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(o_,"onTransitionEnd");oi("onMouseEnter",["mouseout","mouseover"]);oi("onMouseLeave",["mouseout","mouseover"]);oi("onPointerEnter",["pointerout","pointerover"]);oi("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function Fp(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,ob(n,t,void 0,e),e.currentTarget=null}function u_(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],u=o.instance,d=o.currentTarget;if(o=o.listener,u!==i&&a.isPropagationStopped())break e;Fp(a,o,d),i=u}else for(s=0;s<n.length;s++){if(o=n[s],u=o.instance,d=o.currentTarget,o=o.listener,u!==i&&a.isPropagationStopped())break e;Fp(a,o,d),i=u}}}if(Ns)throw e=Pu,Ns=!1,Pu=null,e}function Ae(e,t){var r=t[Gu];r===void 0&&(r=t[Gu]=new Set);var n=e+"__bubble";r.has(n)||(d_(t,e,2,!1),r.add(n))}function fl(e,t,r){var n=0;t&&(n|=4),d_(r,e,n,t)}var Za="_reactListening"+Math.random().toString(36).slice(2);function ma(e){if(!e[Za]){e[Za]=!0,y0.forEach(function(r){r!=="selectionchange"&&(u3.has(r)||fl(r,!1,e),fl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Za]||(t[Za]=!0,fl("selectionchange",!1,t))}}function d_(e,t,r,n){switch(G0(t)){case 1:var a=bb;break;case 4:a=Sb;break;default:a=qd}r=a.bind(null,t,r,e),a=void 0,!Du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function pl(e,t,r,n,a){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;s=s.return}for(;o!==null;){if(s=vn(o),s===null)return;if(u=s.tag,u===5||u===6){n=i=s;continue e}o=o.parentNode}}n=n.return}R0(function(){var d=i,f=jd(r),p=[];e:{var h=l_.get(e);if(h!==void 0){var _=Gd,w=e;switch(e){case"keypress":if(xs(r)===0)break e;case"keydown":case"keyup":_=Lb;break;case"focusin":w="focus",_=sl;break;case"focusout":w="blur",_=sl;break;case"beforeblur":case"afterblur":_=sl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Eb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Wb;break;case i_:case a_:case s_:_=zb;break;case o_:_=Vb;break;case"scroll":_=kb;break;case"wheel":_=Hb;break;case"copy":case"cut":case"paste":_=Ob;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Rp}var $=(t&4)!==0,k=!$&&e==="scroll",y=$?h!==null?h+"Capture":null:h;$=[];for(var g=d,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,y!==null&&(S=ua(g,y),S!=null&&$.push(ga(g,S,x)))),k)break;g=g.return}0<$.length&&(h=new _(h,w,null,r,f),p.push({event:h,listeners:$}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",h&&r!==Nu&&(w=r.relatedTarget||r.fromElement)&&(vn(w)||w[Sr]))break e;if((_||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,_?(w=r.relatedTarget||r.toElement,_=d,w=w?vn(w):null,w!==null&&(k=Mn(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=d),_!==w)){if($=Ap,S="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=Rp,S="onPointerLeave",y="onPointerEnter",g="pointer"),k=_==null?h:Hn(_),x=w==null?h:Hn(w),h=new $(S,g+"leave",_,r,f),h.target=k,h.relatedTarget=x,S=null,vn(f)===d&&($=new $(y,g+"enter",w,r,f),$.target=x,$.relatedTarget=k,S=$),k=S,_&&w)t:{for($=_,y=w,g=0,x=$;x;x=Ln(x))g++;for(x=0,S=y;S;S=Ln(S))x++;for(;0<g-x;)$=Ln($),g--;for(;0<x-g;)y=Ln(y),x--;for(;g--;){if($===y||y!==null&&$===y.alternate)break t;$=Ln($),y=Ln(y)}$=null}else $=null;_!==null&&Vp(p,h,_,$,!1),w!==null&&k!==null&&Vp(p,k,w,$,!0)}}e:{if(h=d?Hn(d):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var C=Jb;else if(Dp(h))if(J0)C=n3;else{C=t3;var T=e3}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=r3);if(C&&(C=C(e,d))){X0(p,C,r,f);break e}T&&T(e,h,d),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Iu(h,"number",h.value)}switch(T=d?Hn(d):window,e){case"focusin":(Dp(T)||T.contentEditable==="true")&&(Vn=T,ju=d,ta=null);break;case"focusout":ta=ju=Vn=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,jp(p,r,f);break;case"selectionchange":if(s3)break;case"keydown":case"keyup":jp(p,r,f)}var I;if(Qd)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Fn?Y0(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Q0&&r.locale!=="ko"&&(Fn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Fn&&(I=K0()):(Wr=f,Hd="value"in Wr?Wr.value:Wr.textContent,Fn=!0)),T=Ls(d,z),0<T.length&&(z=new Op(z,e,null,r,f),p.push({event:z,listeners:T}),I?z.data=I:(I=Z0(r),I!==null&&(z.data=I)))),(I=Kb?Qb(e,r):Yb(e,r))&&(d=Ls(d,"onBeforeInput"),0<d.length&&(f=new Op("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:d}),f.data=I))}u_(p,t)})}function ga(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ls(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ua(e,r),i!=null&&n.unshift(ga(e,i,a)),i=ua(e,t),i!=null&&n.push(ga(e,i,a))),e=e.return}return n}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vp(e,t,r,n,a){for(var i=t._reactName,s=[];r!==null&&r!==n;){var o=r,u=o.alternate,d=o.stateNode;if(u!==null&&u===n)break;o.tag===5&&d!==null&&(o=d,a?(u=ua(r,i),u!=null&&s.unshift(ga(r,u,o))):a||(u=ua(r,i),u!=null&&s.push(ga(r,u,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var d3=/\r\n?/g,c3=/\u0000|\uFFFD/g;function qp(e){return(typeof e=="string"?e:""+e).replace(d3,`
`).replace(c3,"")}function Xa(e,t,r){if(t=qp(t),qp(e)!==t&&r)throw Error(H(425))}function Us(){}var Fu=null,Vu=null;function qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,f3=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,p3=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(e){return Hp.resolve(null).then(e).catch(h3)}:Hu;function h3(e){setTimeout(function(){throw e})}function hl(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),fa(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);fa(t)}function Gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var _i=Math.random().toString(36).slice(2),or="__reactFiber$"+_i,ya="__reactProps$"+_i,Sr="__reactContainer$"+_i,Gu="__reactEvents$"+_i,m3="__reactListeners$"+_i,g3="__reactHandles$"+_i;function vn(e){var t=e[or];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Sr]||r[or]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Gp(e);e!==null;){if(r=e[or])return r;e=Gp(e)}return t}e=r,r=e.parentNode}return null}function Ia(e){return e=e[or]||e[Sr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function go(e){return e[ya]||null}var Ku=[],Gn=-1;function nn(e){return{current:e}}function Oe(e){0>Gn||(e.current=Ku[Gn],Ku[Gn]=null,Gn--)}function Ie(e,t){Gn++,Ku[Gn]=e.current,e.current=t}var Jr={},ot=nn(Jr),_t=nn(!1),Cn=Jr;function li(e,t){var r=e.type.contextTypes;if(!r)return Jr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function vt(e){return e=e.childContextTypes,e!=null}function js(){Oe(_t),Oe(ot)}function Kp(e,t,r){if(ot.current!==Jr)throw Error(H(168));Ie(ot,t),Ie(_t,r)}function c_(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(H(108,eb(e)||"Unknown",a));return Pe({},r,n)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jr,Cn=ot.current,Ie(ot,e),Ie(_t,_t.current),!0}function Qp(e,t,r){var n=e.stateNode;if(!n)throw Error(H(169));r?(e=c_(e,t,Cn),n.__reactInternalMemoizedMergedChildContext=e,Oe(_t),Oe(ot),Ie(ot,e)):Oe(_t),Ie(_t,r)}var _r=null,yo=!1,ml=!1;function f_(e){_r===null?_r=[e]:_r.push(e)}function y3(e){yo=!0,f_(e)}function an(){if(!ml&&_r!==null){ml=!0;var e=0,t=Se;try{var r=_r;for(Se=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}_r=null,yo=!1}catch(a){throw _r!==null&&(_r=_r.slice(e+1)),P0(Wd,an),a}finally{Se=t,ml=!1}}return null}var Kn=[],Qn=0,Fs=null,Vs=0,Ot=[],Rt=0,En=null,wr=1,$r="";function hn(e,t){Kn[Qn++]=Vs,Kn[Qn++]=Fs,Fs=e,Vs=t}function p_(e,t,r){Ot[Rt++]=wr,Ot[Rt++]=$r,Ot[Rt++]=En,En=e;var n=wr;e=$r;var a=32-Xt(n)-1;n&=~(1<<a),r+=1;var i=32-Xt(t)+a;if(30<i){var s=a-a%5;i=(n&(1<<s)-1).toString(32),n>>=s,a-=s,wr=1<<32-Xt(t)+a|r<<a|n,$r=i+e}else wr=1<<i|r<<a|n,$r=e}function Zd(e){e.return!==null&&(hn(e,1),p_(e,1,0))}function Xd(e){for(;e===Fs;)Fs=Kn[--Qn],Kn[Qn]=null,Vs=Kn[--Qn],Kn[Qn]=null;for(;e===En;)En=Ot[--Rt],Ot[Rt]=null,$r=Ot[--Rt],Ot[Rt]=null,wr=Ot[--Rt],Ot[Rt]=null}var Ct=null,kt=null,Re=!1,Qt=null;function h_(e,t){var r=Nt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Yp(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,kt=Gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=En!==null?{id:wr,overflow:$r}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Nt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ct=e,kt=null,!0):!1;default:return!1}}function Qu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yu(e){if(Re){var t=kt;if(t){var r=t;if(!Yp(e,t)){if(Qu(e))throw Error(H(418));t=Gr(r.nextSibling);var n=Ct;t&&Yp(e,t)?h_(n,r):(e.flags=e.flags&-4097|2,Re=!1,Ct=e)}}else{if(Qu(e))throw Error(H(418));e.flags=e.flags&-4097|2,Re=!1,Ct=e}}}function Zp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function Ja(e){if(e!==Ct)return!1;if(!Re)return Zp(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qu(e.type,e.memoizedProps)),t&&(t=kt)){if(Qu(e))throw m_(),Error(H(418));for(;t;)h_(e,t),t=Gr(t.nextSibling)}if(Zp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){kt=Gr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=Ct?Gr(e.stateNode.nextSibling):null;return!0}function m_(){for(var e=kt;e;)e=Gr(e.nextSibling)}function ui(){kt=Ct=null,Re=!1}function Jd(e){Qt===null?Qt=[e]:Qt.push(e)}var _3=Er.ReactCurrentBatchConfig;function Ii(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(H(309));var n=r.stateNode}if(!n)throw Error(H(147,e));var a=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=a.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(H(284));if(!r._owner)throw Error(H(290,e))}return e}function es(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xp(e){var t=e._init;return t(e._payload)}function g_(e){function t(y,g){if(e){var x=y.deletions;x===null?(y.deletions=[g],y.flags|=16):x.push(g)}}function r(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function n(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function a(y,g){return y=Zr(y,g),y.index=0,y.sibling=null,y}function i(y,g,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<g?(y.flags|=2,g):x):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function o(y,g,x,S){return g===null||g.tag!==6?(g=xl(x,y.mode,S),g.return=y,g):(g=a(g,x),g.return=y,g)}function u(y,g,x,S){var C=x.type;return C===Wn?f(y,g,x.props.children,S,x.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Br&&Xp(C)===g.type)?(S=a(g,x.props),S.ref=Ii(y,g,x),S.return=y,S):(S=Is(x.type,x.key,x.props,null,y.mode,S),S.ref=Ii(y,g,x),S.return=y,S)}function d(y,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=bl(x,y.mode,S),g.return=y,g):(g=a(g,x.children||[]),g.return=y,g)}function f(y,g,x,S,C){return g===null||g.tag!==7?(g=bn(x,y.mode,S,C),g.return=y,g):(g=a(g,x),g.return=y,g)}function p(y,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=xl(""+g,y.mode,x),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fa:return x=Is(g.type,g.key,g.props,null,y.mode,x),x.ref=Ii(y,null,g),x.return=y,x;case jn:return g=bl(g,y.mode,x),g.return=y,g;case Br:var S=g._init;return p(y,S(g._payload),x)}if(Vi(g)||Si(g))return g=bn(g,y.mode,x,null),g.return=y,g;es(y,g)}return null}function h(y,g,x,S){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:o(y,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Fa:return x.key===C?u(y,g,x,S):null;case jn:return x.key===C?d(y,g,x,S):null;case Br:return C=x._init,h(y,g,C(x._payload),S)}if(Vi(x)||Si(x))return C!==null?null:f(y,g,x,S,null);es(y,x)}return null}function _(y,g,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(x)||null,o(g,y,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fa:return y=y.get(S.key===null?x:S.key)||null,u(g,y,S,C);case jn:return y=y.get(S.key===null?x:S.key)||null,d(g,y,S,C);case Br:var T=S._init;return _(y,g,x,T(S._payload),C)}if(Vi(S)||Si(S))return y=y.get(x)||null,f(g,y,S,C,null);es(g,S)}return null}function w(y,g,x,S){for(var C=null,T=null,I=g,z=g=0,N=null;I!==null&&z<x.length;z++){I.index>z?(N=I,I=null):N=I.sibling;var U=h(y,I,x[z],S);if(U===null){I===null&&(I=N);break}e&&I&&U.alternate===null&&t(y,I),g=i(U,g,z),T===null?C=U:T.sibling=U,T=U,I=N}if(z===x.length)return r(y,I),Re&&hn(y,z),C;if(I===null){for(;z<x.length;z++)I=p(y,x[z],S),I!==null&&(g=i(I,g,z),T===null?C=I:T.sibling=I,T=I);return Re&&hn(y,z),C}for(I=n(y,I);z<x.length;z++)N=_(I,y,z,x[z],S),N!==null&&(e&&N.alternate!==null&&I.delete(N.key===null?z:N.key),g=i(N,g,z),T===null?C=N:T.sibling=N,T=N);return e&&I.forEach(function(Q){return t(y,Q)}),Re&&hn(y,z),C}function $(y,g,x,S){var C=Si(x);if(typeof C!="function")throw Error(H(150));if(x=C.call(x),x==null)throw Error(H(151));for(var T=C=null,I=g,z=g=0,N=null,U=x.next();I!==null&&!U.done;z++,U=x.next()){I.index>z?(N=I,I=null):N=I.sibling;var Q=h(y,I,U.value,S);if(Q===null){I===null&&(I=N);break}e&&I&&Q.alternate===null&&t(y,I),g=i(Q,g,z),T===null?C=Q:T.sibling=Q,T=Q,I=N}if(U.done)return r(y,I),Re&&hn(y,z),C;if(I===null){for(;!U.done;z++,U=x.next())U=p(y,U.value,S),U!==null&&(g=i(U,g,z),T===null?C=U:T.sibling=U,T=U);return Re&&hn(y,z),C}for(I=n(y,I);!U.done;z++,U=x.next())U=_(I,y,z,U.value,S),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?z:U.key),g=i(U,g,z),T===null?C=U:T.sibling=U,T=U);return e&&I.forEach(function(Y){return t(y,Y)}),Re&&hn(y,z),C}function k(y,g,x,S){if(typeof x=="object"&&x!==null&&x.type===Wn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Fa:e:{for(var C=x.key,T=g;T!==null;){if(T.key===C){if(C=x.type,C===Wn){if(T.tag===7){r(y,T.sibling),g=a(T,x.props.children),g.return=y,y=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Br&&Xp(C)===T.type){r(y,T.sibling),g=a(T,x.props),g.ref=Ii(y,T,x),g.return=y,y=g;break e}r(y,T);break}else t(y,T);T=T.sibling}x.type===Wn?(g=bn(x.props.children,y.mode,S,x.key),g.return=y,y=g):(S=Is(x.type,x.key,x.props,null,y.mode,S),S.ref=Ii(y,g,x),S.return=y,y=S)}return s(y);case jn:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){r(y,g.sibling),g=a(g,x.children||[]),g.return=y,y=g;break e}else{r(y,g);break}else t(y,g);g=g.sibling}g=bl(x,y.mode,S),g.return=y,y=g}return s(y);case Br:return T=x._init,k(y,g,T(x._payload),S)}if(Vi(x))return w(y,g,x,S);if(Si(x))return $(y,g,x,S);es(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(r(y,g.sibling),g=a(g,x),g.return=y,y=g):(r(y,g),g=xl(x,y.mode,S),g.return=y,y=g),s(y)):r(y,g)}return k}var di=g_(!0),y_=g_(!1),qs=nn(null),Hs=null,Yn=null,ec=null;function tc(){ec=Yn=Hs=null}function rc(e){var t=qs.current;Oe(qs),e._currentValue=t}function Zu(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ai(e,t){Hs=e,ec=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(ec!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Hs===null)throw Error(H(308));Yn=e,Hs.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var wn=null;function nc(e){wn===null?wn=[e]:wn.push(e)}function __(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,nc(t)):(r.next=a.next,a.next=r),t.interleaved=r,kr(e,n)}function kr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Lr=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,we&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,kr(e,r)}return a=n.interleaved,a===null?(t.next=t,nc(n)):(t.next=a.next,a.next=t),n.interleaved=t,kr(e,r)}function bs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fd(e,r)}}function Jp(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Gs(e,t,r,n){var a=e.updateQueue;Lr=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var u=o,d=u.next;u.next=null,s===null?i=d:s.next=d,s=u;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=d:o.next=d,f.lastBaseUpdate=u))}if(i!==null){var p=a.baseState;s=0,f=d=u=null,o=i;do{var h=o.lane,_=o.eventTime;if((n&h)===h){f!==null&&(f=f.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,$=o;switch(h=t,_=r,$.tag){case 1:if(w=$.payload,typeof w=="function"){p=w.call(_,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=$.payload,h=typeof w=="function"?w.call(_,p,h):w,h==null)break e;p=Pe({},p,h);break e;case 2:Lr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[o]:h.push(o))}else _={eventTime:_,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(d=f=_,u=p):f=f.next=_,s|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(f===null&&(u=p),a.baseState=u,a.firstBaseUpdate=d,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);In|=s,e.lanes=s,e.memoizedState=p}}function eh(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(H(191,a));a.call(n)}}}var za={},ur=nn(za),_a=nn(za),va=nn(za);function $n(e){if(e===za)throw Error(H(174));return e}function ac(e,t){switch(Ie(va,t),Ie(_a,e),Ie(ur,za),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Au(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Au(t,e)}Oe(ur),Ie(ur,t)}function ci(){Oe(ur),Oe(_a),Oe(va)}function w_(e){$n(va.current);var t=$n(ur.current),r=Au(t,e.type);t!==r&&(Ie(_a,e),Ie(ur,r))}function sc(e){_a.current===e&&(Oe(ur),Oe(_a))}var Me=nn(0);function Ks(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function oc(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var Ss=Er.ReactCurrentDispatcher,yl=Er.ReactCurrentBatchConfig,Tn=0,De=null,Ge=null,Xe=null,Qs=!1,ra=!1,wa=0,v3=0;function nt(){throw Error(H(321))}function lc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!tr(e[r],t[r]))return!1;return!0}function uc(e,t,r,n,a,i){if(Tn=i,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ss.current=e===null||e.memoizedState===null?b3:S3,e=r(n,a),ra){i=0;do{if(ra=!1,wa=0,25<=i)throw Error(H(301));i+=1,Xe=Ge=null,t.updateQueue=null,Ss.current=k3,e=r(n,a)}while(ra)}if(Ss.current=Ys,t=Ge!==null&&Ge.next!==null,Tn=0,Xe=Ge=De=null,Qs=!1,t)throw Error(H(300));return e}function dc(){var e=wa!==0;return wa=0,e}function sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?De.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Pt(){if(Ge===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Xe===null?De.memoizedState:Xe.next;if(t!==null)Xe=t,Ge=e;else{if(e===null)throw Error(H(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Xe===null?De.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function $a(e,t){return typeof t=="function"?t(e):t}function _l(e){var t=Pt(),r=t.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=e;var n=Ge,a=n.baseQueue,i=r.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}n.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,n=n.baseState;var o=s=null,u=null,d=i;do{var f=d.lane;if((Tn&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(o=u=p,s=n):u=u.next=p,De.lanes|=f,In|=f}d=d.next}while(d!==null&&d!==i);u===null?s=n:u.next=o,tr(n,t.memoizedState)||(yt=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do i=a.lane,De.lanes|=i,In|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function vl(e){var t=Pt(),r=t.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var s=a=a.next;do i=e(i,s.action),s=s.next;while(s!==a);tr(i,t.memoizedState)||(yt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function $_(){}function x_(e,t){var r=De,n=Pt(),a=t(),i=!tr(n.memoizedState,a);if(i&&(n.memoizedState=a,yt=!0),n=n.queue,cc(k_.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||Xe!==null&&Xe.memoizedState.tag&1){if(r.flags|=2048,xa(9,S_.bind(null,r,n,a,t),void 0,null),Je===null)throw Error(H(349));Tn&30||b_(r,t,a)}return a}function b_(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function S_(e,t,r,n){t.value=r,t.getSnapshot=n,C_(t)&&E_(e)}function k_(e,t,r){return r(function(){C_(t)&&E_(e)})}function C_(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!tr(e,r)}catch{return!0}}function E_(e){var t=kr(e,1);t!==null&&Jt(t,e,1,-1)}function th(e){var t=sr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},t.queue=e,e=e.dispatch=x3.bind(null,De,e),[t.memoizedState,e]}function xa(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function T_(){return Pt().memoizedState}function ks(e,t,r,n){var a=sr();De.flags|=e,a.memoizedState=xa(1|t,r,void 0,n===void 0?null:n)}function _o(e,t,r,n){var a=Pt();n=n===void 0?null:n;var i=void 0;if(Ge!==null){var s=Ge.memoizedState;if(i=s.destroy,n!==null&&lc(n,s.deps)){a.memoizedState=xa(t,r,i,n);return}}De.flags|=e,a.memoizedState=xa(1|t,r,i,n)}function rh(e,t){return ks(8390656,8,e,t)}function cc(e,t){return _o(2048,8,e,t)}function I_(e,t){return _o(4,2,e,t)}function z_(e,t){return _o(4,4,e,t)}function A_(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function O_(e,t,r){return r=r!=null?r.concat([e]):null,_o(4,4,A_.bind(null,t,e),r)}function fc(){}function R_(e,t){var r=Pt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&lc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function N_(e,t){var r=Pt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&lc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function M_(e,t,r){return Tn&21?(tr(r,t)||(r=U0(),De.lanes|=r,In|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=r)}function w3(e,t){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var n=yl.transition;yl.transition={};try{e(!1),t()}finally{Se=r,yl.transition=n}}function D_(){return Pt().memoizedState}function $3(e,t,r){var n=Yr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},P_(e))B_(t,r);else if(r=__(e,t,r,n),r!==null){var a=ft();Jt(r,e,n,a),L_(r,t,n)}}function x3(e,t,r){var n=Yr(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(P_(e))B_(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,r);if(a.hasEagerState=!0,a.eagerState=o,tr(o,s)){var u=t.interleaved;u===null?(a.next=a,nc(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}r=__(e,t,a,n),r!==null&&(a=ft(),Jt(r,e,n,a),L_(r,t,n))}}function P_(e){var t=e.alternate;return e===De||t!==null&&t===De}function B_(e,t){ra=Qs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function L_(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fd(e,r)}}var Ys={readContext:Dt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},b3={readContext:Dt,useCallback:function(e,t){return sr().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:rh,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ks(4194308,4,A_.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){return ks(4,2,e,t)},useMemo:function(e,t){var r=sr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=sr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=$3.bind(null,De,e),[n.memoizedState,e]},useRef:function(e){var t=sr();return e={current:e},t.memoizedState=e},useState:th,useDebugValue:fc,useDeferredValue:function(e){return sr().memoizedState=e},useTransition:function(){var e=th(!1),t=e[0];return e=w3.bind(null,e[1]),sr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=De,a=sr();if(Re){if(r===void 0)throw Error(H(407));r=r()}else{if(r=t(),Je===null)throw Error(H(349));Tn&30||b_(n,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,rh(k_.bind(null,n,i,e),[e]),n.flags|=2048,xa(9,S_.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=sr(),t=Je.identifierPrefix;if(Re){var r=$r,n=wr;r=(n&~(1<<32-Xt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=wa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=v3++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},S3={readContext:Dt,useCallback:R_,useContext:Dt,useEffect:cc,useImperativeHandle:O_,useInsertionEffect:I_,useLayoutEffect:z_,useMemo:N_,useReducer:_l,useRef:T_,useState:function(){return _l($a)},useDebugValue:fc,useDeferredValue:function(e){var t=Pt();return M_(t,Ge.memoizedState,e)},useTransition:function(){var e=_l($a)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:$_,useSyncExternalStore:x_,useId:D_,unstable_isNewReconciler:!1},k3={readContext:Dt,useCallback:R_,useContext:Dt,useEffect:cc,useImperativeHandle:O_,useInsertionEffect:I_,useLayoutEffect:z_,useMemo:N_,useReducer:vl,useRef:T_,useState:function(){return vl($a)},useDebugValue:fc,useDeferredValue:function(e){var t=Pt();return Ge===null?t.memoizedState=e:M_(t,Ge.memoizedState,e)},useTransition:function(){var e=vl($a)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:$_,useSyncExternalStore:x_,useId:D_,unstable_isNewReconciler:!1};function Gt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Xu(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Pe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vo={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ft(),a=Yr(e),i=xr(n,a);i.payload=t,r!=null&&(i.callback=r),t=Kr(e,i,a),t!==null&&(Jt(t,e,a,n),bs(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ft(),a=Yr(e),i=xr(n,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Kr(e,i,a),t!==null&&(Jt(t,e,a,n),bs(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ft(),n=Yr(e),a=xr(r,n);a.tag=2,t!=null&&(a.callback=t),t=Kr(e,a,n),t!==null&&(Jt(t,e,n,r),bs(t,e,n))}};function nh(e,t,r,n,a,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!ha(r,n)||!ha(a,i):!0}function U_(e,t,r){var n=!1,a=Jr,i=t.contextType;return typeof i=="object"&&i!==null?i=Dt(i):(a=vt(t)?Cn:ot.current,n=t.contextTypes,i=(n=n!=null)?li(e,a):Jr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vo,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ih(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function Ju(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ic(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Dt(i):(i=vt(t)?Cn:ot.current,a.context=li(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Xu(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&vo.enqueueReplaceState(a,a.state,null),Gs(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function fi(e,t){try{var r="",n=t;do r+=Jx(n),n=n.return;while(n);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function wl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ed(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var C3=typeof WeakMap=="function"?WeakMap:Map;function j_(e,t,r){r=xr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Xs||(Xs=!0,dd=n),ed(e,t)},r}function W_(e,t,r){r=xr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){ed(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){ed(e,t),typeof n!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function ah(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new C3;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=U3.bind(null,e,t,r),t.then(e,e))}function sh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oh(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=xr(-1,1),t.tag=2,Kr(r,t,1))),r.lanes|=1),e)}var E3=Er.ReactCurrentOwner,yt=!1;function ct(e,t,r,n){t.child=e===null?y_(t,null,r,n):di(t,e.child,r,n)}function lh(e,t,r,n,a){r=r.render;var i=t.ref;return ai(t,a),n=uc(e,t,r,n,i,a),r=dc(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cr(e,t,a)):(Re&&r&&Zd(t),t.flags|=1,ct(e,t,n,a),t.child)}function uh(e,t,r,n,a){if(e===null){var i=r.type;return typeof i=="function"&&!wc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,F_(e,t,i,n,a)):(e=Is(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:ha,r(s,n)&&e.ref===t.ref)return Cr(e,t,a)}return t.flags|=1,e=Zr(i,n),e.ref=t.ref,e.return=t,t.child=e}function F_(e,t,r,n,a){if(e!==null){var i=e.memoizedProps;if(ha(i,n)&&e.ref===t.ref)if(yt=!1,t.pendingProps=n=i,(e.lanes&a)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,Cr(e,t,a)}return td(e,t,r,n,a)}function V_(e,t,r){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Xn,bt),bt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Xn,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Ie(Xn,bt),bt|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Ie(Xn,bt),bt|=n;return ct(e,t,a,r),t.child}function q_(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function td(e,t,r,n,a){var i=vt(r)?Cn:ot.current;return i=li(t,i),ai(t,a),r=uc(e,t,r,n,i,a),n=dc(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cr(e,t,a)):(Re&&n&&Zd(t),t.flags|=1,ct(e,t,r,a),t.child)}function dh(e,t,r,n,a){if(vt(r)){var i=!0;Ws(t)}else i=!1;if(ai(t,a),t.stateNode===null)Cs(e,t),U_(t,r,n),Ju(t,r,n,a),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var u=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Dt(d):(d=vt(r)?Cn:ot.current,d=li(t,d));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||u!==d)&&ih(t,s,n,d),Lr=!1;var h=t.memoizedState;s.state=h,Gs(t,n,s,a),u=t.memoizedState,o!==n||h!==u||_t.current||Lr?(typeof f=="function"&&(Xu(t,r,f,n),u=t.memoizedState),(o=Lr||nh(t,r,o,n,h,u,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),s.props=n,s.state=u,s.context=d,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,v_(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Gt(t.type,o),s.props=d,p=t.pendingProps,h=s.context,u=r.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=vt(r)?Cn:ot.current,u=li(t,u));var _=r.getDerivedStateFromProps;(f=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||h!==u)&&ih(t,s,n,u),Lr=!1,h=t.memoizedState,s.state=h,Gs(t,n,s,a);var w=t.memoizedState;o!==p||h!==w||_t.current||Lr?(typeof _=="function"&&(Xu(t,r,_,n),w=t.memoizedState),(d=Lr||nh(t,r,d,n,h,w,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=u,n=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return rd(e,t,r,n,i,a)}function rd(e,t,r,n,a,i){q_(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return a&&Qp(t,r,!1),Cr(e,t,i);n=t.stateNode,E3.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=di(t,e.child,null,i),t.child=di(t,null,o,i)):ct(e,t,o,i),t.memoizedState=n.state,a&&Qp(t,r,!0),t.child}function H_(e){var t=e.stateNode;t.pendingContext?Kp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kp(e,t.context,!1),ac(e,t.containerInfo)}function ch(e,t,r,n,a){return ui(),Jd(a),t.flags|=256,ct(e,t,r,n),t.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(e){return{baseLanes:e,cachePool:null,transitions:null}}function G_(e,t,r){var n=t.pendingProps,a=Me.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ie(Me,a&1),e===null)return Yu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=xo(s,n,0,null),e=bn(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=id(r),t.memoizedState=nd,e):pc(t,s));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return T3(e,t,s,n,o,a,r);if(i){i=n.fallback,s=t.mode,a=e.child,o=a.sibling;var u={mode:"hidden",children:n.children};return!(s&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Zr(a,u),n.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=Zr(o,i):(i=bn(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?id(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=nd,n}return i=e.child,e=i.sibling,n=Zr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function pc(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ts(e,t,r,n){return n!==null&&Jd(n),di(t,e.child,null,r),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T3(e,t,r,n,a,i,s){if(r)return t.flags&256?(t.flags&=-257,n=wl(Error(H(422))),ts(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,a=t.mode,n=xo({mode:"visible",children:n.children},a,0,null),i=bn(i,a,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&di(t,e.child,null,s),t.child.memoizedState=id(s),t.memoizedState=nd,i);if(!(t.mode&1))return ts(e,t,s,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(H(419)),n=wl(i,n,void 0),ts(e,t,s,n)}if(o=(s&e.childLanes)!==0,yt||o){if(n=Je,n!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|s)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,kr(e,a),Jt(n,e,a,-1))}return vc(),n=wl(Error(H(421))),ts(e,t,s,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=j3.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,kt=Gr(a.nextSibling),Ct=t,Re=!0,Qt=null,e!==null&&(Ot[Rt++]=wr,Ot[Rt++]=$r,Ot[Rt++]=En,wr=e.id,$r=e.overflow,En=t),t=pc(t,n.children),t.flags|=4096,t)}function fh(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Zu(e.return,t,r)}function $l(e,t,r,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=a)}function K_(e,t,r){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(ct(e,t,n.children,r),n=Me.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fh(e,r,t);else if(e.tag===19)fh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Ie(Me,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ks(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),$l(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ks(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}$l(t,!0,r,null,i);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,r=Zr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Zr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function I3(e,t,r){switch(t.tag){case 3:H_(t),ui();break;case 5:w_(t);break;case 1:vt(t.type)&&Ws(t);break;case 4:ac(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;Ie(qs,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Ie(Me,Me.current&1),t.flags|=128,null):r&t.child.childLanes?G_(e,t,r):(Ie(Me,Me.current&1),e=Cr(e,t,r),e!==null?e.sibling:null);Ie(Me,Me.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return K_(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ie(Me,Me.current),n)break;return null;case 22:case 23:return t.lanes=0,V_(e,t,r)}return Cr(e,t,r)}var Q_,ad,Y_,Z_;Q_=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ad=function(){};Y_=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,$n(ur.current);var i=null;switch(r){case"input":a=Eu(e,a),n=Eu(e,n),i=[];break;case"select":a=Pe({},a,{value:void 0}),n=Pe({},n,{value:void 0}),i=[];break;case"textarea":a=zu(e,a),n=zu(e,n),i=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Us)}Ou(r,n);var s;r=null;for(d in a)if(!n.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var o=a[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(oa.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var u=n[d];if(o=a!=null?a[d]:void 0,n.hasOwnProperty(d)&&u!==o&&(u!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in u)u.hasOwnProperty(s)&&o[s]!==u[s]&&(r||(r={}),r[s]=u[s])}else r||(i||(i=[]),i.push(d,r)),r=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(oa.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Ae("scroll",e),i||o===u||(i=[])):(i=i||[]).push(d,u))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Z_=function(e,t,r,n){r!==n&&(t.flags|=4)};function zi(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function z3(e,t,r){var n=t.pendingProps;switch(Xd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return vt(t.type)&&js(),it(t),null;case 3:return n=t.stateNode,ci(),Oe(_t),Oe(ot),oc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ja(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qt!==null&&(pd(Qt),Qt=null))),ad(e,t),it(t),null;case 5:sc(t);var a=$n(va.current);if(r=t.type,e!==null&&t.stateNode!=null)Y_(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(H(166));return it(t),null}if(e=$n(ur.current),Ja(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[or]=t,n[ya]=i,e=(t.mode&1)!==0,r){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<Hi.length;a++)Ae(Hi[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":$p(n,i),Ae("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Ae("invalid",n);break;case"textarea":bp(n,i),Ae("invalid",n)}Ou(r,i),a=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&Xa(n.textContent,o,e),a=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Xa(n.textContent,o,e),a=["children",""+o]):oa.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Ae("scroll",n)}switch(r){case"input":Va(n),xp(n,i,!0);break;case"textarea":Va(n),Sp(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Us)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=k0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[or]=t,e[ya]=n,Q_(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ru(r,n),r){case"dialog":Ae("cancel",e),Ae("close",e),a=n;break;case"iframe":case"object":case"embed":Ae("load",e),a=n;break;case"video":case"audio":for(a=0;a<Hi.length;a++)Ae(Hi[a],e);a=n;break;case"source":Ae("error",e),a=n;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),a=n;break;case"details":Ae("toggle",e),a=n;break;case"input":$p(e,n),a=Eu(e,n),Ae("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=Pe({},n,{value:void 0}),Ae("invalid",e);break;case"textarea":bp(e,n),a=zu(e,n),Ae("invalid",e);break;default:a=n}Ou(r,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="style"?T0(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&C0(e,u)):i==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&la(e,u):typeof u=="number"&&la(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(oa.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ae("scroll",e):u!=null&&Pd(e,i,u,s))}switch(r){case"input":Va(e),xp(e,n,!1);break;case"textarea":Va(e),Sp(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Xr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?ti(e,!!n.multiple,i,!1):n.defaultValue!=null&&ti(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Us)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Z_(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(H(166));if(r=$n(va.current),$n(ur.current),Ja(t)){if(n=t.stateNode,r=t.memoizedProps,n[or]=t,(i=n.nodeValue!==r)&&(e=Ct,e!==null))switch(e.tag){case 3:Xa(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xa(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[or]=t,t.stateNode=n}return it(t),null;case 13:if(Oe(Me),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&kt!==null&&t.mode&1&&!(t.flags&128))m_(),ui(),t.flags|=98560,i=!1;else if(i=Ja(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(H(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(H(317));i[or]=t}else ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),i=!1}else Qt!==null&&(pd(Qt),Qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Ke===0&&(Ke=3):vc())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return ci(),ad(e,t),e===null&&ma(t.stateNode.containerInfo),it(t),null;case 10:return rc(t.type._context),it(t),null;case 17:return vt(t.type)&&js(),it(t),null;case 19:if(Oe(Me),i=t.memoizedState,i===null)return it(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)zi(i,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ks(e),s!==null){for(t.flags|=128,zi(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ie(Me,Me.current&1|2),t.child}e=e.sibling}i.tail!==null&&Fe()>pi&&(t.flags|=128,n=!0,zi(i,!1),t.lanes=4194304)}else{if(!n)if(e=Ks(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),zi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Re)return it(t),null}else 2*Fe()-i.renderingStartTime>pi&&r!==1073741824&&(t.flags|=128,n=!0,zi(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Fe(),t.sibling=null,r=Me.current,Ie(Me,n?r&1|2:r&1),t):(it(t),null);case 22:case 23:return _c(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?bt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function A3(e,t){switch(Xd(t),t.tag){case 1:return vt(t.type)&&js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ci(),Oe(_t),Oe(ot),oc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sc(t),null;case 13:if(Oe(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Me),null;case 4:return ci(),null;case 10:return rc(t.type._context),null;case 22:case 23:return _c(),null;case 24:return null;default:return null}}var rs=!1,st=!1,O3=typeof WeakSet=="function"?WeakSet:Set,re=null;function Zn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ue(e,t,n)}else r.current=null}function sd(e,t,r){try{r()}catch(n){Ue(e,t,n)}}var ph=!1;function R3(e,t){if(Fu=Ps,e=r_(),Yd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,o=-1,u=-1,d=0,f=0,p=e,h=null;t:for(;;){for(var _;p!==r||a!==0&&p.nodeType!==3||(o=s+a),p!==i||n!==0&&p.nodeType!==3||(u=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(_=p.firstChild)!==null;)h=p,p=_;for(;;){if(p===e)break t;if(h===r&&++d===a&&(o=s),h===i&&++f===n&&(u=s),(_=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=_}r=o===-1||u===-1?null:{start:o,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vu={focusedElem:e,selectionRange:r},Ps=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var $=w.memoizedProps,k=w.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?$:Gt(t.type,$),k);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(S){Ue(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return w=ph,ph=!1,w}function na(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&sd(t,r,i)}a=a.next}while(a!==n)}}function wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function od(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function X_(e){var t=e.alternate;t!==null&&(e.alternate=null,X_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[or],delete t[ya],delete t[Gu],delete t[m3],delete t[g3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function J_(e){return e.tag===5||e.tag===3||e.tag===4}function hh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||J_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ld(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Us));else if(n!==4&&(e=e.child,e!==null))for(ld(e,t,r),e=e.sibling;e!==null;)ld(e,t,r),e=e.sibling}function ud(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ud(e,t,r),e=e.sibling;e!==null;)ud(e,t,r),e=e.sibling}var et=null,Kt=!1;function Nr(e,t,r){for(r=r.child;r!==null;)ev(e,t,r),r=r.sibling}function ev(e,t,r){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(fo,r)}catch{}switch(r.tag){case 5:st||Zn(r,t);case 6:var n=et,a=Kt;et=null,Nr(e,t,r),et=n,Kt=a,et!==null&&(Kt?(e=et,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):et.removeChild(r.stateNode));break;case 18:et!==null&&(Kt?(e=et,r=r.stateNode,e.nodeType===8?hl(e.parentNode,r):e.nodeType===1&&hl(e,r),fa(e)):hl(et,r.stateNode));break;case 4:n=et,a=Kt,et=r.stateNode.containerInfo,Kt=!0,Nr(e,t,r),et=n,Kt=a;break;case 0:case 11:case 14:case 15:if(!st&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var i=a,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&sd(r,t,s),a=a.next}while(a!==n)}Nr(e,t,r);break;case 1:if(!st&&(Zn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){Ue(r,t,o)}Nr(e,t,r);break;case 21:Nr(e,t,r);break;case 22:r.mode&1?(st=(n=st)||r.memoizedState!==null,Nr(e,t,r),st=n):Nr(e,t,r);break;default:Nr(e,t,r)}}function mh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new O3),t.forEach(function(n){var a=W3.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function jt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:et=o.stateNode,Kt=!1;break e;case 3:et=o.stateNode.containerInfo,Kt=!0;break e;case 4:et=o.stateNode.containerInfo,Kt=!0;break e}o=o.return}if(et===null)throw Error(H(160));ev(i,s,a),et=null,Kt=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(d){Ue(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tv(t,e),t=t.sibling}function tv(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),ir(e),n&4){try{na(3,e,e.return),wo(3,e)}catch($){Ue(e,e.return,$)}try{na(5,e,e.return)}catch($){Ue(e,e.return,$)}}break;case 1:jt(t,e),ir(e),n&512&&r!==null&&Zn(r,r.return);break;case 5:if(jt(t,e),ir(e),n&512&&r!==null&&Zn(r,r.return),e.flags&32){var a=e.stateNode;try{la(a,"")}catch($){Ue(e,e.return,$)}}if(n&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&b0(a,i),Ru(o,s);var d=Ru(o,i);for(s=0;s<u.length;s+=2){var f=u[s],p=u[s+1];f==="style"?T0(a,p):f==="dangerouslySetInnerHTML"?C0(a,p):f==="children"?la(a,p):Pd(a,f,p,d)}switch(o){case"input":Tu(a,i);break;case"textarea":S0(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?ti(a,!!i.multiple,_,!1):h!==!!i.multiple&&(i.defaultValue!=null?ti(a,!!i.multiple,i.defaultValue,!0):ti(a,!!i.multiple,i.multiple?[]:"",!1))}a[ya]=i}catch($){Ue(e,e.return,$)}}break;case 6:if(jt(t,e),ir(e),n&4){if(e.stateNode===null)throw Error(H(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch($){Ue(e,e.return,$)}}break;case 3:if(jt(t,e),ir(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{fa(t.containerInfo)}catch($){Ue(e,e.return,$)}break;case 4:jt(t,e),ir(e);break;case 13:jt(t,e),ir(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(gc=Fe())),n&4&&mh(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(st=(d=st)||f,jt(t,e),st=d):jt(t,e),ir(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(re=e,f=e.child;f!==null;){for(p=re=f;re!==null;){switch(h=re,_=h.child,h.tag){case 0:case 11:case 14:case 15:na(4,h,h.return);break;case 1:Zn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch($){Ue(n,r,$)}}break;case 5:Zn(h,h.return);break;case 22:if(h.memoizedState!==null){yh(p);continue}}_!==null?(_.return=h,re=_):yh(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=E0("display",s))}catch($){Ue(e,e.return,$)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch($){Ue(e,e.return,$)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:jt(t,e),ir(e),n&4&&mh(e);break;case 21:break;default:jt(t,e),ir(e)}}function ir(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(J_(r)){var n=r;break e}r=r.return}throw Error(H(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(la(a,""),n.flags&=-33);var i=hh(e);ud(e,i,a);break;case 3:case 4:var s=n.stateNode.containerInfo,o=hh(e);ld(e,o,s);break;default:throw Error(H(161))}}catch(u){Ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function N3(e,t,r){re=e,rv(e)}function rv(e,t,r){for(var n=(e.mode&1)!==0;re!==null;){var a=re,i=a.child;if(a.tag===22&&n){var s=a.memoizedState!==null||rs;if(!s){var o=a.alternate,u=o!==null&&o.memoizedState!==null||st;o=rs;var d=st;if(rs=s,(st=u)&&!d)for(re=a;re!==null;)s=re,u=s.child,s.tag===22&&s.memoizedState!==null?_h(a):u!==null?(u.return=s,re=u):_h(a);for(;i!==null;)re=i,rv(i),i=i.sibling;re=a,rs=o,st=d}gh(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,re=i):gh(e)}}function gh(e){for(;re!==null;){var t=re;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||wo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!st)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Gt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&eh(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}eh(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&fa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}st||t.flags&512&&od(t)}catch(h){Ue(t,t.return,h)}}if(t===e){re=null;break}if(r=t.sibling,r!==null){r.return=t.return,re=r;break}re=t.return}}function yh(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var r=t.sibling;if(r!==null){r.return=t.return,re=r;break}re=t.return}}function _h(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{wo(4,t)}catch(u){Ue(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(u){Ue(t,a,u)}}var i=t.return;try{od(t)}catch(u){Ue(t,i,u)}break;case 5:var s=t.return;try{od(t)}catch(u){Ue(t,s,u)}}}catch(u){Ue(t,t.return,u)}if(t===e){re=null;break}var o=t.sibling;if(o!==null){o.return=t.return,re=o;break}re=t.return}}var M3=Math.ceil,Zs=Er.ReactCurrentDispatcher,hc=Er.ReactCurrentOwner,Mt=Er.ReactCurrentBatchConfig,we=0,Je=null,He=null,tt=0,bt=0,Xn=nn(0),Ke=0,ba=null,In=0,$o=0,mc=0,ia=null,gt=null,gc=0,pi=1/0,yr=null,Xs=!1,dd=null,Qr=null,ns=!1,Fr=null,Js=0,aa=0,cd=null,Es=-1,Ts=0;function ft(){return we&6?Fe():Es!==-1?Es:Es=Fe()}function Yr(e){return e.mode&1?we&2&&tt!==0?tt&-tt:_3.transition!==null?(Ts===0&&(Ts=U0()),Ts):(e=Se,e!==0||(e=window.event,e=e===void 0?16:G0(e.type)),e):1}function Jt(e,t,r,n){if(50<aa)throw aa=0,cd=null,Error(H(185));Ea(e,r,n),(!(we&2)||e!==Je)&&(e===Je&&(!(we&2)&&($o|=r),Ke===4&&jr(e,tt)),wt(e,n),r===1&&we===0&&!(t.mode&1)&&(pi=Fe()+500,yo&&an()))}function wt(e,t){var r=e.callbackNode;_b(e,t);var n=Ds(e,e===Je?tt:0);if(n===0)r!==null&&Ep(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ep(r),t===1)e.tag===0?y3(vh.bind(null,e)):f_(vh.bind(null,e)),p3(function(){!(we&6)&&an()}),r=null;else{switch(j0(n)){case 1:r=Wd;break;case 4:r=B0;break;case 16:r=Ms;break;case 536870912:r=L0;break;default:r=Ms}r=dv(r,nv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function nv(e,t){if(Es=-1,Ts=0,we&6)throw Error(H(327));var r=e.callbackNode;if(si()&&e.callbackNode!==r)return null;var n=Ds(e,e===Je?tt:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=eo(e,n);else{t=n;var a=we;we|=2;var i=av();(Je!==e||tt!==t)&&(yr=null,pi=Fe()+500,xn(e,t));do try{B3();break}catch(o){iv(e,o)}while(!0);tc(),Zs.current=i,we=a,He!==null?t=0:(Je=null,tt=0,t=Ke)}if(t!==0){if(t===2&&(a=Bu(e),a!==0&&(n=a,t=fd(e,a))),t===1)throw r=ba,xn(e,0),jr(e,n),wt(e,Fe()),r;if(t===6)jr(e,n);else{if(a=e.current.alternate,!(n&30)&&!D3(a)&&(t=eo(e,n),t===2&&(i=Bu(e),i!==0&&(n=i,t=fd(e,i))),t===1))throw r=ba,xn(e,0),jr(e,n),wt(e,Fe()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(H(345));case 2:mn(e,gt,yr);break;case 3:if(jr(e,n),(n&130023424)===n&&(t=gc+500-Fe(),10<t)){if(Ds(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){ft(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Hu(mn.bind(null,e,gt,yr),t);break}mn(e,gt,yr);break;case 4:if(jr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var s=31-Xt(n);i=1<<s,s=t[s],s>a&&(a=s),n&=~i}if(n=a,n=Fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*M3(n/1960))-n,10<n){e.timeoutHandle=Hu(mn.bind(null,e,gt,yr),n);break}mn(e,gt,yr);break;case 5:mn(e,gt,yr);break;default:throw Error(H(329))}}}return wt(e,Fe()),e.callbackNode===r?nv.bind(null,e):null}function fd(e,t){var r=ia;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=eo(e,t),e!==2&&(t=gt,gt=r,t!==null&&pd(t)),e}function pd(e){gt===null?gt=e:gt.push.apply(gt,e)}function D3(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],i=a.getSnapshot;a=a.value;try{if(!tr(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jr(e,t){for(t&=~mc,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Xt(t),n=1<<r;e[r]=-1,t&=~n}}function vh(e){if(we&6)throw Error(H(327));si();var t=Ds(e,0);if(!(t&1))return wt(e,Fe()),null;var r=eo(e,t);if(e.tag!==0&&r===2){var n=Bu(e);n!==0&&(t=n,r=fd(e,n))}if(r===1)throw r=ba,xn(e,0),jr(e,t),wt(e,Fe()),r;if(r===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,gt,yr),wt(e,Fe()),null}function yc(e,t){var r=we;we|=1;try{return e(t)}finally{we=r,we===0&&(pi=Fe()+500,yo&&an())}}function zn(e){Fr!==null&&Fr.tag===0&&!(we&6)&&si();var t=we;we|=1;var r=Mt.transition,n=Se;try{if(Mt.transition=null,Se=1,e)return e()}finally{Se=n,Mt.transition=r,we=t,!(we&6)&&an()}}function _c(){bt=Xn.current,Oe(Xn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,f3(r)),He!==null)for(r=He.return;r!==null;){var n=r;switch(Xd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&js();break;case 3:ci(),Oe(_t),Oe(ot),oc();break;case 5:sc(n);break;case 4:ci();break;case 13:Oe(Me);break;case 19:Oe(Me);break;case 10:rc(n.type._context);break;case 22:case 23:_c()}r=r.return}if(Je=e,He=e=Zr(e.current,null),tt=bt=t,Ke=0,ba=null,mc=$o=In=0,gt=ia=null,wn!==null){for(t=0;t<wn.length;t++)if(r=wn[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=a,n.next=s}r.pending=n}wn=null}return e}function iv(e,t){do{var r=He;try{if(tc(),Ss.current=Ys,Qs){for(var n=De.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Qs=!1}if(Tn=0,Xe=Ge=De=null,ra=!1,wa=0,hc.current=null,r===null||r.return===null){Ke=1,ba=t,He=null;break}e:{var i=e,s=r.return,o=r,u=t;if(t=tt,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=sh(s);if(_!==null){_.flags&=-257,oh(_,s,o,i,t),_.mode&1&&ah(i,d,t),t=_,u=d;var w=t.updateQueue;if(w===null){var $=new Set;$.add(u),t.updateQueue=$}else w.add(u);break e}else{if(!(t&1)){ah(i,d,t),vc();break e}u=Error(H(426))}}else if(Re&&o.mode&1){var k=sh(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),oh(k,s,o,i,t),Jd(fi(u,o));break e}}i=u=fi(u,o),Ke!==4&&(Ke=2),ia===null?ia=[i]:ia.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=j_(i,u,t);Jp(i,y);break e;case 1:o=u;var g=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Qr===null||!Qr.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=W_(i,o,t);Jp(i,S);break e}}i=i.return}while(i!==null)}ov(r)}catch(C){t=C,He===r&&r!==null&&(He=r=r.return);continue}break}while(!0)}function av(){var e=Zs.current;return Zs.current=Ys,e===null?Ys:e}function vc(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Je===null||!(In&268435455)&&!($o&268435455)||jr(Je,tt)}function eo(e,t){var r=we;we|=2;var n=av();(Je!==e||tt!==t)&&(yr=null,xn(e,t));do try{P3();break}catch(a){iv(e,a)}while(!0);if(tc(),we=r,Zs.current=n,He!==null)throw Error(H(261));return Je=null,tt=0,Ke}function P3(){for(;He!==null;)sv(He)}function B3(){for(;He!==null&&!ub();)sv(He)}function sv(e){var t=uv(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?ov(e):He=t,hc.current=null}function ov(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=A3(r,t),r!==null){r.flags&=32767,He=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,He=null;return}}else if(r=z3(r,t,bt),r!==null){He=r;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);Ke===0&&(Ke=5)}function mn(e,t,r){var n=Se,a=Mt.transition;try{Mt.transition=null,Se=1,L3(e,t,r,n)}finally{Mt.transition=a,Se=n}return null}function L3(e,t,r,n){do si();while(Fr!==null);if(we&6)throw Error(H(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(vb(e,i),e===Je&&(He=Je=null,tt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ns||(ns=!0,dv(Ms,function(){return si(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Mt.transition,Mt.transition=null;var s=Se;Se=1;var o=we;we|=4,hc.current=null,R3(e,r),tv(r,e),a3(Vu),Ps=!!Fu,Vu=Fu=null,e.current=r,N3(r),db(),we=o,Se=s,Mt.transition=i}else e.current=r;if(ns&&(ns=!1,Fr=e,Js=a),i=e.pendingLanes,i===0&&(Qr=null),pb(r.stateNode),wt(e,Fe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Xs)throw Xs=!1,e=dd,dd=null,e;return Js&1&&e.tag!==0&&si(),i=e.pendingLanes,i&1?e===cd?aa++:(aa=0,cd=e):aa=0,an(),null}function si(){if(Fr!==null){var e=j0(Js),t=Mt.transition,r=Se;try{if(Mt.transition=null,Se=16>e?16:e,Fr===null)var n=!1;else{if(e=Fr,Fr=null,Js=0,we&6)throw Error(H(331));var a=we;for(we|=4,re=e.current;re!==null;){var i=re,s=i.child;if(re.flags&16){var o=i.deletions;if(o!==null){for(var u=0;u<o.length;u++){var d=o[u];for(re=d;re!==null;){var f=re;switch(f.tag){case 0:case 11:case 15:na(8,f,i)}var p=f.child;if(p!==null)p.return=f,re=p;else for(;re!==null;){f=re;var h=f.sibling,_=f.return;if(X_(f),f===d){re=null;break}if(h!==null){h.return=_,re=h;break}re=_}}}var w=i.alternate;if(w!==null){var $=w.child;if($!==null){w.child=null;do{var k=$.sibling;$.sibling=null,$=k}while($!==null)}}re=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,re=s;else e:for(;re!==null;){if(i=re,i.flags&2048)switch(i.tag){case 0:case 11:case 15:na(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,re=y;break e}re=i.return}}var g=e.current;for(re=g;re!==null;){s=re;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,re=x;else e:for(s=g;re!==null;){if(o=re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:wo(9,o)}}catch(C){Ue(o,o.return,C)}if(o===s){re=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,re=S;break e}re=o.return}}if(we=a,an(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(fo,e)}catch{}n=!0}return n}finally{Se=r,Mt.transition=t}}return!1}function wh(e,t,r){t=fi(r,t),t=j_(e,t,1),e=Kr(e,t,1),t=ft(),e!==null&&(Ea(e,1,t),wt(e,t))}function Ue(e,t,r){if(e.tag===3)wh(e,e,r);else for(;t!==null;){if(t.tag===3){wh(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Qr===null||!Qr.has(n))){e=fi(r,e),e=W_(t,e,1),t=Kr(t,e,1),e=ft(),t!==null&&(Ea(t,1,e),wt(t,e));break}}t=t.return}}function U3(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&r,Je===e&&(tt&r)===r&&(Ke===4||Ke===3&&(tt&130023424)===tt&&500>Fe()-gc?xn(e,0):mc|=r),wt(e,t)}function lv(e,t){t===0&&(e.mode&1?(t=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):t=1);var r=ft();e=kr(e,t),e!==null&&(Ea(e,t,r),wt(e,r))}function j3(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),lv(e,r)}function W3(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(H(314))}n!==null&&n.delete(t),lv(e,r)}var uv;uv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)yt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return yt=!1,I3(e,t,r);yt=!!(e.flags&131072)}else yt=!1,Re&&t.flags&1048576&&p_(t,Vs,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Cs(e,t),e=t.pendingProps;var a=li(t,ot.current);ai(t,r),a=uc(null,t,n,e,a,r);var i=dc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(n)?(i=!0,Ws(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ic(t),a.updater=vo,t.stateNode=a,a._reactInternals=t,Ju(t,n,e,r),t=rd(null,t,n,!0,i,r)):(t.tag=0,Re&&i&&Zd(t),ct(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Cs(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=V3(n),e=Gt(n,e),a){case 0:t=td(null,t,n,e,r);break e;case 1:t=dh(null,t,n,e,r);break e;case 11:t=lh(null,t,n,e,r);break e;case 14:t=uh(null,t,n,Gt(n.type,e),r);break e}throw Error(H(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Gt(n,a),td(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Gt(n,a),dh(e,t,n,a,r);case 3:e:{if(H_(t),e===null)throw Error(H(387));n=t.pendingProps,i=t.memoizedState,a=i.element,v_(e,t),Gs(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=fi(Error(H(423)),t),t=ch(e,t,n,r,a);break e}else if(n!==a){a=fi(Error(H(424)),t),t=ch(e,t,n,r,a);break e}else for(kt=Gr(t.stateNode.containerInfo.firstChild),Ct=t,Re=!0,Qt=null,r=y_(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ui(),n===a){t=Cr(e,t,r);break e}ct(e,t,n,r)}t=t.child}return t;case 5:return w_(t),e===null&&Yu(t),n=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,s=a.children,qu(n,a)?s=null:i!==null&&qu(n,i)&&(t.flags|=32),q_(e,t),ct(e,t,s,r),t.child;case 6:return e===null&&Yu(t),null;case 13:return G_(e,t,r);case 4:return ac(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=di(t,null,n,r):ct(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Gt(n,a),lh(e,t,n,a,r);case 7:return ct(e,t,t.pendingProps,r),t.child;case 8:return ct(e,t,t.pendingProps.children,r),t.child;case 12:return ct(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,i=t.memoizedProps,s=a.value,Ie(qs,n._currentValue),n._currentValue=s,i!==null)if(tr(i.value,s)){if(i.children===a.children&&!_t.current){t=Cr(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var u=o.firstContext;u!==null;){if(u.context===n){if(i.tag===1){u=xr(-1,r&-r),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=r,u=i.alternate,u!==null&&(u.lanes|=r),Zu(i.return,r,t),o.lanes|=r;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(H(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Zu(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ct(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,ai(t,r),a=Dt(a),n=n(a),t.flags|=1,ct(e,t,n,r),t.child;case 14:return n=t.type,a=Gt(n,t.pendingProps),a=Gt(n.type,a),uh(e,t,n,a,r);case 15:return F_(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Gt(n,a),Cs(e,t),t.tag=1,vt(n)?(e=!0,Ws(t)):e=!1,ai(t,r),U_(t,n,a),Ju(t,n,a,r),rd(null,t,n,!0,e,r);case 19:return K_(e,t,r);case 22:return V_(e,t,r)}throw Error(H(156,t.tag))};function dv(e,t){return P0(e,t)}function F3(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,r,n){return new F3(e,t,r,n)}function wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function V3(e){if(typeof e=="function")return wc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ld)return 11;if(e===Ud)return 14}return 2}function Zr(e,t){var r=e.alternate;return r===null?(r=Nt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Is(e,t,r,n,a,i){var s=2;if(n=e,typeof e=="function")wc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Wn:return bn(r.children,a,i,t);case Bd:s=8,a|=8;break;case bu:return e=Nt(12,r,t,a|2),e.elementType=bu,e.lanes=i,e;case Su:return e=Nt(13,r,t,a),e.elementType=Su,e.lanes=i,e;case ku:return e=Nt(19,r,t,a),e.elementType=ku,e.lanes=i,e;case w0:return xo(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _0:s=10;break e;case v0:s=9;break e;case Ld:s=11;break e;case Ud:s=14;break e;case Br:s=16,n=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=Nt(s,r,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function bn(e,t,r,n){return e=Nt(7,e,n,t),e.lanes=r,e}function xo(e,t,r,n){return e=Nt(22,e,n,t),e.elementType=w0,e.lanes=r,e.stateNode={isHidden:!1},e}function xl(e,t,r){return e=Nt(6,e,null,t),e.lanes=r,e}function bl(e,t,r){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function q3(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $c(e,t,r,n,a,i,s,o,u){return e=new q3(e,t,r,o,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Nt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ic(i),e}function H3(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function cv(e){if(!e)return Jr;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var r=e.type;if(vt(r))return c_(e,r,t)}return t}function fv(e,t,r,n,a,i,s,o,u){return e=$c(r,n,!0,e,a,i,s,o,u),e.context=cv(null),r=e.current,n=ft(),a=Yr(r),i=xr(n,a),i.callback=t??null,Kr(r,i,a),e.current.lanes=a,Ea(e,a,n),wt(e,n),e}function bo(e,t,r,n){var a=t.current,i=ft(),s=Yr(a);return r=cv(r),t.context===null?t.context=r:t.pendingContext=r,t=xr(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Kr(a,t,s),e!==null&&(Jt(e,a,s,i),bs(e,a,s)),s}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $h(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function xc(e,t){$h(e,t),(e=e.alternate)&&$h(e,t)}function G3(){return null}var pv=typeof reportError=="function"?reportError:function(e){console.error(e)};function bc(e){this._internalRoot=e}So.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));bo(e,t,null,null)};So.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){bo(null,e,null,null)}),t[Sr]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=V0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ur.length&&t!==0&&t<Ur[r].priority;r++);Ur.splice(r,0,e),r===0&&H0(e)}};function Sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xh(){}function K3(e,t,r,n,a){if(a){if(typeof n=="function"){var i=n;n=function(){var d=to(s);i.call(d)}}var s=fv(t,n,e,0,null,!1,!1,"",xh);return e._reactRootContainer=s,e[Sr]=s.current,ma(e.nodeType===8?e.parentNode:e),zn(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var o=n;n=function(){var d=to(u);o.call(d)}}var u=$c(e,0,!1,null,null,!1,!1,"",xh);return e._reactRootContainer=u,e[Sr]=u.current,ma(e.nodeType===8?e.parentNode:e),zn(function(){bo(t,u,r,n)}),u}function Co(e,t,r,n,a){var i=r._reactRootContainer;if(i){var s=i;if(typeof a=="function"){var o=a;a=function(){var u=to(s);o.call(u)}}bo(t,s,e,a)}else s=K3(r,t,e,a,n);return to(s)}W0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=qi(t.pendingLanes);r!==0&&(Fd(t,r|1),wt(t,Fe()),!(we&6)&&(pi=Fe()+500,an()))}break;case 13:zn(function(){var n=kr(e,1);if(n!==null){var a=ft();Jt(n,e,1,a)}}),xc(e,1)}};Vd=function(e){if(e.tag===13){var t=kr(e,134217728);if(t!==null){var r=ft();Jt(t,e,134217728,r)}xc(e,134217728)}};F0=function(e){if(e.tag===13){var t=Yr(e),r=kr(e,t);if(r!==null){var n=ft();Jt(r,e,t,n)}xc(e,t)}};V0=function(){return Se};q0=function(e,t){var r=Se;try{return Se=e,t()}finally{Se=r}};Mu=function(e,t,r){switch(t){case"input":if(Tu(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=go(n);if(!a)throw Error(H(90));x0(n),Tu(n,a)}}}break;case"textarea":S0(e,r);break;case"select":t=r.value,t!=null&&ti(e,!!r.multiple,t,!1)}};A0=yc;O0=zn;var Q3={usingClientEntryPoint:!1,Events:[Ia,Hn,go,I0,z0,yc]},Ai={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y3={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=M0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||G3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{fo=is.inject(Y3),lr=is}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q3;It.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(t))throw Error(H(200));return H3(e,t,null,r)};It.createRoot=function(e,t){if(!Sc(e))throw Error(H(299));var r=!1,n="",a=pv;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=$c(e,1,!1,null,null,r,!1,n,a),e[Sr]=t.current,ma(e.nodeType===8?e.parentNode:e),new bc(t)};It.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=M0(t),e=e===null?null:e.stateNode,e};It.flushSync=function(e){return zn(e)};It.hydrate=function(e,t,r){if(!ko(t))throw Error(H(200));return Co(null,e,t,!0,r)};It.hydrateRoot=function(e,t,r){if(!Sc(e))throw Error(H(405));var n=r!=null&&r.hydratedSources||null,a=!1,i="",s=pv;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=fv(t,null,e,1,r??null,a,!1,i,s),e[Sr]=t.current,ma(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new So(t)};It.render=function(e,t,r){if(!ko(t))throw Error(H(200));return Co(null,e,t,!1,r)};It.unmountComponentAtNode=function(e){if(!ko(e))throw Error(H(40));return e._reactRootContainer?(zn(function(){Co(null,null,e,!1,function(){e._reactRootContainer=null,e[Sr]=null})}),!0):!1};It.unstable_batchedUpdates=yc;It.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ko(r))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Co(e,t,r,!1,n)};It.version="18.3.1-next-f1338f8080-20240426";function hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)}catch(e){console.error(e)}}hv(),h0.exports=It;var Z3=h0.exports,bh=Z3;$u.createRoot=bh.createRoot,$u.hydrateRoot=bh.hydrateRoot;const X3="modulepreload",J3=function(e){return"/mobile-detect/"+e},Sh={},eS=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(r.map(u=>{if(u=J3(u),u in Sh)return;Sh[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":X3,d||(p.as="script"),p.crossOrigin="",p.href=u,o&&p.setAttribute("nonce",o),document.head.appendChild(p),d)return new Promise((h,_)=>{p.addEventListener("load",h),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})};function tS(e={}){const{immediate:t=!1,onNeedRefresh:r,onOfflineReady:n,onRegistered:a,onRegisteredSW:i,onRegisterError:s}=e;let o,u,d;const f=async(h=!0)=>{await u,await(d==null?void 0:d())};async function p(){if("serviceWorker"in navigator){if(o=await eS(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/mobile-detect/sw.js",{scope:"/mobile-detect/",type:"classic"})).catch(h=>{s==null||s(h)}),!o)return;d=async()=>{await(o==null?void 0:o.messageSkipWaiting())};{let h=!1;const _=()=>{h=!0,o==null||o.addEventListener("controlling",w=>{w.isUpdate&&window.location.reload()}),r==null||r()};o.addEventListener("installed",w=>{typeof w.isUpdate>"u"?typeof w.isExternal<"u"?w.isExternal?_():!h&&(n==null||n()):w.isExternal?window.location.reload():!h&&(n==null||n()):w.isUpdate||n==null||n()}),o.addEventListener("waiting",_),o.addEventListener("externalwaiting",_)}o.register({immediate:t}).then(h=>{i?i("/mobile-detect/sw.js",h):a==null||a(h)}).catch(h=>{s==null||s(h)})}}return u=p(),f}/*!
 * ONNX Runtime Web v1.23.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var kc=Object.defineProperty,rS=Object.getOwnPropertyDescriptor,nS=Object.getOwnPropertyNames,iS=Object.prototype.hasOwnProperty,aS=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),V=(e,t)=>()=>(e&&(t=e(e=0)),t),vi=(e,t)=>{for(var r in t)kc(e,r,{get:t[r],enumerable:!0})},sS=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of nS(t))!iS.call(e,a)&&a!==r&&kc(e,a,{get:()=>t[a],enumerable:!(n=rS(t,a))||n.enumerable});return e},Sa=e=>sS(kc({},"__esModule",{value:!0}),e),Oi,Mr,Jn,kh,mv,gv=V(()=>{Oi=new Map,Mr=[],Jn=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=Oi.get(e);if(n===void 0)Oi.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=Mr.indexOf(e);a!==-1&&Mr.splice(a,1);for(let i=0;i<Mr.length;i++)if(Oi.get(Mr[i]).priority<=r){Mr.splice(i,0,e);return}Mr.push(e)}return}throw new TypeError("not a valid backend")},kh=async e=>{let t=Oi.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},mv=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?Mr:r,a,i=[],s=new Set;for(let u of n){let d=await kh(u);typeof d=="string"?i.push({name:u,err:d}):(a||(a=d),a===d&&s.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${i.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of i)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),oS=V(()=>{gv()}),yv,lS=V(()=>{yv="1.23.2"}),Sl,Ye,_v=V(()=>{lS(),Sl="warning",Ye={wasm:{},webgl:{},webgpu:{},versions:{common:yv},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Sl=e}},get logLevel(){return Sl}},Object.defineProperty(Ye,"logLevel",{enumerable:!0})}),be,uS=V(()=>{_v(),be=Ye}),vv,wv,dS=V(()=>{vv=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let a,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[3]):(a=e.dims[3],i=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let f=i*a,p=0,h=f,_=f*2,w=-1;s==="RGBA"?(p=0,h=f,_=f*2,w=f*3):s==="RGB"?(p=0,h=f,_=f*2):s==="RBG"&&(p=0,_=f,h=f*2);for(let $=0;$<i;$++)for(let k=0;k<a;k++){let y=(e.data[p++]-d[0])*u[0],g=(e.data[h++]-d[1])*u[1],x=(e.data[_++]-d[2])*u[2],S=w===-1?255:(e.data[w++]-d[3])*u[3];n.fillStyle="rgba("+y+","+g+","+x+","+S+")",n.fillRect(k,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},wv=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let a,i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[1],s=e.dims[3]):(a=e.dims[3],i=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,f;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?f=[0,0,0,0]:typeof u.bias=="number"?f=[u.bias,u.bias,u.bias,u.bias]:(f=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(f[3]=u.bias[3]));let p=i*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,_=0,w=1,$=2,k=3,y=0,g=p,x=p*2,S=-1;o==="RGBA"?(y=0,g=p,x=p*2,S=p*3):o==="RGB"?(y=0,g=p,x=p*2):o==="RBG"&&(y=0,x=p,g=p*2),n=r.createImageData(a,i);for(let C=0;C<i*a;_+=h,w+=h,$+=h,k+=h,C++)n.data[_]=(e.data[y++]-f[0])*d[0],n.data[w]=(e.data[g++]-f[1])*d[1],n.data[$]=(e.data[x++]-f[2])*d[2],n.data[k]=S===-1?255:(e.data[S++]-f[3])*d[3]}else throw new Error("Can not access image data");return n}}),as,$v,xv,bv,Sv,kv,cS=V(()=>{Cc(),as=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,a=t.norm??{mean:255,bias:0},i,s;typeof a.mean=="number"?i=[a.mean,a.mean,a.mean,a.mean]:i=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,f=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,h=0,_=1,w=2,$=3,k=0,y=d,g=d*2,x=-1;o==="RGB"&&(p=3,h=0,_=1,w=2,$=-1),u==="RGBA"?x=d*3:u==="RBG"?(k=0,g=d,y=d*2):u==="BGR"&&(g=0,y=d,k=d*2);for(let S=0;S<d;S++,h+=p,w+=p,_+=p,$+=p)f[k++]=(e[h]+s[0])/i[0],f[y++]=(e[_]+s[1])/i[1],f[g++]=(e[w]+s[2])/i[2],x!==-1&&$!==-1&&(f[x++]=(e[$]+s[3])/i[3]);return u==="RGBA"?new St("float32",f,[1,4,r,n]):new St("float32",f,[1,3,r,n])},$v=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=u();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let h=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=_}else o.tensorFormat="RGBA",o.height=h,o.width=_;p.drawImage(e,0,0),s=p.getImageData(0,0,_,h).data}else throw new Error("Can not access image data")}else if(n){let f,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,p=t.resizedWidth):(f=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=f,o.width=p,t!==void 0){let h=u();h.width=p,h.height=f;let _=d(h);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,p,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=u();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let h=e.height,_=e.width;return p.drawImage(e,0,0,_,h),s=p.getImageData(0,0,_,h).data,o.height=h,o.width=_,as(s,o)}else throw new Error("Can not access image data")}else{if(i)return new Promise((f,p)=>{let h=u(),_=d(h);if(!e||!_)return p();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{h.width=w.width,h.height=w.height,_.drawImage(w,0,0,h.width,h.height);let $=_.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,f(as($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return as(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},xv=(e,t)=>{let{width:r,height:n,download:a,dispose:i}=t,s=[1,n,r,4];return new St({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:i})},bv=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new St({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:a,dispose:i})},Sv=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new St({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:a,dispose:i})},kv=(e,t,r)=>new St({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),gn,Gi,kl,Cv,fS=V(()=>{gn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Gi=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),kl=!1,Cv=()=>{if(!kl){kl=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(gn.set("int64",BigInt64Array),Gi.set(BigInt64Array,"int64")),t&&(gn.set("uint64",BigUint64Array),Gi.set(BigUint64Array,"uint64")),n?(gn.set("float16",r),Gi.set(r,"float16")):gn.set("float16",Uint16Array)}}}),Ev,Tv,pS=V(()=>{Cc(),Ev=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},Tv=(e,t)=>{switch(e.location){case"cpu":return new St(e.type,e.data,t);case"cpu-pinned":return new St({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new St({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new St({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new St({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),St,Cc=V(()=>{dS(),cS(),fS(),pS(),St=class{constructor(e,t,r){Cv();let n,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=gn.get(n);if(!s)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=gn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",s=e;else if(u==="boolean")n="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",s=Uint8Array.from(e);else{let u=Gi.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=s,this.dataLocation="cpu"}let i=Ev(a);if(this.cpuData&&i!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=a,this.size=i}static async fromImage(e,t){return $v(e,t)}static fromTexture(e,t){return xv(e,t)}static fromGpuBuffer(e,t){return bv(e,t)}static fromMLTensor(e,t){return Sv(e,t)}static fromPinnedBuffer(e,t,r){return kv(e,t,r)}toDataURL(e){return vv(this,e)}toImageData(e){return wv(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Tv(this,e)}}}),Zt,Iv=V(()=>{Cc(),Zt=St}),ro,Cl,dr,er,Sn,kn,zv=V(()=>{_v(),ro=(e,t)=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||console.timeStamp(`${e}::ORT::${t}`)},Cl=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),ro("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},dr=e=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||Cl("BEGIN",e)},er=e=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||Cl("END",e)},Sn=e=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||console.time(`ORT::${e}`)},kn=e=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||console.timeEnd(`ORT::${e}`)}}),Av,hS=V(()=>{gv(),Iv(),zv(),Av=class Ov{constructor(t){this.handler=t}async run(t,r,n){dr(),Sn("InferenceSession.run");let a={},i={};if(typeof t!="object"||t===null||t instanceof Zt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Zt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(f.indexOf(p)!==-1){let h=r[p];(h===null||h instanceof Zt)&&(d=!0,s=!1,a[p]=h)}if(d){if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let o=await this.handler.run(t,a,i),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let f=o[d];f instanceof Zt?u[d]=f:u[d]=new Zt(f.type,f.data,f.dims)}return kn("InferenceSession.run"),er(),u}async release(){return this.handler.dispose()}static async create(t,r,n,a){dr(),Sn("InferenceSession.create");let i,s={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,p=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(h=t.byteLength-p,typeof n=="number"){if(h=n,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-p}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(f,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await mv(s),d=await o.createInferenceSessionHandler(i,u);return kn("InferenceSession.create"),er(),new Ov(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Ec,mS=V(()=>{hS(),Ec=Av}),gS=V(()=>{}),yS=V(()=>{}),_S=V(()=>{}),vS=V(()=>{}),wS={};vi(wS,{InferenceSession:()=>Ec,TRACE:()=>ro,TRACE_EVENT_BEGIN:()=>Sn,TRACE_EVENT_END:()=>kn,TRACE_FUNC_BEGIN:()=>dr,TRACE_FUNC_END:()=>er,Tensor:()=>Zt,env:()=>be,registerBackend:()=>Jn});var Bt=V(()=>{oS(),uS(),mS(),Iv(),gS(),yS(),zv(),_S(),vS()}),Tc=V(()=>{}),Rv={};vi(Rv,{default:()=>Nv});var El,Tl,Nv,$S=V(()=>{var e;L$(),Dn(),Ic(),El="ort-wasm-proxy-worker",Tl=((e=globalThis.self)==null?void 0:e.name)===El,Tl&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":zc(n.wasm).then(()=>{Gc(n).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:i}=n;Kc(i,a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:a}=n,i=uo(a);postMessage({type:r,out:i});break}case"create":{let{model:a,options:i}=n;Qc(a,i).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":Yc(n),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:i,inputs:s,outputIndices:o,options:u}=n;Zc(a,i,s,o,new Array(o.length).fill(null),u).then(d=>{d.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Jc([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Xc(n),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),Nv=Tl?null:t=>new Worker(t??xt,{type:"module",name:El})}),Mv={};vi(Mv,{default:()=>Dv});var Il,Dv,Ch,xS=V(()=>{var e,t;Il=async function(r={}){var pp;var n,a,i=r,s=new Promise((l,c)=>{n=l,a=c}),o=typeof window=="object",u=typeof WorkerGlobalScope<"u",d=u&&((pp=self.name)==null?void 0:pp.startsWith("em-pthread"));i.mountExternalData=(l,c)=>{l.startsWith("./")&&(l=l.substring(2)),(i.Fb||(i.Fb=new Map)).set(l,c)},i.unmountExternalData=()=>{delete i.Fb};var f=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let p=l=>async(...c)=>{var m;try{if(i.Gb)throw Error("Session already started");let v=i.Gb={ec:c[0],errors:[]},b=await l(...c);if(i.Gb!==v)throw Error("Session mismatch");(m=i.Kb)==null||m.flush();let E=v.errors;if(0<E.length){let A=await Promise.all(E);if(A=A.filter(M=>M),0<A.length)throw Error(A.join(`
`))}return b}finally{i.Gb=null}};i.jsepInit=(l,c)=>{if(l==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.Ab,i.$b,i.bc,i.Wb,i.Xb,i.ac]=c;let m=i.Kb;i.jsepRegisterBuffer=(v,b,E,A)=>m.registerBuffer(v,b,E,A),i.jsepGetBuffer=v=>m.getBuffer(v),i.jsepCreateDownloader=(v,b,E)=>m.createDownloader(v,b,E),i.jsepOnCreateSession=v=>{m.onCreateSession(v)},i.jsepOnReleaseSession=v=>{m.onReleaseSession(v)},i.jsepOnRunStart=v=>m.onRunStart(v),i.cc=(v,b)=>{m.upload(v,b)}}else if(l==="webnn"){let m=c[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor,i.nc,i.webnnEnableTraceEvent]=c.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnRegisterMLContext=i.nc,i.webnnOnRunStart=v=>m.onRunStart(v),i.webnnOnRunEnd=m.onRunEnd.bind(m),i.webnnOnReleaseSession=v=>{m.onReleaseSession(v)},i.webnnCreateMLTensorDownloader=(v,b)=>m.createMLTensorDownloader(v,b),i.webnnRegisterMLTensor=(v,b,E,A)=>m.registerMLTensor(v,b,E,A),i.webnnCreateMLContext=v=>m.createMLContext(v),i.webnnRegisterMLConstant=(v,b,E,A,M,j)=>m.registerMLConstant(v,b,E,A,M,i.Fb,j),i.webnnRegisterGraphInput=m.registerGraphInput.bind(m),i.webnnIsGraphInput=m.isGraphInput.bind(m),i.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),i.webnnIsGraphOutput=m.isGraphOutput.bind(m),i.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),i.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let h=()=>{let l=(c,m,v)=>(...b)=>{let E=nr,A=m==null?void 0:m();b=c(...b);let M=m==null?void 0:m();return A!==M&&(c=M,v(A),m=v=null),nr!=E?new Promise((j,q)=>{jo={resolve:j,reject:q}}):b};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[c]=l(i[c],()=>i[c],m=>i[c]=m)})(),p!==void 0&&(i._OrtRun=p(i._OrtRun),i._OrtRunWithBinding=p(i._OrtRunWithBinding)),h=void 0};i.asyncInit=()=>{h==null||h()};var _,w,$=(l,c)=>{throw c},k=import.meta.url,y="";if(o||u){try{y=new URL(".",k).href}catch{}u&&(w=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),_=async l=>{if(W(l))return new Promise((m,v)=>{var b=new XMLHttpRequest;b.open("GET",l,!0),b.responseType="arraybuffer",b.onload=()=>{b.status==200||b.status==0&&b.response?m(b.response):v(b.status)},b.onerror=v,b.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var g,x,S,C,T,I,z,N,U,Q,Y,G,ce,ae,Z,oe=console.log.bind(console),P=console.error.bind(console),F=oe,X=P,O=!1,W=l=>l.startsWith("file://");function K(){return x.buffer!=T.buffer&&_e(),T}function J(){return x.buffer!=T.buffer&&_e(),I}function Ee(){return x.buffer!=T.buffer&&_e(),z}function Ve(){return x.buffer!=T.buffer&&_e(),N}function R(){return x.buffer!=T.buffer&&_e(),U}function se(){return x.buffer!=T.buffer&&_e(),Q}function Le(){return x.buffer!=T.buffer&&_e(),Y}function je(){return x.buffer!=T.buffer&&_e(),ae}if(d){let l=function(c){try{var m=c.data,v=m.Db;if(v==="load"){let b=[];self.onmessage=E=>b.push(E),self.startWorker=()=>{postMessage({Db:"loaded"});for(let E of b)l(E);self.onmessage=l};for(let E of m.Sb)i[E]&&!i[E].proxy||(i[E]=(...A)=>{postMessage({Db:"callHandler",Rb:E,args:A})},E=="print"&&(F=i[E]),E=="printErr"&&(X=i[E]));x=m.kc,_e(),Z(m.lc)}else if(v==="run"){r2(m.Bb),Go(m.Bb,0,0,1,0,0),uf(),Lo(m.Bb),Lt||(tp(),Lt=!0);try{n2(m.hc,m.Jb)}catch(b){if(b!="unwind")throw b}}else m.target!=="setimmediate"&&(v==="checkMailbox"?Lt&&Oa():v&&(X(`worker: received unknown command ${v}`),X(m)))}catch(b){throw rp(),b}};var Lt=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=l}function _e(){var l=x.buffer;i.HEAP8=T=new Int8Array(l),z=new Int16Array(l),i.HEAPU8=I=new Uint8Array(l),N=new Uint16Array(l),i.HEAP32=U=new Int32Array(l),i.HEAPU32=Q=new Uint32Array(l),Y=new Float32Array(l),ae=new Float64Array(l),G=new BigInt64Array(l),ce=new BigUint64Array(l)}function Te(){d?startWorker(i):B.Da()}var lt,cr=0,Ir=null;function Aa(){if(--cr==0&&Ir){var l=Ir;Ir=null,l()}}function Ut(l){throw X(l="Aborted("+l+")"),O=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),a(l),l}function rf(){return{a:{L:wx,Aa:vx,b:a2,$:pf,A:gf,pa:yf,X:_f,Z:vf,qa:wf,na:$f,ga:xf,ma:bf,J:Sf,Y:kf,V:Cf,oa:Ef,W:Tf,va:s2,E:o2,Q:l2,O:d2,D:f2,v:p2,s:h2,P:m2,z:x2,R:b2,ja:S2,T:k2,aa:C2,M:E2,F:T2,ia:Lo,sa:I2,r:z2,Ca:A2,w:N2,o:M2,m:P2,c:Mo,Ba:B2,n:L2,j:W2,u:F2,p:V2,f:q2,t:H2,l:G2,e:K2,k:Q2,h:Y2,g:Z2,d:X2,da:J2,ea:ex,fa:tx,ba:jf,ca:Wf,N:Ff,xa:nx,ua:ax,i:sx,C:ox,G:lx,ta:ix,x:ux,ra:dx,U:cx,q:rx,y:fx,K:px,S:hx,za:mx,ya:gx,ka:Gf,la:Kf,_:Ao,B:Qf,I:Yf,ha:Zf,H:Xf,a:x,wa:zo}}}class To{constructor(c){hp(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var nf=l=>{l.terminate(),l.onmessage=()=>{}},Io=[],af=l=>{Ar.length==0&&(cf(),df(Ar[0]));var c=Ar.pop();if(!c)return 6;wi.push(c),on[l.Bb]=c,c.Bb=l.Bb;var m={Db:"run",hc:l.fc,Jb:l.Jb,Bb:l.Bb};return c.postMessage(m,l.Nb),0},zr=0,ze=(l,c,...m)=>{for(var v=2*m.length,b=Yo(),E=Qo(8*v),A=E>>>3,M=0;M<m.length;M++){var j=m[M];typeof j=="bigint"?(G[A+2*M]=1n,G[A+2*M+1]=j):(G[A+2*M]=0n,je()[A+2*M+1>>>0]=j)}return l=np(l,0,v,E,c),ja(b),l};function zo(l){if(d)return ze(0,1,l);if(C=l,!(0<zr)){for(var c of wi)nf(c);for(c of Ar)nf(c);Ar=[],wi=[],on={},O=!0}$(0,new To(l))}function sf(l){if(d)return ze(1,0,l);Ao(l)}var Ao=l=>{if(C=l,d)throw sf(l),"unwind";zo(l)},Ar=[],wi=[],of=[],on={},lf=l=>{var c=l.Bb;delete on[c],Ar.push(l),wi.splice(wi.indexOf(l),1),l.Bb=0,ip(c)};function uf(){of.forEach(l=>l())}var df=l=>new Promise(c=>{l.onmessage=b=>{var E=(b=b.data).Db;if(b.Hb&&b.Hb!=Ho()){var A=on[b.Hb];A?A.postMessage(b,b.Nb):X(`Internal error! Worker sent a message "${E}" to target pthread ${b.Hb}, but that thread no longer exists!`)}else E==="checkMailbox"?Oa():E==="spawnThread"?af(b):E==="cleanupThread"?lf(on[b.ic]):E==="loaded"?(l.loaded=!0,c(l)):b.target==="setimmediate"?l.postMessage(b):E==="callHandler"?i[b.Rb](...b.args):E&&X(`worker sent an unknown command ${E}`)},l.onerror=b=>{throw X(`worker sent an error! ${b.filename}:${b.lineno}: ${b.message}`),b};var m,v=[];for(m of[])i.propertyIsEnumerable(m)&&v.push(m);l.postMessage({Db:"load",Sb:v,kc:x,lc:S})});function cf(){var l=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Ar.push(l)}var r2=l=>{_e();var c=se()[l+52>>>2>>>0];l=se()[l+56>>>2>>>0],op(c,c-l),ja(c)},n2=(l,c)=>{zr=0,l=lp(l,c),0<zr?C=l:Ko(l)};class i2{constructor(c){this.Ib=c-24}}function a2(l,c,m){var v=new i2(l>>>=0);throw c>>>=0,m>>>=0,se()[v.Ib+16>>>2>>>0]=0,se()[v.Ib+4>>>2>>>0]=c,se()[v.Ib+8>>>2>>>0]=m,l}function ff(l,c,m,v){return d?ze(2,1,l,c,m,v):pf(l,c,m,v)}function pf(l,c,m,v){if(l>>>=0,m>>>=0,v>>>=0,f===void 0)return 6;var b=[];return d&&b.length===0?ff(l,c>>>=0,m,v):(l={fc:m,Bb:l,Jb:v,Nb:b},d?(l.Db="spawnThread",postMessage(l,b),0):af(l))}var hf=typeof TextDecoder<"u"?new TextDecoder:void 0,mf=(l,c=0,m=NaN)=>{var v=(c>>>=0)+m;for(m=c;l[m]&&!(m>=v);)++m;if(16<m-c&&l.buffer&&hf)return hf.decode(l.buffer instanceof ArrayBuffer?l.subarray(c,m):l.slice(c,m));for(v="";c<m;){var b=l[c++];if(128&b){var E=63&l[c++];if((224&b)==192)v+=String.fromCharCode((31&b)<<6|E);else{var A=63&l[c++];65536>(b=(240&b)==224?(15&b)<<12|E<<6|A:(7&b)<<18|E<<12|A<<6|63&l[c++])?v+=String.fromCharCode(b):(b-=65536,v+=String.fromCharCode(55296|b>>10,56320|1023&b))}}else v+=String.fromCharCode(b)}return v},We=(l,c)=>(l>>>=0)?mf(J(),l,c):"";function gf(l,c,m){return d?ze(3,1,l,c,m):0}function yf(l,c){if(d)return ze(4,1,l,c)}function _f(l,c){if(d)return ze(5,1,l,c)}function vf(l,c,m){if(d)return ze(6,1,l,c,m)}function wf(l,c,m){return d?ze(7,1,l,c,m):0}function $f(l,c){if(d)return ze(8,1,l,c)}function xf(l,c,m){if(d)return ze(9,1,l,c,m)}function bf(l,c,m,v){if(d)return ze(10,1,l,c,m,v)}function Sf(l,c,m,v){if(d)return ze(11,1,l,c,m,v)}function kf(l,c,m,v){if(d)return ze(12,1,l,c,m,v)}function Cf(l){if(d)return ze(13,1,l)}function Ef(l,c){if(d)return ze(14,1,l,c)}function Tf(l,c,m){if(d)return ze(15,1,l,c,m)}var If,s2=()=>Ut(""),rr=l=>{for(var c="";J()[l>>>0];)c+=If[J()[l++>>>0]];return c},Oo={},Ro={},Bn=i.BindingError=class extends Error{constructor(l){super(l),this.name="BindingError"}};function fr(l,c,m={}){return function(v,b,E={}){var A=b.name;if(!v)throw new Bn(`type "${A}" must have a positive integer typeid pointer`);if(Ro.hasOwnProperty(v)){if(E.Tb)return;throw new Bn(`Cannot register type '${A}' twice`)}Ro[v]=b,Oo.hasOwnProperty(v)&&(b=Oo[v],delete Oo[v],b.forEach(M=>M()))}(l,c,m)}var zf=(l,c,m)=>{switch(c){case 1:return m?v=>K()[v>>>0]:v=>J()[v>>>0];case 2:return m?v=>Ee()[v>>>1>>>0]:v=>Ve()[v>>>1>>>0];case 4:return m?v=>R()[v>>>2>>>0]:v=>se()[v>>>2>>>0];case 8:return m?v=>G[v>>>3]:v=>ce[v>>>3];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}};function o2(l,c,m){m>>>=0,fr(l>>>=0,{name:c=rr(c>>>0),fromWireType:v=>v,toWireType:function(v,b){if(typeof b!="bigint"&&typeof b!="number")throw b=b===null?"null":(v=typeof b)=="object"||v==="array"||v==="function"?b.toString():""+b,new TypeError(`Cannot convert "${b}" to ${this.name}`);return typeof b=="number"&&(b=BigInt(b)),b},Cb:Or,readValueFromPointer:zf(c,m,c.indexOf("u")==-1),Eb:null})}var Or=8;function l2(l,c,m,v){fr(l>>>=0,{name:c=rr(c>>>0),fromWireType:function(b){return!!b},toWireType:function(b,E){return E?m:v},Cb:Or,readValueFromPointer:function(b){return this.fromWireType(J()[b>>>0])},Eb:null})}var No=[],pr=[];function Mo(l){9<(l>>>=0)&&--pr[l+1]==0&&(pr[l]=void 0,No.push(l))}var ut=l=>{if(!l)throw new Bn(`Cannot use deleted val. handle = ${l}`);return pr[l]},At=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=No.pop()||pr.length;return pr[c]=l,pr[c+1]=1,c}};function Do(l){return this.fromWireType(se()[l>>>2>>>0])}var u2={name:"emscripten::val",fromWireType:l=>{var c=ut(l);return Mo(l),c},toWireType:(l,c)=>At(c),Cb:Or,readValueFromPointer:Do,Eb:null};function d2(l){return fr(l>>>0,u2)}var c2=(l,c)=>{switch(c){case 4:return function(m){return this.fromWireType(Le()[m>>>2>>>0])};case 8:return function(m){return this.fromWireType(je()[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}};function f2(l,c,m){m>>>=0,fr(l>>>=0,{name:c=rr(c>>>0),fromWireType:v=>v,toWireType:(v,b)=>b,Cb:Or,readValueFromPointer:c2(c,m),Eb:null})}function p2(l,c,m,v,b){if(l>>>=0,m>>>=0,c=rr(c>>>0),b===-1&&(b=4294967295),b=M=>M,v===0){var E=32-8*m;b=M=>M<<E>>>E}var A=c.includes("unsigned")?function(M,j){return j>>>0}:function(M,j){return j};fr(l,{name:c,fromWireType:b,toWireType:A,Cb:Or,readValueFromPointer:zf(c,m,v!==0),Eb:null})}function h2(l,c,m){function v(E){var A=se()[E>>>2>>>0];return E=se()[E+4>>>2>>>0],new b(K().buffer,E,A)}var b=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];fr(l>>>=0,{name:m=rr(m>>>0),fromWireType:v,Cb:Or,readValueFromPointer:v},{Tb:!0})}var ln=(l,c,m)=>{var v=J();if(c>>>=0,0<m){var b=c;m=c+m-1;for(var E=0;E<l.length;++E){var A=l.charCodeAt(E);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&l.charCodeAt(++E)),127>=A){if(c>=m)break;v[c++>>>0]=A}else{if(2047>=A){if(c+1>=m)break;v[c++>>>0]=192|A>>6}else{if(65535>=A){if(c+2>=m)break;v[c++>>>0]=224|A>>12}else{if(c+3>=m)break;v[c++>>>0]=240|A>>18,v[c++>>>0]=128|A>>12&63}v[c++>>>0]=128|A>>6&63}v[c++>>>0]=128|63&A}}v[c>>>0]=0,l=c-b}else l=0;return l},Po=l=>{for(var c=0,m=0;m<l.length;++m){var v=l.charCodeAt(m);127>=v?c++:2047>=v?c+=2:55296<=v&&57343>=v?(c+=4,++m):c+=3}return c};function m2(l,c){fr(l>>>=0,{name:c=rr(c>>>0),fromWireType:function(m){for(var v,b=se()[m>>>2>>>0],E=m+4,A=E,M=0;M<=b;++M){var j=E+M;M!=b&&J()[j>>>0]!=0||(A=We(A,j-A),v===void 0?v=A:(v+="\0",v+=A),A=j+1)}return hr(m),v},toWireType:function(m,v){v instanceof ArrayBuffer&&(v=new Uint8Array(v));var b=typeof v=="string";if(!(b||ArrayBuffer.isView(v)&&v.BYTES_PER_ELEMENT==1))throw new Bn("Cannot pass non-string to std::string");var E=b?Po(v):v.length,A=Ua(4+E+1),M=A+4;return se()[A>>>2>>>0]=E,b?ln(v,M,E+1):J().set(v,M>>>0),m!==null&&m.push(hr,A),A},Cb:Or,readValueFromPointer:Do,Eb(m){hr(m)}})}var Af=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,g2=(l,c)=>{for(var m=l>>1,v=m+c/2;!(m>=v)&&Ve()[m>>>0];)++m;if(32<(m<<=1)-l&&Af)return Af.decode(J().slice(l,m));for(m="",v=0;!(v>=c/2);++v){var b=Ee()[l+2*v>>>1>>>0];if(b==0)break;m+=String.fromCharCode(b)}return m},y2=(l,c,m)=>{if(m??(m=2147483647),2>m)return 0;var v=c;m=(m-=2)<2*l.length?m/2:l.length;for(var b=0;b<m;++b){var E=l.charCodeAt(b);Ee()[c>>>1>>>0]=E,c+=2}return Ee()[c>>>1>>>0]=0,c-v},_2=l=>2*l.length,v2=(l,c)=>{for(var m=0,v="";!(m>=c/4);){var b=R()[l+4*m>>>2>>>0];if(b==0)break;++m,65536<=b?(b-=65536,v+=String.fromCharCode(55296|b>>10,56320|1023&b)):v+=String.fromCharCode(b)}return v},w2=(l,c,m)=>{if(c>>>=0,m??(m=2147483647),4>m)return 0;var v=c;m=v+m-4;for(var b=0;b<l.length;++b){var E=l.charCodeAt(b);if(55296<=E&&57343>=E&&(E=65536+((1023&E)<<10)|1023&l.charCodeAt(++b)),R()[c>>>2>>>0]=E,(c+=4)+4>m)break}return R()[c>>>2>>>0]=0,c-v},$2=l=>{for(var c=0,m=0;m<l.length;++m){var v=l.charCodeAt(m);55296<=v&&57343>=v&&++m,c+=4}return c};function x2(l,c,m){if(l>>>=0,c>>>=0,m=rr(m>>>=0),c===2)var v=g2,b=y2,E=_2,A=M=>Ve()[M>>>1>>>0];else c===4&&(v=v2,b=w2,E=$2,A=M=>se()[M>>>2>>>0]);fr(l,{name:m,fromWireType:M=>{for(var j,q=se()[M>>>2>>>0],ee=M+4,le=0;le<=q;++le){var pe=M+4+le*c;le!=q&&A(pe)!=0||(ee=v(ee,pe-ee),j===void 0?j=ee:(j+="\0",j+=ee),ee=pe+c)}return hr(M),j},toWireType:(M,j)=>{if(typeof j!="string")throw new Bn(`Cannot pass non-string to C++ string type ${m}`);var q=E(j),ee=Ua(4+q+c);return se()[ee>>>2>>>0]=q/c,b(j,ee+4,q+c),M!==null&&M.push(hr,ee),ee},Cb:Or,readValueFromPointer:Do,Eb(M){hr(M)}})}function b2(l,c){fr(l>>>=0,{Ub:!0,name:c=rr(c>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function S2(l){Go(l>>>0,!u,1,!o,131072,!1),uf()}var Bo=l=>{if(!O)try{if(l(),!(0<zr))try{d?Ko(C):Ao(C)}catch(c){c instanceof To||c=="unwind"||$(0,c)}}catch(c){c instanceof To||c=="unwind"||$(0,c)}};function Lo(l){l>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(R(),l>>>2,l).value.then(Oa),l+=128,Atomics.store(R(),l>>>2,1))}var Oa=()=>{var l=Ho();l&&(Lo(l),Bo(sp))};function k2(l,c){(l>>>=0)==c>>>0?setTimeout(Oa):d?postMessage({Hb:l,Db:"checkMailbox"}):(l=on[l])&&l.postMessage({Db:"checkMailbox"})}var Uo=[];function C2(l,c,m,v,b){for(c>>>=0,v/=2,Uo.length=v,m=b>>>0>>>3,b=0;b<v;b++)Uo[b]=G[m+2*b]?G[m+2*b+1]:je()[m+2*b+1>>>0];return(c?qo[c]:_x[l])(...Uo)}var E2=()=>{zr=0};function T2(l){l>>>=0,d?postMessage({Db:"cleanupThread",ic:l}):lf(on[l])}function I2(l){}var Ra=(l,c)=>{var m=Ro[l];if(m===void 0)throw l=ep(l),m=rr(l),hr(l),new Bn(`${c} has unknown type ${m}`);return m},Of=(l,c,m)=>{var v=[];return l=l.toWireType(v,m),v.length&&(se()[c>>>2>>>0]=At(v)),l};function z2(l,c,m){return c>>>=0,m>>>=0,l=ut(l>>>0),c=Ra(c,"emval::as"),Of(c,m,l)}function A2(l,c){return c>>>=0,l=ut(l>>>0),(c=Ra(c,"emval::as")).toWireType(null,l)}var Na=l=>{try{l()}catch(c){Ut(c)}},Rr=0,nr=null,Rf=0,Ma=[],Nf={},Mf={},O2=0,jo=null,R2=[];function Df(l){return function(c){if(!O){if(Rr===0){var m=!1,v=!1;c((b=0)=>{if(!O&&(Rf=b,m=!0,v)){Rr=2,Na(()=>cp(nr)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),b=!1;try{var E=function(){var j=R()[nr+8>>>2>>>0];return j=B[Mf[j]],--zr,j()}()}catch(j){E=j,b=!0}var A=!1;if(!nr){var M=jo;M&&(jo=null,(b?M.reject:M.resolve)(E),A=!0)}if(b&&!A)throw E}}),v=!0,m||(Rr=1,nr=function(){var b=Ua(65548),E=b+12;se()[b>>>2>>>0]=E,se()[b+4>>>2>>>0]=E+65536,E=Ma[0];var A=Nf[E];return A===void 0&&(A=O2++,Nf[E]=A,Mf[A]=E),E=A,R()[b+8>>>2>>>0]=E,b}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),Na(()=>up(nr)))}else Rr===2?(Rr=0,Na(fp),hr(nr),nr=null,R2.forEach(Bo)):Ut(`invalid state: ${Rr}`);return Rf}}(c=>{l().then(c)})}function N2(l){return l>>>=0,Df(async()=>{var c=await ut(l);return At(c)})}var Da=[];function M2(l,c,m,v){return m>>>=0,v>>>=0,(l=Da[l>>>0])(null,c=ut(c>>>0),m,v)}var D2={},Pa=l=>{var c=D2[l];return c===void 0?rr(l):c};function P2(l,c,m,v,b){return m>>>=0,v>>>=0,b>>>=0,(l=Da[l>>>0])(c=ut(c>>>0),c[m=Pa(m)],v,b)}function B2(l,c){return c>>>=0,(l=ut(l>>>0))==ut(c)}var Pf=()=>typeof globalThis=="object"?globalThis:Function("return this")();function L2(l){return(l>>>=0)==0?At(Pf()):(l=Pa(l),At(Pf()[l]))}var U2=l=>{var c=Da.length;return Da.push(l),c},j2=(l,c)=>{for(var m=Array(l),v=0;v<l;++v)m[v]=Ra(se()[c+4*v>>>2>>>0],`parameter ${v}`);return m};function W2(l,c,m){var v=(c=j2(l,c>>>0)).shift();l--;var b=`return function (obj, func, destructorsRef, args) {
`,E=0,A=[];m===0&&A.push("obj");for(var M=["retType"],j=[v],q=0;q<l;++q)A.push(`arg${q}`),M.push(`argType${q}`),j.push(c[q]),b+=`  var arg${q} = argType${q}.readValueFromPointer(args${E?"+"+E:""});
`,E+=c[q].Cb;return b+=`  var rv = ${m===1?"new func":"func.call"}(${A.join(", ")});
`,v.Ub||(M.push("emval_returnValue"),j.push(Of),b+=`  return emval_returnValue(retType, destructorsRef, rv);
`),l=new Function(...M,b+`};
`)(...j),m=`methodCaller<(${c.map(ee=>ee.name).join(", ")}) => ${v.name}>`,U2(Object.defineProperty(l,"name",{value:m}))}function F2(l){return l=Pa(l>>>0),At(i[l])}function V2(l,c){return c>>>=0,l=ut(l>>>0),c=ut(c),At(l[c])}function q2(l){9<(l>>>=0)&&(pr[l+1]+=1)}function H2(){return At([])}function G2(l){l=ut(l>>>0);for(var c=Array(l.length),m=0;m<l.length;m++)c[m]=l[m];return At(c)}function K2(l){return At(Pa(l>>>0))}function Q2(){return At({})}function Y2(l){for(var c=ut(l>>>=0);c.length;){var m=c.pop();c.pop()(m)}Mo(l)}function Z2(l,c,m){c>>>=0,m>>>=0,l=ut(l>>>0),c=ut(c),m=ut(m),l[c]=m}function X2(l,c){return c>>>=0,l=(l=Ra(l>>>0,"_emval_take_value")).readValueFromPointer(c),At(l)}function J2(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),R()[c>>>2>>>0]=l.getUTCSeconds(),R()[c+4>>>2>>>0]=l.getUTCMinutes(),R()[c+8>>>2>>>0]=l.getUTCHours(),R()[c+12>>>2>>>0]=l.getUTCDate(),R()[c+16>>>2>>>0]=l.getUTCMonth(),R()[c+20>>>2>>>0]=l.getUTCFullYear()-1900,R()[c+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,R()[c+28>>>2>>>0]=l}var Bf=l=>l%4==0&&(l%100!=0||l%400==0),Lf=[0,31,60,91,121,152,182,213,244,274,305,335],Uf=[0,31,59,90,120,151,181,212,243,273,304,334];function ex(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),R()[c>>>2>>>0]=l.getSeconds(),R()[c+4>>>2>>>0]=l.getMinutes(),R()[c+8>>>2>>>0]=l.getHours(),R()[c+12>>>2>>>0]=l.getDate(),R()[c+16>>>2>>>0]=l.getMonth(),R()[c+20>>>2>>>0]=l.getFullYear()-1900,R()[c+24>>>2>>>0]=l.getDay();var m=(Bf(l.getFullYear())?Lf:Uf)[l.getMonth()]+l.getDate()-1|0;R()[c+28>>>2>>>0]=m,R()[c+36>>>2>>>0]=-60*l.getTimezoneOffset(),m=new Date(l.getFullYear(),6,1).getTimezoneOffset();var v=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(m!=v&&l.getTimezoneOffset()==Math.min(v,m)),R()[c+32>>>2>>>0]=l}function tx(l){l>>>=0;var c=new Date(R()[l+20>>>2>>>0]+1900,R()[l+16>>>2>>>0],R()[l+12>>>2>>>0],R()[l+8>>>2>>>0],R()[l+4>>>2>>>0],R()[l>>>2>>>0],0),m=R()[l+32>>>2>>>0],v=c.getTimezoneOffset(),b=new Date(c.getFullYear(),6,1).getTimezoneOffset(),E=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,b);return 0>m?R()[l+32>>>2>>>0]=+(b!=E&&A==v):0<m!=(A==v)&&(b=Math.max(E,b),c.setTime(c.getTime()+6e4*((0<m?A:b)-v))),R()[l+24>>>2>>>0]=c.getDay(),m=(Bf(c.getFullYear())?Lf:Uf)[c.getMonth()]+c.getDate()-1|0,R()[l+28>>>2>>>0]=m,R()[l>>>2>>>0]=c.getSeconds(),R()[l+4>>>2>>>0]=c.getMinutes(),R()[l+8>>>2>>>0]=c.getHours(),R()[l+12>>>2>>>0]=c.getDate(),R()[l+16>>>2>>>0]=c.getMonth(),R()[l+20>>>2>>>0]=c.getYear(),l=c.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function jf(l,c,m,v,b,E,A){return d?ze(16,1,l,c,m,v,b,E,A):-52}function Wf(l,c,m,v,b,E){if(d)return ze(17,1,l,c,m,v,b,E)}var $i={},rx=()=>performance.timeOrigin+performance.now();function Ff(l,c){if(d)return ze(18,1,l,c);if($i[l]&&(clearTimeout($i[l].id),delete $i[l]),!c)return 0;var m=setTimeout(()=>{delete $i[l],Bo(()=>ap(l,performance.timeOrigin+performance.now()))},c);return $i[l]={id:m,rc:c},0}function nx(l,c,m,v){l>>>=0,c>>>=0,m>>>=0,v>>>=0;var b=new Date().getFullYear(),E=new Date(b,0,1).getTimezoneOffset();b=new Date(b,6,1).getTimezoneOffset();var A=Math.max(E,b);se()[l>>>2>>>0]=60*A,R()[c>>>2>>>0]=+(E!=b),l=(c=M=>{var j=Math.abs(M);return`UTC${0<=M?"-":"+"}${String(Math.floor(j/60)).padStart(2,"0")}${String(j%60).padStart(2,"0")}`})(E),c=c(b),b<E?(ln(l,m,17),ln(c,v,17)):(ln(l,v,17),ln(c,m,17))}var ix=()=>Date.now();function ax(l,c,m){return 0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),G[m>>>0>>>3]=BigInt(Math.round(1e6*l)),0):28}var Wo=[],Vf=(l,c)=>{Wo.length=0;for(var m;m=J()[l++>>>0];){var v=m!=105;c+=(v&=m!=112)&&c%8?4:0,Wo.push(m==112?se()[c>>>2>>>0]:m==106?G[c>>>3]:m==105?R()[c>>>2>>>0]:je()[c>>>3>>>0]),c+=v?8:4}return Wo};function sx(l,c,m){return l>>>=0,c=Vf(c>>>0,m>>>0),qo[l](...c)}function ox(l,c,m){return l>>>=0,c=Vf(c>>>0,m>>>0),qo[l](...c)}var lx=()=>{};function ux(l,c){return X(We(l>>>0,c>>>0))}var dx=()=>{throw zr+=1,"unwind"};function cx(){return 4294901760}var fx=()=>navigator.hardwareConcurrency;function px(){return Ut("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function hx(l){l>>>=0;var c=J().length;if(l<=c||4294901760<l)return!1;for(var m=1;4>=m;m*=2){var v=c*(1+.2/m);v=Math.min(v,l+100663296);e:{v=(Math.min(4294901760,65536*Math.ceil(Math.max(l,v)/65536))-x.buffer.byteLength+65535)/65536|0;try{x.grow(v),_e();var b=1;break e}catch{}b=void 0}if(b)return!0}return!1}var Ba=()=>(Ut("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),xi={},qf=l=>{l.forEach(c=>{Ba()})};function mx(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),qf(l),xi.Mb=Ba(),xi.dc=l,xi.Mb}function gx(l,c,m){if(l>>>=0,c>>>=0,xi.Mb==l)var v=xi.dc;else(v=Error().stack.toString().split(`
`))[0]=="Error"&&v.shift(),qf(v);for(var b=3;v[b]&&Ba()!=l;)++b;for(l=0;l<m&&v[l+b];++l)R()[c+4*l>>>2>>>0]=Ba();return l}var Fo,Vo={},Hf=()=>{if(!Fo){var l,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in Vo)Vo[l]===void 0?delete c[l]:c[l]=Vo[l];var m=[];for(l in c)m.push(`${l}=${c[l]}`);Fo=m}return Fo};function Gf(l,c){if(d)return ze(19,1,l,c);l>>>=0,c>>>=0;var m,v=0,b=0;for(m of Hf()){var E=c+v;se()[l+b>>>2>>>0]=E,v+=ln(m,E,1/0)+1,b+=4}return 0}function Kf(l,c){if(d)return ze(20,1,l,c);l>>>=0,c>>>=0;var m=Hf();for(var v of(se()[l>>>2>>>0]=m.length,l=0,m))l+=Po(v)+1;return se()[c>>>2>>>0]=l,0}function Qf(l){return d?ze(21,1,l):52}function Yf(l,c,m,v){return d?ze(22,1,l,c,m,v):52}function Zf(l,c,m,v){return d?ze(23,1,l,c,m,v):70}var yx=[null,[],[]];function Xf(l,c,m,v){if(d)return ze(24,1,l,c,m,v);c>>>=0,m>>>=0,v>>>=0;for(var b=0,E=0;E<m;E++){var A=se()[c>>>2>>>0],M=se()[c+4>>>2>>>0];c+=8;for(var j=0;j<M;j++){var q=l,ee=J()[A+j>>>0],le=yx[q];ee===0||ee===10?((q===1?F:X)(mf(le)),le.length=0):le.push(ee)}b+=M}return se()[v>>>2>>>0]=b,0}d||function(){for(var l=i.numThreads-1;l--;)cf();Io.push(()=>{cr++,function(c){d?c():Promise.all(Ar.map(df)).then(c)}(()=>Aa())})}();for(var Jf=Array(256),La=0;256>La;++La)Jf[La]=String.fromCharCode(La);If=Jf,pr.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>pr.length/2-5-No.length,d||(x=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),_e()),i.wasmBinary&&(g=i.wasmBinary),i.stackSave=()=>Yo(),i.stackRestore=l=>ja(l),i.stackAlloc=l=>Qo(l),i.setValue=function(l,c,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":K()[l>>>0]=c;break;case"i16":Ee()[l>>>1>>>0]=c;break;case"i32":R()[l>>>2>>>0]=c;break;case"i64":G[l>>>3]=BigInt(c);break;case"float":Le()[l>>>2>>>0]=c;break;case"double":je()[l>>>3>>>0]=c;break;case"*":se()[l>>>2>>>0]=c;break;default:Ut(`invalid type for setValue: ${m}`)}},i.getValue=function(l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return K()[l>>>0];case"i16":return Ee()[l>>>1>>>0];case"i32":return R()[l>>>2>>>0];case"i64":return G[l>>>3];case"float":return Le()[l>>>2>>>0];case"double":return je()[l>>>3>>>0];case"*":return se()[l>>>2>>>0];default:Ut(`invalid type for getValue: ${c}`)}},i.UTF8ToString=We,i.stringToUTF8=ln,i.lengthBytesUTF8=Po;var _x=[zo,sf,ff,gf,yf,_f,vf,wf,$f,xf,bf,Sf,kf,Cf,Ef,Tf,jf,Wf,Ff,Gf,Kf,Qf,Yf,Zf,Xf],qo={893836:(l,c,m,v,b)=>{if(i===void 0||!i.Fb)return 1;if((l=We(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=i.Fb.get(l)))return 2;if(c=Number(c>>>0),m=Number(m>>>0),v=Number(v>>>0),c+m>l.byteLength)return 3;try{let E=l.subarray(c,c+m);switch(b){case 0:J().set(E,v>>>0);break;case 1:i.mc?i.mc(v,E):i.cc(v,E);break;default:return 4}return 0}catch{return 4}},894660:(l,c,m)=>{i.Pb(l,J().subarray(c>>>0,c+m>>>0))},894724:()=>i.oc(),894766:l=>{i.Ob(l)},894803:()=>{i.Wb()},894834:()=>{i.Xb()},894863:()=>{i.ac()},894888:l=>i.Vb(l),894921:l=>i.Zb(l),894953:(l,c,m)=>{i.Lb(Number(l),Number(c),Number(m),!0)},895016:(l,c,m)=>{i.Lb(Number(l),Number(c),Number(m))},895073:()=>typeof wasmOffsetConverter<"u",895130:l=>{i.Ab("Abs",l,void 0)},895181:l=>{i.Ab("Neg",l,void 0)},895232:l=>{i.Ab("Floor",l,void 0)},895285:l=>{i.Ab("Ceil",l,void 0)},895337:l=>{i.Ab("Reciprocal",l,void 0)},895395:l=>{i.Ab("Sqrt",l,void 0)},895447:l=>{i.Ab("Exp",l,void 0)},895498:l=>{i.Ab("Erf",l,void 0)},895549:l=>{i.Ab("Sigmoid",l,void 0)},895604:(l,c,m)=>{i.Ab("HardSigmoid",l,{alpha:c,beta:m})},895683:l=>{i.Ab("Log",l,void 0)},895734:l=>{i.Ab("Sin",l,void 0)},895785:l=>{i.Ab("Cos",l,void 0)},895836:l=>{i.Ab("Tan",l,void 0)},895887:l=>{i.Ab("Asin",l,void 0)},895939:l=>{i.Ab("Acos",l,void 0)},895991:l=>{i.Ab("Atan",l,void 0)},896043:l=>{i.Ab("Sinh",l,void 0)},896095:l=>{i.Ab("Cosh",l,void 0)},896147:l=>{i.Ab("Asinh",l,void 0)},896200:l=>{i.Ab("Acosh",l,void 0)},896253:l=>{i.Ab("Atanh",l,void 0)},896306:l=>{i.Ab("Tanh",l,void 0)},896358:l=>{i.Ab("Not",l,void 0)},896409:(l,c,m)=>{i.Ab("Clip",l,{min:c,max:m})},896478:l=>{i.Ab("Clip",l,void 0)},896530:(l,c)=>{i.Ab("Elu",l,{alpha:c})},896588:l=>{i.Ab("Gelu",l,void 0)},896640:l=>{i.Ab("Relu",l,void 0)},896692:(l,c)=>{i.Ab("LeakyRelu",l,{alpha:c})},896756:(l,c)=>{i.Ab("ThresholdedRelu",l,{alpha:c})},896826:(l,c)=>{i.Ab("Cast",l,{to:c})},896884:l=>{i.Ab("Add",l,void 0)},896935:l=>{i.Ab("Sub",l,void 0)},896986:l=>{i.Ab("Mul",l,void 0)},897037:l=>{i.Ab("Div",l,void 0)},897088:l=>{i.Ab("Pow",l,void 0)},897139:l=>{i.Ab("Equal",l,void 0)},897192:l=>{i.Ab("Greater",l,void 0)},897247:l=>{i.Ab("GreaterOrEqual",l,void 0)},897309:l=>{i.Ab("Less",l,void 0)},897361:l=>{i.Ab("LessOrEqual",l,void 0)},897420:(l,c,m,v,b)=>{i.Ab("ReduceMean",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},897595:(l,c,m,v,b)=>{i.Ab("ReduceMax",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},897769:(l,c,m,v,b)=>{i.Ab("ReduceMin",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},897943:(l,c,m,v,b)=>{i.Ab("ReduceProd",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898118:(l,c,m,v,b)=>{i.Ab("ReduceSum",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898292:(l,c,m,v,b)=>{i.Ab("ReduceL1",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898465:(l,c,m,v,b)=>{i.Ab("ReduceL2",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898638:(l,c,m,v,b)=>{i.Ab("ReduceLogSum",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898815:(l,c,m,v,b)=>{i.Ab("ReduceSumSquare",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898995:(l,c,m,v,b)=>{i.Ab("ReduceLogSumExp",l,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},899175:l=>{i.Ab("Where",l,void 0)},899228:(l,c,m)=>{i.Ab("Transpose",l,{perm:c?Array.from(R().subarray(Number(c)>>>0,Number(m)>>>0)):[]})},899352:(l,c,m,v)=>{i.Ab("DepthToSpace",l,{blocksize:c,mode:We(m),format:v?"NHWC":"NCHW"})},899485:(l,c,m,v)=>{i.Ab("DepthToSpace",l,{blocksize:c,mode:We(m),format:v?"NHWC":"NCHW"})},899618:(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe)=>{i.Ab("ConvTranspose",l,{format:j?"NHWC":"NCHW",autoPad:c,dilations:[m],group:v,kernelShape:[b],pads:[E,A],strides:[M],wIsConst:()=>!!K()[q>>>0],outputPadding:ee?Array.from(R().subarray(Number(ee)>>>0,Number(le)>>>0)):[],outputShape:pe?Array.from(R().subarray(Number(pe)>>>0,Number(ve)>>>0)):[],activation:We(qe)})},900051:(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve)=>{i.Ab("ConvTranspose",l,{format:M?"NHWC":"NCHW",autoPad:c,dilations:Array.from(R().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:v,kernelShape:Array.from(R().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(R().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(R().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!K()[j>>>0],outputPadding:q?Array.from(R().subarray(Number(q)>>>0,Number(ee)>>>0)):[],outputShape:le?Array.from(R().subarray(Number(le)>>>0,Number(pe)>>>0)):[],activation:We(ve)})},900712:(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe)=>{i.Ab("ConvTranspose",l,{format:j?"NHWC":"NCHW",autoPad:c,dilations:[m],group:v,kernelShape:[b],pads:[E,A],strides:[M],wIsConst:()=>!!K()[q>>>0],outputPadding:ee?Array.from(R().subarray(Number(ee)>>>0,Number(le)>>>0)):[],outputShape:pe?Array.from(R().subarray(Number(pe)>>>0,Number(ve)>>>0)):[],activation:We(qe)})},901145:(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve)=>{i.Ab("ConvTranspose",l,{format:M?"NHWC":"NCHW",autoPad:c,dilations:Array.from(R().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:v,kernelShape:Array.from(R().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(R().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(R().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!K()[j>>>0],outputPadding:q?Array.from(R().subarray(Number(q)>>>0,Number(ee)>>>0)):[],outputShape:le?Array.from(R().subarray(Number(le)>>>0,Number(pe)>>>0)):[],activation:We(ve)})},901806:(l,c)=>{i.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},901897:(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve)=>{i.Ab("AveragePool",l,{format:ve?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:v,storage_order:b,dilations:E?Array.from(R().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from(R().subarray(Number(M)>>>0,Number(j)>>>0)):[],pads:q?Array.from(R().subarray(Number(q)>>>0,Number(ee)>>>0)):[],strides:le?Array.from(R().subarray(Number(le)>>>0,Number(pe)>>>0)):[]})},902376:(l,c)=>{i.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},902467:(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve)=>{i.Ab("AveragePool",l,{format:ve?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:v,storage_order:b,dilations:E?Array.from(R().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from(R().subarray(Number(M)>>>0,Number(j)>>>0)):[],pads:q?Array.from(R().subarray(Number(q)>>>0,Number(ee)>>>0)):[],strides:le?Array.from(R().subarray(Number(le)>>>0,Number(pe)>>>0)):[]})},902946:(l,c)=>{i.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903033:(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve)=>{i.Ab("MaxPool",l,{format:ve?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:v,storage_order:b,dilations:E?Array.from(R().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from(R().subarray(Number(M)>>>0,Number(j)>>>0)):[],pads:q?Array.from(R().subarray(Number(q)>>>0,Number(ee)>>>0)):[],strides:le?Array.from(R().subarray(Number(le)>>>0,Number(pe)>>>0)):[]})},903508:(l,c)=>{i.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903595:(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve)=>{i.Ab("MaxPool",l,{format:ve?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:v,storage_order:b,dilations:E?Array.from(R().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:M?Array.from(R().subarray(Number(M)>>>0,Number(j)>>>0)):[],pads:q?Array.from(R().subarray(Number(q)>>>0,Number(ee)>>>0)):[],strides:le?Array.from(R().subarray(Number(le)>>>0,Number(pe)>>>0)):[]})},904070:(l,c,m,v,b)=>{i.Ab("Gemm",l,{alpha:c,beta:m,transA:v,transB:b})},904174:l=>{i.Ab("MatMul",l,void 0)},904228:(l,c,m,v)=>{i.Ab("ArgMax",l,{keepDims:!!c,selectLastIndex:!!m,axis:v})},904336:(l,c,m,v)=>{i.Ab("ArgMin",l,{keepDims:!!c,selectLastIndex:!!m,axis:v})},904444:(l,c)=>{i.Ab("Softmax",l,{axis:c})},904507:(l,c)=>{i.Ab("Concat",l,{axis:c})},904567:(l,c,m,v,b)=>{i.Ab("Split",l,{axis:c,numOutputs:m,splitSizes:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},904723:l=>{i.Ab("Expand",l,void 0)},904777:(l,c)=>{i.Ab("Gather",l,{axis:Number(c)})},904848:(l,c)=>{i.Ab("GatherElements",l,{axis:Number(c)})},904927:(l,c)=>{i.Ab("GatherND",l,{batch_dims:Number(c)})},905006:(l,c,m,v,b,E,A,M,j,q,ee)=>{i.Ab("Resize",l,{antialias:c,axes:m?Array.from(R().subarray(Number(m)>>>0,Number(v)>>>0)):[],coordinateTransformMode:We(b),cubicCoeffA:E,excludeOutside:A,extrapolationValue:M,keepAspectRatioPolicy:We(j),mode:We(q),nearestMode:We(ee)})},905368:(l,c,m,v,b,E,A)=>{i.Ab("Slice",l,{starts:c?Array.from(R().subarray(Number(c)>>>0,Number(m)>>>0)):[],ends:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[],axes:E?Array.from(R().subarray(Number(E)>>>0,Number(A)>>>0)):[]})},905632:l=>{i.Ab("Tile",l,void 0)},905684:(l,c,m)=>{i.Ab("InstanceNormalization",l,{epsilon:c,format:m?"NHWC":"NCHW"})},905798:(l,c,m)=>{i.Ab("InstanceNormalization",l,{epsilon:c,format:m?"NHWC":"NCHW"})},905912:l=>{i.Ab("Range",l,void 0)},905965:(l,c)=>{i.Ab("Einsum",l,{equation:We(c)})},906046:(l,c,m,v,b)=>{i.Ab("Pad",l,{mode:c,value:m,pads:v?Array.from(R().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},906189:(l,c,m,v,b,E)=>{i.Ab("BatchNormalization",l,{epsilon:c,momentum:m,spatial:!!b,trainingMode:!!v,format:E?"NHWC":"NCHW"})},906358:(l,c,m,v,b,E)=>{i.Ab("BatchNormalization",l,{epsilon:c,momentum:m,spatial:!!b,trainingMode:!!v,format:E?"NHWC":"NCHW"})},906527:(l,c,m)=>{i.Ab("CumSum",l,{exclusive:Number(c),reverse:Number(m)})},906624:(l,c,m)=>{i.Ab("DequantizeLinear",l,{axis:c,blockSize:m})},906714:(l,c,m,v,b)=>{i.Ab("GridSample",l,{align_corners:c,mode:We(m),padding_mode:We(v),format:b?"NHWC":"NCHW"})},906884:(l,c,m,v,b)=>{i.Ab("GridSample",l,{align_corners:c,mode:We(m),padding_mode:We(v),format:b?"NHWC":"NCHW"})},907054:(l,c)=>{i.Ab("ScatterND",l,{reduction:We(c)})},907139:(l,c,m,v,b,E,A,M,j)=>{i.Ab("Attention",l,{numHeads:c,isUnidirectional:m,maskFilterValue:v,scale:b,doRotary:E,qkvHiddenSizes:A?Array.from(R().subarray(Number(M)>>>0,Number(M)+A>>>0)):[],pastPresentShareBuffer:!!j})},907411:l=>{i.Ab("BiasAdd",l,void 0)},907466:l=>{i.Ab("BiasSplitGelu",l,void 0)},907527:l=>{i.Ab("FastGelu",l,void 0)},907583:(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t)=>{i.Ab("Conv",l,{format:le?"NHWC":"NCHW",auto_pad:c,dilations:m?Array.from(R().subarray(Number(m)>>>0,Number(v)>>>0)):[],group:b,kernel_shape:E?Array.from(R().subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:M?Array.from(R().subarray(Number(M)>>>0,Number(j)>>>0)):[],strides:q?Array.from(R().subarray(Number(q)>>>0,Number(ee)>>>0)):[],w_is_const:()=>!!K()[Number(pe)>>>0],activation:We(ve),activation_params:qe?Array.from(Le().subarray(Number(qe)>>>0,Number($t)>>>0)):[]})},908167:l=>{i.Ab("Gelu",l,void 0)},908219:(l,c,m,v,b,E,A,M,j)=>{i.Ab("GroupQueryAttention",l,{numHeads:c,kvNumHeads:m,scale:v,softcap:b,doRotary:E,rotaryInterleaved:A,smoothSoftmax:M,localWindowSize:j})},908436:(l,c,m,v)=>{i.Ab("LayerNormalization",l,{axis:c,epsilon:m,simplified:!!v})},908547:(l,c,m,v)=>{i.Ab("LayerNormalization",l,{axis:c,epsilon:m,simplified:!!v})},908658:(l,c,m,v,b,E)=>{i.Ab("MatMulNBits",l,{k:c,n:m,accuracyLevel:v,bits:b,blockSize:E})},908785:(l,c,m,v,b,E)=>{i.Ab("MultiHeadAttention",l,{numHeads:c,isUnidirectional:m,maskFilterValue:v,scale:b,doRotary:E})},908944:(l,c)=>{i.Ab("QuickGelu",l,{alpha:c})},909008:(l,c,m,v,b)=>{i.Ab("RotaryEmbedding",l,{interleaved:!!c,numHeads:m,rotaryEmbeddingDim:v,scale:b})},909147:(l,c,m)=>{i.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!m})},909249:(l,c,m)=>{i.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!m})},909351:(l,c,m,v)=>{i.Ab("GatherBlockQuantized",l,{gatherAxis:c,quantizeAxis:m,blockSize:v})},909472:l=>{i.$b(l)},909506:(l,c)=>i.bc(Number(l),Number(c),i.Gb.ec,i.Gb.errors)};function vx(l,c,m){return Df(async()=>{await i.Yb(Number(l),Number(c),Number(m))})}function wx(){return typeof wasmOffsetConverter<"u"}var B=await async function(){function l(v,b){return B=v.exports,B=function(){var E=B,A={};for(let[M,j]of Object.entries(E))A[M]=typeof j=="function"?(...q)=>{Ma.push(M);try{return j(...q)}finally{O||(Ma.pop(),nr&&Rr===1&&Ma.length===0&&(Rr=0,zr+=1,Na(dp),typeof Fibers<"u"&&Fibers.sc()))}}:j;return A}(),B=function(){var E=B,A=j=>q=>j(q)>>>0,M=j=>()=>j()>>>0;return(E=Object.assign({},E)).Ea=A(E.Ea),E.gb=M(E.gb),E.ib=A(E.ib),E.tb=A(E.tb),E.ub=M(E.ub),E.__cxa_get_exception_ptr=A(E.__cxa_get_exception_ptr),E}(),of.push(B.jb),S=b,Aa(),B}cr++;var c=rf();if(i.instantiateWasm)return new Promise(v=>{i.instantiateWasm(c,(b,E)=>{v(l(b,E))})});if(d)return new Promise(v=>{Z=b=>{var E=new WebAssembly.Instance(b,rf());v(l(E,b))}});lt??(lt=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",y):y+"ort-wasm-simd-threaded.jsep.wasm":new URL("/mobile-detect/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href);try{var m=await async function(v){var b=lt;if(!g&&typeof WebAssembly.instantiateStreaming=="function"&&!W(b))try{var E=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,v)}catch(A){X(`wasm streaming compile failed: ${A}`),X("falling back to ArrayBuffer instantiation")}return async function(A,M){try{var j=await async function(q){if(!g)try{var ee=await _(q);return new Uint8Array(ee)}catch{}if(q==lt&&g)q=new Uint8Array(g);else{if(!w)throw"both async and sync fetching of the wasm failed";q=w(q)}return q}(A);return await WebAssembly.instantiate(j,M)}catch(q){X(`failed to asynchronously prepare wasm: ${q}`),Ut(q)}}(b,v)}(c);return l(m.instance,m.module)}catch(v){return a(v),Promise.reject(v)}}(),ep=l=>(ep=B.Ea)(l),tp=()=>(tp=B.Fa)();i._OrtInit=(l,c)=>(i._OrtInit=B.Ga)(l,c),i._OrtGetLastError=(l,c)=>(i._OrtGetLastError=B.Ha)(l,c),i._OrtCreateSessionOptions=(l,c,m,v,b,E,A,M,j,q)=>(i._OrtCreateSessionOptions=B.Ia)(l,c,m,v,b,E,A,M,j,q),i._OrtAppendExecutionProvider=(l,c,m,v,b)=>(i._OrtAppendExecutionProvider=B.Ja)(l,c,m,v,b),i._OrtAddFreeDimensionOverride=(l,c,m)=>(i._OrtAddFreeDimensionOverride=B.Ka)(l,c,m),i._OrtAddSessionConfigEntry=(l,c,m)=>(i._OrtAddSessionConfigEntry=B.La)(l,c,m),i._OrtReleaseSessionOptions=l=>(i._OrtReleaseSessionOptions=B.Ma)(l),i._OrtCreateSession=(l,c,m)=>(i._OrtCreateSession=B.Na)(l,c,m),i._OrtReleaseSession=l=>(i._OrtReleaseSession=B.Oa)(l),i._OrtGetInputOutputCount=(l,c,m)=>(i._OrtGetInputOutputCount=B.Pa)(l,c,m),i._OrtGetInputOutputMetadata=(l,c,m,v)=>(i._OrtGetInputOutputMetadata=B.Qa)(l,c,m,v),i._OrtFree=l=>(i._OrtFree=B.Ra)(l),i._OrtCreateTensor=(l,c,m,v,b,E)=>(i._OrtCreateTensor=B.Sa)(l,c,m,v,b,E),i._OrtGetTensorData=(l,c,m,v,b)=>(i._OrtGetTensorData=B.Ta)(l,c,m,v,b),i._OrtReleaseTensor=l=>(i._OrtReleaseTensor=B.Ua)(l),i._OrtCreateRunOptions=(l,c,m,v)=>(i._OrtCreateRunOptions=B.Va)(l,c,m,v),i._OrtAddRunConfigEntry=(l,c,m)=>(i._OrtAddRunConfigEntry=B.Wa)(l,c,m),i._OrtReleaseRunOptions=l=>(i._OrtReleaseRunOptions=B.Xa)(l),i._OrtCreateBinding=l=>(i._OrtCreateBinding=B.Ya)(l),i._OrtBindInput=(l,c,m)=>(i._OrtBindInput=B.Za)(l,c,m),i._OrtBindOutput=(l,c,m,v)=>(i._OrtBindOutput=B._a)(l,c,m,v),i._OrtClearBoundOutputs=l=>(i._OrtClearBoundOutputs=B.$a)(l),i._OrtReleaseBinding=l=>(i._OrtReleaseBinding=B.ab)(l),i._OrtRunWithBinding=(l,c,m,v,b)=>(i._OrtRunWithBinding=B.bb)(l,c,m,v,b),i._OrtRun=(l,c,m,v,b,E,A,M)=>(i._OrtRun=B.cb)(l,c,m,v,b,E,A,M),i._OrtEndProfiling=l=>(i._OrtEndProfiling=B.db)(l),i._JsepOutput=(l,c,m)=>(i._JsepOutput=B.eb)(l,c,m),i._JsepGetNodeName=l=>(i._JsepGetNodeName=B.fb)(l);var Ho=()=>(Ho=B.gb)(),hr=i._free=l=>(hr=i._free=B.hb)(l),Ua=i._malloc=l=>(Ua=i._malloc=B.ib)(l),Go=(l,c,m,v,b,E)=>(Go=B.kb)(l,c,m,v,b,E),rp=()=>(rp=B.lb)(),np=(l,c,m,v,b)=>(np=B.mb)(l,c,m,v,b),ip=l=>(ip=B.nb)(l),Ko=l=>(Ko=B.ob)(l),ap=(l,c)=>(ap=B.pb)(l,c),sp=()=>(sp=B.qb)(),op=(l,c)=>(op=B.rb)(l,c),ja=l=>(ja=B.sb)(l),Qo=l=>(Qo=B.tb)(l),Yo=()=>(Yo=B.ub)(),lp=i.dynCall_ii=(l,c)=>(lp=i.dynCall_ii=B.vb)(l,c);i.dynCall_vii=(l,c,m)=>(i.dynCall_vii=B.dynCall_vii)(l,c,m),i.dynCall_iiiii=(l,c,m,v,b)=>(i.dynCall_iiiii=B.dynCall_iiiii)(l,c,m,v,b),i.dynCall_iii=(l,c,m)=>(i.dynCall_iii=B.dynCall_iii)(l,c,m),i.dynCall_iiiiii=(l,c,m,v,b,E)=>(i.dynCall_iiiiii=B.dynCall_iiiiii)(l,c,m,v,b,E),i.dynCall_iiiiiiii=(l,c,m,v,b,E,A,M)=>(i.dynCall_iiiiiiii=B.dynCall_iiiiiiii)(l,c,m,v,b,E,A,M),i.dynCall_iiiiiii=(l,c,m,v,b,E,A)=>(i.dynCall_iiiiiii=B.dynCall_iiiiiii)(l,c,m,v,b,E,A),i.dynCall_vi=(l,c)=>(i.dynCall_vi=B.dynCall_vi)(l,c),i.dynCall_iiii=(l,c,m,v)=>(i.dynCall_iiii=B.dynCall_iiii)(l,c,m,v),i.dynCall_i=l=>(i.dynCall_i=B.dynCall_i)(l),i.dynCall_viiiiiiii=(l,c,m,v,b,E,A,M,j)=>(i.dynCall_viiiiiiii=B.dynCall_viiiiiiii)(l,c,m,v,b,E,A,M,j),i.dynCall_viii=(l,c,m,v)=>(i.dynCall_viii=B.dynCall_viii)(l,c,m,v),i.dynCall_viijj=(l,c,m,v,b)=>(i.dynCall_viijj=B.dynCall_viijj)(l,c,m,v,b),i.dynCall_viiiiii=(l,c,m,v,b,E,A)=>(i.dynCall_viiiiii=B.dynCall_viiiiii)(l,c,m,v,b,E,A),i.dynCall_viiii=(l,c,m,v,b)=>(i.dynCall_viiii=B.dynCall_viiii)(l,c,m,v,b),i.dynCall_viiiii=(l,c,m,v,b,E)=>(i.dynCall_viiiii=B.dynCall_viiiii)(l,c,m,v,b,E),i.dynCall_vfiii=(l,c,m,v,b)=>(i.dynCall_vfiii=B.dynCall_vfiii)(l,c,m,v,b),i.dynCall_viiiiff=(l,c,m,v,b,E,A)=>(i.dynCall_viiiiff=B.dynCall_viiiiff)(l,c,m,v,b,E,A),i.dynCall_viiiiiff=(l,c,m,v,b,E,A,M)=>(i.dynCall_viiiiiff=B.dynCall_viiiiiff)(l,c,m,v,b,E,A,M),i.dynCall_ffff=(l,c,m,v)=>(i.dynCall_ffff=B.dynCall_ffff)(l,c,m,v),i.dynCall_viiff=(l,c,m,v,b)=>(i.dynCall_viiff=B.dynCall_viiff)(l,c,m,v,b),i.dynCall_fffffff=(l,c,m,v,b,E,A)=>(i.dynCall_fffffff=B.dynCall_fffffff)(l,c,m,v,b,E,A),i.dynCall_jjjjjjj=(l,c,m,v,b,E,A)=>(i.dynCall_jjjjjjj=B.dynCall_jjjjjjj)(l,c,m,v,b,E,A),i.dynCall_jjjjjj=(l,c,m,v,b,E)=>(i.dynCall_jjjjjj=B.dynCall_jjjjjj)(l,c,m,v,b,E),i.dynCall_iijjii=(l,c,m,v,b,E)=>(i.dynCall_iijjii=B.dynCall_iijjii)(l,c,m,v,b,E),i.dynCall_viiiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve)=>(i.dynCall_viiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve),i.dynCall_viiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee)=>(i.dynCall_viiiiiiiiii=B.dynCall_viiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee),i.dynCall_viiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le)=>(i.dynCall_viiiiiiiiiii=B.dynCall_viiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le),i.dynCall_viiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe)=>(i.dynCall_viiiiiiiiiiii=B.dynCall_viiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe),i.dynCall_viiiiiiiiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr,un,bi)=>(i.dynCall_viiiiiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr,un,bi),i.dynCall_viiiiiiiii=(l,c,m,v,b,E,A,M,j,q)=>(i.dynCall_viiiiiiiii=B.dynCall_viiiiiiiii)(l,c,m,v,b,E,A,M,j,q),i.dynCall_viiiiiiiiiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr,un,bi,Zo)=>(i.dynCall_viiiiiiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr,un,bi,Zo),i.dynCall_viiiiiii=(l,c,m,v,b,E,A,M)=>(i.dynCall_viiiiiii=B.dynCall_viiiiiii)(l,c,m,v,b,E,A,M),i.dynCall_viiiiiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t)=>(i.dynCall_viiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t),i.dynCall_jiji=(l,c,m,v)=>(i.dynCall_jiji=B.dynCall_jiji)(l,c,m,v),i.dynCall_v=l=>(i.dynCall_v=B.dynCall_v)(l),i.dynCall_iidiiii=(l,c,m,v,b,E,A)=>(i.dynCall_iidiiii=B.dynCall_iidiiii)(l,c,m,v,b,E,A),i.dynCall_iiiiiiiii=(l,c,m,v,b,E,A,M,j)=>(i.dynCall_iiiiiiiii=B.dynCall_iiiiiiiii)(l,c,m,v,b,E,A,M,j),i.dynCall_iiij=(l,c,m,v)=>(i.dynCall_iiij=B.dynCall_iiij)(l,c,m,v),i.dynCall_iiiiiiiiii=(l,c,m,v,b,E,A,M,j,q)=>(i.dynCall_iiiiiiiiii=B.dynCall_iiiiiiiiii)(l,c,m,v,b,E,A,M,j,q),i.dynCall_iiiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe)=>(i.dynCall_iiiiiiiiiiiii=B.dynCall_iiiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe),i.dynCall_iiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee)=>(i.dynCall_iiiiiiiiiii=B.dynCall_iiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee),i.dynCall_ji=(l,c)=>(i.dynCall_ji=B.dynCall_ji)(l,c),i.dynCall_iijii=(l,c,m,v,b)=>(i.dynCall_iijii=B.dynCall_iijii)(l,c,m,v,b),i.dynCall_vij=(l,c,m)=>(i.dynCall_vij=B.dynCall_vij)(l,c,m),i.dynCall_viiijii=(l,c,m,v,b,E,A)=>(i.dynCall_viiijii=B.dynCall_viiijii)(l,c,m,v,b,E,A),i.dynCall_viijiiiiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr,un)=>(i.dynCall_viijiiiiiiiiiiiiii=B.dynCall_viijiiiiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr,un),i.dynCall_viiiji=(l,c,m,v,b,E)=>(i.dynCall_viiiji=B.dynCall_viiiji)(l,c,m,v,b,E),i.dynCall_fiii=(l,c,m,v)=>(i.dynCall_fiii=B.dynCall_fiii)(l,c,m,v),i.dynCall_viijii=(l,c,m,v,b,E)=>(i.dynCall_viijii=B.dynCall_viijii)(l,c,m,v,b,E),i.dynCall_viij=(l,c,m,v)=>(i.dynCall_viij=B.dynCall_viij)(l,c,m,v),i.dynCall_jiij=(l,c,m,v)=>(i.dynCall_jiij=B.dynCall_jiij)(l,c,m,v),i.dynCall_fi=(l,c)=>(i.dynCall_fi=B.dynCall_fi)(l,c),i.dynCall_fii=(l,c,m)=>(i.dynCall_fii=B.dynCall_fii)(l,c,m),i.dynCall_jii=(l,c,m)=>(i.dynCall_jii=B.dynCall_jii)(l,c,m),i.dynCall_dii=(l,c,m)=>(i.dynCall_dii=B.dynCall_dii)(l,c,m),i.dynCall_fiiii=(l,c,m,v,b)=>(i.dynCall_fiiii=B.dynCall_fiiii)(l,c,m,v,b),i.dynCall_fif=(l,c,m)=>(i.dynCall_fif=B.dynCall_fif)(l,c,m),i.dynCall_jfi=(l,c,m)=>(i.dynCall_jfi=B.dynCall_jfi)(l,c,m),i.dynCall_viiiiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe)=>(i.dynCall_viiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe),i.dynCall_viiiiiiiiiiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr,un,bi,Zo,$x)=>(i.dynCall_viiiiiiiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr,un,bi,Zo,$x),i.dynCall_viiiiiiiiiiiiiiii=(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr)=>(i.dynCall_viiiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiiii)(l,c,m,v,b,E,A,M,j,q,ee,le,pe,ve,qe,$t,mr),i.dynCall_iif=(l,c,m)=>(i.dynCall_iif=B.dynCall_iif)(l,c,m),i.dynCall_jiiii=(l,c,m,v,b)=>(i.dynCall_jiiii=B.dynCall_jiiii)(l,c,m,v,b),i.dynCall_jiii=(l,c,m,v)=>(i.dynCall_jiii=B.dynCall_jiii)(l,c,m,v),i.dynCall_viif=(l,c,m,v)=>(i.dynCall_viif=B.dynCall_viif)(l,c,m,v),i.dynCall_viiij=(l,c,m,v,b)=>(i.dynCall_viiij=B.dynCall_viiij)(l,c,m,v,b),i.dynCall_viiiijii=(l,c,m,v,b,E,A,M)=>(i.dynCall_viiiijii=B.dynCall_viiiijii)(l,c,m,v,b,E,A,M),i.dynCall_iiiiij=(l,c,m,v,b,E)=>(i.dynCall_iiiiij=B.dynCall_iiiiij)(l,c,m,v,b,E),i.dynCall_iiiiid=(l,c,m,v,b,E)=>(i.dynCall_iiiiid=B.dynCall_iiiiid)(l,c,m,v,b,E),i.dynCall_iiiiijj=(l,c,m,v,b,E,A)=>(i.dynCall_iiiiijj=B.dynCall_iiiiijj)(l,c,m,v,b,E,A),i.dynCall_iiiiiijj=(l,c,m,v,b,E,A,M)=>(i.dynCall_iiiiiijj=B.dynCall_iiiiiijj)(l,c,m,v,b,E,A,M);var up=l=>(up=B.wb)(l),dp=()=>(dp=B.xb)(),cp=l=>(cp=B.yb)(l),fp=()=>(fp=B.zb)();return function l(){if(0<cr)Ir=l;else if(d)n(i),Te();else{for(;0<Io.length;)Io.shift()(i);0<cr?Ir=l:(i.calledRun=!0,O||(Te(),n(i)))}}(),i.PTR_SIZE=4,s},Dv=Il,Ch=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Ch&&Il()}),zl,hd,Eh,xt,Pv,ss,Th,Ih,Al,zh,Ol,Bv,Rl,Lv,Ic=V(()=>{Tc(),zl=typeof location>"u"?void 0:location.origin,hd=import.meta.url>"file:"&&import.meta.url<"file;",Eh=()=>{{if(hd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,zl).href}return import.meta.url}},xt=Eh(),Pv=()=>{if(xt&&!xt.startsWith("blob:"))return xt.substring(0,xt.lastIndexOf("/")+1)},ss=(e,t)=>{try{let r=t??xt;return(r?new URL(e,r):new URL(e)).origin===zl}catch{return!1}},Th=(e,t)=>{let r=t??xt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ih=(e,t)=>`${t??"./"}${e}`,Al=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},zh=async e=>(await import(e)).default,Ol=($S(),Sa(Rv)).default,Bv=async()=>{if(!xt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ss(xt))return[void 0,Ol()];let e=await Al(xt);return[e,Ol(e)]},Rl=(xS(),Sa(Mv)).default,Lv=async(e,t,r,n)=>{let a=Rl&&!(e||t);if(a)if(xt)a=ss(xt);else if(n&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Rl];{let i="ort-wasm-simd-threaded.jsep.mjs",s=e??Th(i,t),o=r&&s&&!ss(s,t),u=o?await Al(s):s??Ih(i,t);return[o?u:void 0,await zh(u)]}}}),Nl,os,Ri,Ml,Ah,Oh,Rh,zc,ke,Dn=V(()=>{Ic(),os=!1,Ri=!1,Ml=!1,Ah=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Oh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Rh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},zc=async e=>{if(os)return Promise.resolve();if(Ri)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ml)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ri=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Rh())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Oh())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=Ah();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,i=typeof a=="string"?a:void 0,s=a==null?void 0:a.mjs,o=(s==null?void 0:s.href)??s,u=a==null?void 0:a.wasm,d=(u==null?void 0:u.href)??u,f=e.wasmBinary,[p,h]=await Lv(o,i,r>1,!!f||!!d),_=!1,w=[];if(t>0&&w.push(new Promise($=>{setTimeout(()=>{_=!0,$()},t)})),w.push(new Promise(($,k)=>{let y={numThreads:r};if(f)y.wasmBinary=f;else if(d||i)y.locateFile=g=>d??i+g;else if(o&&o.indexOf("blob:")!==0)y.locateFile=g=>new URL(g,o).href;else if(p){let g=Pv();g&&(y.locateFile=x=>g+x)}h(y).then(g=>{Ri=!1,os=!0,Nl=g,$(),p&&URL.revokeObjectURL(p)},g=>{Ri=!1,Ml=!0,k(g)})})),await Promise.race(w),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ke=()=>{if(os&&Nl)return Nl;throw new Error("WebAssembly is not initialized yet.")}}),Yt,no,xe,Ac=V(()=>{Dn(),Yt=(e,t)=>{let r=ke(),n=r.lengthBytesUTF8(e)+1,a=r._malloc(n);return r.stringToUTF8(e,a,n),t.push(a),a},no=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,i])=>{let s=t?t+a:a;if(typeof i=="object")no(i,s+".",r,n);else if(typeof i=="string"||typeof i=="number")n(s,i.toString());else if(typeof i=="boolean")n(s,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},xe=e=>{let t=ke(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetLastError(a,a+n);let i=Number(t.getValue(a,n===4?"i32":"i64")),s=t.getValue(a+n,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Uv,bS=V(()=>{Dn(),Ac(),Uv=e=>{let t=ke(),r=0,n=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=Yt(e.tag,n)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,i),r===0&&xe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&no(e.extra,"",new WeakSet,(s,o)=>{let u=Yt(s,n),d=Yt(o,n);t._OrtAddRunConfigEntry(r,u,d)!==0&&xe(`Can't set a run config entry: ${s} - ${o}.`)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(s=>t._free(s)),i}}}),Nh,Mh,Dh,Ni,Ph,jv,SS=V(()=>{Dn(),Ac(),Nh=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Mh=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Dh=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ni=(e,t,r,n)=>{let a=Yt(t,n),i=Yt(r,n);ke()._OrtAddSessionConfigEntry(e,a,i)!==0&&xe(`Can't set a session config entry: ${t} - ${r}.`)},Ph=async(e,t,r)=>{for(let n of t){let a=typeof n=="string"?n:n.name,i=[];switch(a){case"webnn":if(a="WEBNN",typeof n!="string"){let f=n==null?void 0:n.deviceType;f&&Ni(e,"deviceType",f,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let f=n;if(f!=null&&f.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);Ni(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=Yt(a,r),o=i.length,u=0,d=0;if(o>0){u=ke()._malloc(o*ke().PTR_SIZE),r.push(u),d=ke()._malloc(o*ke().PTR_SIZE),r.push(d);for(let f=0;f<o;f++)ke().setValue(u+f*ke().PTR_SIZE,i[f][0],"*"),ke().setValue(d+f*ke().PTR_SIZE,i[f][1],"*")}await ke()._OrtAppendExecutionProvider(e,s,u,d,o)!==0&&xe(`Can't append execution provider: ${a}.`)}},jv=async e=>{let t=ke(),r=0,n=[],a=e||{};Dh(a);try{let i=Nh(a.graphOptimizationLevel??"all"),s=Mh(a.executionMode??"sequential"),o=typeof a.logId=="string"?Yt(a.logId,n):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof a.optimizedModelFilePath=="string"?Yt(a.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(i,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,o,u,d,f),r===0&&xe("Can't create session options."),a.executionProviders&&await Ph(r,a.executionProviders,n),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Ni(r,"enableGraphCapture",a.enableGraphCapture.toString(),n)}if(a.freeDimensionOverrides)for(let[p,h]of Object.entries(a.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let _=Yt(p,n);t._OrtAddFreeDimensionOverride(r,_,h)!==0&&xe(`Can't set a free dimension override: ${p} - ${h}.`)}return a.extra!==void 0&&no(a.extra,"",new WeakSet,(p,h)=>{Ni(r,p,h,n)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&xe("Can't release session options."),n.forEach(s=>t._free(s)),i}}}),yn,vr,_n,Eo,io,Oc,Rc,md,ue=V(()=>{yn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},vr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},_n=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((a,i)=>a*i,1);return r>0?Math.ceil(n*r):void 0},Eo=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},io=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Oc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Rc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",md=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Nc,Wv=V(()=>{Tc(),Nc=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),i;try{i=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let u=Math.ceil(n/65536);i=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await a.read();if(o)break;let d=u.byteLength;new Uint8Array(i,s,d).set(u),s+=d}return new Uint8Array(i,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Bh,Lh,Uh,jh,Mc,Wh,me,Tr=V(()=>{ue(),Bh=["V","I","W","E","F"],Lh=(e,t)=>{console.log(`[${Bh[e]},${new Date().toISOString()}]${t}`)},Mc=(e,t)=>{Uh=e,jh=t},Wh=(e,t)=>{let r=io(e),n=io(Uh);r>=n&&Lh(r,typeof t=="function"?t():t)},me=(...e)=>{jh&&Wh(...e)}}),Fh,hi,D,ao,Fv,Vv,qv,de=V(()=>{Fh=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},hi=class{static calcShape(e,t,r=!1){let n=e.length,a=t.length;if(n===0)return t;if(a===0)return e;let i=Math.max(e.length,t.length),s=new Array(i);if(r){if(n<2||a<2)return;let o=Fh.calcMatMulShape([e[n-2],e[n-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[s[i-2],s[i-1]]=o}for(let o=r?3:1;o<=i;o++){let u=n-o<0?1:e[n-o],d=a-o<0?1:t[a-o];if(u!==d&&u>1&&d>1)return;let f=Math.max(u,d);if(u&&d)s[i-o]=Math.max(u,d);else{if(f>1)return;s[i-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[n-a])return!1;return!0}},D=class zs{static size(t){return zs.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let a=new Array(n),i=n-1;for(;i>=0;){if(t[i]%r===0){a[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");a[i]=1,r/=t[i],i--}for(i--;i>=0;i--)a[i]=t[i];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return zs.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return zs.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let a=1;for(let i=r;i<n;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[i])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let a=r-3;a>=0;--a)n[a]=n[a+1]*t[a+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((a,i)=>a+r[i]+r[i+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,a)=>n===r[a])}},ao=class Ki{static adjustPoolAttributes(t,r,n,a,i,s){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=n[o]||s[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,a,i,s,o){if(o){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Ki.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],n[u],a[u],i,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,n,a,i,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Ki.computeShapeHelper(t,r,u,n,a,i,s,o),u}static computeConvOutputShape(t,r,n,a,i,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Ki.computeShapeHelper(!1,t,u,n,a,i,s,o),u}static computeShapeHelper(t,r,n,a,i,s,o,u){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push(Ki.adjustPadAndReturnShape(r[d+2],a[d],i[d],s[d],o,d,d+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,a,i,s,o,u){let d=n*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return i[s]=0,i[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+a-t;return i[s]=Math.floor(u==="SAME_LOWER"?(f+1)/2:f/2),i[o]=f-i[s],Math.floor((t+f-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[s]+i[o]-d)/r+1)}},Fv=class{static getShapeOfGemmResult(e,t,r,n,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,s,o;t?(i=e[1],s=e[0]):(i=e[0],s=e[1]);let u=-1;if(n?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(i<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(a&&!hi.isValidBroadcast(a,[i,o]))throw new Error("gemm: invalid bias shape for broadcast");return[i,o,s]}},Vv=-34028234663852886e22,qv=34028234663852886e22}),Dc,Hv=V(()=>{ue(),Dc=(e,t)=>new(Eo(t))(e)}),Dl,gd,Pl,Vh,Bl,qh,Ll,Ul,jl,Hh,Gv,kS=V(()=>{ue(),Tr(),Dl=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),gd=(e,t)=>{if(t==="int32")return e;let r=Dl.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let a=e.byteLength/n,i=new(Eo(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let o=0;o<a;o++){let u=i[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&i.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(i,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Pl=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(n,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(n.some(i=>i<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(n,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(n.some(i=>i<-128||i>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(n,Number);return new Uint8Array(a.buffer)}case"uint8":{if(n.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(i=>i<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(n,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Vh=1,Bl=()=>Vh++,qh=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ll=(e,t)=>{let r=Dl.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,a)=>n*a)*r/8):0},Ul=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:a,shape:i,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=a,this.tensorShape=i,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ll(this.dataType,this.tensorShape)}destroy(){me("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Pl(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,a)=>n===r[a])}setIsDataConverted(e){this.isDataConverted=e}},jl=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let a=this.tensorManager.getMLContext(e),i;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(i=qh.get(t),!i||!a.opSupportLimits().input.dataTypes.includes(i))throw new Error(`WebNN backend does not support data type: ${t}`);me("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${i}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Ll(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,i),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=gd(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else me("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?Pl(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Hh=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Bl();return this.tensorTrackersById.set(e,new jl(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,a){me("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${a}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,n,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){me("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let a=this.getMLContext(e),i=Bl(),s=new Ul({sessionId:e,context:a,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(i,new jl(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,n,a,i,s){let o=this.getMLContext(e);for(let[d,f]of this.freeTensors.entries())if(f.canReuseTensor(o,t,r)){me("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}me("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:n,writable:a,readable:i});return new Ul({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Gv=(...e)=>new Hh(...e)}),Mi,Gh,Kv,CS=V(()=>{ue(),Dn(),Hv(),kS(),Tr(),Mi=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Gh=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((a,i)=>a===n[i]&&e[a]===t[a])},Kv=class{constructor(e){this.tensorManager=Gv(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Mc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){me("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){me("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)me("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Gh(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(a=>a.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){me("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,a){let i=Mi.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,n,a)}async createTemporaryTensor(e,t,r){me("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Mi.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,n,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");me("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Dc(r,t)}}registerMLTensor(e,t,r,n){let a=Mi.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,a,n);return me("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${n}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,n,a,i,s=!1){if(!i)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=i.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,f;switch(a.dataType){case"float32":f=new Float32Array(d);break;case"float16":f=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":f=new Int32Array(d);break;case"uint32":f=new Uint32Array(d);break;case"int64":if(s){let p=gd(new Uint8Array(d),"int64");f=new Int32Array(p.buffer),a.dataType="int32"}else f=new BigInt64Array(d);break;case"uint64":f=new BigUint64Array(d);break;case"int8":f=new Int8Array(d);break;case"int4":case"uint4":case"uint8":f=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return me("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(a,f)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=this.mlContextBySessionId.get(e),a=Mi.get(yn(t));return typeof a>"u"?!1:r?!!(n!=null&&n.opSupportLimits().input.dataTypes.includes(a)):!!(n!=null&&n.opSupportLimits().output.dataTypes.includes(a))}flush(){}}}),Pc=V(()=>{}),Wl,ls,us,Kh,Qh,Fl,yd,Yh,Qv,ES=V(()=>{Tr(),Pc(),Wl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),ls=[],us=e=>Math.ceil(Number(e)/16)*16,Kh=e=>{for(let t=0;t<ls.length;t++){let r=ls[t];if(e<=r)return r}return Math.ceil(e/16)*16},Qh=1,Fl=()=>Qh++,yd=async(e,t,r,n)=>{let a=us(r),i=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,i,0,a),e.flush(),await i.mapAsync(GPUMapMode.READ);let o=i.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{i.destroy()}},Yh=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Wl)ls.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,a=t.byteLength,i=us(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,a)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,i),this.backend.device.queue.submit([d.finish()]),o.destroy(),me("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=us(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Fl();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),me("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Kh(e),n,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||i){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let s={id:Fl(),type:0,buffer:n};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),me("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return me("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await yd(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Wl.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(me("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Qv=(...e)=>new Yh(...e)}),Zh,$e,Be=V(()=>{Zh=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},$e=e=>new Zh(e)}),mi,ds,Qe,at,ie,Ne,_d,ei,en,ne,Di,L,te,Yv,Bc,Xh,Zv,fe=V(()=>{ue(),de(),mi=64,ds=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Qe=(e,t=1)=>{let r=ds(e,t);return typeof r=="string"?r:r[0]},at=(e,t=1)=>{let r=ds(e,t);return typeof r=="string"?r:r[1]},ie=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:D.computeStrides(r)})}),t},Ne=e=>e%4===0?4:e%2===0?2:1,_d=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,ei=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,en=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ne=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Di=(e,t,r,n,a)=>{let i=typeof r=="number",s=i?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=ds(t,a),f=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],h={indices:u,value:f,storage:p,tensor:t},_=O=>typeof O=="string"?O:`${O}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=i?"uniforms.":"",k=`${$}${e}_shape`,y=`${$}${e}_strides`,g="";for(let O=0;O<s-1;O++)g+=`
    let dim${O} = current / ${ne(y,O,s)};
    let rest${O} = current % ${ne(y,O,s)};
    indices[${O}] = dim${O};
    current = rest${O};
    `;g+=`indices[${s-1}] = current;`;let x=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${g}
    return indices;
  }`,S=O=>(w.offsetToIndices=!0,s<2?O:`o2i_${e}(${O})`),C=[];if(s>=2)for(let O=s-1;O>=0;O--)C.push(`${ne(y,O,s)} * (indices[${O}])`);let T=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${C.join("+")};
  }`,I=O=>(w.indicesToOffset=!0,s<2?O:`i2o_${e}(${O})`),z=(...O)=>s===0?"0u":`${h.indices}(${O.map(_).join(",")})`,N=(O,W)=>s<2?`${O}`:`${ne(O,W,s)}`,U=(O,W,K)=>s<2?`${O}=${K};`:`${ne(O,W,s)}=${K};`,Q={},Y=(O,W)=>{w.broadcastedIndicesToOffset=!0;let K=`${W.name}broadcastedIndicesTo${e}Offset`;if(K in Q)return`${K}(${O})`;let J=[];for(let Ee=s-1;Ee>=0;Ee--){let Ve=W.indicesGet("outputIndices",Ee+W.rank-s);J.push(`${N(y,Ee)} * (${Ve} % ${N(k,Ee)})`)}return Q[K]=`fn ${K}(outputIndices: ${W.type.indices}) -> u32 {
             return ${J.length>0?J.join("+"):"0u"};
           }`,`${K}(${O})`},G=(O,W)=>(()=>{if(h.storage===h.value)return`${e}[${O}]=${W};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${O}]=vec2<u32>(u32(${W}), select(0u, 0xFFFFFFFFu, ${W} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${O}]=vec2<u32>(u32(${W}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${O}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${W}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),ce=O=>(()=>{if(h.storage===h.value)return`${e}[${O}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${O}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${O}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${O}] & 0xFFu), bool(${e}[${O}] & 0xFF00u), bool(${e}[${O}] & 0xFF0000u), bool(${e}[${O}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),ae=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${f} {
    return ${ce(`i2o_${e}(indices)`)};
  }`,Z=s<2?"":(()=>{let O=o.map(K=>`d${K}: u32`).join(", "),W=o.map(K=>`d${K}`).join(", ");return`
  fn get_${e}(${O}) -> ${f} {
    return get_${e}ByIndices(${z(W)});
  }`})(),oe=(...O)=>{if(O.length!==s)throw new Error(`indices length must be ${s}`);let W=O.map(_).join(",");return s===0?ce("0u"):s===1?ce(W[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${W})`)},P=O=>s<2?ce(O):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${O})`),F=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${f}) {
    ${G(`i2o_${e}(indices)`,"value")}
  }`,X=s<2?"":(()=>{let O=o.map(K=>`d${K}: u32`).join(", "),W=o.map(K=>`d${K}`).join(", ");return`
  fn set_${e}(${O}, value: ${f}) {
    set_${e}ByIndices(${z(W)}, value);
  }`})();return{impl:()=>{let O=[],W=!1;return w.offsetToIndices&&(O.push(x),W=!0),w.indicesToOffset&&(O.push(T),W=!0),w.broadcastedIndicesToOffset&&(Object.values(Q).forEach(K=>O.push(K)),W=!0),w.set&&(O.push(X),W=!0),w.setByIndices&&(O.push(F),W=!0),w.get&&(O.push(Z),W=!0),w.getByIndices&&(O.push(ae),W=!0),!i&&W&&O.unshift(`const ${k} = ${h.indices}(${r.join(",")});`,`const ${y} = ${h.indices}(${D.computeStrides(r).join(",")});`),O.join(`
`)},type:h,offsetToIndices:S,indicesToOffset:I,broadcastedIndicesToOffset:Y,indices:z,indicesGet:N,indicesSet:U,set:(...O)=>{if(O.length!==s+1)throw new Error(`indices length must be ${s}`);let W=O[s];if(typeof W!="string")throw new Error("value must be string");let K=O.slice(0,s).map(_).join(",");return s===0?G("0u",W):s===1?G(K[0],W):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${K}, ${W})`)},setByOffset:G,setByIndices:(O,W)=>s<2?G(O,W):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${O}, ${W});`),get:oe,getByOffset:ce,getByIndices:P,usage:n,name:e,strides:y,shape:k,rank:s}},L=(e,t,r,n=1)=>Di(e,t,r,"input",n),te=(e,t,r,n=1)=>Di(e,t,r,"output",n),Yv=(e,t,r)=>Di(e,t,r,"atomicOutput",1),Bc=(e,t,r,n=1)=>Di(e,t,r,"internal",n),Xh=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=mi){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${i}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let a=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Zv=(e,t)=>new Xh(e,t)}),Jh,Vl,em,tm,rm,nm,Et,Xv,Jv,sn=V(()=>{ue(),de(),Be(),fe(),Jh=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Vl=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),em=(e,t)=>D.sortBasedOnPerm(e,Vl(e.length,t)),tm=(e,t,r,n)=>{let a=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)a+=`a[${e[i]}]=i[${i}];`;return a+="return a;}"},rm=(e,t)=>{let r=[],n=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&n.push(t[a]);return{newShape:r,newPerm:n}},nm=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},Et=(e,t)=>{let r=e.dataType,n=e.dims.length,a=Vl(n,t),i=em(e.dims,a),s=e.dims,o=i,u=n<2||nm(a,e.dims),d;if(u)return d=w=>{let $=L("input",r,s,4),k=te("output",r,o,4);return`
  ${w.registerUniform("output_size","u32").declareVariables($,k)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=D.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:d};let{newShape:f,newPerm:p}=rm(e.dims,a),h=D.areEqual(p,[2,3,1]),_=D.areEqual(p,[3,1,2]);if(f.length===2||h||_){s=h?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,o=[s[1],s[0]];let w=16;return d=$=>{let k=L("a",r,s.length),y=te("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(k,y)}
  var<workgroup> tile : array<array<${y.type.value}, ${w+1}>, ${w}>;
  ${$.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${y.setByIndices(`${y.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=D.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/w),y:Math.ceil(o[0]/w)},programUniforms:[{type:12,data:$},...ie(s,o)]}},getShaderSource:d}}return d=w=>{let $=L("a",r,s.length),k=te("output",r,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables($,k)}

  ${tm(a,n,$,k)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=D.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ie(s,o)]}},getShaderSource:d}},Xv=(e,t)=>{Jh(e.inputs,t.perm),e.compute(Et(e.inputs[0],t.perm))},Jv=e=>$e({perm:e.perm})}),im,am,sm,om,lm,um,dm,cm,fm,pm,Wt,ew,tw,rw,nw,iw,aw,sw,ow,lw,uw,TS=V(()=>{ue(),de(),fe(),Lc(),sn(),im={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},am={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},sm={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},om={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},lm=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},um=(e,t)=>{let r=[],n=e.length;for(let i=0;i<n;i++)t.indexOf(i)===-1&&r.push(e[i]);let a=t.map(i=>e[i]);return[r,a]},dm=(e,t)=>{let r=e.length+t.length,n=[],a=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?n.push(e[a++]):n.push(1);return n},cm=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},fm=(e,t)=>{let r=[];if(!cm(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},pm=(e,t,r,n,a,i,s)=>{let o=r[0].dims,u=D.size(i),d=D.size(s),f=L("_A",r[0].dataType,o),p=te("output",a,i),h=64;u===1&&(h=256);let _=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,w=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(f,p)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${sm[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${im[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${am[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${n==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${om[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Wt=(e,t,r,n)=>{let a=e.inputs.length===1?r:vd(e.inputs,r),i=a.axes;i.length===0&&!a.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,w)=>w));let s=D.normalizeAxes(i,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=fm(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Et(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=lm(o.length,u.dims.length));let[f,p]=um(u.dims,o),h=f;a.keepDims&&(h=dm(f,s)),e.compute(pm(t,a.cacheKey,[u],n,e.inputs[0].dataType,h,p),{inputs:[u]})},ew=(e,t)=>{Wt(e,"ReduceMeanShared",t,"mean")},tw=(e,t)=>{Wt(e,"ReduceL1Shared",t,"l1")},rw=(e,t)=>{Wt(e,"ReduceL2Shared",t,"l2")},nw=(e,t)=>{Wt(e,"ReduceLogSumExpShared",t,"logSumExp")},iw=(e,t)=>{Wt(e,"ReduceMaxShared",t,"max")},aw=(e,t)=>{Wt(e,"ReduceMinShared",t,"min")},sw=(e,t)=>{Wt(e,"ReduceProdShared",t,"prod")},ow=(e,t)=>{Wt(e,"ReduceSumShared",t,"sum")},lw=(e,t)=>{Wt(e,"ReduceSumSquareShared",t,"sumSquare")},uw=(e,t)=>{Wt(e,"ReduceLogSumShared",t,"logSum")}}),Ft,hm,so,vd,Vt,mm,gm,ym,_m,vm,wm,$m,xm,bm,Sm,qt,dw,cw,fw,pw,hw,mw,gw,yw,_w,vw,Lc=V(()=>{ue(),de(),Be(),fe(),TS(),Ft=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},hm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],so=(e,t,r,n,a,i,s=!1,o=!1)=>{let u=[],d=r[0].dims,f=d.length,p=D.normalizeAxes(a,f),h=!o&&p.length===0;d.forEach(($,k)=>{h||p.indexOf(k)>=0?s&&u.push(1):u.push($)});let _=u.length,w=D.size(u);return{name:e,shaderCache:t,getShaderSource:$=>{let k=[],y=L("_A",r[0].dataType,f),g=te("output",i,_),x=n(y,g,p),S=x[2];for(let C=0,T=0;C<f;C++)h||p.indexOf(C)>=0?(s&&T++,S=`for(var j${C}: u32 = 0; j${C} < ${d[C]}; j${C}++) {
                  ${x[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${y.indicesSet("input_indices",C,`j${C}`)}
                  ${S}
                }`):(k.push(`${y.indicesSet("input_indices",C,g.indicesGet("output_indices",T))};`),T++);return`

        ${$.registerUniform("output_size","u32").declareVariables(y,g)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${y.type.indices};
          let output_indices = ${g.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${x[0]}       // init ops for reduce max/min
          ${x[1]}
          ${S}
          ${x[3]}
          ${x.length===4?g.setByOffset("global_idx","value"):x.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:i}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ie(d,u)]})}},vd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),$e({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Vt=(e,t,r,n)=>{let a=e.inputs,i=a.length===1?r:vd(a,r);e.compute(so(t,{hint:i.cacheKey,inputDependencies:["rank"]},[a[0]],i.noopWithEmptyAxes&&i.axes.length===0?hm:n,i.axes,a[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},mm=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},gm=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ym=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},_m=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},vm=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceMax",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(r.indicesSet("input_indices",s,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},wm=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceMean",t,(r,n,a)=>{let i=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(i*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${i});`]})},$m=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceMin",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(`input_indices[${s}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},xm=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},bm=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Sm=(e,t)=>{Ft(e.inputs),Vt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},qt=(e,t,r)=>{if(t.length===0)return r;let n=1,a=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?n*=e[i]:a*=e[i];return a<32&&n>1024},dw=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wm(e,t):ew(e,t)},cw=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gm(e,t):tw(e,t)},fw=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ym(e,t):rw(e,t)},pw=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_m(e,t):nw(e,t)},hw=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vm(e,t):iw(e,t)},mw=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$m(e,t):aw(e,t)},gw=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xm(e,t):sw(e,t)},yw=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bm(e,t):ow(e,t)},_w=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sm(e,t):lw(e,t)},vw=(e,t)=>{qt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mm(e,t):uw(e,t)}}),ql,ww,$w,wd,IS=V(()=>{ue(),Be(),Lc(),ql=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},ww=(e,t)=>{ql(e.inputs);let r=(n,a,i)=>{let s=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(so("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},$w=(e,t)=>{ql(e.inputs);let r=(n,a,i)=>{let s=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(so("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},wd=e=>$e(e)}),km,cs,Cm,Em,Tm,ka,Im,xw,Uc=V(()=>{ue(),de(),Pc(),fe(),km=(e,t)=>{let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],f=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=a.dims[0]/3,h=p,_=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let x of t.qkvHiddenSizes)if(x%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let w=d;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==p+h+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(h!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let k=w+$,y=-1,g=0;if(i)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:k,maxSequenceLength:y,inputHiddenSize:f,hiddenSize:p,vHiddenSize:_,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},cs=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Cm=(e,t,r,n,a,i,s,o)=>{let u=Ne(s?1:i),d=64,f=i/u;f<d&&(d=32);let p=Math.ceil(i/u/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:a},{type:12,data:f},{type:12,data:p}],_=Qe(e.dataType,u),w=at(1,u),$=["type"];s&&$.push("type"),o&&$.push("type");let k=y=>{let g=te("x",e.dataType,e.dims,u),x=[g],S=s?L("seq_lens",s.dataType,s.dims):void 0;S&&x.push(S);let C=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;C&&x.push(C);let T=at(e.dataType),I=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${y.registerUniforms(I).declareVariables(...x)}
  ${y.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${cs(S,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${w}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${w}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${w}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${w}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${g.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${w}(x[offset + i]);
        x[offset + i] = ${g.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${g.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${u}`,inputDependencies:$},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:h})}},Em=(e,t,r,n,a,i,s,o,u)=>{let d=s+i.kvSequenceLength,f=[i.batchSize,i.numHeads,i.sequenceLength,d],p=e>1&&n,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=p?[i.batchSize,h,d,i.headSize]:void 0,w=i.nReps?i.nReps:1,$=i.scale===0?1/Math.sqrt(i.headSize):i.scale,k=Ne(i.headSize),y=i.headSize/k,g=12,x={x:Math.ceil(d/g),y:Math.ceil(i.sequenceLength/g),z:i.batchSize*i.numHeads},S=[{type:12,data:i.sequenceLength},{type:12,data:y},{type:12,data:d},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:w}],C=p&&n&&D.size(n.dims)>0,T=["type","type"];C&&T.push("type"),a&&T.push("type"),o&&T.push("type"),u&&T.push("type");let I=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&I.push({dims:_,dataType:t.dataType,gpuDataType:0});let z=N=>{let U=L("q",t.dataType,t.dims,k),Q=L("key",r.dataType,r.dims,k),Y=[U,Q];if(C){let F=L("past_key",n.dataType,n.dims,k);Y.push(F)}a&&Y.push(L("attention_bias",a.dataType,a.dims));let G=o?L("seq_lens",o.dataType,o.dims):void 0;G&&Y.push(G);let ce=u?L("total_sequence_length_input",u.dataType,u.dims):void 0;ce&&Y.push(ce);let ae=te("output",t.dataType,f),Z=[ae];p&&Z.push(te("present_key",t.dataType,_,k));let oe=at(1,k),P=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${g*g}>;
  var<workgroup> tileK: array<${U.type.storage}, ${g*g}>;
  ${N.registerUniforms(P).declareVariables(...Y,...Z)}
  ${N.mainStart([g,g,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${cs(G,ce,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${oe}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${oe}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${ae.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${a!==void 0};${n!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:I,dispatchGroup:x,programUniforms:S}),getShaderSource:z}},Tm=(e,t,r,n,a,i,s=void 0,o=void 0)=>{let u=i+a.kvSequenceLength,d=a.nReps?a.nReps:1,f=a.vHiddenSize*d,p=e>1&&n,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=p?[a.batchSize,h,u,a.headSize]:void 0,w=[a.batchSize,a.sequenceLength,f],$=12,k={x:Math.ceil(a.vHeadSize/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:f},{type:12,data:i},{type:12,data:a.kvSequenceLength},{type:12,data:d}],g=p&&n&&D.size(n.dims)>0,x=["type","type"];g&&x.push("type"),s&&x.push("type"),o&&x.push("type");let S=[{dims:w,dataType:t.dataType,gpuDataType:0}];p&&S.push({dims:_,dataType:t.dataType,gpuDataType:0});let C=T=>{let I=L("probs",t.dataType,t.dims),z=L("v",r.dataType,r.dims),N=[I,z];g&&N.push(L("past_value",n.dataType,n.dims));let U=s?L("seq_lens",s.dataType,s.dims):void 0;s&&N.push(U);let Q=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;o&&N.push(Q);let Y=[te("output",t.dataType,w)];p&&Y.push(te("present_value",t.dataType,_));let G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${I.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${I.type.value}, ${$*$}>;
  ${T.registerUniforms(G).declareVariables(...N,...Y)}
  ${T.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${cs(U,Q,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${g&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${I.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${g&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:k,programUniforms:y}),getShaderSource:C}},ka=(e,t,r,n,a,i,s,o,u,d,f=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),_=h>1?d.pastSequenceLength:0,w=_+d.kvSequenceLength,$=u&&D.size(u.dims)>0?u:void 0,k=[t,r];h>1&&s&&D.size(s.dims)>0&&k.push(s),$&&k.push($),f&&k.push(f),p&&k.push(p);let y=e.compute(Em(h,t,r,s,$,d,_,f,p),{inputs:k,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Cm(y,d.batchSize,d.numHeads,_,d.sequenceLength,w,f,p),{inputs:f&&p?[y,f,p]:[y],outputs:[]});let g=[y,n];h>1&&o&&D.size(o.dims)>0&&g.push(o),f&&g.push(f),p&&g.push(p),e.compute(Tm(h,y,n,o,d,_,f,p),{inputs:g,outputs:h>1?[0,2]:[0]})},Im=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,a=t.inputHiddenSize,i=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:a},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=p=>{let h=te("output_q",u[0].dataType,r),_=te("output_k",u[0].dataType,r),w=te("output_v",u[0].dataType,r),$=L("input",u[0].dataType,u[0].dims),k=L("weight",u[1].dataType,u[1].dims),y=L("bias",u[2].dataType,u[2].dims),g=$.type.storage,x=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${g}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${g}, ${s*s}>;
  var<workgroup> tileWeightK: array<${g}, ${s*s}>;
  var<workgroup> tileWeightV: array<${g}, ${s*s}>;
  ${p.registerUniforms(x).declareVariables($,k,y,h,_,w)}
  ${p.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${g}(0);
    var valueK = ${g}(0);
    var valueV = ${g}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:f},{inputs:u,outputs:[-1,-1,-1]})},xw=(e,t)=>{let r=km(e.inputs,t),[n,a,i]=Im(e,r);return ka(e,n,a,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),zm,Am,Om,bw,zS=V(()=>{Bt(),ue(),de(),Be(),fe(),zm=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,a,i)=>{let s=a.length;if(s!==n.length)throw new Error(`${i}: num dimensions != ${s}`);a.forEach((o,u)=>{if(o!==n[u])throw new Error(`${i}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Am=(e,t)=>{let{epsilon:r,spatial:n,format:a}=t,i=e[0].dims,s=n?Ne(i[i.length-1]):1,o=a==="NHWC"&&i.length>1?s:1,u=D.size(i)/s,d=n,f=d?i.length:i,p=L("x",e[0].dataType,e[0].dims,s),h=L("scale",e[1].dataType,e[1].dims,o),_=L("bias",e[2].dataType,e[2].dims,o),w=L("inputMean",e[3].dataType,e[3].dims,o),$=L("inputVar",e[4].dataType,e[4].dims,o),k=te("y",e[0].dataType,f,s),y=()=>{let x="";if(n)x=`let cOffset = ${i.length===1?"0u":a==="NHWC"?`outputIndices[${i.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")x=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{x=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let S=1;S<h.rank;S++)x+=`cIndices[${S}] = outputIndices[${S}];`;x+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return x},g=x=>`
  const epsilon = ${r};
  ${x.registerUniform("outputSize","u32").declareVariables(p,h,_,w,$,k)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${s}`)};
    ${y()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ie(i)]:[{type:12,data:u}]})}},Om=e=>$e(e),bw=(e,t)=>{let{inputs:r,outputCount:n}=e,a=Om({...t,outputCount:n});if(be.webgpu.validateInputContent&&zm(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Am(r,a))}}),Rm,Nm,Sw,AS=V(()=>{de(),fe(),Rm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Nm=e=>{let t=e[0].dims,r=e[0].dims[2],n=D.size(t)/4,a=e[0].dataType,i=L("input",a,t,4),s=L("bias",a,[r],4),o=L("residual",a,t,4),u=te("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(i,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${i.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Sw=e=>{Rm(e.inputs),e.compute(Nm(e.inputs))}}),Mm,ye,kw,Cw,Ew,Tw,Iw,zw,Aw,Ow,Rw,Dm,Nw,Mw,Dw,Pw,Qi,Bw,As,Lw,Uw,jw,Ww,Fw,Vw,qw,Hw,Gw,Kw,Qw,Yw,Zw,Xw,Jw,e1,Hl,t1,$d,xd,r1,n1,i1,Pm,Bm,a1,jc=V(()=>{ue(),de(),Be(),fe(),Mm=(e,t,r,n,a,i,s)=>{let o=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let d=L("inputData",r,[o],4),f=te("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return s&&p.push(...s),`
      ${e.registerUniforms(p).declareVariables(d,f)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",u)}
  }`},ye=(e,t,r,n,a,i=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>Mm(d,D.size(e.dims),e.dataType,i,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(D.size(d[0].dims)/64/4)},programUniforms:u})}},kw=e=>{e.compute(ye(e.inputs[0],"Abs","abs"))},Cw=e=>{e.compute(ye(e.inputs[0],"Acos","acos"))},Ew=e=>{e.compute(ye(e.inputs[0],"Acosh","acosh"))},Tw=e=>{e.compute(ye(e.inputs[0],"Asin","asin"))},Iw=e=>{e.compute(ye(e.inputs[0],"Asinh","asinh"))},zw=e=>{e.compute(ye(e.inputs[0],"Atan","atan"))},Aw=e=>{e.compute(ye(e.inputs[0],"Atanh","atanh"))},Ow=e=>$e(e),Rw=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ye(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Dm=e=>{let t,r,n=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return $e({min:t,max:r})},Nw=(e,t)=>{let r=t||Dm(e.inputs),n=at(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},Mw=e=>{e.compute(ye(e.inputs[0],"Ceil","ceil"))},Dw=e=>{e.compute(ye(e.inputs[0],"Cos","cos"))},Pw=e=>{e.compute(ye(e.inputs[0],"Cosh","cosh"))},Qi=e=>$e(e),Bw=(e,t)=>{let r=at(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},As=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Lw=e=>{let t=at(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,As(t)))},Uw=e=>{e.compute(ye(e.inputs[0],"Exp","exp"))},jw=e=>{e.compute(ye(e.inputs[0],"Floor","floor"))},Ww=e=>{let t=at(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,As(t)))},Fw=(e,t)=>{let r=at(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Vw=e=>{e.compute(ye(e.inputs[0],"Not",t=>`!${t}`))},qw=e=>{e.compute(ye(e.inputs[0],"Neg",t=>`-${t}`))},Hw=e=>{e.compute(ye(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Gw=e=>{let t=at(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Kw=e=>{e.compute(ye(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Qw=e=>$e(e),Yw=(e,t)=>{let r=at(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Zw=e=>{e.compute(ye(e.inputs[0],"Sin","sin"))},Xw=e=>{e.compute(ye(e.inputs[0],"Sinh","sinh"))},Jw=e=>{e.compute(ye(e.inputs[0],"Sqrt","sqrt"))},e1=e=>{e.compute(ye(e.inputs[0],"Tan","tan"))},Hl=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,t1=e=>{e.compute(ye(e.inputs[0],"Tanh",Hl))},$d=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Hl("v")};
}
`,xd=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,r1=e=>{let t=at(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"FastGelu",xd,$d(t),void 0,e.inputs[0].dataType))},n1=(e,t)=>{let r=at(e.inputs[0].dataType);return e.compute(ye(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},i1=e=>{e.compute(ye(e.inputs[0],"Log","log"))},Pm=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Bm=e=>`quick_gelu_impl(${e})`,a1=(e,t)=>{let r=at(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"QuickGelu",Bm,Pm(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Lm,Um,s1,OS=V(()=>{de(),fe(),jc(),Lm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Um=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=L("input",e[0].dataType,e[0].dims,4),n=L("bias",e[0].dataType,[e[0].dims[2]],4),a=te("output",e[0].dataType,t,4),i=D.size(t)/4,s=Qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,a)}

  ${As(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},s1=e=>{Lm(e.inputs),e.compute(Um(e.inputs))}}),jm,Wm,Ht,o1,l1,u1,d1,c1,f1,p1,h1,m1,g1,RS=V(()=>{ue(),de(),fe(),jm=(e,t,r,n,a,i,s,o,u,d,f,p)=>{let h,_;typeof o=="string"?h=_=(g,x)=>`${o}((${g}),(${x}))`:typeof o=="function"?h=_=o:(h=o.scalar,_=o.vector);let w=te("outputData",f,n.length,4),$=L("aData",u,t.length,4),k=L("bData",d,r.length,4),y;if(a)if(i){let g=D.size(t)===1,x=D.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;g||x?y=w.setByOffset("global_idx",_(g?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),x?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):y=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",_(s||S?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||C?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else y=w.setByOffset("global_idx",_($.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let g=(x,S,C="")=>{let T=`aData[indexA${S}][componentA${S}]`,I=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${w.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${$.broadcastedIndicesToOffset(`outputIndices${S}`,w)};
            let offsetB${S} = ${k.broadcastedIndicesToOffset(`outputIndices${S}`,w)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${x}[${S}] = ${C}(${h(T,I)});
          `};f===9?y=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:y=`
            ${g("outputData[global_idx]",0)}
            ${g("outputData[global_idx]",1)}
            ${g("outputData[global_idx]",2)}
            ${g("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,k,w)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},Wm=(e,t,r,n,a,i,s=r.dataType)=>{let o=r.dims.map($=>Number($)??1),u=n.dims.map($=>Number($)??1),d=!D.areEqual(o,u),f=o,p=D.size(o),h=!1,_=!1,w=[d];if(d){let $=hi.calcShape(o,u,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");f=$.slice(),p=D.size(f);let k=D.size(o)===1,y=D.size(u)===1,g=o.length>0&&o[o.length-1]%4===0,x=u.length>0&&u[u.length-1]%4===0;w.push(k),w.push(y),w.push(g),w.push(x);let S=1;for(let C=1;C<f.length;C++){let T=o[o.length-C],I=u[u.length-C];if(T===I)S*=T;else break}S%4===0?(_=!0,h=!0):(k||y||g||x)&&(h=!0)}else h=!0;return w.push(h),{name:e,shaderCache:{hint:t+w.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>jm($,o,u,f,h,d,_,a,r.dataType,n.dataType,s,i),getRunData:()=>({outputs:[{dims:f,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(f)/4)},...ie(o,u,f)]})}},Ht=(e,t,r,n,a,i)=>{e.compute(Wm(t,a??"",e.inputs[0],e.inputs[1],r,n,i))},o1=e=>{Ht(e,"Add",(t,r)=>`${t}+${r}`)},l1=e=>{Ht(e,"Div",(t,r)=>`${t}/${r}`)},u1=e=>{Ht(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},d1=e=>{Ht(e,"Mul",(t,r)=>`${t}*${r}`)},c1=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ht(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},f1=e=>{Ht(e,"Sub",(t,r)=>`${t}-${r}`)},p1=e=>{Ht(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},h1=e=>{Ht(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},m1=e=>{Ht(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},g1=e=>{Ht(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Fm,Vm,qm,Hm,y1,_1,NS=V(()=>{ue(),de(),Be(),fe(),Fm=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],a=n.dataType,i=n.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==i)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==n.dims[d])throw new Error("non concat dimensions must match")})}})},Vm=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,qm=(e,t)=>{let r=e.length,n=[];for(let a=0;a<r;++a){let i=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?n.push(i):a===0?n.push(`if (inputIndex == ${a}u) { ${i} }`):a===r-1?n.push(`else { ${i} }`):n.push(`else if (inputIndex == ${a}) { ${i} }`)}return n.join(`
`)},Hm=(e,t,r,n)=>{let a=D.size(r),i=new Array(e.length),s=new Array(e.length),o=0,u=[],d=[],f=[{type:12,data:a}];for(let $=0;$<e.length;++$)o+=e[$].dims[t],i[$]=o,d.push(e[$].dims.length),s[$]=L(`input${$}`,n,d[$]),u.push("rank"),f.push({type:12,data:i[$]});for(let $=0;$<e.length;++$)f.push(...ie(e[$].dims));f.push(...ie(r));let p=te("output",n,r.length),h=p.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),w=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)$.registerUniform(`sizeInConcatAxis${k}`,"u32");return $.declareVariables(...s,p)})()}

  ${Vm(i.length,_)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${qm(s,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}),getShaderSource:w}},y1=(e,t)=>{let r=e.inputs,n=r[0].dims,a=D.normalizeAxis(t.axis,n.length);Fm(r,a);let i=n.slice();i[a]=r.reduce((o,u)=>o+(u.dims.length>a?u.dims[a]:0),0);let s=r.filter(o=>D.size(o.dims)>0);e.compute(Hm(s,a,i,r[0].dataType),{inputs:s})},_1=e=>$e({axis:e.axis})}),An,On,Rn,Wc,Pn=V(()=>{ue(),de(),An=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},On=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Rn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Wc=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[Vv,qv];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ze,v1,Fc=V(()=>{Ze=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},v1=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),w1,MS=V(()=>{w1=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),sa,Vc,qc=V(()=>{ue(),de(),fe(),Pn(),sa=(e,t,r,n,a)=>{let i=n-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${ne(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ne(a,o+i,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Vc=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],f=s[s.length-1],p=Ne(d),h=Ne(f),_=Ne(u),w=D.size(r)/p/_,$=e.length>2,k=n?n.slice(0,-2):r.slice(0,-2),y=[D.size(k),u,d],g=[{type:12,data:w},{type:12,data:u},{type:12,data:d},{type:12,data:f}];On(t,g),g.push(...ie(k,s,o)),$&&g.push(...ie(e[2].dims)),g.push(...ie(y));let x=S=>{let C=Bc("batch_dims",e[0].dataType,k.length),T=L("a",e[0].dataType,s.length,h),I=L("b",e[1].dataType,o.length,p),z=te("output",e[0].dataType,y.length,p),N=Qe(z.type.tensor),U=An(t,z.type.value,N),Q=[T,I],Y="";if($){let ae=a?p:1;Q.push(L("bias",e[2].dataType,e[2].dims.length,ae)),Y=`${a?`value += bias[col / ${ae}];`:`value += ${z.type.value}(bias[row + i]);`}`}let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Rn(t,G);let ce=()=>{let ae=`var a_data: ${T.type.value};`;for(let Z=0;Z<h;Z++)ae+=`
              let b_data${Z} = b[(b_offset + (k + ${Z}) * uniforms.N + col) / ${p}];`;for(let Z=0;Z<_;Z++){ae+=`a_data = a[(a_offset + (row + ${Z}) * uniforms.K + k) / ${h}];`;for(let oe=0;oe<h;oe++)ae+=`
            values[${Z}] = fma(${I.type.value}(a_data${h===1?"":`[${oe}]`}), b_data${oe}, values[${Z}]);
`}return ae};return`
  ${S.registerUniforms(G).registerInternalVariables(C).declareVariables(...Q,z)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${sa("a_indices",T,T.rank-2,C.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${sa("b_indices",I,I.rank-2,C.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${z.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${ce()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${Y}
      ${U}
      let cur_indices = ${z.type.indices}(batch, row + i, col);
      let offset = ${z.indicesToOffset("cur_indices")};
      ${z.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${_};${a}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:g}),getShaderSource:x}}}),Gm,Km,bd,Gl,Qm,Sd,Ym,oo,Hc=V(()=>{ue(),de(),fe(),Pn(),qc(),Fc(),Gm=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Km=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,bd=(e,t,r="f32",n,a=!1,i=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],f=a?u:i,p=a?i:u,h=f/t[0],_=i/t[1];if(!((a&&h===4&&e[1]===4||!a&&(h===3||h===4))&&f%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${f/h}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Gm(a,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Km(a,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Gl=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Qm=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Sd=(e,t,r="f32",n,a=!1,i=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],p=a?d:i,h=a?i:d;if(!(h%t[1]===0&&p%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=h/t[1],w=p/t[0],$=i/t[1],k=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${Gl(a,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${w};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${w}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Gl(a,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Qm(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},Ym=(e,t,r,n,a=!1)=>{let[i,s,o,u]=n,d=Qe(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Ze(e,d)} {
      var value = ${Ze(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${sa("aIndices",s,s.rank-2,i.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Ze(e,d)} {
      var value = ${Ze(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${sa("bIndices",o,o.rank-2,i.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ze(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ze(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},oo=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),f=n?n.slice(0,-2):r.slice(0,-2),p=D.size(f),h=s[s.length-2],_=s[s.length-1],w=o[o.length-1],$=_%4===0&&w%4===0,k=h<=8?[4,1,1]:[4,4,1],y=[8,8,1],g=[Math.ceil(w/y[0]/k[0]),Math.ceil(h/y[1]/k[1]),Math.ceil(p/y[2]/k[2])],x=$?4:1,S=[...u,h,_/x],C=S.length,T=[...d,_,w/x],I=T.length,z=[p,h,w/x],N=[{type:6,data:h},{type:6,data:w},{type:6,data:_}];On(t,N),N.push(...ie(f,S,T));let U=["rank","rank"],Q=e.length>2;Q&&(N.push(...ie(e[2].dims)),U.push("rank")),N.push(...ie(z));let Y=G=>{let ce=f.length,ae=Bc("batchDims",e[0].dataType,ce,1),Z=Qe(e[0].dataType),oe=L("a",e[0].dataType,C,x),P=L("b",e[1].dataType,I,x),F=te("result",e[0].dataType,z.length,x),X=[oe,P];if(Q){let Ee=a?x:1;X.push(L("bias",e[2].dataType,e[2].dims.length,Ee))}let O=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Rn(t,O);let W=Qe(F.type.tensor),K=An(t,F.type.value,W),J=Ym(x,Q,K,[ae,oe,P,F],a);return`
  ${G.registerUniforms(O).registerInternalVariables(ae).declareVariables(...X,F)}
  ${J}
  ${$?bd(k,y,Z,ae):Sd(k,y,Z,ae)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${$};${a}`,inputDependencies:U},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:N}),getShaderSource:Y}}}),Zm,$1,DS=V(()=>{ue(),Tr(),fe(),Pn(),Fc(),MS(),Hc(),Zm=(e,t,r,n,a=!1,i,s=4,o=4,u=4,d="f32")=>{let f=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},p=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",y=e?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${y} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${y} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${y} % inChannels;
    var resData = ${Ze(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${$}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(s)}
    }
    return resData;`,x=e?t&&n?`
    let col = colIn * ${s};
    ${g}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${g}
    }
    return ${Ze(s,d)}(0.0);`:n&&r?`
    let col = colIn * ${s};
    ${g}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${Ze(s,d)}(0.0);`,S=e?n&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Ze(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Ze(o,d)}(0.0);`,C=Ze(u,d),T=Ze(e?s:o,d),I=Ze(e?o:s,d),z=An(i,C,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?x:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?S:x}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${v1(a)}
      ${z}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},$1=(e,t,r,n,a,i,s,o,u)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],p=r[0],h=d?r[2]:r[3],_=d?r[1]:r[2],w=d?r[3]:r[1],$=d&&(f%4===0||f%3===0)&&w%4===0,k=d?w:h*_,y=d?h*_:w,g=[8,8,1],x=n<=8?[4,1,1]:[4,4,1],S=[Math.ceil(k/g[0]/x[0]),Math.ceil(y/g[1]/x[1]),Math.ceil(p/g[2]/x[2])];me("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let C=$?d&&f%4!==0?3:4:1,T=g[1]*x[1],I=g[0]*x[0],z=Math.max(g[0]*C,g[1]),N=n%T===0,U=a%I===0,Q=i%z===0,Y=$?[C,4,4]:[1,1,1],G=[{type:6,data:n},{type:6,data:a},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];On(t,G),G.push(...ie(e[0].dims,e[1].dims));let ce=["rank","rank"];s&&(G.push(...ie(e[2].dims)),ce.push("rank")),G.push(...ie(r));let ae=Z=>{let oe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Rn(t,oe);let P=$?4:1,F=Qe(e[0].dataType),X=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${F}>`:F}) {
        result[flatIndex] = ${$?`vec4<${F}>`:F}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${F}>`:F}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,O=L("x",e[0].dataType,e[0].dims.length,C===3?1:C),W=L("w",e[1].dataType,e[1].dims.length,P),K=[O,W],J=te("result",e[0].dataType,r.length,P);if(s){let Ee=L("bias",e[2].dataType,e[2].dims.length,P);K.push(Ee),X+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${F}>`:F} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${w1("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Z.registerUniforms(oe).declareVariables(...K,J)}
        ${X}
        ${Zm(d,N,U,Q,s,t,Y[0],Y[1],Y[2],F)}
        ${$?bd(x,g,F,void 0,!d,z):Sd(x,g,F,void 0,!d,z,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${$};${N};${U};${Q};${T};${I};${z}`,inputDependencies:ce},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:G}),getShaderSource:ae}}}),Xm,Kl,Pi,Jm,Ql,eg,x1,b1,PS=V(()=>{ue(),Tr(),de(),fe(),Pn(),Fc(),Xm=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Kl=e=>typeof e=="number"?[e,e,e]:e,Pi=(e,t)=>t<=1?e:e+(e-1)*(t-1),Jm=(e,t,r,n=1)=>{let a=Pi(t,n);return Math.floor((e[0]*(r-1)-r+a)/2)},Ql=(e,t,r,n,a)=>{a==null&&(a=Jm(e,t[0],n[0]));let i=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(i[s]=Math.trunc((e[s]-t[s]+2*a)/n[s]+1));return i},eg=(e,t,r,n,a,i,s,o,u,d)=>{let f,p,h,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=Ql([t,r,n,1],[o,u,d],1,[a,i,s],e);p=w[0],h=w[1],_=w[2]}else if(Array.isArray(e)){if(!e.every(($,k,y)=>$===y[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=Ql([t,r,n,1],[o,u,d],1,[a,i,s],e[0]);p=w[0],h=w[1],_=w[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/a),h=Math.ceil(r/i),_=Math.ceil(n/s);let w=(p-1)*a+o-t,$=(h-1)*i+u-r,k=(_-1)*s+d-n,y=Math.floor(w/2),g=w-y,x=Math.floor($/2),S=$-x,C=Math.floor(k/2),T=k-C;f={top:x,bottom:S,left:C,right:T,front:y,back:g}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:p,outHeight:h,outWidth:_}},x1=(e,t,r,n,a,i=!1,s="channelsLast")=>{let o,u,d,f,p;if(s==="channelsLast")[o,u,d,f,p]=e;else if(s==="channelsFirst")[o,p,u,d,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,_,w,$]=t,[k,y,g]=Kl(r),[x,S,C]=Kl(n),T=Pi(_,x),I=Pi(w,S),z=Pi($,C),{padInfo:N,outDepth:U,outHeight:Q,outWidth:Y}=eg(a,u,d,f,k,y,g,T,I,z),G=i?h*p:h,ce=[0,0,0,0,0];return s==="channelsFirst"?ce=[o,G,U,Q,Y]:s==="channelsLast"&&(ce=[o,U,Q,Y,G]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:f,inChannels:p,outDepth:U,outHeight:Q,outWidth:Y,outChannels:G,padInfo:N,strideDepth:k,strideHeight:y,strideWidth:g,filterDepth:_,filterHeight:w,filterWidth:$,effectiveFilterDepth:T,effectiveFilterHeight:I,effectiveFilterWidth:z,dilationDepth:x,dilationHeight:S,dilationWidth:C,inShape:e,outShape:ce,filterShape:t}},b1=(e,t,r,n,a,i)=>{let s=i==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((k,y)=>y)},d=[Math.ceil(Xm(u.x.map(k=>r[k]))/o[0]),1,1];me("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let f=1,p=D.size(r),h=[{type:12,data:p},{type:12,data:n},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];On(t,h),h.push(...ie(e[0].dims,e[1].dims));let _=["rank","rank"],w=e.length===3;w&&(h.push(...ie(e[2].dims)),_.push("rank")),h.push(...ie(r));let $=k=>{let y=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Rn(t,y);let g=1,x=Qe(e[0].dataType),S=L("x",e[0].dataType,e[0].dims.length,f),C=L("W",e[1].dataType,e[1].dims.length,g),T=[S,C],I=te("result",e[0].dataType,r.length,g),z="";if(w){let Q=L("bias",e[2].dataType,e[2].dims.length,g);T.push(Q),z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${x} {
          return bias[${s?ne("coords",4,5):ne("coords",1,5)}];
        }`}let N=Ze(f,x),U=An(t,N,x);return`
            ${z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${k.registerUniforms(y).declareVariables(...T,I)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${I.offsetToIndices("global_idx")};
              let batch = ${ne("coords",0,S.rank)};
              let d2 = ${s?ne("coords",S.rank-1,S.rank):ne("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?ne("coords",1,S.rank):ne("coords",2,S.rank)},
              ${s?ne("coords",2,S.rank):ne("coords",3,S.rank)},
              ${s?ne("coords",3,S.rank):ne("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ne("uniforms.x_shape",1,S.rank):ne("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?ne("uniforms.x_shape",2,S.rank):ne("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?ne("uniforms.x_shape",3,S.rank):ne("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?ne("uniforms.x_shape",4,S.rank):ne("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${w?"value = value + getBiasByOutputCoords(coords)":""};
              ${U}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${w}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:$}}}),S1,k1,BS=V(()=>{ue(),de(),fe(),Pn(),S1=(e,t,r,n)=>{let a=e.length>2,i=a?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],f=d/t.group,p=u&&f>=4?Ne(d):1,h=D.size(r)/p,_=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];On(t,_),_.push(...ie(s,[o[0],o[1],o[2],o[3]/p]));let w=a?["rank","rank","rank"]:["rank","rank"];_.push(...ie([r[0],r[1],r[2],r[3]/p]));let $=k=>{let y=te("output",e[0].dataType,r.length,p),g=Qe(y.type.tensor),x=An(t,y.type.value,g),S=L("x",e[0].dataType,s.length),C=L("w",e[1].dataType,o.length,p),T=[S,C];a&&T.push(L("b",e[2].dataType,e[2].dims,p));let I=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Rn(t,I);let z=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(I).declareVariables(...T,y)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${y.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${y.type.value} = ${y.type.value}(0);
    ${z}
    ${i}
    ${x}
    ${y.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:$}},k1=(e,t,r,n)=>{let a=e.length>2,i=Ne(r[3]),s=Ne(r[2]),o=D.size(r)/i/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],f=[r[0],r[1],r[2],r[3]/i],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];On(t,p),p.push(...ie(u,d,f));let h=(s-1)*t.strides[1]+d[1],_=w=>{let $=te("output",e[0].dataType,f.length,i),k=Qe($.type.tensor),y=An(t,$.type.value,k),g=L("x",e[0].dataType,u.length,i),x=L("w",e[1].dataType,d.length,i),S=[g,x];a&&S.push(L("b",e[2].dataType,e[2].dims,i));let C=a?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Rn(t,T),`
  ${w.registerUniforms(T).declareVariables(...S,$)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${g.type.value}, ${h}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${g.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${g.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${x.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${C}
      ${y}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${s};${h};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:_}}}),tg,fs,rg,ps,kd,Yl,ng,ig,Cd,LS=V(()=>{de(),DS(),PS(),Hc(),BS(),Pn(),qc(),sn(),tg=(e,t,r,n,a,i)=>{let s=e[0],o=e.slice(i?1:2,i?3:4),u=o.length,d=t[0],f=t.slice(2).map((h,_)=>h+(h-1)*(r[_]-1)),p=o.map((h,_)=>h+n[_]+n[_+u]).map((h,_)=>Math.floor((h-f[_]+a[_])/a[_]));return p.splice(0,0,s),p.splice(i?3:1,0,d),p},fs=[2,3,1,0],rg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},ps=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let n=e.pads.slice();ao.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:n}),a},kd=e=>{let t=Wc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,i=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Yl=(e,t,r,n)=>{let a=r.format==="NHWC",i=tg(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let T=[t[0]];if(a){let I=e.kernelCustomData.wT??e.compute(Et(t[1],fs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I),T.push(I)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(k1(T,r,i,n),{inputs:T}):e.compute(S1(T,r,i,n),{inputs:T});return}let s=t.length===3,o=t[0].dims[a?1:2],u=t[0].dims[a?2:3],d=t[0].dims[a?3:1],f=t[1].dims[2],p=t[1].dims[3],h=i[a?1:2],_=i[a?2:3],w=i[a?3:1],$=a&&f===o&&p===u&&r.pads[0]===0&&r.pads[1]===0;if($||f===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let T=i[0],I,z,N,U=[];if(a){let G=e.kernelCustomData.wT??e.compute(Et(t[1],fs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),$){let ce=o*u*d;I=t[0].reshape([1,T,ce]),z=G.reshape([1,ce,w]),N=[1,T,w]}else I=t[0].reshape([T,o*u,d]),z=G.reshape([1,d,w]),N=[T,h*_,w];U.push(I),U.push(z)}else I=t[0].reshape([T,d,o*u]),z=t[1].reshape([1,w,d]),N=[T,w,h*_],U.push(z),U.push(I);s&&U.push(t[2]);let Q=N[2],Y=U[0].dims[U[0].dims.length-1];Q<8&&Y<8?e.compute(Vc(U,r,i,N,a,n),{inputs:U}):e.compute(oo(U,r,i,N,a,n),{inputs:U});return}let k=!0,y=e.kernelCustomData.wT??e.compute(Et(t[1],fs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);let g=[t[0],y];s&&g.push(t[2]);let x=a?h*_:w,S=a?w:h*_,C=f*p*d;e.compute($1(g,r,i,x,S,C,s,k,n),{inputs:g})},ng=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=ps({...t,pads:a,strides:i,dilations:s,kernelShape:o},n);Yl(e,n,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ig=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",a=ps(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=x1(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,n);e.compute(b1(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],n))},Cd=(e,t)=>{if(rg(e.inputs,t),e.inputs[0].dims.length===3)ng(e,t);else if(e.inputs[0].dims.length===5)ig(e,e.inputs,t);else{let r=ps(t,e.inputs);Yl(e,e.inputs,r)}}}),C1,US=V(()=>{ue(),Tr(),de(),fe(),C1=(e,t,r)=>{let n=e.length>2,a=t.outputShape,i=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],f=i?Ne(u):1,p=i&&d===1&&u>=4,h=p?Math.floor(u/4)*4:Math.floor(u/f)*f,_=u-h,w=i?Ne(d):1,$=i?d===1?f:w:1,k=D.size(a)/w,y=[Math.ceil(k/64),1,1];me("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);let g=["rank","rank"],x=[t.strides[0],t.strides[1]],S=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],C=[t.dilations[0],t.dilations[1]],T=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],I=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],z=[{type:12,data:k},{type:12,data:x},{type:12,data:S},{type:12,data:C},{type:12,data:T},{type:6,data:I},{type:12,data:h},{type:12,data:u},{type:12,data:d},...ie(e[0].dims,e[1].dims)];n&&(z.push(...ie(e[2].dims)),g.push("rank")),z.push(...ie(a));let N=U=>{let Q=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:I.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Y=Qe(e[0].dataType),G=i?1:2,ce=i?2:3,ae=i?3:1,Z=L("W",e[1].dataType,e[1].dims.length,$),oe=L("Dy",e[0].dataType,e[0].dims.length,f),P=[oe,Z];n&&P.push(L("bias",e[2].dataType,[a[ae]].length,w));let F=te("result",e[0].dataType,a.length,w),X=()=>{let K="";if(p)f===4?K+=`
        let xValue = ${oe.getByOffset("x_offset")};
        let wValue = ${Z.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?K+=`
          dotProd = dotProd + dot(vec4<${Y}>(${oe.getByOffset("x_offset")}, ${oe.getByOffset("x_offset + 1u")}), vec4<${Y}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&(K+=`
          dotProd = dotProd + dot(vec4<${Y}>(${oe.getByOffset("x_offset")}, ${oe.getByOffset("x_offset + 1u")}, ${oe.getByOffset("x_offset + 2u")}, ${oe.getByOffset("x_offset + 3u")}), vec4<${Y}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}, ${Z.getByOffset("w_offset + 2u")}, ${Z.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(K+=`
                  let xValue = ${i?oe.getByOffset(`${oe.indicesToOffset(`${oe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):oe.get("batch","inputChannel","idyR","idyC")};
        `,f===1)K+=`
          let w_offset = ${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Z.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let J=0;J<f;J++)K+=`
            let wValue${J} = ${Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${J}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${J}] * wValue${J};`;return K},O=()=>{if(_===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let K="";if(f===1){K+="dotProd = dotProd";for(let J=0;J<_;J++)K+=`
            + ${oe.getByOffset(`x_offset + ${J}`)} * ${Z.getByOffset(`w_offset + ${J}`)}`;K+=";"}else if(f===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);K+=`
          let xValue = ${oe.getByOffset("x_offset")};
          let wValue = ${Z.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return K},W=`
            let outputIndices = ${F.offsetToIndices(`global_idx * ${w}`)};
            let batch = ${F.indicesGet("outputIndices",0)};
            let d1 = ${F.indicesGet("outputIndices",ae)};
            let r = ${F.indicesGet("outputIndices",G)};
            let c = ${F.indicesGet("outputIndices",ce)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${F.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Y}(dyRCorner) + ${Y}(wR)) / ${Y}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Y}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${Y}(dyCCorner) + ${Y}(wC)) / ${Y}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Y}(uniforms.Dy_shape[${ce}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${oe.indicesToOffset(`${oe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${Z.indicesToOffset(`${Z.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:f}) {
                  ${X()}
                  inputChannel = inputChannel + ${p?4:f};
                }
                ${O()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${w}]`:""};
            ${F.setByOffset("global_idx","value")};
          `;return`
    ${U.registerUniforms(Q).declareVariables(...P,F)}
      ${U.mainStart()}
      ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${W}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${$}${w}${p}${_}`,inputDependencies:g},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:z}),getShaderSource:N}}}),ag,sg,og,Zl,E1,lg,Xl,ug,T1,jS=V(()=>{US(),Pn(),sn(),ag=(e,t,r,n,a,i)=>(e-1)*t+r+(n-1)*a+1-i,sg=(e,t,r,n,a)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=i,r[a]=e-i):t==="SAME_LOWER"&&(r[n]=e-i,r[a]=i)},og=(e,t,r,n,a,i,s,o,u,d)=>{let f=e.length-2,p=d.length===0;u.length<f&&u.push(...Array(f-u.length).fill(0));let h=e[0],_=t[o?3:1]*a;for(let w=0,$=e.length-f-(o?1:0);w<f;++w,++$){let k=e[$],y=p?k*s[w]:d[w],g=ag(k,s[w],i[w],t[$],r[w],y);sg(g,n,i,w,w+f),p&&d.push(s[w]*(k-1)+u[w]+(t[$]-1)*r[w]+1-i[w]-i[w+f])}d.splice(0,0,h),d.splice(o?3:1,0,_)},Zl=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let a=e.pads.slice(),i=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}og(o,r,u,e.autoPad,e.group,a,d,n,s,i);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:a,outputPadding:s,outputShape:i,dilations:u,strides:d}),f},E1=e=>{let t=Wc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,i=e.group,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),f=e.outputPadding,p=e.outputShape;return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,outputPadding:f,outputShape:p,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},lg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Xl=(e,t,r,n)=>{let a=e.kernelCustomData.wT??e.compute(Et(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let i=[t[0],a];t.length===3&&i.push(t[2]),e.compute(C1(i,r,n),{inputs:i})},ug=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),i=[1].concat(i),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let d=Zl({...t,pads:o,strides:s,dilations:i,kernelShape:a,outputPadding:u},n);Xl(e,n,d,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},T1=(e,t)=>{if(lg(e.inputs,t),e.inputs[0].dims.length===3)ug(e,t);else{let r=Zl(t,e.inputs);Xl(e,e.inputs,r)}}}),dg,I1,z1,WS=V(()=>{ue(),de(),Be(),fe(),dg=(e,t,r,n)=>{let a=D.size(t),i=t.length,s=L("input",e,i),o=te("output",e,i),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=D.normalizeAxis(u,i),f=p=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=ne("uniforms.input_shape","uniforms.axis",i),w=n.reverse?h+(n.exclusive?" + 1":""):"0",$=n.reverse?_:h+(n.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${w};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...ie(t,t)]}),getShaderSource:f}},I1=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,a=e.inputs[1];e.compute(dg(n,r,a,t),{inputs:[0]})},z1=e=>{let t=e.exclusive===1,r=e.reverse===1;return $e({exclusive:t,reverse:r})}}),cg,fg,pg,A1,O1,FS=V(()=>{ue(),de(),Be(),fe(),cg=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},fg=(e,t,r,n)=>{let a=[];a.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)a.push(r.indicesSet("a",e[i],`i[${i}]`));return a.push("return a;}"),a.join(`
`)},pg=(e,t)=>{let r,n,a,i,s,o,u=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";u?([r,n,a,i]=e.dims,s=f?[r,n,a,d,d,i/d**2]:[r,n,a,i/d**2,d,d],o=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,a,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[r,d,d,i/d**2,n,a]:[r,i/d**2,d,d,n,a],o=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(s),h=p.dims.length,_=e.dataType,w=L("a",_,h),$=te("output",_,h),k=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(w,$)}

  ${fg(o,h,w,$)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:y=>{let g=u?[r,n*d,a*d,i/d**2]:[r,i/d**2,n*d,a*d],x=D.size(g),S=p.dims,C=D.sortBasedOnPerm(S,o);return{outputs:[{dims:g,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...ie(S,C)]}},getShaderSource:k}},A1=(e,t)=>{cg(e.inputs),e.compute(pg(e.inputs[0],t))},O1=e=>$e({blocksize:e.blocksize,mode:e.mode,format:e.format})}),hs,Bi,Jl,hg,mg,gg,yg,eu,_g,R1,N1,VS=V(()=>{ue(),de(),Be(),fe(),hs="[a-zA-Z]|\\.\\.\\.",Bi="("+hs+")+",Jl="^"+Bi+"$",hg="("+Bi+",)*"+Bi,mg="^"+hg+"$",gg=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},yg=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(mg)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let o=e[s].dims.slice();if(!i.match(RegExp(Jl)))throw new Error("Invalid LHS term");let u=this.processTerm(i,!0,o,s);this.lhs.push(u)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(Bi)))throw new Error("Invalid RHS");(a=n.match(RegExp(hs,"g")))==null||a.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let a=r.length,i=!1,s=[],o=0;if(!e.match(RegExp(Jl))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(hs,"g")),d=new gg(n);return u==null||u.forEach((f,p)=>{if(f==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let h=a-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let w=String.fromCharCode(48+_);d.addSymbol(w,p+_),this.addSymbol(w,r[o++],n)}}else d.addSymbol(f,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[o++],n)}),d}},eu=e=>e+"_max",_g=(e,t,r,n)=>{let a=e.map(d=>d.length).map((d,f)=>L(`input${f}`,t,d)),i=D.size(n),s=te("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let f=[],p="var prod = 1.0;",h="var sum = 0.0;",_="sum += prod;",w=[],$=[],k=[],y=[],g=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,C)=>{var T;if(r.rhs.symbolToIndices.has(C)){let I=(T=r.rhs.symbolToIndices.get(C))==null?void 0:T[0];I!==void 0&&r.lhs.forEach((z,N)=>{if(S.inputIndices.includes(N)){let U=z.symbolToIndices.get(C);if(U===void 0)throw new Error("Invalid symbol error");U.forEach(Q=>{f.push(`${a[N].indicesSet(`input${N}Indices`,Q,s.indicesGet("outputIndices",I))}`)})}})}else r.lhs.forEach((I,z)=>{if(S.inputIndices.includes(z)){let N=I.symbolToIndices.get(C);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(U=>{w.push(`${a[z].indicesSet(`input${z}Indices`,U,`${C}`)}`)}),y.push(`prod *= ${a[z].getByIndices(`input${z}Indices`)};`)}}),$.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${eu(C)}; ${C}++) {`),k.push("}")});let x=g?[...f,`let sum = ${a.map((S,C)=>S.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...f,h,...$,...w,p,...y,_,...k];return`
            ${d.registerUniforms(o.map(S=>({name:`${eu(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((S,C)=>`var input${C}Indices: ${a[C].type.indices};`).join(`
`)}
            ${x.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>r.symbolToInfo.has(p)).map(p=>{var h;return{type:12,data:((h=r.symbolToInfo.get(p))==null?void 0:h.dimValue)||0}});d.push({type:12,data:i});let f=e.map((p,h)=>[...ie(p)]).reduce((p,h)=>p.concat(h),d);return f.push(...ie(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}},getShaderSource:u}},R1=(e,t)=>{let r=new yg(e.inputs,t.equation),n=r.outputDims,a=e.inputs.map((i,s)=>i.dims);e.compute(_g(a,e.inputs[0].dataType,r,n))},N1=e=>{let t=e.equation.replace(/\s+/g,"");return $e({equation:t})}}),vg,tu,wg,$g,M1,qS=V(()=>{ue(),de(),fe(),vg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;n<r.length&&a<t.length;++n,++a)if(r[n]!==t[a]&&r[n]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},tu=(e,t)=>{let r=e.length-t.length,n=[];for(let a=0;a<r;++a)n.push(e[a]);for(let a=0;a<t.length;++a)n.push(t[a]===1?e[a+r]:t[a]);return n},wg=(e,t)=>e.length>t.length?tu(e,t):tu(t,e),$g=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=wg(t,r),a=e[0].dataType,i=a===9||D.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=i||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(D.size(n)/o),d=p=>{let h=L("input",a,t.length,s),_=te("output",a,n.length,o),w;if(a===9){let $=(k,y,g="")=>`
          let outputIndices${y} = ${_.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${h.broadcastedIndicesToOffset(`outputIndices${y}`,_)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${k}[${y}] = ${g}(${h.getByOffset(`index${y}`)}[component${y}]);
        `;w=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else w=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,_)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},f=[{type:12,data:u},...ie(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f})}},M1=e=>{vg(e.inputs),e.compute($g(e.inputs),{inputs:[0]})}}),xg,D1,HS=V(()=>{ue(),de(),fe(),jc(),xg=e=>{let t=e[0].dataType,r=D.size(e[0].dims),n=D.size(e[1].dims),a=n%4===0,i=s=>{let o=L("x",t,[1],4),u=L("bias",t,[1],4),d=te("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${u.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,h=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(o,u,d)}

    ${$d(at(t))}

    ${s.mainStart(mi)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",xd("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/mi/4)}})}},D1=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?r1(e):e.compute(xg(e.inputs))}}),bg,Sg,P1,B1,GS=V(()=>{ue(),de(),Be(),fe(),bg=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Sg=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=D.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(i,1,...n);let o=r[i],u=e[0].dataType===9?4:1,d=Math.ceil(D.size(s)/u),f=[{type:12,data:d},{type:6,data:o},{type:12,data:i},...ie(e[0].dims,e[1].dims,s)],p=h=>{let _=L("data",e[0].dataType,e[0].dims.length,u),w=L("inputIndices",e[1].dataType,e[1].dims.length),$=te("output",e[0].dataType,s.length,u),k=g=>{let x=n.length,S=`var indicesIndices${g}  = ${w.type.indices}(0);`;for(let C=0;C<x;C++)S+=`${x>1?`indicesIndices${g}[${C}]`:`indicesIndices${g}`} = ${s.length>1?`outputIndices${g}[uniforms.axis + ${C}]`:`outputIndices${g}`};`;S+=`
          var idx${g} = ${w.getByIndices(`indicesIndices${g}`)};
          if (idx${g} < 0) {
            idx${g} = idx${g} + uniforms.axisDimLimit;
          }
          var dataIndices${g} : ${_.type.indices};
        `;for(let C=0,T=0;C<a;C++)C===i?(S+=`${a>1?`dataIndices${g}[${C}]`:`dataIndices${g}`} = u32(idx${g});`,T+=x):(S+=`${a>1?`dataIndices${g}[${C}]`:`dataIndices${g}`} = ${s.length>1?`outputIndices${g}[${T}]`:`outputIndices${g}`};`,T++);return S},y;if(e[0].dataType===9){let g=(x,S,C="")=>`
          let outputIndices${S} = ${$.offsetToIndices(`outputOffset + ${S}u`)};
          ${k(S)};
          let offset${S} = ${_.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${x}[${S}] = ${C}(${_.getByOffset(`index${S}`)}[component${S}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${g("value",0,"u32")}
        ${g("value",1,"u32")}
        ${g("value",2,"u32")}
        ${g("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else y=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${_.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,$)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${y}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:p}},P1=e=>$e({axis:e.axis}),B1=(e,t)=>{let r=e.inputs;bg(r),e.compute(Sg(e.inputs,t))}}),kg,L1,U1,KS=V(()=>{ue(),de(),fe(),kg=(e,t,r,n,a,i,s,o,u)=>{let d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],f=[i];d.push(...ie(t.dims,f));let p=h=>{let _=L("indices_data",t.dataType,t.dims.length),w=te("input_slice_offsets_data",12,1,1),$=[_,w],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(k).declareVariables(...$)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},L1=(e,t)=>{let r=e.inputs,n=r[0].dims,a=r[0].dataType,i=r[1].dims,s=i[i.length-1],o=D.sizeToDimension(i,i.length-1),u=D.sizeFromDimension(n,t.batchDims+s),d=D.sizeToDimension(n,t.batchDims),f=D.sizeFromDimension(n,t.batchDims),p=o/d,h=new Array(s),_=u;for(let S=0;S<s;++S)h[s-1-S]=_,_*=n[t.batchDims+s-1-S];let w=kg(e,r[1],h,t.batchDims,n,o,p,f,s),$=t.batchDims+s;if($>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=i.slice(0,-1).concat(n.slice($)),y=D.size(k),g=[{type:12,data:y},{type:12,data:u},...ie(r[0].dims,w.dims,k)],x=S=>{let C=L("data",r[0].dataType,r[0].dims.length),T=L("slice_offsets",12,w.dims.length),I=te("output",r[0].dataType,k.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,T,I)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:a}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:g}),getShaderSource:x},{inputs:[r[0],w]})},U1=e=>({batchDims:e.batch_dims,cacheKey:""})}),Cg,Eg,j1,W1,QS=V(()=>{ue(),de(),Be(),fe(),Cg=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,a=e[0],i=e[2],s=e.length===4?e[3]:void 0;if(i.dims.length!==a.dims.length||!a.dims.map((o,u)=>u===r?Math.ceil(o/n)===i.dims[u]:o===i.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==i.dims.length||!s.dims.map((o,u)=>o===i.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Eg=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=D.normalizeAxis(t.gatherAxis,a),s=D.normalizeAxis(t.quantizeAxis,a),o=r.slice(0);o.splice(i,1,...n);let u=D.size(o),d=e[2].dataType,f=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:s},{type:12,data:i},{type:12,data:t.blockSize},...ie(...e.map((_,w)=>_.dims),o)],h=_=>{let w=L("data",e[0].dataType,e[0].dims.length),$=L("inputIndices",e[1].dataType,e[1].dims.length),k=L("scales",e[2].dataType,e[2].dims.length),y=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,g=te("output",d,o.length),x=[w,$,k];y&&x.push(y);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(S).declareVariables(...x,g)}
        ${_.mainStart()}
        let output_indices = ${g.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${g.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${g.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${w.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${g.indicesGet("output_indices","i")};
          ${w.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${w.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${g.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${w.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${w.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${w.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${y?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${y.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${y.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${at(d)}(quantized_data - zero_point) * scale;
        ${g.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,w)=>w!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,w)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:h}},j1=(e,t)=>{let r=e.inputs;Cg(r,t),e.compute(Eg(e.inputs,t))},W1=e=>$e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Tg,Ig,F1,V1,YS=V(()=>{ue(),de(),Be(),fe(),Tg=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ig=(e,t)=>{let r=e[0].dims,n=e[0].dataType,a=r.length,i=e[1].dims,s=e[1].dataType,o=D.normalizeAxis(t.axis,a),u=r[o],d=i.slice(0),f=D.size(d),p=L("input",n,a),h=L("indicesInput",s,i.length),_=te("output",n,d.length),w=[{type:12,data:f},{type:6,data:u},{type:12,data:o}];return w.push(...ie(r,i,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,h,_)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},F1=e=>$e({axis:e.axis}),V1=(e,t)=>{let r=e.inputs;Tg(r),e.compute(Ig(e.inputs,t))}}),zg,Ag,q1,H1,ZS=V(()=>{ue(),de(),fe(),zg=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Ag=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[a,i,s]=Fv.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[a,i];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(i/u),f=Math.ceil(a/u),p=!0,h=D.size(o),_=[{type:12,data:p?d:h},{type:12,data:a},{type:12,data:i},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(_.push(...ie(e[2].dims)),w.push("rank")),_.push(...ie(o));let $=y=>{let g="";t.transA&&t.transB?g="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?g="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?g="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(g="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let x=t.alpha===1?"":"value *= uniforms.alpha;",S=L("a",e[0].dataType,e[0].dims),C=L("b",e[1].dataType,e[1].dims),T=S.type.value,I=null,z=[S,C];e.length===3&&(I=L("c",e[2].dataType,e[2].dims.length),z.push(I));let N=te("output",e[0].dataType,o.length);z.push(N);let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${y.registerUniforms(U).declareVariables(...z)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${g}
    }

    ${x}
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${T}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=y=>{let g=L("a",e[0].dataType,e[0].dims),x=L("b",e[1].dataType,e[1].dims),S=null,C=[g,x];e.length===3&&(S=L("c",e[2].dataType,e[2].dims.length),C.push(S));let T=te("output",e[0].dataType,o.length);C.push(T);let I=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],z="",N="";t.transA&&t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,z="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,z="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let U=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${y.registerUniforms(I).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${g.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${x.type.storage}, ${u}>, ${u}>;
  ${y.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${z}
      }
      workgroupBarrier();
    }

    ${U}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:_}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:$}},q1=e=>{let t=e.transA,r=e.transB,n=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:n,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},H1=(e,t)=>{zg(e.inputs),e.compute(Ag(e.inputs,t))}}),ar,gr,dn,cn,Og,Rg,Ng,Mg,Dg,Pg,Bg,Lg,G1,K1,XS=V(()=>{ue(),de(),Be(),fe(),[ar,gr,dn,cn]=[0,1,2,3],Og=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Rg=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Ng=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Mg=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Dg=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Pg=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ar}] = batch;
     indices[${gr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${dn}] = u32(r);
            indices[${cn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${dn}] = u32(clamp(r, 0, H - 1));
          indices[${cn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${dn}] = gs_reflect(r, border[1], border[3]);
          indices[${cn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Bg=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ar}], indices[${gr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ar}], indices[${gr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ar}], indices[${gr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ar}], indices[${gr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ar}], indices[${gr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ar}], indices[${gr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Lg=(e,t)=>{let r=L("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=L("grid",e[1].dataType,n.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ar,gr,dn,cn]=[0,3,1,2]);let s=te("output",e[0].dataType,i.length),o=r.type.value,u=D.size(i),d=[{type:12,data:u},...ie(e[0].dims,n,i)],f=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Rg}
  ${Ng(o)}
  ${Mg(t)}
  ${Dg(t)}
  ${Pg(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${dn}]);
      let W_in = i32(uniforms.x_shape[${cn}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ar}], indices[${dn}], indices[${cn}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Bg(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=D.size(i);return{outputs:[{dims:i,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:f}},G1=(e,t)=>{Og(e.inputs),e.compute(Lg(e.inputs,t))},K1=e=>$e({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),dt,Ug,Q1,ru,jg,Yi,Y1,Z1=V(()=>{ue(),de(),Be(),Pc(),Uc(),fe(),sn(),dt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ug=(e,t)=>{let r=e[0],n=dt(e,1),a=dt(e,2),i=dt(e,3),s=dt(e,4),o=dt(e,5),u=dt(e,6),d=dt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],p=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=p,w=0,$=0,k=Math.floor(h/t.numHeads);if(u&&d&&D.size(u.dims)&&D.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==f||u.dims[1]!==t.numHeads||u.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=u.dims[2],$=u.dims[2]}else if(u&&D.size(u.dims)||d&&D.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y;if(n&&D.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');y=2,_=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');y=5,_=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=0,_=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}if(i&&D.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let g=w+_,x=0;if(s&&D.size(s.dims)>0){x=8;let I=s.dims;throw I.length===1?I[0]===f?x=1:I[0]===3*f+2&&(x=3):I.length===2&&I[0]===f&&I[1]===g&&(x=5),x===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,C=h;if(a&&D.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=a.dims[1]*a.dims[3],S=!0}}let T=!1;if(s&&D.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==f||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==g)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:p,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:g,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:h,vHiddenSize:C,headSize:k,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:T,passPastInKv:S,qkvFormat:y}},Q1=e=>$e({...e}),ru=$e({perm:[0,2,1,3]}),jg=(e,t,r,n,a,i,s)=>{let o=[n,a,i],u=D.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:i}],f=p=>{let h=te("qkv_with_bias",t.dataType,o),_=L("qkv",t.dataType,o),w=L("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms($).declareVariables(_,w,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Yi=(e,t,r,n,a,i,s,o)=>{let u=i;if(s&&D.size(s.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=jg(e,i,s,t,n,r*a,o),u=u.reshape([t,n,r,a]),r===1||n===1?u:e.compute(Et(u,ru.perm),{inputs:[u],outputs:[-1]})[0]}else return i.dims.length===3&&(u=i.reshape([t,n,r,a])),r===1||n===1?u:e.compute(Et(u,ru.perm),{inputs:[u],outputs:[-1]})[0]},Y1=(e,t)=>{let r=Ug(e.inputs,t),n=e.inputs[0],a=dt(e.inputs,1),i=dt(e.inputs,2),s=dt(e.inputs,3),o=dt(e.inputs,4),u=dt(e.inputs,5),d=dt(e.inputs,6),f=dt(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let p=a&&i&&a.dims.length===4&&i.dims.length===4,h=Yi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,s,0);if(p)return ka(e,h,a,i,o,void 0,d,f,u,r);if(!a||!i)throw new Error("key and value must be provided");let _=Yi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),w=Yi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,s,2*r.hiddenSize);ka(e,h,_,w,o,void 0,d,f,u,r)}}),Wg,Fg,Vg,qg,Ed,X1,J1,e$=V(()=>{ue(),de(),Be(),fe(),Wg=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Fg=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),n=r.length),$e({numOutputs:n,axis:t.axis,splitSizes:r})},Vg=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ne("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,qg=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let a=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(a):n===0?r.push(`if (output_number == ${n}u) { ${a} }`):n===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${n}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ed=(e,t)=>{let r=e[0].dims,n=D.size(r),a=e[0].dataType,i=D.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=L("input",a,r.length),u=new Array(t.numOutputs),d=[],f=[],p=0,h=[{type:12,data:n}];for(let w=0;w<t.numOutputs;w++){p+=t.splitSizes[w],u[w]=p;let $=r.slice();$[i]=t.splitSizes[w],f.push($),s[w]=te(`output${w}`,a,$.length),d.push({dims:f[w],dataType:e[0].dataType})}h.push({type:12,data:u},...ie(r,...f));let _=w=>`
  ${w.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Vg(u.length)}
  ${qg(s)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ne("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h})}},X1=(e,t)=>{Wg(e.inputs);let r=e.inputs.length===1?t:Fg(e.inputs,t);e.compute(Ed(e.inputs,r),{inputs:[0]})},J1=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return $e({axis:t,numOutputs:n,splitSizes:r})}}),Hg,lo,t$,r$=V(()=>{ue(),de(),Be(),fe(),Hg=(e,t)=>{let[r,n,a,i]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!D.areEqual(n.dims,[])&&!D.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!D.areEqual(a.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],f=a.dims[0],p=D.sizeFromDimension(r.dims,1)/d,h=o===0?a.dims[1]*2:p/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(h/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},lo=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:a,scale:i}=t,s=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,f=e[2].dims[1],p=a===0?f*2:d/n,h=new Array(s,u,d/p,p-f),_=D.computeStrides(h),w=[{type:1,data:i},{type:12,data:h},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=k=>{let y=L("input",e[0].dataType,e[0].dims.length),g=L("position_ids",e[1].dataType,e[1].dims.length),x=L("cos_cache",e[2].dataType,e[2].dims.length),S=L("sin_cache",e[3].dataType,e[3].dims.length),C=te("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${k.declareVariables(y,g,x,S,C)}

        ${k.mainStart(mi)}
          let half_rotary_emb_dim = uniforms.${x.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${g.broadcastedIndicesToOffset("bsnh.xy",te("",g.type.tensor,2))};
            let position_id =
                u32(${g.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${y.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} -
                ${y.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${y.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${y.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",y.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:$e({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(h)/mi)},programUniforms:w})}},t$=(e,t)=>{Hg(e.inputs,t),e.compute(lo(e.inputs,t))}}),Gg,Kg,nu,Qg,n$,JS=V(()=>{Be(),ue(),Uc(),Z1(),e$(),sn(),r$(),fe(),Gg=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],d=r.dims[1],f=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=d,h=0,_=!n||n.dims.length===0,w=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=w*t.numHeads);let $=i&&i.dims.length!==0,k=s&&s.dims.length!==0;if($&&i.dims.length===4&&i.dims[0]===u&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if($&&k){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=i.dims[2]}else if($||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}let g=0,x=!1,S=t.kvNumHeads?w*t.kvNumHeads:f;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(p!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=a.dims[2]}else{if(p!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=a.dims[1]*a.dims[3],x=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:S,headSize:w,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:x,qkvFormat:y}},Kg=$e({perm:[0,2,1,3]}),nu=(e,t,r)=>{let n=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),n=e.compute(Et(n,Kg.perm),{inputs:[n],outputs:[-1]})[0]),n},Qg=(e,t,r,n)=>{let a=7,i=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=f=>{let p=L("seq_lens",r.dataType,r.dims),h=L("total_seq_lens",n.dataType,n.dims),_=te("pos_ids",a,s),w=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(p,h,_)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},n$=(e,t)=>{var S;let r=Gg(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=$e({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[h,_,w]=!a&&!i?e.compute(Ed([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,a,i],$,k;if(t.doRotary){let C=e.compute(Qg(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],T=e.inputs[7],I=e.inputs[8],z=$e({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),N=[h,C,T,I],U=[-1];$=e.compute(lo(N,z),{inputs:N,outputs:U})[0],N.splice(0,1,_);let Q=$e({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(lo(N,Q),{inputs:N,outputs:U})[0]}let y=Yi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:h,void 0,0),g=nu(e,t.doRotary?k:_,r),x=nu(e,w,r);ka(e,y,g,x,void 0,void 0,s,o,void 0,r,u,d)}}),iu,Yg,Zg,i$,ek=V(()=>{ue(),de(),sn(),fe(),iu=(e,t,r,n,a,i,s,o)=>{let u=Ne(i),d=u===1?"f32":`vec${u}f`,f=u===1?"vec2f":`mat2x${u}f`,p=a*s,h=64;p===1&&(h=256);let _=[a,s,i/u],w=[a,s,2],$=["rank","type","type"],k=[];k.push(...ie(_,w));let y=g=>{let x=L("x",t.dataType,3,u),S=L("scale",r.dataType,r.dims),C=L("bias",n.dataType,n.dims),T=te("output",1,3,2),I=[x,S,C,T];return`
  var<workgroup> workgroup_shared : array<${f}, ${h}>;
  const workgroup_size = ${h}u;
  ${g.declareVariables(...I)}
  ${g.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${x.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${en("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${en("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${h}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:p},programUniforms:k}),getShaderSource:y},{inputs:[t,r,n],outputs:[-1]})[0]},Yg=(e,t,r)=>{let n=t[0].dims,a=n,i=2,s=n[0],o=n[1],u=D.sizeFromDimension(n,i),d=Ne(u),f=D.size(a)/d,p=iu(e,t[0],t[1],t[2],s,u,o,r.epsilon),h=[s,o,u/d],_=[s,o],w=["type","none"],$=k=>{let y=L("x",t[0].dataType,h.length,d),g=L("scale_shift",1,_.length,2),x=te("output",t[0].dataType,h.length,d),S=[y,g,x];return`
  ${k.registerUniform("output_size","u32").declareVariables(...S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${x.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${g.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${y.getByOffset("global_idx")} * ${x.type.value}(scale_shift.x) + ${x.type.value}(scale_shift.y);
      ${x.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...ie(h,_,h)]}),getShaderSource:$},{inputs:[t[0],p]})},Zg=(e,t,r)=>{let n=t[0].dims,a=n,i=n[0],s=n[n.length-1],o=D.sizeFromDimension(n,1)/s,u=Ne(s),d=D.size(a)/u,f=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=["type","type"],h=!1,_=[0,n.length-1];for(let y=0;y<n.length-2;y++)h=h||n[y+1]!==1,_.push(y+1);h=h&&n[n.length-1]!==1;let w=h?e.compute(Et(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(y,g)=>n[_[g]])),$=iu(e,w,t[1],t[2],i,o,s,r.epsilon),k=y=>{let g=Qe(t[0].dataType),x=u===1?"vec2f":`mat${u}x2f`,S=I=>{let z=I===0?"x":"y",N=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${g}(${N}(scale.${z}))`;case 2:return`vec2<${g}>(${N}(scale[0].${z}, scale[1].${z}))`;case 4:return`vec4<${g}>(${N}(scale[0].${z}, scale[1].${z}, scale[2].${z}, scale[3].${z}))`;default:throw new Error(`Not supported compoents ${u}`)}},C=L("input",t[0].dataType,t[0].dims,u),T=te("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${x}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${y.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:k},{inputs:[t[0],$]})},i$=(e,t)=>{t.format==="NHWC"?Zg(e,e.inputs,t):Yg(e,e.inputs,t)}}),Xg,Jg,a$,tk=V(()=>{ue(),de(),fe(),Xg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Jg=(e,t,r)=>{let n=t.simplified,a=e[0].dims,i=e[1],s=!n&&e[2],o=a,u=D.normalizeAxis(t.axis,a.length),d=D.sizeToDimension(a,u),f=D.sizeFromDimension(a,u),p=D.size(i.dims),h=s?D.size(s.dims):0;if(p!==f||s&&h!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let _=[];for(let C=0;C<a.length;++C)C<u?_.push(a[C]):_.push(1);let w=Ne(f),$=["type","type"],k=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/w)},{type:1,data:t.epsilon}];s&&$.push("type");let y=r>1,g=r>2,x=C=>{let T=Qe(e[0].dataType),I=[L("x",e[0].dataType,e[0].dims,w),L("scale",i.dataType,i.dims,w)];s&&I.push(L("bias",s.dataType,s.dims,w)),I.push(te("output",e[0].dataType,o,w)),y&&I.push(te("mean_data_output",1,_)),g&&I.push(te("inv_std_output",1,_));let z=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(z).declareVariables(...I)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${_d("f32",w)};
    var mean_square_vector = ${_d("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ei(T,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${en("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${en("mean_square_vector",w)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ei(T,w,"x[j + offset]")};
      let f32scale = ${ei(T,w,"scale[j]")};
      output[j + offset] = ${I[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${ei(T,w,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${g?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return y&&S.push({dims:_,dataType:1}),g&&S.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${r};${n}`,inputDependencies:$},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:k}),getShaderSource:x}},a$=(e,t)=>{Xg(e.inputs),e.compute(Jg(e.inputs,t,e.outputCount))}}),ey,s$,rk=V(()=>{de(),qc(),Hc(),ey=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},s$=e=>{ey(e.inputs);let t=hi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(Vc(e.inputs,{activation:""},t));else{let a=t[t.length-2],i=D.size(e.inputs[0].dims.slice(0,-2)),s=D.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&a===1&&s===1){let o=e.inputs[0].reshape([1,i,n]),u=e.inputs[1].reshape([1,n,r]),d=[1,i,r],f=[o,u];e.compute(oo(f,{activation:""},t,d),{inputs:f})}else e.compute(oo(e.inputs,{activation:""},t))}}}),ty,ry,ny,o$,l$,nk=V(()=>{ue(),de(),Be(),fe(),ty=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,s=e[1];if(!D.areEqual(s.dims,[t.n,a,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(D.size(u)!==d)throw new Error("zeroPoints input size error.")}},ry=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,o=r.slice(0,n-2),u=D.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Ne(t.k),h=Ne(d),_=Ne(s),w=o.concat([a,s]),$=a>1&&s/_%2===0?2:1,k=D.size(w)/_/$,y=64,g=[],x=[u,a,i/p],S=D.convertShape(e[1].dims).slice();S.splice(-1,1,d/h),g.push(...ie(x)),g.push(...ie(S)),g.push(...ie(e[2].dims)),e.length===4&&g.push(...ie(D.convertShape(e[3].dims)));let C=[u,a,s/_];g.push(...ie(C));let T=I=>{let z=x.length,N=L("a",e[0].dataType,z,p),U=L("b",12,S.length,h),Q=L("scales",e[2].dataType,e[2].dims.length),Y=[N,U,Q],G=e.length===4?L("zero_points",12,e[3].dims.length):void 0;G&&Y.push(G);let ce=C.length,ae=te("output",e[0].dataType,ce,_),Z=Qe(e[0].dataType),oe=(()=>{switch(p){case 1:return`array<${Z}, 8>`;case 2:return`mat4x2<${Z}>`;case 4:return`mat2x4<${Z}>`;default:throw new Error(`${p}-component is not supported.`)}})(),P=()=>{let O=`
          // reuse a data
            var input_offset = ${N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`)};
            var a_data: ${oe};
            for (var j: u32 = 0; j < ${8/p}; j++) {
              a_data[j] = ${N.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let W=0;W<_*$;W++)O+=`
            b_value = ${h===1?`b${W}_data`:`b${W}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${oe}(${Array.from({length:4},(K,J)=>`${Z}(b_value_lower[${J}]), ${Z}(b_value_upper[${J}])`).join(", ")});
            b_dequantized_values = ${p===1?`${oe}(${Array.from({length:8},(K,J)=>`(b_quantized_values[${J}] - ${G?`zero_point${W}`:"zero_point"}) * scale${W}`).join(", ")});`:`(b_quantized_values - ${oe}(${Array(8).fill(`${G?`zero_point${W}`:"zero_point"}`).join(",")})) * scale${W};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(W/_)}]${_>1?`[${W%_}]`:""} += ${Array.from({length:8/p},(K,J)=>`${p===1?`a_data[${J}] * b_dequantized_values[${J}]`:`dot(a_data[${J}], b_dequantized_values[${J}])`}`).join(" + ")};
          `;return O},F=()=>{let O=`
            var col_index = col * ${_};
            ${G?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Z}(8);`}
            `;for(let W=0;W<_*$;W++)O+=`
            let scale${W} = ${Q.getByOffset("col_index * nBlocksPerCol + block")};
            ${G?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${Z}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return O},X=()=>{let O=`col_index = col * ${_};`;for(let W=0;W<_*$;W++)O+=`
            let b${W}_data = ${U.getByIndices(`${U.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return O+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${oe};
            var b_dequantized_values: ${oe};`,O};return`
        var<workgroup> workgroup_shared: array<${ae.type.value}, ${$*y}>;
        ${I.declareVariables(...Y,ae)}
        ${I.mainStart([y,1,1])}
          let output_indices = ${ae.offsetToIndices(`(global_idx / ${y}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${y}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${F()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${X()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${P()}
                word_offset += ${8/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${ae.type.value} = ${ae.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${y}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${ae.setByIndices(`${ae.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${_};${$};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:f}],dispatchGroup:{x:k},programUniforms:g}),getShaderSource:T}},ny=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,o=r.slice(0,n-2),u=D.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Ne(t.k),h=Ne(d),_=o.concat([a,s]),w=128,$=s%8===0?8:s%4===0?4:1,k=w/$,y=k*h*8,g=y/p,x=y/t.blockSize,S=D.size(_)/$,C=[],T=[u,a,i/p],I=D.convertShape(e[1].dims).slice();I.splice(-1,1,d/h),C.push(...ie(T)),C.push(...ie(I)),C.push(...ie(e[2].dims)),e.length===4&&C.push(...ie(D.convertShape(e[3].dims)));let z=[u,a,s];C.push(...ie(z));let N=U=>{let Q=T.length,Y=L("a",e[0].dataType,Q,p),G=L("b",12,I.length,h),ce=L("scales",e[2].dataType,e[2].dims.length),ae=[Y,G,ce],Z=e.length===4?L("zero_points",12,e[3].dims.length):void 0;Z&&ae.push(Z);let oe=z.length,P=te("output",e[0].dataType,oe),F=Qe(e[0].dataType),X=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Y.type.value}, ${g}>;
        var<workgroup> inter_results: array<array<${P.type.value}, ${k}>, ${$}>;
        ${U.declareVariables(...ae,P)}
        ${U.mainStart([k,$,1])}
          let output_indices = ${P.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${x} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${g};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${g}; a_offset += ${w})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Y.getByIndices(`${Y.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Y.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${x} + local_id.x;
            ${Z?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${Z.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${F}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            let scale = ${ce.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${G.getByIndices(`${G.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${X()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${F}>(${Array.from({length:4},(O,W)=>`${F}(b_value_lower[${W}]), ${F}(b_value_upper[${W}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${F}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(O,W)=>`${`dot(a_data${W}, b_dequantized_values[${W}])`}`).join(" + ")};
              word_offset += ${8/p};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${P.type.value} = ${P.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${P.setByIndices(`${P.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${k};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:S},programUniforms:C}),getShaderSource:N}},o$=(e,t)=>{ty(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(ny(e.inputs,t)):e.compute(ry(e.inputs,t))},l$=e=>$e(e)}),iy,ay,sy,oy,ly,uy,dy,cy,u$,ik=V(()=>{ue(),de(),fe(),iy=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ay=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
            k = i32(${e.indicesGet("indices",a)}) - ${ne("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ne("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${ne("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},sy=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ne("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ne("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ne("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ne("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},oy=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ne("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ne("uniforms.x_shape",a,t)})) {
                  k = i32(${ne("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${ne("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},ly=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ne("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${ne("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${ne("uniforms.x_shape",a,t)})) {
                  k -= i32(${ne("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${ne("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},uy=(e,t,r)=>{switch(r.mode){case 0:return ay(e,t,r.pads.length);case 1:return sy(e,t,r.pads.length);case 2:return oy(e,t,r.pads.length);case 3:return ly(e,t,r.pads.length);default:throw new Error("Invalid mode")}},dy=(e,t)=>{let r=D.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,a=D.size(r),i=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&i.push({type:s?e[2].dataType:1,data:t.value}),i.push(...ie(e[0].dims,r));let o=["rank"],u=d=>{let f=te("output",e[0].dataType,r.length),p=L("x",e[0].dataType,n.length),h=p.type.value,_=uy(f,n.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(w).declareVariables(p,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(r)/64)},programUniforms:i}),getShaderSource:u}},cy=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,i=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)i[Number(o[u])]=Number(r[u]),i[Number(o[u])+a]=Number(r[u+o.length])}else r.forEach((o,u)=>i[Number(u)]=Number(o));let s=[];return i.forEach(o=>s.push(o)),{mode:t.mode,value:n,pads:s}}else return t},u$=(e,t)=>{iy(e.inputs);let r=cy(e.inputs,t);e.compute(dy(e.inputs,r),{inputs:[0]})}}),Li,au,su,ou,lu,fy,py,uu,du,d$,c$,cu,f$,p$,fu,h$,m$,g$,y$,ak=V(()=>{Bt(),ue(),de(),fe(),Li=e=>{if(be.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},au=(e,t,r)=>{let n=t.format==="NHWC",a=e.dims.slice();n&&a.splice(1,0,a.pop());let i=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=i?t.dilations.slice():[],d=t.pads.slice();ao.adjustPoolAttributes(r,a,s,o,u,d);let f=ao.computePoolOutputShape(r,a,o,u,s,d,t.autoPad),p=Object.assign({},t);i?Object.assign(p,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let h=f.slice();return h.push(h.splice(1,1)[0]),[p,n?h:f]},su=(e,t)=>{let r=t.format==="NHWC",n=D.size(e),a=D.size(t.kernelShape),i=[{type:12,data:n},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],p=!!(d+f);i.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];h=!!($+k),i.push({type:12,data:_},{type:12,data:w},{type:12,data:$},{type:12,data:k}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,s,!0,p,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);i.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,f)=>d+f);return[i,s,!!u,!1,!1]}},ou=(e,t,r,n,a,i,s,o,u,d,f,p)=>{let h=a.format==="NHWC",_=t.type.value,w=te("output",t.type.tensor,n);if(a.kernelShape.length<=2){let $="",k="",y="",g=r-(h?2:1);if(f?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,a.kernelShape.length===2){let x=r-(h?3:2);p?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${x}] < 0 || xIndices[${x}] >= uniforms.x_shape[${x}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sh - uniforms.phStart + j;
                `,y=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var value = ${_}(${o});
              var pad = 0;
              ${k}
              ${$}
              ${y}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=a.kernelShape.length,k=a.pads.length,y="";return d?y=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:y=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(u).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${_}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${ne("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${ne("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ne("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${ne("uniforms.pads","j - 2u",k)};
                  ${y}
              }
              ${s}

              output[global_idx] = value;
            }`}},lu=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,fy=e=>`${lu(e)};${e.countIncludePad}`,py=e=>`${lu(e)};${e.storageOrder};${e.dilations}`,uu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),du=(e,t,r,n)=>{let[a,i]=au(t,n,r),s=L("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";a.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[f,p,h,_,w]=su(i,a);f.push(...ie(t.dims,i));let $=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${h};${_};${w}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(i)/64)},programUniforms:f}),getShaderSource:k=>ou(k,s,t.dims.length,i.length,a,u,d,0,p,h,_,w)}},d$=e=>{let t=e.count_include_pad!==0,r=uu(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:fy(n)}},c$=(e,t)=>{Li(e.inputs),e.compute(du("AveragePool",e.inputs[0],!1,t))},cu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},f$=e=>{let t=e.format;return{format:t,...cu,cacheKey:t}},p$=(e,t)=>{Li(e.inputs),e.compute(du("GlobalAveragePool",e.inputs[0],!0,t))},fu=(e,t,r,n)=>{let[a,i]=au(t,n,r),s=`
      value = max(x_val, value);
    `,o="",u=L("x",t.dataType,t.dims.length),d=["rank"],[f,p,h,_,w]=su(i,a);return f.push(...ie(t.dims,i)),{name:e,shaderCache:{hint:`${n.cacheKey};${h};${_};${w}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(i)/64)},programUniforms:f}),getShaderSource:$=>ou($,u,t.dims.length,i.length,a,s,o,t.dataType===10?-65504:-1e5,p,h,_,w)}},h$=(e,t)=>{Li(e.inputs),e.compute(fu("MaxPool",e.inputs[0],!1,t))},m$=e=>{let t=e.storage_order,r=e.dilations,n=uu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...n,cacheKey:""};return{...a,cacheKey:py(a)}},g$=e=>{let t=e.format;return{format:t,...cu,cacheKey:t}},y$=(e,t)=>{Li(e.inputs),e.compute(fu("GlobalMaxPool",e.inputs[0],!0,t))}}),hy,my,_$,v$,sk=V(()=>{ue(),de(),Be(),fe(),hy=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,i)=>i===t.axis||a===e[0].dims[i]).reduce((a,i)=>a&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},my=(e,t)=>{let r=D.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,a=n===3,i=e[0].dims,s=e[1].dataType,o=D.size(i),u=n===3||n===2,d=u?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,p=e.length>2?e[2]:void 0,h=p?u?[Math.ceil(D.size(p.dims)/4)]:p.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,w=_===!1&&f.length===1,$=Ne(o),k=_&&(!u||$===4),y=k?$:1,g=k&&!u?$:1,x=L("input",u?12:n,d.length,g),S=L("scale",s,f.length),C=p?L("zero_point",u?12:n,h.length):void 0,T=te("output",s,i.length,y),I=[x,S];C&&I.push(C);let z=[d,f];p&&z.push(h);let N=[{type:12,data:o/y},{type:12,data:r},{type:12,data:t.blockSize},...ie(...z,i)],U=Q=>{let Y=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Q.registerUniforms(Y).declareVariables(...I,T)}
      ${Q.mainStart()}
          ${Q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${x.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${y===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${x.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${S.getByOffset("0")}`:w?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?_?u?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:w?u?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":x.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:U,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(o/y/64),y:1,z:1},programUniforms:N})}},_$=(e,t)=>{hy(e.inputs,t),e.compute(my(e.inputs,t))},v$=e=>$e({axis:e.axis,blockSize:e.blockSize})}),gy,yy,w$,ok=V(()=>{Bt(),ue(),fe(),gy=(e,t,r)=>{let n=e===t,a=e<t&&r<0,i=e>t&&r>0;if(n||a||i)throw new Error("Range these inputs' contents are invalid.")},yy=(e,t,r,n)=>{let a=Math.abs(Math.ceil((t-e)/r)),i=[a],s=a,o=[{type:12,data:s},{type:n,data:e},{type:n,data:r},...ie(i)],u=d=>{let f=te("output",n,i.length),p=f.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(h).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},w$=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),be.webgpu.validateInputContent&&gy(t,r,n),e.compute(yy(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),_y,vy,$$,x$,lk=V(()=>{ue(),de(),Be(),fe(),_y=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${a}bitcast<${n}>(oldValue) + (${r})${i}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${a}min(bitcast<${n}>(oldValue), (${r}))${i}`;case"mul":return`${a}(bitcast<${n}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},vy=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r,i=1,s=Math.ceil(D.sizeToDimension(n,n.length-1)/i),o=n[n.length-1],u=D.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ie(e[1].dims,e[2].dims,a)],f=p=>{let h=L("indices",e[1].dataType,e[1].dims.length),_=L("updates",e[2].dataType,e[2].dims.length,i),w=t.reduction!=="none"&&t.reduction!==""?Yv("output",e[0].dataType,a.length):te("output",e[0].dataType,a.length,i);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,_,w)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${_y(t.reduction,"output[data_offset + i]","value",w.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f}},$$=e=>$e({reduction:e.reduction}),x$=(e,t)=>{e.compute(vy(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),wy,$y,xy,pu,by,Sy,ky,Cy,Ey,Ty,Iy,zy,hu,Ay,Oy,Ry,Ny,My,b$,S$,uk=V(()=>{ue(),de(),Be(),fe(),wy=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},$y=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((a,i)=>n[a]=e[i]),n},xy=(e,t,r,n,a,i)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>i.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(f=>n.push(f)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");wy(n,t),t.axes.length>0&&$y(n,t.axes,d).forEach((f,p)=>n[p]=f)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(f=>a.push(Number(f))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof a<"u"&&n.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},pu=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,by=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${pu("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${pu("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Sy=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ky=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?n:e.slice();return t.length>0?(t.forEach((i,s)=>{n[i]=a[s],n[s+r]=a[t.length+s]}),n):a},Cy=(e,t,r,n)=>{let a=[];if(r.length>0)if(n.length>0){if(e.forEach(i=>a.push(i)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((i,s)=>a[i]=r[s])}else r.forEach(i=>a.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((i,s)=>Math.round(i*t[s]))}return a},Ey=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=n),r.axes.forEach(i=>a[i]=Math.round(e[i]*t[i]))):(t.fill(n,0,t.length),a.forEach((i,s)=>a[s]=Math.round(i*t[s]))),a},Ty=(e,t,r,n,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ne("uniforms.scales","i",n)};
        var roi_low = ${ne("uniforms.roi","i",a)};
        var roi_hi = ${ne("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ne("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ne("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Iy=(e,t,r,n,a,i,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ne("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ne("uniforms.roi","i",i)};
          var roi_hi = ${ne("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${ne("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ne("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,zy=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ne("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,hu=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Ay=(e,t,r,n,a)=>{let[i,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${hu(e,u,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Oy=(e,t,r,n,a,i,s,o,u,d)=>{let f=r.length===2,[p,h]=f?[0,1]:[2,3],_=e.type.value,w=$=>{let k=$===p?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",$)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[$]},
        ${n[$]}, ${r[$]}, ${i[$]}, ${i[$]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[$]} - 1))) {
          return ${u};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${_} = originalIdx + ${_}(i);
          if (${k} < 0 || ${k} >= ${r[$]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${k} = max(0, min(${k}, ${r[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${k})`)};
          data[i + 1] = ${$===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(p)};
    ${w(h)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Ry=(e,t,r,n,a)=>{let[i,s,o,u,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${hu(e,d,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${s}];
      var height:${f} = originalIndices[${o}];
      var width:${f} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Ny=(e,t,r,n,a,i)=>{let s=e.dims,o=ky(i,t.axes,s.length),u=Cy(s,n,a,t.axes),d=n.slice();n.length===0&&(d=s.map((g,x)=>g===0?1:u[x]/g),t.keepAspectRatioPolicy!=="stretch"&&(u=Ey(s,d,t)));let f=te("output",e.dataType,u.length),p=L("input",e.dataType,s.length),h=D.size(u),_=s.length===u.length&&s.every((g,x)=>g===u[x]),w=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,k=p.type.value,y=g=>`
      ${_?"":`
      ${by(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${zy(p,s)};
              ${Sy(t.nearestMode,r,k)};
              ${Iy(p,f,s,u,d.length,o.length,w)};
              `;case"linear":return`
              ${Ty(f,s,u,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Ay(p,f,s,w,$)}`;if(s.length===3||s.length===5)return`${Ry(p,f,s,w,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Oy(p,f,s,u,d,o,t.cubicCoeffA,w,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${g.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,f)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:o},...ie(s,u)]})}},My=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},b$=(e,t)=>{let r=[],n=[],a=[],i=My(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");xy(e.inputs,t,i,r,n,a),e.compute(Ny(e.inputs[0],t,i,r,n,a),{inputs:[0]})},S$=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,a=e.cubicCoeffA,i=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return $e({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:a,excludeOutside:i,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),Dy,Py,k$,dk=V(()=>{ue(),de(),fe(),Dy=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Py=(e,t,r,n)=>{let a=t.simplified,i=e[0].dims,s=D.size(i),o=i,u=s,d=i.slice(-1)[0],f=n?i.slice(0,-1).concat(1):[],p=!a&&e.length>3,h=e.length>4,_=n&&r>1,w=n&&r>2,$=r>3,k=64,y=Ne(d),g=[{type:12,data:u},{type:12,data:y},{type:12,data:d},{type:1,data:t.epsilon}],x=C=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],I=[L("x",e[0].dataType,e[0].dims,y),L("skip",e[1].dataType,e[1].dims,y),L("gamma",e[2].dataType,e[2].dims,y)];p&&I.push(L("beta",e[3].dataType,e[3].dims,y)),h&&I.push(L("bias",e[4].dataType,e[4].dims,y)),I.push(te("output",e[0].dataType,o,y)),_&&I.push(te("mean_output",1,f)),w&&I.push(te("inv_std_output",1,f)),$&&I.push(te("input_skip_bias_sum",e[0].dataType,o,y));let z=Qe(e[0].dataType),N=Qe(1,y);return`

      ${C.registerUniforms(T).declareVariables(...I)}
      var<workgroup> sum_shared : array<${N}, ${k}>;
      var<workgroup> sum_squared_shared : array<${N}, ${k}>;

      ${C.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":z+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ei(z,y,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${en("sum",y)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${en("square_sum",y)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${w?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${z}(mean)`}) *
            ${z}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:f,dataType:1}),r>2&&S.push({dims:f,dataType:1}),r>3&&S.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${y};${_};${w};${$}`,inputDependencies:e.map((C,T)=>"type")},getShaderSource:x,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:g})}},k$=(e,t)=>{Dy(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Py(e.inputs,t,e.outputCount,!1),{outputs:r})}}),By,Ui,Ly,mu,Uy,jy,C$,E$,ck=V(()=>{ue(),de(),Be(),fe(),By=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Ui=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Ly=(e,t)=>{if(e.length>1){let r=Ui(e,1),n=Ui(e,2),a=Ui(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),$e({starts:r,ends:n,axes:a})}else return t},mu=(e,t,r,n,a)=>{let i=e;return e<0&&(i+=r[n[t]]),a[t]<0?Math.max(0,Math.min(i,r[n[t]]-1)):Math.max(0,Math.min(i,r[n[t]]))},Uy=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${ne("uniforms.input_shape","i",r.length)};
            let steps_i = ${ne("uniforms.steps","i",r.length)};
            let signs_i = ${ne("uniforms.signs","i",r.length)};
            let starts_i = ${ne("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,jy=(e,t)=>{let r=e[0].dims,n=D.size(r),a=t.axes.length>0?D.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=Ui(e,4);i.forEach(y=>y!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(a.length).fill(1));let s=t.starts.map((y,g)=>mu(y,g,r,a,i)),o=t.ends.map((y,g)=>mu(y,g,r,a,i));if(a.length!==s.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let y=0;y<r.length;++y)a.includes(y)||(s.splice(y,0,0),o.splice(y,0,r[y]),i.splice(y,0,1));let u=i.map(y=>Math.sign(y));i.forEach((y,g,x)=>{if(y<0){let S=(o[g]-s[g])/y,C=s[g],T=C+S*i[g];s[g]=T,o[g]=C,x[g]=-y}});let d=r.slice(0);a.forEach((y,g)=>{d[y]=Math.ceil((o[y]-s[y])/i[y])});let f={dims:d,dataType:e[0].dataType},p=te("output",e[0].dataType,d.length),h=L("input",e[0].dataType,e[0].dims.length),_=D.size(d),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:i.length}],$=[{type:12,data:_},{type:12,data:s},{type:6,data:u},{type:12,data:i},...ie(e[0].dims,d)],k=y=>`
      ${y.registerUniforms(w).declareVariables(h,p)}
        ${Uy(h,p,r)}
        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:$})}},C$=(e,t)=>{By(e.inputs,t);let r=Ly(e.inputs,t);e.compute(jy(e.inputs,r),{inputs:[0]})},E$=e=>{let t=e.starts,r=e.ends,n=e.axes;return $e({starts:t,ends:r,axes:n})}}),Wy,Fy,T$,I$,fk=V(()=>{ue(),de(),Be(),sn(),fe(),Wy=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Fy=(e,t)=>{let r=e.inputs[0],n=r.dims,a=D.size(n),i=n.length,s=D.normalizeAxis(t.axis,i),o=s<n.length-1,u,d=[];o?(d=Array.from({length:i},(I,z)=>z),d[s]=i-1,d[i-1]=s,u=e.compute(Et(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let f=u.dims,p=f[i-1],h=a/p,_=Ne(p),w=p/_,$=64;h===1&&($=256);let k=(I,z)=>z===4?`max(max(${I}.x, ${I}.y), max(${I}.z, ${I}.w))`:z===2?`max(${I}.x, ${I}.y)`:z===3?`max(max(${I}.x, ${I}.y), ${I}.z)`:I,y=L("x",u.dataType,u.dims,_),g=te("result",u.dataType,u.dims,_),x=y.type.value,S=Qe(u.dataType)==="f32"?`var threadMax = ${x}(-3.402823e+38f);`:`var threadMax = ${x}(-65504.0h);`,C=I=>`
      var<workgroup> rowMaxShared : ${x};
      var<workgroup> rowSumShared : ${x};
      var<workgroup> threadShared : array<${x}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${x} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${x}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${I.registerUniform("packedCols","i32").declareVariables(y,g)}
      ${I.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${x}(${k("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${x}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${x}(${en("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${x}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${_};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:w}]}),getShaderSource:C},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Et(T,d),{inputs:[T]})},T$=(e,t)=>{Wy(e.inputs),Fy(e,t)},I$=e=>$e({axis:e.axis})}),gu,Vy,qy,Hy,z$,pk=V(()=>{ue(),de(),fe(),gu=e=>Array.from(e.getBigInt64Array(),Number),Vy=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(gu(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},qy=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},Hy=(e,t)=>{let r=e[0].dims,n=t??gu(e[1]),a=qy(r,n),i=D.size(a),s=e[0].dataType,o=L("input",s,r.length),u=te("output",s,a.length),d=f=>`
      const inputShape = ${o.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(o,u)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...ie(e[0].dims,a)]}),getShaderSource:d}},z$=e=>{Vy(e.inputs),e.compute(Hy(e.inputs),{inputs:[0]})}}),Gy,Ky,A$,hk=V(()=>{ue(),de(),fe(),Gy=(e,t,r,n,a)=>{let i=te("output_data",a,r.length,4),s=L("a_data",t[1].dataType,t[1].dims.length,4),o=L("b_data",t[2].dataType,t[2].dims.length,4),u=L("c_data",t[0].dataType,t[0].dims.length,4),d,f=(p,h,_)=>`select(${h}, ${p}, ${_})`;if(!n)d=i.setByOffset("global_idx",f(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(h,_,w="")=>{let $=`a_data[index_a${_}][component_a${_}]`,k=`b_data[index_b${_}][component_b${_}]`,y=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${i.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_b${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_c${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${h}[${_}] = ${w}(${f($,k,y)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Ky=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,a=e[1].dataType,i=!(D.areEqual(t,r)&&D.areEqual(r,n)),s=t,o=D.size(t);if(i){let d=hi.calcShape(hi.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=D.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Gy(d,e,s,i,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ie(n,t,r,s)]})}},A$=e=>{e.compute(Ky(e.inputs))}}),O$,mk=V(()=>{IS(),Uc(),zS(),AS(),OS(),RS(),NS(),LS(),jS(),WS(),FS(),VS(),qS(),HS(),GS(),KS(),QS(),YS(),ZS(),XS(),JS(),ek(),tk(),rk(),nk(),Z1(),ik(),ak(),sk(),ok(),lk(),Lc(),uk(),r$(),dk(),ck(),fk(),e$(),pk(),sn(),jc(),hk(),O$=new Map([["Abs",[kw]],["Acos",[Cw]],["Acosh",[Ew]],["Add",[o1]],["ArgMax",[$w,wd]],["ArgMin",[ww,wd]],["Asin",[Tw]],["Asinh",[Iw]],["Atan",[zw]],["Atanh",[Aw]],["Attention",[xw]],["AveragePool",[c$,d$]],["BatchNormalization",[bw]],["BiasAdd",[Sw]],["BiasSplitGelu",[s1]],["Cast",[Rw,Ow]],["Ceil",[Mw]],["Clip",[Nw]],["Concat",[y1,_1]],["Conv",[Cd,kd]],["ConvTranspose",[T1,E1]],["Cos",[Dw]],["Cosh",[Pw]],["CumSum",[I1,z1]],["DepthToSpace",[A1,O1]],["DequantizeLinear",[_$,v$]],["Div",[l1]],["Einsum",[R1,N1]],["Elu",[Bw,Qi]],["Equal",[u1]],["Erf",[Lw]],["Exp",[Uw]],["Expand",[M1]],["FastGelu",[D1]],["Floor",[jw]],["FusedConv",[Cd,kd]],["Gather",[B1,P1]],["GatherElements",[V1,F1]],["GatherBlockQuantized",[j1,W1]],["GatherND",[L1,U1]],["Gelu",[Ww]],["Gemm",[H1,q1]],["GlobalAveragePool",[p$,f$]],["GlobalMaxPool",[y$,g$]],["Greater",[p1]],["GreaterOrEqual",[m1]],["GridSample",[G1,K1]],["GroupQueryAttention",[n$]],["HardSigmoid",[Yw,Qw]],["InstanceNormalization",[i$]],["LayerNormalization",[a$]],["LeakyRelu",[Fw,Qi]],["Less",[h1]],["LessOrEqual",[g1]],["Log",[i1]],["MatMul",[s$]],["MatMulNBits",[o$,l$]],["MaxPool",[h$,m$]],["Mul",[d1]],["MultiHeadAttention",[Y1,Q1]],["Neg",[qw]],["Not",[Vw]],["Pad",[u$]],["Pow",[c1]],["QuickGelu",[a1,Qi]],["Range",[w$]],["Reciprocal",[Hw]],["ReduceMin",[mw]],["ReduceMean",[dw]],["ReduceMax",[hw]],["ReduceSum",[yw]],["ReduceProd",[gw]],["ReduceL1",[cw]],["ReduceL2",[fw]],["ReduceLogSum",[vw]],["ReduceLogSumExp",[pw]],["ReduceSumSquare",[_w]],["Relu",[Gw]],["Resize",[b$,S$]],["RotaryEmbedding",[t$]],["ScatterND",[x$,$$]],["Sigmoid",[Kw]],["Sin",[Zw]],["Sinh",[Xw]],["Slice",[C$,E$]],["SkipLayerNormalization",[k$]],["Split",[X1,J1]],["Sqrt",[Jw]],["Softmax",[T$,I$]],["Sub",[f1]],["Tan",[e1]],["Tanh",[t1]],["ThresholdedRelu",[n1,Qi]],["Tile",[z$]],["Transpose",[Xv,Jv]],["Where",[A$]]])}),R$,gk=V(()=>{Bt(),Tr(),fe(),R$=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,a){dr(e.programInfo.name);let i=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});a&&o.push({binding:o.length,resource:a});let u=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),er(e.programInfo.name)}dispose(){}build(e,t){dr(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let a=Zv(t,this.backend.device.limits),i=e.getShaderSource(a),s=`${n.join(`
`)}
${a.additionalImplementations}
${i}`,o=r.createShaderModule({code:s,label:e.name});me("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return er(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&n<=a)return[t,r,n];let i=t*r*n,s=Math.ceil(Math.sqrt(i));if(s>a){if(s=Math.ceil(Math.cbrt(i)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),N$={};vi(N$,{WebGpuBackend:()=>M$});var Qy,Yy,Zy,M$,yk=V(()=>{Bt(),ue(),Tr(),Hv(),ES(),mk(),gk(),Qy=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let a=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let i=e[n].dims.length;r.push(`${a};${i}`);break}case"dims":{let i=e[n].dims.join(",");r.push(`${a};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Yy=(e,t,r)=>{var a,i;let n=e.name;return(a=e.shaderCache)!=null&&a.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Qy(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,n},Zy=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},M$=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=i=>t.features.has(i)&&r.push(i)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new Zy(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Qv(this),this.programManager=new R$(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Mc(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;dr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let i=r[a],s=i.kernelId,o=this.kernels.get(s),u=o.kernelType,d=o.kernelName,f=i.programName,p=i.inputTensorViews,h=i.outputTensorViews,_=t[a*2],w=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let $=Number(_-this.queryTimeBase),k=Number(w-this.queryTimeBase);if(!Number.isSafeInteger($)||!Number.isSafeInteger(k))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(y=>({dims:y.dims,dataType:vr(y.dataType)})),outputsMetadata:h.map(y=>({dims:y.dims,dataType:vr(y.dataType)})),kernelId:s,kernelType:u,kernelName:d,programName:f,startTime:$,endTime:k});else{let y="";p.forEach((x,S)=>{y+=`input[${S}]: [${x.dims}] | ${vr(x.dataType)}, `});let g="";h.forEach((x,S)=>{g+=`output[${S}]: [${x.dims}] | ${vr(x.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${d}|${f}" ${y}${g}start time: ${$} ns, execution time: ${k-$} ns`)}ro("GPU",`${f}::${_}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),er()}run(e,t,r,n,a,i){dr(e.name);let s=[];for(let g=0;g<t.length;++g){let x=t[g].data;if(x===0)continue;let S=this.gpuDataManager.get(x);if(!S)throw new Error(`no GPU data for input: ${x}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),f=r.length===0?o.map((g,x)=>x):r;if(f.length!==o.length)throw new Error(`Output size ${f.length} must be equal to ${o.length}.`);let p=[],h=[];for(let g=0;g<o.length;++g){if(!Number.isInteger(f[g])||f[g]<-3||f[g]>=i)throw new Error(`Invalid output index: ${f[g]}`);if(f[g]===-3)continue;let x=f[g]===-1,S=f[g]===-2,C=x||S?a(o[g].dataType,o[g].dims):n(f[g],o[g].dataType,o[g].dims);if(p.push(C),C.data===0)continue;let T=this.gpuDataManager.get(C.data);if(!T)throw new Error(`no GPU data for output: ${C.data}`);if(x&&this.temporaryData.push(T),S){let I=this.kernelPersistentData.get(this.currentKernelId);I||(I=[],this.kernelPersistentData.set(this.currentKernelId,I)),I.push(T)}h.push(T)}if(s.length!==t.length||h.length!==p.length){if(h.length===0)return er(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let g=0,x=[];d.forEach(I=>{let z=typeof I.data=="number"?[I.data]:I.data;if(z.length===0)return;let N=I.type===10?2:4,U,Q;I.type===10?(Q=z.length>4?16:z.length>2?8:z.length*N,U=z.length>4?16:N*z.length):(Q=z.length<=2?z.length*N:16,U=16),g=Math.ceil(g/Q)*Q,x.push(g);let Y=I.type===10?8:4;g+=z.length>4?Math.ceil(z.length/Y)*U:z.length*N});let S=16;g=Math.ceil(g/S)*S;let C=new ArrayBuffer(g);d.forEach((I,z)=>{let N=x[z],U=typeof I.data=="number"?[I.data]:I.data;if(I.type===6)new Int32Array(C,N,U.length).set(U);else if(I.type===12)new Uint32Array(C,N,U.length).set(U);else if(I.type===10)new Uint16Array(C,N,U.length).set(U);else if(I.type===1)new Float32Array(C,N,U.length).set(U);else throw new Error(`Unsupported uniform type: ${vr(I.type)}`)});let T=this.gpuDataManager.create(g,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,C,0,g),this.gpuDataManager.release(T.id),_={offset:0,size:g,buffer:T.buffer}}let w=this.programManager.normalizeDispatchGroupSize(u),$=w[1]===1&&w[2]===1,k=Yy(e,t,$),y=this.programManager.getArtifact(k);if(y||(y=this.programManager.build(e,w),this.programManager.setArtifact(k,y),me("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),d&&y.uniformVariablesInfo){if(d.length!==y.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${y.uniformVariablesInfo.length}, got ${d.length} in program "${y.programInfo.name}".`);for(let g=0;g<d.length;g++){let x=d[g],S=x.type,C=typeof x.data=="number"?1:x.data.length,[T,I]=y.uniformVariablesInfo[g];if(S!==T||C!==I)throw new Error(`Uniform variable ${g} mismatch: expect type ${T} with size ${I}, got type ${S} with size ${C} in program "${y.programInfo.name}".`)}}if(me("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let g={kernelId:this.currentKernelId,programName:y.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(g),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(g)}return this.programManager.run(y,s,h,w,_),er(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let a=O$.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:n,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let a=n.kernelType,i=n.kernelName,s=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),me("info",()=>`[WebGPU] Start to run kernel "[${a}] ${i}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${i}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${i}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let i=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,n,i);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await yd(this,e,t);return Dc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){me("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){me("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){me("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let a=this.getComputePassEncoder(),i=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(i.computePipeline),a.setBindGroup(0,i.bindGroup),a.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),D$={};vi(D$,{init:()=>P$});var ms,Xy,P$,_k=V(()=>{ue(),Tr(),de(),CS(),ms=class B${constructor(t,r,n,a){this.module=t,this.dataType=r,this.data=n,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new B$(this.module,this.dataType,this.data,t)}},Xy=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,a=r/e.PTR_SIZE,i=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*a++,i));let s=Number(e.getValue(n*a++,i));this.outputCount=Number(e.getValue(n*a++,i)),this.customDataOffset=Number(e.getValue(n*a++,"*")),this.customDataSize=Number(e.getValue(n*a++,i));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(n*a++,i)),f=Number(e.getValue(n*a++,"*")),p=Number(e.getValue(n*a++,i)),h=[];for(let _=0;_<p;_++)h.push(Number(e.getValue(n*a++,i)));o.push(new ms(e,d,f,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,n=(t==null?void 0:t.outputs)??[],a=(o,u,d)=>new ms(this.module,u,this.output(o,d),d),i=(o,u)=>{let d=_n(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let f=d>0?this.backend.gpuDataManager.create(d).id:0;return new ms(this.module,o,f,u)};return this.backend.run(e,r,n,a,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,a=n===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(i+n*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},P$=async(e,t,r,n)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=(yk(),Sa(N$)).WebGpuBackend,s=new i;await s.initialize(r,n),a("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,f=!1)=>{if(f)me("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{me("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),p)}},async(o,u,d)=>{me("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,f)=>{me("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let p=new Xy(t,s,Number(u));return s.computeKernel(Number(o),p,f)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let i=new Kv(r);a("webnn",[i,()=>i.reserveTensorId(),s=>i.releaseTensorId(s),async(s,o,u,d,f)=>i.ensureTensor(s,o,u,d,f),(s,o)=>{i.uploadTensor(s,o)},async(s,o)=>i.downloadTensor(s,o),(s,o)=>i.registerMLContext(s,o),!!r.trace])}}}),Jy,Gc,Kc,Dr,e0,yu,uo,Qc,Yc,_u,Zc,Xc,Jc,L$=V(()=>{Bt(),bS(),SS(),ue(),Dn(),Ac(),Wv(),Jy=(e,t)=>{ke()._OrtInit(e,t)!==0&&xe("Can't initialize onnxruntime.")},Gc=async e=>{Jy(e.wasm.numThreads,io(e.logLevel))},Kc=async(e,t)=>{var n,a;(a=(n=ke()).asyncInit)==null||a.call(n);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(_k(),Sa(D$)).init;t==="webgpu"&&await i("webgpu",ke(),e,r),t==="webnn"&&await i("webnn",ke(),e)}},Dr=new Map,e0=e=>{let t=ke(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,a,a+n)!==0&&xe("Can't get session input/output count.");let i=n===4?"i32":"i64";return[Number(t.getValue(a,i)),Number(t.getValue(a+n,i))]}finally{t.stackRestore(r)}},yu=(e,t)=>{let r=ke(),n=r.stackSave(),a=0;try{let i=r.PTR_SIZE,s=r.stackAlloc(2*i);r._OrtGetInputOutputMetadata(e,t,s,s+i)!==0&&xe("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));a=Number(r.getValue(s+i,"*"));let u=r.HEAP32[a/4];if(u===0)return[o,0];let d=r.HEAPU32[a/4+1],f=[];for(let p=0;p<d;p++){let h=Number(r.getValue(a+8+p*i,"*"));f.push(h!==0?r.UTF8ToString(h):Number(r.getValue(a+8+(p+d)*i,"*")))}return[o,u,f]}finally{r.stackRestore(n),a!==0&&r._OrtFree(a)}},uo=e=>{let t=ke(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Qc=async(e,t)=>{var p,h,_,w;let r,n,a=ke();Array.isArray(e)?[r,n]=e:e.buffer===a.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=uo(e);let i=0,s=0,o=0,u=[],d=[],f=[];try{if([s,u]=await jv(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let z=[];for(let N of t.externalData){let U=typeof N=="string"?N:N.path;z.push(Nc(typeof N=="string"?N:N.data).then(Q=>{a.mountExternalData(U,Q)}))}await Promise.all(z)}for(let z of(t==null?void 0:t.executionProviders)??[])if((typeof z=="string"?z:z.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof z!="string"){let N=z,U=N==null?void 0:N.context,Q=N==null?void 0:N.gpuDevice,Y=N==null?void 0:N.deviceType,G=N==null?void 0:N.powerPreference;U?a.currentContext=U:Q?a.currentContext=await a.webnnCreateMLContext(Q):a.currentContext=await a.webnnCreateMLContext({deviceType:Y,powerPreference:G})}else a.currentContext=await a.webnnCreateMLContext();break}i=await a._OrtCreateSession(r,n,s),(p=a.webgpuOnCreateSession)==null||p.call(a,i),i===0&&xe("Can't create a session."),(h=a.jsepOnCreateSession)==null||h.call(a),a.currentContext&&(a.webnnRegisterMLContext(i,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[$,k]=e0(i),y=!!(t!=null&&t.enableGraphCapture),g=[],x=[],S=[],C=[],T=[];for(let z=0;z<$;z++){let[N,U,Q]=yu(i,z);N===0&&xe("Can't get an input name."),d.push(N);let Y=a.UTF8ToString(N);g.push(Y),S.push(U===0?{name:Y,isTensor:!1}:{name:Y,isTensor:!0,type:vr(U),shape:Q})}for(let z=0;z<k;z++){let[N,U,Q]=yu(i,z+$);N===0&&xe("Can't get an output name."),f.push(N);let Y=a.UTF8ToString(N);x.push(Y),C.push(U===0?{name:Y,isTensor:!1}:{name:Y,isTensor:!0,type:vr(U),shape:Q});{if(y&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let G=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((_=t==null?void 0:t.preferredOutputLocation)==null?void 0:_[Y])??"cpu",ce=a.webnnIsGraphOutput;if(G==="cpu"&&ce&&ce(i,Y)){T.push("ml-tensor-cpu-output");continue}if(G!=="cpu"&&G!=="cpu-pinned"&&G!=="gpu-buffer"&&G!=="ml-tensor")throw new Error(`Not supported preferred output location: ${G}.`);if(y&&G!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${G}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(G)}}let I=null;return T.some(z=>z==="gpu-buffer"||z==="ml-tensor"||z==="ml-tensor-cpu-output")&&(o=a._OrtCreateBinding(i),o===0&&xe("Can't create IO binding."),I={handle:o,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(z=>z==="ml-tensor-cpu-output"?"ml-tensor":z).map(z=>md(z))}),Dr.set(i,[i,d,f,I,y,!1]),[i,g,x,S,C]}catch($){throw d.forEach(k=>a._OrtFree(k)),f.forEach(k=>a._OrtFree(k)),o!==0&&a._OrtReleaseBinding(o)!==0&&xe("Can't release IO binding."),i!==0&&a._OrtReleaseSession(i)!==0&&xe("Can't release session."),$}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&xe("Can't release session options."),u.forEach($=>a._free($)),(w=a.unmountExternalData)==null||w.call(a)}},Yc=e=>{var u,d,f;let t=ke(),r=Dr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,a,i,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&xe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&xe("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(f=t.webgpuOnReleaseSession)==null||f.call(t,e),a.forEach(p=>t._OrtFree(p)),i.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(n)!==0&&xe("Can't release session."),Dr.delete(e)},_u=async(e,t,r,n,a,i,s=!1)=>{if(!e){t.push(0);return}let o=ke(),u=o.PTR_SIZE,d=e[0],f=e[1],p=e[3],h=p,_,w;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let y=e[2].gpuBuffer;w=_n(yn(d),f);{let g=o.jsepRegisterBuffer;if(!g)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=g(n,i,y,w)}}else if(p==="ml-tensor"){let y=e[2].mlTensor;w=_n(yn(d),f);let g=o.webnnRegisterMLTensor;if(!g)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=g(n,y,yn(d),f)}else{let y=e[2];if(Array.isArray(y)){w=u*y.length,_=o._malloc(w),r.push(_);for(let g=0;g<y.length;g++){if(typeof y[g]!="string")throw new TypeError(`tensor data at index ${g} is not a string`);o.setValue(_+g*u,Yt(y[g],r),"*")}}else{let g=o.webnnIsGraphInput,x=o.webnnIsGraphOutput;if(d!=="string"&&g&&x){let S=o.UTF8ToString(a);if(g(n,S)||x(n,S)){let C=yn(d);w=_n(C,f),h="ml-tensor";let T=o.webnnCreateTemporaryTensor,I=o.webnnUploadTensor;if(!T||!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await T(n,C,f);I(z,new Uint8Array(y.buffer,y.byteOffset,y.byteLength)),_=z}else w=y.byteLength,_=o._malloc(w),r.push(_),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,w),_)}else w=y.byteLength,_=o._malloc(w),r.push(_),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,w),_)}}let $=o.stackSave(),k=o.stackAlloc(4*f.length);try{f.forEach((g,x)=>o.setValue(k+x*u,g,u===4?"i32":"i64"));let y=o._OrtCreateTensor(yn(d),_,w,k,f.length,md(h));y===0&&xe(`Can't create tensor for input/output. session=${n}, index=${i}.`),t.push(y)}finally{o.stackRestore($)}},Zc=async(e,t,r,n,a,i)=>{var Q,Y,G,ce;let s=ke(),o=s.PTR_SIZE,u=Dr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],f=u[1],p=u[2],h=u[3],_=u[4],w=u[5],$=t.length,k=n.length,y=0,g=[],x=[],S=[],C=[],T=s.stackSave(),I=s.stackAlloc($*o),z=s.stackAlloc($*o),N=s.stackAlloc(k*o),U=s.stackAlloc(k*o);try{[y,g]=Uv(i),Sn("wasm prepareInputOutputTensor");for(let P=0;P<$;P++)await _u(r[P],x,C,e,f[t[P]],t[P],_);for(let P=0;P<k;P++)await _u(a[P],S,C,e,p[n[P]],$+n[P],_);kn("wasm prepareInputOutputTensor");for(let P=0;P<$;P++)s.setValue(I+P*o,x[P],"*"),s.setValue(z+P*o,f[t[P]],"*");for(let P=0;P<k;P++)s.setValue(N+P*o,S[P],"*"),s.setValue(U+P*o,p[n[P]],"*");if(h&&!w){let{handle:P,outputPreferredLocations:F,outputPreferredLocationsEncoded:X}=h;if(f.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${f.length}).`);Sn("wasm bindInputsOutputs");for(let O=0;O<$;O++){let W=t[O];await s._OrtBindInput(P,f[W],x[O])!==0&&xe(`Can't bind input[${O}] for session=${e}.`)}for(let O=0;O<k;O++){let W=n[O];(Q=a[O])!=null&&Q[3]?s._OrtBindOutput(P,p[W],S[O],0)!==0&&xe(`Can't bind pre-allocated output[${O}] for session=${e}.`):s._OrtBindOutput(P,p[W],0,X[W])!==0&&xe(`Can't bind output[${O}] to ${F[O]} for session=${e}.`)}kn("wasm bindInputsOutputs"),Dr.set(e,[d,f,p,h,_,!0])}(Y=s.jsepOnRunStart)==null||Y.call(s,d),(G=s.webnnOnRunStart)==null||G.call(s,d);let ae;h?ae=await s._OrtRunWithBinding(d,h.handle,k,N,y):ae=await s._OrtRun(d,z,I,$,U,k,N,y),ae!==0&&xe("failed to call OrtRun().");let Z=[],oe=[];Sn("wasm ProcessOutputTensor");for(let P=0;P<k;P++){let F=Number(s.getValue(N+P*o,"*"));if(F===S[P]){Z.push(a[P]);continue}let X=s.stackSave(),O=s.stackAlloc(4*o),W=!1,K,J=0;try{s._OrtGetTensorData(F,O,O+o,O+2*o,O+3*o)!==0&&xe(`Can't access output tensor data on index ${P}.`);let Ee=o===4?"i32":"i64",Ve=Number(s.getValue(O,Ee));J=s.getValue(O+o,"*");let R=s.getValue(O+o*2,"*"),se=Number(s.getValue(O+o*3,Ee)),Le=[];for(let _e=0;_e<se;_e++)Le.push(Number(s.getValue(R+_e*o,Ee)));s._OrtFree(R)!==0&&xe("Can't free memory for tensor dims.");let je=Le.reduce((_e,Te)=>_e*Te,1);K=vr(Ve);let Lt=h==null?void 0:h.outputPreferredLocations[n[P]];if(K==="string"){if(Lt==="gpu-buffer"||Lt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let _e=[];for(let Te=0;Te<je;Te++){let lt=s.getValue(J+Te*o,"*"),cr=s.getValue(J+(Te+1)*o,"*"),Ir=Te===je-1?void 0:cr-lt;_e.push(s.UTF8ToString(lt,Ir))}Z.push([K,Le,_e,"cpu"])}else if(Lt==="gpu-buffer"&&je>0){let _e=s.jsepGetBuffer;if(!_e)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Te=_e(J),lt=_n(Ve,je);if(lt===void 0||!Oc(K))throw new Error(`Unsupported data type: ${K}`);W=!0,Z.push([K,Le,{gpuBuffer:Te,download:s.jsepCreateDownloader(Te,lt,K),dispose:()=>{s._OrtReleaseTensor(F)!==0&&xe("Can't release tensor.")}},"gpu-buffer"])}else if(Lt==="ml-tensor"&&je>0){let _e=s.webnnEnsureTensor,Te=s.webnnIsGraphInputOutputTypeSupported;if(!_e||!Te)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(_n(Ve,je)===void 0||!Rc(K))throw new Error(`Unsupported data type: ${K}`);if(!Te(e,K,!1))throw new Error(`preferredLocation "ml-tensor" for ${K} output is not supported by current WebNN Context.`);let lt=await _e(e,J,Ve,Le,!1);W=!0,Z.push([K,Le,{mlTensor:lt,download:s.webnnCreateMLTensorDownloader(J,K),dispose:()=>{s.webnnReleaseTensorId(J),s._OrtReleaseTensor(F)}},"ml-tensor"])}else if(Lt==="ml-tensor-cpu-output"&&je>0){let _e=s.webnnCreateMLTensorDownloader(J,K)(),Te=Z.length;W=!0,oe.push((async()=>{let lt=[Te,await _e];return s.webnnReleaseTensorId(J),s._OrtReleaseTensor(F),lt})()),Z.push([K,Le,[],"cpu"])}else{let _e=Eo(K),Te=new _e(je);new Uint8Array(Te.buffer,Te.byteOffset,Te.byteLength).set(s.HEAPU8.subarray(J,J+Te.byteLength)),Z.push([K,Le,Te,"cpu"])}}finally{s.stackRestore(X),K==="string"&&J&&s._free(J),W||s._OrtReleaseTensor(F)}}h&&!_&&(s._OrtClearBoundOutputs(h.handle)!==0&&xe("Can't clear bound outputs."),Dr.set(e,[d,f,p,h,_,!1]));for(let[P,F]of await Promise.all(oe))Z[P][2]=F;return kn("wasm ProcessOutputTensor"),Z}finally{(ce=s.webnnOnRunEnd)==null||ce.call(s,d),s.stackRestore(T),x.forEach(ae=>s._OrtReleaseTensor(ae)),S.forEach(ae=>s._OrtReleaseTensor(ae)),C.forEach(ae=>s._free(ae)),y!==0&&s._OrtReleaseRunOptions(y),g.forEach(ae=>s._free(ae))}},Xc=e=>{let t=ke(),r=Dr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],a=t._OrtEndProfiling(n);a===0&&xe("Can't get an profile file name."),t._OrtFree(a)},Jc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Pr,mt,Un,ji,Wi,gs,vu,ys,fn,pn,t0,U$,j$,W$,F$,V$,q$,H$,G$=V(()=>{Bt(),L$(),Dn(),Ic(),Pr=()=>!!be.wasm.proxy&&typeof document<"u",Un=!1,ji=!1,Wi=!1,ys=new Map,fn=(e,t)=>{let r=ys.get(e);r?r.push(t):ys.set(e,[t])},pn=()=>{if(Un||!ji||Wi||!mt)throw new Error("worker not ready")},t0=e=>{switch(e.data.type){case"init-wasm":Un=!1,e.data.err?(Wi=!0,vu[1](e.data.err)):(ji=!0,vu[0]()),gs&&(URL.revokeObjectURL(gs),gs=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ys.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},U$=async()=>{if(!ji){if(Un)throw new Error("multiple calls to 'initWasm()' detected.");if(Wi)throw new Error("previous call to 'initWasm()' failed.");if(Un=!0,Pr())return new Promise((e,t)=>{mt==null||mt.terminate(),Bv().then(([r,n])=>{try{mt=n,mt.onerror=i=>t(i),mt.onmessage=t0,vu=[e,t];let a={type:"init-wasm",in:be};!a.in.wasm.wasmPaths&&(r||hd)&&(a.in.wasm.wasmPaths={wasm:new URL("/mobile-detect/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href}),mt.postMessage(a),gs=r}catch(a){t(a)}},t)});try{await zc(be.wasm),await Gc(be),ji=!0}catch(e){throw Wi=!0,e}finally{Un=!1}}},j$=async e=>{if(Pr())return pn(),new Promise((t,r)=>{fn("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:be}};mt.postMessage(n)});await Kc(be,e)},W$=async e=>Pr()?(pn(),new Promise((t,r)=>{fn("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};mt.postMessage(n,[e.buffer])})):uo(e),F$=async(e,t)=>{if(Pr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return pn(),new Promise((r,n)=>{fn("create",[r,n]);let a={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),mt.postMessage(a,i)})}else return Qc(e,t)},V$=async e=>{if(Pr())return pn(),new Promise((t,r)=>{fn("release",[t,r]);let n={type:"release",in:e};mt.postMessage(n)});Yc(e)},q$=async(e,t,r,n,a,i)=>{if(Pr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return pn(),new Promise((s,o)=>{fn("run",[s,o]);let u=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:i}};mt.postMessage(d,Jc(u))})}else return Zc(e,t,r,n,a,i)},H$=async e=>{if(Pr())return pn(),new Promise((t,r)=>{fn("end-profiling",[t,r]);let n={type:"end-profiling",in:e};mt.postMessage(n)});Xc(e)}}),wu,r0,K$,vk=V(()=>{Bt(),G$(),ue(),Tc(),Wv(),wu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},r0=e=>{switch(e[3]){case"cpu":return new Zt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Oc(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:a}=e[2];return Zt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:a})}case"ml-tensor":{let t=e[0];if(!Rc(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:a}=e[2];return Zt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},K$=class{async fetchModelAndCopyToWasmMemory(e){return W$(await Nc(e))}async loadModel(e,t){dr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await F$(r,t),er()}async dispose(){return V$(this.sessionId)}async run(e,t,r){dr();let n=[],a=[];Object.entries(e).forEach(p=>{let h=p[0],_=p[1],w=this.inputNames.indexOf(h);if(w===-1)throw new Error(`invalid input '${h}'`);n.push(_),a.push(w)});let i=[],s=[];Object.entries(t).forEach(p=>{let h=p[0],_=p[1],w=this.outputNames.indexOf(h);if(w===-1)throw new Error(`invalid output '${h}'`);i.push(_),s.push(w)});let o=n.map((p,h)=>wu(p,()=>`input "${this.inputNames[a[h]]}"`)),u=i.map((p,h)=>p?wu(p,()=>`output "${this.outputNames[s[h]]}"`):null),d=await q$(this.sessionId,a,o,s,u,r),f={};for(let p=0;p<d.length;p++)f[this.outputNames[s[p]]]=i[p]??r0(d[p]);return er(),f}startProfiling(){}endProfiling(){H$(this.sessionId)}}}),Q$={};vi(Q$,{OnnxruntimeWebAssemblyBackend:()=>Id,initializeFlags:()=>Td,wasmBackend:()=>Y$});var Td,Id,Y$,wk=V(()=>{Bt(),G$(),vk(),Td=()=>{(typeof be.wasm.initTimeout!="number"||be.wasm.initTimeout<0)&&(be.wasm.initTimeout=0);let e=be.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),be.wasm.simd=!1),typeof be.wasm.proxy!="boolean"&&(be.wasm.proxy=!1),typeof be.wasm.trace!="boolean"&&(be.wasm.trace=!1),typeof be.wasm.numThreads!="number"||!Number.isInteger(be.wasm.numThreads)||be.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)be.wasm.numThreads=1;else{let t=typeof navigator>"u"?aS("node:os").cpus().length:navigator.hardwareConcurrency;be.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Id=class{async init(e){Td(),await U$(),await j$(e)}async createInferenceSessionHandler(e,t){let r=new K$;return await r.loadModel(e,t),r}},Y$=new Id});Bt();Bt();Bt();var $k="1.23.2";{let e=(wk(),Sa(Q$)).wasmBackend;Jn("webgpu",e,5),Jn("webnn",e,5),Jn("cpu",e,10),Jn("wasm",e,10)}Object.defineProperty(be.versions,"web",{value:$k,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xk={BASE_URL:"/mobile-detect/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE_PATH:"/mobile-detect/"},bk="onnxruntime/",Sk="pwa_model_cache",tn="models",ef="coco_yolo_v1",kk="/",Ck=["ort-wasm.wasm","ort-wasm-simd.wasm","ort-wasm-threaded.wasm","ort-wasm-simd-threaded.wasm"],Ek="VITE_USE_PUBLIC_WASM";function Z$(e){if(/^[a-z][a-z0-9+.-]*:/.test(e))return e;const t="/mobile-detect/",r=typeof window>"u"?"http://localhost":window.location.origin;if(e.startsWith("/")&&t!==kk){if(e.startsWith(t))return new URL(e,r).toString();const n=e.replace(/^\/+/,"");return new URL(n,`${r}${t}`).toString()}return new URL(e,`${r}${t}`).toString()}function Tk(e){return Z$(`${bk}${e}`)}function Ik(){return Object.fromEntries(Ck.map(e=>[e,Tk(e)]))}function zk(){return xk[Ek]==="true"}const Ak="00 61 73 6d",Ok="<!do",Rk="<htm",X$=4,Nk=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,11,1,9,0,65,0,253,15,26,11]);function J$(e){return e instanceof Error?e.message:typeof e=="string"?e:"unknown error"}function Mk(e,t){const r=e.slice(0,t);return new TextDecoder().decode(r).toLowerCase()}function Dk(e,t){const r=new Uint8Array(e.slice(0,t));return Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join(" ")}function Pk(e){const t=Mk(e,X$);return t.startsWith(Ok)||t.startsWith(Rk)}function zd(e,t){if(Pk(e))throw new Error(`model response from ${t} looks like html (check that the onnx file is served and the url is correct).`)}async function Bk(){const e=t2();return Object.keys(e).length===0?[]:await Promise.all(Object.entries(e).map(async([r,n])=>{try{const a=await fetch(n,{cache:"no-store"}),i=a.headers.get("content-type");let s=null;if(a.ok){const o=await a.arrayBuffer();s=Dk(o,X$)}return{name:r,url:n,ok:a.ok,status:a.status,content_type:i,magic_hex:s,error:null}}catch(a){return{name:r,url:n,ok:!1,status:null,content_type:null,magic_hex:null,error:J$(a)}}}))}function Lk(e){return e.map(t=>{const r=t.status===null?"unknown":t.status.toString(),n=t.content_type??"unknown",a=t.magic_hex??"unknown",i=t.error?`, error=${t.error}`:"";return`${t.name} (${t.url}) status=${r}, content_type=${n}, magic=${a}${i}`}).join(`
`)}function Uk(){if(typeof document>"u")return!1;const e=document.createElement("canvas");return!!(e.getContext("webgl")||e.getContext("experimental-webgl"))}function jk(){if(typeof WebAssembly>"u"||typeof WebAssembly.validate!="function")return!1;try{return WebAssembly.validate(Nk)}catch{return!1}}function Wk(){return typeof SharedArrayBuffer<"u"&&typeof crossOriginIsolated<"u"&&crossOriginIsolated===!0}function tf(){return new Promise((e,t)=>{const r=indexedDB.open(Sk,1);r.onupgradeneeded=()=>{const n=r.result;n.objectStoreNames.contains(tn)||n.createObjectStore(tn)},r.onsuccess=()=>e(r.result),r.onerror=()=>t(r.error)})}async function e2(){const e=await tf();return new Promise((t,r)=>{const i=e.transaction(tn,"readonly").objectStore(tn).get(ef);i.onsuccess=()=>t(i.result??null),i.onerror=()=>r(i.error)})}async function Fk(e){const t=await tf();return new Promise((r,n)=>{const s=t.transaction(tn,"readwrite").objectStore(tn).put(e,ef);s.onsuccess=()=>r(),s.onerror=()=>n(s.error)})}async function Vk(){const e=await tf();return new Promise((t,r)=>{const i=e.transaction(tn,"readwrite").objectStore(tn).delete(ef);i.onsuccess=()=>t(),i.onerror=()=>r(i.error)})}async function qk(){return await e2()!==null}async function Hk(e){const t=Z$("models/coco_yolo.onnx"),r=await fetch(t);if(!r.ok)throw new Error(`failed to download model from ${t} (status ${r.status})`);const n=r.headers.get("content-length"),a=n?Number(n):null;if(!r.body){const f=await r.arrayBuffer();return zd(f,t),e==null||e({loaded:f.byteLength,total:a}),f}const i=r.body.getReader();let s=0;const o=[];for(;;){const{done:f,value:p}=await i.read();if(f)break;p&&(o.push(p),s+=p.length,e==null||e({loaded:s,total:a}))}const u=new Uint8Array(s);let d=0;for(const f of o)u.set(f,d),d+=f.length;return zd(u.buffer,t),u.buffer}function Gk(){const e=typeof navigator>"u"?1:navigator.hardwareConcurrency,t=e?Math.min(e,4):1;be.wasm.numThreads=Wk()?t:1,be.wasm.simd=jk();const r=t2();Object.keys(r).length>0&&(be.wasm.wasmPaths=r)}function t2(){return zk()?Ik():{}}async function Kk(e){Gk();const t=[["wasm"]];Uk()&&t.push(["webgl"]);let r=null,n=null;for(const i of t)try{return await Ec.create(e,{executionProviders:i})}catch(s){if(r=s,i.includes("wasm")&&!n){const o=await Bk();o.length>0&&(n=Lk(o))}}const a=`failed to initialize onnxruntime session: ${J$(r)}`;throw n?new Error(`${a}. wasm diagnostics:
${n}
expected wasm magic=${Ak}`):new Error(a)}async function Qk(e){let r=await e2();return r?zd(r,"indexeddb cache"):(r=await Hk(e),await Fk(r)),Kk(r)}function Yk(e,t){const r=e.width,n=e.height,a=Math.min(t/r,t/n),i=Math.round(r*a),s=Math.round(n*a),o=Math.floor((t-i)/2),u=Math.floor((t-s)/2),d=document.createElement("canvas");d.width=t,d.height=t;const f=d.getContext("2d");if(!f)throw new Error("failed to create 2d context");f.fillStyle="#000000",f.fillRect(0,0,t,t),f.drawImage(e,0,0,r,n,o,u,i,s);const p=f.getImageData(0,0,t,t),{data:h}=p,_=new Float32Array(3*t*t);for(let $=0;$<t*t;$+=1){const k=$*4;_[$]=h[k]/255,_[$+t*t]=h[k+1]/255,_[$+2*t*t]=h[k+2]/255}return{tensor:new Zt("float32",_,[1,3,t,t]),letterbox_info:{scale:a,pad_x:o,pad_y:u,input_size:t,original_width:r,original_height:n}}}function Zk(e,t){const r=Math.max(e.x_min,t.x_min),n=Math.max(e.y_min,t.y_min),a=Math.min(e.x_max,t.x_max),i=Math.min(e.y_max,t.y_max),s=Math.max(0,a-r),o=Math.max(0,i-n),u=s*o,d=Math.max(0,e.x_max-e.x_min)*Math.max(0,e.y_max-e.y_min),f=Math.max(0,t.x_max-t.x_min)*Math.max(0,t.y_max-t.y_min),p=d+f-u;return p<=0?0:u/p}function Xk(e,t,r){const n=t.map((i,s)=>({score:i,index:s})).sort((i,s)=>s.score-i.score).map(i=>i.index),a=[];for(;n.length>0;){const i=n.shift();if(i===void 0)break;a.push(i);const s=[];for(const o of n)Zk(e[i],e[o])<r&&s.push(o);n.splice(0,n.length,...s)}return a}const Jk=85;function eC(e,t,r){const n=[],a=[],i=[];for(let o=0;o<e.length;o+=Jk){const u=e[o],d=e[o+1],f=e[o+2],p=e[o+3],h=e[o+4];let _=0,w=-1;for(let S=0;S<r.labels.length;S+=1){const C=e[o+5+S];C>_&&(_=C,w=S)}const $=h*_;if($<r.confidence_threshold||w<0)continue;const k=u-f/2,y=d-p/2,g=u+f/2,x=d+p/2;n.push({x_min:k,y_min:y,x_max:g,y_max:x}),a.push($),i.push(w)}return Xk(n,a,r.iou_threshold).map(o=>{const u=r.labels[i[o]]??"unknown";return{...tC(n[o],t),label:u,score:a[o],class_id:i[o]}})}function tC(e,t){const{scale:r,pad_x:n,pad_y:a,original_width:i,original_height:s}=t,o=Math.max(0,(e.x_min-n)/r),u=Math.max(0,(e.y_min-a)/r),d=Math.min(i,(e.x_max-n)/r),f=Math.min(s,(e.y_max-a)/r);return{x_min:o,y_min:u,x_max:d,y_max:f}}const rC=640,nC=.35,iC=.45,aC="/";function sC(){const e=window.matchMedia("(display-mode: standalone)").matches,t=window.navigator.standalone;return e||!!t}function oC(e){if(/^[a-z][a-z0-9+.-]*:/.test(e))return e;const t="/mobile-detect/",r=window.location.origin;if(e.startsWith("/")&&t!==aC){if(e.startsWith(t))return new URL(e,r).toString();const n=e.replace(/^\/+/,"");return new URL(n,`${r}${t}`).toString()}return new URL(e,`${r}${t}`).toString()}function lC(e,t,r){const n=e.getContext("2d");n&&(n.putImageData(t,0,0),n.lineWidth=2,n.font="16px sans-serif",r.forEach(a=>{const i=a.x_max-a.x_min,s=a.y_max-a.y_min,o=`${a.label} ${(a.score*100).toFixed(0)}%`;n.strokeStyle="#38bdf8",n.strokeRect(a.x_min,a.y_min,i,s);const d=n.measureText(o).width+8,f=20,p=a.x_min,h=Math.max(0,a.y_min-f);n.fillStyle="#0f172a",n.fillRect(p,h,d,f),n.fillStyle="#38bdf8",n.fillText(o,p+4,h+14)}))}function uC(){const e=Ce.useRef(null),t=Ce.useRef(null),[r,n]=Ce.useState(null),[a,i]=Ce.useState(!1),[s,o]=Ce.useState(null),[u,d]=Ce.useState([]),[f,p]=Ce.useState([]),[h,_]=Ce.useState(nC),[w,$]=Ce.useState(null),[k,y]=Ce.useState(null),[g,x]=Ce.useState(!1),[S,C]=Ce.useState(!1),[T,I]=Ce.useState(null),[z,N]=Ce.useState(null),[U,Q]=Ce.useState(!1),[Y,G]=Ce.useState(!1),[ce,ae]=Ce.useState(null),Z=Ce.useRef(!1),oe=R=>{R&&(R.getTracks().forEach(se=>se.stop()),e.current&&(e.current.srcObject=null))};Ce.useEffect(()=>{(async()=>{try{const se=oC("labels/coco_labels.json"),je=await(await fetch(se)).json();p(je)}catch(se){console.error("label load failed",se),ae("labels failed to load. check deployment path.")}})()},[]),Ce.useEffect(()=>{const R=se=>{se.preventDefault(),N(se)};return window.addEventListener("beforeinstallprompt",R),G(sC()),()=>{window.removeEventListener("beforeinstallprompt",R)}},[]),Ce.useEffect(()=>{(async()=>{const se=await qk();x(se)})()},[]),Ce.useEffect(()=>{if(g||S||Z.current||!navigator.onLine)return;const R=navigator.connection;if(R!=null&&R.saveData){ae("automatic model download paused while data saver is on.");return}Z.current=!0,O().catch(se=>{console.error("automatic model download failed",se)})},[g,S]),Ce.useEffect(()=>()=>{oe(r)},[r]),Ce.useEffect(()=>{const R=()=>{document.visibilityState!=="visible"&&(oe(r),n(null))};return document.addEventListener("visibilitychange",R),()=>{document.removeEventListener("visibilitychange",R)}},[r]);const P=async()=>{ae(null);try{i(!1),o(null),d([]),$(null),oe(r),n(null);const R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});n(R),e.current&&(e.current.srcObject=R,await e.current.play())}catch{ae("camera access failed. check permissions.")}},F=()=>{if(!e.current||!t.current)return;const R=e.current,se=t.current,Le=se.getContext("2d");if(!Le)return;se.width=R.videoWidth,se.height=R.videoHeight,Le.drawImage(R,0,0,se.width,se.height);const je=Le.getImageData(0,0,se.width,se.height);o(je),i(!0),d([]),$(null),oe(r),n(null)},X=R=>R instanceof Error?R.message:typeof R=="string"?R:"unknown error",O=async()=>{C(!0),ae(null);try{const R=await Qk(se=>{if(se.total){const Le=Math.round(se.loaded/se.total*100);I(Le)}else I(null)});y(R),x(!0),I(100),ae("model cached for offline use.")}catch(R){const se=X(R);console.error("model download failed",R),ae(`model download failed: ${se}`)}finally{C(!1)}},W=async()=>{if(!t.current||!s)return;if(!k){ae("model not loaded yet. wait for download or load a local file.");return}ae(null);const R=t.current,se=R.getContext("2d");if(!se)return;se.putImageData(s,0,0);const{tensor:Le,letterbox_info:je}=Yk(R,rC),Lt=k.inputNames[0],_e=performance.now(),Te=await k.run({[Lt]:Le}),lt=performance.now(),cr=k.outputNames[0],Aa=Te[cr].data,Ut=eC(Aa,je,{confidence_threshold:h,iou_threshold:iC,labels:f});d(Ut),$(Math.round(lt-_e)),lC(R,s,Ut)},K=async()=>{if(!z){Q(!0);return}await z.prompt(),(await z.userChoice).outcome==="accepted"&&G(!0)},J=async()=>{await Vk(),x(!1),y(null),ae("cached model cleared.")},Ee=!Y,Ve=!g&&!navigator.onLine;return he.jsxs("div",{children:[he.jsxs("header",{children:[he.jsx("h1",{children:"QSC Mobile Detector"}),he.jsxs("p",{children:["This is a proof-of-concept app developed by Quantitative Science Consulting (","",he.jsx("a",{href:"https://www.qsc.earth",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline hover:text-blue-800",children:"www.QSC.earth"}),"",") and is not intended for scientific inference."]}),he.jsxs("div",{className:"badge",children:["model cached: ",g?"yes":"no"]})]}),Ee?he.jsxs("div",{className:"banner",children:[he.jsx("span",{children:"install for offline use"}),he.jsx("button",{type:"button",onClick:K,children:"install"})]}):null,U?he.jsx("div",{className:"modal_backdrop",onClick:()=>Q(!1),children:he.jsxs("div",{className:"modal",onClick:R=>R.stopPropagation(),children:[he.jsx("h2",{children:"install instructions"}),he.jsx("p",{children:"ios: tap share, then add to home screen."}),he.jsx("p",{children:"android: use the install prompt or add to home screen."}),he.jsx("button",{type:"button",className:"secondary",onClick:()=>Q(!1),children:"close"})]})}):null,he.jsxs("main",{children:[Ve?he.jsx("p",{className:"notice",children:"model not available offline yet. connect once to download automatically."}):null,ce?he.jsx("p",{className:"notice",children:ce}):null,he.jsxs("div",{className:"status_row",children:[he.jsxs("span",{children:["detections: ",u.length]}),he.jsxs("span",{children:["inference: ",w?`${w} ms`:"--"]})]}),he.jsxs("div",{className:"slider_row",children:[he.jsx("label",{htmlFor:"confidence",children:"confidence"}),he.jsx("input",{id:"confidence",type:"range",min:"0.1",max:"0.9",step:"0.05",value:h,onChange:R=>_(Number(R.target.value))}),he.jsx("span",{children:h.toFixed(2)})]}),he.jsx("div",{className:"video_container",style:{display:a?"none":"block"},children:he.jsx("video",{ref:e,playsInline:!0,muted:!0})}),he.jsx("div",{className:"canvas_container",style:{display:a?"block":"none"},children:he.jsx("canvas",{ref:t})}),he.jsxs("div",{className:"controls",children:[he.jsx("button",{type:"button",onClick:P,disabled:!!r,children:"start camera"}),he.jsx("button",{type:"button",onClick:F,disabled:!r,children:"capture"}),he.jsx("button",{type:"button",onClick:W,disabled:!a,children:"detect"}),he.jsx("button",{type:"button",onClick:O,disabled:S,children:"load model"}),he.jsx("button",{type:"button",className:"secondary",onClick:J,children:"clear cached model"})]}),S?he.jsxs("div",{children:[he.jsx("p",{children:"downloading model..."}),he.jsx("div",{className:"progress",children:he.jsx("div",{style:{width:T?`${T}%`:"20%"}})})]}):null]})]})}tS({immediate:!0,onNeedRefresh(){console.info("new content available; refresh when convenient.")},onOfflineReady(){console.info("app ready for offline use.")}});$u.createRoot(document.getElementById("root")).render(he.jsx(Ux.StrictMode,{children:he.jsx(uC,{})}));
