import styled from 'styled-components';

export const Container = styled.div`

`;

export const TreeItems = styled.ul`
  list-style:none;
  margin:15px 0 0 0;
  display:flex;
  flex-direction:column;
`;

export const Title = styled.h2`
  font-size:14px;
  font-weight:600;
`;
export const ItemTree = styled.li`
  svg{
    width:16px;
    margin-right:5px;
  }
  font-weight:500;
  padding:5px 0;
  font-size:13px;
  /* display:flex; */
  align-items:center;
  cursor:pointer;

`;

export const TreeSubItems = styled.ul`
  display:${(props) => (props.open ? 'flex;' : 'none;')}}
  list-style:none;
  margin:0 0 0 15px;
  flex-direction:column;

  li{
    display:flex;
    align-items:center;
    margin-top:5px;
  }
`;
