import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconMapView = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-map-view" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4944_2978239"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4944_2978239)">
          <path
            d="M11.9999 20.3967L3.80762 14.0313L5.03452 13.0891L11.9999 18.4813L18.9652 13.0891L20.1921 14.0313L11.9999 20.3967ZM11.9999 15.9621L3.80762 9.59677L11.9999 3.23145L20.1921 9.59677L11.9999 15.9621ZM11.9999 14.0468L17.7499 9.59677L11.9999 5.14677L6.24987 9.59677L11.9999 14.0468Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconMapView;
