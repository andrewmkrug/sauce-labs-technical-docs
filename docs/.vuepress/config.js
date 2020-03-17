const glossarify = require("glossarify-md");

module.exports = {
  title: 'base-vuepress',
  description: 'Awesome description',
  theme: 'yuu',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/about/', 'About'],
      ['/contact/', 'Contact']
    ],
    yuu: {
      colorThemes: ['green'],
      disableThemeIgnore: true
		},
  },
  markdown:{
    slugify: glossarify.getSlugger(),
    lineNumbers: true
  },
  plugins: ['@vuepress/active-header-links',
  '@vuepress/back-to-top',
  '@vuepress/medium-zoom',
  'code-switcher']

}
