import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, File } from 'styled-icons/boxicons-solid/';
import { ItemTree, TreeSubItems } from './styles';

export default function TreeParent({
  data, children, open, setOpen,
}) {
  function setIconByCategory(name) {
    if (name === 'guide') {
      return <File />;
    }
    return false;
  }


  function handleOpenItemTree() {
    console.log(open);
    setOpen(!open);
  }

  return (
    <ItemTree onClick={() => handleOpenItemTree()}>
      <ChevronRight />
      {setIconByCategory(data.name)}
      {data.label}
      <TreeSubItems open={open}>
        {children}
      </TreeSubItems>
    </ItemTree>
  );
}

TreeParent.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

TreeParent.defaultProps = {
  data: null,
  children: null,
  open: null,
  setOpen: null,
};
