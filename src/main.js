// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../static/css/global.css'
import Axios from 'axios'
import { Button } from 'vant';
import { Image } from 'vant';
import { Loading } from 'vant';
import { Divider } from 'vant';
import { Field } from 'vant';
import { Card } from 'vant';
import { SubmitBar } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Popup } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Col, Row } from 'vant';
import { NavBar } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);

Vue.use(Radio);
Vue.use(RadioGroup);

Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.use(SubmitBar);
Vue.use(Card);

Vue.use(Field);
Vue.use(Divider);

Vue.use(Image);
Vue.use(Loading);
Vue.prototype.$axios = Axios;
Vue.use(Mint);
Vue.use(Button);
Vue.config.productionTip = false

NProgress.configure({
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach((to, from, next) => {
  if (from.name == 'shoppingCar') {
    localStorage.removeItem('flag')
  }
  
  // 每次切换页面时，调用进度条
  NProgress.start();

  next();
});

router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


