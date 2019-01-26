<template>
  <section class="section">
    <rows :baseNumOfCols="baseNumOfCols" :chibas="chibas"></rows>
    <div v-if="!chibas.length" class="level">
      <div class="notification is-info level-item has-text-centered">
        <p>Quite empty. Why don't you <router-link to="/">give these dogs some love</router-link>?</p>
      </div>
    </div>
  </section>
</template>

<script>
import Rows from "@/components/Rows";

export default {
  components: {
    Rows
  },
  computed: {
    chibas() {
      return this.$store.getters.favChibas;
    }
  },
  data() {
    return {
      baseNumOfCols: 3
    };
  }
};
</script>