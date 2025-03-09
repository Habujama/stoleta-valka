import type { GatsbyConfig } from "gatsby";
const tailwindConfig = require('./tailwind.config.js')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Stoletá Válka roku 1337",
    description: "Hra, která spojuje atmosféru dramatických larpů s taktickými prvky deskové hry. Budete plánovat, vyjednávat a rozhodovat na bitevním poli i mimo něj. Čekají na vás role anglických vyslanců, irských vzbouřenců, prohnaných obchodníků, odvážných korzárů a dalších.",
    siteUrl: "https://stoletavalka.netlify.app/",
    image: "/social-preview.png",
    icon :"/prihlas-se_lev.png"
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
        name: `Stoletá válka roku 1337`,
        short_name: `Stoletá válka`,
        start_url: `/`,
        background_color: `#EADDC7`,
        theme_color: `#EADDC7`,
        display: `minimal-ui`,
        icon: "src/assets/prihlas-se_lev.png"
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
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Alegreya`,
            file: `https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap`
          },
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
