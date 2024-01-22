<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";
import { LightBulbIcon } from "@heroicons/vue/24/outline";
const { sliderValue } = defineProps(['sliderValue']);

const emits = defineEmits();

const handleChange = (event: any) => {
  emits('update:sliderValue', event.target.value);
};
</script>
<template>
  <div class="flex p-3">
    <LightBulbIcon class="w-6" />
  <input :value="sliderValue" @input="handleChange" type="range" min="0" max="100" class="slider" />
  <LightBulbIcon :class="{ 'yellow': sliderValue > 50 }" class="w-6" />
  </div>
  <br />
</template>

<style scoped>
.slider {
  width: 91.91%;
}
.yellow {
color: #FFD239;
}
.slider::-webkit-slider-runnable-track {
  background-color: transparent;
  border-radius: 25px;
  height: 0.2em;
}

.slider::-moz-range-track {
  background-color: grey;
}

.slider::-webkit-slider-thumb {
  color: white;
}

.slider::-moz-range-thumb {
  background-color: white;
}

.slider::-moz-range-progress {
  background-color: yellow;
}
.slider::-webkit-progress-value { 
  background-color: yellow;
}

.slider:focus::-webkit-slider-runnable-track {
  background: white;
}

</style>
