<template lang="pug">
ul(v-if="data.link !== undefined").btn
	li(v-for="(item, i) in data.link.normal", target="page", v-if="data.link.normal !== undefined").btn__link
		a(:href="item.url", target="page").btn__link--list {{item.ttl}}
	li(v-for="(item, i) in data.link.routerLink", target="page", v-if="data.link.routerLink !== undefined").btn__link
		div(@click="toOtherData(i)").btn__link--list {{item.ttl}}
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin";

export default {
  name: "WebDesign",
  mixins: [Mixin],
  props: ["id", "data", "dId"],
  data() {
    return {
      res: [],
      projectNameBefore: "",
      projectName: "",
      sendContentsId: 0,
    };
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
  methods: {
    toOtherData(i) {
      this.projectName = this.id.split("_")[1];
      this.projectNameBefore = this.data.link.routerLink[i].to;
      this.projectName = this.projectNameBefore + "_" + this.projectName;
      for (
        let i2 = 0;
        i2 < this.res[this.data.link.routerLink[i].id].length;
        i2++
      ) {
        if (
          this.projectName ==
          this.res[this.data.link.routerLink[i].id][i2].img.split("_")[1]
        ) {
          this.sendContentsId = i2;
        }
      }
      this.$router.push({
        name: `${this.projectNameBefore}`,
        params: {
          id: `${this.projectName}`,
          dataId: `${this.data.link.routerLink[i].id}`,
          contentsId: `${this.sendContentsId}`,
        },
        props: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";

.btn {
  display: flex;
  gap: 16px;
  position: fixed;
  right: 104px;
  bottom: 56px;
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: max-content;
    margin: 0 0 8px;
    z-index: 10;
    &--list {
      display: flex;
      justify-content: center;
      font-size: 1.4rem;
      font-weight: bold;
    }
    &:nth-of-type(3n-2) {
      @include modalBtnSet($w: 80px, $h: 80px, $br: none, $p: 4px 8px);
      background: $yellow;
    }
    &:nth-of-type(3n-1) {
      @include modalBtnSet($w: 80px, $h: 80px, $br: 50%, $p: 4px 8px);
      background: $pink;
    }
    &:nth-of-type(3n) {
      @include modalBtnSet($w: 80px, $h: 80px, $p: 4px 8px);
      background: $lightBlue;
    }
  }
}
</style>
