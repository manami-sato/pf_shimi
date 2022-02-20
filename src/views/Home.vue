<template lang="pug">
main.index
  div.index__fv
    div.index__fv--img
      img(:src="`${path}img/index_fv.png`")
  section.index__about
    h2.index__about--ttl わたしのこと
    div
      section.index__about--info
        h3 清水葵
        p Shimizu Aoi
        p グラフィック/Webデザイナー志望
      p
        |ECCコンピュータ専門学校<br>
        |マルチメディア研究学科 Webデザインコース<br>
        |2023年3月卒業予定
      p.index__about--slogan
        |心を動かすデザインがしたい。<br>
        span 見ている人がワクワクする
        |ような、<br>
        span 思わず気になってしまう
        |ような<br>
        |ものが作りたい。
    div.index__about--img
      img(:src="`${path}img/index_about.png`")
  div.index__works
    section.index__works--headline
      h2.index__works--headline--ttl 制作物
      p 
        |学校での制作や自主制作の作品です。<br>
        |かわいいポップなデザイン、文字のデザインが得意です。
    ul.index__works--tab
      li(v-for="(item, i) in works", :key="i",@click="tabClick(i)", :class="i == tabIndex ? 'tabActive' : ''").index__works--tab--contents {{item.name}}
    div(:class="`wrap${tabIndex}`").index__works--wrap
      div(v-for="(item, i) in res", :key="i", :class="`contents${i}`", v-if="i == tabIndex")
        div(v-for="(item2, i2) in item", :key="i2", @click="contentsClick(i2)").index__works--contents
          div.index__works--contents--info
            p {{item2.ttl}}
            div
              span(v-for="(item3, i3) in item2.role", :key="i3") {{item3}}
          img(:src="`${path}img/${item2.img}.png`")
  section.index__contact
    h2.index__contact--ttl 連絡先
    a(href="mailto:aoi.shimizu0@gmail.com").index__contact--mail aoi.shimizu0@gmail.com
    p.index__contact--txt ご連絡お待ちしております。
  Foot
</template>

<script>
/* eslint-disable */
import Foot from "@/components/Foot";
import Mixin from "@/mixins/Mixin";
// import common from "../assets/js/common.js";
// const path = "https://click.ecc.ac.jp/ecc/msatou/shimi/";

export default {
  name: "Home",
  mixins: [Mixin],
  components: {
    Foot,
  },
  data() {
    return {
      res: [],
      tabIndex: 0,
      contents: "",
    };
  },
  methods: {
    tabClick(i) {
      this.tabIndex = i;
    },
    contentsClick(i2) {
      this.contents = this.res[this.tabIndex][i2].img;
      if (this.tabIndex !== 2) {
        this.$router.push({
          name: `${this.works[this.tabIndex].route}`,
          params: {
            id: `${this.contents}`,
            dataId: `${this.tabIndex}`,
            contentsId: `${i2}`,
          },
          props: true,
        });
      } else {
        this.$router.push({
          name: "Typography",
          params: {
            id: `${this.contents}`,
            dataId: `${this.tabIndex}`,
            contentsId: `${i2}`,
          },
          props: true,
        });
      }
    },
  },
  mounted() {
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.index {
  &__fv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url("https://click.ecc.ac.jp/ecc/msatou/shimi/img/index_fv_bg_border_top.png"),
      url("https://click.ecc.ac.jp/ecc/msatou/shimi/img/index_fv_bg_border_bottom.png");
    background-size: auto 16px, auto 16px;
    background-repeat: no-repeat, no-repeat;
    background-position: right 0 top 0, left 0 bottom 0;
    margin-bottom: 126px;
    &--img {
      width: 90vw;
      max-width: 1200px;
      height: 80vh;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      &::before {
        @include fvDecorationSet();
      }
      &::after {
        @include fvDecorationSet(
          $w: 224px,
          $h: 48px,
          $bg:
            url("https://click.ecc.ac.jp/ecc/msatou/shimi/img/index_fv_bg_decoration_bottom.png"),
          $i: auto 0 0 auto
        );
      }
    }
  }
  &__about {
    flex-wrap: wrap;
    min-height: 80vh;
    // max-height: 520px;
    @include indexSet();
    > div:first-of-type {
      display: flex;
      justify-content: center;
      flex-direction: column;
      min-width: 400px;
      width: 50%;
      height: 100%;
    }
    &--info {
      display: grid;
      grid-template-columns: 120px auto;
      grid-template-rows: 3rem 1.6rem;
      grid-gap: 8px 0;
      width: max-content;
      background: $white;
      margin: 0 0 24px;
      padding: 12px 16px;
      h3 {
        grid-column: 1;
        grid-row: 1;
        font-size: 3rem;
        line-height: 3rem;
      }
      p {
        display: flex;
        align-items: center;
        &:nth-of-type(1) {
          grid-column: 2;
          grid-row: 1;
        }
        &:nth-of-type(2) {
          grid-column: 1/3;
          grid-row: 2;
        }
      }
    }
    &--slogan {
      font-size: 2.4rem;
      line-height: 4.5rem;
      margin: 24px 0 0;
      span {
        display: inline-block;
        color: $pink;
        background: $deepBlue;
        line-height: 3.2rem;
      }
    }
    &--img {
      width: 30%;
      min-width: 304px;
      height: 70%;
      border: 2px solid $deepBlue;
      img {
        display: block;
        width: calc(100% - 16px);
        height: calc(100% - 16px);
        background: $white;
        margin: 8px;
        object-fit: cover;
      }
    }
  }
  &__works {
    padding: 104px 0;
    &--headline {
      width: 90vw;
      max-width: 1000px;
      margin: 0 auto 80px;
      &--ttl {
        margin: 0 0 16px;
        @include ttlSet;
      }
    }
    &--tab {
      display: flex;
      justify-content: space-around;
      width: 90vw;
      max-width: 1000px;
      margin: 0 auto 40px;
      &--contents {
        color: darken($color: $lightBlue, $amount: 10%);
        font-size: 2rem;
        transition: 0.2s color;
        position: relative;
        &::after {
          content: "";
          display: block;
          // width: 20%;
          width: 0;
          height: 2px;
          background: $deepBlue;
          margin: auto;
          // opacity: 0;
          // transition: 0.2s width, 0.2s opacity;
          transition: 0.2s width;
          position: absolute;
          inset: auto 0 -4px;
        }
        &:hover {
          color: $deepBlue;
          &::after {
            width: 80%;
          }
        }
      }
    }
    &--wrap {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 80px 0;
    }
    &--contents {
      display: block;
      position: relative;
      &:hover {
        cursor: pointer;
        .index__works--contents--info {
          opacity: 1;
        }
      }
      &--info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        background: rgba($color: $deepBlue, $alpha: 0.8);
        padding: 5%;
        opacity: 0;
        transition: 0.2s opacity;
        position: absolute;
        inset: 3px auto auto 3px;
        div {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        p {
          color: $pink;
          font-size: 2.2rem;
          letter-spacing: 0.1rem;
          margin: 0 0 4px;
        }
        span {
          display: inline-block;
          width: max-content;
          color: $deepBlue;
          background: $pink;
          font-size: 1.4rem;
          margin: 4px;
          padding: 0 8px;
        }
      }
    }
  }
  &__contact {
    flex-direction: column;
    @include indexSet($p: 72px 0, $bg: $yellow);
    &--mail {
      color: $deepBlue;
      background: $white;
      border: $deepBlue 3px solid;
      font-size: 3.5rem;
      font-weight: bold;
      margin: 0 0 24px;
      padding: 16px 32px;
      transition: 0.2s color, 0.2s background;
      &:hover {
        color: $pink;
        // color: $white;
        background: rgba($color: $deepBlue, $alpha: 0.7);
      }
    }
    &--txt {
      font-size: 1.8rem;
    }
  }
}
.wrap {
  &0 {
    background: $lightBlue;
  }
  &1 {
    background: $pink;
  }
  &2 {
    background: $yellow;
  }
  &3 {
    background: $orange;
  }
}
.modal {
  &0 {
    border: 16px solid $lightBlue;
  }
  &1 {
    border: 16px solid $pink;
  }
  &2 {
    border: 16px solid $yellow;
  }
  &3 {
    border: 16px solid $orange;
  }
}
.contents {
  &0 {
    @include worksSet;
    > div {
      &:first-of-type {
        width: 100%;
      }
    }
  }
  &1,
  &3 {
    @include worksSet($w: 100%);
  }
  &2 {
    @include worksSet($w: 30%);
  }
}
.tabActive {
  color: $deepBlue;
  &::after {
    width: 80%;
    opacity: 1;
  }
}
</style>
