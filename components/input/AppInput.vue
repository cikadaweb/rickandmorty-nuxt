<template>
  <div class="input" :style="{ width: width }">
    <label 
      class="input__label text-lg"
      :for="name"
    >{{ label }}</label>
    <input
      class="input__text w-full text-lg bg-slate-50 px-5 py-2 rounded-xl shadow-lg outline-none"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event)"
    />
  </div>
</template>

<script setup>
  const emit = defineEmits(['update:value']);

  const props = defineProps({
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      default: '300px',
    }
  });

  const updateValue = (e) => {
    emit('update:value', e.target.value)
  }

</script>

<style lang="scss" scoped>

</style>