// Bobril.min.js
Array.prototype.map||(Array.prototype.map=function(e,t){var n,r,i=Object(this),l=i.length>>>0;for(n=Array(l),r=0;l>r;){var o,a;r in i&&(o=i[r],a=e.call(t,o,r,i),n[r]=a),r++}return n}),Object.create||(Object.create=function(e){function t(){}return t.prototype=e,new t}),b=function(e,t){function n(e){return t.createTextNode(e)}function r(e){return"object"==typeof e}function i(e){var t=U;return U=e,t}function l(e,t,n,i){if(!n)return void 0;var l,o,a,f,u;for(l in n)if(o=n[l],a=i[l],"value"!==l||H){if(a!==o)if(i[l]=o,"style"===l)if(r(o)){var c;if(r(a)){for(c in o){var s=o[c];a[c]!==s&&(t.style[c]=s)}for(c in a)c in o||(t.style[c]="")}else{a&&(t.style.cssText="");for(c in o)t.style[c]=o[c]}}else t.style.cssText=o;else H?"href"===l?t.setAttributeNS("http://www.w3.org/1999/xlink","href",o):"className"===l?t.setAttribute("class",o):t.setAttribute(l,o):"value"===l?(f=a,u=o):l in t&&"list"!==l&&"form"!==l?t[l]=o:t.setAttribute(l,o)}else f=a,u=o,i[l]=o;return void 0!==u&&U(t,e,u,f),i}function o(e,r){var i=e,o=H,a=V,u=i.component;return u&&(i.ctx={data:i.data||{}},u.init&&u.init(i.ctx,e)),""===e.tag?(i.element=n(i.content),i):"/"===e.tag?i:(V||"svg"===e.tag?(i.element=t.createElementNS("http://www.w3.org/2000/svg",e.tag),H=!0,V=!0):i.element=t.createElement(e.tag),f(i),u&&u.postInit&&u.postInit(i.ctx,e),i.attrs=l(i,i.element,i.attrs,{}),H=o,V=a,s(i,!1),i.parent=r,i)}function a(e){var t=typeof e;return"string"===t?{tag:"",content:e}:"boolean"===t?null:e}function f(e){var t=e.children,n=e.element;if(t){if(!L(t)){var r=typeof t;if("string"===r)return void(P?n.textContent=t:n.innerText=t);t=[t]}for(var i=0,l=t.length;l>i;){var f=t[i];if(L(f))t.splice.apply(t,[i,1].concat(f)),l=t.length;else if(f=a(f),null!=f){var u=t[i]=o(f,e);if("/"===u.tag){var c=n.lastChild;for(e.element.insertAdjacentHTML("beforeend",u.content),u.element=[],c=c?c.nextSibling:n.firstChild;c;)u.element.push(c),c=c.nextSibling}else n.appendChild(u.element);i++}else t.splice(i,1),l--}e.children=t}}function u(e){var t=e.children;if(L(t))for(var n=0,r=t.length;r>n;n++)u(t[n]);var i=e.component;i&&i.destroy&&i.destroy(e.ctx,e,e.element)}function c(e){u(e);var t=e.element;if(e.parent=null,L(t)){var n=t[0].parentNode;if(n)for(var r=0;r<t.length;r++)n.removeChild(t[r])}else{var i=t.parentNode;i&&i.removeChild(t)}}function s(e,t){var n=e.component;n&&n.postInitDom&&(q.push(t),F.push(e))}function p(e){if(null==e)return null;for(var n=t.body,r=[];e&&e!==n;)r.push(e),e=e.parentNode;if(!e)return null;for(var i=z;r.length;){for(var l=r.pop(),o=0,a=i.length;a>o;o++)if(i[o].element===l){if(0===r.length)return i[o];i=i[o].children,l=null;break}if(l)return null}return null}function v(e,n){var r=e.component,i=H,a=V;if(r){if(r.shouldChange&&!r.shouldChange(n.ctx,e,n))return n;n.ctx.data=e.data||{},n.component=r,r.init&&r.init(n.ctx,e,n)}var f;if("/"===e.tag){f=n.element,L(f)&&(f=f[0]);var u=f.previousSibling,p=!1,v=f.parentNode;f.insertAdjacentHTML||(f=v.insertBefore(t.createElement("i"),f),p=!0),f.insertAdjacentHTML("beforebegin",e.content),u=u?u.nextSibling:v.firstChild;for(var m=[];u!==f;)m.push(u),u=u.nextSibling;return e.element=m,p&&v.removeChild(f),c(n),e}if(e.tag===n.tag&&(V||!H)){if(""===e.tag)return n.content!==e.content&&(n.content=e.content,f=n.element,P?f.textContent=n.content:f.nodeValue=n.content),n;if("svg"===e.tag&&(H=!0,V=!0),!e.attrs&&!n.attrs||e.attrs&&n.attrs&&M(e.attrs).join()===M(n.attrs).join()&&e.attrs.id===n.attrs.id)return d(e,n),r&&r.postInit&&r.postInit(n.ctx,e,n),n.attrs&&(n.attrs=l(n,n.element,e.attrs,n.attrs)),H=i,V=a,s(n,!0),n;V=a,H=i}var y=o(e,n.parent),h=n.element.parentNode;return h&&h.insertBefore(y.element,n.element),c(n),y}function m(){for(var e=F.length,t=0;e>t;t++){var n;n=F[t],q[t]?n.component.postUpdateDom(n.ctx,n,n.element):n.component.postInitDom(n.ctx,n,n.element)}q=[],F=[]}function d(e,t){t.children=y(t.element,e.children,t.children,t)}function y(e,t,n,r){if(null==t&&(t=[]),!L(t)){var i=typeof t;if("string"===i&&!L(n))return t===n?n:(P?e.textContent=t:e.innerText=t,t);t=[t]}null==n&&(n=[]),L(n)||(e.removeChild(e.firstChild),n=[]);for(var l=t.length,f=n.length,u=0;l>u;){var s=t[u];L(s)?(t.splice.apply(t,[u,1].concat(s)),l=t.length):(s=a(s),null!=s?(t[u]=s,u++):t.splice(u,1))}var p=l,m=f;for(u=0,d=0;p>u&&m>d;){if(t[u].key!==n[d].key){for(;;)if(!(t[p-1].key===n[m-1].key&&(p--,m--,n[m]=v(t[p],n[m]),p>u&&m>d)))break;if(p>u&&m>d){if(t[u].key===n[m-1].key){e.insertBefore(n[m-1].element,n[d].element),n.splice(d,0,n[m-1]),n.splice(m,1),n[d]=v(t[u],n[d]),u++,d++;continue}if(t[p-1].key===n[d].key){e.insertBefore(n[d].element,m===f?null:n[m].element),n.splice(m,0,n[d]),n.splice(d,1),m--,p--,n[m]=v(t[p],n[m]);continue}}break}n[d]=v(t[u],n[d]),u++,d++}if(d===m){if(u===p)return n;for(;p>u;)n.splice(d,0,o(t[u],r)),d++,m++,f++,e.insertBefore(n[u].element,m===f?null:n[m].element),u++;return n}if(u===p){for(;m>d;)m--,c(n[m]),n.splice(m,1);return n}for(var d,y,h,g={},b={},k=u,x=d,w=0;m>d;d++)h=n[d],y=h.key,null!=y?g[y]=d:w--;for(var C=-w-w;p>u;u++)h=t[u],y=h.key,null!=y?b[y]=u:w++;C+=w;var A=0;u=k,d=x;for(var j;m>d&&p>u;)if(null!==n[d])if(j=n[d].key,null!=j){if(y=t[u].key,null==y){for(u++;p>u&&(y=t[u].key,null==y);)u++;if(null==y)break}var N=g[y];void 0!==N?j in b?d===N+A?(n[d]=v(t[u],n[d]),u++,d++):(n.splice(d,0,n[N+A]),A++,n[N+A]=null,e.insertBefore(n[d].element,n[d+1].element),n[d]=v(t[u],n[d]),d++,m++,f++,u++):(c(n[d]),n.splice(d,1),A--,m--,f--):(n.splice(d,0,o(t[u],r)),e.insertBefore(n[d].element,n[d+1].element),A++,u++,d++,m++,f++)}else d++;else n.splice(d,1),m--,f--,A--;for(;m>d;)null!==n[d]?null==n[d].key?d++:(c(n[d]),n.splice(d,1),m--,f--):(n.splice(d,1),m--,f--);for(;p>u;)y=t[u].key,null!=y&&(n.splice(d,0,o(t[u],r)),m++,f++,e.insertBefore(n[d].element,m===f?null:n[m].element),A++,d++),u++;if(!C)return n;for(C=C-Math.abs(w)>>1,u=k,d=x;p>u;)if(m>d&&(j=n[d].key,null!=j))d++;else if(y=t[u].key,m>u&&y===n[u].key){if(null!=y){u++;continue}n[u]=v(t[u],n[u]),C--,u++,d=u}else if(null==y)m>d?(e.insertBefore(n[d].element,n[u].element),n.splice(u,0,n[d]),n.splice(d+1,1),n[u]=v(t[u],n[u]),C--,u++,d++):(n.splice(u,0,o(t[u],r)),m++,f++,e.insertBefore(n[u].element,u+1===f?null:n[u+1].element),u++,d++);else{if(0===C&&0>w){for(;;)if(c(n[d]),n.splice(d,1),m--,f--,w++,null!=n[d].key)break;continue}for(;null==n[d].key;)d++;n.splice(u,0,n[d]),n.splice(d+1,1),e.insertBefore(n[u].element,n[u+1].element),u++,d=u}for(;m>u;)m--,c(n[m]),n.splice(m,1);return n}function h(t){if(G)J(t);else{var n=50/3+X-R();0>n&&(n=0),e.setTimeout(function(){X=R(),t(X-W)},n)}}function g(){Y||(Y=!0,h(A))}function b(e,t,n){var r=Q[e]||[];r.push({priority:t,callback:n}),Q[e]=r}function k(e,t,n,r){var i=K[e];if(i)for(var l=0;l<i.length&&!i[l](t,n,r);l++);}function x(t,n){function r(r){r=r||e.event;var i=r.target||r.srcElement||t,l=p(i);k(n,r,i,l)}"on"+n in e&&(t=e),t.addEventListener?t.addEventListener(n,r):t.attachEvent("on"+n,r)}function w(){if(!Z){Z=!0;for(var e=M(Q),n=0;n<e.length;n++){var r=e[n],i=Q[r];i=i.sort(function(e,t){return e.priority-t.priority}),K[r]=i.map(function(e){return e.callback})}Q=null;for(var l=t.body,o=0;o<e.length;o++)x(l,e[o])}}function C(e){z.length&&(z=y(t.body,[],z,null)),D=e,g()}function A(e){w(),$=e,Y=!1;var n=D();z=y(t.body,n,z,null),m()}function j(e,t,n){for(;e;){var r=e.component;if(r){var i=r[t];if(i&&i.call(r,e.ctx,n))return!0}e=e.parent}return!1}function N(e,t){var n=this;return function(){var r=e.apply(n,arguments);return r?r:t.apply(n,arguments)}}function B(e,t){var n=Object.create(e);for(var r in t)if(t.hasOwnProperty(r)){var i=t[r],l=e[r];n[r]="function"==typeof i&&l?N(l,i):i}return n}function E(e,t){var n=e.component;return n?(e.component=B(t,n),e):(e.component=t,e)}function T(e,t){var n=e.component;return n?(e.component=B(n,t),e):(e.component=t,e)}function S(e,t){if(null!=t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function O(e){var t=e.preventDefault;t?t.call(e):e.returnValue=!1}var D,I={}.toString,L=Array.isArray||function(e){return"[object Array]"===I.call(e)},M=Object.keys||function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},P="textContent"in n(""),H=!1,V=!1,q=[],F=[],U=function(e,t,n,r){n!==r&&(e.value=n)},z=[],G=!1,J=e.requestAnimationFrame;J&&J(function(e){e===+e&&(G=!0)});var K,Q,R=Date.now||function(){return(new Date).getTime()},W=R(),X=0,Y=!1;K={},Q={};var Z=!1,$=0;return{createNode:o,updateNode:v,updateChildren:y,callPostCallbacks:m,setSetValue:i,init:C,isArray:L,uptime:function(){return $},now:R,assign:S,invalidate:g,preventDefault:O,vmlNode:function(){return H=!0},deref:p,addEvent:b,bubble:j,preEnhance:E,postEnhance:T}}(window,document);

function bobrilBuildTree(nodes) {
  var children = [];
  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    if (n.children !== null) {
      children.push({tag: 'div', key: n.key, children: bobrilBuildTree(n.children)});
    } else {
      children.push({tag: 'span', key: n.key, children: n.key.toString()});
    }
  }
  return children;
}

function Benchmark(a, b, container) {
  this._a = a;
  this._b = b;
  this._container = container;
  this._cache = null;
}

Benchmark.prototype.setUp = function() {
};

Benchmark.prototype.tearDown = function() {
 this._cache=b.updateNode({tag:"", content:""}, this._cache);
 this._container.removeChild(this._cache.element);
};

Benchmark.prototype.render = function() {
  this._cache=b.createNode({tag:"div", children:bobrilBuildTree(this._a)}, null);
  this._container.appendChild(this._cache.element);
};

Benchmark.prototype.update = function() {
  this._cache=b.updateNode({tag:"div", children:bobrilBuildTree(this._b)}, this._cache);
};

module.exports = Benchmark;
