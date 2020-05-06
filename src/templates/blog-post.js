import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
