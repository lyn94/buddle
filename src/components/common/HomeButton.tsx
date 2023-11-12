import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeButtonStyle = styled.div`
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: 0.34px;
  cursor: pointer;
`;
function HomeButton() {
  const navigate = useNavigate();
  const onClickEvent = () => {
    navigate('/');
  };
  return <HomeButtonStyle onClick={onClickEvent}>buddle</HomeButtonStyle>;
}

export default HomeButton;
