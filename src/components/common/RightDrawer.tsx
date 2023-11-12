import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
}

export default function RightDrawer(props: Props) {
  const [ss, setSs] = useState();
  return (
    <>
      <CSSTransition
        in={ss}
        timeout={300}
        classNames="your-transition" // CSS 클래스 이름
        unmountOnExit
      >
        <div>www</div>
      </CSSTransition>
    </>
  );
}
