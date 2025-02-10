import type { GatsbyConfig } from "gatsby";
const tailwindConfig = require('./tailwind.config.js')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Stoletá Válka",
    description: "Hra, která spojuje atmosféru dramatických larpů s taktickými prvky deskové hry.",
    siteUrl: "https://stoletavalka.netlify.app/"
  },
  graphqlTypegen: true,
  plugins: [{
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", "gatsby-plugin-typescript", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/koruna.png"
    }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')(tailwindConfig),
          require('autoprefixer'),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        "GA-TRACKING_ID", // Google Analytics
        "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
    },
    },
   {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "assets",
        path: "./src/assets",
    },
    __key: "pages"
  }]
};

export default config;
