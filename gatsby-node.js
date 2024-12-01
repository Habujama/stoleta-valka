exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}

/* exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allContentfulTopProducts {
        edges {
          node {
            titulek
            id
          }
        }
      }
    }
  `)
  const path = require('path')
  const singlePageUrl = require('./src/utils/single-page-url')
  const productTemplate = path.resolve(
    './src/components/shared/single-page-template.tsx'
  )

  data.allContentfulTopProducts.edges.forEach(({ node }) => {
    const singleProductPagesUrl = singlePageUrl(node.titulek, node.id)

    const path = `/produkty/${singleProductPagesUrl}`
    createPage({
      path,
      component: productTemplate,
      context: {
        pagePath: path,
      },
    })
  })
} */
