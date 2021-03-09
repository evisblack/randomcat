<template>
  <div class="q-pa-md column items-center q-gutter-md">
    <q-inner-loading :showing="visible">
      <q-spinner-gears size="100px" color="primary" />
    </q-inner-loading>
   <q-card class="my-card q-pa-md" v-show="showSimulatedReturnData" style="max-width: 300px">
     <q-img :src="fotoGato" style="height: 170px; max-width: 300px"></q-img>
     <div v-for="(texto, indice) in info" :key="texto.text">
        <q-card-section class="q-mt-md" v-if="indice == contador">
          {{texto.text}}
        </q-card-section>
      </div>
      <q-btn push color="primary" label="Nuevo" icon="autorenew" @click="sumaContador()"/>
      <q-btn push color="white" class="q-ml-sm" text-color="primary" label="guardar" icon="get_app" @click="guardaFact()"/>
   </q-card>
   <p>{{fact}}</p>
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
      fact: '',
      visible: true,
      showSimulatedReturnData: false
    }
  },
  mounted: function () {
    this.getCatFact()
    this.showSimulatedReturnData = false
    setTimeout(() => {
      this.visible = false
      this.showSimulatedReturnData = true
    }, 3000)
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
    },
    guardaFact: function () {
      this.facts.push(
        this.fact
      )
    }
  }
}
</script>
