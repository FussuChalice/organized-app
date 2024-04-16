import { Box } from '@mui/material';
import { IconAdd } from '@components/icons';
import Button from '@components/button';
import Typography from '@components/typography';
import { useAppTranslation } from '@hooks/index';
import usePrivileges from './usePrivileges';
import PrivilegeItem from './components/privilege_item';

const Privileges = () => {
  const { t } = useAppTranslation();

  const {
    activeHistory,
    handleAddHistory,
    handleDeleteHistory,
    handleEndDateChange,
    handleStartDateChange,
    handlePrivilegeChange,
  } = usePrivileges();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        borderBottom: '1px solid var(--accent-200)',
        paddingBottom: '16px',
      }}
    >
      <Typography className="h2">{t('tr_privileges')}</Typography>

      <Box sx={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {activeHistory.length === 0 && (
          <Button
            variant="small"
            startIcon={<IconAdd />}
            onClick={handleAddHistory}
            sx={{ height: '32px', minHeight: '32px !important', alignSelf: 'flex-start' }}
          >
            {t('tr_add')}
          </Button>
        )}

        {activeHistory.map((history, index) => (
          <PrivilegeItem
            key={history.id}
            id={history.id}
            privilege={history.privilege.value}
            startDate={history.startDate.value}
            endDate={history.endDate.value}
            isLast={index === activeHistory.length - 1}
            onAdd={handleAddHistory}
            onDelete={handleDeleteHistory}
            onStartDateChange={handleStartDateChange}
            onEndDateChange={handleEndDateChange}
            onPrivilegeChange={handlePrivilegeChange}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Privileges;