import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'vue1',
    entry: '//localhost:3001',
    container: '#vue1',
    activeRule: '/vue1'
  },
  {
    name: 'vue2',
    entry: '//localhost:3002',
    container: '#vue2',
    activeRule: '/vue2'
  }
])

start()
