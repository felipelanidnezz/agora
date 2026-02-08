<template>
  <footer class="bg-dark text-white q-pa-xl">
    <div class="text-center text-caption">
      © {{ year }} ÁGORA. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>
defineOptions({
  name: 'SiteFooter'
});

defineProps({
  sections: {
    type: Array,
    default: () => []
  },
  socials: {
    type: Array,
    default: () => []
  }
});

const year = new Date().getFullYear();
</script>
