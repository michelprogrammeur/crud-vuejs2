<template>
    <div class="news-list-container">
        <h3 class="section-title">Liste des articles</h3>
        <div class="news-list-tools">
            <div class="button-create-container">
                <button @click.prevent="$router.push('/posts/create')">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Ajouter
                </button>
            </div><!--
         --><div class="news-list-infos">
                <div class="news-list-count">
                    <p>Nombre d'articles <span>{{ countNews }}</span></p>
                </div><!--
             --><categories-select v-on:selectedEvent="getNewsByCategories(cat_store.categoryID)"></categories-select>
            </div>
        </div>

        <div class="news-list">
            <transition-group name="staggered-fade" tag="ul" v-on:before-enter="beforeEnter" v-on:enter="enter">
                <li class="news-list-item" v-for="(news, index) in allNews" :key="news.title" :data-index="index">
                    <news :news="news" @delete="deleteNews(news.id)" @open="showModal(news.id)"></news>
                    <transition name="fade">
                        <modal :news="news" @close="closeModal" v-if="openedModal == news.id" ></modal>
                    </transition>
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import News from './News.vue'
    import CreateNews from  './CreateNews.vue'
    import CategoriesSelect from '../news/CategoriesSelect.vue'
    import Modal from './Modal.vue'
    import VueNotifications from 'vue-notifications'
    import { categories_store } from '../../categoriesStore'
    import { news_store } from '../../newsStore'

    export default {
        name: "news-list",
        components: { News, CreateNews, CategoriesSelect, Modal },
        data () {
            return {
                openedModal: null,
                state: news_store.state,
                cat_store: categories_store.state,
            }
        },
        mounted () {
            this.fetchAllNews()
        },
        computed: {
            allNews () {
                return news_store.getNews()
            },
            countNews () {
                return news_store.countNews()
            }
        },
        methods: {
            showModal(id) {
                document.body.style.overflow = "hidden";
                this.openedModal = id
            },
            closeModal() {
                document.body.style.overflow = "visible";
                this.openedModal = null
            },
            fetchAllNews () {
                this.$http.get('api/posts').then((res) => {
                    if (res.status === 200) {
                        news_store.receiveNews(res.data)
                    }
                }, (res) => {

                })
            },
            getNewsByCategories: function (id) {
                this.state.news = []
                if (id === 0) {
                    this.fetchAllNews()
                }
                else {
                    this.$http.get('/api/posts/category/' + id).then((res) => {
                        news_store.receiveNews(res.data)
                    }, (res) => {
                        console.log('errors', res)
                    });
                }
            },
            deleteNews (id) {
                this.$http.delete('api/posts/' + id).then((res) => {
                    VueNotifications.success({title: 'Succes', message: "L'élément à bien été supprimé"})
                    this.fetchAllNews()
                }, (res) => {

                })
            },
            beforeEnter: function (el) {
                el.style.opacity = 0
            },
            enter: function (el, done) {
                let delay = el.dataset.index * 300
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 1},
                        { complete: done }
                    )
                }, delay)
            },
        },
        watch: {
            categoryID: function() {
                this.getNewsByCategories(this.cat_store.categoryID)
            }
        },
    }
</script>


<style>
    .news-list-container {
        width: 100%;
    }
    .news-list-tools {
        width: 100%;
    }
    .button-create-container {
        width: 25%;
        padding: 10px 15px;
        display: inline-block;
        box-sizing: border-box;
    }
    .button-create-container button {
        padding: 15px 20px;
        background-color: #3e83eb;
        border: none;
        font-size: 1.3rem;
        border-radius: 3px;
        text-transform: Uppercase;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
        transition: .3s;
    }
    .button-create-container button:hover {
        transition: .3s;
        background-color: #2d5cb0;
    }
    .news-list-infos {
        padding: 10px 15px;
        width: 75%;
        text-align: right;
        display: inline-block;
        box-sizing: border-box;
    }
    .news-list-infos p{
        padding: 10px 15px;
    }
    .news-list {
        width: 100%;
    }
    .news-list ul{
        width: 100%;
        padding: 0;
    }
    .news-list ul{
        width: 100%;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .news-list-item {
        width: 33.33%;
        list-style-type: none;
        text-decoration: none;
        padding: 15px;
        display: inline-block;
        box-sizing: border-box;
    }
    .news-list-count {
        padding: 12px 20px;
        display: inline-block;
        background-color: #fff;
        text-align: right;
        border-radius: 3px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.07);
    }
    .news-list-count p{
        margin: 0;
        padding: 0;
        font-size: 1.4rem;
        font-family: Arial, sans-serif;
        color: #2e3436;
    }
    .news-list-count p span{
        margin: 0;
        font-size: 1.8rem;
        font-family: Arial, sans-serif;
        color: #3e83eb;
        font-weight: 800;
        padding: 0 5px;
    }

    @media screen and (max-width: 1280px) {
        .news-list-item {
            width: 50%;
        }
    }
    @media screen and (max-width: 1024px) {
        .news-list-item {
            width: 100%;
        }
        .button-create-container {
            width: 100%;
            display: block;
        }
        .button-create-container button {
            width: 100%;
        }
        .news-list-infos {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
    @media screen and (max-width: 540px) {
        .news-list-count {
            text-align: center;
        }
        .news-list-count, .categories-select {
            width: 100%;
            display: block;
        }
        .categories-select {
            padding: 12px 0;
        }
    }

</style>
