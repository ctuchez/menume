/**  * bitpay-directory - v0.1.0 - 2013-11-15  * http://BitPay.com/directory
*  * Copyright (c) 2013 Satoshi Nakamoto  */ 
!function(a,b){function c(a){var
b=a.length,c=fb.type(a);return fb.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"=
==c||"function"!==c&&(0===b||"number"==typeof b&&b>0&&b-1 in a)}function
d(a){var b=ob[a]={};return
fb.each(a.match(hb)||[],function(a,c){b[c]=!0}),b}function e(){Object.definePr
operty(this.cache={},0,{get:function(){return{}}}),this.expando=fb.expando+Mat
h.random()}function f(a,c,d){var e;if(d===b&&1===a.nodeType)if(e="data-"+c.rep
lace(sb,"-$1").toLowerCase(),d=a.getAttribute(e),"string"==typeof d){try{d="tr
ue"===d?!0:"false"===d?!1:"null"===d?null:+d+""===d?+d:rb.test(d)?JSON.parse(d
):d}catch(f){}pb.set(a,c,d)}else d=b;return d}function g(){return!0}function
h(){return!1}function i(){try{return T.activeElement}catch(a){}}function
j(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function
k(a,b,c){if(fb.isFunction(b))return
fb.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return
fb.grep(a,function(a){return a===b!==c});if("string"==typeof
b){if(Cb.test(b))return fb.filter(b,a,c);b=fb.filter(b,a)}return
fb.grep(a,function(a){return bb.call(b,a)>=0!==c})}function l(a,b){return fb.n
odeName(a,"table")&&fb.nodeName(1===b.nodeType?b:b.firstChild,"tr")?a.getEleme
ntsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")
):a}function m(a){return
a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function n(a){var
b=Nb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function
o(a,b){for(var c=a.length,d=0;c>d;d++)qb.set(a[d],"globalEval",!b||qb.get(b[d]
,"globalEval"))}function p(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(qb.h
asData(a)&&(f=qb.access(a),g=qb.set(b,f),j=f.events)){delete
g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)fb.event.add(b,e
,j[e][c])}pb.hasData(a)&&(h=pb.access(a),i=fb.extend({},h),pb.set(b,i))}}funct
ion q(a,c){var d=a.getElementsByTagName?a.getElementsByTagName(c||"*"):a.query
SelectorAll?a.querySelectorAll(c||"*"):[];return
c===b||c&&fb.nodeName(a,c)?fb.merge([a],d):d}function r(a,b){var c=b.nodeName.
toLowerCase();"input"===c&&Kb.test(a.type)?b.checked=a.checked:("input"===c||"
textarea"===c)&&(b.defaultValue=a.defaultValue)}function s(a,b){if(b in
a)return b;for(var
c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=_b.length;e--;)if(b=_b[e]+c,b in
a)return b;return d}function t(a,b){return
a=b||a,"none"===fb.css(a,"display")||!fb.contains(a.ownerDocument,a)}function
u(b){return a.getComputedStyle(b,null)}function v(a,b){for(var c,d,e,f=[],g=0,
h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=qb.get(d,"olddisplay"),c=d.style.disp
lay,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&t(d)&&(f[g
]=qb.access(d,"olddisplay",z(d.nodeName)))):f[g]||(e=t(d),(c&&"none"!==c||!e)&
&qb.set(d,"olddisplay",e?c:fb.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.sty
le&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g
]||"":"none"));return a}function w(a,b,c){var d=Ub.exec(b);return
d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function x(a,b,c,d,e){for(var f=c===(
d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=fb.css(
a,c+$b[f],!0,e)),d?("content"===c&&(g-=fb.css(a,"padding"+$b[f],!0,e)),"margin
"!==c&&(g-=fb.css(a,"border"+$b[f]+"Width",!0,e))):(g+=fb.css(a,"padding"+$b[f
],!0,e),"padding"!==c&&(g+=fb.css(a,"border"+$b[f]+"Width",!0,e)));return
g}function y(a,b,c){var
d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=u(a),g=fb.support.boxSizing
&&"border-box"===fb.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Qb(a,b,f),(
0>e||null==e)&&(e=a.style[b]),Vb.test(e))return e;d=g&&(fb.support.boxSizingRe
liable||e===a.style[b]),e=parseFloat(e)||0}return
e+x(a,b,c||(g?"border":"content"),d,f)+"px"}function z(a){var
b=T,c=Xb[a];return c||(c=A(a,b),"none"!==c&&c||(Rb=(Rb||fb("<iframe
frameborder='0' width='0' height='0'/>").css("cssText","display:block !importa
nt")).appendTo(b.documentElement),b=(Rb[0].contentWindow||Rb[0].contentDocumen
t).document,b.write("<!doctype
html><html><body>"),b.close(),c=A(a,b),Rb.detach()),Xb[a]=c),c}function
A(a,b){var
c=fb(b.createElement(a)).appendTo(b.body),d=fb.css(c[0],"display");return
c.remove(),d}function B(a,b,c,d){var e;if(fb.isArray(b))fb.each(b,function(b,e
){c||bc.test(a)?d(a,e):B(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else
if(c||"object"!==fb.type(b))d(a,b);else for(e in
b)B(a+"["+e+"]",b[e],c,d)}function C(a){return function(b,c){"string"!=typeof
b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(hb)||[];if(fb.isFunction(c))f
or(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=
a[d]||[]).push(c)}}function D(a,c,d,e){function f(i){var j;return
g[i]=!0,fb.each(a[i]||[],function(a,i){var k=i(c,d,e);return"string"!=typeof
k||h||g[k]?h?!(j=k):b:(c.dataTypes.unshift(k),f(k),!1)}),j}var
g={},h=a===sc;return f(c.dataTypes[0])||!g["*"]&&f("*")}function E(a,c){var
d,e,f=fb.ajaxSettings.flatOptions||{};for(d in
c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);return
e&&fb.extend(!0,a,e),a}function F(a,c,d){for(var e,f,g,h,i=a.contents,j=a.data
Types;"*"===j[0];)j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader
("Content-Type"));if(e)for(f in
i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in
d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}return
g?(g!==j[0]&&j.unshift(g),d[g]):b}function G(a,b,c,d){var
e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLower
Case()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.respon
seFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.sh
ift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["*
"+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])
){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["t
hrows"])b=g(b);else
try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from
"+i+" to "+f}}}return{state:"success",data:b}}function H(){return
setTimeout(function(){Bc=b}),Bc=fb.now()}function I(a,b,c){for(var d,e=(Hc[b]|
|[]).concat(Hc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return
d}function J(a,b,c){var
d,e,f=0,g=Gc.length,h=fb.Deferred().always(function(){delete
i.elem}),i=function(){if(e)return!1;for(var b=Bc||H(),c=Math.max(0,j.startTime
+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[
g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j
=h.promise({elem:a,props:fb.extend({},b),opts:fb.extend(!0,{specialEasing:{}},
c),originalProperties:b,originalOptions:c,startTime:Bc||H(),duration:c.duratio
n,tweens:[],createTween:function(b,c){var
d=fb.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return
j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return
this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rej
ectWith(a,[j,b]),this}}),k=j.props;for(K(k,j.opts.specialEasing);g>f;f++)if(d=
Gc[f].call(j,a,k,j.opts))return d;return fb.map(k,I,j),fb.isFunction(j.opts.st
art)&&j.opts.start.call(a,j),fb.fx.timer(fb.extend(i,{elem:a,anim:j,queue:j.op
ts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail
(j.opts.fail).always(j.opts.always)}function K(a,b){var c,d,e,f,g;for(c in a)i
f(d=fb.camelCase(c),e=b[d],f=a[c],fb.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(
a[d]=f,delete a[c]),g=fb.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete
a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function L(a,c,d){var e
,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&t(a),o=qb.get(a,"fxshow");d.que
ue||(i=fb._queueHooks(a,"fx"),null==i.unqueued&&(i.unqueued=0,j=i.empty.fire,i
.empty.fire=function(){i.unqueued||j()}),i.unqueued++,k.always(function(){k.al
ways(function(){i.unqueued--,fb.queue(a,"fx").length||i.empty.fire()})})),1===
a.nodeType&&("height"in c||"width"in c)&&(d.overflow=[m.overflow,m.overflowX,m
.overflowY],"inline"===fb.css(a,"display")&&"none"===fb.css(a,"float")&&(m.dis
play="inline-block")),d.overflow&&(m.overflow="hidden",k.always(function(){m.o
verflow=d.overflow[0],m.overflowX=d.overflow[1],m.overflowY=d.overflow[2]}));f
or(e in c)if(f=c[e],Dc.exec(f)){if(delete c[e],g=g||"toggle"===f,f===(n?"hide"
:"show")){if("show"!==f||!o||o[e]===b)continue;n=!0}l[e]=o&&o[e]||fb.style(a,e
)}if(!fb.isEmptyObject(l)){o?"hidden"in o&&(n=o.hidden):o=qb.access(a,"fxshow"
,{}),g&&(o.hidden=!n),n?fb(a).show():k.done(function(){fb(a).hide()}),k.done(f
unction(){var b;qb.remove(a,"fxshow");for(b in l)fb.style(a,b,l[b])});for(e in
l)h=I(n?o[e]:0,e,k),e in o||(o[e]=h.start,n&&(h.end=h.start,h.start="width"===
e||"height"===e?1:0))}}function M(a,b,c,d,e){return new
M.prototype.init(a,b,c,d,e)}function N(a,b){var c,d={height:a},e=0;for(b=b?1:0
;4>e;e+=2-b)c=$b[e],d["margin"+c]=d["padding"+c]=a;return
b&&(d.opacity=d.width=a),d}function O(a){return
fb.isWindow(a)?a:9===a.nodeType&&a.defaultView}var P,Q,R=typeof b,S=a.location
,T=a.document,U=T.documentElement,V=a.jQuery,W=a.$,X={},Y=[],Z="2.0.3",$=Y.con
cat,_=Y.push,ab=Y.slice,bb=Y.indexOf,cb=X.toString,db=X.hasOwnProperty,eb=Z.tr
im,fb=function(a,b){return new fb.fn.init(a,b,P)},gb=/[+-]?(?:\d*\.|)\d+(?:[eE
][+-]?\d+|)/.source,hb=/\S+/g,ib=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,jb=/^<(
\w+)\s*\/?>(?:<\/\1>|)$/,kb=/^-ms-/,lb=/-([\da-z])/gi,mb=function(a,b){return 
b.toUpperCase()},nb=function(){T.removeEventListener("DOMContentLoaded",nb,!1)
,a.removeEventListener("load",nb,!1),fb.ready()};fb.fn=fb.prototype={jquery:Z,
constructor:fb,init:function(a,c,d){var e,f;if(!a)return
this;if("string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)
&&a.length>=3?[null,a,null]:ib.exec(a),!e||!e[1]&&c)return!c||c.jquery?(c||d).
find(a):this.constructor(c).find(a);if(e[1]){if(c=c instanceof fb?c[0]:c,fb.me
rge(this,fb.parseHTML(e[1],c&&c.nodeType?c.ownerDocument||c:T,!0)),jb.test(e[1
])&&fb.isPlainObject(c))for(e in
c)fb.isFunction(this[e])?this[e](c[e]):this.attr(e,c[e]);return this}return f=
T.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context
=T,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=
1,this):fb.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector
,this.context=a.context),fb.makeArray(a,this))},selector:"",length:0,toArray:f
unction(){return ab.call(this)},get:function(a){return null==a?this.toArray():
0>a?this[this.length+a]:this[a]},pushStack:function(a){var
b=fb.merge(this.constructor(),a);return
b.prevObject=this,b.context=this.context,b},each:function(a,b){return
fb.each(this,a,b)},ready:function(a){return
fb.ready.promise().done(a),this},slice:function(){return
this.pushStack(ab.apply(this,arguments))},first:function(){return
this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var
b=this.length,c=+a+(0>a?b:0);return
this.pushStack(c>=0&&b>c?[this[c]]:[])},map:function(a){return
this.pushStack(fb.map(this,function(b,c){return
a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null
)},push:_,sort:[].sort,splice:[].splice},fb.fn.init.prototype=fb.fn,fb.extend=
fb.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.len
gth,k=!1;for("boolean"==typeof
h&&(k=h,h=arguments[1]||{},i=2),"object"==typeof
h||fb.isFunction(h)||(h={}),j===i&&(h=this,--
i);j>i;i++)if(null!=(a=arguments[i]))for(c in a)d=h[c],e=a[c],h!==e&&(k&&e&&(f
b.isPlainObject(e)||(f=fb.isArray(e)))?(f?(f=!1,g=d&&fb.isArray(d)?d:[]):g=d&&
fb.isPlainObject(d)?d:{},h[c]=fb.extend(k,g,e)):e!==b&&(h[c]=e));return h},fb.
extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),noConflict:functi
on(b){return a.$===fb&&(a.$=W),b&&a.jQuery===fb&&(a.jQuery=V),fb},isReady:!1,r
eadyWait:1,holdReady:function(a){a?fb.readyWait++:fb.ready(!0)},ready:function
(a){(a===!0?--fb.readyWait:fb.isReady)||(fb.isReady=!0,a!==!0&&--fb.readyWait>
0||(Q.resolveWith(T,[fb]),fb.fn.trigger&&fb(T).trigger("ready").off("ready")))
},isFunction:function(a){return"function"===fb.type(a)},isArray:Array.isArray,
isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){retur
n!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return
null==a?a+"":"object"==typeof a||"function"==typeof
a?X[cb.call(a)]||"object":typeof a},isPlainObject:function(a){if("object"!==fb
.type(a)||a.nodeType||fb.isWindow(a))return!1;try{if(a.constructor&&!db.call(a
.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},i
sEmptyObject:function(a){var b;for(b in
a)return!1;return!0},error:function(a){throw
Error(a)},parseHTML:function(a,b,c){if(!a||"string"!=typeof a)return
null;"boolean"==typeof b&&(c=b,b=!1),b=b||T;var d=jb.exec(a),e=!c&&[];return d
?[b.createElement(d[1])]:(d=fb.buildFragment([a],b,e),e&&fb(e).remove(),fb.mer
ge([],d.childNodes))},parseJSON:JSON.parse,parseXML:function(a){var
c,d;if(!a||"string"!=typeof a)return null;try{d=new DOMParser,c=d.parseFromStr
ing(a,"text/xml")}catch(e){c=b}return(!c||c.getElementsByTagName("parsererror"
).length)&&fb.error("Invalid XML:
"+a),c},noop:function(){},globalEval:function(a){var
b,c=eval;a=fb.trim(a),a&&(1===a.indexOf("use strict")?(b=T.createElement("scri
pt"),b.text=a,T.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCas
e:function(a){return
a.replace(kb,"ms-").replace(lb,mb)},nodeName:function(a,b){return a.nodeName&&
a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a
.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f
in a)if(e=b.apply(a[f],d),e===!1)break}else
if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in
a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return
null==a?"":eb.call(a)},makeArray:function(a,b){var d=b||[];return
null!=a&&(c(Object(a))?fb.merge(d,"string"==typeof
a?[a]:a):_.call(d,a)),d},inArray:function(a,b,c){return
null==b?-1:bb.call(b,a,c)},merge:function(a,c){var
d=c.length,e=a.length,f=0;if("number"==typeof d)for(;d>f;f++)a[e++]=c[f];else
for(;c[f]!==b;)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e
=[],f=0,g=a.length;for(c=!!c;g>f;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return
e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(
a[f],f,d),null!=e&&(i[i.length]=e);else for(f in
a)e=b(a[f],f,d),null!=e&&(i[i.length]=e);return
$.apply([],i)},guid:1,proxy:function(a,c){var d,e,f;return"string"==typeof c&&
(d=a[c],c=a,a=d),fb.isFunction(a)?(e=ab.call(arguments,2),f=function(){return 
a.apply(c||this,e.concat(ab.call(arguments)))},f.guid=a.guid=a.guid||fb.guid++
,f):b},access:function(a,c,d,e,f,g,h){var
i=0,j=a.length,k=null==d;if("object"===fb.type(d)){f=!0;for(i in
d)fb.access(a,c,i,d[i],!0,g,h)}else if(e!==b&&(f=!0,fb.isFunction(e)||(h=!0),k
&&(h?(c.call(a,e),c=null):(k=c,c=function(a,b,c){return k.call(fb(a),c)})),c))
for(;j>i;i++)c(a[i],d,h?e:e.call(a[i],i,c(a[i],d)));return
f?a:k?c.call(a):j?c(a[0],d):g},now:Date.now,swap:function(a,b,c,d){var
e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f
in b)a.style[f]=g[f];return e}}),fb.ready.promise=function(b){return Q||(Q=fb.
Deferred(),"complete"===T.readyState?setTimeout(fb.ready):(T.addEventListener(
"DOMContentLoaded",nb,!1),a.addEventListener("load",nb,!1))),Q.promise(b)},fb.
each("Boolean Number String Function Array Date RegExp Object Error".split("
"),function(a,b){X["[object
"+b+"]"]=b.toLowerCase()}),P=fb(T),function(a,b){function c(a,b,c,d){var e,f,g
,h,i,j,k,l,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"strin
g"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=tb.
exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return
c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.g
etElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return ab.
apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&x.getElementsByClassName&&b.
getElementsByClassName)return ab.apply(c,b.getElementsByClassName(g)),c}if(x.q
sa&&(!J||!J.test(a))){if(l=k=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toL
owerCase()){for(j=m(a),(k=b.getAttribute("id"))?l=k.replace(wb,"\\$&"):b.setAt
tribute("id",l),l="[id='"+l+"'] ",i=j.length;i--;)j[i]=l+n(j[i]);o=nb.test(a)&
&b.parentNode||b,p=j.join(",")}if(p)try{return ab.apply(c,o.querySelectorAll(p
)),c}catch(q){}finally{k||b.removeAttribute("id")}}}return
v(a.replace(kb,"$1"),b,c,d)}function d(){function a(c,d){return b.push(c+="
")>z.cacheLength&&delete a[b.shift()],a[c]=d}var b=[];return a}function
e(a){return a[N]=!0,a}function f(a){var b=G.createElement("div");try{return!!a
(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function g(a,b){for(var
c=a.split("|"),d=a.length;d--;)z.attrHandle[c[d]]=b}function h(a,b){var c=b&&a
,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||X)-(~a.sourceIndex||X);
if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return
a?1:-1}function i(a){return function(b){var
c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function j(a){return
function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&
b.type===a}}function k(a){return e(function(b){return
b=+b,e(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(
c[e]=!(d[e]=c[e]))})})}function l(){}function m(a,b){var d,e,f,g,h,i,j,k=S[a+"
"];if(k)return b?0:k.slice(0);for(h=a,i=[],j=z.preFilter;h;){(!d||(e=lb.exec(h
)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=mb.exec(h))&&(d=e.s
hift(),f.push({value:d,type:e[0].replace(kb," ")}),h=h.slice(d.length));for(g
in z.filter)!(e=rb[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value
:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return
b?h.length:h?c.error(a):S(a,i).slice(0)}function n(a){for(var
b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function o(a,b,c){var
d=b.dir,e=c&&"parentNode"===d,f=Q++;return
b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return
a(b,c,f)}:function(b,c,g){var h,i,j,k=P+"
"+f;if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b
[d];)if(1===b.nodeType||e)if(j=b[N]||(b[N]={}),(i=j[d])&&i[0]===k){if((h=i[1])
===!0||h===y)return h===!0}else
if(i=j[d]=[k],i[1]=a(b,c,g)||y,i[1]===!0)return!0}}function p(a){return
a.length>1?function(b,c,d){for(var
e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function
q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(
f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,d,f,g){return
d&&!d[N]&&(d=r(d)),f&&!f[N]&&(f=r(f,g)),e(function(e,g,h,i){var j,k,l,m=[],n=[
],o=g.length,p=e||u(b||"*",h.nodeType?[h]:h,[]),r=!a||!e&&b?p:q(p,m,a,h,i),s=c
?f||(e?a:o||d)?[]:g:r;if(c&&c(r,s,h,i),d)for(j=q(s,n),d(j,[],h,i),k=j.length;k
--;)(l=j[k])&&(s[n[k]]=!(r[n[k]]=l));if(e){if(f||a){if(f){for(j=[],k=s.length;
k--;)(l=s[k])&&j.push(r[k]=l);f(null,s=[],j,i)}for(k=s.length;k--;)(l=s[k])&&(
j=f?cb.call(e,l):m[k])>-1&&(e[j]=!(g[j]=l))}}else
s=q(s===g?s.splice(o,s.length):s),f?f(null,g,s,i):ab.apply(g,s)})}function
s(a){for(var b,c,d,e=a.length,f=z.relative[a[0].type],g=f||z.relative["
"],h=f?1:0,i=o(function(a){return a===b},g,!0),j=o(function(a){return cb.call(
b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==D)||((b=c).nodeType?i(a,c,
d):j(a,c,d))}];e>h;h++)if(c=z.relative[a[h].type])k=[o(p(k),c)];else{if(c=z.fi
lter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!z.relative[a[d]
.type];d++);return r(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2
].type?"*":""})).replace(kb,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),
e>d&&n(a))}k.push(c)}return p(k)}function t(a,b){var
d=0,f=b.length>0,g=a.length>0,h=function(e,h,i,j,k){var l,m,n,o=[],p=0,r="0",s
=e&&[],t=null!=k,u=D,v=e||g&&z.find.TAG("*",k&&h.parentNode||h),w=P+=null==u?1
:Math.random()||.1;for(t&&(D=h!==G&&h,y=d);null!=(l=v[r]);r++){if(g&&l){for(m=
0;n=a[m++];)if(n(l,h,i)){j.push(l);break}t&&(P=w,y=++d)}f&&((l=!n&&l)&&p--,e&&
s.push(l))}if(p+=r,f&&r!==p){for(m=0;n=b[m++];)n(s,o,h,i);if(e){if(p>0)for(;r-
-;)s[r]||o[r]||(o[r]=$.call(j));o=q(o)}ab.apply(j,o),t&&!e&&o.length>0&&p+b.le
ngth>1&&c.uniqueSort(j)}return t&&(P=w,D=u),s};return f?e(h):h}function
u(a,b,d){for(var e=0,f=b.length;f>e;e++)c(a,b[e],d);return d}function
v(a,b,c,d){var e,f,g,h,i,j=m(a);if(!d&&1===j.length){if(f=j[0]=j[0].slice(0),f
.length>2&&"ID"===(g=f[0]).type&&x.getById&&9===b.nodeType&&I&&z.relative[f[1]
.type]){if(b=(z.find.ID(g.matches[0].replace(xb,yb),b)||[])[0],!b)return c;a=a
.slice(f.shift().value.length)}for(e=rb.needsContext.test(a)?0:f.length;e--&&(
g=f[e],!z.relative[h=g.type]);)if((i=z.find[h])&&(d=i(g.matches[0].replace(xb,
yb),nb.test(f[0].type)&&b.parentNode||b))){if(f.splice(e,1),a=d.length&&n(f),!
a)return ab.apply(c,d),c;break}}return C(a,j)(d,b,!I,c,nb.test(a)),c}var
w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new
Date,O=a.document,P=0,Q=0,R=d(),S=d(),T=d(),U=!1,V=function(a,b){return
a===b?(U=!0,0):0},W=typeof b,X=1<<31,Y={}.hasOwnProperty,Z=[],$=Z.pop,_=Z.push
,ab=Z.push,bb=Z.slice,cb=Z.indexOf||function(a){for(var
b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},db="checked|select
ed|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple
|open|readonly|required|scoped",eb="[\\x20\\t\\r\\n\\f]",gb="(?:\\\\.|[\\w-]|[
^\\x00-\\xa0])+",hb=gb.replace("w","w#"),ib="\\["+eb+"*("+gb+")"+eb+"*(?:([*^$
|!~]?=)"+eb+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+hb+")|)|)"+eb+"*\\]",jb=":
("+gb+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ib.re
place(3,8)+")*)|.*)\\)|)",kb=RegExp("^"+eb+"+|((?:^|[^\\\\])(?:\\\\.)*)"+eb+"+
$","g"),lb=RegExp("^"+eb+"*,"+eb+"*"),mb=RegExp("^"+eb+"*([>+~]|"+eb+")"+eb+"*
"),nb=RegExp(eb+"*[+~]"),ob=RegExp("="+eb+"*([^\\]'\"]*)"+eb+"*\\]","g"),pb=Re
gExp(jb),qb=RegExp("^"+hb+"$"),rb={ID:RegExp("^#("+gb+")"),CLASS:RegExp("^\\.(
"+gb+")"),TAG:RegExp("^("+gb.replace("w","w*")+")"),ATTR:RegExp("^"+ib),PSEUDO
:RegExp("^"+jb),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)
(?:\\("+eb+"*(even|odd|(([+-]|)(\\d*)n|)"+eb+"*(?:([+-]|)"+eb+"*(\\d+)|))"+eb+
"*\\)|)","i"),bool:RegExp("^(?:"+db+")$","i"),needsContext:RegExp("^"+eb+"*[>+
~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+eb+"*((?:-\\d)?\\d*)"+eb+"*\\)|)
(?=[^-]|$)","i")},sb=/^[^{]+\{\s*\[native \w/,tb=/^(?:#([\w-]+)|(\w+)|\.([\w-]
+))$/,ub=/^(?:input|select|textarea|button)$/i,vb=/^h\d$/i,wb=/'|\\/g,xb=RegEx
p("\\\\([\\da-f]{1,6}"+eb+"?|("+eb+")|.)","ig"),yb=function(a,b,c){var
d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromC
harCode(55296|d>>10,56320|1023&d)};try{ab.apply(Z=bb.call(O.childNodes),O.chil
dNodes),Z[O.childNodes.length].nodeType}catch(zb){ab={apply:Z.length?function(
a,b){_.apply(a,bb.call(b))}:function(a,b){for(var
c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}B=c.isXML=function(a){var
b=a&&(a.ownerDocument||a).documentElement;return
b?"HTML"!==b.nodeName:!1},x=c.support={},F=c.setDocument=function(a){var
c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.docum
entElement?(G=c,H=c.documentElement,I=!B(c),d&&d.attachEvent&&d!==d.top&&d.att
achEvent("onbeforeunload",function(){F()}),x.attributes=f(function(a){return a
.className="i",!a.getAttribute("className")}),x.getElementsByTagName=f(functio
n(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").le
ngth}),x.getElementsByClassName=f(function(a){return a.innerHTML="<div
class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getE
lementsByClassName("i").length}),x.getById=f(function(a){return H.appendChild(
a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),x.getById?(z.fi
nd.ID=function(a,b){if(typeof b.getElementById!==W&&I){var
c=b.getElementById(a);return
c&&c.parentNode?[c]:[]}},z.filter.ID=function(a){var b=a.replace(xb,yb);return
function(a){return a.getAttribute("id")===b}}):(delete
z.find.ID,z.filter.ID=function(a){var b=a.replace(xb,yb);return
function(a){var c=typeof
a.getAttributeNode!==W&&a.getAttributeNode("id");return
c&&c.value===b}}),z.find.TAG=x.getElementsByTagName?function(a,c){return
typeof
c.getElementsByTagName!==W?c.getElementsByTagName(a):b}:function(a,b){var c,d=
[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&
d.push(c);return d}return
f},z.find.CLASS=x.getElementsByClassName&&function(a,c){return typeof c.getEle
mentsByClassName!==W&&I?c.getElementsByClassName(a):b},K=[],J=[],(x.qsa=sb.tes
t(c.querySelectorAll))&&(f(function(a){a.innerHTML="<select><option selected='
'></option></select>",a.querySelectorAll("[selected]").length||J.push("\\["+eb
+"*(?:value|"+db+")"),a.querySelectorAll(":checked").length||J.push(":checked"
)}),f(function(a){var b=c.createElement("input");b.setAttribute("type","hidden
"),a.appendChild(b).setAttribute("t",""),a.querySelectorAll("[t^='']").length&
&J.push("[*^$]="+eb+"*(?:''|\"\")"),a.querySelectorAll(":enabled").length||J.p
ush(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(x.ma
tchesSelector=sb.test(L=H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatc
hesSelector||H.msMatchesSelector))&&f(function(a){x.disconnectedMatch=L.call(a
,"div"),L.call(a,"[s!='']:x"),K.push("!=",jb)}),J=J.length&&RegExp(J.join("|")
),K=K.length&&RegExp(K.join("|")),M=sb.test(H.contains)||H.compareDocumentPosi
tion?function(a,b){var
c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!=
=d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compar
eDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)retur
n!0;return!1},V=H.compareDocumentPosition?function(a,b){if(a===b)return
U=!0,0;var d=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDo
cumentPosition(b);return d?1&d||!x.sortDetached&&b.compareDocumentPosition(a)=
==d?a===c||M(O,a)?-1:b===c||M(O,b)?1:E?cb.call(E,a)-cb.call(E,b):0:4&d?-1:1:a.
compareDocumentPosition?-1:1}:function(a,b){var
d,e=0,f=a.parentNode,g=b.parentNode,i=[a],j=[b];if(a===b)return
U=!0,0;if(!f||!g)return
a===c?-1:b===c?1:f?-1:g?1:E?cb.call(E,a)-cb.call(E,b):0;if(f===g)return h(a,b)
;for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for
(;i[e]===j[e];)e++;return
e?h(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},c.matches=function(a,b){return 
c(a,null,null,b)},c.matchesSelector=function(a,b){if((a.ownerDocument||a)!==G&
&F(a),b=b.replace(ob,"='$1']"),!(!x.matchesSelector||!I||K&&K.test(b)||J&&J.te
st(b)))try{var d=L.call(a,b);if(d||x.disconnectedMatch||a.document&&11!==a.doc
ument.nodeType)return d}catch(e){}return c(b,G,null,[a]).length>0},c.contains=
function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},c.attr=function(a,c
){(a.ownerDocument||a)!==G&&F(a);var d=z.attrHandle[c.toLowerCase()],e=d&&Y.ca
ll(z.attrHandle,c.toLowerCase())?d(a,c,!I):b;return e===b?x.attributes||!I?a.g
etAttribute(c):(e=a.getAttributeNode(c))&&e.specified?e.value:null:e},c.error=
function(a){throw Error("Syntax error, unrecognized expression:
"+a)},c.uniqueSort=function(a){var b,c=[],d=0,e=0;if(U=!x.detectDuplicates,E=!
x.sortStable&&a.slice(0),a.sort(V),U){for(;b=a[e++];)b===a[e]&&(d=c.push(e));f
or(;d--;)a.splice(c[d],1)}return a},A=c.getText=function(a){var
b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof
a.textContent)return
a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=A(a)}else
if(3===e||4===e)return a.nodeValue}else for(;b=a[d];d++)c+=A(b);return c},z=c.
selectors={cacheLength:50,createPseudo:e,match:rb,attrHandle:{},find:{},relati
ve:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousS
ibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){ret
urn a[1]=a[1].replace(xb,yb),a[3]=(a[4]||a[5]||"").replace(xb,yb),"~="===a[2]&
&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerC
ase(),"nth"===a[1].slice(0,3)?(a[3]||c.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):
2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&c.erro
r(a[0]),a},PSEUDO:function(a){var c,d=!a[5]&&a[2];return rb.CHILD.test(a[0])?n
ull:(a[3]&&a[4]!==b?a[2]=a[4]:d&&pb.test(d)&&(c=m(d,!0))&&(c=d.indexOf(")",d.l
ength-c)-d.length)&&(a[0]=a[0].slice(0,c),a[2]=d.slice(0,c)),a.slice(0,3))}},f
ilter:{TAG:function(a){var b=a.replace(xb,yb).toLowerCase();return"*"===a?func
tion(){return!0}:function(a){return
a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+"
"];return b||(b=RegExp("(^|"+eb+")"+a+"("+eb+"|$)"))&&R(a,function(a){return
b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==W&&a
.getAttribute("class")||"")})},ATTR:function(a,b,d){return function(e){var
f=c.attr(e,a);return null==f?"!="===b:b?(f+="","="===b?f===d:"!="===b?f!==d:"^
="===b?d&&0===f.indexOf(d):"*="===b?d&&f.indexOf(d)>-1:"$="===b?d&&f.slice(-d.
length)===d:"~="===b?(" "+f+" ").indexOf(d)>-1:"|="===b?f===d||f.slice(0,d.len
gth+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var
f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return
1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o
,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowe
rCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerC
ase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}i
f(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]
===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.po
p();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else
if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=
n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((
l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return
m-=e,m===d||0===m%d&&m/d>=0}}},PSEUDO:function(a,b){var
d,f=z.pseudos[a]||z.setFilters[a.toLowerCase()]||c.error("unsupported pseudo:
"+a);return f[N]?f(b):f.length>1?(d=[a,a,"",b],z.setFilters.hasOwnProperty(a.t
oLowerCase())?e(function(a,c){for(var d,e=f(a,b),g=e.length;g--;)d=cb.call(a,e
[g]),a[d]=!(c[d]=e[g])}):function(a){return
f(a,0,d)}):f}},pseudos:{not:e(function(a){var
b=[],c=[],d=C(a.replace(kb,"$1"));return d[N]?e(function(a,b,c,e){for(var f,g=
d(a,null,e,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){re
turn b[0]=a,d(b,null,f,c),!c.pop()}}),has:e(function(a){return
function(b){return c(a,b).length>0}}),contains:e(function(a){return function(b
){return(b.textContent||b.innerText||A(b)).indexOf(a)>-1}}),lang:e(function(a)
{return qb.test(a||"")||c.error("unsupported lang:
"+a),a=a.replace(xb,yb).toLowerCase(),function(b){var c;do
if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.to
LowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType
);return!1}}),target:function(b){var c=a.location&&a.location.hash;return
c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return 
a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabInd
ex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return
a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"inp
ut"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return 
a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){fo
r(a=a.firstChild;a;a=a.nextSibling)if(a.nodeName>"@"||3===a.nodeType||4===a.no
deType)return!1;return!0},parent:function(a){return!z.pseudos.empty(a)},header
:function(a){return vb.test(a.nodeName)},input:function(a){return
ub.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"
input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"inp
ut"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("typ
e"))||b.toLowerCase()===a.type)},first:k(function(){return[0]}),last:k(functio
n(a,b){return[b-1]}),eq:k(function(a,b,c){return[0>c?c+b:c]}),even:k(function(
a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:k(function(a,b){for(var
c=1;b>c;c+=2)a.push(c);return a}),lt:k(function(a,b,c){for(var
d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:k(function(a,b,c){for(var
d=0>c?c+b:c;b>++d;)a.push(d);return a})}},z.pseudos.nth=z.pseudos.eq;for(w
in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})z.pseudos[w]=i(w);for(w
in{submit:!0,reset:!0})z.pseudos[w]=j(w);
l.prototype=z.filters=z.pseudos,z.setFilters=new
l,C=c.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=m(a)),
c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d))}return f},x.s
ortStable=N.split("").sort(V).join("")===N,x.detectDuplicates=U,F(),x.sortDeta
ched=f(function(a){return
1&a.compareDocumentPosition(G.createElement("div"))}),f(function(a){return
a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||g("t
ype|href|height|width",function(a,c,d){return d?b:a.getAttribute(c,"type"===c.
toLowerCase()?1:2)}),x.attributes&&f(function(a){return a.innerHTML="<input/>"
,a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||g("value",function(a,c,d){return
d||"input"!==a.nodeName.toLowerCase()?b:a.defaultValue}),f(function(a){return
null==a.getAttribute("disabled")})||g(db,function(a,c,d){var e;return d?b:(e=a
.getAttributeNode(c))&&e.specified?e.value:a[c]===!0?c.toLowerCase():null}),fb
.find=c,fb.expr=c.selectors,fb.expr[":"]=fb.expr.pseudos,fb.unique=c.uniqueSor
t,fb.text=c.getText,fb.isXMLDoc=c.isXML,fb.contains=c.contains}(a);var
ob={};fb.Callbacks=function(a){a="string"==typeof
a?ob[a]||d(a):fb.extend({},a);var c,e,f,g,h,i,j=[],k=!a.once&&[],l=function(b)
{for(c=a.memory&&b,e=!0,i=g||0,g=0,h=j.length,f=!0;j&&h>i;i++)if(j[i].apply(b[
0],b[1])===!1&&a.stopOnFalse){c=!1;break}f=!1,j&&(k?k.length&&l(k.shift()):c?j
=[]:m.disable())},m={add:function(){if(j){var b=j.length;!function
d(b){fb.each(b,function(b,c){var e=fb.type(c);"function"===e?a.unique&&m.has(c
)||j.push(c):c&&c.length&&"string"!==e&&d(c)})}(arguments),f?h=j.length:c&&(g=
b,l(c))}return this},remove:function(){return
j&&fb.each(arguments,function(a,b){for(var c;(c=fb.inArray(b,j,c))>-1;)j.splic
e(c,1),f&&(h>=c&&h--,i>=c&&i--)}),this},has:function(a){return
a?fb.inArray(a,j)>-1:!(!j||!j.length)},empty:function(){return
j=[],h=0,this},disable:function(){return
j=k=c=b,this},disabled:function(){return!j},lock:function(){return k=b,c||m.di
sable(),this},locked:function(){return!k},fireWith:function(a,b){return!j||e&&
!k||(b=b||[],b=[a,b.slice?b.slice():b],f?k.push(b):l(b)),this},fire:function()
{return m.fireWith(this,arguments),this},fired:function(){return!!e}};return
m},fb.extend({Deferred:function(a){var b=[["resolve","done",fb.Callbacks("once
memory"),"resolved"],["reject","fail",fb.Callbacks("once memory"),"rejected"],
["notify","progress",fb.Callbacks("memory")]],c="pending",d={state:function(){
return c},always:function(){return
e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return
fb.Deferred(function(c){fb.each(b,function(b,f){var
g=f[0],h=fb.isFunction(a[b])&&a[b];e[f[1]](function(){var a=h&&h.apply(this,ar
guments);a&&fb.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject
).progress(c.notify):c[g+"With"](this===d?c.promise():this,h?[a]:arguments)})}
),a=null}).promise()},promise:function(a){return
null!=a?fb.extend(a,d):d}},e={};return
d.pipe=d.then,fb.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add
(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f
[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.pro
mise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=ab.call(arguments),
g=f.length,h=1!==g||a&&fb.isFunction(a.promise)?g:0,i=1===h?a:fb.Deferred(),j=
function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?ab.call(a
rguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=Arr
ay(g),c=Array(g),d=Array(g);g>e;e++)f[e]&&fb.isFunction(f[e].promise)?f[e].pro
mise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return
h||i.resolveWith(d,f),i.promise()}}),fb.support=function(b){var c=T.createElem
ent("input"),d=T.createDocumentFragment(),e=T.createElement("div"),f=T.createE
lement("select"),g=f.appendChild(T.createElement("option"));return c.type?(c.t
ype="checkbox",b.checkOn=""!==c.value,b.optSelected=g.selected,b.reliableMargi
nRight=!0,b.boxSizingReliable=!0,b.pixelPosition=!1,c.checked=!0,b.noCloneChec
ked=c.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled,c=T.create
Element("input"),c.value="t",c.type="radio",b.radioValue="t"===c.value,c.setAt
tribute("checked","t"),c.setAttribute("name","t"),d.appendChild(c),b.checkClon
e=d.cloneNode(!0).cloneNode(!0).lastChild.checked,b.focusinBubbles="onfocusin"
in a,e.style.backgroundClip="content-
box",e.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle="content-
box"===e.style.backgroundClip,fb(function(){var
c,d,f="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-
box;-moz-box-sizing:content-box;box-sizing:content-box",g=T.getElementsByTagNa
me("body")[0];g&&(c=T.createElement("div"),c.style.cssText="border:0;width:0;h
eight:0;position:absolute;top:0;left:-9999px;margin-
top:1px",g.appendChild(c).appendChild(e),e.innerHTML="",e.style.cssText
="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-
box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:abso
lute;top:1%",fb.swap(g,null!=g.style.zoom?{zoom:1}:{},function(){b.boxSizing=4
===e.offsetWidth}),a.getComputedStyle&&(b.pixelPosition="1%"!==(a.getComputedS
tyle(e,null)||{}).top,b.boxSizingReliable="4px"===(a.getComputedStyle(e,null)|
|{width:"4px"}).width,d=e.appendChild(T.createElement("div")),d.style.cssText=
e.style.cssText=f,d.style.marginRight=d.style.width="0",e.style.width="1px",b.
reliableMarginRight=!parseFloat((a.getComputedStyle(d,null)||{}).marginRight))
,g.removeChild(c))}),b):b}({});var pb,qb,rb=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,sb=
/([A-Z])/g;e.uid=1,e.accepts=function(a){return a.nodeType?1===a.nodeType||9==
=a.nodeType:!0},e.prototype={key:function(a){if(!e.accepts(a))return 0;var b={
},c=a[this.expando];if(!c){c=e.uid++;try{b[this.expando]={value:c},Object.defi
neProperties(a,b)}catch(d){b[this.expando]=c,fb.extend(a,b)}}return
this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var
d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else
if(fb.isEmptyObject(f))fb.extend(this.cache[e],b);else for(d in
b)f[d]=b[d];return f},get:function(a,c){var d=this.cache[this.key(a)];return
c===b?d:d[c]},access:function(a,c,d){var e;return c===b||c&&"string"==typeof c
&&d===b?(e=this.get(a,c),e!==b?e:this.get(a,fb.camelCase(c))):(this.set(a,c,d)
,d!==b?d:c)},remove:function(a,c){var d,e,f,g=this.key(a),h=this.cache[g];if(c
===b)this.cache[g]={};else{fb.isArray(c)?e=c.concat(c.map(fb.camelCase)):(f=fb
.camelCase(c),c in h?e=[c,f]:(e=f,e=e in
h?[e]:e.match(hb)||[])),d=e.length;for(;d--;)delete h[e[d]]}},hasData:function
(a){return!fb.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function
(a){a[this.expando]&&delete this.cache[a[this.expando]]}},pb=new e,qb=new
e,fb.extend({acceptData:e.accepts,hasData:function(a){return
pb.hasData(a)||qb.hasData(a)},data:function(a,b,c){return pb.access(a,b,c)},re
moveData:function(a,b){pb.remove(a,b)},_data:function(a,b,c){return qb.access(
a,b,c)},_removeData:function(a,b){qb.remove(a,b)}}),fb.fn.extend({data:functio
n(a,c){var d,e,g=this[0],h=0,i=null;if(a===b){if(this.length&&(i=pb.get(g),1==
=g.nodeType&&!qb.get(g,"hasDataAttrs"))){for(d=g.attributes;d.length>h;h++)e=d
[h].name,0===e.indexOf("data-")&&(e=fb.camelCase(e.slice(5)),f(g,e,i[e]));qb.s
et(g,"hasDataAttrs",!0)}return i}return"object"==typeof
a?this.each(function(){pb.set(this,a)}):fb.access(this,function(c){var
d,e=fb.camelCase(a);if(g&&c===b){if(d=pb.get(g,a),d!==b)return
d;if(d=pb.get(g,e),d!==b)return d;if(d=f(g,e,b),d!==b)return d}else
this.each(function(){var d=pb.get(this,e);pb.set(this,e,c),-1!==a.indexOf("-")
&&d!==b&&pb.set(this,a,c)})},null,c,arguments.length>1,null,!0)},removeData:fu
nction(a){return this.each(function(){pb.remove(this,a)})}}),fb.extend({queue:
function(a,c,d){var e;return a?(c=(c||"fx")+"queue",e=qb.get(a,c),d&&(!e||fb.i
sArray(d)?e=qb.access(a,c,fb.makeArray(d)):e.push(d)),e||[]):b},dequeue:functi
on(a,b){b=b||"fx";var c=fb.queue(a,b),d=c.length,e=c.shift(),f=fb._queueHooks(
a,b),g=function(){fb.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx
"===b&&c.unshift("inprogress"),delete
f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var
c=b+"queueHooks";return qb.get(a,c)||qb.access(a,c,{empty:fb.Callbacks("once m
emory").add(function(){qb.remove(a,[b+"queue",c])})})}}),fb.fn.extend({queue:f
unction(a,c){var d=2;return"string"!=typeof a&&(c=a,a="fx",d--),d>arguments.le
ngth?fb.queue(this[0],a):c===b?this:this.each(function(){var b=fb.queue(this,a
,c);fb._queueHooks(this,a),"fx"===a&&"inprogress"!==b[0]&&fb.dequeue(this,a)})
},dequeue:function(a){return
this.each(function(){fb.dequeue(this,a)})},delay:function(a,b){return
a=fb.fx?fb.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTim
eout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return
this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=fb.Deferred(),g=this
,h=this.length,i=function(){--e||f.resolveWith(g,[g])};for("string"!=typeof a&
&(c=a,a=b),a=a||"fx";h--;)d=qb.get(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.emp
ty.add(i));return i(),f.promise(c)}});var tb,ub,vb=/[\t\r\n\f]/g,wb=/\r/g,xb=/
^(?:input|select|textarea|button)$/i;fb.fn.extend({attr:function(a,b){return
fb.access(this,fb.attr,a,b,arguments.length>1)},removeAttr:function(a){return
this.each(function(){fb.removeAttr(this,a)})},prop:function(a,b){return
fb.access(this,fb.prop,a,b,arguments.length>1)},removeProp:function(a){return
this.each(function(){delete this[fb.propFix[a]||a]})},addClass:function(a){var
b,c,d,e,f,g=0,h=this.length,i="string"==typeof a&&a;if(fb.isFunction(a))return
this.each(function(b){fb(this).addClass(a.call(this,b,this.className))});if(i)
for(b=(a||"").match(hb)||[];h>g;g++)if(c=this[g],d=1===c.nodeType&&(c.classNam
e?(" "+c.className+" ").replace(vb," "):" ")){for(f=0;e=b[f++];)0>d.indexOf("
"+e+" ")&&(d+=e+" ");c.className=fb.trim(d)}return
this},removeClass:function(a){var
b,c,d,e,f,g=0,h=this.length,i=0===arguments.length||"string"==typeof
a&&a;if(fb.isFunction(a))return this.each(function(b){fb(this).removeClass(a.c
all(this,b,this.className))});if(i)for(b=(a||"").match(hb)||[];h>g;g++)if(c=th
is[g],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vb,"
"):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+"
"," ");c.className=a?fb.trim(d):""}return this},toggleClass:function(a,b){var
c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.rem
oveClass(a):fb.isFunction(a)?this.each(function(c){fb(this).toggleClass(a.call
(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(var b,
d=0,e=fb(this),f=a.match(hb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.ad
dClass(b);else(c===R||"boolean"===c)&&(this.className&&qb.set(this,"__classNam
e__",this.className),this.className=this.className||a===!1?"":qb.get(this,"__c
lassName__")||"")})},hasClass:function(a){for(var b=" "+a+"
",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+"
").replace(vb," ").indexOf(b)>=0)return!0;return!1},val:function(a){var
c,d,e,f=this[0];return
arguments.length?(e=fb.isFunction(a),this.each(function(d){var f;1===this.node
Type&&(f=e?a.call(this,d,fb(this).val()):a,null==f?f="":"number"==typeof
f?f+="":fb.isArray(f)&&(f=fb.map(f,function(a){return null==a?"":a+""})),c=fb.
valHooks[this.type]||fb.valHooks[this.nodeName.toLowerCase()],c&&"set"in c&&c.
set(this,f,"value")!==b||(this.value=f))})):f?(c=fb.valHooks[f.type]||fb.valHo
oks[f.nodeName.toLowerCase()],c&&"get"in
c&&(d=c.get(f,"value"))!==b?d:(d=f.value,"string"==typeof
d?d.replace(wb,""):null==d?"":d)):void
0}}),fb.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;ret
urn!b||b.specified?a.value:a.text}},select:{get:function(a){for(var
b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f
?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(fb.suppor
t.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disa
bled&&fb.nodeName(c.parentNode,"optgroup"))){if(b=fb(c).val(),f)return
b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=fb.makeArray
(b),g=e.length;g--;)d=e[g],(d.selected=fb.inArray(fb(d).val(),f)>=0)&&(c=!0);r
eturn c||(a.selectedIndex=-1),f}}},attr:function(a,c,d){var
e,f,g=a.nodeType;return a&&3!==g&&8!==g&&2!==g?typeof a.getAttribute===R?fb.pr
op(a,c,d):(1===g&&fb.isXMLDoc(a)||(c=c.toLowerCase(),e=fb.attrHooks[c]||(fb.ex
pr.match.bool.test(c)?ub:tb)),d===b?e&&"get"in e&&null!==(f=e.get(a,c))?f:(f=f
b.find.attr(a,c),null==f?b:f):null!==d?e&&"set"in e&&(f=e.set(a,d,c))!==b?f:(a
.setAttribute(c,d+""),d):(fb.removeAttr(a,c),b)):void
0},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(hb);if(f&&1===a.nodeType)
for(;c=f[e++];)d=fb.propFix[c]||c,fb.expr.match.bool.test(c)&&(a[d]=!1),a.remo
veAttribute(c)},attrHooks:{type:{set:function(a,b){if(!fb.support.radioValue&&
"radio"===b&&fb.nodeName(a,"input")){var c=a.value;return a.setAttribute("type
",b),c&&(a.value=c),b}}}},propFix:{"for":"htmlFor","class":"className"},prop:f
unction(a,c,d){var e,f,g,h=a.nodeType;return a&&3!==h&&8!==h&&2!==h?(g=1!==h||
!fb.isXMLDoc(a),g&&(c=fb.propFix[c]||c,f=fb.propHooks[c]),d!==b?f&&"set"in
f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in
f&&null!==(e=f.get(a,c))?e:a[c]):void
0},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||xb.
test(a.nodeName)||a.href?a.tabIndex:-1}}}}),ub={set:function(a,b,c){return b==
=!1?fb.removeAttr(a,c):a.setAttribute(c,c),c}},fb.each(fb.expr.match.bool.sour
ce.match(/\w+/g),function(a,c){var d=fb.expr.attrHandle[c]||fb.find.attr;fb.ex
pr.attrHandle[c]=function(a,c,e){var f=fb.expr.attrHandle[c],g=e?b:(fb.expr.at
trHandle[c]=b)!=d(a,c,e)?c.toLowerCase():null;return fb.expr.attrHandle[c]=f,g
}}),fb.support.optSelected||(fb.propHooks.selected={get:function(a){var
b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),fb.e
ach(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","
colSpan","useMap","frameBorder","contentEditable"],function(){fb.propFix[this.
toLowerCase()]=this}),fb.each(["radio","checkbox"],function(){fb.valHooks[this
]={set:function(a,c){return fb.isArray(c)?a.checked=fb.inArray(fb(a).val(),c)>
=0:b}},fb.support.checkOn||(fb.valHooks[this].get=function(a){return
null===a.getAttribute("value")?"on":a.value})});var yb=/^key/,zb=/^(?:mouse|co
ntextmenu)|click/,Ab=/^(?:focusinfocus|focusoutblur)$/,Bb=/^([^.]*)(?:\.(.+)|)
$/;fb.event={global:{},add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r=qb.
get(a);if(r){for(d.handler&&(g=d,d=g.handler,f=g.selector),d.guid||(d.guid=fb.
guid++),(j=r.events)||(j=r.events={}),(h=r.handle)||(h=r.handle=function(a){re
turn typeof fb===R||a&&fb.event.triggered===a.type?b:fb.event.dispatch.apply(h
.elem,arguments)},h.elem=a),c=(c||"").match(hb)||[""],k=c.length;k--;)i=Bb.exe
c(c[k])||[],o=q=i[1],p=(i[2]||"").split(".").sort(),o&&(m=fb.event.special[o]|
|{},o=(f?m.delegateType:m.bindType)||o,m=fb.event.special[o]||{},l=fb.extend({
type:o,origType:q,data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&fb.e
xpr.match.needsContext.test(f),namespace:p.join(".")},g),(n=j[o])||(n=j[o]=[],
n.delegateCount=0,m.setup&&m.setup.call(a,e,p,h)!==!1||a.addEventListener&&a.a
ddEventListener(o,h,!1)),m.add&&(m.add.call(a,l),l.handler.guid||(l.handler.gu
id=d.guid)),f?n.splice(n.delegateCount++,0,l):n.push(l),fb.event.global[o]=!0)
;a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=qb.hasData(a)
&&qb.get(a);if(q&&(i=q.events)){for(b=(b||"").match(hb)||[""],j=b.length;j--;)
if(h=Bb.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=fb.eve
nt.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&RegExp
("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!=
=k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&(
"**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&
&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!
==!1||fb.removeEvent(a,n,q.handle),delete i[n])}else for(n in
i)fb.event.remove(a,n+b[j],c,d,!0);fb.isEmptyObject(i)&&(delete
q.handle,qb.remove(a,"events"))}},trigger:function(c,d,e,f){var g,h,i,j,k,l,m,
n=[e||T],o=db.call(c,"type")?c.type:c,p=db.call(c,"namespace")?c.namespace.spl
it("."):[];if(h=i=e=e||T,3!==e.nodeType&&8!==e.nodeType&&!Ab.test(o+fb.event.t
riggered)&&(o.indexOf(".")>=0&&(p=o.split("."),o=p.shift(),p.sort()),k=0>o.ind
exOf(":")&&"on"+o,c=c[fb.expando]?c:new fb.Event(o,"object"==typeof c&&c),c.is
Trigger=f?2:3,c.namespace=p.join("."),c.namespace_re=c.namespace?RegExp("(^|\\
.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c.result=b,c.target||(c.target=e),
d=null==d?[c]:fb.makeArray(d,[c]),m=fb.event.special[o]||{},f||!m.trigger||m.t
rigger.apply(e,d)!==!1)){if(!f&&!m.noBubble&&!fb.isWindow(e)){for(j=m.delegate
Type||o,Ab.test(j+o)||(h=h.parentNode);h;h=h.parentNode)n.push(h),i=h;i===(e.o
wnerDocument||T)&&n.push(i.defaultView||i.parentWindow||a)}for(g=0;(h=n[g++])&
&!c.isPropagationStopped();)c.type=g>1?j:m.bindType||o,l=(qb.get(h,"events")||
{})[c.type]&&qb.get(h,"handle"),l&&l.apply(h,d),l=k&&h[k],l&&fb.acceptData(h)&
&l.apply&&l.apply(h,d)===!1&&c.preventDefault();return c.type=o,f||c.isDefault
Prevented()||m._default&&m._default.apply(n.pop(),d)!==!1||!fb.acceptData(e)||
k&&fb.isFunction(e[o])&&!fb.isWindow(e)&&(i=e[k],i&&(e[k]=null),fb.event.trigg
ered=o,e[o](),fb.event.triggered=b,i&&(e[k]=i)),c.result}},dispatch:function(a
){a=fb.event.fix(a);var c,d,e,f,g,h=[],i=ab.call(arguments),j=(qb.get(this,"ev
ents")||{})[a.type]||[],k=fb.event.special[a.type]||{};if(i[0]=a,a.delegateTar
get=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){for(h=fb.event.handl
ers.call(this,a,j),c=0;(f=h[c++])&&!a.isPropagationStopped();)for(a.currentTar
get=f.elem,d=0;(g=f.handlers[d++])&&!a.isImmediatePropagationStopped();)(!a.na
mespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=
((fb.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),e!==b&&
(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()));return k.postDisp
atch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,c){var d,e,f,
g,h=[],i=c.delegateCount,j=a.target;if(i&&j.nodeType&&(!a.button||"click"!==a.
type))for(;j!==this;j=j.parentNode||this)if(j.disabled!==!0||"click"!==a.type)
{for(e=[],d=0;i>d;d++)g=c[d],f=g.selector+" ",e[f]===b&&(e[f]=g.needsContext?f
b(f,this).index(j)>=0:fb.find(f,this,null,[j]).length),e[f]&&e.push(g);e.lengt
h&&h.push({elem:j,handlers:e})}return
c.length>i&&h.push({elem:this,handlers:c.slice(i)}),h},props:"altKey bubbles
cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey
target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char
charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a
.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button
buttons clientX clientY offsetX offsetY pageX pageY screenX screenY
toElement".split(" "),filter:function(a,c){var d,e,f,g=c.button;return null==a
.pageX&&null!=c.clientX&&(d=a.target.ownerDocument||T,e=d.documentElement,f=d.
body,a.pageX=c.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft|
|f&&f.clientLeft||0),a.pageY=c.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&
&e.clientTop||f&&f.clientTop||0)),a.which||g===b||(a.which=1&g?1:2&g?3:4&g?2:0
),a}},fix:function(a){if(a[fb.expando])return a;var b,c,d,e=a.type,f=a,g=this.
fixHooks[e];for(g||(this.fixHooks[e]=g=zb.test(e)?this.mouseHooks:yb.test(e)?t
his.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new
fb.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=T),3==
=a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},s
pecial:{load:{noBubble:!0},focus:{trigger:function(){return this!==i()&&this.f
ocus?(this.focus(),!1):b},delegateType:"focusin"},blur:{trigger:function(){ret
urn this===i()&&this.blur?(this.blur(),!1):b},delegateType:"focusout"},click:{
trigger:function(){return"checkbox"===this.type&&this.click&&fb.nodeName(this,
"input")?(this.click(),!1):b},_default:function(a){return fb.nodeName(a.target
,"a")}},beforeunload:{postDispatch:function(a){a.result!==b&&(a.originalEvent.
returnValue=a.result)}}},simulate:function(a,b,c,d){var e=fb.extend(new fb.Eve
nt,c,{type:a,isSimulated:!0,originalEvent:{}});d?fb.event.trigger(e,null,b):fb
.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},fb.remo
veEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},
fb.Event=function(a,c){return this instanceof fb.Event?(a&&a.type?(this.origin
alEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.getPr
eventDefault&&a.getPreventDefault()?g:h):this.type=a,c&&fb.extend(this,c),this
.timeStamp=a&&a.timeStamp||fb.now(),this[fb.expando]=!0,b):new fb.Event(a,c)},
fb.Event.prototype={isDefaultPrevented:h,isPropagationStopped:h,isImmediatePro
pagationStopped:h,preventDefault:function(){var a=this.originalEvent;this.isDe
faultPrevented=g,a&&a.preventDefault&&a.preventDefault()},stopPropagation:func
tion(){var a=this.originalEvent;this.isPropagationStopped=g,a&&a.stopPropagati
on&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediateP
ropagationStopped=g,this.stopPropagation()}},fb.each({mouseenter:"mouseover",m
ouseleave:"mouseout"},function(a,b){fb.event.special[a]={delegateType:b,bindTy
pe:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e
||e!==d&&!fb.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,argumen
ts),a.type=b),c}}}),fb.support.focusinBubbles||fb.each({focus:"focusin",blur:"
focusout"},function(a,b){var c=0,d=function(a){fb.event.simulate(b,a.target,fb
.event.fix(a),!0)};fb.event.special[b]={setup:function(){0===c++&&T.addEventLi
stener(a,d,!0)},teardown:function(){0===--c&&T.removeEventListener(a,d,!0)}}})
,fb.fn.extend({on:function(a,c,d,e,f){var g,i;if("object"==typeof
a){"string"!=typeof c&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],f);return
this}if(null==d&&null==e?(e=c,d=c=b):null==e&&("string"==typeof
c?(e=d,d=b):(e=d,d=c,c=b)),e===!1)e=h;else if(!e)return this;return
1===f&&(g=e,e=function(a){return fb().off(a),g.apply(this,arguments)},e.guid=g
.guid||(g.guid=fb.guid++)),this.each(function(){fb.event.add(this,a,e,d,c)})},
one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var
e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,fb(a.delegateTarg
et).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler
),this;if("object"==typeof a){for(f in a)this.off(f,c,a[f]);return
this}return(c===!1||"function"==typeof c)&&(d=c,c=b),d===!1&&(d=h),this.each(f
unction(){fb.event.remove(this,a,d,c)})},trigger:function(a,b){return this.eac
h(function(){fb.event.trigger(a,b,this)})},triggerHandler:function(a,c){var
d=this[0];return d?fb.event.trigger(a,c,d,!0):b}});var Cb=/^.[^:#\[\.,]*$/,Db=
/^(?:parents|prev(?:Until|All))/,Eb=fb.expr.match.needsContext,Fb={children:!0
,contents:!0,next:!0,prev:!0};fb.fn.extend({find:function(a){var
b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(fb(a).fil
ter(function(){for(b=0;e>b;b++)if(fb.contains(d[b],this))return!0}));for(b=0;e
>b;b++)fb.find(a,d[b],c);return
c=this.pushStack(e>1?fb.unique(c):c),c.selector=this.selector?this.selector+"
"+a:a,c},has:function(a){var b=fb(a,this),c=b.length;return
this.filter(function(){for(var
a=0;c>a;a++)if(fb.contains(this,b[a]))return!0})},not:function(a){return
this.pushStack(k(this,a||[],!0))},filter:function(a){return this.pushStack(k(t
his,a||[],!1))},is:function(a){return!!k(this,"string"==typeof
a&&Eb.test(a)?fb(a):a||[],!1).length},closest:function(a,b){for(var
c,d=0,e=this.length,f=[],g=Eb.test(a)||"string"!=typeof a?fb(a,b||this.context
):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(11>c.nodeType&&(g?g.index
(c)>-1:1===c.nodeType&&fb.find.matchesSelector(c,a))){c=f.push(c);break}return
this.pushStack(f.length>1?fb.unique(f):f)},index:function(a){return
a?"string"==typeof a?bb.call(fb(a),this[0]):bb.call(this,a.jquery?a[0]:a):this
[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){va
r c="string"==typeof
a?fb(a,b):fb.makeArray(a&&a.nodeType?[a]:a),d=fb.merge(this.get(),c);return
this.pushStack(fb.unique(d))},addBack:function(a){return this.add(null==a?this
.prevObject:this.prevObject.filter(a))}}),fb.each({parent:function(a){var
b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return
fb.dir(a,"parentNode")},parentsUntil:function(a,b,c){return
fb.dir(a,"parentNode",c)},next:function(a){return
j(a,"nextSibling")},prev:function(a){return
j(a,"previousSibling")},nextAll:function(a){return
fb.dir(a,"nextSibling")},prevAll:function(a){return
fb.dir(a,"previousSibling")},nextUntil:function(a,b,c){return
fb.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return
fb.dir(a,"previousSibling",c)},siblings:function(a){return
fb.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return
fb.sibling(a.firstChild)},contents:function(a){return a.contentDocument||fb.me
rge([],a.childNodes)}},function(a,b){fb.fn[a]=function(c,d){var
e=fb.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(
e=fb.filter(d,e)),this.length>1&&(Fb[a]||fb.unique(e),Db.test(a)&&e.reverse())
,this.pushStack(e)}}),fb.extend({filter:function(a,b,c){var d=b[0];return c&&(
a=":not("+a+")"),1===b.length&&1===d.nodeType?fb.find.matchesSelector(d,a)?[d]
:[]:fb.find.matches(a,fb.grep(b,function(a){return
1===a.nodeType}))},dir:function(a,c,d){for(var e=[],f=d!==b;(a=a[c])&&9!==a.no
deType;)if(1===a.nodeType){if(f&&fb(a).is(d))break;e.push(a)}return
e},sibling:function(a,b){for(var
c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var Gb=/<(
?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Hb=/<([
\w:]+)/,Ib=/<|&#?\w+;/,Jb=/<(?:script|style|link)/i,Kb=/^(?:checkbox|radio)$/i
,Lb=/checked\s*(?:[^=]|=\s*.checked.)/i,Mb=/^$|\/(?:java|ecma)script/i,Nb=/^tr
ue\/(.*)/,Ob=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Pb={option:[1,"<select
multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<tab
le><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>
"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Pb.
optgroup=Pb.option,Pb.tbody=Pb.tfoot=Pb.colgroup=Pb.caption=Pb.thead,Pb.th=Pb.
td,fb.fn.extend({text:function(a){return fb.access(this,function(a){return a==
=b?fb.text(this):this.empty().append((this[0]&&this[0].ownerDocument||T).creat
eTextNode(a))},null,a,arguments.length)},append:function(){return this.domMani
p(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nod
eType){var b=l(this,a);b.appendChild(a)}})},prepend:function(){return this.dom
Manip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this
.nodeType){var
b=l(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.d
omManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,
this)})},after:function(){return this.domManip(arguments,function(a){this.pare
ntNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,
b){for(var c,d=a?fb.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeTy
pe||fb.cleanData(q(c)),c.parentNode&&(b&&fb.contains(c.ownerDocument,c)&&o(q(c
,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var
a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(fb.cleanData(q(a,!1)),a.textConte
nt="");return this},clone:function(a,b){return
a=null==a?!1:a,b=null==b?a:b,this.map(function(){return
fb.clone(this,a,b)})},html:function(a){return fb.access(this,function(a){var
c=this[0]||{},d=0,e=this.length;if(a===b&&1===c.nodeType)return
c.innerHTML;if("string"==typeof a&&!Jb.test(a)&&!Pb[(Hb.exec(a)||["",""])[1].t
oLowerCase()]){a=a.replace(Gb,"<$1></$2>");try{for(;e>d;d++)c=this[d]||{},1===
c.nodeType&&(fb.cleanData(q(c,!1)),c.innerHTML=a);c=0}catch(f){}}c&&this.empty
().append(a)},null,a,arguments.length)},replaceWith:function(){var
a=fb.map(this,function(a){return[a.nextSibling,a.parentNode]}),b=0;return
this.domManip(arguments,function(c){var d=a[b++],e=a[b++];e&&(d&&d.parentNode!
==e&&(d=this.nextSibling),fb(this).remove(),e.insertBefore(c,d))},!0),b?this:t
his.remove()},detach:function(a){return
this.remove(a,!0)},domManip:function(a,b,c){a=$.apply([],a);var d,e,f,g,h,i,j=
0,k=this.length,l=this,o=k-1,p=a[0],r=fb.isFunction(p);if(r||!(1>=k||"string"!
=typeof p||fb.support.checkClone)&&Lb.test(p))return this.each(function(d){var
e=l.eq(d);r&&(a[0]=p.call(this,d,e.html())),e.domManip(a,b,c)});if(k&&(d=fb.bu
ildFragment(a,this[0].ownerDocument,!1,!c&&this),e=d.firstChild,1===d.childNod
es.length&&(d=e),e)){for(f=fb.map(q(d,"script"),m),g=f.length;k>j;j++)h=d,j!==
o&&(h=fb.clone(h,!0,!0),g&&fb.merge(f,q(h,"script"))),b.call(this[j],h,j);if(g
)for(i=f[f.length-1].ownerDocument,fb.map(f,n),j=0;g>j;j++)h=f[j],Mb.test(h.ty
pe||"")&&!qb.access(h,"globalEval")&&fb.contains(i,h)&&(h.src?fb._evalUrl(h.sr
c):fb.globalEval(h.textContent.replace(Ob,"")))}return this}}),fb.each({append
To:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",repl
aceAll:"replaceWith"},function(a,b){fb.fn[a]=function(a){for(var c,d=[],e=fb(a
),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),fb(e[g])[b](c),_.apply
(d,c.get());return this.pushStack(d)}}),fb.extend({clone:function(a,b,c){var d
,e,f,g,h=a.cloneNode(!0),i=fb.contains(a.ownerDocument,a);if(!(fb.support.noCl
oneChecked||1!==a.nodeType&&11!==a.nodeType||fb.isXMLDoc(a)))for(g=q(h),f=q(a)
,d=0,e=f.length;e>d;d++)r(f[d],g[d]);if(b)if(c)for(f=f||q(a),g=g||q(h),d=0,e=f
.length;e>d;d++)p(f[d],g[d]);else p(a,h);return g=q(h,"script"),g.length>0&&o(
g,!i&&q(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=
0,l=a.length,m=b.createDocumentFragment(),n=[];l>k;k++)if(e=a[k],e||0===e)if("
object"===fb.type(e))fb.merge(n,e.nodeType?[e]:e);else if(Ib.test(e)){for(f=f|
|m.appendChild(b.createElement("div")),g=(Hb.exec(e)||["",""])[1].toLowerCase(
),h=Pb[g]||Pb._default,f.innerHTML=h[1]+e.replace(Gb,"<$1></$2>")+h[2],j=h[0];
j--;)f=f.lastChild;fb.merge(n,f.childNodes),f=m.firstChild,f.textContent=""}el
se n.push(b.createTextNode(e));for(m.textContent="",k=0;e=n[k++];)if((!d||-1==
=fb.inArray(e,d))&&(i=fb.contains(e.ownerDocument,e),f=q(m.appendChild(e),"scr
ipt"),i&&o(f),c))for(j=0;e=f[j++];)Mb.test(e.type||"")&&c.push(e);return
m},cleanData:function(a){for(var c,d,f,g,h,i,j=fb.event.special,k=0;(d=a[k])!=
=b;k++){if(e.accepts(d)&&(h=d[qb.expando],h&&(c=qb.cache[h]))){if(f=Object.key
s(c.events||{}),f.length)for(i=0;(g=f[i])!==b;i++)j[g]?fb.event.remove(d,g):fb
.removeEvent(d,g,c.handle);qb.cache[h]&&delete qb.cache[h]}delete
pb.cache[d[pb.expando]]}},_evalUrl:function(a){return fb.ajax({url:a,type:"GET
",dataType:"script",async:!1,global:!1,"throws":!0})}}),fb.fn.extend({wrapAll:
function(a){var b;return fb.isFunction(a)?this.each(function(b){fb(this).wrapA
ll(a.call(this,b))}):(this[0]&&(b=fb(a,this[0].ownerDocument).eq(0).clone(!0),
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var
a=this;a.firstElementChild;)a=a.firstElementChild;return
a}).append(this)),this)},wrapInner:function(a){return fb.isFunction(a)?this.ea
ch(function(b){fb(this).wrapInner(a.call(this,b))}):this.each(function(){var b
=fb(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a)
{var b=fb.isFunction(a);return this.each(function(c){fb(this).wrapAll(b?a.call
(this,c):a)})},unwrap:function(){return this.parent().each(function(){fb.nodeN
ame(this,"body")||fb(this).replaceWith(this.childNodes)}).end()}});var Qb,Rb,S
b=/^(none|table(?!-c[ea]).+)/,Tb=/^margin/,Ub=RegExp("^("+gb+")(.*)$","i"),Vb=
RegExp("^("+gb+")(?!px)[a-z%]+$","i"),Wb=RegExp("^([+-])=("+gb+")","i"),Xb={BO
DY:"block"},Yb={position:"absolute",visibility:"hidden",display:"block"},Zb={l
etterSpacing:0,fontWeight:400},$b=["Top","Right","Bottom","Left"],_b=["Webkit"
,"O","Moz","ms"];fb.fn.extend({css:function(a,c){return
fb.access(this,function(a,c,d){var e,f,g={},h=0;if(fb.isArray(c)){for(e=u(a),f
=c.length;f>h;h++)g[c[h]]=fb.css(a,c[h],!1,e);return g }return d!==b?fb.style(
a,c,d):fb.css(a,c)},a,c,arguments.length>1)},show:function(){return
v(this,!0)},hide:function(){return
v(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide(
):this.each(function(){t(this)?fb(this).show():fb(this).hide()})}}),fb.extend(
{cssHooks:{opacity:{get:function(a,b){if(b){var c=Qb(a,"opacity");return""===c
?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!
0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float
":"cssFloat"},style:function(a,c,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.
style){var f,g,h,i=fb.camelCase(c),j=a.style;return c=fb.cssProps[i]||(fb.cssP
rops[i]=s(j,i)),h=fb.cssHooks[c]||fb.cssHooks[i],d===b?h&&"get"in
h&&(f=h.get(a,!1,e))!==b?f:j[c]:(g=typeof d,"string"===g&&(f=Wb.exec(d))&&(d=(
f[1]+1)*f[2]+parseFloat(fb.css(a,c)),g="number"),null==d||"number"===g&&isNaN(
d)||("number"!==g||fb.cssNumber[i]||(d+="px"),fb.support.clearCloneStyle||""!=
=d||0!==c.indexOf("background")||(j[c]="inherit"),h&&"set"in
h&&(d=h.set(a,d,e))===b||(j[c]=d)),b)}},css:function(a,c,d,e){var
f,g,h,i=fb.camelCase(c);return c=fb.cssProps[i]||(fb.cssProps[i]=s(a.style,i))
,h=fb.cssHooks[c]||fb.cssHooks[i],h&&"get"in
h&&(f=h.get(a,!0,d)),f===b&&(f=Qb(a,c,e)),"normal"===f&&c in Zb&&(f=Zb[c]),""=
==d||d?(g=parseFloat(f),d===!0||fb.isNumeric(g)?g||0:f):f}}),Qb=function(a,c,d
){var e,f,g,h=d||u(a),i=h?h.getPropertyValue(c)||h[c]:b,j=a.style;return h&&("
"!==i||fb.contains(a.ownerDocument,a)||(i=fb.style(a,c)),Vb.test(i)&&Tb.test(c
)&&(e=j.width,f=j.minWidth,g=j.maxWidth,j.minWidth=j.maxWidth=j.width=i,i=h.wi
dth,j.width=e,j.minWidth=f,j.maxWidth=g)),i},fb.each(["height","width"],functi
on(a,c){fb.cssHooks[c]={get:function(a,d,e){return d?0===a.offsetWidth&&Sb.tes
t(fb.css(a,"display"))?fb.swap(a,Yb,function(){return
y(a,c,e)}):y(a,c,e):b},set:function(a,b,d){var e=d&&u(a);return
w(a,b,d?x(a,c,d,fb.support.boxSizing&&"border-box"===fb.css(a,"boxSizing",!1,e
),e):0)}}}),fb(function(){fb.support.reliableMarginRight||(fb.cssHooks.marginR
ight={get:function(a,c){return c?fb.swap(a,{display:"inline-block"},Qb,[a,"mar
ginRight"]):b}}),!fb.support.pixelPosition&&fb.fn.position&&fb.each(["top","le
ft"],function(a,c){fb.cssHooks[c]={get:function(a,d){return d?(d=Qb(a,c),Vb.te
st(d)?fb(a).position()[c]+"px":d):b}}})}),fb.expr&&fb.expr.filters&&(fb.expr.f
ilters.hidden=function(a){return 0>=a.offsetWidth&&0>=a.offsetHeight},fb.expr.
filters.visible=function(a){return!fb.expr.filters.hidden(a)}),fb.each({margin
:"",padding:"",border:"Width"},function(a,b){fb.cssHooks[a+b]={expand:function
(c){for(var d=0,e={},f="string"==typeof c?c.split("
"):[c];4>d;d++)e[a+$b[d]+b]=f[d]||f[d-2]||f[0];return
e}},Tb.test(a)||(fb.cssHooks[a+b].set=w)});var ac=/%20/g,bc=/\[\]$/,cc=/\r?\n/
g,dc=/^(?:submit|button|image|reset|file)$/i,ec=/^(?:input|select|textarea|key
gen)/i;fb.fn.extend({serialize:function(){return
fb.param(this.serializeArray())},serializeArray:function(){return
this.map(function(){var a=fb.prop(this,"elements");return
a?fb.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!
fb(this).is(":disabled")&&ec.test(this.nodeName)&&!dc.test(a)&&(this.checked||
!Kb.test(a))}).map(function(a,b){var c=fb(this).val();return null==c?null:fb.i
sArray(c)?fb.map(c,function(a){return{name:b.name,value:a.replace(cc,"\r\n")}}
):{name:b.name,value:c.replace(cc,"\r\n")}}).get()}}),fb.param=function(a,c){v
ar d,e=[],f=function(a,b){b=fb.isFunction(b)?b():null==b?"":b,e[e.length]=enco
deURIComponent(a)+"="+encodeURIComponent(b)};if(c===b&&(c=fb.ajaxSettings&&fb.
ajaxSettings.traditional),fb.isArray(a)||a.jquery&&!fb.isPlainObject(a))fb.eac
h(a,function(){f(this.name,this.value)});else for(d in a)B(d,a[d],c,f);return
e.join("&").replace(ac,"+")},fb.each("blur focus focusin focusout load resize
scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout
mouseenter mouseleave change select submit keydown keypress keyup error
contextmenu".split(" "),function(a,b){fb.fn[b]=function(a,c){return arguments.
length>0?this.on(b,null,a,c):this.trigger(b)}}),fb.fn.extend({hover:function(a
,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return
this.on(a,null,b,c)},unbind:function(a,b){return
this.off(a,null,b)},delegate:function(a,b,c,d){return
this.on(b,a,c,d)},undelegate:function(a,b,c){return
1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var
fc,gc,hc=fb.now(),ic=/\?/,jc=/#.*$/,kc=/([?&])_=[^&]*/,lc=/^(.*?):[
\t]*([^\r\n]*)$/gm,mc=/^(?:about|app|app-storage|.+-extension|file|res|widget)
:$/,nc=/^(?:GET|HEAD)$/,oc=/^\/\//,pc=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)
|)|)/,qc=fb.fn.load,rc={},sc={},tc="*/".concat("*");try{gc=S.href}catch(uc){gc
=T.createElement("a"),gc.href="",gc=gc.href}fc=pc.exec(gc.toLowerCase())||[],f
b.fn.load=function(a,c,d){if("string"!=typeof a&&qc)return
qc.apply(this,arguments);var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.s
lice(i),a=a.slice(0,i)),fb.isFunction(c)?(d=c,c=b):c&&"object"==typeof c&&(f="
POST"),h.length>0&&fb.ajax({url:a,type:f,dataType:"html",data:c}).done(functio
n(a){g=arguments,h.html(e?fb("<div>").append(fb.parseHTML(a)).find(e):a)}).com
plete(d&&function(a,b){h.each(d,g||[a.responseText,b,a])}),this},fb.each(["aja
xStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],functi
on(a,b){fb.fn[b]=function(a){return this.on(b,a)}}),fb.extend({active:0,lastMo
dified:{},etag:{},ajaxSettings:{url:gc,type:"GET",isLocal:mc.test(fc[1]),globa
l:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; c
harset=UTF-8",accepts:{"*":tc,text:"text/plain",html:"text/html",xml:"applicat
ion/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xm
l/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseTe
xt",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text
json":fb.parseJSON,"text xml":fb.parseXML},flatOptions:{url:!0,context:!0}},aj
axSetup:function(a,b){return b?E(E(a,fb.ajaxSettings),b):E(fb.ajaxSettings,a)}
,ajaxPrefilter:C(rc),ajaxTransport:C(sc),ajax:function(a,c){function
d(a,c,d,h){var j,l,s,t,v,x=c;2!==u&&(u=2,i&&clearTimeout(i),e=b,g=h||"",w.read
yState=a>0?4:0,j=a>=200&&300>a||304===a,d&&(t=F(m,w,d)),t=G(m,t,w,j),j?(m.ifMo
dified&&(v=w.getResponseHeader("Last-Modified"),v&&(fb.lastModified[f]=v),v=w.
getResponseHeader("etag"),v&&(fb.etag[f]=v)),204===a||"HEAD"===m.type?x="nocon
tent":304===a?x="notmodified":(x=t.state,l=t.data,s=t.error,j=!s)):(s=x,(a||!x
)&&(x="error",0>a&&(a=0))),w.status=a,w.statusText=(c||x)+"",j?p.resolveWith(n
,[l,x,w]):p.rejectWith(n,[w,x,s]),w.statusCode(r),r=b,k&&o.trigger(j?"ajaxSucc
ess":"ajaxError",[w,m,j?l:s]),q.fireWith(n,[w,x]),k&&(o.trigger("ajaxComplete"
,[w,m]),--fb.active||fb.event.trigger("ajaxStop")))}"object"==typeof
a&&(c=a,a=b),c=c||{};var e,f,g,h,i,j,k,l,m=fb.ajaxSetup({},c),n=m.context||m,o
=m.context&&(n.nodeType||n.jquery)?fb(n):fb.event,p=fb.Deferred(),q=fb.Callbac
ks("once memory"),r=m.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:
0,getResponseHeader:function(a){var b;if(2===u){if(!h)for(h={};b=lc.exec(g);)h
[b[1].toLowerCase()]=b[2];b=h[a.toLowerCase()]}return
null==b?null:b},getAllResponseHeaders:function(){return
2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return
u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return
u||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in
a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return
this},abort:function(a){var b=a||v;return e&&e.abort(b),d(0,b),this}};if(p.pro
mise(w).complete=q.add,w.success=w.done,w.error=w.fail,m.url=((a||m.url||gc)+"
").replace(jc,"").replace(oc,fc[1]+"//"),m.type=c.method||c.type||m.method||m.
type,m.dataTypes=fb.trim(m.dataType||"*").toLowerCase().match(hb)||[""],null==
m.crossDomain&&(j=pc.exec(m.url.toLowerCase()),m.crossDomain=!(!j||j[1]===fc[1
]&&j[2]===fc[2]&&(j[3]||("http:"===j[1]?"80":"443"))===(fc[3]||("http:"===fc[1
]?"80":"443")))),m.data&&m.processData&&"string"!=typeof
m.data&&(m.data=fb.param(m.data,m.traditional)),D(rc,m,c,w),2===u)return w;k=m
.global,k&&0===fb.active++&&fb.event.trigger("ajaxStart"),m.type=m.type.toUppe
rCase(),m.hasContent=!nc.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+
=(ic.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=kc.test(f)?f.
replace(kc,"$1_="+hc++):f+(ic.test(f)?"&":"?")+"_="+hc++)),m.ifModified&&(fb.l
astModified[f]&&w.setRequestHeader("If-Modified-
Since",fb.lastModified[f]),fb.etag[f]&&w.setRequestHeader("If-None-Match",fb.e
tag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&w.setReque
stHeader("Content-Type",m.contentType),w.setRequestHeader("Accept",m.dataTypes
[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]
?", "+tc+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)w.setRequestHeader(
l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(n,w,m)===!1||2===u))return
w.abort();v="abort";for(l in{success:1,error:1,complete:1})w[l](m[l]);if(e=D(s
c,m,c,w)){w.readyState=1,k&&o.trigger("ajaxSend",[w,m]),m.async&&m.timeout>0&&
(i=setTimeout(function(){w.abort("timeout")},m.timeout));try{u=1,e.send(s,d)}c
atch(x){if(!(2>u))throw x;d(-1,x)}}else d(-1,"No Transport");return
w},getJSON:function(a,b,c){return
fb.get(a,b,c,"json")},getScript:function(a,c){return fb.get(a,b,c,"script")}})
,fb.each(["get","post"],function(a,c){fb[c]=function(a,d,e,f){return fb.isFunc
tion(d)&&(f=f||e,e=d,d=b),fb.ajax({url:a,type:c,dataType:f,data:d,success:e})}
}),fb.ajaxSetup({accepts:{script:"text/javascript, application/javascript,
application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|e
cma)script/},converters:{"text script":function(a){return fb.globalEval(a),a}}
}),fb.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDoma
in&&(a.type="GET")}),fb.ajaxTransport("script",function(a){if(a.crossDomain){v
ar b,c;return{send:function(d,e){b=fb("<script>").prop({async:!0,charset:a.scr
iptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("e
rror"===a.type?404:200,a.type)}),T.head.appendChild(b[0])},abort:function(){c&
&c()}}}});var vc=[],wc=/(=)\?(?=&|$)|\?\?/;fb.ajaxSetup({jsonp:"callback",json
pCallback:function(){var a=vc.pop()||fb.expando+"_"+hc++;return
this[a]=!0,a}}),fb.ajaxPrefilter("json jsonp",function(c,d,e){var
f,g,h,i=c.jsonp!==!1&&(wc.test(c.url)?"url":"string"==typeof
c.data&&!(c.contentType||"").indexOf("application/x-www-form-
urlencoded")&&wc.test(c.data)&&"data");return i||"jsonp"===c.dataTypes[0]?(f=c
.jsonpCallback=fb.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallbac
k,i?c[i]=c[i].replace(wc,"$1"+f):c.jsonp!==!1&&(c.url+=(ic.test(c.url)?"&":"?"
)+c.jsonp+"="+f),c.converters["script json"]=function(){return h||fb.error(f+"
was not called"),h[0]},c.dataTypes[0]="json",g=a[f],a[f]=function(){h=argument
s},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,vc.push(f
)),h&&fb.isFunction(g)&&g(h[0]),h=g=b}),"script"):b}),fb.ajaxSettings.xhr=func
tion(){try{return new XMLHttpRequest}catch(a){}};var xc=fb.ajaxSettings.xhr(),
yc={0:200,1223:204},zc=0,Ac={};a.ActiveXObject&&fb(a).on("unload",function(){f
or(var a in Ac)Ac[a]();Ac=b}),fb.support.cors=!!xc&&"withCredentials"in
xc,fb.support.ajax=xc=!!xc,fb.ajaxTransport(function(a){var c;return
fb.support.cors||xc&&!a.crossDomain?{send:function(d,e){var f,g,h=a.xhr();if(h
.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(f in a.xhrFi
elds)h[f]=a.xhrFields[f];a.mimeType&&h.overrideMimeType&&h.overrideMimeType(a.
mimeType),a.crossDomain||d["X-Requested-With"]||(d["X-Requested-
With"]="XMLHttpRequest");for(f in
d)h.setRequestHeader(f,d[f]);c=function(a){return function(){c&&(delete Ac[g],
c=h.onload=h.onerror=null,"abort"===a?h.abort():"error"===a?e(h.status||404,h.
statusText):e(yc[h.status]||h.status,h.statusText,"string"==typeof h.responseT
ext?{text:h.responseText}:b,h.getAllResponseHeaders()))}},h.onload=c(),h.onerr
or=c("error"),c=Ac[g=zc++]=c("abort"),h.send(a.hasContent&&a.data||null)},abor
t:function(){c&&c()}}:b});var Bc,Cc,Dc=/^(?:toggle|show|hide)$/,Ec=RegExp("^(?
:([+-])=|)("+gb+")([a-z%]*)$","i"),Fc=/queueHooks$/,Gc=[L],Hc={"*":[function(a
,b){var c=this.createTween(a,b),d=c.cur(),e=Ec.exec(b),f=e&&e[3]||(fb.cssNumbe
r[a]?"":"px"),g=(fb.cssNumber[a]||"px"!==f&&+d)&&Ec.exec(fb.css(c.elem,a)),h=1
,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do
h=h||".5",g/=h,fb.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--
i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c
}]};fb.Animation=fb.extend(J,{tweener:function(a,b){fb.isFunction(a)?(b=a,a=["
*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Hc[c]=Hc[c]||[],Hc
[c].unshift(b)},prefilter:function(a,b){b?Gc.unshift(a):Gc.push(a)}}),fb.Tween
=M,M.prototype={constructor:M,init:function(a,b,c,d,e,f){this.elem=a,this.prop
=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.e
nd=d,this.unit=f||(fb.cssNumber[c]?"":"px")},cur:function(){var
a=M.propHooks[this.prop];return
a&&a.get?a.get(this):M.propHooks._default.get(this)},run:function(a){var
b,c=M.propHooks[this.prop];return this.pos=b=this.options.duration?fb.easing[t
his.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(t
his.end-this.start)*b+this.start,this.options.step&&this.options.step.call(thi
s.elem,this.now,this),c&&c.set?c.set(this):M.propHooks._default.set(this),this
}},M.prototype.init.prototype=M.prototype,M.propHooks={_default:{get:function(
a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]
?(b=fb.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a
){fb.fx.step[a.prop]?fb.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[f
b.cssProps[a.prop]]||fb.cssHooks[a.prop])?fb.style(a.elem,a.prop,a.now+a.unit)
:a.elem[a.prop]=a.now}}},M.propHooks.scrollTop=M.propHooks.scrollLeft={set:fun
ction(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},fb.each(
["toggle","show","hide"],function(a,b){var
c=fb.fn[b];fb.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.appl
y(this,arguments):this.animate(N(b,!0),a,d,e)}}),fb.fn.extend({fadeTo:function
(a,b,c,d){return this.filter(t).css("opacity",0).show().end().animate({opacity
:b},a,c,d)},animate:function(a,b,c,d){var
e=fb.isEmptyObject(a),f=fb.speed(b,c,d),g=function(){var
b=J(this,fb.extend({},a),f);(e||qb.get(this,"finish"))&&b.stop(!0)};return g.f
inish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,
d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return"string"!=typeof
a&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=
!0,c=null!=a&&a+"queueHooks",f=fb.timers,g=qb.get(this);if(c)g[c]&&g[c].stop&&
e(g[c]);else for(c in g)g[c]&&g[c].stop&&Fc.test(c)&&e(g[c]);for(c=f.length;c-
-;)f[c].elem!==this||null!=a&&f[c].queue!==a||(f[c].anim.stop(d),b=!1,f.splice
(c,1));(b||!d)&&fb.dequeue(this,a)})},finish:function(a){return
a!==!1&&(a=a||"fx"),this.each(function(){var b,c=qb.get(this),d=c[a+"queue"],e
=c[a+"queueHooks"],f=fb.timers,g=d?d.length:0;for(c.finish=!0,fb.queue(this,a,
[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].que
ue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&
d[b].finish.call(this);delete c.finish})}}),fb.each({slideDown:N("show"),slide
Up:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:
"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){fb.fn[a]=function(a,c,d){
return this.animate(b,a,c,d)}}),fb.speed=function(a,b,c){var
d=a&&"object"==typeof a?fb.extend({},a):{complete:c||!c&&b||fb.isFunction(a)&&
a,duration:a,easing:c&&b||b&&!fb.isFunction(b)&&b};return
d.duration=fb.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in fb
.fx.speeds?fb.fx.speeds[d.duration]:fb.fx.speeds._default,(null==d.queue||d.qu
eue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){fb.isFunction
(d.old)&&d.old.call(this),d.queue&&fb.dequeue(this,d.queue)},d},fb.easing={lin
ear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},f
b.timers=[],fb.fx=M.prototype.init,fb.fx.tick=function(){var a,c=fb.timers,d=0
;for(Bc=fb.now();c.length>d;d++)a=c[d],a()||c[d]!==a||c.splice(d--,1);c.length
||fb.fx.stop(),Bc=b},fb.fx.timer=function(a){a()&&fb.timers.push(a)&&fb.fx.sta
rt()},fb.fx.interval=13,fb.fx.start=function(){Cc||(Cc=setInterval(fb.fx.tick,
fb.fx.interval))},fb.fx.stop=function(){clearInterval(Cc),Cc=null},fb.fx.speed
s={slow:600,fast:200,_default:400},fb.fx.step={},fb.expr&&fb.expr.filters&&(fb
.expr.filters.animated=function(a){return fb.grep(fb.timers,function(b){return
a===b.elem}).length}),fb.fn.offset=function(a){if(arguments.length)return
a===b?this:this.each(function(b){fb.offset.setOffset(this,a,b)});var
c,d,e=this[0],f={top:0,left:0},g=e&&e.ownerDocument;return
g?(c=g.documentElement,fb.contains(c,e)?(typeof e.getBoundingClientRect!==R&&(
f=e.getBoundingClientRect()),d=O(g),{top:f.top+d.pageYOffset-c.clientTop,left:
f.left+d.pageXOffset-c.clientLeft}):f):void
0},fb.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=fb.css(a,"position
"),l=fb(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=fb.
css(a,"top"),i=fb.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf
("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFlo
at(i)||0),fb.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+
g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(
m)}},fb.fn.extend({position:function(){if(this[0]){var a,b,c=this[0],d={top:0,
left:0};return"fixed"===fb.css(c,"position")?b=c.getBoundingClientRect():(a=th
is.offsetParent(),b=this.offset(),fb.nodeName(a[0],"html")||(d=a.offset()),d.t
op+=fb.css(a[0],"borderTopWidth",!0),d.left+=fb.css(a[0],"borderLeftWidth",!0)
),{top:b.top-d.top-fb.css(c,"marginTop",!0),left:b.left-d.left-
fb.css(c,"marginLeft",!0)}}},offsetParent:function(){return
this.map(function(){for(var a=this.offsetParent||U;a&&!fb.nodeName(a,"html")&&
"static"===fb.css(a,"position");)a=a.offsetParent;return a||U})}}),fb.each({sc
rollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(c,d){var
e="pageYOffset"===d;fb.fn[c]=function(f){return
fb.access(this,function(c,f,g){var h=O(c);return g===b?h?h[d]:c[f]:(h?h.scroll
To(e?a.pageXOffset:g,e?g:a.pageYOffset):c[f]=g,b)},c,f,arguments.length,null)}
}),fb.each({Height:"height",Width:"width"},function(a,c){fb.each({padding:"inn
er"+a,content:c,"":"outer"+a},function(d,e){fb.fn[e]=function(e,f){var
g=arguments.length&&(d||"boolean"!=typeof
e),h=d||(e===!0||f===!0?"margin":"border");return
fb.access(this,function(c,d,e){var f;return fb.isWindow(c)?c.document.document
Element["client"+a]:9===c.nodeType?(f=c.documentElement,Math.max(c.body["scrol
l"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?fb.
css(c,d,h):fb.style(c,d,e,h)},c,g?e:b,g,null)}})}),fb.fn.size=function(){retur
n this.length},fb.fn.andSelf=fb.fn.addBack,"object"==typeof
module&&module&&"object"==typeof
module.exports?module.exports=fb:"function"==typeof
define&&define.amd&&define("jquery",[],function(){return fb}),"object"==typeof
a&&"object"==typeof
a.document&&(a.jQuery=a.$=fb)}(window),function(a,b,c){"use strict";function
d(a){return function(){var b,c,d=arguments[0],e="["+(a?a+":":"")+d+"]
",f=arguments[1],g=arguments,h=function(a){return y(a)?a.toString().replace(/ 
\{[\s\S]*$/,""):r(a)?"undefined":u(a)?a:JSON.stringify(a)};for(b=e+f.replace(/
\{\d+\}/g,function(a){var b,c=+a.slice(1,-1);return
c+2<g.length?(b=g[c+2],y(b)?b.toString().replace(/ ?\{[\s\S]*$/,""):r(b)?"unde
fined":u(b)?b:P(b)):a}),b=b+"\nhttp://errors.angularjs.org/"+nd.full+"/"+(a?a+
"/":"")+d,c=2;c<arguments.length;c++)b=b+(2==c?"?":"&")+"p"+(c-2)+"="+encodeUR
IComponent(h(arguments[c]));return new Error(b)}}function
e(a){if(null==a||A(a))return!1;var b=a.length;return
1===a.nodeType&&b?!0:u(a)||x(a)||0===b||"number"==typeof b&&b>0&&b-1 in
a}function f(a,b,c){var d;if(a)if(y(a))for(d in a)"prototype"!=d&&"length"!=d&
&"name"!=d&&a.hasOwnProperty(d)&&b.call(c,a[d],d);else
if(a.forEach&&a.forEach!==f)a.forEach(b,c);else
if(e(a))for(d=0;d<a.length;d++)b.call(c,a[d],d);else for(d in
a)a.hasOwnProperty(d)&&b.call(c,a[d],d);return a}function g(a){var
b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort()}function
h(a,b,c){for(var d=g(a),e=0;e<d.length;e++)b.call(c,a[d[e]],d[e]);return
d}function i(a){return function(b,c){a(c,b)}}function j(){for(var
a,b=kd.length;b;){if(b--,a=kd[b].charCodeAt(0),57==a)return
kd[b]="A",kd.join("");if(90!=a)return
kd[b]=String.fromCharCode(a+1),kd.join("");kd[b]="0"}return
kd.unshift("0"),kd.join("")}function k(a,b){b?a.$$hashKey=b:delete
a.$$hashKey}function l(a){var b=a.$$hashKey;return
f(arguments,function(b){b!==a&&f(b,function(b,c){a[c]=b})}),k(a,b),a}function
m(a){return parseInt(a,10)}function n(a,b){return
l(new(l(function(){},{prototype:a})),b)}function o(){}function p(a){return
a}function q(a){return function(){return a}}function
r(a){return"undefined"==typeof a}function s(a){return"undefined"!=typeof
a}function t(a){return null!=a&&"object"==typeof a}function
u(a){return"string"==typeof a}function v(a){return"number"==typeof a}function
w(a){return"[object Date]"==hd.apply(a)}function x(a){return"[object
Array]"==hd.apply(a)}function y(a){return"function"==typeof a}function
z(a){return"[object RegExp]"==hd.apply(a)}function A(a){return
a&&a.document&&a.location&&a.alert&&a.setInterval}function B(a){return
a&&a.$evalAsync&&a.$watch}function C(a){return"[object
File]"===hd.apply(a)}function D(a){return
a&&(a.nodeName||a.on&&a.find)}function E(a,b,c){var d=[];return
f(a,function(a,e,f){d.push(b.call(c,a,e,f))}),d}function
F(a,b){return-1!=G(a,b)}function G(a,b){if(a.indexOf)return
a.indexOf(b);for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1}function
H(a,b){var c=G(a,b);return c>=0&&a.splice(c,1),b}function
I(a,b){if(A(a)||B(a))throw id("cpws","Can't copy! Making copies of Window or
Scope instances is not supported.");if(b){if(a===b)throw id("cpi","Can't copy!
Source and destination are identical.");if(x(a)){b.length=0;for(var
c=0;c<a.length;c++)b.push(I(a[c]))}else{var
d=b.$$hashKey;f(b,function(a,c){delete b[c]});for(var e in
a)b[e]=I(a[e]);k(b,d)}}else b=a,a&&(x(a)?b=I(a,[]):w(a)?b=new
Date(a.getTime()):z(a)?b=new RegExp(a.source):t(a)&&(b=I(a,{})));return
b}function J(a,b){b=b||{};for(var c in
a)a.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(b[c]=a[c]);return b}function K(a
,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;
var d,e,f,g=typeof a,h=typeof b;if(g==h&&"object"==g){if(!x(a)){if(w(a))return
w(b)&&a.getTime()==b.getTime();if(z(a)&&z(b))return
a.toString()==b.toString();if(B(a)||B(b)||A(a)||A(b)||x(b))return!1;f={};for(e
in a)if("$"!==e.charAt(0)&&!y(a[e])){if(!K(a[e],b[e]))return!1;f[e]=!0}for(e
in b)if(!f.hasOwnProperty(e)&&"$"!==e.charAt(0)&&b[e]!==c&&!y(b[e]))return!1;r
eturn!0}if(!x(b))return!1;if((d=a.length)==b.length){for(e=0;d>e;e++)if(!K(a[e
],b[e]))return!1;return!0}}return!1}function L(a,b,c){return
a.concat(fd.call(b,c))}function M(a,b){return fd.call(a,b||0)}function
N(a,b){var c=arguments.length>2?M(arguments,2):[];return!y(b)||b instanceof
RegExp?b:c.length?function(){return arguments.length?b.apply(a,c.concat(fd.cal
l(arguments,0))):b.apply(a,c)}:function(){return
arguments.length?b.apply(a,arguments):b.call(a)}}function O(a,d){var
e=d;return"string"==typeof a&&"$"===a.charAt(0)?e=c:A(d)?e="$WINDOW":d&&b===d?
e="$DOCUMENT":B(d)&&(e="$SCOPE"),e}function P(a,b){return"undefined"==typeof
a?c:JSON.stringify(a,O,b?"  ":null)}function Q(a){return
u(a)?JSON.parse(a):a}function R(a){if(a&&0!==a.length){var
b=Yc(""+a);a=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)}else
a=!1;return a}function S(a){a=bd(a).clone();try{a.html("")}catch(b){}var
c=3,d=bd("<div>").append(a).html();try{return a[0].nodeType===c?Yc(d):d.match(
/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Yc(b)})}catch(b
){return Yc(d)}}function T(a){try{return
decodeURIComponent(a)}catch(b){}}function U(a){var b,c,d={};return
f((a||"").split("&"),function(a){if(a&&(b=a.split("="),c=T(b[0]),s(c))){var e=
s(b[1])?T(b[1]):!0;d[c]?x(d[c])?d[c].push(e):d[c]=[d[c],e]:d[c]=e}}),d}functio
n V(a){var b=[];return f(a,function(a,c){x(a)?f(a,function(a){b.push(X(c,!0)+(
a===!0?"":"="+X(a,!0)))}):b.push(X(c,!0)+(a===!0?"":"="+X(a,!0)))}),b.length?b
.join("&"):""}function W(a){return X(a,!0).replace(/%26/gi,"&").replace(/%3D/g
i,"=").replace(/%2B/gi,"+")}function X(a,b){return encodeURIComponent(a).repla
ce(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").
replace(/%20/g,b?"%20":"+")}function Y(a,c){function d(a){a&&h.push(a)}var
e,g,h=[a],i=["ng:app","ng-app","x-ng-app","data-ng-app"],j=/\sng[:\-]app(:\s*(
[\w\d_]+);?)?\s/;f(i,function(c){i[c]=!0,d(b.getElementById(c)),c=c.replace(":
","\\:"),a.querySelectorAll&&(f(a.querySelectorAll("."+c),d),f(a.querySelector
All("."+c+"\\:"),d),f(a.querySelectorAll("["+c+"]"),d))}),f(h,function(a){if(!
e){var b=" "+a.className+" ",c=j.exec(b);c?(e=a,g=(c[2]||"").replace(/\s+/g,",
")):f(a.attributes,function(b){!e&&i[b.name]&&(e=a,g=b.value)})}}),e&&c(e,g?[g
]:[])}function Z(c,d){var e=function(){if(c=bd(c),c.injector()){var
a=c[0]===b?"document":S(c);throw id("btstrpd","App Already Bootstrapped with
this Element '{0}'",a)}d=d||[],d.unshift(["$provide",function(a){a.value("$roo
tElement",c)}]),d.unshift("ng");var e=Bb(d);return e.invoke(["$rootScope","$ro
otElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(func
tion(){b.data("$injector",d),c(b)(a)}),e.enabled(!0)}]),e},g=/^NG_DEFER_BOOTST
RAP!/;return a&&!g.test(a.name)?e():(a.name=a.name.replace(g,""),jd.resumeBoot
strap=function(a){f(a,function(a){d.push(a)}),e()},void 0)}function
$(a,b){return
b=b||"_",a.replace(md,function(a,c){return(c?b:"")+a.toLowerCase()})}function 
_(){cd=a.jQuery,cd?(bd=cd,l(cd.fn,{scope:wd.scope,controller:wd.controller,inj
ector:wd.injector,inheritedData:wd.inheritedData}),ib("remove",!0,!0,!1),ib("e
mpty",!1,!1,!1),ib("html",!1,!1,!0)):bd=jb,jd.element=bd}function
ab(a,b,c){if(!a)throw id("areq","Argument '{0}' is
{1}",b||"?",c||"required");return a}function bb(a,b,c){return
c&&x(a)&&(a=a[a.length-1]),ab(y(a),b,"not a function, got
"+(a&&"object"==typeof a?a.constructor.name||"Object":typeof a)),a}function
cb(a,b){if("hasOwnProperty"===a)throw id("badname","hasOwnProperty is not a
valid {0} name",b)}function db(a,b,c){if(!b)return a;for(var d,e=b.split("."),
f=a,g=e.length,h=0;g>h;h++)d=e[h],a&&(a=(f=a)[d]);return!c&&y(a)?N(f,a):a}func
tion eb(a){function b(a,b,c){return a[b]||(a[b]=c())}var
c=d("$injector");return b(b(a,"angular",Object),"module",function(){var
a={};return function(d,e,f){return
cb(d,"module"),e&&a.hasOwnProperty(d)&&(a[d]=null),b(a,d,function(){function
a(a,c,d){return function(){return b[d||"push"]([a,c,arguments]),i}}if(!e)throw
c("nomod","Module '{0}' is not available! You either misspelled the module
name or forgot to load it. If registering a module ensure that you specify the
dependencies as the second argument.",d);var b=[],g=[],h=a("$injector","invoke
"),i={_invokeQueue:b,_runBlocks:g,requires:e,name:d,provider:a("$provide","pro
vider"),factory:a("$provide","factory"),service:a("$provide","service"),value:
a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a(
"$animateProvider","register"),filter:a("$filterProvider","register"),controll
er:a("$controllerProvider","register"),directive:a("$compileProvider","directi
ve"),config:h,run:function(a){return g.push(a),this}};return
f&&h(f),i})}})}function fb(b){l(b,{bootstrap:Z,copy:I,extend:l,equals:K,elemen
t:bd,forEach:f,injector:Bb,noop:o,bind:N,toJson:P,fromJson:Q,identity:p,isUnde
fined:r,isDefined:s,isString:u,isFunction:y,isObject:t,isNumber:v,isElement:D,
isArray:x,$$minErr:d,version:nd,isDate:w,lowercase:Yc,uppercase:Zc,callbacks:{
counter:0}}),dd=eb(a);try{dd("ngLocale")}catch(c){dd("ngLocale",[]).provider("
$locale",Vb)}dd("ng",["ngLocale"],["$provide",function(a){a.provider("$compile
",Hb).directive({a:de,input:ne,textarea:ne,form:he,script:We,select:Ze,style:_
e,option:$e,ngBind:ze,ngBindHtml:Be,ngBindTemplate:Ae,ngClass:Ce,ngClassEven:E
e,ngClassOdd:De,ngCsp:He,ngCloak:Fe,ngController:Ge,ngForm:ie,ngHide:Qe,ngIf:J
e,ngInclude:Ke,ngInit:Le,ngNonBindable:Me,ngPluralize:Ne,ngRepeat:Oe,ngShow:Pe
,ngStyle:Re,ngSwitch:Se,ngSwitchWhen:Te,ngSwitchDefault:Ue,ngOptions:Ye,ngTran
sclude:Ve,ngModel:te,ngList:we,ngChange:ue,required:ve,ngRequired:ve,ngValue:y
e}).directive(ee).directive(Ie),a.provider({$anchorScroll:Cb,$animate:Fd,$brow
ser:Eb,$cacheFactory:Fb,$controller:Jb,$document:Kb,$exceptionHandler:Lb,$filt
er:Bc,$interpolate:Tb,$interval:Ub,$http:Qb,$httpBackend:Rb,$location:gc,$log:
hc,$parse:nc,$rootScope:qc,$q:oc,$sce:vc,$sceDelegate:uc,$sniffer:wc,$template
Cache:Gb,$timeout:xc,$window:Ac})}])}function gb(){return++qd}function
hb(a){return a.replace(td,function(a,b,c,d){return
d?c.toUpperCase():c}).replace(ud,"Moz$1")}function ib(a,b,c,d){function
e(a){var e,g,h,i,j,k,l,m=c&&a?[this.filter(a)]:[this],n=b;if(!d||null!=a)for(;
m.length;)for(e=m.shift(),g=0,h=e.length;h>g;g++)for(i=bd(e[g]),n?i.triggerHan
dler("$destroy"):n=!n,j=0,k=(l=i.children()).length;k>j;j++)m.push(cd(l[j]));r
eturn f.apply(this,arguments)}var
f=cd.fn[a];f=f.$original||f,e.$original=f,cd.fn[a]=e}function jb(a){if(a
instanceof jb)return a;if(!(this instanceof
jb)){if(u(a)&&"<"!=a.charAt(0))throw vd("nosel","Looking up elements via
selectors is not supported by jqLite! See:
http://docs.angularjs.org/api/angular.element");return new jb(a)}if(u(a)){var 
c=b.createElement("div");c.innerHTML="<div>&#160;</div>"+a,c.removeChild(c.fir
stChild),tb(this,c.childNodes);var
d=bd(b.createDocumentFragment());d.append(this)}else tb(this,a)}function
kb(a){return a.cloneNode(!0)}function lb(a){nb(a);for(var
b=0,c=a.childNodes||[];b<c.length;b++)lb(c[b])}function
mb(a,b,c,d){if(s(d))throw vd("offargs","jqLite#off() does not support the
`selector` argument");var
e=ob(a,"events"),g=ob(a,"handle");g&&(r(b)?f(e,function(b,c){sd(a,c,b),delete
e[c]}):f(b.split(" "),function(b){r(c)?(sd(a,b,e[b]),delete
e[b]):H(e[b]||[],c)}))}function nb(a,b){var d=a[pd],e=od[d];if(e){if(b)return
delete od[d].data[b],void
0;e.handle&&(e.events.$destroy&&e.handle({},"$destroy"),mb(a)),delete
od[d],a[pd]=c}}function ob(a,b,c){var d=a[pd],e=od[d||-1];return
s(c)?(e||(a[pd]=d=gb(),e=od[d]={}),e[b]=c,void 0):e&&e[b]}function
pb(a,b,c){var d=ob(a,"data"),e=s(c),f=!e&&s(b),g=f&&!t(b);if(d||g||ob(a,"data"
,d={}),e)d[b]=c;else{if(!f)return d;if(g)return d&&d[b];l(d,b)}}function
qb(a,b){return a.getAttribute?(" "+(a.getAttribute("class")||"")+"
").replace(/[\n\t]/g," ").indexOf(" "+b+" ")>-1:!1}function
rb(a,b){b&&a.setAttribute&&f(b.split("
"),function(b){a.setAttribute("class",ld((" "+(a.getAttribute("class")||"")+"
").replace(/[\n\t]/g," ").replace(" "+ld(b)+" "," ")))})}function
sb(a,b){if(b&&a.setAttribute){var c=(" "+(a.getAttribute("class")||"")+"
").replace(/[\n\t]/g," ");f(b.split(" "),function(a){a=ld(a),-1===c.indexOf("
"+a+" ")&&(c+=a+" ")}),a.setAttribute("class",ld(c))}}function
tb(a,b){if(b){b=b.nodeName||!s(b.length)||A(b)?[b]:b;for(var
c=0;c<b.length;c++)a.push(b[c])}}function ub(a,b){return
vb(a,"$"+(b||"ngController")+"Controller")}function vb(a,b,d){for(a=bd(a),9==a
[0].nodeType&&(a=a.find("html"));a.length;){if((d=a.data(b))!==c)return
d;a=a.parent()}}function wb(a,b){var c=xd[b.toLowerCase()];return
c&&yd[a.nodeName]&&c}function xb(a,c){var d=function(d,e){if(d.preventDefault|
|(d.preventDefault=function(){d.returnValue=!1}),d.stopPropagation||(d.stopPro
pagation=function(){d.cancelBubble=!0}),d.target||(d.target=d.srcElement||b),r
(d.defaultPrevented)){var g=d.preventDefault;d.preventDefault=function(){d.def
aultPrevented=!0,g.call(d)},d.defaultPrevented=!1}d.isDefaultPrevented=functio
n(){return d.defaultPrevented||0==d.returnValue},f(c[e||d.type],function(b){b.
call(a,d)}),8>=ad?(d.preventDefault=null,d.stopPropagation=null,d.isDefaultPre
vented=null):(delete d.preventDefault,delete d.stopPropagation,delete
d.isDefaultPrevented) };return d.elem=a,d}function yb(a){var b,d=typeof a;retu
rn"object"==d&&null!==a?"function"==typeof(b=a.$$hashKey)?b=a.$$hashKey():b===
c&&(b=a.$$hashKey=j()):b=a,d+":"+b}function zb(a){f(a,this.put,this)}function
Ab(a){var b,c,d,e;return"function"==typeof a?(b=a.$inject)||(b=[],a.length&&(c
=a.toString().replace(Cd,""),d=c.match(zd),f(d[1].split(Ad),function(a){a.repl
ace(Bd,function(a,c,d){b.push(d)})})),a.$inject=b):x(a)?(e=a.length-1,bb(a[e],
"fn"),b=a.slice(0,e)):bb(a,"fn",!0),b}function Bb(a){function b(a){return
function(b,c){return t(b)?(f(b,i(a)),void 0):a(b,c)}}function
c(a,b){if(cb(a,"service"),(y(b)||x(b))&&(b=v.instantiate(b)),!b.$get)throw
Dd("pget","Provider '{0}' must define $get factory method.",a);return
s[a+n]=b}function d(a,b){return c(a,{$get:b})}function e(a,b){return
d(a,["$injector",function(a){return a.instantiate(b)}])}function g(a,b){return
d(a,q(b))}function h(a,b){cb(a,"constant"),s[a]=b,w[a]=b}function j(a,b){var
c=v.get(a+n),d=c.$get;c.$get=function(){var a=z.invoke(d,c);return
z.invoke(b,null,{$delegate:a})}}function k(a){var b=[];return
f(a,function(a){if(!r.get(a)){r.put(a,!0);try{if(u(a)){var
c=dd(a);b=b.concat(k(c.requires)).concat(c._runBlocks);for(var
d=c._invokeQueue,e=0,f=d.length;f>e;e++){var
g=d[e],h=v.get(g[0]);h[g[1]].apply(h,g[2])}}else y(a)?b.push(v.invoke(a)):x(a)
?b.push(v.invoke(a)):bb(a,"module")}catch(i){throw x(a)&&(a=a[a.length-1]),i.m
essage&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),Dd
("modulerr","Failed to instantiate module {0} due
to:\n{1}",a,i.stack||i.message||i)}}}),b}function l(a,b){function
c(c){if(a.hasOwnProperty(c)){if(a[c]===m)throw Dd("cdep","Circular dependency
found: {0}",p.join(" <- "));return a[c]}try{return
p.unshift(c),a[c]=m,a[c]=b(c)}finally{p.shift()}}function d(a,b,d){var
e,f,g,h=[],i=Ab(a);for(f=0,e=i.length;e>f;f++){if(g=i[f],"string"!=typeof
g)throw Dd("itkn","Incorrect injection token! Expected service name as string,
got {0}",g);h.push(d&&d.hasOwnProperty(g)?d[g]:c(g))}switch(a.$inject||(a=a[e]
),b?-1:h.length){case 0:return a();case 1:return a(h[0]);case 2:return
a(h[0],h[1]);case 3:return a(h[0],h[1],h[2]);case 4:return
a(h[0],h[1],h[2],h[3]);case 5:return a(h[0],h[1],h[2],h[3],h[4]);case 6:return
a(h[0],h[1],h[2],h[3],h[4],h[5]);case 7:return
a(h[0],h[1],h[2],h[3],h[4],h[5],h[6]);case 8:return
a(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7]);case 9:return
a(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]);case 10:return
a(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9]);default:return
a.apply(b,h)}}function e(a,b){var c,e,f=function(){};return
f.prototype=(x(a)?a[a.length-1]:a).prototype,c=new f,e=d(a,c,b),t(e)?e:c}retur
n{invoke:d,instantiate:e,get:c,annotate:Ab,has:function(b){return
s.hasOwnProperty(b+n)||a.hasOwnProperty(b)}}}var m={},n="Provider",p=[],r=new 
zb,s={$provide:{provider:b(c),factory:b(d),service:b(e),value:b(g),constant:b(
h),decorator:j}},v=s.$injector=l(s,function(){throw Dd("unpr","Unknown
provider: {0}",p.join(" <- "))}),w={},z=w.$injector=l(w,function(a){var
b=v.get(a+n);return z.invoke(b.$get,b)});return
f(k(a),function(a){z.invoke(a||o)}),z}function Cb(){var a=!0;this.disableAutoS
crolling=function(){a=!1},this.$get=["$window","$location","$rootScope",functi
on(b,c,d){function e(a){var b=null;return
f(a,function(a){b||"a"!==Yc(a.nodeName)||(b=a)}),b}function g(){var a,d=c.hash
();d?(a=h.getElementById(d))?a.scrollIntoView():(a=e(h.getElementsByName(d)))?
a.scrollIntoView():"top"===d&&b.scrollTo(0,0):b.scrollTo(0,0)}var
h=b.document;return a&&d.$watch(function(){return
c.hash()},function(){d.$evalAsync(g)}),g}]}function Db(a,b,d,e){function g(a){
try{a.apply(null,M(arguments,1))}finally{if(s--,0===s)for(;t.length;)try{t.pop
()()}catch(b){d.error(b)}}}function h(a,b){!function
c(){f(w,function(a){a()}),v=b(c,a)}()}function
i(){z=null,x!=j.url()&&(x=j.url(),f(A,function(a){a(j.url())}))}var j=this,k=b
[0],l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,q={};j.isMock=!1;
var s=0,t=[];j.$$completeOutstandingRequest=g,j.$$incOutstandingRequestCount=f
unction(){s++},j.notifyWhenNoOutstandingRequests=function(a){f(w,function(a){a
()}),0===s?a():t.push(a)};var v,w=[];j.addPollFn=function(a){return
r(v)&&h(100,n),w.push(a),a};var x=l.href,y=b.find("base"),z=null;j.url=functio
n(b,c){if(l!==a.location&&(l=a.location),b){if(x==b)return;return x=b,e.histor
y?c?m.replaceState(null,"",b):(m.pushState(null,"",b),y.attr("href",y.attr("hr
ef"))):(z=b,c?l.replace(b):l.href=b),j}return
z||l.href.replace(/%27/g,"'")};var A=[],B=!1;j.onUrlChange=function(b){return 
B||(e.history&&bd(a).on("popstate",i),e.hashchange?bd(a).on("hashchange",i):j.
addPollFn(i),B=!0),A.push(b),b},j.baseHref=function(){var
a=y.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var
C={},D="",E=j.baseHref();j.cookies=function(a,b){var
e,f,g,h,i;if(!a){if(k.cookie!==D)for(D=k.cookie,f=D.split(";
"),C={},h=0;h<f.length;h++)if(g=f[h],i=g.indexOf("="),i>0){var a=unescape(g.su
bstring(0,i));C[a]===c&&(C[a]=unescape(g.substring(i+1)))}return
C}b===c?k.cookie=escape(a)+"=;path="+E+";expires=Thu, 01 Jan 1970 00:00:00 GMT
":u(b)&&(e=(k.cookie=escape(a)+"="+escape(b)+";path="+E).length+1,e>4096&&d.wa
rn("Cookie '"+a+"' possibly not set or overflowed because it was too large
("+e+" > 4096 bytes)!"))},j.defer=function(a,b){var c;return
s++,c=n(function(){delete
q[c],g(a)},b||0),q[c]=!0,c},j.defer.cancel=function(a){return q[a]?(delete
q[a],p(a),g(o),!0):!1}}function Eb(){this.$get=["$window","$log","$sniffer","$
document",function(a,b,c,d){return new Db(a,d,b,c)}]}function
Fb(){this.$get=function(){function a(a,c){function
e(a){a!=m&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,m),m=a,m.n=null)}function
f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw
d("$cacheFactory")("iid","CacheId '{0}' is already taken!",a);var g=0,h=l({},c
,{id:a}),i={},j=c&&c.capacity||Number.MAX_VALUE,k={},m=null,n=null;return
b[a]={put:function(a,b){var c=k[a]||(k[a]={key:a});return e(c),r(b)?void 0:(a
in i||g++,i[a]=b,g>j&&this.remove(n.key),b)},get:function(a){var
b=k[a];if(b)return e(b),i[a]},remove:function(a){var
b=k[a];b&&(b==m&&(m=b.p),b==n&&(n=b.n),f(b.n,b.p),delete k[a],delete i[a],g--)
},removeAll:function(){i={},g=0,k={},m=n=null},destroy:function(){i=null,h=nul
l,k=null,delete b[a]},info:function(){return l({},h,{size:g})}}}var
b={};return a.info=function(){var a={};return
f(b,function(b,c){a[c]=b.info()}),a},a.get=function(a){return
b[a]},a}}function Gb(){this.$get=["$cacheFactory",function(a){return
a("templates")}]}function Hb(a){var d={},e="Directive",g=/^\s*directive\:\s*([
\d\w\-_]+)\s+(.*)$/,h=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,j=/^\s*(https?|ftp|mail
to|tel|file):/,k=/^\s*(https?|ftp|file):|data:image\//,m=/^(on[a-z]+|formactio
n)$/;this.directive=function o(b,c){return cb(b,"directive"),u(b)?(ab(c,"direc
tiveFactory"),d.hasOwnProperty(b)||(d[b]=[],a.factory(b+e,["$injector","$excep
tionHandler",function(a,c){var e=[];return f(d[b],function(d,f){try{var g=a.in
voke(d);y(g)?g={compile:q(g)}:!g.compile&&g.link&&(g.compile=q(g.link)),g.prio
rity=g.priority||0,g.index=f,g.name=g.name||b,g.require=g.require||g.controlle
r&&g.name,g.restrict=g.restrict||"A",e.push(g)}catch(h){c(h)}}),e}])),d[b].pus
h(c)):f(b,i(o)),this},this.aHrefSanitizationWhitelist=function(a){return
s(a)?(j=a,this):j},this.imgSrcSanitizationWhitelist=function(a){return s(a)?(k
=a,this):k},this.$get=["$injector","$interpolate","$exceptionHandler","$http",
"$templateCache","$parse","$controller","$rootScope","$document","$sce","$anim
ate",function(a,i,o,r,s,v,w,z,A,B,C){function D(a,b,c,d,e){a instanceof bd||(a
=bd(a)),f(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=b=bd(
b).wrap("<span></span>").parent()[0])});var g=F(a,b,a,c,d,e);return
function(b,c){ab(b,"scope");for(var
d=c?wd.clone.call(a):a,e=0,f=d.length;f>e;e++){var
h=d[e];(1==h.nodeType||9==h.nodeType)&&d.eq(e).data("$scope",b)}return E(d
,"ng-scope"),c&&c(d,b),g&&g(b,d,d),d}}function
E(a,b){try{a.addClass(b)}catch(c){}}function F(a,b,d,e,f,g){function
h(a,d,e,f){var g,h,i,j,k,l,m,o,p=[];for(l=0,m=d.length;m>l;l++)p.push(d[l]);fo
r(l=0,o=0,m=n.length;m>l;o++)i=p[o],g=n[l++],h=n[l++],g?(g.scope?(j=a.$new(t(g
.scope)),bd(i).data("$scope",j)):j=a,k=g.transclude,k||!f&&b?g(h,j,i,e,functio
n(b){return function(c){var d=a.$new();return d.$$transcluded=!0,b(d,c).on("$d
estroy",N(d,d.$destroy))}}(k||b)):g(h,j,i,c,f)):h&&h(a,i.childNodes,c,f)}for(v
ar i,j,k,l,m,n=[],o=0;o<a.length;o++)l=new X,k=G(a[o],[],l,0==o?e:c,f),i=k.len
gth?K(k,a[o],l,b,d,null,[],[],g):null,j=i&&i.terminal||!a[o].childNodes||!a[o]
.childNodes.length?null:F(a[o].childNodes,i?i.transclude:b),n.push(i),n.push(j
),m=m||i||j,g=null;return m?h:null}function G(a,b,c,d,e){var
f,i,j=a.nodeType,k=c.$attr;switch(j){case
1:L(b,Ib(ed(a).toLowerCase()),"E",d,e);for(var
l,m,n,o,p,q=a.attributes,r=0,s=q&&q.length;s>r;r++){var t=!1,v=!1;if(l=q[r],!a
d||ad>=8||l.specified){m=l.name,o=Ib(m),bb.test(o)&&(m=$(o.substr(6),"-"));var
w=o.replace(/(Start|End)$/,"");o===w+"Start"&&(t=m,v=m.substr(0,m.length-5)+"e
nd",m=m.substr(0,m.length-6)),n=Ib(m.toLowerCase()),k[n]=m,c[n]=p=ld(ad&&"href
"==m?decodeURIComponent(a.getAttribute(m,2)):l.value),wb(a,n)&&(c[n]=!0),V(a,b
,p,n),L(b,n,"A",d,e,t,v)}}if(i=a.className,u(i)&&""!==i)for(;f=h.exec(i);)n=Ib
(f[2]),L(b,n,"C",d,e)&&(c[n]=ld(f[3])),i=i.substr(f.index+f[0].length);break;c
ase 3:T(b,a.nodeValue);break;case 8:try{f=g.exec(a.nodeValue),f&&(n=Ib(f[1]),L
(b,n,"M",d,e)&&(c[n]=ld(f[2])))}catch(x){}}return b.sort(Q),b}function
H(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw
Gd("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.
",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--),d.push(a
),a=a.nextSibling}while(e>0)}else d.push(a);return bd(d)}function
I(a,b,c){return function(d,e,f,g){return e=H(e[0],b,c),a(d,e,f,g)}}function
K(a,d,e,g,h,j,k,l,m){function n(a,b,c,d){a&&(c&&(a=I(a,c,d)),a.require=s.requi
re,k.push(a)),b&&(c&&(b=I(b,c,d)),b.require=s.require,l.push(b))}function
p(a,b){var c,d="data",e=!1;if(u(a)){for(;"^"==(c=a.charAt(0))||"?"==c;)a=a.sub
str(1),"^"==c&&(d="inheritedData"),e=e||"?"==c;if(c=b[d]("$"+a+"Controller"),8
==b[0].nodeType&&b[0].$$controller&&(c=c||b[0].$$controller,b[0].$$controller=
null),!c&&!e)throw Gd("ctreq","Controller '{0}', required by directive '{1}',
can't be found!",a,z);return c}return
x(a)&&(c=[],f(a,function(a){c.push(p(a,b))})),c}function q(a,b,g,h,j){var
m,n,q,r,s,t;if(m=d===g?e:J(e,new X(bd(g),e.$attr)),n=m.$$element,L){var
u=/^\s*([@=&])(\??)\s*(\w*)\s*$/,x=b.$parent||b;f(L.scope,function(a,c){var d,
e,f,g=a.match(u)||[],h=g[3]||c,j="?"==g[2],k=g[1];switch(b.$$isolateBindings[c
]=k+h,k){case"@":m.$observe(h,function(a){b[c]=a}),m.$$observers[h].$$scope=x,
m[h]&&(b[c]=i(m[h])(x));break;case"=":if(j&&!m[h])return;e=v(m[h]),f=e.assign|
|function(){throw d=b[c]=e(x),Gd("nonassign","Expression '{0}' used with
directive '{1}' is non-
assignable!",m[h],L.name)},d=b[c]=e(x),b.$watch(function(){var a=e(x);return a
!==b[c]&&(a!==d?d=b[c]=a:f(x,a=d=b[c])),a});break;case"&":e=v(m[h]),b[c]=funct
ion(a){return e(x,a)};break;default:throw Gd("iscp","Invalid isolate scope
definition for directive '{0}'. Definition: {... {1}: '{2}'
...}",L.name,c,a)}})}for(B&&f(B,function(a){var c,d={$scope:b,$element:n,$attr
s:m,$transclude:j};t=a.controller,"@"==t&&(t=m[a.name]),c=w(t,d),8==n[0].nodeT
ype?n[0].$$controller=c:n.data("$"+a.name+"Controller",c),a.controllerAs&&(d.$
scope[a.controllerAs]=c)}),q=0,r=k.length;r>q;q++)try{s=k[q],s(b,n,m,s.require
&&p(s.require,n))}catch(y){o(y,S(n))}for(a&&a(b,g.childNodes,c,j),q=l.length-1
;q>=0;q--)try{s=l[q],s(b,n,m,s.require&&p(s.require,n))}catch(y){o(y,S(n))}}m=
m||{};for(var r,s,z,A,B,C,F,K=-Number.MAX_VALUE,L=m.newIsolateScopeDirective,N
=m.templateDirective,Q=e.$$element=bd(d),T=m.transcludeDirective,U=j,V=g,Y=0,Z
=a.length;Z>Y;Y++){s=a[Y];var $=s.$$start,ab=s.$$end;if($&&(Q=H(d,$,ab)),A=c,K
>s.priority)break;if((F=s.scope)&&(r=r||s,s.templateUrl||(R("new/isolated
scope",L,s,Q),t(F)&&(E(Q,"ng-isolate-scope"),L=s),E(Q,"ng-scope"))),z=s.name,!
s.templateUrl&&s.controller&&(F=s.controller,B=B||{},R("'"+z+"' controller",B[
z],s,Q),B[z]=s),(F=s.transclude)&&("ngRepeat"!==z&&(R("transclusion",T,s,Q),T=
s),"element"==F?(K=s.priority,A=H(d,$,ab),Q=e.$$element=bd(b.createComment("
"+z+": "+e[z]+" ")),d=Q[0],W(h,bd(M(A)),d),V=D(A,g,K,U&&U.name,{newIsolateScop
eDirective:L,transcludeDirective:T,templateDirective:N})):(A=bd(kb(d)).content
s(),Q.html(""),V=D(A,g))),s.template)if(R("template",N,s,Q),N=s,F=y(s.template
)?s.template(Q,e):s.template,F=_(F),s.replace){if(U=s,A=bd("<div>"+ld(F)+"</di
v>").contents(),d=A[0],1!=A.length||1!==d.nodeType)throw Gd("tplrt","Template
for directive '{0}' must have exactly one root element.
{1}",z,"");W(h,Q,d);var bb={$attr:{}};a=a.concat(G(d,a.splice(Y+1,a.length-(Y+
1)),bb)),O(e,bb),Z=a.length}else Q.html(F);if(s.templateUrl)R("template",N,s,Q
),N=s,s.replace&&(U=s),q=P(a.splice(Y,a.length-Y),Q,e,h,V,k,l,{newIsolateScope
Directive:L,transcludeDirective:T,templateDirective:N}),Z=a.length;else if(s.c
ompile)try{C=s.compile(Q,e,V),y(C)?n(null,C,$,ab):C&&n(C.pre,C.post,$,ab)}catc
h(cb){o(cb,S(Q))}s.terminal&&(q.terminal=!0,K=Math.max(K,s.priority))}return
q.scope=r&&r.scope,q.transclude=T&&V,q}function
L(b,f,g,h,i,j,k){if(f===i)return null;var
l=null;if(d.hasOwnProperty(f))for(var m,p=a.get(f+e),q=0,r=p.length;r>q;q++)tr
y{m=p[q],(h===c||h>m.priority)&&-1!=m.restrict.indexOf(g)&&(j&&(m=n(m,{$$start
:j,$$end:k})),b.push(m),l=m)}catch(s){o(s)}return l}function O(a,b){var c=b.$a
ttr,d=a.$attr,e=a.$$element;f(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("s
tyle"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))}),f(b,function(b,f){"class"==f?(
E(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?e.attr("style",
e.attr("style")+";"+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f
])})}function P(a,b,c,d,e,g,h,i){var j,k,m=[],n=b[0],o=a.shift(),p=l({},o,{tem
plateUrl:null,transclude:null,replace:null}),q=y(o.templateUrl)?o.templateUrl(
b,c):o.templateUrl;return
b.html(""),r.get(B.getTrustedResourceUrl(q),{cache:s}).success(function(l){var
r,s,t;if(l=_(l),o.replace){if(t=bd("<div>"+ld(l)+"</div>").contents(),r=t[0],1
!=t.length||1!==r.nodeType)throw Gd("tplrt","Template for directive '{0}' must
have exactly one root element.
{1}",o.name,q);s={$attr:{}},W(d,b,r),G(r,a,s),O(c,s)}else r=n,b.html(l);for(a.
unshift(p),j=K(a,r,c,e,b,o,g,h,i),f(d,function(a,c){a==r&&(d[c]=b[0])}),k=F(b[
0].childNodes,e);m.length;){var u=m.shift(),v=m.shift(),w=m.shift(),x=m.shift(
),y=b[0];v!==n&&(y=kb(r),W(w,bd(v),y)),j(k,u,y,d,x)}m=null}).error(function(a,
b,c,d){throw Gd("tpload","Failed to load template: {0}",d.url)}),function(a,b,
c,d,e){m?(m.push(b),m.push(c),m.push(d),m.push(e)):j(k,b,c,d,e)}}function
Q(a,b){var c=b.priority-a.priority;return
0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function
R(a,b,c,d){if(b)throw Gd("multidir","Multiple directives [{0}, {1}] asking for
{2} on: {3}",b.name,c.name,a,S(d))}function T(a,b){var
c=i(b,!0);c&&a.push({priority:0,compile:q(function(a,b){var
d=b.parent(),e=d.data("$binding")||[];e.push(c),E(d.data("$binding",e),"ng-
binding"),a.$watch(c,function(a){b[0].nodeValue=a})})})}function U(a,b){return
"xlinkHref"==b||"IMG"!=ed(a)&&("src"==b||"ngSrc"==b)?B.RESOURCE_URL:void
0}function V(a,b,c,d){var
e=i(c,!0);if(e){if("multiple"===d&&"SELECT"===ed(a))throw
Gd("selmulti","Binding to the 'multiple' attribute is not supported. Element:
{0}",S(a));b.push({priority:-100,compile:q(function(b,c,f){var
g=f.$$observers||(f.$$observers={});if(m.test(d))throw
Gd("nodomevents","Interpolations for HTML DOM event attributes are disallowed.
Please use the ng- versions (such as ng-click instead of onclick) instead.");e
=i(f[d],!0,U(a,d)),e&&(f[d]=e(b),(g[d]||(g[d]=[])).$$inter=!0,(f.$$observers&&
f.$$observers[d].$$scope||b).$watch(e,function(a){f.$set(d,a)}))})})}}function
W(a,c,d){var e,f,g=c[0],h=c.length,i=g.parentNode;if(a)for(e=0,f=a.length;f>e;
e++)if(a[e]==g){a[e++]=d;for(var
j=e,k=j+h-1,l=a.length;l>j;j++,k++)l>k?a[j]=a[k]:delete
a[j];a.length-=h-1;break}i&&i.replaceChild(d,g);var m=b.createDocumentFragment
();m.appendChild(g),d[bd.expando]=g[bd.expando];for(var
n=1,o=c.length;o>n;n++){var p=c[n];bd(p).remove(),m.appendChild(p),delete
c[n]}c[0]=d,c.length=1}var X=function(a,b){this.$$element=a,this.$attr=b||{}};
X.prototype={$normalize:Ib,$addClass:function(a){a&&a.length>0&&C.addClass(thi
s.$$element,a)},$removeClass:function(a){a&&a.length>0&&C.removeClass(this.$$e
lement,a)},$set:function(a,b,d,e){function g(a,b){var
c=[],d=a.split(/\s+/),e=b.split(/\s+/);a:for(var f=0;f<d.length;f++){for(var
g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c.push(g)}return
c}if("class"==a){b=b||"";var
h=this.$$element.attr("class")||"";this.$removeClass(g(h,b).join("
")),this.$addClass(g(b,h).join(" "))}else{var i,l,m=wb(this.$$element[0],a);m&
&(this.$$element.prop(a,b),e=m),this[a]=b,e?this.$attr[a]=e:(e=this.$attr[a],e
||(this.$attr[a]=e=$(a,"-"))),l=ed(this.$$element),("A"===l&&"href"===a||"IMG"
===l&&"src"===a)&&(!ad||ad>=8)&&(i=yc(b).href,""!==i&&("href"===a&&!i.match(j)
||"src"===a&&!i.match(k))&&(this[a]=b="unsafe:"+i)),d!==!1&&(null===b||b===c?t
his.$$element.removeAttr(e):this.$$element.attr(e,b))}var n=this.$$observers;n
&&f(n[a],function(a){try{a(b)}catch(c){o(c)}})},$observe:function(a,b){var
c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);return
e.push(b),z.$evalAsync(function(){e.$$inter||b(c[a])}),b}};var
Y=i.startSymbol(),Z=i.endSymbol(),_="{{"==Y||"}}"==Z?p:function(a){return
a.replace(/\{\{/g,Y).replace(/}}/g,Z)},bb=/^ngAttr[A-Z]/;return D}]}function
Ib(a){return hb(a.replace(Hd,""))}function Jb(){var a={},b=/^(\S+)(\s+as\s+(\w
+))?$/;this.register=function(b,c){cb(b,"controller"),t(b)?l(a,b):a[b]=c},this
.$get=["$injector","$window",function(c,e){return function(f,g){var h,i,j,k;if
(u(f)&&(i=f.match(b),j=i[1],k=i[3],f=a.hasOwnProperty(j)?a[j]:db(g.$scope,j,!0
)||db(e,j,!0),bb(f,j,!0)),h=c.instantiate(f,g),k){if(!g||"object"!=typeof
g.$scope)throw d("$controller")("noscp","Cannot export controller '{0}' as
'{1}'! No $scope object provided via
`locals`.",j||f.name,k);g.$scope[k]=h}return h}}]}function
Kb(){this.$get=["$window",function(a){return bd(a.document)}]}function
Lb(){this.$get=["$log",function(a){return
function(){a.error.apply(a,arguments)}}]}function Mb(a){var b,c,d,e={};return 
a?(f(a.split("\n"),function(a){d=a.indexOf(":"),b=Yc(ld(a.substr(0,d))),c=ld(a
.substr(d+1)),b&&(e[b]?e[b]+=", "+c:e[b]=c)}),e):e}function Nb(a){var
b=t(a)?a:c;return function(c){return b||(b=Mb(a)),c?b[Yc(c)]||null:b}}function
Ob(a,b,c){return y(c)?c(a,b):(f(c,function(c){a=c(a,b)}),a)}function
Pb(a){return a>=200&&300>a}function Qb(){var
a=/^\s*(\[|\{[^\{])/,b=/[\}\]]\s*$/,d=/^\)\]\}',?\n/,e={"Content-Type":"applic
ation/json;charset=utf-8"},g=this.defaults={transformResponse:[function(c){ret
urn u(c)&&(c=c.replace(d,""),a.test(c)&&b.test(c)&&(c=Q(c))),c}],transformRequ
est:[function(a){return
t(a)&&!C(a)?P(a):a}],headers:{common:{Accept:"application/json, text/plain,
*/*"},post:e,put:e,patch:e},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X
-XSRF-TOKEN"},i=this.interceptors=[],j=this.responseInterceptors=[];this.$get=
["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",funct
ion(a,b,d,e,k,m){function n(a){function d(a){var
b=l({},a,{data:Ob(a.data,a.headers,h.transformResponse)});return
Pb(a.status)?b:k.reject(b)}function e(a){function b(a){var
b;f(a,function(c,d){y(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})}var c,d,e,h=g.h
eaders,i=l({},a.headers);h=l({},h.common,h[Yc(a.method)]),b(h),b(i);a:for(c in
h){d=Yc(c);for(e in i)if(Yc(e)===d)continue a;i[c]=h[c]}return i}var h={transf
ormRequest:g.transformRequest,transformResponse:g.transformResponse},i=e(a);l(
h,a),h.headers=i,h.method=Zc(h.method);var j=zc(h.url)?b.cookies()[h.xsrfCooki
eName||g.xsrfCookieName]:c;j&&(i[h.xsrfHeaderName||g.xsrfHeaderName]=j);var
m=function(a){i=a.headers;var b=Ob(a.data,Nb(i),a.transformRequest);return
r(a.data)&&f(i,function(a,b){"content-type"===Yc(b)&&delete i[b]}),r(a.withCre
dentials)&&!r(g.withCredentials)&&(a.withCredentials=g.withCredentials),q(a,b,
i).then(d,d)},n=[m,c],o=k.when(h);for(f(z,function(a){(a.request||a.requestErr
or)&&n.unshift(a.request,a.requestError),(a.response||a.responseError)&&n.push
(a.response,a.responseError)});n.length;){var
p=n.shift(),s=n.shift();o=o.then(p,s)}return o.success=function(a){return o.th
en(function(b){a(b.data,b.status,b.headers,h)}),o},o.error=function(a){return
o.then(null,function(b){a(b.data,b.status,b.headers,h)}),o},o}function
o(){f(arguments,function(a){n[a]=function(b,c){return
n(l(c||{},{method:a,url:b}))}})}function
p(){f(arguments,function(a){n[a]=function(b,c,d){return
n(l(d||{},{method:a,url:b,data:c}))}})}function q(b,c,d){function f(a,b,c){j&&
(Pb(a)?j.put(p,[a,b,Mb(c)]):j.remove(p)),h(b,a,c),e.$$phase||e.$apply()}functi
on h(a,c,d){c=Math.max(c,0),(Pb(c)?m.resolve:m.reject)({data:a,status:c,header
s:Nb(d),config:b})}function i(){var
a=G(n.pendingRequests,b);-1!==a&&n.pendingRequests.splice(a,1)}var j,l,m=k.def
er(),o=m.promise,p=v(b.url,b.params);if(n.pendingRequests.push(b),o.then(i,i),
(b.cache||g.cache)&&b.cache!==!1&&"GET"==b.method&&(j=t(b.cache)?b.cache:t(g.c
ache)?g.cache:w),j)if(l=j.get(p),s(l)){if(l.then)return
l.then(i,i),l;x(l)?h(l[1],l[0],I(l[2])):h(l,200,{})}else j.put(p,o);return r(l
)&&a(b.method,p,c,f,d,b.timeout,b.withCredentials,b.responseType),o}function
v(a,b){if(!b)return a;var d=[];return h(b,function(a,b){null!=a&&a!=c&&(x(a)||
(a=[a]),f(a,function(a){t(a)&&(a=P(a)),d.push(X(b)+"="+X(a))}))}),a+(-1==a.ind
exOf("?")?"?":"&")+d.join("&")}var w=d("$http"),z=[];return
f(i,function(a){z.unshift(u(a)?m.get(a):m.invoke(a))}),f(j,function(a,b){var
c=u(a)?m.get(a):m.invoke(a);z.splice(b,0,{response:function(a){return
c(k.when(a))},responseError:function(a){return c(k.reject(a))}})}),n.pendingRe
quests=[],o("get","delete","head","jsonp"),p("post","put"),n.defaults=g,n}]}fu
nction Rb(){this.$get=["$browser","$window","$document",function(a,b,c){return
Sb(a,Id,a.defer,b.angular.callbacks,c[0],b.location.protocol.replace(":",""))}
]}function Sb(a,b,c,d,e,g){function h(a,b){var
c=e.createElement("script"),d=function(){e.body.removeChild(c),b&&b()};return 
c.type="text/javascript",c.src=a,ad?c.onreadystatechange=function(){/loaded|co
mplete/.test(c.readyState)&&d()}:c.onload=c.onerror=d,e.body.appendChild(c),d}
return function(e,i,j,k,l,m,n,p){function
q(){t=-1,v&&v(),w&&w.abort()}function r(b,d,e,f){var h=g||yc(i).protocol;x&&c.
cancel(x),v=w=null,d="file"==h?e?200:404:d,d=1223==d?204:d,b(d,e,f),a.$$comple
teOutstandingRequest(o)}var
t;if(a.$$incOutstandingRequestCount(),i=i||a.url(),"jsonp"==Yc(e)){var
u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a};var v=h(i.repla
ce("JSON_CALLBACK","angular.callbacks."+u),function(){d[u].data?r(k,200,d[u].d
ata):r(k,t||-2),delete d[u]})}else{var w=new b;w.open(e,i,!0),f(l,function(a,b
){s(a)&&w.setRequestHeader(b,a)}),w.onreadystatechange=function(){if(4==w.read
yState){var a=w.getAllResponseHeaders();r(k,t||w.status,w.responseType?w.respo
nse:w.responseText,a)}},n&&(w.withCredentials=!0),p&&(w.responseType=p),w.send
(j||null)}if(m>0)var x=c(q,m);else m&&m.then&&m.then(q)}}function Tb(){var
a="{{",b="}}";this.startSymbol=function(b){return
b?(a=b,this):a},this.endSymbol=function(a){return a?(b=a,this):b},this.$get=["
$parse","$exceptionHandler","$sce",function(d,e,f){function g(g,j,k){for(var l
,m,n,o,p=0,q=[],r=g.length,s=!1,t=[];r>p;)-1!=(l=g.indexOf(a,p))&&-1!=(m=g.ind
exOf(b,l+h))?(p!=l&&q.push(g.substring(p,l)),q.push(n=d(o=g.substring(l+h,m)))
,n.exp=o,p=m+i,s=!0):(p!=r&&q.push(g.substring(p)),p=r);if((r=q.length)||(q.pu
sh(""),r=1),k&&q.length>1)throw Jd("noconcat","Error while interpolating:
{0}\nStrict Contextual Escaping disallows interpolations that concatenate
multiple expressions when a trusted value is required.  See http://docs.angula
rjs.org/api/ng.$sce",g);return!j||s?(t.length=r,n=function(a){try{for(var b,d=
0,h=r;h>d;d++)"function"==typeof(b=q[d])&&(b=b(a),b=k?f.getTrusted(k,b):f.valu
eOf(b),null==b||b==c?b="":"string"!=typeof b&&(b=P(b))),t[d]=b;return
t.join("")}catch(i){var j=Jd("interr","Can't interpolate:
{0}\n{1}",g,i.toString());e(j)}},n.exp=g,n.parts=q,n):void 0}var
h=a.length,i=b.length;return g.startSymbol=function(){return
a},g.endSymbol=function(){return b},g}]}function
Ub(){this.$get=["$rootScope","$window","$q",function(a,b,c){function
d(d,f,g,h){var i=b.setInterval,j=b.clearInterval,k=c.defer(),l=k.promise,g=s(g
)?g:0,m=0,n=s(h)&&!h;return l.then(null,null,d),l.$$intervalId=i(function(){k.
notify(m++),g>0&&m>=g&&(k.resolve(m),j(l.$$intervalId),delete
e[l.$$intervalId]),n||a.$apply()},f),e[l.$$intervalId]=k,l}var e={};return
d.cancel=function(a){return a&&a.$$intervalId in
e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete
e[a.$$intervalId],!0):!1},d}]}function Vb(){this.$get=function(){return{id
:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,min
Frac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{m
inInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:
3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March
,April,May,June,July,August,September,October,November,December".split(","),SH
ORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sun
day,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Su
n,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y
h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM
d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss
a",shortTime:"h:mm a"},pluralCat:function(a){return
1===a?"one":"other"}}}}function Wb(a){for(var
b=a.split("/"),c=b.length;c--;)b[c]=W(b[c]);return b.join("/")}function
Xb(a,b){var c=yc(a);b.$$protocol=c.protocol,b.$$host=c.hostname,b.$$port=m(c.p
ort)||Ld[c.protocol]||null}function Yb(a,b){var
c="/"!==a.charAt(0);c&&(a="/"+a);var d=yc(a);b.$$path=decodeURIComponent(c&&"/
"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname),b.$$search=U(d.se
arch),b.$$hash=decodeURIComponent(d.hash),b.$$path&&"/"!=b.$$path.charAt(0)&&(
b.$$path="/"+b.$$path)}function Zb(a,b){return
0==b.indexOf(a)?b.substr(a.length):void 0}function $b(a){var
b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function _b(a){return
a.substr(0,$b(a).lastIndexOf("/")+1)}function ac(a){return
a.substring(0,a.indexOf("/",a.indexOf("//")+2))}function
bc(a,b){this.$$html5=!0,b=b||"";var
d=_b(a);Xb(a,this),this.$$parse=function(a){var b=Zb(d,a);if(!u(b))throw
Md("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',a,d);Yb(b,this),
this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var
a=V(this.$$search),b=this.$$hash?"#"+W(this.$$hash):"";this.$$url=Wb(this.$$pa
th)+(a?"?"+a:"")+b,this.$$absUrl=d+this.$$url.substr(1)},this.$$rewrite=functi
on(e){var f,g;return(f=Zb(a,e))!==c?(g=f,(f=Zb(b,f))!==c?d+(Zb("/",f)||f):a+g)
:(f=Zb(d,e))!==c?d+f:d==e+"/"?d:void 0}}function cc(a,b){var
c=_b(a);Xb(a,this),this.$$parse=function(d){var
e=Zb(a,d)||Zb(c,d),f="#"==e.charAt(0)?Zb(b,e):this.$$html5?e:"";if(!u(f))throw
Md("ihshprfx",'Invalid url "{0}", missing hash prefix
"{1}".',d,b);Yb(f,this),this.$$compose()},this.$$compose=function(){var c=V(th
is.$$search),d=this.$$hash?"#"+W(this.$$hash):"";this.$$url=Wb(this.$$path)+(c
?"?"+c:"")+d,this.$$absUrl=a+(this.$$url?b+this.$$url:"")},this.$$rewrite=func
tion(b){return $b(a)==$b(b)?b:void 0}}function
dc(a,b){this.$$html5=!0,cc.apply(this,arguments);var
c=_b(a);this.$$rewrite=function(d){var e;return
a==$b(d)?d:(e=Zb(c,d))?a+b+e:c===d+"/"?c:void 0}}function ec(a){return
function(){return this[a]}}function fc(a,b){return function(c){return
r(c)?this[a]:(this[a]=b(c),this.$$compose(),this)}}function gc(){var
b="",c=!1;this.hashPrefix=function(a){return
s(a)?(b=a,this):b},this.html5Mode=function(a){return s(a)?(c=a,this):c},this.$
get=["$rootScope","$browser","$sniffer","$rootElement",function(d,e,f,g){funct
ion h(a){d.$broadcast("$locationChangeSuccess",i.absUrl(),a)}var i,j,k,l=e.bas
eHref(),m=e.url();c?(k=ac(m)+(l||"/"),j=f.history?bc:dc):(k=$b(m),j=cc),i=new 
j(k,"#"+b),i.$$parse(i.$$rewrite(m)),g.on("click",function(b){if(!b.ctrlKey&&!
b.metaKey&&2!=b.which){for(var c=bd(b.target);"a"!==Yc(c[0].nodeName);)if(c[0]
===g[0]||!(c=c.parent())[0])return;var f=c.prop("href"),h=i.$$rewrite(f);f&&!c
.attr("target")&&h&&!b.isDefaultPrevented()&&(b.preventDefault(),h!=e.url()&&(
i.$$parse(h),d.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),i.absUrl
()!=m&&e.url(i.absUrl(),!0),e.onUrlChange(function(a){if(i.absUrl()!=a){if(d.$
broadcast("$locationChangeStart",a,i.absUrl()).defaultPrevented)return
e.url(i.absUrl()),void 0;d.$evalAsync(function(){var
b=i.absUrl();i.$$parse(a),h(b)}),d.$$phase||d.$digest()}});var n=0;return
d.$watch(function(){var a=e.url(),b=i.$$replace;return n&&a==i.absUrl()||(n++,
d.$evalAsync(function(){d.$broadcast("$locationChangeStart",i.absUrl(),a).defa
ultPrevented?i.$$parse(a):(e.url(i.absUrl(),b),h(a))})),i.$$replace=!1,n}),i}]
}function hc(){var a=!0,b=this;this.debugEnabled=function(b){return
s(b)?(a=b,this):a},this.$get=["$window",function(c){function d(a){return a
instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.messa
ge+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line)
),a}function e(a){var b=c.console||{},e=b[a]||b.log||o;return
e.apply?function(){var a=[];return f(arguments,function(b){a.push(d(b))}),e.ap
ply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),
warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return
function(){a&&c.apply(b,arguments)}}()}}]}function
ic(a,b){if("constructor"===a)throw Od("isecfld",'Referencing "constructor"
field in Angular expressions is disallowed! Expression: {0}',b);return
a}function jc(a,b){if(a&&a.constructor===a)throw Od("isecfn","Referencing
Function in Angular expressions is disallowed! Expression:
{0}",b);if(a&&a.document&&a.location&&a.alert&&a.setInterval)throw
Od("isecwindow","Referencing the Window in Angular expressions is disallowed!
Expression: {0}",b);if(a&&(a.nodeName||a.on&&a.find))throw
Od("isecdom","Referencing DOM nodes in Angular expressions is disallowed!
Expression: {0}",b);return a}function kc(a,b,d,e,f){f=f||{};for(var
g,h=b.split("."),i=0;h.length>1;i++){g=ic(h.shift(),e);var
j=a[g];j||(j={},a[g]=j),a=j,a.then&&f.unwrapPromises&&(Nd(e),"$$v"in a||!funct
ion(a){a.then(function(b){a.$$v=b})}(a),a.$$v===c&&(a.$$v={}),a=a.$$v)}return
g=ic(h.shift(),e),a[g]=d,d}function lc(a,b,d,e,f,g,h){return
ic(a,g),ic(b,g),ic(d,g),ic(e,g),ic(f,g),h.unwrapPromises?function(h,i){var
j,k=i&&i.hasOwnProperty(a)?i:h;return
null===k||k===c?k:(k=k[a],k&&k.then&&(Nd(g),"$$v"in k||(j=k,j.$$v=c,j.then(fun
ction(a){j.$$v=a})),k=k.$$v),b&&null!==k&&k!==c?(k=k[b],k&&k.then&&(Nd(g),"$$v
"in k||(j=k,j.$$v=c,j.then(function(a){j.$$v=a})),k=k.$$v),d&&null!==k&&k!==c?
(k=k[d],k&&k.then&&(Nd(g),"$$v"in k||(j=k,j.$$v=c,j.then(function(a){j.$$v=a})
),k=k.$$v),e&&null!==k&&k!==c?(k=k[e],k&&k.then&&(Nd(g),"$$v"in k||(j=k,j.$$v=
c,j.then(function(a){j.$$v=a})),k=k.$$v),f&&null!==k&&k!==c?(k=k[f],k&&k.then&
&(Nd(g),"$$v"in k||(j=k,j.$$v=c,j.then(function(a){j.$$v=a})),k=k.$$v),k):k):k
):k):k)}:function(g,h){var i=h&&h.hasOwnProperty(a)?h:g;return null===i||i===c
?i:(i=i[a],b&&null!==i&&i!==c?(i=i[b],d&&null!==i&&i!==c?(i=i[d],e&&null!==i&&
i!==c?(i=i[e],f&&null!==i&&i!==c?i=i[f]:i):i):i):i)}}function
mc(a,b,d){if(Ud.hasOwnProperty(a))return Ud[a];var e,g=a.split("."),h=g.length
;if(b.csp)e=6>h?lc(g[0],g[1],g[2],g[3],g[4],d,b):function(a,e){var f,i=0;do
f=lc(g[i++],g[i++],g[i++],g[i++],g[i++],d,b)(a,e),e=c,a=f;while(h>i);return
f};else{var i="var l, fn, p;\n";f(g,function(a,c){ic(a,d),i+="if(s === null ||
s === undefined) return s;\nl=s;\ns="+(c?"s":'((k&&k.hasOwnProperty("'+a+'"))?
k:s)')+'["'+a+'"];\n'+(b.unwrapPromises?'if (s && s.then) {\n
pw("'+d.replace(/\"/g,'\\"')+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v =
undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")
}),i+="return s;";var j=Function("s","k","pw",i);j.toString=function(){return
i},e=function(a,b){return
j(a,b,Nd)}}return"hasOwnProperty"!==a&&(Ud[a]=e),e}function nc(){var a={},b={c
sp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(a)
{return s(a)?(b.unwrapPromises=!!a,this):b.unwrapPromises},this.logPromiseWarn
ings=function(a){return s(a)?(b.logPromiseWarnings=a,this):b.logPromiseWarning
s},this.$get=["$filter","$sniffer","$log",function(c,d,e){return b.csp=d.csp,N
d=function(a){b.logPromiseWarnings&&!Pd.hasOwnProperty(a)&&(Pd[a]=!0,e.warn("[
$parse] Promise found in the expression `"+a+"`. Automatic unwrapping of
promises in Angular expressions is deprecated."))},function(d){var
e;switch(typeof d){case"string":if(a.hasOwnProperty(d))return a[d];var f=new
Sd(b),g=new Td(f,c,b);return
e=g.parse(d,!1),"hasOwnProperty"!==d&&(a[d]=e),e;case"function":return
d;default:return o}}}]}function
oc(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return
pc(function(b){a.$evalAsync(b)},b)}]}function pc(a,b){function d(a){return
a}function e(a){return j(a)}function g(a){var b=h(),c=0,d=x(a)?[]:{};return
f(a,function(a,e){c++,i(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||
b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})}),0===c&&b.resol
ve(d),b.promise}var h=function(){var f,g,k=[];return
g={resolve:function(b){if(k){var d=k;k=c,f=i(b),d.length&&a(function(){for(var
a,b=0,c=d.length;c>b;b++)a=d[b],f.then(a[0],a[1],a[2])})}},reject:function(a){
g.resolve(j(a))},notify:function(b){if(k){var
c=k;k.length&&a(function(){for(var
a,d=0,e=c.length;e>d;d++)a=c[d],a[2](b)})}},promise:{then:function(a,c,g){var 
i=h(),j=function(c){try{i.resolve((y(a)?a:d)(c))}catch(e){i.reject(e),b(e)}},l
=function(a){try{i.resolve((y(c)?c:e)(a))}catch(d){i.reject(d),b(d)}},m=functi
on(a){try{i.notify((y(g)?g:d)(a))}catch(c){b(c)}};return
k?k.push([j,l,m]):f.then(j,l,m),i.promise},"catch":function(a){return
this.then(null,a)},"finally":function(a){function b(a,b){var c=h();return
b?c.resolve(a):c.reject(a),c.promise}function c(c,e){var
f=null;try{f=(a||d)()}catch(g){return b(g,!1)}return
f&&y(f.then)?f.then(function(){return b(c,e)},function(a){return
b(a,!1)}):b(c,e)}return this.then(function(a){return
c(a,!0)},function(a){return c(a,!1)})}}}},i=function(b){return
b&&y(b.then)?b:{then:function(c){var d=h();return a(function(){d.resolve(c(b))
}),d.promise}}},j=function(c){return{then:function(d,f){var g=h();return a(fun
ction(){try{g.resolve((y(f)?f:e)(c))}catch(a){g.reject(a),b(a)}}),g.promise}}}
,k=function(c,f,g,k){var
l,m=h(),n=function(a){try{return(y(f)?f:d)(a)}catch(c){return
b(c),j(c)}},o=function(a){try{return(y(g)?g:e)(a)}catch(c){return
b(c),j(c)}},p=function(a){try{return(y(k)?k:d)(a)}catch(c){b(c)}};return a(fun
ction(){i(c).then(function(a){l||(l=!0,m.resolve(i(a).then(n,o,p)))},function(
a){l||(l=!0,m.resolve(o(a)))},function(a){l||m.notify(p(a))})}),m.promise};ret
urn{defer:h,reject:j,when:k,all:g}}function qc(){var
a=10,b=d("$rootScope");this.digestTtl=function(b){return arguments.length&&(a=
b),a},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(
c,d,f,g){function h(){this.$id=j(),this.$$phase=this.$parent=this.$$watchers=t
his.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,th
is["this"]=this.$root=this,this.$$destroyed=!1,this.$$asyncQueue=[],this.$$pos
tDigestQueue=[],this.$$listeners={},this.$$isolateBindings={}}function
i(a){if(n.$$phase)throw b("inprog","{0} already in
progress",n.$$phase);n.$$phase=a}function k(){n.$$phase=null}function
l(a,b){var c=f(a);return bb(c,b),c}function
m(){}h.prototype={constructor:h,$new:function(a){var b,c;return a?(c=new h,c.$
root=this.$root,c.$$asyncQueue=this.$$asyncQueue,c.$$postDigestQueue=this.$$po
stDigestQueue):(b=function(){},b.prototype=this,c=new b,c.$id=j()),c["this"]=c
,c.$$listeners={},c.$parent=this,c.$$watchers=c.$$nextSibling=c.$$childHead=c.
$$childTail=null,c.$$prevSibling=this.$$childTail,this.$$childHead?(this.$$chi
ldTail.$$nextSibling=c,this.$$childTail=c):this.$$childHead=this.$$childTail=c
,c},$watch:function(a,b,c){var d=this,e=l(a,"watch"),f=d.$$watchers,g={fn:b,la
st:m,get:e,exp:a,eq:!!c};if(!y(b)){var
h=l(b||o,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof
a&&e.constant){var
i=g.fn;g.fn=function(a,b,c){i.call(this,a,b,c),H(f,g)}}return f||(f=d.$$watche
rs=[]),f.unshift(g),function(){H(f,g)}},$watchCollection:function(a,b){functio
n c(){h=k(i);var a,b;if(t(h))if(e(h)){g!==l&&(g=l,n=g.length=0,j++),a=h.length
,n!==a&&(j++,g.length=n=a);for(var c=0;a>c;c++)g[c]!==h[c]&&(j++,g[c]=h[c])}el
se{g!==m&&(g=m={},n=0,j++),a=0;for(b in h)h.hasOwnProperty(b)&&(a++,g.hasOwnPr
operty(b)?g[b]!==h[b]&&(j++,g[b]=h[b]):(n++,g[b]=h[b],j++));if(n>a){j++;for(b
in g)g.hasOwnProperty(b)&&!h.hasOwnProperty(b)&&(n--,delete g[b])}}else
g!==h&&(g=h,j++);return j}function d(){b(h,g,i)}var
g,h,i=this,j=0,k=f(a),l=[],m={},n=0;return
this.$watch(c,d)},$digest:function(){var c,e,f,g,h,j,l,n,o,p,q,r=this.$$asyncQ
ueue,s=this.$$postDigestQueue,t=a,u=this,v=[];i("$digest");do{for(j=!1,n=u;r.l
ength;)try{q=r.shift(),q.scope.$eval(q.expression)}catch(w){d(w)}do{if(g=n.$$w
atchers)for(h=g.length;h--;)try{c=g[h],c&&(e=c.get(n))!==(f=c.last)&&!(c.eq?K(
e,f):"number"==typeof e&&"number"==typeof f&&isNaN(e)&&isNaN(f))&&(j=!0,c.last
=c.eq?I(e):e,c.fn(e,f===m?e:f,n),5>t&&(o=4-t,v[o]||(v[o]=[]),p=y(c.exp)?"fn:
"+(c.exp.name||c.exp.toString()):c.exp,p+="; newVal: "+P(e)+"; oldVal: "+P(f),
v[o].push(p)))}catch(w){d(w)}if(!(l=n.$$childHead||n!==u&&n.$$nextSibling))for
(;n!==u&&!(l=n.$$nextSibling);)n=n.$parent}while(n=l);if(j&&!t--)throw
k(),b("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in
the last 5 iterations: {1}",a,P(v))}while(j||r.length);for(k();s.length;)try{s
.shift()()}catch(w){d(w)}},$destroy:function(){if(n!=this&&!this.$$destroyed){
var a=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,a.$$childHe
ad==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTa
il=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=t
his.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.
$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$child
Head=this.$$childTail=null}},$eval:function(a,b){return f(a)(this,b)},$evalAsy
nc:function(a){n.$$phase||n.$$asyncQueue.length||g.defer(function(){n.$$asyncQ
ueue.length&&n.$digest()}),this.$$asyncQueue.push({scope:this,expression:a})},
$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){tr
y{return i("$apply"),this.$eval(a)}catch(b){d(b)}finally{k();try{n.$digest()}c
atch(b){throw d(b),b}}},$on:function(a,b){var c=this.$$listeners[a];return c||
(this.$$listeners[a]=c=[]),c.push(b),function(){c[G(c,b)]=null}},$emit:functio
n(a){var b,c,e,f=[],g=this,h=!1,i={name:a,targetScope:g,stopPropagation:functi
on(){h=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!
1},j=L([i],arguments,1);do{for(b=g.$$listeners[a]||f,i.currentScope=g,c=0,e=b.
length;e>c;c++)if(b[c])try{b[c].apply(null,j)}catch(k){d(k)}else
b.splice(c,1),c--,e--;if(h)return i;g=g.$parent}while(g);return
i},$broadcast:function(a){var b,c,e,f=this,g=f,h=f,i={name:a,targetScope:f,pre
ventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},j=L([i],arg
uments,1);do{for(g=h,i.currentScope=g,b=g.$$listeners[a]||[],c=0,e=b.length;e>
c;c++)if(b[c])try{b[c].apply(null,j)}catch(k){d(k)}else b.splice(c,1),c--,e--;
if(!(h=g.$$childHead||g!==f&&g.$$nextSibling))for(;g!==f&&!(h=g.$$nextSibling)
;)g=g.$parent}while(g=h);return i}};var n=new h;return n}]}function
rc(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g
,"\\x08")}function sc(a){if("self"===a)return
a;if(u(a)){if(a.indexOf("***")>-1)throw Vd("iwcard","Illegal sequence *** in
string matcher.  String: {0}",a);return
a=rc(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new
RegExp("^"+a+"$")}if(z(a))return new RegExp("^"+a.source+"$");throw
Vd("imatcher",'Matchers may only be "self", string patterns or RegExp
objects')}function tc(a){var b=[];return
s(a)&&f(a,function(a){b.push(sc(a))}),b}function uc(){this.SCE_CONTEXTS=Wd;var
a=["self"],b=[];this.resourceUrlWhitelist=function(b){return
arguments.length&&(a=tc(b)),a},this.resourceUrlBlacklist=function(a){return ar
guments.length&&(b=tc(a)),b},this.$get=["$log","$document","$injector",functio
n(d,e,f){function g(a,b){return"self"===a?zc(b):!!a.exec(b.href)}function
h(c){var d,e,f=yc(c.toString()),h=!1;for(d=0,e=a.length;e>d;d++)if(g(a[d],f)){
h=!0;break}if(h)for(d=0,e=b.length;e>d;d++)if(g(b[d],f)){h=!1;break}return
h}function i(a){var b=function(a){this.$$unwrapTrustedValue=function(){return
a}};return a&&(b.prototype=new a),b.prototype.valueOf=function(){return
this.$$unwrapTrustedValue()},b.prototype.toString=function(){return
this.$$unwrapTrustedValue().toString()},b}function j(a,b){var
d=o.hasOwnProperty(a)?o[a]:null;if(!d)throw Vd("icontext","Attempted to trust
a value in invalid context. Context: {0}; Value:
{1}",a,b);if(null===b||b===c||""===b)return b;if("string"!=typeof b)throw
Vd("itype","Attempted to trust a non-string value in a content requiring a
string: Context: {0}",a);return new d(b)}function k(a){return a instanceof
n?a.$$unwrapTrustedValue():a}function l(a,b){if(null===b||b===c||""===b)return
b;var d=o.hasOwnProperty(a)?o[a]:null;if(d&&b instanceof d)return
b.$$unwrapTrustedValue();if(a===Wd.RESOURCE_URL){if(h(b))return b;throw
Vd("insecurl","Blocked loading resource from url not allowed by $sceDelegate
policy.  URL: {0}",b.toString())}if(a===Wd.HTML)return m(b);throw
Vd("unsafe","Attempting to use an unsafe value in a safe context.")}var
m=function(){throw Vd("unsafe","Attempting to use an unsafe value in a safe
context.")};f.has("$sanitize")&&(m=f.get("$sanitize"));var n=i(),o={};return o
[Wd.HTML]=i(n),o[Wd.CSS]=i(n),o[Wd.URL]=i(n),o[Wd.JS]=i(n),o[Wd.RESOURCE_URL]=
i(o[Wd.URL]),{trustAs:j,getTrusted:l,valueOf:k}}]}function vc(){var
a=!0;this.enabled=function(b){return arguments.length&&(a=!!b),a},this.$get=["
$parse","$document","$sceDelegate",function(b,d,e){if(a&&ad){var
g=d[0].documentMode;if(g!==c&&8>g)throw Vd("iequirks","Strict Contextual
Escaping does not support Internet Explorer version < 9 in quirks mode.  You
can fix this by adding the text <!doctype html> to the top of your HTML
document.  See http://docs.angularjs.org/api/ng.$sce for more
information.")}var h=I(Wd);h.isEnabled=function(){return a},h.trustAs=e.trustA
s,h.getTrusted=e.getTrusted,h.valueOf=e.valueOf,a||(h.trustAs=h.getTrusted=fun
ction(a,b){return b},h.valueOf=p),h.parseAs=function(a,c){var d=b(c);return
d.literal&&d.constant?d:function(b,c){return h.getTrusted(a,d(b,c))}};var
i=h.parseAs,j=h.getTrusted,k=h.trustAs;return f(Wd,function(a,b){var
c=Yc(b);h[hb("parse_as_"+c)]=function(b){return
i(a,b)},h[hb("get_trusted_"+c)]=function(b){return
j(a,b)},h[hb("trust_as_"+c)]=function(b){return k(a,b)}}),h}]}function
wc(){this.$get=["$window","$document",function(a,b){var c,d,e={},f=m((/android
(\d+)/.exec(Yc((a.navigator||{}).userAgent))||[])[1]),g=/Boxee/i.test((a.navig
ator||{}).userAgent),h=b[0]||{},i=/^(Moz|webkit|O|ms)(?=[A-Z])/,j=h.body&&h.bo
dy.style,k=!1,l=!1;if(j){for(var n in j)if(d=i.exec(n)){c=d[0],c=c.substr(0,1)
.toUpperCase()+c.substr(1);break}c||(c="WebkitOpacity"in
j&&"webkit"),k=!!("transition"in j||c+"Transition"in j),l=!!("animation"in
j||c+"Animation"in j),!f||k&&l||(k=u(h.body.style.webkitTransition),l=u(h.body
.style.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>
f||g),hashchange:"onhashchange"in a&&(!h.documentMode||h.documentMode>7),hasEv
ent:function(a){if("input"==a&&9==ad)return!1;if(r(e[a])){var
b=h.createElement("div");e[a]="on"+a in b}return e[a]},csp:h.securityPolicy?h.
securityPolicy.isActive:!1,vendorPrefix:c,transitions:k,animations:l}}]}functi
on xc(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(a
,b,c,d){function e(e,g,h){var i,j=c.defer(),k=j.promise,l=s(h)&&!h;return i=b.
defer(function(){try{j.resolve(e())}catch(b){j.reject(b),d(b)}finally{delete
f[k.$$timeoutId]}l||a.$apply()},g),k.$$timeoutId=i,f[i]=j,k}var f={};return
e.cancel=function(a){return a&&a.$$timeoutId in
f?(f[a.$$timeoutId].reject("canceled"),delete
f[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1},e}]}function yc(a){var
b=a;return ad&&(Xd.setAttribute("href",b),b=Xd.href),Xd.setAttribute("href",b)
,{href:Xd.href,protocol:Xd.protocol?Xd.protocol.replace(/:$/,""):"",host:Xd.ho
st,search:Xd.search?Xd.search.replace(/^\?/,""):"",hash:Xd.hash?Xd.hash.replac
e(/^#/,""):"",hostname:Xd.hostname,port:Xd.port,pathname:Xd.pathname&&"/"===Xd
.pathname.charAt(0)?Xd.pathname:"/"+Xd.pathname}}function zc(a){var
b=u(a)?yc(a):a;return b.protocol===Yd.protocol&&b.host===Yd.host}function
Ac(){this.$get=q(a)}function Bc(a){function b(d,e){if(t(d)){var g={};return
f(d,function(a,c){g[c]=b(c,a)}),g}return a.factory(d+c,e)}var
c="Filter";this.register=b,this.$get=["$injector",function(a){return
function(b){return a.get(b+c)}}],b("currency",Dc),b("date",Lc),b("filter",Cc),
b("json",Mc),b("limitTo",Nc),b("lowercase",be),b("number",Ec),b("orderBy",Oc),
b("uppercase",ce)}function Cc(){return function(a,b,c){if(!x(a))return a;var
d=[];switch(d.check=function(a){for(var
b=0;b<d.length;b++)if(!d[b](a))return!1;return!0},typeof
c){case"function":break;case"boolean":if(1==c){c=function(a,b){return
jd.equals(a,b)};break}default:c=function(a,b){return
b=(""+b).toLowerCase(),(""+a).toLowerCase().indexOf(b)>-1}}var
e=function(a,b){if("string"==typeof
b&&"!"===b.charAt(0))return!e(a,b.substr(1));switch(typeof
a){case"boolean":case"number":case"string":return
c(a,b);case"object":switch(typeof b){case"object":return
c(a,b);default:for(var d in
a)if("$"!==d.charAt(0)&&e(a[d],b))return!0}return!1;case"array":for(var f=0;f<
a.length;f++)if(e(a[f],b))return!0;return!1;default:return!1}};switch(typeof
b){case"boolean":case"number":case"string":b={$:b};case"object":for(var f in
b)"$"==f?!function(){if(b[f]){var a=f;d.push(function(c){return
e(c,b[a])})}}():!function(){if("undefined"!=typeof b[f]){var
a=f;d.push(function(c){return
e(db(c,a),b[a])})}}();break;case"function":d.push(b);break;default:return
a}for(var g=[],h=0;h<a.length;h++){var i=a[h];d.check(i)&&g.push(i)}return
g}}function Dc(a){var b=a.NUMBER_FORMATS;return function(a,c){return r(c)&&(c=
b.CURRENCY_SYM),Fc(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,2).replace(/\u00A
4/g,c)}}function Ec(a){var b=a.NUMBER_FORMATS;return function(a,c){return
Fc(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function
Fc(a,b,c,d,e){if(isNaN(a)||!isFinite(a))return"";var f=0>a;a=Math.abs(a);var
g=a+"",h="",i=[],j=!1;if(-1!==g.indexOf("e")){var k=g.match(/([\d\.]+)e(-?)(\d
+)/);k&&"-"==k[2]&&k[3]>e+1?g="0":(h=g,j=!0)}if(j)e>0&&a>-1&&1>a&&(h=a.toFixed
(e));else{var l=(g.split(Zd)[1]||"").length;r(e)&&(e=Math.min(Math.max(b.minFr
ac,l),b.maxFrac));var m=Math.pow(10,e);a=Math.round(a*m)/m;var
n=(""+a).split(Zd),o=n[0];n=n[1]||"";var
p=0,q=b.lgSize,s=b.gSize;if(o.length>=q+s){p=o.length-q;for(var t=0;p>t;t++)(p
-t)%s===0&&0!==t&&(h+=c),h+=o.charAt(t)}for(t=p;t<o.length;t++)(o.length-t)%q=
==0&&0!==t&&(h+=c),h+=o.charAt(t);for(;n.length<e;)n+="0";e&&"0"!==e&&(h+=d+n.
substr(0,e))}return i.push(f?b.negPre:b.posPre),i.push(h),i.push(f?b.negSuf:b.
posSuf),i.join("")}function Gc(a,b,c){var
d="";for(0>a&&(d="-",a=-a),a=""+a;a.length<b;)a="0"+a;return
c&&(a=a.substr(a.length-b)),d+a}function Hc(a,b,c,d){return
c=c||0,function(e){var f=e["get"+a]();return(c>0||f>-c)&&(f+=c),0===f&&-12==c&
&(f=12),Gc(f,b,d)}}function Ic(a,b){return function(c,d){var
e=c["get"+a](),f=Zc(b?"SHORT"+a:a);return d[f][e]}}function Jc(a){var
b=-1*a.getTimezoneOffset(),c=b>=0?"+":"";return
c+=Gc(Math[b>0?"floor":"ceil"](b/60),2)+Gc(Math.abs(b%60),2)}function
Kc(a,b){return a.getHours()<12?b.AMPMS[0]:b.AMPMS[1]}function Lc(a){function
b(a){var b;if(b=a.match(c)){var d=new Date(0),e=0,f=0,g=b[8]?d.setUTCFullYear:
d.setFullYear,h=b[8]?d.setUTCHours:d.setHours;b[9]&&(e=m(b[9]+b[10]),f=m(b[9]+
b[11])),g.call(d,m(b[1]),m(b[2])-1,m(b[3]));var i=m(b[4]||0)-e,j=m(b[5]||0)-f,
k=m(b[6]||0),l=Math.round(1e3*parseFloat("0."+(b[7]||0)));return
h.call(d,i,j,k,l),d}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d
\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return
function(c,d){var e,g,h="",i=[];if(d=d||"mediumDate",d=a.DATETIME_FORMATS[d]||
d,u(c)&&(c=ae.test(c)?m(c):b(c)),v(c)&&(c=new Date(c)),!w(c))return
c;for(;d;)g=_d.exec(d),g?(i=L(i,g,1),d=i.pop()):(i.push(d),d=null);return f(i,
function(b){e=$d[b],h+=e?e(c,a.DATETIME_FORMATS):b.replace(/(^'|'$)/g,"").repl
ace(/''/g,"'")}),h}}function Mc(){return function(a){return P(a,!0)}}function
Nc(){return function(a,b){if(!x(a)&&!u(a))return a;if(b=m(b),u(a))return
b?b>=0?a.slice(0,b):a.slice(b,a.length):"";var c,d,e=[];for(b>a.length?b=a.len
gth:b<-a.length&&(b=-a.length),b>0?(c=0,d=b):(c=a.length+b,d=a.length);d>c;c++
)e.push(a[c]);return e}}function Oc(a){return function(b,c,d){function
e(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return
0}function f(a,b){return R(b)?function(b,c){return a(c,b)}:a}function
g(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),
b=b.toLowerCase()),a===b?0:b>a?-1:1):d>c?-1:1}if(!x(b))return b;if(!c)return
b;c=x(c)?c:[c],c=E(c,function(b){var c=!1,d=b||p;return u(b)&&(("+"==b.charAt(
0)||"-"==b.charAt(0))&&(c="-"==b.charAt(0),b=b.substring(1)),d=a(b)),f(functio
n(a,b){return g(d(a),d(b))},c)});for(var
h=[],i=0;i<b.length;i++)h.push(b[i]);return h.sort(f(e,d))}}function
Pc(a){return y(a)&&(a={link:a}),a.restrict=a.restrict||"AC",q(a)}function
Qc(a,b){function c(b,c){c=c?"-"+$(c,"-"):"",a.removeClass((b?pe:oe)+c).addClas
s((b?oe:pe)+c)}var d=this,e=a.parent().controller("form")||fe,g=0,h=d.$error={
},i=[];d.$name=b.name||b.ngForm,d.$dirty=!1,d.$pristine=!0,d.$valid=!0,d.$inva
lid=!1,e.$addControl(d),a.addClass(qe),c(!0),d.$addControl=function(a){cb(a.$n
ame,"input"),i.push(a),a.$name&&(d[a.$name]=a)},d.$removeControl=function(a){a
.$name&&d[a.$name]===a&&delete d[a.$name],f(h,function(b,c){d.$setValidity(c,!
0,a)}),H(i,a)},d.$setValidity=function(a,b,f){var i=h[a];if(b)i&&(H(i,f),i.len
gth||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),h[a]=!1,c(!0,a),e.$setValidity(a
,!0,d)));else{if(g||c(b),i){if(F(i,f))return}else h[a]=i=[],g++,c(!1,a),e.$set
Validity(a,!1,d);i.push(f),d.$valid=!1,d.$invalid=!0}},d.$setDirty=function(){
a.removeClass(qe).addClass(re),d.$dirty=!0,d.$pristine=!1,e.$setDirty()},d.$se
tPristine=function(){a.removeClass(re).addClass(qe),d.$dirty=!1,d.$pristine=!0
,f(i,function(a){a.$setPristine()})}}function Rc(a,b,e,f,g,h){var
i=function(){var c=b.val();R(e.ngTrim||"T")&&(c=ld(c)),f.$viewValue!==c&&a.$ap
ply(function(){f.$setViewValue(c)})};if(g.hasEvent("input"))b.on("input",i);el
se{var j,k=function(){j||(j=h.defer(function(){i(),j=null}))};b.on("keydown",f
unction(a){var b=a.keyCode;91===b||b>15&&19>b||b>=37&&40>=b||k()}),b.on("chang
e",i),g.hasEvent("paste")&&b.on("paste cut",k)}f.$render=function(){b.val(f.$i
sEmpty(f.$viewValue)?"":f.$viewValue)};var
l,n,o=e.ngPattern,p=function(a,b){return f.$isEmpty(b)||a.test(b)?(f.$setValid
ity("pattern",!0),b):(f.$setValidity("pattern",!1),c)};if(o&&(n=o.match(/^\/(.
*)\/([gim]*)$/),n?(o=new RegExp(n[1],n[2]),l=function(a){return
p(o,a)}):l=function(c){var e=a.$eval(o);if(!e||!e.test)throw
d("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element:
{2}",o,e,S(b));return
p(e,c)},f.$formatters.push(l),f.$parsers.push(l)),e.ngMinlength){var q=m(e.ngM
inlength),r=function(a){return!f.$isEmpty(a)&&a.length<q?(f.$setValidity("minl
ength",!1),c):(f.$setValidity("minlength",!0),a)};f.$parsers.push(r),f.$format
ters.push(r)}if(e.ngMaxlength){var s=m(e.ngMaxlength),t=function(a){return!f.$
isEmpty(a)&&a.length>s?(f.$setValidity("maxlength",!1),c):(f.$setValidity("max
length",!0),a)};f.$parsers.push(t),f.$formatters.push(t)}}function
Sc(a,b,d,e,f,g){if(Rc(a,b,d,e,f,g),e.$parsers.push(function(a){var
b=e.$isEmpty(a);return b||le.test(a)?(e.$setValidity("number",!0),""===a?null:
b?a:parseFloat(a)):(e.$setValidity("number",!1),c)}),e.$formatters.push(functi
on(a){return e.$isEmpty(a)?"":""+a}),d.min){var h=parseFloat(d.min),i=function
(a){return!e.$isEmpty(a)&&h>a?(e.$setValidity("min",!1),c):(e.$setValidity("mi
n",!0),a)};e.$parsers.push(i),e.$formatters.push(i)}if(d.max){var j=parseFloat
(d.max),k=function(a){return!e.$isEmpty(a)&&a>j?(e.$setValidity("max",!1),c):(
e.$setValidity("max",!0),a)};e.$parsers.push(k),e.$formatters.push(k)}e.$forma
tters.push(function(a){return e.$isEmpty(a)||v(a)?(e.$setValidity("number",!0)
,a):(e.$setValidity("number",!1),c)})}function
Tc(a,b,d,e,f,g){Rc(a,b,d,e,f,g);var h=function(a){return e.$isEmpty(a)||je.tes
t(a)?(e.$setValidity("url",!0),a):(e.$setValidity("url",!1),c)};e.$formatters.
push(h),e.$parsers.push(h)}function Uc(a,b,d,e,f,g){Rc(a,b,d,e,f,g);var
h=function(a){return e.$isEmpty(a)||ke.test(a)?(e.$setValidity("email",!0),a):
(e.$setValidity("email",!1),c)};e.$formatters.push(h),e.$parsers.push(h)}funct
ion Vc(a,b,c,d){r(c.name)&&b.attr("name",j()),b.on("click",function(){b[0].che
cked&&a.$apply(function(){d.$setViewValue(c.value)})}),d.$render=function(){va
r
a=c.value;b[0].checked=a==d.$viewValue},c.$observe("value",d.$render)}function
Wc(a,b,c,d){var e=c.ngTrueValue,f=c.ngFalseValue;u(e)||(e=!0),u(f)||(f=!1),b.o
n("click",function(){a.$apply(function(){d.$setViewValue(b[0].checked)})}),d.$
render=function(){b[0].checked=d.$viewValue},d.$isEmpty=function(a){return
a!==e},d.$formatters.push(function(a){return
a===e}),d.$parsers.push(function(a){return a?e:f})}function Xc(a,b){return
a="ngClass"+a,function(){return{restrict:"AC",link:function(d,e,g){function
h(a){(b===!0||d.$index%2===b)&&(l&&!K(a,l)&&i(l),j(a)),l=I(a)}function
i(a){g.$removeClass(k(a))}function j(a){g.$addClass(k(a))}function
k(a){if(x(a))return a.join(" ");if(t(a)){var b=[];return
f(a,function(a,c){a&&b.push(c)}),b.join(" ")}return a}var l=c;d.$watch(g[a],h,
!0),g.$observe("class",function(){h(d.$eval(g[a]))}),"ngClass"!==a&&d.$watch("
$index",function(c,e){var
f=1&c;f!==e&1&&(f===b?j(d.$eval(g[a])):i(d.$eval(g[a])))})}}}}var
Yc=function(a){return u(a)?a.toLowerCase():a},Zc=function(a){return
u(a)?a.toUpperCase():a},$c=function(a){return
u(a)?a.replace(/[A-Z]/g,function(a){return
String.fromCharCode(32|a.charCodeAt(0))}):a},_c=function(a){return
u(a)?a.replace(/[a-z]/g,function(a){return String.fromCharCode(-33&a.charCodeA
t(0))}):a};"i"!=="I".toLowerCase()&&(Yc=$c,Zc=_c);var ad,bd,cd,dd,ed,fd=[].sli
ce,gd=[].push,hd=Object.prototype.toString,id=d("ng"),jd=(a.angular,a.angular|
|(a.angular={})),kd=["0","0","0"];ad=m((/msie
(\d+)/.exec(Yc(navigator.userAgent))||[])[1]),isNaN(ad)&&(ad=m((/trident\/.*; 
rv:(\d+)/.exec(Yc(navigator.userAgent))||[])[1])),o.$inject=[],p.$inject=[];va
r ld=function(){return String.prototype.trim?function(a){return
u(a)?a.trim():a}:function(a){return
u(a)?a.replace(/^\s*/,"").replace(/\s*$/,""):a}}();ed=9>ad?function(a){return 
a=a.nodeName?a:a[0],a.scopeName&&"HTML"!=a.scopeName?Zc(a.scopeName+":"+a.node
Name):a.nodeName}:function(a){return a.nodeName?a.nodeName:a[0].nodeName};var
md=/[A-Z]/g,nd={full:"1.2.0-rc.3",major:1,minor:2,dot:0,codeName:"ferocious-
twitch"},od=jb.cache={},pd=jb.expando="ng-"+(new Date).getTime(),qd=1,rd=a.doc
ument.addEventListener?function(a,b,c){a.addEventListener(b,c,!1)}:function(a,
b,c){a.attachEvent("on"+b,c)},sd=a.document.removeEventListener?function(a,b,c
){a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent("on"+b,c)},td=/
([\:\-\_]+(.))/g,ud=/^moz([A-Z])/,vd=d("jqLite"),wd=jb.prototype={ready:functi
on(c){function d(){e||(e=!0,c())}var e=!1;"complete"===b.readyState?setTimeout
(d):(this.on("DOMContentLoaded",d),jb(a).on("load",d))},toString:function(){va
r a=[];return f(this,function(b){a.push(""+b)}),"["+a.join(",
")+"]"},eq:function(a){return a>=0?bd(this[a]):bd(this[this.length+a])},length
:0,push:gd,sort:[].sort,splice:[].splice},xd={};f("multiple,selected,checked,d
isabled,readOnly,required,open".split(","),function(a){xd[Yc(a)]=a});var yd={}
;f("input,select,option,textarea,button,form,details".split(","),function(a){y
d[Zc(a)]=!0}),f({data:pb,inheritedData:vb,scope:function(a){return
vb(a,"$scope")},controller:ub,injector:function(a){return vb(a,"$injector")},r
emoveAttr:function(a,b){a.removeAttribute(b)},hasClass:qb,css:function(a,b,d){
if(b=hb(b),!s(d)){var e;return 8>=ad&&(e=a.currentStyle&&a.currentStyle[b],""=
==e&&(e="auto")),e=e||a.style[b],8>=ad&&(e=""===e?c:e),e}a.style[b]=d},attr:fu
nction(a,b,d){var e=Yc(b);if(xd[e]){if(!s(d))return a[b]||(a.attributes.getNam
edItem(b)||o).specified?e:c;d?(a[b]=!0,a.setAttribute(b,e)):(a[b]=!1,a.removeA
ttribute(e))}else if(s(d))a.setAttribute(b,d);else if(a.getAttribute){var
f=a.getAttribute(b,2);return null===f?c:f}},prop:function(a,b,c){return
s(c)?(a[b]=c,void 0):a[b]},text:function(){function a(a,c){var
d=b[a.nodeType];return r(c)?d?a[d]:"":(a[d]=c,void 0)}var b=[];return 9>ad?(b[
1]="innerText",b[3]="nodeValue"):b[1]=b[3]="textContent",a.$dv="",a}(),val:fun
ction(a,b){if(r(b)){if("SELECT"===ed(a)&&a.multiple){var c=[];return f(a.optio
ns,function(a){a.selected&&c.push(a.value||a.text)}),0===c.length?null:c}retur
n a.value}a.value=b},html:function(a,b){if(r(b))return a.innerHTML;for(var c=0
,d=a.childNodes;c<d.length;c++)lb(d[c]);a.innerHTML=b}},function(a,b){jb.proto
type[b]=function(b,d){var e,f;if((2==a.length&&a!==qb&&a!==ub?b:d)===c){if(t(b
)){for(e=0;e<this.length;e++)if(a===pb)a(this[e],b);else for(f in
b)a(this[e],f,b[f]);return this}for(var
g=a.$dv,h=g==c?Math.min(this.length,1):this.length,i=0;h>i;i++){var
j=a(this[i],b,d);g=g?g+j:j}return
g}for(e=0;e<this.length;e++)a(this[e],b,d);return
this}}),f({removeData:nb,dealoc:lb,on:function af(a,c,d,e){if(s(e))throw
vd("onargs","jqLite#on() does not support the `selector` or `eventData`
parameters");var g=ob(a,"events"),h=ob(a,"handle");g||ob(a,"events",g={}),h||o
b(a,"handle",h=xb(a,g)),f(c.split(" "),function(c){var
e=g[c];if(!e){if("mouseenter"==c||"mouseleave"==c){var
f=b.body.contains||b.body.compareDocumentPosition?function(a,b){var
c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!=
=d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compar
eDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)retur
n!0;return!1};g[c]=[];var
i={mouseleave:"mouseout",mouseenter:"mouseover"};af(a,i[c],function(a){var
b=this,d=a.relatedTarget;(!d||d!==b&&!f(b,d))&&h(a,c)})}else
rd(a,c,h),g[c]=[];e=g[c]}e.push(d)})},off:mb,replaceWith:function(a,b){var
c,d=a.parentNode;lb(a),f(new jb(b),function(b){c?d.insertBefore(b,c.nextSiblin
g):d.replaceChild(b,a),c=b})},children:function(a){var b=[];return f(a.childNo
des,function(a){1===a.nodeType&&b.push(a)}),b},contents:function(a){return
a.childNodes||[]},append:function(a,b){f(new jb(b),function(b){(1===a.nodeType
||11===a.nodeType)&&a.appendChild(b)})},prepend:function(a,b){if(1===a.nodeTyp
e){var c=a.firstChild;f(new
jb(b),function(b){a.insertBefore(b,c)})}},wrap:function(a,b){b=bd(b)[0];var c=
a.parentNode;c&&c.replaceChild(b,a),b.appendChild(a)},remove:function(a){lb(a)
;var b=a.parentNode;b&&b.removeChild(a)},after:function(a,b){var
c=a,d=a.parentNode;f(new jb(b),function(a){d.insertBefore(a,c.nextSibling),c=a
})},addClass:sb,removeClass:rb,toggleClass:function(a,b,c){r(c)&&(c=!qb(a,b)),
(c?sb:rb)(a,b)},parent:function(a){var b=a.parentNode;return
b&&11!==b.nodeType?b:null},next:function(a){if(a.nextElementSibling)return
a.nextElementSibling;for(var
b=a.nextSibling;null!=b&&1!==b.nodeType;)b=b.nextSibling;return
b},find:function(a,b){return
a.getElementsByTagName(b)},clone:kb,triggerHandler:function(a,b,c){var
d=(ob(a,"events")||{})[b];c=c||[];var e=[{preventDefault:o,stopPropagation:o}]
;f(d,function(b){b.apply(a,e.concat(c))})}},function(a,b){jb.prototype[b]=func
tion(b,d,e){for(var f,g=0;g<this.length;g++)f==c?(f=a(this[g],b,d,e),f!==c&&(f
=bd(f))):tb(f,a(this[g],b,d,e));return f==c?this:f},jb.prototype.bind=jb.proto
type.on,jb.prototype.unbind=jb.prototype.off}),zb.prototype={put:function(a,b)
{this[yb(a)]=b},get:function(a){return this[yb(a)]},remove:function(a){var
b=this[a=yb(a)];return delete this[a],b}};var zd=/^function\s*[^\(]*\(\s*([^\)
]*)\)/m,Ad=/,/,Bd=/^\s*(_?)(\S+?)\1\s*$/,Cd=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm
,Dd=d("$injector"),Ed=d("$animate"),Fd=["$provide",function(a){this.$$selector
s={},this.register=function(b,c){var
d=b+"-animation";if(b&&"."!=b.charAt(0))throw Ed("notcsel","Expecting class
selector starting with '.' got '{0}'.",b);this.$$selectors[b.substr(1)]=d,a.fa
ctory(d,c)},this.$get=["$timeout",function(a){return{enter:function(b,c,d,e){v
ar g=d&&d[d.length-1],h=c&&c[0]||g&&g.parentNode,i=g&&g.nextSibling||null;f(b,
function(a){h.insertBefore(a,i)}),e&&a(e,0,!1)},leave:function(b,c){b.remove()
,c&&a(c,0,!1)},move:function(a,b,c,d){this.enter(a,b,c,d)},addClass:function(b
,c,d){c=u(c)?c:x(c)?c.join(" "):"",f(b,function(a){sb(a,c)}),d&&a(d,0,!1)},rem
oveClass:function(b,c,d){c=u(c)?c:x(c)?c.join(" "):"",f(b,function(a){rb(a,c)}
),d&&a(d,0,!1)},enabled:o}}]}],Gd=d("$compile");Hb.$inject=["$provide"];var
Hd=/^(x[\:\-_]|data[\:\-_])/i,Id=a.XMLHttpRequest||function(){try{return new
ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new
ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(b){}try{return new
ActiveXObject("Msxml2.XMLHTTP")}catch(c){}throw
d("$httpBackend")("noxhr","This browser does not support XMLHttpRequest.")},Jd
=d("$interpolate"),Kd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Ld={http:80,https:443,
ftp:21},Md=d("$location");dc.prototype=cc.prototype=bc.prototype={$$html5:!1,$
$replace:!1,absUrl:ec("$$absUrl"),url:function(a,b){if(r(a))return
this.$$url;var c=Kd.exec(a);return c[1]&&this.path(decodeURIComponent(c[1])),(
c[2]||c[1])&&this.search(c[3]||""),this.hash(c[5]||"",b),this},protocol:ec("$$
protocol"),host:ec("$$host"),port:ec("$$port"),path:fc("$$path",function(a){re
turn"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){c
ase 0:return this.$$search;case
1:if(u(a))this.$$search=U(a);else{if(!t(a))throw Md("isrcharg","The first
argument of the `$location#search()` call must be a string or an
object.");this.$$search=a}break;default:b==c||null==b?delete
this.$$search[a]:this.$$search[a]=b}return
this.$$compose(),this},hash:fc("$$hash",p),replace:function(){return
this.$$replace=!0,this}};var
Nd,Od=d("$parse"),Pd={},Qd={"null":function(){return null},"true":function(){r
eturn!0},"false":function(){return!1},undefined:o,"+":function(a,b,d,e){return
d=d(a,b),e=e(a,b),s(d)?s(e)?d+e:d:s(e)?e:c},"-":function(a,b,c,d){return
c=c(a,b),d=d(a,b),(s(c)?c:0)-(s(d)?d:0)},"*":function(a,b,c,d){return
c(a,b)*d(a,b)},"/":function(a,b,c,d){return
c(a,b)/d(a,b)},"%":function(a,b,c,d){return
c(a,b)%d(a,b)},"^":function(a,b,c,d){return
c(a,b)^d(a,b)},"=":o,"===":function(a,b,c,d){return
c(a,b)===d(a,b)},"!==":function(a,b,c,d){return
c(a,b)!==d(a,b)},"==":function(a,b,c,d){return
c(a,b)==d(a,b)},"!=":function(a,b,c,d){return
c(a,b)!=d(a,b)},"<":function(a,b,c,d){return
c(a,b)<d(a,b)},">":function(a,b,c,d){return
c(a,b)>d(a,b)},"<=":function(a,b,c,d){return
c(a,b)<=d(a,b)},">=":function(a,b,c,d){return
c(a,b)>=d(a,b)},"&&":function(a,b,c,d){return
c(a,b)&&d(a,b)},"||":function(a,b,c,d){return
c(a,b)||d(a,b)},"&":function(a,b,c,d){return
c(a,b)&d(a,b)},"|":function(a,b,c,d){return d(a,b)(a,b,c(a,b))},"!":function(a
,b,c){return!c(a,b)}},Rd={n:"\n",f:"\f",r:"\r",t:" ",v:" ","'":"'",'"':'"'},Sd
=function(a){this.options=a};Sd.prototype={constructor:Sd,lex:function(a){this
.text=a,this.index=0,this.ch=c,this.lastCh=":",this.tokens=[];for(var b,d=[];t
his.index<this.text.length;){if(this.ch=this.text.charAt(this.index),this.is("
\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&t
his.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this
.readIdent(),this.was("{,")&&"{"===d[0]&&(b=this.tokens[this.tokens.length-1])
&&(b.json=-1===b.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens
.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this
.is("}]:,")}),this.is("{[")&&d.unshift(this.ch),this.is("}]")&&d.shift(),this.
index++; else{if(this.isWhitespace(this.ch)){this.index++;continue}var e=this.
ch+this.peek(),f=e+this.peek(2),g=Qd[this.ch],h=Qd[e],i=Qd[f];i?(this.tokens.p
ush({index:this.index,text:f,fn:i}),this.index+=3):h?(this.tokens.push({index:
this.index,text:e,fn:h}),this.index+=2):g?(this.tokens.push({index:this.index,
text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.th
rowError("Unexpected next character
",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function
(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.l
astCh)},peek:function(a){var b=a||1;return this.index+b<this.text.length?this.
text.charAt(this.index+b):!1},isNumber:function(a){return
a>="0"&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"
"===a||"\n"===a||" "===a||" "===a},isIdent:function(a){return a>="a"&&"z">=a||
a>="A"&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"
===a||this.isNumber(a)},throwError:function(a,b,c){c=c||this.index;var
d=s(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,c)+"]":" "+c;throw
Od("lexerr","Lexer Error: {0} at column{1} in expression
[{2}].",a,d,this.text)},readNumber:function(){for(var
a="",b=this.index;this.index<this.text.length;){var
c=Yc(this.text.charAt(this.index));if("."==c||this.isNumber(c))a+=c;else{var
d=this.peek();if("e"==c&&this.isExpOperator(d))a+=c;else if(this.isExpOperator
(c)&&d&&this.isNumber(d)&&"e"==a.charAt(a.length-1))a+=c;else{if(!this.isExpOp
erator(c)||d&&this.isNumber(d)||"e"!=a.charAt(a.length-1))break;this.throwErro
r("Invalid exponent")}}this.index++}a=1*a,this.tokens.push({index:b,text:a,jso
n:!0,fn:function(){return a}})},readIdent:function(){for(var a,b,c,d,e=this,f=
"",g=this.index;this.index<this.text.length&&(d=this.text.charAt(this.index),"
."===d||this.isIdent(d)||this.isNumber(d));)"."===d&&(a=this.index),f+=d,this.
index++;if(a)for(b=this.index;b<this.text.length;){if(d=this.text.charAt(b),"(
"===d){c=f.substr(a-g+1),f=f.substr(0,a-g),this.index=b;break}if(!this.isWhite
space(d))break;b++}var
h={index:g,text:f};if(Qd.hasOwnProperty(f))h.fn=Qd[f],h.json=Qd[f];else{var
i=mc(f,this.options,this.text);h.fn=l(function(a,b){return
i(a,b)},{assign:function(a,b){return kc(a,f,b,e.text,e.options)}})}this.tokens
.push(h),c&&(this.tokens.push({index:a,text:".",json:!1}),this.tokens.push({in
dex:a+1,text:c,json:!1}))},readString:function(a){var
b=this.index;this.index++;for(var
c="",d=a,e=!1;this.index<this.text.length;){var
f=this.text.charAt(this.index);if(d+=f,e){if("u"===f){var g=this.text.substrin
g(this.index+1,this.index+5);g.match(/[\da-f]{4}/i)||this.throwError("Invalid
unicode escape
[\\u"+g+"]"),this.index+=4,c+=String.fromCharCode(parseInt(g,16))}else{var
h=Rd[f];c+=h?h:f}e=!1}else if("\\"===f)e=!0;else{if(f===a)return this.index++,
this.tokens.push({index:b,text:d,string:c,json:!0,fn:function(){return
c}}),void 0;c+=f}this.index++}this.throwError("Unterminated quote",b)}};var Td
=function(a,b,c){this.lexer=a,this.$filter=b,this.options=c};Td.ZERO=function(
){return 0},Td.prototype={constructor:Td,parse:function(a,b){this.text=a,this.
json=b,this.tokens=this.lexer.lex(a),b&&(this.assignment=this.logicalOR,this.f
unctionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this
.throwError("is not valid json",{text:a,index:0})});var
c=b?this.primary():this.statements();return
0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0
]),c.literal=!!c.literal,c.constant=!!c.constant,c},primary:function(){var
a;if(this.expect("("))a=this.filterChain(),this.consume(")");else
if(this.expect("["))a=this.arrayDeclaration();else
if(this.expect("{"))a=this.object();else{var
b=this.expect();a=b.fn,a||this.throwError("not a primary
expression",b),b.json&&(a.constant=!0,a.literal=!0)}for(var c,d;c=this.expect(
"(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a
,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwErr
or("IMPOSSIBLE");return a},throwError:function(a,b){throw Od("syntax","Syntax
Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}]
.",b.text,a,b.index+1,this.text,this.text.substring(b.index))},peekToken:funct
ion(){if(0===this.tokens.length)throw Od("ueoe","Unexpected end of expression:
{0}",this.text);return
this.tokens[0]},peek:function(a,b,c,d){if(this.tokens.length>0){var
e=this.tokens[0],f=e.text;if(f===a||f===b||f===c||f===d||!a&&!b&&!c&&!d)return
e}return!1},expect:function(a,b,c,d){var e=this.peek(a,b,c,d);return
e?(this.json&&!e.json&&this.throwError("is not valid json",e),this.tokens.shif
t(),e):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected,
expecting ["+a+"]",this.peek())},unaryFn:function(a,b){return
l(function(c,d){return
a(c,d,b)},{constant:b.constant})},ternaryFn:function(a,b,c){return
l(function(d,e){return a(d,e)?b(d,e):c(d,e)},{constant:a.constant&&b.constant&
&c.constant})},binaryFn:function(a,b,c){return l(function(d,e){return
b(d,e,a,c)},{constant:a.constant&&c.constant})},statements:function(){for(var 
a=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&a.push(this.filte
rChain()),!this.expect(";"))return 1===a.length?a[0]:function(b,c){for(var
d,e=0;e<a.length;e++){var f=a[e];f&&(d=f(b,c))}return
d}},filterChain:function(){for(var
a,b=this.expression();;){if(!(a=this.expect("|")))return
b;b=this.binaryFn(b,a.fn,this.filter())}},filter:function(){for(var
a=this.expect(),b=this.$filter(a.text),c=[];;){if(!(a=this.expect(":"))){var
d=function(a,d,e){for(var f=[e],g=0;g<c.length;g++)f.push(c[g](a,d));return
b.apply(a,f)};return function(){return
d}}c.push(this.expression())}},expression:function(){return
this.assignment()},assignment:function(){var a,b,c=this.ternary();return(b=thi
s.expect("="))?(c.assign||this.throwError("implies assignment but
["+this.text.substring(0,b.index)+"] can not be assigned
to",b),a=this.ternary(),function(b,d){return
c.assign(b,a(b,d),d)}):c},ternary:function(){var a,b,c=this.logicalOR();return
(b=this.expect("?"))?(a=this.ternary(),(b=this.expect(":"))?this.ternaryFn(c,a
,this.ternary()):(this.throwError("expected :",b),void
0)):c},logicalOR:function(){for(var
a,b=this.logicalAND();;){if(!(a=this.expect("||")))return
b;b=this.binaryFn(b,a.fn,this.logicalAND())}},logicalAND:function(){var a,b=th
is.equality();return(a=this.expect("&&"))&&(b=this.binaryFn(b,a.fn,this.logica
lAND())),b},equality:function(){var a,b=this.relational();return(a=this.expect
("==","!=","===","!=="))&&(b=this.binaryFn(b,a.fn,this.equality())),b},relatio
nal:function(){var a,b=this.additive();return(a=this.expect("<",">","<=",">=")
)&&(b=this.binaryFn(b,a.fn,this.relational())),b},additive:function(){for(var 
a,b=this.multiplicative();a=this.expect("+","-");)b=this.binaryFn(b,a.fn,this.
multiplicative());return b},multiplicative:function(){for(var a,b=this.unary()
;a=this.expect("*","/","%");)b=this.binaryFn(b,a.fn,this.unary());return
b},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expec
t("-"))?this.binaryFn(Td.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.una
ryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var
b=this,c=this.expect().text,d=mc(c,this.options,this.text);return
l(function(b,c,e){return d(e||a(b,c),c)},{assign:function(d,e,f){return
kc(a(d,f),c,e,b.text,b.options)}})},objectIndex:function(a){var
b=this,d=this.expression();return this.consume("]"),l(function(e,f){var
g,h,i=a(e,f),j=d(e,f);return
i?(g=jc(i[j],b.text),g&&g.then&&b.options.unwrapPromises&&(h=g,"$$v"in g||(h.$
$v=c,h.then(function(a){h.$$v=a})),g=g.$$v),g):c},{assign:function(c,e,f){var
g=d(c,f),h=jc(a(c,f),b.text);return h[g]=e}})},functionCall:function(a,b){var
c=[];if(")"!==this.peekToken().text)do
c.push(this.expression());while(this.expect(","));this.consume(")");var
d=this;return function(e,f){for(var
g=[],h=b?b(e,f):e,i=0;i<c.length;i++)g.push(c[i](e,f));var
j=a(e,f,h)||o;jc(j,d.text);var
k=j.apply?j.apply(h,g):j(g[0],g[1],g[2],g[3],g[4]);return
jc(k,d.text)}},arrayDeclaration:function(){var
a=[],b=!0;if("]"!==this.peekToken().text)do{var c=this.expression();a.push(c),
c.constant||(b=!1)}while(this.expect(","));return
this.consume("]"),l(function(b,c){for(var
d=[],e=0;e<a.length;e++)d.push(a[e](b,c));return
d},{literal:!0,constant:b})},object:function(){var
a=[],b=!0;if("}"!==this.peekToken().text)do{var
c=this.expect(),d=c.string||c.text;this.consume(":");var e=this.expression();a
.push({key:d,value:e}),e.constant||(b=!1)}while(this.expect(","));return
this.consume("}"),l(function(b,c){for(var d={},e=0;e<a.length;e++){var
f=a[e];d[f.key]=f.value(b,c)}return d},{literal:!0,constant:b})}};var Ud={},Vd
=d("$sce"),Wd={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"
js"},Xd=b.createElement("a"),Yd=yc(a.location.href,!0);Bc.$inject=["$provide"]
,Dc.$inject=["$locale"],Ec.$inject=["$locale"];var Zd=".",$d={yyyy:Hc("FullYea
r",4),yy:Hc("FullYear",2,0,!0),y:Hc("FullYear",1),MMMM:Ic("Month"),MMM:Ic("Mon
th",!0),MM:Hc("Month",2,1),M:Hc("Month",1,1),dd:Hc("Date",2),d:Hc("Date",1),HH
:Hc("Hours",2),H:Hc("Hours",1),hh:Hc("Hours",2,-12),h:Hc("Hours",1,-12),mm:Hc(
"Minutes",2),m:Hc("Minutes",1),ss:Hc("Seconds",2),s:Hc("Seconds",1),sss:Hc("Mi
lliseconds",3),EEEE:Ic("Day"),EEE:Ic("Day",!0),a:Kc,Z:Jc},_d=/((?:[^yMdHhmsaZE
']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,ae=/^\-?\d+$/;Lc
.$inject=["$locale"];var be=q(Yc),ce=q(Zc);Oc.$inject=["$parse"];var
de=q({restrict:"E",compile:function(a,c){return
8>=ad&&(c.href||c.name||c.$set("href",""),a.append(b.createComment("IE fix")))
,function(a,b){b.on("click",function(a){b.attr("href")||a.preventDefault()})}}
}),ee={};f(xd,function(a,b){if("multiple"!=a){var
c=Ib("ng-"+b);ee[c]=function(){return{priority:100,compile:function(){return f
unction(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}}}}}}),f(["src","srcs
et","href"],function(a){var b=Ib("ng-"+a);ee[b]=function(){return{priority:99,
link:function(c,d,e){e.$observe(b,function(b){b&&(e.$set(a,b),ad&&d.prop(a,e[a
]))})}}}});var fe={$addControl:o,$removeControl:o,$setValidity:o,$setDirty:o,$
setPristine:o};Qc.$inject=["$element","$attrs","$scope"];var
ge=function(a){return["$timeout",function(b){var d={name:"form",restrict:a?"EA
C":"E",controller:Qc,compile:function(){return{pre:function(a,d,e,f){if(!e.act
ion){var g=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};r
d(d[0],"submit",g),d.on("$destroy",function(){b(function(){sd(d[0],"submit",g)
},0,!1)})}var h=d.parent().controller("form"),i=e.name||e.ngForm;i&&kc(a,i,f,i
),h&&d.on("$destroy",function(){h.$removeControl(f),i&&kc(a,i,c,i),l(f,fe)})}}
}};return d}]},he=ge(),ie=ge(!0),je=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S
+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ke=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.
-]+\.[A-Za-z]{2,6}$/,le=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,me={text:Rc,numbe
r:Sc,url:Tc,email:Uc,radio:Vc,checkbox:Wc,hidden:o,button:o,submit:o,reset:o},
ne=["$browser","$sniffer",function(a,b){return{restrict:"E",require:"?ngModel"
,link:function(c,d,e,f){f&&(me[Yc(e.type)]||me.text)(c,d,e,f,b,a)}}}],oe="ng-
valid",pe="ng-invalid",qe="ng-pristine",re="ng-dirty",se=["$scope","$exception
Handler","$attrs","$element","$parse",function(a,b,c,e,g){function h(a,b){b=b?
"-"+$(b,"-"):"",e.removeClass((a?pe:oe)+b).addClass((a?oe:pe)+b)}this.$viewVal
ue=Number.NaN,this.$modelValue=Number.NaN,this.$parsers=[],this.$formatters=[]
,this.$viewChangeListeners=[],this.$pristine=!0,this.$dirty=!1,this.$valid=!0,
this.$invalid=!1,this.$name=c.name;var i=g(c.ngModel),j=i.assign;if(!j)throw
d("ngModel")("nonassign","Expression '{0}' is non-assignable. Element:
{1}",c.ngModel,S(e));this.$render=o,this.$isEmpty=function(a){return
r(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||fe,l=
0,m=this.$error={};e.addClass(qe),h(!0),this.$setValidity=function(a,b){m[a]!=
=!b&&(b?(m[a]&&l--,l||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$in
valid=!0,this.$valid=!1,l++),m[a]=!b,h(b,a),k.$setValidity(a,b,this))},this.$s
etPristine=function(){this.$dirty=!1,this.$pristine=!0,e.removeClass(re).addCl
ass(qe)},this.$setViewValue=function(c){this.$viewValue=c,this.$pristine&&(thi
s.$dirty=!0,this.$pristine=!1,e.removeClass(qe).addClass(re),k.$setDirty()),f(
this.$parsers,function(a){c=a(c)}),this.$modelValue!==c&&(this.$modelValue=c,j
(a,c),f(this.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}}))};var
n=this;a.$watch(function(){var b=i(a);if(n.$modelValue!==b){var c=n.$formatter
s,d=c.length;for(n.$modelValue=b;d--;)b=c[d](b);n.$viewValue!==b&&(n.$viewValu
e=b,n.$render())}})}],te=function(){return{require:["ngModel","^?form"],contro
ller:se,link:function(a,b,c,d){var e=d[0],f=d[1]||fe;f.$addControl(e),b.on("$d
estroy",function(){f.$removeControl(e)})}}},ue=q({require:"ngModel",link:funct
ion(a,b,c,d){d.$viewChangeListeners.push(function(){a.$eval(c.ngChange)})}}),v
e=function(){return{require:"?ngModel",link:function(a,b,c,d){if(d){c.required
=!0;var e=function(a){return
c.required&&d.$isEmpty(a)?(d.$setValidity("required",!1),void 0):(d.$setValidi
ty("required",!0),a)};d.$formatters.push(e),d.$parsers.unshift(e),c.$observe("
required",function(){e(d.$viewValue)})}}}},we=function(){return{require:"ngMod
el",link:function(a,b,d,e){var g=/\/(.*)\//.exec(d.ngList),h=g&&new
RegExp(g[1])||d.ngList||",",i=function(a){if(!r(a)){var b=[];return a&&f(a.spl
it(h),function(a){a&&b.push(ld(a))}),b}};e.$parsers.push(i),e.$formatters.push
(function(a){return x(a)?a.join(", "):c}),e.$isEmpty=function(a){return!a||!a.
length}}}},xe=/^(true|false|\d+)$/,ye=function(){return{priority:100,compile:f
unction(a,b){return xe.test(b.ngValue)?function(a,b,c){c.$set("value",a.$eval(
c.ngValue))}:function(a,b,c){a.$watch(c.ngValue,function(a){c.$set("value",a)}
)}}}},ze=Pc(function(a,b,d){b.addClass("ng-binding").data("$binding",d.ngBind)
,a.$watch(d.ngBind,function(a){b.text(a==c?"":a)})}),Ae=["$interpolate",functi
on(a){return function(b,c,d){var
e=a(c.attr(d.$attr.ngBindTemplate));c.addClass("ng-binding").data("$binding",e
),d.$observe("ngBindTemplate",function(a){c.text(a)})}}],Be=["$sce","$parse",f
unction(a,b){return function(c,d,e){function
f(){return(g(c)||"").toString()}d.addClass("ng-
binding").data("$binding",e.ngBindHtml);var g=b(e.ngBindHtml);c.$watch(f,funct
ion(){d.html(a.getTrustedHtml(g(c))||"")})}}],Ce=Xc("",!0),De=Xc("Odd",0),Ee=X
c("Even",1),Fe=Pc({compile:function(a,b){b.$set("ngCloak",c),a.removeClass
("ng-cloak")}}),Ge=[function(){return{scope:!0,controller:"@"}}],He=["$sniffer
",function(a){return{priority:1e3,compile:function(){a.csp=!0}}}],Ie={};f("cli
ck dblclick mousedown mouseup mouseover mouseout mousemove mouseenter
mouseleave keydown keyup keypress submit focus blur copy cut paste".split("
"),function(a){var b=Ib("ng-"+a);Ie[b]=["$parse",function(c){return
function(d,e,f){var g=c(f[b]);e.on(Yc(a),function(a){d.$apply(function(){g(d,{
$event:a})})})}}]});var Je=["$animate",function(a){return{transclude:"element"
,priority:600,terminal:!0,restrict:"A",compile:function(b,d,e){return
function(b,d,f){var g,h;b.$watch(f.ngIf,function(f){g&&(a.leave(g),g=c),h&&(h.
$destroy(),h=c),R(f)&&(h=b.$new(),e(h,function(b){g=b,a.enter(b,d.parent(),d)}
))})}}}}],Ke=["$http","$templateCache","$anchorScroll","$compile","$animate","
$sce",function(a,b,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,tra
nsclude:"element",compile:function(g,h,i){var
j=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(g,h){var m,
n,o=0,p=function(){m&&(m.$destroy(),m=null),n&&(e.leave(n),n=null)};g.$watch(f
.parseAsResourceUrl(j),function(f){var
j=++o;f?(a.get(f,{cache:b}).success(function(a){if(j===o){var b=g.$new();i(b,f
unction(f){p(),m=b,n=f,n.html(a),e.enter(n,null,h),d(n.contents())(m),!s(l)||l
&&!g.$eval(l)||c(),m.$emit("$includeContentLoaded"),g.$eval(k)})}}).error(func
tion(){j===o&&p()}),g.$emit("$includeContentRequested")):p()})}}}}],Le=Pc({com
pile:function(){return{pre:function(a,b,c){a.$eval(c.ngInit)}}}}),Me=Pc({termi
nal:!0,priority:1e3}),Ne=["$locale","$interpolate",function(a,b){var
c=/{}/g;return{restrict:"EA",link:function(d,e,g){var h=g.count,i=g.$attr.when
&&e.attr(g.$attr.when),j=g.offset||0,k=d.$eval(i)||{},l={},m=b.startSymbol(),n
=b.endSymbol(),o=/^when(Minus)?(.+)$/;f(g,function(a,b){o.test(b)&&(k[Yc(b.rep
lace("when","").replace("Minus","-"))]=e.attr(g.$attr[b]))}),f(k,function(a,d)
{l[d]=b(a.replace(c,m+h+"-"+j+n))}),d.$watch(function(){var
b=parseFloat(d.$eval(h));return isNaN(b)?"":(b in k||(b=a.pluralCat(b-j)),l[b]
(d,e,!0))},function(a){e.text(a)})}}}],Oe=["$parse","$animate",function(a,c){f
unction g(a){if(a.startNode===a.endNode)return bd(a.startNode);var b=a.startNo
de,c=[b];do{if(b=b.nextSibling,!b)break;c.push(b)}while(b!==a.endNode);return
bd(c)}var h="$$NG_REMOVED",i=d("ngRepeat");return{transclude:"element",priorit
y:1e3,terminal:!0,compile:function(d,j,k){return function(d,j,l){var m,n,o,p,q
,r,s,t,u,v=l.ngRepeat,w=v.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)
\s*)?$/),x={$id:yb};if(!w)throw i("iexp","Expected expression in form of
'_item_ in _collection_[ track by _id_]' but got
'{0}'.",v);if(r=w[1],s=w[2],m=w[4],m?(n=a(m),o=function(a,b,c){return
u&&(x[u]=a),x[t]=b,x.$index=c,n(d,x)}):(p=function(a,b){return
yb(b)},q=function(a){return
a}),w=r.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/),!w)throw
i("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or
'(_key_, _value_)' expression, but got '{0}'.",r);t=w[3]||w[1],u=w[2];var
y={};d.$watchCollection(s,function(a){var l,m,n,r,s,w,x,z,A,B,C,D,E=j[0],F={},
G=[];if(e(a))B=a,A=o||p;else{A=o||q,B=[];for(w in a)a.hasOwnProperty(w)&&"$"!=
w.charAt(0)&&B.push(w);B.sort()}for(r=B.length,m=G.length=B.length,l=0;m>l;l++
)if(w=a===B?l:B[l],x=a[w],z=A(w,x,l),cb(z,"`track by`
id"),y.hasOwnProperty(z))C=y[z],delete
y[z],F[z]=C,G[l]=C;else{if(F.hasOwnProperty(z))throw
f(G,function(a){a&&a.startNode&&(y[a.id]=a)}),i("dupes","Duplicates in a
repeater are not allowed. Use 'track by' expression to specify unique keys.
Repeater: {0}, Duplicate key: {1}",v,z);G[l]={id:z},F[z]=!1}for(w in y)y.hasOw
nProperty(w)&&(C=y[w],D=g(C),c.leave(D),f(D,function(a){a[h]=!0}),C.scope.$des
troy());for(l=0,m=B.length;m>l;l++){if(w=a===B?l:B[l],x=a[w],C=G[l],G[l-1]&&(E
=G[l-1].endNode),C.startNode){s=C.scope,n=E;do n=n.nextSibling;while(n&&n[h]);
C.startNode==n||c.move(g(C),null,bd(E)),E=C.endNode}else s=d.$new();s[t]=x,u&&
(s[u]=w),s.$index=l,s.$first=0===l,s.$last=l===r-1,s.$middle=!(s.$first||s.$la
st),s.$odd=!(s.$even=l%2==0),C.startNode||k(s,function(a){a[a.length++]=b.crea
teComment(" end ngRepeat: "+v+" "),c.enter(a,null,bd(E)),E=a,C.scope=s,C.start
Node=E&&E.endNode?E.endNode:a[0],C.endNode=a[a.length-1],F[C.id]=C})}y=F})}}}}
],Pe=["$animate",function(a){return function(b,c,d){b.$watch(d.ngShow,function
(b){a[R(b)?"removeClass":"addClass"](c,"ng-
hide")})}}],Qe=["$animate",function(a){return function(b,c,d){b.$watch(d.ngHid
e,function(b){a[R(b)?"addClass":"removeClass"](c,"ng-hide")})}}],Re=Pc(functio
n(a,b,c){a.$watch(c.ngStyle,function(a,c){c&&a!==c&&f(c,function(a,c){b.css(c,
"")}),a&&b.css(a)},!0)}),Se=["$animate",function(a){return{restrict:"EA",requi
re:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
c,d,e){var g,h,i=d.ngSwitch||d.on,j=[];b.$watch(i,function(c){for(var i=0,k=j.
length;k>i;i++)j[i].$destroy(),a.leave(h[i]);h=[],j=[],(g=e.cases["!"+c]||e.ca
ses["?"])&&(b.$eval(d.change),f(g,function(c){var
d=b.$new();j.push(d),c.transclude(d,function(b){var d=c.element;h.push(b),a.en
ter(b,d.parent(),d)})}))})}}}],Te=Pc({transclude:"element",priority:800,requir
e:"^ngSwitch",compile:function(a,b,c){return function(a,d,e,f){f.cases["!"+b.n
gSwitchWhen]=f.cases["!"+b.ngSwitchWhen]||[],f.cases["!"+b.ngSwitchWhen].push(
{transclude:c,element:d})}}}),Ue=Pc({transclude:"element",priority:800,require
:"^ngSwitch",compile:function(a,b,c){return function(a,b,d,e){e.cases["?"]=e.c
ases["?"]||[],e.cases["?"].push({transclude:c,element:b})}}}),Ve=Pc({controlle
r:["$element","$transclude",function(a,b){if(!b)throw
d("ngTransclude")("orphan","Illegal use of ngTransclude directive in the
template! No parent directive that requires a transclusion found. Element: {0}
",S(a));this.$transclude=b}],link:function(a,b,c,d){d.$transclude(function(a){
b.html(""),b.append(a)})}}),We=["$templateCache",function(a){return{restrict:"
E",terminal:!0,compile:function(b,c){if("text/ng-template"==c.type){var d=c.id
,e=b[0].text;a.put(d,e)}}}}],Xe=d("ngOptions"),Ye=q({terminal:!0}),Ze=["$compi
le","$parse",function(a,d){var e=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\
s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w
]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,h={$setViewValue:o};return
{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$
attrs",function(a,b,c){var d,e,f=this,g={},i=h;f.databound=c.ngModel,f.init=fu
nction(a,b,c){i=a,d=b,e=c},f.addOption=function(b){cb(b,'"option value"'),g[b]
=!0,i.$viewValue==b&&(a.val(b),e.parent()&&e.remove())},f.removeOption=functio
n(a){this.hasOption(a)&&(delete g[a],i.$viewValue==a&&this.renderUnknownOption
(a))},f.renderUnknownOption=function(b){var c="? "+yb(b)+" ?";e.val(c),a.prepe
nd(e),a.val(c),e.prop("selected",!0)},f.hasOption=function(a){return g.hasOwnP
roperty(a)},b.$on("$destroy",function(){f.renderUnknownOption=o})}],link:funct
ion(h,i,j,k){function l(a,b,c,d){c.$render=function(){var a=c.$viewValue;d.has
Option(a)?(z.parent()&&z.remove(),b.val(a),""===a&&o.prop("selected",!0)):r(a)
&&o?b.val(""):d.renderUnknownOption(a)},b.on("change",function(){a.$apply(func
tion(){z.parent()&&z.remove(),c.$setViewValue(b.val())})})}function
m(a,b,c){var d;c.$render=function(){var a=new zb(c.$viewValue);f(b.find("optio
n"),function(b){b.selected=s(a.get(b.value))})},a.$watch(function(){K(d,c.$vie
wValue)||(d=I(c.$viewValue),c.$render())}),b.on("change",function(){a.$apply(f
unction(){var a=[];f(b.find("option"),function(b){b.selected&&a.push(b.value)}
),c.$setViewValue(a)})})}function n(b,f,h){function i(){var a,d,e,i,j,q,u,z,A,
B,C,D,E,F,G,H={"":[]},I=[""],J=h.$modelValue,K=p(b)||[],L=m?g(K):K,M={},N=!1;i
f(t)if(r&&x(J)){N=new zb([]);for(var
O=0;O<J.length;O++)M[l]=J[O],N.put(r(b,M),J[O])}else N=new zb(J);for(C=0;A=L.l
ength,A>C;C++){if(u=C,m){if(u=L[C],"$"===u.charAt(0))continue;M[m]=u}if(M[l]=K
[u],a=n(b,M)||"",(d=H[a])||(d=H[a]=[],I.push(a)),t)D=N.remove(r?r(b,M):o(b,M))
!==c;else{if(r){var P={};P[l]=J,D=r(b,P)===r(b,M)}else D=J===o(b,M);N=N||D}G=k
(b,M),G=G===c?"":G,d.push({id:r?r(b,M):m?L[C]:C,label:G,selected:D})}for(t||(v
||null===J?H[""].unshift({id:"",label:"",selected:!N}):N||H[""].unshift({id:"?
",label:"",selected:!0})),B=0,z=I.length;z>B;B++){for(a=I[B],d=H[a],s.length<=
B?(i={element:y.clone().attr("label",a),label:d.label},j=[i],s.push(j),f.appen
d(i.element)):(j=s[B],i=j[0],i.label!=a&&i.element.attr("label",i.label=a)),E=
null,C=0,A=d.length;A>C;C++)e=d[C],(q=j[C+1])?(E=q.element,q.label!==e.label&&
E.text(q.label=e.label),q.id!==e.id&&E.val(q.id=e.id),E[0].selected!==e.select
ed&&E.prop("selected",q.selected=e.selected)):(""===e.id&&v?F=v:(F=w.clone()).
val(e.id).attr("selected",e.selected).text(e.label),j.push(q={element:F,label:
e.label,id:e.id,selected:e.selected}),E?E.after(F):i.element.append(F),E=F);fo
r(C++;j.length>C;)j.pop().element.remove()}for(;s.length>B;)s.pop()[0].element
.remove()}var j;if(!(j=u.match(e)))throw Xe("iexp","Expected expression in
form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got
'{0}'. Element: {1}",u,S(f));var k=d(j[2]||j[1]),l=j[4]||j[6],m=j[5],n=d(j[3]|
|""),o=d(j[2]?j[1]:l),p=d(j[7]),q=j[8],r=q?d(j[8]):null,s=[[{element:f,label:"
"}]];v&&(a(v)(b),v.removeClass("ng-scope"),v.remove()),f.html(""),f.on("change
",function(){b.$apply(function(){var a,d,e,g,i,j,k,n,q,u=p(b)||[],v={};if(t){f
or(e=[],j=0,n=s.length;n>j;j++)for(a=s[j],i=1,k=a.length;k>i;i++)if((g=a[i].el
ement)[0].selected){if(d=g.val(),m&&(v[m]=d),r)for(q=0;q<u.length&&(v[l]=u[q],
r(b,v)!=d);q++);else v[l]=u[d];e.push(o(b,v))}}else
if(d=f.val(),"?"==d)e=c;else if(""==d)e=null;else
if(r){for(q=0;q<u.length;q++)if(v[l]=u[q],r(b,v)==d){e=o(b,v);break}}else v[l]
=u[d],m&&(v[m]=d),e=o(b,v);h.$setViewValue(e)})}),h.$render=i,b.$watch(i)}if(k
[1]){for(var o,p=k[0],q=k[1],t=j.multiple,u=j.ngOptions,v=!1,w=bd(b.createElem
ent("option")),y=bd(b.createElement("optgroup")),z=w.clone(),A=0,B=i.children(
),C=B.length;C>A;A++)if(""==B[A].value){o=v=B.eq(A);break}if(p.init(q,v,z),t&&
(j.required||j.ngRequired)){var D=function(a){return q.$setValidity("required"
,!j.required||a&&a.length),a};q.$parsers.push(D),q.$formatters.unshift(D),j.$o
bserve("required",function(){D(q.$viewValue)})}u?n(h,i,q):t?m(h,i,q):l(h,i,q,p
)}}}}],$e=["$interpolate",function(a){var b={addOption:o,removeOption:o};retur
n{restrict:"E",priority:100,compile:function(c,d){if(r(d.value)){var
e=a(c.text(),!0);e||d.$set("value",c.text())}return function(a,c,d){var f="$se
lectController",g=c.parent(),h=g.data(f)||g.parent().data(f);h&&h.databound?c.
prop("selected",!1):h=b,e?a.$watch(e,function(a,b){d.$set("value",a),a!==b&&h.
removeOption(b),h.addOption(a)}):h.addOption(d.value),c.on("$destroy",function
(){h.removeOption(d.value)})}}}}],_e=q({restrict:"E",terminal:!0});_(),fb(jd),
bd(b).ready(function(){Y(b,Z)})}(window,document),angular.element(document).fi
nd("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-
cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-
hide{display:none !important;}ng\\:form{display:block;}</style>'),angular.modu
le("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap
.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons
","ui.bootstrap.carousel","ui.bootstrap.dialog","ui.bootstrap.dropdownToggle",
"ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.position","ui.boo
tstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstra
p.rating","ui.bootstrap.tabs","ui.bootstrap.typeahead"]),angular.module("ui.bo
otstrap.tpls",["template/accordion/accordion-group.html","template/accordion/a
ccordion.html","template/alert/alert.html","template/carousel/carousel.html","
template/carousel/slide.html","template/dialog/message.html","template/paginat
ion/pagination.html","template/tooltip/tooltip-html-unsafe-
popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.ht
ml","template/progressbar/bar.html","template/progressbar/progress.html","temp
late/rating/rating.html","template/tabs/pane.html","template/tabs/tabs.html","
template/typeahead/typeahead.html"]),angular.module("ui.bootstrap.transition",
[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){functi
on d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var
e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventNa
me":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h
.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addCla
ss(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)
}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled
")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTr
ansitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transi
tion:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"
animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.
transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("
ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$tr
ansition",function(a){var b=function(a,b,c){b.removeClass("collapse"),b.css({h
eight:c}),b[0].offsetWidth,b.addClass("collapse")};return{link:function(c,d,e)
{var f,g=!0;c.$watch(function(){return d[0].scrollHeight},function(){0!==d[0].
scrollHeight&&(f||(g?b(c,d,d[0].scrollHeight+"px"):b(c,d,"auto")))}),c.$watch(
e.collapse,function(a){a?k():j()});var h,i=function(b){return
h&&h.cancel(),h=a(d,b),h.then(function(){h=void 0},function(){h=void 0}),h},j=
function(){g?(g=!1,f||b(c,d,"auto")):i({height:d[0].scrollHeight+"px"}).then(f
unction(){f||b(c,d,"auto")}),f=!1},k=function(){f=!0,g?(g=!1,b(c,d,0)):(b(c,d,
d[0].scrollHeight+"px"),i({height:"0"}))}}}}]),angular.module("ui.bootstrap.ac
cordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0
}).controller("AccordionController",["$scope","$attrs","accordionConfig",funct
ion(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined
(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.g
roups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this
;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.remo
veGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(th
is.groups.indexOf(a),1)}}]).directive("accordion",function(){return{restrict:"
EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"tem
plate/accordion/accordion.html"}}).directive("accordionGroup",["$parse","$tran
sition","$timeout",function(a){return{require:"^accordion",restrict:"EA",trans
clude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scop
e:{heading:"@"},controller:["$scope",function(){this.setHeading=function(a){th
is.heading=a}}],link:function(b,c,d,e){var f,g;e.addGroup(b),b.isOpen=!1,d.isO
pen&&(f=a(d.isOpen),g=f.assign,b.$watch(function(){return f(b.$parent)},functi
on(a){b.isOpen=a}),b.isOpen=f?f(b.$parent):!1),b.$watch("isOpen",function(a){a
&&e.closeOthers(b),g&&g(b.$parent,a)})}}}]).directive("accordionHeading",funct
ion(){return{restrict:"E",transclude:!0,template:"",replace:!0,require:"^accor
dionGroup",compile:function(a,b,c){return function(a,b,d,e){e.setHeading(c(a,f
unction(){}))}}}}).directive("accordionTransclude",function(){return{require:"
^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordi
onTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("u
i.bootstrap.alert",[]).directive("alert",function(){return{restrict:"EA",templ
ateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"=",cl
ose:"&"},link:function(a,b,c){a.closeable="close"in c}}}),angular.module("ui.b
ootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEven
t:"click"}).directive("btnRadio",["buttonConfig",function(a){var b=a.activeCla
ss||"active",c=a.toggleEvent||"click";return{require:"ngModel",link:function(a
,d,e,f){var g=a.$eval(e.btnRadio);a.$watch(function(){return f.$modelValue},fu
nction(a){angular.equals(a,g)?d.addClass(b):d.removeClass(b)}),d.bind(c,functi
on(){d.hasClass(b)||a.$apply(function(){f.$setViewValue(g)})})}}}]).directive(
"btnCheckbox",["buttonConfig",function(a){var b=a.activeClass||"active",c=a.to
ggleEvent||"click";return{require:"ngModel",link:function(a,d,e,f){var g=a.$ev
al(e.btnCheckboxTrue),h=a.$eval(e.btnCheckboxFalse);g=angular.isDefined(g)?g:!
0,h=angular.isDefined(h)?h:!1,a.$watch(function(){return f.$modelValue},functi
on(a){angular.equals(a,g)?d.addClass(b):d.removeClass(b)}),d.bind(c,function()
{a.$apply(function(){f.$setViewValue(d.hasClass(b)?h:g)})})}}}]),angular.modul
e("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselCon
troller",["$scope","$timeout","$transition","$q",function(a,b,c){function
d(){function c(){f?(a.next(),d()):a.pause()}e&&b.cancel(e);var
g=+a.interval;!isNaN(g)&&g>=0&&(e=b(c,g))}var e,f,g=this,h=g.slides=[],i=-1;g.
currentSlide=null,g.select=function(e,f){function j(){g.currentSlide&&angular.
isString(f)&&!a.noTransition&&e.$element?(e.$element.addClass(f),e.$element[0]
.offsetWidth=e.$element[0].offsetWidth,angular.forEach(h,function(a){angular.e
xtend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{d
irection:f,active:!0,entering:!0}),angular.extend(g.currentSlide||{},{directio
n:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$curren
tTransition.then(function(){k(b,c)},function(){k(b,c)})}(e,g.currentSlide)):k(
e,g.currentSlide),g.currentSlide=e,i=l,d()}function k(b,c){angular.extend(b,{d
irection:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction
:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null }var
l=h.indexOf(e);void 0===f&&(f=l>i?"next":"prev"),e&&e!==g.currentSlide&&(a.$cu
rrentTransition?(a.$currentTransition.cancel(),b(j)):j())},g.indexOfSlide=func
tion(a){return h.indexOf(a)},a.next=function(){var a=(i+1)%h.length;return
g.select(h[a],"next")},a.prev=function(){var a=0>i-1?h.length-1:i-1;return g.s
elect(h[a],"prev")},a.select=function(a){g.select(a)},a.isActive=function(a){r
eturn g.currentSlide===a},a.slides=function(){return h},a.$watch("interval",d)
,a.play=function(){f||(f=!0,d())},a.pause=function(){f=!1,e&&b.cancel(e)},g.ad
dSlide=function(b,c){b.$element=c,h.push(b),1===h.length||b.active?(g.select(h
[h.length-1]),1==h.length&&a.play()):b.active=!1},g.removeSlide=function(a){va
r b=h.indexOf(a);h.splice(b,1),h.length>0&&a.active&&(b>=h.length?g.select(h[b
-1]):g.select(h[b]))}}]).directive("carousel",[function(){return{restrict:"EA"
,transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",t
emplateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:
"="}}}]).directive("slide",[function(){return{require:"^carousel",restrict:"EA
",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{a
ctive:"="},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){
d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}]);var dia
logModule=angular.module("ui.bootstrap.dialog",["ui.bootstrap.transition"]);di
alogModule.controller("MessageBoxController",["$scope","dialog","model",functi
on(a,b,c){a.title=c.title,a.message=c.message,a.buttons=c.buttons,a.close=func
tion(a){b.close(a)}}]),dialogModule.provider("$dialog",function(){var
a={backdrop:!0,dialogClass:"modal",backdropClass:"modal-
backdrop",transitionClass:"fade",triggerClass:"in",dialogOpenClass:"modal-open
",resolve:{},backdropFade:!1,dialogFade:!1,keyboard:!0,backdropClick:!0},b={},
c={value:0};this.options=function(a){b=a},this.$get=["$http","$document","$com
pile","$rootScope","$controller","$templateCache","$q","$transition","$injecto
r",function(d,e,f,g,h,i,j,k,l){function m(a){var
b=angular.element("<div>");return b.addClass(a),b}function n(c){var d=this,e=t
his.options=angular.extend({},a,b,c);this._open=!1,this.backdropEl=m(e.backdro
pClass),e.backdropFade&&(this.backdropEl.addClass(e.transitionClass),this.back
dropEl.removeClass(e.triggerClass)),this.modalEl=m(e.dialogClass),e.dialogFade
&&(this.modalEl.addClass(e.transitionClass),this.modalEl.removeClass(e.trigger
Class)),this.handledEscapeKey=function(a){27===a.which&&(d.close(),a.preventDe
fault(),d.$scope.$apply())},this.handleBackDropClick=function(a){d.close(),a.p
reventDefault(),d.$scope.$apply()},this.handleLocationChange=function(){d.clos
e()}}var o=e.find("body");return n.prototype.isOpen=function(){return
this._open},n.prototype.open=function(a,b){var c=this,d=this.options;if(a&&(d.
templateUrl=a),b&&(d.controller=b),!d.template&&!d.templateUrl)throw
Error("Dialog.open expected template or templateUrl, neither found. Use
options or open method to specify them.");return
this._loadResolves().then(function(a){var b=a.$scope=c.$scope=a.$scope?a.$scop
e:g.$new();if(c.modalEl.html(a.$template),c.options.controller){var d=h(c.opti
ons.controller,a);c.modalEl.children().data("ngControllerController",d)}f(c.mo
dalEl)(b),c._addElementsToDom(),o.addClass(c.options.dialogOpenClass),setTimeo
ut(function(){c.options.dialogFade&&c.modalEl.addClass(c.options.triggerClass)
,c.options.backdropFade&&c.backdropEl.addClass(c.options.triggerClass)}),c._bi
ndEvents()}),this.deferred=j.defer(),this.deferred.promise},n.prototype.close=
function(a){function b(a){a.removeClass(d.options.triggerClass)}function
c(){d._open&&d._onCloseComplete(a)}var d=this,e=this._getFadingElements();if(o
.removeClass(d.options.dialogOpenClass),e.length>0)for(var
f=e.length-1;f>=0;f--)k(e[f],b).then(c);else
this._onCloseComplete(a)},n.prototype._getFadingElements=function(){var
a=[];return this.options.dialogFade&&a.push(this.modalEl),this.options.backdro
pFade&&a.push(this.backdropEl),a},n.prototype._bindEvents=function(){this.opti
ons.keyboard&&o.bind("keydown",this.handledEscapeKey),this.options.backdrop&&t
his.options.backdropClick&&this.backdropEl.bind("click",this.handleBackDropCli
ck),this.$scope.$on("$locationChangeSuccess",this.handleLocationChange)},n.pro
totype._unbindEvents=function(){this.options.keyboard&&o.unbind("keydown",this
.handledEscapeKey),this.options.backdrop&&this.options.backdropClick&&this.bac
kdropEl.unbind("click",this.handleBackDropClick)},n.prototype._onCloseComplete
=function(a){this._removeElementsFromDom(),this._unbindEvents(),this.deferred.
resolve(a)},n.prototype._addElementsToDom=function(){o.append(this.modalEl),th
is.options.backdrop&&(0===c.value&&o.append(this.backdropEl),c.value++),this._
open=!0},n.prototype._removeElementsFromDom=function(){this.modalEl.remove(),t
his.options.backdrop&&(c.value--,0===c.value&&this.backdropEl.remove()),this._
open=!1},n.prototype._loadResolves=function(){var a,b=[],c=[],e=this;return th
is.options.template?a=j.when(this.options.template):this.options.templateUrl&&
(a=d.get(this.options.templateUrl,{cache:i}).then(function(a){return a.data}))
,angular.forEach(this.options.resolve||[],function(a,d){c.push(d),b.push(angul
ar.isString(a)?l.get(a):l.invoke(a))}),c.push("$template"),b.push(a),j.all(b).
then(function(a){var b={};return angular.forEach(a,function(a,d){b[c[d]]=a}),b
.dialog=e,b})},{dialog:function(a){return new
n(a)},messageBox:function(a,b,c){return new n({templateUrl:"template/dialog/me
ssage.html",controller:"MessageBoxController",resolve:{model:function(){return
{title:a,message:b,buttons:c}}}})}}}]}),angular.module("ui.bootstrap.dropdownT
oggle",[]).directive("dropdownToggle",["$document","$location","$window",funct
ion(a){var b=null,c=angular.noop;return{restrict:"CA",link:function(d,e){d.$wa
tch("$location.path",function(){c()}),e.parent().bind("click",function(){c()})
,e.bind("click",function(d){d.preventDefault(),d.stopPropagation();var f=e===b
;b&&c(),f||(e.parent().addClass("open"),b=e,c=function(d){d&&(d.preventDefault
(),d.stopPropagation()),a.unbind("click",c),e.parent().removeClass("open"),c=a
ngular.noop,b=null},a.bind("click",c))})}}}]),angular.module("ui.bootstrap.mod
al",["ui.bootstrap.dialog"]).directive("modal",["$parse","$dialog",function(a,
b){return{restrict:"EA",terminal:!0,link:function(c,d,e){var f,g=angular.exten
d({},c.$eval(e.uiOptions||e.bsOptions||e.options)),h=e.modal||e.show;g=angular
.extend(g,{template:d.html(),resolve:{$scope:function(){return c}}});var i=b.d
ialog(g);d.remove(),f=e.close?function(){a(e.close)(c)}:function(){angular.isF
unction(a(h).assign)&&a(h).assign(c,!1)},c.$watch(h,function(a){a?i.open().the
n(function(){f()}):i.isOpen()&&i.close()})}}}]),angular.module("ui.bootstrap.p
agination",[]).constant("paginationConfig",{boundaryLinks:!1,directionLinks:!0
,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last"}).d
irective("pagination",["paginationConfig",function(a){return{restrict:"EA",sco
pe:{numPages:"=",currentPage:"=",maxSize:"=",onSelectPage:"&"},templateUrl:"te
mplate/pagination/pagination.html",replace:!0,link:function(b,c,d){function
e(a,b,c,d){return{number:a,text:b,active:c,disabled:d}}var f=angular.isDefined
(d.boundaryLinks)?b.$eval(d.boundaryLinks):a.boundaryLinks,g=angular.isDefined
(d.directionLinks)?b.$eval(d.directionLinks):a.directionLinks,h=angular.isDefi
ned(d.firstText)?d.firstText:a.firstText,i=angular.isDefined(d.previousText)?d
.previousText:a.previousText,j=angular.isDefined(d.nextText)?d.nextText:a.next
Text,k=angular.isDefined(d.lastText)?d.lastText:a.lastText;b.$watch("numPages
+ currentPage + maxSize",function(){b.pages=[];var
a=1,c=b.numPages;b.maxSize&&b.maxSize<b.numPages&&(a=Math.max(b.currentPage-Ma
th.floor(b.maxSize/2),1),c=a+b.maxSize-1,c>b.numPages&&(c=b.numPages,a=c-b.max
Size+1));for(var d=a;c>=d;d++){var
l=e(d,d,b.isActive(d),!1);b.pages.push(l)}if(g){var
m=e(b.currentPage-1,i,!1,b.noPrevious());b.pages.unshift(m);var
n=e(b.currentPage+1,j,!1,b.noNext());b.pages.push(n)}if(f){var
o=e(1,h,!1,b.noPrevious());b.pages.unshift(o);var p=e(b.numPages,k,!1,b.noNext
());b.pages.push(p)}b.currentPage>b.numPages&&b.selectPage(b.numPages)}),b.noP
revious=function(){return 1===b.currentPage},b.noNext=function(){return
b.currentPage===b.numPages},b.isActive=function(a){return b.currentPage===a},b
.selectPage=function(a){!b.isActive(a)&&a>0&&b.numPages>=a&&(b.currentPage=a,b
.onSelectPage({page:a}))}}}}]),angular.module("ui.bootstrap.position",[]).fact
ory("$position",["$document","$window",function(a,b){function c(a,c){return a.
currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.s
tyle[c]}function d(a){return"static"===(c(a,"position")||"static")}var
e=function(b){for(var
c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return
e||c};return{position:function(b){var
c=this.offset(b),d={top:0,left:0},f=e(b[0]);return f!=a[0]&&(d=this.offset(ang
ular.element(f)),d.top+=f.clientTop,d.left+=f.clientLeft),{width:b.prop("offse
tWidth"),height:b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},of
fset:function(c){var d=c[0].getBoundingClientRect();return{width:c.prop("offse
tWidth"),height:c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].body.scr
ollTop),left:d.left+(b.pageXOffset||a[0].body.scrollLeft)}}}}]),angular.module
("ui.bootstrap.tooltip",["ui.bootstrap.position"]).provider("$tooltip",functio
n(){function a(a){var b=/[A-Z]/g,c="-";return
a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"t
op",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:
"blur"},d={};this.options=function(a){angular.extend(d,a)},this.$get=["$window
","$compile","$timeout","$parse","$document","$position",function(e,f,g,h,i,j)
{return function(e,k,l){function m(a){var b,d;return b=a||n.trigger||l,d=angul
ar.isDefined(n.trigger)?c[n.trigger]||b:c[b]||b,{show:b,hide:d}}var
n=angular.extend({},b,d),o=a(e),p=m(void 0),q="<"+o+'-popup
title="{{tt_title}}" content="{{tt_content}}" placement="{{tt_placement}}"
animation="tt_animation()" is-open="tt_isOpen"></'+o+"-popup>";return{restrict
:"EA",scope:!0,link:function(a,b,c){function d(){a.tt_isOpen?o():l()}function
l(){a.tt_popupDelay?u=g(r,a.tt_popupDelay):a.$apply(r)}function
o(){a.$apply(function(){s()})}function r(){var c,d,e,f;if(a.tt_content){switch
(t&&g.cancel(t),w.css({top:0,left:0,display:"block"}),n.appendToBody?(v=v||i.f
ind("body"),v.append(w)):b.after(w),c=j.position(b),d=w.prop("offsetWidth"),e=
w.prop("offsetHeight"),a.tt_placement){case"right":f={top:c.top+c.height/2-e/2
+"px",left:c.left+c.width+"px"};break;case"bottom":f={top:c.top+c.height+"px",
left:c.left+c.width/2-d/2+"px"};break;case"left":f={top:c.top+c.height/2-e/2+"
px",left:c.left-d+"px"};break;default:f={top:c.top-e+"px",left:c.left+c.width/
2-d/2+"px"}}w.css(f),a.tt_isOpen=!0}}function s(){a.tt_isOpen=!1,g.cancel(u),a
ngular.isDefined(a.tt_animation)&&a.tt_animation()?t=g(function(){w.remove()},
500):w.remove()}var t,u,v,w=f(q)(a);a.tt_isOpen=!1,c.$observe(e,function(b){a.
tt_content=b}),c.$observe(k+"Title",function(b){a.tt_title=b}),c.$observe(k+"P
lacement",function(b){a.tt_placement=angular.isDefined(b)?b:n.placement}),c.$o
bserve(k+"Animation",function(b){a.tt_animation=angular.isDefined(b)?h(b):func
tion(){return n.animation}}),c.$observe(k+"PopupDelay",function(b){var c=parse
Int(b,10);a.tt_popupDelay=isNaN(c)?n.popupDelay:c}),c.$observe(k+"Trigger",fun
ction(a){b.unbind(p.show),b.unbind(p.hide),p=m(a),p.show===p.hide?b.bind(p.sho
w,d):(b.bind(p.show,l),b.bind(p.hide,o))})}}}}]}).directive("tooltipPopup",fun
ction(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animat
ion:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-
popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip",
"tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){retur
n{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpe
n:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-
popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a(
"tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.po
pover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{re
strict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&
",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popove
r",["$compile","$timeout","$parse","$window","$tooltip",function(a,b,c,d,e){re
turn e("popover","popover","click")}]),angular.module("ui.bootstrap.progressba
r",["ui.bootstrap.transition"]).constant("progressConfig",{animate:!0,autoType
:!1,stackedTypes:["success","info","warning","danger"]}).controller("ProgressB
arController",["$scope","$attrs","progressConfig",function(a,b,c){function
d(a){return g[a]}var e=angular.isDefined(b.animate)?a.$eval(b.animate):c.anima
te,f=angular.isDefined(b.autoType)?a.$eval(b.autoType):c.autoType,g=angular.is
Defined(b.stackedTypes)?a.$eval("["+b.stackedTypes+"]"):c.stackedTypes;this.ma
keBar=function(a,b,c){var g=angular.isObject(a)?a.value:a||0,h=angular.isObjec
t(b)?b.value:b||0,i=angular.isObject(a)&&angular.isDefined(a.type)?a.type:f?d(
c||0):null;return{from:h,to:g,type:i,animate:e}},this.addBar=function(b){a.bar
s.push(b),a.totalPercent+=b.to},this.clearBars=function(){a.bars=[],a.totalPer
cent=0},this.clearBars()}]).directive("progress",function(){return{restrict:"E
A",replace:!0,controller:"ProgressBarController",scope:{value:"=",onFull:"&",o
nEmpty:"&"},templateUrl:"template/progressbar/progress.html",link:function(a,b
,c,d){a.$watch("value",function(a,b){if(d.clearBars(),angular.isArray(a))for(v
ar c=0,e=a.length;e>c;c++)d.addBar(d.makeBar(a[c],b[c],c));else d.addBar(d.mak
eBar(a,b))},!0),a.$watch("totalPercent",function(b){b>=100?a.onFull():0>=b&&a.
onEmpty()},!0)}}}).directive("progressbar",["$transition",function(a){return{r
estrict:"EA",replace:!0,scope:{width:"=",old:"=",type:"=",animate:"="},templat
eUrl:"template/progressbar/bar.html",link:function(b,c){b.$watch("width",funct
ion(d){b.animate?(c.css("width",b.old+"%"),a(c,{width:d+"%"})):c.css("width",d
+"%")})}}}]),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",
{max:5}).directive("rating",["ratingConfig","$parse",function(a,b){return{rest
rict:"EA",scope:{value:"="},templateUrl:"template/rating/rating.html",replace:
!0,link:function(c,d,e){var
f=angular.isDefined(e.max)?c.$eval(e.max):a.max;c.range=[];for(var g=1;f>=g;g+
+)c.range.push(g);c.rate=function(a){c.readonly||(c.value=a)},c.enter=function
(a){c.readonly||(c.val=a)},c.reset=function(){c.val=angular.copy(c.value)},c.r
eset(),c.$watch("value",function(a){c.val=a}),c.readonly=!1,e.readonly&&c.$par
ent.$watch(b(e.readonly),function(a){c.readonly=!!a})}}}]),angular.module("ui.
bootstrap.tabs",[]).controller("TabsController",["$scope","$element",function(
a){var b=a.panes=[];this.select=a.select=function(a){angular.forEach(b,functio
n(a){a.selected=!1}),a.selected=!0},this.addPane=function(c){b.length||a.selec
t(c),b.push(c)},this.removePane=function(c){var d=b.indexOf(c);b.splice(d,1),c
.selected&&b.length>0&&a.select(b[b.length>d?d:d-1])}}]).directive("tabs",func
tion(){return{restrict:"EA",transclude:!0,scope:{},controller:"TabsController"
,templateUrl:"template/tabs/tabs.html",replace:!0}}).directive("pane",["$parse
",function(a){return{require:"^tabs",restrict:"EA",transclude:!0,scope:{headin
g:"@"},link:function(b,c,d,e){var f,g;b.selected=!1,d.active&&(f=a(d.active),g
=f.assign,b.$watch(function(){return f(b.$parent)},function(a){b.selected=a}),
b.selected=f?f(b.$parent):!1),b.$watch("selected",function(a){a&&e.select(b),g
&&g(b.$parent,a)}),e.addPane(b),b.$on("$destroy",function(){e.removePane(b)})}
,templateUrl:"template/tabs/pane.html",replace:!0}}]),angular.module("ui.boots
trap.typeahead",["ui.bootstrap.position"]).factory("typeaheadParser",["$parse"
,function(a){var b=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\
s+in\s+(.*)$/;return{parse:function(c){var d=c.match(b);if(!d)throw
Error("Expected typeahead specification in form of '_modelValue_ (as _label_)?
for _item_ in _collection_' but got '"+c+"'.");return{itemName:d[3],source:a(d
[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",
["$compile","$parse","$q","$document","$position","typeaheadParser",function(a
,b,c,d,e,f){var
g=[9,13,27,38,40];return{require:"ngModel",link:function(h,i,j,k){var l,m=h.$e
val(j.typeaheadMinLength)||1,n=f.parse(j.typeahead),o=h.$eval(j.typeaheadEdita
ble)!==!1,p=b(j.typeaheadLoading).assign||angular.noop,q=angular.element
("<typeahead-popup matches='matches' active='activeIdx'
select='select(activeIdx)' query='query' position='position'></typeahead-
popup>"),r=h.$new();h.$on("$destroy",function(){r.$destroy()});var
s=function(){r.matches=[],r.activeIdx=-1},t=function(a){var b={$viewValue:a};p
(h,!0),c.when(n.source(r,b)).then(function(c){if(a===k.$viewValue){if(c.length
>0){r.activeIdx=0,r.matches.length=0;for(var d=0;c.length>d;d++)b[n.itemName]=
c[d],r.matches.push({label:n.viewMapper(r,b),model:c[d]});r.query=a,r.position
=e.position(i),r.position.top=r.position.top+i.prop("offsetHeight")}else
s();p(h,!1)}},function(){s(),p(h,!1)})};s(),r.query=void
0,k.$parsers.push(function(a){return s(),l?a:(a&&a.length>=m&&t(a),o?a:void
0)}),k.$render=function(){var a={};a[n.itemName]=l||k.$viewValue,i.val(n.viewM
apper(r,a)||k.$viewValue),l=void 0},r.select=function(a){var b={};b[n.itemName
]=l=r.matches[a].model,k.$setViewValue(n.modelMapper(r,b)),k.$render()},i.bind
("keydown",function(a){0!==r.matches.length&&-1!==g.indexOf(a.which)&&(a.preve
ntDefault(),40===a.which?(r.activeIdx=(r.activeIdx+1)%r.matches.length,r.$dige
st()):38===a.which?(r.activeIdx=(r.activeIdx?r.activeIdx:r.matches.length)-1,r
.$digest()):13===a.which||9===a.which?r.$apply(function(){r.select(r.activeIdx
)}):27===a.which&&(a.stopPropagation(),s(),r.$digest()))}),d.bind("click",func
tion(){s(),r.$digest()}),i.after(a(q)(r))}}}]).directive("typeaheadPopup",func
tion(){return{restrict:"E",scope:{matches:"=",query:"=",active:"=",position:"=
",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead.html",link:
function(a){a.isOpen=function(){return
a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=
function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}})
.filter("typeaheadHighlight",function(){function a(a){return
a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?b.rep
lace(RegExp(a(c),"gi"),"<strong>$&</strong>"):c}}),angular.module("template/ac
cordion/accordion-
group.html",[]).run(["$templateCache",function(a){a.put("template/accordion
/accordion-group.html",'<div class="accordion-group">\n  <div class
="accordion-heading" ><a class="accordion-toggle" ng-click="isOpen = !isOpen"
accordion-transclude="heading">{{heading}}</a></div>\n  <div class="accordion-
body" collapse="!isOpen">\n    <div class="accordion-inner" ng-
transclude></div>  </div>\n</div>')}]),angular.module("template/accordion/acco
rdion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/ac
cordion.html",'<div class="accordion" ng-transclude></div>')}]),angular.module
("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("temp
late/alert/alert.html","<div class='alert' ng-class='type && \"alert-\" +
type'>\n    <button ng-show='closeable' type='button' class='close' ng-
click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")}])
,angular.module("template/carousel/carousel.html",[]).run(["$templateCache",fu
nction(a){a.put("template/carousel/carousel.html",'<div ng-
mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class
="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-
repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-
click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-
transclude></div>\n    <a ng-click="prev()" class="carousel-control left" ng-
show="slides().length > 1">&lsaquo;</a>\n    <a ng-click="next()" class
="carousel-control right" ng-show="slides().length > 1">&rsaquo;</a>\n</div>\n
')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",
function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n
'active': leaving || (active && !entering),\n    'prev': (next || active) &&
direction=='prev',\n    'next': (next || active) && direction=='next',\n
'right': direction=='prev',\n    'left': direction=='next'\n  }\"
class=\"item\" ng-transclude></div>\n")}]),angular.module("template/dialog/mes
sage.html",[]).run(["$templateCache",function(a){a.put("template/dialog/messag
e.html",'<div class="modal-header">\n <h1>{{ title }}</h1>\n</div>\n<div class
="modal-body">\n    <p>{{ message }}</p>\n</div>\n<div class="modal-footer">\n
<button ng-repeat="btn in buttons" ng-click="close(btn.result)" class=btn ng-
class="btn.cssClass">{{ btn.label }}</button>\n</div>\n')}]),angular.module("t
emplate/pagination/pagination.html",[]).run(["$templateCache",function(a){a.pu
t("template/pagination/pagination.html",'<div class="pagination"><ul>\n  <li
ng-repeat="page in pages" ng-class="{active: page.active, disabled:
page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n
</ul>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-
popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip
/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-
class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-
arrow"></div>\n  <div class="tooltip-inner" ng-bind-html-
unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip
/tooltip-
popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip
/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in:
isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div
class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("
template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("te
mplate/popover/popover.html",'<div class="popover {{placement}}" ng-class="{
in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div
class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-
show="title"></h3>\n      <div class="popover-content" ng-
bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progre
ssbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progress
bar/bar.html",'<div class="bar" ng-class=\'type && "bar-" + type\'></div>')}])
,angular.module("template/progressbar/progress.html",[]).run(["$templateCache"
,function(a){a.put("template/progressbar/progress.html",'<div
class="progress"><progressbar ng-repeat="bar in bars" width="bar.to"
old="bar.from" animate="bar.animate" type="bar.type"></progressbar></div>')}])
,angular.module("template/rating/rating.html",[]).run(["$templateCache",functi
on(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()">\n
<i ng-repeat="number in range" ng-mouseenter="enter(number)" ng-
click="rate(number)" ng-class="{\'icon-star\': number <= val, \'icon-star-
empty\': number > val}"></i>\n</span>\n')}]),angular.module("template/tabs/pan
e.html",[]).run(["$templateCache",function(a){a.put("template/tabs/pane.html",
'<div class="tab-pane" ng-class="{active: selected}" ng-show="selected" ng-tra
nsclude></div>\n')}]),angular.module("template/tabs/tabs.html",[]).run(["$temp
lateCache",function(a){a.put("template/tabs/tabs.html",'<div
class="tabbable">\n  <ul class="nav nav-tabs">\n    <li ng-repeat="pane in
panes" ng-class="{active:pane.selected}">\n      <a ng-
click="select(pane)">{{pane.heading}}</a>\n    </li>\n  </ul>\n  <div class
="tab-content" ng-transclude></div>\n</div>\n')}]),angular.module("template/ty
peahead/match.html",[]).run(["$templateCache",function(a){a.put("template/type
ahead/match.html",'<a tabindex="-1" ng-bind-html-unsafe="match.label | typeahe
adHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead.html
",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead.ht
ml",'<ul class="typeahead dropdown-menu" ng-style="{display:
isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left:
position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-
class="{active: isActive($index) }" ng-mouseenter="selectActive($index)">\n
<a tabindex="-1" ng-click="selectMatch($index)" ng-bind-html-
unsafe="match.label | typeaheadHighlight:query"></a>\n    </li>\n</ul>')}]),an
gular.module("placeholders",["placeholders.img","placeholders.txt"]),angular.m
odule("placeholders.img",[]).directive("phImg",function(){return{restrict:"A",
scope:{dimensions:"@phImg"},link:function(a,b){function c(){var
b=[a.size.h,a.size.w].sort(),c=Math.round(b[1]/16);return
Math.max(f.text_size,c)}function d(){e=e||document.createElement("canvas");var
b,d,g=e.getContext("2d");return e.width=a.size.w,e.height=a.size.h,g.fillStyle
=f.fill_color,g.fillRect(0,0,a.size.w,a.size.h),b=c(),d=a.dimensions,g.fillSty
le=f.text_color,g.textAlign="center",g.textBaseline="middle",g.font="bold
"+b+"pt sans-serif",g.measureText(d).width/a.size.w>1&&(b=f.text_size/(g.measu
reText(d).width/a.size.w),g.font="bold "+b+"pt sans-serif"),g.fillText(a.dimen
sions,a.size.w/2,a.size.h/2),e.toDataURL("image/png")}var e,f={text_size:10,fi
ll_color:"#EEEEEE",text_color:"#AAAAAA"};a.$watch("dimensions",function(){if(a
ngular.isDefined(a.dimensions)){var
c,e=a.dimensions.match(/^(\d+)x(\d+)$/);return e?(a.size={w:e[1],h:e[2]},b.pro
p("title",a.dimensions),b.prop("alt",a.dimensions),c=d(),"IMG"===b.prop("tagNa
me")?b.prop("src",c):b.css("background-image",'url("'+c+'")'),void
0):(console.error("Expected '000x000'. Got "+a.dimensions),void 0)}})}}}),angu
lar.module("placeholders.txt",[]).factory("TextGeneratorService",function(){fu
nction a(a,b){return Math.floor(Math.random()*(b-a+1))+a}var b=["lorem","ipsum
","dolor","sit","amet,","consectetur","adipiscing","elit","ut","aliquam,","pur
us","sit","amet","luctus","venenatis,","lectus","magna","fringilla","urna,","p
orttitor","rhoncus","dolor","purus","non","enim","praesent","elementum","facil
isis","leo,","vel","fringilla","est","ullamcorper","eget","nulla","facilisi","
etiam","dignissim","diam","quis","enim","lobortis","scelerisque","fermentum","
dui","faucibus","in","ornare","quam","viverra","orci","sagittis","eu","volutpa
t","odio","facilisis","mauris","sit","amet","massa","vitae","tortor","condimen
tum","lacinia","quis","vel","eros","donec","ac","odio","tempor","orci","dapibu
s","ultrices","in","iaculis","nunc","sed","augue","lacus,","viverra","vitae","
congue","eu,","consequat","ac","felis","donec","et","odio","pellentesque","dia
m","volutpat","commodo","sed","egestas","egestas","fringilla","phasellus","fau
cibus","scelerisque","eleifend","donec","pretium","vulputate","sapien","nec","
sagittis","aliquam","malesuada","bibendum","arcu","vitae","elementum","curabit
ur","vitae","nunc","sed","velit","dignissim","sodales","ut","eu","sem","intege
r","vitae","justo","eget","magna","fermentum","iaculis","eu","non","diam","pha
sellus","vestibulum","lorem","sed","risus","ultricies","tristique","nulla","al
iquet","enim","tortor,","at","auctor","urna","nunc","id","cursus","metus","ali
quam","eleifend","mi","in","nulla","posuere","sollicitudin","aliquam","ultrice
s","sagittis","orci,","a","scelerisque","purus","semper","eget","duis","at","t
ellus","at","urna","condimentum","mattis","pellentesque","id","nibh","tortor,"
,"id","aliquet","lectus","proin","nibh","nisl,","condimentum","id","venenatis"
,"a,","condimentum","vitae","sapien","pellentesque","habitant","morbi","tristi
que","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas",
"sed","tempus,","urna","et","pharetra","pharetra,","massa","massa","ultricies"
,"mi,","quis","hendrerit","dolor","magna","eget","est","lorem","ipsum","dolor"
,"sit","amet,","consectetur","adipiscing","elit","pellentesque","habitant","mo
rbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis
","egestas","integer","eget","aliquet","nibh","praesent","tristique","magna","
sit","amet","purus","gravida","quis","blandit","turpis","cursus","in","hac","h
abitasse","platea","dictumst","quisque","sagittis,","purus","sit","amet","volu
tpat","consequat,","mauris","nunc","congue","nisi,","vitae","suscipit","tellus
","mauris","a","diam","maecenas","sed","enim","ut","sem","viverra","aliquet","
eget","sit","amet","tellus","cras","adipiscing","enim","eu","turpis","egestas"
,"pretium","aenean","pharetra,","magna","ac","placerat","vestibulum,","lectus"
,"mauris","ultrices","eros,","in","cursus","turpis","massa","tincidunt","dui",
"ut","ornare","lectus","sit","amet","est","placerat","in","egestas","erat","im
perdiet","sed","euismod","nisi","porta","lorem","mollis","aliquam","ut","portt
itor","leo","a","diam","sollicitudin","tempor","id","eu","nisl","nunc","mi","i
psum,","faucibus","vitae","aliquet","nec,","ullamcorper","sit","amet","risus",
"nullam","eget","felis","eget","nunc","lobortis","mattis","aliquam","faucibus"
,"purus","in","massa","tempor","nec","feugiat","nisl","pretium","fusce","id","
velit","ut","tortor","pretium","viverra","suspendisse","potenti","nullam","ac"
,"tortor","vitae","purus","faucibus","ornare","suspendisse","sed","nisi","lacu
s,","sed","viverra","tellus","in","hac","habitasse","platea","dictumst","vesti
bulum","rhoncus","est","pellentesque","elit","ullamcorper","dignissim","cras",
"tincidunt","lobortis","feugiat","vivamus","at","augue","eget","arcu","dictum"
,"varius","duis","at","consectetur","lorem","donec","massa","sapien,","faucibu
s","et","molestie","ac,","feugiat","sed","lectus","vestibulum","mattis","ullam
corper","velit","sed","ullamcorper","morbi","tincidunt","ornare","massa,","ege
t","egestas","purus","viverra","accumsan","in","nisl","nisi,","scelerisque","e
u","ultrices","vitae,","auctor","eu","augue","ut","lectus","arcu,","bibendum",
"at","varius","vel,","pharetra","vel","turpis","nunc","eget","lorem","dolor,",
"sed","viverra","ipsum","nunc","aliquet","bibendum","enim,","facilisis","gravi
da","neque","convallis","a","cras","semper","auctor","neque,","vitae","tempus"
,"quam","pellentesque","nec","nam","aliquam","sem","et","tortor","consequat","
id","porta","nibh","venenatis","cras","sed","felis","eget","velit","aliquet","
sagittis","id","consectetur","purus","ut","faucibus","pulvinar","elementum","i
nteger","enim","neque,","volutpat","ac","tincidunt","vitae,","semper","quis","
lectus","nulla","at","volutpat","diam","ut","venenatis","tellus","in","metus",
"vulputate","eu","scelerisque","felis","imperdiet","proin","fermentum","leo","
vel","orci","porta","non","pulvinar","neque","laoreet","suspendisse","interdum
","consectetur","libero,","id","faucibus","nisl","tincidunt","eget","nullam","
non","nisi","est,","sit","amet","facilisis","magna","etiam","tempor,","orci","
eu","lobortis","elementum,","nibh","tellus","molestie","nunc,","non","blandit"
,"massa","enim","nec","dui","nunc","mattis","enim","ut","tellus","elementum","
sagittis","vitae","et","leo","duis","ut","diam","quam","nulla","porttitor","ma
ssa","id","neque","aliquam","vestibulum","morbi","blandit","cursus","risus,","
at","ultrices","mi","tempus","imperdiet","nulla","malesuada","pellentesque","e
lit","eget","gravida","cum","sociis","natoque","penatibus","et","magnis","dis"
,"parturient","montes,","nascetur","ridiculus","mus","mauris","vitae","ultrici
es","leo","integer","malesuada","nunc","vel","risus","commodo","viverra","maec
enas","accumsan,","lacus","vel","facilisis","volutpat,","est","velit","egestas
","dui,","id","ornare","arcu","odio","ut","sem","nulla","pharetra","diam","sit
","amet","nisl","suscipit","adipiscing","bibendum","est","ultricies","integer"
,"quis","auctor","elit","sed","vulputate","mi","sit","amet","mauris","commodo"
,"quis","imperdiet","massa","tincidunt","nunc","pulvinar","sapien","et","ligul
a","ullamcorper","malesuada","proin","libero","nunc,","consequat","interdum","
varius","sit","amet,","mattis","vulputate","enim","nulla","aliquet","porttitor
","lacus,","luctus","accumsan","tortor","posuere","ac","ut","consequat","sempe
r","viverra","nam","libero","justo,","laoreet","sit","amet","cursus","sit","am
et,","dictum","sit","amet","justo","donec","enim","diam,","vulputate","ut","ph
aretra","sit","amet,","aliquam","id","diam","maecenas","ultricies","mi","eget"
,"mauris","pharetra","et","ultrices","neque","ornare","aenean","euismod","elem
entum","nisi,","quis","eleifend","quam","adipiscing","vitae","proin","sagittis
,","nisl","rhoncus","mattis","rhoncus,","urna","neque","viverra","justo,","nec
","ultrices","dui","sapien","eget","mi","proin","sed","libero","enim,","sed","
faucibus","turpis","in","eu","mi","bibendum","neque","egestas","congue","quisq
ue","egestas","diam","in","arcu","cursus","euismod","quis","viverra","nibh","c
ras","pulvinar","mattis","nunc,","sed","blandit","libero","volutpat","sed","cr
as","ornare","arcu","dui","vivamus","arcu","felis,","bibendum","ut","tristique
","et,","egestas","quis","ipsum","suspendisse","ultrices","fusce","ut","placer
at","orci","nulla","pellentesque","dignissim","enim,","sit","amet","venenatis"
,"urna","cursus","eget","nunc","scelerisque","viverra","mauris,","in","aliquam
","sem","fringilla","ut","morbi","tincidunt","augue","interdum","velit","euism
od","in","pellentesque","massa","placerat","duis","ultricies","lacus","sed","t
urpis","tincidunt","id","aliquet","risus","feugiat","in","ante","metus,","dict
um","at","tempor","commodo,","ullamcorper","a","lacus","vestibulum","sed","arc
u","non","odio","euismod","lacinia","at","quis","risus","sed","vulputate","odi
o","ut","enim","blandit","volutpat","maecenas","volutpat","blandit","aliquam",
"etiam","erat","velit,","scelerisque","in","dictum","non,","consectetur","a","
erat","nam","at","lectus","urna","duis","convallis","convallis","tellus,","id"
,"interdum","velit","laoreet","id","donec","ultrices","tincidunt","arcu,","non
","sodales","neque","sodales","ut","etiam","sit","amet","nisl","purus,","in","
mollis","nunc","sed","id","semper","risus","in","hendrerit","gravida","rutrum"
,"quisque","non","tellus","orci,","ac","auctor","augue","mauris","augue","nequ
e,","gravida","in","fermentum","et,","sollicitudin","ac","orci","phasellus","e
gestas","tellus","rutrum","tellus","pellentesque","eu","tincidunt","tortor","a
liquam","nulla","facilisi","cras","fermentum,","odio","eu","feugiat","pretium,
","nibh","ipsum","consequat","nisl,","vel","pretium","lectus","quam","id","leo
","in","vitae","turpis","massa","sed","elementum","tempus","egestas","sed","se
d","risus","pretium","quam","vulputate","dignissim","suspendisse","in","est","
ante","in","nibh","mauris,","cursus","mattis","molestie","a,","iaculis","at","
erat","pellentesque","adipiscing","commodo","elit,","at","imperdiet","dui","ac
cumsan","sit","amet","nulla","facilisi","morbi","tempus","iaculis","urna,","id
","volutpat","lacus","laoreet","non","curabitur","gravida","arcu","ac","tortor
","dignissim","convallis","aenean","et","tortor","at","risus","viverra","adipi
scing","at","in","tellus","integer","feugiat","scelerisque","varius","morbi","
enim","nunc,","faucibus","a","pellentesque","sit","amet,","porttitor","eget","
dolor","morbi","non","arcu","risus,","quis","varius","quam","quisque","id","di
am","vel","quam","elementum","pulvinar","etiam","non","quam","lacus","suspendi
sse","faucibus","interdum","posuere","lorem","ipsum","dolor","sit","amet,","co
nsectetur","adipiscing","elit","duis","tristique","sollicitudin","nibh","sit",
"amet","commodo","nulla","facilisi","nullam","vehicula","ipsum","a","arcu","cu
rsus","vitae","congue","mauris","rhoncus","aenean","vel","elit","scelerisque",
"mauris","pellentesque","pulvinar","pellentesque","habitant","morbi","tristiqu
e","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","m
aecenas","pharetra","convallis","posuere","morbi","leo","urna,","molestie","at
","elementum","eu,","facilisis","sed","odio","morbi","quis","commodo","odio","
aenean","sed","adipiscing","diam","donec","adipiscing","tristique","risus","ne
c","feugiat","in","fermentum","posuere","urna","nec","tincidunt","praesent","s
emper","feugiat","nibh","sed","pulvinar","proin","gravida","hendrerit","lectus
","a","molestie","gravida","dictum"]; return{createSentence:function(c){var
d,e;return c=c||a(5,20),d=a(0,b.length-c-1),e=b.slice(d,d+c).join(" ").replace
(/\,$/g,"")+".",e=e.charAt(0).toUpperCase()+e.slice(1)},createSentences:functi
on(b){var
c=[],d=0;for(b=b||a(3,5),d=0;b>d;d++)c.push(this.createSentence());return
c.join(" ")},createParagraph:function(a){var b=this.createSentences(a);return"
<p>"+b+"</p>"},createParagraphs:function(b,c){var
d=[],e=0;for(b=b||a(3,7),e=0;b>e;e++)d.push(this.createParagraph(c));return d.
join("\n")}}}).directive("phTxt",["TextGeneratorService",function(a){return{re
strict:"EA",controller:["$scope","$element","$attrs",function(b,c,d){function
e(){var b;b=g||!f?a.createParagraphs(g,f):a.createSentences(f),c.html(b)}var
f,g;d.$observe("phTxt",function(a){var b,c;b=a.match(/(\d+)p/),c=a.match(/(\d+
)s/),g=null!==b?parseInt(b[1],10):!1,f=null!==c?parseInt(c[1],10):!1,e()}),d.p
hTxt||e()}]}}]),function(a,b,c){"use strict";function d(a,b){return
s(new(s(function(){},{prototype:a})),b)}function e(a){return r(arguments,funct
ion(b){b!==a&&r(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function
f(a,b,c){this.fromConfig=function(a,b,c){return m(a.template)?this.fromString(
a.template,b):m(a.templateUrl)?this.fromUrl(a.templateUrl,b):m(a.templateProvi
der)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(
a,b){return n(a)?a(b):a},this.fromUrl=function(c,d){return
n(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b}).then(function(a){return
a.data})},this.fromProvider=function(a,b,d){return
c.invoke(a,null,d||{params:b})}}function g(a){function
b(b){if(!/^\w+$/.test(b))throw new Error("Invalid parameter name '"+b+"' in
pattern '"+a+"'");if(f[b])throw new Error("Duplicate parameter name '"+b+"' in
pattern '"+a+"'");f[b]=!0,j.push(b)}function c(a){return
a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var d,e=/([:*])(\w+)|\{(\w+)(?:\:((?
:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f={},g="^",h=0,i=this.segments=[]
,j=this.params=[];this.source=a;for(var k,l,m;(d=e.exec(a))&&(k=d[2]||d[3],l=d
[4]||("*"==d[1]?".*":"[^/]*"),m=a.substring(h,d.index),!(m.indexOf("?")>=0));)
g+=c(m)+"("+l+")",b(k),i.push(m),h=e.lastIndex;m=a.substring(h);var
n=m.indexOf("?");if(n>=0){var o=this.sourceSearch=m.substring(n);m=m.substring
(0,n),this.sourcePath=a.substring(0,h+n),r(o.substring(1).split(/[&?]/),b)}els
e this.sourcePath=a,this.sourceSearch="";g+=c(m)+"$",i.push(m),this.regexp=new
RegExp(g),this.prefix=i[0]}function h(){this.compile=function(a){return new
g(a)},this.isMatcher=function(a){return a instanceof
g},this.$get=function(){return this}}function i(a){function b(a){var
b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return
null!=b?b[1].replace(/\\(.)/g,"$1"):""}function c(a,b){return
a.replace(/\$(\$|\d{1,2})/,function(a,c){return
b["$"===c?0:Number(c)]})}function d(a,b,c){if(!c)return!1;var
d=a.invoke(b,b,{$match:c});return m(d)?d:!0}var
e=[],f=null;this.rule=function(a){if(!n(a))throw new Error("'rule' must be a
function");return e.push(a),this},this.otherwise=function(a){if(o(a)){var
b=a;a=function(){return b}}else if(!n(a))throw new Error("'rule' must be a
function");return f=a,this},this.when=function(e,f){var g,h;if(o(e)&&(e=a.comp
ile(e)),a.isMatcher(e)){if(o(f))h=a.compile(f),f=["$match",function(a){return
h.format(a)}];else if(!n(f)&&!q(f))throw new Error("invalid 'handler' in
when()");g=function(a,b){return d(a,f,e.exec(b.path(),b.search()))},g.prefix=o
(e.prefix)?e.prefix:""}else{if(!(e instanceof RegExp))throw new Error("invalid
'what' in when()");if(o(f))h=f,f=["$match",function(a){return c(h,a)}];else
if(!n(f)&&!q(f))throw new Error("invalid 'handler' in
when()");if(e.global||e.sticky)throw new Error("when() RegExp must not be
global or sticky");g=function(a,b){return
d(a,f,e.exec(b.path()))},g.prefix=b(e)}return this.rule(g)},this.$get=["$locat
ion","$rootScope","$injector",function(a,b,c){function d(){var b,d,f=e.length;
for(b=0;f>b;b++)if(d=e[b](c,a)){o(d)&&a.replace().url(d);break}}return
f&&e.push(f),b.$on("$locationChangeSuccess",d),{}}]}function j(a,b){function
c(a){var b;if(o(a)){if(b=k[a],!b)throw new Error("No such state '"+a+"'")}else
if(b=k[a.name],!b||b!==a&&b.self!==a)throw new Error("Invalid or unregistered
state");return b}function f(e){e=d(e,{self:e,toString:function(){return
this.name}});var f=e.name;if(!o(f)||f.indexOf("@")>=0)throw new Error("State
must have a valid name");if(k[f])throw new Error("State '"+f+"'' is already
defined");var g=i;if(m(e.parent))null!=e.parent&&(g=c(e.parent));else{var
h=/^(.+)\.[^.]+$/.exec(f);null!=h&&(g=c(h[1]))}e.parent=g;var l=e.url;if(o(l))
l=e.url="^"==l.charAt(0)?b.compile(l.substring(1)):(g.navigable||i).url.concat
(l);else if(p(l)&&n(l.exec)&&n(l.format)&&n(l.concat));else if(null!=l)throw
new Error("Invalid url '"+l+"' in state
'"+e+"'");e.navigable=l?e:g?g.navigable:null;var
t=e.params;if(t){if(!q(t))throw new Error("Invalid params in state
'"+e+"'");if(l)throw new Error("Both params and url specicified in state
'"+e+"'")}else t=e.params=l?l.parameters():e.parent.params;var
u={};if(r(t,function(a){u[a]=!0}),g){r(g.params,function(a){if(!u[a])throw new
Error("Missing required parameter '"+a+"' in state '"+f+"'");u[a]=!1});var
v=e.ownParams=[];r(u,function(a,b){a&&v.push(b)})}else e.ownParams=t;var w={};
r(m(e.views)?e.views:{"":e},function(a,b){b.indexOf("@")<0&&(b=b+"@"+e.parent.
name),w[b]=a}),e.views=w,e.path=g?g.path.concat(e):[];var
x=e.includes=g?s({},g.includes):{};return x[f]=!0,e.resolve||(e.resolve={}),!e
["abstract"]&&l&&a.when(l,["$match",function(a){j.transitionTo(e,a,!1)}]),k[f]
=e,e}function g(a,b){return p(a)?b=a:b.name=a,f(b),this}function
h(a,b,f,g,h,k){function l(a,c,d,h,i){function j(c,d){r(c,function(c,e){l.push(
b.when(o(c)?g.get(c):g.invoke(c,a.self,m)).then(function(a){d[e]=a}))})}var
k,l=[h];d?k=c:(k={},r(a.params,function(a){k[a]=c[a]}));var
m={$stateParams:k},n=i.globals={$stateParams:k};return
j(a.resolve,n),n.$$state=a,r(a.views,function(c,d){var e=i[d]={$$controller:c.
controller};l.push(b.when(f.fromConfig(c,k,m)||"").then(function(a){e.$templat
e=a})),c.resolve!==a.resolve&&j(c.resolve,e)}),b.all(l).then(function(b){retur
n e(i.globals,b[0].globals),r(a.views,function(a,b){e(i[b],i.globals)}),i})}fu
nction n(a,b){var c={};return r(a,function(a){var
d=b[a];c[a]=null!=d?String(d):null}),c}function p(a,b,c){for(var
d=0;d<c.length;d++){var e=c[d];if(a[e]!=b[e])return!1}return!0}var
q=b.reject(new Error("transition superseded")),s=b.reject(new
Error("transition prevented"));return j={params:{},current:i.self,$current:i,t
ransition:null},j.transitionTo=function(e,f,o){if(m(o)||(o=!0),e=c(e),e["abstr
act"])throw new Error("Cannot transition to abstract state '"+e+"'");var r,u,v
=e.path,w=j.$current,x=j.params,y=w.path,z=i.locals,A=[];for(r=0,u=v[r];u&&u==
=y[r]&&p(f,x,u.ownParams);r++,u=v[r])z=A[r]=u.locals;if(e===w&&z===w.locals)re
turn j.transition=null,b.when(j.current);if(f=n(e.params,f||{}),a.$broadcast("
$stateChangeStart",e.self,f,w.self,x).defaultPrevented)return s;for(var
B=b.when(z),C=r;C<v.length;C++,u=v[C])z=A[C]=d(z),B=l(u,f,u===e,B,z);var
D=j.transition=B.then(function(){var b,c,d;if(j.transition!==D)return q;for(b=
y.length-1;b>=r;b--)d=y[b],d.self.onExit&&g.invoke(d.self.onExit,d.self,d.loca
ls.globals),d.locals=null;for(b=r;b<v.length;b++)c=v[b],c.locals=A[b],c.self.o
nEnter&&g.invoke(c.self.onEnter,c.self,c.locals.globals);j.$current=e,j.curren
t=e.self,j.params=f,t(j.params,h),j.transition=null;var i=e.navigable;return o
&&i&&k.url(i.url.format(i.locals.globals.$stateParams)),a.$broadcast("$stateCh
angeSuccess",e.self,f,w.self,x),j.current},function(c){return j.transition!==D
?q:(j.transition=null,a.$broadcast("$stateChangeError",e.self,f,w.self,x,c),b.
reject(c))});return D},j.is=function(a){return
j.$current===c(a)},j.includes=function(a){return
j.$current.includes[c(a).name]},j.href=function(a,b){var
d=c(a),e=d.navigable;if(!e)throw new Error("State '"+d+"' is not
navigable");return e.url.format(n(d.params,b||{}))},j}var i,j,k={};i=f({name:"
",url:"^",views:null,"abstract":!0}),i.locals={globals:{$stateParams:{}}},i.na
vigable=null,this.state=g,this.$get=h,h.$inject=["$rootScope","$q","$templateF
actory","$injector","$stateParams","$location","$urlRouter"]}function
k(a,c,d,e,f){var g;try{g=e.get("$animator")}catch(h){}var
i={restrict:"ECA",terminal:!0,link:function(e,h,j){function k(g){var i=a.$curr
ent&&a.$current.locals[o];if(i!==n)if(l&&(q&&g?q.leave(h.contents(),h):h.html(
""),l.$destroy(),l=null),i){n=i,s.state=i.$$state;var j;q&&g?(j=b.element("<di
v></div>").html(i.$template).contents(),q.enter(j,h)):(h.html(i.$template),j=h
.contents());var k=c(j);if(l=e.$new(),i.$$controller){i.$scope=l;var m=d(i.$$c
ontroller,i);h.children().data("$ngControllerController",m)}k(l),l.$emit("$vie
wContentLoaded"),l.$eval(p),f()}else n=null,s.state=null}var l,n,o=j[i.name]||
j.name||"",p=j.onload||"",q=m(g)&&g(e,j),r=h.parent().inheritedData("$uiView")
;o.indexOf("@")<0&&(o=o+"@"+(r?r.state.name:""));var s={name:o,state:null};h.d
ata("$uiView",s),e.$on("$stateChangeSuccess",function(){k(!0)}),k(!1)}};return
i}function l(a,b){function e(a){this.locals=a.locals.globals,this.params=this.
locals.$stateParams}function f(){this.locals=null,this.params=null}function
g(c,g){if(null!=g.redirectTo){var
h,j=g.redirectTo;if(o(j))h=j;else{if(!n(j))throw new Error("Invalid
'redirectTo' in when()");h=function(a,b){return
j(a,b.path(),b.search())}}b.when(c,h)}else a.state(d(g,{parent:null,name:"rout
e:"+encodeURIComponent(c),url:c,onEnter:e,onExit:f}));return
i.push(g),this}function h(a,b,d){function e(a){return""!==a.name?a:c}var
f={routes:i,params:d,current:c};return b.$on("$stateChangeStart",function(a,c,
d,f){b.$broadcast("$routeChangeStart",e(c),e(f))}),b.$on("$stateChangeSuccess"
,function(a,c,d,g){f.current=e(c),b.$broadcast("$routeChangeSuccess",e(c),e(g)
),t(d,f.params)}),b.$on("$stateChangeError",function(a,c,d,f,g,h){b.$broadcast
("$routeChangeError",e(c),e(f),h)}),f}var i=[];e.$inject=["$$state"],this.when
=g,this.$get=h,h.$inject=["$state","$rootScope","$routeParams"]}var m=b.isDefi
ned,n=b.isFunction,o=b.isString,p=b.isObject,q=b.isArray,r=b.forEach,s=b.exten
d,t=b.copy;b.module("ui.util",["ng"]),b.module("ui.router",["ui.util"]),b.modu
le("ui.state",["ui.router","ui.util"]),b.module("ui.compat",["ui.state"]),f.$i
nject=["$http","$templateCache","$injector"],b.module("ui.util").service("$tem
plateFactory",f),g.prototype.concat=function(a){return new
g(this.sourcePath+a+this.sourceSearch)},g.prototype.toString=function(){return
this.source},g.prototype.exec=function(a,b){var
c=this.regexp.exec(a);if(!c)return null;var d,e=this.params,f=e.length,g=this.
segments.length-1,h={};for(d=0;g>d;d++)h[e[d]]=decodeURIComponent(c[d+1]);for(
;f>d;d++)h[e[d]]=b[e[d]];return h},g.prototype.parameters=function(){return
this.params},g.prototype.format=function(a){var
b=this.segments,c=this.params;if(!a)return b.join("");var d,e,f,g=b.length-1,h
=c.length,i=b[0];for(d=0;g>d;d++)f=a[c[d]],null!=f&&(i+=f),i+=b[d+1];for(;h>d;
d++)f=a[c[d]],null!=f&&(i+=(e?"&":"?")+c[d]+"="+encodeURIComponent(f),e=!0);re
turn i},b.module("ui.util").provider("$urlMatcherFactory",h),i.$inject=["$urlM
atcherFactoryProvider"],b.module("ui.router").provider("$urlRouter",i),j.$inje
ct=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.state").va
lue("$stateParams",{}).provider("$state",j),k.$inject=["$state","$compile","$c
ontroller","$injector","$anchorScroll"],b.module("ui.state").directive("uiView
",k),l.$inject=["$stateProvider","$urlRouterProvider"],b.module("ui.compat").p
rovider("$route",l).directive("ngView",k)}(window,window.angular),angular.modu
le("ui.route",[]).directive("uiRoute",["$location","$parse",function(a,b){retu
rn{restrict:"AC",scope:!0,compile:function(c,d){var
e;if(d.uiRoute)e="uiRoute";else if(d.ngHref)e="ngHref";else{if(!d.href)throw
new Error("uiRoute missing a route or href property on "+c[0]);e="href"}return
function(c,d,f){function g(b){(hash=b.indexOf("#"))>-1&&(b=b.substr(hash+1)),j
=function(){i(c,a.path().indexOf(b)>-1)},j()}function
h(b){(hash=b.indexOf("#"))>-1&&(b=b.substr(hash+1)),j=function(){var d=new
RegExp("^"+b+"$",["i"]);i(c,d.test(a.path()))},j()}var i=b(f.ngModel||f.routeM
odel||"$uiRoute").assign,j=angular.noop;switch(e){case"uiRoute":f.uiRoute?h(f.
uiRoute):f.$observe("uiRoute",h);break;case"ngHref":f.ngHref?g(f.ngHref):f.$ob
serve("ngHref",g);break;case"href":g(f.href)}c.$on("$routeChangeSuccess",funct
ion(){j()}),c.$on("$stateChangeSuccess",function(){j()})}}}}]),function(a,b){"
function"==typeof
define&&define.amd?define(b):a.BitPayApi=b()}(this,function(){function
sIframeBackend(){var a=function(){},b=function(b){var
c=b.match(/^iframe:\/\/(.+)$/);if(!c||!c[1])throw new a;this.el=document.getEl
ementById(c[1]),this.callbacks={},this.initCallback=null,window.addEventListen
er("message",this.receiveMessage.bind(this),!1)};return b.prototype.init=funct
ion(a){this.initCallback=a},b.prototype.processRequest=function(a,b,c,d,e){var
f=Math.floor(1e7*Math.random())+1;this.callbacks[f]=e,this.el.contentWindow.po
stMessage({id:f,context:a,tokenStr:b,method:c,params:d},"*")},b.prototype.rece
iveMessage=function(a){if("init"==a.data&&this.initCallback)return
this.initCallback.call(this);if(a.data&&a.data.id){var
b=this.callbacks[a.data.id];b?(b(a.data.error,a.data.data),delete
this.callbacks[a.id]):(console.log("Received message with invalid
id:"),console.log(a.data))}else console.log("Recived message without
id:"),console.log(a.data)},b}function sBackend(){var a=function(){};return a.p
rototype.init=function(){},a.prototype.processRequest=function(){},a.getBacken
d=function(a){return"local"==a?require("./localBackend").new():a.match(/^ifram
e/)?require("./iframeBackend").new(a):require("./webBackend").new(a)},a}functi
on sBitPayApi(a){var b=a.Backend||require("./backend").class(),c=a.KeyUtils||r
equire("./keyUtils").class(),d=function(a){this.backend=b.getBackend(a),this.s
in=null,this.pubkey=null,this.privkey=null,this.nonce=(new
Date).getTime(),this.tokens={}};return d.prototype.init=function(a){var b=this
;b.backend.init(function(c,d){b.apiCall(null,"getTokens",{},function(c,e){retu
rn c?(console.log("Error loading
tokens"),console.log(c),a(c,d)):(e.forEach(function(a){for(var c in
a)b.tokens[c]=a[c]}),a(null,d),void
0)})})},d.prototype.setSin=function(a,b,d){if(null==a){var
e=c.generateSin();this.sin=e.sin,this.pubkey=e.pub,this.privkey=e.priv}else th
is.sin=a,this.pubkey=b,this.privkey=d},d.prototype.setNonce=function(a){this.n
once=a},d.prototype.getNonce=function(){return
this.nonce},d.prototype.apiCall=function(a,b,d,e){var
f=this,g={};g.pubkey=f.pubkey,g.nonce=f.nonce;var h={method:b,params:d,nonce:g
.nonce.toString()};g.body=h,g.signature=c.sign(JSON.stringify(h),f.privkey),f.
backend.processRequest(g,a,b,d,function(a,b){if(f.nonce++,!a&&b&&b.error&&(a=b
.error),!b)return e(a);if(b.facade){if(b.data.length){var c=[];return b.data.f
orEach(function(a){c.push(f.createFacadeFromData(b.facade,a))}),e(a,c)}return
e(a,f.createFacadeFromData(b.facade,b.data))}return
e(a,b.data)})},d.prototype.getFacade=function(a,b){if("public"!=a&&!b){var
c=!1;for(var d in
this.tokens)if(d==a){c=!0,b=this.tokens[d];break}if(!c)return null}return requ
ire("./facades/"+a).new(this,b)},d.prototype.createFacadeFromData=function(a,b
){var c=this.getFacade(a,b.token);if(c){for(var d in b)c[d]=b[d];return
c}return null},d.prototype.generateSin=function(){return
c.generateSin()},d}function sFacade(){var
a=function(a,b){this.api=a,this.token=b};return a.prototype.apiCall=function(a
,b,c){this.api.apiCall(this.token,a,b,c)},a.getFacade=function(a){return
require("./facades/"+a).class()},a}function sPublic(a){function
b(a,b){this.api=a,this.token=b}var c=a.Facade||"undefined"!=typeof
window&&require("./facade")||require("../facade");return b.superclass=a.superc
lass||c.createClass(a),b.prototype.getTokens=function(a){this.apiCall("getToke
ns",{},a)},b}function sMerchant(a){function b(a,b){this.api=a,this.token=b}var
c=a.Facade||"undefined"!=typeof
window&&require("./facade")||require("../facade");return b.superclass=a.superc
lass||c.createClass(a),b.prototype.createInvoice=function(a,b){this.apiCall("c
reateInvoice",a,b)},b}function sSupport(a){function
b(a,b){this.api=a,this.token=b}var c=a.Facade||"undefined"!=typeof
window&&require("./facade")||require("../facade");return b.superclass=a.superc
lass||c.createClass(a),b.prototype.findInvoice=function(a,b){this.apiCall("fin
dInvoice",a,b)},b.prototype.findLatestInvoices=function(a,b){this.apiCall("fin
dLatestInvoices",a,b)},b.prototype.findPendingAccounts=function(a,b){this.apiC
all("findPendingAccounts",a,b)},b.prototype.findUnverifiedAccounts=function(a,
b){this.apiCall("findUnverifiedAccounts",a,b)},b.prototype.findPendingApplicat
ions=function(a,b){this.apiCall("findPendingApplications",a,b)},b.prototype.fi
ndUnverifiedApplications=function(a,b){this.apiCall("findUnverifiedApplication
s",a,b)},b.prototype.findDeniedApplications=function(a,b){this.apiCall("findDe
niedApplications",a,b)},b.prototype.findAccountByEmail=function(a,b){this.apiC
all("findAccountByEmail",{email:a},b)},b.prototype.findAccounts=function(a,b){
this.apiCall("findAccounts",a,b)},b.prototype.findAccountApplicationByEmail=fu
nction(a,b){this.apiCall("findAccountApplicationByEmail",{email:a},b)},b.proto
type.findAccountByMerchantEmail=function(a,b){this.apiCall("findAccountByMerch
antEmail",{merchantEmail:a},b)},b.prototype.findAllBadLogins=function(a,b){thi
s.apiCall("findAllBadLogins",a,b)},b.prototype.findBadLoginByEmail=function(a,
b){this.apiCall("findBadLoginByEmail",a,b)},b.prototype.findBadLoginByIP=funct
ion(a,b){this.apiCall("findBadLoginByIP",a,b)},b.prototype.findOrphanedTransac
tionByTxid=function(a,b){this.apiCall("findOrphanedTransactionByTxid",a,b)},b.
prototype.createAffiliate=function(a,b){this.apiCall("createAffiliate",a,b)},b
.prototype.findAffiliate=function(a,b){this.apiCall("findAffiliate",a,b)},b}fu
nction sAccountSupport(a){function b(a,b){this.api=a,this.token=b}var
c=a.Facade||"undefined"!=typeof
window&&require("./facade")||require("../../facade");return b.superclass=a.sup
erclass||c.createClass(a),b.prototype.activate=function(a){this.apiCall("activ
ate",{},a)},b.prototype.deny=function(a){this.apiCall("deny",{},a)},b.prototyp
e.lock=function(a){this.apiCall("lock",{},a)},b.prototype.unlock=function(a){t
his.apiCall("lock",{},a)},b.prototype.updateEmailAddress=function(a,b){this.ap
iCall("updateEmailAddress",{email:a},b)},b.prototype.updateMerchantEmailAddres
s=function(a,b){this.apiCall("updateMerchantEmailAddress",{merchantEmail:a},b)
},b.prototype.setApprovedTier=function(a,b){this.apiCall("setApprovedTier",{ti
er:a},b)},b.prototype.setAffiliate=function(a,b){this.apiCall("setAffiliate",{
affiliateId:a},b)},b.prototype.toggleAmlDocs=function(a){this.apiCall("toggleA
mlDocs",{},a)},b.prototype.verify=function(a){this.apiCall("verify",{},a)},b.p
rototype.resetAuthentication=function(a){this.apiCall("resetAuthentication",{}
,a)},b.prototype.getBalances=function(a){this.apiCall("getBalances",{},a)},b.p
rototype.update=function(a){this.apiCall("update",{},a)},b}function
sInvoiceSupport(a){function b(a,b){this.api=a,this.token=b}var
c=a.Facade||"undefined"!=typeof
window&&require("./facade")||require("../../facade");return b.superclass=a.sup
erclass||c.createClass(a),b.prototype.sendNotification=function(a){this.apiCal
l("sendNotification",{},a)},b.prototype.refund=function(a,b){this.apiCall("ref
und",{bitcoinAddress:a},b)},b.prototype.refundOverpayment=function(a,b){this.a
piCall("refundOverpayment",{bitcoinAddress:a},b)},b}function
sAccountApplicationSupport(a){function b(a,b){this.api=a,this.token=b}var
c=a.Facade||"undefined"!=typeof
window&&require("./facade")||require("../../facade");return b.superclass=a.sup
erclass||c.createClass(a),b.prototype.approve=function(a){this.apiCall("approv
e",{},a)},b.prototype.deny=function(a){this.apiCall("deny",{},a)},b.prototype.
verify=function(a){this.apiCall("verify",{},a)},b}function
sAffiliateManagement(a){function b(a,b){this.api=a,this.token=b}var
c=a.Facade||"undefined"!=typeof
window&&require("./facade")||require("../../facade");return b.superclass=a.sup
erclass||c.createClass(a),b.prototype.update=function(a,b){this.apiCall("updat
e",a,b)},b.prototype.getCommissionReport=function(a,b){this.apiCall("getCommis
sionReport",a,b)},b}function sBadLoginSupport(a){function
b(a,b){this.api=a,this.token=b}var c=a.Facade||"undefined"!=typeof
window&&require("./facade")||require("../../facade");return b.superclass=a.sup
erclass||c.createClass(a),b.prototype.unblock=function(a,b,c){this.apiCall("un
block",{},c)},b}function sOrphanedTransactionSupport(a){function
b(a,b){this.api=a,this.token=b}var c=a.Facade||"undefined"!=typeof
window&&require("./facade")||require("../../facade");return
b.superclass=a.superclass||c.createClass(a),b}var
requirejs,require,define;return function(a){function b(a,b){return
r.call(a,b)}function c(a,b){var c,d,e,f,g,h,i,j,k,l,m=b&&b.split("/"),n=p.map,
o=n&&n["*"]||{};if(a&&"."===a.charAt(0))if(b){for(m=m.slice(0,m.length-1),a=m.
concat(a.split("/")),j=0;j<a.length;j+=1)if(l=a[j],"."===l)a.splice(j,1),j-=1;
else if(".."===l){if(1===j&&(".."===a[2]||".."===a[0]))break;j>0&&(a.splice(j-
1,2),j-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((m||o
)&&n){for(c=a.split("/"),j=c.length;j>0;j-=1){if(d=c.slice(0,j).join("/"),m)fo
r(k=m.length;k>0;k-=1)if(e=n[m.slice(0,k).join("/")],e&&(e=e[d])){f=e,g=j;brea
k}if(f)break;!h&&o&&o[d]&&(h=o[d],i=j)}!f&&h&&(f=h,g=i),f&&(c.splice(0,g,f),a=
c.join("/"))}return a}function d(b,c){return function(){return
k.apply(a,s.call(arguments,0).concat([b,c]))}}function e(a){return
function(b){return c(b,a)}}function f(a){return function(b){n[a]=b}}function
g(c){if(b(o,c)){var d=o[c];delete
o[c],q[c]=!0,j.apply(a,d)}if(!b(n,c)&&!b(q,c))throw new Error("No "+c);return
n[c]}function h(a){var b,c=a?a.indexOf("!"):-1;return
c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function
i(a){return function(){return p&&p.config&&p.config[a]||{}}}var j,k,l,m,n={},o
={},p={},q={},r=Object.prototype.hasOwnProperty,s=[].slice;l=function(a,b){var
d,f=h(a),i=f[0];return a=f[1],i&&(i=c(i,b),d=g(i)),i?a=d&&d.normalize?d.normal
ize(a,e(b)):c(a,b):(a=c(a,b),f=h(a),i=f[0],a=f[1],i&&(d=g(i))),{f:i?i+"!"+a:a,
n:a,pr:i,p:d}},m={require:function(a){return d(a)},exports:function(a){var
b=n[a];return"undefined"!=typeof b?b:n[a]={}},module:function(a){return{id:a,u
ri:"",exports:n[a],config:i(a)}}},j=function(c,e,h,i){var
j,k,p,r,s,t,u=[];if(i=i||c,"function"==typeof h){for(e=!e.length&&h.length?["r
equire","exports","module"]:e,s=0;s<e.length;s+=1)if(r=l(e[s],i),k=r.f,"requir
e"===k)u[s]=m.require(c);else if("exports"===k)u[s]=m.exports(c),t=!0;else
if("module"===k)j=u[s]=m.module(c);else
if(b(n,k)||b(o,k)||b(q,k))u[s]=g(k);else{if(!r.p)throw new Error(c+" missing "
+k);r.p.load(r.n,d(i,!0),f(k),{}),u[s]=n[k]}p=h.apply(n[c],u),c&&(j&&j.exports
!==a&&j.exports!==n[c]?n[c]=j.exports:p===a&&t||(n[c]=p))}else
c&&(n[c]=h)},requirejs=require=k=function(b,c,d,e,f){return"string"==typeof b?
m[b]?m[b](c):g(l(b,c).f):(b.splice||(p=b,c.splice?(b=c,c=d,d=null):b=a),c=c||f
unction(){},"function"==typeof d&&(d=e,e=f),e?j(a,b,c,d):setTimeout(function()
{j(a,b,c,d)},4),k)},k.config=function(a){return p=a,p.deps&&k(p.deps,p.callbac
k),k},requirejs._defined=n,define=function(a,c,d){c.splice||(d=c,c=[]),!b(n,a)
&&!b(o,a)&&(o[a]=[a,c,d])},define.amd={jQuery:!0}}(),define("../build/almond",
function(){}),define("classtool",[],function(){var a={};return
a.defineClass=function(a){function b(b){var c=a(b||{});return c.inherit=functi
on(a){arguments.length>1&&a.inherit(Array.prototype.slice.call(arguments,1)),t
his._super=a,Object.defineProperty(this.prototype,"_constructor",{enumerable:!
1,value:this}),this.prototype.__proto__=a.prototype,this.__proto__=a},c.super=
function(a,b,c){return this._super?"string"==typeof
b?this._super.prototype[b].apply(a,c):this._super.apply(a,b):void
0},c.superclass&&c.inherit(c.superclass),c}function c(a,b){a.prototype=b.proto
type,a.prototype._constructor=a,a._super=b._super,a.inherit=b.inherit,a.super=
b.super;for(x in b)a[x]=b[x];return a}var d={};return
this.exports={},this.exports.createClass=function(a,e){if("string"!=typeof
a)return b(a);var f;return d[a]=function(){return f.apply(this,arguments)},f=b
(e),c(d[a],f)},this.exports.class=function(a){return
a=a||"default",d[a]?d[a]:this.createClass(a)},this.exports.new=function(){var
a=this.class(),b=Object.create(a.prototype);return a.apply(b,arguments),b},thi
s.exports},a}),define("bitcoinjs",[],function(){function
Arcfour(){this.i=0,this.j=0,this.S=new Array}function ARC4init(a){var b,c,d;fo
r(b=0;256>b;++b)this.S[b]=b;for(c=0,b=0;256>b;++b)c=c+this.S[b]+a[b%a.length]&
255,d=this.S[b],this.S[b]=this.S[c],this.S[c]=d;this.i=0,this.j=0}function
ARC4next(){var a;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,a
=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=a,this.S[a+this.S
[this.i]&255]}function prng_newstate(){return new Arcfour}function rng_seed_in
t(a){rng_pool[rng_pptr++]^=255&a,rng_pool[rng_pptr++]^=a>>8&255,rng_pool[rng_p
ptr++]^=a>>16&255,rng_pool[rng_pptr++]^=a>>24&255,rng_pptr>=rng_psize&&(rng_pp
tr-=rng_psize)}function rng_seed_time(){rng_seed_int((new
Date).getTime())}function rng_get_byte(){if(null==rng_state){for(rng_seed_time
(),rng_state=prng_newstate(),rng_state.init(rng_pool),rng_pptr=0;rng_pptr<rng_
pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return
rng_state.next()}function rng_get_bytes(a){var
b;for(b=0;b<a.length;++b)a[b]=rng_get_byte()}function SecureRandom(){}function
BigInteger(a,b,c){null!=a&&("number"==typeof
a?this.fromNumber(a,b,c):null==b&&"string"!=typeof
a?this.fromString(a,256):this.fromString(a,b))}function nbi(){return new
BigInteger(null)}function am1(a,b,c,d,e,f){for(;--f>=0;){var
g=b*this[a++]+c[d]+e;e=Math.floor(g/67108864),c[d++]=67108863&g}return
e}function am2(a,b,c,d,e,f){for(var g=32767&b,h=b>>15;--f>=0;){var i=32767&thi
s[a],j=this[a++]>>15,k=h*i+j*g;i=g*i+((32767&k)<<15)+c[d]+(1073741823&e),e=(i>
>>30)+(k>>>15)+h*j+(e>>>30),c[d++]=1073741823&i}return e}function
am3(a,b,c,d,e,f){for(var g=16383&b,h=b>>14;--f>=0;){var i=16383&this[a],j=this
[a++]>>14,k=h*i+j*g;i=g*i+((16383&k)<<14)+c[d]+e,e=(i>>28)+(k>>14)+h*j,c[d++]=
268435455&i}return e}function int2char(a){return BI_RM.charAt(a)}function
intAt(a,b){var c=BI_RC[a.charCodeAt(b)];return null==c?-1:c}function
bnpCopyTo(a){for(var
b=this.t-1;b>=0;--b)a[b]=this[b];a.t=this.t,a.s=this.s}function bnpFromInt(a){
this.t=1,this.s=0>a?-1:0,a>0?this[0]=a:-1>a?this[0]=a+DV:this.t=0}function
nbv(a){var b=nbi();return b.fromInt(a),b}function bnpFromString(a,b){var
c;if(16==b)c=4;else if(8==b)c=3;else if(256==b)c=8;else if(2==b)c=1;else
if(32==b)c=5;else{if(4!=b)return this.fromRadix(a,b),void
0;c=2}this.t=0,this.s=0;for(var d=a.length,e=!1,f=0;--d>=0;){var g=8==c?255&a[
d]:intAt(a,d);0>g?"-"==a.charAt(d)&&(e=!0):(e=!1,0==f?this[this.t++]=g:f+c>thi
s.DB?(this[this.t-1]|=(g&(1<<this.DB-f)-1)<<f,this[this.t++]=g>>this.DB-f):thi
s[this.t-1]|=g<<f,f+=c,f>=this.DB&&(f-=this.DB))}8==c&&0!=(128&a[0])&&(this.s=
-1,f>0&&(this[this.t-1]|=(1<<this.DB-f)-1<<f)),this.clamp(),e&&BigInteger.ZERO
.subTo(this,this)}function bnpClamp(){for(var
a=this.s&this.DM;this.t>0&&this[this.t-1]==a;)--this.t}function
bnToString(a){if(this.s<0)return"-"+this.negate().toString(a);var
b;if(16==a)b=4;else if(8==a)b=3;else if(2==a)b=1;else
if(32==a)b=5;else{if(4!=a)return this.toRadix(a);b=2}var c,d=(1<<b)-1,e=!1,f="
",g=this.t,h=this.DB-g*this.DB%b;if(g-->0)for(h<this.DB&&(c=this[g]>>h)>0&&(e=
!0,f=int2char(c));g>=0;)b>h?(c=(this[g]&(1<<h)-1)<<b-h,c|=this[--g]>>(h+=this.
DB-b)):(c=this[g]>>(h-=b)&d,0>=h&&(h+=this.DB,--
g)),c>0&&(e=!0),e&&(f+=int2char(c));return e?f:"0"}function bnNegate(){var
a=nbi();return BigInteger.ZERO.subTo(this,a),a}function bnAbs(){return
this.s<0?this.negate():this}function bnCompareTo(a){var
b=this.s-a.s;if(0!=b)return b;var c=this.t;if(b=c-a.t,0!=b)return
this.s<0?-b:b;for(;--c>=0;)if(0!=(b=this[c]-a[c]))return b;return 0}function
nbits(a){var b,c=1;return 0!=(b=a>>>16)&&(a=b,c+=16),0!=(b=a>>8)&&(a=b,c+=8),0
!=(b=a>>4)&&(a=b,c+=4),0!=(b=a>>2)&&(a=b,c+=2),0!=(b=a>>1)&&(a=b,c+=1),c}funct
ion bnBitLength(){return
this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function
bnpDLShiftTo(a,b){var c;for(c=this.t-1;c>=0;--c)b[c+a]=this[c];for(c=a-1;c>=0;
--c)b[c]=0;b.t=this.t+a,b.s=this.s}function bnpDRShiftTo(a,b){for(var
c=a;c<this.t;++c)b[c-a]=this[c];b.t=Math.max(this.t-a,0),b.s=this.s}function
bnpLShiftTo(a,b){var c,d=a%this.DB,e=this.DB-d,f=(1<<e)-1,g=Math.floor(a/this.
DB),h=this.s<<d&this.DM;for(c=this.t-1;c>=0;--c)b[c+g+1]=this[c]>>e|h,h=(this[
c]&f)<<d;for(c=g-1;c>=0;--c)b[c]=0;b[g]=h,b.t=this.t+g+1,b.s=this.s,b.clamp()}
function bnpRShiftTo(a,b){b.s=this.s;var
c=Math.floor(a/this.DB);if(c>=this.t)return b.t=0,void 0;var
d=a%this.DB,e=this.DB-d,f=(1<<d)-1;b[0]=this[c]>>d;for(var g=c+1;g<this.t;++g)
b[g-c-1]|=(this[g]&f)<<e,b[g-c]=this[g]>>d;d>0&&(b[this.t-c-1]|=(this.s&f)<<e)
,b.t=this.t-c,b.clamp()}function bnpSubTo(a,b){for(var c=0,d=0,e=Math.min(a.t,
this.t);e>c;)d+=this[c]-a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(d
-=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=
this.s;c<a.t;)d-=a[c],b[c++]=d&this.DM,d>>=this.DB;d-=a.s}b.s=0>d?-1:0,-1>d?b[
c++]=this.DV+d:d>0&&(b[c++]=d),b.t=c,b.clamp()}function bnpMultiplyTo(a,b){var
c=this.abs(),d=a.abs(),e=c.t;for(b.t=e+d.t;--e>=0;)b[e]=0;for(e=0;e<d.t;++e)b[
e+c.t]=c.am(0,d[e],b,e,0,c.t);b.s=0,b.clamp(),this.s!=a.s&&BigInteger.ZERO.sub
To(b,b)}function bnpSquareTo(a){for(var
b=this.abs(),c=a.t=2*b.t;--c>=0;)a[c]=0;for(c=0;c<b.t-1;++c){var d=b.am(c,b[c]
,a,2*c,0,1);(a[c+b.t]+=b.am(c+1,2*b[c],a,2*c+1,d,b.t-c-1))>=b.DV&&(a[c+b.t]-=b
.DV,a[c+b.t+1]=1)}a.t>0&&(a[a.t-1]+=b.am(c,b[c],a,2*c,0,1)),a.s=0,a.clamp()}fu
nction bnpDivRemTo(a,b,c){var d=a.abs();if(!(d.t<=0)){var
e=this.abs();if(e.t<d.t)return
null!=b&&b.fromInt(0),null!=c&&this.copyTo(c),void 0;null==c&&(c=nbi());var
f=nbi(),g=this.s,h=a.s,i=this.DB-nbits(d[d.t-1]);i>0?(d.lShiftTo(i,f),e.lShift
To(i,c)):(d.copyTo(f),e.copyTo(c));var j=f.t,k=f[j-1];if(0!=k){var l=k*(1<<thi
s.F1)+(j>1?f[j-2]>>this.F2:0),m=this.FV/l,n=(1<<this.F1)/l,o=1<<this.F2,p=c.t,
q=p-j,r=null==b?nbi():b;for(f.dlShiftTo(q,r),c.compareTo(r)>=0&&(c[c.t++]=1,c.
subTo(r,c)),BigInteger.ONE.dlShiftTo(j,r),r.subTo(f,f);f.t<j;)f[f.t++]=0;for(;
--q>=0;){var s=c[--p]==k?this.DM:Math.floor(c[p]*m+(c[p-1]+o)*n);if((c[p]+=f.a
m(0,s,c,q,0,j))<s)for(f.dlShiftTo(q,r),c.subTo(r,c);c[p]<--s;)c.subTo(r,c)}nul
l!=b&&(c.drShiftTo(j,b),g!=h&&BigInteger.ZERO.subTo(b,b)),c.t=j,c.clamp(),i>0&
&c.rShiftTo(i,c),0>g&&BigInteger.ZERO.subTo(c,c)}}}function bnMod(a){var
b=nbi();return this.abs().divRemTo(a,null,b),this.s<0&&b.compareTo(BigInteger.
ZERO)>0&&a.subTo(b,b),b}function Classic(a){this.m=a}function
cConvert(a){return a.s<0||a.compareTo(this.m)>=0?a.mod(this.m):a}function
cRevert(a){return a}function cReduce(a){a.divRemTo(this.m,null,a)}function
cMulTo(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function
cSqrTo(a,b){a.squareTo(b),this.reduce(b)}function
bnpInvDigit(){if(this.t<1)return 0;var a=this[0];if(0==(1&a))return 0;var
b=3&a;return b=b*(2-(15&a)*b)&15,b=b*(2-(255&a)*b)&255,b=b*(2-((65535&a)*b&655
35))&65535,b=b*(2-a*b%this.DV)%this.DV,b>0?this.DV-b:-b}function Montgomery(a)
{this.m=a,this.mp=a.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,thi
s.um=(1<<a.DB-15)-1,this.mt2=2*a.t}function montConvert(a){var b=nbi();return 
a.abs().dlShiftTo(this.m.t,b),b.divRemTo(this.m,null,b),a.s<0&&b.compareTo(Big
Integer.ZERO)>0&&this.m.subTo(b,b),b}function montRevert(a){var b=nbi();return
a.copyTo(b),this.reduce(b),b}function
montReduce(a){for(;a.t<=this.mt2;)a[a.t++]=0;for(var b=0;b<this.m.t;++b){var c
=32767&a[b],d=c*this.mpl+((c*this.mph+(a[b]>>15)*this.mpl&this.um)<<15)&a.DM;f
or(c=b+this.m.t,a[c]+=this.m.am(0,d,a,b,0,this.m.t);a[c]>=a.DV;)a[c]-=a.DV,a[+
+c]++}a.clamp(),a.drShiftTo(this.m.t,a),a.compareTo(this.m)>=0&&a.subTo(this.m
,a)}function montSqrTo(a,b){a.squareTo(b),this.reduce(b)}function
montMulTo(a,b,c){a.multiplyTo(b,c),this.reduce(c) }function bnpIsEven(){return
0==(this.t>0?1&this[0]:this.s)}function
bnpExp(a,b){if(a>4294967295||1>a)return BigInteger.ONE;var c=nbi(),d=nbi(),e=b
.convert(this),f=nbits(a)-1;for(e.copyTo(c);--f>=0;)if(b.sqrTo(c,d),(a&1<<f)>0
)b.mulTo(d,e,c);else{var g=c;c=d,d=g}return b.revert(c)}function
bnModPowInt(a,b){var c;return c=256>a||b.isEven()?new Classic(b):new
Montgomery(b),this.exp(a,c)}function bnClone(){var a=nbi();return
this.copyTo(a),a}function bnIntValue(){if(this.s<0){if(1==this.t)return
this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return
this[0];if(0==this.t)return
0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function
bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}function
bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}function
bnpChunkSize(a){return Math.floor(Math.LN2*this.DB/Math.log(a))}function
bnSigNum(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function
bnpToRadix(a){if(null==a&&(a=10),0==this.signum()||2>a||a>36)return"0";var b=t
his.chunkSize(a),c=Math.pow(a,b),d=nbv(c),e=nbi(),f=nbi(),g="";for(this.divRem
To(d,e,f);e.signum()>0;)g=(c+f.intValue()).toString(a).substr(1)+g,e.divRemTo(
d,e,f);return f.intValue().toString(a)+g}function
bnpFromRadix(a,b){this.fromInt(0),null==b&&(b=10);for(var
c=this.chunkSize(b),d=Math.pow(b,c),e=!1,f=0,g=0,h=0;h<a.length;++h){var i=int
At(a,h);0>i?"-"==a.charAt(h)&&0==this.signum()&&(e=!0):(g=b*g+i,++f>=c&&(this.
dMultiply(d),this.dAddOffset(g,0),f=0,g=0))}f>0&&(this.dMultiply(Math.pow(b,f)
),this.dAddOffset(g,0)),e&&BigInteger.ZERO.subTo(this,this)}function
bnpFromNumber(a,b,c){if("number"==typeof b)if(2>a)this.fromInt(1);else for(thi
s.fromNumber(a,c),this.testBit(a-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(a
-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(b);)
this.dAddOffset(2,0),this.bitLength()>a&&this.subTo(BigInteger.ONE.shiftLeft(a
-1),this);else{var d=new Array,e=7&a;d.length=(a>>3)+1,b.nextBytes(d),e>0?d[0]
&=(1<<e)-1:d[0]=0,this.fromString(d,256)}}function bnToByteArray(){var
a=this.t,b=new Array;b[0]=this.s;var c,d=this.DB-a*this.DB%8,e=0;if(a-->0)for(
d<this.DB&&(c=this[a]>>d)!=(this.s&this.DM)>>d&&(b[e++]=c|this.s<<this.DB-d);a
>=0;)8>d?(c=(this[a]&(1<<d)-1)<<8-d,c|=this[--a]>>(d+=this.DB-8)):(c=this[a]>>
(d-=8)&255,0>=d&&(d+=this.DB,--a)),0!=(128&c)&&(c|=-256),0==e&&(128&this.s)!=(
128&c)&&++e,(e>0||c!=this.s)&&(b[e++]=c);return b}function bnEquals(a){return
0==this.compareTo(a)}function bnMin(a){return
this.compareTo(a)<0?this:a}function bnMax(a){return
this.compareTo(a)>0?this:a}function bnpBitwiseTo(a,b,c){var d,e,f=Math.min(a.t
,this.t);for(d=0;f>d;++d)c[d]=b(this[d],a[d]);if(a.t<this.t){for(e=a.s&this.DM
,d=f;d<this.t;++d)c[d]=b(this[d],e);c.t=this.t}else{for(e=this.s&this.DM,d=f;d
<a.t;++d)c[d]=b(e,a[d]);c.t=a.t}c.s=b(this.s,a.s),c.clamp()}function
op_and(a,b){return a&b}function bnAnd(a){var b=nbi();return
this.bitwiseTo(a,op_and,b),b}function op_or(a,b){return a|b}function
bnOr(a){var b=nbi();return this.bitwiseTo(a,op_or,b),b}function
op_xor(a,b){return a^b}function bnXor(a){var b=nbi();return
this.bitwiseTo(a,op_xor,b),b}function op_andnot(a,b){return a&~b}function
bnAndNot(a){var b=nbi();return this.bitwiseTo(a,op_andnot,b),b}function
bnNot(){for(var a=nbi(),b=0;b<this.t;++b)a[b]=this.DM&~this[b];return
a.t=this.t,a.s=~this.s,a}function bnShiftLeft(a){var b=nbi();return
0>a?this.rShiftTo(-a,b):this.lShiftTo(a,b),b}function bnShiftRight(a){var
b=nbi();return 0>a?this.lShiftTo(-a,b):this.rShiftTo(a,b),b}function
lbit(a){if(0==a)return-1;var b=0;return 0==(65535&a)&&(a>>=16,b+=16),0==(255&a
)&&(a>>=8,b+=8),0==(15&a)&&(a>>=4,b+=4),0==(3&a)&&(a>>=2,b+=2),0==(1&a)&&++b,b
}function bnGetLowestSetBit(){for(var a=0;a<this.t;++a)if(0!=this[a])return
a*this.DB+lbit(this[a]);return this.s<0?this.t*this.DB:-1}function
cbit(a){for(var b=0;0!=a;)a&=a-1,++b;return b}function bnBitCount(){for(var
a=0,b=this.s&this.DM,c=0;c<this.t;++c)a+=cbit(this[c]^b);return a}function
bnTestBit(a){var b=Math.floor(a/this.DB);return
b>=this.t?0!=this.s:0!=(this[b]&1<<a%this.DB)}function bnpChangeBit(a,b){var
c=BigInteger.ONE.shiftLeft(a);return this.bitwiseTo(c,b,c),c}function
bnSetBit(a){return this.changeBit(a,op_or)}function bnClearBit(a){return
this.changeBit(a,op_andnot)}function bnFlipBit(a){return
this.changeBit(a,op_xor)}function bnpAddTo(a,b){for(var c=0,d=0,e=Math.min(a.t
,this.t);e>c;)d+=this[c]+a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(
d+=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+
=this.s;c<a.t;)d+=a[c],b[c++]=d&this.DM,d>>=this.DB;d+=a.s}b.s=0>d?-1:0,d>0?b[
c++]=d:-1>d&&(b[c++]=this.DV+d),b.t=c,b.clamp()}function bnAdd(a){var
b=nbi();return this.addTo(a,b),b}function bnSubtract(a){var b=nbi();return
this.subTo(a,b),b}function bnMultiply(a){var b=nbi();return
this.multiplyTo(a,b),b}function bnSquare(){var a=nbi();return
this.squareTo(a),a}function bnDivide(a){var b=nbi();return
this.divRemTo(a,b,null),b}function bnRemainder(a){var b=nbi();return
this.divRemTo(a,null,b),b}function bnDivideAndRemainder(a){var
b=nbi(),c=nbi();return this.divRemTo(a,b,c),new Array(b,c)}function bnpDMultip
ly(a){this[this.t]=this.am(0,a-1,this,0,0,this.t),++this.t,this.clamp()}functi
on bnpDAddOffset(a,b){if(0!=a){for(;this.t<=b;)this[this.t++]=0;for(this[b]+=a
;this[b]>=this.DV;)this[b]-=this.DV,++b>=this.t&&(this[this.t++]=0),++this[b]}
}function NullExp(){}function nNop(a){return a}function
nMulTo(a,b,c){a.multiplyTo(b,c)}function nSqrTo(a,b){a.squareTo(b)}function
bnPow(a){return this.exp(a,new NullExp)}function bnpMultiplyLowerTo(a,b,c){var
d=Math.min(this.t+a.t,b);for(c.s=0,c.t=d;d>0;)c[--d]=0;var e;for(e=c.t-this.t;
e>d;++d)c[d+this.t]=this.am(0,a[d],c,d,0,this.t);for(e=Math.min(a.t,b);e>d;++d
)this.am(0,a[d],c,d,0,b-d);c.clamp()}function
bnpMultiplyUpperTo(a,b,c){--b;var d=c.t=this.t+a.t-b;for(c.s=0;--d>=0;)c[d]=0;
for(d=Math.max(b-this.t,0);d<a.t;++d)c[this.t+d-b]=this.am(b-d,a[d],c,0,0,this
.t+d-b);c.clamp(),c.drShiftTo(1,c)}function Barrett(a){this.r2=nbi(),this.q3=n
bi(),BigInteger.ONE.dlShiftTo(2*a.t,this.r2),this.mu=this.r2.divide(a),this.m=
a}function barrettConvert(a){if(a.s<0||a.t>2*this.m.t)return
a.mod(this.m);if(a.compareTo(this.m)<0)return a;var b=nbi();return
a.copyTo(b),this.reduce(b),b}function barrettRevert(a){return a}function barre
ttReduce(a){for(a.drShiftTo(this.m.t-1,this.r2),a.t>this.m.t+1&&(a.t=this.m.t+
1,a.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multip
lyLowerTo(this.q3,this.m.t+1,this.r2);a.compareTo(this.r2)<0;)a.dAddOffset(1,t
his.m.t+1);for(a.subTo(this.r2,a);a.compareTo(this.m)>=0;)a.subTo(this.m,a)}fu
nction barrettSqrTo(a,b){a.squareTo(b),this.reduce(b)}function
barrettMulTo(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function
bnModPow(a,b){var c,d,e=a.bitLength(),f=nbv(1);if(0>=e)return
f;c=18>e?1:48>e?3:144>e?4:768>e?5:6,d=8>e?new Classic(b):b.isEven()?new
Barrett(b):new Montgomery(b);var g=new
Array,h=3,i=c-1,j=(1<<c)-1;if(g[1]=d.convert(this),c>1){var
k=nbi();for(d.sqrTo(g[1],k);j>=h;)g[h]=nbi(),d.mulTo(k,g[h-2],g[h]),h+=2}var l
,m,n=a.t-1,o=!0,p=nbi();for(e=nbits(a[n])-1;n>=0;){for(e>=i?l=a[n]>>e-i&j:(l=(
a[n]&(1<<e+1)-1)<<i-e,n>0&&(l|=a[n-1]>>this.DB+e-i)),h=c;0==(1&l);)l>>=1,--
h;if((e-=h)<0&&(e+=this.DB,--n),o)g[l].copyTo(f),o=!1;else{for(;h>1;)d.sqrTo(f
,p),d.sqrTo(p,f),h-=2;h>0?d.sqrTo(f,p):(m=f,f=p,p=m),d.mulTo(p,g[l],f)}for(;n>
=0&&0==(a[n]&1<<e);)d.sqrTo(f,p),m=f,f=p,p=m,--e<0&&(e=this.DB-1,--n)}return
d.revert(f)}function bnGCD(a){var b=this.s<0?this.negate():this.clone(),c=a.s<
0?a.negate():a.clone();if(b.compareTo(c)<0){var d=b;b=c,c=d}var
e=b.getLowestSetBit(),f=c.getLowestSetBit();if(0>f)return b;for(f>e&&(f=e),f>0
&&(b.rShiftTo(f,b),c.rShiftTo(f,c));b.signum()>0;)(e=b.getLowestSetBit())>0&&b
.rShiftTo(e,b),(e=c.getLowestSetBit())>0&&c.rShiftTo(e,c),b.compareTo(c)>=0?(b
.subTo(c,b),b.rShiftTo(1,b)):(c.subTo(b,c),c.rShiftTo(1,c));return
f>0&&c.lShiftTo(f,c),c}function bnpModInt(a){if(0>=a)return 0;var
b=this.DV%a,c=this.s<0?a-1:0;if(this.t>0)if(0==b)c=this[0]%a;else for(var
d=this.t-1;d>=0;--d)c=(b*c+this[d])%a;return c}function bnModInverse(a){var
b=a.isEven();if(this.isEven()&&b||0==a.signum())return BigInteger.ZERO;for(var
c=a.clone(),d=this.clone(),e=nbv(1),f=nbv(0),g=nbv(0),h=nbv(1);0!=c.signum();)
{for(;c.isEven();)c.rShiftTo(1,c),b?(e.isEven()&&f.isEven()||(e.addTo(this,e),
f.subTo(a,f)),e.rShiftTo(1,e)):f.isEven()||f.subTo(a,f),f.rShiftTo(1,f);for(;d
.isEven();)d.rShiftTo(1,d),b?(g.isEven()&&h.isEven()||(g.addTo(this,g),h.subTo
(a,h)),g.rShiftTo(1,g)):h.isEven()||h.subTo(a,h),h.rShiftTo(1,h);c.compareTo(d
)>=0?(c.subTo(d,c),b&&e.subTo(g,e),f.subTo(h,f)):(d.subTo(c,d),b&&g.subTo(e,g)
,h.subTo(f,h))}return 0!=d.compareTo(BigInteger.ONE)?BigInteger.ZERO:h.compare
To(a)>=0?h.subtract(a):h.signum()<0?(h.addTo(a,h),h.signum()<0?h.add(a):h):h}f
unction bnIsProbablePrime(a){var b,c=this.abs();if(1==c.t&&c[0]<=lowprimes[low
primes.length-1]){for(b=0;b<lowprimes.length;++b)if(c[0]==lowprimes[b])return!
0;return!1}if(c.isEven())return!1;for(b=1;b<lowprimes.length;){for(var d=lowpr
imes[b],e=b+1;e<lowprimes.length&&lplim>d;)d*=lowprimes[e++];for(d=c.modInt(d)
;e>b;)if(d%lowprimes[b++]==0)return!1}return c.millerRabin(a)}function
bnpMillerRabin(a){var
b=this.subtract(BigInteger.ONE),c=b.getLowestSetBit();if(0>=c)return!1;var
d=b.shiftRight(c);a=a+1>>1,a>lowprimes.length&&(a=lowprimes.length);for(var e=
nbi(),f=0;a>f;++f){e.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.leng
th)]);var g=e.modPow(d,this);if(0!=g.compareTo(BigInteger.ONE)&&0!=g.compareTo
(b)){for(var h=1;h++<c&&0!=g.compareTo(b);)if(g=g.modPowInt(2,this),0==g.compa
reTo(BigInteger.ONE))return!1;if(0!=g.compareTo(b))return!1}}return!0}function
ECFieldElementFp(a,b){this.x=b,this.q=a}function feFpEquals(a){return
a==this?!0:this.q.equals(a.q)&&this.x.equals(a.x)}function
feFpToBigInteger(){return this.x}function feFpNegate(){return new
ECFieldElementFp(this.q,this.x.negate().mod(this.q))}function
feFpAdd(a){return new
ECFieldElementFp(this.q,this.x.add(a.toBigInteger()).mod(this.q))}function
feFpSubtract(a){return new ECFieldElementFp(this.q,this.x.subtract(a.toBigInte
ger()).mod(this.q))}function feFpMultiply(a){return new ECFieldElementFp(this.
q,this.x.multiply(a.toBigInteger()).mod(this.q))}function feFpSquare(){return
new ECFieldElementFp(this.q,this.x.square().mod(this.q))}function
feFpDivide(a){return new ECFieldElementFp(this.q,this.x.multiply(a.toBigIntege
r().modInverse(this.q)).mod(this.q))}function ECPointFp(a,b,c,d){this.curve=a,
this.x=b,this.y=c,this.z=null==d?BigInteger.ONE:d,this.zinv=null}function
pointFpGetX(){return null==this.zinv&&(this.zinv=this.z.modInverse(this.curve.
q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(th
is.curve.q))}function pointFpGetY(){return null==this.zinv&&(this.zinv=this.z.
modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().mult
iply(this.zinv).mod(this.curve.q))}function
pointFpEquals(a){if(a==this)return!0;if(this.isInfinity())return
a.isInfinity();if(a.isInfinity())return this.isInfinity();var b,c;return b=a.y
.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z))
.mod(this.curve.q),b.equals(BigInteger.ZERO)?(c=a.x.toBigInteger().multiply(th
is.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q),c.equals
(BigInteger.ZERO)):!1}function pointFpIsInfinity(){return null==this.x&&null==
this.y?!0:this.z.equals(BigInteger.ZERO)&&!this.y.toBigInteger().equals(BigInt
eger.ZERO)}function pointFpNegate(){return new
ECPointFp(this.curve,this.x,this.y.negate(),this.z)}function
pointFpAdd(a){if(this.isInfinity())return a;if(a.isInfinity())return this;var 
b=a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(
a.z)).mod(this.curve.q),c=a.x.toBigInteger().multiply(this.z).subtract(this.x.
toBigInteger().multiply(a.z)).mod(this.curve.q);if(BigInteger.ZERO.equals(c))r
eturn BigInteger.ZERO.equals(b)?this.twice():this.curve.getInfinity();var
d=new BigInteger("3"),e=this.x.toBigInteger(),f=this.y.toBigInteger(),g=(a.x.t
oBigInteger(),a.y.toBigInteger(),c.square()),h=g.multiply(c),i=e.multiply(g),j
=b.square().multiply(this.z),k=j.subtract(i.shiftLeft(1)).multiply(a.z).subtra
ct(h).multiply(c).mod(this.curve.q),l=i.multiply(d).multiply(b).subtract(f.mul
tiply(h)).subtract(j.multiply(b)).multiply(a.z).add(b.multiply(h)).mod(this.cu
rve.q),m=h.multiply(this.z).multiply(a.z).mod(this.curve.q);return new ECPoint
Fp(this.curve,this.curve.fromBigInteger(k),this.curve.fromBigInteger(l),m)}fun
ction pointFpTwice(){if(this.isInfinity())return
this;if(0==this.y.toBigInteger().signum())return this.curve.getInfinity();var
a=new BigInteger("3"),b=this.x.toBigInteger(),c=this.y.toBigInteger(),d=c.mult
iply(this.z),e=d.multiply(c).mod(this.curve.q),f=this.curve.a.toBigInteger(),g
=b.square().multiply(a);BigInteger.ZERO.equals(f)||(g=g.add(this.z.square().mu
ltiply(f))),g=g.mod(this.curve.q);var h=g.square().subtract(b.shiftLeft(3).mul
tiply(e)).shiftLeft(1).multiply(d).mod(this.curve.q),i=g.multiply(a).multiply(
b).subtract(e.shiftLeft(1)).shiftLeft(2).multiply(e).subtract(g.square().multi
ply(g)).mod(this.curve.q),j=d.square().multiply(d).shiftLeft(3).mod(this.curve
.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(h),this.curve.fr
omBigInteger(i),j)}function pointFpMultiply(a){if(this.isInfinity())return
this;if(0==a.signum())return this.curve.getInfinity();var
b,c=a,d=c.multiply(new BigInteger("3")),e=this.negate(),f=this;for(b=d.bitLeng
th()-2;b>0;--b){f=f.twice();var
g=d.testBit(b),h=c.testBit(b);g!=h&&(f=f.add(g?this:e))}return f}function
pointFpMultiplyTwo(a,b,c){var
d;d=a.bitLength()>c.bitLength()?a.bitLength()-1:c.bitLength()-1;for(var e=this
.curve.getInfinity(),f=this.add(b);d>=0;)e=e.twice(),a.testBit(d)?e=c.testBit(
d)?e.add(f):e.add(this):c.testBit(d)&&(e=e.add(b)),--d;return e}function ECCur
veFp(a,b,c){this.q=a,this.a=this.fromBigInteger(b),this.b=this.fromBigInteger(
c),this.infinity=new ECPointFp(this,null,null)}function curveFpGetQ(){return
this.q}function curveFpGetA(){return this.a}function curveFpGetB(){return
this.b}function curveFpEquals(a){return
a==this?!0:this.q.equals(a.q)&&this.a.equals(a.a)&&this.b.equals(a.b)}function
curveFpGetInfinity(){return this.infinity}function
curveFpFromBigInteger(a){return new ECFieldElementFp(this.q,a)}function
curveFpDecodePointHex(a){switch(parseInt(a.substr(0,2),16)){case 0:return
this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var
b=(a.length-2)/2,c=a.substr(2,b),d=a.substr(b+2,b);return new
ECPointFp(this,this.fromBigInteger(new
BigInteger(c,16)),this.fromBigInteger(new BigInteger(d,16)));default:return
null}}function
X9ECParameters(a,b,c,d){this.curve=a,this.g=b,this.n=c,this.h=d}function
x9getCurve(){return this.curve}function x9getG(){return this.g}function
x9getN(){return this.n}function x9getH(){return this.h}function
fromHex(a){return new BigInteger(a,16)}function secp128r1(){var a=fromHex("FFF
FFFFDFFFFFFFFFFFFFFFFFFFFFFFF"),b=fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC"),
c=fromHex("E87579C11079F43DD824993C2CEE5ED3"),d=fromHex("FFFFFFFE0000000075A30
D1B9038A115"),e=BigInteger.ONE,f=new ECCurveFp(a,b,c),g=f.decodePointHex("0416
1FF7528B899B2D0C28607CA52C5B86CF5AC8395BAFEB13C02DA292DDED7A83");return new
X9ECParameters(f,g,d,e)}function secp160k1(){var a=fromHex("FFFFFFFFFFFFFFFFFF
FFFFFFFFFFFFFEFFFFAC73"),b=BigInteger.ZERO,c=fromHex("7"),d=fromHex("010000000
0000000000001B8FA16DFAB9ACA16B6B3"),e=BigInteger.ONE,f=new ECCurveFp(a,b,c),g=
f.decodePointHex("043B4C382CE37AA192A4019E763036F4F5DD4D7EBB938CF935318FDCED6B
C28286531733C3F03C4FEE");return new X9ECParameters(f,g,d,e)}function
secp160r1(){var a=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF"),b=fromHe
x("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC"),c=fromHex("1C97BEFC54BD7A8B65ACF
89F81D4D4ADC565FA45"),d=fromHex("0100000000000000000001F4C8F927AED3CA752257"),
e=BigInteger.ONE,f=new ECCurveFp(a,b,c),g=f.decodePointHex("044A96B5688EF57328
4664698968C38BB913CBFC8223A628553168947D59DCC912042351377AC5FB32");return new
X9ECParameters(f,g,d,e)}function secp192k1(){var a=fromHex("FFFFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFFFFFFFEFFFFEE37"),b=BigInteger.ZERO,c=fromHex("3"),d=fromHex("F
FFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D"),e=BigInteger.ONE,f=new ECCur
veFp(a,b,c),g=f.decodePointHex("04DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE0
6C7D9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D");return new
X9ECParameters(f,g,d,e)}function secp192r1(){var a=fromHex("FFFFFFFFFFFFFFFFFF
FFFFFFFFFFFFFEFFFFFFFFFFFFFFFF"),b=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFF
FFFFFFFFFFFFFC"),c=fromHex("64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1")
,d=fromHex("FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831"),e=BigInteger.ON
E,f=new ECCurveFp(a,b,c),g=f.decodePointHex("04188DA80EB03090F67CBF20EB43A1880
0F4FF0AFD82FF101207192B95FFC8DA78631011ED6B24CDD573F977A11E794811");return new
X9ECParameters(f,g,d,e)}function secp224r1(){var a=fromHex("FFFFFFFFFFFFFFFFFF
FFFFFFFFFFFFFF000000000000000000000001"),b=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFF
FFFFFEFFFFFFFFFFFFFFFFFFFFFFFE"),c=fromHex("B4050A850C04B3ABF54132565044B0B7D7
BFD8BA270B39432355FFB4"),d=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13
DD29455C5C2A3D"),e=BigInteger.ONE,f=new ECCurveFp(a,b,c),g=f.decodePointHex("0
4B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21BD376388B5F723FB4C22D
FE6CD4375A05A07476444D5819985007E34");return new
X9ECParameters(f,g,d,e)}function secp256k1(){var a=fromHex("FFFFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F"),b=BigInteger.ZERO,c=fromHex("
7"),d=fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD036414
1"),e=BigInteger.ONE,f=new ECCurveFp(a,b,c),g=f.decodePointHex("0479BE667EF9DC
BBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798483ADA7726A3C4655DA4FBFC0E
1108A8FD17B448A68554199C47D08FFB10D4B8");return new
X9ECParameters(f,g,d,e)}function secp256r1(){var a=fromHex("FFFFFFFF0000000100
0000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF"),b=fromHex("FFFFFFFF0000000100
0000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC"),c=fromHex("5AC635D8AA3A93E7B3
EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B"),d=fromHex("FFFFFFFF00000000FF
FFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551"),e=BigInteger.ONE,f=new ECCurv
eFp(a,b,c),g=f.decodePointHex("046B17D1F2E12C4247F8BCE6E563A440F277037D812DEB3
3A0F4A13945D898C2964FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837B
F51F5");return new X9ECParameters(f,g,d,e)}function getSECCurveByName(a){retur
n"secp128r1"==a?secp128r1():"secp160k1"==a?secp160k1():"secp160r1"==a?secp160r
1():"secp192k1"==a?secp192k1():"secp192r1"==a?secp192r1():"secp224r1"==a?secp2
24r1():"secp256k1"==a?secp256k1():"secp256r1"==a?secp256r1():null}function
integerToBytes(a,b){var
c=a.toByteArrayUnsigned();if(b<c.length)c=c.slice(c.length-b);else
for(;b>c.length;)c.unshift(0);return c}function dmp(a){return a instanceof Big
Integer||(a=a.toBigInteger()),Crypto.util.bytesToHex(a.toByteArrayUnsigned())}
!function(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456
789+/",b=window.Crypto={},c=b.util={rotl:function(a,b){return
a<<b|a>>>32-b},rotr:function(a,b){return
a<<32-b|a>>>b},endian:function(a){if(a.constructor==Number)return
16711935&c.rotl(a,8)|4278255360&c.rotl(a,24);for(var
b=0;b<a.length;b++)a[b]=c.endian(a[b]);return
a},randomBytes:function(a){for(var
b=[];a>0;a--)b.push(Math.floor(256*Math.random()));return
b},bytesToWords:function(a){for(var
b=[],c=0,d=0;c<a.length;c++,d+=8)b[d>>>5]|=a[c]<<24-d%32;return
b},wordsToBytes:function(a){for(var
b=[],c=0;c<32*a.length;c+=8)b.push(a[c>>>5]>>>24-c%32&255);return
b},bytesToHex:function(a){for(var b=[],c=0;c<a.length;c++)b.push((a[c]>>>4).to
String(16)),b.push((15&a[c]).toString(16));return
b.join("")},hexToBytes:function(a){for(var
b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substr(c,2),16));return
b},bytesToBase64:function(b){if("function"==typeof btoa)return
btoa(e.bytesToString(b));for(var c=[],d=0;d<b.length;d+=3)for(var f=b[d]<<16|b
[d+1]<<8|b[d+2],g=0;4>g;g++)8*d+6*g<=8*b.length?c.push(a.charAt(f>>>6*(3-g)&63
)):c.push("=");return
c.join("")},base64ToBytes:function(b){if("function"==typeof atob)return
e.stringToBytes(atob(b));b=b.replace(/[^A-Z0-9+\/]/gi,"");for(var c=[],d=0,f=0
;d<b.length;f=++d%4)0!=f&&c.push((a.indexOf(b.charAt(d-1))&Math.pow(2,-2*f+8)-
1)<<2*f|a.indexOf(b.charAt(d))>>>6-2*f);return c}};b.mode={};var
d=b.charenc={},e=(d.UTF8={stringToBytes:function(a){return e.stringToBytes(une
scape(encodeURIComponent(a)))},bytesToString:function(a){return decodeURICompo
nent(escape(e.bytesToString(a)))}},d.Binary={stringToBytes:function(a){for(var
b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return
b},bytesToString:function(a){for(var
b=[],c=0;c<a.length;c++)b.push(String.fromCharCode(a[c]));return
b.join("")}})}(),function(){var a=Crypto,b=a.util,c=a.charenc,d=c.UTF8,e=c.Bin
ary,f=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,245363
5748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,216207820
6,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,12
49150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,333
6571891,3584528711,113926993,338241895,666307205,773529912,1294757372,13961822
91,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,325973080
0,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,65
9060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,202410
4815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g=a.SH
A256=function(a,c){var d=b.wordsToBytes(g._sha256(a));return c&&c.asBytes?d:c&
&c.asString?e.bytesToString(d):b.bytesToHex(d)};g._sha256=function(a){a.constr
uctor==String&&(a=d.stringToBytes(a));var c,e,g,h,i,j,k,l,m,n,o,p,q=b.bytesToW
ords(a),r=8*a.length,s=[1779033703,3144134277,1013904242,2773480762,1359893119
,2600822924,528734635,1541459225],t=[];q[r>>5]|=128<<24-r%32,q[(r+64>>9<<4)+15
]=r;for(var m=0;m<q.length;m+=16){c=s[0],e=s[1],g=s[2],h=s[3],i=s[4],j=s[5],k=
s[6],l=s[7];for(var n=0;64>n;n++){if(16>n)t[n]=q[n+m];else{var u=t[n-15],v=t[n
-2],w=(u<<25|u>>>7)^(u<<14|u>>>18)^u>>>3,x=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>1
0;t[n]=w+(t[n-7]>>>0)+x+(t[n-16]>>>0)}var y=i&j^~i&k,z=c&e^c&g^e&g,A=(c<<30|c>
>>2)^(c<<19|c>>>13)^(c<<10|c>>>22),B=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25
);o=(l>>>0)+B+y+f[n]+(t[n]>>>0),p=A+z,l=k,k=j,j=i,i=h+o,h=g,g=e,e=c,c=o+p}s[0]
+=c,s[1]+=e,s[2]+=g,s[3]+=h,s[4]+=i,s[5]+=j,s[6]+=k,s[7]+=l}return
s},g._blocksize=16}(),function(){function a(a,b,c,d){return a>=0&&15>=a?b^c^d:
a>=16&&31>=a?b&c|~b&d:a>=32&&47>=a?(b|~c)^d:a>=48&&63>=a?b&d|c&~d:a>=64&&79>=a
?b^(c|~d):"rmd160_f: j out of range"}function b(a){return a>=0&&15>=a?0:a>=16&
&31>=a?1518500249:a>=32&&47>=a?1859775393:a>=48&&63>=a?2400959708:a>=64&&79>=a
?2840853838:"rmd160_K1: j out of range"}function c(a){return a>=0&&15>=a?13528
29926:a>=16&&31>=a?1548603684:a>=32&&47>=a?1836072691:a>=48&&63>=a?2053994217:
a>=64&&79>=a?0:"rmd160_K2: j out of range"}function d(a,b){var
c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function
e(a,b){return a<<b|a>>>32-b}var f=Crypto,g=f.util,h=f.charenc,i=h.UTF8,j=h.Bin
ary;g.bytesToLWords=function(a){for(var
b=Array(a.length>>2),c=0;c<b.length;c++)b[c]=0;for(var
c=0;c<8*a.length;c+=8)b[c>>5]|=(255&a[c/8])<<c%32;return
b},g.lWordsToBytes=function(a){for(var
b=[],c=0;c<32*a.length;c+=8)b.push(a[c>>5]>>>c%32&255);return b};var
k=f.RIPEMD160=function(a,b){var c=g.lWordsToBytes(k._rmd160(a));return b&&b.as
Bytes?c:b&&b.asString?j.bytesToString(c):g.bytesToHex(c)};k._rmd160=function(f
){f.constructor==String&&(f=i.stringToBytes(f));var h=g.bytesToLWords(f),j=8*f
.length;h[j>>5]|=128<<j%32,h[(j+64>>>9<<4)+14]=j;for(var k=1732584193,p=402323
3417,q=2562383102,r=271733878,s=3285377520,t=0;t<h.length;t+=16){for(var u,v=k
,w=p,x=q,y=r,z=s,A=k,B=p,C=q,D=r,E=s,F=0;79>=F;++F)u=d(v,a(F,w,x,y)),u=d(u,h[t
+l[F]]),u=d(u,b(F)),u=d(e(u,n[F]),z),v=z,z=y,y=e(x,10),x=w,w=u,u=d(A,a(79-F,B,
C,D)),u=d(u,h[t+m[F]]),u=d(u,c(F)),u=d(e(u,o[F]),E),A=E,E=D,D=e(C,10),C=B,B=u;
u=d(p,d(x,D)),p=d(q,d(y,E)),q=d(r,d(z,A)),r=d(s,d(v,B)),s=d(k,d(w,C)),k=u}retu
rn[k,p,q,r,s]};var l=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3
,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,1
3,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],m=[5,14,7,0,9,2,11,4,
13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11
,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2
,13,14,0,3,9,11],n=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15
,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,1
5,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],o=[8,9,9,11,1
3,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,1
1,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12
,9,12,5,14,6,8,13,6,5,15,13,11,11]}(),Arcfour.prototype.init=ARC4init,Arcfour.
prototype.next=ARC4next;var
rng_psize=256,rng_state,rng_pool,rng_pptr;if(null==rng_pool){rng_pool=new
Array,rng_pptr=0;var t;if("Netscape"==navigator.appName&&navigator.appVersion<
"5"&&window.crypto){var z=window.crypto.random(32);for(t=0;t<z.length;++t)rng_
pool[rng_pptr++]=255&z.charCodeAt(t)}for(;rng_psize>rng_pptr;)t=Math.floor(655
36*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=255&t;rng_pp
tr=0,rng_seed_time()}SecureRandom.prototype.nextBytes=rng_get_bytes;var
dbits,canary=0xdeadbeefcafe,j_lm=15715070==(16777215&canary);j_lm&&"Microsoft
Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j
_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(Big
Integer.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.pr
ototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var
BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1
=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var
BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;for(rr="0".
charCodeAt(0),vv=0;9>=vv;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;36
>vv;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=
vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic
.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqr
To=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert
=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=
montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnp
CopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString
=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShif
tTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.protot
ype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.
prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInte
ger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,B
igInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven
,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigI
nteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.pro
totype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInt
eger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger
.ZERO=nbv(0),BigInteger.ONE=nbv(1),NullExp.prototype.convert=nNop,NullExp.prot
otype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrT
o,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRev
ert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulT
o,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,2
9,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137
,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,2
41,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359
,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,4
79,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607
,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,7
39,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863
,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lpli
m=(1<<26)/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChun
kSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=b
npFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype
.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger
.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteg
er.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnp
MultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInt
eger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabi
n,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,
BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnS
hortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArra
y=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=
bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger
.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=
bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShift
Left,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowe
stSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger
.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.p
rototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger
.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.proto
type.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.proto
type.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAnd
Remainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse
=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,Bi
gInteger.prototype.isProbablePrime=bnIsProbablePrime,BigInteger.prototype.squa
re=bnSquare,ECFieldElementFp.prototype.equals=feFpEquals,ECFieldElementFp.prot
otype.toBigInteger=feFpToBigInteger,ECFieldElementFp.prototype.negate=feFpNega
te,ECFieldElementFp.prototype.add=feFpAdd,ECFieldElementFp.prototype.subtract=
feFpSubtract,ECFieldElementFp.prototype.multiply=feFpMultiply,ECFieldElementFp
.prototype.square=feFpSquare,ECFieldElementFp.prototype.divide=feFpDivide,ECPo
intFp.prototype.getX=pointFpGetX,ECPointFp.prototype.getY=pointFpGetY,ECPointF
p.prototype.equals=pointFpEquals,ECPointFp.prototype.isInfinity=pointFpIsInfin
ity,ECPointFp.prototype.negate=pointFpNegate,ECPointFp.prototype.add=pointFpAd
d,ECPointFp.prototype.twice=pointFpTwice,ECPointFp.prototype.multiply=pointFpM
ultiply,ECPointFp.prototype.multiplyTwo=pointFpMultiplyTwo,ECCurveFp.prototype
.getQ=curveFpGetQ,ECCurveFp.prototype.getA=curveFpGetA,ECCurveFp.prototype.get
B=curveFpGetB,ECCurveFp.prototype.equals=curveFpEquals,ECCurveFp.prototype.get
Infinity=curveFpGetInfinity,ECCurveFp.prototype.fromBigInteger=curveFpFromBigI
nteger,ECCurveFp.prototype.decodePointHex=curveFpDecodePointHex,X9ECParameters
.prototype.getCurve=x9getCurve,X9ECParameters.prototype.getG=x9getG,X9ECParame
ters.prototype.getN=x9getN,X9ECParameters.prototype.getH=x9getH;var EventEmitt
er=function(){};EventEmitter.prototype.on=function(a,b,c){c||(c=this),this._li
steners||(this._listeners={}),this._listeners[a]||(this._listeners[a]=[]),this
._unbinders||(this._unbinders={}),this._unbinders[a]||(this._unbinders[a]=[]);
var d=function(a){b.apply(c,[a])};this._unbinders[a].push(b),this._listeners[a
].push(d)},EventEmitter.prototype.trigger=function(a,b){if(void
0===b&&(b={}),this._listeners||(this._listeners={}),this._listeners[a])for(var
c=this._listeners[a].length;c--;)this._listeners[a][c](b) },EventEmitter.proto
type.removeListener=function(a,b){if(this._unbinders||(this._unbinders={}),thi
s._unbinders[a])for(var c=this._unbinders[a].length;c--;)this._unbinders[a][c]
===b&&(this._unbinders[a].splice(c,1),this._listeners[a].splice(c,1))},EventEm
itter.augment=function(a){for(var b in
EventEmitter.prototype)a[b]||(a[b]=EventEmitter.prototype[b])},function(a){var
b=a;"object"!=typeof module&&(b.EventEmitter=EventEmitter)}("object"==typeof m
odule?module.exports:window.Bitcoin={}),BigInteger.valueOf=nbv,BigInteger.prot
otype.toByteArrayUnsigned=function(){var a=this.abs().toByteArray();return
a.length?(0==a[0]&&(a=a.slice(1)),a.map(function(a){return
0>a?a+256:a})):a},BigInteger.fromByteArrayUnsigned=function(a){return
a.length?128&a[0]?new BigInteger([0].concat(a)):new BigInteger(a):a.valueOf(0)
},BigInteger.prototype.toByteArraySigned=function(){var
a=this.abs().toByteArrayUnsigned(),b=this.compareTo(BigInteger.ZERO)<0;return 
b?128&a[0]?a.unshift(128):a[0]|=128:128&a[0]&&a.unshift(0),a},BigInteger.fromB
yteArraySigned=function(a){return 128&a[0]?(a[0]&=127,BigInteger.fromByteArray
Unsigned(a).negate()):BigInteger.fromByteArrayUnsigned(a)};var names=["log","d
ebug","info","warn","error","assert","dir","dirxml","group","groupEnd","time",
"timeEnd","count","trace","profile","profileEnd"];"undefined"==typeof
window.console&&(window.console={});for(var
i=0;i<names.length;++i)"undefined"==typeof window.console[names[i]]&&(window.c
onsole[names[i]]=function(){});Bitcoin.Util={isArray:Array.isArray||function(a
){return"[object Array]"===Object.prototype.toString.call(a)},makeFilledArray:
function(a,b){for(var c=[],d=0;a>d;)c[d++]=b;return
c},numToVarInt:function(a){return 253>a?[a]:65536>=a?[253,a>>>8,255&a]:1>=a?[2
54].concat(Crypto.util.wordsToBytes([a])):[255].concat(Crypto.util.wordsToByte
s([a>>>32,a]))},valueToBigInt:function(a){return a instanceof BigInteger?a:Big
Integer.fromByteArrayUnsigned(a)},formatValue:function(a){for(var b=this.value
ToBigInt(a).toString(),c=b.length>8?b.substr(0,b.length-8):"0",d=b.length>8?b.
substr(b.length-8):b;d.length<8;)d="0"+d;for(d=d.replace(/0*$/,"");d.length<2;
)d+="0";return c+"."+d},parseValue:function(a){for(var b=a.split("."),c=b[0],d
=b[1]||"0";d.length<8;)d+="0";d=d.replace(/^0+/g,"");var
e=BigInteger.valueOf(parseInt(c));return e=e.multiply(BigInteger.valueOf(1e8))
,e=e.add(BigInteger.valueOf(parseInt(d)))},sha256ripe160:function(a){return
Crypto.RIPEMD160(Crypto.SHA256(a,{asBytes:!0}),{asBytes:!0})}};for(var i in Cr
ypto.util)Crypto.util.hasOwnProperty(i)&&(Bitcoin.Util[i]=Crypto.util[i]);!fun
ction(a){a.Base58={alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopq
rstuvwxyz",validRegex:/^[1-9A-HJ-NP-Za-
km-z]+$/,base:BigInteger.valueOf(58),encode:function(a){for(var
c=BigInteger.fromByteArrayUnsigned(a),d=[];c.compareTo(b.base)>=0;){var e=c.mo
d(b.base);d.unshift(b.alphabet[e.intValue()]),c=c.subtract(e).divide(b.base)}d
.unshift(b.alphabet[c.intValue()]);for(var
f=0;f<a.length&&0==a[f];f++)d.unshift(b.alphabet[0]);return
d.join("")},decode:function(a){for(var
c=BigInteger.valueOf(0),d=0,e=a.length-1;e>=0;e--){var
f=b.alphabet.indexOf(a[e]);if(0>f)throw"Invalid character";c=c.add(BigInteger.
valueOf(f).multiply(b.base.pow(a.length-1-e))),"1"==a[e]?d++:d=0}for(var
g=c.toByteArrayUnsigned();d-->0;)g.unshift(0);return g}};var
b=a.Base58}("undefined"!=typeof
Bitcoin?Bitcoin:module.exports),Bitcoin.Address=function(a){"string"==typeof a
&&(a=Bitcoin.Address.decodeString(a)),this.hash=a,this.version=0},Bitcoin.Addr
ess.prototype.toString=function(){var
a=this.hash.slice(0);a.unshift(this.version);var b=Crypto.SHA256(Crypto.SHA256
(a,{asBytes:!0}),{asBytes:!0}),c=a.concat(b.slice(0,4));return Bitcoin.Base58.
encode(c)},Bitcoin.Address.prototype.getHashBase64=function(){return Crypto.ut
il.bytesToBase64(this.hash)},Bitcoin.Address.decodeString=function(a){var b=Bi
tcoin.Base58.decode(a),c=b.slice(0,21),d=Crypto.SHA256(Crypto.SHA256(c,{asByte
s:!0}),{asBytes:!0});if(d[0]!=b[21]||d[1]!=b[22]||d[2]!=b[23]||d[3]!=b[24])thr
ow"Checksum validation failed!";var e=c.shift();if(0!=e)throw"Version "+e+"
not supported!";return
c},ECFieldElementFp.prototype.getByteLength=function(){return Math.floor((this
.toBigInteger().bitLength()+7)/8)},ECPointFp.prototype.getEncoded=function(a){
var b=this.getX().toBigInteger(),c=this.getY().toBigInteger(),d=integerToBytes
(b,32);return a?c.isEven()?d.unshift(2):d.unshift(3):(d.unshift(4),d=d.concat(
integerToBytes(c,32))),d},ECPointFp.decodeFrom=function(a,b){var c=(b[0],b.len
gth-1),d=b.slice(1,1+c/2),e=b.slice(1+c/2,1+c);d.unshift(0),e.unshift(0);var
f=new BigInteger(d),g=new BigInteger(e);return new ECPointFp(a,a.fromBigIntege
r(f),a.fromBigInteger(g))},ECPointFp.prototype.add2D=function(a){if(this.isInf
inity())return a;if(a.isInfinity())return this;if(this.x.equals(a.x))return
this.y.equals(a.y)?this.twice():this.curve.getInfinity();var b=a.x.subtract(th
is.x),c=a.y.subtract(this.y),d=c.divide(b),e=d.square().subtract(this.x).subtr
act(a.x),f=d.multiply(this.x.subtract(e)).subtract(this.y);return new ECPointF
p(this.curve,e,f)},ECPointFp.prototype.twice2D=function(){if(this.isInfinity()
)return this;if(0==this.y.toBigInteger().signum())return
this.curve.getInfinity();var a=this.curve.fromBigInteger(BigInteger.valueOf(2)
),b=this.curve.fromBigInteger(BigInteger.valueOf(3)),c=this.x.square().multipl
y(b).add(this.curve.a).divide(this.y.multiply(a)),d=c.square().subtract(this.x
.multiply(a)),e=c.multiply(this.x.subtract(d)).subtract(this.y);return new ECP
ointFp(this.curve,d,e)},ECPointFp.prototype.multiply2D=function(a){if(this.isI
nfinity())return this;if(0==a.signum())return this.curve.getInfinity();var
b,c=a,d=c.multiply(new BigInteger("3")),e=this.negate(),f=this;for(b=d.bitLeng
th()-2;b>0;--b){f=f.twice();var
g=d.testBit(b),h=c.testBit(b);g!=h&&(f=f.add2D(g?this:e))}return
f},ECPointFp.prototype.isOnCurve=function(){var a=this.getX().toBigInteger(),b
=this.getY().toBigInteger(),c=this.curve.getA().toBigInteger(),d=this.curve.ge
tB().toBigInteger(),e=this.curve.getQ(),f=b.multiply(b).mod(e),g=a.multiply(a)
.multiply(a).add(c.multiply(a)).add(d).mod(e);return f.equals(g)},ECPointFp.pr
ototype.toString=function(){return"("+this.getX().toBigInteger().toString()+",
"+this.getY().toBigInteger().toString()+")"},ECPointFp.prototype.validate=func
tion(){var a=this.curve.getQ();if(this.isInfinity())throw new Error("Point is
at infinity.");var b=this.getX().toBigInteger(),c=this.getY().toBigInteger();i
f(b.compareTo(BigInteger.ONE)<0||b.compareTo(a.subtract(BigInteger.ONE))>0)thr
ow new Error("x coordinate out of bounds");if(c.compareTo(BigInteger.ONE)<0||c
.compareTo(a.subtract(BigInteger.ONE))>0)throw new Error("y coordinate out of
bounds");if(!this.isOnCurve())throw new Error("Point is not on the
curve.");if(this.multiply(a).isInfinity())throw new Error("Point is not a
scalar multiple of G.");return!0},Bitcoin.ECDSA=function(){function
a(a,b,c,d){for(var e=Math.max(b.bitLength(),d.bitLength()),f=a.add2D(c),g=a.cu
rve.getInfinity(),h=e-1;h>=0;--h)g=g.twice2D(),g.z=BigInteger.ONE,b.testBit(h)
?g=d.testBit(h)?g.add2D(f):g.add2D(a):d.testBit(h)&&(g=g.add2D(c));return
g}var b=getSECCurveByName("secp256k1"),c=new
SecureRandom,d=null,e={getBigRandom:function(a){return new BigInteger(a.bitLen
gth(),c).mod(a.subtract(BigInteger.ONE)).add(BigInteger.ONE)},sign:function(a,
c){var d=c,f=b.getN(),g=BigInteger.fromByteArrayUnsigned(a);do var h=e.getBigR
andom(f),i=b.getG(),j=i.multiply(h),k=j.getX().toBigInteger().mod(f);while(k.c
ompareTo(BigInteger.ZERO)<=0);var
l=h.modInverse(f).multiply(g.add(d.multiply(k))).mod(f);return
e.serializeSig(k,l)},verify:function(a,c,d){var
f,g;if(Bitcoin.Util.isArray(c)){var
h=e.parseSig(c);f=h.r,g=h.s}else{if("object"!=typeof
c||!c.r||!c.s)throw"Invalid value for signature";f=c.r,g=c.s}var i;if(d
instanceof ECPointFp)i=d;else{if(!Bitcoin.Util.isArray(d))throw"Invalid format
for pubkey value, must be byte array or
ECPointFp";i=ECPointFp.decodeFrom(b.getCurve(),d)}var
j=BigInteger.fromByteArrayUnsigned(a);return
e.verifyRaw(j,f,g,i)},verifyRaw:function(a,c,d,e){var f=b.getN(),g=b.getG();if
(c.compareTo(BigInteger.ONE)<0||c.compareTo(f)>=0)return!1;if(d.compareTo(BigI
nteger.ONE)<0||d.compareTo(f)>=0)return!1;var h=d.modInverse(f),i=a.multiply(h
).mod(f),j=c.multiply(h).mod(f),k=g.multiply(i).add(e.multiply(j)),l=k.getX().
toBigInteger().mod(f);return l.equals(c)},serializeSig:function(a,b){var
c=a.toByteArraySigned(),d=b.toByteArraySigned(),e=[];return e.push(2),e.push(c
.length),e=e.concat(c),e.push(2),e.push(d.length),e=e.concat(d),e.unshift(e.le
ngth),e.unshift(48),e},parseSig:function(a){var b;if(48!=a[0])throw new
Error("Signature not a valid DERSequence");if(b=2,2!=a[b])throw new
Error("First element in signature must be a DERInteger");var
c=a.slice(b+2,b+2+a[b+1]);if(b+=2+a[b+1],2!=a[b])throw new Error("Second
element in signature must be a DERInteger");var
d=a.slice(b+2,b+2+a[b+1]);b+=2+a[b+1];var e=BigInteger.fromByteArrayUnsigned(c
),f=BigInteger.fromByteArrayUnsigned(d);return{r:e,s:f}},parseSigCompact:funct
ion(a){if(65!==a.length)throw"Signature has the wrong length";var
c=a[0]-27;if(0>c||c>7)throw"Invalid signature type";var d=b.getN(),e=BigIntege
r.fromByteArrayUnsigned(a.slice(1,33)).mod(d),f=BigInteger.fromByteArrayUnsign
ed(a.slice(33,65)).mod(d);return{r:e,s:f,i:c}},recoverPubKey:function(c,f,g,h)
{h&=3;var i=1&h,j=h>>1,k=b.getN(),l=b.getG(),m=b.getCurve(),n=m.getQ(),o=m.get
A().toBigInteger(),p=m.getB().toBigInteger();d||(d=n.add(BigInteger.ONE).divid
e(BigInteger.valueOf(4)));var q=j?c.add(k):c,r=q.multiply(q).multiply(q).add(o
.multiply(q)).add(p).mod(n),s=r.modPow(d,n),t=(s.isEven()?h%2:(h+1)%2,(s.isEve
n()?!i:i)?s:n.subtract(s)),u=new
ECPointFp(m,m.fromBigInteger(q),m.fromBigInteger(t));u.validate();var v=BigInt
eger.fromByteArrayUnsigned(g),w=BigInteger.ZERO.subtract(v).mod(k),x=c.modInve
rse(k),y=a(u,f,l,w).multiply(x);if(console.log("G.x: ",Crypto.util.bytesToHex(
l.x.toBigInteger().toByteArrayUnsigned())),console.log("G.y: ",Crypto.util.byt
esToHex(l.y.toBigInteger().toByteArrayUnsigned())),console.log("s:
",Crypto.util.bytesToHex(x.toByteArrayUnsigned())),console.log("Q.x: ",Crypto.
util.bytesToHex(y.x.toBigInteger().toByteArrayUnsigned())),console.log("Q.y: "
,Crypto.util.bytesToHex(y.y.toBigInteger().toByteArrayUnsigned())),y.validate(
),!e.verifyRaw(v,c,f,y))throw"Pubkey recovery unsuccessful";var z=new
Bitcoin.ECKey;return
z.pub=y,z},calcPubkeyRecoveryParam:function(a,b,c,d){for(var
e=0;4>e;e++)try{var f=Bitcoin.ECDSA.recoverPubKey(b,c,d,e);if(f.getBitcoinAddr
ess().toString()==a)return e}catch(g){}throw"Unable to find valid recovery
factor"}};return e}(),Bitcoin.ECKey=function(){var
a=Bitcoin.ECDSA,b=getSECCurveByName("secp256k1"),c=(new
SecureRandom,function(d){if(d)d instanceof BigInteger?this.priv=d:Bitcoin.Util
.isArray(d)?this.priv=BigInteger.fromByteArrayUnsigned(d):"string"==typeof d&&
(this.priv=51==d.length&&"5"==d[0]?BigInteger.fromByteArrayUnsigned(c.decodeSt
ring(d)):BigInteger.fromByteArrayUnsigned(Crypto.util.base64ToBytes(d)));else{
var e=b.getN();this.priv=a.getBigRandom(e)}this.compressed=!!c.compressByDefau
lt});return c.compressByDefault=!1,c.prototype.setCompressed=function(a){this.
compressed=!!a},c.prototype.getPub=function(){return this.getPubPoint().getEnc
oded(this.compressed)},c.prototype.getPubPoint=function(){return this.pub||(th
is.pub=b.getG().multiply(this.priv)),this.pub},c.prototype.getPubKeyHash=funct
ion(){return this.pubKeyHash?this.pubKeyHash:this.pubKeyHash=Bitcoin.Util.sha2
56ripe160(this.getPub())},c.prototype.getBitcoinAddress=function(){var
a=this.getPubKeyHash(),b=new Bitcoin.Address(a);return
b},c.prototype.getExportedPrivateKey=function(){for(var
a=this.priv.toByteArrayUnsigned();a.length<32;)a.unshift(0);a.unshift(128);var
b=Crypto.SHA256(Crypto.SHA256(a,{asBytes:!0}),{asBytes:!0}),c=a.concat(b.slice
(0,4));return Bitcoin.Base58.encode(c)},c.prototype.setPub=function(a){this.pu
b=ECPointFp.decodeFrom(b.getCurve(),a)},c.prototype.toString=function(a){retur
n"base64"===a?Crypto.util.bytesToBase64(this.priv.toByteArrayUnsigned()):Crypt
o.util.bytesToHex(this.priv.toByteArrayUnsigned())},c.prototype.sign=function(
b){return a.sign(b,this.priv)},c.prototype.verify=function(b,c){return
a.verify(b,c,this.getPub())},c.decodeString=function(a){var b=Bitcoin.Base58.d
ecode(a),c=b.slice(0,33),d=Crypto.SHA256(Crypto.SHA256(c,{asBytes:!0}),{asByte
s:!0});if(d[0]!=b[33]||d[1]!=b[34]||d[2]!=b[35]||d[3]!=b[36])throw"Checksum
validation failed!";var e=c.shift();if(128!=e)throw"Version "+e+" not
supported!";return c},c}(),function(){var a=Bitcoin.Opcode=function(a){this.co
de=a};a.prototype.toString=function(){return a.reverseMap[this.code]},a.map={O
P_0:0,OP_FALSE:0,OP_PUSHDATA1:76,OP_PUSHDATA2:77,OP_PUSHDATA4:78,OP_1NEGATE:79
,OP_RESERVED:80,OP_1:81,OP_TRUE:81,OP_2:82,OP_3:83,OP_4:84,OP_5:85,OP_6:86,OP_
7:87,OP_8:88,OP_9:89,OP_10:90,OP_11:91,OP_12:92,OP_13:93,OP_14:94,OP_15:95,OP_
16:96,OP_NOP:97,OP_VER:98,OP_IF:99,OP_NOTIF:100,OP_VERIF:101,OP_VERNOTIF:102,O
P_ELSE:103,OP_ENDIF:104,OP_VERIFY:105,OP_RETURN:106,OP_TOALTSTACK:107,OP_FROMA
LTSTACK:108,OP_2DROP:109,OP_2DUP:110,OP_3DUP:111,OP_2OVER:112,OP_2ROT:113,OP_2
SWAP:114,OP_IFDUP:115,OP_DEPTH:116,OP_DROP:117,OP_DUP:118,OP_NIP:119,OP_OVER:1
20,OP_PICK:121,OP_ROLL:122,OP_ROT:123,OP_SWAP:124,OP_TUCK:125,OP_CAT:126,OP_SU
BSTR:127,OP_LEFT:128,OP_RIGHT:129,OP_SIZE:130,OP_INVERT:131,OP_AND:132,OP_OR:1
33,OP_XOR:134,OP_EQUAL:135,OP_EQUALVERIFY:136,OP_RESERVED1:137,OP_RESERVED2:13
8,OP_1ADD:139,OP_1SUB:140,OP_2MUL:141,OP_2DIV:142,OP_NEGATE:143,OP_ABS:144,OP_
NOT:145,OP_0NOTEQUAL:146,OP_ADD:147,OP_SUB:148,OP_MUL:149,OP_DIV:150,OP_MOD:15
1,OP_LSHIFT:152,OP_RSHIFT:153,OP_BOOLAND:154,OP_BOOLOR:155,OP_NUMEQUAL:156,OP_
NUMEQUALVERIFY:157,OP_NUMNOTEQUAL:158,OP_LESSTHAN:159,OP_GREATERTHAN:160,OP_LE
SSTHANOREQUAL:161,OP_GREATERTHANOREQUAL:162,OP_MIN:163,OP_MAX:164,OP_WITHIN:16
5,OP_RIPEMD160:166,OP_SHA1:167,OP_SHA256:168,OP_HASH160:169,OP_HASH256:170,OP_
CODESEPARATOR:171,OP_CHECKSIG:172,OP_CHECKSIGVERIFY:173,OP_CHECKMULTISIG:174,O
P_CHECKMULTISIGVERIFY:175,OP_NOP1:176,OP_NOP2:177,OP_NOP3:178,OP_NOP4:179,OP_N
OP5:180,OP_NOP6:181,OP_NOP7:182,OP_NOP8:183,OP_NOP9:184,OP_NOP10:185,OP_PUBKEY
HASH:253,OP_PUBKEY:254,OP_INVALIDOPCODE:255},a.reverseMap=[];for(var b in
a.map)a.reverseMap[a.map[b]]=b}(),function(){var Opcode=Bitcoin.Opcode;for(var
i in Opcode.map)eval("var "+i+" = "+Opcode.map[i]+";");var
Script=Bitcoin.Script=function(a){if(a)if("string"==typeof
a)this.buffer=Crypto.util.base64ToBytes(a);else
if(Bitcoin.Util.isArray(a))this.buffer=a;else{if(!(a instanceof Script))throw
new Error("Invalid script");this.buffer=a.buffer}else
this.buffer=[];this.parse()};Script.prototype.parse=function(){function
a(a){b.chunks.push(b.buffer.slice(c,c+a)),c+=a}var
b=this;this.chunks=[];for(var c=0;c<this.buffer.length;){var
d=this.buffer[c++];d>=240&&(d=d<<8|this.buffer[c++]);var e;d>0&&OP_PUSHDATA1>d
?a(d):d==OP_PUSHDATA1?(e=this.buffer[c++],a(e)):d==OP_PUSHDATA2?(e=this.buffer
[c++]<<8|this.buffer[c++],a(e)):d==OP_PUSHDATA4?(e=this.buffer[c++]<<24|this.b
uffer[c++]<<16|this.buffer[c++]<<8|this.buffer[c++],a(e)):this.chunks.push(d)}
},Script.prototype.getOutType=function(){return this.chunks[this.chunks.length
-1]==OP_CHECKMULTISIG&&this.chunks[this.chunks.length-2]<=3?"Multisig":5==this
.chunks.length&&this.chunks[0]==OP_DUP&&this.chunks[1]==OP_HASH160&&this.chunk
s[3]==OP_EQUALVERIFY&&this.chunks[4]==OP_CHECKSIG?"Address":2==this.chunks.len
gth&&this.chunks[1]==OP_CHECKSIG?"Pubkey":"Strange"},Script.prototype.simpleOu
tHash=function(){switch(this.getOutType()){case"Address":return
this.chunks[2];case"Pubkey":return
Bitcoin.Util.sha256ripe160(this.chunks[0]);default:throw new
Error("Encountered non-standard scriptPubKey")}},Script.prototype.simpleOutPub
KeyHash=Script.prototype.simpleOutHash,Script.prototype.getInType=function(){r
eturn 1==this.chunks.length&&Bitcoin.Util.isArray(this.chunks[0])?"Pubkey":2==
this.chunks.length&&Bitcoin.Util.isArray(this.chunks[0])&&Bitcoin.Util.isArray
(this.chunks[1])?"Address":"Strange"},Script.prototype.simpleInPubKey=function
(){switch(this.getInType()){case"Address":return
this.chunks[1];case"Pubkey":throw new Error("Script does not contain
pubkey.");default:throw new Error("Encountered non-standard
scriptSig")}},Script.prototype.simpleInHash=function(){return Bitcoin.Util.sha
256ripe160(this.simpleInPubKey())},Script.prototype.simpleInPubKeyHash=Script.
prototype.simpleInHash,Script.prototype.writeOp=function(a){this.buffer.push(a
),this.chunks.push(a)},Script.prototype.writeBytes=function(a){a.length<OP_PUS
HDATA1?this.buffer.push(a.length):a.length<=255?(this.buffer.push(OP_PUSHDATA1
),this.buffer.push(a.length)):a.length<=65535?(this.buffer.push(OP_PUSHDATA2),
this.buffer.push(255&a.length),this.buffer.push(a.length>>>8&255)):(this.buffe
r.push(OP_PUSHDATA4),this.buffer.push(255&a.length),this.buffer.push(a.length>
>>8&255),this.buffer.push(a.length>>>16&255),this.buffer.push(a.length>>>24&25
5)),this.buffer=this.buffer.concat(a),this.chunks.push(a)},Script.createOutput
Script=function(a){var b=new Script;return b.writeOp(OP_DUP),b.writeOp(OP_HASH
160),b.writeBytes(a.hash),b.writeOp(OP_EQUALVERIFY),b.writeOp(OP_CHECKSIG),b},
Script.prototype.extractAddresses=function(a){switch(this.getOutType()){case"A
ddress":return a.push(new Address(this.chunks[2])),1;case"Pubkey":return
a.push(new
Address(Util.sha256ripe160(this.chunks[0]))),1;case"Multisig":for(var
b=1;b<this.chunks.length-2;++b)a.push(new
Address(Util.sha256ripe160(this.chunks[b])));return
this.chunks[0]-OP_1+1;default:throw new Error("Encountered non-standard
scriptPubKey")}},Script.createMultiSigOutputScript=function(a,b){var c=new
Bitcoin.Script;c.writeOp(OP_1+a-1);for(var
d=0;d<b.length;++d)c.writeBytes(b[d]);return c.writeOp(OP_1+b.length-1),c.writ
eOp(OP_CHECKMULTISIG),c},Script.createInputScript=function(a,b){var c=new
Script;return
c.writeBytes(a),c.writeBytes(b),c},Script.prototype.clone=function(){return
new Script(this.buffer)}}(),function(){var a=Bitcoin.Script,b=Bitcoin.Transact
ion=function(a){if(this.version=1,this.lock_time=0,this.ins=[],this.outs=[],th
is.timestamp=null,this.block=null,a){if(a.hash&&(this.hash=a.hash),a.version&&
(this.version=a.version),a.lock_time&&(this.lock_time=a.lock_time),a.ins&&a.in
s.length)for(var b=0;b<a.ins.length;b++)this.addInput(new
e(a.ins[b]));if(a.outs&&a.outs.length)for(var
b=0;b<a.outs.length;b++)this.addOutput(new f(a.outs[b]));a.timestamp&&(this.ti
mestamp=a.timestamp),a.block&&(this.block=a.block)}};b.objectify=function(a){f
or(var c=[],d=0;d<a.length;d++)c.push(new b(a[d]));return
c},b.prototype.addInput=function(a,b){arguments[0]instanceof
e?this.ins.push(arguments[0]):this.ins.push(new
e({outpoint:{hash:a.hash,index:b},script:new Bitcoin.Script,sequence:429496729
5}))},b.prototype.addOutput=function(b,c){if(arguments[0]instanceof
f)this.outs.push(arguments[0]);else{if(c instanceof
BigInteger)for(c=c.toByteArrayUnsigned().reverse();c.length<8;)c.push(0);else
Bitcoin.Util.isArray(c);this.outs.push(new f({value:c,script:a.createOutputScr
ipt(b)}))}},b.prototype.serialize=function(){var a=[];a=a.concat(Crypto.util.w
ordsToBytes([parseInt(this.version)]).reverse()),a=a.concat(Bitcoin.Util.numTo
VarInt(this.ins.length));for(var b=0;b<this.ins.length;b++){var c=this.ins[b];
a=a.concat(Crypto.util.base64ToBytes(c.outpoint.hash)),a=a.concat(Crypto.util.
wordsToBytes([parseInt(c.outpoint.index)]).reverse());var d=c.script.buffer;a=
a.concat(Bitcoin.Util.numToVarInt(d.length)),a=a.concat(d),a=a.concat(Crypto.u
til.wordsToBytes([parseInt(c.sequence)]).reverse())}a=a.concat(Bitcoin.Util.nu
mToVarInt(this.outs.length));for(var b=0;b<this.outs.length;b++){var
e=this.outs[b];a=a.concat(e.value);var d=e.script.buffer;a=a.concat(Bitcoin.Ut
il.numToVarInt(d.length)),a=a.concat(d)}return a=a.concat(Crypto.util.wordsToB
ytes([parseInt(this.lock_time)]).reverse())};var
c=2,d=80;b.prototype.hashTransactionForSignature=function(b,e,f){for(var
g=this.clone(),h=0;h<g.ins.length;h++)g.ins[h].script=new
a;if(g.ins[e].script=b,(31&f)==c){g.outs=[];for(var
h=0;h<g.ins.length;h++)h!=e&&(g.ins[h].sequence=0)}f&d&&(g.ins=[g.ins[e]]);var
i=g.serialize();i=i.concat(Crypto.util.wordsToBytes([parseInt(f)]).reverse());
var j=Crypto.SHA256(i,{asBytes:!0});return
Crypto.SHA256(j,{asBytes:!0})},b.prototype.getHash=function(){var
a=this.serialize();return Crypto.SHA256(Crypto.SHA256(a,{asBytes:!0}),{asBytes
:!0})},b.prototype.clone=function(){var a=new
b;a.version=this.version,a.lock_time=this.lock_time;for(var
c=0;c<this.ins.length;c++){var d=this.ins[c].clone();a.addInput(d)}for(var
c=0;c<this.outs.length;c++){var e=this.outs[c].clone();a.addOutput(e)}return
a},b.prototype.analyze=function(a){if(a instanceof Bitcoin.Wallet){for(var
b=!0,c=!0,d=null,e=null,f=null,g=this.outs.length-1;g>=0;g--){var h=this.outs[
g],i=h.script.simpleOutPubKeyHash();a.hasHash(i)?e=i:c=!1,d=i}for(var
g=this.ins.length-1;g>=0;g--){var j=this.ins[g];if(f=j.script.simpleInPubKeyHa
sh(),!a.hasHash(f)){b=!1;break}}var k=this.calcImpact(a),l={};return l.impact=
k,k.sign>0&&k.value.compareTo(BigInteger.ZERO)>0?(l.type="recv",l.addr=new
Bitcoin.Address(e)):b&&c?l.type="self":b?(l.type="sent",l.addr=new
Bitcoin.Address(d)):l.type="other",l}return
null},b.prototype.getDescription=function(a){var
b=this.analyze(a);if(!b)return"";switch(b.type){case"recv":return"Received
with "+b.addr;case"sent":return"Payment to "+b.addr;case"self":return"Payment
to yourself";case"other":default:return""}},b.prototype.getTotalOutValue=funct
ion(){for(var a=BigInteger.ZERO,b=0;b<this.outs.length;b++){var
c=this.outs[b];a=a.add(Bitcoin.Util.valueToBigInt(c.value))}return a},b.protot
ype.getTotalValue=b.prototype.getTotalOutValue,b.prototype.calcImpact=function
(a){if(a instanceof Bitcoin.Wallet){for(var
b=BigInteger.ZERO,c=0;c<this.outs.length;c++){var d=this.outs[c],e=Crypto.util
.bytesToBase64(d.script.simpleOutPubKeyHash());a.hasHash(e)&&(b=b.add(Bitcoin.
Util.valueToBigInt(d.value)))}for(var
f=BigInteger.ZERO,c=0;c<this.ins.length;c++){var g=this.ins[c],e=Crypto.util.b
ytesToBase64(g.script.simpleInPubKeyHash());if(a.hasHash(e)){var h=a.txIndex[g
.outpoint.hash];h&&(f=f.add(Bitcoin.Util.valueToBigInt(h.outs[g.outpoint.index
].value)))}}return b.compareTo(f)>=0?{sign:1,value:b.subtract(f)}:{sign:-1,val
ue:f.subtract(b)}}return BigInteger.ZERO};var e=Bitcoin.TransactionIn=function
(b){this.outpoint=b.outpoint,this.script=b.script instanceof a?b.script:new
a(b.script),this.sequence=b.sequence};e.prototype.clone=function(){var a=new e
({outpoint:{hash:this.outpoint.hash,index:this.outpoint.index},script:this.scr
ipt.clone(),sequence:this.sequence});return a};var
f=Bitcoin.TransactionOut=function(b){if(this.script=b.script instanceof
a?b.script:new
a(b.script),Bitcoin.Util.isArray(b.value))this.value=b.value;else
if("string"==typeof b.value){for(var c=new BigInteger(b.value,10).toString(16)
;c.length<16;)c="0"+c;this.value=Crypto.util.hexToBytes(c)}};f.prototype.clone
=function(){var a=new
f({script:this.script.clone(),value:this.value.slice(0)});return
a}}(),Bitcoin.Wallet=function(){var a=Bitcoin.Script,b=Bitcoin.TransactionIn,c
=Bitcoin.TransactionOut,d=function(){var a=[];this.addressHashes=[],this.txInd
ex={},this.unspentOuts=[],this.addressPointer=0,this.addKey=function(b,c){b
instanceof Bitcoin.ECKey||(b=new
Bitcoin.ECKey(b)),a.push(b),c&&("string"==typeof c&&(c=Crypto.util.base64ToByt
es(c)),b.setPub(c)),this.addressHashes.push(b.getBitcoinAddress().getHashBase6
4())},this.addKeys=function(a,b){"string"==typeof
a&&(a=a.split(",")),"string"==typeof b&&(b=b.split(","));var c;if(Array.isArra
y(b)&&a.length==b.length)for(c=0;c<a.length;c++)this.addKey(a[c],b[c]);else
for(c=0;c<a.length;c++)this.addKey(a[c])},this.getKeys=function(){for(var
b=[],c=0;c<a.length;c++)b.push(a[c].toString("base64"));return
b},this.getPubKeys=function(){for(var b=[],c=0;c<a.length;c++)b.push(Crypto.ut
il.bytesToBase64(a[c].getPub()));return
b},this.clear=function(){a=[]},this.getLength=function(){return
a.length},this.getAllAddresses=function(){for(var
b=[],c=0;c<a.length;c++)b.push(a[c].getBitcoinAddress());return
b},this.getCurAddress=function(){return a[this.addressPointer]?a[this.addressP
ointer].getBitcoinAddress():null},this.getNextAddress=function(){return this.a
ddressPointer++,a[this.addressPointer]||this.generateAddress(),a[this.addressP
ointer].getBitcoinAddress()},this.signWithKey=function(b,c){b=Crypto.util.byte
sToBase64(b);for(var
d=0;d<this.addressHashes.length;d++)if(this.addressHashes[d]==b)return
a[d].sign(c);throw new Error("Missing key for signature")},this.getPubKeyFromH
ash=function(b){b=Crypto.util.bytesToBase64(b);for(var
c=0;c<this.addressHashes.length;c++)if(this.addressHashes[c]==b)return
a[c].getPub();throw new Error("Hash unknown")}};return
d.prototype.generateAddress=function(){this.addKey(new
Bitcoin.ECKey)},d.prototype.process=function(a){if(!this.txIndex[a.hash]){var
d,e,f;for(d=0;d<a.outs.length;d++){var g=new c(a.outs[d]);for(f=Crypto.util.by
tesToBase64(g.script.simpleOutPubKeyHash()),e=0;e<this.addressHashes.length;e+
+)if(this.addressHashes[e]===f){this.unspentOuts.push({tx:a,index:d,out:g});br
eak}}for(d=0;d<a.ins.length;d++){var h=new b(a.ins[d]),i=h.script.simpleInPubK
ey();for(f=Crypto.util.bytesToBase64(Bitcoin.Util.sha256ripe160(i)),e=0;e<this
.addressHashes.length;e++)if(this.addressHashes[e]===f){for(var j=0;j<this.uns
pentOuts.length;j++)h.outpoint.hash==this.unspentOuts[j].tx.hash&&h.outpoint.i
ndex==this.unspentOuts[j].index&&this.unspentOuts.splice(j,1);break}}this.txIn
dex[a.hash]=a}},d.prototype.getBalance=function(){for(var
a=BigInteger.valueOf(0),b=0;b<this.unspentOuts.length;b++){var
c=this.unspentOuts[b].out;a=a.add(Bitcoin.Util.valueToBigInt(c.value))}return
a},d.prototype.createSend=function(b,c,d){var e,f=[],g=c.add(d),h=BigInteger.Z
ERO;for(e=0;e<this.unspentOuts.length&&(f.push(this.unspentOuts[e]),h=h.add(Bi
tcoin.Util.valueToBigInt(this.unspentOuts[e].out.value)),!(h.compareTo(g)>=0))
;e++);if(h.compareTo(g)<0)throw new Error("Insufficient funds.");var
i=h.subtract(g),j=new Bitcoin.Transaction;for(e=0;e<f.length;e++)j.addInput(f[
e].tx,f[e].index);j.addOutput(b,c),i.compareTo(BigInteger.ZERO)>0&&j.addOutput
(this.getNextAddress(),i);var k=1;for(e=0;e<j.ins.length;e++){var l=j.hashTran
sactionForSignature(f[e].out.script,e,k),m=f[e].out.script.simpleOutPubKeyHash
(),n=this.signWithKey(m,l);n.push(parseInt(k,10)),j.ins[e].script=a.createInpu
tScript(n,this.getPubKeyFromHash(m))}return j},d.prototype.clearTransactions=f
unction(){this.txIndex={},this.unspentOuts=[]},d.prototype.hasHash=function(a)
{Bitcoin.Util.isArray(a)&&(a=Crypto.util.bytesToBase64(a));for(var b=0;b<this.
addressHashes.length;b++)if(this.addressHashes[b]===a)return!0;return!1},d}();
var TransactionDatabase=function(){this.txs=[],this.txIndex={}};return EventEm
itter.augment(TransactionDatabase.prototype),TransactionDatabase.prototype.add
Transaction=function(a){this.addTransactionNoUpdate(a),$(this).trigger("update
")},TransactionDatabase.prototype.addTransactionNoUpdate=function(a){this.txIn
dex[a.hash]||(this.txs.push(new Bitcoin.Transaction(a)),this.txIndex[a.hash]=a
)},TransactionDatabase.prototype.removeTransaction=function(a){this.removeTran
sactionNoUpdate(a),$(this).trigger("update")},TransactionDatabase.prototype.re
moveTransactionNoUpdate=function(a){var b=this.txIndex[a];if(b){for(var c=0,d=
this.txs.length;d>c;c++)if(this.txs[c].hash==a){this.txs.splice(c,1);break}del
ete this.txIndex[a]}},TransactionDatabase.prototype.loadTransactions=function(
a){for(var b=0;b<a.length;b++)this.addTransactionNoUpdate(a[b]);$(this).trigge
r("update")},TransactionDatabase.prototype.getTransactions=function(){return t
his.txs},TransactionDatabase.prototype.clear=function(){this.txs=[],this.txInd
ex={},$(this).trigger("update")},window.BigInteger=BigInteger,Bitcoin}),define
("keyUtilsBrowser",["classtool","bitcoinjs"],function(a,b){function c(){var
a=function(){};return a.generateSin=function(){throw new Error("Not
implemented")},a.encrypt=function(a,b){return
b},a.decrypt=function(a,b){return b},a.sign=function(a,c){var
d=BigInteger.fromByteArrayUnsigned(Crypto.util.hexToBytes(c)),e=new
b.ECKey(d),f=Crypto.SHA256(a,{asBytes:!0});return
Crypto.util.bytesToHex(e.sign(f))},a}return
a.defineClass(c)}),"undefined"!=typeof
module?module.defineClass(sIframeBackend):"undefined"!=typeof
define&&define("iframeBackend",["classtool"],function(a){return
a.defineClass(sIframeBackend)}),"undefined"!=typeof
module?module.defineClass(sBackend):"undefined"!=typeof
define&&define("backend",["classtool","iframeBackend"],function(a){return
a.defineClass(sBackend)}),"undefined"!=typeof
module?module.defineClass(sBitPayApi):"undefined"!=typeof
define&&define("bitpayApi",["classtool","backend"],function(a){return a.define
Class(sBitPayApi)}),define("bitpayWeb",["classtool","keyUtilsBrowser","bitpayA
pi"],function(a,b){function c(a){b=b.class();var c=a.BitPayApi||require("./bit
payApi").createClass({KeyUtils:b}),d=function(a){this.uri=a,this.loadSin(),thi
s.doneInit=!1};return d.prototype.init=function(a){var
b=this;if(!b.privkey)throw new Error("Private key must be decrypted
first");b.api=new c(b.uri),b.api.setSin(b.sin,b.pubkey,b.privkey),b.api.init(f
unction(c,d){b.doneInit=!0,a(c,d)})},d.prototype.hasSin=function(){return this
.sin&&this.pubkey&&this.encryptedPrivkey},d.prototype.getSin=function(){return
{sin:this.sin,pubkey:this.pubkey,encryptedPrivkey:this.encryptedPrivkey,privke
y:this.privkey}},d.prototype.loadSin=function(){this.sin=localStorage.sin,this
.pubkey=localStorage.pubkey,this.encryptedPrivkey=localStorage.encryptedPrivke
y},d.prototype.generateSin=function(a){var c=b.generateSin();this.sin=c.sin,th
is.pubkey=c.pub,this.privkey=c.priv,this.encryptedPrivkey=b.encrypt(a,this.pri
vkey),this.saveSin()},d.prototype.decryptPrivateKey=function(a){if(!this.encry
ptedPrivkey)throw new Error("No encrypted private key loaded");var c=b.decrypt
(a,this.encryptedPrivkey);this.privkey=c},d.prototype.importSin=function(a,c,d
,e){this.sin=a,this.pubkey=c,this.privkey=d,this.encryptedPrivkey=b.encrypt(e,
this.privkey),this.saveSin()},d.prototype.saveSin=function(){localStorage.sin=
this.sin,localStorage.pubkey=this.pubkey,localStorage.encryptedPrivkey=this.en
cryptedPrivkey},d.prototype.apiCall=function(a,b,c,d){var
e=this;if(!e.doneInit)throw new Error("Must initialize before calling apiCall"
);e.api.apiCall(a,b,c,function(a,b){d(a,b)})},d.prototype.getFacade=function(a
){return this.api.getFacade(a)},d.prototype.getToken=function(a,b){this.apiCal
l(null,"getTokens",{},function(c,d){if(c)return b(c);for(var
e=0;e<d.length;e++)for(var f in d[e])if(f==a)return b(null,d[e][f]);return
b(null)})},d}return a.defineClass(c)}),"undefined"!=typeof
module?module.defineClass(sFacade):"undefined"!=typeof
define&&define("facade",["classtool"],function(a){return
a.defineClass(sFacade)}),"undefined"!=typeof
module?module.defineClass(sPublic):"undefined"!=typeof
define&&define("facades/public",["classtool","facade"],function(a){return
a.defineClass(sPublic)}),"undefined"!=typeof
module?module.defineClass(sMerchant):"undefined"!=typeof
define&&define("facades/merchant",["classtool","facade"],function(a){return
a.defineClass(sMerchant)}),"undefined"!=typeof
module?module.defineClass(sSupport):"undefined"!=typeof
define&&define("facades/support",["classtool","facade"],function(a){return
a.defineClass(sSupport)}),"undefined"!=typeof
module?module.defineClass(sAccountSupport):"undefined"!=typeof define&&define(
"facades/support/account",["classtool","facade"],function(a){return
a.defineClass(sAccountSupport)}),"undefined"!=typeof
module?module.defineClass(sInvoiceSupport):"undefined"!=typeof define&&define(
"facades/support/invoice",["classtool","facade"],function(a){return
a.defineClass(sInvoiceSupport)}),"undefined"!=typeof
module?module.defineClass(sAccountApplicationSupport):"undefined"!=typeof defi
ne&&define("facades/support/accountApplication",["classtool","facade"],functio
n(a){return a.defineClass(sAccountApplicationSupport)}),"undefined"!=typeof
module?module.defineClass(sAffiliateManagement):"undefined"!=typeof define&&de
fine("facades/support/affiliate",["classtool","facade"],function(a){return
a.defineClass(sAffiliateManagement) }),"undefined"!=typeof
module?module.defineClass(sBadLoginSupport):"undefined"!=typeof define&&define
("facades/support/badLogin",["classtool","facade"],function(a){return
a.defineClass(sBadLoginSupport)}),"undefined"!=typeof
module?module.defineClass(sOrphanedTransactionSupport):"undefined"!=typeof def
ine&&define("facades/support/orphanedTransaction",["classtool","facade"],funct
ion(a){return a.defineClass(sOrphanedTransactionSupport)}),requirejs.config({p
aths:{bitcoinjs:"../vendor/bitcoinjs-min"}}),define("main",["bitpayWeb","facad
es/public","facades/merchant","facades/support","facades/support/account","fac
ades/support/invoice","facades/support/accountApplication","facades/support/af
filiate","facades/support/badLogin","facades/support/orphanedTransaction","fac
ades/support/affiliate"],function(a){var b=function(b){var
c=document.createElement("iframe");return c.id="bitpay-iframe",c.src=b,c.heigh
t=0,c.width=0,c.style.display="none",document.getElementsByTagName("body")[0].
appendChild(c),a.new("iframe://bitpay-iframe")};return
b}),require("main")});var mod;mod=angular.module("infinite-scroll",[]),mod.dir
ective("infiniteScroll",["$rootScope","$window","$timeout",function(a,b,c){ret
urn{link:function(d,e,f){var g,h,i,j;return b=angular.element(b),i=0,null!=f.i
nfiniteScrollDistance&&d.$watch(f.infiniteScrollDistance,function(a){return i=
parseInt(a,10)}),j=!0,g=!1,null!=f.infiniteScrollDisabled&&d.$watch(f.infinite
ScrollDisabled,function(a){return j=!a,j&&g?(g=!1,h()):void
0}),h=function(){var c,h,k,l;return l=b.height()+b.scrollTop(),c=e.offset().to
p+e.height(),h=c-l,k=h<=b.height()*i,k&&j?a.$$phase?d.$eval(f.infiniteScroll):
d.$apply(f.infiniteScroll):k?g=!0:void
0},b.on("scroll",h),d.$on("$destroy",function(){return
b.off("scroll",h)}),c(function(){return f.infiniteScrollImmediateCheck?d.$eval
(f.infiniteScrollImmediateCheck)?h():void
0:h()},0)}}}]),function(a,b){b.module("menume",["templates-app
","templates-common","menume.home","ui.state","ui.route","infinite-sc
roll","focus"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.
otherwise("/")}]).run(function(){}).controller("AppCtrl",["$scope","$location"
,"$anchorScroll",function(a,c,d){a.$on("$stateChangeSuccess",function(c,d){b.i
sDefined(d.data.pageTitle)&&(a.pageTitle=d.data.pageTitle+" | Bitcoin
Directory | BitPay")}),a.menuState="",a.activateMenu=function(){a.menuState=""
===a.menuState?"active":""},a.scrollTo=function(a){c.hash(a),d()},a.focusSearc
h=!1,a.focusOnSearch=function(){a.focusSearch=!0},a.groupFilter={},a.showGroup
=function(b){a.groupFilter={groups:b}},a.clearGroup=function(){a.groupFilter={
}}}]),b.module("menume.home",["ui.state","infinite-scroll"]).config([
"$stateProvider",function(a){a.state("home",{url:"/",views:{main:{controller:"
HomeCtrl",templateUrl:"home/home.tpl.html"}},data:{pageTitle:"Featured"}})}]).
controller("HomeCtrl",["$scope","$http",function(a,b){a.profiles=[],a.showingP
rofiles=[],b.get("directory.json").success(function(b){a.profiles=b.entries,a.
showingProfiles=a.profiles}),a.hasThumbnail=function(a){return"undefined"!=typ
eof a?"undefined"!=typeof a.thumb:!1},a.openProfile=-1,a.clickProfile=function
(b){b!=a.openProfile&&(a.openProfile=b)},a.closeProfile=function(){a.openProfi
le=-1}}]),b.module("focus",[]).directive("focus",["$timeout","$parse",function
(a){return{restrict:"A",link:function(b,c,d){b.$watch(d.focus,function(a){a&&c
[0].focus()}),c.bind("blur",function(){a(function(){b.$apply(d.focus+"=false")
},0)}),c.bind("focus",function(){a(function(){b.$apply(d.focus+"=true")},0)})}
}}]),b.module("templates-app",["home/home.tpl.html"]),b.module("home/home.tpl.
html",[]).run(["$templateCache",function(a){a.put("home/home.tpl.html",'<a
id="top"></a>\n\n<div class="wrapper center">\n  <a
href="http://BitPay.com/"><img class="logo" src="/assets/img/logo.svg"
onload="this.src=\'/assets/img/logo.svg\'" onerror="this.onerror=null;
this.src=\'/assets/img/logo.png\'" alt="BitPay"></a>\n  <h1 class="title">Over
12,000 businesses and charities <a href="https://BitPay.com/start">accept
bitcoin</a> with BitPay.</h1>\n  <h2 class="subtitle">Visit some of our
featured merchants.</h2>\n</div>\n\n<form class="pure-form">\n  <a
id="search"></a>\n  <input class="pure-input-1" type="text"
placeholder="Search..." id="search-input" ng-model="search"
focus="$parent.focusSearch"><br>\n</form>\n\n<div class="wrapper"> <!--
infinite-scroll="displayMoreProfiles()" infinite-scroll-distance="1" -->\n
<span ng-repeat="profile in showingProfiles | filter:hasThumbnail |
filter:groupFilter:true | filter:search">\n    <div class="profile" ng-
click="clickProfile($index)">\n      <img ng-src="{{profile.thumb}}" class
="profile-image">\n      <div class="profile-detail-wrapper">\n        <div
class="profile-title-wrapper">\n          <h1 class="profile-
title">{{profile.name}}</h1>\n        </div>\n      </div>\n    </div>\n
<div class="overlay-background" ng-show="openProfile == $index" ng-
click="closeProfile()"></div>\n    <div class="overlay-foreground" ng-
show="openProfile == $index">\n      <div class="more-info-wrapper">\n
<div class="more-info">\n          <a class="overlay-close" ng-
click="closeProfile()">x</a>\n          <h1 class="overlay-
title">{{profile.name}}</h1>\n\n          <a href="{{profile.url}}"
target="_blank" class="overlay-image"><img ng-src="{{profile.thumb}}"></a>\n\n
<p class="overlay-text">{{profile.desc}}</p>\n\n          <a
href="{{profile.url}}" class="pure-button" target="_blank">Website
&raquo;</a>\n\n          <!--<ul><li ng-repeat="product in
profile.products">{{product}}</li></ul>\n\n          <p>\n
{{profile.location.address1}}<br>\n          {{profile.location.address2}}\n
{{profile.location.city}}, {{profile.location.state}}
{{profile.location.zip}}\n          {{profile.location.country}}\n
</p>\n\n          <blockquote>{{profile.testimonial}}</blockquote>\n
-->\n          <div class="clear"></div>\n        </div>\n      </div>\n
</div>\n  </span>\n  <div class="clear"></div>\n  \n</div>\n')}]),b.module
("templates-common",[])}(window,window.angular);
