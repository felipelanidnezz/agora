<template>
  <section id="quienes-somos" class="section gradient-background">
    <div class="text-center q-mb-xl" data-animate>
      <p class="text-overline text-secondary">Creciendo con propósito</p>
      <h2 class="section-title text-secondary text-h4">¿Quiénes somos?</h2>
      <p class="section-subtitle q-mt-md">
        Somos una comunidad educativa que acompaña a los niños en sus primeros descubrimientos,
        potenciando sus talentos y honrando su curiosidad natural.
      </p>
    </div>

    <q-card flat class="section-card q-pa-lg" data-animate>
      <q-tabs v-model="tab" dense class="text-secondary" active-color="primary" indicator-color="accent" align="justify">
        <q-tab v-for="item in infoCards" :key="item.id" :name="item.id" :label="item.title" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel v-for="item in infoCards" :key="item.id" :name="item.id">
          <p class="text-body1 q-mb-none">{{ item.content }}</p>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

    <div class="row q-col-gutter-lg q-mt-xl" data-animate>
      <div v-for="pillar in pillars" :key="pillar.title" class="col-12 col-md-4">
        <q-card flat bordered class="q-pa-lg h-100">
          <div class="text-secondary text-h5 q-mb-sm">
            <q-icon :name="pillar.icon" size="32px" color="accent" class="q-mr-sm" />
            {{ pillar.title }}
          </div>
          <p class="text-body2">{{ pillar.description }}</p>
        </q-card>
      </div>
    </div>

    <q-banner rounded class="bg-primary text-dark q-mt-xl" inline-actions data-animate>
      <div>
        <div class="text-h6 text-bold">Compromiso ambiental permanente</div>
        <div>{{ environmentMessage }}</div>
      </div>
      <template #action>
        <q-btn flat rounded color="dark" label="Proyectos verdes" href="#actividades" />
      </template>
    </q-banner>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  infoCards: {
    type: Array,
    default: () => []
  },
  pillars: {
    type: Array,
    default: () => []
  },
  environmentMessage: {
    type: String,
    default: ''
  }
});

const tab = ref(props.infoCards?.[0]?.id ?? 'mision');

watch(
  () => props.infoCards,
  value => {
    if (value?.length) {
      tab.value = value[0].id;
    }
  },
  { immediate: true }
);
</script>
