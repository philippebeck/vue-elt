import { createApp } from 'vue';
import Dev from './serve.vue';
import VueElt from '@/entry.esm';

const app = createApp(Dev);
app.use(VueElt).mount('#app');
