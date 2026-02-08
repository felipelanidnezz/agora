<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-dark">
      <q-toolbar>
        <div
          class="logo-brand row items-center no-wrap"
          role="button"
          tabindex="0"
          @click="scrollTo('hero')"
          @keyup.enter="scrollTo('hero')"
          @keyup.space.prevent="scrollTo('hero')"
        >
          <q-avatar size="64px" rounded>
            <img :src="logoUrl" alt="Logo ÁGORA" loading="lazy" />
          </q-avatar>
          <div class="q-ml-sm">
            <div class="text-weight-bold text-primary">ÁGORA</div>
            <div class="text-caption text-secondary">Cuerpo · Mente · Espíritu</div>
          </div>
        </div>
        <q-space />
        <div class="gt-sm row items-center q-gutter-sm">
          <q-btn
            v-for="section in sections"
            :key="section.id"
            flat
            no-caps
            :label="section.label"
            @click="scrollTo(section.id)"
          />
          <q-btn unelevated color="accent" label="Admisiones" rounded @click="scrollTo('contacto')" />
        </div>
        <q-btn flat dense round icon="menu" class="lt-md" @click="drawer = !drawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay>
      <q-list>
        <q-item v-for="section in sections" :key="section.id" clickable @click="navigate(section.id)">
          <q-item-section>{{ section.label }}</q-item-section>
        </q-item>
        <q-item clickable @click="navigate('contacto')">
          <q-item-section>Admisiones</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const logoUrl = '/images/agora-logo.png';
const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes somos' },
  { id: 'niveles', label: 'Niveles' },
  { id: 'jornadas', label: 'Jornadas' },
  { id: 'instalaciones', label: 'Instalaciones' },
  { id: 'actividades', label: 'Actividades' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'ubicacion', label: 'Ubicación' }
];

const scrollTo = id => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const navigate = id => {
  scrollTo(id);
  drawer.value = false;
};
</script>
