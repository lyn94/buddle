import React from 'react';
import styled from 'styled-components';
import {useMeditation} from '../store/meditation/Meditation_Store';

const HomeHeaderStyle = styled.div`
  display: flex;
  padding: 42px 0;
  flex-direction: column;
  align-items: flex-start;
`;

const HomeSubjectStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 320px; */
  /* padding: 42px 0px; */
  /* gap: 10px; */
`;

const HomeSubjectTextStyle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 33px */
  /* width: 163px;
  height: 82px; */
`;

interface SectionHeaderProps {
  contentTop: string;
  contentMiddle?: string;
  contentBottom?: string;
}

const SectionHeader = ({contentTop, contentMiddle, contentBottom}: SectionHeaderProps) => {
  const store = useMeditation();
  return (
    <HomeHeaderStyle>
      <HomeSubjectStyle>
        <HomeSubjectTextStyle>{contentTop}</HomeSubjectTextStyle>
        <HomeSubjectTextStyle>{contentMiddle}</HomeSubjectTextStyle>
        <HomeSubjectTextStyle>{contentBottom}</HomeSubjectTextStyle>
      </HomeSubjectStyle>
    </HomeHeaderStyle>
  );
};

export default SectionHeader;
