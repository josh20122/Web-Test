import App from './App.vue'

import { createApp } from "vue.js";
import router from './plugins/router.js';

import { registerPlugins } from '@/plugins.js'

 
const app = createApp(App).use(router)

registerPlugins(app)

app.mount('#app')
