<script setup lang="ts">
import { BuildingStorefrontIcon } from '@heroicons/vue/24/outline';
import { defineProps } from 'vue';
import { setSelectedRoom } from '@/StateManager';

const { id, caption, lightCount } = defineProps(['id', 'caption', 'lightCount']);
const selectRoom = () => {
  setSelectedRoom(id, caption, lightCount);
  console.log(selectRoom)
}
</script>

<template>
  <router-link :to="{ name: 'room-details', params: { id: id } }">
    <div @click="selectRoom" class="bg-white w-full items-center rounded-3xl shadow-md border-2 border-solid p-4">
      <BuildingStorefrontIcon class="w-12" />
      <h3 class="font-bold pt-4 text-s">{{ caption }}</h3>
      <h3 class="font-bold text-yellow-300">{{ lightCount }}</h3>
    </div>
  </router-link>
</template>