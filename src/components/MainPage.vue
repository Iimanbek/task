<template>
    <div>
        <navogation/>
        <div class="main">
        <v-table/>
        </div>
    </div>
  </template>
  <script>
  import Tables from '../components/Tables.vue'
  import NavBar from '../components/NavBar.vue'
  import { mapStores } from 'pinia';
  import { useCapStore } from '../stores/SDK'
  export default{
    data() {
        return {
            
        }
    },
    components:{
        navogation: NavBar,
        'v-table': Tables
    },
    computed:{
        ...mapStores(useCapStore)
    },
    methods: {
    },
    mounted() {
        this.CapStore.getSnapshot()
        this.CapStore.getData()
    },
}
//   import {ref} from 'vue'
//   let data = ref(null)
//   const getSnapshot = async () => {
//     const response = await fetch('https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=500')
//     const data = await response.json()
//     console.log(data)
//   }
//   getSnapshot()
  
//   const ws = new WebSocket(`wss://stream.binance.com:9443/ws/btcusdt@depth@1000ms`)
//   console.log(ws)
  
//   ws.onopen = () => {
//     console.log('online')
//   }
//   ws.onmessage = response => {
//     data.value = console.log(JSON.parse(response.data))
//     data.value = JSON.parse(response.data)
//   }
  
//   const close = () => {
//     ws.onclose = () => {
//       console.log('close')
//     }
//   }
  
  </script>

<style>
.main{
    margin-top: 10% ;
}
</style>