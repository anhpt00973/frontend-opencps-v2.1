(function(t){function a(a){for(var s,o,l=a[0],r=a[1],c=a[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,l=1;l<e.length;l++){var r=e[l];0!==n[r]&&(s=!1)}s&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},i=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=r;i.push(["56d7","chunk-vendors"]),e()})({"56d7":function(t,a,e){"use strict";e.r(a);var s=e("a026"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticStyle:{padding:"10px"},attrs:{id:"app_report_charts"}},[e("v-content",[e("Landing")],1)],1)},i=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"1300px",margin:"0 auto"}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[e("div",{staticClass:"pa-2 v-sheet theme--light",staticStyle:{border:"1px solid #dedede"}},[e("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden",background:"#fff"}},[e("div",{staticClass:"background-triangle-big1"},[t._v("THỐNG KÊ THEO NĂM")]),e("div",{staticStyle:{width:"200px"}},[e("v-select",{attrs:{width:"200px",items:t.yearList,"item-value":"value","item-text":"name"},model:{value:t.yearSelected,callback:function(a){t.yearSelected=a},expression:"yearSelected"}})],1)]),e("v-layout",{attrs:{wrap:"","align-center":""}},[e("v-flex",{attrs:{md6:"",xs12:""}},[e("apexchart",{staticClass:"pieChartTotal",attrs:{type:"pie",width:"400",height:"220",options:t.chartOptionsYear,series:t.statisticalYear}})],1),e("v-flex",{attrs:{md6:"",xs12:""}},[e("v-layout",{staticClass:"run-down",attrs:{wrap:""}},[e("v-flex",{attrs:{md6:"",xs12:"","text-center":""}},[e("span",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.receivedCount))]),e("p",[t._v("Tổng số đã tiếp nhận")])]),e("v-flex",{attrs:{md6:"",xs12:"","text-center":""}},[e("span",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.releaseCount))]),e("p",[t._v("Hoàn thành")])]),e("v-flex",{attrs:{md6:"",xs12:"","text-center":""}},[e("span",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.processingCount))]),e("p",[t._v("Đang xử lý")])]),e("v-flex",{attrs:{md6:"",xs12:"","text-center":""}},[e("span",{staticStyle:{color:"#1976d2"}},[t._v(t._s(t.statistics.overtimeCount))]),e("p",[t._v("Trễ hạn")])])],1)],1)],1)],1)]),e("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[e("div",{staticClass:"pa-2 v-sheet theme--light",staticStyle:{border:"1px solid #dedede"}},[e("div",{staticClass:"row-header mb-1",staticStyle:{height:"38px",overflow:"hidden",background:"#fff"}},[e("div",{staticClass:"background-triangle-big1"},[t._v("THỐNG KÊ THỦ TỤC HÀNH CHÍNH")])]),e("v-card-text",{staticClass:"px-0 py-3 pt-4"},[e("v-layout",{staticClass:"custom-class",attrs:{wrap:""}},[e("v-flex",{staticClass:"px-2 pb-3",attrs:{xs12:"",sm6:""}},[e("v-card",{staticClass:"white--text",staticStyle:{"border-radius":"4px"},attrs:{color:"green lighten-1",height:"70px"}},[e("v-layout",{staticClass:"px-2",staticStyle:{height:"70px"}},[e("v-flex",{staticClass:"xs3 pt-1"},[e("v-btn",{staticStyle:{"pointer-events":"none",height:"52px"},attrs:{outline:"",fab:"",color:"white",depressed:""}},[e("v-icon",{attrs:{size:"32",color:"#ffffff"}},[t._v("timeline")])],1)],1),e("v-flex",{staticClass:"xs9 pl-4 pt-2"},[e("p",[e("span",[t._v("Thủ tục ")]),e("span",{staticClass:"text-bold"},[t._v("mức độ 2")])]),e("p",{staticClass:"text-bold",staticStyle:{"font-size":"1.75em"}},[t._v(t._s(t.levelList[0]["count"]))])])],1)],1)],1),e("v-flex",{staticClass:"px-2 pb-3",attrs:{xs12:"",sm6:""}},[e("v-card",{staticClass:"white--text",staticStyle:{"border-radius":"4px"},attrs:{color:"orange lighten-1",height:"70px"}},[e("v-layout",{staticClass:"px-2",staticStyle:{height:"70px"}},[e("v-flex",{staticClass:"xs3 pt-1"},[e("v-btn",{staticStyle:{"pointer-events":"none",height:"52px"},attrs:{outline:"",fab:"",color:"white",depressed:""}},[e("v-icon",{attrs:{size:"32",color:"#ffffff"}},[t._v("timeline")])],1)],1),e("v-flex",{staticClass:"xs9 pl-4 pt-2"},[e("p",[e("span",[t._v("Thủ tục ")]),e("span",{staticClass:"text-bold"},[t._v("mức độ 3")])]),e("p",{staticClass:"text-bold",staticStyle:{"font-size":"1.75em"}},[t._v(t._s(t.levelList[1]["count"]))])])],1)],1)],1),e("v-flex",{staticClass:"px-2 pt-2 pb-3",attrs:{xs12:"",sm6:""}},[e("v-card",{staticClass:"white--text",attrs:{color:"red lighten-1",height:"70px"}},[e("v-layout",{staticClass:"px-2",staticStyle:{height:"70px"}},[e("v-flex",{staticClass:"xs3 pt-1"},[e("v-btn",{staticStyle:{"pointer-events":"none",height:"52px"},attrs:{outline:"",fab:"",color:"white",depressed:""}},[e("v-icon",{attrs:{size:"32",color:"#ffffff"}},[t._v("timeline")])],1)],1),e("v-flex",{staticClass:"xs9 pl-4 pt-2"},[e("p",[e("span",[t._v("Thủ tục ")]),e("span",{staticClass:"text-bold"},[t._v("mức độ 4")])]),e("p",{staticClass:"text-bold",staticStyle:{"font-size":"1.75em"}},[t._v(t._s(t.levelList[2]["count"]))])])],1)],1)],1),e("v-flex",{staticClass:"px-2 pt-2 pb-3",attrs:{xs12:"",sm6:""}},[e("v-card",{staticClass:"white--text",attrs:{color:"#00bcd5",height:"70px"}},[e("v-layout",{staticClass:"px-2",staticStyle:{height:"70px"}},[e("v-flex",{staticClass:"xs3 pt-1"},[e("v-btn",{staticStyle:{"pointer-events":"none",height:"52px"},attrs:{outline:"",fab:"",color:"white",depressed:""}},[e("v-icon",{attrs:{size:"32",color:"#ffffff"}},[t._v("timeline")])],1)],1),e("v-flex",{staticClass:"xs9 pl-4 pt-2"},[e("p",[e("span",{staticClass:"text-bold"},[t._v("TỔNG SỐ THỦ TỤC")])]),e("p",{staticClass:"text-bold",staticStyle:{"font-size":"1.75em"}},[t._v(t._s(t.totalTTHC))])])],1)],1)],1)],1)],1)],1)]),e("v-flex",{attrs:{xs12:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"pa-2",attrs:{md4:"",xs12:""}},[e("div",{staticClass:"pa-2 v-sheet theme--light",staticStyle:{border:"1px solid #dedede"}},[e("div",{staticStyle:{height:"38px",overflow:"hidden",background:"#fff"}},[e("div",{staticClass:"background-triangle-big1"},[t._v("SỞ BAN NGÀNH")]),e("v-flex",{staticClass:"right"},[e("div",{staticClass:"agencyFilter agencyFilter1"},[e("v-autocomplete",{attrs:{items:t.listDonViSBN,placeholder:"Chọn đơn vị","item-text":"itemName","item-value":"itemCode","return-object":"","hide-no-data":"","hide-selected":!0,clearable:""},on:{change:function(t){}},model:{value:t.donViSBN,callback:function(a){t.donViSBN=a},expression:"donViSBN"}})],1)])],1),e("apexchart",{staticClass:"pieChartAgency",attrs:{type:"pie",width:"400",height:"220",options:t.chartOptionsSoQuanXa,series:t.statisticalSBN}})],1)]),e("v-flex",{staticClass:"pt-2 pr-2 pb-2 pl-0",attrs:{md4:"",xs12:""}},[e("div",{staticClass:"pa-2 v-sheet theme--light",staticStyle:{border:"1px solid #dedede"}},[e("div",{staticStyle:{height:"38px",overflow:"hidden"}},[e("div",{staticClass:"background-triangle-big1"},[t._v("HUYỆN/ THỊ XÃ/ THÀNH PHỐ")]),e("v-flex",{staticClass:"right"},[e("div",{staticClass:"agencyFilter agencyFilter2"},[e("v-autocomplete",{attrs:{items:t.listDonViHuyen,placeholder:"Chọn đơn vị","item-text":"itemName","item-value":"itemCode","return-object":"","hide-no-data":"","hide-selected":!0,clearable:""},on:{change:function(t){}},model:{value:t.donViHuyen,callback:function(a){t.donViHuyen=a},expression:"donViHuyen"}})],1)])],1),e("apexchart",{staticClass:"pieChartAgency",attrs:{type:"pie",width:"400",height:"220",options:t.chartOptionsSoQuanXa,series:t.statisticalQUAN_HUYEN}})],1)]),e("v-flex",{staticClass:"pt-2 pr-2 pb-2 pl-0",attrs:{md4:"",xs12:""}},[e("div",{staticClass:"pa-2 v-sheet theme--light",staticStyle:{border:"1px solid #dedede"}},[e("div",{staticStyle:{height:"38px",overflow:"hidden"}},[e("div",{staticClass:"background-triangle-big1"},[t._v("XÃ/ PHƯỜNG/ THỊ TRẤN")]),e("v-flex",{staticClass:"right"},[e("div",{staticClass:"agencyFilter agencyFilter3"},[e("v-autocomplete",{attrs:{items:t.listDonViXa,placeholder:"Chọn đơn vị","item-text":"itemName","item-value":"itemCode","return-object":"","hide-no-data":"","hide-selected":!0,clearable:""},on:{change:function(t){}},model:{value:t.donViXa,callback:function(a){t.donViXa=a},expression:"donViXa"}})],1)])],1),e("div",{staticStyle:{width:"100%"}},[e("apexchart",{staticClass:"pieChartAgency",attrs:{type:"pie",width:"400",height:"220",options:t.chartOptionsSoQuanXa,series:t.statisticalXA_PHUONG}})],1)])])],1)],1),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("div",{staticClass:"pa-2 v-sheet theme--light",staticStyle:{border:"1px solid #dedede"}},[e("div",{staticClass:"row-header",staticStyle:{height:"38px",overflow:"hidden",background:"#fff"}},[e("div",{staticClass:"background-triangle-big1",staticStyle:{width:"228px"}},[t._v("THỐNG KÊ THEO THÁNG")]),e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{md7:""}},[e("div",{staticStyle:{display:"flex","align-items":"center",height:"40px"}},[e("span",{staticClass:"mx-3",class:{"groupcode-active":"SBN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(a){t.groupCode="SBN"}}},[t._v("SỞ BAN NGÀNH")]),e("span",{staticClass:"mx-3",class:{"groupcode-active":"QUAN_HUYEN"===String(t.groupCode)},staticStyle:{cursor:"pointer"},on:{click:function(a){t.groupCode="QUAN_HUYEN"}}},[t._v("HUYỆN/ THỊ XÃ/ THÀNH PHỐ")]),e("v-menu",{staticClass:"d-inline-block",attrs:{right:"","offset-x":""}},[e("span",{staticClass:"mx-3",class:{"groupcode-active":"XA_PHUONG"===String(t.groupCode)},attrs:{slot:"activator",small:"",color:"primary"},slot:"activator"},[t._v("\n                    XÃ/ PHƯỜNG/ THỊ TRẤN   "),e("v-icon",{staticClass:"text-bold",attrs:{size:"18"}},[t._v("arrow_drop_down")])],1),e("v-list",t._l(t.listDoiTuong,(function(a,s){return e("v-list-tile",{key:s,on:{click:function(e){return t.getStatisticsMonth("XA_PHUONG",a)}}},[e("v-list-tile-title",[t.quanhuyenSelected.itemCode===a.itemCode?e("v-icon",{staticClass:"blue--text",attrs:{size:"18"}},[t._v("check")]):t._e(),t._v("  "+t._s(a.itemName))],1)],1)})),1)],1)],1)]),e("v-flex",{staticClass:"text-right",attrs:{md5:""}},[e("v-select",{staticStyle:{width:"27%",display:"inline-block",margin:"0 10px"},attrs:{items:t.monthList,"item-text":"name","item-value":"value"},model:{value:t.monthSelected,callback:function(a){t.monthSelected=a},expression:"monthSelected"}}),e("v-select",{staticStyle:{width:"27%",display:"inline-block",margin:"0 10px"},attrs:{items:t.yearList,"item-text":"name","item-value":"value"},model:{value:t.yearSelected2,callback:function(a){t.yearSelected2=a},expression:"yearSelected2"}}),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("v-btn",t._g({staticClass:"mx-2",attrs:{text:t.isTable,small:"",color:"#1976d2"},on:{click:function(a){t.isTable=!1}}},s),[e("i",{staticClass:"fa fa-pie-chart white--text",attrs:{"aria-hidden":"true"}})])]}}])},[e("span",[t._v("Xem dạng biểu đồ")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("v-btn",t._g({staticClass:"mx-2",attrs:{text:!t.isTable,small:"",color:"#1976d2"},on:{click:function(a){t.isTable=!0}}},s),[e("i",{staticClass:"fa fa-table white--text",attrs:{"aria-hidden":"true"}})])]}}])},[e("span",[t._v("Xem dạng bảng biểu")])])],1)],1)],1),e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"my-3 report__table",staticStyle:{overflow:"hidden"},attrs:{xs12:""}},[t.isTable||t.isLoading?t._e():e("apexchart",{attrs:{type:"bar",height:t.heightChart,width:"100%",options:t.chartOptionsMonth,series:t.statisticalMonth,stacked:!0}}),t.isTable?e("v-flex",{staticClass:"text-center text-bold my-3",attrs:{xs12:""}},[t._v("\n              BÁO CÁO TỔNG HỢP TÌNH HÌNH GIẢI QUYẾT THỦ TỤC HÀNH CHÍNH "),e("br"),"0"!==String(t.monthSelected)?e("span",[t._v("Tháng "+t._s(t.monthSelected))]):t._e(),t._v(" Năm "+t._s(t.yearSelected2)+"\n            ")]):t._e(),t.isTable?e("table",{staticClass:"my-2",attrs:{"hide-default-footer":""}},[e("thead",[e("tr",[e("th",{staticClass:"text-center px-2",attrs:{rowspan:"3"}},[e("span",[t._v("STT")])]),e("th",{staticClass:"text-center px-2",attrs:{rowspan:"3"}},[e("span",[t._v("Đơn vị")])]),e("th",{staticClass:"text-center px-2 py-1",attrs:{colspan:"5"}},[e("span",[t._v("Nhận giải quyết")])]),e("th",{staticClass:"text-center px-2",attrs:{colspan:"7"}},[e("span",[t._v("Kết quả nhận giải quyết")])]),e("th",{staticClass:"text-center px-2",attrs:{colspan:"3"}},[e("span",[t._v("Đang giải quyết")])]),e("th",{staticClass:"px-2",staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[e("span",[t._v("Tạm dừng bổ sung điều kiện")])]),e("th",{staticClass:"px-2",staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[e("span",[t._v("Rút không giải quyết")])]),e("th",{staticClass:"px-2",staticStyle:{"text-align":"center"},attrs:{rowspan:"3",width:"60"}},[e("span",[t._v("Tỉ lệ sớm và đúng hạn")])])]),e("tr",[e("th",{staticClass:"text-center px-2 py-2",attrs:{rowspan:"2"}},[e("span",[t._v("Tổng số")])]),e("th",{staticClass:"text-center px-2",attrs:{rowspan:"2"}},[e("span",[t._v("Tồn trước")])]),e("th",{staticClass:"text-center px-2 py-1",attrs:{colspan:"3"}},[e("span",[t._v("Nhận trong kì")])]),e("th",{staticClass:"text-center px-2 py-1",attrs:{rowspan:"2"}},[e("span",[t._v("Tổng số")])]),e("th",{staticClass:"text-center px-2",attrs:{colspan:"3"}},[e("span",[t._v("Tình hình thực hiện")])]),e("th",{staticClass:"text-center px-2",attrs:{rowspan:"2"}},[e("span",[t._v("Từ chối giải quyết")])]),e("th",{staticClass:"text-center px-2",attrs:{colspan:"2"}},[e("span",[t._v("Trả kết quả")])]),e("th",{staticClass:"text-center px-2",attrs:{rowspan:"2"}},[e("span",[t._v("Tổng số")])]),e("th",{staticClass:"text-center px-2",attrs:{rowspan:"2"}},[e("span",[t._v("Còn hạn")])]),e("th",{staticClass:"text-center px-2",attrs:{rowspan:"2"}},[e("span",[t._v("Quá hạn")])])]),e("tr",[e("th",{staticClass:"text-center px-2"},[e("span",[t._v("Tổng số")])]),e("th",{staticClass:"text-center px-2"},[e("span",[t._v("Một cửa")])]),e("th",{staticClass:"text-center px-2"},[e("span",[t._v("Trực tuyến")])]),e("th",{staticClass:"text-center px-2"},[e("span",[t._v("Trước hạn")])]),e("th",{staticClass:"text-center px-2"},[e("span",[t._v("Đúng hạn")])]),e("th",{staticClass:"text-center px-2"},[e("span",[t._v("Quá hạn")])]),e("th",{staticClass:"text-center px-2"},[e("span",[t._v("Đã trả")])]),e("th",{staticClass:"text-center px-2"},[e("span",[t._v("Chưa trả")])])])]),e("tbody",[e("tr",{staticClass:"note__column"},[e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(1)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(2)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(3)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(4)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(5)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(6)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(7)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(8)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(9)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(10)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(11)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(12)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(13)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(14)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(15)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(16)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(17)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(18)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(19)")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v("(20)")])]),t._l(t.danhSachThongKeThang,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(s+1))]),e("td",{staticClass:"px-2",staticStyle:{padding:"8px 10px"},attrs:{align:"left"}},[t._v(t._s(a.govAgencyName))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.processCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.remainingCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.receivedCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.onegateCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.onlineCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.releaseCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.betimesCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.ontimeCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.overtimeCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.unresolvedCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.doneCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.releasingCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.processingCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.undueCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.overdueCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.waitingCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.cancelledCount))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(a.ontimePercentage))])])})),e("tr",{staticClass:"sum__column",staticStyle:{"font-weight":"bold"}},[e("td",{attrs:{align:"center",colspan:"2"}},[t._v("Tổng số")]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_3"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_4"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_5"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_6"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_7"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_8"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_9"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_10"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_11"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_12"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_13"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_14"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_15"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_16"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_17"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_18"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_19"]))]),e("td",{staticClass:"px-2",attrs:{align:"center"}},[t._v(t._s(t.totalCounter["total_20"]))])])],2)]):t._e()],1)],1)],1)])],1)],1)},l=[],r=e("bc3a"),c=e.n(r),d={components:{},data:function(){return{listDonViSBN:[],donViSBN:"",listDonViHuyen:[],donViHuyen:"",listDonViXa:[],donViXa:"",levelList:[{level:2,count:"0",levelName:2},{level:3,count:"0",levelName:3},{level:4,count:"0",levelName:4}],totalTTHC:0,groupCode:"SBN",isLoading:!1,yearSelected:(new Date).getFullYear(),yearSelected2:(new Date).getFullYear(),monthSelected:(new Date).getMonth()+1,distGroupSelected:"",isTable:!1,statisticalYear:[0,0],statisticalSBN:[0,0,0,0,0,0],statisticalQUAN_HUYEN:[0,0,0,0,0,0],statisticalXA_PHUONG:[0,0,0,0,0,0],statisticalMonth:[{name:"Hồ sơ nộp trực tiếp",data:[0,0]},{name:"Hồ sơ nộp trực tuyến",data:[0,0]}],chartOptionsYear:{labels:["Hoàn thành đúng hạn","Hoàn thành trễ hạn"],legend:{position:"bottom"},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},colors:["#00E396","#FF4560"]},chartOptionsMonth:{plotOptions:{bar:{barHeight:"100%",horizontal:!(window.innerWidth<600),dataLabels:{hideOverflowingLabels:!0}}},chart:{stacked:!0,locales:[{name:"en",options:{toolbar:{exportToSVG:"Tải xuống SVG",exportToPNG:"Tải xuống PNG"}}}]},colors:["#8BC34A","#2196F3"],stroke:{width:1,colors:["#fff"]},xaxis:{labels:{formatter:function(t){return t},trim:!1},min:1},yaxis:{title:{text:void 0},labels:{offsetX:0,offsetY:0}},dataLabels:{enabled:!0,formatter:function(t){return Number(t)>2?t:""},style:{fontSize:"11px",fontFamily:"Roboto, Helvetica, Arial, sans-serif",colors:["white"]}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}}},chartOptionsSoQuanXa:{labels:["Đang giải quyết trong hạn","Đang giải quyết quá hạn","Hoàn thành đúng hạn","Hoàn thành quá hạn","Xin rút","Chờ bổ sung"],colors:["#00E396","#FF4560","#008FFB","#775DD0","#2f8512","#FEB019"],states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}}},monthList:[{name:"Cả năm",value:0},{name:"Tháng 1",value:1},{name:"Tháng 2",value:2},{name:"Tháng 3",value:3},{name:"Tháng 4",value:4},{name:"Tháng 5",value:5},{name:"Tháng 6",value:6},{name:"Tháng 7",value:7},{name:"Tháng 8",value:8},{name:"Tháng 9",value:9},{name:"Tháng 10",value:10},{name:"Tháng 11",value:11},{name:"Tháng 12",value:12}],listDoiTuong:[],statistics:{betimesCount:1,cancelledCount:0,companyId:0,deniedCount:0,domainCode:"",domainName:"",doneCount:0,dossierOnline3Count:0,dossierOnline4Count:0,govAgencyCode:"",govAgencyName:"",groupId:1,insideCount:0,interoperatingCount:0,month:0,onegateCount:0,onlineCount:0,ontimeCount:0,ontimePercentage:0,outsideCount:0,overdueCount:0,overtimeCount:0,overtimeInside:0,overtimeOutside:0,processCount:0,processingCount:0,receiveDossierSatCount:0,receivedCount:0,releaseCount:0,releaseDossierSatCount:0,releasingCount:0,remainingCount:0,reporting:!1,saturdayCount:0,system:0,totalCount:0,undueCount:0,unresolvedCount:0,viaPostalCount:0,waitingCount:0,year:2020},danhSachThongKeThang:[],quanhuyenSelected:"",totalCounter:{},labelPieChartConfig:""}},computed:{yearList:function(){for(var t=[],a=(new Date).getFullYear(),e=0;e<=3;e++)t.push({name:"Năm "+(a-e),value:a-e});return t},heightChart:function(){return this.statisticalMonth[0].data.length<5?"300":"auto"}},created:function(){var t=this;try{t.labelPieChartConfig=labelPieChartConfig||""}catch(a){t.labelPieChartConfig=""}t.groupCode="SBN",this.$nextTick((function(){t.getDictgroups("SBN"),t.getDictgroups("QUAN_HUYEN"),t.getDictgroups("XA_PHUONG"),t.getStatisticsYear(),t.getStatisticsYearSBN(),t.getStatisticsYearQUAN_HUYEN(),t.getStatisticsYearXA_PHUONG(),t.getStatisticsMonth(t.groupCode),t.getLevelService()}))},watch:{yearSelected:function(){try{this.labelPieChartConfig=labelPieChartConfig||""}catch(t){this.labelPieChartConfig=""}this.getStatisticsYear(),this.getStatisticsYearSBN(),this.getStatisticsYearQUAN_HUYEN(),this.getStatisticsYearXA_PHUONG()},yearSelected2:function(){var t=this;"XA_PHUONG"===t.groupCode?t.getStatisticsMonth("XA_PHUONG",t.quanhuyenSelected):t.getStatisticsMonth(this.groupCode)},monthSelected:function(){var t=this;"XA_PHUONG"===t.groupCode?t.getStatisticsMonth("XA_PHUONG",t.quanhuyenSelected):t.getStatisticsMonth(this.groupCode)},groupCode:function(t){var a=this;"XA_PHUONG"!==t&&(a.quanhuyenSelected="",a.getStatisticsMonth(t))}},methods:{getLevelService:function(){var t=this,a={headers:{groupId:window.themeDisplay.getScopeGroupId()}};c.a.get("/o/rest/v2/serviceinfos/statistics/levels",a).then((function(a){var e=a.data;if(e.data){var s=0,n=e.data;for(var i in n)s+=parseInt(n[i]["count"]),2===n[i]["level"]?t.levelList[0]["count"]=n[i]["count"]:3===n[i]["level"]?t.levelList[1]["count"]=n[i]["count"]:4===n[i]["level"]&&(t.levelList[2]["count"]=n[i]["count"]);t.totalTTHC=s}})).catch((function(t){console.log(t),reject(t)}))},getDictgroups:function(t){var a=this,e=window.location.origin,s={url:e+"/o/rest/v2/dictcollections/REPORT_GROUP/dictgroups/"+t+"/dictitems",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"}};c.a.request(s).then((function(e){e.data.data?"SBN"===t?a.listDonViSBN=e.data.data:"QUAN_HUYEN"===t?(a.listDoiTuong=e.data.hasOwnProperty("data")?e.data.data:[],a.listDonViHuyen=e.data.hasOwnProperty("data")?e.data.data:[]):a.listDonViXa=e.data.hasOwnProperty("data")?e.data.data:[]:"SBN"===t?a.listDonViSBN=[]:"QUAN_HUYEN"===t?(a.listDoiTuong=[],a.listDonViHuyen=[]):a.listDonViXa=[]})).catch()},getStatisticsYear:function(){var t=this,a=window.location.origin,e={url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{year:t.yearSelected,month:0,domain:"total",agency:"total"}};c.a.request(e).then((function(a){a.data.data?(t.statistics=a.data.data[0],t.statisticalYear=[a.data.data[0].ontimeCount+a.data.data[0].betimesCount,a.data.data[0].overtimeCount]):(t.statisticalYear=[0,0],t.statistics={receivedCount:0,releaseCount:0,processingCount:0,overtimeCount:0})})).catch()},getStatisticsYearSBN:function(){var t=this;t.getLabelPieChartConfig();var a=window.location.origin,e={url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{year:t.yearSelected,month:0,domain:"total",agency:"total",groupCode:"SBN"}};c.a.request(e).then((function(a){a.data.data?t.labelPieChartConfig?t.statisticalSBN=t.labelPieChartConfig.map((function(t){return a.data.data[0][t["value"]]})):t.statisticalSBN=[a.data.data[0].undueCount,a.data.data[0].overdueCount,a.data.data[0].ontimeCount,a.data.data[0].overtimeCount,a.data.data[0].cancelledCount,a.data.data[0].waitingCount]:t.statisticalSBN=t.labelPieChartConfig?t.labelPieChartConfig.map((function(t){return 0})):[0,0,0,0,0,0]})).catch()},getStatisticsYearQUAN_HUYEN:function(){var t=this;t.getLabelPieChartConfig();var a=window.location.origin,e={url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{year:t.yearSelected,month:0,domain:"total",agency:"total",groupCode:"QUAN_HUYEN"}};c.a.request(e).then((function(a){a.data.data?t.labelPieChartConfig?t.statisticalQUAN_HUYEN=t.labelPieChartConfig.map((function(t){return a.data.data[0][t["value"]]})):t.statisticalQUAN_HUYEN=[a.data.data[0].undueCount,a.data.data[0].overdueCount,a.data.data[0].ontimeCount,a.data.data[0].overtimeCount,a.data.data[0].cancelledCount,a.data.data[0].waitingCount]:t.statisticalQUAN_HUYEN=t.labelPieChartConfig?t.labelPieChartConfig.map((function(t){return 0})):[0,0,0,0,0,0]})).catch()},getStatisticsYearXA_PHUONG:function(){var t=this;t.getLabelPieChartConfig();var a=window.location.origin,e={url:a+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",agency:"total",year:t.yearSelected,month:0,groupCode:"XA_PHUONG"}};c.a.request(e).then((function(a){a.data.data?t.labelPieChartConfig?t.statisticalXA_PHUONG=t.labelPieChartConfig.map((function(t){return a.data.data[0][t["value"]]})):t.statisticalXA_PHUONG=[a.data.data[0].undueCount,a.data.data[0].overdueCount,a.data.data[0].ontimeCount,a.data.data[0].overtimeCount,a.data.data[0].cancelledCount,a.data.data[0].waitingCount]:t.statisticalXA_PHUONG=t.labelPieChartConfig?t.labelPieChartConfig.map((function(t){return 0})):[0,0,0,0,0,0]})).catch()},getStatisticsMonth:function(t,a){var e=this;e.isLoading=!0;var s=window.location.origin,n={};"XA_PHUONG"===t?(e.groupCode="XA_PHUONG",e.quanhuyenSelected=a,n={url:s+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",year:e.yearSelected2,month:e.monthSelected,groupCode:t,parentAgency:a.itemCode}}):n={url:s+"/o/rest/statistics",headers:{groupId:window.themeDisplay.getScopeGroupId(),Accept:"application/json"},params:{domain:"total",year:e.yearSelected2,month:e.monthSelected,groupCode:t}},c.a.request(n).then((function(t){if(e.statisticalMonth[0].data=[],e.statisticalMonth[1].data=[],e.chartOptionsMonth.xaxis.categories=[],t.data.data){e.danhSachThongKeThang=t.data.data;var a=t.data.data[0];e.danhSachThongKeThang.shift();for(var s=0;s<e.danhSachThongKeThang.length;s++)e.statisticalMonth[0].data.push(t.data.data[s].onegateCount),e.statisticalMonth[1].data.push(t.data.data[s].onlineCount),e.chartOptionsMonth.xaxis.categories.push(t.data.data[s].govAgencyName),e.isLoading=!1;e.totalCounter["total_3"]=a.processCount,e.totalCounter["total_4"]=a.remainingCount,e.totalCounter["total_5"]=a.receivedCount,e.totalCounter["total_6"]=a.onegateCount,e.totalCounter["total_7"]=a.onlineCount,e.totalCounter["total_8"]=a.releaseCount,e.totalCounter["total_9"]=a.betimesCount,e.totalCounter["total_10"]=a.ontimeCount,e.totalCounter["total_11"]=a.overtimeCount,e.totalCounter["total_12"]=a.unresolvedCount,e.totalCounter["total_13"]=a.doneCount,e.totalCounter["total_14"]=a.releasingCount,e.totalCounter["total_15"]=a.processingCount,e.totalCounter["total_16"]=a.undueCount,e.totalCounter["total_17"]=a.overdueCount,e.totalCounter["total_18"]=a.waitingCount,e.totalCounter["total_19"]=a.cancelledCount,e.totalCounter["total_20"]=a.ontimePercentage}else e.setTotalCounter()})).catch()},setTotalCounter:function(){var t=this;t.statisticalMonth[0].data=[],t.statisticalMonth[1].data=[],t.totalCounter["total_3"]=0,t.totalCounter["total_4"]=0,t.totalCounter["total_5"]=0,t.totalCounter["total_6"]=0,t.totalCounter["total_7"]=0,t.totalCounter["total_8"]=0,t.totalCounter["total_9"]=0,t.totalCounter["total_10"]=0,t.totalCounter["total_11"]=0,t.totalCounter["total_12"]=0,t.totalCounter["total_13"]=0,t.totalCounter["total_14"]=0,t.totalCounter["total_15"]=0,t.totalCounter["total_16"]=0,t.totalCounter["total_17"]=0,t.totalCounter["total_18"]=0,t.totalCounter["total_19"]=0,t.totalCounter["total_20"]=0},getLabelPieChartConfig:function(){var t=this;t.labelPieChartConfig&&(t.chartOptionsSoQuanXa={labels:t.labelPieChartConfig.map((function(t){return t["text"]})),colors:t.labelPieChartConfig.map((function(t){return t["color"]})),states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}}})}}},u=d,p=e("2877"),h=e("6544"),C=e.n(h),v=e("c6a6"),g=e("8336"),_=e("b0af"),x=e("99d9"),f=e("0e8f"),m=e("132d"),y=e("a722"),S=e("8860"),b=e("ba95"),w=e("5d23"),N=e("e449"),T=e("b56d"),H=e("3a2f"),P=Object(p["a"])(u,o,l,!1,null,null,null),O=P.exports;C()(P,{VAutocomplete:v["a"],VBtn:g["a"],VCard:_["a"],VCardText:x["a"],VFlex:f["a"],VIcon:m["a"],VLayout:y["a"],VList:S["a"],VListTile:b["a"],VListTileTitle:w["b"],VMenu:N["a"],VSelect:T["a"],VTooltip:H["a"]});var A={name:"App",components:{Landing:O},data:function(){return{}}},U=A,G=e("7496"),k=e("549c"),D=Object(p["a"])(U,n,i,!1,null,null,null),V=D.exports;C()(D,{VApp:G["a"],VContent:k["a"]});var X=e("bb71");e("74ef");s["a"].use(X["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var Y=e("1321"),L=e.n(Y);s["a"].use(L.a),s["a"].component("apexchart",L.a),s["a"].config.productionTip=!1;var M=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():"";c.a.defaults.withCredentials=!0,c.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",c.a.defaults.headers.common["groupId"]=M,new s["a"]({vuetify:void 0,render:function(t){return t(V)}}).$mount("#app_report_charts")},"74ef":function(t,a,e){}});