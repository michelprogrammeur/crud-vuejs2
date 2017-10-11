<template>
    <div class="overlay" @click.self="close">
        <div :id="'modal' + news.id" class="modal-container">
            <div class="description-container">
                <div class="description-button-container">
                    <button type="button" class="close-button" @click.prevent="close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="description-parts">
                    <h2>{{ news.title }}</h2>
                    <span>Publié le: {{ news.created_at}}</span>
                    <p>{{ news.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            news: Object
        },
        methods: {
            close: function () {
                this.$emit('close')
            }
        }
    }
</script>

<style>
    .overlay {
        background-color: rgba(9, 9, 9, 0.73);
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8000;
        display: flex;
        align-items: center;
    }
    .modal-container {
        width: 30%;
        margin: auto;
        background-color: #fff;
        border-radius: 3px;
    }
    .description-container {
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
    }
    .description-button-container {
        width: 100%;
        text-align: right;
    }
    .close-button {
        background: transparent;
        border: none;
        padding: 3px;
        box-sizing: border-box;
        font-size: 2.2rem;
        text-align: center;
        color: #ff2b3b;
        cursor: pointer;
        transition: .3s;
        outline: none;
    }
    .close-button:hover {
        transition: .3s;
        color: #aa222b;
    }
    .description-parts {
        width: 100%;
    }
    .description-parts h2 {
        font-size: 3rem;
        font-weight: 700;
        display: block;
        color: #144d68;
    }
    .description-parts span {
        font-size: 1.8rem;
        font-style: italic;
        display: block;
        color: #b8bab0;
        font-family: Arial, sans-serif;
    }
    .description-parts p {
        padding: 15px 0;
        font-size: 1.4rem;
        display: block;
        color: #686c6f;
        font-family: Arial, sans-serif;
        line-height: 2rem
    }

    @media screen and (max-width: 960px) {
        .modal-container {
            width: 90%;
        }
    }
</style>