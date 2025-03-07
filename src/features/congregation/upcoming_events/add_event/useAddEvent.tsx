import { useState } from 'react';
import { AddEventProps, EventValues } from './index.types';

const useAddEvents = (props: AddEventProps) => {
  const [values, setValues] = useState<EventValues[]>(props.data);

  const handleDone = () => {
    props.onDone?.(
      values.map((v) => ({
        type: v.type,
        description: v.description,
        time: v.time ? v.time.toLocaleTimeString() : '',
        title: v.type === 'tr_custom' ? v.custom : undefined,
      }))
    );
  };

  const handleCancel = () => props.onCancel && props.onCancel();

  const updateValues = (index: number, newData: EventValues) => {
    const newValues = [...values];
    newValues[index] = newData;
    setValues(newValues);
  };

  const addValues = () => setValues([...values, {}]);

  const removeValues = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
    if (newValues.length === 0) {
      handleDone();
    }
  };

  return {
    handleDone,
    handleCancel,
    updateValues,
    addValues,
    removeValues,
  };
};

export default useAddEvents;
