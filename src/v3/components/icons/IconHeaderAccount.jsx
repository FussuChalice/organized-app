import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconHeaderAccount = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-header-account" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM16 6.4C19.088 6.4 21.6 8.912 21.6 12C21.6 15.088 19.088 17.6 16 17.6C12.912 17.6 10.4 15.088 10.4 12C10.4 8.912 12.912 6.4 16 6.4ZM16 28.8C12.752 28.8 8.912 27.488 6.176 24.192C8.88 22.08 12.288 20.8 16 20.8C19.712 20.8 23.12 22.08 25.824 24.192C23.088 27.488 19.248 28.8 16 28.8Z"
          fill={color}
        />
      </svg>
    </SvgIcon>
  );
};

IconHeaderAccount.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconHeaderAccount;
