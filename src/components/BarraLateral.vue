<template>
  <header>
    <div class="d-flex flex-column align-items-center">
      <h1>
        <img src="../assets/logo.png" alt="logo">
      </h1>
      <button class="btn bg-white" @click="alterarTema">
        {{ textoBotao }}
      </button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
         <li class="pt-2">
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data () {
    return {
      modoEscuroAtivo: false
    }
  },
  computed: {
    textoBotao () {
      return this.modoEscuroAtivo ? 'Ativar Modo Claro' : 'Ativar Modo Escuro';
    }
  },
  methods : {
    alterarTema () {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo);
    }
  }
});
</script>

<style scoped>
  header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
  }

  @media screen and (max-width: 991px) {
    header {
      padding: 2.5rem;
      max-height: 40vh;
    }
  }

  .panel {
    box-shadow: none;
  }

  .link {
    color: #ffffff;
    text-decoration: none;
    transition: .4s;
  }

  .link:hover {
   color: black;
   font-size: 18px;
  }
</style>