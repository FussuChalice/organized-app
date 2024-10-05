import { useAppTranslation } from '@hooks/index';
import useTimeAway from './useTimeAway';
import TimeAwayEditor from '../time_away_editor';

const PersonTimeAway = () => {
  const { t } = useAppTranslation();

  const {
    handleAddTimeAway,
    activeTimeAway,
    handleCommentsChange,
    handleDeleteTimeAway,
    handleEndDateChange,
    handleStartDateChange,
  } = useTimeAway();

  return (
    <TimeAwayEditor
      desc={t('tr_personTimeAwayDesc')}
      items={activeTimeAway}
      onAdd={handleAddTimeAway}
      onCommentsChange={handleCommentsChange}
      onDelete={handleDeleteTimeAway}
      onEndDateChange={handleEndDateChange}
      onStartDateChange={handleStartDateChange}
    />
  );
};

export default PersonTimeAway;
