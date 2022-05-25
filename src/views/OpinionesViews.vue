<template>
  <div>
    <h1 class="py-3">Lista de Opiniones</h1>
    <div v-if="enviandoOpiniones.length > 0">
      <div class="accordion" id="accordionExample">
        <div
          class="accordion-item"
          v-for="(opinion, index) in enviandoOpiniones"
          :key="index"
        >
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapseOne' + index"
              aria-expanded="true"
              :aria-controls="'collapseOne' + index"
            >
              Opinion creada por: {{ opinion.nombre }}. Para el juego
              {{ opinion.juego.name }}
            </button>
          </h2>
          <div
            :id="'collapseOne' + index"
            class="accordion-collapse collapse"
            :aria-labelledby="'headingOne' + index"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p><strong>Opinion: </strong>{{ opinion.opinion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-else>
      No existen opinones
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OpinionesViews",
  computed: {
    ...mapGetters(["enviandoOpiniones"]),
  },
};
</script>

<style></style>
