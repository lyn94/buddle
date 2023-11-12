import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const HeaderStyle = styled.header`
  /* position: relative; */
  height: 100%;
  display: flex;
`;

const TabStyle = styled.button<{ 'data-current'?: boolean }>`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
  border-bottom: ${(props) => (props['data-current'] ? '1.5px solid black' : '')};
`;

type TabItem = {
  label: string;
  key: string;
  content: React.ReactNode;
};

type Props = {
  items: TabItem[];
  onChange?: (key: string) => void;
  //   onBeforeChange?: (nextTab: string, prevTab: string) => boolean | undefined | Promise<boolean | void>;
  //   current?: number;
  //   dependency?: any;
  //   setCurrent?: (index: number) => void;
  //   width?: string;
};

function Tabs(props: Props) {
  const { items, onChange } = props;

  const [currentTab, setCurrentTab] = useState<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleClick = (target: HTMLButtonElement | null | undefined, index: number) => {
    setCurrentTab(index);
  };

  useEffect(() => {
    onChange?.(items[currentTab].key);
  }, [currentTab]);

  return (
    <TabsContainer>
      <HeaderStyle ref={headerRef}>
        {items.map((item, index) => (
          <TabStyle
            key={item.key}
            data-current={index === currentTab}
            onClick={(e: any) => {
              handleClick(e.currentTarget, index);
            }}
          >
            {item.label}
          </TabStyle>
        ))}
      </HeaderStyle>
      <main>{items[currentTab].content}</main>
    </TabsContainer>
  );
}

export default Tabs;
