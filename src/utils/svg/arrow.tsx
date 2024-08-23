import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ArrowSvgComponent = props => (
  <Svg
    width={6}
    height={10}
    viewBox="0 0 6 10"
    fill="#592C82"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4A1 1 0 01.293 8.293L3.586 5 .293 1.707a1 1 0 010-1.414z"
    />
  </Svg>
);

export default ArrowSvgComponent;
