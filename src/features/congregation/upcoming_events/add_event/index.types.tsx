import { EventType, eventValue } from '../index.types';

// Should look the same as EventType
// But this contain the date, and title is named "custom"
export interface EventValues {
  date?: Date | null;
  time?: Date | null;
  type?: eventValue;
  custom?: string;
  description?: string;
}

export type AddEventProps = {
  data?: EventValues[];
  titleTextKey?: string;
  onDone?: (data: EventType[]) => void;
  onCancel?: () => void;
};
