import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { congAccountConnectedState } from '@states/app';
import { publicTalksLocaleState } from '@states/publicTalks';
import { displaySnackNotification } from '@services/recoil/app';
import { getMessageByCode } from '@services/i18n/translation';
import { useAppTranslation } from '@hooks/index';
import { apiFetchPublicTalks } from '@services/api/sources';
import { dbAppSettingsUpdate } from '@services/dexie/settings';
import { PublicTalksViewType } from '@definition/sources';
import { dbPublicTalksReset } from '@services/dexie/publicTalks';

const usePublicTalksList = () => {
  const { t } = useAppTranslation();

  const isConnected = useRecoilValue(congAccountConnectedState);
  const talksList = useRecoilValue(publicTalksLocaleState);

  const [isFetching, setIsFetching] = useState(false);
  const [currentView, setCurrentView] = useState<PublicTalksViewType>('list');

  const handleSyncTalks = async () => {
    try {
      setIsFetching(true);

      const { data, status } = await apiFetchPublicTalks();

      if (status !== 200) {
        setIsFetching(false);

        await displaySnackNotification({
          header: t('tr_errorTitle'),
          message: getMessageByCode(data.message),
          severity: 'error',
        });

        return;
      }

      await dbPublicTalksReset(data);
      await dbAppSettingsUpdate({ public_talk_sync: new Date().toISOString() });
      setIsFetching(false);
    } catch (error) {
      console.error(error);
      setIsFetching(false);

      await displaySnackNotification({
        header: t('tr_errorTitle'),
        message: getMessageByCode(error.message),
        severity: 'error',
      });
    }
  };

  const handleToggleView = () => {
    setCurrentView((prev) => {
      if (prev === 'list') return 'table';
      if (prev === 'table') return 'list';
    });
  };

  return { isConnected, talksList, isFetching, handleSyncTalks, handleToggleView, currentView };
};

export default usePublicTalksList;