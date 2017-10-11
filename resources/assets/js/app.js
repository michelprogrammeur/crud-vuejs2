
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'
import { router } from './router'
import Navbar from './components/shared/Navbar.vue'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'

const toastTypes = {
    success: 'success',
    error: 'error',
    info: 'info',
    warn: 'warn'
}
miniToastr.init({types: toastTypes})

function toast ({title, message, type, timeout, cb}) {
    return miniToastr[type](message, title, timeout, cb)
}

const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
}
VueNotifications.config.timeout = 0
Vue.use(VueNotifications, options)


const app = new Vue({
    el: '#app',
    router,
    components: { Navbar },
    ready () { //'mounted' instade of ready for Vue 2.0
        miniToastr.init()//or "miniToastr.init(miniToastrConfig)" if you want to specify configuration
    }
});
