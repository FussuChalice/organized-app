import useAppTranslation from '@hooks/useAppTranslation';
import { eventValue, EventValues } from '../index.types';
import { AddEventProps } from './index.types';
import useAddEvents from './useAddEvent';
import { HorizontalFlex, StyledCardBox, VerticalFlex } from '../index.styles';
import Button from '@components/button';
import { IconAdd, IconCheck, IconClose, IconDelete } from '@components/icons';
import DatePicker from '@components/date_picker';
import TimePicker from '@components/time_picker';
import Select from '@components/select';
import MenuItem from '@components/menuitem';
import EventIcon from '../EventIcon';
import TextField from '@components/textfield';

const options: eventValue[] = [
  'tr_circuitOverseerWeek',
  'tr_pioneerWeek',
  'tr_memorialWeek',
  'tr_conventionWeek',
  'tr_assemblyWeek',
  'tr_internationalConventionWeek',
  'tr_specialCampaignWeek',
  'tr_theocraticTrainingWeek',
  'tr_hallMaintenanceTrainingWeek',
  'tr_bethelTour',
  'tr_congregationTrip',
  'tr_specialProgram',
  'tr_publicWitnessing',
  'tr_kingdomInauguration',
  'tr_languageCourse',
  'tr_annualMeeting',
  'tr_custom',
];

const AddEvent = ({
  data = [{}],
  titleTextKey = 'tr_addUpcomingEvent',
  onDone,
  onCancel,
}: AddEventProps) => {
  const { t } = useAppTranslation();

  const {
    updateValues,
    removeValues,
    handleCancel,
    handleDone,
    addValues,
    values,
  } = useAddEvents({ data, titleTextKey, onDone, onCancel });

  return (
    <StyledCardBox>
      <span className="h2" style={{ color: 'var(--black)' }}>
        {t(titleTextKey)}
      </span>
      <VerticalFlex>
        {values.map((value, index) => (
          <EventFields
            key={index}
            values={value}
            setValues={(data: EventValues) => updateValues(index, data)}
            addValues={addValues}
            removeValues={() => removeValues(index)}
          />
        ))}
      </VerticalFlex>
      <HorizontalFlex sx={{ justifyContent: 'flex-end' }}>
        <Button variant="secondary" color="red" onClick={handleCancel}>
          <IconClose sx={{ marginRight: '8px' }} />
          {t('tr_cancel')}
        </Button>
        <Button variant="secondary" onClick={handleDone}>
          <IconCheck sx={{ marginRight: '8px' }} />
          {t('tr_done')}
        </Button>
      </HorizontalFlex>
    </StyledCardBox>
  );
};

const EventFields = ({
  values,
  setValues,
  addValues,
  removeValues,
}: {
  values: EventValues;
  setValues: (data: EventValues) => void;
  addValues: () => void;
  removeValues: () => void;
}) => {
  const { t } = useAppTranslation();

  return (
    <VerticalFlex
      sx={{
        paddingBlock: '16px',
        borderBottom: '1px solid var(--accent-200)',
        '&:not(:last-child) #add-btn': {
          display: 'none',
        },
      }}
    >
      <HorizontalFlex>
        <DatePicker
          view="input"
          label={t('tr_date')}
          value={values.date ?? null}
          onChange={(value) => setValues({ ...values, date: value })}
        />
        <TimePicker
          ampm
          label={t('tr_timerLabelTime')}
          value={values.time ?? null}
          onChange={(value) => setValues({ ...values, time: value })}
          sx={{
            flexBasis: 'unset',
            flexGrow: 'unset',
            flexShrink: 'unset',
            '.MuiInputBase-root': {
              height: '48px !important',
            },
            '.MuiFormLabel-root[data-shrink=false]': {
              top: '-3px !important',
            },
          }}
        />
        <Select
          label={t('tr_eventType')}
          value={values.type ?? 'tr_circuitOverseerWeek'}
          onChange={(event) =>
            setValues({ ...values, type: event.target.value as eventValue })
          }
          sx={{
            '.MuiInputBase-root': {
              height: '48px',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem value={option} key={option}>
              <HorizontalFlex sx={{ gap: '8px' }}>
                <EventIcon type={option} color={'var(--black)'} />
                <span style={{ color: 'var(--black)' }}>{t(option)}</span>
              </HorizontalFlex>
            </MenuItem>
          ))}
        </Select>
      </HorizontalFlex>
      <HorizontalFlex
        sx={{
          '@media (max-width: 700px)': {
            flexDirection: 'column',
          },
        }}
      >
        {values.type === 'tr_custom' && (
          <TextField
            sx={{ input: { color: 'var(--black) !important' } }}
            label={t('tr_custom')}
            value={values.custom ?? ''}
            onChange={(event) =>
              setValues({ ...values, custom: event.target.value })
            }
          />
        )}
        <TextField
          sx={{ input: { color: 'var(--black) !important' } }}
          label={t('tr_additionalInfo')}
          value={values.description ?? ''}
          onChange={(event) =>
            setValues({ ...values, description: event.target.value })
          }
        />
      </HorizontalFlex>
      <HorizontalFlex sx={{ justifyContent: 'space-between' }}>
        <Button
          sx={{ minHeight: 'auto' }}
          variant="small"
          color="red"
          onClick={removeValues}
        >
          <IconDelete sx={{ marginRight: '8px' }} />
          {t('tr_remove')}
        </Button>
        <Button sx={{ minHeight: 'auto' }} variant="small" onClick={addValues}>
          <IconAdd sx={{ marginRight: '8px' }} />
          {t('tr_add')}
        </Button>
      </HorizontalFlex>
    </VerticalFlex>
  );
};

export default AddEvent;
