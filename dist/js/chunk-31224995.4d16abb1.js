(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31224995"],{"6c22":function(e,t,s){"use strict";s("ac63")},a55b:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"login_container",style:"background-image:url("+e.loginImg+")"},[s("div",{staticClass:"form"},[s("LoginForm")],1)])])},r=[],a=s("1bab");function o(){return Object(a["a"])({url:"getLoginImg"})}function i(e){return Object(a["a"])({url:"login?username="+e.username+"&password="+e.password,method:"post"})}function c(e){return Object(a["a"])({url:"addShoppingCart",method:"post",data:e})}var u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login_form"},[s("el-image",{attrs:{src:e.logoImg,fit:"fit"}}),s("div",{staticClass:"title"},[e._v("账号密码登录")]),s("el-input",{staticClass:"username",attrs:{size:"large",placeholder:"请输入用户名",clearable:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),s("el-input",{staticClass:"password",attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),s("el-checkbox",{staticClass:"rememberme",model:{value:e.isRememberMe,callback:function(t){e.isRememberMe=t},expression:"isRememberMe"}},[e._v("两周内免登录")]),s("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),s("el-button",{staticClass:"register_btn",on:{click:e.toRegister}},[e._v("注册VIVO账号")]),s("p",{staticClass:"tips"},[e._v("如果您未注册过VIVO账号，则有些功能您可能无法使用，点击注册VIVO账号，体验全新功能。")])],1)},l=[],m={props:{logoImg:{type:String,default:"https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.1f42884.png.webp"}},data:function(){return{isRememberMe:!1,user:{username:"",password:""},count:0,timer:null}},methods:{toRegister:function(){this.$router.push("/register").catch((function(e){return e}))},login:function(){var e=this;this.loginCheck()&&i(this.user).then((function(t){console.log(t),t&&200===t.status&&1===t.data.status?(e.$message({message:t.data.msg+"正在为您跳转至首页！",center:!0,type:"success"}),e.$store.commit("setUser",e.user),console.log(),e.addShoppingCart(),e.$router.push("/home").catch((function(e){return e}))):e.$message({message:t.data.msg,center:!0,type:"warning"})}))},loginCheck:function(){return""===this.user.username||null===this.user.username?(this.$message({message:"用户名不能为空！",center:!0,type:"error"}),!1):""!==this.user.password&&null!==this.user.password||(this.$message({message:"密码不能为空！",center:!0,type:"error"}),!1)},addShoppingCart:function(){var e=this,t=JSON.parse(localStorage.getItem("goodsList"));t&&(this.count=t.length,this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){e.count>0?(e.count--,t[e.count].username=e.user.username,c(t[e.count]).then((function(e){return e}))):(localStorage.clear("goodsList"),clearInterval(e.timer))}),100))}}},g=m,p=(s("b752"),s("2877")),d=Object(p["a"])(g,u,l,!1,null,null,null),h=d.exports,f={components:{LoginForm:h},data:function(){return{loginImg:""}},mounted:function(){this.getLoginImg()},methods:{getLoginImg:function(){var e=this;o().then((function(t){e.loginImg=t.data.loginImg}))}}},b=f,v=(s("6c22"),Object(p["a"])(b,n,r,!1,null,"3ea840f0",null));t["default"]=v.exports},ac63:function(e,t,s){},b752:function(e,t,s){"use strict";s("c917")},c917:function(e,t,s){}}]);
//# sourceMappingURL=chunk-31224995.4d16abb1.js.map