import {CSSTransition} from 'react-transition-group';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
  title?: string;
  top?: number;
  right?: number;
}
const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  aspect-ratio: 1;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 20px;
  line-height: 1;
  color: #999;
  transition: color 0.2s ease-out;
  :hover {
    color: #000;
    background-color: #9991;
  }
`;
const ModalStyle = styled.div<{top?: number; right?: number}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 50;
  background-color: #fff;
  border-radius: 10px;
  padding: 24px;
  top: ${(props) => (props.top ? props.top : '') + 'px'};
  right: ${(props) => (props.top ? props.right : '') + 'px'};
`;
const BackdropStyle = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 40;
`;

export const Modal = ({isOpen, close, children, title, top, right}: Props) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  if (!isOpen) {
    return;
  }

  return (
    <BackdropStyle onClick={handleBackdropClick}>
      <ModalStyle top={top} right={right}>
        {title && <header>{title}</header>}
        <CloseButton className="close-button" onClick={close}>
          &times;
        </CloseButton>
        {children}
      </ModalStyle>
    </BackdropStyle>
  );
};
