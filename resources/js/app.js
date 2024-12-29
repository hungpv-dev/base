import './bootstrap'
import { createApp } from 'vue'
import router from '@/routes/index.js'
import App from '@/App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')