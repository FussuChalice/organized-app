import Lottie from 'react-lottie-player';
import animationData from '@assets/lotties/loader.json';

const LottieLoader = () => {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      speed={1.3}
      style={{ width: 72, height: 72 }}
    />
  );
};

export default LottieLoader;
