import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'root',
            path: '/',
            component: require('./components/views/Home.vue'),
        }, {
            path: '/admin',
            component: require('./components/views/Admin.vue'),
            children: [
                {
                    path: '',
                    component: require('./components/Dashboard/Dashboard.vue'),
                }, {
                    path: '/posts',
                    component: require('./components/views/News.vue'),
                    children: [
                        {
                            path: '',
                            component: require('./components/news/NewsList.vue'),
                        }, {
                            path: ':id(\\d+)',
                            component: require('./components/news/NewsShow.vue'),
                        },  {
                            path: 'create',
                            component: require('./components/news/CreateNews.vue'),
                        }, {
                            path: 'edit/:id(\\d+)',
                            component: require('./components/news/EditNews.vue'),
                            props: true
                        }
                    ]
                }, {
                    path: '/categories',
                    component: require('./components/views/Categories.vue'),
                    children: [
                        {
                            path: '',
                            component: require('./components/categories/CategoriesList.vue'),
                        }, {
                            path: 'create',
                            component: require('./components/categories/CreateCategory.vue'),
                        }, {
                            path: 'edit/:id(\\d+)',
                            component: require('./components/categories/EditCategory.vue'),
                            props: true
                        }
                    ]
                }
            ]
        }
    ]

})