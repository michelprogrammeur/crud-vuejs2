<template>
    <nav class="navbar-container">
        <ul>
            <li>
                <router-link :to="{name: 'root'}">Accueil</router-link>
            </li>
            <li>
                <router-link to="/admin">Dashboard</router-link>
            </li>
        </ul>
    </nav>
</template>

<style>
    .navbar-container {
        width: 100%;
        background-color: #fff;
        height: 51px;
    }
    .navbar-container ul{
        width: 100%;
        margin: 0;
        padding: 0%;
    }
    .navbar-container ul li{
        display: inline-block;
        margin: 0;
    }
    .navbar-container ul li a{
        padding: 17px 20px;
        display: inline-block;
        font-size: 1.4rem;
        font-weight: 600;
        color: #2e3436;
        margin: 0;
        text-decoration: none;
    }
</style>