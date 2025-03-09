import { EventDateType, EventValues } from '../index.types';

export type EventDateProps = {
  eventDate: EventDateType;
  handleEdit: (event: EventValues[]) => void;
  isAdmin: boolean;
};
