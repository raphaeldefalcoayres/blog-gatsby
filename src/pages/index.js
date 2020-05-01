import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import { H1, PostsWrapper, LayoutWrapper } from './styles';
import PostItem from '../components/PostItem';
import Post from '../components/Post';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LayoutWrapper>
      <PostsWrapper>
        <H1>Últimos conteúdos</H1>
        <PostItem />
      </PostsWrapper>
      <Post />
    </LayoutWrapper>
  </Layout>
);

export default IndexPage;
