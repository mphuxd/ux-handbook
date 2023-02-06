// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UX Interview Handbook",
  tagline: "Prepare for your UX interview",
  url: "https://uxinterviewhandbook.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

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

  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-RK7HEE6FGN",
        anonymizeIP: true,
      },
    ],
  ],

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
          editUrl: "https://github.com/mphuxd/ux-handbook/blob/master/",
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
      colorMode: {
        respectPrefersColorScheme: true,
      },

      metadata: [
        {
          name: "keywords",
          content:
            "UX Interview Handbook, UX Interview Questions, UX Interview Answers, UX Interview Preparation, UX research questions, UX design behavioral Interview Questions, Design Exercise Interview, UX Whiteboard Challenge Examples, User, Experience, Design, Research, Product, Interview, Preparation, Questions, Answers, design exercise interview",
        },
      ],
      // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML

      navbar: {
        title: "UX Interview Handbook",
        hideOnScroll: true,
        logo: {
          alt: "UX Logo",
          src: "img/logo_rect.png",
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "K9KQYBDFZ8",
        // Public API key: it is safe to commit it
        apiKey: "a5272f5cabc3d8473838f0186f8fa347",
        indexName: "uxinterviewhandbook",
        contextualSearch: true,
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
                to: "/",
              },
              {
                label: "Getting Started",
                to: "/getting-started",
              },
              {
                label: "Resources",
                to: "/resources",
              },
            ],
          },
          {
            title: "Prepare",
            items: [
              {
                label: "Technical Questions",
                to: "/technical/overview",
              },
              {
                label: "Behavioral Questions",
                to: "/behavioral/overview",
              },
              {
                label: "UX Presentations",
                to: "/presentations",
              },
              {
                label: "Design Exercises",
                to: "/exercises/overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/mphuxd/ux-handbook",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "About",
                to: "/more/about",
              },
              {
                label: "Contribute",
                to: "/more/contribute",
              },
              {
                label: "Contact",
                to: "/more/contact-us",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UX Interview Handbook. Built with Docusaurus, open source, and free to use, forever.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
