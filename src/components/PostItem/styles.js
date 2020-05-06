import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  padding:15px;
  border-bottom:1px solid #13304F;
  min-width:400px;
  cursor:pointer;
  &:hover{
    background:#0B1F33;
  }
`;
export const DataWrapper = styled.div`
  display:flex;
  flex-direction:column;
`;
export const Category = styled.div`
  display:flex;
  font-size:14px;
  margin-bottom:5px;
  svg{
    width:20px;
    margin-right:5px;
  }
`;
export const Title = styled.div`
  display:flex;
  font-size:18px;
  color:#0071FE;
  font-weight:600;
  margin-bottom:5px;
`;
export const ImageWrapper = styled.div`
  display:flex;
  border-radius:15px;
  overflow:hidden;
  align-items:center;
  justify-content:center;
  max-height:100%;
  min-width:190px;
  margin-left:auto;
`;
export const Date = styled.div`
  display:flex;
  color:#004DAC;
  font-size:12px;
  svg{
    width:16px;
    margin-right:5px;
  }
`;
export const Description = styled.p`
  display:flex;
  color:#959CA4;
  font-size:14px;
  padding:0;
  margin:0;
  margin-bottom:5px;
  overflow:hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
