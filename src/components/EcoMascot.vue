<template>
  <div class="mascot-wrapper column items-center text-center">
    <div class="mascot-card">
      <img :src="mascotImage" alt="Mascota ecológica ÁGORA" loading="lazy" class="mascot-image" />
      <div class="mascot-speech" role="status" aria-live="polite">
        {{ tips[currentTip] }}
      </div>
    </div>
    <div class="text-body2 text-secondary q-mt-md">Mascota ecológica</div>
    <div class="text-caption text-dark">Guardián de Cuerpo · Mente · Espíritu</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const mascotImage = '/mascota/mascota_agora.png';
const tips = [
  'Recuerda separar residuos orgánicos y reciclables.',
  'Apaga las luces cuando salgas de un salón.',
  'Lleva tu botella reutilizable todos los días.',
  'Riega las plantas con agua lluvia almacenada.'
];

const currentTip = ref(0);
let tipTimer;

const startTips = () => {
  stopTips();
  tipTimer = window.setInterval(() => {
    currentTip.value = (currentTip.value + 1) % tips.length;
  }, 6000);
};

const stopTips = () => {
  if (tipTimer) {
    clearInterval(tipTimer);
    tipTimer = undefined;
  }
};

onMounted(() => {
  startTips();
});

onBeforeUnmount(() => {
  stopTips();
});
</script>
