import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';

const Sidebar = () => {
  const {
    site: {
      siteMetadata: {
        position, author, skills, subtitle,
      },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          skills
          author
        }
      }
    }
  `);

  return (
    <>
      <Avatar />
      <h1>{author}</h1>
      <h2>{subtitle}</h2>
      <h3>{position}</h3>
      <h4>{skills}</h4>
    </>
  );
};

export default Sidebar;
