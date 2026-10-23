import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "25篇文章学会六级5500词-词汇讲义",
      icon: "book",
      prefix: "pages/",
      link: "pages/",
      children: "structure",
    },
  ],
});
