const glossarify = require("glossarify-md");

module.exports = {
  title: 'Technical Docs',
  description: 'Awesome description',
  theme: 'yuu',
  themeConfig: {
      logo: '/logo-saucelabs.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Repos',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Java', link: 'https://github.com/saucelabs-training/demo-java' },
          { text: 'Python', link: 'https://github.com/saucelabs-training/demo-python' },
          { text: 'Javascript', link: 'https://github.com/saucelabs-training/demo-js'},
          { text: 'C#', link: 'https://github.com/saucelabs-training/demo-csharp'}
        ]
      }
    ],
    sidebar: [
      ['/', 'Home'],
      { title: 'Sauce Specific',
       children: [
      ['/headless/', 'Headless']]
       }
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