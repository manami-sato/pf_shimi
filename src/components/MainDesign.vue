<template lang="pug">
div.modal__info
	div.modal__info--img
		img(:src="`${path}img/${data.img}.png`")
		//- div(v-if="dId == 1").modal__info--link
			a(v-for="(item, i) in data.link", :href="item.url", target="page") {{item.ttl}}
	section
		h1.modal__info--ttl {{data.ttl}}
		div.modal__info--role
			span(v-for="(item, i) in data.role", :key="i", :style="{background:color}") {{item}}
		div.modal__info--tool
			p 使用ソフト：
			span(v-for="(item, i) in data.tool", :key="i") {{item}}
		p.modal__info--txt {{data.txt}}
		div.modal__info--other
			div(v-if="data.timing !== undefined", :style="{background:color}")
				p 制作時期
				p {{data.timing}}
			div(v-if="data.system !== undefined" ,:style="{background:color}")
				p 制作体制
				p {{data.system}}
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin";
export default {
  name: "MainDesign",
  mixins: [Mixin],
  props: ["data", "dId", "color"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
.modal {
  &__info {
    display: flex;
    justify-content: center;
    gap: 64px;
    height: max-content;
    padding: 104px 0 0;
    &--img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50%;
      img {
        width: 100%;
      }
    }
    > section {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      width: 30%;
      height: 100%;
    }
    &--ttl {
      font-size: 3rem;
      margin: 0 0 8px;
    }
    &--role {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 8px;
      span {
        @include bgPlusSet($c: $deepBlue, $bg: $lightBlue, $m: 0, $fs: 1.6rem);
        &:last-of-type {
          margin: 0;
        }
      }
    }
    &--tool {
      @include bgPlusSet(
        $c: $deepBlue,
        $bg: $orange,
        $m: 12px 0 0,
        $fs: 1.6rem
      );
      span {
        &::after {
          content: ",";
        }
        &:last-of-type {
          &::after {
            content: "";
          }
        }
      }
    }
    &--txt {
      text-align: right;
      line-height: 3rem;
      margin: 24px 0 56px;
    }
    &--other {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 126px;
        height: 96px;
        background: $lightBlue;
        font-size: 1.4rem;
        p {
          text-align: center;
          &:first-of-type {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin: 0 0 10px;
            position: relative;
            &::after {
              content: "";
              display: block;
              width: 120%;
              height: 1px;
              background: $deepBlue;
              position: absolute;
              bottom: -2px;
            }
          }
        }
      }
    }
  }
  // &__link {
  //   display: flex;
  //   justify-content: flex-start;
  //   gap: 8px;
  //   width: max-content;
  //   margin: 0 0 8px;
  //   position: fixed;
  //   // right: 40px;
  //   // bottom: 56px;
  //   right: 40px;
  //   bottom: 20px;
  //   z-index: 10;
  //   a {
  //     display: flex;
  //     justify-content: center;
  //     @include modalBtnSet;
  //     position: relative;
  //     z-index: 1;
  //     &:nth-of-type(3n-2) {
  //       background: $yellow;
  //     }
  //     &:nth-of-type(3n-1) {
  //       background: $pink;
  //     }
  //     &:nth-of-type(3n) {
  //       background: $lightBlue;
  //     }
  //     &::after {
  //       content: "";
  //       display: block;
  //       width: calc(100% + 4px);
  //       height: 16px;
  //       background: $deepBlue;
  //       position: absolute;
  //       inset: auto auto -14px auto;
  //       // z-index: -1;
  //       transform: translateY(0);
  //       transition: 0.2s transform;
  //     }
  //     &:hover {
  //       &::after {
  //         // content: "";
  //         // display: block;
  //         // width: calc(100% + 4px);
  //         // height: 24px;
  //         // background: $deepBlue;
  //         // position: absolute;
  //         // inset: auto auto -14px auto;
  //         transform: translateY(-4px);
  //         // z-index: -1;
  //       }
  //     }
  //   }
  // }
}
</style>
