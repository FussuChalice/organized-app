import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { personCurrentDetailsState } from '@states/persons';
import { setPersonCurrentDetails } from '@services/recoil/persons';
import { computeYearsDiff, dateFirstDayMonth } from '@utils/date';
import { formatDate } from '@services/dateformat';
import { PersonType } from '@definition/person';

const useBaptizedPublisher = () => {
  const { id } = useParams();
  const isAddPerson = id === undefined;

  const person = useRecoilValue(personCurrentDetailsState);

  const [age, setAge] = useState('0');
  const [isExpanded, setIsExpanded] = useState(false);

  const activeHistory = person.publisher_baptized.history.filter((record) => record._deleted === null);

  const isActive = activeHistory.find((record) => record.end_date.value === null) ? true : false;

  const handleToggleExpand = () => setIsExpanded((prev) => !prev);

  const handleToggleActive = async () => {
    const newPerson: PersonType = structuredClone(person);

    if (isActive) {
      const activeRecord = newPerson.publisher_baptized.history.find((record) => record.end_date.value === null);

      const start_date = formatDate(new Date(activeRecord.start_date.value), 'MM/dd/yyyy');
      const nowDate = formatDate(new Date(), 'MM/dd/yyyy');

      if (start_date === nowDate) {
        if (isAddPerson) {
          newPerson.publisher_baptized.history = newPerson.publisher_baptized.history.filter(
            (record) => record.id !== activeRecord.id
          );
        }

        if (!isAddPerson) {
          activeRecord._deleted = new Date().toISOString();
        }
      }

      if (start_date !== nowDate) {
        activeRecord.end_date.value = new Date().toISOString();
        activeRecord.end_date.updatedAt = new Date().toISOString();
      }

      await setPersonCurrentDetails(newPerson);
    }

    if (!isActive) {
      await handleAddHistory();
    }
  };

  const handleFirstReportChange = async (value: Date | null) => {
    const newPerson = structuredClone(person);

    newPerson.first_month_report = {
      value: value === null ? null : value.toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setPersonCurrentDetails(newPerson);
  };

  const handleAddHistory = async () => {
    const newPerson = structuredClone(person);

    newPerson.publisher_baptized.history.push({
      id: crypto.randomUUID(),
      start_date: { value: dateFirstDayMonth().toISOString(), updatedAt: new Date().toISOString() },
      end_date: { value: null, updatedAt: new Date().toISOString() },
      _deleted: null,
    });

    await setPersonCurrentDetails(newPerson);
  };

  const handleDeleteHistory = async (id: string) => {
    const newPerson = structuredClone(person);

    if (!isAddPerson) {
      const current = newPerson.publisher_baptized.history.find((history) => history.id === id);
      current._deleted = new Date().toISOString();
    }

    if (isAddPerson) {
      newPerson.publisher_baptized.history = newPerson.publisher_baptized.history.filter((record) => record.id !== id);
    }

    await setPersonCurrentDetails(newPerson);
  };

  const handleStartDateChange = async (id: string, value: Date) => {
    const newPerson = structuredClone(person);

    const current = newPerson.publisher_baptized.history.find((history) => history.id === id);
    current.start_date = {
      value: value.toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setPersonCurrentDetails(newPerson);
  };

  const handleEndDateChange = async (id: string, value: Date | null) => {
    const newPerson = structuredClone(person);

    const current = newPerson.publisher_baptized.history.find((history) => history.id === id);
    current.end_date = {
      value: value === null ? null : value.toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setPersonCurrentDetails(newPerson);
  };

  const handleToggleHope = async (value) => {
    const newPerson = structuredClone(person);

    if (value === 'anointed') {
      newPerson.publisher_baptized.anointed.value = true;
      newPerson.publisher_baptized.anointed.updatedAt = new Date().toISOString();

      newPerson.publisher_baptized.other_sheep.value = false;
      newPerson.publisher_baptized.other_sheep.updatedAt = new Date().toISOString();
    }

    if (value === 'otherSheep') {
      newPerson.publisher_baptized.anointed.value = false;
      newPerson.publisher_baptized.anointed.updatedAt = new Date().toISOString();

      newPerson.publisher_baptized.other_sheep.value = true;
      newPerson.publisher_baptized.other_sheep.updatedAt = new Date().toISOString();
    }

    await setPersonCurrentDetails(newPerson);
  };

  const handleChangeBaptismDate = async (value: Date) => {
    const newPerson = structuredClone(person);

    newPerson.publisher_baptized.baptism_date.value = value === null ? null : new Date(value).toISOString();
    newPerson.publisher_baptized.baptism_date.updatedAt = new Date().toISOString();

    await setPersonCurrentDetails(newPerson);
  };

  useEffect(() => {
    if (person.publisher_baptized.baptism_date.value === null) {
      setAge('0');
    }

    if (person.publisher_baptized.baptism_date.value !== null) {
      const age = computeYearsDiff(person.publisher_baptized.baptism_date.value);
      setAge(age);
    }
  }, [person.publisher_baptized.baptism_date.value]);

  return {
    age,
    person,
    handleAddHistory,
    handleDeleteHistory,
    handleStartDateChange,
    handleEndDateChange,
    handleFirstReportChange,
    handleToggleHope,
    handleChangeBaptismDate,
    activeHistory,
    handleToggleExpand,
    isExpanded,
    isActive,
    handleToggleActive,
  };
};

export default useBaptizedPublisher;
