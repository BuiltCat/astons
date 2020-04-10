import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: '9whTPxXrl8zvW3gjiAaoPa59gFekKK9I'
})

import { Carousel, CarouselItem, Input } from "element-ui"

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Input);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
