import { createRouter, createWebHistory } from 'vue-router' 
import client from '@/routes/client.js'

const routes = [...client]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router