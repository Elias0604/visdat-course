// @ts-check
const config = {
  title: 'Visualisierung & Datenaufbereitung',
  tagline: 'VIS3VO Course Materials',
  url: 'https://soberpe.github.io',
  baseUrl: '/visdat-course/',
  onBrokenLinks: 'throw',
  organizationName: 'soberpe',
  projectName: 'visdat-course',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: { 
        routeBasePath: '/', 
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/soberpe/visdat-course/tree/main/',
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
          href: 'https://github.com/soberpe/visdat-course',
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
