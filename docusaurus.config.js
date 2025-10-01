// @ts-check
const config = {
  title: 'Visualisierung & Datenaufbereitung',
  tagline: 'VIS3VO Course Materials',
  url: 'https://soberpe.github.io',
  baseUrl: '/visdat-course-skeleton/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'soberpe',
  projectName: 'visdat-course-skeleton',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    ['@docusaurus/preset-classic', {
      docs: { 
        routeBasePath: '/', 
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/soberpe/visdat-course-skeleton/tree/main/',
      },
      blog: false, 
      theme: { 
        customCss: require.resolve('./src/css/custom.css')
      }
    }]
  ],
  themeConfig: {
    navbar: {
      title: 'VIS3VO',
      items: [
        {
          href: 'https://github.com/soberpe/visdat-course-skeleton',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Stefan Oberpeilsteiner. Built with Docusaurus.`,
    },
  },
};
module.exports = config;
