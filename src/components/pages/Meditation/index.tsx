import React from 'react';
import meditationBackground from '../../../icons/meditationBackground.png';
import MeditationContents from '../../meditation/MeditationContents';
import MeditationHeader from '../../meditation/MeditationHeader';
import { useMeditation } from '../../store/meditation/Meditation_Store';

const Meditation = () => {
  const store = useMeditation();

  return (
    <div style={{ background: `url(${meditationBackground}) center/cover no-repeat` }}>
      {store.openDetail ? (
        <>
          <MeditationContents store={store} />
        </>
      ) : (
        <>
          <MeditationHeader />
          <MeditationContents store={store} />
        </>
      )}
    </div>
  );
};

export default Meditation;
