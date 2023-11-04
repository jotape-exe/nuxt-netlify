<template>
  <div>
      <h1
      class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
    
      Produtos
    </h1>

    <h2>
      Simulando consumir uma api externa (https://fakestoreapi.com/products)
    </h2>
    <br />

    <div
      class="flex w-full max-w-sm items-center gap-1.5"
      style="margin: 10px 0 10px 0"
    >
      <Input v-model="id" id="email" type="email" placeholder="ID" />
      <Button @click="search" type="submit"> <LucideSearch /> </Button>
    </div>

    <div v-for="i in products">
      <UiCard style="margin-top: 10px;">
        <UiCardHeader>
          <UiCardTitle>
            <NuxtLink :to="`/products/${i.id}`" style="color: blue">
              {{ i.title }}</NuxtLink
            ></UiCardTitle
          >
          <UiCardDescription>{{ i.description }}</UiCardDescription>
        </UiCardHeader>
        <UiCardContent style="display: flex;">  <DollarSign /> {{ i.price }} </UiCardContent>
        <!--<CardFooter> Card Footer </CardFooter>-->
      </UiCard>
    </div>
  </div>
</template>

<script setup>
import { DollarSign } from "lucide-vue-next";
import { LucideBox } from "lucide-vue-next";
import { LucideSearch } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const { data: products } = await useFetch("https://fakestoreapi.com/products");

const id = ref("");

const search = () => {
  useRouter().push(`/products/${id.value}`);
};
</script>
