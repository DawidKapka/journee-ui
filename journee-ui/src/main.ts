import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router';

import {IonicVue, IonPage} from '@ionic/vue';

import 'primeicons/primeicons.css'

const pinia = createPinia()

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia);

app.component('ion-page', IonPage)
  
router.isReady().then(() => {
  app.mount('#app');
});
