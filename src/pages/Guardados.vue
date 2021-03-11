<template>
  <q-page padding>
    <div class="text-h5">Tus Descargas</div>
    <div v-for="fact in facts">
      <p>{{fact}} <q-btn class="glossy" round color="negative" icon="highlight_off" /></p>
      
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
  created: function () {
    if (localStorage.getItem('facts')) { this.facts = JSON.parse(localStorage.getItem('facts')); }
  }
}
</script>
