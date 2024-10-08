import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconCloudDone = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-cloud_done ${className}`}
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
          id="mask0_2621_40479"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2621_40479)">
          <path
            d="M10.35 16.6543L15.6538 11.3505L14.5692 10.2659L10.3346 14.5005L8.21535 12.3813L7.14615 13.4505L10.35 16.6543ZM6.49998 19.5004C5.11794 19.5004 3.9391 19.0203 2.96345 18.0601C1.98782 17.0998 1.5 15.9287 1.5 14.5466C1.5 13.3235 1.89167 12.2357 2.675 11.2832C3.45833 10.3306 4.45769 9.76716 5.67308 9.59281C5.99359 8.09793 6.74519 6.87549 7.92788 5.92549C9.11056 4.97549 10.4679 4.50049 12 4.50049C13.8089 4.50049 15.3445 5.13158 16.6067 6.39376C17.8689 7.65593 18.5 9.1915 18.5 11.0005V11.5005H18.8077C19.8615 11.5825 20.7403 12.0063 21.4442 12.7716C22.148 13.537 22.5 14.4466 22.5 15.5005C22.5 16.6158 22.1121 17.5613 21.3365 18.337C20.5609 19.1126 19.6153 19.5004 18.5 19.5004H6.49998ZM6.49998 18.0005H18.5C19.2 18.0005 19.7916 17.7588 20.275 17.2755C20.7583 16.7921 21 16.2005 21 15.5005C21 14.8005 20.7583 14.2088 20.275 13.7255C19.7916 13.2421 19.2 13.0005 18.5 13.0005H17V11.0005C17 9.61713 16.5125 8.43796 15.5375 7.46296C14.5625 6.48796 13.3833 6.00046 12 6.00046C10.6166 6.00046 9.43748 6.48796 8.46248 7.46296C7.48748 8.43796 6.99998 9.61713 6.99998 11.0005H6.49998C5.53331 11.0005 4.70831 11.3421 4.02498 12.0255C3.34164 12.7088 2.99998 13.5338 2.99998 14.5005C2.99998 15.4671 3.34164 16.2921 4.02498 16.9755C4.70831 17.6588 5.53331 18.0005 6.49998 18.0005Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconCloudDone;
