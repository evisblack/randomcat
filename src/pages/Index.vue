<template>
  <div class="q-pa-md row items-start q-gutter-md">
   <q-card class="my-card" v-for="(texto, indice) in info" :key="texto">
        <q-card-section class="q-pt-none" v-if="indice == contador" v-model="fact" >
          {{texto.text}}
        </q-card-section>
   </q-card>
   <p>{{fact}}</p>
   <q-btn push color="primary" label="Nuevo" icon="autorenew" @click="sumaContador()"/>
   <q-btn push color="white" text-color="primary" label="guardar" icon="get_app" @click="guardaFact()"/>
  </div>
</template>
<script>
import { api } from 'boot/axios'
export default {
  name: 'PageIndex',
  data: function () {
    return {
      fotoGato: require('../assets/634.jpg'),
      info: [],
      contador: 0,
      facts: [],
      fact: ''
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
    },
    sumaContador: function () {
      if (this.contador < (this.info.length - 1)) {
        this.contador++
      } else {
        this.contador = 0
      }
    }
  }
}
</script>
