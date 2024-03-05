import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconHallOverseer = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-hall-overseer" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4432_164536"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4432_164536)">
          <path
            d="M12 18.183C13.0346 17.9253 13.8926 17.3294 14.574 16.3954C15.2554 15.4614 15.5961 14.4265 15.5961 13.2907V10.994L12 9.19265L8.40385 10.9929V13.2882C8.40385 14.4283 8.74455 15.4647 9.42595 16.3974C10.1074 17.3301 10.9654 17.9253 12 18.183ZM4.5 21.0003V9.75032L12 4.11572L19.5 9.75032V21.0003H4.5ZM5.99997 19.5003H18V10.5003L12 6.0003L5.99997 10.5003V19.5003Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconHallOverseer;