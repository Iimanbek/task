import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'

export const useCapStore = defineStore('Cap', {
    state: () => ({
     data: null
    }),
    actions:{
        async getSnapshot(){
            const response = await fetch('https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=500')
            const DATA = await response.json()
            this.data = await DATA
        },
        getData(){
            const ws = new WebSocket(`wss://stream.binance.com:9443/ws/btcusdt@depth@1000ms`)
            ws.onmessage = response => {
                this.data.value = console.log(JSON.parse(response.data))
                this.data.value = JSON.parse(response.data)
            }
        }
    },
})
