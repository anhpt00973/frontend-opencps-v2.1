(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-415948f8"],{"2a7f":function(e,t,i){"use strict";var n=i("80d2"),a=i("71d9"),s=i("afdd"),o=i("9d26"),r={name:"v-toolbar-side-icon",functional:!0,render:function(e,t){var i=t.slots,n=t.listeners,a=t.props,r=t.data,c=r.staticClass?r.staticClass+" v-toolbar__side-icon":"v-toolbar__side-icon",l=Object.assign(r,{staticClass:c,props:Object.assign(a,{icon:!0}),on:n}),v=i().default;return e(s["a"],l,v||[e(o["a"],"$vuetify.icons.menu")])}};i.d(t,"b",function(){return c}),i.d(t,"a",function(){return l});var c=Object(n["e"])("v-toolbar__title"),l=Object(n["e"])("v-toolbar__items");a["a"]},6561:function(e,t,i){"use strict";var n=i("dbf2"),a=i.n(n);a.a},"71d9":function(e,t,i){"use strict";i("ae8d");var n=i("c6f7"),a=i("b64a"),s=i("6a18"),o=i("b57a");function r(e,t){var i=t.value,n=t.options||{passive:!0},a=t.arg?document.querySelector(t.arg):window;a&&(a.addEventListener("scroll",i,n),e._onScroll={callback:i,options:n,target:a})}function c(e){if(e._onScroll){var t=e._onScroll,i=t.callback,n=t.options,a=t.target;a.removeEventListener("scroll",i,n),delete e._onScroll}}var l={inserted:r,unbind:c},v=i("d9bd"),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t["a"]={name:"v-toolbar",directives:{Scroll:l},mixins:[Object(n["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","manualScroll"]),a["a"],o["a"],s["a"]],props:{card:Boolean,clippedLeft:Boolean,clippedRight:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{type:[Number,String],validator:function(e){return!isNaN(parseInt(e))}},flat:Boolean,floating:Boolean,height:{type:[Number,String],validator:function(e){return!isNaN(parseInt(e))}},invertedScroll:Boolean,manualScroll:Boolean,prominent:Boolean,scrollOffScreen:Boolean,scrollToolbarOffScreen:Boolean,scrollTarget:String,scrollThreshold:{type:Number,default:300},tabs:Boolean},data:function(){return{activeTimeout:null,currentScroll:0,heights:{mobileLandscape:48,mobile:56,desktop:64,dense:48},isActive:!0,isExtended:!1,isScrollingUp:!1,previousScroll:null,previousScrollDirection:null,savedScroll:0,target:null}},computed:{canScroll:function(){return this.scrollToolbarOffScreen?(Object(v["d"])("scrollToolbarOffScreen","scrollOffScreen",this),!0):this.scrollOffScreen||this.invertedScroll},computedContentHeight:function(){return this.height?parseInt(this.height):this.dense?this.heights.dense:this.prominent||this.$vuetify.breakpoint.mdAndUp?this.heights.desktop:this.$vuetify.breakpoint.smAndDown&&this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height?this.heights.mobileLandscape:this.heights.mobile},computedExtensionHeight:function(){return this.tabs?48:this.extensionHeight?parseInt(this.extensionHeight):this.computedContentHeight},computedHeight:function(){return this.isExtended?this.computedContentHeight+this.computedExtensionHeight:this.computedContentHeight},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},classes:function(){return d({"v-toolbar":!0,"elevation-0":this.flat||!this.isActive&&!this.tabs&&this.canScroll,"v-toolbar--absolute":this.absolute,"v-toolbar--card":this.card,"v-toolbar--clipped":this.clippedLeft||this.clippedRight,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--fixed":!this.absolute&&(this.app||this.fixed),"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.prominent},this.themeClasses)},computedPaddingLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedPaddingRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedTransform:function(){return this.isActive?0:this.canScroll?-this.computedContentHeight:-this.computedHeight},currentThreshold:function(){return Math.abs(this.currentScroll-this.savedScroll)},styles:function(){return{marginTop:this.computedMarginTop+"px",paddingRight:this.computedPaddingRight+"px",paddingLeft:this.computedPaddingLeft+"px",transform:"translateY("+this.computedTransform+"px)"}}},watch:{currentThreshold:function(e){if(this.invertedScroll)return this.isActive=this.currentScroll>this.scrollThreshold;e<this.scrollThreshold||!this.isBooted||(this.isActive=this.isScrollingUp,this.savedScroll=this.currentScroll)},isActive:function(){this.savedScroll=0},invertedScroll:function(e){this.isActive=!e},manualScroll:function(e){this.isActive=!e},isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll}},created:function(){(this.invertedScroll||this.manualScroll)&&(this.isActive=!1)},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget))},methods:{onScroll:function(){if(this.canScroll&&!this.manualScroll&&"undefined"!==typeof window){var e=this.target||window;this.currentScroll=this.scrollTarget?e.scrollTop:e.pageYOffset||document.documentElement.scrollTop,this.isScrollingUp=this.currentScroll<this.previousScroll,this.previousScroll=this.currentScroll}},updateApplication:function(){return this.invertedScroll||this.manualScroll?0:this.computedHeight}},render:function(e){this.isExtended=this.extended||!!this.$slots.extension;var t=[],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return i.directives=[{arg:this.scrollTarget,name:"scroll",value:this.onScroll}],t.push(e("div",{staticClass:"v-toolbar__content",style:{height:this.computedContentHeight+"px"},ref:"content"},this.$slots.default)),this.isExtended&&t.push(e("div",{staticClass:"v-toolbar__extension",style:{height:this.computedExtensionHeight+"px"}},this.$slots.extension)),e("nav",i,t)}}},ae8d:function(e,t,i){},dbf2:function(e,t,i){},eaee:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",["0"===String(e.serviceCode)||e.selectOption?e._e():i("div",{staticClass:"text-center mt-4"},[i("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}}),i("p",{staticClass:"mt-4"},[e._v("đang tạo hồ sơ ...")])],1),i("div",{staticClass:"row-header no__hidden_class"},[null!==e.trangThaiHoSoList?i("div",{staticClass:"background-triangle-big"},[i("span",[e._v("DANH SÁCH THỦ TỤC HÀNH CHÍNH")])]):e._e(),i("div",{staticClass:"layout row wrap header_tools row-blue"},[i("div",{staticClass:"flex pl-3 text-ellipsis text-bold",staticStyle:{position:"relative"}},[i("v-text-field",{attrs:{placeholder:"Tìm kiếm theo tên thủ tục",solo:"",chips:"",multiple:"","deletable-chips":"","item-value":"value","item-text":"text","content-class":"adv__search__select","return-object":""},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.filterServiceName(t):null}},model:{value:e.serviceNameKey,callback:function(t){e.serviceNameKey=t},expression:"serviceNameKey"}})],1),i("div",{staticClass:"flex text-right",staticStyle:{"margin-left":"auto","max-width":"50px"}},[i("v-btn",{staticClass:"my-0 mx-2",attrs:{icon:""},nativeOn:{click:function(t){return e.filterServiceName(t)}}},[i("v-icon",{attrs:{size:"16"}},[e._v("search")])],1)],1)])]),i("v-layout",{staticClass:"white pt-3",attrs:{wrap:""}},[i("v-flex",{staticStyle:{width:"calc(100% - 230px)"}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{staticClass:"px-2",attrs:{xs6:""}},[i("v-autocomplete",{staticClass:"select-border",attrs:{items:e.govAgencyList,label:"Chọn cơ quan","item-text":"govAgencyName","item-value":"govAgencyCode","hide-selected":!0,clearable:"",box:""},on:{change:e.changeFilterAgency},model:{value:e.govAgencyFilter,callback:function(t){e.govAgencyFilter=t},expression:"govAgencyFilter"}})],1),i("v-flex",{staticClass:"px-2",attrs:{xs6:""}},[i("v-autocomplete",{staticClass:"select-border",attrs:{items:e.domainList,label:"Chọn lĩnh vực","item-text":"domainName","item-value":"domainCode","hide-selected":!0,clearable:"",box:""},on:{change:e.changeFilterDomain},model:{value:e.domainFilter,callback:function(t){e.domainFilter=t},expression:"domainFilter"}})],1)],1)],1),i("v-flex",{staticClass:"pl-2",staticStyle:{width:"230px"}},[i("v-chip",{staticClass:"my-0",staticStyle:{height:"48px","border-radius":"5px"},attrs:{label:"",color:"primary","text-color":"white"}},[i("v-checkbox",{staticClass:"mt-0",attrs:{color:"white","hide-details":""},model:{value:e.serviceLastest,callback:function(t){e.serviceLastest=t},expression:"serviceLastest"}},[i("template",{slot:"label"},[i("div",{staticClass:"white--text"},[e._v("THỦ TỤC NỘP GẦN ĐÂY")])])],2)],1)],1)],1),i("v-divider",{staticClass:"my-0 py-0"}),e.domainFilter||e.activeFilterKey||e.serviceLastest?e._e():i("v-expansion-panel",{staticClass:"expand__select__gov",attrs:{expand:""},model:{value:e.panelAgency,callback:function(t){e.panelAgency=t},expression:"panelAgency"}},e._l(e.govAgencyRender,function(t,n){return i("v-expansion-panel-content",{key:n},[i("div",{staticClass:"ml-3 text-bold",attrs:{slot:"header"},slot:"header"},[i("v-icon",{staticStyle:{"font-size":"14px","margin-top":"-4px","padding-right":"5px"}},[e._v("account_balance")]),e._v("\n        "+e._s(t.govAgencyName)+"\n      ")],1),i("v-card",[i("v-card-text",{staticClass:"grey lighten-3 px-0 py-0"},[i("v-expansion-panel",{staticClass:"expand__select__domain",attrs:{expand:""},model:{value:e.panelDomain[n],callback:function(t){e.$set(e.panelDomain,n,t)},expression:"panelDomain[index]"}},e._l(t.domains,function(n,a){return t.domains?i("v-expansion-panel-content",{key:a,staticClass:"blue darken-3",attrs:{value:!0}},[i("div",{staticClass:"text-bold white--text",staticStyle:{"margin-left":"14px"},attrs:{slot:"header"},slot:"header"},[i("v-icon",{staticClass:"pr-2 theme--dark"},[e._v("navigate_next")]),i("span",{staticStyle:{position:"absolute","margin-top":"1px"}},[e._v(e._s(n.domainName))])],1),i("v-card",e._l(n.serviceConfigs,function(a,s){return n.serviceConfigs?i("v-card-text",{key:s,staticClass:"card__text__gov"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"pt-1",attrs:{xs12:"",sm9:""}},[i("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(s+1)+".")]),e._v("  \n                      "),i("span",[e._v(e._s(a.serviceInfoName))])]),i("v-flex",{staticClass:"text-xs-center pt-1",attrs:{xs12:"",sm1:""}},[i("span",[e._v("Mức "+e._s(a.level))])]),i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm2:""}},[i("v-menu",{attrs:{left:"","offset-x":""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",flat:"",small:""},on:{click:function(i){e.pullServiceOptions(a,t.govAgencyCode)}},slot:"activator"},[e._v("\n                          Chọn\n                        ")]),e.serviceOptions.length>1?i("v-list",e._l(e.serviceOptions,function(n,s){return i("v-list-tile",{key:s,on:{click:function(i){e.selectServiceOption(n,t.govAgencyCode,a)}}},[i("v-list-tile-title",[e._v(e._s(n.optionName))])],1)}),1):e._e()],1)],1)],1)],1):e._e()}),1)],1):e._e()}),1)],1)],1)],1)}),1),e.domainFilter?i("v-card",[i("v-card-text",{staticClass:"grey lighten-3 px-0 py-0"},[i("v-expansion-panel",{staticClass:"expand__select__domain",attrs:{expand:""},model:{value:e.panelDomainList,callback:function(t){e.panelDomainList=t},expression:"panelDomainList"}},e._l(e.domainListRender,function(t,n){return i("v-expansion-panel-content",{key:n,staticClass:"blue darken-3",attrs:{value:!0}},[i("div",{staticClass:"text-bold white--text",staticStyle:{"margin-left":"14px"},attrs:{slot:"header"},slot:"header"},[i("v-icon",{staticClass:"pr-2 theme--dark"},[e._v("navigate_next")]),i("span",{staticStyle:{position:"absolute","margin-top":"1px"}},[e._v(e._s(t.domainName)+" "),e.domainListRender.length>1?i("span",[e._v(" - "+e._s(t.govAgencyName))]):e._e()])],1),i("v-card",e._l(t.serviceConfigs,function(n,a){return t.serviceConfigs?i("v-card-text",{key:a,staticClass:"card__text__gov"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"pt-1",attrs:{xs12:"",sm9:""}},[i("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(a+1)+".")]),e._v("  \n                  "),i("span",[e._v(e._s(n.serviceInfoName))])]),i("v-flex",{staticClass:"text-xs-center pt-1",attrs:{xs12:"",sm1:""}},[i("span",[e._v("Mức "+e._s(n.level))])]),i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm2:""}},[i("v-menu",{attrs:{left:"","offset-x":""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",flat:"",small:""},on:{click:function(i){e.pullServiceOptions(n,t.govAgencyCode)}},slot:"activator"},[e._v("\n                      Chọn\n                    ")]),e.serviceOptions.length>1?i("v-list",e._l(e.serviceOptions,function(a,s){return i("v-list-tile",{key:s,on:{click:function(i){e.selectServiceOption(a,t.govAgencyCode,n)}}},[i("v-list-tile-title",[e._v(e._s(a.optionName))])],1)}),1):e._e()],1)],1)],1)],1):e._e()}),1)],1)}),1)],1)],1):e._e(),e.activeFilterKey||e.serviceLastest?i("v-card",[e.serviceConfigListRender.length>0?i("div",e._l(e.serviceConfigListRender,function(t,n){return i("v-card-text",{key:n,staticClass:"card__text__gov"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"pt-1",attrs:{xs12:"",sm9:""}},[i("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(n+1)+".")]),e._v("  \n            "),i("span",[e._v(e._s(t.serviceInfoName))]),e._v(" \n            "),t.govAgencyNameRender?i("span",{staticClass:"primary--text"},[e._v("("+e._s(t.govAgencyNameRender)+")")]):e._e()]),i("v-flex",{staticClass:"text-xs-center pt-1",attrs:{xs12:"",sm1:""}},[i("span",[e._v("Mức "+e._s(e.serviceLastest?t.serviceLevel:t.level))])]),i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm2:""}},[i("v-menu",{attrs:{left:"","offset-x":""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",flat:"",small:""},on:{click:function(i){e.pullServiceOptions(t,t.govAgencyCode)}},slot:"activator"},[e._v("\n                Chọn\n              ")]),e.serviceOptions.length>1?i("v-list",e._l(e.serviceOptions,function(n,a){return i("v-list-tile",{key:a,on:{click:function(i){e.selectServiceOption(n,t.govAgencyCode,t)}}},[i("v-list-tile-title",[e._v(e._s(n.optionName))])],1)}),1):e._e()],1)],1)],1)],1)}),1):i("div",{staticClass:"my-2"},[i("v-alert",{attrs:{outline:"",color:"warning",icon:"priority_high",value:!0}},[e._v("\n        Không có thủ tục nào\n      ")])],1)]):e._e(),i("v-dialog",{attrs:{scrollable:"",persistent:"","max-width":"700px"},model:{value:e.dialog_captcha,callback:function(t){e.dialog_captcha=t},expression:"dialog_captcha"}},[i("v-card",[i("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[i("v-toolbar-title",[e._v("Xác thực người dùng")]),i("v-spacer"),i("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(t){e.dialog_captcha=!1}}},[i("v-icon",[e._v("close")])],1)],1),i("v-card-text",[i("v-form",{ref:"formCaptcha",attrs:{"lazy-validation":""},model:{value:e.validCaptcha,callback:function(t){e.validCaptcha=t},expression:"validCaptcha"}},[i("v-layout",{staticClass:"py-1 align-center row-list-style",attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("captcha",{ref:"captcha"})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"mr-3",attrs:{color:"primary",loading:e.loadingAction,disabled:e.loadingAction},on:{click:e.doCreateDossier}},[i("v-icon",[e._v("done")]),e._v("  \n          Đồng ý\n          "),i("span",{attrs:{slot:"loader"},slot:"loader"},[e._v("Loading...")])],1),i("v-btn",{staticClass:"mr-3",attrs:{color:"primary",loading:e.loadingAction,disabled:e.loadingAction},on:{click:function(t){e.dialog_captcha=!1}}},[i("v-icon",[e._v("clear")]),e._v("  \n          Hủy nộp hồ sơ\n          "),i("span",{attrs:{slot:"loader"},slot:"loader"},[e._v("Loading...")])],1)],1)],1)],1)],1)},a=[],s=(i("a481"),i("a745")),o=i.n(s),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"py-2",staticStyle:{display:"flex","align-items":"center",background:"#dedede","justify-content":"center"},attrs:{xs12:""}},[i("img",{staticStyle:{"border-radius":"5px"},attrs:{src:e.chapchablob,alt:"capcha"}}),i("v-btn",{staticClass:"right ml-3 mx-0 my-0",attrs:{title:"refresh",flat:"",icon:""},nativeOn:{click:function(t){return e.makeImageCap(t)}}},[i("v-icon",{attrs:{color:"primary",size:"32"}},[e._v("refresh")])],1)],1),i("v-flex",{staticClass:"mt-2",attrs:{xs12:""}},[i("v-text-field",{attrs:{box:"",placeholder:"Nhập mã captcha",rules:[function(e){return!!e||"Vui lòng nhập mã captcha"}],required:""},model:{value:e.j_captcha_response,callback:function(t){e.j_captcha_response=t},expression:"j_captcha_response"}})],1)],1)},c=[],l=(i("6b54"),i("f576"),i("28a5"),i("1157")),v=i.n(l),d={props:["index"],components:{},data:function(){return{j_captcha_response:"",chapchablob:"",options:{},arrCaptcha:[],captcha:"",currentlyDragging:null,loggedEvent:"",images:[{name:"Image 1",src:"http://placehold.it/100/000000/ffffff"},{name:"Image 2",src:"http://placehold.it/100/C93742/ffffff"},{name:"Image 3",src:"http://placehold.it/100/6894D1/ffffff"}]}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var e=this;e.makeImageCap()},watch:{},methods:{makeImageCap:function(){var e=this;e.chapchablob="",e.$store.dispatch("makeImageCap").then(function(t){e.chapchablob=t}).catch(function(t){e.chapchablob=""})},makeRandomString:function(){for(var e=this,t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<4;n++)t+=i.charAt(Math.floor(Math.random()*i.length));t&&(e.arrCaptcha=e.shuffleArrCaptcha(t.split(""))),e.captcha=t},shuffleArrCaptcha:function(e){var t=e.length,i=null,n=0;while(t>0)n=Math.floor(Math.random()*t),t--,i=e[t],e[t]=e[n],e[n]=i;return e},checkValidCaptcha:function(){var e=this,t="",i=v()("#captcha").children();console.log(i);for(var n=0;n<i.length;n++)t+=i[n].innerHTML;return e.captcha===t}},filters:{dateTimeView:function(e){if(e){var t=new Date(e);return"".concat(t.getDate().toString().padStart(2,"0"),"/").concat((t.getMonth()+1).toString().padStart(2,"0"),"/").concat(t.getFullYear())}return""}}},p=d,g=(i("6561"),i("2877")),h=i("6544"),u=i.n(h),f=i("8336"),m=i("0e8f"),y=i("132d"),C=i("a722"),x=i("2677"),_=Object(g["a"])(p,r,c,!1,null,null,null),b=_.exports;u()(_,{VBtn:f["a"],VFlex:m["a"],VIcon:y["a"],VLayout:C["a"],VTextField:x["a"]});var S=i("854a"),A=i.n(S);A.a.options={closeButton:!0,timeOut:"3000"};var k={props:["serviceCode"],components:{captcha:b},data:function(){return{dialog_captcha:!1,validCaptcha:!1,govAgencyList:[],govAgencyFilter:"",domainList:[],domainListRender:[],panelDomainList:[!0],domainFilter:"",panelAgency:[],panelDomain:[],govAgencies:[],govAgencyRender:[],serviceOptions:[],serviceConfigSelect:"",serviceConfigList:[],serviceConfigListRender:[],serviceInfoIdSelect:"",serviceOptionsProcess:[],selectOption:!1,govAgencyCodeSelect:"",serviceNameKey:"",activeFilterKey:!1,loadingMutiple:!0,dataPostDossier:"",serviceLastest:!1}},computed:{currentIndex:function(){return this.$store.getters.index}},created:function(){var e=this;e.$store.dispatch("loadServiceConfigsGov",{}).then(function(t){for(var i in e.govAgencies=t,e.govAgencyRender=e.govAgencies,e.govAgencyList=[],e.domainList=[],e.serviceConfigList=[],e.govAgencies){var n={govAgencyCode:e.govAgencies[i]["govAgencyCode"],govAgencyName:e.govAgencies[i]["govAgencyName"]};e.govAgencyList.push(n);var a=e.govAgencies[i]["domains"];for(var s in a){var o={govAgencyCode:e.govAgencies[i]["govAgencyCode"],govAgencyName:e.govAgencies[i]["govAgencyName"],domainCode:a[s]["domainCode"],domainName:a[s]["domainName"],serviceConfigs:a[s]["serviceConfigs"]};e.domainList.push(o);var r=e.govAgencies[i]["domains"][s]["serviceConfigs"];for(var c in r){var l={level:r[c]["level"],serviceConfigId:r[c]["serviceConfigId"],serviceInfoId:r[c]["serviceInfoId"],serviceInfoName:r[c]["serviceInfoName"],govAgencyCode:e.govAgencies[i]["govAgencyCode"]};e.serviceConfigList.push(l)}}}if(e.serviceConfigListRender=e.serviceConfigList,e.domainListRender=e.domainList,"0"===String(e.serviceCode)&&e.filterAndSort(),"0"!==String(e.serviceCode))for(var v in e.govAgencies){var d=e.govAgencies[v].govAgencyCode;for(var p in e.govAgencies[v].domains)for(var g in e.govAgencies[v].domains[p].serviceConfigs){var h=e.govAgencies[v].domains[p].serviceConfigs[g],u=h.serviceConfigId;if(String(e.serviceCode)===String(u)){e.govAgencyCodeSelect=d,e.serviceInfoIdSelect=h.serviceInfoId,e.pullServiceOptions(h,d);break}}}})},updated:function(){},watch:{$route:function(e,t){var i=this;i.filterAndSort()},serviceLastest:function(e){var t=this;e?(t.govAgencyFilter="",t.domainFilter="",t.serviceNameKey="",t.filterService()):t.filterService()}},methods:{changeFilterAgency:function(){var e=this;e.domainFilter="",e.serviceNameKey="",e.activeFilterKey=!1,e.serviceLastest=!1,e.filterService()},changeFilterDomain:function(){var e=this;e.govAgencyFilter="",e.serviceNameKey="",e.activeFilterKey=!1,e.serviceLastest=!1,e.panelDomainList=[!0],e.filterService()},filterServiceName:function(){var e=this;e.serviceNameKey&&e.serviceNameKey.length>3?(e.govAgencyFilter="",e.domainFilter="",e.serviceLastest=!1,e.activeFilterKey=!0,e.filterService()):(e.govAgencyFilter="",e.domainFilter="",e.serviceNameKey="",e.serviceLastest=!1,e.activeFilterKey=!1,e.filterService())},filterService:function(){var e=this;setTimeout(function(){var t=e.$router.history.current,i=t.query,n="?";for(var a in i["agency"]=e.govAgencyFilter,i["domain"]=e.domainFilter,i["lastest"]=e.serviceLastest,i["keyword"]=String(e.serviceNameKey).trim(),i)""!==i[a]&&"undefined"!==i[a]&&void 0!==i[a]&&null!==i[a]&&(n+=a+"="+i[a]+"&");e.$router.push({path:t.path+n,query:{renew:Math.floor(100*Math.random())+1}})},200)},filterAndSort:function(){var e=this,t=e.$router.history.current,i=t.query;if(i.hasOwnProperty("agency")||i.hasOwnProperty("domain")||i.hasOwnProperty("keyword")||(e.govAgencyRender=e.govAgencies),i.hasOwnProperty("agency")&&i.agency&&(e.govAgencyRender=e.govAgencies.filter(function(e){return String(e["govAgencyCode"])===i.agency})),i.hasOwnProperty("domain")&&i.domain&&(e.domainListRender=e.domainList.filter(function(e){return String(e["domainCode"])===i.domain})),i.hasOwnProperty("keyword")&&i.keyword){var n=e.convertString(i.keyword);e.serviceConfigListRender=e.serviceConfigList.filter(function(t){return e.convertString(String(t["serviceInfoName"])).indexOf(n)>=0}),console.log("serviceConfigListRender 1",e.serviceConfigListRender)}if(i.hasOwnProperty("lastest")&&i.lastest&&"false"!==String(i.lastest)&&e.$store.dispatch("getServiceRecently").then(function(t){if(t.length>0){var i=[];for(var n in t)if(o()(t[n]["serviceConfigs"]))for(var a in t[n]["serviceConfigs"])t[n]["serviceConfigs"][a].serviceInfoId=t[n]["serviceConfigs"][a]["serviceInfoId"],t[n]["serviceConfigs"][a].serviceInfoName=t[n]["serviceName"],t[n]["serviceConfigs"][a].govAgencyNameRender=t[n]["serviceConfigs"][a]["govAgencyName"],i.push(t[n]["serviceConfigs"][a]);else t[n]["serviceConfigs"].serviceInfoId=t[n]["serviceInfoId"],t[n]["serviceConfigs"].serviceInfoName=t[n]["serviceName"],i.push(t[n]["serviceConfigs"]);e.serviceConfigListRender=i,console.log("serviceConfigListRender 2",e.serviceConfigListRender)}}),!e.domainFilter&&!e.serviceNameKey)if(1===e.govAgencyRender.length)if(e.panelAgency=[!0],1===e.govAgencyRender[0].domains.length)e.panelDomain=[],e.panelDomain[0]=[!0];else{for(var a in e.govAgencyRender[0].domains)e.panelDomain.push([]),e.panelDomain[a].push(!1);e.panelDomain[0]=[!0]}else for(var s in e.govAgencyRender)if(e.panelAgency.push(!1),e.panelDomain.push([]),1===e.govAgencyRender[s].domains.length)e.panelDomain[0]=[!0];else for(var r in e.govAgencyRender[s].domains[r])e.panelDomain[s].push(!1)},pullServiceOptions:function(e,t){var i=this;i.serviceConfigSelect=e,i.govAgencyCodeSelect=t,i.serviceInfoIdSelect=e.serviceInfoId,i.$store.dispatch("getServiceOpionByProcess",e).then(function(n){i.serviceOptions=n,1===n.length?(i.selectOption=!1,i.$store.dispatch("getServiceInfo",{serviceInfoId:e.serviceInfoId}).then(function(e){var a={serviceCode:e.serviceCode,govAgencyCode:t,templateNo:n[0].templateNo,originality:i.getOriginality(),j_captcha_response:""};i.isOffLine?(i.dataPostDossier=a,i.$refs.captcha.makeImageCap(),i.dialog_captcha=!0):i.$store.dispatch("postDossier",a).then(function(e){i.loadingAction=!1,i.indexAction=-1,i.$router.push({path:"/danh-sach-ho-so/0/ho-so/"+e.dossierId+"/NEW",query:i.$router.history.current.query})})})):(i.serviceOptionsProcess=n,i.selectOption=!0)}).catch(function(e){i.serviceOptions=[]})},selectServiceOption:function(e,t,i){var n=this;n.serviceConfigSelect=i,n.govAgencyCodeSelect=t,n.serviceInfoIdSelect=i.serviceInfoId,n.loadingMutiple=!0,n.$store.dispatch("getServiceInfo",{serviceInfoId:n.serviceConfigSelect.serviceInfoId}).then(function(i){var a={serviceCode:i.serviceCode,govAgencyCode:t,templateNo:e.templateNo,originality:n.getOriginality(),j_captcha_response:""};n.isOffLine?(n.dataPostDossier=a,n.$refs.captcha.makeImageCap(),n.dialog_captcha=!0):n.$store.dispatch("postDossier",a).then(function(e){n.loadingAction=!1,n.indexAction=-1,n.$router.push({path:"/danh-sach-ho-so/0/ho-so/"+e.dossierId+"/NEW",query:n.$router.history.current.query})})})},selectServiceOptionCRD:function(e,t){var i=this;i.$store.dispatch("getServiceInfo",{serviceInfoId:i.serviceInfoIdSelect}).then(function(n){var a={serviceCode:n.serviceCode,govAgencyCode:t,templateNo:e.templateNo,originality:i.getOriginality()};i.$store.dispatch("postDossier",a).then(function(e){i.loadingAction=!1,i.indexAction=-1,i.$router.push({path:"/danh-sach-ho-so/0/ho-so/"+e.dossierId+"/NEW",query:i.$router.history.current.query})})})},doCreateDossier:function(){var e=this;e.$refs.formCaptcha.resetValidation();var t=e.$refs.captcha.j_captcha_response;e.$refs.formCaptcha.validate()&&(e.dataPostDossier["j_captcha_response"]=t,e.createDossier(e.dataPostDossier))},createDossier:function(e){var t=this;t.$store.dispatch("postDossier",e).then(function(e){void 0!==e["status"]&&203===e["status"]?(t.loadingAction=!1,A.a.clear(),A.a.error("Mã captcha không chính xác. Vui lòng thử lại"),t.$refs.captcha.makeImageCap()):(t.loadingAction=!1,t.dialog_captcha=!1,t.indexAction=-1,t.$router.push({path:"/danh-sach-ho-so/0/ho-so/"+e.data.dossierId+"/NEW",query:t.$router.history.current.query}))}).catch(function(e){A.a.error("Nộp hồ sơ không thành công"),t.$refs.captcha.makeImageCap()})},getColor:function(e){return 2===e?"green":3===e?"orange":4===e?"red":void 0},goBack:function(){window.history.back()},convertString:function(e){return e=e.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"),e=e.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"),e=e.replace(/ì|í|ị|ỉ|ĩ/g,"i"),e=e.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"),e=e.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"),e=e.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"),e=e.replace(/đ/g,"d"),e=e.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"A"),e=e.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E"),e=e.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I"),e=e.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O"),e=e.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U"),e=e.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y"),e=e.replace(/Đ/g,"D"),e=e.toLocaleLowerCase().replace(/\s/g,""),e}}},I=k,L=i("0798"),w=i("c6a6"),N=i("b0af"),O=i("99d9"),$=i("ac7c"),D=i("cc20"),R=i("169a"),T=i("ce7e6"),F=i("cd55"),V=i("49e2"),H=i("4bd4"),P=i("8860"),E=i("ba95"),j=i("5d23"),B=i("e449"),K=i("490a"),M=i("9910"),q=i("71d9"),U=i("2a7f"),z=Object(g["a"])(I,n,a,!1,null,null,null);t["default"]=z.exports;u()(z,{VAlert:L["a"],VAutocomplete:w["a"],VBtn:f["a"],VCard:N["a"],VCardActions:O["a"],VCardText:O["b"],VCheckbox:$["a"],VChip:D["a"],VDialog:R["a"],VDivider:T["a"],VExpansionPanel:F["a"],VExpansionPanelContent:V["a"],VFlex:m["a"],VForm:H["a"],VIcon:y["a"],VLayout:C["a"],VList:P["a"],VListTile:E["a"],VListTileTitle:j["c"],VMenu:B["a"],VProgressCircular:K["a"],VSpacer:M["a"],VTextField:x["a"],VToolbar:q["a"],VToolbarTitle:U["b"]})}}]);
//# sourceMappingURL=chunk-415948f8.js.map