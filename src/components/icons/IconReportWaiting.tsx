import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconReportWaiting = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-report-waiting ${className}`}
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
          id="mask0_13762_206113"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_13762_206113)">
          <path
            d="M4.57679 17.9728C4.01396 17.255 3.55846 16.4749 3.21029 15.6326C2.86229 14.7902 2.63188 13.9126 2.51904 12.9998H4.04979C4.14979 13.7165 4.33313 14.404 4.59979 15.0623C4.86646 15.7206 5.21646 16.3331 5.64979 16.8998L4.57679 17.9728ZM2.51904 10.9998C2.63954 10.087 2.87196 9.20939 3.21629 8.36705C3.56046 7.52472 4.02038 6.75105 4.59604 6.04605L5.64979 7.0998C5.21646 7.66647 4.86646 8.27897 4.59979 8.9373C4.33313 9.59564 4.14979 10.2831 4.04979 10.9998H2.51904ZM10.9498 21.4498C10.037 21.3433 9.16354 21.1154 8.32954 20.7661C7.49554 20.4167 6.71771 19.9626 5.99604 19.4036L7.04979 18.2998C7.63313 18.7331 8.24979 19.0915 8.89979 19.3748C9.54979 19.6581 10.2331 19.8498 10.9498 19.9498V21.4498ZM7.09979 5.68055L5.99604 4.59605C6.73438 4.03055 7.52471 3.57639 8.36704 3.23355C9.20938 2.89055 10.087 2.66264 10.9998 2.5498V4.0498C10.2831 4.1498 9.59563 4.33664 8.93729 4.6103C8.27896 4.88414 7.66646 5.24089 7.09979 5.68055ZM12.9498 21.4498V19.9498C13.6768 19.8498 14.3726 19.6655 15.0373 19.3968C15.702 19.1283 16.3228 18.7691 16.8998 18.3191L18.0035 19.4036C17.2652 19.9792 16.4707 20.436 15.62 20.7738C14.7694 21.1116 13.8793 21.337 12.9498 21.4498ZM16.9498 5.6998C16.3665 5.26647 15.7415 4.90814 15.0748 4.6248C14.4081 4.34147 13.7165 4.1498 12.9998 4.0498V2.5498C13.9126 2.6563 14.7927 2.88264 15.64 3.2288C16.4875 3.5748 17.2754 4.03055 18.0035 4.59605L16.9498 5.6998ZM19.4035 17.9536L18.3498 16.8998C18.7831 16.3331 19.1331 15.7206 19.3998 15.0623C19.6665 14.404 19.8498 13.7165 19.9498 12.9998H21.4805C21.36 13.9126 21.1276 14.7902 20.7833 15.6326C20.4391 16.4749 19.9792 17.2486 19.4035 17.9536ZM19.9498 10.9998C19.8498 10.2831 19.6665 9.59564 19.3998 8.9373C19.1331 8.27897 18.7831 7.66647 18.3498 7.0998L19.4228 6.02681C19.9856 6.74464 20.4411 7.52472 20.7893 8.36705C21.1373 9.20939 21.3677 10.087 21.4805 10.9998H19.9498Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconReportWaiting;
