<template>
      <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <!-- Container of flex -->
        <div class="container flex h-16 items-center justify-between">
          <!-- Logo and page title -->
          <div class="flex items-center gap-3">
            <!-- Logo -->
            <img
              src="https://img.logoipsum.com/296.svg"
              alt="Analytics logo"
              class="h-7 w-7 object-contain"
            />
            <!-- Page title -->
            <NuxtLink class="text-xl font-bold w-full" to="/"
              >Digytal Code</NuxtLink
            >
    
          </div>
    
          <!-- Right side of header -->
          <div class="flex items-center gap-5">
            <button
              @click="toggleTheme"
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background"
            >
              <Icon name="heroicons:sun" class="h-5 w-5" />
            </button>
            <NuxtLink to="/auth/login">
              <UiButton>
                  Entrar  
                  <Icon style="margin-left: 5px;" name="heroicons:arrow-right-on-rectangle" class="h-5 w-5"/>
            </UiButton>
            </NuxtLink>
    
            <!-- Profile Dropdown menu 
            <HMenu as="div" class="relative">
              <HMenuButton
                class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-background"
              >
                <img
                  src="https://randomuser.me/api/portraits/med/men/75.jpg"
                  alt="Logged in user"
                  class="h-full w-full"
                />
              </HMenuButton>
              <TransitionScale :scale="0.8" origin="top right">
                <HMenuItems
                  class="absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div class="border-b px-3 py-1.5 text-sm">
                    <p class="font-semibold">Hello John</p>
                    <a
                      href="mailto:johndoe@test.com"
                      class="leading-none text-muted-foreground"
                      >johndoe@test.com</a
                    >
                  </div>
                  <div class="p-1">
                    <template v-for="(p, i) in profileMenuOptions" :key="i">
                      <HMenuItem v-if="!p.divider" v-slot="{ active }">
                        <button
                          :class="[active && 'bg-muted']"
                          class="inline-flex w-full items-center rounded-md p-2 text-sm font-medium"
                        >
                          <NuxtLink :to="p.route">
                            {{ p.title }}
                          </NuxtLink>
                        </button>
                      </HMenuItem>
                      <hr v-if="p.divider" class="my-1" />
                    </template>
                  </div>
                </HMenuItems>
              </TransitionScale>
            </HMenu>-->
          </div>
        </div>
      </header>
    </template>
    
    <script setup lang="ts">
    import {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
      navigationMenuTriggerStyle,
    } from "./ui/navigation-menu";
    import NavigationMenuListItem from "./ui/navigation-menu/NavigationMenuListItem.vue";
    
    const mode = useColorMode();
    const currentTrigger = ref("");
    const toggleTheme = () => {
      mode.value = mode.value === "dark" ? "light" : "dark";
    };
    
    // Items that will be displayed in menu
    const profileMenuOptions = [
      { title: "Profile" },
      { title: "Billing" },
      { title: "Settings" },
      { title: "Team members" },
      { title: "Sales" },
      { divider: true },
      { title: "Logout", route: "/auth/login", },
    ];
    
    const components: { title: string; href: string; description: string }[] = [
      {
        title: "Java",
        href: "/classrom/java",
        description:
          "Linguagem de programação Orientada a Objetos feita para suportar grandes servidores.",
      },
      {
        title: "Kotlin",
        href: "/classrom/kotlin",
        description:
          "Linguagem multiparadigma feita a partir do Java com foco em Mobile.",
      },
    ];
    </script>
    