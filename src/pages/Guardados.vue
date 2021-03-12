<template>
  <q-page padding>
    <div class="text-h5">Tus Descargas</div>
    <div v-for="fact in facts">
      <p>{{fact}} <q-btn class="glossy" round color="negative" icon="highlight_off" @click="eliminaFrase(fact)"/></p>
      
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Guardados',
  data: function () {
    return {
      facts: []
    }
  },
  methods: {
      eliminaFrase: function (fact) {
      // Busca el indice de la frase y la elimina del array de tareas
      const indice = this.facts.indexOf(fact);
      this.facts.splice(indice, 1);
    }
  },
  // al crearse la página obtiene lo que hay almacenado en localStorage
  created: function () {
    if (localStorage.getItem('facts')) { this.facts = JSON.parse(localStorage.getItem('facts')); }
  },
  // watcher que observa los cambios en el array Facts y lo actualiza
  watch: {
    facts: {
      handler () {
        localStorage.setItem('facts', JSON.stringify(this.facts));
      },
    }
  }
}
</script>
