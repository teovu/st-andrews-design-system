<template>
  <button
    class="px-4 py-2 transition-all hover:bg-opacity-80 text-base"
    :class="classes"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

const props = defineProps<{
  primary: boolean;
  secondary: boolean;
  text: boolean;
}>();

const classes = {
  "text-white bg-[#0071b3] hover:bg-[#005586] hover:underline focus:ring focus:ring-[#ffb400] focus:underline focus:underline-offset-1": props.primary,
};
</script>

<style scoped></style>
