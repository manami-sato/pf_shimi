<template lang="pug">
section(v-if="data.project !== undefined")
	DetailHeadline(txt="企画")
	div.modal__project
		div.modal__project--img
			img(:src="`${path}img/${data.project.img}.png`", :alt="data.project.ttl")
		div
			p.modal__project--subTtl {{data.project.subTtl}}
			h3.modal__project--ttl {{data.project.ttl}}
			div.modal__project--point {{data.project.point}}
			p.modal__project--txt {{data.project.txt}}
	div(:style="{background:linkTxt[Math.abs(dId - 1)].color}",v-if="data.project.routerLinkFlag", @click="toOtherData").modal__project--link {{linkTxt[Math.abs(dId - 1)].ttl}}を見る
</template>

<script>
/* eslint-disable */
import DetailHeadline from "@/components/DetailHeadline";
import Mixin from "@/mixins/Mixin";

export default {
  name: "ProjectDesign",
  mixins: [Mixin],
  props: ["data", "id", "dId"],
  components: {
    DetailHeadline,
  },
  data() {
    return {
      res: [],
      linkTxt: [
        {
          color: "#dcf1fe",
          ttl: "グラフィックデザイン",
          id: 0,
          route: "graphic",
        },
        { color: "#fee1f2", ttl: "Webデザイン", id: 1, route: "web" },
      ],
      projectName: "",
      projectNameBefore: "",
      sendDataId: 0,
      sendContentsId: 0,
    };
  },
  methods: {
    toOtherData() {
      this.projectName = this.id.split("_")[1];
      if (this.dId == this.linkTxt[0].id) {
        this.sendDataId = 1;
      }
      this.projectNameBefore = this.linkTxt[this.sendDataId].route;
      this.projectName =
        this.linkTxt[this.sendDataId].route + "_" + this.projectName;
      for (let i = 0; i < this.res[this.sendDataId].length; i++) {
        if (
          this.projectName == this.res[this.sendDataId][i].img.split("_")[1]
        ) {
          this.sendContentsId = i;
        }
      }
      this.$router.push({
        name: `${this.projectNameBefore}`,
        params: {
          id: `${this.projectName}`,
          dataId: `${this.sendDataId}`,
          contentsId: `${this.sendContentsId}`,
        },
        props: true,
      });
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

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";

.modal {
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
}
</style>
