<template>
  <Box>
    <div class="row">
      <div class="col-4">
        {{ tarefa.descricao? tarefa.descricao : 'Tarefa sem descrição' }}
      </div>
      <div class="col-3">
        {{ tarefa.projeto?.nome || "N/D" }}
      </div>
      <div class="col-5">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import ITarefa from '@/interfaces/ITarefa';
import { defineComponent, PropType } from 'vue'
import Cronometro from './Cronometro.vue';
import Box from './Box.vue';

export default defineComponent({
  name: 'TarefaMostrada',
  components: {
    Cronometro,
    Box
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
})
</script>