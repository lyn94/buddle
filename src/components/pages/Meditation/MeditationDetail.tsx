import React from 'react';
import styled from 'styled-components';
import {
  caretLeft,
  caretRight,
  chatCircleText,
  dotsThree,
  heartImage,
  listBullets,
} from '../../common/images/imageComponents';
import {useMeditation} from '../../store/meditation/Meditation_Store';
import {Modal} from '../../common/Modal';

const HeadContainer = styled.div`
  width: 320px;
  height: 310px;
  display: flex;
  flex-direction: column;
  background-color: #aa9090;
`;
const DotTree = styled.div`
  display: flex;
  padding: 12px 16px 12px 320px;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.div`
  color: #fff;
  font-family: Eulyoo1945;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  margin: 122px 148px 31px 16px;
`;
const Sub = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 19.5px */
  padding: 0px 233px 34px 16px;
`;
const BodyContainer = styled.div`
  width: 320px;
  height: 400px;
  background-color: wheat;
`;
const Contents = styled.div`
  width: 300px;
  color: #101010;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  padding: 30px 16px 30px 16px;
`;
const CommentHead = styled.div`
  border-top: 1px solid #e9e9e9;
  background: #fff;
  display: flex;
  flex-direction: row;
  padding: 5px 4px 5px 17px;
  justify-content: center;
  align-items: center;
  gap: 171px;
`;
const CountLike = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Input = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  /* padding: 30px 16px; */
  align-items: center;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  background: #fff;
`;
const InputText = styled.div`
  color: #8c8c8c;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  padding: 22px 16px;
`;
const SubmitButton = styled.div`
  margin-left: auto;
  padding: 22px 16px;
  border-radius: 18px;
  background: #e5e5e5;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 8px;
`;
const ComentContainer = styled.div`
  display: flex;
  width: 320px;
  padding: 20px 0px;
  align-items: flex-start;
  border-bottom: 1px solid #ededed;
  background: #fff;
  padding: 20px 0 20px 0;
  flex-direction: row;
  background-color: pink;
`;

export default function MeditationDetail() {
  const left = caretLeft();
  const right = caretRight();
  const balloon = chatCircleText();
  const list = listBullets();
  const dotTree = dotsThree();
  const heart = heartImage();
  const store = useMeditation();
  return (
    <div>
      <HeadContainer>
        <DotTree onClick={store.actions.isSeeMoreDetailModalOpen}>{dotTree}</DotTree>
        <Title>당신에게 행복이란 무엇인가요?</Title>
        <Sub>~월 ~ 째주 한줄사색</Sub>
      </HeadContainer>
      <BodyContainer>
        <Contents>
          당신에게 행복이란 무엇인가요? 나에게 가장 행복한 순간, 내가 생각하는 행복 작고 사소한 생각이라도 좋아요.
          여러분들의 생각을 한 줄로 표현해보세요.
        </Contents>
        <CommentHead>
          <CountLike>{balloon}24</CountLike>
          <CountLike>
            <div>{left}</div>
            <div>{list}</div>
            <div>{right}</div>
          </CountLike>
        </CommentHead>
        <Input>
          <InputText>당신의 한 줄을 남겨보세요</InputText>
          <SubmitButton>등록</SubmitButton>
        </Input>
        <ComentContainer>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '305px'}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: '6px', alignItems: 'center'}}>
              <div style={{width: '24px', height: '24px', backgroundColor: 'yellow'}}>그</div>
              <div>닉네임</div>
              <div style={{color: '#979797'}}>3시간전</div>
            </div>
            <div style={{marginBottom: '21px'}}>댓글입니다 . 레이아웃 잡기 빡세네요 ... 하 ...</div>
            <div
              style={{
                width: '110px',
                height: '18px',
                alignItems: 'center',
                gap: '6px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div>{heart}</div>
                <div>좋아요</div>
              </div>
              <div>999+</div>
            </div>
          </div>
          <div>{dotTree}</div>
        </ComentContainer>
      </BodyContainer>
      <Modal isOpen={store.seeMoreDetailModal} close={store.actions.isSeeMoreDetailModalClose} top={100} right={100}>
        모달테스트
      </Modal>
    </div>
  );
}
