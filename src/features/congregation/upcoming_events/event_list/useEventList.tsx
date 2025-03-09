import { useState } from 'react';
import { EventValues } from '../index.types';

const useEventList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<EventValues[]>();

  const handleEditDone = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleEdit = (event: EventValues[]) => {
    if (!isEditing) {
      setEditData([...event]);
      setIsEditing(true);
    } else {
      handleCancelEdit();
      setTimeout(() => {
        setEditData([...event]);
        setIsEditing(true);
      }, 0);
    }
  };

  return {
    editData,
    isEditing,
    handleEdit,
    handleCancelEdit,
    handleEditDone,
  };
};

export default useEventList;
