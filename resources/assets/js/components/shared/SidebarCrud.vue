<template>
    <div class="sidebar">
        <div class="sidebar-container">
            <ul>
                <li>
                    <router-link to="/admin">dashboard</router-link>
                </li>
                <li>
                    <router-link to="/posts">Articles</router-link>
                </li>
                <li>
                    <router-link to="/categories">Categories</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<style>
    .sidebar {
        display: inline-block;
        width: 100%;
    }
    .sidebar-container {
        display: inline-block;
        width: 100%;
        background-color: #fff;
    }
    .sidebar-container ul{
        padding: 0;
    }
    .sidebar-container ul li{
        padding: 0;
        display: block;
        border-bottom: 1px solid #efefef;
    }
    .sidebar-container ul li a{
        text-decoration: none;
        padding: 20px;
        text-transform: uppercase;
        color: #2e3436;
        font-family: Arial, sans-serif;
        font-weight: 600;
        display: block;
    }
    .router-link-exact-active {
        background-color: #d3dcea;
    }
</style>