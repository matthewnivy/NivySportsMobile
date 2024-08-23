import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackIconSvgComponent = props => (
  <Svg
    width={5}
    height={8}
    fill={props.colorFill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.428.578 3.868 0 0 4l3.869 4 .559-.578L1.118 4 4.428.578Z"
      fill="#59297F"
    />
  </Svg>
);

export default BackIconSvgComponent;
