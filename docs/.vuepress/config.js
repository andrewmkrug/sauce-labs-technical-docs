const glossarify = require("glossarify-md");

module.exports = {
  title: 'Sauce Labs Technical Docs',
  description: 'Awesome description',
  theme: 'yuu',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Contact',
        link: '/contact/'
      }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/headless/', 'Headless']
    ],
    yuu: {
      colorThemes: [],
      disableThemeIgnore: true
    },
  },
  markdown: {
    slugify: glossarify.getSlugger(),
    lineNumbers: true
  },
  plugins: ['@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    'code-switcher'
  ]

}