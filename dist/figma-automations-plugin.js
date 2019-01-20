!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self)["figma-automations-plugin"]=e()}(this,function(){"use strict";var t,e=(function(G){!function(t){var u,e=Object.prototype,s=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",n=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag",a=t.regeneratorRuntime;if(a)G.exports=a;else{(a=t.regeneratorRuntime=G.exports).wrap=m;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",g={},c={};c[o]=function(){return this};var l=Object.getPrototypeOf,d=l&&l(l(P([])));d&&d!==e&&s.call(d,o)&&(c=d);var y=L.prototype=b.prototype=Object.create(c);x.prototype=y.constructor=L,L.constructor=x,L[i]=x.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(y),t},a.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[n]=function(){return this},a.AsyncIterator=E,a.async=function(t,e,r,n){var o=new E(m(t,e,r,n));return a.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(y),y[i]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),g}}}function m(t,e,r,n){var i,a,c,u,o=e&&e.prototype instanceof b?e:b,s=Object.create(o.prototype),l=new O(n||[]);return s._invoke=(i=t,a=r,c=l,u=f,function(t,e){if(u===p)throw new Error("Generator is already running");if(u===v){if("throw"===t)throw e;return _()}for(c.method=t,c.arg=e;;){var r=c.delegate;if(r){var n=S(r,c);if(n){if(n===g)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===f)throw u=v,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=w(i,a,c);if("normal"===o.type){if(u=c.done?v:h,o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=v,c.method="throw",c.arg=o.arg)}}),s}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function x(){}function L(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(u){var e;this._invoke=function(r,n){function t(){return new Promise(function(t,e){!function e(t,r,n,o){var i=w(u[t],u,r);if("throw"!==i.type){var a=i.arg,c=a.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):Promise.resolve(c).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)})}o(i.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function S(t,e){var r=t.iterator[e.method];if(r===u){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=u,S(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=w(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,g;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=u,t.done=!0,t};return n.next=n}}return{next:_}}function _(){return{value:u,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())}(t={exports:{}},t.exports),t.exports),r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),n=r.regeneratorRuntime&&0<=Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime"),o=n&&r.regeneratorRuntime;r.regeneratorRuntime=void 0;var i=e;if(n)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}var h=i;var a=function(t){if(Array.isArray(t))return t};var c=function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r};var u=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var p=function(t,e){return a(t)||c(t,e)||u()};function s(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var l=function(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){s(n,e,r,o,i,"next",t)}function i(t){s(n,e,r,o,i,"throw",t)}o(void 0)})}};var f=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var g,d=function(t,e,r){return e&&v(t.prototype,e),r&&v(t,r),t},y=function(){function t(){f(this,t)}var r,e;return d(t,[{key:"getSelection",value:function(){var t=window.App;return Object.keys(t._state.mirror.sceneGraphSelection)}},{key:"createComponents",value:function(){this.process(this.getSelection(),"create-symbol")}},{key:"breakComponents",value:(e=l(h.mark(function t(){var e,r,n,o,i,a,c,u,s;return h.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e=window,r=e.App,o=!(n=!0),i=void 0,t.prev=4,a=this.getSelection().entries()[Symbol.iterator]();!(n=(c=a.next()).done);n=!0)u=p(c.value,2),u[0],s=u[1],r.sendMessage("clearSelection"),r.sendMessage("addToSelection",{nodeIds:[s]}),r.triggerAction("duplicate-in-place"),r.triggerAction("detach-instance"),r.triggerAction("select-next-sibling"),r.triggerAction("delete-selection");t.next=12;break;case 8:t.prev=8,t.t0=t.catch(4),o=!0,i=t.t0;case 12:t.prev=12,t.prev=13,n||null==a.return||a.return();case 15:if(t.prev=15,o)throw i;t.next=18;break;case 18:return t.finish(15);case 19:return t.finish(12);case 20:case"end":return t.stop()}},t,this,[[4,8,12,20],[13,,15,19]])})),function(){return e.apply(this,arguments)})},{key:"createGroups",value:function(){this.process(this.getSelection(),"group-selection")}},{key:"copyAsPng",value:function(){App.triggerAction("copy-as-png")}},{key:"showGuids",value:function(){App.triggerAction("toggle-show-guids")}},{key:"process",value:(r=l(h.mark(function t(e,r){var n,o,i,a,c,u,s,l,f;return h.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n=window,o=n.App,a=!(i=!0),c=void 0,t.prev=4,u=e.entries()[Symbol.iterator]();!(i=(s=u.next()).done);i=!0)l=p(s.value,2),l[0],f=l[1],o.sendMessage("clearSelection"),o.sendMessage("addToSelection",{nodeIds:[f]}),o.triggerAction(r),o.sendMessage("clearSelection");t.next=12;break;case 8:t.prev=8,t.t0=t.catch(4),a=!0,c=t.t0;case 12:t.prev=12,t.prev=13,i||null==u.return||u.return();case 15:if(t.prev=15,a)throw c;t.next=18;break;case 18:return t.finish(15);case 19:return t.finish(12);case 20:case"end":return t.stop()}},t,this,[[4,8,12,20],[13,,15,19]])})),function(t,e){return r.apply(this,arguments)})}]),t}(),m=new y,w=["Automate",function(){},null,null,[{itemLabel:"Create Components",triggerFunction:(window.automateFigmaPlugin=m).createComponents.bind(m),condition:null,shortcut:null},{itemLabel:"Break Components",triggerFunction:m.breakComponents.bind(m),condition:null,shortcut:null},{itemLabel:"Create Groups",triggerFunction:m.createGroups.bind(m),condition:null,shortcut:null},{itemLabel:"Copy as Image",triggerFunction:m.copyAsPng.bind(m),condition:null,shortcut:null},{itemLabel:"Show GUIDs",triggerFunction:m.showGuids.bind(m),condition:null,shortcut:null}]];return(g=window.figmaPlugin).createPluginsMenuItem.apply(g,w),y});
