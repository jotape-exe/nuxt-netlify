<template>
  <div  class="overflow-hidden cursor-pointer rounded-md max-w-sm max-h-sm">
    <img
      :src="product.image"
      :class="
        cn(
          'h-auto w-auto object-cover transition-all hover:scale-105'
        )
      "
    />
  </div>
</template>

<script setup>
import { cn } from "~/lib/utils";
const { product } = defineProps(["product"]);
</script>
