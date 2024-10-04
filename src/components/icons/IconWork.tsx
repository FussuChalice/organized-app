import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconWork = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-work ${className}`}
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
          id="mask0_3258_161976"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.000488281" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3258_161976)">
          <path
            d="M18.6574 21.4757C18.5369 21.4757 18.4248 21.4564 18.3209 21.418C18.2171 21.3795 18.1184 21.3135 18.0248 21.2199L12.9824 16.1872C12.8889 16.0936 12.8228 15.9949 12.7844 15.8911C12.7459 15.7872 12.7267 15.675 12.7267 15.5545C12.7267 15.434 12.7459 15.3218 12.7844 15.218C12.8228 15.1141 12.8889 15.0154 12.9824 14.9218L14.8767 13.0276C14.9703 12.934 15.069 12.868 15.1728 12.8296C15.2767 12.7911 15.3889 12.7719 15.5094 12.7719C15.6299 12.7719 15.742 12.7911 15.8459 12.8296C15.9497 12.868 16.0485 12.934 16.142 13.0276L21.1843 18.0699C21.2779 18.1635 21.344 18.2622 21.3824 18.3661C21.4209 18.4699 21.4401 18.5821 21.4401 18.7026C21.4401 18.8231 21.4209 18.9353 21.3824 19.0392C21.344 19.143 21.2779 19.2417 21.1843 19.3353L19.2901 21.2199C19.1965 21.3135 19.0978 21.3795 18.994 21.418C18.8901 21.4564 18.778 21.4757 18.6574 21.4757ZM18.6574 19.7642L19.719 18.7026L15.5247 14.5084L14.4632 15.5699L18.6574 19.7642ZM5.31709 21.4911C5.19658 21.4911 5.08183 21.4693 4.97287 21.4257C4.86388 21.3821 4.7626 21.3135 4.66902 21.2199L2.79019 19.3507C2.69659 19.2571 2.628 19.1558 2.58442 19.0469C2.54083 18.9379 2.51904 18.8231 2.51904 18.7026C2.51904 18.5821 2.54083 18.4683 2.58442 18.3613C2.628 18.2542 2.69659 18.1539 2.79019 18.0603L8.01327 12.8372H10.119L10.9306 12.0257L6.74787 7.843H5.32287L2.54789 5.06803L5.02672 2.5892L7.80169 5.36418V6.78918L11.9844 10.9719L14.9421 8.01418L13.4824 6.55455L14.7478 5.28918H12.2017L11.6459 4.74303L14.8401 1.54883L15.3863 2.09495V4.6507L16.6516 3.38533L20.4132 7.12765C20.6773 7.38535 20.8763 7.67895 21.0103 8.00843C21.1443 8.33791 21.2113 8.68663 21.2113 9.05458C21.2113 9.37765 21.1555 9.68885 21.044 9.9882C20.9324 10.2876 20.7703 10.5597 20.5574 10.8046L18.4709 8.718L17.0613 10.1276L16.0017 9.068L11.1632 13.9065V16.0161L5.94977 21.2199C5.85618 21.3135 5.75747 21.3821 5.65362 21.4257C5.54978 21.4693 5.43761 21.4911 5.31709 21.4911ZM5.31709 19.7546L9.90364 15.168V14.1064H8.84209L4.25552 18.693L5.31709 19.7546ZM5.31709 19.7546L4.25552 18.693L4.79399 19.2161L5.31709 19.7546Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconWork;
