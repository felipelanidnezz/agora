<template>
  <section id="niveles" class="section">
    <div class="text-center q-mb-xl" data-animate>
      <p class="text-overline text-secondary">Rutas de aprendizaje</p>
      <h2 class="section-title text-h4">Niveles educativos</h2>
      <p class="section-subtitle">
        Programas diseñados para cada momento evolutivo, con actividades significativas que despiertan habilidades cognitivas,
        socioemocionales y motrices.
      </p>
    </div>

    <div class="row q-col-gutter-lg" data-animate>
      <div v-for="level in levels" :key="level.title" class="col-12 col-sm-6 col-lg-3">
        <q-card flat class="level-card q-pa-lg h-100">
          <q-icon :name="level.icon" size="48px" color="accent" class="q-mb-md" />
          <div class="text-h5 text-secondary q-mb-sm">{{ level.title }}</div>
          <div class="text-body2 text-weight-medium text-primary q-mb-sm">{{ level.ageRange }}</div>
          <p class="text-body2">{{ level.description }}</p>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  levels: {
    type: Array,
    default: () => []
  }
});
</script>
