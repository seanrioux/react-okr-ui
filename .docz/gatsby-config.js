const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'OKR UI',
    description:
      'A React user interface toolkit for building OKR centric applications.',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{markdown,mdx}',
        public: '/public',
        dest: '/docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'OKR UI',
        description:
          'A React user interface toolkit for building OKR centric applications.',
        host: 'localhost',
        port: 3002,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/seanrioux/products/open-source-okr/code/react-okr-ui',
          templates:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/node_modules/docz-core/dist/templates',
          docz:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/.docz',
          cache:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/.docz/.cache',
          app:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/.docz/app',
          appPackageJson:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/package.json',
          appTsConfig:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/tsconfig.json',
          gatsbyConfig:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/gatsby-config.js',
          gatsbyBrowser:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/gatsby-browser.js',
          gatsbyNode:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/gatsby-node.js',
          gatsbySSR:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/gatsby-ssr.js',
          importsJs:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/.docz/app/imports.js',
          rootJs:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/.docz/app/root.jsx',
          indexJs:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/.docz/app/index.jsx',
          indexHtml:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/.docz/app/index.html',
          db:
            '/Users/seanrioux/products/open-source-okr/code/react-okr-ui/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
