(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-303d0c7c"],{"0309":function(e,s,t){},5941:function(e,s,t){},"73cf":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"register"},[t("div",{staticClass:"register_container",style:"background-image:url("+e.registerImg+")"},[t("div",{staticClass:"form"},[t("RegisterForm")],1)])])},a=[],n=t("1bab");function i(){return Object(n["a"])({url:"getLoginImg"})}function o(e){return Object(n["a"])({url:"addUser?username="+e.username+"&password="+e.password,method:"post",data:e})}var c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"register_form"},[t("el-image",{attrs:{src:e.logoImg,fit:"fit"}}),t("div",{staticClass:"title"},[e._v("注册VIVO账号")]),t("el-input",{staticClass:"username",attrs:{size:"large",placeholder:"请输入用户名",clearable:""},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}}),t("el-input",{staticClass:"password",attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}}),t("el-input",{staticClass:"password",attrs:{placeholder:"请再次输入密码","show-password":""},model:{value:e.rePassword,callback:function(s){e.rePassword=s},expression:"rePassword"}}),t("el-checkbox",{staticClass:"agree",model:{value:e.isAgree,callback:function(s){e.isAgree=s},expression:"isAgree"}},[e._v("同意"),t("a",{attrs:{href:"javascript:void(0);"}},[e._v("《免责申明》")])]),t("el-button",{staticClass:"register_btn",attrs:{disabled:!e.isAgree},on:{click:e.addUser}},[e._v("注册VIVO账号")]),t("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:e.toLogin}},[e._v("登录")]),t("p",{staticClass:"tips"},[e._v("注册后您将开启VIVO商城的下订单、购买、等功能，抓紧时间注册吧。")])],1)},u=[],l={props:{logoImg:{type:String,default:"https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.1f42884.png.webp"}},data:function(){return{rePassword:"",isAgree:!1,user:{username:"",password:""}}},methods:{addUser:function(){var e=this;this.checkRegister()&&o(this.user).then((function(s){console.log(s),s&&200===s.status&&2===s.data.status?(e.$message({message:s.data.msg+"正在为您跳转至登陆页面！",center:!0,type:"success"}),e.$router.push("/login").catch((function(e){return e}))):e.$message({message:s.data.msg,center:!0,type:"warning"})}))},checkRegister:function(){return this.user.username.length<3?(this.$message({message:"用户名长度必须大于等于3位！",center:!0,type:"error"}),!1):this.user.password.length<6?(this.$message({message:"密码必须大于等于6位！",center:!0,type:"error"}),!1):this.rePassword===this.user.password||(this.$message({message:"两次输入的密码不一致，请重新输入！",center:!0,type:"error"}),!1)},toLogin:function(){this.$router.push("/login").catch((function(e){return e}))}}},g=l,d=(t("7b1a"),t("2877")),m=Object(d["a"])(g,c,u,!1,null,null,null),p=m.exports,h={components:{RegisterForm:p},data:function(){return{registerImg:""}},mounted:function(){this.getRegisterImg()},methods:{getRegisterImg:function(){var e=this;i().then((function(s){e.registerImg=s.data.loginImg}))}}},f=h,v=(t("cea6"),Object(d["a"])(f,r,a,!1,null,"0dcb6916",null));s["default"]=v.exports},"7b1a":function(e,s,t){"use strict";t("5941")},cea6:function(e,s,t){"use strict";t("0309")}}]);
//# sourceMappingURL=chunk-303d0c7c.c143e24c.js.map