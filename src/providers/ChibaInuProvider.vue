<template>
  <div>
    <slot :chibas="chibas" />
  </div>
</template>

<script>
import chibaApi from "@/api/chibaApi";
import store from "@/store";
import delay from 'lodash/delay';

export default {
  props: ['count'],
  computed: {
    chibas() {
      return store.state.chibas;
    },
    shouldLoadMoreChibas(){
      return store.state.isLoading
    }
  },
  watch: {
    shouldLoadMoreChibas: function(newVal){
      if (newVal) {
        delay(()=>{
          this.getChibas(this.count);
        }, 300)
      }
    }
  },
  mounted(){
    this.getChibas(this.count);
  },
  methods: {
    async getChibas(count = 3) {
      try {
        const response = await chibaApi.get(`${count}`),
          chibas = response.data.message;
        store.commit("addChibas", {
          newChibas: chibas
        });
        store.commit("turnOffLoading");
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>