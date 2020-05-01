import React from 'react';
import PropTypes from 'prop-types';

import { File, TimeFive, ChevronRight } from '@styled-icons/boxicons-regular';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Container, Category, Content, Date, Title,
} from './styles';

const Post = ({ showPost }) => {
  const { pdf } = useStaticQuery(
    graphql`
    {
      pdf: file(relativePath:{eq:"meu-ambiente-de-desenvolvimento-javascript.pdf"}){
        name
        extension
        publicURL
      }
    }
  `,
  );

  return (
    <Container showPost={showPost}>

      <Title>
        <Category>
          <File />
          Manual
        </Category>
        <ChevronRight />
        Meu ambiente de desenvolvimento Javascript
      </Title>
      <Date>
        <TimeFive />
        29 de abril de 2020
      </Date>

      <Content>
        <embed src={pdf.publicURL} width="100%" height="100%" />
      </Content>


    </Container>
  );
};


export default Post;

Post.propTypes = {
  showPost: PropTypes.bool,
};

Post.defaultProps = {
  showPost: false,
};
