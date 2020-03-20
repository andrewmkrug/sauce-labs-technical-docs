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
      },
      {text: 'Glossary', link: '/glossary'},
      {test: 'Index', link: '/glossary-index'}
    ],
    sidebar: [
      ['/', 'Home'],
      { title: 'Sauce Specific',
       children: [
      ['/headless/', 'Headless'],
    ['/sauce_bindings/', 'Sauce Bindings']]
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