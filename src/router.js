import {createRouter,createWebHistory} from 'vue-router';
import MassPage from './components/MassPage.vue';
import TimePage from './components/TimePage.vue';
import LengthPage from './components/LengthPage.vue';
import HomePage from './components/HomePage.vue';
import PressPage from './components/PressPage.vue';
import CurrencyPage from './components/CurrencyPage.vue';
const routes=[
    {
        path:'/',
        name:'Inicio',
        component:HomePage
    },
    {
        path:'/Tiempo',
        name:'Unidades de Tiempo',
        component:TimePage
    },
    {
        path:'/Presion',
        name:'Unidades de Presion',
        component:PressPage
    },
    {
        path:'/Currency',
        name:'Cambio de moneda',
        component:CurrencyPage
    },
    {
        path:'/Mass',
        name:'Unidades de Masa',
        component:MassPage
    },
    {
        path:'/Length',
        name:'Unidades de Longitud',
        component:LengthPage
    }
];

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});
export default router;


