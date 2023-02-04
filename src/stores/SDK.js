import { defineStore } from 'pinia'
// import { ref, computed } from 'vue'

export const useCapStore = defineStore('Cap', {
    state: () => ({
    data: null,
    ws:null
    }),
    actions:{
        async getSnapshot(){
            const response = await fetch('https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=500')
            const DATA = await response.json()
            this.data = await DATA
        },
        getData(symbol){
            this.ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@depth@1000ms`)
            this.ws.onmessage = response => {
                this.data =  JSON.parse(response.data)
                console.log(this.data);
            }
        }
    },
})
