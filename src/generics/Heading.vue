<script setup lang="ts">
type HeadingProps = {
  caption: string  // add this line
}

defineProps<HeadingProps>()
</script>
<template>
  <h1 class="text-4xl p-6">{{ caption }}</h1>
</template>