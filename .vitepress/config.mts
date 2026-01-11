import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AccelerateZ's Site",
  head: [["link", { rel: "icon", href: "/public/favicon.ico" }]],
  description: "Personal Homepage built with Vitepress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs/" },
      { text: "Docs", link: "https://acceleratez.github.io/docs/" },
      { text: "Projects", link: "/projects/" },
      { text: "About Me", link: "/about-me/" },
    ],

    // sidebar: [
    //   {
    //     "/blogs/": [
    //       {
    //         text: "Blogs",
    //         items: [
    //           { text: "First Blog", link: "/blogs/first-blog" },
    //           { text: "Second Blog", link: "/blogs/second-blog" },
    //         ],
    //       },
    //     ],
    //     collapsed: true,
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
