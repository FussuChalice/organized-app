import { useEffect, useState } from 'react';
import { UpcomingEventsListProps } from './index.types';
import { UpcomingEventType } from '@definition/upcoming_events';

const useUpcomingEventsList = ({ data }: UpcomingEventsListProps) => {
  const [eventsSortedByYear, setEventsSortedByYear] = useState([[]]);
  const [isDeleted, setIsDeleted] = useState<boolean[]>([]);

  const sortEventsByYear = (events: UpcomingEventType[]) => {
    if (events.length === 0) {
      return [[]];
    }

    const tmpStack: Record<number, UpcomingEventType[]> = {};

    events.forEach((event) => {
      if (!event.event_data.date) {
        return;
      }
      const year = new Date(event.event_data.date).getFullYear();

      if (!tmpStack[year]) {
        tmpStack[year] = [];
      }

      tmpStack[year].push(event);
    });

    const keys = Object.keys(tmpStack);

    if (keys.length === 0) {
      return [[]];
    } else if (keys.length === 1) {
      return keys.map((year) => tmpStack[Number(year)]);
    } else {
      return keys
        .toSorted((a, b) => Number(a) - Number(b))
        .map((year) => tmpStack[Number(year)]);
    }
  };

  useEffect(() => {
    setEventsSortedByYear(sortEventsByYear(data));
  }, [data]);

  useEffect(() => {
    setIsDeleted(
      eventsSortedByYear.map((events_group) =>
        events_group.every((event) => event?._deleted)
      )
    );
  }, [eventsSortedByYear]);

  return {
    eventsSortedByYear,
    isDeleted,
  };
};

export default useUpcomingEventsList;
