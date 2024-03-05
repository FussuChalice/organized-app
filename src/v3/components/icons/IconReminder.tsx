import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconReminder = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-reminder" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2457_20207"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2457_20207)">
          <path
            d="M11.25 13.4043H12.7499V8.50046H11.25V13.4043ZM12 16.3081C12.2288 16.3081 12.4207 16.2307 12.5754 16.0759C12.7303 15.9211 12.8077 15.7293 12.8077 15.5005C12.8077 15.2716 12.7303 15.0798 12.5754 14.925C12.4207 14.7702 12.2288 14.6928 12 14.6928C11.7711 14.6928 11.5793 14.7702 11.4245 14.925C11.2697 15.0798 11.1923 15.2716 11.1923 15.5005C11.1923 15.7293 11.2697 15.9211 11.4245 16.0759C11.5793 16.2307 11.7711 16.3081 12 16.3081ZM4.5 19.3851V17.8851H6.3077V10.4235C6.3077 9.07867 6.72276 7.88957 7.55287 6.85624C8.38301 5.82291 9.44872 5.16201 10.75 4.87356V4.25049C10.75 3.90327 10.8714 3.60814 11.1143 3.36509C11.3571 3.12202 11.6519 3.00049 11.9988 3.00049C12.3457 3.00049 12.641 3.12202 12.8846 3.36509C13.1282 3.60814 13.25 3.90327 13.25 4.25049V4.87356C14.5512 5.16201 15.6169 5.82291 16.4471 6.85624C17.2772 7.88957 17.6922 9.07867 17.6922 10.4235V17.8851H19.5V19.3851H4.5ZM11.9983 22.1927C11.5007 22.1927 11.0753 22.0157 10.7221 21.6617C10.3689 21.3077 10.1923 20.8822 10.1923 20.3851H13.8077C13.8077 20.8838 13.6305 21.3097 13.2761 21.6629C12.9218 22.0161 12.4959 22.1927 11.9983 22.1927ZM7.80765 17.8851H16.1923V10.4235C16.1923 9.26584 15.783 8.2777 14.9644 7.45911C14.1458 6.64051 13.1577 6.23121 12 6.23121C10.8423 6.23121 9.85413 6.64051 9.03555 7.45911C8.21695 8.2777 7.80765 9.26584 7.80765 10.4235V17.8851Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconReminder;