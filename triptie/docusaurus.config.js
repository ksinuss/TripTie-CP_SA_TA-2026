// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import simplePlantUML from '@akebifiky/remark-simple-plantuml';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TripTie Documentation',
  tagline: 'Сервис группового планирования путешествий',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ksinuss.github.io',
  baseUrl: '/TripTie-CP_SA_TA-2026/',

  organizationName: 'ksinuss',
  projectName: 'TripTie-CP_SA_TA-2026',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  plugins: [
    ['drawio', {}],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'style-guide',
        path: 'style-guide',
        routeBasePath: 'style-guide',
        sidebarPath: require.resolve('./sidebars-style-guide.js'),
        remarkPlugins: [simplePlantUML],
      },
    ],
  ],

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        blog: false,
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/ksinuss/TripTie-CP_SA_TA-2026/tree/main/triptie',
          remarkPlugins: [simplePlantUML], // ← PlantUML для основной документации
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Документация',
        },
        {
          to: '/docs/api/index',
          label: 'API',
          position: 'left',
        },
        {
            to: '/style-guide/',
            label: 'Style Guide',
            position: 'left',
        },
        {
          href: 'https://github.com/ksinuss/TripTie-CP_SA_TA-2026',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Введение',
              to: '/docs/introduction/index',
            },
            {
              label: 'Требования',
              to: '/docs/requirements/functional',
            },
            {
              label: 'Архитектура',
              to: '/docs/architecture/arch',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ksinuss/TripTie-CP_SA_TA-2026',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TripTie Documentation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;