import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconLiterature = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-literature" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4909_2969360"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4909_2969360)">
          <path
            d="M2.25 20.1927V18.6927H21.75V20.1927H2.25ZM4.4231 16.3081V8.80811H5.92308V16.3081H4.4231ZM8.30772 16.3081V4.80811H9.80768V16.3081H8.30772ZM12.1923 16.3081V4.80811H13.6923V16.3081H12.1923ZM18.8462 16.3081L15.0962 9.7504L16.4038 9.0004L20.1538 15.5581L18.8462 16.3081Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconLiterature;