// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'An open-source framework to generate awesome pages',
  siteUrl: 'https://devrel-kr.github.io',
  pathPrefix: '/gridsome-starter-liebling',
  titleTemplate: `%s | Gridsome`,
  icon: 'src/favicon.png',

  transformers: {
    remark: {
      plugins: [
        'remark-autolink-headings',
        'remark-attr',
        [ 'gridsome-plugin-remark-prismjs-all', {
            noInlineHighlight: false,
            showLineNumbers: false,
          }
        ],
        [ '@noxify/gridsome-plugin-remark-embed', {
            'enabledProviders': [ 'Youtube', 'Twitter', 'Gist' ],
            'Twitter': {
              'hideMedia': false,
              'theme': 'light'
            }
          }
        ],

        require('./packages/gridsome-plugin-remark-figure')
      ],
      processImages: false
    }
  },

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: ['svg-inline--fa', 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-sm'],
          whitelistPatterns: [/fa-$/, /blockquote$/, /code$/, /pre$/, /table$/, /table-$/, /vueperslide$/, /vueperslide-$/]
        },
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: false,
        shouldTimeTravel: false,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'content/site/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: './content/authors/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/posts/**/*.md',
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'CustomPage',
        path: './content/pages/**/*.md'
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'content'],
        collections: [{
          typeName: 'Blog',
          indexName: 'Blog',
          fields: ['title', 'category', 'description', 'content']
        }]
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-123456-7',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Blog',
        feedOptions: {
          title: 'Gridsome',
          feed_url: 'https://devrel-kr.github.io/gridsome-starter-liebling/feed.xml',
          site_url: 'https://devrel-kr.github.io/gridsome-starter-liebling',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://devrel-kr.github.io/gridsome-starter-liebling' + node.path,
          author: node.author,
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'feed.xml',
        },
      },
    }
  ],
  templates: {
    Author: [{
      // path: '/author/:name',
      path: '/author/:slug',
      component: '~/templates/Author.vue'
    }],
    Blog: [{
      // path: '/posts/:title'
      path: '/posts/:year/:month/:day/:slug'
    }],
    CustomPage: [{
      // path: '/:title',
      path: '/:slug',
      component: '~/templates/CustomPage.vue'
    }],
    Category: [{
      path: '/category/:title',
      component: '~/templates/Category.vue'
    }],
    Tag: [{
      path: '/tags/:title',
      component: '~/templates/Tag.vue'
    }]
  },
  chainWebpack: config => {
      config.resolve.alias.set('@pageImage', '@/assets/images');
  }
}