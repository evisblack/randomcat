import Vue from 'vue'
import axios from 'axios'

// esto permite utilizar this.$axios para no tener que importar
// axios en cada archivo vue
Vue.prototype.$axios = axios

const api = axios.create({ baseURL: 'https://cat-fact.herokuapp.com' })

// permite usar this.$api para realizar las solicitudes facilmente
Vue.prototype.$api = api

export { axios, api }
