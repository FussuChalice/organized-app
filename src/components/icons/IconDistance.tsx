import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconDistance = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-distance ${className}`}
      sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
    >
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_13644_25295"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_13644_25295)">
          <path
            d="M12 22.25C10.3102 22.25 8.92948 21.9948 7.85768 21.4846C6.78589 20.9743 6.25 20.3128 6.25 19.5C6.25 19.0128 6.4548 18.5798 6.8644 18.201C7.27402 17.8221 7.83972 17.5109 8.5615 17.2673L8.99225 18.6961C8.67687 18.8115 8.41212 18.9413 8.19802 19.0856C7.98392 19.2298 7.84483 19.3679 7.78073 19.5C7.94611 19.8564 8.43809 20.1538 9.25668 20.3923C10.0753 20.6308 10.9897 20.75 12 20.75C13.0038 20.75 13.9192 20.6308 14.7462 20.3923C15.5731 20.1538 16.0692 19.8564 16.2346 19.5C16.1705 19.3679 16.0314 19.2314 15.8173 19.0904C15.6032 18.9493 15.3385 18.8179 15.0231 18.6961L15.4635 17.2673C16.1852 17.5109 16.7468 17.8221 17.148 18.201C17.5493 18.5798 17.75 19.0128 17.75 19.5C17.75 20.3128 17.2141 20.9743 16.1423 21.4846C15.0705 21.9948 13.6897 22.25 12 22.25ZM12 16.3443C12.3 15.775 12.6359 15.2228 13.0077 14.6875C13.3795 14.1522 13.7526 13.641 14.1269 13.1538C14.7564 12.3346 15.2593 11.5929 15.6356 10.9288C16.0119 10.2647 16.2 9.43844 16.2 8.44998C16.2 7.28588 15.791 6.29484 14.9731 5.47688C14.1551 4.65893 13.1641 4.24995 12 4.24995C10.8359 4.24995 9.84484 4.65893 9.02687 5.47688C8.20892 6.29484 7.79995 7.28588 7.79995 8.44998C7.79995 9.43844 7.9897 10.2647 8.3692 10.9288C8.74868 11.5929 9.24996 12.3346 9.87302 13.1538C10.2474 13.641 10.6205 14.1522 10.9923 14.6875C11.3641 15.2228 11.7 15.775 12 16.3443ZM12 18.9423C11.8359 18.9423 11.6852 18.8881 11.548 18.7798C11.4109 18.6714 11.309 18.532 11.2423 18.3615C10.8333 17.2422 10.3468 16.3035 9.78268 15.5452C9.21858 14.7868 8.67434 14.0602 8.14997 13.3654C7.64229 12.6705 7.20704 11.9506 6.84422 11.2057C6.48141 10.4609 6.3 9.54228 6.3 8.44998C6.3 6.85383 6.85096 5.50479 7.95287 4.40288C9.05479 3.30096 10.4038 2.75 12 2.75C13.5961 2.75 14.9452 3.30096 16.0471 4.40288C17.149 5.50479 17.7 6.85383 17.7 8.44998C17.7 9.54228 17.5227 10.4609 17.1682 11.2057C16.8137 11.9506 16.3743 12.6705 15.85 13.3654C15.3423 14.0602 14.8022 14.7868 14.2298 15.5452C13.6573 16.3035 13.1666 17.2422 12.7576 18.3615C12.691 18.532 12.5891 18.6714 12.4519 18.7798C12.3147 18.8881 12.1641 18.9423 12 18.9423ZM12 10.2769C12.5064 10.2769 12.9375 10.099 13.2932 9.74323C13.649 9.38746 13.8269 8.95638 13.8269 8.44998C13.8269 7.94358 13.649 7.51249 13.2932 7.15673C12.9375 6.80096 12.5064 6.62308 12 6.62308C11.4936 6.62308 11.0625 6.80096 10.7067 7.15673C10.351 7.51249 10.1731 7.94358 10.1731 8.44998C10.1731 8.95638 10.351 9.38746 10.7067 9.74323C11.0625 10.099 11.4936 10.2769 12 10.2769Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconDistance;
