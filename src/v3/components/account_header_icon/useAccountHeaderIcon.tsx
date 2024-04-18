import { useRecoilValue } from 'recoil';
import { congAccountConnectedState, isAppLoadState } from '@states/app';
import { avatarUrlState } from '@states/settings';

/**
 * Custom hook for managing the user's avatar and offline status.
 * @returns {Object} Object containing userAvatar and isOffline properties
 */
export const useAccountHeaderIcon = () => {
  const userAvatar = useRecoilValue(avatarUrlState);
  const congAccountConnected = useRecoilValue(congAccountConnectedState);
  const isAppLoad = useRecoilValue(isAppLoadState);

  const isOffline = isAppLoad ? false : !congAccountConnected;

  return { userAvatar, isOffline };
};
