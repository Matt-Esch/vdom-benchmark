// Bobril.min.js
Array.prototype.map||(Array.prototype.map=function(e,t){var n,r,i,l=Object(this),o=l.length>>>0;for(arguments.length>1&&(n=t),r=Array(o),i=0;o>i;){var a,f;i in l&&(a=l[i],f=e.call(n,a,i,l),r[i]=f),i++}return r}),Object.create||(Object.create=function(e){function t(){}return t.prototype=e,new t}),b=function(e,t,n){function r(e,t,r,i){if(!r)return n;for(var l in r){var o=r[l],a=i[l];if(a===n||a!==o)if(i[l]=o,"style"===l){var f;if(a){for(f in o){var c=o[f];a[f]!==c&&(t.style[f]=c)}for(f in a)f in o||(t.style[f]="")}else for(f in o)t.style[f]=o[f]}else if(O)"href"===l?t.setAttributeNS("http://www.w3.org/1999/xlink","href",o):"className"===l?t.setAttribute("class",o):t.setAttribute(l,o);else if("value"===l&&l in t){var u=t[l];a===n&&(e.ctx.b$value=o),o!==u&&(a===n||u===a?t[l]=o:b("input",null,t,e))}else l in t&&"list"!==l&&"form"!==l?t[l]=o:t.setAttribute(l,o)}return i}function i(e){var n=e,i=O,l=L,a=n.component;return a&&(n.ctx={data:n.data||{}},a.init&&a.init(n.ctx,e)),""===e.tag?(n.element=t.createTextNode(n.content),n):"/"===e.tag?n:(L||"svg"===e.tag?(n.element=t.createElementNS("http://www.w3.org/2000/svg",e.tag),O=!0,L=!0):n.element=t.createElement(e.tag),o(n),n.attrs=r(n,n.element,n.attrs,{}),O=i,L=l,c(n),n)}function l(e){var t=typeof e;return"string"===t?{tag:"",content:e}:"boolean"===t?null:e}function o(e){var r=e.children,o=e.element;if(r){if(!D(r)){var a=typeof r;if("string"===a)return"textContent"in o?o.textContent=r:o.appendChild(t.createTextNode(r)),n;r=[r]}for(var f=0,c=r.length;c>f;){var u=r[f];if(D(u))r.splice.apply(r,[f,1].concat(u)),c=r.length;else if(u=l(u),null!=u){var s=r[f]=i(u);if("/"===s.tag){var p=o.lastChild;for(e.element.insertAdjacentHTML("beforeend",s.content),s.element=[],p=p?p.nextSibling:o.firstChild;p;)p[E]=s,s.element.push(p),p=p.nextSibling}else o.appendChild(s.element);f++}else r.splice(f,1),c--}e.children=r}}function a(e){var t=e.children;if(D(t))for(var n=0,r=t.length;r>n;n++)a(t[n]);var i=e.component;if(i&&i.destroy&&i.destroy(e.ctx,e,e.element),""!==e.tag){var l=e.element;if(D(l))for(var o=0;o<l.length;o++)l[o][E]=null;else l[E]=null}}function f(e){a(e);var t=e.element;if(D(t)){var n=t[0].parentNode;if(n)for(var r=0;r<t.length;r++)n.removeChild(t[r])}else{var i=t.parentNode;i&&i.removeChild(t)}}function c(e){e.element[E]=e;var t=e.component;t&&t.postInitDom&&(M.push(!1),H.push(e))}function u(e){var t=e.component;t&&t.postUpdateDom&&(M.push(!0),H.push(e))}function s(e){return e[E]}function p(e,n){var l=e.component,o=O,a=L;if(l){if(l.shouldChange&&!l.shouldChange(n.ctx,e,n))return n;n.ctx.data=e.data||{},n.component=l,l.init&&l.init(n.ctx,e,n)}if("/"===e.tag){var c=n.element;D(c)&&(c=c[0]);var s=c.previousSibling,p=!1,v=c.parentNode;c.insertAdjacentHTML||(c=v.insertBefore(t.createElement("i"),c),p=!0),c.insertAdjacentHTML("beforebegin",e.content),s=s?s.nextSibling:v.firstChild;for(var d=[];s!==c;)s[E]=e,d.push(s),s=s.nextSibling;return e.element=d,p&&v.removeChild(c),f(n),e}if(e.tag===n.tag&&(L||!O))if(""===e.tag){if(n.content===e.content)return n;if(n.content=e.content,"textContent"in n.element)return n.element.textContent=n.content,n}else{if("svg"===e.tag&&(O=!0,L=!0),!e.attrs&&!n.attrs||e.attrs&&n.attrs&&S(e.attrs).join()===S(n.attrs).join()&&e.attrs.id===n.attrs.id)return m(e,n),n.attrs&&(n.attrs=r(n,n.element,e.attrs,n.attrs)),O=o,L=a,u(n),n;L=a,O=o}var h=i(e),y=n.element.parentNode;return y&&y.insertBefore(h.element,n.element),f(n),h}function v(){for(var e=H.length,t=0;e>t;t++){var n;n=H[t],M[t]?n.component.postUpdateDom(n.ctx,n,n.element):n.component.postInitDom(n.ctx,n,n.element)}M=[],H=[]}function m(e,t){t.children=d(t.element,e.children,t.children)}function d(e,r,o){if(null==r&&(r=[]),!D(r)){var a=typeof r;if("string"===a&&!D(o))return r===o?o:("textContent"in e?e.textContent=r:(e.innerHTML="",e.appendChild(t.createTextNode(r))),r);r=[r]}null==o&&(o=[]),D(o)||(e.removeChild(e.firstChild),o=[]);for(var c=r.length,u=o.length,s=0;c>s;){var v=r[s];D(v)?(r.splice.apply(r,[s,1].concat(v)),c=r.length):(v=l(v),null!=v?(r[s]=v,s++):r.splice(s,1))}var m=c,d=u;for(s=0,h=0;m>s&&d>h;){if(r[s].key!==o[h].key){for(;;)if(!(r[m-1].key===o[d-1].key&&(m--,d--,o[d]=p(r[m],o[d]),m>s&&d>h)))break;if(m>s&&d>h){if(r[s].key===o[d-1].key){e.insertBefore(o[d-1].element,o[h].element),o.splice(h,0,o[d-1]),o.splice(d,1),o[h]=p(r[s],o[h]),s++,h++;continue}if(r[m-1].key===o[h].key){e.insertBefore(o[h].element,d===u?null:o[d].element),o.splice(d,0,o[h]),o.splice(h,1),d--,m--,o[d]=p(r[m],o[d]);continue}}break}o[h]=p(r[s],o[h]),s++,h++}if(h===d){if(s===m)return o;for(;m>s;)o.splice(h,0,i(r[s])),h++,d++,u++,e.insertBefore(o[s].element,d===u?null:o[d].element),s++;return o}if(s===m){for(;d>h;)d--,f(o[d]),o.splice(d,1);return o}for(var h,y,g,b={},k={},x=s,C=h,w=0;d>h;h++)g=o[h],y=g.key,null!=y?b[y]=h:w--;for(var A=-w-w;m>s;s++)g=r[s],y=g.key,null!=y?k[y]=s:w++;A+=w;var N=0;s=x,h=C;for(var j;d>h&&m>s;)if(null!==o[h])if(j=o[h].key,null!=j){if(y=r[s].key,null==y){for(s++;m>s&&(y=r[s].key,null==y);)s++;if(null==y)break}var B=b[y];B!==n?j in k?h===B+N?(o[h]=p(r[s],o[h]),s++,h++):(o.splice(h,0,o[B+N]),N++,o[B+N]=null,e.insertBefore(o[h].element,o[h+1].element),o[h]=p(r[s],o[h]),h++,d++,u++,s++):(f(o[h]),o.splice(h,1),N--,d--,u--):(o.splice(h,0,i(r[s])),e.insertBefore(o[h].element,o[h+1].element),N++,s++,h++,d++,u++)}else h++;else o.splice(h,1),d--,u--,N--;for(;d>h;)null!==o[h]?null==o[h].key?h++:(f(o[h]),o.splice(h,1),d--,u--):(o.splice(h,1),d--,u--);for(;m>s;)y=r[s].key,null!=y&&(o.splice(h,0,i(r[s])),d++,u++,e.insertBefore(o[h].element,d===u?null:o[d].element),N++,h++),s++;if(!A)return o;for(A=A-Math.abs(w)>>1,s=x,h=C;m>s;)if(d>h&&(j=o[h].key,null!=j))h++;else if(y=r[s].key,d>s&&y===o[s].key){if(null!=y){s++;continue}o[s]=p(r[s],o[s]),A--,s++,h=s}else if(null==y)d>h?(e.insertBefore(o[h].element,o[s].element),o.splice(s,0,o[h]),o.splice(h+1,1),o[s]=p(r[s],o[s]),A--,s++,h++):(o.splice(s,0,i(r[s])),d++,u++,e.insertBefore(o[s].element,s+1===u?null:o[s+1].element),s++,h++);else{if(0===A&&0>w){for(;;)if(f(o[h]),o.splice(h,1),d--,u--,w++,null!=o[h].key)break;continue}for(;null==o[h].key;)h++;o.splice(s,0,o[h]),o.splice(h+1,1),e.insertBefore(o[s].element,o[s+1].element),s++,h=s}for(;d>s;)d--,f(o[d]),o.splice(d,1);return o}function h(t){if(P)I(t);else{var n=50/3+z-F();0>n&&(n=0),e.setTimeout(function(){z=F(),t(z-V)},n)}}function y(){J||(J=!0,h(w))}function g(e,t,n){var r=q[e]||[];r.push({priority:t,callback:n}),q[e]=r}function b(e,t,n,r){var i=$[e];if(i)for(var l=0;l<i.length&&!i[l](t,n,r);l++);}function k(t,n){function r(t){t=t||e.event;var r=t.target||t.srcElement,i=s(r);b(n,t,r,i)}t.addEventListener?t.addEventListener(n,r):t.attachEvent("on"+n,r)}function x(){if(!K){K=!0;for(var e=S(q),n=0;n<e.length;n++){var r=e[n],i=q[r];i=i.sort(function(e,t){return e.priority-t.priority}),$[r]=i.map(function(e){return e.callback})}q=null;for(var l=t.body,o=0;o<e.length;o++)k(l,e[o])}}function C(e){U=e,y()}function w(e){x(),Q=e,J=!1;var n=U();G=d(t.body,n,G),v()}function A(e,t,n){for(;e;){var r=e.component;if(r){var i=r[t];if(i&&i.call(r,e.ctx,n))return!0}var l=e.element.parentNode;e=l?s(l):null}return!1}function N(e,t){var n=this;return function(){var r=e.apply(n,arguments);return r?r:t.apply(n,arguments)}}function j(e,t){var n=e.component;if(!n)return e.component=t,e;var r,i=t.id;if(i&&(i="b$a"+i,r=n[i]))return e.component=r,e;r=Object.create(n);for(var l in t)if(t.hasOwnProperty(l)&&"id"!==l){var o=t[l],a=n[l];r[l]="function"==typeof o&&a?N(a,o):o}return i&&(n[i]=r),e.component=r,e}function B(e){var t=e.preventDefault;t?t.call(e):e.returnValue=!1}var E="data-bobril",T={}.toString,D=Array.isArray||function(e){return"[object Array]"===T.call(e)},S=Object.keys||function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},O=!1,L=!1,M=[],H=[],P=!1,I=e.requestAnimationFrame;I&&I(function(e){e===+e&&(P=!0)});var U,$,q,F=Date.now||function(){return(new Date).getTime()},V=F(),z=0,G=[],J=!1;$={},q={};var K=!1,Q=0;return{createNode:i,updateNode:p,updateChildren:d,callPostCallbacks:v,init:C,isArray:D,uptime:function(){return Q},now:F,invalidate:y,preventDefault:B,vmlNode:function(){return O=!0},deref:s,addEvent:g,bubble:A,postEnhance:j}}(window,document);

// Node {
//   int key;
//   bool dirty;
//   List<Node> children;
// }
//
// When Node doesn't have any children, it should be rendered
// as a LeafComponent, otherwise it should be rendered as a
// NodeComponent.

var Node = require('../init').Node;

var LeafComponent = {
  shouldChange: function(ctx, me, oldMe) {
    return me.data.dirty === true;
  },

  init: function(ctx, me) {
    me.tag="span";
	me.children=""+ctx.data.key;
  }
};

var NodeComponent = {
  shouldChange: function(ctx, me, oldMe) {
    return me.data.dirty === true;
  },

  init: function(ctx, me) {
    var result = [];
    var node = ctx.data;
    var children = node.children;
    if (children !== null) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (c.children === null) {
          result.push({ component: LeafComponent, key: c.key, data: c });
        } else {
          result.push({ component: NodeComponent, key: c.key, data: c });
        }
      }
    }
    me.tag="div";
	me.children=result;
  }
};

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
  this._cache=b.createNode({component: NodeComponent, data: new Node(0, false, this._a)}, null);
  this._container.appendChild(this._cache.element);
};

Benchmark.prototype.update = function() {
  this._cache=b.updateNode({component: NodeComponent, data: new Node(0, true, this._b)}, this._cache);
};

module.exports = Benchmark;
