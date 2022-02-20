<template lang="pug">
div(:style="{borderColor:color}").modal
	Back(:bgColor="color")
	div.modal__carousel
		ul(:style="{transform:'translateX(calc(-' + cId + '*480px)'}").modal__carousel--typo
			li(v-for="(item, i) in res", :key="i", :class="{selectedItem:cId == i}").modal__carousel--typo--list
				div {{item.ttl}}
				img(:src="`${path}img/${item.img}.png`", :alt="item.ttl")
				p {{item.txt}}
	div.modal__arrow
		div(@click="prev", v-if="cId !== 0").modal__arrow--prev
		div(@click="next", v-if="cId !== res.length - 1").modal__arrow--next
	//- Foot
</template>

<script>
/* eslint-disable */
import Back from "@/components/Back";
// import Foot from "@/components/Foot";
import Mixin from "@/mixins/Mixin";

export default {
  name: "Typography",
  mixins: [Mixin],
  components: {
    Back,
    // Foot,
  },
  data() {
    return {
      color: "",
      dId: 2,
      cId: 0,
      res: [],
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
        this.res = json[this.dId];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    prev() {
      this.cId--;
      if (this.cId < 0) {
        this.cId = 0;
      }
      console.log(this.cId);
    },
    next() {
      this.cId++;
      if (this.cId >= this.res.length - 1) {
        this.cId = this.res.length - 1;
      }
      console.log(this.cId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &__carousel {
    width: calc(480px * 2);
    overflow: hidden;
    &--typo {
      display: flex;
      width: max-content;
      height: 100%;
      transition: 0.2s transform;
      &--list {
        width: 480px;
        height: 100%;
        opacity: 0;
        transition: 0.2s opacity;
        &:first-of-type {
          margin: 0 0 0 calc(480px / 2);
        }
        div {
          font-size: 2.3rem;
          text-align: center;
          margin: 0 0 16px;
        }
        img {
          width: 100%;
        }
        p {
          font-size: 1.4rem;
          text-align: center;
          margin: 16px 0 0;
        }
      }
    }
  }
  &__arrow {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 640px;
    position: absolute;
    &--prev,
    &--next {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background: transparent;
      border-radius: 24px;
      position: absolute;
      transition: 0.2s background;
      &:hover {
        background: $lightBlue;
        cursor: pointer;
      }
      &::before,
      &::after {
        content: "";
        display: block;
        width: 18px;
        height: 4px;
        border-radius: 2px;
        background: $deepBlue;
        position: absolute;
      }
    }
    &--prev {
      left: 0;
      &::before {
        transform: rotateZ(-45deg);
        top: 17px;
        margin: 0 4px 0 0;
      }
      &::after {
        transform: rotateZ(45deg);
        bottom: 17px;
        margin: 0 4px 0 0;
      }
    }
    &--next {
      right: 0;
      &::before {
        transform: rotateZ(-135deg);
        top: 17px;
        margin: 0 0 0 4px;
      }
      &::after {
        transform: rotateZ(135deg);
        bottom: 17px;
        margin: 0 0 0 4px;
      }
    }
  }
}
.selectedItem {
  opacity: 1;
}
</style>
