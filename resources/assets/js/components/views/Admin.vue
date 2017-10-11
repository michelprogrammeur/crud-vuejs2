<template>
    <div class="page-crud">
        <section>
            <router-view></router-view>
        </section><!--
     --><aside>
            <sidebar-crud></sidebar-crud>
        </aside>
    </div>
</template>

<script>
    import SidebarCrud from '../shared/SidebarCrud.vue'

    export default {
        components: { SidebarCrud },
    }
</script>

<style>
    .page-crud {
        width: 100%;
    }
    .page-crud section, .page-crud aside{
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
    }
    .page-crud section {
        width: 75%;
        padding: 80px 40px 40px 40px;
    }
    .page-crud aside{
        width: 25%;
        padding: 90px 40px 40px 0;
    }
    @media screen and (max-width: 1024px) {
        .page-crud {
            display: flex;
            flex-direction: column;
        }
        .page-crud aside{
            order: 1;
            width: 100%;
            padding: 20px;
        }
        .page-crud section {
            order: 2;
            width: 100%;
            padding: 10px 5px;
        }
    }
</style>