(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/qpony-shibainu/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("navbar"),n("router-view"),n("footer-component")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("img",{staticClass:"navbar__logo",attrs:{src:n("6d77"),alt:"Logo"}})]),a("span",{staticClass:"navbar-burger burger",class:{"is-active":t.burgerActive},on:{click:function(e){t.burgerActive=!t.burgerActive}}},[a("span"),a("span"),a("span")])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":t.burgerActive}},[a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/","exact-active-class":"is-active"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/favourites","exact-active-class":"is-active"}},[t._v("Favourites")])],1)])])},o=[],c={data:function(){return{burgerActive:!1}},methods:{toggleBurger:function(){this.burgerActive=!this.burgerActive}}},l=c,u=n("2877"),d=Object(u["a"])(l,r,o,!1,null,null,null),f=d.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("strong",[t._v("Shiba Clicker")]),t._v(" by\n      "),n("a",{attrs:{href:"https://github.com/khejit"}},[t._v("Mikołaj Śliwiński")]),t._v(".\n      The source code is licensed\n      "),n("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(".\n      "),n("br")])])])}],v={},p=v,m=Object(u["a"])(p,h,b,!1,null,null,null),g=m.exports,C={name:"app",components:{Navbar:f,FooterComponent:g}},_=C,O=(n("5c0b"),Object(u["a"])(_,s,i,!1,null,null,null)),w=O.exports,x=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("chiba-inu-provider",{attrs:{count:t.baseNumOfCols},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.chibas;return n("rows",{attrs:{baseNumOfCols:t.baseNumOfCols,chibas:a}})}}])}),n("loader-section")],1)},j=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.numOfRows,function(e){return n("transition-group",{key:e,staticClass:"row columns",attrs:{tag:"div",appear:""},on:{"before-enter":t.beforeEnter,enter:t.enter}},t._l(t.getNumOfCols(e),function(a){return n("div",{key:a,staticClass:"column is-one-third",attrs:{"data-index":a}},[n("card",{attrs:{chiba:t.getChiba(e,a)}})],1)}),0)}),1)},L=[],E=n("109c"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card large"},[n("div",{staticClass:"card-header card__header"},[n("a",{staticClass:"card__action absolute button is-medium",class:{"is-on":t.chiba.isFav},attrs:{title:"Give this dog some love!"},on:{click:t.like}},[t._m(0)])]),n("div",{staticClass:"card-image card__image"},[n("image-w-loader",{attrs:{src:t.chiba.image}})],1)])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon icon--heart"},[n("i",{staticClass:"fas fa-heart fa-lg"})])}],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"image loadable",class:{"is-loading":!t.loaded}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],attrs:{src:t.src,alt:"Image"},on:{load:t.handleOnLoad}})])},F=[],I=n("eafc"),M=n.n(I),R={props:["src"],data:function(){return{loaded:!1}},methods:{handleOnLoad:function(){this.loaded=!0}}},A=R,P=Object(u["a"])(A,S,F,!1,null,null,null),T=P.exports,B={props:["chiba"],components:{ImageWLoader:T},methods:{like:function(){this.$store.dispatch("toggleChibaFav",this.chiba.id)}}},H=B,J=Object(u["a"])(H,N,$,!1,null,null,null),W=J.exports,q={props:["chibas","baseNumOfCols"],components:{Card:W},computed:{numOfRows:function(){return this.chibas?Math.ceil(this.chibas.length/this.baseNumOfCols):0}},methods:{getNumOfCols:function(t){if(t!==this.numOfRows)return this.baseNumOfCols;var e=this.chibas.length%this.baseNumOfCols;return 0===e?this.baseNumOfCols:e},getChiba:function(t,e){var n=(t-1)*this.baseNumOfCols+(e-1),a=this.chibas[n];return a},beforeEnter:function(t){t.style.position="relative"},enter:function(t,e){E["a"].from(t,.25,{top:"80px",opacity:0,delay:.15*t.dataset.index,onComplete:e})}}},G=q,Q=Object(u["a"])(G,k,L,!1,null,null,null),U=Q.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level loader-section"},[n("div",{staticClass:"level-item has-text-centered"},[t.isLoading?n("a",{staticClass:"loadable button is-primary is-large is-loading"},[t._v("Loading")]):t._e()])])},D=[],K=(n("ac6a"),n("20d6"),n("2f62")),V=n("11c1"),X=n.n(V);a["a"].use(K["a"]);var Y=new K["a"].Store({state:{chibas:[],isLoading:!1},getters:{favChibas:function(t){return t.chibas.filter(function(t){return t.isFav})},chibaIndexById:function(t){return function(e){return t.chibas.findIndex(function(t){return t.id===e})}}},mutations:{addChibas:function(t,e){e.newChibas.forEach(function(e){var n=X.a.v4();t.chibas.push({id:n,image:e,isFav:!1})})},turnOffLoading:function(t){t.isLoading=!1},turnOnLoading:function(t){t.isLoading=!0},setChibaIsFav:function(t,e){t.chibas[e.index].isFav=e.val}},actions:{toggleChibaFav:function(t,e){var n=t.commit,a=t.state,s=t.getters,i=s.chibaIndexById(e);n("setChibaIsFav",{index:i,val:!a.chibas[i].isFav})}}}),Z=n("0f32"),tt=n.n(Z),et={mounted:function(){window.addEventListener("scroll",tt()(this.handleScroll,150)),this.handleScroll()},computed:Object(K["b"])(["isLoading"]),methods:{handleScroll:function(){var t=document.documentElement.offsetHeight-(document.documentElement.scrollTop+window.innerHeight);t<50&&Y.commit("turnOnLoading")}}},nt=et,at=Object(u["a"])(nt,z,D,!1,null,null,null),st=at.exports,it={components:{Rows:U,LoaderSection:st},data:function(){return{baseNumOfCols:3,loading:!1,isBottom:!1}}},rt=it,ot=Object(u["a"])(rt,y,j,!1,null,null,null),ct=ot.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("rows",{attrs:{baseNumOfCols:t.baseNumOfCols,chibas:t.chibas}}),t.chibas.length?t._e():n("div",{staticClass:"level"},[n("div",{staticClass:"notification is-info level-item has-text-centered"},[n("p",[t._v("Quite empty. Why don't you "),n("router-link",{attrs:{to:"/"}},[t._v("give these dogs some love")]),t._v("?")],1)])])],1)},ut=[],dt={components:{Rows:U},computed:{chibas:function(){return this.$store.getters.favChibas}},data:function(){return{baseNumOfCols:3}}},ft=dt,ht=Object(u["a"])(ft,lt,ut,!1,null,null,null),bt=ht.exports;a["a"].use(x["a"]);var vt=new x["a"]({routes:[{path:"/",component:ct},{path:"/favourites",component:bt}]}),pt=vt,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default",null,{chibas:t.chibas})],2)},gt=[],Ct=(n("96cf"),n("3b8d")),_t=n("bc3a"),Ot=n.n(_t),wt=Ot.a.create({baseURL:"https://dog.ceo/api/breed/shiba/images/random"}),xt=wt,yt={props:["count"],computed:{chibas:function(){return Y.state.chibas},shouldLoadMoreChibas:function(){return Y.state.isLoading}},watch:{shouldLoadMoreChibas:function(t){var e=this;t&&M()(function(){e.getChibas(e.count)},300)}},mounted:function(){this.getChibas(this.count)},methods:{getChibas:function(){var t=Object(Ct["a"])(regeneratorRuntime.mark(function t(){var e,n,a,s=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:3,t.prev=1,t.next=4,xt.get("".concat(e));case 4:n=t.sent,a=n.data.message,Y.commit("addChibas",{newChibas:a}),Y.commit("turnOffLoading"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.error(t.t0);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));function e(){return t.apply(this,arguments)}return e}()}},jt=yt,kt=Object(u["a"])(jt,mt,gt,!1,null,null,null),Lt=kt.exports;a["a"].config.productionTip=!1,a["a"].component("chiba-inu-provider",Lt),new a["a"]({store:Y,router:pt,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(t,e,n){},"6d77":function(t,e,n){t.exports=n.p+"img/chiba-clicker-logo.06c0e9d3.png"}});
//# sourceMappingURL=app.4ed8b016.js.map