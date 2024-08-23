import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const StadiumIconSvgComponent = props => (
  <Svg
    width={15}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.447 1.761H1.123c-.057 0-.114 0-.166-.008-.1-.017-.202-.054-.198-.176 0-.087.024-.213.085-.259A50.7 50.7 0 0 1 2.524.07c.201-.146.367-.05.375.213.012.401.008.802.012 1.204v1.182C3.957 2.53 5 2.396 6.044 2.258v-.25h-.436c-.19-.004-.278-.092-.278-.288a83.968 83.968 0 0 1 0-1.425c0-.197.089-.289.278-.289H9.4c.19 0 .278.092.282.284.004.477.004.949 0 1.425 0 .2-.092.289-.29.293h-.428v.25c1.045.134 2.087.272 3.137.406v-.506c0-.551 0-1.103.004-1.659 0-.1.008-.196.024-.296.029-.184.162-.251.32-.167.08.041.157.096.23.15.484.355.964.719 1.449 1.074.105.08.182.171.137.313-.048.15-.161.18-.303.18-.452-.004-.904 0-1.377 0 0 .343-.004.673.004 1.007 0 .033.07.075.11.092.472.188.96.343 1.417.564.25.121.468.338.674.539.158.155.21.372.21.602 0 1.721-.004 3.439 0 5.16 0 .289-.109.527-.299.727-.339.36-.771.56-1.22.727-.883.335-1.804.506-2.733.627-1.619.21-3.242.247-4.87.155-1.36-.08-2.708-.234-4.017-.652-.512-.163-1.005-.364-1.425-.723A1.167 1.167 0 0 1 0 9.63a340.21 340.21 0 0 0 0-4.973 1.14 1.14 0 0 1 .44-.944c.465-.38 1.01-.577 1.563-.76.141-.047.347-.047.416-.151.076-.109.028-.31.032-.468 0-.184-.004-.372-.004-.573ZM14.51 5.392c-.258.138-.496.285-.746.402-.639.296-1.313.46-1.995.593a20.586 20.586 0 0 1-3.392.36c-1.934.058-3.856-.038-5.75-.485-.714-.168-1.409-.393-2.026-.82a1.953 1.953 0 0 0-.11-.066c0 .601.009 1.186-.003 1.771a.594.594 0 0 0 .234.514c.125.097.25.201.391.264.36.158.723.317 1.095.434 1.506.468 3.06.614 4.623.656 1.134.03 2.265-.025 3.391-.159.986-.112 1.967-.275 2.912-.589.403-.133.807-.271 1.13-.572.11-.1.23-.26.234-.397.025-.635.012-1.275.012-1.906Zm-3.496-.154c.577.13 1.138.25 1.7.372.036.008.08.008.117-.009.367-.142.739-.275 1.094-.438.165-.076.315-.205.448-.339.182-.184.186-.405.016-.602a1.284 1.284 0 0 0-.387-.313 7.037 7.037 0 0 0-1.018-.43c-1.651-.51-3.355-.677-5.067-.719a20.884 20.884 0 0 0-3.27.18c-.986.125-1.963.296-2.904.63-.363.13-.718.272-1.017.535-.303.268-.303.548-.008.815.076.071.165.147.258.188.315.147.638.28.957.422a.832.832 0 0 0 .626.021c.194-.067.4-.1.602-.138.274-.054.549-.104.84-.158-.049-.055-.081-.092-.118-.126-.29-.305-.581-.606-.872-.91-.08-.084-.129-.176-.089-.293.065-.192.27-.226.428-.063.392.405.788.81 1.175 1.216a.25.25 0 0 0 .226.084c.554-.046 1.103-.092 1.656-.126.278-.016.561-.004.856-.004V3.558c0-.188.089-.297.238-.3.15-.005.246.112.246.304v1.413c.872.062 1.724.13 2.576.188.049.004.113-.038.15-.076.262-.267.52-.534.779-.806.141-.146.283-.297.428-.443.11-.104.242-.104.34-.008.1.1.1.242 0 .363-.033.038-.074.075-.106.113-.303.313-.601.618-.9.932Zm-5.209 6.23v-1.14c0-.226.085-.314.303-.314h2.798c.198 0 .283.092.287.297V11.443c.068 0 .121.004.17 0 .605-.071 1.21-.125 1.812-.217.824-.126 1.636-.31 2.403-.652.238-.105.464-.25.678-.401.182-.126.267-.31.258-.548-.012-.438-.004-.877-.004-1.312v-.188c-.157.096-.294.188-.436.263-.63.347-1.308.531-1.998.682-1.232.267-2.48.384-3.735.417-1.914.055-3.816-.046-5.69-.48-.722-.167-1.429-.389-2.058-.82-.033-.02-.065-.037-.11-.066 0 .48.02.94-.007 1.396-.025.372.125.622.42.777.35.184.714.36 1.086.493.787.28 1.607.422 2.43.53.46.063.917.1 1.393.151Zm5.778-5.582a22.692 22.692 0 0 0-8.16 0c2.717.493 5.439.497 8.16 0ZM9.186.52H5.818v.982h3.368V.52ZM6.295 11.493H8.7v-.965H6.295v.965Zm.246-9.226h1.922V2.02H6.541v.247Zm6.04-1.015h.683c-.242-.18-.452-.335-.683-.502v.502ZM2.415.746c-.23.175-.436.33-.67.501h.67V.746Z"
      fill="#000"
    />
    <Path
      d="M1.454 6.888c0 .122.004.239 0 .36-.004.158-.105.263-.243.263-.137 0-.238-.105-.238-.263-.004-.238-.004-.48 0-.719.004-.159.105-.263.242-.263.138 0 .235.104.243.263 0 .121-.004.238-.004.36ZM13.546 6.88c0-.121-.004-.238 0-.36.005-.15.101-.25.235-.254.137-.004.242.1.246.255.004.246.004.489 0 .735-.004.155-.113.263-.246.255-.13-.004-.226-.109-.235-.26-.004-.12 0-.246 0-.371ZM2.665 7.377c0-.12-.004-.238 0-.36.008-.15.105-.25.238-.25s.238.096.242.247c.008.25.004.501 0 .752-.004.15-.105.25-.238.25-.137 0-.238-.104-.242-.263-.004-.125 0-.25 0-.376ZM11.855 7.381c0-.12-.004-.238 0-.359.008-.159.109-.263.246-.259.13.004.23.105.234.255.004.246.004.489 0 .735-.004.16-.109.264-.246.26-.13-.005-.23-.105-.234-.255-.004-.126 0-.251 0-.377ZM4.841 7.879c0-.122-.004-.239 0-.36.008-.15.105-.25.234-.255.138-.004.243.1.247.26.004.246.004.488 0 .735-.004.15-.105.25-.235.255-.137.004-.238-.1-.246-.26-.004-.125 0-.25 0-.375ZM9.678 7.879c0-.121-.004-.238 0-.36.009-.15.105-.25.239-.25.133 0 .238.096.242.246.008.25.004.502 0 .752-.004.15-.105.251-.238.251-.138.004-.239-.104-.243-.263-.004-.13 0-.255 0-.376ZM7.26 8.008c0-.121-.004-.238 0-.36.008-.158.109-.262.246-.258.13.004.23.104.234.255.004.246.004.489 0 .735-.004.155-.109.263-.246.26-.13-.005-.226-.105-.234-.256v-.376Z"
      fill="#000"
    />
  </Svg>
);

export default StadiumIconSvgComponent;
