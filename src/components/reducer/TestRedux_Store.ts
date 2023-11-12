import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { useAppSelector } from '../hooks';

import type { RootState } from '../store';

interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

export const TestRedux_Store = createSlice({
  // 전역스토어 키값과 같아야함
  name: 'TestRedux_Store',
  initialState,
  reducers: {
    increment: (state) => {
      const statement = state;
      statement.value += 1;
    },
    decrement: (state) => {
      const statement = state;

      statement.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      const statement = state;
      statement.value += action.payload;
    },
  },
});

// 상태
const states = (state: RootState) => state.TestRedux_Store.value;
const { actions } = TestRedux_Store;

export const TestReduxObject = () => {
  // 셀렉터 훅을 사용해서 상태값을 넣어줘야함
  const count = useAppSelector(states);
  return {
    count,
    actions,
  };
};

// 전역 스토어에 할당하기위함
export default TestRedux_Store.reducer;
