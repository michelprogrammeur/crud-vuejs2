<template>
    <div class="categories-select">
        <label for="select-cat">Catégories</label>
        <select id="select-cat" v-model="selected">
            <option :value="0">Tout voir</option>
            <option v-for="category in categories" :value="category.id">{{ category.title }}</option>
        </select>
    </div>
</template>


<script>
    import { categories_store } from '../../categoriesStore'

    export default{
        data() {
            return {
                //state: categories_store.state,
                categories: [],
                selected: 0,
            }
        },
        methods: {
            getCategories: function() {
                this.$http.get('/api/categories').then(response => {
                    let allCategories = response.body
                    for (let i = 0; i < allCategories.length; i++) {
                        let singleCategory = allCategories[i]
                        this.categories.push({
                            id: singleCategory.id,
                            title: singleCategory.title
                        })
                    }
                }, (response) => {
                    console.log("erreur")
                })
            }
        },
        mounted() {
            this.getCategories()
        },
        watch: {
            selected: function () {
                categories_store.setCategoryID(this.selected)
                this.$emit('selectedEvent')
            }
        }
    }
</script>

<style>
    .categories-select {
        display: inline-block;
        text-align: right;
    }
    .categories-select label {
        padding: 15px 20px;
        color: #2e3436;
        display: inline-block;
        font-family: Arial, sans-serif;
        font-size: 1.4rem;
    }
    .categories-select select{
        background-color: #fff;
        padding: 15px 20px;
        border: none;
        font-size: 1.3rem;
        border-radius: 3px;
        color: #2e3436;
        font-weight: 700;
        display: inline-block;
        box-shadow: 0 3px 6px rgba(0,0,0,0.07);
        cursor: pointer;
    }
</style>