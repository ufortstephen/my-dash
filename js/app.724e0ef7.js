(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"2ce2":function(t,e,a){"use strict";a("c891")},"3a7d":function(t,e,a){},"42a2":function(t,e,a){"use strict";a("46c2")},"46c2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Main")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2",attrs:{id:"sideNav"}},[a("Col2")],1),a("div",{staticClass:"col-md-10"},[a("Col10")],1)])])},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"name mb-5"},[a("h6",[a("span",[t._v("Chop")]),t._v("Chop "),a("span",[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"},on:{click:t.toggleNav}})])])]),a("div",[a("ul",[a("li",[a("router-link",{attrs:{to:"/dashboard"}},[a("i",{staticClass:"fa fa-money",attrs:{"aria-hidden":"true"}}),t._v(" Dashboard")])],1),a("li",[a("router-link",{attrs:{to:"/order"}},[a("i",{staticClass:"fa fa-folder-o",attrs:{"aria-hidden":"true"}}),t._v(" Order")])],1),a("li",[a("router-link",{attrs:{to:"/menu"}},[a("i",{staticClass:"fa fa-folder-open-o",attrs:{"aria-hidden":"true"}}),t._v(" Menu")])],1),a("li",[a("router-link",{attrs:{to:"/customers"}},[a("i",{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),t._v(" Customers")])],1),a("li",[a("router-link",{attrs:{to:"/payments"}},[a("i",{staticClass:"fa fa-paypal",attrs:{"aria-hidden":"true"}}),t._v(" Payments")])],1),a("li",[a("router-link",{attrs:{to:"/settings"}},[a("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}}),t._v(" Settings")])],1)])])])])},l=[],u={data:function(){return{}},methods:{toggleNav:function(){var t=document.getElementById("sideNav");console.log(t),t.classList.toggle("new")}}},d=u,f=(a("6857"),a("2877")),v=Object(f["a"])(d,c,l,!1,null,"52013292",null),h=v.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"nav"}},[a("TopNav"),a("router-view")],1)])},_=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-between"},[n("div",[n("div",{staticClass:"search"},[n("input",{attrs:{type:"text",name:"",id:"",placeholder:"Search"}}),n("span",[n("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])]),n("div",[n("a",{attrs:{href:""}},[t._v("About")]),n("a",{attrs:{href:""}},[t._v("Tools")]),n("a",{attrs:{href:""}},[t._v("Help")]),n("i",{staticClass:"fa fa-bell-o",attrs:{"aria-hidden":"true"}}),n("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"mike"},[t._v("Hello Steve "),n("img",{attrs:{src:a("b52d"),alt:""}})])])])])}],y={data:function(){return{}}},C=y,E=(a("42a2"),Object(f["a"])(C,p,b,!1,null,"b7418014",null)),w=E.exports,g={data:function(){return{}},components:{TopNav:w}},O=g,x=(a("5a70"),Object(f["a"])(O,m,_,!1,null,"0364db3e",null)),j=x.exports,S={data:function(){return{data:function(){return{}}}},methods:{changeWidth:function(){var t=document.getElementById("sideNav");console.log(t),t.classList.toggle("new")}},components:{Col2:h,Col10:j}},T=S,$=(a("c266"),Object(f["a"])(T,i,o,!1,null,null,null)),k=$.exports,F={data:function(){return{}},components:{Main:k}},D=F,A=(a("034f"),Object(f["a"])(D,s,r,!1,null,null,null)),M=A.exports,P=a("8c4f"),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[t._m(0),a("div",{staticClass:"py-3"},[a("DashboardInfo")],1),a("div",{staticClass:"order py-2"},[a("div",{staticClass:"row justify-content-between"},[a("div",{staticClass:"col-md-5"},[a("OrderSummary")],1),a("div",{staticClass:"col-md-5"},[a("Chart")],1)])])])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-between py-3"},[a("div",[a("h6",{staticClass:"text-one"},[t._v("Dashboard")]),a("p",{staticClass:"text-two"},[t._v("Lorem ipsum dolor sit amet labore!")])]),a("div",{staticClass:"d-flex filter justify-content-between"},[a("div",{staticClass:"mr-3 align-self-center"},[a("i",{staticClass:"fa fa-calendar",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"mr-3"},[a("h6",[t._v("Filter Mode")]),a("p",{staticClass:"date"},[t._v("01 Jan 2021 - 31 Jan 2021")])]),a("div",{staticClass:"align-self-center"},[a("i",{staticClass:"fa fa-level-down",attrs:{"aria-hidden":"true"}})])])])}],J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-content-between my-5"},[a("div",{staticClass:"inner"},[a("div",{staticClass:"d-flex info mr-5"},[a("div",{staticClass:"align-self-center"},[a("i",{staticClass:"fa fa-book fa-2x",attrs:{"aria-hidden":"true"}})]),a("div",[a("h6",[t._v("Total Oders")]),a("h6",{staticClass:"number"},[t._v("300 "),a("span",[t._v("10% up (30 days)")])])])])]),a("div",{staticClass:"inner"},[a("div",{staticClass:"d-flex info mr-5"},[a("div",{staticClass:"align-self-center"},[a("i",{staticClass:"fa fa-user fa-2x",attrs:{"aria-hidden":"true"}})]),a("div",[a("h6",[t._v("Total Customers")]),a("h6",{staticClass:"number"},[t._v("150 "),a("span",[t._v("4% up (30 days)")])])])])]),a("div",{staticClass:"inner"},[a("div",{staticClass:"d-flex info"},[a("div",{staticClass:"align-self-center"},[a("i",{staticClass:"fa fa-bitcoin fa-2x",attrs:{"aria-hidden":"true"}})]),a("div",[a("h6",[t._v("Total Revenue")]),a("h6",{staticClass:"number"},[t._v("450k "),a("span",[t._v("20% up (30 days)")])])])])])])])}],Y={data:function(){return{}}},B=Y,H=(a("b700"),Object(f["a"])(B,J,I,!1,null,"4ef8f9e8",null)),L=H.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white main p-3"},[a("div",{staticClass:"d-flex align-items-center justify-content-between"},[t._m(0),a("div",{staticClass:"button-container"},[a("button",{class:{buttonAct:t.buttonActive},on:{click:t.monthlyShow}},[t._v(" Monthly")]),a("button",{class:{buttonActTwo:t.buttonActiveTwo},on:{click:t.weeklyShow}},[t._v(" Weekly")]),a("button",{class:{buttonActThree:t.buttonActiveThree},on:{click:t.dailyShow}},[t._v(" Today ")])])]),a("div",{staticClass:"my-2"},[t.monthly?a("MonthlySummary"):t._e(),t.weekly?a("WeeklySummary"):t._e(),t.daily?a("DailySummary"):t._e()],1)])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h6",[t._v("Order Summary")]),a("p",[t._v("Your Summarized Order Summary")])])}],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table"},[a("thead",{staticClass:"text-center"},[a("th",[t._v(" Daily Summary "),a("span",{staticClass:"ml-4"},[t._v(" "+t._s(t.day)+"- "+t._s(t.month)+"- "+t._s(t.year))])])]),t._m(0)])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tbody",[a("tr",[a("td",{staticClass:"top",attrs:{scope:"row"}},[t._v("Total Orders")]),a("td",{attrs:{scope:"row"}},[t._v("10")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Total Sales")]),a("td",[t._v("10")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Pending Orders")]),a("td",[t._v("4")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Delivered Orders")]),a("td",[t._v("15")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Canceled Orders")]),a("td",[t._v("16")])])])}],G={data:function(){return{day:"",month:"",year:""}},methods:{getDay:function(){var t=new Date;this.day=t.getDate(),this.month=t.getMonth(),this.year=t.getFullYear()}},mounted:function(){this.getDay()}},K=G,Q=(a("eced"),Object(f["a"])(K,Z,q,!1,null,"35a5fe48",null)),U=Q.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table"},[a("thead",{staticClass:"text-center"},[a("th",[t._v(" Weekly Summary "),a("span",{staticClass:"ml-4"},[t._v(t._s(t.month)+" - "+t._s(t.year))])])]),t._m(0)])])},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tbody",[a("tr",[a("td",{staticClass:"top",attrs:{scope:"row"}},[t._v("Total Orders")]),a("td",{attrs:{scope:"row"}},[t._v("10")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Total Sales")]),a("td",[t._v("10")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Pending Orders")]),a("td",[t._v("4")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Delivered Orders")]),a("td",[t._v("15")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Canceled Orders")]),a("td",[t._v("16")])])])}],tt={data:function(){return{month:"",year:""}},methods:{getDate:function(){var t=new Date;this.month=t.getMonth(),this.year=t.getFullYear()}},mounted:function(){this.getDate()}},et=tt,at=(a("8b29"),Object(f["a"])(et,V,X,!1,null,"4b831b0c",null)),nt=at.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table"},[a("thead",{staticClass:"text-center"},[a("th",[t._v(" Monthly Summary "),a("span",{staticClass:"ml-4"},[t._v(t._s(t.month)+" - "+t._s(t.year))])])]),t._m(0)])])},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tbody",[a("tr",[a("td",{staticClass:"top",attrs:{scope:"row"}},[t._v("Total Orders")]),a("td",{attrs:{scope:"row"}},[t._v("10")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Total Sales")]),a("td",[t._v("10")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Pending Orders")]),a("td",[t._v("4")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Delivered Orders")]),a("td",[t._v("15")])]),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Canceled Orders")]),a("td",[t._v("16")])])])}],it={data:function(){return{month:"",year:""}},methods:{getDate:function(){var t=new Date;this.month=t.getMonth(),this.year=t.getFullYear()}},mounted:function(){this.getDate()}},ot=it,ct=(a("af3b"),Object(f["a"])(ot,st,rt,!1,null,"573a53f0",null)),lt=ct.exports,ut={data:function(){return{monthly:!1,weekly:!1,daily:!0,buttonActive:!1,buttonActiveTwo:!1,buttonActiveThree:!0}},methods:{monthlyShow:function(){this.daily=!1,this.weekly=!1,this.monthly=!0,this.buttonActive=!0,this.buttonActiveTwo=!1,this.buttonActiveThree=!1},dailyShow:function(){this.daily=!0,this.weekly=!1,this.monthly=!1,this.buttonActive=!1,this.buttonActiveTwo=!1,this.buttonActiveThree=!0},weeklyShow:function(){this.daily=!1,this.weekly=!0,this.monthly=!1,this.buttonActive=!1,this.buttonActiveTwo=!0,this.buttonActiveThree=!1}},components:{DailySummary:U,WeeklySummary:nt,MonthlySummary:lt}},dt=ut,ft=(a("a4cb"),Object(f["a"])(dt,R,z,!1,null,"0f9e585c",null)),vt=ft.exports,ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white chart"},[a("div",{staticClass:"d-flex justify-content-between"},[a("div",[a("h6",[t._v("Revenue")]),a("p",[t._v("Monthly Revenue")])]),a("div",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}}),a("select",{staticClass:"form-control",attrs:{name:"",id:""}},[a("option",[t._v("Monthly")]),a("option",[t._v("Weekly")]),a("option",[t._v("Daily")])])])])]),a("canvas",{attrs:{id:"myChart",width:"200",height:"102"}})])}],_t={data:function(){return{}},methods:{showChart:function(){var t=document.getElementById("myChart").getContext("2d");new Chart(t,{type:"bar",data:{labels:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],datasets:[{label:"2020",data:[8e4,73e3,75e3,1e5,24e3,77e3,28e3,52e3,1e4,9e4,7e4,94e3],backgroundColor:["#cc7d5e","#cc7d5e","#cc7d5e","#cc7d5e","#cc7d5e","#cc7d5e","#cc7d5e","#cc7d5e","#cc7d5e","#cc7d5e","#cc7d5e","#cc7d5e"],borderColor:["#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0"],borderWidth:1},{label:"2021",data:[3e4,23e3,47e3,23e3,2e4,45e3,16e3,69e3,5e4,22e3,2200,75e3],backgroundColor:["#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0","#F9E7E0"],borderColor:["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!1}}}})}},mounted:function(){this.showChart()}},pt=_t,bt=(a("ace3"),Object(f["a"])(pt,ht,mt,!1,null,"6c19304e",null)),yt=bt.exports,Ct={data:function(){return{}},components:{DashboardInfo:L,OrderSummary:vt,Chart:yt}},Et=Ct,wt=(a("2ce2"),Object(f["a"])(Et,N,W,!1,null,"14608bce",null)),gt=wt.exports,Ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h2",[t._v("Order Page")])])}],jt={name:"Home",components:{}},St=jt,Tt=Object(f["a"])(St,Ot,xt,!1,null,null,null),$t=Tt.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an Menu page")])])}],Dt={},At=Object(f["a"])(Dt,kt,Ft,!1,null,null,null),Mt=At.exports,Pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an Customers page")])])}],Wt={},Jt=Object(f["a"])(Wt,Pt,Nt,!1,null,null,null),It=Jt.exports,Yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an Payments page")])])}],Ht={},Lt=Object(f["a"])(Ht,Yt,Bt,!1,null,null,null),Rt=Lt.exports,zt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Zt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an Settngs page")])])}],qt={},Gt=Object(f["a"])(qt,zt,Zt,!1,null,null,null),Kt=Gt.exports;n["a"].use(P["a"]);var Qt=[{path:"/",name:"Dashboard",component:gt},{path:"/dashboard",name:"Dashboard",component:gt},{path:"/order",name:"Order",component:$t},{path:"/menu",name:"Menu",component:Mt},{path:"/customers",name:"Customers",component:It},{path:"/payments",name:"Payments",component:Rt},{path:"/settings",name:"Settings",component:Kt}],Ut=new P["a"]({mode:"history",base:"/",routes:Qt}),Vt=Ut;n["a"].config.productionTip=!1,new n["a"]({router:Vt,render:function(t){return t(M)}}).$mount("#app")},5702:function(t,e,a){},"5a70":function(t,e,a){"use strict";a("b8dd")},6857:function(t,e,a){"use strict";a("ffb1")},8172:function(t,e,a){},"85ec":function(t,e,a){},8849:function(t,e,a){},"8b29":function(t,e,a){"use strict";a("9715")},9715:function(t,e,a){},a4cb:function(t,e,a){"use strict";a("8849")},ace3:function(t,e,a){"use strict";a("8172")},af3b:function(t,e,a){"use strict";a("5702")},b52d:function(t,e,a){t.exports=a.p+"img/fb.801481e4.jpg"},b700:function(t,e,a){"use strict";a("fa10")},b8dd:function(t,e,a){},c266:function(t,e,a){"use strict";a("3a7d")},c891:function(t,e,a){},eced:function(t,e,a){"use strict";a("fa9f")},fa10:function(t,e,a){},fa9f:function(t,e,a){},ffb1:function(t,e,a){}});
//# sourceMappingURL=app.724e0ef7.js.map