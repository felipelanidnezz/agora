<template>
  <section id="contacto" class="section">
    <div class="text-center q-mb-xl" data-animate>
      <p class="text-overline text-secondary">Hablemos</p>
      <h2 class="section-title text-h4">Contacto</h2>
      <p class="section-subtitle">
        Escríbenos por WhatsApp o correo, o visítanos para conocer de cerca nuestro proyecto educativo.
      </p>
    </div>

    <div class="row justify-center" data-animate>
      <div class="col-12 col-md-8">
        <q-card flat bordered class="q-pa-xl column q-gutter-lg">
          <div>
            <div class="text-h5 text-secondary q-mb-sm">Información directa</div>
            <div class="text-body1 q-mb-sm">
              <q-icon name="phone" color="accent" class="q-mr-sm" />
              {{ contactDetails.phone }}
            </div>
            <div class="text-body1 q-mb-sm">
              <q-icon name="email" color="accent" class="q-mr-sm" />
              {{ contactDetails.email }}
            </div>
            <div class="text-body1">
              <q-icon name="place" color="accent" class="q-mr-sm" />
              {{ contactDetails.address }}
            </div>
          </div>

          <q-separator />

          <div>
            <div class="text-subtitle1 text-secondary q-mb-sm">Síguenos</div>
            <div class="row q-col-gutter-md">
              <div v-for="social in contactDetails.socials" :key="social.label" class="col-auto">
                <q-btn
                  round
                  color="secondary"
                  size="md"
                  :icon="social.icon"
                  type="a"
                  :href="social.url"
                  target="_blank"
                  :aria-label="social.label"
                />
              </div>
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-btn
                outline
                color="accent"
                icon="fab fa-whatsapp"
                label="Escríbenos por WhatsApp"
                class="full-width"
                type="a"
                :href="contactDetails.socials.find(s => s.label === 'WhatsApp')?.url"
                target="_blank"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-btn
                outline
                color="secondary"
                icon="email"
                label="Enviar correo"
                class="full-width"
                type="a"
                :href="`mailto:${contactDetails.email}?subject=Quiero%20saber%20más%20de%20ÁGORA`"
              />
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  contactDetails: {
    type: Object,
    default: () => ({})
  }
});
</script>