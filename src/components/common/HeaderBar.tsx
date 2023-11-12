import React from 'react';
import styled, { css } from 'styled-components';

import HomeButton from './HomeButton';
import { searchImage } from './images/imageComponents';
import { ReactComponent as SearchIcon } from '../../icons/searchIcon.svg';

const HeaderBarWrap = styled.header`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      height: 24px;
      align-items: center;
      background-color: ${colors.white};
      padding: 22px 0px 17px 0px;
    `;
  }}
`;

const HeaderBar = () => {
  const search = searchImage();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: '20px 0px',
      }}
    >
      <HomeButton />
      <div style={{ marginLeft: 'auto' }}>{search}</div>
    </div>
  );
};

export default HeaderBar;
