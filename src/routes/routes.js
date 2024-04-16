import Inicio from "../components/inicio.vue"
import Juego from "../components/juego.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Inicio },
    { path: "/juego", component: Juego }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
