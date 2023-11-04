<template>
  <!-- Header -->
  <Header />
  <div class="container lg:grid lg:grid-cols-12 lg:gap-10">
    <!-- Sidebar -->
    <Sidebar class="hidden lg:col-span-3 lg:block" />

    <!-- Main Section -->
    <main class="py-5 lg:col-span-6">
      <slot></slot>
    </main>
    <div style="margin-top: 25px;" class="h-80 w-48 rounded-md border">
      <UiScrollArea class="h-80 w-48 rounded-md border">
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">Conteúdos</h4>
          <div v-for="content in data" :key="content.titulo">
            <div class="text-sm cursor-pointer">
              {{ content.titulo }}
            </div>
            <UiSeparator class="my-2" />
          </div>
        </div>
      </UiScrollArea>
    </div>
  </div>
</template>

<script setup lang="ts">
const data: { titulo: string }[] = [
  { titulo: "Python para Iniciantes" },
  { titulo: "JavaScript Moderno" },
  { titulo: "C++ Avançado" },
  { titulo: "HTML5 Essencial" },
  { titulo: "Java Profissional" },
  { titulo: "Swift Rápido" },
  { titulo: "Ruby Simples" },
  { titulo: "PHP Prático" },
  { titulo: "CSS Eficiente" },
  { titulo: "Go Fundamentos" },
  { titulo: "TypeScript Expresso" },
  { titulo: "SQL Simplificado" },
  { titulo: "Rust Poderoso" },
  { titulo: "Kotlin para Android" },
  { titulo: "Lua Leve" },
  { titulo: "Scala Funcional" },
  { titulo: "Perl Desmistificado" },
  { titulo: "Dart Dinâmico" },
  { titulo: "LuaJIT Veloz" },
  { titulo: "Elixir Concorrente" },
];
</script>

<style scoped>
a {
  padding: 10px;
}
</style>
