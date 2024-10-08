import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconEncryptionKey = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-encryption-key ${className}`}
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
          id="mask0_2704_35177"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2704_35177)">
          <path
            d="M6.55268 13.6158C6.10525 13.6158 5.72417 13.4584 5.40943 13.1437C5.0947 12.829 4.93733 12.4479 4.93733 12.0005C4.93733 11.553 5.0947 11.1719 5.40943 10.8572C5.72417 10.5425 6.10525 10.3851 6.55268 10.3851C7.00012 10.3851 7.3812 10.5425 7.69594 10.8572C8.01067 11.1719 8.16803 11.553 8.16803 12.0005C8.16803 12.4479 8.01067 12.829 7.69594 13.1437C7.3812 13.4584 7.00012 13.6158 6.55268 13.6158ZM6.55268 17.5004C5.02705 17.5004 3.72898 16.9652 2.65848 15.8947C1.58798 14.8242 1.05273 13.5261 1.05273 12.0005C1.05273 10.4748 1.58798 9.17676 2.65848 8.10626C3.72898 7.03575 5.02705 6.50049 6.55268 6.50049C7.62447 6.50049 8.59369 6.7771 9.46036 7.33031C10.327 7.88351 10.9886 8.6069 11.445 9.50049H20.4469L22.9469 12.0005L19.1008 15.8273L17.245 14.4331L15.3412 15.8466L13.3893 14.5004H11.445C10.9886 15.3876 10.327 16.1094 9.46036 16.6658C8.59369 17.2222 7.62447 17.5004 6.55268 17.5004ZM6.55268 16.0005C7.51167 16.0005 8.34212 15.7107 9.04403 15.1312C9.74595 14.5517 10.204 13.8415 10.4181 13.0005H13.8604L15.3008 13.9966L17.2546 12.5678L18.9527 13.8658L20.8181 12.0005L19.8181 11.0005H10.4181C10.204 10.1594 9.74595 9.44919 9.04403 8.86969C8.34212 8.29021 7.51167 8.00046 6.55268 8.00046C5.45268 8.00046 4.51102 8.39213 3.72768 9.17546C2.94435 9.9588 2.55268 10.9005 2.55268 12.0005C2.55268 13.1005 2.94435 14.0421 3.72768 14.8255C4.51102 15.6088 5.45268 16.0005 6.55268 16.0005Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconEncryptionKey;
