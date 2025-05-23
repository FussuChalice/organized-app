import { useState } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { UserFieldServiceDailyReportType } from '@definition/user_field_service_reports';
import { bibleStudyEditorOpenState } from '@states/user_bible_studies';
import { reportUserSelectedMonthState } from '@states/user_field_service_reports';
import { userLocalUIDState } from '@states/settings';
import useMinistryDailyRecord from '@features/ministry/hooks/useMinistryDailyRecord';
import useMinistryMonthlyRecord from '@features/ministry/hooks/useMinistryMonthlyRecord';

const useDailyRecord = (report: UserFieldServiceDailyReportType) => {
  const { fullDate, hours_credit, hours_field } =
    useMinistryDailyRecord(report);

  const setBibleStudyEditorOpen = useSetAtom(bibleStudyEditorOpenState);

  const selectedMonth = useAtomValue(reportUserSelectedMonthState);
  const userUID = useAtomValue(userLocalUIDState);

  const { status } = useMinistryMonthlyRecord({
    month: selectedMonth,
    publisher: true,
    person_uid: userUID,
  });

  const [showEdit, setShowEdit] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);

  const handleShowEdit = () => {
    if (editorOpen) {
      setShowEdit(false);
      return;
    }

    setShowEdit(true);
  };

  const handleHideEdit = () => {
    setShowEdit(false);
  };

  const handleOpenEditor = () => {
    setShowEdit(false);
    setEditorOpen(true);
  };
  const handleCloseEditor = () => {
    setTimeout(() => {
      setEditorOpen(false);
      setBibleStudyEditorOpen(false);
    }, 250);
  };

  return {
    fullDate,
    showEdit,
    handleShowEdit,
    handleHideEdit,
    editorOpen,
    handleOpenEditor,
    handleCloseEditor,
    hours_credit,
    status,
    hours_field,
  };
};

export default useDailyRecord;
