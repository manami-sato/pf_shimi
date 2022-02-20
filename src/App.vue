<template>
  <router-view />
</template>

<script>
/* eslint-disable */
export default {
  head: {
    title: {
      inner: "ココロウゴカスモノづくり",
      separator: "｜",
      complement: "清水葵 Portfolio",
    },
    meta: [
      { name: "description", content: "清水葵のポートフォリオです。" },
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,user-scalable=no",
      },
      { charset: "utf-8" },
      { property: "og:type", content: "website" },
    ],
    script: [
      {
        type: "text/javascript",
        src:
          "//typesquare.com/3/tsst/script/ja/typesquare.js?609c02c5ecd44d0d801e149ae90393a3",
        async: true,
      },
    ],
  },
};
</script>
