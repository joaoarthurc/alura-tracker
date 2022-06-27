<template>
  <main :class="{ 'modo-escuro': this.modoEscuroAtivo }">
    <div class="row">
      <div class="col-lg-4 pe-0">
        <BarraLateral @aoTemaAlterado="trocarTema"/>
      </div>
      <div class="col-lg-8 px-3 conteudo d-flex flex-column align-items-center align-items-lg-start">
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import ITarefa from './interfaces/ITarefa';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
  },
  data () {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema (modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  }
});
</script>

<style>
  main {
    --bg-primario: #fff;
    --texto-primario: #000;
  }
  main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
  }

  .conteudo {
    background-color: var(--bg-primario);
   }
    @media screen and (max-width:991px) {
      .conteudo {
        min-height: 70vh;
      }
    }
</style>
