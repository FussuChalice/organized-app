import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconDateError = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-date-error ${className}`}
      sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 9.923H4.5V19.3075C4.5 19.3845 4.53208 19.455 4.59625 19.519C4.66025 19.5832 4.73075 19.6152 4.80775 19.6152H16V21.1152H4.80775C4.30258 21.1152 3.875 20.9403 3.525 20.5903C3.175 20.2402 3 19.8127 3 19.3075V5.923C3 5.41783 3.175 4.99025 3.525 4.64025C3.875 4.29025 4.30258 4.11525 4.80775 4.11525H6.19225V2H7.73075V4.11525H15.3077V2H16.8077V4.11525H18.1923C18.6974 4.11525 19.125 4.29025 19.475 4.64025C19.825 4.99025 20 5.41783 20 5.923V7H18.5V5.923C18.5 5.846 18.4679 5.7755 18.4038 5.7115C18.3398 5.64733 18.2692 5.61525 18.1923 5.61525H4.80775C4.73075 5.61525 4.66025 5.64733 4.59625 5.7115C4.53208 5.7755 4.5 5.846 4.5 5.923V8.423H16V9.923ZM18.2998 17.2998V9.2998H20.2998V17.2998H18.2998ZM19.2998 21.2998C19.0165 21.2998 18.779 21.204 18.5873 21.0123C18.3956 20.8206 18.2998 20.5831 18.2998 20.2998C18.2998 20.0165 18.3956 19.779 18.5873 19.5873C18.779 19.3956 19.0165 19.2998 19.2998 19.2998C19.5831 19.2998 19.8206 19.3956 20.0123 19.5873C20.204 19.779 20.2998 20.0165 20.2998 20.2998C20.2998 20.5831 20.204 20.8206 20.0123 21.0123C19.8206 21.204 19.5831 21.2998 19.2998 21.2998Z"
          fill={color}
        />
      </svg>
    </SvgIcon>
  );
};

export default IconDateError;