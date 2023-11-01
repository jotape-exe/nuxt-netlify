<template>
    <div>
        <h1>Eu sou o Layout Padrao </h1>
        <br> 
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/auth">Auth</NuxtLink>
        <NuxtLink to="/products">Products</NuxtLink>
        <NuxtLink to="/products/1">Products/1</NuxtLink>
        <NuxtLink to="/enums">Enums Server API</NuxtLink>
        <NuxtLink to="/search">Search</NuxtLink>
        <br>
        <slot></slot>
        <br>
        Rodape Padrão
    </div>
</template>

<script setup>

</script>

<style scoped>
    a{padding: 10px;}
</style>