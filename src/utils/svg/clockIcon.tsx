import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ClockIconSvgComponent = props => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.254 7.5a6.754 6.754 0 1 1-13.508 0 6.754 6.754 0 0 1 13.508 0ZM7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm-.7-.683Zm.7.584ZM7.128 4.337v4.196l3.542 1.943a.373.373 0 1 0 .359-.655l-3.154-1.73V4.337a.373.373 0 0 0-.747 0Zm3.667 6.08a.275.275 0 0 1-.078-.028l-3.49-1.914V4.337v4.138l3.49 1.914a.276.276 0 0 0 .078.029Z"
      fill="#000"
    />
  </Svg>
);

export default ClockIconSvgComponent;
