import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconHelp = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-help ${className}`}
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
          id="mask0_2520_27093"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2520_27093)">
          <path
            d="M11.989 17.6158C12.2745 17.6158 12.5157 17.5172 12.7125 17.3201C12.9093 17.1229 13.0077 16.8816 13.0077 16.5961C13.0077 16.3105 12.9091 16.0694 12.7119 15.8726C12.5148 15.6758 12.2734 15.5774 11.9879 15.5774C11.7024 15.5774 11.4612 15.676 11.2644 15.8731C11.0676 16.0703 10.9692 16.3116 10.9692 16.5971C10.9692 16.8827 11.0678 17.1238 11.265 17.3206C11.4621 17.5174 11.7034 17.6158 11.989 17.6158ZM11.2808 14.0351H12.6884C12.7012 13.5428 12.7734 13.1495 12.9048 12.8553C13.0362 12.561 13.3551 12.171 13.8615 11.6851C14.3012 11.2453 14.6381 10.8392 14.8721 10.4668C15.106 10.0944 15.223 9.65456 15.223 9.14734C15.223 8.28662 14.9137 7.61427 14.2952 7.13029C13.6766 6.64632 12.9449 6.40434 12.1 6.40434C11.2654 6.40434 10.5747 6.6271 10.0279 7.07261C9.48109 7.51811 9.09103 8.04278 8.8577 8.64661L10.1423 9.16199C10.2641 8.82994 10.4724 8.50655 10.7673 8.19181C11.0622 7.87706 11.5 7.71969 12.0808 7.71969C12.6718 7.71969 13.1086 7.88156 13.3913 8.20529C13.674 8.52901 13.8154 8.8851 13.8154 9.27356C13.8154 9.6133 13.7186 9.92419 13.525 10.2062C13.3314 10.4883 13.0846 10.7607 12.7846 11.0236C12.1282 11.6159 11.7135 12.0883 11.5404 12.4409C11.3673 12.7934 11.2808 13.3248 11.2808 14.0351ZM12.0016 21.5004C10.6877 21.5004 9.45268 21.2511 8.29655 20.7524C7.1404 20.2538 6.13472 19.577 5.2795 18.7222C4.42427 17.8673 3.74721 16.8621 3.24833 15.7065C2.74944 14.5508 2.5 13.3161 2.5 12.0021C2.5 10.6882 2.74933 9.45317 3.248 8.29704C3.74667 7.14089 4.42342 6.13521 5.27825 5.27999C6.1331 4.42476 7.13834 3.7477 8.29398 3.24881C9.44959 2.74993 10.6844 2.50049 11.9983 2.50049C13.3122 2.50049 14.5473 2.74982 15.7034 3.24849C16.8596 3.74716 17.8652 4.42391 18.7205 5.27874C19.5757 6.13359 20.2527 7.13883 20.7516 8.29446C21.2505 9.45008 21.5 10.6849 21.5 11.9988C21.5 13.3127 21.2506 14.5478 20.752 15.7039C20.2533 16.86 19.5765 17.8657 18.7217 18.7209C17.8669 19.5762 16.8616 20.2532 15.706 20.7521C14.5504 21.251 13.3156 21.5004 12.0016 21.5004ZM12 20.0005C14.2333 20.0005 16.125 19.2255 17.675 17.6755C19.225 16.1255 20 14.2338 20 12.0005C20 9.76713 19.225 7.87546 17.675 6.32546C16.125 4.77546 14.2333 4.00046 12 4.00046C9.76664 4.00046 7.87498 4.77546 6.32498 6.32546C4.77498 7.87546 3.99998 9.76713 3.99998 12.0005C3.99998 14.2338 4.77498 16.1255 6.32498 17.6755C7.87498 19.2255 9.76664 20.0005 12 20.0005Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconHelp;
