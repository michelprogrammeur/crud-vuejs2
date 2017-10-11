<template>
    <div class="category-container">
        <button class="category-bouton-delete" @click.prevent="deleteCategory">
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>

        <div class="category-info">
            <div class="category-main">
                <h3 class="category-title">{{ category.title }}</h3>
                <p class="category-description-title">Description</p>
                <p class="category-description">{{ category.description }}</p>
            </div>
        </div>

        <div class="category-bouton-container">
            <button class="category-bouton-modify" @click.prevent="editCategory(category.id)">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                Modifier
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            category: Object,
        },
        methods: {
            editCategory (id) {
                this.$router.push('/categories/edit/' + id)
            },
            deleteCategory() {
                let confirm = window.confirm('Voulez-vous vraiment supprimer cette catégorie ?')
                if (confirm) {
                    this.$emit('delete')
                }
            }
        },

    }
</script>

<style>
    .category-container {
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0,0,0,0.07);
        overflow: hidden;
        position: relative;
        min-height: 140px;
        padding-bottom: 60px;
    }
    .category-title {
        font-size: 2rem;
        color: #144d68;
        font-weight: 700;
        margin: 0;
        padding: 20px;
    }
    .category-description-title {
        font-size: 1.3rem;
        padding: 0 20px;
        font-family: Arial, sans-serif;
        color: #758287;
        font-weight: 600;
        margin: 0 0 8px 0;
    }
    .category-description {
        font-size: 1.2rem;
        padding: 0 20px;
        font-family: Arial, sans-serif;
        color: #758287;
        margin: 0;
    }
    .category-bouton-delete {
        position: absolute;
        background-color: #ff2b3b;
        text-align: center;
        color: #fff;
        border-radius: 3px;
        width: 40px;
        height: 40px;
        top: 6px;
        right: 6px;
        border: none;
        font-size: 1.8rem;
        transition: .3s;
        cursor: pointer;
    }
    .category-bouton-delete:hover {
        transition: .3s;
        background-color: #aa222b;
    }
    .category-link {
        padding: 0;
        margin: 0;
    }
    .category-link a{
        padding: 15px 20px;
        display: inline-block;
        color: #2e3436;
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0;
        font-family: Arial, sans-serif;
    }
    .category-bouton-container {
        width: 100%;
        padding: 6px;
        text-align: right;
        border-top: 2px dashed #eef2F5;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .category-bouton-modify {
        background-color: #39c0d9;
        text-align: right;
        color: #fff;
        font-size: 1.3rem;
        border-radius: 3px;
        text-transform: Uppercase;
        padding: 15px 20px;
        border: none;
        transition: all .3s;
        cursor: pointer;
        font-weight: 700;
    }

    .category-bouton-modify:hover {
        transition: all .3s;
        background-color: #3592aa;
    }
</style>