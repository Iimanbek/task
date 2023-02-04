<template>
    <div>
      <Promo/>
      <div v-if="data">
        <div v-for="item in data.a">
          <div v-if="item[0] > 0 && item[1] > 0">
            <span>{{  Math.round(item[0], 3) }}</span>
            <span>-</span>
            <span>{{  Math.round(item[1], 3) }}</span>
            <span>-</span>
            <span>{{  Math.round(item[1] * item[0], 3) }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { mapStores } from 'pinia';
  import { useCapStore } from '../stores/SDK'
  export default{
    data() {
        return {
            
        }
    },
    computed:{
        ...mapStores(useCapStore)
    },
    mounted() {
        this.CapStore.getSnapshot()
        this.CapStore.getData()
        console.log(this.CapStore.data);
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