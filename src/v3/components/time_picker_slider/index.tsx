import { Box, IconButton, Typography } from '@mui/material';
import { CPETimePickerSliderProps } from './time_picker_slider.types';
import {
  ActiveCaseFilter,
  CASE_SIZE,
  CaseContainerStyle,
  TimePickerArrowStyle,
  TimePickerCaseStyle,
  TimePickerContainerStyle,
  TimePickerSelectorStyle,
  TimePickerTypography,
} from './time_picker.styles';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

/**
 * Context for TimePickerSlider to manage state and communication between components.
 */
const TimePickerSliderContext = createContext(null);

/**
 * Represents a single time value in the TimePicker slider.
 *
 * @param props - The properties for the TimePickerCase component.
 * @returns A single time value component.
 */
const TimePickerCase = ({ value }: { value: number }) => {
  return (
    <Box sx={TimePickerCaseStyle}>
      <Typography variant="body1" component="span" sx={TimePickerTypography}>
        {value.toString().padStart(2, '0')}
      </Typography>
    </Box>
  );
};

/**
 * Component for rendering hours in the TimePicker slider.
 *
 * @param props - The properties for the TimePickerHourCases component.
 * @returns A component for rendering hours in the TimePicker slider.
 */
const TimePickerHourCases = ({ ampm }: { ampm: boolean }) => {
  const hours = [];
  const maxHours = ampm ? 12 : 24;

  for (let h = -1; h <= maxHours; h++) {
    const value = (h + maxHours) % maxHours;
    hours.push(<TimePickerCase key={h} value={value} />);
  }

  return <>{hours}</>;
};

/**
 * Component for rendering minutes in the TimePicker slider.
 *
 * @returns A component for rendering minutes in the TimePicker slider.
 */
const TimePickerMinutesCases = () => {
  const minutes = [];
  for (let m = -1; m < 61; m++) {
    const value = (m + 60) % 60;
    minutes.push(<TimePickerCase key={m} value={value} />);
  }

  return <>{minutes}</>;
};

/**
 * Selector component for TimePickerSlider to scroll through time options.
 *
 * @param props - The properties for the TimePickerSelector component.
 * @returns A selector component for TimePickerSlider.
 */
const TimePickerSelector = ({ children, variant }: { children: React.ReactNode; variant: 'minutes' | 'hours' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { setTimePickerSliderData } = useContext(TimePickerSliderContext);

  const disactiveBox = (box: Element) => {
    if (box.firstElementChild) (box.firstElementChild as HTMLElement).style.color = 'var(--grey-200)';
  };
  const activeBox = (box: Element) => {
    if (box.firstElementChild) (box.firstElementChild as HTMLElement).style.color = 'var(--accent-dark)';
  };

  // Add active class to the center box
  const updateActiveBox = useCallback(() => {
    const container = containerRef.current;
    const scrollPosition = container.scrollTop;

    const boxes = container.children;
    const centerBox = boxes[Math.round(scrollPosition / CASE_SIZE) + 1];

    for (let index = 0; index < boxes.length; index++) {
      disactiveBox(boxes[index]);
    }
    activeBox(centerBox);

    if (variant === 'hours') {
      setTimePickerSliderData((prev) => ({
        ...prev,
        hours: centerBox.textContent,
      }));
    } else {
      setTimePickerSliderData((prev) => ({
        ...prev,
        minutes: centerBox.textContent,
      }));
    }
  }, [setTimePickerSliderData, variant]);

  // Scroll [unit] case up or down
  const scroll = (unit: number) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollHeight = container.scrollHeight;
    const scrollPosition = container.scrollTop;
    const maxScroll = scrollHeight - container.clientHeight;

    let newScrollPosition = scrollPosition + unit * CASE_SIZE;

    if (newScrollPosition < 0) {
      newScrollPosition = maxScroll;
    } else if (newScrollPosition > maxScroll) {
      newScrollPosition = 0;
    }

    container.scrollTo({ top: newScrollPosition, behavior: 'instant' });
  };

  useEffect(updateActiveBox, [updateActiveBox]);

  return (
    <Box sx={TimePickerSelectorStyle}>
      <Box sx={ActiveCaseFilter}></Box>
      <IconButton onClick={() => scroll(-1)} style={TimePickerArrowStyle}>
        <KeyboardArrowUp />
      </IconButton>

      <div ref={containerRef} style={CaseContainerStyle} onScroll={updateActiveBox}>
        {children}
      </div>

      <IconButton onClick={() => scroll(1)} style={TimePickerArrowStyle}>
        <KeyboardArrowDown />
      </IconButton>
    </Box>
  );
};

/**
 * Component for rendering the hour selector in the TimePickerSlider.
 *
 * @param props - The properties for the TimePickerHours component.
 * @returns A component for rendering the hour selector.
 */
const TimePickerHours = ({ ampm }: { ampm: boolean }) => {
  return (
    <TimePickerSelector variant="hours">
      <TimePickerHourCases ampm={ampm} />
    </TimePickerSelector>
  );
};

/**
 * Component for rendering the minute selector in the TimePickerSlider.
 *
 * @returns A component for rendering the minute selector.
 */
const TimePickerMinutes = () => {
  return (
    <TimePickerSelector variant="minutes">
      <TimePickerMinutesCases />
    </TimePickerSelector>
  );
};

/**
 * Component for selecting time using a slider interface.
 *
 * @param props - The properties for the CPETimePickerSlider component.
 * @returns A component for selecting time using a slider interface.
 */
const CPETimePickerSlider = ({ ampm, onChange }: CPETimePickerSliderProps) => {
  const [timePickerSliderData, setTimePickerSliderData] = useState({
    hours: '00',
    minutes: '00',
  });

  const convertToSeconds = (hours: string, minutes: string): number => {
    const hoursInSeconds = parseInt(hours) * 3600;
    const minutesInSeconds = parseInt(minutes) * 60;
    return hoursInSeconds + minutesInSeconds;
  };

  useEffect(() => {
    onChange(convertToSeconds(timePickerSliderData.hours, timePickerSliderData.minutes));
  }, [onChange, timePickerSliderData]);

  const contextValue = useMemo(
    () => ({
      timePickerSliderData,
      setTimePickerSliderData,
    }),
    [timePickerSliderData]
  );

  return (
    <TimePickerSliderContext.Provider value={contextValue}>
      <Box sx={TimePickerContainerStyle}>
        <TimePickerHours ampm={ampm} />

        <Box sx={{ width: CASE_SIZE, display: 'flex', justifyContent: 'center' }}>
          <Typography sx={TimePickerTypography}>:</Typography>
        </Box>

        <TimePickerMinutes />
      </Box>
    </TimePickerSliderContext.Provider>
  );
};

export default CPETimePickerSlider;
