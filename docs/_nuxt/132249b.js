(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{1012:function(t,e){},1026:function(t,e){},1028:function(t,e){},1245:function(t,e,n){"use strict";n.r(e);var o=n(467).a,r=n(84),c=n(117),f=n.n(c),l=n(358),d=n(694),v=n(466),h=n(354),m=n(1243),_=n(344),w=n(697),y=n(1242),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("div",{staticClass:"text-center"},[n("vuetify-logo")],1),t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n        Welcome to the IPFS+FileUploader\n      ")]),t._v(" "),n("v-card-text",[n("p",[t._v("Upload your files up to 100MB into the ipfs and use them elsewhere.")]),t._v(" "),n("p",[t._v("\n          For more information check "),n("a",{attrs:{href:"/info",rel:"noopener noreferrer"}},[t._v("\n            Info\n          ")]),t._v(" page.\n        ")]),t._v(" "),n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{md:"10"}},[n("v-row",{staticClass:"mrg",attrs:{justify:"center"}},[n("v-icon",{attrs:{size:"60",color:"cyan darken-1"}},[t._v("mdi-file-upload")])],1),t._v(" "),n("v-row",{staticClass:"mrg",attrs:{justify:"space-around"}},[n("v-file-input",{attrs:{dense:"",type:"file"},on:{change:t.captureFile}})],1),t._v(" "),null!==t.ipfsHash?n("v-row",{staticClass:"mrg",attrs:{justify:"center"}},[t._v("Hash : "+t._s(t.ipfsHash))]):t._e(),t._v(" "),null!==t.ipfsHash?n("v-row",{staticClass:"mrg",attrs:{justify:"center"}},[n("a",{attrs:{href:"https://ipfs.io/ipfs/"+t.ipfsHash}},[n("v-icon",{attrs:{size:"50"}},[t._v("mdi-link")])],1)]):t._e()],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticStyle:{"margin-left":"1%"},attrs:{dark:"",rounded:"",color:"cyan darken-1"},on:{click:t.onSubmitFile}},[t._v("Upload!")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VuetifyLogo:n(535).default}),f()(component,{VBtn:l.a,VCard:d.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:h.a,VFileInput:m.a,VIcon:_.a,VRow:w.a,VSpacer:y.a})},420:function(t,e,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("445c8038",content,!0,{sourceMap:!1})},467:function(t,e,n){"use strict";(function(t){var o=n(535),r=n(699);e.a={components:{VuetifyLogo:o.default},data:function(){return{ipfsHash:null}},methods:{captureFile:function(e){var n=this;console.log(e);var o=e,r=new window.FileReader;r.readAsArrayBuffer(o),r.onloadend=function(){n.buffer=t(r.result),console.log(n.buffer)}},onSubmitFile:function(t){var e=this;t.preventDefault(),r.a.files.add(this.buffer,(function(t,n){t||(e.ipfsHash=n[0].hash)}))}}}}).call(this,n(360).Buffer)},468:function(t,e,n){"use strict";n(420)},469:function(t,e,n){var o=n(26)(!1);o.push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=o},506:function(t,e){},535:function(t,e,n){"use strict";n.r(e);n(468);var o=n(84),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"/ipfs-logo-vector-ice.svg"}})}),[],!1,null,null,null);e.default=component.exports},661:function(t,e){},699:function(t,e,n){"use strict";var o=new(n(700))({host:"ipfs.infura.io",port:5001,protocol:"https"});e.a=o},711:function(t,e){},713:function(t,e){},718:function(t,e){},720:function(t,e){},751:function(t,e){},752:function(t,e){},787:function(t,e){},830:function(t,e){},996:function(t,e){}}]);