<template>
  <div class="q-pa-md row items-start q-gutter-md">
   <q-card class="my-card" v-for="(texto) in info" :key="texto">
        <q-card-section class="q-pt-none">
          {{texto.text}}
        </q-card-section>

      <q-card-actions class="bg-purple text-white">
        <q-btn flat>Guardar</q-btn>
      </q-card-actions>
    </q-card>
     <!--<img alt="Quasar logo" :src="fotoGato" width="300px">
   <div v-for="(texto, i) in info" :key="texto"></div>-->
  </div>
</template>
<script>
import { api } from 'boot/axios'
export default {
  name: 'PageIndex',
  data: function () {
    return {
      fotoGato: require('../assets/634.jpg'),
      info: []
    }
  },
  mounted: function () {
    this.getCatFact()
  },
  methods: {
    getCatFact: function () {
      api.get('/facts')
        .then((response) => {
          this.info = response.data
        })
    }
  }
}
</script>
