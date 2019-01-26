<template>
  <figure class="image loadable" :class="{'is-loading': !loaded}">
    <img v-show="loaded" @load="handleOnLoad" :src="src" alt="Image">
  </figure>
</template>

<script>
import delay from 'lodash/delay';

export default {
  props: ["src"],
  data() {
    return {
      loaded: false
    };
  },
  methods: {
    handleOnLoad() {
      // delay(()=>{
          this.loaded = true;
      // }, 1000)
    }
  }
};
</script>