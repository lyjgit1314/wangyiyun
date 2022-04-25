import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入适配文件
import './components/flexible'
import 'amfe-flexible';

// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 引入业务请求api
import { request } from "./common/http.js";

// Vue.prototype.$request = request;
// 将请求挂载在vue原型上 ，可以全局使用
Vue.prototype.$api = request;


// 在手机打印错误信息
import Vconsole from 'vconsole';
let vConsole = new Vconsole();
export default vConsole



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  components:{
    App  //在 index.html页面不使用这个组件，就会返回 We're sorry but demo3 doesn't work properly without JavaScript enabled. Please enable it to continue.
   }
}).$mount('#app')
