import React from 'react';
import styled from 'styled-components';
const AdvContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  background: #f4f4f4;
  margin-top: 10px;
`;
const AdvWord = styled.div`
  color: #101010;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  padding: 31px 0px 31px 16px;
  width: 145px;
  height: 33px;
`;
const AdvImageContainer = styled.div`
  display: flex;
  width: 79px;
  /* padding: 16.159px 9.875px; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
export const Advertisement = () => {
  return (
    <>
      <AdvContainer>
        <AdvWord>서비스 만족도 조사 하고 아메리카노 받기</AdvWord>
        <AdvImageContainer>커피그림</AdvImageContainer>
      </AdvContainer>
    </>
  );
};
// export Advertisement;
