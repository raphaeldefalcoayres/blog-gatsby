import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AvatarWrapper } from './styles';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
    query{
      avatarImage: file(relativePath:{eq:"avatar.png"}){
        childImageSharp{
          fixed(width:65, height:61){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `,
  );

  return <AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />;
};

export default Avatar;
