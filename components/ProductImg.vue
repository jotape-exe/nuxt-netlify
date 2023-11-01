<template>
    <div>
       <img :src="product.image"/>

       <br><br>
       Descrição no componentes
       {{ product }}
    </div>
</template>

<script setup>
    const { product } = defineProps(['product']) 
</script>
