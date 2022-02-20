<template lang="pug">
div(:style="{borderColor:color}").modal
	Back(:bgColor="color")
	MainDesign(:data="data", :dId="dId", :color="color")
	ProjectDesign(:data="data",:id="$route.params.id",:dId="dId")
	WebDesign(:data="data")
	Foot
</template>

<script>
/* eslint-disable */
import Back from "@/components/Back";
import MainDesign from "@/components/MainDesign";
import ProjectDesign from "@/components/ProjectDesign";
import WebDesign from "@/components/WebDesign";
import Foot from "@/components/Foot";
import Mixin from "@/mixins/Mixin";

export default {
  name: "Web",
  mixins: [Mixin],
  components: {
    Back,
    MainDesign,
    ProjectDesign,
    WebDesign,
    Foot,
  },
  data() {
    return {
      color: "",
      dId: 0,
      cId: 0,
      res: [],
      data: [],
    };
  },
  props: { id: String, dataId: Number, contentsId: Number },
  mounted() {
    this.dId = this.$route.params.dataId;
    this.cId = this.$route.params.contentsId;
    this.color = this.works[this.dId].color;
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json;
        this.data = this.res[this.dId][this.cId];
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";

.modal {
  width: 100vw;
  height: 100vh;
  background: $white;
  border-style: solid;
  border-width: 16px;
  overflow: scroll;
  &__back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: fixed;
    top: 56px;
    right: 56px;
    &::before {
      @include modalBackSet();
    }
    &::after {
      @include modalBackSet($w: 40px, $h: 6px);
    }
  }
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
    &--link {
      display: flex;
      justify-content: flex-start;
      gap: 8px;
      width: 100%;
      margin: 16px 0 0;
      a {
        @include modalBtnSet;
        &:nth-of-type(3n-2) {
          background: $yellow;
        }
        &:nth-of-type(3n-1) {
          background: $pink;
        }
        &:nth-of-type(3n) {
          background: $lightBlue;
        }
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
  &__project {
    @include modalContentsSet($m: 0 auto 32px);
    &--ttl {
      font-size: 3rem;
      line-height: 3rem;
      margin: 8px 0 0;
    }
    &--point {
      @include bgPlusSet;
    }
    &--link {
      @include modalBtnSet;
      margin: 0 auto;
    }
  }
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
