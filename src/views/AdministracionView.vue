<template>
  <div>
    <h1 class="py-3">Administrando la lista de opiniones</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Persona</th>
          <th scope="col">Juego</th>
          <th scope="col">Opinion</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="(opinion, index) in enviandoOpiniones" :key="index">
        <tr>
          <th scope="row">{{ opinion.id }}</th>
          <td>{{ opinion.nombre }}</td>
          <td>{{ opinion.juego.name }}</td>
          <td>Nueva Opinión sobre el juego {{ opinion.juego.name }}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger btn-sm mx-3"
              @click.prevent="enviandoOpiniones.splice(index, 1)"
            >
              Eliminar
            </button>
            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click.prevent="$router.push(`/editando/${opinion.id}`)"
            >
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "OpinionesViews",
  computed: {
    ...mapGetters(["enviandoOpiniones"]),
  },

  methods: {
    ...mapActions(["borrarOpinion"]),
  },
};
</script>

<style></style>
