<script setup lang="ts">
import ControlPanel from '@/components/ControlPanel.vue';
import Header from '@/generics/Header.vue';
import {UserCircleIcon} from '@heroicons/vue/24/outline';
import Navigation from '@/generics/Navigation.vue';

</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="flex justify-between pt-4">
      <Header />
      <UserCircleIcon class="w-24 pr-6 text-white" />
    </div>
    <main class="flex-grow flex">
      <ControlPanel class="flex-grow" />
    </main>
    <footer>
      <Navigation />
    </footer>
  </div>
</template>
