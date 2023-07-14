<template>
  <div 
    class="badge inline-block rounded-full px-3 py-2"
    :class="[bgColor, textColor]"
  >
    <slot />
  </div>
</template>

<script setup>
  const props = defineProps({
    bgColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: 'text-slate-50'
    }
  });
</script>