import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Github, Linkedin } from '@styled-icons/boxicons-logos';
import { Search } from '@styled-icons/evil';

import Avatar from '../Avatar';
import {
  Container, Top, Title, Subtitle, Bottom, Center, Details, Position, Skills,
  Buttons, Button, InputSearch,
} from './styles';
import Tree from '../Tree';

const Sidebar = () => {
  const {
    site: {
      siteMetadata: {
        position, skills, subtitle,
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
          subtitle
        }
      }
    }
  `);

  return (
    <Container>
      <Top>
        <Title>
          <i>&lt;Blog&gt;</i>
          <span>
            Raphael
            <strong>&gt;_</strong>
          </span>
        </Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      </Top>
      <Center>
        <InputSearch>
          <Search />
          <input type="text" placeholder="Encontre um conteúdo..." />
        </InputSearch>
        <Tree />
      </Center>
      <Bottom>
        <Avatar />
        <Details>
          <Position>{position}</Position>
          <Skills>{skills}</Skills>
          <Buttons>
            <Button>
              <Github />
              Github link
            </Button>
            <Button>
              <Linkedin />
              Linkedin link
            </Button>
          </Buttons>
        </Details>
      </Bottom>
    </Container>
  );
};

export default Sidebar;
