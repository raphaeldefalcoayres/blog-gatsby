import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { TimeFive } from '@styled-icons/boxicons-regular';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Container, Category, DataWrapper, ImageWrapper, Date, Title, Description,
} from './styles';

const PostItem = ({
  showPost, setShowPost, category, title, description, date,
}) => {
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
          {category}
        </Category>
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
        <Date>
          <TimeFive />
          {date}
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
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  setShowPost: PropTypes.func,
};

PostItem.defaultProps = {
  showPost: false,
  setShowPost: false,
};
