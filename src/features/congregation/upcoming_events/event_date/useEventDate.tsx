import { formatDate, parse } from 'date-fns';
import { EventDateProps } from './index.types';
import useAppTranslation from '@hooks/useAppTranslation';

const useEventDate = ({ handleEdit, eventDate }: EventDateProps) => {
  const { t } = useAppTranslation();

  const editEvent = () => {
    handleEdit(
      eventDate.events.map((event) => ({
        date: new Date(eventDate.date),
        time: parse(event.time, 'HH:mm', new Date()),
        type: event.type,
        custom: event.title,
        description: event.description,
      }))
    );
  };

  const getFormattedDate = formatDate(
    new Date(eventDate.date),
    t('tr_longDateFormat')
  );

  return {
    editEvent,
    getFormattedDate,
  };
};

export default useEventDate;
