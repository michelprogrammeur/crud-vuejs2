<template>
    <div class="form-container">
        <h3 class="section-title">Modification de la categorie {{ state.category.title }}</h3>

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
                <label class="form-label" for="title">Titre</label>
                <input class="form-input" type="text" id="title" name="title" v-model="state.category.title" placeholder="titre"/>
            </div>

            <div class="form-group">
                <label class="form-label" for="description">Description</label>
                <input class="form-input" type="text" id="description" name="description" v-model="state.category.description" placeholder="description ..."/>
            </div>

            <div class="right">
                <button class="btn-form-valide" @click.prevent="updateCategory(state.category.id)" type="submit">Valider</button>
                <button class="btn-form-back" @click.prevent="$router.back()">Annuler</button>
            </div>
        </form>
    </div>
</template>

<script>
    import VueNotifications from 'vue-notifications'
    import { categories_store } from '../../categoriesStore'

    export default {
        name: 'create-news',
        props: ['id'],
        data () {
            return {
                state: categories_store.state,
                errors: {}
            }
        },
        methods: {
            findData () {
                this.$http.get('/api/categories/' + this.id).then(res => {
                    if (res.status === 200) {
                        categories_store.setCategory(res.data)
                    }
                }, res => {
                    console.log('errors', res)
                });
            },
            updateCategory (id) {
                this.$http.put('/api/categories/' + id, this.state.category).then(res => {
                    if (res.status === 200) {
                        VueNotifications.success({title: 'Succes', message: "La categorie n° " + id + ' a bien été modifié.'})
                        this.$router.push('/categories')
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
            this.findData()
        }
    }
</script>