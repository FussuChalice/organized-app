export type SettingsType = {
  id: number;
  firstname: string;
  lastname: string;
  source_lang: string;
  cong_number: string;
  cong_name: string;
  cong_code: string;
  cong_new: boolean;
  cong_role: [];
  class_count: number;
  midweek_meeting_day: number;
  meeting_time: Date;
  user_avatar: Blob;
  co_name: string;
  co_displayName: string;
  autoBackup: false;
  autoBackup_interval: number;
  schedule_useFullname: boolean;
  account_type: string;
  opening_prayer_MM_autoAssign: boolean;
  user_local_uid: string;
  user_members_delegate: [];
  opening_prayer_WM_autoAssign: boolean;
  weekend_meeting_day: boolean;
  midweek_meeting_useExactDate: boolean;
  weekend_meeting_useSubstituteSpeaker: boolean;
};

export type BackupDataType = {
  dbPersons?: [];
  dbDeleted?: [];
  dbSourceMaterial?: [];
  dbSchedule?: object[];
  dbPublicTalks?: [];
  dbVisitingSpeakers?: [];
  dbBranchReportsTbl?: [];
  dbFieldServiceGroupTbl?: [];
  dbFieldServiceReportsTbl?: [];
  dbLateReportsTbl?: [];
  dbMeetingAttendanceTbl?: [];
  dbMinutesReportsTbl?: [];
  dbServiceYearTbl?: [];
  dbUserBibleStudiesTbl?: [];
  dbUserFieldServiceReportsTbl?: [];
  dbSettings?: object[];
};
