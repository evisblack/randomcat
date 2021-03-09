<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
      <p v-for="fact in facts" :key="fact">{{fact}}</p>
  </div>
</template>

<script>
export default {
  name: 'Guardados'
}
</script>
