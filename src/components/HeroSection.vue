<template>
  <section id="hero" class="relative-position">
    <q-parallax :height="parallaxHeight" :src="heroImage">
      <div class="hero-overlay absolute-full" />
      <div class="row hero-grid items-center justify-between q-pa-xl q-col-gutter-xl">
        <div class="col-12 col-md-7 text-white hero-content" data-animate>
          <p class="text-subtitle2 text-uppercase q-mb-sm">Educación basada en el amor</p>
          <h1 class="text-h3 text-bold q-mb-md">
            ÁGORA - Centro de Desarrollo y Estimulación Temprana
          </h1>
          <p class="text-body1 q-mb-lg">
            Acompañamos cada etapa de tus hijos con experiencias que integran cuerpo, mente y espíritu,
            promoviendo el respeto por la naturaleza y el aprendizaje vivencial.
          </p>
          <div class="row hero-cta items-center q-col-gutter-md">
            <div class="col-auto">
              <q-btn color="accent" label="Conoce nuestra propuesta" rounded unelevated @click="$emit('cta')" />
            </div>
            <div class="col-auto">
              <q-btn outline color="white" label="Agenda una visita" rounded href="#contacto" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 flex flex-center hero-mascot" data-animate>
          <EcoMascot />
        </div>
      </div>
    </q-parallax>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import EcoMascot from './EcoMascot.vue';

defineProps({
  heroImage: {
    type: String,
    required: true
  }
});

defineEmits(['cta']);

const $q = useQuasar();
const parallaxHeight = computed(() => {
  if ($q.screen.lt.sm) {
    return 520;
  }
  if ($q.screen.lt.md) {
    return 600;
  }
  return 640;
});
</script>

<style scoped>
.hero-grid {
  min-height: 520px;
  gap: 1.5rem;
}

.hero-content {
  max-width: 640px;
}

.hero-cta {
  flex-wrap: wrap;
}

.hero-mascot {
  min-height: 260px;
}

@media (max-width: 1023px) {
  .hero-grid {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 599px) {
  .hero-grid {
    text-align: center;
  }

  .hero-content {
    text-align: center;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-cta .col-auto {
    flex: 1 1 100%;
  }

  .hero-cta .q-btn {
    width: 100%;
  }

  .hero-mascot {
    margin-top: 1.5rem;
  }
}
</style>
