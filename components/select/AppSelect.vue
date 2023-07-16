<template>
  <div class="select" :style="{ width: width }">
    <div 
      class="select__input relative bg-slate-50 text-lg px-5 py-2 rounded-xl shadow-lg"
      @click.self="toggleOptionsVisible"
    >{{ value }} 
    <nuxt-icon
      v-if="isOptionChosen"
      class="select__icon select__icon_clear absolute top-1/2 transform -translate-y-1/2 right-8"
      name="clear"
      @click.stop="clearSelect"
    />
    <nuxt-icon
      class="select__icon absolute top-1/2 transform -translate-y-1/2 right-3"
      name="drop-down"
      @click="toggleOptionsVisible"
    />
    </div>
    <ul
      :style="{ width: width }"
      v-if="isShowOptions"
      class="select__list bg-slate-50 text-lg mt-1">
      <li 
        class="select__item px-5 py-2 transition duration-300 ease-in-out hover:bg-slate-200"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >{{ option.name }}</li>
    </ul>
  </div>
</template>

<script setup>
  const emit = defineEmits(['update:value']);

  const props = defineProps({
    options: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '300px',
    }
  });

  const isShowOptions = ref(false);

  const toggleOptionsVisible = (event) => {
    isShowOptions.value = !isShowOptions.value
  };

  const selectOption = (option) => {
    isShowOptions.value = false;
    emit('update:value', option.name)
  };

  const clearSelect = () => {
    isShowOptions.value = false;
    emit('update:value', 'Выбрать')
  }

  const isOptionChosen = computed(() => {
    if (!props.options.some(option => option.name === props.value)) {
      return false
    }
    return true
  })

</script>

<style lang="scss" scoped>

</style>