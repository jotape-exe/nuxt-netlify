<template>
  <aside class="sticky top-[65px] h-[calc(100vh-65px)] py-5">
    <div
      class="flex h-full w-full flex-col gap-5 overflow-y-auto rounded-md border bg-card pb-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md"
    >
      <SidebarItem :links="menu" />

      <div class="mt-auto">
        <SidebarItem :links="bottomMenu" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
  const bottomMenu = [
    {
      title: "Settings",
      icon: "heroicons:cog-8-tooth",
      route: '/settings'
    },
    {
      title: "Help",
      icon: "heroicons:question-mark-circle",
      route: '/help'
    },
    {
      title: "Logout",
      icon: "heroicons:arrow-left-on-rectangle",
      route: '/auth/login'
    },
  ];
  const menu = [
    {
      title: "Home",
      icon: "heroicons:home",
      route: '/'
    },
    {
      title: "Produtos",
      icon: "heroicons:cube",
      route: '/products'
    },
    {
      title: "Buscar",
      icon: "heroicons:magnifying-glass",
      route: '/search'
    },
    {
      title: "Products",
      icon: "heroicons:cube",
      items: [
        { title: "List" },
        { title: "Create" },
        { title: "Edit" },
        { title: "Delete" },
        { title: "Details" },
      ],
    },
    {
      title: "Staff",
      icon: "heroicons:user",
      items: [
        { title: "List" },
        { title: "Create" },
        { title: "Edit" },
        { title: "Delete" },
        { title: "Details" },
      ],
    },
    {
      title: "Analytics",
      icon: "heroicons:chart-pie",
      items: [{ title: "Overview" }, { title: "Statistics" }, { title: "Trends" }],
    },
  ];
</script>
