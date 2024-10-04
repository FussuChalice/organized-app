import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconDarkMode = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-dark-mode ${className}`}
      sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2473_22038"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2473_22038)">
          <path
            d="M12.0288 20.5007C9.66768 20.5007 7.66075 19.6743 6.00798 18.0215C4.3552 16.3687 3.52881 14.3618 3.52881 12.0007C3.52881 9.7379 4.29643 7.79721 5.83168 6.17863C7.36692 4.56005 9.24671 3.68344 11.4711 3.54883C11.6146 3.54883 11.7557 3.55395 11.8941 3.5642C12.0326 3.57445 12.1685 3.58984 12.3018 3.61035C11.7915 4.08727 11.3851 4.66355 11.0826 5.33918C10.78 6.01483 10.6287 6.73534 10.6287 7.5007C10.6287 9.1396 11.2024 10.5327 12.3496 11.6799C13.4968 12.8271 14.8899 13.4007 16.5288 13.4007C17.3044 13.4007 18.0275 13.2495 18.698 12.9469C19.3685 12.6444 19.939 12.238 20.4095 11.7277C20.43 11.861 20.4454 11.9969 20.4557 12.1354C20.4659 12.2738 20.4711 12.4148 20.4711 12.5584C20.3428 14.7828 19.4694 16.6626 17.8509 18.1978C16.2323 19.7331 14.2916 20.5007 12.0288 20.5007ZM12.0288 19.0007C13.4955 19.0007 14.8121 18.5965 15.9788 17.7882C17.1455 16.9799 17.9955 15.9257 18.5288 14.6257C18.1955 14.709 17.8621 14.7757 17.5288 14.8257C17.1955 14.8757 16.8621 14.9007 16.5288 14.9007C14.4788 14.9007 12.733 14.1799 11.2913 12.7382C9.84962 11.2965 9.12878 9.5507 9.12878 7.5007C9.12878 7.16737 9.15378 6.83404 9.20378 6.5007C9.25378 6.16737 9.32045 5.83404 9.40378 5.5007C8.10378 6.03404 7.04962 6.88404 6.24128 8.0507C5.43295 9.21737 5.02878 10.534 5.02878 12.0007C5.02878 13.934 5.71212 15.584 7.07878 16.9507C8.44545 18.3174 10.0955 19.0007 12.0288 19.0007Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconDarkMode;
