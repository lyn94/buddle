import React from 'react';
import HeaderBar from '../../common/HeaderBar';
import styled from 'styled-components';
import Tabs from '../../common/Tabs';

import { Advertisement } from '../../common/Advertisement';

const ChannelContainer = styled.div`
  /* width1: 360px; */
`;
const ChannelHeader = styled.div`
  width: 100%;
  height: 210px;
  flex-shrink: 0;
  background-color: white;
`;
const ChannelTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 33px */
  margin: 37px 136px 61px 18px;
`;
const Channel = () => {
  return (
    <ChannelContainer>
      <ChannelHeader>
        <ChannelTitle>모든 이야기 채널을 한번에 살펴볼 수 있어요</ChannelTitle>
      </ChannelHeader>
      <Tabs
        items={[
          {
            key: '1',
            label: '전체',
            content: (
              <div>
                <Advertisement />
                <div>sswwwwss</div>
                <div>sswwwwss</div>
                <div>sswwwwss</div>
                <div>sswwwwss</div>
                <div>sswwwwss</div>
                <div>sswwwwss</div>
              </div>
            ),
          },
          { key: '2', label: '한줄사색', content: <>한줄사색 컨텐츠</> },
          { key: '3', label: '자유', content: <>자유 컨텐츠</> },
        ]}
      />
    </ChannelContainer>
  );
};

export default Channel;
