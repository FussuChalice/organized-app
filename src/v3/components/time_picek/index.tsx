import { DesktopTimePicker, LocalizationProvider, renderTimeViewClock } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, ClickAwayListener, Stack, TextFieldProps, useMediaQuery } from '@mui/material';
import { Button, TextField } from '@components';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CPETimePickerProps } from './time_picker.types';
import { StyledIconWrapper } from '../user_card/user_card.styles';
import { IconClock } from '@icons';
import { StyleTimePickerPaper, StyleTimePickerPopper, StyleTimePickerToolbar } from './time_picker.style';
import { useTranslation } from 'react-i18next';

const TimePickerInputField = (props: TextFieldProps & { setOpen?: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <TextField
      {...props}
      className={'body-regular'}
      endIcon={
        <StyledIconWrapper hoverBackgrColor="var(--accent-350-base)" iconColor="var(--accent-350)">
          <Box onClick={() => props.setOpen && props.setOpen((prev) => !prev)}>
            <IconClock />
          </Box>
        </StyledIconWrapper>
      }
    />
  );
};

const CPETimePicker = ({ ampm, label, initTime = null }: CPETimePickerProps) => {
  const { t } = useTranslation('ui');
  const [value, setValue] = useState<Date | null>(null);
  const [innerValue, setInnerValue] = useState<Date | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    if (initTime === null && open) setValue(new Date());
  }, [open]);

  const handleClickAway = () => {
    if (open) setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopTimePicker
            open={open}
            label={label}
            views={['hours', 'minutes']}
            orientation={isMobile ? 'portrait' : 'landscape'}
            value={value}
            ampm={ampm}
            onChange={setInnerValue}
            onOpen={() => setOpen(true)}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
            }}
            slots={{
              textField: TimePickerInputField,
              actionBar: () => (
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  p={'12px'}
                  style={{
                    gridRow: '3',
                    gridColumn: '1 / 3',
                  }}
                >
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setOpen(false);
                      setValue(initTime);
                    }}
                  >
                    {t('cancel')}
                  </Button>
                  <Button
                    variant="main"
                    onClick={() => {
                      setValue(innerValue);
                      setOpen(false);
                    }}
                  >
                    {t('save')}
                  </Button>
                </Stack>
              ),
            }}
            slotProps={{
              textField: {
                setOpen: setOpen,
                label: label,
                value: value,
              } as any,
              toolbar: {
                hidden: false,
                sx: {
                  ...StyleTimePickerToolbar,
                  maxWidth: isMobile ? 'none' : '250px',
                  '.MuiTimePickerToolbar-hourMinuteLabel': {
                    width: '100%',
                    height: isMobile ? '100%' : null,
                    marginTop: ampm ? 'auto' : 'unset',
                    span: {
                      color: 'var(--black)',
                      padding: '10px 0',
                    },
                  },
                  '.MuiTimePickerToolbar-ampmSelection': {
                    height: isMobile ? '100%' : null,
                    margin: isMobile ? null : '16px 0 auto',
                    '& > *:first-of-type': {
                      borderBottomLeftRadius: isMobile ? '0' : null,
                      borderBottomRightRadius: isMobile ? '0' : null,
                    },
                    '& > *:last-of-type': {
                      borderTop: isMobile ? '0' : null,
                      borderTopLeftRadius: isMobile ? '0' : null,
                      borderTopRightRadius: isMobile ? '0' : null,
                    },
                    button: {
                      border: '1px solid var(--accent-300)',
                      span: {
                        color: 'var(--accent-400)',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px',
                      },
                      minWidth: '52px',
                      height: '100%',
                    },
                  },
                },
              },
              desktopPaper: StyleTimePickerPaper,
              popper: {
                sx: {
                  ...StyleTimePickerPopper,
                  '.MuiPickersToolbar-content': {
                    flexWrap: isMobile ? 'nowrap' : 'wrap',
                    alignItems: ampm ? 'flex-start' : 'center',
                    minWidth: '216px',
                  },
                  '.MuiPickersLayout-contentWrapper': {
                    marginTop: isMobile ? '5px' : '40px',
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </ClickAwayListener>
  );
};

export default CPETimePicker;
