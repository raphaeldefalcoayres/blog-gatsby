/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import { Container, Main, Aside } from './styles';
import GlobalStyles from '../../styles/global';

const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    <Aside><Sidebar /></Aside>
    <Main>{children}</Main>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
