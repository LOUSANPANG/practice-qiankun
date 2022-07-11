import './public-path.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

if (!window.__POWERED_BY_QIANKUN__) {
  app.mount('#qiankunvue')
}

export async function bootstrap() {
  console.log('11111vue bootstrap')
}

export async function mount(props: any) {
  console.log('11111vue mount', props)
  app.mount('#qiankunvue')
}

export async function unmount() {
  console.log('11111vue unmount')
  app.unmount()
}