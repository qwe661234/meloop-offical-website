export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "meloop-offical-website",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "element-ui/lib/theme-chalk/index.css",
        { src: "@/assets/transition.scss", lang: "scss" },
        { src: "@/assets/style.scss", lang: "scss" },
    ],

    styleResources: {
        scss: ["@/assets/*.scss"],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["@/plugins/element-ui"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/style-resources"],

    router: {
        base: "/meloop-offical-website/",
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        vendor: ["element-ui"],
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                    options: {
                        fix: true,
                    },
                });
            }
        },
    },
};