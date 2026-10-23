import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "",
  description: "25篇文章学会六级5500词-词汇讲义",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
