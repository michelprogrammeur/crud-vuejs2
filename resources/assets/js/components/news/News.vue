<template>
    <div class="news-container">
        <button class="news-bouton-delete" @click.prevent="deleteNews">
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>

        <div class="news-info">
            <div class="news-main">
                <h3 class="news-title">{{ news.title }}</h3>
                <p class="category-abstract-title">Extrait</p>
                <p class="news-abstract"> {{ news.abstract }}</p>
                <button class="news-button-show" type="button" @click.prevent="open">Lire</button>
            </div>
        </div>

        <div class="news-bouton-container">
            <button class="news-bouton-modify" @click.prevent="editNews(news.id)">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                Modifier
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            news: Object,
        },
        methods: {
            editNews (id) {
                this.$router.push('/posts/edit/' + id)
            },
            deleteNews() {
                let conf = window.confirm('Voulez-vous vraiment supprimer cet article ?')
                if (conf) {
                    this.$emit('delete')
                }
            },
            open: function () {
                this.$emit('open')
            }
        },

    }
</script>

<style>
    .news-container {
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0,0,0,0.07);
        overflow: hidden;
        position: relative;
        min-height: 200px;
        padding-bottom: 60px;
    }
    .news-title {
        font-size: 2rem;
        color: #144d68;
        font-weight: 700;
        margin: 0;
        padding: 20px;
    }
    .category-abstract-title {
        font-size: 1.3rem;
        padding: 0 20px;
        font-family: Arial, sans-serif;
        color: #758287;
        font-weight: 600;
        margin: 0 0 8px 0;
    }
    .news-abstract {
        font-size: 1.2rem;
        padding: 0 20px;
        font-family: Arial, sans-serif;
        color: #758287;
        margin: 0;
    }
    .news-bouton-delete {
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
    .news-bouton-delete:hover {
        transition: .3s;
        background-color: #aa222b;
    }
    .news-button-show {
        padding: 10px 2px;
        margin: 0 20px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: #3e83eb;
        font-size: 1.2rem;
        text-decoration: underline;
    }
    .news-button-show:hover {
        text-decoration: none;
    }
    .news-link a{
        padding: 15px 20px;
        display: inline-block;
        color: #2e3436;
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0;
        font-family: Arial, sans-serif;
    }
    .news-bouton-container {
        width: 100%;
        padding: 6px;
        text-align: right;
        border-top: 2px dashed #eef2F5;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .news-bouton-modify {
        background-color: #39c0d9;
        text-align: right;
        color: #fff;
        font-size: 1.3rem;
        border-radius: 3px;
        text-transform: Uppercase;
        padding: 15px 20px;
        border: none;
        transition: .3s;
        font-weight: 700;
        cursor: pointer;
    }
    .news-bouton-modify:hover {
        transition: all .3s;
        background-color: #3592aa;
    }
</style>