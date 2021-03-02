<template>
  <q-page class="flex flex-center">
   <!-- <q-card class="my-card">
      <q-img :src="fotoGato">
        <div class="absolute-bottom">
          <div class="text-subtitle2" v-for="texto in urlGatoRandom" :key="texto">{{texto.text}}</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat>Guardar</q-btn>
      </q-card-actions>
    </q-card>
    img alt="Quasar logo" :src="fotoGato" width="300px">-->
    <p v-for="(texto, i) in facts" :key="texto">{{i+1}} - {{texto.text}}</p>
  </q-page>
</template>
<script>
import { api } from 'boot/axios'
export default {
  name: 'PageIndex',
  data: function () {
    return {
      fotoGato: require('../assets/634.jpg'),
      facts: []
    }
  },
  mounted: function () {
    this.getCatFact()
  },
  methods: {
    getCatFact: function () {
      api.get('/facts')
        .then((response) => {
          this.facts = response.data
        })
    }
  }
}
</script>
