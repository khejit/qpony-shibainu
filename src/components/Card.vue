<template>
  <div class="card large">
    <div class="card-header card__header">
      <a
        @click="like"
        title="Give this dog some love!"
        :class="{'is-on': chiba.isFav}"
        class="card__action absolute button is-medium"
      >
        <span class="icon icon--heart">
          <i class="fas fa-heart fa-lg"></i>
        </span>
      </a>
    </div>
    <div class="card-image card__image">
      <image-w-loader :src="chiba.image"/>
    </div>
  </div>
</template>

<script>
import ImageWLoader from "@/components/ImageWLoader";

export default {
  props: ["chiba"],
  components: {
    ImageWLoader
  },
  methods: {
    like() {
      this.$store.dispatch("toggleChibaFav", this.chiba.id);
    }
  }
};
</script>