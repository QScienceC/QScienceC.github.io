var kx=Object.defineProperty;var Sx=(e,t,r)=>t in e?kx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var hp=(e,t,r)=>Sx(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function Cx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var n0={exports:{}},ho={},i0={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),Ex=Symbol.for("react.portal"),Tx=Symbol.for("react.fragment"),Ix=Symbol.for("react.strict_mode"),zx=Symbol.for("react.profiler"),Ax=Symbol.for("react.provider"),Ox=Symbol.for("react.context"),Rx=Symbol.for("react.forward_ref"),Nx=Symbol.for("react.suspense"),Mx=Symbol.for("react.memo"),Dx=Symbol.for("react.lazy"),mp=Symbol.iterator;function Px(e){return e===null||typeof e!="object"?null:(e=mp&&e[mp]||e["@@iterator"],typeof e=="function"?e:null)}var a0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function yi(e,t,r){this.props=e,this.context=t,this.refs=o0,this.updater=r||a0}yi.prototype.isReactComponent={};yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function l0(){}l0.prototype=yi.prototype;function Od(e,t,r){this.props=e,this.context=t,this.refs=o0,this.updater=r||a0}var Rd=Od.prototype=new l0;Rd.constructor=Od;s0(Rd,yi.prototype);Rd.isPureReactComponent=!0;var gp=Array.isArray,u0=Object.prototype.hasOwnProperty,Nd={current:null},d0={key:!0,ref:!0,__self:!0,__source:!0};function c0(e,t,r){var n,a={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)u0.call(t,n)&&!d0.hasOwnProperty(n)&&(a[n]=t[n]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<o){for(var u=Array(o),d=0;d<o;d++)u[d]=arguments[d+2];a.children=u}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)a[n]===void 0&&(a[n]=o[n]);return{$$typeof:Ea,type:e,key:i,ref:s,props:a,_owner:Nd.current}}function Bx(e,t){return{$$typeof:Ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Md(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea}function Lx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var yp=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lx(""+e.key):t.toString(36)}function ws(e,t,r,n,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ea:case Ex:s=!0}}if(s)return s=e,a=a(s),e=n===""?"."+el(s,0):n,gp(a)?(r="",e!=null&&(r=e.replace(yp,"$&/")+"/"),ws(a,t,r,"",function(d){return d})):a!=null&&(Md(a)&&(a=Bx(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(yp,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=n===""?".":n+":",gp(e))for(var o=0;o<e.length;o++){i=e[o];var u=n+el(i,o);s+=ws(i,t,r,u,a)}else if(u=Px(e),typeof u=="function")for(e=u.call(e),o=0;!(i=e.next()).done;)i=i.value,u=n+el(i,o++),s+=ws(i,t,r,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Va(e,t,r){if(e==null)return e;var n=[],a=0;return ws(e,n,"","",function(i){return t.call(r,i,a++)}),n}function Ux(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},$s={transition:null},jx={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:$s,ReactCurrentOwner:Nd};function f0(){throw Error("act(...) is not supported in production builds of React.")}_e.Children={map:Va,forEach:function(e,t,r){Va(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Va(e,function(){t++}),t},toArray:function(e){return Va(e,function(t){return t})||[]},only:function(e){if(!Md(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_e.Component=yi;_e.Fragment=Tx;_e.Profiler=zx;_e.PureComponent=Od;_e.StrictMode=Ix;_e.Suspense=Nx;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;_e.act=f0;_e.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=s0({},e.props),a=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Nd.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)u0.call(t,u)&&!d0.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){o=Array(u);for(var d=0;d<u;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:Ea,type:e.type,key:a,ref:i,props:n,_owner:s}};_e.createContext=function(e){return e={$$typeof:Ox,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ax,_context:e},e.Consumer=e};_e.createElement=c0;_e.createFactory=function(e){var t=c0.bind(null,e);return t.type=e,t};_e.createRef=function(){return{current:null}};_e.forwardRef=function(e){return{$$typeof:Rx,render:e}};_e.isValidElement=Md;_e.lazy=function(e){return{$$typeof:Dx,_payload:{_status:-1,_result:e},_init:Ux}};_e.memo=function(e,t){return{$$typeof:Mx,type:e,compare:t===void 0?null:t}};_e.startTransition=function(e){var t=$s.transition;$s.transition={};try{e()}finally{$s.transition=t}};_e.unstable_act=f0;_e.useCallback=function(e,t){return ht.current.useCallback(e,t)};_e.useContext=function(e){return ht.current.useContext(e)};_e.useDebugValue=function(){};_e.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};_e.useEffect=function(e,t){return ht.current.useEffect(e,t)};_e.useId=function(){return ht.current.useId()};_e.useImperativeHandle=function(e,t,r){return ht.current.useImperativeHandle(e,t,r)};_e.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};_e.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};_e.useMemo=function(e,t){return ht.current.useMemo(e,t)};_e.useReducer=function(e,t,r){return ht.current.useReducer(e,t,r)};_e.useRef=function(e){return ht.current.useRef(e)};_e.useState=function(e){return ht.current.useState(e)};_e.useSyncExternalStore=function(e,t,r){return ht.current.useSyncExternalStore(e,t,r)};_e.useTransition=function(){return ht.current.useTransition()};_e.version="18.3.1";i0.exports=_e;var Re=i0.exports;const Wx=Cx(Re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx=Re,Vx=Symbol.for("react.element"),qx=Symbol.for("react.fragment"),Hx=Object.prototype.hasOwnProperty,Gx=Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kx={key:!0,ref:!0,__self:!0,__source:!0};function p0(e,t,r){var n,a={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Hx.call(t,n)&&!Kx.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Vx,type:e,key:i,ref:s,props:a,_owner:Gx.current}}ho.Fragment=qx;ho.jsx=p0;ho.jsxs=p0;n0.exports=ho;var he=n0.exports,bu={},h0={exports:{}},zt={},m0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,F){var X=D.length;D.push(F);e:for(;0<X;){var R=X-1>>>1,W=D[R];if(0<a(W,F))D[R]=F,D[X]=W,X=R;else break e}}function r(D){return D.length===0?null:D[0]}function n(D){if(D.length===0)return null;var F=D[0],X=D.pop();if(X!==F){D[0]=X;e:for(var R=0,W=D.length,Y=W>>>1;R<Y;){var J=2*(R+1)-1,Ie=D[J],qe=J+1,j=D[qe];if(0>a(Ie,X))qe<W&&0>a(j,Ie)?(D[R]=j,D[qe]=X,R=qe):(D[R]=Ie,D[J]=X,R=J);else if(qe<W&&0>a(j,X))D[R]=j,D[qe]=X,R=qe;else break e}}return F}function a(D,F){var X=D.sortIndex-F.sortIndex;return X!==0?X:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var u=[],d=[],f=1,p=null,m=3,_=!1,w=!1,$=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var F=r(d);F!==null;){if(F.callback===null)n(d);else if(F.startTime<=D)n(d),F.sortIndex=F.expirationTime,t(u,F);else break;F=r(d)}}function k(D){if($=!1,x(D),!w)if(r(u)!==null)w=!0,G(C);else{var F=r(d);F!==null&&ue(k,F.startTime-D)}}function C(D,F){w=!1,$&&($=!1,y(z),z=-1),_=!0;var X=m;try{for(x(F),p=r(u);p!==null&&(!(p.expirationTime>F)||D&&!Z());){var R=p.callback;if(typeof R=="function"){p.callback=null,m=p.priorityLevel;var W=R(p.expirationTime<=F);F=e.unstable_now(),typeof W=="function"?p.callback=W:p===r(u)&&n(u),x(F)}else n(u);p=r(u)}if(p!==null)var Y=!0;else{var J=r(d);J!==null&&ue(k,J.startTime-F),Y=!1}return Y}finally{p=null,m=X,_=!1}}var T=!1,I=null,z=-1,O=5,L=-1;function Z(){return!(e.unstable_now()-L<O)}function Q(){if(I!==null){var D=e.unstable_now();L=D;var F=!0;try{F=I(!0,D)}finally{F?K():(T=!1,I=null)}}else T=!1}var K;if(typeof g=="function")K=function(){g(Q)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,oe=ce.port2;ce.port1.onmessage=Q,K=function(){oe.postMessage(null)}}else K=function(){S(Q,0)};function G(D){I=D,T||(T=!0,K())}function ue(D,F){z=S(function(){D(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){w||_||(w=!0,G(C))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(D){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var X=m;m=F;try{return D()}finally{m=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var X=m;m=D;try{return F()}finally{m=X}},e.unstable_scheduleCallback=function(D,F,X){var R=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?R+X:R):X=R,D){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=X+W,D={id:f++,callback:F,priorityLevel:D,startTime:X,expirationTime:W,sortIndex:-1},X>R?(D.sortIndex=X,t(d,D),r(u)===null&&D===r(d)&&($?(y(z),z=-1):$=!0,ue(k,X-R))):(D.sortIndex=W,t(u,D),w||_||(w=!0,G(C))),D},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(D){var F=m;return function(){var X=m;m=F;try{return D.apply(this,arguments)}finally{m=X}}}})(g0);m0.exports=g0;var Qx=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx=Re,It=Qx;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,la={};function Nn(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(la[e]=t,e=0;e<t.length;e++)y0.add(t[e])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,Zx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_p={},vp={};function Xx(e){return ku.call(vp,e)?!0:ku.call(_p,e)?!1:Zx.test(e)?vp[e]=!0:(_p[e]=!0,!1)}function Jx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eb(e,t,r,n){if(t===null||typeof t>"u"||Jx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,r,n,a,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Pd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Dd,Pd);nt[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Dd,Pd);nt[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Dd,Pd);nt[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bd(e,t,r,n){var a=nt.hasOwnProperty(t)?nt[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(eb(t,r,a,n)&&(r=null),n||a===null?Xx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Tr=Yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),Ud=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),wp=Symbol.iterator;function Si(e){return e===null||typeof e!="object"?null:(e=wp&&e[wp]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,tl;function Vi(e){if(tl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var rl=!1;function nl(e,t){if(!e||rl)return"";rl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=n.stack.split(`
`),s=a.length-1,o=i.length-1;1<=s&&0<=o&&a[s]!==i[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==i[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==i[o]){var u=`
`+a[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=o);break}}}finally{rl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Vi(e):""}function tb(e){switch(e.tag){case 5:return Vi(e.type);case 16:return Vi("Lazy");case 13:return Vi("Suspense");case 19:return Vi("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Tu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Wn:return"Portal";case Su:return"Profiler";case Ld:return"StrictMode";case Cu:return"Suspense";case Eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case v0:return(e.displayName||"Context")+".Consumer";case _0:return(e._context.displayName||"Context")+".Provider";case Ud:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jd:return t=e.displayName||null,t!==null?t:Tu(e.type)||"Memo";case Br:t=e._payload,e=e._init;try{return Tu(e(t))}catch{}}return null}function rb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(t);case 8:return t===Ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nb(e){var t=$0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ha(e){e._valueTracker||(e._valueTracker=nb(e))}function x0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=$0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Iu(e,t){var r=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $p(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Xr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function b0(e,t){t=t.checked,t!=null&&Bd(e,"checked",t,!1)}function zu(e,t){b0(e,t);var r=Xr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Au(e,t.type,r):t.hasOwnProperty("defaultValue")&&Au(e,t.type,Xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xp(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Au(e,t,r){(t!=="number"||Ns(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var qi=Array.isArray;function ri(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Xr(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ou(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bp(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(H(92));if(qi(r)){if(1<r.length)throw Error(H(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Xr(r)}}function k0(e,t){var r=Xr(t.value),n=Xr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function kp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function S0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ru(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?S0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ga,C0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ua(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ib=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(e){ib.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xi[t]=Xi[e]})});function E0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Xi.hasOwnProperty(e)&&Xi[e]?(""+t).trim():t+"px"}function T0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=E0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var ab=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(e,t){if(t){if(ab[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function Mu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=null;function Wd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pu=null,ni=null,ii=null;function Sp(e){if(e=za(e)){if(typeof Pu!="function")throw Error(H(280));var t=e.stateNode;t&&(t=vo(t),Pu(e.stateNode,e.type,t))}}function I0(e){ni?ii?ii.push(e):ii=[e]:ni=e}function z0(){if(ni){var e=ni,t=ii;if(ii=ni=null,Sp(e),t)for(e=0;e<t.length;e++)Sp(t[e])}}function A0(e,t){return e(t)}function O0(){}var il=!1;function R0(e,t,r){if(il)return e(t,r);il=!0;try{return A0(e,t,r)}finally{il=!1,(ni!==null||ii!==null)&&(O0(),z0())}}function da(e,t){var r=e.stateNode;if(r===null)return null;var n=vo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(H(231,t,typeof r));return r}var Bu=!1;if(kr)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{Bu=!1}function sb(e,t,r,n,a,i,s,o,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(f){this.onError(f)}}var Ji=!1,Ms=null,Ds=!1,Lu=null,ob={onError:function(e){Ji=!0,Ms=e}};function lb(e,t,r,n,a,i,s,o,u){Ji=!1,Ms=null,sb.apply(ob,arguments)}function ub(e,t,r,n,a,i,s,o,u){if(lb.apply(this,arguments),Ji){if(Ji){var d=Ms;Ji=!1,Ms=null}else throw Error(H(198));Ds||(Ds=!0,Lu=d)}}function Mn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function N0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cp(e){if(Mn(e)!==e)throw Error(H(188))}function db(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(H(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return Cp(a),e;if(i===n)return Cp(a),t;i=i.sibling}throw Error(H(188))}if(r.return!==n.return)r=a,n=i;else{for(var s=!1,o=a.child;o;){if(o===r){s=!0,r=a,n=i;break}if(o===n){s=!0,n=a,r=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===r){s=!0,r=i,n=a;break}if(o===n){s=!0,n=i,r=a;break}o=o.sibling}if(!s)throw Error(H(189))}}if(r.alternate!==n)throw Error(H(190))}if(r.tag!==3)throw Error(H(188));return r.stateNode.current===r?e:t}function M0(e){return e=db(e),e!==null?D0(e):null}function D0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=D0(e);if(t!==null)return t;e=e.sibling}return null}var P0=It.unstable_scheduleCallback,Ep=It.unstable_cancelCallback,cb=It.unstable_shouldYield,fb=It.unstable_requestPaint,Ve=It.unstable_now,pb=It.unstable_getCurrentPriorityLevel,Fd=It.unstable_ImmediatePriority,B0=It.unstable_UserBlockingPriority,Ps=It.unstable_NormalPriority,hb=It.unstable_LowPriority,L0=It.unstable_IdlePriority,mo=null,or=null;function mb(e){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:_b,gb=Math.log,yb=Math.LN2;function _b(e){return e>>>=0,e===0?32:31-(gb(e)/yb|0)|0}var Ka=64,Qa=4194304;function Hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~a;o!==0?n=Hi(o):(i&=s,i!==0&&(n=Hi(i)))}else s=r&~a,s!==0?n=Hi(s):i!==0&&(n=Hi(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Zt(t),a=1<<r,n|=e[r],t&=~a;return n}function vb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wb(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Zt(i),o=1<<s,u=a[s];u===-1?(!(o&r)||o&n)&&(a[s]=vb(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}}function Uu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function U0(){var e=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),e}function al(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ta(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=r}function $b(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Zt(r),i=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~i}}function Vd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Zt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var Ee=0;function j0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var W0,qd,F0,V0,q0,ju=!1,Ya=[],Vr=null,qr=null,Hr=null,ca=new Map,fa=new Map,Ur=[],xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tp(e,t){switch(e){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":ca.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(t.pointerId)}}function Ei(e,t,r,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=za(t),t!==null&&qd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function bb(e,t,r,n,a){switch(t){case"focusin":return Vr=Ei(Vr,e,t,r,n,a),!0;case"dragenter":return qr=Ei(qr,e,t,r,n,a),!0;case"mouseover":return Hr=Ei(Hr,e,t,r,n,a),!0;case"pointerover":var i=a.pointerId;return ca.set(i,Ei(ca.get(i)||null,e,t,r,n,a)),!0;case"gotpointercapture":return i=a.pointerId,fa.set(i,Ei(fa.get(i)||null,e,t,r,n,a)),!0}return!1}function H0(e){var t=vn(e.target);if(t!==null){var r=Mn(t);if(r!==null){if(t=r.tag,t===13){if(t=N0(r),t!==null){e.blockedOn=t,q0(e.priority,function(){F0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Wu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Du=n,r.target.dispatchEvent(n),Du=null}else return t=za(r),t!==null&&qd(t),e.blockedOn=r,!1;t.shift()}return!0}function Ip(e,t,r){xs(e)&&r.delete(t)}function kb(){ju=!1,Vr!==null&&xs(Vr)&&(Vr=null),qr!==null&&xs(qr)&&(qr=null),Hr!==null&&xs(Hr)&&(Hr=null),ca.forEach(Ip),fa.forEach(Ip)}function Ti(e,t){e.blockedOn===t&&(e.blockedOn=null,ju||(ju=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,kb)))}function pa(e){function t(a){return Ti(a,e)}if(0<Ya.length){Ti(Ya[0],e);for(var r=1;r<Ya.length;r++){var n=Ya[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Vr!==null&&Ti(Vr,e),qr!==null&&Ti(qr,e),Hr!==null&&Ti(Hr,e),ca.forEach(t),fa.forEach(t),r=0;r<Ur.length;r++)n=Ur[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Ur.length&&(r=Ur[0],r.blockedOn===null);)H0(r),r.blockedOn===null&&Ur.shift()}var ai=Tr.ReactCurrentBatchConfig,Ls=!0;function Sb(e,t,r,n){var a=Ee,i=ai.transition;ai.transition=null;try{Ee=1,Hd(e,t,r,n)}finally{Ee=a,ai.transition=i}}function Cb(e,t,r,n){var a=Ee,i=ai.transition;ai.transition=null;try{Ee=4,Hd(e,t,r,n)}finally{Ee=a,ai.transition=i}}function Hd(e,t,r,n){if(Ls){var a=Wu(e,t,r,n);if(a===null)ml(e,t,n,Us,r),Tp(e,n);else if(bb(a,e,t,r,n))n.stopPropagation();else if(Tp(e,n),t&4&&-1<xb.indexOf(e)){for(;a!==null;){var i=za(a);if(i!==null&&W0(i),i=Wu(e,t,r,n),i===null&&ml(e,t,n,Us,r),i===a)break;a=i}a!==null&&n.stopPropagation()}else ml(e,t,n,null,r)}}var Us=null;function Wu(e,t,r,n){if(Us=null,e=Wd(n),e=vn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=N0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Us=e,null}function G0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pb()){case Fd:return 1;case B0:return 4;case Ps:case hb:return 16;case L0:return 536870912;default:return 16}default:return 16}}var Wr=null,Gd=null,bs=null;function K0(){if(bs)return bs;var e,t=Gd,r=t.length,n,a="value"in Wr?Wr.value:Wr.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===a[i-n];n++);return bs=a.slice(e,1<n?1-n:void 0)}function ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Za(){return!0}function zp(){return!1}function At(e){function t(r,n,a,i,s){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Za:zp,this.isPropagationStopped=zp,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),t}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kd=At(_i),Ia=Le({},_i,{view:0,detail:0}),Eb=At(Ia),sl,ol,Ii,go=Le({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(sl=e.screenX-Ii.screenX,ol=e.screenY-Ii.screenY):ol=sl=0,Ii=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Ap=At(go),Tb=Le({},go,{dataTransfer:0}),Ib=At(Tb),zb=Le({},Ia,{relatedTarget:0}),ll=At(zb),Ab=Le({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),Ob=At(Ab),Rb=Le({},_i,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nb=At(Rb),Mb=Le({},_i,{data:0}),Op=At(Mb),Db={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bb[e])?!!t[e]:!1}function Qd(){return Lb}var Ub=Le({},Ia,{key:function(e){if(e.key){var t=Db[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qd,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jb=At(Ub),Wb=Le({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=At(Wb),Fb=Le({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qd}),Vb=At(Fb),qb=Le({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hb=At(qb),Gb=Le({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kb=At(Gb),Qb=[9,13,27,32],Yd=kr&&"CompositionEvent"in window,ea=null;kr&&"documentMode"in document&&(ea=document.documentMode);var Yb=kr&&"TextEvent"in window&&!ea,Q0=kr&&(!Yd||ea&&8<ea&&11>=ea),Np=" ",Mp=!1;function Y0(e,t){switch(e){case"keyup":return Qb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Zb(e,t){switch(e){case"compositionend":return Z0(t);case"keypress":return t.which!==32?null:(Mp=!0,Np);case"textInput":return e=t.data,e===Np&&Mp?null:e;default:return null}}function Xb(e,t){if(Vn)return e==="compositionend"||!Yd&&Y0(e,t)?(e=K0(),bs=Gd=Wr=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Q0&&t.locale!=="ko"?null:t.data;default:return null}}var Jb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jb[e.type]:t==="textarea"}function X0(e,t,r,n){I0(n),t=js(t,"onChange"),0<t.length&&(r=new Kd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var ta=null,ha=null;function e3(e){u_(e,0)}function yo(e){var t=Gn(e);if(x0(t))return e}function t3(e,t){if(e==="change")return t}var J0=!1;if(kr){var ul;if(kr){var dl="oninput"in document;if(!dl){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),dl=typeof Pp.oninput=="function"}ul=dl}else ul=!1;J0=ul&&(!document.documentMode||9<document.documentMode)}function Bp(){ta&&(ta.detachEvent("onpropertychange",e_),ha=ta=null)}function e_(e){if(e.propertyName==="value"&&yo(ha)){var t=[];X0(t,ha,e,Wd(e)),R0(e3,t)}}function r3(e,t,r){e==="focusin"?(Bp(),ta=t,ha=r,ta.attachEvent("onpropertychange",e_)):e==="focusout"&&Bp()}function n3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(ha)}function i3(e,t){if(e==="click")return yo(t)}function a3(e,t){if(e==="input"||e==="change")return yo(t)}function s3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var er=typeof Object.is=="function"?Object.is:s3;function ma(e,t){if(er(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!ku.call(t,a)||!er(e[a],t[a]))return!1}return!0}function Lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Up(e,t){var r=Lp(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Lp(r)}}function t_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?t_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function r_(){for(var e=window,t=Ns();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ns(e.document)}return t}function Zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function o3(e){var t=r_(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&t_(r.ownerDocument.documentElement,r)){if(n!==null&&Zd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(n.start,a);n=n.end===void 0?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=Up(r,i);var s=Up(r,n);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var l3=kr&&"documentMode"in document&&11>=document.documentMode,qn=null,Fu=null,ra=null,Vu=!1;function jp(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vu||qn==null||qn!==Ns(n)||(n=qn,"selectionStart"in n&&Zd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ra&&ma(ra,n)||(ra=n,n=js(Fu,"onSelect"),0<n.length&&(t=new Kd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=qn)))}function Xa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Hn={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},cl={},n_={};kr&&(n_=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function _o(e){if(cl[e])return cl[e];if(!Hn[e])return e;var t=Hn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in n_)return cl[e]=t[r];return e}var i_=_o("animationend"),a_=_o("animationiteration"),s_=_o("animationstart"),o_=_o("transitionend"),l_=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){l_.set(e,t),Nn(t,[e])}for(var fl=0;fl<Wp.length;fl++){var pl=Wp[fl],u3=pl.toLowerCase(),d3=pl[0].toUpperCase()+pl.slice(1);rn(u3,"on"+d3)}rn(i_,"onAnimationEnd");rn(a_,"onAnimationIteration");rn(s_,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(o_,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function Fp(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,ub(n,t,void 0,e),e.currentTarget=null}function u_(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],u=o.instance,d=o.currentTarget;if(o=o.listener,u!==i&&a.isPropagationStopped())break e;Fp(a,o,d),i=u}else for(s=0;s<n.length;s++){if(o=n[s],u=o.instance,d=o.currentTarget,o=o.listener,u!==i&&a.isPropagationStopped())break e;Fp(a,o,d),i=u}}}if(Ds)throw e=Lu,Ds=!1,Lu=null,e}function Oe(e,t){var r=t[Qu];r===void 0&&(r=t[Qu]=new Set);var n=e+"__bubble";r.has(n)||(d_(t,e,2,!1),r.add(n))}function hl(e,t,r){var n=0;t&&(n|=4),d_(r,e,n,t)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[Ja]){e[Ja]=!0,y0.forEach(function(r){r!=="selectionchange"&&(c3.has(r)||hl(r,!1,e),hl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ja]||(t[Ja]=!0,hl("selectionchange",!1,t))}}function d_(e,t,r,n){switch(G0(t)){case 1:var a=Sb;break;case 4:a=Cb;break;default:a=Hd}r=a.bind(null,t,r,e),a=void 0,!Bu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function ml(e,t,r,n,a){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;s=s.return}for(;o!==null;){if(s=vn(o),s===null)return;if(u=s.tag,u===5||u===6){n=i=s;continue e}o=o.parentNode}}n=n.return}R0(function(){var d=i,f=Wd(r),p=[];e:{var m=l_.get(e);if(m!==void 0){var _=Kd,w=e;switch(e){case"keypress":if(ks(r)===0)break e;case"keydown":case"keyup":_=jb;break;case"focusin":w="focus",_=ll;break;case"focusout":w="blur",_=ll;break;case"beforeblur":case"afterblur":_=ll;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Ib;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Vb;break;case i_:case a_:case s_:_=Ob;break;case o_:_=Hb;break;case"scroll":_=Eb;break;case"wheel":_=Kb;break;case"copy":case"cut":case"paste":_=Nb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Rp}var $=(t&4)!==0,S=!$&&e==="scroll",y=$?m!==null?m+"Capture":null:m;$=[];for(var g=d,x;g!==null;){x=g;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,y!==null&&(k=da(g,y),k!=null&&$.push(ya(g,k,x)))),S)break;g=g.return}0<$.length&&(m=new _(m,w,null,r,f),p.push({event:m,listeners:$}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",m&&r!==Du&&(w=r.relatedTarget||r.fromElement)&&(vn(w)||w[Sr]))break e;if((_||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,_?(w=r.relatedTarget||r.toElement,_=d,w=w?vn(w):null,w!==null&&(S=Mn(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=d),_!==w)){if($=Ap,k="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=Rp,k="onPointerLeave",y="onPointerEnter",g="pointer"),S=_==null?m:Gn(_),x=w==null?m:Gn(w),m=new $(k,g+"leave",_,r,f),m.target=S,m.relatedTarget=x,k=null,vn(f)===d&&($=new $(y,g+"enter",w,r,f),$.target=x,$.relatedTarget=S,k=$),S=k,_&&w)t:{for($=_,y=w,g=0,x=$;x;x=Un(x))g++;for(x=0,k=y;k;k=Un(k))x++;for(;0<g-x;)$=Un($),g--;for(;0<x-g;)y=Un(y),x--;for(;g--;){if($===y||y!==null&&$===y.alternate)break t;$=Un($),y=Un(y)}$=null}else $=null;_!==null&&Vp(p,m,_,$,!1),w!==null&&S!==null&&Vp(p,S,w,$,!0)}}e:{if(m=d?Gn(d):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var C=t3;else if(Dp(m))if(J0)C=a3;else{C=n3;var T=r3}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=i3);if(C&&(C=C(e,d))){X0(p,C,r,f);break e}T&&T(e,m,d),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Au(m,"number",m.value)}switch(T=d?Gn(d):window,e){case"focusin":(Dp(T)||T.contentEditable==="true")&&(qn=T,Fu=d,ra=null);break;case"focusout":ra=Fu=qn=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,jp(p,r,f);break;case"selectionchange":if(l3)break;case"keydown":case"keyup":jp(p,r,f)}var I;if(Yd)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Vn?Y0(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Q0&&r.locale!=="ko"&&(Vn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Vn&&(I=K0()):(Wr=f,Gd="value"in Wr?Wr.value:Wr.textContent,Vn=!0)),T=js(d,z),0<T.length&&(z=new Op(z,e,null,r,f),p.push({event:z,listeners:T}),I?z.data=I:(I=Z0(r),I!==null&&(z.data=I)))),(I=Yb?Zb(e,r):Xb(e,r))&&(d=js(d,"onBeforeInput"),0<d.length&&(f=new Op("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:d}),f.data=I))}u_(p,t)})}function ya(e,t,r){return{instance:e,listener:t,currentTarget:r}}function js(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=da(e,r),i!=null&&n.unshift(ya(e,i,a)),i=da(e,t),i!=null&&n.push(ya(e,i,a))),e=e.return}return n}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vp(e,t,r,n,a){for(var i=t._reactName,s=[];r!==null&&r!==n;){var o=r,u=o.alternate,d=o.stateNode;if(u!==null&&u===n)break;o.tag===5&&d!==null&&(o=d,a?(u=da(r,i),u!=null&&s.unshift(ya(r,u,o))):a||(u=da(r,i),u!=null&&s.push(ya(r,u,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var f3=/\r\n?/g,p3=/\u0000|\uFFFD/g;function qp(e){return(typeof e=="string"?e:""+e).replace(f3,`
`).replace(p3,"")}function es(e,t,r){if(t=qp(t),qp(e)!==t&&r)throw Error(H(425))}function Ws(){}var qu=null,Hu=null;function Gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,h3=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,m3=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(e){return Hp.resolve(null).then(e).catch(g3)}:Ku;function g3(e){setTimeout(function(){throw e})}function gl(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),pa(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);pa(t)}function Gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var vi=Math.random().toString(36).slice(2),sr="__reactFiber$"+vi,_a="__reactProps$"+vi,Sr="__reactContainer$"+vi,Qu="__reactEvents$"+vi,y3="__reactListeners$"+vi,_3="__reactHandles$"+vi;function vn(e){var t=e[sr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Sr]||r[sr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Gp(e);e!==null;){if(r=e[sr])return r;e=Gp(e)}return t}e=r,r=e.parentNode}return null}function za(e){return e=e[sr]||e[Sr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function vo(e){return e[_a]||null}var Yu=[],Kn=-1;function nn(e){return{current:e}}function Ne(e){0>Kn||(e.current=Yu[Kn],Yu[Kn]=null,Kn--)}function ze(e,t){Kn++,Yu[Kn]=e.current,e.current=t}var Jr={},lt=nn(Jr),vt=nn(!1),Cn=Jr;function ui(e,t){var r=e.type.contextTypes;if(!r)return Jr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function wt(e){return e=e.childContextTypes,e!=null}function Fs(){Ne(vt),Ne(lt)}function Kp(e,t,r){if(lt.current!==Jr)throw Error(H(168));ze(lt,t),ze(vt,r)}function c_(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(H(108,rb(e)||"Unknown",a));return Le({},r,n)}function Vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jr,Cn=lt.current,ze(lt,e),ze(vt,vt.current),!0}function Qp(e,t,r){var n=e.stateNode;if(!n)throw Error(H(169));r?(e=c_(e,t,Cn),n.__reactInternalMemoizedMergedChildContext=e,Ne(vt),Ne(lt),ze(lt,e)):Ne(vt),ze(vt,r)}var vr=null,wo=!1,yl=!1;function f_(e){vr===null?vr=[e]:vr.push(e)}function v3(e){wo=!0,f_(e)}function an(){if(!yl&&vr!==null){yl=!0;var e=0,t=Ee;try{var r=vr;for(Ee=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}vr=null,wo=!1}catch(a){throw vr!==null&&(vr=vr.slice(e+1)),P0(Fd,an),a}finally{Ee=t,yl=!1}}return null}var Qn=[],Yn=0,qs=null,Hs=0,Rt=[],Nt=0,En=null,$r=1,xr="";function hn(e,t){Qn[Yn++]=Hs,Qn[Yn++]=qs,qs=e,Hs=t}function p_(e,t,r){Rt[Nt++]=$r,Rt[Nt++]=xr,Rt[Nt++]=En,En=e;var n=$r;e=xr;var a=32-Zt(n)-1;n&=~(1<<a),r+=1;var i=32-Zt(t)+a;if(30<i){var s=a-a%5;i=(n&(1<<s)-1).toString(32),n>>=s,a-=s,$r=1<<32-Zt(t)+a|r<<a|n,xr=i+e}else $r=1<<i|r<<a|n,xr=e}function Xd(e){e.return!==null&&(hn(e,1),p_(e,1,0))}function Jd(e){for(;e===qs;)qs=Qn[--Yn],Qn[Yn]=null,Hs=Qn[--Yn],Qn[Yn]=null;for(;e===En;)En=Rt[--Nt],Rt[Nt]=null,xr=Rt[--Nt],Rt[Nt]=null,$r=Rt[--Nt],Rt[Nt]=null}var Et=null,Ct=null,Me=!1,Kt=null;function h_(e,t){var r=Mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Yp(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,Ct=Gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=En!==null?{id:$r,overflow:xr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Et=e,Ct=null,!0):!1;default:return!1}}function Zu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xu(e){if(Me){var t=Ct;if(t){var r=t;if(!Yp(e,t)){if(Zu(e))throw Error(H(418));t=Gr(r.nextSibling);var n=Et;t&&Yp(e,t)?h_(n,r):(e.flags=e.flags&-4097|2,Me=!1,Et=e)}}else{if(Zu(e))throw Error(H(418));e.flags=e.flags&-4097|2,Me=!1,Et=e}}}function Zp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function ts(e){if(e!==Et)return!1;if(!Me)return Zp(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gu(e.type,e.memoizedProps)),t&&(t=Ct)){if(Zu(e))throw m_(),Error(H(418));for(;t;)h_(e,t),t=Gr(t.nextSibling)}if(Zp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ct=Gr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=Et?Gr(e.stateNode.nextSibling):null;return!0}function m_(){for(var e=Ct;e;)e=Gr(e.nextSibling)}function di(){Ct=Et=null,Me=!1}function ec(e){Kt===null?Kt=[e]:Kt.push(e)}var w3=Tr.ReactCurrentBatchConfig;function zi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(H(309));var n=r.stateNode}if(!n)throw Error(H(147,e));var a=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=a.refs;s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(H(284));if(!r._owner)throw Error(H(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xp(e){var t=e._init;return t(e._payload)}function g_(e){function t(y,g){if(e){var x=y.deletions;x===null?(y.deletions=[g],y.flags|=16):x.push(g)}}function r(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function n(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function a(y,g){return y=Zr(y,g),y.index=0,y.sibling=null,y}function i(y,g,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<g?(y.flags|=2,g):x):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function o(y,g,x,k){return g===null||g.tag!==6?(g=kl(x,y.mode,k),g.return=y,g):(g=a(g,x),g.return=y,g)}function u(y,g,x,k){var C=x.type;return C===Fn?f(y,g,x.props.children,k,x.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Br&&Xp(C)===g.type)?(k=a(g,x.props),k.ref=zi(y,g,x),k.return=y,k):(k=As(x.type,x.key,x.props,null,y.mode,k),k.ref=zi(y,g,x),k.return=y,k)}function d(y,g,x,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Sl(x,y.mode,k),g.return=y,g):(g=a(g,x.children||[]),g.return=y,g)}function f(y,g,x,k,C){return g===null||g.tag!==7?(g=bn(x,y.mode,k,C),g.return=y,g):(g=a(g,x),g.return=y,g)}function p(y,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=kl(""+g,y.mode,x),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qa:return x=As(g.type,g.key,g.props,null,y.mode,x),x.ref=zi(y,null,g),x.return=y,x;case Wn:return g=Sl(g,y.mode,x),g.return=y,g;case Br:var k=g._init;return p(y,k(g._payload),x)}if(qi(g)||Si(g))return g=bn(g,y.mode,x,null),g.return=y,g;rs(y,g)}return null}function m(y,g,x,k){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:o(y,g,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qa:return x.key===C?u(y,g,x,k):null;case Wn:return x.key===C?d(y,g,x,k):null;case Br:return C=x._init,m(y,g,C(x._payload),k)}if(qi(x)||Si(x))return C!==null?null:f(y,g,x,k,null);rs(y,x)}return null}function _(y,g,x,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(x)||null,o(g,y,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case qa:return y=y.get(k.key===null?x:k.key)||null,u(g,y,k,C);case Wn:return y=y.get(k.key===null?x:k.key)||null,d(g,y,k,C);case Br:var T=k._init;return _(y,g,x,T(k._payload),C)}if(qi(k)||Si(k))return y=y.get(x)||null,f(g,y,k,C,null);rs(g,k)}return null}function w(y,g,x,k){for(var C=null,T=null,I=g,z=g=0,O=null;I!==null&&z<x.length;z++){I.index>z?(O=I,I=null):O=I.sibling;var L=m(y,I,x[z],k);if(L===null){I===null&&(I=O);break}e&&I&&L.alternate===null&&t(y,I),g=i(L,g,z),T===null?C=L:T.sibling=L,T=L,I=O}if(z===x.length)return r(y,I),Me&&hn(y,z),C;if(I===null){for(;z<x.length;z++)I=p(y,x[z],k),I!==null&&(g=i(I,g,z),T===null?C=I:T.sibling=I,T=I);return Me&&hn(y,z),C}for(I=n(y,I);z<x.length;z++)O=_(I,y,z,x[z],k),O!==null&&(e&&O.alternate!==null&&I.delete(O.key===null?z:O.key),g=i(O,g,z),T===null?C=O:T.sibling=O,T=O);return e&&I.forEach(function(Z){return t(y,Z)}),Me&&hn(y,z),C}function $(y,g,x,k){var C=Si(x);if(typeof C!="function")throw Error(H(150));if(x=C.call(x),x==null)throw Error(H(151));for(var T=C=null,I=g,z=g=0,O=null,L=x.next();I!==null&&!L.done;z++,L=x.next()){I.index>z?(O=I,I=null):O=I.sibling;var Z=m(y,I,L.value,k);if(Z===null){I===null&&(I=O);break}e&&I&&Z.alternate===null&&t(y,I),g=i(Z,g,z),T===null?C=Z:T.sibling=Z,T=Z,I=O}if(L.done)return r(y,I),Me&&hn(y,z),C;if(I===null){for(;!L.done;z++,L=x.next())L=p(y,L.value,k),L!==null&&(g=i(L,g,z),T===null?C=L:T.sibling=L,T=L);return Me&&hn(y,z),C}for(I=n(y,I);!L.done;z++,L=x.next())L=_(I,y,z,L.value,k),L!==null&&(e&&L.alternate!==null&&I.delete(L.key===null?z:L.key),g=i(L,g,z),T===null?C=L:T.sibling=L,T=L);return e&&I.forEach(function(Q){return t(y,Q)}),Me&&hn(y,z),C}function S(y,g,x,k){if(typeof x=="object"&&x!==null&&x.type===Fn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case qa:e:{for(var C=x.key,T=g;T!==null;){if(T.key===C){if(C=x.type,C===Fn){if(T.tag===7){r(y,T.sibling),g=a(T,x.props.children),g.return=y,y=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Br&&Xp(C)===T.type){r(y,T.sibling),g=a(T,x.props),g.ref=zi(y,T,x),g.return=y,y=g;break e}r(y,T);break}else t(y,T);T=T.sibling}x.type===Fn?(g=bn(x.props.children,y.mode,k,x.key),g.return=y,y=g):(k=As(x.type,x.key,x.props,null,y.mode,k),k.ref=zi(y,g,x),k.return=y,y=k)}return s(y);case Wn:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){r(y,g.sibling),g=a(g,x.children||[]),g.return=y,y=g;break e}else{r(y,g);break}else t(y,g);g=g.sibling}g=Sl(x,y.mode,k),g.return=y,y=g}return s(y);case Br:return T=x._init,S(y,g,T(x._payload),k)}if(qi(x))return w(y,g,x,k);if(Si(x))return $(y,g,x,k);rs(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(r(y,g.sibling),g=a(g,x),g.return=y,y=g):(r(y,g),g=kl(x,y.mode,k),g.return=y,y=g),s(y)):r(y,g)}return S}var ci=g_(!0),y_=g_(!1),Gs=nn(null),Ks=null,Zn=null,tc=null;function rc(){tc=Zn=Ks=null}function nc(e){var t=Gs.current;Ne(Gs),e._currentValue=t}function Ju(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function si(e,t){Ks=e,tc=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_t=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(tc!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(Ks===null)throw Error(H(308));Zn=e,Ks.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var wn=null;function ic(e){wn===null?wn=[e]:wn.push(e)}function __(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,ic(t)):(r.next=a.next,a.next=r),t.interleaved=r,Cr(e,n)}function Cr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Lr=!1;function ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,$e&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Cr(e,r)}return a=n.interleaved,a===null?(t.next=t,ic(n)):(t.next=a.next,a.next=t),n.interleaved=t,Cr(e,r)}function Ss(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Vd(e,r)}}function Jp(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Qs(e,t,r,n){var a=e.updateQueue;Lr=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var u=o,d=u.next;u.next=null,s===null?i=d:s.next=d,s=u;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=d:o.next=d,f.lastBaseUpdate=u))}if(i!==null){var p=a.baseState;s=0,f=d=u=null,o=i;do{var m=o.lane,_=o.eventTime;if((n&m)===m){f!==null&&(f=f.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,$=o;switch(m=t,_=r,$.tag){case 1:if(w=$.payload,typeof w=="function"){p=w.call(_,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=$.payload,m=typeof w=="function"?w.call(_,p,m):w,m==null)break e;p=Le({},p,m);break e;case 2:Lr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else _={eventTime:_,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(d=f=_,u=p):f=f.next=_,s|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(f===null&&(u=p),a.baseState=u,a.firstBaseUpdate=d,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);In|=s,e.lanes=s,e.memoizedState=p}}function eh(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(H(191,a));a.call(n)}}}var Aa={},lr=nn(Aa),va=nn(Aa),wa=nn(Aa);function $n(e){if(e===Aa)throw Error(H(174));return e}function sc(e,t){switch(ze(wa,t),ze(va,e),ze(lr,Aa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ru(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ru(t,e)}Ne(lr),ze(lr,t)}function fi(){Ne(lr),Ne(va),Ne(wa)}function w_(e){$n(wa.current);var t=$n(lr.current),r=Ru(t,e.type);t!==r&&(ze(va,e),ze(lr,r))}function oc(e){va.current===e&&(Ne(lr),Ne(va))}var Pe=nn(0);function Ys(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function lc(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var Cs=Tr.ReactCurrentDispatcher,vl=Tr.ReactCurrentBatchConfig,Tn=0,Be=null,Ke=null,Je=null,Zs=!1,na=!1,$a=0,$3=0;function it(){throw Error(H(321))}function uc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!er(e[r],t[r]))return!1;return!0}function dc(e,t,r,n,a,i){if(Tn=i,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cs.current=e===null||e.memoizedState===null?S3:C3,e=r(n,a),na){i=0;do{if(na=!1,$a=0,25<=i)throw Error(H(301));i+=1,Je=Ke=null,t.updateQueue=null,Cs.current=E3,e=r(n,a)}while(na)}if(Cs.current=Xs,t=Ke!==null&&Ke.next!==null,Tn=0,Je=Ke=Be=null,Zs=!1,t)throw Error(H(300));return e}function cc(){var e=$a!==0;return $a=0,e}function ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Be.memoizedState=Je=e:Je=Je.next=e,Je}function Bt(){if(Ke===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Je===null?Be.memoizedState:Je.next;if(t!==null)Je=t,Ke=e;else{if(e===null)throw Error(H(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?Be.memoizedState=Je=e:Je=Je.next=e}return Je}function xa(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=Bt(),r=t.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=e;var n=Ke,a=n.baseQueue,i=r.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}n.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,n=n.baseState;var o=s=null,u=null,d=i;do{var f=d.lane;if((Tn&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(o=u=p,s=n):u=u.next=p,Be.lanes|=f,In|=f}d=d.next}while(d!==null&&d!==i);u===null?s=n:u.next=o,er(n,t.memoizedState)||(_t=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Be.lanes|=i,In|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function $l(e){var t=Bt(),r=t.queue;if(r===null)throw Error(H(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var s=a=a.next;do i=e(i,s.action),s=s.next;while(s!==a);er(i,t.memoizedState)||(_t=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function $_(){}function x_(e,t){var r=Be,n=Bt(),a=t(),i=!er(n.memoizedState,a);if(i&&(n.memoizedState=a,_t=!0),n=n.queue,fc(S_.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||Je!==null&&Je.memoizedState.tag&1){if(r.flags|=2048,ba(9,k_.bind(null,r,n,a,t),void 0,null),et===null)throw Error(H(349));Tn&30||b_(r,t,a)}return a}function b_(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function k_(e,t,r,n){t.value=r,t.getSnapshot=n,C_(t)&&E_(e)}function S_(e,t,r){return r(function(){C_(t)&&E_(e)})}function C_(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!er(e,r)}catch{return!0}}function E_(e){var t=Cr(e,1);t!==null&&Xt(t,e,1,-1)}function th(e){var t=ar();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=k3.bind(null,Be,e),[t.memoizedState,e]}function ba(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function T_(){return Bt().memoizedState}function Es(e,t,r,n){var a=ar();Be.flags|=e,a.memoizedState=ba(1|t,r,void 0,n===void 0?null:n)}function $o(e,t,r,n){var a=Bt();n=n===void 0?null:n;var i=void 0;if(Ke!==null){var s=Ke.memoizedState;if(i=s.destroy,n!==null&&uc(n,s.deps)){a.memoizedState=ba(t,r,i,n);return}}Be.flags|=e,a.memoizedState=ba(1|t,r,i,n)}function rh(e,t){return Es(8390656,8,e,t)}function fc(e,t){return $o(2048,8,e,t)}function I_(e,t){return $o(4,2,e,t)}function z_(e,t){return $o(4,4,e,t)}function A_(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function O_(e,t,r){return r=r!=null?r.concat([e]):null,$o(4,4,A_.bind(null,t,e),r)}function pc(){}function R_(e,t){var r=Bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&uc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function N_(e,t){var r=Bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&uc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function M_(e,t,r){return Tn&21?(er(r,t)||(r=U0(),Be.lanes|=r,In|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_t=!0),e.memoizedState=r)}function x3(e,t){var r=Ee;Ee=r!==0&&4>r?r:4,e(!0);var n=vl.transition;vl.transition={};try{e(!1),t()}finally{Ee=r,vl.transition=n}}function D_(){return Bt().memoizedState}function b3(e,t,r){var n=Yr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},P_(e))B_(t,r);else if(r=__(e,t,r,n),r!==null){var a=pt();Xt(r,e,n,a),L_(r,t,n)}}function k3(e,t,r){var n=Yr(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(P_(e))B_(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,r);if(a.hasEagerState=!0,a.eagerState=o,er(o,s)){var u=t.interleaved;u===null?(a.next=a,ic(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}r=__(e,t,a,n),r!==null&&(a=pt(),Xt(r,e,n,a),L_(r,t,n))}}function P_(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function B_(e,t){na=Zs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function L_(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Vd(e,r)}}var Xs={readContext:Pt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},S3={readContext:Pt,useCallback:function(e,t){return ar().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:rh,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Es(4194308,4,A_.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){return Es(4,2,e,t)},useMemo:function(e,t){var r=ar();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ar();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=b3.bind(null,Be,e),[n.memoizedState,e]},useRef:function(e){var t=ar();return e={current:e},t.memoizedState=e},useState:th,useDebugValue:pc,useDeferredValue:function(e){return ar().memoizedState=e},useTransition:function(){var e=th(!1),t=e[0];return e=x3.bind(null,e[1]),ar().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Be,a=ar();if(Me){if(r===void 0)throw Error(H(407));r=r()}else{if(r=t(),et===null)throw Error(H(349));Tn&30||b_(n,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,rh(S_.bind(null,n,i,e),[e]),n.flags|=2048,ba(9,k_.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=ar(),t=et.identifierPrefix;if(Me){var r=xr,n=$r;r=(n&~(1<<32-Zt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=$a++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=$3++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C3={readContext:Pt,useCallback:R_,useContext:Pt,useEffect:fc,useImperativeHandle:O_,useInsertionEffect:I_,useLayoutEffect:z_,useMemo:N_,useReducer:wl,useRef:T_,useState:function(){return wl(xa)},useDebugValue:pc,useDeferredValue:function(e){var t=Bt();return M_(t,Ke.memoizedState,e)},useTransition:function(){var e=wl(xa)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:$_,useSyncExternalStore:x_,useId:D_,unstable_isNewReconciler:!1},E3={readContext:Pt,useCallback:R_,useContext:Pt,useEffect:fc,useImperativeHandle:O_,useInsertionEffect:I_,useLayoutEffect:z_,useMemo:N_,useReducer:$l,useRef:T_,useState:function(){return $l(xa)},useDebugValue:pc,useDeferredValue:function(e){var t=Bt();return Ke===null?t.memoizedState=e:M_(t,Ke.memoizedState,e)},useTransition:function(){var e=$l(xa)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:$_,useSyncExternalStore:x_,useId:D_,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ed(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Le({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xo={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=pt(),a=Yr(e),i=br(n,a);i.payload=t,r!=null&&(i.callback=r),t=Kr(e,i,a),t!==null&&(Xt(t,e,a,n),Ss(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=pt(),a=Yr(e),i=br(n,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Kr(e,i,a),t!==null&&(Xt(t,e,a,n),Ss(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=pt(),n=Yr(e),a=br(r,n);a.tag=2,t!=null&&(a.callback=t),t=Kr(e,a,n),t!==null&&(Xt(t,e,n,r),Ss(t,e,n))}};function nh(e,t,r,n,a,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!ma(r,n)||!ma(a,i):!0}function U_(e,t,r){var n=!1,a=Jr,i=t.contextType;return typeof i=="object"&&i!==null?i=Pt(i):(a=wt(t)?Cn:lt.current,n=t.contextTypes,i=(n=n!=null)?ui(e,a):Jr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ih(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function td(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ac(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Pt(i):(i=wt(t)?Cn:lt.current,a.context=ui(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ed(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&xo.enqueueReplaceState(a,a.state,null),Qs(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function pi(e,t){try{var r="",n=t;do r+=tb(n),n=n.return;while(n);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function xl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function rd(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var T3=typeof WeakMap=="function"?WeakMap:Map;function j_(e,t,r){r=br(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){eo||(eo=!0,fd=n),rd(e,t)},r}function W_(e,t,r){r=br(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){rd(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){rd(e,t),typeof n!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function ah(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new T3;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=W3.bind(null,e,t,r),t.then(e,e))}function sh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oh(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=br(-1,1),t.tag=2,Kr(r,t,1))),r.lanes|=1),e)}var I3=Tr.ReactCurrentOwner,_t=!1;function ft(e,t,r,n){t.child=e===null?y_(t,null,r,n):ci(t,e.child,r,n)}function lh(e,t,r,n,a){r=r.render;var i=t.ref;return si(t,a),n=dc(e,t,r,n,i,a),r=cc(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Er(e,t,a)):(Me&&r&&Xd(t),t.flags|=1,ft(e,t,n,a),t.child)}function uh(e,t,r,n,a){if(e===null){var i=r.type;return typeof i=="function"&&!$c(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,F_(e,t,i,n,a)):(e=As(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:ma,r(s,n)&&e.ref===t.ref)return Er(e,t,a)}return t.flags|=1,e=Zr(i,n),e.ref=t.ref,e.return=t,t.child=e}function F_(e,t,r,n,a){if(e!==null){var i=e.memoizedProps;if(ma(i,n)&&e.ref===t.ref)if(_t=!1,t.pendingProps=n=i,(e.lanes&a)!==0)e.flags&131072&&(_t=!0);else return t.lanes=e.lanes,Er(e,t,a)}return nd(e,t,r,n,a)}function V_(e,t,r){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(Jn,kt),kt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ze(Jn,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,ze(Jn,kt),kt|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,ze(Jn,kt),kt|=n;return ft(e,t,a,r),t.child}function q_(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function nd(e,t,r,n,a){var i=wt(r)?Cn:lt.current;return i=ui(t,i),si(t,a),r=dc(e,t,r,n,i,a),n=cc(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Er(e,t,a)):(Me&&n&&Xd(t),t.flags|=1,ft(e,t,r,a),t.child)}function dh(e,t,r,n,a){if(wt(r)){var i=!0;Vs(t)}else i=!1;if(si(t,a),t.stateNode===null)Ts(e,t),U_(t,r,n),td(t,r,n,a),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var u=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Pt(d):(d=wt(r)?Cn:lt.current,d=ui(t,d));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||u!==d)&&ih(t,s,n,d),Lr=!1;var m=t.memoizedState;s.state=m,Qs(t,n,s,a),u=t.memoizedState,o!==n||m!==u||vt.current||Lr?(typeof f=="function"&&(ed(t,r,f,n),u=t.memoizedState),(o=Lr||nh(t,r,o,n,m,u,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),s.props=n,s.state=u,s.context=d,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,v_(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Ht(t.type,o),s.props=d,p=t.pendingProps,m=s.context,u=r.contextType,typeof u=="object"&&u!==null?u=Pt(u):(u=wt(r)?Cn:lt.current,u=ui(t,u));var _=r.getDerivedStateFromProps;(f=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||m!==u)&&ih(t,s,n,u),Lr=!1,m=t.memoizedState,s.state=m,Qs(t,n,s,a);var w=t.memoizedState;o!==p||m!==w||vt.current||Lr?(typeof _=="function"&&(ed(t,r,_,n),w=t.memoizedState),(d=Lr||nh(t,r,d,n,m,w,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=u,n=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return id(e,t,r,n,i,a)}function id(e,t,r,n,a,i){q_(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return a&&Qp(t,r,!1),Er(e,t,i);n=t.stateNode,I3.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=ci(t,e.child,null,i),t.child=ci(t,null,o,i)):ft(e,t,o,i),t.memoizedState=n.state,a&&Qp(t,r,!0),t.child}function H_(e){var t=e.stateNode;t.pendingContext?Kp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kp(e,t.context,!1),sc(e,t.containerInfo)}function ch(e,t,r,n,a){return di(),ec(a),t.flags|=256,ft(e,t,r,n),t.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function sd(e){return{baseLanes:e,cachePool:null,transitions:null}}function G_(e,t,r){var n=t.pendingProps,a=Pe.current,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ze(Pe,a&1),e===null)return Xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=So(s,n,0,null),e=bn(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=sd(r),t.memoizedState=ad,e):hc(t,s));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return z3(e,t,s,n,o,a,r);if(i){i=n.fallback,s=t.mode,a=e.child,o=a.sibling;var u={mode:"hidden",children:n.children};return!(s&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Zr(a,u),n.subtreeFlags=a.subtreeFlags&14680064),o!==null?i=Zr(o,i):(i=bn(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?sd(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=ad,n}return i=e.child,e=i.sibling,n=Zr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function hc(e,t){return t=So({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ns(e,t,r,n){return n!==null&&ec(n),ci(t,e.child,null,r),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function z3(e,t,r,n,a,i,s){if(r)return t.flags&256?(t.flags&=-257,n=xl(Error(H(422))),ns(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,a=t.mode,n=So({mode:"visible",children:n.children},a,0,null),i=bn(i,a,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&ci(t,e.child,null,s),t.child.memoizedState=sd(s),t.memoizedState=ad,i);if(!(t.mode&1))return ns(e,t,s,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var o=n.dgst;return n=o,i=Error(H(419)),n=xl(i,n,void 0),ns(e,t,s,n)}if(o=(s&e.childLanes)!==0,_t||o){if(n=et,n!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|s)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Cr(e,a),Xt(n,e,a,-1))}return wc(),n=xl(Error(H(421))),ns(e,t,s,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=F3.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ct=Gr(a.nextSibling),Et=t,Me=!0,Kt=null,e!==null&&(Rt[Nt++]=$r,Rt[Nt++]=xr,Rt[Nt++]=En,$r=e.id,xr=e.overflow,En=t),t=hc(t,n.children),t.flags|=4096,t)}function fh(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ju(e.return,t,r)}function bl(e,t,r,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=a)}function K_(e,t,r){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(ft(e,t,n.children,r),n=Pe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fh(e,r,t);else if(e.tag===19)fh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ze(Pe,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ys(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),bl(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ys(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}bl(t,!0,r,null,i);break;case"together":bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ts(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Er(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,r=Zr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Zr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function A3(e,t,r){switch(t.tag){case 3:H_(t),di();break;case 5:w_(t);break;case 1:wt(t.type)&&Vs(t);break;case 4:sc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;ze(Gs,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ze(Pe,Pe.current&1),t.flags|=128,null):r&t.child.childLanes?G_(e,t,r):(ze(Pe,Pe.current&1),e=Er(e,t,r),e!==null?e.sibling:null);ze(Pe,Pe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return K_(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ze(Pe,Pe.current),n)break;return null;case 22:case 23:return t.lanes=0,V_(e,t,r)}return Er(e,t,r)}var Q_,od,Y_,Z_;Q_=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};od=function(){};Y_=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,$n(lr.current);var i=null;switch(r){case"input":a=Iu(e,a),n=Iu(e,n),i=[];break;case"select":a=Le({},a,{value:void 0}),n=Le({},n,{value:void 0}),i=[];break;case"textarea":a=Ou(e,a),n=Ou(e,n),i=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ws)}Nu(r,n);var s;r=null;for(d in a)if(!n.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var o=a[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(la.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var u=n[d];if(o=a!=null?a[d]:void 0,n.hasOwnProperty(d)&&u!==o&&(u!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in u)u.hasOwnProperty(s)&&o[s]!==u[s]&&(r||(r={}),r[s]=u[s])}else r||(i||(i=[]),i.push(d,r)),r=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(la.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Oe("scroll",e),i||o===u||(i=[])):(i=i||[]).push(d,u))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Z_=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ai(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function O3(e,t,r){var n=t.pendingProps;switch(Jd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return wt(t.type)&&Fs(),at(t),null;case 3:return n=t.stateNode,fi(),Ne(vt),Ne(lt),lc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(md(Kt),Kt=null))),od(e,t),at(t),null;case 5:oc(t);var a=$n(wa.current);if(r=t.type,e!==null&&t.stateNode!=null)Y_(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(H(166));return at(t),null}if(e=$n(lr.current),ts(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[sr]=t,n[_a]=i,e=(t.mode&1)!==0,r){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(a=0;a<Gi.length;a++)Oe(Gi[a],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":$p(n,i),Oe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Oe("invalid",n);break;case"textarea":bp(n,i),Oe("invalid",n)}Nu(r,i),a=null;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];s==="children"?typeof o=="string"?n.textContent!==o&&(i.suppressHydrationWarning!==!0&&es(n.textContent,o,e),a=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&es(n.textContent,o,e),a=["children",""+o]):la.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Oe("scroll",n)}switch(r){case"input":Ha(n),xp(n,i,!0);break;case"textarea":Ha(n),kp(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Ws)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=S0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[sr]=t,e[_a]=n,Q_(e,t,!1,!1),t.stateNode=e;e:{switch(s=Mu(r,n),r){case"dialog":Oe("cancel",e),Oe("close",e),a=n;break;case"iframe":case"object":case"embed":Oe("load",e),a=n;break;case"video":case"audio":for(a=0;a<Gi.length;a++)Oe(Gi[a],e);a=n;break;case"source":Oe("error",e),a=n;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),a=n;break;case"details":Oe("toggle",e),a=n;break;case"input":$p(e,n),a=Iu(e,n),Oe("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=Le({},n,{value:void 0}),Oe("invalid",e);break;case"textarea":bp(e,n),a=Ou(e,n),Oe("invalid",e);break;default:a=n}Nu(r,a),o=a;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="style"?T0(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&C0(e,u)):i==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&ua(e,u):typeof u=="number"&&ua(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(la.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Oe("scroll",e):u!=null&&Bd(e,i,u,s))}switch(r){case"input":Ha(e),xp(e,n,!1);break;case"textarea":Ha(e),kp(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Xr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?ri(e,!!n.multiple,i,!1):n.defaultValue!=null&&ri(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ws)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)Z_(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(H(166));if(r=$n(wa.current),$n(lr.current),ts(t)){if(n=t.stateNode,r=t.memoizedProps,n[sr]=t,(i=n.nodeValue!==r)&&(e=Et,e!==null))switch(e.tag){case 3:es(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[sr]=t,t.stateNode=n}return at(t),null;case 13:if(Ne(Pe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&Ct!==null&&t.mode&1&&!(t.flags&128))m_(),di(),t.flags|=98560,i=!1;else if(i=ts(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(H(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(H(317));i[sr]=t}else di(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),i=!1}else Kt!==null&&(md(Kt),Kt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?Qe===0&&(Qe=3):wc())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return fi(),od(e,t),e===null&&ga(t.stateNode.containerInfo),at(t),null;case 10:return nc(t.type._context),at(t),null;case 17:return wt(t.type)&&Fs(),at(t),null;case 19:if(Ne(Pe),i=t.memoizedState,i===null)return at(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Ai(i,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ys(e),s!==null){for(t.flags|=128,Ai(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ze(Pe,Pe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ve()>hi&&(t.flags|=128,n=!0,Ai(i,!1),t.lanes=4194304)}else{if(!n)if(e=Ys(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ai(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Me)return at(t),null}else 2*Ve()-i.renderingStartTime>hi&&r!==1073741824&&(t.flags|=128,n=!0,Ai(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ve(),t.sibling=null,r=Pe.current,ze(Pe,n?r&1|2:r&1),t):(at(t),null);case 22:case 23:return vc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?kt&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function R3(e,t){switch(Jd(t),t.tag){case 1:return wt(t.type)&&Fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(),Ne(vt),Ne(lt),lc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return oc(t),null;case 13:if(Ne(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Pe),null;case 4:return fi(),null;case 10:return nc(t.type._context),null;case 22:case 23:return vc(),null;case 24:return null;default:return null}}var is=!1,ot=!1,N3=typeof WeakSet=="function"?WeakSet:Set,re=null;function Xn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){je(e,t,n)}else r.current=null}function ld(e,t,r){try{r()}catch(n){je(e,t,n)}}var ph=!1;function M3(e,t){if(qu=Ls,e=r_(),Zd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,o=-1,u=-1,d=0,f=0,p=e,m=null;t:for(;;){for(var _;p!==r||a!==0&&p.nodeType!==3||(o=s+a),p!==i||n!==0&&p.nodeType!==3||(u=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===e)break t;if(m===r&&++d===a&&(o=s),m===i&&++f===n&&(u=s),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}r=o===-1||u===-1?null:{start:o,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hu={focusedElem:e,selectionRange:r},Ls=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var $=w.memoizedProps,S=w.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?$:Ht(t.type,$),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(k){je(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return w=ph,ph=!1,w}function ia(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&ld(t,r,i)}a=a.next}while(a!==n)}}function bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ud(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function X_(e){var t=e.alternate;t!==null&&(e.alternate=null,X_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sr],delete t[_a],delete t[Qu],delete t[y3],delete t[_3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function J_(e){return e.tag===5||e.tag===3||e.tag===4}function hh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||J_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ws));else if(n!==4&&(e=e.child,e!==null))for(dd(e,t,r),e=e.sibling;e!==null;)dd(e,t,r),e=e.sibling}function cd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(cd(e,t,r),e=e.sibling;e!==null;)cd(e,t,r),e=e.sibling}var tt=null,Gt=!1;function Nr(e,t,r){for(r=r.child;r!==null;)ev(e,t,r),r=r.sibling}function ev(e,t,r){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(mo,r)}catch{}switch(r.tag){case 5:ot||Xn(r,t);case 6:var n=tt,a=Gt;tt=null,Nr(e,t,r),tt=n,Gt=a,tt!==null&&(Gt?(e=tt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):tt.removeChild(r.stateNode));break;case 18:tt!==null&&(Gt?(e=tt,r=r.stateNode,e.nodeType===8?gl(e.parentNode,r):e.nodeType===1&&gl(e,r),pa(e)):gl(tt,r.stateNode));break;case 4:n=tt,a=Gt,tt=r.stateNode.containerInfo,Gt=!0,Nr(e,t,r),tt=n,Gt=a;break;case 0:case 11:case 14:case 15:if(!ot&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var i=a,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ld(r,t,s),a=a.next}while(a!==n)}Nr(e,t,r);break;case 1:if(!ot&&(Xn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){je(r,t,o)}Nr(e,t,r);break;case 21:Nr(e,t,r);break;case 22:r.mode&1?(ot=(n=ot)||r.memoizedState!==null,Nr(e,t,r),ot=n):Nr(e,t,r);break;default:Nr(e,t,r)}}function mh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new N3),t.forEach(function(n){var a=V3.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Ut(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:tt=o.stateNode,Gt=!1;break e;case 3:tt=o.stateNode.containerInfo,Gt=!0;break e;case 4:tt=o.stateNode.containerInfo,Gt=!0;break e}o=o.return}if(tt===null)throw Error(H(160));ev(i,s,a),tt=null,Gt=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(d){je(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tv(t,e),t=t.sibling}function tv(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),nr(e),n&4){try{ia(3,e,e.return),bo(3,e)}catch($){je(e,e.return,$)}try{ia(5,e,e.return)}catch($){je(e,e.return,$)}}break;case 1:Ut(t,e),nr(e),n&512&&r!==null&&Xn(r,r.return);break;case 5:if(Ut(t,e),nr(e),n&512&&r!==null&&Xn(r,r.return),e.flags&32){var a=e.stateNode;try{ua(a,"")}catch($){je(e,e.return,$)}}if(n&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&b0(a,i),Mu(o,s);var d=Mu(o,i);for(s=0;s<u.length;s+=2){var f=u[s],p=u[s+1];f==="style"?T0(a,p):f==="dangerouslySetInnerHTML"?C0(a,p):f==="children"?ua(a,p):Bd(a,f,p,d)}switch(o){case"input":zu(a,i);break;case"textarea":k0(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?ri(a,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?ri(a,!!i.multiple,i.defaultValue,!0):ri(a,!!i.multiple,i.multiple?[]:"",!1))}a[_a]=i}catch($){je(e,e.return,$)}}break;case 6:if(Ut(t,e),nr(e),n&4){if(e.stateNode===null)throw Error(H(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch($){je(e,e.return,$)}}break;case 3:if(Ut(t,e),nr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{pa(t.containerInfo)}catch($){je(e,e.return,$)}break;case 4:Ut(t,e),nr(e);break;case 13:Ut(t,e),nr(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(yc=Ve())),n&4&&mh(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(ot=(d=ot)||f,Ut(t,e),ot=d):Ut(t,e),nr(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(re=e,f=e.child;f!==null;){for(p=re=f;re!==null;){switch(m=re,_=m.child,m.tag){case 0:case 11:case 14:case 15:ia(4,m,m.return);break;case 1:Xn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch($){je(n,r,$)}}break;case 5:Xn(m,m.return);break;case 22:if(m.memoizedState!==null){yh(p);continue}}_!==null?(_.return=m,re=_):yh(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=E0("display",s))}catch($){je(e,e.return,$)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch($){je(e,e.return,$)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(t,e),nr(e),n&4&&mh(e);break;case 21:break;default:Ut(t,e),nr(e)}}function nr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(J_(r)){var n=r;break e}r=r.return}throw Error(H(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(ua(a,""),n.flags&=-33);var i=hh(e);cd(e,i,a);break;case 3:case 4:var s=n.stateNode.containerInfo,o=hh(e);dd(e,o,s);break;default:throw Error(H(161))}}catch(u){je(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function D3(e,t,r){re=e,rv(e)}function rv(e,t,r){for(var n=(e.mode&1)!==0;re!==null;){var a=re,i=a.child;if(a.tag===22&&n){var s=a.memoizedState!==null||is;if(!s){var o=a.alternate,u=o!==null&&o.memoizedState!==null||ot;o=is;var d=ot;if(is=s,(ot=u)&&!d)for(re=a;re!==null;)s=re,u=s.child,s.tag===22&&s.memoizedState!==null?_h(a):u!==null?(u.return=s,re=u):_h(a);for(;i!==null;)re=i,rv(i),i=i.sibling;re=a,is=o,ot=d}gh(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,re=i):gh(e)}}function gh(e){for(;re!==null;){var t=re;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||bo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ot)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Ht(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&eh(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}eh(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&pa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}ot||t.flags&512&&ud(t)}catch(m){je(t,t.return,m)}}if(t===e){re=null;break}if(r=t.sibling,r!==null){r.return=t.return,re=r;break}re=t.return}}function yh(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var r=t.sibling;if(r!==null){r.return=t.return,re=r;break}re=t.return}}function _h(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{bo(4,t)}catch(u){je(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(u){je(t,a,u)}}var i=t.return;try{ud(t)}catch(u){je(t,i,u)}break;case 5:var s=t.return;try{ud(t)}catch(u){je(t,s,u)}}}catch(u){je(t,t.return,u)}if(t===e){re=null;break}var o=t.sibling;if(o!==null){o.return=t.return,re=o;break}re=t.return}}var P3=Math.ceil,Js=Tr.ReactCurrentDispatcher,mc=Tr.ReactCurrentOwner,Dt=Tr.ReactCurrentBatchConfig,$e=0,et=null,Ge=null,rt=0,kt=0,Jn=nn(0),Qe=0,ka=null,In=0,ko=0,gc=0,aa=null,yt=null,yc=0,hi=1/0,_r=null,eo=!1,fd=null,Qr=null,as=!1,Fr=null,to=0,sa=0,pd=null,Is=-1,zs=0;function pt(){return $e&6?Ve():Is!==-1?Is:Is=Ve()}function Yr(e){return e.mode&1?$e&2&&rt!==0?rt&-rt:w3.transition!==null?(zs===0&&(zs=U0()),zs):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:G0(e.type)),e):1}function Xt(e,t,r,n){if(50<sa)throw sa=0,pd=null,Error(H(185));Ta(e,r,n),(!($e&2)||e!==et)&&(e===et&&(!($e&2)&&(ko|=r),Qe===4&&jr(e,rt)),$t(e,n),r===1&&$e===0&&!(t.mode&1)&&(hi=Ve()+500,wo&&an()))}function $t(e,t){var r=e.callbackNode;wb(e,t);var n=Bs(e,e===et?rt:0);if(n===0)r!==null&&Ep(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ep(r),t===1)e.tag===0?v3(vh.bind(null,e)):f_(vh.bind(null,e)),m3(function(){!($e&6)&&an()}),r=null;else{switch(j0(n)){case 1:r=Fd;break;case 4:r=B0;break;case 16:r=Ps;break;case 536870912:r=L0;break;default:r=Ps}r=dv(r,nv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function nv(e,t){if(Is=-1,zs=0,$e&6)throw Error(H(327));var r=e.callbackNode;if(oi()&&e.callbackNode!==r)return null;var n=Bs(e,e===et?rt:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ro(e,n);else{t=n;var a=$e;$e|=2;var i=av();(et!==e||rt!==t)&&(_r=null,hi=Ve()+500,xn(e,t));do try{U3();break}catch(o){iv(e,o)}while(!0);rc(),Js.current=i,$e=a,Ge!==null?t=0:(et=null,rt=0,t=Qe)}if(t!==0){if(t===2&&(a=Uu(e),a!==0&&(n=a,t=hd(e,a))),t===1)throw r=ka,xn(e,0),jr(e,n),$t(e,Ve()),r;if(t===6)jr(e,n);else{if(a=e.current.alternate,!(n&30)&&!B3(a)&&(t=ro(e,n),t===2&&(i=Uu(e),i!==0&&(n=i,t=hd(e,i))),t===1))throw r=ka,xn(e,0),jr(e,n),$t(e,Ve()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(H(345));case 2:mn(e,yt,_r);break;case 3:if(jr(e,n),(n&130023424)===n&&(t=yc+500-Ve(),10<t)){if(Bs(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){pt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ku(mn.bind(null,e,yt,_r),t);break}mn(e,yt,_r);break;case 4:if(jr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var s=31-Zt(n);i=1<<s,s=t[s],s>a&&(a=s),n&=~i}if(n=a,n=Ve()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*P3(n/1960))-n,10<n){e.timeoutHandle=Ku(mn.bind(null,e,yt,_r),n);break}mn(e,yt,_r);break;case 5:mn(e,yt,_r);break;default:throw Error(H(329))}}}return $t(e,Ve()),e.callbackNode===r?nv.bind(null,e):null}function hd(e,t){var r=aa;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=ro(e,t),e!==2&&(t=yt,yt=r,t!==null&&md(t)),e}function md(e){yt===null?yt=e:yt.push.apply(yt,e)}function B3(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],i=a.getSnapshot;a=a.value;try{if(!er(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jr(e,t){for(t&=~gc,t&=~ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Zt(t),n=1<<r;e[r]=-1,t&=~n}}function vh(e){if($e&6)throw Error(H(327));oi();var t=Bs(e,0);if(!(t&1))return $t(e,Ve()),null;var r=ro(e,t);if(e.tag!==0&&r===2){var n=Uu(e);n!==0&&(t=n,r=hd(e,n))}if(r===1)throw r=ka,xn(e,0),jr(e,t),$t(e,Ve()),r;if(r===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,yt,_r),$t(e,Ve()),null}function _c(e,t){var r=$e;$e|=1;try{return e(t)}finally{$e=r,$e===0&&(hi=Ve()+500,wo&&an())}}function zn(e){Fr!==null&&Fr.tag===0&&!($e&6)&&oi();var t=$e;$e|=1;var r=Dt.transition,n=Ee;try{if(Dt.transition=null,Ee=1,e)return e()}finally{Ee=n,Dt.transition=r,$e=t,!($e&6)&&an()}}function vc(){kt=Jn.current,Ne(Jn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,h3(r)),Ge!==null)for(r=Ge.return;r!==null;){var n=r;switch(Jd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fs();break;case 3:fi(),Ne(vt),Ne(lt),lc();break;case 5:oc(n);break;case 4:fi();break;case 13:Ne(Pe);break;case 19:Ne(Pe);break;case 10:nc(n.type._context);break;case 22:case 23:vc()}r=r.return}if(et=e,Ge=e=Zr(e.current,null),rt=kt=t,Qe=0,ka=null,gc=ko=In=0,yt=aa=null,wn!==null){for(t=0;t<wn.length;t++)if(r=wn[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=a,n.next=s}r.pending=n}wn=null}return e}function iv(e,t){do{var r=Ge;try{if(rc(),Cs.current=Xs,Zs){for(var n=Be.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Zs=!1}if(Tn=0,Je=Ke=Be=null,na=!1,$a=0,mc.current=null,r===null||r.return===null){Qe=1,ka=t,Ge=null;break}e:{var i=e,s=r.return,o=r,u=t;if(t=rt,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=sh(s);if(_!==null){_.flags&=-257,oh(_,s,o,i,t),_.mode&1&&ah(i,d,t),t=_,u=d;var w=t.updateQueue;if(w===null){var $=new Set;$.add(u),t.updateQueue=$}else w.add(u);break e}else{if(!(t&1)){ah(i,d,t),wc();break e}u=Error(H(426))}}else if(Me&&o.mode&1){var S=sh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),oh(S,s,o,i,t),ec(pi(u,o));break e}}i=u=pi(u,o),Qe!==4&&(Qe=2),aa===null?aa=[i]:aa.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=j_(i,u,t);Jp(i,y);break e;case 1:o=u;var g=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Qr===null||!Qr.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=W_(i,o,t);Jp(i,k);break e}}i=i.return}while(i!==null)}ov(r)}catch(C){t=C,Ge===r&&r!==null&&(Ge=r=r.return);continue}break}while(!0)}function av(){var e=Js.current;return Js.current=Xs,e===null?Xs:e}function wc(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),et===null||!(In&268435455)&&!(ko&268435455)||jr(et,rt)}function ro(e,t){var r=$e;$e|=2;var n=av();(et!==e||rt!==t)&&(_r=null,xn(e,t));do try{L3();break}catch(a){iv(e,a)}while(!0);if(rc(),$e=r,Js.current=n,Ge!==null)throw Error(H(261));return et=null,rt=0,Qe}function L3(){for(;Ge!==null;)sv(Ge)}function U3(){for(;Ge!==null&&!cb();)sv(Ge)}function sv(e){var t=uv(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?ov(e):Ge=t,mc.current=null}function ov(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=R3(r,t),r!==null){r.flags&=32767,Ge=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,Ge=null;return}}else if(r=O3(r,t,kt),r!==null){Ge=r;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Qe===0&&(Qe=5)}function mn(e,t,r){var n=Ee,a=Dt.transition;try{Dt.transition=null,Ee=1,j3(e,t,r,n)}finally{Dt.transition=a,Ee=n}return null}function j3(e,t,r,n){do oi();while(Fr!==null);if($e&6)throw Error(H(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if($b(e,i),e===et&&(Ge=et=null,rt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||as||(as=!0,dv(Ps,function(){return oi(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Dt.transition,Dt.transition=null;var s=Ee;Ee=1;var o=$e;$e|=4,mc.current=null,M3(e,r),tv(r,e),o3(Hu),Ls=!!qu,Hu=qu=null,e.current=r,D3(r),fb(),$e=o,Ee=s,Dt.transition=i}else e.current=r;if(as&&(as=!1,Fr=e,to=a),i=e.pendingLanes,i===0&&(Qr=null),mb(r.stateNode),$t(e,Ve()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(eo)throw eo=!1,e=fd,fd=null,e;return to&1&&e.tag!==0&&oi(),i=e.pendingLanes,i&1?e===pd?sa++:(sa=0,pd=e):sa=0,an(),null}function oi(){if(Fr!==null){var e=j0(to),t=Dt.transition,r=Ee;try{if(Dt.transition=null,Ee=16>e?16:e,Fr===null)var n=!1;else{if(e=Fr,Fr=null,to=0,$e&6)throw Error(H(331));var a=$e;for($e|=4,re=e.current;re!==null;){var i=re,s=i.child;if(re.flags&16){var o=i.deletions;if(o!==null){for(var u=0;u<o.length;u++){var d=o[u];for(re=d;re!==null;){var f=re;switch(f.tag){case 0:case 11:case 15:ia(8,f,i)}var p=f.child;if(p!==null)p.return=f,re=p;else for(;re!==null;){f=re;var m=f.sibling,_=f.return;if(X_(f),f===d){re=null;break}if(m!==null){m.return=_,re=m;break}re=_}}}var w=i.alternate;if(w!==null){var $=w.child;if($!==null){w.child=null;do{var S=$.sibling;$.sibling=null,$=S}while($!==null)}}re=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,re=s;else e:for(;re!==null;){if(i=re,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ia(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,re=y;break e}re=i.return}}var g=e.current;for(re=g;re!==null;){s=re;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,re=x;else e:for(s=g;re!==null;){if(o=re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:bo(9,o)}}catch(C){je(o,o.return,C)}if(o===s){re=null;break e}var k=o.sibling;if(k!==null){k.return=o.return,re=k;break e}re=o.return}}if($e=a,an(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(mo,e)}catch{}n=!0}return n}finally{Ee=r,Dt.transition=t}}return!1}function wh(e,t,r){t=pi(r,t),t=j_(e,t,1),e=Kr(e,t,1),t=pt(),e!==null&&(Ta(e,1,t),$t(e,t))}function je(e,t,r){if(e.tag===3)wh(e,e,r);else for(;t!==null;){if(t.tag===3){wh(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Qr===null||!Qr.has(n))){e=pi(r,e),e=W_(t,e,1),t=Kr(t,e,1),e=pt(),t!==null&&(Ta(t,1,e),$t(t,e));break}}t=t.return}}function W3(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&r,et===e&&(rt&r)===r&&(Qe===4||Qe===3&&(rt&130023424)===rt&&500>Ve()-yc?xn(e,0):gc|=r),$t(e,t)}function lv(e,t){t===0&&(e.mode&1?(t=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):t=1);var r=pt();e=Cr(e,t),e!==null&&(Ta(e,t,r),$t(e,r))}function F3(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),lv(e,r)}function V3(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(H(314))}n!==null&&n.delete(t),lv(e,r)}var uv;uv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)_t=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return _t=!1,A3(e,t,r);_t=!!(e.flags&131072)}else _t=!1,Me&&t.flags&1048576&&p_(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ts(e,t),e=t.pendingProps;var a=ui(t,lt.current);si(t,r),a=dc(null,t,n,e,a,r);var i=cc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(n)?(i=!0,Vs(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ac(t),a.updater=xo,t.stateNode=a,a._reactInternals=t,td(t,n,e,r),t=id(null,t,n,!0,i,r)):(t.tag=0,Me&&i&&Xd(t),ft(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ts(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=H3(n),e=Ht(n,e),a){case 0:t=nd(null,t,n,e,r);break e;case 1:t=dh(null,t,n,e,r);break e;case 11:t=lh(null,t,n,e,r);break e;case 14:t=uh(null,t,n,Ht(n.type,e),r);break e}throw Error(H(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ht(n,a),nd(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ht(n,a),dh(e,t,n,a,r);case 3:e:{if(H_(t),e===null)throw Error(H(387));n=t.pendingProps,i=t.memoizedState,a=i.element,v_(e,t),Qs(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=pi(Error(H(423)),t),t=ch(e,t,n,r,a);break e}else if(n!==a){a=pi(Error(H(424)),t),t=ch(e,t,n,r,a);break e}else for(Ct=Gr(t.stateNode.containerInfo.firstChild),Et=t,Me=!0,Kt=null,r=y_(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(di(),n===a){t=Er(e,t,r);break e}ft(e,t,n,r)}t=t.child}return t;case 5:return w_(t),e===null&&Xu(t),n=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,s=a.children,Gu(n,a)?s=null:i!==null&&Gu(n,i)&&(t.flags|=32),q_(e,t),ft(e,t,s,r),t.child;case 6:return e===null&&Xu(t),null;case 13:return G_(e,t,r);case 4:return sc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ci(t,null,n,r):ft(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ht(n,a),lh(e,t,n,a,r);case 7:return ft(e,t,t.pendingProps,r),t.child;case 8:return ft(e,t,t.pendingProps.children,r),t.child;case 12:return ft(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,i=t.memoizedProps,s=a.value,ze(Gs,n._currentValue),n._currentValue=s,i!==null)if(er(i.value,s)){if(i.children===a.children&&!vt.current){t=Er(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){s=i.child;for(var u=o.firstContext;u!==null;){if(u.context===n){if(i.tag===1){u=br(-1,r&-r),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=r,u=i.alternate,u!==null&&(u.lanes|=r),Ju(i.return,r,t),o.lanes|=r;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(H(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Ju(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ft(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,si(t,r),a=Pt(a),n=n(a),t.flags|=1,ft(e,t,n,r),t.child;case 14:return n=t.type,a=Ht(n,t.pendingProps),a=Ht(n.type,a),uh(e,t,n,a,r);case 15:return F_(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ht(n,a),Ts(e,t),t.tag=1,wt(n)?(e=!0,Vs(t)):e=!1,si(t,r),U_(t,n,a),td(t,n,a,r),id(null,t,n,!0,e,r);case 19:return K_(e,t,r);case 22:return V_(e,t,r)}throw Error(H(156,t.tag))};function dv(e,t){return P0(e,t)}function q3(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,n){return new q3(e,t,r,n)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function H3(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ud)return 11;if(e===jd)return 14}return 2}function Zr(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function As(e,t,r,n,a,i){var s=2;if(n=e,typeof e=="function")$c(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Fn:return bn(r.children,a,i,t);case Ld:s=8,a|=8;break;case Su:return e=Mt(12,r,t,a|2),e.elementType=Su,e.lanes=i,e;case Cu:return e=Mt(13,r,t,a),e.elementType=Cu,e.lanes=i,e;case Eu:return e=Mt(19,r,t,a),e.elementType=Eu,e.lanes=i,e;case w0:return So(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _0:s=10;break e;case v0:s=9;break e;case Ud:s=11;break e;case jd:s=14;break e;case Br:s=16,n=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=Mt(s,r,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function bn(e,t,r,n){return e=Mt(7,e,n,t),e.lanes=r,e}function So(e,t,r,n){return e=Mt(22,e,n,t),e.elementType=w0,e.lanes=r,e.stateNode={isHidden:!1},e}function kl(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function Sl(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function G3(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function xc(e,t,r,n,a,i,s,o,u){return e=new G3(e,t,r,o,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Mt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(i),e}function K3(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function cv(e){if(!e)return Jr;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var r=e.type;if(wt(r))return c_(e,r,t)}return t}function fv(e,t,r,n,a,i,s,o,u){return e=xc(r,n,!0,e,a,i,s,o,u),e.context=cv(null),r=e.current,n=pt(),a=Yr(r),i=br(n,a),i.callback=t??null,Kr(r,i,a),e.current.lanes=a,Ta(e,a,n),$t(e,n),e}function Co(e,t,r,n){var a=t.current,i=pt(),s=Yr(a);return r=cv(r),t.context===null?t.context=r:t.pendingContext=r,t=br(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Kr(a,t,s),e!==null&&(Xt(e,a,s,i),Ss(e,a,s)),s}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $h(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function bc(e,t){$h(e,t),(e=e.alternate)&&$h(e,t)}function Q3(){return null}var pv=typeof reportError=="function"?reportError:function(e){console.error(e)};function kc(e){this._internalRoot=e}Eo.prototype.render=kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Co(e,t,null,null)};Eo.prototype.unmount=kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){Co(null,e,null,null)}),t[Sr]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=V0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ur.length&&t!==0&&t<Ur[r].priority;r++);Ur.splice(r,0,e),r===0&&H0(e)}};function Sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xh(){}function Y3(e,t,r,n,a){if(a){if(typeof n=="function"){var i=n;n=function(){var d=no(s);i.call(d)}}var s=fv(t,n,e,0,null,!1,!1,"",xh);return e._reactRootContainer=s,e[Sr]=s.current,ga(e.nodeType===8?e.parentNode:e),zn(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var o=n;n=function(){var d=no(u);o.call(d)}}var u=xc(e,0,!1,null,null,!1,!1,"",xh);return e._reactRootContainer=u,e[Sr]=u.current,ga(e.nodeType===8?e.parentNode:e),zn(function(){Co(t,u,r,n)}),u}function Io(e,t,r,n,a){var i=r._reactRootContainer;if(i){var s=i;if(typeof a=="function"){var o=a;a=function(){var u=no(s);o.call(u)}}Co(t,s,e,a)}else s=Y3(r,t,e,a,n);return no(s)}W0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Hi(t.pendingLanes);r!==0&&(Vd(t,r|1),$t(t,Ve()),!($e&6)&&(hi=Ve()+500,an()))}break;case 13:zn(function(){var n=Cr(e,1);if(n!==null){var a=pt();Xt(n,e,1,a)}}),bc(e,1)}};qd=function(e){if(e.tag===13){var t=Cr(e,134217728);if(t!==null){var r=pt();Xt(t,e,134217728,r)}bc(e,134217728)}};F0=function(e){if(e.tag===13){var t=Yr(e),r=Cr(e,t);if(r!==null){var n=pt();Xt(r,e,t,n)}bc(e,t)}};V0=function(){return Ee};q0=function(e,t){var r=Ee;try{return Ee=e,t()}finally{Ee=r}};Pu=function(e,t,r){switch(t){case"input":if(zu(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=vo(n);if(!a)throw Error(H(90));x0(n),zu(n,a)}}}break;case"textarea":k0(e,r);break;case"select":t=r.value,t!=null&&ri(e,!!r.multiple,t,!1)}};A0=_c;O0=zn;var Z3={usingClientEntryPoint:!1,Events:[za,Gn,vo,I0,z0,_c]},Oi={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X3={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=M0(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||Q3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{mo=ss.inject(X3),or=ss}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z3;zt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(t))throw Error(H(200));return K3(e,t,null,r)};zt.createRoot=function(e,t){if(!Sc(e))throw Error(H(299));var r=!1,n="",a=pv;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=xc(e,1,!1,null,null,r,!1,n,a),e[Sr]=t.current,ga(e.nodeType===8?e.parentNode:e),new kc(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=M0(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return zn(e)};zt.hydrate=function(e,t,r){if(!To(t))throw Error(H(200));return Io(null,e,t,!0,r)};zt.hydrateRoot=function(e,t,r){if(!Sc(e))throw Error(H(405));var n=r!=null&&r.hydratedSources||null,a=!1,i="",s=pv;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=fv(t,null,e,1,r??null,a,!1,i,s),e[Sr]=t.current,ga(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Eo(t)};zt.render=function(e,t,r){if(!To(t))throw Error(H(200));return Io(null,e,t,!1,r)};zt.unmountComponentAtNode=function(e){if(!To(e))throw Error(H(40));return e._reactRootContainer?(zn(function(){Io(null,null,e,!1,function(){e._reactRootContainer=null,e[Sr]=null})}),!0):!1};zt.unstable_batchedUpdates=_c;zt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!To(r))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Io(e,t,r,!1,n)};zt.version="18.3.1-next-f1338f8080-20240426";function hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)}catch(e){console.error(e)}}hv(),h0.exports=zt;var J3=h0.exports,bh=J3;bu.createRoot=bh.createRoot,bu.hydrateRoot=bh.hydrateRoot;const ek="modulepreload",tk=function(e){return"/mobile-detect/"+e},kh={},rk=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(r.map(u=>{if(u=tk(u),u in kh)return;kh[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":ek,d||(p.as="script"),p.crossOrigin="",p.href=u,o&&p.setAttribute("nonce",o),document.head.appendChild(p),d)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})};function nk(e={}){const{immediate:t=!1,onNeedRefresh:r,onOfflineReady:n,onRegistered:a,onRegisteredSW:i,onRegisterError:s}=e;let o,u;const d=async(p=!0)=>{await u};async function f(){if("serviceWorker"in navigator){if(o=await rk(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/mobile-detect/sw.js",{scope:"/mobile-detect/",type:"classic"})).catch(p=>{s==null||s(p)}),!o)return;o.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),o.addEventListener("installed",p=>{p.isUpdate||n==null||n()}),o.register({immediate:t}).then(p=>{i?i("/mobile-detect/sw.js",p):a==null||a(p)}).catch(p=>{s==null||s(p)})}}return u=f(),d}/*!
 * ONNX Runtime Web v1.23.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Cc=Object.defineProperty,ik=Object.getOwnPropertyDescriptor,ak=Object.getOwnPropertyNames,sk=Object.prototype.hasOwnProperty,ok=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),V=(e,t)=>()=>(e&&(t=e(e=0)),t),wi=(e,t)=>{for(var r in t)Cc(e,r,{get:t[r],enumerable:!0})},lk=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ak(t))!sk.call(e,a)&&a!==r&&Cc(e,a,{get:()=>t[a],enumerable:!(n=ik(t,a))||n.enumerable});return e},Sa=e=>lk(Cc({},"__esModule",{value:!0}),e),Ri,Mr,ei,Sh,mv,gv=V(()=>{Ri=new Map,Mr=[],ei=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=Ri.get(e);if(n===void 0)Ri.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=Mr.indexOf(e);a!==-1&&Mr.splice(a,1);for(let i=0;i<Mr.length;i++)if(Ri.get(Mr[i]).priority<=r){Mr.splice(i,0,e);return}Mr.push(e)}return}throw new TypeError("not a valid backend")},Sh=async e=>{let t=Ri.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},mv=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?Mr:r,a,i=[],s=new Set;for(let u of n){let d=await Sh(u);typeof d=="string"?i.push({name:u,err:d}):(a||(a=d),a===d&&s.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${i.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of i)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),uk=V(()=>{gv()}),yv,dk=V(()=>{yv="1.23.2"}),Cl,Ze,_v=V(()=>{dk(),Cl="warning",Ze={wasm:{},webgl:{},webgpu:{},versions:{common:yv},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Cl=e}},get logLevel(){return Cl}},Object.defineProperty(Ze,"logLevel",{enumerable:!0})}),Ce,ck=V(()=>{_v(),Ce=Ze}),vv,wv,fk=V(()=>{vv=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let a,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[3]):(a=e.dims[3],i=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let f=i*a,p=0,m=f,_=f*2,w=-1;s==="RGBA"?(p=0,m=f,_=f*2,w=f*3):s==="RGB"?(p=0,m=f,_=f*2):s==="RBG"&&(p=0,_=f,m=f*2);for(let $=0;$<i;$++)for(let S=0;S<a;S++){let y=(e.data[p++]-d[0])*u[0],g=(e.data[m++]-d[1])*u[1],x=(e.data[_++]-d[2])*u[2],k=w===-1?255:(e.data[w++]-d[3])*u[3];n.fillStyle="rgba("+y+","+g+","+x+","+k+")",n.fillRect(S,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},wv=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let a,i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],i=e.dims[1],s=e.dims[3]):(a=e.dims[3],i=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,f;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?f=[0,0,0,0]:typeof u.bias=="number"?f=[u.bias,u.bias,u.bias,u.bias]:(f=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(f[3]=u.bias[3]));let p=i*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,_=0,w=1,$=2,S=3,y=0,g=p,x=p*2,k=-1;o==="RGBA"?(y=0,g=p,x=p*2,k=p*3):o==="RGB"?(y=0,g=p,x=p*2):o==="RBG"&&(y=0,x=p,g=p*2),n=r.createImageData(a,i);for(let C=0;C<i*a;_+=m,w+=m,$+=m,S+=m,C++)n.data[_]=(e.data[y++]-f[0])*d[0],n.data[w]=(e.data[g++]-f[1])*d[1],n.data[$]=(e.data[x++]-f[2])*d[2],n.data[S]=k===-1?255:(e.data[k++]-f[3])*d[3]}else throw new Error("Can not access image data");return n}}),os,$v,xv,bv,kv,Sv,pk=V(()=>{Ec(),os=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,a=t.norm??{mean:255,bias:0},i,s;typeof a.mean=="number"?i=[a.mean,a.mean,a.mean,a.mean]:i=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,f=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,m=0,_=1,w=2,$=3,S=0,y=d,g=d*2,x=-1;o==="RGB"&&(p=3,m=0,_=1,w=2,$=-1),u==="RGBA"?x=d*3:u==="RBG"?(S=0,g=d,y=d*2):u==="BGR"&&(g=0,y=d,S=d*2);for(let k=0;k<d;k++,m+=p,w+=p,_+=p,$+=p)f[S++]=(e[m]+s[0])/i[0],f[y++]=(e[_]+s[1])/i[1],f[g++]=(e[w]+s[2])/i[2],x!==-1&&$!==-1&&(f[x++]=(e[$]+s[3])/i[3]);return u==="RGBA"?new St("float32",f,[1,4,r,n]):new St("float32",f,[1,3,r,n])},$v=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=u();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let m=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=m,o.width=_}else o.tensorFormat="RGBA",o.height=m,o.width=_;p.drawImage(e,0,0),s=p.getImageData(0,0,_,m).data}else throw new Error("Can not access image data")}else if(n){let f,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,p=t.resizedWidth):(f=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=f,o.width=p,t!==void 0){let m=u();m.width=p,m.height=f;let _=d(m);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,p,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=u();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let m=e.height,_=e.width;return p.drawImage(e,0,0,_,m),s=p.getImageData(0,0,_,m).data,o.height=m,o.width=_,os(s,o)}else throw new Error("Can not access image data")}else{if(i)return new Promise((f,p)=>{let m=u(),_=d(m);if(!e||!_)return p();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{m.width=w.width,m.height=w.height,_.drawImage(w,0,0,m.width,m.height);let $=_.getImageData(0,0,m.width,m.height);o.height=m.height,o.width=m.width,f(os($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return os(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},xv=(e,t)=>{let{width:r,height:n,download:a,dispose:i}=t,s=[1,n,r,4];return new St({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:i})},bv=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new St({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:a,dispose:i})},kv=(e,t)=>{let{dataType:r,dims:n,download:a,dispose:i}=t;return new St({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:a,dispose:i})},Sv=(e,t,r)=>new St({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),gn,Ki,El,Cv,hk=V(()=>{gn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ki=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),El=!1,Cv=()=>{if(!El){El=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(gn.set("int64",BigInt64Array),Ki.set(BigInt64Array,"int64")),t&&(gn.set("uint64",BigUint64Array),Ki.set(BigUint64Array,"uint64")),n?(gn.set("float16",r),Ki.set(r,"float16")):gn.set("float16",Uint16Array)}}}),Ev,Tv,mk=V(()=>{Ec(),Ev=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},Tv=(e,t)=>{switch(e.location){case"cpu":return new St(e.type,e.data,t);case"cpu-pinned":return new St({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new St({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new St({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new St({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),St,Ec=V(()=>{fk(),pk(),hk(),mk(),St=class{constructor(e,t,r){Cv();let n,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=gn.get(n);if(!s)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=gn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",s=e;else if(u==="boolean")n="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",s=Uint8Array.from(e);else{let u=Ki.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=s,this.dataLocation="cpu"}let i=Ev(a);if(this.cpuData&&i!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=a,this.size=i}static async fromImage(e,t){return $v(e,t)}static fromTexture(e,t){return xv(e,t)}static fromGpuBuffer(e,t){return bv(e,t)}static fromMLTensor(e,t){return kv(e,t)}static fromPinnedBuffer(e,t,r){return Sv(e,t,r)}toDataURL(e){return vv(this,e)}toImageData(e){return wv(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Tv(this,e)}}}),Yt,Iv=V(()=>{Ec(),Yt=St}),io,Tl,ur,Jt,kn,Sn,zv=V(()=>{_v(),io=(e,t)=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Tl=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],n=!1;for(let i=0;i<r.length;i++){if(n&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),io("CPU",s);return}r[i].includes("TRACE_FUNC")&&(n=!0)}},ur=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Tl("BEGIN",e)},Jt=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||Tl("END",e)},kn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.time(`ORT::${e}`)},Sn=e=>{(typeof Ze.trace>"u"?!Ze.wasm.trace:!Ze.trace)||console.timeEnd(`ORT::${e}`)}}),Av,gk=V(()=>{gv(),Iv(),zv(),Av=class Ov{constructor(t){this.handler=t}async run(t,r,n){ur(),kn("InferenceSession.run");let a={},i={};if(typeof t!="object"||t===null||t instanceof Yt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Yt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(f.indexOf(p)!==-1){let m=r[p];(m===null||m instanceof Yt)&&(d=!0,s=!1,a[p]=m)}if(d){if(typeof n=="object"&&n!==null)i=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let o=await this.handler.run(t,a,i),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let f=o[d];f instanceof Yt?u[d]=f:u[d]=new Yt(f.type,f.data,f.dims)}return Sn("InferenceSession.run"),Jt(),u}async release(){return this.handler.dispose()}static async create(t,r,n,a){ur(),kn("InferenceSession.create");let i,s={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,p=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(m=t.byteLength-p,typeof n=="number"){if(m=n,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||p+m>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-p}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(f,p,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await mv(s),d=await o.createInferenceSessionHandler(i,u);return Sn("InferenceSession.create"),Jt(),new Ov(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Tc,yk=V(()=>{gk(),Tc=Av}),_k=V(()=>{}),vk=V(()=>{}),wk=V(()=>{}),$k=V(()=>{}),xk={};wi(xk,{InferenceSession:()=>Tc,TRACE:()=>io,TRACE_EVENT_BEGIN:()=>kn,TRACE_EVENT_END:()=>Sn,TRACE_FUNC_BEGIN:()=>ur,TRACE_FUNC_END:()=>Jt,Tensor:()=>Yt,env:()=>Ce,registerBackend:()=>ei});var Lt=V(()=>{uk(),ck(),yk(),Iv(),_k(),vk(),zv(),wk(),$k()}),Ic=V(()=>{}),Rv={};wi(Rv,{default:()=>Nv});var Il,zl,Nv,bk=V(()=>{var e;L$(),Dn(),zc(),Il="ort-wasm-proxy-worker",zl=((e=globalThis.self)==null?void 0:e.name)===Il,zl&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":Ac(n.wasm).then(()=>{Kc(n).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:i}=n;Qc(i,a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:a}=n,i=fo(a);postMessage({type:r,out:i});break}case"create":{let{model:a,options:i}=n;Yc(a,i).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":Zc(n),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:i,inputs:s,outputIndices:o,options:u}=n;Xc(a,i,s,o,new Array(o.length).fill(null),u).then(d=>{d.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},ef([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Jc(n),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),Nv=zl?null:t=>new Worker(t??bt,{type:"module",name:Il})}),Mv={};wi(Mv,{default:()=>Dv});var Al,Dv,Ch,kk=V(()=>{var e,t;Al=async function(r={}){var pp;var n,a,i=r,s=new Promise((l,c)=>{n=l,a=c}),o=typeof window=="object",u=typeof WorkerGlobalScope<"u",d=u&&((pp=self.name)==null?void 0:pp.startsWith("em-pthread"));i.mountExternalData=(l,c)=>{l.startsWith("./")&&(l=l.substring(2)),(i.Fb||(i.Fb=new Map)).set(l,c)},i.unmountExternalData=()=>{delete i.Fb};var f=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let p=l=>async(...c)=>{var h;try{if(i.Gb)throw Error("Session already started");let v=i.Gb={ec:c[0],errors:[]},b=await l(...c);if(i.Gb!==v)throw Error("Session mismatch");(h=i.Kb)==null||h.flush();let E=v.errors;if(0<E.length){let A=await Promise.all(E);if(A=A.filter(N=>N),0<A.length)throw Error(A.join(`
`))}return b}finally{i.Gb=null}};i.jsepInit=(l,c)=>{if(l==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.Ab,i.$b,i.bc,i.Wb,i.Xb,i.ac]=c;let h=i.Kb;i.jsepRegisterBuffer=(v,b,E,A)=>h.registerBuffer(v,b,E,A),i.jsepGetBuffer=v=>h.getBuffer(v),i.jsepCreateDownloader=(v,b,E)=>h.createDownloader(v,b,E),i.jsepOnCreateSession=v=>{h.onCreateSession(v)},i.jsepOnReleaseSession=v=>{h.onReleaseSession(v)},i.jsepOnRunStart=v=>h.onRunStart(v),i.cc=(v,b)=>{h.upload(v,b)}}else if(l==="webnn"){let h=c[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor,i.nc,i.webnnEnableTraceEvent]=c.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnRegisterMLContext=i.nc,i.webnnOnRunStart=v=>h.onRunStart(v),i.webnnOnRunEnd=h.onRunEnd.bind(h),i.webnnOnReleaseSession=v=>{h.onReleaseSession(v)},i.webnnCreateMLTensorDownloader=(v,b)=>h.createMLTensorDownloader(v,b),i.webnnRegisterMLTensor=(v,b,E,A)=>h.registerMLTensor(v,b,E,A),i.webnnCreateMLContext=v=>h.createMLContext(v),i.webnnRegisterMLConstant=(v,b,E,A,N,U)=>h.registerMLConstant(v,b,E,A,N,i.Fb,U),i.webnnRegisterGraphInput=h.registerGraphInput.bind(h),i.webnnIsGraphInput=h.isGraphInput.bind(h),i.webnnRegisterGraphOutput=h.registerGraphOutput.bind(h),i.webnnIsGraphOutput=h.isGraphOutput.bind(h),i.webnnCreateTemporaryTensor=h.createTemporaryTensor.bind(h),i.webnnIsGraphInputOutputTypeSupported=h.isGraphInputOutputTypeSupported.bind(h)}};let m=()=>{let l=(c,h,v)=>(...b)=>{let E=rr,A=h==null?void 0:h();b=c(...b);let N=h==null?void 0:h();return A!==N&&(c=N,v(A),h=v=null),rr!=E?new Promise((U,q)=>{Fo={resolve:U,reject:q}}):b};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[c]=l(i[c],()=>i[c],h=>i[c]=h)})(),p!==void 0&&(i._OrtRun=p(i._OrtRun),i._OrtRunWithBinding=p(i._OrtRunWithBinding)),m=void 0};i.asyncInit=()=>{m==null||m()};var _,w,$=(l,c)=>{throw c},S=import.meta.url,y="";if(o||u){try{y=new URL(".",S).href}catch{}u&&(w=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),_=async l=>{if(W(l))return new Promise((h,v)=>{var b=new XMLHttpRequest;b.open("GET",l,!0),b.responseType="arraybuffer",b.onload=()=>{b.status==200||b.status==0&&b.response?h(b.response):v(b.status)},b.onerror=v,b.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var g,x,k,C,T,I,z,O,L,Z,Q,K,ce,oe,G,ue=console.log.bind(console),D=console.error.bind(console),F=ue,X=D,R=!1,W=l=>l.startsWith("file://");function Y(){return x.buffer!=T.buffer&&ge(),T}function J(){return x.buffer!=T.buffer&&ge(),I}function Ie(){return x.buffer!=T.buffer&&ge(),z}function qe(){return x.buffer!=T.buffer&&ge(),O}function j(){return x.buffer!=T.buffer&&ge(),L}function be(){return x.buffer!=T.buffer&&ge(),Z}function le(){return x.buffer!=T.buffer&&ge(),Q}function fe(){return x.buffer!=T.buffer&&ge(),oe}if(d){let l=function(c){try{var h=c.data,v=h.Db;if(v==="load"){let b=[];self.onmessage=E=>b.push(E),self.startWorker=()=>{postMessage({Db:"loaded"});for(let E of b)l(E);self.onmessage=l};for(let E of h.Sb)i[E]&&!i[E].proxy||(i[E]=(...A)=>{postMessage({Db:"callHandler",Rb:E,args:A})},E=="print"&&(F=i[E]),E=="printErr"&&(X=i[E]));x=h.kc,ge(),G(h.lc)}else if(v==="run"){i2(h.Bb),Qo(h.Bb,0,0,1,0,0),uf(),jo(h.Bb),We||(tp(),We=!0);try{a2(h.hc,h.Jb)}catch(b){if(b!="unwind")throw b}}else h.target!=="setimmediate"&&(v==="checkMailbox"?We&&Na():v&&(X(`worker: received unknown command ${v}`),X(h)))}catch(b){throw rp(),b}};var We=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=l}function ge(){var l=x.buffer;i.HEAP8=T=new Int8Array(l),z=new Int16Array(l),i.HEAPU8=I=new Uint8Array(l),O=new Uint16Array(l),i.HEAP32=L=new Int32Array(l),i.HEAPU32=Z=new Uint32Array(l),Q=new Float32Array(l),oe=new Float64Array(l),K=new BigInt64Array(l),ce=new BigUint64Array(l)}function Se(){d?startWorker(i):P.Da()}var ut,dr=0,cr=null;function Oa(){if(--dr==0&&cr){var l=cr;cr=null,l()}}function fr(l){throw X(l="Aborted("+l+")"),R=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),a(l),l}function Ra(){return{a:{L:xx,Aa:$x,b:o2,$:pf,A:gf,pa:yf,X:_f,Z:vf,qa:wf,na:$f,ga:xf,ma:bf,J:kf,Y:Sf,V:Cf,oa:Ef,W:Tf,va:l2,E:u2,Q:d2,O:f2,D:h2,v:m2,s:g2,P:y2,z:k2,R:S2,ja:C2,T:E2,aa:T2,M:I2,F:z2,ia:jo,sa:A2,r:O2,Ca:R2,w:D2,o:P2,m:L2,c:Po,Ba:U2,n:j2,j:V2,u:q2,p:H2,f:G2,t:K2,l:Q2,e:Y2,k:Z2,h:X2,g:J2,d:ex,da:tx,ea:rx,fa:nx,ba:jf,ca:Wf,N:Ff,xa:ax,ua:ox,i:lx,C:ux,G:dx,ta:sx,x:cx,ra:fx,U:px,q:ix,y:hx,K:mx,S:gx,za:yx,ya:_x,ka:Gf,la:Kf,_:Ro,B:Qf,I:Yf,ha:Zf,H:Xf,a:x,wa:Oo}}}class Bn{constructor(c){hp(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var nf=l=>{l.terminate(),l.onmessage=()=>{}},Ao=[],af=l=>{Ar.length==0&&(cf(),df(Ar[0]));var c=Ar.pop();if(!c)return 6;$i.push(c),on[l.Bb]=c,c.Bb=l.Bb;var h={Db:"run",hc:l.fc,Jb:l.Jb,Bb:l.Bb};return c.postMessage(h,l.Nb),0},zr=0,Ae=(l,c,...h)=>{for(var v=2*h.length,b=Xo(),E=Zo(8*v),A=E>>>3,N=0;N<h.length;N++){var U=h[N];typeof U=="bigint"?(K[A+2*N]=1n,K[A+2*N+1]=U):(K[A+2*N]=0n,fe()[A+2*N+1>>>0]=U)}return l=np(l,0,v,E,c),Fa(b),l};function Oo(l){if(d)return Ae(0,1,l);if(C=l,!(0<zr)){for(var c of $i)nf(c);for(c of Ar)nf(c);Ar=[],$i=[],on={},R=!0}$(0,new Bn(l))}function sf(l){if(d)return Ae(1,0,l);Ro(l)}var Ro=l=>{if(C=l,d)throw sf(l),"unwind";Oo(l)},Ar=[],$i=[],of=[],on={},lf=l=>{var c=l.Bb;delete on[c],Ar.push(l),$i.splice($i.indexOf(l),1),l.Bb=0,ip(c)};function uf(){of.forEach(l=>l())}var df=l=>new Promise(c=>{l.onmessage=b=>{var E=(b=b.data).Db;if(b.Hb&&b.Hb!=Ko()){var A=on[b.Hb];A?A.postMessage(b,b.Nb):X(`Internal error! Worker sent a message "${E}" to target pthread ${b.Hb}, but that thread no longer exists!`)}else E==="checkMailbox"?Na():E==="spawnThread"?af(b):E==="cleanupThread"?lf(on[b.ic]):E==="loaded"?(l.loaded=!0,c(l)):b.target==="setimmediate"?l.postMessage(b):E==="callHandler"?i[b.Rb](...b.args):E&&X(`worker sent an unknown command ${E}`)},l.onerror=b=>{throw X(`worker sent an error! ${b.filename}:${b.lineno}: ${b.message}`),b};var h,v=[];for(h of[])i.propertyIsEnumerable(h)&&v.push(h);l.postMessage({Db:"load",Sb:v,kc:x,lc:k})});function cf(){var l=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Ar.push(l)}var i2=l=>{ge();var c=be()[l+52>>>2>>>0];l=be()[l+56>>>2>>>0],op(c,c-l),Fa(c)},a2=(l,c)=>{zr=0,l=lp(l,c),0<zr?C=l:Yo(l)};class s2{constructor(c){this.Ib=c-24}}function o2(l,c,h){var v=new s2(l>>>=0);throw c>>>=0,h>>>=0,be()[v.Ib+16>>>2>>>0]=0,be()[v.Ib+4>>>2>>>0]=c,be()[v.Ib+8>>>2>>>0]=h,l}function ff(l,c,h,v){return d?Ae(2,1,l,c,h,v):pf(l,c,h,v)}function pf(l,c,h,v){if(l>>>=0,h>>>=0,v>>>=0,f===void 0)return 6;var b=[];return d&&b.length===0?ff(l,c>>>=0,h,v):(l={fc:h,Bb:l,Jb:v,Nb:b},d?(l.Db="spawnThread",postMessage(l,b),0):af(l))}var hf=typeof TextDecoder<"u"?new TextDecoder:void 0,mf=(l,c=0,h=NaN)=>{var v=(c>>>=0)+h;for(h=c;l[h]&&!(h>=v);)++h;if(16<h-c&&l.buffer&&hf)return hf.decode(l.buffer instanceof ArrayBuffer?l.subarray(c,h):l.slice(c,h));for(v="";c<h;){var b=l[c++];if(128&b){var E=63&l[c++];if((224&b)==192)v+=String.fromCharCode((31&b)<<6|E);else{var A=63&l[c++];65536>(b=(240&b)==224?(15&b)<<12|E<<6|A:(7&b)<<18|E<<12|A<<6|63&l[c++])?v+=String.fromCharCode(b):(b-=65536,v+=String.fromCharCode(55296|b>>10,56320|1023&b))}}else v+=String.fromCharCode(b)}return v},Fe=(l,c)=>(l>>>=0)?mf(J(),l,c):"";function gf(l,c,h){return d?Ae(3,1,l,c,h):0}function yf(l,c){if(d)return Ae(4,1,l,c)}function _f(l,c){if(d)return Ae(5,1,l,c)}function vf(l,c,h){if(d)return Ae(6,1,l,c,h)}function wf(l,c,h){return d?Ae(7,1,l,c,h):0}function $f(l,c){if(d)return Ae(8,1,l,c)}function xf(l,c,h){if(d)return Ae(9,1,l,c,h)}function bf(l,c,h,v){if(d)return Ae(10,1,l,c,h,v)}function kf(l,c,h,v){if(d)return Ae(11,1,l,c,h,v)}function Sf(l,c,h,v){if(d)return Ae(12,1,l,c,h,v)}function Cf(l){if(d)return Ae(13,1,l)}function Ef(l,c){if(d)return Ae(14,1,l,c)}function Tf(l,c,h){if(d)return Ae(15,1,l,c,h)}var If,l2=()=>fr(""),tr=l=>{for(var c="";J()[l>>>0];)c+=If[J()[l++>>>0]];return c},No={},Mo={},Ln=i.BindingError=class extends Error{constructor(l){super(l),this.name="BindingError"}};function pr(l,c,h={}){return function(v,b,E={}){var A=b.name;if(!v)throw new Ln(`type "${A}" must have a positive integer typeid pointer`);if(Mo.hasOwnProperty(v)){if(E.Tb)return;throw new Ln(`Cannot register type '${A}' twice`)}Mo[v]=b,No.hasOwnProperty(v)&&(b=No[v],delete No[v],b.forEach(N=>N()))}(l,c,h)}var zf=(l,c,h)=>{switch(c){case 1:return h?v=>Y()[v>>>0]:v=>J()[v>>>0];case 2:return h?v=>Ie()[v>>>1>>>0]:v=>qe()[v>>>1>>>0];case 4:return h?v=>j()[v>>>2>>>0]:v=>be()[v>>>2>>>0];case 8:return h?v=>K[v>>>3]:v=>ce[v>>>3];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}};function u2(l,c,h){h>>>=0,pr(l>>>=0,{name:c=tr(c>>>0),fromWireType:v=>v,toWireType:function(v,b){if(typeof b!="bigint"&&typeof b!="number")throw b=b===null?"null":(v=typeof b)=="object"||v==="array"||v==="function"?b.toString():""+b,new TypeError(`Cannot convert "${b}" to ${this.name}`);return typeof b=="number"&&(b=BigInt(b)),b},Cb:Or,readValueFromPointer:zf(c,h,c.indexOf("u")==-1),Eb:null})}var Or=8;function d2(l,c,h,v){pr(l>>>=0,{name:c=tr(c>>>0),fromWireType:function(b){return!!b},toWireType:function(b,E){return E?h:v},Cb:Or,readValueFromPointer:function(b){return this.fromWireType(J()[b>>>0])},Eb:null})}var Do=[],hr=[];function Po(l){9<(l>>>=0)&&--hr[l+1]==0&&(hr[l]=void 0,Do.push(l))}var dt=l=>{if(!l)throw new Ln(`Cannot use deleted val. handle = ${l}`);return hr[l]},Ot=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Do.pop()||hr.length;return hr[c]=l,hr[c+1]=1,c}};function Bo(l){return this.fromWireType(be()[l>>>2>>>0])}var c2={name:"emscripten::val",fromWireType:l=>{var c=dt(l);return Po(l),c},toWireType:(l,c)=>Ot(c),Cb:Or,readValueFromPointer:Bo,Eb:null};function f2(l){return pr(l>>>0,c2)}var p2=(l,c)=>{switch(c){case 4:return function(h){return this.fromWireType(le()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(fe()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}};function h2(l,c,h){h>>>=0,pr(l>>>=0,{name:c=tr(c>>>0),fromWireType:v=>v,toWireType:(v,b)=>b,Cb:Or,readValueFromPointer:p2(c,h),Eb:null})}function m2(l,c,h,v,b){if(l>>>=0,h>>>=0,c=tr(c>>>0),b===-1&&(b=4294967295),b=N=>N,v===0){var E=32-8*h;b=N=>N<<E>>>E}var A=c.includes("unsigned")?function(N,U){return U>>>0}:function(N,U){return U};pr(l,{name:c,fromWireType:b,toWireType:A,Cb:Or,readValueFromPointer:zf(c,h,v!==0),Eb:null})}function g2(l,c,h){function v(E){var A=be()[E>>>2>>>0];return E=be()[E+4>>>2>>>0],new b(Y().buffer,E,A)}var b=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];pr(l>>>=0,{name:h=tr(h>>>0),fromWireType:v,Cb:Or,readValueFromPointer:v},{Tb:!0})}var ln=(l,c,h)=>{var v=J();if(c>>>=0,0<h){var b=c;h=c+h-1;for(var E=0;E<l.length;++E){var A=l.charCodeAt(E);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&l.charCodeAt(++E)),127>=A){if(c>=h)break;v[c++>>>0]=A}else{if(2047>=A){if(c+1>=h)break;v[c++>>>0]=192|A>>6}else{if(65535>=A){if(c+2>=h)break;v[c++>>>0]=224|A>>12}else{if(c+3>=h)break;v[c++>>>0]=240|A>>18,v[c++>>>0]=128|A>>12&63}v[c++>>>0]=128|A>>6&63}v[c++>>>0]=128|63&A}}v[c>>>0]=0,l=c-b}else l=0;return l},Lo=l=>{for(var c=0,h=0;h<l.length;++h){var v=l.charCodeAt(h);127>=v?c++:2047>=v?c+=2:55296<=v&&57343>=v?(c+=4,++h):c+=3}return c};function y2(l,c){pr(l>>>=0,{name:c=tr(c>>>0),fromWireType:function(h){for(var v,b=be()[h>>>2>>>0],E=h+4,A=E,N=0;N<=b;++N){var U=E+N;N!=b&&J()[U>>>0]!=0||(A=Fe(A,U-A),v===void 0?v=A:(v+="\0",v+=A),A=U+1)}return mr(h),v},toWireType:function(h,v){v instanceof ArrayBuffer&&(v=new Uint8Array(v));var b=typeof v=="string";if(!(b||ArrayBuffer.isView(v)&&v.BYTES_PER_ELEMENT==1))throw new Ln("Cannot pass non-string to std::string");var E=b?Lo(v):v.length,A=Wa(4+E+1),N=A+4;return be()[A>>>2>>>0]=E,b?ln(v,N,E+1):J().set(v,N>>>0),h!==null&&h.push(mr,A),A},Cb:Or,readValueFromPointer:Bo,Eb(h){mr(h)}})}var Af=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,_2=(l,c)=>{for(var h=l>>1,v=h+c/2;!(h>=v)&&qe()[h>>>0];)++h;if(32<(h<<=1)-l&&Af)return Af.decode(J().slice(l,h));for(h="",v=0;!(v>=c/2);++v){var b=Ie()[l+2*v>>>1>>>0];if(b==0)break;h+=String.fromCharCode(b)}return h},v2=(l,c,h)=>{if(h??(h=2147483647),2>h)return 0;var v=c;h=(h-=2)<2*l.length?h/2:l.length;for(var b=0;b<h;++b){var E=l.charCodeAt(b);Ie()[c>>>1>>>0]=E,c+=2}return Ie()[c>>>1>>>0]=0,c-v},w2=l=>2*l.length,$2=(l,c)=>{for(var h=0,v="";!(h>=c/4);){var b=j()[l+4*h>>>2>>>0];if(b==0)break;++h,65536<=b?(b-=65536,v+=String.fromCharCode(55296|b>>10,56320|1023&b)):v+=String.fromCharCode(b)}return v},x2=(l,c,h)=>{if(c>>>=0,h??(h=2147483647),4>h)return 0;var v=c;h=v+h-4;for(var b=0;b<l.length;++b){var E=l.charCodeAt(b);if(55296<=E&&57343>=E&&(E=65536+((1023&E)<<10)|1023&l.charCodeAt(++b)),j()[c>>>2>>>0]=E,(c+=4)+4>h)break}return j()[c>>>2>>>0]=0,c-v},b2=l=>{for(var c=0,h=0;h<l.length;++h){var v=l.charCodeAt(h);55296<=v&&57343>=v&&++h,c+=4}return c};function k2(l,c,h){if(l>>>=0,c>>>=0,h=tr(h>>>=0),c===2)var v=_2,b=v2,E=w2,A=N=>qe()[N>>>1>>>0];else c===4&&(v=$2,b=x2,E=b2,A=N=>be()[N>>>2>>>0]);pr(l,{name:h,fromWireType:N=>{for(var U,q=be()[N>>>2>>>0],ee=N+4,ae=0;ae<=q;++ae){var me=N+4+ae*c;ae!=q&&A(me)!=0||(ee=v(ee,me-ee),U===void 0?U=ee:(U+="\0",U+=ee),ee=me+c)}return mr(N),U},toWireType:(N,U)=>{if(typeof U!="string")throw new Ln(`Cannot pass non-string to C++ string type ${h}`);var q=E(U),ee=Wa(4+q+c);return be()[ee>>>2>>>0]=q/c,b(U,ee+4,q+c),N!==null&&N.push(mr,ee),ee},Cb:Or,readValueFromPointer:Bo,Eb(N){mr(N)}})}function S2(l,c){pr(l>>>=0,{Ub:!0,name:c=tr(c>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function C2(l){Qo(l>>>0,!u,1,!o,131072,!1),uf()}var Uo=l=>{if(!R)try{if(l(),!(0<zr))try{d?Yo(C):Ro(C)}catch(c){c instanceof Bn||c=="unwind"||$(0,c)}}catch(c){c instanceof Bn||c=="unwind"||$(0,c)}};function jo(l){l>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(j(),l>>>2,l).value.then(Na),l+=128,Atomics.store(j(),l>>>2,1))}var Na=()=>{var l=Ko();l&&(jo(l),Uo(sp))};function E2(l,c){(l>>>=0)==c>>>0?setTimeout(Na):d?postMessage({Hb:l,Db:"checkMailbox"}):(l=on[l])&&l.postMessage({Db:"checkMailbox"})}var Wo=[];function T2(l,c,h,v,b){for(c>>>=0,v/=2,Wo.length=v,h=b>>>0>>>3,b=0;b<v;b++)Wo[b]=K[h+2*b]?K[h+2*b+1]:fe()[h+2*b+1>>>0];return(c?Go[c]:wx[l])(...Wo)}var I2=()=>{zr=0};function z2(l){l>>>=0,d?postMessage({Db:"cleanupThread",ic:l}):lf(on[l])}function A2(l){}var Ma=(l,c)=>{var h=Mo[l];if(h===void 0)throw l=ep(l),h=tr(l),mr(l),new Ln(`${c} has unknown type ${h}`);return h},Of=(l,c,h)=>{var v=[];return l=l.toWireType(v,h),v.length&&(be()[c>>>2>>>0]=Ot(v)),l};function O2(l,c,h){return c>>>=0,h>>>=0,l=dt(l>>>0),c=Ma(c,"emval::as"),Of(c,h,l)}function R2(l,c){return c>>>=0,l=dt(l>>>0),(c=Ma(c,"emval::as")).toWireType(null,l)}var Da=l=>{try{l()}catch(c){fr(c)}},Rr=0,rr=null,Rf=0,Pa=[],Nf={},Mf={},N2=0,Fo=null,M2=[];function Df(l){return function(c){if(!R){if(Rr===0){var h=!1,v=!1;c((b=0)=>{if(!R&&(Rf=b,h=!0,v)){Rr=2,Da(()=>cp(rr)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),b=!1;try{var E=function(){var U=j()[rr+8>>>2>>>0];return U=P[Mf[U]],--zr,U()}()}catch(U){E=U,b=!0}var A=!1;if(!rr){var N=Fo;N&&(Fo=null,(b?N.reject:N.resolve)(E),A=!0)}if(b&&!A)throw E}}),v=!0,h||(Rr=1,rr=function(){var b=Wa(65548),E=b+12;be()[b>>>2>>>0]=E,be()[b+4>>>2>>>0]=E+65536,E=Pa[0];var A=Nf[E];return A===void 0&&(A=N2++,Nf[E]=A,Mf[A]=E),E=A,j()[b+8>>>2>>>0]=E,b}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),Da(()=>up(rr)))}else Rr===2?(Rr=0,Da(fp),mr(rr),rr=null,M2.forEach(Uo)):fr(`invalid state: ${Rr}`);return Rf}}(c=>{l().then(c)})}function D2(l){return l>>>=0,Df(async()=>{var c=await dt(l);return Ot(c)})}var Ba=[];function P2(l,c,h,v){return h>>>=0,v>>>=0,(l=Ba[l>>>0])(null,c=dt(c>>>0),h,v)}var B2={},La=l=>{var c=B2[l];return c===void 0?tr(l):c};function L2(l,c,h,v,b){return h>>>=0,v>>>=0,b>>>=0,(l=Ba[l>>>0])(c=dt(c>>>0),c[h=La(h)],v,b)}function U2(l,c){return c>>>=0,(l=dt(l>>>0))==dt(c)}var Pf=()=>typeof globalThis=="object"?globalThis:Function("return this")();function j2(l){return(l>>>=0)==0?Ot(Pf()):(l=La(l),Ot(Pf()[l]))}var W2=l=>{var c=Ba.length;return Ba.push(l),c},F2=(l,c)=>{for(var h=Array(l),v=0;v<l;++v)h[v]=Ma(be()[c+4*v>>>2>>>0],`parameter ${v}`);return h};function V2(l,c,h){var v=(c=F2(l,c>>>0)).shift();l--;var b=`return function (obj, func, destructorsRef, args) {
`,E=0,A=[];h===0&&A.push("obj");for(var N=["retType"],U=[v],q=0;q<l;++q)A.push(`arg${q}`),N.push(`argType${q}`),U.push(c[q]),b+=`  var arg${q} = argType${q}.readValueFromPointer(args${E?"+"+E:""});
`,E+=c[q].Cb;return b+=`  var rv = ${h===1?"new func":"func.call"}(${A.join(", ")});
`,v.Ub||(N.push("emval_returnValue"),U.push(Of),b+=`  return emval_returnValue(retType, destructorsRef, rv);
`),l=new Function(...N,b+`};
`)(...U),h=`methodCaller<(${c.map(ee=>ee.name).join(", ")}) => ${v.name}>`,W2(Object.defineProperty(l,"name",{value:h}))}function q2(l){return l=La(l>>>0),Ot(i[l])}function H2(l,c){return c>>>=0,l=dt(l>>>0),c=dt(c),Ot(l[c])}function G2(l){9<(l>>>=0)&&(hr[l+1]+=1)}function K2(){return Ot([])}function Q2(l){l=dt(l>>>0);for(var c=Array(l.length),h=0;h<l.length;h++)c[h]=l[h];return Ot(c)}function Y2(l){return Ot(La(l>>>0))}function Z2(){return Ot({})}function X2(l){for(var c=dt(l>>>=0);c.length;){var h=c.pop();c.pop()(h)}Po(l)}function J2(l,c,h){c>>>=0,h>>>=0,l=dt(l>>>0),c=dt(c),h=dt(h),l[c]=h}function ex(l,c){return c>>>=0,l=(l=Ma(l>>>0,"_emval_take_value")).readValueFromPointer(c),Ot(l)}function tx(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),j()[c>>>2>>>0]=l.getUTCSeconds(),j()[c+4>>>2>>>0]=l.getUTCMinutes(),j()[c+8>>>2>>>0]=l.getUTCHours(),j()[c+12>>>2>>>0]=l.getUTCDate(),j()[c+16>>>2>>>0]=l.getUTCMonth(),j()[c+20>>>2>>>0]=l.getUTCFullYear()-1900,j()[c+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,j()[c+28>>>2>>>0]=l}var Bf=l=>l%4==0&&(l%100!=0||l%400==0),Lf=[0,31,60,91,121,152,182,213,244,274,305,335],Uf=[0,31,59,90,120,151,181,212,243,273,304,334];function rx(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),j()[c>>>2>>>0]=l.getSeconds(),j()[c+4>>>2>>>0]=l.getMinutes(),j()[c+8>>>2>>>0]=l.getHours(),j()[c+12>>>2>>>0]=l.getDate(),j()[c+16>>>2>>>0]=l.getMonth(),j()[c+20>>>2>>>0]=l.getFullYear()-1900,j()[c+24>>>2>>>0]=l.getDay();var h=(Bf(l.getFullYear())?Lf:Uf)[l.getMonth()]+l.getDate()-1|0;j()[c+28>>>2>>>0]=h,j()[c+36>>>2>>>0]=-60*l.getTimezoneOffset(),h=new Date(l.getFullYear(),6,1).getTimezoneOffset();var v=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(h!=v&&l.getTimezoneOffset()==Math.min(v,h)),j()[c+32>>>2>>>0]=l}function nx(l){l>>>=0;var c=new Date(j()[l+20>>>2>>>0]+1900,j()[l+16>>>2>>>0],j()[l+12>>>2>>>0],j()[l+8>>>2>>>0],j()[l+4>>>2>>>0],j()[l>>>2>>>0],0),h=j()[l+32>>>2>>>0],v=c.getTimezoneOffset(),b=new Date(c.getFullYear(),6,1).getTimezoneOffset(),E=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,b);return 0>h?j()[l+32>>>2>>>0]=+(b!=E&&A==v):0<h!=(A==v)&&(b=Math.max(E,b),c.setTime(c.getTime()+6e4*((0<h?A:b)-v))),j()[l+24>>>2>>>0]=c.getDay(),h=(Bf(c.getFullYear())?Lf:Uf)[c.getMonth()]+c.getDate()-1|0,j()[l+28>>>2>>>0]=h,j()[l>>>2>>>0]=c.getSeconds(),j()[l+4>>>2>>>0]=c.getMinutes(),j()[l+8>>>2>>>0]=c.getHours(),j()[l+12>>>2>>>0]=c.getDate(),j()[l+16>>>2>>>0]=c.getMonth(),j()[l+20>>>2>>>0]=c.getYear(),l=c.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function jf(l,c,h,v,b,E,A){return d?Ae(16,1,l,c,h,v,b,E,A):-52}function Wf(l,c,h,v,b,E){if(d)return Ae(17,1,l,c,h,v,b,E)}var xi={},ix=()=>performance.timeOrigin+performance.now();function Ff(l,c){if(d)return Ae(18,1,l,c);if(xi[l]&&(clearTimeout(xi[l].id),delete xi[l]),!c)return 0;var h=setTimeout(()=>{delete xi[l],Uo(()=>ap(l,performance.timeOrigin+performance.now()))},c);return xi[l]={id:h,rc:c},0}function ax(l,c,h,v){l>>>=0,c>>>=0,h>>>=0,v>>>=0;var b=new Date().getFullYear(),E=new Date(b,0,1).getTimezoneOffset();b=new Date(b,6,1).getTimezoneOffset();var A=Math.max(E,b);be()[l>>>2>>>0]=60*A,j()[c>>>2>>>0]=+(E!=b),l=(c=N=>{var U=Math.abs(N);return`UTC${0<=N?"-":"+"}${String(Math.floor(U/60)).padStart(2,"0")}${String(U%60).padStart(2,"0")}`})(E),c=c(b),b<E?(ln(l,h,17),ln(c,v,17)):(ln(l,v,17),ln(c,h,17))}var sx=()=>Date.now();function ox(l,c,h){return 0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),K[h>>>0>>>3]=BigInt(Math.round(1e6*l)),0):28}var Vo=[],Vf=(l,c)=>{Vo.length=0;for(var h;h=J()[l++>>>0];){var v=h!=105;c+=(v&=h!=112)&&c%8?4:0,Vo.push(h==112?be()[c>>>2>>>0]:h==106?K[c>>>3]:h==105?j()[c>>>2>>>0]:fe()[c>>>3>>>0]),c+=v?8:4}return Vo};function lx(l,c,h){return l>>>=0,c=Vf(c>>>0,h>>>0),Go[l](...c)}function ux(l,c,h){return l>>>=0,c=Vf(c>>>0,h>>>0),Go[l](...c)}var dx=()=>{};function cx(l,c){return X(Fe(l>>>0,c>>>0))}var fx=()=>{throw zr+=1,"unwind"};function px(){return 4294901760}var hx=()=>navigator.hardwareConcurrency;function mx(){return fr("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function gx(l){l>>>=0;var c=J().length;if(l<=c||4294901760<l)return!1;for(var h=1;4>=h;h*=2){var v=c*(1+.2/h);v=Math.min(v,l+100663296);e:{v=(Math.min(4294901760,65536*Math.ceil(Math.max(l,v)/65536))-x.buffer.byteLength+65535)/65536|0;try{x.grow(v),ge();var b=1;break e}catch{}b=void 0}if(b)return!0}return!1}var Ua=()=>(fr("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),bi={},qf=l=>{l.forEach(c=>{Ua()})};function yx(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),qf(l),bi.Mb=Ua(),bi.dc=l,bi.Mb}function _x(l,c,h){if(l>>>=0,c>>>=0,bi.Mb==l)var v=bi.dc;else(v=Error().stack.toString().split(`
`))[0]=="Error"&&v.shift(),qf(v);for(var b=3;v[b]&&Ua()!=l;)++b;for(l=0;l<h&&v[l+b];++l)j()[c+4*l>>>2>>>0]=Ua();return l}var qo,Ho={},Hf=()=>{if(!qo){var l,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in Ho)Ho[l]===void 0?delete c[l]:c[l]=Ho[l];var h=[];for(l in c)h.push(`${l}=${c[l]}`);qo=h}return qo};function Gf(l,c){if(d)return Ae(19,1,l,c);l>>>=0,c>>>=0;var h,v=0,b=0;for(h of Hf()){var E=c+v;be()[l+b>>>2>>>0]=E,v+=ln(h,E,1/0)+1,b+=4}return 0}function Kf(l,c){if(d)return Ae(20,1,l,c);l>>>=0,c>>>=0;var h=Hf();for(var v of(be()[l>>>2>>>0]=h.length,l=0,h))l+=Lo(v)+1;return be()[c>>>2>>>0]=l,0}function Qf(l){return d?Ae(21,1,l):52}function Yf(l,c,h,v){return d?Ae(22,1,l,c,h,v):52}function Zf(l,c,h,v){return d?Ae(23,1,l,c,h,v):70}var vx=[null,[],[]];function Xf(l,c,h,v){if(d)return Ae(24,1,l,c,h,v);c>>>=0,h>>>=0,v>>>=0;for(var b=0,E=0;E<h;E++){var A=be()[c>>>2>>>0],N=be()[c+4>>>2>>>0];c+=8;for(var U=0;U<N;U++){var q=l,ee=J()[A+U>>>0],ae=vx[q];ee===0||ee===10?((q===1?F:X)(mf(ae)),ae.length=0):ae.push(ee)}b+=N}return be()[v>>>2>>>0]=b,0}d||function(){for(var l=i.numThreads-1;l--;)cf();Ao.push(()=>{dr++,function(c){d?c():Promise.all(Ar.map(df)).then(c)}(()=>Oa())})}();for(var Jf=Array(256),ja=0;256>ja;++ja)Jf[ja]=String.fromCharCode(ja);If=Jf,hr.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>hr.length/2-5-Do.length,d||(x=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ge()),i.wasmBinary&&(g=i.wasmBinary),i.stackSave=()=>Xo(),i.stackRestore=l=>Fa(l),i.stackAlloc=l=>Zo(l),i.setValue=function(l,c,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":Y()[l>>>0]=c;break;case"i16":Ie()[l>>>1>>>0]=c;break;case"i32":j()[l>>>2>>>0]=c;break;case"i64":K[l>>>3]=BigInt(c);break;case"float":le()[l>>>2>>>0]=c;break;case"double":fe()[l>>>3>>>0]=c;break;case"*":be()[l>>>2>>>0]=c;break;default:fr(`invalid type for setValue: ${h}`)}},i.getValue=function(l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return Y()[l>>>0];case"i16":return Ie()[l>>>1>>>0];case"i32":return j()[l>>>2>>>0];case"i64":return K[l>>>3];case"float":return le()[l>>>2>>>0];case"double":return fe()[l>>>3>>>0];case"*":return be()[l>>>2>>>0];default:fr(`invalid type for getValue: ${c}`)}},i.UTF8ToString=Fe,i.stringToUTF8=ln,i.lengthBytesUTF8=Lo;var wx=[Oo,sf,ff,gf,yf,_f,vf,wf,$f,xf,bf,kf,Sf,Cf,Ef,Tf,jf,Wf,Ff,Gf,Kf,Qf,Yf,Zf,Xf],Go={893836:(l,c,h,v,b)=>{if(i===void 0||!i.Fb)return 1;if((l=Fe(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=i.Fb.get(l)))return 2;if(c=Number(c>>>0),h=Number(h>>>0),v=Number(v>>>0),c+h>l.byteLength)return 3;try{let E=l.subarray(c,c+h);switch(b){case 0:J().set(E,v>>>0);break;case 1:i.mc?i.mc(v,E):i.cc(v,E);break;default:return 4}return 0}catch{return 4}},894660:(l,c,h)=>{i.Pb(l,J().subarray(c>>>0,c+h>>>0))},894724:()=>i.oc(),894766:l=>{i.Ob(l)},894803:()=>{i.Wb()},894834:()=>{i.Xb()},894863:()=>{i.ac()},894888:l=>i.Vb(l),894921:l=>i.Zb(l),894953:(l,c,h)=>{i.Lb(Number(l),Number(c),Number(h),!0)},895016:(l,c,h)=>{i.Lb(Number(l),Number(c),Number(h))},895073:()=>typeof wasmOffsetConverter<"u",895130:l=>{i.Ab("Abs",l,void 0)},895181:l=>{i.Ab("Neg",l,void 0)},895232:l=>{i.Ab("Floor",l,void 0)},895285:l=>{i.Ab("Ceil",l,void 0)},895337:l=>{i.Ab("Reciprocal",l,void 0)},895395:l=>{i.Ab("Sqrt",l,void 0)},895447:l=>{i.Ab("Exp",l,void 0)},895498:l=>{i.Ab("Erf",l,void 0)},895549:l=>{i.Ab("Sigmoid",l,void 0)},895604:(l,c,h)=>{i.Ab("HardSigmoid",l,{alpha:c,beta:h})},895683:l=>{i.Ab("Log",l,void 0)},895734:l=>{i.Ab("Sin",l,void 0)},895785:l=>{i.Ab("Cos",l,void 0)},895836:l=>{i.Ab("Tan",l,void 0)},895887:l=>{i.Ab("Asin",l,void 0)},895939:l=>{i.Ab("Acos",l,void 0)},895991:l=>{i.Ab("Atan",l,void 0)},896043:l=>{i.Ab("Sinh",l,void 0)},896095:l=>{i.Ab("Cosh",l,void 0)},896147:l=>{i.Ab("Asinh",l,void 0)},896200:l=>{i.Ab("Acosh",l,void 0)},896253:l=>{i.Ab("Atanh",l,void 0)},896306:l=>{i.Ab("Tanh",l,void 0)},896358:l=>{i.Ab("Not",l,void 0)},896409:(l,c,h)=>{i.Ab("Clip",l,{min:c,max:h})},896478:l=>{i.Ab("Clip",l,void 0)},896530:(l,c)=>{i.Ab("Elu",l,{alpha:c})},896588:l=>{i.Ab("Gelu",l,void 0)},896640:l=>{i.Ab("Relu",l,void 0)},896692:(l,c)=>{i.Ab("LeakyRelu",l,{alpha:c})},896756:(l,c)=>{i.Ab("ThresholdedRelu",l,{alpha:c})},896826:(l,c)=>{i.Ab("Cast",l,{to:c})},896884:l=>{i.Ab("Add",l,void 0)},896935:l=>{i.Ab("Sub",l,void 0)},896986:l=>{i.Ab("Mul",l,void 0)},897037:l=>{i.Ab("Div",l,void 0)},897088:l=>{i.Ab("Pow",l,void 0)},897139:l=>{i.Ab("Equal",l,void 0)},897192:l=>{i.Ab("Greater",l,void 0)},897247:l=>{i.Ab("GreaterOrEqual",l,void 0)},897309:l=>{i.Ab("Less",l,void 0)},897361:l=>{i.Ab("LessOrEqual",l,void 0)},897420:(l,c,h,v,b)=>{i.Ab("ReduceMean",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},897595:(l,c,h,v,b)=>{i.Ab("ReduceMax",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},897769:(l,c,h,v,b)=>{i.Ab("ReduceMin",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},897943:(l,c,h,v,b)=>{i.Ab("ReduceProd",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898118:(l,c,h,v,b)=>{i.Ab("ReduceSum",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898292:(l,c,h,v,b)=>{i.Ab("ReduceL1",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898465:(l,c,h,v,b)=>{i.Ab("ReduceL2",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898638:(l,c,h,v,b)=>{i.Ab("ReduceLogSum",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898815:(l,c,h,v,b)=>{i.Ab("ReduceSumSquare",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},898995:(l,c,h,v,b)=>{i.Ab("ReduceLogSumExp",l,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},899175:l=>{i.Ab("Where",l,void 0)},899228:(l,c,h)=>{i.Ab("Transpose",l,{perm:c?Array.from(j().subarray(Number(c)>>>0,Number(h)>>>0)):[]})},899352:(l,c,h,v)=>{i.Ab("DepthToSpace",l,{blocksize:c,mode:Fe(h),format:v?"NHWC":"NCHW"})},899485:(l,c,h,v)=>{i.Ab("DepthToSpace",l,{blocksize:c,mode:Fe(h),format:v?"NHWC":"NCHW"})},899618:(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He)=>{i.Ab("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:c,dilations:[h],group:v,kernelShape:[b],pads:[E,A],strides:[N],wIsConst:()=>!!Y()[q>>>0],outputPadding:ee?Array.from(j().subarray(Number(ee)>>>0,Number(ae)>>>0)):[],outputShape:me?Array.from(j().subarray(Number(me)>>>0,Number(we)>>>0)):[],activation:Fe(He)})},900051:(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we)=>{i.Ab("ConvTranspose",l,{format:N?"NHWC":"NCHW",autoPad:c,dilations:Array.from(j().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:v,kernelShape:Array.from(j().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(j().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(j().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!Y()[U>>>0],outputPadding:q?Array.from(j().subarray(Number(q)>>>0,Number(ee)>>>0)):[],outputShape:ae?Array.from(j().subarray(Number(ae)>>>0,Number(me)>>>0)):[],activation:Fe(we)})},900712:(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He)=>{i.Ab("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:c,dilations:[h],group:v,kernelShape:[b],pads:[E,A],strides:[N],wIsConst:()=>!!Y()[q>>>0],outputPadding:ee?Array.from(j().subarray(Number(ee)>>>0,Number(ae)>>>0)):[],outputShape:me?Array.from(j().subarray(Number(me)>>>0,Number(we)>>>0)):[],activation:Fe(He)})},901145:(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we)=>{i.Ab("ConvTranspose",l,{format:N?"NHWC":"NCHW",autoPad:c,dilations:Array.from(j().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:v,kernelShape:Array.from(j().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(j().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(j().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!Y()[U>>>0],outputPadding:q?Array.from(j().subarray(Number(q)>>>0,Number(ee)>>>0)):[],outputShape:ae?Array.from(j().subarray(Number(ae)>>>0,Number(me)>>>0)):[],activation:Fe(we)})},901806:(l,c)=>{i.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},901897:(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we)=>{i.Ab("AveragePool",l,{format:we?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:v,storage_order:b,dilations:E?Array.from(j().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(j().subarray(Number(N)>>>0,Number(U)>>>0)):[],pads:q?Array.from(j().subarray(Number(q)>>>0,Number(ee)>>>0)):[],strides:ae?Array.from(j().subarray(Number(ae)>>>0,Number(me)>>>0)):[]})},902376:(l,c)=>{i.Ab("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},902467:(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we)=>{i.Ab("AveragePool",l,{format:we?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:v,storage_order:b,dilations:E?Array.from(j().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(j().subarray(Number(N)>>>0,Number(U)>>>0)):[],pads:q?Array.from(j().subarray(Number(q)>>>0,Number(ee)>>>0)):[],strides:ae?Array.from(j().subarray(Number(ae)>>>0,Number(me)>>>0)):[]})},902946:(l,c)=>{i.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903033:(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we)=>{i.Ab("MaxPool",l,{format:we?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:v,storage_order:b,dilations:E?Array.from(j().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(j().subarray(Number(N)>>>0,Number(U)>>>0)):[],pads:q?Array.from(j().subarray(Number(q)>>>0,Number(ee)>>>0)):[],strides:ae?Array.from(j().subarray(Number(ae)>>>0,Number(me)>>>0)):[]})},903508:(l,c)=>{i.Ab("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},903595:(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we)=>{i.Ab("MaxPool",l,{format:we?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:v,storage_order:b,dilations:E?Array.from(j().subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from(j().subarray(Number(N)>>>0,Number(U)>>>0)):[],pads:q?Array.from(j().subarray(Number(q)>>>0,Number(ee)>>>0)):[],strides:ae?Array.from(j().subarray(Number(ae)>>>0,Number(me)>>>0)):[]})},904070:(l,c,h,v,b)=>{i.Ab("Gemm",l,{alpha:c,beta:h,transA:v,transB:b})},904174:l=>{i.Ab("MatMul",l,void 0)},904228:(l,c,h,v)=>{i.Ab("ArgMax",l,{keepDims:!!c,selectLastIndex:!!h,axis:v})},904336:(l,c,h,v)=>{i.Ab("ArgMin",l,{keepDims:!!c,selectLastIndex:!!h,axis:v})},904444:(l,c)=>{i.Ab("Softmax",l,{axis:c})},904507:(l,c)=>{i.Ab("Concat",l,{axis:c})},904567:(l,c,h,v,b)=>{i.Ab("Split",l,{axis:c,numOutputs:h,splitSizes:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},904723:l=>{i.Ab("Expand",l,void 0)},904777:(l,c)=>{i.Ab("Gather",l,{axis:Number(c)})},904848:(l,c)=>{i.Ab("GatherElements",l,{axis:Number(c)})},904927:(l,c)=>{i.Ab("GatherND",l,{batch_dims:Number(c)})},905006:(l,c,h,v,b,E,A,N,U,q,ee)=>{i.Ab("Resize",l,{antialias:c,axes:h?Array.from(j().subarray(Number(h)>>>0,Number(v)>>>0)):[],coordinateTransformMode:Fe(b),cubicCoeffA:E,excludeOutside:A,extrapolationValue:N,keepAspectRatioPolicy:Fe(U),mode:Fe(q),nearestMode:Fe(ee)})},905368:(l,c,h,v,b,E,A)=>{i.Ab("Slice",l,{starts:c?Array.from(j().subarray(Number(c)>>>0,Number(h)>>>0)):[],ends:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[],axes:E?Array.from(j().subarray(Number(E)>>>0,Number(A)>>>0)):[]})},905632:l=>{i.Ab("Tile",l,void 0)},905684:(l,c,h)=>{i.Ab("InstanceNormalization",l,{epsilon:c,format:h?"NHWC":"NCHW"})},905798:(l,c,h)=>{i.Ab("InstanceNormalization",l,{epsilon:c,format:h?"NHWC":"NCHW"})},905912:l=>{i.Ab("Range",l,void 0)},905965:(l,c)=>{i.Ab("Einsum",l,{equation:Fe(c)})},906046:(l,c,h,v,b)=>{i.Ab("Pad",l,{mode:c,value:h,pads:v?Array.from(j().subarray(Number(v)>>>0,Number(b)>>>0)):[]})},906189:(l,c,h,v,b,E)=>{i.Ab("BatchNormalization",l,{epsilon:c,momentum:h,spatial:!!b,trainingMode:!!v,format:E?"NHWC":"NCHW"})},906358:(l,c,h,v,b,E)=>{i.Ab("BatchNormalization",l,{epsilon:c,momentum:h,spatial:!!b,trainingMode:!!v,format:E?"NHWC":"NCHW"})},906527:(l,c,h)=>{i.Ab("CumSum",l,{exclusive:Number(c),reverse:Number(h)})},906624:(l,c,h)=>{i.Ab("DequantizeLinear",l,{axis:c,blockSize:h})},906714:(l,c,h,v,b)=>{i.Ab("GridSample",l,{align_corners:c,mode:Fe(h),padding_mode:Fe(v),format:b?"NHWC":"NCHW"})},906884:(l,c,h,v,b)=>{i.Ab("GridSample",l,{align_corners:c,mode:Fe(h),padding_mode:Fe(v),format:b?"NHWC":"NCHW"})},907054:(l,c)=>{i.Ab("ScatterND",l,{reduction:Fe(c)})},907139:(l,c,h,v,b,E,A,N,U)=>{i.Ab("Attention",l,{numHeads:c,isUnidirectional:h,maskFilterValue:v,scale:b,doRotary:E,qkvHiddenSizes:A?Array.from(j().subarray(Number(N)>>>0,Number(N)+A>>>0)):[],pastPresentShareBuffer:!!U})},907411:l=>{i.Ab("BiasAdd",l,void 0)},907466:l=>{i.Ab("BiasSplitGelu",l,void 0)},907527:l=>{i.Ab("FastGelu",l,void 0)},907583:(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt)=>{i.Ab("Conv",l,{format:ae?"NHWC":"NCHW",auto_pad:c,dilations:h?Array.from(j().subarray(Number(h)>>>0,Number(v)>>>0)):[],group:b,kernel_shape:E?Array.from(j().subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:N?Array.from(j().subarray(Number(N)>>>0,Number(U)>>>0)):[],strides:q?Array.from(j().subarray(Number(q)>>>0,Number(ee)>>>0)):[],w_is_const:()=>!!Y()[Number(me)>>>0],activation:Fe(we),activation_params:He?Array.from(le().subarray(Number(He)>>>0,Number(xt)>>>0)):[]})},908167:l=>{i.Ab("Gelu",l,void 0)},908219:(l,c,h,v,b,E,A,N,U)=>{i.Ab("GroupQueryAttention",l,{numHeads:c,kvNumHeads:h,scale:v,softcap:b,doRotary:E,rotaryInterleaved:A,smoothSoftmax:N,localWindowSize:U})},908436:(l,c,h,v)=>{i.Ab("LayerNormalization",l,{axis:c,epsilon:h,simplified:!!v})},908547:(l,c,h,v)=>{i.Ab("LayerNormalization",l,{axis:c,epsilon:h,simplified:!!v})},908658:(l,c,h,v,b,E)=>{i.Ab("MatMulNBits",l,{k:c,n:h,accuracyLevel:v,bits:b,blockSize:E})},908785:(l,c,h,v,b,E)=>{i.Ab("MultiHeadAttention",l,{numHeads:c,isUnidirectional:h,maskFilterValue:v,scale:b,doRotary:E})},908944:(l,c)=>{i.Ab("QuickGelu",l,{alpha:c})},909008:(l,c,h,v,b)=>{i.Ab("RotaryEmbedding",l,{interleaved:!!c,numHeads:h,rotaryEmbeddingDim:v,scale:b})},909147:(l,c,h)=>{i.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!h})},909249:(l,c,h)=>{i.Ab("SkipLayerNormalization",l,{epsilon:c,simplified:!!h})},909351:(l,c,h,v)=>{i.Ab("GatherBlockQuantized",l,{gatherAxis:c,quantizeAxis:h,blockSize:v})},909472:l=>{i.$b(l)},909506:(l,c)=>i.bc(Number(l),Number(c),i.Gb.ec,i.Gb.errors)};function $x(l,c,h){return Df(async()=>{await i.Yb(Number(l),Number(c),Number(h))})}function xx(){return typeof wasmOffsetConverter<"u"}var P=await async function(){function l(v,b){return P=v.exports,P=function(){var E=P,A={};for(let[N,U]of Object.entries(E))A[N]=typeof U=="function"?(...q)=>{Pa.push(N);try{return U(...q)}finally{R||(Pa.pop(),rr&&Rr===1&&Pa.length===0&&(Rr=0,zr+=1,Da(dp),typeof Fibers<"u"&&Fibers.sc()))}}:U;return A}(),P=function(){var E=P,A=U=>q=>U(q)>>>0,N=U=>()=>U()>>>0;return(E=Object.assign({},E)).Ea=A(E.Ea),E.gb=N(E.gb),E.ib=A(E.ib),E.tb=A(E.tb),E.ub=N(E.ub),E.__cxa_get_exception_ptr=A(E.__cxa_get_exception_ptr),E}(),of.push(P.jb),k=b,Oa(),P}dr++;var c=Ra();if(i.instantiateWasm)return new Promise(v=>{i.instantiateWasm(c,(b,E)=>{v(l(b,E))})});if(d)return new Promise(v=>{G=b=>{var E=new WebAssembly.Instance(b,Ra());v(l(E,b))}});ut??(ut=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",y):y+"ort-wasm-simd-threaded.jsep.wasm":new URL("/mobile-detect/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href);try{var h=await async function(v){var b=ut;if(!g&&typeof WebAssembly.instantiateStreaming=="function"&&!W(b))try{var E=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,v)}catch(A){X(`wasm streaming compile failed: ${A}`),X("falling back to ArrayBuffer instantiation")}return async function(A,N){try{var U=await async function(q){if(!g)try{var ee=await _(q);return new Uint8Array(ee)}catch{}if(q==ut&&g)q=new Uint8Array(g);else{if(!w)throw"both async and sync fetching of the wasm failed";q=w(q)}return q}(A);return await WebAssembly.instantiate(U,N)}catch(q){X(`failed to asynchronously prepare wasm: ${q}`),fr(q)}}(b,v)}(c);return l(h.instance,h.module)}catch(v){return a(v),Promise.reject(v)}}(),ep=l=>(ep=P.Ea)(l),tp=()=>(tp=P.Fa)();i._OrtInit=(l,c)=>(i._OrtInit=P.Ga)(l,c),i._OrtGetLastError=(l,c)=>(i._OrtGetLastError=P.Ha)(l,c),i._OrtCreateSessionOptions=(l,c,h,v,b,E,A,N,U,q)=>(i._OrtCreateSessionOptions=P.Ia)(l,c,h,v,b,E,A,N,U,q),i._OrtAppendExecutionProvider=(l,c,h,v,b)=>(i._OrtAppendExecutionProvider=P.Ja)(l,c,h,v,b),i._OrtAddFreeDimensionOverride=(l,c,h)=>(i._OrtAddFreeDimensionOverride=P.Ka)(l,c,h),i._OrtAddSessionConfigEntry=(l,c,h)=>(i._OrtAddSessionConfigEntry=P.La)(l,c,h),i._OrtReleaseSessionOptions=l=>(i._OrtReleaseSessionOptions=P.Ma)(l),i._OrtCreateSession=(l,c,h)=>(i._OrtCreateSession=P.Na)(l,c,h),i._OrtReleaseSession=l=>(i._OrtReleaseSession=P.Oa)(l),i._OrtGetInputOutputCount=(l,c,h)=>(i._OrtGetInputOutputCount=P.Pa)(l,c,h),i._OrtGetInputOutputMetadata=(l,c,h,v)=>(i._OrtGetInputOutputMetadata=P.Qa)(l,c,h,v),i._OrtFree=l=>(i._OrtFree=P.Ra)(l),i._OrtCreateTensor=(l,c,h,v,b,E)=>(i._OrtCreateTensor=P.Sa)(l,c,h,v,b,E),i._OrtGetTensorData=(l,c,h,v,b)=>(i._OrtGetTensorData=P.Ta)(l,c,h,v,b),i._OrtReleaseTensor=l=>(i._OrtReleaseTensor=P.Ua)(l),i._OrtCreateRunOptions=(l,c,h,v)=>(i._OrtCreateRunOptions=P.Va)(l,c,h,v),i._OrtAddRunConfigEntry=(l,c,h)=>(i._OrtAddRunConfigEntry=P.Wa)(l,c,h),i._OrtReleaseRunOptions=l=>(i._OrtReleaseRunOptions=P.Xa)(l),i._OrtCreateBinding=l=>(i._OrtCreateBinding=P.Ya)(l),i._OrtBindInput=(l,c,h)=>(i._OrtBindInput=P.Za)(l,c,h),i._OrtBindOutput=(l,c,h,v)=>(i._OrtBindOutput=P._a)(l,c,h,v),i._OrtClearBoundOutputs=l=>(i._OrtClearBoundOutputs=P.$a)(l),i._OrtReleaseBinding=l=>(i._OrtReleaseBinding=P.ab)(l),i._OrtRunWithBinding=(l,c,h,v,b)=>(i._OrtRunWithBinding=P.bb)(l,c,h,v,b),i._OrtRun=(l,c,h,v,b,E,A,N)=>(i._OrtRun=P.cb)(l,c,h,v,b,E,A,N),i._OrtEndProfiling=l=>(i._OrtEndProfiling=P.db)(l),i._JsepOutput=(l,c,h)=>(i._JsepOutput=P.eb)(l,c,h),i._JsepGetNodeName=l=>(i._JsepGetNodeName=P.fb)(l);var Ko=()=>(Ko=P.gb)(),mr=i._free=l=>(mr=i._free=P.hb)(l),Wa=i._malloc=l=>(Wa=i._malloc=P.ib)(l),Qo=(l,c,h,v,b,E)=>(Qo=P.kb)(l,c,h,v,b,E),rp=()=>(rp=P.lb)(),np=(l,c,h,v,b)=>(np=P.mb)(l,c,h,v,b),ip=l=>(ip=P.nb)(l),Yo=l=>(Yo=P.ob)(l),ap=(l,c)=>(ap=P.pb)(l,c),sp=()=>(sp=P.qb)(),op=(l,c)=>(op=P.rb)(l,c),Fa=l=>(Fa=P.sb)(l),Zo=l=>(Zo=P.tb)(l),Xo=()=>(Xo=P.ub)(),lp=i.dynCall_ii=(l,c)=>(lp=i.dynCall_ii=P.vb)(l,c);i.dynCall_vii=(l,c,h)=>(i.dynCall_vii=P.dynCall_vii)(l,c,h),i.dynCall_iiiii=(l,c,h,v,b)=>(i.dynCall_iiiii=P.dynCall_iiiii)(l,c,h,v,b),i.dynCall_iii=(l,c,h)=>(i.dynCall_iii=P.dynCall_iii)(l,c,h),i.dynCall_iiiiii=(l,c,h,v,b,E)=>(i.dynCall_iiiiii=P.dynCall_iiiiii)(l,c,h,v,b,E),i.dynCall_iiiiiiii=(l,c,h,v,b,E,A,N)=>(i.dynCall_iiiiiiii=P.dynCall_iiiiiiii)(l,c,h,v,b,E,A,N),i.dynCall_iiiiiii=(l,c,h,v,b,E,A)=>(i.dynCall_iiiiiii=P.dynCall_iiiiiii)(l,c,h,v,b,E,A),i.dynCall_vi=(l,c)=>(i.dynCall_vi=P.dynCall_vi)(l,c),i.dynCall_iiii=(l,c,h,v)=>(i.dynCall_iiii=P.dynCall_iiii)(l,c,h,v),i.dynCall_i=l=>(i.dynCall_i=P.dynCall_i)(l),i.dynCall_viiiiiiii=(l,c,h,v,b,E,A,N,U)=>(i.dynCall_viiiiiiii=P.dynCall_viiiiiiii)(l,c,h,v,b,E,A,N,U),i.dynCall_viii=(l,c,h,v)=>(i.dynCall_viii=P.dynCall_viii)(l,c,h,v),i.dynCall_viijj=(l,c,h,v,b)=>(i.dynCall_viijj=P.dynCall_viijj)(l,c,h,v,b),i.dynCall_viiiiii=(l,c,h,v,b,E,A)=>(i.dynCall_viiiiii=P.dynCall_viiiiii)(l,c,h,v,b,E,A),i.dynCall_viiii=(l,c,h,v,b)=>(i.dynCall_viiii=P.dynCall_viiii)(l,c,h,v,b),i.dynCall_viiiii=(l,c,h,v,b,E)=>(i.dynCall_viiiii=P.dynCall_viiiii)(l,c,h,v,b,E),i.dynCall_vfiii=(l,c,h,v,b)=>(i.dynCall_vfiii=P.dynCall_vfiii)(l,c,h,v,b),i.dynCall_viiiiff=(l,c,h,v,b,E,A)=>(i.dynCall_viiiiff=P.dynCall_viiiiff)(l,c,h,v,b,E,A),i.dynCall_viiiiiff=(l,c,h,v,b,E,A,N)=>(i.dynCall_viiiiiff=P.dynCall_viiiiiff)(l,c,h,v,b,E,A,N),i.dynCall_ffff=(l,c,h,v)=>(i.dynCall_ffff=P.dynCall_ffff)(l,c,h,v),i.dynCall_viiff=(l,c,h,v,b)=>(i.dynCall_viiff=P.dynCall_viiff)(l,c,h,v,b),i.dynCall_fffffff=(l,c,h,v,b,E,A)=>(i.dynCall_fffffff=P.dynCall_fffffff)(l,c,h,v,b,E,A),i.dynCall_jjjjjjj=(l,c,h,v,b,E,A)=>(i.dynCall_jjjjjjj=P.dynCall_jjjjjjj)(l,c,h,v,b,E,A),i.dynCall_jjjjjj=(l,c,h,v,b,E)=>(i.dynCall_jjjjjj=P.dynCall_jjjjjj)(l,c,h,v,b,E),i.dynCall_iijjii=(l,c,h,v,b,E)=>(i.dynCall_iijjii=P.dynCall_iijjii)(l,c,h,v,b,E),i.dynCall_viiiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we)=>(i.dynCall_viiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we),i.dynCall_viiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee)=>(i.dynCall_viiiiiiiiii=P.dynCall_viiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee),i.dynCall_viiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae)=>(i.dynCall_viiiiiiiiiii=P.dynCall_viiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae),i.dynCall_viiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me)=>(i.dynCall_viiiiiiiiiiii=P.dynCall_viiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me),i.dynCall_viiiiiiiiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr,un,ki)=>(i.dynCall_viiiiiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr,un,ki),i.dynCall_viiiiiiiii=(l,c,h,v,b,E,A,N,U,q)=>(i.dynCall_viiiiiiiii=P.dynCall_viiiiiiiii)(l,c,h,v,b,E,A,N,U,q),i.dynCall_viiiiiiiiiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr,un,ki,Jo)=>(i.dynCall_viiiiiiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr,un,ki,Jo),i.dynCall_viiiiiii=(l,c,h,v,b,E,A,N)=>(i.dynCall_viiiiiii=P.dynCall_viiiiiii)(l,c,h,v,b,E,A,N),i.dynCall_viiiiiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt)=>(i.dynCall_viiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt),i.dynCall_jiji=(l,c,h,v)=>(i.dynCall_jiji=P.dynCall_jiji)(l,c,h,v),i.dynCall_v=l=>(i.dynCall_v=P.dynCall_v)(l),i.dynCall_iidiiii=(l,c,h,v,b,E,A)=>(i.dynCall_iidiiii=P.dynCall_iidiiii)(l,c,h,v,b,E,A),i.dynCall_iiiiiiiii=(l,c,h,v,b,E,A,N,U)=>(i.dynCall_iiiiiiiii=P.dynCall_iiiiiiiii)(l,c,h,v,b,E,A,N,U),i.dynCall_iiij=(l,c,h,v)=>(i.dynCall_iiij=P.dynCall_iiij)(l,c,h,v),i.dynCall_iiiiiiiiii=(l,c,h,v,b,E,A,N,U,q)=>(i.dynCall_iiiiiiiiii=P.dynCall_iiiiiiiiii)(l,c,h,v,b,E,A,N,U,q),i.dynCall_iiiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me)=>(i.dynCall_iiiiiiiiiiiii=P.dynCall_iiiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me),i.dynCall_iiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee)=>(i.dynCall_iiiiiiiiiii=P.dynCall_iiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee),i.dynCall_ji=(l,c)=>(i.dynCall_ji=P.dynCall_ji)(l,c),i.dynCall_iijii=(l,c,h,v,b)=>(i.dynCall_iijii=P.dynCall_iijii)(l,c,h,v,b),i.dynCall_vij=(l,c,h)=>(i.dynCall_vij=P.dynCall_vij)(l,c,h),i.dynCall_viiijii=(l,c,h,v,b,E,A)=>(i.dynCall_viiijii=P.dynCall_viiijii)(l,c,h,v,b,E,A),i.dynCall_viijiiiiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr,un)=>(i.dynCall_viijiiiiiiiiiiiiii=P.dynCall_viijiiiiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr,un),i.dynCall_viiiji=(l,c,h,v,b,E)=>(i.dynCall_viiiji=P.dynCall_viiiji)(l,c,h,v,b,E),i.dynCall_fiii=(l,c,h,v)=>(i.dynCall_fiii=P.dynCall_fiii)(l,c,h,v),i.dynCall_viijii=(l,c,h,v,b,E)=>(i.dynCall_viijii=P.dynCall_viijii)(l,c,h,v,b,E),i.dynCall_viij=(l,c,h,v)=>(i.dynCall_viij=P.dynCall_viij)(l,c,h,v),i.dynCall_jiij=(l,c,h,v)=>(i.dynCall_jiij=P.dynCall_jiij)(l,c,h,v),i.dynCall_fi=(l,c)=>(i.dynCall_fi=P.dynCall_fi)(l,c),i.dynCall_fii=(l,c,h)=>(i.dynCall_fii=P.dynCall_fii)(l,c,h),i.dynCall_jii=(l,c,h)=>(i.dynCall_jii=P.dynCall_jii)(l,c,h),i.dynCall_dii=(l,c,h)=>(i.dynCall_dii=P.dynCall_dii)(l,c,h),i.dynCall_fiiii=(l,c,h,v,b)=>(i.dynCall_fiiii=P.dynCall_fiiii)(l,c,h,v,b),i.dynCall_fif=(l,c,h)=>(i.dynCall_fif=P.dynCall_fif)(l,c,h),i.dynCall_jfi=(l,c,h)=>(i.dynCall_jfi=P.dynCall_jfi)(l,c,h),i.dynCall_viiiiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He)=>(i.dynCall_viiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He),i.dynCall_viiiiiiiiiiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr,un,ki,Jo,bx)=>(i.dynCall_viiiiiiiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr,un,ki,Jo,bx),i.dynCall_viiiiiiiiiiiiiiii=(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr)=>(i.dynCall_viiiiiiiiiiiiiiii=P.dynCall_viiiiiiiiiiiiiiii)(l,c,h,v,b,E,A,N,U,q,ee,ae,me,we,He,xt,gr),i.dynCall_iif=(l,c,h)=>(i.dynCall_iif=P.dynCall_iif)(l,c,h),i.dynCall_jiiii=(l,c,h,v,b)=>(i.dynCall_jiiii=P.dynCall_jiiii)(l,c,h,v,b),i.dynCall_jiii=(l,c,h,v)=>(i.dynCall_jiii=P.dynCall_jiii)(l,c,h,v),i.dynCall_viif=(l,c,h,v)=>(i.dynCall_viif=P.dynCall_viif)(l,c,h,v),i.dynCall_viiij=(l,c,h,v,b)=>(i.dynCall_viiij=P.dynCall_viiij)(l,c,h,v,b),i.dynCall_viiiijii=(l,c,h,v,b,E,A,N)=>(i.dynCall_viiiijii=P.dynCall_viiiijii)(l,c,h,v,b,E,A,N),i.dynCall_iiiiij=(l,c,h,v,b,E)=>(i.dynCall_iiiiij=P.dynCall_iiiiij)(l,c,h,v,b,E),i.dynCall_iiiiid=(l,c,h,v,b,E)=>(i.dynCall_iiiiid=P.dynCall_iiiiid)(l,c,h,v,b,E),i.dynCall_iiiiijj=(l,c,h,v,b,E,A)=>(i.dynCall_iiiiijj=P.dynCall_iiiiijj)(l,c,h,v,b,E,A),i.dynCall_iiiiiijj=(l,c,h,v,b,E,A,N)=>(i.dynCall_iiiiiijj=P.dynCall_iiiiiijj)(l,c,h,v,b,E,A,N);var up=l=>(up=P.wb)(l),dp=()=>(dp=P.xb)(),cp=l=>(cp=P.yb)(l),fp=()=>(fp=P.zb)();return function l(){if(0<dr)cr=l;else if(d)n(i),Se();else{for(;0<Ao.length;)Ao.shift()(i);0<dr?cr=l:(i.calledRun=!0,R||(Se(),n(i)))}}(),i.PTR_SIZE=4,s},Dv=Al,Ch=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Ch&&Al()}),Ol,gd,Eh,bt,Pv,ls,Th,Ih,Rl,zh,Nl,Bv,Ml,Lv,zc=V(()=>{Ic(),Ol=typeof location>"u"?void 0:location.origin,gd=import.meta.url>"file:"&&import.meta.url<"file;",Eh=()=>{{if(gd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Ol).href}return import.meta.url}},bt=Eh(),Pv=()=>{if(bt&&!bt.startsWith("blob:"))return bt.substring(0,bt.lastIndexOf("/")+1)},ls=(e,t)=>{try{let r=t??bt;return(r?new URL(e,r):new URL(e)).origin===Ol}catch{return!1}},Th=(e,t)=>{let r=t??bt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ih=(e,t)=>`${t??"./"}${e}`,Rl=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},zh=async e=>(await import(e)).default,Nl=(bk(),Sa(Rv)).default,Bv=async()=>{if(!bt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ls(bt))return[void 0,Nl()];let e=await Rl(bt);return[e,Nl(e)]},Ml=(kk(),Sa(Mv)).default,Lv=async(e,t,r,n)=>{let a=Ml&&!(e||t);if(a)if(bt)a=ls(bt);else if(n&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Ml];{let i="ort-wasm-simd-threaded.jsep.mjs",s=e??Th(i,t),o=r&&s&&!ls(s,t),u=o?await Rl(s):s??Ih(i,t);return[o?u:void 0,await zh(u)]}}}),Dl,us,Ni,Pl,Ah,Oh,Rh,Ac,Te,Dn=V(()=>{zc(),us=!1,Ni=!1,Pl=!1,Ah=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Oh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Rh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ac=async e=>{if(us)return Promise.resolve();if(Ni)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Pl)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ni=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Rh())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Oh())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=Ah();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,i=typeof a=="string"?a:void 0,s=a==null?void 0:a.mjs,o=(s==null?void 0:s.href)??s,u=a==null?void 0:a.wasm,d=(u==null?void 0:u.href)??u,f=e.wasmBinary,[p,m]=await Lv(o,i,r>1,!!f||!!d),_=!1,w=[];if(t>0&&w.push(new Promise($=>{setTimeout(()=>{_=!0,$()},t)})),w.push(new Promise(($,S)=>{let y={numThreads:r};if(f)y.wasmBinary=f;else if(d||i)y.locateFile=g=>d??i+g;else if(o&&o.indexOf("blob:")!==0)y.locateFile=g=>new URL(g,o).href;else if(p){let g=Pv();g&&(y.locateFile=x=>g+x)}m(y).then(g=>{Ni=!1,us=!0,Dl=g,$(),p&&URL.revokeObjectURL(p)},g=>{Ni=!1,Pl=!0,S(g)})})),await Promise.race(w),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Te=()=>{if(us&&Dl)return Dl;throw new Error("WebAssembly is not initialized yet.")}}),Qt,ao,ke,Oc=V(()=>{Dn(),Qt=(e,t)=>{let r=Te(),n=r.lengthBytesUTF8(e)+1,a=r._malloc(n);return r.stringToUTF8(e,a,n),t.push(a),a},ao=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,i])=>{let s=t?t+a:a;if(typeof i=="object")ao(i,s+".",r,n);else if(typeof i=="string"||typeof i=="number")n(s,i.toString());else if(typeof i=="boolean")n(s,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},ke=e=>{let t=Te(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetLastError(a,a+n);let i=Number(t.getValue(a,n===4?"i32":"i64")),s=t.getValue(a+n,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Uv,Sk=V(()=>{Dn(),Oc(),Uv=e=>{let t=Te(),r=0,n=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=Qt(e.tag,n)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,i),r===0&&ke("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ao(e.extra,"",new WeakSet,(s,o)=>{let u=Qt(s,n),d=Qt(o,n);t._OrtAddRunConfigEntry(r,u,d)!==0&&ke(`Can't set a run config entry: ${s} - ${o}.`)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(s=>t._free(s)),i}}}),Nh,Mh,Dh,Mi,Ph,jv,Ck=V(()=>{Dn(),Oc(),Nh=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Mh=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Dh=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Mi=(e,t,r,n)=>{let a=Qt(t,n),i=Qt(r,n);Te()._OrtAddSessionConfigEntry(e,a,i)!==0&&ke(`Can't set a session config entry: ${t} - ${r}.`)},Ph=async(e,t,r)=>{for(let n of t){let a=typeof n=="string"?n:n.name,i=[];switch(a){case"webnn":if(a="WEBNN",typeof n!="string"){let f=n==null?void 0:n.deviceType;f&&Mi(e,"deviceType",f,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let f=n;if(f!=null&&f.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);Mi(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=Qt(a,r),o=i.length,u=0,d=0;if(o>0){u=Te()._malloc(o*Te().PTR_SIZE),r.push(u),d=Te()._malloc(o*Te().PTR_SIZE),r.push(d);for(let f=0;f<o;f++)Te().setValue(u+f*Te().PTR_SIZE,i[f][0],"*"),Te().setValue(d+f*Te().PTR_SIZE,i[f][1],"*")}await Te()._OrtAppendExecutionProvider(e,s,u,d,o)!==0&&ke(`Can't append execution provider: ${a}.`)}},jv=async e=>{let t=Te(),r=0,n=[],a=e||{};Dh(a);try{let i=Nh(a.graphOptimizationLevel??"all"),s=Mh(a.executionMode??"sequential"),o=typeof a.logId=="string"?Qt(a.logId,n):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof a.optimizedModelFilePath=="string"?Qt(a.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(i,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,o,u,d,f),r===0&&ke("Can't create session options."),a.executionProviders&&await Ph(r,a.executionProviders,n),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Mi(r,"enableGraphCapture",a.enableGraphCapture.toString(),n)}if(a.freeDimensionOverrides)for(let[p,m]of Object.entries(a.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let _=Qt(p,n);t._OrtAddFreeDimensionOverride(r,_,m)!==0&&ke(`Can't set a free dimension override: ${p} - ${m}.`)}return a.extra!==void 0&&ao(a.extra,"",new WeakSet,(p,m)=>{Mi(r,p,m,n)}),[r,n]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ke("Can't release session options."),n.forEach(s=>t._free(s)),i}}}),yn,wr,_n,zo,so,Rc,Nc,yd,se=V(()=>{yn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},wr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},_n=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((a,i)=>a*i,1);return r>0?Math.ceil(n*r):void 0},zo=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},so=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Rc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Nc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",yd=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Mc,Wv=V(()=>{Ic(),Mc=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),i;try{i=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let u=Math.ceil(n/65536);i=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await a.read();if(o)break;let d=u.byteLength;new Uint8Array(i,s,d).set(u),s+=d}return new Uint8Array(i,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Bh,Lh,Uh,jh,Dc,Wh,ye,Ir=V(()=>{se(),Bh=["V","I","W","E","F"],Lh=(e,t)=>{console.log(`[${Bh[e]},${new Date().toISOString()}]${t}`)},Dc=(e,t)=>{Uh=e,jh=t},Wh=(e,t)=>{let r=so(e),n=so(Uh);r>=n&&Lh(r,typeof t=="function"?t():t)},ye=(...e)=>{jh&&Wh(...e)}}),Fh,mi,M,oo,Fv,Vv,qv,de=V(()=>{Fh=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},mi=class{static calcShape(e,t,r=!1){let n=e.length,a=t.length;if(n===0)return t;if(a===0)return e;let i=Math.max(e.length,t.length),s=new Array(i);if(r){if(n<2||a<2)return;let o=Fh.calcMatMulShape([e[n-2],e[n-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[s[i-2],s[i-1]]=o}for(let o=r?3:1;o<=i;o++){let u=n-o<0?1:e[n-o],d=a-o<0?1:t[a-o];if(u!==d&&u>1&&d>1)return;let f=Math.max(u,d);if(u&&d)s[i-o]=Math.max(u,d);else{if(f>1)return;s[i-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[n-a])return!1;return!0}},M=class Os{static size(t){return Os.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let a=new Array(n),i=n-1;for(;i>=0;){if(t[i]%r===0){a[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");a[i]=1,r/=t[i],i--}for(i--;i>=0;i--)a[i]=t[i];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Os.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Os.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let a=1;for(let i=r;i<n;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[i])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let a=r-3;a>=0;--a)n[a]=n[a+1]*t[a+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((a,i)=>a+r[i]+r[i+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,a)=>n===r[a])}},oo=class Qi{static adjustPoolAttributes(t,r,n,a,i,s){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=n[o]||s[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,a,i,s,o){if(o){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Qi.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],n[u],a[u],i,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,n,a,i,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Qi.computeShapeHelper(t,r,u,n,a,i,s,o),u}static computeConvOutputShape(t,r,n,a,i,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Qi.computeShapeHelper(!1,t,u,n,a,i,s,o),u}static computeShapeHelper(t,r,n,a,i,s,o,u){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push(Qi.adjustPadAndReturnShape(r[d+2],a[d],i[d],s[d],o,d,d+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,a,i,s,o,u){let d=n*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return i[s]=0,i[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+a-t;return i[s]=Math.floor(u==="SAME_LOWER"?(f+1)/2:f/2),i[o]=f-i[s],Math.floor((t+f-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[s]+i[o]-d)/r+1)}},Fv=class{static getShapeOfGemmResult(e,t,r,n,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,s,o;t?(i=e[1],s=e[0]):(i=e[0],s=e[1]);let u=-1;if(n?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(i<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(a&&!mi.isValidBroadcast(a,[i,o]))throw new Error("gemm: invalid bias shape for broadcast");return[i,o,s]}},Vv=-34028234663852886e22,qv=34028234663852886e22}),Pc,Hv=V(()=>{se(),Pc=(e,t)=>new(zo(t))(e)}),Bl,_d,Ll,Vh,Ul,qh,jl,Wl,Fl,Hh,Gv,Ek=V(()=>{se(),Ir(),Bl=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),_d=(e,t)=>{if(t==="int32")return e;let r=Bl.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let a=e.byteLength/n,i=new(zo(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let o=0;o<a;o++){let u=i[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&i.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(i,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ll=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(n,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(n.some(i=>i<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(n,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(n.some(i=>i<-128||i>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(n,Number);return new Uint8Array(a.buffer)}case"uint8":{if(n.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(i=>i<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(n,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Vh=1,Ul=()=>Vh++,qh=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),jl=(e,t)=>{let r=Bl.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,a)=>n*a)*r/8):0},Wl=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:a,shape:i,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=a,this.tensorShape=i,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return jl(this.dataType,this.tensorShape)}destroy(){ye("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Ll(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,a)=>n===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Fl=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let a=this.tensorManager.getMLContext(e),i;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(i=qh.get(t),!i||!a.opSupportLimits().input.dataTypes.includes(i))throw new Error(`WebNN backend does not support data type: ${t}`);ye("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${i}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==jl(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,i),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=_d(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ye("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?Ll(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Hh=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Ul();return this.tensorTrackersById.set(e,new Fl(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,a){ye("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${a}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,n,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ye("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let a=this.getMLContext(e),i=Ul(),s=new Wl({sessionId:e,context:a,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(i,new Fl(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,n,a,i,s){let o=this.getMLContext(e);for(let[d,f]of this.freeTensors.entries())if(f.canReuseTensor(o,t,r)){ye("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}ye("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:n,writable:a,readable:i});return new Wl({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Gv=(...e)=>new Hh(...e)}),Di,Gh,Kv,Tk=V(()=>{se(),Dn(),Hv(),Ek(),Ir(),Di=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Gh=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((a,i)=>a===n[i]&&e[a]===t[a])},Kv=class{constructor(e){this.tensorManager=Gv(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Dc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ye("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ye("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ye("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Gh(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(a=>a.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ye("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,a){let i=Di.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,n,a)}async createTemporaryTensor(e,t,r){ye("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Di.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,n,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!Te().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ye("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Pc(r,t)}}registerMLTensor(e,t,r,n){let a=Di.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,a,n);return ye("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${n}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,n,a,i,s=!1){if(!i)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=i.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,f;switch(a.dataType){case"float32":f=new Float32Array(d);break;case"float16":f=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":f=new Int32Array(d);break;case"uint32":f=new Uint32Array(d);break;case"int64":if(s){let p=_d(new Uint8Array(d),"int64");f=new Int32Array(p.buffer),a.dataType="int32"}else f=new BigInt64Array(d);break;case"uint64":f=new BigUint64Array(d);break;case"int8":f=new Int8Array(d);break;case"int4":case"uint4":case"uint8":f=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return ye("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(a,f)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=this.mlContextBySessionId.get(e),a=Di.get(yn(t));return typeof a>"u"?!1:r?!!(n!=null&&n.opSupportLimits().input.dataTypes.includes(a)):!!(n!=null&&n.opSupportLimits().output.dataTypes.includes(a))}flush(){}}}),Bc=V(()=>{}),Vl,ds,cs,Kh,Qh,ql,vd,Yh,Qv,Ik=V(()=>{Ir(),Bc(),Vl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),ds=[],cs=e=>Math.ceil(Number(e)/16)*16,Kh=e=>{for(let t=0;t<ds.length;t++){let r=ds[t];if(e<=r)return r}return Math.ceil(e/16)*16},Qh=1,ql=()=>Qh++,vd=async(e,t,r,n)=>{let a=cs(r),i=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,i,0,a),e.flush(),await i.mapAsync(GPUMapMode.READ);let o=i.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{i.destroy()}},Yh=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Vl)ds.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,a=t.byteLength,i=cs(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,a)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,i),this.backend.device.queue.submit([d.finish()]),o.destroy(),ye("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=cs(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=ql();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ye("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Kh(e),n,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||i){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let s={id:ql(),type:0,buffer:n};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ye("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ye("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await vd(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Vl.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ye("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Qv=(...e)=>new Yh(...e)}),Zh,xe,Ue=V(()=>{Zh=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},xe=e=>new Zh(e)}),gi,fs,Ye,st,ie,De,wd,ti,en,ne,Pi,B,te,Yv,Lc,Xh,Zv,pe=V(()=>{se(),de(),gi=64,fs=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ye=(e,t=1)=>{let r=fs(e,t);return typeof r=="string"?r:r[0]},st=(e,t=1)=>{let r=fs(e,t);return typeof r=="string"?r:r[1]},ie=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:M.computeStrides(r)})}),t},De=e=>e%4===0?4:e%2===0?2:1,wd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,ti=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,en=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ne=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Pi=(e,t,r,n,a)=>{let i=typeof r=="number",s=i?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=fs(t,a),f=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],m={indices:u,value:f,storage:p,tensor:t},_=R=>typeof R=="string"?R:`${R}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=i?"uniforms.":"",S=`${$}${e}_shape`,y=`${$}${e}_strides`,g="";for(let R=0;R<s-1;R++)g+=`
    let dim${R} = current / ${ne(y,R,s)};
    let rest${R} = current % ${ne(y,R,s)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;g+=`indices[${s-1}] = current;`;let x=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${g}
    return indices;
  }`,k=R=>(w.offsetToIndices=!0,s<2?R:`o2i_${e}(${R})`),C=[];if(s>=2)for(let R=s-1;R>=0;R--)C.push(`${ne(y,R,s)} * (indices[${R}])`);let T=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${C.join("+")};
  }`,I=R=>(w.indicesToOffset=!0,s<2?R:`i2o_${e}(${R})`),z=(...R)=>s===0?"0u":`${m.indices}(${R.map(_).join(",")})`,O=(R,W)=>s<2?`${R}`:`${ne(R,W,s)}`,L=(R,W,Y)=>s<2?`${R}=${Y};`:`${ne(R,W,s)}=${Y};`,Z={},Q=(R,W)=>{w.broadcastedIndicesToOffset=!0;let Y=`${W.name}broadcastedIndicesTo${e}Offset`;if(Y in Z)return`${Y}(${R})`;let J=[];for(let Ie=s-1;Ie>=0;Ie--){let qe=W.indicesGet("outputIndices",Ie+W.rank-s);J.push(`${O(y,Ie)} * (${qe} % ${O(S,Ie)})`)}return Z[Y]=`fn ${Y}(outputIndices: ${W.type.indices}) -> u32 {
             return ${J.length>0?J.join("+"):"0u"};
           }`,`${Y}(${R})`},K=(R,W)=>(()=>{if(m.storage===m.value)return`${e}[${R}]=${W};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${W}), select(0u, 0xFFFFFFFFu, ${W} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${W}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${W}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),ce=R=>(()=>{if(m.storage===m.value)return`${e}[${R}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${R}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${R}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),oe=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${f} {
    return ${ce(`i2o_${e}(indices)`)};
  }`,G=s<2?"":(()=>{let R=o.map(Y=>`d${Y}: u32`).join(", "),W=o.map(Y=>`d${Y}`).join(", ");return`
  fn get_${e}(${R}) -> ${f} {
    return get_${e}ByIndices(${z(W)});
  }`})(),ue=(...R)=>{if(R.length!==s)throw new Error(`indices length must be ${s}`);let W=R.map(_).join(",");return s===0?ce("0u"):s===1?ce(W[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${W})`)},D=R=>s<2?ce(R):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${R})`),F=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${f}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,X=s<2?"":(()=>{let R=o.map(Y=>`d${Y}: u32`).join(", "),W=o.map(Y=>`d${Y}`).join(", ");return`
  fn set_${e}(${R}, value: ${f}) {
    set_${e}ByIndices(${z(W)}, value);
  }`})();return{impl:()=>{let R=[],W=!1;return w.offsetToIndices&&(R.push(x),W=!0),w.indicesToOffset&&(R.push(T),W=!0),w.broadcastedIndicesToOffset&&(Object.values(Z).forEach(Y=>R.push(Y)),W=!0),w.set&&(R.push(X),W=!0),w.setByIndices&&(R.push(F),W=!0),w.get&&(R.push(G),W=!0),w.getByIndices&&(R.push(oe),W=!0),!i&&W&&R.unshift(`const ${S} = ${m.indices}(${r.join(",")});`,`const ${y} = ${m.indices}(${M.computeStrides(r).join(",")});`),R.join(`
`)},type:m,offsetToIndices:k,indicesToOffset:I,broadcastedIndicesToOffset:Q,indices:z,indicesGet:O,indicesSet:L,set:(...R)=>{if(R.length!==s+1)throw new Error(`indices length must be ${s}`);let W=R[s];if(typeof W!="string")throw new Error("value must be string");let Y=R.slice(0,s).map(_).join(",");return s===0?K("0u",W):s===1?K(Y[0],W):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${Y}, ${W})`)},setByOffset:K,setByIndices:(R,W)=>s<2?K(R,W):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${W});`),get:ue,getByOffset:ce,getByIndices:D,usage:n,name:e,strides:y,shape:S,rank:s}},B=(e,t,r,n=1)=>Pi(e,t,r,"input",n),te=(e,t,r,n=1)=>Pi(e,t,r,"output",n),Yv=(e,t,r)=>Pi(e,t,r,"atomicOutput",1),Lc=(e,t,r,n=1)=>Pi(e,t,r,"internal",n),Xh=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=gi){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Zv=(e,t)=>new Xh(e,t)}),Jh,Hl,em,tm,rm,nm,Tt,Xv,Jv,sn=V(()=>{se(),de(),Ue(),pe(),Jh=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Hl=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),em=(e,t)=>M.sortBasedOnPerm(e,Hl(e.length,t)),tm=(e,t,r,n)=>{let a=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)a+=`a[${e[i]}]=i[${i}];`;return a+="return a;}"},rm=(e,t)=>{let r=[],n=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&n.push(t[a]);return{newShape:r,newPerm:n}},nm=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},Tt=(e,t)=>{let r=e.dataType,n=e.dims.length,a=Hl(n,t),i=em(e.dims,a),s=e.dims,o=i,u=n<2||nm(a,e.dims),d;if(u)return d=w=>{let $=B("input",r,s,4),S=te("output",r,o,4);return`
  ${w.registerUniform("output_size","u32").declareVariables($,S)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:d};let{newShape:f,newPerm:p}=rm(e.dims,a),m=M.areEqual(p,[2,3,1]),_=M.areEqual(p,[3,1,2]);if(f.length===2||m||_){s=m?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,o=[s[1],s[0]];let w=16;return d=$=>{let S=B("a",r,s.length),y=te("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(S,y)}
  var<workgroup> tile : array<array<${y.type.value}, ${w+1}>, ${w}>;
  ${$.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${y.setByIndices(`${y.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/w),y:Math.ceil(o[0]/w)},programUniforms:[{type:12,data:$},...ie(s,o)]}},getShaderSource:d}}return d=w=>{let $=B("a",r,s.length),S=te("output",r,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables($,S)}

  ${tm(a,n,$,S)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ie(s,o)]}},getShaderSource:d}},Xv=(e,t)=>{Jh(e.inputs,t.perm),e.compute(Tt(e.inputs[0],t.perm))},Jv=e=>xe({perm:e.perm})}),im,am,sm,om,lm,um,dm,cm,fm,pm,jt,ew,tw,rw,nw,iw,aw,sw,ow,lw,uw,zk=V(()=>{se(),de(),pe(),Uc(),sn(),im={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},am={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},sm={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},om={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},lm=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},um=(e,t)=>{let r=[],n=e.length;for(let i=0;i<n;i++)t.indexOf(i)===-1&&r.push(e[i]);let a=t.map(i=>e[i]);return[r,a]},dm=(e,t)=>{let r=e.length+t.length,n=[],a=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?n.push(e[a++]):n.push(1);return n},cm=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},fm=(e,t)=>{let r=[];if(!cm(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},pm=(e,t,r,n,a,i,s)=>{let o=r[0].dims,u=M.size(i),d=M.size(s),f=B("_A",r[0].dataType,o),p=te("output",a,i),m=64;u===1&&(m=256);let _=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,w=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(f,p)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${sm[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${im[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
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
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},jt=(e,t,r,n)=>{let a=e.inputs.length===1?r:$d(e.inputs,r),i=a.axes;i.length===0&&!a.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,w)=>w));let s=M.normalizeAxes(i,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=fm(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Tt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=lm(o.length,u.dims.length));let[f,p]=um(u.dims,o),m=f;a.keepDims&&(m=dm(f,s)),e.compute(pm(t,a.cacheKey,[u],n,e.inputs[0].dataType,m,p),{inputs:[u]})},ew=(e,t)=>{jt(e,"ReduceMeanShared",t,"mean")},tw=(e,t)=>{jt(e,"ReduceL1Shared",t,"l1")},rw=(e,t)=>{jt(e,"ReduceL2Shared",t,"l2")},nw=(e,t)=>{jt(e,"ReduceLogSumExpShared",t,"logSumExp")},iw=(e,t)=>{jt(e,"ReduceMaxShared",t,"max")},aw=(e,t)=>{jt(e,"ReduceMinShared",t,"min")},sw=(e,t)=>{jt(e,"ReduceProdShared",t,"prod")},ow=(e,t)=>{jt(e,"ReduceSumShared",t,"sum")},lw=(e,t)=>{jt(e,"ReduceSumSquareShared",t,"sumSquare")},uw=(e,t)=>{jt(e,"ReduceLogSumShared",t,"logSum")}}),Wt,hm,lo,$d,Ft,mm,gm,ym,_m,vm,wm,$m,xm,bm,km,Vt,dw,cw,fw,pw,hw,mw,gw,yw,_w,vw,Uc=V(()=>{se(),de(),Ue(),pe(),zk(),Wt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},hm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],lo=(e,t,r,n,a,i,s=!1,o=!1)=>{let u=[],d=r[0].dims,f=d.length,p=M.normalizeAxes(a,f),m=!o&&p.length===0;d.forEach(($,S)=>{m||p.indexOf(S)>=0?s&&u.push(1):u.push($)});let _=u.length,w=M.size(u);return{name:e,shaderCache:t,getShaderSource:$=>{let S=[],y=B("_A",r[0].dataType,f),g=te("output",i,_),x=n(y,g,p),k=x[2];for(let C=0,T=0;C<f;C++)m||p.indexOf(C)>=0?(s&&T++,k=`for(var j${C}: u32 = 0; j${C} < ${d[C]}; j${C}++) {
                  ${x[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${y.indicesSet("input_indices",C,`j${C}`)}
                  ${k}
                }`):(S.push(`${y.indicesSet("input_indices",C,g.indicesGet("output_indices",T))};`),T++);return`

        ${$.registerUniform("output_size","u32").declareVariables(y,g)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${y.type.indices};
          let output_indices = ${g.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${x[0]}       // init ops for reduce max/min
          ${x[1]}
          ${k}
          ${x[3]}
          ${x.length===4?g.setByOffset("global_idx","value"):x.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:i}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ie(d,u)]})}},$d=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),xe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ft=(e,t,r,n)=>{let a=e.inputs,i=a.length===1?r:$d(a,r);e.compute(lo(t,{hint:i.cacheKey,inputDependencies:["rank"]},[a[0]],i.noopWithEmptyAxes&&i.axes.length===0?hm:n,i.axes,a[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},mm=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},gm=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ym=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},_m=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},vm=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceMax",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(r.indicesSet("input_indices",s,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},wm=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceMean",t,(r,n,a)=>{let i=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(i*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${i});`]})},$m=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceMin",t,(r,n,a)=>{let i=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&i.push(`input_indices[${s}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},xm=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},bm=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},km=(e,t)=>{Wt(e.inputs),Ft(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Vt=(e,t,r)=>{if(t.length===0)return r;let n=1,a=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?n*=e[i]:a*=e[i];return a<32&&n>1024},dw=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wm(e,t):ew(e,t)},cw=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gm(e,t):tw(e,t)},fw=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ym(e,t):rw(e,t)},pw=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_m(e,t):nw(e,t)},hw=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vm(e,t):iw(e,t)},mw=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$m(e,t):aw(e,t)},gw=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xm(e,t):sw(e,t)},yw=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bm(e,t):ow(e,t)},_w=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?km(e,t):lw(e,t)},vw=(e,t)=>{Vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mm(e,t):uw(e,t)}}),Gl,ww,$w,xd,Ak=V(()=>{se(),Ue(),Uc(),Gl=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},ww=(e,t)=>{Gl(e.inputs);let r=(n,a,i)=>{let s=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(lo("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},$w=(e,t)=>{Gl(e.inputs);let r=(n,a,i)=>{let s=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(lo("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},xd=e=>xe(e)}),Sm,ps,Cm,Em,Tm,Ca,Im,xw,jc=V(()=>{se(),de(),Bc(),pe(),Sm=(e,t)=>{let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],f=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=a.dims[0]/3,m=p,_=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let x of t.qkvHiddenSizes)if(x%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let w=d;if(p!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==p+m+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(m!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let S=w+$,y=-1,g=0;if(i)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:S,maxSequenceLength:y,inputHiddenSize:f,hiddenSize:p,vHiddenSize:_,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ps=(e,t,r)=>t&&e?`
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
    `,Cm=(e,t,r,n,a,i,s,o)=>{let u=De(s?1:i),d=64,f=i/u;f<d&&(d=32);let p=Math.ceil(i/u/d),m=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:a},{type:12,data:f},{type:12,data:p}],_=Ye(e.dataType,u),w=st(1,u),$=["type"];s&&$.push("type"),o&&$.push("type");let S=y=>{let g=te("x",e.dataType,e.dims,u),x=[g],k=s?B("seq_lens",s.dataType,s.dims):void 0;k&&x.push(k);let C=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;C&&x.push(C);let T=st(e.dataType),I=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${y.registerUniforms(I).declareVariables(...x)}
  ${y.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ps(k,C,!1)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${u}`,inputDependencies:$},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:m})}},Em=(e,t,r,n,a,i,s,o,u)=>{let d=s+i.kvSequenceLength,f=[i.batchSize,i.numHeads,i.sequenceLength,d],p=e>1&&n,m=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=p?[i.batchSize,m,d,i.headSize]:void 0,w=i.nReps?i.nReps:1,$=i.scale===0?1/Math.sqrt(i.headSize):i.scale,S=De(i.headSize),y=i.headSize/S,g=12,x={x:Math.ceil(d/g),y:Math.ceil(i.sequenceLength/g),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:y},{type:12,data:d},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:w}],C=p&&n&&M.size(n.dims)>0,T=["type","type"];C&&T.push("type"),a&&T.push("type"),o&&T.push("type"),u&&T.push("type");let I=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&I.push({dims:_,dataType:t.dataType,gpuDataType:0});let z=O=>{let L=B("q",t.dataType,t.dims,S),Z=B("key",r.dataType,r.dims,S),Q=[L,Z];if(C){let F=B("past_key",n.dataType,n.dims,S);Q.push(F)}a&&Q.push(B("attention_bias",a.dataType,a.dims));let K=o?B("seq_lens",o.dataType,o.dims):void 0;K&&Q.push(K);let ce=u?B("total_sequence_length_input",u.dataType,u.dims):void 0;ce&&Q.push(ce);let oe=te("output",t.dataType,f),G=[oe];p&&G.push(te("present_key",t.dataType,_,S));let ue=st(1,S),D=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;

  var<workgroup> tileQ: array<${L.type.storage}, ${g*g}>;
  var<workgroup> tileK: array<${L.type.storage}, ${g*g}>;
  ${O.registerUniforms(D).declareVariables(...Q,...G)}
  ${O.mainStart([g,g,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ps(K,ce,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ue}(0);
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
          value += ${ue}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${oe.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${n!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:I,dispatchGroup:x,programUniforms:k}),getShaderSource:z}},Tm=(e,t,r,n,a,i,s=void 0,o=void 0)=>{let u=i+a.kvSequenceLength,d=a.nReps?a.nReps:1,f=a.vHiddenSize*d,p=e>1&&n,m=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=p?[a.batchSize,m,u,a.headSize]:void 0,w=[a.batchSize,a.sequenceLength,f],$=12,S={x:Math.ceil(a.vHeadSize/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:f},{type:12,data:i},{type:12,data:a.kvSequenceLength},{type:12,data:d}],g=p&&n&&M.size(n.dims)>0,x=["type","type"];g&&x.push("type"),s&&x.push("type"),o&&x.push("type");let k=[{dims:w,dataType:t.dataType,gpuDataType:0}];p&&k.push({dims:_,dataType:t.dataType,gpuDataType:0});let C=T=>{let I=B("probs",t.dataType,t.dims),z=B("v",r.dataType,r.dims),O=[I,z];g&&O.push(B("past_value",n.dataType,n.dims));let L=s?B("seq_lens",s.dataType,s.dims):void 0;s&&O.push(L);let Z=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;o&&O.push(Z);let Q=[te("output",t.dataType,w)];p&&Q.push(te("present_value",t.dataType,_));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${I.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${I.type.value}, ${$*$}>;
  ${T.registerUniforms(K).declareVariables(...O,...Q)}
  ${T.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ps(L,Z,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:y}),getShaderSource:C}},Ca=(e,t,r,n,a,i,s,o,u,d,f=void 0,p=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),_=m>1?d.pastSequenceLength:0,w=_+d.kvSequenceLength,$=u&&M.size(u.dims)>0?u:void 0,S=[t,r];m>1&&s&&M.size(s.dims)>0&&S.push(s),$&&S.push($),f&&S.push(f),p&&S.push(p);let y=e.compute(Em(m,t,r,s,$,d,_,f,p),{inputs:S,outputs:m>1?[-1,1]:[-1]})[0];e.compute(Cm(y,d.batchSize,d.numHeads,_,d.sequenceLength,w,f,p),{inputs:f&&p?[y,f,p]:[y],outputs:[]});let g=[y,n];m>1&&o&&M.size(o.dims)>0&&g.push(o),f&&g.push(f),p&&g.push(p),e.compute(Tm(m,y,n,o,d,_,f,p),{inputs:g,outputs:m>1?[0,2]:[0]})},Im=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,a=t.inputHiddenSize,i=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:a},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=p=>{let m=te("output_q",u[0].dataType,r),_=te("output_k",u[0].dataType,r),w=te("output_v",u[0].dataType,r),$=B("input",u[0].dataType,u[0].dims),S=B("weight",u[1].dataType,u[1].dims),y=B("bias",u[2].dataType,u[2].dims),g=$.type.storage,x=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${g}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${g}, ${s*s}>;
  var<workgroup> tileWeightK: array<${g}, ${s*s}>;
  var<workgroup> tileWeightV: array<${g}, ${s*s}>;
  ${p.registerUniforms(x).declareVariables($,S,y,m,_,w)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:f},{inputs:u,outputs:[-1,-1,-1]})},xw=(e,t)=>{let r=Sm(e.inputs,t),[n,a,i]=Im(e,r);return Ca(e,n,a,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),zm,Am,Om,bw,Ok=V(()=>{Lt(),se(),de(),Ue(),pe(),zm=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,a,i)=>{let s=a.length;if(s!==n.length)throw new Error(`${i}: num dimensions != ${s}`);a.forEach((o,u)=>{if(o!==n[u])throw new Error(`${i}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Am=(e,t)=>{let{epsilon:r,spatial:n,format:a}=t,i=e[0].dims,s=n?De(i[i.length-1]):1,o=a==="NHWC"&&i.length>1?s:1,u=M.size(i)/s,d=n,f=d?i.length:i,p=B("x",e[0].dataType,e[0].dims,s),m=B("scale",e[1].dataType,e[1].dims,o),_=B("bias",e[2].dataType,e[2].dims,o),w=B("inputMean",e[3].dataType,e[3].dims,o),$=B("inputVar",e[4].dataType,e[4].dims,o),S=te("y",e[0].dataType,f,s),y=()=>{let x="";if(n)x=`let cOffset = ${i.length===1?"0u":a==="NHWC"?`outputIndices[${i.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")x=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{x=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<m.rank;k++)x+=`cIndices[${k}] = outputIndices[${k}];`;x+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return x},g=x=>`
  const epsilon = ${r};
  ${x.registerUniform("outputSize","u32").declareVariables(p,m,_,w,$,S)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${y()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ie(i)]:[{type:12,data:u}]})}},Om=e=>xe(e),bw=(e,t)=>{let{inputs:r,outputCount:n}=e,a=Om({...t,outputCount:n});if(Ce.webgpu.validateInputContent&&zm(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Am(r,a))}}),Rm,Nm,kw,Rk=V(()=>{de(),pe(),Rm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Nm=e=>{let t=e[0].dims,r=e[0].dims[2],n=M.size(t)/4,a=e[0].dataType,i=B("input",a,t,4),s=B("bias",a,[r],4),o=B("residual",a,t,4),u=te("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(i,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${i.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},kw=e=>{Rm(e.inputs),e.compute(Nm(e.inputs))}}),Mm,ve,Sw,Cw,Ew,Tw,Iw,zw,Aw,Ow,Rw,Dm,Nw,Mw,Dw,Pw,Yi,Bw,Rs,Lw,Uw,jw,Ww,Fw,Vw,qw,Hw,Gw,Kw,Qw,Yw,Zw,Xw,Jw,e1,Kl,t1,bd,kd,r1,n1,i1,Pm,Bm,a1,Wc=V(()=>{se(),de(),Ue(),pe(),Mm=(e,t,r,n,a,i,s)=>{let o=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let d=B("inputData",r,[o],4),f=te("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return s&&p.push(...s),`
      ${e.registerUniforms(p).declareVariables(d,f)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",u)}
  }`},ve=(e,t,r,n,a,i=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(M.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>Mm(d,M.size(e.dims),e.dataType,i,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(M.size(d[0].dims)/64/4)},programUniforms:u})}},Sw=e=>{e.compute(ve(e.inputs[0],"Abs","abs"))},Cw=e=>{e.compute(ve(e.inputs[0],"Acos","acos"))},Ew=e=>{e.compute(ve(e.inputs[0],"Acosh","acosh"))},Tw=e=>{e.compute(ve(e.inputs[0],"Asin","asin"))},Iw=e=>{e.compute(ve(e.inputs[0],"Asinh","asinh"))},zw=e=>{e.compute(ve(e.inputs[0],"Atan","atan"))},Aw=e=>{e.compute(ve(e.inputs[0],"Atanh","atanh"))},Ow=e=>xe(e),Rw=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ve(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Dm=e=>{let t,r,n=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return xe({min:t,max:r})},Nw=(e,t)=>{let r=t||Dm(e.inputs),n=st(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},Mw=e=>{e.compute(ve(e.inputs[0],"Ceil","ceil"))},Dw=e=>{e.compute(ve(e.inputs[0],"Cos","cos"))},Pw=e=>{e.compute(ve(e.inputs[0],"Cosh","cosh"))},Yi=e=>xe(e),Bw=(e,t)=>{let r=st(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Rs=(e="f32")=>`
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
}`,Lw=e=>{let t=st(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Rs(t)))},Uw=e=>{e.compute(ve(e.inputs[0],"Exp","exp"))},jw=e=>{e.compute(ve(e.inputs[0],"Floor","floor"))},Ww=e=>{let t=st(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Rs(t)))},Fw=(e,t)=>{let r=st(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Vw=e=>{e.compute(ve(e.inputs[0],"Not",t=>`!${t}`))},qw=e=>{e.compute(ve(e.inputs[0],"Neg",t=>`-${t}`))},Hw=e=>{e.compute(ve(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Gw=e=>{let t=st(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Kw=e=>{e.compute(ve(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Qw=e=>xe(e),Yw=(e,t)=>{let r=st(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Zw=e=>{e.compute(ve(e.inputs[0],"Sin","sin"))},Xw=e=>{e.compute(ve(e.inputs[0],"Sinh","sinh"))},Jw=e=>{e.compute(ve(e.inputs[0],"Sqrt","sqrt"))},e1=e=>{e.compute(ve(e.inputs[0],"Tan","tan"))},Kl=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,t1=e=>{e.compute(ve(e.inputs[0],"Tanh",Kl))},bd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Kl("v")};
}
`,kd=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,r1=e=>{let t=st(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"FastGelu",kd,bd(t),void 0,e.inputs[0].dataType))},n1=(e,t)=>{let r=st(e.inputs[0].dataType);return e.compute(ve(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},i1=e=>{e.compute(ve(e.inputs[0],"Log","log"))},Pm=(e,t)=>`
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
`,Bm=e=>`quick_gelu_impl(${e})`,a1=(e,t)=>{let r=st(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"QuickGelu",Bm,Pm(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Lm,Um,s1,Nk=V(()=>{de(),pe(),Wc(),Lm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Um=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),n=B("bias",e[0].dataType,[e[0].dims[2]],4),a=te("output",e[0].dataType,t,4),i=M.size(t)/4,s=Ye(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,a)}

  ${Rs(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},s1=e=>{Lm(e.inputs),e.compute(Um(e.inputs))}}),jm,Wm,qt,o1,l1,u1,d1,c1,f1,p1,h1,m1,g1,Mk=V(()=>{se(),de(),pe(),jm=(e,t,r,n,a,i,s,o,u,d,f,p)=>{let m,_;typeof o=="string"?m=_=(g,x)=>`${o}((${g}),(${x}))`:typeof o=="function"?m=_=o:(m=o.scalar,_=o.vector);let w=te("outputData",f,n.length,4),$=B("aData",u,t.length,4),S=B("bData",d,r.length,4),y;if(a)if(i){let g=M.size(t)===1,x=M.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;g||x?y=w.setByOffset("global_idx",_(g?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),x?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):y=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",_(s||k?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||C?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else y=w.setByOffset("global_idx",_($.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let g=(x,k,C="")=>{let T=`aData[indexA${k}][componentA${k}]`,I=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${w.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${$.broadcastedIndicesToOffset(`outputIndices${k}`,w)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,w)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${x}[${k}] = ${C}(${m(T,I)});
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
        ${e.registerUniform("vec_size","u32").declareVariables($,S,w)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},Wm=(e,t,r,n,a,i,s=r.dataType)=>{let o=r.dims.map($=>Number($)??1),u=n.dims.map($=>Number($)??1),d=!M.areEqual(o,u),f=o,p=M.size(o),m=!1,_=!1,w=[d];if(d){let $=mi.calcShape(o,u,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");f=$.slice(),p=M.size(f);let S=M.size(o)===1,y=M.size(u)===1,g=o.length>0&&o[o.length-1]%4===0,x=u.length>0&&u[u.length-1]%4===0;w.push(S),w.push(y),w.push(g),w.push(x);let k=1;for(let C=1;C<f.length;C++){let T=o[o.length-C],I=u[u.length-C];if(T===I)k*=T;else break}k%4===0?(_=!0,m=!0):(S||y||g||x)&&(m=!0)}else m=!0;return w.push(m),{name:e,shaderCache:{hint:t+w.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>jm($,o,u,f,m,d,_,a,r.dataType,n.dataType,s,i),getRunData:()=>({outputs:[{dims:f,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(M.size(f)/4)},...ie(o,u,f)]})}},qt=(e,t,r,n,a,i)=>{e.compute(Wm(t,a??"",e.inputs[0],e.inputs[1],r,n,i))},o1=e=>{qt(e,"Add",(t,r)=>`${t}+${r}`)},l1=e=>{qt(e,"Div",(t,r)=>`${t}/${r}`)},u1=e=>{qt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},d1=e=>{qt(e,"Mul",(t,r)=>`${t}*${r}`)},c1=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;qt(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},f1=e=>{qt(e,"Sub",(t,r)=>`${t}-${r}`)},p1=e=>{qt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},h1=e=>{qt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},m1=e=>{qt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},g1=e=>{qt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Fm,Vm,qm,Hm,y1,_1,Dk=V(()=>{se(),de(),Ue(),pe(),Fm=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],a=n.dataType,i=n.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==i)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==n.dims[d])throw new Error("non concat dimensions must match")})}})},Vm=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,qm=(e,t)=>{let r=e.length,n=[];for(let a=0;a<r;++a){let i=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?n.push(i):a===0?n.push(`if (inputIndex == ${a}u) { ${i} }`):a===r-1?n.push(`else { ${i} }`):n.push(`else if (inputIndex == ${a}) { ${i} }`)}return n.join(`
`)},Hm=(e,t,r,n)=>{let a=M.size(r),i=new Array(e.length),s=new Array(e.length),o=0,u=[],d=[],f=[{type:12,data:a}];for(let $=0;$<e.length;++$)o+=e[$].dims[t],i[$]=o,d.push(e[$].dims.length),s[$]=B(`input${$}`,n,d[$]),u.push("rank"),f.push({type:12,data:i[$]});for(let $=0;$<e.length;++$)f.push(...ie(e[$].dims));f.push(...ie(r));let p=te("output",n,r.length),m=p.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),w=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)$.registerUniform(`sizeInConcatAxis${S}`,"u32");return $.declareVariables(...s,p)})()}

  ${Vm(i.length,_)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${qm(s,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}),getShaderSource:w}},y1=(e,t)=>{let r=e.inputs,n=r[0].dims,a=M.normalizeAxis(t.axis,n.length);Fm(r,a);let i=n.slice();i[a]=r.reduce((o,u)=>o+(u.dims.length>a?u.dims[a]:0),0);let s=r.filter(o=>M.size(o.dims)>0);e.compute(Hm(s,a,i,r[0].dataType),{inputs:s})},_1=e=>xe({axis:e.axis})}),An,On,Rn,Fc,Pn=V(()=>{se(),de(),An=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},On=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Rn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Fc=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[Vv,qv];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Xe,v1,Vc=V(()=>{Xe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},v1=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),w1,Pk=V(()=>{w1=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),oa,qc,Hc=V(()=>{se(),de(),pe(),Pn(),oa=(e,t,r,n,a)=>{let i=n-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${ne(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ne(a,o+i,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},qc=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],f=s[s.length-1],p=De(d),m=De(f),_=De(u),w=M.size(r)/p/_,$=e.length>2,S=n?n.slice(0,-2):r.slice(0,-2),y=[M.size(S),u,d],g=[{type:12,data:w},{type:12,data:u},{type:12,data:d},{type:12,data:f}];On(t,g),g.push(...ie(S,s,o)),$&&g.push(...ie(e[2].dims)),g.push(...ie(y));let x=k=>{let C=Lc("batch_dims",e[0].dataType,S.length),T=B("a",e[0].dataType,s.length,m),I=B("b",e[1].dataType,o.length,p),z=te("output",e[0].dataType,y.length,p),O=Ye(z.type.tensor),L=An(t,z.type.value,O),Z=[T,I],Q="";if($){let oe=a?p:1;Z.push(B("bias",e[2].dataType,e[2].dims.length,oe)),Q=`${a?`value += bias[col / ${oe}];`:`value += ${z.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Rn(t,K);let ce=()=>{let oe=`var a_data: ${T.type.value};`;for(let G=0;G<m;G++)oe+=`
              let b_data${G} = b[(b_offset + (k + ${G}) * uniforms.N + col) / ${p}];`;for(let G=0;G<_;G++){oe+=`a_data = a[(a_offset + (row + ${G}) * uniforms.K + k) / ${m}];`;for(let ue=0;ue<m;ue++)oe+=`
            values[${G}] = fma(${I.type.value}(a_data${m===1?"":`[${ue}]`}), b_data${ue}, values[${G}]);
`}return oe};return`
  ${k.registerUniforms(K).registerInternalVariables(C).declareVariables(...Z,z)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${oa("a_indices",T,T.rank-2,C.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${oa("b_indices",I,I.rank-2,C.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${z.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${ce()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${Q}
      ${L}
      let cur_indices = ${z.type.indices}(batch, row + i, col);
      let offset = ${z.indicesToOffset("cur_indices")};
      ${z.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${m};${_};${a}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:g}),getShaderSource:x}}}),Gm,Km,Sd,Ql,Qm,Cd,Ym,uo,Gc=V(()=>{se(),de(),pe(),Pn(),Hc(),Vc(),Gm=(e,t)=>e?`
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
        }`,Sd=(e,t,r="f32",n,a=!1,i=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],f=a?u:i,p=a?i:u,m=f/t[0],_=i/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&f%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${f/m}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
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
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Km(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ql=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Qm=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Cd=(e,t,r="f32",n,a=!1,i=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],p=a?d:i,m=a?i:d;if(!(m%t[1]===0&&p%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=m/t[1],w=p/t[0],$=i/t[1],S=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${Ql(a,n)}
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
      ${Ql(a,n)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${m}>;
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
    ${S}
  }
`},Ym=(e,t,r,n,a=!1)=>{let[i,s,o,u]=n,d=Ye(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Xe(e,d)} {
      var value = ${Xe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${oa("aIndices",s,s.rank-2,i.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Xe(e,d)} {
      var value = ${Xe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${oa("bIndices",o,o.rank-2,i.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Xe(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Xe(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},uo=(e,t,r,n,a=!1,i)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),f=n?n.slice(0,-2):r.slice(0,-2),p=M.size(f),m=s[s.length-2],_=s[s.length-1],w=o[o.length-1],$=_%4===0&&w%4===0,S=m<=8?[4,1,1]:[4,4,1],y=[8,8,1],g=[Math.ceil(w/y[0]/S[0]),Math.ceil(m/y[1]/S[1]),Math.ceil(p/y[2]/S[2])],x=$?4:1,k=[...u,m,_/x],C=k.length,T=[...d,_,w/x],I=T.length,z=[p,m,w/x],O=[{type:6,data:m},{type:6,data:w},{type:6,data:_}];On(t,O),O.push(...ie(f,k,T));let L=["rank","rank"],Z=e.length>2;Z&&(O.push(...ie(e[2].dims)),L.push("rank")),O.push(...ie(z));let Q=K=>{let ce=f.length,oe=Lc("batchDims",e[0].dataType,ce,1),G=Ye(e[0].dataType),ue=B("a",e[0].dataType,C,x),D=B("b",e[1].dataType,I,x),F=te("result",e[0].dataType,z.length,x),X=[ue,D];if(Z){let Ie=a?x:1;X.push(B("bias",e[2].dataType,e[2].dims.length,Ie))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Rn(t,R);let W=Ye(F.type.tensor),Y=An(t,F.type.value,W),J=Ym(x,Z,Y,[oe,ue,D,F],a);return`
  ${K.registerUniforms(R).registerInternalVariables(oe).declareVariables(...X,F)}
  ${J}
  ${$?Sd(S,y,G,oe):Cd(S,y,G,oe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${$};${a}`,inputDependencies:L},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:O}),getShaderSource:Q}}}),Zm,$1,Bk=V(()=>{se(),Ir(),pe(),Pn(),Vc(),Pk(),Gc(),Zm=(e,t,r,n,a=!1,i,s=4,o=4,u=4,d="f32")=>{let f=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},p=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},m=e?`
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
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",y=e?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${y} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${y} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${y} % inChannels;
    var resData = ${Xe(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${$}) {
      ${m}
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
    return ${Xe(s,d)}(0.0);`:n&&r?`
    let col = colIn * ${s};
    ${g}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${Xe(s,d)}(0.0);`,k=e?n&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Xe(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Xe(o,d)}(0.0);`,C=Xe(u,d),T=Xe(e?s:o,d),I=Xe(e?o:s,d),z=An(i,C,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?x:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?k:x}
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
    }`},$1=(e,t,r,n,a,i,s,o,u)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],p=r[0],m=d?r[2]:r[3],_=d?r[1]:r[2],w=d?r[3]:r[1],$=d&&(f%4===0||f%3===0)&&w%4===0,S=d?w:m*_,y=d?m*_:w,g=[8,8,1],x=n<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/g[0]/x[0]),Math.ceil(y/g[1]/x[1]),Math.ceil(p/g[2]/x[2])];ye("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let C=$?d&&f%4!==0?3:4:1,T=g[1]*x[1],I=g[0]*x[0],z=Math.max(g[0]*C,g[1]),O=n%T===0,L=a%I===0,Z=i%z===0,Q=$?[C,4,4]:[1,1,1],K=[{type:6,data:n},{type:6,data:a},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];On(t,K),K.push(...ie(e[0].dims,e[1].dims));let ce=["rank","rank"];s&&(K.push(...ie(e[2].dims)),ce.push("rank")),K.push(...ie(r));let oe=G=>{let ue=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Rn(t,ue);let D=$?4:1,F=Ye(e[0].dataType),X=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${F}>`:F}) {
        result[flatIndex] = ${$?`vec4<${F}>`:F}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${F}>`:F}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,R=B("x",e[0].dataType,e[0].dims.length,C===3?1:C),W=B("w",e[1].dataType,e[1].dims.length,D),Y=[R,W],J=te("result",e[0].dataType,r.length,D);if(s){let Ie=B("bias",e[2].dataType,e[2].dims.length,D);Y.push(Ie),X+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${F}>`:F} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${w1("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${G.registerUniforms(ue).declareVariables(...Y,J)}
        ${X}
        ${Zm(d,O,L,Z,s,t,Q[0],Q[1],Q[2],F)}
        ${$?Sd(x,g,F,void 0,!d,z):Cd(x,g,F,void 0,!d,z,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${$};${O};${L};${Z};${T};${I};${z}`,inputDependencies:ce},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:K}),getShaderSource:oe}}}),Xm,Yl,Bi,Jm,Zl,eg,x1,b1,Lk=V(()=>{se(),Ir(),de(),pe(),Pn(),Vc(),Xm=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Yl=e=>typeof e=="number"?[e,e,e]:e,Bi=(e,t)=>t<=1?e:e+(e-1)*(t-1),Jm=(e,t,r,n=1)=>{let a=Bi(t,n);return Math.floor((e[0]*(r-1)-r+a)/2)},Zl=(e,t,r,n,a)=>{a==null&&(a=Jm(e,t[0],n[0]));let i=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(i[s]=Math.trunc((e[s]-t[s]+2*a)/n[s]+1));return i},eg=(e,t,r,n,a,i,s,o,u,d)=>{let f,p,m,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=Zl([t,r,n,1],[o,u,d],1,[a,i,s],e);p=w[0],m=w[1],_=w[2]}else if(Array.isArray(e)){if(!e.every(($,S,y)=>$===y[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=Zl([t,r,n,1],[o,u,d],1,[a,i,s],e[0]);p=w[0],m=w[1],_=w[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/a),m=Math.ceil(r/i),_=Math.ceil(n/s);let w=(p-1)*a+o-t,$=(m-1)*i+u-r,S=(_-1)*s+d-n,y=Math.floor(w/2),g=w-y,x=Math.floor($/2),k=$-x,C=Math.floor(S/2),T=S-C;f={top:x,bottom:k,left:C,right:T,front:y,back:g}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:p,outHeight:m,outWidth:_}},x1=(e,t,r,n,a,i=!1,s="channelsLast")=>{let o,u,d,f,p;if(s==="channelsLast")[o,u,d,f,p]=e;else if(s==="channelsFirst")[o,p,u,d,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,_,w,$]=t,[S,y,g]=Yl(r),[x,k,C]=Yl(n),T=Bi(_,x),I=Bi(w,k),z=Bi($,C),{padInfo:O,outDepth:L,outHeight:Z,outWidth:Q}=eg(a,u,d,f,S,y,g,T,I,z),K=i?m*p:m,ce=[0,0,0,0,0];return s==="channelsFirst"?ce=[o,K,L,Z,Q]:s==="channelsLast"&&(ce=[o,L,Z,Q,K]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:f,inChannels:p,outDepth:L,outHeight:Z,outWidth:Q,outChannels:K,padInfo:O,strideDepth:S,strideHeight:y,strideWidth:g,filterDepth:_,filterHeight:w,filterWidth:$,effectiveFilterDepth:T,effectiveFilterHeight:I,effectiveFilterWidth:z,dilationDepth:x,dilationHeight:k,dilationWidth:C,inShape:e,outShape:ce,filterShape:t}},b1=(e,t,r,n,a,i)=>{let s=i==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((S,y)=>y)},d=[Math.ceil(Xm(u.x.map(S=>r[S]))/o[0]),1,1];ye("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let f=1,p=M.size(r),m=[{type:12,data:p},{type:12,data:n},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];On(t,m),m.push(...ie(e[0].dims,e[1].dims));let _=["rank","rank"],w=e.length===3;w&&(m.push(...ie(e[2].dims)),_.push("rank")),m.push(...ie(r));let $=S=>{let y=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Rn(t,y);let g=1,x=Ye(e[0].dataType),k=B("x",e[0].dataType,e[0].dims.length,f),C=B("W",e[1].dataType,e[1].dims.length,g),T=[k,C],I=te("result",e[0].dataType,r.length,g),z="";if(w){let Z=B("bias",e[2].dataType,e[2].dims.length,g);T.push(Z),z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${x} {
          return bias[${s?ne("coords",4,5):ne("coords",1,5)}];
        }`}let O=Xe(f,x),L=An(t,O,x);return`
            ${z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${S.registerUniforms(y).declareVariables(...T,I)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${I.offsetToIndices("global_idx")};
              let batch = ${ne("coords",0,k.rank)};
              let d2 = ${s?ne("coords",k.rank-1,k.rank):ne("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?ne("coords",1,k.rank):ne("coords",2,k.rank)},
              ${s?ne("coords",2,k.rank):ne("coords",3,k.rank)},
              ${s?ne("coords",3,k.rank):ne("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ne("uniforms.x_shape",1,k.rank):ne("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?ne("uniforms.x_shape",2,k.rank):ne("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?ne("uniforms.x_shape",3,k.rank):ne("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?ne("uniforms.x_shape",4,k.rank):ne("uniforms.x_shape",1,k.rank)};
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
              ${L}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${w}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:m}),getShaderSource:$}}}),k1,S1,Uk=V(()=>{se(),de(),pe(),Pn(),k1=(e,t,r,n)=>{let a=e.length>2,i=a?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],f=d/t.group,p=u&&f>=4?De(d):1,m=M.size(r)/p,_=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];On(t,_),_.push(...ie(s,[o[0],o[1],o[2],o[3]/p]));let w=a?["rank","rank","rank"]:["rank","rank"];_.push(...ie([r[0],r[1],r[2],r[3]/p]));let $=S=>{let y=te("output",e[0].dataType,r.length,p),g=Ye(y.type.tensor),x=An(t,y.type.value,g),k=B("x",e[0].dataType,s.length),C=B("w",e[1].dataType,o.length,p),T=[k,C];a&&T.push(B("b",e[2].dataType,e[2].dims,p));let I=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Rn(t,I);let z=u?`
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
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(I).declareVariables(...T,y)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

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
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:$}},S1=(e,t,r,n)=>{let a=e.length>2,i=De(r[3]),s=De(r[2]),o=M.size(r)/i/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],f=[r[0],r[1],r[2],r[3]/i],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];On(t,p),p.push(...ie(u,d,f));let m=(s-1)*t.strides[1]+d[1],_=w=>{let $=te("output",e[0].dataType,f.length,i),S=Ye($.type.tensor),y=An(t,$.type.value,S),g=B("x",e[0].dataType,u.length,i),x=B("w",e[1].dataType,d.length,i),k=[g,x];a&&k.push(B("b",e[2].dataType,e[2].dims,i));let C=a?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Rn(t,T),`
  ${w.registerUniforms(T).declareVariables(...k,$)}
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

    var x_vals: array<${g.type.value}, ${m}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${s};${m};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:_}}}),tg,hs,rg,ms,Ed,Xl,ng,ig,Td,jk=V(()=>{de(),Bk(),Lk(),Gc(),Uk(),Pn(),Hc(),sn(),tg=(e,t,r,n,a,i)=>{let s=e[0],o=e.slice(i?1:2,i?3:4),u=o.length,d=t[0],f=t.slice(2).map((m,_)=>m+(m-1)*(r[_]-1)),p=o.map((m,_)=>m+n[_]+n[_+u]).map((m,_)=>Math.floor((m-f[_]+a[_])/a[_]));return p.splice(0,0,s),p.splice(i?3:1,0,d),p},hs=[2,3,1,0],rg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},ms=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let n=e.pads.slice();oo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:n}),a},Ed=e=>{let t=Fc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,i=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Xl=(e,t,r,n)=>{let a=r.format==="NHWC",i=tg(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let T=[t[0]];if(a){let I=e.kernelCustomData.wT??e.compute(Tt(t[1],hs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I),T.push(I)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(S1(T,r,i,n),{inputs:T}):e.compute(k1(T,r,i,n),{inputs:T});return}let s=t.length===3,o=t[0].dims[a?1:2],u=t[0].dims[a?2:3],d=t[0].dims[a?3:1],f=t[1].dims[2],p=t[1].dims[3],m=i[a?1:2],_=i[a?2:3],w=i[a?3:1],$=a&&f===o&&p===u&&r.pads[0]===0&&r.pads[1]===0;if($||f===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let T=i[0],I,z,O,L=[];if(a){let K=e.kernelCustomData.wT??e.compute(Tt(t[1],hs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),$){let ce=o*u*d;I=t[0].reshape([1,T,ce]),z=K.reshape([1,ce,w]),O=[1,T,w]}else I=t[0].reshape([T,o*u,d]),z=K.reshape([1,d,w]),O=[T,m*_,w];L.push(I),L.push(z)}else I=t[0].reshape([T,d,o*u]),z=t[1].reshape([1,w,d]),O=[T,w,m*_],L.push(z),L.push(I);s&&L.push(t[2]);let Z=O[2],Q=L[0].dims[L[0].dims.length-1];Z<8&&Q<8?e.compute(qc(L,r,i,O,a,n),{inputs:L}):e.compute(uo(L,r,i,O,a,n),{inputs:L});return}let S=!0,y=e.kernelCustomData.wT??e.compute(Tt(t[1],hs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);let g=[t[0],y];s&&g.push(t[2]);let x=a?m*_:w,k=a?w:m*_,C=f*p*d;e.compute($1(g,r,i,x,k,C,s,S,n),{inputs:g})},ng=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=ms({...t,pads:a,strides:i,dilations:s,kernelShape:o},n);Xl(e,n,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ig=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",a=ms(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=x1(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,n);e.compute(b1(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],n))},Td=(e,t)=>{if(rg(e.inputs,t),e.inputs[0].dims.length===3)ng(e,t);else if(e.inputs[0].dims.length===5)ig(e,e.inputs,t);else{let r=ms(t,e.inputs);Xl(e,e.inputs,r)}}}),C1,Wk=V(()=>{se(),Ir(),de(),pe(),C1=(e,t,r)=>{let n=e.length>2,a=t.outputShape,i=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],f=i?De(u):1,p=i&&d===1&&u>=4,m=p?Math.floor(u/4)*4:Math.floor(u/f)*f,_=u-m,w=i?De(d):1,$=i?d===1?f:w:1,S=M.size(a)/w,y=[Math.ceil(S/64),1,1];ye("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);let g=["rank","rank"],x=[t.strides[0],t.strides[1]],k=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],C=[t.dilations[0],t.dilations[1]],T=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],I=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],z=[{type:12,data:S},{type:12,data:x},{type:12,data:k},{type:12,data:C},{type:12,data:T},{type:6,data:I},{type:12,data:m},{type:12,data:u},{type:12,data:d},...ie(e[0].dims,e[1].dims)];n&&(z.push(...ie(e[2].dims)),g.push("rank")),z.push(...ie(a));let O=L=>{let Z=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:I.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Q=Ye(e[0].dataType),K=i?1:2,ce=i?2:3,oe=i?3:1,G=B("W",e[1].dataType,e[1].dims.length,$),ue=B("Dy",e[0].dataType,e[0].dims.length,f),D=[ue,G];n&&D.push(B("bias",e[2].dataType,[a[oe]].length,w));let F=te("result",e[0].dataType,a.length,w),X=()=>{let Y="";if(p)f===4?Y+=`
        let xValue = ${ue.getByOffset("x_offset")};
        let wValue = ${G.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?Y+=`
          dotProd = dotProd + dot(vec4<${Q}>(${ue.getByOffset("x_offset")}, ${ue.getByOffset("x_offset + 1u")}), vec4<${Q}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&(Y+=`
          dotProd = dotProd + dot(vec4<${Q}>(${ue.getByOffset("x_offset")}, ${ue.getByOffset("x_offset + 1u")}, ${ue.getByOffset("x_offset + 2u")}, ${ue.getByOffset("x_offset + 3u")}), vec4<${Q}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}, ${G.getByOffset("w_offset + 2u")}, ${G.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Y+=`
                  let xValue = ${i?ue.getByOffset(`${ue.indicesToOffset(`${ue.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):ue.get("batch","inputChannel","idyR","idyC")};
        `,f===1)Y+=`
          let w_offset = ${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${G.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let J=0;J<f;J++)Y+=`
            let wValue${J} = ${G.getByOffset(`${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${J}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${J}] * wValue${J};`;return Y},R=()=>{if(_===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let Y="";if(f===1){Y+="dotProd = dotProd";for(let J=0;J<_;J++)Y+=`
            + ${ue.getByOffset(`x_offset + ${J}`)} * ${G.getByOffset(`w_offset + ${J}`)}`;Y+=";"}else if(f===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);Y+=`
          let xValue = ${ue.getByOffset("x_offset")};
          let wValue = ${G.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Y},W=`
            let outputIndices = ${F.offsetToIndices(`global_idx * ${w}`)};
            let batch = ${F.indicesGet("outputIndices",0)};
            let d1 = ${F.indicesGet("outputIndices",oe)};
            let r = ${F.indicesGet("outputIndices",K)};
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
              let dyR = (${Q}(dyRCorner) + ${Q}(wR)) / ${Q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Q}(uniforms.Dy_shape[${K}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${Q}(dyCCorner) + ${Q}(wC)) / ${Q}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Q}(uniforms.Dy_shape[${ce}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${ue.indicesToOffset(`${ue.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${G.indicesToOffset(`${G.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:f}) {
                  ${X()}
                  inputChannel = inputChannel + ${p?4:f};
                }
                ${R()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${w}]`:""};
            ${F.setByOffset("global_idx","value")};
          `;return`
    ${L.registerUniforms(Z).declareVariables(...D,F)}
      ${L.mainStart()}
      ${L.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${W}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${$}${w}${p}${_}`,inputDependencies:g},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:z}),getShaderSource:O}}}),ag,sg,og,Jl,E1,lg,eu,ug,T1,Fk=V(()=>{Wk(),Pn(),sn(),ag=(e,t,r,n,a,i)=>(e-1)*t+r+(n-1)*a+1-i,sg=(e,t,r,n,a)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=i,r[a]=e-i):t==="SAME_LOWER"&&(r[n]=e-i,r[a]=i)},og=(e,t,r,n,a,i,s,o,u,d)=>{let f=e.length-2,p=d.length===0;u.length<f&&u.push(...Array(f-u.length).fill(0));let m=e[0],_=t[o?3:1]*a;for(let w=0,$=e.length-f-(o?1:0);w<f;++w,++$){let S=e[$],y=p?S*s[w]:d[w],g=ag(S,s[w],i[w],t[$],r[w],y);sg(g,n,i,w,w+f),p&&d.push(s[w]*(S-1)+u[w]+(t[$]-1)*r[w]+1-i[w]-i[w+f])}d.splice(0,0,m),d.splice(o?3:1,0,_)},Jl=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,m)=>p*m,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let a=e.pads.slice(),i=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,m)=>p+m,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,m)=>p+m,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}og(o,r,u,e.autoPad,e.group,a,d,n,s,i);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:a,outputPadding:s,outputShape:i,dilations:u,strides:d}),f},E1=e=>{let t=Fc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,i=e.group,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),f=e.outputPadding,p=e.outputShape;return{autoPad:n,format:r,dilations:a,group:i,kernelShape:s,outputPadding:f,outputShape:p,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},lg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},eu=(e,t,r,n)=>{let a=e.kernelCustomData.wT??e.compute(Tt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let i=[t[0],a];t.length===3&&i.push(t[2]),e.compute(C1(i,r,n),{inputs:i})},ug=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),i=[1].concat(i),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let d=Jl({...t,pads:o,strides:s,dilations:i,kernelShape:a,outputPadding:u},n);eu(e,n,d,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},T1=(e,t)=>{if(lg(e.inputs,t),e.inputs[0].dims.length===3)ug(e,t);else{let r=Jl(t,e.inputs);eu(e,e.inputs,r)}}}),dg,I1,z1,Vk=V(()=>{se(),de(),Ue(),pe(),dg=(e,t,r,n)=>{let a=M.size(t),i=t.length,s=B("input",e,i),o=te("output",e,i),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=M.normalizeAxis(u,i),f=p=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=ne("uniforms.input_shape","uniforms.axis",i),w=n.reverse?m+(n.exclusive?" + 1":""):"0",$=n.reverse?_:m+(n.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...ie(t,t)]}),getShaderSource:f}},I1=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,a=e.inputs[1];e.compute(dg(n,r,a,t),{inputs:[0]})},z1=e=>{let t=e.exclusive===1,r=e.reverse===1;return xe({exclusive:t,reverse:r})}}),cg,fg,pg,A1,O1,qk=V(()=>{se(),de(),Ue(),pe(),cg=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},fg=(e,t,r,n)=>{let a=[];a.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)a.push(r.indicesSet("a",e[i],`i[${i}]`));return a.push("return a;}"),a.join(`
`)},pg=(e,t)=>{let r,n,a,i,s,o,u=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";u?([r,n,a,i]=e.dims,s=f?[r,n,a,d,d,i/d**2]:[r,n,a,i/d**2,d,d],o=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,a,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[r,d,d,i/d**2,n,a]:[r,i/d**2,d,d,n,a],o=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(s),m=p.dims.length,_=e.dataType,w=B("a",_,m),$=te("output",_,m),S=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(w,$)}

  ${fg(o,m,w,$)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:y=>{let g=u?[r,n*d,a*d,i/d**2]:[r,i/d**2,n*d,a*d],x=M.size(g),k=p.dims,C=M.sortBasedOnPerm(k,o);return{outputs:[{dims:g,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...ie(k,C)]}},getShaderSource:S}},A1=(e,t)=>{cg(e.inputs),e.compute(pg(e.inputs[0],t))},O1=e=>xe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),gs,Li,tu,hg,mg,gg,yg,ru,_g,R1,N1,Hk=V(()=>{se(),de(),Ue(),pe(),gs="[a-zA-Z]|\\.\\.\\.",Li="("+gs+")+",tu="^"+Li+"$",hg="("+Li+",)*"+Li,mg="^"+hg+"$",gg=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},yg=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(mg)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let o=e[s].dims.slice();if(!i.match(RegExp(tu)))throw new Error("Invalid LHS term");let u=this.processTerm(i,!0,o,s);this.lhs.push(u)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!n.match(RegExp(Li)))throw new Error("Invalid RHS");(a=n.match(RegExp(gs,"g")))==null||a.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let a=r.length,i=!1,s=[],o=0;if(!e.match(RegExp(tu))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(gs,"g")),d=new gg(n);return u==null||u.forEach((f,p)=>{if(f==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let m=a-u.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let w=String.fromCharCode(48+_);d.addSymbol(w,p+_),this.addSymbol(w,r[o++],n)}}else d.addSymbol(f,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[o++],n)}),d}},ru=e=>e+"_max",_g=(e,t,r,n)=>{let a=e.map(d=>d.length).map((d,f)=>B(`input${f}`,t,d)),i=M.size(n),s=te("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let f=[],p="var prod = 1.0;",m="var sum = 0.0;",_="sum += prod;",w=[],$=[],S=[],y=[],g=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,C)=>{var T;if(r.rhs.symbolToIndices.has(C)){let I=(T=r.rhs.symbolToIndices.get(C))==null?void 0:T[0];I!==void 0&&r.lhs.forEach((z,O)=>{if(k.inputIndices.includes(O)){let L=z.symbolToIndices.get(C);if(L===void 0)throw new Error("Invalid symbol error");L.forEach(Z=>{f.push(`${a[O].indicesSet(`input${O}Indices`,Z,s.indicesGet("outputIndices",I))}`)})}})}else r.lhs.forEach((I,z)=>{if(k.inputIndices.includes(z)){let O=I.symbolToIndices.get(C);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(L=>{w.push(`${a[z].indicesSet(`input${z}Indices`,L,`${C}`)}`)}),y.push(`prod *= ${a[z].getByIndices(`input${z}Indices`)};`)}}),$.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${ru(C)}; ${C}++) {`),S.push("}")});let x=g?[...f,`let sum = ${a.map((k,C)=>k.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...f,m,...$,...w,p,...y,_,...S];return`
            ${d.registerUniforms(o.map(k=>({name:`${ru(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((k,C)=>`var input${C}Indices: ${a[C].type.indices};`).join(`
`)}
            ${x.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>r.symbolToInfo.has(p)).map(p=>{var m;return{type:12,data:((m=r.symbolToInfo.get(p))==null?void 0:m.dimValue)||0}});d.push({type:12,data:i});let f=e.map((p,m)=>[...ie(p)]).reduce((p,m)=>p.concat(m),d);return f.push(...ie(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}},getShaderSource:u}},R1=(e,t)=>{let r=new yg(e.inputs,t.equation),n=r.outputDims,a=e.inputs.map((i,s)=>i.dims);e.compute(_g(a,e.inputs[0].dataType,r,n))},N1=e=>{let t=e.equation.replace(/\s+/g,"");return xe({equation:t})}}),vg,nu,wg,$g,M1,Gk=V(()=>{se(),de(),pe(),vg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;n<r.length&&a<t.length;++n,++a)if(r[n]!==t[a]&&r[n]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},nu=(e,t)=>{let r=e.length-t.length,n=[];for(let a=0;a<r;++a)n.push(e[a]);for(let a=0;a<t.length;++a)n.push(t[a]===1?e[a+r]:t[a]);return n},wg=(e,t)=>e.length>t.length?nu(e,t):nu(t,e),$g=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=wg(t,r),a=e[0].dataType,i=a===9||M.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=i||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(M.size(n)/o),d=p=>{let m=B("input",a,t.length,s),_=te("output",a,n.length,o),w;if(a===9){let $=(S,y,g="")=>`
          let outputIndices${y} = ${_.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${m.broadcastedIndicesToOffset(`outputIndices${y}`,_)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${S}[${y}] = ${g}(${m.getByOffset(`index${y}`)}[component${y}]);
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
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(m,_)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},f=[{type:12,data:u},...ie(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f})}},M1=e=>{vg(e.inputs),e.compute($g(e.inputs),{inputs:[0]})}}),xg,D1,Kk=V(()=>{se(),de(),pe(),Wc(),xg=e=>{let t=e[0].dataType,r=M.size(e[0].dims),n=M.size(e[1].dims),a=n%4===0,i=s=>{let o=B("x",t,[1],4),u=B("bias",t,[1],4),d=te("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${u.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,m=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(o,u,d)}

    ${bd(st(t))}

    ${s.mainStart(gi)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",kd("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/gi/4)}})}},D1=e=>{e.inputs.length<2||M.size(e.inputs[1].dims)===0?r1(e):e.compute(xg(e.inputs))}}),bg,kg,P1,B1,Qk=V(()=>{se(),de(),Ue(),pe(),bg=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},kg=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=M.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(i,1,...n);let o=r[i],u=e[0].dataType===9?4:1,d=Math.ceil(M.size(s)/u),f=[{type:12,data:d},{type:6,data:o},{type:12,data:i},...ie(e[0].dims,e[1].dims,s)],p=m=>{let _=B("data",e[0].dataType,e[0].dims.length,u),w=B("inputIndices",e[1].dataType,e[1].dims.length),$=te("output",e[0].dataType,s.length,u),S=g=>{let x=n.length,k=`var indicesIndices${g}  = ${w.type.indices}(0);`;for(let C=0;C<x;C++)k+=`${x>1?`indicesIndices${g}[${C}]`:`indicesIndices${g}`} = ${s.length>1?`outputIndices${g}[uniforms.axis + ${C}]`:`outputIndices${g}`};`;k+=`
          var idx${g} = ${w.getByIndices(`indicesIndices${g}`)};
          if (idx${g} < 0) {
            idx${g} = idx${g} + uniforms.axisDimLimit;
          }
          var dataIndices${g} : ${_.type.indices};
        `;for(let C=0,T=0;C<a;C++)C===i?(k+=`${a>1?`dataIndices${g}[${C}]`:`dataIndices${g}`} = u32(idx${g});`,T+=x):(k+=`${a>1?`dataIndices${g}[${C}]`:`dataIndices${g}`} = ${s.length>1?`outputIndices${g}[${T}]`:`outputIndices${g}`};`,T++);return k},y;if(e[0].dataType===9){let g=(x,k,C="")=>`
          let outputIndices${k} = ${$.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${_.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${x}[${k}] = ${C}(${_.getByOffset(`index${k}`)}[component${k}]);
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
      ${S("")};
      let value = ${_.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,$)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${y}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:p}},P1=e=>xe({axis:e.axis}),B1=(e,t)=>{let r=e.inputs;bg(r),e.compute(kg(e.inputs,t))}}),Sg,L1,U1,Yk=V(()=>{se(),de(),pe(),Sg=(e,t,r,n,a,i,s,o,u)=>{let d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],f=[i];d.push(...ie(t.dims,f));let p=m=>{let _=B("indices_data",t.dataType,t.dims.length),w=te("input_slice_offsets_data",12,1,1),$=[_,w],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(S).declareVariables(...$)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},L1=(e,t)=>{let r=e.inputs,n=r[0].dims,a=r[0].dataType,i=r[1].dims,s=i[i.length-1],o=M.sizeToDimension(i,i.length-1),u=M.sizeFromDimension(n,t.batchDims+s),d=M.sizeToDimension(n,t.batchDims),f=M.sizeFromDimension(n,t.batchDims),p=o/d,m=new Array(s),_=u;for(let k=0;k<s;++k)m[s-1-k]=_,_*=n[t.batchDims+s-1-k];let w=Sg(e,r[1],m,t.batchDims,n,o,p,f,s),$=t.batchDims+s;if($>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=i.slice(0,-1).concat(n.slice($)),y=M.size(S),g=[{type:12,data:y},{type:12,data:u},...ie(r[0].dims,w.dims,S)],x=k=>{let C=B("data",r[0].dataType,r[0].dims.length),T=B("slice_offsets",12,w.dims.length),I=te("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,T,I)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:g}),getShaderSource:x},{inputs:[r[0],w]})},U1=e=>({batchDims:e.batch_dims,cacheKey:""})}),Cg,Eg,j1,W1,Zk=V(()=>{se(),de(),Ue(),pe(),Cg=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=M.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,a=e[0],i=e[2],s=e.length===4?e[3]:void 0;if(i.dims.length!==a.dims.length||!a.dims.map((o,u)=>u===r?Math.ceil(o/n)===i.dims[u]:o===i.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==i.dims.length||!s.dims.map((o,u)=>o===i.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Eg=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r.length,i=M.normalizeAxis(t.gatherAxis,a),s=M.normalizeAxis(t.quantizeAxis,a),o=r.slice(0);o.splice(i,1,...n);let u=M.size(o),d=e[2].dataType,f=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:s},{type:12,data:i},{type:12,data:t.blockSize},...ie(...e.map((_,w)=>_.dims),o)],m=_=>{let w=B("data",e[0].dataType,e[0].dims.length),$=B("inputIndices",e[1].dataType,e[1].dims.length),S=B("scales",e[2].dataType,e[2].dims.length),y=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,g=te("output",d,o.length),x=[w,$,S];y&&x.push(y);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(k).declareVariables(...x,g)}
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
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${y?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${y.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${y.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${st(d)}(quantized_data - zero_point) * scale;
        ${g.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,w)=>w!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,w)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:m}},j1=(e,t)=>{let r=e.inputs;Cg(r,t),e.compute(Eg(e.inputs,t))},W1=e=>xe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Tg,Ig,F1,V1,Xk=V(()=>{se(),de(),Ue(),pe(),Tg=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ig=(e,t)=>{let r=e[0].dims,n=e[0].dataType,a=r.length,i=e[1].dims,s=e[1].dataType,o=M.normalizeAxis(t.axis,a),u=r[o],d=i.slice(0),f=M.size(d),p=B("input",n,a),m=B("indicesInput",s,i.length),_=te("output",n,d.length),w=[{type:12,data:f},{type:6,data:u},{type:12,data:o}];return w.push(...ie(r,i,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,m,_)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},F1=e=>xe({axis:e.axis}),V1=(e,t)=>{let r=e.inputs;Tg(r),e.compute(Ig(e.inputs,t))}}),zg,Ag,q1,H1,Jk=V(()=>{se(),de(),pe(),zg=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Ag=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[a,i,s]=Fv.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[a,i];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(i/u),f=Math.ceil(a/u),p=!0,m=M.size(o),_=[{type:12,data:p?d:m},{type:12,data:a},{type:12,data:i},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(_.push(...ie(e[2].dims)),w.push("rank")),_.push(...ie(o));let $=y=>{let g="";t.transA&&t.transB?g="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?g="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?g="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(g="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let x=t.alpha===1?"":"value *= uniforms.alpha;",k=B("a",e[0].dataType,e[0].dims),C=B("b",e[1].dataType,e[1].dims),T=k.type.value,I=null,z=[k,C];e.length===3&&(I=B("c",e[2].dataType,e[2].dims.length),z.push(I));let O=te("output",e[0].dataType,o.length);z.push(O);let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${y.registerUniforms(L).declareVariables(...z)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${g}
    }

    ${x}
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${T}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=y=>{let g=B("a",e[0].dataType,e[0].dims),x=B("b",e[1].dataType,e[1].dims),k=null,C=[g,x];e.length===3&&(k=B("c",e[2].dataType,e[2].dims.length),C.push(k));let T=te("output",e[0].dataType,o.length);C.push(T);let I=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],z="",O="";t.transA&&t.transB?(O=`
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
      `,z="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
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
      `,z="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
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
      `,z="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
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
      `,z="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let L=t.alpha===1?"":"value *= uniforms.alpha;";return`
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
      ${O}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${z}
      }
      workgroupBarrier();
    }

    ${L}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:_}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:$}},q1=e=>{let t=e.transA,r=e.transB,n=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:n,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},H1=(e,t)=>{zg(e.inputs),e.compute(Ag(e.inputs,t))}}),ir,yr,dn,cn,Og,Rg,Ng,Mg,Dg,Pg,Bg,Lg,G1,K1,eS=V(()=>{se(),de(),Ue(),pe(),[ir,yr,dn,cn]=[0,1,2,3],Og=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Rg=`
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
     indices[${ir}] = batch;
     indices[${yr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
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
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ir}], indices[${yr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ir}], indices[${yr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ir}], indices[${yr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ir}], indices[${yr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ir}], indices[${yr}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ir}], indices[${yr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Lg=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=B("grid",e[1].dataType,n.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ir,yr,dn,cn]=[0,3,1,2]);let s=te("output",e[0].dataType,i.length),o=r.type.value,u=M.size(i),d=[{type:12,data:u},...ie(e[0].dims,n,i)],f=p=>`
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
      var grid_indices = vec3<u32>(indices[${ir}], indices[${dn}], indices[${cn}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Bg(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let m=M.size(i);return{outputs:[{dims:i,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:d}},getShaderSource:f}},G1=(e,t)=>{Og(e.inputs),e.compute(Lg(e.inputs,t))},K1=e=>xe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ct,Ug,Q1,iu,jg,Zi,Y1,Z1=V(()=>{se(),de(),Ue(),Bc(),jc(),pe(),sn(),ct=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ug=(e,t)=>{let r=e[0],n=ct(e,1),a=ct(e,2),i=ct(e,3),s=ct(e,4),o=ct(e,5),u=ct(e,6),d=ct(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],p=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=p,w=0,$=0,S=Math.floor(m/t.numHeads);if(u&&d&&M.size(u.dims)&&M.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==f||u.dims[1]!==t.numHeads||u.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=u.dims[2],$=u.dims[2]}else if(u&&M.size(u.dims)||d&&M.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y;if(n&&M.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');y=2,_=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');y=5,_=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=0,_=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}if(i&&M.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let g=w+_,x=0;if(s&&M.size(s.dims)>0){x=8;let I=s.dims;throw I.length===1?I[0]===f?x=1:I[0]===3*f+2&&(x=3):I.length===2&&I[0]===f&&I[1]===g&&(x=5),x===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,C=m;if(a&&M.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=a.dims[1]*a.dims[3],k=!0}}let T=!1;if(s&&M.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&M.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==f||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==g)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:p,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:g,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:m,vHiddenSize:C,headSize:S,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:T,passPastInKv:k,qkvFormat:y}},Q1=e=>xe({...e}),iu=xe({perm:[0,2,1,3]}),jg=(e,t,r,n,a,i,s)=>{let o=[n,a,i],u=M.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:i}],f=p=>{let m=te("qkv_with_bias",t.dataType,o),_=B("qkv",t.dataType,o),w=B("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms($).declareVariables(_,w,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Zi=(e,t,r,n,a,i,s,o)=>{let u=i;if(s&&M.size(s.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=jg(e,i,s,t,n,r*a,o),u=u.reshape([t,n,r,a]),r===1||n===1?u:e.compute(Tt(u,iu.perm),{inputs:[u],outputs:[-1]})[0]}else return i.dims.length===3&&(u=i.reshape([t,n,r,a])),r===1||n===1?u:e.compute(Tt(u,iu.perm),{inputs:[u],outputs:[-1]})[0]},Y1=(e,t)=>{let r=Ug(e.inputs,t),n=e.inputs[0],a=ct(e.inputs,1),i=ct(e.inputs,2),s=ct(e.inputs,3),o=ct(e.inputs,4),u=ct(e.inputs,5),d=ct(e.inputs,6),f=ct(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let p=a&&i&&a.dims.length===4&&i.dims.length===4,m=Zi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,s,0);if(p)return Ca(e,m,a,i,o,void 0,d,f,u,r);if(!a||!i)throw new Error("key and value must be provided");let _=Zi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),w=Zi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,s,2*r.hiddenSize);Ca(e,m,_,w,o,void 0,d,f,u,r)}}),Wg,Fg,Vg,qg,Id,X1,J1,e$=V(()=>{se(),de(),Ue(),pe(),Wg=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Fg=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),n=r.length),xe({numOutputs:n,axis:t.axis,splitSizes:r})},Vg=e=>`
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
      }`},Id=(e,t)=>{let r=e[0].dims,n=M.size(r),a=e[0].dataType,i=M.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=B("input",a,r.length),u=new Array(t.numOutputs),d=[],f=[],p=0,m=[{type:12,data:n}];for(let w=0;w<t.numOutputs;w++){p+=t.splitSizes[w],u[w]=p;let $=r.slice();$[i]=t.splitSizes[w],f.push($),s[w]=te(`output${w}`,a,$.length),d.push({dims:f[w],dataType:e[0].dataType})}m.push({type:12,data:u},...ie(r,...f));let _=w=>`
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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:m})}},X1=(e,t)=>{Wg(e.inputs);let r=e.inputs.length===1?t:Fg(e.inputs,t);e.compute(Id(e.inputs,r),{inputs:[0]})},J1=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return xe({axis:t,numOutputs:n,splitSizes:r})}}),Hg,co,t$,r$=V(()=>{se(),de(),Ue(),pe(),Hg=(e,t)=>{let[r,n,a,i]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!M.areEqual(n.dims,[])&&!M.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!M.areEqual(a.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],f=a.dims[0],p=M.sizeFromDimension(r.dims,1)/d,m=o===0?a.dims[1]*2:p/s;if(o>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(m/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},co=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:a,scale:i}=t,s=e[0].dims[0],o=M.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,f=e[2].dims[1],p=a===0?f*2:d/n,m=new Array(s,u,d/p,p-f),_=M.computeStrides(m),w=[{type:1,data:i},{type:12,data:m},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=S=>{let y=B("input",e[0].dataType,e[0].dims.length),g=B("position_ids",e[1].dataType,e[1].dims.length),x=B("cos_cache",e[2].dataType,e[2].dims.length),k=B("sin_cache",e[3].dataType,e[3].dims.length),C=te("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${S.declareVariables(y,g,x,k,C)}

        ${S.mainStart(gi)}
          let half_rotary_emb_dim = uniforms.${x.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${g.broadcastedIndicesToOffset("bsnh.xy",te("",g.type.tensor,2))};
            let position_id =
                u32(${g.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${y.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} -
                ${y.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${y.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${y.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",y.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:xe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(m)/gi)},programUniforms:w})}},t$=(e,t)=>{Hg(e.inputs,t),e.compute(co(e.inputs,t))}}),Gg,Kg,au,Qg,n$,tS=V(()=>{Ue(),se(),jc(),Z1(),e$(),sn(),r$(),pe(),Gg=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],a=e[2],i=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],d=r.dims[1],f=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=d,m=0,_=!n||n.dims.length===0,w=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=w*t.numHeads);let $=i&&i.dims.length!==0,S=s&&s.dims.length!==0;if($&&i.dims.length===4&&i.dims[0]===u&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if($&&S){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=i.dims[2]}else if($||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}let g=0,x=!1,k=t.kvNumHeads?w*t.kvNumHeads:f;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(p!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=a.dims[2]}else{if(p!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=a.dims[1]*a.dims[3],x=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:w,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:x,qkvFormat:y}},Kg=xe({perm:[0,2,1,3]}),au=(e,t,r)=>{let n=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),n=e.compute(Tt(n,Kg.perm),{inputs:[n],outputs:[-1]})[0]),n},Qg=(e,t,r,n)=>{let a=7,i=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=f=>{let p=B("seq_lens",r.dataType,r.dims),m=B("total_seq_lens",n.dataType,n.dims),_=te("pos_ids",a,s),w=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(p,m,_)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},n$=(e,t)=>{var k;let r=Gg(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=xe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[m,_,w]=!a&&!i?e.compute(Id([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,a,i],$,S;if(t.doRotary){let C=e.compute(Qg(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],T=e.inputs[7],I=e.inputs[8],z=xe({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[m,C,T,I],L=[-1];$=e.compute(co(O,z),{inputs:O,outputs:L})[0],O.splice(0,1,_);let Z=xe({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(co(O,Z),{inputs:O,outputs:L})[0]}let y=Zi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:m,void 0,0),g=au(e,t.doRotary?S:_,r),x=au(e,w,r);Ca(e,y,g,x,void 0,void 0,s,o,void 0,r,u,d)}}),su,Yg,Zg,i$,rS=V(()=>{se(),de(),sn(),pe(),su=(e,t,r,n,a,i,s,o)=>{let u=De(i),d=u===1?"f32":`vec${u}f`,f=u===1?"vec2f":`mat2x${u}f`,p=a*s,m=64;p===1&&(m=256);let _=[a,s,i/u],w=[a,s,2],$=["rank","type","type"],S=[];S.push(...ie(_,w));let y=g=>{let x=B("x",t.dataType,3,u),k=B("scale",r.dataType,r.dims),C=B("bias",n.dataType,n.dims),T=te("output",1,3,2),I=[x,k,C,T];return`
  var<workgroup> workgroup_shared : array<${f}, ${m}>;
  const workgroup_size = ${m}u;
  ${g.declareVariables(...I)}
  ${g.mainStart(m)}
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
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${m}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:p},programUniforms:S}),getShaderSource:y},{inputs:[t,r,n],outputs:[-1]})[0]},Yg=(e,t,r)=>{let n=t[0].dims,a=n,i=2,s=n[0],o=n[1],u=M.sizeFromDimension(n,i),d=De(u),f=M.size(a)/d,p=su(e,t[0],t[1],t[2],s,u,o,r.epsilon),m=[s,o,u/d],_=[s,o],w=["type","none"],$=S=>{let y=B("x",t[0].dataType,m.length,d),g=B("scale_shift",1,_.length,2),x=te("output",t[0].dataType,m.length,d),k=[y,g,x];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${x.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${g.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${y.getByOffset("global_idx")} * ${x.type.value}(scale_shift.x) + ${x.type.value}(scale_shift.y);
      ${x.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...ie(m,_,m)]}),getShaderSource:$},{inputs:[t[0],p]})},Zg=(e,t,r)=>{let n=t[0].dims,a=n,i=n[0],s=n[n.length-1],o=M.sizeFromDimension(n,1)/s,u=De(s),d=M.size(a)/u,f=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=["type","type"],m=!1,_=[0,n.length-1];for(let y=0;y<n.length-2;y++)m=m||n[y+1]!==1,_.push(y+1);m=m&&n[n.length-1]!==1;let w=m?e.compute(Tt(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(y,g)=>n[_[g]])),$=su(e,w,t[1],t[2],i,o,s,r.epsilon),S=y=>{let g=Ye(t[0].dataType),x=u===1?"vec2f":`mat${u}x2f`,k=I=>{let z=I===0?"x":"y",O=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${g}(${O}(scale.${z}))`;case 2:return`vec2<${g}>(${O}(scale[0].${z}, scale[1].${z}))`;case 4:return`vec4<${g}>(${O}(scale[0].${z}, scale[1].${z}, scale[2].${z}, scale[3].${z}))`;default:throw new Error(`Not supported compoents ${u}`)}},C=B("input",t[0].dataType,t[0].dims,u),T=te("output",t[0].dataType,a,u);return`
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
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:S},{inputs:[t[0],$]})},i$=(e,t)=>{t.format==="NHWC"?Zg(e,e.inputs,t):Yg(e,e.inputs,t)}}),Xg,Jg,a$,nS=V(()=>{se(),de(),pe(),Xg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Jg=(e,t,r)=>{let n=t.simplified,a=e[0].dims,i=e[1],s=!n&&e[2],o=a,u=M.normalizeAxis(t.axis,a.length),d=M.sizeToDimension(a,u),f=M.sizeFromDimension(a,u),p=M.size(i.dims),m=s?M.size(s.dims):0;if(p!==f||s&&m!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${m}`);let _=[];for(let C=0;C<a.length;++C)C<u?_.push(a[C]):_.push(1);let w=De(f),$=["type","type"],S=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/w)},{type:1,data:t.epsilon}];s&&$.push("type");let y=r>1,g=r>2,x=C=>{let T=Ye(e[0].dataType),I=[B("x",e[0].dataType,e[0].dims,w),B("scale",i.dataType,i.dims,w)];s&&I.push(B("bias",s.dataType,s.dims,w)),I.push(te("output",e[0].dataType,o,w)),y&&I.push(te("mean_data_output",1,_)),g&&I.push(te("inv_std_output",1,_));let z=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(z).declareVariables(...I)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${wd("f32",w)};
    var mean_square_vector = ${wd("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ti(T,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${en("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${en("mean_square_vector",w)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ti(T,w,"x[j + offset]")};
      let f32scale = ${ti(T,w,"scale[j]")};
      output[j + offset] = ${I[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${ti(T,w,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${g?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return y&&k.push({dims:_,dataType:1}),g&&k.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${r};${n}`,inputDependencies:$},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:x}},a$=(e,t)=>{Xg(e.inputs),e.compute(Jg(e.inputs,t,e.outputCount))}}),ey,s$,iS=V(()=>{de(),Hc(),Gc(),ey=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},s$=e=>{ey(e.inputs);let t=mi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(qc(e.inputs,{activation:""},t));else{let a=t[t.length-2],i=M.size(e.inputs[0].dims.slice(0,-2)),s=M.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&a===1&&s===1){let o=e.inputs[0].reshape([1,i,n]),u=e.inputs[1].reshape([1,n,r]),d=[1,i,r],f=[o,u];e.compute(uo(f,{activation:""},t,d),{inputs:f})}else e.compute(uo(e.inputs,{activation:""},t))}}}),ty,ry,ny,o$,l$,aS=V(()=>{se(),de(),Ue(),pe(),ty=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,s=e[1];if(!M.areEqual(s.dims,[t.n,a,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(M.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(M.size(u)!==d)throw new Error("zeroPoints input size error.")}},ry=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,o=r.slice(0,n-2),u=M.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=De(t.k),m=De(d),_=De(s),w=o.concat([a,s]),$=a>1&&s/_%2===0?2:1,S=M.size(w)/_/$,y=64,g=[],x=[u,a,i/p],k=M.convertShape(e[1].dims).slice();k.splice(-1,1,d/m),g.push(...ie(x)),g.push(...ie(k)),g.push(...ie(e[2].dims)),e.length===4&&g.push(...ie(M.convertShape(e[3].dims)));let C=[u,a,s/_];g.push(...ie(C));let T=I=>{let z=x.length,O=B("a",e[0].dataType,z,p),L=B("b",12,k.length,m),Z=B("scales",e[2].dataType,e[2].dims.length),Q=[O,L,Z],K=e.length===4?B("zero_points",12,e[3].dims.length):void 0;K&&Q.push(K);let ce=C.length,oe=te("output",e[0].dataType,ce,_),G=Ye(e[0].dataType),ue=(()=>{switch(p){case 1:return`array<${G}, 8>`;case 2:return`mat4x2<${G}>`;case 4:return`mat2x4<${G}>`;default:throw new Error(`${p}-component is not supported.`)}})(),D=()=>{let R=`
          // reuse a data
            var input_offset = ${O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`)};
            var a_data: ${ue};
            for (var j: u32 = 0; j < ${8/p}; j++) {
              a_data[j] = ${O.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let W=0;W<_*$;W++)R+=`
            b_value = ${m===1?`b${W}_data`:`b${W}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${ue}(${Array.from({length:4},(Y,J)=>`${G}(b_value_lower[${J}]), ${G}(b_value_upper[${J}])`).join(", ")});
            b_dequantized_values = ${p===1?`${ue}(${Array.from({length:8},(Y,J)=>`(b_quantized_values[${J}] - ${K?`zero_point${W}`:"zero_point"}) * scale${W}`).join(", ")});`:`(b_quantized_values - ${ue}(${Array(8).fill(`${K?`zero_point${W}`:"zero_point"}`).join(",")})) * scale${W};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(W/_)}]${_>1?`[${W%_}]`:""} += ${Array.from({length:8/p},(Y,J)=>`${p===1?`a_data[${J}] * b_dequantized_values[${J}]`:`dot(a_data[${J}], b_dequantized_values[${J}])`}`).join(" + ")};
          `;return R},F=()=>{let R=`
            var col_index = col * ${_};
            ${K?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${G}(8);`}
            `;for(let W=0;W<_*$;W++)R+=`
            let scale${W} = ${Z.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${G}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return R},X=()=>{let R=`col_index = col * ${_};`;for(let W=0;W<_*$;W++)R+=`
            let b${W}_data = ${L.getByIndices(`${L.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return R+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ue};
            var b_dequantized_values: ${ue};`,R};return`
        var<workgroup> workgroup_shared: array<${oe.type.value}, ${$*y}>;
        ${I.declareVariables(...Q,oe)}
        ${I.mainStart([y,1,1])}
          let output_indices = ${oe.offsetToIndices(`(global_idx / ${y}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${y}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${F()}
            for (var word: u32 = 0; word < ${d}; word += ${m}) {
              ${X()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${D()}
                word_offset += ${8/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${y}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${m};${_};${$};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:f}],dispatchGroup:{x:S},programUniforms:g}),getShaderSource:T}},ny=(e,t)=>{let r=e[0].dims,n=r.length,a=r[n-2],i=t.k,s=t.n,o=r.slice(0,n-2),u=M.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=De(t.k),m=De(d),_=o.concat([a,s]),w=128,$=s%8===0?8:s%4===0?4:1,S=w/$,y=S*m*8,g=y/p,x=y/t.blockSize,k=M.size(_)/$,C=[],T=[u,a,i/p],I=M.convertShape(e[1].dims).slice();I.splice(-1,1,d/m),C.push(...ie(T)),C.push(...ie(I)),C.push(...ie(e[2].dims)),e.length===4&&C.push(...ie(M.convertShape(e[3].dims)));let z=[u,a,s];C.push(...ie(z));let O=L=>{let Z=T.length,Q=B("a",e[0].dataType,Z,p),K=B("b",12,I.length,m),ce=B("scales",e[2].dataType,e[2].dims.length),oe=[Q,K,ce],G=e.length===4?B("zero_points",12,e[3].dims.length):void 0;G&&oe.push(G);let ue=z.length,D=te("output",e[0].dataType,ue),F=Ye(e[0].dataType),X=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Q.type.value}, ${g}>;
        var<workgroup> inter_results: array<array<${D.type.value}, ${S}>, ${$}>;
        ${L.declareVariables(...oe,D)}
        ${L.mainStart([S,$,1])}
          let output_indices = ${D.offsetToIndices(`workgroup_index * ${$}`)};
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
                sub_a[a_offset] = ${Q.getByIndices(`${Q.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Q.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${x} + local_id.x;
            ${G?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${F}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            let scale = ${ce.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${K.getByIndices(`${K.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${X()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${F}>(${Array.from({length:4},(R,W)=>`${F}(b_value_lower[${W}]), ${F}(b_value_upper[${W}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${F}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(R,W)=>`${`dot(a_data${W}, b_dequantized_values[${W}])`}`).join(" + ")};
              word_offset += ${8/p};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${D.type.value} = ${D.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${D.setByIndices(`${D.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${m};${S};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:k},programUniforms:C}),getShaderSource:O}},o$=(e,t)=>{ty(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(ny(e.inputs,t)):e.compute(ry(e.inputs,t))},l$=e=>xe(e)}),iy,ay,sy,oy,ly,uy,dy,cy,u$,sS=V(()=>{se(),de(),pe(),iy=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ay=(e,t,r)=>{let n="";for(let a=t-1;a>=0;--a)n+=`
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
          `},uy=(e,t,r)=>{switch(r.mode){case 0:return ay(e,t,r.pads.length);case 1:return sy(e,t,r.pads.length);case 2:return oy(e,t,r.pads.length);case 3:return ly(e,t,r.pads.length);default:throw new Error("Invalid mode")}},dy=(e,t)=>{let r=M.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,a=M.size(r),i=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&i.push({type:s?e[2].dataType:1,data:t.value}),i.push(...ie(e[0].dims,r));let o=["rank"],u=d=>{let f=te("output",e[0].dataType,r.length),p=B("x",e[0].dataType,n.length),m=p.type.value,_=uy(f,n.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:s?m:"f32"}),`
            ${d.registerUniforms(w).declareVariables(p,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(r)/64)},programUniforms:i}),getShaderSource:u}},cy=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,i=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)i[Number(o[u])]=Number(r[u]),i[Number(o[u])+a]=Number(r[u+o.length])}else r.forEach((o,u)=>i[Number(u)]=Number(o));let s=[];return i.forEach(o=>s.push(o)),{mode:t.mode,value:n,pads:s}}else return t},u$=(e,t)=>{iy(e.inputs);let r=cy(e.inputs,t);e.compute(dy(e.inputs,r),{inputs:[0]})}}),Ui,ou,lu,uu,du,fy,py,cu,fu,d$,c$,pu,f$,p$,hu,h$,m$,g$,y$,oS=V(()=>{Lt(),se(),de(),pe(),Ui=e=>{if(Ce.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ou=(e,t,r)=>{let n=t.format==="NHWC",a=e.dims.slice();n&&a.splice(1,0,a.pop());let i=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=i?t.dilations.slice():[],d=t.pads.slice();oo.adjustPoolAttributes(r,a,s,o,u,d);let f=oo.computePoolOutputShape(r,a,o,u,s,d,t.autoPad),p=Object.assign({},t);i?Object.assign(p,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let m=f.slice();return m.push(m.splice(1,1)[0]),[p,n?m:f]},lu=(e,t)=>{let r=t.format==="NHWC",n=M.size(e),a=M.size(t.kernelShape),i=[{type:12,data:n},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],p=!!(d+f);i.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];m=!!($+S),i.push({type:12,data:_},{type:12,data:w},{type:12,data:$},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,s,!0,p,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=M.computeStrides(t.kernelShape);i.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,f)=>d+f);return[i,s,!!u,!1,!1]}},uu=(e,t,r,n,a,i,s,o,u,d,f,p)=>{let m=a.format==="NHWC",_=t.type.value,w=te("output",t.type.tensor,n);if(a.kernelShape.length<=2){let $="",S="",y="",g=r-(m?2:1);if(f?$=`
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
                }`,a.kernelShape.length===2){let x=r-(m?3:2);p?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${x}] < 0 || xIndices[${x}] >= uniforms.x_shape[${x}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
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
              ${S}
              ${$}
              ${y}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=a.kernelShape.length,S=a.pads.length,y="";return d?y=`
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
                    + offsets[j - ${r-$}u] - ${ne("uniforms.pads","j - 2u",S)};
                  ${y}
              }
              ${s}

              output[global_idx] = value;
            }`}},du=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,fy=e=>`${du(e)};${e.countIncludePad}`,py=e=>`${du(e)};${e.storageOrder};${e.dilations}`,cu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),fu=(e,t,r,n)=>{let[a,i]=ou(t,n,r),s=B("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";a.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[f,p,m,_,w]=lu(i,a);f.push(...ie(t.dims,i));let $=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${m};${_};${w}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(i)/64)},programUniforms:f}),getShaderSource:S=>uu(S,s,t.dims.length,i.length,a,u,d,0,p,m,_,w)}},d$=e=>{let t=e.count_include_pad!==0,r=cu(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:fy(n)}},c$=(e,t)=>{Ui(e.inputs),e.compute(fu("AveragePool",e.inputs[0],!1,t))},pu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},f$=e=>{let t=e.format;return{format:t,...pu,cacheKey:t}},p$=(e,t)=>{Ui(e.inputs),e.compute(fu("GlobalAveragePool",e.inputs[0],!0,t))},hu=(e,t,r,n)=>{let[a,i]=ou(t,n,r),s=`
      value = max(x_val, value);
    `,o="",u=B("x",t.dataType,t.dims.length),d=["rank"],[f,p,m,_,w]=lu(i,a);return f.push(...ie(t.dims,i)),{name:e,shaderCache:{hint:`${n.cacheKey};${m};${_};${w}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(i)/64)},programUniforms:f}),getShaderSource:$=>uu($,u,t.dims.length,i.length,a,s,o,t.dataType===10?-65504:-1e5,p,m,_,w)}},h$=(e,t)=>{Ui(e.inputs),e.compute(hu("MaxPool",e.inputs[0],!1,t))},m$=e=>{let t=e.storage_order,r=e.dilations,n=cu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...n,cacheKey:""};return{...a,cacheKey:py(a)}},g$=e=>{let t=e.format;return{format:t,...pu,cacheKey:t}},y$=(e,t)=>{Ui(e.inputs),e.compute(hu("GlobalMaxPool",e.inputs[0],!0,t))}}),hy,my,_$,v$,lS=V(()=>{se(),de(),Ue(),pe(),hy=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,i)=>i===t.axis||a===e[0].dims[i]).reduce((a,i)=>a&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},my=(e,t)=>{let r=M.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,a=n===3,i=e[0].dims,s=e[1].dataType,o=M.size(i),u=n===3||n===2,d=u?[Math.ceil(M.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,p=e.length>2?e[2]:void 0,m=p?u?[Math.ceil(M.size(p.dims)/4)]:p.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,w=_===!1&&f.length===1,$=De(o),S=_&&(!u||$===4),y=S?$:1,g=S&&!u?$:1,x=B("input",u?12:n,d.length,g),k=B("scale",s,f.length),C=p?B("zero_point",u?12:n,m.length):void 0,T=te("output",s,i.length,y),I=[x,k];C&&I.push(C);let z=[d,f];p&&z.push(m);let O=[{type:12,data:o/y},{type:12,data:r},{type:12,data:t.blockSize},...ie(...z,i)],L=Z=>{let Q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Z.registerUniforms(Q).declareVariables(...I,T)}
      ${Z.mainStart()}
          ${Z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${x.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${y===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${x.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${k.getByOffset("0")}`:w?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

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
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":x.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:L,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(o/y/64),y:1,z:1},programUniforms:O})}},_$=(e,t)=>{hy(e.inputs,t),e.compute(my(e.inputs,t))},v$=e=>xe({axis:e.axis,blockSize:e.blockSize})}),gy,yy,w$,uS=V(()=>{Lt(),se(),pe(),gy=(e,t,r)=>{let n=e===t,a=e<t&&r<0,i=e>t&&r>0;if(n||a||i)throw new Error("Range these inputs' contents are invalid.")},yy=(e,t,r,n)=>{let a=Math.abs(Math.ceil((t-e)/r)),i=[a],s=a,o=[{type:12,data:s},{type:n,data:e},{type:n,data:r},...ie(i)],u=d=>{let f=te("output",n,i.length),p=f.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(m).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},w$=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Ce.webgpu.validateInputContent&&gy(t,r,n),e.compute(yy(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),_y,vy,$$,x$,dS=V(()=>{se(),de(),Ue(),pe(),_y=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let a=`{
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
                ${a}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${a}min(bitcast<${n}>(oldValue), (${r}))${i}`;case"mul":return`${a}(bitcast<${n}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},vy=(e,t)=>{let r=e[0].dims,n=e[1].dims,a=r,i=1,s=Math.ceil(M.sizeToDimension(n,n.length-1)/i),o=n[n.length-1],u=M.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ie(e[1].dims,e[2].dims,a)],f=p=>{let m=B("indices",e[1].dataType,e[1].dims.length),_=B("updates",e[2].dataType,e[2].dims.length,i),w=t.reduction!=="none"&&t.reduction!==""?Yv("output",e[0].dataType,a.length):te("output",e[0].dataType,a.length,i);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,_,w)}
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

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f}},$$=e=>xe({reduction:e.reduction}),x$=(e,t)=>{e.compute(vy(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),wy,$y,xy,mu,by,ky,Sy,Cy,Ey,Ty,Iy,zy,gu,Ay,Oy,Ry,Ny,My,b$,k$,cS=V(()=>{se(),de(),Ue(),pe(),wy=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},$y=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((a,i)=>n[a]=e[i]),n},xy=(e,t,r,n,a,i)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>i.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(f=>n.push(f)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");wy(n,t),t.axes.length>0&&$y(n,t.axes,d).forEach((f,p)=>n[p]=f)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(f=>a.push(Number(f))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof a<"u"&&n.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},mu=(e,t,r,n)=>`
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
            ${mu("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${mu("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ky=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Sy=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?n:e.slice();return t.length>0?(t.forEach((i,s)=>{n[i]=a[s],n[s+r]=a[t.length+s]}),n):a},Cy=(e,t,r,n)=>{let a=[];if(r.length>0)if(n.length>0){if(e.forEach(i=>a.push(i)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((i,s)=>a[i]=r[s])}else r.forEach(i=>a.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((i,s)=>Math.round(i*t[s]))}return a},Ey=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=n),r.axes.forEach(i=>a[i]=Math.round(e[i]*t[i]))):(t.fill(n,0,t.length),a.forEach((i,s)=>a[s]=Math.round(i*t[s]))),a},Ty=(e,t,r,n,a)=>`
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
    }`,gu=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Ay=(e,t,r,n,a)=>{let[i,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${gu(e,u,i,2)}
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
    }`},Oy=(e,t,r,n,a,i,s,o,u,d)=>{let f=r.length===2,[p,m]=f?[0,1]:[2,3],_=e.type.value,w=$=>{let S=$===p?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
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
          var ${S}: ${_} = originalIdx + ${_}(i);
          if (${S} < 0 || ${S} >= ${r[$]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${S} = max(0, min(${S}, ${r[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${S})`)};
          data[i + 1] = ${$===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(p)};
    ${w(m)};
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
      ${gu(e,d,i,3)}
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
    }`},Ny=(e,t,r,n,a,i)=>{let s=e.dims,o=Sy(i,t.axes,s.length),u=Cy(s,n,a,t.axes),d=n.slice();n.length===0&&(d=s.map((g,x)=>g===0?1:u[x]/g),t.keepAspectRatioPolicy!=="stretch"&&(u=Ey(s,d,t)));let f=te("output",e.dataType,u.length),p=B("input",e.dataType,s.length),m=M.size(u),_=s.length===u.length&&s.every((g,x)=>g===u[x]),w=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,S=p.type.value,y=g=>`
      ${_?"":`
      ${by(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${zy(p,s)};
              ${ky(t.nearestMode,r,S)};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:d},{type:1,data:o},...ie(s,u)]})}},My=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},b$=(e,t)=>{let r=[],n=[],a=[],i=My(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");xy(e.inputs,t,i,r,n,a),e.compute(Ny(e.inputs[0],t,i,r,n,a),{inputs:[0]})},k$=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,a=e.cubicCoeffA,i=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return xe({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:a,excludeOutside:i,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),Dy,Py,S$,fS=V(()=>{se(),de(),pe(),Dy=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Py=(e,t,r,n)=>{let a=t.simplified,i=e[0].dims,s=M.size(i),o=i,u=s,d=i.slice(-1)[0],f=n?i.slice(0,-1).concat(1):[],p=!a&&e.length>3,m=e.length>4,_=n&&r>1,w=n&&r>2,$=r>3,S=64,y=De(d),g=[{type:12,data:u},{type:12,data:y},{type:12,data:d},{type:1,data:t.epsilon}],x=C=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],I=[B("x",e[0].dataType,e[0].dims,y),B("skip",e[1].dataType,e[1].dims,y),B("gamma",e[2].dataType,e[2].dims,y)];p&&I.push(B("beta",e[3].dataType,e[3].dims,y)),m&&I.push(B("bias",e[4].dataType,e[4].dims,y)),I.push(te("output",e[0].dataType,o,y)),_&&I.push(te("mean_output",1,f)),w&&I.push(te("inv_std_output",1,f)),$&&I.push(te("input_skip_bias_sum",e[0].dataType,o,y));let z=Ye(e[0].dataType),O=Ye(1,y);return`

      ${C.registerUniforms(T).declareVariables(...I)}
      var<workgroup> sum_shared : array<${O}, ${S}>;
      var<workgroup> sum_squared_shared : array<${O}, ${S}>;

      ${C.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":z+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ti(z,y,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
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
      }`},k=[{dims:o,dataType:e[0].dataType}];return r>1&&k.push({dims:f,dataType:1}),r>2&&k.push({dims:f,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${y};${_};${w};${$}`,inputDependencies:e.map((C,T)=>"type")},getShaderSource:x,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:g})}},S$=(e,t)=>{Dy(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Py(e.inputs,t,e.outputCount,!1),{outputs:r})}}),By,ji,Ly,yu,Uy,jy,C$,E$,pS=V(()=>{se(),de(),Ue(),pe(),By=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},ji=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Ly=(e,t)=>{if(e.length>1){let r=ji(e,1),n=ji(e,2),a=ji(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),xe({starts:r,ends:n,axes:a})}else return t},yu=(e,t,r,n,a)=>{let i=e;return e<0&&(i+=r[n[t]]),a[t]<0?Math.max(0,Math.min(i,r[n[t]]-1)):Math.max(0,Math.min(i,r[n[t]]))},Uy=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,jy=(e,t)=>{let r=e[0].dims,n=M.size(r),a=t.axes.length>0?M.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=ji(e,4);i.forEach(y=>y!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(a.length).fill(1));let s=t.starts.map((y,g)=>yu(y,g,r,a,i)),o=t.ends.map((y,g)=>yu(y,g,r,a,i));if(a.length!==s.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let y=0;y<r.length;++y)a.includes(y)||(s.splice(y,0,0),o.splice(y,0,r[y]),i.splice(y,0,1));let u=i.map(y=>Math.sign(y));i.forEach((y,g,x)=>{if(y<0){let k=(o[g]-s[g])/y,C=s[g],T=C+k*i[g];s[g]=T,o[g]=C,x[g]=-y}});let d=r.slice(0);a.forEach((y,g)=>{d[y]=Math.ceil((o[y]-s[y])/i[y])});let f={dims:d,dataType:e[0].dataType},p=te("output",e[0].dataType,d.length),m=B("input",e[0].dataType,e[0].dims.length),_=M.size(d),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:i.length}],$=[{type:12,data:_},{type:12,data:s},{type:6,data:u},{type:12,data:i},...ie(e[0].dims,d)],S=y=>`
      ${y.registerUniforms(w).declareVariables(m,p)}
        ${Uy(m,p,r)}
        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:$})}},C$=(e,t)=>{By(e.inputs,t);let r=Ly(e.inputs,t);e.compute(jy(e.inputs,r),{inputs:[0]})},E$=e=>{let t=e.starts,r=e.ends,n=e.axes;return xe({starts:t,ends:r,axes:n})}}),Wy,Fy,T$,I$,hS=V(()=>{se(),de(),Ue(),sn(),pe(),Wy=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Fy=(e,t)=>{let r=e.inputs[0],n=r.dims,a=M.size(n),i=n.length,s=M.normalizeAxis(t.axis,i),o=s<n.length-1,u,d=[];o?(d=Array.from({length:i},(I,z)=>z),d[s]=i-1,d[i-1]=s,u=e.compute(Tt(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let f=u.dims,p=f[i-1],m=a/p,_=De(p),w=p/_,$=64;m===1&&($=256);let S=(I,z)=>z===4?`max(max(${I}.x, ${I}.y), max(${I}.z, ${I}.w))`:z===2?`max(${I}.x, ${I}.y)`:z===3?`max(max(${I}.x, ${I}.y), ${I}.z)`:I,y=B("x",u.dataType,u.dims,_),g=te("result",u.dataType,u.dims,_),x=y.type.value,k=Ye(u.dataType)==="f32"?`var threadMax = ${x}(-3.402823e+38f);`:`var threadMax = ${x}(-65504.0h);`,C=I=>`
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
        ${k}
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
          rowMaxShared = ${x}(${S("threadShared[0]",_)});
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
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${_};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:u.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:w}]}),getShaderSource:C},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Tt(T,d),{inputs:[T]})},T$=(e,t)=>{Wy(e.inputs),Fy(e,t)},I$=e=>xe({axis:e.axis})}),_u,Vy,qy,Hy,z$,mS=V(()=>{se(),de(),pe(),_u=e=>Array.from(e.getBigInt64Array(),Number),Vy=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(_u(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},qy=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},Hy=(e,t)=>{let r=e[0].dims,n=t??_u(e[1]),a=qy(r,n),i=M.size(a),s=e[0].dataType,o=B("input",s,r.length),u=te("output",s,a.length),d=f=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...ie(e[0].dims,a)]}),getShaderSource:d}},z$=e=>{Vy(e.inputs),e.compute(Hy(e.inputs),{inputs:[0]})}}),Gy,Ky,A$,gS=V(()=>{se(),de(),pe(),Gy=(e,t,r,n,a)=>{let i=te("output_data",a,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),o=B("b_data",t[2].dataType,t[2].dims.length,4),u=B("c_data",t[0].dataType,t[0].dims.length,4),d,f=(p,m,_)=>`select(${m}, ${p}, ${_})`;if(!n)d=i.setByOffset("global_idx",f(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(m,_,w="")=>{let $=`a_data[index_a${_}][component_a${_}]`,S=`b_data[index_b${_}][component_b${_}]`,y=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
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
            ${m}[${_}] = ${w}(${f($,S,y)});
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
      }`},Ky=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,a=e[1].dataType,i=!(M.areEqual(t,r)&&M.areEqual(r,n)),s=t,o=M.size(t);if(i){let d=mi.calcShape(mi.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=M.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Gy(d,e,s,i,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ie(n,t,r,s)]})}},A$=e=>{e.compute(Ky(e.inputs))}}),O$,yS=V(()=>{Ak(),jc(),Ok(),Rk(),Nk(),Mk(),Dk(),jk(),Fk(),Vk(),qk(),Hk(),Gk(),Kk(),Qk(),Yk(),Zk(),Xk(),Jk(),eS(),tS(),rS(),nS(),iS(),aS(),Z1(),sS(),oS(),lS(),uS(),dS(),Uc(),cS(),r$(),fS(),pS(),hS(),e$(),mS(),sn(),Wc(),gS(),O$=new Map([["Abs",[Sw]],["Acos",[Cw]],["Acosh",[Ew]],["Add",[o1]],["ArgMax",[$w,xd]],["ArgMin",[ww,xd]],["Asin",[Tw]],["Asinh",[Iw]],["Atan",[zw]],["Atanh",[Aw]],["Attention",[xw]],["AveragePool",[c$,d$]],["BatchNormalization",[bw]],["BiasAdd",[kw]],["BiasSplitGelu",[s1]],["Cast",[Rw,Ow]],["Ceil",[Mw]],["Clip",[Nw]],["Concat",[y1,_1]],["Conv",[Td,Ed]],["ConvTranspose",[T1,E1]],["Cos",[Dw]],["Cosh",[Pw]],["CumSum",[I1,z1]],["DepthToSpace",[A1,O1]],["DequantizeLinear",[_$,v$]],["Div",[l1]],["Einsum",[R1,N1]],["Elu",[Bw,Yi]],["Equal",[u1]],["Erf",[Lw]],["Exp",[Uw]],["Expand",[M1]],["FastGelu",[D1]],["Floor",[jw]],["FusedConv",[Td,Ed]],["Gather",[B1,P1]],["GatherElements",[V1,F1]],["GatherBlockQuantized",[j1,W1]],["GatherND",[L1,U1]],["Gelu",[Ww]],["Gemm",[H1,q1]],["GlobalAveragePool",[p$,f$]],["GlobalMaxPool",[y$,g$]],["Greater",[p1]],["GreaterOrEqual",[m1]],["GridSample",[G1,K1]],["GroupQueryAttention",[n$]],["HardSigmoid",[Yw,Qw]],["InstanceNormalization",[i$]],["LayerNormalization",[a$]],["LeakyRelu",[Fw,Yi]],["Less",[h1]],["LessOrEqual",[g1]],["Log",[i1]],["MatMul",[s$]],["MatMulNBits",[o$,l$]],["MaxPool",[h$,m$]],["Mul",[d1]],["MultiHeadAttention",[Y1,Q1]],["Neg",[qw]],["Not",[Vw]],["Pad",[u$]],["Pow",[c1]],["QuickGelu",[a1,Yi]],["Range",[w$]],["Reciprocal",[Hw]],["ReduceMin",[mw]],["ReduceMean",[dw]],["ReduceMax",[hw]],["ReduceSum",[yw]],["ReduceProd",[gw]],["ReduceL1",[cw]],["ReduceL2",[fw]],["ReduceLogSum",[vw]],["ReduceLogSumExp",[pw]],["ReduceSumSquare",[_w]],["Relu",[Gw]],["Resize",[b$,k$]],["RotaryEmbedding",[t$]],["ScatterND",[x$,$$]],["Sigmoid",[Kw]],["Sin",[Zw]],["Sinh",[Xw]],["Slice",[C$,E$]],["SkipLayerNormalization",[S$]],["Split",[X1,J1]],["Sqrt",[Jw]],["Softmax",[T$,I$]],["Sub",[f1]],["Tan",[e1]],["Tanh",[t1]],["ThresholdedRelu",[n1,Yi]],["Tile",[z$]],["Transpose",[Xv,Jv]],["Where",[A$]]])}),R$,_S=V(()=>{Lt(),Ir(),pe(),R$=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,a){ur(e.programInfo.name);let i=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});a&&o.push({binding:o.length,resource:a});let u=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Jt(e.programInfo.name)}dispose(){}build(e,t){ur(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let a=Zv(t,this.backend.device.limits),i=e.getShaderSource(a),s=`${n.join(`
`)}
${a.additionalImplementations}
${i}`,o=r.createShaderModule({code:s,label:e.name});ye("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Jt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&n<=a)return[t,r,n];let i=t*r*n,s=Math.ceil(Math.sqrt(i));if(s>a){if(s=Math.ceil(Math.cbrt(i)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),N$={};wi(N$,{WebGpuBackend:()=>M$});var Qy,Yy,Zy,M$,vS=V(()=>{Lt(),se(),Ir(),Hv(),Ik(),yS(),_S(),Qy=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let a=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let i=e[n].dims.length;r.push(`${a};${i}`);break}case"dims":{let i=e[n].dims.join(",");r.push(`${a};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Yy=(e,t,r)=>{var a,i;let n=e.name;return(a=e.shaderCache)!=null&&a.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Qy(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,n},Zy=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},M$=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=i=>t.features.has(i)&&r.push(i)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(n),this.adapterInfo=new Zy(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Qv(this),this.programManager=new R$(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Dc(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ur(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let i=r[a],s=i.kernelId,o=this.kernels.get(s),u=o.kernelType,d=o.kernelName,f=i.programName,p=i.inputTensorViews,m=i.outputTensorViews,_=t[a*2],w=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let $=Number(_-this.queryTimeBase),S=Number(w-this.queryTimeBase);if(!Number.isSafeInteger($)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(y=>({dims:y.dims,dataType:wr(y.dataType)})),outputsMetadata:m.map(y=>({dims:y.dims,dataType:wr(y.dataType)})),kernelId:s,kernelType:u,kernelName:d,programName:f,startTime:$,endTime:S});else{let y="";p.forEach((x,k)=>{y+=`input[${k}]: [${x.dims}] | ${wr(x.dataType)}, `});let g="";m.forEach((x,k)=>{g+=`output[${k}]: [${x.dims}] | ${wr(x.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${d}|${f}" ${y}${g}start time: ${$} ns, execution time: ${S-$} ns`)}io("GPU",`${f}::${_}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),Jt()}run(e,t,r,n,a,i){ur(e.name);let s=[];for(let g=0;g<t.length;++g){let x=t[g].data;if(x===0)continue;let k=this.gpuDataManager.get(x);if(!k)throw new Error(`no GPU data for input: ${x}`);s.push(k)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),f=r.length===0?o.map((g,x)=>x):r;if(f.length!==o.length)throw new Error(`Output size ${f.length} must be equal to ${o.length}.`);let p=[],m=[];for(let g=0;g<o.length;++g){if(!Number.isInteger(f[g])||f[g]<-3||f[g]>=i)throw new Error(`Invalid output index: ${f[g]}`);if(f[g]===-3)continue;let x=f[g]===-1,k=f[g]===-2,C=x||k?a(o[g].dataType,o[g].dims):n(f[g],o[g].dataType,o[g].dims);if(p.push(C),C.data===0)continue;let T=this.gpuDataManager.get(C.data);if(!T)throw new Error(`no GPU data for output: ${C.data}`);if(x&&this.temporaryData.push(T),k){let I=this.kernelPersistentData.get(this.currentKernelId);I||(I=[],this.kernelPersistentData.set(this.currentKernelId,I)),I.push(T)}m.push(T)}if(s.length!==t.length||m.length!==p.length){if(m.length===0)return Jt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let g=0,x=[];d.forEach(I=>{let z=typeof I.data=="number"?[I.data]:I.data;if(z.length===0)return;let O=I.type===10?2:4,L,Z;I.type===10?(Z=z.length>4?16:z.length>2?8:z.length*O,L=z.length>4?16:O*z.length):(Z=z.length<=2?z.length*O:16,L=16),g=Math.ceil(g/Z)*Z,x.push(g);let Q=I.type===10?8:4;g+=z.length>4?Math.ceil(z.length/Q)*L:z.length*O});let k=16;g=Math.ceil(g/k)*k;let C=new ArrayBuffer(g);d.forEach((I,z)=>{let O=x[z],L=typeof I.data=="number"?[I.data]:I.data;if(I.type===6)new Int32Array(C,O,L.length).set(L);else if(I.type===12)new Uint32Array(C,O,L.length).set(L);else if(I.type===10)new Uint16Array(C,O,L.length).set(L);else if(I.type===1)new Float32Array(C,O,L.length).set(L);else throw new Error(`Unsupported uniform type: ${wr(I.type)}`)});let T=this.gpuDataManager.create(g,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,C,0,g),this.gpuDataManager.release(T.id),_={offset:0,size:g,buffer:T.buffer}}let w=this.programManager.normalizeDispatchGroupSize(u),$=w[1]===1&&w[2]===1,S=Yy(e,t,$),y=this.programManager.getArtifact(S);if(y||(y=this.programManager.build(e,w),this.programManager.setArtifact(S,y),ye("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&y.uniformVariablesInfo){if(d.length!==y.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${y.uniformVariablesInfo.length}, got ${d.length} in program "${y.programInfo.name}".`);for(let g=0;g<d.length;g++){let x=d[g],k=x.type,C=typeof x.data=="number"?1:x.data.length,[T,I]=y.uniformVariablesInfo[g];if(k!==T||C!==I)throw new Error(`Uniform variable ${g} mismatch: expect type ${T} with size ${I}, got type ${k} with size ${C} in program "${y.programInfo.name}".`)}}if(ye("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let g={kernelId:this.currentKernelId,programName:y.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(g),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(g)}return this.programManager.run(y,s,m,w,_),Jt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let a=O$.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:n,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let a=n.kernelType,i=n.kernelName,s=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ye("info",()=>`[WebGPU] Start to run kernel "[${a}] ${i}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${i}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${i}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let i=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,n,i);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await vd(this,e,t);return Pc(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ye("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ye("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ye("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let a=this.getComputePassEncoder(),i=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(i.computePipeline),a.setBindGroup(0,i.bindGroup),a.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),D$={};wi(D$,{init:()=>P$});var ys,Xy,P$,wS=V(()=>{se(),Ir(),de(),Tk(),ys=class B${constructor(t,r,n,a){this.module=t,this.dataType=r,this.data=n,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(M.size(t)!==M.size(this.dims))throw new Error("Invalid new shape");return new B$(this.module,this.dataType,this.data,t)}},Xy=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,a=r/e.PTR_SIZE,i=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*a++,i));let s=Number(e.getValue(n*a++,i));this.outputCount=Number(e.getValue(n*a++,i)),this.customDataOffset=Number(e.getValue(n*a++,"*")),this.customDataSize=Number(e.getValue(n*a++,i));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(n*a++,i)),f=Number(e.getValue(n*a++,"*")),p=Number(e.getValue(n*a++,i)),m=[];for(let _=0;_<p;_++)m.push(Number(e.getValue(n*a++,i)));o.push(new ys(e,d,f,m))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,n=(t==null?void 0:t.outputs)??[],a=(o,u,d)=>new ys(this.module,u,this.output(o,d),d),i=(o,u)=>{let d=_n(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let f=d>0?this.backend.gpuDataManager.create(d).id:0;return new ys(this.module,o,f,u)};return this.backend.run(e,r,n,a,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,a=n===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(i+n*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},P$=async(e,t,r,n)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=(vS(),Sa(N$)).WebGpuBackend,s=new i;await s.initialize(r,n),a("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,f=!1)=>{if(f)ye("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{ye("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),p)}},async(o,u,d)=>{ye("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,f)=>{ye("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let p=new Xy(t,s,Number(u));return s.computeKernel(Number(o),p,f)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let i=new Kv(r);a("webnn",[i,()=>i.reserveTensorId(),s=>i.releaseTensorId(s),async(s,o,u,d,f)=>i.ensureTensor(s,o,u,d,f),(s,o)=>{i.uploadTensor(s,o)},async(s,o)=>i.downloadTensor(s,o),(s,o)=>i.registerMLContext(s,o),!!r.trace])}}}),Jy,Kc,Qc,Dr,e0,vu,fo,Yc,Zc,wu,Xc,Jc,ef,L$=V(()=>{Lt(),Sk(),Ck(),se(),Dn(),Oc(),Wv(),Jy=(e,t)=>{Te()._OrtInit(e,t)!==0&&ke("Can't initialize onnxruntime.")},Kc=async e=>{Jy(e.wasm.numThreads,so(e.logLevel))},Qc=async(e,t)=>{var n,a;(a=(n=Te()).asyncInit)==null||a.call(n);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(wS(),Sa(D$)).init;t==="webgpu"&&await i("webgpu",Te(),e,r),t==="webnn"&&await i("webnn",Te(),e)}},Dr=new Map,e0=e=>{let t=Te(),r=t.stackSave();try{let n=t.PTR_SIZE,a=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,a,a+n)!==0&&ke("Can't get session input/output count.");let i=n===4?"i32":"i64";return[Number(t.getValue(a,i)),Number(t.getValue(a+n,i))]}finally{t.stackRestore(r)}},vu=(e,t)=>{let r=Te(),n=r.stackSave(),a=0;try{let i=r.PTR_SIZE,s=r.stackAlloc(2*i);r._OrtGetInputOutputMetadata(e,t,s,s+i)!==0&&ke("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));a=Number(r.getValue(s+i,"*"));let u=r.HEAP32[a/4];if(u===0)return[o,0];let d=r.HEAPU32[a/4+1],f=[];for(let p=0;p<d;p++){let m=Number(r.getValue(a+8+p*i,"*"));f.push(m!==0?r.UTF8ToString(m):Number(r.getValue(a+8+(p+d)*i,"*")))}return[o,u,f]}finally{r.stackRestore(n),a!==0&&r._OrtFree(a)}},fo=e=>{let t=Te(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Yc=async(e,t)=>{var p,m,_,w;let r,n,a=Te();Array.isArray(e)?[r,n]=e:e.buffer===a.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=fo(e);let i=0,s=0,o=0,u=[],d=[],f=[];try{if([s,u]=await jv(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let z=[];for(let O of t.externalData){let L=typeof O=="string"?O:O.path;z.push(Mc(typeof O=="string"?O:O.data).then(Z=>{a.mountExternalData(L,Z)}))}await Promise.all(z)}for(let z of(t==null?void 0:t.executionProviders)??[])if((typeof z=="string"?z:z.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof z!="string"){let O=z,L=O==null?void 0:O.context,Z=O==null?void 0:O.gpuDevice,Q=O==null?void 0:O.deviceType,K=O==null?void 0:O.powerPreference;L?a.currentContext=L:Z?a.currentContext=await a.webnnCreateMLContext(Z):a.currentContext=await a.webnnCreateMLContext({deviceType:Q,powerPreference:K})}else a.currentContext=await a.webnnCreateMLContext();break}i=await a._OrtCreateSession(r,n,s),(p=a.webgpuOnCreateSession)==null||p.call(a,i),i===0&&ke("Can't create a session."),(m=a.jsepOnCreateSession)==null||m.call(a),a.currentContext&&(a.webnnRegisterMLContext(i,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[$,S]=e0(i),y=!!(t!=null&&t.enableGraphCapture),g=[],x=[],k=[],C=[],T=[];for(let z=0;z<$;z++){let[O,L,Z]=vu(i,z);O===0&&ke("Can't get an input name."),d.push(O);let Q=a.UTF8ToString(O);g.push(Q),k.push(L===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:wr(L),shape:Z})}for(let z=0;z<S;z++){let[O,L,Z]=vu(i,z+$);O===0&&ke("Can't get an output name."),f.push(O);let Q=a.UTF8ToString(O);x.push(Q),C.push(L===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:wr(L),shape:Z});{if(y&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let K=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((_=t==null?void 0:t.preferredOutputLocation)==null?void 0:_[Q])??"cpu",ce=a.webnnIsGraphOutput;if(K==="cpu"&&ce&&ce(i,Q)){T.push("ml-tensor-cpu-output");continue}if(K!=="cpu"&&K!=="cpu-pinned"&&K!=="gpu-buffer"&&K!=="ml-tensor")throw new Error(`Not supported preferred output location: ${K}.`);if(y&&K!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${K}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(K)}}let I=null;return T.some(z=>z==="gpu-buffer"||z==="ml-tensor"||z==="ml-tensor-cpu-output")&&(o=a._OrtCreateBinding(i),o===0&&ke("Can't create IO binding."),I={handle:o,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(z=>z==="ml-tensor-cpu-output"?"ml-tensor":z).map(z=>yd(z))}),Dr.set(i,[i,d,f,I,y,!1]),[i,g,x,k,C]}catch($){throw d.forEach(S=>a._OrtFree(S)),f.forEach(S=>a._OrtFree(S)),o!==0&&a._OrtReleaseBinding(o)!==0&&ke("Can't release IO binding."),i!==0&&a._OrtReleaseSession(i)!==0&&ke("Can't release session."),$}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&ke("Can't release session options."),u.forEach($=>a._free($)),(w=a.unmountExternalData)==null||w.call(a)}},Zc=e=>{var u,d,f;let t=Te(),r=Dr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,a,i,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&ke("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ke("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(f=t.webgpuOnReleaseSession)==null||f.call(t,e),a.forEach(p=>t._OrtFree(p)),i.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(n)!==0&&ke("Can't release session."),Dr.delete(e)},wu=async(e,t,r,n,a,i,s=!1)=>{if(!e){t.push(0);return}let o=Te(),u=o.PTR_SIZE,d=e[0],f=e[1],p=e[3],m=p,_,w;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let y=e[2].gpuBuffer;w=_n(yn(d),f);{let g=o.jsepRegisterBuffer;if(!g)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=g(n,i,y,w)}}else if(p==="ml-tensor"){let y=e[2].mlTensor;w=_n(yn(d),f);let g=o.webnnRegisterMLTensor;if(!g)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=g(n,y,yn(d),f)}else{let y=e[2];if(Array.isArray(y)){w=u*y.length,_=o._malloc(w),r.push(_);for(let g=0;g<y.length;g++){if(typeof y[g]!="string")throw new TypeError(`tensor data at index ${g} is not a string`);o.setValue(_+g*u,Qt(y[g],r),"*")}}else{let g=o.webnnIsGraphInput,x=o.webnnIsGraphOutput;if(d!=="string"&&g&&x){let k=o.UTF8ToString(a);if(g(n,k)||x(n,k)){let C=yn(d);w=_n(C,f),m="ml-tensor";let T=o.webnnCreateTemporaryTensor,I=o.webnnUploadTensor;if(!T||!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await T(n,C,f);I(z,new Uint8Array(y.buffer,y.byteOffset,y.byteLength)),_=z}else w=y.byteLength,_=o._malloc(w),r.push(_),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,w),_)}else w=y.byteLength,_=o._malloc(w),r.push(_),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,w),_)}}let $=o.stackSave(),S=o.stackAlloc(4*f.length);try{f.forEach((g,x)=>o.setValue(S+x*u,g,u===4?"i32":"i64"));let y=o._OrtCreateTensor(yn(d),_,w,S,f.length,yd(m));y===0&&ke(`Can't create tensor for input/output. session=${n}, index=${i}.`),t.push(y)}finally{o.stackRestore($)}},Xc=async(e,t,r,n,a,i)=>{var Z,Q,K,ce;let s=Te(),o=s.PTR_SIZE,u=Dr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],f=u[1],p=u[2],m=u[3],_=u[4],w=u[5],$=t.length,S=n.length,y=0,g=[],x=[],k=[],C=[],T=s.stackSave(),I=s.stackAlloc($*o),z=s.stackAlloc($*o),O=s.stackAlloc(S*o),L=s.stackAlloc(S*o);try{[y,g]=Uv(i),kn("wasm prepareInputOutputTensor");for(let D=0;D<$;D++)await wu(r[D],x,C,e,f[t[D]],t[D],_);for(let D=0;D<S;D++)await wu(a[D],k,C,e,p[n[D]],$+n[D],_);Sn("wasm prepareInputOutputTensor");for(let D=0;D<$;D++)s.setValue(I+D*o,x[D],"*"),s.setValue(z+D*o,f[t[D]],"*");for(let D=0;D<S;D++)s.setValue(O+D*o,k[D],"*"),s.setValue(L+D*o,p[n[D]],"*");if(m&&!w){let{handle:D,outputPreferredLocations:F,outputPreferredLocationsEncoded:X}=m;if(f.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${f.length}).`);kn("wasm bindInputsOutputs");for(let R=0;R<$;R++){let W=t[R];await s._OrtBindInput(D,f[W],x[R])!==0&&ke(`Can't bind input[${R}] for session=${e}.`)}for(let R=0;R<S;R++){let W=n[R];(Z=a[R])!=null&&Z[3]?s._OrtBindOutput(D,p[W],k[R],0)!==0&&ke(`Can't bind pre-allocated output[${R}] for session=${e}.`):s._OrtBindOutput(D,p[W],0,X[W])!==0&&ke(`Can't bind output[${R}] to ${F[R]} for session=${e}.`)}Sn("wasm bindInputsOutputs"),Dr.set(e,[d,f,p,m,_,!0])}(Q=s.jsepOnRunStart)==null||Q.call(s,d),(K=s.webnnOnRunStart)==null||K.call(s,d);let oe;m?oe=await s._OrtRunWithBinding(d,m.handle,S,O,y):oe=await s._OrtRun(d,z,I,$,L,S,O,y),oe!==0&&ke("failed to call OrtRun().");let G=[],ue=[];kn("wasm ProcessOutputTensor");for(let D=0;D<S;D++){let F=Number(s.getValue(O+D*o,"*"));if(F===k[D]){G.push(a[D]);continue}let X=s.stackSave(),R=s.stackAlloc(4*o),W=!1,Y,J=0;try{s._OrtGetTensorData(F,R,R+o,R+2*o,R+3*o)!==0&&ke(`Can't access output tensor data on index ${D}.`);let Ie=o===4?"i32":"i64",qe=Number(s.getValue(R,Ie));J=s.getValue(R+o,"*");let j=s.getValue(R+o*2,"*"),be=Number(s.getValue(R+o*3,Ie)),le=[];for(let ge=0;ge<be;ge++)le.push(Number(s.getValue(j+ge*o,Ie)));s._OrtFree(j)!==0&&ke("Can't free memory for tensor dims.");let fe=le.reduce((ge,Se)=>ge*Se,1);Y=wr(qe);let We=m==null?void 0:m.outputPreferredLocations[n[D]];if(Y==="string"){if(We==="gpu-buffer"||We==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ge=[];for(let Se=0;Se<fe;Se++){let ut=s.getValue(J+Se*o,"*"),dr=s.getValue(J+(Se+1)*o,"*"),cr=Se===fe-1?void 0:dr-ut;ge.push(s.UTF8ToString(ut,cr))}G.push([Y,le,ge,"cpu"])}else if(We==="gpu-buffer"&&fe>0){let ge=s.jsepGetBuffer;if(!ge)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Se=ge(J),ut=_n(qe,fe);if(ut===void 0||!Rc(Y))throw new Error(`Unsupported data type: ${Y}`);W=!0,G.push([Y,le,{gpuBuffer:Se,download:s.jsepCreateDownloader(Se,ut,Y),dispose:()=>{s._OrtReleaseTensor(F)!==0&&ke("Can't release tensor.")}},"gpu-buffer"])}else if(We==="ml-tensor"&&fe>0){let ge=s.webnnEnsureTensor,Se=s.webnnIsGraphInputOutputTypeSupported;if(!ge||!Se)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(_n(qe,fe)===void 0||!Nc(Y))throw new Error(`Unsupported data type: ${Y}`);if(!Se(e,Y,!1))throw new Error(`preferredLocation "ml-tensor" for ${Y} output is not supported by current WebNN Context.`);let ut=await ge(e,J,qe,le,!1);W=!0,G.push([Y,le,{mlTensor:ut,download:s.webnnCreateMLTensorDownloader(J,Y),dispose:()=>{s.webnnReleaseTensorId(J),s._OrtReleaseTensor(F)}},"ml-tensor"])}else if(We==="ml-tensor-cpu-output"&&fe>0){let ge=s.webnnCreateMLTensorDownloader(J,Y)(),Se=G.length;W=!0,ue.push((async()=>{let ut=[Se,await ge];return s.webnnReleaseTensorId(J),s._OrtReleaseTensor(F),ut})()),G.push([Y,le,[],"cpu"])}else{let ge=zo(Y),Se=new ge(fe);new Uint8Array(Se.buffer,Se.byteOffset,Se.byteLength).set(s.HEAPU8.subarray(J,J+Se.byteLength)),G.push([Y,le,Se,"cpu"])}}finally{s.stackRestore(X),Y==="string"&&J&&s._free(J),W||s._OrtReleaseTensor(F)}}m&&!_&&(s._OrtClearBoundOutputs(m.handle)!==0&&ke("Can't clear bound outputs."),Dr.set(e,[d,f,p,m,_,!1]));for(let[D,F]of await Promise.all(ue))G[D][2]=F;return Sn("wasm ProcessOutputTensor"),G}finally{(ce=s.webnnOnRunEnd)==null||ce.call(s,d),s.stackRestore(T),x.forEach(oe=>s._OrtReleaseTensor(oe)),k.forEach(oe=>s._OrtReleaseTensor(oe)),C.forEach(oe=>s._free(oe)),y!==0&&s._OrtReleaseRunOptions(y),g.forEach(oe=>s._free(oe))}},Jc=e=>{let t=Te(),r=Dr.get(e);if(!r)throw new Error("invalid session id");let n=r[0],a=t._OrtEndProfiling(n);a===0&&ke("Can't get an profile file name."),t._OrtFree(a)},ef=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Pr,gt,jn,Wi,Fi,_s,$u,vs,fn,pn,t0,U$,j$,W$,F$,V$,q$,H$,G$=V(()=>{Lt(),L$(),Dn(),zc(),Pr=()=>!!Ce.wasm.proxy&&typeof document<"u",jn=!1,Wi=!1,Fi=!1,vs=new Map,fn=(e,t)=>{let r=vs.get(e);r?r.push(t):vs.set(e,[t])},pn=()=>{if(jn||!Wi||Fi||!gt)throw new Error("worker not ready")},t0=e=>{switch(e.data.type){case"init-wasm":jn=!1,e.data.err?(Fi=!0,$u[1](e.data.err)):(Wi=!0,$u[0]()),_s&&(URL.revokeObjectURL(_s),_s=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=vs.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},U$=async()=>{if(!Wi){if(jn)throw new Error("multiple calls to 'initWasm()' detected.");if(Fi)throw new Error("previous call to 'initWasm()' failed.");if(jn=!0,Pr())return new Promise((e,t)=>{gt==null||gt.terminate(),Bv().then(([r,n])=>{try{gt=n,gt.onerror=i=>t(i),gt.onmessage=t0,$u=[e,t];let a={type:"init-wasm",in:Ce};!a.in.wasm.wasmPaths&&(r||gd)&&(a.in.wasm.wasmPaths={wasm:new URL("/mobile-detect/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",import.meta.url).href}),gt.postMessage(a),_s=r}catch(a){t(a)}},t)});try{await Ac(Ce.wasm),await Kc(Ce),Wi=!0}catch(e){throw Fi=!0,e}finally{jn=!1}}},j$=async e=>{if(Pr())return pn(),new Promise((t,r)=>{fn("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:Ce}};gt.postMessage(n)});await Qc(Ce,e)},W$=async e=>Pr()?(pn(),new Promise((t,r)=>{fn("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};gt.postMessage(n,[e.buffer])})):fo(e),F$=async(e,t)=>{if(Pr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return pn(),new Promise((r,n)=>{fn("create",[r,n]);let a={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),gt.postMessage(a,i)})}else return Yc(e,t)},V$=async e=>{if(Pr())return pn(),new Promise((t,r)=>{fn("release",[t,r]);let n={type:"release",in:e};gt.postMessage(n)});Zc(e)},q$=async(e,t,r,n,a,i)=>{if(Pr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return pn(),new Promise((s,o)=>{fn("run",[s,o]);let u=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:i}};gt.postMessage(d,ef(u))})}else return Xc(e,t,r,n,a,i)},H$=async e=>{if(Pr())return pn(),new Promise((t,r)=>{fn("end-profiling",[t,r]);let n={type:"end-profiling",in:e};gt.postMessage(n)});Jc(e)}}),xu,r0,K$,$S=V(()=>{Lt(),G$(),se(),Ic(),Wv(),xu=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},r0=e=>{switch(e[3]){case"cpu":return new Yt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Rc(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:a}=e[2];return Yt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:a})}case"ml-tensor":{let t=e[0];if(!Nc(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:a}=e[2];return Yt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},K$=class{async fetchModelAndCopyToWasmMemory(e){return W$(await Mc(e))}async loadModel(e,t){ur();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await F$(r,t),Jt()}async dispose(){return V$(this.sessionId)}async run(e,t,r){ur();let n=[],a=[];Object.entries(e).forEach(p=>{let m=p[0],_=p[1],w=this.inputNames.indexOf(m);if(w===-1)throw new Error(`invalid input '${m}'`);n.push(_),a.push(w)});let i=[],s=[];Object.entries(t).forEach(p=>{let m=p[0],_=p[1],w=this.outputNames.indexOf(m);if(w===-1)throw new Error(`invalid output '${m}'`);i.push(_),s.push(w)});let o=n.map((p,m)=>xu(p,()=>`input "${this.inputNames[a[m]]}"`)),u=i.map((p,m)=>p?xu(p,()=>`output "${this.outputNames[s[m]]}"`):null),d=await q$(this.sessionId,a,o,s,u,r),f={};for(let p=0;p<d.length;p++)f[this.outputNames[s[p]]]=i[p]??r0(d[p]);return Jt(),f}startProfiling(){}endProfiling(){H$(this.sessionId)}}}),Q$={};wi(Q$,{OnnxruntimeWebAssemblyBackend:()=>Ad,initializeFlags:()=>zd,wasmBackend:()=>Y$});var zd,Ad,Y$,xS=V(()=>{Lt(),G$(),$S(),zd=()=>{(typeof Ce.wasm.initTimeout!="number"||Ce.wasm.initTimeout<0)&&(Ce.wasm.initTimeout=0);let e=Ce.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ce.wasm.simd=!1),typeof Ce.wasm.proxy!="boolean"&&(Ce.wasm.proxy=!1),typeof Ce.wasm.trace!="boolean"&&(Ce.wasm.trace=!1),typeof Ce.wasm.numThreads!="number"||!Number.isInteger(Ce.wasm.numThreads)||Ce.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ce.wasm.numThreads=1;else{let t=typeof navigator>"u"?ok("node:os").cpus().length:navigator.hardwareConcurrency;Ce.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ad=class{async init(e){zd(),await U$(),await j$(e)}async createInferenceSessionHandler(e,t){let r=new K$;return await r.loadModel(e,t),r}},Y$=new Ad});Lt();Lt();Lt();var bS="1.23.2";{let e=(xS(),Sa(Q$)).wasmBackend;ei("webgpu",e,5),ei("webnn",e,5),ei("cpu",e,10),ei("wasm",e,10)}Object.defineProperty(Ce.versions,"web",{value:bS,enumerable:!0});/**
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
 */const kS={BASE_URL:"/mobile-detect/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE_PATH:"/mobile-detect/"},SS="onnxruntime/",CS="pwa_model_cache",tn="models",tf="coco_yolo_v1",ES="/",TS=["ort-wasm.wasm","ort-wasm-simd.wasm","ort-wasm-threaded.wasm","ort-wasm-simd-threaded.wasm"],IS="VITE_USE_PUBLIC_WASM";function Z$(e){if(/^[a-z][a-z0-9+.-]*:/.test(e))return e;const t="/mobile-detect/",r=typeof window>"u"?"http://localhost":window.location.origin;if(e.startsWith("/")&&t!==ES){if(e.startsWith(t))return new URL(e,r).toString();const n=e.replace(/^\/+/,"");return new URL(n,`${r}${t}`).toString()}return new URL(e,`${r}${t}`).toString()}function zS(e){return Z$(`${SS}${e}`)}function AS(){return Object.fromEntries(TS.map(e=>[e,zS(e)]))}function OS(){return kS[IS]==="true"}const RS="00 61 73 6d",NS="<!do",MS="<htm",X$=4,DS=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,11,1,9,0,65,0,253,15,26,11]);function J$(e){return e instanceof Error?e.message:typeof e=="string"?e:"unknown error"}function PS(e,t){const r=e.slice(0,t);return new TextDecoder().decode(r).toLowerCase()}function BS(e,t){const r=new Uint8Array(e.slice(0,t));return Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join(" ")}function LS(e){const t=PS(e,X$);return t.startsWith(NS)||t.startsWith(MS)}function po(e,t){if(LS(e))throw new Error(`model response from ${t} looks like html (check that the onnx file is served and the url is correct).`)}async function US(){const e=r2();return Object.keys(e).length===0?[]:await Promise.all(Object.entries(e).map(async([r,n])=>{try{const a=await fetch(n,{cache:"no-store"}),i=a.headers.get("content-type");let s=null;if(a.ok){const o=await a.arrayBuffer();s=BS(o,X$)}return{name:r,url:n,ok:a.ok,status:a.status,content_type:i,magic_hex:s,error:null}}catch(a){return{name:r,url:n,ok:!1,status:null,content_type:null,magic_hex:null,error:J$(a)}}}))}function jS(e){return e.map(t=>{const r=t.status===null?"unknown":t.status.toString(),n=t.content_type??"unknown",a=t.magic_hex??"unknown",i=t.error?`, error=${t.error}`:"";return`${t.name} (${t.url}) status=${r}, content_type=${n}, magic=${a}${i}`}).join(`
`)}function WS(){if(typeof document>"u")return!1;const e=document.createElement("canvas");return!!(e.getContext("webgl")||e.getContext("experimental-webgl"))}function FS(){if(typeof WebAssembly>"u"||typeof WebAssembly.validate!="function")return!1;try{return WebAssembly.validate(DS)}catch{return!1}}function VS(){return typeof SharedArrayBuffer<"u"&&typeof crossOriginIsolated<"u"&&crossOriginIsolated===!0}function rf(){return new Promise((e,t)=>{const r=indexedDB.open(CS,1);r.onupgradeneeded=()=>{const n=r.result;n.objectStoreNames.contains(tn)||n.createObjectStore(tn)},r.onsuccess=()=>e(r.result),r.onerror=()=>t(r.error)})}async function e2(){const e=await rf();return new Promise((t,r)=>{const i=e.transaction(tn,"readonly").objectStore(tn).get(tf);i.onsuccess=()=>t(i.result??null),i.onerror=()=>r(i.error)})}async function t2(e){const t=await rf();return new Promise((r,n)=>{const s=t.transaction(tn,"readwrite").objectStore(tn).put(e,tf);s.onsuccess=()=>r(),s.onerror=()=>n(s.error)})}async function qS(){const e=await rf();return new Promise((t,r)=>{const i=e.transaction(tn,"readwrite").objectStore(tn).delete(tf);i.onsuccess=()=>t(),i.onerror=()=>r(i.error)})}async function HS(){return await e2()!==null}async function GS(e){const t=Z$("models/coco_yolo.onnx"),r=await fetch(t);if(!r.ok)throw new Error(`failed to download model from ${t} (status ${r.status})`);const n=r.headers.get("content-length"),a=n?Number(n):null;if(!r.body){const f=await r.arrayBuffer();return po(f,t),e==null||e({loaded:f.byteLength,total:a}),f}const i=r.body.getReader();let s=0;const o=[];for(;;){const{done:f,value:p}=await i.read();if(f)break;p&&(o.push(p),s+=p.length,e==null||e({loaded:s,total:a}))}const u=new Uint8Array(s);let d=0;for(const f of o)u.set(f,d),d+=f.length;return po(u.buffer,t),u.buffer}function KS(){const e=typeof navigator>"u"?1:navigator.hardwareConcurrency,t=e?Math.min(e,4):1;Ce.wasm.numThreads=VS()?t:1,Ce.wasm.simd=FS();const r=r2();Object.keys(r).length>0&&(Ce.wasm.wasmPaths=r)}function r2(){return OS()?AS():{}}async function n2(e){KS();const t=[["wasm"]];WS()&&t.push(["webgl"]);let r=null,n=null;for(const i of t)try{return await Tc.create(e,{executionProviders:i})}catch(s){if(r=s,i.includes("wasm")&&!n){const o=await US();o.length>0&&(n=jS(o))}}const a=`failed to initialize onnxruntime session: ${J$(r)}`;throw n?new Error(`${a}. wasm diagnostics:
${n}
expected wasm magic=${RS}`):new Error(a)}async function QS(e){let r=await e2();return r?po(r,"indexeddb cache"):(r=await GS(e),await t2(r)),n2(r)}async function YS(e){return po(e,"uploaded file"),await t2(e),n2(e)}function ZS(e,t){const r=e.width,n=e.height,a=Math.min(t/r,t/n),i=Math.round(r*a),s=Math.round(n*a),o=Math.floor((t-i)/2),u=Math.floor((t-s)/2),d=document.createElement("canvas");d.width=t,d.height=t;const f=d.getContext("2d");if(!f)throw new Error("failed to create 2d context");f.fillStyle="#000000",f.fillRect(0,0,t,t),f.drawImage(e,0,0,r,n,o,u,i,s);const p=f.getImageData(0,0,t,t),{data:m}=p,_=new Float32Array(3*t*t);for(let $=0;$<t*t;$+=1){const S=$*4;_[$]=m[S]/255,_[$+t*t]=m[S+1]/255,_[$+2*t*t]=m[S+2]/255}return{tensor:new Yt("float32",_,[1,3,t,t]),letterbox_info:{scale:a,pad_x:o,pad_y:u,input_size:t,original_width:r,original_height:n}}}function XS(e,t){const r=Math.max(e.x_min,t.x_min),n=Math.max(e.y_min,t.y_min),a=Math.min(e.x_max,t.x_max),i=Math.min(e.y_max,t.y_max),s=Math.max(0,a-r),o=Math.max(0,i-n),u=s*o,d=Math.max(0,e.x_max-e.x_min)*Math.max(0,e.y_max-e.y_min),f=Math.max(0,t.x_max-t.x_min)*Math.max(0,t.y_max-t.y_min),p=d+f-u;return p<=0?0:u/p}function JS(e,t,r){const n=t.map((i,s)=>({score:i,index:s})).sort((i,s)=>s.score-i.score).map(i=>i.index),a=[];for(;n.length>0;){const i=n.shift();if(i===void 0)break;a.push(i);const s=[];for(const o of n)XS(e[i],e[o])<r&&s.push(o);n.splice(0,n.length,...s)}return a}const eC=85;function tC(e,t,r){const n=[],a=[],i=[];for(let o=0;o<e.length;o+=eC){const u=e[o],d=e[o+1],f=e[o+2],p=e[o+3],m=e[o+4];let _=0,w=-1;for(let k=0;k<r.labels.length;k+=1){const C=e[o+5+k];C>_&&(_=C,w=k)}const $=m*_;if($<r.confidence_threshold||w<0)continue;const S=u-f/2,y=d-p/2,g=u+f/2,x=d+p/2;n.push({x_min:S,y_min:y,x_max:g,y_max:x}),a.push($),i.push(w)}return JS(n,a,r.iou_threshold).map(o=>{const u=r.labels[i[o]]??"unknown";return{...rC(n[o],t),label:u,score:a[o],class_id:i[o]}})}function rC(e,t){const{scale:r,pad_x:n,pad_y:a,original_width:i,original_height:s}=t,o=Math.max(0,(e.x_min-n)/r),u=Math.max(0,(e.y_min-a)/r),d=Math.min(i,(e.x_max-n)/r),f=Math.min(s,(e.y_max-a)/r);return{x_min:o,y_min:u,x_max:d,y_max:f}}const nC=640,iC=.5,aC=.45,sC="/";function oC(){const e=window.matchMedia("(display-mode: standalone)").matches,t=window.navigator.standalone;return e||!!t}function lC(e){if(/^[a-z][a-z0-9+.-]*:/.test(e))return e;const t="/mobile-detect/",r=window.location.origin;if(e.startsWith("/")&&t!==sC){if(e.startsWith(t))return new URL(e,r).toString();const n=e.replace(/^\/+/,"");return new URL(n,`${r}${t}`).toString()}return new URL(e,`${r}${t}`).toString()}function uC(e,t,r){const n=e.getContext("2d");n&&(n.putImageData(t,0,0),n.lineWidth=2,n.font="16px sans-serif",r.forEach(a=>{const i=a.x_max-a.x_min,s=a.y_max-a.y_min,o=`${a.label} ${(a.score*100).toFixed(0)}%`;n.strokeStyle="#38bdf8",n.strokeRect(a.x_min,a.y_min,i,s);const d=n.measureText(o).width+8,f=20,p=a.x_min,m=Math.max(0,a.y_min-f);n.fillStyle="#0f172a",n.fillRect(p,m,d,f),n.fillStyle="#38bdf8",n.fillText(o,p+4,m+14)}))}function dC(){const e=Re.useRef(null),t=Re.useRef(null),r=Re.useRef(null),[n,a]=Re.useState(null),[i,s]=Re.useState(!1),[o,u]=Re.useState(null),[d,f]=Re.useState([]),[p,m]=Re.useState([]),[_,w]=Re.useState(iC),[$,S]=Re.useState(null),[y,g]=Re.useState(null),[x,k]=Re.useState(!1),[C,T]=Re.useState(!1),[I,z]=Re.useState(null),[O,L]=Re.useState(null),[Z,Q]=Re.useState(!1),[K,ce]=Re.useState(!1),[oe,G]=Re.useState(null);Re.useEffect(()=>{(async()=>{try{const fe=lC("labels/coco_labels.json"),ge=await(await fetch(fe)).json();m(ge)}catch(fe){console.error("label load failed",fe),G("labels failed to load. check deployment path.")}})()},[]),Re.useEffect(()=>{const le=fe=>{fe.preventDefault(),L(fe)};return window.addEventListener("beforeinstallprompt",le),ce(oC()),()=>{window.removeEventListener("beforeinstallprompt",le)}},[]),Re.useEffect(()=>{(async()=>{const fe=await HS();k(fe)})()},[]),Re.useEffect(()=>()=>{n&&n.getTracks().forEach(le=>le.stop())},[n]);const ue=async()=>{G(null);try{s(!1),u(null),f([]),S(null),n&&n.getTracks().forEach(fe=>fe.stop());const le=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});a(le),e.current&&(e.current.srcObject=le,await e.current.play())}catch{G("camera access failed. check permissions.")}},D=()=>{if(!e.current||!t.current)return;const le=e.current,fe=t.current,We=fe.getContext("2d");if(!We)return;fe.width=le.videoWidth,fe.height=le.videoHeight,We.drawImage(le,0,0,fe.width,fe.height);const ge=We.getImageData(0,0,fe.width,fe.height);u(ge),s(!0),f([]),S(null)},F=()=>{s(!1),u(null),f([]),S(null)},X=le=>le instanceof Error?le.message:typeof le=="string"?le:"unknown error",R=async()=>{T(!0),G(null);try{const le=await QS(fe=>{if(fe.total){const We=Math.round(fe.loaded/fe.total*100);z(We)}else z(null)});g(le),k(!0),z(100),G("model cached for offline use.")}catch(le){const fe=X(le);console.error("model download failed",le),G(`model download failed: ${fe}`)}finally{T(!1)}},W=async le=>{var We;const fe=(We=le.target.files)==null?void 0:We[0];if(le.target.value="",!!fe){T(!0),G(null),z(null);try{const ge=await fe.arrayBuffer(),Se=await YS(ge);g(Se),k(!0),G("local model loaded and cached for offline use.")}catch(ge){const Se=X(ge);console.error("local model load failed",ge),G(`local model load failed: ${Se}`)}finally{T(!1)}}},Y=()=>{var le;(le=r.current)==null||le.click()},J=async()=>{if(!t.current||!o)return;if(!y){G("model not loaded. tap download model first.");return}G(null);const le=t.current,fe=le.getContext("2d");if(!fe)return;fe.putImageData(o,0,0);const{tensor:We,letterbox_info:ge}=ZS(le,nC),Se=y.inputNames[0],ut=performance.now(),dr=await y.run({[Se]:We}),cr=performance.now(),Oa=y.outputNames[0],Ra=dr[Oa].data,Bn=tC(Ra,ge,{confidence_threshold:_,iou_threshold:aC,labels:p});f(Bn),S(Math.round(cr-ut)),uC(le,o,Bn)},Ie=async()=>{if(!O){Q(!0);return}await O.prompt(),(await O.userChoice).outcome==="accepted"&&ce(!0)},qe=async()=>{await qS(),k(!1),g(null),G("cached model cleared.")},j=!K,be=!x&&!navigator.onLine;return he.jsxs("div",{children:[he.jsxs("header",{children:[he.jsx("h1",{children:"QSC Mobile Detector"}),he.jsxs("p",{children:["This is a proof-of-concept app developed by Quantitative Science Consulting (","",he.jsx("a",{href:"https://www.qsc.earth",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline hover:text-blue-800",children:"www.QSC.earth"}),"",") and is not intended for scientific inference."]}),he.jsxs("div",{className:"badge",children:["model cached: ",x?"yes":"no"]})]}),j?he.jsxs("div",{className:"banner",children:[he.jsx("span",{children:"install for offline use"}),he.jsx("button",{type:"button",onClick:Ie,children:"install"})]}):null,Z?he.jsx("div",{className:"modal_backdrop",onClick:()=>Q(!1),children:he.jsxs("div",{className:"modal",onClick:le=>le.stopPropagation(),children:[he.jsx("h2",{children:"install instructions"}),he.jsx("p",{children:"ios: tap share, then add to home screen."}),he.jsx("p",{children:"android: use the install prompt or add to home screen."}),he.jsx("button",{type:"button",className:"secondary",onClick:()=>Q(!1),children:"close"})]})}):null,he.jsxs("main",{children:[be?he.jsx("p",{className:"notice",children:"model not available offline yet. connect once and tap download model."}):null,oe?he.jsx("p",{className:"notice",children:oe}):null,he.jsxs("div",{className:"status_row",children:[he.jsxs("span",{children:["detections: ",d.length]}),he.jsxs("span",{children:["inference: ",$?`${$} ms`:"--"]})]}),he.jsxs("div",{className:"slider_row",children:[he.jsx("label",{htmlFor:"confidence",children:"confidence"}),he.jsx("input",{id:"confidence",type:"range",min:"0.1",max:"0.9",step:"0.05",value:_,onChange:le=>w(Number(le.target.value))}),he.jsx("span",{children:_.toFixed(2)})]}),he.jsx("div",{className:"video_container",style:{display:i?"none":"block"},children:he.jsx("video",{ref:e,playsInline:!0,muted:!0})}),he.jsx("div",{className:"canvas_container",style:{display:i?"block":"none"},children:he.jsx("canvas",{ref:t})}),he.jsxs("div",{className:"controls",children:[he.jsx("button",{type:"button",onClick:ue,children:"start camera"}),he.jsx("button",{type:"button",onClick:D,disabled:!n,children:"capture"}),he.jsx("button",{type:"button",onClick:J,disabled:!i,children:"detect"}),he.jsx("button",{type:"button",className:"secondary",onClick:F,children:"retake"}),he.jsx("button",{type:"button",onClick:R,disabled:C,children:"download model"}),he.jsx("button",{type:"button",onClick:Y,disabled:C,children:"load local model"}),he.jsx("button",{type:"button",className:"secondary",onClick:qe,children:"clear cached model"})]}),he.jsx("input",{ref:r,type:"file",accept:".onnx",onChange:W,style:{display:"none"}}),C?he.jsxs("div",{children:[he.jsx("p",{children:"downloading model..."}),he.jsx("div",{className:"progress",children:he.jsx("div",{style:{width:I?`${I}%`:"20%"}})})]}):null]})]})}nk({immediate:!0});bu.createRoot(document.getElementById("root")).render(he.jsx(Wx.StrictMode,{children:he.jsx(dC,{})}));
