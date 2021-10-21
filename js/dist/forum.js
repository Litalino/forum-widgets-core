module.exports=function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=13)}([function(t,n,e){"use strict";function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n)}e.d(n,"a",(function(){return o}))},function(t,n,e){"use strict";function i(t){return t.slice(0).sort((function(t,n){var e=t.position,i=n.position;return e>i?1:e<i?-1:0}))}e.d(n,"a",(function(){return i}))},function(t,n){t.exports=flarum.core.compat["common/Component"]},function(t,n,e){"use strict";function i(){return(i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}e.d(n,"a",(function(){return i}))},function(t,n){t.exports=flarum.core.compat["common/utils/classList"]},function(t,n){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e(3),o=function(){function t(){this.widgets=[],this.states={},this.config={}}var n=t.prototype;return n.add=function(t,n){t.extension=n,t.id=n+":"+t.key,this.widgets.push(t),this.states[t.id]={}},n.getbyId=function(t){return this.getWidgetInstances().find((function(n){return n.id===t}))||null},n.getWidgetInstances=function(){var t=this,n=this.config.disabled||[],e=(this.config.instances||[]).map((function(n){return Object(i.a)({},t.widgets.find((function(t){return t.id===n.id}))||{},n)}));return this.widgets.forEach((function(t){e.find((function(n){return n.id===t.id}))||e.push(t)})),e.filter((function(t){return!n.includes(t.id)}))},n.get=function(t,n){var e=this;return void 0===n&&(n=!1),this.getWidgetInstances().filter((function(n){return n.placement===t})).filter((function(t){return n||("function"==typeof t.isDisabled?!t.isDisabled():!t.isDisabled)})).filter((function(t){return(t.extension||t.id.split(":")[0])in flarum.extensions})).map((function(t){return Object(i.a)({},t,{extension:t.extension||t.id.split(":")[0],state:e.states[t.id]})}))},n.setConfig=function(t){this.config=t},t}()},function(t,n){t.exports=flarum.core},function(t,n,e){"use strict";var i=function(){function t(){this.widgets=[]}var n=t.prototype;return n.add=function(t){return this.widgets.push(t),this},n.extend=function(t,n){this.widgets.map((function(e){t.widgets.add(e,n)}))},t}(),o=e(0),r=e(2),c=e.n(r),s=e(4),u=e.n(s),a=e(5),f=e.n(a),d=function(t){function n(){return t.apply(this,arguments)||this}Object(o.a)(n,t);var e=n.prototype;return e.view=function(){return m("div",{className:u()(["AfruxWidgets-Widget",this.className()])},this.header(),m("div",{className:"AfruxWidgets-Widget-content"},this.content()))},e.header=function(){var t=this.icon(),n=this.title();return n?m("div",{className:"AfruxWidgets-Widget-title"},t?m("span",{className:"AfruxWidgets-Widget-title-icon"},f()(t)):null,m("span",{className:"AfruxWidgets-Widget-title-label"},n),m("div",{className:"AfruxWidgets-Widget-title-desc"},this.description())):null},e.className=function(){return""},e.title=function(){return""},e.description=function(){return""},e.icon=function(){return""},e.content=function(){return""},n}(c.a);n.a={"extensions/afrux-forum-widgets-core/common/extend/Widgets":i,"extensions/afrux-forum-widgets-core/common/components/Widget":d}},function(t,n){t.exports=flarum.core.compat["common/extend"]},function(t,n){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,n){t.exports=flarum.core.compat["common/utils/Stream"]},,function(t,n,e){"use strict";e.r(n);var i=e(9),o=e(10),r=e.n(o),c=e(6),s=e(0),u=e(2),a=e.n(u),f=e(1),d=function(t){function n(){return t.apply(this,arguments)||this}return Object(s.a)(n,t),n.prototype.view=function(){return m("div",{className:"AfruxWidgets-sideNavAlt AfruxWidgets-WidgetSection"},Object(f.a)(app.widgets.get("end")).map((function(t){return t.component.component({state:t.state})})))},n}(a.a),p=function(t){function n(){return t.apply(this,arguments)||this}return Object(s.a)(n,t),n.prototype.view=function(){return"index"!==app.current.data.routeName?null:m("div",{className:"AfruxWidgets-startTop AfruxWidgets-WidgetSection"},Object(f.a)(app.widgets.get("start_top")).map((function(t){return t.component.component({state:t.state})})))},n}(a.a),l=function(t){function n(){return t.apply(this,arguments)||this}return Object(s.a)(n,t),n.prototype.view=function(){return"index"!==app.current.data.routeName?null:m("div",{className:"AfruxWidgets-startBottom AfruxWidgets-WidgetSection"},Object(f.a)(app.widgets.get("start_bottom")).map((function(t){return t.component.component({state:t.state})})))},n}(a.a),g=e(11),h=e.n(g),x=e(4),b=e.n(x),W=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))||this).scrollEnd=void 0,n}Object(s.a)(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.scrollEnd=h()(!1)},e.view=function(){var t=this,n=["phone","tablet"].includes(app.screen());return m("div",{className:b()({"AfruxWidgets-topWidgetSection AfruxWidgets-WidgetSection":!0,"AfruxWidgets-WidgetSection--endScroll":n&&this.scrollEnd()}),onscroll:function(e){n&&(t.scrollEnd(!1),e.target.offsetWidth+e.target.scrollLeft>=e.target.scrollWidth&&t.scrollEnd(!0))}},Object(f.a)(app.widgets.get("top")).map((function(t){return t.component.component({state:t.state})})))},n}(a.a),v=function(t){function n(){return t.apply(this,arguments)||this}return Object(s.a)(n,t),n.prototype.view=function(){return m("div",{className:"AfruxWidgets-bottomWidgetSection AfruxWidgets-WidgetSection"},Object(f.a)(app.widgets.get("bottom")).map((function(t){return t.component.component({state:t.state})})))},n}(a.a),y=e(8),w=Object.assign(y.a,{"extensions/afrux-forum-widgets-core/forum/components/EndWidgetSection":d,"extensions/afrux-forum-widgets-core/forum/components/StartTopWidgetSection":p,"extensions/afrux-forum-widgets-core/forum/components/StartBottomWidgetSection":l,"extensions/afrux-forum-widgets-core/forum/components/TopWidgetSection":W}),O=e(7);app.widgets=new c.a,app.initializers.add("afrux/forum-widgets-core",(function(){app.widgets.setConfig(app.data.resources[0].attributes["afrux-forum-widgets-core.config"]),Object(i.extend)(r.a.prototype,"view",(function(t){t.children[1].children[0].children.push(m(d,null)),t.children[1].children=[m(W,null)].concat(t.children[1].children,[m(v,null)])})),Object(i.extend)(r.a.prototype,"sidebarItems",(function(t){t.add("startTopWidgetSection",m(p,null),100),t.add("startBottomWidgetSection",m(l,null),-100)}))})),Object.assign(O.compat,w)}]);
//# sourceMappingURL=forum.js.map