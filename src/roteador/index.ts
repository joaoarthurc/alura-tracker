import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import FormularioProjeto from '../views/Projetos/Formulario.vue'
import ListaProjetos from '../views/Projetos/Lista.vue';

const rotas: RouteRecordRaw[] = [
  {
    path:'/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/ProjeTos',
    component: Projetos,
    children: [
      {
        path:'',
        name: 'ListaProjetos',
        component: ListaProjetos
      },
      {
        path:'novo',
        name: 'Novo Projeto',
        component: FormularioProjeto
      },
      {
        path:':id',
        name: 'Editar Projeto',
        component: FormularioProjeto,
        props: true
      },
    ]
  }
];

const roteador = createRouter({
  history:createWebHashHistory(),
  routes: rotas
});

export default roteador;