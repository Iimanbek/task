<template >
    <div>
        <v-select
        v-model="hello"
        chips
        label="Select"
        :items="['btcusdt','bnbbtc', 'ethbtc']"
        ></v-select>        
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useCapStore } from '../stores/SDK';
export default {
    data() {
        return {
            hello:''
        }
    },
    mounted() {
    },
    computed:{
        ...mapStores(useCapStore)
    },
    methods: {

    },
    updated() {
        // this.CapStore.ws.close()
        // this.changedValue()

    },
    watch: {
    hello(symbol) {
        console.log(symbol);
        this.CapStore.ws.close()
        this.CapStore.getData(symbol)
    }
  }

}
</script>
<style lang="css">
    
</style>