import React from 'react';

import Button from '../common/Button';

export default function TestButton() {
  return (
    <div>
      <Button onClick={() => console.log('테스트')}>버튼</Button>
    </div>
  );
}
