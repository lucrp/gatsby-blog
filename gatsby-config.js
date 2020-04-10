module.exports = {
  siteMetadata: {
    title: `ramosweb.dev`,
    description: `This is my personal blog where I write about coding stuff, technologies I appreciate and use and what I'm learning`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`,  `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};