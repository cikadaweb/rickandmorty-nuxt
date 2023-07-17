<script setup>

const props = defineProps({
  fullscreen: {
    type: Boolean,
    required: false,
  },
});

const spinnerClasses = computed(() => ({
  "app-spinner--fullscreen": props.fullscreen,
}));
</script>


<template>
  <div class="app-spinner" :class="spinnerClasses">
    <div class="app-spinner__overlay" />
    <div class="app-spinner__icon" />
  </div>
</template>

<style scoped>
.app-spinner {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
}

.app-spinner:focus {
  outline: none;
}

.app-spinner__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  animation: spinnerAnimation 0.6s infinite linear;
  background-image: url("@/assets/icons/spinner-icon.svg");
}

.app-spinner__overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
}

.app-spinner--fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

@keyframes spinnerAnimation {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

</style>