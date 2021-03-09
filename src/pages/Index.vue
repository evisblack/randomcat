<template>
  <div class="q-pa-md column items-center q-gutter-md">
    <!--cuando se monta la página muestra unos engranages simulando la carga-->
    <q-inner-loading :showing="visible">
      <q-spinner-gears size="100px" color="primary" />
    </q-inner-loading>
    <!--Una vez se carga se muestra la tarjeta con la información de gaticos-->
   <q-card class="my-card q-pa-md" v-show="showSimulatedReturnData" style="max-width: 300px">
     <q-img :src="fotoGato" style="height: 170px; max-width: 300px"></q-img>
     <!--Recorre el array que hemos recibido como respuesta y muestra las frases-->
     <div v-for="(texto, indice) in info" :key="texto.text">
        <q-card-section class="q-mt-md" v-if="indice == contador">
          {{texto.text}}
        </q-card-section>
      </div>
      <q-btn push color="primary" label="Nuevo" icon="autorenew" @click="sumaContador()"/>
      <!--Este botón de momento no funciona-->
      <q-btn push color="white" class="q-ml-sm" text-color="primary" label="guardar" icon="get_app" @click="guardaFact()"/>
   </q-card>
   <!--Para hacer pruebas-->
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
  // cuando la página está montada llama a la funcion que obtiene las frases de los gatos
  // y simula la carga esperando 3 segundos
  mounted: function () {
    this.getCatFact()
    this.showSimulatedReturnData = false
    setTimeout(() => {
      this.visible = false
      this.showSimulatedReturnData = true
    }, 3000)
  },
  methods: {
    // llama a la api y almacena la respuesta en un array
    getCatFact: function () {
      api.get('/facts')
        .then((response) => {
          this.info = response.data
        })
    },
    // función que añade 1 a contador para recorrer de una en una
    // las frases que hemos obtenido de la api
    sumaContador: function () {
      if (this.contador < (this.info.length - 1)) {
        this.contador++
      } else {
        this.contador = 0
      }
    },
    // esta función todavia no funciona
    // la idea es que coja las frases y las alamacene por separado en otro array
    // que luego mostraremos en otra página y guardaremos en localStorage
    guardaFact: function () {
      this.facts.push(
        this.fact
      )
    }
  }
}
</script>
