<template>
    <div class="form-container">
        <h3 class="section-title">Ajouter un article</h3>

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
                <button class="btn-form-valide" @click.prevent="createNews" type="submit">Valider</button>
                <button class="btn-form-back" @click.prevent="$router.back()">Annuler</button>
            </div>
        </form>
    </div>
</template>

<script>
    import VueNotifications from 'vue-notifications'

    export default {
        name: 'create-news',
        data () {
            return {
                post: {
                    category_id: 0,
                },
                categories: [],
                errors: {}
            }
        },
        methods: {
            createNews () {
                this.$http.post('/api/posts/', this.post, 200).then(response => {
                    if (response.status === 200) {
                        VueNotifications.success({title: 'Succes', message: 'Votre article a bien été ajouté !'})
                        this.$router.push('/posts')
                    }
                }).catch(response => {
                    this.errors = response.data
                });
            },
            getCategories () {
                this.$http.get('/api/categories').then(response => {
                    if (response.status === 200) {
                        this.categories = response.data
                    }
                }, (response) => {

                })
            }
        },
        computed: {
            getErrors () {
                return this.errors
            }
        },
        created () {
            this.getCategories()
        }
    }
</script>

