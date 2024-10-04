import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconHeatmap = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-heatmap ${className}`}
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
          id="mask0_4944_2978240"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4944_2978240)">
          <path
            d="M5.99997 13.0002C5.99997 14.0079 6.24068 14.9458 6.7221 15.8137C7.20352 16.6817 7.86539 17.3817 8.70773 17.9137C8.63336 17.7727 8.58015 17.632 8.5481 17.4916C8.51603 17.3512 8.5 17.2041 8.5 17.0502C8.5 16.5874 8.58878 16.1515 8.76635 15.7426C8.94392 15.3336 9.19872 14.9631 9.53077 14.631L12 12.2022L14.4788 14.631C14.8109 14.9631 15.064 15.3336 15.2384 15.7426C15.4128 16.1515 15.5 16.5874 15.5 17.0502C15.5 17.2041 15.4839 17.3512 15.4518 17.4916C15.4198 17.632 15.3666 17.7727 15.2922 17.9137C16.1346 17.3817 16.7964 16.6817 17.2779 15.8137C17.7593 14.9458 18 14.0079 18 13.0002C18 12.1669 17.8458 11.3794 17.5375 10.6377C17.2291 9.89607 16.7833 9.23357 16.2 8.65023C15.8666 8.8669 15.5166 9.0294 15.15 9.13773C14.7833 9.24607 14.4083 9.30023 14.025 9.30023C12.9852 9.30023 12.0862 8.95857 11.3278 8.27523C10.5695 7.5919 10.1352 6.74382 10.025 5.73101C9.37497 6.27459 8.79997 6.84222 8.29997 7.43388C7.79997 8.02555 7.37914 8.62876 7.03747 9.24351C6.69581 9.85824 6.43747 10.4823 6.26247 11.1156C6.08747 11.7489 5.99997 12.3771 5.99997 13.0002ZM12 14.3002L10.575 15.7002C10.3916 15.8836 10.25 16.0919 10.15 16.3252C10.05 16.5586 9.99997 16.8002 9.99997 17.0502C9.99997 17.5836 10.1958 18.0419 10.5875 18.4252C10.9791 18.8086 11.45 19.0002 12 19.0002C12.55 19.0002 13.0208 18.8086 13.4125 18.4252C13.8041 18.0419 14 17.5836 14 17.0502C14 16.7836 13.95 16.5377 13.85 16.3127C13.75 16.0877 13.6083 15.8836 13.425 15.7002L12 14.3002ZM11.4999 2.89453V5.30023C11.4999 6.00793 11.7439 6.60153 12.2317 7.08103C12.7195 7.56051 13.3173 7.80026 14.025 7.80026C14.3314 7.80026 14.6234 7.74257 14.901 7.62718C15.1785 7.5118 15.4333 7.34193 15.6654 7.11758L16.1058 6.67336C17.1596 7.34771 17.9887 8.24738 18.5932 9.37238C19.1977 10.4974 19.5 11.7066 19.5 13.0002C19.5 15.0925 18.773 16.8656 17.3192 18.3194C15.8653 19.7733 14.0923 20.5002 12 20.5002C9.90767 20.5002 8.13461 19.7733 6.68077 18.3194C5.22692 16.8656 4.5 15.0925 4.5 13.0002C4.5 11.0682 5.12948 9.20924 6.38845 7.42336C7.64742 5.63746 9.35125 4.12785 11.4999 2.89453Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconHeatmap;
