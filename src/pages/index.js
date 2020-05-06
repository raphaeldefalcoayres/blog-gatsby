import React, { useState } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import { H1, PostsWrapper, LayoutWrapper } from './styles';
import PostItem from '../components/PostItem';
import Post from '../components/Post';

const IndexPage = () => {
  const [showPost, setShowPost] = useState(false);

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              category
              description
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
            timeToRead
            wordCount {
              words
            }
          }
        }
      }
    }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <LayoutWrapper>
        <PostsWrapper>
          <H1>Últimos conteúdos</H1>
          {postList.map(({
            node: {
              frontmatter: {
                title, category, date, description,
              },
              timeToread,
            },
          }) => (
            <PostItem
              key={date}
              category={category}
              title={title}
              description={description}
              date={date}
              timeToread={timeToread}
              showPost={showPost}
              setShowPost={setShowPost}
            />
          ))}

        </PostsWrapper>
        <Post showPost={showPost} />

      </LayoutWrapper>
    </Layout>
  );
};

export default IndexPage;
