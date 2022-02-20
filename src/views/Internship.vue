<template lang="pug">
div(:style="{borderColor:color}").modal
	Back(:bgColor="color")
	MainDesign(:data="data", :dId="dId", :color="color")
	GraphicDesign(:data="data", txt="ポスターデザイン")
	Foot
</template>

<script>
/* eslint-disable */
import Back from "@/components/Back";
import MainDesign from "@/components/MainDesign";
import GraphicDesign from "@/components/GraphicDesign";
import Foot from "@/components/Foot";
import Mixin from "@/mixins/Mixin";

export default {
  name: "Graphic",
  mixins: [Mixin],
  components: {
    Back,
    MainDesign,
    GraphicDesign,
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
