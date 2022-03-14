import { createRouter, createWebHistory } from "vue-router"
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import userPage from '../views/userPage.vue'
import logoutPage from '../views/logoutPage.vue'

const routes = [{
    path: '/',
    name: "home",
    component: HomeView
}, {
    path: '/login',
    name: "Login",
    component: LoginView
}, {
    path: '/user',
    name: "user",
    component: userPage
},
{
    path: '/logout',
    name: "logoutPage",
    component: logoutPage
}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router