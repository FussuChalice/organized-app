import { EventType, EventValues } from '../index.types';

export type AddEventProps = {
  data?: EventValues[];
  titleTextKey?: string;
  onDone?: (data: EventType[]) => void;
  onCancel?: () => void;
};
