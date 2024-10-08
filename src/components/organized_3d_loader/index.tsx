import animationData from '@assets/lotties/organized-3d-loader.json';
import { Box } from '@mui/material';
import Lottie from 'react-lottie';

const Organized3DLoader = ({
  width = 72,
  height = 72,
  centered = true,
}: {
  width?: number;
  height?: number;
  centered?: boolean;
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return centered ? (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          margin: 'auto',
        }}
      >
        <Lottie options={defaultOptions} width={width} height={height} />
      </Box>
    </Box>
  ) : (
    <Lottie options={defaultOptions} width={width} height={height} />
  );
};

export default Organized3DLoader;
