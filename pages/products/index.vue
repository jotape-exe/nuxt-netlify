<template>
     <div>
       <h1>Eu sou o conteúdo que será apresentado para listar os produtos</h1>
      <h2>simulando consumir uma api externa (https://fakestoreapi.com/products)</h2>
       <br>

       <div v-for="i in products">
        <NuxtLink :to="`/products/${i.id}`" style="color:blue"> {{ i.id }} -- {{ i.title }}</NuxtLink>
        {{ i.description }}
  
      </div>

    </div>
</template>

<script setup>
 const {data : products} = await useFetch('https://fakestoreapi.com/products')
</script>
