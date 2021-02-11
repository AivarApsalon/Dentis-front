import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddRegistration from "../views/AddRegistration.vue";
import AllRegistrations from "@/views/AllRegistrations";
import GetRegistration from "@/views/GetRegistration";
import DeleteRegistration from "@/views/DeleteRegistration";
import ChangeRegistration from "@/views/ChangeRegistration";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/add-registration',
        name: 'AddRegistration',
        component: AddRegistration
    },
    {
        path: '/registrations',
        name: 'AllRegistration',
        component: AllRegistrations
    },
    {
        path: '/registrations-by-id',
        name: 'GetRegistration',
        component: GetRegistration
    },
    {
        path: '/delete-registration/',
        name: 'DeleteRegistration',
        component: DeleteRegistration
    },
    {
        path: '/change-registration',
        name: 'ChangeRegistration',
        component: ChangeRegistration
    },
]

const router = new VueRouter({
    routes
})

export default router
