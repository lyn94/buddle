import HeartStraight from '../../../icons/HeartStraight.png';
import CaretDown from '../../../icons/CaretDown.png';
import SearchIcon from '../../../icons/SearchIcon.png';
import CaretLeft from '../../../icons/CaretLeft.png';
import CaretRight from '../../../icons/CaretRight.png';
import ChatCircleText from '../../../icons/ChatCircleText.png';
import ListBullets from '../../../icons/ListBullets.png';
import DotsThree from '../../../icons/DotsThree.png';

import React from 'react';

export const heartImage = () => {
  return (
    <img
      src={HeartStraight}
      className="HeartStraight"
      alt="HeartStraight"
      style={{ width: '18px', height: '18px', marginLeft: 'auto' }}
    />
  );
};

export const downArrowImage = () => {
  return <img src={CaretDown} className="CaretDown" alt="CaretDown" style={{ width: '24px', height: '24px' }} />;
};

export const caretLeft = () => {
  return <img src={CaretLeft} className="CaretLeft" alt="CaretLeft" style={{ width: '24px', height: '24px' }} />;
};

export const caretRight = () => {
  return <img src={CaretRight} className="CaretRight" alt="CaretRight" style={{ width: '24px', height: '24px' }} />;
};
export const searchImage = () => {
  return <img src={SearchIcon} className="SearchIcon" alt="SearchIcon" style={{ width: '24px', height: '24px' }} />;
};
export const chatCircleText = () => {
  return (
    <img
      src={ChatCircleText}
      className="ChatCircleText"
      alt="ChatCircleText"
      style={{ width: '24px', height: '24px' }}
    />
  );
};
export const listBullets = () => {
  return <img src={ListBullets} className="ListBullets" alt="ListBullets" style={{ width: '24px', height: '24px' }} />;
};

export const dotsThree = () => {
  return <img src={DotsThree} className="DotsThree" alt="DotsThree" style={{ width: '24px', height: '24px' }} />;
};
