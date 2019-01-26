<template>
  <section class="section">
    <chiba-inu-provider :count="baseNumOfCols">
      <rows :baseNumOfCols="baseNumOfCols" slot-scope="{chibas}" :chibas="chibas"></rows>
    </chiba-inu-provider>
    <loader-section />
  </section>
</template>

<script>
import Rows from '@/components/Rows';
import LoaderSection from '@/components/LoaderSection';

export default {
  components: {
    Rows,
    LoaderSection
  },
  data() {
    return {
      baseNumOfCols: 3,
      loading: false,
      isBottom: false
    };
  }
};
</script>