<template>
    <div class="form-container">
        <h3 class="section-title">Ajouter une catégorie</h3>

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
                <button class="btn-form-valide" @click.prevent="createCategory" type="submit">Valider</button>
                <button class="btn-form-back" @click.prevent="$router.back()">Annuler</button>
            </div>
        </form>
    </div>
</template>

<script>
    import VueNotifications from 'vue-notifications'
    import {categories_store} from "../../categoriesStore";

    export default {
        name: 'create-category',
        data () {
            return {
                state: categories_store.state,
                errors: {}
            }
        },
        methods: {
            createCategory () {
                this.$http.post('/api/categories/', this.state.category, 200).then(res => {
                    if (res.status === 200) {
                        VueNotifications.success({title: 'Succes', message: 'Votre article a bien été ajouté !'})
                        this.state.category = {}
                        this.$router.push('/categories')
                    }
                }).catch(res => {
                    this.errors = res.data
                });
            },
        },
        computed: {
            getErrors () {
                return this.errors
            }
        },
    }
</script>
