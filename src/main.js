import { createApp } from 'vue'
import App from './App.vue';
import store from './components/Vuex/store';
import router from './components/Router/routes';


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";

createApp(App).use(store).use(router).mount('#app');
