(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f0291f0"],{"014b":function(t,e,n){"use strict";var a=n("e53d"),i=n("07e3"),o=n("8e60"),s=n("63b6"),r=n("9138"),c=n("ebfd").KEY,l=n("294c"),u=n("dbdb"),d=n("45f2"),h=n("62a0"),f=n("5168"),p=n("ccb9"),b=n("6718"),g=n("47ee"),y=n("9003"),v=n("e4ae"),m=n("f772"),w=n("36c3"),k=n("1bc3"),x=n("aebd"),C=n("a159"),_=n("0395"),S=n("bf0b"),N=n("d9f6"),O=n("c3a1"),P=S.f,j=N.f,E=_.f,T=a.Symbol,H=a.JSON,I=H&&H.stringify,V="prototype",$=f("_hidden"),D=f("toPrimitive"),A={}.propertyIsEnumerable,U=u("symbol-registry"),F=u("symbols"),B=u("op-symbols"),G=Object[V],J="function"==typeof T,q=a.QObject,K=!q||!q[V]||!q[V].findChild,M=o&&l(function(){return 7!=C(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,n){var a=P(G,e);a&&delete G[e],j(t,e,n),a&&t!==G&&j(G,e,a)}:j,R=function(t){var e=F[t]=C(T[V]);return e._k=t,e},W=J&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},z=function(t,e,n){return t===G&&z(B,e,n),v(t),e=k(e,!0),v(n),i(F,e)?(n.enumerable?(i(t,$)&&t[$][e]&&(t[$][e]=!1),n=C(n,{enumerable:x(0,!1)})):(i(t,$)||j(t,$,x(1,{})),t[$][e]=!0),M(t,e,n)):j(t,e,n)},L=function(t,e){v(t);var n,a=g(e=w(e)),i=0,o=a.length;while(o>i)z(t,n=a[i++],e[n]);return t},Y=function(t,e){return void 0===e?C(t):L(C(t),e)},Q=function(t){var e=A.call(this,t=k(t,!0));return!(this===G&&i(F,t)&&!i(B,t))&&(!(e||!i(this,t)||!i(F,t)||i(this,$)&&this[$][t])||e)},X=function(t,e){if(t=w(t),e=k(e,!0),t!==G||!i(F,e)||i(B,e)){var n=P(t,e);return!n||!i(F,e)||i(t,$)&&t[$][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=E(w(t)),a=[],o=0;while(n.length>o)i(F,e=n[o++])||e==$||e==c||a.push(e);return a},tt=function(t){var e,n=t===G,a=E(n?B:w(t)),o=[],s=0;while(a.length>s)!i(F,e=a[s++])||n&&!i(G,e)||o.push(F[e]);return o};J||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(B,n),i(this,$)&&i(this[$],t)&&(this[$][t]=!1),M(this,t,x(1,n))};return o&&K&&M(G,t,{configurable:!0,set:e}),R(t)},r(T[V],"toString",function(){return this._k}),S.f=X,N.f=z,n("6abf").f=_.f=Z,n("355d").f=Q,n("9aa9").f=tt,o&&!n("b8e3")&&r(G,"propertyIsEnumerable",Q,!0),p.f=function(t){return R(f(t))}),s(s.G+s.W+s.F*!J,{Symbol:T});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)f(et[nt++]);for(var at=O(f.store),it=0;at.length>it;)b(at[it++]);s(s.S+s.F*!J,"Symbol",{for:function(t){return i(U,t+="")?U[t]:U[t]=T(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in U)if(U[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),s(s.S+s.F*!J,"Object",{create:Y,defineProperty:z,defineProperties:L,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),H&&s(s.S+s.F*(!J||l(function(){var t=T();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){var e,n,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(n=e=a[1],(m(e)||void 0!==t)&&!W(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),a[1]=e,I.apply(H,a)}}),T[V][D]||n("35e8")(T[V],D,T[V].valueOf),d(T,"Symbol"),d(Math,"Math",!0),d(a.JSON,"JSON",!0)},"0395":function(t,e,n){var a=n("36c3"),i=n("6abf").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?r(t):i(a(t))}},"47ee":function(t,e,n){var a=n("c3a1"),i=n("9aa9"),o=n("355d");t.exports=function(t){var e=a(t),n=i.f;if(n){var s,r=n(t),c=o.f,l=0;while(r.length>l)c.call(t,s=r[l++])&&e.push(s)}return e}},"5d58":function(t,e,n){t.exports=n("d8d6")},"610f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{class:t.className,style:t.maxWidth,attrs:{role:"checkbox",title:t.toggled?t.title_checked:t.title_unchecked,"aria-checked":t.ariaChecked}},[n("input",{staticClass:"v-switch-input",attrs:{type:"checkbox"},on:{change:function(e){return e.stopPropagation(),t.toggle(e)}}}),n("div",{staticClass:"v-switch-core",style:t.coreStyle},[n("div",{staticClass:"v-switch-button",style:t.buttonStyle})]),t.labels?[t.toggled?n("span",{staticClass:"v-switch-label v-left",style:t.labelStyle,domProps:{innerHTML:t._s(t.labelChecked)}}):n("span",{staticClass:"v-switch-label v-right",style:t.labelStyle,domProps:{innerHTML:t._s(t.labelUnchecked)}})]:t._e()],2)},i=[],o=(n("6b54"),n("c5f6"),n("5d58")),s=n.n(o),r=n("67bb"),c=n.n(r);function l(t){return l="function"===typeof c.a&&"symbol"===typeof s.a?function(t){return typeof t}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":typeof t},l(t)}function u(t){return u="function"===typeof c.a&&"symbol"===l(s.a)?function(t){return l(t)}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":l(t)},u(t)}n("cadf"),n("551c"),n("097d");var d={colorChecked:"#75C791",colorUnchecked:"#bfcbd9",cssColors:!1,labelChecked:"on",labelUnchecked:"off",width:50,height:22,margin:3},h=function(t,e){return"object"===u(t)&&t.hasOwnProperty(e)},f=function(t){return t+"px"},p={name:"toggle-button",props:{title_checked:"",title_unchecked:"",value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},sync:{type:Boolean,default:!1},speed:{type:Number,default:300},color:{type:[String,Object],validator:function(t){return"object"===u(t)?t.checked||t.unchecked:"string"===typeof t}},cssColors:{type:Boolean,default:!1},labels:{type:[Boolean,Object],default:!1,validator:function(t){return"object"===u(t)?t.checked||t.unchecked:"boolean"===typeof t}},height:{type:Number,default:d.height},width:{type:Number,default:d.width}},computed:{className:function(){var t=this.toggled,e=this.disabled;return["vue-js-switch",{toggled:t,disabled:e}]},ariaChecked:function(){return this.toggled.toString()},coreStyle:function(){return{width:f(this.width),height:f(this.height),backgroundColor:this.cssColors?null:this.colorCurrent,borderRadius:f(Math.round(this.height/2))}},maxWidth:function(){return{width:f(this.width)+"!important"}},buttonRadius:function(){return this.height-2*d.margin},distance:function(){return f(this.width-this.height+d.margin)},buttonStyle:function(){return{width:f(this.buttonRadius),height:f(this.buttonRadius),transition:"transform ".concat(this.speed,"ms"),transform:this.toggled?"translate3d(".concat(this.distance,", 3px, 0px)"):null}},labelStyle:function(){return{lineHeight:f(this.height)}},colorChecked:function(){var t=this.color;return"object"!==u(t)?t||d.colorChecked:h(t,"checked")?t.checked:d.colorChecked},colorUnchecked:function(){var t=this.color;return h(t,"unchecked")?t.unchecked:d.colorUnchecked},colorCurrent:function(){return this.toggled?this.colorChecked:this.colorUnchecked},labelChecked:function(){return h(this.labels,"checked")?this.labels.checked:d.labelChecked},labelUnchecked:function(){return h(this.labels,"unchecked")?this.labels.unchecked:d.labelUnchecked}},watch:{value:function(t){this.sync&&(this.toggled=!!t)}},data:function(){return{toggled:!!this.value}},methods:{toggle:function(t){this.toggled=!this.toggled,this.$emit("input",this.toggled),this.$emit("change",{value:this.toggled,srcEvent:t})}}},b=p,g=n("2877"),y=Object(g["a"])(b,a,i,!1,null,null,null);e["a"]=y.exports},6718:function(t,e,n){var a=n("e53d"),i=n("584a"),o=n("b8e3"),s=n("ccb9"),r=n("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||r(e,t,{value:s.f(t)})}},"67bb":function(t,e,n){t.exports=n("f921")},"69d3":function(t,e,n){n("6718")("asyncIterator")},"6abf":function(t,e,n){var a=n("e6f3"),i=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,i)}},7121:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phancong",staticStyle:{"background-color":"white",width:"100%"}},[3===t.type||4===t.type?n("v-expansion-panel",{staticClass:"expansion-pl",attrs:{value:[!0],expand:""}},[n("v-expansion-panel-content",[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"background-triangle-small"},[n("v-icon",{attrs:{size:"18",color:"white"}},[t._v("star_rate")])],1),t._v("Phân công chỉ đạo\n      ")]),n("v-card",[n("div",{staticClass:"px-4 py-1"},[n("v-layout",{attrs:{wrap:""}},t._l(t.data_uyquyen,function(e,a){return n("v-checkbox",{key:e.userId,staticStyle:{display:"inline-block","min-width":"190px","max-width":"190px"},attrs:{slot:"activator",title:e.userName},on:{change:function(e){t.changeDelegacy(e,a)}},slot:"activator",model:{value:e.assigned,callback:function(n){t.$set(e,"assigned",n)},expression:"item.assigned"}},[n("template",{slot:"label"},[n("span",{staticClass:"black--text"},[t._v(t._s(e.userName))])])],2)}),1)],1)])],1)],1):t._e(),n("v-expansion-panel",{staticClass:"expansion-pl",attrs:{value:[!0],expand:""}},[n("v-expansion-panel-content",[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"background-triangle-small"},[n("v-icon",{attrs:{size:"18",color:"white"}},[t._v("star_rate")])],1),t._v("Phân công người thực hiện\n      ")]),n("v-card",[1===t.type||3===t.type?n("div",{staticClass:"px-4 py-1"},[n("v-layout",{attrs:{wrap:""}},t._l(t.data_phancong,function(e,a){return n("v-checkbox",{key:e.userId,staticStyle:{display:"inline-block","min-width":"190px","max-width":"190px"},attrs:{slot:"activator",title:e.userName},on:{change:function(e){t.changeAssigned(e,a)}},slot:"activator",model:{value:e.assigned,callback:function(n){t.$set(e,"assigned",n)},expression:"item.assigned"}},[n("template",{slot:"label"},[n("span",{staticClass:"black--text"},[t._v(t._s(e.userName))])])],2)}),1)],1):t._e(),2===t.type||4===t.type?n("v-card-text",{staticClass:"px-4 py-1"},[n("v-layout",{staticClass:"my-1",attrs:{wrap:""}},t._l(t.data_phancong,function(e,a){return n("div",{key:e.userId,staticClass:"ml-3"},[n("v-layout",{attrs:{wrap:""}},[n("v-tooltip",{attrs:{top:""}},[n("v-checkbox",{staticStyle:{"min-width":"150px"},attrs:{slot:"activator",label:e.userName},on:{change:function(e){t.checkAsign(e,a)}},slot:"activator",model:{value:e.assigned,callback:function(n){t.$set(e,"assigned",n)},expression:"item.assigned"}}),n("span",{staticClass:"pl-0"},[t._v(" "+t._s(e.userName)+" ")])],1)],1)],1)}),0)],1):t._e()],1)],1)],1)],1)},i=[],o=(n("c5f6"),n("854a")),s=n.n(o),r=n("610f");s.a.options={closeButton:!0,timeOut:"2000"};var c={components:{"toggle-button":r["a"]},props:{assign_items:{type:Array,default:function(){return[]}},data_uyquyen:{type:Array,default:function(){return[]}},type:{type:Number,default:function(){return 1}},configNote:{type:Object,default:function(){}},detailDossier:{type:Object,default:function(){}}},model:{prop:"assign_items"},data:function(){return{data_phancong:[],assignedtype_items:{2:[{text:"Không có phân công",value:0},{text:"Thực hiện chính",value:1},{text:"Thực hiện phối hợp",value:2}],3:[{text:"Không có phân công",value:0},{text:"Thực hiện chính",value:1},{text:"Thực hiện phối hợp",value:2},{text:"Theo dõi",value:3}]},title_asign:{1:"PHÂN CÔNG NGƯỜI THỰC HIỆN",2:"PHÂN CÔNG THỰC HIỆN, PHỐI HỢP",3:"PHÂN CÔNG THỰC HIỆN, PHỐI HỢP VÀ THEO DÕI"},presenterAddGroup:!0,assignValidate:!0}},created:function(){setTimeout(function(){window.$(".btn-tgl").addClass("btn-hidden")},200)},mounted:function(){this.data_phancong=this.assign_items},methods:{changeAssigned:function(t,e){var n=this;0!==n.type&&(n.assign_items[e].assigned=!0===t?1:0)},changeDelegacy:function(t,e){var n=this;3!==n.type&&4!==n.type||(n.data_uyquyen[e].assigned=!0===t?1:0)},checkAsign:function(t,e){var n=this;t?(n.assign_items[e].assigned=1,window.$("#btn-".concat(e)).removeClass("btn-hidden")):(n.assign_items[e].assigned=0,window.$("#btn-".concat(e)).addClass("btn-hidden"))},changeTypeAssign:function(t,e){var n=this;t.value?(n.assign_items[e].assigned=1,window.$("#btn-".concat(e)).removeClass("btn-hidden")):(n.assign_items[e].assigned=2,window.$("#btn-".concat(e)).addClass("btn-hidden"))},doReAsign:function(){var t=this,e={dossierId:t.detailDossier.dossierId,users:t.data_uyquyen};t.$store.dispatch("postDossierUserAsign",e).then(function(t){s.a.success("Yêu cầu của bạn thực hiện thành công")}).catch(function(t){})},doExport:function(){var t=this,e=t.assign_items.filter(function(t){return Number(t.assigned)>0});return 0===e.length?(t.assignValidate=!1,t.assignValidate):(t.assignValidate=!0,t.assignValidate)},getDataDelegacy:function(){var t=this;return t.data_uyquyen}}},l=c,u=n("2877"),d=n("6544"),h=n.n(d),f=n("b0af"),p=n("99d9"),b=n("ac7c"),g=n("cd55"),y=n("49e2"),v=n("132d"),m=n("a722"),w=n("3a2f"),k=Object(u["a"])(l,a,i,!1,null,null,null);e["default"]=k.exports;h()(k,{VCard:f["a"],VCardText:p["b"],VCheckbox:b["a"],VExpansionPanel:g["a"],VExpansionPanelContent:y["a"],VIcon:v["a"],VLayout:m["a"],VTooltip:w["a"]})},"765d":function(t,e,n){n("6718")("observable")},bf0b:function(t,e,n){var a=n("355d"),i=n("aebd"),o=n("36c3"),s=n("1bc3"),r=n("07e3"),c=n("794b"),l=Object.getOwnPropertyDescriptor;e.f=n("8e60")?l:function(t,e){if(t=o(t),e=s(e,!0),c)try{return l(t,e)}catch(n){}if(r(t,e))return i(!a.f.call(t,e),t[e])}},ccb9:function(t,e,n){e.f=n("5168")},d8d6:function(t,e,n){n("1654"),n("6c1c"),t.exports=n("ccb9").f("iterator")},ebfd:function(t,e,n){var a=n("62a0")("meta"),i=n("f772"),o=n("07e3"),s=n("d9f6").f,r=0,c=Object.isExtensible||function(){return!0},l=!n("294c")(function(){return c(Object.preventExtensions({}))}),u=function(t){s(t,a,{value:{i:"O"+ ++r,w:{}}})},d=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,a)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[a].i},h=function(t,e){if(!o(t,a)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[a].w},f=function(t){return l&&p.NEED&&c(t)&&!o(t,a)&&u(t),t},p=t.exports={KEY:a,NEED:!1,fastKey:d,getWeak:h,onFreeze:f}},f921:function(t,e,n){n("014b"),n("c207"),n("69d3"),n("765d"),t.exports=n("584a").Symbol}}]);
//# sourceMappingURL=chunk-8f0291f0.js.map