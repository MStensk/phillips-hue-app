
<template>
    <div class="flex justify-evenly fixed pb-2 w-full h-24 bottom-0 bg-white items-center shadow-2xl z-40">
        <LightBulbIcon class="w-8 text-blue-900"/>
        <RouterLink class="text-center" to="/">
        <HomeIcon class="w-8 text-blue-900"/>
        </RouterLink>
        <Cog8ToothIcon class="w-8 text-blue-900"/>
    </div>
</template>

<script setup lang="ts">
import {LightBulbIcon, HomeIcon, Cog8ToothIcon} from '@heroicons/vue/24/outline';
</script>