<template>
  <section id="actividades" class="section gradient-background">
    <div class="text-center q-mb-lg" data-animate>
      <p class="text-overline text-secondary">Aprendizajes memorables</p>
      <h2 class="section-title text-h4">Actividades y eventos</h2>
      <p class="section-subtitle">
        Creamos experiencias ambientales, culturales, deportivas y artísticas que fortalecen el liderazgo, la creatividad y la
        empatía.
      </p>
    </div>

    <q-carousel
      v-model="slide"
      animated
      arrows
      infinite
      height="480px"
      navigation-icon="stop"
      control-color="accent"
      class="rounded-borders"
      swipeable
      data-animate
    >
      <q-carousel-slide v-for="(activity, index) in activities" :key="activity.title" :name="index">
        <div class="row items-center q-col-gutter-lg fit q-pa-lg">
          <div class="col-12 col-md-6">
            <div class="text-h5 text-secondary">{{ activity.title }}</div>
            <p class="text-body1 q-mt-sm">{{ activity.description }}</p>
            <q-chip v-for="tag in activity.tags" :key="tag" color="white" text-color="secondary" class="q-mt-md q-mr-sm">
              {{ tag }}
            </q-chip>
          </div>
          <div class="col-12 col-md-6">
            <div
              class="activity-image"
              :style="{ backgroundImage: `url(${activity.image})` }"
              :aria-label="activity.title"
              role="img"
            ></div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  activities: {
    type: Array,
    default: () => []
  }
});

const slide = ref(0);
</script>

<style scoped>
.activity-image {
  width: 100%;
  min-height: 280px;
  height: 100%;
  border-radius: 24px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
  box-shadow: 0 18px 32px rgba(26, 35, 126, 0.12);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.activity-image:hover {
  transform: scale(1.01);
  box-shadow: 0 22px 36px rgba(26, 35, 126, 0.2);
}

@media (min-width: 768px) {
  .activity-image {
    min-height: 330px;
  }
}

@media (min-width: 1024px) {
  .activity-image {
    min-height: 380px;
  }
}
</style>
