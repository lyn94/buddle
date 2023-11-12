import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { navigationIcons } from '../../icons/navigationIcons';

const NavWrap = styled.nav`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: fixed;
      bottom: 0;
      width: 320px;
      height: 74px;
      background-color: ${colors.white};
      align-items: center;
      font-size: ${fonts.size.xsm};
      flex-grow: 1;
    `;
  }}
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/meditation');
    }
  }, [location, navigate]);
  return (
    <NavWrap>
      {navigationIcons.map(({ name, icon, isActive, link }) => (
        <Link to={link} key={name}>
          <IconWrap>
            {location.pathname === link ? <div>{isActive}</div> : <div>{icon}</div>}
            <p>{name}</p>
          </IconWrap>
        </Link>
      ))}
    </NavWrap>
  );
}

export default Navigation;
