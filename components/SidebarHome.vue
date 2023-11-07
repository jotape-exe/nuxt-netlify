<template>
      <aside class="sticky top-[65px] h-[calc(100vh-65px)] py-5">
        <div
          class="flex h-full w-full flex-col gap-5 overflow-y-auto rounded-md border bg-card pb-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md"
        >
          <SidebarItem :links="menu" />
    
          <!--<div class="mt-auto">
            <SidebarItem :links="bottomMenu" />
          </div>-->
        </div>
      </aside>
    </template>
    
    <script setup lang="ts">
    const router = useRouter();
    const menu = [
      {
        title: "Home",
        icon: "heroicons:home",
        route: "/",
      },
      {
        title: "Contatos",
        icon: "heroicons:user",
        route: "/contacts",
      },
      {
        title: "Sobre nós",
        icon: "heroicons:user-group",
        route: "/about",
      },
    ];
    </script>
    