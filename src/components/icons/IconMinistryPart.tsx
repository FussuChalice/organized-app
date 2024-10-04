import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  className?: string;
};

const IconMinistryPart = ({
  color = '#222222',
  width = 24,
  height = 24,
  sx = {},
  className,
}: IconProps) => {
  return (
    <SvgIcon
      className={`organized-icon-ministry-part ${className}`}
      sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7436 0.623312C16.7436 0.280145 16.4655 0.00195312 16.1223 0.00195312C15.7791 0.00195312 15.5009 0.280145 15.5009 0.623312V4.97283C15.5009 5.31599 15.7791 5.59419 16.1223 5.59419C16.4655 5.59419 16.7436 5.31599 16.7436 4.97283V0.623312ZM23.0602 18.9882C23.5261 18.7018 24.2358 18.9407 24.2943 19.5983C24.3936 20.7165 24.0579 22.8148 22.2421 24.9464C20.8384 26.5943 19.1412 27.3032 17.8476 27.5519L17.8125 27.5587C17.4472 27.629 17.1066 27.6945 16.7439 27.7288V29.0003V31.3788C16.7439 31.722 16.4657 32.0002 16.1226 32.0002C15.7794 32.0002 15.5012 31.722 15.5012 31.3788V29.0003V27.7491C15.2683 27.7391 15.0192 27.7143 14.7133 27.6555C13.4197 27.4067 11.7225 26.6978 10.3188 25.0499C8.50302 22.9184 8.1673 20.82 8.26665 19.7019C8.32508 19.0442 9.03476 18.8054 9.50074 19.0918C11.0788 20.0616 13.9976 21.8682 14.5704 22.2773C14.9161 22.5243 15.1201 22.877 15.2436 23.2371C15.3661 23.5941 15.423 23.9967 15.4505 24.401C15.4865 24.9288 15.4748 25.5483 15.4633 26.1614C15.4611 26.2755 15.459 26.3894 15.4571 26.5025C15.6301 26.5136 15.7985 26.5128 16.01 26.5118C16.0769 26.5114 16.1481 26.5111 16.225 26.5111C16.5251 26.5111 16.7923 26.4793 17.1042 26.426C17.1023 26.3041 17.1 26.1811 17.0977 26.0578C17.0861 25.4448 17.0744 24.8252 17.1104 24.2974C17.1379 23.8931 17.1948 23.4905 17.3173 23.1336C17.4409 22.7735 17.6448 22.4207 17.9905 22.1737C18.5633 21.7646 21.4821 19.958 23.0602 18.9882ZM18.3428 26.1425C19.2814 25.8364 20.3619 25.2372 21.2961 24.1405C22.4994 22.728 22.9275 21.3782 23.0365 20.4621C21.4062 21.4675 19.1723 22.8568 18.7128 23.185C18.6443 23.2339 18.5634 23.331 18.4928 23.5368C18.4211 23.7458 18.3745 24.0255 18.3502 24.3818C18.3178 24.858 18.328 25.3804 18.3392 25.9555L18.3428 26.1425ZM14.2182 26.2461L14.2217 26.059C14.2329 25.484 14.2431 24.9615 14.2107 24.4854C14.1864 24.129 14.1398 23.8494 14.0681 23.6404C13.9975 23.4345 13.9166 23.3375 13.8481 23.2886C13.3886 22.9604 11.1547 21.5711 9.52441 20.5657C9.63343 21.4817 10.0615 22.8315 11.2648 24.2441C12.199 25.3408 13.2795 25.94 14.2182 26.2461ZM13.4289 0.621094C13.7721 0.621094 14.0503 0.899286 14.0503 1.24245V3.31365C14.0503 3.65682 13.7721 3.93501 13.4289 3.93501C13.0858 3.93501 12.8076 3.65682 12.8076 3.31365V1.24245C12.8076 0.899286 13.0858 0.621094 13.4289 0.621094ZM19.436 1.24245C19.436 0.899286 19.1578 0.621094 18.8147 0.621094C18.4715 0.621094 18.1933 0.899286 18.1933 1.24245V3.31365C18.1933 3.65682 18.4715 3.93501 18.8147 3.93501C19.1578 3.93501 19.436 3.65682 19.436 3.31365V1.24245ZM9.33197 4.45558V6.21996C9.33197 7.0397 9.74343 7.80472 10.4274 8.25661L14.1554 10.7197L14.0654 8.74114C14.0296 7.95382 13.6159 7.23222 12.9546 6.80357L9.33197 4.45558ZM8.00049 3.43488C8.00049 2.81908 8.68287 2.44817 9.19963 2.78311L13.6788 5.68625C14.7009 6.34872 15.3402 7.46392 15.3955 8.68068L15.535 11.7483C15.5638 12.3826 14.8607 12.7816 14.3309 12.4316L9.69339 9.36752C8.63638 8.66914 8.00049 7.48684 8.00049 6.21996V3.43488ZM18.0302 17.0482V18.8125L21.6528 16.4645C22.3142 16.0359 22.7279 15.3143 22.7637 14.527L22.8536 12.5484L19.1256 15.0115C18.4417 15.4634 18.0302 16.2284 18.0302 17.0482ZM17.8979 20.485C17.3811 20.8199 16.6987 20.449 16.6987 19.8332V17.0482C16.6987 15.7813 17.3346 14.599 18.3916 13.9006L23.0292 10.8365C23.5589 10.4865 24.2621 10.8855 24.2332 11.5198L24.0938 14.5874C24.0385 15.8042 23.3991 16.9194 22.377 17.5819L17.8979 20.485ZM9.331 12.4107V14.175C9.331 14.9948 9.74246 15.7598 10.4264 16.2117L14.1544 18.6748L14.0645 16.6962C14.0287 15.9089 13.615 15.1873 12.9536 14.7586L9.331 12.4107ZM7.99951 11.39C7.99951 10.7742 8.68189 10.4032 9.19865 10.7382L13.6778 13.6413C14.6999 14.3038 15.3393 15.419 15.3946 16.6358L15.534 19.7034C15.5628 20.3377 14.8597 20.7367 14.3299 20.3867L9.69241 17.3226C8.6354 16.6242 7.99951 15.4419 7.99951 14.175V11.39ZM18.0302 9.09308V10.8574L21.6528 8.50947C22.3142 8.08081 22.7279 7.35921 22.7637 6.57189L22.8536 4.59328L19.1256 7.05642C18.4417 7.50831 18.0302 8.27333 18.0302 9.09308ZM17.8979 12.5299C17.3811 12.8649 16.6987 12.494 16.6987 11.8782V9.09308C16.6987 7.82619 17.3346 6.64389 18.3916 5.94551L23.0292 2.88143C23.5589 2.5314 24.2621 2.93042 24.2332 3.56473L24.0938 6.63235C24.0385 7.84911 23.3991 8.96431 22.377 9.62678L17.8979 12.5299Z"
          fill={color}
        />
      </svg>
    </SvgIcon>
  );
};

export default IconMinistryPart;
