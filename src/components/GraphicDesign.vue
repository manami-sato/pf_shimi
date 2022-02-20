<template lang="pug">
section
	DetailHeadline(:txt="txt")
	div(v-for="(item, i) in data.detailContents", :key="i").modal__detail
		div.modal__detail--img
			img(:src="`${path}img/${item.img}.png`", :alt="item.ttl")
		div
			p.modal__detail--ttl {{item.ttl}}
			div.modal__detail--point 意識したところ
			p {{item.description}}
</template>

<script>
/* eslint-disable */
import DetailHeadline from "@/components/DetailHeadline";
import Mixin from "@/mixins/Mixin";

export default {
  name: "GraphicDesign",
  mixins: [Mixin],
  props: ["data", "txt"],
  components: {
    DetailHeadline,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.modal {
  &__detail {
    @include modalContentsSet($iW: 35%, $dW: 50%);
    &--ttl {
      font-size: 3.5rem;
    }
    &--point {
      @include bgPlusSet;
    }
  }
}
</style>
