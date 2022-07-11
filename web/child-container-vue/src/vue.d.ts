declare module '*.vue' {
  import Vue from '@/vue'
  export default Vue
}

interface Window {
  __POWERED_BY_QIANKUN__: boolean;
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: boolean;
}
