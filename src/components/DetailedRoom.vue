<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { state } from '@/StateManager';
import CrangeSlider from './CrangeSlider.vue';
import { LightBulbIcon } from '@heroicons/vue/24/outline';
import axios from 'axios';

const sliderValue = ref(0);

const updateSliderValue = (value: number) => {
  sliderValue.value = value;
  toggleLight();
};

const toggleLight = async () => {
  try {
    const bridgeIp = ''; 
    const apiKey = ''; 
    const lightId = state.value.selectedRoom.id;

    const apiUrl = `https://${bridgeIp}/api/${apiKey}/lights/${lightId}/state`;


    let body;
    if (sliderValue.value > 0) {
      const brightness = Math.round((sliderValue.value / 100) * 254);
      body = {body, bri: brightness };
    }

    await axios.put(apiUrl, body);
  } catch (error) {
    console.error('Error toggling light:', error);
  }
};


const setColor = (color: string) => {
  const colorMap: Record<string, number> = {
    pink: 60000,
    green: 25500,
    blue: 46920,
    violet: 50000,
    purple: 56100,
    yellow: 12750,
  };

  const hue = colorMap[color];

  updateLightColor(hue);
};

const updateLightColor = async (hue: number) => {
  try {
    const bridgeIp = '192.168.8.105';
    const apiKey = 'j3GJZjYFBAFGRiGaSVCuPR3ectrFKrwnFf9Cye-7';
    const lightId = state.value.selectedRoom.id;
    const apiUrl = `https://${bridgeIp}/api/${apiKey}/lights/${lightId}/state`;

    const body = { on: true, sat: 254, bri: 254, hue };

    await axios.put(apiUrl, body);
  } catch (error) {
    console.error('Error updating light color:', error);
  }
};
</script>

<template>
  <div v-if="state.selectedRoom.id">
    <div class="grid grid-cols-1 ">
    <h1 class="text-4xl pl-6 pt-2 text-white font-bold w-1/2">{{ state.selectedRoom.caption }}</h1>
    <h3 class="text-3xl p-6 text-yellow-300 font-bold">{{ state.selectedRoom.lightCount }}</h3>
    <div class="relative">
    <div class="rectangle"></div>
    <div class="trapezoid"></div>
    <LightBulbIcon class="w-12 text-white justify-self-end absolute ml-60 top-28 rotate-180" :class="{ 'glow': sliderValue > 50 }" />
</div>
    </div>
    <div class="bg-[#F6F8FB] m-0 h-full mt-36 rounded-t-2xl border-2 border-solid w-full h-screen">
        <h3 class="font-bold text-2xl p-4">Intensity</h3>
        <CrangeSlider :sliderValue="sliderValue" @update:sliderValue="updateSliderValue" />
        <h3 class="font-bold text-2xl pl-4 p-2">Colors</h3>
        <div class="flex gap-4 pl-4 p-1">
        <div class="w-6 h-6 bg-pink-300 rounded-full" @click="setColor('pink')"></div>
      <div class="w-6 h-6 bg-green-300 rounded-full" @click="setColor('green')"></div>
      <div class="w-6 h-6 bg-blue-300 rounded-full" @click="setColor('blue')"></div>
      <div class="w-6 h-6 bg-violet-800 rounded-full" @click="setColor('violet')"></div>
      <div class="w-6 h-6 bg-purple-300 rounded-full" @click="setColor('purple')"></div>
      <div class="w-6 h-6 bg-yellow-500 rounded-full" @click="setColor('yellow')"></div>
        </div>
        <h3 class="font-bold text-2xl p-4">Scenes</h3>
        <div class="grid grid-cols-2 gap-4 p-4">
            <div class="bg-red-300 text-center py-4 rounded-3xl border-2 border-solid text-white">
                <p class="font-bold">Birthday</p>
            </div>
            <div class="text-center rounded-3xl border-2 border-solid bg-purple-300 py-4 text-white">
                <p class="font-bold">Party</p>
            </div>
            <div class="bg-blue-300 py-4 text-center rounded-3xl border-2 border-solid text-white">
                <p class="font-bold">Relax</p>
            </div>
            <div class="bg-green-300 py-4 text-center rounded-3xl border-2 border-solid text-white">
                <p class="font-bold">Fun</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
.glow {
  filter: brightness(1.1); 
  transition: filter 0.5s ease-in-out; 
  width: 3em;
  border-radius: 50%;
  background-color: #fff;
  box-shadow:
    0 0 20px 10px #fff,  
    0 0 40px 20px #f0f, 
    0 0 60px 30px #0ff; 
}
.relative{
    position: absolute;
}

.trapezoid {
  border-bottom: 70px solid white;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  position: relative;
  margin-left: 11.3em;
  margin-top: 5.4em;
  z-index: 100;
  width: 12.4em;
}

.rectangle {
  width: 12px;
  height: 90px;
  background-color: white;
  position: absolute;
  top: 0px; /* Adjust the top position based on your design */
  left: 17.2em; /* Adjust the left position based on your design */
}
</style>