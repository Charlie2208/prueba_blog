import Vue from "vue";
import Vuex from "vuex";
// import juegos from "./juegos.json";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [],
    opiniones: [],
  },
  mutations: {
    GET_JUEGOS(state, juegos) {
      state.juegos = juegos;
    },
    mutandoOpiniones(state, dataOpinion) {
      let id = 1;
      while (id !== dataOpinion.id) {
        id = Math.floor(Math.random() * 100 + 1);
      }
      dataOpinion.id = id;
      state.opiniones.push(dataOpinion);
    },
    borrarOpinion(state, index) {
      state.opiniones.splice(index, 1);
    },
    editandoOpinion(state, editado) {
      let resultado = state.opiniones.find((valor) => valor.id === editado.id);
      if (resultado !== undefined) {
        resultado.nombre = editado.nombre;
        resultado.opinion = editado.opinion;
      } else {
        alert("No se puede editar");
      }
    },
    MODIFICAR_OPINION(state, { indice, opinion }) {
      const opiniones = [...state.opiniones];
      opiniones[indice] = opinion;
      state.opiniones = opiniones;
    },
  },
  getters: {
    // enviandoJuegos(state) {
    //   return state.juegos;
    // },
    enviandoOpiniones(state) {
      return state.opiniones;
    },
  },
  actions: {
    async get_Juegos({ commit }) {
      const { data: juegos } = await axios.get("/juegos.json");
      commit("GET_JUEGOS", juegos);
    },
    guardandoOpinion({ commit }, dataOpinion) {
      commit("mutandoOpiniones", dataOpinion);
    },
    eliminarOpinion({ commit }, index) {
      commit("borrarOpinion", index);
    },
    guardandoEdicion({ commit }, editado) {
      commit("editandoOpinion", editado);
    },
    modificar_Opinion({ commit, state }, opinion) {
      const { opiniones } = state;
      const { id } = opinion;

      const IndexOpinion = opiniones.findIndex((o) => o.id === id);
      commit("MODIFICAR_OPINION", { indice: IndexOpinion, opinion });
    },
  },
});
