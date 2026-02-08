<template>
  <section id="equipo" class="section">
    <div class="text-center q-mb-xl" data-animate>
      <p class="text-overline text-secondary">Humanos que inspiran</p>
      <h2 class="section-title text-h4">Nuestro equipo</h2>
      <p class="section-subtitle">
        Docentes, terapeutas y directivos comprometidos con metodologías activas y el acompañamiento respetuoso.
      </p>
    </div>

    <div class="row q-col-gutter-lg" data-animate>
      <div v-for="member in team" :key="member.name" class="col-12 col-sm-6 col-lg-4">
        <q-card flat bordered class="team-card q-pa-lg h-100 column items-center text-center">
          <q-avatar size="100px" class="q-mb-md">
            <img :src="member.photo" :alt="member.name" loading="lazy" />
          </q-avatar>
          <div class="text-h6 text-secondary">{{ member.name }}</div>
          <div class="text-body2 text-primary q-mb-sm">{{ member.role }}</div>
          <p class="text-body2">{{ member.description }}</p>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  team: {
    type: Array,
    default: () => []
  }
});
</script>
