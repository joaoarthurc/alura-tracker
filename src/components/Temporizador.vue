<template>
  <div
    class="
      d-flex
      flex-column flex-lg-row
      justify-content-center
      align-items-center
    "
  >
    <Cronometro :tempoEmSegundos="tempoEmSegundos" class="px-3 py-3" />
    <div class="d-flex">
      <button class="button mx-3" @click="iniciar" :disabled="cronometroRodando">
        <span class="icon">
          <i class="fas fa-play"></i>
        </span>
        <span>play</span>
      </button>
      <button class="button mx-3" @click="finalizar" :disabled="!cronometroRodando">
        <span class="icon">
          <i class="fas fa-stop"></i>
        </span>
        <span>stop</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "TemporizadorAtividade",
  emits: ['aoTemporizadorFinalizado'],
  components: {
    Cronometro,
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos++;
      }, 1000);
    },
    finalizar() {
      clearInterval(this.cronometro);
      this.cronometroRodando = false;
      this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>
