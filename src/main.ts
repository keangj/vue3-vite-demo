import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'
import './styles/index.scss'
import 'normalize.css/normalize.css'
import 'vant/lib/index.css';

const app = createApp(App)
setupStore(app)
app.use(router).mount('#app')
