<template>
  <section id="instalaciones" class="section">
    <div class="text-center q-mb-lg" data-animate>
      <p class="text-overline text-secondary">Explora nuestros espacios</p>
      <h2 class="section-title text-h4">Instalaciones</h2>
      <p class="section-subtitle">
        Ambientes seguros, luminosos y llenos de naturaleza donde cada niño aprende jugando y cuidando el planeta.
      </p>
    </div>

    <div class="row items-stretch q-col-gutter-xl" data-animate>
      <div class="col-12 col-md-7">
        <q-carousel
          v-model="slide"
          animated
          arrows
          navigation
          infinite
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
          control-color="white"
          height="440px"
          class="rounded-borders facility-carousel"
          :autoplay="4500"
          pause-on-hover
        >
          <q-carousel-slide v-for="(item, index) in slidesToRender" :key="item.title" :name="index">
            <div class="facility-slide">
              <div
                class="facility-image"
                :style="facilityImageStyle(item)"
                :aria-label="item.title"
                role="img"
              ></div>
              <div class="facility-badge">
                <span>{{ item.category }}</span>
                <strong>{{ item.title }}</strong>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

      <div class="col-12 col-md-5">
        <div class="facility-copy">
          <p class="text-overline text-accent">Ven y conoce nuestras instalaciones</p>
          <h3 class="text-h4 text-secondary q-mb-md">Un campus vivo para descubrir en familia</h3>
          <p class="text-body1">
            Te guiamos por aulas sensoriales, laboratorios verdes y rincones de juego donde cada detalle invita a explorar,
            crear y cuidar el entorno. Nuestro equipo abre las puertas para que vivas una jornada completa junto a tu hijo.
          </p>
          <ul class="facility-list">
            <li>Demostraciones de proyectos, huerta ecológica.</li>
            <li>Sesión de preguntas con nuestro equipo pedagógico y de bienestar.</li>
          </ul>
          <q-btn color="accent" label="Agenda tu visita" class="q-mt-lg" rounded unelevated href="#contacto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const defaultSlides = [
  {
    title: 'Aulas Equipadas',
    description: 'Espacios coloridos y luminosos diseñados para estimular el aprendizaje y la creatividad de los niños.',
    category: 'Educación',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800'
  },
  {
    title: 'Áreas de Juego',
    description: 'Zonas seguras al aire libre donde los niños desarrollan sus habilidades motoras y sociales.',
    category: 'Recreación',
    image: 'https://images.unsplash.com/photo-1587828771053-6be0b2b7aaf5?w=800'
  },
  {
    title: 'Huerta Ecológica',
    description: 'Los niños aprenden sobre el ciclo de vida de las plantas y el cuidado del medio ambiente.',
    category: 'Naturaleza',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800'
  },
  {
    title: 'Comedor',
    description: 'Espacio acogedor donde los niños comparten una alimentación balanceada y nutritiva.',
    category: 'Bienestar',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800'
  }
];

const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  }
});

const slidesToRender = computed(() => (props.slides && props.slides.length ? props.slides : defaultSlides));
const slide = ref(0);

const facilityImageStyle = item => {
  if (!item) {
    return {};
  }

  const url = item.externalImage || item.image || '';
  return url ? { backgroundImage: `url(${url})` } : {};
};
</script>

<style scoped>
.facility-carousel {
  overflow: hidden;
}

.facility-slide {
  position: relative;
  height: 100%;
}

.facility-image {
  width: 100%;
  height: 100%;
  min-height: 360px;
  border-radius: 28px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f7f7f7;
  box-shadow: 0 20px 36px rgba(26, 35, 126, 0.18);
}

.facility-badge {
  position: absolute;
  left: 24px;
  bottom: 24px;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #1a237e;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  box-shadow: 0 12px 24px rgba(26, 35, 126, 0.18);
}

.facility-badge strong {
  font-size: 1rem;
}

.facility-copy {
  background: #fff;
  border-radius: 28px;
  padding: 32px;
  height: 100%;
  box-shadow: 0 18px 30px rgba(26, 35, 126, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.facility-list {
  margin: 0;
  padding-left: 18px;
  color: #424242;
}

.facility-list li {
  margin-bottom: 6px;
}

@media (max-width: 1023px) {
  .facility-image {
    min-height: 280px;
  }

  .facility-copy {
    padding: 24px;
  }
}
</style>
