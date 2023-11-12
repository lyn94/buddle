import React, { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonEmphasis = 'bold' | 'subtle' | 'minimal';
type ButtonColor = 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' | 'green';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  color?: ButtonColor;
  emphasis?: ButtonEmphasis;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const ButtonStyle = styled.button<{ width?: number; height?: number; dataColor?: string }>`
  background-color: #58b598;
  border-radius: 3px;
  border: none;
  color: white;
  width: ${(props) => props.width || 100}px;
  height: ${(props) => props.height || 50}px;
  :hover {
    background-color: purple;
  }
  :active {
    opacity: 0.9;
  }
  cursor: pointer;

  :disabled,
  :disabled:hover {
    opacity: 0.6;
    cursor: auto;
    background-color: #58b598;
  }
  [dataColor='primary'] {
    background-color: yellow;
  }
`;

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <ButtonStyle
      width={props.width}
      height={props.height}
      onClick={props.onClick}
      disabled={props.disabled}
      dataColor={props.color}
    >
      {props.children}
    </ButtonStyle>
  );
}
