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

        <component-link
          v-for="link in componentLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ComponentLink, {
  ComponentLinkProps,
} from 'components/ComponentLink.vue';

const componentLinks: ComponentLinkProps[] = [
  {
    title: 'comp1',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/comp1',
  },
  {
    title: 'comp2',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/comp2',
  },
  {
    title: 'comp3',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/comp3',
  },
  {
    title: 'comp4',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '/comp4',
  },
  {
    title: 'comp5',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/comp5',
  },
  {
    title: 'comp6',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'comp7',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
