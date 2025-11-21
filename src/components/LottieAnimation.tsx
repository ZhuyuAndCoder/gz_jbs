import React from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData: any;
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({
  animationData,
  width = 200,
  height = 200,
  loop = true,
  autoplay = true
}: LottieAnimationProps) {
  return (
    <div style={{ width, height }}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}