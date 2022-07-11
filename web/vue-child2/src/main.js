import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}


function render(props = {}) {
    const { container } = props;

    createApp(App)
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
  }

  export async function bootstrap() {
    console.log('11111 bootstrap');
  }
  export async function mount(props) {
    console.log('1111111 mount', props);
    render(props);
  }
  export async function unmount() {
    console.log('1111111 unmount');
    createApp(App).unmount()
  }