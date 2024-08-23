import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const NotePadIconSvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill={props?.color}
      d="M17.79 19.989 2.998 20c-1.224.005-2.224-.954-2.228-2.139l-.01-2.17 1.48-.006.01 2.17a.729.729 0 0 0 .744.713l14.791-.012a.728.728 0 0 0 .737-.717l-.065-15.696a.729.729 0 0 0-.743-.713l-14.792.011c-.409.003-.739.324-.737.718l.01 2.127-1.48.007-.01-2.128C.7.981 1.691.015 2.915.011L17.707 0c1.224-.004 2.224.954 2.228 2.139L20 17.835c.005 1.182-.986 2.15-2.21 2.154Z"
    />
    <Path
      fill={props?.color}
      d="m.749 7.174 1.48-.006.023 5.723-1.48.006L.75 7.174ZM0 5.03l2.958-.01.006 1.43-2.958.01L0 5.032Zm.035 8.586 2.958-.011.006 1.43-2.959.011-.005-1.43Zm6.238-10.52H6.27c-.41.002-.74.324-.737.717a.73.73 0 0 0 .739.713h.002c.409-.002.74-.324.737-.717a.728.728 0 0 0-.74-.713Zm1.49 3.214c.002.79-2.957.802-2.959.01-.002-.79.656-1.581 1.473-1.586.818-.004 1.483.787 1.485 1.576Zm-1.49 1.792H6.27c-.41.002-.74.324-.737.717a.73.73 0 0 0 .739.713h.002c.409-.002.74-.324.737-.717a.728.728 0 0 0-.74-.713Zm1.49 3.213c.002.791-2.957.802-2.959.011-.002-.79.656-1.582 1.473-1.586.818-.005 1.483.786 1.485 1.575Zm-1.49 1.792H6.27c-.41.003-.74.324-.737.718a.73.73 0 0 0 .739.713h.002c.409-.003.74-.325.737-.718a.728.728 0 0 0-.74-.713Zm1.49 3.214c.002.79-2.957.802-2.959.01-.002-.79.656-1.581 1.473-1.586.818-.004 1.483.787 1.485 1.576ZM10 4.302h7.39v1.43H10v-1.43Zm0 4.983h7.39v1.43H10v-1.43Zm0 5.005h7.39v1.43H10v-1.43Z"
    />
  </Svg>
);
export default NotePadIconSvgComponent;
