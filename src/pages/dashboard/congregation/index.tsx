import { ListItem } from '@mui/material';
import { DashboardCard, DashboardMenu } from '@features/index';
import {
  IconGroups,
  IconManageAccess,
  IconSettings,
  IconSynced,
} from '@icons/index';
import { useAppTranslation, useCurrentUser } from '@hooks/index';
import useCongregation from './useCongregation';

const CongregationCard = () => {
  const { t } = useAppTranslation();

  const { isPublisher, isAdmin, isAppointed } = useCurrentUser();

  const { secondaryText, handleManualSync, isConnected, isUserAdmin } =
    useCongregation();

  return (
    <DashboardCard header={t('tr_congregation')}>
      {(isAdmin || isPublisher) && (
        <ListItem disablePadding>
          <DashboardMenu
            icon={<IconGroups color="var(--black)" />}
            primaryText={t('tr_fieldServiceGroups')}
            path="/field-service-groups"
          />
        </ListItem>
      )}

      {isConnected && isUserAdmin && (
        <ListItem disablePadding>
          <DashboardMenu
            icon={<IconManageAccess color="var(--black)" />}
            primaryText={t('tr_manageAccess')}
            path="/manage-access"
          />
        </ListItem>
      )}

      {(isAdmin || isAppointed) && (
        <ListItem disablePadding>
          <DashboardMenu
            path="/congregation-settings"
            icon={<IconSettings color="var(--black)" />}
            primaryText={t('tr_congregationSettings')}
          />
        </ListItem>
      )}

      {isConnected && (
        <ListItem disablePadding>
          <DashboardMenu
            icon={
              <IconSynced
                color="var(--black)"
                className="organized-sync-icon"
              />
            }
            primaryText={t('tr_syncAppData')}
            secondaryText={secondaryText}
            onClick={handleManualSync}
          />
        </ListItem>
      )}
    </DashboardCard>
  );
};

export default CongregationCard;
