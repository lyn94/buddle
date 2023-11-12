import React from 'react';
import meditationBackground from '../../icons/meditationBackground.png';
import styled from 'styled-components';
import { downArrowImage, heartImage } from '../common/images/imageComponents';
import { useMeditation } from '../store/meditation/Meditation_Store';

const ContentsBackground = styled.div`
  width: 100%;
  height: 600px;
  overflow-y: hidden;
`;
const Line1 = styled.div`
  margin-bottom: 20px;
`;
const Line2 = styled.div`
  color: #000;
  font-family: Eulyoo1945;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px; /* 137.5% */
  width: 225px;
  margin-bottom: 50px;
`;
const Line3 = styled.div`
  border-left: 1.5px solid #101010;
  display: flex;
  padding: 5px 10px;
  margin-bottom: 15px;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Item = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05);
`;
const ArrowIconPosition = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  &:hover {
    cursor: pointer;
  }
`;

export default function MeditationContents({ store }: any) {
  const heart = heartImage();
  const down = downArrowImage();

  return (
    <ContentsBackground style={{ background: `url(${meditationBackground}) center/cover no-repeat` }}>
      <div style={{ padding: '30px 20px' }}>
        <Line1>6월 둘째주</Line1>
        <Line2>당신에게 행복이란 무엇인가요?</Line2>
        <Line3>베스트 댓글</Line3>
        <List>
          <Item>
            <span>1</span>여러분의 생각을 한 줄로 남겨주세요 {heart}
          </Item>
          {store.openDetail ? (
            <>
              <Item>
                <span>2</span>가족들과 대화하며 맛있는 저녁을 먹을 때 가장 행복해요 ㅎㅎ 특히 내가 {heart}
              </Item>

              <Item>
                <span>3</span>강아지와 함께 산책할 때 {heart}
              </Item>

              <Item>
                <span>4</span>맛있는 거 먹으면서 드라마 정주행 {heart}
              </Item>
            </>
          ) : (
            <ArrowIconPosition
              onClick={() => {
                store.actions.setOpenDetail(true);
              }}
            >
              {down}
            </ArrowIconPosition>
          )}
        </List>
        <span>한줄남기러 가기</span>
      </div>
    </ContentsBackground>
  );
}
