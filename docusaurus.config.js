// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UX Handbook",
  tagline: "Prepare for your UX interview",
  url: "https://uxinterviewhandbook.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon2.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          routeBasePath: "/",
          breadcrumbs: true,
          editUrl: "https://github.com",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },

        blog: false,

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "UX Handbook",
        hideOnScroll: true,
        logo: {
          alt: "UX Logo",
          src: "img/logo3.png",
        },

        // items: [
        //   {
        //     type: "doc",
        //     docId: "intro",
        //     position: "left",
        //     label: "Tutorial",
        //   },
        //   // {to: '/blog', label: 'Blog', position: 'left'},
        //   {
        //     href: "https://github.com/facebook/docusaurus",
        //     label: "GitHub",
        //     position: "right",
        //   },
        // ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: "light",
        links: [
          {
            title: "General",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
              {
                label: "Resources",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Prepare",
            items: [
              {
                label: "Technical Questions",
                to: "/docs/intro",
              },
              {
                label: "Behavioral Questions",
                to: "/docs/intro",
              },
              {
                label: "UX Presentations",
                to: "/docs/intro",
              },
              {
                label: "Design Exercises",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
              {
                label: "Discord",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "About",
                to: "/about",
              },
              {
                label: "How to contribute",
                to: "/about",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UX Interview Handbook. Built with Docusaurus. Open source and free to use, forever.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
