import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const apiUrl = 'http://127.0.0.1:8000';

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    CHANGE_USER(state, user) {
      state.user = user;
    },
  },

  actions: {  
    //AUTHENTIFICATION !!!

    changeUser({ commit }, user) {
      commit('CHANGE_USER', user);
    },

    /**
     * @param {{username: string, password: string}} credentials 
     */
    async login({ commit }, credentials) {
      let response = await Axios.post(apiUrl+'/api/login_check', credentials);
      localStorage.setItem('token', response.data.token);
      commit('CHANGE_USER', credentials.username);
    },

    async register({commit}, user) {
      let response = await Axios.post(apiUrl+'/register', user);
      commit('CHANGE_USER')
      if(response.status === 201) {
          return true;
      }
      return false;
  },    

    logout({ commit }) {
      localStorage.removeItem('token');
      commit('CHANGE_USER', null);
    },
},


  strict: true,
})
