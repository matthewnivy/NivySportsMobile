import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FacebookIconSvgComponent = props => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.5 0C7.835 0 0 7.834 0 17.499 0 27.163 7.835 35 17.5 35 27.166 35 35 27.163 35 17.499 35 7.834 27.166 0 17.5 0zm4.459 17.501h-3.077v10.365h-4.146V17.5h-2.073v-4.147h2.056v-1.872c0-1.696.807-4.345 4.362-4.345l3.203.014v3.55h-2.326c-.378 0-.916.189-.916.996v1.658h3.294L21.96 17.5z"
      fill="#592C82"
    />
  </Svg>
);

export default FacebookIconSvgComponent;
