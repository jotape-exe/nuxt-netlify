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
      <div class="hidden py-5 lg:col-span-3 lg:block">
        <!-- Profile info to the side -->
        <ProfileInfo />
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    a{padding: 10px;}
</style>