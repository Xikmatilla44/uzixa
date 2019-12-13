import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router/routes'
import Antd from "ant-design-vue/es";
import "ant-design-vue/dist/antd.css";
import EvaIcons from 'vue-eva-icons'
import store from './store/store'

Vue.use(EvaIcons)
Vue.use(Antd);
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);
Object.defineProperty(Vue.prototype, '$axios', {value: axios});
Vue.use(BootstrapVue);


const router = new VueRouter({

    routes: Routes,
    mode: 'history'


});
router.beforeEach((to, from, next) => {

    const loggedIn = localStorage.getItem('token');

    if (loggedIn) {

        return next()

    }
    else if (!loggedIn && to.path !== '/') {
        return next({
            path: '/',
        })

    }

    // else if (!loggedIn && to.path !== '/') {
    //     return next({
    //         path: '/',
    //     })
    // }
    next();

});

new Vue({
    render: h => h(App),
    router: router,
    store,
}).$mount('#app')
