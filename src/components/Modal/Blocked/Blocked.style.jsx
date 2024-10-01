import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ModalDetailsStyled = styled.img`
  positon: relative;
`;

export const Description = styled.div`
  display: block;
  max-width: 600px;
  background-color: #f7f7f7;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding: 30px 60px;
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.07;
    width: 600px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 30px;
    line-height: 1.06;
  }
`;

export const Heading = styled.h4`
  font-size: 35px;
  line-height: calc(48 / 40);
  font-weight: 400;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-style: italic;
  font-weight: 500;

  max-width: 1250px;

  &:hover {
    color: #f4c550;
  }
`;
