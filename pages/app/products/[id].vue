<template>
  <div style="display: flex; flex-direction: column">
    <Button style="align-self: flex-start"
      ><NuxtLink to="/products">
        <ChevronLeft />
        </NuxtLink
    ></Button>
    <h1
      as
      class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      {{ product.title }}
    </h1>
    <h3 class="scroll-m-20 text-1xl font-light tracking-tight">
      {{ product.description }}
    </h3>

    <!-- ESTE COMPONENTE É CUSTOMIZADO, veja a pasta components-->
    <ProductImg :product="product" />
  </div>
</template>

<script setup>
import { ChevronLeft } from "lucide-vue-next";
import { Button } from "~/components/ui/button";

const { id } = useRoute().params;
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`,
  { key: id }
);
</script>
