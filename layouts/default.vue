<script setup lang="ts">
import { ref } from 'vue';
import type { EssentialLinkProps } from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Auth',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/auth',
  },
  
  {
    title: 'Products',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/products',
  },
  {
    title: 'Enums',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '/enums',
  },
  {
    title: 'Search',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/search',
  }
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>
