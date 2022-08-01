<template>
  <section class="w-100">
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjet"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { useStore } from "@/store";
import { ALTERA_PROJETO, ADICIONA_PROJETO } from "@/store/tipo-mutacoes";
import { defineComponent } from "vue";
import useNotificador from "@/hooks/notificador"

export default defineComponent({
  name: "FormularioProjeto",
  props: {
    id: {
      type: String
    }
  },
  mounted () {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id);
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: ""
    };
  },
  methods: {
    salvar() {
      if(this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        });
        this.$router.push('/projetos');
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }
        this.nomeDoProjeto = "";
        this.notificar("Excelente", "O projeto foi cadastrado com sucesso", TipoNotificacao.SUCESSO);
        this.$router.push('/projetos');
    },
  },
  setup () {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar
    };
  }
});
</script>