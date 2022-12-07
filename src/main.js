import App from './App.vue'

import { createApp } from "vue";
import router from './plugins/router';

import { registerPlugins } from '@/plugins'

 
const app = createApp(App).use(router)

registerPlugins(app)

app.mount('#app')
