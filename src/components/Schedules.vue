<template>
  <section id="jornadas" class="section gradient-background">
    <div class="text-center q-mb-lg" data-animate>
      <p class="text-overline text-secondary">Flexibilidad para las familias</p>
      <h2 class="section-title text-h4">Jornadas disponibles</h2>
      <p class="section-subtitle">
        Acompañamos a cada familia con opciones que se adaptan a sus necesidades de horario, garantizando rutinas estables y
        momentos de descanso.
      </p>
    </div>

    <div class="row q-col-gutter-lg" data-animate>
      <div v-for="schedule in schedules" :key="schedule.name" class="col-12 col-md-4">
        <q-card flat bordered class="q-pa-lg h-100">
          <div class="text-h5 text-secondary q-mb-xs">{{ schedule.name }}</div>
          <div class="text-body1 text-primary q-mb-md">{{ formatHours(schedule.hours) }}</div>
          <p class="text-body2">{{ schedule.description }}</p>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'DailySchedules'
});

defineProps({
  schedules: {
    type: Array,
    default: () => []
  }
});

const formatHours = hours => {
  if (!hours) {
    return '';
  }

  if (/a\.m\.|p\.m\.|am|pm/i.test(hours)) {
    return hours;
  }

  const to12Hour = value => {
    const [hourStr, minute = '00'] = value.split(':');
    let hour = parseInt(hourStr, 10);

    if (Number.isNaN(hour)) {
      return value;
    }

    const suffix = hour >= 12 ? 'p.m.' : 'a.m.';
    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour -= 12;
    }

    return `${hour}:${minute} ${suffix}`;
  };

  const parts = hours.split('-').map(part => part.trim());
  return parts.map(to12Hour).join(' – ');
};
</script>
