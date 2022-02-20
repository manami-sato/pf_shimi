<template lang="pug">
div(v-if="data.design !== undefined")
	section(v-for="(item, i) in data.design", :key="i")
		DetailHeadline(:txt="item.headline")
		div.modal__detail
			div.modal__detail--img
				img(:src="`${path}img/${item.img}.png`", :alt="item.ttl")
			div
				div.modal__detail--point {{item.point}}
				p {{item.txt}}
</template>

<script>
/* eslint-disable */
import DetailHeadline from "@/components/DetailHeadline";
import Mixin from "@/mixins/Mixin";

export default {
  name: "WebDesign",
  mixins: [Mixin],
  props: ["data"],
  components: {
    DetailHeadline,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
</style>
