import React from 'react';

import Button from '../common/Button';
import { useAppDispatch } from '../hooks';
import { TestReduxObject } from '../reducer/TestRedux_Store';

function TestRedux() {
  const TestReduxObjects = TestReduxObject();
  // 액션메서드를 쓰기위해 디스패치를 무조건 해줘야함.
  const dispatch = useAppDispatch();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <Button onClick={() => dispatch(TestReduxObjects.actions.increment())}>++++</Button>
      <Button onClick={() => dispatch(TestReduxObjects.actions.decrement())}>----</Button>
      <Button onClick={() => dispatch(TestReduxObjects.actions.incrementByAmount(10))}>10개씩 +</Button>
      리덕스 테스트 상태
      {TestReduxObjects.count}
    </div>
  );
}

export default TestRedux;
