import React from 'react';
import PropTypes from 'prop-types';
import { File } from 'styled-icons/boxicons-solid';
import { ItemTree } from './styles';

export default function TreeItem({ data }) {
  return (
    <ItemTree>
      <File />
      {data.title}
    </ItemTree>
  );
}

TreeItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};

TreeItem.defaultProps = {
  data: null,
};
