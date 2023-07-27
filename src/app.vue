<script setup lang="ts">
import '@/style/app.css';
</script>

<template>
    <header>
        <router-link to="/unicode">Unicode</router-link>
        <router-link to="/calc">Calculator</router-link>
        <router-link to="/hex">Hex Editor</router-link>
    </header>
    <body>
        <router-view />
    </body>
    <footer>
    </footer>
</template>

