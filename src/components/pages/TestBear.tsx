import React from 'react';

import { useBearStore, useTests } from '../store/TestZustand_Store';

function TestBear() {
  const useTest: any = useBearStore();
  console.log(useTest);
  return (
    <div>
      Store Test
      {useTest.bears}
      <button type="button" onClick={useTest.increasePopulation}>
        plus
      </button>
      <button type="button" onClick={useTest.removeAllBears}>
        remove
      </button>
    </div>
  );
}

export default TestBear;
