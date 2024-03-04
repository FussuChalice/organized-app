import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconSync = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-sync" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2515_4554"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2515_4554)">
          <path
            d="M10.75 21.9119C9.57303 21.7465 8.48202 21.391 7.4769 20.8455C6.47178 20.3 5.60032 19.6087 4.8625 18.7715C4.12468 17.9343 3.54648 16.9808 3.1279 15.9109C2.7093 14.8411 2.5 13.7042 2.5 12.5004C2.5 11.0222 2.80738 9.65262 3.42213 8.39172C4.03688 7.13082 4.91733 6.03884 6.06348 5.11577H3.375V3.61579H8.74995V8.99074H7.25V6.09267C6.20512 6.86447 5.40223 7.80549 4.84133 8.91574C4.28043 10.026 3.99998 11.2209 3.99998 12.5004C3.99998 14.4799 4.63395 16.209 5.9019 17.6879C7.16983 19.1667 8.78585 20.0664 10.75 20.3869V21.9119ZM15.25 21.3945V16.0196H16.75V18.9177C17.7884 18.1292 18.5897 17.1824 19.1538 16.0773C19.7179 14.9722 20 13.7799 20 12.5004C20 10.5209 19.366 8.79172 18.0981 7.31287C16.8301 5.83403 15.2141 4.93436 13.25 4.61384V3.08887C15.6102 3.40938 17.5753 4.45201 19.1452 6.21674C20.715 7.98148 21.5 10.076 21.5 12.5004C21.5 13.9786 21.1926 15.3497 20.5778 16.6138C19.9631 17.8779 19.0826 18.9715 17.9365 19.8946H20.625V21.3945H15.25Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconSync;
