import styled from 'styled-components';
import background from '../../images/background-top.png';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:100%;
  width:350px;
`;
export const Top = styled.div`
  height:135px;
  text-align:center;
  background-image:url(${background});
  background-size:100%;
  background-position:center;
  background-repeat:no-repeat;
`;
export const Center = styled.div`
  flex:1;
  display:flex;
  padding:15px;
  flex-direction:column;
  justify-content:flex-start;
`;
export const Title = styled.h1`
  font-size:24px;
  margin-top:15px;
  i{
    color:#0071FE;
    margin-right:5px;
  }
  strong{
    color:#0071FE;
    margin-left:2px;
  }
`;
export const Subtitle = styled.h2`
  font-size:16px;
  margin-top:10px;
`;
export const Bottom = styled.div`
  display:flex;
  padding:15px 15px 15px 15px;
  position:relative;
  background:transparent;
  z-index:1;

  &::before{
    content: "";
    position: absolute;
    background: rgb(5,18,31);
    background: linear-gradient(-90deg, rgba(5,18,31,1) 29%, rgba(6,99,215,1) 83%);
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-2;
  }
  &::after  {
    content: "";
    position: absolute;
    background: rgb(4,36,73);
    background: linear-gradient(170deg, rgba(4,36,73,1) 0%, rgba(5,18,31,1) 67%);
    z-index:-1;
    top:1.5px;
    left:0;
    bottom:0;
    right:0;
  }

`;
export const Details = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:10px;
`;

export const Author = styled.h2`
  font-size:15px;
`;
export const Position = styled.h3`
  font-size:16px;
`;
export const Skills = styled.h4`
  font-size:10.5px;
  font-weight:300;
`;

export const Buttons = styled.div`
  display:flex;justify-content:center;

`;
export const Button = styled.button`
  cursor:pointer;
  border-radius:15px;
  border:none;
  padding:5px 10px 5px 10px;
  margin-right:5px;
  background-clip:padding-box;
  position: relative;
  background:transparent;
  z-index:1;
  display:flex;
  align-items:center;
  font-size:13px;

  svg{
    width:18px;
    margin-right:5px;
  }

  &::before{
    content: "";
    position: absolute;
    background: rgb(5,18,31);
    background: linear-gradient(180deg, rgba(5,18,31,1) 29%, rgba(6,99,215,1) 83%);
    top:0;
    left:0;
    bottom:0;
    right:0;
    border-radius:15px;
    z-index:-2;
  }
  &::after  {
    content: "";
    position: absolute;
    background: rgb(5,18,31);
    background: linear-gradient(180deg, rgba(5,18,31,1) 29%, rgba(4,36,73,1) 83%);
    z-index:-1;
    top:2px;
    left:2px;
    bottom:1.5px;
    right:2px;
    border-radius:15px;

  }

`;

export const InputSearch = styled.div`
  display:flex;
  position:relative;
  align-items:center;
  width:100%;
  svg{
    width:16px;
    position:absolute;
    margin-left:10px;
  }
  input{
    border-radius:15px;
    background:#030C14;
    border:none;
    padding:5px 10px 5px 30px;
    width:100%;
  }


`;
