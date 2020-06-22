/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `w1o2zojv27gs`,
        accessToken: `RMm9_OStNrhWYJHW2Jm1F0UmhrKVEZidXZH36uh9bOk`,
      },
    },
  ],
}
