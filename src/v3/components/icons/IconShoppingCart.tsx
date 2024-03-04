import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconShoppingCart = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-shopping-cart" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4944_2980558"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4944_2980558)">
          <path
            d="M7.15382 22.0581C6.66794 22.0581 6.25481 21.8879 5.91442 21.5476C5.57404 21.2072 5.40385 20.794 5.40385 20.3081C5.40385 19.8223 5.57404 19.4091 5.91442 19.0687C6.25481 18.7284 6.66794 18.5582 7.15382 18.5582C7.63972 18.5582 8.05287 18.7284 8.39325 19.0687C8.73363 19.4091 8.90382 19.8223 8.90382 20.3081C8.90382 20.794 8.73363 21.2072 8.39325 21.5476C8.05287 21.8879 7.63972 22.0581 7.15382 22.0581ZM16.8461 22.0581C16.3602 22.0581 15.9471 21.8879 15.6067 21.5476C15.2663 21.2072 15.0961 20.794 15.0961 20.3081C15.0961 19.8223 15.2663 19.4091 15.6067 19.0687C15.9471 18.7284 16.3602 18.5582 16.8461 18.5582C17.332 18.5582 17.7451 18.7284 18.0855 19.0687C18.4259 19.4091 18.5961 19.8223 18.5961 20.3081C18.5961 20.794 18.4259 21.2072 18.0855 21.5476C17.7451 21.8879 17.332 22.0581 16.8461 22.0581ZM6.01535 6.25046L8.54997 11.5582H15.3673C15.425 11.5582 15.4763 11.5437 15.5211 11.5149C15.566 11.486 15.6045 11.446 15.6365 11.3947L18.3192 6.51969C18.3577 6.44917 18.3609 6.38667 18.3288 6.33219C18.2968 6.27769 18.2423 6.25044 18.1653 6.25044L6.01535 6.25046ZM5.29613 4.75051H19.1807C19.5897 4.75051 19.899 4.92455 20.1086 5.27261C20.3182 5.6207 20.3281 5.97615 20.1384 6.33896L16.9346 12.1427C16.7705 12.4312 16.5535 12.6559 16.2836 12.8168C16.0137 12.9777 15.7179 13.0581 15.3961 13.0581H8.09998L6.94227 15.1735C6.89099 15.2504 6.88939 15.3338 6.93747 15.4235C6.98556 15.5133 7.05767 15.5582 7.15382 15.5582H18.5961V17.0581H7.15382C6.48717 17.0581 5.98622 16.7706 5.65095 16.1956C5.3157 15.6206 5.30384 15.0466 5.61538 14.4735L7.04233 11.9081L3.40385 4.25044H1.5V2.75049H4.34612L5.29613 4.75051Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconShoppingCart;
