<template>
  <div>
    <h5 class="py-3">
      Escribe tu opinion para el juego: {{ datosOpiniones.juego.name }}
    </h5>

    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          :value="`${datosOpiniones.nombre}`"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Opinion</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          :value="`${datosOpiniones.opinion}`"
        />
      </div>

      <button
        type="button"
        class="btn btn-primary btn-sm mx-3"
        @click.prevent="$router.push('/administracion')"
      >
        Regresar
      </button>
      <button
        type="button"
        class="btn btn-info btn-sm"
        @click="modificarOpinion"
      >
        Guardar
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "EditandoView",
  props: ["id"],

  computed: {
    ...mapState(["opiniones"]),
    datosOpiniones() {
      const { opiniones } = this;
      const { id } = this.$route.params;
      const opinion = opiniones.find((p) => p.id == id);
      return opinion;
    },
  },
  methods: {
    ...mapActions(["modificar_Opinion"]),
    modificarOpinion() {
      const { opinion } = this;
      this.modificar_Opinion(opinion);
      this.$router.push("/administracion");
    },
  },
};
</script>

<style></style>
