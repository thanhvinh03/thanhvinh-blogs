import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Thanh Vinh Blog",
  tagline: "A little developer",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://thanhvinh03.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "thanhvinh03", // Usually your GitHub org/user name.
  projectName: "thanhvinh03-blogs", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          routeBasePath: "/",
          blogSidebarTitle: "Recent posts",
          blogSidebarCount: 3,
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } as any,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo.png",
    navbar: {
      title: "Thanh Vinh Blog",
      logo: {
        alt: "Thanh Vinh Blog Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "https://github.com/thanhvinh03/thanhvinh03/blob/main/resumes/Thanh%20Vinh%20-%20Software%20Engineer.pdf",
          label: "My Resume",
          position: "left",
        },
        {
          href: "https://github.com/thanhvinh03",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Readee",
          items: [
            {
              label: "RSS",
              to: "/rss.xml",
            },
            {
              label: "ATOM",
              to: "/atom.xml",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/thanhvinh03/thanhvinh03-blogs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} thanhvinh03 Blog.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },
  } satisfies Preset.ThemeConfig,

  plugins: [tailwindPlugin],

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
