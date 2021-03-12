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
        <div v-if="indice == contador">
          <!--Botón que llama a la función que guarda la frase que está en pantalla, la cual pasamos como parámetro-->
        <q-btn push color="white" text-color="primary" label="guardar" icon="get_app" @click="guardaFact(texto.text)"/>
        <q-btn push color="primary" class="q-ml-sm" label="Nuevo" icon="autorenew" @click="sumaContador()"/>  
        </div>
      </div>  
   </q-card>
  </div>
</template>
<script>
// importamos api del archivo axios que hemos creado para poder usarlo
import { api } from 'boot/axios'
export default {
  name: 'PageIndex',
  data: function () {
    return {
      fotoGato: require('../assets/634.jpg'),
      info: [],
      contador: 0,
      facts: [],
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
    // llama a la api y almacena la respuesta en un array llamado info
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
    // coge las frases y las alamacena por separado en otro array
    // que luego mostraremos en otra página y guardaremos en localStorage
    guardaFact: function (fact) {
      this.facts.push(fact)
    }
  },
  //cuando se crea la página cargamos los datos que esten guardados en localStorage
  created: function () {
    if (localStorage.getItem('facts')) { this.facts = JSON.parse(localStorage.getItem('facts')); }
  },
  //creamos un watcher que este pendiente de los cambios en el array facts y lo actualice
  watch: {
    facts: {
      handler () {
        localStorage.setItem('facts', JSON.stringify(this.facts));
      }
    }
  }
}
</script>
