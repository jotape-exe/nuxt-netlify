<template>
    <div>
      
     TOKEN
      {{ token }}
      <br> 
      <input v-model="login.username">
      <input v-model="login.password">
      <br> 

      {{ login }}

      <br> 

      {{ message }}
      <br> 

      <NuxtLink to="/enums" style="color: red;"> enums api local server</NuxtLink>

      <div v-for="i in products">
        <NuxtLink :to="`/products/${i.id}`" style="color:blue"> {{ i.id }} -- {{ i.title }}</NuxtLink>
        {{ i.description }}
  
      </div>
  
      <br> <br>

      CEP
      <br>
      {{ cep }}
      
    </div>
  </template>
  
  <script setup>

    const login = ref({username:'mor_2314', password :'83r5^_'});

    const {data : message} = await useFetch('/api/welcome?nome=Gleyson Sampaio')

    const {data : products} = await useFetch('https://fakestoreapi.com/products')
  
    const { viaCepApi } = useRuntimeConfig()

    //const {data : cep} = await useFetch(`https://viacep.com.br/ws/01001000/json`)

    const {data : cep} = await useFetch('/api/viacep?cep=01001000')

    const {data:token} = await useFetch('/api/auth', {method:'POST',body:login})

    //const {data:token} = await $axios.$post('https://fakestoreapi.com/auth/login',{username:'mor_2314', password :'83r5^_'})

    //const res = await useFetch('https://viacep.com.br/ws/0100100/json')
    //console.log('resposta via cep', res)

  </script>