<template>
      <div>
          Titulo: {{ product.title }}
          <br><br>
          Descrição: {{ product.description }}
  
          <br>
          <!-- ESTE COMPONENTE É CUSTOMIZADO, veja a pasta components-->
          <ProductImg :product="product"/>
  
      </div>
  </template>
  
  <script setup>
  
      const { id } = useRoute().params;
      const {data : product} = await useFetch(`https://fakestoreapi.com/products/${id}`, {key:id})
    
  </script>
  