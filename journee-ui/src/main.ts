import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import {IonicVue, IonPage} from '@ionic/vue';

import 'primeicons/primeicons.css'

const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('ion-page', IonPage)
  
router.isReady().then(() => {
  app.mount('#app');
});
