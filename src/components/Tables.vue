<template >
  <div v-if=" CapStore.data ">
    <h1>{{ CapStore.data.s }}</h1>  
    <div class="main_wrapper">
      <table class="table">
        <h2>BIDS</h2>
    <thead class="table__thead">
      <tr class="table-row">
        <th class="table-row__th">Price</th>
        <th class="table-row__th">Ammount</th>
        <th class="table-row__th table-row__th-total_hide">Total</th>
      </tr>
    </thead>
    <tbody  v-if="CapStore.data" class="table__tbody">
      <tr class="table-row" v-for="(item, index) in  CapStore.data.b" :key="index">
        <td class="table-row__td">{{ item[0] }}</td>
        <td class="table-row__td">{{ item[1] }}</td>
        <td class="table-row__td table-row__td-total_hide">
          {{ item[0] * item[1] }}
        </td>
      </tr>
    </tbody>
      </table>
      <table class="table">
        <h2>ASKS</h2>
    <thead class="table__thead">
      <tr class="table-row">
        <th class="table-row__th">Price</th>
        <th class="table-row__th">Ammount</th>
        <th class="table-row__th table-row__th-total_hide">Total</th>
      </tr>
    </thead>
    <tbody  v-if="CapStore.data" class="table__tbody">
      <tr class="table-row" v-for="(item, index) in  CapStore.data.a" :key="index">
        <td class="table-row__td">{{ item[0] }}</td>
        <td class="table-row__td">{{ item[1] }}</td>
        <td class="table-row__td table-row__td-total_hide">
          {{ item[0] * item[1] }}
        </td>
      </tr>
    </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useCapStore } from '../stores/SDK';
export default {
    computed:{
        ...mapStores(useCapStore)
    }
}
</script>
<style scoped> 

.table {
  border-collapse: collapse;
  border: 2px solid grey; 
  width: 40%;
  background-color: inherit;
  text-align: center;
  overflow: scroll;
}
.table-row__th,
.table-row__td {
  border: 1px solid grey;
  padding: 10px 15px;
}
table-row__th {
  width: 20%;
}
.table__caption_bg {
  background-color: floralwhite;
}


@media screen and (max-device-width: 840px) {
  .table-row__th-total_hide {
    display: none;
  }
  .table-row__td-total_hide {
    display: none;
  }
}
.main_wrapper{
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
  height: 65vh;
  width: 100%;
  margin: 50px auto;
  scroll-snap-type: y mandatory;
}
h1{
  text-align: center;
}
</style>