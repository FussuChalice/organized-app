import useAppTranslation from '@hooks/useAppTranslation';
import { EventType, EventValues, YearlyEventsType } from '../index.types';
import { HorizontalFlex, VerticalFlex } from '../index.styles';
import InfoTip from '@components/info_tip';
import { IconAddMonth, IconInfo } from '@components/icons';
import AddEvent from '../add_event';
import { Box } from '@mui/material';
import IconButton from '@components/icon_button';
import EventIcon from '../EventIcon';
import Button from '@components/button';
import useEventList from './useEventList';
import { EventListProps } from './index.types';
import EventDate from '../event_date';
import Typography from '@components/typography';

const EventList = ({ data, isAdmin }: EventListProps) => {
  const { t } = useAppTranslation();
  const { handleEdit, handleEditDone, handleCancelEdit, isEditing, editData } =
    useEventList();

  return (
    <VerticalFlex>
      {data.length === 0 && (
        <InfoTip
          isBig={false}
          icon={<IconInfo />}
          color="white"
          text={t('tr_upcomingEventsEmpty')}
        />
      )}
      <VerticalFlex sx={{ gap: '32px' }}>
        {data.map((yearlyEvent, index) => (
          <YearlyEvent
            isAdmin={isAdmin}
            yearlyEvent={yearlyEvent}
            handleEdit={handleEdit}
            key={index}
          />
        ))}
      </VerticalFlex>
      {isAdmin && isEditing && (
        <AddEvent
          data={editData}
          titleTextKey="tr_editUpcomingEvent"
          onDone={handleEditDone}
          onCancel={handleCancelEdit}
        />
      )}
    </VerticalFlex>
  );
};

const YearlyEvent = ({
  yearlyEvent,
  handleEdit,
  isAdmin,
}: {
  yearlyEvent: YearlyEventsType;
  handleEdit: (event: EventValues[]) => void;
  isAdmin: boolean;
}) => {
  return (
    <VerticalFlex>
      <Typography className="h4" color="var(--accent-400)">
        {yearlyEvent.year}
      </Typography>
      {yearlyEvent.dates.map((eventDate, index) => (
        <EventDate
          isAdmin={isAdmin}
          eventDate={eventDate}
          handleEdit={handleEdit}
          key={index}
        />
      ))}
    </VerticalFlex>
  );
};

const Event = ({ event }: { event: EventType }) => {
  const { t } = useAppTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        '& + &': {
          borderTop: '1px solid var(--accent-200)',
          paddingTop: '16px',
        },
        '&:hover #add-calendar-btn': {
          opacity: '1',
        },
      }}
    >
      <Typography
        className="h4"
        color="var(--accent-dark)"
        style={{
          backgroundColor: 'var(--accent-150)',
          padding: '0px 8px',
          borderRadius: 'var(--radius-s)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {event.time}
      </Typography>
      <VerticalFlex
        sx={{ gap: '4px', flexGrow: '1', justifyContent: 'center' }}
      >
        <HorizontalFlex sx={{ gap: '4px', alignItems: 'center' }}>
          <EventIcon type={event.type} color="var(--black)" />
          <span className="h4" style={{ color: 'var(--black)' }}>
            {event.title ?? t(event.type)}
          </span>
        </HorizontalFlex>
        {event.description && (
          <span className="body-regular" style={{ color: 'var(--grey-400)' }}>
            {event.description}
          </span>
        )}
      </VerticalFlex>
      <Box
        id="add-calendar-btn"
        sx={{
          flexShrink: '0',
          alignSelf: 'center',
          ['@media (hover: hover)']: {
            opacity: '0',
            transition: 'opacity 0.3s',
          },
        }}
      >
        <Button
          sx={{
            minHeight: '0px',
            '@media (hover: none)': {
              display: 'none',
            },
          }}
          variant="small"
          startIcon={<IconAddMonth />}
        >
          {t('tr_addToCalendar')}
        </Button>
        <IconButton
          sx={{
            display: 'none',
            ['@media (hover: none)']: {
              display: 'block',
            },
          }}
        >
          <IconAddMonth color="var(--accent-main)" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default EventList;
