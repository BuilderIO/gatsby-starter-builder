const path = require('path');
const config = require('./src/config');
module.exports = {
  pathPrefix: "/gatsby-starter-builder",
  siteMetadata: {
    title: 'Gatsby + Builder.io Starter',
    description:
      'This repo contains an example website that is built with Builder.io, and generate with Gatsby'
  },
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: '@builder.io/gatsby',
      options: {
        /** TODO: update this with your API key! */
        publicAPIKey: config.builderAPIKey,
        templates: {
          // Render every `page` model as a new page using the /page.tsx template
          // based on the URL provided in Builder.io
          landingPage: path.resolve('src/templates/LandingPage.jsx')
        }
      }
    }
  ]
};
