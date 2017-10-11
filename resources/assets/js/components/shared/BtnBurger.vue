<template>
    <div class="icone-container">
        <button @click="burgerOpen" class="burger">Menu</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                visible: false,
            }
        },
        methods: {
            burgerOpen () {
                this.$emit('burgerOpen')
            }
        }
    }
</script>

<style>
    .icone-container {
        width: 100%;
        text-align: right;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .burger {
        padding: 15px;
        display: none;
    }
    @media screen and (max-width: 960px) {
        .burger {
            display: inline-block;
        }
    }
</style>