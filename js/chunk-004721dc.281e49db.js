(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-004721dc"],{"793c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{wrap:""}},[t._v(" "+t._s(t.id)+" "),i("v-snackbar",{attrs:{top:"",timeout:t.snackTimeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" "),i("v-btn",{attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" 關閉 ")])],1)],1)],1)},n=[],a={data:function(){return{snackTimeout:3e3,snackbarText:"",snackbar:!1}},methods:{triggerRouter:function(){this.id=this.$route.params.pathMatch,console.log(this.id)}},computed:{id:function(){return console.log(this.$route.params.pathMatch),this.$route.params.pathMatch}}},o=a,c=i("2877"),r=i("6544"),u=i.n(r),h=i("8336"),l=i("a523"),d=i("a722"),v=i("ade3"),p=(i("a9e3"),i("caad"),i("ca71"),i("8dd9")),m=i("a9ad"),f=i("7560"),k=i("f2e7"),b=i("fe6c"),g=i("58df"),T=i("80d2"),w=i("d9bd"),_=Object(g["a"])(p["a"],m["a"],k["a"],Object(b["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:f["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,s=t.footer,n=t.insetFooter,a=t.left,o=t.right,c=t.top;return{paddingBottom:Object(T["f"])(i+s+n),paddingLeft:this.app?Object(T["f"])(a):void 0,paddingRight:this.app?Object(T["f"])(o):void 0,paddingTop:Object(T["f"])(e+c)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(w["e"])("auto-height",this),0==this.timeout&&Object(w["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(T["k"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(v["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(T["k"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,i=e(this.color,{staticClass:"v-snack__wrapper",class:p["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",i,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),B=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=B.exports;u()(B,{VBtn:h["a"],VContainer:l["a"],VLayout:d["a"],VSnackbar:_})},ca71:function(t,e,i){}}]);
//# sourceMappingURL=chunk-004721dc.281e49db.js.map