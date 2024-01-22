<template>
  <div class="flex flex-col bg-[#F6F8FB] m-0 rounded-t-2xl border-2 border-solid w-full h-full z-10 pb-24  ">
    <h2 class="text-lg font-bold pl-6 pt-4 text-blue-950">All Rooms</h2>
    <div class="p-6 grid grid-cols-2 gap-5">
      <Room v-for="room in rooms" :key="room.id" :id="room.id" :caption="room.caption" :light-count="room.lightCount" />
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import Room from './Room.vue';
  const rooms = [
    { id: 55, caption: 'Bedroom', lightCount: '4 lights' },
    { id: 53, caption: 'Living Room', lightCount: '2 lights' },
    { id: 48, caption: 'Kitchen', lightCount: '5 lights' },
    { id: 10, caption: 'Bathroom', lightCount: '1 light' },
    { id: 47, caption: 'Balcony', lightCount: '5 lights' },
    { id: 59, caption: 'Lounge', lightCount: '2 lights' },
  ];
  </script>