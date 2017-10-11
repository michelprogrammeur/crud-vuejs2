<template>
    <div class="categories-list-container">
        <h3 class="section-title">Liste des categories</h3>
        <div class="categories-list-tools">
            <div class="button-create-container">
                <button @click.prevent="$router.push('/categories/create')">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Ajouter
                </button>
            </div><!--
     --><div class="categories-list-infos">
            <div class="categories-list-count">
                <p>Nombre de categories <span>{{ allCategoriesCount }}</span></p>
            </div>
        </div>
        </div>

        <div class="categories-list">
            <ul>
                <li class="categories-list-item" v-for="category in allCategories" :key="category.title" track-by="id">
                    <category :category="category" @delete="deleteCategory(category.id)"></category>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Category from './Category.vue'
    import CreateCategory from  './CreateCategory.vue'
    import VueNotifications from 'vue-notifications'
    import { categories_store } from '../../categoriesStore'

    export default {
        name: "categories-list",
        components: { Category, CreateCategory },
        data () {
            return {
                state: categories_store.state
            }
        },
        mounted () {
            this.fetchAllCategories()
        },
        computed: {
            allCategories () {
                return categories_store.getCategories()
            },
            allCategoriesCount () {
                return categories_store.countCategories()
            }
        },
        methods: {
            fetchAllCategories () {
                this.$http.get('api/categories').then((response) => {
                    if (response.status === 200) {
                        categories_store.receiveCategories(response.data)
                    }
                }, (error) => {

                })
            },
            deleteCategory (id) {
                this.$http.delete('api/categories/' + id).then((res) => {
                    VueNotifications.success({title: 'Succes', message: "L'élément à bien été supprimé"})
                    this.fetchAllCategories()
                }, (res) => {

                })
            },
        },
    }
</script>


<style>
    .categories-list-container {
        width: 100%;
    }
    .categories-list-tools {
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
    .categories-list-infos {
        padding: 10px 15px;
        width: 75%;
        text-align: right;
        display: inline-block;
        box-sizing: border-box;
    }
    .categories-list-infos p{
        padding: 10px 15px;
    }
    .categories-list {
        width: 100%;
    }
    .categories-list ul{
        width: 100%;
        padding: 0;
    }
    .categories-list ul{
        width: 100%;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .categories-list-item {
        width: 33.33%;
        list-style-type: none;
        text-decoration: none;
        padding: 15px;
        display: inline-block;
        box-sizing: border-box;
    }
    .categories-list-count {
        padding: 12px 20px;
        display: inline-block;
        background-color: #fff;
        text-align: right;
        border-radius: 3px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.07);
    }
    .categories-list-count p{
        margin: 0;
        padding: 0;
        font-size: 1.4rem;
        font-family: Arial, sans-serif;
        color: #2e3436;
    }
    .categories-list-count p span{
        margin: 0;
        font-size: 1.8rem;
        font-family: Arial, sans-serif;
        color: #3e83eb;
        font-weight: 800;
        padding: 0 5px;
    }

    @media screen and (max-width: 1280px) {
        .categories-list-item {
            width: 50%;
        }
    }
    @media screen and (max-width: 1024px) {
        .button-create-container {
            width: 100%;
            display: block;
        }
        .categories-list-item {
            width: 100%;
        }
        .button-create-container button {
            width: 100%;
        }
        .categories-list-infos {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .categories-list-count {
            text-align: center;
        }
        .categories-list-count {
            width: 100%;
            display: block;
        }
    }
</style>
