module.exports = {
  siteMetadata: {
    title: 'Blog - Raphael de Falco Ayres',
    subtitle: 'Compartilhando <b>conteúdos</b> sobre <b>Desevolvimento</b> e <b>Inovação</b>',
    description: 'Blog de tecnologia para compartilhar conhecimentos sobre desenvolvimento e inovação.',
    position: 'Full Stack Javascript Developer',
    skills: 'NodeJS, ReactJS, React Native, PHP and others.',
    author: 'Raphael de Falco Ayres',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Nunito',
            variants: ['300', '500', '600', '700'],
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
