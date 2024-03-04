import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconImgDelete = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-img-delete" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2583_35275"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2583_35275)">
          <path
            d="M5.11529 21.0004C4.61818 21.0004 4.19262 20.8234 3.83862 20.4694C3.48462 20.1154 3.30762 19.6899 3.30762 19.1927V5.80819C3.30762 5.31107 3.48462 4.88551 3.83862 4.53151C4.19262 4.1775 4.61818 4.00049 5.11529 4.00049H10V5.50046H5.11529C5.02554 5.50046 4.95182 5.52931 4.89412 5.58701C4.83642 5.64471 4.80757 5.71844 4.80757 5.80819V19.1927C4.80757 19.2825 4.83642 19.3562 4.89412 19.4139C4.95182 19.4716 5.02554 19.5005 5.11529 19.5005H18.4999C18.5896 19.5005 18.6633 19.4716 18.721 19.4139C18.7787 19.3562 18.8076 19.2825 18.8076 19.1927V13.5005H20.3075V19.1927C20.3075 19.6899 20.1305 20.1154 19.7765 20.4694C19.4225 20.8234 18.997 21.0004 18.4999 21.0004H5.11529ZM6.55762 17.2504H17.1344L13.846 12.8659L11.0383 16.5197L9.03837 13.962L6.55762 17.2504Z"
            fill={color}
          />
          <mask
            id="mask1_2583_35275"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="11"
            y="2"
            width="10"
            height="11"
          >
            <rect x="11" y="2.50049" width="10" height="10" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask1_2583_35275)">
            <path
              d="M13.8022 11.6043C13.4342 11.6043 13.1234 11.4776 12.87 11.2241C12.6165 10.9707 12.4897 10.6599 12.4897 10.2918V5.11475H11.8335V3.80225H14.5106V3.146H17.4689V3.80225H20.1668V5.11475H19.5106V10.2918C19.5106 10.6599 19.3838 10.9707 19.1304 11.2241C18.8769 11.4776 18.5661 11.6043 18.1981 11.6043H13.8022ZM18.1981 5.11475H13.8022V10.2918H18.1981V5.11475ZM14.5627 9.57308H15.6356V5.82308H14.5627V9.57308ZM16.3647 9.57308H17.4377V5.82308H16.3647V9.57308Z"
              fill={color}
            />
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconImgDelete;
