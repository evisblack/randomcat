<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          CatFacts
        </q-toolbar-title>

        <div>Interesantes hechos sobre gaticos</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menú
        </q-item-label>
        <q-item clickable to="Inicio">
          <q-item-section avatar>
            <q-icon name="pets" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cat Facts</q-item-label>
            <q-item-label caption>Hechos increibles</q-item-label>
          </q-item-section>
        </q-item>
          <q-item clickable to="Guardados">
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tus Descargas</q-item-label>
            <q-item-label caption>aqui estan tus hechos guardados</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
