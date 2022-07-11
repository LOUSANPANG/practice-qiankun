import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'react app',
    entry: '//localhost:5000',
    container: '#child-container-react',
    activeRule: '/react'
  },
  {
    name: 'vue app',
    entry: '//localhost:4000',
    container: '#qiankunvue',
    activeRule: '/vue'
  }
])

start()
