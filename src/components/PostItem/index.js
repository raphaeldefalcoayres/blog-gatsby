import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { File, TimeFive } from '@styled-icons/boxicons-regular';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Container, Category, DataWrapper, ImageWrapper, Date, Title, Description,
} from './styles';

const PostItem = ({ showPost, setShowPost }) => {
  const { avatarImage } = useStaticQuery(
    graphql`
    query{
      avatarImage: file(relativePath:{eq:"post-item-example.png"}){
        childImageSharp{
          fixed(width:190, height:125){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `,
  );

  function handleShowPost() {
    setShowPost(!showPost);
  }

  return (
    <Container onClick={() => handleShowPost()}>
      <DataWrapper>
        <Category>
          <File />
          Manual
        </Category>
        <Title>Meu ambiente de desenvolvimento Javascript</Title>
        <Description>
          Neste manual você vai encontrar os principais programas e
          configurações necessárias para iniciar o desevolvimento moderno de
          aplicações com javascript.
        </Description>
        <Date>
          <TimeFive />
          29 de abril de 2020
        </Date>
      </DataWrapper>
      <ImageWrapper>
        <Img fixed={avatarImage.childImageSharp.fixed} />
      </ImageWrapper>
    </Container>
  );
};

export default PostItem;

PostItem.propTypes = {
  showPost: PropTypes.bool,
  setShowPost: PropTypes.func,
};

PostItem.defaultProps = {
  showPost: false,
  setShowPost: false,
};
