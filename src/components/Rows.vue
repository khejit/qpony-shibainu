<template>
  <div>
    <transition-group
      tag="div"
      v-for="rowIndex in numOfRows"
      :key="rowIndex"
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      class="row columns"
    >
      <div
        v-for="colIndex in getNumOfCols(rowIndex)"
        :key="colIndex"
        :data-index="colIndex"
        class="column is-one-third"
      >
        <card :chiba="getChiba(rowIndex, colIndex)"/>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { TweenMax } from "gsap/TweenMax";
import Card from "@/components/Card";

export default {
  props: ["chibas", "baseNumOfCols"],
  components: {
    Card
  },
  computed: {
    numOfRows() {
      if (!this.chibas) return 0;
      return Math.ceil(this.chibas.length / this.baseNumOfCols);
    }
  },
  methods: {
    getNumOfCols(rowIndex){
      if (rowIndex !== this.numOfRows){
        return this.baseNumOfCols;
      }
      const remainder = this.chibas.length % this.baseNumOfCols;
      return remainder === 0 ? this.baseNumOfCols : remainder;
    },
    getChiba(rowIndex, colIndex) {
      const index = (rowIndex - 1) * this.baseNumOfCols + (colIndex - 1),
        chiba = this.chibas[index];
      return chiba;
    },
    beforeEnter(el) {
      el.style.position = "relative";
    },
    enter(el, done) {
      TweenMax.from(el, 0.25, {
        top: "80px",
        opacity: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
      });
    }
  }
};
</script>