<template lang="pug">
h2 {{txt}}
</template>

<script>
/* eslint-disable */
export default {
  name: "DetailHeadline",
  props: ["txt"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
h2 {
	width: max-content;
	margin: 88px auto 56px;
	position: relative;
  &::after {
    content: "";
    display: block;
    width: 80%;
    height: 2px;
    background: $deepBlue;
    margin: auto;
    position: absolute;
    inset: auto 0 -4px;
  }
}
</style>
