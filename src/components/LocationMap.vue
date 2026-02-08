<template>
  <section id="ubicacion" class="section gradient-background">
    <div class="text-center q-mb-lg" data-animate>
      <p class="text-overline text-secondary">Encuéntranos</p>
      <h2 class="section-title text-h4">Ubicación</h2>
      <p class="section-subtitle">
        Estamos ubicados en una zona residencial verde y segura, con fácil acceso y rutas de transporte escolar.
      </p>
    </div>

    <div class="row q-col-gutter-lg" data-animate>
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-lg h-100">
          <div class="text-h5 text-secondary q-mb-sm">Dirección</div>
          <p class="text-body1 q-mb-xl">{{ address }}</p>
          <q-btn color="accent" label="Cómo llegar" rounded unelevated :href="directionsUrl" target="_blank" />
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <div class="q-pa-none" style="height: 320px; border-radius: 20px; overflow: hidden;">
          <iframe
            :src="mapUrl"
            width="100%"
            height="100%"
            style="border:0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  address: {
    type: String,
    default: 'Dirección próximamente'
  },
  mapUrl: {
    type: String,
    required: true
  },
  directionsUrl: {
    type: String,
    required: true
  }
});
</script>
