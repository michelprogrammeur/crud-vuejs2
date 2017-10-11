<template>
    <div class="form-container">
        <h3 class="section-title">Modification de l'article {{ post.title }}</h3>

        <div class="errors-container">
            <transition-group name="fade">
                <div class="errors" v-for="(error, key) in getErrors" :key="key">
                    <h3>{{ key }}</h3>
                    <p>{{ error[0] }}</p>
                </div>
            </transition-group>
        </div>

        <form method="post">
            <div class="form-group">
                <label class="form-label" for="category_id">Catégorie</label>
                <select class="form-select" id="category_id" name="category_id" v-model="post.category_id">
                    <option selected="selected" :value="0" disabled>Choisir une catégorie</option>
                    <option v-for="category in categories" :value="category.id">{{ category.title }}</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label" for="title">Titre</label>
                <input class="form-input" type="text" id="title" name="title" v-model="post.title" placeholder="titre"/>
            </div>

            <div class="form-group">
                <label class="form-label" for="abstract">Extrait</label>
                <input class="form-input" type="text" id="abstract" name="abstract" v-model="post.abstract" placeholder="extrait ..."/>
            </div>

            <div class="form-group">
                <label class="form-label" for="content">Contenu</label>
                <textarea class="form-input" id="content" v-model="post.content" placeholder="contenu ..."></textarea>
            </div>

            <div class="right">
                <button class="btn-form-valide" @click.prevent="updateNews(post.id)" type="submit">Modifier</button>
                <button class="btn-form-back" @click.prevent="$router.back()">Annuler</button>
            </div>
        </form>
    </div>
</template>

<script>
    import VueNotifications from 'vue-notifications'

    export default {
        name: 'create-news',
        props: ['id'],
        data () {
            return {
                post: {},
                categories: [],
                errors: {}
            }
        },
        methods: {
            getCategories () {
                this.$http.get('/api/categories').then(response => {
                    if (response.status === 200) {
                        this.categories = response.data
                    }
                }, (response) => {

                })
            },
            findData () {
                this.$http.get('/api/posts/' + this.id).then(res => {
                    if (res.status === 200) {
                        this.post = res.data
                    }
                }, res => {
                    console.log('errors', res)
                });
            },
            updateNews (id) {
                this.$http.put('/api/posts/' + id, this.post).then(res => {
                    if (res.status === 200) {
                        VueNotifications.success({title: 'Succes', message: "L'article n° " + id + ' a bien été modifié.'})
                        this.$router.push('/posts')
                    }
                }).catch(response => {
                    this.errors = response.data
                })
            }
        },
        computed: {
            getErrors () {
                return this.errors
            }
        },
        created () {
            this.getCategories ()
            this.findData()
        }
    }
</script>

<style>
    .fade-enter-active {
        opacity: 1;
        transition: 1s;
    }
    .fade-leave-active {
        transition: all .3s;
        opacity: 1;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .form-container {
        width: 100%;
        margin: auto;
        padding-top: 10px;
    }
    .form-container form{
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0,0,0,0.07);
        border-radius: 3px;
    }
    .form-group {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
    .form-label {
        font-size: 2rem;
        display: block;
    }
    .form-input {
        border: 1px solid #dddddd;
        border-radius: 3px;
        padding: 12px;
        box-sizing: border-box;
        display: block;
        width: 100%;
    }
    .btn-form-valide {
        padding: 15px 20px;
        background-color: #20bf41;
        border: none;
        font-size: 1.3rem;
        border-radius: 3px;
        text-transform: Uppercase;
        color: #fff;
        font-weight: 700;
    }
    .btn-form-back {
        padding: 15px 20px;
        background-color: #dddddd;
        border: none;
        font-size: 1.3rem;
        border-radius: 3px;
        text-transform: Uppercase;
        color: #fff;
        font-weight: 700;
    }
    .right {
        text-align: right;
        padding: 20px 20px 0 20px;
    }
    .form-select {
        width: 100%;
        padding: 12px;
        background: transparent;
        border: 1px solid #dddddd;
    }
    .errors-container {
        width: 100%;
    }
    .errors {
        width: 100%;
        background-color: #ff2b3b;
        color: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        border-radius: 3px;
        margin-bottom: 6px;
    }
    .errors h3 {
        font-size: 1.8rem;
        margin: 0;
    }
    .errors p {
        font-size: 1.3rem;
        margin: 0;
        padding: 10px 0;
    }
</style>
