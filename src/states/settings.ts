/*
This file holds the source of the truth from the table "settings".
Individual property are evaluated using recoil selector
*/

import { atom, selector } from 'recoil';
import { settingSchema } from '@services/dexie/schema';
import { buildPersonFullname } from '@utils/common';
import { currentServiceYear } from '@utils/date';
import {
  FullnameOption,
  PublishersSortOption,
  SourceFrequency,
} from '@definition/settings';
import { LANGUAGE_LIST } from '@constants/index';
import { AssignmentFieldType } from '@definition/assignment';

export const settingsState = atom({
  key: 'settings',
  default: settingSchema,
});

// CONGREGATION SETTINGS
export const congNumberState = selector({
  key: 'congNumber',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.cong_number;
  },
});

export const congNameState = selector({
  key: 'congName',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.cong_name;
  },
});

export const congFullnameState = selector({
  key: 'congFullname',
  get: ({ get }) => {
    const congName = get(congNameState);
    const congNumber = get(congNumberState);

    return `${congName}, ${congNumber}`;
  },
});

export const circuitNumberState = selector({
  key: 'circuitNumber',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    const circuit = settings.cong_settings.cong_circuit.find(
      (record) => record.type === dataView
    );

    return circuit?.value || '';
  },
});

export const countryCodeState = selector({
  key: 'countryCode',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.country_code;
  },
});

export const congMasterKeyState = selector({
  key: 'congMasterKey',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.cong_master_key;
  },
});

export const congAccessCodeState = selector({
  key: 'congAccessCode',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.cong_access_code;
  },
});

export const congNewState = selector({
  key: 'congNew',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.cong_new;
  },
});

export const congRoleState = selector({
  key: 'congRole',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.cong_role;
  },
});

export const fullnameOptionState = selector({
  key: 'fullnameOption',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.fullname_option.find(
        (record) => record.type === dataView
      )?.value || FullnameOption.FIRST_BEFORE_LAST
    );
  },
});

export const shortDateFormatState = selector({
  key: 'shortDateFormat',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.short_date_format.find(
        (record) => record.type === dataView
      )?.value || 'MM/dd/yyyy'
    );
  },
});

export const hour24FormatState = selector({
  key: 'hour24Format',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.format_24h_enabled.find(
        (record) => record.type === dataView
      )?.value ?? true
    );
  },
});

export const COFirstnameState = selector({
  key: 'coDisplayName',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.circuit_overseer.firstname.value;
  },
});

export const COLastnameState = selector({
  key: 'COLastname',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.circuit_overseer.lastname.value;
  },
});

export const CODisplayNameState = selector({
  key: 'COLastnameState',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.circuit_overseer.display_name.value;
  },
});

export const COFullnameState = selector({
  key: 'COLFullname',
  get: ({ get }) => {
    const firstname = get(COFirstnameState);
    const lastname = get(COLastnameState);
    const fullnameOption = get(fullnameOptionState);

    const fullname = buildPersonFullname(lastname, firstname, fullnameOption);

    return fullname;
  },
});

export const COScheduleNameState = selector({
  key: 'COScheduleName',
  get: ({ get }) => {
    const fullname = get(COFullnameState);
    const displayName = get(CODisplayNameState);
    const useDisplayName = get(displayNameMeetingsEnableState);

    const scheduleName = useDisplayName ? displayName : fullname;

    return scheduleName;
  },
});

export const secretaryRoleState = selector({
  key: 'secretaryRole',
  get: ({ get }) => {
    const congRole = get(congRoleState);
    return congRole.includes('secretary');
  },
});

export const coordinatorRoleState = selector({
  key: 'coordinatorRole',
  get: ({ get }) => {
    const congRole = get(congRoleState);
    return congRole.includes('coordinator');
  },
});

export const adminRoleState = selector({
  key: 'adminRole',
  get: ({ get }) => {
    const congRole = get(congRoleState);
    const secretaryRole = get(secretaryRoleState);
    const coordinatorRole = get(coordinatorRoleState);

    return congRole.includes('admin') || coordinatorRole || secretaryRole;
  },
});

export const pioneerRoleState = selector({
  key: 'pioneerRole',
  get: ({ get }) => {
    const congRole = get(congRoleState);
    return congRole.some((role) => role.includes('pioneer'));
  },
});

export const congDiscoverableState = selector({
  key: 'congDiscoverable',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.cong_discoverable.value;
  },
});

export const displayNameMeetingsEnableState = selector({
  key: 'displayNameMeetingsEnable',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    if (!Array.isArray(settings.cong_settings.display_name_enabled)) {
      return settings.cong_settings.display_name_enabled['meetings']['value'];
    }

    return (
      settings.cong_settings.display_name_enabled.find(
        (record) => record.type === dataView
      )?.meetings ?? false
    );
  },
});

export const JWLangState = selector({
  key: 'JWLang',
  get: ({ get }) => {
    const settings = get(settingsState);
    const sourceLanguages = get(sourceLanguagesState);
    const dataView = settings.user_settings.data_view;

    if (!settings.cong_settings.source_material) return 'E';

    return (
      sourceLanguages.find((record) => record.type === dataView)?.value || 'E'
    );
  },
});

export const JWLangLocaleState = selector({
  key: 'JWLangLocale',
  get: ({ get }) => {
    const JWLang = get(JWLangState);

    const locale =
      LANGUAGE_LIST.find((record) => record.code.toUpperCase() === JWLang)
        ?.threeLettersCode || 'eng';

    return locale;
  },
});

export const sourcesJWAutoImportState = selector({
  key: 'sourcesJWAutoImport',
  get: ({ get }) => {
    const settings = get(settingsState);

    return (
      settings.cong_settings.source_material?.auto_import.enabled.value ?? true
    );
  },
});

export const sourcesJWAutoImportFrequencyState = selector({
  key: 'sourcesJWAutoImportFrequency',
  get: ({ get }) => {
    const settings = get(settingsState);

    return (
      settings.cong_settings.source_material?.auto_import.frequency.value ||
      SourceFrequency.BIWEEKLY
    );
  },
});

export const attendanceOnlineRecordState = selector({
  key: 'attendanceOnlineRecord',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    if (!Array.isArray(settings.cong_settings.attendance_online_record)) {
      return settings.cong_settings.attendance_online_record['value'];
    }

    return (
      settings.cong_settings.attendance_online_record.find(
        (record) => record.type === dataView
      )?.value ?? false
    );
  },
});

export const congAddressState = selector({
  key: 'congAddress',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.cong_location.address;
  },
});

export const congCountryState = selector({
  key: 'congCountry',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.country_code;
  },
});

export const congSpecialMonthsState = selector({
  key: 'congSpecialMonths',
  get: ({ get }) => {
    const settings = get(settingsState);

    const result = settings.cong_settings.special_months.filter((record) => {
      if (record._deleted) return false;

      const currentYear = currentServiceYear();
      const previousYear = String(+currentYear - 1);

      return record.year >= previousYear;
    });

    return result.sort((a, b) => a.year.localeCompare(b.year));
  },
});

export const congDataSyncState = selector({
  key: 'congDataSync',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.cong_settings.data_sync.value;
  },
});

export const languageGroupEnabledState = selector({
  key: 'languageGroupEnabledState',
  get: ({ get }) => {
    const settings = get(settingsState);

    if (Array.isArray(settings.cong_settings.language_groups)) {
      return false;
    }

    return settings.cong_settings.language_groups.enabled.value;
  },
});

export const languageGroupsState = selector({
  key: 'languageGroups',
  get: ({ get }) => {
    const settings = get(settingsState);

    if (Array.isArray(settings.cong_settings.language_groups)) {
      return [];
    }

    return settings.cong_settings.language_groups.groups
      .filter((record) => !record._deleted)
      .sort((a, b) => a.name.localeCompare(b.name));
  },
});

export const sourceLanguagesState = selector({
  key: 'sourceLanguages',
  get: ({ get }) => {
    const settings = get(settingsState);

    if (!settings.cong_settings.source_material) {
      return [];
    }

    return settings.cong_settings.source_material.language.filter(
      (record) => !record._deleted
    );
  },
});

// MIDWEEK MEETING

export const midweekMeetingClassCountState = selector({
  key: 'midweekMeetingClassCount',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return settings.cong_settings.midweek_meeting.find(
      (record) => record.type === dataView
    ).class_count.value;
  },
});

export const midweekMeetingWeekdayState = selector({
  key: 'midweekMeetingWeekday',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.midweek_meeting.find(
        (record) => record.type === dataView
      )?.weekday.value ?? 2
    );
  },
});

export const midweekMeetingTimeState = selector({
  key: 'midweekMeetingTime',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.midweek_meeting.find(
        (record) => record.type === dataView
      )?.time.value || '18:00'
    );
  },
});

export const midweekMeetingOpeningPrayerLinkedState = selector<
  AssignmentFieldType | ''
>({
  key: 'midweekMeetingOpeningPrayerLinked',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    const assignment =
      settings.cong_settings.midweek_meeting.find(
        (record) => record.type === dataView
      )?.opening_prayer_linked_assignment?.value || '';

    return assignment;
  },
});

export const midweekMeetingClosingPrayerLinkedState = selector<
  AssignmentFieldType | ''
>({
  key: 'midweekMeetingClosingPrayerLinked',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    const assignment =
      settings.cong_settings.midweek_meeting.find(
        (record) => record.type === dataView
      )?.closing_prayer_linked_assignment?.value || '';

    return assignment;
  },
});

export const meetingExactDateState = selector({
  key: 'meetingExactDate',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    if (!Array.isArray(settings.cong_settings.schedule_exact_date_enabled)) {
      return settings.cong_settings.schedule_exact_date_enabled['value'];
    }

    return (
      settings.cong_settings.schedule_exact_date_enabled.find(
        (record) => record.type === dataView
      )?.value ?? false
    );
  },
});

export const midweekMeetingAuxCounselorDefaultEnabledState = selector({
  key: 'midweekMeetingAuxCounselorDefaultEnabled',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.midweek_meeting.find(
        (record) => record.type === dataView
      )?.aux_class_counselor_default.enabled.value ?? false
    );
  },
});

export const midweekMeetingAuxCounselorDefaultState = selector({
  key: 'midweekMeetingAuxCounselorDefault',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.midweek_meeting.find(
        (record) => record.type === dataView
      )?.aux_class_counselor_default.person.value || ''
    );
  },
});

export const midweekMeetingAssigFSGState = selector({
  key: 'midweekMeetingAssigFSG',
  get: ({ get }) => {
    const settings = get(settingsState);
    return settings.cong_settings.aux_class_fsg?.value ?? false;
  },
});

// WEEKEND MEETING

export const weekendMeetingOpeningPrayerAutoAssignState = selector({
  key: 'weekendMeetingOpeningPrayerAutoAssign',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return settings.cong_settings.weekend_meeting.find(
      (record) => record.type === dataView
    ).opening_prayer_auto_assigned.value;
  },
});

export const weekendMeetingWeekdayState = selector({
  key: 'weekendMeetingWeekday',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.weekend_meeting.find(
        (record) => record.type === dataView
      )?.weekday.value ?? 6
    );
  },
});

export const weekendMeetingSubstituteSpeakerState = selector({
  key: 'weekendMeetingSubstituteSpeaker',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return settings.cong_settings.weekend_meeting.find(
      (record) => record.type === dataView
    ).substitute_speaker_enabled.value;
  },
});

export const weekendMeetingWTSubstituteDisplayedState = selector({
  key: 'weekendMeetingWTSubstituteDisplayed',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.weekend_meeting.find(
        (record) => record.type === dataView
      )?.substitute_w_study_conductor_displayed.value ?? false
    );
  },
});

export const weekendMeetingWTStudyConductorDefaultState = selector({
  key: 'weekendMeetingWTStudyConductorDefault',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.weekend_meeting.find(
        (record) => record.type === dataView
      )?.w_study_conductor_default.value || ''
    );
  },
});

export const weekendMeetingShowMonthlyWarningState = selector({
  key: 'weekendMeetingShowMonthlyWarning',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.weekend_meeting.find(
        (record) => record.type === dataView
      )?.consecutive_monthly_parts_notice_shown.value ?? false
    );
  },
});

export const weekendMeetingTimeState = selector({
  key: 'weekendMeetingTime',
  get: ({ get }) => {
    const settings = get(settingsState);
    const dataView = get(userDataViewState);

    return (
      settings.cong_settings.weekend_meeting.find(
        (record) => record.type === dataView
      )?.time.value || '08:00'
    );
  },
});

// USER SETTINGS

export const userDataViewState = selector({
  key: 'userDataView',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.data_view;
  },
});

export const firstnameState = selector({
  key: 'firstname',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.firstname.value;
  },
});

export const lastnameState = selector({
  key: 'lastname',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.lastname.value;
  },
});

export const fullnameState = selector({
  key: 'fullname',
  get: ({ get }) => {
    const firstname = get(firstnameState);
    const lastname = get(lastnameState);
    const fullnameOption = get(fullnameOptionState);

    const fullname = buildPersonFullname(lastname, firstname, fullnameOption);

    return fullname;
  },
});

export const userAvatarState = selector({
  key: 'userAvatar',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.user_avatar;
  },
});

export const userAvatarUrlState = selector({
  key: 'userAvatarUrl',
  get: ({ get }) => {
    const avatarBuffer = get(userAvatarState);

    let src = '';

    if (avatarBuffer) {
      const blob = new Blob([avatarBuffer]);
      src = URL.createObjectURL(blob);
    }

    return src;
  },
});

export const backupAutoState = selector({
  key: 'backupAuto',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.backup_automatic.enabled.value;
  },
});

export const backupIntervalState = selector({
  key: 'backupInterval',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.backup_automatic.interval.value;
  },
});

export const accountTypeState = selector({
  key: 'accountType',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.account_type;
  },
});

export const userLocalUIDState = selector({
  key: 'userLocalUID',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.user_local_uid || '';
  },
});

export const userMembersDelegateState = selector({
  key: 'userMembersDelegate',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.user_members_delegate || [];
  },
});

export const themeFollowOSEnabledState = selector({
  key: 'themeFollowOSEnabled',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.theme_follow_os_enabled.value;
  },
});

export const hoursCreditsEnabledState = selector({
  key: 'hoursCreditsEnabled',
  get: ({ get }) => {
    const settings = get(settingsState);

    return settings.user_settings.hour_credits_enabled.value;
  },
});

export const publishersSortState = selector({
  key: 'publishersSort',
  get: ({ get }) => {
    const settings = get(settingsState);

    return (
      settings.cong_settings.group_publishers_sort?.value ??
      PublishersSortOption.MANUAL
    );
  },
});
