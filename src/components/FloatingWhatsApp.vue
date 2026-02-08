<template>
  <div class="whatsapp-fab">
    <q-btn
      fab
      glossy
      icon="mdi-whatsapp"
      :style="fabStyle"
      @click="openWhatsApp"
      aria-label="Abrir chat de WhatsApp"
      class="fixed-bottom-right"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: 'Hola, me gustaría conocer más sobre ÁGORA.'
  },
  color: {
    type: String,
    default: '#25D366'
  }
});

const whatsappLink = computed(() => {
  // limpiar el número
  let sanitized = props.phone.replace(/[^0-9]/g, '');

  // agregar código de Colombia si no lo tiene
  if (!sanitized.startsWith('57')) {
    sanitized = '57' + sanitized;
  }

  return `https://api.whatsapp.com/send?phone=${sanitized}&text=${encodeURIComponent(props.message)}`;
});

const openWhatsApp = () => {
  window.open(whatsappLink.value, '_blank', 'noopener,noreferrer');
};

const fabStyle = computed(() => ({
  backgroundColor: props.color,
  color: '#ffffff'
}));
</script>

<style scoped>
.fixed-bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}
</style>