import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseIconSvg = props => (
  <Svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.856 0 .003.887l3.483 3.626L0 8.143l.852.887L4.338 5.4l3.485 3.63.853-.888L5.19 4.513 8.673.888 7.82.001 4.338 3.626.856 0Z"
      fill="#C4C4C4"
    />
  </Svg>
);

export default CloseIconSvg;
