// import lottie from 'lottie-web';
import Lottie from 'lottie-react';
import React, { useRef, useEffect } from 'react';
import lottieAnimation from '../../image/newsletter.json';


function NewsAnimation() {
return (
  <div>
    <Lottie 
    animationData={lottieAnimation}
      height={500}
      width={600}
      loop={false}
    />
       {/* <iframe src="https://embed.lottiefiles.com/animation/72342"></iframe> */}

  </div>
);
}

export default NewsAnimation;