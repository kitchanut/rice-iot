// import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["@/assets/scss/style.scss", "@/assets/css/style.css"],
  build: {
    transpile: ["vuetify"],
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },

  },
  modules: [
    "nuxt-icon",
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Disallow: "/",
      },
    ],
    '@pinia/nuxt',
    // async (options, nuxt) => {
    //   nuxt.hooks.hook("vite:extendConfig", (config) =>
    //     config.plugins.push(vuetify())
    //   );
    // },
  ],
  app: {
    // baseURL: '/npms',
    head: {
      htmlAttrs: {
        lang: "th"
      },
      bodyAttrs: {
        class: "demo"
      },
      charset: "utf-8",
      // titleTemplate: "%s | มูเตลู",
      titleTemplate: "ระบบบริหารจัดการแปลงข้าว",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sarabun:wght@100;200;300;400;500;600;700&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: "/logo.ico"
        }
      ],
      script: [
        {
          src: "https://static.line-scdn.net/liff/edge/versions/2.5.0/sdk.js",
        },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5'
        },
        {
          name: 'author',
          content: "Kitchanut Ruamboon and IE Advisor"
        }
      ]

    }
  },
  runtimeConfig: {
    public: {
      serverUrl: process.env.NODE_ENV === "development"
        ? "http://localhost/npms-server"
        : "https://npms.ie-advisor.co.th/npms-server",
      imageAppUrl: '../public/npms.png',

    }
  },
});
