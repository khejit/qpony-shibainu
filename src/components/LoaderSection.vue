<template>
  <div class="level loader-section">
    <div class="level-item has-text-centered">
      <a v-if="isLoading" class="loadable button is-primary is-large is-loading">Loading</a>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import throttle from "lodash/throttle";
import {mapState} from 'vuex';

export default {
  mounted() {
    window.addEventListener("scroll", throttle(this.handleScroll, 150));
  },
  computed: mapState(['isLoading']),
  methods: {
    handleScroll() {
      const distanceToBottom =
        document.documentElement.offsetHeight -
        (document.documentElement.scrollTop + window.innerHeight);

      if (distanceToBottom < 50) {
        store.commit("turnOnLoading");
      }
    }
  }
};
</script>