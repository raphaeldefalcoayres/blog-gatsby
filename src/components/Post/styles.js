import styled from 'styled-components';

export const Container = styled.aside`
  display:${(props) => (props.showPost ? 'flex' : 'none')};
  padding:15px;
  cursor:pointer;
  background:#0D243C;
  height:100vh;
  width:60%;
  flex-direction:column;
`;

export const Category = styled.div`
  display:flex;
  font-size:14px;
  color:#DDE8F4;
  margin-right:2px;
  svg{
    width:20px;
    margin-right:2px;
  }
`;
export const Title = styled.div`
  display:flex;
  font-size:18px;
  color:#ffffff;
  font-weight:600;
  margin-bottom:5px;
  align-items:center;
  svg{
    width:20px;
    margin-right:2px;
  }
`;

export const Date = styled.div`
  display:flex;
  color:#DDE8F4;
  font-size:12px;
  svg{
    width:16px;
    margin-right:5px;
  }
`;
export const Content = styled.div`
  display:flex;
  margin-top:15px;
  border-radius:15px;
  overflow:hidden;
  min-height:calc(100vh - 90px);
`;
