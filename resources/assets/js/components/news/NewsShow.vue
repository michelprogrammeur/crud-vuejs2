<template>
    <div class="news-container">
        {{ $route.params.id }}
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data () {
            return {
                post: ''
            }
        },
        methods: {
            findData () {
                this.$http.get('api/posts', this.id).then((res) => {
                    this.post = res.data
                }, (res) => {

                })
            }
        }
    }
</script>