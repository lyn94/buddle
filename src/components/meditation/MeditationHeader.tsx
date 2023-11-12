import React from 'react';
import styled from 'styled-components';
import { useMeditation } from '../store/meditation/Meditation_Store';

const HomeHeaderStyle = styled.div`
  display: flex;
  padding: 0px 20px;
  flex-direction: column;
  align-items: flex-start;
  height: 170px;
`;

const HomeSubjectStyle = styled.div`
  display: flex;
  width: 320px;
  padding: 42px 0px;
  align-items: center;
  gap: 10px;
`;

const HomeSubjectTextStyle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 33px */
  width: 163px;
  height: 82px;
`;

export default function MeditationHeader() {
  const store = useMeditation();
  return (
    <HomeHeaderStyle>
      <HomeSubjectStyle>
        <HomeSubjectTextStyle>매주 새롭게 사색할만한 주제를 확인해보세요</HomeSubjectTextStyle>
      </HomeSubjectStyle>
    </HomeHeaderStyle>
  );
}
