import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconAssignment = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
}: IconProps) => {
  return (
    <SvgIcon
      id="organized-icon-assignment"
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
          id="mask0_2513_2502"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2513_2502)">
          <path
            d="M5.3077 20.5004C4.80257 20.5004 4.375 20.3254 4.025 19.9754C3.675 19.6254 3.5 19.1979 3.5 18.6927V5.30819C3.5 4.80306 3.675 4.37549 4.025 4.02549C4.375 3.67549 4.80257 3.50049 5.3077 3.50049H9.7577C9.83718 2.93896 10.0853 2.46524 10.5019 2.07934C10.9186 1.69344 11.4179 1.50049 12 1.50049C12.582 1.50049 13.0814 1.69344 13.498 2.07934C13.9147 2.46524 14.1628 2.93896 14.2423 3.50049H18.6923C19.1974 3.50049 19.625 3.67549 19.975 4.02549C20.325 4.37549 20.5 4.80306 20.5 5.30819V18.6927C20.5 19.1979 20.325 19.6254 19.975 19.9754C19.625 20.3254 19.1974 20.5004 18.6923 20.5004H5.3077ZM12 4.34661C12.2166 4.34661 12.3958 4.27578 12.5375 4.13411C12.6791 3.99245 12.75 3.81328 12.75 3.59661C12.75 3.37995 12.6791 3.20078 12.5375 3.05911C12.3958 2.91745 12.2166 2.84661 12 2.84661C11.7833 2.84661 11.6041 2.91745 11.4625 3.05911C11.3208 3.20078 11.25 3.37995 11.25 3.59661C11.25 3.81328 11.3208 3.99245 11.4625 4.13411C11.6041 4.27578 11.7833 4.34661 12 4.34661ZM4.99997 18.0428C5.89998 17.1595 6.94581 16.4636 8.13748 15.9553C9.32914 15.447 10.6166 15.1928 12 15.1928C13.3833 15.1928 14.6708 15.447 15.8625 15.9553C17.0541 16.4636 18.1 17.1595 19 18.0428V5.30819C19 5.23126 18.9679 5.16073 18.9038 5.09661C18.8397 5.03251 18.7692 5.00046 18.6923 5.00046H5.3077C5.23077 5.00046 5.16024 5.03251 5.09612 5.09661C5.03202 5.16073 4.99997 5.23126 4.99997 5.30819V18.0428ZM12 13.0389C12.9025 13.0389 13.6698 12.7229 14.3019 12.0909C14.9339 11.4588 15.25 10.6915 15.25 9.78894C15.25 8.88639 14.9339 8.11909 14.3019 7.48704C13.6698 6.85499 12.9025 6.53896 12 6.53896C11.0974 6.53896 10.3301 6.85499 9.69808 7.48704C9.06603 8.11909 8.75 8.88639 8.75 9.78894C8.75 10.6915 9.06603 11.4588 9.69808 12.0909C10.3301 12.7229 11.0974 13.0389 12 13.0389ZM6.44225 19.0005H17.5577V18.7889C16.768 18.0838 15.9016 17.5581 14.9587 17.212C14.0157 16.8658 13.0295 16.6927 12 16.6927C10.9833 16.6927 10.0019 16.8642 9.05573 17.2072C8.10956 17.5501 7.2384 18.071 6.44225 18.7697V19.0005ZM12 11.539C11.5192 11.539 11.1073 11.3675 10.7644 11.0245C10.4214 10.6816 10.25 10.2697 10.25 9.78894C10.25 9.30817 10.4214 8.89632 10.7644 8.55337C11.1073 8.21042 11.5192 8.03894 12 8.03894C12.4807 8.03894 12.8926 8.21042 13.2356 8.55337C13.5785 8.89632 13.75 9.30817 13.75 9.78894C13.75 10.2697 13.5785 10.6816 13.2356 11.0245C12.8926 11.3675 12.4807 11.539 12 11.539Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconAssignment;