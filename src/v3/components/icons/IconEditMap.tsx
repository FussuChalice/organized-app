import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconEditMap = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-edit-map" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4921_2972119"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4921_2972119)">
          <path
            d="M15.7332 8.86478L20.3266 3.76057L21.8872 5.16502L17.2937 10.2692L15.8112 10.3473L15.7332 8.86478Z"
            fill={color}
          />
          <path
            d="M23.1388 3.77419L22.5494 4.42917L20.9888 3.02473L21.5783 2.36977C21.7153 2.21747 21.8883 2.13101 22.0971 2.1104C22.3059 2.08978 22.4831 2.14495 22.6286 2.27593L23.1219 2.71983C23.2674 2.8508 23.3409 3.02121 23.3423 3.23104C23.3437 3.44086 23.2759 3.62191 23.1388 3.77419Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8042 11.9286V18.281L12.5542 19.358V7.65796L14.8049 6.80827L17.3042 5.78817V5.50031C17.3042 5.19517 17.1785 4.95767 16.9272 4.78781C16.6759 4.61794 16.4029 4.59006 16.108 4.70416L11.8042 6.36953L5.80417 4.26953L0.908049 5.93491C0.717032 6.00542 0.568641 6.11921 0.462874 6.27626C0.357091 6.43331 0.304199 6.61055 0.304199 6.80798V19.9233C0.304199 20.2348 0.429841 20.4803 0.681124 20.6598C0.932407 20.8393 1.20548 20.872 1.50035 20.7579L5.80417 19.0925L11.8042 21.1925L16.6618 19.5656C16.8593 19.4951 17.0157 19.3829 17.1311 19.2291C17.2465 19.0752 17.3042 18.8964 17.3042 18.6926V11.8644L15.8042 11.9286ZM11.0542 7.65796V19.358L6.55415 17.7849V6.08488L11.0542 7.65796ZM5.0542 17.7849L1.80417 19.031V7.18103L5.0542 6.08488V17.7849Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconEditMap;