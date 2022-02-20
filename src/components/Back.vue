<template lang="pug">
div(@click="back",:style="{background:bgColor}").modal__back
</template>

<script>
/* eslint-disable */

export default {
  name: "Back",
  props: ["bgColor"],
  methods: {
    back() {
      history.back();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
.modal {
  &__back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    opacity: 1;
    position: fixed;
    top: 56px;
    right: 56px;
    transition: 0.2s opacity;
    z-index: 10;
    &:hover{
      opacity: 0.6;
      cursor: pointer;
    }
    &::before {
      @include modalBackSet();
    }
    &::after {
      @include modalBackSet($w: 40px, $h: 6px);
    }
  }
}
</style>
