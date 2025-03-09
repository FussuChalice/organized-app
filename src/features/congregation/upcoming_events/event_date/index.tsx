import { IconButton } from '@mui/material';
import { HorizontalFlex, StyledCardBox } from '../index.styles';
import { EventDateProps } from './index.types';
import useEventDate from './useEventDate';
import { IconEdit } from '@components/icons';
import Typography from '@components/typography';

const EventDate = (props: EventDateProps) => {
  const { editEvent, getFormattedDate } = useEventDate(props);

  return (
    <StyledCardBox>
      <HorizontalFlex
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography className="h1" color="var(--black)">
          {getFormattedDate}
        </Typography>
        {props.isAdmin && (
          <IconButton onClick={editEvent} sx={{ padding: 0 }}>
            <IconEdit color={'var(--accent-main)'} />
          </IconButton>
        )}
      </HorizontalFlex>
      {props.eventDate.events.map((event, index) => (
        <Event event={event} key={index} />
      ))}
    </StyledCardBox>
  );
};

export default EventDate;
