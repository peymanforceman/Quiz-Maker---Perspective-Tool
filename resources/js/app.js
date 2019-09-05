import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
require('./bootstrap');
import App from './App.vue'

window.axios = require('axios');
Vue.prototype.$http = axios
window.axios.defaults.baseURL = document.head.querySelector('meta[name="api-base-url"]').content
window.token = localStorage.getItem('access_token');

// Globally Registered Components
import './globalComponents.js'

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

// for form validation
import {Form, HasError, AlertError} from 'vform'

window.Form = Form;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')